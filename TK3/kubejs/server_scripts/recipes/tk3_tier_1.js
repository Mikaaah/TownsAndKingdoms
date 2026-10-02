// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    [
        "architects_palette:algal_blend",
        "betterend:iron_hammer",
        "create:adjustable_chain_gearshift",
        "create:analog_lever",
        "create:andesite_alloy",
        "create:andesite_funnel",
        "create:andesite_tunnel",
        "create:basin",
        "create:belt_connector",
        "create:cart_assembler",
        "create:chute",
        "create:clutch",
        "create:cogwheel",
        "create:deployer",
        "create:depot",
        "create:encased_chain_drive",
        "create:encased_fan",
        "create:gantry_carriage",
        "create:gearbox",
        "create:gearshift",
        "create:iron_sheet",
        "create:large_cogwheel",
        "create:large_water_wheel",
        "create:linear_chassis",
        "create:mechanical_bearing",
        "create:mechanical_drill",
        "create:mechanical_harvester",
        "create:mechanical_mixer",
        "create:mechanical_piston",
        "create:mechanical_plough",
        "create:mechanical_press",
        "create:mechanical_saw",
        "create:portable_storage_interface",
        "create:propeller",
        "create:radial_chassis",
        "create:rope_pulley",
        "create:shaft",
        "create:speedometer",
        "create:vertical_gearbox",
        "create:water_wheel",
        "create:weighted_ejector",
        "create:windmill_bearing",
        "kubejs:tk3_incomplete_rotation_mechanism",
        "kubejs:tk3_kinetic_machine",
        "kubejs:tk3_rotation_mechanism",
        "minecraft:andesite",
        "minecraft:clay_ball",
        "minecraft:cobblestone",
        "minecraft:dried_kelp",
        "minecraft:gravel",
        "minecraft:kelp",
        "minecraft:sand",
        "minecraft:stick"
    ].forEach(id => {
            if (Item.of(id)
                    .isEmpty()) throw new Error('[TK3] Missing required item: ' + id);
        });

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

    //->------------------------]  Tier 1 / Mechanisms / Sequenced assembly [------------------------<-//

    // Kinetic Mechanism / Sequence
    // Final tool is durability-based. Do not keepHeldItem(): ordinary tools wear; unbreakable rewards do not.
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

    // Water Wheel / Stonecutting
    event.stonecutting(
        "3x create:water_wheel",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/water_wheel");

    // Large Water Wheel / Stonecutting
    event.stonecutting(
        "create:large_water_wheel",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/large_water_wheel");

    // Mechanical Press / Stonecutting
    event.stonecutting(
        "create:mechanical_press",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/mechanical_press");

    // Mechanical Mixer / Stonecutting
    event.stonecutting(
        "create:mechanical_mixer",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/mechanical_mixer");

    // Encased Fan / Stonecutting
    event.stonecutting(
        "create:encased_fan",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/encased_fan");

    // Mechanical Saw / Stonecutting
    event.stonecutting(
        "create:mechanical_saw",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/mechanical_saw");

    // Mechanical Drill / Stonecutting
    event.stonecutting(
        "create:mechanical_drill",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/mechanical_drill");

    // Mechanical Bearing / Stonecutting
    event.stonecutting(
        "create:mechanical_bearing",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/mechanical_bearing");

    // Mechanical Harvester / Stonecutting
    event.stonecutting(
        "create:mechanical_harvester",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/mechanical_harvester");

    // Deployer / Stonecutting
    event.stonecutting(
        "create:deployer",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/deployer");

    // Basin / Stonecutting
    event.stonecutting(
        "2x create:basin",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/basin");

    // Andesite Funnel / Stonecutting
    event.stonecutting(
        "4x create:andesite_funnel",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/andesite_funnel");

    // Portable Storage Interface / Stonecutting
    event.stonecutting(
        "create:portable_storage_interface",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/portable_storage_interface");

    // Gearbox / Stonecutting
    event.stonecutting(
        "create:gearbox",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/gearbox");

    // Vertical Gearbox / Stonecutting
    event.stonecutting(
        "create:vertical_gearbox",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/vertical_gearbox");

    // Clutch / Stonecutting
    event.stonecutting(
        "create:clutch",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/clutch");

    // Gearshift / Stonecutting
    event.stonecutting(
        "create:gearshift",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/gearshift");

    // Encased Chain Drive / Stonecutting
    event.stonecutting(
        "3x create:encased_chain_drive",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/encased_chain_drive");

    // Adjustable Chain Gearshift / Stonecutting
    event.stonecutting(
        "create:adjustable_chain_gearshift",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/adjustable_chain_gearshift");

    // Mechanical Plough / Stonecutting
    event.stonecutting(
        "create:mechanical_plough",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/mechanical_plough");

    // Rope Pulley / Stonecutting
    event.stonecutting(
        "create:rope_pulley",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/rope_pulley");

    // Mechanical Piston / Stonecutting
    event.stonecutting(
        "create:mechanical_piston",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/mechanical_piston");

    // Cart Assembler / Stonecutting
    event.stonecutting(
        "create:cart_assembler",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/cart_assembler");

    // Windmill Bearing / Stonecutting
    event.stonecutting(
        "create:windmill_bearing",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/windmill_bearing");

    // Gantry Carriage / Stonecutting
    event.stonecutting(
        "create:gantry_carriage",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/gantry_carriage");

    // Weighted Ejector / Stonecutting
    event.stonecutting(
        "create:weighted_ejector",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/weighted_ejector");

    // Linear Chassis / Stonecutting
    event.stonecutting(
        "4x create:linear_chassis",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/linear_chassis");

    // Radial Chassis / Stonecutting
    event.stonecutting(
        "4x create:radial_chassis",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/radial_chassis");

    // Andesite Tunnel / Stonecutting
    event.stonecutting(
        "4x create:andesite_tunnel",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/andesite_tunnel");

    // Depot / Stonecutting
    event.stonecutting(
        "2x create:depot",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/depot");

    // Chute / Stonecutting
    event.stonecutting(
        "6x create:chute",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/chute");

    // Speedometer / Stonecutting
    event.stonecutting(
        "create:speedometer",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/speedometer");

    // Analog Lever / Stonecutting
    event.stonecutting(
        "create:analog_lever",
        "kubejs:tk3_kinetic_machine")
        .id("kubejs:tk3/tier_1/analog_lever");

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
