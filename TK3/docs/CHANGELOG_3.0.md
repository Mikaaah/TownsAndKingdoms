# Towns & Kingdoms 3.0 — Modlist & Development Changelog

> Living comparison log for Towns & Kingdoms 3.
>
> Target: **Minecraft 1.21.1 / NeoForge**
>
> This file tracks meaningful changes from the Towns & Kingdoms 2 era into T&K3. It is intentionally maintained alongside `MODLIST.md`.

## Legacy reference

T&K2 public wiki references:

- Mod list: https://github.com/Mikaaah/TownsAndKingdoms/wiki/Modslist
- 1.20.1 update: https://github.com/Mikaaah/TownsAndKingdoms/wiki/A-New-World-%7C-The-1.20.1-Update

The legacy pages are comparison material only. T&K3 does not inherit a mod, config or script simply because it existed in T&K2.

## Comparison labels

- **Returning** — confirmed T&K2 concept/mod retained in T&K3.
- **Added** — new to T&K3.
- **Replaced** — T&K2 mod/system is intentionally superseded.
- **Removed** — T&K2 mod/system is intentionally not returning.
- **Reworked** — same broad feature remains but its implementation/progression changes substantially.
- **Candidate** — under active review; not part of the final stable baseline yet.
- **Needs T&K2 audit** — current T&K3 selection is known, but exact T&K2 comparison has not yet been verified against the legacy list.

---

## 3.0 baseline

### Platform
- Minecraft target moved to **1.21.1**.
- Loader baseline moved to **NeoForge**.
- T&K3 is treated as a rebuild rather than an in-place port of T&K2.
- T&K2 scripts, configs and assets are reference material only.

### Progression architecture
- **FTB Quests** is the visible campaign/progression layer.
- **AStages** provides hard gameplay gating so recipes, machines, items and systems cannot be bypassed simply by obtaining a late-game item.
- **End Remastered** is part of the End-access progression.
- Boss and milestone progression can unlock reusable processing permissions/catalysts.

### Character progression
- **Passive Skill Tree** is the character-progression foundation.
- T&K3 uses six definitive classes, eighteen subclasses and four professions.
- Class identity is designed to interact with combat, equipment and progression instead of being a standalone stat screen.

### Combat
- **Epic Fight** is the combat framework.
- **Weapons of Miracles** and **Simply Swords** are part of the selected weapon/combat stack.
- Compatibility/movesets for the selected T&K3 stack are maintained by T&K3 instead of relying on a generic compatibility pack.

### Gear & loot
- **Apotheosis / Apothic systems** provide affixes, gems, sockets and related loot systems.
- Default progression/balance is deliberately customized for T&K3.

### Magic
- **Iron's Spells 'n Spellbooks** is primarily the combat-spellcasting system.
- **Ars Nouveau** is primarily the arcane crafting, processing and automation system.
- Cross-mod progression is intentionally used to prevent the magic mods from becoming separate progression islands.
- **Just Another Witchery Remake** is part of the selected magic stack.

### Engineering, automation & storage
- **Create** is the early/mid-game mechanical and processing backbone.
- **Mekanism + Mekanism Generators** form a later technology layer.
- **Applied Energistics 2** is the late-game storage, logistics and autocrafting layer.
- AE2 should support intended processing chains rather than bypass them.
- **Create Aeronautics** is planned as a meaningful travel/engineering progression system.
- Automation is intentionally compact; T&K3 avoids unnecessary multi-step material bloat.

### Integration layer
- **KubeJS**, **ProbeJS** and **LootJS** are part of the foundation.
- Locked KubeJS integrations:
  - KubeJS Create
  - KubeJS Mekanism
  - KubeJS Ars Nouveau
  - KubeJS Iron's Spells
  - Applied KubeJS
- Cross-mod recipes and compatibility are an intentional pack feature rather than incidental mod overlap.

### Bosses, mobs & dimensions
Current selected content includes:
- Cataclysm
- Alex's Mobs community 1.21.1 NeoForge port
- Alex's Caves community 1.21.1 NeoForge port
- Ice and Fire: Community Edition
- Bosses' Rise
- Mowzie's Mobs
- The Twilight Forest
- Amplified Nether

