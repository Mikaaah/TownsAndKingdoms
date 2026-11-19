export const MAX_FACTORY_AMOUNT = 1_000_000_000;

const MAX_STEPS = 200;
const MAX_DEPTH = 60;
const normalizeName = id => id.split(/[:/]/).at(-1).replaceAll('_', ' ');

function stable(value) {
  if (Array.isArray(value)) return value.map(stable);
  if (!value || typeof value !== 'object') return value;
  return Object.fromEntries(Object.entries(value).sort(([a], [b]) => a.localeCompare(b))
    .map(([key, child]) => [key, stable(child)]));
}

function materialOf(record) {
  const { id = '', kind = 'item', components, componentLabel, tag } = record;
  let key = (kind === 'fluid' ? 'fluid:' : '') + (tag || kind === 'tag' ? '#' : '') + id;
  const name = record.name || normalizeName(id);
  if (components && Object.keys(components).length) key += '@' + JSON.stringify(stable(components));
  if (kind === 'predicate') key = 'predicate:' + JSON.stringify(stable(record.predicate ?? name));
  if (kind === 'difference') {
    key = `difference:${materialOf(record.base).key}!${materialOf(record.subtracted).key}`;
  }
  return { key, id, name, kind, componentLabel: componentLabel || '', tag: Boolean(tag || kind === 'tag') };
}

function isGuaranteed(result) {
  return result.chance === undefined || result.chance >= 1;
}

function normalizedResults(recipe) {
  if (recipe.outputs?.length) return recipe.outputs.map(output => ({
    ...materialOf({
      ...output,
      componentLabel: output.componentLabel
        || (output.components && Object.keys(output.components).length ? normalizeName(recipe.id) : ''),
    }),
    count: output.amount ?? output.count ?? 1,
    chance: output.chance,
  }));
  if (!recipe.output) return [];
  return [{
    ...materialOf({
      id: recipe.output,
      name: recipe.name,
      kind: recipe.outputKind,
      components: recipe.outputComponents,
      componentLabel: recipe.outputComponentLabel,
    }),
    count: recipe.outputAmount ?? recipe.count ?? 1,
  }];
}

export function createFactoryCatalog(recipeData) {
  const byKey = new Map();
  const outputs = new Set();

  function register(material) {
    if (!byKey.has(material.key)) byKey.set(material.key, { ...material, recipes: [] });
    return byKey.get(material.key);
  }

  for (const recipe of recipeData) {
    // The handbook keeps the final chapter sealed.
    if (recipe.chapter >= 10) continue;
    const results = normalizedResults(recipe);
    const inputs = (recipe.ingredients ?? []).map((input, index) => {
      const { count = 1, consumed = true } = input;
      const descriptor = materialOf(input);
      if (input.kind !== 'alternatives') {
        register(descriptor);
        return { ...descriptor, count, consumed };
      }
      const options = input.options.map(option => {
        const material = materialOf(option);
        register(material);
        return { ...material, count: option.count ?? 1 };
      });
      const choiceKey = `${recipe.id}:${index}`;
      return { ...descriptor, key: 'choice:' + choiceKey, count, consumed, options, choiceKey };
    });

    const guaranteed = new Map();
    for (const result of results) {
      const material = register(result);
      outputs.add(result.key);
      if (isGuaranteed(result)) {
        guaranteed.set(material.key, (guaranteed.get(material.key) ?? 0) + result.count);
      } else {
        material.chanceOutput = true;
      }
    }
    // An assembly selects one weighted result. Multiple results cannot be planned
    // as guaranteed co-products, even if the individual weights are at least one.
    if (recipe.type === 'create:sequenced_assembly' && results.length > 1) {
      for (const result of results) register(result).chanceOutput = true;
      continue;
    }

    for (const [key, yieldCount] of guaranteed) {
      if (!Number.isSafeInteger(yieldCount) || yieldCount < 1) continue;
      const material = byKey.get(key);
      material.recipes.push({
        id: recipe.id,
        name: recipe.name,
        processName: recipe.processName,
        type: recipe.type,
        chapter: recipe.chapter,
        heat: recipe.recipe?.heat_requirement,
        loops: recipe.recipe?.loops,
        yield: yieldCount,
        primary: material.id === recipe.output && material.kind === (recipe.outputKind ?? 'item'),
        legacyConversion: recipe.id.includes('/legacy_material/'),
        inputs,
        byproducts: results.filter(result => result.key !== key || !isGuaranteed(result)),
      });
    }
  }
  const materials = [...byKey.values()].sort((a, b) => a.name.localeCompare(b.name) || a.key.localeCompare(b.key));
  const products = materials.filter(material => outputs.has(material.key));
  for (const material of materials) material.recipes.sort((a, b) =>
    Number(a.legacyConversion) - Number(b.legacyConversion) || Number(b.primary) - Number(a.primary)
      || (a.chapter ?? 0) - (b.chapter ?? 0) || a.id.localeCompare(b.id));
  return { byKey, materials, products };
}

