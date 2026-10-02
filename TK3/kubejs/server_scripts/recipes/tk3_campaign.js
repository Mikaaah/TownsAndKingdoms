// priority: 0
// T&K3 chapters 1–10 / campaign
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    //->------------------------]  Tier 6 / Mechanisms / Sequenced assembly [------------------------<-//

    // Network Mechanism / Sequence
    event.recipes.create.sequenced_assembly(
        [
            "kubejs:tk3_network_mechanism"
        ],
        "create:precision_mechanism",
        [
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_network_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_network_mechanism",
                    "mekanism:advanced_control_circuit"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_network_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_network_mechanism",
                    "ae2:fluix_crystal"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_network_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_network_mechanism",
                    "betterend:diamond_hammer"
                ])
        ])
        .transitionalItem("kubejs:tk3_incomplete_network_mechanism")
        .loops(1)
        .id("kubejs:tk3/campaign/network_mechanism");

    //->------------------------]  Tier 6 / Machine frames [------------------------<-//

    // Network Chassis / Deploying
    event.recipes.create.deploying(
        [
            "kubejs:tk3_network_chassis"
        ],
        [
            "mekanism:steel_casing",
            "kubejs:tk3_network_mechanism"
        ])
        .id("kubejs:tk3/campaign/frame_6");

    //->------------------------]  Tier 6 / Reusable boss imprints [------------------------<-//

    // Magical Eye / Deploying
    event.recipes.create.deploying(
        [
            "endrem:magical_eye"
        ],
        [
            "kubejs:tk3_network_mechanism",
            "kubejs:tk3_verdant_sigil"
        ])
        .keepHeldItem()
        .id("kubejs:tk3/campaign/magical_eye");

    //->------------------------]  Tier 7 / Mechanisms / Sequenced assembly [------------------------<-//

    // Expedition Mechanism / Sequence
    event.recipes.create.sequenced_assembly(
        [
            "kubejs:tk3_expedition_mechanism"
        ],
        "kubejs:tk3_network_mechanism",
        [
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_expedition_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_expedition_mechanism",
                    "ars_nouveau:manipulation_essence"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_expedition_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_expedition_mechanism",
                    "mekanism:alloy_reinforced"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_expedition_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_expedition_mechanism",
                    "farmersdelight:diamond_knife"
                ])
        ])
        .transitionalItem("kubejs:tk3_incomplete_expedition_mechanism")
        .loops(1)
        .id("kubejs:tk3/campaign/expedition_mechanism");

    //->------------------------]  Tier 7 / Machine frames [------------------------<-//

    // Expedition Frame / Deploying
    event.recipes.create.deploying(
        [
            "kubejs:tk3_expedition_frame"
        ],
        [
            "create_wizardry:arcane_casing",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/campaign/frame_7");

    //->------------------------]  Tier 7 / Reusable boss imprints [------------------------<-//

    // Cryptic Eye / Deploying
    event.recipes.create.deploying(
        [
            "endrem:cryptic_eye"
        ],
        [
            "kubejs:tk3_expedition_mechanism",
            "kubejs:tk3_storm_core"
        ])
        .keepHeldItem()
        .id("kubejs:tk3/campaign/cryptic_eye");

    //->------------------------]  Tier 8 / Mechanisms / Sequenced assembly [------------------------<-//

    // Containment Mechanism / Sequence
    event.recipes.create.sequenced_assembly(
        [
            "kubejs:tk3_containment_mechanism"
        ],
        "kubejs:tk3_expedition_mechanism",
        [
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_containment_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_containment_mechanism",
                    "mekanism:hdpe_sheet"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_containment_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_containment_mechanism",
                    "mekanism:alloy_atomic"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_containment_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_containment_mechanism",
                    "create:sand_paper"
                ])
        ])
        .transitionalItem("kubejs:tk3_incomplete_containment_mechanism")
        .loops(1)
        .id("kubejs:tk3/campaign/containment_mechanism");

    //->------------------------]  Tier 8 / Machine frames [------------------------<-//

    // Containment Frame / Deploying
    event.recipes.create.deploying(
        [
            "kubejs:tk3_containment_frame"
        ],
        [
            "mekanism:steel_casing",
            "kubejs:tk3_containment_mechanism"
        ])
        .id("kubejs:tk3/campaign/frame_8");

    //->------------------------]  Tier 8 / Reusable boss imprints [------------------------<-//

    // Nether Eye / Deploying
    event.recipes.create.deploying(
        [
            "endrem:nether_eye"
        ],
        [
            "kubejs:tk3_containment_mechanism",
            "kubejs:tk3_ember_core"
        ])
        .keepHeldItem()
        .id("kubejs:tk3/campaign/nether_eye");

    //->------------------------]  Tier 9 / Mechanisms / Sequenced assembly [------------------------<-//

    // Singularity Mechanism / Sequence
    event.recipes.create.sequenced_assembly(
        [
            "kubejs:tk3_singularity_mechanism"
        ],
        "kubejs:tk3_containment_mechanism",
        [
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_singularity_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_singularity_mechanism",
                    "mekanism:pellet_polonium"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_singularity_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_singularity_mechanism",
                    "ae2:singularity"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_singularity_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_singularity_mechanism",
                    "ars_nouveau:enchanters_sword"
                ])
        ])
        .transitionalItem("kubejs:tk3_incomplete_singularity_mechanism")
        .loops(1)
        .id("kubejs:tk3/campaign/singularity_mechanism");

    //->------------------------]  Tier 9 / Machine frames [------------------------<-//

    // Singularity Frame / Deploying
    event.recipes.create.deploying(
        [
            "kubejs:tk3_singularity_frame"
        ],
        [
            "ae2:fluix_block",
            "kubejs:tk3_singularity_mechanism"
        ])
        .id("kubejs:tk3/campaign/frame_9");

    //->------------------------]  Tier 9 / Reusable boss imprints [------------------------<-//

    // Corrupted Eye / Deploying
    event.recipes.create.deploying(
        [
            "endrem:corrupted_eye"
        ],
        [
            "kubejs:tk3_singularity_mechanism",
            "kubejs:tk3_void_core"
        ])
        .keepHeldItem()
        .id("kubejs:tk3/campaign/corrupted_eye");

    //->------------------------]  Tier 10 / Mechanisms / Sequenced assembly [------------------------<-//

    // Sovereign Mechanism / Sequence
    event.recipes.create.sequenced_assembly(
        [
            "kubejs:tk3_sovereign_mechanism"
        ],
        "kubejs:tk3_singularity_mechanism",
        [
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sovereign_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_sovereign_mechanism",
                    "mekanism:pellet_antimatter"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sovereign_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_sovereign_mechanism",
                    "minecraft:dragon_breath"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sovereign_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_sovereign_mechanism",
                    "betterend:diamond_hammer"
                ])
        ])
        .transitionalItem("kubejs:tk3_incomplete_sovereign_mechanism")
        .loops(1)
        .id("kubejs:tk3/campaign/sovereign_mechanism");

    //->------------------------]  Tier 10 / Machine frames [------------------------<-//

    // Sovereign Core / Deploying
    event.recipes.create.deploying(
        [
            "kubejs:tk3_sovereign_core"
        ],
        [
            "mekanism:sps_casing",
            "kubejs:tk3_sovereign_mechanism"
        ])
        .id("kubejs:tk3/campaign/frame_10");

    //->------------------------]  Tier 10 / The Sovereign project [------------------------<-//

    // Sovereign Keystone / Sequence
    event.recipes.create.sequenced_assembly(
        [
            "kubejs:tk3_sovereign_keystone"
        ],
        "kubejs:tk3_sovereign_core",
        [
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sovereign_keystone"
                ],
                [
                    "kubejs:tk3_incomplete_sovereign_keystone",
                    "kubejs:tk3_verdant_sigil"
                ])
                .keepHeldItem(),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sovereign_keystone"
                ],
                [
                    "kubejs:tk3_incomplete_sovereign_keystone",
                    "kubejs:tk3_storm_core"
                ])
                .keepHeldItem(),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sovereign_keystone"
                ],
                [
                    "kubejs:tk3_incomplete_sovereign_keystone",
                    "kubejs:tk3_ember_core"
                ])
                .keepHeldItem(),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sovereign_keystone"
                ],
                [
                    "kubejs:tk3_incomplete_sovereign_keystone",
                    "kubejs:tk3_void_core"
                ])
                .keepHeldItem(),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sovereign_keystone"
                ],
                [
                    "kubejs:tk3_incomplete_sovereign_keystone",
                    "ars_nouveau:enchanters_sword"
                ])
        ])
        .transitionalItem("kubejs:tk3_incomplete_sovereign_keystone")
        .loops(1)
        .id("kubejs:tk3/campaign/sovereign_keystone");

});
