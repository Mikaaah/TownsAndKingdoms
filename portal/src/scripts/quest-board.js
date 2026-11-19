const MAX_ZOOM = 12;
const ZOOM_STEP = 1.25;
const DRAG_THRESHOLD = 5;

function readViewBox(map) {
  const [x, y, width, height] = (map.getAttribute('viewBox') || '').trim().split(/[\s,]+/).map(Number);
  if (![x, y, width, height].every(Number.isFinite) || width <= 0 || height <= 0) {
    return null;
  }
  return { x, y, width, height };
}

function createMap(chapter) {
  const map = chapter.querySelector('[data-quest-map]');
  if (!map) return null;
  const fit = readViewBox(map);
  if (!fit) return null;

  const controls = [...chapter.querySelectorAll('[data-quest-action]')];
  const pointers = new Map();
  let view = fit;
  let gesture;
  let dragging = false;
  let suppressClickUntil = 0;

  function setView(box) {
    const x = Math.min(fit.x + fit.width, Math.max(fit.x, box.x + box.width / 2)) - box.width / 2;
    const y = Math.min(fit.y + fit.height, Math.max(fit.y, box.y + box.height / 2)) - box.height / 2;
    view = { ...box, x, y };
    map.setAttribute('viewBox', [view.x, view.y, view.width, view.height].join(' '));
    for (const control of controls) {
      const action = control.dataset.questAction;
      if (action === 'zoom-in') control.disabled = view.width <= fit.width / MAX_ZOOM;
      if (action === 'zoom-out') control.disabled = view.width >= fit.width;
    }
  }

  function moveView(source, from, to, zoom = 1) {
    const rect = map.getBoundingClientRect();
    const scale = Math.min(rect.width / source.width, rect.height / source.height);
    if (!scale) return;
    const width = Math.min(fit.width, Math.max(fit.width / MAX_ZOOM, source.width / zoom));
    const ratio = width / source.width;
    const height = source.height * ratio;
    // Account for the margins created by the SVG's default centered, uniform scaling.
    const left = rect.left + (rect.width - source.width * scale) / 2;
    const top = rect.top + (rect.height - source.height * scale) / 2;
    setView({
      x: source.x + (from.x - left - (to.x - left) * ratio) / scale,
      y: source.y + (from.y - top - (to.y - top) * ratio) / scale,
      width,
      height,
    });
  }

  function zoomBy(zoom) {
    const { left, top, width, height } = map.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    moveView(view, center, center, zoom);
  }

  function pointerFrame() {
    const [first, second] = pointers.values();
    if (!second) return { center: first, distance: 1 };
    return {
      center: { x: (first.x + second.x) / 2, y: (first.y + second.y) / 2 },
      distance: Math.max(1, Math.hypot(first.x - second.x, first.y - second.y)),
    };
  }

  for (const control of controls) {
    control.addEventListener('click', () => {
      switch (control.dataset.questAction) {
        case 'zoom-in': zoomBy(ZOOM_STEP); break;
        case 'zoom-out': zoomBy(1 / ZOOM_STEP); break;
        case 'fit': setView(fit); break;
      }
    });
  }

  map.addEventListener('pointerdown', (event) => {
    if (event.button !== 0 || pointers.size === 2) return;
    if (!pointers.size) {
      dragging = false;
      suppressClickUntil = 0;
    }
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    gesture = { ...pointerFrame(), view };
  });
  map.addEventListener('pointermove', (event) => {
    if (!pointers.has(event.pointerId)) return;
    pointers.set(event.pointerId, { x: event.clientX, y: event.clientY });
    const { center, distance } = pointerFrame();
    const traveled = Math.hypot(center.x - gesture.center.x, center.y - gesture.center.y);
    if (!dragging && pointers.size === 1 && traveled < DRAG_THRESHOLD) return;
    dragging = true;
    map.setAttribute('data-panning', '');
    if (!map.hasPointerCapture(event.pointerId)) map.setPointerCapture(event.pointerId);
    event.preventDefault();
    moveView(gesture.view, gesture.center, center, distance / gesture.distance);
  });

  function endPointer(event) {
    if (!pointers.delete(event.pointerId)) return;
    if (pointers.size) {
      gesture = { ...pointerFrame(), view };
    } else {
      if (dragging) suppressClickUntil = performance.now() + 350;
      map.removeAttribute('data-panning');
    }
  }

  map.addEventListener('pointerup', endPointer);
  map.addEventListener('pointercancel', endPointer);
  map.addEventListener('lostpointercapture', endPointer);
  map.addEventListener('pointerleave', (event) => {
    if (!map.hasPointerCapture(event.pointerId)) endPointer(event);
  });
  map.addEventListener('dragstart', (event) => event.preventDefault());
  map.addEventListener('click', (event) => {
    if (event.detail && performance.now() < suppressClickUntil) {
      event.preventDefault();
      event.stopPropagation();
    }
  }, true);

  map.addEventListener('wheel', (event) => {
    if ((!event.ctrlKey && !event.metaKey) || !event.deltaY) return;
    event.preventDefault();
    const position = { x: event.clientX, y: event.clientY };
    moveView(view, position, position, event.deltaY < 0 ? ZOOM_STEP : 1 / ZOOM_STEP);
  }, { passive: false });

  map.addEventListener('keydown', (event) => {
    if (event.target !== map || event.altKey || event.ctrlKey || event.metaKey) return;
    const next = { ...view };
    switch (event.key) {
      case 'ArrowLeft': next.x -= view.width / 8; break;
      case 'ArrowRight': next.x += view.width / 8; break;
      case 'ArrowUp': next.y -= view.height / 8; break;
      case 'ArrowDown': next.y += view.height / 8; break;
      case '+':
      case '=': event.preventDefault(); zoomBy(ZOOM_STEP); return;
      case '-': event.preventDefault(); zoomBy(1 / ZOOM_STEP); return;
      case 'Home': event.preventDefault(); setView(fit); return;
      default: return;
    }
    event.preventDefault();
    setView(next);
  });

  function reveal(node) {
    if (!node) return;
    const { questX, questY, questRadius } = node.dataset;
    const x = Number(questX);
    const y = Number(questY);
    const radius = Number(questRadius);
    if (![x, y, radius].every(Number.isFinite)) return;
    if (x - radius < view.x || y - radius < view.y ||
        x + radius > view.x + view.width || y + radius > view.y + view.height) {
      setView({
        ...view,
        x: x - view.width / 2,
        y: y - view.height / 2,
      });
    }
  }

  map.addEventListener('focusin', (event) => {
    if (!pointers.size) reveal(event.target.closest('[data-quest-node]'));
  });
  setView(fit);
  return { reveal };
}

