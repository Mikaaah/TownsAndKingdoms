// priority: 0
// Generated from docs/progression_manifest.json. See tools/rebuild_recipes.py.
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    //->------------------------]  Tier 4 / Mekanism / Native infusion [------------------------<-//

    // Basic Control Circuit / Native
    event.custom({
            "type": "mekanism:metallurgic_infusing",
            "chemical_input": {
                "amount": 20,
                "tag": "mekanism:redstone"
            },
            "item_input": {
                "count": 1,
                "tag": "c:ingots/osmium"
            },
            "output": {
                "count": 1,
                "id": "mekanism:basic_control_circuit"
            },
            "per_tick_usage": false
        })
        .id("kubejs:tk3/industrial/control_circuit_basic");

    // Alloy Infused / Native
    event.custom({
            "type": "mekanism:metallurgic_infusing",
            "chemical_input": {
                "amount": 10,
                "tag": "mekanism:redstone"
            },
            "item_input": {
                "count": 1,
                "tag": "c:ingots/copper"
            },
            "output": {
                "count": 1,
                "id": "mekanism:alloy_infused"
            },
            "per_tick_usage": false
        })
        .id("kubejs:tk3/industrial/metallurgic_infusing_alloy_infused");

    //->------------------------]  Tier 5 / Generator devices [------------------------<-//

    // Solar Generator / Shapeless
    event.shapeless(
        "mekanismgenerators:solar_generator",
        [
            "kubejs:tk3_ender_machine",
            "mekanism:alloy_infused",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_solar_generator");

    // Advanced Solar Generator / Shapeless
    event.shapeless(
        "mekanismgenerators:advanced_solar_generator",
        [
            "kubejs:tk3_ender_machine",
            "mekanism:alloy_infused",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_advanced_solar_generator");

    // Wind Generator / Shapeless
    event.shapeless(
        "mekanismgenerators:wind_generator",
        [
            "kubejs:tk3_ender_machine",
            "mekanism:alloy_infused",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_wind_generator");

    // Bio Generator / Shapeless
    event.shapeless(
        "mekanismgenerators:bio_generator",
        [
            "kubejs:tk3_ender_machine",
            "mekanism:alloy_infused",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_bio_generator");

    //->------------------------]  Tier 5 / Mekanism / Machines & materials [------------------------<-//

    // Boiler Casing / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "I": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                " S ",
                "SIS",
                " S "
            ],
            "result": {
                "count": 4,
                "id": "mekanism:boiler_casing"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_boiler_casing");

    // Boiler Valve / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:boiler_casing"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                }
            },
            "pattern": [
                " # ",
                "#C#",
                " # "
            ],
            "result": {
                "count": 2,
                "id": "mekanism:boiler_valve"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_boiler_valve");

    // Cardboard Box / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_ender_machine"
                }
            },
            "pattern": [
                "##",
                "##"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:cardboard_box"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_cardboard_box");

    // Chargepad / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "E": {
                    "item": "mekanism:energy_tablet"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "###",
                "SES"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:chargepad"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_chargepad");

    // Dynamic Tank / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "B": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                " S ",
                "SBS",
                " S "
            ],
            "result": {
                "count": 4,
                "id": "mekanism:dynamic_tank"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_dynamic_tank");

    // Dynamic Valve / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:dynamic_tank"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                }
            },
            "pattern": [
                " # ",
                "#C#",
                " # "
            ],
            "result": {
                "count": 2,
                "id": "mekanism:dynamic_valve"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_dynamic_valve");

    // Electric Pump / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "B": {
                    "item": "minecraft:bucket"
                },
                "O": {
                    "tag": "c:ingots/osmium"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                " B ",
                "AXA",
                "OOO"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:electric_pump"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_electric_pump");

    // Fluidic Plenisher / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "I": {
                    "tag": "c:ingots/tin"
                },
                "P": {
                    "item": "mekanism:electric_pump"
                }
            },
            "pattern": [
                "III",
                "CPC",
                "III"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:fluidic_plenisher"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_fluidic_plenisher");

    // Formulaic Assemblicator / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "tag": "c:chests/wooden"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "P": {
                    "item": "minecraft:crafter"
                },
                "S": {
                    "tag": "c:ingots/steel"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "SPS",
                "CXC",
                "S#S"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:formulaic_assemblicator"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_formulaic_assemblicator");

    // Fuelwood Heater / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "minecraft:furnace"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "S": {
                    "tag": "c:ingots/steel"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "SCS",
                "#X#",
                "SSS"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:fuelwood_heater"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_fuelwood_heater");

    // Industrial Alarm / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "redstone",
            "key": {
                "#": {
                    "item": "minecraft:redstone_lamp"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "I": {
                    "tag": "c:ingots/lead"
                }
            },
            "pattern": [
                "III",
                "C#C",
                "III"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:industrial_alarm"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_industrial_alarm");

    // Logistical Sorter / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "minecraft:piston"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "I": {
                    "tag": "c:ingots/iron"
                }
            },
            "pattern": [
                "I#I",
                "ICI",
                "III"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:logistical_sorter"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_logistical_sorter");

    // Nutritional Liquifier / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "minecraft:bowl"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "R": {
                    "tag": "c:dusts/redstone"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "RCR",
                "#X#",
                "RCR"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:nutritional_liquifier"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_nutritional_liquifier");

    // Oredictionificator / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "tag": "c:chests/wooden"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "G": {
                    "tag": "c:glass_panes"
                },
                "P": {
                    "item": "mekanism:dictionary"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "SGS",
                "CPC",
                "S#S"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:oredictionificator"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_oredictionificator");

    // Painting Machine / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:dye_base"
                },
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "ACA",
                "#X#",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:painting_machine"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_painting_machine");

    // Personal Barrel / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "G": {
                    "tag": "c:glass_blocks/cheap"
                },
                "P": {
                    "tag": "c:barrels/wooden"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "SGS",
                "PCP",
                "SSS"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:personal_barrel"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_personal_barrel");

    // Personal Chest / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "G": {
                    "tag": "c:glass_blocks/cheap"
                },
                "P": {
                    "tag": "c:chests/wooden"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "SGS",
                "PCP",
                "SSS"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:personal_chest"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_personal_chest");

    // Pigment Extractor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "minecraft:flint"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "R": {
                    "tag": "c:dusts/redstone"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "RCR",
                "#X#",
                "RCR"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:pigment_extractor"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_pigment_extractor");

    // Precision Sawmill / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "ICI",
                "AXA",
                "ICI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:precision_sawmill"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_precision_sawmill");

    // Pressure Disperser / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "S#S",
                "#A#",
                "S#S"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:pressure_disperser"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_pressure_disperser");

    // Resistive Heater / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "E": {
                    "item": "mekanism:energy_tablet"
                },
                "I": {
                    "tag": "c:ingots/tin"
                },
                "R": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "IRI",
                "RXR",
                "IEI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:resistive_heater"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_resistive_heater");

    // Security Desk / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:network_reader"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "G": {
                    "tag": "c:glass_blocks/cheap"
                },
                "S": {
                    "tag": "c:ingots/steel"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "SGS",
                "CXC",
                "S#S"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:security_desk"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_security_desk");

    // Seismic Vibrator / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "tag": "c:gems/lapis"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "I": {
                    "tag": "c:ingots/tin"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "I#I",
                "CXC",
                "III"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:seismic_vibrator"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_seismic_vibrator");

    // Structural Glass / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "G": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                " S ",
                "SGS",
                " S "
            ],
            "result": {
                "count": 4,
                "id": "mekanism:structural_glass"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_structural_glass");

    // Superheating Element / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "I": {
                    "tag": "c:ingots/copper"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "AIA",
                "IXI",
                "AIA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:superheating_element"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_superheating_element");

    // Basic Bin / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/basic"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "_": {
                    "tag": "mekanism:stone_crafting_materials"
                }
            },
            "pattern": [
                "_C_",
                "A A",
                "___"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_bin"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_bin_basic");

    // Advanced Control Circuit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "tag": "c:circuits/basic"
                }
            },
            "pattern": [
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_control_circuit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_control_circuit_advanced");

    // Advanced Control Circuit / Native
    event.custom({
            "type": "mekanism:metallurgic_infusing",
            "chemical_input": {
                "amount": 60,
                "tag": "mekanism:redstone"
            },
            "item_input": {
                "count": 1,
                "tag": "c:circuits/basic"
            },
            "output": {
                "count": 1,
                "id": "mekanism:advanced_control_circuit"
            },
            "per_tick_usage": false
        })
        .id("kubejs:tk3/industrial/mekanism_control_circuit_infused_advanced");

    // Basic Crushing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/basic"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "P": {
                    "item": "mekanism:crusher"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_crushing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_basic_crushing");

    // Basic Enriching Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/basic"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "P": {
                    "item": "mekanism:enrichment_chamber"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_enriching_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_basic_enriching");

    // Basic Infusing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/basic"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "P": {
                    "item": "mekanism:metallurgic_infuser"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_infusing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_basic_infusing");

    // Basic Sawing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/basic"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "P": {
                    "item": "mekanism:precision_sawmill"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_sawing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_basic_sawing");

    // Basic Smelting Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/basic"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "P": {
                    "item": "mekanism:energized_smelter"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_smelting_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_basic_smelting");

    // Basic Fluid Tank / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "I": {
                    "tag": "c:ingots/iron"
                }
            },
            "pattern": [
                "AIA",
                "I I",
                "AIA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_fluid_tank"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_fluid_tank_basic");

    // Deepslate Fluorite Ore / Native
    event.custom({
            "type": "mekanism:combining",
            "extra_input": {
                "count": 1,
                "tag": "c:cobblestones/deepslate"
            },
            "main_input": {
                "count": 14,
                "tag": "c:dusts/fluorite"
            },
            "output": {
                "count": 1,
                "id": "mekanism:deepslate_fluorite_ore"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_processing_fluorite_to_deepslate_ore");

    // Deepslate Lead Ore / Native
    event.custom({
            "type": "mekanism:combining",
            "extra_input": {
                "count": 1,
                "tag": "c:cobblestones/deepslate"
            },
            "main_input": {
                "count": 8,
                "tag": "c:raw_materials/lead"
            },
            "output": {
                "count": 1,
                "id": "mekanism:deepslate_lead_ore"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_processing_lead_ore_deepslate_from_raw");

    // Deepslate Osmium Ore / Native
    event.custom({
            "type": "mekanism:combining",
            "extra_input": {
                "count": 1,
                "tag": "c:cobblestones/deepslate"
            },
            "main_input": {
                "count": 8,
                "tag": "c:raw_materials/osmium"
            },
            "output": {
                "count": 1,
                "id": "mekanism:deepslate_osmium_ore"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_processing_osmium_ore_deepslate_from_raw");

    // Deepslate Tin Ore / Native
    event.custom({
            "type": "mekanism:combining",
            "extra_input": {
                "count": 1,
                "tag": "c:cobblestones/deepslate"
            },
            "main_input": {
                "count": 8,
                "tag": "c:raw_materials/tin"
            },
            "output": {
                "count": 1,
                "id": "mekanism:deepslate_tin_ore"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_processing_tin_ore_deepslate_from_raw");

    // Deepslate Uranium Ore / Native
    event.custom({
            "type": "mekanism:combining",
            "extra_input": {
                "count": 1,
                "tag": "c:cobblestones/deepslate"
            },
            "main_input": {
                "count": 8,
                "tag": "c:raw_materials/uranium"
            },
            "output": {
                "count": 1,
                "id": "mekanism:deepslate_uranium_ore"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_processing_uranium_ore_deepslate_from_raw");

    // Basic Tier Installer / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/basic"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "P": {
                    "tag": "minecraft:planks"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_tier_installer"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_tier_installer_basic");

    // Diversion Transporter / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "minecraft:iron_bars"
                },
                "R": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "RRR",
                "S#S",
                "RRR"
            ],
            "result": {
                "count": 2,
                "id": "mekanism:diversion_transporter"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_diversion_transporter");

    // Restrictive Transporter / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "S#S"
            ],
            "result": {
                "count": 2,
                "id": "mekanism:restrictive_transporter"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_restrictive_transporter");

    // Basic Pressurized Tube / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "S#S"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:basic_pressurized_tube"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_pressurized_tube_basic");

    // Basic Thermodynamic Conductor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "S#S"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:basic_thermodynamic_conductor"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_thermodynamic_conductor_basic");

    //->------------------------]  Tier 6 / Generator devices [------------------------<-//

    // Gas Burning Generator / Shapeless
    event.shapeless(
        "mekanismgenerators:gas_burning_generator",
        [
            "kubejs:tk3_chemical_machine",
            "mekanism:alloy_infused",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_gas_burning_generator");

    //->------------------------]  Tier 6 / Mekanism / Machines & materials [------------------------<-//

    // Chemical Infuser / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "T": {
                    "item": "mekanism:basic_chemical_tank"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "ACA",
                "TXT",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:chemical_infuser"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_chemical_infuser");

    // Chemical Injection Chamber / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:purification_chamber"
                },
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "I": {
                    "tag": "c:ingots/gold"
                }
            },
            "pattern": [
                "ACA",
                "I#I",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:chemical_injection_chamber"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_chemical_injection_chamber");

    // Chemical Oxidizer / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:dynamic_tank"
                },
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "P": {
                    "tag": "mekanism:personal_storage"
                },
                "T": {
                    "item": "mekanism:basic_chemical_tank"
                }
            },
            "pattern": [
                "ACA",
                "P#T",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:chemical_oxidizer"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_chemical_oxidizer");

    // Electrolytic Separator / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:electrolytic_core"
                },
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "R": {
                    "item": "kubejs:tk3_ender_machine"
                }
            },
            "pattern": [
                "IRI",
                "A#A",
                "IRI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:electrolytic_separator"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_electrolytic_separator");

    // Hdpe Rod / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:hdpe_pellet"
                }
            },
            "pattern": [
                "##",
                "##"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:hdpe_rod"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_hdpe_rod");

    // Laser / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "E": {
                    "item": "mekanism:energy_tablet"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "AE ",
                "AX#",
                "AE "
            ],
            "result": {
                "count": 1,
                "id": "mekanism:laser"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_laser");

    // Laser Amplifier / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "E": {
                    "item": "mekanism:basic_energy_cube"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "SSS",
                "SE#",
                "SSS"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:laser_amplifier"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_laser_amplifier");

    // Laser Tractor Beam / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "P": {
                    "tag": "mekanism:personal_storage"
                }
            },
            "pattern": [
                "P",
                "#"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:laser_tractor_beam"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_laser_tractor_beam");

    // Modification Station / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "c:pellets/polonium"
                },
                "C": {
                    "item": "kubejs:tk3_network_chassis"
                },
                "P": {
                    "item": "mekanism:hdpe_sheet"
                },
                "W": {
                    "tag": "c:chests/wooden"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "PWP",
                "CXC",
                "PAP"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:modification_station"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_modification_station");

    // Osmium Compressor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "B": {
                    "item": "minecraft:bucket"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "ACA",
                "BXB",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:osmium_compressor"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_osmium_compressor");

    // Pigment Mixer / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:hdpe_rod"
                },
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_network_chassis"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "ACA",
                "#X#",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:pigment_mixer"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_pigment_mixer");

    // Pressurized Reaction Chamber / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:dynamic_tank"
                },
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "P": {
                    "item": "mekanism:enrichment_chamber"
                },
                "S": {
                    "tag": "c:ingots/steel"
                },
                "T": {
                    "item": "mekanism:basic_chemical_tank"
                }
            },
            "pattern": [
                "SAS",
                "CPC",
                "T#T"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:pressurized_reaction_chamber"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_pressurized_reaction_chamber");

    // Purification Chamber / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "O": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:enrichment_chamber"
                }
            },
            "pattern": [
                "ACA",
                "OPO",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:purification_chamber"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_purification_chamber");

    // Rotary Condensentrator / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:basic_fluid_tank"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "E": {
                    "item": "mekanism:energy_tablet"
                },
                "G": {
                    "tag": "c:glass_blocks/cheap"
                },
                "T": {
                    "item": "mekanism:basic_chemical_tank"
                }
            },
            "pattern": [
                "GCG",
                "TE#",
                "GCG"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:rotary_condensentrator"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_rotary_condensentrator");

    // Advanced Bin / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "P": {
                    "item": "mekanism:basic_bin"
                },
                "_": {
                    "tag": "mekanism:stone_crafting_materials"
                }
            },
            "pattern": [
                "_C_",
                "APA",
                "___"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_bin"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_bin_advanced");

    // Advanced Chemical Tank / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "O": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:basic_chemical_tank"
                }
            },
            "pattern": [
                "AOA",
                "OPO",
                "AOA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_chemical_tank"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_chemical_tank_advanced");

    // Basic Chemical Tank / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "O": {
                    "tag": "c:ingots/osmium"
                }
            },
            "pattern": [
                "AOA",
                "O O",
                "AOA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_chemical_tank"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_chemical_tank_basic");

    // Elite Chemical Tank / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "O": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:advanced_chemical_tank"
                }
            },
            "pattern": [
                "AOA",
                "OPO",
                "AOA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_chemical_tank"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_chemical_tank_elite");

    // Elite Control Circuit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "tag": "c:circuits/advanced"
                }
            },
            "pattern": [
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_control_circuit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_control_circuit_elite");

    // Elite Control Circuit / Native
    event.custom({
            "type": "mekanism:metallurgic_infusing",
            "chemical_input": {
                "amount": 120,
                "tag": "mekanism:diamond"
            },
            "item_input": {
                "count": 1,
                "tag": "c:circuits/advanced"
            },
            "output": {
                "count": 1,
                "id": "mekanism:elite_control_circuit"
            },
            "per_tick_usage": false
        })
        .id("kubejs:tk3/industrial/mekanism_control_circuit_infused_elite");

    // Advanced Energy Cube / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "E": {
                    "item": "mekanism:energy_tablet"
                },
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:basic_energy_cube"
                }
            },
            "pattern": [
                "AEA",
                "IPI",
                "AEA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_energy_cube"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_energy_cube_advanced");

    // Hdpe Sheet / Native
    event.custom({
            "type": "mekanism:enriching",
            "input": {
                "count": 3,
                "item": "mekanism:hdpe_pellet"
            },
            "output": {
                "count": 1,
                "id": "mekanism:hdpe_sheet"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_enriching_hdpe_sheet");

    // Advanced Compressing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:basic_compressing_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_compressing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_advanced_compressing");

    // Advanced Crushing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:basic_crushing_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_crushing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_advanced_crushing");

    // Advanced Enriching Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:basic_enriching_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_enriching_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_advanced_enriching");

    // Advanced Infusing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:basic_infusing_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_infusing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_advanced_infusing");

    // Advanced Injecting Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:basic_injecting_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_injecting_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_advanced_injecting");

    // Advanced Purifying Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:basic_purifying_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_purifying_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_advanced_purifying");

    // Advanced Sawing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:basic_sawing_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_sawing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_advanced_sawing");

    // Advanced Smelting Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:basic_smelting_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_smelting_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_advanced_smelting");

    // Basic Compressing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/basic"
                },
                "C": {
                    "item": "kubejs:tk3_network_chassis"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "P": {
                    "item": "mekanism:osmium_compressor"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_compressing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_basic_compressing");

    // Basic Injecting Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/basic"
                },
                "C": {
                    "item": "kubejs:tk3_network_chassis"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "P": {
                    "item": "mekanism:chemical_injection_chamber"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_injecting_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_basic_injecting");

    // Basic Purifying Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/basic"
                },
                "C": {
                    "item": "kubejs:tk3_network_chassis"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "P": {
                    "item": "mekanism:purification_chamber"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_purifying_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_basic_purifying");

    // Advanced Fluid Tank / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "P": {
                    "item": "mekanism:basic_fluid_tank"
                }
            },
            "pattern": [
                "AIA",
                "IPI",
                "AIA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_fluid_tank"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_fluid_tank_advanced");

    // Alloy Atomic / Native
    event.custom({
            "type": "mekanism:metallurgic_infusing",
            "chemical_input": {
                "amount": 40,
                "tag": "mekanism:refined_obsidian"
            },
            "item_input": {
                "count": 1,
                "tag": "mekanism:alloys/reinforced"
            },
            "output": {
                "count": 1,
                "id": "mekanism:alloy_atomic"
            },
            "per_tick_usage": false
        })
        .id("kubejs:tk3/industrial/mekanism_metallurgic_infusing_alloy_atomic");

    // Alloy Reinforced / Native
    event.custom({
            "type": "mekanism:metallurgic_infusing",
            "chemical_input": {
                "amount": 20,
                "tag": "mekanism:diamond"
            },
            "item_input": {
                "count": 1,
                "tag": "mekanism:alloys/infused"
            },
            "output": {
                "count": 1,
                "id": "mekanism:alloy_reinforced"
            },
            "per_tick_usage": false
        })
        .id("kubejs:tk3/industrial/mekanism_metallurgic_infusing_alloy_reinforced");

    // Ingot Refined Glowstone / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "mekanism:block_refined_glowstone"
                }],
            "result": {
                "count": 9,
                "id": "mekanism:ingot_refined_glowstone"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_processing_refined_glowstone_ingot_from_block");

    // Ingot Refined Glowstone / Native
    event.custom({
            "type": "mekanism:compressing",
            "chemical_input": {
                "amount": 1,
                "chemical": "mekanism:osmium"
            },
            "item_input": {
                "count": 1,
                "tag": "c:dusts/glowstone"
            },
            "output": {
                "count": 1,
                "id": "mekanism:ingot_refined_glowstone"
            },
            "per_tick_usage": true
        })
        .id("kubejs:tk3/industrial/mekanism_processing_refined_glowstone_ingot_from_dust");

    // Ingot Refined Glowstone / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "tag": "c:nuggets/refined_glowstone"
                },
                "P": {
                    "item": "mekanism:nugget_refined_glowstone"
                }
            },
            "pattern": [
                "###",
                "#P#",
                "###"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ingot_refined_glowstone"
            }
        })
        .id(
        "kubejs:tk3/industrial/mekanism_processing_refined_glowstone_ingot_from_nuggets");

    // Dust Refined Obsidian / Native
    event.custom({
            "type": "mekanism:crushing",
            "input": {
                "count": 1,
                "tag": "c:ingots/refined_obsidian"
            },
            "output": {
                "count": 1,
                "id": "mekanism:dust_refined_obsidian"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_processing_refined_obsidian_dust_from_ingot");

    // Dust Refined Obsidian / Native
    event.custom({
            "type": "mekanism:metallurgic_infusing",
            "chemical_input": {
                "amount": 10,
                "tag": "mekanism:diamond"
            },
            "item_input": {
                "count": 1,
                "tag": "c:dusts/obsidian"
            },
            "output": {
                "count": 1,
                "id": "mekanism:dust_refined_obsidian"
            },
            "per_tick_usage": false
        })
        .id(
        "kubejs:tk3/industrial/mekanism_processing_refined_obsidian_dust_from_obsidian_dust");

    // Ingot Refined Obsidian / Native
    event.custom({
            "type": "minecraft:crafting_shapeless",
            "category": "misc",
            "ingredients": [{
                    "item": "mekanism:block_refined_obsidian"
                }],
            "result": {
                "count": 9,
                "id": "mekanism:ingot_refined_obsidian"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_processing_refined_obsidian_ingot_from_block");

    // Ingot Refined Obsidian / Native
    event.custom({
            "type": "mekanism:compressing",
            "chemical_input": {
                "amount": 1,
                "chemical": "mekanism:osmium"
            },
            "item_input": {
                "count": 1,
                "tag": "c:dusts/refined_obsidian"
            },
            "output": {
                "count": 1,
                "id": "mekanism:ingot_refined_obsidian"
            },
            "per_tick_usage": true
        })
        .id("kubejs:tk3/industrial/mekanism_processing_refined_obsidian_ingot_from_dust");

    // Ingot Refined Obsidian / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "tag": "c:nuggets/refined_obsidian"
                },
                "P": {
                    "item": "mekanism:nugget_refined_obsidian"
                }
            },
            "pattern": [
                "###",
                "#P#",
                "###"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ingot_refined_obsidian"
            }
        })
        .id(
        "kubejs:tk3/industrial/mekanism_processing_refined_obsidian_ingot_from_nuggets");

    // Hdpe Pellet / Native
    event.custom({
            "type": "mekanism:reaction",
            "chemical_input": {
                "amount": 10,
                "chemical": "mekanism:oxygen"
            },
            "duration": 60,
            "energy_required": 1000,
            "fluid_input": {
                "amount": 50,
                "tag": "c:ethene"
            },
            "item_input": {
                "count": 1,
                "item": "mekanism:substrate"
            },
            "item_output": {
                "count": 1,
                "id": "mekanism:hdpe_pellet"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_reaction_substrate_ethene_oxygen");

    // Substrate / Native
    event.custom({
            "type": "mekanism:reaction",
            "chemical_input": {
                "amount": 100,
                "chemical": "mekanism:ethene"
            },
            "chemical_output": {
                "amount": 10,
                "id": "mekanism:oxygen"
            },
            "duration": 400,
            "energy_required": 200,
            "fluid_input": {
                "amount": 200,
                "tag": "minecraft:water"
            },
            "item_input": {
                "count": 1,
                "item": "mekanism:substrate"
            },
            "item_output": {
                "count": 8,
                "id": "mekanism:substrate"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_reaction_substrate_water_ethene");

    // Substrate / Native
    event.custom({
            "type": "mekanism:reaction",
            "chemical_input": {
                "amount": 100,
                "chemical": "mekanism:hydrogen"
            },
            "chemical_output": {
                "amount": 100,
                "id": "mekanism:ethene"
            },
            "duration": 100,
            "fluid_input": {
                "amount": 10,
                "tag": "minecraft:water"
            },
            "item_input": {
                "count": 2,
                "tag": "c:fuels/bio"
            },
            "item_output": {
                "count": 1,
                "id": "mekanism:substrate"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_reaction_substrate_water_hydrogen");

    // Thermal Evaporation Block / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "I": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                " S ",
                "SIS",
                " S "
            ],
            "result": {
                "count": 4,
                "id": "mekanism:thermal_evaporation_block"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_thermal_evaporation_block");

    // Thermal Evaporation Controller / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:thermal_evaporation_block"
                },
                "B": {
                    "item": "minecraft:bucket"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                },
                "G": {
                    "tag": "c:glass_panes"
                }
            },
            "pattern": [
                "CGC",
                "#B#",
                "###"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:thermal_evaporation_controller"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_thermal_evaporation_controller");

    // Thermal Evaporation Valve / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:thermal_evaporation_block"
                },
                "C": {
                    "item": "kubejs:tk3_ender_machine"
                }
            },
            "pattern": [
                " # ",
                "#C#",
                " # "
            ],
            "result": {
                "count": 1,
                "id": "mekanism:thermal_evaporation_valve"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_thermal_evaporation_valve");

    // Advanced Tier Installer / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "tag": "minecraft:planks"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_tier_installer"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_tier_installer_advanced");

    // Advanced Logistical Transporter / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "P": {
                    "item": "mekanism:basic_logistical_transporter"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:advanced_logistical_transporter"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_logistical_transporter_advanced");

    // Advanced Mechanical Pipe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "P": {
                    "item": "mekanism:basic_mechanical_pipe"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:advanced_mechanical_pipe"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_mechanical_pipe_advanced");

    // Advanced Pressurized Tube / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "P": {
                    "item": "mekanism:basic_pressurized_tube"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:advanced_pressurized_tube"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_pressurized_tube_advanced");

    // Advanced Thermodynamic Conductor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "P": {
                    "item": "mekanism:basic_thermodynamic_conductor"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:advanced_thermodynamic_conductor"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_thermodynamic_conductor_advanced");

    // Advanced Universal Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_chemical_machine"
                },
                "P": {
                    "item": "mekanism:basic_universal_cable"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:advanced_universal_cable"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_universal_cable_advanced");

    //->------------------------]  Tier 8 / Generator devices [------------------------<-//

    // Fission Reactor Port / Shapeless
    event.shapeless(
        "mekanismgenerators:fission_reactor_port",
        [
            "kubejs:tk3_containment_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_fission_reactor_port");

    // Fission Reactor Logic Adapter / Shapeless
    event.shapeless(
        "mekanismgenerators:fission_reactor_logic_adapter",
        [
            "kubejs:tk3_containment_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_fission_reactor_logic_adapter");

    // Fission Fuel Assembly / Shapeless
    event.shapeless(
        "mekanismgenerators:fission_fuel_assembly",
        [
            "kubejs:tk3_containment_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_fission_fuel_assembly");

    // Control Rod Assembly / Shapeless
    event.shapeless(
        "mekanismgenerators:control_rod_assembly",
        [
            "kubejs:tk3_containment_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_control_rod_assembly");

    // Turbine Valve / Shapeless
    event.shapeless(
        "mekanismgenerators:turbine_valve",
        [
            "kubejs:tk3_containment_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_turbine_valve");

    // Turbine Vent / Shapeless
    event.shapeless(
        "mekanismgenerators:turbine_vent",
        [
            "kubejs:tk3_containment_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_turbine_vent");

    // Turbine Rotor / Shapeless
    event.shapeless(
        "mekanismgenerators:turbine_rotor",
        [
            "kubejs:tk3_containment_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_turbine_rotor");

    // Turbine Blade / Shapeless
    event.shapeless(
        "mekanismgenerators:turbine_blade",
        [
            "kubejs:tk3_containment_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_turbine_blade");

    // Electromagnetic Coil / Shapeless
    event.shapeless(
        "mekanismgenerators:electromagnetic_coil",
        [
            "kubejs:tk3_containment_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_electromagnetic_coil");

    // Rotational Complex / Shapeless
    event.shapeless(
        "mekanismgenerators:rotational_complex",
        [
            "kubejs:tk3_containment_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_rotational_complex");

    // Saturating Condenser / Shapeless
    event.shapeless(
        "mekanismgenerators:saturating_condenser",
        [
            "kubejs:tk3_containment_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_saturating_condenser");

    //->------------------------]  Tier 8 / Generator multiblock parts [------------------------<-//

    // Fission Reactor Casing / Stonecutting
    event.stonecutting(
        "4x mekanismgenerators:fission_reactor_casing",
        "kubejs:tk3_containment_frame")
        .id("kubejs:tk3/industrial/mekanismgenerators_fission_reactor_casing");

    // Turbine Casing / Stonecutting
    event.stonecutting(
        "4x mekanismgenerators:turbine_casing",
        "kubejs:tk3_containment_frame")
        .id("kubejs:tk3/industrial/mekanismgenerators_turbine_casing");

    // Reactor Glass / Stonecutting
    event.stonecutting(
        "4x mekanismgenerators:reactor_glass",
        "kubejs:tk3_containment_frame")
        .id("kubejs:tk3/industrial/mekanismgenerators_reactor_glass");

    //->------------------------]  Tier 8 / Mekanism / Machines & materials [------------------------<-//

    // Chemical Crystallizer / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "c:gems/fluorite"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "IAI",
                "CXC",
                "IAI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:chemical_crystallizer"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_chemical_crystallizer");

    // Chemical Dissolution Chamber / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                },
                "T": {
                    "item": "mekanism:basic_chemical_tank"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "ITI",
                "CXC",
                "ITI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:chemical_dissolution_chamber"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_chemical_dissolution_chamber");

    // Chemical Washer / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "B": {
                    "item": "mekanism:basic_fluid_tank"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                },
                "T": {
                    "item": "mekanism:basic_chemical_tank"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "IBI",
                "CXC",
                "ITI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:chemical_washer"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_chemical_washer");

    // Combiner / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                },
                "_": {
                    "tag": "mekanism:stone_crafting_materials"
                }
            },
            "pattern": [
                "ACA",
                "_X_",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:combiner"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_combiner");

    // Digital Miner / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "R": {
                    "item": "mekanism:robit"
                },
                "S": {
                    "item": "mekanism:logistical_sorter"
                },
                "T": {
                    "item": "mekanism:teleportation_core"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "ACA",
                "SRS",
                "TXT"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:digital_miner"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_digital_miner");

    // Dimensional Stabilizer / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "D": {
                    "tag": "c:storage_blocks/diamond"
                },
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                }
            },
            "pattern": [
                "ICI",
                "ADA",
                "ICI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:dimensional_stabilizer"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_dimensional_stabilizer");

    // Isotopic Centrifuge / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/lead"
                },
                "T": {
                    "item": "mekanism:basic_chemical_tank"
                }
            },
            "pattern": [
                "III",
                "CTC",
                "III"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:isotopic_centrifuge"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_isotopic_centrifuge");

    // Radioactive Waste Barrel / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "I": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                "SIS",
                "I I",
                "SIS"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:radioactive_waste_barrel"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_radioactive_waste_barrel");

    // Solar Neutron Activator / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:hdpe_sheet"
                },
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/bronze"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "A#A",
                "CXC",
                "III"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:solar_neutron_activator"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_solar_neutron_activator");

    // Elite Bin / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:advanced_bin"
                },
                "_": {
                    "tag": "mekanism:stone_crafting_materials"
                }
            },
            "pattern": [
                "_C_",
                "APA",
                "___"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_bin"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_bin_elite");

    // Ultimate Bin / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:elite_bin"
                },
                "_": {
                    "tag": "mekanism:stone_crafting_materials"
                }
            },
            "pattern": [
                "_C_",
                "APA",
                "___"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_bin"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_bin_ultimate");

    // Ultimate Chemical Tank / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "O": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:elite_chemical_tank"
                }
            },
            "pattern": [
                "AOA",
                "OPO",
                "AOA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_chemical_tank"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_chemical_tank_ultimate");

    // Ultimate Control Circuit / Native
    event.custom({
            "type": "mekanism:metallurgic_infusing",
            "chemical_input": {
                "amount": 240,
                "tag": "mekanism:refined_obsidian"
            },
            "item_input": {
                "count": 1,
                "tag": "c:circuits/elite"
            },
            "output": {
                "count": 1,
                "id": "mekanism:ultimate_control_circuit"
            },
            "per_tick_usage": false
        })
        .id("kubejs:tk3/industrial/mekanism_control_circuit_infused_ultimate");

    // Ultimate Control Circuit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "tag": "c:circuits/elite"
                }
            },
            "pattern": [
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_control_circuit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_control_circuit_ultimate");

    // Elite Energy Cube / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "E": {
                    "item": "mekanism:energy_tablet"
                },
                "I": {
                    "tag": "c:ingots/gold"
                },
                "P": {
                    "item": "mekanism:advanced_energy_cube"
                }
            },
            "pattern": [
                "AEA",
                "IPI",
                "AEA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_energy_cube"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_energy_cube_elite");

    // Ultimate Energy Cube / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "E": {
                    "item": "mekanism:energy_tablet"
                },
                "I": {
                    "tag": "c:gems/diamond"
                },
                "P": {
                    "item": "mekanism:elite_energy_cube"
                }
            },
            "pattern": [
                "AEA",
                "IPI",
                "AEA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_energy_cube"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_energy_cube_ultimate");

    // Advanced Combining Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/infused"
                },
                "C": {
                    "item": "kubejs:tk3_expedition_frame"
                },
                "I": {
                    "tag": "c:ingots/osmium"
                },
                "P": {
                    "item": "mekanism:basic_combining_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_combining_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_advanced_combining");

    // Basic Combining Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/basic"
                },
                "C": {
                    "item": "kubejs:tk3_network_chassis"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "P": {
                    "item": "mekanism:combiner"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_combining_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_basic_combining");

    // Elite Combining Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/gold"
                },
                "P": {
                    "item": "mekanism:advanced_combining_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_combining_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_elite_combining");

    // Elite Compressing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/gold"
                },
                "P": {
                    "item": "mekanism:advanced_compressing_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_compressing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_elite_compressing");

    // Elite Crushing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/gold"
                },
                "P": {
                    "item": "mekanism:advanced_crushing_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_crushing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_elite_crushing");

    // Elite Enriching Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/gold"
                },
                "P": {
                    "item": "mekanism:advanced_enriching_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_enriching_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_elite_enriching");

    // Elite Infusing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/gold"
                },
                "P": {
                    "item": "mekanism:advanced_infusing_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_infusing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_elite_infusing");

    // Elite Injecting Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/gold"
                },
                "P": {
                    "item": "mekanism:advanced_injecting_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_injecting_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_elite_injecting");

    // Elite Purifying Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/gold"
                },
                "P": {
                    "item": "mekanism:advanced_purifying_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_purifying_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_elite_purifying");

    // Elite Sawing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/gold"
                },
                "P": {
                    "item": "mekanism:advanced_sawing_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_sawing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_elite_sawing");

    // Elite Smelting Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/gold"
                },
                "P": {
                    "item": "mekanism:advanced_smelting_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_smelting_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_elite_smelting");

    // Ultimate Combining Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:gems/diamond"
                },
                "P": {
                    "item": "mekanism:elite_combining_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_combining_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_ultimate_combining");

    // Ultimate Compressing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:gems/diamond"
                },
                "P": {
                    "item": "mekanism:elite_compressing_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_compressing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_ultimate_compressing");

    // Ultimate Crushing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:gems/diamond"
                },
                "P": {
                    "item": "mekanism:elite_crushing_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_crushing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_ultimate_crushing");

    // Ultimate Enriching Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:gems/diamond"
                },
                "P": {
                    "item": "mekanism:elite_enriching_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_enriching_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_ultimate_enriching");

    // Ultimate Infusing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:gems/diamond"
                },
                "P": {
                    "item": "mekanism:elite_infusing_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_infusing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_ultimate_infusing");

    // Ultimate Injecting Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:gems/diamond"
                },
                "P": {
                    "item": "mekanism:elite_injecting_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_injecting_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_ultimate_injecting");

    // Ultimate Purifying Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:gems/diamond"
                },
                "P": {
                    "item": "mekanism:elite_purifying_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_purifying_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_ultimate_purifying");

    // Ultimate Sawing Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:gems/diamond"
                },
                "P": {
                    "item": "mekanism:elite_sawing_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_sawing_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_ultimate_sawing");

    // Ultimate Smelting Factory / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:gems/diamond"
                },
                "P": {
                    "item": "mekanism:elite_smelting_factory"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_smelting_factory"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_factory_ultimate_smelting");

    // Elite Fluid Tank / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "P": {
                    "item": "mekanism:advanced_fluid_tank"
                }
            },
            "pattern": [
                "AIA",
                "IPI",
                "AIA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_fluid_tank"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_fluid_tank_elite");

    // Ultimate Fluid Tank / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/iron"
                },
                "P": {
                    "item": "mekanism:elite_fluid_tank"
                }
            },
            "pattern": [
                "AIA",
                "IPI",
                "AIA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_fluid_tank"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_fluid_tank_ultimate");

    // Induction Casing / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "E": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "S": {
                    "tag": "c:ingots/steel"
                }
            },
            "pattern": [
                " S ",
                "SES",
                " S "
            ],
            "result": {
                "count": 4,
                "id": "mekanism:induction_casing"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_induction_casing");

    // Induction Port / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:induction_casing"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                }
            },
            "pattern": [
                " # ",
                "#C#",
                " # "
            ],
            "result": {
                "count": 2,
                "id": "mekanism:induction_port"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_induction_port");

    // Advanced Induction Cell / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "E": {
                    "item": "mekanism:energy_tablet"
                },
                "P": {
                    "item": "mekanism:basic_induction_cell"
                }
            },
            "pattern": [
                "EPE",
                "P#P",
                "EPE"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_induction_cell"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_induction_cell_advanced");

    // Basic Induction Cell / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "E": {
                    "item": "mekanism:energy_tablet"
                },
                "L": {
                    "tag": "c:dusts/lithium"
                }
            },
            "pattern": [
                "LEL",
                "E#E",
                "LEL"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_induction_cell"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_induction_cell_basic");

    // Elite Induction Cell / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "E": {
                    "item": "mekanism:energy_tablet"
                },
                "P": {
                    "item": "mekanism:advanced_induction_cell"
                }
            },
            "pattern": [
                "EPE",
                "P#P",
                "EPE"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_induction_cell"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_induction_cell_elite");

    // Ultimate Induction Cell / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "E": {
                    "item": "mekanism:energy_tablet"
                },
                "P": {
                    "item": "mekanism:elite_induction_cell"
                }
            },
            "pattern": [
                "EPE",
                "P#P",
                "EPE"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_induction_cell"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_induction_cell_ultimate");

    // Advanced Induction Provider / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:advanced_energy_cube"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:basic_induction_provider"
                }
            },
            "pattern": [
                "CPC",
                "P#P",
                "CPC"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:advanced_induction_provider"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_induction_provider_advanced");

    // Basic Induction Provider / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:basic_energy_cube"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "L": {
                    "tag": "c:dusts/lithium"
                }
            },
            "pattern": [
                "LCL",
                "C#C",
                "LCL"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:basic_induction_provider"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_induction_provider_basic");

    // Elite Induction Provider / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:elite_energy_cube"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:advanced_induction_provider"
                }
            },
            "pattern": [
                "CPC",
                "P#P",
                "CPC"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_induction_provider"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_induction_provider_elite");

    // Ultimate Induction Provider / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:ultimate_energy_cube"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:elite_induction_provider"
                }
            },
            "pattern": [
                "CPC",
                "P#P",
                "CPC"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_induction_provider"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_induction_provider_ultimate");

    // Pellet Plutonium / Native
    event.custom({
            "type": "mekanism:reaction",
            "chemical_input": {
                "amount": 1000,
                "chemical": "mekanism:plutonium"
            },
            "chemical_output": {
                "amount": 1000,
                "id": "mekanism:spent_nuclear_waste"
            },
            "duration": 100,
            "fluid_input": {
                "amount": 1000,
                "tag": "minecraft:water"
            },
            "item_input": {
                "count": 1,
                "tag": "c:dusts/fluorite"
            },
            "item_output": {
                "count": 1,
                "id": "mekanism:pellet_plutonium"
            }
        })
        .id(
        "kubejs:tk3/industrial/mekanism_processing_lategame_plutonium_pellet_from_reaction");

    // Pellet Polonium / Native
    event.custom({
            "type": "mekanism:reaction",
            "chemical_input": {
                "amount": 1000,
                "chemical": "mekanism:polonium"
            },
            "chemical_output": {
                "amount": 1000,
                "id": "mekanism:spent_nuclear_waste"
            },
            "duration": 100,
            "fluid_input": {
                "amount": 1000,
                "tag": "minecraft:water"
            },
            "item_input": {
                "count": 1,
                "tag": "c:dusts/fluorite"
            },
            "item_output": {
                "count": 1,
                "id": "mekanism:pellet_polonium"
            }
        })
        .id(
        "kubejs:tk3/industrial/mekanism_processing_lategame_polonium_pellet_from_reaction");

    // Elite Tier Installer / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/reinforced"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:ingots/gold"
                },
                "P": {
                    "tag": "minecraft:planks"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:elite_tier_installer"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_tier_installer_elite");

    // Ultimate Tier Installer / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "I": {
                    "tag": "c:gems/diamond"
                },
                "P": {
                    "tag": "minecraft:planks"
                }
            },
            "pattern": [
                "ACA",
                "IPI",
                "ACA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:ultimate_tier_installer"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_tier_installer_ultimate");

    // Elite Logistical Transporter / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:advanced_logistical_transporter"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:elite_logistical_transporter"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_logistical_transporter_elite");

    // Ultimate Logistical Transporter / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:elite_logistical_transporter"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:ultimate_logistical_transporter"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_logistical_transporter_ultimate");

    // Elite Mechanical Pipe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:advanced_mechanical_pipe"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:elite_mechanical_pipe"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_mechanical_pipe_elite");

    // Ultimate Mechanical Pipe / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:elite_mechanical_pipe"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:ultimate_mechanical_pipe"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_mechanical_pipe_ultimate");

    // Elite Pressurized Tube / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:advanced_pressurized_tube"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:elite_pressurized_tube"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_pressurized_tube_elite");

    // Ultimate Pressurized Tube / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:elite_pressurized_tube"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:ultimate_pressurized_tube"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_pressurized_tube_ultimate");

    // Elite Thermodynamic Conductor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:advanced_thermodynamic_conductor"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:elite_thermodynamic_conductor"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_thermodynamic_conductor_elite");

    // Ultimate Thermodynamic Conductor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:elite_thermodynamic_conductor"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:ultimate_thermodynamic_conductor"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_thermodynamic_conductor_ultimate");

    // Elite Universal Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:advanced_universal_cable"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:elite_universal_cable"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_universal_cable_elite");

    // Ultimate Universal Cable / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "P": {
                    "item": "mekanism:elite_universal_cable"
                }
            },
            "pattern": [
                "PPP",
                "PAP",
                "PPP"
            ],
            "result": {
                "count": 8,
                "id": "mekanism:ultimate_universal_cable"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_transmitter_universal_cable_ultimate");

    //->------------------------]  Tier 9 / Generator devices [------------------------<-//

    // Fusion Reactor Controller / Shapeless
    event.shapeless(
        "mekanismgenerators:fusion_reactor_controller",
        [
            "kubejs:tk3_singularity_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_fusion_reactor_controller");

    // Fusion Reactor Port / Shapeless
    event.shapeless(
        "mekanismgenerators:fusion_reactor_port",
        [
            "kubejs:tk3_singularity_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_fusion_reactor_port");

    // Fusion Reactor Logic Adapter / Shapeless
    event.shapeless(
        "mekanismgenerators:fusion_reactor_logic_adapter",
        [
            "kubejs:tk3_singularity_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_fusion_reactor_logic_adapter");

    // Laser Focus Matrix / Shapeless
    event.shapeless(
        "mekanismgenerators:laser_focus_matrix",
        [
            "kubejs:tk3_singularity_frame",
            "mekanism:alloy_atomic",
            "minecraft:glass"
        ])
        .id("kubejs:tk3/industrial/mekanismgenerators_laser_focus_matrix");

    //->------------------------]  Tier 9 / Generator multiblock parts [------------------------<-//

    // Fusion Reactor Frame / Stonecutting
    event.stonecutting(
        "4x mekanismgenerators:fusion_reactor_frame",
        "kubejs:tk3_singularity_frame")
        .id("kubejs:tk3/industrial/mekanismgenerators_fusion_reactor_frame");

    //->------------------------]  Tier 9 / Mekanism / Machines & materials [------------------------<-//

    // Antiprotonic Nucleosynthesizer / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:alloy_atomic"
                },
                "A": {
                    "tag": "c:pellets/antimatter"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "#C#",
                "AXA",
                "#C#"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:antiprotonic_nucleosynthesizer"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_antiprotonic_nucleosynthesizer");

    // Qio Dashboard / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "item": "kubejs:tk3_singularity_frame"
                },
                "G": {
                    "tag": "c:glass_panes"
                },
                "I": {
                    "tag": "c:ingots/lead"
                },
                "T": {
                    "item": "mekanism:teleportation_core"
                }
            },
            "pattern": [
                "IAI",
                "AGA",
                "ITI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:qio_dashboard"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_qio_dashboard");

    // Qio Drive Array / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "tag": "mekanism:personal_storage"
                },
                "C": {
                    "item": "kubejs:tk3_singularity_frame"
                },
                "G": {
                    "tag": "c:glass_panes"
                },
                "I": {
                    "tag": "c:ender_pearls"
                },
                "T": {
                    "item": "mekanism:teleportation_core"
                }
            },
            "pattern": [
                "TGT",
                "C#C",
                "TIT"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:qio_drive_array"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_qio_drive_array");

    // Qio Drive Base / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "tag": "c:ender_pearls"
                },
                "C": {
                    "item": "kubejs:tk3_singularity_frame"
                },
                "I": {
                    "tag": "c:ingots/lead"
                }
            },
            "pattern": [
                "ICI",
                "C#C",
                "ICI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:qio_drive_base"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_qio_drive_base");

    // Qio Drive Hyper Dense / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_singularity_frame"
                },
                "I": {
                    "tag": "c:pellets/plutonium"
                },
                "P": {
                    "item": "mekanism:qio_drive_base"
                }
            },
            "pattern": [
                "IPI",
                "P#P",
                "IPI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:qio_drive_hyper_dense"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_qio_drive_hyper_dense");

    // Qio Drive Supermassive / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_singularity_frame"
                },
                "I": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:qio_drive_time_dilating"
                }
            },
            "pattern": [
                "IPI",
                "P#P",
                "IPI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:qio_drive_supermassive"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_qio_drive_supermassive");

    // Qio Drive Time Dilating / Native
    event.custom({
            "type": "mekanism:mek_data",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_singularity_frame"
                },
                "I": {
                    "tag": "c:pellets/plutonium"
                },
                "P": {
                    "item": "mekanism:qio_drive_hyper_dense"
                }
            },
            "pattern": [
                "IPI",
                "P#P",
                "IPI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:qio_drive_time_dilating"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_qio_drive_time_dilating");

    // Qio Exporter / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "minecraft:piston"
                },
                "A": {
                    "tag": "c:ender_pearls"
                },
                "C": {
                    "item": "kubejs:tk3_singularity_frame"
                },
                "I": {
                    "tag": "c:ingots/lead"
                },
                "T": {
                    "item": "mekanism:teleportation_core"
                }
            },
            "pattern": [
                "ITI",
                "ACA",
                " # "
            ],
            "result": {
                "count": 1,
                "id": "mekanism:qio_exporter"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_qio_exporter");

    // Qio Importer / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "minecraft:sticky_piston"
                },
                "A": {
                    "tag": "c:ender_pearls"
                },
                "C": {
                    "item": "kubejs:tk3_singularity_frame"
                },
                "I": {
                    "tag": "c:ingots/lead"
                },
                "T": {
                    "item": "mekanism:teleportation_core"
                }
            },
            "pattern": [
                "ITI",
                "ACA",
                " # "
            ],
            "result": {
                "count": 1,
                "id": "mekanism:qio_importer"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_qio_importer");

    // Qio Redstone Adapter / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "C": {
                    "item": "kubejs:tk3_singularity_frame"
                },
                "I": {
                    "tag": "c:ender_pearls"
                },
                "R": {
                    "tag": "c:dusts/redstone"
                },
                "T": {
                    "item": "mekanism:teleportation_core"
                },
                "W": {
                    "item": "minecraft:redstone_torch"
                }
            },
            "pattern": [
                "IWI",
                "CRC",
                "ITI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:qio_redstone_adapter"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_qio_redstone_adapter");

    // Quantum Entangloporter / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "A": {
                    "tag": "mekanism:alloys/atomic"
                },
                "C": {
                    "item": "kubejs:tk3_singularity_frame"
                },
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                },
                "T": {
                    "item": "mekanism:teleportation_core"
                }
            },
            "pattern": [
                "ICI",
                "ATA",
                "ICI"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:quantum_entangloporter"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_quantum_entangloporter");

    // Sps Casing / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "A": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:hdpe_sheet"
                }
            },
            "pattern": [
                "PAP",
                "A#A",
                "PAP"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:sps_casing"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_sps_casing");

    // Sps Port / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:sps_casing"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                }
            },
            "pattern": [
                " # ",
                "#C#",
                " # "
            ],
            "result": {
                "count": 1,
                "id": "mekanism:sps_port"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_sps_port");

    // Supercharged Coil / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "mekanism:laser"
                },
                "A": {
                    "tag": "c:pellets/polonium"
                },
                "C": {
                    "item": "kubejs:tk3_containment_frame"
                },
                "c": {
                    "tag": "c:ingots/copper"
                }
            },
            "pattern": [
                "ccc",
                "C#C",
                "AAA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:supercharged_coil"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_supercharged_coil");

    // Teleporter / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "C": {
                    "item": "kubejs:tk3_singularity_frame"
                },
                "T": {
                    "item": "mekanism:teleportation_core"
                },
                "X": {
                    "item": "mekanism:steel_casing"
                }
            },
            "pattern": [
                "CXC",
                "XTX",
                "CXC"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:teleporter"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_teleporter");

    // Teleporter Frame / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "G": {
                    "item": "kubejs:tk3_singularity_frame"
                },
                "I": {
                    "tag": "c:ingots/refined_obsidian"
                }
            },
            "pattern": [
                "III",
                "IGI",
                "III"
            ],
            "result": {
                "count": 9,
                "id": "mekanism:teleporter_frame"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_teleporter_frame");

    // Pellet Antimatter / Native
    event.custom({
            "type": "mekanism:crystallizing",
            "input": {
                "amount": 1000,
                "chemical": "mekanism:antimatter"
            },
            "output": {
                "count": 1,
                "id": "mekanism:pellet_antimatter"
            }
        })
        .id(
        "kubejs:tk3/industrial/mekanism_processing_lategame_antimatter_pellet_from_gas");

    //->------------------------]  Tier 10 / Mekanism / Machines & materials [------------------------<-//

    // Meka Tool / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "#": {
                    "item": "mekanism:atomic_disassembler"
                },
                "A": {
                    "tag": "c:pellets/polonium"
                },
                "C": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "E": {
                    "item": "mekanism:basic_induction_cell"
                },
                "P": {
                    "item": "mekanism:hdpe_sheet"
                },
                "o": {
                    "item": "mekanism:configurator"
                }
            },
            "pattern": [
                "CoC",
                "P#P",
                "AEA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:meka_tool"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_meka_tool");

    // Mekasuit Bodyarmor / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "#": {
                    "item": "minecraft:netherite_chestplate"
                },
                "A": {
                    "tag": "c:pellets/polonium"
                },
                "C": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "E": {
                    "item": "mekanism:basic_induction_cell"
                },
                "P": {
                    "item": "mekanism:hdpe_sheet"
                }
            },
            "pattern": [
                "PCP",
                "P#P",
                "AEA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:mekasuit_bodyarmor"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_mekasuit_bodyarmor");

    // Mekasuit Boots / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "#": {
                    "item": "minecraft:netherite_boots"
                },
                "A": {
                    "tag": "c:pellets/polonium"
                },
                "C": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "E": {
                    "item": "mekanism:basic_induction_cell"
                },
                "P": {
                    "item": "mekanism:hdpe_sheet"
                }
            },
            "pattern": [
                "PCP",
                "P#P",
                "AEA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:mekasuit_boots"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_mekasuit_boots");

    // Mekasuit Helmet / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "#": {
                    "item": "minecraft:netherite_helmet"
                },
                "A": {
                    "tag": "c:pellets/polonium"
                },
                "C": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "E": {
                    "item": "mekanism:basic_induction_cell"
                },
                "P": {
                    "item": "mekanism:hdpe_sheet"
                }
            },
            "pattern": [
                "PCP",
                "P#P",
                "AEA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:mekasuit_helmet"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_mekasuit_helmet");

    // Mekasuit Pants / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "equipment",
            "key": {
                "#": {
                    "item": "minecraft:netherite_leggings"
                },
                "A": {
                    "tag": "c:pellets/polonium"
                },
                "C": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "E": {
                    "item": "mekanism:basic_induction_cell"
                },
                "P": {
                    "item": "mekanism:hdpe_sheet"
                }
            },
            "pattern": [
                "PCP",
                "P#P",
                "AEA"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:mekasuit_pants"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_mekasuit_pants");

    // Module Attack Amplification Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/advanced"
                },
                "H": {
                    "item": "mekanism:hdpe_sheet"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_attack_amplification_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_attack_amplification_unit");

    // Module Base / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "I": {
                    "tag": "c:ingots/tin"
                },
                "N": {
                    "tag": "c:nuggets/bronze"
                }
            },
            "pattern": [
                "NIN",
                "I#I",
                "NIN"
            ],
            "result": {
                "count": 2,
                "id": "mekanism:module_base"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_base");

    // Module Blasting Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "minecraft:tnt"
                },
                "A": {
                    "tag": "c:alloys/ultimate"
                },
                "C": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "CPC",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_blasting_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_blasting_unit");

    // Module Charge Distribution Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_charge_distribution_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_charge_distribution_unit");

    // Module Color Modulation Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "H": {
                    "item": "mekanism:hdpe_sheet"
                },
                "M": {
                    "item": "mekanism:pigment_mixer"
                },
                "O": {
                    "item": "mekanism:painting_machine"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "M#M",
                "OPO",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_color_modulation_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_color_modulation_unit");

    // Module Dosimeter Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/advanced"
                },
                "H": {
                    "item": "mekanism:hdpe_sheet"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_dosimeter_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_dosimeter_unit");

    // Module Electrolytic Breathing Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/advanced"
                },
                "H": {
                    "item": "mekanism:hdpe_sheet"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_electrolytic_breathing_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_electrolytic_breathing_unit");

    // Module Elytra Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "N": {
                    "tag": "c:pellets/antimatter"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HNH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_elytra_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_elytra_unit");

    // Module Energy Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/advanced"
                },
                "H": {
                    "item": "mekanism:hdpe_sheet"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_energy_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_energy_unit");

    // Module Excavation Escalation Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/advanced"
                },
                "H": {
                    "item": "mekanism:hdpe_sheet"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_excavation_escalation_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_excavation_escalation_unit");

    // Module Farming Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/advanced"
                },
                "H": {
                    "item": "mekanism:hdpe_sheet"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_farming_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_farming_unit");

    // Module Fortune Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "D": {
                    "tag": "c:storage_blocks/diamond"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "DPD",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_fortune_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_fortune_unit");

    // Module Frost Walker Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "H#H"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_frost_walker_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_frost_walker_unit");

    // Module Geiger Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/advanced"
                },
                "H": {
                    "item": "mekanism:hdpe_sheet"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_geiger_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_geiger_unit");

    // Module Gravitational Modulating Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/ultimate"
                },
                "E": {
                    "item": "mekanism:ultimate_induction_provider"
                },
                "H": {
                    "tag": "c:pellets/antimatter"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "EPE",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_gravitational_modulating_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_gravitational_modulating_unit");

    // Module Gyroscopic Stabilization Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "#P#",
                "H#H"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_gyroscopic_stabilization_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_gyroscopic_stabilization_unit");

    // Module Hydraulic Propulsion Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "E": {
                    "item": "mekanism:energy_tablet"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "EPE",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_hydraulic_propulsion_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_hydraulic_propulsion_unit");

    // Module Hydrostatic Repulsor Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_hydrostatic_repulsor_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_hydrostatic_repulsor_unit");

    // Module Inhalation Purification Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                },
                "o": {
                    "item": "mekanism:scuba_mask"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HoH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_inhalation_purification_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_inhalation_purification_unit");

    // Module Jetpack Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_jetpack_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_jetpack_unit");

    // Module Laser Dissipation Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/advanced"
                },
                "H": {
                    "item": "mekanism:hdpe_sheet"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_laser_dissipation_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_laser_dissipation_unit");

    // Module Locomotive Boosting Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "E": {
                    "item": "mekanism:energy_tablet"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "EPE",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_locomotive_boosting_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_locomotive_boosting_unit");

    // Module Magnetic Attraction Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "minecraft:iron_bars"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "C": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "CPC",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_magnetic_attraction_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_magnetic_attraction_unit");

    // Module Motorized Servo Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "minecraft:blue_ice"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "C": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "ACA",
                "#P#",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_motorized_servo_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_motorized_servo_unit");

    // Module Nutritional Injection Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_nutritional_injection_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_nutritional_injection_unit");

    // Module Radiation Shielding Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/advanced"
                },
                "H": {
                    "item": "mekanism:hdpe_sheet"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_radiation_shielding_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_radiation_shielding_unit");

    // Module Shearing Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/advanced"
                },
                "H": {
                    "item": "mekanism:hdpe_sheet"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_shearing_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_shearing_unit");

    // Module Silk Touch Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "D": {
                    "item": "minecraft:diamond_pickaxe"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "DPD",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_silk_touch_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_silk_touch_unit");

    // Module Soul Surfer Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "B": {
                    "tag": "minecraft:soul_fire_base_blocks"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "ABA",
                "APA",
                "H#H"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_soul_surfer_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_soul_surfer_unit");

    // Module Teleportation Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/ultimate"
                },
                "H": {
                    "tag": "c:pellets/antimatter"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_teleportation_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_teleportation_unit");

    // Module Vein Mining Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                },
                "s": {
                    "item": "minecraft:diamond_shovel"
                },
                "x": {
                    "item": "minecraft:diamond_axe"
                }
            },
            "pattern": [
                "A#A",
                "xPs",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_vein_mining_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_vein_mining_unit");

    // Module Vision Enhancement Unit / Native
    event.custom({
            "type": "minecraft:crafting_shaped",
            "category": "misc",
            "key": {
                "#": {
                    "item": "kubejs:tk3_sovereign_core"
                },
                "A": {
                    "tag": "c:alloys/elite"
                },
                "H": {
                    "tag": "c:pellets/polonium"
                },
                "P": {
                    "item": "mekanism:module_base"
                }
            },
            "pattern": [
                "A#A",
                "APA",
                "HHH"
            ],
            "result": {
                "count": 1,
                "id": "mekanism:module_vision_enhancement_unit"
            }
        })
        .id("kubejs:tk3/industrial/mekanism_module_vision_enhancement_unit");

});
