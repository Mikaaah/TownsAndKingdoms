// priority: -10003
// T&K3 Tier 03 Precision — complete tier recipe/progression script.
// Consolidated from the former base + authoritative progression layers.

// ============================================================================
// BASE / GENERAL TIER RECIPES
// ============================================================================
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

    // Mechanical Arm / Shaped
    event.shaped(
        "create:mechanical_arm",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "create:brass_hand",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:cogwheel"
    })
        .id("kubejs:tk3/tier_3/mechanical_arm");

    // Rotation Speed Controller / Shaped
    event.shaped(
        "create:rotation_speed_controller",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "create:precision_mechanism",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:large_cogwheel"
    })
        .id("kubejs:tk3/tier_3/rotation_speed_controller");

    // Mechanical Crafter / Shaped
    event.shaped(
        "3x create:mechanical_crafter",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:crafting_table",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/mechanical_crafter");

    // Sequenced Gearshift / Shaped
    event.shaped(
        "create:sequenced_gearshift",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "create:gearshift",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/sequenced_gearshift");

    // Packager / Shaped
    event.shaped(
        "create:packager",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:chest",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:cardboard"
    })
        .id("kubejs:tk3/tier_3/packager");

    // Stock Link / Shaped
    event.shaped(
        "create:stock_link",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "create:redstone_link",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/stock_link");

    // Stock Ticker / Shaped
    event.shaped(
        "create:stock_ticker",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:book",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/stock_ticker");

    // Repackager / Shaped
    event.shaped(
        "create:repackager",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "create:packager",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:cardboard"
    })
        .id("kubejs:tk3/tier_3/repackager");

    // Package Frogport / Shaped
    event.shaped(
        "create:package_frogport",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:slime_ball",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:cardboard"
    })
        .id("kubejs:tk3/tier_3/package_frogport");

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

    // Content Observer / Shaped
    event.shaped(
        "create:content_observer",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:observer",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/content_observer");

    // Stockpile Switch / Shaped
    event.shaped(
        "create:stockpile_switch",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:comparator",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/stockpile_switch");

    // Smart Chute / Shaped
    event.shaped(
        "create:smart_chute",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "create:chute",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/smart_chute");

    // Smart Fluid Pipe / Shaped
    event.shaped(
        "create:smart_fluid_pipe",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "create:fluid_pipe",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/smart_fluid_pipe");

    // Display Link / Shaped
    event.shaped(
        "create:display_link",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:redstone",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/display_link");

    // Display Board / Shaped
    event.shaped(
        "2x create:display_board",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:glass",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/display_board");

    // Redstone Link / Shaped
    event.shaped(
        "2x create:redstone_link",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:redstone",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "minecraft:ender_pearl"
    })
        .id("kubejs:tk3/tier_3/redstone_link");

    // Elevator Pulley / Shaped
    event.shaped(
        "create:elevator_pulley",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "create:rope_pulley",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/elevator_pulley");

    // Contraption Controls / Shaped
    event.shaped(
        "create:contraption_controls",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:lever",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/contraption_controls");

    // Track Station / Shaped
    event.shaped(
        "create:track_station",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:compass",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/track_station");

    // Track Signal / Shaped
    event.shaped(
        "2x create:track_signal",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:redstone_torch",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/track_signal");

    // Track Observer / Shaped
    event.shaped(
        "2x create:track_observer",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:observer",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/track_observer");

    // Controls / Shaped
    event.shaped(
        "create:controls",
        [
            " P ",
            "MFM",
            " S "
        ], {
        "P": "minecraft:lever",
        "M": "create:brass_sheet",
        "F": "kubejs:tk3_precision_machine",
        "S": "create:electron_tube"
    })
        .id("kubejs:tk3/tier_3/controls");

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
                    "create:electron_tube"
                ]),
            event.recipes.create.deploying(
                [
                    "create:incomplete_precision_mechanism"
                ],
                [
                    "create:incomplete_precision_mechanism",
                    "create:polished_rose_quartz"
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
        "2x create:brass_funnel",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/brass_funnel");

    // Brass Tunnel / Stonecutting
    event.stonecutting(
        "2x create:brass_tunnel",
        "kubejs:tk3_precision_machine")
        .id("kubejs:tk3/tier_3/brass_tunnel");
});

