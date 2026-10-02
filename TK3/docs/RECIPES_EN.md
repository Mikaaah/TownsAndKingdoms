# Recipe catalogue

All authored recipes. Tool inputs in sequences are held by a deployer and lose durability; other deployed inputs are consumed.

## Tier 1

| Output | Method | Ordered inputs | Conditions | Recipe ID |
|---|---|---|---|---|
| 2x architects_palette:algal_blend | shapeless | minecraft:kelp → minecraft:clay_ball | — | `kubejs:tk3/tier_1/algal_blend` |
| 4x architects_palette:algal_blend | mixing | minecraft:kelp → minecraft:clay_ball | — | `kubejs:tk3/tier_1/algal_blend_bulk` |
| 2x create:andesite_alloy | shapeless | minecraft:andesite → architects_palette:algal_blend | — | `kubejs:tk3/tier_1/andesite_alloy` |
| 4x create:andesite_alloy | mixing | minecraft:andesite → architects_palette:algal_blend | — | `kubejs:tk3/tier_1/andesite_alloy_bulk` |
| kubejs:tk3_rotation_mechanism | shaped | A: create:andesite_alloy → S: #minecraft:wooden_slabs | — | `kubejs:tk3/tier_1/tk3_rotation_mechanism` |
| kubejs:tk3_rotation_mechanism | sequence | #minecraft:wooden_slabs → create:andesite_alloy → create:andesite_alloy → betterend:iron_hammer | Final held tool: betterend:iron_hammer; 1 durability/use; unbreakable supported; One loop, guaranteed result | `kubejs:tk3/tier_1/rotation_mechanism_automated` |
| 3x create:water_wheel | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/water_wheel` |
| create:large_water_wheel | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/large_water_wheel` |
| create:mechanical_press | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/mechanical_press` |
| create:mechanical_mixer | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/mechanical_mixer` |
| create:encased_fan | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/encased_fan` |
| create:mechanical_saw | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/mechanical_saw` |
| create:mechanical_drill | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/mechanical_drill` |
| create:mechanical_bearing | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/mechanical_bearing` |
| create:mechanical_harvester | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/mechanical_harvester` |
| create:deployer | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/deployer` |
| 2x create:basin | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/basin` |
| 4x create:andesite_funnel | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/andesite_funnel` |
| create:portable_storage_interface | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/portable_storage_interface` |
| minecraft:gravel | milling | minecraft:cobblestone | — | `kubejs:tk3/tier_1/cobble_to_gravel` |
| minecraft:clay_ball | splashing | minecraft:sand | — | `kubejs:tk3/tier_1/renewable_clay` |
| 8x create:shaft | shapeless | create:andesite_alloy → minecraft:stick | — | `kubejs:tk3/tier_1/shaft` |
| 2x create:cogwheel | shapeless | create:shaft → #minecraft:planks | — | `kubejs:tk3/tier_1/cogwheel` |
| create:large_cogwheel | shapeless | 2x create:cogwheel → #minecraft:planks | — | `kubejs:tk3/tier_1/large_cogwheel` |
| 3x create:belt_connector | shapeless | 6x minecraft:dried_kelp | — | `kubejs:tk3/tier_1/belt_connector` |
| create:propeller | shaped | S: create:iron_sheet → A: create:andesite_alloy | — | `kubejs:tk3/tier_1/propeller` |
| create:gearbox | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/gearbox` |
| create:vertical_gearbox | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/vertical_gearbox` |
| create:clutch | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/clutch` |
| create:gearshift | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/gearshift` |
| 3x create:encased_chain_drive | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/encased_chain_drive` |
| create:adjustable_chain_gearshift | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/adjustable_chain_gearshift` |
| create:mechanical_plough | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/mechanical_plough` |
| create:rope_pulley | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/rope_pulley` |
| create:mechanical_piston | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/mechanical_piston` |
| create:cart_assembler | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/cart_assembler` |
| create:windmill_bearing | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/windmill_bearing` |
| create:gantry_carriage | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/gantry_carriage` |
| create:weighted_ejector | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/weighted_ejector` |
| 4x create:linear_chassis | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/linear_chassis` |
| 4x create:radial_chassis | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/radial_chassis` |
| 4x create:andesite_tunnel | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/andesite_tunnel` |
| 2x create:depot | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/depot` |
| 6x create:chute | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/chute` |
| create:speedometer | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/speedometer` |
| create:analog_lever | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/tier_1/analog_lever` |
| kubejs:tk3_kinetic_machine | shaped | M: kubejs:tk3_rotation_mechanism → C: create:andesite_casing | — | `kubejs:tk3/frames/kinetic_manual` |
| kubejs:tk3_kinetic_machine | deploying | create:andesite_casing → kubejs:tk3_rotation_mechanism | — | `kubejs:tk3/frames/kinetic_automated` |
| create:millstone | stonecutting | kubejs:tk3_kinetic_machine | — | `kubejs:tk3/frames/create_millstone` |
| minecraft:clay_ball | milling | minecraft:andesite | — | `kubejs:tk3/geology/milling_andesite` |
| 2x minecraft:clay_ball | crushing | minecraft:andesite | — | `kubejs:tk3/geology/crushing_andesite` |
| minecraft:quartz | milling | minecraft:diorite | — | `kubejs:tk3/geology/milling_diorite` |
| 2x minecraft:quartz | crushing | minecraft:diorite | — | `kubejs:tk3/geology/crushing_diorite` |
| minecraft:lapis_lazuli | milling | minecraft:granite | — | `kubejs:tk3/geology/milling_granite` |
| 2x minecraft:lapis_lazuli | crushing | minecraft:granite | — | `kubejs:tk3/geology/crushing_granite` |
| minecraft:bone_meal | milling | create:limestone | — | `kubejs:tk3/geology/milling_limestone` |
| 2x minecraft:bone_meal | crushing | create:limestone | — | `kubejs:tk3/geology/crushing_limestone` |
| alexscaves:stripped_pewen_log | cutting | alexscaves:pewen_log | — | `kubejs:tk3/compat/strip_alexscaves_pewen_log` |
| 6x alexscaves:pewen_planks | cutting | alexscaves:stripped_pewen_log | — | `kubejs:tk3/compat/saw_alexscaves_pewen_log` |
| alexscaves:stripped_pewen_wood | cutting | alexscaves:pewen_wood | — | `kubejs:tk3/compat/strip_alexscaves_pewen_wood` |
| 6x alexscaves:pewen_planks | cutting | alexscaves:stripped_pewen_wood | — | `kubejs:tk3/compat/saw_alexscaves_pewen_wood` |
| alexscaves:stripped_thornwood_log | cutting | alexscaves:thornwood_log | — | `kubejs:tk3/compat/strip_alexscaves_thornwood_log` |
| 6x alexscaves:thornwood_planks | cutting | alexscaves:stripped_thornwood_log | — | `kubejs:tk3/compat/saw_alexscaves_thornwood_log` |
| alexscaves:stripped_thornwood_wood | cutting | alexscaves:thornwood_wood | — | `kubejs:tk3/compat/strip_alexscaves_thornwood_wood` |
| 6x alexscaves:thornwood_planks | cutting | alexscaves:stripped_thornwood_wood | — | `kubejs:tk3/compat/saw_alexscaves_thornwood_wood` |
| atmospheric:stripped_aspen_log | cutting | atmospheric:aspen_log | — | `kubejs:tk3/compat/strip_atmospheric_aspen_log` |
| 6x atmospheric:aspen_planks | cutting | atmospheric:stripped_aspen_log | — | `kubejs:tk3/compat/saw_atmospheric_aspen_log` |
| atmospheric:stripped_aspen_wood | cutting | atmospheric:aspen_wood | — | `kubejs:tk3/compat/strip_atmospheric_aspen_wood` |
| 6x atmospheric:aspen_planks | cutting | atmospheric:stripped_aspen_wood | — | `kubejs:tk3/compat/saw_atmospheric_aspen_wood` |
| atmospheric:stripped_grimwood_log | cutting | atmospheric:grimwood_log | — | `kubejs:tk3/compat/strip_atmospheric_grimwood_log` |
| 6x atmospheric:grimwood_planks | cutting | atmospheric:stripped_grimwood_log | — | `kubejs:tk3/compat/saw_atmospheric_grimwood_log` |
| atmospheric:stripped_kousa_log | cutting | atmospheric:kousa_log | — | `kubejs:tk3/compat/strip_atmospheric_kousa_log` |
| 6x atmospheric:kousa_planks | cutting | atmospheric:stripped_kousa_log | — | `kubejs:tk3/compat/saw_atmospheric_kousa_log` |
| atmospheric:stripped_kousa_wood | cutting | atmospheric:kousa_wood | — | `kubejs:tk3/compat/strip_atmospheric_kousa_wood` |
| 6x atmospheric:kousa_planks | cutting | atmospheric:stripped_kousa_wood | — | `kubejs:tk3/compat/saw_atmospheric_kousa_wood` |
| atmospheric:stripped_laurel_log | cutting | atmospheric:laurel_log | — | `kubejs:tk3/compat/strip_atmospheric_laurel_log` |
| 6x atmospheric:laurel_planks | cutting | atmospheric:stripped_laurel_log | — | `kubejs:tk3/compat/saw_atmospheric_laurel_log` |
| atmospheric:stripped_laurel_wood | cutting | atmospheric:laurel_wood | — | `kubejs:tk3/compat/strip_atmospheric_laurel_wood` |
| 6x atmospheric:laurel_planks | cutting | atmospheric:stripped_laurel_wood | — | `kubejs:tk3/compat/saw_atmospheric_laurel_wood` |
| atmospheric:stripped_morado_log | cutting | atmospheric:morado_log | — | `kubejs:tk3/compat/strip_atmospheric_morado_log` |
| 6x atmospheric:morado_planks | cutting | atmospheric:stripped_morado_log | — | `kubejs:tk3/compat/saw_atmospheric_morado_log` |
| atmospheric:stripped_morado_wood | cutting | atmospheric:morado_wood | — | `kubejs:tk3/compat/strip_atmospheric_morado_wood` |
| 6x atmospheric:morado_planks | cutting | atmospheric:stripped_morado_wood | — | `kubejs:tk3/compat/saw_atmospheric_morado_wood` |
| atmospheric:stripped_rosewood_log | cutting | atmospheric:rosewood_log | — | `kubejs:tk3/compat/strip_atmospheric_rosewood_log` |
| 6x atmospheric:rosewood_planks | cutting | atmospheric:stripped_rosewood_log | — | `kubejs:tk3/compat/saw_atmospheric_rosewood_log` |
| atmospheric:stripped_yucca_log | cutting | atmospheric:yucca_log | — | `kubejs:tk3/compat/strip_atmospheric_yucca_log` |
| 6x atmospheric:yucca_planks | cutting | atmospheric:stripped_yucca_log | — | `kubejs:tk3/compat/saw_atmospheric_yucca_log` |
| atmospheric:stripped_yucca_wood | cutting | atmospheric:yucca_wood | — | `kubejs:tk3/compat/strip_atmospheric_yucca_wood` |
| 6x atmospheric:yucca_planks | cutting | atmospheric:stripped_yucca_wood | — | `kubejs:tk3/compat/saw_atmospheric_yucca_wood` |
| autumnity:stripped_maple_log | cutting | autumnity:maple_log | — | `kubejs:tk3/compat/strip_autumnity_maple_log` |
| 6x autumnity:maple_planks | cutting | autumnity:stripped_maple_log | — | `kubejs:tk3/compat/saw_autumnity_maple_log` |
| autumnity:stripped_maple_wood | cutting | autumnity:maple_wood | — | `kubejs:tk3/compat/strip_autumnity_maple_wood` |
| 6x autumnity:maple_planks | cutting | autumnity:stripped_maple_wood | — | `kubejs:tk3/compat/saw_autumnity_maple_wood` |
| 6x betterend:dragon_tree_planks | cutting | betterend:dragon_tree_log | — | `kubejs:tk3/compat/saw_betterend_dragon_tree_log` |
| 6x betterend:end_lotus_planks | cutting | betterend:end_lotus_log | — | `kubejs:tk3/compat/saw_betterend_end_lotus_log` |
| 6x betterend:end_lotus_planks | cutting | betterend:end_lotus_stem | — | `kubejs:tk3/compat/saw_betterend_end_lotus_stem` |
| 6x betterend:helix_tree_planks | cutting | betterend:helix_tree_log | — | `kubejs:tk3/compat/saw_betterend_helix_tree_log` |
| 6x betterend:jellyshroom_planks | cutting | betterend:jellyshroom_log | — | `kubejs:tk3/compat/saw_betterend_jellyshroom_log` |
| 6x betterend:lacugrove_planks | cutting | betterend:lacugrove_log | — | `kubejs:tk3/compat/saw_betterend_lacugrove_log` |
| 6x betterend:lucernia_planks | cutting | betterend:lucernia_log | — | `kubejs:tk3/compat/saw_betterend_lucernia_log` |
| 6x betterend:mossy_glowshroom_planks | cutting | betterend:mossy_glowshroom_log | — | `kubejs:tk3/compat/saw_betterend_mossy_glowshroom_log` |
| 6x betterend:pythadendron_planks | cutting | betterend:pythadendron_log | — | `kubejs:tk3/compat/saw_betterend_pythadendron_log` |
| 6x betterend:tenanea_planks | cutting | betterend:tenanea_log | — | `kubejs:tk3/compat/saw_betterend_tenanea_log` |
| 6x betterend:umbrella_tree_planks | cutting | betterend:umbrella_tree_log | — | `kubejs:tk3/compat/saw_betterend_umbrella_tree_log` |
| 6x betternether:anchor_tree_planks | cutting | betternether:anchor_tree_log | — | `kubejs:tk3/compat/saw_betternether_anchor_tree_log` |
| 6x betternether:gloomwood_dark_planks | cutting | betternether:gloomwood_dark_log | — | `kubejs:tk3/compat/saw_betternether_gloomwood_dark_log` |
| 6x betternether:gloomwood_planks | cutting | betternether:gloomwood_log | — | `kubejs:tk3/compat/saw_betternether_gloomwood_log` |
| 6x betternether:gloomwood_transition_planks | cutting | betternether:gloomwood_transition_log | — | `kubejs:tk3/compat/saw_betternether_gloomwood_transition_log` |
| 6x betternether:mushroom_fir_planks | cutting | betternether:mushroom_fir_log | — | `kubejs:tk3/compat/saw_betternether_mushroom_fir_log` |
| 6x betternether:mushroom_fir_planks | cutting | betternether:mushroom_fir_stem | — | `kubejs:tk3/compat/saw_betternether_mushroom_fir_stem` |
| 6x betternether:nether_mushroom_planks | cutting | betternether:nether_mushroom_stem | — | `kubejs:tk3/compat/saw_betternether_nether_mushroom_stem` |
| 6x betternether:nether_reed_planks | cutting | betternether:nether_reed_stem | — | `kubejs:tk3/compat/saw_betternether_nether_reed_stem` |
| 6x betternether:nether_sakura_planks | cutting | betternether:nether_sakura_log | — | `kubejs:tk3/compat/saw_betternether_nether_sakura_log` |
| 6x betternether:rubeus_planks | cutting | betternether:rubeus_log | — | `kubejs:tk3/compat/saw_betternether_rubeus_log` |
| 6x betternether:stalagnate_planks | cutting | betternether:stalagnate_log | — | `kubejs:tk3/compat/saw_betternether_stalagnate_log` |
| 6x betternether:stalagnate_planks | cutting | betternether:stalagnate_stem | — | `kubejs:tk3/compat/saw_betternether_stalagnate_stem` |
| 6x betternether:wart_planks | cutting | betternether:wart_log | — | `kubejs:tk3/compat/saw_betternether_wart_log` |
| 6x betternether:willow_planks | cutting | betternether:willow_log | — | `kubejs:tk3/compat/saw_betternether_willow_log` |
| biomesoplenty:stripped_dead_log | cutting | biomesoplenty:dead_log | — | `kubejs:tk3/compat/strip_biomesoplenty_dead_log` |
| 6x biomesoplenty:dead_planks | cutting | biomesoplenty:stripped_dead_log | — | `kubejs:tk3/compat/saw_biomesoplenty_dead_log` |
| biomesoplenty:stripped_dead_wood | cutting | biomesoplenty:dead_wood | — | `kubejs:tk3/compat/strip_biomesoplenty_dead_wood` |
| 6x biomesoplenty:dead_planks | cutting | biomesoplenty:stripped_dead_wood | — | `kubejs:tk3/compat/saw_biomesoplenty_dead_wood` |
| biomesoplenty:stripped_empyreal_log | cutting | biomesoplenty:empyreal_log | — | `kubejs:tk3/compat/strip_biomesoplenty_empyreal_log` |
| 6x biomesoplenty:empyreal_planks | cutting | biomesoplenty:stripped_empyreal_log | — | `kubejs:tk3/compat/saw_biomesoplenty_empyreal_log` |
| biomesoplenty:stripped_empyreal_wood | cutting | biomesoplenty:empyreal_wood | — | `kubejs:tk3/compat/strip_biomesoplenty_empyreal_wood` |
| 6x biomesoplenty:empyreal_planks | cutting | biomesoplenty:stripped_empyreal_wood | — | `kubejs:tk3/compat/saw_biomesoplenty_empyreal_wood` |
| biomesoplenty:stripped_fir_log | cutting | biomesoplenty:fir_log | — | `kubejs:tk3/compat/strip_biomesoplenty_fir_log` |
| 6x biomesoplenty:fir_planks | cutting | biomesoplenty:stripped_fir_log | — | `kubejs:tk3/compat/saw_biomesoplenty_fir_log` |
| biomesoplenty:stripped_fir_wood | cutting | biomesoplenty:fir_wood | — | `kubejs:tk3/compat/strip_biomesoplenty_fir_wood` |
| 6x biomesoplenty:fir_planks | cutting | biomesoplenty:stripped_fir_wood | — | `kubejs:tk3/compat/saw_biomesoplenty_fir_wood` |
| biomesoplenty:stripped_hellbark_log | cutting | biomesoplenty:hellbark_log | — | `kubejs:tk3/compat/strip_biomesoplenty_hellbark_log` |
| 6x biomesoplenty:hellbark_planks | cutting | biomesoplenty:stripped_hellbark_log | — | `kubejs:tk3/compat/saw_biomesoplenty_hellbark_log` |
| biomesoplenty:stripped_hellbark_wood | cutting | biomesoplenty:hellbark_wood | — | `kubejs:tk3/compat/strip_biomesoplenty_hellbark_wood` |
| 6x biomesoplenty:hellbark_planks | cutting | biomesoplenty:stripped_hellbark_wood | — | `kubejs:tk3/compat/saw_biomesoplenty_hellbark_wood` |
| biomesoplenty:stripped_jacaranda_log | cutting | biomesoplenty:jacaranda_log | — | `kubejs:tk3/compat/strip_biomesoplenty_jacaranda_log` |
| 6x biomesoplenty:jacaranda_planks | cutting | biomesoplenty:stripped_jacaranda_log | — | `kubejs:tk3/compat/saw_biomesoplenty_jacaranda_log` |
| biomesoplenty:stripped_jacaranda_wood | cutting | biomesoplenty:jacaranda_wood | — | `kubejs:tk3/compat/strip_biomesoplenty_jacaranda_wood` |
| 6x biomesoplenty:jacaranda_planks | cutting | biomesoplenty:stripped_jacaranda_wood | — | `kubejs:tk3/compat/saw_biomesoplenty_jacaranda_wood` |
| biomesoplenty:stripped_magic_log | cutting | biomesoplenty:magic_log | — | `kubejs:tk3/compat/strip_biomesoplenty_magic_log` |
| 6x biomesoplenty:magic_planks | cutting | biomesoplenty:stripped_magic_log | — | `kubejs:tk3/compat/saw_biomesoplenty_magic_log` |
| biomesoplenty:stripped_magic_wood | cutting | biomesoplenty:magic_wood | — | `kubejs:tk3/compat/strip_biomesoplenty_magic_wood` |
| 6x biomesoplenty:magic_planks | cutting | biomesoplenty:stripped_magic_wood | — | `kubejs:tk3/compat/saw_biomesoplenty_magic_wood` |
| biomesoplenty:stripped_mahogany_log | cutting | biomesoplenty:mahogany_log | — | `kubejs:tk3/compat/strip_biomesoplenty_mahogany_log` |
| 6x biomesoplenty:mahogany_planks | cutting | biomesoplenty:stripped_mahogany_log | — | `kubejs:tk3/compat/saw_biomesoplenty_mahogany_log` |
| biomesoplenty:stripped_mahogany_wood | cutting | biomesoplenty:mahogany_wood | — | `kubejs:tk3/compat/strip_biomesoplenty_mahogany_wood` |
| 6x biomesoplenty:mahogany_planks | cutting | biomesoplenty:stripped_mahogany_wood | — | `kubejs:tk3/compat/saw_biomesoplenty_mahogany_wood` |
| biomesoplenty:stripped_maple_log | cutting | biomesoplenty:maple_log | — | `kubejs:tk3/compat/strip_biomesoplenty_maple_log` |
| 6x biomesoplenty:maple_planks | cutting | biomesoplenty:stripped_maple_log | — | `kubejs:tk3/compat/saw_biomesoplenty_maple_log` |
| biomesoplenty:stripped_maple_wood | cutting | biomesoplenty:maple_wood | — | `kubejs:tk3/compat/strip_biomesoplenty_maple_wood` |
| 6x biomesoplenty:maple_planks | cutting | biomesoplenty:stripped_maple_wood | — | `kubejs:tk3/compat/saw_biomesoplenty_maple_wood` |
| biomesoplenty:stripped_palm_log | cutting | biomesoplenty:palm_log | — | `kubejs:tk3/compat/strip_biomesoplenty_palm_log` |
| 6x biomesoplenty:palm_planks | cutting | biomesoplenty:stripped_palm_log | — | `kubejs:tk3/compat/saw_biomesoplenty_palm_log` |
| biomesoplenty:stripped_palm_wood | cutting | biomesoplenty:palm_wood | — | `kubejs:tk3/compat/strip_biomesoplenty_palm_wood` |
| 6x biomesoplenty:palm_planks | cutting | biomesoplenty:stripped_palm_wood | — | `kubejs:tk3/compat/saw_biomesoplenty_palm_wood` |
| biomesoplenty:stripped_pine_log | cutting | biomesoplenty:pine_log | — | `kubejs:tk3/compat/strip_biomesoplenty_pine_log` |
| 6x biomesoplenty:pine_planks | cutting | biomesoplenty:stripped_pine_log | — | `kubejs:tk3/compat/saw_biomesoplenty_pine_log` |
| biomesoplenty:stripped_pine_wood | cutting | biomesoplenty:pine_wood | — | `kubejs:tk3/compat/strip_biomesoplenty_pine_wood` |
| 6x biomesoplenty:pine_planks | cutting | biomesoplenty:stripped_pine_wood | — | `kubejs:tk3/compat/saw_biomesoplenty_pine_wood` |
| biomesoplenty:stripped_redwood_log | cutting | biomesoplenty:redwood_log | — | `kubejs:tk3/compat/strip_biomesoplenty_redwood_log` |
| 6x biomesoplenty:redwood_planks | cutting | biomesoplenty:stripped_redwood_log | — | `kubejs:tk3/compat/saw_biomesoplenty_redwood_log` |
| biomesoplenty:stripped_redwood_wood | cutting | biomesoplenty:redwood_wood | — | `kubejs:tk3/compat/strip_biomesoplenty_redwood_wood` |
| 6x biomesoplenty:redwood_planks | cutting | biomesoplenty:stripped_redwood_wood | — | `kubejs:tk3/compat/saw_biomesoplenty_redwood_wood` |
| biomesoplenty:stripped_umbran_log | cutting | biomesoplenty:umbran_log | — | `kubejs:tk3/compat/strip_biomesoplenty_umbran_log` |
| 6x biomesoplenty:umbran_planks | cutting | biomesoplenty:stripped_umbran_log | — | `kubejs:tk3/compat/saw_biomesoplenty_umbran_log` |
| biomesoplenty:stripped_umbran_wood | cutting | biomesoplenty:umbran_wood | — | `kubejs:tk3/compat/strip_biomesoplenty_umbran_wood` |
| 6x biomesoplenty:umbran_planks | cutting | biomesoplenty:stripped_umbran_wood | — | `kubejs:tk3/compat/saw_biomesoplenty_umbran_wood` |
| biomesoplenty:stripped_willow_log | cutting | biomesoplenty:willow_log | — | `kubejs:tk3/compat/strip_biomesoplenty_willow_log` |
| 6x biomesoplenty:willow_planks | cutting | biomesoplenty:stripped_willow_log | — | `kubejs:tk3/compat/saw_biomesoplenty_willow_log` |
| biomesoplenty:stripped_willow_wood | cutting | biomesoplenty:willow_wood | — | `kubejs:tk3/compat/strip_biomesoplenty_willow_wood` |
| 6x biomesoplenty:willow_planks | cutting | biomesoplenty:stripped_willow_wood | — | `kubejs:tk3/compat/saw_biomesoplenty_willow_wood` |
| biomeswevegone:stripped_aspen_log | cutting | biomeswevegone:aspen_log | — | `kubejs:tk3/compat/strip_biomeswevegone_aspen_log` |
| 6x biomeswevegone:aspen_planks | cutting | biomeswevegone:stripped_aspen_log | — | `kubejs:tk3/compat/saw_biomeswevegone_aspen_log` |
| biomeswevegone:stripped_aspen_wood | cutting | biomeswevegone:aspen_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_aspen_wood` |
| 6x biomeswevegone:aspen_planks | cutting | biomeswevegone:stripped_aspen_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_aspen_wood` |
| biomeswevegone:stripped_baobab_log | cutting | biomeswevegone:baobab_log | — | `kubejs:tk3/compat/strip_biomeswevegone_baobab_log` |
| 6x biomeswevegone:baobab_planks | cutting | biomeswevegone:stripped_baobab_log | — | `kubejs:tk3/compat/saw_biomeswevegone_baobab_log` |
| biomeswevegone:stripped_baobab_wood | cutting | biomeswevegone:baobab_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_baobab_wood` |
| 6x biomeswevegone:baobab_planks | cutting | biomeswevegone:stripped_baobab_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_baobab_wood` |
| biomeswevegone:stripped_blue_enchanted_log | cutting | biomeswevegone:blue_enchanted_log | — | `kubejs:tk3/compat/strip_biomeswevegone_blue_enchanted_log` |
| 6x biomeswevegone:blue_enchanted_planks | cutting | biomeswevegone:stripped_blue_enchanted_log | — | `kubejs:tk3/compat/saw_biomeswevegone_blue_enchanted_log` |
| biomeswevegone:stripped_blue_enchanted_wood | cutting | biomeswevegone:blue_enchanted_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_blue_enchanted_wood` |
| 6x biomeswevegone:blue_enchanted_planks | cutting | biomeswevegone:stripped_blue_enchanted_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_blue_enchanted_wood` |
| biomeswevegone:stripped_cika_log | cutting | biomeswevegone:cika_log | — | `kubejs:tk3/compat/strip_biomeswevegone_cika_log` |
| 6x biomeswevegone:cika_planks | cutting | biomeswevegone:stripped_cika_log | — | `kubejs:tk3/compat/saw_biomeswevegone_cika_log` |
| biomeswevegone:stripped_cika_wood | cutting | biomeswevegone:cika_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_cika_wood` |
| 6x biomeswevegone:cika_planks | cutting | biomeswevegone:stripped_cika_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_cika_wood` |
| biomeswevegone:stripped_cypress_log | cutting | biomeswevegone:cypress_log | — | `kubejs:tk3/compat/strip_biomeswevegone_cypress_log` |
| 6x biomeswevegone:cypress_planks | cutting | biomeswevegone:stripped_cypress_log | — | `kubejs:tk3/compat/saw_biomeswevegone_cypress_log` |
| biomeswevegone:stripped_cypress_wood | cutting | biomeswevegone:cypress_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_cypress_wood` |
| 6x biomeswevegone:cypress_planks | cutting | biomeswevegone:stripped_cypress_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_cypress_wood` |
| biomeswevegone:stripped_ebony_log | cutting | biomeswevegone:ebony_log | — | `kubejs:tk3/compat/strip_biomeswevegone_ebony_log` |
| 6x biomeswevegone:ebony_planks | cutting | biomeswevegone:stripped_ebony_log | — | `kubejs:tk3/compat/saw_biomeswevegone_ebony_log` |
| biomeswevegone:stripped_ebony_wood | cutting | biomeswevegone:ebony_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_ebony_wood` |
| 6x biomeswevegone:ebony_planks | cutting | biomeswevegone:stripped_ebony_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_ebony_wood` |
| biomeswevegone:stripped_fir_log | cutting | biomeswevegone:fir_log | — | `kubejs:tk3/compat/strip_biomeswevegone_fir_log` |
| 6x biomeswevegone:fir_planks | cutting | biomeswevegone:stripped_fir_log | — | `kubejs:tk3/compat/saw_biomeswevegone_fir_log` |
| biomeswevegone:stripped_fir_wood | cutting | biomeswevegone:fir_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_fir_wood` |
| 6x biomeswevegone:fir_planks | cutting | biomeswevegone:stripped_fir_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_fir_wood` |
| biomeswevegone:stripped_florus_stem | cutting | biomeswevegone:florus_stem | — | `kubejs:tk3/compat/strip_biomeswevegone_florus_stem` |
| 6x biomeswevegone:florus_planks | cutting | biomeswevegone:stripped_florus_stem | — | `kubejs:tk3/compat/saw_biomeswevegone_florus_stem` |
| biomeswevegone:stripped_florus_wood | cutting | biomeswevegone:florus_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_florus_wood` |
| 6x biomeswevegone:florus_planks | cutting | biomeswevegone:stripped_florus_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_florus_wood` |
| biomeswevegone:stripped_green_enchanted_log | cutting | biomeswevegone:green_enchanted_log | — | `kubejs:tk3/compat/strip_biomeswevegone_green_enchanted_log` |
| 6x biomeswevegone:green_enchanted_planks | cutting | biomeswevegone:stripped_green_enchanted_log | — | `kubejs:tk3/compat/saw_biomeswevegone_green_enchanted_log` |
| biomeswevegone:stripped_green_enchanted_wood | cutting | biomeswevegone:green_enchanted_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_green_enchanted_wood` |
| 6x biomeswevegone:green_enchanted_planks | cutting | biomeswevegone:stripped_green_enchanted_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_green_enchanted_wood` |
| biomeswevegone:stripped_holly_log | cutting | biomeswevegone:holly_log | — | `kubejs:tk3/compat/strip_biomeswevegone_holly_log` |
| 6x biomeswevegone:holly_planks | cutting | biomeswevegone:stripped_holly_log | — | `kubejs:tk3/compat/saw_biomeswevegone_holly_log` |
| biomeswevegone:stripped_holly_wood | cutting | biomeswevegone:holly_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_holly_wood` |
| 6x biomeswevegone:holly_planks | cutting | biomeswevegone:stripped_holly_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_holly_wood` |
| biomeswevegone:stripped_ironwood_log | cutting | biomeswevegone:ironwood_log | — | `kubejs:tk3/compat/strip_biomeswevegone_ironwood_log` |
| 6x biomeswevegone:ironwood_planks | cutting | biomeswevegone:stripped_ironwood_log | — | `kubejs:tk3/compat/saw_biomeswevegone_ironwood_log` |
| biomeswevegone:stripped_ironwood_wood | cutting | biomeswevegone:ironwood_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_ironwood_wood` |
| 6x biomeswevegone:ironwood_planks | cutting | biomeswevegone:stripped_ironwood_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_ironwood_wood` |
| biomeswevegone:stripped_jacaranda_log | cutting | biomeswevegone:jacaranda_log | — | `kubejs:tk3/compat/strip_biomeswevegone_jacaranda_log` |
| 6x biomeswevegone:jacaranda_planks | cutting | biomeswevegone:stripped_jacaranda_log | — | `kubejs:tk3/compat/saw_biomeswevegone_jacaranda_log` |
| biomeswevegone:stripped_jacaranda_wood | cutting | biomeswevegone:jacaranda_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_jacaranda_wood` |
| 6x biomeswevegone:jacaranda_planks | cutting | biomeswevegone:stripped_jacaranda_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_jacaranda_wood` |
| biomeswevegone:stripped_mahogany_log | cutting | biomeswevegone:mahogany_log | — | `kubejs:tk3/compat/strip_biomeswevegone_mahogany_log` |
| 6x biomeswevegone:mahogany_planks | cutting | biomeswevegone:stripped_mahogany_log | — | `kubejs:tk3/compat/saw_biomeswevegone_mahogany_log` |
| biomeswevegone:stripped_mahogany_wood | cutting | biomeswevegone:mahogany_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_mahogany_wood` |
| 6x biomeswevegone:mahogany_planks | cutting | biomeswevegone:stripped_mahogany_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_mahogany_wood` |
| biomeswevegone:stripped_maple_log | cutting | biomeswevegone:maple_log | — | `kubejs:tk3/compat/strip_biomeswevegone_maple_log` |
| 6x biomeswevegone:maple_planks | cutting | biomeswevegone:stripped_maple_log | — | `kubejs:tk3/compat/saw_biomeswevegone_maple_log` |
| biomeswevegone:stripped_maple_wood | cutting | biomeswevegone:maple_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_maple_wood` |
| 6x biomeswevegone:maple_planks | cutting | biomeswevegone:stripped_maple_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_maple_wood` |
| biomeswevegone:stripped_palm_log | cutting | biomeswevegone:palm_log | — | `kubejs:tk3/compat/strip_biomeswevegone_palm_log` |
| 6x biomeswevegone:palm_planks | cutting | biomeswevegone:stripped_palm_log | — | `kubejs:tk3/compat/saw_biomeswevegone_palm_log` |
| biomeswevegone:stripped_palm_wood | cutting | biomeswevegone:palm_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_palm_wood` |
| 6x biomeswevegone:palm_planks | cutting | biomeswevegone:stripped_palm_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_palm_wood` |
| biomeswevegone:stripped_pine_log | cutting | biomeswevegone:pine_log | — | `kubejs:tk3/compat/strip_biomeswevegone_pine_log` |
| 6x biomeswevegone:pine_planks | cutting | biomeswevegone:stripped_pine_log | — | `kubejs:tk3/compat/saw_biomeswevegone_pine_log` |
| biomeswevegone:stripped_pine_wood | cutting | biomeswevegone:pine_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_pine_wood` |
| 6x biomeswevegone:pine_planks | cutting | biomeswevegone:stripped_pine_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_pine_wood` |
| biomeswevegone:stripped_rainbow_eucalyptus_log | cutting | biomeswevegone:rainbow_eucalyptus_log | — | `kubejs:tk3/compat/strip_biomeswevegone_rainbow_eucalyptus_log` |
| 6x biomeswevegone:rainbow_eucalyptus_planks | cutting | biomeswevegone:stripped_rainbow_eucalyptus_log | — | `kubejs:tk3/compat/saw_biomeswevegone_rainbow_eucalyptus_log` |
| biomeswevegone:stripped_rainbow_eucalyptus_wood | cutting | biomeswevegone:rainbow_eucalyptus_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_rainbow_eucalyptus_wood` |
| 6x biomeswevegone:rainbow_eucalyptus_planks | cutting | biomeswevegone:stripped_rainbow_eucalyptus_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_rainbow_eucalyptus_wood` |
| biomeswevegone:stripped_redwood_log | cutting | biomeswevegone:redwood_log | — | `kubejs:tk3/compat/strip_biomeswevegone_redwood_log` |
| 6x biomeswevegone:redwood_planks | cutting | biomeswevegone:stripped_redwood_log | — | `kubejs:tk3/compat/saw_biomeswevegone_redwood_log` |
| biomeswevegone:stripped_redwood_wood | cutting | biomeswevegone:redwood_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_redwood_wood` |
| 6x biomeswevegone:redwood_planks | cutting | biomeswevegone:stripped_redwood_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_redwood_wood` |
| biomeswevegone:stripped_sakura_log | cutting | biomeswevegone:sakura_log | — | `kubejs:tk3/compat/strip_biomeswevegone_sakura_log` |
| 6x biomeswevegone:sakura_planks | cutting | biomeswevegone:stripped_sakura_log | — | `kubejs:tk3/compat/saw_biomeswevegone_sakura_log` |
| biomeswevegone:stripped_sakura_wood | cutting | biomeswevegone:sakura_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_sakura_wood` |
| 6x biomeswevegone:sakura_planks | cutting | biomeswevegone:stripped_sakura_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_sakura_wood` |
| biomeswevegone:stripped_skyris_log | cutting | biomeswevegone:skyris_log | — | `kubejs:tk3/compat/strip_biomeswevegone_skyris_log` |
| 6x biomeswevegone:skyris_planks | cutting | biomeswevegone:stripped_skyris_log | — | `kubejs:tk3/compat/saw_biomeswevegone_skyris_log` |
| biomeswevegone:stripped_skyris_wood | cutting | biomeswevegone:skyris_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_skyris_wood` |
| 6x biomeswevegone:skyris_planks | cutting | biomeswevegone:stripped_skyris_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_skyris_wood` |
| biomeswevegone:stripped_spirit_log | cutting | biomeswevegone:spirit_log | — | `kubejs:tk3/compat/strip_biomeswevegone_spirit_log` |
| 6x biomeswevegone:spirit_planks | cutting | biomeswevegone:stripped_spirit_log | — | `kubejs:tk3/compat/saw_biomeswevegone_spirit_log` |
| biomeswevegone:stripped_spirit_wood | cutting | biomeswevegone:spirit_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_spirit_wood` |
| 6x biomeswevegone:spirit_planks | cutting | biomeswevegone:stripped_spirit_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_spirit_wood` |
| biomeswevegone:stripped_white_mangrove_log | cutting | biomeswevegone:white_mangrove_log | — | `kubejs:tk3/compat/strip_biomeswevegone_white_mangrove_log` |
| 6x biomeswevegone:white_mangrove_planks | cutting | biomeswevegone:stripped_white_mangrove_log | — | `kubejs:tk3/compat/saw_biomeswevegone_white_mangrove_log` |
| biomeswevegone:stripped_white_mangrove_wood | cutting | biomeswevegone:white_mangrove_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_white_mangrove_wood` |
| 6x biomeswevegone:white_mangrove_planks | cutting | biomeswevegone:stripped_white_mangrove_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_white_mangrove_wood` |
| biomeswevegone:stripped_willow_log | cutting | biomeswevegone:willow_log | — | `kubejs:tk3/compat/strip_biomeswevegone_willow_log` |
| 6x biomeswevegone:willow_planks | cutting | biomeswevegone:stripped_willow_log | — | `kubejs:tk3/compat/saw_biomeswevegone_willow_log` |
| biomeswevegone:stripped_willow_wood | cutting | biomeswevegone:willow_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_willow_wood` |
| 6x biomeswevegone:willow_planks | cutting | biomeswevegone:stripped_willow_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_willow_wood` |
| biomeswevegone:stripped_witch_hazel_log | cutting | biomeswevegone:witch_hazel_log | — | `kubejs:tk3/compat/strip_biomeswevegone_witch_hazel_log` |
| 6x biomeswevegone:witch_hazel_planks | cutting | biomeswevegone:stripped_witch_hazel_log | — | `kubejs:tk3/compat/saw_biomeswevegone_witch_hazel_log` |
| biomeswevegone:stripped_witch_hazel_wood | cutting | biomeswevegone:witch_hazel_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_witch_hazel_wood` |
| 6x biomeswevegone:witch_hazel_planks | cutting | biomeswevegone:stripped_witch_hazel_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_witch_hazel_wood` |
| biomeswevegone:stripped_zelkova_log | cutting | biomeswevegone:zelkova_log | — | `kubejs:tk3/compat/strip_biomeswevegone_zelkova_log` |
| 6x biomeswevegone:zelkova_planks | cutting | biomeswevegone:stripped_zelkova_log | — | `kubejs:tk3/compat/saw_biomeswevegone_zelkova_log` |
| biomeswevegone:stripped_zelkova_wood | cutting | biomeswevegone:zelkova_wood | — | `kubejs:tk3/compat/strip_biomeswevegone_zelkova_wood` |
| 6x biomeswevegone:zelkova_planks | cutting | biomeswevegone:stripped_zelkova_wood | — | `kubejs:tk3/compat/saw_biomeswevegone_zelkova_wood` |
| bloomingnature:stripped_aspen_log | cutting | bloomingnature:aspen_log | — | `kubejs:tk3/compat/strip_bloomingnature_aspen_log` |
| 6x bloomingnature:aspen_planks | cutting | bloomingnature:stripped_aspen_log | — | `kubejs:tk3/compat/saw_bloomingnature_aspen_log` |
| bloomingnature:stripped_aspen_wood | cutting | bloomingnature:aspen_wood | — | `kubejs:tk3/compat/strip_bloomingnature_aspen_wood` |
| 6x bloomingnature:aspen_planks | cutting | bloomingnature:stripped_aspen_wood | — | `kubejs:tk3/compat/saw_bloomingnature_aspen_wood` |
| bloomingnature:stripped_baobab_log | cutting | bloomingnature:baobab_log | — | `kubejs:tk3/compat/strip_bloomingnature_baobab_log` |
| 6x bloomingnature:baobab_planks | cutting | bloomingnature:stripped_baobab_log | — | `kubejs:tk3/compat/saw_bloomingnature_baobab_log` |
| bloomingnature:stripped_baobab_wood | cutting | bloomingnature:baobab_wood | — | `kubejs:tk3/compat/strip_bloomingnature_baobab_wood` |
| 6x bloomingnature:baobab_planks | cutting | bloomingnature:stripped_baobab_wood | — | `kubejs:tk3/compat/saw_bloomingnature_baobab_wood` |
| bloomingnature:stripped_chestnut_log | cutting | bloomingnature:chestnut_log | — | `kubejs:tk3/compat/strip_bloomingnature_chestnut_log` |
| 6x bloomingnature:chestnut_planks | cutting | bloomingnature:stripped_chestnut_log | — | `kubejs:tk3/compat/saw_bloomingnature_chestnut_log` |
| bloomingnature:stripped_chestnut_wood | cutting | bloomingnature:chestnut_wood | — | `kubejs:tk3/compat/strip_bloomingnature_chestnut_wood` |
| 6x bloomingnature:chestnut_planks | cutting | bloomingnature:stripped_chestnut_wood | — | `kubejs:tk3/compat/saw_bloomingnature_chestnut_wood` |
| bloomingnature:stripped_cypress_log | cutting | bloomingnature:cypress_log | — | `kubejs:tk3/compat/strip_bloomingnature_cypress_log` |
| 6x bloomingnature:cypress_planks | cutting | bloomingnature:stripped_cypress_log | — | `kubejs:tk3/compat/saw_bloomingnature_cypress_log` |
| bloomingnature:stripped_cypress_wood | cutting | bloomingnature:cypress_wood | — | `kubejs:tk3/compat/strip_bloomingnature_cypress_wood` |
| 6x bloomingnature:cypress_planks | cutting | bloomingnature:stripped_cypress_wood | — | `kubejs:tk3/compat/saw_bloomingnature_cypress_wood` |
| bloomingnature:stripped_ebony_log | cutting | bloomingnature:ebony_log | — | `kubejs:tk3/compat/strip_bloomingnature_ebony_log` |
| 6x bloomingnature:ebony_planks | cutting | bloomingnature:stripped_ebony_log | — | `kubejs:tk3/compat/saw_bloomingnature_ebony_log` |
| bloomingnature:stripped_ebony_wood | cutting | bloomingnature:ebony_wood | — | `kubejs:tk3/compat/strip_bloomingnature_ebony_wood` |
| 6x bloomingnature:ebony_planks | cutting | bloomingnature:stripped_ebony_wood | — | `kubejs:tk3/compat/saw_bloomingnature_ebony_wood` |
| bloomingnature:stripped_fan_palm_log | cutting | bloomingnature:fan_palm_log | — | `kubejs:tk3/compat/strip_bloomingnature_fan_palm_log` |
| 6x bloomingnature:fan_palm_planks | cutting | bloomingnature:stripped_fan_palm_log | — | `kubejs:tk3/compat/saw_bloomingnature_fan_palm_log` |
| bloomingnature:stripped_fan_palm_wood | cutting | bloomingnature:fan_palm_wood | — | `kubejs:tk3/compat/strip_bloomingnature_fan_palm_wood` |
| 6x bloomingnature:fan_palm_planks | cutting | bloomingnature:stripped_fan_palm_wood | — | `kubejs:tk3/compat/saw_bloomingnature_fan_palm_wood` |
| bloomingnature:stripped_fir_log | cutting | bloomingnature:fir_log | — | `kubejs:tk3/compat/strip_bloomingnature_fir_log` |
| 6x bloomingnature:fir_planks | cutting | bloomingnature:stripped_fir_log | — | `kubejs:tk3/compat/saw_bloomingnature_fir_log` |
| bloomingnature:stripped_fir_wood | cutting | bloomingnature:fir_wood | — | `kubejs:tk3/compat/strip_bloomingnature_fir_wood` |
| 6x bloomingnature:fir_planks | cutting | bloomingnature:stripped_fir_wood | — | `kubejs:tk3/compat/saw_bloomingnature_fir_wood` |
| bloomingnature:stripped_larch_log | cutting | bloomingnature:larch_log | — | `kubejs:tk3/compat/strip_bloomingnature_larch_log` |
| 6x bloomingnature:larch_planks | cutting | bloomingnature:stripped_larch_log | — | `kubejs:tk3/compat/saw_bloomingnature_larch_log` |
| bloomingnature:stripped_larch_wood | cutting | bloomingnature:larch_wood | — | `kubejs:tk3/compat/strip_bloomingnature_larch_wood` |
| 6x bloomingnature:larch_planks | cutting | bloomingnature:stripped_larch_wood | — | `kubejs:tk3/compat/saw_bloomingnature_larch_wood` |
| bloomingnature:stripped_swamp_cypress_log | cutting | bloomingnature:swamp_cypress_log | — | `kubejs:tk3/compat/strip_bloomingnature_swamp_cypress_log` |
| 6x bloomingnature:swamp_cypress_planks | cutting | bloomingnature:stripped_swamp_cypress_log | — | `kubejs:tk3/compat/saw_bloomingnature_swamp_cypress_log` |
| bloomingnature:stripped_swamp_cypress_wood | cutting | bloomingnature:swamp_cypress_wood | — | `kubejs:tk3/compat/strip_bloomingnature_swamp_cypress_wood` |
| 6x bloomingnature:swamp_cypress_planks | cutting | bloomingnature:stripped_swamp_cypress_wood | — | `kubejs:tk3/compat/saw_bloomingnature_swamp_cypress_wood` |
| bloomingnature:stripped_swamp_oak_log | cutting | bloomingnature:swamp_oak_log | — | `kubejs:tk3/compat/strip_bloomingnature_swamp_oak_log` |
| 6x bloomingnature:swamp_oak_planks | cutting | bloomingnature:stripped_swamp_oak_log | — | `kubejs:tk3/compat/saw_bloomingnature_swamp_oak_log` |
| bloomingnature:stripped_swamp_oak_wood | cutting | bloomingnature:swamp_oak_wood | — | `kubejs:tk3/compat/strip_bloomingnature_swamp_oak_wood` |
| 6x bloomingnature:swamp_oak_planks | cutting | bloomingnature:stripped_swamp_oak_wood | — | `kubejs:tk3/compat/saw_bloomingnature_swamp_oak_wood` |
| 6x cataclysm:chorus_planks | cutting | cataclysm:chorus_stem | — | `kubejs:tk3/compat/saw_cataclysm_chorus_stem` |
| environmental:stripped_pine_log | cutting | environmental:pine_log | — | `kubejs:tk3/compat/strip_environmental_pine_log` |
| 6x environmental:pine_planks | cutting | environmental:stripped_pine_log | — | `kubejs:tk3/compat/saw_environmental_pine_log` |
| environmental:stripped_pine_wood | cutting | environmental:pine_wood | — | `kubejs:tk3/compat/strip_environmental_pine_wood` |
| 6x environmental:pine_planks | cutting | environmental:stripped_pine_wood | — | `kubejs:tk3/compat/saw_environmental_pine_wood` |
| environmental:stripped_plum_log | cutting | environmental:plum_log | — | `kubejs:tk3/compat/strip_environmental_plum_log` |
| 6x environmental:plum_planks | cutting | environmental:stripped_plum_log | — | `kubejs:tk3/compat/saw_environmental_plum_log` |
| environmental:stripped_plum_wood | cutting | environmental:plum_wood | — | `kubejs:tk3/compat/strip_environmental_plum_wood` |
| 6x environmental:plum_planks | cutting | environmental:stripped_plum_wood | — | `kubejs:tk3/compat/saw_environmental_plum_wood` |
| environmental:stripped_willow_log | cutting | environmental:willow_log | — | `kubejs:tk3/compat/strip_environmental_willow_log` |
| 6x environmental:willow_planks | cutting | environmental:stripped_willow_log | — | `kubejs:tk3/compat/saw_environmental_willow_log` |
| environmental:stripped_willow_wood | cutting | environmental:willow_wood | — | `kubejs:tk3/compat/strip_environmental_willow_wood` |
| 6x environmental:willow_planks | cutting | environmental:stripped_willow_wood | — | `kubejs:tk3/compat/saw_environmental_willow_wood` |
| environmental:stripped_wisteria_log | cutting | environmental:wisteria_log | — | `kubejs:tk3/compat/strip_environmental_wisteria_log` |
| 6x environmental:wisteria_planks | cutting | environmental:stripped_wisteria_log | — | `kubejs:tk3/compat/saw_environmental_wisteria_log` |
| environmental:stripped_wisteria_wood | cutting | environmental:wisteria_wood | — | `kubejs:tk3/compat/strip_environmental_wisteria_wood` |
| 6x environmental:wisteria_planks | cutting | environmental:stripped_wisteria_wood | — | `kubejs:tk3/compat/saw_environmental_wisteria_wood` |
| 6x iceandfire:dreadwood_planks | cutting | iceandfire:dreadwood_log | — | `kubejs:tk3/compat/saw_iceandfire_dreadwood_log` |
| minecraft:stripped_acacia_log | cutting | minecraft:acacia_log | — | `kubejs:tk3/compat/strip_minecraft_acacia_log` |
| 6x minecraft:acacia_planks | cutting | minecraft:stripped_acacia_log | — | `kubejs:tk3/compat/saw_minecraft_acacia_log` |
| minecraft:stripped_acacia_wood | cutting | minecraft:acacia_wood | — | `kubejs:tk3/compat/strip_minecraft_acacia_wood` |
| 6x minecraft:acacia_planks | cutting | minecraft:stripped_acacia_wood | — | `kubejs:tk3/compat/saw_minecraft_acacia_wood` |
| minecraft:stripped_birch_log | cutting | minecraft:birch_log | — | `kubejs:tk3/compat/strip_minecraft_birch_log` |
| 6x minecraft:birch_planks | cutting | minecraft:stripped_birch_log | — | `kubejs:tk3/compat/saw_minecraft_birch_log` |
| minecraft:stripped_birch_wood | cutting | minecraft:birch_wood | — | `kubejs:tk3/compat/strip_minecraft_birch_wood` |
| 6x minecraft:birch_planks | cutting | minecraft:stripped_birch_wood | — | `kubejs:tk3/compat/saw_minecraft_birch_wood` |
| minecraft:stripped_cherry_log | cutting | minecraft:cherry_log | — | `kubejs:tk3/compat/strip_minecraft_cherry_log` |
| 6x minecraft:cherry_planks | cutting | minecraft:stripped_cherry_log | — | `kubejs:tk3/compat/saw_minecraft_cherry_log` |
| minecraft:stripped_cherry_wood | cutting | minecraft:cherry_wood | — | `kubejs:tk3/compat/strip_minecraft_cherry_wood` |
| 6x minecraft:cherry_planks | cutting | minecraft:stripped_cherry_wood | — | `kubejs:tk3/compat/saw_minecraft_cherry_wood` |
| minecraft:stripped_crimson_hyphae | cutting | minecraft:crimson_hyphae | — | `kubejs:tk3/compat/strip_minecraft_crimson_hyphae` |
| 6x minecraft:crimson_planks | cutting | minecraft:stripped_crimson_hyphae | — | `kubejs:tk3/compat/saw_minecraft_crimson_hyphae` |
| minecraft:stripped_crimson_stem | cutting | minecraft:crimson_stem | — | `kubejs:tk3/compat/strip_minecraft_crimson_stem` |
| 6x minecraft:crimson_planks | cutting | minecraft:stripped_crimson_stem | — | `kubejs:tk3/compat/saw_minecraft_crimson_stem` |
| minecraft:stripped_dark_oak_log | cutting | minecraft:dark_oak_log | — | `kubejs:tk3/compat/strip_minecraft_dark_oak_log` |
| 6x minecraft:dark_oak_planks | cutting | minecraft:stripped_dark_oak_log | — | `kubejs:tk3/compat/saw_minecraft_dark_oak_log` |
| minecraft:stripped_dark_oak_wood | cutting | minecraft:dark_oak_wood | — | `kubejs:tk3/compat/strip_minecraft_dark_oak_wood` |
| 6x minecraft:dark_oak_planks | cutting | minecraft:stripped_dark_oak_wood | — | `kubejs:tk3/compat/saw_minecraft_dark_oak_wood` |
| minecraft:stripped_jungle_log | cutting | minecraft:jungle_log | — | `kubejs:tk3/compat/strip_minecraft_jungle_log` |
| 6x minecraft:jungle_planks | cutting | minecraft:stripped_jungle_log | — | `kubejs:tk3/compat/saw_minecraft_jungle_log` |
| minecraft:stripped_jungle_wood | cutting | minecraft:jungle_wood | — | `kubejs:tk3/compat/strip_minecraft_jungle_wood` |
| 6x minecraft:jungle_planks | cutting | minecraft:stripped_jungle_wood | — | `kubejs:tk3/compat/saw_minecraft_jungle_wood` |
| minecraft:stripped_mangrove_log | cutting | minecraft:mangrove_log | — | `kubejs:tk3/compat/strip_minecraft_mangrove_log` |
| 6x minecraft:mangrove_planks | cutting | minecraft:stripped_mangrove_log | — | `kubejs:tk3/compat/saw_minecraft_mangrove_log` |
| minecraft:stripped_mangrove_wood | cutting | minecraft:mangrove_wood | — | `kubejs:tk3/compat/strip_minecraft_mangrove_wood` |
| 6x minecraft:mangrove_planks | cutting | minecraft:stripped_mangrove_wood | — | `kubejs:tk3/compat/saw_minecraft_mangrove_wood` |
| minecraft:stripped_oak_log | cutting | minecraft:oak_log | — | `kubejs:tk3/compat/strip_minecraft_oak_log` |
| 6x minecraft:oak_planks | cutting | minecraft:stripped_oak_log | — | `kubejs:tk3/compat/saw_minecraft_oak_log` |
| minecraft:stripped_oak_wood | cutting | minecraft:oak_wood | — | `kubejs:tk3/compat/strip_minecraft_oak_wood` |
| 6x minecraft:oak_planks | cutting | minecraft:stripped_oak_wood | — | `kubejs:tk3/compat/saw_minecraft_oak_wood` |
| minecraft:stripped_spruce_log | cutting | minecraft:spruce_log | — | `kubejs:tk3/compat/strip_minecraft_spruce_log` |
| 6x minecraft:spruce_planks | cutting | minecraft:stripped_spruce_log | — | `kubejs:tk3/compat/saw_minecraft_spruce_log` |
| minecraft:stripped_spruce_wood | cutting | minecraft:spruce_wood | — | `kubejs:tk3/compat/strip_minecraft_spruce_wood` |
| 6x minecraft:spruce_planks | cutting | minecraft:stripped_spruce_wood | — | `kubejs:tk3/compat/saw_minecraft_spruce_wood` |
| minecraft:stripped_warped_hyphae | cutting | minecraft:warped_hyphae | — | `kubejs:tk3/compat/strip_minecraft_warped_hyphae` |
| 6x minecraft:warped_planks | cutting | minecraft:stripped_warped_hyphae | — | `kubejs:tk3/compat/saw_minecraft_warped_hyphae` |
| minecraft:stripped_warped_stem | cutting | minecraft:warped_stem | — | `kubejs:tk3/compat/strip_minecraft_warped_stem` |
| 6x minecraft:warped_planks | cutting | minecraft:stripped_warped_stem | — | `kubejs:tk3/compat/saw_minecraft_warped_stem` |
| quark:stripped_ancient_log | cutting | quark:ancient_log | — | `kubejs:tk3/compat/strip_quark_ancient_log` |
| 6x quark:ancient_planks | cutting | quark:stripped_ancient_log | — | `kubejs:tk3/compat/saw_quark_ancient_log` |
| quark:stripped_ancient_wood | cutting | quark:ancient_wood | — | `kubejs:tk3/compat/strip_quark_ancient_wood` |
| 6x quark:ancient_planks | cutting | quark:stripped_ancient_wood | — | `kubejs:tk3/compat/saw_quark_ancient_wood` |
| quark:stripped_azalea_log | cutting | quark:azalea_log | — | `kubejs:tk3/compat/strip_quark_azalea_log` |
| 6x quark:azalea_planks | cutting | quark:stripped_azalea_log | — | `kubejs:tk3/compat/saw_quark_azalea_log` |
| quark:stripped_azalea_wood | cutting | quark:azalea_wood | — | `kubejs:tk3/compat/strip_quark_azalea_wood` |
| 6x quark:azalea_planks | cutting | quark:stripped_azalea_wood | — | `kubejs:tk3/compat/saw_quark_azalea_wood` |
| quark:stripped_blossom_log | cutting | quark:blossom_log | — | `kubejs:tk3/compat/strip_quark_blossom_log` |
| 6x quark:blossom_planks | cutting | quark:stripped_blossom_log | — | `kubejs:tk3/compat/saw_quark_blossom_log` |
| quark:stripped_blossom_wood | cutting | quark:blossom_wood | — | `kubejs:tk3/compat/strip_quark_blossom_wood` |
| 6x quark:blossom_planks | cutting | quark:stripped_blossom_wood | — | `kubejs:tk3/compat/saw_quark_blossom_wood` |
| twilightforest:stripped_canopy_log | cutting | twilightforest:canopy_log | — | `kubejs:tk3/compat/strip_twilightforest_canopy_log` |
| 6x twilightforest:canopy_planks | cutting | twilightforest:stripped_canopy_log | — | `kubejs:tk3/compat/saw_twilightforest_canopy_log` |
| twilightforest:stripped_canopy_wood | cutting | twilightforest:canopy_wood | — | `kubejs:tk3/compat/strip_twilightforest_canopy_wood` |
| 6x twilightforest:canopy_planks | cutting | twilightforest:stripped_canopy_wood | — | `kubejs:tk3/compat/saw_twilightforest_canopy_wood` |
| twilightforest:stripped_dark_log | cutting | twilightforest:dark_log | — | `kubejs:tk3/compat/strip_twilightforest_dark_log` |
| 6x twilightforest:dark_planks | cutting | twilightforest:stripped_dark_log | — | `kubejs:tk3/compat/saw_twilightforest_dark_log` |
| twilightforest:stripped_dark_wood | cutting | twilightforest:dark_wood | — | `kubejs:tk3/compat/strip_twilightforest_dark_wood` |
| 6x twilightforest:dark_planks | cutting | twilightforest:stripped_dark_wood | — | `kubejs:tk3/compat/saw_twilightforest_dark_wood` |
| twilightforest:stripped_mangrove_log | cutting | twilightforest:mangrove_log | — | `kubejs:tk3/compat/strip_twilightforest_mangrove_log` |
| 6x twilightforest:mangrove_planks | cutting | twilightforest:stripped_mangrove_log | — | `kubejs:tk3/compat/saw_twilightforest_mangrove_log` |
| twilightforest:stripped_mangrove_wood | cutting | twilightforest:mangrove_wood | — | `kubejs:tk3/compat/strip_twilightforest_mangrove_wood` |
| 6x twilightforest:mangrove_planks | cutting | twilightforest:stripped_mangrove_wood | — | `kubejs:tk3/compat/saw_twilightforest_mangrove_wood` |
| twilightforest:stripped_mining_log | cutting | twilightforest:mining_log | — | `kubejs:tk3/compat/strip_twilightforest_mining_log` |
| 6x twilightforest:mining_planks | cutting | twilightforest:stripped_mining_log | — | `kubejs:tk3/compat/saw_twilightforest_mining_log` |
| twilightforest:stripped_mining_wood | cutting | twilightforest:mining_wood | — | `kubejs:tk3/compat/strip_twilightforest_mining_wood` |
| 6x twilightforest:mining_planks | cutting | twilightforest:stripped_mining_wood | — | `kubejs:tk3/compat/saw_twilightforest_mining_wood` |
| twilightforest:stripped_sorting_log | cutting | twilightforest:sorting_log | — | `kubejs:tk3/compat/strip_twilightforest_sorting_log` |
| 6x twilightforest:sorting_planks | cutting | twilightforest:stripped_sorting_log | — | `kubejs:tk3/compat/saw_twilightforest_sorting_log` |
| twilightforest:stripped_sorting_wood | cutting | twilightforest:sorting_wood | — | `kubejs:tk3/compat/strip_twilightforest_sorting_wood` |
| 6x twilightforest:sorting_planks | cutting | twilightforest:stripped_sorting_wood | — | `kubejs:tk3/compat/saw_twilightforest_sorting_wood` |
| twilightforest:stripped_time_log | cutting | twilightforest:time_log | — | `kubejs:tk3/compat/strip_twilightforest_time_log` |
| 6x twilightforest:time_planks | cutting | twilightforest:stripped_time_log | — | `kubejs:tk3/compat/saw_twilightforest_time_log` |
| twilightforest:stripped_time_wood | cutting | twilightforest:time_wood | — | `kubejs:tk3/compat/strip_twilightforest_time_wood` |
| 6x twilightforest:time_planks | cutting | twilightforest:stripped_time_wood | — | `kubejs:tk3/compat/saw_twilightforest_time_wood` |
| twilightforest:stripped_transformation_log | cutting | twilightforest:transformation_log | — | `kubejs:tk3/compat/strip_twilightforest_transformation_log` |
| 6x twilightforest:transformation_planks | cutting | twilightforest:stripped_transformation_log | — | `kubejs:tk3/compat/saw_twilightforest_transformation_log` |
| twilightforest:stripped_transformation_wood | cutting | twilightforest:transformation_wood | — | `kubejs:tk3/compat/strip_twilightforest_transformation_wood` |
| 6x twilightforest:transformation_planks | cutting | twilightforest:stripped_transformation_wood | — | `kubejs:tk3/compat/saw_twilightforest_transformation_wood` |
| twilightforest:stripped_twilight_oak_log | cutting | twilightforest:twilight_oak_log | — | `kubejs:tk3/compat/strip_twilightforest_twilight_oak_log` |
| 6x twilightforest:twilight_oak_planks | cutting | twilightforest:stripped_twilight_oak_log | — | `kubejs:tk3/compat/saw_twilightforest_twilight_oak_log` |
| twilightforest:stripped_twilight_oak_wood | cutting | twilightforest:twilight_oak_wood | — | `kubejs:tk3/compat/strip_twilightforest_twilight_oak_wood` |
| 6x twilightforest:twilight_oak_planks | cutting | twilightforest:stripped_twilight_oak_wood | — | `kubejs:tk3/compat/saw_twilightforest_twilight_oak_wood` |
| upgrade_aquatic:stripped_driftwood_log | cutting | upgrade_aquatic:driftwood_log | — | `kubejs:tk3/compat/strip_upgrade_aquatic_driftwood_log` |
| 6x upgrade_aquatic:driftwood_planks | cutting | upgrade_aquatic:stripped_driftwood_log | — | `kubejs:tk3/compat/saw_upgrade_aquatic_driftwood_log` |
| upgrade_aquatic:stripped_river_log | cutting | upgrade_aquatic:river_log | — | `kubejs:tk3/compat/strip_upgrade_aquatic_river_log` |
| 6x upgrade_aquatic:river_planks | cutting | upgrade_aquatic:stripped_river_log | — | `kubejs:tk3/compat/saw_upgrade_aquatic_river_log` |
| upgrade_aquatic:stripped_river_wood | cutting | upgrade_aquatic:river_wood | — | `kubejs:tk3/compat/strip_upgrade_aquatic_river_wood` |
| 6x upgrade_aquatic:river_planks | cutting | upgrade_aquatic:stripped_river_wood | — | `kubejs:tk3/compat/saw_upgrade_aquatic_river_wood` |
| witchery:stripped_alder_log | cutting | witchery:alder_log | — | `kubejs:tk3/compat/strip_witchery_alder_log` |
| 6x witchery:alder_planks | cutting | witchery:stripped_alder_log | — | `kubejs:tk3/compat/saw_witchery_alder_log` |
| witchery:stripped_alder_wood | cutting | witchery:alder_wood | — | `kubejs:tk3/compat/strip_witchery_alder_wood` |
| 6x witchery:alder_planks | cutting | witchery:stripped_alder_wood | — | `kubejs:tk3/compat/saw_witchery_alder_wood` |
| witchery:stripped_hawthorn_log | cutting | witchery:hawthorn_log | — | `kubejs:tk3/compat/strip_witchery_hawthorn_log` |
| 6x witchery:hawthorn_planks | cutting | witchery:stripped_hawthorn_log | — | `kubejs:tk3/compat/saw_witchery_hawthorn_log` |
| witchery:stripped_hawthorn_wood | cutting | witchery:hawthorn_wood | — | `kubejs:tk3/compat/strip_witchery_hawthorn_wood` |
| 6x witchery:hawthorn_planks | cutting | witchery:stripped_hawthorn_wood | — | `kubejs:tk3/compat/saw_witchery_hawthorn_wood` |
| witchery:stripped_rowan_log | cutting | witchery:rowan_log | — | `kubejs:tk3/compat/strip_witchery_rowan_log` |
| 6x witchery:rowan_planks | cutting | witchery:stripped_rowan_log | — | `kubejs:tk3/compat/saw_witchery_rowan_log` |
| witchery:stripped_rowan_wood | cutting | witchery:rowan_wood | — | `kubejs:tk3/compat/strip_witchery_rowan_wood` |
| 6x witchery:rowan_planks | cutting | witchery:stripped_rowan_wood | — | `kubejs:tk3/compat/saw_witchery_rowan_wood` |
| minecraft:stripped_bamboo_block | cutting | minecraft:bamboo_block | — | `kubejs:tk3/compat/strip_bamboo_block` |
| 3x minecraft:bamboo_planks | cutting | minecraft:stripped_bamboo_block | — | `kubejs:tk3/compat/saw_bamboo` |
| minecraft:sand | milling | minecraft:gravel | — | `kubejs:tk3/compat/gravel_to_sand` |
| create:wheat_flour | milling | minecraft:wheat | — | `kubejs:tk3/compat/wheat_flour` |
| 2x minecraft:dirt | compacting | minecraft:gravel → minecraft:clay_ball → 250 mB minecraft:water | — | `kubejs:tk3/compat/renewable_dirt` |
| minecraft:mud | mixing | minecraft:dirt → 250 mB minecraft:water | — | `kubejs:tk3/compat/mud` |
| minecraft:clay_ball | splashing | minecraft:mud | — | `kubejs:tk3/compat/mud_clay` |
| minecraft:soul_sand | haunting | minecraft:sand | — | `kubejs:tk3/compat/soul_sand` |
| minecraft:calcite | compacting | minecraft:bone_meal → minecraft:clay_ball | — | `kubejs:tk3/compat/calcite` |
| sophisticatedstorage:upgrade_base | shaped | M: kubejs:tk3_rotation_mechanism → I: create:iron_sheet → P: #minecraft:planks | — | `kubejs:tk3/storage/sophisticatedstorage_upgrade_base` |
| sophisticatedbackpacks:upgrade_base | shaped | M: kubejs:tk3_rotation_mechanism → I: create:iron_sheet → P: #minecraft:planks | — | `kubejs:tk3/storage/sophisticatedbackpacks_upgrade_base` |
## Tier 2

| Output | Method | Ordered inputs | Conditions | Recipe ID |
|---|---|---|---|---|
| kubejs:tk3_sealed_mechanism | sequence | kubejs:tk3_rotation_mechanism → create:copper_sheet → minecraft:slime_ball → farmersdelight:iron_knife | Final held tool: farmersdelight:iron_knife; 1 durability/use; unbreakable supported; One loop, guaranteed result | `kubejs:tk3/tier_2/tk3_sealed_mechanism` |
| 16x create:fluid_pipe | stonecutting | kubejs:tk3_hydraulic_machine | — | `kubejs:tk3/tier_2/fluid_pipe` |
| create:mechanical_pump | stonecutting | kubejs:tk3_hydraulic_machine | — | `kubejs:tk3/tier_2/mechanical_pump` |
| 3x create:fluid_tank | stonecutting | kubejs:tk3_hydraulic_machine | — | `kubejs:tk3/tier_2/fluid_tank` |
| create:spout | stonecutting | kubejs:tk3_hydraulic_machine | — | `kubejs:tk3/tier_2/spout` |
| create:item_drain | stonecutting | kubejs:tk3_hydraulic_machine | — | `kubejs:tk3/tier_2/item_drain` |
| create:hose_pulley | stonecutting | kubejs:tk3_hydraulic_machine | — | `kubejs:tk3/tier_2/hose_pulley` |
| create:portable_fluid_interface | stonecutting | kubejs:tk3_hydraulic_machine | — | `kubejs:tk3/tier_2/portable_fluid_interface` |
| create:steam_engine | stonecutting | kubejs:tk3_hydraulic_machine | — | `kubejs:tk3/tier_2/steam_engine` |
| createaddition:rolling_mill | shapeless | kubejs:tk3_hydraulic_machine → create:mechanical_press → minecraft:copper_ingot | — | `kubejs:tk3/tier_2/rolling_mill` |
| 2x minecraft:slime_ball | mixing | minecraft:kelp → minecraft:wheat → 250 mB minecraft:water | — | `kubejs:tk3/tier_2/renewable_sealant` |
| create:fluid_valve | stonecutting | kubejs:tk3_hydraulic_machine | — | `kubejs:tk3/tier_2/fluid_valve` |
| 6x create:copper_valve_handle | stonecutting | kubejs:tk3_hydraulic_machine | — | `kubejs:tk3/tier_2/copper_valve_handle` |
| create:steam_whistle | stonecutting | kubejs:tk3_hydraulic_machine | — | `kubejs:tk3/tier_2/steam_whistle` |
| create:copper_backtank | shapeless | kubejs:tk3_sealed_mechanism → create:copper_casing → minecraft:copper_block | — | `kubejs:tk3/tier_2/copper_backtank` |
| createaddition:capacitor | shaped | C: create:copper_sheet → R: minecraft:redstone → I: create:iron_sheet | — | `kubejs:tk3/tier_2/capacitor` |
| kubejs:tk3_hydraulic_machine | deploying | create:copper_casing → kubejs:tk3_sealed_mechanism | — | `kubejs:tk3/frames/hydraulic_assembly` |
| minecraft:redstone | milling | create:scoria | — | `kubejs:tk3/geology/milling_scoria` |
| 2x minecraft:redstone | crushing | create:scoria | — | `kubejs:tk3/geology/crushing_scoria` |
| minecraft:coal | milling | create:scorchia | — | `kubejs:tk3/geology/milling_scorchia` |
| 2x minecraft:coal | crushing | create:scorchia | — | `kubejs:tk3/geology/crushing_scorchia` |
| 3x create:copper_nugget | milling | create:veridium | — | `kubejs:tk3/geology/milling_veridium` |
| create:crushed_raw_copper | crushing | create:veridium | — | `kubejs:tk3/geology/crushing_veridium` |
| 3x minecraft:iron_nugget | milling | create:crimsite | — | `kubejs:tk3/geology/milling_crimsite` |
| create:crushed_raw_iron | crushing | create:crimsite | — | `kubejs:tk3/geology/crushing_crimsite` |
| minecraft:exposed_copper | splashing | minecraft:copper_block | — | `kubejs:tk3/compat/age_copper_block` |
| minecraft:weathered_copper | splashing | minecraft:exposed_copper | — | `kubejs:tk3/compat/age_exposed_copper` |
| minecraft:oxidized_copper | splashing | minecraft:weathered_copper | — | `kubejs:tk3/compat/age_weathered_copper` |
| sophisticatedstorage:pickup_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_hydraulic_machine → E: minecraft:hopper | — | `kubejs:tk3/storage/sophisticatedstorage_pickup_upgrade` |
| sophisticatedstorage:filter_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_hydraulic_machine → E: minecraft:paper | — | `kubejs:tk3/storage/sophisticatedstorage_filter_upgrade` |
| sophisticatedstorage:feeding_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_hydraulic_machine → E: minecraft:golden_carrot | — | `kubejs:tk3/storage/sophisticatedstorage_feeding_upgrade` |
| sophisticatedstorage:pump_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_hydraulic_machine → E: create:mechanical_pump | — | `kubejs:tk3/storage/sophisticatedstorage_pump_upgrade` |
| sophisticatedbackpacks:pickup_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_hydraulic_machine → E: minecraft:hopper | — | `kubejs:tk3/storage/sophisticatedbackpacks_pickup_upgrade` |
| sophisticatedbackpacks:filter_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_hydraulic_machine → E: minecraft:paper | — | `kubejs:tk3/storage/sophisticatedbackpacks_filter_upgrade` |
| sophisticatedbackpacks:feeding_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_hydraulic_machine → E: minecraft:golden_carrot | — | `kubejs:tk3/storage/sophisticatedbackpacks_feeding_upgrade` |
| sophisticatedbackpacks:pump_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_hydraulic_machine → E: create:mechanical_pump | — | `kubejs:tk3/storage/sophisticatedbackpacks_pump_upgrade` |
| sophisticatedstorage:copper_chest | wrapped | S: sophisticatedstorage:chest → F: kubejs:tk3_hydraulic_machine → M: minecraft:copper_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_copper_chest` |
| sophisticatedstorage:iron_chest | wrapped | S: sophisticatedstorage:copper_chest → F: kubejs:tk3_hydraulic_machine → M: create:iron_sheet | — | `kubejs:tk3/storage/sophisticatedstorage_iron_chest` |
| sophisticatedstorage:copper_barrel | wrapped | S: sophisticatedstorage:barrel → F: kubejs:tk3_hydraulic_machine → M: minecraft:copper_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_copper_barrel` |
| sophisticatedstorage:iron_barrel | wrapped | S: sophisticatedstorage:copper_barrel → F: kubejs:tk3_hydraulic_machine → M: create:iron_sheet | — | `kubejs:tk3/storage/sophisticatedstorage_iron_barrel` |
| sophisticatedstorage:limited_copper_barrel_1 | wrapped | S: sophisticatedstorage:limited_barrel_1 → F: kubejs:tk3_hydraulic_machine → M: minecraft:copper_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_1` |
| sophisticatedstorage:limited_iron_barrel_1 | wrapped | S: sophisticatedstorage:limited_copper_barrel_1 → F: kubejs:tk3_hydraulic_machine → M: create:iron_sheet | — | `kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_1` |
| sophisticatedstorage:limited_copper_barrel_2 | wrapped | S: sophisticatedstorage:limited_barrel_2 → F: kubejs:tk3_hydraulic_machine → M: minecraft:copper_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_2` |
| sophisticatedstorage:limited_iron_barrel_2 | wrapped | S: sophisticatedstorage:limited_copper_barrel_2 → F: kubejs:tk3_hydraulic_machine → M: create:iron_sheet | — | `kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_2` |
| sophisticatedstorage:limited_copper_barrel_3 | wrapped | S: sophisticatedstorage:limited_barrel_3 → F: kubejs:tk3_hydraulic_machine → M: minecraft:copper_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_3` |
| sophisticatedstorage:limited_iron_barrel_3 | wrapped | S: sophisticatedstorage:limited_copper_barrel_3 → F: kubejs:tk3_hydraulic_machine → M: create:iron_sheet | — | `kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_3` |
| sophisticatedstorage:limited_copper_barrel_4 | wrapped | S: sophisticatedstorage:limited_barrel_4 → F: kubejs:tk3_hydraulic_machine → M: minecraft:copper_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_4` |
| sophisticatedstorage:limited_iron_barrel_4 | wrapped | S: sophisticatedstorage:limited_copper_barrel_4 → F: kubejs:tk3_hydraulic_machine → M: create:iron_sheet | — | `kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_4` |
| sophisticatedstorage:copper_shulker_box | wrapped | S: sophisticatedstorage:shulker_box → F: kubejs:tk3_hydraulic_machine → M: minecraft:copper_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_copper_shulker_box` |
| sophisticatedstorage:iron_shulker_box | wrapped | S: sophisticatedstorage:copper_shulker_box → F: kubejs:tk3_hydraulic_machine → M: create:iron_sheet | — | `kubejs:tk3/storage/sophisticatedstorage_iron_shulker_box` |
| sophisticatedbackpacks:copper_backpack | wrapped | S: sophisticatedbackpacks:backpack → F: kubejs:tk3_hydraulic_machine → M: minecraft:copper_ingot | — | `kubejs:tk3/storage/sophisticatedbackpacks_copper_backpack` |
| sophisticatedbackpacks:iron_backpack | wrapped | S: sophisticatedbackpacks:copper_backpack → F: kubejs:tk3_hydraulic_machine → M: create:iron_sheet | — | `kubejs:tk3/storage/sophisticatedbackpacks_iron_backpack` |
| sophisticatedstorage:basic_to_copper_tier_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_hydraulic_machine → M: minecraft:copper_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_basic_to_copper_tier_upgrade` |
| sophisticatedstorage:copper_to_iron_tier_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_hydraulic_machine → M: create:iron_sheet | — | `kubejs:tk3/storage/sophisticatedstorage_copper_to_iron_tier_upgrade` |
## Tier 3

| Output | Method | Ordered inputs | Conditions | Recipe ID |
|---|---|---|---|---|
| 2x create:brass_ingot | mixing | minecraft:copper_ingot → create:zinc_ingot | Requires heat | `kubejs:tk3/tier_3/brass_ingot` |
| create:precision_mechanism | sequence | kubejs:tk3_sealed_mechanism → create:brass_sheet → create:electron_tube → create:sand_paper | Final held tool: create:sand_paper; 1 durability/use; unbreakable supported; One loop, guaranteed result | `kubejs:tk3/tier_3/precision_mechanism` |
| 6x create:brass_funnel | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/brass_funnel` |
| 6x create:brass_tunnel | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/brass_tunnel` |
| create:mechanical_arm | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/mechanical_arm` |
| create:rotation_speed_controller | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/rotation_speed_controller` |
| 3x create:mechanical_crafter | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/mechanical_crafter` |
| create:sequenced_gearshift | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/sequenced_gearshift` |
| create:packager | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/packager` |
| create:stock_link | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/stock_link` |
| create:stock_ticker | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/stock_ticker` |
| create:repackager | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/repackager` |
| create:package_frogport | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/package_frogport` |
| create_enchantment_industry:grindstone_drain | shapeless | create:precision_mechanism → minecraft:grindstone → create:brass_casing | — | `kubejs:tk3/tier_3/grindstone_drain` |
| create_enchantment_industry:printer | shapeless | create:precision_mechanism → minecraft:book → create:mechanical_press | — | `kubejs:tk3/tier_3/printer` |
| aeronautics:propeller_bearing | shapeless | create:precision_mechanism → create:mechanical_bearing → create:propeller | — | `kubejs:tk3/tier_3/propeller_bearing` |
| 2x create:content_observer | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/content_observer` |
| 2x create:stockpile_switch | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/stockpile_switch` |
| 3x create:smart_chute | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/smart_chute` |
| 3x create:smart_fluid_pipe | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/smart_fluid_pipe` |
| 2x create:display_link | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/display_link` |
| 6x create:display_board | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/display_board` |
| 4x create:redstone_link | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/redstone_link` |
| create:elevator_pulley | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/elevator_pulley` |
| create:contraption_controls | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/contraption_controls` |
| create:track_station | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/track_station` |
| 2x create:track_signal | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/track_signal` |
| 2x create:track_observer | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/track_observer` |
| create:controls | stonecutting | kubejs:tk3_precision_machine | — | `kubejs:tk3/tier_3/controls` |
| kubejs:tk3_precision_machine | deploying | create:brass_casing → create:precision_mechanism | — | `kubejs:tk3/frames/precision_assembly` |
| 2x create:crushing_wheel | mechanical_crafting | F: kubejs:tk3_precision_machine → A: create:andesite_alloy → P: #minecraft:planks | — | `kubejs:tk3/frames/create_crushing_wheel` |
| 9x create:copper_nugget | splashing | create:crushed_raw_copper | — | `kubejs:tk3/geology/wash_copper` |
| 9x minecraft:iron_nugget | splashing | create:crushed_raw_iron | — | `kubejs:tk3/geology/wash_iron` |
| 3x create:zinc_nugget | milling | create:asurine | — | `kubejs:tk3/geology/milling_asurine` |
| create:crushed_raw_zinc | crushing | create:asurine | — | `kubejs:tk3/geology/crushing_asurine` |
| 9x create:zinc_nugget | splashing | create:crushed_raw_zinc | — | `kubejs:tk3/geology/wash_zinc` |
| 3x minecraft:gold_nugget | milling | create:ochrum | — | `kubejs:tk3/geology/milling_ochrum` |
| create:crushed_raw_gold | crushing | create:ochrum | — | `kubejs:tk3/geology/crushing_ochrum` |
| 9x minecraft:gold_nugget | splashing | create:crushed_raw_gold | — | `kubejs:tk3/geology/wash_gold` |
| sophisticatedstorage:void_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_precision_machine → E: minecraft:lava_bucket | — | `kubejs:tk3/storage/sophisticatedstorage_void_upgrade` |
| sophisticatedstorage:compacting_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_precision_machine → E: create:mechanical_press | — | `kubejs:tk3/storage/sophisticatedstorage_compacting_upgrade` |
| sophisticatedstorage:stonecutter_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_precision_machine → E: minecraft:stonecutter | — | `kubejs:tk3/storage/sophisticatedstorage_stonecutter_upgrade` |
| sophisticatedstorage:crafting_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_precision_machine → E: minecraft:crafting_table | — | `kubejs:tk3/storage/sophisticatedstorage_crafting_upgrade` |
| sophisticatedstorage:magnet_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_precision_machine → E: minecraft:iron_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_magnet_upgrade` |
| sophisticatedstorage:advanced_compacting_upgrade | wrapped | U: sophisticatedstorage:compacting_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedstorage_advanced_compacting_upgrade` |
| sophisticatedstorage:advanced_feeding_upgrade | wrapped | U: sophisticatedstorage:feeding_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedstorage_advanced_feeding_upgrade` |
| sophisticatedstorage:advanced_filter_upgrade | wrapped | U: sophisticatedstorage:filter_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedstorage_advanced_filter_upgrade` |
| sophisticatedstorage:advanced_hopper_upgrade | wrapped | U: sophisticatedstorage:hopper_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedstorage_advanced_hopper_upgrade` |
| sophisticatedstorage:advanced_jukebox_upgrade | wrapped | U: sophisticatedstorage:jukebox_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedstorage_advanced_jukebox_upgrade` |
| sophisticatedstorage:advanced_magnet_upgrade | wrapped | U: sophisticatedstorage:magnet_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedstorage_advanced_magnet_upgrade` |
| sophisticatedstorage:advanced_pickup_upgrade | wrapped | U: sophisticatedstorage:pickup_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedstorage_advanced_pickup_upgrade` |
| sophisticatedstorage:advanced_void_upgrade | wrapped | U: sophisticatedstorage:void_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedstorage_advanced_void_upgrade` |
| sophisticatedstorage:stack_upgrade_tier_1 | wrapped | U: sophisticatedstorage:upgrade_base → F: kubejs:tk3_precision_machine → M: minecraft:gold_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_stack_upgrade_tier_1` |
| sophisticatedbackpacks:void_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_precision_machine → E: minecraft:lava_bucket | — | `kubejs:tk3/storage/sophisticatedbackpacks_void_upgrade` |
| sophisticatedbackpacks:compacting_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_precision_machine → E: create:mechanical_press | — | `kubejs:tk3/storage/sophisticatedbackpacks_compacting_upgrade` |
| sophisticatedbackpacks:stonecutter_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_precision_machine → E: minecraft:stonecutter | — | `kubejs:tk3/storage/sophisticatedbackpacks_stonecutter_upgrade` |
| sophisticatedbackpacks:crafting_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_precision_machine → E: minecraft:crafting_table | — | `kubejs:tk3/storage/sophisticatedbackpacks_crafting_upgrade` |
| sophisticatedbackpacks:magnet_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_precision_machine → E: minecraft:iron_ingot | — | `kubejs:tk3/storage/sophisticatedbackpacks_magnet_upgrade` |
| sophisticatedbackpacks:advanced_compacting_upgrade | wrapped | U: sophisticatedbackpacks:compacting_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_compacting_upgrade` |
| sophisticatedbackpacks:advanced_deposit_upgrade | wrapped | U: sophisticatedbackpacks:deposit_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_deposit_upgrade` |
| sophisticatedbackpacks:advanced_feeding_upgrade | wrapped | U: sophisticatedbackpacks:feeding_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_feeding_upgrade` |
| sophisticatedbackpacks:advanced_filter_upgrade | wrapped | U: sophisticatedbackpacks:filter_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_filter_upgrade` |
| sophisticatedbackpacks:advanced_jukebox_upgrade | wrapped | U: sophisticatedbackpacks:jukebox_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_jukebox_upgrade` |
| sophisticatedbackpacks:advanced_magnet_upgrade | wrapped | U: sophisticatedbackpacks:magnet_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_magnet_upgrade` |
| sophisticatedbackpacks:advanced_mob_catcher_upgrade | wrapped | U: sophisticatedbackpacks:mob_catcher_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_mob_catcher_upgrade` |
| sophisticatedbackpacks:advanced_pickup_upgrade | wrapped | U: sophisticatedbackpacks:pickup_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_pickup_upgrade` |
| sophisticatedbackpacks:advanced_refill_upgrade | wrapped | U: sophisticatedbackpacks:refill_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_refill_upgrade` |
| sophisticatedbackpacks:advanced_restock_upgrade | wrapped | U: sophisticatedbackpacks:restock_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_restock_upgrade` |
| sophisticatedbackpacks:advanced_tool_swapper_upgrade | wrapped | U: sophisticatedbackpacks:tool_swapper_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_tool_swapper_upgrade` |
| sophisticatedbackpacks:advanced_void_upgrade | wrapped | U: sophisticatedbackpacks:void_upgrade → F: kubejs:tk3_precision_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_void_upgrade` |
| sophisticatedbackpacks:stack_upgrade_tier_1 | wrapped | U: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_precision_machine → M: minecraft:gold_ingot | — | `kubejs:tk3/storage/sophisticatedbackpacks_stack_upgrade_tier_1` |
| sophisticatedstorage:gold_chest | wrapped | S: sophisticatedstorage:iron_chest → F: kubejs:tk3_precision_machine → M: minecraft:gold_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_gold_chest` |
| sophisticatedstorage:gold_barrel | wrapped | S: sophisticatedstorage:iron_barrel → F: kubejs:tk3_precision_machine → M: minecraft:gold_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_gold_barrel` |
| sophisticatedstorage:limited_gold_barrel_1 | wrapped | S: sophisticatedstorage:limited_iron_barrel_1 → F: kubejs:tk3_precision_machine → M: minecraft:gold_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_1` |
| sophisticatedstorage:limited_gold_barrel_2 | wrapped | S: sophisticatedstorage:limited_iron_barrel_2 → F: kubejs:tk3_precision_machine → M: minecraft:gold_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_2` |
| sophisticatedstorage:limited_gold_barrel_3 | wrapped | S: sophisticatedstorage:limited_iron_barrel_3 → F: kubejs:tk3_precision_machine → M: minecraft:gold_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_3` |
| sophisticatedstorage:limited_gold_barrel_4 | wrapped | S: sophisticatedstorage:limited_iron_barrel_4 → F: kubejs:tk3_precision_machine → M: minecraft:gold_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_4` |
| sophisticatedstorage:gold_shulker_box | wrapped | S: sophisticatedstorage:iron_shulker_box → F: kubejs:tk3_precision_machine → M: minecraft:gold_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_gold_shulker_box` |
| sophisticatedbackpacks:gold_backpack | wrapped | S: sophisticatedbackpacks:iron_backpack → F: kubejs:tk3_precision_machine → M: minecraft:gold_ingot | — | `kubejs:tk3/storage/sophisticatedbackpacks_gold_backpack` |
| sophisticatedstorage:iron_to_gold_tier_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_precision_machine → M: minecraft:gold_ingot | — | `kubejs:tk3/storage/sophisticatedstorage_iron_to_gold_tier_upgrade` |
| sophisticatedstorage:controller | shapeless | kubejs:tk3_precision_machine → minecraft:comparator → minecraft:chest | — | `kubejs:tk3/storage/sophisticatedstorage_controller` |
| sophisticatedstorage:storage_link | shapeless | create:precision_mechanism → sophisticatedstorage:upgrade_base → minecraft:ender_pearl | — | `kubejs:tk3/storage/sophisticatedstorage_storage_link` |
| sophisticatedstorage:storage_input | shapeless | create:precision_mechanism → sophisticatedstorage:upgrade_base → minecraft:hopper | — | `kubejs:tk3/storage/sophisticatedstorage_storage_input` |
| sophisticatedstorage:storage_output | shapeless | create:precision_mechanism → sophisticatedstorage:upgrade_base → create:brass_funnel | — | `kubejs:tk3/storage/sophisticatedstorage_storage_output` |
| sophisticatedstorage:storage_io | shapeless | create:precision_mechanism → sophisticatedstorage:upgrade_base → create:brass_tunnel | — | `kubejs:tk3/storage/sophisticatedstorage_storage_io` |
## Tier 4

| Output | Method | Ordered inputs | Conditions | Recipe ID |
|---|---|---|---|---|
| ars_nouveau:enchanting_apparatus | shapeless | kubejs:tk3_precision_machine → minecraft:diamond → ars_nouveau:source_gem | — | `kubejs:tk3/tier_4/enchanting_apparatus` |
| irons_spellbooks:arcane_essence | haunting | ars_nouveau:source_gem | — | `kubejs:tk3/tier_4/arcane_essence` |
| kubejs:tk3_arcane_mechanism | sequence | create:precision_mechanism → ars_nouveau:source_gem → irons_spellbooks:arcane_essence → ars_nouveau:manipulation_essence → minecraft:gold_ingot → ars_nouveau:enchanters_sword | Final held tool: ars_nouveau:enchanters_sword; 1 durability/use; unbreakable supported; One loop, guaranteed result | `kubejs:tk3/tier_4/tk3_arcane_mechanism` |
| ars_nouveau:agronomic_sourcelink | apparatus | kubejs:tk3_arcane_machine → minecraft:wheat → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/agronomic_sourcelink` |
| ars_nouveau:relay | apparatus | kubejs:tk3_arcane_machine → minecraft:redstone → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/relay` |
| ars_nouveau:starbuncle_charm | apparatus | kubejs:tk3_arcane_machine → minecraft:gold_ingot → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/starbuncle_charm` |
| ars_nouveau:whirlisprig_charm | apparatus | kubejs:tk3_arcane_machine → minecraft:oak_sapling → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/whirlisprig_charm` |
| ars_nouveau:wixie_charm | apparatus | kubejs:tk3_arcane_machine → minecraft:cauldron → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/wixie_charm` |
| irons_spellbooks:alchemist_cauldron | apparatus | kubejs:tk3_arcane_machine → minecraft:cauldron → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/alchemist_cauldron` |
| irons_spellbooks:arcane_anvil | apparatus | kubejs:tk3_arcane_machine → minecraft:anvil → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/arcane_anvil` |
| create_enchantment_industry:blaze_enchanter | apparatus | kubejs:tk3_arcane_machine → minecraft:enchanting_table → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/blaze_enchanter` |
| 2x irons_spellbooks:common_ink | mixing | minecraft:ink_sac → irons_spellbooks:arcane_essence → 250 mB minecraft:water | — | `kubejs:tk3/tier_4/common_ink` |
| ars_nouveau:relay_splitter | apparatus | kubejs:tk3_arcane_machine → ars_nouveau:relay → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/relay_splitter` |
| ars_nouveau:relay_deposit | apparatus | kubejs:tk3_arcane_machine → minecraft:chest → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/relay_deposit` |
| ars_nouveau:relay_collector | apparatus | kubejs:tk3_arcane_machine → minecraft:hopper → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/relay_collector` |
| ars_nouveau:alchemical_sourcelink | apparatus | kubejs:tk3_arcane_machine → minecraft:brewing_stand → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/alchemical_sourcelink` |
| ars_nouveau:mycelial_sourcelink | apparatus | kubejs:tk3_arcane_machine → minecraft:brown_mushroom → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/mycelial_sourcelink` |
| create_enchantment_industry:mechanical_grindstone | apparatus | kubejs:tk3_arcane_machine → minecraft:grindstone → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/mechanical_grindstone` |
| create_enchantment_industry:experience_hatch | apparatus | kubejs:tk3_arcane_machine → create:fluid_tank → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/tier_4/experience_hatch` |
| kubejs:tk3_arcane_machine | deploying | create_wizardry:arcane_casing → kubejs:tk3_arcane_mechanism | — | `kubejs:tk3/frames/arcane_calibration` |
| irons_spellbooks:blank_rune | compacting | minecraft:stone → irons_spellbooks:arcane_essence | — | `kubejs:tk3/magic/irons_spellbooks_blank_rune` |
| 2x irons_spellbooks:magic_cloth | mixing | #minecraft:wool → irons_spellbooks:arcane_essence → 250 mB minecraft:water | — | `kubejs:tk3/magic/irons_spellbooks_magic_cloth` |
| irons_spellbooks:arcane_ingot | apparatus | minecraft:iron_ingot → ars_nouveau:source_gem → irons_spellbooks:arcane_essence → minecraft:gold_ingot | 1000 Source | `kubejs:tk3/magic/irons_spellbooks_arcane_ingot` |
| irons_spellbooks:fire_rune | apparatus | irons_spellbooks:blank_rune → ars_nouveau:fire_essence → kubejs:tk3_arcane_mechanism | 500 Source | `kubejs:tk3/magic/irons_spellbooks_fire_rune` |
| irons_spellbooks:ice_rune | apparatus | irons_spellbooks:blank_rune → ars_nouveau:water_essence → kubejs:tk3_arcane_mechanism | 500 Source | `kubejs:tk3/magic/irons_spellbooks_ice_rune` |
| irons_spellbooks:lightning_rune | apparatus | irons_spellbooks:blank_rune → ars_nouveau:air_essence → kubejs:tk3_arcane_mechanism | 500 Source | `kubejs:tk3/magic/irons_spellbooks_lightning_rune` |
| irons_spellbooks:nature_rune | apparatus | irons_spellbooks:blank_rune → ars_nouveau:earth_essence → kubejs:tk3_arcane_mechanism | 500 Source | `kubejs:tk3/magic/irons_spellbooks_nature_rune` |
| create_wizardry:arcane_sheet | pressing | irons_spellbooks:arcane_ingot | — | `kubejs:tk3/magic/create_wizardry_arcane_sheet` |
| create_wizardry:arcane_pump | apparatus | kubejs:tk3_arcane_machine → create:mechanical_pump → create_wizardry:arcane_sheet → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/magic/create_wizardry_arcane_pump` |
| create_wizardry:arcane_pipe | apparatus | kubejs:tk3_arcane_machine → create:fluid_pipe → create_wizardry:arcane_sheet → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/magic/create_wizardry_arcane_pipe` |
| create_wizardry:smart_arcane_pipe | apparatus | kubejs:tk3_arcane_machine → create:smart_fluid_pipe → create_wizardry:arcane_sheet → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/magic/create_wizardry_smart_arcane_pipe` |
| create_wizardry:mana_siphon | apparatus | kubejs:tk3_arcane_machine → ars_nouveau:source_jar → create_wizardry:arcane_sheet → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/magic/create_wizardry_mana_siphon` |
| create_wizardry:channeler | apparatus | kubejs:tk3_arcane_machine → irons_spellbooks:arcane_rune → create_wizardry:arcane_sheet → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/magic/create_wizardry_channeler` |
| create_wizardry:blaze_caster | apparatus | kubejs:tk3_arcane_machine → minecraft:blaze_rod → create_wizardry:arcane_sheet → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/magic/create_wizardry_blaze_caster` |
| ars_creo:starbuncle_wheel | apparatus | kubejs:tk3_arcane_machine → ars_nouveau:starbuncle_charm → create_wizardry:arcane_sheet → ars_nouveau:source_gem | 1000 Source | `kubejs:tk3/magic/ars_creo_starbuncle_wheel` |
| irons_spellbooks:common_ink | cauldron_brew | minecraft:ink_sac | — | `kubejs:tk3/magic/mana_ink` |
| irons_spellbooks:common_ink | cauldron_empty | minecraft:glass_bottle | — | `kubejs:tk3/magic/bottle_common_ink` |
| sophisticatedstorage:xp_pump_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_arcane_machine → E: minecraft:experience_bottle | — | `kubejs:tk3/storage/sophisticatedstorage_xp_pump_upgrade` |
| sophisticatedstorage:alchemy_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_arcane_machine → E: minecraft:brewing_stand | — | `kubejs:tk3/storage/sophisticatedstorage_alchemy_upgrade` |
| sophisticatedstorage:advanced_alchemy_upgrade | wrapped | U: sophisticatedstorage:alchemy_upgrade → F: kubejs:tk3_arcane_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedstorage_advanced_alchemy_upgrade` |
| sophisticatedstorage:advanced_pump_upgrade | wrapped | U: sophisticatedstorage:pump_upgrade → F: kubejs:tk3_arcane_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedstorage_advanced_pump_upgrade` |
| sophisticatedbackpacks:xp_pump_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_arcane_machine → E: minecraft:experience_bottle | — | `kubejs:tk3/storage/sophisticatedbackpacks_xp_pump_upgrade` |
| sophisticatedbackpacks:alchemy_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_arcane_machine → E: minecraft:brewing_stand | — | `kubejs:tk3/storage/sophisticatedbackpacks_alchemy_upgrade` |
| sophisticatedbackpacks:advanced_alchemy_upgrade | wrapped | U: sophisticatedbackpacks:alchemy_upgrade → F: kubejs:tk3_arcane_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_alchemy_upgrade` |
| sophisticatedbackpacks:advanced_pump_upgrade | wrapped | U: sophisticatedbackpacks:pump_upgrade → F: kubejs:tk3_arcane_machine → R: minecraft:redstone | — | `kubejs:tk3/storage/sophisticatedbackpacks_advanced_pump_upgrade` |
| create_wizardry:arcane_casing | apparatus | create:brass_casing → ars_nouveau:source_gem → irons_spellbooks:arcane_essence → minecraft:gold_ingot | 500 Source | `kubejs:tk3/frames/arcane_casing` |
## Tier 5

| Output | Method | Ordered inputs | Conditions | Recipe ID |
|---|---|---|---|---|
| 2x mekanism:ingot_steel | mixing | 2x minecraft:iron_ingot → minecraft:coal | Requires heat | `kubejs:tk3/tier_5/steel_bootstrap` |
| mekanism:steel_casing | shaped | S: mekanism:ingot_steel → O: mekanism:ingot_osmium → P: kubejs:tk3_precision_machine → A: kubejs:tk3_arcane_machine | — | `kubejs:tk3/tier_5/steel_casing` |
| mekanism:metallurgic_infuser | deploying | mekanism:steel_casing → ars_nouveau:wilden_tribute | Held catalyst retained | `kubejs:tk3/tier_5/metallurgic_infuser` |
| mekanism:enrichment_chamber | shapeless | mekanism:steel_casing → mekanism:alloy_infused → create:precision_mechanism | — | `kubejs:tk3/tier_5/enrichment_chamber` |
| mekanism:crusher | shapeless | mekanism:steel_casing → minecraft:diamond → create:precision_mechanism | — | `kubejs:tk3/tier_5/crusher` |
| mekanism:energized_smelter | shapeless | mekanism:steel_casing → minecraft:furnace → create:precision_mechanism | — | `kubejs:tk3/tier_5/energized_smelter` |
| mekanismgenerators:heat_generator | shapeless | mekanism:steel_casing → minecraft:furnace → create:precision_mechanism | — | `kubejs:tk3/tier_5/heat_generator` |
| createaddition:alternator | shapeless | mekanism:steel_casing → createaddition:copper_spool → create:precision_mechanism | — | `kubejs:tk3/tier_5/alternator` |
| createaddition:electric_motor | shapeless | mekanism:steel_casing → createaddition:capacitor → create:precision_mechanism | — | `kubejs:tk3/tier_5/electric_motor` |
| 2x mekanism:dust_iron | enriching | minecraft:raw_iron | — | `kubejs:tk3/tier_5/iron_refining` |
| 2x mekanism:dust_copper | enriching | minecraft:raw_copper | — | `kubejs:tk3/tier_5/copper_refining` |
| 4x mekanism:basic_universal_cable | shapeless | mekanism:ingot_steel → createaddition:copper_spool → minecraft:redstone | — | `kubejs:tk3/tier_5/basic_universal_cable` |
| 4x mekanism:basic_mechanical_pipe | shapeless | mekanism:ingot_steel → create:fluid_pipe → minecraft:glass | — | `kubejs:tk3/tier_5/basic_mechanical_pipe` |
| 4x mekanism:basic_logistical_transporter | shapeless | mekanism:ingot_steel → create:brass_funnel → minecraft:redstone | — | `kubejs:tk3/tier_5/basic_logistical_transporter` |
| mekanism:basic_energy_cube | shapeless | mekanism:steel_casing → mekanism:alloy_infused → minecraft:redstone | — | `kubejs:tk3/tier_5/basic_energy_cube` |
| mekanism:ingot_steel | mek_smelting | mekanism:dust_steel | — | `kubejs:tk3/tier_5/steel_from_dust` |
| sophisticatedstorage:smelting_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_arcane_machine → E: minecraft:furnace | — | `kubejs:tk3/storage/sophisticatedstorage_smelting_upgrade` |
| sophisticatedstorage:smoking_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_arcane_machine → E: minecraft:smoker | — | `kubejs:tk3/storage/sophisticatedstorage_smoking_upgrade` |
| sophisticatedstorage:blasting_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: kubejs:tk3_arcane_machine → E: minecraft:blast_furnace | — | `kubejs:tk3/storage/sophisticatedstorage_blasting_upgrade` |
| sophisticatedstorage:stack_upgrade_tier_2 | wrapped | U: sophisticatedstorage:stack_upgrade_tier_1 → F: mekanism:steel_casing → M: mekanism:alloy_infused | — | `kubejs:tk3/storage/sophisticatedstorage_stack_upgrade_tier_2` |
| sophisticatedbackpacks:smelting_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_arcane_machine → E: minecraft:furnace | — | `kubejs:tk3/storage/sophisticatedbackpacks_smelting_upgrade` |
| sophisticatedbackpacks:smoking_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_arcane_machine → E: minecraft:smoker | — | `kubejs:tk3/storage/sophisticatedbackpacks_smoking_upgrade` |
| sophisticatedbackpacks:blasting_upgrade | shaped | B: sophisticatedbackpacks:upgrade_base → F: kubejs:tk3_arcane_machine → E: minecraft:blast_furnace | — | `kubejs:tk3/storage/sophisticatedbackpacks_blasting_upgrade` |
| sophisticatedbackpacks:stack_upgrade_tier_2 | wrapped | U: sophisticatedbackpacks:stack_upgrade_tier_1 → F: mekanism:steel_casing → M: mekanism:alloy_infused | — | `kubejs:tk3/storage/sophisticatedbackpacks_stack_upgrade_tier_2` |
| sophisticatedstorage:diamond_chest | wrapped | S: sophisticatedstorage:gold_chest → F: mekanism:steel_casing → M: minecraft:diamond | — | `kubejs:tk3/storage/sophisticatedstorage_diamond_chest` |
| sophisticatedstorage:diamond_barrel | wrapped | S: sophisticatedstorage:gold_barrel → F: mekanism:steel_casing → M: minecraft:diamond | — | `kubejs:tk3/storage/sophisticatedstorage_diamond_barrel` |
| sophisticatedstorage:limited_diamond_barrel_1 | wrapped | S: sophisticatedstorage:limited_gold_barrel_1 → F: mekanism:steel_casing → M: minecraft:diamond | — | `kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_1` |
| sophisticatedstorage:limited_diamond_barrel_2 | wrapped | S: sophisticatedstorage:limited_gold_barrel_2 → F: mekanism:steel_casing → M: minecraft:diamond | — | `kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_2` |
| sophisticatedstorage:limited_diamond_barrel_3 | wrapped | S: sophisticatedstorage:limited_gold_barrel_3 → F: mekanism:steel_casing → M: minecraft:diamond | — | `kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_3` |
| sophisticatedstorage:limited_diamond_barrel_4 | wrapped | S: sophisticatedstorage:limited_gold_barrel_4 → F: mekanism:steel_casing → M: minecraft:diamond | — | `kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_4` |
| sophisticatedstorage:diamond_shulker_box | wrapped | S: sophisticatedstorage:gold_shulker_box → F: mekanism:steel_casing → M: minecraft:diamond | — | `kubejs:tk3/storage/sophisticatedstorage_diamond_shulker_box` |
| sophisticatedbackpacks:diamond_backpack | wrapped | S: sophisticatedbackpacks:gold_backpack → F: mekanism:steel_casing → M: minecraft:diamond | — | `kubejs:tk3/storage/sophisticatedbackpacks_diamond_backpack` |
| sophisticatedstorage:gold_to_diamond_tier_upgrade | shaped | B: sophisticatedstorage:upgrade_base → F: mekanism:steel_casing → M: minecraft:diamond | — | `kubejs:tk3/storage/sophisticatedstorage_gold_to_diamond_tier_upgrade` |
| 2x mekanism:dust_gold | mek_enriching | minecraft:raw_gold | — | `kubejs:tk3/late_layers/mekanism_dust_gold` |
| 2x mekanism:dust_osmium | mek_enriching | mekanism:raw_osmium | — | `kubejs:tk3/late_layers/mekanism_dust_osmium` |
| 2x mekanism:dust_tin | mek_enriching | mekanism:raw_tin | — | `kubejs:tk3/late_layers/mekanism_dust_tin` |
| 2x mekanism:dust_lead | mek_enriching | mekanism:raw_lead | — | `kubejs:tk3/late_layers/mekanism_dust_lead` |
## Tier 6 · reserved

| Output | Method | Ordered inputs | Conditions | Recipe ID |
|---|---|---|---|---|
| ae2:charger | shapeless | mekanism:steel_casing → ae2:certus_quartz_crystal → createaddition:capacitor | — | `kubejs:tk3/late_layers/ae2_charger` |
| ae2:inscriber | shapeless | mekanism:steel_casing → createaddition:electric_motor → minecraft:gold_ingot | — | `kubejs:tk3/late_layers/ae2_inscriber` |
| ae2:charged_certus_quartz_crystal | ae_charger | ae2:certus_quartz_crystal | — | `kubejs:tk3/late_layers/ae2_charged_certus_quartz_crystal` |
| ae2:certus_quartz_dust | crushing | ae2:certus_quartz_crystal | — | `kubejs:tk3/late_layers/grind_certus_quartz_crystal` |
| ae2:fluix_dust | crushing | ae2:fluix_crystal | — | `kubejs:tk3/late_layers/grind_fluix_crystal` |
| ae2:printed_silicon | ae_print | ae2:silicon → ae2:silicon_press | — | `kubejs:tk3/late_layers/ae2_printed_silicon` |
| ae2:printed_logic_processor | ae_print | minecraft:gold_ingot → ae2:logic_processor_press | — | `kubejs:tk3/late_layers/ae2_printed_logic_processor` |
| ae2:logic_processor | ae_processor | minecraft:redstone → ae2:printed_logic_processor → ae2:printed_silicon | — | `kubejs:tk3/late_layers/ae2_logic_processor` |
| ae2:printed_calculation_processor | ae_print | ae2:certus_quartz_crystal → ae2:calculation_processor_press | — | `kubejs:tk3/late_layers/ae2_printed_calculation_processor` |
| ae2:calculation_processor | ae_processor | minecraft:redstone → ae2:printed_calculation_processor → ae2:printed_silicon | — | `kubejs:tk3/late_layers/ae2_calculation_processor` |
| ae2:printed_engineering_processor | ae_print | minecraft:diamond → ae2:engineering_processor_press | — | `kubejs:tk3/late_layers/ae2_printed_engineering_processor` |
| ae2:engineering_processor | ae_processor | minecraft:redstone → ae2:printed_engineering_processor → ae2:printed_silicon | — | `kubejs:tk3/late_layers/ae2_engineering_processor` |
