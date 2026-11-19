import { createFactoryCatalog, MAX_FACTORY_AMOUNT, planFactory } from '../lib/factory-plan.mjs';

const site = document.querySelector('[data-factory]');
const formatNumber = new Intl.NumberFormat('en-US', { maximumFractionDigits: 3 });
const formatPercent = new Intl.NumberFormat('en-US', { style: 'percent', maximumFractionDigits: 2 });

function element(tag, className, content) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content != null) node.textContent = content;
  return node;
}

function dataFetch(base, name) {
  return fetch(base + 'data/' + name + '.json').then(response => {
    if (!response.ok) throw new Error('Unable to load ' + name);
    return response.json();
  });
}

function searchable(text) {
  return String(text || '').toLowerCase().replace(/[^\p{L}\p{N}]+/gu, ' ').trim();
}

function itemName(material) {
  const name = material.name || material.id || material.key;
  const variant = material.componentLabel;
  return variant && !name.includes(variant) ? name + ' (' + variant + ')' : name;
}

function amountText(material, amount = material.amount) {
  const value = formatNumber.format(amount);
  return material.kind === 'fluid' || material.kind === 'fluid_tag' ? value + ' mB' : value;
}

function iconFor(material, textures, base) {
  const key = material.kind === 'fluid' ? 'fluid:' + material.id : material.id;
  const art = textures[key] ?? textures[material.id];
  if (typeof art === 'string') {
    const image = element('img', 'factory-art');
    image.alt = '';
    image.src = base + art;
    image.decoding = 'async';
    return image;
  }
  if (Array.isArray(art)) {
    const [atlas, column, row] = art;
    const sprite = element('span', 'factory-art');
    sprite.setAttribute('aria-hidden', 'true');
    sprite.style.backgroundImage = 'url("' + base + 'media/recipe-textures/items-' + atlas + '.webp")';
    sprite.style.backgroundPosition = column * 100 / 15 + '% ' + row * 100 / 15 + '%';
    return sprite;
  }
  return null;
}

function createPicker(root, choices, sprite, onSelection = () => {}) {
  const field = root.querySelector('[data-picker-input]');
  const options = root.querySelector('[data-picker-options]');
  const records = choices.map(material => ({
    material,
    name: searchable(itemName(material)),
    search: searchable(itemName(material) + ' ' + material.key + ' ' + material.id),
  }));
  let chosen = null;
  let results = [];
  let active = -1;

  function hide() {
    options.hidden = true;
    field.setAttribute('aria-expanded', 'false');
    field.removeAttribute('aria-activedescendant');
    active = -1;
  }

  function choose(material, notify) {
    chosen = material;
    field.value = material ? itemName(material) : '';
    field.setCustomValidity('');
    hide();
    if (notify) onSelection(material);
  }

  function show() {
    const term = searchable(field.value);
    const tokens = term.split(' ').filter(Boolean);
    const matched = records.filter(record => tokens.every(token => record.search.includes(token)));
    const exact = matched.filter(record => record.name === term);
    const prefix = matched.filter(record => record.name !== term && record.name.startsWith(term));
    const other = matched.filter(record => !record.name.startsWith(term));
    results = [...exact, ...prefix, ...other].slice(0, 9);
    const rows = results.map(({ material }, index) => {
      const option = element('li');
      option.id = options.id + '-' + index;
      option.setAttribute('role', 'option');
      option.setAttribute('aria-selected', 'false');
      const icon = sprite(material);
      const text = element('span', '', itemName(material));
      text.append(element('small', '', material.kind === 'fluid' ? material.id + ' · Fluid' : material.id || material.key));
      if (icon) option.append(icon);
      option.append(text);
      option.addEventListener('pointerdown', event => event.preventDefault());
      option.addEventListener('click', () => choose(material, true));
      return option;
    });
    if (!rows.length) rows.push(element('li', 'factory-no-match', 'No items match this search.'));
    options.replaceChildren(...rows);
    options.hidden = false;
    field.setAttribute('aria-expanded', 'true');
    field.removeAttribute('aria-activedescendant');
    active = -1;
  }

  field.addEventListener('input', () => {
    field.setCustomValidity('');
    if (chosen && itemName(chosen) !== field.value) chosen = null;
    show();
  });
  field.addEventListener('focus', () => {
    if (chosen) field.select();
    show();
  });
  field.addEventListener('blur', hide);
  field.addEventListener('keydown', event => {
    if (event.key === 'Escape' && !options.hidden) {
      event.preventDefault();
      hide();
    } else if (event.key === 'Enter' && !options.hidden && active >= 0) {
      event.preventDefault();
      choose(results[active].material, true);
    } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (options.hidden) show();
      if (!results.length) return;
      const next = event.key === 'ArrowDown' ? active + 1 : active < 0 ? results.length - 1 : active - 1;
      active = Math.max(0, Math.min(results.length - 1, next));
      for (let index = 0; index < results.length; index++) {
        options.children[index].setAttribute('aria-selected', String(index === active));
      }
      const option = options.children[active];
      field.setAttribute('aria-activedescendant', option.id);
      option.scrollIntoView?.({ block: 'nearest' });
    }
  });
  field.disabled = false;

  return {
    field,
    choose,
    read() {
      if (chosen && field.value === itemName(chosen)) return chosen;
      const text = field.value.trim();
      const exactKey = records.find(record => record.material.key === text);
      if (exactKey) return exactKey.material;
      const label = searchable(text);
      const exactMatches = records.filter(record => record.name === label || record.material.id === text);
      return exactMatches.length === 1 ? exactMatches[0].material : null;
    },
  };
}

