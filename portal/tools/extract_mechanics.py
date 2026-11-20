#!/usr/bin/env python3
"""Extract public mechanics from canonical configs and verified native registries."""
from __future__ import annotations
import json,math,re
from pathlib import Path
from extract_loot_pools import catalog as loot_pool_catalog

PORTAL=Path(__file__).resolve().parents[1]
REPO=PORTAL.parent
CONFIG=REPO/'TK3/config'
REFERENCE=REPO/'TK3/reference/progression'
def read(path):return json.loads(path.read_text())
def number(value):return f'{value:g}' if isinstance(value,(int,float)) else str(value)
def label(identifier):return identifier.split(':',1)[-1].replace('_',' ').replace('/',' / ').title()
def section(title,body,rows=None):
    result={'title':title,'body':body}
    if rows is not None:result['rows']=rows
    return result

progression=read(CONFIG/'tnkprogression.json')
balance=read(CONFIG/'tnk-balance.json')
xp=read(REFERENCE/'direct_xp_defaults.json')
if (CONFIG/'tnk-xp.json').exists():xp.update(read(CONFIG/'tnk-xp.json'))
origin_rows=read(REFERENCE/'origins.json')
catalog=read(CONFIG/'tnk-titles.json')
title_perks=read(CONFIG/'tnk-title-perks.json')
loot_config=read(CONFIG/'tnkloot/tiers.json')
rarities=read(CONFIG/'tnkloot/rarities.json')
loot_xp=read(CONFIG/'tnkloot/experience.json')
features=read(CONFIG/'tnkloot/features.json')
machine=read(CONFIG/'tnkloot/mechanical-identifier.json')
drop=read(CONFIG/'tnkloot/tnk-beta.json')
boss_rewards=read(CONFIG/'tnkloot/boss-rewards.json')
dimensions=read(CONFIG/'tnkloot/dimensions.json')

origins=[]
for origin in origin_rows:
    entry={key:origin[key] for key in ['id','name','description','tier']}
    entry['icon']='images/origins/'+Path(origin['iconResource']).name
    entry['perks']=[{'name':f'Perk {index+1}','description':perk} for index,perk in enumerate(origin['perks'])]
    entry['bonuses']=origin['bonuses']
    origins.append(entry)

points=lambda level: level+(3*level)//4
cost=lambda level: max(1,min(9223372036854775807,int(balance['levelBase']+balance['levelFactor']*max(1,level)**balance['levelExponent'])))
level_variable='L'if balance['levelExponent']==1 else 'L^'+number(balance['levelExponent'])
level_formula=(number(balance['levelBase'])+' + 'if balance['levelBase']else '')+number(balance['levelFactor'])+' × '+level_variable
level_rows=[{'Level':level,'Total character XP':f'{sum(cost(i)for i in range(1,level)):,}',
             'XP to next level':f'{cost(level):,}'if level<100 else 'Maximum level','Earned skill points':points(level)}
            for level in [1,10,25,50,75,100]]
quality_names=[q['name']for q in rarities['qualities']]
ceilings=[{'Character ceiling':ceiling,'Highest ordinary rarity':quality_names[min(5,progression['rarityCaps'][i])]} for i,ceiling in enumerate(progression['ceilings'])]
combat_rows=[{'Enemy category':'Ordinary hostile','Multiplier':'×1'},
             {'Enemy category':'Passive creature','Multiplier':'×'+number(xp['passiveMultiplier'])},
             {'Enemy category':'Tough enemy: at least 60 maximum health','Multiplier':'×'+number(xp['toughMultiplier'])},
             {'Enemy category':'Configured miniboss','Multiplier':'×'+number(xp['minibossMultiplier'])},
             {'Enemy category':'Configured boss','Multiplier':'×'+number(xp['bossMultiplier'])}]
