// priority: 0
// TK3 compatibility/integration recipes for upgrade_aquatic. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / upgrade_aquatic [------------------------<-//

    // Stripped Driftwood Log / Cutting
    event.recipes.create.cutting(
        [
            "upgrade_aquatic:stripped_driftwood_log"
        ],
        [
            "upgrade_aquatic:driftwood_log"
        ])
        .id("kubejs:tk3/compat/strip_upgrade_aquatic_driftwood_log");

    // Driftwood Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x upgrade_aquatic:driftwood_planks"
        ],
        [
            "upgrade_aquatic:stripped_driftwood_log"
        ])
        .id("kubejs:tk3/compat/saw_upgrade_aquatic_driftwood_log");

    // Stripped River Log / Cutting
    event.recipes.create.cutting(
        [
            "upgrade_aquatic:stripped_river_log"
        ],
        [
            "upgrade_aquatic:river_log"
        ])
        .id("kubejs:tk3/compat/strip_upgrade_aquatic_river_log");

    // River Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x upgrade_aquatic:river_planks"
        ],
        [
            "upgrade_aquatic:stripped_river_log"
        ])
        .id("kubejs:tk3/compat/saw_upgrade_aquatic_river_log");

    // Stripped River Wood / Cutting
    event.recipes.create.cutting(
        [
            "upgrade_aquatic:stripped_river_wood"
        ],
        [
            "upgrade_aquatic:river_wood"
        ])
        .id("kubejs:tk3/compat/strip_upgrade_aquatic_river_wood");

    // River Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x upgrade_aquatic:river_planks"
        ],
        [
            "upgrade_aquatic:stripped_river_wood"
        ])
        .id("kubejs:tk3/compat/saw_upgrade_aquatic_river_wood");
});
