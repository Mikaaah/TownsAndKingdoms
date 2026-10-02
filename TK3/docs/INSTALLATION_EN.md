# Installation

Target: Minecraft 1.21.1 NeoForge, KubeJS 2101.7.2 and the selected integration addons.

1. Back up the instance and world. Begin with a new test world.
2. Add Architect’s Palette for 1.21.1 NeoForge. It is absent from the 1 October mod export but explicitly required for `architects_palette:algal_blend`.
3. Use this package in the current T&K3 instance. The T&K2 archives are historical references, not the active scripting base.
4. Move old T&K2 startup and server scripts outside the active KubeJS directory. Old Remove/Replace/Compat/Tier scripts can erase new recipes or load removed mod IDs. Keep the current T&K3 skill-tree scripts.
5. Replace earlier files from this recipe package and copy its entire `kubejs` directory, including `assets`. Do not merge multiple revisions of the tier scripts.
6. For a new campaign, copy `config/ftbquests/quests`. For an existing campaign, merge the five chapter files and their chapter group. Do not overwrite the existing `data.snbt`.
7. Fully restart Minecraft and the server for item/block registration and startup-script changes. Use `/reload` for subsequent recipe-only edits. Reload FTB Quests using the version’s supported option, or restart.
8. Follow the validation checklist before using the package in a public release.

## Updates and load order

The package contains 788 recipes, 81 quests, six component items and four machine-frame blocks. The original 66 quest IDs remain; fifteen extra quests guide frames and compatibility. Four new tool quests guide ordinary tools before milestone rewards. Frame quests are prerequisites for their machine family and chapter milestones.

`tk3_whitelist.js` runs last with priority `-10000`. Do not place another recipe modifier after it at a lower priority. Processing restrictions target recipe type and input; changed machine/component outputs use an exact recipe-ID whitelist.

## Teams and stages

FTB Quests shares progression by team. KubeJS synchronises AStages at chapter completion and player login. Factory checkmarks are player confirmations; the Wilden task checks a kill.

Stage `tk3_tier_6` is not granted. The last milestone completes chapter 5 without early AE2 access. Stages are only added: when resetting quests for a fresh test, also remove `tk3_tier_2` through `tk3_tier_5` using the installed AStages version’s admin tools.

## Assets and scope

Copy `kubejs/assets` as well as the scripts. Kinetic, Sealed and Incomplete Sealed use the original T&K2 PNGs. Arcane currently uses a native Create texture. Client textures can be reloaded with F3+T; startup changes still require a restart.

No Thermal, Botania, Ad Astra or Create D&D dependency is introduced. Architect’s Palette is the only explicit addition to the reviewed mod export. Scripts are prepared and statically checked; they have not been installed or tested in a running Minecraft instance here.