mining_rows=[{'Natural block':label(k),'Base character XP':number(v)}for k,v in sorted(xp['miningBlocks'].items())]
ore_rows=[{'Ore family':label(k),'Base character XP':number(v)}for k,v in sorted(xp['miningTags'].items())if k.startswith('c:ores/')]
farming_rows=[{'Action':'Mature crop harvested by hand','Base character XP':number(xp['crop'])},
              {'Action':'Mature nether wart or cocoa','Base character XP':number(xp['specialCrop'])},
              {'Action':'Naturally grown pumpkin or melon','Base character XP':number(xp['fruit'])},
              {'Action':'Ripe berries','Base character XP':number(xp['berries'])},
              {'Action':'Manually supplied food finished cooking','Base character XP':number(xp['cookedFood'])}]
fish_rows=[{'Catch':'Vanilla rod catch','Base character XP':number(xp['vanillaFishing'])}]+[
    {'Catch':'Starcatcher '+name.title(),'Base character XP':number(xp['starcatcher'][name])}
    for name in ['common','uncommon','rare','epic','legendary','golden']]
explore_rows=[{'Discovery':'New chunk visited through ordinary travel','Base character XP':number(xp['chunk'])},
              {'Discovery':'New biome','Base character XP':number(xp['biome'])},
              {'Discovery':'New structure','Base character XP':number(xp['structure'])},
              {'Discovery':'New dimension','Base character XP':number(xp['dimension'])}]

origin_guide={
    'title':'Origins and Ascension',
    'summary':'Choose a background for a small personal advantage, then unlock an advanced calling with the Sigil of Ascension.',
    'sections':[
      section('Choose your background',[
        'Open Character, preview one of the 20 starting origins and confirm your choice. Previewing a card does not commit it.',
        'Your origin remains a personal choice, independent of your title slots and skill allocation. Its named perks apply only in their stated situations.'
      ]),
      section('Ascend to a new calling',[
        'Use a Sigil of Ascension to unlock 15 ascended origins and reopen your origin choice. You may choose an advanced origin or a starting background.',
        'The sigil is consumed. Levels, skill points, titles and activity progress are retained. A later change requires another sigil.',
        'The sigil is a Creative Core project made through a 5×5 mechanical crafting recipe using a Creation Machine, Arcane and Eclipse Mechanisms, nether stars, legendary ink, source gems and echo shards.'
      ]),
      section('How perks apply',[
        'Mining and log bonuses require natural resources. Crop perks, potion perks, living mounts and ranged-weapon perks follow the specific actions stated on the origin card.',
        'Block interaction reach is separate from attack reach. Stonemason and Grand Architect require a building block; Millwright and Artificer require a supported wrench.',
        'Millwright and Artificer increase character XP from command-awarded campaign rewards. They do not create automatic engineering XP.',
        'Mana origins use the shared Iron’s Spells mana attributes. Enchanting and anvil refunds return vanilla XP points actually spent while preserving the normal level requirements.',
        'Origins saved on an existing character retain their stored perks. Increasing maximum health does not immediately heal the character.'
      ])
    ]
}

