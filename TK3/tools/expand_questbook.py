#!/usr/bin/env python3
"""Author the T&K3 questbook expansion. Runtime output: rebuild_quests.py.

This is an explicit content seed, not a mod auto-detection or reward generator.
Existing campaign IDs, tasks, rewards and progression dependencies are retained.
"""
import hashlib
import json
import runpy
from pathlib import Path

PACK = Path(__file__).resolve().parents[1]
PATH = PACK / 'docs/progression_manifest.json'
M = json.loads(PATH.read_text())
GUIDES = []


def uid(key):
    return f'{int(hashlib.sha256(("tk3:questbook:" + key).encode()).hexdigest()[:16], 16) & 0x7FFFFFFFFFFFFFFF:016X}'


def icon(name):
    return 'kubejs:tk3_quest_' + name


GROUPS = [
    ('town', 'Town Square', 'bell', '6'),
    ('character', 'Character Paths', 'jobs', 'd'),
    ('mechanical', 'Mechanical Quests', 'hammer', 'b'),
    ('magic', 'The Magical Quests', 'scroll', '5'),
    ('adventure', 'Adventure Quests', 'map', 'a'),
    ('kingdom', 'Kingdom Life', 'lantern', 'e'),
]
GIDS = {key: ('7427C3F538DF9198' if key == 'mechanical' else uid('group:' + key)) for key, *_ in GROUPS}
M['quest_groups'] = [dict(id=GIDS[key], key=key, title=title, icon=icon(image),
                          ftb_title=f'&{color}◆ &f&l{title.upper()}&r', order_index=i)
                     for i, (key, title, image, color) in enumerate(GROUPS)]


def chapter(key, group, title, subtitle, image='book', tier=1):
    c = dict(id=uid('chapter:' + key), filename='tk3_guide_' + key, group=GIDS[group],
             title=title, ftb_title='&d◆ &f&l' + title + '&r', subtitle=subtitle,
             icon=icon(image), order_index=len(GUIDES) + 20,
             default_hide_dependency_lines=True, quests=[], min_tier=tier, source_key=key)
    GUIDES.append(c)
    return c