function readPairs(query, name) {
  const result = Object.create(null);
  for (const value of query.getAll(name).slice(0, 100)) {
    const [left, right] = value.split('|', 2);
    if (left && right && left.length < 500 && right.length < 400) result[left] = right;
  }
  return result;
}

function safeAmount(value) {
  const amount = Number(value);
  return Number.isInteger(amount) && amount >= 1 && amount <= MAX_FACTORY_AMOUNT ? amount : 1;
}

function updateShare(state, plan) {
  const url = new URL(location.href);
  url.searchParams.set('item', state.target);
  if (state.amount === 1) url.searchParams.delete('amount');
  else url.searchParams.set('amount', state.amount);
  for (const name of ['from', 'recipe', 'ingredient']) url.searchParams.delete(name);
  for (const key of state.supplied) url.searchParams.append('from', key);
  for (const { key, recipe } of plan.choices) {
    if (state.recipes[key] === recipe.id) url.searchParams.append('recipe', key + '|' + recipe.id);
  }
  for (const step of plan.steps) {
    for (const input of step.inputs) {
      if (input.choiceKey && state.ingredients[input.choiceKey] === input.key) {
        url.searchParams.append('ingredient', input.choiceKey + '|' + input.key);
      }
    }
  }
  url.hash = '';
  return url;
}

const reasonText = new Map([
  ['supplied', 'Marked as supplied'],
  ['source', 'Gather or find a recipe in JEI'],
  ['choice', 'Choose a matching ingredient in the production step'],
  ['match', 'Find an ingredient that meets the recipe conditions'],
  ['chance', 'Only chance-based recipes in the handbook'],
  ['cycle', 'Supply this input to break a recipe loop'],
  ['limit', 'Supply this input to shorten the plan'],
]);

function displayReason(row) {
  return typeof row.reason === 'string' ? reasonText.get(row.reason) || '' : '';
}

function resourceLine(material, sprite, note = '', anchor = '') {
  const li = element('li', 'factory-resource');
  const line = element('div', 'factory-item');
  const art = sprite(material);
  if (art) line.append(art);
  const name = element(anchor ? 'a' : 'span', 'factory-item-name', itemName(material));
  if (anchor) {
    name.href = '#' + anchor;
    name.title = 'Go to the step that makes ' + itemName(material);
  }
  line.append(name, element('span', 'factory-quantity', amountText(material)));
  li.append(line);
  if (note) li.append(element('small', 'factory-item-note', note));
  return li;
}

function selectField(label, entries, selected, onChange) {
  const field = element('select');
  field.setAttribute('aria-label', label);
  for (const [value, text] of entries) field.add(new Option(text, value));
  field.value = selected;
  field.addEventListener('change', () => onChange(field.value));
  return field;
}

