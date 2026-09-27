# T&K3 Mod List — 1.21.1 NeoForge

Cross-reference baseline: **2026-09-28**.  
This list is deliberately curated from T&K2's actual quest/KubeJS footprint plus current 1.21.1 NeoForge candidates. Dependencies/libraries are not listed unless they matter to pack design.

## Status

- **Candidate** — strong fit; put into the first compatibility instance unless noted
- **Testing** — promising but must prove compatibility/balance before becoming core
- **Optional** — useful/flavorful; add only if the pack still has room
- **Rejected** — do not plan around it for the current target

## Foundation & pack development

| Mod | T&K2 | Status | Role / decision |
|---|---:|---|---|
| Create | Yes | Candidate | Core manufacturing language |
| KubeJS | Yes | Candidate | Recipes, events, integration, custom content |
| LootJS | New | Candidate | Script dungeon/boss/structure loot without hand-editing every table |
| KubeJS Additions | New | Candidate | Extra integration + custom recipe/JEI presentation options |
| ProbeJS | New | Candidate (dev-only) | Registry/API discovery and VS Code scripting support |
| FTB Quests | Yes | Candidate | Main story + optional reference tabs |
| FTB Teams | Yes/dep | Candidate | Team quest progression |
| FTB Chunks | Yes | Optional | Claims/map if wanted; not needed for core progression |
| JEI | Yes | Candidate | Recipe discovery; critical in a heavily customized pack |
| Jade | Yes | Candidate | Machine/block information |
| Jade Addons | New | Optional | Extra Jade integration |

## Create & engineering

| Mod | T&K2 | Status | Role / decision |
|---|---:|---|---|
| Create: Connected | New | Candidate | High-value Create QoL with little progression bloat |
| Create: Copycats+ | New | Candidate | Excellent building flexibility around factories/towns |
| Create Deco | Yes | Candidate | Industrial building palette |
| Create: Steam 'n' Rails NeoForge | Yes | Candidate | Kingdom logistics/trains; unofficial port so test it |
| Create Slice & Dice | New | Candidate | Connects Farmer's Delight food production to Create |
| CreateColonies | New | Candidate | Direct Create ↔ MineColonies integration |
| Create Crafts & Additions | Yes | Testing | Useful electrical bridge; include only if energy has a clear progression purpose |
| Create: The Factory Must Grow | Yes | Testing | Strong heavy-industry option, but large enough to become its own tech tree; must earn its place |
| Create Power Loader | New | Optional | Useful for trains/large moving infrastructure |
| Create Enchantment Industry | Yes | Optional | Only if enchanting/XP processing fits the final magic/equipment economy |
| old Create: Dreams & Desires stack | Yes | Rejected | Do not rebuild the old addon pile/mechanism ladder |

## RPG, combat & character progression

| Mod | T&K2 | Status | Role / decision |
|---|---:|---|---|
| Epic Fight | Yes | Candidate | Core combat system |
| Passive Skill Tree NeoForge | New | Testing | Intended character-progression backbone; very new unofficial port, test hard |
| Simply Swords | Yes | Testing | Excellent weapon variety for manufacturing; recipes/stats/movesets must be curated |
| Artifacts | Yes | Candidate | Lighter exploration relic system |
| Relics | Yes | Optional | Use instead of / selectively alongside Artifacts only if it adds distinct build choices |
| Epic Fight Compat | New | Testing | Covers many weapons, but is extremely new; never make the pack depend on it blindly |
| Apotheosis | Yes | Rejected initially | Affix/gem power can overwhelm our custom weapon tiers + skill tree; reconsider only selected modules later |
| Epic Samurai / duplicate weapon packs | Yes | Rejected initially | Avoid weapon bloat until the core Epic Fight equipment roster is locked |

## Magic

Goal: **one primary magic identity + at most one complementary system** at first.

| Mod | T&K2 | Status | Role / decision |
|---|---:|---|---|
| Iron's Spells 'n Spellbooks | Yes | Candidate | Best fit for RPG combat, boss loot and skill-tree builds |
| Ars Nouveau | Yes | Candidate | Best fit for arcane crafting/automation; compare directly with Iron's role |
| Malum | Yes | Candidate | Strong complementary soul/spirit metallurgy and thematic materials |
| Ars 'n Spells | New | Optional/Testing | Interesting bridge if both Ars + Iron's survive selection |
| Summoning Rituals | New | Testing | Very useful packdev tool for ritual crafting, command triggers and custom boss/item rituals |
| Botania | Yes | Rejected for target | No official 1.21.1 release currently; also duplicates a full progression system |

