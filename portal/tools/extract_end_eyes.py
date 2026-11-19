#!/usr/bin/env python3
"""Build the End guide from the pack’s boss-only eye assignments."""
from __future__ import annotations

import hashlib
import json
import struct
from pathlib import Path

PORTAL = Path(__file__).resolve().parents[1]
REPO = PORTAL.parent
REFERENCE = REPO / 'TK3/reference/endremastered'
CONFIG = REPO / 'TK3/config/EndRemastered-NeoForge'
ICONS = PORTAL / 'public/images/eyes'


def read(path):
    return json.loads(path.read_text())


def label(identifier):
    return identifier.split(':')[-1].replace('_', ' ').title()


native = read(REFERENCE / 'native_rules.json')
encounters = read(REFERENCE / 'encounters.json')
animations = read(REFERENCE / 'eye_animations.json')
manifest = {row['projectID']: row['fileID'] for row in read(REPO / 'TK3/manifest.json')['files']}
for source in native['sources']:
    if manifest.get(source['projectID']) != source['fileID']:
        raise ValueError(f"Reverify native End guide facts after changing project {source['projectID']}")

tables = read(REPO / 'TK3/kubejs/pack_data/server_tables.json')
bosses = {row['id']: row for row in read(PORTAL / 'src/data/bosses.json')}
rules = read(CONFIG / 'endrem.json')
assignments = tables['gameplay_drops_191']
eye_configs = {f'endrem:{row["id"]}': row for path in sorted((CONFIG / 'Eyes').glob('*.json')) if (row := read(path))}
if len(assignments) != 16 or len({row[0] for row in assignments}) != 16 or set(eye_configs) != {row[0] for row in assignments}:
    raise ValueError('The guide requires all 16 unique eye assignments and matching eye definitions')
if rules['USE_EYE_OF_ENDER'] or not rules['THROW_EYE_OF_ENDER'] or rules['FRAME_HAS_RANDOM_EYE'] or rules['EYE_BREAK_PROBABILITY'] != 10:
    raise ValueError('Reverify portal instructions after changing End Remastered portal settings')

for eye, definition in eye_configs.items():
    if definition['loot_tables_id'] or definition['loot_to_inject_id'] != 'minecraft:empty':
        raise ValueError(f'Default loot for {eye} must be disabled')

if rules['IS_CRYPTIC_EYE_OBTAINABLE'] or rules['IS_EVIL_EYE_OBTAINABLE']:
    raise ValueError('Default enchanting and trading eye sources must be disabled')

recipe_overrides = []
for recipe in native['recipes'].keys() - set(tables['restrictions_removeRecipesById_52']):
    namespace, target = recipe.split(':', 1)
    override = REPO / 'TK3/kubejs/data' / namespace / 'recipe' / f'{target}.json'
    if not override.is_file() or {'type': 'neoforge:false'} not in read(override).get('neoforge:conditions', []):
        raise ValueError(f'Default eye recipe {recipe} must be disabled')
    recipe_overrides.append(override)

loot_overrides = set()
for injection in native['globalInjections']:
    table = injection['table']
    pools = native['lootTables'][table]['pools']
    if any(entry.get('name') in eye_configs for pool in pools for entry in pool['entries']):
        namespace, target = table.split(':', 1)
        override = REPO / 'TK3/kubejs/data' / namespace / 'loot_table' / f'{target}.json'
        if not override.is_file() or read(override).get('pools') != []:
            raise ValueError(f'Default eye loot table {table} requires an empty override')
        loot_overrides.add(override)

result = []
animated_icons = set()
for eye, boss in assignments:
    if boss not in bosses or boss not in encounters:
        raise ValueError(f'Encounter notes and registry entry required for {boss}')
    encounter = encounters[boss]
    icon_name = eye.split(':')[1]
    with (ICONS / f'{icon_name}.png').open('rb') as image:
        header = image.read(24)
    if header[:16] != b'\x89PNG\r\n\x1a\n\x00\x00\x00\rIHDR':
        raise ValueError(f'Expected a PNG for {eye}')
    width, height = struct.unpack('>II', header[16:])
    record = {'id': eye, 'name': label(eye), 'bossId': boss,
              'bossName': encounter.get('bossName', bosses[boss]['name']),
              'minimumLevel': bosses[boss]['minimumLevel'],
              'classification': bosses[boss]['classification'],
              'icon': f'images/eyes/{icon_name}.png',
              'url': f'/bosses/#eye-{icon_name}',
              **{key: encounter[key] for key in ['dimension', 'location', 'activation', 'preparation']},
              'summonItems': encounter.get('summonItems', []),
              'notableRewards': encounter.get('nativeRewards', []),
              'rewardPool': bosses[boss]['rewards'],
              'sourceNotes': ['TK3/kubejs/pack_data/server_tables.json:gameplay_drops_191',
                              'TK3/kubejs/server_scripts/05_loot.js:End Remastered boss eyes',
                              f'TK3/config/EndRemastered-NeoForge/Eyes/{eye.split(":")[1]}.json',
                              *encounter['sourceNotes']]}
    if height != width:
        frame_ticks = animations.get(icon_name, {}).get('animation', {}).get('frametime')
        if not width or height % width or height < width or not isinstance(frame_ticks, int) or frame_ticks <= 0:
            raise ValueError(f'Invalid vertical sprite or timing for {eye}')
        frame_count = height // width
        record['animation'] = {'frames': frame_count, 'durationMs': frame_count * frame_ticks * 50}
        animated_icons.add(icon_name)
    result.append(record)
if animated_icons != set(animations):
    raise ValueError('Eye sprite sheets must match their native animation metadata')

(PORTAL / 'src/data/end-eyes.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
inputs = [REPO / 'TK3/manifest.json', REPO / 'TK3/kubejs/pack_data/server_tables.json',
          REPO / 'TK3/kubejs/server_scripts/05_loot.js', *sorted(loot_overrides), *sorted(recipe_overrides),
          PORTAL / 'src/data/bosses.json', *sorted(CONFIG.rglob('*.json')),
          REFERENCE / 'native_rules.json', REFERENCE / 'encounters.json',
          REFERENCE / 'eye_animations.json', *sorted(ICONS.glob('*.png'))]
provenance = {str(path.relative_to(REPO)): hashlib.sha256(path.read_bytes()).hexdigest() for path in inputs}
(REFERENCE / 'input_hashes.json').write_text(json.dumps(provenance, indent=2) + '\n')
print(f'Extracted {len(result)} End eyes and their assigned bosses.')
