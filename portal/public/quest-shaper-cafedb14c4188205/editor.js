import {
  LayoutModel, boundsFor, fitBounds, marqueeRect, marqueeSelection,
  round, screenToWorld, snap, worldToScreen, zoomAt,
} from "./editor_model.js";

const byId = (id) => document.getElementById(id);
const canvas = byId("map-canvas");
const context = canvas.getContext("2d");
const minimap = byId("minimap");
const miniContext = minimap.getContext("2d");
const workspace = document.querySelector(".workspace");
const baseScale = 28;
const minScale = 2;
const maxScale = 160;
const gridSize = 0.25;
const flags = { snap: true, labels: true, links: true };
const colorPattern = /^#[0-9a-f]{6}$/i;
const groupDetails = new Map();
const images = new Map();
const chapterOrigins = new Map();
const chapterButtons = new Map();
const selected = new Set();
let dataset, model, storageKey, chapter, questLookup, camera, miniCamera, pending, action;
let width = 1;
let height = 1;
let dpr = 1;
let space = false;
let frame = 0;
let messageTimer = 0;

function el(tag, text, classes) {
  const element = document.createElement(tag);
  if (text !== undefined) element.textContent = text;
  if (classes) element.className = classes;
  return element;
}

function shortTitle(title) {
  return title.trim().replace(/^[►▶◆»]\s*/u, "");
}

function tint(ch = chapter) {
  return colorPattern.test(ch?.accent) ? ch.accent : "#c2a1ff";
}

function prettyId(id) {
  return id.split(":").at(-1).replaceAll("_", " ");
}

function position(quest) {
  return pending?.get(quest.id) ?? model.position(chapter.id, quest.id);
}

function frameBounds() {
  return boundsFor([
    ...chapter.quests.map((quest) => ({ ...position(quest), size: quest.size })),
    ...(chapter.images ?? []).filter((image) => image.src || image.textOnImage),
  ]);
}

function fitChapter() {
  if (!chapter) return;
  camera = fitBounds(frameBounds(), { width, height }, Math.min(width, height) < 420 ? 44 : 68, minScale, 60);
  queueDraw();
}

function queueDraw() {
  if (!frame) frame = requestAnimationFrame(draw);
}

function resize() {
  const area = canvas.getBoundingClientRect();
  const previousWidth = width;
  const previousHeight = height;
  width = Math.max(1, area.width);
  height = Math.max(1, area.height);
  dpr = Math.min(2, window.devicePixelRatio || 1);
  canvas.width = Math.round(width * dpr);
  canvas.height = Math.round(height * dpr);
  minimap.width = 140 * dpr;
  minimap.height = 86 * dpr;
  if (camera) {
    camera.x += (width - previousWidth) / 2;
    camera.y += (height - previousHeight) / 2;
  } else fitChapter();
  queueDraw();
}

function grid() {
  context.fillStyle = "#161222";
  context.fillRect(0, 0, width, height);
  const gradient = context.createRadialGradient(width * .58, height * .42, 0, width * .58, height * .42, Math.max(width, height) * .74);
  gradient.addColorStop(0, "#251a35");
  gradient.addColorStop(1, "#15111e");
  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);
  const step = camera.scale > 8 ? camera.scale : camera.scale * 5;
  context.strokeStyle = "#c7a3f116";
  context.lineWidth = 1;
  context.beginPath();
  for (let x = ((camera.x % step) + step) % step; x < width; x += step) {
    context.moveTo(x, 0);
    context.lineTo(x, height);
  }
  for (let y = ((camera.y % step) + step) % step; y < height; y += step) {
    context.moveTo(0, y);
    context.lineTo(width, y);
  }
  context.stroke();
}

