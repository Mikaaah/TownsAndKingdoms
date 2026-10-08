// priority: 0
// TK3 compatibility/integration recipes for createaddition. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 4 / createaddition / Devices [------------------------<-//

    // Connector / Native
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [{
            "item": "create:copper_sheet"
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

    //->------------------------]  Tier 6 / createaddition / Devices [------------------------<-//

    // Large Connector / Native
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [{
            "item": "createaddition:connector"
        }, {
            "item": "createaddition:connector"
        }, {
            "item": "create:brass_sheet"
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
                "item": "create:brass_sheet"
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
            "item": "create:electron_tube"
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
                "item": "kubejs:tk3_calculation_mechanism"
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

    //->------------------------]  Tier 7 / createaddition / Devices [------------------------<-//

    // Portable Energy Interface / Native
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "redstone",
        "ingredients": [{
            "item": "kubejs:tk3_chemical_mechanism"
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
                "item": "kubejs:tk3_chemical_mechanism"
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
});
