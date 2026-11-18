// TNK Progression TreePassiveRules: caps on the selected tree's contributions.
export const PASSIVE_CAPS=Object.freeze({guard:.25,evasion:.15,burning_damage:.35,longshot:.15,
  well_fed_damage:.2,effect_damage:.2,potion_duration:.5,food_recovery:3,leech:1,ignite:.2,second_wind:1});
export function pointsForLevel(level){const value=Math.max(0,Math.min(100,Math.floor(Number(level)||0)));return value+Math.floor(value*.75);}
export function levelForPoints(points){for(let level=1;level<=100;level++)if(pointsForLevel(level)===points)return level;return null;}
export function createSkillModel(data) {
  const byId = new Map(data.nodes.map(node=>[node.id,node]));
  if (byId.size !== data.nodes.length) throw new Error('Duplicate skill IDs.');
  const adjacency = new Map(data.nodes.map(node=>[node.id,new Set()]));
  for (const [a,b] of data.edges) {
    if (!byId.has(a)||!byId.has(b)) throw new Error('A skill connection has a missing endpoint.');
    adjacency.get(a).add(b);adjacency.get(b).add(a);
  }
  return {data,byId,adjacency,ids:data.nodes.map(node=>node.id),pointCap:data.category.pointCap};
}
export function spentPoints(model,selection) {
  let spent=0;
  for(const id of selection) spent+=model.byId.get(id)?.cost ?? 0;
  return spent;
}
export function allocationState(model,selection,id,budget=model.pointCap) {
  const node=model.byId.get(id);
  if(!node) return {allowed:false,reason:'This skill is unavailable.'};
  if(selection.has(id)) return {allowed:false,reason:'Already allocated.'};
  const spent=spentPoints(model,selection);
  if(spent+node.cost>model.pointCap) return {allowed:false,reason:'The tree’s point limit has been reached.'};
  if(spent+node.cost>budget || budget-spent<node.requiredPoints) return {allowed:false,reason:'More available skill points are needed.'};
  if(spent<node.requiredSpentPoints) return {allowed:false,reason:'Spend '+node.requiredSpentPoints+' points before allocating this skill.'};
  if(node.root && (!model.data.category.exclusiveRoot || ![...selection].some(i=>model.byId.get(i)?.root))) return {allowed:true,reason:'Ready to allocate.'};
  const neighbors=[...model.adjacency.get(id)].filter(i=>selection.has(i)).length;
  if(neighbors<node.requiredSkills) return {allowed:false,reason:'Allocate '+(node.requiredSkills===1?'a connected skill first.':node.requiredSkills+' connected skills first.')};
  return {allowed:true,reason:'Ready to allocate.'};
}
export function validateSelection(model,selection,budget=model.pointCap) {
  const pending=new Set(selection),ordered=new Set(),unknown=[];
  for(const id of pending) if(!model.byId.has(id)){unknown.push(id);pending.delete(id);}
  let changed=true;
  while(changed && pending.size) {
    changed=false;
    for(const id of pending) {
      if(allocationState(model,ordered,id,budget).allowed){ordered.add(id);pending.delete(id);changed=true;}
    }
  }
  return {valid:unknown.length===0&&pending.size===0,selection:ordered,
    unresolved:[...unknown,...pending],spent:spentPoints(model,selection)};
}
export function refundSelection(model,selection,id,budget=model.pointCap) {
  const remaining=new Set(selection);remaining.delete(id);
  const valid=validateSelection(model,remaining,budget);
  return {selection:valid.selection,removed:[...selection].filter(i=>!valid.selection.has(i))};
}
export function summarizeSelection(model,selection) {
  const attributes=new Map(),passives=new Map();
  for(const id of selection) {
    const node=model.byId.get(id);
    if(!node) continue;
    for(const reward of node.rewards || []) {
      if(reward.type!=='puffish_skills:attribute') continue;
      const {attribute,operation,value}=reward.data;
      const key=attribute+'|'+operation;
      if(!attributes.has(key)) attributes.set(key,{attribute,operation,value:0});
      attributes.get(key).value+=value;
    }
    for(const [key,value] of Object.entries(node.passives || {})) {
      if(Number.isFinite(value)&&value>0&&PASSIVE_CAPS[key])passives.set(key,Math.min(PASSIVE_CAPS[key],(passives.get(key)||0)+value));
    }
  }
  return {attributes:[...attributes.values()].sort((a,b)=>a.attribute.localeCompare(b.attribute)),passives:Object.fromEntries(passives)};
}
export function encodeBuild(model,selection,budget=model.pointCap) {
  if(!Number.isSafeInteger(budget)||budget<0||budget>model.pointCap)throw new Error('This build exceeds the point limit.');
  if(!validateSelection(model,selection,budget).valid) throw new Error('An invalid build cannot be shared.');
  const bytes=new Uint8Array(Math.ceil(model.ids.length/8));
  model.ids.forEach((id,i)=>{if(selection.has(id))bytes[i>>3]|=1<<(i&7);});
  const packed=btoa(String.fromCharCode(...bytes)).replace(/\+/g,'-').replace(/\//g,'_').replace(/=+$/,'');
  return ['1',model.data.fingerprint,budget,packed].join('.');
}
export function decodeBuild(model,value) {
  const [format,fingerprint,points,packed,...extra]=String(value).split('.');
  if(format!=='1'||fingerprint!==model.data.fingerprint||extra.length||!/^\d+$/.test(points)||!/^[A-Za-z0-9_-]+$/.test(packed||'')) throw new Error('This build link cannot be opened.');
  const budget=Number(points);
  if(!Number.isSafeInteger(budget)||budget<0||budget>model.pointCap)throw new Error('This build exceeds the point limit.');
  const binary=atob(packed.replace(/-/g,'+').replace(/_/g,'/'));
  if(binary.length!==Math.ceil(model.ids.length/8)) throw new Error('This build link is incomplete.');
  const lastBits=model.ids.length%8;
  if(lastBits && binary.charCodeAt(binary.length-1)>>lastBits)throw new Error('This build link contains unknown skills.');
  const selection=new Set();
  model.ids.forEach((id,i)=>{if(binary.charCodeAt(i>>3)&(1<<(i&7)))selection.add(id);});
  const valid=validateSelection(model,selection,budget);
  if(!valid.valid)throw new Error('This build does not meet its skill requirements.');
  return {selection:valid.selection,budget};
}
