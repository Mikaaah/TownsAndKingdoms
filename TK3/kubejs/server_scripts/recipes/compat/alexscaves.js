// priority: 0
// TK3 compatibility/integration recipes for alexscaves. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / alexscaves [------------------------<-//

    // Stripped Pewen Log / Cutting
    event.recipes.create.cutting(
        [
            "alexscaves:stripped_pewen_log"
        ],
        [
            "alexscaves:pewen_log"
        ])
        .id("kubejs:tk3/compat/strip_alexscaves_pewen_log");

    // Pewen Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x alexscaves:pewen_planks"
        ],
        [
            "alexscaves:stripped_pewen_log"
        ])
        .id("kubejs:tk3/compat/saw_alexscaves_pewen_log");

    // Stripped Pewen Wood / Cutting
    event.recipes.create.cutting(
        [
            "alexscaves:stripped_pewen_wood"
        ],
        [
            "alexscaves:pewen_wood"
        ])
        .id("kubejs:tk3/compat/strip_alexscaves_pewen_wood");

    // Pewen Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x alexscaves:pewen_planks"
        ],
        [
            "alexscaves:stripped_pewen_wood"
        ])
        .id("kubejs:tk3/compat/saw_alexscaves_pewen_wood");

    // Stripped Thornwood Log / Cutting
    event.recipes.create.cutting(
        [
            "alexscaves:stripped_thornwood_log"
        ],
        [
            "alexscaves:thornwood_log"
        ])
        .id("kubejs:tk3/compat/strip_alexscaves_thornwood_log");

    // Thornwood Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x alexscaves:thornwood_planks"
        ],
        [
            "alexscaves:stripped_thornwood_log"
        ])
        .id("kubejs:tk3/compat/saw_alexscaves_thornwood_log");

    // Stripped Thornwood Wood / Cutting
    event.recipes.create.cutting(
        [
            "alexscaves:stripped_thornwood_wood"
        ],
        [
            "alexscaves:thornwood_wood"
        ])
        .id("kubejs:tk3/compat/strip_alexscaves_thornwood_wood");

    // Thornwood Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x alexscaves:thornwood_planks"
        ],
        [
            "alexscaves:stripped_thornwood_wood"
        ])
        .id("kubejs:tk3/compat/saw_alexscaves_thornwood_wood");

    //->------------------------]  Tier 7 / Exploration workshops [------------------------<-//


    // Drain / Deploying
    // A drain is fluid infrastructure, not a progression machine: use Create plumbing,
    // not a full Chemical mechanism.
    event.recipes.create.deploying(
        ["alexscaves:drain"],
        ["create:fluid_pipe", "create:copper_sheet"])
        .id("kubejs:tk3/addons/alexscaves_drain");

    // Conversion Crucible / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "irons_spellbooks:arcane_essence",
            "minecraft:amethyst_shard"
        ],
        "kubejs:tk3_chemical_mechanism",
        "alexscaves:conversion_crucible",
        2000)
        .id("kubejs:tk3/addons/alexscaves_conversion_crucible");


    //->------------------------]  Tier 7 / Alex's Caves industrial bridges [------------------------<-//

    // Magnet Cave metals can use the same industrial 2x refining language as other ores.
    event.custom({
        type: "mekanism:enriching",
        input: { count: 1, item: "alexscaves:raw_scarlet_neodymium" },
        output: { count: 2, id: "alexscaves:scarlet_neodymium_ingot" }
    }).id("kubejs:tk3/compat/alexscaves_scarlet_neodymium_enriching");

    event.custom({
        type: "mekanism:enriching",
        input: { count: 1, item: "alexscaves:raw_azure_neodymium" },
        output: { count: 2, id: "alexscaves:azure_neodymium_ingot" }
    }).id("kubejs:tk3/compat/alexscaves_azure_neodymium_enriching");

    // Small uranium fragments are concentrated in the Enrichment Chamber. This is a
    // conversion/cleanup route, not free ore generation.
    event.custom({
        type: "mekanism:enriching",
        input: { count: 4, item: "alexscaves:uranium_shard" },
        output: { count: 1, id: "alexscaves:uranium" }
    }).id("kubejs:tk3/compat/alexscaves_uranium_concentration");

    // Mekanism polymer chemistry + Toxic Cave feedstock, physically mixed by Create.
    event.recipes.create.mixing(
        ["2x alexscaves:polymer_plate"],
        [
            "alexscaves:toxic_paste",
            "mekanism:hdpe_sheet",
            "#c:dusts/sulfur"
        ])
        .heated()
        .id("kubejs:tk3/compat/alexscaves_polymer_plate_industrial");

    // The Quarry is a true large-machine project. A single Chemical mechanism gates the
    // machine while drills and structural sheets provide the bulk of the cost.
    event.remove({ output: "alexscaves:quarry" });
    event.recipes.create.mechanical_crafting(
        "alexscaves:quarry",
        [
            "SDSDS",
            "DCCCD",
            "SCMCS",
            "DCCCD",
            "SDSDS"
        ], {
        S: "create:sturdy_sheet",
        D: "create:mechanical_drill",
        C: "kubejs:tk3_chemical_mechanism",
        M: "create:mechanical_bearing"
    })
        .id("kubejs:tk3/addons/alexscaves_quarry");

    // Nuclear components lean on Mekanism nuclear materials without consuming a whole
    // TK3 mechanism for every repeated component.
    event.recipes.create.compacting(
        ["alexscaves:nuclear_furnace_component"],
        ["mekanism:alloy_atomic", "alexscaves:uranium", "create:sturdy_sheet"])
        .id("kubejs:tk3/addons/alexscaves_nuclear_furnace_component");

    event.recipes.create.deploying(
        ["alexscaves:nuclear_siren"],
        ["alexscaves:nuclear_furnace_component", "minecraft:redstone"])
        .id("kubejs:tk3/addons/alexscaves_nuclear_siren");

    //->------------------------]  Parallel processing choices [------------------------<-//

    // Mechanical breakdown is convenient bulk processing; Mekanism enrichment above is
    // still the best yield path for raw Neodymium. These do not replace native smelting.
    event.recipes.create.crushing(
        ["alexscaves:scarlet_neodymium_ingot", CreateItem.of("alexscaves:scarlet_neodymium_ingot", 0.25)],
        ["alexscaves:raw_scarlet_neodymium"])
        .id("kubejs:tk3/compat/alexscaves_scarlet_neodymium_crushing");

    event.recipes.create.crushing(
        ["alexscaves:azure_neodymium_ingot", CreateItem.of("alexscaves:azure_neodymium_ingot", 0.25)],
        ["alexscaves:raw_azure_neodymium"])
        .id("kubejs:tk3/compat/alexscaves_azure_neodymium_crushing");

    // Uranium can be broken back into fragments for recipes that prefer shards. The
    // Enrichment Chamber remains the efficient 4 -> 1 concentration route in the other direction.
    event.recipes.create.crushing(
        ["4x alexscaves:uranium_shard"],
        ["alexscaves:uranium"])
        .id("kubejs:tk3/compat/alexscaves_uranium_breakdown");
});
