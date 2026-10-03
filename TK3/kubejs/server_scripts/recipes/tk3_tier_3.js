// priority: 0
// Generated from docs/progression_manifest.json. See tools/rebuild_recipes.py.
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    //->------------------------]  Tier 3 / Materials / Mixing [------------------------<-//

    // Brass Ingot / Mixing
    event.recipes.create.mixing(
        [
            "2x create:brass_ingot"
        ],
        [
            "minecraft:copper_ingot",
            "create:zinc_ingot"
        ])
        .heated()
        .id("kubejs:tk3/tier_3/brass_ingot");

    //->------------------------]  Tier 3 / Materials / Shapeless [------------------------<-//

    // Grindstone Drain / Shapeless
    event.shapeless(
        "create_enchantment_industry:grindstone_drain",
        [
            "create:precision_mechanism",
            "minecraft:grindstone",
            "create:brass_casing"
        ])
        .id("kubejs:tk3/tier_3/grindstone_drain");

    // Printer / Shapeless
    event.shapeless(
        "create_enchantment_industry:printer",
        [
            "create:precision_mechanism",
            "minecraft:book",
            "create:mechanical_press"
        ])
        .id("kubejs:tk3/tier_3/printer");

    // Propeller Bearing / Shapeless
    event.shapeless(
        "aeronautics:propeller_bearing",
        [
            "create:precision_mechanism",
            "create:mechanical_bearing",
            "create:propeller"
        ])
        .id("kubejs:tk3/tier_3/propeller_bearing");

    //->------------------------]  Tier 3 / Tools & components [------------------------<-//

    // Capacitor / Shaped
    event.shaped(
        "createaddition:capacitor",
        [
            " C ",
            "IRI",
            " C "
        ], {
            "C": "create:copper_sheet",
            "R": "minecraft:redstone",
            "I": "create:iron_sheet"
        })
        .id("kubejs:tk3/tier_2/capacitor");

    //->------------------------]  Tier 3 / Mechanisms / Sequenced assembly [------------------------<-//

    // Precision Mechanism / Sequence
    event.recipes.create.sequenced_assembly(
        [
            "create:precision_mechanism"
        ],
        "kubejs:tk3_sealed_mechanism",
        [
            event.recipes.create.deploying(
                [
                    "create:incomplete_precision_mechanism"
                ],
                [
                    "create:incomplete_precision_mechanism",
                    "create:brass_sheet"
                ]),
            event.recipes.create.deploying(
                [
                    "create:incomplete_precision_mechanism"
                ],
                [
                    "create:incomplete_precision_mechanism",
                    "create:electron_tube"
                ]),
            event.recipes.create.deploying(
                [
                    "create:incomplete_precision_mechanism"
                ],
                [
                    "create:incomplete_precision_mechanism",
                    "create:sand_paper"
                ])
        ])
        .transitionalItem("create:incomplete_precision_mechanism")
        .loops(1)
        .id("kubejs:tk3/tier_3/precision_mechanism");

    //->------------------------]  Tier 3 / Machine cutting [------------------------<-//

    // Brass Funnel / Stonecutting
    event.stonecutting(
        "6x create:brass_funnel",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/brass_funnel");

    // Brass Tunnel / Stonecutting
    event.stonecutting(
        "6x create:brass_tunnel",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/brass_tunnel");

    // Mechanical Arm / Stonecutting
    event.stonecutting(
        "create:mechanical_arm",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/mechanical_arm");

    // Rotation Speed Controller / Stonecutting
    event.stonecutting(
        "create:rotation_speed_controller",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/rotation_speed_controller");

    // Mechanical Crafter / Stonecutting
    event.stonecutting(
        "3x create:mechanical_crafter",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/mechanical_crafter");

    // Sequenced Gearshift / Stonecutting
    event.stonecutting(
        "create:sequenced_gearshift",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/sequenced_gearshift");

    // Packager / Stonecutting
    event.stonecutting(
        "create:packager",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/packager");

    // Stock Link / Stonecutting
    event.stonecutting(
        "create:stock_link",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/stock_link");

    // Stock Ticker / Stonecutting
    event.stonecutting(
        "create:stock_ticker",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/stock_ticker");

    // Repackager / Stonecutting
    event.stonecutting(
        "create:repackager",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/repackager");

    // Package Frogport / Stonecutting
    event.stonecutting(
        "create:package_frogport",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/package_frogport");

    // Content Observer / Stonecutting
    event.stonecutting(
        "2x create:content_observer",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/content_observer");

    // Stockpile Switch / Stonecutting
    event.stonecutting(
        "2x create:stockpile_switch",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/stockpile_switch");

    // Smart Chute / Stonecutting
    event.stonecutting(
        "3x create:smart_chute",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/smart_chute");

    // Smart Fluid Pipe / Stonecutting
    event.stonecutting(
        "3x create:smart_fluid_pipe",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/smart_fluid_pipe");

    // Display Link / Stonecutting
    event.stonecutting(
        "2x create:display_link",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/display_link");

    // Display Board / Stonecutting
    event.stonecutting(
        "6x create:display_board",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/display_board");

    // Redstone Link / Stonecutting
    event.stonecutting(
        "4x create:redstone_link",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/redstone_link");

    // Elevator Pulley / Stonecutting
    event.stonecutting(
        "create:elevator_pulley",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/elevator_pulley");

    // Contraption Controls / Stonecutting
    event.stonecutting(
        "create:contraption_controls",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/contraption_controls");

    // Track Station / Stonecutting
    event.stonecutting(
        "create:track_station",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/track_station");

    // Track Signal / Stonecutting
    event.stonecutting(
        "2x create:track_signal",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/track_signal");

    // Track Observer / Stonecutting
    event.stonecutting(
        "2x create:track_observer",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/track_observer");

    // Controls / Stonecutting
    event.stonecutting(
        "create:controls",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/controls");

});
