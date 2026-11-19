import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
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
 for(const c of ['Weapons','Recipes','Mods','Chapters','Bosses','Skills','Guides','Ponder','Origins'])assert(categories.has(c),c);
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
test('character and loot navigate independently and expose their complete reference',()=>{
 const character=browser('mechanics'),loot=browser('loot'),chapters=browser('chapters');
 const characterDoc=character.window.document,lootDoc=loot.window.document;
 assert.equal(characterDoc.querySelectorAll('.origin-grid article').length,35);
 assert.equal(chapters.window.document.querySelectorAll('.chapter-card').length,10);
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
 character.window.close();loot.window.close();chapters.window.close();
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
