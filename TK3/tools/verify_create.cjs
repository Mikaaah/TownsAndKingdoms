// Regression checks for cross-file output removal and the new Create support layer.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),m=JSON.parse(fs.readFileSync(path.join(root,'docs/progression_manifest.json'))),rows=m.recipes.filter(r=>r.system==='create');
const oid=v=>String(v).replace(/^\d+x /,'');const records=[];let currentFile;
const native=[{id:'create:crafting/materials/andesite_alloy',output:'create:andesite_alloy',removed:false},{id:'create:pressing/brass_ingot',output:'create:brass_sheet',removed:false},{id:'other:electron_tube',output:'create:electron_tube',removed:false}];
const metadata=new Map(m.recipes.map(r=>[r.id,r]));
function builder(kind,args){const r={kind,args,removed:false};const b={_recipe:r,id(id){r.id=id;r.output=oid(metadata.get(id)?.output||'');r.file=currentFile;records.push(r);return b},heated(){return b},keepHeldItem(){return b},transitionalItem(){return b},loops(){return b}};return b}
const proxy=new Proxy({}, {get(_,key){return (...args)=>builder(key,args)}});const e={recipes:new Proxy({}, {get(){return proxy}}),remove(filter){for(const r of [...native,...records])if(!r.removed&&filter.output===r.output)r.removed=true}};
for(const k of ['shaped','shapeless','stonecutting','custom'])e[k]=(...a)=>builder(k,a);
const sandbox={ServerEvents:{recipes(f){f(e)}},Item:{of(){return {isEmpty(){return false}}}},Fluid:{of(id,amount){return {id,amount}}},console,AE2Recipes:{charger(e,...a){return builder('charger',a).id(a.at(-1))},inscriberPress(e,...a){return builder('print',a).id(a.at(-1))},inscriberWithBottom(e,...a){return builder('processor',a).id(a.at(-1))}}};vm.createContext(sandbox);
const dir=path.join(root,'kubejs/server_scripts/recipes');const files=fs.readdirSync(dir).filter(f=>f.endsWith('.js')&&f!=='tk3_whitelist.js').map(f=>({f,text:fs.readFileSync(path.join(dir,f),'utf8')})).sort((a,b)=>Number(b.text.match(/priority:\s*(-?\d+)/)?.[1]||0)-Number(a.text.match(/priority:\s*(-?\d+)/)?.[1]||0)||a.f.localeCompare(b.f));
assert.equal(files[0].f,'tk3_recipe_cleanup.js');for(const f of files){currentFile=f.f;vm.runInContext(f.text,sandbox,{filename:f.f})}
assert(native.every(r=>r.removed),'Controlled native alternatives must be removed');
assert.equal(records.length,m.recipes.length);assert(records.every(r=>!r.removed),'A later subsystem deleted an approved recipe');
for(const r of rows){assert(m.output_whitelist[oid(r.output)].includes(r.id));const b=records.find(b=>b.id===r.id);assert(b&&!b.removed);if(r.json){assert.equal(JSON.stringify(b.args[0]),JSON.stringify(r.json));assert(r.json.type==='create:sandpaper_polishing'||['minecraft:smelting','minecraft:blasting'].includes(r.json.type));}const minTier=Math.min(...m.recipes.filter(x=>oid(x.output)===oid(r.output)).map(x=>x.tier));if(minTier>1&&oid(r.output).startsWith('create:'))assert(m.gates[String(minTier)].includes(oid(r.output)),r.id+' is not gated');}
// Material packing/unpacking is lossless; reset recipes never add items.
for(const base of ['zinc','brass']){const ingot=rows.find(r=>r.id.endsWith('/'+base+'_ingot_from_nuggets'));assert.equal(ingot.pattern.join('').length,9);assert.equal(rows.find(r=>r.id.endsWith('/'+base+'_nugget_from_ingot')).output,'9x create:'+base+'_nugget');}
for(const r of rows.filter(r=>r.id.endsWith('_clear'))){assert.equal(r.inputs.length,1);assert.equal(r.inputs[0],r.output);}
const tier=new Map();for(const r of m.recipes){const out=oid(r.output);tier.set(out,Math.min(tier.get(out)||99,r.tier))}
for(const r of rows){for(const v of Array.isArray(r.inputs)?r.inputs:Object.values(r.inputs)){if(typeof v==='string'&&oid(v).startsWith('create:')&&tier.has(oid(v)))assert(tier.get(oid(v))<=r.tier,r.id+' needs a future-tier item '+v)}}
// Check that the start-up casing/press/mixer chain is not dependent on an assembled mechanism.
const manual=rows.find(r=>r.id.endsWith('/andesite_casing_manual'));assert.deepEqual(manual.inputs,['#c:stripped_logs','create:andesite_alloy']);const frame=m.recipes.find(r=>r.id.endsWith('/kinetic_manual'));assert(!Object.values(frame.inputs).some(v=>v.includes('mechanism')));
assert.equal(m.create_audit.uncovered_inputs.length,0);
console.log('PASS: '+rows.length+' Create recipes; '+records.length+' approved recipes survive cross-script registration; exact JSON, tiers, reset recipes and reversible material ratios.');
