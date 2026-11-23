export function screenToWorld(camera, { x, y }) {
  return {
    x: (x - camera.x) / camera.scale,
    y: (y - camera.y) / camera.scale,
  };
}

export function worldToScreen(camera, { x, y }) {
  return {
    x: x * camera.scale + camera.x,
    y: y * camera.scale + camera.y,
  };
}

export function zoomAt(camera, anchor, scale, min = 8, max = 180) {
  const point = screenToWorld(camera, anchor);
  const nextScale = Math.max(min, Math.min(max, scale));
  return {
    x: anchor.x - point.x * nextScale,
    y: anchor.y - point.y * nextScale,
    scale: nextScale,
  };
}

export function boundsFor(nodes) {
  if (!nodes.length) {
    return { minX: -1, minY: -1, maxX: 1, maxY: 1 };
  }

  return nodes.reduce((bounds, node) => {
    const halfWidth = (node.width ?? node.size ?? 1) / 2;
    const halfHeight = (node.height ?? node.size ?? 1) / 2;
    return {
      minX: Math.min(bounds.minX, node.x - halfWidth),
      minY: Math.min(bounds.minY, node.y - halfHeight),
      maxX: Math.max(bounds.maxX, node.x + halfWidth),
      maxY: Math.max(bounds.maxY, node.y + halfHeight),
    };
  }, { minX: Infinity, minY: Infinity, maxX: -Infinity, maxY: -Infinity });
}

export function fitBounds(bounds, viewport, padding = 48, min = 4, max = 96) {
  const availableWidth = Math.max(1, viewport.width - 2 * padding);
  const availableHeight = Math.max(1, viewport.height - 2 * padding);
  const width = Math.max(1, bounds.maxX - bounds.minX);
  const height = Math.max(1, bounds.maxY - bounds.minY);
  const scale = Math.max(min, Math.min(max, availableWidth / width, availableHeight / height));
  return {
    x: viewport.width / 2 - scale * (bounds.minX + bounds.maxX) / 2,
    y: viewport.height / 2 - scale * (bounds.minY + bounds.maxY) / 2,
    scale,
  };
}

export function marqueeRect(start, end) {
  return {
    left: Math.min(start.x, end.x),
    top: Math.min(start.y, end.y),
    right: Math.max(start.x, end.x),
    bottom: Math.max(start.y, end.y),
  };
}

export function marqueeSelection(nodes, camera, start, end) {
  const rect = marqueeRect(start, end);
  return nodes.filter((node) => {
    const point = worldToScreen(camera, node);
    const halfWidth = camera.scale * (node.width ?? node.size ?? 1) / 2;
    const halfHeight = camera.scale * (node.height ?? node.size ?? 1) / 2;
    return point.x + halfWidth >= rect.left
      && point.x - halfWidth <= rect.right
      && point.y + halfHeight >= rect.top
      && point.y - halfHeight <= rect.bottom;
  }).map((node) => node.id);
}

export function snap(value, spacing = 0.25) {
  if (!spacing) return value;
  return round(Math.round(value / spacing) * spacing);
}

export function round(value, digits = 4) {
  const multiplier = 10 ** digits;
  const rounded = Math.round(value * multiplier) / multiplier;
  return rounded === 0 ? 0 : rounded;
}

const LAYOUT_FORMAT = "tnk3-quest-layout";
const LAYOUT_VERSION = 1;

export function isEditableDecoration(image) {
  return !image.sprite && Boolean(image.labelArt || image.textOnImage || image.labelsOnImage);
}

function samePosition(left, right) {
  return left.x === right.x && left.y === right.y && left.rotation === right.rotation;
}

function readPosition(record, kind, fallbackRotation = 0) {
  if (!Number.isFinite(record.x) || !Number.isFinite(record.y)) {
    throw new Error(`${kind} ${record.id} needs finite x and y coordinates.`);
  }
  const point = { x: record.x, y: record.y };
  if (kind === "Decoration") {
    const rotation = record.rotation === undefined ? fallbackRotation : record.rotation;
    if (!Number.isFinite(rotation)) {
      throw new Error(`Decoration ${record.id} needs a finite rotation.`);
    }
    const angle = rotation % 360;
    point.rotation = angle >= 180 ? angle - 360 : angle < -180 ? angle + 360 : angle || 0;
  }
  return point;
}