function selectedInputs(recipe, selected, supplied) {
  return recipe.inputs.map(input => {
    if (!input.options) return input;
    const option = input.options.find(value => value.key === selected[input.choiceKey])
      ?? (selected[input.choiceKey] === undefined ? input.options.find(value => supplied.has(value.key)) : undefined);
    if (!option) return input;
    return { ...input, ...option, count: input.count * option.count };
  });
}

function routeDepths(candidates) {
  const depths = new Map();
  let remaining = [...candidates.keys()];
  for (let depth = 1; depth <= MAX_DEPTH && remaining.length; depth++) {
    const ready = remaining.filter(key => candidates.get(key).some(({ inputs }) =>
      inputs.every(input => !input.consumed || !candidates.has(input.key) || depths.has(input.key))));
    if (!ready.length) break;
    for (const key of ready) depths.set(key, depth);
    remaining = remaining.filter(key => !depths.has(key));
  }
  return depths;
}

function routeDepth(inputs, candidates, depths) {
  return 1 + Math.max(0, ...inputs.filter(input => input.consumed && candidates.has(input.key))
    .map(input => depths.get(input.key) ?? Infinity));
}

function pureCycles(candidates, depths) {
  const unresolved = new Map();
  for (const [key, recipes] of candidates) {
    if (depths.has(key)) continue;
    unresolved.set(key, new Set(recipes.flatMap(({ inputs }) => inputs
      .filter(input => input.consumed && candidates.has(input.key) && !depths.has(input.key))
      .map(input => input.key))));
  }
  const cycles = new Set();
  for (const start of unresolved.keys()) {
    const seen = new Set();
    const pending = [...unresolved.get(start)];
    for (const key of pending) {
      if (key === start) {
        cycles.add(start);
        break;
      }
      if (seen.has(key)) continue;
      seen.add(key);
      pending.push(...unresolved.get(key));
    }
  }
  return cycles;
}

function preferredRoute(options, candidates, depths, sources) {
  let best;
  let bestDepth = Infinity;
  let bestStock = -1;
  for (const option of options) {
    const depth = routeDepth(option.inputs, candidates, depths);
    const stock = option.inputs.filter(input => input.consumed && sources.has(input.key)).length;
    if (depth < bestDepth || depth === bestDepth && stock > bestStock) {
      best = option;
      bestDepth = depth;
      bestStock = stock;
    }
  }
  return best;
}

function materialRow({ key, id, name, kind, componentLabel, tag }) {
  return { key, id, name, kind, componentLabel, tag };
}

const issueText = {
  cycle: 'This route loops back to an item already needed. Supply it or change a recipe.',
  choice: 'Select an ingredient or supply one of the listed alternatives.',
  match: 'Supply a matching ingredient for this tag or recipe condition.',
  chance: 'The recipe catalog only lists chance-based output for this material.',
  limit: 'This branch reached the planning limit. Supply an intermediate item or split the plan.',
};