leveling={
 'title':'Character progression',
 'summary':'Earn character XP through exploration, combat and practical work. Spend the skill points you earn to shape a build.',
 'maximumLevel':100,
 'skillPointFormula':'level + floor(3 × level / 4)',
 'levelCost':{'base':balance['levelBase'],'factor':balance['levelFactor'],'exponent':balance['levelExponent']},
 'sections':[
   section('Two kinds of experience',[
     'Character XP fills the Character level bar. Vanilla XP fills Minecraft’s green bar and pays for enchanting, repairs and equipment identification.',
     'Combat, natural mining, mature harvests, cooking, fishing and exploration award character XP directly. Campaign rewards contribute to the same bar. Crafting and engineering do not award automatic character XP.',
     'Gameplay rewards require a living Survival or Adventure player. Machine mining, automated harvesting and artificial reward loops do not earn the corresponding activity XP.'
   ]),
   section('Levels and skill points',[
     f'Going from level L to L+1 costs {level_formula} character XP, rounded down to a whole point. Level 100 requires {sum(cost(i)for i in range(1,100)):,} total character XP.',
     'Earned skill points equal level + floor(3 × level / 4), reaching 175 points at level 100. Reconnecting and refunding a build do not award those points again.',
     'The activity reward stays the same as you level; the amount needed for the next level increases. Your build, equipment, origin and active passive title supply your combat bonuses.'
   ],level_rows),
   section('Campaign ceilings',[
     f'Characters begin with a level ceiling of {progression["ceilings"][0]}. Campaign unlocks raise that ceiling through the following brackets.',
     'XP pauses at the current ceiling and is not banked for a later unlock. Character unlocks can be shared with your team; XP, origins, titles and skill spending remain personal.',
     'Character ceilings and production chapters are separate systems. Exploration dimensions and the Wither remain accessible.'
   ],ceilings),
   section('Combat rewards',[
     f'Base combat character XP is ({number(xp["combatBase"])} + {number(xp["combatPerLevel"])} × enemy level), multiplied by enemy category and your share of the damage.',
     f'Be alive, nearby and in the same dimension when the enemy dies. Your damage contribution expires after {progression["contributionTicks"]/20:g} seconds; supported owned summons can contribute.',
     'Environmental and machine damage cannot turn a token hit into a full reward. Pets, owned enemies, spawn eggs, commands and split offspring give no combat XP. Legitimate dungeon, spawner and triggered bosses qualify.'
   ],combat_rows),
   section('Natural mining',[
     'Mine a natural block yourself and produce a block drop. The reward is per block, independent of Fortune yield and character level.',
     'Placed, piston-moved, fluid-generated and already-mined positions give no mining XP. The provenance record persists through restarts.',
     'An explicit block value takes priority. Otherwise the highest matching ore or natural-stone family reward applies.'
   ],mining_rows),
   section('Ore-family rewards','Modded ores use the same resource-family rewards.',ore_rows),
   section('Farming and cooking',[
     f'Each harvested crop position has a shared {progression["harvestCooldownTicks"]/20:g}-second reward cooldown. Breaking mature crops and supported right-click harvesting count; immature crops and placed fruit do not.',
     'For cooking, insert raw ingredients manually into a furnace, smoker or campfire. Remain online, in the same dimension and within 64 blocks when the food finishes.',
     'Hopper or pipe ingredients, taking previously stored output, crafting food and non-food smelting do not award cooking XP.'
   ],farming_rows),
   section('Fishing','Fish with a rod in open water. Starcatcher catches use the reward for their catch rarity; vanilla fishing XP orbs remain a separate reward.',fish_rows),
   section('Exploration','Discoveries are recorded per character. Repeated visits do not repeatedly award discovery XP, and teleporting across chunks is not treated as ordinary chunk exploration.',explore_rows),
   section('Enemy levels and scaling',[
     f'Ordinary eligible enemies use the nearest eligible player’s level with a random offset from −{progression["mobLevelVariance"]} to +{progression["mobLevelVariance"]}, bounded to levels 1–100.',
     'Bosses use the higher of their encounter minimum and nearby player level +10, up to level 110. Minibosses use the same comparison but stop at 100. Apotheosis invaders use player level +5, capped at 100.',
     f'Outside separately controlled arena encounters, maximum health scales by 1 + {number(progression["healthPerLevel"])} × (enemy level − 1). Melee attack damage scales by 1 + {number(progression["damagePerLevel"])} × (enemy level − 1).',
     'Assigned enemy levels persist. Reloading does not stack the modifiers, restore damage already taken or make ordinary enemies permanent.'
   ]),
   section('Spiral Abyss encounters','The six floors use fixed encounter baselines, separate from ordinary nearby-player scaling. Bosses use the floor baseline +10 or their encounter minimum, whichever is higher, up to 110.',
     [{'Floor':i+1,'Enemy baseline':level,'Boss baseline':min(110,level+10)}for i,level in enumerate(progression['abyss']['floorLevels'])]),
 ]
}

