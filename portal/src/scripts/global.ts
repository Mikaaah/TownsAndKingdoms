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
      results.innerHTML = Object.entries(grouped).map(([category, items]) => `<div class="search-category">${escape(category)}</div>${items.slice(0,5).map(item => `<a class="search-result" role="option" aria-selected="false" href="${escape(item.url)}"><span class="search-result-main"><strong>${escape(item.name)}</strong><small>${escape(item.subtitle || item.id)}</small></span><span class="result-type" aria-hidden="true">↵</span></a>`).join('')}`).join('') || '<p class="search-hint">No matching entries. Try a shorter name or an item ID.</p>';
      selected = -1;
      if(status) status.textContent = `${event.data.items.length} results`;
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
  if((event.ctrlKey || event.metaKey) && event.key.toLowerCase()==='k'){event.preventDefault();dialog?.open?dialog.close():openSearch();}
});
input?.addEventListener('input',search);
input?.addEventListener('keydown',event=>{
  const links = Array.from(results?.querySelectorAll<HTMLAnchorElement>('a.search-result') || []);
  if(event.key==='ArrowDown'||event.key==='ArrowUp'){
    event.preventDefault();if(!links.length)return;
    selected = (selected + (event.key==='ArrowDown'?1:-1) + links.length) % links.length;
    links.forEach((a,i)=>a.setAttribute('aria-selected',String(i===selected)));
    links[selected].scrollIntoView({block:'nearest'});
  }
  if(event.key==='Enter' && links.length){event.preventDefault();window.location.href=links[selected<0?0:selected].href;dialog?.close();}
});
const menu = document.querySelector<HTMLButtonElement>('#menu-toggle');
const sidebar = document.querySelector('#site-sidebar');
menu?.addEventListener('click',()=>{const open=menu.getAttribute('aria-expanded')!=='true';menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close navigation':'Open navigation');sidebar?.classList.toggle('is-open',open);});
document.addEventListener('keydown',event=>{if(event.key==='Escape'){sidebar?.classList.remove('is-open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation');}});

sidebar?.addEventListener('click',event=>{if((event.target as HTMLElement).closest('a')){sidebar.classList.remove('is-open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation');}});

window.addEventListener('resize',()=>{if(window.innerWidth>800){sidebar?.classList.remove('is-open');menu?.setAttribute('aria-expanded','false');menu?.setAttribute('aria-label','Open navigation');}});
