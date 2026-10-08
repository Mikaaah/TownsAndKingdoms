// priority: -10007
// T&K3 Tier 07 Chemical Engineering — complete tier recipe/progression script.
// Consolidated from the former base + authoritative progression layers.

// ============================================================================
// AUTHORITATIVE TIER PROGRESSION / OVERRIDES
// ============================================================================
ServerEvents.recipes(event => {
    //->------------------------]  Tier 7 / Chemical Engineering + Wither [------------------------<-//
    // Wither catalyst moved to core/boss_lenses.js (Netherstar Lens).

    // Chemical stabilization: Chromatic Compound -> Compound Base.
    event.custom({
        type: "mekanism:metallurgic_infusing",
        item_input: {
            count: 1,
            item: "kubejs:tk3_chromatic_compound"
        },
        chemical_input: {
            amount: 40,
            tag: "mekanism:redstone"
        },
        output: {
            count: 1,
            id: "kubejs:tk3_compound_base"
        },
        per_tick_usage: false
    }).id("kubejs:tk3/chemical/compound_base");

    // Compound Base -> Shadow Steel is also available as a chemistry route at this tier.
    // This complements the T&K2 haunting route instead of replacing its identity.
    event.custom({
        type: "mekanism:injecting",
        item_input: {
            count: 1,
            item: "kubejs:tk3_compound_base"
        },
        chemical_input: {
            chemical: "mekanism:hydrogen_chloride",
            amount: 100
        },
        output: {
            id: "kubejs:tk3_shadow_steel",
            count: 1
        },
        per_tick_usage: false
    }).id("kubejs:tk3/chemical/shadow_steel_injecting");

    event.remove({ output: "kubejs:tk3_chemical_mechanism" });
});