// ============================================================================
// AUTHORITATIVE TIER PROGRESSION / OVERRIDES
// ============================================================================
ServerEvents.recipes(event => {
    //->------------------------]  Tier 3 / Precision Mechanism [------------------------<-//

    // Native Create item, T&K2 production identity: Sealed -> brass/electron/gold sequence.
    event.remove({ output: "create:precision_mechanism" });

    //->------------------------]  Renewable amethyst / Spectral Ruby / Entanglement [------------------------<-//

    // Create filling is the Spout recipe type. One shard seeds a water-grown bud chain.
    event.recipes.create.filling(
        "ae2:small_quartz_bud",
        ["ae2:certus_quartz_crystal", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/certus_small_bud");

    event.recipes.create.filling(
        "ae2:medium_quartz_bud",
        ["ae2:small_quartz_bud", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/certus_medium_bud");

    event.recipes.create.filling(
        "ae2:large_quartz_bud",
        ["ae2:medium_quartz_bud", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/certus_large_bud");

    event.recipes.create.filling(
        "ae2:quartz_cluster",
        ["ae2:large_quartz_bud", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/certus_cluster");

    event.recipes.create.milling(
        ["4x ae2:certus_quartz_crystal"],
        "ae2:quartz_cluster")
        .id("kubejs:tk3/growth/certus_cluster_harvest");

    event.recipes.create.filling(
        "minecraft:small_amethyst_bud",
        ["minecraft:amethyst_shard", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/amethyst_small_bud");

    event.recipes.create.filling(
        "minecraft:medium_amethyst_bud",
        ["minecraft:small_amethyst_bud", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/amethyst_medium_bud");

    event.recipes.create.filling(
        "minecraft:large_amethyst_bud",
        ["minecraft:medium_amethyst_bud", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/amethyst_large_bud");

    event.recipes.create.filling(
        "minecraft:amethyst_cluster",
        ["minecraft:large_amethyst_bud", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/amethyst_cluster");

    event.recipes.create.crushing(
        ["6x minecraft:amethyst_shard"],
        "minecraft:amethyst_cluster")
        .id("kubejs:tk3/growth/amethyst_cluster_harvest");

    event.recipes.create.mechanical_crafting(
        "2x kubejs:tk3_spectral_ruby",
        [
            " R ",
            "RAR",
            " R "
        ], {
        R: "create:rose_quartz",
        A: "minecraft:amethyst_cluster"
    })
        .id("kubejs:tk3/chromatic/spectral_ruby");

    event.recipes.create.crushing(
        ["ae2:singularity"],
        "kubejs:tk3_spectral_ruby")
        .id("kubejs:tk3/chromatic/spectral_ruby_to_singularity");

    // Renewable before the chromatic chain: Endermen -> Ender Pearls -> Ender Dust.
    event.recipes.create.milling(
        ["2x ae2:ender_dust"],
        "minecraft:ender_pearl")
        .id("kubejs:tk3/chromatic/renewable_ender_dust");

    // Controlled machine entanglement; no world explosion is required.
    event.recipes.create.mixing(
        ["2x ae2:quantum_entangled_singularity"],
        ["ae2:singularity", "ae2:ender_dust", "minecraft:tnt"])
        .heated()
        .id("kubejs:tk3/chromatic/quantum_entanglement");

    // Any one matching dye family can charge the entangled pair.
    [
        "white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray",
        "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"
    ].forEach(color => {
        event.recipes.create.mixing(
            ["kubejs:tk3_dye_singularity"],
            ["ae2:quantum_entangled_singularity", `8x minecraft:${color}_dye`])
            .id(`kubejs:tk3/chromatic/dye_singularity_${color}`);
    });

    // Five usable colors. Crushing is intentionally simple and readable:
    // Red / Orange / Green / Blue / Magenta. Gray is the spent endpoint.
    event.recipes.create.crushing(
        [
            CreateItem.of("ae2:red_paint_ball", 0.20),
            CreateItem.of("ae2:orange_paint_ball", 0.20),
            CreateItem.of("ae2:green_paint_ball", 0.20),
            CreateItem.of("ae2:blue_paint_ball", 0.20),
            CreateItem.of("ae2:magenta_paint_ball", 0.20)
        ],
        "kubejs:tk3_dye_singularity")
        .id("kubejs:tk3/chromatic/random_paintballs");

    // Dry-drain chain. No fluid or pigment is returned.
    event.recipes.create.milling(
        ["ae2:orange_paint_ball"],
        "ae2:red_paint_ball")
        .id("kubejs:tk3/chromatic/drain_red_to_orange");

    event.recipes.create.milling(
        ["ae2:green_paint_ball"],
        "ae2:orange_paint_ball")
        .id("kubejs:tk3/chromatic/drain_orange_to_green");

    event.recipes.create.milling(
        ["ae2:blue_paint_ball"],
        "ae2:green_paint_ball")
        .id("kubejs:tk3/chromatic/drain_green_to_blue");

    event.recipes.create.milling(
        ["ae2:magenta_paint_ball"],
        "ae2:blue_paint_ball")
        .id("kubejs:tk3/chromatic/drain_blue_to_magenta");

    event.recipes.create.milling(
        ["ae2:gray_paint_ball"],
        "ae2:magenta_paint_ball")
        .id("kubejs:tk3/chromatic/drain_magenta_to_gray");

    // Four fully-drained useful (magenta) paintballs condense into one Chromatic Compound.
    // Gray is deliberately not accepted by this chain and has no TK3 recovery route.
    event.recipes.create.mixing(
        ["kubejs:tk3_chromatic_compound"],
        ["4x ae2:magenta_paint_ball"])
        .id("kubejs:tk3/chromatic/chromatic_compound");
});