function paintImages() {
  for (const image of chapter.images ?? []) {
    const center = worldToScreen(camera, image);
    const w = image.width * camera.scale;
    const h = image.height * camera.scale;
    if (center.x + w / 2 < 0 || center.y + h / 2 < 0 || center.x - w / 2 > width || center.y - h / 2 > height) continue;
    if (image.src) {
      if (!images.has(image.src)) {
        const resource = new Image();
        resource.onload = queueDraw;
        resource.src = image.src;
        images.set(image.src, resource);
      }
      const loaded = images.get(image.src);
      if (loaded.complete && loaded.naturalWidth) {
        context.save();
        context.translate(center.x, center.y);
        context.rotate((image.rotation ?? 0) * Math.PI / 180);
        context.globalAlpha = .91;
        if (image.sprite) context.drawImage(loaded, ...image.sprite, -w / 2, -h / 2, w, h);
        else context.drawImage(loaded, -w / 2, -h / 2, w, h);
        context.restore();
      }
    } else if (image.title && (image.labelsOnImage || image.textOnImage) && flags.labels) {
      context.fillStyle = tint();
      context.font = `650 ${Math.max(9, Math.min(15, h * .78))}px system-ui`;
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(image.title, center.x, center.y, Math.max(w, 20));
    }
  }
}

function nodePath(ctx, shape, x, y, radius) {
  ctx.beginPath();
  if (shape === "square" || shape === "rsquare") {
    const edge = radius * .85;
    ctx.roundRect(x - edge, y - edge, edge * 2, edge * 2, shape === "rsquare" ? radius * .32 : 2);
    return;
  }
  const sides = { diamond: 4, pentagon: 5, hexagon: 6, octagon: 8, gear: 16 }[shape];
  if (!sides) {
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    return;
  }
  for (let i = 0; i < sides; i++) {
    const angle = (Math.PI * 2 * i) / sides - Math.PI / 2;
    const r = shape === "gear" && i % 2 ? radius * .8 : radius;
    const px = x + r * Math.cos(angle);
    const py = y + r * Math.sin(angle);
    if (i === 0) ctx.moveTo(px, py);
    else ctx.lineTo(px, py);
  }
  ctx.closePath();
}

function nodeRadius(quest) {
  return Math.max(4.4, camera.scale * Math.max(.64, quest.size || 1) * .42);
}

function paintLink(from, to, highlight) {
  if (Math.max(from.x, to.x) < -10 || Math.max(from.y, to.y) < -10 || Math.min(from.x, to.x) > width + 10 || Math.min(from.y, to.y) > height + 10) return;
  context.strokeStyle = highlight ? tint() : "#8f749ec4";
  context.lineWidth = highlight ? 1.8 : 1;
  context.globalAlpha = highlight ? .9 : .56;
  context.beginPath();
  context.moveTo(from.x, from.y);
  context.lineTo(to.x, to.y);
  context.stroke();
  context.globalAlpha = 1;
}

function paintNode(quest, screen, isSelected) {
  const radius = nodeRadius(quest);
  if (screen.x < -radius || screen.x > width + radius || screen.y < -radius || screen.y > height + radius) return;
  nodePath(context, quest.shape, screen.x, screen.y, radius);
  context.fillStyle = isSelected ? "#764d9c" : "#312240";
  context.fill();
  context.strokeStyle = isSelected ? "#f5e6ff" : tint();
  context.globalAlpha = isSelected ? 1 : .81;
  context.lineWidth = isSelected ? 2.2 : radius > 9 ? 1.5 : 1.05;
  context.stroke();
  context.globalAlpha = 1;
  if (radius > 7) {
    context.beginPath();
    const centerSize = Math.max(1, radius * .26);
    context.moveTo(screen.x, screen.y - centerSize);
    context.lineTo(screen.x + centerSize, screen.y);
    context.lineTo(screen.x, screen.y + centerSize);
    context.lineTo(screen.x - centerSize, screen.y);
    context.closePath();
    context.fillStyle = isSelected ? "#f3ddff" : tint();
    context.fill();
  }
  if (flags.labels && (camera.scale >= 21 || isSelected || (chapter.quests.length < 80 && camera.scale >= 9))) {
    const label = quest.title;
    const fontSize = Math.max(8.5, Math.min(13, camera.scale * .54));
    context.font = `${isSelected ? 740 : 570} ${fontSize}px system-ui`;
    const maxLabelWidth = camera.scale < 19 ? Math.min(105, camera.scale * 3.7) : Math.min(164, camera.scale * 3);
    context.textAlign = "center";
    context.textBaseline = "top";
    let title = label;
    if (context.measureText(title).width > maxLabelWidth) {
      while (title && context.measureText(title + "…").width > maxLabelWidth) title = title.slice(0, -1);
      title += "…";
    }
    const tx = screen.x;
    const ty = screen.y + radius + 4;
    context.lineJoin = "round";
    context.strokeStyle = "#181121";
    context.lineWidth = 3.5;
    context.strokeText(title, tx, ty);
    context.fillStyle = isSelected ? "#fff2ff" : "#e2d6ee";
    context.fillText(title, tx, ty);
  }
}

