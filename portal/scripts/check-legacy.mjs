import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { readFile, stat } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const portal = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repository = path.resolve(portal, '..');
const manifest = JSON.parse(await readFile(path.join(portal, 'legacy-manifest.json'), 'utf8'));
assert.equal(manifest.schema, 1);
const digest = bytes => createHash('sha256').update(bytes).digest('hex');
const roots = [path.join(portal, 'public')];
if (process.argv.includes('--dist')) {
  await stat(path.join(portal, 'dist'));
  roots.push(path.join(portal, 'dist'));
}
for (const [relative, expected] of Object.entries(manifest.archived_sources)) {
  assert.equal(digest(await readFile(path.join(repository, relative))), expected, `TK2 original changed: ${relative}`);
}
for (const root of roots) {
  for (const [relative, expected] of Object.entries(manifest.public_files)) {
    assert.equal(digest(await readFile(path.join(root, relative))), expected, `TK2 page or dependency changed: ${relative}`);
  }
  for (const [relative, target] of Object.entries(manifest.aliases)) {
    const html = await readFile(path.join(root, relative), 'utf8');
    assert(html.includes(`location.replace(${JSON.stringify(target)}+location.search+location.hash)`), `TK2 alias changed: ${relative}`);
    assert(target.startsWith('/TownsAndKingdoms/tk2/'), `TK2 alias leaves project base: ${target}`);
  }
}
console.log(`TK2 preservation passed: ${Object.keys(manifest.archived_sources).length} original documents, ${Object.keys(manifest.public_files).length} frozen public files, ${Object.keys(manifest.aliases).length} route aliases.`);
