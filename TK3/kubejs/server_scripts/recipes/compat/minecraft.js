// priority: 0
// TK3 compatibility/integration recipes for minecraft. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / minecraft [------------------------<-//

    // Stripped Acacia Log / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_acacia_log"
        ],
        [
            "minecraft:acacia_log"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_acacia_log");

    // Acacia Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:acacia_planks"
        ],
        [
            "minecraft:stripped_acacia_log"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_acacia_log");

    // Stripped Acacia Wood / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_acacia_wood"
        ],
        [
            "minecraft:acacia_wood"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_acacia_wood");

    // Acacia Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:acacia_planks"
        ],
        [
            "minecraft:stripped_acacia_wood"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_acacia_wood");

    // Stripped Birch Log / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_birch_log"
        ],
        [
            "minecraft:birch_log"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_birch_log");

    // Birch Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:birch_planks"
        ],
        [
            "minecraft:stripped_birch_log"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_birch_log");

    // Stripped Birch Wood / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_birch_wood"
        ],
        [
            "minecraft:birch_wood"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_birch_wood");

    // Birch Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:birch_planks"
        ],
        [
            "minecraft:stripped_birch_wood"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_birch_wood");

    // Stripped Cherry Log / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_cherry_log"
        ],
        [
            "minecraft:cherry_log"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_cherry_log");

    // Cherry Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:cherry_planks"
        ],
        [
            "minecraft:stripped_cherry_log"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_cherry_log");

    // Stripped Cherry Wood / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_cherry_wood"
        ],
        [
            "minecraft:cherry_wood"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_cherry_wood");

    // Cherry Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:cherry_planks"
        ],
        [
            "minecraft:stripped_cherry_wood"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_cherry_wood");

    // Stripped Crimson Hyphae / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_crimson_hyphae"
        ],
        [
            "minecraft:crimson_hyphae"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_crimson_hyphae");

    // Crimson Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:crimson_planks"
        ],
        [
            "minecraft:stripped_crimson_hyphae"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_crimson_hyphae");

    // Stripped Crimson Stem / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_crimson_stem"
        ],
        [
            "minecraft:crimson_stem"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_crimson_stem");

    // Crimson Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:crimson_planks"
        ],
        [
            "minecraft:stripped_crimson_stem"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_crimson_stem");

    // Stripped Dark Oak Log / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_dark_oak_log"
        ],
        [
            "minecraft:dark_oak_log"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_dark_oak_log");

    // Dark Oak Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:dark_oak_planks"
        ],
        [
            "minecraft:stripped_dark_oak_log"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_dark_oak_log");

    // Stripped Dark Oak Wood / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_dark_oak_wood"
        ],
        [
            "minecraft:dark_oak_wood"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_dark_oak_wood");

    // Dark Oak Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:dark_oak_planks"
        ],
        [
            "minecraft:stripped_dark_oak_wood"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_dark_oak_wood");

    // Stripped Jungle Log / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_jungle_log"
        ],
        [
            "minecraft:jungle_log"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_jungle_log");

    // Jungle Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:jungle_planks"
        ],
        [
            "minecraft:stripped_jungle_log"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_jungle_log");

    // Stripped Jungle Wood / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_jungle_wood"
        ],
        [
            "minecraft:jungle_wood"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_jungle_wood");

    // Jungle Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:jungle_planks"
        ],
        [
            "minecraft:stripped_jungle_wood"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_jungle_wood");

    // Stripped Mangrove Log / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_mangrove_log"
        ],
        [
            "minecraft:mangrove_log"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_mangrove_log");

    // Mangrove Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:mangrove_planks"
        ],
        [
            "minecraft:stripped_mangrove_log"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_mangrove_log");

    // Stripped Mangrove Wood / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_mangrove_wood"
        ],
        [
            "minecraft:mangrove_wood"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_mangrove_wood");

    // Mangrove Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:mangrove_planks"
        ],
        [
            "minecraft:stripped_mangrove_wood"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_mangrove_wood");

    // Stripped Oak Log / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_oak_log"
        ],
        [
            "minecraft:oak_log"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_oak_log");

    // Oak Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:oak_planks"
        ],
        [
            "minecraft:stripped_oak_log"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_oak_log");

    // Stripped Oak Wood / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_oak_wood"
        ],
        [
            "minecraft:oak_wood"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_oak_wood");

    // Oak Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:oak_planks"
        ],
        [
            "minecraft:stripped_oak_wood"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_oak_wood");

    // Stripped Spruce Log / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_spruce_log"
        ],
        [
            "minecraft:spruce_log"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_spruce_log");

    // Spruce Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:spruce_planks"
        ],
        [
            "minecraft:stripped_spruce_log"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_spruce_log");

    // Stripped Spruce Wood / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_spruce_wood"
        ],
        [
            "minecraft:spruce_wood"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_spruce_wood");

    // Spruce Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:spruce_planks"
        ],
        [
            "minecraft:stripped_spruce_wood"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_spruce_wood");

    // Stripped Warped Hyphae / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_warped_hyphae"
        ],
        [
            "minecraft:warped_hyphae"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_warped_hyphae");

    // Warped Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:warped_planks"
        ],
        [
            "minecraft:stripped_warped_hyphae"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_warped_hyphae");

    // Stripped Warped Stem / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_warped_stem"
        ],
        [
            "minecraft:warped_stem"
        ])
        .id("kubejs:tk3/compat/strip_minecraft_warped_stem");

    // Warped Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x minecraft:warped_planks"
        ],
        [
            "minecraft:stripped_warped_stem"
        ])
        .id("kubejs:tk3/compat/saw_minecraft_warped_stem");

    // Stripped Bamboo Block / Cutting
    event.recipes.create.cutting(
        [
            "minecraft:stripped_bamboo_block"
        ],
        [
            "minecraft:bamboo_block"
        ])
        .id("kubejs:tk3/compat/strip_bamboo_block");

    // Bamboo Planks / Cutting
    event.recipes.create.cutting(
        [
            "3x minecraft:bamboo_planks"
        ],
        [
            "minecraft:stripped_bamboo_block"
        ])
        .id("kubejs:tk3/compat/saw_bamboo");

    //->------------------------]  Tier 1 / Vanilla compatibility / minecraft [------------------------<-//

    // Sand / Milling
    event.recipes.create.milling(
        [
            "minecraft:sand"
        ],
        [
            "minecraft:gravel"
        ])
        .id("kubejs:tk3/compat/gravel_to_sand");

    // Dirt / Compacting
    event.recipes.create.compacting(
        [
            "2x minecraft:dirt"
        ],
        [
            "minecraft:gravel",
            "minecraft:clay_ball",
            Fluid.of("minecraft:water",
                250)
        ])
        .id("kubejs:tk3/compat/renewable_dirt");

    // Mud / Mixing
    event.recipes.create.mixing(
        [
            "minecraft:mud"
        ],
        [
            "minecraft:dirt",
            Fluid.of("minecraft:water",
                250)
        ])
        .id("kubejs:tk3/compat/mud");


    // Soul Sand / Haunting
    event.recipes.create.haunting(
        [
            "minecraft:soul_sand"
        ],
        [
            "minecraft:sand"
        ])
        .id("kubejs:tk3/compat/soul_sand");

    // Calcite / Compacting
    event.recipes.create.compacting(
        [
            "minecraft:calcite"
        ],
        [
            "minecraft:bone_meal",
            "minecraft:clay_ball"
        ])
        .id("kubejs:tk3/compat/calcite");

    //->------------------------]  Tier 2 / Vanilla compatibility / minecraft [------------------------<-//

    // Exposed Copper / Splashing
    event.recipes.create.splashing(
        [
            "minecraft:exposed_copper"
        ],
        [
            "minecraft:copper_block"
        ])
        .id("kubejs:tk3/compat/age_copper_block");

    // Weathered Copper / Splashing
    event.recipes.create.splashing(
        [
            "minecraft:weathered_copper"
        ],
        [
            "minecraft:exposed_copper"
        ])
        .id("kubejs:tk3/compat/age_exposed_copper");

    // Oxidized Copper / Splashing
    event.recipes.create.splashing(
        [
            "minecraft:oxidized_copper"
        ],
        [
            "minecraft:weathered_copper"
        ])
        .id("kubejs:tk3/compat/age_weathered_copper");

    //->------------------------]  Upstream compat repair / Create Ars Nouveau Compat [------------------------<-//

    // The upstream 1.21.1 compat recipe still uses the pre-NeoForge `fluid_tag`
    // ingredient shape. Replace it with Create 6.0.10's verified NeoForge fluid ingredient.
    event.remove({ id: "create:mixing/wilden_wing" });
    event.custom({
        type: "create:mixing",
        heat_requirement: "heated",
        ingredients: [
            { item: "ars_nouveau:wilden_wing" },
            { type: "neoforge:single", amount: 100, fluid: "minecraft:water" }
        ],
        results: [
            { count: 2, id: "minecraft:leather" }
        ]
    }).id("create:mixing/wilden_wing");
});
