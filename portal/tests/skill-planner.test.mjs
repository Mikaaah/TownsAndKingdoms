import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createSkillModel,spentPoints,allocationState,validateSelection,refundSelection,summarizeSelection,encodeBuild,decodeBuild,pointsForLevel,levelForPoints,PASSIVE_CAPS} from '../src/scripts/skill-planner-core.mjs';
const data=JSON.parse(fs.readFileSync(new URL('../src/data/skills.json',import.meta.url)));
const model=createSkillModel(data);
function grow(limit=175){const selected=new Set();while(selected.size<limit){const next=data.nodes.find(n=>allocationState(model,selected,n.id,limit).allowed);if(!next)break;selected.add(next.id);}return selected;}

test('imports the complete connected current tree without legacy class locks',()=>{
  assert.equal(data.nodes.length,588);assert.equal(data.edges.length,669);assert.equal(data.category.pointCap,175);
  assert.equal(data.category.exclusiveRoot,false);assert.equal(data.nodes.filter(n=>n.root).length,6);
  assert(data.nodes.every(n=>n.cost===1));
  const roots=data.nodes.filter(n=>n.root);const selection=new Set(roots.map(n=>n.id));
  assert.equal(validateSelection(model,selection).valid,true);assert.equal(spentPoints(model,selection),6);
  assert.throws(()=>createSkillModel({...data,edges:[['missing',roots[0].id]]}),/missing endpoint/);
});
test('a disconnected skill cannot be purchased and roots are not free',()=>{
  const node=data.nodes.find(n=>!n.root&&n.requiredSpentPoints===0);
  assert.equal(allocationState(model,new Set(),node.id).allowed,false);
  const root=data.nodes.find(n=>n.root);
  assert.equal(allocationState(model,new Set(),root.id,0).allowed,false);
  assert.equal(allocationState(model,new Set(),root.id,1).allowed,true);
});
test('40- and 60-point thresholds use already-spent points',()=>{
  const tiny=createSkillModel({category:{pointCap:100,exclusiveRoot:false},fingerprint:'threshold',
    nodes:Array.from({length:62},(_,i)=>({id:String(i),root:i===0,cost:1,requiredSkills:1,requiredPoints:0,requiredSpentPoints:i===40?40:i===61?60:0,rewards:[],passives:{}})),
    edges:Array.from({length:61},(_,i)=>[String(i),String(i+1)])});
  const selected=new Set(Array.from({length:39},(_,i)=>String(i)));
  assert.equal(allocationState(tiny,selected,'40').allowed,false);
  selected.add('39');assert.equal(allocationState(tiny,selected,'40').allowed,true);
  const p59=new Set(Array.from({length:59},(_,i)=>String(i)));p59.add('60');
  assert.equal(allocationState(tiny,p59,'61').allowed,true);
  assert.equal(validateSelection(tiny,new Set(['0','40'])).valid,false);
});
test('enforces real budgets and the hard category cap',()=>{
  const maximum=grow();assert.equal(spentPoints(model,maximum),175);
  assert.equal(validateSelection(model,maximum).valid,true);
  assert(!data.nodes.some(n=>!maximum.has(n.id)&&allocationState(model,maximum,n.id,999).allowed));
  assert.equal(spentPoints(model,grow(12)),12);
});
test('character levels award the actual nonlinear integer point budget',()=>{
  assert.equal(pointsForLevel(1),1);assert.equal(pointsForLevel(4),7);assert.equal(pointsForLevel(50),87);assert.equal(pointsForLevel(100),175);
  assert.equal(levelForPoints(87),50);assert.equal(levelForPoints(0),null);
  assert.equal(pointsForLevel(200),175);assert.equal(pointsForLevel(-1),0);
});
test('conditional tree effects obey the runtime caps rather than raw sums',()=>{
  const totals=summarizeSelection(model,new Set(model.ids)).passives;
  assert.equal(totals.guard,.25);assert.equal(totals.potion_duration,.5);assert.equal(totals.food_recovery,3);
  for(const [key,value]of Object.entries(totals))assert(value<=PASSIVE_CAPS[key]);
});
test('refund removes stranded skills but keeps alternative connected paths',()=>{
  const small=createSkillModel({category:{pointCap:20,exclusiveRoot:false},fingerprint:'diamond',
    nodes:['root','left','right','tip'].map(id=>({id,root:id==='root',cost:1,requiredSkills:1,requiredPoints:0,requiredSpentPoints:0,rewards:[],passives:{}})),
    edges:[['root','left'],['root','right'],['left','tip'],['right','tip']]});
  const all=new Set(['root','left','right','tip']);
  assert.deepEqual([...refundSelection(small,all,'left').selection],['root','right','tip']);
  assert.equal(refundSelection(small,new Set(['root','left','tip']),'left').selection.size,1);
});
test('separates flat modifiers, base multipliers and conditional tag effects',()=>{
  const selected=new Set(['alchemist_class','cook_class']);
  const result=summarizeSelection(model,selected);
  assert.equal(result.passives.potion_duration,.05);assert.equal(result.passives.food_recovery,.3);
  assert(result.attributes.some(r=>r.attribute==='irons_spellbooks:mana_regen'&&r.operation==='multiply_base'&&r.value===.03));
  assert(result.attributes.some(r=>r.attribute==='ars_nouveau:ars_nouveau.perk.mana_regen'&&r.operation==='addition'&&r.value===.3));
});
test('shared builds round-trip compactly and reject corrupt or incompatible links',()=>{
  const selected=grow(80),encoded=encodeBuild(model,selected,100),decoded=decodeBuild(model,encoded);
  assert(encoded.length<150);assert.equal(decoded.budget,100);
  assert.deepEqual([...decoded.selection].sort(),[...selected].sort());
  assert.throws(()=>decodeBuild(model,encoded.replace(data.fingerprint,'wrong')),/cannot be opened/);
  assert.throws(()=>decodeBuild(model,'bad'),/cannot be opened/);
  assert.throws(()=>encodeBuild(model,new Set(['missing'])),/invalid build/);
  assert.throws(()=>decodeBuild(model,encoded.replace('.100.','.999.')),/point limit/);
});
