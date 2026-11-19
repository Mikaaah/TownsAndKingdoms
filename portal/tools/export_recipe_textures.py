#!/usr/bin/env python3
"""Build recipe sprite sheets from the pack's exact Minecraft and mod resources.

Supply the Minecraft 1.21.1 client and the mod JARs referenced by TK3/manifest.json.
The handbook build uses the checked-in lookup and WebP files without those JARs.
"""
from __future__ import annotations

import argparse
from collections import Counter
import json
from pathlib import Path
import re
import sys

import numpy as np
from PIL import Image

PORTAL = Path(__file__).resolve().parents[1]
REPO = PORTAL.parent
PACK = REPO / 'TK3/kubejs'
DATA = PORTAL / 'src/data'
PUBLIC = PORTAL / 'public'
OUTPUT = PUBLIC / 'media/recipe-textures'
TILE_SIZE = 32
COLUMNS = 16

sys.path.insert(0, str(REPO / 'TK3/tools'))
from export_weapon_icons import AssetStore, IconExporter, NATIVE_GUI_MODELS

sys.path.insert(0, str(PORTAL / 'scripts'))
from import_ponder import obj_parts


class RecipeAssetStore(AssetStore):
    def add_archive(self, archive, source):
        super().add_archive(archive, source)
        for member in archive.namelist():
            if member.startswith('assets/') and member.endswith(('.obj', '.mtl')):
                self.files[member] = (archive, member, source)

    def raw(self, key):
        local = PACK / key
        return local.read_bytes() if local.is_file() else super().raw(key)


class RecipeIconExporter(IconExporter):
    """Extend the inventory renderer with the recipe registry's mesh loaders."""

    def resolve(self, data, stack, resources=None):
        loader = data.get('loader')
        if loader in {'neoforge:composite', 'neoforge:obj'}:
            data = {key: value for key, value in data.items() if key != 'loader'}
            data['_recipe_loader'] = loader
        return super().resolve(data, stack, resources)

    def faces(self, data):
        loader = data.get('_recipe_loader')
        if loader == 'neoforge:composite':
            faces = []
            for name, child in data['children'].items():
                if data.get('visibility', {}).get(name, True):
                    faces.extend(self.faces(self.resolve(child, ()))[0])
            return faces, set()
        if loader == 'neoforge:obj':
            faces = []
            for part in obj_parts(ObjMaterials(self), data):
                if not part['texture']:
                    raise ValueError('OBJ face uses a missing texture')
                image, _ = self.texture(part['texture'])
                points = np.asarray(part['vertices']).reshape(-1, 3, 3) * 16
                uv = np.asarray(part['uvs']).reshape(-1, 3, 2)
                for triangle, mapping in zip(points, uv):
                    # The shared rasterizer expects four corners. Repeat the
                    # final corner so its second triangle has no area.
                    corners = [0, 1, 2, 2]
                    faces.append((triangle[corners], mapping[corners], image, 'front'))
            if not faces:
                raise ValueError('OBJ model has no supported faces')
            return faces, set()
        return super().faces(data)

    def export(self, item_id):
        namespace, name = item_id.split(':', 1)
        try:
            model = self.model(NATIVE_GUI_MODELS.get(item_id, namespace + ':item/' + name))
        except ValueError:
            return super().export(item_id)
        if model.get('_recipe_loader'):
            faces, resources = self.faces(model)
            if faces:
                return self.rasterize(faces, model), resources, model['_recipe_loader']
        return super().export(item_id)


class ObjMaterials:
    """Adapt the Ponder parser without writing standalone texture files."""

    def __init__(self, exporter):
        self.exporter = exporter

    def bytes(self, path):
        return self.exporter.store.raw(path)

    def resolve(self, value, textures):
        return self.exporter.resolve_texture(value, textures)

    def texture(self, name):
        return name


def read(path):
    return json.loads(path.read_text())


def stacks(entries):
    for entry in entries:
        if not isinstance(entry, dict):
            continue
        key = entry.get('id') or entry.get('item') or entry.get('fluid')
        if isinstance(key, str) and ':' in key and not entry.get('tag'):
            yield key, entry.get('kind') == 'fluid' or 'fluid' in entry
        for key in ('options', 'base', 'subtracted'):
            nested = entry.get(key)
            if nested:
                yield from stacks(nested if isinstance(nested, list) else [nested])


def recipe_items(recipes):
    for recipe in recipes:
        yield from stacks(recipe['outputs'])
        yield from stacks(recipe['ingredients'])
        transition = recipe['recipe'].get('transitional_item')
        if transition:
            yield from stacks([transition])


