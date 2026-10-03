// Export documentation data from a supplied T&K3 generator; never writes game data.
const fs=require('fs'),vm=require('vm'),crypto=require('crypto'),path=require('path');
const input=process.argv[2];if(!input)throw Error('Usage: node extract_skilltree_guide.cjs TK3_SkillTree.js');
const source=fs.readFileSync(input,'utf8');
const marker='    // WRITE GENERATED DATA';
if(!source.includes(marker))throw Error('Unsupported generator: export marker missing');
const run=source.replace(marker,'    captureDefinitions({classes,professions,sharedDefs});\n'+marker);
let definitions,summary,limitations;const nodes=[];
const context={Java:{loadClass:name=>name.includes('BuiltInRegistries')?{ATTRIBUTE:{containsKey:()=>true}}:{parse:s=>s}},JsonIO:{write:(p,data)=>{if(p.includes('/skills/'))nodes.push(data);if(p.endsWith('skilltree_generation_summary.json'))summary=data;if(p.endsWith('skill_trees/tree.json'))limitations=data.skillLimitations;}},console:{info:()=>{}},captureDefinitions:d=>definitions=d};
vm.runInNewContext(run,context,{timeout:10000,codeGeneration:{strings:false,wasm:false}});
const data={source:{name:path.basename(input),sha256:crypto.createHash('sha256').update(source).digest('hex'),version:source.split('\n')[0].replace('// ','')},attributeScenario:'Minecraft + Iron’s Spellbooks + Apothic Attributes available; this is documentation generation, not a game runtime test.',summary,limitations,...JSON.parse(JSON.stringify(definitions)),nodes};
fs.mkdirSync(path.resolve(__dirname,'../handbook-source/data'),{recursive:true});
fs.writeFileSync(path.resolve(__dirname,'../handbook-source/data/skilltree.json'),JSON.stringify(data));
console.log(JSON.stringify({nodes:nodes.length,classes:data.classes.map(c=>c.name),subclasses:data.classes.flatMap(c=>c.subclasses.map(s=>s.name)),limitations}));
