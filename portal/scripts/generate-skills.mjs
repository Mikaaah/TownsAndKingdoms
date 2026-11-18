import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import {fileURLToPath} from 'node:url';

const portal = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repository = path.resolve(portal, '..');
const source = path.join(repository, 'TK3/config/puffish_skills');
const assets = path.join(repository, 'TK3/kubejs/assets');
const read = file => JSON.parse(fs.readFileSync(path.join(source, file), 'utf8'));
const configuration = read('config.json');
if (JSON.stringify(configuration.categories) !== '["character"]') throw new Error('Review the added skill categories before importing.');
const category = read('categories/character/category.json');
const definitions = read('categories/character/definitions.json');
const layout = read('categories/character/skills.json');
const connections = read('categories/character/connections.json');
const passives = read('tnk_passives.json').skills;
const branchTitles = {alchemist:'Alchemist',blacksmith:'Blacksmith',cook:'Cook',enchanter:'Enchanter',hunter:'Hunter',miner:'Miner'};
const nodes = Object.entries(layout).sort(([a],[b]) => a.localeCompare(b)).map(([id,position]) => {
  const definition = definitions[position.definition];
  if (!definition) throw new Error('Missing skill definition: '+position.definition);
  const texture = definition.icon?.data?.texture;
  if (definition.icon?.type !== 'texture' || !texture) throw new Error('Unsupported skill icon: '+id);
  const [namespace,resource] = texture.split(':');
  const original = path.join(assets,namespace,resource);
  const icon = 'media/skills/'+path.basename(resource);
  if (!fs.existsSync(original)) throw new Error('Missing skill icon: '+texture);
  fs.mkdirSync(path.join(portal,'public/media/skills'),{recursive:true});
  fs.copyFileSync(original,path.join(portal,'public',icon));
  return {id,title:definition.title,description:definition.description || '',branch:id.split('_')[0],
    x:position.x,y:position.y,root:position.root===true,cost:definition.cost ?? 1,
    requiredSpentPoints:definition.required_spent_points ?? 0,
    requiredSkills:definition.required_skills ?? 1,requiredPoints:definition.required_points ?? 0,
    size:definition.size ?? 1,icon,rewards:definition.rewards || [],passives:passives[id] || {}};
});
const edges = connections.normal?.bidirectional || [];
if (Object.keys(connections).some(k=>k!=='normal') || Object.keys(connections.normal).some(k=>k!=='bidirectional')) {
  throw new Error('The importer needs support for the additional connection rules.');
}
const ids = new Set(nodes.map(node=>node.id));
for (const [a,b] of edges) if (!ids.has(a)||!ids.has(b)) throw new Error('Dangling skill connection: '+a+' / '+b);
// The packed share link addresses this ordered ID list; cosmetic edits keep links valid.
const fingerprint = crypto.createHash('sha256').update(JSON.stringify(nodes.map(node=>node.id))).digest('hex').slice(0,12);
const data = {category:{id:'puffish_skills:character',title:category.title,
  pointCap:category.spent_points_limit,startingPoints:category.starting_points ?? 0,
  exclusiveRoot:category.exclusive_root===true},
  fingerprint,branches:Object.entries(branchTitles).map(([id,title])=>({id,title})),nodes,edges};
fs.mkdirSync(path.join(portal,'src/data'),{recursive:true});
fs.writeFileSync(path.join(portal,'src/data/skills.json'),JSON.stringify(data)+'\n');
console.log('Skill planner: '+nodes.length+' skills, '+edges.length+' connections.');
