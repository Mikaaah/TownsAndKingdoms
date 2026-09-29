# Towns & Kingdoms 3

T&K3 development area. T&K2 files in the repository root are historical and should not be used as the base for T&K3.

## Current target

- Minecraft **1.21.1**
- **NeoForge**
- KubeJS-driven progression and recipe integration
- FTB Quests + AStages for visible progression and real gameplay gates
- Passive Skill Tree for character progression
- Epic Fight / Weapons of Miracles combat framework
- Iron's Spells 'n Spellbooks + Ars Nouveau magic integration
- Apotheosis / Apothic systems, deliberately customized for T&K3 balance
- Create-based compact automation with Mekanism as a later technology layer
- Create Aeronautics as an integrated travel/engineering system
- Boss-driven progression and reusable processing catalysts

## Current mod stack

See **[docs/MODLIST.md](docs/MODLIST.md)** for:

- selected core mods
- dependencies/libraries
- Create and KubeJS integration addons
- magic/boss/Apotheosis compatibility
- Aeronautics/Sable compatibility
- current integration rules
- sections that are still intentionally TBD

Important current decisions:

- Epic Fight compatibility for the T&K3 stack is maintained by T&K3 rather than a generic community compatibility pack.
- Create: Enchantment Industry and Mekanism Generators are part of the selected technology stack.
- Exploration & World, Economy and the expanded Towns & Kingdoms layer are not finalized yet.
- T&K2 scripts/configs/assets are reference material only and must not be copied into T&K3.

## Skill tree baseline

Current repository baseline: v1.0.

- `kubejs/server_scripts/TK3_SkillTree.js` — v1.0 baseline generator
- `docs/SKILLTREE_V1.0.md` — architecture and current rules
- `docs/SKILLTREE_BALANCE_V1.0.md` — first-pass balance budget
- `docs/SKILLTREE_ICONS.md` — exact Passive Skill Tree icon mapping and fallbacks
- `docs/SKILLTREE_V0.1.md` — archived initial skeleton notes

The repository generator currently produces 661 nodes when Iron's Spellbooks and Apothic Attributes are available.

## Development tracking

Trello: https://trello.com/b/GI39ejtX/towns-and-kingdoms

GitHub stores the technical/design source of truth. Trello stores implementation status, testing and next actions.
