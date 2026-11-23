const visibleChapterCount = 9;
const sealedItems = new Set([
  'kubejs:creation_core',
  'kubejs:creation_mechanism',
  'kubejs:incomplete_creation_core',
  'kubejs:incomplete_unstable_creation_core',
  'kubejs:tk3_creation_machine',
  'kubejs:unstable_creation_core',
  'kubejs:unstable_creation_gem',
]);

function containsSealedItem(value) {
  return typeof value === 'object' && value !== null
    ? Object.values(value).some(containsSealedItem)
    : sealedItems.has(value);
}

export function visibleChapters(chapters) {
  return chapters.filter(chapter => chapter.number <= visibleChapterCount);
}

export function visibleRecipes(recipes) {
  return recipes.filter(recipe => {
    if (recipe.chapter != null) return recipe.chapter <= visibleChapterCount;
    return !containsSealedItem([recipe.output, recipe.outputs, recipe.ingredients, recipe.gates]);
  });
}
