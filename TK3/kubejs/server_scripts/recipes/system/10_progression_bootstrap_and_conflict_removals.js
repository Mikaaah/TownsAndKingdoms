// priority: -10000
// Authoritative progression bootstrap/conflict removals; renamed from zz_tk3_progression_rework.js.
ServerEvents.recipes(event => {
    const removeOutput = id => event.remove({ output: id });

    //->------------------------]  Progression conflicts / superseded outputs [------------------------<-//

    [
        "kubejs:tk3_shadow_steel",
        "kubejs:tk3_refined_radiance",
        "kubejs:tk3_overcharge_alloy",


        // AE2 processors are produced through TNK2-style Deployer + sequence routes.
        "ae2:printed_silicon",
        "ae2:printed_logic_processor",
        "ae2:printed_calculation_processor",
        "ae2:printed_engineering_processor",
        "ae2:logic_processor",
        "ae2:calculation_processor",
        "ae2:engineering_processor",

        // Higher-capacity AE2 is intentionally later than the Calculation bootstrap.
        "ae2:drive",
        "ae2:cell_component_16k",
        "ae2:cell_component_64k",
        "ae2:cell_component_256k",

        // Remove Mekanism's native item-logistics recipes here so the curated TK3 recipes win.
        // AStages holds the resulting transporters/sorter until Tier 7/8; Create remains
        // the early-game item-logistics layer.
        "mekanism:basic_logistical_transporter",
        "mekanism:advanced_logistical_transporter",
        "mekanism:elite_logistical_transporter",
        "mekanism:ultimate_logistical_transporter",
        "mekanism:restrictive_transporter",
        "mekanism:diversion_transporter",
        "mekanism:logistical_sorter"
    ].forEach(removeOutput);

    // Remove current pack shortcuts before the intended first-Mekanism unlock recipes.
    [
        "mekanism:metallurgic_infuser",
        "mekanism:enrichment_chamber",
        "mekanism:crusher",
        "mekanism:energized_smelter"
    ].forEach(removeOutput);

    //->------------------------]  Manual bootstrap / Makeshift Rotation [------------------------<-//

    // Raw bootstrap component: no Andesite Alloy or powered Create machine is required.
    // 7x Andesite + 1x wooden slab + 1x iron ingot -> 1x Makeshift Rotation Mechanism.
    event.remove({ output: "kubejs:tk3_makeshift_rotation_mechanism" });
    event.shaped(
        "kubejs:tk3_makeshift_rotation_mechanism",
        [
            "AAA",
            "ASA",
            "AIA"
        ], {
        A: "minecraft:andesite",
        S: "#minecraft:wooden_slabs",
        I: "minecraft:iron_ingot"
    })
        .id("kubejs:tk3/bootstrap/makeshift_rotation_mechanism");

    // Keep the manual Rotation Machine recipe from tk3_frames.js. It is the intentional
    // bootstrap: 2x Makeshift Rotation Mechanism + Andesite Casing. Removing it creates
    // a hard circular dependency because the automated frame needs the Rotation Mechanism.
});
