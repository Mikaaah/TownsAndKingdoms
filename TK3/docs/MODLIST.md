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

#### Overworld — selected worldgen test stack
- FreeTerraForged — terrain / macro-landform generator
- Alex's Caves — cave biomes and underground exploration
- Biomes O' Plenty
- Oh The Biomes We've Gone (BWG)
- Upgrade Aquatic
- Atmospheric
- Autumnity
- Environmental
- [Let's Do] BloomingNature

**Decision:** FreeTerraForged replaces ReTerraForged as the primary T&K3 terrain candidate. BOP + BWG provide the large biome libraries; Team Abnormals and BloomingNature provide smaller, more refined ecosystem/vanilla-biome layers.

**Dimension rule:** BOP's Nether/End biome injection must be treated separately from its Overworld role. Nether and End biome generation may be disabled if the dedicated dimension stack uses BetterNether/BetterEnd or another custom biome source.

### Dimensions
- The Twilight Forest

#### End — selected test stack
- BetterEnd: New Dawn — primary End biome/content layer, including the main island and End-city ecosystem
- Nullscape — terrain-layer candidate
- YUNG's Better End Island — **rejected for T&K3**; unnecessary overlap with BetterEnd
- End's Phantasm — **rejected for T&K3**

#### Nether — selected test stack
- Amplified Nether — terrain layer
- BetterNether: New Dawn — primary Nether biome/content layer
- YUNG's Better Nether Fortresses — selected fortress overhaul; includes built-in optional Create compatibility
- Gardens of the Dead — **rejected for T&K3**

**Structure direction:** BetterEnd remains the primary End overhaul rather than stacking another main-island overhaul on top of it. For the Nether, YUNG's Better Nether Fortresses replaces the vanilla fortress experience without taking ownership of the entire Nether biome source. Supplemental End/Nether structure mods should add exploration without replacing the selected biome/terrain layers.

### Towns & Kingdoms
- MineColonies
- **Additional kingdom/town systems TBD**

**Decision:** MineColonies is the selected settlement/kingdom system for T&K3. MCA Reborn was only considered during early T&K3 planning and is not part of the current baseline.

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

### KubeJS integration modules — locked core integrations
- KubeJS Create — Create
- KubeJS Mekanism — Mekanism
- KubeJS Ars Nouveau — Ars Nouveau
- KubeJS Iron's Spells — Iron's Spells 'n Spellbooks
- Applied KubeJS — Applied Energistics 2

**Decision:** These five KubeJS integration modules are part of the locked T&K3 core integration layer. They are not optional candidates. Exact compatible jar versions will be pinned when the assembled 1.21.1 NeoForge test instance is version-locked.

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

### MineColonies bridges
- MineColonies: Epicfied (Epic Colonies) — **candidate / primary test**; preferred richer Epic Fight integration if it proves stable with the locked Epic Fight + MineColonies versions
- Epic Fight X Minecolonies Compat — **fallback candidate**; simpler compatibility bridge if Epic Colonies shows version, animation or stability issues
- Create: MineColonies Link — **selected**; connects MineColonies supply requests to Create logistics
- Compatibility addon for MineColonies — **candidate / high priority test**; relevant because it includes compatibility for Create, Applied Energistics 2 and Ars Nouveau
- Tweaks addon for MineColonies — **candidate / paired compatibility test**

**Compatibility rule:** Never load Epic Colonies and Epic Fight X Minecolonies Compat together. Epic Colonies is the primary test candidate; Epic Fight X remains the fallback. Lock the exact Epic Fight + MineColonies versions only after a dedicated combat, raid, animation and multiplayer regression test.

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

### MineColonies
- Structurize
- Multi-Piston
- BlockUI
- Domum Ornamentum

### YUNG's Better mods
- YUNG's API

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

### MineColonies
MineColonies is the primary T&K3 settlement/kingdom system. MCA Reborn was only an early T&K3 candidate and is not part of the baseline.

Create: MineColonies Link is selected so colony supply requests can become part of the Create logistics network instead of remaining a separate manual resource loop.

Epic Colonies is the primary MineColonies ↔ Epic Fight test candidate because it provides the richer citizen/animation integration. Epic Fight X Minecolonies Compat remains the simpler fallback if Epic Colonies causes version, animation, rendering or server stability issues. The two bridge mods must never be installed together.

#### Multiplayer performance baseline — initial test values
These limits are the starting point for dedicated-server testing, not permanent maximums:

- maxcitizenpercolony = 100
- maxColonySize = 12 chunks radius
- minColonyDistance = 12 chunks
- forceloadcolony = false
- pathNodeLimitMultiplier = 1
- maxRaiders = 40
- one active colony per player/team as the default server rule
- do not permanently force-load complete colonies through FTB Chunks in the default server profile

The citizen cap can be raised toward 125–150 only after multiplayer profiling shows enough tick-time headroom. Epic Fight-enabled guards/raiders make entity-heavy raids especially important to profile. Prefer spark profiling before increasing limits.

### Aeronautics
Create Aeronautics is intended as a meaningful travel/engineering progression system.

FTB Chunks protection, Sable sublevel behavior, Mekanism machines, magic interactions and teleportation must be explicitly tested before the first multiplayer baseline is considered stable.

---

## Open sections

The following are intentionally not finalized yet:

- final Nether structure density / supplemental structures
- final End structure density / supplemental structures
- Nullscape final compatibility decision
- Economy
- Additional Towns & Kingdoms systems
- Additional Create addons
- Optional QoL/performance mods
- Final version pins
- Final Epic Fight moveset compatibility matrix

Do not fill these with random content mods just to make the list larger. Each addition should have a clear role in progression, worldbuilding, integration or multiplayer.
