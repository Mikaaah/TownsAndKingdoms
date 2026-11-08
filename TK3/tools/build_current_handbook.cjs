/* Build the dated TNK3 documentation snapshot. This never evaluates game code. */
'use strict';
const fs=require('fs'),path=require('path'),crypto=require('crypto');
const root=path.resolve(__dirname,'../handbook-source/current');
const out=path.resolve(__dirname,'../player-guide');
const pack=path.resolve(__dirname,'..');
const BASE='/TownsAndKingdoms/',CANONICAL='https://mikaaah.github.io'+BASE;
const read=p=>fs.readFileSync(p,'utf8');
const data=n=>JSON.parse(read(path.join(root,'data',n+'.json')));
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const sha=s=>crypto.createHash('sha256').update(s).digest('hex');
const slug=s=>String(s).replace(/<[^>]*>/g,'').toLowerCase().normalize('NFKD').replace(/[\u0300-\u036f]/g,'').replace(/[^\p{L}\p{N}\s_-]/gu,'').trim().replace(/\s+/g,'-');
const human=s=>String(s).replace(/^#/,'').split(':').at(-1).replace(/^tk3_/,'').replaceAll('_',' ').replace(/\b\w/g,c=>c.toUpperCase());
const write=(p,s)=>{fs.mkdirSync(path.dirname(p),{recursive:true});fs.writeFileSync(p,s);};
const S=data('snapshot'),inventory=data('inventory'),skills=data('skills'),char=data('character');
const modName=item=>({'towns-kingdoms-progression':'TnK Progression','resonant-arcana':'Resonant Arcana','create-alchemical-lasers':'Alchemical Lasers','flow-control-streams-reflowing-addon':'Flow Control','combat-punchy-epic-fight-x-punchy-x-punchy-moves':'Combat Punchy'})[item.slug]||item.name;
const entries=JSON.parse(read(path.join(root,'pages.json')));
const search=[],rendered=[],routes=new Set;
const groups=[
 ['Start here',[['start/','Your first workshop'],['quests/','Questbook'],['jei/','JEI & Ponder controls'],['servers/','Play together']]],
 ['Build & automate',[['progression/','The ten chapters'],['automation/','Reliable automation'],['recipes/','Construction recipes'],['storage/','AE2 & storage'],['engineering/','Immersive Engineering'],['magic/','Magic & lasers'],['transport/','Transport & Aeronautics'],['nuclear/','Nuclear engineering'],['workshop/','Workshop features'],['trading-hub/','Trading Hub'],['farming/','Farming & building']]],
 ['Character & adventure',[['character/','Your character'],['skills/','Skill tree'],['origins/','Twenty origins'],['titles/','Titles & rewards'],['loot/','Unidentified Loot'],['exploration/','Exploration & combat']]],
 ['Project reference',[['projects/','Modding Hub'],['mods/','Mod inventory'],['mods/comparison/','TK2 → TNK3 projects'],['ponder/','Ponder lesson index'],['changelog/','Beta 1.0 changelog'],['status/','Snapshot & sources'],['credits/','Credits']]],
];
const artFiles=['rotation_mechanism','sealed_mechanism','calculation_mechanism','reinforced_mechanism','industrial_mechanism','arcane_mechanism','eclipse_mechanism'];
const chapterNames=['Manual','Andesite','Copper','Brass','Calculation','Reinforced','Industrial','Arcane','Eclipse','Creation'];
const assetFingerprint=sha(read(path.join(root,'wiki.css'))+read(path.join(root,'wiki.js'))).slice(0,12);
const fingerprints=fs.readdirSync(path.join(root,'pages')).sort().map(f=>[f,sha(fs.readFileSync(path.join(root,'pages',f)))]);
const dataFingerprints=fs.readdirSync(path.join(root,'data')).sort().map(f=>[f,sha(fs.readFileSync(path.join(root,'data',f)))]);
const buildFingerprint=sha(JSON.stringify({snapshot:S,content:fingerprints,data:dataFingerprints,assets:assetFingerprint,builder:sha(fs.readFileSync(__filename))})).slice(0,20);
const sourceNote='<div class="callout"><strong>Beta 1.0 · Current pack reference</strong><span>Explore the mods, production route and character systems included in this beta. The questbook remains in progress. <a href="'+BASE+'status/">About this version →</a></span></div>';
const icon=(name,cls='')=>'<img class="pixel '+cls+'" src="'+BASE+'assets/mechanisms/'+esc(name)+'.png" alt="" width="32" height="32">';
function nav(route){
 let html='<a class="sidebar-home" href="'+BASE+'"><span class="nav-mark">III</span><span>BEYOND THE FORGE<small>The field guide</small></span></a>';
 for(const [group,items] of groups){
  html+='<section class="nav-group"><h2>'+esc(group)+'</h2>';
  for(const [url,label] of items){
   html+='<a href="'+BASE+url+'"'+(route===url?' aria-current="page"':'')+'>'+esc(label)+'</a>';
   if(url==='progression/')html+='<details class="chapter-nav"'+(route.startsWith('progression/')&&route!=='progression/'?' open':'')+'><summary>Chapter walkthroughs</summary>'+chapterNames.map((n,i)=>'<a href="'+BASE+'progression/chapter-'+String(i+1).padStart(2,'0')+'/"'+(route==='progression/chapter-'+String(i+1).padStart(2,'0')+'/'?' aria-current="page"':'')+'>'+String(i+1).padStart(2,'0')+' · '+esc(n)+'</a>').join('')+'</details>';
  }
  html+='</section>';
 }
 return html+'<a class="legacy-nav" href="'+BASE+'2.0/"><span>Looking for the previous pack?</span><strong>TK2 archive →</strong></a>';
}
function shell(route,title,summary,body,toc=[],legacy=false){
 const isHome=route==='';
 return '<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>'+esc(title)+' · Towns &amp; Kingdoms</title><meta name="description" content="'+esc(summary)+'"><meta name="theme-color" content="#241d29"><link rel="canonical" href="'+CANONICAL+route+'"><link rel="icon" href="'+BASE+'assets/brand/favicon.png"><link rel="stylesheet" href="'+BASE+'assets/wiki.css?v='+assetFingerprint+'"><script src="'+BASE+'assets/wiki.js?v='+assetFingerprint+'" defer></script><meta property="og:title" content="'+esc(title)+' · Towns &amp; Kingdoms"><meta property="og:description" content="'+esc(summary)+'"><meta property="og:image" content="'+CANONICAL+'assets/brand/kingdom-landscape.png"><script>try{document.documentElement.dataset.theme=localStorage.getItem("tnk-theme")||(matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light")}catch{}</script></head><body data-base="'+BASE+'"'+(legacy?' data-legacy="true"':'')+'><a class="skip" href="#main">Skip to content</a><header class="topbar"><button class="menu-button" id="menu-toggle" aria-expanded="false" aria-controls="sidebar">Menu</button><a class="brand" href="'+BASE+'"><img src="'+BASE+'assets/brand/favicon.png" alt="" width="36" height="36"><span>TOWNS &amp; KINGDOMS<small>BEYOND THE FORGE</small></span></a><nav class="top-nav" aria-label="Main"><a href="'+BASE+'start/">Start playing</a><a href="'+BASE+'progression/">Progression</a><a href="'+BASE+'changelog/">What’s changed</a></nav><button class="theme-toggle" id="theme-toggle" aria-label="Switch to night mode" aria-pressed="false">Night</button><button class="search-button" data-open-search><span>Search the wiki</span><kbd>/</kbd></button></header><div class="reading-progress" id="reading-progress" aria-hidden="true"></div><nav class="sidebar" id="sidebar" aria-label="Guide navigation">'+nav(route)+'</nav><div class="page"><div class="edition"><a href="'+BASE+'status/"><span class="status-dot"></span>TNK3 · BETA 1.0</a><span>Minecraft 1.21.1 · NeoForge · Java 21</span><a href="'+BASE+'2.0/">TK2 archive →</a></div><main id="main"'+(isHome?' class="home-main"':'')+'>'+(!isHome?'<div class="breadcrumbs"><a href="'+BASE+'">Field guide</a><span>/</span><span>'+esc(legacy?'TK2 archive':title)+'</span></div>':'')+(isHome?body:'<div class="reading-layout"><article class="article">'+(legacy?'<div class="callout legacy"><strong>Preserved documentation</strong><span>This historical page belongs to the older wiki. Use the navigation for the current TNK3 systems.</span></div>':'')+body+'</article><aside class="toc" aria-label="On this page"><span>ON THIS PAGE</span>'+toc.map(h=>'<a href="#'+esc(h.id)+'">'+esc(h.title)+'</a>').join('')+'<a class="toc-top" href="#main">Back to top ↑</a></aside></div>')+'</main><section class="community-banner" aria-label="Join the community"><div><p class="eyebrow">THE TOWNS &amp; KINGDOMS MODDING HUB</p><h2>Good company. Bigger adventures.</h2><p>Share your builds, ask a question, or find your next expedition. Official EU &amp; US server news and events live here too.</p><a href="https://discord.gg/CRYk3uDPVt" class="primary-button">Join the Discord community →</a></div><a href="https://discord.gg/CRYk3uDPVt" class="discord-art"><img src="https://i.imgur.com/Ojgcccm.png" alt="Join the Towns &amp; Kingdoms Discord" loading="lazy"></a></section><footer><div><strong>Towns &amp; Kingdoms</strong><p>Build a workshop. Bring home a story.</p></div><div><a href="'+BASE+'status/">Beta 1.0 reference</a><a href="'+BASE+'projects/">Mod projects →</a><a href="https://github.com/Mikaaah/TownsAndKingdoms">GitHub →</a><a href="https://discord.gg/CRYk3uDPVt">Community →</a></div></footer></div><dialog id="search-dialog" aria-labelledby="search-heading"><div class="search-head"><h2 id="search-heading">Find your next step</h2><button id="close-search" aria-label="Close search">×</button></div><label for="wiki-search">Search guides, skill effects, recipes and mods</label><input id="wiki-search" type="search" placeholder="Try “rubber”, “Deepdelver” or “AE2”…" autocomplete="off"><p id="search-status" role="status">Type a word to search the current reference.</p><ul id="search-results"></ul></dialog></body></html>';
}
function save(route,title,summary,html,toc=[],legacy=false,text=''){
 if(routes.has(route))throw Error('Duplicate route '+route);routes.add(route);
 const page=shell(route,title,summary,html,toc,legacy);write(path.join(out,route,'index.html'),page);
 rendered.push({route,title,legacy});if(!legacy)search.push({title,summary,url:route,text,kind:'Guide'});
}
function card(route,title,summary,index,art){
 return '<a class="guide-card" href="'+BASE+route+'"><span class="card-number">'+esc(index||'GUIDE')+'</span>'+(art?icon(art):'')+'<h3>'+esc(title)+'</h3><p>'+esc(summary)+'</p><span class="card-link">Open guide <span aria-hidden="true">→</span></span></a>';
}
function table(headers,rows){
 return '<div class="table-scroll"><table><thead><tr>'+headers.map(x=>'<th scope="col">'+esc(x)+'</th>').join('')+'</tr></thead><tbody>'+rows.map(row=>'<tr>'+row.map(x=>'<td>'+x+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
}
function filters(label,placeholder,options=[],key='group'){
 return '<form class="filter-bar" data-filter-form><div><label for="filter-query">'+esc(label)+'</label><input id="filter-query" name="q" type="search" placeholder="'+esc(placeholder)+'"></div>'+(options.length?'<div><label for="filter-group">Show</label><select id="filter-group" name="'+esc(key)+'"><option value="">All</option>'+options.map(([v,n])=>'<option value="'+esc(v)+'">'+esc(n)+'</option>').join('')+'</select></div>':'')+'<p class="filter-count" role="status" data-filter-count></p></form><p class="no-matches" hidden>No matching entries. Try another word or reset the selection.</p>';
}
function fattrs(text,group){return ' data-filter-entry data-search="'+esc(text.toLowerCase())+'" data-group="'+esc(group)+'"';}
(async()=>{
 const {marked}=await import(require.resolve('marked',{paths:[path.resolve(root,'..')]}));
 function markdown(source){
  const toc=[],used={};let html=marked.parse(source);
  html=html.replace(/<h([1-6])>([\s\S]*?)<\/h\1>/g,(_,n,b)=>{const raw=slug(b),c=used[raw]||0;used[raw]=c+1;const id=raw+(c?'-'+c:'');if(+n===2)toc.push({id,title:b.replace(/<[^>]*>/g,'')});return '<h'+n+' id="'+esc(id)+'">'+b+'</h'+n+'>';});
  html=html.replace(/<table>/g,'<div class="table-scroll"><table>').replace(/<\/table>/g,'</table></div>');
  return {html,toc};
 }
 fs.rmSync(out,{recursive:true,force:true});fs.mkdirSync(out,{recursive:true});
 fs.cpSync(path.join(root,'assets'),path.join(out,'assets'),{recursive:true});
 fs.cpSync(path.join(root,'data'),path.join(out,'assets/data'),{recursive:true});
 fs.copyFileSync(path.join(root,'wiki.css'),path.join(out,'assets/wiki.css'));
 fs.copyFileSync(path.join(root,'wiki.js'),path.join(out,'assets/wiki.js'));
 for(const f of ['favicon.png','kingdom-landscape.png','tklogo.png','montserrat-latin.woff','montserrat-OFL.txt']){
  fs.mkdirSync(path.join(out,'assets/brand'),{recursive:true});fs.copyFileSync(path.resolve(root,'../brand',f),path.join(out,'assets/brand',f));
 }
 const home='<section class="hero"><div class="hero-copy"><p class="eyebrow">THE OFFICIAL TNK3 FIELD GUIDE</p><h1>A little workshop.<br>A much bigger<br><em>adventure.</em></h1><p class="hero-lead">Build with Create. Find your fighting style. Bring the world’s discoveries home.</p><div class="hero-actions"><a class="primary-button" href="'+BASE+'start/">Begin your workshop <span>→</span></a><a class="text-button" href="'+BASE+'changelog/">See what’s new →</a></div><p class="hero-caption">BEYOND THE FORGE · BETA 1.0</p></div><figure class="hero-art"><img src="'+BASE+'assets/brand/kingdom-landscape.png" alt="Towns and Kingdoms Three: moonlit mountains, a dragon and a castle" width="1672" height="941"><figcaption>Engineering. Discovery. A place to call home.</figcaption></figure></section><section class="stats" aria-label="Current documented systems">'+[[10,'PRODUCTION CHAPTERS'],[S.skills,'SKILL CHOICES'],[S.origins,'CHARACTER ORIGINS'],[S.ponders,'PONDER LESSONS']].map(([n,l])=>'<div><strong>'+n+'</strong><span>'+l+'</span></div>').join('')+'</section>'+sourceNote+'<section class="home-section"><div class="section-heading"><div><p class="eyebrow">MAKE YOURSELF AT HOME</p><h2>What are you working on?</h2></div><a href="'+BASE+'guides/">Browse all guides →</a></div><div class="card-grid">'+card('progression/','Build the next chapter','The current route, from clay and andesite to the Creation Core.','01 · PROGRESSION','rotation_mechanism')+card('character/','Make it your character','Activities, points and twenty backgrounds with practical perks.','02 · CHARACTER','calculation_mechanism')+card('exploration/','Find something worth the trip','Caves, dimensions, dungeons and equipment to bring home.','03 · EXPLORATION','arcane_mechanism')+card('storage/','Connect the whole factory','Create-built processors, digital storage and Infinity Cells.','04 · STORAGE','reinforced_mechanism')+card('workshop/','Give your town useful tools','Goal displays, building tools and a directory for player shops.','05 · WORKSHOP','industrial_mechanism')+card('magic/','Put magic to work','Source, Mana, lenses and precisely filtered spell production.','06 · MAGIC','eclipse_mechanism')+'</div></section><section class="chapter-strip"><div><p class="eyebrow">TEN CHAPTERS. ONE CONNECTED FACTORY.</p><h2>Every line has a reason to keep running.</h2><p>Early mechanisms become ingredients in the final project. Build a foundation you can grow.</p><a href="'+BASE+'progression/">Follow the manufacturing route →</a></div><ol>'+chapterNames.map((n,i)=>'<li><a href="'+BASE+'progression/chapter-'+String(i+1).padStart(2,'0')+'/"><span>'+String(i+1).padStart(2,'0')+'</span>'+n+'</a></li>').join('')+'</ol></section><section class="archive-banner"><div><p class="eyebrow">COMING FROM A NEW WORLD?</p><h2>Your old adventures are still here.</h2><p>Compare TK2 3.05 with Beta 1.0, or open the preserved original wiki.</p></div><div><a class="primary-button" href="'+BASE+'changelog/">Read the Beta 1.0 changelog →</a><a href="'+BASE+'2.0/">Visit the TK2 archive →</a></div></section>';
 save('','Beyond the Forge','The current Towns & Kingdoms 3 field guide: Create progression, skills, origins, custom features and the first TK2 comparison.',home,[],false,'Towns Kingdoms Beyond Forge Beta 1.0 current ten chapters origins skills Ponder');
 const originIcons={'Deepdelver':'ancient_pickaxe','Woodcutter':'mossy_axe','Homesteader':'sun_carrot','Stablehand':'horseshoe','Riverfolk':'golden_hook','Huntsman':'bone_bow','Forgehand':'hammer','Stonemason':'bricks','Millwright':'wrench','Librarian':'golden_book','Apothecary':'aquatic_elixir','Hedge Herbalist':'ghostflower','Caravan Trader':'golden_ring','Wayfarer':'portal_scroll','Deckhand':'blue_coral','Town Watch':'spear','Street Urchin':'bone_knife','Gravekeeper':'simple_skull','Temple Acolyte':'book_of_star','Hedge Mage':'mythic_book'};
 for(const entry of entries){
  const text=read(path.join(root,'pages',entry.file)),r=markdown(text);
  if(entry.route==='origins/')for(const [name,img] of Object.entries(originIcons))r.html=r.html.replace('<td>'+name+'</td>','<td><span class="origin-name"><img class="pixel" src="'+BASE+'assets/origins/'+img+'.png" alt="" width="24" height="24">'+name+'</span></td>');
  if(entry.route==='changelog/')r.html=r.html.replace('href="../downloads/TNK3-Beta-1.0-Changelog.md"','href="../downloads/TNK3-Beta-1.0-Changelog.md" download');
  save(entry.route,entry.title,entry.summary,r.html,r.toc,false,text);
 }

 // Current catalogue pages use exact extracted data, rather than historical counts.
 const guideCards=entries.filter(e=>e.group!=='Chapters').map((e,i)=>card(e.route,e.title,e.summary,String(i+1).padStart(2,'0'))).join('');
 save('guides/','All guides','Find the current guide for your next project.','<p class="eyebrow">THE FIELD GUIDE</p><h1>Choose your next step.</h1><p class="lead">Practical guides for a workshop, a character and a world worth exploring.</p><div class="card-grid">'+guideCards+'</div>');
 let nodeHtml='<h1>Every skill, in one place.</h1><p class="lead">588 configured nodes. One point each. Search the actual descriptions before spending in game.</p><p>This is a read-only reference. Optional integration effects and scripted conditions follow the installed server. <a href="'+BASE+'skills/">Read the skill guide →</a></p>';
 const branches=[...new Set(skills.nodes.map(n=>n.branch))].sort();nodeHtml+=filters('Filter skill nodes','Name, effect or internal ID…',branches.map(b=>[b,human(b)]),'path');
 for(const node of skills.nodes){
  const img=node.icon?.data?.texture?.split('/').at(-1);
  nodeHtml+='<details class="reference-entry" id="node-'+esc(node.id)+'"'+fattrs(node.title+' '+node.id+' '+node.description+' '+node.extra_description,node.branch)+'><summary>'+(img?'<img class="pixel" src="'+BASE+'assets/skills/'+esc(img)+'" alt="" width="28" height="28">':'')+'<span><strong>'+esc(node.title)+'</strong><small>'+esc(human(node.branch))+' · '+esc(node.id)+'</small></span><span class="point-badge">'+esc(node.cost)+' POINT</span></summary><div class="entry-body"><p>'+esc(node.description).replace(/\n/g,'<br>')+'</p><p class="muted">'+esc(node.extra_description||'')+'</p>'+(node.rewards?.length?'<details class="technical"><summary>Attribute reference</summary><pre><code>'+esc(JSON.stringify(node.rewards,null,2))+'</code></pre></details>':'')+'</div></details>';
  search.push({title:node.title,summary:node.description,url:'skills/nodes/#node-'+node.id,text:node.id+' '+node.branch+' '+node.description,kind:'Skill · '+human(node.branch)});
 }
 save('skills/nodes/','Skill node reference','Search all 588 configured skill effects.',nodeHtml);

 const bundled=inventory.bundled_mods;
 const bundledRows=bundled.map(item=>'<tr id="custom-mod-'+esc(item.mod_id)+'"'+fattrs(item.name+' '+item.author+' '+item.mod_id,'mod')+'><td><strong>'+esc(item.name)+'</strong></td><td>Bundled with Beta 1.0</td></tr>').join('');
 const customNotes='<h2 id="custom-features">Bundled custom mods</h2><div class="table-scroll"><table><thead><tr><th>Mod</th><th>Installation</th></tr></thead><tbody>'+bundledRows+'</tbody></table></div><p>TnK Progression, Resonant Arcana, Alchemical Lasers, Flow Control and Combat Punchy are also included through the manifest above.</p>';
 const kinds=[...new Set(inventory.current.map(i=>i.kind))];
 let modHtml='<h1>The Beta 1.0 mod inventory.</h1><p class="lead">'+S.manifest_projects+' CurseForge projects and '+bundled.length+' bundled custom mods, all from the Beta 1.0 pack.</p><p>This is the complete current mod selection, including supporting libraries. Each project link identifies its source; the downloadable manifest pins its exact file. Pack artwork is bundled through KubeJS resources.</p>'+filters('Filter projects','Name, author or project slug…',kinds.map(k=>[k,k==='mod'?'Mods and libraries':human(k)]),'kind')+'<div class="table-scroll"><table><thead><tr><th scope="col">Project</th><th scope="col">Author</th><th scope="col">Type</th></tr></thead><tbody>';
 for(const item of [...inventory.current].sort((a,b)=>a.name.localeCompare(b.name))){
  modHtml+='<tr id="mod-'+esc(item.slug)+'"'+fattrs(modName(item)+' '+item.name+' '+item.author+' '+item.slug,item.kind)+'><td><a href="'+esc(item.url)+'">'+esc(modName(item))+' →</a></td><td>'+esc(item.author)+'</td><td>'+esc(item.kind)+'</td></tr>';
  search.push({title:modName(item),summary:'Beta 1.0 project · '+item.author,url:'mods/#mod-'+item.slug,text:item.name+' '+item.slug+' '+item.author,kind:'Mod inventory'});
 }
 for(const item of bundled)search.push({title:item.name,summary:'Bundled custom mod · Beta 1.0',url:'mods/#custom-mod-'+item.mod_id,text:item.name+' '+item.mod_id,kind:'Mod inventory'});
 modHtml+='</tbody></table></div>'+customNotes+'<details class="technical"><summary>Bundled build reference</summary>'+table(['Mod','Version','File'],bundled.map(r=>[esc(r.name),esc(r.version),'<code>'+esc(r.file)+'</code>']))+'</details><p><a href="'+BASE+'assets/data/tnk3-manifest.json">Download the Beta 1.0 manifest</a> · <a href="'+BASE+'mods/comparison/">Compare every project with TK2 →</a></p>';
 save('mods/','Beta 1.0 mod inventory','The complete Beta 1.0 manifest and its three bundled custom mods.',modHtml);

 let diffHtml='<h1>What stayed. What moved on.</h1><p class="lead">The complete TK2 3.05 → TK3 Beta 1.0 project comparison.</p><div class="mini-stats"><span><b>'+S.retained+'</b> retained projects</span><span><b>'+S.added+'</b> newly present</span><span><b>'+S.absent+'</b> absent from Beta 1.0</span></div><p>Projects are matched by CurseForge ID, so renamed projects keep their identity. Different replacement ports appear as a new project and an absent old one. <a href="'+BASE+'changelog/#rpg-character-progression-and-loot">Read the changes by category →</a></p>'+filters('Filter the comparison','Project, author or slug…',[['added','Newly present'],['retained','Retained'],['absent','Absent from Beta 1.0']],'status')+'<div class="table-scroll"><table><thead><tr><th>Project</th><th>Comparison</th><th>Author</th></tr></thead><tbody>';
 for(const [key,status,label] of [['added_projects','added','Newly present'],['retained_projects','retained','Retained'],['absent_projects','absent','Absent from Beta 1.0']]){
  for(const item of inventory[key]){
   diffHtml+='<tr id="project-'+status+'-'+esc(item.slug)+'"'+fattrs(modName(item)+' '+item.name+' '+item.author+' '+item.slug+' '+label,status)+'><td><a href="'+esc(item.url)+'">'+esc(modName(item))+' →</a></td><td><span class="tag tag-'+status+'">'+label+'</span></td><td>'+esc(item.author)+'</td></tr>';
  }
 }
 diffHtml+='</tbody></table></div><h2>Additional custom mods in TK3</h2><p>'+bundled.map(i=>esc(i.name)).join(', ')+'. These are bundled directly with the pack and sit outside the CurseForge project totals above.</p><p><a href="'+BASE+'assets/data/inventory.json">Download exact comparison data</a> · <a href="'+BASE+'changelog/">Read the Beta 1.0 changelog</a></p>';
 save('mods/comparison/','Complete project comparison','Every retained, new and absent project in Beta 1.0, with renamed projects and replacement ports distinguished.',diffHtml);

 const plans=data('construction-recipes');
 let recipeHtml='<h1>Construction recipe reference.</h1><p class="lead">'+plans.recipes.length+' authored machine and mod-compatibility definitions from the current package.</p><div class="callout"><strong>Use the installed JEI result</strong><span>These are construction/compatibility plans. Runtime item availability and native-feature conditions determine activation. Dynamic spell recipes, chapter sequences and native conversions are outside this catalogue.</span></div>'+filters('Filter construction plans','Output, ingredient, mod or recipe ID…',[...new Set(plans.recipes.map(r=>r.mod))].sort().map(m=>[m,human(m)]),'mod');
 for(const row of plans.recipes){
  const id='recipe-'+slug(row.recipe_id);
  recipeHtml+='<details class="reference-entry" id="'+id+'"'+fattrs(JSON.stringify(row),row.mod)+'><summary><span><strong>'+esc(human(row.output))+'</strong><small>'+esc(row.output)+' · tier '+row.tier+'</small></span><span class="type-label">'+esc(human(row.recipe.type))+'</span></summary><div class="entry-body"><p>'+esc(row.reason||'')+'</p><p><code>'+esc(row.recipe_id)+'</code> <button class="copy-button" data-copy="'+esc(row.recipe_id)+'">Copy ID</button></p><p class="muted">Source: '+esc(row.source)+'. '+(row.plan_enabled?'Requires registered inputs and matching runtime conditions.':'Optional plan disabled in this source.')+'</p><details class="technical"><summary>Exact recipe data</summary><pre><code>'+esc(JSON.stringify(row.recipe,null,2))+'</code></pre></details></div></details>';
  search.push({title:human(row.output),summary:row.reason||row.recipe_id,url:'recipes/#'+id,text:JSON.stringify(row),kind:'Construction plan'});
 }
 save('recipes/','Construction recipe reference','Search exact current machine and mod compatibility plans.',recipeHtml);

 const ponders=data('ponders');
 let ponderHtml='<h1>Learn it in motion.</h1><p class="lead">97 authored Ponder lessons in the current collection, alongside the native lessons from compatible mods.</p><p>Hover a supported item—even inside a quest task—and hold <kbd>W</kbd> or your configured Ponder key. The anchors below identify supported items; lesson playback happens in Minecraft.</p>'+filters('Filter Ponder lessons','Lesson title or item ID…');
 for(const scene of ponders){
  ponderHtml+='<details class="reference-entry" id="ponder-'+slug(scene.id)+'"'+fattrs(scene.title+' '+scene.anchors.join(' '),'')+'><summary><span><strong>'+esc(scene.title)+'</strong><small>'+esc(scene.id)+'</small></span><span class="type-label">IN GAME</span></summary><div class="entry-body"><p>Hover one of these items and hold the Ponder key:</p><ul>'+scene.anchors.map(a=>'<li><code>'+esc(a)+'</code></li>').join('')+'</ul></div></details>';
  search.push({title:scene.title,summary:scene.anchors.join(' · '),url:'ponder/#ponder-'+slug(scene.id),text:scene.anchors.join(' '),kind:'Ponder lesson'});
 }
 save('ponder/','Ponder lesson reference','Search the current 97 authored Ponder lessons and their item anchors.',ponderHtml);

 // Append only title definitions supplied by the Beta 1.0 roster script.
 const defaults=data('progression-title-defaults');
 const titleMap=new Map((char.titles.titles||[]).map(t=>[t.id,t]));
 for(const t of defaults.titles||[])if(!titleMap.has(t.id))titleMap.set(t.id,t);
 let titleHtml='<h1>Title ID reference.</h1><p class="lead">The titles configured in Beta 1.0, including its shipped default grant definitions.</p><p>Descriptions below show the beta’s configured passive effects. Some title labels/IDs retain historical terminology; quest reward assignments remain in progress. <a href="'+BASE+'titles/">How titles work →</a></p>'+filters('Filter titles','Title, ID or passive effect…');
 const defaultPerks=data('progression-title-perks');
 for(const [id,t] of titleMap){
  const perks=char.perks.titles[id]||defaultPerks.titles[id]||[];
  titleHtml+='<details class="reference-entry" id="title-'+slug(id)+'"'+fattrs(id+' '+t.label+' '+JSON.stringify(perks),'')+'><summary><span><strong>'+esc(t.label)+'</strong><small>'+esc(id)+'</small></span></summary><div class="entry-body">'+(perks.length?'<ul>'+perks.map(p=>'<li>'+esc(p.description||JSON.stringify(p))+'</li>').join('')+'</ul>':'<p>No passive bonus is listed in the reference configuration.</p>')+'</div></details>';
 }
 save('titles/reference/','Title reference','Title IDs and configured passive effects, separate from unconfirmed reward assignments.',titleHtml);

 // Preserve every original Markdown byte; render the eight TK2 pages separately.
 const archive=path.join(pack,'wiki-archive/2026-10-02');
 const oldRoutes={'Home.md':'2.0/original-home/','Features.md':'2.0/features/','Modslist.md':'2.0/modlist/','Changelogs.md':'2.0/changelog/','A-New-World-|-The-1.20.1-Update.md':'2.0/a-new-world/','Server-Installation.md':'2.0/server-installation/','Progression.md':'2.0/progression/','Screenshots.md':'2.0/screenshots/','3.0-Modlist.md':'archive/prior-development/modlist/','3.0-Changelog.md':'archive/prior-development/changelog/','3.0-Progression.md':'archive/prior-development/progression/'};
 const archiveHashes={};
 for(const [name,route] of Object.entries(oldRoutes)){
  const bytes=fs.readFileSync(path.join(archive,name));archiveHashes[name]=sha(bytes);write(path.join(out,'archive/2026-10-02',name),bytes);
  const oldText=bytes.toString('utf8');let r=markdown(oldText);
  r.html=r.html.replace(/href="([^"]+)"/g,(match,u)=>{if(u.startsWith('bisecthosting.com/'))return 'href="https://'+u+'"';let k=u.includes('/wiki/')?u.split('/wiki/')[1]:u;let h='';if(k.includes('#'))[k,h]=k.split('#');try{k=decodeURIComponent(k);}catch{}const dest=oldRoutes[k]||oldRoutes[k+'.md'];return dest?'href="'+BASE+dest+(h?'#'+esc(h):'')+'"':match;});
  const title=(name==='Home.md'?'Original wiki cover':name.replace('.md','').replaceAll('-',' '));
  if(!/<h1\b/.test(r.html))r.html='<h1>'+esc(title)+'</h1>'+r.html;
  save(route,title,'Preserved original wiki documentation.',r.html+'<p class="archive-download"><a href="'+BASE+'archive/2026-10-02/'+encodeURIComponent(name)+'">Read the original Markdown</a></p>',r.toc,true);
 }
 const archiveCards=Object.entries(oldRoutes).filter(([_,u])=>u.startsWith('2.0/')).map(([n,u])=>card(u,n==='Home.md'?'Original wiki cover':n.replace('.md','').replaceAll('-',' '),'Preserved TK2 documentation.','TK2 ARCHIVE')).join('');
 save('2.0/','TK2 archive','The preserved original wiki, with its historical release numbers.','<p class="eyebrow">TOWNS &amp; KINGDOMS 2 · A NEW WORLD</p><h1>The previous adventure.</h1><p class="lead">Original guides, features and release history, kept together.</p><div class="callout legacy"><strong>Reading the right version?</strong><span>Historical “3.0 / A New World” release numbers here refer to TK2. The latest public TK2 client is 3.05 for Forge 1.20.1. <a href="'+BASE+'changelog/">Compare it with TNK3 →</a></span></div><div class="card-grid">'+archiveCards+'</div><h2>Prior development notes</h2><p>The three older TNK3 wiki pages are also preserved as historical documents: <a href="'+BASE+'archive/prior-development/modlist/">mod selection</a>, <a href="'+BASE+'archive/prior-development/progression/">progression</a> and <a href="'+BASE+'archive/prior-development/changelog/">changelog</a>. Current navigation uses the newer source.</p>',[],true);

 // Every former HTML route keeps a useful destination.
 const redirects={
  '3.0/':'','3.0/features/':'guides/','3.0/modlist/':'mods/','3.0/changelog/':'changelog/','3.0/progression/':'progression/','3.0/comparison/':'changelog/','3.0/selection-notes/':'status/','3.0/engineering/':'engineering/','3.0/tier-map/':'progression/','3.0/create/':'automation/','3.0/magic/':'magic/','3.0/exploration/':'exploration/','3.0/kingdoms/':'farming/','3.0/credits/':'credits/',
  'chapters/':'quests/','renewability/':'automation/','skilltree/':'skills/','skilltree-builder/':'skills/nodes/','skilltree-planner/':'skills/nodes/','skill-nodes/':'skills/nodes/','skill-tree/':'skills/','classes/':'skills/','professions/':'character/','spells/':'magic/','glyphs/':'magic/','accessories/':'loot/','witchery/':'magic/',
 };
 const legacyPath=path.join(root,'former-routes.json');
 for(const old of JSON.parse(read(legacyPath))){
  if(routes.has(old)||redirects[old]!==undefined)continue;
  redirects[old]=old.startsWith('2.0/')?'2.0/':/skill|class/.test(old)?'skills/':/spell|glyph|witch/.test(old)?'magic/':/quest|chapter/.test(old)?'quests/':/recipe|workshop|create/.test(old)?'recipes/':'guides/';
 }
 for(const [from,to] of Object.entries(redirects)){
  if(routes.has(from))continue;
  write(path.join(out,from,'index.html'),'<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0;url='+BASE+to+'"><link rel="canonical" href="'+CANONICAL+to+'"><title>Guide moved · Towns &amp; Kingdoms</title></head><body><p>This guide has moved. <a href="'+BASE+to+'">Open the current guide →</a></p></body></html>');
 }
 write(path.join(out,'404.html'),shell('404/','Guide not found','Find a current guide.','<h1>That trail has moved.</h1><p>Search the current reference or return to the field guide.</p><p><a class="primary-button" href="'+BASE+'">Open the field guide →</a> <button data-open-search>Search the wiki</button></p>'));
 write(path.join(out,'assets/search.json'),JSON.stringify(search));
 const downloadChangelog=read(path.join(root,'pages/changelog.md')).replace(/\]\((\.\.\/[^)]+)\)/g,(_m,u)=>']('+new URL(u,CANONICAL+'changelog/').href+')');
 write(path.join(out,'downloads/TNK3-Beta-1.0-Changelog.md'),downloadChangelog);
 write(path.join(out,'downloads/TNK3-Development-Changelog-01.md'),downloadChangelog);
 write(path.join(pack,'docs/CHANGELOG_TNK3_BETA_1.0.md'),downloadChangelog);
 write(path.join(pack,'docs/CHANGELOG_TNK3_DEVELOPMENT_01.md'),downloadChangelog);
 write(path.join(out,'reference.json'),JSON.stringify({snapshot:S.snapshot,version:S.version,date:S.date,source_archive_sha256:S.sources[0].sha256,build_fingerprint:buildFingerprint,counts:{skills:S.skills,origins:S.origins,ponders:S.ponders,construction_plans:plans.recipes.length},archive_hashes:archiveHashes},null,2)+'\n');
 write(path.join(out,'build-manifest.json'),JSON.stringify({snapshot:S.snapshot,build_fingerprint:buildFingerprint,pages:rendered,redirects,search_entries:search.length},null,2)+'\n');
 write(path.join(out,'sitemap.xml'),'<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'+rendered.map(p=>'<url><loc>'+CANONICAL+p.route+'</loc></url>').join('')+'</urlset>');
 write(path.join(out,'robots.txt'),'User-agent: *\nAllow: /\nSitemap: '+CANONICAL+'sitemap.xml\n');
 write(path.join(out,'.nojekyll'),'');
 console.log(JSON.stringify({pages:rendered.length,redirects:Object.keys(redirects).length,search_entries:search.length,build_fingerprint:buildFingerprint}));
})().catch(e=>{console.error(e);process.exit(1);});
