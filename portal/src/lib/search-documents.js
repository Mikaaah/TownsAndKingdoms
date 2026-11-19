const clean = value => Array.isArray(value) ? value.map(clean).join(' ') : value && typeof value === 'object' ? Object.values(value).map(clean).join(' ') : String(value ?? '').replace(/<[^>]+>/g,' ').replace(/§./g,'');
const words = value => String(value || '').split(':').pop().replace(/[_/]/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
const guideEntries = [
  ['first-steps','Your first evening','Shelter, food, Create power and the first production line.'],
  ['combat','Learn your weapon','Weapon identity, movesets, grips, combat and special attacks.'],
  ['factory','Build a production line','Mechanisms, manufacturing, automated crafting and chapters.'],
  ['appraisal','Identify dungeon gear','Unidentified drops, rarities, appraisal, salvage and equipment.'],
  ['walking-machines','Build a walking machine','Let It Walk, Aeronautics, Reinforced mechanisms and controls.'],
  ['skills','Plan your character','Skill points, branches, prerequisites and shared builds.']
];
const articleEntries = [
  ['features/','Features and world showcase','Exploration, building, combat, magic and factory automation.'],
  ['changes/','From Towns & Kingdoms 2 to 3','Changes to progression, character systems, mods and equipment.'],
  ['custom-mods/','Pack-exclusive mods and mechanics','Progression, Workshop, Unidentified Loot, Resonant Arcana, Flow Control, Wildshape, Combat Punchy, Combat Afloat and Alchemical Lasers.'],
  ['guides/server-setup/','Dedicated server setup','Minecraft 1.21.1, NeoForge, Java 21, server files, installation, memory and multiplayer.'],
  ['servers/','Official servers','Regions, joining, server rules and connection information.'],
  ['discord/','Discord community','Official invite, community, support and announcements.'],
  ['support/','Report a bug or suggest a feature','Issue reports, reproduction steps, crash reports and log submission.'],
  ['faq/','Frequently asked questions','Memory allocation, shaders, multiplayer, progression and troubleshooting.']
];
export function buildSearchDocuments(datasets, base) {
  const { weapons=[], recipes=[], mods=[], chapters=[], bosses=[], skills={}, ponder={}, mechanics={}, families=[], eyes=[], productionRules=[] }=datasets;
  const docs=[];
  const add=(category,id,name,description,url,subtitle='',extra={})=>docs.push({_key:category+':'+id,category,id,name:clean(name)||words(id),description:clean(description),url,subtitle:clean(subtitle),...extra});
  for(const w of weapons)add('Weapons',w.id,w.name,[w.styleName,w.archetype,w.grip,w.modName].join(' '),base+'weapons/#item='+encodeURIComponent(w.id),w.modName+' · '+w.styleName,{mod:w.modName,style:w.styleName});
  for(const r of recipes)add('Recipes',r.id,r.name||r.outputName||words(r.output),[r.output,...(r.ingredients||[]).map(i=>clean(i)),...(r.gates||[]).map(clean)].join(' '),base+'recipes/#recipe='+encodeURIComponent(r.id),r.id,{mod:r.modName});
  for(const m of mods)add('Mods',m.id,m.name,[m.summary,m.category].join(' '),base+'mods/#mod='+encodeURIComponent(m.id),m.category);
  for(const c of chapters)add('Chapters',c.id,c.title,[c.summary,c.mechanism,c.milestones],base+'chapters/#'+encodeURIComponent(c.id),'Chapter '+c.roman);
  for(const b of bosses)add('Bosses',b.id,b.name,[b.modName,b.classification,...(b.rewards||[]).map(r=>r.name||r.item||r.id||r)],base+'bosses/#boss='+encodeURIComponent(b.id),b.modName);
  for(const n of skills.nodes||[])add('Skills',n.id,n.title,n.description,base+'skills/#node='+encodeURIComponent(n.id),n.branch+' · '+n.cost+' point'+(n.cost===1?'':'s'));
  for(const s of ponder.scenes||[])add('Ponder',s.id,s.title,(s.anchors||[]).join(' '),base+'ponder/?scene='+encodeURIComponent(s.slug),'Ponder item guide');
  for(const [id,title,description]of guideEntries)add('Guides',id,title,description,base+'guides/#'+id,'Practical handbook');
  for(const [route,title,description]of articleEntries)add('Guides',route,title,description,base+route,'Official handbook');
  for(const eye of eyes)add('Bosses',eye.id,eye.name,[eye.bossName,eye.bossId,'End Remastered eye stronghold portal'].join(' '),base+'bosses/#eye-'+eye.id.split(':').pop(),'End Remastered');
  for(const o of mechanics.origins||[])add('Origins',o.id,o.name,[o.description,...(o.perks||[]).map(p=>p.description)].join(' '),base+'mechanics/#origin-'+o.id,o.tier||'Origin');
  for(const id of ['leveling','origins','titles','loot'])add('Mechanics',id,words(id),clean(mechanics[id]),base+'mechanics/#'+id,'Character systems');
  for(const family of families)add('Recipes',family.id,family.name,[(family.rules||[]).join(' '),...(family.schools||[]).map(s=>s.name)].join(' '),base+'recipes/#family-'+family.id,'Spell scroll binding');
  for(const rule of productionRules)add('Recipes',rule.id,rule.name,clean(rule.recipe),base+'recipes/#rule-'+rule.id.replace(':','/'),words(rule.type));
  return docs;
}
