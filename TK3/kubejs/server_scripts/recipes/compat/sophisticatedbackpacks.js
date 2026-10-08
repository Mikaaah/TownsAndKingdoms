// priority: 0
// TK3 compatibility/integration recipes for sophisticatedbackpacks. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Sophisticatedbackpacks / Crafting [------------------------<-//

    // Upgrade Base / Shaped
    event.shaped(
        "sophisticatedbackpacks:upgrade_base",
        [
            " I ",
            "PMP",
            " I "
        ], {
        "M": "create:andesite_alloy",
        "I": "create:iron_sheet",
        "P": "#minecraft:planks"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_upgrade_base");

    //->------------------------]  Tier 2 / Sophisticatedbackpacks / Crafting [------------------------<-//

    // Pickup Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:pickup_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "create:chute",
        "E": "minecraft:hopper"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_pickup_upgrade");

    // Filter Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:filter_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "create:filter",
        "E": "minecraft:paper"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_filter_upgrade");

    // Feeding Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:feeding_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "create:andesite_funnel",
        "E": "minecraft:golden_carrot"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_feeding_upgrade");

    // Pump Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:pump_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "create:mechanical_pump",
        "E": "create:mechanical_pump"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_pump_upgrade");

    // Copper Backpack / Wrapped
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedbackpacks:backpack"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "minecraft:copper_ingot"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:copper_backpack",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:copper_backpack"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_copper_backpack");

    // Iron Backpack / Wrapped
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedbackpacks:copper_backpack"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "create:iron_sheet"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:iron_backpack",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:iron_backpack"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_iron_backpack");

    //->------------------------]  Tier 3 / Sophisticatedbackpacks / Crafting [------------------------<-//

    // Void Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:void_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "kubejs:tk3_precision_machine",
        "E": "minecraft:lava_bucket"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_void_upgrade");

    // Compacting Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:compacting_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "kubejs:tk3_precision_machine",
        "E": "create:mechanical_press"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_compacting_upgrade");

    // Stonecutter Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:stonecutter_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "kubejs:tk3_precision_machine",
        "E": "minecraft:stonecutter"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_stonecutter_upgrade");

    // Crafting Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:crafting_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "kubejs:tk3_precision_machine",
        "E": "minecraft:crafting_table"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_crafting_upgrade");

    // Magnet Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:magnet_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "kubejs:tk3_precision_machine",
        "E": "minecraft:iron_ingot"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_magnet_upgrade");

    // Advanced Compacting Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:compacting_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_compacting_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_compacting_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_compacting_upgrade");

    // Advanced Deposit Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:deposit_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_deposit_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_deposit_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_deposit_upgrade");

    // Advanced Feeding Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:feeding_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_feeding_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_feeding_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_feeding_upgrade");

    // Advanced Filter Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:filter_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_filter_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_filter_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_filter_upgrade");

    // Advanced Jukebox Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:jukebox_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_jukebox_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_jukebox_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_jukebox_upgrade");

    // Advanced Magnet Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:magnet_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_magnet_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_magnet_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_magnet_upgrade");

    // Advanced Mob Catcher Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:mob_catcher_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_mob_catcher_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_mob_catcher_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_mob_catcher_upgrade");

    // Advanced Pickup Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:pickup_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_pickup_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_pickup_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_pickup_upgrade");

    // Advanced Refill Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:refill_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_refill_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_refill_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_refill_upgrade");

    // Advanced Restock Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:restock_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_restock_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_restock_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_restock_upgrade");

    // Advanced Tool Swapper Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:tool_swapper_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_tool_swapper_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_tool_swapper_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_tool_swapper_upgrade");

    // Advanced Void Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:void_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_void_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_void_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_void_upgrade");

    // Stack Upgrade Tier 1 / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " M ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:upgrade_base"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "M": {
                "item": "minecraft:gold_ingot"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:stack_upgrade_tier_1",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:stack_upgrade_tier_1"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_stack_upgrade_tier_1");

    // Gold Backpack / Wrapped
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedbackpacks:iron_backpack"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "M": {
                "item": "minecraft:gold_ingot"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:gold_backpack",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:gold_backpack"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_gold_backpack");

    //->------------------------]  Tier 4 / Sophisticatedbackpacks / Crafting [------------------------<-//

    // Xp Pump Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:xp_pump_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "create:fluid_pipe",
        "E": "minecraft:experience_bottle"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_xp_pump_upgrade");

    // Alchemy Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:alchemy_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "ars_nouveau:source_gem",
        "E": "minecraft:brewing_stand"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_alchemy_upgrade");

    // Smelting Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:smelting_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "create:encased_fan",
        "E": "minecraft:furnace"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_smelting_upgrade");

    // Smoking Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:smoking_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "create:encased_fan",
        "E": "minecraft:smoker"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_smoking_upgrade");

    // Blasting Upgrade / Shaped
    event.shaped(
        "sophisticatedbackpacks:blasting_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedbackpacks:upgrade_base",
        "F": "create:blaze_burner",
        "E": "minecraft:blast_furnace"
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_blasting_upgrade");

    // Advanced Alchemy Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:alchemy_upgrade"
            },
            "F": {
                "item": "create:precision_mechanism"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_alchemy_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_alchemy_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_alchemy_upgrade");

    // Advanced Pump Upgrade / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " R ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:pump_upgrade"
            },
            "F": {
                "item": "create:precision_mechanism"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:advanced_pump_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:advanced_pump_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_pump_upgrade");

    // Stack Upgrade Tier 2 / Wrapped
    event.custom({
        "type": "sophisticatedcore:upgrade_next_tier",
        "category": "misc",
        "pattern": [
            " M ",
            " U ",
            " F "
        ],
        "key": {
            "U": {
                "item": "sophisticatedbackpacks:stack_upgrade_tier_1"
            },
            "F": {
                "item": "mekanism:steel_casing"
            },
            "M": {
                "item": "mekanism:alloy_infused"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:stack_upgrade_tier_2",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:stack_upgrade_tier_2"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_stack_upgrade_tier_2");

    // Diamond Backpack / Wrapped
    event.custom({
        "type": "sophisticatedbackpacks:backpack_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedbackpacks:gold_backpack"
            },
            "F": {
                "item": "mekanism:steel_casing"
            },
            "M": {
                "item": "minecraft:diamond"
            }
        },
        "result": {
            "id": "sophisticatedbackpacks:diamond_backpack",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedbackpacks:diamond_backpack"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedbackpacks_diamond_backpack");
});
