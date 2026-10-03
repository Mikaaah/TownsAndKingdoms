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

    // Rolling Mill / Shapeless
    event.shapeless(
        "createaddition:rolling_mill",
        [
            "kubejs:tk3_hydraulic_machine",
            "create:mechanical_press",
            "minecraft:copper_ingot"
        ])
        .id("kubejs:tk3/tier_2/rolling_mill");

    // Copper Backtank / Shapeless
    event.shapeless(
        "create:copper_backtank",
        [
            "kubejs:tk3_sealed_mechanism",
            "create:copper_casing",
            "minecraft:copper_block"
        ])
        .id("kubejs:tk3/tier_2/copper_backtank");

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
                    "kubejs:tk3_rubber"
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
        "16x create:fluid_pipe",
        "kubejs:tk3_hydraulic_machine")
        .id("kubejs:tk3/tier_2/fluid_pipe");

    // Mechanical Pump / Stonecutting
    event.stonecutting(
        "create:mechanical_pump",
        "kubejs:tk3_hydraulic_machine")
        .id("kubejs:tk3/tier_2/mechanical_pump");

    // Fluid Tank / Stonecutting
    event.stonecutting(
        "3x create:fluid_tank",
        "kubejs:tk3_hydraulic_machine")
        .id("kubejs:tk3/tier_2/fluid_tank");

    // Spout / Stonecutting
    event.stonecutting(
        "create:spout",
        "kubejs:tk3_hydraulic_machine")
        .id("kubejs:tk3/tier_2/spout");

    // Item Drain / Stonecutting
    event.stonecutting(
        "create:item_drain",
        "kubejs:tk3_hydraulic_machine")
        .id("kubejs:tk3/tier_2/item_drain");

    // Hose Pulley / Stonecutting
    event.stonecutting(
        "create:hose_pulley",
        "kubejs:tk3_hydraulic_machine")
        .id("kubejs:tk3/tier_2/hose_pulley");

    // Portable Fluid Interface / Stonecutting
    event.stonecutting(
        "create:portable_fluid_interface",
        "kubejs:tk3_hydraulic_machine")
        .id("kubejs:tk3/tier_2/portable_fluid_interface");

    // Steam Engine / Stonecutting
    event.stonecutting(
        "create:steam_engine",
        "kubejs:tk3_hydraulic_machine")
        .id("kubejs:tk3/tier_2/steam_engine");

    // Fluid Valve / Stonecutting
    event.stonecutting(
        "create:fluid_valve",
        "kubejs:tk3_hydraulic_machine")
        .id("kubejs:tk3/tier_2/fluid_valve");

    // Copper Valve Handle / Stonecutting
    event.stonecutting(
        "6x create:copper_valve_handle",
        "kubejs:tk3_hydraulic_machine")
        .id("kubejs:tk3/tier_2/copper_valve_handle");

    // Steam Whistle / Stonecutting
    event.stonecutting(
        "create:steam_whistle",
        "kubejs:tk3_hydraulic_machine")
        .id("kubejs:tk3/tier_2/steam_whistle");

});