function paintMinimap(bounds, points) {
  if (!minimap.offsetParent) return;
  const mw = 140;
  const mh = 86;
  miniCamera = fitBounds(bounds, { width: mw, height: mh }, 8, .04, 50);
  miniContext.setTransform(dpr, 0, 0, dpr, 0, 0);
  miniContext.clearRect(0, 0, mw, mh);
  miniContext.fillStyle = tint();
  miniContext.globalAlpha = .66;
  for (const [id, item] of points) {
    const point = worldToScreen(miniCamera, item);
    const size = selected.has(id) ? 3 : 1.5;
    miniContext.fillRect(point.x - size / 2, point.y - size / 2, size, size);
  }
  miniContext.globalAlpha = 1;
  const start = worldToScreen(miniCamera, screenToWorld(camera, { x: 0, y: 0 }));
  const end = worldToScreen(miniCamera, screenToWorld(camera, { x: width, y: height }));
  miniContext.strokeStyle = "#e4c9ffad";
  miniContext.fillStyle = "#b58ce722";
  miniContext.fillRect(start.x, start.y, end.x - start.x, end.y - start.y);
  miniContext.strokeRect(start.x, start.y, end.x - start.x, end.y - start.y);
}

function draw() {
  frame = 0;
  if (!chapter || !camera) return;
  context.setTransform(dpr, 0, 0, dpr, 0, 0);
  grid();
  paintImages();
  const points = new Map();
  const screens = new Map();
  for (const quest of chapter.quests) {
    const point = position(quest);
    points.set(quest.id, point);
    screens.set(quest.id, worldToScreen(camera, point));
  }
  if (flags.links) {
    for (const quest of chapter.quests) {
      if (quest.hideLines) continue;
      for (const dependency of quest.dependencies) {
        if (!screens.has(dependency) || questLookup.get(dependency)?.hideOutgoingLines) continue;
        paintLink(screens.get(dependency), screens.get(quest.id), selected.has(quest.id) || selected.has(dependency));
      }
    }
  }
  for (const quest of chapter.quests) {
    if (!selected.has(quest.id)) paintNode(quest, screens.get(quest.id), false);
  }
  for (const id of selected) paintNode(questLookup.get(id), screens.get(id), true);
  if (action?.type === "marquee" && action.end) {
    const rect = marqueeRect(action.start, action.end);
    context.fillStyle = "#bd9df92b";
    context.strokeStyle = "#c8aaff";
    context.lineWidth = 1;
    context.fillRect(rect.left, rect.top, rect.right - rect.left, rect.bottom - rect.top);
    context.strokeRect(rect.left, rect.top, rect.right - rect.left, rect.bottom - rect.top);
  }
  const size = boundsFor([...points].map(([id, p]) => ({ ...p, size: questLookup.get(id).size })));
  paintMinimap(size, points);
  byId("zoom-value").textContent = Math.round(camera.scale / baseScale * 100) + "%";
}

function saveLabel(label) {
  clearTimeout(messageTimer);
  byId("save-status").textContent = label;
  messageTimer = setTimeout(() => { byId("save-status").textContent = "Edits stay in this browser"; }, 6500);
}

