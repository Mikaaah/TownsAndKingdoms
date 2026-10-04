// priority: 0
// Maintained recipe source; docs/progression_manifest.json is a generated inspection catalogue.
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    //->------------------------]  Tier 4 / Network construction & storage [------------------------<-//

    // Tiny Tnt / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "ae2:all_quartz_dust"
                },
                "b": {
                    "item": "minecraft:gunpowder"
                }
            },
            "pattern": [
                "ab",
                "ba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:tiny_tnt"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_misc_tiny_tnt");

    // Fluix Pearl / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:dusts/fluix"
                },
                "b": {
                    "tag": "ae2:all_fluix"
                },
                "c": {
                    "tag": "c:ender_pearls"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:fluix_pearl"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_misc_fluixpearl");

    // Portable Fluid Cell 1K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:chest"
                }, {
                    "item": "ae2:cell_component_1k"
                }, {
                    "item": "ae2:energy_cell"
                }, {
                    "item": "ae2:fluid_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "ae2:portable_fluid_cell_1k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_portable_fluid_cell_1k");

    // Charged Staff / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:charged_certus_quartz_crystal"
                },
                "b": {
                    "tag": "c:ingots/iron"
                }
            },
            "pattern": [
                "a  ",
                " b ",
                "  b"
            ],
            "result": {
                "count": 1,
                "id": "ae2:charged_staff"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_misctools_charged_staff");

    // Memory Card / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:calculation_processor"
                },
                "b": {
                    "tag": "c:ingots/iron"
                },
                "c": {
                    "tag": "c:ingots/gold"
                },
                "d": {
                    "tag": "c:dusts/redstone"
                }
            },
            "pattern": [
                "abb",
                "cdc"
            ],
            "result": {
                "count": 1,
                "id": "ae2:memory_card"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_network_memory_card");

    // Fluix Upgrade Smithing Template / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "minecraft:paper"
                }, {
                    "tag": "c:gems/fluix"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluix_upgrade_smithing_template"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_fluix_upgrade_smithing_template");

    // Network Tool / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "tag": "ae2:illuminated_panel"
                }, {
                    "tag": "c:chests/wooden"
                }, {
                    "tag": "ae2:quartz_wrench"
                }, {
                    "item": "ae2:calculation_processor"
                }],
            "result": {
                "count": 1,
                "id": "ae2:network_tool"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_network_tool");

    // Portable Item Cell 1K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:chest"
                }, {
                    "item": "ae2:cell_component_1k"
                }, {
                    "item": "ae2:energy_cell"
                }, {
                    "item": "ae2:item_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "ae2:portable_item_cell_1k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_portable_item_cell_1k");

    // View Cell / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:item_cell_housing"
                }, {
                    "tag": "ae2:all_certus_quartz"
                }],
            "result": {
                "count": 1,
                "id": "ae2:view_cell"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_view_cell_storage");

    // Item Storage Cell 1K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:item_cell_housing"
                }, {
                    "item": "ae2:cell_component_1k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:item_storage_cell_1k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_1k_storage");

    // Fluid Cell Housing / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "b b",
                "ccc"
            ],
            "result": {
                "count": 1,
                "id": "ae2:fluid_cell_housing"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_fluid_cell_housing");

    // Item Cell Housing / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "tag": "c:ingots/iron"
                },
                "d": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "b b",
                "cdc"
            ],
            "result": {
                "count": 1,
                "id": "ae2:item_cell_housing"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_item_cell_housing");

    // Fluid Storage Cell 1K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:fluid_cell_housing"
                }, {
                    "item": "ae2:cell_component_1k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluid_storage_cell_1k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_1k_storage");

    // Fluid Storage Cell 1K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "item": "ae2:cell_component_1k"
                },
                "d": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ddd"
            ],
            "result": {
                "count": 1,
                "id": "ae2:fluid_storage_cell_1k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_1k");

    // Item Storage Cell 1K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "item": "ae2:cell_component_1k"
                },
                "d": {
                    "tag": "c:ingots/iron"
                },
                "e": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ded"
            ],
            "result": {
                "count": 1,
                "id": "ae2:item_storage_cell_1k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_1k");

    // Cell Component 1K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:dusts/redstone"
                },
                "b": {
                    "tag": "ae2:all_certus_quartz"
                },
                "c": {
                    "item": "ae2:logic_processor"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:cell_component_1k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_item_storage_components_cell_1k_part");

    // View Cell / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "tag": "ae2:all_certus_quartz"
                },
                "d": {
                    "tag": "c:ingots/iron"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ddd"
            ],
            "result": {
                "count": 1,
                "id": "ae2:view_cell"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_view_cell");

    // Red Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/red"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:red_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_red");

    // Light Blue Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/light_blue"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:light_blue_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_light_blue");

    // Magenta Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/magenta"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:magenta_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_magenta");

    // Orange Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/orange"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:orange_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_orange");

    // White Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/white"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:white_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_white");

    // Brown Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/brown"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:brown_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_brown");

    // Blue Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/blue"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:blue_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_blue");

    // Purple Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/purple"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:purple_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_purple");

    // Pink Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/pink"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:pink_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_pink");

    // Orange Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/orange"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:orange_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_orange");

    // Fluix Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:quartz_fiber"
                }, {
                    "tag": "ae2:all_fluix"
                }, {
                    "tag": "ae2:all_fluix"
                }],
            "result": {
                "count": 4,
                "id": "ae2:fluix_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_fluix");

    // Green Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/green"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:green_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_green");

    // Yellow Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/yellow"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:yellow_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_yellow");

    // Gray Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/gray"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:gray_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_gray");

    // Pink Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/pink"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:pink_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_pink");

    // Orange Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/orange"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:orange_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_orange");

    // Lime Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/lime"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:lime_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_lime");

    // Lime Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/lime"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:lime_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_lime");

    // Cyan Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/cyan"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:cyan_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_cyan");

    // Yellow Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/yellow"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:yellow_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_yellow");

    // Red Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/red"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:red_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_red");

    // Pink Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/pink"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:pink_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_pink");

    // Black Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/black"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:black_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_black");

    // Pink Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/pink"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:pink_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_pink");

    // Light Gray Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/light_gray"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:light_gray_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_light_gray");

    // Blue Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/blue"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:blue_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_blue");

    // Light Gray Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/light_gray"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:light_gray_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_light_gray");

    // Yellow Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/yellow"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:yellow_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_yellow");

    // Red Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/red"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:red_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_red");

    // Red Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/red"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:red_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_red");

    // Blue Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/blue"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:blue_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_blue");

    // Magenta Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/magenta"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:magenta_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_magenta");

    // Lime Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/lime"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:lime_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_lime");

    // Cyan Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/cyan"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:cyan_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_cyan");

    // Fluix Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:fluix_covered_cable"
                }, {
                    "item": "ae2:fluix_covered_cable"
                }, {
                    "item": "ae2:fluix_covered_cable"
                }, {
                    "item": "ae2:fluix_covered_cable"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluix_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_fluix");

    // Purple Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/purple"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:purple_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_purple");

    // Blue Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/blue"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:blue_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_blue");

    // Fluix Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "type": "neoforge:difference",
                    "base": {
                        "tag": "ae2:smart_cable"
                    },
                    "subtracted": {
                        "item": "ae2:fluix_smart_cable"
                    }
                }, {
                    "tag": "ae2:can_remove_color"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluix_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_fluix_clean");

    // Purple Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/purple"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:purple_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_purple");

    // Green Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/green"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:green_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_green");

    // Fluix Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "tag": "minecraft:wool"
                }, {
                    "item": "ae2:fluix_glass_cable"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluix_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_fluix");

    // Gray Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/gray"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:gray_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_gray");

    // Light Gray Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/light_gray"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:light_gray_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_light_gray");

    // Yellow Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/yellow"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:yellow_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_yellow");

    // Fluix Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:fluix_covered_cable"
                }, {
                    "tag": "c:dusts/redstone"
                }, {
                    "tag": "c:dusts/glowstone"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluix_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_fluix");

    // Fluix Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "type": "neoforge:difference",
                    "base": {
                        "tag": "ae2:covered_dense_cable"
                    },
                    "subtracted": {
                        "item": "ae2:fluix_covered_dense_cable"
                    }
                }, {
                    "tag": "ae2:can_remove_color"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluix_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_fluix_clean");

    // Green Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/green"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:green_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_green");

    // Red Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/red"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:red_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_red");

    // Brown Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/brown"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:brown_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_brown");

    // Green Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/green"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:green_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_green");

    // Light Gray Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/light_gray"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:light_gray_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_light_gray");

    // Light Blue Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/light_blue"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:light_blue_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_light_blue");

    // Cyan Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/cyan"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:cyan_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_cyan");

    // Purple Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/purple"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:purple_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_purple");

    // Black Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/black"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:black_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_black");

    // Purple Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/purple"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:purple_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_purple");

    // Lime Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/lime"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:lime_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_lime");

    // Black Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/black"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:black_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_black");

    // Cyan Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/cyan"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:cyan_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_cyan");

    // Gray Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/gray"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:gray_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_gray");

    // Brown Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/brown"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:brown_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_brown");

    // Lime Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/lime"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:lime_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_lime");

    // Fluix Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "type": "neoforge:difference",
                    "base": {
                        "tag": "ae2:covered_cable"
                    },
                    "subtracted": {
                        "item": "ae2:fluix_covered_cable"
                    }
                }, {
                    "tag": "ae2:can_remove_color"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluix_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_fluix_clean");

    // Fluix Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "type": "neoforge:difference",
                    "base": {
                        "tag": "ae2:glass_cable"
                    },
                    "subtracted": {
                        "item": "ae2:fluix_glass_cable"
                    }
                }, {
                    "tag": "ae2:can_remove_color"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluix_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_fluix_clean");

    // Brown Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/brown"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:brown_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_brown");

    // Blue Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/blue"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:blue_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_blue");

    // Light Blue Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/light_blue"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:light_blue_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_light_blue");

    // Yellow Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/yellow"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:yellow_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_yellow");

    // Fluix Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:fluix_covered_dense_cable"
                }, {
                    "tag": "c:dusts/redstone"
                }, {
                    "tag": "c:dusts/glowstone"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluix_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_fluix");

    // Gray Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/gray"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:gray_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_gray");

    // Green Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/green"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:green_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_green");

    // White Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/white"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:white_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_white");

    // Orange Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/orange"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:orange_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_orange");

    // White Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/white"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:white_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_white");

    // Magenta Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/magenta"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:magenta_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_magenta");

    // White Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/white"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:white_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_white");

    // Black Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/black"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:black_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_black");

    // Brown Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/brown"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:brown_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_brown");

    // Light Gray Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/light_gray"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:light_gray_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_light_gray");

    // White Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/white"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:white_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_white");

    // Magenta Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/magenta"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:magenta_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_magenta");

    // Orange Glass Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_glass_cable"
                },
                "b": {
                    "tag": "c:dyes/orange"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:orange_glass_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_glass_orange");

    // Pink Smart Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_cable"
                },
                "b": {
                    "tag": "c:dyes/pink"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:pink_smart_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_smart_pink");

    // Light Blue Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/light_blue"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:light_blue_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_light_blue");

    // Magenta Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/magenta"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:magenta_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_magenta");

    // Fluix Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:fluix_smart_cable"
                }, {
                    "item": "ae2:fluix_smart_cable"
                }, {
                    "item": "ae2:fluix_smart_cable"
                }, {
                    "item": "ae2:fluix_smart_cable"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluix_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_from_smart");

    // Fluix Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "type": "neoforge:difference",
                    "base": {
                        "tag": "ae2:smart_dense_cable"
                    },
                    "subtracted": {
                        "item": "ae2:fluix_smart_dense_cable"
                    }
                }, {
                    "tag": "ae2:can_remove_color"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluix_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_fluix_clean");

    // Cyan Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/cyan"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:cyan_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_cyan");

    // Light Blue Smart Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_smart_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/light_blue"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:light_blue_smart_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_smart_light_blue");

    // Black Covered Dense Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_dense_cable"
                },
                "b": {
                    "tag": "c:dyes/black"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:black_covered_dense_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_dense_covered_black");

    // Gray Covered Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_covered_cable"
                },
                "b": {
                    "tag": "c:dyes/gray"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 8,
                "id": "ae2:gray_covered_cable"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cables_covered_gray");

    // Dark Monitor / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:monitor"
                }],
            "result": {
                "count": 1,
                "id": "ae2:dark_monitor"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_panels_dark_monitor");

    // Toggle Bus / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:dusts/redstone"
                },
                "b": {
                    "item": "ae2:fluix_glass_cable"
                },
                "c": {
                    "item": "minecraft:lever"
                }
            },
            "pattern": [
                " a ",
                "bcb",
                " a "
            ],
            "result": {
                "count": 1,
                "id": "ae2:toggle_bus"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_toggle_bus");

    // Monitor / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:semi_dark_monitor"
                }],
            "result": {
                "count": 1,
                "id": "ae2:monitor"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_panels_monitor");

    // Cable Energy Acceptor / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:energy_acceptor"
                }],
            "result": {
                "count": 1,
                "id": "ae2:cable_energy_acceptor"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_energy_acceptor");

    // Annihilation Plane / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "ae2:all_fluix"
                },
                "b": {
                    "tag": "c:ingots/iron"
                },
                "c": {
                    "item": "ae2:annihilation_core"
                }
            },
            "pattern": [
                "aaa",
                "bcb"
            ],
            "result": {
                "count": 1,
                "id": "ae2:annihilation_plane"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_annihilation_plane_alt");

    // Terminal / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:formation_core"
                }, {
                    "tag": "ae2:illuminated_panel"
                }, {
                    "item": "ae2:logic_processor"
                }, {
                    "item": "ae2:annihilation_core"
                }],
            "result": {
                "count": 1,
                "id": "ae2:terminal"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_terminals");

    // Level Emitter / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "minecraft:redstone_torch"
                }, {
                    "item": "ae2:calculation_processor"
                }],
            "result": {
                "count": 1,
                "id": "ae2:level_emitter"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_level_emitter");

    // Pattern Access Terminal / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "tag": "ae2:illuminated_panel"
                }, {
                    "item": "ae2:engineering_processor"
                }, {
                    "tag": "ae2:pattern_provider"
                }],
            "result": {
                "count": 1,
                "id": "ae2:pattern_access_terminal"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_terminals_pattern_access");

    // Export Bus / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:ingots/iron"
                },
                "b": {
                    "item": "ae2:formation_core"
                },
                "c": {
                    "item": "minecraft:piston"
                }
            },
            "pattern": [
                "aba",
                " c "
            ],
            "result": {
                "count": 1,
                "id": "ae2:export_bus"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_export_bus");

    // Formation Plane / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:ingots/iron"
                },
                "b": {
                    "tag": "ae2:all_fluix"
                },
                "c": {
                    "item": "ae2:formation_core"
                }
            },
            "pattern": [
                "ab",
                "cb",
                "ab"
            ],
            "result": {
                "count": 1,
                "id": "ae2:formation_plane"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_formation_plane_alt");

    // Semi Dark Monitor / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:dark_monitor"
                }],
            "result": {
                "count": 1,
                "id": "ae2:semi_dark_monitor"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_panels_semi_dark_monitor_alt");

    // Semi Dark Monitor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:dusts/glowstone"
                },
                "b": {
                    "item": "ae2:quartz_glass"
                },
                "c": {
                    "tag": "c:ingots/iron"
                },
                "d": {
                    "tag": "c:dusts/redstone"
                }
            },
            "pattern": [
                " ab",
                "cdb",
                " ab"
            ],
            "result": {
                "count": 3,
                "id": "ae2:semi_dark_monitor"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_panels_semi_dark_monitor");

    // Conversion Monitor / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:formation_core"
                }, {
                    "item": "ae2:storage_monitor"
                }, {
                    "item": "ae2:annihilation_core"
                }],
            "result": {
                "count": 1,
                "id": "ae2:conversion_monitor"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_monitors_conversion");

    // Inverted Toggle Bus / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:toggle_bus"
                }],
            "result": {
                "count": 1,
                "id": "ae2:inverted_toggle_bus"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_toggle_bus_inverted_alt");

    // Toggle Bus / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:inverted_toggle_bus"
                }],
            "result": {
                "count": 1,
                "id": "ae2:toggle_bus"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_toggle_bus_alt");

    // Cable Anchor / Native
    event.custom({
            "type": "ae2:quartz_cutting",
            "ingredients": [{
                    "tag": "ae2:knife"
                }, {
                    "tag": "ae2:metal_ingots"
                }],
            "result": {
                "count": 4,
                "id": "ae2:cable_anchor"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_cable_anchor");

    // Storage Bus / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "minecraft:piston"
                }, {
                    "tag": "ae2:interface"
                }, {
                    "item": "minecraft:piston"
                }],
            "result": {
                "count": 1,
                "id": "ae2:storage_bus"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_storage_bus");

    // Quartz Fiber / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:glass_blocks/cheap"
                },
                "b": {
                    "tag": "ae2:all_quartz_dust"
                }
            },
            "pattern": [
                "aaa",
                "bbb",
                "aaa"
            ],
            "result": {
                "count": 3,
                "id": "ae2:quartz_fiber"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_quartz_fiber_part");

    // Crafting Terminal / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:terminal"
                }, {
                    "item": "minecraft:crafting_table"
                }, {
                    "item": "ae2:calculation_processor"
                }],
            "result": {
                "count": 1,
                "id": "ae2:crafting_terminal"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_terminals_crafting");

    // Import Bus / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:annihilation_core"
                },
                "b": {
                    "tag": "c:ingots/iron"
                },
                "c": {
                    "item": "minecraft:piston"
                }
            },
            "pattern": [
                " a ",
                "bcb"
            ],
            "result": {
                "count": 1,
                "id": "ae2:import_bus"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_import_bus");

    // Annihilation Plane / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:ingots/iron"
                },
                "b": {
                    "tag": "ae2:all_fluix"
                },
                "c": {
                    "item": "ae2:annihilation_core"
                }
            },
            "pattern": [
                "ab",
                "cb",
                "ab"
            ],
            "result": {
                "count": 1,
                "id": "ae2:annihilation_plane"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_annihilation_plane_alt2");

    // Storage Monitor / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:level_emitter"
                }, {
                    "tag": "ae2:illuminated_panel"
                }],
            "result": {
                "count": 1,
                "id": "ae2:storage_monitor"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_monitors_storage");

    // Formation Plane / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "ae2:all_fluix"
                },
                "b": {
                    "tag": "c:ingots/iron"
                },
                "c": {
                    "item": "ae2:formation_core"
                }
            },
            "pattern": [
                "aaa",
                "bcb"
            ],
            "result": {
                "count": 1,
                "id": "ae2:formation_plane"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_formation_plane");

    // Me P2P Tunnel / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:ingots/iron"
                },
                "b": {
                    "item": "ae2:engineering_processor"
                },
                "c": {
                    "tag": "ae2:all_fluix"
                }
            },
            "pattern": [
                " a ",
                "aba",
                "ccc"
            ],
            "result": {
                "count": 1,
                "id": "ae2:me_p2p_tunnel"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_tunnels_me");

    // Pattern Encoding Terminal / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:engineering_processor"
                }, {
                    "item": "ae2:crafting_terminal"
                }],
            "result": {
                "count": 1,
                "id": "ae2:pattern_encoding_terminal"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_terminals_pattern_encoding");

    // Energy Level Emitter / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "minecraft:redstone_torch"
                }, {
                    "item": "ae2:charged_certus_quartz_crystal"
                }, {
                    "item": "ae2:calculation_processor"
                }],
            "result": {
                "count": 1,
                "id": "ae2:energy_level_emitter"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_parts_energy_level_emitter");

    // Dense Energy Cell / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:energy_cell"
                },
                "b": {
                    "item": "ae2:calculation_processor"
                }
            },
            "pattern": [
                "aaa",
                "aba",
                "aaa"
            ],
            "result": {
                "count": 1,
                "id": "ae2:dense_energy_cell"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_energy_dense_energy_cell");

    // Pattern Provider / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:cable_pattern_provider"
                }],
            "result": {
                "count": 1,
                "id": "ae2:pattern_provider"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_pattern_providers_interface_alt");

    // Energy Cell / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "b": {
                    "tag": "c:dusts/fluix"
                },
                "c": {
                    "item": "ae2:quartz_glass"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:energy_cell"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_energy_energy_cell");

    // Io Port / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:glass_blocks/cheap"
                },
                "b": {
                    "item": "ae2:drive"
                },
                "c": {
                    "item": "ae2:fluix_glass_cable"
                },
                "d": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "e": {
                    "item": "ae2:logic_processor"
                }
            },
            "pattern": [
                "aaa",
                "bcb",
                "ded"
            ],
            "result": {
                "count": 1,
                "id": "ae2:io_port"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_io_port");

    // Interface / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "b": {
                    "tag": "c:glass_blocks/cheap"
                },
                "c": {
                    "item": "ae2:annihilation_core"
                },
                "d": {
                    "item": "ae2:formation_core"
                }
            },
            "pattern": [
                "aba",
                "c d",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:interface"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_interfaces_interface");

    // Chest / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:glass_blocks/cheap"
                },
                "b": {
                    "item": "ae2:terminal"
                },
                "c": {
                    "item": "ae2:fluix_glass_cable"
                },
                "d": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "e": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "c c",
                "ded"
            ],
            "result": {
                "count": 1,
                "id": "ae2:chest"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_storage_chest");

    // Energy Acceptor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "b": {
                    "item": "ae2:quartz_glass"
                },
                "c": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:energy_acceptor"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_energy_energy_acceptor");

    // Growth Accelerator / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "b": {
                    "item": "ae2:fluix_glass_cable"
                },
                "c": {
                    "item": "ae2:quartz_glass"
                },
                "d": {
                    "item": "ae2:fluix_block"
                }
            },
            "pattern": [
                "aba",
                "cdc",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:growth_accelerator"
            }
        })
        .id(
        "kubejs:tk3/ae_network/ae2_network_blocks_crystal_processing_growth_accelerator");

    // Pattern Provider / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "b": {
                    "item": "minecraft:crafting_table"
                },
                "c": {
                    "item": "ae2:annihilation_core"
                },
                "d": {
                    "item": "ae2:formation_core"
                }
            },
            "pattern": [
                "aba",
                "c d",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:pattern_provider"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_pattern_providers_interface");

    // Vibration Chamber / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "b": {
                    "item": "minecraft:furnace"
                },
                "c": {
                    "item": "ae2:energy_acceptor"
                },
                "d": {
                    "tag": "c:ingots/copper"
                },
                "e": {
                    "tag": "c:gems/fluix"
                }
            },
            "pattern": [
                "ded",
                "aba",
                "aca"
            ],
            "result": {
                "count": 1,
                "id": "ae2:vibration_chamber"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_energy_vibration_chamber");

    // Cable Pattern Provider / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:pattern_provider"
                }],
            "result": {
                "count": 1,
                "id": "ae2:cable_pattern_provider"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_pattern_providers_interface_part");

    // Crank / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:rods/wooden"
                },
                "b": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aaa",
                "  a",
                "  b"
            ],
            "result": {
                "count": 1,
                "id": "ae2:crank"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_crank");

    // Drive / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "b": {
                    "item": "ae2:engineering_processor"
                },
                "c": {
                    "item": "ae2:fluix_glass_cable"
                }
            },
            "pattern": [
                "aba",
                "c c",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:drive"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_storage_drive");

    // Controller / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "b": {
                    "item": "ae2:fluix_crystal"
                },
                "c": {
                    "item": "ae2:engineering_processor"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:controller"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_controller");

    // Cell Workbench / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "minecraft:wool"
                },
                "b": {
                    "item": "ae2:calculation_processor"
                },
                "c": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "d": {
                    "tag": "c:chests/wooden"
                }
            },
            "pattern": [
                "aba",
                "cdc",
                "ccc"
            ],
            "result": {
                "count": 1,
                "id": "ae2:cell_workbench"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_cell_workbench");

    // Interface / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:cable_interface"
                }],
            "result": {
                "count": 1,
                "id": "ae2:interface"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_interfaces_interface_alt");

    // Cable Interface / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:interface"
                }],
            "result": {
                "count": 1,
                "id": "ae2:cable_interface"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_interfaces_interface_part");

    // Energy Acceptor / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:cable_energy_acceptor"
                }],
            "result": {
                "count": 1,
                "id": "ae2:energy_acceptor"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_energy_energy_acceptor_alt");

    // Crystal Resonance Generator / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "c": {
                    "tag": "c:ingots/copper"
                },
                "f": {
                    "item": "ae2:fluix_block"
                },
                "i": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "q": {
                    "item": "ae2:charged_certus_quartz_crystal"
                }
            },
            "pattern": [
                "cfc",
                "cqc",
                "iii"
            ],
            "result": {
                "count": 1,
                "id": "ae2:crystal_resonance_generator"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_crystal_resonance_generator");

    // Crafting Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "b": {
                    "item": "ae2:calculation_processor"
                },
                "c": {
                    "item": "ae2:fluix_glass_cable"
                },
                "d": {
                    "item": "ae2:logic_processor"
                }
            },
            "pattern": [
                "aba",
                "cdc",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:crafting_unit"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_crafting_cpu_crafting_unit");

    // Crafting Accelerator / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:crafting_unit"
                }, {
                    "item": "ae2:engineering_processor"
                }],
            "result": {
                "count": 1,
                "id": "ae2:crafting_accelerator"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_crafting_cpu_crafting_accelerator");

    // Blank Pattern / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/glowstone"
                },
                "c": {
                    "tag": "ae2:all_certus_quartz"
                },
                "d": {
                    "tag": "c:ingots/iron"
                },
                "e": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ded"
            ],
            "result": {
                "count": 2,
                "id": "ae2:blank_pattern"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_crafting_patterns_blank");

    // Crafting Monitor / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:crafting_unit"
                }, {
                    "item": "ae2:storage_monitor"
                }],
            "result": {
                "count": 1,
                "id": "ae2:crafting_monitor"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_crafting_cpu_crafting_monitor");

    // 1K Crafting Storage / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:crafting_unit"
                }, {
                    "item": "ae2:cell_component_1k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:1k_crafting_storage"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_crafting_1k_cpu_crafting_storage");

    // Molecular Assembler / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_calculation_mechanism"
                },
                "b": {
                    "item": "ae2:quartz_glass"
                },
                "c": {
                    "item": "ae2:annihilation_core"
                },
                "d": {
                    "item": "minecraft:crafting_table"
                },
                "e": {
                    "item": "ae2:formation_core"
                }
            },
            "pattern": [
                "aba",
                "cde",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:molecular_assembler"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_crafting_molecular_assembler");

    // Guide / Native
    event.custom({
            "type": "ae2:charger",
            "ingredient": {
                "item": "minecraft:book"
            },
            "result": {
                "count": 1,
                "id": "ae2:guide"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_charger_guide");

    // Engineering Processor Press / Native
    event.custom({
            "type": "ae2:inscriber",
            "ingredients": {
                "middle": {
                    "item": "minecraft:iron_block"
                },
                "top": {
                    "item": "ae2:engineering_processor_press"
                }
            },
            "mode": "inscribe",
            "result": {
                "count": 1,
                "id": "ae2:engineering_processor_press"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_inscriber_engineering_processor_press");

    // Logic Processor Press / Native
    event.custom({
            "type": "ae2:inscriber",
            "ingredients": {
                "middle": {
                    "item": "minecraft:iron_block"
                },
                "top": {
                    "item": "ae2:logic_processor_press"
                }
            },
            "mode": "inscribe",
            "result": {
                "count": 1,
                "id": "ae2:logic_processor_press"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_inscriber_logic_processor_press");

    // Calculation Processor Press / Native
    event.custom({
            "type": "ae2:inscriber",
            "ingredients": {
                "middle": {
                    "item": "minecraft:iron_block"
                },
                "top": {
                    "item": "ae2:calculation_processor_press"
                }
            },
            "mode": "inscribe",
            "result": {
                "count": 1,
                "id": "ae2:calculation_processor_press"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_inscriber_calculation_processor_press");

    // Ender Dust / Native
    event.custom({
            "type": "ae2:inscriber",
            "ingredients": {
                "middle": {
                    "item": "minecraft:ender_pearl"
                }
            },
            "mode": "inscribe",
            "result": {
                "count": 1,
                "id": "ae2:ender_dust"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_inscriber_ender_dust");

    // Quartz Fixture / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:charged_certus_quartz_crystal"
                },
                "b": {
                    "item": "minecraft:iron_ingot"
                }
            },
            "pattern": [
                "ab"
            ],
            "result": {
                "count": 2,
                "id": "ae2:quartz_fixture"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_decorative_quartz_fixture");

    // Quartz Pillar / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:cut_quartz_block"
            },
            "result": {
                "count": 1,
                "id": "ae2:quartz_pillar"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_decorative_certus_quartz_pillar_from_stonecutting");

    // Quartz Pillar / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:cut_quartz_block"
                }
            },
            "pattern": [
                "a",
                "a"
            ],
            "result": {
                "count": 2,
                "id": "ae2:quartz_pillar"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_decorative_certus_quartz_pillar");

    // Quartz Bricks / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:cut_quartz_block"
                }
            },
            "pattern": [
                "aa",
                "aa"
            ],
            "result": {
                "count": 4,
                "id": "ae2:quartz_bricks"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_decorative_certus_quartz_bricks");

    // Light Detector / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "ae2:all_nether_quartz"
                },
                "b": {
                    "item": "ae2:cable_anchor"
                }
            },
            "pattern": [
                "ab"
            ],
            "result": {
                "count": 1,
                "id": "ae2:light_detector"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_decorative_light_detector");

    // Quartz Fixture / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:charged_certus_quartz_crystal"
                },
                "b": {
                    "item": "ae2:cable_anchor"
                }
            },
            "pattern": [
                "ab"
            ],
            "result": {
                "count": 2,
                "id": "ae2:quartz_fixture"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_decorative_quartz_fixture_from_anchors");

    // Quartz Bricks / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:cut_quartz_block"
            },
            "result": {
                "count": 1,
                "id": "ae2:quartz_bricks"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_decorative_certus_quartz_bricks_from_stonecutting");

    // Not So Mysterious Cube / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "C": {
                    "item": "ae2:controller"
                },
                "S": {
                    "item": "ae2:smooth_sky_stone_block"
                },
                "c": {
                    "item": "ae2:calculation_processor_press"
                },
                "e": {
                    "item": "ae2:engineering_processor_press"
                },
                "l": {
                    "item": "ae2:logic_processor_press"
                },
                "s": {
                    "item": "ae2:silicon_press"
                }
            },
            "pattern": [
                "ScS",
                "eCl",
                "SsS"
            ],
            "result": {
                "count": 4,
                "id": "ae2:not_so_mysterious_cube"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_not_so_mysterious_cube");

    // Quartz Brick Wall / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:quartz_bricks"
                }
            },
            "pattern": [
                "###",
                "###"
            ],
            "result": {
                "count": 6,
                "id": "ae2:quartz_brick_wall"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_walls_quartz_bricks");

    // Quartz Wall / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:quartz_block"
                }
            },
            "pattern": [
                "###",
                "###"
            ],
            "result": {
                "count": 6,
                "id": "ae2:quartz_wall"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_walls_quartz_block");

    // Chiseled Quartz Wall / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:chiseled_quartz_block"
                }
            },
            "pattern": [
                "###",
                "###"
            ],
            "result": {
                "count": 6,
                "id": "ae2:chiseled_quartz_wall"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_walls_chiseled_quartz_block");

    // Fluix Wall / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:fluix_block"
                }
            },
            "pattern": [
                "###",
                "###"
            ],
            "result": {
                "count": 6,
                "id": "ae2:fluix_wall"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_walls_fluix_block");

    // Quartz Pillar Wall / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:quartz_pillar"
                }
            },
            "pattern": [
                "###",
                "###"
            ],
            "result": {
                "count": 6,
                "id": "ae2:quartz_pillar_wall"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_walls_quartz_pillar");

    // Quartz Brick Stairs / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:quartz_bricks"
                }
            },
            "pattern": [
                "#  ",
                "## ",
                "###"
            ],
            "result": {
                "count": 4,
                "id": "ae2:quartz_brick_stairs"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_stairs_quartz_bricks");

    // Quartz Stairs / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:quartz_block"
                }
            },
            "pattern": [
                "#  ",
                "## ",
                "###"
            ],
            "result": {
                "count": 4,
                "id": "ae2:quartz_stairs"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_stairs_quartz_block");

    // Chiseled Quartz Stairs / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:chiseled_quartz_block"
                }
            },
            "pattern": [
                "#  ",
                "## ",
                "###"
            ],
            "result": {
                "count": 4,
                "id": "ae2:chiseled_quartz_stairs"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_stairs_chiseled_quartz_block");

    // Fluix Stairs / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:fluix_block"
                }
            },
            "pattern": [
                "#  ",
                "## ",
                "###"
            ],
            "result": {
                "count": 4,
                "id": "ae2:fluix_stairs"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_stairs_fluix_block");

    // Quartz Pillar Stairs / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:quartz_pillar"
                }
            },
            "pattern": [
                "#  ",
                "## ",
                "###"
            ],
            "result": {
                "count": 4,
                "id": "ae2:quartz_pillar_stairs"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_stairs_quartz_pillar");

    // Quartz Brick Slab / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:quartz_bricks"
                }
            },
            "pattern": [
                "###"
            ],
            "result": {
                "count": 6,
                "id": "ae2:quartz_brick_slab"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_slabs_quartz_bricks");

    // Quartz Slab / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:quartz_block"
                }
            },
            "pattern": [
                "###"
            ],
            "result": {
                "count": 6,
                "id": "ae2:quartz_slab"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_slabs_quartz_block");

    // Chiseled Quartz Slab / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:chiseled_quartz_block"
                }
            },
            "pattern": [
                "###"
            ],
            "result": {
                "count": 6,
                "id": "ae2:chiseled_quartz_slab"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_slabs_chiseled_quartz_block");

    // Fluix Slab / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:fluix_block"
                }
            },
            "pattern": [
                "###"
            ],
            "result": {
                "count": 6,
                "id": "ae2:fluix_slab"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_slabs_fluix_block");

    // Quartz Pillar Slab / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "ae2:quartz_pillar"
                }
            },
            "pattern": [
                "###"
            ],
            "result": {
                "count": 6,
                "id": "ae2:quartz_pillar_slab"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_shaped_slabs_quartz_pillar");

    // Crafting Card / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "minecraft:crafting_table"
                }, {
                    "item": "ae2:basic_card"
                }],
            "result": {
                "count": 1,
                "id": "ae2:crafting_card"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_materials_cardcrafting");

    // Advanced Card / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:gems/diamond"
                },
                "b": {
                    "tag": "c:ingots/iron"
                },
                "c": {
                    "tag": "c:dusts/redstone"
                },
                "d": {
                    "item": "ae2:calculation_processor"
                }
            },
            "pattern": [
                "ab ",
                "cdb",
                "ab "
            ],
            "result": {
                "count": 2,
                "id": "ae2:advanced_card"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_materials_advancedcard");

    // Energy Card / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:dense_energy_cell"
                },
                "b": {
                    "item": "ae2:advanced_card"
                }
            },
            "pattern": [
                "ab"
            ],
            "result": {
                "count": 1,
                "id": "ae2:energy_card"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_materials_cardenergy");

    // Basic Card / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:ingots/gold"
                },
                "b": {
                    "tag": "c:ingots/iron"
                },
                "c": {
                    "tag": "c:dusts/redstone"
                },
                "d": {
                    "item": "ae2:calculation_processor"
                }
            },
            "pattern": [
                "ab ",
                "cdb",
                "ab "
            ],
            "result": {
                "count": 2,
                "id": "ae2:basic_card"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_materials_basiccard");

    // Redstone Card / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "minecraft:redstone_torch"
                }, {
                    "item": "ae2:basic_card"
                }],
            "result": {
                "count": 1,
                "id": "ae2:redstone_card"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_materials_cardredstone");

    // Equal Distribution Card / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:advanced_card"
                }, {
                    "item": "ae2:calculation_processor"
                }],
            "result": {
                "count": 1,
                "id": "ae2:equal_distribution_card"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_materials_carddistribution");

    // Formation Core / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "ae2:all_certus_quartz"
                },
                "b": {
                    "tag": "c:dusts/fluix"
                },
                "c": {
                    "item": "ae2:logic_processor"
                }
            },
            "pattern": [
                "abc"
            ],
            "result": {
                "count": 2,
                "id": "ae2:formation_core"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_materials_formationcore");

    // Annihilation Core / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "ae2:all_nether_quartz"
                },
                "b": {
                    "tag": "c:dusts/fluix"
                },
                "c": {
                    "item": "ae2:logic_processor"
                }
            },
            "pattern": [
                "abc"
            ],
            "result": {
                "count": 2,
                "id": "ae2:annihilation_core"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_materials_annihilationcore");

    // Fuzzy Card / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:advanced_card"
                }, {
                    "tag": "minecraft:wool"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fuzzy_card"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_materials_cardfuzzy");

    // Void Card / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:calculation_processor"
                }, {
                    "item": "ae2:basic_card"
                }],
            "result": {
                "count": 1,
                "id": "ae2:void_card"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_materials_cardvoid");

    // Inverter Card / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "minecraft:redstone_torch"
                }, {
                    "item": "ae2:advanced_card"
                }],
            "result": {
                "count": 1,
                "id": "ae2:inverter_card"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_materials_cardinverter");

    // Capacity Card / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "tag": "ae2:all_certus_quartz"
                }, {
                    "item": "ae2:basic_card"
                }],
            "result": {
                "count": 1,
                "id": "ae2:capacity_card"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_materials_cardcapacity");

    // Speed Card / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:advanced_card"
                }, {
                    "tag": "ae2:all_fluix"
                }],
            "result": {
                "count": 1,
                "id": "ae2:speed_card"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_materials_cardspeed");

    // Chiseled Quartz Wall / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:chiseled_quartz_block"
            },
            "result": {
                "count": 1,
                "id": "ae2:chiseled_quartz_wall"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_walls_chiseled_quartz_wall");

    // Fluix Wall / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:fluix_block"
            },
            "result": {
                "count": 1,
                "id": "ae2:fluix_wall"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_walls_fluix_wall");

    // Quartz Wall / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:quartz_block"
            },
            "result": {
                "count": 1,
                "id": "ae2:quartz_wall"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_walls_quartz_wall");

    // Quartz Brick Wall / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:quartz_bricks"
            },
            "result": {
                "count": 1,
                "id": "ae2:quartz_brick_wall"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_walls_quartz_brick_wall");

    // Quartz Pillar Wall / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:quartz_pillar"
            },
            "result": {
                "count": 1,
                "id": "ae2:quartz_pillar_wall"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_walls_quartz_pillar_wall");

    // Chiseled Quartz Stairs / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:chiseled_quartz_block"
            },
            "result": {
                "count": 1,
                "id": "ae2:chiseled_quartz_stairs"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_stairs_chiseled_quartz_stairs");

    // Quartz Stairs / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:quartz_block"
            },
            "result": {
                "count": 1,
                "id": "ae2:quartz_stairs"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_stairs_quartz_stairs");

    // Quartz Brick Stairs / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:quartz_bricks"
            },
            "result": {
                "count": 1,
                "id": "ae2:quartz_brick_stairs"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_stairs_quartz_brick_stairs");

    // Fluix Stairs / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:fluix_block"
            },
            "result": {
                "count": 1,
                "id": "ae2:fluix_stairs"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_stairs_fluix_stairs");

    // Quartz Pillar Stairs / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:quartz_pillar"
            },
            "result": {
                "count": 1,
                "id": "ae2:quartz_pillar_stairs"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_stairs_quartz_pillar_stairs");

    // Quartz Slab / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:quartz_block"
            },
            "result": {
                "count": 2,
                "id": "ae2:quartz_slab"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_slabs_quartz_slab");

    // Chiseled Quartz Slab / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:chiseled_quartz_block"
            },
            "result": {
                "count": 2,
                "id": "ae2:chiseled_quartz_slab"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_slabs_chiseled_quartz_slab");

    // Quartz Brick Slab / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:quartz_bricks"
            },
            "result": {
                "count": 2,
                "id": "ae2:quartz_brick_slab"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_slabs_quartz_brick_slab");

    // Quartz Pillar Slab / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:quartz_pillar"
            },
            "result": {
                "count": 2,
                "id": "ae2:quartz_pillar_slab"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_slabs_quartz_pillar_slab");

    // Fluix Slab / Native
    event.custom({
            "type": "minecraft:stonecutting",
            "ingredient": {
                "item": "ae2:fluix_block"
            },
            "result": {
                "count": 2,
                "id": "ae2:fluix_slab"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_block_cutter_slabs_fluix_slab");

    //->------------------------]  Tier 6 / Network construction & storage [------------------------<-//

    // Color Applicator / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:formation_core"
                },
                "b": {
                    "tag": "c:ingots/iron"
                },
                "c": {
                    "item": "ae2:cell_component_4k"
                },
                "d": {
                    "item": "ae2:energy_cell"
                }
            },
            "pattern": [
                "ab ",
                "bc ",
                "  d"
            ],
            "result": {
                "count": 1,
                "id": "ae2:color_applicator"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_network_color_applicator");

    // Portable Fluid Cell 4K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:chest"
                }, {
                    "item": "ae2:cell_component_4k"
                }, {
                    "item": "ae2:energy_cell"
                }, {
                    "item": "ae2:fluid_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "ae2:portable_fluid_cell_4k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_portable_fluid_cell_4k");

    // Matter Cannon / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:ingots/iron"
                },
                "b": {
                    "item": "ae2:formation_core"
                },
                "c": {
                    "item": "ae2:cell_component_4k"
                },
                "d": {
                    "item": "ae2:energy_cell"
                }
            },
            "pattern": [
                "aab",
                "cd ",
                "a  "
            ],
            "result": {
                "count": 1,
                "id": "ae2:matter_cannon"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_matter_cannon");

    // Portable Item Cell 4K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:chest"
                }, {
                    "item": "ae2:cell_component_4k"
                }, {
                    "item": "ae2:energy_cell"
                }, {
                    "item": "ae2:item_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "ae2:portable_item_cell_4k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_portable_item_cell_4k");

    // Fluid Storage Cell 4K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "item": "ae2:cell_component_4k"
                },
                "d": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ddd"
            ],
            "result": {
                "count": 1,
                "id": "ae2:fluid_storage_cell_4k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_4k");

    // Fluid Storage Cell 4K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:fluid_cell_housing"
                }, {
                    "item": "ae2:cell_component_4k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluid_storage_cell_4k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_4k_storage");

    // Item Storage Cell 4K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "item": "ae2:cell_component_4k"
                },
                "d": {
                    "tag": "c:ingots/iron"
                },
                "e": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ded"
            ],
            "result": {
                "count": 1,
                "id": "ae2:item_storage_cell_4k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_4k");

    // Cell Component 4K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:dusts/redstone"
                },
                "b": {
                    "item": "ae2:calculation_processor"
                },
                "c": {
                    "item": "ae2:cell_component_1k"
                },
                "d": {
                    "item": "ae2:quartz_glass"
                }
            },
            "pattern": [
                "aba",
                "cdc",
                "aca"
            ],
            "result": {
                "count": 1,
                "id": "ae2:cell_component_4k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_item_storage_components_cell_4k_part");

    // Item Storage Cell 4K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:item_cell_housing"
                }, {
                    "item": "ae2:cell_component_4k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:item_storage_cell_4k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_4k_storage");

    // Wireless Booster / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:dusts/fluix"
                },
                "b": {
                    "tag": "ae2:all_certus_quartz"
                },
                "c": {
                    "tag": "c:dusts/ender_pearl"
                },
                "d": {
                    "tag": "c:ingots/iron"
                }
            },
            "pattern": [
                "abc",
                "ddd"
            ],
            "result": {
                "count": 2,
                "id": "ae2:wireless_booster"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_wireless_booster");

    // Wireless Receiver / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:fluix_pearl"
                },
                "b": {
                    "tag": "c:ingots/iron"
                },
                "c": {
                    "item": "ae2:quartz_fiber"
                }
            },
            "pattern": [
                " a ",
                "bcb",
                " b "
            ],
            "result": {
                "count": 1,
                "id": "ae2:wireless_receiver"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_wireless_part");

    // Wireless Crafting Terminal / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:wireless_receiver"
                },
                "b": {
                    "item": "ae2:crafting_terminal"
                },
                "c": {
                    "item": "ae2:dense_energy_cell"
                }
            },
            "pattern": [
                "a",
                "b",
                "c"
            ],
            "result": {
                "count": 1,
                "id": "ae2:wireless_crafting_terminal"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_wireless_crafting_terminal");

    // Wireless Terminal / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:wireless_receiver"
                },
                "b": {
                    "item": "ae2:terminal"
                },
                "c": {
                    "item": "ae2:dense_energy_cell"
                }
            },
            "pattern": [
                "a",
                "b",
                "c"
            ],
            "result": {
                "count": 1,
                "id": "ae2:wireless_terminal"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_wireless_terminal");

    // 4K Crafting Storage / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:crafting_unit"
                }, {
                    "item": "ae2:cell_component_4k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:4k_crafting_storage"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_crafting_4k_cpu_crafting_storage");

    // Wireless Crafting Terminal / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:wireless_terminal"
                }, {
                    "item": "minecraft:crafting_table"
                }, {
                    "item": "ae2:calculation_processor"
                }],
            "result": {
                "count": 1,
                "id": "ae2:wireless_crafting_terminal"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_upgrade_wireless_crafting_terminal");

    //->------------------------]  Tier 7 / Network construction & storage [------------------------<-//

    // Portable Item Cell 16K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:chest"
                }, {
                    "item": "ae2:cell_component_16k"
                }, {
                    "item": "ae2:energy_cell"
                }, {
                    "item": "ae2:item_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "ae2:portable_item_cell_16k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_portable_item_cell_16k");

    // Portable Fluid Cell 16K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:chest"
                }, {
                    "item": "ae2:cell_component_16k"
                }, {
                    "item": "ae2:energy_cell"
                }, {
                    "item": "ae2:fluid_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "ae2:portable_fluid_cell_16k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_portable_fluid_cell_16k");

    // Fluid Storage Cell 16K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:fluid_cell_housing"
                }, {
                    "item": "ae2:cell_component_16k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluid_storage_cell_16k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_16k_storage");

    // Fluid Storage Cell 16K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "item": "ae2:cell_component_16k"
                },
                "d": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ddd"
            ],
            "result": {
                "count": 1,
                "id": "ae2:fluid_storage_cell_16k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_16k");

    // Item Storage Cell 16K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:cell_component_16k"
                }, {
                    "item": "ae2:item_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "ae2:item_storage_cell_16k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_16k_storage");

    // Item Storage Cell 16K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "item": "ae2:cell_component_16k"
                },
                "d": {
                    "tag": "c:ingots/iron"
                },
                "e": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ded"
            ],
            "result": {
                "count": 1,
                "id": "ae2:item_storage_cell_16k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_16k");

    // Cell Component 16K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:dusts/glowstone"
                },
                "b": {
                    "item": "ae2:calculation_processor"
                },
                "c": {
                    "item": "ae2:cell_component_4k"
                },
                "d": {
                    "item": "ae2:quartz_glass"
                }
            },
            "pattern": [
                "aba",
                "cdc",
                "aca"
            ],
            "result": {
                "count": 1,
                "id": "ae2:cell_component_16k"
            }
        })
        .id(
        "kubejs:tk3/ae_network/ae2_network_cells_item_storage_components_cell_16k_part");

    // 16K Crafting Storage / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:crafting_unit"
                }, {
                    "item": "ae2:cell_component_16k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:16k_crafting_storage"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_crafting_16k_cpu_crafting_storage");

    // Wireless Access Point / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_chemical_mechanism"
                },
                "b": {
                    "item": "ae2:calculation_processor"
                },
                "c": {
                    "item": "ae2:fluix_glass_cable"
                }
            },
            "pattern": [
                "a",
                "b",
                "c"
            ],
            "result": {
                "count": 1,
                "id": "ae2:wireless_access_point"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_wireless_access_point");

    //->------------------------]  Tier 8 / Network construction & storage [------------------------<-//

    // Spatial Cell Component 16 / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:dusts/glowstone"
                },
                "b": {
                    "item": "ae2:spatial_cell_component_2"
                },
                "c": {
                    "item": "ae2:engineering_processor"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:spatial_cell_component_16"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_spatial_components_0");

    // Spatial Storage Cell 128 / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "item": "ae2:spatial_cell_component_128"
                },
                "d": {
                    "tag": "c:ingots/iron"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ddd"
            ],
            "result": {
                "count": 1,
                "id": "ae2:spatial_storage_cell_128"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_spatial_storage_cell_128_cubed");

    // Spatial Storage Cell 2 / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:item_cell_housing"
                }, {
                    "item": "ae2:spatial_cell_component_2"
                }],
            "result": {
                "count": 1,
                "id": "ae2:spatial_storage_cell_2"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_spatial_storage_cell_2_cubed_storage");

    // Spatial Cell Component 2 / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:dusts/glowstone"
                },
                "b": {
                    "item": "ae2:fluix_pearl"
                },
                "c": {
                    "item": "ae2:engineering_processor"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:spatial_cell_component_2"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_spatial_components");

    // Spatial Storage Cell 128 / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:item_cell_housing"
                }, {
                    "item": "ae2:spatial_cell_component_128"
                }],
            "result": {
                "count": 1,
                "id": "ae2:spatial_storage_cell_128"
            }
        })
        .id(
        "kubejs:tk3/ae_network/ae2_network_cells_spatial_storage_cell_128_cubed_storage");

    // Spatial Storage Cell 16 / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:item_cell_housing"
                }, {
                    "item": "ae2:spatial_cell_component_16"
                }],
            "result": {
                "count": 1,
                "id": "ae2:spatial_storage_cell_16"
            }
        })
        .id(
        "kubejs:tk3/ae_network/ae2_network_cells_spatial_storage_cell_16_cubed_storage");

    // Spatial Storage Cell 16 / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "item": "ae2:spatial_cell_component_16"
                },
                "d": {
                    "tag": "c:ingots/iron"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ddd"
            ],
            "result": {
                "count": 1,
                "id": "ae2:spatial_storage_cell_16"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_spatial_storage_cell_16_cubed");

    // Spatial Storage Cell 2 / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "item": "ae2:spatial_cell_component_2"
                },
                "d": {
                    "tag": "c:ingots/iron"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ddd"
            ],
            "result": {
                "count": 1,
                "id": "ae2:spatial_storage_cell_2"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_spatial_storage_cell_2_cubed");

    // Spatial Cell Component 128 / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:dusts/glowstone"
                },
                "b": {
                    "item": "ae2:spatial_cell_component_16"
                },
                "c": {
                    "item": "ae2:engineering_processor"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:spatial_cell_component_128"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_spatial_components_1");

    // Condenser / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_containment_mechanism"
                },
                "b": {
                    "tag": "c:glass_blocks/cheap"
                },
                "c": {
                    "tag": "c:dusts/fluix"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:condenser"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_io_condenser");

    // Spatial Anchor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:spatial_pylon"
                },
                "b": {
                    "item": "ae2:fluix_glass_cable"
                },
                "c": {
                    "item": "ae2:spatial_cell_component_128"
                },
                "d": {
                    "item": "kubejs:tk3_containment_mechanism"
                },
                "e": {
                    "item": "ae2:engineering_processor"
                }
            },
            "pattern": [
                "aaa",
                "bcb",
                "ded"
            ],
            "result": {
                "count": 1,
                "id": "ae2:spatial_anchor"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_spatial_anchor");

    // Spatial Pylon / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_containment_mechanism"
                },
                "b": {
                    "item": "ae2:fluix_glass_cable"
                },
                "c": {
                    "tag": "c:dusts/fluix"
                },
                "d": {
                    "tag": "ae2:all_fluix"
                }
            },
            "pattern": [
                "aba",
                "cdc",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:spatial_pylon"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_spatial_io_pylon");

    // Spatial Io Port / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:glass_blocks/cheap"
                },
                "b": {
                    "item": "ae2:fluix_glass_cable"
                },
                "c": {
                    "item": "ae2:io_port"
                },
                "d": {
                    "item": "kubejs:tk3_containment_mechanism"
                },
                "e": {
                    "item": "ae2:engineering_processor"
                }
            },
            "pattern": [
                "aaa",
                "bcb",
                "ded"
            ],
            "result": {
                "count": 1,
                "id": "ae2:spatial_io_port"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_spatial_io_port");

    //->------------------------]  Tier 9 / Network construction & storage [------------------------<-//

    // Portable Item Cell 64K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:chest"
                }, {
                    "item": "ae2:cell_component_64k"
                }, {
                    "item": "ae2:energy_cell"
                }, {
                    "item": "ae2:item_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "ae2:portable_item_cell_64k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_portable_item_cell_64k");

    // Portable Fluid Cell 64K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:chest"
                }, {
                    "item": "ae2:cell_component_64k"
                }, {
                    "item": "ae2:energy_cell"
                }, {
                    "item": "ae2:fluid_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "ae2:portable_fluid_cell_64k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_portable_fluid_cell_64k");

    // Fluid Storage Cell 64K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "item": "ae2:cell_component_64k"
                },
                "d": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ddd"
            ],
            "result": {
                "count": 1,
                "id": "ae2:fluid_storage_cell_64k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_64k");

    // Item Storage Cell 64K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "item": "ae2:cell_component_64k"
                },
                "d": {
                    "tag": "c:ingots/iron"
                },
                "e": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ded"
            ],
            "result": {
                "count": 1,
                "id": "ae2:item_storage_cell_64k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_64k");

    // Fluid Storage Cell 64K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:fluid_cell_housing"
                }, {
                    "item": "ae2:cell_component_64k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluid_storage_cell_64k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_64k_storage");

    // Item Storage Cell 64K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:item_cell_housing"
                }, {
                    "item": "ae2:cell_component_64k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:item_storage_cell_64k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_64k_storage");

    // Cell Component 64K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:dusts/glowstone"
                },
                "b": {
                    "item": "ae2:calculation_processor"
                },
                "c": {
                    "item": "ae2:cell_component_16k"
                },
                "d": {
                    "item": "ae2:quartz_glass"
                }
            },
            "pattern": [
                "aba",
                "cdc",
                "aca"
            ],
            "result": {
                "count": 1,
                "id": "ae2:cell_component_64k"
            }
        })
        .id(
        "kubejs:tk3/ae_network/ae2_network_cells_item_storage_components_cell_64k_part");

    // Quantum Ring / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_singularity_mechanism"
                },
                "b": {
                    "item": "ae2:logic_processor"
                },
                "c": {
                    "item": "ae2:engineering_processor"
                },
                "d": {
                    "item": "ae2:energy_cell"
                },
                "e": {
                    "tag": "ae2:smart_dense_cable"
                }
            },
            "pattern": [
                "aba",
                "cde",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:quantum_ring"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_quantum_ring");

    // Quantum Link / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "kubejs:tk3_singularity_mechanism"
                },
                "b": {
                    "item": "ae2:fluix_pearl"
                }
            },
            "pattern": [
                "aba",
                "b b",
                "aba"
            ],
            "result": {
                "count": 1,
                "id": "ae2:quantum_link"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_blocks_quantum_link");

    // 64K Crafting Storage / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:crafting_unit"
                }, {
                    "item": "ae2:cell_component_64k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:64k_crafting_storage"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_crafting_64k_cpu_crafting_storage");

    // Quantum Entangled Singularity / Native
    event.custom({
            "type": "ae2:transform",
            "circumstance": {
                "type": "explosion"
            },
            "ingredients": [{
                    "item": "ae2:singularity"
                }, {
                    "tag": "c:dusts/ender_pearl"
                }],
            "result": {
                "count": 2,
                "id": "ae2:quantum_entangled_singularity"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_transform_entangled_singularity");

    // Quantum Entangled Singularity / Native
    event.custom({
            "type": "ae2:transform",
            "circumstance": {
                "type": "explosion"
            },
            "ingredients": [{
                    "item": "ae2:singularity"
                }, {
                    "tag": "c:ender_pearls"
                }],
            "result": {
                "count": 2,
                "id": "ae2:quantum_entangled_singularity"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_transform_entangled_singularity_from_pearl");

    //->------------------------]  Tier 10 / Network construction & storage [------------------------<-//

    // Portable Fluid Cell 256K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:chest"
                }, {
                    "item": "ae2:cell_component_256k"
                }, {
                    "item": "ae2:energy_cell"
                }, {
                    "item": "ae2:fluid_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "ae2:portable_fluid_cell_256k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_portable_fluid_cell_256k");

    // Portable Item Cell 256K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:chest"
                }, {
                    "item": "ae2:cell_component_256k"
                }, {
                    "item": "ae2:energy_cell"
                }, {
                    "item": "ae2:item_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "ae2:portable_item_cell_256k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_tools_portable_item_cell_256k");

    // Item Storage Cell 256K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:item_cell_housing"
                }, {
                    "item": "ae2:cell_component_256k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:item_storage_cell_256k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_256k_storage");

    // Cell Component 256K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "tag": "c:dusts/sky_stone"
                },
                "b": {
                    "item": "ae2:calculation_processor"
                },
                "c": {
                    "item": "ae2:cell_component_64k"
                },
                "d": {
                    "item": "ae2:quartz_glass"
                }
            },
            "pattern": [
                "aba",
                "cdc",
                "aca"
            ],
            "result": {
                "count": 1,
                "id": "ae2:cell_component_256k"
            }
        })
        .id(
        "kubejs:tk3/ae_network/ae2_network_cells_item_storage_components_cell_256k_part");

    // Item Storage Cell 256K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "item": "ae2:cell_component_256k"
                },
                "d": {
                    "tag": "c:ingots/iron"
                },
                "e": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ded"
            ],
            "result": {
                "count": 1,
                "id": "ae2:item_storage_cell_256k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_256k");

    // Fluid Storage Cell 256K / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "a": {
                    "item": "ae2:quartz_glass"
                },
                "b": {
                    "tag": "c:dusts/redstone"
                },
                "c": {
                    "item": "ae2:cell_component_256k"
                },
                "d": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "aba",
                "bcb",
                "ddd"
            ],
            "result": {
                "count": 1,
                "id": "ae2:fluid_storage_cell_256k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_256k");

    // Fluid Storage Cell 256K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:fluid_cell_housing"
                }, {
                    "item": "ae2:cell_component_256k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:fluid_storage_cell_256k"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_256k_storage");

    // 256K Crafting Storage / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "ae2:crafting_unit"
                }, {
                    "item": "ae2:cell_component_256k"
                }],
            "result": {
                "count": 1,
                "id": "ae2:256k_crafting_storage"
            }
        })
        .id("kubejs:tk3/ae_network/ae2_network_crafting_256k_cpu_crafting_storage");

});
