// priority: 0
// Generated from docs/progression_manifest.json. See tools/rebuild_recipes.py.
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    //->------------------------]  Tier 1 / Crop integration / Slicer [------------------------<-//

    // Slicer / Shapeless
    event.shapeless(
        "sliceanddice:slicer",
        [
            "kubejs:tk3_rotation_machine",
            "create:cogwheel",
            "farmersdelight:iron_knife"
        ])
        .id("kubejs:tk3/addons/sliceanddice_slicer");

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

    //->------------------------]  Tier 2 / Ocean industry / Alloys [------------------------<-//

    // Prismarine Alloy / Compacting
    event.recipes.create.compacting(
        [
            "2x create_aquatic_ambitions:prismarine_alloy"
        ],
        [
            "minecraft:prismarine_shard",
            "create:copper_sheet",
            "create_aquatic_ambitions:calcium_rich_powder"
        ])
        .id("kubejs:tk3/addons/create_aquatic_ambitions_prismarine_alloy");

    //->------------------------]  Tier 2 / Ocean industry / Mineral feed [------------------------<-//

    // Calcium Rich Powder / Mixing
    event.recipes.create.mixing(
        [
            "2x create_aquatic_ambitions:calcium_rich_powder"
        ],
        [
            "minecraft:bone_meal",
            "minecraft:bone_meal",
            "minecraft:kelp",
            Fluid.of("minecraft:water",
                250)
        ])
        .id("kubejs:tk3/addons/create_aquatic_ambitions_calcium_rich_powder");

    //->------------------------]  Tier 2 / create_aquatic_ambitions / Native processing & construction [------------------------<-//

    // Brain Coral Block / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_brain_coral_block"
                }],
            "results": [{
                    "id": "minecraft:brain_coral_block"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_brain_coral_block");

    // Brain Coral Fan / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_brain_coral_fan"
                }],
            "results": [{
                    "id": "minecraft:brain_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "minecraft:brain_coral_fan"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_brain_coral_fan_revival");

    // Brain Coral / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_brain_coral"
                }],
            "results": [{
                    "id": "minecraft:brain_coral"
                }, {
                    "chance": 0.25,
                    "id": "minecraft:brain_coral"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_brain_coral_revival");

    // Bubble Coral Block / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_bubble_coral_block"
                }],
            "results": [{
                    "id": "minecraft:bubble_coral_block"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_bubble_coral_block");

    // Bubble Coral Fan / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_bubble_coral_fan"
                }],
            "results": [{
                    "id": "minecraft:bubble_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "minecraft:bubble_coral_fan"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_bubble_coral_fan_revival");

    // Bubble Coral / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_bubble_coral"
                }],
            "results": [{
                    "id": "minecraft:bubble_coral"
                }, {
                    "chance": 0.25,
                    "id": "minecraft:bubble_coral"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_bubble_coral_revival");

    // Exposed Chiseled Copper / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:chiseled_copper"
                }],
            "results": [{
                    "id": "minecraft:exposed_chiseled_copper"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_exposed_chiseled_copper");

    // Exposed Copper Bulb / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:copper_bulb"
                }],
            "results": [{
                    "id": "minecraft:exposed_copper_bulb"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_exposed_copper_bulb");

    // Exposed Copper Door / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:copper_door"
                }],
            "results": [{
                    "id": "minecraft:exposed_copper_door"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_exposed_copper_door");

    // Exposed Copper Grate / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:copper_grate"
                }],
            "results": [{
                    "id": "minecraft:exposed_copper_grate"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_exposed_copper_grate");

    // Exposed Copper Trapdoor / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:copper_trapdoor"
                }],
            "results": [{
                    "id": "minecraft:exposed_copper_trapdoor"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_exposed_copper_trapdoor");

    // Exposed Cut Copper / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:cut_copper"
                }],
            "results": [{
                    "id": "minecraft:exposed_cut_copper"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_exposed_cut_copper");

    // Exposed Cut Copper Slab / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:cut_copper_slab"
                }],
            "results": [{
                    "id": "minecraft:exposed_cut_copper_slab"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_exposed_cut_copper_slab");

    // Exposed Cut Copper Stairs / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:cut_copper_stairs"
                }],
            "results": [{
                    "id": "minecraft:exposed_cut_copper_stairs"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_exposed_cut_copper_stairs");

    // Fire Coral Block / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_fire_coral_block"
                }],
            "results": [{
                    "id": "minecraft:fire_coral_block"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_fire_coral_block");

    // Fire Coral Fan / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_fire_coral_fan"
                }],
            "results": [{
                    "id": "minecraft:fire_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "minecraft:fire_coral_fan"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_fire_coral_fan_revival");

    // Fire Coral / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_fire_coral"
                }],
            "results": [{
                    "id": "minecraft:fire_coral"
                }, {
                    "chance": 0.25,
                    "id": "minecraft:fire_coral"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_fire_coral_revival");

    // Heart Of The Sea / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:ender_eye"
                }],
            "results": [{
                    "id": "minecraft:heart_of_the_sea"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_heart_of_the_sea");

    // Horn Coral Block / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_horn_coral_block"
                }],
            "results": [{
                    "id": "minecraft:horn_coral_block"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_horn_coral_block");

    // Horn Coral Fan / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_horn_coral_fan"
                }],
            "results": [{
                    "id": "minecraft:horn_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "minecraft:horn_coral_fan"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_horn_coral_fan_revival");

    // Horn Coral / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_horn_coral"
                }],
            "results": [{
                    "id": "minecraft:horn_coral"
                }, {
                    "chance": 0.25,
                    "id": "minecraft:horn_coral"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_horn_coral_revival");

    // Oxidized Chiseled Copper / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:weathered_chiseled_copper"
                }],
            "results": [{
                    "id": "minecraft:oxidized_chiseled_copper"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_oxidized_chiseled_copper");

    // Oxidized Copper Bulb / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:weathered_copper_bulb"
                }],
            "results": [{
                    "id": "minecraft:oxidized_copper_bulb"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_oxidized_copper_bulb");

    // Oxidized Copper Door / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:weathered_copper_door"
                }],
            "results": [{
                    "id": "minecraft:oxidized_copper_door"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_oxidized_copper_door");

    // Oxidized Copper Grate / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:weathered_copper_grate"
                }],
            "results": [{
                    "id": "minecraft:oxidized_copper_grate"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_oxidized_copper_grate");

    // Oxidized Copper Trapdoor / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:weathered_copper_trapdoor"
                }],
            "results": [{
                    "id": "minecraft:oxidized_copper_trapdoor"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_oxidized_copper_trapdoor");

    // Oxidized Cut Copper / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:weathered_cut_copper"
                }],
            "results": [{
                    "id": "minecraft:oxidized_cut_copper"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_oxidized_cut_copper");

    // Oxidized Cut Copper Slab / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:weathered_cut_copper_slab"
                }],
            "results": [{
                    "id": "minecraft:oxidized_cut_copper_slab"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_oxidized_cut_copper_slab");

    // Oxidized Cut Copper Stairs / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:weathered_cut_copper_stairs"
                }],
            "results": [{
                    "id": "minecraft:oxidized_cut_copper_stairs"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_oxidized_cut_copper_stairs");

    // Prismarine Shard / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:flint"
                }],
            "results": [{
                    "chance": 0.33,
                    "id": "minecraft:prismarine_shard"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_prismarine");

    // Prismarine Crystals / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:glowstone_dust"
                }],
            "results": [{
                    "id": "minecraft:prismarine_crystals"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_prismarine_crystals");

    // Spiky Shell / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "create_aquatic_ambitions:suspicious_rock"
                }],
            "results": [{
                    "chance": 0.1,
                    "id": "create_aquatic_ambitions:spiky_shell"
                }, {
                    "chance": 0.5,
                    "id": "minecraft:nautilus_shell"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_suspicious_rock");

    // Tube Coral Block / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_tube_coral_block"
                }],
            "results": [{
                    "id": "minecraft:tube_coral_block"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_tube_coral_block");

    // Tube Coral Fan / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_tube_coral_fan"
                }],
            "results": [{
                    "id": "minecraft:tube_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "minecraft:tube_coral_fan"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_tube_coral_fan_revival");

    // Tube Coral / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:dead_tube_coral"
                }],
            "results": [{
                    "id": "minecraft:tube_coral"
                }, {
                    "chance": 0.25,
                    "id": "minecraft:tube_coral"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_tube_coral_revival");

    // Acan Coral / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_acan_coral"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:acan_coral"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:acan_coral"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_acan_coral");

    // Acan Coral Block / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_acan_coral_block"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:acan_coral_block"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_acan_coral_block");

    // Acan Coral Fan / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_acan_coral_fan"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:acan_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:acan_coral_fan"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_acan_coral_fan");

    // Branch Coral / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_branch_coral"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:branch_coral"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:branch_coral"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_branch_coral");

    // Branch Coral Block / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_branch_coral_block"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:branch_coral_block"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_branch_coral_block");

    // Branch Coral Fan / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_branch_coral_fan"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:branch_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:branch_coral_fan"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_branch_coral_fan");

    // Chrome Coral / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_chrome_coral"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:chrome_coral"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:chrome_coral"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_chrome_coral");

    // Chrome Coral Block / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_chrome_coral_block"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:chrome_coral_block"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_chrome_coral_block");

    // Chrome Coral Fan / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_chrome_coral_fan"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:chrome_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:chrome_coral_fan"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_chrome_coral_fan");

    // Finger Coral / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_finger_coral"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:finger_coral"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:finger_coral"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_finger_coral");

    // Finger Coral Block / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_finger_coral_block"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:finger_coral_block"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_finger_coral_block");

    // Finger Coral Fan / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_finger_coral_fan"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:finger_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:finger_coral_fan"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_finger_coral_fan");

    // Moss Coral / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_moss_coral"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:moss_coral"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:moss_coral"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_moss_coral");

    // Moss Coral Block / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_moss_coral_block"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:moss_coral_block"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_moss_coral_block");

    // Moss Coral Fan / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_moss_coral_fan"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:moss_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:moss_coral_fan"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_moss_coral_fan");

    // Petal Coral / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_petal_coral"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:petal_coral"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:petal_coral"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_petal_coral");

    // Petal Coral Block / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_petal_coral_block"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:petal_coral_block"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_petal_coral_block");

    // Petal Coral Fan / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_petal_coral_fan"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:petal_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:petal_coral_fan"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_petal_coral_fan");

    // Pillow Coral / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_pillow_coral"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:pillow_coral"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:pillow_coral"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_pillow_coral");

    // Pillow Coral Block / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_pillow_coral_block"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:pillow_coral_block"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_pillow_coral_block");

    // Pillow Coral Fan / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_pillow_coral_fan"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:pillow_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:pillow_coral_fan"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_pillow_coral_fan");

    // Rock Coral / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_rock_coral"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:rock_coral"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:rock_coral"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_rock_coral");

    // Rock Coral Fan / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_rock_coral_fan"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:rock_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:rock_coral_fan"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_rock_coral_fan");

    // Silk Coral / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_silk_coral"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:silk_coral"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:silk_coral"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_silk_coral");

    // Silk Coral Fan / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_silk_coral_fan"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:silk_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:silk_coral_fan"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_silk_coral_fan");

    // Star Coral / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_star_coral"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:star_coral"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:star_coral"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_star_coral");

    // Star Coral Fan / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "upgrade_aquatic"
                }],
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "type": "neoforge:compound",
                    "ingredients": [{
                            "item": "upgrade_aquatic:dead_star_coral_fan"
                        }]
                }],
            "results": [{
                    "id": "upgrade_aquatic:star_coral_fan"
                }, {
                    "chance": 0.25,
                    "id": "upgrade_aquatic:star_coral_fan"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_upgrade_aquatic_star_coral_fan");

    // Weathered Chiseled Copper / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:exposed_chiseled_copper"
                }],
            "results": [{
                    "id": "minecraft:weathered_chiseled_copper"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_weathered_chiseled_copper");

    // Weathered Copper Bulb / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:exposed_copper_bulb"
                }],
            "results": [{
                    "id": "minecraft:weathered_copper_bulb"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_weathered_copper_bulb");

    // Weathered Copper Door / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:exposed_copper_door"
                }],
            "results": [{
                    "id": "minecraft:weathered_copper_door"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_weathered_copper_door");

    // Weathered Copper Grate / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:exposed_copper_grate"
                }],
            "results": [{
                    "id": "minecraft:weathered_copper_grate"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_weathered_copper_grate");

    // Weathered Copper Trapdoor / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:exposed_copper_trapdoor"
                }],
            "results": [{
                    "id": "minecraft:weathered_copper_trapdoor"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_weathered_copper_trapdoor");

    // Weathered Cut Copper / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:exposed_cut_copper"
                }],
            "results": [{
                    "id": "minecraft:weathered_cut_copper"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_weathered_cut_copper");

    // Weathered Cut Copper Slab / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:exposed_cut_copper_slab"
                }],
            "results": [{
                    "id": "minecraft:weathered_cut_copper_slab"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_weathered_cut_copper_slab");

    // Weathered Cut Copper Stairs / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:exposed_cut_copper_stairs"
                }],
            "results": [{
                    "id": "minecraft:weathered_cut_copper_stairs"
                }]
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_channeling_weathered_cut_copper_stairs");

    // Wet Sponge / Native
    event.custom({
            "type": "create_aquatic_ambitions:channeling",
            "ingredients": [{
                    "item": "minecraft:sponge"
                }],
            "results": [{
                    "id": "minecraft:wet_sponge"
                }, {
                    "chance": 0.25,
                    "id": "minecraft:wet_sponge"
                }]
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_channeling_wet_sponge_revival");

    // Mechanical Conduit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_hydraulic_machine"
                },
                "I": {
                    "item": "create_aquatic_ambitions:prismarine_alloy_rod"
                },
                "P": {
                    "item": "create_aquatic_ambitions:prismarine_alloy"
                },
                "U": {
                    "item": "create:fluid_pipe"
                }
            },
            "pattern": [
                "III",
                "IAI",
                "PUP"
            ],
            "result": {
                "count": 1,
                "id": "create_aquatic_ambitions:mechanical_conduit"
            }
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_crafting_materials_mechanical_conduit");

    // Prismarine Alloy Block / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "C": {
                    "item": "create_aquatic_ambitions:prismarine_alloy"
                }
            },
            "pattern": [
                "CCC",
                "CCC",
                "CCC"
            ],
            "result": {
                "count": 1,
                "id": "create_aquatic_ambitions:prismarine_alloy_block"
            }
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_crafting_materials_prismarine_alloy_block");

    // Prismarine Alloy Rod / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "I": {
                    "item": "create_aquatic_ambitions:prismarine_alloy"
                }
            },
            "pattern": [
                "I",
                "I"
            ],
            "result": {
                "count": 1,
                "id": "create_aquatic_ambitions:prismarine_alloy_rod"
            }
        })
        .id(
        "kubejs:tk3/addons/create_aquatic_ambitions_crafting_materials_prismarine_alloy_rod");

    // Trident / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "create_aquatic_ambitions:spiky_shell"
                },
                "I": {
                    "item": "create_aquatic_ambitions:prismarine_alloy_rod"
                }
            },
            "pattern": [
                " AA",
                " IA",
                "I  "
            ],
            "result": {
                "count": 1,
                "id": "minecraft:trident"
            }
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_crafting_materials_trident");

    // Veridium / Native
    event.custom({
            "type": "minecraft:smelting",
            "category": "blocks",
            "cookingtime": 200,
            "experience": 0.0,
            "ingredient": {
                "item": "minecraft:prismarine"
            },
            "result": {
                "count": 1,
                "id": "create:veridium"
            }
        })
        .id("kubejs:tk3/addons/create_aquatic_ambitions_smelting_veridium");

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

    //->------------------------]  Tier 2 / irons_jewelry / Native processing & construction [------------------------<-//

    // Jewelcrafting Guide / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "minecraft:book"
                }, {
                    "tag": "c:ingots/copper"
                }],
            "result": {
                "count": 1,
                "id": "irons_jewelry:jewelcrafting_guide"
            }
        })
        .id("kubejs:tk3/addons/irons_jewelry_jewelcrafting_guide");

    // Jewelcrafting Station / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "W": {
                    "item": "kubejs:tk3_hydraulic_machine"
                },
                "C": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "CC",
                "WW",
                "WW"
            ],
            "result": {
                "count": 1,
                "id": "irons_jewelry:jewelcrafting_station"
            }
        })
        .id("kubejs:tk3/addons/irons_jewelry_jewelcrafting_station");

    //->------------------------]  Tier 2 / sliceanddice / Native processing & construction [------------------------<-//

    // Sprinkler / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sliceanddice:floor_sprinkler"
                }],
            "result": {
                "count": 1,
                "id": "sliceanddice:sprinkler"
            }
        })
        .id("kubejs:tk3/addons/minecraft_sprinkler_conversion_0");

    // Floor Sprinkler / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "sliceanddice:sprinkler"
                }],
            "result": {
                "count": 1,
                "id": "sliceanddice:floor_sprinkler"
            }
        })
        .id("kubejs:tk3/addons/minecraft_sprinkler_conversion_1");

    // Rich Soil / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "farmersdelight"
                }],
            "type": "create:filling",
            "ingredients": [{
                    "item": "farmersdelight:organic_compost"
                }, {
                    "type": "neoforge:single",
                    "amount": 500,
                    "fluid": "sliceanddice:fertilizer"
                }],
            "results": [{
                    "id": "farmersdelight:rich_soil"
                }]
        })
        .id("kubejs:tk3/addons/sliceanddice_filling_rich_soil");

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

    //->------------------------]  Tier 3 / hypertube / Native processing & construction [------------------------<-//

    // Hypertube / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "item": "create:brass_sheet"
                },
                "G": {
                    "tag": "c:glass_panes"
                }
            },
            "pattern": [
                "BGB",
                "G G",
                "BGB"
            ],
            "result": {
                "count": 16,
                "id": "create_hypertube:hypertube"
            }
        })
        .id("kubejs:tk3/addons/create_hypertube_hypertube");

    // Hypertube Entrance / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "C": {
                    "item": "kubejs:tk3_precision_machine"
                },
                "F": {
                    "item": "create_hypertube:hypertube_funnel"
                },
                "G": {
                    "item": "create:cogwheel"
                }
            },
            "pattern": [
                " F ",
                " G ",
                " C "
            ],
            "result": {
                "count": 1,
                "id": "create_hypertube:hypertube_entrance"
            }
        })
        .id("kubejs:tk3/addons/create_hypertube_hypertube_entrance");

    // Hypertube Funnel / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "item": "create:brass_sheet"
                },
                "H": {
                    "item": "create_hypertube:hypertube"
                },
                "K": {
                    "item": "minecraft:dried_kelp"
                }
            },
            "pattern": [
                " B ",
                " H ",
                " K "
            ],
            "result": {
                "count": 1,
                "id": "create_hypertube:hypertube_funnel"
            }
        })
        .id("kubejs:tk3/addons/create_hypertube_hypertube_funnel");

    // Hypertube Junction / Native
    event.custom({
            "type": "create:mechanical_crafting",
            "accept_mirrored": true,
            "category": "misc",
            "key": {
                "B": {
                    "item": "kubejs:tk3_precision_machine"
                },
                "F": {
                    "item": "create_hypertube:hypertube_funnel"
                },
                "H": {
                    "item": "create_hypertube:hypertube"
                },
                "T": {
                    "item": "create:transmitter"
                }
            },
            "pattern": [
                "BTB",
                "FHF",
                " F "
            ],
            "result": {
                "count": 1,
                "id": "create_hypertube:hypertube_junction"
            }
        })
        .id("kubejs:tk3/addons/create_hypertube_hypertube_junction");

    // Hypertube Accelerator / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "C": {
                    "item": "kubejs:tk3_precision_machine"
                },
                "F": {
                    "item": "create_hypertube:hypertube_funnel"
                },
                "P": {
                    "item": "create:precision_mechanism"
                }
            },
            "pattern": [
                " F ",
                "CPC",
                " F "
            ],
            "result": {
                "count": 1,
                "id": "create_hypertube:hypertube_accelerator"
            }
        })
        .id("kubejs:tk3/addons/create_hypertube_hyper_accelerator_small_cogwheel");

    // Redstone Detector Tube Attachment / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "create:andesite_alloy"
                },
                "C": {
                    "item": "minecraft:comparator"
                },
                "H": {
                    "item": "create:brass_hand"
                }
            },
            "pattern": [
                "ACA",
                "AHA"
            ],
            "result": {
                "count": 1,
                "id": "create_hypertube:redstone_detector_tube_attachment"
            }
        })
        .id("kubejs:tk3/addons/create_hypertube_redstone_detector_tube_attachment");

    // Tube Scanner Attachment / Native
    event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "create_hypertube:redstone_detector_tube_attachment"
            },
            "results": [{
                    "chance": 100.0,
                    "id": "create_hypertube:tube_scanner_attachment"
                }],
            "sequence": [{
                    "type": "create:deploying",
                    "ingredients": [{
                            "item": "create_hypertube:tube_scanner_unfinished"
                        }, {
                            "item": "create:brass_sheet"
                        }],
                    "results": [{
                            "id": "create_hypertube:tube_scanner_unfinished"
                        }]
                }, {
                    "type": "create:deploying",
                    "ingredients": [{
                            "item": "create_hypertube:tube_scanner_unfinished"
                        }, {
                            "item": "create:electron_tube"
                        }],
                    "results": [{
                            "id": "create_hypertube:tube_scanner_unfinished"
                        }]
                }, {
                    "type": "create:deploying",
                    "ingredients": [{
                            "item": "create_hypertube:tube_scanner_unfinished"
                        }, {
                            "item": "create:brass_sheet"
                        }],
                    "results": [{
                            "id": "create_hypertube:tube_scanner_unfinished"
                        }]
                }],
            "transitional_item": {
                "id": "create_hypertube:tube_scanner_unfinished"
            },
            "loops": 1
        })
        .id("kubejs:tk3/addons/create_hypertube_sequenced_assembly_tube_scanner");

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

    //->------------------------]  Tier 4 / create_ars_nouveau / Native processing & construction [------------------------<-//

    // Brass Whisk / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "C": {
                    "item": "create:andesite_alloy"
                },
                "S": {
                    "tag": "c:plates/brass"
                }
            },
            "pattern": [
                " C ",
                "SCS",
                "SSS"
            ],
            "result": {
                "count": 1,
                "id": "createarscompact:brass_whisk"
            }
        })
        .id("kubejs:tk3/addons/createarscompact_brass_whisk");

    // Polished Amethyst / Native
    event.custom({
            "type": "create:sandpaper_polishing",
            "ingredients": [{
                    "item": "minecraft:amethyst_shard"
                }],
            "results": [{
                    "id": "createarscompact:polished_amethyst"
                }]
        })
        .id("kubejs:tk3/addons/createarscompact_polished_amethyst");

    // Sorcerer Cage / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "ars_nouveau:sourcestone"
                },
                "I": {
                    "tag": "c:plates/brass"
                }
            },
            "pattern": [
                " I ",
                "IAI",
                " I "
            ],
            "result": {
                "count": 1,
                "id": "createarscompact:sorcerer_cage"
            }
        })
        .id("kubejs:tk3/addons/createarscompact_sorcerer_cage");

    // Source Casing / Native
    event.custom({
            "type": "create:item_application",
            "ingredients": [{
                    "item": "ars_nouveau:sourcestone"
                }, {
                    "tag": "c:ingots/brass"
                }],
            "results": [{
                    "id": "createarscompact:source_casing"
                }]
        })
        .id("kubejs:tk3/addons/createarscompact_source_casing");

    // Source Engine / Native
    event.custom({
            "type": "create:sequenced_assembly",
            "ingredient": {
                "item": "create:precision_mechanism"
            },
            "loops": 1,
            "results": [{
                    "chance": 160.0,
                    "id": "createarscompact:source_engine"
                }, {
                    "chance": 8.0,
                    "id": "create:brass_sheet"
                }, {
                    "chance": 7.0,
                    "id": "createarscompact:polished_amethyst"
                }, {
                    "chance": 4.0,
                    "id": "create:cogwheel"
                }, {
                    "chance": 4.0,
                    "id": "create:brass_nugget"
                }, {
                    "chance": 4.0,
                    "id": "create:electron_tube"
                }],
            "sequence": [{
                    "type": "create:deploying",
                    "ingredients": [{
                            "item": "createarscompact:incomplete_source_engine"
                        }, {
                            "item": "ars_nouveau:fire_essence"
                        }],
                    "results": [{
                            "id": "createarscompact:incomplete_source_engine"
                        }]
                }, {
                    "type": "create:deploying",
                    "ingredients": [{
                            "item": "createarscompact:incomplete_source_engine"
                        }, {
                            "tag": "c:gems/source"
                        }],
                    "results": [{
                            "id": "createarscompact:incomplete_source_engine"
                        }]
                }, {
                    "type": "create:deploying",
                    "ingredients": [{
                            "item": "createarscompact:incomplete_source_engine"
                        }, {
                            "item": "createarscompact:source_tube"
                        }],
                    "results": [{
                            "id": "createarscompact:incomplete_source_engine"
                        }]
                }],
            "transitional_item": {
                "id": "createarscompact:incomplete_source_engine"
            }
        })
        .id("kubejs:tk3/addons/createarscompact_source_engine");

    // Source Mechanical Drill / Native
    event.custom({
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": false,
            "pedestalItems": [{
                    "item": "createarscompact:source_tube"
                }, {
                    "item": "createarscompact:source_casing"
                }, {
                    "tag": "c:gems/source"
                }, {
                    "tag": "c:ingots/brass"
                }],
            "reagent": {
                "item": "create:mechanical_drill"
            },
            "result": {
                "count": 1,
                "id": "createarscompact:source_mechanical_drill"
            },
            "sourceCost": 5000
        })
        .id("kubejs:tk3/addons/createarscompact_source_mechanical_drill");

    // Source Mechanical Mixer / Native
    event.custom({
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": false,
            "pedestalItems": [{
                    "item": "createarscompact:source_tube"
                }, {
                    "item": "createarscompact:source_casing"
                }, {
                    "item": "createarscompact:brass_whisk"
                }, {
                    "tag": "c:ingots/brass"
                }],
            "reagent": {
                "item": "create:mechanical_mixer"
            },
            "result": {
                "count": 1,
                "id": "createarscompact:source_mechanical_mixer"
            },
            "sourceCost": 5000
        })
        .id("kubejs:tk3/addons/createarscompact_source_mechanical_mixer");

    // Source Mechanical Press / Native
    event.custom({
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": false,
            "pedestalItems": [{
                    "item": "createarscompact:source_tube"
                }, {
                    "item": "createarscompact:source_casing"
                }, {
                    "tag": "c:gems/source"
                }, {
                    "tag": "c:ingots/brass"
                }],
            "reagent": {
                "item": "create:mechanical_press"
            },
            "result": {
                "count": 1,
                "id": "createarscompact:source_mechanical_press"
            },
            "sourceCost": 5000
        })
        .id("kubejs:tk3/addons/createarscompact_source_mechanical_press");

    // Source Mechanical Saw / Native
    event.custom({
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": false,
            "pedestalItems": [{
                    "item": "createarscompact:source_tube"
                }, {
                    "item": "createarscompact:source_casing"
                }, {
                    "tag": "c:gems/source"
                }, {
                    "tag": "c:plates/brass"
                }],
            "reagent": {
                "item": "create:mechanical_saw"
            },
            "result": {
                "count": 1,
                "id": "createarscompact:source_mechanical_saw"
            },
            "sourceCost": 5000
        })
        .id("kubejs:tk3/addons/createarscompact_source_mechanical_saw");

    // Source Tank / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "item": "create:fluid_tank"
                },
                "S": {
                    "tag": "c:plates/brass"
                }
            },
            "pattern": [
                "S",
                "B",
                "S"
            ],
            "result": {
                "count": 1,
                "id": "createarscompact:source_tank"
            }
        })
        .id("kubejs:tk3/addons/createarscompact_source_tank");

    // Source Tube / Native
    event.custom({
            "type": "ars_nouveau:enchanting_apparatus",
            "keepNbtOfReagent": true,
            "pedestalItems": [{
                    "tag": "c:ingots/brass"
                }, {
                    "tag": "c:gems/source"
                }, {
                    "item": "createarscompact:polished_amethyst"
                }],
            "reagent": {
                "item": "create:electron_tube"
            },
            "result": {
                "count": 1,
                "id": "createarscompact:source_tube"
            },
            "sourceCost": 2000
        })
        .id("kubejs:tk3/addons/createarscompact_source_tube");

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
        "kubejs:tk3/addons/create_enchantment_industry_sequenced_assembly_brass_bookshelf");

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

    //->------------------------]  Tier 4 / createaddition / Devices [------------------------<-//

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

    //->------------------------]  Tier 4 / mekanismtools / Native processing & construction [------------------------<-//

    // Gold Paxel / Native
    event.custom({
            "type": "mekanismtools:paxel",
            "category": "equipment",
            "key": {
                "A": {
                    "item": "minecraft:golden_axe"
                },
                "P": {
                    "item": "minecraft:golden_pickaxe"
                },
                "R": {
                    "tag": "c:rods/wooden"
                },
                "S": {
                    "item": "minecraft:golden_shovel"
                }
            },
            "pattern": [
                "APS",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:gold_paxel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_gold_paxel");

    // Iron Paxel / Native
    event.custom({
            "type": "mekanismtools:paxel",
            "category": "equipment",
            "key": {
                "A": {
                    "item": "minecraft:iron_axe"
                },
                "P": {
                    "item": "minecraft:iron_pickaxe"
                },
                "R": {
                    "tag": "c:rods/wooden"
                },
                "S": {
                    "item": "minecraft:iron_shovel"
                }
            },
            "pattern": [
                "APS",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:iron_paxel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_iron_paxel");

    // Stone Paxel / Native
    event.custom({
            "type": "mekanismtools:paxel",
            "category": "equipment",
            "key": {
                "A": {
                    "item": "minecraft:stone_axe"
                },
                "P": {
                    "item": "minecraft:stone_pickaxe"
                },
                "R": {
                    "tag": "c:rods/wooden"
                },
                "S": {
                    "item": "minecraft:stone_shovel"
                }
            },
            "pattern": [
                "APS",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:stone_paxel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_stone_paxel");

    // Wood Paxel / Native
    event.custom({
            "type": "mekanismtools:paxel",
            "category": "equipment",
            "key": {
                "A": {
                    "item": "minecraft:wooden_axe"
                },
                "P": {
                    "item": "minecraft:wooden_pickaxe"
                },
                "R": {
                    "tag": "c:rods/wooden"
                },
                "S": {
                    "item": "minecraft:wooden_shovel"
                }
            },
            "pattern": [
                "APS",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:wood_paxel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_wood_paxel");

    // Nugget Bronze / Native
    event.custom({
            "type": "minecraft:blasting",
            "category": "misc",
            "cookingtime": 100,
            "experience": 0.1,
            "ingredient": [{
                    "item": "mekanismtools:bronze_helmet"
                }, {
                    "item": "mekanismtools:bronze_chestplate"
                }, {
                    "item": "mekanismtools:bronze_leggings"
                }, {
                    "item": "mekanismtools:bronze_boots"
                }, {
                    "item": "mekanismtools:bronze_sword"
                }, {
                    "item": "mekanismtools:bronze_pickaxe"
                }, {
                    "item": "mekanismtools:bronze_axe"
                }, {
                    "item": "mekanismtools:bronze_shovel"
                }, {
                    "item": "mekanismtools:bronze_hoe"
                }, {
                    "item": "mekanismtools:bronze_paxel"
                }],
            "result": {
                "count": 1,
                "id": "mekanism:nugget_bronze"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_bronze_nugget_from_blasting");

    // Bronze Shield / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/bronze"
                },
                "P": {
                    "item": "minecraft:shield"
                }
            },
            "pattern": [
                "IPI",
                "III",
                " I "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:bronze_shield"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_bronze_shield");

    // Bronze Boots / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/bronze"
                }
            },
            "pattern": [
                "I I",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:bronze_boots"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_bronze_armor_boots");

    // Bronze Chestplate / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/bronze"
                }
            },
            "pattern": [
                "I I",
                "III",
                "III"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:bronze_chestplate"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_bronze_armor_chestplate");

    // Bronze Helmet / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/bronze"
                }
            },
            "pattern": [
                "III",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:bronze_helmet"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_bronze_armor_helmet");

    // Bronze Leggings / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/bronze"
                }
            },
            "pattern": [
                "III",
                "I I",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:bronze_leggings"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_bronze_armor_leggings");

    // Bronze Axe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/bronze"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "II",
                "IR",
                " R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:bronze_axe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_bronze_tools_axe");

    // Bronze Hoe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/bronze"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "II",
                " R",
                " R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:bronze_hoe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_bronze_tools_hoe");

    // Bronze Paxel / Native
    event.custom({
            "type": "mekanismtools:paxel",
            "category": "equipment",
            "key": {
                "A": {
                    "item": "mekanismtools:bronze_axe"
                },
                "P": {
                    "item": "mekanismtools:bronze_pickaxe"
                },
                "R": {
                    "tag": "c:rods/wooden"
                },
                "S": {
                    "item": "mekanismtools:bronze_shovel"
                }
            },
            "pattern": [
                "APS",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:bronze_paxel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_bronze_tools_paxel");

    // Bronze Pickaxe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/bronze"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "III",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:bronze_pickaxe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_bronze_tools_pickaxe");

    // Bronze Shovel / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/bronze"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "I",
                "R",
                "R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:bronze_shovel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_bronze_tools_shovel");

    // Bronze Sword / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/bronze"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "I",
                "I",
                "R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:bronze_sword"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_bronze_tools_sword");

    // Lapis Lazuli Shield / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:gems/lapis"
                },
                "P": {
                    "item": "minecraft:shield"
                }
            },
            "pattern": [
                "IPI",
                "III",
                " I "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:lapis_lazuli_shield"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_lapis_lazuli_shield");

    // Lapis Lazuli Boots / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:gems/lapis"
                }
            },
            "pattern": [
                "I I",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:lapis_lazuli_boots"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_lapis_lazuli_armor_boots");

    // Lapis Lazuli Chestplate / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:gems/lapis"
                }
            },
            "pattern": [
                "I I",
                "III",
                "III"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:lapis_lazuli_chestplate"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_lapis_lazuli_armor_chestplate");

    // Lapis Lazuli Helmet / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:gems/lapis"
                }
            },
            "pattern": [
                "III",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:lapis_lazuli_helmet"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_lapis_lazuli_armor_helmet");

    // Lapis Lazuli Leggings / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:gems/lapis"
                }
            },
            "pattern": [
                "III",
                "I I",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:lapis_lazuli_leggings"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_lapis_lazuli_armor_leggings");

    // Lapis Lazuli Axe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:gems/lapis"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "II",
                "IR",
                " R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:lapis_lazuli_axe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_lapis_lazuli_tools_axe");

    // Lapis Lazuli Hoe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:gems/lapis"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "II",
                " R",
                " R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:lapis_lazuli_hoe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_lapis_lazuli_tools_hoe");

    // Lapis Lazuli Paxel / Native
    event.custom({
            "type": "mekanismtools:paxel",
            "category": "equipment",
            "key": {
                "A": {
                    "item": "mekanismtools:lapis_lazuli_axe"
                },
                "P": {
                    "item": "mekanismtools:lapis_lazuli_pickaxe"
                },
                "R": {
                    "tag": "c:rods/wooden"
                },
                "S": {
                    "item": "mekanismtools:lapis_lazuli_shovel"
                }
            },
            "pattern": [
                "APS",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:lapis_lazuli_paxel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_lapis_lazuli_tools_paxel");

    // Lapis Lazuli Pickaxe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:gems/lapis"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "III",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:lapis_lazuli_pickaxe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_lapis_lazuli_tools_pickaxe");

    // Lapis Lazuli Shovel / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:gems/lapis"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "I",
                "R",
                "R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:lapis_lazuli_shovel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_lapis_lazuli_tools_shovel");

    // Lapis Lazuli Sword / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:gems/lapis"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "I",
                "I",
                "R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:lapis_lazuli_sword"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_lapis_lazuli_tools_sword");

    // Nugget Osmium / Native
    event.custom({
            "type": "minecraft:blasting",
            "category": "misc",
            "cookingtime": 100,
            "experience": 0.1,
            "ingredient": [{
                    "item": "mekanismtools:osmium_helmet"
                }, {
                    "item": "mekanismtools:osmium_chestplate"
                }, {
                    "item": "mekanismtools:osmium_leggings"
                }, {
                    "item": "mekanismtools:osmium_boots"
                }, {
                    "item": "mekanismtools:osmium_sword"
                }, {
                    "item": "mekanismtools:osmium_pickaxe"
                }, {
                    "item": "mekanismtools:osmium_axe"
                }, {
                    "item": "mekanismtools:osmium_shovel"
                }, {
                    "item": "mekanismtools:osmium_hoe"
                }, {
                    "item": "mekanismtools:osmium_paxel"
                }],
            "result": {
                "count": 1,
                "id": "mekanism:nugget_osmium"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_osmium_nugget_from_blasting");

    // Osmium Shield / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "minecraft:shield"
                }
            },
            "pattern": [
                "IPI",
                "III",
                " I "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:osmium_shield"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_osmium_shield");

    // Osmium Boots / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/osmium"
                }
            },
            "pattern": [
                "I I",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:osmium_boots"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_osmium_armor_boots");

    // Osmium Chestplate / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/osmium"
                }
            },
            "pattern": [
                "I I",
                "III",
                "III"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:osmium_chestplate"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_osmium_armor_chestplate");

    // Osmium Helmet / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/osmium"
                }
            },
            "pattern": [
                "III",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:osmium_helmet"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_osmium_armor_helmet");

    // Osmium Leggings / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/osmium"
                }
            },
            "pattern": [
                "III",
                "I I",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:osmium_leggings"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_osmium_armor_leggings");

    // Osmium Axe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "II",
                "IR",
                " R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:osmium_axe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_osmium_tools_axe");

    // Osmium Hoe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "II",
                " R",
                " R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:osmium_hoe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_osmium_tools_hoe");

    // Osmium Paxel / Native
    event.custom({
            "type": "mekanismtools:paxel",
            "category": "equipment",
            "key": {
                "A": {
                    "item": "mekanismtools:osmium_axe"
                },
                "P": {
                    "item": "mekanismtools:osmium_pickaxe"
                },
                "R": {
                    "tag": "c:rods/wooden"
                },
                "S": {
                    "item": "mekanismtools:osmium_shovel"
                }
            },
            "pattern": [
                "APS",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:osmium_paxel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_osmium_tools_paxel");

    // Osmium Pickaxe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "III",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:osmium_pickaxe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_osmium_tools_pickaxe");

    // Osmium Shovel / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "I",
                "R",
                "R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:osmium_shovel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_osmium_tools_shovel");

    // Osmium Sword / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "I",
                "I",
                "R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:osmium_sword"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_osmium_tools_sword");

    // Nugget Steel / Native
    event.custom({
            "type": "minecraft:blasting",
            "category": "misc",
            "cookingtime": 100,
            "experience": 0.1,
            "ingredient": [{
                    "item": "mekanismtools:steel_helmet"
                }, {
                    "item": "mekanismtools:steel_chestplate"
                }, {
                    "item": "mekanismtools:steel_leggings"
                }, {
                    "item": "mekanismtools:steel_boots"
                }, {
                    "item": "mekanismtools:steel_sword"
                }, {
                    "item": "mekanismtools:steel_pickaxe"
                }, {
                    "item": "mekanismtools:steel_axe"
                }, {
                    "item": "mekanismtools:steel_shovel"
                }, {
                    "item": "mekanismtools:steel_hoe"
                }, {
                    "item": "mekanismtools:steel_paxel"
                }],
            "result": {
                "count": 1,
                "id": "mekanism:nugget_steel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_steel_nugget_from_blasting");

    // Steel Shield / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/steel"
                },
                "P": {
                    "item": "minecraft:shield"
                }
            },
            "pattern": [
                "IPI",
                "III",
                " I "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:steel_shield"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_steel_shield");

    // Steel Boots / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "I I",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:steel_boots"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_steel_armor_boots");

    // Steel Chestplate / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "I I",
                "III",
                "III"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:steel_chestplate"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_steel_armor_chestplate");

    // Steel Helmet / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "III",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:steel_helmet"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_steel_armor_helmet");

    // Steel Leggings / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "III",
                "I I",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:steel_leggings"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_steel_armor_leggings");

    // Steel Axe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/steel"
                },
                "R": {
                    "tag": "c:ingots/iron"
                }
            },
            "pattern": [
                "II",
                "IR",
                " R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:steel_axe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_steel_tools_axe");

    // Steel Hoe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/steel"
                },
                "R": {
                    "tag": "c:ingots/iron"
                }
            },
            "pattern": [
                "II",
                " R",
                " R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:steel_hoe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_steel_tools_hoe");

    // Steel Paxel / Native
    event.custom({
            "type": "mekanismtools:paxel",
            "category": "equipment",
            "key": {
                "A": {
                    "item": "mekanismtools:steel_axe"
                },
                "P": {
                    "item": "mekanismtools:steel_pickaxe"
                },
                "R": {
                    "tag": "c:ingots/iron"
                },
                "S": {
                    "item": "mekanismtools:steel_shovel"
                }
            },
            "pattern": [
                "APS",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:steel_paxel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_steel_tools_paxel");

    // Steel Pickaxe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/steel"
                },
                "R": {
                    "tag": "c:ingots/iron"
                }
            },
            "pattern": [
                "III",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:steel_pickaxe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_steel_tools_pickaxe");

    // Steel Shovel / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/steel"
                },
                "R": {
                    "tag": "c:ingots/iron"
                }
            },
            "pattern": [
                "I",
                "R",
                "R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:steel_shovel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_steel_tools_shovel");

    // Steel Sword / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/steel"
                },
                "R": {
                    "tag": "c:ingots/iron"
                }
            },
            "pattern": [
                "I",
                "I",
                "R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:steel_sword"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_steel_tools_sword");

    //->------------------------]  Tier 5 / Advanced lift [------------------------<-//

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

    //->------------------------]  Tier 5 / Assembly tools [------------------------<-//

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

    //->------------------------]  Tier 5 / mekanismtools / Native processing & construction [------------------------<-//

    // Diamond Paxel / Native
    event.custom({
            "type": "mekanismtools:paxel",
            "category": "equipment",
            "key": {
                "A": {
                    "item": "minecraft:diamond_axe"
                },
                "P": {
                    "item": "minecraft:diamond_pickaxe"
                },
                "R": {
                    "tag": "c:rods/wooden"
                },
                "S": {
                    "item": "minecraft:diamond_shovel"
                }
            },
            "pattern": [
                "APS",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:diamond_paxel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_diamond_paxel");

    // Netherite Paxel / Native
    event.custom({
            "type": "minecraft:smithing_transform",
            "addition": {
                "item": "minecraft:netherite_ingot"
            },
            "base": {
                "item": "mekanismtools:diamond_paxel"
            },
            "result": {
                "count": 1,
                "id": "mekanismtools:netherite_paxel"
            },
            "template": {
                "item": "minecraft:netherite_upgrade_smithing_template"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_netherite_paxel");

    //->------------------------]  Tier 5 / sliceanddice / Native processing & construction [------------------------<-//

    // Hot Cocoa / Native
    event.custom({
            "neoforge:conditions": [{
                    "type": "neoforge:mod_loaded",
                    "modid": "farmersdelight"
                }],
            "type": "create:filling",
            "ingredients": [{
                    "item": "minecraft:glass_bottle"
                }, {
                    "type": "neoforge:single",
                    "amount": 250,
                    "fluid": "create:chocolate"
                }],
            "results": [{
                    "id": "farmersdelight:hot_cocoa"
                }]
        })
        .id("kubejs:tk3/addons/sliceanddice_filling_hot_cocoa_from_fluid");

    //->------------------------]  Tier 6 / Magic & settlement machines [------------------------<-//

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

    //->------------------------]  Tier 6 / appmek / Native processing & construction [------------------------<-//

    // Chemical Cell Housing / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "O": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "Q": {
                    "item": "ae2:quartz_glass"
                },
                "R": {
                    "tag": "c:dusts/redstone"
                }
            },
            "pattern": [
                "QRQ",
                "R R",
                "OOO"
            ],
            "result": {
                "count": 1,
                "id": "appmek:chemical_cell_housing"
            }
        })
        .id("kubejs:tk3/addons/appmek_chemical_cell_housing");

    // Portable Chemical Cell 1K / Native
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
                    "item": "appmek:chemical_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "appmek:portable_chemical_cell_1k"
            }
        })
        .id("kubejs:tk3/addons/appmek_portable_chemical_cell_1k");

    // Chemical Storage Cell 4K / Native
    event.custom({
            "type": "ae2:storage_cell_upgrade",
            "input_cell": "appmek:chemical_storage_cell_1k",
            "input_component": "ae2:cell_component_4k",
            "result_cell": "appmek:chemical_storage_cell_4k",
            "result_component": "ae2:cell_component_1k"
        })
        .id("kubejs:tk3/addons/appmek_upgrade_chemical_storage_cell_1k_to_4k");

    // Portable Chemical Cell 4K / Native
    event.custom({
            "type": "ae2:storage_cell_upgrade",
            "input_cell": "appmek:portable_chemical_cell_1k",
            "input_component": "ae2:cell_component_4k",
            "result_cell": "appmek:portable_chemical_cell_4k",
            "result_component": "ae2:cell_component_1k"
        })
        .id("kubejs:tk3/addons/appmek_upgrade_portable_chemical_cell_1k_to_4k");

    // Chemical Storage Cell 1K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "appmek:chemical_cell_housing"
                }, {
                    "item": "ae2:cell_component_1k"
                }],
            "result": {
                "count": 1,
                "id": "appmek:chemical_storage_cell_1k"
            }
        })
        .id("kubejs:tk3/addons/appmek_chemical_storage_cell_1k");

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

    //->------------------------]  Tier 6 / mekanismtools / Native processing & construction [------------------------<-//

    // Nugget Refined Glowstone / Native
    event.custom({
            "type": "minecraft:blasting",
            "category": "misc",
            "cookingtime": 100,
            "experience": 0.1,
            "ingredient": [{
                    "item": "mekanismtools:refined_glowstone_helmet"
                }, {
                    "item": "mekanismtools:refined_glowstone_chestplate"
                }, {
                    "item": "mekanismtools:refined_glowstone_leggings"
                }, {
                    "item": "mekanismtools:refined_glowstone_boots"
                }, {
                    "item": "mekanismtools:refined_glowstone_sword"
                }, {
                    "item": "mekanismtools:refined_glowstone_pickaxe"
                }, {
                    "item": "mekanismtools:refined_glowstone_axe"
                }, {
                    "item": "mekanismtools:refined_glowstone_shovel"
                }, {
                    "item": "mekanismtools:refined_glowstone_hoe"
                }, {
                    "item": "mekanismtools:refined_glowstone_paxel"
                }],
            "result": {
                "count": 1,
                "id": "mekanism:nugget_refined_glowstone"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_glowstone_nugget_from_blasting");

    // Refined Glowstone Shield / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_glowstone"
                },
                "P": {
                    "item": "minecraft:shield"
                }
            },
            "pattern": [
                "IPI",
                "III",
                " I "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_glowstone_shield"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_glowstone_shield");

    // Refined Glowstone Boots / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_glowstone"
                }
            },
            "pattern": [
                "I I",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_glowstone_boots"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_glowstone_armor_boots");

    // Refined Glowstone Chestplate / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_glowstone"
                }
            },
            "pattern": [
                "I I",
                "III",
                "III"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_glowstone_chestplate"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_glowstone_armor_chestplate");

    // Refined Glowstone Helmet / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_glowstone"
                }
            },
            "pattern": [
                "III",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_glowstone_helmet"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_glowstone_armor_helmet");

    // Refined Glowstone Leggings / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_glowstone"
                }
            },
            "pattern": [
                "III",
                "I I",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_glowstone_leggings"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_glowstone_armor_leggings");

    // Refined Glowstone Axe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_glowstone"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "II",
                "IR",
                " R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_glowstone_axe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_glowstone_tools_axe");

    // Refined Glowstone Hoe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_glowstone"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "II",
                " R",
                " R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_glowstone_hoe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_glowstone_tools_hoe");

    // Refined Glowstone Paxel / Native
    event.custom({
            "type": "mekanismtools:paxel",
            "category": "equipment",
            "key": {
                "A": {
                    "item": "mekanismtools:refined_glowstone_axe"
                },
                "P": {
                    "item": "mekanismtools:refined_glowstone_pickaxe"
                },
                "R": {
                    "tag": "c:rods/wooden"
                },
                "S": {
                    "item": "mekanismtools:refined_glowstone_shovel"
                }
            },
            "pattern": [
                "APS",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_glowstone_paxel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_glowstone_tools_paxel");

    // Refined Glowstone Pickaxe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_glowstone"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "III",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_glowstone_pickaxe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_glowstone_tools_pickaxe");

    // Refined Glowstone Shovel / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_glowstone"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "I",
                "R",
                "R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_glowstone_shovel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_glowstone_tools_shovel");

    // Refined Glowstone Sword / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_glowstone"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "I",
                "I",
                "R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_glowstone_sword"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_glowstone_tools_sword");

    // Nugget Refined Obsidian / Native
    event.custom({
            "type": "minecraft:blasting",
            "category": "misc",
            "cookingtime": 100,
            "experience": 0.1,
            "ingredient": [{
                    "item": "mekanismtools:refined_obsidian_helmet"
                }, {
                    "item": "mekanismtools:refined_obsidian_chestplate"
                }, {
                    "item": "mekanismtools:refined_obsidian_leggings"
                }, {
                    "item": "mekanismtools:refined_obsidian_boots"
                }, {
                    "item": "mekanismtools:refined_obsidian_sword"
                }, {
                    "item": "mekanismtools:refined_obsidian_pickaxe"
                }, {
                    "item": "mekanismtools:refined_obsidian_axe"
                }, {
                    "item": "mekanismtools:refined_obsidian_shovel"
                }, {
                    "item": "mekanismtools:refined_obsidian_hoe"
                }, {
                    "item": "mekanismtools:refined_obsidian_paxel"
                }],
            "result": {
                "count": 1,
                "id": "mekanism:nugget_refined_obsidian"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_obsidian_nugget_from_blasting");

    // Refined Obsidian Shield / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                },
                "P": {
                    "item": "minecraft:shield"
                }
            },
            "pattern": [
                "IPI",
                "III",
                " I "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_obsidian_shield"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_obsidian_shield");

    // Refined Obsidian Boots / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                }
            },
            "pattern": [
                "I I",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_obsidian_boots"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_obsidian_armor_boots");

    // Refined Obsidian Chestplate / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                }
            },
            "pattern": [
                "I I",
                "III",
                "III"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_obsidian_chestplate"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_obsidian_armor_chestplate");

    // Refined Obsidian Helmet / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                }
            },
            "pattern": [
                "III",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_obsidian_helmet"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_obsidian_armor_helmet");

    // Refined Obsidian Leggings / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                }
            },
            "pattern": [
                "III",
                "I I",
                "I I"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_obsidian_leggings"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_obsidian_armor_leggings");

    // Refined Obsidian Axe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "II",
                "IR",
                " R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_obsidian_axe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_obsidian_tools_axe");

    // Refined Obsidian Hoe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "II",
                " R",
                " R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_obsidian_hoe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_obsidian_tools_hoe");

    // Refined Obsidian Paxel / Native
    event.custom({
            "type": "mekanismtools:paxel",
            "category": "equipment",
            "key": {
                "A": {
                    "item": "mekanismtools:refined_obsidian_axe"
                },
                "P": {
                    "item": "mekanismtools:refined_obsidian_pickaxe"
                },
                "R": {
                    "tag": "c:rods/wooden"
                },
                "S": {
                    "item": "mekanismtools:refined_obsidian_shovel"
                }
            },
            "pattern": [
                "APS",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_obsidian_paxel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_obsidian_tools_paxel");

    // Refined Obsidian Pickaxe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "III",
                " R ",
                " R "
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_obsidian_pickaxe"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_obsidian_tools_pickaxe");

    // Refined Obsidian Shovel / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "I",
                "R",
                "R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_obsidian_shovel"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_obsidian_tools_shovel");

    // Refined Obsidian Sword / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                },
                "R": {
                    "tag": "c:rods/wooden"
                }
            },
            "pattern": [
                "I",
                "I",
                "R"
            ],
            "result": {
                "count": 1,
                "id": "mekanismtools:refined_obsidian_sword"
            }
        })
        .id("kubejs:tk3/addons/mekanismtools_refined_obsidian_tools_sword");

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
        "kubejs:tk3/addons/simulated_crafting_light_blue_nameplate_from_other_nameplate");

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
        "kubejs:tk3/addons/simulated_crafting_light_gray_nameplate_from_other_nameplate");

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

    //->------------------------]  Tier 7 / appmek / Native processing & construction [------------------------<-//

    // Chemical Storage Cell 16K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "appmek:chemical_cell_housing"
                }, {
                    "item": "ae2:cell_component_16k"
                }],
            "result": {
                "count": 1,
                "id": "appmek:chemical_storage_cell_16k"
            }
        })
        .id("kubejs:tk3/addons/appmek_chemical_storage_cell_16k");

    // Portable Chemical Cell 16K / Native
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
                    "item": "appmek:chemical_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "appmek:portable_chemical_cell_16k"
            }
        })
        .id("kubejs:tk3/addons/appmek_portable_chemical_cell_16k");

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

    // Dragonforge Fire Brick / Shaped
    event.shaped(
        "4x iceandfire:dragonforge_fire_brick",
        [
            "BDB",
            "DFD",
            "BDB"
        ], {
            "B": "iceandfire:dragonbone",
            "D": "minecraft:obsidian",
            "F": "kubejs:tk3_containment_frame"
        })
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

    // Dragonforge Ice Brick / Shaped
    event.shaped(
        "4x iceandfire:dragonforge_ice_brick",
        [
            "BDB",
            "DFD",
            "BDB"
        ], {
            "B": "iceandfire:dragonbone",
            "D": "minecraft:obsidian",
            "F": "kubejs:tk3_containment_frame"
        })
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

    // Dragonforge Lightning Brick / Shaped
    event.shaped(
        "4x iceandfire:dragonforge_lightning_brick",
        [
            "BDB",
            "DFD",
            "BDB"
        ], {
            "B": "iceandfire:dragonbone",
            "D": "minecraft:obsidian",
            "F": "kubejs:tk3_containment_frame"
        })
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

    //->------------------------]  Tier 9 / appmek / Native processing & construction [------------------------<-//

    // Chemical Storage Cell 64K / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "appmek:chemical_cell_housing"
                }, {
                    "item": "ae2:cell_component_64k"
                }],
            "result": {
                "count": 1,
                "id": "appmek:chemical_storage_cell_64k"
            }
        })
        .id("kubejs:tk3/addons/appmek_chemical_storage_cell_64k");

    // Portable Chemical Cell 64K / Native
    event.custom({
            "type": "ae2:storage_cell_upgrade",
            "input_cell": "appmek:portable_chemical_cell_1k",
            "input_component": "ae2:cell_component_64k",
            "result_cell": "appmek:portable_chemical_cell_64k",
            "result_component": "ae2:cell_component_1k"
        })
        .id("kubejs:tk3/addons/appmek_upgrade_portable_chemical_cell_1k_to_64k");

    //->------------------------]  Tier 10 / appmek / Native processing & construction [------------------------<-//

    // Portable Chemical Cell 256K / Native
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
                    "item": "appmek:chemical_cell_housing"
                }],
            "result": {
                "count": 1,
                "id": "appmek:portable_chemical_cell_256k"
            }
        })
        .id("kubejs:tk3/addons/appmek_portable_chemical_cell_256k");

    // Chemical Storage Cell 256K / Native
    event.custom({
            "type": "ae2:storage_cell_upgrade",
            "input_cell": "appmek:chemical_storage_cell_64k",
            "input_component": "ae2:cell_component_256k",
            "result_cell": "appmek:chemical_storage_cell_256k",
            "result_component": "ae2:cell_component_64k"
        })
        .id("kubejs:tk3/addons/appmek_upgrade_chemical_storage_cell_64k_to_256k");

});
