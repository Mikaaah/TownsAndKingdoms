// priority: 0
// TK3 compatibility/integration recipes for apotheosis. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 4 / Magic & settlement machines [------------------------<-//

    //->------------------------]  Tier 6 / Magic & settlement machines [------------------------<-//

    // Salvaging Table / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:anvil",
            "ars_nouveau:manipulation_essence"
        ],
        "kubejs:tk3_calculation_mechanism",
        "apotheosis:salvaging_table",
        2000)
        .id("kubejs:tk3/addons/apotheosis_salvaging_table");

    // Reforging Table / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:anvil",
            "apotheosis:gem_dust"
        ],
        "kubejs:tk3_calculation_mechanism",
        "apotheosis:reforging_table",
        2000)
        .id("kubejs:tk3/addons/apotheosis_reforging_table");

    // Gem Cutting Table / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "minecraft:diamond",
            "apotheosis:gem_dust"
        ],
        "kubejs:tk3_calculation_mechanism",
        "apotheosis:gem_cutting_table",
        2000)
        .id("kubejs:tk3/addons/apotheosis_gem_cutting_table");

    //->------------------------]  Tier 7 / Magic & settlement machines [------------------------<-//

    // Augmenting Table / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "apotheosis:reforging_table",
            "apotheosis:arcane_sands"
        ],
        "kubejs:tk3_chemical_mechanism",
        "apotheosis:augmenting_table",
        2000)
        .id("kubejs:tk3/addons/apotheosis_augmenting_table");
});
