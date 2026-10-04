// priority: 0
// Generated from docs/progression_manifest.json. See tools/rebuild_recipes.py.
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    //->------------------------]  Tier 2 / Fields & fluids / Seals [------------------------<-//

    // Rubber / Compacting
    event.recipes.create.compacting(
        [
            "2x kubejs:tk3_rubber"
        ],
        [
            "minecraft:slime_ball",
            "minecraft:dried_kelp",
            Fluid.of("minecraft:water",
                250)
        ])
        .id("kubejs:tk3/campaign/kubejs_tk3_rubber");

    //->------------------------]  Tier 4 / Mechanisms / Sequenced assembly [------------------------<-//

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
                    "createaddition:capacitor"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_network_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_network_mechanism",
                    "createaddition:capacitor"
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
                    "ae2:fluix_crystal"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_network_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_network_mechanism",
                    "mekanism:basic_control_circuit"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_network_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_network_mechanism",
                    "mekanism:ingot_steel"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_network_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_network_mechanism",
                    "betterend:iron_hammer"
                ])
        ])
        .transitionalItem("kubejs:tk3_incomplete_network_mechanism")
        .loops(1)
        .id("kubejs:tk3/campaign/network_mechanism");

    //->------------------------]  Tier 4 / Machine frames [------------------------<-//

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

    //->------------------------]  Tier 5 / Mechanisms / Sequenced assembly [------------------------<-//

    // Ender Mechanism / Sequence
    event.recipes.create.sequenced_assembly(
        [
            "kubejs:tk3_ender_mechanism"
        ],
        "kubejs:tk3_network_mechanism",
        [
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_ender_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_ender_mechanism",
                    "mekanism:advanced_control_circuit"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_ender_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_ender_mechanism",
                    "mekanism:advanced_control_circuit"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_ender_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_ender_mechanism",
                    "minecraft:chorus_fruit"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_ender_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_ender_mechanism",
                    "minecraft:chorus_fruit"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_ender_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_ender_mechanism",
                    "minecraft:end_stone"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_ender_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_ender_mechanism",
                    "minecraft:obsidian"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_ender_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_ender_mechanism",
                    "farmersdelight:diamond_knife"
                ])
        ])
        .transitionalItem("kubejs:tk3_incomplete_ender_mechanism")
        .loops(1)
        .id("kubejs:tk3/campaign/kubejs_tk3_ender_mechanism");

    //->------------------------]  Tier 5 / Machine frames [------------------------<-//

    // Ender Machine / Deploying
    event.recipes.create.deploying(
        [
            "kubejs:tk3_ender_machine"
        ],
        [
            "mekanism:steel_casing",
            "kubejs:tk3_ender_mechanism"
        ])
        .id("kubejs:tk3/campaign/kubejs_tk3_ender_machine");

    //->------------------------]  Tier 5 / End access / authored eye routes [------------------------<-//

    // Magical Eye / Deploying
    event.recipes.create.deploying(
        [
            "endrem:magical_eye"
        ],
        [
            "kubejs:tk3_network_mechanism",
            "ars_nouveau:source_gem"
        ])
        .id("kubejs:tk3/campaign/magical_eye");

    // Cryptic Eye / Deploying
    event.recipes.create.deploying(
        [
            "endrem:cryptic_eye"
        ],
        [
            "kubejs:tk3_network_mechanism",
            "minecraft:ender_pearl"
        ])
        .id("kubejs:tk3/campaign/cryptic_eye");

    // Nether Eye / Deploying
    event.recipes.create.deploying(
        [
            "endrem:nether_eye"
        ],
        [
            "kubejs:tk3_network_mechanism",
            "minecraft:blaze_rod"
        ])
        .id("kubejs:tk3/campaign/nether_eye");

    // Corrupted Eye / Deploying
    event.recipes.create.deploying(
        [
            "endrem:corrupted_eye"
        ],
        [
            "kubejs:tk3_network_mechanism",
            "minecraft:crying_obsidian"
        ])
        .id("kubejs:tk3/campaign/corrupted_eye");

    //->------------------------]  Tier 6 / Mechanisms / Sequenced assembly [------------------------<-//

    // Reinforced Mechanism / Sequence
    event.recipes.create.sequenced_assembly(
        [
            "kubejs:tk3_reinforced_mechanism"
        ],
        "kubejs:tk3_ender_mechanism",
        [
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism",
                    "kubejs:tk3_shadow_sheet"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism",
                    "kubejs:tk3_shadow_sheet"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism",
                    "mekanism:hdpe_sheet"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism",
                    "mekanism:hdpe_sheet"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism",
                    "mekanism:elite_control_circuit"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism",
                    "mekanism:ingot_steel"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_reinforced_mechanism",
                    "mekanismtools:steel_paxel"
                ])
        ])
        .transitionalItem("kubejs:tk3_incomplete_reinforced_mechanism")
        .loops(1)
        .id("kubejs:tk3/campaign/kubejs_tk3_reinforced_mechanism");

    //->------------------------]  Tier 6 / Machine frames [------------------------<-//

    // Chemical Machine / Deploying
    event.recipes.create.deploying(
        [
            "kubejs:tk3_chemical_machine"
        ],
        [
            "mekanism:steel_casing",
            "kubejs:tk3_reinforced_mechanism"
        ])
        .id("kubejs:tk3/campaign/kubejs_tk3_chemical_machine");

    //->------------------------]  Tier 6 / Chemical materials / Shadow steel [------------------------<-//

    // Shadow Steel / Mixing
    event.recipes.create.mixing(
        [
            "2x kubejs:tk3_shadow_steel"
        ],
        [
            "mekanism:ingot_steel",
            "mekanism:ingot_steel",
            "minecraft:obsidian",
            "minecraft:chorus_fruit"
        ])
        .heated()
        .id("kubejs:tk3/campaign/kubejs_tk3_shadow_steel");

    //->------------------------]  Tier 6 / Chemical materials / Sheets [------------------------<-//

    // Shadow Sheet / Pressing
    event.recipes.create.pressing(
        [
            "kubejs:tk3_shadow_sheet"
        ],
        [
            "kubejs:tk3_shadow_steel"
        ])
        .id("kubejs:tk3/campaign/kubejs_tk3_shadow_sheet");

    //->------------------------]  Tier 7 / Mechanisms / Sequenced assembly [------------------------<-//

    // Expedition Mechanism / Sequence
    event.recipes.create.sequenced_assembly(
        [
            "kubejs:tk3_expedition_mechanism"
        ],
        "kubejs:tk3_reinforced_mechanism",
        [
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_expedition_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_expedition_mechanism",
                    "kubejs:tk3_radiance_sheet"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_expedition_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_expedition_mechanism",
                    "kubejs:tk3_radiance_sheet"
                ]),
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
                    "ae2:engineering_processor"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_expedition_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_expedition_mechanism",
                    "mekanism:elite_control_circuit"
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

    //->------------------------]  Tier 7 / Chemical materials / Sheets [------------------------<-//

    // Radiance Sheet / Pressing
    event.recipes.create.pressing(
        [
            "kubejs:tk3_radiance_sheet"
        ],
        [
            "kubejs:tk3_refined_radiance"
        ])
        .id("kubejs:tk3/campaign/kubejs_tk3_radiance_sheet");

    //->------------------------]  Tier 7 / Chemical materials / injecting [------------------------<-//

    // Refined Radiance / Native
    event.custom({
            "type": "mekanism:injecting",
            "item_input": {
                "count": 1,
                "item": "kubejs:tk3_shadow_steel"
            },
            "chemical_input": {
                "chemical": "mekanism:hydrogen_chloride",
                "amount": 100
            },
            "output": {
                "id": "kubejs:tk3_refined_radiance",
                "count": 1
            },
            "per_tick_usage": false
        })
        .id("kubejs:tk3/campaign/kubejs_tk3_refined_radiance");

    //->------------------------]  Tier 7 / Reusable boss imprints [------------------------<-//

    // Radiance Sheet / Deploying
    event.recipes.create.deploying(
        [
            "2x kubejs:tk3_radiance_sheet"
        ],
        [
            "kubejs:tk3_refined_radiance",
            "kubejs:tk3_verdant_sigil"
        ])
        .keepHeldItem()
        .id("kubejs:tk3/campaign/kubejs_tk3_radiance_sheet_imprinted");

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
                    "kubejs:tk3_overcharge_sheet"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_containment_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_containment_mechanism",
                    "kubejs:tk3_overcharge_sheet"
                ]),
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
                    "mekanism:hdpe_sheet"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_containment_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_containment_mechanism",
                    "mekanism:ultimate_control_circuit"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_containment_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_containment_mechanism",
                    "mekanism:ingot_lead"
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

    //->------------------------]  Tier 8 / Chemical materials / Sheets [------------------------<-//

    // Overcharge Sheet / Pressing
    event.recipes.create.pressing(
        [
            "kubejs:tk3_overcharge_sheet"
        ],
        [
            "kubejs:tk3_overcharge_alloy"
        ])
        .id("kubejs:tk3/campaign/kubejs_tk3_overcharge_sheet");

    //->------------------------]  Tier 8 / Chemical materials / metallurgic_infusing [------------------------<-//

    // Overcharge Alloy / Native
    event.custom({
            "type": "mekanism:metallurgic_infusing",
            "item_input": {
                "count": 1,
                "item": "kubejs:tk3_refined_radiance"
            },
            "chemical_input": {
                "chemical": "mekanism:diamond",
                "amount": 80
            },
            "output": {
                "id": "kubejs:tk3_overcharge_alloy",
                "count": 1
            },
            "per_tick_usage": false
        })
        .id("kubejs:tk3/campaign/kubejs_tk3_overcharge_alloy");

    //->------------------------]  Tier 8 / Reusable boss imprints [------------------------<-//

    // Overcharge Sheet / Deploying
    event.recipes.create.deploying(
        [
            "2x kubejs:tk3_overcharge_sheet"
        ],
        [
            "kubejs:tk3_overcharge_alloy",
            "kubejs:tk3_storm_core"
        ])
        .keepHeldItem()
        .id("kubejs:tk3/campaign/kubejs_tk3_overcharge_sheet_imprinted");

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
                    "mekanism:pellet_polonium"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_singularity_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_singularity_mechanism",
                    "kubejs:tk3_void_attuned_singularity"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_singularity_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_singularity_mechanism",
                    "mekanism:ultimate_control_circuit"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_singularity_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_singularity_mechanism",
                    "mekanism:ultimate_control_circuit"
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

    //->------------------------]  Tier 9 / Chemical materials / nucleosynthesizing [------------------------<-//

    // Stargaze Singularity / Native
    event.custom({
            "type": "mekanism:nucleosynthesizing",
            "item_input": {
                "count": 1,
                "item": "ae2:singularity"
            },
            "chemical_input": {
                "chemical": "mekanism:antimatter",
                "amount": 10
            },
            "output": {
                "id": "kubejs:tk3_stargaze_singularity",
                "count": 1
            },
            "per_tick_usage": false,
            "duration": 400
        })
        .id("kubejs:tk3/campaign/kubejs_tk3_stargaze_singularity");

    //->------------------------]  Tier 9 / Reusable boss imprints [------------------------<-//

    // Void Attuned Singularity / Deploying
    event.recipes.create.deploying(
        [
            "kubejs:tk3_void_attuned_singularity"
        ],
        [
            "kubejs:tk3_stargaze_singularity",
            "kubejs:tk3_void_core"
        ])
        .keepHeldItem()
        .id("kubejs:tk3/campaign/kubejs_tk3_void_attuned_singularity");

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
                    "minecraft:dragon_breath"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sovereign_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_sovereign_mechanism",
                    "minecraft:netherite_ingot"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_sovereign_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_sovereign_mechanism",
                    "mekanism:ultimate_control_circuit"
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

    //->------------------------]  Tier 10 / Reusable boss imprints [------------------------<-//

    // Overcharge Alloy / Deploying
    event.recipes.create.deploying(
        [
            "2x kubejs:tk3_overcharge_alloy"
        ],
        [
            "kubejs:tk3_refined_radiance",
            "kubejs:tk3_ember_core"
        ])
        .keepHeldItem()
        .id("kubejs:tk3/campaign/kubejs_tk3_overcharge_alloy_imprinted");

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
                    "kubejs:tk3_dragon_core"
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
