# T&K3 Project Status

Last consolidated: **2026-10-08** · runtime package updated **2026-10-06**

## Current baseline

Towns & Kingdoms 3 targets Minecraft 1.21.1 / NeoForge. The current canonical campaign has **353 quests** across ten progression chapters. The supplied quest ZIP is an earlier snapshot and does not replace the repository campaign.

The fixed KubeJS runtime package is now represented in TK3/kubejs/. It contains 684 files, including 1,788 unique explicit recipe IDs, 40 mod compatibility modules, 214 custom item registrations, three machine-frame blocks, stage enforcement, reusable boss catalyst lenses, and the v4.6.0 skill tree.

The 1,972-entry production review catalogue is retained as a separate reviewed recipe dataset. It is not a count of explicit recipe IDs in the refreshed KubeJS runtime.

## Completed in this refresh

- Synced the supplied fixed KubeJS package and related models, blockstates, textures, and data.
- Reorganized recipe scripts into ten progression tiers, core recipes, 40 compatibility modules, and recipe cleanup/whitelist/final-sanity layers.
- Updated AStages tier and boss-focus gates with 14 quest milestones. All milestone IDs match quests in the current canonical chapter files.
- Registered 214 custom items and three machine-frame blocks.
- Added the reusable Catalyst Lens item and Netherstar, Everburning, Voidguard, and Accursed charged variants.
- Updated skill tree source to v4.6.0: 1,801 nodes, 1,800 graph edges, one connected 120 × 120 layout.
- Added the browser Skilltree Builder with search/filtering, drag-and-snap layout editing, validation, and KubeJS/layout exports.
- Added runtime inventory, stage, lens, compatibility, custom-item, and skilltree documentation.

## Skill tree v4.6.0

Six classes: Warrior, Ranger, Rogue, Mage, Cleric, and Occultist. Eighteen subclasses, eight professions (Mining, Logging, Hunting, Exploration, Fishing, Farming, Crafting, Alchemy), six wildcard constellations, and eight shared constellations use one global point pool. Each node costs one point; 150 points is the recommended build cap. Class limit is one, subclass limit is one, and professions/foci are unrestricted. Advanced class Rank IV unlocks subclass choice; profession mastery begins at branch Rank IV; Ascendancy uses Rank VIII commitments, with Ranks IX–XVI optional.

The current source of truth is kubejs/server_scripts/TK3_SkillTree.js. Read [SKILLTREE_V4.6.0.md](SKILLTREE_V4.6.0.md). SKILLTREE_V3.2.2.md is historical. The [Skilltree Builder](https://mikaaah.github.io/TownsAndKingdoms/skilltree-builder/) exports a changed coordinate map and matching approved fingerprint while preserving node definitions and gameplay rules.

## Validation and open work

Static validation passes: all 72 JavaScript files pass node --check; all 135 JSON files parse; recipe IDs are unique; all 14 stage milestone IDs exist in the current campaign; skilltree cells are unique and its 1,800-edge graph reaches all 1,801 nodes. Run python3 TK3/tools/verify_runtime_v2.py for the package checks.

A Minecraft client/server boot has not been run for this refresh. Remaining work is in-game validation of item registration, recipe loading, stage restrictions, lens catalysts, compatibility presence checks, skilltree generation, and balance. World-generation stability remains a separate open testing item.

## Project direction

- Create provides the early and middle mechanical backbone; Mekanism is a later technology layer.
- AE2 provides late-game logistics and autocrafting rather than a processing bypass.
- Iron's Spells focuses on combat magic; Ars Nouveau focuses on arcane crafting, processing, and automation.
- FTB Quests explains progression; AStages enforces machine-access milestones.
- Boss rewards unlock permanent progression permissions and reusable catalysts.
- Class and subclass choices define combat identity, while professions support activities within a shared budget.
- Compatibility remains modular and presence-guarded where needed.

## Historical reference

SKILLTREE_V3.2.2.md and earlier compatibility reviews remain useful as history, but they are superseded where they disagree with the fixed runtime package. Historical T&K2 KubeJS and quest materials are reference-only and should not be copied wholesale into this 1.21.1 runtime.