function updateButtons() {
  byId("undo").disabled = !model.canUndo;
  byId("redo").disabled = !model.canRedo;
  byId("undo").title = model.undoLabel ? "Undo: " + model.undoLabel : "Undo (Ctrl+Z)";
  byId("redo").title = model.redoLabel ? "Redo: " + model.redoLabel : "Redo (Ctrl+Shift+Z)";
  byId("export").disabled = !model.changedCount();
  byId("reset").disabled = !model.changedCount(chapter.id);
  for (const [id, button] of chapterButtons) {
    const edited = model.changedCount(id);
    button.dataset.edited = edited > 0;
    const ch = dataset.chapters.find((entry) => entry.id === id);
    button.lastChild.textContent = edited ? ch.quests.length + " · " + edited + "*" : ch.quests.length;
    if (id === chapter.id) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  }
}

function storeChanges(message) {
  try {
    localStorage.setItem(storageKey, JSON.stringify(model.export()));
    saveLabel(message ?? "Saved in this browser");
  } catch {
    saveLabel("Browser storage unavailable. Export to keep your changes.");
  }
  updateButtons();
  renderInspector();
  queueDraw();
}

function groupLabel(name) {
  return name === "Legacy" ? "Legacy chapters" : name;
}

function renderChapters() {
  const term = byId("chapter-search").value.trim().toLowerCase();
  const groups = new Map();
  chapterButtons.clear();
  const nav = byId("chapters");
  nav.replaceChildren();
  for (const entry of dataset.chapters) {
    if (term && !(entry.title + " " + entry.group).toLowerCase().includes(term)) continue;
    if (!groups.has(entry.group)) groups.set(entry.group, []);
    groups.get(entry.group).push(entry);
  }
  for (const [group, entries] of groups) {
    const box = el("details");
    box.open = Boolean(term) || (groupDetails.get(group) ?? (group !== "Legacy"));
    box.append(el("summary", groupLabel(group)));
    box.addEventListener("toggle", () => { if (!term) groupDetails.set(group, box.open); });
    for (const entry of entries) {
      const button = el("button", undefined, "chapter-button");
      button.type = "button";
      button.style.setProperty("--chapter-accent", tint(entry));
      button.append(el("span", undefined, "chapter-marker"), el("span", shortTitle(entry.title)), el("small", entry.quests.length));
      button.addEventListener("click", () => selectChapter(entry));
      chapterButtons.set(entry.id, button);
      box.append(button);
    }
    nav.append(box);
  }
  if (!groups.size) nav.append(el("p", "No matching chapters.", "map-tip"));
  if (chapter) updateButtons();
}

function selectChapter(entry) {
  chapter = entry;
  selected.clear();
  pending = undefined;
  action = undefined;
  questLookup = new Map(entry.quests.map((quest) => [quest.id, quest]));
  byId("quest-search").value = "";
  renderQuestResults();
  byId("chapter-title").textContent = shortTitle(entry.title);
  byId("chapter-group").textContent = groupLabel(entry.group);
  byId("chapter-caption").textContent = entry.quests.length + (entry.quests.length === 1 ? " quest" : " quests") +
    (entry.legacy ? " · Historical layout" : "");
  byId("sidebar").classList.remove("is-open");
  byId("toggle-chapters").setAttribute("aria-expanded", "false");
  showInspector(false);
  updateButtons();
  renderInspector();
  fitChapter();
}

function findNode(id, source = chapter) {
  if (source.id === chapter.id && questLookup.has(id)) return { quest: questLookup.get(id), chapter };
  return chapterOrigins.get(id);
}

function showInspector(open) {
  workspace.dataset.inspector = open ? "open" : "closed";
  byId("toggle-inspector").setAttribute("aria-pressed", open);
}

function centerNode(id, entry = chapter) {
  if (entry.id !== chapter.id) selectChapter(entry);
  const point = model.position(chapter.id, id);
  const scale = Math.max(24, camera.scale);
  camera = { x: width / 2 - point.x * scale, y: height / 2 - point.y * scale, scale };
  selected.clear();
  selected.add(id);
  showInspector(true);
  renderInspector();
  queueDraw();
}

