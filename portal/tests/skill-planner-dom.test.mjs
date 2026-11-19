import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { basename } from 'node:path';
import { JSDOM } from 'jsdom';

const dist = new URL('../dist/', import.meta.url);

test('built planner previews a shortest route and allocates it as one undoable change', async () => {
  const html = readFileSync(new URL('skills/index.html', dist), 'utf8');
  const dom = new JSDOM(html, {
    url: 'https://mikaaah.github.io/TownsAndKingdoms/skills/',
    runScripts: 'outside-only',
    pretendToBeVisual: true,
  });
  const { window } = dom;
  const query = (selector) => window.document.querySelector(selector);
  const find = (field) => query(`[data-skill-${field}]`);
  const browserGlobals = {
    window,
    document: window.document,
    location: window.location,
    localStorage: window.localStorage,
    requestAnimationFrame: window.requestAnimationFrame.bind(window),
    ResizeObserver: class {
      observe() {}
      disconnect() {}
    },
  };
  const originals = Object.getOwnPropertyDescriptors(globalThis);

  try {
    Object.assign(globalThis, browserGlobals);
    const script = query('script[src*="/SkillPlanner.astro_"]');
    await import(new URL(`_astro/${basename(script.src)}`, dist).href);

    find('route-mode').click();
    const node = query('[data-node-id="alchemist_crafting_1"]');
    node.dispatchEvent(new window.KeyboardEvent('keydown', { key: 'Enter', bubbles: true }));
    assert.equal(find('route-mode').getAttribute('aria-pressed'), 'true');
    assert.equal(find('spent').textContent, '0');
    assert.match(find('route-description').textContent, /^2 points to allocate/);
    assert.equal(window.document.querySelectorAll('.sp-connection.is-route').length, 1);
    assert(node.classList.contains('is-route-target'));

    const level = find('level');
    level.value = '1';
    level.dispatchEvent(new window.Event('change'));
    assert.equal(find('route-apply').disabled, true);
    assert.match(find('route-description').textContent, /needs 1 point more/);
    level.value = '100';
    level.dispatchEvent(new window.Event('change'));

    find('route-apply').click();
    assert.equal(find('spent').textContent, '2');
    assert(node.classList.contains('is-allocated'));
    find('undo').click();
    assert.equal(find('spent').textContent, '0');
    assert(node.classList.contains('is-route-target'));
    assert(!node.classList.contains('is-allocated'));

    find('route-mode').click();
    assert.equal(find('route-panel').hidden, true);
    assert.equal(query('.sp-connection.is-route'), null);
  } finally {
    window.close();
    for (const key of Object.keys(browserGlobals)) {
      if (originals[key]) Object.defineProperty(globalThis, key, originals[key]);
      else delete globalThis[key];
    }
  }
});
