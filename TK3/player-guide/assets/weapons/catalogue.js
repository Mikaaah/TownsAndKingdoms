/* TNK weapon reference: presentation only; this never evaluates game code. */
'use strict';
(() => {
  const root = document.querySelector('#weapon-catalogue');
  if (!root) return;
  const base = document.body.dataset.base || '../';
  const dataURL = new URL(base + 'assets/data/weapons.json', location.href);
  const artURL = new URL('../weapons/', dataURL);
  const fields = [
    ['damage_bonus', 'Damage bonus', 'Damage', ''],
    ['speed_bonus', 'Speed bonus', 'Speed', ''],
    ['armor_negation', 'Armor negation bonus', 'Armor negation', '%'],
    ['impact', 'Impact bonus', 'Impact', ''],
    ['max_strikes', 'Extra targets', 'Extra targets', '']
  ];
  const familyClass = value => ({'Dawn Day':'dawn','Epic Fight':'epic','WoM':'wom','WoM Plus':'plus','TNK':'tnk','Unassigned':'unassigned'})[value] || 'tnk';
  const esc = value => String(value ?? '').replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const numeric = value => typeof value === 'number' && Number.isFinite(value);
  const number = value => numeric(value) ? new Intl.NumberFormat('en', {maximumFractionDigits:3}).format(value) : '—';
  const bonus = (value, unit = '') => numeric(value) ? (value >= 0 ? '+' : '') + number(value) + unit : '—';
  const normalize = value => String(value || '').normalize('NFKD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  const isWeapon = item => item.kind === 'Melee weapon' || item.kind === 'Ranged weapon';
  const ownBonuses = item => Array.isArray(item.bonuses) ? item.bonuses.filter(row => row && typeof row === 'object') : [];
  const hasBonuses = row => row && fields.some(([field]) => numeric(row[field]));
  const primaryBonuses = item => ownBonuses(item).find(row => normalize(row.style) === 'common' && hasBonuses(row)) || ownBonuses(item).find(hasBonuses) || null;
  let data, items = [], byID, shown = 48, opener = null, inputTimer;

  // These original silhouettes identify equipment categories, not item models.
  function glyph(kind) {
    const paths = kind === 'Ranged weapon'
      ? '<path d="M10 4c13 2 13 22 0 24l5-12zM10 4l5 12-5 12M6 16h23m-5-4 5 4-5 4"/>'
      : kind === 'Shield'
        ? '<path d="m16 3 11 4v9c0 6-6 11-11 14C11 27 5 22 5 16V7zM16 8v16"/>'
        : kind === 'Tool'
          ? '<path d="m9 27 13-17M6 10c7-7 15-6 22 1l-4 5c-5-5-11-6-16-1z"/>'
          : kind === 'Utility / casting item'
            ? '<path d="m9 28 13-20M19 4l8 4-4 8-8-4zM5 8h5M7 5v6M26 24h4M28 22v4"/>'
            : '<path d="m6 27 5-5m-3-5 7 7m-4-5L25 4l3 1-1 4-14 13M4 29l3-1"/>';
    return '<svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">' + paths + '</svg>';
  }
  function image(item) {
    if (item.icon && !String(item.icon).includes('..') && !/^[a-z]+:/i.test(item.icon)) {
      return '<img src="' + esc(new URL(item.icon, artURL).href) + '" alt="" width="48" height="48" loading="lazy">';
    }
    return glyph(item.kind);
  }
  function status(item) {
    return item.status === 'excluded'
      ? '<span class="wk-status wk-excluded">Excluded item</span>'
      : item.status === 'provisional' ? '<span class="wk-status wk-provisional">Provisional</span>' : '';
  }
  function option(value, label) { return '<option value="' + esc(value) + '">' + esc(label) + '</option>'; }
  function metricSort(item, field) {
    const values = ownBonuses(item).map(row => row[field]).filter(numeric);
    return values.length ? Math.max(...values) : -Infinity;
  }
  function init() {
    const mods = [...new Map(items.map(item => [item.mod, item.mod_name || item.mod])).entries()].sort((a,b) => a[1].localeCompare(b[1]));
    const types = [...new Map(items.map(item => [item.weapon_type || '__unassigned', item.type_name || item.weapon_type || 'No explicit mapping'])).entries()].sort((a,b) => a[1].localeCompare(b[1]));
    root.classList.add('wk-ready');
    root.innerHTML = '<div class="wk-intro"><div><span class="wk-eyebrow">THE TNK3 ARMOURY</span><h2>Find your fighting style.</h2><p>Search weapons, compare native capability bonuses, and explore the movesets behind them.</p></div><span class="wk-version">' + esc(data.meta?.version || 'CB 1.1.2') + '</span></div>' +
      '<form class="wk-filters" data-weapon-filter-form><label class="wk-search"><span>Search the armoury</span><input name="wq" type="search" placeholder="Whisperwind, staff, Cataclysm…" autocomplete="off"></label>' +
      '<div class="wk-selects"><label><span>Mod</span><select name="mod">' + option('', 'Every mod') + mods.map(([value,label]) => option(value,label)).join('') + '</select></label>' +
      '<label><span>Equipment</span><select name="kind">' + option('weapons', 'Melee & ranged weapons') + option('', 'All mapped equipment') + ['Melee weapon','Ranged weapon','Shield','Tool','Utility / casting item'].map(kind => option(kind,kind)).join('') + '</select></label>' +
      '<label><span>Moveset family</span><select name="family">' + option('', 'Every moveset family') + ['Dawn Day','Epic Fight','WoM','WoM Plus','TNK','Unassigned'].map(family => option(family,family)).join('') + '</select></label>' +
      '<label><span>Weapon type</span><select name="type">' + option('', 'Every weapon type') + types.map(([value,label]) => option(value,label)).join('') + '</select></label></div>' +
      '<div class="wk-controls"><label class="wk-check"><input name="excluded" type="checkbox"><span>Include excluded WoM items</span></label><label class="wk-sort"><span>Sort by</span><select name="sort">' + [['name','Weapon name'],['mod','Mod'],['damage_bonus','Damage bonus'],['speed_bonus','Speed bonus'],['armor_negation','Armor negation bonus']].map(([value,label]) => option(value,label)).join('') + '</select></label><button class="wk-reset" type="reset">Reset filters</button></div></form>' +
      '<div class="wk-results-header"><p class="wk-count" role="status" aria-live="polite"></p><span>Bonuses, not final damage or DPS</span></div><div class="wk-grid"></div>' +
      '<div class="wk-empty" hidden><strong>No matching equipment.</strong><p>Try a different name or reset the filters.</p><button class="wk-button" type="button" data-reset>Reset filters</button></div>' +
      '<div class="wk-more-wrap"><button class="wk-button" type="button" data-more>Show more weapons</button></div>' +
      '<p class="wk-footnote">A dash means the value is inherited or absent from this item definition. Type bonuses and in-game item attributes can still apply. Category silhouettes identify equipment classes; they are not weapon renders.</p>' +
      '<dialog class="wk-dialog" aria-labelledby="wk-detail-title"><div class="wk-dialog-top"><span>WEAPON REFERENCE</span><button type="button" data-close aria-label="Close weapon details">×</button></div><div class="wk-detail"></div></dialog>';
    const form = root.querySelector('form');
    const params = new URLSearchParams(location.search);
    for (const key of ['wq','mod','kind','family','type','sort']) {
      const input = form.elements.namedItem(key);
      const value = params.get(key);
      if (value !== null && (input.tagName !== 'SELECT' || [...input.options].some(o => o.value === value))) input.value = value;
    }
    form.elements.excluded.checked = params.get('excluded') === '1';
    form.addEventListener('submit', event => event.preventDefault());
    form.addEventListener('input', event => {
      clearTimeout(inputTimer);
      if (event.target.name === 'wq') inputTimer = setTimeout(() => {shown=48;render();},100);
      else {shown=48;render();}
    });
    form.addEventListener('reset', () => setTimeout(() => {shown=48;render();},0));
    root.addEventListener('click', event => {
      const details = event.target.closest('[data-weapon]');
      if (details) {opener=details;openDetails(byID.get(details.dataset.weapon));return;}
      if (event.target.closest('[data-more]')) {shown+=48;render();return;}
      if (event.target.closest('[data-reset]')) {form.reset();return;}
      if (event.target.closest('[data-close]')) root.querySelector('dialog').close();
      const copy = event.target.closest('[data-copy-weapon]');
      if (copy) copyID(copy);
    });
    const dialog = root.querySelector('dialog');
    dialog.addEventListener('close', () => opener?.focus({preventScroll:true}));
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect=dialog.getBoundingClientRect();
      if (event.clientX<rect.left || event.clientX>rect.right || event.clientY<rect.top || event.clientY>rect.bottom) dialog.close();
    });
    root.addEventListener('error', event => {
      const img=event.target;
      if (img.tagName==='IMG') img.replaceWith(document.createRange().createContextualFragment(glyph(img.closest('[data-kind]')?.dataset.kind || 'Melee weapon')));
    },true);
    render();
  }
  function card(item) {
    const row=primaryBonuses(item),family=familyClass(item.type_family),mapped=Boolean(item.weapon_type),automatic=mapped&&!item.capability;
    const accent=/^#[0-9a-f]{6}$/i.test(item.trail_color||'') ? ' style="--wk-trail:' + esc(item.trail_color) + '"' : '';
    const stats=row ? '<div class="wk-card-metrics">' + fields.slice(0,3).map(([key,label,short,unit]) => '<div><span title="' + esc(label) + '">' + esc(short) + '</span><strong>' + bonus(row[key],unit) + '</strong></div>').join('') + '</div><div class="wk-card-minor"><span>Impact ' + bonus(row.impact) + '</span><span>Extra targets ' + bonus(row.max_strikes) + '</span></div><p class="wk-style-note">' + esc(row.style || 'Common') + ' bonuses' + (ownBonuses(item).filter(hasBonuses).length>1 ? ' · more styles in details' : '') + '</p>' : '<div class="wk-native"><strong>'+(automatic?'Automatic assignment':mapped?'Native preset':'Assignment unverified')+'</strong><span>'+(automatic?'Verified native class or keyword mapping; no item capability JSON.':mapped?'No explicit attribute bonuses in this item definition.':'No explicit capability; automatic assignment is unverified.')+'</span></div>';
    return '<article class="wk-card wk-family-' + family + '" data-kind="' + esc(item.kind) + '"' + accent + '><div class="wk-card-flags"><span>' + esc(item.kind.replace(' weapon','')) + '</span>' + status(item) + '</div><button class="wk-card-open" type="button" data-weapon="' + esc(item.id) + '" aria-label="View ' + esc(item.name) + ' details"><span class="wk-art">' + image(item) + '</span><span><strong>' + esc(item.name) + '</strong><small>' + esc(item.mod_name || item.mod) + '</small></span><span class="wk-open-arrow" aria-hidden="true">↗</span></button><div class="wk-type"><span class="wk-family-mark"></span><span>' + esc(item.type_name || item.weapon_type) + '</span><small>' + esc(item.type_family) + '</small></div>' + stats + '<code class="wk-item-id">' + esc(item.id) + '</code></article>';
  }
  function render() {
    const form=root.querySelector('form'),values=new FormData(form),terms=normalize(values.get('wq')).split(/\s+/).filter(Boolean);
    const mod=values.get('mod'),kind=values.get('kind'),family=values.get('family'),type=values.get('type'),sort=values.get('sort'),excluded=values.get('excluded')==='on';
    const matched=items.filter(item => (excluded || item.status!=='excluded') && (!mod || item.mod===mod) && (!kind || (kind==='weapons' ? isWeapon(item) : item.kind===kind)) && (!family || item.type_family===family) && (!type || (item.weapon_type||'__unassigned')===type) && terms.every(term => item.search.includes(term)));
    matched.sort((a,b) => (sort==='mod' ? (a.mod_name||a.mod).localeCompare(b.mod_name||b.mod) : sort==='name' ? 0 : metricSort(b,sort)-metricSort(a,sort)) || a.name.localeCompare(b.name) || a.id.localeCompare(b.id));
    root.querySelector('.wk-grid').innerHTML=matched.slice(0,shown).map(card).join('');
    root.querySelector('.wk-empty').hidden=matched.length>0;
    root.querySelector('[data-more]').hidden=matched.length<=shown;
    root.querySelector('[data-more]').textContent='Show ' + Math.min(48,Math.max(0,matched.length-shown)) + ' more';
    root.querySelector('.wk-count').textContent=matched.length.toLocaleString('en') + ' matches' + (matched.length>shown ? ' · showing '+shown : '') + ' / ' + items.length + ' mapped entries';
    const url=new URL(location.href);
    for(const key of ['wq','mod','kind','family','type','sort']){
      const value=values.get(key);
      const fallback=key==='kind'?'weapons':key==='sort'?'name':'';
      if(value!==fallback)url.searchParams.set(key,value);else url.searchParams.delete(key);
    }
    if(excluded)url.searchParams.set('excluded','1');else url.searchParams.delete('excluded');
    try{history.replaceState(null,'',url);}catch{}
  }
  function openDetails(item) {
    if(!item)return;
    const rows=ownBonuses(item),has=rows.some(hasBonuses),mapped=Boolean(item.weapon_type),automatic=mapped&&!item.capability;
    const stats=has ? '<div class="wk-stat-scroll"><table class="wk-detail-stats"><thead><tr><th scope="col">Style</th>' + fields.map(([,label]) => '<th scope="col">'+esc(label)+'</th>').join('') + '</tr></thead><tbody>' + rows.map(row => '<tr><th scope="row">'+esc(row.style||'Common')+'</th>'+fields.map(([key,, ,unit]) => '<td'+(!numeric(row[key])?' title="Inherited or absent"':'')+'>'+bonus(row[key],unit)+'</td>').join('')+'</tr>').join('') + '</tbody></table></div>' : '<p class="wk-detail-native">'+(automatic?'<strong>Automatic native assignment.</strong> The class or keyword mapping is verified, but this item has no explicit capability JSON. No bonus values are inferred here.':mapped?'This item keeps its native preset attributes. No explicit bonus values are listed in its capability definition.':'No explicit capability was found for this weapon. Its automatic assignment has not been verified; no combat type or bonus values are inferred here.')+'</p>';
    const baseStats=item.base_stats && (numeric(item.base_stats.damage)||numeric(item.base_stats.speed)) ? '<section class="wk-base-stats"><h3>Base item stats</h3><div><span>Damage <strong>'+number(item.base_stats.damage)+'</strong></span><span>Attack speed <strong>'+number(item.base_stats.speed)+' attacks/s</strong></span></div><p>'+esc(item.base_stats.source||'Verified item/config values; separate from capability bonuses.')+'</p></section>' : '';
    root.querySelector('.wk-detail').innerHTML='<header class="wk-detail-header wk-family-'+familyClass(item.type_family)+'"><span class="wk-art" data-kind="'+esc(item.kind)+'">'+image(item)+'</span><div><p class="wk-eyebrow">'+esc(item.mod_name||item.mod)+'</p><h2 id="wk-detail-title">'+esc(item.name)+'</h2><p>'+esc(item.kind)+'</p></div></header>'+status(item)+'<div class="wk-detail-type"><strong>'+esc(item.type_name||item.weapon_type||'No explicit mapping')+'</strong><span>'+esc(item.type_family)+'</span><code>'+esc(item.weapon_type||'Assignment unverified')+'</code></div>'+(item.notes?'<p class="wk-item-notes">'+esc(item.notes)+'</p>':'')+'<h3>Capability bonuses</h3><p class="wk-explanation">These are additions to item or preset stats. They are not final damage or DPS. “Extra targets” is a bonus to the native target count. A dash means inherited or absent.</p>'+stats+baseStats+'<div class="wk-registry"><code>'+esc(item.id)+'</code><button type="button" data-copy-weapon="'+esc(item.id)+'">Copy item ID</button></div>'+(item.definition?'<p class="wk-source">Definition: <code>'+esc(item.definition)+'</code></p>':'')+(item.capability?'<details class="wk-raw"><summary>Exact capability JSON</summary><pre><code>'+esc(JSON.stringify(item.capability,null,2))+'</code></pre></details>':'<p class="wk-source">No explicit capability JSON is recorded for this entry.</p>');
    const dialog=root.querySelector('dialog');
    dialog.showModal();
    dialog.querySelector('[data-close]').focus();
    dialog.scrollTop=0;
  }
  async function copyID(button) {
    try{await navigator.clipboard.writeText(button.dataset.copyWeapon);button.textContent='Copied';}
    catch{button.textContent='Select the ID to copy';const code=button.previousElementSibling;if(code){const range=document.createRange();range.selectNodeContents(code);const selection=getSelection();selection.removeAllRanges();selection.addRange(range);}}
  }
  async function load() {
    root.setAttribute('aria-busy','true');
    try{
      const response=await fetch(dataURL);
      if(!response.ok)throw new Error('Catalogue request failed');
      data=await response.json();
      if(!Array.isArray(data.items)||!data.items.length)throw new Error('Catalogue data is empty');
      items=data.items.filter(item => item && typeof item.id==='string').map(item => ({...item,name:item.name||item.id,search:normalize([item.name,item.id,item.mod_name,item.mod,item.kind,item.type_name,item.weapon_type,item.type_family,item.notes].join(' '))}));
      byID=new Map(items.map(item => [item.id,item]));
      init();
    }catch{
      root.innerHTML='<div class="wk-load-error" role="status"><h2>The armoury could not load.</h2><p>The complete tables below remain available. Check your connection and try again.</p><button type="button" class="wk-button" data-retry>Try again</button></div>';
      root.querySelector('[data-retry]').addEventListener('click',load,{once:true});
    }finally{root.removeAttribute('aria-busy');}
  }
  load();
})();
