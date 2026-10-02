# Recipe catalogue

**776 CHAPTER 1–5 RECIPES** · **81 QUESTS** · Minecraft 1.21.1 / NeoForge

The exact authored recipes are listed below. Twelve AE2 recipes remain reserved for tier 6 and are outside the current player campaign.

| Recipe family | Recipes |
|---|---:|
| Core | 125 |
| Frames | 8 |
| Geology | 24 |
| Compat | 385 |
| Magic | 17 |
| Storage | 99 |
| Late Layers | 4 |
| Create | 114 |

## Core

| Tier | Output | Method | Inputs | Recipe ID |
|---|---|---|---|---|
| 1 | 2x architects_palette:algal_blend | Shapeless crafting | minecraft:kelp + minecraft:clay_ball | `kubejs:tk3/tier_1/algal_blend` |
| 1 | 4x architects_palette:algal_blend | mixing | minecraft:kelp + minecraft:clay_ball | `kubejs:tk3/tier_1/algal_blend_bulk` |
| 1 | 2x create:andesite_alloy | Shapeless crafting | minecraft:andesite + architects_palette:algal_blend | `kubejs:tk3/tier_1/andesite_alloy` |
| 1 | 4x create:andesite_alloy | mixing | minecraft:andesite + architects_palette:algal_blend | `kubejs:tk3/tier_1/andesite_alloy_bulk` |
| 1 | kubejs:tk3_rotation_mechanism | sequence | #minecraft:wooden_slabs + create:andesite_alloy + create:andesite_alloy + betterend:iron_hammer | `kubejs:tk3/tier_1/rotation_mechanism_automated` |
| 1 | 3x create:water_wheel | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/water_wheel` |
| 1 | create:large_water_wheel | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/large_water_wheel` |
| 1 | create:mechanical_press | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/mechanical_press` |
| 1 | create:mechanical_mixer | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/mechanical_mixer` |
| 1 | create:encased_fan | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/encased_fan` |
| 1 | create:mechanical_saw | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/mechanical_saw` |
| 1 | create:mechanical_drill | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/mechanical_drill` |
| 1 | create:mechanical_bearing | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/mechanical_bearing` |
| 1 | create:mechanical_harvester | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/mechanical_harvester` |
| 1 | create:deployer | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/deployer` |
| 1 | 2x create:basin | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/basin` |
| 1 | 4x create:andesite_funnel | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/andesite_funnel` |
| 1 | create:portable_storage_interface | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/portable_storage_interface` |
| 1 | minecraft:gravel | milling | minecraft:cobblestone | `kubejs:tk3/tier_1/cobble_to_gravel` |
| 1 | minecraft:clay_ball | splashing | minecraft:sand | `kubejs:tk3/tier_1/renewable_clay` |
| 2 | kubejs:tk3_sealed_mechanism | sequence | kubejs:tk3_rotation_mechanism + create:copper_sheet + minecraft:slime_ball + farmersdelight:iron_knife | `kubejs:tk3/tier_2/tk3_sealed_mechanism` |
| 2 | 16x create:fluid_pipe | stonecutting | kubejs:tk3_hydraulic_machine | `kubejs:tk3/tier_2/fluid_pipe` |
| 2 | create:mechanical_pump | stonecutting | kubejs:tk3_hydraulic_machine | `kubejs:tk3/tier_2/mechanical_pump` |
| 2 | 3x create:fluid_tank | stonecutting | kubejs:tk3_hydraulic_machine | `kubejs:tk3/tier_2/fluid_tank` |
| 2 | create:spout | stonecutting | kubejs:tk3_hydraulic_machine | `kubejs:tk3/tier_2/spout` |
| 2 | create:item_drain | stonecutting | kubejs:tk3_hydraulic_machine | `kubejs:tk3/tier_2/item_drain` |
| 2 | create:hose_pulley | stonecutting | kubejs:tk3_hydraulic_machine | `kubejs:tk3/tier_2/hose_pulley` |
| 2 | create:portable_fluid_interface | stonecutting | kubejs:tk3_hydraulic_machine | `kubejs:tk3/tier_2/portable_fluid_interface` |
| 2 | create:steam_engine | stonecutting | kubejs:tk3_hydraulic_machine | `kubejs:tk3/tier_2/steam_engine` |
| 2 | createaddition:rolling_mill | Shapeless crafting | kubejs:tk3_hydraulic_machine + create:mechanical_press + minecraft:copper_ingot | `kubejs:tk3/tier_2/rolling_mill` |
| 2 | 2x minecraft:slime_ball | mixing | minecraft:kelp + minecraft:wheat + 250 mB minecraft:water | `kubejs:tk3/tier_2/renewable_sealant` |
| 3 | 2x create:brass_ingot | mixing | minecraft:copper_ingot + create:zinc_ingot | `kubejs:tk3/tier_3/brass_ingot` |
| 3 | create:precision_mechanism | sequence | kubejs:tk3_sealed_mechanism + create:brass_sheet + create:electron_tube + create:sand_paper | `kubejs:tk3/tier_3/precision_mechanism` |
| 3 | 6x create:brass_funnel | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/brass_funnel` |
| 3 | 6x create:brass_tunnel | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/brass_tunnel` |
| 3 | create:mechanical_arm | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/mechanical_arm` |
| 3 | create:rotation_speed_controller | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/rotation_speed_controller` |
| 3 | 3x create:mechanical_crafter | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/mechanical_crafter` |
| 3 | create:sequenced_gearshift | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/sequenced_gearshift` |
| 3 | create:packager | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/packager` |
| 3 | create:stock_link | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/stock_link` |
| 3 | create:stock_ticker | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/stock_ticker` |
| 3 | create:repackager | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/repackager` |
| 3 | create:package_frogport | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/package_frogport` |
| 3 | create_enchantment_industry:grindstone_drain | Shapeless crafting | create:precision_mechanism + minecraft:grindstone + create:brass_casing | `kubejs:tk3/tier_3/grindstone_drain` |
| 3 | create_enchantment_industry:printer | Shapeless crafting | create:precision_mechanism + minecraft:book + create:mechanical_press | `kubejs:tk3/tier_3/printer` |
| 3 | aeronautics:propeller_bearing | Shapeless crafting | create:precision_mechanism + create:mechanical_bearing + create:propeller | `kubejs:tk3/tier_3/propeller_bearing` |
| 4 | ars_nouveau:enchanting_apparatus | Shapeless crafting | kubejs:tk3_precision_machine + minecraft:diamond + ars_nouveau:source_gem | `kubejs:tk3/tier_4/enchanting_apparatus` |
| 4 | irons_spellbooks:arcane_essence | haunting | ars_nouveau:source_gem | `kubejs:tk3/tier_4/arcane_essence` |
| 4 | kubejs:tk3_arcane_mechanism | sequence | create:precision_mechanism + ars_nouveau:source_gem + irons_spellbooks:arcane_essence + ars_nouveau:manipulation_essence + minecraft:gold_ingot + ars_nouveau:enchanters_sword | `kubejs:tk3/tier_4/tk3_arcane_mechanism` |
| 4 | ars_nouveau:agronomic_sourcelink | apparatus | kubejs:tk3_arcane_machine + minecraft:wheat + ars_nouveau:source_gem | `kubejs:tk3/tier_4/agronomic_sourcelink` |
| 4 | ars_nouveau:relay | apparatus | kubejs:tk3_arcane_machine + minecraft:redstone + ars_nouveau:source_gem | `kubejs:tk3/tier_4/relay` |
| 4 | ars_nouveau:starbuncle_charm | apparatus | kubejs:tk3_arcane_machine + minecraft:gold_ingot + ars_nouveau:source_gem | `kubejs:tk3/tier_4/starbuncle_charm` |
| 4 | ars_nouveau:whirlisprig_charm | apparatus | kubejs:tk3_arcane_machine + minecraft:oak_sapling + ars_nouveau:source_gem | `kubejs:tk3/tier_4/whirlisprig_charm` |
| 4 | ars_nouveau:wixie_charm | apparatus | kubejs:tk3_arcane_machine + minecraft:cauldron + ars_nouveau:source_gem | `kubejs:tk3/tier_4/wixie_charm` |
| 4 | irons_spellbooks:alchemist_cauldron | apparatus | kubejs:tk3_arcane_machine + minecraft:cauldron + ars_nouveau:source_gem | `kubejs:tk3/tier_4/alchemist_cauldron` |
| 4 | irons_spellbooks:arcane_anvil | apparatus | kubejs:tk3_arcane_machine + minecraft:anvil + ars_nouveau:source_gem | `kubejs:tk3/tier_4/arcane_anvil` |
| 4 | create_enchantment_industry:blaze_enchanter | apparatus | kubejs:tk3_arcane_machine + minecraft:enchanting_table + ars_nouveau:source_gem | `kubejs:tk3/tier_4/blaze_enchanter` |
| 4 | 2x irons_spellbooks:common_ink | mixing | minecraft:ink_sac + irons_spellbooks:arcane_essence + 250 mB minecraft:water | `kubejs:tk3/tier_4/common_ink` |
| 5 | 2x mekanism:ingot_steel | mixing | 2x minecraft:iron_ingot + minecraft:coal | `kubejs:tk3/tier_5/steel_bootstrap` |
| 5 | mekanism:steel_casing | Shaped crafting | S = mekanism:ingot_steel, O = mekanism:ingot_osmium, P = kubejs:tk3_precision_machine, A = kubejs:tk3_arcane_machine · SPS / OAO / SSS | `kubejs:tk3/tier_5/steel_casing` |
| 5 | mekanism:metallurgic_infuser | deploying | mekanism:steel_casing + ars_nouveau:wilden_tribute | `kubejs:tk3/tier_5/metallurgic_infuser` |
| 5 | mekanism:enrichment_chamber | Shapeless crafting | mekanism:steel_casing + mekanism:alloy_infused + create:precision_mechanism | `kubejs:tk3/tier_5/enrichment_chamber` |
| 5 | mekanism:crusher | Shapeless crafting | mekanism:steel_casing + minecraft:diamond + create:precision_mechanism | `kubejs:tk3/tier_5/crusher` |
| 5 | mekanism:energized_smelter | Shapeless crafting | mekanism:steel_casing + minecraft:furnace + create:precision_mechanism | `kubejs:tk3/tier_5/energized_smelter` |
| 5 | mekanismgenerators:heat_generator | Shapeless crafting | mekanism:steel_casing + minecraft:furnace + create:precision_mechanism | `kubejs:tk3/tier_5/heat_generator` |
| 5 | createaddition:alternator | Shapeless crafting | mekanism:steel_casing + createaddition:copper_spool + create:precision_mechanism | `kubejs:tk3/tier_5/alternator` |
| 5 | createaddition:electric_motor | Shapeless crafting | mekanism:steel_casing + createaddition:capacitor + create:precision_mechanism | `kubejs:tk3/tier_5/electric_motor` |
| 5 | 2x mekanism:dust_iron | enriching | minecraft:raw_iron | `kubejs:tk3/tier_5/iron_refining` |
| 5 | 2x mekanism:dust_copper | enriching | minecraft:raw_copper | `kubejs:tk3/tier_5/copper_refining` |
| 5 | 4x mekanism:basic_universal_cable | Shapeless crafting | mekanism:ingot_steel + createaddition:copper_spool + minecraft:redstone | `kubejs:tk3/tier_5/basic_universal_cable` |
| 5 | 4x mekanism:basic_mechanical_pipe | Shapeless crafting | mekanism:ingot_steel + create:fluid_pipe + minecraft:glass | `kubejs:tk3/tier_5/basic_mechanical_pipe` |
| 5 | 4x mekanism:basic_logistical_transporter | Shapeless crafting | mekanism:ingot_steel + create:brass_funnel + minecraft:redstone | `kubejs:tk3/tier_5/basic_logistical_transporter` |
| 1 | 8x create:shaft | Shapeless crafting | create:andesite_alloy + minecraft:stick | `kubejs:tk3/tier_1/shaft` |
| 1 | 2x create:cogwheel | Shapeless crafting | create:shaft + #minecraft:planks | `kubejs:tk3/tier_1/cogwheel` |
| 1 | create:large_cogwheel | Shapeless crafting | 2x create:cogwheel + #minecraft:planks | `kubejs:tk3/tier_1/large_cogwheel` |
| 1 | 3x create:belt_connector | Shapeless crafting | 6x minecraft:dried_kelp | `kubejs:tk3/tier_1/belt_connector` |
| 1 | create:propeller | Shaped crafting | S = create:iron_sheet, A = create:andesite_alloy ·  S  / SAS /  S  | `kubejs:tk3/tier_1/propeller` |
| 1 | create:gearbox | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/gearbox` |
| 1 | create:vertical_gearbox | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/vertical_gearbox` |
| 1 | create:clutch | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/clutch` |
| 1 | create:gearshift | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/gearshift` |
| 1 | 3x create:encased_chain_drive | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/encased_chain_drive` |
| 1 | create:adjustable_chain_gearshift | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/adjustable_chain_gearshift` |
| 1 | create:mechanical_plough | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/mechanical_plough` |
| 1 | create:rope_pulley | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/rope_pulley` |
| 1 | create:mechanical_piston | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/mechanical_piston` |
| 1 | create:cart_assembler | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/cart_assembler` |
| 1 | create:windmill_bearing | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/windmill_bearing` |
| 1 | create:gantry_carriage | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/gantry_carriage` |
| 1 | create:weighted_ejector | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/weighted_ejector` |
| 1 | 4x create:linear_chassis | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/linear_chassis` |
| 1 | 4x create:radial_chassis | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/radial_chassis` |
| 1 | 4x create:andesite_tunnel | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/andesite_tunnel` |
| 1 | 2x create:depot | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/depot` |
| 1 | 6x create:chute | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/chute` |
| 1 | create:speedometer | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/speedometer` |
| 1 | create:analog_lever | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/tier_1/analog_lever` |
| 2 | create:fluid_valve | stonecutting | kubejs:tk3_hydraulic_machine | `kubejs:tk3/tier_2/fluid_valve` |
| 2 | 6x create:copper_valve_handle | stonecutting | kubejs:tk3_hydraulic_machine | `kubejs:tk3/tier_2/copper_valve_handle` |
| 2 | create:steam_whistle | stonecutting | kubejs:tk3_hydraulic_machine | `kubejs:tk3/tier_2/steam_whistle` |
| 2 | create:copper_backtank | Shapeless crafting | kubejs:tk3_sealed_mechanism + create:copper_casing + minecraft:copper_block | `kubejs:tk3/tier_2/copper_backtank` |
| 2 | createaddition:capacitor | Shaped crafting | C = create:copper_sheet, R = minecraft:redstone, I = create:iron_sheet ·  C  / IRI /  C  | `kubejs:tk3/tier_2/capacitor` |
| 3 | 2x create:content_observer | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/content_observer` |
| 3 | 2x create:stockpile_switch | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/stockpile_switch` |
| 3 | 3x create:smart_chute | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/smart_chute` |
| 3 | 3x create:smart_fluid_pipe | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/smart_fluid_pipe` |
| 3 | 2x create:display_link | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/display_link` |
| 3 | 6x create:display_board | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/display_board` |
| 3 | 4x create:redstone_link | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/redstone_link` |
| 3 | create:elevator_pulley | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/elevator_pulley` |
| 3 | create:contraption_controls | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/contraption_controls` |
| 3 | create:track_station | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/track_station` |
| 3 | 2x create:track_signal | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/track_signal` |
| 3 | 2x create:track_observer | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/track_observer` |
| 3 | create:controls | stonecutting | kubejs:tk3_precision_machine | `kubejs:tk3/tier_3/controls` |
| 4 | ars_nouveau:relay_splitter | apparatus | kubejs:tk3_arcane_machine + ars_nouveau:relay + ars_nouveau:source_gem | `kubejs:tk3/tier_4/relay_splitter` |
| 4 | ars_nouveau:relay_deposit | apparatus | kubejs:tk3_arcane_machine + minecraft:chest + ars_nouveau:source_gem | `kubejs:tk3/tier_4/relay_deposit` |
| 4 | ars_nouveau:relay_collector | apparatus | kubejs:tk3_arcane_machine + minecraft:hopper + ars_nouveau:source_gem | `kubejs:tk3/tier_4/relay_collector` |
| 4 | ars_nouveau:alchemical_sourcelink | apparatus | kubejs:tk3_arcane_machine + minecraft:brewing_stand + ars_nouveau:source_gem | `kubejs:tk3/tier_4/alchemical_sourcelink` |
| 4 | ars_nouveau:mycelial_sourcelink | apparatus | kubejs:tk3_arcane_machine + minecraft:brown_mushroom + ars_nouveau:source_gem | `kubejs:tk3/tier_4/mycelial_sourcelink` |
| 4 | create_enchantment_industry:mechanical_grindstone | apparatus | kubejs:tk3_arcane_machine + minecraft:grindstone + ars_nouveau:source_gem | `kubejs:tk3/tier_4/mechanical_grindstone` |
| 4 | create_enchantment_industry:experience_hatch | apparatus | kubejs:tk3_arcane_machine + create:fluid_tank + ars_nouveau:source_gem | `kubejs:tk3/tier_4/experience_hatch` |
| 5 | mekanism:basic_energy_cube | Shapeless crafting | mekanism:steel_casing + mekanism:alloy_infused + minecraft:redstone | `kubejs:tk3/tier_5/basic_energy_cube` |
| 5 | mekanism:ingot_steel | mek smelting | mekanism:dust_steel | `kubejs:tk3/tier_5/steel_from_dust` |

