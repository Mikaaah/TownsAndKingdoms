# Towns & Kingdoms 3

T&K3 development area. T&K2 files in the repository root are historical reference and must not be used as the runtime base for T&K3.

## Player guide

**[Open the purple T&K3 player guide](https://mikaaah.github.io/TownsAndKingdoms/)** — tier walkthroughs, machine frames, chapter quests, renewable resources and searchable recipes.

[Read the progression overview](wiki/3.0-Progression.md).

## Current target

- Minecraft **1.21.1**
- **NeoForge**
- KubeJS-driven progression, recipes and compatibility
- FTB Quests + AStages for visible progression and hard gameplay gates
- Passive Skill Tree for character progression
- Epic Fight / Weapons of Miracles combat framework
- Iron's Spells 'n Spellbooks + Ars Nouveau magic integration
- Apotheosis / Apothic systems, deliberately customized for T&K3 balance
- Create-based compact automation with Mekanism as a later technology layer
- Applied Energistics 2 as late-game storage/logistics/autocrafting
- Create Aeronautics as an integrated travel/engineering system
- Boss-driven progression and reusable processing catalysts

## Development status — 2026-10-01

Completed / locked at design level:

- overall direction, structure and project goals
- core mod-stack baseline
- skill-tree architecture
- six definitive classes and eighteen subclasses
- profession placement and specialization structure
- skill-tree stat audit
- skill-tree art direction and selected artwork
- themed 2048×2048 skill-tree background

Current next phase:

1. finalize the definitive mod list
2. test and lock world generation
3. expand compatibility/integration features across the selected stack
4. move from design baselines into in-pack progression, recipe, quest and combat testing

See **[docs/PROJECT_STATUS.md](docs/PROJECT_STATUS.md)** for the current source-of-truth summary.

## Current mod stack

See **[docs/MODLIST.md](docs/MODLIST.md)**.

Important decisions:

- Epic Fight compatibility for the T&K3 stack is maintained by T&K3 rather than a generic compatibility pack.
- Create: Enchantment Industry and Mekanism Generators are part of the selected technology stack.
- AE2 is the late-game storage/logistics/autocrafting layer and should not replace intended Create/Mekanism processing progression.
- Exploration/worldgen, economy and the expanded Towns & Kingdoms layer still need final lock-in.
- T&K2 scripts/configs/assets are reference material only.


## 3.0 mod list & changelog

- [docs/MODLIST.md](docs/MODLIST.md) — definitive T&K3 mod selection and integration decisions
- [docs/CHANGELOG_3.0.md](docs/CHANGELOG_3.0.md) — working T&K2 → T&K3 comparison ledger and 3.0 development changelog
- [wiki/3.0-Modlist.md](wiki/3.0-Modlist.md) — public-facing 3.0 modlist wiki source
- [wiki/3.0-Changelog.md](wiki/3.0-Changelog.md) — public-facing 3.0 changelog wiki source

Update order: `MODLIST.md` first, then the comparison changelog, then the wiki-source mirrors.

## Skill tree

Current design baseline: **v3.2.2**.

- [docs/SKILLTREE_V3.2.2.md](docs/SKILLTREE_V3.2.2.md) — current architecture, layout and stat rules
- [docs/SKILLTREE_ICONS.md](docs/SKILLTREE_ICONS.md) — current custom pixel-art direction and class palette
- [docs/SKILLTREE_V1.0.md](docs/SKILLTREE_V1.0.md) — archived original 10-class baseline
- [docs/SKILLTREE_BALANCE_V1.0.md](docs/SKILLTREE_BALANCE_V1.0.md) — archived early balance notes

### Runtime-source note

`kubejs/server_scripts/TK3_SkillTree.js` in this repository is still the older v1.0 generator. The later v3.2.x working packages were produced during development, but their exact generated runtime file is not currently present in the repository workspace. Do **not** silently treat the v1.0 generator as the current design source of truth.

## Development tracking

Trello: https://trello.com/b/GI39ejtX/towns-and-kingdoms

GitHub stores the technical/design source of truth. Trello stores implementation status, testing and next actions.