def existing_art():
    artwork = {}
    icons = read(REPO / 'TK3/registry/ponder_assets.json')['icons']
    for item, icon in icons.items():
        if icon and not icon.get('animated'):
            artwork[item] = icon['url']
    for weapon in read(DATA / 'weapons.json'):
        if weapon.get('icon'):
            artwork[weapon['id']] = weapon['icon'].lstrip('/')
    artwork.update({
        'kubejs:makeshift_kinetic_mechanism': 'media/recipes/makeshift_kinetic_mechanism.png',
        'kubejs:reinforced_mechanism': 'media/recipes/reinforced_mechanism.png',
        'kubejs:creation_core': 'media/recipes/creation_core.png',
        'kubejs:unstable_creation_core': 'media/recipes/unstable_creative_core.png',
    })
    return {item: path for item, path in artwork.items() if (PUBLIC / path).is_file()}


def pack_models():
    """Resolve inventory models created by the pack's KubeJS registrations."""
    models = {}
    items = (PACK / 'startup_scripts/01_items.js').read_text()
    blocks = (PACK / 'startup_scripts/02_blocks.js').read_text()
    fields = r"\[\s*'([a-z0-9_]+)'\s*,\s*'([a-z0-9_]+:(?:item|block)/[a-z0-9_/]+)'\s*,\s*'"
    item_fields = r"event\.create\('([a-z0-9_]+)'\)(?:\s*\.\w+\([^()]*\))*?\s*\.texture\('([a-z0-9_]+:item/[a-z0-9_/]+)'\)"
    for item, art in re.findall(fields, items) + re.findall(item_fields, items):
        models['kubejs:' + item] = {'_generated': True, 'textures': {'layer0': art}}
    parents = r"event\.create\('([a-z0-9_]+)'\)(?:\s*\.\w+\([^()]*\))*?\s*\.parentModel\('([a-z0-9_]+:item/[a-z0-9_/]+)'\)"
    for item, model in re.findall(parents, items):
        models['kubejs:' + item] = {'parent': model}
    for cell in re.findall(r"""['"](kubejs:infinity_[a-z0-9_]+_cell)['"]""", items):
        models[cell] = {
            'parent': 'extendedae:item/infinity_cobblestone_cell',
            'textures': {'layer0': 'extendedae:item/infinity_cell_cobble', 'layer1': 'ae2:item/storage_cell_led'},
        }
    for name, output in re.findall(r"name:\s*'([a-z0-9_]+)'[^{}]*(?:\{[^{}]*\}[^{}]*)?output:\s*'((?:ae2|extendedae):[a-z0-9_]+)'", items):
        models.setdefault('kubejs:incomplete_' + name, {
            '_generated': True, 'textures': {'layer0': output.replace(':', ':item/', 1)},
        })
    for item, art in re.findall(fields, blocks):
        if item == art.removeprefix('kubejs:block/'):
            models['kubejs:' + item] = {
                'parent': 'minecraft:block/cube_all',
                'textures': {'all': art},
            }
    frames = PACK / 'assets/kubejs/models/block/tk3_frames'
    for frame in frames.glob('*.json'):
        item = 'calculation_machine' if frame.stem == 'tk3_calculation_machine' else frame.stem
        models['kubejs:' + item] = {'parent': 'kubejs:block/tk3_frames/' + frame.stem}
    models['kubejs:ore_generator_catalyst'] = {'parent': 'kubejs:block/endgame/ore_generator_catalyst'}
    models['minecraft:chest'] = chest_model()
    batch = read(PACK / 'pack_data/prepared_batch_items.json')
    for entry in batch['items']:
        model = batch['model']
        models[entry['id']] = {**model, 'textures': {**model['textures'], 'label': entry['texture']}}
    return models


def chest_model():
    # Minecraft 1.21.1 ChestRenderer uses this closed chest model and a 64 px
    # cube-net texture. Its item model delegates to the block entity renderer.
    atlas = 'minecraft:entity/chest/normal'
    elements = []
    for (x, y, z), (width, height, depth), v in [
        ((1, 0, 1), (14, 10, 14), 19),
        ((1, 9, 1), (14, 5, 14), 0),
        ((7, 7, 15), (2, 4, 1), 0),
    ]:
        top = v + depth
        edge = depth + width
        strip = {
            'up': [depth, v, edge, top],
            'down': [edge, v, edge + width, top],
            'west': [0, top, depth, top + height],
            'north': [depth, top, edge, top + height],
            'east': [edge, top, edge + depth, top + height],
            'south': [edge + depth, top, edge + depth + width, top + height],
        }
        elements.append({
            'from': [x, y, z], 'to': [x + width, y + height, z + depth],
            'faces': {side: {'texture': atlas, 'uv': [value / 4 for value in points]}
                      for side, points in strip.items()},
        })
    return {'display': {'gui': {'rotation': [30, 45, 0]}}, 'elements': elements}


