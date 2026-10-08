// priority: -10008
// T&K3 Tier 08 Containment — complete tier recipe/progression script.
// Consolidated from the former base + authoritative progression layers.

// ============================================================================
// AUTHORITATIVE TIER PROGRESSION / OVERRIDES
// ============================================================================
ServerEvents.recipes(event => {
    //->------------------------]  Tier 8 / Containment [------------------------<-//
    // Ignis catalyst moved to core/boss_lenses.js (Everburning Lens).

    event.remove({ output: "kubejs:tk3_containment_mechanism" });
});
