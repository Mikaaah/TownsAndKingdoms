const dialog = document.querySelector<HTMLDialogElement>('#global-search');
const input = document.querySelector<HTMLInputElement>('#global-search-input');
const results = document.querySelector<HTMLElement>('#search-results');
const status = document.querySelector<HTMLElement>('#search-status');
let worker: Worker | undefined;
let ready = false;
let selected = -1;
let queryId = 0;
const escape = (s: any) => String(s ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
function search() {
  const query = input?.value.trim() || '';
  if (!query) {
    queryId++;
    if(results) results.innerHTML = '<p class="search-hint">Find a weapon, ingredient, mod, chapter or skill.</p>';
    if(status) status.textContent = '';
    selected = -1;
    input?.removeAttribute('aria-activedescendant');
    input?.setAttribute('aria-expanded', 'false');
    return;
  }
  if (ready) worker?.postMessage({ type: 'search', query, id: ++queryId });
  else if(status) status.textContent = 'Preparing search…';
}
function openSearch() {
  if (!dialog || !input) return;
  if(!worker){
    worker = new Worker(new URL('./search.worker.js', import.meta.url), { type: 'module' });
    worker.onmessage = event => {
      if(event.data.type === 'ready'){ready = true; search(); return;}
      if(event.data.type === 'error'){if(status) status.textContent = 'Search is unavailable. Try the reference filters.'; return;}
      if(event.data.type !== 'results' || event.data.id !== queryId || !results) return;
      const grouped: Record<string, any[]> = {};
      for(const item of event.data.items){(grouped[item.category] ||= []).push(item);}
      let shown = 0;
      results.innerHTML = Object.entries(grouped).map(([category, items], index) => {
        const categoryId = `search-category-${index}`;
        const options = items.slice(0, 5).map(item => `<a id="search-option-${shown++}" class="search-result" role="option" aria-selected="false" tabindex="-1" href="${escape(item.url)}"><span class="search-result-main"><strong>${escape(item.name)}</strong><small>${escape(item.subtitle || item.id)}</small></span><span class="result-type" aria-hidden="true">↵</span></a>`).join('');
        return `<div role="group" aria-labelledby="${categoryId}"><div id="${categoryId}" class="search-category">${escape(category)}</div>${options}</div>`;
      }).join('') || '<p class="search-hint">No matching entries. Try a shorter name or an item ID.</p>';
      selected = -1;
      input.removeAttribute('aria-activedescendant');
      input.setAttribute('aria-expanded', String(shown > 0));
      if(status) status.textContent = `${shown} ${shown === 1 ? 'result' : 'results'} shown`;
    };
    worker.onerror = () => { if(status) status.textContent = 'Search is unavailable. Try the reference filters.'; };
    worker.postMessage({ type: 'init', base: import.meta.env.BASE_URL });
  }
  if(!dialog.open) dialog.showModal();
  input.focus();
}
document.querySelector('#open-search')?.addEventListener('click',openSearch);
document.querySelector('#close-search')?.addEventListener('click',()=>dialog?.close());
dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
document.addEventListener('keydown',event=>{
  if(dialog && (event.ctrlKey || event.metaKey) && event.key.toLowerCase()==='k'){event.preventDefault();dialog.open?dialog.close():openSearch();}
});
input?.addEventListener('input',search);
input?.addEventListener('keydown',event=>{
  const links = Array.from(results?.querySelectorAll<HTMLAnchorElement>('a.search-result') || []);
  if(event.key==='ArrowDown'||event.key==='ArrowUp'){
    event.preventDefault();if(!links.length)return;
    const down = event.key === 'ArrowDown';
    if (selected < 0) selected = down ? 0 : links.length - 1;
    else selected = (selected + (down ? 1 : -1) + links.length) % links.length;
    links.forEach((link, index) => link.setAttribute('aria-selected', String(index === selected)));
    input.setAttribute('aria-activedescendant', links[selected].id);
    links[selected].scrollIntoView({ block: 'nearest' });
  }
  if(event.key==='Enter' && links.length){event.preventDefault();window.location.href=links[selected<0?0:selected].href;dialog?.close();}
});
const menu = document.querySelector<HTMLButtonElement>('#menu-toggle');
const sidebar = document.querySelector<HTMLElement>('#site-sidebar');
const backdrop = document.querySelector<HTMLButtonElement>('#nav-backdrop');
function setNavigation(open: boolean, restoreFocus = false) {
  const mobile = window.innerWidth <= 800;
  const expanded = mobile && open;
  menu?.setAttribute('aria-expanded', String(expanded));
  menu?.setAttribute('aria-label', expanded ? 'Close navigation' : 'Open navigation');
  sidebar?.classList.toggle('is-open', expanded);
  if(sidebar) sidebar.inert = mobile && !expanded;
  if(backdrop) backdrop.hidden = !expanded;
  document.body.classList.toggle('navigation-open', expanded);
  if(restoreFocus) menu?.focus();
}
setNavigation(false);
menu?.addEventListener('click', () => {
  const open = menu.getAttribute('aria-expanded') !== 'true';
  setNavigation(open);
  if (open) sidebar?.querySelector<HTMLAnchorElement>('a')?.focus();
});
document.addEventListener('focusin', event => {
  if (menu?.getAttribute('aria-expanded') === 'true' && event.target !== menu &&
      event.target !== backdrop && !sidebar?.contains(event.target as Node)) {
    setNavigation(false);
  }
});
backdrop?.addEventListener('click',()=>setNavigation(false, true));
document.addEventListener('keydown',event=>{
  if(event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') setNavigation(false, true);
});
sidebar?.addEventListener('click',event=>{
  if((event.target as HTMLElement).closest('a')) setNavigation(false);
});
document.querySelector('#open-search')?.addEventListener('click',()=>setNavigation(false));
window.addEventListener('resize',()=>setNavigation(window.innerWidth <= 800 && menu?.getAttribute('aria-expanded') === 'true'));

const themeToggle = document.querySelector<HTMLButtonElement>('#theme-toggle');
const themeColor = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');
const root = document.documentElement;
themeToggle?.setAttribute('aria-pressed', String(root.dataset.theme === 'light'));
themeToggle?.addEventListener('click', () => {
  const theme = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = theme;
  themeToggle.setAttribute('aria-pressed', String(theme === 'light'));
  if (themeColor) themeColor.content = theme === 'light' ? '#ffffff' : '#202020';

  try {
    localStorage.setItem('tnk3-theme', theme);
  } catch {
    // The theme still applies to the current page without browser storage.
  }
});
