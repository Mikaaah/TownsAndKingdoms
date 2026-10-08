// priority: -10005
// T&K3 Tier 05 Inductive — complete tier recipe/progression script.
// Consolidated from the former base + authoritative progression layers.

// ============================================================================
// AUTHORITATIVE TIER PROGRESSION / OVERRIDES
// ============================================================================
ServerEvents.recipes(event => {
    //->------------------------]  Tier 5 / Inductive = first Mekanism stage [------------------------<-//

    // Bootstrap Basic Control Circuit via Create so the first Infuser does not require itself.
    event.recipes.create.sequenced_assembly(
        ["mekanism:basic_control_circuit"],
        "mekanism:ingot_osmium",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_integrated_circuit"],
                ["kubejs:tk3_incomplete_integrated_circuit", "minecraft:redstone"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_integrated_circuit"],
                ["kubejs:tk3_incomplete_integrated_circuit", "create:electron_tube"]),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_integrated_circuit"],
                ["kubejs:tk3_incomplete_integrated_circuit"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_integrated_circuit")
        .loops(1)
        .id("kubejs:tk3/mekanism/bootstrap_basic_control_circuit");

    event.remove({ output: "kubejs:tk3_inductive_mechanism" });

    event.shaped(
        "mekanism:metallurgic_infuser",
        ["IRI", "CMC", "IOI"], {
        I: "minecraft:iron_ingot",
        R: "minecraft:redstone",
        C: "mekanism:steel_casing",
        M: "kubejs:tk3_inductive_mechanism",
        O: "mekanism:ingot_osmium"
    })
        .id("kubejs:tk3/mekanism/metallurgic_infuser_inductive");

    event.shaped(
        "mekanism:enrichment_chamber",
        ["IRI", "CMC", "IOI"], {
        I: "minecraft:iron_ingot",
        R: "mekanism:basic_control_circuit",
        C: "mekanism:steel_casing",
        M: "kubejs:tk3_inductive_mechanism",
        O: "mekanism:ingot_osmium"
    })
        .id("kubejs:tk3/mekanism/enrichment_chamber_inductive");

    event.shaped(
        "mekanism:crusher",
        ["IRI", "CMC", "ILI"], {
        I: "minecraft:iron_ingot",
        R: "mekanism:basic_control_circuit",
        C: "mekanism:steel_casing",
        M: "kubejs:tk3_inductive_mechanism",
        L: "minecraft:lava_bucket"
    })
        .id("kubejs:tk3/mekanism/crusher_inductive");

    event.shaped(
        "mekanism:energized_smelter",
        ["IRI", "CMC", "IFI"], {
        I: "minecraft:iron_ingot",
        R: "mekanism:basic_control_circuit",
        C: "mekanism:steel_casing",
        M: "kubejs:tk3_inductive_mechanism",
        F: "minecraft:furnace"
    })
        .id("kubejs:tk3/mekanism/energized_smelter_inductive");

    // Resource automation support: short, high-throughput Create chains.
    event.recipes.create.crushing(
        ["minecraft:gravel", CreateItem.of("minecraft:flint", 0.25)],
        "minecraft:cobblestone")
        .id("kubejs:tk3/resources/cobble_to_gravel");

    event.recipes.create.crushing(
        ["minecraft:sand", CreateItem.of("minecraft:flint", 0.10)],
        "minecraft:gravel")
        .id("kubejs:tk3/resources/gravel_to_sand");

    //->------------------------]  Shared Chromatic material identities [------------------------<-//

    // Radiance: Ars source infusion, not another basin alloy.
    event.recipes.ars_nouveau.imbuement(
        "kubejs:tk3_chromatic_compound",
        "kubejs:tk3_refined_radiance",
        3000,
        ["ars_nouveau:source_gem", "minecraft:glowstone_dust"])
        .id("kubejs:tk3/materials/refined_radiance");

    event.recipes.create.pressing(
        ["kubejs:tk3_refined_radiance_sheet"],
        ["kubejs:tk3_refined_radiance"])
        .id("kubejs:tk3/materials/radiance_sheet");

    // Shadow Steel: recognizable T&K2 haunting identity.
    event.recipes.create.haunting(
        ["kubejs:tk3_shadow_steel"],
        ["kubejs:tk3_chromatic_compound"])
        .id("kubejs:tk3/materials/shadow_steel");

    event.recipes.create.pressing(
        ["kubejs:tk3_shadow_steel_plate"],
        ["kubejs:tk3_shadow_steel"])
        .id("kubejs:tk3/materials/shadow_steel_plate");

    // Blaze Gold: heat-driven metallurgy.
    event.recipes.create.mixing(
        ["2x kubejs:tk3_blaze_gold"],
        ["kubejs:tk3_chromatic_compound", "2x minecraft:gold_ingot", "2x minecraft:blaze_powder"])
        .heated()
        .id("kubejs:tk3/materials/blaze_gold");

    event.recipes.create.pressing(
        ["kubejs:tk3_blaze_gold_sheet"],
        ["kubejs:tk3_blaze_gold"])
        .id("kubejs:tk3/materials/blaze_gold_plate");

    // Overcharged Alloy: verified Create: Wizardry bridge. The Channeler supplies the
    // Lightning Bucket; the bucket is returned so electricity is the transformation input.
    event.recipes.create.mixing(
        ["kubejs:tk3_overcharge_alloy", "minecraft:bucket"],
        ["kubejs:tk3_chromatic_compound", "create_wizardry:lightning_bucket", "mekanism:ingot_refined_glowstone"])
        .id("kubejs:tk3/materials/overcharged_alloy");

    event.recipes.create.pressing(
        ["kubejs:tk3_overcharge_plate"],
        ["kubejs:tk3_overcharge_alloy"])
        .id("kubejs:tk3/materials/overcharged_plate");

    // Stargaze Alloy: superheated ender/radiant alloying. Its late antimatter application
    // occurs again in the Tier 9 plate chain below.
    event.recipes.create.mixing(
        ["kubejs:tk3_stargaze_alloy"],
        ["kubejs:tk3_chromatic_compound", "kubejs:tk3_refined_radiance", "2x ae2:ender_dust"])
        .superheated()
        .id("kubejs:tk3/materials/stargaze_alloy");
});
