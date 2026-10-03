(() => {
  'use strict';
  const root = new URL(document.body.dataset.siteRoot, location.href);
  const dialog = document.querySelector('.search-dialog');
  const input = document.getElementById('global-search');
  const version = document.getElementById('search-version');
  const output = document.querySelector('.global-search-results');
  const status = document.querySelector('.search-status');
  let indexPromise, searchSequence = 0;
  version.value = document.body.dataset.version;
  function openSearch(event) {event?.preventDefault(); closeMenu(false); dialog.showModal(); input.focus();}
  document.querySelector('.search-trigger').addEventListener('click', openSearch);
  document.querySelector('.search-close').addEventListener('click', () => dialog.close());
  document.querySelector('.search-form').addEventListener('submit', event => event.preventDefault());
  async function search() {
    const sequence = ++searchSequence, query = input.value.trim().toLowerCase();
    output.replaceChildren();
    if (query.length < 2) {status.textContent = 'Type at least two characters to search.'; return;}
    status.textContent = 'Searching…';
    try {
      indexPromise ??= fetch(new URL('assets/search-index.json', root)).then(response => {if (!response.ok) throw Error('Search index unavailable'); return response.json();});
      const pages = await indexPromise;
      if (sequence !== searchSequence) return;
      const terms = query.split(/\s+/);
      const score = page => (page.title.toLowerCase().includes(query) ? 50 : 0) + (page.description.toLowerCase().includes(query) ? 20 : 0) + (page.type === 'recipe' ? 0 : 10);
      const found = pages.filter(page => (!version.value || page.version === version.value) && terms.every(term => `${page.title} ${page.description} ${page.text}`.toLowerCase().includes(term))).sort((a,b) => score(b)-score(a));
      for (const page of found.slice(0, 16)) {
        const link = document.createElement('a'), detail = document.createElement('small');
        link.href = new URL(page.route, root); link.textContent = page.title;
        detail.textContent = `${page.version === '2.0' ? 'T&K2 · legacy' : 'T&K3 · Alpha 1.0'} · ${page.description}`;
        link.append(detail); output.append(link);
      }
      status.textContent = found.length ? `${found.length} results${found.length > 16 ? ' · showing the first 16' : ''}` : 'No results. Try another item, system or guide name.';
    } catch (error) {indexPromise = undefined; status.textContent = 'Search could not load. You can still browse all guides below.';}
  }
  input.addEventListener('input', search); version.addEventListener('change', search);
  const menu = document.querySelector('.menu-toggle'), sidebar = document.querySelector('.site-sidebar'), scrim = document.querySelector('.nav-scrim');
  const main = document.getElementById('main');
  function closeMenu(restore = true) {const wasOpen = document.body.classList.contains('nav-open'); document.body.classList.remove('nav-open'); menu.setAttribute('aria-expanded','false'); scrim.hidden = true; main.inert = false; if (restore && wasOpen) menu.focus();}
  menu.addEventListener('click', () => {document.body.classList.add('nav-open'); menu.setAttribute('aria-expanded','true'); scrim.hidden = false; main.inert = true; sidebar.querySelector('.menu-close').focus();});
  sidebar.querySelector('.menu-close').addEventListener('click', () => closeMenu()); scrim.addEventListener('click', () => closeMenu());
  sidebar.querySelectorAll('a').forEach(link => link.addEventListener('click', () => closeMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {if(dialog.open) dialog.close(); closeMenu();}
    if (event.key === '/' && !dialog.open && !/INPUT|SELECT|TEXTAREA/.test(event.target.tagName) && !event.target.isContentEditable) {event.preventDefault(); openSearch();}
    if (event.key === 'Tab' && document.body.classList.contains('nav-open')) {
      const focusable = [...sidebar.querySelectorAll('a,button,summary')].filter(element => element.getClientRects().length);
      const first = focusable[0], last = focusable.at(-1);
      if (event.shiftKey && document.activeElement === first) {event.preventDefault(); last.focus();}
      if (!event.shiftKey && document.activeElement === last) {event.preventDefault(); first.focus();}
    }
  });
  matchMedia('(min-width:901px)').addEventListener('change', event => {if(event.matches) closeMenu(false);});
  const guideInput = document.getElementById('guide-search');
  if (guideInput) {
    let category = '';
    const buttons = [...document.querySelectorAll('[data-guide-filter]')];
    function filterGuides() {
      const query = guideInput.value.trim().toLowerCase(); let total = 0;
      document.querySelectorAll('.guide-category').forEach(group => {
        let count = 0;
        group.querySelectorAll('.guide-entry').forEach(entry => {entry.hidden = !!(category && group.dataset.guideCategory !== category) || !entry.dataset.guideText.includes(query); if (!entry.hidden) count++;});
        group.hidden = count === 0; total += count;
      });
      document.getElementById('guide-count').textContent = `${total} guides`;
      document.getElementById('guide-empty').hidden = total > 0;
    }
    guideInput.addEventListener('input', filterGuides);
    buttons.forEach(button => button.addEventListener('click', () => {category = button.dataset.guideFilter; buttons.forEach(item => item.setAttribute('aria-pressed', String(item === button))); filterGuides();}));
    filterGuides();
  }
  // Tables are readable without JS; scrolling containers become keyboard reachable.
  document.querySelectorAll('main table').forEach(table => {if (!table.parentElement.classList.contains('table-wrap')) {const wrap=document.createElement('div'); wrap.className='table-wrap'; table.before(wrap); wrap.append(table);}});
  document.querySelectorAll('.table-wrap').forEach(wrap => {wrap.tabIndex=0; wrap.setAttribute('role','region'); wrap.setAttribute('aria-label','Scrollable data table');});
  document.querySelectorAll('.wiki-catalogue').forEach(catalogue => {
    const search=catalogue.querySelector('input[type="search"]');
    const selects=[...catalogue.querySelectorAll('select[data-column]')];
    const rows=[...catalogue.querySelectorAll('tbody tr')].map(row=>({row,text:row.textContent.toLowerCase(),cells:[...row.cells].map(cell=>cell.textContent)}));
    function filter() {
      const terms=search.value.trim().toLowerCase().split(/\s+/).filter(Boolean); let count=0;
      for(const entry of rows) {
        entry.row.hidden=!terms.every(term=>entry.text.includes(term))||!selects.every(select=>!select.value||entry.cells[Number(select.dataset.column)]===select.value);
        if(!entry.row.hidden)count++;
      }
      catalogue.querySelector('.wiki-count').textContent=`${count} of ${rows.length} entries`;
      catalogue.querySelector('[data-empty]').hidden=count>0;
    }
    search.addEventListener('input',filter);selects.forEach(select=>select.addEventListener('change',filter));
    catalogue.querySelector('[data-reset]').addEventListener('click',()=>{search.value='';selects.forEach(select=>select.value='');filter();search.focus();});
    filter();
  });
  if (/\/(modlist|tier-map|selection-notes)\/$/.test(location.pathname) && !document.querySelector('.wiki-catalogue')) {
    const tables = [...document.querySelectorAll('main table')];
    if (tables.length) {
      const form=document.createElement('div'), label=document.createElement('label'), filter=document.createElement('input'), result=document.createElement('p');
      form.className='table-filter'; filter.type='search'; filter.id='reference-search'; filter.placeholder='Search mod, addon, tier or status…'; label.htmlFor=filter.id; label.textContent='Search this page’s tables'; result.setAttribute('role','status'); form.append(label,filter,result); document.querySelector('.page-header').after(form);
      filter.addEventListener('input', () => {const query=filter.value.trim().toLowerCase(); let count=0; for(const table of tables) for(const row of table.querySelectorAll('tbody tr')) {row.hidden=!row.textContent.toLowerCase().includes(query); if(!row.hidden) count++;} result.textContent=`${count} matching rows`;});
    }
  }
  const tocLinks=[...document.querySelectorAll('.page-toc a')];
  if (tocLinks.length && 'IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {for(const entry of entries) if(entry.isIntersecting) tocLinks.forEach(link => {if(link.hash === `#${entry.target.id}`) link.setAttribute('aria-current','location'); else link.removeAttribute('aria-current');});},{rootMargin:'-15% 0px -65% 0px'});
    tocLinks.forEach(link => {const section=document.getElementById(decodeURIComponent(link.hash.slice(1))); if(section) observer.observe(section);});
  }
  // Compatibility for bookmarks from the original all-in-one handbook.
  const hash=location.hash.slice(1), route=location.pathname.slice(root.pathname.length);
  if (!route && ['overview','frames','paths','chapters','compat','recipes','textures'].includes(hash)) location.replace(new URL(`progression/#${hash}`, root));
  if (route === 'progression/' && ['recipes','chapters'].includes(hash)) location.replace(new URL(`${hash}/#${hash}`, root));
  function revealAnchor() {const target=document.getElementById(decodeURIComponent(location.hash.slice(1))); if(!target)return; let parent=target.parentElement; while(parent){if(parent.tagName==='DETAILS')parent.open=true;parent=parent.parentElement;} if(location.hash) target.scrollIntoView();}
  if(location.hash) revealAnchor(); window.addEventListener('hashchange',revealAnchor);
  let printStates=[];
  window.addEventListener('beforeprint',()=>{printStates=[...document.querySelectorAll('main details')].map(detail=>[detail,detail.open]); printStates.forEach(([detail])=>detail.open=true);});
  window.addEventListener('afterprint',()=>printStates.forEach(([detail,open])=>detail.open=open));
  for (const img of document.querySelectorAll('.article-body img')) img.addEventListener('error',()=>{img.classList.add('media-unavailable'); img.alt=(img.alt||'Original wiki image')+' — external image unavailable.';},{once:true});
  for (const card of document.querySelectorAll('[data-video]')) {
    const poster=document.createElement('img'); poster.src=`https://i.ytimg.com/vi/${card.dataset.video}/hqdefault.jpg`; poster.alt=card.querySelector('h3').textContent+' video thumbnail'; poster.loading='lazy'; poster.addEventListener('error',()=>poster.hidden=true,{once:true}); card.prepend(poster);
    card.querySelector('.load-video').addEventListener('click',()=>{const frame=document.createElement('iframe'); frame.src=`https://www.youtube-nocookie.com/embed/${card.dataset.video}`; frame.title=card.querySelector('h3').textContent; frame.allow='encrypted-media; picture-in-picture; fullscreen'; frame.allowFullscreen=true; poster.replaceWith(frame); card.querySelector('.load-video').remove();});
  }
})();
