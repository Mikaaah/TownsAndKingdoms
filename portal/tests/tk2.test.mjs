import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';
import { JSDOM } from 'jsdom';
import { tk2Pages } from '../src/lib/tk2.mjs';

const base = '/TownsAndKingdoms/';

async function openPage(slug = '') {
  const route = slug ? `tk2/${slug}/` : 'tk2/';
  const html = await readFile(new URL(`../dist/${route}index.html`, import.meta.url), 'utf8');
  return new JSDOM(html, {url: 'https://mikaaah.github.io' + base + route});
}

test('TK2 articles use the matching edition navigation and archive links', async () => {
  for (const page of [{slug:''}, ...tk2Pages]) {
    const {window} = await openPage(page.slug);
    const {document} = window;
    try {
      const navigation = document.querySelector('#site-sidebar');
      assert.equal(document.body.dataset.edition, 'tk2');
      assert.equal(document.querySelector('.brand').getAttribute('href'), base + 'tk2/');
      assert.equal(navigation.querySelectorAll('[aria-current="page"]').length, 1);
      assert.equal(navigation.querySelectorAll('a[href^="/TownsAndKingdoms/tk2/"]').length, 9);
      assert.equal(navigation.querySelectorAll('a[href="/TownsAndKingdoms/"]').length, 1);
      assert.equal(document.querySelector('#global-search'), null);
      assert.equal(document.querySelectorAll('main h1').length, 1);
      if (page.source) assert(document.querySelector(`a[href$="/${encodeURIComponent(page.source)}"]`));
    } finally {
      window.close();
    }
  }
});

test('legacy section links and original TK2 content still resolve', async () => {
  const expectations = [
    ['features', 'automation', /11 tiers.*custom recipes/i],
    ['changelog', '--version-305', /Version 3\.05/],
    ['server-installation', 'running-your-server', /startserver\.sh/],
    ['a-new-world', '1201-quota-new-worldquot-update', /from its previous 1\.18\.2 version/],
  ];
  for (const [slug, anchor, copy] of expectations) {
    const {window} = await openPage(slug);
    try {
      assert(window.document.getElementById(anchor));
      assert.match(window.document.querySelector('main').textContent, copy);
    } finally {
      window.close();
    }
  }

  const {window} = await openPage('modlist');
  try {
    assert(window.document.querySelectorAll('[data-tk2-mod-list] li').length > 300);
  } finally {
    window.close();
  }
});
