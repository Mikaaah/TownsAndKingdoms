import assert from 'node:assert/strict';
import { readFile, readdir, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const portal = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const publicRoot = path.join(portal, 'public');
const output = process.argv.includes('--dist') ? path.join(portal, 'dist') : publicRoot;
const compatibility = JSON.parse(await readFile(path.join(portal, 'legacy-compatibility.json'), 'utf8'));
const base = '/TownsAndKingdoms/';
const urls = new Set();
async function walk(directory) {
  const all = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const location = path.join(directory, entry.name);
    if (entry.isDirectory()) all.push(...await walk(location));
    else all.push(location);
  }
  return all;
}
for (const file of await walk(path.join(publicRoot, 'tk2'))) {
  if (!file.endsWith('.html')) continue;
  const html = await readFile(file, 'utf8');
  for (const [, value] of html.matchAll(/(?:href|src)="([^"\s]+)"/g)) {
    const url = new URL(value.replaceAll('&amp;', '&'), 'https://mikaaah.github.io' + base);
    if (url.origin === 'https://mikaaah.github.io' && url.pathname.startsWith(base)) urls.add(url.pathname);
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
  if (!process.argv.includes('--dist')) {
    const route = relative.replace(/\/$/, '');
    if (await exists(path.join(portal, 'src/pages', route ? route + '.astro' : 'index.astro'))) continue;
  }
  unresolved.push(url);
}
assert.deepEqual(unresolved, [], 'Frozen TK2 links or search routes are unresolved');
for (const [from, to] of Object.entries(compatibility.aliases)) {
  const target = new URL(to, 'https://mikaaah.github.io' + base);
  const route = target.pathname.slice(base.length).replace(/\/$/, '');
  assert(await exists(path.join(portal, 'src/pages', route ? route + '.astro' : 'index.astro')), `Alias target is not canonical: ${from}`);
  const html = await readFile(path.join(output, from, 'index.html'), 'utf8');
  assert(html.includes('legacy-redirect.js'), `Alias script missing: ${from}`);
}
console.log(`Legacy link coverage passed: ${urls.size} unique frozen URLs, ${Object.keys(compatibility.aliases).length} compatibility routes.`);
