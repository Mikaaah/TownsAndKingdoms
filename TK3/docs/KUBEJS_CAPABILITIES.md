# T&K3 — KubeJS Capabilities & Implementation Rules

**Project:** Towns & Kingdoms 3  
**Target:** Minecraft 1.21.1 / NeoForge  
**Status:** Source of truth for KubeJS architecture and integration rules  
**Last consolidated:** 2026-10-01

> This document defines what KubeJS is expected to do in T&K3, which dedicated integrations are locked, how recipes and compatibility should be implemented, and which assumptions must not be made.
>
> T&K2 KubeJS scripts are historical reference only. They are not the T&K3 runtime base.

---

## 1. Role of KubeJS in T&K3

KubeJS is the primary scripting and cross-mod integration layer for Towns & Kingdoms 3.

Main uses:

- recipe creation, replacement and removal
- cross-mod processing chains
- progression gates
- custom progression/intermediate items
- reusable boss catalysts
- loot changes
- quest/progression integration
- compatibility fixes
- tags and ingredient unification
- recipe-viewer cleanup
- selected runtime gameplay events where the installed APIs expose them

KubeJS should connect the selected mods into one progression instead of letting every mod remain an isolated progression island.

### Integration order

When implementing a system, use this order:

1. native KubeJS support
2. dedicated KubeJS addon
3. datapack/recipe JSON through `event.custom(...)`
4. normal datapack resources under `kubejs/data/`
5. mod-specific configuration/datapack support
6. only then investigate deeper Java/event integration

**Never invent an API, event name, item ID or recipe serializer.**

---

## 2. Locked T&K3 KubeJS integrations

The dedicated KubeJS addons for the current technology/magic core are locked.

| Core mod | Locked integration | Main T&K3 purpose |
|---|---|---|
| Create | **KubeJS Create** | Early/mid mechanical processing and compact automation |
| Mekanism | **KubeJS Mekanism** | Later advanced processing, chemistry and high-tier materials |
| Ars Nouveau | **KubeJS Ars Nouveau** | Arcane crafting, magical processing and automation |
| Iron's Spells 'n Spellbooks | **KubeJS Iron's Spells** | Combat magic, magical equipment and custom spell integrations |
| Applied Energistics 2 | **Applied KubeJS** | Late-game storage, logistics, autocrafting and AE2-specific events |

These five integrations are **selected**, not candidates.

Other selected KubeJS/progression tooling:

- KubeJS
- ProbeJS
- LootJS
- FTB Quests
- AStages
- AStages FTB Quests
- FTB XMod Compat

Exact jar versions will be pinned with the definitive assembled 1.21.1 NeoForge instance.

---

## 3. Technology roles

### Create

Role: **early/mid-game mechanical processing and compact automation**

Create should be:

- useful early
- visually understandable
- efficient enough to reward automation
- compact rather than intentionally tedious

Avoid unnecessary chains such as:

`ore -> crushed ore -> dust -> nugget -> ingot -> hot ingot -> plate -> treated plate`

unless every step has a meaningful gameplay purpose.

KubeJS Create can be used for processing such as:

- crushing
- milling
- cutting
- pressing
- deploying
- filling
- emptying
- mixing
- compacting
- haunting
- sandpaper polishing
- mechanical crafting
- sequenced assembly
- fluid input/output
- chance outputs
- heated/superheated processing

Sequenced Assembly should be reserved for components that deserve a visibly engineered production process, such as:

- advanced mechanisms
- precision components
- Aeronautics engineering components
- high-tier hybrid magic/tech components
- reusable catalyst hardware
- selected AE2/Mekanism bridge components

Do not use Sequenced Assembly for every normal material.

### Mekanism

Role: **later technology / advanced chemistry and processing**

Mekanism should:

- build on earlier progression
- improve efficiency or unlock advanced materials
- not make Create irrelevant immediately
- not become available so early that mechanical progression is skipped

Use KubeJS Mekanism for supported machine/chemical recipes.

If the required recipe type has no dedicated helper:

1. inspect an existing recipe from the installed 1.21.1 build
2. confirm the exact serializer and JSON structure
3. implement through `event.custom(...)`

Do not guess Mekanism chemical/component JSON.

### Applied Energistics 2

Role: **late-game storage, logistics and autocrafting**

Applied KubeJS is locked as the dedicated AE2 integration.

Possible uses include:

