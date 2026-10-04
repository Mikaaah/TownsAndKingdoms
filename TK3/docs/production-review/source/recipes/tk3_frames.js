// priority: 0
// Generated from docs/progression_manifest.json. See tools/rebuild_recipes.py.
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    //->------------------------]  Tier 1 / Machine frames [------------------------<-//

    // Rotation Machine / Manual Shapeless
    event.shapeless(
        "kubejs:tk3_rotation_machine",
        [
            "kubejs:tk3_makeshift_rotation_mechanism",
            "kubejs:tk3_makeshift_rotation_mechanism",
            "create:andesite_casing"
        ])
        .id("kubejs:tk3/frames/rotation_manual");

    // Rotation Machine / Deploying
    event.recipes.create.deploying(
        [
            "kubejs:tk3_rotation_machine"
        ],
        [
            "create:andesite_casing",
            "kubejs:tk3_rotation_mechanism"
        ])
        .id("kubejs:tk3/frames/rotation_automated");

    // Millstone / Shaped
    event.shaped(
        "create:millstone",
        [
            "CCC",
            "CFC",
            "CCC"
        ], {
            "C": "minecraft:cobblestone",
            "F": "kubejs:tk3_rotation_machine"
        })
        .id("kubejs:tk3/frames/create_millstone");

    //->------------------------]  Tier 2 / Machine frames [------------------------<-//

    // Hydraulic Machine / Deploying
    event.recipes.create.deploying(
        [
            "kubejs:tk3_hydraulic_machine"
        ],
        [
            "create:copper_casing",
            "kubejs:tk3_sealed_mechanism"
        ])
        .id("kubejs:tk3/frames/hydraulic_assembly");

    //->------------------------]  Tier 3 / Machine frames [------------------------<-//

    // Precision Machine / Deploying
    event.recipes.create.deploying(
        [
            "kubejs:tk3_precision_machine"
        ],
        [
            "create:brass_casing",
            "create:precision_mechanism"
        ])
        .id("kubejs:tk3/frames/precision_assembly");

    //->------------------------]  Tier 3 / Machine components [------------------------<-//

    // Crushing Wheel / Mechanical Crafting
    event.recipes.create.mechanical_crafting(
        "2x create:crushing_wheel",
        [
            " AAA ",
            "AAPAA",
            "APFPA",
            "AAPAA",
            " AAA "
        ], {
            "F": "kubejs:tk3_precision_machine",
            "A": "create:andesite_alloy",
            "P": "#minecraft:planks"
        })
        .id("kubejs:tk3/frames/create_crushing_wheel");

    //->------------------------]  Tier 4 / Machine frames [------------------------<-//

    // Arcane Machine / Deploying
    event.recipes.create.deploying(
        [
            "kubejs:tk3_arcane_machine"
        ],
        [
            "create_wizardry:arcane_casing",
            "kubejs:tk3_arcane_mechanism"
        ])
        .id("kubejs:tk3/frames/arcane_calibration");

    //->------------------------]  Tier 4 / Machine components [------------------------<-//

    // Arcane Casing / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:source_gem",
            "irons_spellbooks:arcane_essence",
            "minecraft:gold_ingot"
        ],
        "create:brass_casing",
        "create_wizardry:arcane_casing",
        500)
        .id("kubejs:tk3/frames/arcane_casing");

});
