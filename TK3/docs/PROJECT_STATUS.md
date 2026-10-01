# T&K3 Project Status

Last consolidated: **2026-10-01**

## Project direction

Towns & Kingdoms 3 is being rebuilt for Minecraft 1.21.1 / NeoForge around a deliberately connected progression loop rather than a collection of independent content mods.

Core principles:

- progression systems must interact instead of existing as separate islands
- automation should be useful without becoming an oversized processing chain
- Create is the early/mid mechanical backbone
- Mekanism is a later technology layer
- AE2 is late-game logistics/autocrafting, not a processing bypass
- Iron's Spells focuses on combat magic
- Ars Nouveau focuses on arcane crafting, processing and automation
- bosses and milestones unlock permanent progression permissions/catalysts
- FTB Quests explains progression; AStages enforces it
- character identity comes from the class/subclass skill tree plus optional professions

## Completed / locked

### Structure and direction
- overall T&K3 direction and goals
- main progression philosophy
- compact automation philosophy
- boss-gated reusable catalyst concept
- custom compatibility-first approach for Epic Fight / Weapons of Miracles

### Core mod-stack baseline
The selected stack is documented in `MODLIST.md`.

Major locked pillars include:
- FTB Quests / AStages
- Passive Skill Tree
- Epic Fight / Weapons of Miracles
- Apotheosis / Apothic systems
- Ars Nouveau
- Iron's Spells 'n Spellbooks
- Create
- Create Aeronautics
- Mekanism + Mekanism Generators
- Applied Energistics 2
- major boss/content integrations listed in the mod list

### Skill tree
The skill-tree system and artwork are considered finished at design level.

Current definitive class roster:
- Warrior — Berserker, Weapon Master, Juggernaut
- Ranger — Marksman, Hunter, Beastmaster
- Rogue — Assassin, Duelist, Shadowblade
- Mage — Elementalist, Arcanist, Battlemage
- Cleric — Priest, Crusader, Oracle
- Occultist — Blood Mage, Necromancer, Voidcaller

Professions:
- Mining
- Logging
- Farming
- Fishing

The tree is one large open layout. There is no separate intro/class-selection screen. Class and subclass nodes are physically integrated into the same tree and locked through requirements.

The later layout work preserves the approved class/subclass positions while filling basic paths and profession areas so the complete tree reads more like a full circular RPG tree instead of isolated spokes.

## Skill-tree v3.2.2 changes

- class/profession separation retained
- six local focus nodes added around each profession
- maximum three profession focus choices per profession
- no profession-to-profession cross-links
- approved class/subclass positions retained
- profession roots, portals, branches and mastery structure retained
- percentage-stat formatting audited and corrected
- nonexistent `apothic_attributes:mining_speed` integration removed
- precision, mobility and sustain values retuned
- custom background standardized at:
  `kubejs/assets/skilltree/textures/screen/skill_tree_background.png`
- background size: 2048×2048

See `SKILLTREE_V3.2.2.md` and `SKILLTREE_ICONS.md`.

## Current implementation gap

The repository's current `TK3_SkillTree.js` is still the older v1.0 generator. The v3.2.x working ZIPs were generated during development but the exact final runtime ZIP/script is not currently available in this repository workspace.

Until that runtime file is restored/re-exported:
- use v3.2.2 docs as the design source of truth
- do not extend the old 10-class generator as though it were current
- do not overwrite final art/layout decisions with v1.0 mappings

## Worldgen/testing

World generation is the next major technical lock.

A current 1.21.1 NeoForge test instance has included ReTerraForged during testing. A world-generation crash was observed in the latest test cycle; the root cause has not yet been confirmed, so ReTerraForged/worldgen remains a test item rather than a locked baseline decision.

## Next development phase

1. finalize definitive mods and remove redundant candidates
2. choose and stabilize world generation
3. expand custom compatibility features
4. wire class/subclass tags into combat mechanics where needed
5. implement progression gates across quests, recipes, dimensions and equipment
6. build compact cross-mod processing chains
7. validate multiplayer behavior for claims, Aeronautics/Sable, magic and automation
8. playtest overall balance before inflating enemy stats

## Legacy reference material

The historical T&K2 KubeJS/quest material is useful for ideas, IDs, recipes, icon references and migration targets, but it must remain reference-only. It should not be copied wholesale into the 1.21.1 runtime.
