// priority: 0
// TK3 compatibility/integration recipes for atmospheric. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / atmospheric [------------------------<-//

    // Stripped Aspen Log / Cutting
    event.recipes.create.cutting(
        [
            "atmospheric:stripped_aspen_log"
        ],
        [
            "atmospheric:aspen_log"
        ])
        .id("kubejs:tk3/compat/strip_atmospheric_aspen_log");

    // Aspen Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x atmospheric:aspen_planks"
        ],
        [
            "atmospheric:stripped_aspen_log"
        ])
        .id("kubejs:tk3/compat/saw_atmospheric_aspen_log");

    // Stripped Aspen Wood / Cutting
    event.recipes.create.cutting(
        [
            "atmospheric:stripped_aspen_wood"
        ],
        [
            "atmospheric:aspen_wood"
        ])
        .id("kubejs:tk3/compat/strip_atmospheric_aspen_wood");

    // Aspen Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x atmospheric:aspen_planks"
        ],
        [
            "atmospheric:stripped_aspen_wood"
        ])
        .id("kubejs:tk3/compat/saw_atmospheric_aspen_wood");

    // Stripped Grimwood Log / Cutting
    event.recipes.create.cutting(
        [
            "atmospheric:stripped_grimwood_log"
        ],
        [
            "atmospheric:grimwood_log"
        ])
        .id("kubejs:tk3/compat/strip_atmospheric_grimwood_log");

    // Grimwood Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x atmospheric:grimwood_planks"
        ],
        [
            "atmospheric:stripped_grimwood_log"
        ])
        .id("kubejs:tk3/compat/saw_atmospheric_grimwood_log");

    // Stripped Kousa Log / Cutting
    event.recipes.create.cutting(
        [
            "atmospheric:stripped_kousa_log"
        ],
        [
            "atmospheric:kousa_log"
        ])
        .id("kubejs:tk3/compat/strip_atmospheric_kousa_log");

    // Kousa Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x atmospheric:kousa_planks"
        ],
        [
            "atmospheric:stripped_kousa_log"
        ])
        .id("kubejs:tk3/compat/saw_atmospheric_kousa_log");

    // Stripped Kousa Wood / Cutting
    event.recipes.create.cutting(
        [
            "atmospheric:stripped_kousa_wood"
        ],
        [
            "atmospheric:kousa_wood"
        ])
        .id("kubejs:tk3/compat/strip_atmospheric_kousa_wood");

    // Kousa Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x atmospheric:kousa_planks"
        ],
        [
            "atmospheric:stripped_kousa_wood"
        ])
        .id("kubejs:tk3/compat/saw_atmospheric_kousa_wood");

    // Stripped Laurel Log / Cutting
    event.recipes.create.cutting(
        [
            "atmospheric:stripped_laurel_log"
        ],
        [
            "atmospheric:laurel_log"
        ])
        .id("kubejs:tk3/compat/strip_atmospheric_laurel_log");

    // Laurel Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x atmospheric:laurel_planks"
        ],
        [
            "atmospheric:stripped_laurel_log"
        ])
        .id("kubejs:tk3/compat/saw_atmospheric_laurel_log");

    // Stripped Laurel Wood / Cutting
    event.recipes.create.cutting(
        [
            "atmospheric:stripped_laurel_wood"
        ],
        [
            "atmospheric:laurel_wood"
        ])
        .id("kubejs:tk3/compat/strip_atmospheric_laurel_wood");

    // Laurel Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x atmospheric:laurel_planks"
        ],
        [
            "atmospheric:stripped_laurel_wood"
        ])
        .id("kubejs:tk3/compat/saw_atmospheric_laurel_wood");

    // Stripped Morado Log / Cutting
    event.recipes.create.cutting(
        [
            "atmospheric:stripped_morado_log"
        ],
        [
            "atmospheric:morado_log"
        ])
        .id("kubejs:tk3/compat/strip_atmospheric_morado_log");

    // Morado Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x atmospheric:morado_planks"
        ],
        [
            "atmospheric:stripped_morado_log"
        ])
        .id("kubejs:tk3/compat/saw_atmospheric_morado_log");

    // Stripped Morado Wood / Cutting
    event.recipes.create.cutting(
        [
            "atmospheric:stripped_morado_wood"
        ],
        [
            "atmospheric:morado_wood"
        ])
        .id("kubejs:tk3/compat/strip_atmospheric_morado_wood");

    // Morado Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x atmospheric:morado_planks"
        ],
        [
            "atmospheric:stripped_morado_wood"
        ])
        .id("kubejs:tk3/compat/saw_atmospheric_morado_wood");

    // Stripped Rosewood Log / Cutting
    event.recipes.create.cutting(
        [
            "atmospheric:stripped_rosewood_log"
        ],
        [
            "atmospheric:rosewood_log"
        ])
        .id("kubejs:tk3/compat/strip_atmospheric_rosewood_log");

    // Rosewood Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x atmospheric:rosewood_planks"
        ],
        [
            "atmospheric:stripped_rosewood_log"
        ])
        .id("kubejs:tk3/compat/saw_atmospheric_rosewood_log");

    // Stripped Yucca Log / Cutting
    event.recipes.create.cutting(
        [
            "atmospheric:stripped_yucca_log"
        ],
        [
            "atmospheric:yucca_log"
        ])
        .id("kubejs:tk3/compat/strip_atmospheric_yucca_log");

    // Yucca Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x atmospheric:yucca_planks"
        ],
        [
            "atmospheric:stripped_yucca_log"
        ])
        .id("kubejs:tk3/compat/saw_atmospheric_yucca_log");

    // Stripped Yucca Wood / Cutting
    event.recipes.create.cutting(
        [
            "atmospheric:stripped_yucca_wood"
        ],
        [
            "atmospheric:yucca_wood"
        ])
        .id("kubejs:tk3/compat/strip_atmospheric_yucca_wood");

    // Yucca Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x atmospheric:yucca_planks"
        ],
        [
            "atmospheric:stripped_yucca_wood"
        ])
        .id("kubejs:tk3/compat/saw_atmospheric_yucca_wood");
});