### Towns, kingdoms & multiplayer
- **MineColonies** is selected as the primary settlement/kingdom system for T&K3. MCA Reborn was only considered during early T&K3 planning and was not part of T&K2.
- **MineColonies: Epicfied (Epic Colonies)** is now the primary Epic Fight integration candidate for MineColonies.
- **Epic Fight X Minecolonies Compat** remains the fallback bridge if Epic Colonies fails compatibility or stability testing.
- **Create: MineColonies Link** is selected to connect colony supply requests to Create logistics.
- A dedicated multiplayer performance baseline is being introduced for colony population, claims, chunk-loading, pathfinding and raid size.
- **FTB Chunks** and **FTB Teams** provide the current claims/team foundation.
- Additional kingdom/town integrations can still be selected where they add real cross-mod value.

### Travel
- **Waystones** is selected.
- Create Aeronautics/Sable interactions with claims, teleportation, magic and machines require explicit multiplayer testing.

### World generation
- **FreeTerraForged** replaces ReTerraForged as the primary Overworld terrain candidate.
- The selected Overworld test stack now combines FreeTerraForged with Alex's Caves, Biomes O' Plenty, Oh The Biomes We've Gone, Upgrade Aquatic, Atmospheric, Autumnity, Environmental and [Let's Do] BloomingNature.
- The End test stack now uses BetterEnd: New Dawn as the primary overhaul, with Nullscape remaining the terrain-layer candidate.
- YUNG's Better End Island has been rejected because BetterEnd already covers the central End experience and additional End structures; stacking another main-island overhaul adds unnecessary overlap.
- End's Phantasm has been rejected for T&K3.
- The Nether test stack uses Amplified Nether + BetterNether: New Dawn + YUNG's Better Nether Fortresses. Gardens of the Dead has been rejected for T&K3.
- YUNG's Better Nether Fortresses is selected partly because its 1.21.1 NeoForge build includes optional built-in Create compatibility.
- BOP's Nether/End biome injection will be configured independently from its Overworld role to avoid conflicts with dedicated dimension overhauls.

### Economy
- Economy selection is still **TBD**.

---

## Mod-by-mod comparison ledger

This is the working ledger used while finalizing the 3.0 pack. The T&K2 comparison column must be updated whenever a mod is locked, removed or replaced.

