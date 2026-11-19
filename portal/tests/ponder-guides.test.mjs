import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { JSDOM } from 'jsdom';
import { guideItems, initPonderGuides, matchesGuide } from '../src/scripts/ponder-guides.mjs';

const { scenes } = JSON.parse(readFileSync(new URL('../src/data/ponder.json', import.meta.url), 'utf8'));
const scene = slug => scenes.find(entry => entry.slug === slug);

test('Ponder guides retain item counts and distinguish references from recipe inputs', () => {
  const crushing = guideItems(scene('certus_dust').steps[0]);
  assert.deepEqual(crushing.map(item => [item.role, item.count, item.id]), [
    ['Input', '', 'ae2:certus_quartz_crystal'],
    ['Output', '2 × ', 'ae2:certus_quartz_dust'],
  ]);
  const ritual = guideItems(scene('witchery_circle_02').steps[0]);
  assert.deepEqual(ritual.map(item => [item.role, item.id]), [
    ['', 'minecraft:clock'],
    ['', 'minecraft:glowstone_dust'],
  ]);
});

test('Ponder guides find item names, exact IDs and caption text', () => {
  const guide = { title: 'Iron crushing', items: 'minecraft:raw_iron minecraft:raw_iron_block', names: 'Raw Iron Raw Iron Block' };
  assert(matchesGuide(guide, 'raw iron'));
  assert(matchesGuide(guide, 'minecraft:raw_iron'));
  assert(!matchesGuide(guide, 'othermod:raw_iron'));
  assert(!matchesGuide(guide, 'minecraft:iron'));
  const deploying = scene('rubber_curing_02');
  assert(!deploying.anchors.includes('create:deployer'));
  const machine = { title: deploying.title, items: deploying.blockIds.join(' '), names: '', captions: deploying.steps[0].text };
  assert(matchesGuide(machine, 'create:deployer'));
  assert(matchesGuide(machine, 'rubber is consumed'));
});

test('guide filters, selected guide URLs, and each numbered step work without a renderer', () => {
  const dom = new JSDOM(`
    <section data-ponder-guides>
      <div data-ponder-controls hidden>
        <input data-ponder-query>
        <select data-ponder-guide>
          <optgroup label="Materials">
            <option value="certus_dust" data-title="Certus Quartz" data-items="ae2:certus_quartz_dust" data-names="Certus Quartz Dust">Certus Quartz</option>
          </optgroup>
          <optgroup label="Tools">
            <option value="workshop_pencil" data-title="Measuring Pencil" data-items="tnkcore:measuring_pencil" data-names="Measuring Pencil">Measuring Pencil</option>
          </optgroup>
        </select>
        <p id="ponder-results"></p>
      </div>
      <p data-ponder-empty hidden></p>
      <article data-guide="certus_dust"><ol><li>Crush Certus Quartz.</li></ol></article>
      <article data-guide="workshop_pencil"><ol><li>Set the first corner.</li></ol></article>
    </section>`, { url: 'https://example.invalid/TownsAndKingdoms/ponder/?q=tnkcore%3Ameasuring_pencil' });
  const { document, Event, location } = dom.window;
  const root = document.querySelector('[data-ponder-guides]');
  initPonderGuides(root);
  const query = root.querySelector('input');
  const select = root.querySelector('select');
  assert.equal(select.value, 'workshop_pencil');
  assert.equal(root.querySelector('article:not([hidden]) li').textContent, 'Set the first corner.');
  assert.equal(root.querySelector('#ponder-results').textContent, '1 guide');
  query.value = 'unknown guide';
  query.dispatchEvent(new Event('input'));
  assert.equal(select.disabled, true);
  assert.equal(root.querySelector('[data-ponder-empty]').hidden, false);
  query.value = '';
  query.dispatchEvent(new Event('input'));
  select.value = 'certus_dust';
  select.dispatchEvent(new Event('change'));
  assert.equal(location.search, '?scene=certus_dust');
  assert.equal(root.querySelector('article:not([hidden]) li').textContent, 'Crush Certus Quartz.');
});