function mountQuestBook(book) {
  const chapters = [...book.querySelectorAll('[data-quest-chapter]')].map(element => ({
    element,
    nodes: new Map([...element.querySelectorAll('[data-quest-node]')].map(node => [node.dataset.questId, node])),
    edges: [...element.querySelectorAll('[data-dependency][data-dependent]')],
    details: [...element.querySelectorAll('[data-quest-detail]')],
    empty: element.querySelector('[data-quest-empty]'),
    panel: element.querySelector('[data-quest-panel]'),
    board: element.querySelector('[data-quest-board]'),
    map: createMap(element),
  }));
  if (!chapters.length) return;

  const routes = new Map();
  for (const chapter of chapters) {
    routes.set('#' + chapter.element.id, { chapter });
    for (const detail of chapter.details) {
      routes.set('#' + detail.id, { chapter, quest: detail.dataset.questDetail, detail });
    }
    chapter.selected = chapter.details.find(detail => !detail.hidden)?.dataset.questDetail
      ?? chapter.details[0]?.dataset.questDetail;
  }

  const tabs = [...book.querySelectorAll('[data-chapter-link]')];

  function showRoute({ chapter, quest }) {
    for (const current of chapters) current.element.hidden = current !== chapter;
    const chapterHash = '#' + chapter.element.id;
    for (const tab of tabs) {
      if (tab.getAttribute('href') === chapterHash) tab.setAttribute('aria-current', 'location');
      else tab.removeAttribute('aria-current');
    }

    if (quest && quest !== chapter.selected) {
      chapter.selected = quest;
      if (chapter.panel) chapter.panel.scrollTop = 0;
    }
    for (const detail of chapter.details) detail.hidden = detail.dataset.questDetail !== chapter.selected;
    if (chapter.empty) chapter.empty.hidden = Boolean(chapter.selected);
    for (const [id, node] of chapter.nodes) {
      node.toggleAttribute('data-selected', id === chapter.selected);
      if (id === chapter.selected) node.setAttribute('aria-current', 'true');
      else node.removeAttribute('aria-current');
    }
    for (const edge of chapter.edges) {
      const { dependency, dependent } = edge.dataset;
      edge.toggleAttribute('data-connected', dependency === chapter.selected || dependent === chapter.selected);
    }
    if (quest) chapter.map?.reveal(chapter.nodes.get(quest));
  }

  book.addEventListener('click', (event) => {
    if (event.defaultPrevented || event.button || event.altKey || event.ctrlKey || event.metaKey || event.shiftKey) return;
    const link = event.target.closest('a[href]');
    const hash = link?.getAttribute('href');
    const route = routes.get(hash);
    if (!route) return;
    event.preventDefault();
    if (location.hash !== hash) history.pushState(null, '', hash);
    showRoute(route);
    if (!route.detail) return;

    if (event.detail === 0) {
      route.detail.tabIndex = -1;
      route.detail.focus();
    }

    const { board, panel } = route.chapter;
    if (!board || !panel) return;
    const top = panel.getBoundingClientRect().top;
    if (top >= board.getBoundingClientRect().bottom &&
        (top > window.innerHeight - 120 || link.closest('[data-quest-panel]'))) {
      panel.scrollIntoView({ block: 'start' });
    }
  });

  function openHash() {
    showRoute(routes.get(location.hash) ?? { chapter: chapters[0] });
  }

  window.addEventListener('hashchange', openHash);
  openHash();
}

for (const book of document.querySelectorAll('[data-quest-chapters]')) mountQuestBook(book);
