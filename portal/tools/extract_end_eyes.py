#!/usr/bin/env python3
"""Build the End guide from pack rules and verified native acquisition tables."""
from __future__ import annotations

import hashlib
import json
from pathlib import Path

PORTAL = Path(__file__).resolve().parents[1]
REPO = PORTAL.parent
REFERENCE = REPO / 'TK3/reference/endremastered'
CONFIG = REPO / 'TK3/config/EndRemastered-NeoForge'


def read(path):
    return json.loads(path.read_text())


def label(identifier):
    return identifier.split(':')[-1].replace('_', ' ').title()


native = read(REFERENCE / 'native_rules.json')
encounters = read(REFERENCE / 'encounters.json')
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

places = {
    'minecraft:chests/desert_pyramid': ('Desert Pyramid chests', 'Treasure'),
    'minecraft:chests/nether_bridge': ('Nether Fortress chests', 'Treasure'),
    'minecraft:chests/igloo_chest': ('Igloo basement chests', 'Treasure'),
    'minecraft:chests/jungle_temple': ('Jungle Temple chests', 'Treasure'),
    'minecraft:chests/buried_treasure': ('Buried Treasure chests', 'Treasure'),
    'minecraft:chests/abandoned_mineshaft': ('Abandoned Mineshaft chests', 'Treasure'),
    'minecraft:chests/pillager_outpost': ('Pillager Outpost chests', 'Treasure'),
    'minecraft:chests/bastion_treasure': ('Bastion treasure-room chests', 'Treasure'),
    'minecraft:entities/evoker': ('Evokers', 'Mob drop'),
    'minecraft:entities/elder_guardian': ('Elder Guardians', 'Mob drop'),
    'minecraft:entities/wither': ('Wither', 'Mob drop'),
    'minecraft:chests/shipwreck_treasure': ('Shipwreck treasure chests', 'Treasure'),
    'minecraft:chests/simple_dungeon': ('Monster Room chests', 'Treasure'),
}


def alternatives_from_pool(eye, boss, target, inject):
    if target == f'minecraft:entities/{boss.split(":")[-1]}' and boss.startswith('minecraft:'):
        return []  # The pack replaces this boss's native eye rolls with one guaranteed eye.
    if target not in places:
        raise ValueError(f'Give the new acquisition route {target} a player-facing description')
    loot = native['lootTables'].get(inject)
    if loot is None:
        raise ValueError(f'Native acquisition table needs verification: {inject}')
    result = []
    for pool in loot['pools']:
        if pool.get('rolls') != 1:
            raise ValueError(f'Reverify non-single-roll eye table {inject}')
        # Minecraft uses Codec.INT for entry weights. JsonOps truncates 2.5 to 2.
        entries = pool['entries']
        total = sum(int(entry.get('weight', 1)) for entry in entries)
        weight = sum(int(entry.get('weight', 1)) for entry in entries if entry.get('name') == eye)
        if not weight:
            continue
        name, kind = places[target]
        chance = weight / total
        # Avoid implying that a fractional authored weight is a 2.5% chance.
        display = f'{chance * 100:g}%' if chance * 100 == round(chance * 100, 6) else f'about {chance * 100:.2f}%'
        result.append({'name': name, 'kind': kind, 'detail': f'{display} chance per loot roll.',
                       'chance': chance, 'lootTable': target, 'injectedTable': inject})
    return result


result = []
for eye, boss in assignments:
    if boss not in bosses or boss not in encounters:
        raise ValueError(f'Encounter notes and registry entry required for {boss}')
    encounter = encounters[boss]
    definition = eye_configs[eye]
    alternatives = []
    for target in definition['loot_tables_id']:
        alternatives.extend(alternatives_from_pool(eye, boss, target, definition['loot_to_inject_id']))
    for injection in native['globalInjections']:
        for condition in injection['conditions']:
            target = condition.get('loot_table_id')
            if target in places:
                alternatives.extend(alternatives_from_pool(eye, boss, target, injection['table']))
    notes = []
    if eye in {'endrem:witch_eye', 'endrem:undead_eye'}:
        if eye not in tables['restrictions_removeRecipesById_52']:
            raise ValueError(f'Reverify restored eye crafting recipe {eye}')
        notes.append('The original crafting recipe is unavailable; use the boss route.')
    if eye == 'endrem:evil_eye':
        if rules['IS_EVIL_EYE_OBTAINABLE']:
            raise ValueError('Reverify restored Evil Eye cleric trade')
        notes.append('Clerics do not sell this eye.')
    if eye == 'endrem:cryptic_eye':
        if rules['IS_CRYPTIC_EYE_OBTAINABLE']:
            raise ValueError('Reverify restored Cryptic Eye enchanting route')
        notes.append('Enchanting does not award this eye.')
    if eye == 'endrem:exotic_eye':
        if eye in tables['restrictions_removeRecipesById_52']:
            raise ValueError('Reverify removed Exotic Eye recipe')
        recipe = native['recipes'][eye]
        if recipe['pattern'] != ['BCF', 'GEG', 'HCT']:
            raise ValueError('Reverify changed Exotic Eye crafting pattern')
        alternatives.append({'name': 'Exotic Eye crafting', 'kind': 'Crafting',
            'detail': 'Craft with one Eye of Ender, two Conduits, two Glow Ink Sacs, and one each of Bubble, Fire, Horn and Tube Coral. Use live coral items.',
            'recipeId': eye, 'pattern': recipe['pattern'], 'key': recipe['key']})
    record = {'id': eye, 'name': label(eye), 'bossId': boss,
              'bossName': encounter.get('bossName', bosses[boss]['name']),
              'minimumLevel': bosses[boss]['minimumLevel'],
              'classification': bosses[boss]['classification'],
              'icon': f'images/eyes/{eye.split(":")[1]}.png',
              'url': f'/bosses/#eye-{eye.split(":")[1]}',
              **{key: encounter[key] for key in ['dimension', 'location', 'activation', 'preparation']},
              'summonItems': encounter.get('summonItems', []),
              'alternatives': alternatives, 'notes': notes,
              'notableRewards': encounter.get('nativeRewards', []),
              'rewardPool': bosses[boss]['rewards'],
              'sourceNotes': ['TK3/kubejs/pack_data/server_tables.json:gameplay_drops_191',
                              'TK3/kubejs/server_scripts/05_loot.js:End Remastered boss eyes',
                              f'TK3/config/EndRemastered-NeoForge/Eyes/{eye.split(":")[1]}.json',
                              *encounter['sourceNotes']]}
    result.append(record)

(PORTAL / 'src/data/end-eyes.json').write_text(json.dumps(result, indent=2, ensure_ascii=False) + '\n')
inputs = [REPO / 'TK3/manifest.json', REPO / 'TK3/kubejs/pack_data/server_tables.json',
          PORTAL / 'src/data/bosses.json', *sorted(CONFIG.rglob('*.json')),
          REFERENCE / 'native_rules.json', REFERENCE / 'encounters.json']
provenance = {str(path.relative_to(REPO)): hashlib.sha256(path.read_bytes()).hexdigest() for path in inputs}
(REFERENCE / 'input_hashes.json').write_text(json.dumps(provenance, indent=2) + '\n')
print(f'Extracted {len(result)} End eyes and their verified acquisition routes.')
