// priority: 0
// TK3 compatibility/integration recipes for environmental. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / environmental [------------------------<-//

    // Stripped Pine Log / Cutting
    event.recipes.create.cutting(
        [
            "environmental:stripped_pine_log"
        ],
        [
            "environmental:pine_log"
        ])
        .id("kubejs:tk3/compat/strip_environmental_pine_log");

    // Pine Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x environmental:pine_planks"
        ],
        [
            "environmental:stripped_pine_log"
        ])
        .id("kubejs:tk3/compat/saw_environmental_pine_log");

    // Stripped Pine Wood / Cutting
    event.recipes.create.cutting(
        [
            "environmental:stripped_pine_wood"
        ],
        [
            "environmental:pine_wood"
        ])
        .id("kubejs:tk3/compat/strip_environmental_pine_wood");

    // Pine Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x environmental:pine_planks"
        ],
        [
            "environmental:stripped_pine_wood"
        ])
        .id("kubejs:tk3/compat/saw_environmental_pine_wood");

    // Stripped Plum Log / Cutting
    event.recipes.create.cutting(
        [
            "environmental:stripped_plum_log"
        ],
        [
            "environmental:plum_log"
        ])
        .id("kubejs:tk3/compat/strip_environmental_plum_log");

    // Plum Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x environmental:plum_planks"
        ],
        [
            "environmental:stripped_plum_log"
        ])
        .id("kubejs:tk3/compat/saw_environmental_plum_log");

    // Stripped Plum Wood / Cutting
    event.recipes.create.cutting(
        [
            "environmental:stripped_plum_wood"
        ],
        [
            "environmental:plum_wood"
        ])
        .id("kubejs:tk3/compat/strip_environmental_plum_wood");

    // Plum Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x environmental:plum_planks"
        ],
        [
            "environmental:stripped_plum_wood"
        ])
        .id("kubejs:tk3/compat/saw_environmental_plum_wood");

    // Stripped Willow Log / Cutting
    event.recipes.create.cutting(
        [
            "environmental:stripped_willow_log"
        ],
        [
            "environmental:willow_log"
        ])
        .id("kubejs:tk3/compat/strip_environmental_willow_log");

    // Willow Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x environmental:willow_planks"
        ],
        [
            "environmental:stripped_willow_log"
        ])
        .id("kubejs:tk3/compat/saw_environmental_willow_log");

    // Stripped Willow Wood / Cutting
    event.recipes.create.cutting(
        [
            "environmental:stripped_willow_wood"
        ],
        [
            "environmental:willow_wood"
        ])
        .id("kubejs:tk3/compat/strip_environmental_willow_wood");

    // Willow Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x environmental:willow_planks"
        ],
        [
            "environmental:stripped_willow_wood"
        ])
        .id("kubejs:tk3/compat/saw_environmental_willow_wood");

    // Stripped Wisteria Log / Cutting
    event.recipes.create.cutting(
        [
            "environmental:stripped_wisteria_log"
        ],
        [
            "environmental:wisteria_log"
        ])
        .id("kubejs:tk3/compat/strip_environmental_wisteria_log");

    // Wisteria Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x environmental:wisteria_planks"
        ],
        [
            "environmental:stripped_wisteria_log"
        ])
        .id("kubejs:tk3/compat/saw_environmental_wisteria_log");

    // Stripped Wisteria Wood / Cutting
    event.recipes.create.cutting(
        [
            "environmental:stripped_wisteria_wood"
        ],
        [
            "environmental:wisteria_wood"
        ])
        .id("kubejs:tk3/compat/strip_environmental_wisteria_wood");

    // Wisteria Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x environmental:wisteria_planks"
        ],
        [
            "environmental:stripped_wisteria_wood"
        ])
        .id("kubejs:tk3/compat/saw_environmental_wisteria_wood");
});
