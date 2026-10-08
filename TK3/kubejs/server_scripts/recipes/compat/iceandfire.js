// priority: 0
// TK3 compatibility/integration recipes for iceandfire. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / iceandfire [------------------------<-//

    // Dreadwood Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x iceandfire:dreadwood_planks"
        ],
        [
            "iceandfire:dreadwood_log"
        ])
        .id("kubejs:tk3/compat/saw_iceandfire_dreadwood_log");

    //->------------------------]  Tier 8 / Dragonforge construction [------------------------<-//

    // A containment mechanism gates each forge core. The repeated structural bricks
    // intentionally use ordinary materials so a Dragonforge does not cost a mechanism
    // for every wall block.
    event.recipes.create.deploying(
        ["iceandfire:dragonforge_fire_core_disabled"],
        ["kubejs:tk3_containment_mechanism", "iceandfire:dragonbone"])
        .id("kubejs:tk3/addons/iceandfire_dragonforge_fire_core_disabled");

    event.shaped(
        "4x iceandfire:dragonforge_fire_brick",
        ["BDB", "DFD", "BDB"],
        {
            B: "iceandfire:dragonbone",
            D: "minecraft:obsidian",
            F: "minecraft:blaze_powder"
        })
        .id("kubejs:tk3/addons/iceandfire_dragonforge_fire_brick");

    event.remove({ output: "iceandfire:dragonforge_fire_input" });
    event.recipes.create.mechanical_crafting(
        "iceandfire:dragonforge_fire_input",
        ["BGB", "GCG", "BGB"],
        {
            B: "iceandfire:dragonbone",
            G: "kubejs:tk3_blaze_gold_sheet",
            C: "kubejs:tk3_containment_mechanism"
        })
        .id("kubejs:tk3/addons/iceandfire_dragonforge_fire_input");

    event.recipes.create.deploying(
        ["iceandfire:dragonforge_ice_core_disabled"],
        ["kubejs:tk3_containment_mechanism", "iceandfire:dragonbone"])
        .id("kubejs:tk3/addons/iceandfire_dragonforge_ice_core_disabled");

    event.shaped(
        "4x iceandfire:dragonforge_ice_brick",
        ["BIB", "IDI", "BIB"],
        {
            B: "iceandfire:dragonbone",
            D: "minecraft:obsidian",
            I: "minecraft:packed_ice"
        })
        .id("kubejs:tk3/addons/iceandfire_dragonforge_ice_brick");

    event.recipes.create.mechanical_crafting(
        "iceandfire:dragonforge_ice_input",
        ["BIB", "ICI", "BIB"],
        {
            B: "iceandfire:dragonbone",
            I: "minecraft:packed_ice",
            C: "kubejs:tk3_containment_mechanism"
        })
        .id("kubejs:tk3/addons/iceandfire_dragonforge_ice_input");

    event.recipes.create.deploying(
        ["iceandfire:dragonforge_lightning_core_disabled"],
        ["kubejs:tk3_containment_mechanism", "iceandfire:dragonbone"])
        .id("kubejs:tk3/addons/iceandfire_dragonforge_lightning_core_disabled");

    event.shaped(
        "4x iceandfire:dragonforge_lightning_brick",
        ["BAB", "ADA", "BAB"],
        {
            B: "iceandfire:dragonbone",
            D: "minecraft:obsidian",
            A: "minecraft:amethyst_shard"
        })
        .id("kubejs:tk3/addons/iceandfire_dragonforge_lightning_brick");

    event.recipes.create.mechanical_crafting(
        "iceandfire:dragonforge_lightning_input",
        ["BSB", "ACA", "BSB"],
        {
            B: "iceandfire:dragonbone",
            S: "create:copper_sheet",
            A: "minecraft:amethyst_shard",
            C: "kubejs:tk3_containment_mechanism"
        })
        .id("kubejs:tk3/addons/iceandfire_dragonforge_lightning_input");

    //->------------------------]  Tier 8 / Dragonforge cross-mod processing [------------------------<-//

    // The Dragonforge stays the owner of dragon-breath forging. These are late-game
    // alternate production paths, not replacements for Ars or Iron's early progression.
    event.custom({
        type: "iceandfire:dragonforge",
        dragonType: "fire",
        cookTime: 400,
        input: { item: "ars_nouveau:source_gem" },
        blood: { item: "iceandfire:fire_dragon_blood" },
        result: { id: "ars_nouveau:fire_essence", count: 2 }
    }).id("kubejs:tk3/compat/dragonforge_fire_essence");

    event.custom({
        type: "iceandfire:dragonforge",
        dragonType: "ice",
        cookTime: 400,
        input: { item: "ars_nouveau:source_gem" },
        blood: { item: "iceandfire:ice_dragon_blood" },
        result: { id: "ars_nouveau:water_essence", count: 2 }
    }).id("kubejs:tk3/compat/dragonforge_water_essence");

    event.custom({
        type: "iceandfire:dragonforge",
        dragonType: "lightning",
        cookTime: 400,
        input: { item: "ars_nouveau:source_gem" },
        blood: { item: "iceandfire:lightning_dragon_blood" },
        result: { id: "ars_nouveau:air_essence", count: 2 }
    }).id("kubejs:tk3/compat/dragonforge_air_essence");

    // The same forge provides late renewable routes into Iron's elemental material set.
    event.custom({
        type: "iceandfire:dragonforge",
        dragonType: "fire",
        cookTime: 700,
        input: { item: "irons_spellbooks:arcane_ingot" },
        blood: { item: "iceandfire:fire_dragon_blood" },
        result: { id: "irons_spellbooks:pyrium_ingot" }
    }).id("kubejs:tk3/compat/dragonforge_pyrium_ingot");

    event.custom({
        type: "iceandfire:dragonforge",
        dragonType: "ice",
        cookTime: 700,
        input: { item: "irons_spellbooks:arcane_ingot" },
        blood: { item: "iceandfire:ice_dragon_blood" },
        result: { id: "irons_spellbooks:permafrost_shard", count: 2 }
    }).id("kubejs:tk3/compat/dragonforge_permafrost_shards");

    event.custom({
        type: "iceandfire:dragonforge",
        dragonType: "lightning",
        cookTime: 700,
        input: { item: "irons_spellbooks:arcane_ingot" },
        blood: { item: "iceandfire:lightning_dragon_blood" },
        result: { id: "irons_spellbooks:energized_core" }
    }).id("kubejs:tk3/compat/dragonforge_energized_core");

    //->------------------------]  Tier 5+ / Industrial material processing [------------------------<-//

    // Ice & Fire silver participates in Mekanism's ore-refining identity instead of
    // living in a completely isolated smelting path.
    event.custom({
        type: "mekanism:enriching",
        input: { count: 1, item: "iceandfire:raw_silver" },
        output: { count: 2, id: "iceandfire:silver_ingot" }
    }).id("kubejs:tk3/compat/iceandfire_silver_enriching");

    // Crushing Wheels sit between vanilla smelting and Mekanism enrichment: modest
    // bonus yield, easier automation, but not the best possible industrial efficiency.
    event.recipes.create.crushing(
        ["iceandfire:silver_ingot", CreateItem.of("iceandfire:silver_ingot", 0.25)],
        ["iceandfire:raw_silver"])
        .id("kubejs:tk3/compat/iceandfire_silver_crushing");

    // A late Fire Dragonforge can refine Twilight Fiery Blood much more efficiently.
    // The boss material is still required, so this does not bypass exploration.
    event.custom({
        type: "iceandfire:dragonforge",
        dragonType: "fire",
        cookTime: 500,
        input: { item: "minecraft:iron_ingot" },
        blood: { item: "twilightforest:fiery_blood" },
        result: { id: "twilightforest:fiery_ingot", count: 2 }
    }).id("kubejs:tk3/compat/dragonforge_twilight_fiery_ingot");

    // Simple recycling is useful, but does not gate any vanilla/basic recipe.
    event.recipes.create.milling(
        ["4x minecraft:bone_meal"],
        ["iceandfire:dragonbone"])
        .id("kubejs:tk3/compat/iceandfire_dragonbone_recycling");

    // Crushing Wheels are the higher-throughput Create recycling route. The existing
    // Milling recipe stays available; this simply rewards the larger machine investment.
    event.recipes.create.crushing(
        ["6x minecraft:bone_meal"],
        ["iceandfire:dragonbone"])
        .id("kubejs:tk3/compat/iceandfire_dragonbone_crushing");
});