function renderQuestResults() {
  const box = byId("quest-results");
  box.replaceChildren();
  const term = byId("quest-search").value.trim().toLowerCase();
  box.hidden = !term || !chapter;
  if (box.hidden) return;
  const matches = chapter.quests.filter((quest) => (quest.title + " " + quest.id + " " + quest.icon).toLowerCase().includes(term)).slice(0, 16);
  if (!matches.length) box.append(el("p", "No matching quests.", "empty"));
  for (const quest of matches) {
    const button = el("button", quest.title, "result-button");
    button.addEventListener("click", () => {
      byId("quest-search").value = "";
      renderQuestResults();
      centerNode(quest.id);
    });
    box.append(button);
  }
}

function changePositions(updates, label) {
  if (!updates.length) return;
  if (model.move(chapter.id, updates, label)) storeChanges();
}

function alignSelected(axis, distribute) {
  const points = [...selected].map((id) => ({ id, ...model.position(chapter.id, id) }));
  if (distribute) {
    points.sort((a, b) => a[axis] - b[axis]);
    const first = points[0][axis];
    const last = points.at(-1)[axis];
    for (let i = 1; i < points.length - 1; i++) points[i][axis] = round(first + (last - first) * i / (points.length - 1));
  } else {
    const anchor = points[0][axis];
    for (const point of points) point[axis] = anchor;
  }
  changePositions(points, distribute ? "Distribute selection" : "Align selection");
}

function toolsForSelection(section) {
  const tools = el("div", undefined, "align-tools");
  for (const [label, axis, distribute] of [
    ["Align X", "x", false], ["Align Y", "y", false],
    ["Space X", "x", true], ["Space Y", "y", true],
  ]) {
    const button = el("button", label);
    button.disabled = distribute && selected.size < 3;
    button.title = distribute ? "Space selected quests evenly on " + axis.toUpperCase() : "Give selected quests the same " + axis.toUpperCase();
    button.addEventListener("click", () => alignSelected(axis, distribute));
    tools.append(button);
  }
  section.append(tools);
}

function renderInspector() {
  const section = byId("quest-detail");
  section.replaceChildren();
  const count = selected.size;
  byId("selection-count").textContent = count ? String(count) : "";
  byId("selection-status").textContent = count ? count + (count === 1 ? " quest selected" : " quests selected") : "No quests selected";
  if (!count) {
    section.append(el("p", "Select a quest to inspect its tasks and edit its coordinates.", "empty"));
    return;
  }
  if (count > 1) {
    section.append(el("h3", count + " quests selected"), el("p", "Drag the selection as a group, or align and space the quests.", "empty"));
    toolsForSelection(section);
    return;
  }
  const quest = questLookup.get(selected.values().next().value);
  section.append(el("h3", quest.title));
  if (quest.subtitle) section.append(el("p", quest.subtitle, "node-subtitle"));
  section.append(el("div", quest.id, "node-id"));
  if (quest.description) section.append(el("p", quest.description, "node-description"));
  section.append(el("h4", "Position"));
  const coords = el("div", undefined, "position-fields");
  const at = model.position(chapter.id, quest.id);
  for (const axis of ["x", "y"]) {
    const label = el("label", axis.toUpperCase());
    const input = el("input");
    input.type = "number";
    input.step = "any";
    input.value = round(at[axis], 5);
    input.setAttribute("aria-label", "Quest " + axis.toUpperCase());
    input.addEventListener("change", () => {
      const num = input.valueAsNumber;
      if (!Number.isFinite(num)) { input.value = at[axis]; return; }
      changePositions([{ id: quest.id, ...model.position(chapter.id, quest.id), [axis]: num }], "Edit coordinates");
    });
    input.addEventListener("keydown", (event) => {
      if (event.key === "Enter") input.blur();
    });
    label.append(input);
    coords.append(label);
  }
  section.append(coords);
  if (quest.tasks.length) {
    section.append(el("h4", "Tasks"));
    const list = el("ul", undefined, "detail-list");
    for (const task of quest.tasks) list.append(el("li", task.label || prettyId(task.type)));
    section.append(list);
  }
  if (quest.dependencies.length) {
    section.append(el("h4", "Prerequisites"));
    for (const id of quest.dependencies) {
      const match = findNode(id);
      if (!match) { section.append(el("p", id, "node-id")); continue; }
      const name = match.quest.title + (match.chapter.id !== chapter.id ? " ↗" : "");
      const button = el("button", name, "dependency-button");
      button.addEventListener("click", () => centerNode(id, match.chapter));
      section.append(button);
    }
  }
}

