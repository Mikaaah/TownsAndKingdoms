// priority: -10006
// T&K3 Tier 06 Arcane — complete tier recipe/progression script.
// Consolidated from the former base + authoritative progression layers.

// ============================================================================
// AUTHORITATIVE TIER PROGRESSION / OVERRIDES
// ============================================================================
ServerEvents.recipes(event => {
    //->------------------------]  Tier 6 / Arcane Mechanism [------------------------<-//

    event.recipes.create.sandpaper_polishing(
        "kubejs:tk3_polished_amethyst",
        "minecraft:amethyst_shard")
        .id("kubejs:tk3/arcane/polished_amethyst");

    event.recipes.create.deploying(
        ["kubejs:tk3_amethyst_tube"],
        ["kubejs:tk3_empty_tube", "kubejs:tk3_polished_amethyst"])
        .id("kubejs:tk3/arcane/amethyst_tube");


    event.remove({ output: "kubejs:tk3_arcane_mechanism" });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:source_gem",
            "ars_nouveau:manipulation_essence",
            "irons_spellbooks:arcane_essence",
            "create_wizardry:arcane_sheet"
        ],
        "kubejs:tk3_incomplete_arcane_mechanism",
        "kubejs:tk3_arcane_mechanism",
        5000)
        .id("kubejs:tk3/mechanisms/arcane");
});