export function planFactory(catalog, { target, amount, supplied = [], recipes = {}, ingredients = {} }) {
  const output = catalog.byKey.get(target);
  const quantity = Number(amount);
  if (!output) throw new RangeError('Select a catalog item or fluid.');
  if (!Number.isSafeInteger(quantity) || quantity < 1 || quantity > MAX_FACTORY_AMOUNT) {
    throw new RangeError(`Enter a whole quantity between 1 and ${MAX_FACTORY_AMOUNT.toLocaleString('en-US')}.`);
  }
  const sources = new Set(supplied);
  const candidates = new Map();
  const pinnedRecipes = new Set();
  for (const product of catalog.products) {
    if (sources.has(product.key) || !product.recipes.length) continue;
    const pinned = product.recipes.find(recipe => recipe.id === recipes[product.key]);
    if (pinned) pinnedRecipes.add(product.key);
    candidates.set(product.key, (pinned ? [pinned] : product.recipes).map(recipe => ({
      recipe,
      inputs: selectedInputs(recipe, ingredients, sources),
    })));
  }
  let depths = routeDepths(candidates);
  const cycles = pureCycles(candidates, depths);
  // Stop at cyclic materials, preserving all upstream production that can use them as supplies.
  for (const key of cycles) {
    if (!pinnedRecipes.has(key)) candidates.delete(key);
  }
  if (cycles.size) depths = routeDepths(candidates);
  const visiting = new Set();
  const graph = new Map();
  const order = [];
  const issues = new Map();
  const requirements = new Map();
  const catalysts = new Map();

  function recordIssue(material, reason) {
    if (!issueText[reason]) return;
    const key = reason + ':' + material.key;
    issues.set(key, { key: material.key, name: material.name, reason, message: issueText[reason] });
  }

  function externalReason(material) {
    if (sources.has(material.key)) return 'supplied';
    if (cycles.has(material.key)) return 'cycle';
    if (material.options) return 'choice';
    if (material.tag || material.kind === 'predicate' || material.kind === 'difference') return 'match';
    return catalog.byKey.get(material.key)?.chanceOutput ? 'chance' : 'source';
  }

  function visit(key, depth) {
    if (visiting.has(key)) return 'cycle';
    if (graph.has(key)) return null;
    const options = candidates.get(key);
    if (!options) return externalReason(catalog.byKey.get(key));
    if (depth > MAX_DEPTH || graph.size >= MAX_STEPS) return 'limit';
    const viable = options.filter(({ inputs }) => !inputs.some(input => input.consumed &&
      (input.key === key || visiting.has(input.key))));
    const pool = viable.length ? viable : options;
    const selected = preferredRoute(pool, candidates, depths, sources);
    const step = { recipe: selected.recipe, inputs: [] };
    graph.set(key, step);
    visiting.add(key);
    for (const input of selected.inputs) {
      const reason = !input.consumed ? null
        : candidates.has(input.key) ? visit(input.key, depth + 1) : externalReason(input);
      step.inputs.push({ ...input, reason });
    }
    visiting.delete(key);
    order.push(key);
    return null;
  }

  function require(material, count, reason) {
    const key = reason + ':' + material.key;
    const row = requirements.get(key) ?? {
      ...materialRow(material), options: material.options, reason, amount: 0,
    };
    row.amount += count;
    requirements.set(key, row);
    recordIssue(material, reason);
  }

  const rootReason = visit(target, 0);
  if (rootReason) require(output, quantity, rootReason);
  const demand = new Map([[target, quantity]]);
  const steps = [];
  const surplus = [];
  for (const key of order.reverse()) {
    const { recipe, inputs } = graph.get(key);
    const material = catalog.byKey.get(key);
    const needed = demand.get(key) ?? 0;
    if (!needed) continue;
    const runs = Math.ceil(needed / recipe.yield);
    const produced = runs * recipe.yield;
    if (!Number.isSafeInteger(produced) || inputs.some(input => !Number.isSafeInteger(input.count * runs))) {
      require(material, needed, 'limit');
      continue;
    }

    const totalInputs = inputs.map(input => {
      const amount = input.count * (input.consumed ? runs : 1);
      if (!input.consumed) {
        const current = catalysts.get(input.key);
        if (!current || current.amount < amount) catalysts.set(input.key, { ...materialRow(input), amount });
      } else if (input.reason) {
        require(input, amount, input.reason);
      } else {
        demand.set(input.key, (demand.get(input.key) ?? 0) + amount);
      }
      return { ...input, amount };
    });
    steps.push({
      ...materialRow(material), recipe, runs, needed, produced, inputs: totalInputs,
      byproducts: recipe.byproducts.map(result => ({ ...result, amount: result.count * runs, rolls: runs })),
    });
    if (produced > needed) surplus.push({ ...materialRow(material), amount: produced - needed });
  }
  const choices = steps.map(step => ({
    key: step.key, recipe: step.recipe, options: catalog.byKey.get(step.key).recipes,
  }));
  return {
    target: materialRow(output),
    amount: quantity,
    steps: steps.reverse(),
    materials: [...requirements.values()].sort((a, b) => a.name.localeCompare(b.name)),
    catalysts: [...catalysts.values()].sort((a, b) => a.name.localeCompare(b.name)),
    choices,
    issues: [...issues.values()],
    surplus,
  };
}
