# Compatibility modules · runtime v2

The current KubeJS baseline is the supplied fixed package for Minecraft 1.21.1. Compatibility recipes are separated into **40 mod-specific modules** under `TK3/kubejs/server_scripts/recipes/compat/`. The list below is the module inventory; a module may be guarded by mod-presence checks and only loads recipes when its integrations exist.

| Mod ID / module |
|---|
| ae2 |
| aeronautics |
| alexscaves |
| apotheosis |
| appmek |
| ars_nouveau |
| atmospheric |
| autumnity |
| betterend |
| betternether |
| biomesoplenty |
| biomeswevegone |
| bloomingnature |
| cataclysm |
| chipped |
| create |
| create_aquatic_ambitions |
| create_ars_nouveau |
| create_dragons_plus |
| create_enchantment_industry |
| create_hypertube |
| create_wizardry |
| createaddition |
| createminecolonies |
| environmental |
| farmersdelight |
| iceandfire |
| irons_jewelry |
| irons_spellbooks |
| mekanism |
| mekanismgenerators |
| mekanismtools |
| minecraft |
| quark |
| simulated |
| sliceanddice |
| sophisticatedbackpacks |
| sophisticatedstorage |
| twilightforest |
| upgrade_aquatic |

Recipe integration totals and the package validation notes are in [`RUNTIME_V2_MANIFEST.json`](RUNTIME_V2_MANIFEST.json). This is source-level compatibility inventory; a Minecraft boot test has not been performed.

[Recipe IDs and tiers](Recipes-v2.md)
