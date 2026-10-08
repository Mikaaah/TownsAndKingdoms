// priority: 0
// TK3 compatibility/integration recipes for aeronautics. Split from former monolithic generated files.
ServerEvents.recipes(event => {
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

    //->------------------------]  Tier 7 / Airship controls [------------------------<-//

    // Mounted Potato Cannon / Native
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "C": {
                "item": "kubejs:tk3_chemical_mechanism"
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

    //->------------------------]  Tier 7 / Airship envelopes [------------------------<-//

    // White Envelope / Compacting
    event.recipes.create.compacting(
        [
            "8x aeronautics:white_envelope"
        ],
        [
            "minecraft:white_wool",
            "minecraft:string",
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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
            "minecraft:slime_ball"
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


    // Smart Propeller / Shapeless
    event.shapeless(
        "aeronautics:smart_propeller",
        [
            "kubejs:tk3_chemical_mechanism",
            "aeronautics:andesite_propeller",
            "create:electron_tube"
        ])
        .id("kubejs:tk3/addons/aeronautics_smart_propeller");

    // Adjustable Burner / Shapeless
    event.shapeless(
        "aeronautics:adjustable_burner",
        [
            "kubejs:tk3_chemical_mechanism",
            "create:blaze_burner",
            "create:fluid_valve"
        ])
        .id("kubejs:tk3/addons/aeronautics_adjustable_burner");

    // Steam Vent / Shapeless
    event.shapeless(
        "aeronautics:steam_vent",
        [
            "kubejs:tk3_chemical_mechanism",
            "create:steam_engine",
            "create:fluid_pipe"
        ])
        .id("kubejs:tk3/addons/aeronautics_steam_vent");

    //->------------------------]  Tier 7 / Cross-mod assembly [------------------------<-//

    // The advanced gyroscopic bearing is an actual Create/Aeronautics assembly,
    // rather than a one-click inventory craft. One Chemical mechanism gates the device,
    // not every propeller or structural part used around it.
    event.remove({ output: "aeronautics:gyroscopic_propeller_bearing" });
    event.recipes.create.mechanical_crafting(
        "aeronautics:gyroscopic_propeller_bearing",
        [
            " S ",
            "RPR",
            " C "
        ], {
        S: "create:sturdy_sheet",
        R: "create:rotation_speed_controller",
        P: "aeronautics:propeller_bearing",
        C: "kubejs:tk3_chemical_mechanism"
    })
        .id("kubejs:tk3/addons/aeronautics_gyroscopic_propeller_bearing");
});