## Frames

| Tier | Output | Method | Inputs | Recipe ID |
|---|---|---|---|---|
| 1 | kubejs:tk3_kinetic_machine | Shaped crafting | A = create:andesite_alloy, C = create:andesite_casing, S = #minecraft:wooden_slabs · AAA / ACA / ASA | `kubejs:tk3/frames/kinetic_manual` |
| 1 | kubejs:tk3_kinetic_machine | deploying | create:andesite_casing + kubejs:tk3_rotation_mechanism | `kubejs:tk3/frames/kinetic_automated` |
| 2 | kubejs:tk3_hydraulic_machine | deploying | create:copper_casing + kubejs:tk3_sealed_mechanism | `kubejs:tk3/frames/hydraulic_assembly` |
| 3 | kubejs:tk3_precision_machine | deploying | create:brass_casing + create:precision_mechanism | `kubejs:tk3/frames/precision_assembly` |
| 4 | kubejs:tk3_arcane_machine | deploying | create_wizardry:arcane_casing + kubejs:tk3_arcane_mechanism | `kubejs:tk3/frames/arcane_calibration` |
| 1 | create:millstone | stonecutting | kubejs:tk3_kinetic_machine | `kubejs:tk3/frames/create_millstone` |
| 3 | 2x create:crushing_wheel | mechanical crafting | F = kubejs:tk3_precision_machine, A = create:andesite_alloy, P = #minecraft:planks ·  AAA  / AAPAA / APFPA / AAPAA /  AAA  | `kubejs:tk3/frames/create_crushing_wheel` |
| 4 | create_wizardry:arcane_casing | apparatus | create:brass_casing + ars_nouveau:source_gem + irons_spellbooks:arcane_essence + minecraft:gold_ingot | `kubejs:tk3/frames/arcane_casing` |

## Geology

| Tier | Output | Method | Inputs | Recipe ID |
|---|---|---|---|---|
| 1 | minecraft:clay_ball | milling | minecraft:andesite | `kubejs:tk3/geology/milling_andesite` |
| 1 | 2x minecraft:clay_ball | crushing | minecraft:andesite | `kubejs:tk3/geology/crushing_andesite` |
| 1 | minecraft:quartz | milling | minecraft:diorite | `kubejs:tk3/geology/milling_diorite` |
| 1 | 2x minecraft:quartz | crushing | minecraft:diorite | `kubejs:tk3/geology/crushing_diorite` |
| 1 | minecraft:lapis_lazuli | milling | minecraft:granite | `kubejs:tk3/geology/milling_granite` |
| 1 | 2x minecraft:lapis_lazuli | crushing | minecraft:granite | `kubejs:tk3/geology/crushing_granite` |
| 1 | minecraft:bone_meal | milling | create:limestone | `kubejs:tk3/geology/milling_limestone` |
| 1 | 2x minecraft:bone_meal | crushing | create:limestone | `kubejs:tk3/geology/crushing_limestone` |
| 2 | minecraft:redstone | milling | create:scoria | `kubejs:tk3/geology/milling_scoria` |
| 2 | 2x minecraft:redstone | crushing | create:scoria | `kubejs:tk3/geology/crushing_scoria` |
| 2 | minecraft:coal | milling | create:scorchia | `kubejs:tk3/geology/milling_scorchia` |
| 2 | 2x minecraft:coal | crushing | create:scorchia | `kubejs:tk3/geology/crushing_scorchia` |
| 2 | 3x create:copper_nugget | milling | create:veridium | `kubejs:tk3/geology/milling_veridium` |
| 2 | create:crushed_raw_copper | crushing | create:veridium | `kubejs:tk3/geology/crushing_veridium` |
| 3 | 9x create:copper_nugget | splashing | create:crushed_raw_copper | `kubejs:tk3/geology/wash_copper` |
| 2 | 3x minecraft:iron_nugget | milling | create:crimsite | `kubejs:tk3/geology/milling_crimsite` |
| 2 | create:crushed_raw_iron | crushing | create:crimsite | `kubejs:tk3/geology/crushing_crimsite` |
| 3 | 9x minecraft:iron_nugget | splashing | create:crushed_raw_iron | `kubejs:tk3/geology/wash_iron` |
| 3 | 3x create:zinc_nugget | milling | create:asurine | `kubejs:tk3/geology/milling_asurine` |
| 3 | create:crushed_raw_zinc | crushing | create:asurine | `kubejs:tk3/geology/crushing_asurine` |
| 3 | 9x create:zinc_nugget | splashing | create:crushed_raw_zinc | `kubejs:tk3/geology/wash_zinc` |
| 3 | 3x minecraft:gold_nugget | milling | create:ochrum | `kubejs:tk3/geology/milling_ochrum` |
| 3 | create:crushed_raw_gold | crushing | create:ochrum | `kubejs:tk3/geology/crushing_ochrum` |
| 3 | 9x minecraft:gold_nugget | splashing | create:crushed_raw_gold | `kubejs:tk3/geology/wash_gold` |

## Compat

