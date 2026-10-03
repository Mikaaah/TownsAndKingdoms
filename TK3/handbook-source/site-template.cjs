const fs = require('fs');
const path = require('path');
const config = JSON.parse(fs.readFileSync(path.join(__dirname, 'site.config.json'), 'utf8'));
const escape = value => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const text = html => html.replace(/<[^>]*>/g, '').replaceAll('&amp;', '&').trim();
const slug = label => text(label).toLowerCase().replace(/[^\p{L}\p{N}\s_-]/gu, '').trim().replace(/\s+/g, '-');

module.exports = function createSite(context) {
  const values = {recipeCount: context.manifest.recipes.length, questCount: context.manifest.quest_count, chapterCount: context.manifest.chapters.length};
  const interpolate = string => String(string).replace(/\{\{(recipeCount|questCount|chapterCount)\}\}/g, (_, key) => values[key]);
  const prefixFor = route => '../'.repeat(route ? route.replace(/\/$/, '').split('/').length : 0);
  const metadata = (route, title, version) => ({title, summary: '', category: 'reference', version: version || '3.0', ...config.pages.find(page => page.route === route)});

  function sidebar(prefix, route, version) {
    const current = metadata(route, '', version);
    const groups = config.groups.filter(group => version === '2.0' ? group.id === 'legacy' : group.id !== 'legacy');
    return `<aside class="site-sidebar" id="site-navigation" aria-label="Guide navigation"><div class="sidebar-top"><span class="eyebrow">${version === '2.0' ? 'Legacy documentation' : 'T&K3 field guide'}</span><button class="menu-close icon-button" type="button" aria-label="Close navigation">×</button></div>${groups.map(group => `<details class="nav-group"${current.category === group.id || group.id === 'start' ? ' open' : ''}><summary>${escape(group.label)}</summary><nav aria-label="${escape(group.label)}">${config.pages.filter(page => page.category === group.id && page.menu !== false).map(page => `<a href="${prefix + page.route}"${page.route === route ? ' aria-current="page"' : ''}>${escape(page.title)}</a>`).join('')}</nav></details>`).join('')}<a class="sidebar-version" href="${prefix + (version === '2.0' ? '3.0/' : '2.0/')}"><span>${version === '2.0' ? 'Looking for the new pack?' : 'Looking for the previous pack?'}</span>${version === '2.0' ? 'Explore T&K3' : 'Open the T&K2 archive'} <span aria-hidden="true">→</span></a><a class="sidebar-feedback" href="${config.feedbackUrl}">Feedback & suggestions <span aria-hidden="true">↗</span></a></aside>`;
  }

  function normalise(content, route) {
    content = content.replace(/<div class="breadcrumb">[\s\S]*?<\/div>/g, '');
    content = content.replace(/<aside class="article-index"[\s\S]*?<\/aside>/g, '');
    content = content.replace(/<div class="article-layout"><article class="article-body">([\s\S]*?)<\/article><\/div>/g, '<article class="article-body">$1</article>');
    content = content.replace(/<h1\b[^>]*>[\s\S]*?<\/h1>/, '');
    content = content.replace(/^\s*<p class="eyebrow">[\s\S]*?<\/p>/, '');
    content = content.replace(/<h1\b/g, '<h2').replaceAll('</h1>', '</h2>');
    if (!route.startsWith('2.0/')) content = content.replace(/(?:\.\.\/)+progression\/#recipes/g, match => match.replace('progression/', 'recipes/')).replace(/(?:\.\.\/)+progression\/#chapters/g, match => match.replace('progression/', 'chapters/'));
    if (['workshop/','3.0/','2.0/'].includes(route)) content=content.replace(/^\s*<p class="lead">[\s\S]*?<\/p>/,'');
    if (route === 'workshop/' || route === 'recipes/') return content;
    const heads = [], used = new Set();
    content = content.replace(/<h([23])([^>]*)>([\s\S]*?)<\/h\1>/g, (_, level, attrs, body) => {
      let id = attrs.match(/\bid="([^"]+)"/)?.[1];
      if (!id) {const base = slug(body) || 'section'; id = base; let count = 2; while (used.has(id)) id = `${base}-${count++}`; attrs += ` id="${id}"`;}
      used.add(id); heads.push({id, level: Number(level), label: text(body)});
      return `<h${level}${attrs}>${body}</h${level}>`;
    });
    const major = heads.filter(heading => heading.level === 2);
    const tocHeads = major.length < 5 ? heads : major;
    if (tocHeads.length < 4 || route === '' || route === 'guides/' || route === '3.0/' || route === '2.0/') return content;
    const toc = `<aside class="page-toc" aria-label="On this page"><details open><summary>On this page</summary><nav>${tocHeads.map(heading => `<a href="#${escape(heading.id)}">${escape(heading.label)}</a>`).join('')}</nav></details></aside>`;
    return `<div class="reading-layout"><div class="reading-content">${content}</div>${toc}</div>`;
  }

  function shell(route, fallbackTitle, rawContent, version = '3.0', extra = '') {
    const page = metadata(route, fallbackTitle, version);
    const prefix = route === '404/' ? config.baseUrl : prefixFor(route);
    const status = config.versions[page.version];
    const title = route === '404/' ? 'Find your way back' : page.title || fallbackTitle;
    const isHome = route === '' && fallbackTitle !== 'Page moved';
    const content = isHome ? rawContent : normalise(rawContent, route);
    const homeLink = route ? `<a href="${prefix}">Home</a>` : '<span>Home</span>';
    const crumbs = route ? `<nav class="breadcrumbs" aria-label="Breadcrumb">${homeLink}<span aria-hidden="true">/</span>${route === `${page.version}/` ? '' : `<a href="${prefix + page.version}/">${status.label}</a><span aria-hidden="true">/</span>`}<span aria-current="page">${escape(title)}</span></nav>` : '';
    const pageHeader = isHome ? '' : `${crumbs}<header class="page-header"><p class="eyebrow">${escape(config.groups.find(group => group.id === page.category)?.label || 'Official wiki')}</p><h1>${escape(title)}</h1>${page.summary ? `<p class="lead">${escape(interpolate(page.summary))}</p>` : ''}</header>`;
    const nav = config.topNavigation.map(item => {
      const exact = route === item.route || ['3.0/progression/','maintenance/preview/'].includes(route) && item.route === '3.0/';
      const section = !exact && item.route && (route.startsWith(item.route) || item.route === 'recipes/' && route === 'workshop/');
      return `<a href="${prefix + item.route}"${exact ? ' aria-current="page"' : section ? ' class="nav-section-active"' : ''}>${escape(item.label)}</a>`;
    }).join('');
    return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="theme-color" content="#171322"><meta name="description" content="${escape(interpolate(page.summary || config.description))}"><title>${escape(title)} · ${config.name}</title><link rel="icon" href="${prefix}assets/brand/${config.assets.icon}"><link rel="canonical" href="${config.baseUrl + (route === '404/' ? '404.html' : route)}"><link rel="stylesheet" href="${prefix}assets/site.css?v=${context.styleVersion}"><script src="${prefix}assets/item-art.js?v=${context.artVersion}" defer></script><script src="${prefix}assets/item-art-ui.js?v=${context.artVersion}" defer></script>${extra}</head><body data-category="${page.category}" data-version="${page.version}" data-site-root="${prefix || './'}" data-search-version="${context.searchVersion}"><a class="skip-link" href="#main">Skip to content</a><header class="site-header"><div class="header-inner"><a class="site-brand" href="${prefix || './'}" aria-label="Towns & Kingdoms home"><img src="${prefix}assets/brand/${config.assets.icon}" width="48" height="48" alt=""><span>Towns & Kingdoms<small>Official wiki</small></span></a><nav class="top-nav" aria-label="Main navigation">${nav}</nav><a class="search-trigger" href="${prefix}guides/#find-guide" aria-label="Search the wiki"><span aria-hidden="true">⌕</span><span>Search</span><kbd>/</kbd></a><button class="menu-toggle icon-button" type="button" aria-expanded="false" aria-controls="site-navigation" aria-label="Open navigation">☰</button></div></header><div class="version-bar"><div><span class="version-tag">${status.label}</span><span class="status-dot" aria-hidden="true"></span><strong>${status.status}</strong><span class="version-platform">${status.platform}</span><a href="${prefix + (page.version === '2.0' ? '3.0/' : '2.0/')}">${page.version === '2.0' ? 'Go to T&K3' : 'T&K2 archive'} <span aria-hidden="true">→</span></a></div></div><div class="site-layout">${sidebar(prefix, route, page.version)}<button class="nav-scrim" type="button" aria-label="Close navigation" hidden></button><div class="site-content"><main class="page" id="main" tabindex="-1">${pageHeader}${content}</main><footer class="site-footer"><div><strong>Towns & Kingdoms</strong><p>Build your workshop. Explore the world. Grow your kingdom.</p></div><nav aria-label="Footer navigation"><a href="${prefix}guides/">All guides</a><a href="${prefix}3.0/credits/">Credits</a><a href="${config.repositoryUrl}">GitHub <span aria-hidden="true">↗</span></a><a href="${config.feedbackUrl}">Feedback <span aria-hidden="true">↗</span></a></nav><p class="footer-version">${page.version === '2.0' ? 'Historical T&K2 documentation.' : 'T&K3 Alpha 1.0. Reference mod behaviour may differ by installed version and configuration.'}</p></footer></div></div><dialog class="search-dialog" aria-labelledby="search-dialog-title"><div class="search-dialog-head"><h2 id="search-dialog-title">Search the wiki</h2><button class="search-close icon-button" type="button" aria-label="Close search">×</button></div><form class="search-form" role="search"><label for="global-search">Guide, system, mod or item</label><input id="global-search" type="search" placeholder="Try AE2, spell, chapter or casing…" autocomplete="off"><label for="search-version">Documentation version</label><select id="search-version"><option value="3.0">T&K3 · Alpha 1.0</option><option value="2.0">T&K2 · legacy</option><option value="">All versions</option></select></form><p class="search-status" role="status">Type at least two characters to search.</p><div class="global-search-results"></div><p class="search-help">Press Escape to close. <a href="${prefix}guides/">Browse all guides</a></p></dialog><script src="${prefix}assets/site.js?v=${context.styleVersion}" defer></script></body></html>`;
  }
  return {shell, sidebar, config, interpolate, metadata, prefixFor};
};
