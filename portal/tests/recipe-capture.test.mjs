import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync,writeFileSync,mkdtempSync,mkdirSync,rmSync} from 'node:fs';
import {tmpdir} from 'node:os';
import {join} from 'node:path';
import {spawnSync} from 'node:child_process';

const root=new URL('../../',import.meta.url);
const read=path=>JSON.parse(readFileSync(new URL(path,root),'utf8'));
const importer=readFileSync(new URL('portal/scripts/import_data.py',root),'utf8');
const engine=importer.match(/NODE=r'''([\s\S]*?)'''/)[1];
const fixture=`
var TNK_TAGS={compatibility(){},rubber(){},oreForms(){},searchGroups(){}};
var TNK_ADD_TAG_REPAIRS=()=>{};var TNK_UNIFY={bindTags(){}};
var TNK_RECIPES={
 prepare(event){event.shapeless('minecraft:stone',['minecraft:dirt']).id('test:temporary');},
 early(event){event.shapeless('minecraft:stone',['minecraft:dirt']).id('test:replaced');},
 scrollAutomation(){throw Error('Native registries must not execute in the documentation compiler');},
 late(event){event.remove({id:'test:replaced'});event.shapeless('minecraft:diamond',['minecraft:stone']).id('test:active');},
 unsubscribed(event){event.shapeless('minecraft:dirt',['minecraft:stone']).id('test:invented');}
};
ServerEvents.recipes(event=>{TNK_RECIPES.prepare(event);TNK_RECIPES.early(event);TNK_RECIPES.scrollAutomation(event);TNK_RECIPES.late(event);});
ServerEvents.recipes(event=>{event.remove({id:'test:temporary'});event.shapeless('minecraft:stone',['minecraft:diamond']).id('test:final');});
`;
function runFixture(source=fixture){
 const directory=mkdtempSync(join(tmpdir(),'tnk-recipe-capture-'));
 try{
  mkdirSync(join(directory,'startup_scripts'));mkdirSync(join(directory,'server_scripts'));
  for(const name of ['01_items.js','02_blocks.js'])writeFileSync(join(directory,'startup_scripts',name),'');
  writeFileSync(join(directory,'server_scripts','fixture.js'),source);
  return spawnSync(process.execPath,['-e',engine],{encoding:'utf8',input:JSON.stringify({kube:directory,native:{},tags:{},items:['minecraft:stone','minecraft:dirt','minecraft:diamond'],content:{},loaded:['create'],files:['fixture.js']})});
 }finally{rmSync(directory,{recursive:true,force:true});}
}

test('captures the actual event order once and excludes removed or unsubscribed recipes',()=>{
 const result=runFixture();assert.equal(result.status,0,result.stderr);
 const capture=JSON.parse(result.stdout);
 assert.deepEqual(capture.records.map(row=>row.id),['test:active','test:final']);
 assert.deepEqual(capture.functionCalls,['prepare','early','scrollAutomation','late']);
 assert.equal(capture.handlerCalls.length,2);assert.deepEqual(capture.errors,[]);
 assert.deepEqual(capture.runtimeFamilies.map(row=>row.family),['spell-scroll-binding']);
});

test('unexpected recipe extraction failures stop publication',()=>{
 const result=runFixture(fixture.replace("event.remove({id:'test:replaced'});","throw Error('unhandled recipe adapter');"));
 assert.notEqual(result.status,0);
 const failure=JSON.parse(result.stderr);
 assert(failure.errors.some(error=>error.phase==='handler'&&error.error.includes('unhandled recipe adapter')));
 assert.equal(result.stdout,'');
});

test('every documented recipe or production rule is an unchanged active registration',()=>{
 const captured=read('portal/scripts/recipe_capture.json');
 const recipes=read('portal/src/data/recipes.json');
 const rules=read('portal/src/data/production-rules.json');
 assert.deepEqual(captured.errors,[]);
 const actual=new Map(captured.records.map(row=>[row.id,row.recipe]));
 const documented=[...recipes,...rules];
 assert.equal(new Set(documented.map(row=>row.id)).size,documented.length);
 assert.deepEqual([...actual.keys()].sort(),documented.map(row=>row.id).sort());
 for(const row of documented)assert.deepEqual(row.recipe,actual.get(row.id),row.id);
 assert(rules.some(row=>row.type==='immersiveengineering:mineral_mix'));
 assert(rules.some(row=>row.type==='createaddition:liquid_burning'));
 assert(!recipes.some(row=>row.id.includes('/extendedae/')||row.id.includes('/offroad/')));
});

test('Creation Core and each installed Let It Walk upgrade retain their source recipes',()=>{
 const recipes=read('portal/src/data/recipes.json');
 const byId=new Map(recipes.map(row=>[row.id,row]));
 const core=byId.get('tnk:chapter_10/sequenced_assembly/creation_core');
 assert.equal(core.output,'kubejs:creation_core');
 assert.equal(core.ingredients.find(row=>row.id==='create:precision_mechanism').count,2);
 const expected=read('portal/tests/fixtures/let-it-walk-recipes.json');
 assert.equal(expected.length,6);
 for(const source of expected){
  const row=byId.get(source.recipe_id);assert(row,source.recipe_id);
  assert.equal(row.tier,5);assert.equal(row.count,1);assert.deepEqual(row.recipe,source.recipe);
 }
});

test('normalization preserves choices, exclusions, components, fluids and native output schemas',()=>{
 const recipes=read('portal/src/data/recipes.json');
 const ingredients=recipes.flatMap(row=>row.ingredients);
 for(const choice of ingredients.filter(row=>row.kind==='alternatives')){
  assert(choice.options.length>1);assert.equal(choice.id,'');assert(choice.name.startsWith('Any one of: '));
 }
 const difference=ingredients.find(row=>row.kind==='difference');
 assert(difference.base);assert(difference.subtracted);assert(difference.name.includes(' except '));
 const prepared=ingredients.find(row=>row.components?.['minecraft:custom_data']?.tnk_ie_batch);
 assert(prepared.componentLabel.startsWith('Prepared batch: '));
 assert(prepared.componentLabel.includes('Gear Aluminum'));
 for(const output of recipes.filter(row=>Object.keys(row.outputComponents).length)){
  assert.deepEqual(output.outputComponents,output.outputs[0].components);
  if(output.outputComponentLabel)assert(output.name.includes(output.outputComponentLabel));
 }
 const fluid=recipes.find(row=>row.outputKind==='fluid'&&row.outputAmount===250);
 assert(fluid);assert.equal(fluid.outputs[0].kind,'fluid');
 assert(ingredients.some(row=>row.kind==='fluid'&&row.count===250));
 const imbuements=recipes.filter(row=>row.type==='ars_nouveau:imbuement');
 assert(imbuements.length>0);assert(imbuements.every(row=>row.outputs.length>0&&row.outputs[0].id===row.output));
 const cut=recipes.find(row=>row.id==='tnk:compat/biomesoplenty/board_cattail_straw');
 assert.equal(cut.output,'farmersdelight:straw');assert(cut.outputs.length>0);
 assert(cut.ingredients.some(row=>row.tag&&row.consumed===false));
});
