// priority: 0
// TK3 compatibility/integration recipes for create. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Vanilla compatibility / create [------------------------<-//

    // Wheat Flour / Milling
    event.recipes.create.milling(
        [
            "create:wheat_flour"
        ],
        [
            "minecraft:wheat"
        ])
        .id("kubejs:tk3/compat/wheat_flour");
});