function makeGroup(records, kind, file, retired = []) {
  const originals = new Map();
  for (const record of records) {
    if (originals.has(record.id)) {
      throw new Error(`Duplicate ${kind.toLowerCase()} ${record.id} in chapter ${file}.`);
    }
    originals.set(record.id, readPosition(record, kind));
  }
  return { file, kind, originals, overrides: new Map(), retired: new Set(retired) };
}

function exportChanges(group) {
  const records = [];
  for (const id of group.originals.keys()) {
    const point = group.overrides.get(id);
    if (point) records.push({ id, ...point });
  }
  return records;
}

export class LayoutModel {
  #pack;
  #sourceId;
  #retiredChapters;
  #chapters = new Map();
  #past = [];
  #future = [];

  constructor(dataset) {
    this.#pack = dataset.pack;
    this.#sourceId = dataset.sourceId;
    this.#retiredChapters = new Set(dataset.retiredChapterIds ?? []);
    for (const chapter of dataset.chapters) {
      if (this.#chapters.has(chapter.id)) {
        throw new Error(`Duplicate chapter ${chapter.id}.`);
      }
      this.#chapters.set(chapter.id, {
        file: chapter.file,
        quests: makeGroup(chapter.quests, "Quest", chapter.file, chapter.retiredQuestIds),
        decorations: makeGroup((chapter.images ?? []).filter(isEditableDecoration), "Decoration", chapter.file),
      });
    }
  }

  get canUndo() {
    return this.#past.length > 0;
  }

  get canRedo() {
    return this.#future.length > 0;
  }

  get undoLabel() {
    return this.#past.at(-1)?.label ?? "";
  }

  get redoLabel() {
    return this.#future.at(-1)?.label ?? "";
  }

  position(chapterId, questId) {
    return { ...this.#position(this.#chapter(chapterId).quests, questId) };
  }

  move(chapterId, updates, label = "Move quests") {
    return this.#commit(this.#readUpdates(this.#chapter(chapterId).quests, updates), label);
  }

  decorationPosition(chapterId, decorationId) {
    return { ...this.#position(this.#chapter(chapterId).decorations, decorationId) };
  }

  moveDecorations(chapterId, updates, label = "Move decorations") {
    return this.#commit(this.#readUpdates(this.#chapter(chapterId).decorations, updates), label);
  }

  undo() {
    const edit = this.#past.pop();
    if (!edit) return false;
    this.#apply(edit.changes, "before");
    this.#future.push(edit);
    return true;
  }

  redo() {
    const edit = this.#future.pop();
    if (!edit) return false;
    this.#apply(edit.changes, "after");
    this.#past.push(edit);
    return true;
  }

  reset(chapterId) {
    const chapters = chapterId === undefined
      ? this.#chapters.values()
      : [this.#chapter(chapterId)];
    const changes = [];
    for (const chapter of chapters) {
      this.#resetGroup(chapter.quests, changes);
      this.#resetGroup(chapter.decorations, changes);
    }
    return this.#commit(changes, "Reset layout");
  }

  changedCount(chapterId) {
    const chapters = chapterId === undefined
      ? this.#chapters.values()
      : [this.#chapter(chapterId)];
    let count = 0;
    for (const chapter of chapters) {
      count += chapter.quests.overrides.size + chapter.decorations.overrides.size;
    }
    return count;
  }

  export() {
    const chapters = [];
    for (const [id, chapter] of this.#chapters) {
      if (!chapter.quests.overrides.size && !chapter.decorations.overrides.size) continue;
      const patch = { id, file: chapter.file, quests: exportChanges(chapter.quests) };
      if (chapter.decorations.overrides.size) patch.decorations = exportChanges(chapter.decorations);
      chapters.push(patch);
    }
    return {
      format: LAYOUT_FORMAT,
      version: LAYOUT_VERSION,
      pack: this.#pack,
      sourceId: this.#sourceId,
      chapters,
    };
  }

  import(payload, { replace = false, recordHistory = true } = {}) {
    const layout = typeof payload === "string" ? JSON.parse(payload) : payload;
    if (!layout || layout.format !== LAYOUT_FORMAT || layout.version !== LAYOUT_VERSION) {
      throw new Error("This file is not a supported TNK quest layout.");
    }
    if (layout.pack !== this.#pack || layout.sourceId !== this.#sourceId) {
      throw new Error("This layout was exported for a different quest dataset.");
    }
    if (!Array.isArray(layout.chapters)) {
      throw new Error("The layout needs a chapters array.");
    }

    const changes = [];
    const seenChapters = new Set();
    const specified = new Map();
    for (const patch of layout.chapters) {
      if (!patch || typeof patch.id !== "string") {
        throw new Error("Each layout chapter needs an ID.");
      }
      if (seenChapters.has(patch.id)) {
        throw new Error(`Layout chapter ${patch.id} appears more than once.`);
      }
      seenChapters.add(patch.id);
      if (!this.#chapters.has(patch.id) && this.#retiredChapters.has(patch.id)) continue;
      const chapter = this.#chapter(patch.id);
      if (patch.file !== chapter.file) {
        throw new Error(`The layout filename does not match chapter ${patch.id}.`);
      }
      const seenQuests = new Set();
      const seenDecorations = new Set();
      changes.push(...this.#readUpdates(chapter.quests, patch.quests, seenQuests, true));
      const decorations = patch.decorations === undefined ? [] : patch.decorations;
      changes.push(...this.#readUpdates(chapter.decorations, decorations, seenDecorations, true));
      if (replace) {
        specified.set(chapter.quests, seenQuests);
        specified.set(chapter.decorations, seenDecorations);
      }
    }
    if (replace) {
      for (const chapter of this.#chapters.values()) {
        this.#resetGroup(chapter.quests, changes, specified.get(chapter.quests));
        this.#resetGroup(chapter.decorations, changes, specified.get(chapter.decorations));
      }
    }
    return this.#commit(changes, "Import layout", recordHistory);
  }

  #chapter(id) {
    const chapter = this.#chapters.get(id);
    if (!chapter) throw new Error(`Unknown chapter ${id}.`);
    return chapter;
  }

  #position(group, id) {
    const point = group.overrides.get(id) ?? group.originals.get(id);
    if (!point) throw new Error(`Unknown ${group.kind.toLowerCase()} ${id} in chapter ${group.file}.`);
    return point;
  }

  #readUpdates(group, updates, seen = new Set(), importing = false) {
    if (!Array.isArray(updates)) {
      throw new Error(`Chapter ${group.file} needs a ${group.kind.toLowerCase()}s array.`);
    }
    const changes = [];
    for (const update of updates) {
      if (!update || typeof update.id !== "string") {
        throw new Error(`Each ${group.kind.toLowerCase()} in chapter ${group.file} needs an ID.`);
      }
      if (seen.has(update.id)) {
        throw new Error(`${group.kind} ${update.id} appears more than once in chapter ${group.file}.`);
      }
      seen.add(update.id);
      if (importing && !group.originals.has(update.id) && group.retired.has(update.id)) continue;
      const before = this.#position(group, update.id);
      const fallbackRotation = importing ? group.originals.get(update.id).rotation : before.rotation;
      const after = readPosition(update, group.kind, fallbackRotation);
      if (!samePosition(before, after)) {
        changes.push({ group, id: update.id, before, after });
      }
    }
    return changes;
  }

  #resetGroup(group, changes, keep) {
    for (const [id, before] of group.overrides) {
      if (!keep?.has(id)) {
        changes.push({ group, id, before, after: group.originals.get(id) });
      }
    }
  }

  #apply(changes, direction) {
    for (const { group, id, [direction]: point } of changes) {
      if (samePosition(point, group.originals.get(id))) {
        group.overrides.delete(id);
      } else {
        group.overrides.set(id, point);
      }
    }
  }

  #commit(changes, label, recordHistory = true) {
    if (!changes.length) return false;
    this.#apply(changes, "after");
    if (recordHistory) this.#past.push({ changes, label });
    else this.#past.length = 0;
    this.#future.length = 0;
    return true;
  }
}
