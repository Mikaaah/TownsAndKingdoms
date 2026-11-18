#!/usr/bin/env python3
"""Build the GitHub weapon tables and CSV from the dated combat catalogue."""
from collections import Counter
from pathlib import Path
import csv
import json
import re

PACK=Path(__file__).resolve().parents[1]
SOURCE=PACK/'handbook-source/current'
DATA=SOURCE/'data/weapons.json'
catalogue=json.loads(DATA.read_text())
items=catalogue['items']
meta=catalogue['meta']
assert len({item['id']for item in items})==len(items)

def esc(value):
    return str(value).replace('|','&#124;').replace('<','&lt;').replace('>','&gt;')

def number(value):
    return f'{value:g}'

def values(item,key,percent=False):
    if not item['weapon_type']:return 'Unverified'
    known=sorted({row[key]for row in item['bonuses']if row.get(key)is not None})
    if not known:return 'Preset'
    suffix=' pp'if percent else ''
    out=('+'if known[0]>=0 else '')+number(known[0])
    if len(known)>1:out+=' … '+('+'if known[-1]>=0 else '')+number(known[-1])
    return out+suffix

def anchor(kind,mod):
    return 'weapons-'+re.sub('[^a-z0-9]+','-',kind.lower()).strip('-')+'-'+mod

def section_table(lines,selected,kind):
    for mod in sorted({item['mod']for item in selected},key=lambda mod:next(x['mod_name']for x in selected if x['mod']==mod)):
        rows=sorted([item for item in selected if item['mod']==mod],key=lambda item:(item['name'].casefold(),item['id']))
        lines.extend([f'<a id="{anchor(kind,mod)}"></a>',f'### {rows[0]["mod_name"]}',
                      f'{len(rows)} '+('entry'if len(rows)==1 else 'entries'),'','| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |',
                      '| --- | --- | ---: | ---: | ---: |'])
        for item in rows:
            icon=('<img src="../handbook-source/current/assets/weapons/'+item['icon']+'" alt="" width="24" height="24"> ')if item['icon']else ''
            label=icon+'**'+esc(item['name'])+'**<br><sub><code>'+esc(item['id'])+'</code></sub>'
            if item['status']=='provisional':label+='<br><sub>Provisionally retained</sub>'
            style='`'+esc(item['weapon_type'])+'`'if item['weapon_type']else '**Unverified**'
            lines.append('| '+label+' | '+style+' | '+values(item,'damage_bonus')+' | '+values(item,'speed_bonus')+' | '+values(item,'armor_negation',True)+' |')
        lines.append('')

weapons=[item for item in items if item['kind']in {'Melee weapon','Ranged weapon'}and item['status']!='excluded']
shields=[item for item in items if item['kind']=='Shield'and item['status']!='excluded']
other=[item for item in items if item['kind']in {'Tool','Utility / casting item'}and item['status']!='excluded']
excluded=[item for item in items if item['status']=='excluded']
live=weapons+shields+other
melee=[item for item in weapons if item['kind']=='Melee weapon']
types=Counter(item['type_family']for item in melee)
lines=['<p align="center"><img src="../handbook-source/brand/tklogo.png" alt="Towns & Kingdoms 3 — Beyond the Forge" width="440"></p>',
       '# Weapons & combat styles','',
       '**CB 1.1.2 development catalogue · Minecraft 1.21.1 · NeoForge · Java 21**','',
       '[Open the visual armoury](https://mikaaah.github.io/TownsAndKingdoms/weapons/) · '
       '[Download CSV](../handbook-source/current/assets/weapons/weapon-overview.csv) · '
       '[Exact catalogue JSON](../handbook-source/current/data/weapons.json)','',
       f'**{len(weapons)} weapon entries**, **{len(shields)} shields**, **{len(other)} mapped tools and utilities**. '
       f'The {len(excluded)} excluded original WoM weapons have their own section below.','',
       'Browse the visual armoury for filters, item details, per-hand attributes, impact, extra targets and verified base item stats. '
       'These tables keep the full list readable directly on GitHub.','',
       '## Read the stats','',
       '- Damage and speed columns show **additive native capability bonuses**, not final damage or DPS.',
       '- Armor negation is an additive bonus in **percentage points**. A range covers different declared weapon styles.',
       '- **Preset** means no explicit value is supplied for that field; the native type supplies it.',
       f'- Base item damage and attack speed are verified separately for {meta["baseItemStatsCount"]} weapons '
       '(all 133 Simply Swords weapons and five Thaumaturge Tinker weapons). Open the visual armoury for those values.',
       '- Exact item IDs are included even when a display label is derived from the registry name.','',
       '## At a glance','',
       '| Category | Entries |','| --- | ---: |',
       f'| Melee weapons | {len(melee)} |',
       f'| Ranged weapons | {len(weapons)-len(melee)} |',
       f'| Shield mappings | {len(shields)} |',
       f'| Mapped tools and utilities | {len(other)} |',
       f'| Excluded original WoM weapons | {len(excluded)} |','',
       '| Melee moveset family | Entries |','| --- | ---: |',
       *[f'| {name} | {types[name]} |'for name in ['Dawn Day','Epic Fight','WoM','WoM Plus','TNK','Unassigned']],'',
       '## Choose a mod','',
       '| Mod | Melee | Ranged |','| --- | ---: | ---: |']
