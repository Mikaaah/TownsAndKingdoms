"""Project the pack's Unidentified Loot rules into the handbook catalog."""
from __future__ import annotations

import json
import re
from pathlib import Path

# LevelTierRoll chooses an equipment tier before filtering by category and origin.
LEVEL_GROUPS = (
    (1, 10, ((0, 75), (1, 25))),
    (11, 30, ((0, 50), (1, 35), (2, 15))),
    (31, 50, ((1, 50), (2, 35), (3, 15))),
    (51, 70, ((2, 50), (3, 35), (4, 15))),
    (71, 80, ((3, 50), (4, 35), (5, 15))),
    (81, 94, ((4, 50), (5, 35), (6, 15))),
    (95, 100, ((5, 60), (6, 35), (7, 5))),
)
DIMENSION_NAMES = {
    'aether:the_aether': 'Aether',
    'twilightforest:twilight_forest': 'Twilight Forest',
    'minecraft:the_nether': 'Nether',
    'minecraft:the_end': 'End',
    'deeperdarker:otherside': 'Otherside',
}
ITEM_TRANSLATION = re.compile(r'(?:item|block)\.([^.]+)\.(.+)')


def read(path: Path):
    return json.loads(path.read_text())


def catalog(pack: Path, metadata_path: Path, tiers_config: dict, boss_config: dict, dimensions: dict):
    names = read(metadata_path)['names']
    for path in sorted((pack / 'kubejs/assets').glob('*/lang/en_us.json')):
        for key, name in read(path).items():
            match = ITEM_TRANSLATION.fullmatch(key)
            if match and isinstance(name, str):
                namespace, item_path = match.groups()
                names[f'{namespace}:{item_path.replace(".", "/")}'] = name

    def name_of(item):
        return names.get(item) or re.sub(r'[/_]+', ' ', item.split(':', 1)[1]).title()

    item_policy = read(pack / 'kubejs/pack_data/pack_catalog.json')
    excluded = set(item_policy['fullyDisabledItems']) | set(item_policy['infiniteFoods'])
    dedicated = {
        row['item'] for pool in boss_config['pools'] for row in pool['items']
    } | {'mowziesmobs:earthrend_gauntlet'}
    dimension_routes = dimensions['routes'] if dimensions['enabled'] else []
    equipment = []
    for row in tiers_config['weapons']:
        item = row['item']
        if item in excluded or item in dedicated or not row.get('enabled', True) or row['weight'] <= 0:
            continue
        namespace = item.split(':', 1)[0]
        routes = [
            route['dimension'] for route in dimension_routes
            if namespace in route['item_namespaces'] or
            any(item.startswith(prefix) for prefix in route['item_prefixes'])
        ]
        equipment.append({
            'id': item, 'name': name_of(item), 'category': row['category'],
            'minTier': row['min_tier'], 'maxTier': row['max_tier'], 'dimensions': routes,
        })

    bosses = []
    for pool in boss_config['pools'] if boss_config['enabled'] else []:
        if not pool.get('enabled', True):
            continue
        items = [
            {'id': row['item'], 'name': name_of(row['item']), 'category': row['category'], 'weight': row['weight']}
            for row in pool['items'] if row['item'] not in excluded and row['weight'] > 0
        ]
        if items:
            bosses.append({
                'id': pool['entity'], 'name': pool['name'], 'tier': pool['tier'],
                'additionalIfNoEquipment': pool['additional_if_no_equipment'],
                'chance': pool['chance'], 'items': items,
            })

    return {
        'levelGroups': [
            {'id': f'levels-{low}-{high}', 'min': low, 'max': high,
             'tiers': [{'rank': rank, 'chance': chance} for rank, chance in weights]}
            for low, high, weights in LEVEL_GROUPS
        ],
        'tiers': [{key: tier[key] for key in ('id', 'name', 'rank')} for tier in tiers_config['tiers']],
        'dimensions': [
            {'id': row['dimension'], 'name': DIMENSION_NAMES.get(row['dimension'], name_of(row['dimension'])),
             'includeGlobal': row['include_global_equipment']}
            for row in dimension_routes
        ],
        'equipment': sorted(equipment, key=lambda row: (row['name'].casefold(), row['id'])),
        'bossPools': sorted(bosses, key=lambda row: (row['name'].casefold(), row['id'])),
        'bossRequiresPlayerKill': boss_config['require_player_kill'],
    }
