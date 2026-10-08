// priority: 0
// TK3 compatibility/integration recipes for mekanismtools. Split from former monolithic generated files.
ServerEvents.recipes(event => {
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
});
