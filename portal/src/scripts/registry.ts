const container = document.querySelector<HTMLElement>('[data-registry]');
const type = container?.dataset.registry;
const ponderItems = new Set<string>(JSON.parse(container?.dataset.ponderItems || '[]'));
const base = import.meta.env.BASE_URL.replace(/\/$/,'');
const escape = (s: any) => String(s ?? '').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]!));
const words = (s: any) => String(s || '').split(':').pop()!.replace(/[/_]/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
const arr = (s:any) => Array.isArray(s) ? s : s ? [s] : [];
let records: any[] = [];
let filtered: any[] = [];
let page = 1;
const pageSize = type === 'weapons' ? 30 : 25;
const grid = container?.querySelector<HTMLElement>('[data-results]');
const count = container?.querySelector<HTMLElement>('[data-count]');
const dialog = document.querySelector<HTMLDialogElement>('#record-dialog');
const body = dialog?.querySelector<HTMLElement>('[data-dialog-content]');
const image = (r: any) => r.icon ? `<div class="item-art"><img src="${escape(base + '/' + String(r.icon).replace(/^\/+/,''))}" alt="" loading="lazy" /><span class="item-fallback" hidden aria-hidden="true">${escape((r.name || r.id).slice(0,2).toUpperCase())}</span></div>` : `<div class="item-art"><span class="item-fallback" aria-hidden="true">${escape((r.name || r.id).slice(0,2).toUpperCase())}</span></div>`;
function tier(r:any) { return r.productionTier ?? r.tier; }
function label(value:any):string { if(value === null || value === undefined)return ''; if(typeof value !== 'object')return String(value); return value.name || value.title || words(value.item || value.id || ''); }
function hasTier(r:any) { return tier(r) !== null && tier(r) !== undefined; }
function tierName(r:any) { return Number(tier(r))===0?'Foundation':'Tier '+tier(r); }
function chapterName(value:any) { return typeof value==='number'?'Chapter '+(['','I','II','III','IV','V','VI','VII','VIII','IX','X'][value]||value):label(value); }
function componentLabel(components:any):string {
 if(!components)return '';
 const potion=components['minecraft:potion_contents']?.potion;
 if(potion)return words(potion);
 const data=components['minecraft:custom_data'];
 return data?Object.entries(data).filter(([key,value])=>key.startsWith('tnk_')&&typeof value==='string').map(([,value])=>'Prepared batch · '+words(value)).join(' · '):'';
}
function itemName(v:any):string {
 if(typeof v==='string')return words(v);
 if(Array.isArray(v))return v.map(itemName).join(' or ');
 if(!v || typeof v!=='object')return 'Ingredient';
 if(v.name)return [v.name,v.componentLabel||componentLabel(v.components)].filter(Boolean).join(' · ');
 if(v.type==='neoforge:difference')return `${itemName(v.base)} except ${itemName(v.subtracted)}`;
 if(v.children)return arr(v.children).map(itemName).join(v.type==='neoforge:intersection'?' and ':' or ');
 if(v.alternatives)return arr(v.alternatives).map(itemName).join(' or ');
 if(v.items||v.fluids)return [arr(v.items||v.fluids).map(itemName).join(' or '),componentLabel(v.components)].filter(Boolean).join(' · ');
 if(v.ingredient)return itemName(v.ingredient);
 return [words(v.id || v.item || (typeof v.tag==='string'?v.tag:'') || v.fluid || v.type),componentLabel(v.components)].filter(Boolean).join(' · ') || 'Ingredient';
}
function outputQuantity(v:any):string {return v.outputKind==='fluid'?`${v.outputAmount??v.count??1} mB`:`${v.count||1} ×`;}
function recipeIngredientName(recipe:any,entry:any):string {
 if(Array.isArray(entry))return entry.map(value=>recipeIngredientName(recipe,value)).join(' or ');
 const id=entry?.id||entry?.item||entry?.tag||entry?.fluid;
 const known=arr(recipe.ingredients).flatMap(value=>[value,...arr(value.options)]).find(value=>id&&value.id===id);
 return itemName(known?{...entry,name:known.name,componentLabel:known.componentLabel}:entry);
}
function ingredient(v:any) {
 const fluid=v?.kind==='fluid'||v?.fluid||v?.amount!==undefined;
 const amount=v?.amount??v?.count;
 const qty=fluid&&amount!==undefined?`${amount} mB`:amount&&amount!==1?`${amount} ×`:'';
 return `${escape(qty)} ${escape(itemName(v))}${v?.tag?' <span class="subtle">(any matching item)</span>':''}${v?.consumed===false?' <span class="tag">Retained catalyst</span>':''}`.trim();
}
function assemblyIngredients(step:any,recipe:any) {
 const transition=recipe.transitional_item?.id||recipe.transitional_item?.item;
 return arr(step.ingredients).map((entry:any,index:number)=>({entry:typeof entry==='string'?entry.startsWith('#')?{tag:entry.slice(1)}:{item:entry}:entry,index})).filter(({entry})=>!transition||(entry.item||entry.id)!==transition).map(({entry,index})=>`<small>${ingredient({...entry,consumed:!(index===1&&step.keep_held_item)})}</small>`).join('');
}
function itemTags(r:any) { return `<span class="tag tag-accent">${escape(r.styleName || 'Native handling')}</span>${r.grip?`<span class="tag">${escape(r.grip)}</span>`:''}`; }
function filterRecords() {
  const query=String(container?.querySelector<HTMLInputElement>('[data-filter="query"]')?.value || '').toLowerCase().trim();
  const filters=Array.from(container?.querySelectorAll<HTMLSelectElement>('select[data-filter]')||[]).map(s=>[s.dataset.filter!,s.value]);
  filtered=records.filter(r=>{
    if(query){const haystack=[r.name,r.id,r.output,r.modName,r.styleName,r.archetype,r.grip,...arr(r.ingredients).map(i=>[i.name,i.id,i.tag,i.componentLabel,...arr(i.options).map(option=>option.name||option.id)].join(' '))].join(' ').toLowerCase();if(!query.split(/\s+/).every(q=>haystack.includes(q)))return false;}
    return filters.every(([key,value])=>!value||String(key==='productionTier'?tier(r):r[key])===value);
  });
  page=1;render();
}
function render() {
  if(!grid)return;
  const shown=filtered.slice((page-1)*pageSize,page*pageSize);
  if(count)count.textContent=`${filtered.length.toLocaleString()} ${type==='bosses'?'encounters':type} ${filtered.length===records.length?'':'matched'}`;
  if(type==='weapons')grid.innerHTML=shown.map(r=>`<button class="weapon-card" data-detail="${escape(r.id)}" aria-label="View ${escape(r.name)}">${image(r)}<span class="weapon-content"><h3>${escape(r.name)}</h3><span class="mod">${escape(r.modName || r.mod)}</span><span class="tags">${itemTags(r)}</span></span></button>`).join('');
  if(type==='recipes')grid.innerHTML=shown.map(r=>`<tr><td><button class="table-button" data-detail="${escape(r.id)}">${escape(r.name||words(r.output))}</button><div class="table-detail">${escape(r.modName||words(r.mod))}</div></td><td><span class="tag">${escape(r.processName||words(r.type))}</span></td><td>${hasTier(r)?`<span class="tag tag-gold">${escape(tierName(r))}</span>`:'<span class="subtle">—</span>'}</td><td><span class="mono">${escape(outputQuantity(r))}</span></td><td><button class="table-button" data-detail="${escape(r.id)}" aria-label="View recipe for ${escape(r.name||words(r.output))}">View recipe →</button></td></tr>`).join('');
  if(type==='bosses')grid.innerHTML=shown.map(r=>`<button class="weapon-card" data-detail="${escape(r.id)}"><span class="item-art"><span class="item-fallback">${escape((r.name||r.id).slice(0,2).toUpperCase())}</span></span><span class="weapon-content"><h3>${escape(r.name)}</h3><span class="mod">${escape(r.modName||words(r.mod))}</span><span class="tags">${r.minimumLevel?`<span class="tag tag-gold">Boss L${escape(r.minimumLevel)}+</span>`:''}<span class="tag">${escape(r.classification||'Boss encounter')}</span></span></span></button>`).join('');
  if(!shown.length)grid.innerHTML=type==='recipes'?'<tr><td colspan="5" class="empty-state">No recipes match these filters.</td></tr>':'<div class="empty-state">No entries match these filters. Try a different name, item ID or category.</div>';
  const pages=Math.max(1,Math.ceil(filtered.length/pageSize));
  const pageLabel=container?.querySelector('[data-page-label]');if(pageLabel)pageLabel.textContent=`${page} / ${pages}`;
  const prev=container?.querySelector<HTMLButtonElement>('[data-prev]');if(prev)prev.disabled=page===1;
  const next=container?.querySelector<HTMLButtonElement>('[data-next]');if(next)next.disabled=page===pages;
}
function statRows(r:any) {
  const attrs=r.attributes||{};
  const flat=Object.entries(attrs).flatMap(([style,values])=>typeof values==='object'&&values?Object.entries(values).map(([key,value])=>[`${words(key)} · ${words(style)}`,value]):[[words(style),values]]);
  return flat.length?`<div class="detail-section"><h3>Combat bonuses</h3><table><tbody>${flat.map(([key,value])=>`<tr><td>${escape(key)}</td><td class="mono">${escape(value)}</td></tr>`).join('')}</tbody></table></div>`:'';
}
function recipeDetail(r:any) {
  const d=r.recipe||{};let staging='';
  if(d.pattern?.length && d.key){const width=Math.max(...d.pattern.map((p:string)=>p.length));staging=`<div class="detail-section"><h3>${d.type==='create:mechanical_crafting'?'Mechanical crafting':'Crafting arrangement'}</h3><div style="overflow-x:auto"><div class="recipe-grid" style="grid-template-columns:repeat(${width},68px)">${d.pattern.flatMap((line:string)=>line.padEnd(width,' ').split('')).map((symbol:string)=>{const entry=d.key[symbol];return `<div class="recipe-slot" title="${escape(entry?recipeIngredientName(r,entry):'Empty slot')}">${entry?escape(recipeIngredientName(r,entry)):'<span class="subtle">·</span>'}</div>`;}).join('')}</div></div></div>`;}
  const sequence=d.sequence||[];
  const steps=sequence.length?`<div class="detail-section"><h3>Assembly sequence ${d.loops?`<span class="tag">${d.loops} loop${d.loops===1?'':'s'}</span>`:''}</h3><ol class="sequence-list">${sequence.map((s:any)=>`<li><span><strong>${escape(words(s.type))}</strong>${assemblyIngredients(s,d)}</span></li>`).join('')}</ol>${d.transitional_item?`<p class="detail-note">Work in progress: <code>${escape(d.transitional_item.id||d.transitional_item.item)}</code></p>`:''}</div>`:'';
  const outputList=arr(r.outputs||d.results).filter((o:any)=>o.id!==r.output||o.chance!==undefined);
  const ponderLink=ponderItems.has(r.output) ? `<div class="detail-section"><a class="button" href="${base}/ponder/?q=${encodeURIComponent(r.output)}">Ponder guides for this item</a></div>` : '';
  return `<dl class="detail-grid"><div><dt>Output</dt><dd>${escape(outputQuantity(r))} ${escape(r.name||words(r.output))}</dd></div><div><dt>Process</dt><dd>${escape(r.processName||words(r.type))}</dd></div>${hasTier(r)?`<div><dt>Production tier</dt><dd>${escape(tierName(r))}${r.chapter?' · '+escape(chapterName(r.chapter)):''}</dd></div>`:''}${d.heat_requirement?`<div><dt>Heat</dt><dd>${escape(words(d.heat_requirement))}</dd></div>`:''}</dl><h3>Ingredients</h3><ul class="ingredient-list">${arr(r.ingredients).map(i=>`<li>${ingredient(i)}</li>`).join('')}</ul>${arr(r.gates).length?`<div class="callout"><strong>Progression requirements</strong><p>${arr(r.gates).map(g=>escape(label(g))).join(' · ')}</p></div>`:''}${arr(r.bossIngredients).length?`<div class="callout"><strong>Boss drops used</strong><p>${arr(r.bossIngredients).map(g=>escape(label(g))).join(' · ')}</p></div>`:''}${staging}${steps}${outputList.length?`<div class="detail-section"><h3>Outputs &amp; chances</h3><ul>${outputList.map((o:any)=>`<li>${escape(o.amount!==undefined?o.amount+' mB':(o.count||1)+' ×')} ${escape(o.name||words(o.id||o.item))}${o.chance!==undefined?' · '+escape(Number(o.chance)*100)+'% chance':''}</li>`).join('')}</ul></div>`:''}${ponderLink}`;
}
function openDetail(id:string,updateHash=true) {
  const r=records.find(r=>r.id===id);if(!r||!dialog||!body)return;
  let content='';
  if(type==='weapons')content=`<dl class="detail-grid"><div><dt>Weapon style</dt><dd>${escape(r.styleName||'Native handling')}</dd></div><div><dt>Moveset provider</dt><dd>${escape(r.provider||'Native')}</dd></div><div><dt>Archetype</dt><dd>${escape(r.archetype||'—')}</dd></div><div><dt>Grip</dt><dd>${escape(r.grip||'—')}</dd></div>${r.styleTier?`<div><dt>Style tier</dt><dd>${escape(r.styleTier)}</dd></div>`:''}${hasTier(r)?`<div><dt>Crafting progression</dt><dd>${escape(tierName(r))}</dd></div>`:''}${r.lootTier!==null&&r.lootTier!==undefined?`<div><dt>Loot tier</dt><dd>${escape(r.lootTier)}</dd></div>`:''}</dl>${r.styleId?`<p class="detail-note">Style ID <code>${escape(r.styleId)}</code></p>`:''}${statRows(r)}<div class="detail-section"><a href="${base}/recipes/?q=${encodeURIComponent(r.id)}" class="button">Find crafting recipes →</a></div>`;
  else if(type==='recipes')content=recipeDetail(r);
  else content=`<dl class="detail-grid"><div><dt>Origin</dt><dd>${escape(r.modName||words(r.mod))}</dd></div>${r.minimumLevel?`<div><dt>Boss level floor</dt><dd>${escape(r.minimumLevel)}</dd></div>`:''}${r.lootTier!==null&&r.lootTier!==undefined?`<div><dt>Loot tier</dt><dd>${escape(r.lootTier)}</dd></div>`:''}</dl><h3>Reward pool</h3><ul class="ingredient-list">${arr(r.rewards).map(i=>`<li>${escape(label(i))||escape(words(i))}</li>`).join('')}</ul><div class="detail-section"><a class="button" href="${base}/loot/">How unidentified rewards work →</a></div>`;
  body.innerHTML=`<div class="dialog-header">${type==='weapons'?image(r):''}<div class="dialog-title"><p class="eyebrow">${escape(type==='weapons'?(r.modName||r.mod):type==='recipes'?'Recipe':r.modName||'Encounter')}</p><h2 id="record-title">${escape(r.name||words(r.output))}</h2><code>${escape(r.id)}</code></div><button class="icon-button" data-close-detail aria-label="Close details">×</button></div><div class="dialog-body">${content}<div class="detail-section"><button data-copy-id="${escape(r.id)}">Copy ${type==='recipes'?'recipe':'item'} ID</button><span data-copy-status class="subtle" role="status" style="font-size:11px;margin-left:12px"></span></div></div>`;
  if(!dialog.open)dialog.showModal();
  if(updateHash){const key=type==='weapons'?'item':type==='recipes'?'recipe':'boss';history.pushState(null,'',location.pathname+location.search+'#'+key+'='+encodeURIComponent(id));}
}
function readHash(){const hash=new URLSearchParams(location.hash.slice(1));const id=hash.get(type==='weapons'?'item':type==='recipes'?'recipe':'boss');if(id)openDetail(id,false);else dialog?.close();}
container?.addEventListener('input',event=>{if((event.target as HTMLElement).matches('[data-filter]'))filterRecords();});
container?.addEventListener('change',event=>{if((event.target as HTMLElement).matches('[data-filter]'))filterRecords();});
container?.querySelector('[data-prev]')?.addEventListener('click',()=>{if(page>1){page--;render();container.scrollIntoView({block:'start'});}});
container?.querySelector('[data-next]')?.addEventListener('click',()=>{if(page<Math.ceil(filtered.length/pageSize)){page++;render();container.scrollIntoView({block:'start'});}});
document.addEventListener('click',async event=>{
 const target=event.target as HTMLElement;
 const detail=target.closest<HTMLElement>('[data-detail]');if(detail){openDetail(detail.dataset.detail!);return;}
 if(target.closest('[data-close-detail]'))dialog?.close();
 const copy=target.closest<HTMLElement>('[data-copy-id]');if(copy){try{await navigator.clipboard.writeText(copy.dataset.copyId!);const s=body?.querySelector('[data-copy-status]');if(s)s.textContent='Copied';}catch{const s=body?.querySelector('[data-copy-status]');if(s)s.textContent='Select the ID above to copy it.';}}
});
document.addEventListener('error',event=>{const img=event.target as HTMLImageElement;if(img?.tagName==='IMG'&&img.closest('.item-art')){img.hidden=true;const fallback=img.parentElement?.querySelector<HTMLElement>('.item-fallback');if(fallback)fallback.hidden=false;}},true);
dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
dialog?.addEventListener('close',()=>{if(location.hash)history.replaceState(null,'',location.pathname+location.search);});
window.addEventListener('hashchange',readHash);
if(container && type){
 fetch(`${base}/data/${type}.json`).then(r=>{if(!r.ok)throw new Error('Registry unavailable');return r.json();}).then(data=>{
  records=data;
  for(const select of container.querySelectorAll<HTMLSelectElement>('select[data-filter]')){
   const key=select.dataset.filter!;const values=[...new Set(records.map(r=>key==='productionTier'?tier(r):r[key]).filter(v=>v!==null&&v!==undefined&&v!==''))].sort((a:any,b:any)=>String(a).localeCompare(String(b),undefined,{numeric:true}));
   const label=select.options[0].text;
   select.innerHTML=`<option value="">${escape(label)}</option>`+values.map(v=>`<option value="${escape(v)}">${key==='type'?escape(records.find(r=>r.type===v)?.processName||words(String(v))):key==='productionTier'&&String(v)==='0'?'Foundation':(key==='styleTier'||key==='productionTier'?'Tier ':'')+escape(v)}</option>`).join('');
  }
  const q=new URLSearchParams(location.search).get('q');if(q){const field=container.querySelector<HTMLInputElement>('[data-filter="query"]');if(field)field.value=q;}
  filterRecords();readHash();
 }).catch(()=>{if(grid)grid.innerHTML='<div class="empty-state">The registry could not be loaded. Refresh this page to try again.</div>';});
}