### Magic decision to make
Preferred prototype:
1. **Iron's Spells + Malum** for RPG-first magic, **or**
2. **Ars Nouveau + Malum** for engineering/crafting-first magic.

Only test Ars + Iron's + Malum together if each ends up with a non-overlapping role.

## MineColonies / kingdom

| Mod | T&K2 | Status | Role / decision |
|---|---:|---|---|
| MineColonies | Yes | Candidate | Civilization/kingdom pillar |
| CreateColonies | New | Candidate | Mechanical-colony bridge |
| Compatibility addon for MineColonies | New | Testing | Adds compatibility content; useful but verify exactly what we need |
| Structurize | Yes/dep | Dependency | MineColonies foundation |
| Create: Colony | New | Optional | Alternative/integration candidate; compare against CreateColonies instead of stacking both |

## Bosses, dimensions & major adventure content

| Mod | T&K2 | Status | Role / decision |
|---|---:|---|---|
| Twilight Forest | Yes | Candidate | Major curated adventure realm |
| Twilight Tweaks | New | Candidate | Lets us trigger our own final encounter/function |
| Twilight Forest Final Boss Remake | New | Testing | Ready-made Castle Keeper; can sit inside our custom encounter wrapper |
| L_Ender's Cataclysm | Yes | Candidate | High-quality major bosses, structures and endgame threats |
| Mowzie's Mobs | Yes | Candidate | Memorable overworld elites/bosses without adding another huge dimension |
| Mowzie's Cataclysm | New | Testing | Nice bridge between the two boss ecosystems |
| The Aether | Yes | Optional | Strong secondary realm; add only if it has a defined chapter role |
| Deeper and Darker | Yes | Optional | Alternative secondary dimension; do not automatically keep every realm |
| Ad Astra | Yes | Optional | Keep as a late expedition, never as the pack's final goal |
| IceAndFire Community Edition | Replaces old I&F | Testing | Dragons/legendary materials fit well, but worldgen/content footprint is large |
| Alex's Caves Neo unofficial port | Replaces old Alex's Caves | Testing later | Old pack used it heavily, but unofficial/new port makes it too risky for foundation |
| Alex's Mobs Neo unofficial port | Replaces old Alex's Mobs | Optional/Testing | Same concern; don't need it if Mowzie/Cataclysm already cover creature variety |
| End Remastered | Yes | Rejected initially | Our own Keystone/Relic progression should replace the old eye gate |

## World generation, structures & dungeons

| Mod | T&K2 | Status | Role / decision |
|---|---:|---|---|
| Tectonic | New | Candidate | Terrain shaping; strong base for exploration |
| Regions Unexplored | Yes | Candidate | Biomes + building palette; test density with Tectonic |
| Integrated Dungeons and Structures (IDAS) | Yes | Testing | Very thematic with Create/Quark/Supplementaries; likely primary structure suite |
| YUNG's Better Strongholds | Yes-ish | Candidate | Makes the vanilla End route a real dungeon |
| YUNG's Better Dungeons | Yes-ish | Optional | Add only if IDAS leaves a dungeon gap |
| Dungeons & Taverns | New | Optional/Testing | Good structures, but overlaps with IDAS/YUNG; choose, don't stack everything |
| Lootr | Yes | Candidate | Essential multiplayer dungeon loot handling |
| The Graveyard / large extra structure stacks | Yes | Rejected initially | Re-add individually only after worldgen density testing |

### Worldgen rule
Start with **Tectonic + Regions Unexplored + IDAS + Better Strongholds + Lootr**. Add more only after a seed sweep proves the world is not saturated.

## Food, farming & preparation

