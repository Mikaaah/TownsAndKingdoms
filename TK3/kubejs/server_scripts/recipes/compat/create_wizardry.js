// priority: 0
// TK3 compatibility/integration recipes for create_wizardry. Split from former monolithic generated files.
ServerEvents.recipes(event => {
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
            "item": "create_wizardry:arcane_sheet"
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
                "item": "create:fluid_pipe"
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
                "item": "create:fluid_pipe"
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
            "item": "create:fluid_pipe"
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
            "item": "create:fluid_pipe"
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
            "item": "create:mechanical_pump"
        }, {
            "item": "create_wizardry:arcane_sheet"
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
            "item": "create:mechanical_pump"
        }, {
            "item": "irons_spellbooks:arcane_essence"
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
            "item": "create:mechanical_pump"
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
            "item": "create:mechanical_pump"
        }, {
            "item": "create_wizardry:arcane_sheet"
        }],
        "results": [{
            "id": "create_wizardry:arcane_pump"
        }]
    })
        .id("kubejs:tk3/addons/create_wizardry_deploying_arcane_pump");

    //->------------------------]  Tier 6 / create_wizardry / Devices [------------------------<-//

    // Smart Arcane Pipe / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "B": {
                "item": "kubejs:tk3_calculation_mechanism"
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
            "item": "kubejs:tk3_calculation_mechanism"
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
            "item": "kubejs:tk3_calculation_mechanism"
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
                "item": "kubejs:tk3_calculation_mechanism"
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
                "item": "kubejs:tk3_calculation_mechanism"
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

    //->------------------------]  Tier 7 / create_wizardry / Devices [------------------------<-//

    // Blaze Caster / Deploying
    event.recipes.create.deploying(
        [
            "create_wizardry:blaze_caster"
        ],
        [
            "kubejs:tk3_chemical_mechanism",
            "create:blaze_burner"
        ])
        .id("kubejs:tk3/addons/create_wizardry_blaze_caster");
});