function operationLabel(recipe, source) {
  const chapter = recipe.chapter ? ' · Chapter ' + recipe.chapter : '';
  const ingredients = source?.ingredients?.slice(0, 3).map(input => input.name).filter(Boolean) || [];
  const suffix = ingredients.length ? ' · ' + ingredients.join(', ') : '';
  const batching = recipe.yield > 1 ? ' · yields ' + formatNumber.format(recipe.yield) : '';
  return recipe.processName + chapter + batching + suffix;
}

const operationStations = {
  'alchemicallaser:laser_processing': 'Alchemical laser',
  'create:compacting': 'Mechanical Press and Basin',
  'create:crushing': 'Crushing Wheels',
  'create:cutting': 'Mechanical Saw',
  'create:deploying': 'Deployer',
  'create:mechanical_crafting': 'Mechanical Crafters',
  'create:milling': 'Millstone',
  'create:mixing': 'Mechanical Mixer and Basin',
  'create:pressing': 'Mechanical Press',
  'minecraft:crafting_shaped': 'Crafting Table',
  'minecraft:crafting_shapeless': 'Crafting Table',
  'minecraft:smelting': 'Furnace',
  'minecraft:blasting': 'Blast Furnace',
  'minecraft:smoking': 'Smoker',
  'minecraft:stonecutting': 'Stonecutter',
};

function namedType(type) {
  return type.split(':').at(-1).replaceAll('_', ' ').replace(/\b\w/g, char => char.toUpperCase());
}

function stepOperations(step, source) {
  const sequence = source?.recipe?.sequence;
  if (Array.isArray(sequence) && sequence.length) {
    return sequence.map(action => ({
      name: operationStations[action.type] || namedType(action.type),
      runs: step.runs * (step.recipe.loops || 1),
    }));
  }
  return [{ name: operationStations[step.recipe.type] || step.recipe.processName, runs: step.runs }];
}

