const container = document.querySelector<HTMLElement>('[data-registry]');
const type = container?.dataset.registry;
const ponderItems = new Set<string>(JSON.parse(container?.dataset.ponderItems || '[]'));
type RecipeTexture = string | [number, number, number];
let recipeArt: Record<string, RecipeTexture> = {};
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
function recipeArtImage(id:string | undefined, fluid = false) {
 const key = fluid && id ? 'fluid:' + id : id;
 const art = key && Object.hasOwn(recipeArt,key) ? recipeArt[key] : undefined;
 if (Array.isArray(art)) {
  const [atlas, column, row] = art;
  return `<span class="recipe-item-art recipe-item-atlas" aria-hidden="true" style="background-image:url('${base}/media/recipe-textures/items-${atlas}.webp');background-position:${column * 100 / 15}% ${row * 100 / 15}%"></span>`;
 }
 return art ? `<img class="recipe-item-art" src="${escape(base+'/'+art.replace(/^\/+/,''))}" alt="" loading="lazy" width="29" height="29" />` : '';
}
function recipeIngredientArt(value:any):string {
 if (typeof value === 'string') return value.startsWith('#') ? '' : recipeArtImage(value);
 if (value?.tag) return '';
 const options = Array.isArray(value) ? value : value?.options;
 if (!options) return recipeArtImage(value?.id || value?.item || value?.fluid, isFluidIngredient(value));
 const arts = options.slice(0, 2).map(recipeIngredientArt);
 return arts.length && arts.every(Boolean) ? `<span class="recipe-option-art" aria-hidden="true">${arts.join('<span>or</span>')}</span>` : '';
}
function isFluidIngredient(value:any):boolean {
 return value?.kind === 'fluid' || Boolean(value?.fluid) || value?.amount !== undefined;
}
function chanceOutput(recipe:any):boolean {
 return arr(recipe.outputs).some(output => output.id === recipe.output && output.chance < 1);
}
function recipeInputs(recipe:any):any[] {
 return arr(recipe.ingredients).flatMap(input=>[input,...arr(input.options),...arr(input.base)]);
}
function recipeOutputIds(recipe:any):string[] {
 return [recipe.output,...arr(recipe.outputs).map(output=>output.id)].filter(Boolean);
}
function recipeMatches(recipe:any,query:string,scope:string) {
 const inputs = recipeInputs(recipe);
 const outputIds = recipeOutputIds(recipe);
 if (scope && /^[\w.-]+:[\w./-]+$/.test(query)) {
  return scope==='output' ? outputIds.includes(query) : inputs.some(input=>input.id===query);
 }
 const output = [recipe.name,recipe.outputComponentLabel,...outputIds,...arr(recipe.outputs).map(row=>row.name)];
 const ingredients = inputs.flatMap(input=>[input.name,input.id,input.componentLabel]);
 const fields = scope==='output' ? output : scope==='ingredient' ? ingredients
  : [...output,...ingredients,recipe.id,recipe.modName,recipe.processName];
 const haystack = fields.join(' ').toLowerCase();
 return query.split(/\s+/).every(term=>haystack.includes(term));
}
function ingredientRecipeLink(recipe:any,input:any) {
 if (!input?.id || input.tag) return '';
 const matches = records.filter(entry=>entry.id!==recipe.id && recipeOutputIds(entry).includes(input.id));
 if (matches.length===1) {
  return ` <a class="recipe-input-link" href="#recipe=${encodeURIComponent(matches[0].id)}" aria-label="View recipe for ${escape(itemName(input))}">Recipe</a>`;
 }
 return matches.length ? ` <a class="recipe-input-link" href="${base}/recipes/?q=${encodeURIComponent(input.id)}&amp;scope=output#recipe-results" aria-label="View recipes for ${escape(itemName(input))}">Recipes</a>` : '';
}
function recipeIngredientName(recipe:any,entry:any):string {
 if(Array.isArray(entry))return entry.map(value=>recipeIngredientName(recipe,value)).join(' or ');
 const id=typeof entry==='string'?entry.replace(/^#/,''):entry?.id||entry?.item||entry?.tag||entry?.fluid;
 const known=recipeInputs(recipe).find(value=>id&&value.id===id);
 return itemName(known?{...entry,name:known.name}:entry);
}
function ingredient(v:any, { name = itemName(v), retained = v?.consumed === false, compact = false } = {}) {
 const fluid=isFluidIngredient(v)||v?.options?.every(isFluidIngredient);
 const amount=v?.amount??v?.count;
 const qty=fluid&&amount!==undefined?`${amount} mB`:amount&&amount!==1?`${amount} ×`:'';
 const matching=v?.tag&&!compact?` <span class="recipe-matching">Any matching ${fluid?'fluid':'item'}</span>`:'';
 const retainedLabel=retained&&!compact?' <span class="tag tag-gold">Retained catalyst</span>':'';
 return `<span class="recipe-ingredient">${recipeIngredientArt(v)}<span class="recipe-ingredient-name">${qty?`<span class="recipe-quantity">${escape(qty)}</span> `:''}${escape(name)}${matching}${retainedLabel}</span></span>`;
}
function assemblyIngredients(step:any,record:any,transition:string|undefined) {
 return arr(step.ingredients).map((entry:any,index:number)=>{
  const id=typeof entry==='string'?entry:entry.item||entry.id;
  if (transition && id === transition) return '';
  return `<small>${ingredient(entry, { name: recipeIngredientName(record,entry), retained: index===1&&step.keep_held_item })}</small>`;
 }).join('');
}
function itemTags(r:any) { return `<span class="tag tag-accent">${escape(r.styleName || 'Native handling')}</span>${r.grip?`<span class="tag">${escape(r.grip)}</span>`:''}`; }
function filterRecords() {
  const query=String(container?.querySelector<HTMLInputElement>('[data-filter="query"]')?.value || '').toLowerCase().trim();
  const scope=container?.querySelector<HTMLSelectElement>('[data-filter="scope"]')?.value || '';
  const filters=Array.from(container?.querySelectorAll<HTMLSelectElement>('select[data-filter]:not([data-filter="scope"])')||[]).map(s=>[s.dataset.filter!,s.value]);
  filtered=records.filter(r=>{
    if(query && type==='recipes' && !recipeMatches(r,query,scope))return false;
    if(query && type!=='recipes'){const haystack=[r.name,r.id,r.output,r.modName,r.styleName,r.archetype,r.grip,...arr(r.ingredients).map(i=>[i.name,i.id,i.tag,i.componentLabel,...arr(i.options).map(option=>option.name||option.id)].join(' '))].join(' ').toLowerCase();if(!query.split(/\s+/).every(q=>haystack.includes(q)))return false;}
    return filters.every(([key,value])=>!value||String(key==='productionTier'?tier(r):r[key])===value);
  });
  page=1;render();
}
function recipeRow(recipe:any) {
 const name = recipe.name || words(recipe.output);
 const inputs = arr(recipe.ingredients);
 const summary = inputs.slice(0,2).map(input=>`<li>${ingredient(input, { compact: true })}</li>`).join('');
 const extra = inputs.length > 2 ? `<li class="recipe-ingredients-hint">+ ${inputs.length-2} more</li>` : '';
 const art = recipeArtImage(recipe.output, recipe.outputKind === 'fluid');
 const progress = recipe.chapter ? chapterName(recipe.chapter) : hasTier(recipe) ? tierName(recipe) : '';
 const quantity = chanceOutput(recipe) ? 'Chance output' : recipe.outputKind==='fluid' ? outputQuantity(recipe) : `${recipe.count||1} ${recipe.count>1?'items':'item'}`;
 const progressBadge = progress ? `<span class="tag tag-gold">${escape(progress)}</span>` : '';
 return `<tr><td><div class="recipe-result"><span class="recipe-result-art" aria-hidden="true">${art}</span><div><button class="table-button" data-detail="${escape(recipe.id)}">${escape(name)}</button><div class="table-detail"><span class="recipe-quantity">${escape(quantity)}</span> · ${escape(recipe.modName||words(recipe.mod))}</div>${progressBadge?`<div class="recipe-result-progress">${progressBadge}</div>`:''}</div></div></td><td class="recipe-input-column"><ul class="recipe-preview-inputs">${summary}${extra}</ul></td><td class="recipe-process-cell"><span class="tag">${escape(recipe.processName||words(recipe.type))}</span></td><td class="recipe-progression-column">${progressBadge}</td></tr>`;
}
function render() {
  if(!grid)return;
  const shown=filtered.slice((page-1)*pageSize,page*pageSize);
  if(count)count.textContent=`${filtered.length.toLocaleString()} ${type==='bosses'?'encounters':type} ${filtered.length===records.length?'':'matched'}`;
  if(type==='weapons')grid.innerHTML=shown.map(r=>`<button class="weapon-card" data-detail="${escape(r.id)}" aria-label="View ${escape(r.name)}">${image(r)}<span class="weapon-content"><h3>${escape(r.name)}</h3><span class="mod">${escape(r.modName || r.mod)}</span><span class="tags">${itemTags(r)}</span></span></button>`).join('');
  if(type==='recipes')grid.innerHTML=shown.map(recipeRow).join('');
  if(type==='bosses')grid.innerHTML=shown.map(r=>`<button class="weapon-card" data-detail="${escape(r.id)}"><span class="item-art"><span class="item-fallback">${escape((r.name||r.id).slice(0,2).toUpperCase())}</span></span><span class="weapon-content"><h3>${escape(r.name)}</h3><span class="mod">${escape(r.modName||words(r.mod))}</span><span class="tags">${r.minimumLevel?`<span class="tag tag-gold">Boss L${escape(r.minimumLevel)}+</span>`:''}<span class="tag">${escape(r.classification||'Boss encounter')}</span></span></span></button>`).join('');
  if(!shown.length)grid.innerHTML=type==='recipes'?'<tr><td colspan="4" class="empty-state">No recipes match these filters.</td></tr>':'<div class="empty-state">No entries match these filters. Try a different name, item ID or category.</div>';
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
function recipeArrangement(record:any, recipe:any):string {
  if (!recipe.pattern?.length || !recipe.key) return '';
  const width = Math.max(...recipe.pattern.map((line:string)=>line.length));
  const cells = recipe.pattern.flatMap((line:string)=>line.padEnd(width,' ').split('')).map((symbol:string)=>{
    const entry = recipe.key[symbol];
    if (!entry) return '<div class="recipe-slot recipe-slot-empty" title="Empty slot"></div>';
    const name = escape(recipeIngredientName(record,entry));
    return `<div class="recipe-slot" title="${name}">${recipeIngredientArt(entry)}<span class="recipe-slot-name">${name}</span></div>`;
  }).join('');
  const name = escape(record.name || words(record.output));
  const quantity = escape(chanceOutput(record) ? 'Chance output' : outputQuantity(record));
  const heading = recipe.type === 'create:mechanical_crafting' ? 'Mechanical crafting' : 'Crafting arrangement';
  return `<section class="recipe-arrangement"><h3>${heading}</h3>
    <div class="recipe-crafting${width > 3 ? ' recipe-crafting-wide' : ''}">
      <div class="recipe-grid-scroll"${width > 3 ? ' role="region" aria-label="Crafting slots" tabindex="0"' : ''}><div class="recipe-grid" style="--recipe-columns:${width}">${cells}</div></div>
      <span class="recipe-crafting-arrow" aria-hidden="true">→</span>
      <div class="recipe-crafted-result">${recipeArtImage(record.output, record.outputKind === 'fluid')}<span><span class="recipe-quantity">${quantity}</span> ${name}</span></div>
    </div>
  </section>`;
}
function recipeAssembly(record:any, recipe:any):string {
  if (!recipe.sequence?.length) return '';
  const transition = recipe.transitional_item?.id || recipe.transitional_item?.item;
  const start = recipe.ingredient
    ? `<div class="recipe-assembly-start"><span>Start with</span> ${ingredient(recipe.ingredient,{ name: recipeIngredientName(record,recipe.ingredient) })}</div>`
    : '';
  const loops = recipe.loops ? ` <span class="tag tag-gold">${escape(recipe.loops)} pass${recipe.loops===1?'':'es'}</span>` : '';
  const stages = recipe.sequence.map((step:any)=>`<li><div><strong>${escape(words(step.type))}</strong>${assemblyIngredients(step,record,transition)}</div></li>`).join('');
  return `<section class="recipe-assembly"><h3>Assembly sequence${loops}</h3>${start}
    <ol class="sequence-list">${stages}</ol>
    ${transition?`<p class="detail-note recipe-transition">${recipeArtImage(transition)} <span>Work in progress <code>${escape(transition)}</code></span></p>`:''}
  </section>`;
}
const chanceFormat = new Intl.NumberFormat('en', { style: 'percent', maximumFractionDigits: 2 });
function recipeDetail(record:any) {
  const recipe = record.recipe || {};
  const staging = recipeArrangement(record, recipe) || recipeAssembly(record, recipe);
  const outputList = arr(record.outputs || recipe.results).filter(output=>output.id!==record.output||output.chance!==undefined);
  const encodedOutput = encodeURIComponent(record.output);
  const uses = records.some(recipe=>recipeInputs(recipe).some(input=>input.id===record.output));
  const useLink = uses?`<a class="button" href="${base}/recipes/?q=${encodedOutput}&amp;scope=ingredient#recipe-results">Find recipes that use this</a>`:'';
  const ponderLink = ponderItems.has(record.output)?`<a class="button" href="${base}/ponder/?q=${encodedOutput}">Ponder guides for this item</a>`:'';
  const pathLinks = useLink||ponderLink?`<div class="detail-section recipe-path-links">${useLink}${ponderLink}</div>`:'';
  const inputs = arr(record.ingredients).map(input=>`<li>${ingredient(input)}${ingredientRecipeLink(record,input)}</li>`).join('');
  const quantity = chanceOutput(record) ? 'Chance output' : outputQuantity(record);
  const outputs = outputList.map(output=>{
    const name = escape(output.name || words(output.id || output.item));
    const amount = output.amount !== undefined ? `${output.amount} mB` : `${output.count || 1} ×`;
    const chance = output.chance === undefined ? '' : ` <span class="tag">${escape(chanceFormat.format(Number(output.chance)))} chance</span>`;
    return `<li><span class="recipe-ingredient">${recipeArtImage(output.id || output.item, isFluidIngredient(output))}<span><span class="recipe-quantity">${escape(amount)}</span> ${name}${chance}</span></span></li>`;
  }).join('');
  return `<dl class="detail-grid recipe-facts">
    <div><dt>Output per recipe</dt><dd>${escape(quantity)} ${chanceOutput(record)?'':escape(record.name||words(record.output))}</dd></div>
    <div><dt>Process</dt><dd>${escape(record.processName||words(record.type))}</dd></div>
    ${hasTier(record)?`<div><dt>Production tier</dt><dd>${escape(tierName(record))}${record.chapter?' · '+escape(chapterName(record.chapter)):''}</dd></div>`:''}
    ${recipe.heat_requirement?`<div><dt>Heat</dt><dd>${escape(words(recipe.heat_requirement))}</dd></div>`:''}
  </dl>
  ${staging}
  <h3>Ingredients</h3><ul class="ingredient-list recipe-ingredient-list">${inputs}</ul>
  ${arr(record.gates).length?`<div class="callout"><strong>Progression requirements</strong><p>${arr(record.gates).map(g=>escape(label(g))).join(' · ')}</p></div>`:''}
  ${arr(record.bossIngredients).length?`<div class="callout"><strong>Boss drops used</strong><p>${arr(record.bossIngredients).map(g=>escape(label(g))).join(' · ')}</p></div>`:''}
  ${outputs?`<div class="detail-section"><h3>Outputs &amp; chances</h3><ul class="ingredient-list recipe-ingredient-list">${outputs}</ul></div>`:''}
  ${pathLinks}`;
}
function openDetail(id:string,updateHash=true) {
  const r=records.find(r=>r.id===id);if(!r||!dialog||!body)return;
  let content='';
  if(type==='weapons')content=`<dl class="detail-grid"><div><dt>Weapon style</dt><dd>${escape(r.styleName||'Native handling')}</dd></div><div><dt>Moveset provider</dt><dd>${escape(r.provider||'Native')}</dd></div><div><dt>Archetype</dt><dd>${escape(r.archetype||'—')}</dd></div><div><dt>Grip</dt><dd>${escape(r.grip||'—')}</dd></div>${r.styleTier?`<div><dt>Style tier</dt><dd>${escape(r.styleTier)}</dd></div>`:''}${hasTier(r)?`<div><dt>Crafting progression</dt><dd>${escape(tierName(r))}</dd></div>`:''}${r.lootTier!==null&&r.lootTier!==undefined?`<div><dt>Loot tier</dt><dd>${escape(r.lootTier)}</dd></div>`:''}</dl>${r.styleId?`<p class="detail-note">Style ID <code>${escape(r.styleId)}</code></p>`:''}${statRows(r)}<div class="detail-section"><a href="${base}/recipes/?q=${encodeURIComponent(r.id)}" class="button">Find crafting recipes →</a></div>`;
  else if(type==='recipes')content=recipeDetail(r);
  else content=`<dl class="detail-grid"><div><dt>Origin</dt><dd>${escape(r.modName||words(r.mod))}</dd></div>${r.minimumLevel?`<div><dt>Boss level floor</dt><dd>${escape(r.minimumLevel)}</dd></div>`:''}${r.lootTier!==null&&r.lootTier!==undefined?`<div><dt>Loot tier</dt><dd>${escape(r.lootTier)}</dd></div>`:''}</dl><h3>Reward pool</h3><ul class="ingredient-list">${arr(r.rewards).map(i=>`<li>${escape(label(i))||escape(words(i))}</li>`).join('')}</ul><div class="detail-section"><a class="button" href="${base}/loot/">How unidentified rewards work →</a></div>`;
  const art = type==='weapons'?image(r):type==='recipes'?recipeArtImage(r.output,r.outputKind==='fluid'):'';
  if(type==='recipes') dialog.classList.add('recipe-dialog');
  body.innerHTML=`<div class="dialog-header">${art}<div class="dialog-title"><p class="eyebrow">${escape(type==='weapons'?(r.modName||r.mod):type==='recipes'?'Recipe':r.modName||'Encounter')}</p><h2 id="record-title">${escape(r.name||words(r.output))}</h2><code>${escape(r.id)}</code></div><button class="icon-button" data-close-detail aria-label="Close details">×</button></div><div class="dialog-body">${content}<div class="detail-section"><button data-copy-id="${escape(r.id)}">Copy ${type==='recipes'?'recipe':'item'} ID</button><span data-copy-status class="subtle" role="status" style="font-size:11px;margin-left:12px"></span></div></div>`;
  if(!dialog.open)dialog.showModal();
  else if(type==='recipes')dialog.scrollTop=0;
  if(updateHash){const key=type==='weapons'?'item':type==='recipes'?'recipe':'boss';history.pushState(null,'',location.pathname+location.search+'#'+key+'='+encodeURIComponent(id));}
}
function detailId(){return new URLSearchParams(location.hash.slice(1)).get(type==='weapons'?'item':type==='recipes'?'recipe':'boss');}
function readHash(){const id=detailId();if(id)openDetail(id,false);else if(dialog?.open)dialog.close();}
container?.addEventListener('input',event=>{if((event.target as HTMLElement).matches('[data-filter]'))filterRecords();});
container?.addEventListener('change',event=>{if((event.target as HTMLElement).matches('[data-filter]'))filterRecords();});
container?.querySelector('[data-prev]')?.addEventListener('click',()=>{if(page>1){page--;render();container.scrollIntoView({block:'start'});}});
container?.querySelector('[data-next]')?.addEventListener('click',()=>{if(page<Math.ceil(filtered.length/pageSize)){page++;render();container.scrollIntoView({block:'start'});}});
container?.querySelector('[data-recipe-clear]')?.addEventListener('click',()=>{
 const url=new URL(location.href);
 for (const field of container.querySelectorAll<HTMLInputElement|HTMLSelectElement>('[data-filter]')) {
  field.value='';
  url.searchParams.delete(field.dataset.filter==='query'?'q':field.dataset.filter!);
 }
 history.replaceState(null,'',url);
 filterRecords();
 container.querySelector<HTMLInputElement>('[data-filter="query"]')?.focus();
});
document.addEventListener('click',async event=>{
 const target=event.target as HTMLElement;
 const detail=target.closest<HTMLElement>('[data-detail]');if(detail){openDetail(detail.dataset.detail!);return;}
 if(target.closest('[data-close-detail]'))dialog?.close();
 const copy=target.closest<HTMLElement>('[data-copy-id]');if(copy){try{await navigator.clipboard.writeText(copy.dataset.copyId!);const s=body?.querySelector('[data-copy-status]');if(s)s.textContent='Copied';}catch{const s=body?.querySelector('[data-copy-status]');if(s)s.textContent='Select the ID above to copy it.';}}
});
document.addEventListener('error',event=>{
 const img=event.target as HTMLImageElement;
 if(img?.tagName!=='IMG')return;
 if(img.classList.contains('recipe-item-art'))img.hidden=true;
 if(img.closest('.item-art')){img.hidden=true;const fallback=img.parentElement?.querySelector<HTMLElement>('.item-fallback');if(fallback)fallback.hidden=false;}
},true);
dialog?.addEventListener('click',event=>{if(event.target===dialog)dialog.close();});
dialog?.addEventListener('close',()=>{if(detailId())history.replaceState(null,'',location.pathname+location.search);});
window.addEventListener('hashchange',readHash);
if(container && type){
 const artwork = type === 'recipes'
  ? fetch(`${base}/data/recipe-textures.json`).then(r=>r.ok ? r.json() : {}).catch(()=>({}))
  : Promise.resolve({});
 const entries = fetch(`${base}/data/${type}.json`).then(r=>{if(!r.ok)throw new Error('Registry unavailable');return r.json();});
 Promise.all([entries, artwork]).then(([data, textures])=>{
  const modNames: Record<string, string> = JSON.parse(container.dataset.recipeModNames || '{}');
  records = type === 'recipes' ? data.map((recipe: any) => ({
   ...recipe, modName: Object.hasOwn(modNames, recipe.mod) ? modNames[recipe.mod] : recipe.modName,
  })) : data;
  recipeArt=textures ?? {};
  const params=new URLSearchParams(location.search);
  for(const select of container.querySelectorAll<HTMLSelectElement>('select[data-filter]')){
   const key=select.dataset.filter!;
   if (key!=='scope') {
    const values=[...new Set(records.map(r=>key==='productionTier'?tier(r):r[key]).filter(v=>v!==null&&v!==undefined&&v!==''))].sort((a:any,b:any)=>String(a).localeCompare(String(b),undefined,{numeric:true}));
    const label=select.options[0].text;
    select.innerHTML=`<option value="">${escape(label)}</option>`+values.map(v=>`<option value="${escape(v)}">${key==='type'?escape(records.find(r=>r.type===v)?.processName||words(String(v))):key==='chapter'?escape(chapterName(v)):key==='productionTier'&&String(v)==='0'?'Foundation':(key==='styleTier'||key==='productionTier'?'Tier ':'')+escape(v)}</option>`).join('');
   }
   const selected=params.get(key);
   if(type==='recipes'&&Array.from(select.options).some(option=>option.value===selected)) select.value=selected!;
  }
  const q=params.get('q');if(q){const field=container.querySelector<HTMLInputElement>('[data-filter="query"]');if(field)field.value=q;}
  filterRecords();readHash();
 }).catch(()=>{if(grid)grid.innerHTML=type==='recipes'?'<tr><td colspan="4" class="empty-state">The recipes could not be loaded. Refresh this page to try again.</td></tr>':'<div class="empty-state">The registry could not be loaded. Refresh this page to try again.</div>';});
}