title_rows=[]
title_catalog=[]
for title in catalog['titles']:
    perks=[] if title['id'] in {'tnk:owner','tnk:admin'}else title_perks['titles'].get(title['id'],[])
    requirements=[]
    if title.get('minSpentPoints',0):requirements.append(f'Spend {title["minSpentPoints"]} skill points')
    if title.get('requiredSkills'):requirements.extend(label(x)for x in title['requiredSkills'])
    unlock=title['description'].replace('Quest reward: ','').replace('Automatic: ','')
    bonus='; '.join(p['description']for p in perks)or 'Cosmetic only'
    title_rows.append({'Title':title['label'],'How to earn it':unlock,'Passive bonuses':bonus})
    title_catalog.append({'id':title['id'],'name':title['label'],'description':unlock,'requirements':requirements,'colour':'#'+title['colour'],'perks':perks})
titles={
 'title':'Titles',
 'summary':'Collect recognition for your journey, then choose your displayed title and active title bonuses independently.',
 'catalog':title_catalog,
 'sections':[
   section('Two independent slots',[
     'The cosmetic slot chooses the title shown beside your character. The passive slot chooses the unlocked title whose bonuses apply.',
     'Only one title passive is active at a time. Owning more titles or displaying a different cosmetic title does not stack their bonuses.',
     f'Changing the active passive has a {title_perks["swapCooldownSeconds"]}-second cooldown. You can leave the passive slot empty. Maximum-health changes do not heal you.'
   ]),
   section('How titles unlock',[
     'Skill titles unlock automatically when their spent-point or exact skill-node requirements are met. Character level alone is not a substitute for those requirements.',
     'Campaign and encounter titles follow their designated reward. Complete and claim that milestone reward; kills and activity totals alone do not grant a command-awarded title.',
     'Founder is awarded by pack staff for beta participation. Owner and Admin are staff-assigned cosmetic titles and grant neither gameplay bonuses nor permissions.',
     'Previously earned retired titles remain available to their owners with their saved artwork and passive choices.'
   ]),
   section('Title catalogue',f'There are {len(title_rows)} titles in the active collection.',title_rows)
 ]
}

tiers=loot_config['tiers']
base_costs=loot_config['identification_costs']['per_tier']
tier_rows=[]
for tier in tiers:
    band=rarities['tier_affix_bands'][tier['rank']]
    tier_rows.append({'Tier':tier['rank'],'Name':tier['name'],'Base identification XP':base_costs.get(str(tier['rank']),loot_config['identification_costs']['default']),
                      'Affix roll band':f'{number(band["min"]*100)}–{number(band["max"]*100)}%'})
normal_total=sum(drop['rarityWeights']);boss_total=sum(q['boss_weight']for q in rarities['qualities'])
rarity_rows=[{'Rarity':q['name'],'Ordinary roll':f'{number(100*drop["rarityWeights"][i]/normal_total)}%',
              'Boss roll':f'{number(100*q["boss_weight"]/boss_total)}%','Identification multiplier':'×'+number(q['cost_multiplier']),
              'Salvage base':features['salvage_values'][i]}for i,q in enumerate(rarities['qualities'])]
cost_matrix=[]
for t in tiers:
    b=base_costs.get(str(t['rank']),loot_config['identification_costs']['default'])
    cost_matrix.append({'Tier':f'{t["rank"]} · {t["name"]}',**{q['name']:math.ceil(b*q['cost_multiplier']*loot_xp['identification_xp_multiplier'])for q in rarities['qualities']}})
