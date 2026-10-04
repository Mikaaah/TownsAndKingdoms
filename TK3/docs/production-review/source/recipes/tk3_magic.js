// priority: 0
// Maintained recipe source; docs/progression_manifest.json is a generated inspection catalogue.
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
            "kubejs:tk3_arcane_mechanism"
        ],
        "irons_spellbooks:blank_rune",
        "irons_spellbooks:fire_rune",
        500)
        .id("kubejs:tk3/magic/irons_spellbooks_fire_rune");

    // Ice Rune / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:water_essence",
            "kubejs:tk3_arcane_mechanism"
        ],
        "irons_spellbooks:blank_rune",
        "irons_spellbooks:ice_rune",
        500)
        .id("kubejs:tk3/magic/irons_spellbooks_ice_rune");

    // Lightning Rune / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:air_essence",
            "kubejs:tk3_arcane_mechanism"
        ],
        "irons_spellbooks:blank_rune",
        "irons_spellbooks:lightning_rune",
        500)
        .id("kubejs:tk3/magic/irons_spellbooks_lightning_rune");

    // Nature Rune / Apparatus
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:earth_essence",
            "kubejs:tk3_arcane_mechanism"
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

});
