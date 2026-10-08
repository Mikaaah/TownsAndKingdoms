// priority: 0
// TK3 compatibility/integration recipes for mekanismgenerators. Split from the former monolithic industrial file.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 5 / Generator devices [------------------------<-//

    // Solar Generator / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "#": {
                "item": "mekanismgenerators:solar_panel"
            },
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "E": {
                "item": "mekanism:energy_tablet"
            },
            "I": {
                "tag": "c:ingots/iron"
            },
            "O": {
                "tag": "c:ingots/osmium"
            },
            "Z": {
                "item": "kubejs:tk3_inductive_mechanism"
            }
        },
        "pattern": [
            "###",
            "ZIA",
            "OEO"
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:solar_generator"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_solar_generator");

    // Advanced Solar Generator / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "I": {
                "tag": "c:ingots/iron"
            },
            "P": {
                "item": "mekanismgenerators:solar_generator"
            },
            "Z": {
                "item": "kubejs:tk3_inductive_mechanism"
            }
        },
        "pattern": [
            "PZP",
            "PAP",
            "III"
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:advanced_solar_generator"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_advanced_solar_generator");

    // Wind Generator / Native
    event.custom({
        "type": "mekanism:mek_data",
        "category": "misc",
        "key": {
            "C": {
                "tag": "c:circuits/basic"
            },
            "E": {
                "item": "mekanism:energy_tablet"
            },
            "O": {
                "tag": "c:ingots/osmium"
            },
            "Z": {
                "item": "kubejs:tk3_inductive_mechanism"
            }
        },
        "pattern": [
            " O ",
            "OZO",
            "ECE"
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:wind_generator"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_wind_generator");

    // Bio Generator / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "B": {
                "tag": "c:fuels/bio"
            },
            "C": {
                "tag": "c:circuits/basic"
            },
            "I": {
                "tag": "c:ingots/iron"
            },
            "R": {
                "tag": "c:dusts/redstone"
            },
            "Z": {
                "item": "kubejs:tk3_inductive_mechanism"
            }
        },
        "pattern": [
            "RZR",
            "BCB",
            "IAI"
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:bio_generator"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_bio_generator");

    //->------------------------]  Tier 6 / Generator devices [------------------------<-//

    // Gas Burning Generator / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "item": "mekanism:electrolytic_core"
            },
            "O": {
                "tag": "c:ingots/osmium"
            },
            "X": {
                "item": "mekanism:steel_casing"
            },
            "Z": {
                "item": "kubejs:tk3_arcane_mechanism"
            }
        },
        "pattern": [
            "OZO",
            "XCX",
            "OAO"
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:gas_burning_generator"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_gas_burning_generator");

    //->------------------------]  Tier 8 / Generator devices [------------------------<-//

    // Fission Reactor Port / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "C": {
                "tag": "c:circuits/elite"
            },
            "F": {
                "item": "mekanismgenerators:fission_reactor_casing"
            },
            "Z": {
                "item": "kubejs:tk3_containment_mechanism"
            }
        },
        "pattern": [
            " Z ",
            "FCF",
            " F "
        ],
        "result": {
            "count": 2,
            "id": "mekanismgenerators:fission_reactor_port"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_fission_reactor_port");

    // Fission Reactor Logic Adapter / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "R": {
                "tag": "c:dusts/redstone"
            },
            "Z": {
                "item": "mekanismgenerators:fission_reactor_casing"
            }
        },
        "pattern": [
            " R ",
            "RZR",
            " R "
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:fission_reactor_logic_adapter"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_fission_reactor_logic_adapter");

    // Fission Fuel Assembly / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "I": {
                "tag": "c:ingots/lead"
            },
            "S": {
                "tag": "c:ingots/steel"
            },
            "T": {
                "item": "mekanism:basic_chemical_tank"
            },
            "Z": {
                "item": "mekanism:alloy_reinforced"
            }
        },
        "pattern": [
            "ZSI",
            "ITI",
            "ISI"
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:fission_fuel_assembly"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_fission_fuel_assembly");

    // Control Rod Assembly / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "C": {
                "tag": "c:circuits/elite"
            },
            "I": {
                "tag": "c:ingots/lead"
            },
            "S": {
                "tag": "c:ingots/steel"
            },
            "Z": {
                "item": "mekanism:alloy_reinforced"
            }
        },
        "pattern": [
            "ZCI",
            "SIS",
            "SIS"
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:control_rod_assembly"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_control_rod_assembly");

    // Turbine Valve / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "#": {
                "item": "mekanismgenerators:turbine_casing"
            },
            "C": {
                "tag": "c:circuits/advanced"
            },
            "Z": {
                "item": "create:fluid_pipe"
            }
        },
        "pattern": [
            " Z ",
            "#C#",
            " # "
        ],
        "result": {
            "count": 2,
            "id": "mekanismgenerators:turbine_valve"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_turbine_valve");

    // Turbine Vent / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "#": {
                "item": "mekanismgenerators:turbine_casing"
            },
            "B": {
                "item": "minecraft:iron_bars"
            },
            "Z": {
                "item": "create:encased_fan"
            }
        },
        "pattern": [
            " Z ",
            "#B#",
            " # "
        ],
        "result": {
            "count": 2,
            "id": "mekanismgenerators:turbine_vent"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_turbine_vent");

    // Turbine Rotor / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "S": {
                "tag": "c:ingots/steel"
            },
            "Z": {
                "item": "create:shaft"
            }
        },
        "pattern": [
            "SZS",
            "SAS",
            "SAS"
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:turbine_rotor"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_turbine_rotor");

    // Turbine Blade / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "S": {
                "tag": "c:ingots/steel"
            },
            "Z": {
                "item": "create:propeller"
            }
        },
        "pattern": [
            " S ",
            "SZS",
            " S "
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:turbine_blade"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_turbine_blade");

    // Electromagnetic Coil / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "E": {
                "item": "mekanism:energy_tablet"
            },
            "I": {
                "tag": "c:ingots/gold"
            },
            "S": {
                "tag": "c:ingots/steel"
            },
            "Z": {
                "item": "createaddition:copper_spool"
            }
        },
        "pattern": [
            "SZS",
            "IEI",
            "SIS"
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:electromagnetic_coil"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_electromagnetic_coil");

    // Rotational Complex / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": {
                "tag": "mekanism:alloys/infused"
            },
            "C": {
                "tag": "c:circuits/advanced"
            },
            "S": {
                "tag": "c:ingots/steel"
            },
            "Z": {
                "item": "kubejs:tk3_containment_mechanism"
            }
        },
        "pattern": [
            "SZS",
            "CAC",
            "SAS"
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:rotational_complex"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_rotational_complex");

    // Saturating Condenser / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "B": {
                "item": "minecraft:bucket"
            },
            "I": {
                "tag": "c:ingots/tin"
            },
            "S": {
                "tag": "c:ingots/steel"
            },
            "Z": {
                "item": "create:fluid_tank"
            }
        },
        "pattern": [
            "SZS",
            "IBI",
            "SIS"
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:saturating_condenser"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_saturating_condenser");

    //->------------------------]  Tier 8 / Generator multiblock parts [------------------------<-//

    // Fission Reactor Casing / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "I": {
                "tag": "c:ingots/lead"
            },
            "X": {
                "item": "mekanism:steel_casing"
            },
            "Z": {
                "item": "mekanism:alloy_reinforced"
            }
        },
        "pattern": [
            " Z ",
            "IXI",
            " I "
        ],
        "result": {
            "count": 4,
            "id": "mekanismgenerators:fission_reactor_casing"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_fission_reactor_casing");

    // Turbine Casing / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "S": {
                "tag": "c:ingots/steel"
            },
            "Z": {
                "item": "mekanism:alloy_reinforced"
            }
        },
        "pattern": [
            " S ",
            "SZS",
            " S "
        ],
        "result": {
            "count": 4,
            "id": "mekanismgenerators:turbine_casing"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_turbine_casing");

    // Reactor Glass / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "I": {
                "tag": "c:ingots/lead"
            },
            "S": {
                "item": "mekanism:enriched_iron"
            },
            "Z": {
                "item": "mekanism:structural_glass"
            }
        },
        "pattern": [
            "SIS",
            "IZI",
            "SIS"
        ],
        "result": {
            "count": 4,
            "id": "mekanismgenerators:reactor_glass"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_reactor_glass");

    //->------------------------]  Tier 9 / Generator devices [------------------------<-//

    // Fusion Reactor Controller / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "C": {
                "tag": "c:circuits/ultimate"
            },
            "F": {
                "item": "mekanismgenerators:fusion_reactor_frame"
            },
            "T": {
                "item": "mekanism:basic_chemical_tank"
            },
            "Z": {
                "item": "kubejs:tk3_singularity_mechanism"
            }
        },
        "pattern": [
            "CZC",
            "FTF",
            "FFF"
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:fusion_reactor_controller"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_fusion_reactor_controller");

    // Fusion Reactor Port / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "C": {
                "tag": "c:circuits/ultimate"
            },
            "F": {
                "item": "mekanismgenerators:fusion_reactor_frame"
            },
            "Z": {
                "item": "mekanism:alloy_atomic"
            }
        },
        "pattern": [
            " Z ",
            "FCF",
            " F "
        ],
        "result": {
            "count": 2,
            "id": "mekanismgenerators:fusion_reactor_port"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_fusion_reactor_port");

    // Fusion Reactor Logic Adapter / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "R": {
                "tag": "c:dusts/redstone"
            },
            "Z": {
                "item": "mekanismgenerators:fusion_reactor_frame"
            }
        },
        "pattern": [
            " R ",
            "RZR",
            " R "
        ],
        "result": {
            "count": 1,
            "id": "mekanismgenerators:fusion_reactor_logic_adapter"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_fusion_reactor_logic_adapter");

    // Laser Focus Matrix / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "G": {
                "item": "mekanismgenerators:reactor_glass"
            },
            "R": {
                "tag": "c:storage_blocks/redstone"
            },
            "Z": {
                "item": "mekanism:laser_amplifier"
            }
        },
        "pattern": [
            " Z ",
            "GRG",
            " G "
        ],
        "result": {
            "count": 2,
            "id": "mekanismgenerators:laser_focus_matrix"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_laser_focus_matrix");

    //->------------------------]  Tier 9 / Generator multiblock parts [------------------------<-//

    // Fusion Reactor Frame / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "#": {
                "tag": "c:pellets/polonium"
            },
            "A": {
                "tag": "c:alloys/ultimate"
            },
            "Z": {
                "item": "mekanism:alloy_atomic"
            }
        },
        "pattern": [
            "A#A",
            "#Z#",
            "A#A"
        ],
        "result": {
            "count": 4,
            "id": "mekanismgenerators:fusion_reactor_frame"
        }
    })
        .id("kubejs:tk3/industrial/mekanismgenerators_fusion_reactor_frame");
});