- AE2-specific recipe scripting
- ME network monitoring/access
- storage-related events
- crafting-related events
- device/network inspection
- controlled ME crafting-job automation
- AE2-specific progression hooks where exposed

AE2 should automate established production chains. It must not replace the intended Create/Mekanism processing progression.

### Ars Nouveau

Role: **arcane crafting, magical processing and automation**

KubeJS integration can be used for systems such as:

- Enchanting Apparatus
- Imbuement
- Ars processing
- enchantment-related recipes
- valid glyph recipe replacement
- cross-mod magical components

Iron's and Ars should complement each other rather than duplicate the same role.

### Iron's Spells 'n Spellbooks

Role: **combat magic and magical equipment**

The dedicated KubeJS integration supports deeper systems such as:

- custom spells
- spell schools
- Alchemist Cauldron recipes
- spellbooks
- staves
- magical swords
- spell-related events

Custom spell registration belongs in startup-time logic where required.

Do not turn every class into a spellcaster merely because the API allows it.

---

## 4. Progression architecture

### FTB Quests

FTB Quests is the visible campaign/progression layer.

It explains:

- what the player should do
- why systems unlock
- where the next major progression point is

### AStages

AStages is the hard gameplay gate.

Important progression should be enforced through actual stages/restrictions, not only through quest visibility.

General pattern:

```text
Milestone / boss / quest
        ↓
FTB Quest completion
        ↓
AStages FTB Quests
        ↓
Stage granted
        ↓
Recipe / system / dimension / content unlock
```

Recommended stage namespace pattern:

```text
tk3:chapter/<name>
tk3:boss/<name>
tk3:tech/<name>
tk3:magic/<name>
tk3:dimension/<name>
```

Do not use one vague stage for many unrelated permissions.

---

## 5. Boss progression and reusable catalysts

Major bosses may unlock both:

1. a permanent player/team permission or stage
2. a reusable physical processing catalyst

Intended pattern:

```text
Boss defeated
    ↓
AStage granted
    ↓
Reusable catalyst obtained
    ↓
Catalyst used in processing
    ↓
Catalyst retained or returned
```

Design principle:

- first boss kill = progression unlock
- additional kills = more throughput / extra catalyst copies / optional rewards
- repeated boss killing should normally not be mandatory for every single crafted item

Potential processing mechanisms include:

- Create Deployer held-item behavior
- reusable basin components
- Ars apparatus interactions where appropriate
- verified custom return logic

---

## 6. Base KubeJS recipe rules

Use `ServerEvents.recipes` for normal recipe work.

General operations include:

- shaped crafting
- shapeless crafting
- furnace recipes
- blasting
- smoking
- campfire cooking
- stonecutting
- remove recipes
- replace recipe inputs
- replace recipe outputs
- datapack-based modded recipes through `event.custom(...)`

### Recipe IDs

Prefer stable explicit IDs for important custom recipes.

Recommended pattern:

```text
kubejs:tk3/<system>/<recipe_name>
```

Examples:

```text
kubejs:tk3/create/reinforced_mechanism
kubejs:tk3/mekanism/advanced_alloy
kubejs:tk3/ars/runic_component
```

Prefer exact recipe IDs when removing or replacing important recipes.

Avoid broad filters unless removing an entire family is intentional.

---

## 7. Custom modded JSON recipes

If a mod exposes its recipes through the datapack recipe system, T&K3 can often use:

```js
event.custom({
  type: 'modid:recipe_serializer',
  ...
})
```

Before writing one:

- inspect the installed mod's 1.21.1 JAR/source
- find an existing recipe of the same type
- verify the serializer ID
- verify the exact JSON layout
- verify item/fluid/component structure

Do not copy 1.18.2 or 1.20.1 JSON blindly.

---

## 8. Custom items, blocks and fluids

KubeJS startup scripts may register custom content where it solves a real progression need.

Valid examples:

- unfinished mechanisms
- reusable boss catalysts
- intermediate arcane components
- machine components
- progression tokens
- hybrid magic/technology parts
- custom fluids when genuinely required

Do not create intermediate items merely because KubeJS can create them.

A custom intermediate should provide at least one of:

- meaningful automation interaction
- a progression gate
- recipe readability
- reuse across multiple recipes
- thematic/worldbuilding value
- reusable catalyst behavior

Avoid unnecessary duplicate dusts, nuggets and one-use filler items.

---

## 9. Tags and ingredient unification

Tags are useful for:

- ingredient equivalence
- cross-mod material compatibility
- flexible recipe inputs
- ore/ingot/gem unification
- script classifications

Use tags when several equivalent items are genuinely interchangeable.

Use exact item IDs where progression depends on a specific item.

---

## 10. LootJS

LootJS is part of the selected T&K3 scripting stack.

Use it for:

- mob drops
- boss drops
- structure/chest loot
- progression materials
- optional rare rewards
- removing progression-breaking loot
- reusable catalyst/resource rewards

Important progression components must not accidentally appear in generic loot before their intended unlock.

---

## 11. Recipe viewer integration

Recipe viewer changes are presentation only.

Use RecipeViewer events where supported to:

- hide intentionally disabled entries
- remove obsolete recipes/categories
- add information
- clean up duplicate/unused presentation

**Never use recipe-viewer hiding as the actual progression gate.**

The server-side recipe/stage logic must be correct first.

---

## 12. Script folders

### `startup_scripts/`

Use for:

- custom item/block/fluid registration
- registry-time modifications
- custom Iron's spell registration where required
- systems needing startup registration

Registry/startup changes may require a full restart.

### `server_scripts/`

Use for:

- recipes
- tags
- progression logic
- AStages
- LootJS
- FTB integration events
- cross-mod compatibility
- server/player gameplay events

Typical reload:

```text
/reload
```

or:

```text
/kubejs reload server_scripts
```

### `client_scripts/`

Use for:

- tooltips
- recipe viewer presentation
- other client-only presentation behavior

### `data/`

Use for raw datapack resources when that is clearer/safer:

- recipes
- tags
- loot tables
- advancements
- functions
- mod-specific data-driven definitions

---

## 13. ProbeJS — runtime-authoritative API reference

**ProbeJS is selected as a development tool.**

Once the definitive T&K3 modslist is complete, generate a fresh ProbeJS export from the **exact assembled 1.21.1 NeoForge instance**.

That ProbeJS output then becomes the **runtime-authoritative API reference** for T&K3 scripting.

It should be retained with the project or alongside the locked mod versions.

Use the generated ProbeJS data to verify:

- event names
- namespaces
- classes
- methods
- overloads/signatures
- recipe builders
- bindings
- dedicated addon APIs
- what the exact installed runtime exposes

### Authority rule

Documentation/wiki pages remain useful for:

- intent
- examples
- explanation
- discovering capabilities

But when writing actual T&K3 scripts, the priority is:

1. ProbeJS output from the definitive installed instance
2. exact installed mod/addon source/changelog
3. runtime logs and actual behavior
4. external documentation/examples

If documentation and the generated ProbeJS types disagree, do not assume the documentation matches the installed build.

Verify the runtime.

Do not blindly paste syntax from:

- older Minecraft versions
- a different KubeJS major version
- another modpack
- a different addon build

### Planned workflow

After the modslist is finalized:

1. assemble the final mod set
2. lock compatible versions
3. run ProbeJS on that exact instance
4. provide/archive the ProbeJS output
5. audit all locked integrations against the generated APIs
6. update this document with any runtime-specific limitations
7. only then build the production recipe/progression scripts at scale

---

## 14. Mods without a locked dedicated KubeJS addon

Selected content mods may still be integrated through recipes, tags, LootJS, AStages, datapack files and verified serializers even if they do not have a dedicated KubeJS addon.

Examples include current selected systems such as:

- Create: Enchantment Industry
- Create Aeronautics / Sable
- Create Crafts & Additions
- Ars Creo
- Create: Ars Nouveau Compat
- Create: Wizardry
- Apotheosis / Apothic systems
- Epic Fight
- Weapons of Miracles
- Simply Swords
- selected boss/content mods

Do not assume direct control over internal AI, combat logic, physics or proprietary systems unless the installed API explicitly exposes them.

---

## 15. Candidate integrations — not locked

Candidate integrations must not be treated as runtime dependencies until they are explicitly moved into `MODLIST.md`.

Current relevant candidates include:

- MoreJS
- Create ReAutomated
- Create ReAutomated: Traces
- KubeJS Create Automation
- Create Heat JS
- Productive Metalworks + KubeJS integration
- Eidolon: Repraised + KubeJS integration
- EntityJS
- Modular Machinery Reborn

Do not silently write scripts requiring these.

---

## 16. Recommended T&K3 KubeJS structure

Preferred direction:

