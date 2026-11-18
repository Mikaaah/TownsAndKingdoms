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
 query(dom,'let_it_walk:walker_core');doc.querySelector('[data-detail]').click();
 assert.match(doc.querySelector('#record-title').textContent,/Walker Core/);
 assert.equal(doc.querySelectorAll('.recipe-slot').length,9);
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
 input.dispatchEvent(new window.KeyboardEvent('keydown',{key:'ArrowDown',bubbles:true,cancelable:true}));
 assert.equal(window.document.querySelectorAll('.search-result[aria-selected="true"]').length,1);
 window.document.querySelector('#close-search').click();assert.equal(window.document.querySelector('#global-search').open,false);
 dom.window.close();
});
test('public mechanic and chapter pages contain the current complete reference',()=>{
 const mechanics=browser('mechanics'),chapters=browser('chapters');
 assert.equal(mechanics.window.document.querySelectorAll('.origin-grid article').length,35);
 assert.equal(chapters.window.document.querySelectorAll('.chapter-card').length,10);
 for(const id of ['leveling','origins','titles','loot'])assert(mechanics.window.document.getElementById(id));
 assert(!mechanics.window.document.body.textContent.includes('[object Object]'));
 mechanics.window.close();chapters.window.close();
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
 dom.window.close();
});
