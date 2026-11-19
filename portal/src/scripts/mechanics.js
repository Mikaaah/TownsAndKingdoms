import { pointsForLevel } from './skill-planner-core.mjs';

const numberFormat = new Intl.NumberFormat('en-US');

for (const calculator of document.querySelectorAll('[data-level-calculator]')) {
  const control = calculator.querySelector('[data-level-control]');
  const selected = calculator.querySelector('[data-level-selected]');
  const points = calculator.querySelector('[data-level-points]');
  const total = calculator.querySelector('[data-level-total]');
  const next = calculator.querySelector('[data-level-next]');
  const maxLevel = Number(control.max);
  const { levelBase, levelFactor, levelExponent } = calculator.dataset;
  const costs = [0];
  const totals = [0, 0];

  for (let level = 1; level < maxLevel; level++) {
    costs[level] = Math.max(1, Math.floor(Number(levelBase) + Number(levelFactor) * level ** Number(levelExponent)));
    totals[level + 1] = totals[level] + costs[level];
  }

  function updateLevel() {
    const level = control.valueAsNumber;
    selected.value = String(level);
    points.value = numberFormat.format(pointsForLevel(level));
    total.value = numberFormat.format(totals[level]);
    next.value = level === maxLevel ? 'Maximum level' : numberFormat.format(costs[level]);
  }

  control.disabled = false;
  control.addEventListener('input', updateLevel);
  updateLevel();
}

const originControls = document.querySelector('[data-origin-controls]');
const originGrid = document.querySelector('[data-origin-grid]');
if (originControls && originGrid) {
  const query = originControls.querySelector('#origin-search');
  const tier = originControls.querySelector('#origin-tier');
  const status = originControls.querySelector('[data-origin-count]');
  const origins = Array.from(originGrid.querySelectorAll('[data-origin-tier]'), card => ({
    card,
    terms: card.textContent.toLowerCase().replace(/\s+/g, ' '),
  }));

  function filterOrigins() {
    const terms = query.value.toLowerCase().trim().split(/\s+/).filter(Boolean);
    let visible = 0;
    for (const { card, terms: originTerms } of origins) {
      const matchesTier = !tier.value || tier.value === card.dataset.originTier;
      card.hidden = !matchesTier || !terms.every(term => originTerms.includes(term));
      if (!card.hidden) visible++;
    }
    status.textContent = visible === 1 ? '1 Origin' : `${visible} Origins`;
  }

  function revealLinkedOrigin() {
    const hash = window.location.hash;
    if (!hash.startsWith('#origin-')) return;
    let targetId;
    try {
      targetId = decodeURIComponent(hash.slice(1));
    } catch {
      return;
    }
    const target = document.getElementById(targetId);
    if (!originGrid.contains(target)) return;
    if (target.hidden) {
      query.value = '';
      tier.value = '';
      filterOrigins();
    }
    target.scrollIntoView({ block: 'start' });
  }

  originControls.hidden = false;
  query.addEventListener('input', filterOrigins);
  tier.addEventListener('change', filterOrigins);
  window.addEventListener('hashchange', revealLinkedOrigin);
  filterOrigins();
  revealLinkedOrigin();
}
