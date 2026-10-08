// priority: 0
// TK3 compatibility/integration recipes for betterend. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / betterend [------------------------<-//

    // Dragon Tree Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betterend:dragon_tree_planks"
        ],
        [
            "betterend:dragon_tree_log"
        ])
        .id("kubejs:tk3/compat/saw_betterend_dragon_tree_log");

    // End Lotus Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betterend:end_lotus_planks"
        ],
        [
            "betterend:end_lotus_log"
        ])
        .id("kubejs:tk3/compat/saw_betterend_end_lotus_log");

    // End Lotus Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betterend:end_lotus_planks"
        ],
        [
            "betterend:end_lotus_stem"
        ])
        .id("kubejs:tk3/compat/saw_betterend_end_lotus_stem");

    // Helix Tree Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betterend:helix_tree_planks"
        ],
        [
            "betterend:helix_tree_log"
        ])
        .id("kubejs:tk3/compat/saw_betterend_helix_tree_log");

    // Jellyshroom Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betterend:jellyshroom_planks"
        ],
        [
            "betterend:jellyshroom_log"
        ])
        .id("kubejs:tk3/compat/saw_betterend_jellyshroom_log");

    // Lacugrove Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betterend:lacugrove_planks"
        ],
        [
            "betterend:lacugrove_log"
        ])
        .id("kubejs:tk3/compat/saw_betterend_lacugrove_log");

    // Lucernia Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betterend:lucernia_planks"
        ],
        [
            "betterend:lucernia_log"
        ])
        .id("kubejs:tk3/compat/saw_betterend_lucernia_log");

    // Mossy Glowshroom Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betterend:mossy_glowshroom_planks"
        ],
        [
            "betterend:mossy_glowshroom_log"
        ])
        .id("kubejs:tk3/compat/saw_betterend_mossy_glowshroom_log");

    // Pythadendron Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betterend:pythadendron_planks"
        ],
        [
            "betterend:pythadendron_log"
        ])
        .id("kubejs:tk3/compat/saw_betterend_pythadendron_log");

    // Tenanea Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betterend:tenanea_planks"
        ],
        [
            "betterend:tenanea_log"
        ])
        .id("kubejs:tk3/compat/saw_betterend_tenanea_log");

    // Umbrella Tree Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betterend:umbrella_tree_planks"
        ],
        [
            "betterend:umbrella_tree_log"
        ])
        .id("kubejs:tk3/compat/saw_betterend_umbrella_tree_log");

    //->------------------------]  Tier 5 / Assembly tools [------------------------<-//

    // Diamond Hammer / Shaped
    event.shaped(
        "betterend:diamond_hammer",
        [
            "DSD",
            " T ",
            " T "
        ], {
        "D": "minecraft:diamond",
        "S": "mekanism:ingot_steel",
        "T": "minecraft:stick"
    })
        .id("kubejs:tk3/addons/betterend_diamond_hammer");
});
