import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { JSDOM } from 'jsdom';

const portal = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = path.join(portal, 'public');
const built = process.argv.includes('--dist');
const output = built ? path.join(portal, 'dist') : publicRoot;
const compatibility = JSON.parse(await readFile(path.join(portal, 'legacy-compatibility.json'), 'utf8'));
const archive = JSON.parse(await readFile(path.join(portal, 'legacy-manifest.json'), 'utf8'));
const base = '/TownsAndKingdoms/';
const urls = new Set();
if (built) {
  for (const route of archive.tk2_routes) {
    const html = await readFile(path.join(output, route), 'utf8');
    const { window } = new JSDOM(html, { url: 'https://mikaaah.github.io' + base + route });
    try {
      for (const element of window.document.querySelectorAll('[href], [src]')) {
        const url = new URL(element.getAttribute('href') ?? element.getAttribute('src'), window.location.href);
        if (url.origin === window.location.origin && url.pathname.startsWith(base)) {
          urls.add(url.pathname.replace(/\/index\.html$/, '/'));
        }
      }
    } finally {
      window.close();
    }
  }
}
const search = JSON.parse(await readFile(path.join(publicRoot, 'assets/search.json'), 'utf8'));
for (const row of search) {
  const url = new URL(row.url || '', 'https://mikaaah.github.io' + base);
  if (url.origin === 'https://mikaaah.github.io' && url.pathname.startsWith(base)) urls.add(url.pathname);
}
async function exists(location) { try { return await stat(location); } catch { return null; } }
const unresolved = [];
for (const url of urls) {
  const relative = decodeURIComponent(url.slice(base.length));
  const candidate = path.join(output, relative, relative.endsWith('/') || !relative ? 'index.html' : '');
  if (await exists(candidate)) continue;
  if (!built) {
    const route = relative.replace(/\/$/, '');
    if (await exists(path.join(portal, 'src/pages', route ? route + '.astro' : 'index.astro'))) continue;
    if (archive.tk2_routes.includes(relative + 'index.html')) continue;
  }
  unresolved.push(url);
}
assert.deepEqual(unresolved, [], 'TK2 links or legacy search routes are unresolved');
for (const [from, to] of Object.entries(compatibility.aliases)) {
  const target = new URL(to, 'https://mikaaah.github.io' + base);
  const route = target.pathname.slice(base.length).replace(/\/$/, '');
  assert(await exists(path.join(portal, 'src/pages', route ? route + '.astro' : 'index.astro')), `Alias target is not canonical: ${from}`);
  const html = await readFile(path.join(output, from, 'index.html'), 'utf8');
  assert(html.includes('legacy-redirect.js'), `Alias script missing: ${from}`);
}
console.log(`Legacy link coverage passed: ${urls.size} unique URLs, ${Object.keys(compatibility.aliases).length} compatibility routes.`);
