// priority: -10009
// T&K3 Tier 09 Singularity — complete tier recipe/progression script.
// Consolidated from the former base + authoritative progression layers.

// ============================================================================
// AUTHORITATIVE TIER PROGRESSION / OVERRIDES
// ============================================================================
ServerEvents.recipes(event => {
    //->------------------------]  Tier 9 / Singularity / Antimatter / Echo [------------------------<-//

    event.recipes.create.deploying(
        ["kubejs:tk3_incomplete_stargaze_singularity"],
        ["kubejs:tk3_compound_base", "kubejs:tk3_stargaze_alloy"])
        .id("kubejs:tk3/singularity/stargaze_on_compound_base");

    event.custom({
        type: "mekanism:nucleosynthesizing",
        item_input: {
            count: 1,
            item: "kubejs:tk3_incomplete_stargaze_singularity"
        },
        chemical_input: {
            chemical: "mekanism:antimatter",
            amount: 10
        },
        output: {
            id: "kubejs:tk3_stargaze_plate",
            count: 1
        },
        per_tick_usage: false,
        duration: 400
    }).id("kubejs:tk3/singularity/stargaze_antimatter_plate");

    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_radiant_coil"],
        "kubejs:tk3_refined_radiance_sheet",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_tech_tube"],
                ["kubejs:tk3_incomplete_tech_tube", "createaddition:copper_wire"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_tech_tube"],
                ["kubejs:tk3_incomplete_tech_tube", "ae2:fluix_crystal"]),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_tech_tube"],
                ["kubejs:tk3_incomplete_tech_tube"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_tech_tube")
        .loops(1)
        .id("kubejs:tk3/singularity/radiant_coil");

    // Verified serializer path: antimatter directly nucleosynthesizes amethyst into Echo Shards.
    event.custom({
        type: "mekanism:nucleosynthesizing",
        item_input: {
            count: 1,
            item: "minecraft:amethyst_shard"
        },
        chemical_input: {
            chemical: "mekanism:antimatter",
            amount: 5
        },
        output: {
            id: "minecraft:echo_shard",
            count: 1
        },
        per_tick_usage: false,
        duration: 300
    }).id("kubejs:tk3/singularity/automated_echo_shard");

    // Iron's Spells Timeless Slurry is a real fluid in 1.21.1.
    // Keep the native 250 mB-per-Echo-Shard identity, but expose a deterministic
    // Create route so the Tier 9 line can be fully automated without a one-off
    // exploration dependency. Redstone + water represent the renewable mundane
    // potion feed used by the native Alchemist Cauldron recipe.
    event.recipes.create.mixing(
        [Fluid.of("irons_spellbooks:timeless_slurry", 250)],
        [
            "minecraft:echo_shard",
            "minecraft:redstone",
            Fluid.of("minecraft:water", 250)
        ])
        .heated()
        .id("kubejs:tk3/singularity/timeless_slurry");

    // Four batches = 1000 mB per Blue Tube.
    event.recipes.create.filling(
        ["kubejs:tk3_blue_tube"],
        [
            "kubejs:tk3_empty_tube",
            Fluid.of("irons_spellbooks:timeless_slurry", 1000)
        ])
        .id("kubejs:tk3/singularity/blue_tube");

    // Ender Guardian catalyst moved to core/boss_lenses.js (Voidguard Lens).

    event.remove({ output: "kubejs:tk3_singularity_mechanism" });
});
