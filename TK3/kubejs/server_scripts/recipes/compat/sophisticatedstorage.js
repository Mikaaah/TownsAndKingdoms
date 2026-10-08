// priority: 0
// TK3 compatibility/integration recipes for sophisticatedstorage. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Sophisticatedstorage / Crafting [------------------------<-//

    // Upgrade Base / Shaped
    event.shaped(
        "sophisticatedstorage:upgrade_base",
        [
            " I ",
            "PMP",
            " I "
        ], {
        "M": "create:andesite_alloy",
        "I": "create:iron_sheet",
        "P": "#minecraft:planks"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_upgrade_base");

    //->------------------------]  Tier 2 / Sophisticatedstorage / Crafting [------------------------<-//

    // Pickup Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:pickup_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "create:chute",
        "E": "minecraft:hopper"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_pickup_upgrade");

    // Filter Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:filter_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "create:filter",
        "E": "minecraft:paper"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_filter_upgrade");

    // Feeding Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:feeding_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "create:andesite_funnel",
        "E": "minecraft:golden_carrot"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_feeding_upgrade");

    // Pump Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:pump_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "create:mechanical_pump",
        "E": "create:mechanical_pump"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_pump_upgrade");

    // Copper Chest / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:chest"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "minecraft:copper_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:copper_chest",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:copper_chest"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_copper_chest");

    // Iron Chest / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:copper_chest"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "create:iron_sheet"
            }
        },
        "result": {
            "id": "sophisticatedstorage:iron_chest",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:iron_chest"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_iron_chest");

    // Copper Barrel / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:barrel"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "minecraft:copper_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:copper_barrel",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:copper_barrel"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_copper_barrel");

    // Iron Barrel / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:copper_barrel"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "create:iron_sheet"
            }
        },
        "result": {
            "id": "sophisticatedstorage:iron_barrel",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:iron_barrel"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_iron_barrel");

    // Limited Copper Barrel 1 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_barrel_1"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "minecraft:copper_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_copper_barrel_1",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_copper_barrel_1"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_1");

    // Limited Iron Barrel 1 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_copper_barrel_1"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "create:iron_sheet"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_iron_barrel_1",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_iron_barrel_1"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_1");

    // Limited Copper Barrel 2 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_barrel_2"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "minecraft:copper_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_copper_barrel_2",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_copper_barrel_2"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_2");

    // Limited Iron Barrel 2 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_copper_barrel_2"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "create:iron_sheet"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_iron_barrel_2",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_iron_barrel_2"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_2");

    // Limited Copper Barrel 3 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_barrel_3"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "minecraft:copper_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_copper_barrel_3",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_copper_barrel_3"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_3");

    // Limited Iron Barrel 3 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_copper_barrel_3"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "create:iron_sheet"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_iron_barrel_3",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_iron_barrel_3"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_3");

    // Limited Copper Barrel 4 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_barrel_4"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "minecraft:copper_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_copper_barrel_4",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_copper_barrel_4"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_4");

    // Limited Iron Barrel 4 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_copper_barrel_4"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "create:iron_sheet"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_iron_barrel_4",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_iron_barrel_4"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_4");

    // Copper Shulker Box / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:shulker_box"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "minecraft:copper_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:copper_shulker_box",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:copper_shulker_box"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_copper_shulker_box");

    // Iron Shulker Box / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:copper_shulker_box"
            },
            "F": {
                "item": "create:andesite_casing"
            },
            "M": {
                "item": "create:iron_sheet"
            }
        },
        "result": {
            "id": "sophisticatedstorage:iron_shulker_box",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:iron_shulker_box"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_iron_shulker_box");

    // Basic To Copper Tier Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:basic_to_copper_tier_upgrade",
        [
            "MMM",
            "MFM",
            "MBM"
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "create:andesite_casing",
        "M": "minecraft:copper_ingot"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_basic_to_copper_tier_upgrade");

    // Copper To Iron Tier Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:copper_to_iron_tier_upgrade",
        [
            "MMM",
            "MFM",
            "MBM"
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "create:andesite_casing",
        "M": "create:iron_sheet"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_copper_to_iron_tier_upgrade");

    //->------------------------]  Tier 3 / Sophisticatedstorage / Crafting [------------------------<-//

    // Void Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:void_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "kubejs:tk3_precision_machine",
        "E": "minecraft:lava_bucket"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_void_upgrade");

    // Compacting Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:compacting_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "kubejs:tk3_precision_machine",
        "E": "create:mechanical_press"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_compacting_upgrade");

    // Stonecutter Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:stonecutter_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "kubejs:tk3_precision_machine",
        "E": "minecraft:stonecutter"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_stonecutter_upgrade");

    // Crafting Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:crafting_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "kubejs:tk3_precision_machine",
        "E": "minecraft:crafting_table"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_crafting_upgrade");

    // Magnet Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:magnet_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "kubejs:tk3_precision_machine",
        "E": "minecraft:iron_ingot"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_magnet_upgrade");

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
                "item": "sophisticatedstorage:compacting_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedstorage:advanced_compacting_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:advanced_compacting_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_advanced_compacting_upgrade");

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
                "item": "sophisticatedstorage:feeding_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedstorage:advanced_feeding_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:advanced_feeding_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_advanced_feeding_upgrade");

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
                "item": "sophisticatedstorage:filter_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedstorage:advanced_filter_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:advanced_filter_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_advanced_filter_upgrade");

    // Advanced Hopper Upgrade / Wrapped
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
                "item": "sophisticatedstorage:hopper_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedstorage:advanced_hopper_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:advanced_hopper_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_advanced_hopper_upgrade");

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
                "item": "sophisticatedstorage:jukebox_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedstorage:advanced_jukebox_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:advanced_jukebox_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_advanced_jukebox_upgrade");

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
                "item": "sophisticatedstorage:magnet_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedstorage:advanced_magnet_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:advanced_magnet_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_advanced_magnet_upgrade");

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
                "item": "sophisticatedstorage:pickup_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedstorage:advanced_pickup_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:advanced_pickup_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_advanced_pickup_upgrade");

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
                "item": "sophisticatedstorage:void_upgrade"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedstorage:advanced_void_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:advanced_void_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_advanced_void_upgrade");

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
                "item": "sophisticatedstorage:upgrade_base"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "M": {
                "item": "minecraft:gold_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:stack_upgrade_tier_1",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:stack_upgrade_tier_1"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_stack_upgrade_tier_1");

    // Gold Chest / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:iron_chest"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "M": {
                "item": "minecraft:gold_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:gold_chest",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:gold_chest"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_gold_chest");

    // Gold Barrel / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:iron_barrel"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "M": {
                "item": "minecraft:gold_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:gold_barrel",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:gold_barrel"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_gold_barrel");

    // Limited Gold Barrel 1 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_iron_barrel_1"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "M": {
                "item": "minecraft:gold_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_gold_barrel_1",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_gold_barrel_1"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_1");

    // Limited Gold Barrel 2 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_iron_barrel_2"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "M": {
                "item": "minecraft:gold_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_gold_barrel_2",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_gold_barrel_2"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_2");

    // Limited Gold Barrel 3 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_iron_barrel_3"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "M": {
                "item": "minecraft:gold_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_gold_barrel_3",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_gold_barrel_3"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_3");

    // Limited Gold Barrel 4 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_iron_barrel_4"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "M": {
                "item": "minecraft:gold_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_gold_barrel_4",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_gold_barrel_4"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_4");

    // Gold Shulker Box / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:iron_shulker_box"
            },
            "F": {
                "item": "kubejs:tk3_precision_machine"
            },
            "M": {
                "item": "minecraft:gold_ingot"
            }
        },
        "result": {
            "id": "sophisticatedstorage:gold_shulker_box",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:gold_shulker_box"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_gold_shulker_box");

    // Iron To Gold Tier Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:iron_to_gold_tier_upgrade",
        [
            "MMM",
            "MFM",
            "MBM"
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "kubejs:tk3_precision_machine",
        "M": "minecraft:gold_ingot"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_iron_to_gold_tier_upgrade");

    // Controller / Shapeless
    event.shapeless(
        "sophisticatedstorage:controller",
        [
            "kubejs:tk3_precision_machine",
            "minecraft:comparator",
            "minecraft:chest"
        ])
        .id("kubejs:tk3/storage/sophisticatedstorage_controller");

    // Storage Link / Shapeless
    event.shapeless(
        "sophisticatedstorage:storage_link",
        [
            "create:precision_mechanism",
            "sophisticatedstorage:upgrade_base",
            "minecraft:ender_pearl"
        ])
        .id("kubejs:tk3/storage/sophisticatedstorage_storage_link");

    // Storage Input / Shapeless
    event.shapeless(
        "sophisticatedstorage:storage_input",
        [
            "create:precision_mechanism",
            "sophisticatedstorage:upgrade_base",
            "minecraft:hopper"
        ])
        .id("kubejs:tk3/storage/sophisticatedstorage_storage_input");

    // Storage Output / Shapeless
    event.shapeless(
        "sophisticatedstorage:storage_output",
        [
            "create:precision_mechanism",
            "sophisticatedstorage:upgrade_base",
            "create:brass_funnel"
        ])
        .id("kubejs:tk3/storage/sophisticatedstorage_storage_output");

    // Storage Io / Shapeless
    event.shapeless(
        "sophisticatedstorage:storage_io",
        [
            "create:precision_mechanism",
            "sophisticatedstorage:upgrade_base",
            "create:brass_tunnel"
        ])
        .id("kubejs:tk3/storage/sophisticatedstorage_storage_io");

    //->------------------------]  Tier 4 / Sophisticatedstorage / Crafting [------------------------<-//

    // Xp Pump Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:xp_pump_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "create:fluid_pipe",
        "E": "minecraft:experience_bottle"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_xp_pump_upgrade");

    // Alchemy Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:alchemy_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "ars_nouveau:source_gem",
        "E": "minecraft:brewing_stand"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_alchemy_upgrade");

    // Smelting Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:smelting_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "create:encased_fan",
        "E": "minecraft:furnace"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_smelting_upgrade");

    // Smoking Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:smoking_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "create:encased_fan",
        "E": "minecraft:smoker"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_smoking_upgrade");

    // Blasting Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:blasting_upgrade",
        [
            " E ",
            " B ",
            " F "
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "create:blaze_burner",
        "E": "minecraft:blast_furnace"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_blasting_upgrade");

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
                "item": "sophisticatedstorage:alchemy_upgrade"
            },
            "F": {
                "item": "create:precision_mechanism"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedstorage:advanced_alchemy_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:advanced_alchemy_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_advanced_alchemy_upgrade");

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
                "item": "sophisticatedstorage:pump_upgrade"
            },
            "F": {
                "item": "create:precision_mechanism"
            },
            "R": {
                "item": "minecraft:redstone"
            }
        },
        "result": {
            "id": "sophisticatedstorage:advanced_pump_upgrade",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:advanced_pump_upgrade"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_advanced_pump_upgrade");

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
                "item": "sophisticatedstorage:stack_upgrade_tier_1"
            },
            "F": {
                "item": "mekanism:steel_casing"
            },
            "M": {
                "item": "mekanism:alloy_infused"
            }
        },
        "result": {
            "id": "sophisticatedstorage:stack_upgrade_tier_2",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:stack_upgrade_tier_2"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_stack_upgrade_tier_2");

    // Diamond Chest / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:gold_chest"
            },
            "F": {
                "item": "mekanism:steel_casing"
            },
            "M": {
                "item": "minecraft:diamond"
            }
        },
        "result": {
            "id": "sophisticatedstorage:diamond_chest",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:diamond_chest"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_diamond_chest");

    // Diamond Barrel / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:gold_barrel"
            },
            "F": {
                "item": "mekanism:steel_casing"
            },
            "M": {
                "item": "minecraft:diamond"
            }
        },
        "result": {
            "id": "sophisticatedstorage:diamond_barrel",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:diamond_barrel"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_diamond_barrel");

    // Limited Diamond Barrel 1 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_gold_barrel_1"
            },
            "F": {
                "item": "mekanism:steel_casing"
            },
            "M": {
                "item": "minecraft:diamond"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_diamond_barrel_1",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_diamond_barrel_1"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_1");

    // Limited Diamond Barrel 2 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_gold_barrel_2"
            },
            "F": {
                "item": "mekanism:steel_casing"
            },
            "M": {
                "item": "minecraft:diamond"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_diamond_barrel_2",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_diamond_barrel_2"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_2");

    // Limited Diamond Barrel 3 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_gold_barrel_3"
            },
            "F": {
                "item": "mekanism:steel_casing"
            },
            "M": {
                "item": "minecraft:diamond"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_diamond_barrel_3",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_diamond_barrel_3"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_3");

    // Limited Diamond Barrel 4 / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:limited_gold_barrel_4"
            },
            "F": {
                "item": "mekanism:steel_casing"
            },
            "M": {
                "item": "minecraft:diamond"
            }
        },
        "result": {
            "id": "sophisticatedstorage:limited_diamond_barrel_4",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:limited_diamond_barrel_4"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_4");

    // Diamond Shulker Box / Wrapped
    event.custom({
        "type": "sophisticatedstorage:storage_tier_upgrade",
        "category": "misc",
        "pattern": [
            "MFM",
            "MSM",
            "MMM"
        ],
        "key": {
            "S": {
                "item": "sophisticatedstorage:gold_shulker_box"
            },
            "F": {
                "item": "mekanism:steel_casing"
            },
            "M": {
                "item": "minecraft:diamond"
            }
        },
        "result": {
            "id": "sophisticatedstorage:diamond_shulker_box",
            "count": 1
        },
        "neoforge:conditions": [{
            "type": "sophisticatedcore:item_enabled",
            "itemRegistryName": "sophisticatedstorage:diamond_shulker_box"
        }]
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_diamond_shulker_box");

    // Gold To Diamond Tier Upgrade / Shaped
    event.shaped(
        "sophisticatedstorage:gold_to_diamond_tier_upgrade",
        [
            "MMM",
            "MFM",
            "MBM"
        ], {
        "B": "sophisticatedstorage:upgrade_base",
        "F": "mekanism:steel_casing",
        "M": "minecraft:diamond"
    })
        .id("kubejs:tk3/storage/sophisticatedstorage_gold_to_diamond_tier_upgrade");

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
            "kubejs:tk3/addons/sophisticatedstorage_storage_stack_upgrade_tier_3_from_backpack_stack_upgrade_tier_2");

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
                "item": "minecraft:shulker_shell"
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
            "kubejs:tk3/addons/sophisticatedstorage_netherite_shulker_from_netherite_chest");

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
            "kubejs:tk3/addons/sophisticatedstorage_storage_stack_upgrade_tier_4_from_backpack_stack_upgrade_tier_3");

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
            "kubejs:tk3/addons/sophisticatedstorage_backpack_stack_upgrade_tier_3_from_storage_stack_upgrade_tier_4");

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
            "kubejs:tk3/addons/sophisticatedstorage_backpack_stack_upgrade_tier_4_from_storage_stack_upgrade_tier_5");

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
            "kubejs:tk3/addons/sophisticatedstorage_storage_stack_upgrade_tier_5_from_backpack_stack_upgrade_tier_4");
});
