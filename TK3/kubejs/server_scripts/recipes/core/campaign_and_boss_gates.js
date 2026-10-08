// priority: 0
// Reorganized from tk3_campaign.js; recipe logic unchanged.
ServerEvents.recipes(event => {
    // Tier 2 — renewable rubber used by Sealed production.
    event.recipes.create.compacting(
        ["2x kubejs:tk3_rubber"],
        ["minecraft:slime_ball", "minecraft:dried_kelp", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/campaign/kubejs_tk3_rubber");

    // Tier 5 — retained End Remastered authored eye routes, now tied to the actual
    // Inductive mechanism instead of the deleted legacy Network mechanism.
    event.recipes.create.deploying(
        ["endrem:magical_eye"],
        ["kubejs:tk3_inductive_mechanism", "ars_nouveau:source_gem"])
        .id("kubejs:tk3/campaign/magical_eye");

    event.recipes.create.deploying(
        ["endrem:cryptic_eye"],
        ["kubejs:tk3_inductive_mechanism", "minecraft:ender_pearl"])
        .id("kubejs:tk3/campaign/cryptic_eye");

    event.recipes.create.deploying(
        ["endrem:nether_eye"],
        ["kubejs:tk3_inductive_mechanism", "minecraft:blaze_rod"])
        .id("kubejs:tk3/campaign/nether_eye");

    event.recipes.create.deploying(
        ["endrem:corrupted_eye"],
        ["kubejs:tk3_inductive_mechanism", "minecraft:crying_obsidian"])
        .id("kubejs:tk3/campaign/corrupted_eye");
});
