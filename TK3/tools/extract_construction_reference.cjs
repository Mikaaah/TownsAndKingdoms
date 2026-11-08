/* Read bounded, declarative recipe plans for documentation; no game handlers run. */
'use strict';
const fs=require('fs'),vm=require('vm'),path=require('path');
const root=path.resolve(process.argv[2]),plans=[];
const ctx=vm.createContext({TNK_MOD_COMPAT:{register:p=>plans.push(JSON.parse(JSON.stringify(p))),add:()=>{}},TNK_RECIPE_PROFILE:{wrap:(_n,fn)=>fn},ServerEvents:{recipes:()=>{}}},{codeGeneration:{strings:false,wasm:false}});
for(const name of fs.readdirSync(path.join(root,'server_scripts/compat')).filter(n=>n.endsWith('.js')&&!n.startsWith('_')).sort()){
 const source=fs.readFileSync(path.join(root,'server_scripts/compat',name),'utf8');
 if(!source.includes('TNK_MOD_COMPAT.register(plan)'))continue;
 vm.runInContext(source,ctx,{timeout:1000,filename:name});
}
const rows=JSON.parse(fs.readFileSync(path.join(root,'machine_recipes.json'))).recipes.map(r=>({...r,source:'machine_recipes.json',mod:r.output.split(':')[0],plan_enabled:true}));
for(const plan of plans)for(const row of plan.recipes)rows.push({...row,source:'compat/'+plan.mod+'.js',mod:plan.mod,plan_enabled:plan.enabled!==false});
// This direct handler is also a fixed construction definition. Capture its
// declared recipe with bounded mocks; do not evaluate other recipe handlers.
const angelEvent={remove:()=>{},custom:recipe=>({id:recipe_id=>rows.push({tier:7,output:recipe.result.id,recipe_id,recipe:JSON.parse(JSON.stringify(recipe)),requires:Object.values(recipe.key).map(v=>v.item),remove_ids:[],remove_output:true,reason:'Arcane-tier flight: the eleven-column wing recipe.',source:'compat/angelring.js',mod:'angelring',plan_enabled:true})})};
const angelContext=vm.createContext({TNK_RECIPE_PROFILE:{wrap:(_n,fn)=>fn},Item:{exists:()=>true},ServerEvents:{recipes:fn=>fn(angelEvent)}},{codeGeneration:{strings:false,wasm:false}});
vm.runInContext(fs.readFileSync(path.join(root,'server_scripts/compat/angelring.js'),'utf8'),angelContext,{timeout:1000,filename:'angelring.js'});
const seen=new Set;
for(const row of rows){if(seen.has(row.recipe_id))throw Error('Duplicate '+row.recipe_id);seen.add(row.recipe_id);}
fs.writeFileSync(path.resolve(__dirname,'../handbook-source/current/data/construction-recipes.json'),JSON.stringify({scope:'Authored construction and per-mod compatibility plans. Runtime conditions, native conversions and dynamic recipes are resolved in game; this is not the complete loaded recipe registry.',recipes:rows})+'\n');
console.log(JSON.stringify({plans:plans.length,construction:rows.length,uniqueIds:seen.size}));
