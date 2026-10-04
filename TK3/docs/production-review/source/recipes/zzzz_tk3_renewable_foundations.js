// priority: -30000
// Towns & Kingdoms 3 — full renewability foundation pass.
// Every consumable progression resource must have a repeatable automation route.
// One-time boss/exploration items are only allowed when they become retained/reusable catalysts.

ServerEvents.recipes(event => {
    //->------------------------] Tier 1 — world -> Create bootstrap [------------------------<-//

    // Cobblestone is the root generator (vanilla water/lava). Existing pack recipes continue:
    // cobble -> gravel -> sand -> clay, while gravel washing supplies early iron/flint.
    // Kelp, wood and crops remain normal fully automatable farms.

    //->------------------------] Tier 3 — renewable heat / lava [------------------------<-//

    // Gives the factory a closed lava source once Precision-era Nether processing exists.
    // Netherrack itself is generator-backed by the pack; Blaze Powder is mob-farm renewable.
    event.recipes.create.mixing(
        [Fluid.of('minecraft:lava', 250)],
        ['4x minecraft:netherrack', 'minecraft:blaze_powder'])
        .superheated()
        .id('kubejs:tk3/renewable/tier_3/lava');

    //->------------------------] Tier 4 — renewable diamond pressure synthesis [------------------------<-//

    // Engineering Processors require Diamonds before Mekanism exists. Mining cannot be the
    // sustained source, so coal is pressure-converted in a superheated basin.
    // Coal is generator-backed from Scorchia by Tier 3; Sturdy Sheets are Create-produced.
    event.recipes.create.compacting(
        ['minecraft:diamond'],
        [
            '16x minecraft:coal',
            '2x create:sturdy_sheet',
            Fluid.of('minecraft:lava', 500)
        ])
        .superheated()
        .id('kubejs:tk3/renewable/tier_4/diamond_pressure_synthesis');

    //->------------------------] Tier 5 — Create: Dragons Plus Bulk Ending [------------------------<-//

    // A Dragon Head is the reusable Bulk Ending catalyst/source in Create: Dragons Plus.
    // Once the player has beaten the Dragon (or otherwise acquired one), bottles can be
    // processed forever without consuming the head. This removes Dragon's Breath as a
    // finite End-fight consumable from all later production.
    event.custom({
        type: 'create_dragons_plus:ending',
        ingredients: [{ item: 'minecraft:glass_bottle' }],
        results: [{ id: 'minecraft:dragon_breath' }]
    }).id('kubejs:tk3/renewable/tier_5/dragon_breath_bulk_ending');


    // Tier 6 — Iron's Arcane Essence is normally loot/trade-only. T&K3 needs it as a
    // recurring Arcane Mechanism ingredient, so Ars converts renewable amethyst + Source.
    event.recipes.ars_nouveau.imbuement(
        'minecraft:amethyst_shard',
        '2x irons_spellbooks:arcane_essence',
        2500,
        ['ars_nouveau:source_gem'])
        .id('kubejs:tk3/renewable/tier_6/arcane_essence');

    // Tier 8 — Dragonbone is consumed by the Dragonforge side path. Bulk Ending turns
    // farmable bone blocks into dragon material using the retained Dragon Head source.
    event.custom({
        type: 'create_dragons_plus:ending',
        ingredients: [{ item: 'minecraft:bone_block' }],
        results: [{ id: 'iceandfire:dragonbone', count: 2 }]
    }).id('kubejs:tk3/renewable/tier_8/dragonbone_bulk_ending');

    //->------------------------] Tier 8 — closed aquatic shell loop [------------------------<-//

    // Native Aquatic Ambitions channeling already turns Suspicious Rock into Nautilus Shells
    // and Spiky Shells. The missing link was a renewable Suspicious Rock input.
    event.recipes.create.compacting(
        ['2x create_aquatic_ambitions:suspicious_rock'],
        [
            '2x minecraft:gravel',
            'minecraft:prismarine_shard',
            'create_aquatic_ambitions:calcium_rich_powder',
            Fluid.of('minecraft:water', 250)
        ])
        .id('kubejs:tk3/renewable/tier_8/suspicious_rock');

    //->------------------------] Tier 9 — renewable Netherite feedstock [------------------------<-//

    // Any late addon recipe that still asks for Netherite now has an actual industrial source.
    // Antimatter is intentionally expensive but fully renewable once the SPS line is online.
    event.custom({
        type: 'mekanism:nucleosynthesizing',
        item_input: {
            count: 1,
            item: 'minecraft:blackstone'
        },
        chemical_input: {
            chemical: 'mekanism:antimatter',
            amount: 5
        },
        output: {
            id: 'minecraft:ancient_debris',
            count: 1
        },
        per_tick_usage: false,
        duration: 300
    }).id('kubejs:tk3/renewable/tier_9/ancient_debris');

    // Crying Obsidian is renewable through Piglin bartering, but provide a deterministic
    // factory route at the Singularity tier so Sovereign production never depends on RNG.
    event.recipes.create.filling(
        ['minecraft:crying_obsidian'],
        ['minecraft:obsidian', Fluid.of('create_enchantment_industry:experience', 250)])
        .id('kubejs:tk3/renewable/tier_9/crying_obsidian');
});
