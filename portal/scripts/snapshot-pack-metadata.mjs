import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';

const readPack = path => JSON.parse(readFileSync(new URL(`../../TK3/${path}`, import.meta.url), 'utf8'));
const writeSnapshot = (path, data) => writeFileSync(
  new URL(`../${path}`, import.meta.url),
  JSON.stringify(data) + '\n',
);

const manifest = readPack('manifest.json');
const loader = manifest.minecraft.modLoaders.find(entry => entry.primary) ?? manifest.minecraft.modLoaders[0];
const neoForge = loader?.id.match(/^neoforge-(.+)$/);
if (!neoForge) throw new Error('The handbook server guide requires a NeoForge build.');

writeSnapshot('src/data/pack-version.json', {
  version: manifest.version,
  javaVersion: manifest.minecraft.javaVersion,
  neoForgeVersion: neoForge[1],
});

mkdirSync(new URL('../tests/fixtures/', import.meta.url), { recursive: true });
const ponder = readPack('kubejs/pack_data/ponder.json');
writeSnapshot('tests/fixtures/ponder-staging.json', ponder.scenes.map(scene => ({
  id: scene.id,
  yaw: scene.yaw ?? 145,
  stagedItems: [...(scene.crafterItems ?? []), ...(scene.depotItems ?? [])]
    .map(({ pos, item }) => ({ pos, item })),
})));

const compatibility = readPack('kubejs/pack_data/compat_recipes.json');
writeSnapshot('tests/fixtures/let-it-walk-recipes.json', compatibility.plans
  .flatMap(plan => plan.recipes)
  .filter(row => row.recipe_id.includes('/let_it_walk/'))
  .map(({ recipe_id, recipe }) => ({ recipe_id, recipe })));
