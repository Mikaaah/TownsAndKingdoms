// priority: -10010
// T&K3 Tier 10 Sovereign — complete tier recipe/progression script.
// Consolidated from the former base + authoritative progression layers.

// ============================================================================
// AUTHORITATIVE TIER PROGRESSION / OVERRIDES
// ============================================================================
// Exact Accursed Lens ingredient for the final reusable catalyst step.
const TK3SovereignLensDataComponents = Java.loadClass("net.minecraft.core.component.DataComponents")
const TK3SovereignLensColor = Java.loadClass("net.minecraft.world.item.component.DyedItemColor")

function tk3AccursedLensIngredient() {
    const stack = Item.of("kubejs:tk3_catalyst_lens")
    stack.set(TK3SovereignLensDataComponents.DYED_COLOR, new TK3SovereignLensColor(0x9BCB57, false))
    return stack.asIngredient()
}

ServerEvents.recipes(event => {
    //->------------------------]  Tier 10 / Sovereign network [------------------------<-//
    // Maledictus catalyst moved to core/boss_lenses.js (Accursed Lens).


    event.recipes.create.mechanical_crafting(
        "kubejs:tk3_unstable_creative_core",
        [
            " S ",
            "RMR",
            " A "
        ], {
        S: "kubejs:tk3_singularity_gem",
        R: "kubejs:tk3_radiant_coil",
        M: "kubejs:tk3_matter_plastic",
        A: "ae2:engineering_processor"
    })
        .id("kubejs:tk3/sovereign/unstable_core");

    event.remove({ output: "kubejs:tk3_sovereign_mechanism" });

    // Unstable Core -> Creative Core finalization: several independent production systems
    // meet here, but the difficulty is routing them together rather than multiplying counts.
    event.remove({ output: "kubejs:tk3_creative_core" });
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_creative_core"],
        "kubejs:tk3_unstable_creative_core",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_unstable_creative_core"],
                ["kubejs:tk3_unstable_creative_core", "kubejs:tk3_sovereign_mechanism"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_unstable_creative_core"],
                ["kubejs:tk3_unstable_creative_core", "mekanism:pellet_antimatter"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_unstable_creative_core"],
                ["kubejs:tk3_unstable_creative_core", "kubejs:tk3_blue_tube"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_unstable_creative_core"],
                ["kubejs:tk3_unstable_creative_core", tk3AccursedLensIngredient()])
                .keepHeldItem(),
            event.recipes.create.pressing(
                ["kubejs:tk3_unstable_creative_core"],
                ["kubejs:tk3_unstable_creative_core"])
        ])
        .transitionalItem("kubejs:tk3_unstable_creative_core")
        .loops(4)
        .id("kubejs:tk3/sovereign/creative_core");

    //->------------------------]  Architect's Palette / Wardstone [------------------------<-//

    // The installed registry snapshot does not expose a Wardstone item ID in this export.
    // Do not invent an output. The requested Nether Wart + Prismarine replacement is
    // documented for runtime verification in docs/VALIDATION_EN.md.
});
