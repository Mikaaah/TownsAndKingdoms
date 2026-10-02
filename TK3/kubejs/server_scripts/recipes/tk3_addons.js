// priority: 0
// T&K3 chapters 1–10 / addons
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    //->------------------------]  Tier 3 / Expedition & settlement machines [------------------------<-//

    // Colony Warehouse Stock Link / Shapeless
    event.shapeless(
        "createminecolonies:colony_warehouse_stock_link",
        [
            "create:stock_link",
            "minecolonies:blockhutwarehouse",
            "create:electron_tube"
        ])
        .id("kubejs:tk3/addons/createminecolonies_colony_warehouse_stock_link");

    //->------------------------]  Tier 3 / Stationary propellers [------------------------<-//

    // Wooden Propeller / Shapeless
    event.shapeless(
        "aeronautics:wooden_propeller",
        [
            "create:propeller",
            "#minecraft:planks"
        ])
        .id("kubejs:tk3/addons/aeronautics_wooden_propeller");

    // Andesite Propeller / Shapeless
    event.shapeless(
        "aeronautics:andesite_propeller",
        [
            "create:propeller",
            "create:andesite_alloy"
        ])
        .id("kubejs:tk3/addons/aeronautics_andesite_propeller");

    //->------------------------]  Tier 3 / create_enchantment_industry / Devices [------------------------<-//

    // Mechanical Grindstone / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_precision_machine"
                },
                "s": {
                    "item": "create:shaft"
                }
            },
            "pattern": [
                "aaa",
                "asa",
                "aaa"
            ],
            "result": {
                "count": 1,
                "id": "create_enchantment_industry:mechanical_grindstone"
            }
        })
        .id("kubejs:tk3/addons/create_enchantment_industry_crafting_mechanical_grindstone");

    //->------------------------]  Tier 4 / Magic & settlement machines [------------------------<-//

    // Starbuncle Wheel / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:starbuncle_charm",
            "create:water_wheel"
        ],
        "kubejs:tk3_arcane_machine",
        "ars_creo:starbuncle_wheel",
        1000)
        .id("kubejs:tk3/addons/ars_creo_starbuncle_wheel");

    // Iron Witches Oven / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:furnace",
            "minecraft:iron_ingot"
        ],
        "kubejs:tk3_arcane_machine",
        "witchery:iron_witches_oven",
        1000)
        .id("kubejs:tk3/addons/witchery_iron_witches_oven");

    // Altar / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:source_gem",
            "minecraft:stone"
        ],
        "kubejs:tk3_arcane_machine",
        "witchery:altar",
        1000)
        .id("kubejs:tk3/addons/witchery_altar");

    // Cauldron / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:cauldron",
            "irons_spellbooks:arcane_essence"
        ],
        "kubejs:tk3_arcane_machine",
        "witchery:cauldron",
        1000)
        .id("kubejs:tk3/addons/witchery_cauldron");

    // Spinning Wheel / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "create:cogwheel",
            "minecraft:string"
        ],
        "kubejs:tk3_arcane_machine",
        "witchery:spinning_wheel",
        1000)
        .id("kubejs:tk3/addons/witchery_spinning_wheel");

    //->------------------------]  Tier 4 / create_enchantment_industry / Devices [------------------------<-//

    // Experience Hatch / Deploying
    event.recipes.create.deploying(
        [
            "create_enchantment_industry:experience_hatch"
        ],
        [
            "kubejs:tk3_arcane_machine",
            "create:experience_block"
        ])
        .id("kubejs:tk3/addons/create_enchantment_industry_experience_hatch");

    // Experience Lantern / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_arcane_machine"
                },
                "c": {
                    "item": "create:copper_casing"
                },
                "s": {
                    "item": "minecraft:sponge"
                }
            },
            "pattern": [
                "a",
                "s",
                "c"
            ],
            "result": {
                "count": 1,
                "id": "create_enchantment_industry:experience_lantern"
            }
        })
        .id("kubejs:tk3/addons/create_enchantment_industry_crafting_experience_lantern");

    // Brass Bookshelf / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "apothic_enchanting"
                }],
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "kubejs:tk3_arcane_machine"
            },
            "loops": 1,
            "results": [{
                    "id": "create_enchantment_industry:brass_bookshelf"
                }],
            "sequence": [{
                    "type": "create:deploying",
                    "ingredients": [{
                            "item": "create_enchantment_industry:incomplete_brass_bookshelf"
                        }, {
                            "item": "create:brass_ingot"
                        }],
                    "results": [{
                            "id": "create_enchantment_industry:incomplete_brass_bookshelf"
                        }]
                }, {
                    "type": "create:filling",
                    "ingredients": [{
                            "item": "create_enchantment_industry:incomplete_brass_bookshelf"
                        }, {
                            "type": "neoforge:tag",
                            "amount": 250,
                            "tag": "create_enchantment_industry:infusing/ingredients"
                        }],
                    "results": [{
                            "id": "create_enchantment_industry:incomplete_brass_bookshelf"
                        }]
                }, {
                    "type": "create:deploying",
                    "ingredients": [{
                            "item": "create_enchantment_industry:incomplete_brass_bookshelf"
                        }, {
                            "item": "create:precision_mechanism"
                        }],
                    "results": [{
                            "id": "create_enchantment_industry:incomplete_brass_bookshelf"
                        }]
                }],
            "transitional_item": {
                "id": "create_enchantment_industry:incomplete_brass_bookshelf"
            }
        })
        .id(
        "kubejs:tk3/addons/create_enchantment_industry_sequenced_assembly_brass_bookshelf"
    );

    //->------------------------]  Tier 4 / create_wizardry / Devices [------------------------<-//

    // Arcane Sheet / Native
    event.custom({
            "type": "create:pressing",
            "ingredients": [{
                    "item": "irons_spellbooks:arcane_ingot"
                }],
            "results": [{
                    "id": "create_wizardry:arcane_sheet"
                }]
        })
        .id("kubejs:tk3/addons/create_wizardry_pressing_arcane_sheet");

    // Arcane Sheet / Native
    event.custom({
            "type": "create:filling",
            "ingredients": [{
                    "tag": "create_wizardry:create_wizardry_buckets"
                }, {
                    "type": "neoforge:single",
                    "amount": 500,
                    "fluid": "create_wizardry:mana"
                }],
            "results": [{
                    "id": "create_wizardry:arcane_sheet"
                }]
        })
        .id("kubejs:tk3/addons/create_wizardry_filling_arcane_sheet");

    // Arcane Pipe / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "kubejs:tk3_arcane_machine"
                }, {
                    "item": "create:fluid_pipe"
                }],
            "result": {
                "count": 4,
                "id": "create_wizardry:arcane_pipe"
            }
        })
        .id("kubejs:tk3/addons/create_wizardry_arcane_pipe_from_pipe");

    // Arcane Pipe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "I": {
                    "item": "kubejs:tk3_arcane_machine"
                },
                "S": {
                    "item": "create_wizardry:arcane_sheet"
                }
            },
            "pattern": [
                "S",
                "I",
                "S"
            ],
            "result": {
                "count": 4,
                "id": "create_wizardry:arcane_pipe"
            }
        })
        .id("kubejs:tk3/addons/create_wizardry_arcane_pipe_vertical");

    // Arcane Pipe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "C": {
                    "item": "kubejs:tk3_arcane_machine"
                },
                "S": {
                    "item": "create_wizardry:arcane_sheet"
                }
            },
            "pattern": [
                "SCS"
            ],
            "result": {
                "count": 4,
                "id": "create_wizardry:arcane_pipe"
            }
        })
        .id("kubejs:tk3/addons/create_wizardry_arcane_pipe");

    // Arcane Pipe / Native
    event.custom({
            "type": "create:item_application",
            "ingredients": [{
                    "item": "kubejs:tk3_arcane_machine"
                }, {
                    "item": "create_wizardry:arcane_sheet"
                }],
            "results": [{
                    "id": "create_wizardry:arcane_pipe"
                }]
        })
        .id("kubejs:tk3/addons/create_wizardry_item_application_arcane_pipe");

    // Arcane Pipe / Native
    event.custom({
            "type": "create:deploying",
            "ingredients": [{
                    "item": "kubejs:tk3_arcane_machine"
                }, {
                    "item": "create_wizardry:arcane_sheet"
                }],
            "results": [{
                    "id": "create_wizardry:arcane_pipe"
                }]
        })
        .id("kubejs:tk3/addons/create_wizardry_deploying_arcane_pipe");

    // Arcane Pump / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "kubejs:tk3_arcane_machine"
                }, {
                    "item": "create:mechanical_pump"
                }],
            "result": {
                "count": 1,
                "id": "create_wizardry:arcane_pump"
            }
        })
        .id("kubejs:tk3/addons/create_wizardry_arcane_pump_from_pump");

    // Arcane Pump / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "kubejs:tk3_arcane_machine"
                }, {
                    "item": "create:cogwheel"
                }],
            "result": {
                "count": 1,
                "id": "create_wizardry:arcane_pump"
            }
        })
        .id("kubejs:tk3/addons/create_wizardry_arcane_pump");

    // Arcane Pump / Native
    event.custom({
            "type": "create:item_application",
            "ingredients": [{
                    "item": "kubejs:tk3_arcane_machine"
                }, {
                    "item": "create_wizardry:arcane_sheet"
                }],
            "results": [{
                    "id": "create_wizardry:arcane_pump"
                }]
        })
        .id("kubejs:tk3/addons/create_wizardry_item_application_arcane_pump");

    // Arcane Pump / Native
    event.custom({
            "type": "create:deploying",
            "ingredients": [{
                    "item": "kubejs:tk3_arcane_machine"
                }, {
                    "item": "create_wizardry:arcane_sheet"
                }],
            "results": [{
                    "id": "create_wizardry:arcane_pump"
                }]
        })
        .id("kubejs:tk3/addons/create_wizardry_deploying_arcane_pump");

    //->------------------------]  Tier 5 / Magic & settlement machines [------------------------<-//

    // Distillery / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "witchery:cauldron",
            "create:fluid_pipe"
        ],
        "mekanism:steel_casing",
        "witchery:distillery",
        1000)
        .id("kubejs:tk3/addons/witchery_distillery");

    //->------------------------]  Tier 5 / createaddition / Devices [------------------------<-//

    // Connector / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "kubejs:tk3_arcane_machine"
                }, {
                    "item": "create:andesite_alloy"
                }, {
                    "tag": "c:slime_balls"
                }],
            "result": {
                "count": 3,
                "id": "createaddition:connector"
            }
        })
        .id("kubejs:tk3/addons/createaddition_crafting_connector");

    //->------------------------]  Tier 6 / Assembly tools [------------------------<-//

    // Diamond Hammer / Shaped
    event.shaped(
        "betterend:diamond_hammer",
        [
            "DSD",
            " T ",
            " T "
        ], {
            "D": "minecraft:diamond",
            "S": "mekanism:ingot_steel",
            "T": "minecraft:stick"
        })
        .id("kubejs:tk3/addons/betterend_diamond_hammer");

    // Diamond Knife / Shaped
    event.shaped(
        "farmersdelight:diamond_knife",
        [
            " D",
            "S "
        ], {
            "D": "minecraft:diamond",
            "S": "mekanism:ingot_steel"
        })
        .id("kubejs:tk3/addons/farmersdelight_diamond_knife");

    //->------------------------]  Tier 6 / Magic & settlement machines [------------------------<-//

    // Spell Loom / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "irons_spellbooks:arcane_anvil",
            "ars_nouveau:manipulation_essence"
        ],
        "kubejs:tk3_network_chassis",
        "ars_n_spells:spell_loom",
        2000)
        .id("kubejs:tk3/addons/ars_n_spells_spell_loom");

    // Mana Infusion / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:source_jar",
            "irons_spellbooks:arcane_essence"
        ],
        "kubejs:tk3_network_chassis",
        "ars_n_spells:mana_infusion",
        2000)
        .id("kubejs:tk3/addons/ars_n_spells_mana_infusion");

    // Salvaging Table / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:anvil",
            "ars_nouveau:manipulation_essence"
        ],
        "kubejs:tk3_network_chassis",
        "apotheosis:salvaging_table",
        2000)
        .id("kubejs:tk3/addons/apotheosis_salvaging_table");

    // Reforging Table / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:anvil",
            "apotheosis:gem_dust"
        ],
        "kubejs:tk3_network_chassis",
        "apotheosis:reforging_table",
        2000)
        .id("kubejs:tk3/addons/apotheosis_reforging_table");

    // Gem Cutting Table / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:diamond",
            "apotheosis:gem_dust"
        ],
        "kubejs:tk3_network_chassis",
        "apotheosis:gem_cutting_table",
        2000)
        .id("kubejs:tk3/addons/apotheosis_gem_cutting_table");

    //->------------------------]  Tier 6 / Storage upgrades / Preserve contents [------------------------<-//

    // Stack Upgrade Tier 3 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:stack_upgrade_tier_3"
                }],
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "tag": "c:storage_blocks/gold"
                },
                "G": {
                    "tag": "c:ingots/gold"
                },
                "S": {
                    "item": "sophisticatedstorage:stack_upgrade_tier_2"
                }
            },
            "pattern": [
                "GGG",
                "GSG",
                "BGB"
            ],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:stack_upgrade_tier_3"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_stack_upgrade_tier_3");

    // Stack Upgrade Tier 3 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "sophisticatedbackpacks"
                }, {
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:stack_upgrade_tier_3"
                }],
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "P": {
                    "tag": "minecraft:planks"
                },
                "S": {
                    "item": "sophisticatedbackpacks:stack_upgrade_tier_2"
                }
            },
            "pattern": [
                "PSP",
                " P ",
                "P P"
            ],
            "result": {
                "count": 3,
                "id": "sophisticatedstorage:stack_upgrade_tier_3"
            }
        })
        .id(
        "kubejs:tk3/addons/sophisticatedstorage_storage_stack_upgrade_tier_3_from_backpack_stack_upgrade_tier_2"
    );

    // Stack Upgrade Tier 3 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedbackpacks:stack_upgrade_tier_3"
                }],
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "D": {
                    "tag": "c:storage_blocks/diamond"
                },
                "S": {
                    "item": "sophisticatedbackpacks:stack_upgrade_tier_2"
                }
            },
            "pattern": [
                "DDD",
                "DSD",
                "DDD"
            ],
            "result": {
                "count": 1,
                "id": "sophisticatedbackpacks:stack_upgrade_tier_3"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedbackpacks_stack_upgrade_tier_3");

    //->------------------------]  Tier 6 / create_enchantment_industry / Devices [------------------------<-//

    // Infuser / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "apothic_enchanting"
                }],
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "-": {
                    "item": "kubejs:tk3_network_chassis"
                },
                "=": {
                    "item": "create:nixie_tube"
                },
                "o": {
                    "item": "create:spout"
                }
            },
            "pattern": [
                " - ",
                " o ",
                "==="
            ],
            "result": {
                "count": 1,
                "id": "create_enchantment_industry:infuser"
            }
        })
        .id("kubejs:tk3/addons/create_enchantment_industry_crafting_infuser");

    //->------------------------]  Tier 6 / create_wizardry / Devices [------------------------<-//

    // Smart Arcane Pipe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "item": "kubejs:tk3_network_chassis"
                },
                "E": {
                    "item": "create:electron_tube"
                },
                "P": {
                    "item": "create_wizardry:arcane_pipe"
                }
            },
            "pattern": [
                "B",
                "P",
                "E"
            ],
            "result": {
                "count": 1,
                "id": "create_wizardry:smart_arcane_pipe"
            }
        })
        .id("kubejs:tk3/addons/create_wizardry_smart_arcane_pipe");

    // Smart Arcane Pipe / Native
    event.custom({
            "type": "create:item_application",
            "ingredients": [{
                    "item": "kubejs:tk3_network_chassis"
                }, {
                    "item": "create_wizardry:arcane_sheet"
                }],
            "results": [{
                    "id": "create_wizardry:smart_arcane_pipe"
                }]
        })
        .id("kubejs:tk3/addons/create_wizardry_item_application_smart_arcane_pipe");

    // Smart Arcane Pipe / Native
    event.custom({
            "type": "create:deploying",
            "ingredients": [{
                    "item": "kubejs:tk3_network_chassis"
                }, {
                    "item": "create_wizardry:arcane_sheet"
                }],
            "results": [{
                    "id": "create_wizardry:smart_arcane_pipe"
                }]
        })
        .id("kubejs:tk3/addons/create_wizardry_deploying_smart_arcane_pipe");

    // Channeler / Native
    event.custom({
            "type": "create:mechanical_crafting",
            "accept_mirrored": true,
            "category": "misc",
            "key": {
                "B": {
                    "item": "kubejs:tk3_network_chassis"
                },
                "C": {
                    "item": "create:copper_sheet"
                },
                "E": {
                    "item": "irons_spellbooks:energized_core"
                },
                "H": {
                    "item": "minecraft:hopper"
                },
                "I": {
                    "item": "create:iron_sheet"
                }
            },
            "pattern": [
                " E ",
                "IHI",
                "CBC"
            ],
            "result": {
                "count": 1,
                "id": "create_wizardry:channeler"
            }
        })
        .id("kubejs:tk3/addons/create_wizardry_channeler");

    // Mana Siphon / Native
    event.custom({
            "type": "create:mechanical_crafting",
            "accept_mirrored": true,
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_network_chassis"
                },
                "C": {
                    "item": "create_wizardry:arcane_casing"
                },
                "D": {
                    "item": "create:item_drain"
                },
                "P": {
                    "item": "create_wizardry:arcane_pump"
                }
            },
            "pattern": [
                "A A",
                "APA",
                " C ",
                "ADA"
            ],
            "result": {
                "count": 1,
                "id": "create_wizardry:mana_siphon"
            }
        })
        .id("kubejs:tk3/addons/create_wizardry_mana_siphon");

    //->------------------------]  Tier 6 / createaddition / Devices [------------------------<-//

    // Large Connector / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "kubejs:tk3_network_chassis"
                }, {
                    "item": "create:andesite_alloy"
                }, {
                    "item": "create:andesite_alloy"
                }, {
                    "tag": "c:slime_balls"
                }],
            "result": {
                "count": 2,
                "id": "createaddition:large_connector"
            }
        })
        .id("kubejs:tk3/addons/createaddition_crafting_large_connector");

    // Redstone Relay / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "redstone",
            "key": {
                "C": {
                    "item": "kubejs:tk3_network_chassis"
                },
                "E": {
                    "item": "create:electron_tube"
                },
                "R": {
                    "tag": "c:dusts/redstone"
                },
                "S": {
                    "tag": "c:stones"
                }
            },
            "pattern": [
                " R ",
                "CEC",
                "SSS"
            ],
            "result": {
                "count": 1,
                "id": "createaddition:redstone_relay"
            }
        })
        .id("kubejs:tk3/addons/createaddition_crafting_redstone_relay");

    // Digital Adapter / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "computercraft"
                }],
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "kubejs:tk3_network_chassis"
                }, {
                    "tag": "c:plates/brass"
                }, {
                    "item": "minecraft:redstone_torch"
                }],
            "result": {
                "count": 1,
                "id": "createaddition:digital_adapter"
            }
        })
        .id("kubejs:tk3/addons/createaddition_crafting_digital_adapter");

    // Modular Accumulator / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "redstone",
            "key": {
                "B": {
                    "item": "kubejs:tk3_network_chassis"
                },
                "C": {
                    "item": "createaddition:capacitor"
                },
                "R": {
                    "tag": "c:rods/copper"
                },
                "W": {
                    "tag": "c:wires/electrum"
                }
            },
            "pattern": [
                " R ",
                "CBC",
                " W "
            ],
            "result": {
                "count": 1,
                "id": "createaddition:modular_accumulator"
            }
        })
        .id("kubejs:tk3/addons/createaddition_crafting_modular_accumulator");

    //->------------------------]  Tier 7 / Airship controls [------------------------<-//

    // Mounted Potato Cannon / Native
    event.custom({
            "type": "create:mechanical_crafting",
            "accept_mirrored": true,
            "category": "misc",
            "key": {
                "C": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "K": {
                    "item": "minecraft:dried_kelp_block"
                },
                "P": {
                    "item": "create:fluid_pipe"
                },
                "R": {
                    "tag": "c:dusts/redstone"
                },
                "S": {
                    "tag": "c:plates/copper"
                }
            },
            "pattern": [
                "SR  ",
                "KCPP",
                "SR  "
            ],
            "result": {
                "count": 1,
                "id": "aeronautics:mounted_potato_cannon"
            }
        })
        .id("kubejs:tk3/addons/aeronautics_mechanical_crafting_mounted_potato_cannon");

    //->------------------------]  Tier 7 / Airship controls & instruments [------------------------<-//

    // Altitude Sensor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "P": {
                    "item": "minecraft:paper"
                },
                "S": {
                    "tag": "c:plates/iron"
                }
            },
            "pattern": [
                "P",
                "S",
                "A"
            ],
            "result": {
                "count": 1,
                "id": "simulated:altitude_sensor"
            }
        })
        .id("kubejs:tk3/addons/simulated_altitude_sensor");

    // Analog Transmission / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "create:brass_casing"
                }, {
                    "item": "create:shaft"
                }, {
                    "item": "create:cogwheel"
                }, {
                    "item": "create:electron_tube"
                }],
            "result": {
                "count": 1,
                "id": "simulated:analog_transmission"
            }
        })
        .id("kubejs:tk3/addons/simulated_analog_transmission");

    // Auger Cog / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:auger_swap",
            "ingredients": [{
                    "item": "simulated:auger_shaft"
                }],
            "result": {
                "count": 1,
                "id": "simulated:auger_cog"
            }
        })
        .id("kubejs:tk3/addons/simulated_auger_cog_from_auger_shaft");

    // Auger Shaft / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "create:chute"
                }, {
                    "item": "create:shaft"
                }, {
                    "tag": "c:plates/iron"
                }],
            "result": {
                "count": 2,
                "id": "simulated:auger_shaft"
            }
        })
        .id("kubejs:tk3/addons/simulated_auger_shaft");

    // Black Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:black_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:black_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_black_handle");

    // Blue Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:blue_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:blue_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_blue_handle");

    // Brown Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:brown_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:brown_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_brown_handle");

    // Contraption Diagram / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "minecraft:paper"
                }, {
                    "item": "simulated:physics_assembler"
                }],
            "result": {
                "count": 1,
                "id": "simulated:contraption_diagram"
            }
        })
        .id("kubejs:tk3/addons/simulated_contraption_diagram");

    // Copper Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "tag": "c:nuggets/copper"
                }],
            "result": {
                "count": 1,
                "id": "simulated:copper_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_copper_handle");

    // Cyan Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:cyan_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:cyan_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_cyan_handle");

    // Directional Gearshift / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "create:andesite_casing"
                }, {
                    "item": "create:cogwheel"
                }, {
                    "item": "minecraft:redstone_torch"
                }, {
                    "item": "create:shaft"
                }],
            "result": {
                "count": 1,
                "id": "simulated:directional_gearshift"
            }
        })
        .id("kubejs:tk3/addons/simulated_directional_gearshift");

    // Directional Linked Receiver / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "B": {
                    "tag": "c:plates/iron"
                },
                "C": {
                    "item": "create:brass_casing"
                }
            },
            "pattern": [
                "A",
                "B",
                "C"
            ],
            "result": {
                "count": 1,
                "id": "simulated:directional_linked_receiver"
            }
        })
        .id("kubejs:tk3/addons/simulated_directional_linked_receiver");

    // Gimbal Sensor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "C": {
                    "item": "minecraft:compass"
                },
                "G": {
                    "item": "simulated:gyroscopic_mechanism"
                }
            },
            "pattern": [
                "C",
                "G",
                "B"
            ],
            "result": {
                "count": 1,
                "id": "simulated:gimbal_sensor"
            }
        })
        .id("kubejs:tk3/addons/simulated_gimbal_sensor");

    // Gray Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:gray_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:gray_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_gray_handle");

    // Green Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:green_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:green_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_green_handle");

    // Iron Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "tag": "simulated:handle_variants"
                }],
            "result": {
                "count": 1,
                "id": "simulated:iron_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_handle_undye");

    // Laser Pointer / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "C": {
                    "item": "create:andesite_casing"
                },
                "T": {
                    "item": "minecraft:redstone_torch"
                }
            },
            "pattern": [
                "A",
                "T",
                "C"
            ],
            "result": {
                "count": 1,
                "id": "simulated:laser_pointer"
            }
        })
        .id("kubejs:tk3/addons/simulated_laser_pointer");

    // Laser Sensor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "C": {
                    "item": "create:andesite_casing"
                },
                "G": {
                    "item": "minecraft:tinted_glass"
                }
            },
            "pattern": [
                "G",
                "A",
                "C"
            ],
            "result": {
                "count": 1,
                "id": "simulated:laser_sensor"
            }
        })
        .id("kubejs:tk3/addons/simulated_laser_sensor");

    // Light Blue Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:light_blue_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:light_blue_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_light_blue_handle");

    // Light Gray Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:light_gray_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:light_gray_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_light_gray_handle");

    // Lime Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:lime_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:lime_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_lime_handle");

    // Magenta Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:magenta_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:magenta_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_magenta_handle");

    // Modulating Linked Receiver / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "B": {
                    "tag": "c:plates/gold"
                },
                "C": {
                    "item": "create:brass_casing"
                }
            },
            "pattern": [
                "A",
                "B",
                "C"
            ],
            "result": {
                "count": 1,
                "id": "simulated:modulating_linked_receiver"
            }
        })
        .id("kubejs:tk3/addons/simulated_modulating_linked_receiver");

    // Navigation Table / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "P": {
                    "item": "create:precision_mechanism"
                },
                "S": {
                    "item": "create:brass_sheet"
                }
            },
            "pattern": [
                "S",
                "P",
                "B"
            ],
            "result": {
                "count": 1,
                "id": "simulated:navigation_table"
            }
        })
        .id("kubejs:tk3/addons/simulated_navigation_table");

    // Optical Sensor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "B": {
                    "item": "create:brass_casing"
                },
                "C": {
                    "item": "create:electron_tube"
                }
            },
            "pattern": [
                " A ",
                " C ",
                " B "
            ],
            "result": {
                "count": 1,
                "id": "simulated:optical_sensor"
            }
        })
        .id("kubejs:tk3/addons/simulated_optical_sensor");

    // Orange Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:orange_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:orange_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_orange_handle");

    // Physics Assembler / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "N": {
                    "item": "minecraft:lever"
                },
                "R": {
                    "item": "create:andesite_casing"
                }
            },
            "pattern": [
                "   ",
                " N ",
                "ARA"
            ],
            "result": {
                "count": 1,
                "id": "simulated:physics_assembler"
            }
        })
        .id("kubejs:tk3/addons/simulated_physics_assembler");

    // Pink Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:pink_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:pink_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_pink_handle");

    // Purple Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:purple_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:purple_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_purple_handle");

    // Red Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:red_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:red_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_red_handle");

    // Red Portable Engine / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "E": {
                    "item": "simulated:engine_assembly"
                },
                "G": {
                    "tag": "c:plates/iron"
                }
            },
            "pattern": [
                "G",
                "E",
                "B"
            ],
            "result": {
                "count": 1,
                "id": "simulated:red_portable_engine"
            }
        })
        .id("kubejs:tk3/addons/simulated_red_portable_engine");

    // Redstone Accumulator / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "Q": {
                    "item": "create:polished_rose_quartz"
                },
                "R": {
                    "tag": "c:dusts/redstone"
                },
                "S": {
                    "tag": "c:stones"
                },
                "T": {
                    "item": "minecraft:redstone_torch"
                }
            },
            "pattern": [
                " Q ",
                "RBT",
                "SSS"
            ],
            "result": {
                "count": 1,
                "id": "simulated:redstone_accumulator"
            }
        })
        .id("kubejs:tk3/addons/simulated_redstone_accumulator");

    // Redstone Inductor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "C": {
                    "tag": "c:plates/copper"
                },
                "R": {
                    "tag": "c:dusts/redstone"
                },
                "S": {
                    "tag": "c:stones"
                },
                "T": {
                    "item": "minecraft:redstone_torch"
                }
            },
            "pattern": [
                " C ",
                "RBT",
                "SSS"
            ],
            "result": {
                "count": 1,
                "id": "simulated:redstone_inductor"
            }
        })
        .id("kubejs:tk3/addons/simulated_redstone_inductor");

    // Redstone Magnet / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "tag": "c:dusts/redstone"
                }, {
                    "tag": "c:plates/copper"
                }, {
                    "item": "create:industrial_iron_block"
                }],
            "result": {
                "count": 1,
                "id": "simulated:redstone_magnet"
            }
        })
        .id("kubejs:tk3/addons/simulated_redstone_magnet");

    // Rope Connector / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "I": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "S": {
                    "item": "create:industrial_iron_block"
                }
            },
            "pattern": [
                "I",
                "S"
            ],
            "result": {
                "count": 1,
                "id": "simulated:rope_connector"
            }
        })
        .id("kubejs:tk3/addons/simulated_rope_connector");

    // Rope Coupling / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "N": {
                    "tag": "c:nuggets/iron"
                },
                "S": {
                    "tag": "c:strings"
                }
            },
            "pattern": [
                " S ",
                "NSN",
                " S "
            ],
            "result": {
                "count": 1,
                "id": "simulated:rope_coupling"
            }
        })
        .id("kubejs:tk3/addons/simulated_rope_coupling");

    // Rope Winch / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "H": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "I": {
                    "tag": "c:plates/iron"
                },
                "S": {
                    "item": "create:industrial_iron_block"
                }
            },
            "pattern": [
                "I",
                "H",
                "S"
            ],
            "result": {
                "count": 1,
                "id": "simulated:rope_winch"
            }
        })
        .id("kubejs:tk3/addons/simulated_rope_winch");

    // Spring / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "N": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "S": {
                    "tag": "c:plates/iron"
                }
            },
            "pattern": [
                "S",
                "N",
                "S"
            ],
            "result": {
                "count": 2,
                "id": "simulated:spring"
            }
        })
        .id("kubejs:tk3/addons/simulated_spring");

    // Steering Wheel / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "C": {
                    "item": "create:large_cogwheel"
                },
                "S": {
                    "item": "create:shaft"
                }
            },
            "pattern": [
                "C",
                "A",
                "S"
            ],
            "result": {
                "count": 1,
                "id": "simulated:steering_wheel"
            }
        })
        .id("kubejs:tk3/addons/simulated_steering_wheel");

    // Swivel Bearing / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "B": {
                    "item": "create:industrial_iron_block"
                },
                "C": {
                    "item": "create:cogwheel"
                }
            },
            "pattern": [
                " A ",
                " B ",
                " C "
            ],
            "result": {
                "count": 1,
                "id": "simulated:swivel_bearing"
            }
        })
        .id("kubejs:tk3/addons/simulated_swivel_bearing");

    // Throttle Lever / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "S": {
                    "item": "minecraft:stick"
                }
            },
            "pattern": [
                "S",
                "B"
            ],
            "result": {
                "count": 1,
                "id": "simulated:throttle_lever"
            }
        })
        .id("kubejs:tk3/addons/simulated_throttle_lever");

    // Torsion Spring / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "C": {
                    "item": "create:andesite_casing"
                },
                "S": {
                    "item": "simulated:spring"
                }
            },
            "pattern": [
                "A",
                "S",
                "C"
            ],
            "result": {
                "count": 1,
                "id": "simulated:torsion_spring"
            }
        })
        .id("kubejs:tk3/addons/simulated_torsion_spring");

    // Velocity Sensor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "B": {
                    "item": "minecraft:barrel"
                },
                "P": {
                    "item": "create:propeller"
                }
            },
            "pattern": [
                "P",
                "B",
                "A"
            ],
            "result": {
                "count": 1,
                "id": "simulated:velocity_sensor"
            }
        })
        .id("kubejs:tk3/addons/simulated_velocity_sensor");

    // White Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:white_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:white_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_white_handle");

    // White Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "ingredients": [{
                    "item": "minecraft:paper"
                }, {
                    "item": "minecraft:stick"
                }, {
                    "item": "create:andesite_alloy"
                }],
            "result": {
                "count": 4,
                "id": "simulated:white_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_white_nameplate");

    // White Symmetric Sail / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "create:white_sail"
                }, {
                    "item": "create:white_sail"
                }],
            "result": {
                "count": 2,
                "id": "simulated:white_symmetric_sail"
            }
        })
        .id("kubejs:tk3/addons/simulated_white_symmetric_sail");

    // Yellow Handle / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "group": "simulated:handle_variants",
            "ingredients": [{
                    "item": "simulated:iron_handle"
                }, {
                    "item": "minecraft:yellow_dye"
                }],
            "result": {
                "count": 1,
                "id": "simulated:yellow_handle"
            }
        })
        .id("kubejs:tk3/addons/simulated_yellow_handle");

    // Black Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/black"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:black_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_crafting_black_nameplate_from_other_nameplate");

    // Blue Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/blue"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:blue_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_crafting_blue_nameplate_from_other_nameplate");

    // Brown Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/brown"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:brown_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_crafting_brown_nameplate_from_other_nameplate");

    // Cyan Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/cyan"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:cyan_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_crafting_cyan_nameplate_from_other_nameplate");

    // Gray Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/gray"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:gray_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_crafting_gray_nameplate_from_other_nameplate");

    // Green Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/green"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:green_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_crafting_green_nameplate_from_other_nameplate");

    // Light Blue Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/light_blue"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:light_blue_nameplate"
            }
        })
        .id(
        "kubejs:tk3/addons/simulated_crafting_light_blue_nameplate_from_other_nameplate"
    );

    // Light Gray Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/light_gray"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:light_gray_nameplate"
            }
        })
        .id(
        "kubejs:tk3/addons/simulated_crafting_light_gray_nameplate_from_other_nameplate"
    );

    // Lime Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/lime"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:lime_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_crafting_lime_nameplate_from_other_nameplate");

    // Magenta Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/magenta"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:magenta_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_crafting_magenta_nameplate_from_other_nameplate");

    // Orange Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/orange"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:orange_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_crafting_orange_nameplate_from_other_nameplate");

    // Pink Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/pink"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:pink_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_crafting_pink_nameplate_from_other_nameplate");

    // Purple Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/purple"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:purple_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_crafting_purple_nameplate_from_other_nameplate");

    // Red Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/red"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:red_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_crafting_red_nameplate_from_other_nameplate");

    // Yellow Nameplate / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "building",
            "group": "simualted:nameplate_dyeing",
            "ingredients": [{
                    "tag": "c:dyes/yellow"
                }, {
                    "tag": "simulated:nameplate_items"
                }],
            "result": {
                "count": 1,
                "id": "simulated:yellow_nameplate"
            }
        })
        .id("kubejs:tk3/addons/simulated_crafting_yellow_nameplate_from_other_nameplate");

    // Honey Glue / Native
    event.custom({
            "type": "create:filling",
            "ingredients": [{
                    "tag": "c:plates/iron"
                }, {
                    "type": "neoforge:tag",
                    "amount": 500,
                    "tag": "c:honey"
                }],
            "results": [{
                    "id": "simulated:honey_glue"
                }]
        })
        .id("kubejs:tk3/addons/simulated_filling_honey_glue");

    // Docking Connector / Native
    event.custom({
            "type": "create:mechanical_crafting",
            "accept_mirrored": true,
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "B": {
                    "tag": "c:plates/brass"
                },
                "C": {
                    "item": "create:chute"
                },
                "E": {
                    "item": "create:electron_tube"
                },
                "I": {
                    "tag": "c:plates/iron"
                },
                "P": {
                    "item": "minecraft:piston"
                }
            },
            "pattern": [
                "ICI",
                " C ",
                "PAP",
                "BEB"
            ],
            "result": {
                "count": 2,
                "id": "simulated:docking_connector"
            }
        })
        .id("kubejs:tk3/addons/simulated_mechanical_crafting_docking_connector");

    // Linked Typewriter / Native
    event.custom({
            "type": "create:mechanical_crafting",
            "accept_mirrored": true,
            "category": "misc",
            "key": {
                "B": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "G": {
                    "tag": "c:plates/gold"
                },
                "P": {
                    "item": "create:precision_mechanism"
                },
                "T": {
                    "item": "create:transmitter"
                }
            },
            "pattern": [
                "BBBBT",
                "BBBBB",
                " GPG "
            ],
            "result": {
                "count": 1,
                "id": "simulated:linked_typewriter"
            }
        })
        .id("kubejs:tk3/addons/simulated_mechanical_crafting_linked_typewriter");

    // Plunger Launcher / Native
    event.custom({
            "type": "create:mechanical_crafting",
            "accept_mirrored": true,
            "category": "misc",
            "key": {
                "A": {
                    "item": "create:andesite_alloy"
                },
                "C": {
                    "tag": "c:ingots/copper"
                },
                "F": {
                    "item": "create:fluid_pipe"
                },
                "M": {
                    "item": "create:precision_mechanism"
                },
                "P": {
                    "tag": "c:slime_balls"
                },
                "R": {
                    "item": "simulated:rope_coupling"
                }
            },
            "pattern": [
                "   P",
                "AMFR",
                "CC P"
            ],
            "result": {
                "count": 1,
                "id": "simulated:plunger_launcher"
            }
        })
        .id("kubejs:tk3/addons/simulated_mechanical_crafting_plunger_launcher");

    //->------------------------]  Tier 7 / Airship envelopes [------------------------<-//

    // White Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:white_envelope"
        ],
        [
            "minecraft:white_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_white_envelope");

    // White Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:white_envelope_encased_shaft",
        [
            "aeronautics:white_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_white_envelope_encased_shaft");

    // Orange Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:orange_envelope"
        ],
        [
            "minecraft:orange_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_orange_envelope");

    // Orange Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:orange_envelope_encased_shaft",
        [
            "aeronautics:orange_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_orange_envelope_encased_shaft");

    // Magenta Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:magenta_envelope"
        ],
        [
            "minecraft:magenta_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_magenta_envelope");

    // Magenta Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:magenta_envelope_encased_shaft",
        [
            "aeronautics:magenta_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_magenta_envelope_encased_shaft");

    // Light Blue Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:light_blue_envelope"
        ],
        [
            "minecraft:light_blue_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_light_blue_envelope");

    // Light Blue Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:light_blue_envelope_encased_shaft",
        [
            "aeronautics:light_blue_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_light_blue_envelope_encased_shaft");

    // Yellow Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:yellow_envelope"
        ],
        [
            "minecraft:yellow_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_yellow_envelope");

    // Yellow Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:yellow_envelope_encased_shaft",
        [
            "aeronautics:yellow_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_yellow_envelope_encased_shaft");

    // Lime Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:lime_envelope"
        ],
        [
            "minecraft:lime_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_lime_envelope");

    // Lime Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:lime_envelope_encased_shaft",
        [
            "aeronautics:lime_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_lime_envelope_encased_shaft");

    // Pink Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:pink_envelope"
        ],
        [
            "minecraft:pink_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_pink_envelope");

    // Pink Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:pink_envelope_encased_shaft",
        [
            "aeronautics:pink_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_pink_envelope_encased_shaft");

    // Gray Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:gray_envelope"
        ],
        [
            "minecraft:gray_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_gray_envelope");

    // Gray Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:gray_envelope_encased_shaft",
        [
            "aeronautics:gray_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_gray_envelope_encased_shaft");

    // Light Gray Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:light_gray_envelope"
        ],
        [
            "minecraft:light_gray_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_light_gray_envelope");

    // Light Gray Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:light_gray_envelope_encased_shaft",
        [
            "aeronautics:light_gray_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_light_gray_envelope_encased_shaft");

    // Cyan Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:cyan_envelope"
        ],
        [
            "minecraft:cyan_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_cyan_envelope");

    // Cyan Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:cyan_envelope_encased_shaft",
        [
            "aeronautics:cyan_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_cyan_envelope_encased_shaft");

    // Purple Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:purple_envelope"
        ],
        [
            "minecraft:purple_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_purple_envelope");

    // Purple Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:purple_envelope_encased_shaft",
        [
            "aeronautics:purple_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_purple_envelope_encased_shaft");

    // Blue Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:blue_envelope"
        ],
        [
            "minecraft:blue_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_blue_envelope");

    // Blue Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:blue_envelope_encased_shaft",
        [
            "aeronautics:blue_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_blue_envelope_encased_shaft");

    // Brown Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:brown_envelope"
        ],
        [
            "minecraft:brown_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_brown_envelope");

    // Brown Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:brown_envelope_encased_shaft",
        [
            "aeronautics:brown_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_brown_envelope_encased_shaft");

    // Green Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:green_envelope"
        ],
        [
            "minecraft:green_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_green_envelope");

    // Green Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:green_envelope_encased_shaft",
        [
            "aeronautics:green_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_green_envelope_encased_shaft");

    // Red Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:red_envelope"
        ],
        [
            "minecraft:red_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_red_envelope");

    // Red Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:red_envelope_encased_shaft",
        [
            "aeronautics:red_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_red_envelope_encased_shaft");

    // Black Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:black_envelope"
        ],
        [
            "minecraft:black_wool",
            "minecraft:string",
            "kubejs:tk3_expedition_mechanism"
        ])
        .id("kubejs:tk3/addons/aeronautics_black_envelope");

    // Black Envelope Encased Shaft / Shapeless
    event.shapeless(
        "aeronautics:black_envelope_encased_shaft",
        [
            "aeronautics:black_envelope",
            "create:shaft"
        ])
        .id("kubejs:tk3/addons/aeronautics_black_envelope_encased_shaft");

    //->------------------------]  Tier 7 / Expedition & settlement machines [------------------------<-//

    // Gyroscopic Propeller Bearing / Shapeless
    event.shapeless(
        "aeronautics:gyroscopic_propeller_bearing",
        [
            "kubejs:tk3_expedition_frame",
            "aeronautics:propeller_bearing",
            "create:rotation_speed_controller"
        ])
        .id("kubejs:tk3/addons/aeronautics_gyroscopic_propeller_bearing");

    // Smart Propeller / Shapeless
    event.shapeless(
        "aeronautics:smart_propeller",
        [
            "kubejs:tk3_expedition_frame",
            "aeronautics:andesite_propeller",
            "create:electron_tube"
        ])
        .id("kubejs:tk3/addons/aeronautics_smart_propeller");

    // Adjustable Burner / Shapeless
    event.shapeless(
        "aeronautics:adjustable_burner",
        [
            "kubejs:tk3_expedition_frame",
            "create:blaze_burner",
            "create:fluid_valve"
        ])
        .id("kubejs:tk3/addons/aeronautics_adjustable_burner");

    // Steam Vent / Shapeless
    event.shapeless(
        "aeronautics:steam_vent",
        [
            "kubejs:tk3_expedition_frame",
            "create:steam_engine",
            "create:fluid_pipe"
        ])
        .id("kubejs:tk3/addons/aeronautics_steam_vent");

    //->------------------------]  Tier 7 / Exploration workshops [------------------------<-//

    // Quarry / Deploying
    event.recipes.create.deploying(
        [
            "alexscaves:quarry"
        ],
        [
            "kubejs:tk3_expedition_frame",
            "minecraft:iron_block"
        ])
        .id("kubejs:tk3/addons/alexscaves_quarry");

    // Drain / Deploying
    event.recipes.create.deploying(
        [
            "alexscaves:drain"
        ],
        [
            "kubejs:tk3_expedition_frame",
            "minecraft:bucket"
        ])
        .id("kubejs:tk3/addons/alexscaves_drain");

    // Conversion Crucible / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "irons_spellbooks:arcane_essence",
            "minecraft:amethyst_shard"
        ],
        "kubejs:tk3_expedition_frame",
        "alexscaves:conversion_crucible",
        2000)
        .id("kubejs:tk3/addons/alexscaves_conversion_crucible");

    //->------------------------]  Tier 7 / Magic & settlement machines [------------------------<-//

    // Mana Well / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:source_jar",
            "irons_spellbooks:arcane_essence"
        ],
        "kubejs:tk3_expedition_frame",
        "ars_n_spells:mana_well",
        2000)
        .id("kubejs:tk3/addons/ars_n_spells_mana_well");

    // Augmenting Table / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "apotheosis:reforging_table",
            "apotheosis:arcane_sands"
        ],
        "kubejs:tk3_expedition_frame",
        "apotheosis:augmenting_table",
        2000)
        .id("kubejs:tk3/addons/apotheosis_augmenting_table");

    //->------------------------]  Tier 7 / Storage upgrades / Preserve contents [------------------------<-//

    // Copper To Netherite Tier Upgrade / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:copper_to_netherite_tier_upgrade"
                }],
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sophisticatedstorage:copper_to_diamond_tier_upgrade"
                }, {
                    "tag": "c:ingots/netherite"
                }],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:copper_to_netherite_tier_upgrade"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_copper_to_netherite_tier_upgrade");

    // Gold To Netherite Tier Upgrade / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:gold_to_netherite_tier_upgrade"
                }],
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sophisticatedstorage:gold_to_diamond_tier_upgrade"
                }, {
                    "tag": "c:ingots/netherite"
                }],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:gold_to_netherite_tier_upgrade"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_gold_to_netherite_tier_upgrade");

    // Iron To Netherite Tier Upgrade / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:iron_to_netherite_tier_upgrade"
                }],
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sophisticatedstorage:iron_to_diamond_tier_upgrade"
                }, {
                    "tag": "c:ingots/netherite"
                }],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:iron_to_netherite_tier_upgrade"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_iron_to_netherite_tier_upgrade");

    // Diamond To Netherite Tier Upgrade / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:diamond_to_netherite_tier_upgrade"
                }],
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "minecraft:lever"
                }, {
                    "tag": "c:ingots/netherite"
                }],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:diamond_to_netherite_tier_upgrade"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_diamond_to_netherite_tier_upgrade");

    // Netherite Chest / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:netherite_chest"
                }],
            "type": "sophisticatedstorage:storage_tier_upgrade_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sophisticatedstorage:diamond_chest"
                }, {
                    "tag": "c:ingots/netherite"
                }],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:netherite_chest"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_netherite_chest");

    // Netherite Shulker Box / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:netherite_shulker_box"
                }],
            "type": "sophisticatedstorage:shulker_box_from_chest",
            "category": "misc",
            "key": {
                "C": {
                    "item": "sophisticatedstorage:netherite_chest"
                },
                "S": {
                    "item": "kubejs:tk3_expedition_frame"
                }
            },
            "pattern": [
                "S",
                "C",
                "S"
            ],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:netherite_shulker_box"
            }
        })
        .id(
        "kubejs:tk3/addons/sophisticatedstorage_netherite_shulker_from_netherite_chest"
    );

    // Limited Netherite Barrel 3 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:limited_netherite_barrel_3"
                }],
            "type": "sophisticatedstorage:storage_tier_upgrade_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sophisticatedstorage:limited_diamond_barrel_3"
                }, {
                    "tag": "c:ingots/netherite"
                }],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:limited_netherite_barrel_3"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_limited_netherite_barrel_3");

    // Netherite Chest / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:netherite_chest"
                }],
            "type": "sophisticatedstorage:double_chest_tier_upgrade_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sophisticatedstorage:diamond_chest"
                }, {
                    "tag": "c:ingots/netherite"
                }, {
                    "tag": "c:ingots/netherite"
                }],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:netherite_chest"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_double_netherite_chest");

    // Basic To Netherite Tier Upgrade / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:basic_to_netherite_tier_upgrade"
                }],
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sophisticatedstorage:basic_to_diamond_tier_upgrade"
                }, {
                    "tag": "c:ingots/netherite"
                }],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:basic_to_netherite_tier_upgrade"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_basic_to_netherite_tier_upgrade");

    // Netherite Shulker Box / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:netherite_shulker_box"
                }],
            "type": "sophisticatedstorage:storage_tier_upgrade_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sophisticatedstorage:diamond_shulker_box"
                }, {
                    "tag": "c:ingots/netherite"
                }],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:netherite_shulker_box"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_netherite_shulker_box");

    // Netherite Barrel / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:netherite_barrel"
                }],
            "type": "sophisticatedstorage:storage_tier_upgrade_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sophisticatedstorage:diamond_barrel"
                }, {
                    "tag": "c:ingots/netherite"
                }],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:netherite_barrel"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_netherite_barrel");

    // Limited Netherite Barrel 4 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:limited_netherite_barrel_4"
                }],
            "type": "sophisticatedstorage:storage_tier_upgrade_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sophisticatedstorage:limited_diamond_barrel_4"
                }, {
                    "tag": "c:ingots/netherite"
                }],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:limited_netherite_barrel_4"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_limited_netherite_barrel_4");

    // Limited Netherite Barrel 1 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:limited_netherite_barrel_1"
                }],
            "type": "sophisticatedstorage:storage_tier_upgrade_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sophisticatedstorage:limited_diamond_barrel_1"
                }, {
                    "tag": "c:ingots/netherite"
                }],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:limited_netherite_barrel_1"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_limited_netherite_barrel_1");

    // Limited Netherite Barrel 2 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:limited_netherite_barrel_2"
                }],
            "type": "sophisticatedstorage:storage_tier_upgrade_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sophisticatedstorage:limited_diamond_barrel_2"
                }, {
                    "tag": "c:ingots/netherite"
                }],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:limited_netherite_barrel_2"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_limited_netherite_barrel_2");

    // Netherite Backpack / Native
    event.custom({
            "type": "sophisticatedbackpacks:smithing_backpack_upgrade",
            "addition": {
                "item": "minecraft:netherite_ingot"
            },
            "base": {
                "item": "sophisticatedbackpacks:diamond_backpack"
            },
            "result": {
                "count": 1,
                "id": "sophisticatedbackpacks:netherite_backpack"
            },
            "template": {
                "item": "minecraft:netherite_upgrade_smithing_template"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedbackpacks_netherite_backpack");

    //->------------------------]  Tier 7 / create_enchantment_industry / Devices [------------------------<-//

    // Blaze Forger / Deploying
    event.recipes.create.deploying(
        [
            "create_enchantment_industry:blaze_forger"
        ],
        [
            "kubejs:tk3_expedition_frame",
            "create:blaze_burner"
        ])
        .id("kubejs:tk3/addons/create_enchantment_industry_blaze_forger");

    // Gem Cutter / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "apotheosis"
                }],
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "S": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "o": {
                    "item": "create:brass_ingot"
                },
                "x": {
                    "item": "minecraft:amethyst_shard"
                }
            },
            "pattern": [
                "xxx",
                "oSo",
                "xxx"
            ],
            "result": {
                "count": 1,
                "id": "create_enchantment_industry:gem_cutter"
            }
        })
        .id("kubejs:tk3/addons/create_enchantment_industry_crafting_gem_cutter");

    //->------------------------]  Tier 7 / create_wizardry / Devices [------------------------<-//

    // Blaze Caster / Deploying
    event.recipes.create.deploying(
        [
            "create_wizardry:blaze_caster"
        ],
        [
            "kubejs:tk3_expedition_frame",
            "create:blaze_burner"
        ])
        .id("kubejs:tk3/addons/create_wizardry_blaze_caster");

    //->------------------------]  Tier 7 / createaddition / Devices [------------------------<-//

    // Portable Energy Interface / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "redstone",
            "ingredients": [{
                    "item": "kubejs:tk3_expedition_frame"
                }, {
                    "item": "create:chute"
                }, {
                    "item": "createaddition:copper_spool"
                }],
            "result": {
                "count": 1,
                "id": "createaddition:portable_energy_interface"
            }
        })
        .id("kubejs:tk3/addons/createaddition_crafting_portable_energy_interface");

    // Tesla Coil / Native
    event.custom({
            "type": "create:mechanical_crafting",
            "accept_mirrored": true,
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "B": {
                    "item": "create:brass_casing"
                },
                "C": {
                    "item": "createaddition:capacitor"
                },
                "E": {
                    "item": "create:electron_tube"
                },
                "P": {
                    "tag": "c:plates/brass"
                },
                "S": {
                    "item": "createaddition:copper_spool"
                }
            },
            "pattern": [
                "SSS",
                " A ",
                "CBC",
                "PEP"
            ],
            "result": {
                "count": 1,
                "id": "createaddition:tesla_coil"
            }
        })
        .id("kubejs:tk3/addons/createaddition_mechanical_crafting_tesla_coil");

    //->------------------------]  Tier 8 / Exploration workshops [------------------------<-//

    // Dragonforge Fire Core Disabled / Deploying
    event.recipes.create.deploying(
        [
            "iceandfire:dragonforge_fire_core_disabled"
        ],
        [
            "kubejs:tk3_containment_frame",
            "iceandfire:dragonbone"
        ])
        .id("kubejs:tk3/addons/iceandfire_dragonforge_fire_core_disabled");

    // Dragonforge Fire Input / Deploying
    event.recipes.create.deploying(
        [
            "iceandfire:dragonforge_fire_input"
        ],
        [
            "kubejs:tk3_containment_frame",
            "minecraft:blaze_powder"
        ])
        .id("kubejs:tk3/addons/iceandfire_dragonforge_fire_input");

    // Dragonforge Fire Brick / Stonecutting
    event.stonecutting(
        "4x iceandfire:dragonforge_fire_brick",
        "kubejs:tk3_containment_frame")
        .id("kubejs:tk3/addons/iceandfire_dragonforge_fire_brick");

    // Dragonforge Ice Core Disabled / Deploying
    event.recipes.create.deploying(
        [
            "iceandfire:dragonforge_ice_core_disabled"
        ],
        [
            "kubejs:tk3_containment_frame",
            "iceandfire:dragonbone"
        ])
        .id("kubejs:tk3/addons/iceandfire_dragonforge_ice_core_disabled");

    // Dragonforge Ice Input / Deploying
    event.recipes.create.deploying(
        [
            "iceandfire:dragonforge_ice_input"
        ],
        [
            "kubejs:tk3_containment_frame",
            "minecraft:packed_ice"
        ])
        .id("kubejs:tk3/addons/iceandfire_dragonforge_ice_input");

    // Dragonforge Ice Brick / Stonecutting
    event.stonecutting(
        "4x iceandfire:dragonforge_ice_brick",
        "kubejs:tk3_containment_frame")
        .id("kubejs:tk3/addons/iceandfire_dragonforge_ice_brick");

    // Dragonforge Lightning Core Disabled / Deploying
    event.recipes.create.deploying(
        [
            "iceandfire:dragonforge_lightning_core_disabled"
        ],
        [
            "kubejs:tk3_containment_frame",
            "iceandfire:dragonbone"
        ])
        .id("kubejs:tk3/addons/iceandfire_dragonforge_lightning_core_disabled");

    // Dragonforge Lightning Input / Deploying
    event.recipes.create.deploying(
        [
            "iceandfire:dragonforge_lightning_input"
        ],
        [
            "kubejs:tk3_containment_frame",
            "minecraft:amethyst_shard"
        ])
        .id("kubejs:tk3/addons/iceandfire_dragonforge_lightning_input");

    // Dragonforge Lightning Brick / Stonecutting
    event.stonecutting(
        "4x iceandfire:dragonforge_lightning_brick",
        "kubejs:tk3_containment_frame")
        .id("kubejs:tk3/addons/iceandfire_dragonforge_lightning_brick");

    // Nuclear Furnace Component / Deploying
    event.recipes.create.deploying(
        [
            "alexscaves:nuclear_furnace_component"
        ],
        [
            "kubejs:tk3_containment_frame",
            "mekanism:alloy_atomic"
        ])
        .id("kubejs:tk3/addons/alexscaves_nuclear_furnace_component");

    // Nuclear Siren / Deploying
    event.recipes.create.deploying(
        [
            "alexscaves:nuclear_siren"
        ],
        [
            "kubejs:tk3_containment_frame",
            "minecraft:redstone"
        ])
        .id("kubejs:tk3/addons/alexscaves_nuclear_siren");

    //->------------------------]  Tier 8 / Magic & settlement machines [------------------------<-//

    // Hellfire Forge / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "irons_spellbooks:arcane_anvil",
            "minecraft:netherite_ingot"
        ],
        "kubejs:tk3_containment_frame",
        "cataclysm_spellbooks:hellfire_forge",
        2000)
        .id("kubejs:tk3/addons/cataclysm_spellbooks_hellfire_forge");

    //->------------------------]  Tier 8 / Storage upgrades / Preserve contents [------------------------<-//

    // Stack Upgrade Tier 4 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "sophisticatedbackpacks"
                }, {
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:stack_upgrade_tier_4"
                }],
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "P": {
                    "tag": "minecraft:planks"
                },
                "S": {
                    "item": "sophisticatedbackpacks:stack_upgrade_tier_3"
                }
            },
            "pattern": [
                "PSP",
                " P ",
                "P P"
            ],
            "result": {
                "count": 3,
                "id": "sophisticatedstorage:stack_upgrade_tier_4"
            }
        })
        .id(
        "kubejs:tk3/addons/sophisticatedstorage_storage_stack_upgrade_tier_4_from_backpack_stack_upgrade_tier_3"
    );

    // Stack Upgrade Tier 4 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:stack_upgrade_tier_4"
                }],
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "tag": "c:storage_blocks/diamond"
                },
                "D": {
                    "tag": "c:gems/diamond"
                },
                "S": {
                    "item": "sophisticatedstorage:stack_upgrade_tier_3"
                }
            },
            "pattern": [
                "DDD",
                "DSD",
                "BDB"
            ],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:stack_upgrade_tier_4"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_stack_upgrade_tier_4");

    // Stack Upgrade Tier 3 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "sophisticatedbackpacks"
                }, {
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedbackpacks:stack_upgrade_tier_3"
                }],
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "L": {
                    "tag": "c:leathers"
                },
                "S": {
                    "item": "sophisticatedstorage:stack_upgrade_tier_4"
                },
                "T": {
                    "tag": "c:strings"
                }
            },
            "pattern": [
                "TST",
                "SLS",
                "T T"
            ],
            "result": {
                "count": 1,
                "id": "sophisticatedbackpacks:stack_upgrade_tier_3"
            }
        })
        .id(
        "kubejs:tk3/addons/sophisticatedstorage_backpack_stack_upgrade_tier_3_from_storage_stack_upgrade_tier_4"
    );

    // Stack Upgrade Tier 4 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedbackpacks:stack_upgrade_tier_4"
                }],
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "N": {
                    "tag": "c:storage_blocks/netherite"
                },
                "S": {
                    "item": "sophisticatedbackpacks:stack_upgrade_tier_3"
                }
            },
            "pattern": [
                "NNN",
                "NSN",
                "NNN"
            ],
            "result": {
                "count": 1,
                "id": "sophisticatedbackpacks:stack_upgrade_tier_4"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedbackpacks_stack_upgrade_tier_4");

    //->------------------------]  Tier 9 / Advanced lift [------------------------<-//

    // End Stone Powder / Crushing
    event.recipes.create.crushing(
        [
            "4x aeronautics:end_stone_powder"
        ],
        [
            "minecraft:end_stone"
        ])
        .id("kubejs:tk3/addons/aeronautics_end_stone_powder");

    // Levitite Blend / Native
    event.custom({
            "type": "create:mixing",
            "heat_requirement": "heated",
            "ingredients": [{
                    "item": "aeronautics:end_stone_powder"
                }, {
                    "item": "aeronautics:end_stone_powder"
                }, {
                    "item": "aeronautics:end_stone_powder"
                }, {
                    "item": "aeronautics:end_stone_powder"
                }, {
                    "item": "create:zinc_nugget"
                }, {
                    "item": "create:zinc_nugget"
                }, {
                    "type": "neoforge:tag",
                    "amount": 500,
                    "tag": "c:water"
                }],
            "results": [{
                    "amount": 500,
                    "id": "aeronautics:levitite_blend"
                }]
        })
        .id("kubejs:tk3/addons/levitite_blend");

    //->------------------------]  Tier 9 / Storage upgrades / Preserve contents [------------------------<-//

    // Stack Upgrade Tier 4 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "sophisticatedbackpacks"
                }, {
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedbackpacks:stack_upgrade_tier_4"
                }],
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "L": {
                    "tag": "c:leathers"
                },
                "S": {
                    "item": "sophisticatedstorage:stack_upgrade_tier_5"
                },
                "T": {
                    "tag": "c:strings"
                }
            },
            "pattern": [
                "TST",
                "SLS",
                "T T"
            ],
            "result": {
                "count": 1,
                "id": "sophisticatedbackpacks:stack_upgrade_tier_4"
            }
        })
        .id(
        "kubejs:tk3/addons/sophisticatedstorage_backpack_stack_upgrade_tier_4_from_storage_stack_upgrade_tier_5"
    );

    // Stack Upgrade Tier 5 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:stack_upgrade_tier_5"
                }],
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "tag": "c:storage_blocks/netherite"
                },
                "N": {
                    "tag": "c:ingots/netherite"
                },
                "S": {
                    "item": "sophisticatedstorage:stack_upgrade_tier_4"
                }
            },
            "pattern": [
                "NNN",
                "NSN",
                "BNB"
            ],
            "result": {
                "count": 1,
                "id": "sophisticatedstorage:stack_upgrade_tier_5"
            }
        })
        .id("kubejs:tk3/addons/sophisticatedstorage_stack_upgrade_tier_5");

    // Stack Upgrade Tier 5 / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "sophisticatedbackpacks"
                }, {
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": "sophisticatedstorage:stack_upgrade_tier_5"
                }],
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "P": {
                    "tag": "minecraft:planks"
                },
                "S": {
                    "item": "sophisticatedbackpacks:stack_upgrade_tier_4"
                }
            },
            "pattern": [
                "PSP",
                " P ",
                "P P"
            ],
            "result": {
                "count": 3,
                "id": "sophisticatedstorage:stack_upgrade_tier_5"
            }
        })
        .id(
        "kubejs:tk3/addons/sophisticatedstorage_storage_stack_upgrade_tier_5_from_backpack_stack_upgrade_tier_4"
    );

});
