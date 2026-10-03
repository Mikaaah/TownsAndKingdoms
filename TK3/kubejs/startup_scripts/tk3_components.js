// Full restart required. Supplied assets; quest icons have no recipes.
StartupEvents.registry("item", event => {
    event.create("tk3_rotation_mechanism")
        .displayName("Kinetic Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/rotation_mechanism");
    event.create("tk3_sealed_mechanism")
        .displayName("Sealed Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/sealed_mechanism");
    event.create("tk3_arcane_mechanism")
        .displayName("Arcane Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/calculation_mechanism");
    event.create("tk3_incomplete_sealed_mechanism")
        .displayName("Incomplete Sealed Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_sealed_mechanism");
    event.create("tk3_incomplete_rotation_mechanism")
        .displayName("Incomplete Kinetic Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_rotation_mechanism");
    event.create("tk3_incomplete_arcane_mechanism")
        .displayName("Incomplete Arcane Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_calculation_mechanism");
    event.create("tk3_network_mechanism")
        .displayName("Inductive Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/inductive_mechanism");
    event.create("tk3_incomplete_network_mechanism")
        .displayName("Incomplete Inductive Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_inductive_mechanism");
    event.create("tk3_expedition_mechanism")
        .displayName("Expedition Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/integrated_mechanism");
    event.create("tk3_incomplete_expedition_mechanism")
        .displayName("Incomplete Expedition Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_integrated_mechanism");
    event.create("tk3_containment_mechanism")
        .displayName("Containment Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/high_power_mechanism");
    event.create("tk3_incomplete_containment_mechanism")
        .displayName("Incomplete Containment Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_high_power_mechanism");
    event.create("tk3_singularity_mechanism")
        .displayName("Singularity Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/abstruse_mechanism");
    event.create("tk3_incomplete_singularity_mechanism")
        .displayName("Incomplete Singularity Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_abstruse_mechanism");
    event.create("tk3_sovereign_mechanism")
        .displayName("Sovereign Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/time_mechanism");
    event.create("tk3_incomplete_sovereign_mechanism")
        .displayName("Incomplete Sovereign Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/time_mechanism");
    event.create("tk3_verdant_sigil")
        .displayName("Verdant Sigil")
        .texture("kubejs:tk3_supplied/blocks/runic_catalyst");
    event.create("tk3_storm_core")
        .displayName("Storm Core")
        .texture("kubejs:tk3_supplied/crafting_specific/blue_tube");
    event.create("tk3_ember_core")
        .displayName("Ember Core")
        .texture("kubejs:tk3_supplied/geology/ember_alloy");
    event.create("tk3_void_core")
        .displayName("Void Core")
        .texture("kubejs:tk3_supplied/geology/radiant_obsidian");
    event.create("tk3_sovereign_keystone")
        .displayName("Sovereign Keystone")
        .texture("kubejs:tk3_supplied/crafting_specific/creative_core");
    event.create("tk3_incomplete_sovereign_keystone")
        .displayName("Incomplete Sovereign Keystone")
        .texture("kubejs:tk3_supplied/crafting_specific/creative_core");
    event.create("tk3_ender_mechanism")
        .displayName("Ender Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/ender_mechanism");
    event.create("tk3_reinforced_mechanism")
        .displayName("Reinforced Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/reinforced_mechanism");
    event.create("tk3_dragon_core")
        .displayName("Dragon Core")
        .texture("kubejs:tk3_supplied/geology/polished_amethyst");
    event.create("tk3_shadow_steel")
        .displayName("Shadow Steel")
        .texture("kubejs:tk3_supplied/geology/shadow_steel");
    event.create("tk3_shadow_sheet")
        .displayName("Shadow Steel Sheet")
        .texture("kubejs:tk3_supplied/geology/shadow_steel_sheet");
    event.create("tk3_refined_radiance")
        .displayName("Refined Radiance")
        .texture("kubejs:tk3_supplied/geology/refined_radiance");
    event.create("tk3_radiance_sheet")
        .displayName("Radiance Sheet")
        .texture("kubejs:tk3_supplied/geology/refined_radiance_sheet");
    event.create("tk3_overcharge_alloy")
        .displayName("Overcharge Alloy")
        .texture("kubejs:tk3_supplied/geology/overcharge_alloy");
    event.create("tk3_overcharge_sheet")
        .displayName("Overcharge Sheet")
        .texture("kubejs:tk3_supplied/geology/overcharge_alloy_sheet");
    event.create("tk3_stargaze_singularity")
        .displayName("Stargaze Singularity")
        .texture("kubejs:tk3_supplied/geology/stargaze_singularity");
    event.create("tk3_rubber")
        .displayName("Cured Rubber")
        .texture("kubejs:tk3_supplied/items/rubber");
    event.create("tk3_incomplete_ender_mechanism")
        .displayName("Incomplete Ender Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_ender_mechanism");
    event.create("tk3_incomplete_reinforced_mechanism")
        .displayName("Incomplete Reinforced Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_reinforced_mechanism");
    event.create("tk3_void_attuned_singularity")
        .displayName("Void-attuned Singularity")
        .texture("kubejs:tk3_supplied/geology/incomplete_stargaze_singularity");
});
