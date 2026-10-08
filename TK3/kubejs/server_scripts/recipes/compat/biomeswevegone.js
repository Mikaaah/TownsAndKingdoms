// priority: 0
// TK3 compatibility/integration recipes for biomeswevegone. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / biomeswevegone [------------------------<-//

    // Stripped Aspen Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_aspen_log"
        ],
        [
            "biomeswevegone:aspen_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_aspen_log");

    // Aspen Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:aspen_planks"
        ],
        [
            "biomeswevegone:stripped_aspen_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_aspen_log");

    // Stripped Aspen Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_aspen_wood"
        ],
        [
            "biomeswevegone:aspen_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_aspen_wood");

    // Aspen Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:aspen_planks"
        ],
        [
            "biomeswevegone:stripped_aspen_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_aspen_wood");

    // Stripped Baobab Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_baobab_log"
        ],
        [
            "biomeswevegone:baobab_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_baobab_log");

    // Baobab Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:baobab_planks"
        ],
        [
            "biomeswevegone:stripped_baobab_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_baobab_log");

    // Stripped Baobab Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_baobab_wood"
        ],
        [
            "biomeswevegone:baobab_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_baobab_wood");

    // Baobab Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:baobab_planks"
        ],
        [
            "biomeswevegone:stripped_baobab_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_baobab_wood");

    // Stripped Blue Enchanted Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_blue_enchanted_log"
        ],
        [
            "biomeswevegone:blue_enchanted_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_blue_enchanted_log");

    // Blue Enchanted Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:blue_enchanted_planks"
        ],
        [
            "biomeswevegone:stripped_blue_enchanted_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_blue_enchanted_log");

    // Stripped Blue Enchanted Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_blue_enchanted_wood"
        ],
        [
            "biomeswevegone:blue_enchanted_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_blue_enchanted_wood");

    // Blue Enchanted Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:blue_enchanted_planks"
        ],
        [
            "biomeswevegone:stripped_blue_enchanted_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_blue_enchanted_wood");

    // Stripped Cika Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_cika_log"
        ],
        [
            "biomeswevegone:cika_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_cika_log");

    // Cika Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:cika_planks"
        ],
        [
            "biomeswevegone:stripped_cika_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_cika_log");

    // Stripped Cika Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_cika_wood"
        ],
        [
            "biomeswevegone:cika_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_cika_wood");

    // Cika Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:cika_planks"
        ],
        [
            "biomeswevegone:stripped_cika_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_cika_wood");

    // Stripped Cypress Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_cypress_log"
        ],
        [
            "biomeswevegone:cypress_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_cypress_log");

    // Cypress Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:cypress_planks"
        ],
        [
            "biomeswevegone:stripped_cypress_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_cypress_log");

    // Stripped Cypress Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_cypress_wood"
        ],
        [
            "biomeswevegone:cypress_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_cypress_wood");

    // Cypress Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:cypress_planks"
        ],
        [
            "biomeswevegone:stripped_cypress_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_cypress_wood");

    // Stripped Ebony Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_ebony_log"
        ],
        [
            "biomeswevegone:ebony_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_ebony_log");

    // Ebony Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:ebony_planks"
        ],
        [
            "biomeswevegone:stripped_ebony_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_ebony_log");

    // Stripped Ebony Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_ebony_wood"
        ],
        [
            "biomeswevegone:ebony_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_ebony_wood");

    // Ebony Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:ebony_planks"
        ],
        [
            "biomeswevegone:stripped_ebony_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_ebony_wood");

    // Stripped Fir Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_fir_log"
        ],
        [
            "biomeswevegone:fir_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_fir_log");

    // Fir Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:fir_planks"
        ],
        [
            "biomeswevegone:stripped_fir_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_fir_log");

    // Stripped Fir Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_fir_wood"
        ],
        [
            "biomeswevegone:fir_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_fir_wood");

    // Fir Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:fir_planks"
        ],
        [
            "biomeswevegone:stripped_fir_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_fir_wood");

    // Stripped Florus Stem / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_florus_stem"
        ],
        [
            "biomeswevegone:florus_stem"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_florus_stem");

    // Florus Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:florus_planks"
        ],
        [
            "biomeswevegone:stripped_florus_stem"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_florus_stem");

    // Stripped Florus Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_florus_wood"
        ],
        [
            "biomeswevegone:florus_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_florus_wood");

    // Florus Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:florus_planks"
        ],
        [
            "biomeswevegone:stripped_florus_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_florus_wood");

    // Stripped Green Enchanted Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_green_enchanted_log"
        ],
        [
            "biomeswevegone:green_enchanted_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_green_enchanted_log");

    // Green Enchanted Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:green_enchanted_planks"
        ],
        [
            "biomeswevegone:stripped_green_enchanted_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_green_enchanted_log");

    // Stripped Green Enchanted Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_green_enchanted_wood"
        ],
        [
            "biomeswevegone:green_enchanted_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_green_enchanted_wood");

    // Green Enchanted Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:green_enchanted_planks"
        ],
        [
            "biomeswevegone:stripped_green_enchanted_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_green_enchanted_wood");

    // Stripped Holly Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_holly_log"
        ],
        [
            "biomeswevegone:holly_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_holly_log");

    // Holly Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:holly_planks"
        ],
        [
            "biomeswevegone:stripped_holly_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_holly_log");

    // Stripped Holly Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_holly_wood"
        ],
        [
            "biomeswevegone:holly_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_holly_wood");

    // Holly Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:holly_planks"
        ],
        [
            "biomeswevegone:stripped_holly_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_holly_wood");

    // Stripped Ironwood Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_ironwood_log"
        ],
        [
            "biomeswevegone:ironwood_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_ironwood_log");

    // Ironwood Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:ironwood_planks"
        ],
        [
            "biomeswevegone:stripped_ironwood_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_ironwood_log");

    // Stripped Ironwood Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_ironwood_wood"
        ],
        [
            "biomeswevegone:ironwood_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_ironwood_wood");

    // Ironwood Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:ironwood_planks"
        ],
        [
            "biomeswevegone:stripped_ironwood_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_ironwood_wood");

    // Stripped Jacaranda Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_jacaranda_log"
        ],
        [
            "biomeswevegone:jacaranda_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_jacaranda_log");

    // Jacaranda Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:jacaranda_planks"
        ],
        [
            "biomeswevegone:stripped_jacaranda_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_jacaranda_log");

    // Stripped Jacaranda Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_jacaranda_wood"
        ],
        [
            "biomeswevegone:jacaranda_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_jacaranda_wood");

    // Jacaranda Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:jacaranda_planks"
        ],
        [
            "biomeswevegone:stripped_jacaranda_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_jacaranda_wood");

    // Stripped Mahogany Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_mahogany_log"
        ],
        [
            "biomeswevegone:mahogany_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_mahogany_log");

    // Mahogany Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:mahogany_planks"
        ],
        [
            "biomeswevegone:stripped_mahogany_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_mahogany_log");

    // Stripped Mahogany Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_mahogany_wood"
        ],
        [
            "biomeswevegone:mahogany_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_mahogany_wood");

    // Mahogany Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:mahogany_planks"
        ],
        [
            "biomeswevegone:stripped_mahogany_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_mahogany_wood");

    // Stripped Maple Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_maple_log"
        ],
        [
            "biomeswevegone:maple_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_maple_log");

    // Maple Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:maple_planks"
        ],
        [
            "biomeswevegone:stripped_maple_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_maple_log");

    // Stripped Maple Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_maple_wood"
        ],
        [
            "biomeswevegone:maple_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_maple_wood");

    // Maple Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:maple_planks"
        ],
        [
            "biomeswevegone:stripped_maple_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_maple_wood");

    // Stripped Palm Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_palm_log"
        ],
        [
            "biomeswevegone:palm_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_palm_log");

    // Palm Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:palm_planks"
        ],
        [
            "biomeswevegone:stripped_palm_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_palm_log");

    // Stripped Palm Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_palm_wood"
        ],
        [
            "biomeswevegone:palm_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_palm_wood");

    // Palm Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:palm_planks"
        ],
        [
            "biomeswevegone:stripped_palm_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_palm_wood");

    // Stripped Pine Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_pine_log"
        ],
        [
            "biomeswevegone:pine_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_pine_log");

    // Pine Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:pine_planks"
        ],
        [
            "biomeswevegone:stripped_pine_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_pine_log");

    // Stripped Pine Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_pine_wood"
        ],
        [
            "biomeswevegone:pine_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_pine_wood");

    // Pine Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:pine_planks"
        ],
        [
            "biomeswevegone:stripped_pine_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_pine_wood");

    // Stripped Rainbow Eucalyptus Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_rainbow_eucalyptus_log"
        ],
        [
            "biomeswevegone:rainbow_eucalyptus_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_rainbow_eucalyptus_log");

    // Rainbow Eucalyptus Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:rainbow_eucalyptus_planks"
        ],
        [
            "biomeswevegone:stripped_rainbow_eucalyptus_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_rainbow_eucalyptus_log");

    // Stripped Rainbow Eucalyptus Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_rainbow_eucalyptus_wood"
        ],
        [
            "biomeswevegone:rainbow_eucalyptus_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_rainbow_eucalyptus_wood");

    // Rainbow Eucalyptus Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:rainbow_eucalyptus_planks"
        ],
        [
            "biomeswevegone:stripped_rainbow_eucalyptus_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_rainbow_eucalyptus_wood");

    // Stripped Redwood Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_redwood_log"
        ],
        [
            "biomeswevegone:redwood_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_redwood_log");

    // Redwood Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:redwood_planks"
        ],
        [
            "biomeswevegone:stripped_redwood_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_redwood_log");

    // Stripped Redwood Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_redwood_wood"
        ],
        [
            "biomeswevegone:redwood_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_redwood_wood");

    // Redwood Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:redwood_planks"
        ],
        [
            "biomeswevegone:stripped_redwood_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_redwood_wood");

    // Stripped Sakura Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_sakura_log"
        ],
        [
            "biomeswevegone:sakura_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_sakura_log");

    // Sakura Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:sakura_planks"
        ],
        [
            "biomeswevegone:stripped_sakura_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_sakura_log");

    // Stripped Sakura Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_sakura_wood"
        ],
        [
            "biomeswevegone:sakura_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_sakura_wood");

    // Sakura Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:sakura_planks"
        ],
        [
            "biomeswevegone:stripped_sakura_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_sakura_wood");

    // Stripped Skyris Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_skyris_log"
        ],
        [
            "biomeswevegone:skyris_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_skyris_log");

    // Skyris Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:skyris_planks"
        ],
        [
            "biomeswevegone:stripped_skyris_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_skyris_log");

    // Stripped Skyris Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_skyris_wood"
        ],
        [
            "biomeswevegone:skyris_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_skyris_wood");

    // Skyris Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:skyris_planks"
        ],
        [
            "biomeswevegone:stripped_skyris_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_skyris_wood");

    // Stripped Spirit Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_spirit_log"
        ],
        [
            "biomeswevegone:spirit_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_spirit_log");

    // Spirit Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:spirit_planks"
        ],
        [
            "biomeswevegone:stripped_spirit_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_spirit_log");

    // Stripped Spirit Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_spirit_wood"
        ],
        [
            "biomeswevegone:spirit_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_spirit_wood");

    // Spirit Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:spirit_planks"
        ],
        [
            "biomeswevegone:stripped_spirit_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_spirit_wood");

    // Stripped White Mangrove Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_white_mangrove_log"
        ],
        [
            "biomeswevegone:white_mangrove_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_white_mangrove_log");

    // White Mangrove Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:white_mangrove_planks"
        ],
        [
            "biomeswevegone:stripped_white_mangrove_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_white_mangrove_log");

    // Stripped White Mangrove Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_white_mangrove_wood"
        ],
        [
            "biomeswevegone:white_mangrove_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_white_mangrove_wood");

    // White Mangrove Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:white_mangrove_planks"
        ],
        [
            "biomeswevegone:stripped_white_mangrove_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_white_mangrove_wood");

    // Stripped Willow Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_willow_log"
        ],
        [
            "biomeswevegone:willow_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_willow_log");

    // Willow Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:willow_planks"
        ],
        [
            "biomeswevegone:stripped_willow_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_willow_log");

    // Stripped Willow Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_willow_wood"
        ],
        [
            "biomeswevegone:willow_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_willow_wood");

    // Willow Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:willow_planks"
        ],
        [
            "biomeswevegone:stripped_willow_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_willow_wood");

    // Stripped Witch Hazel Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_witch_hazel_log"
        ],
        [
            "biomeswevegone:witch_hazel_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_witch_hazel_log");

    // Witch Hazel Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:witch_hazel_planks"
        ],
        [
            "biomeswevegone:stripped_witch_hazel_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_witch_hazel_log");

    // Stripped Witch Hazel Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_witch_hazel_wood"
        ],
        [
            "biomeswevegone:witch_hazel_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_witch_hazel_wood");

    // Witch Hazel Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:witch_hazel_planks"
        ],
        [
            "biomeswevegone:stripped_witch_hazel_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_witch_hazel_wood");

    // Stripped Zelkova Log / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_zelkova_log"
        ],
        [
            "biomeswevegone:zelkova_log"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_zelkova_log");

    // Zelkova Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:zelkova_planks"
        ],
        [
            "biomeswevegone:stripped_zelkova_log"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_zelkova_log");

    // Stripped Zelkova Wood / Cutting
    event.recipes.create.cutting(
        [
            "biomeswevegone:stripped_zelkova_wood"
        ],
        [
            "biomeswevegone:zelkova_wood"
        ])
        .id("kubejs:tk3/compat/strip_biomeswevegone_zelkova_wood");

    // Zelkova Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x biomeswevegone:zelkova_planks"
        ],
        [
            "biomeswevegone:stripped_zelkova_wood"
        ])
        .id("kubejs:tk3/compat/saw_biomeswevegone_zelkova_wood");
});
