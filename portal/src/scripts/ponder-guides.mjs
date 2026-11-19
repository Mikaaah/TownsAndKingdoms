import { isReferenceStep } from './ponder-core.mjs';

const itemCount = /^(\d+)x?\s+/;
const normalize = value => value.toLowerCase().replace(/[_:/-]+/g, ' ');

export function guideItems(step) {
  const references = isReferenceStep(step);
  const entries = [
    { raw: step.input, name: step.inputName, icon: step.inputIcon, role: 'Input' },
    { raw: step.output, name: step.outputName, icon: step.outputIcon, role: 'Output' },
  ];
  const items = entries.filter(entry => entry.raw).map(({ raw, ...entry }) => {
    const count = raw.match(itemCount);
    return {
      ...entry,
      id: raw.replace(itemCount, ''),
      count: count ? `${count[1]} × ` : '',
    };
  });
  const sameItem = items.length === 2 && items[0].id === items[1].id && items[0].count === items[1].count;
  const shown = sameItem ? items.slice(0, 1) : items;
  if (references || sameItem) return shown.map(item => ({ ...item, role: '' }));
  return shown;
}

export function matchesGuide({ title, items, names }, query) {
  const entered = query.trim().toLowerCase();
  if (/^[\w.-]+:[\w./-]+$/.test(entered)) return items.split(' ').includes(entered);
  const words = normalize(entered).split(/\s+/).filter(Boolean);
  const haystack = normalize(`${title} ${items} ${names}`);
  return words.every(word => haystack.includes(word));
}

export function initPonderGuides(root = document.querySelector('[data-ponder-guides]')) {
  if (!root) return;
  const view = root.ownerDocument.defaultView;
  const query = root.querySelector('[data-ponder-query]');
  const select = root.querySelector('[data-ponder-guide]');
  const status = root.querySelector('#ponder-results');
  const empty = root.querySelector('[data-ponder-empty]');
  const options = Array.from(select.options);
  const groups = Array.from(select.querySelectorAll('optgroup'));
  const articles = Array.from(root.querySelectorAll('[data-guide]'));

  const update = preferred => {
    const visible = options.filter(option => matchesGuide(option.dataset, query.value));
    const matches = new Set(visible);
    for (const option of options) {
      option.hidden = !matches.has(option);
      option.disabled = option.hidden;
    }
    for (const group of groups) group.hidden = Array.from(group.children).every(option => option.hidden);
    const chosen = visible.find(option => option.value === preferred) ?? visible[0];
    select.value = chosen?.value ?? '';
    select.disabled = !chosen;
    status.textContent = `${visible.length} ${visible.length === 1 ? 'guide' : 'guides'}`;
    empty.hidden = Boolean(chosen);
    for (const guide of articles) guide.hidden = guide.dataset.guide !== chosen?.value;
  };

  const params = new URLSearchParams(view.location.search);
  query.value = params.get('q') ?? '';
  update(params.get('scene') ?? (query.value ? '' : select.value));
  root.querySelector('[data-ponder-controls]').hidden = false;
  query.addEventListener('input', () => update(select.value));
  select.addEventListener('change', () => {
    update(select.value);
    const url = new URL(view.location.href);
    url.searchParams.set('scene', select.value);
    url.searchParams.delete('q');
    view.history.replaceState(null, '', url);
  });
}