| Tier | Output | Method | Inputs | Recipe ID |
|---|---|---|---|---|
| 1 | alexscaves:stripped_pewen_log | cutting | alexscaves:pewen_log | `kubejs:tk3/compat/strip_alexscaves_pewen_log` |
| 1 | 6x alexscaves:pewen_planks | cutting | alexscaves:stripped_pewen_log | `kubejs:tk3/compat/saw_alexscaves_pewen_log` |
| 1 | alexscaves:stripped_pewen_wood | cutting | alexscaves:pewen_wood | `kubejs:tk3/compat/strip_alexscaves_pewen_wood` |
| 1 | 6x alexscaves:pewen_planks | cutting | alexscaves:stripped_pewen_wood | `kubejs:tk3/compat/saw_alexscaves_pewen_wood` |
| 1 | alexscaves:stripped_thornwood_log | cutting | alexscaves:thornwood_log | `kubejs:tk3/compat/strip_alexscaves_thornwood_log` |
| 1 | 6x alexscaves:thornwood_planks | cutting | alexscaves:stripped_thornwood_log | `kubejs:tk3/compat/saw_alexscaves_thornwood_log` |
| 1 | alexscaves:stripped_thornwood_wood | cutting | alexscaves:thornwood_wood | `kubejs:tk3/compat/strip_alexscaves_thornwood_wood` |
| 1 | 6x alexscaves:thornwood_planks | cutting | alexscaves:stripped_thornwood_wood | `kubejs:tk3/compat/saw_alexscaves_thornwood_wood` |
| 1 | atmospheric:stripped_aspen_log | cutting | atmospheric:aspen_log | `kubejs:tk3/compat/strip_atmospheric_aspen_log` |
| 1 | 6x atmospheric:aspen_planks | cutting | atmospheric:stripped_aspen_log | `kubejs:tk3/compat/saw_atmospheric_aspen_log` |
| 1 | atmospheric:stripped_aspen_wood | cutting | atmospheric:aspen_wood | `kubejs:tk3/compat/strip_atmospheric_aspen_wood` |
| 1 | 6x atmospheric:aspen_planks | cutting | atmospheric:stripped_aspen_wood | `kubejs:tk3/compat/saw_atmospheric_aspen_wood` |
| 1 | atmospheric:stripped_grimwood_log | cutting | atmospheric:grimwood_log | `kubejs:tk3/compat/strip_atmospheric_grimwood_log` |
| 1 | 6x atmospheric:grimwood_planks | cutting | atmospheric:stripped_grimwood_log | `kubejs:tk3/compat/saw_atmospheric_grimwood_log` |
| 1 | atmospheric:stripped_kousa_log | cutting | atmospheric:kousa_log | `kubejs:tk3/compat/strip_atmospheric_kousa_log` |
| 1 | 6x atmospheric:kousa_planks | cutting | atmospheric:stripped_kousa_log | `kubejs:tk3/compat/saw_atmospheric_kousa_log` |
| 1 | atmospheric:stripped_kousa_wood | cutting | atmospheric:kousa_wood | `kubejs:tk3/compat/strip_atmospheric_kousa_wood` |
| 1 | 6x atmospheric:kousa_planks | cutting | atmospheric:stripped_kousa_wood | `kubejs:tk3/compat/saw_atmospheric_kousa_wood` |
| 1 | atmospheric:stripped_laurel_log | cutting | atmospheric:laurel_log | `kubejs:tk3/compat/strip_atmospheric_laurel_log` |
| 1 | 6x atmospheric:laurel_planks | cutting | atmospheric:stripped_laurel_log | `kubejs:tk3/compat/saw_atmospheric_laurel_log` |
| 1 | atmospheric:stripped_laurel_wood | cutting | atmospheric:laurel_wood | `kubejs:tk3/compat/strip_atmospheric_laurel_wood` |
| 1 | 6x atmospheric:laurel_planks | cutting | atmospheric:stripped_laurel_wood | `kubejs:tk3/compat/saw_atmospheric_laurel_wood` |
| 1 | atmospheric:stripped_morado_log | cutting | atmospheric:morado_log | `kubejs:tk3/compat/strip_atmospheric_morado_log` |
| 1 | 6x atmospheric:morado_planks | cutting | atmospheric:stripped_morado_log | `kubejs:tk3/compat/saw_atmospheric_morado_log` |
| 1 | atmospheric:stripped_morado_wood | cutting | atmospheric:morado_wood | `kubejs:tk3/compat/strip_atmospheric_morado_wood` |
| 1 | 6x atmospheric:morado_planks | cutting | atmospheric:stripped_morado_wood | `kubejs:tk3/compat/saw_atmospheric_morado_wood` |
| 1 | atmospheric:stripped_rosewood_log | cutting | atmospheric:rosewood_log | `kubejs:tk3/compat/strip_atmospheric_rosewood_log` |
| 1 | 6x atmospheric:rosewood_planks | cutting | atmospheric:stripped_rosewood_log | `kubejs:tk3/compat/saw_atmospheric_rosewood_log` |
| 1 | atmospheric:stripped_yucca_log | cutting | atmospheric:yucca_log | `kubejs:tk3/compat/strip_atmospheric_yucca_log` |
| 1 | 6x atmospheric:yucca_planks | cutting | atmospheric:stripped_yucca_log | `kubejs:tk3/compat/saw_atmospheric_yucca_log` |
| 1 | atmospheric:stripped_yucca_wood | cutting | atmospheric:yucca_wood | `kubejs:tk3/compat/strip_atmospheric_yucca_wood` |
| 1 | 6x atmospheric:yucca_planks | cutting | atmospheric:stripped_yucca_wood | `kubejs:tk3/compat/saw_atmospheric_yucca_wood` |
| 1 | autumnity:stripped_maple_log | cutting | autumnity:maple_log | `kubejs:tk3/compat/strip_autumnity_maple_log` |
| 1 | 6x autumnity:maple_planks | cutting | autumnity:stripped_maple_log | `kubejs:tk3/compat/saw_autumnity_maple_log` |
| 1 | autumnity:stripped_maple_wood | cutting | autumnity:maple_wood | `kubejs:tk3/compat/strip_autumnity_maple_wood` |
| 1 | 6x autumnity:maple_planks | cutting | autumnity:stripped_maple_wood | `kubejs:tk3/compat/saw_autumnity_maple_wood` |
| 1 | 6x betterend:dragon_tree_planks | cutting | betterend:dragon_tree_log | `kubejs:tk3/compat/saw_betterend_dragon_tree_log` |
| 1 | 6x betterend:end_lotus_planks | cutting | betterend:end_lotus_log | `kubejs:tk3/compat/saw_betterend_end_lotus_log` |
| 1 | 6x betterend:end_lotus_planks | cutting | betterend:end_lotus_stem | `kubejs:tk3/compat/saw_betterend_end_lotus_stem` |
| 1 | 6x betterend:helix_tree_planks | cutting | betterend:helix_tree_log | `kubejs:tk3/compat/saw_betterend_helix_tree_log` |
| 1 | 6x betterend:jellyshroom_planks | cutting | betterend:jellyshroom_log | `kubejs:tk3/compat/saw_betterend_jellyshroom_log` |
| 1 | 6x betterend:lacugrove_planks | cutting | betterend:lacugrove_log | `kubejs:tk3/compat/saw_betterend_lacugrove_log` |
| 1 | 6x betterend:lucernia_planks | cutting | betterend:lucernia_log | `kubejs:tk3/compat/saw_betterend_lucernia_log` |
| 1 | 6x betterend:mossy_glowshroom_planks | cutting | betterend:mossy_glowshroom_log | `kubejs:tk3/compat/saw_betterend_mossy_glowshroom_log` |
| 1 | 6x betterend:pythadendron_planks | cutting | betterend:pythadendron_log | `kubejs:tk3/compat/saw_betterend_pythadendron_log` |
| 1 | 6x betterend:tenanea_planks | cutting | betterend:tenanea_log | `kubejs:tk3/compat/saw_betterend_tenanea_log` |
| 1 | 6x betterend:umbrella_tree_planks | cutting | betterend:umbrella_tree_log | `kubejs:tk3/compat/saw_betterend_umbrella_tree_log` |
| 1 | 6x betternether:anchor_tree_planks | cutting | betternether:anchor_tree_log | `kubejs:tk3/compat/saw_betternether_anchor_tree_log` |
| 1 | 6x betternether:gloomwood_dark_planks | cutting | betternether:gloomwood_dark_log | `kubejs:tk3/compat/saw_betternether_gloomwood_dark_log` |
| 1 | 6x betternether:gloomwood_planks | cutting | betternether:gloomwood_log | `kubejs:tk3/compat/saw_betternether_gloomwood_log` |
| 1 | 6x betternether:gloomwood_transition_planks | cutting | betternether:gloomwood_transition_log | `kubejs:tk3/compat/saw_betternether_gloomwood_transition_log` |
| 1 | 6x betternether:mushroom_fir_planks | cutting | betternether:mushroom_fir_log | `kubejs:tk3/compat/saw_betternether_mushroom_fir_log` |
| 1 | 6x betternether:mushroom_fir_planks | cutting | betternether:mushroom_fir_stem | `kubejs:tk3/compat/saw_betternether_mushroom_fir_stem` |
| 1 | 6x betternether:nether_mushroom_planks | cutting | betternether:nether_mushroom_stem | `kubejs:tk3/compat/saw_betternether_nether_mushroom_stem` |
| 1 | 6x betternether:nether_reed_planks | cutting | betternether:nether_reed_stem | `kubejs:tk3/compat/saw_betternether_nether_reed_stem` |
| 1 | 6x betternether:nether_sakura_planks | cutting | betternether:nether_sakura_log | `kubejs:tk3/compat/saw_betternether_nether_sakura_log` |
| 1 | 6x betternether:rubeus_planks | cutting | betternether:rubeus_log | `kubejs:tk3/compat/saw_betternether_rubeus_log` |
| 1 | 6x betternether:stalagnate_planks | cutting | betternether:stalagnate_log | `kubejs:tk3/compat/saw_betternether_stalagnate_log` |
| 1 | 6x betternether:stalagnate_planks | cutting | betternether:stalagnate_stem | `kubejs:tk3/compat/saw_betternether_stalagnate_stem` |
| 1 | 6x betternether:wart_planks | cutting | betternether:wart_log | `kubejs:tk3/compat/saw_betternether_wart_log` |
| 1 | 6x betternether:willow_planks | cutting | betternether:willow_log | `kubejs:tk3/compat/saw_betternether_willow_log` |
| 1 | biomesoplenty:stripped_dead_log | cutting | biomesoplenty:dead_log | `kubejs:tk3/compat/strip_biomesoplenty_dead_log` |
| 1 | 6x biomesoplenty:dead_planks | cutting | biomesoplenty:stripped_dead_log | `kubejs:tk3/compat/saw_biomesoplenty_dead_log` |
| 1 | biomesoplenty:stripped_dead_wood | cutting | biomesoplenty:dead_wood | `kubejs:tk3/compat/strip_biomesoplenty_dead_wood` |
| 1 | 6x biomesoplenty:dead_planks | cutting | biomesoplenty:stripped_dead_wood | `kubejs:tk3/compat/saw_biomesoplenty_dead_wood` |
| 1 | biomesoplenty:stripped_empyreal_log | cutting | biomesoplenty:empyreal_log | `kubejs:tk3/compat/strip_biomesoplenty_empyreal_log` |
| 1 | 6x biomesoplenty:empyreal_planks | cutting | biomesoplenty:stripped_empyreal_log | `kubejs:tk3/compat/saw_biomesoplenty_empyreal_log` |
| 1 | biomesoplenty:stripped_empyreal_wood | cutting | biomesoplenty:empyreal_wood | `kubejs:tk3/compat/strip_biomesoplenty_empyreal_wood` |
| 1 | 6x biomesoplenty:empyreal_planks | cutting | biomesoplenty:stripped_empyreal_wood | `kubejs:tk3/compat/saw_biomesoplenty_empyreal_wood` |
| 1 | biomesoplenty:stripped_fir_log | cutting | biomesoplenty:fir_log | `kubejs:tk3/compat/strip_biomesoplenty_fir_log` |
| 1 | 6x biomesoplenty:fir_planks | cutting | biomesoplenty:stripped_fir_log | `kubejs:tk3/compat/saw_biomesoplenty_fir_log` |
| 1 | biomesoplenty:stripped_fir_wood | cutting | biomesoplenty:fir_wood | `kubejs:tk3/compat/strip_biomesoplenty_fir_wood` |
| 1 | 6x biomesoplenty:fir_planks | cutting | biomesoplenty:stripped_fir_wood | `kubejs:tk3/compat/saw_biomesoplenty_fir_wood` |
| 1 | biomesoplenty:stripped_hellbark_log | cutting | biomesoplenty:hellbark_log | `kubejs:tk3/compat/strip_biomesoplenty_hellbark_log` |
| 1 | 6x biomesoplenty:hellbark_planks | cutting | biomesoplenty:stripped_hellbark_log | `kubejs:tk3/compat/saw_biomesoplenty_hellbark_log` |
| 1 | biomesoplenty:stripped_hellbark_wood | cutting | biomesoplenty:hellbark_wood | `kubejs:tk3/compat/strip_biomesoplenty_hellbark_wood` |
| 1 | 6x biomesoplenty:hellbark_planks | cutting | biomesoplenty:stripped_hellbark_wood | `kubejs:tk3/compat/saw_biomesoplenty_hellbark_wood` |
| 1 | biomesoplenty:stripped_jacaranda_log | cutting | biomesoplenty:jacaranda_log | `kubejs:tk3/compat/strip_biomesoplenty_jacaranda_log` |
| 1 | 6x biomesoplenty:jacaranda_planks | cutting | biomesoplenty:stripped_jacaranda_log | `kubejs:tk3/compat/saw_biomesoplenty_jacaranda_log` |
| 1 | biomesoplenty:stripped_jacaranda_wood | cutting | biomesoplenty:jacaranda_wood | `kubejs:tk3/compat/strip_biomesoplenty_jacaranda_wood` |
| 1 | 6x biomesoplenty:jacaranda_planks | cutting | biomesoplenty:stripped_jacaranda_wood | `kubejs:tk3/compat/saw_biomesoplenty_jacaranda_wood` |
| 1 | biomesoplenty:stripped_magic_log | cutting | biomesoplenty:magic_log | `kubejs:tk3/compat/strip_biomesoplenty_magic_log` |
| 1 | 6x biomesoplenty:magic_planks | cutting | biomesoplenty:stripped_magic_log | `kubejs:tk3/compat/saw_biomesoplenty_magic_log` |
| 1 | biomesoplenty:stripped_magic_wood | cutting | biomesoplenty:magic_wood | `kubejs:tk3/compat/strip_biomesoplenty_magic_wood` |
| 1 | 6x biomesoplenty:magic_planks | cutting | biomesoplenty:stripped_magic_wood | `kubejs:tk3/compat/saw_biomesoplenty_magic_wood` |
| 1 | biomesoplenty:stripped_mahogany_log | cutting | biomesoplenty:mahogany_log | `kubejs:tk3/compat/strip_biomesoplenty_mahogany_log` |
| 1 | 6x biomesoplenty:mahogany_planks | cutting | biomesoplenty:stripped_mahogany_log | `kubejs:tk3/compat/saw_biomesoplenty_mahogany_log` |
| 1 | biomesoplenty:stripped_mahogany_wood | cutting | biomesoplenty:mahogany_wood | `kubejs:tk3/compat/strip_biomesoplenty_mahogany_wood` |
| 1 | 6x biomesoplenty:mahogany_planks | cutting | biomesoplenty:stripped_mahogany_wood | `kubejs:tk3/compat/saw_biomesoplenty_mahogany_wood` |
| 1 | biomesoplenty:stripped_maple_log | cutting | biomesoplenty:maple_log | `kubejs:tk3/compat/strip_biomesoplenty_maple_log` |
| 1 | 6x biomesoplenty:maple_planks | cutting | biomesoplenty:stripped_maple_log | `kubejs:tk3/compat/saw_biomesoplenty_maple_log` |
| 1 | biomesoplenty:stripped_maple_wood | cutting | biomesoplenty:maple_wood | `kubejs:tk3/compat/strip_biomesoplenty_maple_wood` |
| 1 | 6x biomesoplenty:maple_planks | cutting | biomesoplenty:stripped_maple_wood | `kubejs:tk3/compat/saw_biomesoplenty_maple_wood` |
| 1 | biomesoplenty:stripped_palm_log | cutting | biomesoplenty:palm_log | `kubejs:tk3/compat/strip_biomesoplenty_palm_log` |
| 1 | 6x biomesoplenty:palm_planks | cutting | biomesoplenty:stripped_palm_log | `kubejs:tk3/compat/saw_biomesoplenty_palm_log` |
| 1 | biomesoplenty:stripped_palm_wood | cutting | biomesoplenty:palm_wood | `kubejs:tk3/compat/strip_biomesoplenty_palm_wood` |
| 1 | 6x biomesoplenty:palm_planks | cutting | biomesoplenty:stripped_palm_wood | `kubejs:tk3/compat/saw_biomesoplenty_palm_wood` |
| 1 | biomesoplenty:stripped_pine_log | cutting | biomesoplenty:pine_log | `kubejs:tk3/compat/strip_biomesoplenty_pine_log` |
| 1 | 6x biomesoplenty:pine_planks | cutting | biomesoplenty:stripped_pine_log | `kubejs:tk3/compat/saw_biomesoplenty_pine_log` |
| 1 | biomesoplenty:stripped_pine_wood | cutting | biomesoplenty:pine_wood | `kubejs:tk3/compat/strip_biomesoplenty_pine_wood` |
| 1 | 6x biomesoplenty:pine_planks | cutting | biomesoplenty:stripped_pine_wood | `kubejs:tk3/compat/saw_biomesoplenty_pine_wood` |
| 1 | biomesoplenty:stripped_redwood_log | cutting | biomesoplenty:redwood_log | `kubejs:tk3/compat/strip_biomesoplenty_redwood_log` |
| 1 | 6x biomesoplenty:redwood_planks | cutting | biomesoplenty:stripped_redwood_log | `kubejs:tk3/compat/saw_biomesoplenty_redwood_log` |
| 1 | biomesoplenty:stripped_redwood_wood | cutting | biomesoplenty:redwood_wood | `kubejs:tk3/compat/strip_biomesoplenty_redwood_wood` |
| 1 | 6x biomesoplenty:redwood_planks | cutting | biomesoplenty:stripped_redwood_wood | `kubejs:tk3/compat/saw_biomesoplenty_redwood_wood` |
| 1 | biomesoplenty:stripped_umbran_log | cutting | biomesoplenty:umbran_log | `kubejs:tk3/compat/strip_biomesoplenty_umbran_log` |
| 1 | 6x biomesoplenty:umbran_planks | cutting | biomesoplenty:stripped_umbran_log | `kubejs:tk3/compat/saw_biomesoplenty_umbran_log` |
| 1 | biomesoplenty:stripped_umbran_wood | cutting | biomesoplenty:umbran_wood | `kubejs:tk3/compat/strip_biomesoplenty_umbran_wood` |
| 1 | 6x biomesoplenty:umbran_planks | cutting | biomesoplenty:stripped_umbran_wood | `kubejs:tk3/compat/saw_biomesoplenty_umbran_wood` |
| 1 | biomesoplenty:stripped_willow_log | cutting | biomesoplenty:willow_log | `kubejs:tk3/compat/strip_biomesoplenty_willow_log` |
| 1 | 6x biomesoplenty:willow_planks | cutting | biomesoplenty:stripped_willow_log | `kubejs:tk3/compat/saw_biomesoplenty_willow_log` |
| 1 | biomesoplenty:stripped_willow_wood | cutting | biomesoplenty:willow_wood | `kubejs:tk3/compat/strip_biomesoplenty_willow_wood` |
| 1 | 6x biomesoplenty:willow_planks | cutting | biomesoplenty:stripped_willow_wood | `kubejs:tk3/compat/saw_biomesoplenty_willow_wood` |
| 1 | biomeswevegone:stripped_aspen_log | cutting | biomeswevegone:aspen_log | `kubejs:tk3/compat/strip_biomeswevegone_aspen_log` |
| 1 | 6x biomeswevegone:aspen_planks | cutting | biomeswevegone:stripped_aspen_log | `kubejs:tk3/compat/saw_biomeswevegone_aspen_log` |
| 1 | biomeswevegone:stripped_aspen_wood | cutting | biomeswevegone:aspen_wood | `kubejs:tk3/compat/strip_biomeswevegone_aspen_wood` |
| 1 | 6x biomeswevegone:aspen_planks | cutting | biomeswevegone:stripped_aspen_wood | `kubejs:tk3/compat/saw_biomeswevegone_aspen_wood` |
| 1 | biomeswevegone:stripped_baobab_log | cutting | biomeswevegone:baobab_log | `kubejs:tk3/compat/strip_biomeswevegone_baobab_log` |
| 1 | 6x biomeswevegone:baobab_planks | cutting | biomeswevegone:stripped_baobab_log | `kubejs:tk3/compat/saw_biomeswevegone_baobab_log` |
| 1 | biomeswevegone:stripped_baobab_wood | cutting | biomeswevegone:baobab_wood | `kubejs:tk3/compat/strip_biomeswevegone_baobab_wood` |
| 1 | 6x biomeswevegone:baobab_planks | cutting | biomeswevegone:stripped_baobab_wood | `kubejs:tk3/compat/saw_biomeswevegone_baobab_wood` |
| 1 | biomeswevegone:stripped_blue_enchanted_log | cutting | biomeswevegone:blue_enchanted_log | `kubejs:tk3/compat/strip_biomeswevegone_blue_enchanted_log` |
| 1 | 6x biomeswevegone:blue_enchanted_planks | cutting | biomeswevegone:stripped_blue_enchanted_log | `kubejs:tk3/compat/saw_biomeswevegone_blue_enchanted_log` |
| 1 | biomeswevegone:stripped_blue_enchanted_wood | cutting | biomeswevegone:blue_enchanted_wood | `kubejs:tk3/compat/strip_biomeswevegone_blue_enchanted_wood` |
| 1 | 6x biomeswevegone:blue_enchanted_planks | cutting | biomeswevegone:stripped_blue_enchanted_wood | `kubejs:tk3/compat/saw_biomeswevegone_blue_enchanted_wood` |
| 1 | biomeswevegone:stripped_cika_log | cutting | biomeswevegone:cika_log | `kubejs:tk3/compat/strip_biomeswevegone_cika_log` |
| 1 | 6x biomeswevegone:cika_planks | cutting | biomeswevegone:stripped_cika_log | `kubejs:tk3/compat/saw_biomeswevegone_cika_log` |
| 1 | biomeswevegone:stripped_cika_wood | cutting | biomeswevegone:cika_wood | `kubejs:tk3/compat/strip_biomeswevegone_cika_wood` |
| 1 | 6x biomeswevegone:cika_planks | cutting | biomeswevegone:stripped_cika_wood | `kubejs:tk3/compat/saw_biomeswevegone_cika_wood` |
| 1 | biomeswevegone:stripped_cypress_log | cutting | biomeswevegone:cypress_log | `kubejs:tk3/compat/strip_biomeswevegone_cypress_log` |
| 1 | 6x biomeswevegone:cypress_planks | cutting | biomeswevegone:stripped_cypress_log | `kubejs:tk3/compat/saw_biomeswevegone_cypress_log` |
| 1 | biomeswevegone:stripped_cypress_wood | cutting | biomeswevegone:cypress_wood | `kubejs:tk3/compat/strip_biomeswevegone_cypress_wood` |
| 1 | 6x biomeswevegone:cypress_planks | cutting | biomeswevegone:stripped_cypress_wood | `kubejs:tk3/compat/saw_biomeswevegone_cypress_wood` |
| 1 | biomeswevegone:stripped_ebony_log | cutting | biomeswevegone:ebony_log | `kubejs:tk3/compat/strip_biomeswevegone_ebony_log` |
| 1 | 6x biomeswevegone:ebony_planks | cutting | biomeswevegone:stripped_ebony_log | `kubejs:tk3/compat/saw_biomeswevegone_ebony_log` |
| 1 | biomeswevegone:stripped_ebony_wood | cutting | biomeswevegone:ebony_wood | `kubejs:tk3/compat/strip_biomeswevegone_ebony_wood` |
| 1 | 6x biomeswevegone:ebony_planks | cutting | biomeswevegone:stripped_ebony_wood | `kubejs:tk3/compat/saw_biomeswevegone_ebony_wood` |
| 1 | biomeswevegone:stripped_fir_log | cutting | biomeswevegone:fir_log | `kubejs:tk3/compat/strip_biomeswevegone_fir_log` |
| 1 | 6x biomeswevegone:fir_planks | cutting | biomeswevegone:stripped_fir_log | `kubejs:tk3/compat/saw_biomeswevegone_fir_log` |
| 1 | biomeswevegone:stripped_fir_wood | cutting | biomeswevegone:fir_wood | `kubejs:tk3/compat/strip_biomeswevegone_fir_wood` |
| 1 | 6x biomeswevegone:fir_planks | cutting | biomeswevegone:stripped_fir_wood | `kubejs:tk3/compat/saw_biomeswevegone_fir_wood` |
| 1 | biomeswevegone:stripped_florus_stem | cutting | biomeswevegone:florus_stem | `kubejs:tk3/compat/strip_biomeswevegone_florus_stem` |
| 1 | 6x biomeswevegone:florus_planks | cutting | biomeswevegone:stripped_florus_stem | `kubejs:tk3/compat/saw_biomeswevegone_florus_stem` |
| 1 | biomeswevegone:stripped_florus_wood | cutting | biomeswevegone:florus_wood | `kubejs:tk3/compat/strip_biomeswevegone_florus_wood` |
| 1 | 6x biomeswevegone:florus_planks | cutting | biomeswevegone:stripped_florus_wood | `kubejs:tk3/compat/saw_biomeswevegone_florus_wood` |
| 1 | biomeswevegone:stripped_green_enchanted_log | cutting | biomeswevegone:green_enchanted_log | `kubejs:tk3/compat/strip_biomeswevegone_green_enchanted_log` |
| 1 | 6x biomeswevegone:green_enchanted_planks | cutting | biomeswevegone:stripped_green_enchanted_log | `kubejs:tk3/compat/saw_biomeswevegone_green_enchanted_log` |
| 1 | biomeswevegone:stripped_green_enchanted_wood | cutting | biomeswevegone:green_enchanted_wood | `kubejs:tk3/compat/strip_biomeswevegone_green_enchanted_wood` |
| 1 | 6x biomeswevegone:green_enchanted_planks | cutting | biomeswevegone:stripped_green_enchanted_wood | `kubejs:tk3/compat/saw_biomeswevegone_green_enchanted_wood` |
| 1 | biomeswevegone:stripped_holly_log | cutting | biomeswevegone:holly_log | `kubejs:tk3/compat/strip_biomeswevegone_holly_log` |
| 1 | 6x biomeswevegone:holly_planks | cutting | biomeswevegone:stripped_holly_log | `kubejs:tk3/compat/saw_biomeswevegone_holly_log` |
| 1 | biomeswevegone:stripped_holly_wood | cutting | biomeswevegone:holly_wood | `kubejs:tk3/compat/strip_biomeswevegone_holly_wood` |
| 1 | 6x biomeswevegone:holly_planks | cutting | biomeswevegone:stripped_holly_wood | `kubejs:tk3/compat/saw_biomeswevegone_holly_wood` |
| 1 | biomeswevegone:stripped_ironwood_log | cutting | biomeswevegone:ironwood_log | `kubejs:tk3/compat/strip_biomeswevegone_ironwood_log` |
| 1 | 6x biomeswevegone:ironwood_planks | cutting | biomeswevegone:stripped_ironwood_log | `kubejs:tk3/compat/saw_biomeswevegone_ironwood_log` |
| 1 | biomeswevegone:stripped_ironwood_wood | cutting | biomeswevegone:ironwood_wood | `kubejs:tk3/compat/strip_biomeswevegone_ironwood_wood` |
| 1 | 6x biomeswevegone:ironwood_planks | cutting | biomeswevegone:stripped_ironwood_wood | `kubejs:tk3/compat/saw_biomeswevegone_ironwood_wood` |
| 1 | biomeswevegone:stripped_jacaranda_log | cutting | biomeswevegone:jacaranda_log | `kubejs:tk3/compat/strip_biomeswevegone_jacaranda_log` |
| 1 | 6x biomeswevegone:jacaranda_planks | cutting | biomeswevegone:stripped_jacaranda_log | `kubejs:tk3/compat/saw_biomeswevegone_jacaranda_log` |
| 1 | biomeswevegone:stripped_jacaranda_wood | cutting | biomeswevegone:jacaranda_wood | `kubejs:tk3/compat/strip_biomeswevegone_jacaranda_wood` |
| 1 | 6x biomeswevegone:jacaranda_planks | cutting | biomeswevegone:stripped_jacaranda_wood | `kubejs:tk3/compat/saw_biomeswevegone_jacaranda_wood` |
| 1 | biomeswevegone:stripped_mahogany_log | cutting | biomeswevegone:mahogany_log | `kubejs:tk3/compat/strip_biomeswevegone_mahogany_log` |
| 1 | 6x biomeswevegone:mahogany_planks | cutting | biomeswevegone:stripped_mahogany_log | `kubejs:tk3/compat/saw_biomeswevegone_mahogany_log` |
| 1 | biomeswevegone:stripped_mahogany_wood | cutting | biomeswevegone:mahogany_wood | `kubejs:tk3/compat/strip_biomeswevegone_mahogany_wood` |
| 1 | 6x biomeswevegone:mahogany_planks | cutting | biomeswevegone:stripped_mahogany_wood | `kubejs:tk3/compat/saw_biomeswevegone_mahogany_wood` |
| 1 | biomeswevegone:stripped_maple_log | cutting | biomeswevegone:maple_log | `kubejs:tk3/compat/strip_biomeswevegone_maple_log` |
| 1 | 6x biomeswevegone:maple_planks | cutting | biomeswevegone:stripped_maple_log | `kubejs:tk3/compat/saw_biomeswevegone_maple_log` |
| 1 | biomeswevegone:stripped_maple_wood | cutting | biomeswevegone:maple_wood | `kubejs:tk3/compat/strip_biomeswevegone_maple_wood` |
| 1 | 6x biomeswevegone:maple_planks | cutting | biomeswevegone:stripped_maple_wood | `kubejs:tk3/compat/saw_biomeswevegone_maple_wood` |
| 1 | biomeswevegone:stripped_palm_log | cutting | biomeswevegone:palm_log | `kubejs:tk3/compat/strip_biomeswevegone_palm_log` |
| 1 | 6x biomeswevegone:palm_planks | cutting | biomeswevegone:stripped_palm_log | `kubejs:tk3/compat/saw_biomeswevegone_palm_log` |
| 1 | biomeswevegone:stripped_palm_wood | cutting | biomeswevegone:palm_wood | `kubejs:tk3/compat/strip_biomeswevegone_palm_wood` |
| 1 | 6x biomeswevegone:palm_planks | cutting | biomeswevegone:stripped_palm_wood | `kubejs:tk3/compat/saw_biomeswevegone_palm_wood` |
| 1 | biomeswevegone:stripped_pine_log | cutting | biomeswevegone:pine_log | `kubejs:tk3/compat/strip_biomeswevegone_pine_log` |
| 1 | 6x biomeswevegone:pine_planks | cutting | biomeswevegone:stripped_pine_log | `kubejs:tk3/compat/saw_biomeswevegone_pine_log` |
| 1 | biomeswevegone:stripped_pine_wood | cutting | biomeswevegone:pine_wood | `kubejs:tk3/compat/strip_biomeswevegone_pine_wood` |
| 1 | 6x biomeswevegone:pine_planks | cutting | biomeswevegone:stripped_pine_wood | `kubejs:tk3/compat/saw_biomeswevegone_pine_wood` |
| 1 | biomeswevegone:stripped_rainbow_eucalyptus_log | cutting | biomeswevegone:rainbow_eucalyptus_log | `kubejs:tk3/compat/strip_biomeswevegone_rainbow_eucalyptus_log` |
| 1 | 6x biomeswevegone:rainbow_eucalyptus_planks | cutting | biomeswevegone:stripped_rainbow_eucalyptus_log | `kubejs:tk3/compat/saw_biomeswevegone_rainbow_eucalyptus_log` |
| 1 | biomeswevegone:stripped_rainbow_eucalyptus_wood | cutting | biomeswevegone:rainbow_eucalyptus_wood | `kubejs:tk3/compat/strip_biomeswevegone_rainbow_eucalyptus_wood` |
| 1 | 6x biomeswevegone:rainbow_eucalyptus_planks | cutting | biomeswevegone:stripped_rainbow_eucalyptus_wood | `kubejs:tk3/compat/saw_biomeswevegone_rainbow_eucalyptus_wood` |
| 1 | biomeswevegone:stripped_redwood_log | cutting | biomeswevegone:redwood_log | `kubejs:tk3/compat/strip_biomeswevegone_redwood_log` |
| 1 | 6x biomeswevegone:redwood_planks | cutting | biomeswevegone:stripped_redwood_log | `kubejs:tk3/compat/saw_biomeswevegone_redwood_log` |
| 1 | biomeswevegone:stripped_redwood_wood | cutting | biomeswevegone:redwood_wood | `kubejs:tk3/compat/strip_biomeswevegone_redwood_wood` |
| 1 | 6x biomeswevegone:redwood_planks | cutting | biomeswevegone:stripped_redwood_wood | `kubejs:tk3/compat/saw_biomeswevegone_redwood_wood` |
| 1 | biomeswevegone:stripped_sakura_log | cutting | biomeswevegone:sakura_log | `kubejs:tk3/compat/strip_biomeswevegone_sakura_log` |
| 1 | 6x biomeswevegone:sakura_planks | cutting | biomeswevegone:stripped_sakura_log | `kubejs:tk3/compat/saw_biomeswevegone_sakura_log` |
| 1 | biomeswevegone:stripped_sakura_wood | cutting | biomeswevegone:sakura_wood | `kubejs:tk3/compat/strip_biomeswevegone_sakura_wood` |
| 1 | 6x biomeswevegone:sakura_planks | cutting | biomeswevegone:stripped_sakura_wood | `kubejs:tk3/compat/saw_biomeswevegone_sakura_wood` |
| 1 | biomeswevegone:stripped_skyris_log | cutting | biomeswevegone:skyris_log | `kubejs:tk3/compat/strip_biomeswevegone_skyris_log` |
| 1 | 6x biomeswevegone:skyris_planks | cutting | biomeswevegone:stripped_skyris_log | `kubejs:tk3/compat/saw_biomeswevegone_skyris_log` |
| 1 | biomeswevegone:stripped_skyris_wood | cutting | biomeswevegone:skyris_wood | `kubejs:tk3/compat/strip_biomeswevegone_skyris_wood` |
| 1 | 6x biomeswevegone:skyris_planks | cutting | biomeswevegone:stripped_skyris_wood | `kubejs:tk3/compat/saw_biomeswevegone_skyris_wood` |
| 1 | biomeswevegone:stripped_spirit_log | cutting | biomeswevegone:spirit_log | `kubejs:tk3/compat/strip_biomeswevegone_spirit_log` |
| 1 | 6x biomeswevegone:spirit_planks | cutting | biomeswevegone:stripped_spirit_log | `kubejs:tk3/compat/saw_biomeswevegone_spirit_log` |
| 1 | biomeswevegone:stripped_spirit_wood | cutting | biomeswevegone:spirit_wood | `kubejs:tk3/compat/strip_biomeswevegone_spirit_wood` |
| 1 | 6x biomeswevegone:spirit_planks | cutting | biomeswevegone:stripped_spirit_wood | `kubejs:tk3/compat/saw_biomeswevegone_spirit_wood` |
| 1 | biomeswevegone:stripped_white_mangrove_log | cutting | biomeswevegone:white_mangrove_log | `kubejs:tk3/compat/strip_biomeswevegone_white_mangrove_log` |
| 1 | 6x biomeswevegone:white_mangrove_planks | cutting | biomeswevegone:stripped_white_mangrove_log | `kubejs:tk3/compat/saw_biomeswevegone_white_mangrove_log` |
| 1 | biomeswevegone:stripped_white_mangrove_wood | cutting | biomeswevegone:white_mangrove_wood | `kubejs:tk3/compat/strip_biomeswevegone_white_mangrove_wood` |
| 1 | 6x biomeswevegone:white_mangrove_planks | cutting | biomeswevegone:stripped_white_mangrove_wood | `kubejs:tk3/compat/saw_biomeswevegone_white_mangrove_wood` |
| 1 | biomeswevegone:stripped_willow_log | cutting | biomeswevegone:willow_log | `kubejs:tk3/compat/strip_biomeswevegone_willow_log` |
| 1 | 6x biomeswevegone:willow_planks | cutting | biomeswevegone:stripped_willow_log | `kubejs:tk3/compat/saw_biomeswevegone_willow_log` |
| 1 | biomeswevegone:stripped_willow_wood | cutting | biomeswevegone:willow_wood | `kubejs:tk3/compat/strip_biomeswevegone_willow_wood` |
| 1 | 6x biomeswevegone:willow_planks | cutting | biomeswevegone:stripped_willow_wood | `kubejs:tk3/compat/saw_biomeswevegone_willow_wood` |
| 1 | biomeswevegone:stripped_witch_hazel_log | cutting | biomeswevegone:witch_hazel_log | `kubejs:tk3/compat/strip_biomeswevegone_witch_hazel_log` |
| 1 | 6x biomeswevegone:witch_hazel_planks | cutting | biomeswevegone:stripped_witch_hazel_log | `kubejs:tk3/compat/saw_biomeswevegone_witch_hazel_log` |
| 1 | biomeswevegone:stripped_witch_hazel_wood | cutting | biomeswevegone:witch_hazel_wood | `kubejs:tk3/compat/strip_biomeswevegone_witch_hazel_wood` |
| 1 | 6x biomeswevegone:witch_hazel_planks | cutting | biomeswevegone:stripped_witch_hazel_wood | `kubejs:tk3/compat/saw_biomeswevegone_witch_hazel_wood` |
| 1 | biomeswevegone:stripped_zelkova_log | cutting | biomeswevegone:zelkova_log | `kubejs:tk3/compat/strip_biomeswevegone_zelkova_log` |
| 1 | 6x biomeswevegone:zelkova_planks | cutting | biomeswevegone:stripped_zelkova_log | `kubejs:tk3/compat/saw_biomeswevegone_zelkova_log` |
| 1 | biomeswevegone:stripped_zelkova_wood | cutting | biomeswevegone:zelkova_wood | `kubejs:tk3/compat/strip_biomeswevegone_zelkova_wood` |
| 1 | 6x biomeswevegone:zelkova_planks | cutting | biomeswevegone:stripped_zelkova_wood | `kubejs:tk3/compat/saw_biomeswevegone_zelkova_wood` |
| 1 | bloomingnature:stripped_aspen_log | cutting | bloomingnature:aspen_log | `kubejs:tk3/compat/strip_bloomingnature_aspen_log` |
| 1 | 6x bloomingnature:aspen_planks | cutting | bloomingnature:stripped_aspen_log | `kubejs:tk3/compat/saw_bloomingnature_aspen_log` |
| 1 | bloomingnature:stripped_aspen_wood | cutting | bloomingnature:aspen_wood | `kubejs:tk3/compat/strip_bloomingnature_aspen_wood` |
| 1 | 6x bloomingnature:aspen_planks | cutting | bloomingnature:stripped_aspen_wood | `kubejs:tk3/compat/saw_bloomingnature_aspen_wood` |
| 1 | bloomingnature:stripped_baobab_log | cutting | bloomingnature:baobab_log | `kubejs:tk3/compat/strip_bloomingnature_baobab_log` |
| 1 | 6x bloomingnature:baobab_planks | cutting | bloomingnature:stripped_baobab_log | `kubejs:tk3/compat/saw_bloomingnature_baobab_log` |
| 1 | bloomingnature:stripped_baobab_wood | cutting | bloomingnature:baobab_wood | `kubejs:tk3/compat/strip_bloomingnature_baobab_wood` |
| 1 | 6x bloomingnature:baobab_planks | cutting | bloomingnature:stripped_baobab_wood | `kubejs:tk3/compat/saw_bloomingnature_baobab_wood` |
| 1 | bloomingnature:stripped_chestnut_log | cutting | bloomingnature:chestnut_log | `kubejs:tk3/compat/strip_bloomingnature_chestnut_log` |
| 1 | 6x bloomingnature:chestnut_planks | cutting | bloomingnature:stripped_chestnut_log | `kubejs:tk3/compat/saw_bloomingnature_chestnut_log` |
| 1 | bloomingnature:stripped_chestnut_wood | cutting | bloomingnature:chestnut_wood | `kubejs:tk3/compat/strip_bloomingnature_chestnut_wood` |
| 1 | 6x bloomingnature:chestnut_planks | cutting | bloomingnature:stripped_chestnut_wood | `kubejs:tk3/compat/saw_bloomingnature_chestnut_wood` |
| 1 | bloomingnature:stripped_cypress_log | cutting | bloomingnature:cypress_log | `kubejs:tk3/compat/strip_bloomingnature_cypress_log` |
| 1 | 6x bloomingnature:cypress_planks | cutting | bloomingnature:stripped_cypress_log | `kubejs:tk3/compat/saw_bloomingnature_cypress_log` |
| 1 | bloomingnature:stripped_cypress_wood | cutting | bloomingnature:cypress_wood | `kubejs:tk3/compat/strip_bloomingnature_cypress_wood` |
| 1 | 6x bloomingnature:cypress_planks | cutting | bloomingnature:stripped_cypress_wood | `kubejs:tk3/compat/saw_bloomingnature_cypress_wood` |
| 1 | bloomingnature:stripped_ebony_log | cutting | bloomingnature:ebony_log | `kubejs:tk3/compat/strip_bloomingnature_ebony_log` |
| 1 | 6x bloomingnature:ebony_planks | cutting | bloomingnature:stripped_ebony_log | `kubejs:tk3/compat/saw_bloomingnature_ebony_log` |
| 1 | bloomingnature:stripped_ebony_wood | cutting | bloomingnature:ebony_wood | `kubejs:tk3/compat/strip_bloomingnature_ebony_wood` |
| 1 | 6x bloomingnature:ebony_planks | cutting | bloomingnature:stripped_ebony_wood | `kubejs:tk3/compat/saw_bloomingnature_ebony_wood` |
| 1 | bloomingnature:stripped_fan_palm_log | cutting | bloomingnature:fan_palm_log | `kubejs:tk3/compat/strip_bloomingnature_fan_palm_log` |
| 1 | 6x bloomingnature:fan_palm_planks | cutting | bloomingnature:stripped_fan_palm_log | `kubejs:tk3/compat/saw_bloomingnature_fan_palm_log` |
| 1 | bloomingnature:stripped_fan_palm_wood | cutting | bloomingnature:fan_palm_wood | `kubejs:tk3/compat/strip_bloomingnature_fan_palm_wood` |
| 1 | 6x bloomingnature:fan_palm_planks | cutting | bloomingnature:stripped_fan_palm_wood | `kubejs:tk3/compat/saw_bloomingnature_fan_palm_wood` |
| 1 | bloomingnature:stripped_fir_log | cutting | bloomingnature:fir_log | `kubejs:tk3/compat/strip_bloomingnature_fir_log` |
| 1 | 6x bloomingnature:fir_planks | cutting | bloomingnature:stripped_fir_log | `kubejs:tk3/compat/saw_bloomingnature_fir_log` |
| 1 | bloomingnature:stripped_fir_wood | cutting | bloomingnature:fir_wood | `kubejs:tk3/compat/strip_bloomingnature_fir_wood` |
| 1 | 6x bloomingnature:fir_planks | cutting | bloomingnature:stripped_fir_wood | `kubejs:tk3/compat/saw_bloomingnature_fir_wood` |
| 1 | bloomingnature:stripped_larch_log | cutting | bloomingnature:larch_log | `kubejs:tk3/compat/strip_bloomingnature_larch_log` |
| 1 | 6x bloomingnature:larch_planks | cutting | bloomingnature:stripped_larch_log | `kubejs:tk3/compat/saw_bloomingnature_larch_log` |
| 1 | bloomingnature:stripped_larch_wood | cutting | bloomingnature:larch_wood | `kubejs:tk3/compat/strip_bloomingnature_larch_wood` |
| 1 | 6x bloomingnature:larch_planks | cutting | bloomingnature:stripped_larch_wood | `kubejs:tk3/compat/saw_bloomingnature_larch_wood` |
| 1 | bloomingnature:stripped_swamp_cypress_log | cutting | bloomingnature:swamp_cypress_log | `kubejs:tk3/compat/strip_bloomingnature_swamp_cypress_log` |
| 1 | 6x bloomingnature:swamp_cypress_planks | cutting | bloomingnature:stripped_swamp_cypress_log | `kubejs:tk3/compat/saw_bloomingnature_swamp_cypress_log` |
| 1 | bloomingnature:stripped_swamp_cypress_wood | cutting | bloomingnature:swamp_cypress_wood | `kubejs:tk3/compat/strip_bloomingnature_swamp_cypress_wood` |
| 1 | 6x bloomingnature:swamp_cypress_planks | cutting | bloomingnature:stripped_swamp_cypress_wood | `kubejs:tk3/compat/saw_bloomingnature_swamp_cypress_wood` |
| 1 | bloomingnature:stripped_swamp_oak_log | cutting | bloomingnature:swamp_oak_log | `kubejs:tk3/compat/strip_bloomingnature_swamp_oak_log` |
| 1 | 6x bloomingnature:swamp_oak_planks | cutting | bloomingnature:stripped_swamp_oak_log | `kubejs:tk3/compat/saw_bloomingnature_swamp_oak_log` |
| 1 | bloomingnature:stripped_swamp_oak_wood | cutting | bloomingnature:swamp_oak_wood | `kubejs:tk3/compat/strip_bloomingnature_swamp_oak_wood` |
| 1 | 6x bloomingnature:swamp_oak_planks | cutting | bloomingnature:stripped_swamp_oak_wood | `kubejs:tk3/compat/saw_bloomingnature_swamp_oak_wood` |
| 1 | 6x cataclysm:chorus_planks | cutting | cataclysm:chorus_stem | `kubejs:tk3/compat/saw_cataclysm_chorus_stem` |
| 1 | environmental:stripped_pine_log | cutting | environmental:pine_log | `kubejs:tk3/compat/strip_environmental_pine_log` |
| 1 | 6x environmental:pine_planks | cutting | environmental:stripped_pine_log | `kubejs:tk3/compat/saw_environmental_pine_log` |
| 1 | environmental:stripped_pine_wood | cutting | environmental:pine_wood | `kubejs:tk3/compat/strip_environmental_pine_wood` |
| 1 | 6x environmental:pine_planks | cutting | environmental:stripped_pine_wood | `kubejs:tk3/compat/saw_environmental_pine_wood` |
| 1 | environmental:stripped_plum_log | cutting | environmental:plum_log | `kubejs:tk3/compat/strip_environmental_plum_log` |
| 1 | 6x environmental:plum_planks | cutting | environmental:stripped_plum_log | `kubejs:tk3/compat/saw_environmental_plum_log` |
| 1 | environmental:stripped_plum_wood | cutting | environmental:plum_wood | `kubejs:tk3/compat/strip_environmental_plum_wood` |
| 1 | 6x environmental:plum_planks | cutting | environmental:stripped_plum_wood | `kubejs:tk3/compat/saw_environmental_plum_wood` |
| 1 | environmental:stripped_willow_log | cutting | environmental:willow_log | `kubejs:tk3/compat/strip_environmental_willow_log` |
| 1 | 6x environmental:willow_planks | cutting | environmental:stripped_willow_log | `kubejs:tk3/compat/saw_environmental_willow_log` |
| 1 | environmental:stripped_willow_wood | cutting | environmental:willow_wood | `kubejs:tk3/compat/strip_environmental_willow_wood` |
| 1 | 6x environmental:willow_planks | cutting | environmental:stripped_willow_wood | `kubejs:tk3/compat/saw_environmental_willow_wood` |
| 1 | environmental:stripped_wisteria_log | cutting | environmental:wisteria_log | `kubejs:tk3/compat/strip_environmental_wisteria_log` |
| 1 | 6x environmental:wisteria_planks | cutting | environmental:stripped_wisteria_log | `kubejs:tk3/compat/saw_environmental_wisteria_log` |
| 1 | environmental:stripped_wisteria_wood | cutting | environmental:wisteria_wood | `kubejs:tk3/compat/strip_environmental_wisteria_wood` |
| 1 | 6x environmental:wisteria_planks | cutting | environmental:stripped_wisteria_wood | `kubejs:tk3/compat/saw_environmental_wisteria_wood` |
| 1 | 6x iceandfire:dreadwood_planks | cutting | iceandfire:dreadwood_log | `kubejs:tk3/compat/saw_iceandfire_dreadwood_log` |
| 1 | minecraft:stripped_acacia_log | cutting | minecraft:acacia_log | `kubejs:tk3/compat/strip_minecraft_acacia_log` |
| 1 | 6x minecraft:acacia_planks | cutting | minecraft:stripped_acacia_log | `kubejs:tk3/compat/saw_minecraft_acacia_log` |
| 1 | minecraft:stripped_acacia_wood | cutting | minecraft:acacia_wood | `kubejs:tk3/compat/strip_minecraft_acacia_wood` |
| 1 | 6x minecraft:acacia_planks | cutting | minecraft:stripped_acacia_wood | `kubejs:tk3/compat/saw_minecraft_acacia_wood` |
| 1 | minecraft:stripped_birch_log | cutting | minecraft:birch_log | `kubejs:tk3/compat/strip_minecraft_birch_log` |
| 1 | 6x minecraft:birch_planks | cutting | minecraft:stripped_birch_log | `kubejs:tk3/compat/saw_minecraft_birch_log` |
| 1 | minecraft:stripped_birch_wood | cutting | minecraft:birch_wood | `kubejs:tk3/compat/strip_minecraft_birch_wood` |
| 1 | 6x minecraft:birch_planks | cutting | minecraft:stripped_birch_wood | `kubejs:tk3/compat/saw_minecraft_birch_wood` |
| 1 | minecraft:stripped_cherry_log | cutting | minecraft:cherry_log | `kubejs:tk3/compat/strip_minecraft_cherry_log` |
| 1 | 6x minecraft:cherry_planks | cutting | minecraft:stripped_cherry_log | `kubejs:tk3/compat/saw_minecraft_cherry_log` |
| 1 | minecraft:stripped_cherry_wood | cutting | minecraft:cherry_wood | `kubejs:tk3/compat/strip_minecraft_cherry_wood` |
| 1 | 6x minecraft:cherry_planks | cutting | minecraft:stripped_cherry_wood | `kubejs:tk3/compat/saw_minecraft_cherry_wood` |
| 1 | minecraft:stripped_crimson_hyphae | cutting | minecraft:crimson_hyphae | `kubejs:tk3/compat/strip_minecraft_crimson_hyphae` |
| 1 | 6x minecraft:crimson_planks | cutting | minecraft:stripped_crimson_hyphae | `kubejs:tk3/compat/saw_minecraft_crimson_hyphae` |
| 1 | minecraft:stripped_crimson_stem | cutting | minecraft:crimson_stem | `kubejs:tk3/compat/strip_minecraft_crimson_stem` |
| 1 | 6x minecraft:crimson_planks | cutting | minecraft:stripped_crimson_stem | `kubejs:tk3/compat/saw_minecraft_crimson_stem` |
| 1 | minecraft:stripped_dark_oak_log | cutting | minecraft:dark_oak_log | `kubejs:tk3/compat/strip_minecraft_dark_oak_log` |
| 1 | 6x minecraft:dark_oak_planks | cutting | minecraft:stripped_dark_oak_log | `kubejs:tk3/compat/saw_minecraft_dark_oak_log` |
| 1 | minecraft:stripped_dark_oak_wood | cutting | minecraft:dark_oak_wood | `kubejs:tk3/compat/strip_minecraft_dark_oak_wood` |
| 1 | 6x minecraft:dark_oak_planks | cutting | minecraft:stripped_dark_oak_wood | `kubejs:tk3/compat/saw_minecraft_dark_oak_wood` |
| 1 | minecraft:stripped_jungle_log | cutting | minecraft:jungle_log | `kubejs:tk3/compat/strip_minecraft_jungle_log` |
| 1 | 6x minecraft:jungle_planks | cutting | minecraft:stripped_jungle_log | `kubejs:tk3/compat/saw_minecraft_jungle_log` |
| 1 | minecraft:stripped_jungle_wood | cutting | minecraft:jungle_wood | `kubejs:tk3/compat/strip_minecraft_jungle_wood` |
| 1 | 6x minecraft:jungle_planks | cutting | minecraft:stripped_jungle_wood | `kubejs:tk3/compat/saw_minecraft_jungle_wood` |
| 1 | minecraft:stripped_mangrove_log | cutting | minecraft:mangrove_log | `kubejs:tk3/compat/strip_minecraft_mangrove_log` |
| 1 | 6x minecraft:mangrove_planks | cutting | minecraft:stripped_mangrove_log | `kubejs:tk3/compat/saw_minecraft_mangrove_log` |
| 1 | minecraft:stripped_mangrove_wood | cutting | minecraft:mangrove_wood | `kubejs:tk3/compat/strip_minecraft_mangrove_wood` |
| 1 | 6x minecraft:mangrove_planks | cutting | minecraft:stripped_mangrove_wood | `kubejs:tk3/compat/saw_minecraft_mangrove_wood` |
| 1 | minecraft:stripped_oak_log | cutting | minecraft:oak_log | `kubejs:tk3/compat/strip_minecraft_oak_log` |
| 1 | 6x minecraft:oak_planks | cutting | minecraft:stripped_oak_log | `kubejs:tk3/compat/saw_minecraft_oak_log` |
| 1 | minecraft:stripped_oak_wood | cutting | minecraft:oak_wood | `kubejs:tk3/compat/strip_minecraft_oak_wood` |
| 1 | 6x minecraft:oak_planks | cutting | minecraft:stripped_oak_wood | `kubejs:tk3/compat/saw_minecraft_oak_wood` |
| 1 | minecraft:stripped_spruce_log | cutting | minecraft:spruce_log | `kubejs:tk3/compat/strip_minecraft_spruce_log` |
| 1 | 6x minecraft:spruce_planks | cutting | minecraft:stripped_spruce_log | `kubejs:tk3/compat/saw_minecraft_spruce_log` |
| 1 | minecraft:stripped_spruce_wood | cutting | minecraft:spruce_wood | `kubejs:tk3/compat/strip_minecraft_spruce_wood` |
| 1 | 6x minecraft:spruce_planks | cutting | minecraft:stripped_spruce_wood | `kubejs:tk3/compat/saw_minecraft_spruce_wood` |
| 1 | minecraft:stripped_warped_hyphae | cutting | minecraft:warped_hyphae | `kubejs:tk3/compat/strip_minecraft_warped_hyphae` |
| 1 | 6x minecraft:warped_planks | cutting | minecraft:stripped_warped_hyphae | `kubejs:tk3/compat/saw_minecraft_warped_hyphae` |
| 1 | minecraft:stripped_warped_stem | cutting | minecraft:warped_stem | `kubejs:tk3/compat/strip_minecraft_warped_stem` |
| 1 | 6x minecraft:warped_planks | cutting | minecraft:stripped_warped_stem | `kubejs:tk3/compat/saw_minecraft_warped_stem` |
| 1 | quark:stripped_ancient_log | cutting | quark:ancient_log | `kubejs:tk3/compat/strip_quark_ancient_log` |
| 1 | 6x quark:ancient_planks | cutting | quark:stripped_ancient_log | `kubejs:tk3/compat/saw_quark_ancient_log` |
| 1 | quark:stripped_ancient_wood | cutting | quark:ancient_wood | `kubejs:tk3/compat/strip_quark_ancient_wood` |
| 1 | 6x quark:ancient_planks | cutting | quark:stripped_ancient_wood | `kubejs:tk3/compat/saw_quark_ancient_wood` |
| 1 | quark:stripped_azalea_log | cutting | quark:azalea_log | `kubejs:tk3/compat/strip_quark_azalea_log` |
| 1 | 6x quark:azalea_planks | cutting | quark:stripped_azalea_log | `kubejs:tk3/compat/saw_quark_azalea_log` |
| 1 | quark:stripped_azalea_wood | cutting | quark:azalea_wood | `kubejs:tk3/compat/strip_quark_azalea_wood` |
| 1 | 6x quark:azalea_planks | cutting | quark:stripped_azalea_wood | `kubejs:tk3/compat/saw_quark_azalea_wood` |
| 1 | quark:stripped_blossom_log | cutting | quark:blossom_log | `kubejs:tk3/compat/strip_quark_blossom_log` |
| 1 | 6x quark:blossom_planks | cutting | quark:stripped_blossom_log | `kubejs:tk3/compat/saw_quark_blossom_log` |
| 1 | quark:stripped_blossom_wood | cutting | quark:blossom_wood | `kubejs:tk3/compat/strip_quark_blossom_wood` |
| 1 | 6x quark:blossom_planks | cutting | quark:stripped_blossom_wood | `kubejs:tk3/compat/saw_quark_blossom_wood` |
| 1 | twilightforest:stripped_canopy_log | cutting | twilightforest:canopy_log | `kubejs:tk3/compat/strip_twilightforest_canopy_log` |
| 1 | 6x twilightforest:canopy_planks | cutting | twilightforest:stripped_canopy_log | `kubejs:tk3/compat/saw_twilightforest_canopy_log` |
| 1 | twilightforest:stripped_canopy_wood | cutting | twilightforest:canopy_wood | `kubejs:tk3/compat/strip_twilightforest_canopy_wood` |
| 1 | 6x twilightforest:canopy_planks | cutting | twilightforest:stripped_canopy_wood | `kubejs:tk3/compat/saw_twilightforest_canopy_wood` |
| 1 | twilightforest:stripped_dark_log | cutting | twilightforest:dark_log | `kubejs:tk3/compat/strip_twilightforest_dark_log` |
| 1 | 6x twilightforest:dark_planks | cutting | twilightforest:stripped_dark_log | `kubejs:tk3/compat/saw_twilightforest_dark_log` |
| 1 | twilightforest:stripped_dark_wood | cutting | twilightforest:dark_wood | `kubejs:tk3/compat/strip_twilightforest_dark_wood` |
| 1 | 6x twilightforest:dark_planks | cutting | twilightforest:stripped_dark_wood | `kubejs:tk3/compat/saw_twilightforest_dark_wood` |
| 1 | twilightforest:stripped_mangrove_log | cutting | twilightforest:mangrove_log | `kubejs:tk3/compat/strip_twilightforest_mangrove_log` |
| 1 | 6x twilightforest:mangrove_planks | cutting | twilightforest:stripped_mangrove_log | `kubejs:tk3/compat/saw_twilightforest_mangrove_log` |
| 1 | twilightforest:stripped_mangrove_wood | cutting | twilightforest:mangrove_wood | `kubejs:tk3/compat/strip_twilightforest_mangrove_wood` |
| 1 | 6x twilightforest:mangrove_planks | cutting | twilightforest:stripped_mangrove_wood | `kubejs:tk3/compat/saw_twilightforest_mangrove_wood` |
| 1 | twilightforest:stripped_mining_log | cutting | twilightforest:mining_log | `kubejs:tk3/compat/strip_twilightforest_mining_log` |
| 1 | 6x twilightforest:mining_planks | cutting | twilightforest:stripped_mining_log | `kubejs:tk3/compat/saw_twilightforest_mining_log` |
| 1 | twilightforest:stripped_mining_wood | cutting | twilightforest:mining_wood | `kubejs:tk3/compat/strip_twilightforest_mining_wood` |
| 1 | 6x twilightforest:mining_planks | cutting | twilightforest:stripped_mining_wood | `kubejs:tk3/compat/saw_twilightforest_mining_wood` |
| 1 | twilightforest:stripped_sorting_log | cutting | twilightforest:sorting_log | `kubejs:tk3/compat/strip_twilightforest_sorting_log` |
| 1 | 6x twilightforest:sorting_planks | cutting | twilightforest:stripped_sorting_log | `kubejs:tk3/compat/saw_twilightforest_sorting_log` |
| 1 | twilightforest:stripped_sorting_wood | cutting | twilightforest:sorting_wood | `kubejs:tk3/compat/strip_twilightforest_sorting_wood` |
| 1 | 6x twilightforest:sorting_planks | cutting | twilightforest:stripped_sorting_wood | `kubejs:tk3/compat/saw_twilightforest_sorting_wood` |
| 1 | twilightforest:stripped_time_log | cutting | twilightforest:time_log | `kubejs:tk3/compat/strip_twilightforest_time_log` |
| 1 | 6x twilightforest:time_planks | cutting | twilightforest:stripped_time_log | `kubejs:tk3/compat/saw_twilightforest_time_log` |
| 1 | twilightforest:stripped_time_wood | cutting | twilightforest:time_wood | `kubejs:tk3/compat/strip_twilightforest_time_wood` |
| 1 | 6x twilightforest:time_planks | cutting | twilightforest:stripped_time_wood | `kubejs:tk3/compat/saw_twilightforest_time_wood` |
| 1 | twilightforest:stripped_transformation_log | cutting | twilightforest:transformation_log | `kubejs:tk3/compat/strip_twilightforest_transformation_log` |
| 1 | 6x twilightforest:transformation_planks | cutting | twilightforest:stripped_transformation_log | `kubejs:tk3/compat/saw_twilightforest_transformation_log` |
| 1 | twilightforest:stripped_transformation_wood | cutting | twilightforest:transformation_wood | `kubejs:tk3/compat/strip_twilightforest_transformation_wood` |
| 1 | 6x twilightforest:transformation_planks | cutting | twilightforest:stripped_transformation_wood | `kubejs:tk3/compat/saw_twilightforest_transformation_wood` |
| 1 | twilightforest:stripped_twilight_oak_log | cutting | twilightforest:twilight_oak_log | `kubejs:tk3/compat/strip_twilightforest_twilight_oak_log` |
| 1 | 6x twilightforest:twilight_oak_planks | cutting | twilightforest:stripped_twilight_oak_log | `kubejs:tk3/compat/saw_twilightforest_twilight_oak_log` |
| 1 | twilightforest:stripped_twilight_oak_wood | cutting | twilightforest:twilight_oak_wood | `kubejs:tk3/compat/strip_twilightforest_twilight_oak_wood` |
| 1 | 6x twilightforest:twilight_oak_planks | cutting | twilightforest:stripped_twilight_oak_wood | `kubejs:tk3/compat/saw_twilightforest_twilight_oak_wood` |
| 1 | upgrade_aquatic:stripped_driftwood_log | cutting | upgrade_aquatic:driftwood_log | `kubejs:tk3/compat/strip_upgrade_aquatic_driftwood_log` |
| 1 | 6x upgrade_aquatic:driftwood_planks | cutting | upgrade_aquatic:stripped_driftwood_log | `kubejs:tk3/compat/saw_upgrade_aquatic_driftwood_log` |
| 1 | upgrade_aquatic:stripped_river_log | cutting | upgrade_aquatic:river_log | `kubejs:tk3/compat/strip_upgrade_aquatic_river_log` |
| 1 | 6x upgrade_aquatic:river_planks | cutting | upgrade_aquatic:stripped_river_log | `kubejs:tk3/compat/saw_upgrade_aquatic_river_log` |
| 1 | upgrade_aquatic:stripped_river_wood | cutting | upgrade_aquatic:river_wood | `kubejs:tk3/compat/strip_upgrade_aquatic_river_wood` |
| 1 | 6x upgrade_aquatic:river_planks | cutting | upgrade_aquatic:stripped_river_wood | `kubejs:tk3/compat/saw_upgrade_aquatic_river_wood` |
| 1 | witchery:stripped_alder_log | cutting | witchery:alder_log | `kubejs:tk3/compat/strip_witchery_alder_log` |
| 1 | 6x witchery:alder_planks | cutting | witchery:stripped_alder_log | `kubejs:tk3/compat/saw_witchery_alder_log` |
| 1 | witchery:stripped_alder_wood | cutting | witchery:alder_wood | `kubejs:tk3/compat/strip_witchery_alder_wood` |
| 1 | 6x witchery:alder_planks | cutting | witchery:stripped_alder_wood | `kubejs:tk3/compat/saw_witchery_alder_wood` |
| 1 | witchery:stripped_hawthorn_log | cutting | witchery:hawthorn_log | `kubejs:tk3/compat/strip_witchery_hawthorn_log` |
| 1 | 6x witchery:hawthorn_planks | cutting | witchery:stripped_hawthorn_log | `kubejs:tk3/compat/saw_witchery_hawthorn_log` |
| 1 | witchery:stripped_hawthorn_wood | cutting | witchery:hawthorn_wood | `kubejs:tk3/compat/strip_witchery_hawthorn_wood` |
| 1 | 6x witchery:hawthorn_planks | cutting | witchery:stripped_hawthorn_wood | `kubejs:tk3/compat/saw_witchery_hawthorn_wood` |
| 1 | witchery:stripped_rowan_log | cutting | witchery:rowan_log | `kubejs:tk3/compat/strip_witchery_rowan_log` |
| 1 | 6x witchery:rowan_planks | cutting | witchery:stripped_rowan_log | `kubejs:tk3/compat/saw_witchery_rowan_log` |
| 1 | witchery:stripped_rowan_wood | cutting | witchery:rowan_wood | `kubejs:tk3/compat/strip_witchery_rowan_wood` |
| 1 | 6x witchery:rowan_planks | cutting | witchery:stripped_rowan_wood | `kubejs:tk3/compat/saw_witchery_rowan_wood` |
| 1 | minecraft:stripped_bamboo_block | cutting | minecraft:bamboo_block | `kubejs:tk3/compat/strip_bamboo_block` |
| 1 | 3x minecraft:bamboo_planks | cutting | minecraft:stripped_bamboo_block | `kubejs:tk3/compat/saw_bamboo` |
| 1 | minecraft:sand | milling | minecraft:gravel | `kubejs:tk3/compat/gravel_to_sand` |
| 1 | create:wheat_flour | milling | minecraft:wheat | `kubejs:tk3/compat/wheat_flour` |
| 1 | 2x minecraft:dirt | compacting | minecraft:gravel + minecraft:clay_ball + 250 mB minecraft:water | `kubejs:tk3/compat/renewable_dirt` |
| 1 | minecraft:mud | mixing | minecraft:dirt + 250 mB minecraft:water | `kubejs:tk3/compat/mud` |
| 1 | minecraft:clay_ball | splashing | minecraft:mud | `kubejs:tk3/compat/mud_clay` |
| 1 | minecraft:soul_sand | haunting | minecraft:sand | `kubejs:tk3/compat/soul_sand` |
| 1 | minecraft:calcite | compacting | minecraft:bone_meal + minecraft:clay_ball | `kubejs:tk3/compat/calcite` |
| 2 | minecraft:exposed_copper | splashing | minecraft:copper_block | `kubejs:tk3/compat/age_copper_block` |
| 2 | minecraft:weathered_copper | splashing | minecraft:exposed_copper | `kubejs:tk3/compat/age_exposed_copper` |
| 2 | minecraft:oxidized_copper | splashing | minecraft:weathered_copper | `kubejs:tk3/compat/age_weathered_copper` |