| Category | Mod / System | T&K3 status | T&K2 comparison | Change |
| --- | --- | --- | --- | --- |
| Progression | FTB Quests | Core | Needs T&K2 audit | Reworked |
| Progression | AStages | Core | Needs T&K2 audit | Added / Reworked |
| Progression | End Remastered | Core | Needs T&K2 audit | Needs audit |
| Character | Passive Skill Tree | Core | Needs T&K2 audit | Added / Reworked |
| Combat | Epic Fight | Core | Needs T&K2 audit | Added / Reworked |
| Combat | Weapons of Miracles | Core | Needs T&K2 audit | Added |
| Combat | Simply Swords | Core | Needs T&K2 audit | Needs audit |
| Gear | Apotheosis / Apothic | Core | Needs T&K2 audit | Reworked |
| Magic | Ars Nouveau | Core | Needs T&K2 audit | Needs audit |
| Magic | Iron's Spells 'n Spellbooks | Core | Needs T&K2 audit | Added / Needs audit |
| Magic | Just Another Witchery Remake | Core | Needs T&K2 audit | Added / Needs audit |
| Tech | Create | Core | Needs T&K2 audit | Reworked |
| Tech | Mekanism | Core | Needs T&K2 audit | Needs audit |
| Tech | Mekanism Generators | Core | Needs T&K2 audit | Needs audit |
| Storage | Applied Energistics 2 | Core | Needs T&K2 audit | Added / Needs audit |
| Travel / Tech | Create Aeronautics | Core | Needs T&K2 audit | Added |
| Bosses | Cataclysm | Core | Needs T&K2 audit | Needs audit |
| Mobs | Alex's Mobs | Core | Needs T&K2 audit | Needs audit |
| Exploration | Alex's Caves | Core | Needs T&K2 audit | Added / Needs audit |
| Mobs | Ice and Fire: Community Edition | Core | Needs T&K2 audit | Needs audit |
| Bosses | Bosses' Rise | Core | Needs T&K2 audit | Added |
| Mobs | Mowzie's Mobs | Core | Needs T&K2 audit | Needs audit |
| Dimensions | The Twilight Forest | Core | Needs T&K2 audit | Needs audit |
| Dimensions | Amplified Nether | Core | Needs T&K2 audit | Added / Needs audit |
| Towns | MineColonies | Core | Needs T&K2 audit | Added / Returning pending audit |
| Towns | MCA Reborn | Not selected | Not present in T&K2 | Early T&K3 candidate only |
| Integration | MineColonies: Epicfied (Epic Colonies) | Candidate / primary test | New T&K3 bridge | Candidate |
| Integration | Epic Fight X Minecolonies Compat | Fallback candidate | New T&K3 bridge | Candidate / fallback |
| Integration | Create: MineColonies Link | Integration | New T&K3 bridge | Added |
| Integration | Compatibility addon for MineColonies | Candidate | New T&K3 bridge | Candidate |
| Integration | Tweaks addon for MineColonies | Candidate | New T&K3 bridge | Candidate |
| Travel | Waystones | Core | Needs T&K2 audit | Needs audit |
| Multiplayer | FTB Chunks | Core | Needs T&K2 audit | Needs audit |
| Multiplayer | FTB Teams | Core | Needs T&K2 audit | Needs audit |
| Scripting | KubeJS | Core | Needs T&K2 audit | Reworked |
| Scripting | ProbeJS | Core | Needs T&K2 audit | Added / Needs audit |
| Scripting | LootJS | Core | Needs T&K2 audit | Added / Needs audit |
| Worldgen | FreeTerraForged | Candidate / primary Overworld test | New T&K3 choice | Replaces ReTerraForged |
| Worldgen | ReTerraForged | Dropped from primary test | T&K3 pre-release candidate | Replaced by FreeTerraForged |
| Overworld | Biomes O' Plenty | Selected test stack | Needs T&K2 audit | Returning / needs audit |
| Overworld | Oh The Biomes We've Gone | Selected test stack | Needs T&K2 audit | Added / needs audit |
| Overworld | Upgrade Aquatic | Selected test stack | Needs T&K2 audit | Returning / needs audit |
| Overworld | Atmospheric | Selected test stack | Needs T&K2 audit | Added / needs audit |
| Overworld | Autumnity | Selected test stack | Needs T&K2 audit | Added / needs audit |
| Overworld | Environmental | Selected test stack | Needs T&K2 audit | Added / needs audit |
| Overworld | [Let's Do] BloomingNature | Selected test stack | Needs T&K2 audit | Added / needs audit |
| End | BetterEnd: New Dawn | Selected test stack | Needs T&K2 audit | Added / needs audit |
| End | YUNG's Better End Island | Rejected | Needs T&K2 audit | Removed from T&K3 consideration |
| End | Nullscape | Candidate terrain layer | Needs T&K2 audit | Candidate |
| End | End's Phantasm | Rejected | Needs T&K2 audit | Removed from T&K3 consideration |
| Nether | Amplified Nether | Selected test stack | Needs T&K2 audit | Added / needs audit |
| Nether | BetterNether: New Dawn | Selected test stack | Needs T&K2 audit | Added / needs audit |
| Nether | YUNG's Better Nether Fortresses | Selected test stack | Needs T&K2 audit | Added / needs audit |
| Nether | Gardens of the Dead | Rejected | Needs T&K2 audit | Removed from T&K3 consideration |

---

## MineColonies multiplayer baseline

Initial dedicated-server test limits:

- maximum 100 citizens per colony
- 12-chunk maximum colony radius
- 12-chunk minimum colony distance
- colony force-loading disabled
- pathfinding node multiplier kept at 1
- raids capped at 40 raiders
- one active colony per player/team by default
- no default permanent FTB Chunks force-loading of complete colonies

These values are deliberately conservative. They can be relaxed after real multiplayer profiling rather than assuming the default MineColonies limits are appropriate for a large T&K3 server.

---

## Open comparison work

- Import/verify the complete T&K2 1.20.1 mod list into the comparison ledger.
- Mark each T&K3 mod as Returning, Added, Replaced or Removed relative to T&K2.
- Record replacements where a T&K2 feature returns through a different mod.
- Keep dependencies out of headline changelog sections unless they materially affect players.
- Add final worldgen, economy, town/kingdom and QoL/performance decisions once locked.
- Add exact jar versions only after the first assembled 1.21.1 NeoForge instance is version-locked.

## Maintenance rule

Whenever the definitive mod selection changes:

1. Update `TK3/docs/MODLIST.md` first.
2. Update the relevant row/section in this changelog.
3. Update the public-facing 3.0 wiki-source pages in `TK3/wiki/`.
4. For a removed or replaced mod, record the reason if it affects progression, worlds, servers or player expectations.
