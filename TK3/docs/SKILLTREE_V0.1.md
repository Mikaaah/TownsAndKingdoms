# T&K3 Passive Skill Tree — Architecture v0.1

## Technical target

- Minecraft 1.21.1
- NeoForge
- Passive Skill Tree `1.21.1-port`
- KubeJS-generated skill JSON
- One native global skill-point pool
- Every node costs exactly 1 point

## Core rules

1. A player chooses exactly one archetype.
2. Archetype roots share tag `archetype`; `skillLimitations.archetype = 1`.
3. Each archetype has exactly three subclasses.
4. Subclass roots share tag `subclass`; `skillLimitations.subclass = 1`.
5. Expensive effects are represented by chains such as Mining I -> Mining II -> Mining III instead of multi-point nodes.
6. Professions are universal side branches and use the same global skill points.
7. Stronger builds are created by path investment, exclusivity and keystones rather than large single-node multipliers.

## Archetypes and subclasses

| Archetype | Subclass 1 | Subclass 2 | Subclass 3 |
|---|---|---|---|
| Warrior | Berserker | Weapon Master | Vanguard |
| Guardian | Juggernaut | Warden | Sentinel |
| Ranger | Marksman | Hunter | Beastmaster |
| Rogue | Assassin | Duelist | Shadowblade |
| Mage | Elementalist | Arcanist | Chronomancer |
| Battlemage | Spellblade | Arcane Knight | Blood Knight |
| Cleric | Priest | Crusader | Oracle |
| Occultist | Blood Mage | Necromancer | Voidcaller |
| Artificer | Blacksmith | Runesmith | Alchemist |
| Monk | Pugilist | Wayfarer | Spirit Monk |

## Profession side branches v0.1

- Mining
- Logging
- Farming
- Fishing

These are deliberately compact in v0.1. They are not separate profession systems and do not have their own currencies.

## Current implementation direction

The first generator skeleton contains all ten archetypes, thirty subclasses and four professions. The next development passes should focus on:

- replace placeholder vanilla icons with PST-native icons;
- validate archetype and subclass locks in-game;
- validate Iron's Spellbooks attribute detection;
- expand class branches after the skeleton is stable;
- tune the eventual skill-point cap only after reachable-node counts are known;
- test multiplayer persistence and respec behavior before hard-locking progression.

## Source-of-truth rule

Design decisions belong in `TK3/docs/`. Implementation state and next actions belong on the T&K Trello board. When a system changes materially, update both the relevant design doc and Trello card.
