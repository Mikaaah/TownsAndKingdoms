// priority: 0
// TK3 compatibility/integration recipes for create_dragons_plus. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 2 / create_dragons_plus / Native processing & construction [------------------------<-//

    // Fluid Hatch / Native
    event.custom({
        "neoforge:conditions": [{
            "type": "create_dragons_plus:config_feature",
            "feature": "create_dragons_plus:block/fluid_hatch"
        }],
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [{
            "tag": "c:ingots/copper"
        }, {
            "item": "create:item_drain"
        }],
        "result": {
            "count": 1,
            "id": "create_dragons_plus:fluid_hatch"
        }
    })
        .id("kubejs:tk3/addons/create_dragons_plus_crafting_fluid_hatch");

    // Blue Ice / Native
    event.custom({
        "type": "create_dragons_plus:freezing",
        "ingredients": [{
            "item": "minecraft:packed_ice"
        }],
        "results": [{
            "id": "minecraft:blue_ice"
        }]
    })
        .id("kubejs:tk3/addons/create_dragons_plus_freezing_blue_ice_from_packed_ice");

    // Breeze Rod / Native
    event.custom({
        "type": "create_dragons_plus:freezing",
        "ingredients": [{
            "item": "minecraft:blaze_rod"
        }],
        "results": [{
            "id": "minecraft:breeze_rod"
        }]
    })
        .id("kubejs:tk3/addons/create_dragons_plus_freezing_breeze_rod_from_blaze_rod");

    // Packed Ice / Native
    event.custom({
        "type": "create_dragons_plus:freezing",
        "ingredients": [{
            "item": "minecraft:ice"
        }],
        "results": [{
            "id": "minecraft:packed_ice"
        }]
    })
        .id("kubejs:tk3/addons/create_dragons_plus_freezing_packed_ice_from_ice");

    //->------------------------]  Tier 3 / create_dragons_plus / Native processing & construction [------------------------<-//

    // Blaze Upgrade Smithing Template / Native
    event.custom({
        "neoforge:conditions": [{
            "type": "create_dragons_plus:config_feature",
            "feature": "create_dragons_plus:item/blaze_upgrade_smithing_template"
        }],
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "b": {
                "item": "minecraft:blaze_rod"
            },
            "n": {
                "item": "minecraft:netherrack"
            },
            "t": {
                "item": "create_dragons_plus:blaze_upgrade_smithing_template"
            }
        },
        "pattern": [
            "btb",
            "bnb",
            "bbb"
        ],
        "result": {
            "count": 2,
            "id": "create_dragons_plus:blaze_upgrade_smithing_template"
        }
    })
        .id(
            "kubejs:tk3/addons/create_dragons_plus_crafting_blaze_upgrade_smithing_template");

    // Fragile Fluid Tank / Native
    event.custom({
        "neoforge:conditions": [{
            "type": "create_dragons_plus:config_feature",
            "feature": "create_dragons_plus:fluid/fragile_fluid_tank"
        }, {
            "type": "neoforge:mod_loaded",
            "modid": "simulated"
        }],
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "g": {
                "item": "minecraft:gold_ingot"
            },
            "n": {
                "item": "minecraft:barrel"
            },
            "t": {
                "item": "create:copper_sheet"
            }
        },
        "pattern": [
            " t ",
            "gng",
            " t "
        ],
        "result": {
            "count": 1,
            "id": "create_dragons_plus:fragile_fluid_tank"
        }
    })
        .id("kubejs:tk3/addons/create_dragons_plus_crafting_fragile_fluid_tank");

    // Levitite Fragile Fluid Tank / Native
    event.custom({
        "neoforge:conditions": [{
            "type": "create_dragons_plus:config_feature",
            "feature": "create_dragons_plus:fluid/fragile_fluid_tank"
        }, {
            "type": "neoforge:mod_loaded",
            "modid": "simulated"
        }, {
            "type": "neoforge:mod_loaded",
            "modid": "aeronautics"
        }],
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "l": {
                "item": "create_dragons_plus:fragile_fluid_tank"
            },
            "t": {
                "item": "aeronautics:levitite_blend_bucket"
            }
        },
        "pattern": [
            "lll",
            "ltl",
            "lll"
        ],
        "result": {
            "count": 8,
            "id": "create_dragons_plus:levitite_fragile_fluid_tank"
        }
    })
        .id("kubejs:tk3/addons/create_dragons_plus_crafting_levitite_fragile_fluid_tank");

    //->------------------------]  Tier 5 / create_dragons_plus / Native processing & construction [------------------------<-//

    // Glass Bottle / Native
    event.custom({
        "neoforge:conditions": [{
            "type": "create_dragons_plus:config_feature",
            "feature": "create_dragons_plus:fluid/dragon_breath"
        }],
        "type": "create:emptying",
        "ingredients": [{
            "item": "minecraft:dragon_breath"
        }],
        "results": [{
            "id": "minecraft:glass_bottle"
        }, {
            "amount": 250,
            "id": "create_dragons_plus:dragon_breath"
        }]
    })
        .id("kubejs:tk3/addons/create_dragons_plus_emptying_dragon_breath");

    // Chorus Fruit / Native
    event.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [{
            "item": "minecraft:apple"
        }],
        "results": [{
            "id": "minecraft:chorus_fruit"
        }]
    })
        .id("kubejs:tk3/addons/create_dragons_plus_ending_chorus_fruit_from_apple");

    // End Stone Brick Slab / Native
    event.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [{
            "item": "minecraft:stone_brick_slab"
        }],
        "results": [{
            "id": "minecraft:end_stone_brick_slab"
        }]
    })
        .id(
            "kubejs:tk3/addons/create_dragons_plus_ending_end_stone_brick_slab_from_stone_brick_slab");

    // End Stone Brick Stairs / Native
    event.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [{
            "item": "minecraft:stone_brick_stairs"
        }],
        "results": [{
            "id": "minecraft:end_stone_brick_stairs"
        }]
    })
        .id(
            "kubejs:tk3/addons/create_dragons_plus_ending_end_stone_brick_stairs_from_stone_brick_stairs");

    // End Stone Brick Wall / Native
    event.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [{
            "item": "minecraft:stone_brick_wall"
        }],
        "results": [{
            "id": "minecraft:end_stone_brick_wall"
        }]
    })
        .id(
            "kubejs:tk3/addons/create_dragons_plus_ending_end_stone_brick_wall_from_stone_brick_wall");

    // End Stone Bricks / Native
    event.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [{
            "item": "minecraft:stone_bricks"
        }],
        "results": [{
            "id": "minecraft:end_stone_bricks"
        }]
    })
        .id(
            "kubejs:tk3/addons/create_dragons_plus_ending_end_stone_bricks_from_stone_bricks");

    // End Stone / Native
    event.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [{
            "item": "minecraft:cobblestone"
        }],
        "results": [{
            "id": "minecraft:end_stone"
        }]
    })
        .id("kubejs:tk3/addons/create_dragons_plus_ending_end_stone_from_cobblestone");

    // Phantom Membrane / Native
    event.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [{
            "tag": "c:leathers"
        }],
        "results": [{
            "id": "minecraft:phantom_membrane"
        }]
    })
        .id("kubejs:tk3/addons/create_dragons_plus_ending_phantom_membrane_from_leathers");

    // Dragon Breath / Native
    event.custom({
        "neoforge:conditions": [{
            "type": "create_dragons_plus:config_feature",
            "feature": "create_dragons_plus:fluid/dragon_breath"
        }],
        "type": "create:filling",
        "ingredients": [{
            "item": "minecraft:glass_bottle"
        }, {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "create_dragons_plus:dragon_breath"
        }],
        "results": [{
            "id": "minecraft:dragon_breath"
        }]
    })
        .id("kubejs:tk3/addons/create_dragons_plus_filling_dragon_breath");
});
