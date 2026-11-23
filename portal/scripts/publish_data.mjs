import { buildSearchDocuments } from '../src/lib/search-documents.js';
import { visibleChapters, visibleRecipes } from '../src/lib/handbook-visibility.js';
import { mkdir, readdir, copyFile, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';
const source = resolve('src/data');
const destination = resolve('public/data');
const publicTransforms = new Map([
  ['chapters.json', visibleChapters],
  ['recipes.json', visibleRecipes],
]);
await mkdir(source, { recursive: true });
await mkdir(destination, { recursive: true });
for (const name of await readdir(source)) {
  if (!name.endsWith('.json')) continue;
  const origin = resolve(source, name);
  const target = resolve(destination, name);
  const transform = publicTransforms.get(name);
  if (transform) {
    const records = JSON.parse(await readFile(origin, 'utf8'));
    await writeFile(target, JSON.stringify(transform(records)));
  } else {
    await copyFile(origin, target);
  }
}

const datasets = {};
for(const key of ['weapons','recipes','mods','bosses','skills','ponder','mechanics']) {
 try { datasets[key] = JSON.parse(await readFile(resolve(destination,key+'.json'),'utf8')); } catch { datasets[key] = ['skills','ponder','mechanics'].includes(key)?{}:[]; }
}
datasets.chapters=JSON.parse(await readFile(resolve(source,'chapter-questlines.json'),'utf8'));
try { datasets.families=JSON.parse(await readFile(resolve(source,'recipe-families.json'),'utf8')); } catch {datasets.families=[];}
try { datasets.eyes=JSON.parse(await readFile(resolve(source,'end-eyes.json'),'utf8')); } catch {datasets.eyes=[];}
try { datasets.productionRules=JSON.parse(await readFile(resolve(source,'production-rules.json'),'utf8')); } catch {datasets.productionRules=[];}
datasets.buildGuides = await Promise.all(
  (await readdir(resolve(source, 'early-builds'))).filter(name => name.endsWith('.json')).sort().map(async name => ({
    ...JSON.parse(await readFile(resolve(source, 'early-builds', name), 'utf8')),
    id: name.slice(0, -5),
  })),
);
await writeFile(resolve(destination,'search.json'),JSON.stringify(buildSearchDocuments(datasets,'/TownsAndKingdoms/')));
