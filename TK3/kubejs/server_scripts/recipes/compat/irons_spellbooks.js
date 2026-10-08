// priority: 0
// TK3 compatibility/integration recipes for irons_spellbooks. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Required Items [------------------------<-//

    //->------------------------]  Tier 4 / Irons Spellbooks / Processing [------------------------<-//

    // Blank Rune / Compacting
    event.recipes.create.compacting(
        [
            "irons_spellbooks:blank_rune"
        ],
        [
            "minecraft:stone",
            "irons_spellbooks:arcane_essence"
        ])
        .id("kubejs:tk3/magic/irons_spellbooks_blank_rune");

    // Magic Cloth / Mixing
    event.recipes.create.mixing(
        [
            "2x irons_spellbooks:magic_cloth"
        ],
        [
            "#minecraft:wool",
            "irons_spellbooks:arcane_essence",
            Fluid.of("minecraft:water",
                250)
        ])
        .id("kubejs:tk3/magic/irons_spellbooks_magic_cloth");

    // Arcane Ingot / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:source_gem",
            "irons_spellbooks:arcane_essence",
            "minecraft:gold_ingot"
        ],
        "minecraft:iron_ingot",
        "irons_spellbooks:arcane_ingot",
        1000)
        .id("kubejs:tk3/magic/irons_spellbooks_arcane_ingot");

    // Fire Rune / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:fire_essence",
            "minecraft:blaze_powder"
        ],
        "irons_spellbooks:blank_rune",
        "irons_spellbooks:fire_rune",
        500)
        .id("kubejs:tk3/magic/irons_spellbooks_fire_rune");

    // Ice Rune / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:water_essence",
            "minecraft:packed_ice"
        ],
        "irons_spellbooks:blank_rune",
        "irons_spellbooks:ice_rune",
        500)
        .id("kubejs:tk3/magic/irons_spellbooks_ice_rune");

    // Lightning Rune / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:air_essence",
            "minecraft:lightning_rod"
        ],
        "irons_spellbooks:blank_rune",
        "irons_spellbooks:lightning_rune",
        500)
        .id("kubejs:tk3/magic/irons_spellbooks_lightning_rune");

    // Nature Rune / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:earth_essence",
            "minecraft:moss_block"
        ],
        "irons_spellbooks:blank_rune",
        "irons_spellbooks:nature_rune",
        500)
        .id("kubejs:tk3/magic/irons_spellbooks_nature_rune");

    // Common Ink / Cauldron Brew
    event.recipes.irons_spellbooks.alchemist_cauldron_brew(
        [Fluid.of("irons_spellbooks:common_ink",
            250)],
        "minecraft:ink_sac",
        Fluid.of("create_wizardry:mana",
            250))
        .id("kubejs:tk3/magic/mana_ink");

    //->------------------------]  Tier 5 / Irons Spellbooks / Processing [------------------------<-//

    // Common Ink / Cauldron Empty
    event.recipes.irons_spellbooks.alchemist_cauldron_empty(
        "irons_spellbooks:common_ink",
        "minecraft:glass_bottle",
        Fluid.of("irons_spellbooks:common_ink",
            250))
        .id("kubejs:tk3/magic/bottle_common_ink");


    //->------------------------]  Tier 4 / Ars + Iron's rune attunement [------------------------<-//

    // These are alternate magical workshop recipes. Runes are consumables, so the
    // apparatus uses thematic catalysts rather than burning full TK3 mechanisms.
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:source_gem",
            "irons_spellbooks:arcane_essence",
            "minecraft:amethyst_shard"
        ],
        "irons_spellbooks:blank_rune",
        "irons_spellbooks:arcane_rune",
        750)
        .id("kubejs:tk3/magic/irons_spellbooks_arcane_rune");

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:manipulation_essence",
            "minecraft:ender_pearl",
            "minecraft:chorus_fruit"
        ],
        "irons_spellbooks:blank_rune",
        "irons_spellbooks:ender_rune",
        750)
        .id("kubejs:tk3/magic/irons_spellbooks_ender_rune");

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:abjuration_essence",
            "minecraft:ghast_tear",
            "minecraft:gold_ingot"
        ],
        "irons_spellbooks:blank_rune",
        "irons_spellbooks:holy_rune",
        1000)
        .id("kubejs:tk3/magic/irons_spellbooks_holy_rune");

    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:conjuration_essence",
            "irons_spellbooks:blood_vial",
            "minecraft:nether_wart"
        ],
        "irons_spellbooks:blank_rune",
        "irons_spellbooks:blood_rune",
        1000)
        .id("kubejs:tk3/magic/irons_spellbooks_blood_rune");

    //->------------------------]  Create Enchantment Industry -> Iron's alchemy [------------------------<-//

    // Mana brewing remains available. Liquid Experience is a second, more productive
    // alchemical solvent once Enchantment Industry is online, giving XP infrastructure a
    // real use in the magic workshop without making basic ink depend on machinery.
    event.recipes.irons_spellbooks.alchemist_cauldron_brew(
        [Fluid.of("irons_spellbooks:common_ink", 500)],
        "minecraft:ink_sac",
        Fluid.of("create_enchantment_industry:experience", 250))
        .id("kubejs:tk3/compat/experience_common_ink");
});
