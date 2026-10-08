// priority: 0
// TK3 compatibility/integration recipes for biomesoplenty. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / biomesoplenty [------------------------<-//

    // Stripped Dead Log / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_dead_log"
        ],
        [
            "biomesoplenty:dead_log"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_dead_log");

    // Dead Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:dead_planks"
        ],
        [
            "biomesoplenty:stripped_dead_log"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_dead_log");

    // Stripped Dead Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_dead_wood"
        ],
        [
            "biomesoplenty:dead_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_dead_wood");

    // Dead Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:dead_planks"
        ],
        [
            "biomesoplenty:stripped_dead_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_dead_wood");

    // Stripped Empyreal Log / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_empyreal_log"
        ],
        [
            "biomesoplenty:empyreal_log"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_empyreal_log");

    // Empyreal Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:empyreal_planks"
        ],
        [
            "biomesoplenty:stripped_empyreal_log"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_empyreal_log");

    // Stripped Empyreal Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_empyreal_wood"
        ],
        [
            "biomesoplenty:empyreal_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_empyreal_wood");

    // Empyreal Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:empyreal_planks"
        ],
        [
            "biomesoplenty:stripped_empyreal_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_empyreal_wood");

    // Stripped Fir Log / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_fir_log"
        ],
        [
            "biomesoplenty:fir_log"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_fir_log");

    // Fir Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:fir_planks"
        ],
        [
            "biomesoplenty:stripped_fir_log"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_fir_log");

    // Stripped Fir Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_fir_wood"
        ],
        [
            "biomesoplenty:fir_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_fir_wood");

    // Fir Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:fir_planks"
        ],
        [
            "biomesoplenty:stripped_fir_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_fir_wood");

    // Stripped Hellbark Log / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_hellbark_log"
        ],
        [
            "biomesoplenty:hellbark_log"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_hellbark_log");

    // Hellbark Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:hellbark_planks"
        ],
        [
            "biomesoplenty:stripped_hellbark_log"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_hellbark_log");

    // Stripped Hellbark Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_hellbark_wood"
        ],
        [
            "biomesoplenty:hellbark_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_hellbark_wood");

    // Hellbark Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:hellbark_planks"
        ],
        [
            "biomesoplenty:stripped_hellbark_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_hellbark_wood");

    // Stripped Jacaranda Log / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_jacaranda_log"
        ],
        [
            "biomesoplenty:jacaranda_log"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_jacaranda_log");

    // Jacaranda Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:jacaranda_planks"
        ],
        [
            "biomesoplenty:stripped_jacaranda_log"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_jacaranda_log");

    // Stripped Jacaranda Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_jacaranda_wood"
        ],
        [
            "biomesoplenty:jacaranda_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_jacaranda_wood");

    // Jacaranda Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:jacaranda_planks"
        ],
        [
            "biomesoplenty:stripped_jacaranda_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_jacaranda_wood");

    // Stripped Magic Log / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_magic_log"
        ],
        [
            "biomesoplenty:magic_log"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_magic_log");

    // Magic Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:magic_planks"
        ],
        [
            "biomesoplenty:stripped_magic_log"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_magic_log");

    // Stripped Magic Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_magic_wood"
        ],
        [
            "biomesoplenty:magic_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_magic_wood");

    // Magic Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:magic_planks"
        ],
        [
            "biomesoplenty:stripped_magic_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_magic_wood");

    // Stripped Mahogany Log / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_mahogany_log"
        ],
        [
            "biomesoplenty:mahogany_log"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_mahogany_log");

    // Mahogany Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:mahogany_planks"
        ],
        [
            "biomesoplenty:stripped_mahogany_log"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_mahogany_log");

    // Stripped Mahogany Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_mahogany_wood"
        ],
        [
            "biomesoplenty:mahogany_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_mahogany_wood");

    // Mahogany Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:mahogany_planks"
        ],
        [
            "biomesoplenty:stripped_mahogany_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_mahogany_wood");

    // Stripped Maple Log / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_maple_log"
        ],
        [
            "biomesoplenty:maple_log"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_maple_log");

    // Maple Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:maple_planks"
        ],
        [
            "biomesoplenty:stripped_maple_log"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_maple_log");

    // Stripped Maple Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_maple_wood"
        ],
        [
            "biomesoplenty:maple_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_maple_wood");

    // Maple Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:maple_planks"
        ],
        [
            "biomesoplenty:stripped_maple_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_maple_wood");

    // Stripped Palm Log / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_palm_log"
        ],
        [
            "biomesoplenty:palm_log"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_palm_log");

    // Palm Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:palm_planks"
        ],
        [
            "biomesoplenty:stripped_palm_log"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_palm_log");

    // Stripped Palm Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_palm_wood"
        ],
        [
            "biomesoplenty:palm_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_palm_wood");

    // Palm Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:palm_planks"
        ],
        [
            "biomesoplenty:stripped_palm_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_palm_wood");

    // Stripped Pine Log / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_pine_log"
        ],
        [
            "biomesoplenty:pine_log"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_pine_log");

    // Pine Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:pine_planks"
        ],
        [
            "biomesoplenty:stripped_pine_log"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_pine_log");

    // Stripped Pine Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_pine_wood"
        ],
        [
            "biomesoplenty:pine_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_pine_wood");

    // Pine Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:pine_planks"
        ],
        [
            "biomesoplenty:stripped_pine_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_pine_wood");

    // Stripped Redwood Log / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_redwood_log"
        ],
        [
            "biomesoplenty:redwood_log"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_redwood_log");

    // Redwood Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:redwood_planks"
        ],
        [
            "biomesoplenty:stripped_redwood_log"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_redwood_log");

    // Stripped Redwood Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_redwood_wood"
        ],
        [
            "biomesoplenty:redwood_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_redwood_wood");

    // Redwood Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:redwood_planks"
        ],
        [
            "biomesoplenty:stripped_redwood_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_redwood_wood");

    // Stripped Umbran Log / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_umbran_log"
        ],
        [
            "biomesoplenty:umbran_log"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_umbran_log");

    // Umbran Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:umbran_planks"
        ],
        [
            "biomesoplenty:stripped_umbran_log"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_umbran_log");

    // Stripped Umbran Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_umbran_wood"
        ],
        [
            "biomesoplenty:umbran_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_umbran_wood");

    // Umbran Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:umbran_planks"
        ],
        [
            "biomesoplenty:stripped_umbran_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_umbran_wood");

    // Stripped Willow Log / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_willow_log"
        ],
        [
            "biomesoplenty:willow_log"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_willow_log");

    // Willow Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:willow_planks"
        ],
        [
            "biomesoplenty:stripped_willow_log"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_willow_log");

    // Stripped Willow Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomesoplenty:stripped_willow_wood"
        ],
        [
            "biomesoplenty:willow_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomesoplenty_willow_wood");

    // Willow Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomesoplenty:willow_planks"
        ],
        [
            "biomesoplenty:stripped_willow_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomesoplenty_willow_wood");
});