pool_catalog=loot_pool_catalog(REPO/'TK3',PORTAL/'scripts/registry_metadata.json',loot_config,boss_rewards,dimensions)
tier_names={tier['rank']:tier['name'] for tier in tiers}
loot_band_rows=[
 {'Effective source level':f'{group["min"]}–{group["max"]}',
  'Tier roll':' · '.join(f'{roll["chance"]}% {tier_names[roll["rank"]]}' for roll in group['tiers'])}
 for group in pool_catalog['levelGroups']
]
fluid_rows=[{'XP fluid':label(k),'Fluid ID':k,'mB per vanilla XP point':number(v)}for k,v in machine['millibucketsPerXp'].items()]
boss_rows=[{'Encounter':p['name'],'Loot tier':p['tier'],'Pool entries':len(p['items'])}for p in boss_rewards['pools']if p.get('enabled',True)]
dimension_rows=[{'Dimension':label(d['dimension']),'Local equipment families':', '.join(label(ns)for ns in d['item_namespaces']),
                 'Global equipment':'Included'if d['include_global_equipment']else 'Local pool only'}for d in dimensions['routes']]
loot={
 'title':'Unidentified Loot',
 'summary':'Bring equipment discoveries home, reveal their identity and affixes, then keep, trade or salvage what you find.',
 'equipmentEntries':len(loot_config['weapons']),
 'tiers':tiers,
 'rarities':rarities['qualities'],
 'sections':[
   section('The appraisal loop',[
     'Find unidentified equipment in exploration loot or from eligible enemies. Its token carries the equipment category, loot tier, source and sealed roll information.',
     'Bring it to an Identifier station to inspect the pool and reveal the result. Handheld identification is disabled; the station and Mechanical Identifier provide the reveal routes.',
     'Identification at the manual station spends vanilla XP points after applying any available salvage credit.',
     'Keep a useful find, trade it, or salvage unwanted identified gear. Discoveries fill your personal collection and pool previews help you plan future expeditions.'
   ]),
   section('Equipment discovery',[
     f'Ordinary eligible hostile kills have a {number(drop["equipmentDropChance"]*100)}% equipment roll. Ordinary eligible chests have a {number(drop["chestEquipmentChance"]*100)}% equipment roll.',
     f'Eligible dungeon chests also have a separate {number(features["dungeon_accessory_chance"]*100)}% accessory roll. Dedicated boss pools and authored dungeon rewards use their own reward rules.'
   ]),
   section('Tier, rarity and fighting style',[
     'Loot tier describes the equipment band. Rarity controls the quality of its roll. Neither is the weapon’s Epic Fight moveset or the production chapter used to craft machines.',
     f'The equipment pools contain {len(loot_config["weapons"]):,} entries across eight tiers. Loot tiers range from 0 to 7; Common through Mythic are six separate rarity grades.',
     'Tier bounds the relative affix roll band. The band is a quality range for attribute rolls, not a direct percentage increase to attack damage.'
   ],tier_rows),
   section('Ordinary loot follows encounter level',[
     'For ordinary progression-aware equipment, effective source level is the lower of the encounter’s source level and your character ceiling, bounded to 1–100.',
     'The following tier distribution is rolled at that effective level. The token is sealed when generated; postponing identification does not reroll its progression band.'
   ],loot_band_rows),
   section('Rarity rolls',[
     'The table shows the full-range chances. Ordinary equipment rolls among the grades allowed by your unlocked rarity ceiling.',
     'Progression-aware boss rewards roll with boss weights. A roll above the recipient’s rarity ceiling is rolled again among the eligible grades using those weights.'
   ],rarity_rows),
   section('Rarity ceilings','The active character ceiling determines the highest eligible ordinary rarity.',ceilings),
   section('Identification prices',[
     'For affix-capable equipment and native jewellery, identification cost is the loot-tier base price multiplied by the rarity multiplier, rounded up to a whole vanilla XP point. Other compatibility items retain their base price.',
     'At the manual station, stored salvage credit reduces the bill before vanilla XP is charged. The table shows the full price before credit.',
     f'A Rare Veteran item costs {math.ceil(base_costs["4"]*next(q["cost_multiplier"]for q in rarities["qualities"]if q["id"]=="rare")*loot_xp["identification_xp_multiplier"])} vanilla XP points: tier 4 base {base_costs["4"]} × Rare multiplier {number(next(q["cost_multiplier"]for q in rarities["qualities"]if q["id"]=="rare"))}.'
   ],cost_matrix),
   section('Mechanical Identifier',[
     f'The Mechanical Identifier automates appraisal with an internal {machine["tankCapacity"]:,} mB tank and {machine["processingTicks"]} ticks of processing per item ({machine["processingTicks"]/20:g} seconds at 20 ticks per second).',
     'Insert one unidentified token per input slot, supply a supported XP fluid and leave room for identified output. Seven input slots are available.',
     'Multiply the full identification XP cost by the fluid’s mB-per-XP ratio and round up. The mechanical route pays the full cost in fluid.',
     'The machine waits when fluid is insufficient or output is blocked. It consumes the token and fluid when the prepared result completes. Rotational power is not a processing requirement.'
   ],fluid_rows),
   section('Salvaging',[
     f'Salvaging identified equipment costs {loot_xp["salvage_xp_base"]} + {loot_xp["salvage_xp_per_tier"]} × loot tier + {loot_xp["salvage_xp_per_rarity"]} × rarity index vanilla XP points. Common has index 0 and Mythic index 5.',
     f'Base credit equals the rarity’s salvage base × (loot tier + 1). Credit is capped at {number(features["max_salvage_refund_fraction"]*100)}% of the identification price, rounded down. The cap is at least one credit for eligible gear with a positive identification price.',
     f'You receive the lower of the base credit and cap. Review your selected gear and the vanilla XP fee before confirming. Your character can store up to {features["max_salvage_credit"]:,} credit toward future manual identification.'
   ]),
   section('Boss equipment and signature effects',[
     f'{len(boss_rows)} encounters have dedicated equipment pools. A player must deal the final blow or have hit the boss recently for its equipment pool to apply.',
     'Pool entries are weighted choices, not a guarantee that every listed item drops together. Some encounters add equipment when no matching equipment would otherwise be awarded.',
     f'Boss signature affixes are enabled. Their shared effect cooldown is {features["boss_proc_cooldown_ticks"]/20:g} seconds and their configured effect duration is {features["boss_proc_duration_ticks"]/20:g} seconds.'
   ],boss_rows),
   section('Sealed dungeon rewards',[
     'Authored dungeon rewards retain their selected equipment, source level, loot tier, rarity and guaranteed bonuses through delivery and identification.',
     'Receiving a sealed reward on a lower-level character does not downgrade or reroll it. A boss’s encounter level and its reward chest’s authored source level remain separate.',
     'The same saved result is used when the token is revealed manually or through the Mechanical Identifier.'
   ]),
   section('Regional equipment pools',[
     'Aether, Twilight Forest, Nether, End and Otherside exploration can draw from their local equipment families alongside global gear.',
     'Regional equipment uses the ordinary discovery rules. The item’s origin dimension helps choose which local families can appear.'
   ],dimension_rows),
   section('Affixes and collections',[
     'Apotheosis supplies the affix system. The item’s loot tier and rarity shape its bounded roll while native item properties and supported custom weapon behavior remain part of the result.',
     'Collection records, pool previews, rarity reveals and salvaging are enabled. Unseen collection entries can remain silhouettes until discovered.'
   ])
 ]
}

result={'leveling':leveling,'originGuide':origin_guide,'origins':origins,'titles':titles,'loot':loot}
destination=PORTAL/'src/data/mechanics.json';destination.parent.mkdir(parents=True,exist_ok=True)
destination.write_text(json.dumps(result,indent=2,ensure_ascii=False,allow_nan=False)+'\n')
(destination.parent/'loot-pools.json').write_text(json.dumps(pool_catalog,indent=2,ensure_ascii=False,allow_nan=False)+'\n')
print(json.dumps({'mechanics':str(destination.relative_to(REPO)),'origins':len(origins),'titles':len(title_catalog),
                  'loot_entries':len(loot_config['weapons']),'loot_tiers':len(tiers),'boss_pools':len(boss_rows)}))