| Mod | T&K2 | Status | Role / decision |
|---|---:|---|---|
| Farmer's Delight | Yes | Candidate | Main food/cooking ecosystem |
| Create Slice & Dice | New | Candidate | Industrial food integration |
| Let's Do: Vinery | Yes | Optional | Good flavor if drinks get a defined buff/economy role |
| Let's Do: HerbalBrews | Yes | Optional | Potential potion/preparation niche |
| Bakery / Candlelight / Meadow / Beachparty / Brewery etc. | Yes | Rejected initially | Old suite created food bloat; only bring back individual mods with a clear role |

## Building & decoration

Building content is allowed a little more breadth because it adds less mechanical bloat.

| Mod | T&K2 | Status | Role / decision |
|---|---:|---|---|
| Supplementaries | Yes | Candidate | Excellent vanilla+/town utility and decoration |
| Quark | Yes | Candidate | Broad vanilla+ improvements; review modules and disable overlap |
| Create: Copycats+ | New | Candidate | Factory/town building flexibility |
| Create Deco | Yes | Candidate | Industrial detail |
| Handcrafted | Yes | Candidate | Furniture/buildables |
| MrCrayfish's Furniture Mod: Refurbished | Yes | Optional | Functional furniture; test overlap with Handcrafted |
| Chipped | Yes | Optional | Huge decorative palette; safe-ish but can clutter JEI |
| Architect's Palette / Another Furniture | Yes | Rejected initially | Add later only if the palette has a real gap |

## Storage, logistics & QoL

| Mod | T&K2 | Status | Role / decision |
|---|---:|---|---|
| Applied Energistics 2 | Yes | Candidate | Mid/late-game logistics; custom Create-based processor recipes again |
| Sophisticated Backpacks | Yes | Candidate | Player inventory/QoL |
| Sophisticated Storage | Yes | Optional | Useful, but AE2 + colony + Create may already cover storage |
| Waystones | Yes | Candidate | Keep, but gate/cost it so travel still matters |
| Nature's Compass | Yes | Optional | Great anti-frustration tool; gate or reward it |
| Explorer's Compass | New | Optional | Same for structures; useful if major dungeons are rare |
| FTB Chunks | Yes | Optional | Claims + map |
| one map mod | Yes | Candidate | Choose JourneyMap **or** Xaero, not both |
| EnderStorage / duplicate wireless storage | Yes | Rejected initially | Avoid another storage ecosystem unless a real need appears |

## Custom systems / special packdev tools

| Mod | T&K2 | Status | Role / decision |
|---|---:|---|---|
| Custom Machinery | New | Testing | Powerful escape hatch for a custom forge/ritual/machine recipe type; beta, only use if Create cannot express the mechanic cleanly |
| Summoning Rituals | New | Testing | Custom ritual recipe/command/boss trigger framework |
| LootJS | New | Candidate | Custom loot integration |
| KubeJS Additions | New | Candidate | Custom presentation/integration |
| ProbeJS | New | Candidate (dev-only) | Scripting productivity |

## Performance baseline

| Mod | Status | Notes |
|---|---|---|
| ModernFix | Candidate | General fixes, memory/startup improvements |
| FerriteCore | Candidate | Memory reduction |
| Embeddium | Candidate | Client renderer performance |
| Entity Culling | Candidate | Client rendering savings |

Add performance mods one by one and benchmark Create + MineColonies + Epic Fight before calling the stack final.

# Recommended first compatibility instance

Do **not** install every optional candidate at once.

### Foundation
Create, KubeJS, LootJS, KubeJS Additions, FTB Quests, FTB Teams, JEI, Jade, Epic Fight, Passive Skill Tree.

### First gameplay pillars
MineColonies, CreateColonies, Farmer's Delight, Slice & Dice, Twilight Forest, Twilight Tweaks, Cataclysm, Mowzie's Mobs, Simply Swords, Artifacts.

### Engineering/building
Create Connected, Copycats+, Create Deco, Steam 'n' Rails, AE2, Sophisticated Backpacks, Supplementaries, Quark, Handcrafted.

### World
Tectonic, Regions Unexplored, IDAS, YUNG's Better Strongholds, Lootr.

### Magic test A/B
- A: Iron's Spells + Malum
- B: Ars Nouveau + Malum

### Performance/dev
ModernFix, FerriteCore, Embeddium, Entity Culling, ProbeJS.

This is the **v0.1 compatibility/prototype stack**, not the final pack. The next step is to boot it, verify dependencies, and remove or replace anything that does not justify its footprint.