## Magic

| Tier | Output | Method | Inputs | Recipe ID |
|---|---|---|---|---|
| 4 | irons_spellbooks:blank_rune | compacting | minecraft:stone + irons_spellbooks:arcane_essence | `kubejs:tk3/magic/irons_spellbooks_blank_rune` |
| 4 | 2x irons_spellbooks:magic_cloth | mixing | #minecraft:wool + irons_spellbooks:arcane_essence + 250 mB minecraft:water | `kubejs:tk3/magic/irons_spellbooks_magic_cloth` |
| 4 | irons_spellbooks:arcane_ingot | apparatus | minecraft:iron_ingot + ars_nouveau:source_gem + irons_spellbooks:arcane_essence + minecraft:gold_ingot | `kubejs:tk3/magic/irons_spellbooks_arcane_ingot` |
| 4 | irons_spellbooks:fire_rune | apparatus | irons_spellbooks:blank_rune + ars_nouveau:fire_essence + kubejs:tk3_arcane_mechanism | `kubejs:tk3/magic/irons_spellbooks_fire_rune` |
| 4 | irons_spellbooks:ice_rune | apparatus | irons_spellbooks:blank_rune + ars_nouveau:water_essence + kubejs:tk3_arcane_mechanism | `kubejs:tk3/magic/irons_spellbooks_ice_rune` |
| 4 | irons_spellbooks:lightning_rune | apparatus | irons_spellbooks:blank_rune + ars_nouveau:air_essence + kubejs:tk3_arcane_mechanism | `kubejs:tk3/magic/irons_spellbooks_lightning_rune` |
| 4 | irons_spellbooks:nature_rune | apparatus | irons_spellbooks:blank_rune + ars_nouveau:earth_essence + kubejs:tk3_arcane_mechanism | `kubejs:tk3/magic/irons_spellbooks_nature_rune` |
| 4 | create_wizardry:arcane_sheet | pressing | irons_spellbooks:arcane_ingot | `kubejs:tk3/magic/create_wizardry_arcane_sheet` |
| 4 | create_wizardry:arcane_pump | apparatus | kubejs:tk3_arcane_machine + create:mechanical_pump + create_wizardry:arcane_sheet + ars_nouveau:source_gem | `kubejs:tk3/magic/create_wizardry_arcane_pump` |
| 4 | create_wizardry:arcane_pipe | apparatus | kubejs:tk3_arcane_machine + create:fluid_pipe + create_wizardry:arcane_sheet + ars_nouveau:source_gem | `kubejs:tk3/magic/create_wizardry_arcane_pipe` |
| 4 | create_wizardry:smart_arcane_pipe | apparatus | kubejs:tk3_arcane_machine + create:smart_fluid_pipe + create_wizardry:arcane_sheet + ars_nouveau:source_gem | `kubejs:tk3/magic/create_wizardry_smart_arcane_pipe` |
| 4 | create_wizardry:mana_siphon | apparatus | kubejs:tk3_arcane_machine + ars_nouveau:source_jar + create_wizardry:arcane_sheet + ars_nouveau:source_gem | `kubejs:tk3/magic/create_wizardry_mana_siphon` |
| 4 | create_wizardry:channeler | apparatus | kubejs:tk3_arcane_machine + irons_spellbooks:arcane_rune + create_wizardry:arcane_sheet + ars_nouveau:source_gem | `kubejs:tk3/magic/create_wizardry_channeler` |
| 4 | create_wizardry:blaze_caster | apparatus | kubejs:tk3_arcane_machine + minecraft:blaze_rod + create_wizardry:arcane_sheet + ars_nouveau:source_gem | `kubejs:tk3/magic/create_wizardry_blaze_caster` |
| 4 | ars_creo:starbuncle_wheel | apparatus | kubejs:tk3_arcane_machine + ars_nouveau:starbuncle_charm + create_wizardry:arcane_sheet + ars_nouveau:source_gem | `kubejs:tk3/magic/ars_creo_starbuncle_wheel` |
| 4 | irons_spellbooks:common_ink | cauldron brew | minecraft:ink_sac | `kubejs:tk3/magic/mana_ink` |
| 4 | irons_spellbooks:common_ink | cauldron empty | minecraft:glass_bottle | `kubejs:tk3/magic/bottle_common_ink` |

