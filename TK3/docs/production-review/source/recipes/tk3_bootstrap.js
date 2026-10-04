// priority: 0
// Hand and Press/Basin routes needed before their automated replacements.
ServerEvents.recipes(event => {
    event.smelting('minecraft:copper_ingot', 'minecraft:raw_copper')
        .id('kubejs:tk3/bootstrap/raw_copper_smelting');
    event.blasting('minecraft:copper_ingot', 'minecraft:raw_copper')
        .id('kubejs:tk3/bootstrap/raw_copper_blasting');
    event.recipes.create.compacting(['4x create:fluid_pipe'],
        ['2x create:copper_sheet', 'minecraft:copper_ingot'])
        .id('kubejs:tk3/bootstrap/fluid_pipe_compacting');
    event.shaped('3x minecraft:glass_bottle', ['G G', ' G '], {G: 'minecraft:glass'})
        .id('kubejs:tk3/bootstrap/glass_bottles');
    // Preserve native 10 mB XP conversion even though glass bottles are controlled.
    event.custom({
        type: 'create:emptying', ingredients: [{item: 'minecraft:experience_bottle'}],
        results: [{id: 'minecraft:glass_bottle'},
                  {id: 'create_enchantment_industry:experience', amount: 10}]
    }).id('kubejs:tk3/bootstrap/liquid_experience');
    const wood = [
    {
        "input": "alexscaves:pewen_log",
        "output": "alexscaves:pewen_planks"
    },
    {
        "input": "alexscaves:pewen_wood",
        "output": "alexscaves:pewen_planks"
    },
    {
        "input": "alexscaves:thornwood_log",
        "output": "alexscaves:thornwood_planks"
    },
    {
        "input": "alexscaves:thornwood_wood",
        "output": "alexscaves:thornwood_planks"
    },
    {
        "input": "atmospheric:aspen_log",
        "output": "atmospheric:aspen_planks"
    },
    {
        "input": "atmospheric:aspen_wood",
        "output": "atmospheric:aspen_planks"
    },
    {
        "input": "atmospheric:grimwood_log",
        "output": "atmospheric:grimwood_planks"
    },
    {
        "input": "atmospheric:kousa_log",
        "output": "atmospheric:kousa_planks"
    },
    {
        "input": "atmospheric:kousa_wood",
        "output": "atmospheric:kousa_planks"
    },
    {
        "input": "atmospheric:laurel_log",
        "output": "atmospheric:laurel_planks"
    },
    {
        "input": "atmospheric:laurel_wood",
        "output": "atmospheric:laurel_planks"
    },
    {
        "input": "atmospheric:morado_log",
        "output": "atmospheric:morado_planks"
    },
    {
        "input": "atmospheric:morado_wood",
        "output": "atmospheric:morado_planks"
    },
    {
        "input": "atmospheric:rosewood_log",
        "output": "atmospheric:rosewood_planks"
    },
    {
        "input": "atmospheric:yucca_log",
        "output": "atmospheric:yucca_planks"
    },
    {
        "input": "atmospheric:yucca_wood",
        "output": "atmospheric:yucca_planks"
    },
    {
        "input": "autumnity:maple_log",
        "output": "autumnity:maple_planks"
    },
    {
        "input": "autumnity:maple_wood",
        "output": "autumnity:maple_planks"
    },
    {
        "input": "betterend:dragon_tree_log",
        "output": "betterend:dragon_tree_planks"
    },
    {
        "input": "betterend:end_lotus_log",
        "output": "betterend:end_lotus_planks"
    },
    {
        "input": "betterend:end_lotus_stem",
        "output": "betterend:end_lotus_planks"
    },
    {
        "input": "betterend:helix_tree_log",
        "output": "betterend:helix_tree_planks"
    },
    {
        "input": "betterend:jellyshroom_log",
        "output": "betterend:jellyshroom_planks"
    },
    {
        "input": "betterend:lacugrove_log",
        "output": "betterend:lacugrove_planks"
    },
    {
        "input": "betterend:lucernia_log",
        "output": "betterend:lucernia_planks"
    },
    {
        "input": "betterend:mossy_glowshroom_log",
        "output": "betterend:mossy_glowshroom_planks"
    },
    {
        "input": "betterend:pythadendron_log",
        "output": "betterend:pythadendron_planks"
    },
    {
        "input": "betterend:tenanea_log",
        "output": "betterend:tenanea_planks"
    },
    {
        "input": "betterend:umbrella_tree_log",
        "output": "betterend:umbrella_tree_planks"
    },
    {
        "input": "betternether:anchor_tree_log",
        "output": "betternether:anchor_tree_planks"
    },
    {
        "input": "betternether:gloomwood_dark_log",
        "output": "betternether:gloomwood_dark_planks"
    },
    {
        "input": "betternether:gloomwood_log",
        "output": "betternether:gloomwood_planks"
    },
    {
        "input": "betternether:gloomwood_transition_log",
        "output": "betternether:gloomwood_transition_planks"
    },
    {
        "input": "betternether:mushroom_fir_log",
        "output": "betternether:mushroom_fir_planks"
    },
    {
        "input": "betternether:mushroom_fir_stem",
        "output": "betternether:mushroom_fir_planks"
    },
    {
        "input": "betternether:nether_mushroom_stem",
        "output": "betternether:nether_mushroom_planks"
    },
    {
        "input": "betternether:nether_reed_stem",
        "output": "betternether:nether_reed_planks"
    },
    {
        "input": "betternether:nether_sakura_log",
        "output": "betternether:nether_sakura_planks"
    },
    {
        "input": "betternether:rubeus_log",
        "output": "betternether:rubeus_planks"
    },
    {
        "input": "betternether:stalagnate_log",
        "output": "betternether:stalagnate_planks"
    },
    {
        "input": "betternether:stalagnate_stem",
        "output": "betternether:stalagnate_planks"
    },
    {
        "input": "betternether:wart_log",
        "output": "betternether:wart_planks"
    },
    {
        "input": "betternether:willow_log",
        "output": "betternether:willow_planks"
    },
    {
        "input": "biomesoplenty:dead_log",
        "output": "biomesoplenty:dead_planks"
    },
    {
        "input": "biomesoplenty:dead_wood",
        "output": "biomesoplenty:dead_planks"
    },
    {
        "input": "biomesoplenty:empyreal_log",
        "output": "biomesoplenty:empyreal_planks"
    },
    {
        "input": "biomesoplenty:empyreal_wood",
        "output": "biomesoplenty:empyreal_planks"
    },
    {
        "input": "biomesoplenty:fir_log",
        "output": "biomesoplenty:fir_planks"
    },
    {
        "input": "biomesoplenty:fir_wood",
        "output": "biomesoplenty:fir_planks"
    },
    {
        "input": "biomesoplenty:hellbark_log",
        "output": "biomesoplenty:hellbark_planks"
    },
    {
        "input": "biomesoplenty:hellbark_wood",
        "output": "biomesoplenty:hellbark_planks"
    },
    {
        "input": "biomesoplenty:jacaranda_log",
        "output": "biomesoplenty:jacaranda_planks"
    },
    {
        "input": "biomesoplenty:jacaranda_wood",
        "output": "biomesoplenty:jacaranda_planks"
    },
    {
        "input": "biomesoplenty:magic_log",
        "output": "biomesoplenty:magic_planks"
    },
    {
        "input": "biomesoplenty:magic_wood",
        "output": "biomesoplenty:magic_planks"
    },
    {
        "input": "biomesoplenty:mahogany_log",
        "output": "biomesoplenty:mahogany_planks"
    },
    {
        "input": "biomesoplenty:mahogany_wood",
        "output": "biomesoplenty:mahogany_planks"
    },
    {
        "input": "biomesoplenty:maple_log",
        "output": "biomesoplenty:maple_planks"
    },
    {
        "input": "biomesoplenty:maple_wood",
        "output": "biomesoplenty:maple_planks"
    },
    {
        "input": "biomesoplenty:palm_log",
        "output": "biomesoplenty:palm_planks"
    },
    {
        "input": "biomesoplenty:palm_wood",
        "output": "biomesoplenty:palm_planks"
    },
    {
        "input": "biomesoplenty:pine_log",
        "output": "biomesoplenty:pine_planks"
    },
    {
        "input": "biomesoplenty:pine_wood",
        "output": "biomesoplenty:pine_planks"
    },
    {
        "input": "biomesoplenty:redwood_log",
        "output": "biomesoplenty:redwood_planks"
    },
    {
        "input": "biomesoplenty:redwood_wood",
        "output": "biomesoplenty:redwood_planks"
    },
    {
        "input": "biomesoplenty:umbran_log",
        "output": "biomesoplenty:umbran_planks"
    },
    {
        "input": "biomesoplenty:umbran_wood",
        "output": "biomesoplenty:umbran_planks"
    },
    {
        "input": "biomesoplenty:willow_log",
        "output": "biomesoplenty:willow_planks"
    },
    {
        "input": "biomesoplenty:willow_wood",
        "output": "biomesoplenty:willow_planks"
    },
    {
        "input": "biomeswevegone:aspen_log",
        "output": "biomeswevegone:aspen_planks"
    },
    {
        "input": "biomeswevegone:aspen_wood",
        "output": "biomeswevegone:aspen_planks"
    },
    {
        "input": "biomeswevegone:baobab_log",
        "output": "biomeswevegone:baobab_planks"
    },
    {
        "input": "biomeswevegone:baobab_wood",
        "output": "biomeswevegone:baobab_planks"
    },
    {
        "input": "biomeswevegone:blue_enchanted_log",
        "output": "biomeswevegone:blue_enchanted_planks"
    },
    {
        "input": "biomeswevegone:blue_enchanted_wood",
        "output": "biomeswevegone:blue_enchanted_planks"
    },
    {
        "input": "biomeswevegone:cika_log",
        "output": "biomeswevegone:cika_planks"
    },
    {
        "input": "biomeswevegone:cika_wood",
        "output": "biomeswevegone:cika_planks"
    },
    {
        "input": "biomeswevegone:cypress_log",
        "output": "biomeswevegone:cypress_planks"
    },
    {
        "input": "biomeswevegone:cypress_wood",
        "output": "biomeswevegone:cypress_planks"
    },
    {
        "input": "biomeswevegone:ebony_log",
        "output": "biomeswevegone:ebony_planks"
    },
    {
        "input": "biomeswevegone:ebony_wood",
        "output": "biomeswevegone:ebony_planks"
    },
    {
        "input": "biomeswevegone:fir_log",
        "output": "biomeswevegone:fir_planks"
    },
    {
        "input": "biomeswevegone:fir_wood",
        "output": "biomeswevegone:fir_planks"
    },
    {
        "input": "biomeswevegone:florus_stem",
        "output": "biomeswevegone:florus_planks"
    },
    {
        "input": "biomeswevegone:florus_wood",
        "output": "biomeswevegone:florus_planks"
    },
    {
        "input": "biomeswevegone:green_enchanted_log",
        "output": "biomeswevegone:green_enchanted_planks"
    },
    {
        "input": "biomeswevegone:green_enchanted_wood",
        "output": "biomeswevegone:green_enchanted_planks"
    },
    {
        "input": "biomeswevegone:holly_log",
        "output": "biomeswevegone:holly_planks"
    },
    {
        "input": "biomeswevegone:holly_wood",
        "output": "biomeswevegone:holly_planks"
    },
    {
        "input": "biomeswevegone:ironwood_log",
        "output": "biomeswevegone:ironwood_planks"
    },
    {
        "input": "biomeswevegone:ironwood_wood",
        "output": "biomeswevegone:ironwood_planks"
    },
    {
        "input": "biomeswevegone:jacaranda_log",
        "output": "biomeswevegone:jacaranda_planks"
    },
    {
        "input": "biomeswevegone:jacaranda_wood",
        "output": "biomeswevegone:jacaranda_planks"
    },
    {
        "input": "biomeswevegone:mahogany_log",
        "output": "biomeswevegone:mahogany_planks"
    },
    {
        "input": "biomeswevegone:mahogany_wood",
        "output": "biomeswevegone:mahogany_planks"
    },
    {
        "input": "biomeswevegone:maple_log",
        "output": "biomeswevegone:maple_planks"
    },
    {
        "input": "biomeswevegone:maple_wood",
        "output": "biomeswevegone:maple_planks"
    },
    {
        "input": "biomeswevegone:palm_log",
        "output": "biomeswevegone:palm_planks"
    },
    {
        "input": "biomeswevegone:palm_wood",
        "output": "biomeswevegone:palm_planks"
    },
    {
        "input": "biomeswevegone:pine_log",
        "output": "biomeswevegone:pine_planks"
    },
    {
        "input": "biomeswevegone:pine_wood",
        "output": "biomeswevegone:pine_planks"
    },
    {
        "input": "biomeswevegone:rainbow_eucalyptus_log",
        "output": "biomeswevegone:rainbow_eucalyptus_planks"
    },
    {
        "input": "biomeswevegone:rainbow_eucalyptus_wood",
        "output": "biomeswevegone:rainbow_eucalyptus_planks"
    },
    {
        "input": "biomeswevegone:redwood_log",
        "output": "biomeswevegone:redwood_planks"
    },
    {
        "input": "biomeswevegone:redwood_wood",
        "output": "biomeswevegone:redwood_planks"
    },
    {
        "input": "biomeswevegone:sakura_log",
        "output": "biomeswevegone:sakura_planks"
    },
    {
        "input": "biomeswevegone:sakura_wood",
        "output": "biomeswevegone:sakura_planks"
    },
    {
        "input": "biomeswevegone:skyris_log",
        "output": "biomeswevegone:skyris_planks"
    },
    {
        "input": "biomeswevegone:skyris_wood",
        "output": "biomeswevegone:skyris_planks"
    },
    {
        "input": "biomeswevegone:spirit_log",
        "output": "biomeswevegone:spirit_planks"
    },
    {
        "input": "biomeswevegone:spirit_wood",
        "output": "biomeswevegone:spirit_planks"
    },
    {
        "input": "biomeswevegone:white_mangrove_log",
        "output": "biomeswevegone:white_mangrove_planks"
    },
    {
        "input": "biomeswevegone:white_mangrove_wood",
        "output": "biomeswevegone:white_mangrove_planks"
    },
    {
        "input": "biomeswevegone:willow_log",
        "output": "biomeswevegone:willow_planks"
    },
    {
        "input": "biomeswevegone:willow_wood",
        "output": "biomeswevegone:willow_planks"
    },
    {
        "input": "biomeswevegone:witch_hazel_log",
        "output": "biomeswevegone:witch_hazel_planks"
    },
    {
        "input": "biomeswevegone:witch_hazel_wood",
        "output": "biomeswevegone:witch_hazel_planks"
    },
    {
        "input": "biomeswevegone:zelkova_log",
        "output": "biomeswevegone:zelkova_planks"
    },
    {
        "input": "biomeswevegone:zelkova_wood",
        "output": "biomeswevegone:zelkova_planks"
    },
    {
        "input": "bloomingnature:aspen_log",
        "output": "bloomingnature:aspen_planks"
    },
    {
        "input": "bloomingnature:aspen_wood",
        "output": "bloomingnature:aspen_planks"
    },
    {
        "input": "bloomingnature:baobab_log",
        "output": "bloomingnature:baobab_planks"
    },
    {
        "input": "bloomingnature:baobab_wood",
        "output": "bloomingnature:baobab_planks"
    },
    {
        "input": "bloomingnature:chestnut_log",
        "output": "bloomingnature:chestnut_planks"
    },
    {
        "input": "bloomingnature:chestnut_wood",
        "output": "bloomingnature:chestnut_planks"
    },
    {
        "input": "bloomingnature:cypress_log",
        "output": "bloomingnature:cypress_planks"
    },
    {
        "input": "bloomingnature:cypress_wood",
        "output": "bloomingnature:cypress_planks"
    },
    {
        "input": "bloomingnature:ebony_log",
        "output": "bloomingnature:ebony_planks"
    },
    {
        "input": "bloomingnature:ebony_wood",
        "output": "bloomingnature:ebony_planks"
    },
    {
        "input": "bloomingnature:fan_palm_log",
        "output": "bloomingnature:fan_palm_planks"
    },
    {
        "input": "bloomingnature:fan_palm_wood",
        "output": "bloomingnature:fan_palm_planks"
    },
    {
        "input": "bloomingnature:fir_log",
        "output": "bloomingnature:fir_planks"
    },
    {
        "input": "bloomingnature:fir_wood",
        "output": "bloomingnature:fir_planks"
    },
    {
        "input": "bloomingnature:larch_log",
        "output": "bloomingnature:larch_planks"
    },
    {
        "input": "bloomingnature:larch_wood",
        "output": "bloomingnature:larch_planks"
    },
    {
        "input": "bloomingnature:swamp_cypress_log",
        "output": "bloomingnature:swamp_cypress_planks"
    },
    {
        "input": "bloomingnature:swamp_cypress_wood",
        "output": "bloomingnature:swamp_cypress_planks"
    },
    {
        "input": "bloomingnature:swamp_oak_log",
        "output": "bloomingnature:swamp_oak_planks"
    },
    {
        "input": "bloomingnature:swamp_oak_wood",
        "output": "bloomingnature:swamp_oak_planks"
    },
    {
        "input": "cataclysm:chorus_stem",
        "output": "cataclysm:chorus_planks"
    },
    {
        "input": "environmental:pine_log",
        "output": "environmental:pine_planks"
    },
    {
        "input": "environmental:pine_wood",
        "output": "environmental:pine_planks"
    },
    {
        "input": "environmental:plum_log",
        "output": "environmental:plum_planks"
    },
    {
        "input": "environmental:plum_wood",
        "output": "environmental:plum_planks"
    },
    {
        "input": "environmental:willow_log",
        "output": "environmental:willow_planks"
    },
    {
        "input": "environmental:willow_wood",
        "output": "environmental:willow_planks"
    },
    {
        "input": "environmental:wisteria_log",
        "output": "environmental:wisteria_planks"
    },
    {
        "input": "environmental:wisteria_wood",
        "output": "environmental:wisteria_planks"
    },
    {
        "input": "iceandfire:dreadwood_log",
        "output": "iceandfire:dreadwood_planks"
    },
    {
        "input": "minecraft:acacia_log",
        "output": "minecraft:acacia_planks"
    },
    {
        "input": "minecraft:acacia_wood",
        "output": "minecraft:acacia_planks"
    },
    {
        "input": "minecraft:birch_log",
        "output": "minecraft:birch_planks"
    },
    {
        "input": "minecraft:birch_wood",
        "output": "minecraft:birch_planks"
    },
    {
        "input": "minecraft:cherry_log",
        "output": "minecraft:cherry_planks"
    },
    {
        "input": "minecraft:cherry_wood",
        "output": "minecraft:cherry_planks"
    },
    {
        "input": "minecraft:crimson_hyphae",
        "output": "minecraft:crimson_planks"
    },
    {
        "input": "minecraft:crimson_stem",
        "output": "minecraft:crimson_planks"
    },
    {
        "input": "minecraft:dark_oak_log",
        "output": "minecraft:dark_oak_planks"
    },
    {
        "input": "minecraft:dark_oak_wood",
        "output": "minecraft:dark_oak_planks"
    },
    {
        "input": "minecraft:jungle_log",
        "output": "minecraft:jungle_planks"
    },
    {
        "input": "minecraft:jungle_wood",
        "output": "minecraft:jungle_planks"
    },
    {
        "input": "minecraft:mangrove_log",
        "output": "minecraft:mangrove_planks"
    },
    {
        "input": "minecraft:mangrove_wood",
        "output": "minecraft:mangrove_planks"
    },
    {
        "input": "minecraft:oak_log",
        "output": "minecraft:oak_planks"
    },
    {
        "input": "minecraft:oak_wood",
        "output": "minecraft:oak_planks"
    },
    {
        "input": "minecraft:spruce_log",
        "output": "minecraft:spruce_planks"
    },
    {
        "input": "minecraft:spruce_wood",
        "output": "minecraft:spruce_planks"
    },
    {
        "input": "minecraft:warped_hyphae",
        "output": "minecraft:warped_planks"
    },
    {
        "input": "minecraft:warped_stem",
        "output": "minecraft:warped_planks"
    },
    {
        "input": "quark:ancient_log",
        "output": "quark:ancient_planks"
    },
    {
        "input": "quark:ancient_wood",
        "output": "quark:ancient_planks"
    },
    {
        "input": "quark:azalea_log",
        "output": "quark:azalea_planks"
    },
    {
        "input": "quark:azalea_wood",
        "output": "quark:azalea_planks"
    },
    {
        "input": "quark:blossom_log",
        "output": "quark:blossom_planks"
    },
    {
        "input": "quark:blossom_wood",
        "output": "quark:blossom_planks"
    },
    {
        "input": "twilightforest:canopy_log",
        "output": "twilightforest:canopy_planks"
    },
    {
        "input": "twilightforest:canopy_wood",
        "output": "twilightforest:canopy_planks"
    },
    {
        "input": "twilightforest:dark_log",
        "output": "twilightforest:dark_planks"
    },
    {
        "input": "twilightforest:dark_wood",
        "output": "twilightforest:dark_planks"
    },
    {
        "input": "twilightforest:mangrove_log",
        "output": "twilightforest:mangrove_planks"
    },
    {
        "input": "twilightforest:mangrove_wood",
        "output": "twilightforest:mangrove_planks"
    },
    {
        "input": "twilightforest:mining_log",
        "output": "twilightforest:mining_planks"
    },
    {
        "input": "twilightforest:mining_wood",
        "output": "twilightforest:mining_planks"
    },
    {
        "input": "twilightforest:sorting_log",
        "output": "twilightforest:sorting_planks"
    },
    {
        "input": "twilightforest:sorting_wood",
        "output": "twilightforest:sorting_planks"
    },
    {
        "input": "twilightforest:time_log",
        "output": "twilightforest:time_planks"
    },
    {
        "input": "twilightforest:time_wood",
        "output": "twilightforest:time_planks"
    },
    {
        "input": "twilightforest:transformation_log",
        "output": "twilightforest:transformation_planks"
    },
    {
        "input": "twilightforest:transformation_wood",
        "output": "twilightforest:transformation_planks"
    },
    {
        "input": "twilightforest:twilight_oak_log",
        "output": "twilightforest:twilight_oak_planks"
    },
    {
        "input": "twilightforest:twilight_oak_wood",
        "output": "twilightforest:twilight_oak_planks"
    },
    {
        "input": "upgrade_aquatic:driftwood_log",
        "output": "upgrade_aquatic:driftwood_planks"
    },
    {
        "input": "upgrade_aquatic:river_log",
        "output": "upgrade_aquatic:river_planks"
    },
    {
        "input": "upgrade_aquatic:river_wood",
        "output": "upgrade_aquatic:river_planks"
    },
    {
        "input": "witchery:alder_log",
        "output": "witchery:alder_planks"
    },
    {
        "input": "witchery:alder_wood",
        "output": "witchery:alder_planks"
    },
    {
        "input": "witchery:hawthorn_log",
        "output": "witchery:hawthorn_planks"
    },
    {
        "input": "witchery:hawthorn_wood",
        "output": "witchery:hawthorn_planks"
    },
    {
        "input": "witchery:rowan_log",
        "output": "witchery:rowan_planks"
    },
    {
        "input": "witchery:rowan_wood",
        "output": "witchery:rowan_planks"
    }
];
    wood.forEach(entry => {
        event.shapeless('2x ' + entry.output, [entry.input])
            .id('kubejs:tk3/bootstrap/planks/' + entry.input.replace(':', '/'));
    });
});
