// Content integrity: catch incomplete extraction and contradictory alpha coverage.
const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'../handbook-source'),read=name=>JSON.parse(fs.readFileSync(path.join(root,'data',name+'.json')));
const s=read('skilltree'),nodes=new Map(s.nodes.map(n=>[n.id,n]));
assert.equal(nodes.size,s.nodes.length,'Duplicate skill IDs');
assert.equal(s.classes.length,6);assert.equal(s.classes.flatMap(c=>c.subclasses).length,18);assert.equal(s.professions.length,7);
assert.equal(s.limitations.archetype,1);assert.equal(s.limitations.subclass,1);assert.equal(s.limitations.profession_mastery,3);
for(const n of s.nodes)for(const r of n.requirements||[])if(r.skill_id)assert(nodes.has(r.skill_id),'Dangling prerequisite '+r.skill_id);
for(const c of s.classes)for(const sub of c.subclasses){
  const id='skilltree:tk3_'+c.id+'_sub_'+sub.id;
  for(let p=1;p<=3;p++)for(let rank=1;rank<=14;rank++){
    const n=nodes.get(id+'_path_'+p+'_'+rank);assert(n,'Missing subclass path rank');
    assert(n.requirements.some(r=>r.skill_id===(rank===1?id:id+'_path_'+p+'_'+(rank-1))),'Broken path ordering');
  }
  const ascent=nodes.get(id+'_ascendancy');assert(ascent);
  for(let p=1;p<=3;p++)assert(ascent.requirements.some(r=>r.skill_id===id+'_path_'+p+'_14'),'Ascendancy missing apex prerequisite');
}
for(const p of s.professions){assert.equal(s.limitations['profession_focus_'+p.id],3);for(let i=1;i<=6;i++)assert(nodes.has('skilltree:tk3_prof_'+p.id+'_focus_'+i));}
const mods=read('alpha-mods');assert.equal(mods.source,'modlist.html');assert.equal(mods.entries.length,223);assert.equal(new Set(mods.entries.map(m=>m.url)).size,223);
assert(mods.entries.some(m=>m.name==='Nullscape'));assert(!mods.entries.some(m=>m.name==='Forbidden Magic'));
for(const name of ['spells','accessories','witchery-book']){const d=read(name);assert(d.coverage,'Unqualified reference catalogue');assert.equal(new Set(d.entries.map(e=>e.id)).size,d.entries.length,'Duplicate '+name+' IDs');}
const cfg=JSON.parse(fs.readFileSync(path.join(root,'site.config.json')));assert.equal(new Set(cfg.pages.map(p=>p.route)).size,cfg.pages.length);
for(const pg of cfg.pages.filter(p=>p.source))assert(fs.existsSync(path.join(root,pg.source)),'Missing article source');
console.log(JSON.stringify({result:'passed',nodes:nodes.size,subclassPaths:54,professionFocusNodes:42,alphaProjects:mods.entries.length,spells:read('spells').entries.length,glyphs:read('glyphs').entries.length,accessoryNames:read('accessories').entries.length,witcheryTopics:read('witchery-book').entries.length}));
