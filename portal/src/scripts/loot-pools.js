const number = new Intl.NumberFormat('en-US');

function searchText(value) {
  return value.normalize('NFKD').toLowerCase().replace(/\p{M}/gu, '').replace(/[_:/]+/g, ' ');
}

function canonicalHash(hash) {
  const match = /^#(boss|item)=(.+)$/.exec(hash);
  if (!match) return hash;
  try {
    return '#' + match[1] + '=' + encodeURIComponent(decodeURIComponent(match[2]));
  } catch {
    return hash;
  }
}

function mountCatalog(root) {
  const scope = root.querySelector('[data-pool-scope]');
  const dimension = root.querySelector('[data-pool-dimension]');
  const boss = root.querySelector('[data-pool-boss]');
  const search = root.querySelector('[data-pool-search]');
  const category = root.querySelector('[data-pool-category]');
  const title = root.querySelector('[data-pool-title]');
  const count = root.querySelector('[data-pool-count]');
  const table = root.querySelector('[data-pool-table]');
  const empty = root.querySelector('[data-pool-empty]');
  const pagination = root.querySelector('[data-pool-pagination]');
  const currentPage = root.querySelector('[data-pool-page]');
  const previous = root.querySelector('[data-pool-previous]');
  const next = root.querySelector('[data-pool-next]');
  const modes = [...root.querySelectorAll('[data-pool-mode]')];
  const controls = [...root.querySelectorAll('[data-pool-controls]')];
  const descriptions = [...root.querySelectorAll('[data-pool-info]')];
  const scopeOptions = new Map([...scope.options].map(option => [option.value, option]));
  const tierOptions = new Map([...scope.options].filter(option => option.dataset.tierName)
    .map(option => [Number(option.dataset.ranks), option]));
  const bossOptions = new Map([...boss.options].map(option => [option.value, option]));
  const rows = [...root.querySelectorAll('[data-pool-row]')].map(element => ({
    element,
    id: element.dataset.item,
    category: element.dataset.category,
    minTier: Number(element.dataset.minTier),
    maxTier: Number(element.dataset.maxTier),
    dimensions: element.dataset.dimensions?.split(' ').filter(Boolean) ?? [],
    encounters: [...element.querySelectorAll('[data-pool-encounter]')],
    firstTier: element.querySelector('[data-pool-tier-first]'),
    lastTier: element.querySelector('[data-pool-tier-last]'),
    tierDivider: element.querySelector('[data-pool-tier-divider]'),
    text: searchText(element.dataset.name + ' ' + element.dataset.item),
  }));
  const items = new Map(rows.map(row => ['#item=' + encodeURIComponent(row.id), row.id]));
  const pageSize = Number(root.dataset.pageSize);
  const defaultScope = scope.options[0].value;
  let mode = 'levels';
  let route = defaultScope;
  let exactItem;
  let page = 1;

  function matches(row, ranks, region, includeGlobal, encounter, terms) {
    if (category.value && row.category !== category.value) return false;
    if (exactItem && row.id !== exactItem) return false;
    if (mode === 'levels') {
      if (!ranks.some(rank => row.minTier <= rank && rank <= row.maxTier)) return false;
      if (region && (row.dimensions.length ? !row.dimensions.includes(region) : !includeGlobal)) return false;
    }
    if (mode === 'bosses' && !row.encounters.some(
      element => !encounter || element.dataset.poolEncounter === encounter
    )) return false;
    return terms.every(term => row.text.includes(term));
  }

  function renderTiers(row, ranks) {
    if (!row.firstTier) return;
    const available = mode === 'levels'
      ? ranks.filter(rank => row.minTier <= rank && rank <= row.maxTier)
      : [row.minTier, row.maxTier];
    const first = tierOptions.get(available[0]);
    const last = tierOptions.get(available.at(-1));
    if (!first || !last) return;
    row.firstTier.href = first.value;
    row.firstTier.textContent = first.dataset.tierName;
    row.lastTier.href = last.value;
    row.lastTier.textContent = last.dataset.tierName;
    row.lastTier.hidden = first === last;
    row.tierDivider.hidden = first === last;
  }

  function render() {
    const ranks = scope.selectedOptions[0].dataset.ranks.split(' ').map(Number);
    const region = dimension.value;
    const includeGlobal = dimension.selectedOptions[0].dataset.global === 'true';
    const encounter = mode === 'bosses' && boss.selectedOptions[0].dataset.entity;
    const terms = exactItem ? [] : searchText(search.value).trim().split(/\s+/).filter(Boolean);
    const matched = rows.filter(row => matches(row, ranks, region, includeGlobal, encounter, terms));
    const pages = Math.max(1, Math.ceil(matched.length / pageSize));
    page = Math.min(page, pages);
    const start = (page - 1) * pageSize;
    const finish = Math.min(start + pageSize, matched.length);
    const visible = new Set(matched.slice(start, finish));
    for (const row of rows) {
      row.element.hidden = !visible.has(row);
      if (!row.element.hidden) renderTiers(row, ranks);
      for (const element of row.encounters) {
        element.hidden = Boolean(encounter) && element.dataset.poolEncounter !== encounter;
      }
    }

    table.hidden = !matched.length;
    empty.hidden = Boolean(matched.length);
    count.textContent = matched.length === 1 ? '1 item' : matched.length
      ? `Showing ${number.format(start + 1)}–${number.format(finish)} of ${number.format(matched.length)} items`
      : '0 items';
    pagination.hidden = pages === 1;
    currentPage.textContent = `Page ${page} of ${pages}`;
    previous.disabled = page === 1;
    next.disabled = page === pages;
  }

  function selectRoute(hash) {
    hash = canonicalHash(hash);
    if (exactItem) search.value = '';
    exactItem = items.get(hash);
    if (exactItem || hash === '#items') {
      mode = 'items';
      route = exactItem ? hash : '#items';
      title.textContent = 'Find an item';
      if (exactItem) {
        search.value = exactItem;
        category.value = '';
      }
    } else if (bossOptions.has(hash)) {
      mode = 'bosses';
      route = hash;
      boss.value = route;
      title.textContent = boss.selectedOptions[0].dataset.entity
        ? boss.selectedOptions[0].textContent.trim()
        : 'All boss drops';
    } else {
      mode = 'levels';
      route = scopeOptions.has(hash) ? hash : defaultScope;
      scope.value = route;
      title.textContent = scope.selectedOptions[0].textContent.trim();
    }

    page = 1;
    root.dataset.mode = mode;
    for (const control of controls) control.hidden = control.dataset.poolControls !== mode;
    for (const description of descriptions) description.hidden = description.dataset.poolInfo !== route;
    for (const link of modes) {
      if (link.dataset.poolMode === mode) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    }
    render();
  }

  function navigate(hash) {
    if (location.hash !== hash) history.pushState(null, '', hash);
    selectRoute(hash);
  }

  root.addEventListener('click', event => {
    const link = event.target.closest('a[data-pool-mode], a[data-pool-route]');
    if (!link || event.button || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    navigate(link.getAttribute('href'));
    if (link.dataset.poolMode === 'items') search.focus();
  });
  scope.addEventListener('change', () => navigate(scope.value));
  boss.addEventListener('change', () => navigate(boss.value));
  for (const filter of [category, dimension]) {
    filter.addEventListener('change', () => {
      page = 1;
      render();
    });
  }
  search.addEventListener('input', () => {
    if (exactItem) {
      exactItem = undefined;
      route = '#items';
      history.replaceState(null, '', route);
    }
    page = 1;
    render();
  });

  function turnPage(offset) {
    page += offset;
    render();
    const header = title.parentElement;
    header.focus({ preventScroll: true });
    header.scrollIntoView({ block: 'start' });
  }
  previous.addEventListener('click', () => turnPage(-1));
  next.addEventListener('click', () => turnPage(1));
  window.addEventListener('hashchange', () => selectRoute(location.hash));
  selectRoute(location.hash);
}

for (const root of document.querySelectorAll('[data-loot-catalog]')) mountCatalog(root);
