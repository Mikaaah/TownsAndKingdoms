// priority: 0
// TK3 compatibility/integration recipes for create_aquatic_ambitions. Split from former monolithic generated files.
ServerEvents.recipes(event => {
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
});