for mod in sorted({item['mod']for item in weapons},key=lambda mod:next(x['mod_name']for x in weapons if x['mod']==mod)):
    rows=[item for item in weapons if item['mod']==mod]
    lines.append(f'| [{rows[0]["mod_name"]}](#{anchor("combat",mod)}) | '+str(sum(item['kind']=='Melee weapon'for item in rows))+' | '+str(sum(item['kind']=='Ranged weapon'for item in rows))+' |')
lines.extend(['','[Weapons](#weapons) · [Shields](#shields) · [Mapped tools and utilities](#mapped-tools-and-utilities) · [Excluded WoM weapons](#excluded-wom-weapons)','',
              '## Weapons',''])
section_table(lines,weapons,'combat')
lines.extend(['## Shields','', '<details>','<summary>Open all shield mappings</summary>',''])
section_table(lines,shields,'shields')
lines.extend(['</details>','','## Mapped tools and utilities','',
              'These entries are included for capability coverage; they are not counted as combat weapons.','',
              '<details>','<summary>Open tools and utility mappings</summary>',''])
section_table(lines,other,'tools')
lines.extend(['</details>','','## Excluded WoM weapons','',
              '**Retained:** six staffs, four greataxes and Nova. **Provisionally retained:** Agony and Ruine.','',
              'The following original items are excluded from recipes, loot and recipe viewers. Their native capability definitions '
              'can still be reused as movesets by other weapons. Their entries here do not enable the items.',''])
section_table(lines,excluded,'excluded')
lines.extend(['## Snapshot and coverage','',
              f'Updated {meta["date"]}. Source: `{meta["source_archive"]}`.',
              f'Archive SHA-256: `{meta["source_archive_sha256"]}`.','',
              f'The inventory contains {meta["totalExplicit"]} explicit item mappings: '
              f'{meta["packCapabilityCount"]} pack overrides and {meta["additionalNativeCapabilityCount"]} additional mappings from the installed combat JARs. '
              f'A further {meta["knownAutomaticMappings"]} native class/keyword mappings are verified, and {meta["unverifiedStyleEntries"]} '
              'registered items are listed with unverified combat styles. No type or stats are invented for those entries. '
              'Knaves’ Needs includes only the pack’s confirmed Twilight Forest weapons. '
              'This is a dated static reference, not a live registry dump. Listing an item is not a guarantee of a crafting or loot route.','',
              'Installed combat versions: '+', '.join(name+' '+version for name,version in meta['installed_combat_mods'].items())+'.','',
              'WoM Plus’s optional `wom_override` pack is enabled in the supplied server reference. Its three conditional native '
              'assignments are recorded in the CSV/JSON. Other field-guide chapters still describe Beta 1.0.','',
              'This is documentation only: no weapon capabilities, scripts, stats, recipes or progression files are changed by this overview.','',
              '[Artwork credits](../handbook-source/current/assets/weapons/ASSET_CREDITS.md)',''])
assert sum(line.startswith('| ')and'<code>'in line for line in lines)==len(items)
out=PACK/'docs/WEAPONS_EN.md';out.write_text('\n'.join(lines))

csv_path=SOURCE/'assets/weapons/weapon-overview.csv'
fields=['name','item_id','mod','category','weapon_type','moveset_family','status','base_item_damage','base_item_speed',
        'damage_bonus','speed_bonus','armor_negation_bonus_percentage_points','impact_bonus','extra_targets',
        'style_values','definition','mapping_source','without_optional_wom_override']
with csv_path.open('w',encoding='utf-8-sig',newline='')as f:
    writer=csv.DictWriter(f,fieldnames=fields,lineterminator='\n');writer.writeheader()
    for item in items:
        writer.writerow({'name':item['name'],'item_id':item['id'],'mod':item['mod_name'],'category':item['kind'],
          'weapon_type':item['weapon_type'],'moveset_family':item['type_family'],'status':item['status'],
          'base_item_damage':item['base_stats']['damage']if item['base_stats']else '',
          'base_item_speed':item['base_stats']['speed']if item['base_stats']else '',
          'damage_bonus':values(item,'damage_bonus'),'speed_bonus':values(item,'speed_bonus'),
          'armor_negation_bonus_percentage_points':values(item,'armor_negation'),'impact_bonus':values(item,'impact'),
          'extra_targets':values(item,'max_strikes'),'style_values':json.dumps(item['bonuses'],ensure_ascii=False,separators=(',',':')),
          'definition':item['definition'],'mapping_source':item['mapping_source'],
          'without_optional_wom_override':item['without_optional_wom_override']or ''})
print(json.dumps({'entries':len(items),'weapons':len(weapons),'shields':len(shields),'excluded':len(excluded),
                  'markdown_bytes':out.stat().st_size,'csv_bytes':csv_path.stat().st_size},indent=2))
