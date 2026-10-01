# T&K3 Passive Skill Tree — v3.2.2

Current design source of truth for the Towns & Kingdoms 3 character skill tree.

Target: Minecraft 1.21.1 / NeoForge / Passive Skill Tree / KubeJS.

## Core layout

- one giant open skill tree
- no separate class-selection or intro screen
- class, subclass, general and profession progression all live in the same visual tree
- approved class/subclass positions remain fixed
- basic/general paths are filled out enough to avoid large dead areas
- profession zones remain visually separate from class trees
- overall composition is intentionally fuller and more circular
- class and subclass access is locked by explicit requirements

## Definitive classes

| Class | Subclass 1 | Subclass 2 | Subclass 3 | Class color |
|---|---|---|---|---|
| Warrior | Berserker | Weapon Master | Juggernaut | `#E05A47` |
| Ranger | Marksman | Hunter | Beastmaster | `#5DAE68` |
| Rogue | Assassin | Duelist | Shadowblade | `#9A6BC5` |
| Mage | Elementalist | Arcanist | Battlemage | `#55CFEA` |
| Cleric | Priest | Crusader | Oracle | `#F1D776` |
| Occultist | Blood Mage | Necromancer | Voidcaller | `#9B4B70` |

Exactly one class and one subclass are intended to define the primary character identity.

## Professions

Current profession branches:
- Mining
- Logging
- Farming
- Fishing

Each profession keeps its own root/portal/branch/mastery structure.

v3.2.1+ profession rules:
- six local focus nodes per profession
- maximum three selectable focus nodes per profession
- no profession-to-profession cross-links
- professions remain separate from class branches

## Stat audit — v3.2.2

Percentage-style effects are represented consistently as percentage/multiplier effects instead of being mixed with flat-point formatting.

Audited percentage-style categories include:
- crit chance
- crit damage
- dodge
- armor shred
- life steal
- projectile damage
- draw speed
- healing
- experience gain
- movement
- attack damage
- attack speed
- spell power
- mana regeneration
- school power
- cooldown-related bonuses

Stats intentionally kept flat where appropriate:
- armor
- toughness
- armor pierce
- luck
- block reach

Removed:
- `apothic_attributes:mining_speed` — not treated as a valid current attribute integration

Balance adjustments:
- Precision progression uses smaller steps around 0.5% / 0.75% / 1% where applicable
- Mobility movement/dodge progression was normalized
- Sustain/life-steal progression was strengthened relative to the earlier draft
- subclass identities remain distinct instead of normalizing every branch to the same stat package

## Background

Runtime asset path:
`kubejs/assets/skilltree/textures/screen/skill_tree_background.png`

Required size:
- 2048×2048

The background is deliberately lower-contrast and theme-matched so paths, nodes and connectors remain readable.

## Artwork

Custom class/subclass art uses the fixed coarse retro-RPG pixel-art style documented in `SKILLTREE_ICONS.md`.

Important preserved character decisions:
- keep the older approved Mage character/version
- Occultist uses the approved original character design direction
- custom class portraits should remain readable at small skill-node size

## Runtime-source warning

The current repository JavaScript file is still an older v1.0 implementation and does not represent this document's six-class v3.2.2 architecture. Restore/re-export the final v3.2.x runtime package before using GitHub main as a pack-ready skill-tree source.