def from_pack_model(exporter, model):
    data = exporter.resolve(model, ())
    if data.get('elements') or data.get('_recipe_loader'):
        faces, _ = exporter.faces(data)
        return exporter.rasterize(faces, data)
    return exporter.flat_icon(data)[0]


def fluid_texture(exporter, item):
    namespace, name = item.split(':', 1)
    for folder, filename in (
        ('fluid', name + '_still'),
        ('fluid', name),
        ('block', name + '_still'),
        ('block/fluid', name + '_still'),
        ('block/fluid', name),
    ):
        try:
            return exporter.texture(f'{namespace}:{folder}/{filename}')[0]
        except ValueError:
            continue
    raise ValueError('No exact still texture for fluid')


def tile(image):
    image = image.copy()
    image.thumbnail((TILE_SIZE, TILE_SIZE), Image.Resampling.NEAREST)
    result = Image.new('RGBA', (TILE_SIZE, TILE_SIZE))
    result.alpha_composite(image, ((TILE_SIZE - image.width) // 2, (TILE_SIZE - image.height) // 2))
    return result


def write_sheets(tiles, lookup):
    OUTPUT.mkdir(parents=True, exist_ok=True)
    capacity = COLUMNS ** 2
    for index, start in enumerate(range(0, len(tiles), capacity)):
        sheet = Image.new('RGBA', ((COLUMNS * TILE_SIZE,) * 2))
        for cell, (item, image) in enumerate(tiles[start:start + capacity]):
            row, column = divmod(cell, COLUMNS)
            sheet.alpha_composite(image, (column * TILE_SIZE, row * TILE_SIZE))
            lookup[item] = [index, column, row]
        sheet.save(OUTPUT / f'items-{index}.webp', lossless=True, method=6)
    count = (len(tiles) + capacity - 1) // capacity
    for stale in OUTPUT.glob('items-*.webp'):
        if stale.stem.removeprefix('items-').isdigit() and int(stale.stem.removeprefix('items-')) >= count:
            stale.unlink()


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--input', action='append', type=Path, default=[],
                        help='Minecraft or mod JAR, or KubeJS resource ZIP. Later archives take priority.')
    parser.add_argument('--input-dir', action='append', type=Path, default=[],
                        help='Read the pinned mod JARs from this directory, before individual inputs.')
    parser.add_argument('--report', type=Path, help='Optional resource and coverage report.')
    args = parser.parse_args()
    paths = [path for directory in args.input_dir for path in sorted(directory.glob('*.jar'))] + args.input
    if not paths:
        parser.error('Supply the Minecraft client and installed mod resource archives')
    store = RecipeAssetStore(paths)
    exporter = RecipeIconExporter(store, size=48)
    items = Counter(recipe_items(read(DATA / 'recipes.json')))
    reused = existing_art()
    models = pack_models()
    found = {}
    tiles = []
    missing = {}
    try:
        for item, fluid in sorted(items):
            key = 'fluid:' + item if fluid else item
            try:
                if fluid:
                    image = fluid_texture(exporter, item)
                elif item in reused and '/ponder/' not in reused[item]:
                    found[item] = reused[item]
                    continue
                elif item in models:
                    image = from_pack_model(exporter, models[item])
                else:
                    image = exporter.export(item)[0]
                tiles.append((key, tile(image)))
            except (ValueError, KeyError, TypeError) as error:
                if not fluid and item in reused:
                    found[item] = reused[item]
                else:
                    missing[key] = str(error)
        write_sheets(tiles, found)
        (DATA / 'recipe-textures.json').write_text(json.dumps(dict(sorted(found.items())), separators=(',', ':')) + '\n')
        summary = {'recipeIDs': len(items), 'texturedIDs': len(found),
                   'spriteTiles': len(tiles), 'existingArtwork': len(found) - len(tiles),
                   'texturedOccurrences': sum(count for (item, fluid), count in items.items()
                                              if ('fluid:' + item if fluid else item) in found),
                   'totalOccurrences': sum(items.values())}
        if args.report:
            args.report.write_text(json.dumps({**summary, 'archives': store.sources, 'missing': missing}, indent=2) + '\n')
        print(json.dumps(summary))
    finally:
        store.close()


if __name__ == '__main__':
    main()
