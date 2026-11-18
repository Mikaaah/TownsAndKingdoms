import { buildSearchDocuments } from '../src/lib/search-documents.js';
import { mkdir, readdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const source = resolve('src/data');
const destination = resolve('public/data');
await mkdir(source, { recursive: true });
await mkdir(destination, { recursive: true });
for (const name of await readdir(source)) {
  if (name.endsWith('.json')) await copyFile(resolve(source, name), resolve(destination, name));
}

const datasets = {};
for(const key of ['weapons','recipes','mods','chapters','bosses','skills','ponder','mechanics']) {
 try { datasets[key] = JSON.parse(await readFile(resolve(source,key+'.json'),'utf8')); } catch { datasets[key] = ['skills','ponder','mechanics'].includes(key)?{}:[]; }
}
try { datasets.families=JSON.parse(await readFile(resolve(source,'recipe-families.json'),'utf8')); } catch {datasets.families=[];}
try { datasets.eyes=JSON.parse(await readFile(resolve(source,'end-eyes.json'),'utf8')); } catch {datasets.eyes=[];}
try { datasets.productionRules=JSON.parse(await readFile(resolve(source,'production-rules.json'),'utf8')); } catch {datasets.productionRules=[];}
await writeFile(resolve(destination,'search.json'),JSON.stringify(buildSearchDocuments(datasets,'/TownsAndKingdoms/')));