## Storage

| Tier | Output | Method | Inputs | Recipe ID |
|---|---|---|---|---|
| 1 | sophisticatedstorage:upgrade_base | Shaped crafting | M = kubejs:tk3_rotation_mechanism, I = create:iron_sheet, P = #minecraft:planks ·  I  / PMP /  I  | `kubejs:tk3/storage/sophisticatedstorage_upgrade_base` |
| 2 | sophisticatedstorage:pickup_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_hydraulic_machine, E = minecraft:hopper ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_pickup_upgrade` |
| 2 | sophisticatedstorage:filter_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_hydraulic_machine, E = minecraft:paper ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_filter_upgrade` |
| 3 | sophisticatedstorage:void_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_precision_machine, E = minecraft:lava_bucket ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_void_upgrade` |
| 3 | sophisticatedstorage:compacting_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_precision_machine, E = create:mechanical_press ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_compacting_upgrade` |
| 3 | sophisticatedstorage:stonecutter_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_precision_machine, E = minecraft:stonecutter ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_stonecutter_upgrade` |
| 3 | sophisticatedstorage:crafting_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_precision_machine, E = minecraft:crafting_table ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_crafting_upgrade` |
| 3 | sophisticatedstorage:magnet_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_precision_machine, E = minecraft:iron_ingot ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_magnet_upgrade` |
| 2 | sophisticatedstorage:feeding_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_hydraulic_machine, E = minecraft:golden_carrot ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_feeding_upgrade` |
| 2 | sophisticatedstorage:pump_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_hydraulic_machine, E = create:mechanical_pump ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_pump_upgrade` |
| 4 | sophisticatedstorage:xp_pump_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_arcane_machine, E = minecraft:experience_bottle ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_xp_pump_upgrade` |
| 4 | sophisticatedstorage:alchemy_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_arcane_machine, E = minecraft:brewing_stand ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_alchemy_upgrade` |
| 5 | sophisticatedstorage:smelting_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_arcane_machine, E = minecraft:furnace ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_smelting_upgrade` |
| 5 | sophisticatedstorage:smoking_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_arcane_machine, E = minecraft:smoker ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_smoking_upgrade` |
| 5 | sophisticatedstorage:blasting_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_arcane_machine, E = minecraft:blast_furnace ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedstorage_blasting_upgrade` |
| 4 | sophisticatedstorage:advanced_alchemy_upgrade | wrapped | U = sophisticatedstorage:alchemy_upgrade, F = kubejs:tk3_arcane_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedstorage_advanced_alchemy_upgrade` |
| 3 | sophisticatedstorage:advanced_compacting_upgrade | wrapped | U = sophisticatedstorage:compacting_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedstorage_advanced_compacting_upgrade` |
| 3 | sophisticatedstorage:advanced_feeding_upgrade | wrapped | U = sophisticatedstorage:feeding_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedstorage_advanced_feeding_upgrade` |
| 3 | sophisticatedstorage:advanced_filter_upgrade | wrapped | U = sophisticatedstorage:filter_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedstorage_advanced_filter_upgrade` |
| 3 | sophisticatedstorage:advanced_hopper_upgrade | wrapped | U = sophisticatedstorage:hopper_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedstorage_advanced_hopper_upgrade` |
| 3 | sophisticatedstorage:advanced_jukebox_upgrade | wrapped | U = sophisticatedstorage:jukebox_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedstorage_advanced_jukebox_upgrade` |
| 3 | sophisticatedstorage:advanced_magnet_upgrade | wrapped | U = sophisticatedstorage:magnet_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedstorage_advanced_magnet_upgrade` |
| 3 | sophisticatedstorage:advanced_pickup_upgrade | wrapped | U = sophisticatedstorage:pickup_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedstorage_advanced_pickup_upgrade` |
| 4 | sophisticatedstorage:advanced_pump_upgrade | wrapped | U = sophisticatedstorage:pump_upgrade, F = kubejs:tk3_arcane_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedstorage_advanced_pump_upgrade` |
| 3 | sophisticatedstorage:advanced_void_upgrade | wrapped | U = sophisticatedstorage:void_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedstorage_advanced_void_upgrade` |
| 3 | sophisticatedstorage:stack_upgrade_tier_1 | wrapped | U = sophisticatedstorage:upgrade_base, F = kubejs:tk3_precision_machine, M = minecraft:gold_ingot ·  M  /  U  /  F  | `kubejs:tk3/storage/sophisticatedstorage_stack_upgrade_tier_1` |
| 5 | sophisticatedstorage:stack_upgrade_tier_2 | wrapped | U = sophisticatedstorage:stack_upgrade_tier_1, F = mekanism:steel_casing, M = mekanism:alloy_infused ·  M  /  U  /  F  | `kubejs:tk3/storage/sophisticatedstorage_stack_upgrade_tier_2` |
| 1 | sophisticatedbackpacks:upgrade_base | Shaped crafting | M = kubejs:tk3_rotation_mechanism, I = create:iron_sheet, P = #minecraft:planks ·  I  / PMP /  I  | `kubejs:tk3/storage/sophisticatedbackpacks_upgrade_base` |
| 2 | sophisticatedbackpacks:pickup_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_hydraulic_machine, E = minecraft:hopper ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_pickup_upgrade` |
| 2 | sophisticatedbackpacks:filter_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_hydraulic_machine, E = minecraft:paper ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_filter_upgrade` |
| 3 | sophisticatedbackpacks:void_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_precision_machine, E = minecraft:lava_bucket ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_void_upgrade` |
| 3 | sophisticatedbackpacks:compacting_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_precision_machine, E = create:mechanical_press ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_compacting_upgrade` |
| 3 | sophisticatedbackpacks:stonecutter_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_precision_machine, E = minecraft:stonecutter ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_stonecutter_upgrade` |
| 3 | sophisticatedbackpacks:crafting_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_precision_machine, E = minecraft:crafting_table ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_crafting_upgrade` |
| 3 | sophisticatedbackpacks:magnet_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_precision_machine, E = minecraft:iron_ingot ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_magnet_upgrade` |
| 2 | sophisticatedbackpacks:feeding_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_hydraulic_machine, E = minecraft:golden_carrot ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_feeding_upgrade` |
| 2 | sophisticatedbackpacks:pump_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_hydraulic_machine, E = create:mechanical_pump ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_pump_upgrade` |
| 4 | sophisticatedbackpacks:xp_pump_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_arcane_machine, E = minecraft:experience_bottle ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_xp_pump_upgrade` |
| 4 | sophisticatedbackpacks:alchemy_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_arcane_machine, E = minecraft:brewing_stand ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_alchemy_upgrade` |
| 5 | sophisticatedbackpacks:smelting_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_arcane_machine, E = minecraft:furnace ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_smelting_upgrade` |
| 5 | sophisticatedbackpacks:smoking_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_arcane_machine, E = minecraft:smoker ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_smoking_upgrade` |
| 5 | sophisticatedbackpacks:blasting_upgrade | Shaped crafting | B = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_arcane_machine, E = minecraft:blast_furnace ·  E  /  B  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_blasting_upgrade` |
| 4 | sophisticatedbackpacks:advanced_alchemy_upgrade | wrapped | U = sophisticatedbackpacks:alchemy_upgrade, F = kubejs:tk3_arcane_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_alchemy_upgrade` |
| 3 | sophisticatedbackpacks:advanced_compacting_upgrade | wrapped | U = sophisticatedbackpacks:compacting_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_compacting_upgrade` |
| 3 | sophisticatedbackpacks:advanced_deposit_upgrade | wrapped | U = sophisticatedbackpacks:deposit_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_deposit_upgrade` |
| 3 | sophisticatedbackpacks:advanced_feeding_upgrade | wrapped | U = sophisticatedbackpacks:feeding_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_feeding_upgrade` |
| 3 | sophisticatedbackpacks:advanced_filter_upgrade | wrapped | U = sophisticatedbackpacks:filter_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_filter_upgrade` |
| 3 | sophisticatedbackpacks:advanced_jukebox_upgrade | wrapped | U = sophisticatedbackpacks:jukebox_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_jukebox_upgrade` |
| 3 | sophisticatedbackpacks:advanced_magnet_upgrade | wrapped | U = sophisticatedbackpacks:magnet_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_magnet_upgrade` |
| 3 | sophisticatedbackpacks:advanced_mob_catcher_upgrade | wrapped | U = sophisticatedbackpacks:mob_catcher_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_mob_catcher_upgrade` |
| 3 | sophisticatedbackpacks:advanced_pickup_upgrade | wrapped | U = sophisticatedbackpacks:pickup_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_pickup_upgrade` |
| 4 | sophisticatedbackpacks:advanced_pump_upgrade | wrapped | U = sophisticatedbackpacks:pump_upgrade, F = kubejs:tk3_arcane_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_pump_upgrade` |
| 3 | sophisticatedbackpacks:advanced_refill_upgrade | wrapped | U = sophisticatedbackpacks:refill_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_refill_upgrade` |
| 3 | sophisticatedbackpacks:advanced_restock_upgrade | wrapped | U = sophisticatedbackpacks:restock_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_restock_upgrade` |
| 3 | sophisticatedbackpacks:advanced_tool_swapper_upgrade | wrapped | U = sophisticatedbackpacks:tool_swapper_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_tool_swapper_upgrade` |
| 3 | sophisticatedbackpacks:advanced_void_upgrade | wrapped | U = sophisticatedbackpacks:void_upgrade, F = kubejs:tk3_precision_machine, R = minecraft:redstone ·  R  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_void_upgrade` |
| 3 | sophisticatedbackpacks:stack_upgrade_tier_1 | wrapped | U = sophisticatedbackpacks:upgrade_base, F = kubejs:tk3_precision_machine, M = minecraft:gold_ingot ·  M  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_stack_upgrade_tier_1` |
| 5 | sophisticatedbackpacks:stack_upgrade_tier_2 | wrapped | U = sophisticatedbackpacks:stack_upgrade_tier_1, F = mekanism:steel_casing, M = mekanism:alloy_infused ·  M  /  U  /  F  | `kubejs:tk3/storage/sophisticatedbackpacks_stack_upgrade_tier_2` |
| 2 | sophisticatedstorage:copper_chest | wrapped | S = sophisticatedstorage:chest, F = kubejs:tk3_hydraulic_machine, M = minecraft:copper_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_copper_chest` |
| 2 | sophisticatedstorage:iron_chest | wrapped | S = sophisticatedstorage:copper_chest, F = kubejs:tk3_hydraulic_machine, M = create:iron_sheet · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_iron_chest` |
| 3 | sophisticatedstorage:gold_chest | wrapped | S = sophisticatedstorage:iron_chest, F = kubejs:tk3_precision_machine, M = minecraft:gold_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_gold_chest` |
| 5 | sophisticatedstorage:diamond_chest | wrapped | S = sophisticatedstorage:gold_chest, F = mekanism:steel_casing, M = minecraft:diamond · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_diamond_chest` |
| 2 | sophisticatedstorage:copper_barrel | wrapped | S = sophisticatedstorage:barrel, F = kubejs:tk3_hydraulic_machine, M = minecraft:copper_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_copper_barrel` |
| 2 | sophisticatedstorage:iron_barrel | wrapped | S = sophisticatedstorage:copper_barrel, F = kubejs:tk3_hydraulic_machine, M = create:iron_sheet · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_iron_barrel` |
| 3 | sophisticatedstorage:gold_barrel | wrapped | S = sophisticatedstorage:iron_barrel, F = kubejs:tk3_precision_machine, M = minecraft:gold_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_gold_barrel` |
| 5 | sophisticatedstorage:diamond_barrel | wrapped | S = sophisticatedstorage:gold_barrel, F = mekanism:steel_casing, M = minecraft:diamond · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_diamond_barrel` |
| 2 | sophisticatedstorage:limited_copper_barrel_1 | wrapped | S = sophisticatedstorage:limited_barrel_1, F = kubejs:tk3_hydraulic_machine, M = minecraft:copper_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_1` |
| 2 | sophisticatedstorage:limited_iron_barrel_1 | wrapped | S = sophisticatedstorage:limited_copper_barrel_1, F = kubejs:tk3_hydraulic_machine, M = create:iron_sheet · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_1` |
| 3 | sophisticatedstorage:limited_gold_barrel_1 | wrapped | S = sophisticatedstorage:limited_iron_barrel_1, F = kubejs:tk3_precision_machine, M = minecraft:gold_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_1` |
| 5 | sophisticatedstorage:limited_diamond_barrel_1 | wrapped | S = sophisticatedstorage:limited_gold_barrel_1, F = mekanism:steel_casing, M = minecraft:diamond · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_1` |
| 2 | sophisticatedstorage:limited_copper_barrel_2 | wrapped | S = sophisticatedstorage:limited_barrel_2, F = kubejs:tk3_hydraulic_machine, M = minecraft:copper_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_2` |
| 2 | sophisticatedstorage:limited_iron_barrel_2 | wrapped | S = sophisticatedstorage:limited_copper_barrel_2, F = kubejs:tk3_hydraulic_machine, M = create:iron_sheet · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_2` |
| 3 | sophisticatedstorage:limited_gold_barrel_2 | wrapped | S = sophisticatedstorage:limited_iron_barrel_2, F = kubejs:tk3_precision_machine, M = minecraft:gold_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_2` |
| 5 | sophisticatedstorage:limited_diamond_barrel_2 | wrapped | S = sophisticatedstorage:limited_gold_barrel_2, F = mekanism:steel_casing, M = minecraft:diamond · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_2` |
| 2 | sophisticatedstorage:limited_copper_barrel_3 | wrapped | S = sophisticatedstorage:limited_barrel_3, F = kubejs:tk3_hydraulic_machine, M = minecraft:copper_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_3` |
| 2 | sophisticatedstorage:limited_iron_barrel_3 | wrapped | S = sophisticatedstorage:limited_copper_barrel_3, F = kubejs:tk3_hydraulic_machine, M = create:iron_sheet · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_3` |
| 3 | sophisticatedstorage:limited_gold_barrel_3 | wrapped | S = sophisticatedstorage:limited_iron_barrel_3, F = kubejs:tk3_precision_machine, M = minecraft:gold_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_3` |
| 5 | sophisticatedstorage:limited_diamond_barrel_3 | wrapped | S = sophisticatedstorage:limited_gold_barrel_3, F = mekanism:steel_casing, M = minecraft:diamond · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_3` |
| 2 | sophisticatedstorage:limited_copper_barrel_4 | wrapped | S = sophisticatedstorage:limited_barrel_4, F = kubejs:tk3_hydraulic_machine, M = minecraft:copper_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_4` |
| 2 | sophisticatedstorage:limited_iron_barrel_4 | wrapped | S = sophisticatedstorage:limited_copper_barrel_4, F = kubejs:tk3_hydraulic_machine, M = create:iron_sheet · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_4` |
| 3 | sophisticatedstorage:limited_gold_barrel_4 | wrapped | S = sophisticatedstorage:limited_iron_barrel_4, F = kubejs:tk3_precision_machine, M = minecraft:gold_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_4` |
| 5 | sophisticatedstorage:limited_diamond_barrel_4 | wrapped | S = sophisticatedstorage:limited_gold_barrel_4, F = mekanism:steel_casing, M = minecraft:diamond · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_4` |
| 2 | sophisticatedstorage:copper_shulker_box | wrapped | S = sophisticatedstorage:shulker_box, F = kubejs:tk3_hydraulic_machine, M = minecraft:copper_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_copper_shulker_box` |
| 2 | sophisticatedstorage:iron_shulker_box | wrapped | S = sophisticatedstorage:copper_shulker_box, F = kubejs:tk3_hydraulic_machine, M = create:iron_sheet · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_iron_shulker_box` |
| 3 | sophisticatedstorage:gold_shulker_box | wrapped | S = sophisticatedstorage:iron_shulker_box, F = kubejs:tk3_precision_machine, M = minecraft:gold_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_gold_shulker_box` |
| 5 | sophisticatedstorage:diamond_shulker_box | wrapped | S = sophisticatedstorage:gold_shulker_box, F = mekanism:steel_casing, M = minecraft:diamond · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedstorage_diamond_shulker_box` |
| 2 | sophisticatedbackpacks:copper_backpack | wrapped | S = sophisticatedbackpacks:backpack, F = kubejs:tk3_hydraulic_machine, M = minecraft:copper_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedbackpacks_copper_backpack` |
| 2 | sophisticatedbackpacks:iron_backpack | wrapped | S = sophisticatedbackpacks:copper_backpack, F = kubejs:tk3_hydraulic_machine, M = create:iron_sheet · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedbackpacks_iron_backpack` |
| 3 | sophisticatedbackpacks:gold_backpack | wrapped | S = sophisticatedbackpacks:iron_backpack, F = kubejs:tk3_precision_machine, M = minecraft:gold_ingot · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedbackpacks_gold_backpack` |
| 5 | sophisticatedbackpacks:diamond_backpack | wrapped | S = sophisticatedbackpacks:gold_backpack, F = mekanism:steel_casing, M = minecraft:diamond · MFM / MSM / MMM | `kubejs:tk3/storage/sophisticatedbackpacks_diamond_backpack` |
| 2 | sophisticatedstorage:basic_to_copper_tier_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_hydraulic_machine, M = minecraft:copper_ingot · MMM / MFM / MBM | `kubejs:tk3/storage/sophisticatedstorage_basic_to_copper_tier_upgrade` |
| 2 | sophisticatedstorage:copper_to_iron_tier_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_hydraulic_machine, M = create:iron_sheet · MMM / MFM / MBM | `kubejs:tk3/storage/sophisticatedstorage_copper_to_iron_tier_upgrade` |
| 3 | sophisticatedstorage:iron_to_gold_tier_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = kubejs:tk3_precision_machine, M = minecraft:gold_ingot · MMM / MFM / MBM | `kubejs:tk3/storage/sophisticatedstorage_iron_to_gold_tier_upgrade` |
| 5 | sophisticatedstorage:gold_to_diamond_tier_upgrade | Shaped crafting | B = sophisticatedstorage:upgrade_base, F = mekanism:steel_casing, M = minecraft:diamond · MMM / MFM / MBM | `kubejs:tk3/storage/sophisticatedstorage_gold_to_diamond_tier_upgrade` |
| 3 | sophisticatedstorage:controller | Shapeless crafting | kubejs:tk3_precision_machine + minecraft:comparator + minecraft:chest | `kubejs:tk3/storage/sophisticatedstorage_controller` |
| 3 | sophisticatedstorage:storage_link | Shapeless crafting | create:precision_mechanism + sophisticatedstorage:upgrade_base + minecraft:ender_pearl | `kubejs:tk3/storage/sophisticatedstorage_storage_link` |
| 3 | sophisticatedstorage:storage_input | Shapeless crafting | create:precision_mechanism + sophisticatedstorage:upgrade_base + minecraft:hopper | `kubejs:tk3/storage/sophisticatedstorage_storage_input` |
| 3 | sophisticatedstorage:storage_output | Shapeless crafting | create:precision_mechanism + sophisticatedstorage:upgrade_base + create:brass_funnel | `kubejs:tk3/storage/sophisticatedstorage_storage_output` |
| 3 | sophisticatedstorage:storage_io | Shapeless crafting | create:precision_mechanism + sophisticatedstorage:upgrade_base + create:brass_tunnel | `kubejs:tk3/storage/sophisticatedstorage_storage_io` |

