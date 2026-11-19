import { readFileSync } from 'node:fs';
import assert from 'node:assert/strict';
import test from 'node:test';
import { JSDOM } from 'jsdom';

const read = path => readFileSync(new URL(path, import.meta.url), 'utf8');
const installed = JSON.parse(read('../src/data/mods.json'));

test('the mod index links every installed project and finds supporting mods', () => {
  const { window } = new JSDOM(read('../dist/mods/index.html'), {
    url: 'https://mikaaah.github.io/TownsAndKingdoms/mods/',
    runScripts: 'outside-only',
  });
  const { document } = window;
  const entries = document.querySelectorAll('[data-mod-name]');
  assert.equal(entries.length, installed.length);
  for (const mod of installed) {
    const entry = document.getElementById('mod-' + mod.id);
    const link = entry?.querySelector('a');
    assert.equal(link?.textContent, 'CurseForge', mod.name);
    assert.equal(link?.href, mod.url, mod.name);
  }

  const script = [...document.querySelectorAll('script[type="module"]:not([src])')]
    .find(element => element.textContent.includes('#mod-search'));
  assert.ok(script);
  window.eval(script.textContent);

  const supporting = installed.find(mod => mod.supporting);
  const supportEntry = document.getElementById('mod-' + supporting.id);
  assert.equal(supportEntry.closest('details').open, false);
  const field = document.getElementById('mod-search');
  const search = value => {
    field.value = value;
    field.dispatchEvent(new window.Event('input'));
  };
  search(supporting.slug);
  assert.equal(supportEntry.hidden, false);
  assert.equal(supportEntry.closest('details').open, true);
  for (const entry of entries) {
    if (!entry.hidden) assert.ok(entry.dataset.modName.includes(supporting.slug));
  }
  search('no-installed-mod-matches-this');
  assert.equal(document.getElementById('mod-empty').hidden, false);
  search('');
  assert.equal(supportEntry.closest('details').open, false);
  assert.equal([...entries].filter(entry => !entry.hidden).length, installed.length);
  window.close();
});
