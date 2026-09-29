# T&K3 Mod List

> Source of truth for the current Towns & Kingdoms 3 mod stack.
>
> Target: **Minecraft 1.21.1 / NeoForge**

## Status rules

- **Core** = selected as part of the current T&K3 foundation.
- **Integration** = intended compatibility/progression bridge between selected core mods.
- **Dependency** = library required by one or more selected mods.
- **Candidate** = useful, but still needs an in-pack test before it becomes part of the stable baseline.
- Exact jar versions will be pinned when the first assembled test instance is built.
- T&K2 scripts/configs/assets are historical reference only and must not be copied into T&K3.

---

## Core mods

### Progression
- FTB Quests
- AStages
- End Remastered

### Character / RPG
- Passive Skill Tree (NeoForge)

### Combat
- Epic Fight
- Weapons of Miracles
- Simply Swords

**Decision:** Epic Fight compatibility/movesets for the T&K3 core stack will be maintained by T&K3 itself. Do not add a generic community Epic Fight compatibility pack to the baseline.

### Gear & Loot
- Apotheosis

### Magic
- Ars Nouveau
- Iron's Spells 'n Spellbooks
- Just Another Witchery Remake

### Engineering & Automation
- Create
- Create Aeronautics
- Mekanism
- Mekanism Generators
- Applied Energistics 2 (AE2)
- Create: Enchantment Industry

### Bosses & Mobs
- Cataclysm
- Alex's Mobs (1.21.1 NeoForge community port)
- Alex's Caves (1.21.1 NeoForge community port)
- Ice and Fire: Community Edition
- Bosses' Rise - Epic Souls-like Boss Fights
- Mowzie's Mobs

### Exploration & World
- **TBD** - review on the main development PC

### Dimensions
- The Twilight Forest
- Amplified Nether

### Towns & Kingdoms
- MCA Reborn
- **Additional kingdom/town systems TBD**

### Travel
- Waystones

### Multiplayer / Claims
- FTB Chunks
- FTB Teams

### Integration / Scripting
- KubeJS
- ProbeJS
- LootJS

### Economy
- **TBD** - review on the main development PC

---

## Selected Create / technology integrations

These are part of the intended progression/integration layer rather than standalone content bloat.

- Create Crafts & Additions - bridge Create rotational power and FE-based technology
- Ars Creo - Create + Ars Nouveau
- Create: Ars Nouveau Compat - selected Create processing for Ars materials
- Create: Wizardry - Create + Iron's Spells 'n Spellbooks
- Create: Enchantment Industry - Create-based XP/enchanting processing
- Mekanism Generators - Mekanism power-generation progression

### KubeJS integration modules
- KubeJS Create
- KubeJS Mekanism
- KubeJS Ars Nouveau
- KubeJS Iron's Spells

---

## Progression / compatibility integrations

### Stages / FTB
- FTB XMod Compat
- AStages FTB Quests
- AStages Curios

### Magic / content bridges
- Ars 'n Spells
- Alex's Caves: Spellbooks
- Cataclysm: Spellbooks
- Ice and Fire: Spellbooks
- Spellbooks of Twilight

### Apotheosis bridges
- Apotheosis x Iron's Spellbooks Compat
- Apothic Compats
- Apothic Category Compat

### Create Aeronautics / Sable bridges
- Create Aeronautics: FTB Chunks Compat
- Create Aeronautics: Mekanism Compatibility
- Ars Sable
- Waystones: Sable
- IronSable - **candidate; test before locking**

---

## Required libraries / dependencies

Install only the **1.21.1 NeoForge** variants required by the selected mod versions. Transitive dependency versions are pinned with the first assembled test instance.

### FTB stack
- Architectury API
- FTB Library

### Apotheosis stack
- Placebo
- Patchouli
- Apothic Attributes
- Apothic Spawners
- Apothic Enchanting

### Iron's Spells stack
- Curios API
- GeckoLib
- Iron's Lib
- playerAnimator

### Just Another Witchery Remake
- Curios API
- Kotlin for Forge
- Modonomicon

### Create Aeronautics
- Create
- Sable

### Alex's Mobs / Alex's Caves ports
- Citadel (Unofficial Port)

### Other shared libraries
- Lionfish API
- Jupiter
- Uranus
- Balm
- Rhino
- Better Advanced Tooltips
- Fzzy Config
- Simply Tooltips

---

## Important integration decisions

### Progression
FTB Quests is the visible campaign/progression layer. AStages provides actual gameplay locks so recipes, machines, items, equipment slots and major systems cannot be bypassed by gifting or finding late-game items.

End Remastered is part of the End-access progression. Boss kills and other milestones can be used to gate required Eyes and End access.

### Create + Mekanism + AE2
Create remains the compact mechanical/processing backbone. Mekanism is a later technology layer rather than an immediate replacement for Create.

Applied Energistics 2 is the main late-game storage, logistics and autocrafting network. AE2 should support the production chain rather than replace the intended Create/Mekanism processing progression.

Create Crafts & Additions must be progression-gated so the Alternator / Electric Motor loop does not bypass intended power progression.

### Magic
Iron's Spells is primarily the combat-spellcasting system.

Ars Nouveau is primarily the arcane crafting/processing/automation system.

Cross-mod recipes should intentionally connect Create, Ars Nouveau, Iron's Spells and boss progression rather than letting each mod remain a separate progression island.

### Apotheosis
Apotheosis is the affix/gem/socket/salvage framework, but its default progression and balance will be customized for T&K3.

T&K3 rarity forging, reinforcement and Unique weapon evolution are separate custom systems built around KubeJS/Create/magic/boss progression.

### Boss progression
Major bosses can unlock permanent reusable processing catalysts. Boss defeat stages provide permission; physical catalysts provide production capacity.

Repeated boss kills should generally increase throughput or access to additional catalyst copies rather than being mandatory consumable grind.

### Epic Fight
Epic Fight is the combat framework.

Compatibility for T&K3-selected weapons, mobs and bosses will be maintained with custom T&K3 datapack/KubeJS/resource work where possible instead of depending on a generic external Epic Fight compatibility pack.

### Aeronautics
Create Aeronautics is intended as a meaningful travel/engineering progression system.

FTB Chunks protection, Sable sublevel behavior, Mekanism machines, magic interactions and teleportation must be explicitly tested before the first multiplayer baseline is considered stable.

---

## Open sections

The following are intentionally not finalized yet:

- Exploration & World
- Economy
- Additional Towns & Kingdoms systems
- Additional Create addons
- Optional QoL/performance mods
- Final version pins
- Final Epic Fight moveset compatibility matrix

Do not fill these with random content mods just to make the list larger. Each addition should have a clear role in progression, worldbuilding, integration or multiplayer.