function location(event, target = canvas) {
  const rect = target.getBoundingClientRect();
  return { x: event.clientX - rect.left, y: event.clientY - rect.top };
}

function pick(at) {
  let best;
  let distance = Infinity;
  for (const quest of chapter.quests) {
    const point = worldToScreen(camera, position(quest));
    const d = Math.hypot(at.x - point.x, at.y - point.y);
    if (d <= Math.max(8, nodeRadius(quest)) && d < distance) {
      distance = d;
      best = quest;
    }
  }
  return best;
}

function pointerStart(event) {
  if (!chapter || action || !event.isPrimary || event.button > 2) return;
  canvas.focus({ preventScroll: true });
  const start = location(event);
  const hit = !space && event.button === 0 ? pick(start) : null;
  const multi = event.shiftKey || event.ctrlKey || event.metaKey;
  const record = { start, pointer: event.pointerId, moved: false, camera: { ...camera } };
  if (hit) {
    if (multi) {
      if (selected.has(hit.id)) selected.delete(hit.id);
      else selected.add(hit.id);
    } else if (!selected.has(hit.id)) {
      selected.clear();
      selected.add(hit.id);
    }
    action = {
      ...record, type: selected.has(hit.id) ? "move" : "click", anchor: hit.id,
      positions: new Map([...selected].map((id) => [id, model.position(chapter.id, id)])),
    };
    showInspector(true);
  } else if (multi && event.button === 0 && !space) {
    action = { ...record, type: "marquee", append: event.ctrlKey || event.metaKey, original: [...selected] };
    canvas.dataset.cursor = "marquee";
  } else {
    action = { ...record, type: "pan", preserve: space || event.button !== 0 };
    canvas.dataset.cursor = "dragging";
  }
  canvas.setPointerCapture(event.pointerId);
  renderInspector();
  queueDraw();
  event.preventDefault();
}

function pointerMove(event) {
  if (!chapter || !camera) return;
  const at = location(event);
  const p = screenToWorld(camera, at);
  byId("cursor-coords").textContent = `X ${round(p.x, 2)}  Y ${round(p.y, 2)}`;
  if (!action || action.pointer !== event.pointerId) {
    canvas.dataset.cursor = !space && pick(at) ? "node" : "";
    return;
  }
  const deltaX = at.x - action.start.x;
  const deltaY = at.y - action.start.y;
  if (!action.moved && Math.hypot(deltaX, deltaY) < 3) return;
  action.moved = true;
  if (action.type === "pan") {
    camera.x = action.camera.x + deltaX;
    camera.y = action.camera.y + deltaY;
  } else if (action.type === "move") {
    const anchor = action.positions.get(action.anchor);
    let dx = deltaX / camera.scale;
    let dy = deltaY / camera.scale;
    if (flags.snap) {
      dx = snap(anchor.x + dx, gridSize) - anchor.x;
      dy = snap(anchor.y + dy, gridSize) - anchor.y;
    }
    pending = new Map([...action.positions].map(([id, base]) => [id, { x: round(base.x + dx, 6), y: round(base.y + dy, 6) }]));
    canvas.dataset.cursor = "dragging";
  } else if (action.type === "marquee") {
    action.end = at;
    const inside = marqueeSelection(chapter.quests.map((q) => ({ id: q.id, size: q.size, ...position(q) })), camera, action.start, at);
    selected.clear();
    for (const id of action.append ? [...action.original, ...inside] : inside) selected.add(id);
    showInspector(Boolean(selected.size));
    renderInspector();
  }
  queueDraw();
}

