// priority: 0
// TK3 compatibility/integration recipes for cataclysm. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / cataclysm [------------------------<-//

    // Chorus Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x cataclysm:chorus_planks"
        ],
        [
            "cataclysm:chorus_stem"
        ])
        .id("kubejs:tk3/compat/saw_cataclysm_chorus_stem");
});
