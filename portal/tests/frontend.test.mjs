import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { resolve } from 'node:path';
import { JSDOM } from 'jsdom';
import { stripTypeScriptTypes } from 'node:module';
import MiniSearch from 'minisearch';

const root=resolve(import.meta.dirname,'..');
const json=name=>JSON.parse(readFileSync(resolve(root,'public/data',name+'.json'),'utf8'));
const tick=()=>new Promise(resolve=>setTimeout(resolve,15));
function browser(route) {
 const html=readFileSync(resolve(root,'dist',route==='index'?'index.html':route+'/index.html'),'utf8');
 const dom=new JSDOM(html,{url:'https://mikaaah.github.io/TownsAndKingdoms/'+(route==='index'?'':route+'/'),runScripts:'outside-only'});
 const {window}=dom;
 window.Element.prototype.scrollIntoView=function(){};
 window.HTMLDialogElement.prototype.showModal=function(){this.open=true;};
 window.HTMLDialogElement.prototype.close=function(){this.open=false;this.dispatchEvent(new window.Event('close'));};
 window.fetch=async url=>({ok:true,json:async()=>json(String(url).split('/').pop().replace('.json',''))});
 Object.defineProperty(window.navigator,'clipboard',{value:{writeText:async()=>{}}});
 return dom;
}
function evaluate(dom,file) {
 let source=readFileSync(resolve(root,'src/scripts',file),'utf8')
  .replaceAll('import.meta.env.BASE_URL',JSON.stringify('/TownsAndKingdoms/'))
  .replaceAll('import.meta.url',JSON.stringify('https://mikaaah.github.io/TownsAndKingdoms/_astro/global.js'));
 const code=stripTypeScriptTypes(source,{mode:'strip'}).replace(/export\s*\{\s*\};?/g,'');
 dom.window.eval(code);
}
function query(dom,text) {
 const field=dom.window.document.querySelector('[data-filter="query"]');
 field.value=text;field.dispatchEvent(new dom.window.Event('input',{bubbles:true}));
}
test('each End eye encounter has a credited portrait and a matching registry thumbnail',async()=>{
 const dom=browser('bosses');const doc=dom.window.document;
 const eyes=json('end-eyes');
 const portraits=json('boss-portraits');
 assert.equal(doc.querySelectorAll('.boss-portrait img').length,eyes.length);
 assert.equal(doc.querySelectorAll('.boss-credits li').length,eyes.length);
 for(const eye of eyes){
  const portrait=portraits[eye.bossId];
  const card=doc.getElementById('eye-'+eye.id.split(':')[1]);
  const image=card.querySelector('.boss-portrait img');
  assert.equal(image.alt,eye.bossName);
  assert.equal(image.getAttribute('src'),'/TownsAndKingdoms/media/bosses/'+portrait.file);
  assert.equal(image.width,portrait.width);
  assert.equal(image.height,portrait.height);
  assert.ok(readFileSync(resolve(root,'dist/media/bosses',portrait.file)).length);
 }
 evaluate(dom,'registry.ts');await tick();
 query(dom,'cataclysm:ignis');
 const result=doc.querySelector('[data-results] [data-detail]');
 assert.match(result.querySelector('.encounter-thumbnail').src,/\/ignis\.webp$/);
 result.click();
 assert.match(doc.querySelector('.dialog-header .encounter-thumbnail').src,/\/ignis\.webp$/);
 dom.window.close();
});
test('weapon filters, detail links and copied IDs use the actual weapon registry',async()=>{
 const dom=browser('weapons');evaluate(dom,'registry.ts');await tick();
 const doc=dom.window.document;
 assert.match(doc.querySelector('[data-count]').textContent,/542 weapons/);
 assert.equal(doc.querySelectorAll('.weapon-card').length,30);
 query(dom,'simplyswords:whisperwind');
 assert.match(doc.querySelector('[data-count]').textContent,/1 weapons matched/);
 doc.querySelector('[data-detail]').click();
 assert.equal(doc.querySelector('#record-dialog').open,true);
 assert.equal(doc.querySelector('#record-title').textContent,'Whisperwind');
 assert.match(doc.querySelector('[data-dialog-content]').textContent,/Backhand Blade/);
 assert.equal(new URLSearchParams(dom.window.location.hash.slice(1)).get('item'),'simplyswords:whisperwind');
 doc.querySelector('[data-copy-id]').click();await tick();assert.equal(doc.querySelector('[data-copy-status]').textContent,'Copied');
 doc.querySelector('[data-close-detail]').click();assert.equal(doc.querySelector('#record-dialog').open,false);
 query(dom,'no-such-unregistered-weapon');assert.match(doc.querySelector('[data-results]').textContent,/No entries match/);
 dom.window.close();
});
test('recipe details preserve shaped layouts, assembly stages and retained boss catalysts',async()=>{
 const dom=browser('recipes');evaluate(dom,'registry.ts');await tick();const doc=dom.window.document;
 query(dom,'tnk:chapter_01/crafting/andesite_alloy_from_andesite_and_clay');
 assert.match(doc.querySelector('[data-results] tr').textContent,/ · Create/);
 assert.doesNotMatch(doc.querySelector('[data-results] tr').textContent,/Thaumaturgy/);
 query(dom,'let_it_walk:walker_core');doc.querySelector('[data-detail]').click();
 assert.match(doc.querySelector('#record-title').textContent,/Walker Core/);
 assert.equal(doc.querySelectorAll('.recipe-slot').length,9);
 assert.match(doc.querySelector('.recipe-slot').textContent,/Light Engineering Machine/);
 assert.match(doc.querySelector('.dialog-body').textContent,/Light Engineering Machine/);
 assert.match(doc.querySelector('.dialog-body').textContent,/Chapter VI/);
 doc.querySelector('[data-close-detail]').click();
 query(dom,'let_it_walk:jet_nozzle');doc.querySelector('[data-detail]').click();
 assert.equal(doc.querySelectorAll('.dialog-body .sequence-list li').length,5,doc.querySelector('#record-title').textContent+' '+doc.querySelector('[data-detail]').dataset.detail);
 assert.match(doc.querySelector('.dialog-body').textContent,/250 mB/);
 doc.querySelector('[data-close-detail]').click();
 query(dom,'tnk:synergy/boss_tooling/ice_crystal_quartz_fiber/finish');doc.querySelector('[data-detail]').click();
 assert.match(doc.querySelector('.dialog-body').textContent,/Retained catalyst/);
 assert.match(doc.querySelector('.dialog-body').textContent,/Ice Crystal/);
 dom.window.close();
});
test('recipe sprites follow exact inputs, alternatives and fluid outputs',async()=>{
 const dom=browser('recipes');evaluate(dom,'registry.ts');await tick();const doc=dom.window.document;
 const openRecipe=id=>{
  if(doc.querySelector('#record-dialog').open)doc.querySelector('[data-close-detail]').click();
  query(dom,id);
  const result=Array.from(doc.querySelectorAll('[data-detail]')).find(button=>button.dataset.detail===id);
  assert.ok(result,id);
  result.click();
  return result.closest('tr');
 };
 const row=openRecipe('tnk:compat/apotheosis/gem_cutting_tools');
 assert.ok(row.querySelector('.recipe-result-art .recipe-item-atlas'));
 const options=doc.querySelector('.recipe-slot[title="Shears or Iron Knife"]');
 assert.equal(options.querySelectorAll('.recipe-item-art').length,2);
 assert.match(options.querySelector('img').getAttribute('src'),/iron_knife\.png$/);
 assert.equal(doc.querySelector('.recipe-slot[title="Planks"] .recipe-item-art'),null);
 const texture=()=>doc.querySelector('.dialog-header .recipe-item-atlas').getAttribute('style');
 openRecipe('tnk:ie_compat/mixing/immersiveengineering/mixer/concrete');
 const fluidArt=texture();
 assert.match(doc.querySelector('.recipe-facts').textContent,/\d+ mB/);
 openRecipe('tnk:synergy/waste/flux_bound_concrete');
 assert.notEqual(texture(),fluidArt);
 assert.match(doc.querySelector('.recipe-facts').textContent,/× Concrete/);
 openRecipe('tnk:chapter_02/splashing/clay_from_sand');
 assert.match(doc.querySelector('.recipe-facts').textContent,/Chance output/);
 assert.equal(doc.querySelectorAll('.dialog-body .ingredient-list li .tag').length,3);
 dom.window.close();
});
test('global search indexes every requested category and opens through Ctrl+K',async()=>{
 const docs=json('search');const categories=new Set(docs.map(d=>d.category));
 assert(!JSON.stringify(docs).includes('[object Object]'));
 for(const c of ['Weapons','Recipes','Mods','Chapters','Bosses','Skills','Guides','Origins'])assert(categories.has(c),c);
 assert.ok(!docs.some(entry=>entry.url.includes('/ponder/') || entry.url.includes('/factory/')));
 assert.equal(docs.filter(d=>d.category==='Skills').length,588);
 const engine=new MiniSearch({fields:['name','id','description','mod','style'],storeFields:['category','id','name','url','subtitle'],idField:'_key',searchOptions:{boost:{name:4,id:3},prefix:true,fuzzy:0.15}});engine.addAll(docs);
 const dom=browser('index');const {window}=dom;
 window.Worker=class{
  postMessage(message){queueMicrotask(()=>this.onmessage?.({data:message.type==='init'?{type:'ready'}:{type:'results',id:message.id,items:engine.search(message.query).slice(0,35)}}));}
 };
 evaluate(dom,'global.ts');
 window.document.dispatchEvent(new window.KeyboardEvent('keydown',{key:'k',ctrlKey:true,bubbles:true,cancelable:true}));
 await tick();assert.equal(window.document.querySelector('#global-search').open,true);
 const input=window.document.querySelector('#global-search-input');input.value='whisperwind';input.dispatchEvent(new window.Event('input',{bubbles:true}));await tick();
 const links=window.document.querySelectorAll('.search-result');assert(links.length>0);
 assert(Array.from(links).some(a=>a.href.includes('weapons/#item=simplyswords%3Awhisperwind')));
 input.value='sword';input.dispatchEvent(new window.Event('input',{bubbles:true}));await tick();
 const weaponResults=Array.from(window.document.querySelectorAll('.search-result'));assert(weaponResults.length>1);
 assert.equal(input.getAttribute('aria-expanded'),'true');
 input.dispatchEvent(new window.KeyboardEvent('keydown',{key:'ArrowUp',bubbles:true,cancelable:true}));
 assert.equal(input.getAttribute('aria-activedescendant'),weaponResults.at(-1).id);
 input.dispatchEvent(new window.KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true,cancelable:true}));
 assert.equal(input.getAttribute('aria-activedescendant'),weaponResults[0].id);
 assert.equal(window.document.querySelectorAll('.search-result[aria-selected="true"]').length,1);
 assert.equal(window.document.querySelector('#search-status').textContent,weaponResults.length+' results shown');
 window.document.querySelector('#close-search').click();assert.equal(window.document.querySelector('#global-search').open,false);
 dom.window.close();
});
test('Chapters shows each authored quest and keeps the final chapter secret',()=>{
 const dom=browser('chapters');
 const doc=dom.window.document;
 const questlines=json('chapter-questlines');
 const machineInfo=json('chapter-machines');
 const assets=JSON.parse(readFileSync(resolve(root,'src/data/quest-board-assets.json'),'utf8'));
 const toBoard=value=>value*32;
 const chapters=[...doc.querySelectorAll('[data-quest-chapter]')];
 assert.equal(chapters.length,10);
 assert.deepEqual(chapters.map(chapter=>chapter.id),questlines.map(chapter=>chapter.id));
 for(const chapter of questlines){
  const stage=doc.getElementById(chapter.id);
  const rendered=[...stage.querySelectorAll('[data-quest-id]')].map(quest=>quest.dataset.questId);
  assert.deepEqual(rendered.sort(),chapter.quests.map(quest=>quest.id).sort(),chapter.id);
  if(chapter.quests.length){
   const title=assets.titles[chapter.id];
   const titleArt=chapter.images.length
    ? stage.querySelector('.board-art image').getAttribute('href')
    : stage.querySelector('h2 img').getAttribute('src');
   assert.equal(titleArt,'/TownsAndKingdoms/'+title.src);
   assert.ok(readFileSync(resolve(root,'dist',title.src)).length);
   const byId=new Map(chapter.quests.map(quest=>[quest.id,quest]));
   const expectedEdges=[];
   for(const quest of chapter.quests){
    const node=stage.querySelector(`[data-quest-id="${quest.id}"]`);
    assert.equal(node.getAttribute('transform'),`translate(${toBoard(quest.x)} ${toBoard(quest.y)})`);
    assert.equal(node.getAttribute('aria-label'),quest.title);
    const detail=doc.getElementById('quest-'+quest.id);
    assert.equal(detail.querySelector('h3').textContent.trim(),quest.title);
    assert.deepEqual([...detail.querySelectorAll('.quest-description p')].map(p=>p.textContent),quest.description);
    assert.ok(detail.querySelector('.detail-title-art'),quest.title);
    if(quest.hideDependencyLines)continue;
    for(const id of quest.dependencies){
     const dependency=byId.get(id);
     if(dependency&&!dependency.hideDependentLines){
      const positions=[dependency.x,dependency.y,quest.x,quest.y].map(value=>String(toBoard(value)));
      expectedEdges.push([id,quest.id,...positions]);
     }
    }
   }
   const renderedEdges=[...stage.querySelectorAll('line[data-dependency]')].map(line=>[
    line.dataset.dependency,line.dataset.dependent,...['x1','y1','x2','y2'].map(name=>line.getAttribute(name)),
   ]);
   assert.deepEqual(renderedEdges,expectedEdges,chapter.id);
   const frames=[...stage.querySelectorAll('[data-quest-radius]')].map(node=>({
    x:Number(node.dataset.questX),y:Number(node.dataset.questY),radius:Number(node.dataset.questRadius),
   }));
   for(const [index,frame] of frames.entries()){
    for(const other of frames.slice(index+1)){
     const gap=Math.max(Math.abs(frame.x-other.x),Math.abs(frame.y-other.y))-frame.radius-other.radius;
     assert.ok(gap>=5.99,chapter.id+' has overlapping quest frames');
    }
   }
   const info=stage.querySelector('.chapter-info');
   assert.ok(info?.textContent.includes(machineInfo[chapter.id].purpose));
   for(const machine of machineInfo[chapter.id].machines)assert.ok(info.textContent.includes(machine.title),machine.title);
  }
 }
 const final=doc.getElementById('chapter-10');
 assert.match(final.textContent,/Secret until release/i);
 assert.equal(final.querySelector('[data-quest-id]'),null);
 assert.equal(final.querySelector('.chapter-info'),null);
 const search=json('search');
 assert.equal(search.find(entry=>entry._key==='Chapters:chapter-10')?.name,'Secret until release');
 assert.equal(search.find(entry=>entry._key==='Chapters:chapter-01')?.name,questlines[0].title);
 dom.window.close();
});
test('character and loot navigate independently and expose their complete reference',()=>{
 const character=browser('mechanics'),loot=browser('loot');
 const characterDoc=character.window.document,lootDoc=loot.window.document;
 const origins=json('mechanics').origins;
 assert.equal(characterDoc.querySelectorAll('.origin-grid article').length,origins.length);
 for(const origin of origins){
  const card=characterDoc.getElementById('origin-'+origin.id);
  assert.ok(card,origin.name);
  assert.deepEqual([...card.querySelectorAll('.origin-perks li')].map(item=>item.textContent),origin.perks.map(perk=>perk.description));
  assert.equal(card.querySelector('.origin-perks').closest('details'),null);
 }
 for(const id of ['leveling','origins','titles'])assert(characterDoc.getElementById(id));
 assert(characterDoc.querySelector('main a[href="/TownsAndKingdoms/loot/"]'));
 assert.equal(characterDoc.querySelector('[data-loot-calculator]'),null);
 assert(lootDoc.querySelector('[data-loot-calculator]'));
 assert.equal(lootDoc.querySelector('[data-level-calculator]'),null);
 for(const [doc,destination] of [[characterDoc,'mechanics/'],[lootDoc,'loot/']]) {
  const selected=doc.querySelectorAll('#site-sidebar [aria-current="page"]');
  assert.equal(selected.length,1);
  assert.equal(selected[0].getAttribute('href'),'/TownsAndKingdoms/'+destination);
  assert(!doc.body.textContent.includes('[object Object]'));
 }
 assert.equal(json('search').find(entry=>entry._key==='Mechanics:loot')?.url,'/TownsAndKingdoms/loot/');
 character.window.close();loot.window.close();
});
test('build guides publish their diagrams and direct search destinations',()=>{
 const directory=resolve(root,'src/data/early-builds');
 const search=json('search');
 for(const name of readdirSync(directory).filter(file=>file.endsWith('.json'))){
  const slug=name.slice(0,-5);
  const guide=JSON.parse(readFileSync(resolve(directory,name),'utf8'));
  const route='guides/'+slug+'/';
  const dom=browser('guides/'+slug);
  const doc=dom.window.document;
  assert.equal(doc.querySelector('h1').textContent,guide.title);
  assert.equal(doc.querySelectorAll('.build-steps > li').length,guide.steps.length);
  const checklist=[...doc.querySelectorAll('[data-materials-label]')];
  assert.equal(checklist.length,guide.materials.length,slug);
  for(const [index,material] of guide.materials.entries()){
   if(typeof material.count==='number')assert.match(checklist[index].textContent,new RegExp('^'+material.count+'x '));
  }
  for(const {figure} of guide.steps.filter(step=>step.figure)){
   const image=doc.querySelector(`img[src="/TownsAndKingdoms/${figure.src}"]`);
   assert.ok(image?.alt);
   assert.ok(readFileSync(resolve(root,'dist',figure.src)).length);
  }
  const urls=search.filter(result=>result.url.startsWith('/TownsAndKingdoms/'+route)).map(result=>result.url);
  assert.ok(urls.includes('/TownsAndKingdoms/'+route));
  for(const url of urls){
   const fragment=new URL(url,'https://mikaaah.github.io').hash.slice(1);
   if(fragment)assert.ok(doc.getElementById(fragment),url);
  }
  dom.window.close();
 }
});
test('the guide directory is separate and old Ponder URLs redirect to it',()=>{
 const guides=browser('tutorials'),start=browser('guides'),ponder=browser('ponder'),discord=browser('discord');
 const directory=guides.window.document.getElementById('workshop-builds');
 for(const slug of ['nuclear','riftborne','irons-spells','ars-nouveau','witchery','thaumaturge','walking-machines','boss-respawning']){
  assert.ok(directory.querySelector(`a[href="/TownsAndKingdoms/guides/${slug}/"]`),slug);
 }
 assert.equal(start.window.document.querySelector('.build-groups'),null);
 assert.match(ponder.window.document.querySelector('meta[http-equiv="refresh"]').content,/\/TownsAndKingdoms\/tutorials\/$/);
 assert.ok(!discord.window.document.querySelector('main').textContent.includes('A useful first message'));
 for(const page of [guides,start,ponder,discord])page.window.close();
});
test('the paused factory route redirects without rendering the planner',()=>{
 const factory=browser('factory');
 const doc=factory.window.document;
 assert.match(doc.querySelector('meta[http-equiv="refresh"]').content,/\/TownsAndKingdoms\/recipes\/$/);
 assert.equal(doc.querySelector('[data-factory]'),null);
 factory.window.close();
});
test('clearing search discards a result that arrives after the input was emptied',()=>{
 const dom=browser('index');const {window}=dom;let instance;
 window.Worker=class{
  constructor(){instance=this;this.requests=[];}
  postMessage(message){this.requests.push(message);}
 };
 evaluate(dom,'global.ts');
 window.document.querySelector('#open-search').click();
 instance.onmessage({data:{type:'ready'}});
 const input=window.document.querySelector('#global-search-input');
 input.value='whisperwind';input.dispatchEvent(new window.Event('input'));
 const request=instance.requests.at(-1);
 input.value='';input.dispatchEvent(new window.Event('input'));
 instance.onmessage({data:{type:'results',id:request.id,items:[{category:'Weapons',name:'Whisperwind',url:'/weapons/'}]}});
 assert.equal(window.document.querySelectorAll('.search-result').length,0);
 assert.match(window.document.querySelector('#search-results').textContent,/Find a weapon/);
 assert.equal(input.hasAttribute('aria-activedescendant'),false);
 assert.equal(input.getAttribute('aria-expanded'),'false');
 dom.window.close();
});