function factoryController(site, records, textures) {
  const base = site.dataset.base;
  const query = field => site.querySelector(field);
  const sprite = material => iconFor(material, textures, base);
  const catalog = createFactoryCatalog(records);
  const recipesById = new Map(records.map(recipe => [recipe.id, recipe]));
  const products = new Map(catalog.products.map(entry => [entry.key, entry]));
  if (!products.size) throw new Error('The recipe index is empty');

  const params = new URLSearchParams(location.search);
  const initial = products.get(params.get('item'))
    || products.get('kubejs:sealed_mechanism')
    || catalog.products[0];
  const state = {
    target: initial.key,
    amount: safeAmount(params.get('amount')),
    supplied: new Set(params.getAll('from').slice(0, 50).filter(key => catalog.byKey.has(key))),
    recipes: readPairs(params, 'recipe'),
    ingredients: readPairs(params, 'ingredient'),
  };
  const amount = query('#factory-amount');
  const targetForm = query('[data-target-form]');
  const stockForm = query('[data-stock-form]');
  const status = query('[data-factory-message]');
  const stock = query('[data-stock-list]');
  const copyStatus = query('[data-copy-status]');
  const selectors = new Map();
  const updateUnit = product => {
    query('[data-amount-label]').textContent = product?.kind === 'fluid' ? 'Quantity (mB)' : 'Quantity';
  };
  const targetPicker = createPicker(targetForm.querySelector('[data-picker]'), catalog.products, sprite, updateUnit);
  const stockPicker = createPicker(stockForm.querySelector('[data-picker]'), catalog.materials, sprite);
  targetPicker.choose(initial, true);
  amount.value = state.amount;
  amount.disabled = false;
  targetForm.querySelector('button').disabled = false;
  stockForm.querySelector('button').disabled = false;

  function rerenderChoice(kind, key, value) {
    if (value) state[kind][key] = value;
    else delete state[kind][key];
    render(false);
    selectors.get(key)?.focus({ preventScroll: true });
  }

  function renderStep(step, index, options, stepIds) {
    const row = element('li', 'factory-step');
    row.id = stepIds.get(step.key) || 'factory-step-' + index;
    const inputs = element('div', 'factory-side factory-inputs');
    inputs.append(element('span', 'factory-side-heading', 'Inputs'));
    const ingredients = element('ul', 'factory-resources');
    for (const input of step.inputs) {
      const note = input.consumed ? '' : 'Reusable';
      const anchor = input.consumed && !input.reason ? stepIds.get(input.key) : '';
      const inputRow = resourceLine(input, sprite, note, anchor);
      if (input.choiceKey && input.options?.length > 1) {
        const choices = selectField(
          'Ingredient choice for ' + itemName(step),
          [['', 'Choose an ingredient'], ...input.options.map(option => [option.key, itemName(option)])],
          input.options.some(option => option.key === input.key) ? input.key : '',
          key => rerenderChoice('ingredients', input.choiceKey, key)
        );
        choices.className = 'factory-selection';
        selectors.set(input.choiceKey, choices);
        inputRow.append(choices);
      }
      ingredients.append(inputRow);
    }
    if (step.inputs.length) inputs.append(ingredients);
    else inputs.append(element('p', '', 'No consumed ingredients'));

    const operation = element('div', 'factory-side factory-operation');
    operation.append(element('span', 'factory-side-heading', 'Process'));
    if (options.length > 1) {
      const field = selectField(
        'Recipe for ' + itemName(step),
        options.map(recipe => [recipe.id, operationLabel(recipe, recipesById.get(recipe.id))]),
        step.recipe.id,
        value => rerenderChoice('recipes', step.key, value)
      );
      selectors.set(step.key, field);
      operation.append(field);
    } else {
      operation.append(element('p', 'factory-recipe-name', step.recipe.processName));
    }
    const runs = formatNumber.format(step.runs) + (step.runs === 1 ? ' run' : ' runs');
    operation.append(element('p', 'factory-recipe-meta', runs + (step.recipe.chapter ? ' · Chapter ' + step.recipe.chapter : '')));
    const stations = stepOperations(step, recipesById.get(step.recipe.id));
    const stationNames = [...new Set(stations.map(station => station.name))].join(' · ');
    if (stationNames !== step.recipe.processName) operation.append(element('p', 'factory-recipe-meta', stationNames));
    if (step.recipe.heat && step.recipe.heat !== 'none') {
      operation.append(element('p', 'factory-recipe-meta', namedType(step.recipe.heat)));
    }
    const recipeLink = element('a', 'factory-recipe-link', 'Recipe details');
    recipeLink.href = base + 'recipes/#recipe=' + encodeURIComponent(step.recipe.id);
    operation.append(recipeLink);

    const output = element('div', 'factory-side factory-result');
    output.append(element('span', 'factory-side-heading', 'Output'));
    const results = element('ul', 'factory-resources');
    const surplus = step.produced - step.needed;
    results.append(resourceLine(
      { ...step, amount: step.produced }, sprite, surplus > 0 ? amountText(step, surplus) + ' extra' : ''
    ));
    output.append(results);
    if (step.byproducts?.length) {
      const extras = element('ul', 'factory-resources factory-byproducts');
      for (const item of step.byproducts) {
        const random = item.chance != null && item.chance < 1;
        const note = random ? formatPercent.format(item.chance) + ' per roll · ' + formatNumber.format(item.rolls) + ' rolls' : 'Byproduct';
        extras.append(resourceLine(random ? { ...item, amount: item.count } : item, sprite, note));
      }
      output.append(extras);
    }
    row.append(inputs, operation, output);
    return row;
  }

  function collection(list, section, rows, fallback) {
    const ul = query(list);
    ul.replaceChildren(...(rows.length || !fallback ? rows : [element('li', 'factory-resource', fallback)]));
    query(section).hidden = !rows.length && !fallback;
  }

  let shareUrl;
  function render(announce) {
    const plan = planFactory(catalog, state);
    const target = plan.target;
    selectors.clear();
    copyStatus.textContent = '';
    query('[data-factory-results]').hidden = false;
    query('[data-target-icon]').replaceChildren(...[sprite(target)].filter(Boolean));
    query('[data-plan-title]').textContent = itemName(target) + ' · ' + amountText(target, plan.amount);
    const stepCount = plan.steps.length;
    query('[data-plan-detail]').textContent = formatNumber.format(stepCount) + (stepCount === 1 ? ' production step' : ' production steps');
    status.hidden = true;
    if (announce) query('[data-plan-announcement]').textContent = 'Plan updated for ' + itemName(target) + '.';

    stock.hidden = !state.supplied.size;
    const suppliedRows = [...state.supplied].map(key => {
      const item = catalog.byKey.get(key);
      const li = element('li');
      const remove = element('button');
      remove.type = 'button';
      remove.setAttribute('aria-label', 'Remove ' + itemName(item));
      const art = sprite(item);
      if (art) remove.append(art);
      remove.append(element('span', '', itemName(item)), element('span', 'factory-remove', '×'));
      remove.addEventListener('click', () => {
        state.supplied.delete(key);
        render(true);
        stockPicker.field.focus();
      });
      li.append(remove);
      return li;
    });
    stock.replaceChildren(...suppliedRows);

    const choicesByOutput = new Map(plan.choices.map(choice => [choice.key, choice.options]));
    const stepIds = new Map(plan.steps.map((step, index) => [step.key, 'factory-step-' + (index + 1)]));
    const steps = plan.steps.map((step, index) => renderStep(step, index, choicesByOutput.get(step.key) || [], stepIds));
    query('[data-plan-steps]').replaceChildren(...(steps.length ? steps : [
      element('li', 'factory-flow-empty', 'This plan stops at the selected product. Check its listing under Supplies to gather.')
    ]));

    collection('[data-plan-materials]', '[data-materials-section]',
      plan.materials.map(row => resourceLine(row, sprite, displayReason(row))), 'No outside supplies listed.');
    collection('[data-plan-catalysts]', '[data-catalysts-section]',
      plan.catalysts.map(row => resourceLine(row, sprite)));
    collection('[data-plan-extras]', '[data-extras-section]',
      plan.surplus.map(row => resourceLine(row, sprite, 'Remaining after planned use')));
    collection('[data-plan-issues]', '[data-issues-section]',
      plan.issues.map(issue => element('li', '', (issue.name ? issue.name + ' — ' : '') + issue.message)));

    const runCounts = new Map();
    for (const step of plan.steps) {
      for (const { name, runs } of stepOperations(step, recipesById.get(step.recipe.id))) {
        runCounts.set(name, (runCounts.get(name) || 0) + runs);
      }
    }
    collection('[data-plan-processes]', '[data-processes-section]', [...runCounts].map(([name, runs]) => {
      const li = element('li', 'factory-resource');
      const line = element('div', 'factory-item');
      line.append(element('span', 'factory-item-name', name),
        element('span', 'factory-quantity', formatNumber.format(runs) + (runs === 1 ? ' run' : ' runs')));
      li.append(line);
      return li;
    }));

    shareUrl = updateShare(state, plan);
    const url = new URL(shareUrl);
    url.hash = location.hash;
    history.replaceState(history.state, '', url);
  }

  function requireMaterial(picker) {
    const selected = picker.read();
    if (!selected) {
      picker.field.setCustomValidity('Choose an item from the matching results.');
      picker.field.reportValidity();
    }
    return selected;
  }

  targetForm.addEventListener('submit', event => {
    event.preventDefault();
    const selected = requireMaterial(targetPicker);
    if (!selected) return;
    targetPicker.choose(selected, true);
    state.target = selected.key;
    state.amount = safeAmount(amount.value);
    render(true);
  });

  stockForm.addEventListener('submit', event => {
    event.preventDefault();
    const selected = requireMaterial(stockPicker);
    if (!selected) return;
    state.supplied.add(selected.key);
    stockPicker.choose(null);
    render(true);
  });

  query('[data-copy-plan]').addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(shareUrl.href);
      copyStatus.textContent = 'Plan link copied.';
    } catch {
      copyStatus.textContent = 'Copy the plan link from the address bar.';
    }
  });

  render(false);
}

if (site) {
  const base = site.dataset.base;
  Promise.all([dataFetch(base, 'recipes'), dataFetch(base, 'recipe-textures').catch(() => ({}))])
    .then(([recipes, textures]) => factoryController(site, recipes, textures))
    .catch(error => {
      console.error('Factory planner:', error);
      const message = site.querySelector('[data-factory-message]');
      message.hidden = false;
      message.textContent = 'The recipe index could not load. Refresh the page to try again.';
    });
}
