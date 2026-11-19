const numberFormat = new Intl.NumberFormat('en-US');

for (const calculator of document.querySelectorAll('[data-loot-calculator]')) {
  const costs = JSON.parse(calculator.dataset.lootCosts);
  const tier = calculator.querySelector('#loot-tier');
  const rarity = calculator.querySelector('#loot-rarity');
  const route = calculator.querySelector('#loot-route');
  const price = calculator.querySelector('[data-loot-price]');
  const unit = calculator.querySelector('[data-loot-unit]');

  function updatePrice() {
    const xp = costs[tier.value][rarity.value];
    const ratio = Number(route.selectedOptions[0].dataset.ratio);
    price.textContent = numberFormat.format(ratio ? Math.ceil(xp * ratio) : xp);
    unit.textContent = ratio ? 'mB of XP fluid' : `vanilla XP ${xp === 1 ? 'point' : 'points'}`;
  }

  for (const field of [tier, rarity, route]) {
    field.disabled = false;
    field.addEventListener('change', updatePrice);
  }
  updatePrice();
}
