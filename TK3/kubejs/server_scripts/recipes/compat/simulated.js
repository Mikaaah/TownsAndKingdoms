// priority: 0
// TK3 compatibility/integration recipes for the simulated namespace.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 7 / Airship controls & instruments [------------------------<-//


    // Altitude Sensor / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": {
                "item": "create:speedometer"
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
                "item": "createaddition:redstone_relay"
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
                "item": "create:precision_mechanism"
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
                "item": "create:electron_tube"
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
                "item": "minecraft:spyglass"
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
                "item": "createaddition:digital_adapter"
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
                "item": "minecraft:compass"
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
                "item": "minecraft:spyglass"
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
                "item": "kubejs:tk3_chemical_mechanism"
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
                "item": "kubejs:tk3_chemical_mechanism"
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
                "item": "createaddition:capacitor"
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
                "item": "createaddition:copper_spool"
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
                "item": "create:andesite_alloy"
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
                "item": "create:precision_mechanism"
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
                "item": "create:shaft"
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
                "item": "create:precision_mechanism"
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
                "item": "create:precision_mechanism"
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
                "item": "create:andesite_alloy"
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
                "item": "create:shaft"
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
                "item": "create:speedometer"
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
                "item": "create:precision_mechanism"
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
                "item": "kubejs:tk3_chemical_mechanism"
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
});
