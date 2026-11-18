#!/usr/bin/env python3
"""Check documentation coverage, displayed stats and published catalogue parity."""
from collections import Counter
from pathlib import Path
import csv
import json
import re

PACK=Path(__file__).resolve().parents[1]
SOURCE=PACK/'handbook-source/current'
catalogue=json.loads((SOURCE/'data/weapons.json').read_text())
items=catalogue['items'];meta=catalogue['meta']
assert len(items)==meta['totalEntries']
assert len({item['id']for item in items})==len(items)
fields=['damage_bonus','speed_bonus','armor_negation','impact','max_strikes']
status_counts=Counter(item['status']for item in items)
assert status_counts['excluded']==meta['excludedCount']==14
assert {item['id']for item in items if item['status']=='provisional'}=={'wom:agony','wom:ruine'}
counts=Counter(item['kind']for item in items if item['status']!='excluded')
assert dict(counts)==meta['categoryCounts']
assert counts['Melee weapon']+counts['Ranged weapon']==meta['weaponCount']
assert counts['Shield']==meta['shieldCount']
assert sum(item['base_stats']is not None for item in items)==meta['baseItemStatsCount']
mapping_counts=Counter(item['mapping_status']for item in items)
assert mapping_counts['explicit']==meta['totalExplicit']
assert mapping_counts['automatic']==meta['knownAutomaticMappings']
assert mapping_counts['unverified']==meta['unverifiedStyleEntries']
by_id={item['id']:item for item in items}
locks={'simplyswords:whisperwind':'epicfight_dd:backhand_blade',
       'simplyswords:brimstone_claymore':'epicfight_dd:light_greatsword',
       'celestisynth:breezebreaker':'epicfight_dd:florett'}
for item,weapon_type in locks.items():assert by_id[item]['weapon_type']==weapon_type
for item in items:
    assert re.fullmatch(r'[a-z0-9_.-]+:[a-z0-9_./-]+',item['id']),item['id']
    if item['mapping_status']=='unverified':
        assert item['weapon_type']is None and not item['bonuses']and item['capability']is None,item['id']
    if item['weapon_type']:
        assert re.fullmatch(r'[a-z0-9_.-]+:[a-z0-9_./-]+',item['weapon_type'])
    if item['capability']is not None:
        assert item['capability']['type']==item['weapon_type'],item['id']
        attrs=item['capability'].get('attributes',{});common=attrs.get('common',{})
        actual={row['style'].lower().replace(' ','_'):row for row in item['bonuses']}
        assert set(actual)==set(attrs),item['id']
        for style,row in actual.items():
            for field in fields:
                assert row.get(field)==attrs[style].get(field,common.get(field)),(item['id'],style,field)
    if item['icon']:
        assert (SOURCE/'assets/weapons'/item['icon']).is_file(),item['id']
assert all(not item['id'].startswith('knavesneeds:deeperdarker/resonarium/')for item in items)
assert all(item['id'].startswith('knavesneeds:twilightforest/')for item in items if item['mod']=='knavesneeds')
assert 'legendary_monsters:sand_cannon'not in by_id
assert len([item for item in items if item['mod']=='simplyswords'])==133
csv_path=SOURCE/'assets/weapons/weapon-overview.csv'
with csv_path.open(encoding='utf-8-sig',newline='')as f:rows=list(csv.DictReader(f))
assert {row['item_id']for row in rows}==set(by_id)
assert len(rows)==len(items)
table=(PACK/'docs/WEAPONS_EN.md').read_text()
for item in items:
    assert table.count('<code>'+item['id']+'</code>')==1,item['id']
output=PACK/'player-guide'
for path in ['data/weapons.json','data/weapon-coverage-audit.json','assets/weapons/weapon-overview.csv',
             'assets/weapons/catalogue.js','assets/weapons/catalogue.css']:
    relative=path.removeprefix('assets/')
    published=output/'assets'/relative
    assert published.read_bytes()==(SOURCE/path).read_bytes(),path
assert (output/'weapons/index.html').exists()
print(json.dumps({'entries':len(items),'weapons':meta['weaponCount'],'base_item_stats':meta['baseItemStatsCount'],
                  'mapping_counts':dict(mapping_counts),'excluded_wom_items':status_counts['excluded'],
                  'status':'passed'},indent=2))
