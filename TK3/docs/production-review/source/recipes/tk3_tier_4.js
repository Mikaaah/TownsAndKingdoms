// priority: 0
// Maintained recipe source; docs/progression_manifest.json is a generated inspection catalogue.
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    //->------------------------]  Tier 4 / Materials / Apparatus [------------------------<-//

    // Relay / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:redstone",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_calculation_mechanism",
        "ars_nouveau:relay",
        1000)
        .id("kubejs:tk3/tier_4/relay");

    // Starbuncle Charm / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:gold_ingot",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_calculation_mechanism",
        "ars_nouveau:starbuncle_charm",
        1000)
        .id("kubejs:tk3/tier_4/starbuncle_charm");

    // Whirlisprig Charm / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:oak_sapling",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_calculation_mechanism",
        "ars_nouveau:whirlisprig_charm",
        1000)
        .id("kubejs:tk3/tier_4/whirlisprig_charm");

    // Wixie Charm / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:cauldron",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_calculation_mechanism",
        "ars_nouveau:wixie_charm",
        1000)
        .id("kubejs:tk3/tier_4/wixie_charm");

    // Alchemist Cauldron / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:cauldron",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_calculation_mechanism",
        "irons_spellbooks:alchemist_cauldron",
        1000)
        .id("kubejs:tk3/tier_4/alchemist_cauldron");

    // Arcane Anvil / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:anvil",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_calculation_mechanism",
        "irons_spellbooks:arcane_anvil",
        1000)
        .id("kubejs:tk3/tier_4/arcane_anvil");

    // Blaze Enchanter / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:enchanting_table",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_calculation_mechanism",
        "create_enchantment_industry:blaze_enchanter",
        1000)
        .id("kubejs:tk3/tier_4/blaze_enchanter");

    // Relay Splitter / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:relay",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_calculation_mechanism",
        "ars_nouveau:relay_splitter",
        1000)
        .id("kubejs:tk3/tier_4/relay_splitter");

    // Relay Deposit / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:chest",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_calculation_mechanism",
        "ars_nouveau:relay_deposit",
        1000)
        .id("kubejs:tk3/tier_4/relay_deposit");

    // Relay Collector / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:hopper",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_calculation_mechanism",
        "ars_nouveau:relay_collector",
        1000)
        .id("kubejs:tk3/tier_4/relay_collector");

    // Alchemical Sourcelink / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:brewing_stand",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_calculation_mechanism",
        "ars_nouveau:alchemical_sourcelink",
        1000)
        .id("kubejs:tk3/tier_4/alchemical_sourcelink");

    // Mycelial Sourcelink / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:brown_mushroom",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_calculation_mechanism",
        "ars_nouveau:mycelial_sourcelink",
        1000)
        .id("kubejs:tk3/tier_4/mycelial_sourcelink");

    //->------------------------]  Tier 4 / Materials / Enriching [------------------------<-//

    // Dust Iron / Enriching
    event.recipes.mekanism.enriching(
        "2x mekanism:dust_iron",
        "minecraft:raw_iron")
        .id("kubejs:tk3/tier_5/iron_refining");

    // Dust Copper / Enriching
    event.recipes.mekanism.enriching(
        "2x mekanism:dust_copper",
        "minecraft:raw_copper")
        .id("kubejs:tk3/tier_5/copper_refining");

    //->------------------------]  Tier 4 / Materials / Mek_Smelting [------------------------<-//

    // Ingot Steel / Mek Smelting
    event.recipes.mekanism.smelting(
        "mekanism:ingot_steel",
        "mekanism:dust_steel")
        .id("kubejs:tk3/tier_5/steel_from_dust");

    //->------------------------]  Tier 4 / Materials / Mixing [------------------------<-//

    // Common Ink / Mixing
    event.recipes.create.mixing(
        [
            "2x irons_spellbooks:common_ink"
        ],
        [
            "minecraft:ink_sac",
            "irons_spellbooks:arcane_essence",
            Fluid.of("minecraft:water",
                250)
        ])
        .id("kubejs:tk3/tier_4/common_ink");

    // Ingot Steel / Mixing
    event.recipes.create.mixing(
        [
            "2x mekanism:ingot_steel"
        ],
        [
            "minecraft:iron_ingot",
            "minecraft:iron_ingot",
            "minecraft:coal"
        ])
        .heated()
        .id("kubejs:tk3/tier_5/steel_bootstrap");

    //->------------------------]  Tier 4 / Materials / Shapeless [------------------------<-//

    // Enchanting Apparatus / Shapeless
    event.shapeless(
        "ars_nouveau:enchanting_apparatus",
        [
            "kubejs:tk3_precision_machine",
            "minecraft:diamond",
            "ars_nouveau:source_gem"
        ])
        .id("kubejs:tk3/tier_4/enchanting_apparatus");

    // Basic Universal Cable / Shapeless
    event.shapeless(
        "4x mekanism:basic_universal_cable",
        [
            "mekanism:ingot_steel",
            "createaddition:copper_spool",
            "minecraft:redstone"
        ])
        .id("kubejs:tk3/tier_5/basic_universal_cable");

    // Basic Mechanical Pipe / Shapeless
    event.shapeless(
        "4x mekanism:basic_mechanical_pipe",
        [
            "mekanism:ingot_steel",
            "create:fluid_pipe",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/tier_5/basic_mechanical_pipe");

    // Basic Logistical Transporter / Shapeless
    event.shapeless(
        "4x mekanism:basic_logistical_transporter",
        [
            "mekanism:ingot_steel",
            "create:brass_funnel",
            "minecraft:redstone"
        ])
        .id("kubejs:tk3/tier_5/basic_logistical_transporter");

    //->------------------------]  Tier 4 / Tools & components [------------------------<-//

    // Agronomic Sourcelink / Shaped
    event.shaped(
        "ars_nouveau:agronomic_sourcelink",
        [
            "WWW",
            "GPG",
            " S "
        ], {
            "W": "minecraft:wheat",
            "G": "ars_nouveau:source_gem",
            "P": "kubejs:tk3_precision_machine",
            "S": "ars_nouveau:source_jar"
        })
        .id("kubejs:tk3/tier_4/agronomic_sourcelink");

    // Steel Casing / Shaped
    event.shaped(
        "mekanism:steel_casing",
        [
            "SPS",
            "O O",
            "SSS"
        ], {
            "S": "mekanism:ingot_steel",
            "O": "mekanism:ingot_osmium",
            "P": "kubejs:tk3_precision_machine"
        })
        .id("kubejs:tk3/tier_5/steel_casing");

    // Metallurgic Infuser / Shaped
    event.shaped(
        "mekanism:metallurgic_infuser",
        [
            "ISI",
            "RFR",
            "IPI"
        ], {
            "I": "minecraft:iron_ingot",
            "S": "mekanism:steel_casing",
            "R": "minecraft:redstone",
            "F": "minecraft:furnace",
            "P": "create:precision_mechanism"
        })
        .id("kubejs:tk3/tier_5/metallurgic_infuser");

    // Enrichment Chamber / Shaped
    event.shaped(
        "mekanism:enrichment_chamber",
        [
            "ACA",
            "ISI",
            "IPI"
        ], {
            "A": "mekanism:alloy_infused",
            "C": "mekanism:basic_control_circuit",
            "I": "mekanism:ingot_steel",
            "S": "mekanism:steel_casing",
            "P": "create:precision_mechanism"
        })
        .id("kubejs:tk3/tier_5/enrichment_chamber");

    // Crusher / Shaped
    event.shaped(
        "mekanism:crusher",
        [
            "ACA",
            "DSD",
            "IPI"
        ], {
            "A": "mekanism:alloy_infused",
            "C": "mekanism:basic_control_circuit",
            "D": "minecraft:diamond",
            "S": "mekanism:steel_casing",
            "I": "mekanism:ingot_steel",
            "P": "create:precision_mechanism"
        })
        .id("kubejs:tk3/tier_5/crusher");

    // Energized Smelter / Shaped
    event.shaped(
        "mekanism:energized_smelter",
        [
            "ACA",
            "ISI",
            "FPF"
        ], {
            "A": "mekanism:alloy_infused",
            "C": "mekanism:basic_control_circuit",
            "I": "mekanism:ingot_steel",
            "S": "mekanism:steel_casing",
            "F": "minecraft:furnace",
            "P": "create:precision_mechanism"
        })
        .id("kubejs:tk3/tier_5/energized_smelter");

    // Heat Generator / Shaped
    event.shaped(
        "mekanismgenerators:heat_generator",
        [
            "ICI",
            "FSF",
            "IPI"
        ], {
            "I": "mekanism:ingot_steel",
            "C": "minecraft:copper_ingot",
            "F": "minecraft:furnace",
            "S": "mekanism:steel_casing",
            "P": "create:precision_mechanism"
        })
        .id("kubejs:tk3/tier_5/heat_generator");

    // Alternator / Shaped
    event.shaped(
        "createaddition:alternator",
        [
            "WCW",
            "ISI",
            "IPI"
        ], {
            "W": "createaddition:copper_spool",
            "C": "createaddition:capacitor",
            "I": "create:iron_sheet",
            "S": "mekanism:steel_casing",
            "P": "create:precision_mechanism"
        })
        .id("kubejs:tk3/tier_5/alternator");

    // Electric Motor / Shaped
    event.shaped(
        "createaddition:electric_motor",
        [
            "WCW",
            "ISI",
            "IPI"
        ], {
            "W": "createaddition:copper_spool",
            "C": "createaddition:capacitor",
            "I": "mekanism:ingot_steel",
            "S": "mekanism:steel_casing",
            "P": "create:precision_mechanism"
        })
        .id("kubejs:tk3/tier_5/electric_motor");

    // Basic Energy Cube / Shaped
    event.shaped(
        "mekanism:basic_energy_cube",
        [
            "ATA",
            "CSC",
            "ATA"
        ], {
            "A": "mekanism:alloy_infused",
            "T": "mekanism:energy_tablet",
            "C": "mekanism:basic_control_circuit",
            "S": "mekanism:steel_casing"
        })
        .id("kubejs:tk3/tier_5/basic_energy_cube");

    //->------------------------]  Tier 4 / Mechanisms / Sequenced assembly [------------------------<-//

    // Arcane Mechanism / Sequence
    event.recipes.create.sequenced_assembly(
        [
            "kubejs:tk3_arcane_mechanism"
        ],
        "create:precision_mechanism",
        [
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_arcane_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_arcane_mechanism",
                    "ars_nouveau:source_gem"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_arcane_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_arcane_mechanism",
                    "ars_nouveau:source_gem"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_arcane_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_arcane_mechanism",
                    "irons_spellbooks:arcane_essence"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_arcane_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_arcane_mechanism",
                    "irons_spellbooks:arcane_essence"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_arcane_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_arcane_mechanism",
                    "ars_nouveau:manipulation_essence"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_arcane_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_arcane_mechanism",
                    "minecraft:gold_ingot"
                ]),
            event.recipes.create.deploying(
                [
                    "kubejs:tk3_incomplete_arcane_mechanism"
                ],
                [
                    "kubejs:tk3_incomplete_arcane_mechanism",
                    "ars_nouveau:enchanters_sword"
                ])
        ])
        .transitionalItem("kubejs:tk3_incomplete_arcane_mechanism")
        .loops(1)
        .id("kubejs:tk3/tier_4/tk3_arcane_mechanism");

    //->------------------------]  Tier 4 / Resource processing / Haunting [------------------------<-//

    // Arcane Essence / Haunting
    event.recipes.create.haunting(
        [
            "irons_spellbooks:arcane_essence"
        ],
        [
            "ars_nouveau:source_gem"
        ])
        .id("kubejs:tk3/tier_4/arcane_essence");

});
