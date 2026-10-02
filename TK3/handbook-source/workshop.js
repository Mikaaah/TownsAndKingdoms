(()=>{
'use strict';
const data=JSON.parse(document.getElementById('recipe-data').textContent);
const names={'kubejs:tk3_rotation_mechanism':'Kinetic Mechanism','kubejs:tk3_incomplete_rotation_mechanism':'Incomplete Kinetic Mechanism','kubejs:tk3_sealed_mechanism':'Sealed Mechanism','kubejs:tk3_arcane_mechanism':'Arcane Mechanism','kubejs:tk3_kinetic_machine':'Kinetic Machine','kubejs:tk3_hydraulic_machine':'Hydraulic Machine','kubejs:tk3_precision_machine':'Precision Machine','kubejs:tk3_arcane_machine':'Arcane Machine','#minecraft:wooden_slabs':'Any Wooden Slab','#minecraft:planks':'Any Planks','minecraft:slime_ball':'Slimeball','betterend:iron_hammer':'BetterEnd Iron Hammer','farmersdelight:iron_knife':'Farmer’s Delight Iron Knife','ars_nouveau:enchanters_sword':'Ars Enchanter’s Sword'};
const methods={shaped:'Shaped crafting',wrapped:'Preserving upgrade',shapeless:'Crafting',sequence:'Sequenced assembly',deploying:'Deploying',mixing:'Mixing',stonecutting:'Stonecutting',milling:'Milling',crushing:'Crushing',splashing:'Fan washing',haunting:'Fan haunting',apparatus:'Enchanting Apparatus',cutting:'Saw cutting',compacting:'Compacting',pressing:'Pressing',sandpaper_polishing:'Sandpaper polishing',smelting:'Furnace smelting',blasting:'Blast furnace',enriching:'Enrichment',mek_enriching:'Enrichment',mek_smelting:'Mekanism smelting',mechanical_crafting:'Mechanical crafting',cauldron_brew:'Cauldron brewing',cauldron_empty:'Cauldron bottling'};
const icons={'kubejs:tk3_rotation_mechanism':'rotation_mechanism.png','kubejs:tk3_incomplete_rotation_mechanism':'incomplete_rotation_mechanism.png','kubejs:tk3_sealed_mechanism':'sealed_mechanism.png','kubejs:tk3_incomplete_sealed_mechanism':'incomplete_sealed_mechanism.png','kubejs:tk3_arcane_mechanism':'locomotive_mechanism.png','kubejs:tk3_incomplete_arcane_mechanism':'incomplete_locomotive_mechanism.png'};
const el=id=>document.getElementById(id),ns='http://www.w3.org/2000/svg';
function item(v){if(typeof v==='object')return{id:v.fluid,count:v.amount,fluid:true};const q=String(v).match(/^(\d+)x /);return{id:String(v).replace(/^\d+x /,''),count:q?Number(q[1]):1}}
const words=s=>s.split('_').map(x=>x.charAt(0).toUpperCase()+x.slice(1)).join(' ');
const pretty=id=>names[id]||(id.startsWith('#')?'Any '+words(id.split(':').at(-1)):null)||window.TK3ItemArt?.names?.[id]||(id.startsWith('mekanism:ingot_')?words(id.slice(15))+' Ingot':id.startsWith('mekanism:dust_')?words(id.slice(14))+' Dust':words(id.split(':').at(-1).replace(/^tk3_/,'').replace(/^#/,'')));
const label=v=>{const a=typeof v==='string'||!v.id?item(v):v;return(a.fluid?a.count+' mB ':a.count!==1?a.count+' × ':'')+pretty(a.id)};
function ingredients(r){if(Array.isArray(r.inputs))return r.inputs.map(item);return Object.entries(r.inputs).map(([k,v])=>{const a=item(v);a.count=(r.pattern||[]).join('').split(k).length-1||1;a.key=k;return a})}
function add(tag,parent,attrs={},text){const n=document.createElement(tag);for(const [k,v]of Object.entries(attrs))n.setAttribute(k,v);if(text!==undefined)n.textContent=text;parent.append(n);return n}
function svg(tag,attrs,parent,text){const n=document.createElementNS(ns,tag);for(const [k,v]of Object.entries(attrs))n.setAttribute(k,v);if(text!==undefined)n.textContent=text;parent.append(n);return n}
let selected,steps=[],current=0,timer;
const all=data.recipes;
const familyNames={core:'Chapter workshop',frames:'Machine frames',create:'Create parts & utilities',geology:'Stone processing',compat:'Timber & vanilla',magic:'Magic integrations',storage:'Storage & backpacks',late_layers:'Industrial refining'};
let limit=80;
function describe(r){const a=ingredients(r),result=label(r.fluid_output||r.output),process=methods[r.kind]||r.kind;
if(r.kind==='sequence')return[
{title:'Start with '+label(r.inputs[0]),text:'Put this starting item on a depot or belt. The finishing tool stays in a Deployer’s hand.',mode:'input',belt:r.inputs[0]},
...r.inputs.slice(1).map((x,i)=>({title:r.steps[i]==='tool'?'Finish with '+pretty(item(x).id):'Deploy '+label(x),text:r.steps[i]==='tool'?'Use the listed tool in the final Deployer. An ordinary tool loses one durability; the chapter reward’s unbreakable version can do the same operation without wear.':'Feed '+label(x)+' into this Deployer. It applies one ingredient to the unfinished mechanism; continue in the listed order.',mode:r.steps[i]==='tool'?'tool':'deploy',held:x,belt:r.transition,index:i+1})),
{title:'Collect '+result,text:'One complete loop gives one guaranteed mechanism. Extract the finished output after every operation has been completed.',mode:'output',belt:r.output}];
if(r.kind==='deploying')return[
{title:'Place '+label(r.inputs[0]),text:'Feed the base item onto the depot or belt under a powered Deployer.',mode:'input',belt:r.inputs[0]},
{title:'Hold '+label(r.inputs[1]),text:r.keep?'This recipe keeps the held catalyst. Leave it in the Deployer for repeat production.':'Put this item in the Deployer’s hand. It is consumed when applied to the base.',mode:'deploy',held:r.inputs[1],belt:r.inputs[0]},
{title:'Collect '+result,text:r.output.startsWith('kubejs:tk3_')?'This is the machine frame. Stonecut it into the working machine you choose.':'Extract the result into a buffer, then use its next recipe or provide its working power.',mode:'output',belt:r.output}];
if(r.kind==='apparatus')return[
{title:'Prepare the pedestals',text:'Place '+r.inputs.slice(1).map(label).join(' + ')+' on the Arcane Pedestals around the apparatus.',mode:'apparatus'},
{title:'Add '+label(r.inputs[0])+' as reagent',text:'Put the first listed ingredient on the central Enchanting Apparatus. It is the reagent; the other items stay on pedestals.',mode:'apparatus',belt:r.inputs[0]},
{title:'Supply '+r.source+' Source',text:r.source?'Make this amount of Source available from your Source supply. Wait for the apparatus operation.':'This recipe has no Source cost.',mode:'apparatus'},
{title:'Collect '+result,text:'Collect the finished output before starting the next batch.',mode:'output',belt:r.output}];
if(r.kind==='sandpaper_polishing')return[
{title:'Prepare Rose Quartz and Sand Paper',text:'Hold Rose Quartz and Sand Paper for manual polishing, or supply Rose Quartz beneath a Deployer holding Sand Paper.',mode:'craft'},
{title:'Polish the quartz',text:'Use Sand Paper on the quartz. A Deployer can repeat the same polishing process automatically. Ordinary Sand Paper wears; keep replacement paper available.',mode:'craft'},
{title:'Collect '+result,text:'Use the polished quartz in the Electron Tube recipe.',mode:'output',belt:r.output}];
if(['smelting','blasting'].includes(r.kind))return[
{title:'Supply '+label(r.inputs[0]),text:'Put the listed zinc material in the input slot and add fuel.',mode:'craft'},
{title:r.kind==='blasting'?'Use a Blast Furnace':'Use a Furnace',text:'Smelt the material for '+r.json.cookingtime/20+' seconds. Fuel is required; it is not part of the material ingredients.',mode:'craft'},
{title:'Collect '+result,text:'Extract the ingot for components, brass production or storage.',mode:'output',belt:r.output}];
if(['shaped','wrapped','mechanical_crafting','shapeless','stonecutting'].includes(r.kind))return[
{title:'Gather the inputs',text:a.map(label).join(' + '),mode:r.kind==='stonecutting'?'cutter':'craft'},
{title:r.kind==='stonecutting'?'Select this stonecutter output':r.pattern?'Follow the displayed pattern':'Combine the ingredients',text:r.kind==='stonecutting'?'Choose '+result+'. The frame is consumed; you receive this output only.':r.kind==='mechanical_crafting'?'Build powered Mechanical Crafters in the displayed layout and point their output connections toward the final crafter.':'Use the exact ingredient quantities and pattern below. '+(r.kind==='wrapped'?'This preserving recipe uses the listed existing container or upgrade.':''),mode:r.kind==='stonecutting'?'cutter':'craft'},
{title:'Collect '+result,text:r.kind==='wrapped'?'The preserving recipe carries the existing container or upgrade data into its new form.':'Take the listed output and put it in a buffer for the next step.',mode:'output',belt:r.output}];
const mode=['mixing','compacting'].includes(r.kind)?'basin':['splashing','haunting'].includes(r.kind)?'fan':r.kind.startsWith('cauldron')?'cauldron':'machine';
const supply=a.map(label);if(r.base)supply.unshift(label(r.base));if(r.fluid)supply.unshift(label(r.fluid));
let note='Provide the inputs to the '+process+' setup.';
if(r.kind==='mixing')note='Put ingredients in a Basin below a powered Mixer. '+(r.heat?'Provide a heated Blaze Burner below the Basin.':'No heat is required.');
if(r.kind==='compacting')note='Put the ingredients and any listed fluid in a Basin beneath a powered Mechanical Press.';
if(r.kind==='splashing')note='Send fan airflow through water and across the input. Keep it in the processing area until washing finishes.';
if(r.kind==='haunting')note='Send fan airflow through soul fire and across the input. Keep it in the processing area until haunting finishes.';
if(r.kind==='cutting')note='Use an upward-facing powered Mechanical Saw. Set its output filter to this result when the input has several outcomes.';
if(r.kind==='milling')note='Put the input into a powered Millstone and extract the processed material.';
if(r.kind==='crushing')note='Feed the input into a pair of powered Crushing Wheels. Wheels require tier 3, even if this material is obtainable earlier.';
if(r.kind==='pressing')note='Put the input on a Depot or Belt beneath a powered Mechanical Press.';
if(['enriching','mek_enriching'].includes(r.kind))note='Feed the raw material into a powered Enrichment Chamber. Smelt the resulting dust using its native smelting recipe.';
if(r.kind==='mek_smelting')note='Use the FE-powered Mekanism smelting process for this explicit recipe.';
if(r.kind==='cauldron_brew')note='Use the Alchemist Cauldron with the listed base fluid and item. The output is fluid, ready for a separate bottling operation.';
if(r.kind==='cauldron_empty')note='Use a glass bottle with the listed ink fluid in the Alchemist Cauldron to obtain the bottled item.';
return[{title:'Supply the inputs',text:supply.join(' + '),mode,belt:r.inputs[0]},{title:process+(r.heat?' · Heated':''),text:note,mode,belt:r.inputs[0]},{title:'Collect '+result,text:r.fluid_output?'This output is '+r.fluid_output.amount+' mB of fluid. Follow the bottling recipe to obtain an item.':'Extract the listed quantity into storage. Reserve any material needed by another line.',mode:'output',belt:r.output}];
}
function art(id,size=40){return window.TK3ItemArt?window.TK3ItemArt.create(id,size):add('span',document.createElement('div'),{class:'item-symbol'},'◆')}
function flowCard(parent,title,value){const c=add('div',parent,{class:'flow-card'});add('p',c,{class:'eyebrow'},title);const a=item(value);c.append(art(a.fluid?'minecraft:water_bucket':a.id,48));add('strong',c,{},label(value));}
function draw(step){
 const host=el('recipe-scene'),wrap=el('scene-wrap'),hint=el('scene-hint'),flow=el('recipe-flow');
 host.setAttribute('aria-label',step.title+' — recipe operation');flow.replaceChildren();
 if(['sequence','deploying'].includes(selected.kind)){
  flowCard(flow,'ON THE BELT',step.belt||selected.inputs[0]);
  if(step.held){add('span',flow,{class:'flow-arrow','aria-hidden':'true'},'+');flowCard(flow,step.mode==='tool'?'FINISHING TOOL':'IN THE HAND',step.held);}
  add('span',flow,{class:'flow-arrow','aria-hidden':'true'},'→');flowCard(flow,'RECIPE OUTPUT',selected.output);
 }else{
  const input=add('div',flow,{class:'flow-card'});add('p',input,{class:'eyebrow'},'RECIPE INPUTS');
  for(const value of ingredients(selected)){const row=add('div',input,{class:'item-line'});row.append(art(value.fluid?'minecraft:water_bucket':value.id,28));add('span',row,{},label(value));}
  add('span',flow,{class:'flow-arrow','aria-hidden':'true'},'→');flowCard(flow,'OUTPUT',selected.fluid_output||selected.output);
 }
 const supported=window.TK3CreateView?.supports(selected.kind);wrap.hidden=!supported;hint.hidden=!supported;
 if(supported)window.TK3CreateView.show(host,selected,step,current);
}
function showStep(){current=Math.max(0,Math.min(current,steps.length-1));const step=steps[current];el('step-title').textContent=step.title;el('step-text').textContent=step.text;el('step-counter').textContent=(current+1)+' / '+steps.length;el('previous-step').disabled=current===0;el('next-step').disabled=current===steps.length-1;for(const [i,b]of [...el('step-track').children].entries())i===current?b.setAttribute('aria-current','step'):b.removeAttribute('aria-current');draw(step)}
function stop(){clearInterval(timer);timer=undefined;el('play-steps').textContent='Play';el('play-steps').setAttribute('aria-pressed','false');el('scene-wrap').classList.add('paused')}
function select(r,update=true){stop();selected=r;current=0;steps=describe(r);el('recipe-title').replaceChildren();const output=add('div',el('recipe-title'),{class:'recipe-output'});output.append(art(item(r.output).id,56));add('span',output,{},label(r.output));el('recipe-label').textContent='Tier '+r.tier+' · '+methods[r.kind]+(r.native?' · Native recipe':'');el('recipe-id').textContent=r.id;el('step-track').replaceChildren();steps.forEach((step,i)=>{const b=add('button',el('step-track'),{type:'button','aria-label':'Step '+(i+1)+': '+step.title});add('span',b,{class:'step-index'},String(i+1));add('span',b,{},step.title);b.addEventListener('click',()=>{stop();current=i;showStep()})});
const chips=el('recipe-ingredients');chips.replaceChildren();for(const a of ingredients(r)){const c=add('div',chips,{class:'ingredient-chip'});c.append(art(a.fluid?'minecraft:water_bucket':a.id,36));const q=add('span',c,{},label(a));if(r.tool===a.id)add('small',q,{},'Held finishing tool · normal durability / unbreakable reward');else if(r.keep&&a.id===item(r.inputs[1]).id)add('small',q,{},'Held catalyst · retained');else if(a.fluid)add('small',q,{},'Fluid input');else if(a.id.startsWith('#'))add('small',q,{},'Any item in this ingredient tag');}
if(r.held_tool){const c=add('div',chips,{class:'ingredient-chip'});c.append(art(r.held_tool,36));const q=add('span',c,{},pretty(r.held_tool));add('small',q,{},'Required polishing tool · ordinary tool wears');}
if(r.base)add('div',chips,{class:'ingredient-chip'},label(r.base)+' · base fluid');if(r.fluid)add('div',chips,{class:'ingredient-chip'},label(r.fluid)+' · cauldron fluid');
const pattern=el('recipe-pattern');pattern.replaceChildren();pattern.hidden=!r.pattern;if(r.pattern){pattern.style.gridTemplateColumns=`repeat(${r.pattern[0].length}, 1fr)`;for(const row of r.pattern)for(const k of row){const v=r.inputs[k];const slot=add('span',pattern,{class:k===' '?'empty':'','title':v?label(v):'Empty slot'});if(v)slot.append(art(item(v).id,40));}}
const note=[];if(r.kind==='sequence')note.push('One loop · guaranteed result · '+(r.inputs.length-1)+' ordered operations.');if(r.heat)note.push('Requires a heated Blaze Burner.');if(r.source!==undefined)note.push(r.source+' Source; first ingredient is the central reagent.');if(r.keep)note.push('The held catalyst is retained.');if(r.kind==='crushing')note.push('Crushing Wheels unlock in tier 3.');if(r.tier>1)note.push('Complete the previous chapter milestone to access this production tier.');if(r.native)note.push('Native recipe; the Upgrade Base uses T&K3’s tier 1 recipe.');el('recipe-conditions').textContent=note.join(' ');
const related=el('recipe-related');related.replaceChildren();const inputIDs=ingredients(r).map(a=>a.id);
for(const id of [...new Set(inputIDs)]){
 const sources=all.filter(x=>item(x.output).id===id&&x.id!==r.id);
 if(sources.length){for(const x of sources){const a=add('a',related,{href:'?recipe='+encodeURIComponent(x.id)},pretty(id)+' · '+methods[x.kind]+' · Tier '+x.tier);a.addEventListener('click',e=>{e.preventDefault();select(x);renderList()});}}
 else{const natural={'create:limestone':'worldgen or the Calcite generator','create:scoria':'worldgen or the Netherrack generator','create:scorchia':'worldgen or the Blackstone generator','create:veridium':'worldgen or the Copper Block generator','create:crimsite':'worldgen or the Iron Block generator','create:asurine':'worldgen or the Zinc Block generator','create:ochrum':'worldgen or the Gold Block generator'};add('span',related,{class:'small'},pretty(id)+' · '+(id.startsWith('#')?'Use any matching ingredient; check JEI for tag members.':natural[id]||'Collect or craft using its native route; check JEI.'));}
}
const uses=el('recipe-uses');uses.replaceChildren();const outputID=item(r.output).id;const matches=all.filter(x=>x.id!==r.id&&ingredients(x).some(a=>a.id===outputID));
for(const x of matches.slice(0,12)){const a=add('a',uses,{href:'?recipe='+encodeURIComponent(x.id)},label(x.output)+' · '+methods[x.kind]+' · Tier '+x.tier);a.addEventListener('click',e=>{e.preventDefault();select(x);renderList()});}
if(matches.length>12)add('a',uses,{href:'?item='+encodeURIComponent(outputID)},'Find all '+matches.length+' uses in the workshop →');
if(!matches.length)add('span',uses,{class:'small'},'Finished equipment or material. Use it in your build; check JEI for native recipes beyond this catalogue.');

if(update){const u=new URL(location.href);u.searchParams.set('recipe',r.id);history.replaceState({},'',u)}showStep();renderList();}
const search=el('recipe-search'),tier=el('tier-filter'),method=el('method-filter'),mod=el('mod-filter'),family=el('family-filter');
const modNames={create:'Create',kubejs:'T&K3 frames & mechanisms',minecraft:'Minecraft',sophisticatedstorage:'Sophisticated Storage',sophisticatedbackpacks:'Sophisticated Backpacks',ars_nouveau:'Ars Nouveau',irons_spellbooks:'Iron’s Spells',mekanism:'Mekanism',mekanismgenerators:'Mekanism Generators',architects_palette:'Architect’s Palette',createaddition:'Create Crafts & Additions',create_wizardry:'Create: Wizardry'};
function renderList(){const q=search.value.toLowerCase().trim(),t=tier.value,k=method.value,modID=mod.value,familyID=family.value;const results=all.filter(r=>(!modID||item(r.output).id.split(':')[0]===modID)&&(!familyID||r.system===familyID)&&(!t||String(r.tier)===t)&&(!k||r.kind===k||(k==='enriching'&&r.kind==='mek_enriching'))&&(pretty(item(r.output).id)+' '+JSON.stringify(r)+' '+ingredients(r).map(label).join(' ')+' '+(methods[r.kind]||'')).toLowerCase().includes(q));el('recipe-count').textContent=results.length+' recipes found';const list=el('recipe-list');list.replaceChildren();for(const r of results.slice(0,limit)){const b=add('button',list,{type:'button','aria-pressed':String(selected?.id===r.id)});b.append(art(item(r.output).id,32));const title=add('span',b,{},label(r.fluid_output||r.output));add('small',title,{},'TIER '+r.tier+' · '+methods[r.kind]+(r.native?' · NATIVE':''));b.addEventListener('click',()=>select(r))}el('no-recipes').hidden=results.length>0;el('more-recipes').hidden=results.length<=limit;el('more-recipes').textContent='Showing '+Math.min(limit,results.length)+' of '+results.length+' matches.';el('load-more-recipes').hidden=results.length<=limit;}
for(const x of [search,tier,method,mod,family])x.addEventListener(x===search?'input':'change',()=>{limit=80;renderList()});
el('load-more-recipes').addEventListener('click',()=>{limit+=80;renderList()});
el('reset-filters').addEventListener('click',()=>{search.value='';tier.value='';method.value='';mod.value='';family.value='';limit=80;renderList()});el('previous-step').addEventListener('click',()=>{stop();current--;showStep()});el('next-step').addEventListener('click',()=>{stop();current++;showStep()});el('restart-steps').addEventListener('click',()=>{stop();current=0;showStep()});el('play-steps').addEventListener('click',()=>{if(timer){stop();return}if(current===steps.length-1)current=0;showStep();el('play-steps').textContent='Pause';el('play-steps').setAttribute('aria-pressed','true');el('scene-wrap').classList.remove('paused');timer=setInterval(()=>{if(current>=steps.length-1){stop();return}current++;showStep()},3200)});
document.addEventListener('visibilitychange',()=>{if(document.hidden)stop()});window.addEventListener('pagehide',stop);
for(const k of [...new Set(all.map(r=>r.kind==='mek_enriching'?'enriching':r.kind))].sort((a,b)=>methods[a].localeCompare(methods[b])))add('option',method,{value:k},methods[k]);
for(const ns of [...new Set(all.map(r=>item(r.output).id.split(':')[0]))].sort((a,b)=>(modNames[a]||a).localeCompare(modNames[b]||b)))add('option',mod,{value:ns},modNames[ns]||words(ns));
for(const sys of [...new Set(all.map(r=>r.system))])add('option',family,{value:sys},familyNames[sys]||words(sys));
const params=new URL(location.href).searchParams;if(params.get('mod'))mod.value=params.get('mod');if(params.get('family'))family.value=params.get('family');if(params.get('item'))search.value=params.get('item');
const key=new URL(location.href).searchParams.get('recipe');select(all.find(r=>r.id===key)||all.find(r=>r.kind==='sequence'),false);renderList();
})();
