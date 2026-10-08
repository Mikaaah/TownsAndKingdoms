# Progression, stages, and runtime data · v2

**Source baseline:** fixed KubeJS package supplied October 2026; Minecraft 1.21.1. The package uses ten named recipe tiers. Recipes establish progression cost through mechanisms, frame parts, and processing chains. AStages restrictions stop loot, trading, alternate recipes, or other bypasses of the tier-defining machines. Ordinary resources, cables, components, tools, storage parts, and mod materials remain ungated.

All 14 stage milestones below were checked against the current canonical FTB Quest chapter files. The older uploaded quest ZIP was not used to replace the expanded campaign.

## Tier sequence

| Tier | Chapter | Stage key |
|---:|---|---|
| 1 | Rotation | `tk3_tier_1` |
| 2 | Sealed | `tk3_tier_2` |
| 3 | Precision | `tk3_tier_3` |
| 4 | Calculation | `tk3_tier_4` |
| 5 | Inductive | `tk3_tier_5` |
| 6 | Arcane | `tk3_tier_6` |
| 7 | Chemical Engineering | `tk3_tier_7` |
| 8 | Containment | `tk3_tier_8` |
| 9 | Singularity | `tk3_tier_9` |
| 10 | Sovereign | `tk3_tier_10` |

## Quest milestone links

| Stage | FTB Quests milestone ID |
|---|---|
| Tier 2 | `B0A94968CD02DE8A` |
| Tier 3 | `60278B0905A64DC9` |
| Tier 4 | `B81077B20C8371D3` |
| Tier 5 | `1CD504854E287D44` |
| Tier 6 | `4B5E0820B553B7C9` |
| Tier 7 | `DCEB2AF9B398CAEB` |
| Tier 8 | `BCC05513E2AD3BA9` |
| Tier 9 | `91CC6BEFB3017B3F` |
| Tier 10 | `DD2408B49260ECA5` |
| Boss Dragon Core | `4585DD0797591621` |
| Boss Nether Star Focus | `B1EC8B5E18AF1A4E` |
| Boss Ignis Focus | `92F27CBC4799C649` |
| Boss Void Focus | `1EAF5BC1918535CA` |
| Boss Sovereign Focus | `DF8CD8E80FF1BEBC` |

## Restricted items

| Stage | Restricted item count | Example items |
|---|---:|---|
| Tier Tier 2 | 10 | `kubejs:tk3_sealed_mechanism`, `kubejs:tk3_hydraulic_machine`, `create:mechanical_pump`, `create:fluid_tank`, `create:spout` … |
| Tier Tier 3 | 16 | `create:precision_mechanism`, `kubejs:tk3_precision_machine`, `create:mechanical_arm`, `create:rotation_speed_controller`, `create:mechanical_crafter` … |
| Tier Tier 4 | 5 | `kubejs:tk3_calculation_mechanism`, `ae2:controller`, `ae2:drive`, `ars_nouveau:enchanting_apparatus`, `create_enchantment_industry:blaze_enchanter` |
| Tier Tier 5 | 18 | `kubejs:tk3_inductive_mechanism`, `mekanism:metallurgic_infuser`, `mekanism:enrichment_chamber`, `mekanism:crusher`, `mekanism:energized_smelter` … |
| Tier Tier 6 | 14 | `kubejs:tk3_arcane_mechanism`, `mekanism:chemical_infuser`, `mekanism:chemical_injection_chamber`, `mekanism:chemical_oxidizer`, `mekanism:electrolytic_separator` … |
| Tier Tier 7 | 10 | `kubejs:tk3_chemical_mechanism`, `mekanism:basic_logistical_transporter`, `mekanism:advanced_logistical_transporter`, `mekanism:restrictive_transporter`, `mekanism:diversion_transporter` … |
| Tier Tier 8 | 15 | `kubejs:tk3_containment_mechanism`, `mekanism:elite_logistical_transporter`, `mekanism:ultimate_logistical_transporter`, `mekanism:chemical_crystallizer`, `mekanism:chemical_dissolution_chamber` … |
| Tier Tier 9 | 9 | `kubejs:tk3_singularity_mechanism`, `ae2:quantum_link`, `mekanism:antiprotonic_nucleosynthesizer`, `mekanism:qio_dashboard`, `mekanism:qio_drive_array` … |
| Tier Tier 10 | 7 | `kubejs:tk3_sovereign_mechanism`, `kubejs:tk3_creative_core`, `mekanism:meka_tool`, `mekanism:mekasuit_helmet`, `mekanism:mekasuit_bodyarmor` … |

The player may pick up future-tier items, store them in inventories or containers, and view them in recipe viewers. Restrictions disable crafting/use via restricted device interaction, block placement, item right-click, and block interaction. Tier 7 introduces Mekanism item logistics; elite/ultimate transporters join Tier 8. Basic AE2 parts stay open; Controller and Drive are Tier 4 anchors.

## Runtime counts

The package contains **1,788 unique explicit KubeJS recipe IDs** across the tier, core, compatibility, and recipe-system scripts. Counts are an ID scan of source scripts, not a live registry dump. See [`RUNTIME_V2_MANIFEST.json`](RUNTIME_V2_MANIFEST.json) for per-file counts, IDs, all stage gates and item registrations. The older production review count of 1,972 belongs to a separate reviewed recipe catalogue; it is not the explicit-ID count in this refreshed runtime package.

[Recipes](Recipes-v2.md) · [Current skill tree](Skilltree-v4.6.md)
