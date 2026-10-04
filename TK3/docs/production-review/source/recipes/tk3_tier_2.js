// priority: 0
// Generated from docs/progression_manifest.json. See tools/rebuild_recipes.py.
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    //->------------------------]  Tier 2 / Materials / Mixing [------------------------<-//

    // Slime Ball / Mixing
    event.recipes.create.mixing(
        [
            "2x minecraft:slime_ball"
        ],
        [
            "minecraft:kelp",
            "minecraft:wheat",
            Fluid.of("minecraft:water",
                250)
        ])
        .id("kubejs:tk3/tier_2/renewable_sealant");

    //->------------------------]  Tier 2 / Materials / Shapeless [------------------------<-//

    // Copper Backtank / Shapeless
    event.shapeless(
        "create:copper_backtank",
        [
            "kubejs:tk3_sealed_mechanism",
            "create:copper_casing",
            "minecraft:copper_block"
        ])
        .id("kubejs:tk3/tier_2/copper_backtank");

    //->------------------------]  Tier 2 / Tools & components [------------------------<-//

    // Mechanical Pump / Shaped
    event.shaped(
        "create:mechanical_pump",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "create:fluid_pipe",
            "M": "create:copper_sheet",
            "F": "kubejs:tk3_hydraulic_machine",
            "S": "create:cogwheel"
        })
        .id("kubejs:tk3/tier_2/mechanical_pump");

    // Fluid Tank / Shaped
    event.shaped(
        "create:fluid_tank",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:glass",
            "M": "create:copper_sheet",
            "F": "kubejs:tk3_hydraulic_machine",
            "S": "minecraft:copper_block"
        })
        .id("kubejs:tk3/tier_2/fluid_tank");

    // Spout / Shaped
    event.shaped(
        "create:spout",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:dried_kelp",
            "M": "create:copper_sheet",
            "F": "kubejs:tk3_hydraulic_machine",
            "S": "create:fluid_pipe"
        })
        .id("kubejs:tk3/tier_2/spout");

    // Item Drain / Shaped
    event.shaped(
        "create:item_drain",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:iron_bars",
            "M": "create:copper_sheet",
            "F": "kubejs:tk3_hydraulic_machine",
            "S": "create:fluid_pipe"
        })
        .id("kubejs:tk3/tier_2/item_drain");

    // Hose Pulley / Shaped
    event.shaped(
        "create:hose_pulley",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "create:belt_connector",
            "M": "create:copper_sheet",
            "F": "kubejs:tk3_hydraulic_machine",
            "S": "create:fluid_pipe"
        })
        .id("kubejs:tk3/tier_2/hose_pulley");

    // Portable Fluid Interface / Shaped
    event.shaped(
        "create:portable_fluid_interface",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "create:fluid_tank",
            "M": "create:copper_sheet",
            "F": "kubejs:tk3_hydraulic_machine",
            "S": "create:fluid_pipe"
        })
        .id("kubejs:tk3/tier_2/portable_fluid_interface");

    // Steam Engine / Shaped
    event.shaped(
        "create:steam_engine",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:gold_ingot",
            "M": "create:copper_sheet",
            "F": "kubejs:tk3_hydraulic_machine",
            "S": "minecraft:copper_block"
        })
        .id("kubejs:tk3/tier_2/steam_engine");

    // Rolling Mill / Shaped
    event.shaped(
        "createaddition:rolling_mill",
        [
            "ISI",
            "PFP",
            "ICI"
        ], {
            "I": "create:iron_sheet",
            "S": "create:shaft",
            "P": "create:mechanical_press",
            "F": "kubejs:tk3_hydraulic_machine",
            "C": "minecraft:copper_block"
        })
        .id("kubejs:tk3/tier_2/rolling_mill");

    // Fluid Valve / Shaped
    event.shaped(
        "create:fluid_valve",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "create:fluid_pipe",
            "M": "create:copper_sheet",
            "F": "kubejs:tk3_hydraulic_machine",
            "S": "create:copper_valve_handle"
        })
        .id("kubejs:tk3/tier_2/fluid_valve");

    // Steam Whistle / Shaped
    event.shaped(
        "create:steam_whistle",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:gold_ingot",
            "M": "create:copper_sheet",
            "F": "kubejs:tk3_hydraulic_machine",
            "S": "create:fluid_pipe"
        })
        .id("kubejs:tk3/tier_2/steam_whistle");

    //->------------------------]  Tier 2 / Mechanisms / Sequenced assembly [------------------------<-//

    // Sealed Mechanism / Sequence
    event.recipes.create.sequenced_assembly(
        [
            "kubejs:tk3_sealed_mechanism"
        ],
        "kubejs:tk3_rotation_mechanism",
        [
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sealed_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_sealed_mechanism",
                    "create:copper_sheet"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sealed_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_sealed_mechanism",
                    "create:copper_sheet"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sealed_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_sealed_mechanism",
                    "kubejs:tk3_rubber"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sealed_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_sealed_mechanism",
                    "kubejs:tk3_rubber"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sealed_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_sealed_mechanism",
                    "create:iron_sheet"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sealed_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_sealed_mechanism",
                    "farmersdelight:iron_knife"
                ])
        ])
        .transitionalItem("kubejs:tk3_incomplete_sealed_mechanism")
        .loops(1)
        .id("kubejs:tk3/tier_2/tk3_sealed_mechanism");

    //->------------------------]  Tier 2 / Machine cutting [------------------------<-//

    // Fluid Pipe / Stonecutting
    event.stonecutting(
        "8x create:fluid_pipe",
        "kubejs:tk3_hydraulic_machine")
        .id("kubejs:tk3/tier_2/fluid_pipe");

    // Copper Valve Handle / Stonecutting
    event.stonecutting(
        "2x create:copper_valve_handle",
        "kubejs:tk3_hydraulic_machine")
        .id("kubejs:tk3/tier_2/copper_valve_handle");

});
