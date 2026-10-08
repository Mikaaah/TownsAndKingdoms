// priority: 0
// TK3 compatibility/integration recipes for autumnity. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / autumnity [------------------------<-//

    // Stripped Maple Log / Cutting
    event.recipes.create.cutting(
        [
            "autumnity:stripped_maple_log"
        ],
        [
            "autumnity:maple_log"
        ])
        .id("kubejs:tk3/compat/strip_autumnity_maple_log");

    // Maple Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x autumnity:maple_planks"
        ],
        [
            "autumnity:stripped_maple_log"
        ])
        .id("kubejs:tk3/compat/saw_autumnity_maple_log");

    // Stripped Maple Wood / Cutting
    event.recipes.create.cutting(
        [
            "autumnity:stripped_maple_wood"
        ],
        [
            "autumnity:maple_wood"
        ])
        .id("kubejs:tk3/compat/strip_autumnity_maple_wood");

    // Maple Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x autumnity:maple_planks"
        ],
        [
            "autumnity:stripped_maple_wood"
        ])
        .id("kubejs:tk3/compat/saw_autumnity_maple_wood");
});
