// priority: 0
// TK3 compatibility/integration recipes for quark. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / quark [------------------------<-//

    // Stripped Ancient Log / Cutting
    event.recipes.create.cutting(
        [
            "quark:stripped_ancient_log"
        ],
        [
            "quark:ancient_log"
        ])
        .id("kubejs:tk3/compat/strip_quark_ancient_log");

    // Ancient Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x quark:ancient_planks"
        ],
        [
            "quark:stripped_ancient_log"
        ])
        .id("kubejs:tk3/compat/saw_quark_ancient_log");

    // Stripped Ancient Wood / Cutting
    event.recipes.create.cutting(
        [
            "quark:stripped_ancient_wood"
        ],
        [
            "quark:ancient_wood"
        ])
        .id("kubejs:tk3/compat/strip_quark_ancient_wood");

    // Ancient Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x quark:ancient_planks"
        ],
        [
            "quark:stripped_ancient_wood"
        ])
        .id("kubejs:tk3/compat/saw_quark_ancient_wood");

    // Stripped Azalea Log / Cutting
    event.recipes.create.cutting(
        [
            "quark:stripped_azalea_log"
        ],
        [
            "quark:azalea_log"
        ])
        .id("kubejs:tk3/compat/strip_quark_azalea_log");

    // Azalea Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x quark:azalea_planks"
        ],
        [
            "quark:stripped_azalea_log"
        ])
        .id("kubejs:tk3/compat/saw_quark_azalea_log");

    // Stripped Azalea Wood / Cutting
    event.recipes.create.cutting(
        [
            "quark:stripped_azalea_wood"
        ],
        [
            "quark:azalea_wood"
        ])
        .id("kubejs:tk3/compat/strip_quark_azalea_wood");

    // Azalea Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x quark:azalea_planks"
        ],
        [
            "quark:stripped_azalea_wood"
        ])
        .id("kubejs:tk3/compat/saw_quark_azalea_wood");

    // Stripped Blossom Log / Cutting
    event.recipes.create.cutting(
        [
            "quark:stripped_blossom_log"
        ],
        [
            "quark:blossom_log"
        ])
        .id("kubejs:tk3/compat/strip_quark_blossom_log");

    // Blossom Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x quark:blossom_planks"
        ],
        [
            "quark:stripped_blossom_log"
        ])
        .id("kubejs:tk3/compat/saw_quark_blossom_log");

    // Stripped Blossom Wood / Cutting
    event.recipes.create.cutting(
        [
            "quark:stripped_blossom_wood"
        ],
        [
            "quark:blossom_wood"
        ])
        .id("kubejs:tk3/compat/strip_quark_blossom_wood");

    // Blossom Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x quark:blossom_planks"
        ],
        [
            "quark:stripped_blossom_wood"
        ])
        .id("kubejs:tk3/compat/saw_quark_blossom_wood");
});
