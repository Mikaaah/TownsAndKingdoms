# Timed Cave Expeditions — System Design

## Goal

Build a repeatable custom cave dimension for T&K3 that acts like an **expedition / extraction run** rather than a normal permanent dimension.

The player enters with a fixed time budget, explores dangerous cave biomes, fights stronger mobs and bosses, collects expedition loot, then extracts before time expires.

Rewards can include:
- custom resources
- boss materials
- spell loot
- equipment components
- research/blueprints
- Passive Skill Tree points
- chapter currencies / keystones

## World generation

Use a datapack-defined custom dimension with a noise generator and custom biome source.

The biome pool can contain:
- custom T&K cave biomes
- selected Alex's Caves Continued biomes where they behave correctly outside their normal Overworld placement
- custom variants inspired by Alex's cave palettes/features if direct reuse proves fragile
- boss / ruin / resource sub-biomes

Important: Alex's Caves Continued keeps the original six large cave biomes and original behavior. Directly placing those registered biomes in another dimension is technically possible at the biome-source level, but every feature, structure, spawn rule and mod hook must be tested because some Alex's Caves logic may assume its normal Overworld context.

Preferred development order:
1. make one simple custom cave dimension with vanilla/custom biome
2. add one Alex's Caves biome
3. verify generation, features, mobs, structures and server stability
4. only then build the full biome mix

## Expedition loop

**Prepare → Open Expedition → Enter → Timer Starts → Explore → Elite/Boss Objectives → Extract → Rewards**

Suggested tiers:

### Expedition I
- 15–20 minutes
- Chapter III
- basic elite mobs
- common magical/AE2 discovery materials
- optional mini-boss
- first skill-point rewards

### Expedition II
- 20–25 minutes
- Chapter IV
- stronger mob modifiers
- hazardous cave regions
- spell/relic loot
- guaranteed boss objective
- more skill points / blueprint rewards

### Expedition III+
- Chapter V onward
- multi-biome routes
- stronger elites
- Cataclysm/Mowzie/Alex-derived encounter pools where appropriate
- multiple bosses/objectives
- rare custom resources
- high-value extraction rewards

## Timer implementation

KubeJS/server scripting can maintain per-player or per-team expedition state:
- active run
- remaining ticks/time
- expedition tier
- kills/objectives
- boss completion
- extraction status

A scoreboard can be used for visible timer/UI compatibility, while persistent player/team data stores authoritative state.

On timeout:
- force extraction to the overworld/hub
- optionally lose **unsecured expedition-only loot**, not normal player inventory
- mark run failed
- never strand a player in the dimension

## Rewards / skill points

Passive Skill Tree's 1.21.1 NeoForge port is datapack/KubeJS oriented. T&K can award points through the same command/item pattern used previously, but the exact command/API should be verified against the installed build.

Reward principles:
- skill points for first-clear milestones and difficult objectives
- repeatable runs mainly reward resources/currency, not infinite easy skill-point farming
- higher expedition tiers can have repeatable but capped/expensive skill-point rewards
- boss rewards should be deterministic enough to avoid 30 identical runs for one progression item

## Multiplayer architecture

There are three implementation levels:

### A. Shared persistent dimension — easiest
One expedition dimension exists for everyone.
Runs use separate distant sectors/regions or controlled arenas.
Very scriptable, low technical risk.

### B. Pre-generated run sectors — recommended
Reserve large coordinate cells, e.g. one 2–4k block region per active expedition.
Teleport teams to an unused sector.
Reset/delete/regenerate sectors between runs if tooling permits.

This gives an instance-like feeling without creating runtime dimensions.

### C. True dynamic instance dimensions — hardest
Create a fresh dimension/world per party/run.
This is not something a normal datapack/KubeJS setup handles elegantly at runtime.
Use a small T&K NeoForge companion mod if true per-run dimensions become a hard requirement.

Recommended starting point: **B**.

## Difficulty scaling

Do not scale only HP.

Expedition tier can modify:
- mob equipment / abilities
- elite spawn chance
- Epic Fight behavior
- spell-capable enemies
- damage / poise / stagger resistance
- environmental hazards
- boss phases
- loot tables

Use modest HP scaling so combat does not become spongey.

## Resource economy

Expeditions are ideal for **discovery and rare input**, but not for endless mandatory bulk grinding.

Rule:
- exploration unlocks/introduces a resource
- later industry creates a renewable or synthetic route for routine quantities
- expedition-exclusive materials remain for boss cores, blueprints, legendary imprints and high-value catalysts

This keeps the expedition exciting while respecting the pack's automation philosophy.

## Why this can replace part of MineColonies

If MineColonies is removed, T&K still needs the “Kingdoms” identity. Use lighter systems:
- settlement/kingdom construction milestones
- resource contracts
- expedition guild / bounty board
- Create/AE2 supply objectives
- rebuildable structures/landmarks
- NPC or merchant hubs if a lightweight NPC system is selected later
- chapter-wide kingdom projects

This preserves civilization progression without requiring dozens of continuously ticking colonist AIs.
