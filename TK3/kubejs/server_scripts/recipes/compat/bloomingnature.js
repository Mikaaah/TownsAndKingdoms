// priority: 0
// TK3 compatibility/integration recipes for bloomingnature. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / bloomingnature [------------------------<-//

    // Stripped Aspen Log / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_aspen_log"
        ],
        [
            "bloomingnature:aspen_log"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_aspen_log");

    // Aspen Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:aspen_planks"
        ],
        [
            "bloomingnature:stripped_aspen_log"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_aspen_log");

    // Stripped Aspen Wood / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_aspen_wood"
        ],
        [
            "bloomingnature:aspen_wood"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_aspen_wood");

    // Aspen Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:aspen_planks"
        ],
        [
            "bloomingnature:stripped_aspen_wood"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_aspen_wood");

    // Stripped Baobab Log / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_baobab_log"
        ],
        [
            "bloomingnature:baobab_log"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_baobab_log");

    // Baobab Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:baobab_planks"
        ],
        [
            "bloomingnature:stripped_baobab_log"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_baobab_log");

    // Stripped Baobab Wood / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_baobab_wood"
        ],
        [
            "bloomingnature:baobab_wood"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_baobab_wood");

    // Baobab Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:baobab_planks"
        ],
        [
            "bloomingnature:stripped_baobab_wood"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_baobab_wood");

    // Stripped Chestnut Log / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_chestnut_log"
        ],
        [
            "bloomingnature:chestnut_log"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_chestnut_log");

    // Chestnut Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:chestnut_planks"
        ],
        [
            "bloomingnature:stripped_chestnut_log"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_chestnut_log");

    // Stripped Chestnut Wood / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_chestnut_wood"
        ],
        [
            "bloomingnature:chestnut_wood"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_chestnut_wood");

    // Chestnut Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:chestnut_planks"
        ],
        [
            "bloomingnature:stripped_chestnut_wood"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_chestnut_wood");

    // Stripped Cypress Log / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_cypress_log"
        ],
        [
            "bloomingnature:cypress_log"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_cypress_log");

    // Cypress Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:cypress_planks"
        ],
        [
            "bloomingnature:stripped_cypress_log"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_cypress_log");

    // Stripped Cypress Wood / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_cypress_wood"
        ],
        [
            "bloomingnature:cypress_wood"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_cypress_wood");

    // Cypress Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:cypress_planks"
        ],
        [
            "bloomingnature:stripped_cypress_wood"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_cypress_wood");

    // Stripped Ebony Log / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_ebony_log"
        ],
        [
            "bloomingnature:ebony_log"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_ebony_log");

    // Ebony Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:ebony_planks"
        ],
        [
            "bloomingnature:stripped_ebony_log"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_ebony_log");

    // Stripped Ebony Wood / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_ebony_wood"
        ],
        [
            "bloomingnature:ebony_wood"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_ebony_wood");

    // Ebony Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:ebony_planks"
        ],
        [
            "bloomingnature:stripped_ebony_wood"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_ebony_wood");

    // Stripped Fan Palm Log / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_fan_palm_log"
        ],
        [
            "bloomingnature:fan_palm_log"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_fan_palm_log");

    // Fan Palm Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:fan_palm_planks"
        ],
        [
            "bloomingnature:stripped_fan_palm_log"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_fan_palm_log");

    // Stripped Fan Palm Wood / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_fan_palm_wood"
        ],
        [
            "bloomingnature:fan_palm_wood"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_fan_palm_wood");

    // Fan Palm Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:fan_palm_planks"
        ],
        [
            "bloomingnature:stripped_fan_palm_wood"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_fan_palm_wood");

    // Stripped Fir Log / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_fir_log"
        ],
        [
            "bloomingnature:fir_log"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_fir_log");

    // Fir Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:fir_planks"
        ],
        [
            "bloomingnature:stripped_fir_log"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_fir_log");

    // Stripped Fir Wood / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_fir_wood"
        ],
        [
            "bloomingnature:fir_wood"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_fir_wood");

    // Fir Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:fir_planks"
        ],
        [
            "bloomingnature:stripped_fir_wood"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_fir_wood");

    // Stripped Larch Log / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_larch_log"
        ],
        [
            "bloomingnature:larch_log"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_larch_log");

    // Larch Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:larch_planks"
        ],
        [
            "bloomingnature:stripped_larch_log"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_larch_log");

    // Stripped Larch Wood / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_larch_wood"
        ],
        [
            "bloomingnature:larch_wood"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_larch_wood");

    // Larch Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:larch_planks"
        ],
        [
            "bloomingnature:stripped_larch_wood"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_larch_wood");

    // Stripped Swamp Cypress Log / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_swamp_cypress_log"
        ],
        [
            "bloomingnature:swamp_cypress_log"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_swamp_cypress_log");

    // Swamp Cypress Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:swamp_cypress_planks"
        ],
        [
            "bloomingnature:stripped_swamp_cypress_log"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_swamp_cypress_log");

    // Stripped Swamp Cypress Wood / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_swamp_cypress_wood"
        ],
        [
            "bloomingnature:swamp_cypress_wood"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_swamp_cypress_wood");

    // Swamp Cypress Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:swamp_cypress_planks"
        ],
        [
            "bloomingnature:stripped_swamp_cypress_wood"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_swamp_cypress_wood");

    // Stripped Swamp Oak Log / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_swamp_oak_log"
        ],
        [
            "bloomingnature:swamp_oak_log"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_swamp_oak_log");

    // Swamp Oak Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:swamp_oak_planks"
        ],
        [
            "bloomingnature:stripped_swamp_oak_log"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_swamp_oak_log");

    // Stripped Swamp Oak Wood / Cutting
    event.recipes.create.cutting(
        [
            "bloomingnature:stripped_swamp_oak_wood"
        ],
        [
            "bloomingnature:swamp_oak_wood"
        ])
        .id("kubejs:tk3/compat/strip_bloomingnature_swamp_oak_wood");

    // Swamp Oak Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x bloomingnature:swamp_oak_planks"
        ],
        [
            "bloomingnature:stripped_swamp_oak_wood"
        ])
        .id("kubejs:tk3/compat/saw_bloomingnature_swamp_oak_wood");
});