def q(c, key, title, body, tip, *, steps=(), item=None, image=None, count=1,
      goal=None, caution=None, activity=False, tier=None, parent=None):
    ident = uid(c['source_key'] + ':' + key)
    tasks = [dict(id=uid(c['source_key'] + ':' + key + ':task'), type='item',
                  item={'id': item, 'count': 1}, count=count, consume_items=False)] if item else [
        dict(id=uid(c['source_key'] + ':' + key + ':task'), type='checkmark',
             title='Complete this activity' if activity else 'Read and understand this guide')]
    root = c['quests'][0]['id'] if c['quests'] else None
    dependencies = [parent or root] if root else []
    if tier and tier > 1:
        dependencies.append(M['milestones'][str(tier - 1)])
    index = len(c['quests'])
    # A small welcome node above three clearly separated activity columns.
    x, y = (0.0, 0.0) if index == 0 else ((index - 1) % 3 * 3.0 - 3.0, ((index - 1) // 3 + 1) * 3.0)
    quest = dict(id=ident, source_key=key, title=title, description=[body],
                 goal=goal or (f'Obtain {count} × ' + title if item else
                               ('Complete the project described below.' if activity else 'Understand this part of your adventure.')),
                 tips=[tip], steps=list(steps), dependencies=dependencies, tasks=tasks,
                 optional=True, x=x, y=y, icon=image or item or c['icon'], rewards=[],
                 tags=['tk3_guide', 'tk3_' + c['source_key']],
                 quest_subtitle=('ACTIVITY' if activity else 'ITEM GOAL' if item else 'FIELD GUIDE') +
                                (f' · TIER {tier}+' if tier else ''))
    if not item:
        quest['guide_kind'] = 'activity' if activity else 'reading'
    if tier:
        quest['min_tier'] = tier
    if caution:
        quest['caution'] = caution
    if index == 0:
        quest.update(shape='hexagon', size=1.4)
    if activity:
        quest['shape'] = 'square'
    c['quests'].append(quest)
    return ident


#// TOWN SQUARE — navigation, survival and community projects
c = chapter('tutorial', 'town', 'Welcome to Towns & Kingdoms', 'Start here · quest types, controls and your first workshop', 'logo')
q(c, 'welcome', 'Your kingdom starts here', 'Engineering, magic, exploration and settlement building share one adventure. Chapters I–X are the production spine. The other categories are guides and optional projects you can revisit at any time.', 'Open Mechanical Quests when you want the next machine; open Character Paths when choosing your build.', steps=['Read this welcome page.', 'Find the six category headings in the chapter sidebar.', 'Open Chapter I and locate its workshop plan.'], goal='Find your main progression route and the supporting guides.')
q(c, 'quest-types', 'Reading the quest board', 'Round item nodes detect an item in your inventory. Guide checkmarks mean you have read the explanation; activity checkmarks mean you have completed the described setup. Large gold milestones unlock the next workshop tier.', 'Reading guides is safe for the whole team. You can compare all classes without selecting them.', caution='A checkmark does not automatically test a farm, choose a class or award skill points.')
q(c, 'rewards', 'Claim your workshop rewards', 'Item goals do not consume your materials. Each chapter milestone awards its named unbreakable finishing tool once per player. Rewards use manual claiming, so revisit completed milestones and collect your own tool.', 'Put the reward tool into the finishing Deployer; stock replaceable tools while you are still building the chapter.', steps=['Open a completed milestone.', 'Click its reward to claim it.', 'Store your workshop tools separately from adventuring gear.'])
q(c, 'teams', 'Teams and personal choices', 'The campaign uses FTB team quest progress. Workshop stages synchronize with completed milestones when a teammate next logs in. Your skilltree class, subclass and profession investments remain personal.', 'Agree on who handles crops, processing and exploration, then share the finished supplies.', caution='A teammate completing a class guide does not choose that class for you.')
q(c, 'controls', 'Set up your controls', 'Several mods add controls for quests, the map, parkour, combat and the skilltree. Open Minecraft Controls and search each mod name. Resolve conflicting keybinds before testing combat or a new movement ability.', 'Search Passive Skill Tree for the class tree. The supplied tree notes O as its intended shortcut, but your actual keybind may differ.', steps=['Check FTB Quests and map controls.', 'Check Epic Fight, ParCool and spell controls.', 'Check the skilltree shortcut.'], activity=True)
q(c, 'jei', 'Read the actual recipe', 'Use JEI to look up an item’s recipe and uses, then check every process tab. This pack changes important machine and mechanism recipes. Item names alone do not tell you which frame or processing method is required.', 'JEI bookmarks make a useful shopping list. Keep the casing, mechanism and finishing tool together in your plan.', steps=['Look up Algal Blend.', 'Compare its manual and mixing routes.', 'Look up the uses of a Kinetic Machine.'], activity=True)
q(c, 'ponder', 'Learn a machine with Ponder', 'Supported Create items have in-game Ponder scenes for placement, rotation and interactions. Follow the tooltip’s Ponder shortcut. Use JEI for the pack’s exact ingredients and the recipe workshop on the official wiki for assembly order.', 'Ponder explains the machine; the T&K3 recipe entry tells you what this pack requires.', steps=['Inspect a Deployer tooltip.', 'Open its available Ponder scene.', 'Compare the machine explanation with its T&K3 recipe.'], activity=True)
q(c, 'jade', 'Read the block in front of you', 'Jade supplies block and entity information when available. Tooltips, machine screens and recipe viewers together help identify a stalled process: wrong ingredient, missing power, wrong side or an unavailable tier.', 'Check the destination inventory first when a belt stops moving.')
q(c, 'map', 'Mark home and protect it', 'Use the selected map and FTB Chunks tools to mark home, claim your workshop and review team permissions. Claims, loading limits and server permissions depend on the instance settings.', 'Name waypoints for farms, portals and unfinished projects, not just your main house.', activity=True, steps=['Create a home waypoint.', 'Review your team’s claim permissions.', 'Keep a clear route to the workshop.'])
q(c, 'tiers', 'Know the workshop gates', 'Andesite starts the factory; Copper adds fields and fluids; Brass opens the Nether. Chapter IV adds AE2 and Mekanism. Chapter V opens End progression. Chemistry, expeditions, containment, quantum industry and the Sovereign project follow.', 'A side guide may show a future project. Its TIER label and dependency indicate when you can complete it.')
q(c, 'icons', 'A board full of useful symbols', 'The supplied quest and information artwork is used as navigation art throughout this book. Books introduce guides, maps mark expeditions, job icons mark professions and large milestone nodes mark chapter completion.', 'Quest/info icons are reading aids. They are not ingredients or items you must craft for progression.')

c = chapter('first_days', 'town', 'The First Few Days', 'Shelter, supplies and a workshop that can grow', 'torch')
q(c, 'camp', 'Choose a place to begin', 'Look for access to water, space for crops and a level workshop footprint. Leave room for belts, tanks, a stone generator and later machine rooms rather than fitting every process into your bedroom.', 'A workshop next to the farm shortens the first wheat and kelp supply routes.', activity=True, steps=['Set up shelter and a bed.', 'Mark a workshop area.', 'Reserve a separate storage corner.'])
q(c, 'food', 'Keep your expedition fed', 'Build a steady food supply before traveling far. Farmer’s Delight and the selected cooking mods offer useful meal choices. Check a meal’s tooltip and available ingredients before planning mass production.', 'Carry one reliable food stack and reserve special meals for longer trips.', activity=True, image=icon('job_cook'))
q(c, 'seed', 'The first industrial crops', 'Wheat and kelp serve both food and machine progression. Clay feeds Algal Blend, and limestone processing can supply bone meal. Keep seeds and replanting stock out of the factory’s consumption buffer.', 'A small reliable farm is more useful than a large farm with nowhere for its harvest to go.', activity=True, steps=['Plant wheat.', 'Start a kelp patch in water.', 'Reserve a chest for crops and seeds.'])
q(c, 'handcraft', 'Handcraft the starting frame', 'Chapter I deliberately starts before automated mechanisms. Seven Andesite Alloy, a wooden slab and Andesite Casing craft the first Kinetic Machine. Use the manual route to obtain the machines that will automate the mechanisms.', 'Budget several starting frames: each stonecut machine choice consumes its own frame.', steps=['Make Algal Blend and Andesite Alloy.', 'Craft the manual Kinetic Machine.', 'Stonecut the required starter equipment.'])
q(c, 'collection', 'Give every process an output', 'A chest, hopper or an appropriate collection upgrade turns a working machine into a useful supply line. Decide where items arrive and what should happen when that inventory fills.', 'Hopper Upgrades transfer to adjacent inventories. Pickup Upgrades collect dropped items; these are different jobs.', activity=True, image=icon('sack'))
q(c, 'starter', 'A working first workshop', 'Finish a compact area with water power, a press, a mixer and deployers. Leave paths to access filters and replace tools. Continue Chapter I for the exact progression goals.', 'Label the ingredient buffers so you can return after an expedition and understand your own factory.', activity=True)

c = chapter('project_board', 'town', 'The Town Project Board', 'Optional community builds · use the board as your settlement checklist', 'questboard')
q(c, 'board', 'Pick a shared project', 'This board is a collection of voluntary settlement goals. Choose projects that suit your team and current tier. The checkmarks record your work; the campaign milestones remain in Mechanical Quests.', 'Write the project owner and required supplies on signs at the construction site.')
for key, title, body, tip in [
    ('storehouse', 'The town storehouse', 'Build a central room with named storage, an incoming materials area and a tools shelf. Keep personal equipment apart from community ingredients.', 'Reserve separate shelves for unfinished mechanisms and reusable boss cores.'),
    ('kitchen', 'The public kitchen', 'Connect a crop store to a kitchen, prepare a repeatable meal and create an accessible food reserve for builders and adventurers.', 'Keep seeds, animal feed and the next recipe batch in separate buffers.'),
    ('road', 'The workshop road', 'Connect the workshop, homes and farms with a lit road. Leave clearance for carts, contraptions and future transport stations.', 'Build the path before placing machines across the route.'),
    ('library', 'The guild library', 'Create a place for mod guides, enchanting supplies and the team’s build notes. Give magic experiments their own work surface.', 'Put a sign beside each area listing its main ingredients and purpose.'),
    ('arena', 'The training yard', 'Prepare a safe practice area away from villagers and factory equipment. Test weapon moves, spells and mobility before a difficult expedition.', 'Use the selected Dummy mod for controlled equipment comparisons when its target is available.'),
    ('expedition', 'The expedition locker', 'Prepare shared supplies for a trip: food, spare tools, blocks, a return plan and free loot space. Add a board for destinations and discovered structures.', 'Keep a recovery kit at home instead of carrying every useful item into the same fight.'),
    ('museum', 'The kingdom museum', 'Display important discoveries, decorative blocks and notes about boss victories. Keep working progression catalysts in secure storage rather than using them as disposable decorations.', 'Make a labelled display copy where possible and retain the production original.'),
]:
    q(c, key, title, body, tip, activity=True)


#// CHARACTER PATHS — reading aids mirror the supplied personal skilltree
c = chapter('class_atlas', 'character', 'The Class Atlas', '6 classes · 18 subclasses · personal choices in the skilltree', 'jobs')
q(c, 'atlas', 'Choose how you like to play', 'Warrior, Ranger, Rogue, Mage, Cleric and Occultist offer different combat foundations. Read all six class pages, then make your actual choice in the personal skilltree.', 'You can complete every reading guide here. The questbook does not lock your class choice.', caution='These quests grant no class, attribute modifier, skill point or reset item.')
q(c, 'personal', 'One class, one subclass', 'The supplied tree restricts you to one class root and one subclass root. Each class has three subclass options with positive bonuses and meaningful tradeoffs. Compare those tradeoffs before investing.', 'Choose the playstyle you enjoy during ordinary fights, not only a boss damage screenshot.')
q(c, 'foundation', 'Build the class foundation', 'Each class has five mandatory inner branches with four nodes each: twenty foundation nodes. Follow the displayed prerequisite route through class mastery and the specialization gate to reach a subclass.', 'The twenty foundation nodes are not the entire cost of reaching a subclass; approach, root and gate nodes also matter.')
q(c, 'cost', 'Every node is a decision', 'Every native node in the supplied tree costs one point. Point availability follows the installed Passive Skill Tree settings. A quest guide does not generate extra points or create a separate profession leveling system.', 'Read the next node’s prerequisite and tradeoff before buying it.', caution='A recommended point budget in development notes is not a promise that your instance grants those points.')
q(c, 'paths', 'Three paths inside a subclass', 'Each subclass has three independent fourteen-node paths. Follow each branch’s own learned-skill requirements. The optional synergy nodes are side destinations; they do not skip another path’s requirements.', 'Focus on a useful path first. The all-path apex rewards completing the foundation of all three paths.')
q(c, 'keystones', 'Read your apex carefully', 'The tree permits one subclass keystone. Advanced class branches and profession investments compete for the same points, so decide whether you want a broad character or deeper specialization.', 'Sketch a point plan with your desired subclass path and professions before spending the last available points.')
q(c, 'professions', 'Professions alongside combat', 'Seven profession islands support Mining, Logging, Hunting, Exploration, Fishing, Farming and Crafting. The supplied tree permits up to three profession masteries and up to three focus nodes within each profession.', 'A class does not force a profession. A Mage can farm and a Warrior can craft.')
q(c, 'gear', 'Match equipment to your tree', 'A tree bonus only helps when its conditions and relevant attribute apply. Compare weapon type, school, casting cost, armor and movement rather than choosing equipment solely for its rarity.', 'Use the item tooltip and the actual skill node as the final description of their effects.')

CLASSES = [
    ('warrior', 'Warrior', 'c', 'job_fighter', 'Melee pressure, health and a durable frontline.',
     'Weapon Training, Battle Rhythm, Endurance, Iron Guard and Pressure',
     [('berserker', 'Berserker', 'Higher attack damage and stronger critical damage; lower maximum health and reduced healing received.', 'Fury · Brutality · Blood Price', 'Keep a reliable food and recovery supply. Trading defense for damage makes retreat timing more important.'),
      ('weapon_master', 'Weapon Master', 'More attack damage and attack speed; lower armor at the subclass root.', 'Technique · Tempo · Precision', 'Compare a weapon’s speed and moves as well as its listed damage before settling on a favorite.'),
      ('juggernaut', 'Juggernaut', 'More armor, health and healing received; lower movement speed and attack damage.', 'Fortress · Vitality · Recovery', 'Use your durability to control space, but keep an exit route when a boss forces movement.')],
     'Practice spacing, attack timing and recovery with one weapon before swapping between several movesets.'),
    ('ranger', 'Ranger', 'a', 'job_explorer', 'Projectile damage, movement and a mobile field-combat foundation.',
     'Archery, Quick Draw, Trailcraft, Steady Aim and Fieldcraft',
     [('marksman', 'Marksman', 'More projectile damage and faster bow drawing; lower movement speed.', 'Long Shot · Quick Draw · Deadeye', 'Choose firing positions with a clear retreat path instead of relying on speed to escape.'),
      ('hunter', 'Hunter', 'More movement, critical chance and a chance at duplicated mob loot; slower bow drawing.', 'Pursuit · Trophies · Killer Instinct', 'Plan your reload window and carry enough ammunition for a long exploration route.'),
      ('beastmaster', 'Beastmaster', 'More health, movement and mob experience; lower projectile damage.', 'Pack Endurance · Wild Pace · Beast Lore', 'This tree supports your endurance and exploration. Its name does not add pet commands or companion AI.')],
     'Practice firing at a safe target while moving, then compare shots taken against ammunition used.'),
    ('rogue', 'Rogue', 'd', 'questequipment', 'Movement, critical hits and evasive melee play.',
     'Light Feet, Dirty Fighting, Precision, Evasion and Quick Hands',
     [('assassin', 'Assassin', 'More movement and critical chance; lower maximum health.', 'Silent Step · Killer Instinct · Deathblow', 'Avoid committing to a long attack while your escape route is blocked.'),
      ('duelist', 'Duelist', 'More critical damage and dodge chance; lower armor.', 'Finesse · Footwork · Riposte', 'Dodge chance is a probability, so keep practicing movement and attack timing.'),
      ('shadowblade', 'Shadowblade', 'More critical chance and critical damage; lower armor and projectile damage.', 'Veil · Shadow Crit · Void Edge', 'The Void Edge path includes Ender-school support; check the actual ability and item school.')],
     'Use the training yard to test short attack windows, disengagement and stamina or cooldown recovery.'),
    ('mage', 'Mage', 'b', 'scroll', 'Mana and spell power with a lower melee-damage foundation.',
     'Arcane Power, Mana Reserve, Mana Flow, Focused Casting and Arcane Ward',
     [('elementalist', 'Elementalist', 'Supports Fire, Ice and Lightning schools, with cooldown support where the attribute is available.', 'Fire Mastery · Ice Mastery · Lightning Mastery', 'Compare the school on each spell; school bonuses do not automatically affect every addon spell.'),
      ('arcanist', 'Arcanist', 'More mana and spell power; lower melee damage.', 'Deep Reserves · Arcane Force · Flow', 'Test sustained casting over several fights, not only one fully charged opening.'),
      ('battlemage', 'Battlemage', 'More melee damage and spell power; reduced mana regeneration and cooldown-reduction value.', 'Spellsteel · Battle Casting · Arcane Guard', 'The reduced cooldown-reduction value is a tradeoff. Plan longer gaps between casts, with a useful weapon in between.')],
     'Test one damage spell and one utility spell while watching cost, cooldown and regeneration.'),
    ('cleric', 'Cleric', 'e', 'candle', 'Holy-school support, recovery and a sturdy support foundation.',
     'Faith, Prayer, Grace, Sacred Guard and Wisdom',
     [('priest', 'Priest', 'More Holy power and mana regeneration; lower Blood power and melee damage.', 'Divine Channel · Prayer · Grace', 'Select actual healing or support spells and read their targeting rules before helping a teammate.'),
      ('crusader', 'Crusader', 'More Holy power and armor; lower mana capacity and regeneration.', 'Consecrated Armor · Holy Power · Zeal', 'Balance weapon attacks with spell windows so your smaller mana reserve can recover.'),
      ('oracle', 'Oracle', 'Supports free-enchant chance and mana capacity; lower spell power and melee damage.', 'Foresight · Deep Insight · Knowledge', 'Free-enchant chance is a chance-based benefit, not an unlimited free crafting or enchanting recipe.')],
     'Practice a support or recovery spell in a safe space and carry a weapon for times when mana is low.'),
    ('occultist', 'Occultist', '5', 'poison', 'Blood, Ender and Eldritch themes with a less forgiving health foundation.',
     'Forbidden Study, Dark Reserve, Blood Rite, Void Study and Eldritch Study',
     [('blood_mage', 'Blood Mage', 'More Blood-school power; lower Holy power, maximum health and melee damage.', 'Sanguine Power · Sacrifice · Crimson Mastery', 'Read health-related costs before casting. A low-health character needs a reliable recovery plan.'),
      ('necromancer', 'Necromancer', 'Supports summon damage when that attribute exists, otherwise the script uses its spell-power fallback. More mana; lower Fire, Ice and Lightning power.', 'Summoning · Grave Reserve · Lord of the Dead', 'The tree strengthens supported summons; obtain and test the actual summon spell separately.'),
      ('voidcaller', 'Voidcaller', 'More Eldritch power, Ender power and mana; lower armor, health and melee damage.', 'Eldritch Power · Void Power · Abyssal Reserve', 'Carry a dependable escape tool and check which spells actually use your chosen school.')],
     'Test your chosen spell school safely and compare recovery options before using health-trading nodes.'),
]
for key, title, color, image, focus, foundation, subclasses, practice in CLASSES:
    c = chapter('class_' + key, 'character', 'Path of the ' + title, 'Class foundation · compare all three specializations', image)
    c['ftb_title'] = f'&{color}◆ &f&lPath of the {title}&r'
    c['default_hide_dependency_lines'] = False
    root = q(c, 'overview', title + ' at a glance', focus + ' Read the three specializations below, then make your personal investment in the skilltree.', 'Reading this page does not select the class. Compare the root’s bonuses and penalties on the actual skill node.', goal='Decide whether this combat foundation suits you.')
    q(c, 'foundation', 'Build your foundation', 'Your five inner branches are ' + foundation + '. Each branch contains four mandatory foundation nodes. Complete their requirements, class mastery and the specialization gate before entering a subclass.', 'Twenty inner foundation nodes are only part of the route; account for entry, root, mastery and gate nodes too.')
    for subkey, subtitle, tradeoff, paths, tip in subclasses:
        q(c, subkey, subtitle, tradeoff + ' These are the subclass’s starting tradeoffs and direction, not your character’s final stat totals.', tip, steps=['Compare the subclass root with your other two options.', 'Inspect its three paths: ' + paths + '.', 'Choose and invest in the personal skilltree when you are ready.'], goal='Understand the ' + subtitle + ' playstyle and its tradeoffs.')
        q(c, subkey + '_paths', subtitle + ' · three paths', 'The ' + subtitle + ' constellation contains three independent fourteen-node paths: ' + paths + '. Optional synergy notables support combinations; the all-path apex checks all three branches.', 'Finish each branch through its own prerequisites; a synergy node is not a shortcut to a different apex.', parent=uid(c['source_key'] + ':' + subkey))
    q(c, 'practice', 'Try the playstyle', practice, 'The activity check records your practice. It does not require you to spend points or commit to this class.', activity=True, steps=['Equip suitable gear you already have.', 'Practice in the town training yard.', 'Write down one strength and one weakness you noticed.'])
    for quest in c['quests']:
        quest['tags'].append('tk3_class_' + key)
    for quest in c['quests'][2:8:2]:
        quest['dependencies'] = [c['quests'][1]['id']]
    c['quests'][-1]['hide_dependency_lines'] = 'true'
    # Root and foundation sit above three separate subclass lanes.
    for index, quest in enumerate(c['quests']):
        if index < 2:
            quest['x'], quest['y'] = 0.0, index * 3.0
        elif index < 8:
            quest['x'], quest['y'] = ((index - 2) // 2 - 1) * 4.0, 6.0 + ((index - 2) % 2) * 3.0
        else:
            quest['x'], quest['y'] = 0.0, 12.0

c = chapter('professions', 'character', 'Professions & Everyday Work', 'Seven profession islands · activities that support your kingdom', 'jobs')
q(c, 'overview', 'Choose useful everyday strengths', 'Mining, Logging, Hunting, Exploration, Fishing, Farming and Crafting are skilltree investments alongside your combat build. You may take up to three profession masteries and up to three of the six focus nodes in each profession.', 'You can still do every activity without specializing in its profession.', caution='These activities do not implement a separate profession XP counter or award automatic skill points.')
PROFESSIONS = [
    ('mining', 'Mining', 'job_miner', 'Excavation and mining speed, ore-loot duplication chance and interaction reach.', 'Prepare a marked mining route, sort its haul and reserve material for the next workshop.', 'Check a loot-duplication node’s ore conditions. It is a chance, not a guaranteed double output.'),
    ('logging', 'Logging', 'job_lumberjack', 'Axe-based chopping, movement and axe durability.', 'Harvest a wood supply, save the saplings and establish a repeatable replanting area.', 'A Create saw’s output and a player’s axe-conditioned bonus are different systems.'),
    ('hunting', 'Hunting', 'job_fighter', 'Movement, mob-loot duplication chance and mob experience.', 'Complete a planned hunting trip and bring useful mob supplies back to the storehouse.', 'Keep a retreat route and reserve some inventory space for unexpected drops.'),
    ('exploration', 'Exploration', 'job_explorer', 'Travel speed, chest-loot duplication chance and luck.', 'Find a structure, record its location and return with a documented discovery.', 'Keep the discovery’s location even when you cannot clear the structure yet.'),
    ('fishing', 'Fishing', 'job_fisherman', 'Fishing-loot duplication chance, luck and fishing-rod durability.', 'Set up a fishing spot and stock fish for meals or recipes your team uses.', 'Read the node and rod conditions; a fishing bonus does not guarantee a particular rare catch.'),
    ('farming', 'Farming', 'job_farmer', 'Interaction reach, health support for farm work and hoe-conditioned breaking speed.', 'Create crop and animal-feed reserves that remain stocked after the factory takes its share.', 'The current profession does not give an automatic crop-growth-rate bonus.'),
    ('crafting', 'Crafting', 'hammer', 'Repair efficiency, free-enchant chance and mining-equipment durability.', 'Prepare a repair and equipment station, then maintain tools used by the workshop and explorers.', 'Crafting profession nodes do not remove recipe ingredients or provide free mechanisms.'),
]
for key, title, image, focus, activity, tip in PROFESSIONS:
    parent = q(c, key, title + ' · profession', focus + ' Inspect the three branches and six focus options in your personal tree before committing points.', tip, image=icon(image))
    q(c, key + '_project', title + ' · field assignment', activity, tip, activity=True, image=icon(image), parent=parent)
for index in range(len(PROFESSIONS)):
    for offset in (1, 2):
        node = c['quests'][index * 2 + offset]
        node['x'] = (index % 3 - 1) * 4.0
        node['y'] = (index // 3) * 7.0 + (3.0 if offset == 1 else 6.0)

c = chapter('combat', 'character', 'Combat, Movement & Equipment', 'Practice first · Epic Fight, ParCool, weapons and accessories', 'questequipment')
q(c, 'overview', 'Build a loadout you can use', 'The selected pack combines Epic Fight, Weapons of Miracles, Simply Swords, Iron’s spells, movement tools and the personal skilltree. Read the controls and test one complete loadout before taking it into a boss arena.', 'Change one equipment piece at a time when comparing builds.')
q(c, 'training', 'Use the training yard', 'Use a safe target to compare attacks, recovery, mana cost and movement. A dummy can help with controlled comparisons, but a stationary target does not reproduce a boss’s movement or resistance.', 'Repeat the same short attack sequence with both loadouts.', activity=True)
q(c, 'epic', 'Learn your weapon moves', 'Epic Fight and its weapon addons can give different weapons distinct attacks. Check battle-mode controls and the actual weapon’s supported moves rather than assuming every weapon handles alike.', 'Reserve room around the target while learning an unfamiliar combo.', activity=True)
q(c, 'mobility', 'Practice a clean escape', 'ParCool adds movement options with their own controls and conditions. Practice on a safe course, check your available movement resources and learn a route back to solid ground.', 'Test ladders, ledges and recovery in town before attempting the same movement over a dangerous drop.', activity=True)
q(c, 'armor', 'Armor and tradeoffs', 'Compare armor, durability, affixes and effects with your class penalties. A damage-focused subclass may give up health or armor; a casting build may need mana or regeneration as much as raw attack damage.', 'Do not discard a useful lower-rarity item merely because the replacement has a brighter name.')
q(c, 'accessories', 'Curios, Artifacts and Relics', 'Artifacts, Relics and their selected integrations add equipment with their own activation and upgrade rules. Read their tooltips and inspect Curios slots. Carry a few useful effects instead of assuming every found item works from the main inventory.', 'Test the effect in a safe area and check any charge, cooldown or unlock condition.', activity=True)
q(c, 'reliquified', 'Growing a relic', 'Reliquified Artifacts, Ars Nouveau and Twilight Forest extend the corresponding equipment systems. Follow the actual relic’s progression screen and requirements; an item discovery and a fully developed relic are different goals.', 'Build around a relic you can use regularly, and note which activities advance its own requirements.')
q(c, 'apotheosis', 'Affixes, gems and enchanting', 'Apotheosis and the selected Apothic systems add equipment and enchanting layers. Inspect affixes, sockets and the relevant workstation recipes in JEI before modifying a favorite item.', 'Use spare equipment to learn a workstation’s behavior before committing your best gear.', activity=True)
q(c, 'recovery', 'Prepare a recovery kit', 'Keep spare food, tools, blocks and a return plan at home. Shared quest progress does not remove the need to recover from an expedition that goes wrong.', 'Make the kit accessible to teammates who may help you return.', activity=True)


#// MECHANICAL GUIDES — real campaign processing and selected Create addons
c = chapter('automation', 'mechanical', 'Automation Workshop', 'Materials → mechanism → casing → machine · build reliable supply lines', 'hammer')
q(c, 'overview', 'A factory starts with the flow', 'Plan every line from raw input to useful output. Give each step its machine, power, ingredient buffer and collection point. Chapters I–X provide the recipes; this page helps make those recipes run continuously.', 'Test one batch before connecting a large farm or bulk storage buffer.')
q(c, 'su', 'Rotation, speed and stress', 'Create machinery needs a connected rotating network. Speed changes can also change stress requirements. Inspect the machine and network feedback before adding more equipment or gearing up.', 'When a line stalls, check the output, rotation and stress status before rebuilding the recipe.')
q(c, 'assembly', 'Build the assembly in order', 'T&K3 mechanisms use one-loop sequenced assembly. Put the base onto a belt or depot and carry it through the operations in the recipe’s exact order. The Kinetic Mechanism starts from a wooden slab, receives Andesite Alloy twice and finishes under an iron hammer.', 'A wrong ingredient or skipped operation leaves an incomplete item instead of a finished mechanism.', steps=['Stock each operation from a labelled buffer.', 'Place the listed finishing tool in the last Deployer.', 'Run one complete item and inspect the finished output.'], activity=True)
q(c, 'tools', 'Tools need a supply plan', 'Ordinary finishing tools wear during assembly. Chapter rewards replace that maintenance with a named unbreakable version per player. Until then, keep an accessible replacement buffer and inspect the final Deployer when production stops.', 'Keep combat tools out of the automatic ingredient feed.')
q(c, 'frames', 'Deploy the mechanism onto its casing', 'A machine frame is assembled by deploying its mechanism onto the matching casing. Stonecutting then turns a frame into a selected machine. It consumes that frame, so a list of stonecut outputs is a menu of separate choices.', 'Only the first Kinetic Machine has the expensive raw-material startup shortcut.', activity=True, steps=['Produce the correct casing.', 'Deploy its matching mechanism.', 'Stonecut the frame into the machine you need.'])
q(c, 'geology', 'Renewable stone and elements', 'Build a water/lava cobblestone or stone generator. Place the selector directly below the newly generated block and its correct frame one block below the selector. The custom generator changes the new stone into the selected geological block.', 'A missing selector or wrong frame gives the ordinary generator result. Obsidian remains obsidian.', steps=['Choose a row from the wiki’s generator table.', 'Place selector and frame in the two blocks below the generation position.', 'Run the generator and collect its output.', 'Mill the early material or crush it once Chapter III is available.'], activity=True, image=icon('ponder_stone_generation'))
q(c, 'geology-elements', 'Give each stone a destination', 'Andesite supplies clay, Diorite quartz, Granite lapis and Limestone bone meal. Veridium supplies copper and Crimsite iron. In Brass, Scoria supplies redstone, Scorchia coal, Asurine zinc and Ochrum gold. Milling and crushing have their own listed yields.', 'Keep the generator’s raw output apart from processed dusts and metals. Crushing Wheels start in Chapter III.')
q(c, 'tree', 'A renewable wood line', 'A Create tree farm needs harvesting, sapling supply, replanting and output transfer. Plan each job before scaling the contraption. Supported wood processing cuts logs into stripped logs, then six planks.', 'Keep a protected sapling reserve so downstream crafting cannot eat the next planting batch.', activity=True, steps=['Test the selected tree type on a small area.', 'Add harvesting and replanting.', 'Transfer the harvest into a wood buffer.', 'Send only the needed logs into processing.'])
q(c, 'slime', 'Wheat and kelp become slime', 'The authored mixer route uses one wheat, one kelp and 250 mB water to produce two slimeballs. Slime and dried kelp then feed Rubber Compound, making the early sealing line renewable.', 'Pump water into a dedicated buffer and keep surplus wheat available for food.', activity=True, tier=2)
q(c, 'washing', 'Fans and processing conditions', 'Washing, haunting and other fan processes depend on the correct fan setup and recipe. Use JEI and Ponder to check the required medium and placement. Do not assume every crushed item has a washing result.', 'Filter the output and test one item before attaching the entire ore store.', activity=True)
q(c, 'slicer', 'Slice & Dice in the kitchen', 'The Slicer automates supported Farmer’s Delight cutting recipes with the appropriate held knife. The Sprinkler belongs to the field-and-fluid tier. Inspect the actual supported cutting recipe and water arrangement before scaling.', 'Put a knife replacement plan next to the kitchen ingredients.', activity=True, tier=2)
q(c, 'storage-motion', 'Storage on a contraption', 'The selected Sophisticated integrations connect storage and backpacks to Create systems. Test the supported inventory on a small contraption and confirm which upgrades and transfers work there.', 'Verify that cargo leaves the moving inventory before extending the farm.', activity=True)
q(c, 'xp', 'Liquid experience and enchantments', 'Enchantment Industry gives experience-processing equipment and its native enchanting rules. Use the Chapter V routes, keep XP apart from water and other fluids, and check the selected recipe for the desired operation.', 'A liquid XP supply does not make every enchantment free or remove native requirements.', activity=True, tier=5)
q(c, 'stocking', 'Buffers before clever logistics', 'Use small input buffers, exact filters and a visible overflow plan. Brass-tier logistics can supply requested ingredients, but they still need available stock and working transfers.', 'A buffer near the machine makes it easier to see whether the failure is production or transport.', activity=True, tier=3)
q(c, 'continuous', 'Run a useful line unattended', 'Choose one renewable workshop material. Connect resource production, processing and storage, then let several complete batches run without hand-feeding ingredients.', 'Inspect the line again when the output buffer is nearly full.', activity=True, steps=['Choose an alloy, mechanism, crop or wood line.', 'Add filters and input reserves.', 'Test repeated batches and output collection.'])

c = chapter('networks', 'mechanical', 'Power & Digital Logistics', 'Chapter IV onward · Mekanism, AE2 and Applied Mekanistics', 'questinductive', tier=4)
q(c, 'overview', 'Three systems, three jobs', 'Create rotation runs the mechanical workshop. FE powers electric machinery. AE2 stores items and coordinates crafting. Mekanism chemicals add another material layer; a power cable is not a chemical pipe.', 'Build a small working example of each connection before combining them.')
q(c, 'bootstrap', 'Start electric power with precision', 'Chapter IV begins with heated steel, Steel Casing and Precision Mechanisms. These bootstrap powered processing, a Heat Generator, basic cables, the AE2 Charger and Inscriber before the Inductive Machine exists.', 'Follow Chapter IV’s order to avoid planning a machine that needs the component it is supposed to produce.', tier=4)
q(c, 'sides', 'Configure inputs and outputs', 'Mekanism machines have side and transfer settings. Give energy, items and chemicals the appropriate connections, then verify a single operation. Upgrading a machine is not a substitute for configuring it.', 'If the recipe is correct but no progress starts, inspect the machine’s energy and side screens.', activity=True, tier=4)
q(c, 'me', 'Your first ME network', 'Begin with power input, a terminal, a drive and a small storage cell. Add automation only after you can insert and retrieve materials reliably. The native network’s energy and channel rules still apply.', 'Keep frequently used ingredients in the network and a small recovery reserve outside it.', activity=True, tier=4)
q(c, 'pattern', 'Teach a process, then request it', 'Autocrafting needs a valid pattern, a supported execution device and somewhere for the result to return. Distinguish a crafting pattern from a processing recipe that runs in an external machine.', 'Test a single requested batch with empty machine inputs before building many parallel interfaces.', activity=True, tier=4)
q(c, 'preserving', 'Upgrades preserve what matters', 'The managed storage and factory upgrades retain their native component-preserving recipe behavior. Use the supported upgrade route to keep stored contents and configuration rather than substituting an arbitrary shaped recipe.', 'Make a backup before testing major inventory upgrades on your main world.')
q(c, 'chemicals', 'Chemical storage is its own layer', 'Applied Mekanistics adds chemical network storage alongside AE2. Chapter VI introduces the managed chemical housing and native preserving cell upgrades. Use compatible chemical storage and transfers rather than putting a gas into an item cell.', 'Keep each chemical line labelled. Hydrogen, chlorine and hydrogen chloride have different jobs.', activity=True, tier=6)
q(c, 'requests', 'Feed only what a machine needs', 'Keep background production and on-demand production distinct. A permanent supply line can fill a buffer; a request-based line should return precisely the expected result to the network.', 'Reserve some basic materials so a request does not consume all of your startup stock.', activity=True, tier=6)
q(c, 'remote', 'A remote factory still needs service', 'Wireless and quantum links help with remote storage access, but their native energy, range, channel and linking rules remain. Remote machines also need working world loading under your instance’s settings.', 'Test insertion, retrieval and production while you are away from the workshop.', activity=True, tier=9)

c = chapter('transport', 'mechanical', 'Routes, Rails & Airships', 'A connected kingdom · Brass transport and Integrated expeditions', 'rope', tier=3)
q(c, 'overview', 'Choose the route for the job', 'Roads, Create transport, Hypertubes, Waystones and Aeronautics serve different kinds of travel and cargo. Plan stations and delivery inventories before adding long routes.', 'Start with a short route between two known inventories or safe landing points.')
q(c, 'hypertube', 'Test a short Hypertube route', 'Chapter III supplies precision-based entrances and accelerators alongside native tube sections. Build a short accessible route, supply its required power and test both ends before extending it.', 'Leave room around entrances so you can service the route.', activity=True, tier=3)
q(c, 'rail', 'Give a route a useful cargo job', 'Use Create’s supported transport components and Ponder to plan track, stations and cargo handling. Tie each destination to a real buffer, such as crop delivery or timber collection.', 'Confirm unloading before adding another stop.', activity=True, tier=3)
q(c, 'colony-link', 'Supply the colony through the workshop', 'Create: MineColonies Link is selected to connect workshop logistics with colony requests. Inspect the installed link’s supported blocks and in-game guidance, then test one requested material with a small supply.', 'Give the colony a dedicated buffer so settlement demand does not consume the entire mechanism line.', activity=True, tier=3)
q(c, 'hull', 'Build the first expedition vessel', 'Chapter VII introduces Expedition Frames for Aeronautics controls. Plan a light hull, balanced propulsion, steering, fuel or power, and cargo access. Follow the addon’s actual supported setup.', 'Test turning, stopping and cargo access close to home before crossing a long distance.', activity=True, tier=7)
q(c, 'mek-compat', 'Power and processing aboard', 'Aeronautics Mekanism compatibility provides the selected moving-vessel integration. Check which blocks and networks are supported in the installed versions, then test one electric machine aboard before expanding.', 'Observe power, inputs and outputs during movement as well as while parked.', activity=True, tier=7)
q(c, 'vessel-compat', 'Travel and magic aboard', 'The current selection includes Aeronautics integrations for FTB Chunks, Iron’s Spells and Waystones: Sable. Read each installed addon’s supported behavior and settings before relying on claims, spell effects or travel from a moving vessel.', 'Test the exact interaction on a short trip with a safe landing point.', activity=True, tier=7)
q(c, 'outpost', 'Build a resupply outpost', 'Make a remote stop with fuel or energy, food, storage and repair supplies. Record the approach route and a safe landing area so the next expedition starts prepared.', 'Leave an emergency return option for the crew.', activity=True, tier=7)


#// MAGIC — distinct systems, native guides and a parallel Chapter IV workshop
c = chapter('ars', 'magic', 'Ars Nouveau · The Living Workshop', 'Spells, Source and magical automation alongside the factory', 'bookopen')
q(c, 'overview', 'Learn Ars on its own terms', 'Ars Nouveau combines a spellbook, glyphs, Source and automation devices. Use its in-game guide and JEI together. Your class’s Iron’s spell attributes do not automatically describe every Ars spell or Source device.', 'Start with one useful spell and one reliable Source supply.')
q(c, 'book', 'A first spellbook', 'Follow the native spellbook recipe and upgrade requirements shown in JEI. Read the guide’s instructions for making and editing a spell, then test a simple combination in a safe area.', 'Keep spell testing away from crops, settlers and important machine rooms.', activity=True)
q(c, 'glyphs', 'Read glyphs before combining them', 'Glyphs describe how a spell starts, what it does and how it is modified. Inspect the available glyphs and their costs before building a complicated sequence.', 'A short spell whose effects you understand is easier to improve.', activity=True)
q(c, 'source', 'Source is a production supply', 'Sourcelinks generate Source under their own conditions and jars hold it for supported devices. The Chapter IV Agronomic Sourcelink bootstrap uses wheat, Source Gems, a Source Jar and a Precision Machine.', 'Keep Source generation close enough to the actual consumers under Ars’s native transfer rules.', tier=4)
q(c, 'apparatus', 'A parallel arcane workshop', 'A Precision Machine bootstraps the Enchanting Apparatus before the custom Arcane Machine. Produce Arcane Casing and its sequenced mechanism, then deploy the mechanism onto the casing. This is a supporting branch alongside electric industry.', 'The Arcane Machine is not a prerequisite for starting the first Source supply.', activity=True, tier=4)
q(c, 'helpers', 'Helpers with clear jobs', 'Ars automation helpers each have their own binding and task rules. Give a helper one supported job and a visible destination, then test collection before adding more work.', 'Keep the output inventory accessible so you can see whether the helper is collecting or stalled.', activity=True, tier=4)
q(c, 'creo', 'Ars Creo · Starbuncle Wheel', 'Ars Creo’s Starbuncle Wheel adds a real Ars/Create connection. Follow its native operating rules and Ponder or in-game guide, then test it on a small rotating setup.', 'Check the wheel’s actual operating conditions instead of treating Source as a universal replacement for every power system.', activity=True, tier=4)
q(c, 'create-ars', 'Create and Source together', 'Create: Ars Nouveau compatibility and Wizardry are selected workshop integrations. Inspect each actual recipe and machine tooltip to see whether the process needs rotation, Source, a spell or more than one system.', 'Label Source connections separately from water, liquid XP and other fluid lines.', activity=True, tier=4)
q(c, 'reliquified', 'Magical equipment and relics', 'Reliquified Ars Nouveau and Ars ’n Spells extend selected equipment or compatibility systems. Read the item’s own effects and restrictions; an Ars item and an Iron’s spellbook still have distinct rules.', 'Test one supported effect at a time when comparing a hybrid loadout.')
q(c, 'project', 'A living supply line', 'Build one Ars-assisted crop, collection or processing setup whose output feeds the workshop or storehouse. Include Source supply, the helper or device and a collection buffer.', 'Keep manual access to the buffer so the team can service the line.', activity=True, tier=4)

c = chapter('spells', 'magic', 'Iron’s Spells · The Spellcraft Hall', 'Schools, mana, scrolls, jewelry and selected spell addons', 'scroll')
q(c, 'overview', 'Build a useful spell loadout', 'Iron’s Spells ’n Spellbooks uses its own spells, schools, mana and equipment. Start with a damage option and a utility or recovery option, then compare their costs and cooldowns.', 'Your spell’s actual school matters more than the visual color of its effect.')
q(c, 'scrolls', 'Learn the scroll and book rules', 'Use found or crafted scrolls and the supported spellbook stations according to their native requirements. Inspect rarity, level, slots and prerequisites before committing a valuable scroll.', 'Keep a record of the spells you already use so you do not replace a useful utility spell by accident.', activity=True)
q(c, 'mana', 'Mana, casting time and cooldown', 'Mana capacity, regeneration, casting time and cooldown are different limits. A bigger mana pool does not guarantee faster recovery between fights. Read your gear and skill node effects together.', 'Test several casts in succession and watch what becomes the bottleneck.', activity=True)
q(c, 'schools', 'Specialize by school', 'The current classes support Holy, Blood, Ender, Eldritch, Fire, Ice and Lightning themes in different ways. Read a spell’s tooltip to confirm that it belongs to the school you are building around.', 'The relevant attribute must exist in the installed mod version for a school-specific bonus to apply.')
q(c, 'cauldron', 'Brewing and spell supplies', 'The selected Iron’s KubeJS bridge manages supported cauldron recipes while native spell systems remain. Inspect the exact recipe and fluid requirement in JEI before building a potion or reagent supply.', 'Keep brewing inputs and finished bottles in separate storage.', activity=True)
q(c, 'jewelry', 'The Jewelcrafting Guide', 'Iron’s Gems ’n Jewelry keeps its native jewel and component systems. Chapter II supplies the station and guide. Read the actual jewel and component effects before assembling equipment for your class.', 'Use the station recipe and guide together; a jewel’s effect depends on the resulting equipment.', item='irons_jewelry:jewelcrafting_guide', tier=2, goal='Obtain and read the Jewelcrafting Guide.')
q(c, 'world-addons', 'Spells found through adventure', 'Alex’s Caves: Spellbooks, Cataclysm: Spellbooks and Twilight Forest: Spellbooks connect magic to their corresponding adventures. Inspect the installed addon’s JEI entries and discovery rules, then choose one spell to pursue.', 'Let your current workshop access and combat readiness guide the destination.', activity=True)
q(c, 'special-addons', 'Expanded spell schools and effects', 'Geomancy Plus, Archaion: Echoes of the Fallen and Echoing Magic: Esoteric Spells of the Fallen are selected spell additions. Read each spell’s real school, acquisition route and effect. The questbook does not invent an unlock item for these native spells.', 'Compare new spells in the training yard before relying on them during a boss fight.', activity=True)
q(c, 'class-match', 'Match spellcraft to a class', 'Mage favors sustained or elemental casting, Cleric favors Holy and recovery themes, and Occultist favors Blood, summons or void schools. Rogue and Warrior hybrid paths can support specific effects without making every spell a melee bonus.', 'Read the class and subclass root penalties before choosing your final equipment.')
q(c, 'practice', 'A complete spellcraft trial', 'Equip your chosen book and accessories, test a damage spell and a utility or recovery spell, then finish an ordinary expedition without exhausting your supply plan.', 'Bring normal food and equipment too; spells are part of the loadout.', activity=True)

c = chapter('witchery', 'magic', 'Witchery · The Hedge Scholar', 'Just Another Witchery Remake · native discovery and a careful study journal', 'herb')
q(c, 'overview', 'A different magical tradition', 'Just Another Witchery Remake is in the current alpha mod selection. Its magic is a separate branch from Ars Source and Iron’s spellbooks. Use the installed mod’s guide entries and JEI to discover the available systems.', 'Keep a dedicated study journal for recipes and prerequisites you have actually found.')
q(c, 'study', 'Find the first native guide', 'Inspect the installed Witchery entries and locate the guide or starter information available in this release. Record one verified starting recipe and its ingredients.', 'Addon versions can differ, so follow the guide in your instance.', activity=True)
q(c, 'garden', 'The hedge garden', 'Choose a plant or reagent that the installed Witchery recipes use, identify its actual source and grow or gather a renewable supply where the native rules allow it.', 'Protect a planting reserve before sending herbs into crafting.', activity=True)
q(c, 'workspace', 'A separate ritual workspace', 'Set aside an accessible area for the native workstations or ritual setups you discover. Follow their actual placement and environment requirements rather than substituting a Create basin or Ars apparatus.', 'Leave space to expand without moving the whole workshop.', activity=True)
q(c, 'first-process', 'Document one working process', 'Choose a native Witchery process, complete its prerequisites and run it. Write down the input, required setup and result so another player can reproduce it.', 'Confirm the result before reserving large quantities of a rare reagent.', activity=True)
q(c, 'project', 'A hedge scholar’s contribution', 'Find one native Witchery result that is useful to your own adventures or settlement. Prepare its materials, demonstrate the result and add it to the town library’s notes.', 'The activity check records the project; it does not add a custom transformation or ritual unlock.', activity=True)


#// ADVENTURE — exploration goals and honest campaign boss references
c = chapter('exploration', 'adventure', 'The Explorer’s Journal', 'Worlds, structures, travel and a safe return', 'job_explorer')
q(c, 'overview', 'Explore with a purpose', 'Choose a destination for a useful discovery: crop, building palette, spell, equipment or workshop ingredient. Bring supplies, inventory space and a plan for returning home.', 'Record discoveries you cannot use yet; they may become useful in a later tier.')
q(c, 'biomes', 'A world of building palettes', 'Biomes O’ Plenty, Oh The Biomes We’ve Gone, Atmospheric, Environmental, Autumnity and other selected world mods add places and materials to explore. Bring home a palette sample and note its location.', 'Check whether a plant can be grown at home before committing to a long repeat trip.', activity=True)
q(c, 'structures', 'Discover a new structure', 'Integrated structures, YUNG’s improvements and the selected dungeon additions create exploration destinations. Approach carefully, identify an exit and distinguish ordinary loot from a boss objective.', 'Mark the entrance and unfinished rooms on your map.', activity=True)
q(c, 'lootr', 'Looting as a team', 'Lootr is selected for supported personal-loot containers. Read the actual container feedback and server settings rather than assuming every chest in the world behaves the same.', 'Agree on rules for ordinary shared chests and expedition supplies.')
q(c, 'waystone', 'A useful travel stop', 'Waystones and the selected Better Party integrations support travel arrangements under their actual settings. Establish a safe stop and check activation, cost and party access before relying on it as the only return route.', 'Give destinations clear names that the whole team can recognize.', activity=True)
q(c, 'nether', 'The Brass expedition', 'Nether entry begins after Chapter II. Find the ingredients and Blaze access required by the Brass workshop, then record a safe return path. BetterNether and the selected Nether world changes provide further destinations.', 'Capture a Blaze in the appropriate burner when preparing heated brass production.', activity=True, tier=3)
q(c, 'caves', 'Discover an Alex’s Cave', 'Alex’s Caves and its selected spell integration offer biome-specific discoveries. Follow their actual guide and discovery mechanics, identify the biome’s hazards and return with one useful finding.', 'Stock supplies for the conditions of the cave you are visiting.', activity=True)
q(c, 'mobs', 'A bestiary entry', 'Alex’s Mobs, Mowzie’s Mobs, Ice & Fire and the selected encounter mods bring creatures with different behaviors. Observe one new creature, read available guidance and record how to approach or avoid it.', 'An unfamiliar creature is not automatically safe because it looks peaceful.', activity=True)
q(c, 'return', 'Bring the discovery home', 'Sort an expedition’s haul into food, building materials, gear, magic and progression supplies. Record where rare materials came from so the next trip has a clear purpose.', 'Leave room in the incoming-materials area before the team returns with full backpacks.', activity=True)

c = chapter('trials', 'adventure', 'The Boss Trial Ledger', 'Five permanent campaign catalysts · extra encounters stay optional', 'questender', tier=5)
q(c, 'overview', 'Know which trial matters', 'The campaign uses Dragon Core, Verdant Sigil, Storm Core, Ember Core and Void Core. Their actual detected kill goals and rewards live in the matching Mechanical chapter. Other bosses remain optional adventures.', 'Use this ledger for preparation and the main chapter for the detected kill task.')
for key, title, tier, body, tip in [
    ('dragon', 'Chapter V · The Ender Dragon', 5, 'Open the End through its native twelve-different-eyes requirement. The detected Dragon trial in Chapter V awards the permanent Dragon Core as a team reward.', 'Collect Dragon’s Breath while the fight gives you the opportunity; it supports later processing.'),
    ('lich', 'Chapter VI · The Twilight Lich', 6, 'Follow Twilight Forest’s native progression to the Lich. A player kill gives the reusable Verdant Sigil through the authored loot rule.', 'Clear the native earlier progression and read the boss’s defenses before starting the fight.'),
    ('harbinger', 'Chapter VII · The Harbinger', 7, 'Prepare for Cataclysm’s Harbinger encounter. A player kill gives the reusable Storm Core. Use the chapter’s detected trial to follow campaign progress.', 'Prepare your arena approach, recovery supplies and a clear way to retreat before engaging.'),
    ('ignis', 'Chapter VIII · Ignis', 8, 'Prepare for the native Ignis encounter. A player kill gives the reusable Ember Core; it remains a catalyst for the final imprinting sequence.', 'Practice your current weapon and spells before entering the arena with valuable equipment.'),
    ('guardian', 'Chapter IX · The Ender Guardian', 9, 'The Ender Guardian’s player-kill drop gives the permanent Void Core. The trial is available before the boss-gated Singularity Frame and supports Void-attuned Singularity production.', 'Do not plan the core’s first acquisition around equipment that already needs that core.'),
]:
    q(c, key, title, body, tip, tier=tier, goal='Understand the trial and prepare for its main-chapter quest.')
q(c, 'retained', 'Keep the cores, repeat the production', 'Core-bearing deployment steps retain their core. The final Sovereign Keystone imprints all five onto a Sovereign Core and finishes with the ordinary Enchanter’s Sword. Repeated boss kills can supply additional parallel catalyst stations.', 'Store cores in a labelled secure inventory and keep them out of void or disposal upgrades.', tier=10)
q(c, 'optional', 'Extra bosses and discoveries', 'Bosses’ Rise, Mowzie’s Mobs, Ice & Fire, Cataclysm and selected structure addons offer more encounters than the five mandatory campaign catalysts. Choose one suitable encounter and document its native reward.', 'Optional encounters do not award invented campaign cores.', activity=True)

c = chapter('twilight', 'adventure', 'Into the Twilight Forest', 'Native adventure order · Lich catalyst from Chapter VI', 'lantern')
q(c, 'overview', 'Follow the forest’s own progression', 'Twilight Forest has its own entry and boss progression. Use the native guide, advancements and in-world clues to understand the next destination. The campaign’s Verdant Sigil comes from the Lich player kill.', 'A workshop tier does not skip the forest’s earlier native progression requirements.')
q(c, 'portal', 'Prepare the forest journey', 'Read the installed portal requirements, bring food and a return plan, and mark your entry location. Leave space for discoveries instead of bringing every workshop tool.', 'Keep a spare recovery kit on the home side of the portal.', activity=True)
q(c, 'first', 'Your first forest objective', 'Complete an early native forest objective and read the advancement or guide that explains the next one. Record a route and useful materials for a return visit.', 'Use native progression feedback when a biome or boss is inaccessible.', activity=True)
q(c, 'lich', 'Prepare for the Lich trial', 'Complete the forest’s preceding requirements, find the Lich destination and review your loadout. Chapter VI contains the campaign kill task; its authored player-kill loot gives the Verdant Sigil.', 'Take a reliable ranged or spell option if your chosen approach needs one.', activity=True, tier=6)
q(c, 'relics', 'Forest relics and spellbooks', 'The selected Reliquified Twilight Forest and Twilight Forest: Spellbooks integrations add their own discoveries. Inspect what you actually find and follow each item’s native upgrade or acquisition rules.', 'Keep promising equipment even if it suits another teammate’s class better.', activity=True)
q(c, 'journal', 'A reusable forest route', 'Record entry, cleared objectives, useful materials and an unfinished destination in the town library. Bring home enough supplies to make the next trip a planned expedition.', 'Separate progression trophies and crafting supplies when sorting the haul.', activity=True)

c = chapter('end', 'adventure', 'Beyond the End Portal', 'Chapter V · unique eyes, the Dragon and renewable End materials', 'questender', tier=5)
q(c, 'overview', 'Prepare before crossing', 'The End opens after Chapter IV. End Remastered still requires twelve different valid eyes. Four eyes have authored Inductive Mechanism deployment routes; other unique eyes retain their native discovery sources.', 'Keep a list of distinct eye types instead of collecting twelve copies of the same one.')
q(c, 'eyes', 'Twelve different eyes', 'Inspect the four managed eye deployments in Chapter V and gather the remaining valid types through exploration. Check the portal’s native acceptance rules before committing your collection.', 'Build several exploration goals around eye types you are still missing.', activity=True, tier=5)
q(c, 'dragon', 'The first Dragon expedition', 'Prepare blocks, food, equipment, free bottle space and a return plan. Follow the detected Chapter V Dragon trial and manually claim its Dragon Core reward after the kill is recorded.', 'Keep the core for production; the first core comes from the quest reward rather than a guessed Dragon loot recipe.', tier=5)
q(c, 'breath', 'Bring back Dragon’s Breath', 'Collect Dragon’s Breath during the fight. Create: Dragons Plus uses its native breath filling, emptying and ending fan processes, with the managed fluid hatch supporting transport.', 'Keep empty bottles ready before the fight and sort the collected breath into its own supply.', activity=True, tier=5)
q(c, 'chorus', 'Grow the End at home', 'Bring chorus supplies and End Stone home, then build a repeatable growing and harvest area. Chorus supports the Ender and chemical workshop layers.', 'Reserve planting stock before feeding chorus to industrial processing.', activity=True, tier=5)
q(c, 'landscape', 'Explore the End’s new palette', 'BetterEnd: New Dawn, Nullscape and the selected End changes provide destinations and materials beyond the first island. Plan travel, record routes and bring home a building or crafting discovery.', 'Keep a dependable return option before extending a remote exploration route.', activity=True, tier=5)

c = chapter('aquatic', 'adventure', 'Oceans & Aquatic Workshops', 'Copper tier · Upgrade Aquatic and Create: Aquatic Ambitions', 'job_fisherman', tier=2)
q(c, 'overview', 'An ocean worth exploring', 'Upgrade Aquatic supplies selected aquatic world content. Create: Aquatic Ambitions connects ocean materials to the workshop. Bring breathing and travel supplies appropriate to the actual destination.', 'Start with a nearby coast and record useful ocean locations.')
q(c, 'calcium', 'Calcium-Rich Powder', 'The managed mixing route uses bone meal, kelp and water. Keep these inputs available for Prismarine Alloy production and follow the Chapter II metallurgy chain.', 'Limestone milling can support the bone-meal buffer.', item='create_aquatic_ambitions:calcium_rich_powder', tier=2, goal='Produce Calcium-Rich Powder for the aquatic metallurgy line.')
q(c, 'prismarine', 'Prismarine Alloy', 'Compact prismarine shard, copper sheet and calcium powder into the managed alloy. Continue through the listed rods and Conduit Cage components rather than assuming every aquatic block shares a vanilla recipe.', 'Reserve ocean materials for the first cage before spending them on decorations.', item='create_aquatic_ambitions:prismarine_alloy', tier=2, goal='Produce the aquatic workshop alloy.')
q(c, 'conduit', 'Read the real channeling process', 'Build the managed Conduit Cage and use Aquatic Ambitions’ actual channeling recipes. Its conduit ingredient comes from ocean exploration; the alloy route does not remove that exploration step.', 'Use the recipe tab to check each channeling operation’s real requirements.', activity=True, tier=2)
q(c, 'fishing', 'A coastal supply station', 'Build a safe coastal store with fishing supplies, spare food and space for kelp and ocean materials. Connect a useful resource to the town storehouse.', 'Keep a few exploration supplies in the station for the next trip.', activity=True)


#// KINGDOM LIFE — farms, storage, settlements and practical buildings
c = chapter('farms', 'kingdom', 'Fields, Food & the Kitchen', 'Farmer’s Delight, Slice & Dice and the selected Let’s Do cooking mods', 'job_cook')
q(c, 'overview', 'Food and industry share the fields', 'Your crops can feed players, colony workers and the factory. Wheat and kelp support slime and seals; later crop processing supplies Bio Fuel. Plan separate food, planting and industrial buffers.', 'A factory should receive the surplus, not consume the farm’s last planting materials.')
q(c, 'plots', 'A farm with a clear job', 'Choose a crop your team uses and build a small farm with access to water, collection and a planting reserve. Check the crop’s actual growing rules and available harvesting methods.', 'Make each field’s destination visible with a sign or labelled chest.', activity=True)
q(c, 'kelp', 'The useful kelp patch', 'Kelp feeds Algal Blend, the slime route and aquatic calcium production. Build collection first and keep the factory’s intake separate from a spare growing area.', 'The manual blend route starts your workshop; mixing improves its yield later.', activity=True)
q(c, 'cutting', 'A proper cutting station', 'Farmer’s Delight cutting recipes use their listed tool and output rules. Start with the native board, inspect recipes in JEI and later automate supported cuts with Slice & Dice.', 'Keep ingredients and the cutting tool nearby so manual food prep remains easy.', activity=True)
q(c, 'stove', 'The Stove', 'Use Farmer’s Delight’s native cooking setup and recipes to prepare repeatable meals. Plan the input supply and finished-meal storage before adding automatic transfers.', 'Choose a meal whose ingredients are already renewable in your settlement.', item='farmersdelight:stove', goal='Obtain a Stove and prepare a place for the kitchen.')
q(c, 'variety', 'More kitchens, more choices', 'Farm & Charm, Bakery, Brewery, Candlelight and BloomingNature add selected farming, food or decoration content. Inspect each mod’s actual recipe stations rather than treating every dish as a Farmer’s Delight pot recipe.', 'Pick one useful recipe from each system you want to build, instead of stocking every ingredient at once.')
q(c, 'animals', 'Keep animal feed in reserve', 'Plan shelter, breeding supplies and collection around the animals you actually keep. Store animal feed apart from the crop input that the factory consumes.', 'Leave safe access for manual care even if parts of the collection become automatic.', activity=True)
q(c, 'sprinkler', 'The Copper irrigation project', 'Chapter II includes the frame-based Sprinkler and hydraulic machinery. Follow the installed Sprinkler’s water requirements, then test a small field before expanding.', 'Inspect water supply and collection when evaluating the field’s performance.', activity=True, tier=2)
q(c, 'slime', 'A farm that feeds the sealing line', 'Connect wheat and kelp reserves to the water-fed mixer route: one wheat, one kelp and 250 mB water produce two slimeballs. Use the output for Rubber Compound and Copper-tier mechanisms.', 'Protect meal ingredients and replanting stock with separate buffers.', activity=True, tier=2)
q(c, 'biofuel', 'Food surplus becomes feedstock', 'Chapter VI turns suitable farm output into Mekanism Bio Fuel and the native substrate/ethylene/HDPE chain. Use JEI to choose a supported crop input; keep food-grade output available for people too.', 'Begin with the Ender Machine bootstrap equipment before planning Chemical Machine upgrades.', activity=True, tier=6)
q(c, 'kitchen-project', 'A kitchen the whole team can use', 'Build a repeatable meal line with ingredient storage, the proper cooking station and finished-food collection. Demonstrate several batches and stock the expedition locker.', 'Place a small manual prep area next to the automated line.', activity=True)

c = chapter('storage', 'kingdom', 'Storage, Backpacks & Collection', 'Useful upgrades early · digital storage later', 'satchel')
q(c, 'overview', 'Sort by what you do next', 'Use named storage for crops, stone, processed metals, mechanisms, tools and expedition loot. Sophisticated Storage and Backpacks add useful upgrades, while ME arrives with Chapter IV.', 'Keep an incoming-materials chest so explorers can unload before sorting.')
q(c, 'backpack', 'A Backpack', 'A backpack gives your expeditions a dedicated inventory and upgrade system. Inspect its upgrade slots and tier recipe before adding features.', 'Leave a few empty slots for discoveries rather than filling every slot with emergency supplies.', item='sophisticatedbackpacks:backpack', goal='Obtain a Backpack for supplies and discoveries.')
q(c, 'hopper', 'The Hopper Upgrade', 'A Hopper Upgrade transfers between adjacent inventories using its configuration. It is useful for early machine input and output handling; it does not replace a Pickup Upgrade’s dropped-item job.', 'Set filters and test the transfer direction with a small item stack.', item='sophisticatedstorage:hopper_upgrade', goal='Obtain and configure a Hopper Upgrade.')
q(c, 'pickup', 'The Pickup Upgrade', 'Use the Pickup Upgrade for dropped-item collection under its actual range and filter rules. Check the correct storage or backpack variant instead of assuming every upgrade fits both.', 'Test with a few dropped items before relying on it for an entire farm.', item='sophisticatedbackpacks:pickup_upgrade', tier=2, goal='Obtain a Backpack Pickup Upgrade and inspect its settings.')
q(c, 'filter', 'Keep the important things', 'Filter what goes into each buffer. Planting stock, tools, boss catalysts and finished mechanisms need different destinations from ordinary overflow.', 'Keep your core inventory out of automatic disposal and void-upgrade routes.', activity=True)
q(c, 'upgrades', 'Upgrade the stored inventory', 'Use the supported tier and upgrade recipes shown in JEI. The managed preserving recipes retain native inventory components; inspect the intended result before upgrading your main container.', 'Test an upgrade on a small spare container first.')
q(c, 'moving', 'Storage that moves', 'The selected Sophisticated Create integrations support their corresponding contraption inventory features. Test one supported container and transfer arrangement before turning it into a full harvesting system.', 'Watch the inventory during movement and when unloading.', activity=True)
q(c, 'digital', 'Hand off to ME cleanly', 'When Chapter IV opens digital storage, decide which buffers remain local and what moves into ME. Local food, tools and recovery materials are still useful when the network is unavailable.', 'Keep a visible reserve for the equipment that restores power or storage access.', activity=True, tier=4)

c = chapter('colonies', 'kingdom', 'Build Your Colony', 'MineColonies, TownTalk and a factory that supplies the settlement', 'bell')
q(c, 'overview', 'Choose space for a real town', 'MineColonies has its own building, worker and research progression. Plan a location with room for buildings, roads and later expansion; inspect the native colony guide before placing the first layout.', 'Preview buildings and routes before filling the area with machines.')
q(c, 'supply', 'The settlement supply plan', 'Prepare the native starting supplies shown in JEI and the colony guide. Keep the first builder’s requested materials in a dedicated buffer so workshop crafting cannot take them unexpectedly.', 'Choose a building style whose materials you can gather reliably.', activity=True)
q(c, 'builder', 'The Builder’s Hut', 'A builder manages native construction work through its hut and request system. Read the current request and provide the needed materials rather than repeatedly placing new unfinished projects.', 'Complete a small first build to learn the colony workflow.', item='minecolonies:blockhutbuilder', goal='Obtain a Builder’s Hut and plan its placement.')
q(c, 'housing', 'Homes, food and work', 'A settlement needs housing, food access and suitable jobs according to MineColonies’ native requirements. Grow one manageable neighborhood before creating demand across a huge unfinished town.', 'Use the colony screens to check what the citizens actually need.', activity=True)
q(c, 'warehouse', 'A readable warehouse', 'Plan deliveries and central storage around the colony’s supported warehouse and worker systems. Label the workshop’s supply buffer and avoid sending every rare material to general settlement storage.', 'Reserve factory catalysts and future-tier materials in a separate secure area.', activity=True)
q(c, 'research', 'Follow the colony’s research', 'MineColonies research and building upgrades have their own native conditions. Read the requirement in the colony UI and pursue the next useful service rather than assuming a workshop milestone unlocks it automatically.', 'Choose a research goal that solves a current shortage.')
q(c, 'requests', 'Connect one Create supply', 'Create: MineColonies Link supports the selected workshop integration. Follow the installed link’s guidance and test one colony material request from a dedicated Create supply.', 'Record where the request enters and where delivery finishes before expanding.', activity=True, tier=3)
q(c, 'town-talk', 'Make the town feel inhabited', 'TownTalk and the selected colony integrations add character to settlement life. Explore the supported interactions and keep paths, service areas and citizen access clear.', 'Design plazas and practical service routes together rather than decorating over the traffic paths.', activity=True)
q(c, 'defense', 'A town ready for trouble', 'Follow the native colony’s guard and defense requirements, secure supply access and leave clear routes through the settlement. Test your own combat away from fragile colony work areas.', 'Keep a shared recovery kit and food reserve accessible.', activity=True)
q(c, 'district', 'A working kingdom district', 'Finish a district with housing, a useful service, food access and a supplied construction or delivery route. Add signs so a new teammate can understand the town’s organization.', 'A smaller finished district is easier to maintain and expand.', activity=True)

c = chapter('building', 'kingdom', 'Builders & Practical Details', 'Chipped, Architect’s Palette, Supplementaries and Amendments', 'lantern')
q(c, 'overview', 'A building with a clear purpose', 'Give each building a job, a palette and room for access. Separate noisy processing, storage, food and magical experiments, then connect them with readable paths.', 'Use a limited palette with one accent material so the workshop remains easy to navigate.')
q(c, 'chipped', 'The Carpenter’s Table', 'Chipped workbenches turn supported materials into decorative variants. Inspect which workbench handles your chosen palette and keep these choices distinct from progression frames.', 'Test a wall section before producing the entire building palette.', item='chipped:carpenters_table', goal='Obtain a Carpenter’s Table and inspect its decorative options.')
q(c, 'palette', 'Architect’s Palette in the workshop', 'Architect’s Palette provides building materials and the Algal Blend used by the early industrial route. Decorative variants do not replace the required mechanism or frame in a machine recipe.', 'Reserve enough kelp and clay for progression before committing them to a large build.')
q(c, 'supplementaries', 'Details that help people', 'Supplementaries and Amendments add practical building and interaction details. Choose actual supported items for signs, lighting, displays or useful room functions by reading their tooltips and recipes.', 'A clear label beside an ingredient buffer is a useful part of the build.', activity=True)
q(c, 'access', 'Design for maintenance', 'Leave room to reach machine faces, filters, tanks and tool-holding deployers. Add walkways through a factory so expanding a line does not cut off the rest of the building.', 'Plan vertical access before stacking a second processing floor.', activity=True)
q(c, 'palette-project', 'Finish a readable workshop room', 'Build a room with a consistent palette, visible storage labels, a clear machine flow and safe access to every important input and output.', 'Keep the raw-input end and finished-output end recognizable at a glance.', activity=True)


#// CAMPAIGN GUIDANCE — retain every ID and every gate; add recipe-specific help
NAMES = {('kubejs:tk3_' + key): value for key, value in M['custom_items'].items()}
NAMES.update({M['frames'][str(t)]: M['frame_labels'][str(t)] for t in range(1, 11)})


def label(value):
    if isinstance(value, dict):
        if value.get('fluid'):
            return str(value.get('amount', '')) + ' mB ' + label(value['fluid'])
        return json.dumps(value, ensure_ascii=False)
    value = str(value)
    count, sep, rest = value.partition('x ')
    if sep and count.isdigit():
        return count + ' × ' + label(rest)
    if value.startswith('#'):
        return 'any matching ' + value.split(':', 1)[-1].replace('_', ' ')
    return NAMES.get(value, value.split(':', 1)[-1].replace('_', ' ').title())


TIER_TIPS = {
    1: 'Keep wheat, kelp and clay buffers near the first workshop. Build several manual frames before automating mechanisms.',
    2: 'Separate water, crop supplies and sealing ingredients. Keep enough prismarine for the aquatic workshop.',
    3: 'Secure Blaze access and heated mixing first. Crushing Wheels now improve the geological processing routes.',
    4: 'Bootstrap with Precision Machines and heated steel before requesting Inductive or Arcane equipment.',
    5: 'Keep a list of distinct portal eyes and reserve the first Dragon Core for reusable production.',
    6: 'First PRCs, separators and chemical buffers use Ender Machines; finish the native HDPE chain before expanding.',
    7: 'Hydrogen chloride comes from the chemical network. Test an expedition vessel close to home before a long flight.',
    8: 'Build cooling and waste handling before fuel production. The first containment equipment needs no radioactive input.',
    9: 'Bootstrap SPS and nucleosynthesis with Containment Frames before planning Singularity equipment.',
    10: 'Keep all five core catalysts and test the complete input chain before scaling Sovereign production.',
}
for c in M['chapters']:
    t = c['order_index']
    c['group'] = GIDS['mechanical']
    c['ftb_title'] = '&b' + str(t).zfill(2) + ' ◆ &f&l' + c['title'] + '&r'
    for i, quest in enumerate(c['quests']):
        quest.setdefault('base_description', quest['description'])
        quest['description'] = list(quest['base_description'])
        quest['goal'] = 'Follow the workshop plan and prepare this tier’s production line.' if i == 0 else (
            'Complete this chapter and claim your permanent workshop tool.' if quest['id'] == M['milestones'][str(t)] else
            'Complete the detected item or boss goal below.' if any(task['type'] in ['item', 'kill'] for task in quest['tasks']) else
            'Build and test the setup described below.')
        quest['tips'] = [TIER_TIPS[t]]
        quest['steps'] = []
        quest['tags'] = ['tk3_campaign', 'tk3_tier_' + str(t)]
        if quest.get('optional'):
            quest['hide_dependency_lines'] = 'true'
        if i == 0:
            quest['shape'], quest['size'] = 'hexagon', 1.4
            if t == 1:
                quest['description'] = ['Start with the manual Kinetic Machine. It gives you the powered equipment needed to automate mechanisms. This first tier needs no previous milestone.']
            for task in quest['tasks']:
                if task['type'] == 'checkmark':
                    task['title'] = 'Read this workshop plan'
        if quest['title'].endswith('Mechanism') and not quest.get('optional'):
            item = next((task.get('item', {}).get('id') for task in quest['tasks'] if task['type'] == 'item'), None)
            recipe = next((r for r in M['recipes'] if r['output'] == item and r.get('tool')), None)
            if recipe:
                quest['goal'] = 'Complete the ' + quest['title'] + ' assembly in the exact listed order.'
                quest['steps'] = ['Start with ' + label(recipe['inputs'][0]) + '.']
                for index, ingredient in enumerate(recipe['inputs'][1:], 1):
                    verb = 'Finish under a Deployer holding ' if index == len(recipe['inputs']) - 1 else 'Deploy '
                    quest['steps'].append(verb + label(ingredient) + '.')
                quest['tips'] = ['One loop guarantees one mechanism. Ordinary finishing tools wear; the chapter reward tool is unbreakable.']
                quest['caution'] = 'Supply each step separately and keep unfinished mechanisms on their ordered assembly route.'
        frame = next((r for r in M['recipes'] if r.get('kind') == 'deploying' and
                      r['output'] == quest.get('tasks', [{}])[0].get('item', {}).get('id') and
                      r['output'] in M['frames'].values()), None)
        if frame and 'Build the first' not in quest['title']:
            quest['steps'] = ['Put ' + label(frame['inputs'][0]) + ' on the belt or depot.',
                              'Deploy ' + label(frame['inputs'][1]) + ' onto it.',
                              'Stonecut the frame into the machine you need.']
            quest['tips'] = ['Each stonecut output consumes its own frame. Stock several frames for a complete workshop.']
            if t > 1:
                quest['description'] = ['Deploy this tier’s mechanism onto its matching casing. Follow the machine’s JEI recipe or the stonecutter output menu for the next equipment choice.']
        if quest['title'] == 'Run the workshop continuously':
            quest['steps'] = ['Stock the raw-material buffers.', 'Run material → mechanism → casing/frame → machine.',
                              'Test repeated batches and output collection without hand-feeding.']
            quest['guide_kind'] = 'activity'
        if quest['id'] == M['milestones'][str(t)]:
            quest['tags'].append('tk3_milestone')
            quest['shape'], quest['size'] = 'hexagon', 1.5
            quest['ftb_title'] = '&6&l◆ COMPLETE CHAPTER ' + str(t) + '&r'
            quest['tips'] = ['Claim your own reward manually. The tool is awarded once per player, even on a shared team.']
            if t == 10:
                quest['description'] = ['Claim the unbreakable Sovereign workshop tool. All ten workshop tiers are complete; continue settlement projects, exploration and renewable production.']
        if t == 3 and quest['title'] == 'Enter the Nether':
            quest['tips'] = ['Prepare food, blocks and a return route before collecting a Blaze for your burner.']
        if quest['title'].startswith('Keep the '):
            quest['caution'] = 'Do not route boss catalysts into void upgrades, disposal or general ingredient consumption.'

M['guide_chapters'] = GUIDES
M['campaign_quest_count'] = sum(len(c['quests']) for c in M['chapters'])
M['guide_quest_count'] = sum(len(c['quests']) for c in GUIDES)
M['quest_count'] = M['campaign_quest_count'] + M['guide_quest_count']
M['questbook_revision'] = 'T&K2-inspired categories · current alpha mod selection · personal class guides'
M['questbook_sources'] = {
    'old_layout': 'User-supplied T&K2 quests.zip; categories and presentation used as references only.',
    'mods': 'User-supplied Towns & Kingdoms 3(1).zip, modlist.html; 223 selected entries.',
    'skilltree': 'User-supplied TK3_SkillTree.js; six classes, eighteen subclasses, seven professions.',
    'ftb_schema': 'FTBTeam/FTB-Quests 1.21.1/main, commit 8c53f35a97d8897c861b097f1e39f4fc3beb3a15',
    'class_choices': 'Personal skilltree only; FTB guide checkmarks do not make character choices.',
}
PATH.write_text(json.dumps(M, ensure_ascii=False, indent=2) + '\n')
runpy.run_path(str(PACK / 'tools/rebuild_quests.py'), run_name='__main__')
print(json.dumps({'campaign': M['campaign_quest_count'], 'guides': M['guide_quest_count'],
                  'guide_chapters': len(GUIDES), 'total': M['quest_count']}))
