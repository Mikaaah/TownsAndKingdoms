// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    [
        "ars_nouveau:source_gem",
        "create:andesite_alloy",
        "create:andesite_casing",
        "create:brass_casing",
        "create:copper_casing",
        "create:crushing_wheel",
        "create:millstone",
        "create:precision_mechanism",
        "create_wizardry:arcane_casing",
        "irons_spellbooks:arcane_essence",
        "kubejs:tk3_arcane_machine",
        "kubejs:tk3_arcane_mechanism",
        "kubejs:tk3_hydraulic_machine",
        "kubejs:tk3_kinetic_machine",
        "kubejs:tk3_precision_machine",
        "kubejs:tk3_rotation_mechanism",
        "kubejs:tk3_sealed_mechanism",
        "minecraft:gold_ingot"
    ].forEach(id => {
            if (Item.of(id)
                    .isEmpty()) throw new Error('[TK3] Missing required item: ' + id);
        });

    //->------------------------]  Tier 1 / Machine frames [------------------------<-//

    // Kinetic Machine / Shaped
    event.shaped(
        "kubejs:tk3_kinetic_machine",
        [
            "AAA",
            "ACA",
            "ASA"
        ], {
            "A": "create:andesite_alloy",
            "C": "create:andesite_casing",
            "S": "#minecraft:wooden_slabs"
        })
        .id("kubejs:tk3/frames/kinetic_manual");

    // Kinetic Machine / Deploying
    event.recipes.create.deploying(
        [
            "kubejs:tk3_kinetic_machine"
        ],
        [
            "create:andesite_casing",
            "kubejs:tk3_rotation_mechanism"
        ])
        .id("kubejs:tk3/frames/kinetic_automated");

    //->------------------------]  Tier 1 / Machine cutting [------------------------<-//

    // Millstone / Stonecutting
    event.stonecutting(
        "create:millstone",
        "kubejs:tk3_kinetic_machine")
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
