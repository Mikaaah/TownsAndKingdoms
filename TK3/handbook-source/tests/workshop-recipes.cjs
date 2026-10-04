const fs=require('fs'),vm=require('vm'),assert=require('node:assert/strict');
const root=require('path').resolve(__dirname,'../..');
const recipes=JSON.parse(fs.readFileSync(root+'/docs/wiki_production_manifest.json')).recipes;
class Element {
  constructor(tag='div'){this.tag=tag;this.children=[];this.attrs={};this.value='';this.style={};this.hidden=false;this._text='';this.handlers={};this.classList={add(){},remove(){}};}
  set textContent(v){this._text=String(v);this.children=[];}
  get textContent(){return this._text+this.children.map(x=>x.textContent||'').join(' ');}
  append(...children){this.children.push(...children);}
  replaceChildren(...children){this.children=[...children];this._text='';}
  setAttribute(k,v){this.attrs[k]=String(v);}
  removeAttribute(k){delete this.attrs[k];}
  addEventListener(k,f){this.handlers[k]=f;}
}
const elements=new Map();
function element(id){if(!elements.has(id))elements.set(id,new Element());return elements.get(id);}
element('recipe-data').textContent=JSON.stringify({recipes});
const calls=[];
const window={addEventListener(){},TK3ItemArt:{names:{},create(id,size){const e=new Element('img');e.attrs={id,size};return e;}},TK3CreateView:{supports(kind){return ['deploying','pressing','cutting','mixing','compacting','stonecutting','milling','crushing'].includes(kind);},show(host,r,step,index){calls.push({kind:r.kind,operation:step.operation,index});}}};
const context={window,document:{getElementById:element,createElement:tag=>new Element(tag),createElementNS:(_,tag)=>new Element(tag),addEventListener(){},hidden:false},location:{href:'https://example.test/workshop/'},history:{replaceState(){}},URL,console,setInterval(){return 1;},clearInterval(){}};
let script=fs.readFileSync(root+'/player-guide/assets/workshop.js','utf8');
assert.equal(script,fs.readFileSync(root+'/handbook-source/workshop.js','utf8'),'Generated workshop must preserve the source, including heat properties.');
script=script.replace(/\}\)\(\);\s*$/, 'window.__qa={describe,ingredients,select,showStep};})();');
vm.runInNewContext(script,context,{timeout:10000});
for(const r of recipes){const steps=window.__qa.describe(r);assert.ok(steps.length>0,r.id);assert.ok(steps.every(x=>x.title&&!/undefined|NaN/.test(x.title+' '+x.text)),r.id);}
function select(id){const r=recipes.find(x=>x.id===id);assert.ok(r,id);window.__qa.select(r);return r;}
select('kubejs:tk3/mechanisms/sealed');
assert.match(element('recipe-ingredients').textContent,/200 mB Water/);
assert.match(element('recipe-ingredients').textContent,/2 × Copper Sheet/);
assert.match(element('recipe-conditions').textContent,/2 loop\(s\)/);
assert.ok([...element('step-track').children].some(x=>x.textContent.includes('Spout filling')));
select('kubejs:tk3/mechanisms/rotation');
assert.match(element('recipe-ingredients').textContent,/2 × Andesite Alloy Sheet/);
assert.doesNotMatch(element('recipe-ingredients').textContent,/2 × Wrench/);
assert.match(element('recipe-ingredients').textContent,/Wrench.*retained/);
const pressStep=element('step-track').children.find(x=>x.textContent.includes('Pressing'));
pressStep.handlers.click();assert.equal(calls.at(-1).kind,'pressing');
const diamond=recipes.find(x=>x.output==='minecraft:diamond'&&x.heated==='superheated');assert.ok(diamond);window.__qa.select(diamond);
assert.match(element('recipe-conditions').textContent,/superheated/);
assert.ok(window.__qa.describe(diamond).some(x=>/superheated/.test(x.text)));
const essence=recipes.find(x=>x.kind==='imbuement'&&x.output==='2x irons_spellbooks:arcane_essence');assert.ok(essence);window.__qa.select(essence);
assert.match(element('recipe-conditions').textContent,/2500 Source/);
assert.match(element('recipe-conditions').textContent,/Retained pedestal items: Source Gem/);
select('kubejs:tk3/industrial/mekanism_pressurized_reaction_chamber');
assert.match(element('recipe-conditions').textContent,/tier-9 mechanism/);
console.log('PASS: all '+recipes.length+' recipe descriptions, initial rendering, per-pass fluid/material totals, retained wrench, Press model, superheat, Source pedestals and forward-tier warnings.');
