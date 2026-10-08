// priority: 0
// TK3 compatibility/integration recipes for twilightforest. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / twilightforest [------------------------<-//

    // Stripped Canopy Log / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_canopy_log"
        ],
        [
            "twilightforest:canopy_log"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_canopy_log");

    // Canopy Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:canopy_planks"
        ],
        [
            "twilightforest:stripped_canopy_log"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_canopy_log");

    // Stripped Canopy Wood / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_canopy_wood"
        ],
        [
            "twilightforest:canopy_wood"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_canopy_wood");

    // Canopy Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:canopy_planks"
        ],
        [
            "twilightforest:stripped_canopy_wood"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_canopy_wood");

    // Stripped Dark Log / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_dark_log"
        ],
        [
            "twilightforest:dark_log"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_dark_log");

    // Dark Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:dark_planks"
        ],
        [
            "twilightforest:stripped_dark_log"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_dark_log");

    // Stripped Dark Wood / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_dark_wood"
        ],
        [
            "twilightforest:dark_wood"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_dark_wood");

    // Dark Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:dark_planks"
        ],
        [
            "twilightforest:stripped_dark_wood"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_dark_wood");

    // Stripped Mangrove Log / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_mangrove_log"
        ],
        [
            "twilightforest:mangrove_log"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_mangrove_log");

    // Mangrove Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:mangrove_planks"
        ],
        [
            "twilightforest:stripped_mangrove_log"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_mangrove_log");

    // Stripped Mangrove Wood / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_mangrove_wood"
        ],
        [
            "twilightforest:mangrove_wood"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_mangrove_wood");

    // Mangrove Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:mangrove_planks"
        ],
        [
            "twilightforest:stripped_mangrove_wood"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_mangrove_wood");

    // Stripped Mining Log / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_mining_log"
        ],
        [
            "twilightforest:mining_log"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_mining_log");

    // Mining Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:mining_planks"
        ],
        [
            "twilightforest:stripped_mining_log"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_mining_log");

    // Stripped Mining Wood / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_mining_wood"
        ],
        [
            "twilightforest:mining_wood"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_mining_wood");

    // Mining Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:mining_planks"
        ],
        [
            "twilightforest:stripped_mining_wood"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_mining_wood");

    // Stripped Sorting Log / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_sorting_log"
        ],
        [
            "twilightforest:sorting_log"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_sorting_log");

    // Sorting Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:sorting_planks"
        ],
        [
            "twilightforest:stripped_sorting_log"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_sorting_log");

    // Stripped Sorting Wood / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_sorting_wood"
        ],
        [
            "twilightforest:sorting_wood"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_sorting_wood");

    // Sorting Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:sorting_planks"
        ],
        [
            "twilightforest:stripped_sorting_wood"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_sorting_wood");

    // Stripped Time Log / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_time_log"
        ],
        [
            "twilightforest:time_log"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_time_log");

    // Time Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:time_planks"
        ],
        [
            "twilightforest:stripped_time_log"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_time_log");

    // Stripped Time Wood / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_time_wood"
        ],
        [
            "twilightforest:time_wood"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_time_wood");

    // Time Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:time_planks"
        ],
        [
            "twilightforest:stripped_time_wood"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_time_wood");

    // Stripped Transformation Log / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_transformation_log"
        ],
        [
            "twilightforest:transformation_log"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_transformation_log");

    // Transformation Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:transformation_planks"
        ],
        [
            "twilightforest:stripped_transformation_log"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_transformation_log");

    // Stripped Transformation Wood / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_transformation_wood"
        ],
        [
            "twilightforest:transformation_wood"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_transformation_wood");

    // Transformation Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:transformation_planks"
        ],
        [
            "twilightforest:stripped_transformation_wood"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_transformation_wood");

    // Stripped Twilight Oak Log / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_twilight_oak_log"
        ],
        [
            "twilightforest:twilight_oak_log"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_twilight_oak_log");

    // Twilight Oak Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:twilight_oak_planks"
        ],
        [
            "twilightforest:stripped_twilight_oak_log"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_twilight_oak_log");

    // Stripped Twilight Oak Wood / Cutting
    event.recipes.create.cutting(
        [
            "twilightforest:stripped_twilight_oak_wood"
        ],
        [
            "twilightforest:twilight_oak_wood"
        ])
        .id("kubejs:tk3/compat/strip_twilightforest_twilight_oak_wood");

    // Twilight Oak Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x twilightforest:twilight_oak_planks"
        ],
        [
            "twilightforest:stripped_twilight_oak_wood"
        ])
        .id("kubejs:tk3/compat/saw_twilightforest_twilight_oak_wood");


    //->------------------------]  Twilight materials / cross-mod processing [------------------------<-//

    // Native smelting remains available. Create gives a modest bulk-processing bonus,
    // while Mekanism is the later industrial 2x route.
    event.recipes.create.crushing(
        ["twilightforest:ironwood_ingot", CreateItem.of("twilightforest:ironwood_ingot", 0.25)],
        ["twilightforest:raw_ironwood"])
        .id("kubejs:tk3/compat/twilight_raw_ironwood_crushing");

    event.custom({
        type: "mekanism:enriching",
        input: { count: 1, item: "twilightforest:raw_ironwood" },
        output: { count: 2, id: "twilightforest:ironwood_ingot" }
    }).id("kubejs:tk3/compat/twilight_raw_ironwood_enriching");

    // Knightmetal remains exploration-sourced; processing the cluster becomes more
    // efficient after the player invests in Create/Mekanism infrastructure.
    event.recipes.create.crushing(
        ["twilightforest:knightmetal_ingot", CreateItem.of("twilightforest:knightmetal_ingot", 0.25)],
        ["twilightforest:armor_shard_cluster"])
        .id("kubejs:tk3/compat/twilight_knightmetal_crushing");

    event.custom({
        type: "mekanism:enriching",
        input: { count: 1, item: "twilightforest:armor_shard_cluster" },
        output: { count: 2, id: "twilightforest:knightmetal_ingot" }
    }).id("kubejs:tk3/compat/twilight_knightmetal_enriching");

    // Fiery Tears can be automated through Create without changing the boss-gated
    // ingredient itself. The boss material remains the limiting resource.
    event.recipes.create.mixing(
        ["twilightforest:fiery_ingot"],
        ["minecraft:iron_ingot", "twilightforest:fiery_tears"])
        .superheated()
        .id("kubejs:tk3/compat/twilight_fiery_ingot_superheated");

});
