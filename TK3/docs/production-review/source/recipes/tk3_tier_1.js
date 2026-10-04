// priority: 0
// Maintained recipe source; docs/progression_manifest.json is a generated inspection catalogue.
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    //->------------------------]  Tier 1 / Materials / Mixing [------------------------<-//

    // Algal Blend / Mixing
    event.recipes.create.mixing(
        [
            "4x architects_palette:algal_blend"
        ],
        [
            "minecraft:kelp",
            "minecraft:clay_ball"
        ])
        .id("kubejs:tk3/tier_1/algal_blend_bulk");

    // Andesite Alloy / Mixing
    event.recipes.create.mixing(
        [
            "4x create:andesite_alloy"
        ],
        [
            "minecraft:andesite",
            "architects_palette:algal_blend"
        ])
        .id("kubejs:tk3/tier_1/andesite_alloy_bulk");

    //->------------------------]  Tier 1 / Materials / Shapeless [------------------------<-//

    // Algal Blend / Shapeless
    event.shapeless(
        "2x architects_palette:algal_blend",
        [
            "minecraft:kelp",
            "minecraft:clay_ball"
        ])
        .id("kubejs:tk3/tier_1/algal_blend");

    // Andesite Alloy / Shapeless
    event.shapeless(
        "2x create:andesite_alloy",
        [
            "minecraft:andesite",
            "architects_palette:algal_blend"
        ])
        .id("kubejs:tk3/tier_1/andesite_alloy");

    // Shaft / Shapeless
    event.shapeless(
        "8x create:shaft",
        [
            "create:andesite_alloy",
            "minecraft:stick"
        ])
        .id("kubejs:tk3/tier_1/shaft");

    // Cogwheel / Shapeless
    event.shapeless(
        "2x create:cogwheel",
        [
            "create:shaft",
            "#minecraft:planks"
        ])
        .id("kubejs:tk3/tier_1/cogwheel");

    // Large Cogwheel / Shapeless
    event.shapeless(
        "create:large_cogwheel",
        [
            "create:cogwheel",
            "create:cogwheel",
            "#minecraft:planks"
        ])
        .id("kubejs:tk3/tier_1/large_cogwheel");

    // Belt Connector / Shapeless
    event.shapeless(
        "3x create:belt_connector",
        [
            "minecraft:dried_kelp",
            "minecraft:dried_kelp",
            "minecraft:dried_kelp",
            "minecraft:dried_kelp",
            "minecraft:dried_kelp",
            "minecraft:dried_kelp"
        ])
        .id("kubejs:tk3/tier_1/belt_connector");

    //->------------------------]  Tier 1 / Tools & components [------------------------<-//

    // Water Wheel / Shaped
    event.shaped(
        "create:water_wheel",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "#minecraft:planks",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:large_cogwheel"
        })
        .id("kubejs:tk3/tier_1/water_wheel");

    // Large Water Wheel / Shaped
    event.shaped(
        "create:large_water_wheel",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "create:water_wheel",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "#minecraft:planks"
        })
        .id("kubejs:tk3/tier_1/large_water_wheel");

    // Mechanical Press / Shaped
    event.shaped(
        "create:mechanical_press",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:iron_block",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:shaft"
        })
        .id("kubejs:tk3/tier_1/mechanical_press");

    // Mechanical Mixer / Shaped
    event.shaped(
        "create:mechanical_mixer",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "create:whisk",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:cogwheel"
        })
        .id("kubejs:tk3/tier_1/mechanical_mixer");

    // Encased Fan / Shaped
    event.shaped(
        "create:encased_fan",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "create:propeller",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:shaft"
        })
        .id("kubejs:tk3/tier_1/encased_fan");

    // Mechanical Saw / Shaped
    event.shaped(
        "create:mechanical_saw",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:iron_sword",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:cogwheel"
        })
        .id("kubejs:tk3/tier_1/mechanical_saw");

    // Mechanical Drill / Shaped
    event.shaped(
        "create:mechanical_drill",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:iron_pickaxe",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:cogwheel"
        })
        .id("kubejs:tk3/tier_1/mechanical_drill");

    // Mechanical Bearing / Shaped
    event.shaped(
        "create:mechanical_bearing",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:stone",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:shaft"
        })
        .id("kubejs:tk3/tier_1/mechanical_bearing");

    // Mechanical Harvester / Shaped
    event.shaped(
        "create:mechanical_harvester",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:iron_hoe",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:shaft"
        })
        .id("kubejs:tk3/tier_1/mechanical_harvester");

    // Deployer / Shaped
    event.shaped(
        "create:deployer",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:iron_ingot",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:cogwheel"
        })
        .id("kubejs:tk3/tier_1/deployer");

    // Basin / Shaped
    event.shaped(
        "create:basin",
        [
            "I I",
            "IFI",
            " I "
        ], {
            "I": "minecraft:iron_ingot",
            "F": "kubejs:tk3_rotation_machine"
        })
        .id("kubejs:tk3/tier_1/basin");

    // Portable Storage Interface / Shaped
    event.shaped(
        "create:portable_storage_interface",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:hopper",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:shaft"
        })
        .id("kubejs:tk3/tier_1/portable_storage_interface");

    // Propeller / Shaped
    event.shaped(
        "create:propeller",
        [
            " S ",
            "SAS",
            " S "
        ], {
            "S": "create:iron_sheet",
            "A": "create:andesite_alloy"
        })
        .id("kubejs:tk3/tier_1/propeller");

    // Gearbox / Shaped
    event.shaped(
        "create:gearbox",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "create:cogwheel",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:large_cogwheel"
        })
        .id("kubejs:tk3/tier_1/gearbox");

    // Vertical Gearbox / Shaped
    event.shaped(
        "create:vertical_gearbox",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "create:cogwheel",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:large_cogwheel"
        })
        .id("kubejs:tk3/tier_1/vertical_gearbox");

    // Clutch / Shaped
    event.shaped(
        "create:clutch",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:redstone",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:cogwheel"
        })
        .id("kubejs:tk3/tier_1/clutch");

    // Gearshift / Shaped
    event.shaped(
        "create:gearshift",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:redstone_torch",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:cogwheel"
        })
        .id("kubejs:tk3/tier_1/gearshift");

    // Adjustable Chain Gearshift / Shaped
    event.shaped(
        "create:adjustable_chain_gearshift",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "create:encased_chain_drive",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "minecraft:redstone"
        })
        .id("kubejs:tk3/tier_1/adjustable_chain_gearshift");

    // Mechanical Plough / Shaped
    event.shaped(
        "create:mechanical_plough",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:iron_hoe",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:cogwheel"
        })
        .id("kubejs:tk3/tier_1/mechanical_plough");

    // Rope Pulley / Shaped
    event.shaped(
        "create:rope_pulley",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "#c:strings",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:belt_connector"
        })
        .id("kubejs:tk3/tier_1/rope_pulley");

    // Mechanical Piston / Shaped
    event.shaped(
        "create:mechanical_piston",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:piston",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:piston_extension_pole"
        })
        .id("kubejs:tk3/tier_1/mechanical_piston");

    // Cart Assembler / Shaped
    event.shaped(
        "create:cart_assembler",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:minecart",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "minecraft:redstone"
        })
        .id("kubejs:tk3/tier_1/cart_assembler");

    // Windmill Bearing / Shaped
    event.shaped(
        "create:windmill_bearing",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "create:white_sail",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:shaft"
        })
        .id("kubejs:tk3/tier_1/windmill_bearing");

    // Gantry Carriage / Shaped
    event.shaped(
        "create:gantry_carriage",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "create:cogwheel",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:shaft"
        })
        .id("kubejs:tk3/tier_1/gantry_carriage");

    // Weighted Ejector / Shaped
    event.shaped(
        "create:weighted_ejector",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:iron_block",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "minecraft:slime_ball"
        })
        .id("kubejs:tk3/tier_1/weighted_ejector");

    // Speedometer / Shaped
    event.shaped(
        "create:speedometer",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:compass",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "create:cogwheel"
        })
        .id("kubejs:tk3/tier_1/speedometer");

    // Analog Lever / Shaped
    event.shaped(
        "create:analog_lever",
        [
            " P ",
            "MFM",
            " S "
        ], {
            "P": "minecraft:lever",
            "M": "create:andesite_alloy",
            "F": "kubejs:tk3_rotation_machine",
            "S": "minecraft:redstone"
        })
        .id("kubejs:tk3/tier_1/analog_lever");

    //->------------------------]  Tier 1 / Mechanisms / Sequenced assembly [------------------------<-//

    // Rotation Mechanism / Sequence
    event.recipes.create.sequenced_assembly(
        [
            "kubejs:tk3_rotation_mechanism"
        ],
        "#minecraft:wooden_slabs",
        [
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_rotation_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_rotation_mechanism",
                    "create:andesite_alloy"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_rotation_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_rotation_mechanism",
                    "create:andesite_alloy"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_rotation_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_rotation_mechanism",
                    "betterend:iron_hammer"
                ])
        ])
        .transitionalItem("kubejs:tk3_incomplete_rotation_mechanism")
        .loops(1)
        .id("kubejs:tk3/tier_1/rotation_mechanism_automated");

    //->------------------------]  Tier 1 / Machine cutting [------------------------<-//

    // Andesite Funnel / Stonecutting
    event.stonecutting(
        "4x create:andesite_funnel",
        "kubejs:tk3_rotation_machine")
        .id("kubejs:tk3/tier_1/andesite_funnel");

    // Encased Chain Drive / Stonecutting
    event.stonecutting(
        "3x create:encased_chain_drive",
        "kubejs:tk3_rotation_machine")
        .id("kubejs:tk3/tier_1/encased_chain_drive");

    // Linear Chassis / Stonecutting
    event.stonecutting(
        "4x create:linear_chassis",
        "kubejs:tk3_rotation_machine")
        .id("kubejs:tk3/tier_1/linear_chassis");

    // Radial Chassis / Stonecutting
    event.stonecutting(
        "4x create:radial_chassis",
        "kubejs:tk3_rotation_machine")
        .id("kubejs:tk3/tier_1/radial_chassis");

    // Andesite Tunnel / Stonecutting
    event.stonecutting(
        "4x create:andesite_tunnel",
        "kubejs:tk3_rotation_machine")
        .id("kubejs:tk3/tier_1/andesite_tunnel");

    // Depot / Stonecutting
    event.stonecutting(
        "2x create:depot",
        "kubejs:tk3_rotation_machine")
        .id("kubejs:tk3/tier_1/depot");

    // Chute / Stonecutting
    event.stonecutting(
        "6x create:chute",
        "kubejs:tk3_rotation_machine")
        .id("kubejs:tk3/tier_1/chute");

    //->------------------------]  Tier 1 / Resource processing / Milling [------------------------<-//

    // Gravel / Milling
    event.recipes.create.milling(
        [
            "minecraft:gravel"
        ],
        [
            "minecraft:cobblestone"
        ])
        .id("kubejs:tk3/tier_1/cobble_to_gravel");

    //->------------------------]  Tier 1 / Resource processing / Splashing [------------------------<-//

    // Clay Ball / Splashing
    event.recipes.create.splashing(
        [
            "minecraft:clay_ball"
        ],
        [
            "minecraft:sand"
        ])
        .id("kubejs:tk3/tier_1/renewable_clay");

});
