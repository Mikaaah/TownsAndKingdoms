// priority: 0
// TK3 compatibility/integration recipes for chipped. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / chipped / Native processing & construction [------------------------<-//

    // Alchemy Bench / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "#": {
                "item": "kubejs:tk3_rotation_machine"
            },
            "B": {
                "item": "minecraft:brewing_stand"
            },
            "E": {
                "item": "minecraft:enchanting_table"
            },
            "S": {
                "tag": "minecraft:wooden_slabs"
            }
        },
        "pattern": [
            " B ",
            "S#S",
            "SES"
        ],
        "result": {
            "count": 1,
            "id": "chipped:alchemy_bench"
        }
    })
        .id("kubejs:tk3/addons/minecraft_workbench_alchemy_bench");

    // Botanist Workbench / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "#": {
                "item": "kubejs:tk3_rotation_machine"
            },
            "/": {
                "item": "minecraft:stick"
            },
            "F": {
                "item": "minecraft:flower_pot"
            },
            "S": {
                "tag": "minecraft:wooden_slabs"
            }
        },
        "pattern": [
            "FFF",
            "S#S",
            "/ /"
        ],
        "result": {
            "count": 1,
            "id": "chipped:botanist_workbench"
        }
    })
        .id("kubejs:tk3/addons/minecraft_workbench_botanist_workbench");

    // Carpenters Table / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "#": {
                "item": "kubejs:tk3_rotation_machine"
            },
            "A": {
                "item": "minecraft:iron_axe"
            },
            "I": {
                "item": "minecraft:iron_ingot"
            },
            "P": {
                "tag": "minecraft:planks"
            }
        },
        "pattern": [
            "A I",
            "P#P",
            "PPP"
        ],
        "result": {
            "count": 1,
            "id": "chipped:carpenters_table"
        }
    })
        .id("kubejs:tk3/addons/minecraft_workbench_carpenters_table");

    // Glassblower / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "#": {
                "item": "kubejs:tk3_rotation_machine"
            },
            "B": {
                "item": "minecraft:bricks"
            },
            "F": {
                "item": "minecraft:blast_furnace"
            },
            "G": {
                "item": "minecraft:glass"
            },
            "I": {
                "item": "minecraft:iron_ingot"
            }
        },
        "pattern": [
            "IGI",
            "B#B",
            "BFB"
        ],
        "result": {
            "count": 1,
            "id": "chipped:glassblower"
        }
    })
        .id("kubejs:tk3/addons/minecraft_workbench_glassblower");

    // Mason Table / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "#": {
                "item": "kubejs:tk3_rotation_machine"
            },
            "B": {
                "item": "minecraft:brick"
            },
            "I": {
                "item": "minecraft:iron_ingot"
            },
            "L": {
                "tag": "minecraft:logs"
            }
        },
        "pattern": [
            "BBB",
            "I#I",
            "LLL"
        ],
        "result": {
            "count": 1,
            "id": "chipped:mason_table"
        }
    })
        .id("kubejs:tk3/addons/minecraft_workbench_mason_table");

    //->------------------------]  Tier 3 / chipped / Native processing & construction [------------------------<-//

    // Tinkering Table / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "#": {
                "item": "kubejs:tk3_rotation_machine"
            },
            "I": {
                "item": "minecraft:iron_ingot"
            },
            "L": {
                "tag": "minecraft:logs"
            },
            "R": {
                "item": "minecraft:redstone"
            },
            "T": {
                "item": "minecraft:redstone_torch"
            }
        },
        "pattern": [
            "TRT",
            "I#I",
            "L L"
        ],
        "result": {
            "count": 1,
            "id": "chipped:tinkering_table"
        }
    })
        .id("kubejs:tk3/addons/minecraft_workbench_tinkering_table");
});
