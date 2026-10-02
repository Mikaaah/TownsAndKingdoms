// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {
  ["alexscaves:pewen_log", "alexscaves:pewen_planks", "alexscaves:pewen_wood", "alexscaves:stripped_pewen_log", "alexscaves:stripped_pewen_wood", "alexscaves:stripped_thornwood_log", "alexscaves:stripped_thornwood_wood", "alexscaves:thornwood_log", "alexscaves:thornwood_planks", "alexscaves:thornwood_wood", "atmospheric:aspen_log", "atmospheric:aspen_planks", "atmospheric:aspen_wood", "atmospheric:grimwood_log", "atmospheric:grimwood_planks", "atmospheric:kousa_log", "atmospheric:kousa_planks", "atmospheric:kousa_wood", "atmospheric:laurel_log", "atmospheric:laurel_planks", "atmospheric:laurel_wood", "atmospheric:morado_log", "atmospheric:morado_planks", "atmospheric:morado_wood", "atmospheric:rosewood_log", "atmospheric:rosewood_planks", "atmospheric:stripped_aspen_log", "atmospheric:stripped_aspen_wood", "atmospheric:stripped_grimwood_log", "atmospheric:stripped_kousa_log", "atmospheric:stripped_kousa_wood", "atmospheric:stripped_laurel_log", "atmospheric:stripped_laurel_wood", "atmospheric:stripped_morado_log", "atmospheric:stripped_morado_wood", "atmospheric:stripped_rosewood_log", "atmospheric:stripped_yucca_log", "atmospheric:stripped_yucca_wood", "atmospheric:yucca_log", "atmospheric:yucca_planks", "atmospheric:yucca_wood", "autumnity:maple_log", "autumnity:maple_planks", "autumnity:maple_wood", "autumnity:stripped_maple_log", "autumnity:stripped_maple_wood", "betterend:dragon_tree_log", "betterend:dragon_tree_planks", "betterend:end_lotus_log", "betterend:end_lotus_planks", "betterend:end_lotus_stem", "betterend:helix_tree_log", "betterend:helix_tree_planks", "betterend:jellyshroom_log", "betterend:jellyshroom_planks", "betterend:lacugrove_log", "betterend:lacugrove_planks", "betterend:lucernia_log", "betterend:lucernia_planks", "betterend:mossy_glowshroom_log", "betterend:mossy_glowshroom_planks", "betterend:pythadendron_log", "betterend:pythadendron_planks", "betterend:tenanea_log", "betterend:tenanea_planks", "betterend:umbrella_tree_log", "betterend:umbrella_tree_planks", "betternether:anchor_tree_log", "betternether:anchor_tree_planks", "betternether:gloomwood_dark_log", "betternether:gloomwood_dark_planks", "betternether:gloomwood_log", "betternether:gloomwood_planks", "betternether:gloomwood_transition_log", "betternether:gloomwood_transition_planks", "betternether:mushroom_fir_log", "betternether:mushroom_fir_planks", "betternether:mushroom_fir_stem", "betternether:nether_mushroom_planks", "betternether:nether_mushroom_stem", "betternether:nether_reed_planks", "betternether:nether_reed_stem", "betternether:nether_sakura_log", "betternether:nether_sakura_planks", "betternether:rubeus_log", "betternether:rubeus_planks", "betternether:stalagnate_log", "betternether:stalagnate_planks", "betternether:stalagnate_stem", "betternether:wart_log", "betternether:wart_planks", "betternether:willow_log", "betternether:willow_planks", "biomesoplenty:dead_log", "biomesoplenty:dead_planks", "biomesoplenty:dead_wood", "biomesoplenty:empyreal_log", "biomesoplenty:empyreal_planks", "biomesoplenty:empyreal_wood", "biomesoplenty:fir_log", "biomesoplenty:fir_planks", "biomesoplenty:fir_wood", "biomesoplenty:hellbark_log", "biomesoplenty:hellbark_planks", "biomesoplenty:hellbark_wood", "biomesoplenty:jacaranda_log", "biomesoplenty:jacaranda_planks", "biomesoplenty:jacaranda_wood", "biomesoplenty:magic_log", "biomesoplenty:magic_planks", "biomesoplenty:magic_wood", "biomesoplenty:mahogany_log", "biomesoplenty:mahogany_planks", "biomesoplenty:mahogany_wood", "biomesoplenty:maple_log", "biomesoplenty:maple_planks", "biomesoplenty:maple_wood", "biomesoplenty:palm_log", "biomesoplenty:palm_planks", "biomesoplenty:palm_wood", "biomesoplenty:pine_log", "biomesoplenty:pine_planks", "biomesoplenty:pine_wood", "biomesoplenty:redwood_log", "biomesoplenty:redwood_planks", "biomesoplenty:redwood_wood", "biomesoplenty:stripped_dead_log", "biomesoplenty:stripped_dead_wood", "biomesoplenty:stripped_empyreal_log", "biomesoplenty:stripped_empyreal_wood", "biomesoplenty:stripped_fir_log", "biomesoplenty:stripped_fir_wood", "biomesoplenty:stripped_hellbark_log", "biomesoplenty:stripped_hellbark_wood", "biomesoplenty:stripped_jacaranda_log", "biomesoplenty:stripped_jacaranda_wood", "biomesoplenty:stripped_magic_log", "biomesoplenty:stripped_magic_wood", "biomesoplenty:stripped_mahogany_log", "biomesoplenty:stripped_mahogany_wood", "biomesoplenty:stripped_maple_log", "biomesoplenty:stripped_maple_wood", "biomesoplenty:stripped_palm_log", "biomesoplenty:stripped_palm_wood", "biomesoplenty:stripped_pine_log", "biomesoplenty:stripped_pine_wood", "biomesoplenty:stripped_redwood_log", "biomesoplenty:stripped_redwood_wood", "biomesoplenty:stripped_umbran_log", "biomesoplenty:stripped_umbran_wood", "biomesoplenty:stripped_willow_log", "biomesoplenty:stripped_willow_wood", "biomesoplenty:umbran_log", "biomesoplenty:umbran_planks", "biomesoplenty:umbran_wood", "biomesoplenty:willow_log", "biomesoplenty:willow_planks", "biomesoplenty:willow_wood", "biomeswevegone:aspen_log", "biomeswevegone:aspen_planks", "biomeswevegone:aspen_wood", "biomeswevegone:baobab_log", "biomeswevegone:baobab_planks", "biomeswevegone:baobab_wood", "biomeswevegone:blue_enchanted_log", "biomeswevegone:blue_enchanted_planks", "biomeswevegone:blue_enchanted_wood", "biomeswevegone:cika_log", "biomeswevegone:cika_planks", "biomeswevegone:cika_wood", "biomeswevegone:cypress_log", "biomeswevegone:cypress_planks", "biomeswevegone:cypress_wood", "biomeswevegone:ebony_log", "biomeswevegone:ebony_planks", "biomeswevegone:ebony_wood", "biomeswevegone:fir_log", "biomeswevegone:fir_planks", "biomeswevegone:fir_wood", "biomeswevegone:florus_planks", "biomeswevegone:florus_stem", "biomeswevegone:florus_wood", "biomeswevegone:green_enchanted_log", "biomeswevegone:green_enchanted_planks", "biomeswevegone:green_enchanted_wood", "biomeswevegone:holly_log", "biomeswevegone:holly_planks", "biomeswevegone:holly_wood", "biomeswevegone:ironwood_log", "biomeswevegone:ironwood_planks", "biomeswevegone:ironwood_wood", "biomeswevegone:jacaranda_log", "biomeswevegone:jacaranda_planks", "biomeswevegone:jacaranda_wood", "biomeswevegone:mahogany_log", "biomeswevegone:mahogany_planks", "biomeswevegone:mahogany_wood", "biomeswevegone:maple_log", "biomeswevegone:maple_planks", "biomeswevegone:maple_wood", "biomeswevegone:palm_log", "biomeswevegone:palm_planks", "biomeswevegone:palm_wood", "biomeswevegone:pine_log", "biomeswevegone:pine_planks", "biomeswevegone:pine_wood", "biomeswevegone:rainbow_eucalyptus_log", "biomeswevegone:rainbow_eucalyptus_planks", "biomeswevegone:rainbow_eucalyptus_wood", "biomeswevegone:redwood_log", "biomeswevegone:redwood_planks", "biomeswevegone:redwood_wood", "biomeswevegone:sakura_log", "biomeswevegone:sakura_planks", "biomeswevegone:sakura_wood", "biomeswevegone:skyris_log", "biomeswevegone:skyris_planks", "biomeswevegone:skyris_wood", "biomeswevegone:spirit_log", "biomeswevegone:spirit_planks", "biomeswevegone:spirit_wood", "biomeswevegone:stripped_aspen_log", "biomeswevegone:stripped_aspen_wood", "biomeswevegone:stripped_baobab_log", "biomeswevegone:stripped_baobab_wood", "biomeswevegone:stripped_blue_enchanted_log", "biomeswevegone:stripped_blue_enchanted_wood", "biomeswevegone:stripped_cika_log", "biomeswevegone:stripped_cika_wood", "biomeswevegone:stripped_cypress_log", "biomeswevegone:stripped_cypress_wood", "biomeswevegone:stripped_ebony_log", "biomeswevegone:stripped_ebony_wood", "biomeswevegone:stripped_fir_log", "biomeswevegone:stripped_fir_wood", "biomeswevegone:stripped_florus_stem", "biomeswevegone:stripped_florus_wood", "biomeswevegone:stripped_green_enchanted_log", "biomeswevegone:stripped_green_enchanted_wood", "biomeswevegone:stripped_holly_log", "biomeswevegone:stripped_holly_wood", "biomeswevegone:stripped_ironwood_log", "biomeswevegone:stripped_ironwood_wood", "biomeswevegone:stripped_jacaranda_log", "biomeswevegone:stripped_jacaranda_wood", "biomeswevegone:stripped_mahogany_log", "biomeswevegone:stripped_mahogany_wood", "biomeswevegone:stripped_maple_log", "biomeswevegone:stripped_maple_wood", "biomeswevegone:stripped_palm_log", "biomeswevegone:stripped_palm_wood", "biomeswevegone:stripped_pine_log", "biomeswevegone:stripped_pine_wood", "biomeswevegone:stripped_rainbow_eucalyptus_log", "biomeswevegone:stripped_rainbow_eucalyptus_wood", "biomeswevegone:stripped_redwood_log", "biomeswevegone:stripped_redwood_wood", "biomeswevegone:stripped_sakura_log", "biomeswevegone:stripped_sakura_wood", "biomeswevegone:stripped_skyris_log", "biomeswevegone:stripped_skyris_wood", "biomeswevegone:stripped_spirit_log", "biomeswevegone:stripped_spirit_wood", "biomeswevegone:stripped_white_mangrove_log", "biomeswevegone:stripped_white_mangrove_wood", "biomeswevegone:stripped_willow_log", "biomeswevegone:stripped_willow_wood", "biomeswevegone:stripped_witch_hazel_log", "biomeswevegone:stripped_witch_hazel_wood", "biomeswevegone:stripped_zelkova_log", "biomeswevegone:stripped_zelkova_wood", "biomeswevegone:white_mangrove_log", "biomeswevegone:white_mangrove_planks", "biomeswevegone:white_mangrove_wood", "biomeswevegone:willow_log", "biomeswevegone:willow_planks", "biomeswevegone:willow_wood", "biomeswevegone:witch_hazel_log", "biomeswevegone:witch_hazel_planks", "biomeswevegone:witch_hazel_wood", "biomeswevegone:zelkova_log", "biomeswevegone:zelkova_planks", "biomeswevegone:zelkova_wood", "bloomingnature:aspen_log", "bloomingnature:aspen_planks", "bloomingnature:aspen_wood", "bloomingnature:baobab_log", "bloomingnature:baobab_planks", "bloomingnature:baobab_wood", "bloomingnature:chestnut_log", "bloomingnature:chestnut_planks", "bloomingnature:chestnut_wood", "bloomingnature:cypress_log", "bloomingnature:cypress_planks", "bloomingnature:cypress_wood", "bloomingnature:ebony_log", "bloomingnature:ebony_planks", "bloomingnature:ebony_wood", "bloomingnature:fan_palm_log", "bloomingnature:fan_palm_planks", "bloomingnature:fan_palm_wood", "bloomingnature:fir_log", "bloomingnature:fir_planks", "bloomingnature:fir_wood", "bloomingnature:larch_log", "bloomingnature:larch_planks", "bloomingnature:larch_wood", "bloomingnature:stripped_aspen_log", "bloomingnature:stripped_aspen_wood", "bloomingnature:stripped_baobab_log", "bloomingnature:stripped_baobab_wood", "bloomingnature:stripped_chestnut_log", "bloomingnature:stripped_chestnut_wood", "bloomingnature:stripped_cypress_log", "bloomingnature:stripped_cypress_wood", "bloomingnature:stripped_ebony_log", "bloomingnature:stripped_ebony_wood", "bloomingnature:stripped_fan_palm_log", "bloomingnature:stripped_fan_palm_wood", "bloomingnature:stripped_fir_log", "bloomingnature:stripped_fir_wood", "bloomingnature:stripped_larch_log", "bloomingnature:stripped_larch_wood", "bloomingnature:stripped_swamp_cypress_log", "bloomingnature:stripped_swamp_cypress_wood", "bloomingnature:stripped_swamp_oak_log", "bloomingnature:stripped_swamp_oak_wood", "bloomingnature:swamp_cypress_log", "bloomingnature:swamp_cypress_planks", "bloomingnature:swamp_cypress_wood", "bloomingnature:swamp_oak_log", "bloomingnature:swamp_oak_planks", "bloomingnature:swamp_oak_wood", "cataclysm:chorus_planks", "cataclysm:chorus_stem", "create:wheat_flour", "environmental:pine_log", "environmental:pine_planks", "environmental:pine_wood", "environmental:plum_log", "environmental:plum_planks", "environmental:plum_wood", "environmental:stripped_pine_log", "environmental:stripped_pine_wood", "environmental:stripped_plum_log", "environmental:stripped_plum_wood", "environmental:stripped_willow_log", "environmental:stripped_willow_wood", "environmental:stripped_wisteria_log", "environmental:stripped_wisteria_wood", "environmental:willow_log", "environmental:willow_planks", "environmental:willow_wood", "environmental:wisteria_log", "environmental:wisteria_planks", "environmental:wisteria_wood", "iceandfire:dreadwood_log", "iceandfire:dreadwood_planks", "minecraft:acacia_log", "minecraft:acacia_planks", "minecraft:acacia_wood", "minecraft:bamboo_block", "minecraft:bamboo_planks", "minecraft:birch_log", "minecraft:birch_planks", "minecraft:birch_wood", "minecraft:bone_meal", "minecraft:calcite", "minecraft:cherry_log", "minecraft:cherry_planks", "minecraft:cherry_wood", "minecraft:clay_ball", "minecraft:copper_block", "minecraft:crimson_hyphae", "minecraft:crimson_planks", "minecraft:crimson_stem", "minecraft:dark_oak_log", "minecraft:dark_oak_planks", "minecraft:dark_oak_wood", "minecraft:dirt", "minecraft:exposed_copper", "minecraft:gravel", "minecraft:jungle_log", "minecraft:jungle_planks", "minecraft:jungle_wood", "minecraft:mangrove_log", "minecraft:mangrove_planks", "minecraft:mangrove_wood", "minecraft:mud", "minecraft:oak_log", "minecraft:oak_planks", "minecraft:oak_wood", "minecraft:oxidized_copper", "minecraft:sand", "minecraft:soul_sand", "minecraft:spruce_log", "minecraft:spruce_planks", "minecraft:spruce_wood", "minecraft:stripped_acacia_log", "minecraft:stripped_acacia_wood", "minecraft:stripped_bamboo_block", "minecraft:stripped_birch_log", "minecraft:stripped_birch_wood", "minecraft:stripped_cherry_log", "minecraft:stripped_cherry_wood", "minecraft:stripped_crimson_hyphae", "minecraft:stripped_crimson_stem", "minecraft:stripped_dark_oak_log", "minecraft:stripped_dark_oak_wood", "minecraft:stripped_jungle_log", "minecraft:stripped_jungle_wood", "minecraft:stripped_mangrove_log", "minecraft:stripped_mangrove_wood", "minecraft:stripped_oak_log", "minecraft:stripped_oak_wood", "minecraft:stripped_spruce_log", "minecraft:stripped_spruce_wood", "minecraft:stripped_warped_hyphae", "minecraft:stripped_warped_stem", "minecraft:warped_hyphae", "minecraft:warped_planks", "minecraft:warped_stem", "minecraft:weathered_copper", "minecraft:wheat", "quark:ancient_log", "quark:ancient_planks", "quark:ancient_wood", "quark:azalea_log", "quark:azalea_planks", "quark:azalea_wood", "quark:blossom_log", "quark:blossom_planks", "quark:blossom_wood", "quark:stripped_ancient_log", "quark:stripped_ancient_wood", "quark:stripped_azalea_log", "quark:stripped_azalea_wood", "quark:stripped_blossom_log", "quark:stripped_blossom_wood", "twilightforest:canopy_log", "twilightforest:canopy_planks", "twilightforest:canopy_wood", "twilightforest:dark_log", "twilightforest:dark_planks", "twilightforest:dark_wood", "twilightforest:mangrove_log", "twilightforest:mangrove_planks", "twilightforest:mangrove_wood", "twilightforest:mining_log", "twilightforest:mining_planks", "twilightforest:mining_wood", "twilightforest:sorting_log", "twilightforest:sorting_planks", "twilightforest:sorting_wood", "twilightforest:stripped_canopy_log", "twilightforest:stripped_canopy_wood", "twilightforest:stripped_dark_log", "twilightforest:stripped_dark_wood", "twilightforest:stripped_mangrove_log", "twilightforest:stripped_mangrove_wood", "twilightforest:stripped_mining_log", "twilightforest:stripped_mining_wood", "twilightforest:stripped_sorting_log", "twilightforest:stripped_sorting_wood", "twilightforest:stripped_time_log", "twilightforest:stripped_time_wood", "twilightforest:stripped_transformation_log", "twilightforest:stripped_transformation_wood", "twilightforest:stripped_twilight_oak_log", "twilightforest:stripped_twilight_oak_wood", "twilightforest:time_log", "twilightforest:time_planks", "twilightforest:time_wood", "twilightforest:transformation_log", "twilightforest:transformation_planks", "twilightforest:transformation_wood", "twilightforest:twilight_oak_log", "twilightforest:twilight_oak_planks", "twilightforest:twilight_oak_wood", "upgrade_aquatic:driftwood_log", "upgrade_aquatic:driftwood_planks", "upgrade_aquatic:river_log", "upgrade_aquatic:river_planks", "upgrade_aquatic:river_wood", "upgrade_aquatic:stripped_driftwood_log", "upgrade_aquatic:stripped_river_log", "upgrade_aquatic:stripped_river_wood", "witchery:alder_log", "witchery:alder_planks", "witchery:alder_wood", "witchery:hawthorn_log", "witchery:hawthorn_planks", "witchery:hawthorn_wood", "witchery:rowan_log", "witchery:rowan_planks", "witchery:rowan_wood", "witchery:stripped_alder_log", "witchery:stripped_alder_wood", "witchery:stripped_hawthorn_log", "witchery:stripped_hawthorn_wood", "witchery:stripped_rowan_log", "witchery:stripped_rowan_wood"].forEach(id => { if (Item.of(id).isEmpty()) throw new Error('[TK3] Missing required item: ' + id); });

  // tier 1 | kubejs:tk3/compat/strip_alexscaves_pewen_log
  event.recipes.create.cutting(["alexscaves:stripped_pewen_log"], ["alexscaves:pewen_log"]).id("kubejs:tk3/compat/strip_alexscaves_pewen_log");

  // tier 1 | kubejs:tk3/compat/saw_alexscaves_pewen_log
  event.recipes.create.cutting(["6x alexscaves:pewen_planks"], ["alexscaves:stripped_pewen_log"]).id("kubejs:tk3/compat/saw_alexscaves_pewen_log");

  // tier 1 | kubejs:tk3/compat/strip_alexscaves_pewen_wood
  event.recipes.create.cutting(["alexscaves:stripped_pewen_wood"], ["alexscaves:pewen_wood"]).id("kubejs:tk3/compat/strip_alexscaves_pewen_wood");

  // tier 1 | kubejs:tk3/compat/saw_alexscaves_pewen_wood
  event.recipes.create.cutting(["6x alexscaves:pewen_planks"], ["alexscaves:stripped_pewen_wood"]).id("kubejs:tk3/compat/saw_alexscaves_pewen_wood");

  // tier 1 | kubejs:tk3/compat/strip_alexscaves_thornwood_log
  event.recipes.create.cutting(["alexscaves:stripped_thornwood_log"], ["alexscaves:thornwood_log"]).id("kubejs:tk3/compat/strip_alexscaves_thornwood_log");

  // tier 1 | kubejs:tk3/compat/saw_alexscaves_thornwood_log
  event.recipes.create.cutting(["6x alexscaves:thornwood_planks"], ["alexscaves:stripped_thornwood_log"]).id("kubejs:tk3/compat/saw_alexscaves_thornwood_log");

  // tier 1 | kubejs:tk3/compat/strip_alexscaves_thornwood_wood
  event.recipes.create.cutting(["alexscaves:stripped_thornwood_wood"], ["alexscaves:thornwood_wood"]).id("kubejs:tk3/compat/strip_alexscaves_thornwood_wood");

  // tier 1 | kubejs:tk3/compat/saw_alexscaves_thornwood_wood
  event.recipes.create.cutting(["6x alexscaves:thornwood_planks"], ["alexscaves:stripped_thornwood_wood"]).id("kubejs:tk3/compat/saw_alexscaves_thornwood_wood");

  // tier 1 | kubejs:tk3/compat/strip_atmospheric_aspen_log
  event.recipes.create.cutting(["atmospheric:stripped_aspen_log"], ["atmospheric:aspen_log"]).id("kubejs:tk3/compat/strip_atmospheric_aspen_log");

  // tier 1 | kubejs:tk3/compat/saw_atmospheric_aspen_log
  event.recipes.create.cutting(["6x atmospheric:aspen_planks"], ["atmospheric:stripped_aspen_log"]).id("kubejs:tk3/compat/saw_atmospheric_aspen_log");

  // tier 1 | kubejs:tk3/compat/strip_atmospheric_aspen_wood
  event.recipes.create.cutting(["atmospheric:stripped_aspen_wood"], ["atmospheric:aspen_wood"]).id("kubejs:tk3/compat/strip_atmospheric_aspen_wood");

  // tier 1 | kubejs:tk3/compat/saw_atmospheric_aspen_wood
  event.recipes.create.cutting(["6x atmospheric:aspen_planks"], ["atmospheric:stripped_aspen_wood"]).id("kubejs:tk3/compat/saw_atmospheric_aspen_wood");

  // tier 1 | kubejs:tk3/compat/strip_atmospheric_grimwood_log
  event.recipes.create.cutting(["atmospheric:stripped_grimwood_log"], ["atmospheric:grimwood_log"]).id("kubejs:tk3/compat/strip_atmospheric_grimwood_log");

  // tier 1 | kubejs:tk3/compat/saw_atmospheric_grimwood_log
  event.recipes.create.cutting(["6x atmospheric:grimwood_planks"], ["atmospheric:stripped_grimwood_log"]).id("kubejs:tk3/compat/saw_atmospheric_grimwood_log");

  // tier 1 | kubejs:tk3/compat/strip_atmospheric_kousa_log
  event.recipes.create.cutting(["atmospheric:stripped_kousa_log"], ["atmospheric:kousa_log"]).id("kubejs:tk3/compat/strip_atmospheric_kousa_log");

  // tier 1 | kubejs:tk3/compat/saw_atmospheric_kousa_log
  event.recipes.create.cutting(["6x atmospheric:kousa_planks"], ["atmospheric:stripped_kousa_log"]).id("kubejs:tk3/compat/saw_atmospheric_kousa_log");

  // tier 1 | kubejs:tk3/compat/strip_atmospheric_kousa_wood
  event.recipes.create.cutting(["atmospheric:stripped_kousa_wood"], ["atmospheric:kousa_wood"]).id("kubejs:tk3/compat/strip_atmospheric_kousa_wood");

  // tier 1 | kubejs:tk3/compat/saw_atmospheric_kousa_wood
  event.recipes.create.cutting(["6x atmospheric:kousa_planks"], ["atmospheric:stripped_kousa_wood"]).id("kubejs:tk3/compat/saw_atmospheric_kousa_wood");

  // tier 1 | kubejs:tk3/compat/strip_atmospheric_laurel_log
  event.recipes.create.cutting(["atmospheric:stripped_laurel_log"], ["atmospheric:laurel_log"]).id("kubejs:tk3/compat/strip_atmospheric_laurel_log");

  // tier 1 | kubejs:tk3/compat/saw_atmospheric_laurel_log
  event.recipes.create.cutting(["6x atmospheric:laurel_planks"], ["atmospheric:stripped_laurel_log"]).id("kubejs:tk3/compat/saw_atmospheric_laurel_log");

  // tier 1 | kubejs:tk3/compat/strip_atmospheric_laurel_wood
  event.recipes.create.cutting(["atmospheric:stripped_laurel_wood"], ["atmospheric:laurel_wood"]).id("kubejs:tk3/compat/strip_atmospheric_laurel_wood");

  // tier 1 | kubejs:tk3/compat/saw_atmospheric_laurel_wood
  event.recipes.create.cutting(["6x atmospheric:laurel_planks"], ["atmospheric:stripped_laurel_wood"]).id("kubejs:tk3/compat/saw_atmospheric_laurel_wood");

  // tier 1 | kubejs:tk3/compat/strip_atmospheric_morado_log
  event.recipes.create.cutting(["atmospheric:stripped_morado_log"], ["atmospheric:morado_log"]).id("kubejs:tk3/compat/strip_atmospheric_morado_log");

  // tier 1 | kubejs:tk3/compat/saw_atmospheric_morado_log
  event.recipes.create.cutting(["6x atmospheric:morado_planks"], ["atmospheric:stripped_morado_log"]).id("kubejs:tk3/compat/saw_atmospheric_morado_log");

  // tier 1 | kubejs:tk3/compat/strip_atmospheric_morado_wood
  event.recipes.create.cutting(["atmospheric:stripped_morado_wood"], ["atmospheric:morado_wood"]).id("kubejs:tk3/compat/strip_atmospheric_morado_wood");

  // tier 1 | kubejs:tk3/compat/saw_atmospheric_morado_wood
  event.recipes.create.cutting(["6x atmospheric:morado_planks"], ["atmospheric:stripped_morado_wood"]).id("kubejs:tk3/compat/saw_atmospheric_morado_wood");

  // tier 1 | kubejs:tk3/compat/strip_atmospheric_rosewood_log
  event.recipes.create.cutting(["atmospheric:stripped_rosewood_log"], ["atmospheric:rosewood_log"]).id("kubejs:tk3/compat/strip_atmospheric_rosewood_log");

  // tier 1 | kubejs:tk3/compat/saw_atmospheric_rosewood_log
  event.recipes.create.cutting(["6x atmospheric:rosewood_planks"], ["atmospheric:stripped_rosewood_log"]).id("kubejs:tk3/compat/saw_atmospheric_rosewood_log");

  // tier 1 | kubejs:tk3/compat/strip_atmospheric_yucca_log
  event.recipes.create.cutting(["atmospheric:stripped_yucca_log"], ["atmospheric:yucca_log"]).id("kubejs:tk3/compat/strip_atmospheric_yucca_log");

  // tier 1 | kubejs:tk3/compat/saw_atmospheric_yucca_log
  event.recipes.create.cutting(["6x atmospheric:yucca_planks"], ["atmospheric:stripped_yucca_log"]).id("kubejs:tk3/compat/saw_atmospheric_yucca_log");

  // tier 1 | kubejs:tk3/compat/strip_atmospheric_yucca_wood
  event.recipes.create.cutting(["atmospheric:stripped_yucca_wood"], ["atmospheric:yucca_wood"]).id("kubejs:tk3/compat/strip_atmospheric_yucca_wood");

  // tier 1 | kubejs:tk3/compat/saw_atmospheric_yucca_wood
  event.recipes.create.cutting(["6x atmospheric:yucca_planks"], ["atmospheric:stripped_yucca_wood"]).id("kubejs:tk3/compat/saw_atmospheric_yucca_wood");

  // tier 1 | kubejs:tk3/compat/strip_autumnity_maple_log
  event.recipes.create.cutting(["autumnity:stripped_maple_log"], ["autumnity:maple_log"]).id("kubejs:tk3/compat/strip_autumnity_maple_log");

  // tier 1 | kubejs:tk3/compat/saw_autumnity_maple_log
  event.recipes.create.cutting(["6x autumnity:maple_planks"], ["autumnity:stripped_maple_log"]).id("kubejs:tk3/compat/saw_autumnity_maple_log");

  // tier 1 | kubejs:tk3/compat/strip_autumnity_maple_wood
  event.recipes.create.cutting(["autumnity:stripped_maple_wood"], ["autumnity:maple_wood"]).id("kubejs:tk3/compat/strip_autumnity_maple_wood");

  // tier 1 | kubejs:tk3/compat/saw_autumnity_maple_wood
  event.recipes.create.cutting(["6x autumnity:maple_planks"], ["autumnity:stripped_maple_wood"]).id("kubejs:tk3/compat/saw_autumnity_maple_wood");

  // tier 1 | kubejs:tk3/compat/saw_betterend_dragon_tree_log
  event.recipes.create.cutting(["6x betterend:dragon_tree_planks"], ["betterend:dragon_tree_log"]).id("kubejs:tk3/compat/saw_betterend_dragon_tree_log");

  // tier 1 | kubejs:tk3/compat/saw_betterend_end_lotus_log
  event.recipes.create.cutting(["6x betterend:end_lotus_planks"], ["betterend:end_lotus_log"]).id("kubejs:tk3/compat/saw_betterend_end_lotus_log");

  // tier 1 | kubejs:tk3/compat/saw_betterend_end_lotus_stem
  event.recipes.create.cutting(["6x betterend:end_lotus_planks"], ["betterend:end_lotus_stem"]).id("kubejs:tk3/compat/saw_betterend_end_lotus_stem");

  // tier 1 | kubejs:tk3/compat/saw_betterend_helix_tree_log
  event.recipes.create.cutting(["6x betterend:helix_tree_planks"], ["betterend:helix_tree_log"]).id("kubejs:tk3/compat/saw_betterend_helix_tree_log");

  // tier 1 | kubejs:tk3/compat/saw_betterend_jellyshroom_log
  event.recipes.create.cutting(["6x betterend:jellyshroom_planks"], ["betterend:jellyshroom_log"]).id("kubejs:tk3/compat/saw_betterend_jellyshroom_log");

  // tier 1 | kubejs:tk3/compat/saw_betterend_lacugrove_log
  event.recipes.create.cutting(["6x betterend:lacugrove_planks"], ["betterend:lacugrove_log"]).id("kubejs:tk3/compat/saw_betterend_lacugrove_log");

  // tier 1 | kubejs:tk3/compat/saw_betterend_lucernia_log
  event.recipes.create.cutting(["6x betterend:lucernia_planks"], ["betterend:lucernia_log"]).id("kubejs:tk3/compat/saw_betterend_lucernia_log");

  // tier 1 | kubejs:tk3/compat/saw_betterend_mossy_glowshroom_log
  event.recipes.create.cutting(["6x betterend:mossy_glowshroom_planks"], ["betterend:mossy_glowshroom_log"]).id("kubejs:tk3/compat/saw_betterend_mossy_glowshroom_log");

  // tier 1 | kubejs:tk3/compat/saw_betterend_pythadendron_log
  event.recipes.create.cutting(["6x betterend:pythadendron_planks"], ["betterend:pythadendron_log"]).id("kubejs:tk3/compat/saw_betterend_pythadendron_log");

  // tier 1 | kubejs:tk3/compat/saw_betterend_tenanea_log
  event.recipes.create.cutting(["6x betterend:tenanea_planks"], ["betterend:tenanea_log"]).id("kubejs:tk3/compat/saw_betterend_tenanea_log");

  // tier 1 | kubejs:tk3/compat/saw_betterend_umbrella_tree_log
  event.recipes.create.cutting(["6x betterend:umbrella_tree_planks"], ["betterend:umbrella_tree_log"]).id("kubejs:tk3/compat/saw_betterend_umbrella_tree_log");

  // tier 1 | kubejs:tk3/compat/saw_betternether_anchor_tree_log
  event.recipes.create.cutting(["6x betternether:anchor_tree_planks"], ["betternether:anchor_tree_log"]).id("kubejs:tk3/compat/saw_betternether_anchor_tree_log");

  // tier 1 | kubejs:tk3/compat/saw_betternether_gloomwood_dark_log
  event.recipes.create.cutting(["6x betternether:gloomwood_dark_planks"], ["betternether:gloomwood_dark_log"]).id("kubejs:tk3/compat/saw_betternether_gloomwood_dark_log");

  // tier 1 | kubejs:tk3/compat/saw_betternether_gloomwood_log
  event.recipes.create.cutting(["6x betternether:gloomwood_planks"], ["betternether:gloomwood_log"]).id("kubejs:tk3/compat/saw_betternether_gloomwood_log");

  // tier 1 | kubejs:tk3/compat/saw_betternether_gloomwood_transition_log
  event.recipes.create.cutting(["6x betternether:gloomwood_transition_planks"], ["betternether:gloomwood_transition_log"]).id("kubejs:tk3/compat/saw_betternether_gloomwood_transition_log");

  // tier 1 | kubejs:tk3/compat/saw_betternether_mushroom_fir_log
  event.recipes.create.cutting(["6x betternether:mushroom_fir_planks"], ["betternether:mushroom_fir_log"]).id("kubejs:tk3/compat/saw_betternether_mushroom_fir_log");

  // tier 1 | kubejs:tk3/compat/saw_betternether_mushroom_fir_stem
  event.recipes.create.cutting(["6x betternether:mushroom_fir_planks"], ["betternether:mushroom_fir_stem"]).id("kubejs:tk3/compat/saw_betternether_mushroom_fir_stem");

  // tier 1 | kubejs:tk3/compat/saw_betternether_nether_mushroom_stem
  event.recipes.create.cutting(["6x betternether:nether_mushroom_planks"], ["betternether:nether_mushroom_stem"]).id("kubejs:tk3/compat/saw_betternether_nether_mushroom_stem");

  // tier 1 | kubejs:tk3/compat/saw_betternether_nether_reed_stem
  event.recipes.create.cutting(["6x betternether:nether_reed_planks"], ["betternether:nether_reed_stem"]).id("kubejs:tk3/compat/saw_betternether_nether_reed_stem");

  // tier 1 | kubejs:tk3/compat/saw_betternether_nether_sakura_log
  event.recipes.create.cutting(["6x betternether:nether_sakura_planks"], ["betternether:nether_sakura_log"]).id("kubejs:tk3/compat/saw_betternether_nether_sakura_log");

  // tier 1 | kubejs:tk3/compat/saw_betternether_rubeus_log
  event.recipes.create.cutting(["6x betternether:rubeus_planks"], ["betternether:rubeus_log"]).id("kubejs:tk3/compat/saw_betternether_rubeus_log");

  // tier 1 | kubejs:tk3/compat/saw_betternether_stalagnate_log
  event.recipes.create.cutting(["6x betternether:stalagnate_planks"], ["betternether:stalagnate_log"]).id("kubejs:tk3/compat/saw_betternether_stalagnate_log");

  // tier 1 | kubejs:tk3/compat/saw_betternether_stalagnate_stem
  event.recipes.create.cutting(["6x betternether:stalagnate_planks"], ["betternether:stalagnate_stem"]).id("kubejs:tk3/compat/saw_betternether_stalagnate_stem");

  // tier 1 | kubejs:tk3/compat/saw_betternether_wart_log
  event.recipes.create.cutting(["6x betternether:wart_planks"], ["betternether:wart_log"]).id("kubejs:tk3/compat/saw_betternether_wart_log");

  // tier 1 | kubejs:tk3/compat/saw_betternether_willow_log
  event.recipes.create.cutting(["6x betternether:willow_planks"], ["betternether:willow_log"]).id("kubejs:tk3/compat/saw_betternether_willow_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_dead_log
  event.recipes.create.cutting(["biomesoplenty:stripped_dead_log"], ["biomesoplenty:dead_log"]).id("kubejs:tk3/compat/strip_biomesoplenty_dead_log");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_dead_log
  event.recipes.create.cutting(["6x biomesoplenty:dead_planks"], ["biomesoplenty:stripped_dead_log"]).id("kubejs:tk3/compat/saw_biomesoplenty_dead_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_dead_wood
  event.recipes.create.cutting(["biomesoplenty:stripped_dead_wood"], ["biomesoplenty:dead_wood"]).id("kubejs:tk3/compat/strip_biomesoplenty_dead_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_dead_wood
  event.recipes.create.cutting(["6x biomesoplenty:dead_planks"], ["biomesoplenty:stripped_dead_wood"]).id("kubejs:tk3/compat/saw_biomesoplenty_dead_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_empyreal_log
  event.recipes.create.cutting(["biomesoplenty:stripped_empyreal_log"], ["biomesoplenty:empyreal_log"]).id("kubejs:tk3/compat/strip_biomesoplenty_empyreal_log");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_empyreal_log
  event.recipes.create.cutting(["6x biomesoplenty:empyreal_planks"], ["biomesoplenty:stripped_empyreal_log"]).id("kubejs:tk3/compat/saw_biomesoplenty_empyreal_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_empyreal_wood
  event.recipes.create.cutting(["biomesoplenty:stripped_empyreal_wood"], ["biomesoplenty:empyreal_wood"]).id("kubejs:tk3/compat/strip_biomesoplenty_empyreal_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_empyreal_wood
  event.recipes.create.cutting(["6x biomesoplenty:empyreal_planks"], ["biomesoplenty:stripped_empyreal_wood"]).id("kubejs:tk3/compat/saw_biomesoplenty_empyreal_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_fir_log
  event.recipes.create.cutting(["biomesoplenty:stripped_fir_log"], ["biomesoplenty:fir_log"]).id("kubejs:tk3/compat/strip_biomesoplenty_fir_log");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_fir_log
  event.recipes.create.cutting(["6x biomesoplenty:fir_planks"], ["biomesoplenty:stripped_fir_log"]).id("kubejs:tk3/compat/saw_biomesoplenty_fir_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_fir_wood
  event.recipes.create.cutting(["biomesoplenty:stripped_fir_wood"], ["biomesoplenty:fir_wood"]).id("kubejs:tk3/compat/strip_biomesoplenty_fir_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_fir_wood
  event.recipes.create.cutting(["6x biomesoplenty:fir_planks"], ["biomesoplenty:stripped_fir_wood"]).id("kubejs:tk3/compat/saw_biomesoplenty_fir_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_hellbark_log
  event.recipes.create.cutting(["biomesoplenty:stripped_hellbark_log"], ["biomesoplenty:hellbark_log"]).id("kubejs:tk3/compat/strip_biomesoplenty_hellbark_log");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_hellbark_log
  event.recipes.create.cutting(["6x biomesoplenty:hellbark_planks"], ["biomesoplenty:stripped_hellbark_log"]).id("kubejs:tk3/compat/saw_biomesoplenty_hellbark_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_hellbark_wood
  event.recipes.create.cutting(["biomesoplenty:stripped_hellbark_wood"], ["biomesoplenty:hellbark_wood"]).id("kubejs:tk3/compat/strip_biomesoplenty_hellbark_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_hellbark_wood
  event.recipes.create.cutting(["6x biomesoplenty:hellbark_planks"], ["biomesoplenty:stripped_hellbark_wood"]).id("kubejs:tk3/compat/saw_biomesoplenty_hellbark_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_jacaranda_log
  event.recipes.create.cutting(["biomesoplenty:stripped_jacaranda_log"], ["biomesoplenty:jacaranda_log"]).id("kubejs:tk3/compat/strip_biomesoplenty_jacaranda_log");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_jacaranda_log
  event.recipes.create.cutting(["6x biomesoplenty:jacaranda_planks"], ["biomesoplenty:stripped_jacaranda_log"]).id("kubejs:tk3/compat/saw_biomesoplenty_jacaranda_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_jacaranda_wood
  event.recipes.create.cutting(["biomesoplenty:stripped_jacaranda_wood"], ["biomesoplenty:jacaranda_wood"]).id("kubejs:tk3/compat/strip_biomesoplenty_jacaranda_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_jacaranda_wood
  event.recipes.create.cutting(["6x biomesoplenty:jacaranda_planks"], ["biomesoplenty:stripped_jacaranda_wood"]).id("kubejs:tk3/compat/saw_biomesoplenty_jacaranda_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_magic_log
  event.recipes.create.cutting(["biomesoplenty:stripped_magic_log"], ["biomesoplenty:magic_log"]).id("kubejs:tk3/compat/strip_biomesoplenty_magic_log");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_magic_log
  event.recipes.create.cutting(["6x biomesoplenty:magic_planks"], ["biomesoplenty:stripped_magic_log"]).id("kubejs:tk3/compat/saw_biomesoplenty_magic_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_magic_wood
  event.recipes.create.cutting(["biomesoplenty:stripped_magic_wood"], ["biomesoplenty:magic_wood"]).id("kubejs:tk3/compat/strip_biomesoplenty_magic_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_magic_wood
  event.recipes.create.cutting(["6x biomesoplenty:magic_planks"], ["biomesoplenty:stripped_magic_wood"]).id("kubejs:tk3/compat/saw_biomesoplenty_magic_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_mahogany_log
  event.recipes.create.cutting(["biomesoplenty:stripped_mahogany_log"], ["biomesoplenty:mahogany_log"]).id("kubejs:tk3/compat/strip_biomesoplenty_mahogany_log");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_mahogany_log
  event.recipes.create.cutting(["6x biomesoplenty:mahogany_planks"], ["biomesoplenty:stripped_mahogany_log"]).id("kubejs:tk3/compat/saw_biomesoplenty_mahogany_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_mahogany_wood
  event.recipes.create.cutting(["biomesoplenty:stripped_mahogany_wood"], ["biomesoplenty:mahogany_wood"]).id("kubejs:tk3/compat/strip_biomesoplenty_mahogany_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_mahogany_wood
  event.recipes.create.cutting(["6x biomesoplenty:mahogany_planks"], ["biomesoplenty:stripped_mahogany_wood"]).id("kubejs:tk3/compat/saw_biomesoplenty_mahogany_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_maple_log
  event.recipes.create.cutting(["biomesoplenty:stripped_maple_log"], ["biomesoplenty:maple_log"]).id("kubejs:tk3/compat/strip_biomesoplenty_maple_log");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_maple_log
  event.recipes.create.cutting(["6x biomesoplenty:maple_planks"], ["biomesoplenty:stripped_maple_log"]).id("kubejs:tk3/compat/saw_biomesoplenty_maple_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_maple_wood
  event.recipes.create.cutting(["biomesoplenty:stripped_maple_wood"], ["biomesoplenty:maple_wood"]).id("kubejs:tk3/compat/strip_biomesoplenty_maple_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_maple_wood
  event.recipes.create.cutting(["6x biomesoplenty:maple_planks"], ["biomesoplenty:stripped_maple_wood"]).id("kubejs:tk3/compat/saw_biomesoplenty_maple_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_palm_log
  event.recipes.create.cutting(["biomesoplenty:stripped_palm_log"], ["biomesoplenty:palm_log"]).id("kubejs:tk3/compat/strip_biomesoplenty_palm_log");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_palm_log
  event.recipes.create.cutting(["6x biomesoplenty:palm_planks"], ["biomesoplenty:stripped_palm_log"]).id("kubejs:tk3/compat/saw_biomesoplenty_palm_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_palm_wood
  event.recipes.create.cutting(["biomesoplenty:stripped_palm_wood"], ["biomesoplenty:palm_wood"]).id("kubejs:tk3/compat/strip_biomesoplenty_palm_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_palm_wood
  event.recipes.create.cutting(["6x biomesoplenty:palm_planks"], ["biomesoplenty:stripped_palm_wood"]).id("kubejs:tk3/compat/saw_biomesoplenty_palm_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_pine_log
  event.recipes.create.cutting(["biomesoplenty:stripped_pine_log"], ["biomesoplenty:pine_log"]).id("kubejs:tk3/compat/strip_biomesoplenty_pine_log");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_pine_log
  event.recipes.create.cutting(["6x biomesoplenty:pine_planks"], ["biomesoplenty:stripped_pine_log"]).id("kubejs:tk3/compat/saw_biomesoplenty_pine_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_pine_wood
  event.recipes.create.cutting(["biomesoplenty:stripped_pine_wood"], ["biomesoplenty:pine_wood"]).id("kubejs:tk3/compat/strip_biomesoplenty_pine_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_pine_wood
  event.recipes.create.cutting(["6x biomesoplenty:pine_planks"], ["biomesoplenty:stripped_pine_wood"]).id("kubejs:tk3/compat/saw_biomesoplenty_pine_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_redwood_log
  event.recipes.create.cutting(["biomesoplenty:stripped_redwood_log"], ["biomesoplenty:redwood_log"]).id("kubejs:tk3/compat/strip_biomesoplenty_redwood_log");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_redwood_log
  event.recipes.create.cutting(["6x biomesoplenty:redwood_planks"], ["biomesoplenty:stripped_redwood_log"]).id("kubejs:tk3/compat/saw_biomesoplenty_redwood_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_redwood_wood
  event.recipes.create.cutting(["biomesoplenty:stripped_redwood_wood"], ["biomesoplenty:redwood_wood"]).id("kubejs:tk3/compat/strip_biomesoplenty_redwood_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_redwood_wood
  event.recipes.create.cutting(["6x biomesoplenty:redwood_planks"], ["biomesoplenty:stripped_redwood_wood"]).id("kubejs:tk3/compat/saw_biomesoplenty_redwood_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_umbran_log
  event.recipes.create.cutting(["biomesoplenty:stripped_umbran_log"], ["biomesoplenty:umbran_log"]).id("kubejs:tk3/compat/strip_biomesoplenty_umbran_log");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_umbran_log
  event.recipes.create.cutting(["6x biomesoplenty:umbran_planks"], ["biomesoplenty:stripped_umbran_log"]).id("kubejs:tk3/compat/saw_biomesoplenty_umbran_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_umbran_wood
  event.recipes.create.cutting(["biomesoplenty:stripped_umbran_wood"], ["biomesoplenty:umbran_wood"]).id("kubejs:tk3/compat/strip_biomesoplenty_umbran_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_umbran_wood
  event.recipes.create.cutting(["6x biomesoplenty:umbran_planks"], ["biomesoplenty:stripped_umbran_wood"]).id("kubejs:tk3/compat/saw_biomesoplenty_umbran_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_willow_log
  event.recipes.create.cutting(["biomesoplenty:stripped_willow_log"], ["biomesoplenty:willow_log"]).id("kubejs:tk3/compat/strip_biomesoplenty_willow_log");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_willow_log
  event.recipes.create.cutting(["6x biomesoplenty:willow_planks"], ["biomesoplenty:stripped_willow_log"]).id("kubejs:tk3/compat/saw_biomesoplenty_willow_log");

  // tier 1 | kubejs:tk3/compat/strip_biomesoplenty_willow_wood
  event.recipes.create.cutting(["biomesoplenty:stripped_willow_wood"], ["biomesoplenty:willow_wood"]).id("kubejs:tk3/compat/strip_biomesoplenty_willow_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomesoplenty_willow_wood
  event.recipes.create.cutting(["6x biomesoplenty:willow_planks"], ["biomesoplenty:stripped_willow_wood"]).id("kubejs:tk3/compat/saw_biomesoplenty_willow_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_aspen_log
  event.recipes.create.cutting(["biomeswevegone:stripped_aspen_log"], ["biomeswevegone:aspen_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_aspen_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_aspen_log
  event.recipes.create.cutting(["6x biomeswevegone:aspen_planks"], ["biomeswevegone:stripped_aspen_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_aspen_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_aspen_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_aspen_wood"], ["biomeswevegone:aspen_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_aspen_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_aspen_wood
  event.recipes.create.cutting(["6x biomeswevegone:aspen_planks"], ["biomeswevegone:stripped_aspen_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_aspen_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_baobab_log
  event.recipes.create.cutting(["biomeswevegone:stripped_baobab_log"], ["biomeswevegone:baobab_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_baobab_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_baobab_log
  event.recipes.create.cutting(["6x biomeswevegone:baobab_planks"], ["biomeswevegone:stripped_baobab_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_baobab_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_baobab_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_baobab_wood"], ["biomeswevegone:baobab_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_baobab_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_baobab_wood
  event.recipes.create.cutting(["6x biomeswevegone:baobab_planks"], ["biomeswevegone:stripped_baobab_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_baobab_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_blue_enchanted_log
  event.recipes.create.cutting(["biomeswevegone:stripped_blue_enchanted_log"], ["biomeswevegone:blue_enchanted_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_blue_enchanted_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_blue_enchanted_log
  event.recipes.create.cutting(["6x biomeswevegone:blue_enchanted_planks"], ["biomeswevegone:stripped_blue_enchanted_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_blue_enchanted_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_blue_enchanted_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_blue_enchanted_wood"], ["biomeswevegone:blue_enchanted_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_blue_enchanted_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_blue_enchanted_wood
  event.recipes.create.cutting(["6x biomeswevegone:blue_enchanted_planks"], ["biomeswevegone:stripped_blue_enchanted_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_blue_enchanted_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_cika_log
  event.recipes.create.cutting(["biomeswevegone:stripped_cika_log"], ["biomeswevegone:cika_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_cika_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_cika_log
  event.recipes.create.cutting(["6x biomeswevegone:cika_planks"], ["biomeswevegone:stripped_cika_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_cika_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_cika_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_cika_wood"], ["biomeswevegone:cika_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_cika_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_cika_wood
  event.recipes.create.cutting(["6x biomeswevegone:cika_planks"], ["biomeswevegone:stripped_cika_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_cika_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_cypress_log
  event.recipes.create.cutting(["biomeswevegone:stripped_cypress_log"], ["biomeswevegone:cypress_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_cypress_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_cypress_log
  event.recipes.create.cutting(["6x biomeswevegone:cypress_planks"], ["biomeswevegone:stripped_cypress_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_cypress_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_cypress_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_cypress_wood"], ["biomeswevegone:cypress_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_cypress_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_cypress_wood
  event.recipes.create.cutting(["6x biomeswevegone:cypress_planks"], ["biomeswevegone:stripped_cypress_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_cypress_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_ebony_log
  event.recipes.create.cutting(["biomeswevegone:stripped_ebony_log"], ["biomeswevegone:ebony_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_ebony_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_ebony_log
  event.recipes.create.cutting(["6x biomeswevegone:ebony_planks"], ["biomeswevegone:stripped_ebony_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_ebony_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_ebony_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_ebony_wood"], ["biomeswevegone:ebony_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_ebony_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_ebony_wood
  event.recipes.create.cutting(["6x biomeswevegone:ebony_planks"], ["biomeswevegone:stripped_ebony_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_ebony_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_fir_log
  event.recipes.create.cutting(["biomeswevegone:stripped_fir_log"], ["biomeswevegone:fir_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_fir_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_fir_log
  event.recipes.create.cutting(["6x biomeswevegone:fir_planks"], ["biomeswevegone:stripped_fir_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_fir_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_fir_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_fir_wood"], ["biomeswevegone:fir_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_fir_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_fir_wood
  event.recipes.create.cutting(["6x biomeswevegone:fir_planks"], ["biomeswevegone:stripped_fir_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_fir_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_florus_stem
  event.recipes.create.cutting(["biomeswevegone:stripped_florus_stem"], ["biomeswevegone:florus_stem"]).id("kubejs:tk3/compat/strip_biomeswevegone_florus_stem");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_florus_stem
  event.recipes.create.cutting(["6x biomeswevegone:florus_planks"], ["biomeswevegone:stripped_florus_stem"]).id("kubejs:tk3/compat/saw_biomeswevegone_florus_stem");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_florus_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_florus_wood"], ["biomeswevegone:florus_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_florus_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_florus_wood
  event.recipes.create.cutting(["6x biomeswevegone:florus_planks"], ["biomeswevegone:stripped_florus_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_florus_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_green_enchanted_log
  event.recipes.create.cutting(["biomeswevegone:stripped_green_enchanted_log"], ["biomeswevegone:green_enchanted_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_green_enchanted_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_green_enchanted_log
  event.recipes.create.cutting(["6x biomeswevegone:green_enchanted_planks"], ["biomeswevegone:stripped_green_enchanted_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_green_enchanted_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_green_enchanted_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_green_enchanted_wood"], ["biomeswevegone:green_enchanted_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_green_enchanted_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_green_enchanted_wood
  event.recipes.create.cutting(["6x biomeswevegone:green_enchanted_planks"], ["biomeswevegone:stripped_green_enchanted_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_green_enchanted_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_holly_log
  event.recipes.create.cutting(["biomeswevegone:stripped_holly_log"], ["biomeswevegone:holly_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_holly_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_holly_log
  event.recipes.create.cutting(["6x biomeswevegone:holly_planks"], ["biomeswevegone:stripped_holly_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_holly_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_holly_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_holly_wood"], ["biomeswevegone:holly_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_holly_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_holly_wood
  event.recipes.create.cutting(["6x biomeswevegone:holly_planks"], ["biomeswevegone:stripped_holly_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_holly_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_ironwood_log
  event.recipes.create.cutting(["biomeswevegone:stripped_ironwood_log"], ["biomeswevegone:ironwood_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_ironwood_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_ironwood_log
  event.recipes.create.cutting(["6x biomeswevegone:ironwood_planks"], ["biomeswevegone:stripped_ironwood_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_ironwood_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_ironwood_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_ironwood_wood"], ["biomeswevegone:ironwood_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_ironwood_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_ironwood_wood
  event.recipes.create.cutting(["6x biomeswevegone:ironwood_planks"], ["biomeswevegone:stripped_ironwood_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_ironwood_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_jacaranda_log
  event.recipes.create.cutting(["biomeswevegone:stripped_jacaranda_log"], ["biomeswevegone:jacaranda_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_jacaranda_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_jacaranda_log
  event.recipes.create.cutting(["6x biomeswevegone:jacaranda_planks"], ["biomeswevegone:stripped_jacaranda_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_jacaranda_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_jacaranda_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_jacaranda_wood"], ["biomeswevegone:jacaranda_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_jacaranda_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_jacaranda_wood
  event.recipes.create.cutting(["6x biomeswevegone:jacaranda_planks"], ["biomeswevegone:stripped_jacaranda_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_jacaranda_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_mahogany_log
  event.recipes.create.cutting(["biomeswevegone:stripped_mahogany_log"], ["biomeswevegone:mahogany_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_mahogany_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_mahogany_log
  event.recipes.create.cutting(["6x biomeswevegone:mahogany_planks"], ["biomeswevegone:stripped_mahogany_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_mahogany_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_mahogany_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_mahogany_wood"], ["biomeswevegone:mahogany_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_mahogany_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_mahogany_wood
  event.recipes.create.cutting(["6x biomeswevegone:mahogany_planks"], ["biomeswevegone:stripped_mahogany_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_mahogany_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_maple_log
  event.recipes.create.cutting(["biomeswevegone:stripped_maple_log"], ["biomeswevegone:maple_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_maple_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_maple_log
  event.recipes.create.cutting(["6x biomeswevegone:maple_planks"], ["biomeswevegone:stripped_maple_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_maple_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_maple_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_maple_wood"], ["biomeswevegone:maple_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_maple_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_maple_wood
  event.recipes.create.cutting(["6x biomeswevegone:maple_planks"], ["biomeswevegone:stripped_maple_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_maple_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_palm_log
  event.recipes.create.cutting(["biomeswevegone:stripped_palm_log"], ["biomeswevegone:palm_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_palm_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_palm_log
  event.recipes.create.cutting(["6x biomeswevegone:palm_planks"], ["biomeswevegone:stripped_palm_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_palm_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_palm_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_palm_wood"], ["biomeswevegone:palm_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_palm_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_palm_wood
  event.recipes.create.cutting(["6x biomeswevegone:palm_planks"], ["biomeswevegone:stripped_palm_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_palm_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_pine_log
  event.recipes.create.cutting(["biomeswevegone:stripped_pine_log"], ["biomeswevegone:pine_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_pine_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_pine_log
  event.recipes.create.cutting(["6x biomeswevegone:pine_planks"], ["biomeswevegone:stripped_pine_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_pine_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_pine_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_pine_wood"], ["biomeswevegone:pine_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_pine_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_pine_wood
  event.recipes.create.cutting(["6x biomeswevegone:pine_planks"], ["biomeswevegone:stripped_pine_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_pine_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_rainbow_eucalyptus_log
  event.recipes.create.cutting(["biomeswevegone:stripped_rainbow_eucalyptus_log"], ["biomeswevegone:rainbow_eucalyptus_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_rainbow_eucalyptus_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_rainbow_eucalyptus_log
  event.recipes.create.cutting(["6x biomeswevegone:rainbow_eucalyptus_planks"], ["biomeswevegone:stripped_rainbow_eucalyptus_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_rainbow_eucalyptus_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_rainbow_eucalyptus_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_rainbow_eucalyptus_wood"], ["biomeswevegone:rainbow_eucalyptus_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_rainbow_eucalyptus_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_rainbow_eucalyptus_wood
  event.recipes.create.cutting(["6x biomeswevegone:rainbow_eucalyptus_planks"], ["biomeswevegone:stripped_rainbow_eucalyptus_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_rainbow_eucalyptus_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_redwood_log
  event.recipes.create.cutting(["biomeswevegone:stripped_redwood_log"], ["biomeswevegone:redwood_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_redwood_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_redwood_log
  event.recipes.create.cutting(["6x biomeswevegone:redwood_planks"], ["biomeswevegone:stripped_redwood_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_redwood_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_redwood_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_redwood_wood"], ["biomeswevegone:redwood_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_redwood_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_redwood_wood
  event.recipes.create.cutting(["6x biomeswevegone:redwood_planks"], ["biomeswevegone:stripped_redwood_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_redwood_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_sakura_log
  event.recipes.create.cutting(["biomeswevegone:stripped_sakura_log"], ["biomeswevegone:sakura_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_sakura_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_sakura_log
  event.recipes.create.cutting(["6x biomeswevegone:sakura_planks"], ["biomeswevegone:stripped_sakura_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_sakura_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_sakura_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_sakura_wood"], ["biomeswevegone:sakura_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_sakura_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_sakura_wood
  event.recipes.create.cutting(["6x biomeswevegone:sakura_planks"], ["biomeswevegone:stripped_sakura_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_sakura_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_skyris_log
  event.recipes.create.cutting(["biomeswevegone:stripped_skyris_log"], ["biomeswevegone:skyris_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_skyris_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_skyris_log
  event.recipes.create.cutting(["6x biomeswevegone:skyris_planks"], ["biomeswevegone:stripped_skyris_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_skyris_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_skyris_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_skyris_wood"], ["biomeswevegone:skyris_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_skyris_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_skyris_wood
  event.recipes.create.cutting(["6x biomeswevegone:skyris_planks"], ["biomeswevegone:stripped_skyris_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_skyris_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_spirit_log
  event.recipes.create.cutting(["biomeswevegone:stripped_spirit_log"], ["biomeswevegone:spirit_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_spirit_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_spirit_log
  event.recipes.create.cutting(["6x biomeswevegone:spirit_planks"], ["biomeswevegone:stripped_spirit_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_spirit_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_spirit_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_spirit_wood"], ["biomeswevegone:spirit_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_spirit_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_spirit_wood
  event.recipes.create.cutting(["6x biomeswevegone:spirit_planks"], ["biomeswevegone:stripped_spirit_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_spirit_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_white_mangrove_log
  event.recipes.create.cutting(["biomeswevegone:stripped_white_mangrove_log"], ["biomeswevegone:white_mangrove_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_white_mangrove_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_white_mangrove_log
  event.recipes.create.cutting(["6x biomeswevegone:white_mangrove_planks"], ["biomeswevegone:stripped_white_mangrove_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_white_mangrove_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_white_mangrove_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_white_mangrove_wood"], ["biomeswevegone:white_mangrove_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_white_mangrove_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_white_mangrove_wood
  event.recipes.create.cutting(["6x biomeswevegone:white_mangrove_planks"], ["biomeswevegone:stripped_white_mangrove_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_white_mangrove_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_willow_log
  event.recipes.create.cutting(["biomeswevegone:stripped_willow_log"], ["biomeswevegone:willow_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_willow_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_willow_log
  event.recipes.create.cutting(["6x biomeswevegone:willow_planks"], ["biomeswevegone:stripped_willow_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_willow_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_willow_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_willow_wood"], ["biomeswevegone:willow_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_willow_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_willow_wood
  event.recipes.create.cutting(["6x biomeswevegone:willow_planks"], ["biomeswevegone:stripped_willow_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_willow_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_witch_hazel_log
  event.recipes.create.cutting(["biomeswevegone:stripped_witch_hazel_log"], ["biomeswevegone:witch_hazel_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_witch_hazel_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_witch_hazel_log
  event.recipes.create.cutting(["6x biomeswevegone:witch_hazel_planks"], ["biomeswevegone:stripped_witch_hazel_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_witch_hazel_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_witch_hazel_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_witch_hazel_wood"], ["biomeswevegone:witch_hazel_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_witch_hazel_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_witch_hazel_wood
  event.recipes.create.cutting(["6x biomeswevegone:witch_hazel_planks"], ["biomeswevegone:stripped_witch_hazel_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_witch_hazel_wood");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_zelkova_log
  event.recipes.create.cutting(["biomeswevegone:stripped_zelkova_log"], ["biomeswevegone:zelkova_log"]).id("kubejs:tk3/compat/strip_biomeswevegone_zelkova_log");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_zelkova_log
  event.recipes.create.cutting(["6x biomeswevegone:zelkova_planks"], ["biomeswevegone:stripped_zelkova_log"]).id("kubejs:tk3/compat/saw_biomeswevegone_zelkova_log");

  // tier 1 | kubejs:tk3/compat/strip_biomeswevegone_zelkova_wood
  event.recipes.create.cutting(["biomeswevegone:stripped_zelkova_wood"], ["biomeswevegone:zelkova_wood"]).id("kubejs:tk3/compat/strip_biomeswevegone_zelkova_wood");

  // tier 1 | kubejs:tk3/compat/saw_biomeswevegone_zelkova_wood
  event.recipes.create.cutting(["6x biomeswevegone:zelkova_planks"], ["biomeswevegone:stripped_zelkova_wood"]).id("kubejs:tk3/compat/saw_biomeswevegone_zelkova_wood");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_aspen_log
  event.recipes.create.cutting(["bloomingnature:stripped_aspen_log"], ["bloomingnature:aspen_log"]).id("kubejs:tk3/compat/strip_bloomingnature_aspen_log");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_aspen_log
  event.recipes.create.cutting(["6x bloomingnature:aspen_planks"], ["bloomingnature:stripped_aspen_log"]).id("kubejs:tk3/compat/saw_bloomingnature_aspen_log");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_aspen_wood
  event.recipes.create.cutting(["bloomingnature:stripped_aspen_wood"], ["bloomingnature:aspen_wood"]).id("kubejs:tk3/compat/strip_bloomingnature_aspen_wood");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_aspen_wood
  event.recipes.create.cutting(["6x bloomingnature:aspen_planks"], ["bloomingnature:stripped_aspen_wood"]).id("kubejs:tk3/compat/saw_bloomingnature_aspen_wood");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_baobab_log
  event.recipes.create.cutting(["bloomingnature:stripped_baobab_log"], ["bloomingnature:baobab_log"]).id("kubejs:tk3/compat/strip_bloomingnature_baobab_log");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_baobab_log
  event.recipes.create.cutting(["6x bloomingnature:baobab_planks"], ["bloomingnature:stripped_baobab_log"]).id("kubejs:tk3/compat/saw_bloomingnature_baobab_log");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_baobab_wood
  event.recipes.create.cutting(["bloomingnature:stripped_baobab_wood"], ["bloomingnature:baobab_wood"]).id("kubejs:tk3/compat/strip_bloomingnature_baobab_wood");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_baobab_wood
  event.recipes.create.cutting(["6x bloomingnature:baobab_planks"], ["bloomingnature:stripped_baobab_wood"]).id("kubejs:tk3/compat/saw_bloomingnature_baobab_wood");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_chestnut_log
  event.recipes.create.cutting(["bloomingnature:stripped_chestnut_log"], ["bloomingnature:chestnut_log"]).id("kubejs:tk3/compat/strip_bloomingnature_chestnut_log");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_chestnut_log
  event.recipes.create.cutting(["6x bloomingnature:chestnut_planks"], ["bloomingnature:stripped_chestnut_log"]).id("kubejs:tk3/compat/saw_bloomingnature_chestnut_log");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_chestnut_wood
  event.recipes.create.cutting(["bloomingnature:stripped_chestnut_wood"], ["bloomingnature:chestnut_wood"]).id("kubejs:tk3/compat/strip_bloomingnature_chestnut_wood");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_chestnut_wood
  event.recipes.create.cutting(["6x bloomingnature:chestnut_planks"], ["bloomingnature:stripped_chestnut_wood"]).id("kubejs:tk3/compat/saw_bloomingnature_chestnut_wood");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_cypress_log
  event.recipes.create.cutting(["bloomingnature:stripped_cypress_log"], ["bloomingnature:cypress_log"]).id("kubejs:tk3/compat/strip_bloomingnature_cypress_log");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_cypress_log
  event.recipes.create.cutting(["6x bloomingnature:cypress_planks"], ["bloomingnature:stripped_cypress_log"]).id("kubejs:tk3/compat/saw_bloomingnature_cypress_log");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_cypress_wood
  event.recipes.create.cutting(["bloomingnature:stripped_cypress_wood"], ["bloomingnature:cypress_wood"]).id("kubejs:tk3/compat/strip_bloomingnature_cypress_wood");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_cypress_wood
  event.recipes.create.cutting(["6x bloomingnature:cypress_planks"], ["bloomingnature:stripped_cypress_wood"]).id("kubejs:tk3/compat/saw_bloomingnature_cypress_wood");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_ebony_log
  event.recipes.create.cutting(["bloomingnature:stripped_ebony_log"], ["bloomingnature:ebony_log"]).id("kubejs:tk3/compat/strip_bloomingnature_ebony_log");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_ebony_log
  event.recipes.create.cutting(["6x bloomingnature:ebony_planks"], ["bloomingnature:stripped_ebony_log"]).id("kubejs:tk3/compat/saw_bloomingnature_ebony_log");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_ebony_wood
  event.recipes.create.cutting(["bloomingnature:stripped_ebony_wood"], ["bloomingnature:ebony_wood"]).id("kubejs:tk3/compat/strip_bloomingnature_ebony_wood");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_ebony_wood
  event.recipes.create.cutting(["6x bloomingnature:ebony_planks"], ["bloomingnature:stripped_ebony_wood"]).id("kubejs:tk3/compat/saw_bloomingnature_ebony_wood");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_fan_palm_log
  event.recipes.create.cutting(["bloomingnature:stripped_fan_palm_log"], ["bloomingnature:fan_palm_log"]).id("kubejs:tk3/compat/strip_bloomingnature_fan_palm_log");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_fan_palm_log
  event.recipes.create.cutting(["6x bloomingnature:fan_palm_planks"], ["bloomingnature:stripped_fan_palm_log"]).id("kubejs:tk3/compat/saw_bloomingnature_fan_palm_log");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_fan_palm_wood
  event.recipes.create.cutting(["bloomingnature:stripped_fan_palm_wood"], ["bloomingnature:fan_palm_wood"]).id("kubejs:tk3/compat/strip_bloomingnature_fan_palm_wood");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_fan_palm_wood
  event.recipes.create.cutting(["6x bloomingnature:fan_palm_planks"], ["bloomingnature:stripped_fan_palm_wood"]).id("kubejs:tk3/compat/saw_bloomingnature_fan_palm_wood");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_fir_log
  event.recipes.create.cutting(["bloomingnature:stripped_fir_log"], ["bloomingnature:fir_log"]).id("kubejs:tk3/compat/strip_bloomingnature_fir_log");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_fir_log
  event.recipes.create.cutting(["6x bloomingnature:fir_planks"], ["bloomingnature:stripped_fir_log"]).id("kubejs:tk3/compat/saw_bloomingnature_fir_log");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_fir_wood
  event.recipes.create.cutting(["bloomingnature:stripped_fir_wood"], ["bloomingnature:fir_wood"]).id("kubejs:tk3/compat/strip_bloomingnature_fir_wood");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_fir_wood
  event.recipes.create.cutting(["6x bloomingnature:fir_planks"], ["bloomingnature:stripped_fir_wood"]).id("kubejs:tk3/compat/saw_bloomingnature_fir_wood");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_larch_log
  event.recipes.create.cutting(["bloomingnature:stripped_larch_log"], ["bloomingnature:larch_log"]).id("kubejs:tk3/compat/strip_bloomingnature_larch_log");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_larch_log
  event.recipes.create.cutting(["6x bloomingnature:larch_planks"], ["bloomingnature:stripped_larch_log"]).id("kubejs:tk3/compat/saw_bloomingnature_larch_log");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_larch_wood
  event.recipes.create.cutting(["bloomingnature:stripped_larch_wood"], ["bloomingnature:larch_wood"]).id("kubejs:tk3/compat/strip_bloomingnature_larch_wood");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_larch_wood
  event.recipes.create.cutting(["6x bloomingnature:larch_planks"], ["bloomingnature:stripped_larch_wood"]).id("kubejs:tk3/compat/saw_bloomingnature_larch_wood");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_swamp_cypress_log
  event.recipes.create.cutting(["bloomingnature:stripped_swamp_cypress_log"], ["bloomingnature:swamp_cypress_log"]).id("kubejs:tk3/compat/strip_bloomingnature_swamp_cypress_log");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_swamp_cypress_log
  event.recipes.create.cutting(["6x bloomingnature:swamp_cypress_planks"], ["bloomingnature:stripped_swamp_cypress_log"]).id("kubejs:tk3/compat/saw_bloomingnature_swamp_cypress_log");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_swamp_cypress_wood
  event.recipes.create.cutting(["bloomingnature:stripped_swamp_cypress_wood"], ["bloomingnature:swamp_cypress_wood"]).id("kubejs:tk3/compat/strip_bloomingnature_swamp_cypress_wood");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_swamp_cypress_wood
  event.recipes.create.cutting(["6x bloomingnature:swamp_cypress_planks"], ["bloomingnature:stripped_swamp_cypress_wood"]).id("kubejs:tk3/compat/saw_bloomingnature_swamp_cypress_wood");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_swamp_oak_log
  event.recipes.create.cutting(["bloomingnature:stripped_swamp_oak_log"], ["bloomingnature:swamp_oak_log"]).id("kubejs:tk3/compat/strip_bloomingnature_swamp_oak_log");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_swamp_oak_log
  event.recipes.create.cutting(["6x bloomingnature:swamp_oak_planks"], ["bloomingnature:stripped_swamp_oak_log"]).id("kubejs:tk3/compat/saw_bloomingnature_swamp_oak_log");

  // tier 1 | kubejs:tk3/compat/strip_bloomingnature_swamp_oak_wood
  event.recipes.create.cutting(["bloomingnature:stripped_swamp_oak_wood"], ["bloomingnature:swamp_oak_wood"]).id("kubejs:tk3/compat/strip_bloomingnature_swamp_oak_wood");

  // tier 1 | kubejs:tk3/compat/saw_bloomingnature_swamp_oak_wood
  event.recipes.create.cutting(["6x bloomingnature:swamp_oak_planks"], ["bloomingnature:stripped_swamp_oak_wood"]).id("kubejs:tk3/compat/saw_bloomingnature_swamp_oak_wood");

  // tier 1 | kubejs:tk3/compat/saw_cataclysm_chorus_stem
  event.recipes.create.cutting(["6x cataclysm:chorus_planks"], ["cataclysm:chorus_stem"]).id("kubejs:tk3/compat/saw_cataclysm_chorus_stem");

  // tier 1 | kubejs:tk3/compat/strip_environmental_pine_log
  event.recipes.create.cutting(["environmental:stripped_pine_log"], ["environmental:pine_log"]).id("kubejs:tk3/compat/strip_environmental_pine_log");

  // tier 1 | kubejs:tk3/compat/saw_environmental_pine_log
  event.recipes.create.cutting(["6x environmental:pine_planks"], ["environmental:stripped_pine_log"]).id("kubejs:tk3/compat/saw_environmental_pine_log");

  // tier 1 | kubejs:tk3/compat/strip_environmental_pine_wood
  event.recipes.create.cutting(["environmental:stripped_pine_wood"], ["environmental:pine_wood"]).id("kubejs:tk3/compat/strip_environmental_pine_wood");

  // tier 1 | kubejs:tk3/compat/saw_environmental_pine_wood
  event.recipes.create.cutting(["6x environmental:pine_planks"], ["environmental:stripped_pine_wood"]).id("kubejs:tk3/compat/saw_environmental_pine_wood");

  // tier 1 | kubejs:tk3/compat/strip_environmental_plum_log
  event.recipes.create.cutting(["environmental:stripped_plum_log"], ["environmental:plum_log"]).id("kubejs:tk3/compat/strip_environmental_plum_log");

  // tier 1 | kubejs:tk3/compat/saw_environmental_plum_log
  event.recipes.create.cutting(["6x environmental:plum_planks"], ["environmental:stripped_plum_log"]).id("kubejs:tk3/compat/saw_environmental_plum_log");

  // tier 1 | kubejs:tk3/compat/strip_environmental_plum_wood
  event.recipes.create.cutting(["environmental:stripped_plum_wood"], ["environmental:plum_wood"]).id("kubejs:tk3/compat/strip_environmental_plum_wood");

  // tier 1 | kubejs:tk3/compat/saw_environmental_plum_wood
  event.recipes.create.cutting(["6x environmental:plum_planks"], ["environmental:stripped_plum_wood"]).id("kubejs:tk3/compat/saw_environmental_plum_wood");

  // tier 1 | kubejs:tk3/compat/strip_environmental_willow_log
  event.recipes.create.cutting(["environmental:stripped_willow_log"], ["environmental:willow_log"]).id("kubejs:tk3/compat/strip_environmental_willow_log");

  // tier 1 | kubejs:tk3/compat/saw_environmental_willow_log
  event.recipes.create.cutting(["6x environmental:willow_planks"], ["environmental:stripped_willow_log"]).id("kubejs:tk3/compat/saw_environmental_willow_log");

  // tier 1 | kubejs:tk3/compat/strip_environmental_willow_wood
  event.recipes.create.cutting(["environmental:stripped_willow_wood"], ["environmental:willow_wood"]).id("kubejs:tk3/compat/strip_environmental_willow_wood");

  // tier 1 | kubejs:tk3/compat/saw_environmental_willow_wood
  event.recipes.create.cutting(["6x environmental:willow_planks"], ["environmental:stripped_willow_wood"]).id("kubejs:tk3/compat/saw_environmental_willow_wood");

  // tier 1 | kubejs:tk3/compat/strip_environmental_wisteria_log
  event.recipes.create.cutting(["environmental:stripped_wisteria_log"], ["environmental:wisteria_log"]).id("kubejs:tk3/compat/strip_environmental_wisteria_log");

  // tier 1 | kubejs:tk3/compat/saw_environmental_wisteria_log
  event.recipes.create.cutting(["6x environmental:wisteria_planks"], ["environmental:stripped_wisteria_log"]).id("kubejs:tk3/compat/saw_environmental_wisteria_log");

  // tier 1 | kubejs:tk3/compat/strip_environmental_wisteria_wood
  event.recipes.create.cutting(["environmental:stripped_wisteria_wood"], ["environmental:wisteria_wood"]).id("kubejs:tk3/compat/strip_environmental_wisteria_wood");

  // tier 1 | kubejs:tk3/compat/saw_environmental_wisteria_wood
  event.recipes.create.cutting(["6x environmental:wisteria_planks"], ["environmental:stripped_wisteria_wood"]).id("kubejs:tk3/compat/saw_environmental_wisteria_wood");

  // tier 1 | kubejs:tk3/compat/saw_iceandfire_dreadwood_log
  event.recipes.create.cutting(["6x iceandfire:dreadwood_planks"], ["iceandfire:dreadwood_log"]).id("kubejs:tk3/compat/saw_iceandfire_dreadwood_log");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_acacia_log
  event.recipes.create.cutting(["minecraft:stripped_acacia_log"], ["minecraft:acacia_log"]).id("kubejs:tk3/compat/strip_minecraft_acacia_log");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_acacia_log
  event.recipes.create.cutting(["6x minecraft:acacia_planks"], ["minecraft:stripped_acacia_log"]).id("kubejs:tk3/compat/saw_minecraft_acacia_log");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_acacia_wood
  event.recipes.create.cutting(["minecraft:stripped_acacia_wood"], ["minecraft:acacia_wood"]).id("kubejs:tk3/compat/strip_minecraft_acacia_wood");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_acacia_wood
  event.recipes.create.cutting(["6x minecraft:acacia_planks"], ["minecraft:stripped_acacia_wood"]).id("kubejs:tk3/compat/saw_minecraft_acacia_wood");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_birch_log
  event.recipes.create.cutting(["minecraft:stripped_birch_log"], ["minecraft:birch_log"]).id("kubejs:tk3/compat/strip_minecraft_birch_log");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_birch_log
  event.recipes.create.cutting(["6x minecraft:birch_planks"], ["minecraft:stripped_birch_log"]).id("kubejs:tk3/compat/saw_minecraft_birch_log");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_birch_wood
  event.recipes.create.cutting(["minecraft:stripped_birch_wood"], ["minecraft:birch_wood"]).id("kubejs:tk3/compat/strip_minecraft_birch_wood");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_birch_wood
  event.recipes.create.cutting(["6x minecraft:birch_planks"], ["minecraft:stripped_birch_wood"]).id("kubejs:tk3/compat/saw_minecraft_birch_wood");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_cherry_log
  event.recipes.create.cutting(["minecraft:stripped_cherry_log"], ["minecraft:cherry_log"]).id("kubejs:tk3/compat/strip_minecraft_cherry_log");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_cherry_log
  event.recipes.create.cutting(["6x minecraft:cherry_planks"], ["minecraft:stripped_cherry_log"]).id("kubejs:tk3/compat/saw_minecraft_cherry_log");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_cherry_wood
  event.recipes.create.cutting(["minecraft:stripped_cherry_wood"], ["minecraft:cherry_wood"]).id("kubejs:tk3/compat/strip_minecraft_cherry_wood");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_cherry_wood
  event.recipes.create.cutting(["6x minecraft:cherry_planks"], ["minecraft:stripped_cherry_wood"]).id("kubejs:tk3/compat/saw_minecraft_cherry_wood");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_crimson_hyphae
  event.recipes.create.cutting(["minecraft:stripped_crimson_hyphae"], ["minecraft:crimson_hyphae"]).id("kubejs:tk3/compat/strip_minecraft_crimson_hyphae");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_crimson_hyphae
  event.recipes.create.cutting(["6x minecraft:crimson_planks"], ["minecraft:stripped_crimson_hyphae"]).id("kubejs:tk3/compat/saw_minecraft_crimson_hyphae");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_crimson_stem
  event.recipes.create.cutting(["minecraft:stripped_crimson_stem"], ["minecraft:crimson_stem"]).id("kubejs:tk3/compat/strip_minecraft_crimson_stem");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_crimson_stem
  event.recipes.create.cutting(["6x minecraft:crimson_planks"], ["minecraft:stripped_crimson_stem"]).id("kubejs:tk3/compat/saw_minecraft_crimson_stem");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_dark_oak_log
  event.recipes.create.cutting(["minecraft:stripped_dark_oak_log"], ["minecraft:dark_oak_log"]).id("kubejs:tk3/compat/strip_minecraft_dark_oak_log");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_dark_oak_log
  event.recipes.create.cutting(["6x minecraft:dark_oak_planks"], ["minecraft:stripped_dark_oak_log"]).id("kubejs:tk3/compat/saw_minecraft_dark_oak_log");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_dark_oak_wood
  event.recipes.create.cutting(["minecraft:stripped_dark_oak_wood"], ["minecraft:dark_oak_wood"]).id("kubejs:tk3/compat/strip_minecraft_dark_oak_wood");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_dark_oak_wood
  event.recipes.create.cutting(["6x minecraft:dark_oak_planks"], ["minecraft:stripped_dark_oak_wood"]).id("kubejs:tk3/compat/saw_minecraft_dark_oak_wood");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_jungle_log
  event.recipes.create.cutting(["minecraft:stripped_jungle_log"], ["minecraft:jungle_log"]).id("kubejs:tk3/compat/strip_minecraft_jungle_log");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_jungle_log
  event.recipes.create.cutting(["6x minecraft:jungle_planks"], ["minecraft:stripped_jungle_log"]).id("kubejs:tk3/compat/saw_minecraft_jungle_log");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_jungle_wood
  event.recipes.create.cutting(["minecraft:stripped_jungle_wood"], ["minecraft:jungle_wood"]).id("kubejs:tk3/compat/strip_minecraft_jungle_wood");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_jungle_wood
  event.recipes.create.cutting(["6x minecraft:jungle_planks"], ["minecraft:stripped_jungle_wood"]).id("kubejs:tk3/compat/saw_minecraft_jungle_wood");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_mangrove_log
  event.recipes.create.cutting(["minecraft:stripped_mangrove_log"], ["minecraft:mangrove_log"]).id("kubejs:tk3/compat/strip_minecraft_mangrove_log");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_mangrove_log
  event.recipes.create.cutting(["6x minecraft:mangrove_planks"], ["minecraft:stripped_mangrove_log"]).id("kubejs:tk3/compat/saw_minecraft_mangrove_log");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_mangrove_wood
  event.recipes.create.cutting(["minecraft:stripped_mangrove_wood"], ["minecraft:mangrove_wood"]).id("kubejs:tk3/compat/strip_minecraft_mangrove_wood");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_mangrove_wood
  event.recipes.create.cutting(["6x minecraft:mangrove_planks"], ["minecraft:stripped_mangrove_wood"]).id("kubejs:tk3/compat/saw_minecraft_mangrove_wood");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_oak_log
  event.recipes.create.cutting(["minecraft:stripped_oak_log"], ["minecraft:oak_log"]).id("kubejs:tk3/compat/strip_minecraft_oak_log");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_oak_log
  event.recipes.create.cutting(["6x minecraft:oak_planks"], ["minecraft:stripped_oak_log"]).id("kubejs:tk3/compat/saw_minecraft_oak_log");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_oak_wood
  event.recipes.create.cutting(["minecraft:stripped_oak_wood"], ["minecraft:oak_wood"]).id("kubejs:tk3/compat/strip_minecraft_oak_wood");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_oak_wood
  event.recipes.create.cutting(["6x minecraft:oak_planks"], ["minecraft:stripped_oak_wood"]).id("kubejs:tk3/compat/saw_minecraft_oak_wood");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_spruce_log
  event.recipes.create.cutting(["minecraft:stripped_spruce_log"], ["minecraft:spruce_log"]).id("kubejs:tk3/compat/strip_minecraft_spruce_log");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_spruce_log
  event.recipes.create.cutting(["6x minecraft:spruce_planks"], ["minecraft:stripped_spruce_log"]).id("kubejs:tk3/compat/saw_minecraft_spruce_log");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_spruce_wood
  event.recipes.create.cutting(["minecraft:stripped_spruce_wood"], ["minecraft:spruce_wood"]).id("kubejs:tk3/compat/strip_minecraft_spruce_wood");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_spruce_wood
  event.recipes.create.cutting(["6x minecraft:spruce_planks"], ["minecraft:stripped_spruce_wood"]).id("kubejs:tk3/compat/saw_minecraft_spruce_wood");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_warped_hyphae
  event.recipes.create.cutting(["minecraft:stripped_warped_hyphae"], ["minecraft:warped_hyphae"]).id("kubejs:tk3/compat/strip_minecraft_warped_hyphae");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_warped_hyphae
  event.recipes.create.cutting(["6x minecraft:warped_planks"], ["minecraft:stripped_warped_hyphae"]).id("kubejs:tk3/compat/saw_minecraft_warped_hyphae");

  // tier 1 | kubejs:tk3/compat/strip_minecraft_warped_stem
  event.recipes.create.cutting(["minecraft:stripped_warped_stem"], ["minecraft:warped_stem"]).id("kubejs:tk3/compat/strip_minecraft_warped_stem");

  // tier 1 | kubejs:tk3/compat/saw_minecraft_warped_stem
  event.recipes.create.cutting(["6x minecraft:warped_planks"], ["minecraft:stripped_warped_stem"]).id("kubejs:tk3/compat/saw_minecraft_warped_stem");

  // tier 1 | kubejs:tk3/compat/strip_quark_ancient_log
  event.recipes.create.cutting(["quark:stripped_ancient_log"], ["quark:ancient_log"]).id("kubejs:tk3/compat/strip_quark_ancient_log");

  // tier 1 | kubejs:tk3/compat/saw_quark_ancient_log
  event.recipes.create.cutting(["6x quark:ancient_planks"], ["quark:stripped_ancient_log"]).id("kubejs:tk3/compat/saw_quark_ancient_log");

  // tier 1 | kubejs:tk3/compat/strip_quark_ancient_wood
  event.recipes.create.cutting(["quark:stripped_ancient_wood"], ["quark:ancient_wood"]).id("kubejs:tk3/compat/strip_quark_ancient_wood");

  // tier 1 | kubejs:tk3/compat/saw_quark_ancient_wood
  event.recipes.create.cutting(["6x quark:ancient_planks"], ["quark:stripped_ancient_wood"]).id("kubejs:tk3/compat/saw_quark_ancient_wood");

  // tier 1 | kubejs:tk3/compat/strip_quark_azalea_log
  event.recipes.create.cutting(["quark:stripped_azalea_log"], ["quark:azalea_log"]).id("kubejs:tk3/compat/strip_quark_azalea_log");

  // tier 1 | kubejs:tk3/compat/saw_quark_azalea_log
  event.recipes.create.cutting(["6x quark:azalea_planks"], ["quark:stripped_azalea_log"]).id("kubejs:tk3/compat/saw_quark_azalea_log");

  // tier 1 | kubejs:tk3/compat/strip_quark_azalea_wood
  event.recipes.create.cutting(["quark:stripped_azalea_wood"], ["quark:azalea_wood"]).id("kubejs:tk3/compat/strip_quark_azalea_wood");

  // tier 1 | kubejs:tk3/compat/saw_quark_azalea_wood
  event.recipes.create.cutting(["6x quark:azalea_planks"], ["quark:stripped_azalea_wood"]).id("kubejs:tk3/compat/saw_quark_azalea_wood");

  // tier 1 | kubejs:tk3/compat/strip_quark_blossom_log
  event.recipes.create.cutting(["quark:stripped_blossom_log"], ["quark:blossom_log"]).id("kubejs:tk3/compat/strip_quark_blossom_log");

  // tier 1 | kubejs:tk3/compat/saw_quark_blossom_log
  event.recipes.create.cutting(["6x quark:blossom_planks"], ["quark:stripped_blossom_log"]).id("kubejs:tk3/compat/saw_quark_blossom_log");

  // tier 1 | kubejs:tk3/compat/strip_quark_blossom_wood
  event.recipes.create.cutting(["quark:stripped_blossom_wood"], ["quark:blossom_wood"]).id("kubejs:tk3/compat/strip_quark_blossom_wood");

  // tier 1 | kubejs:tk3/compat/saw_quark_blossom_wood
  event.recipes.create.cutting(["6x quark:blossom_planks"], ["quark:stripped_blossom_wood"]).id("kubejs:tk3/compat/saw_quark_blossom_wood");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_canopy_log
  event.recipes.create.cutting(["twilightforest:stripped_canopy_log"], ["twilightforest:canopy_log"]).id("kubejs:tk3/compat/strip_twilightforest_canopy_log");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_canopy_log
  event.recipes.create.cutting(["6x twilightforest:canopy_planks"], ["twilightforest:stripped_canopy_log"]).id("kubejs:tk3/compat/saw_twilightforest_canopy_log");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_canopy_wood
  event.recipes.create.cutting(["twilightforest:stripped_canopy_wood"], ["twilightforest:canopy_wood"]).id("kubejs:tk3/compat/strip_twilightforest_canopy_wood");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_canopy_wood
  event.recipes.create.cutting(["6x twilightforest:canopy_planks"], ["twilightforest:stripped_canopy_wood"]).id("kubejs:tk3/compat/saw_twilightforest_canopy_wood");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_dark_log
  event.recipes.create.cutting(["twilightforest:stripped_dark_log"], ["twilightforest:dark_log"]).id("kubejs:tk3/compat/strip_twilightforest_dark_log");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_dark_log
  event.recipes.create.cutting(["6x twilightforest:dark_planks"], ["twilightforest:stripped_dark_log"]).id("kubejs:tk3/compat/saw_twilightforest_dark_log");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_dark_wood
  event.recipes.create.cutting(["twilightforest:stripped_dark_wood"], ["twilightforest:dark_wood"]).id("kubejs:tk3/compat/strip_twilightforest_dark_wood");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_dark_wood
  event.recipes.create.cutting(["6x twilightforest:dark_planks"], ["twilightforest:stripped_dark_wood"]).id("kubejs:tk3/compat/saw_twilightforest_dark_wood");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_mangrove_log
  event.recipes.create.cutting(["twilightforest:stripped_mangrove_log"], ["twilightforest:mangrove_log"]).id("kubejs:tk3/compat/strip_twilightforest_mangrove_log");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_mangrove_log
  event.recipes.create.cutting(["6x twilightforest:mangrove_planks"], ["twilightforest:stripped_mangrove_log"]).id("kubejs:tk3/compat/saw_twilightforest_mangrove_log");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_mangrove_wood
  event.recipes.create.cutting(["twilightforest:stripped_mangrove_wood"], ["twilightforest:mangrove_wood"]).id("kubejs:tk3/compat/strip_twilightforest_mangrove_wood");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_mangrove_wood
  event.recipes.create.cutting(["6x twilightforest:mangrove_planks"], ["twilightforest:stripped_mangrove_wood"]).id("kubejs:tk3/compat/saw_twilightforest_mangrove_wood");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_mining_log
  event.recipes.create.cutting(["twilightforest:stripped_mining_log"], ["twilightforest:mining_log"]).id("kubejs:tk3/compat/strip_twilightforest_mining_log");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_mining_log
  event.recipes.create.cutting(["6x twilightforest:mining_planks"], ["twilightforest:stripped_mining_log"]).id("kubejs:tk3/compat/saw_twilightforest_mining_log");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_mining_wood
  event.recipes.create.cutting(["twilightforest:stripped_mining_wood"], ["twilightforest:mining_wood"]).id("kubejs:tk3/compat/strip_twilightforest_mining_wood");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_mining_wood
  event.recipes.create.cutting(["6x twilightforest:mining_planks"], ["twilightforest:stripped_mining_wood"]).id("kubejs:tk3/compat/saw_twilightforest_mining_wood");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_sorting_log
  event.recipes.create.cutting(["twilightforest:stripped_sorting_log"], ["twilightforest:sorting_log"]).id("kubejs:tk3/compat/strip_twilightforest_sorting_log");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_sorting_log
  event.recipes.create.cutting(["6x twilightforest:sorting_planks"], ["twilightforest:stripped_sorting_log"]).id("kubejs:tk3/compat/saw_twilightforest_sorting_log");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_sorting_wood
  event.recipes.create.cutting(["twilightforest:stripped_sorting_wood"], ["twilightforest:sorting_wood"]).id("kubejs:tk3/compat/strip_twilightforest_sorting_wood");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_sorting_wood
  event.recipes.create.cutting(["6x twilightforest:sorting_planks"], ["twilightforest:stripped_sorting_wood"]).id("kubejs:tk3/compat/saw_twilightforest_sorting_wood");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_time_log
  event.recipes.create.cutting(["twilightforest:stripped_time_log"], ["twilightforest:time_log"]).id("kubejs:tk3/compat/strip_twilightforest_time_log");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_time_log
  event.recipes.create.cutting(["6x twilightforest:time_planks"], ["twilightforest:stripped_time_log"]).id("kubejs:tk3/compat/saw_twilightforest_time_log");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_time_wood
  event.recipes.create.cutting(["twilightforest:stripped_time_wood"], ["twilightforest:time_wood"]).id("kubejs:tk3/compat/strip_twilightforest_time_wood");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_time_wood
  event.recipes.create.cutting(["6x twilightforest:time_planks"], ["twilightforest:stripped_time_wood"]).id("kubejs:tk3/compat/saw_twilightforest_time_wood");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_transformation_log
  event.recipes.create.cutting(["twilightforest:stripped_transformation_log"], ["twilightforest:transformation_log"]).id("kubejs:tk3/compat/strip_twilightforest_transformation_log");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_transformation_log
  event.recipes.create.cutting(["6x twilightforest:transformation_planks"], ["twilightforest:stripped_transformation_log"]).id("kubejs:tk3/compat/saw_twilightforest_transformation_log");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_transformation_wood
  event.recipes.create.cutting(["twilightforest:stripped_transformation_wood"], ["twilightforest:transformation_wood"]).id("kubejs:tk3/compat/strip_twilightforest_transformation_wood");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_transformation_wood
  event.recipes.create.cutting(["6x twilightforest:transformation_planks"], ["twilightforest:stripped_transformation_wood"]).id("kubejs:tk3/compat/saw_twilightforest_transformation_wood");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_twilight_oak_log
  event.recipes.create.cutting(["twilightforest:stripped_twilight_oak_log"], ["twilightforest:twilight_oak_log"]).id("kubejs:tk3/compat/strip_twilightforest_twilight_oak_log");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_twilight_oak_log
  event.recipes.create.cutting(["6x twilightforest:twilight_oak_planks"], ["twilightforest:stripped_twilight_oak_log"]).id("kubejs:tk3/compat/saw_twilightforest_twilight_oak_log");

  // tier 1 | kubejs:tk3/compat/strip_twilightforest_twilight_oak_wood
  event.recipes.create.cutting(["twilightforest:stripped_twilight_oak_wood"], ["twilightforest:twilight_oak_wood"]).id("kubejs:tk3/compat/strip_twilightforest_twilight_oak_wood");

  // tier 1 | kubejs:tk3/compat/saw_twilightforest_twilight_oak_wood
  event.recipes.create.cutting(["6x twilightforest:twilight_oak_planks"], ["twilightforest:stripped_twilight_oak_wood"]).id("kubejs:tk3/compat/saw_twilightforest_twilight_oak_wood");

  // tier 1 | kubejs:tk3/compat/strip_upgrade_aquatic_driftwood_log
  event.recipes.create.cutting(["upgrade_aquatic:stripped_driftwood_log"], ["upgrade_aquatic:driftwood_log"]).id("kubejs:tk3/compat/strip_upgrade_aquatic_driftwood_log");

  // tier 1 | kubejs:tk3/compat/saw_upgrade_aquatic_driftwood_log
  event.recipes.create.cutting(["6x upgrade_aquatic:driftwood_planks"], ["upgrade_aquatic:stripped_driftwood_log"]).id("kubejs:tk3/compat/saw_upgrade_aquatic_driftwood_log");

  // tier 1 | kubejs:tk3/compat/strip_upgrade_aquatic_river_log
  event.recipes.create.cutting(["upgrade_aquatic:stripped_river_log"], ["upgrade_aquatic:river_log"]).id("kubejs:tk3/compat/strip_upgrade_aquatic_river_log");

  // tier 1 | kubejs:tk3/compat/saw_upgrade_aquatic_river_log
  event.recipes.create.cutting(["6x upgrade_aquatic:river_planks"], ["upgrade_aquatic:stripped_river_log"]).id("kubejs:tk3/compat/saw_upgrade_aquatic_river_log");

  // tier 1 | kubejs:tk3/compat/strip_upgrade_aquatic_river_wood
  event.recipes.create.cutting(["upgrade_aquatic:stripped_river_wood"], ["upgrade_aquatic:river_wood"]).id("kubejs:tk3/compat/strip_upgrade_aquatic_river_wood");

  // tier 1 | kubejs:tk3/compat/saw_upgrade_aquatic_river_wood
  event.recipes.create.cutting(["6x upgrade_aquatic:river_planks"], ["upgrade_aquatic:stripped_river_wood"]).id("kubejs:tk3/compat/saw_upgrade_aquatic_river_wood");

  // tier 1 | kubejs:tk3/compat/strip_witchery_alder_log
  event.recipes.create.cutting(["witchery:stripped_alder_log"], ["witchery:alder_log"]).id("kubejs:tk3/compat/strip_witchery_alder_log");

  // tier 1 | kubejs:tk3/compat/saw_witchery_alder_log
  event.recipes.create.cutting(["6x witchery:alder_planks"], ["witchery:stripped_alder_log"]).id("kubejs:tk3/compat/saw_witchery_alder_log");

  // tier 1 | kubejs:tk3/compat/strip_witchery_alder_wood
  event.recipes.create.cutting(["witchery:stripped_alder_wood"], ["witchery:alder_wood"]).id("kubejs:tk3/compat/strip_witchery_alder_wood");

  // tier 1 | kubejs:tk3/compat/saw_witchery_alder_wood
  event.recipes.create.cutting(["6x witchery:alder_planks"], ["witchery:stripped_alder_wood"]).id("kubejs:tk3/compat/saw_witchery_alder_wood");

  // tier 1 | kubejs:tk3/compat/strip_witchery_hawthorn_log
  event.recipes.create.cutting(["witchery:stripped_hawthorn_log"], ["witchery:hawthorn_log"]).id("kubejs:tk3/compat/strip_witchery_hawthorn_log");

  // tier 1 | kubejs:tk3/compat/saw_witchery_hawthorn_log
  event.recipes.create.cutting(["6x witchery:hawthorn_planks"], ["witchery:stripped_hawthorn_log"]).id("kubejs:tk3/compat/saw_witchery_hawthorn_log");

  // tier 1 | kubejs:tk3/compat/strip_witchery_hawthorn_wood
  event.recipes.create.cutting(["witchery:stripped_hawthorn_wood"], ["witchery:hawthorn_wood"]).id("kubejs:tk3/compat/strip_witchery_hawthorn_wood");

  // tier 1 | kubejs:tk3/compat/saw_witchery_hawthorn_wood
  event.recipes.create.cutting(["6x witchery:hawthorn_planks"], ["witchery:stripped_hawthorn_wood"]).id("kubejs:tk3/compat/saw_witchery_hawthorn_wood");

  // tier 1 | kubejs:tk3/compat/strip_witchery_rowan_log
  event.recipes.create.cutting(["witchery:stripped_rowan_log"], ["witchery:rowan_log"]).id("kubejs:tk3/compat/strip_witchery_rowan_log");

  // tier 1 | kubejs:tk3/compat/saw_witchery_rowan_log
  event.recipes.create.cutting(["6x witchery:rowan_planks"], ["witchery:stripped_rowan_log"]).id("kubejs:tk3/compat/saw_witchery_rowan_log");

  // tier 1 | kubejs:tk3/compat/strip_witchery_rowan_wood
  event.recipes.create.cutting(["witchery:stripped_rowan_wood"], ["witchery:rowan_wood"]).id("kubejs:tk3/compat/strip_witchery_rowan_wood");

  // tier 1 | kubejs:tk3/compat/saw_witchery_rowan_wood
  event.recipes.create.cutting(["6x witchery:rowan_planks"], ["witchery:stripped_rowan_wood"]).id("kubejs:tk3/compat/saw_witchery_rowan_wood");

  // tier 1 | kubejs:tk3/compat/strip_bamboo_block
  event.recipes.create.cutting(["minecraft:stripped_bamboo_block"], ["minecraft:bamboo_block"]).id("kubejs:tk3/compat/strip_bamboo_block");

  // tier 1 | kubejs:tk3/compat/saw_bamboo
  event.recipes.create.cutting(["3x minecraft:bamboo_planks"], ["minecraft:stripped_bamboo_block"]).id("kubejs:tk3/compat/saw_bamboo");

  // tier 1 | kubejs:tk3/compat/gravel_to_sand
  event.recipes.create.milling(["minecraft:sand"], ["minecraft:gravel"]).id("kubejs:tk3/compat/gravel_to_sand");

  // tier 1 | kubejs:tk3/compat/wheat_flour
  event.recipes.create.milling(["create:wheat_flour"], ["minecraft:wheat"]).id("kubejs:tk3/compat/wheat_flour");

  // tier 1 | kubejs:tk3/compat/renewable_dirt
  event.recipes.create.compacting(["2x minecraft:dirt"], ["minecraft:gravel", "minecraft:clay_ball", Fluid.of("minecraft:water", 250)]).id("kubejs:tk3/compat/renewable_dirt");

  // tier 1 | kubejs:tk3/compat/mud
  event.recipes.create.mixing(["minecraft:mud"], ["minecraft:dirt", Fluid.of("minecraft:water", 250)]).id("kubejs:tk3/compat/mud");

  // tier 1 | kubejs:tk3/compat/mud_clay
  event.recipes.create.splashing(["minecraft:clay_ball"], ["minecraft:mud"]).id("kubejs:tk3/compat/mud_clay");

  // tier 1 | kubejs:tk3/compat/soul_sand
  event.recipes.create.haunting(["minecraft:soul_sand"], ["minecraft:sand"]).id("kubejs:tk3/compat/soul_sand");

  // tier 1 | kubejs:tk3/compat/calcite
  event.recipes.create.compacting(["minecraft:calcite"], ["minecraft:bone_meal", "minecraft:clay_ball"]).id("kubejs:tk3/compat/calcite");

  // tier 2 | kubejs:tk3/compat/age_copper_block
  event.recipes.create.splashing(["minecraft:exposed_copper"], ["minecraft:copper_block"]).id("kubejs:tk3/compat/age_copper_block");

  // tier 2 | kubejs:tk3/compat/age_exposed_copper
  event.recipes.create.splashing(["minecraft:weathered_copper"], ["minecraft:exposed_copper"]).id("kubejs:tk3/compat/age_exposed_copper");

  // tier 2 | kubejs:tk3/compat/age_weathered_copper
  event.recipes.create.splashing(["minecraft:oxidized_copper"], ["minecraft:weathered_copper"]).id("kubejs:tk3/compat/age_weathered_copper");
});
