// priority: 0
// T&K3 Ars Nouveau compatibility bridges.
// These recipes are alternatives/automation routes; they do not remove Ars Nouveau's native progression.
ServerEvents.recipes(event => {
    //->------------------------]  Create Wizardry -> Ars Nouveau [------------------------<-//

    // Native Imbuement remains the normal magical route. A factory that has already built
    // Create Wizardry mana handling can instead bottle that mana directly into Amethyst.
    // This trades infrastructure for automation, not for a progression skip.
    event.recipes.create.filling(
        ["ars_nouveau:source_gem"],
        ["minecraft:amethyst_shard", Fluid.of("create_wizardry:mana", 500)])
        .id("kubejs:tk3/compat/ars_source_gem_from_wizardry_mana");
});
