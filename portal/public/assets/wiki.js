'use strict';
(() => {
 const base=document.body.dataset.base;

 const themeButton=document.querySelector('#theme-toggle');
 function setTheme(theme){
  document.documentElement.dataset.theme=theme;
  const dark=theme==='dark';
  themeButton?.setAttribute('aria-pressed',String(dark));
  themeButton?.setAttribute('aria-label',dark?'Switch to day mode':'Switch to night mode');
  if(themeButton)themeButton.textContent=dark?'Day':'Night';
 }
 setTheme(document.documentElement.dataset.theme||'light');
 themeButton?.addEventListener('click',()=>{
  const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';
  setTheme(theme);try{localStorage.setItem('tnk-theme',theme);}catch{}
 });

 const progress=document.querySelector('#reading-progress');
 let scheduled=false;
 function updateProgress(){
  const distance=document.documentElement.scrollHeight-innerHeight;
  if(progress)progress.style.transform='scaleX('+(distance>0?Math.min(1,scrollY/distance):0)+')';
  scheduled=false;
 }
 window.addEventListener('scroll',()=>{if(!scheduled){scheduled=true;requestAnimationFrame(updateProgress);}},{passive:true});
 window.addEventListener('resize',updateProgress);updateProgress();

 document.querySelectorAll('.article pre').forEach(block=>{
  const code=block.querySelector('code');if(!code)return;
  const button=document.createElement('button');button.className='code-copy';
  button.type='button';button.textContent='Copy';button.setAttribute('aria-label','Copy code');
  button.addEventListener('click',async()=>{
   try{await navigator.clipboard.writeText(code.textContent);button.textContent='Copied!';setTimeout(()=>button.textContent='Copy',1600);}
   catch{button.textContent='Select to copy';const range=document.createRange();range.selectNodeContents(code);const selection=getSelection();selection.removeAllRanges();selection.addRange(range);}
  });block.append(button);
 });

 const menu=document.querySelector('#menu-toggle'),sidebar=document.querySelector('#sidebar');
 function setMenu(open){document.body.classList.toggle('menu-open',open);menu?.setAttribute('aria-expanded',String(open));}
 menu?.addEventListener('click',()=>setMenu(!document.body.classList.contains('menu-open')));
 sidebar?.addEventListener('click',event=>{if(event.target.closest('a'))setMenu(false);});
 document.addEventListener('keydown',event=>{if(event.key==='Escape')setMenu(false);});

 // All reference entries exist in HTML; filtering also works without fetches.
 const form=document.querySelector('[data-filter-form]');
 if(form){
  const entries=[...document.querySelectorAll('[data-filter-entry]')],input=form.querySelector('input'),select=form.querySelector('select');
  const count=form.querySelector('[data-filter-count]'),empty=document.querySelector('.no-matches');
  const params=new URLSearchParams(location.search);
  input.value=params.get('q')||'';
  if(select&&params.has(select.name)&&[...select.options].some(o=>o.value===params.get(select.name)))select.value=params.get(select.name);
  function filter(){
   const terms=input.value.trim().toLowerCase().split(/\s+/).filter(Boolean),group=select?.value||'';
   let visible=0;
   for(const entry of entries){
    const matches=(!group||entry.dataset.group===group)&&terms.every(term=>entry.dataset.search.includes(term));
    entry.hidden=!matches;if(matches)visible++;
   }
   count.textContent=visible+' of '+entries.length+' entries';empty.hidden=visible>0;
  }
  form.addEventListener('submit',event=>event.preventDefault());
  input.addEventListener('input',filter);select?.addEventListener('change',filter);filter();
 }
 function revealHash(){
  if(!location.hash)return;
  let id;try{id=decodeURIComponent(location.hash.slice(1));}catch{return;}
  const target=document.getElementById(id);if(!target)return;
  target.hidden=false;
  if(target.tagName==='DETAILS')target.open=true;
  let ancestor=target.parentElement;
  while(ancestor){if(ancestor.tagName==='DETAILS')ancestor.open=true;ancestor=ancestor.parentElement;}
  requestAnimationFrame(()=>target.scrollIntoView({block:'start'}));
 }
 revealHash();window.addEventListener('hashchange',revealHash);
 document.addEventListener('click',async event=>{
  const button=event.target.closest('[data-copy]');if(!button)return;
  try{await navigator.clipboard.writeText(button.dataset.copy);button.textContent='Copied';}
  catch{button.textContent='Select the ID to copy';}
 });

 const dialog=document.querySelector('#search-dialog'),searchInput=document.querySelector('#wiki-search'),list=document.querySelector('#search-results'),status=document.querySelector('#search-status');
 let searchPromise=null,index=null,searchSerial=0;
 function openSearch(){if(!dialog.open)dialog.showModal();searchInput.focus();}
 document.querySelectorAll('[data-open-search]').forEach(button=>button.addEventListener('click',openSearch));
 document.querySelector('#close-search')?.addEventListener('click',()=>dialog.close());
 dialog?.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
 document.addEventListener('keydown',event=>{
  if((event.key==='/'||((event.ctrlKey||event.metaKey)&&event.key.toLowerCase()==='k'))&&!event.altKey&&!/INPUT|TEXTAREA|SELECT/.test(document.activeElement.tagName)){event.preventDefault();openSearch();}
 });
 function normalize(text){return String(text).toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'');}
 async function search(){
  const serial=++searchSerial,query=searchInput.value.trim();
  list.replaceChildren();
  if(!query){status.textContent='Type a word to search the current reference.';return;}
  status.textContent='Searching…';
  try{
   if(!searchPromise)searchPromise=fetch(base+'assets/search.json').then(r=>{if(!r.ok)throw Error('Search unavailable');return r.json();}).catch(e=>{searchPromise=null;throw e;});
   index=await searchPromise;if(serial!==searchSerial)return;
   const terms=normalize(query).split(/\s+/);
   const matches=index.map(item=>{
    const title=normalize(item.title),hay=title+' '+normalize(item.summary)+' '+normalize(item.text);
    if(!terms.every(t=>hay.includes(t)))return null;
    const score=terms.reduce((sum,t)=>sum+(title===t?40:title.includes(t)?15:0),0)+(item.kind==='Guide'?4:0);
    return {item,score};
   }).filter(Boolean).sort((a,b)=>b.score-a.score||a.item.title.localeCompare(b.item.title));
   status.textContent=matches.length?matches.length+' matches · showing '+Math.min(matches.length,25):'No matches. Try another word.';
   for(const {item} of matches.slice(0,25)){
    const li=document.createElement('li'),a=document.createElement('a'),kind=document.createElement('small'),title=document.createElement('strong'),summary=document.createElement('p');
    a.href=base+item.url;kind.textContent=item.kind;title.textContent=item.title;
    const plain=String(item.summary||'').replace(/<[^>]*>/g,'').replace(/[#*]/g,'');summary.textContent=plain.length>165?plain.slice(0,162)+'…':plain;
    a.append(kind,title,summary);li.append(a);list.append(li);
   }
  }catch{if(serial===searchSerial)status.textContent='Search is unavailable. Use the guide navigation or try again.';}
 }
 searchInput?.addEventListener('input',search);
})();
