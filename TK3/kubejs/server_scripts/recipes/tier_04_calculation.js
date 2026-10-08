// priority: -10004
// T&K3 Tier 04 Calculation — complete tier recipe/progression script.
// Consolidated from the former base + authoritative progression layers.

// ============================================================================
// BASE / GENERAL TIER RECIPES
// ============================================================================
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

    // Arcane Mechanism moved to its actual Tier 6 script; legacy Tier 4 generator recipe removed.

});

// Preserve the old bootstrap result after consolidating file priorities.
ServerEvents.recipes(event => {
    [
        "kubejs:tk3/tier_5/metallurgic_infuser",
        "kubejs:tk3/tier_5/enrichment_chamber",
        "kubejs:tk3/tier_5/crusher",
        "kubejs:tk3/tier_5/energized_smelter"
    ].forEach(id => event.remove({ id: id }));
});

// ============================================================================
// AUTHORITATIVE TIER PROGRESSION / OVERRIDES
// ============================================================================
ServerEvents.recipes(event => {
    //->------------------------]  Tier 4 / Calculation + TNK2-style AE2 [------------------------<-//

    event.recipes.create.mixing(
        ["2x kubejs:tk3_rough_sand"],
        ["2x minecraft:sand", "minecraft:flint"])
        .id("kubejs:tk3/ae2/rough_sand");

    event.recipes.create.milling(
        ["ae2:certus_quartz_dust"],
        "ae2:certus_quartz_crystal")
        .id("kubejs:tk3/ae2/certus_dust");

    event.recipes.create.mixing(
        ["2x kubejs:tk3_siliceous_compound"],
        ["ae2:certus_quartz_dust", "kubejs:tk3_rough_sand"])
        .id("kubejs:tk3/ae2/siliceous_compound");

    event.blasting(
        "2x ae2:silicon",
        "kubejs:tk3_siliceous_compound")
        .id("kubejs:tk3/ae2/silicon_from_siliceous_compound");

    event.shaped(
        "kubejs:tk3_boot_medium",
        [
            " Q ",
            "RBR",
            " E "
        ], {
        Q: "ae2:certus_quartz_crystal",
        R: "minecraft:redstone",
        B: "minecraft:book",
        E: "create:electron_tube"
    })
        .id("kubejs:tk3/ae2/boot_medium");

    event.recipes.create.deploying(
        ["ae2:printed_silicon"],
        ["ae2:silicon", "ae2:silicon_press"])
        .keepHeldItem()
        .id("kubejs:tk3/ae2/printed_silicon");

    event.recipes.create.deploying(
        ["ae2:printed_logic_processor"],
        ["minecraft:gold_ingot", "ae2:logic_processor_press"])
        .keepHeldItem()
        .id("kubejs:tk3/ae2/printed_logic");

    event.recipes.create.deploying(
        ["ae2:printed_calculation_processor"],
        ["ae2:certus_quartz_crystal", "ae2:calculation_processor_press"])
        .keepHeldItem()
        .id("kubejs:tk3/ae2/printed_calculation");

    event.recipes.create.deploying(
        ["ae2:printed_engineering_processor"],
        ["minecraft:diamond", "ae2:engineering_processor_press"])
        .keepHeldItem()
        .id("kubejs:tk3/ae2/printed_engineering");

    function processorSequence(output, printed, transitional, name) {
        event.recipes.create.sequenced_assembly(
            [output],
            printed,
            [
                event.recipes.create.deploying(
                    [transitional],
                    [transitional, "ae2:printed_silicon"]),
                event.recipes.create.deploying(
                    [transitional],
                    [transitional, "create:polished_rose_quartz"]),
                event.recipes.create.deploying(
                    [transitional],
                    [transitional, "kubejs:tk3_boot_medium"])
                    .keepHeldItem(),
                event.recipes.create.pressing(
                    [transitional],
                    [transitional])
            ])
            .transitionalItem(transitional)
            .loops(1)
            .id(`kubejs:tk3/ae2/${name}_processor`);
    }

    processorSequence(
        "ae2:logic_processor",
        "ae2:printed_logic_processor",
        "kubejs:tk3_incomplete_logic_processor",
        "logic");

    processorSequence(
        "ae2:calculation_processor",
        "ae2:printed_calculation_processor",
        "kubejs:tk3_incomplete_calculation_processor",
        "calculation");

    processorSequence(
        "ae2:engineering_processor",
        "ae2:printed_engineering_processor",
        "kubejs:tk3_incomplete_engineering_processor",
        "engineering");

    event.remove({ output: "kubejs:tk3_calculation_mechanism" });

    // The Inscriber remains available for native utility/name-press functions, but all
    // processor outputs are removed above and rebuilt through Deployers + assembly.
    event.remove({ output: "ae2:charger" });
    event.shaped(
        "ae2:charger",
        ["ICI", " Q ", "III"], {
        I: "minecraft:iron_ingot",
        C: "createaddition:capacitor",
        Q: "ae2:certus_quartz_crystal"
    })
        .id("kubejs:tk3/ae2/charger");

    event.remove({ output: "ae2:inscriber" });
    event.shaped(
        "ae2:inscriber",
        ["IPI", " C ", "IPI"], {
        I: "minecraft:iron_ingot",
        P: "minecraft:sticky_piston",
        C: "ae2:certus_quartz_crystal"
    })
        .id("kubejs:tk3/ae2/inscriber_utility_only");

    event.remove({ output: "ae2:charged_certus_quartz_crystal" });
    AE2Recipes.charger(
        event,
        "ae2:certus_quartz_crystal",
        "ae2:charged_certus_quartz_crystal",
        "kubejs:tk3/ae2/charged_certus_quartz_crystal");

    // No generic Tier-4 chassis: Calculation mechanisms go directly into AE2 infrastructure.
    event.remove({ output: "ae2:controller" });
    event.shaped(
        "ae2:controller",
        ["FCF", "CMC", "FCF"], {
        F: "ae2:fluix_crystal",
        C: "ae2:calculation_processor",
        M: "kubejs:tk3_calculation_mechanism"
    })
        .id("kubejs:tk3/ae2/controller");

    event.remove({ output: "ae2:interface" });
    event.shaped(
        "ae2:interface",
        ["GAG", "FCF", "GAG"], {
        G: "minecraft:glass",
        A: "ae2:annihilation_core",
        C: "ae2:formation_core",
        F: "ae2:fluix_glass_cable"
    })
        .id("kubejs:tk3/ae2/interface");

    // The Drive is a Tier-4 network anchor. Larger cells scale by AE2 processors,
    // not by consuming additional TK3 progression mechanisms.
    event.shaped(
        "ae2:drive",
        ["ICI", "MCM", "ICI"], {
        I: "minecraft:iron_ingot",
        C: "ae2:engineering_processor",
        M: "kubejs:tk3_calculation_mechanism"
    })
        .id("kubejs:tk3/ae2/drive_inductive");

    event.shaped(
        "ae2:cell_component_16k",
        ["444", "4P4", "444"], {
        "4": "ae2:cell_component_4k",
        P: "ae2:calculation_processor"
    })
        .id("kubejs:tk3/ae2/cell_16k_inductive");

    event.shaped(
        "ae2:cell_component_64k",
        ["111", "1P1", "111"], {
        "1": "ae2:cell_component_16k",
        P: "ae2:engineering_processor"
    })
        .id("kubejs:tk3/ae2/cell_64k_chemical");

    event.shaped(
        "ae2:cell_component_256k",
        ["666", "6P6", "666"], {
        "6": "ae2:cell_component_64k",
        P: "ae2:engineering_processor"
    })
        .id("kubejs:tk3/ae2/cell_256k_containment");
});
