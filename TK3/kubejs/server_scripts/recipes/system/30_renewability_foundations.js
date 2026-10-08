// priority: -30000
// Automation foundation pass.
// Scope: keep the recurring mechanism / machine dependency graph automatable,
// then add a small set of useful industrial resources. Exploration-only loot is
// intentionally NOT made renewable unless a TK3 mechanism or machine line consumes it.
ServerEvents.recipes(event => {
    //->------------------------] Tier 1 — factory roots [------------------------<-//
    //
    // Water + lava provide vanilla Cobblestone. Existing Create processing closes:
    // Cobblestone -> Gravel -> Sand -> Clay, while washing Gravel supplies renewable Iron.
    // Wood, crops, kelp and mob drops remain normal farm automation.

    //->------------------------] Tier 3 — renewable heat [------------------------<-//
    //
    // Netherrack and Blackstone are supplied by the custom stone-generator matrix in
    // progression/tk3_stone_generators.js. Netherrack then closes an actual lava factory.
    event.recipes.create.mixing(
        [Fluid.of("minecraft:lava", 250)],
        ["4x minecraft:netherrack", "minecraft:blaze_powder"])
        .superheated()
        .id("kubejs:tk3/automation/tier_3/lava");

    //->------------------------] Tier 4 — Calculation / machine support [------------------------<-//

    // Engineering Processors are a recurring Calculation/Sovereign dependency.
    // Coal is generator-backed through Scorchia; Sturdy Sheets and Lava are renewable.
    event.recipes.create.compacting(
        ["minecraft:diamond"],
        [
            "16x minecraft:coal",
            "2x create:sturdy_sheet",
            Fluid.of("minecraft:lava", 500)
        ])
        .superheated()
        .id("kubejs:tk3/automation/tier_4/diamond_pressure_synthesis");

    // Several pack machine recipes consume Experience Bottles. Once Liquid XP exists,
    // bottle it directly instead of making machine automation depend on trading.
    event.recipes.create.filling(
        ["minecraft:experience_bottle"],
        [
            "minecraft:glass_bottle",
            Fluid.of("create_enchantment_industry:experience", 250)
        ])
        .id("kubejs:tk3/automation/tier_4/experience_bottle");

    // Experience Lantern and aquatic infrastructure consume Sponge. This recipe uses
    // already-automatable organic/aquatic materials without generating boss loot.
    event.recipes.create.compacting(
        ["minecraft:sponge"],
        [
            "4x minecraft:string",
            "2x minecraft:dried_kelp",
            "create_aquatic_ambitions:calcium_rich_powder",
            Fluid.of("minecraft:water", 250)
        ])
        .id("kubejs:tk3/automation/tier_4/sponge");

    // Captured Blaze Burners are ingredients in multiple machine recipes. Blaze rods
    // are farmable, so this removes the manual mob-capture step from machine factories.
    event.recipes.create.mechanical_crafting(
        "create:blaze_burner",
        [
            " R ",
            "RBR",
            " P "
        ],
        {
            R: "minecraft:blaze_rod",
            B: "create:empty_blaze_burner",
            P: "minecraft:blaze_powder"
        })
        .id("kubejs:tk3/automation/tier_4/blaze_burner");

    //->------------------------] Tier 5 — Dragon's Breath production [------------------------<-//

    // The Dragon Head is the reusable Bulk Ending source. The head is not consumed,
    // so recurring Singularity production does not require repeated dragon fights.
    event.custom({
        type: "create_dragons_plus:ending",
        ingredients: [{ item: "minecraft:glass_bottle" }],
        results: [{ id: "minecraft:dragon_breath" }]
    }).id("kubejs:tk3/automation/tier_5/dragon_breath_bulk_ending");

    //->------------------------] Tier 6/7 — addon machine construction [------------------------<-//

    // These Apotheosis materials are direct ingredients in TK3-gated workstation recipes.
    event.recipes.create.mixing(
        ["2x apotheosis:gem_dust"],
        ["minecraft:diamond", "minecraft:amethyst_shard"])
        .heated()
        .id("kubejs:tk3/automation/tier_6/apotheosis_gem_dust");

    event.recipes.create.mixing(
        ["4x apotheosis:arcane_sands"],
        [
            "4x minecraft:sand",
            "irons_spellbooks:arcane_essence",
            Fluid.of("create_enchantment_industry:experience", 250)
        ])
        .heated()
        .id("kubejs:tk3/automation/tier_6/apotheosis_arcane_sands");

    // Alex's Caves nuclear machine components use its Uranium item. Bridge the renewable
    // Mekanism uranium supply into that material family without automating unrelated cave loot.
    event.custom({
        type: "mekanism:enriching",
        input: {
            count: 1,
            item: "mekanism:raw_uranium"
        },
        output: {
            id: "alexscaves:uranium",
            count: 1
        }
    }).id("kubejs:tk3/automation/tier_7/alexscaves_uranium");

    //->------------------------] Tier 8 — Containment / machine construction [------------------------<-//

    // Dragonbone is used to construct the three TK3-gated Dragonforge machine variants.
    // Bone Blocks are fully farmable; the retained Dragon Head supplies Bulk Ending.
    event.custom({
        type: "create_dragons_plus:ending",
        ingredients: [{ item: "minecraft:bone_block" }],
        results: [{ id: "iceandfire:dragonbone", count: 2 }]
    }).id("kubejs:tk3/automation/tier_8/dragonbone_bulk_ending");

    // Spiky Shell is consumed directly by every Containment Mechanism. Native Aquatic
    // Ambitions channeling converts Suspicious Rock into shell products; this closes the
    // missing renewable input to that machine/mechanism chain.
    event.recipes.create.compacting(
        ["2x create_aquatic_ambitions:suspicious_rock"],
        [
            "2x minecraft:gravel",
            "minecraft:prismarine_shard",
            "create_aquatic_ambitions:calcium_rich_powder",
            Fluid.of("minecraft:water", 250)
        ])
        .id("kubejs:tk3/automation/tier_8/suspicious_rock");

    //->------------------------] Tier 9/10 — late industrial feedstocks [------------------------<-//

    // Optional but useful: once Antimatter is established, Netherite can be produced without
    // returning to worldgen. This is intentionally late and does not trivialize earlier mining.
    event.custom({
        type: "mekanism:nucleosynthesizing",
        item_input: {
            count: 1,
            item: "minecraft:blackstone"
        },
        chemical_input: {
            chemical: "mekanism:antimatter",
            amount: 5
        },
        output: {
            id: "minecraft:ancient_debris",
            count: 1
        },
        per_tick_usage: false,
        duration: 300
    }).id("kubejs:tk3/automation/tier_9/ancient_debris");

    // Radiant Obsidian is part of the recurring Sovereign material network.
    // Piglin bartering is renewable but RNG-heavy, so provide a deterministic factory route.
    event.recipes.create.filling(
        ["minecraft:crying_obsidian"],
        [
            "minecraft:obsidian",
            Fluid.of("create_enchantment_industry:experience", 250)
        ])
        .id("kubejs:tk3/automation/tier_9/crying_obsidian");
});
