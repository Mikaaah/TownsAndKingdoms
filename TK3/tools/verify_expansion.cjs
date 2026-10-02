// Authoring checks, not a substitute for Minecraft's serializers.
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('assert');
const root=path.resolve(__dirname,'..'),m=JSON.parse(fs.readFileSync(path.join(root,'docs/progression_manifest.json')));
const known=new Set(JSON.parse(fs.readFileSync(path.join(root,'tools/registry_items.json'))));
const registered=[],custom=[],blocks=[],handlers={};let current;
function builder(ns,kind,args){const r={ns,kind,args,removed:false,id:null,getId(){return this.id},remove(){this.removed=true}};const b={_recipe:r,id(id){r.id=id;registered.push(r);return b},heated(){r.heated=true;return b},keepHeldItem(){r.keep=true;return b},transitionalItem(x){r.transition=x;return b},loops(n){r.loops=n;return b}};return b}
const apis={create:['mixing','compacting','deploying','milling','crushing','cutting','splashing','haunting','pressing','sequenced_assembly','mechanical_crafting'],mekanism:['enriching','smelting','crushing'],ars_nouveau:['enchanting_apparatus'],irons_spellbooks:['alchemist_cauldron_brew','alchemist_cauldron_empty']};
const recipes=Object.fromEntries(Object.entries(apis).map(([n,ks])=>[n,Object.fromEntries(ks.map(k=>[k,(...a)=>builder(n,k,a)]))]));
const e={recipes,remove(){},findRecipeIds(){return []},addedRecipes:registered};for(const k of ['shaped','shapeless','stonecutting','custom'])e[k]=(...a)=>builder('minecraft',k,a);
const sandbox={console,ServerEvents:{recipes(f){f(e)},tags(type,f){f({add(tag,ids){for(const id of ids)assert(known.has(id),id)}})}},Item:{of(id){return {isEmpty(){return !known.has(id)&&!custom.includes(id)&&!blocks.includes(id)&&id!=='architects_palette:algal_blend'}}}},Fluid:{of(fluid,amount){assert(amount>0);return {fluid,amount}}},StartupEvents:{registry(type,f){f({create(id){(type==='item'?custom:blocks).push('kubejs:'+id);const b={};for(const method of ['displayName','texture','hardness','resistance','parentModel'])b[method]=()=>b;return b}})}},AE2Recipes:{charger(e,...a){return builder('ae2','charger',a.slice(0,-1)).id(a.at(-1))},inscriberPress(e,...a){return builder('ae2','inscriber',a.slice(0,-1)).id(a.at(-1))},inscriberWithBottom(e,...a){return builder('ae2','inscriber',a.slice(0,-1)).id(a.at(-1))}}};
vm.createContext(sandbox);
function run(file){vm.runInContext(fs.readFileSync(path.join(root,file),'utf8'),sandbox,{filename:file})}
for(const f of fs.readdirSync(path.join(root,'kubejs/startup_scripts')))run('kubejs/startup_scripts/'+f);
for(const f of fs.readdirSync(path.join(root,'kubejs/server_scripts/recipes')).filter(f=>f!=='tk3_whitelist.js'))run('kubejs/server_scripts/recipes/'+f);
run('kubejs/server_scripts/compat/tk3_tags.js');
assert.equal(registered.length,m.recipes.length);assert.equal(new Set(registered.map(r=>r.id)).size,registered.length);
const ids=new Set(registered.map(r=>r.id));for(const r of m.recipes)assert(ids.has(r.id));
for(const r of registered){if(r.kind==='shapeless')assert(r.args[1].length<=9&&r.args[1].every(x=>!/^\d+x /.test(x)));if(r.kind==='sequenced_assembly')assert.equal(r.loops,1)}
assert.equal(custom.length,6);assert.equal(blocks.length,4);
const mechanisms=m.recipes.filter(r=>r.tool);
assert.equal(mechanisms.length,4);
for(const expected of mechanisms){
 const built=registered.find(r=>r.id===expected.id);assert.equal(built.kind,'sequenced_assembly');
 const steps=built.args[2].map(b=>b._recipe);
 assert.equal(steps.length,expected.inputs.length-1);assert(steps.every(r=>r.kind==='deploying'));
 assert.equal(steps.at(-1).args[1][1],expected.tool);assert(!steps.at(-1).keep,'Normal tools must wear');
 assert.equal(built.transition,expected.transition);
 assert.equal(new Set(mechanisms.map(r=>r.transition)).size,4);
}
const kinetic=registered.find(r=>r.id.endsWith('/rotation_mechanism_automated'));
assert.equal(kinetic.args[2].filter(s=>s._recipe.args[1][1]==='create:andesite_alloy').length,2);
for(const name of ['kinetic_automated','hydraulic_assembly','precision_assembly','arcane_calibration']){
 const r=registered.find(r=>r.id==='kubejs:tk3/frames/'+name);assert.equal(r.kind,'deploying');assert.equal(r.args[1].length,2);
 assert(r.args[1][0].endsWith('_casing'));assert(!r.keep,'Frame mechanism is consumed');
}
assert.equal(registered.find(r=>r.id==='kubejs:tk3/frames/kinetic_manual').args[1].join('').split('A').length-1,7);
for(const mech of mechanisms){assert(registered.filter(r=>r.id===mech.id).length===1);assert(m.output_whitelist[mech.output].every(id=>id===mech.id),'No alternate mechanism route');}
assert(registered.find(r=>r.id.endsWith('/metallurgic_infuser')).keep);
const schema=m.recipes.filter(r=>r.kind==='wrapped');for(const r of schema){const built=registered.find(x=>x.id===r.id).args[0];assert(built.type.startsWith('sophisticated'));assert.equal(built.result.id,r.output);assert(!built.result.item);assert(built['neoforge:conditions'].length)}
// Simulate separate native and added recipe collections and late bypass injection.
const metadata=new Map(m.recipes.map(r=>[r.id,r]));
function matches(r,f){const a=metadata.get(r.id)||r;return (!f.output||a.output.replace(/^\d+x /,'')===f.output)&&(!f.type||a.type===f.type||({enriching:'mekanism:enriching',mek_enriching:'mekanism:enriching'}[a.kind]||'create:'+a.kind)===f.type)&&(!f.input||(Array.isArray(a.inputs)&&a.inputs.some(x=>typeof x==='string'&&x.replace(/^\d+x /,'')===f.input)))}
const natives=[{id:'native:alloy',output:'create:andesite_alloy',inputs:['minecraft:iron_nugget'],removed:false},{id:'native:iron_dust_from_ingot',output:'mekanism:dust_iron',type:'mekanism:crushing',inputs:['minecraft:iron_ingot'],removed:false},{id:'native:wrong_veridium',output:'create:crushed_raw_copper',type:'create:crushing',inputs:['create:veridium'],removed:false}];
const injected={id:'foreign:alloy_injection',output:'create:andesite_alloy',inputs:[],removed:false,getId(){return this.id},remove(){this.removed=true}};registered.push(injected);
e.findRecipeIds=f=>natives.filter(x=>!x.removed&&matches(x,f)).map(x=>x.id);e.remove=f=>natives.filter(x=>x.id===f.id).forEach(x=>x.removed=true);
sandbox.Java={loadClass(n){if(n.endsWith('RecipeFilter'))return {wrap(f){return {test(ctx){return matches(ctx.recipe,f)}}}};if(n.endsWith('RecipeMatchContext$Impl'))return class{constructor(recipe){this.recipe=recipe}};throw Error(n)}};
run('kubejs/server_scripts/recipes/tk3_whitelist.js');assert(natives[0].removed);assert(!natives[1].removed);assert(natives[2].removed);assert(injected.removed);for(const r of registered.filter(x=>ids.has(x.id)))assert(!r.removed,'Whitelist removed approved '+r.id);
const qs=new Map(),all=[];for(let t=1;t<=5;t++){const c=JSON.parse(fs.readFileSync(path.join(root,`config/ftbquests/quests/chapters/tk3_chapter_${t}.snbt`)));all.push(c.id);for(const q of c.quests){qs.set(q.id,q);all.push(q.id,...q.tasks.map(t=>t.id),...q.rewards.map(r=>r.id));}}assert.equal(new Set(all).size,all.length);assert.equal(qs.size,m.quest_count);
for(let t=1;t<=5;t++){
 const q=qs.get(m.milestones[t]);assert.equal(q.rewards.length,1);
 const reward=q.rewards[0];assert.equal(reward.type,'item');assert.equal(reward.team_reward,false);assert.equal(reward.count,1);
 assert(known.has(reward.item.id));assert.deepEqual(reward.item.components['minecraft:unbreakable'],{});
 assert.equal(JSON.parse(reward.item.components['minecraft:custom_name']).color,'light_purple');
 if(t<=4) assert.equal(reward.item.id,mechanisms[t-1].tool);
}
const visited=new Set(),visiting=new Set();function visit(id){assert(qs.has(id),id);if(visited.has(id))return;assert(!visiting.has(id),'Cycle '+id);visiting.add(id);qs.get(id).dependencies.forEach(visit);visiting.delete(id);visited.add(id)}qs.forEach(q=>visit(q.id));
const completed=new Set(),alice={stages:new Set()},bob={stages:new Set()},gates=[];
sandbox.FTBQuests={getServerDataFromPlayer(){return {isCompleted(id){return completed.has(id)}}}};sandbox.PlayerEvents={loggedIn(f){handlers.login=f}};sandbox.FTBQuestsEvents={completed(id,f){handlers[id]=f}};
function gate(id,stage,...items){assert(!gates.some(g=>g.id===id),'Duplicate restriction '+id);gates.push({id,stage,items});const b={};for(const k of ['allowPickup','allowInventoryStorage','allowContainerStorage','allowMining','allowLeftClick','showInRecipeViewer','setCanBePlaced','setCanItemBeRightClicked','setCanInteractWithBlock'])b[k]=()=>b;return b}
sandbox.AStages={addRestrictionForItem:gate,addRestrictionForMod:gate,playerHasStage(p,s){return p.stages.has(s)},addStageToPlayer(p,s){p.stages.add(s)}};run('kubejs/server_scripts/progression/tk3_stages.js');handlers.login({player:alice});assert.equal(alice.stages.size,0);for(let t=1;t<=4;t++){completed.add(m.milestones[t]);handlers[m.milestones[t]]({onlineMembers:[alice]});assert(alice.stages.has('tk3_tier_'+(t+1)))}handlers.login({player:bob});assert.deepEqual([...bob.stages],[...alice.stages]);assert(!alice.stages.has('tk3_tier_6'));
// Native fluid handler: each selector, absent/mismatched pad, obsidian, client/cancel guard.
let fluidHandler;const state=id=>({id,getBlock(){return {id}}});sandbox.Java={loadClass(n){if(n.endsWith('FluidPlaceBlockEvent'))return function FluidEvent(){};if(n.endsWith('BuiltInRegistries'))return {BLOCK:{getKey(b){return b.id}}};throw Error(n)}};sandbox.NativeEvents={onEvent(type,f){fluidHandler=f}};sandbox.Block={getBlock(id){return {defaultBlockState(){return state(id)}}}};run('kubejs/server_scripts/progression/tk3_stone_generators.js');
function generate(g,frame,initial='minecraft:cobblestone',cancel=false,server=true){let result=initial;fluidHandler({getLevel(){return {getServer(){return server?{}:null},getBlockState(p){return state(p.n===1?g.lens:frame)}}},isCanceled(){return cancel},getNewState(){return state(initial)},getPos(){return {below(n=1){return {n}}}},setNewState(s){result=s.id}});return result}
for(const g of m.geology){assert.equal(generate(g,m.frames[g.tier]),g.stone);assert.equal(generate(g,'minecraft:air'),'minecraft:cobblestone');assert.equal(generate(g,m.frames[g.tier],'minecraft:obsidian'),'minecraft:obsidian');assert.equal(generate(g,m.frames[g.tier],'minecraft:cobblestone',true),'minecraft:cobblestone');assert.equal(generate(g,m.frames[g.tier],'minecraft:cobblestone',false,false),'minecraft:cobblestone')}
const result={status:'PASS',recipes:m.recipes.length,quests:qs.size,woodPairs:m.wood.length,stoneGenerators:m.geology.length,customItems:custom.length,machineFrames:blocks.length,stageRestrictions:gates.length,checks:['known registry IDs','explicit API surface','recipe uniqueness','approved recipes survive final whitelist','native and injected alloy alternatives excluded','processing scoped by type and input','native iron ingot-to-dust preserved','component-preserving storage wrappers','acyclic stable quests','offline team stage sync','tier 6 reserved','ten geological selectors and fluid guards'],limitation:'Mock authoring tests; Minecraft integration and economic balance not executed'};fs.writeFileSync(path.join(root,'docs/static_validation.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result,null,2));
