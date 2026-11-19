import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';
import { createFactoryCatalog, planFactory } from '../src/lib/factory-plan.mjs';

const recipes = JSON.parse(readFileSync(new URL('../public/data/recipes.json', import.meta.url)));
const catalog = createFactoryCatalog(recipes);

test('a supplied intermediate stops its branch and a recipe choice changes the materials', () => {
  const target = 'kubejs:rotation_mechanism';
  const alloy = 'create:andesite_alloy';
  const stocked = planFactory(catalog, { target, amount: 3, supplied: [alloy] });
  assert.deepEqual(stocked.steps.map(step => step.id), [target]);
  const stock = stocked.materials.find(row => row.id === alloy);
  assert.equal(stock.amount, 6);
  assert.equal(stock.reason, 'supplied');

  const pressed = planFactory(catalog, {
    target: alloy,
    amount: 8,
    recipes: { [alloy]: 'tnk:chapter_02/mixing/andesite_alloy_from_andesite_and_clay' },
  });
  assert.equal(pressed.steps.at(-1).recipe.type, 'create:mixing');
  assert.equal(pressed.materials.find(row => row.id === 'minecraft:andesite').amount, 8);
  assert.equal(pressed.materials.find(row => row.id === 'minecraft:clay_ball').reason, 'chance');
});

test('sealed recipes stay out of the planner and a recipe loop becomes a supply', () => {
  assert.ok(catalog.products.every(product => product.recipes.every(recipe => recipe.chapter !== 10)));
  const plan = planFactory(catalog, { target: 'kubejs:sealed_mechanism', amount: 4 });
  assert.equal(plan.steps.at(-1).produced, 4);
  assert.ok(plan.materials.some(row => row.id === 'minecraft:glass' && row.reason === 'cycle'));
  assert.ok(plan.steps.every(step => step.id !== 'minecraft:glass'));
});

test('shared ingredients are made in one batch and reusable inputs are kept out of consumption', () => {
  const input = (id, count, consumed = true) => ({ id, count, consumed });
  const recipe = (output, count, ingredients) => ({ id: output + '_recipe', output, count, ingredients });
  const fixture = createFactoryCatalog([
    recipe('test:component', 4, [input('test:raw', 2), input('test:mold', 1, false)]),
    recipe('test:left', 1, [input('test:component', 1)]),
    recipe('test:right', 1, [input('test:component', 2)]),
    recipe('test:finished', 1, [input('test:left', 1), input('test:right', 1)]),
  ]);
  const plan = planFactory(fixture, { target: 'test:finished', amount: 1 });
  assert.equal(plan.steps[0].id, 'test:component');
  assert.equal(plan.steps[0].runs, 1);
  assert.equal(plan.steps[0].needed, 3);
  assert.deepEqual(plan.materials.map(row => [row.id, row.amount]), [['test:raw', 2]]);
  assert.deepEqual(plan.catalysts.map(row => [row.id, row.amount]), [['test:mold', 1]]);
  assert.deepEqual(plan.surplus.map(row => [row.id, row.amount]), [['test:component', 1]]);
});