```text
TK3/kubejs/
├── startup_scripts/
│   ├── items/
│   │   ├── progression_items.js
│   │   └── catalysts.js
│   └── magic/
│       └── irons_custom_spells.js
│
├── server_scripts/
│   ├── recipes/
│   │   ├── vanilla.js
│   │   ├── create.js
│   │   ├── mekanism.js
│   │   ├── ars_nouveau.js
│   │   ├── irons_spells.js
│   │   ├── ae2.js
│   │   └── cross_mod.js
│   │
│   ├── progression/
│   │   ├── stages.js
│   │   ├── bosses.js
│   │   └── dimensions.js
│   │
│   ├── loot/
│   │   ├── bosses.js
│   │   └── structures.js
│   │
│   ├── compat/
│   │   ├── tags.js
│   │   ├── create_ars.js
│   │   ├── create_irons.js
│   │   └── create_mekanism.js
│   │
│   └── skilltree/
│       └── ...
│
├── client_scripts/
│   ├── tooltips.js
│   └── recipe_viewer.js
│
└── data/
    └── ...
```

Prefer files grouped by **system/function**, not generic old T&K2-style `TierOne`, `TierTwo`, etc. files.

Progression tiers will touch multiple mods simultaneously.

---

## 17. Recipe authoring checklist

Every major T&K3 recipe change should answer:

1. Why does this recipe exist?
2. What progression tier is it for?
3. Which mod/system owns the processing step?
4. Can it bypass another intended progression path?
5. Does it duplicate an existing recipe?
6. Does it require a stage?
7. Does the recipe viewer need cleanup?
8. Is every item/fluid ID verified?
9. Is the 1.21.1 serializer/API verified?
10. Has it been tested after the correct reload/restart?

---

## 18. Implementation safety rules

### Never guess IDs

Before using an item, block or fluid ID:

- verify in game
- use ProbeJS
- inspect the installed JAR/source
- use a verified data export

Do not infer registry IDs from display names.

### Never assume old syntax

Historical T&K2 KubeJS content can be used for ideas and migration targets, but it must not be copied directly into the 1.21.1 runtime without verification.

### Do not silently add candidate mods

If a script requires a mod that is not selected in `MODLIST.md`, stop and mark the dependency.

### Do not hide broken progression with JEI/EMI

Hiding a recipe is not the same as removing or gating it.

### Test multiplayer-sensitive systems

Anything involving:

- FTB Teams
- FTB Chunks
- shared stages
- shared quests
- Create Aeronautics / Sable
- player progression

must be multiplayer-tested before it is considered stable.

---

## 19. Validation workflow

For every new KubeJS subsystem:

### Step 1 — Verify dependencies
Confirm the target mod, correct 1.21.1 NeoForge version and required integration are actually installed.

### Step 2 — Verify API and IDs
Use ProbeJS and the installed JAR/source.

### Step 3 — Implement minimally
Change only the required behavior.

### Step 4 — Reload correctly
Use `/reload`, KubeJS reload commands or a full restart as required.

### Step 5 — Check logs
Any KubeJS script error means the subsystem is not complete.

### Step 6 — Check recipe presentation
Verify intended recipes, old recipe removal, duplicates, outputs, chances and fluids.

### Step 7 — Test progression bypasses
Test before/after stages and through crafting, automation, loot and multiplayer transfer where relevant.

### Step 8 — Document
Update this file when architecture/capabilities change and update `MODLIST.md` whenever a candidate becomes selected.

---

## 20. Current implementation reality

The repository currently contains `TK3/kubejs/server_scripts/TK3_SkillTree.js`, but project documentation identifies it as the older v1.0 generator.

The design source of truth for the current skill tree remains the v3.2.2 documentation.

Therefore:

- do not extend the old generator as the definitive current tree
- do not overwrite final class/subclass mappings with old mappings
- restore/re-export the v3.2.x runtime before treating skilltree implementation as complete

Historical T&K2 KubeJS files are reference-only.

---

## 21. Source-of-truth hierarchy

For project membership:

```text
TK3/docs/MODLIST.md
```

For overall project direction/status:

```text
TK3/docs/PROJECT_STATUS.md
```

For KubeJS architecture/capabilities:

```text
TK3/docs/KUBEJS_CAPABILITIES.md
```

For the actual installed KubeJS/addon API after the final modslist is assembled:

```text
Fresh ProbeJS export from the definitive T&K3 instance
```

That ProbeJS export is the runtime-authoritative technical reference for writing code against the locked instance.