## Late Layers

| Tier | Output | Method | Inputs | Recipe ID |
|---|---|---|---|---|
| 5 | 2x mekanism:dust_gold | mek enriching | minecraft:raw_gold | `kubejs:tk3/late_layers/mekanism_dust_gold` |
| 5 | 2x mekanism:dust_osmium | mek enriching | mekanism:raw_osmium | `kubejs:tk3/late_layers/mekanism_dust_osmium` |
| 5 | 2x mekanism:dust_tin | mek enriching | mekanism:raw_tin | `kubejs:tk3/late_layers/mekanism_dust_tin` |
| 5 | 2x mekanism:dust_lead | mek enriching | mekanism:raw_lead | `kubejs:tk3/late_layers/mekanism_dust_lead` |

## Create

| Tier | Output | Method | Inputs | Recipe ID |
|---|---|---|---|---|
| 1 | create:andesite_casing | Shapeless crafting | #c:stripped_logs + create:andesite_alloy | `kubejs:tk3/create/andesite_casing_manual` |
| 1 | create:andesite_casing | deploying | #c:stripped_logs + create:andesite_alloy | `kubejs:tk3/create/andesite_casing_automated` |
| 2 | create:copper_casing | Shapeless crafting | #c:stripped_logs + minecraft:copper_ingot | `kubejs:tk3/create/copper_casing_manual` |
| 2 | create:copper_casing | deploying | #c:stripped_logs + minecraft:copper_ingot | `kubejs:tk3/create/copper_casing_automated` |
| 3 | create:brass_casing | Shapeless crafting | #c:stripped_logs + create:brass_ingot | `kubejs:tk3/create/brass_casing_manual` |
| 3 | create:brass_casing | deploying | #c:stripped_logs + create:brass_ingot | `kubejs:tk3/create/brass_casing_automated` |
| 1 | create:iron_sheet | pressing | minecraft:iron_ingot | `kubejs:tk3/create/iron_sheet` |
| 2 | create:copper_sheet | pressing | minecraft:copper_ingot | `kubejs:tk3/create/copper_sheet` |
| 1 | create:golden_sheet | pressing | minecraft:gold_ingot | `kubejs:tk3/create/golden_sheet` |
| 3 | create:brass_sheet | pressing | create:brass_ingot | `kubejs:tk3/create/brass_sheet` |
| 3 | 2x create:rose_quartz | mixing | 2x minecraft:quartz + 4x minecraft:redstone | `kubejs:tk3/create/rose_quartz_bulk` |
| 3 | create:rose_quartz | Shapeless crafting | minecraft:quartz + 4x minecraft:redstone | `kubejs:tk3/create/rose_quartz` |
| 3 | create:polished_rose_quartz | Sandpaper polishing | create:rose_quartz | `kubejs:tk3/create/polished_rose_quartz` |
| 3 | 2x create:electron_tube | Shaped crafting | Q = create:polished_rose_quartz, R = minecraft:redstone, I = create:iron_sheet · QRQ /  I  | `kubejs:tk3/create/electron_tube` |
| 3 | create:electron_tube | deploying | create:iron_sheet + create:polished_rose_quartz | `kubejs:tk3/create/electron_tube_automated` |
| 1 | create:sand_paper | Shapeless crafting | minecraft:paper + minecraft:sand | `kubejs:tk3/create/sand_paper` |
| 1 | create:red_sand_paper | Shapeless crafting | minecraft:paper + minecraft:red_sand | `kubejs:tk3/create/red_sand_paper` |
| 1 | create:andesite_alloy_block | Shaped crafting | I = create:andesite_alloy · III / III / III | `kubejs:tk3/create/andesite_alloy_block_packing` |
| 1 | 9x create:andesite_alloy | Shapeless crafting | create:andesite_alloy_block | `kubejs:tk3/create/andesite_alloy_unpacking` |
| 1 | create:zinc_block | Shaped crafting | I = create:zinc_ingot · III / III / III | `kubejs:tk3/create/zinc_block_packing` |
| 1 | 9x create:zinc_ingot | Shapeless crafting | create:zinc_block | `kubejs:tk3/create/zinc_ingot_unpacking` |
| 1 | create:zinc_ingot | Shaped crafting | N = create:zinc_nugget · NNN / NNN / NNN | `kubejs:tk3/create/zinc_ingot_from_nuggets` |
| 1 | 9x create:zinc_nugget | Shapeless crafting | create:zinc_ingot | `kubejs:tk3/create/zinc_nugget_from_ingot` |
| 2 | minecraft:copper_ingot | Shaped crafting | N = create:copper_nugget · NNN / NNN / NNN | `kubejs:tk3/create/copper_ingot_from_nuggets` |
| 2 | 9x create:copper_nugget | Shapeless crafting | minecraft:copper_ingot | `kubejs:tk3/create/copper_nugget_from_ingot` |
| 3 | create:brass_block | Shaped crafting | I = create:brass_ingot · III / III / III | `kubejs:tk3/create/brass_block_packing` |
| 3 | 9x create:brass_ingot | Shapeless crafting | create:brass_block | `kubejs:tk3/create/brass_ingot_unpacking` |
| 3 | create:brass_ingot | Shaped crafting | N = create:brass_nugget · NNN / NNN / NNN | `kubejs:tk3/create/brass_ingot_from_nuggets` |
| 3 | 9x create:brass_nugget | Shapeless crafting | create:brass_ingot | `kubejs:tk3/create/brass_nugget_from_ingot` |
| 1 | create:zinc_ingot | Furnace smelting | #c:raw_materials/zinc | `kubejs:tk3/create/zinc_smelting_raw_ore` |
| 1 | create:zinc_ingot | Furnace smelting | #c:ores/zinc | `kubejs:tk3/create/zinc_smelting_ore` |
| 3 | create:zinc_ingot | Furnace smelting | create:crushed_raw_zinc | `kubejs:tk3/create/zinc_smelting_crushed` |
| 1 | create:zinc_ingot | Blast furnace | #c:raw_materials/zinc | `kubejs:tk3/create/zinc_blasting_raw_ore` |
| 1 | create:zinc_ingot | Blast furnace | #c:ores/zinc | `kubejs:tk3/create/zinc_blasting_ore` |
| 3 | create:zinc_ingot | Blast furnace | create:crushed_raw_zinc | `kubejs:tk3/create/zinc_blasting_crushed` |
| 1 | create:wrench | Shaped crafting | I = create:iron_sheet, C = create:cogwheel, S = minecraft:stick · II  / IC  /  S  | `kubejs:tk3/create/wrench` |
| 1 | create:goggles | Shaped crafting | G = minecraft:glass, S = minecraft:string, A = create:andesite_alloy · GSG /  A  | `kubejs:tk3/create/goggles` |
| 1 | create:whisk | Shaped crafting | A = create:andesite_alloy, I = create:iron_sheet ·  A  / IAI /  I  | `kubejs:tk3/create/whisk` |
| 3 | create:brass_hand | Shaped crafting | A = create:andesite_alloy, B = create:brass_sheet ·  A  / BBB /  B  | `kubejs:tk3/create/brass_hand` |
| 1 | 4x create:piston_extension_pole | Shaped crafting | S = minecraft:stick, A = create:andesite_alloy · S / A / S | `kubejs:tk3/create/piston_extension_pole` |
| 1 | 4x create:gantry_shaft | Shaped crafting | C = create:cogwheel, S = create:shaft · C / S / C | `kubejs:tk3/create/gantry_shaft` |
| 1 | 8x create:metal_girder | Shaped crafting | I = create:iron_sheet, A = create:andesite_alloy · III / AAA | `kubejs:tk3/create/metal_girder` |
| 1 | 4x create:metal_bracket | Shapeless crafting | create:iron_sheet + create:andesite_alloy | `kubejs:tk3/create/metal_bracket` |
| 1 | 4x create:wooden_bracket | Shapeless crafting | #minecraft:planks + minecraft:stick | `kubejs:tk3/create/wooden_bracket` |
| 1 | 2x create:white_sail | Shaped crafting | W = #minecraft:wool, S = minecraft:stick, A = create:andesite_alloy · WS / SA | `kubejs:tk3/create/white_sail` |
| 1 | create:sail_frame | Shapeless crafting | create:white_sail | `kubejs:tk3/create/sail_frame` |
| 1 | create:white_sail | Shapeless crafting | create:sail_frame + #minecraft:wool | `kubejs:tk3/create/sail_from_frame` |
| 1 | create:super_glue | Shaped crafting | S = minecraft:slime_ball, I = create:iron_sheet, N = minecraft:iron_nugget · SI / NS | `kubejs:tk3/create/super_glue` |
| 1 | create:sticky_mechanical_piston | deploying | create:mechanical_piston + minecraft:slime_ball | `kubejs:tk3/create/sticky_mechanical_piston` |
| 1 | create:mechanical_piston | Shapeless crafting | create:sticky_mechanical_piston | `kubejs:tk3/create/piston_unstick` |
| 1 | create:secondary_linear_chassis | Shapeless crafting | create:linear_chassis | `kubejs:tk3/create/secondary_linear_chassis_conversion` |
| 1 | create:linear_chassis | Shapeless crafting | create:secondary_linear_chassis | `kubejs:tk3/create/linear_chassis_conversion` |
| 1 | create:stressometer | Shapeless crafting | create:speedometer | `kubejs:tk3/create/stressometer_conversion` |
| 1 | create:speedometer | Shapeless crafting | create:stressometer | `kubejs:tk3/create/speedometer_conversion` |
| 1 | create:vertical_gearbox | Shapeless crafting | create:gearbox | `kubejs:tk3/create/vertical_gearbox_conversion` |
| 1 | create:gearbox | Shapeless crafting | create:vertical_gearbox | `kubejs:tk3/create/gearbox_conversion` |
| 1 | create:hand_crank | Shapeless crafting | kubejs:tk3_kinetic_machine + minecraft:stick | `kubejs:tk3/create/hand_crank` |
| 1 | create:turntable | Shapeless crafting | kubejs:tk3_kinetic_machine + create:cogwheel | `kubejs:tk3/create/turntable` |
| 1 | 2x create:sticker | Shapeless crafting | kubejs:tk3_kinetic_machine + minecraft:slime_ball | `kubejs:tk3/create/sticker` |
| 2 | 2x create:item_vault | Shapeless crafting | kubejs:tk3_hydraulic_machine + minecraft:chest | `kubejs:tk3/create/item_vault` |
| 2 | create:flywheel | Shapeless crafting | kubejs:tk3_hydraulic_machine + create:cogwheel | `kubejs:tk3/create/flywheel` |
| 2 | 2x create:nozzle | Shapeless crafting | kubejs:tk3_hydraulic_machine + create:iron_sheet | `kubejs:tk3/create/nozzle` |
| 3 | create:clockwork_bearing | Shapeless crafting | kubejs:tk3_precision_machine + minecraft:clock | `kubejs:tk3/create/clockwork_bearing` |
| 3 | create:mechanical_roller | Shapeless crafting | kubejs:tk3_precision_machine + create:crushing_wheel | `kubejs:tk3/create/mechanical_roller` |
| 3 | 2x create:chain_conveyor | Shapeless crafting | kubejs:tk3_precision_machine + minecraft:chain | `kubejs:tk3/create/chain_conveyor` |
| 3 | 2x create:factory_gauge | Shapeless crafting | kubejs:tk3_precision_machine + create:electron_tube | `kubejs:tk3/create/factory_gauge` |
| 3 | 2x create:redstone_requester | Shapeless crafting | kubejs:tk3_precision_machine + create:stock_link | `kubejs:tk3/create/redstone_requester` |
| 3 | create:linked_controller | Shapeless crafting | kubejs:tk3_precision_machine + create:redstone_link | `kubejs:tk3/create/linked_controller` |
| 3 | create:schematicannon | Shapeless crafting | kubejs:tk3_precision_machine + minecraft:dispenser | `kubejs:tk3/create/schematicannon` |
| 2 | create:empty_blaze_burner | Shaped crafting | I = create:iron_sheet, N = minecraft:netherrack ·  I  / INI /  I  | `kubejs:tk3/create/empty_blaze_burner` |
| 2 | create:copper_diving_helmet | Shaped crafting | C = create:copper_sheet, G = minecraft:glass · CCC / G G | `kubejs:tk3/create/copper_diving_helmet` |
| 2 | create:copper_diving_boots | Shaped crafting | C = create:copper_sheet, I = create:iron_sheet · C C / I I | `kubejs:tk3/create/copper_diving_boots` |
| 1 | create:filter | Shaped crafting | I = minecraft:iron_nugget, W = #minecraft:wool · IWI | `kubejs:tk3/create/filter` |
| 3 | create:attribute_filter | Shaped crafting | B = create:brass_sheet, F = create:filter, R = create:rose_quartz · BFB /  R  | `kubejs:tk3/create/attribute_filter` |
| 3 | create:package_filter | Shaped crafting | P = minecraft:paper, F = create:filter, R = create:electron_tube · PFP /  R  | `kubejs:tk3/create/package_filter` |
| 3 | 2x create:pulse_repeater | Shaped crafting | R = minecraft:redstone, B = create:brass_sheet, E = minecraft:redstone_torch, I = create:iron_sheet ·  R  / BEB /  I  | `kubejs:tk3/create/pulse_repeater` |
| 3 | 2x create:pulse_extender | Shaped crafting | R = minecraft:redstone, B = create:brass_sheet, E = minecraft:comparator, I = create:iron_sheet ·  R  / BEB /  I  | `kubejs:tk3/create/pulse_extender` |
| 3 | 2x create:pulse_timer | Shaped crafting | R = minecraft:redstone, B = create:brass_sheet, E = minecraft:clock, I = create:iron_sheet ·  R  / BEB /  I  | `kubejs:tk3/create/pulse_timer` |
| 3 | 2x create:powered_latch | Shaped crafting | R = minecraft:redstone, B = create:brass_sheet, E = minecraft:lever, I = create:iron_sheet ·  R  / BEB /  I  | `kubejs:tk3/create/powered_latch` |
| 3 | 2x create:powered_toggle_latch | Shaped crafting | R = minecraft:redstone, B = create:brass_sheet, E = minecraft:lever, I = create:iron_sheet ·  R  / BEB /  I  | `kubejs:tk3/create/powered_toggle_latch` |
| 3 | 4x create:redstone_contact | Shaped crafting | R = minecraft:redstone, B = create:brass_sheet, E = minecraft:redstone, I = create:iron_sheet ·  R  / BEB /  I  | `kubejs:tk3/create/redstone_contact` |
| 3 | 4x create:nixie_tube | Shaped crafting | R = minecraft:redstone, B = create:brass_sheet, E = minecraft:glass, I = create:iron_sheet ·  R  / BEB /  I  | `kubejs:tk3/create/nixie_tube` |
| 3 | 2x create:rose_quartz_lamp | Shaped crafting | R = minecraft:redstone, B = create:brass_sheet, E = minecraft:glowstone_dust, I = create:iron_sheet ·  R  / BEB /  I  | `kubejs:tk3/create/rose_quartz_lamp` |
| 3 | create:transmitter | Shaped crafting | L = minecraft:lightning_rod, C = create:copper_sheet, R = minecraft:redstone ·  L  / CCC /  R  | `kubejs:tk3/create/transmitter` |
| 3 | 8x create:track | deploying | minecraft:rail + create:brass_sheet | `kubejs:tk3/create/track` |
| 3 | 4x create:controller_rail | Shaped crafting | I = create:iron_sheet, R = minecraft:redstone, A = create:andesite_alloy, S = create:shaft · IRI / ASA / IRI | `kubejs:tk3/create/controller_rail` |
| 3 | create:schedule | Shaped crafting | P = minecraft:paper, E = create:electron_tube ·  P  / PEP /  P  | `kubejs:tk3/create/schedule` |
| 1 | 2x create:minecart_coupling | Shaped crafting | I = minecraft:iron_nugget, A = create:andesite_alloy, S = minecraft:slime_ball ·  I  / ASA /  I  | `kubejs:tk3/create/minecart_coupling` |
| 3 | 4x create:crafter_slot_cover | Shapeless crafting | create:brass_sheet + minecraft:paper | `kubejs:tk3/create/crafter_slot_cover` |
| 3 | 2x create:item_hatch | Shapeless crafting | create:brass_sheet + minecraft:iron_trapdoor | `kubejs:tk3/create/item_hatch` |
| 1 | create:clipboard | Shaped crafting | A = create:andesite_alloy, G = #minecraft:planks, P = minecraft:paper · A / P / G | `kubejs:tk3/create/crafting_appliances_clipboard` |
| 1 | create:crafting_blueprint | Shapeless crafting | minecraft:painting + minecraft:crafting_table | `kubejs:tk3/create/crafting_appliances_crafting_blueprint` |
| 1 | create:empty_schematic | Shapeless crafting | minecraft:paper + #c:dyes/light_blue | `kubejs:tk3/create/crafting_schematics_empty_schematic` |
| 1 | create:schematic_and_quill | Shapeless crafting | create:empty_schematic + #c:feathers | `kubejs:tk3/create/crafting_schematics_schematic_and_quill` |
| 1 | create:schematic_table | Shaped crafting | S = minecraft:smooth_stone, W = #minecraft:wooden_slabs · WWW /  S  /  S  | `kubejs:tk3/create/crafting_schematics_schematic_table` |
| 1 | create:placard | Shapeless crafting | minecraft:item_frame + #c:plates/brass | `kubejs:tk3/create/crafting_kinetics_placard` |
| 1 | create:desk_bell | Shapeless crafting | create:andesite_casing + #c:plates/gold | `kubejs:tk3/create/crafting_logistics_desk_bell` |
| 3 | create:peculiar_bell | Shaped crafting | I = #c:storage_blocks/brass, P = #c:plates/brass · I / P | `kubejs:tk3/create/crafting_curiosities_peculiar_bell` |
| 1 | create:cuckoo_clock | Shaped crafting | A = minecraft:clock, C = create:andesite_casing, S = #minecraft:planks · S / C / A | `kubejs:tk3/create/crafting_kinetics_cuckoo_clock` |
| 1 | create:dough | Shapeless crafting | #c:flours/wheat + minecraft:water_bucket | `kubejs:tk3/create/crafting_appliances_dough` |
| 1 | 2x create:tree_fertilizer | Shapeless crafting | 2x #minecraft:small_flowers + minecraft:bone_meal + minecraft:clay_ball | `kubejs:tk3/create/tree_fertilizer` |
| 1 | 4x create:dough | mixing | 4x create:wheat_flour + 1000 mB minecraft:water | `kubejs:tk3/create/dough_bulk` |
| 1 | 4x create:cardboard | compacting | 2x minecraft:paper + 250 mB minecraft:water | `kubejs:tk3/create/cardboard` |
| 1 | create:cardboard_block | Shaped crafting | C = create:cardboard · CC / CC | `kubejs:tk3/create/cardboard_block` |
| 1 | 4x create:cardboard | Shapeless crafting | create:cardboard_block | `kubejs:tk3/create/cardboard_unpacking` |
| 1 | create:filter | Shapeless crafting | create:filter | `kubejs:tk3/create/filter_clear` |
| 1 | create:clipboard | Shapeless crafting | create:clipboard | `kubejs:tk3/create/clipboard_clear` |
| 3 | create:attribute_filter | Shapeless crafting | create:attribute_filter | `kubejs:tk3/create/attribute_filter_clear` |
| 3 | create:package_filter | Shapeless crafting | create:package_filter | `kubejs:tk3/create/package_filter_clear` |
| 3 | create:schedule | Shapeless crafting | create:schedule | `kubejs:tk3/create/schedule_clear` |
| 3 | create:factory_gauge | Shapeless crafting | create:factory_gauge | `kubejs:tk3/create/factory_gauge_clear` |
| 3 | create:redstone_requester | Shapeless crafting | create:redstone_requester | `kubejs:tk3/create/redstone_requester_clear` |
| 3 | create:stock_link | Shapeless crafting | create:stock_link | `kubejs:tk3/create/stock_link_clear` |
| 3 | create:stock_ticker | Shapeless crafting | create:stock_ticker | `kubejs:tk3/create/stock_ticker_clear` |