function pointerFinish(event, canceled = false) {
  if (!action || action.pointer !== event.pointerId) return;
  const current = action;
  action = undefined;
  if (canvas.hasPointerCapture(event.pointerId)) canvas.releasePointerCapture(event.pointerId);
  const updates = pending ? [...pending].map(([id, next]) => ({ id, ...next })) : [];
  pending = undefined;
  canvas.dataset.cursor = "";
  if (!canceled) {
    if (current.type === "move") changePositions(updates, "Drag quest layout");
    if (current.type === "pan" && !current.moved && !current.preserve) {
      selected.clear();
      showInspector(false);
    }
  }
  renderInspector();
  queueDraw();
}

function zoom(anchor, amount) {
  if (!camera || action) return;
  camera = zoomAt(camera, anchor, camera.scale * amount, minScale, maxScale);
  queueDraw();
}

function undoRedo(isRedo) {
  if (!model || action) return;
  const changed = isRedo ? model.redo() : model.undo();
  if (changed) storeChanges(isRedo ? "Change reapplied" : "Change undone");
}

function bindEditor() {
  canvas.addEventListener("pointerdown", pointerStart);
  canvas.addEventListener("pointermove", pointerMove);
  canvas.addEventListener("pointerup", (event) => pointerFinish(event));
  canvas.addEventListener("pointercancel", (event) => pointerFinish(event, true));
  canvas.addEventListener("lostpointercapture", (event) => pointerFinish(event, true));
  canvas.addEventListener("contextmenu", (event) => event.preventDefault());
  canvas.addEventListener("pointerleave", () => { byId("cursor-coords").textContent = ""; });
  canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    zoom(location(event), Math.exp(-Math.max(-90, Math.min(90, event.deltaY)) * .009));
  }, { passive: false });
  minimap.addEventListener("pointerdown", (event) => {
    if (!miniCamera) return;
    const world = screenToWorld(miniCamera, location(event, minimap));
    camera.x = width / 2 - world.x * camera.scale;
    camera.y = height / 2 - world.y * camera.scale;
    queueDraw();
  });
  for (const [id, multiplier] of [["zoom-in", 1.28], ["zoom-out", 1 / 1.28]]) {
    byId(id).addEventListener("click", () => zoom({ x: width / 2, y: height / 2 }, multiplier));
  }
  for (const id of Object.keys(flags)) {
    byId(id).addEventListener("click", () => {
      flags[id] = !flags[id];
      byId(id).setAttribute("aria-pressed", flags[id]);
      queueDraw();
    });
  }
  byId("fit").addEventListener("click", fitChapter);
  byId("undo").addEventListener("click", () => undoRedo(false));
  byId("redo").addEventListener("click", () => undoRedo(true));
  byId("chapter-search").addEventListener("input", renderChapters);
  byId("quest-search").addEventListener("input", renderQuestResults);
  byId("toggle-chapters").addEventListener("click", () => {
    const expanded = byId("sidebar").classList.toggle("is-open");
    byId("toggle-chapters").setAttribute("aria-expanded", expanded);
    if (expanded) byId("chapter-search").focus();
  });
  byId("toggle-inspector").addEventListener("click", () => showInspector(workspace.dataset.inspector !== "open"));
  const dialog = byId("reset-dialog");
  byId("reset").addEventListener("click", () => { dialog.returnValue = ""; dialog.showModal(); });
  dialog.addEventListener("close", () => {
    if (dialog.returnValue === "reset" && model.reset(chapter.id)) storeChanges("Original positions restored");
  });
  byId("export").addEventListener("click", () => {
    const blob = new Blob([JSON.stringify(model.export(), null, 2) + "\n"], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = el("a");
    anchor.href = url;
    anchor.download = "TNK3_Quest_Layout.json";
    document.body.append(anchor);
    anchor.click();
    anchor.remove();
    setTimeout(() => URL.revokeObjectURL(url), 1000);
    saveLabel("Layout exported");
  });
  const file = byId("import-file");
  byId("import").addEventListener("click", () => file.click());
  file.addEventListener("change", async () => {
    const imported = file.files[0];
    if (!imported) return;
    try {
      if (imported.size > 5_000_000) throw new Error("The layout file is too large.");
      const changed = model.import(await imported.text());
      if (changed) storeChanges("Layout imported");
      else saveLabel("Layout already matches");
    } catch (error) {
      saveLabel(error.message || "Could not import layout");
    } finally {
      file.value = "";
    }
  });
  window.addEventListener("keydown", (event) => {
    if (!chapter || dialog.open || ["INPUT", "TEXTAREA", "BUTTON", "SUMMARY"].includes(event.target.tagName)) return;
    const accel = event.ctrlKey || event.metaKey;
    if (accel && ["z", "y"].includes(event.key.toLowerCase())) {
      event.preventDefault();
      undoRedo(event.shiftKey || event.key.toLowerCase() === "y");
    } else if (event.code === "Space") {
      event.preventDefault();
      space = true;
      if (!action) canvas.dataset.cursor = "";
    } else if (event.key === "Escape") {
      selected.clear();
      showInspector(false);
      renderInspector();
      queueDraw();
    } else if (event.key.toLowerCase() === "f") {
      fitChapter();
    } else if (event.key.startsWith("Arrow") && selected.size && !action) {
      event.preventDefault();
      const step = event.shiftKey ? 1 : gridSize;
      const dx = event.key === "ArrowLeft" ? -step : event.key === "ArrowRight" ? step : 0;
      const dy = event.key === "ArrowUp" ? -step : event.key === "ArrowDown" ? step : 0;
      changePositions([...selected].map((id) => {
        const current = model.position(chapter.id, id);
        return { id, x: round(current.x + dx, 6), y: round(current.y + dy, 6) };
      }), "Nudge quest layout");
    }
  });
  window.addEventListener("keyup", (event) => { if (event.code === "Space") space = false; });
  window.addEventListener("blur", () => { space = false; });
  new ResizeObserver(resize).observe(canvas);
}

