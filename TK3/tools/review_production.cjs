// Inspect script declarations. This does not run Minecraft or its recipe codecs.
// KubeJS 2101: remove/replaceInput target originalRecipes; addedRecipes is separate.
const fs = require('fs'), path = require('path'), vm = require('vm'), crypto = require('crypto');
const pack = path.resolve(__dirname, '..');
const source = path.join(pack, 'docs/production-review/source');
const metadata = JSON.parse(fs.readFileSync(path.join(pack, 'docs/production-review/authoring-metadata.json')));
const prior = new Map(metadata.recipes.map(r => [r.id, r]));
const outputTiers = new Map();
for (const r of metadata.recipes) { const output = r.output.replace(/^\d+x /, ''); outputTiers.set(output, Math.min(r.tier, outputTiers.get(output) || 10)); }
const extraTiers = {
  'kubejs:tk3_makeshift_rotation_mechanism': 1, 'kubejs:tk3_andesite_alloy_sheet': 1,
  'kubejs:tk3_empty_tube': 2, 'create:peculiar_bell': 3, 'create:haunted_bell': 3,
  'kubejs:tk3_boot_medium': 4, 'kubejs:tk3_rough_sand': 4, 'kubejs:tk3_siliceous_compound': 4,
  'kubejs:tk3_spectral_ruby': 5, 'kubejs:tk3_dye_singularity': 5, 'kubejs:tk3_chromatic_pigment': 5,
  'kubejs:tk3_chromatic_compound': 5, 'kubejs:tk3_amethyst_bulb': 5,
  'kubejs:tk3_refined_quartz': 10, 'kubejs:tk3_tech_tube': 10,
  'kubejs:tk3_incomplete_matter_construct': 10, 'kubejs:tk3_circuit_scrap': 10, 'kubejs:tk3_radiant_obsidian': 10
};
const declared = [], intended = new Map(), removals = [], migrations = [], files = [];
let current = '';
const clean = x => JSON.parse(JSON.stringify(x, (k, v) => k === '_recipe' ? undefined : v));
const oid = x => typeof x === 'string' ? x.replace(/^\d+x /, '').replace(/^#/, '') : (x?.id || x?.item || x?.fluid);
const itemText = x => typeof x === 'string' ? x : x?.fluid ? x : (x?.count > 1 ? x.count + 'x ' : '') + (x?.id || x?.item);
function normalize(r) {
  const known = prior.get(r.id) || {};
  const row = { ...known, id: r.id, source_script: r.file, declaration_order: r.order };
  const a = r.args;
  for (const key of ['tool', 'steps', 'keep_steps', 'transition', 'pattern', 'keep', 'heated', 'json', 'chemical_inputs', 'serializer', 'fluid_output', 'base', 'fluid', 'source', 'results', 'additional_results']) delete row[key];
  row.system ||= 'production';
  row.tier ||= Number(r.id.match(/tier_(\d+)/)?.[1]) || Number(Object.keys(metadata.mechanisms).find(t => metadata.mechanisms[t] === oid(a[0]))) || 5;
  if (r.ns === 'minecraft' && r.kind === 'custom') {
    const json = clean(a[0]); row.json = json; row.serializer = json.type;
    row.kind = known.kind || 'native';
    const outputs = json.results || (json.result ? [json.result] : json.output ? [json.output] : []);
    row.output = outputs.length ? itemText(outputs[0]) : known.output;
    if (outputs[0]?.amount) row.fluid_output = { fluid: outputs[0].id, amount: outputs[0].amount };
    if (known.inputs) row.inputs = clean(known.inputs);
    else row.inputs = (json.ingredients || (json.item_input ? [json.item_input] : [])).map(x => x.tag ? '#' + x.tag : itemText(x));
    if (json.chemical_input) row.chemical_inputs = { chemical_input: json.chemical_input };
    if (outputs.length > 1) row.additional_results = outputs.slice(1);
    if (outputs.length > 1 || outputs[0]?.chance !== undefined) row.results = outputs;
  } else if (r.kind === 'sequenced_assembly') {
    row.kind = 'sequence'; row.output = itemText(a[0][0]); row.transition = r.transition;
    row.loops = r.loops || 1;
    row.operations = a[2].map(step => {
      const s = step._recipe;
      return { kind: s.kind, input: clean(s.args[1]?.[1] || null), retained: !!s.keep };
    });
    row.inputs = [clean(a[1]), ...row.operations.filter(s => s.input).map(s => s.input)];
    row.steps = row.operations.map(s => s.kind);
    row.keep_steps = row.operations.map((s, i) => s.retained ? i : -1).filter(i => i >= 0);
  } else if (['shaped', 'mechanical_crafting'].includes(r.kind)) {
    row.kind = r.kind; row.output = itemText(a[0]); row.pattern = clean(a[1]); row.inputs = clean(a[2]);
  } else if (r.kind === 'enchanting_apparatus') {
    row.kind = 'apparatus'; row.output = itemText(a[2]); row.inputs = [clean(a[1]), ...clean(a[0])]; row.source = a[3] || 0;
  } else if (r.kind === 'imbuement') {
    row.kind = 'imbuement'; row.output = itemText(a[1]); row.inputs = [clean(a[0])]; row.source = a[2]; row.pedestals = clean(a[3] || []);
  } else if (r.ns === 'ae2') {
    row.kind = r.kind === 'charger' ? 'ae_charger' : known.kind; row.inputs = a.slice(0, -1).map(clean); row.output = itemText(a.at(-1));
  } else if (r.kind === 'alchemist_cauldron_brew' || r.kind === 'alchemist_cauldron_empty') {
    Object.assign(row, known);
  } else {
    row.kind = r.ns === 'mekanism' && r.kind === 'enriching' ? 'mek_enriching' : r.kind;
    const output = Array.isArray(a[0]) ? a[0][0] : a[0];
    row.output = typeof output === 'object' && output.fluid ? output.fluid : itemText(output);
    if (output?.fluid) row.fluid_output = clean(output);
    row.inputs = Array.isArray(a[1]) ? clean(a[1]) : [clean(a[1])];
    if (Array.isArray(a[0]) && a[0].length > 1) row.additional_results = clean(a[0].slice(1));
    if (Array.isArray(a[0]) && (a[0].length > 1 || a[0][0]?.chance !== undefined)) row.results = clean(a[0]);
    if (r.keep) row.keep = true;
  }
  if (r.heat) row.heated = r.heat;
  if (r.processingTime) row.processing_time = r.processingTime;
  if (!row.output || !row.kind || !row.inputs) throw Error('Unnormalized recipe: ' + r.id);
  row.tier = Number(r.id.match(/tier_(\d+)/)?.[1]) || Number(Object.keys(metadata.mechanisms).find(t => metadata.mechanisms[t] === oid(row.output))) || extraTiers[oid(row.output)] || outputTiers.get(oid(row.output)) || row.tier;
  if (r.kind === 'enchanting_apparatus' && row.id.includes('incomplete_arcane_mechanism')) row.tier = 6;
  if (r.id.startsWith('kubejs:tk3/chromatic/') || r.id.startsWith('kubejs:tk3/materials/')) row.tier = 5;
  if (r.id.includes('/ae2/')) row.tier = 4;
  if (r.id.includes('/growth/certus_')) row.tier = 4;
  if (r.id.includes('/growth/amethyst_')) row.tier = 5;
  if (r.id.startsWith('kubejs:tk3/arcane/')) row.tier = 6;
  if (r.id.startsWith('kubejs:tk3/chemical/')) row.tier = 7;
  if (r.id.startsWith('kubejs:tk3/containment/')) row.tier = 8;
  if (r.id.startsWith('kubejs:tk3/singularity/')) row.tier = 9;
  if (r.id.startsWith('kubejs:tk3/sovereign/')) row.tier = 10;
  if (r.id.startsWith('kubejs:tk3/mekanism/')) row.tier = 5;
  return row;
}
function matches(r, f) {
  let row;
  try { row = r._normalized || (r._normalized = normalize(r)); } catch { return false; }
  const inputs = Array.isArray(row.inputs) ? row.inputs : Object.values(row.inputs);
  const type = row.serializer || (r.ns + ':' + r.kind);
  return (!f.id || r.id === f.id) && (!f.output || oid(row.output) === oid(f.output)) && (!f.type || type === f.type) && (!f.input || inputs.some(x => oid(x) === oid(f.input)));
}
function builder(ns, kind, args) {
  const r = { ns, kind, args, file: current, removed: false, order: declared.length, id: null,
    getId() { return this.id; }, remove() { this.removed = true; } };
  const b = { _recipe: r, id(id) { r.id = id; r.order = declared.length; declared.push(r); intended.set(id, r); return b; },
    heated() { r.heat = 'heated'; return b; }, superheated() { r.heat = 'superheated'; return b; },
    keepHeldItem() { r.keep = true; return b; }, transitionalItem(x) { r.transition = x; return b; },
    loops(n) { r.loops = n; return b; }, processingTime(n) { r.processingTime = n; return b; } };
  return b;
}
const apis = {
  create: ['mixing','compacting','deploying','milling','crushing','cutting','splashing','haunting','pressing','sequenced_assembly','mechanical_crafting','filling','sandpaper_polishing'],
  mekanism: ['enriching','smelting','crushing'], ars_nouveau: ['enchanting_apparatus','imbuement'],
  irons_spellbooks: ['alchemist_cauldron_brew','alchemist_cauldron_empty']
};
const event = { recipes: Object.fromEntries(Object.entries(apis).map(([ns, kinds]) => [ns, Object.fromEntries(kinds.map(k => [k, (...a) => builder(ns, k, a)]))])),
  addedRecipes: declared, findRecipeIds() { return []; },
  remove(f) {
    removals.push({ file: current, filter: clean(f) });
    // Record intended replacement separately; added declarations remain in runtime model.
    for (const [id, r] of intended) if (matches(r, f)) intended.delete(id);
  },
  replaceInput(filter, from, to) {
    migrations.push({ file: current, from, to });
    // Never mutate declaration evidence. Applied only to the documentation view below.
  }
};
for (const k of ['shaped','shapeless','stonecutting','custom','smelting','blasting']) event[k] = (...a) => builder('minecraft', k, a);
const sandbox = { console, ServerEvents: { recipes(f) { f(event); } },
  Item: { of(id) { const obj = { id, withChance(chance) { return { id, chance }; } }; return obj; } },
  Fluid: { of(fluid, amount) { return { fluid, amount }; } },
  Java: { loadClass(name) {
    if (name.endsWith('RecipeFilter')) return { wrap(f) { return { test(ctx) { return matches(ctx.recipe, f); } }; } };
    if (name.endsWith('RecipeMatchContext$Impl')) return class { constructor(recipe) { this.recipe = recipe; } };
    throw Error('Unexpected Java binding: ' + name);
  } },
  AE2Recipes: {
    charger(e, input, output, id) { return builder('ae2','charger',[input,output]).id(id); },
    inscriberPress(e, input, press, output, id) { return builder('ae2','inscriber',[input,press,output]).id(id); },
    inscriberWithBottom(e, mode, ...args) { const id = args.pop(); return builder('ae2','inscriber',args).id(id); }
  }
};
vm.createContext(sandbox);
const scripts = fs.readdirSync(path.join(source, 'recipes')).filter(f => f.endsWith('.js')).map(file => {
  const text = fs.readFileSync(path.join(source, 'recipes', file), 'utf8');
  return { file, text, priority: Number(text.match(/^\/\/\s*priority:\s*(-?\d+)/m)?.[1] || 0) };
}).sort((a, b) => b.priority - a.priority || a.file.localeCompare(b.file));
for (const s of scripts) {
  current = 'recipes/' + s.file; files.push({ path: current, priority: s.priority, sha256: crypto.createHash('sha256').update(s.text).digest('hex') });
  vm.runInContext(s.text, sandbox, { filename: current, timeout: 30000 });
}
const surviving = declared.filter(r => !r.removed);
const groups = new Map();
for (const r of surviving) { if (!groups.has(r.id)) groups.set(r.id, []); groups.get(r.id).push(r); }
const duplicates = [...groups].filter(([, rows]) => rows.length > 1).map(([id, rows]) => ({ id, declarations: rows.map(normalize) }));
let catalogue = [...intended.values()].filter(r => !r.removed).map(normalize);
// These mappings express intended authoring, not a claim that replaceInput touches additions.
function replace(x) { if (typeof x === 'string') { const found = migrations.find(m => m.from === x); return found ? found.to : x; } if (Array.isArray(x)) return x.map(replace); if (x && typeof x === 'object') return Object.fromEntries(Object.entries(x).map(([k, v]) => [k, replace(v)])); return x; }
catalogue = catalogue.map(replace).sort((a,b) => a.tier - b.tier || a.id.localeCompare(b.id));
const mechanismTiers = new Map(Object.entries(metadata.mechanisms).map(([tier, id]) => [id, Number(tier)]));
const forwardMechanismDependencies = [];
for (const row of catalogue) {
  const inputs = Array.isArray(row.inputs) ? row.inputs : Object.values(row.inputs);
  const required = inputs.map(oid).filter(id => (mechanismTiers.get(id) || 0) > row.tier);
  if (required.length) {
    row.required_mechanism_tier = Math.max(...required.map(id => mechanismTiers.get(id)));
    forwardMechanismDependencies.push({ recipe: row.id, output: row.output, authoring_tier: row.tier, required_mechanisms: [...new Set(required)], required_mechanism_tier: row.required_mechanism_tier });
  }
}
const known = new Set(JSON.parse(fs.readFileSync(path.join(pack, 'tools/registry_items.json'))));
for (const file of ['tk3_components.js','tk3_machine_frames.js']) {
  const text = fs.readFileSync(path.join(source, file), 'utf8');
  for (const match of text.matchAll(/event\.create\(["']([a-z0-9_]+)["']/g)) known.add('kubejs:' + match[1]);
}
const unresolved = new Set();
for (const row of catalogue) {
  const refs = [...(row.fluid_output ? [] : [row.output]), ...(Array.isArray(row.inputs) ? row.inputs : Object.values(row.inputs))];
  for (const value of refs) if (typeof value === 'string' && !/^(\d+x )?#/.test(value) && !known.has(oid(value))) {
    if (!['minecraft:lava','minecraft:water','create_enchantment_industry:experience'].includes(oid(value))) unresolved.add(oid(value));
  }
}
const review = {
  package: metadata.package, package_sha256: metadata.package_sha256,
  scope: 'Script declarations and upstream source review; Minecraft not launched.',
  runtime_semantics: 'remove and replaceInput operate on originalRecipes; addedRecipes are separate. Duplicate custom IDs have no guaranteed last-script winner.',
  files, declarations: declared.length, surviving_declarations: surviving.length, distinct_surviving_ids: groups.size,
  duplicate_custom_ids: duplicates, intended_catalogue_count: catalogue.length,
  unresolved_top_level_item_references: [...unresolved].sort(), migrations,
  forward_mechanism_dependencies: forwardMechanismDependencies,
  intended_catalogue: catalogue
};
// Follow all authored ingredient alternatives and the actual processing stations.
// Native leaves are recorded as boundaries, never silently certified renewable.
const producers = new Map();
for (const row of catalogue) {
  if (!producers.has(oid(row.output))) producers.set(oid(row.output), []);
  producers.get(oid(row.output)).push(row);
}
const stations = {
  mixing: ['create:mechanical_mixer','create:basin'], compacting: ['create:mechanical_press','create:basin'],
  deploying: ['create:deployer'], pressing: ['create:mechanical_press'], cutting: ['create:mechanical_saw'],
  filling: ['create:spout'], milling: ['create:millstone'], crushing: ['create:crushing_wheel'],
  splashing: ['create:encased_fan'], haunting: ['create:encased_fan'],
  mechanical_crafting: ['create:mechanical_crafter'], apparatus: ['ars_nouveau:enchanting_apparatus'],
  imbuement: ['ars_nouveau:imbuement_chamber'], ae_charger: ['ae2:charger'],
  mek_enriching: ['mekanism:enrichment_chamber']
};
const nativeStations = {
  'mekanism:metallurgic_infusing': ['mekanism:metallurgic_infuser'],
  'mekanism:enriching': ['mekanism:enrichment_chamber'], 'mekanism:injecting': ['mekanism:chemical_injection_chamber'],
  'mekanism:nucleosynthesizing': ['mekanism:antiprotonic_nucleosynthesizer'],
  'mekanism:reaction': ['mekanism:pressurized_reaction_chamber'],
  'create_dragons_plus:ending': ['create:encased_fan','minecraft:dragon_head']
};
function dependencies(row) {
  const inputs = Array.isArray(row.inputs) ? row.inputs : Object.values(row.inputs);
  const deps = inputs.map(x => typeof x === 'string' && /^(\d+x )?#/.test(x) ? x.replace(/^\d+x /,'') : oid(x)).filter(Boolean);
  deps.push(...(row.pedestals || []).map(oid));
  deps.push(...(stations[row.kind] || nativeStations[row.serializer] || []));
  if (row.operations) for (const op of row.operations) deps.push(...(stations[op.kind] || []));
  if (row.heated) deps.push('create:blaze_burner');
  for (const x of Object.values(row.chemical_inputs || {})) deps.push(x.chemical || x.fluid || (x.tag ? '#' + x.tag : x.id));
  return [...new Set(deps.filter(Boolean))];
}
review.dependency_inventories = Object.entries(metadata.mechanisms).map(([tier, target]) => {
  const items = new Set(), recipes = new Set(), boundaries = new Set();
  function visit(item) {
    if (items.has(item)) return; items.add(item);
    const rows = (producers.get(item) || []).filter(r => r.tier <= Number(tier));
    if (!rows.length) { boundaries.add(item); return; }
    for (const row of rows) { recipes.add(row.id); for (const input of dependencies(row)) visit(input); }
  }
  visit(target);
  return { tier: Number(tier), target, authored_recipe_ids: [...recipes].sort(), resources_and_stations: [...items].sort(),
    boundaries: [...boundaries].sort(), boundary_rule: 'Each boundary needs native/world acquisition or an external producer; not certified by this script.' };
});
const generatorText = fs.readFileSync(path.join(source, 'tk3_stone_generators.js'), 'utf8');
const selectors = JSON.parse(generatorText.match(/const selectors\s*=\s*(\[[\s\S]*?\]);/)[1]);
const geology = selectors.map(s => {
  const old = metadata.geology.find(g => g.stone === s.stone);
  return { ...(old || { tier: 5, mill: '—', crush: 'Check native ore processing in JEI', role: 'Mekanism ore' }), ...s };
});
fs.writeFileSync(path.join(pack, 'docs/production-review/review.json'), JSON.stringify(review, null, 2) + '\n');
fs.writeFileSync(path.join(pack, 'docs/wiki_production_manifest.json'), JSON.stringify({
  review_status: 'Intended production reference; blockers listed in the renewability review.',
  package_sha256: metadata.package_sha256, recipes: catalogue, mechanisms: metadata.mechanisms, frames: metadata.frames,
  geology, wood: metadata.wood, custom_items: metadata.custom_items,
  chapter_titles: metadata.chapter_titles
}, null, 2) + '\n');
console.log(JSON.stringify({ declarations: review.declarations, surviving: review.surviving_declarations, duplicate_custom_ids: duplicates.length, intended_catalogue: catalogue.length, unresolved_items: review.unresolved_top_level_item_references }));
