// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {
  ["ars_creo:starbuncle_wheel", "ars_nouveau:air_essence", "ars_nouveau:earth_essence", "ars_nouveau:fire_essence", "ars_nouveau:source_gem", "ars_nouveau:source_jar", "ars_nouveau:starbuncle_charm", "ars_nouveau:water_essence", "create:fluid_pipe", "create:mechanical_pump", "create:smart_fluid_pipe", "create_wizardry:arcane_pipe", "create_wizardry:arcane_pump", "create_wizardry:arcane_sheet", "create_wizardry:blaze_caster", "create_wizardry:channeler", "create_wizardry:mana_siphon", "create_wizardry:smart_arcane_pipe", "irons_spellbooks:arcane_essence", "irons_spellbooks:arcane_ingot", "irons_spellbooks:arcane_rune", "irons_spellbooks:blank_rune", "irons_spellbooks:common_ink", "irons_spellbooks:fire_rune", "irons_spellbooks:ice_rune", "irons_spellbooks:lightning_rune", "irons_spellbooks:magic_cloth", "irons_spellbooks:nature_rune", "kubejs:tk3_arcane_machine", "kubejs:tk3_arcane_mechanism", "minecraft:blaze_rod", "minecraft:glass_bottle", "minecraft:gold_ingot", "minecraft:ink_sac", "minecraft:iron_ingot", "minecraft:stone"].forEach(id => { if (Item.of(id).isEmpty()) throw new Error('[TK3] Missing required item: ' + id); });

  // tier 4 | kubejs:tk3/magic/irons_spellbooks_blank_rune
  event.recipes.create.compacting(["irons_spellbooks:blank_rune"], ["minecraft:stone", "irons_spellbooks:arcane_essence"]).id("kubejs:tk3/magic/irons_spellbooks_blank_rune");

  // tier 4 | kubejs:tk3/magic/irons_spellbooks_magic_cloth
  event.recipes.create.mixing(["2x irons_spellbooks:magic_cloth"], ["#minecraft:wool", "irons_spellbooks:arcane_essence", Fluid.of("minecraft:water", 250)]).id("kubejs:tk3/magic/irons_spellbooks_magic_cloth");

  // tier 4 | kubejs:tk3/magic/irons_spellbooks_arcane_ingot
  event.recipes.ars_nouveau.enchanting_apparatus(["ars_nouveau:source_gem", "irons_spellbooks:arcane_essence", "minecraft:gold_ingot"], "minecraft:iron_ingot", "irons_spellbooks:arcane_ingot", 1000).id("kubejs:tk3/magic/irons_spellbooks_arcane_ingot");

  // tier 4 | kubejs:tk3/magic/irons_spellbooks_fire_rune
  event.recipes.ars_nouveau.enchanting_apparatus(["ars_nouveau:fire_essence", "kubejs:tk3_arcane_mechanism"], "irons_spellbooks:blank_rune", "irons_spellbooks:fire_rune", 500).id("kubejs:tk3/magic/irons_spellbooks_fire_rune");

  // tier 4 | kubejs:tk3/magic/irons_spellbooks_ice_rune
  event.recipes.ars_nouveau.enchanting_apparatus(["ars_nouveau:water_essence", "kubejs:tk3_arcane_mechanism"], "irons_spellbooks:blank_rune", "irons_spellbooks:ice_rune", 500).id("kubejs:tk3/magic/irons_spellbooks_ice_rune");

  // tier 4 | kubejs:tk3/magic/irons_spellbooks_lightning_rune
  event.recipes.ars_nouveau.enchanting_apparatus(["ars_nouveau:air_essence", "kubejs:tk3_arcane_mechanism"], "irons_spellbooks:blank_rune", "irons_spellbooks:lightning_rune", 500).id("kubejs:tk3/magic/irons_spellbooks_lightning_rune");

  // tier 4 | kubejs:tk3/magic/irons_spellbooks_nature_rune
  event.recipes.ars_nouveau.enchanting_apparatus(["ars_nouveau:earth_essence", "kubejs:tk3_arcane_mechanism"], "irons_spellbooks:blank_rune", "irons_spellbooks:nature_rune", 500).id("kubejs:tk3/magic/irons_spellbooks_nature_rune");

  // tier 4 | kubejs:tk3/magic/create_wizardry_arcane_sheet
  event.recipes.create.pressing(["create_wizardry:arcane_sheet"], ["irons_spellbooks:arcane_ingot"]).id("kubejs:tk3/magic/create_wizardry_arcane_sheet");

  // tier 4 | kubejs:tk3/magic/create_wizardry_arcane_pump
  event.recipes.ars_nouveau.enchanting_apparatus(["create:mechanical_pump", "create_wizardry:arcane_sheet", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "create_wizardry:arcane_pump", 1000).id("kubejs:tk3/magic/create_wizardry_arcane_pump");

  // tier 4 | kubejs:tk3/magic/create_wizardry_arcane_pipe
  event.recipes.ars_nouveau.enchanting_apparatus(["create:fluid_pipe", "create_wizardry:arcane_sheet", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "create_wizardry:arcane_pipe", 1000).id("kubejs:tk3/magic/create_wizardry_arcane_pipe");

  // tier 4 | kubejs:tk3/magic/create_wizardry_smart_arcane_pipe
  event.recipes.ars_nouveau.enchanting_apparatus(["create:smart_fluid_pipe", "create_wizardry:arcane_sheet", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "create_wizardry:smart_arcane_pipe", 1000).id("kubejs:tk3/magic/create_wizardry_smart_arcane_pipe");

  // tier 4 | kubejs:tk3/magic/create_wizardry_mana_siphon
  event.recipes.ars_nouveau.enchanting_apparatus(["ars_nouveau:source_jar", "create_wizardry:arcane_sheet", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "create_wizardry:mana_siphon", 1000).id("kubejs:tk3/magic/create_wizardry_mana_siphon");

  // tier 4 | kubejs:tk3/magic/create_wizardry_channeler
  event.recipes.ars_nouveau.enchanting_apparatus(["irons_spellbooks:arcane_rune", "create_wizardry:arcane_sheet", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "create_wizardry:channeler", 1000).id("kubejs:tk3/magic/create_wizardry_channeler");

  // tier 4 | kubejs:tk3/magic/create_wizardry_blaze_caster
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:blaze_rod", "create_wizardry:arcane_sheet", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "create_wizardry:blaze_caster", 1000).id("kubejs:tk3/magic/create_wizardry_blaze_caster");

  // tier 4 | kubejs:tk3/magic/ars_creo_starbuncle_wheel
  event.recipes.ars_nouveau.enchanting_apparatus(["ars_nouveau:starbuncle_charm", "create_wizardry:arcane_sheet", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "ars_creo:starbuncle_wheel", 1000).id("kubejs:tk3/magic/ars_creo_starbuncle_wheel");

  // tier 4 | kubejs:tk3/magic/mana_ink
  event.recipes.irons_spellbooks.alchemist_cauldron_brew([Fluid.of("irons_spellbooks:common_ink", 250)], "minecraft:ink_sac", Fluid.of("create_wizardry:mana", 250)).id("kubejs:tk3/magic/mana_ink");

  // tier 4 | kubejs:tk3/magic/bottle_common_ink
  event.recipes.irons_spellbooks.alchemist_cauldron_empty("irons_spellbooks:common_ink", "minecraft:glass_bottle", Fluid.of("irons_spellbooks:common_ink", 250)).id("kubejs:tk3/magic/bottle_common_ink");
});