async function start() {
  try {
    const response = await fetch("./quest_data.json.gz");
    if (!response.ok) throw new Error("Quest data could not be loaded.");
    const decompressed = response.body.pipeThrough(new DecompressionStream("gzip"));
    dataset = await new Response(decompressed).json();
    model = new LayoutModel(dataset);
    storageKey = "tnk3-quest-shaper:" + dataset.sourceId;
    try {
      const saved = localStorage.getItem(storageKey);
      if (saved) model.import(saved, { replace: true, recordHistory: false });
    } catch { saveLabel("Saved layout could not be loaded"); }
    const ordered = [...dataset.chapters].sort((a, b) => Number(Boolean(a.legacy)) - Number(Boolean(b.legacy)));
    for (const entry of ordered) {
      for (const quest of entry.quests) if (!chapterOrigins.has(quest.id)) chapterOrigins.set(quest.id, { quest, chapter: entry });
    }
    const current = dataset.chapters.filter((entry) => !entry.legacy);
    const original = current.find((entry) => /get.*create.?ive/i.test(entry.title)) ?? current[0] ?? dataset.chapters[0];
    byId("chapter-count").textContent = current.length;
    byId("pack-version").textContent = dataset.pack;
    byId("dataset-info").textContent = current.reduce((total, entry) => total + entry.quests.length, 0).toLocaleString("en-US") + " current quests";
    resize();
    renderChapters();
    selectChapter(original);
    bindEditor();
  } catch (error) {
    byId("load-error").textContent = error.message || "Quest data could not be loaded.";
    byId("load-error").hidden = false;
  }
}

start();
