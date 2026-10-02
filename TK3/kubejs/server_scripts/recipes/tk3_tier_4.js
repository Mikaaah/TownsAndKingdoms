// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    [
        "ars_nouveau:agronomic_sourcelink",
        "ars_nouveau:alchemical_sourcelink",
        "ars_nouveau:enchanters_sword",
        "ars_nouveau:enchanting_apparatus",
        "ars_nouveau:manipulation_essence",
        "ars_nouveau:mycelial_sourcelink",
        "ars_nouveau:relay",
        "ars_nouveau:relay_collector",
        "ars_nouveau:relay_deposit",
        "ars_nouveau:relay_splitter",
        "ars_nouveau:source_gem",
        "ars_nouveau:starbuncle_charm",
        "ars_nouveau:whirlisprig_charm",
        "ars_nouveau:wixie_charm",
        "create:fluid_tank",
        "create:precision_mechanism",
        "create_enchantment_industry:blaze_enchanter",
        "create_enchantment_industry:experience_hatch",
        "create_enchantment_industry:mechanical_grindstone",
        "irons_spellbooks:alchemist_cauldron",
        "irons_spellbooks:arcane_anvil",
        "irons_spellbooks:arcane_essence",
        "irons_spellbooks:common_ink",
        "kubejs:tk3_arcane_machine",
        "kubejs:tk3_arcane_mechanism",
        "kubejs:tk3_incomplete_arcane_mechanism",
        "kubejs:tk3_precision_machine",
        "minecraft:anvil",
        "minecraft:brewing_stand",
        "minecraft:brown_mushroom",
        "minecraft:cauldron",
        "minecraft:chest",
        "minecraft:diamond",
        "minecraft:enchanting_table",
        "minecraft:gold_ingot",
        "minecraft:grindstone",
        "minecraft:hopper",
        "minecraft:ink_sac",
        "minecraft:oak_sapling",
        "minecraft:redstone",
        "minecraft:wheat"
    ].forEach(id => {
            if (Item.of(id)
                    .isEmpty()) throw new Error('[TK3] Missing required item: ' + id);
        });

    //->------------------------]  Tier 4 / Materials / Apparatus [------------------------<-//

    // Agronomic Sourcelink / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:wheat",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_arcane_machine",
        "ars_nouveau:agronomic_sourcelink",
        1000)
        .id("kubejs:tk3/tier_4/agronomic_sourcelink");

    // Relay / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:redstone",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_arcane_machine",
        "ars_nouveau:relay",
        1000)
        .id("kubejs:tk3/tier_4/relay");

    // Starbuncle Charm / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:gold_ingot",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_arcane_machine",
        "ars_nouveau:starbuncle_charm",
        1000)
        .id("kubejs:tk3/tier_4/starbuncle_charm");

    // Whirlisprig Charm / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:oak_sapling",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_arcane_machine",
        "ars_nouveau:whirlisprig_charm",
        1000)
        .id("kubejs:tk3/tier_4/whirlisprig_charm");

    // Wixie Charm / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:cauldron",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_arcane_machine",
        "ars_nouveau:wixie_charm",
        1000)
        .id("kubejs:tk3/tier_4/wixie_charm");

    // Alchemist Cauldron / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:cauldron",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_arcane_machine",
        "irons_spellbooks:alchemist_cauldron",
        1000)
        .id("kubejs:tk3/tier_4/alchemist_cauldron");

    // Arcane Anvil / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:anvil",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_arcane_machine",
        "irons_spellbooks:arcane_anvil",
        1000)
        .id("kubejs:tk3/tier_4/arcane_anvil");

    // Blaze Enchanter / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:enchanting_table",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_arcane_machine",
        "create_enchantment_industry:blaze_enchanter",
        1000)
        .id("kubejs:tk3/tier_4/blaze_enchanter");

    // Relay Splitter / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:relay",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_arcane_machine",
        "ars_nouveau:relay_splitter",
        1000)
        .id("kubejs:tk3/tier_4/relay_splitter");

    // Relay Deposit / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:chest",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_arcane_machine",
        "ars_nouveau:relay_deposit",
        1000)
        .id("kubejs:tk3/tier_4/relay_deposit");

    // Relay Collector / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:hopper",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_arcane_machine",
        "ars_nouveau:relay_collector",
        1000)
        .id("kubejs:tk3/tier_4/relay_collector");

    // Alchemical Sourcelink / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:brewing_stand",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_arcane_machine",
        "ars_nouveau:alchemical_sourcelink",
        1000)
        .id("kubejs:tk3/tier_4/alchemical_sourcelink");

    // Mycelial Sourcelink / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:brown_mushroom",
            "ars_nouveau:source_gem"
        ],
        "kubejs:tk3_arcane_machine",
        "ars_nouveau:mycelial_sourcelink",
        1000)
        .id("kubejs:tk3/tier_4/mycelial_sourcelink");

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

    //->------------------------]  Tier 4 / Mechanisms / Sequenced assembly [------------------------<-//

    // Arcane Mechanism / Sequence
    // Final tool is durability-based. Do not keepHeldItem(): ordinary tools wear; unbreakable rewards do not.
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
