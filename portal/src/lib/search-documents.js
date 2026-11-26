const clean = value => Array.isArray(value) ? value.map(clean).join(' ') : value && typeof value === 'object' ? Object.values(value).map(clean).join(' ') : String(value ?? '').replace(/<[^>]+>/g,' ').replace(/§./g,'');
const words = value => String(value || '').split(':').pop().replace(/[_/]/g,' ').replace(/\b\w/g,c=>c.toUpperCase());
const guideEntries = [
  ['questbook','Open the quest book','Inventory icon, FTB Quests shortcut, The Story, A New Beginning and Chapter I.'],
  ['first-steps','Chop wood and set up camp','Logs, planks, tools, shelter, food and your first Create casing.'],
  ['factory','Gather andesite and clay','Where to mine Andesite and Clay, Andesite Alloy recipe, mechanisms, workshop and JEI.'],
  ['appraisal','Build your first Identifier','Identification table recipe, unidentified dungeon gear, vanilla XP, appraisal and salvage.'],
  ['skills','Read levels and spend skill points','Character XP, enemy levels, origins, skill points and the skill tree.']
];
const articleEntries = [
  ['guides/walking-machines/','Build a walking machine','Let It Walk, Aeronautics, Chapter VI, Light Engineering, Reinforced Mechanisms and walker controls.'],
  ['features/','Features and world showcase','Exploration, building, combat, magic and factory automation.'],
  ['guides/epic-fight/','Epic Fight combat','Light, heavy, sprint and jump attacks, weapon innate skills, skill books, Skill Editor, dodge, parry, Demolition Leap, stagger and Combat Punchy automatic switching.'],
  ['guides/tutorial/','In-game tutorial','Quest Book, Story progression, quest rewards, JEI recipe lookup, claiming, travel, Lootr, Ultimine, combat, character progression and spells.'],
  ['tutorials/','Build guides','Tutorials for Cobblestone Generators, tree farms, AE2, Nuclear, Riftborne, Iron’s Spells, Ars Nouveau, Witchery, Thaumaturge, Let It Walk, portals and boss respawning.'],
  ['dungeons/','Dungeons','Dungeon expeditions, loot and rewards, boss encounters and Spiral Abyss.'],
  ['dimensions/','Dimensions','Travel to the Aether, Twilight Forest, the Otherside, Nether and End.'],
  ['dimensions/#nether','Explore the Nether','Jaden’s Nether Expansion, Nether biomes, dungeons, mobs and bosses.'],
  ['dimensions/#end','Explore the End','Enderscape, The Beyond, End dungeons, mobs, bosses and portals.'],
  ['changes/','From Towns & Kingdoms 2 to 3','Changes to progression, character systems, mods and equipment.'],
  ['custom-mods/','Pack-exclusive mods and mechanics','Progression, Workshop, Unidentified Loot, Resonant Arcana, Flow Control, Wildshape, Combat Punchy, Combat Afloat and Alchemical Lasers.'],
  ['guides/server-setup/','Dedicated server setup','Minecraft 1.21.1, NeoForge, Java 21, server files, installation, memory, BisectHosting and code Mika.'],
  ['guides/player-shops/','Player shops','Shop Teleporter, Trading Hub, market, Create shops, Table Cloth, Stock Ticker and selling items.'],
  ['loot/pools/','Unidentified Loot pool catalog','Loot per item, tier, enemy level group, dimension and boss drops.'],
  ['servers/','Official and public servers','Official Server button, hub, EU and US regions, community rules, and public servers via BisectHosting.'],
  ['discord/','Discord community','Official invite, community, support and announcements.'],
  ['support/','Report a bug or suggest a feature','Issue reports, reproduction steps, crash reports and log submission.'],
  ['faq/','Frequently asked questions','Getting started, server access, recipes, shops, character progression and troubleshooting.']
];
export function buildSearchDocuments(datasets, base) {
  const { weapons=[], recipes=[], mods=[], chapters=[], bosses=[], skills={}, mechanics={}, families=[], eyes=[], productionRules=[], buildGuides=[] }=datasets;
  const docs=[];
  const add=(category,id,name,description,url,subtitle='',extra={})=>docs.push({_key:category+':'+id,category,id,name:clean(name)||words(id),description:clean(description),url,subtitle:clean(subtitle),...extra});
  for(const w of weapons)add('Weapons',w.id,w.name,[w.styleName,w.archetype,w.grip,w.modName].join(' '),base+'weapons/#item='+encodeURIComponent(w.id),w.modName+' · '+w.styleName,{mod:w.modName,style:w.styleName});
  for(const r of recipes)add('Recipes',r.id,r.name||r.outputName||words(r.output),[r.output,...(r.ingredients||[]).map(i=>clean(i)),...(r.gates||[]).map(clean)].join(' '),base+'recipes/#recipe='+encodeURIComponent(r.id),r.id,{mod:r.modName});
  for(const m of mods)add('Mods',m.id,m.name,[m.summary,m.category].join(' '),base+'mods/#mod='+encodeURIComponent(m.id),m.category);
  for(const chapter of chapters){
    const quests=chapter.quests||[];
    add('Chapters',chapter.id,chapter.title,quests.map(quest=>quest.title),base+'chapters/#'+encodeURIComponent(chapter.id),'Chapter '+chapter.roman);
  }
  for(const b of bosses)add('Bosses',b.id,b.name,[b.modName,b.classification,...(b.rewards||[]).map(r=>r.name||r.item||r.id||r)],base+'bosses/#boss='+encodeURIComponent(b.id),b.modName);
  for(const n of skills.nodes||[])add('Skills',n.id,n.title,n.description,base+'skills/#node='+encodeURIComponent(n.id),n.branch+' · '+n.cost+' point'+(n.cost===1?'':'s'));
  for(const [id,title,description]of guideEntries)add('Guides',id,title,description,base+'guides/#'+id,'Practical handbook');
  for(const [route,title,description]of articleEntries)add('Guides',route,title,description,base+route,'Official handbook');
  for(const guide of buildGuides){
    const route='guides/'+guide.id+'/';
    add('Guides',route,guide.title,[guide.description,guide.keywords,guide.materials],base+route,'Build guide');
    for(const step of [...guide.steps,...(guide.tips||[])]){
      if(step.id)add('Guides',route+'#'+step.id,step.title,step.text,base+route+'#'+step.id,guide.title);
    }
  }
  for(const eye of eyes)add('Bosses',eye.id,eye.name,[eye.bossName,eye.bossId,'End Remastered eye stronghold portal'].join(' '),base+'bosses/#eye-'+eye.id.split(':').pop(),'End Remastered');
  for(const o of mechanics.origins||[])add('Origins',o.id,o.name,[o.description,...(o.perks||[]).map(p=>p.description)].join(' '),base+'mechanics/#origin-'+o.id,o.tier||'Origin');
  for(const id of ['leveling','origins','titles'])add('Mechanics',id,words(id),clean(mechanics[id]),base+'mechanics/#'+id,'Character systems');
  add('Mechanics','loot','Loot & Appraisal',clean(mechanics.loot),base+'loot/','Unidentified Loot');
  for(const family of families)add('Recipes',family.id,family.name,[(family.rules||[]).join(' '),...(family.schools||[]).map(s=>s.name)].join(' '),base+'recipes/#family-'+family.id,'Spell scroll binding');
  for(const rule of productionRules)add('Recipes',rule.id,rule.name,clean(rule.recipe),base+'recipes/#rule-'+rule.id.replace(':','/'),words(rule.type));
  return docs;
}
