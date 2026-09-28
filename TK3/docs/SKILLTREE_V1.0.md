# T&K3 Passive Skill Tree — v1.0 Baseline

Minecraft 1.21.1 NeoForge. Passive Skill Tree is the UI/data layer; KubeJS generates the tree.

## Baseline scope

- 10 exclusive archetypes
- 30 subclasses
- 7 universal professions: Mining, Logging, Farming, Fishing, Hunting, Exploration, Crafting
- 5 universal passive disciplines: Power, Precision, Defense, Mobility, Sustain
- 2 general branches: Adventuring and Knowledge
- 9 Iron's Spellbooks school-mastery branches when the attributes are present
- optional Apothic Attributes integration with conservative values
- every node costs exactly 1 native PST point

With Iron's Spellbooks + Apothic Attributes available, the generator currently builds 661 nodes. Without those optional attribute namespaces it falls back safely and builds 598 nodes.

## Build locks

- archetype: max 1
- subclass: max 1
- profession mastery keystones: max 2
- universal combat keystones: max 2
- Iron's school mastery keystones: max 2

Archetype and subclass nodes also add player tags on learn and remove them on respec. These tags are the handoff point for later Epic Fight/WoM/KubeJS mechanics.

## Archetypes

| Archetype | Subclasses |
|---|---|
| Warrior | Berserker, Weapon Master, Vanguard |
| Guardian | Juggernaut, Warden, Sentinel |
| Ranger | Marksman, Hunter, Beastmaster |
| Rogue | Assassin, Duelist, Shadowblade |
| Mage | Elementalist, Arcanist, Chronomancer |
| Battlemage | Spellblade, Arcane Knight, Blood Knight |
| Cleric | Priest, Crusader, Oracle |
| Occultist | Blood Mage, Necromancer, Voidcaller |
| Artificer | Blacksmith, Runesmith, Alchemist |
| Monk | Pugilist, Wayfarer, Spirit Monk |

## Apotheosis / Apothic rule

Apotheosis is intentionally treated as a toolbox rather than an exponential power layer. The tree may use small amounts of:

- crit chance / crit damage
- dodge chance
- armor shred / armor pierce
- life steal
- healing received
- projectile damage
- draw speed
- experience gained
- mining speed

These values are deliberately conservative because Apotheosis affixes and gems will be flattened separately.

The tree does not currently grant large socket counts, rarity multipliers, boss-stat multipliers or other classic Apotheosis power spikes.

## Iron's Spellbooks

The generator detects Iron's attributes at runtime. Class branches use max mana, mana regen, spell power, cast-time reduction, cooldown reduction, summon damage and school-specific power where available.

School mastery branches exist for Fire, Ice, Lightning, Holy, Ender, Blood, Evocation, Nature and Eldritch. A player may master at most two schools.

## Epic Fight / Weapons of Miracles

v1.0 deliberately does not fake Epic Fight/WoM mechanics through generic attributes. Stamina, animation state, parries, perfect dodges, rage/combo systems and WoM-specific innate interactions belong in the later combat-integration layer.

The class/subclass/keystone player tags in v1.0 are designed so those hooks can be added without redesigning the tree.

## Point economy

Initial playtest target: 150 maximum skill points.

This is a baseline only. Tune the point cap after measuring:
1. typical class + subclass investment;
2. profession investment;
3. passive-discipline investment;
4. magic-school investment;
5. how many meaningful alternatives remain at endgame.

## Source-of-truth rule

This document defines the v1.0 architecture. Numeric balance may change without changing the architecture. Major structural changes should update this document and the Trello development cards together.
