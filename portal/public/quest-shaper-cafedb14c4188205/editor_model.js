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

function samePosition(left, right) {
  return left.x === right.x && left.y === right.y;
}

function readPosition(quest) {
  if (!Number.isFinite(quest.x) || !Number.isFinite(quest.y)) {
    throw new Error(`Quest ${quest.id} needs finite x and y coordinates.`);
  }
  return { x: quest.x, y: quest.y };
}

export class LayoutModel {
  #pack;
  #sourceId;
  #chapters = new Map();
  #past = [];
  #future = [];

  constructor(dataset) {
    this.#pack = dataset.pack;
    this.#sourceId = dataset.sourceId;
    for (const chapter of dataset.chapters) {
      if (this.#chapters.has(chapter.id)) {
        throw new Error(`Duplicate chapter ${chapter.id}.`);
      }
      const originals = new Map();
      for (const quest of chapter.quests) {
        if (originals.has(quest.id)) {
          throw new Error(`Duplicate quest ${quest.id} in chapter ${chapter.id}.`);
        }
        originals.set(quest.id, readPosition(quest));
      }
      this.#chapters.set(chapter.id, { file: chapter.file, originals, overrides: new Map() });
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
    const chapter = this.#chapter(chapterId);
    return { ...this.#position(chapter, questId) };
  }

  move(chapterId, updates, label = "Move quests") {
    const chapter = this.#chapter(chapterId);
    return this.#commit(this.#readUpdates(chapter, updates), label);
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
      for (const [id, before] of chapter.overrides) {
        changes.push({ chapter, id, before, after: chapter.originals.get(id) });
      }
    }
    return this.#commit(changes, "Reset layout");
  }

  changedCount(chapterId) {
    if (chapterId !== undefined) return this.#chapter(chapterId).overrides.size;
    let count = 0;
    for (const chapter of this.#chapters.values()) count += chapter.overrides.size;
    return count;
  }

  export() {
    const chapters = [];
    for (const [id, chapter] of this.#chapters) {
      if (!chapter.overrides.size) continue;
      const quests = [];
      for (const questId of chapter.originals.keys()) {
        const point = chapter.overrides.get(questId);
        if (point) quests.push({ id: questId, ...point });
      }
      chapters.push({ id, file: chapter.file, quests });
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
      const chapter = this.#chapter(patch.id);
      if (seenChapters.has(patch.id)) {
        throw new Error(`Layout chapter ${patch.id} appears more than once.`);
      }
      seenChapters.add(patch.id);
      if (patch.file !== chapter.file) {
        throw new Error(`The layout filename does not match chapter ${patch.id}.`);
      }
      const seenQuests = new Set();
      changes.push(...this.#readUpdates(chapter, patch.quests, seenQuests));
      if (replace) specified.set(chapter, seenQuests);
    }
    if (replace) {
      for (const chapter of this.#chapters.values()) {
        for (const [id, before] of chapter.overrides) {
          if (!specified.get(chapter)?.has(id)) {
            changes.push({ chapter, id, before, after: chapter.originals.get(id) });
          }
        }
      }
    }
    return this.#commit(changes, "Import layout", recordHistory);
  }

  #chapter(id) {
    const chapter = this.#chapters.get(id);
    if (!chapter) throw new Error(`Unknown chapter ${id}.`);
    return chapter;
  }

  #position(chapter, id) {
    const point = chapter.overrides.get(id) ?? chapter.originals.get(id);
    if (!point) throw new Error(`Unknown quest ${id} in chapter ${chapter.file}.`);
    return point;
  }

  #readUpdates(chapter, updates, seen = new Set()) {
    if (!Array.isArray(updates)) {
      throw new Error(`Chapter ${chapter.file} needs a quests array.`);
    }
    const changes = [];
    for (const update of updates) {
      if (!update || typeof update.id !== "string") {
        throw new Error(`Each quest in chapter ${chapter.file} needs an ID.`);
      }
      if (seen.has(update.id)) {
        throw new Error(`Quest ${update.id} appears more than once in chapter ${chapter.file}.`);
      }
      seen.add(update.id);
      const before = this.#position(chapter, update.id);
      const after = readPosition(update);
      if (!samePosition(before, after)) {
        changes.push({ chapter, id: update.id, before, after });
      }
    }
    return changes;
  }

  #apply(changes, direction) {
    for (const { chapter, id, [direction]: point } of changes) {
      if (samePosition(point, chapter.originals.get(id))) {
        chapter.overrides.delete(id);
      } else {
        chapter.overrides.set(id, point);
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
