// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {
  ["ars_nouveau:agronomic_sourcelink", "ars_nouveau:alchemical_sourcelink", "ars_nouveau:enchanters_sword", "ars_nouveau:enchanting_apparatus", "ars_nouveau:manipulation_essence", "ars_nouveau:mycelial_sourcelink", "ars_nouveau:relay", "ars_nouveau:relay_collector", "ars_nouveau:relay_deposit", "ars_nouveau:relay_splitter", "ars_nouveau:source_gem", "ars_nouveau:starbuncle_charm", "ars_nouveau:whirlisprig_charm", "ars_nouveau:wixie_charm", "create:fluid_tank", "create:precision_mechanism", "create_enchantment_industry:blaze_enchanter", "create_enchantment_industry:experience_hatch", "create_enchantment_industry:mechanical_grindstone", "irons_spellbooks:alchemist_cauldron", "irons_spellbooks:arcane_anvil", "irons_spellbooks:arcane_essence", "irons_spellbooks:common_ink", "kubejs:tk3_arcane_machine", "kubejs:tk3_arcane_mechanism", "kubejs:tk3_incomplete_arcane_mechanism", "kubejs:tk3_precision_machine", "minecraft:anvil", "minecraft:brewing_stand", "minecraft:brown_mushroom", "minecraft:cauldron", "minecraft:chest", "minecraft:diamond", "minecraft:enchanting_table", "minecraft:gold_ingot", "minecraft:grindstone", "minecraft:hopper", "minecraft:ink_sac", "minecraft:oak_sapling", "minecraft:redstone", "minecraft:wheat"].forEach(id => { if (Item.of(id).isEmpty()) throw new Error('[TK3] Missing required item: ' + id); });
  ["ars_nouveau:agronomic_sourcelink", "ars_nouveau:alchemical_sourcelink", "ars_nouveau:enchanting_apparatus", "ars_nouveau:mycelial_sourcelink", "ars_nouveau:relay", "ars_nouveau:relay_collector", "ars_nouveau:relay_deposit", "ars_nouveau:relay_splitter", "ars_nouveau:starbuncle_charm", "ars_nouveau:whirlisprig_charm", "ars_nouveau:wixie_charm", "create_enchantment_industry:blaze_enchanter", "create_enchantment_industry:experience_hatch", "create_enchantment_industry:mechanical_grindstone", "irons_spellbooks:alchemist_cauldron", "irons_spellbooks:arcane_anvil", "irons_spellbooks:arcane_essence", "irons_spellbooks:common_ink", "kubejs:tk3_arcane_mechanism"].forEach(output => event.remove({output: output}));

  // tier 4 | kubejs:tk3/tier_4/enchanting_apparatus
  event.shapeless("ars_nouveau:enchanting_apparatus", ["kubejs:tk3_precision_machine", "minecraft:diamond", "ars_nouveau:source_gem"]).id("kubejs:tk3/tier_4/enchanting_apparatus");

  // tier 4 | kubejs:tk3/tier_4/arcane_essence
  event.recipes.create.haunting(["irons_spellbooks:arcane_essence"], ["ars_nouveau:source_gem"]).id("kubejs:tk3/tier_4/arcane_essence");

  // tier 4 | kubejs:tk3/tier_4/tk3_arcane_mechanism
  // Final tool is durability-based. Do not keepHeldItem(): ordinary tools wear; unbreakable rewards do not.
  event.recipes.create.sequenced_assembly(["kubejs:tk3_arcane_mechanism"], "create:precision_mechanism", [event.recipes.create.deploying(["kubejs:tk3_incomplete_arcane_mechanism"], ["kubejs:tk3_incomplete_arcane_mechanism", "ars_nouveau:source_gem"]), event.recipes.create.deploying(["kubejs:tk3_incomplete_arcane_mechanism"], ["kubejs:tk3_incomplete_arcane_mechanism", "irons_spellbooks:arcane_essence"]), event.recipes.create.deploying(["kubejs:tk3_incomplete_arcane_mechanism"], ["kubejs:tk3_incomplete_arcane_mechanism", "ars_nouveau:manipulation_essence"]), event.recipes.create.deploying(["kubejs:tk3_incomplete_arcane_mechanism"], ["kubejs:tk3_incomplete_arcane_mechanism", "minecraft:gold_ingot"]), event.recipes.create.deploying(["kubejs:tk3_incomplete_arcane_mechanism"], ["kubejs:tk3_incomplete_arcane_mechanism", "ars_nouveau:enchanters_sword"])]).transitionalItem("kubejs:tk3_incomplete_arcane_mechanism").loops(1).id("kubejs:tk3/tier_4/tk3_arcane_mechanism");

  // tier 4 | kubejs:tk3/tier_4/agronomic_sourcelink
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:wheat", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "ars_nouveau:agronomic_sourcelink", 1000).id("kubejs:tk3/tier_4/agronomic_sourcelink");

  // tier 4 | kubejs:tk3/tier_4/relay
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:redstone", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "ars_nouveau:relay", 1000).id("kubejs:tk3/tier_4/relay");

  // tier 4 | kubejs:tk3/tier_4/starbuncle_charm
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:gold_ingot", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "ars_nouveau:starbuncle_charm", 1000).id("kubejs:tk3/tier_4/starbuncle_charm");

  // tier 4 | kubejs:tk3/tier_4/whirlisprig_charm
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:oak_sapling", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "ars_nouveau:whirlisprig_charm", 1000).id("kubejs:tk3/tier_4/whirlisprig_charm");

  // tier 4 | kubejs:tk3/tier_4/wixie_charm
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:cauldron", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "ars_nouveau:wixie_charm", 1000).id("kubejs:tk3/tier_4/wixie_charm");

  // tier 4 | kubejs:tk3/tier_4/alchemist_cauldron
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:cauldron", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "irons_spellbooks:alchemist_cauldron", 1000).id("kubejs:tk3/tier_4/alchemist_cauldron");

  // tier 4 | kubejs:tk3/tier_4/arcane_anvil
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:anvil", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "irons_spellbooks:arcane_anvil", 1000).id("kubejs:tk3/tier_4/arcane_anvil");

  // tier 4 | kubejs:tk3/tier_4/blaze_enchanter
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:enchanting_table", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "create_enchantment_industry:blaze_enchanter", 1000).id("kubejs:tk3/tier_4/blaze_enchanter");

  // tier 4 | kubejs:tk3/tier_4/common_ink
  event.recipes.create.mixing(["2x irons_spellbooks:common_ink"], ["minecraft:ink_sac", "irons_spellbooks:arcane_essence", Fluid.of("minecraft:water", 250)]).id("kubejs:tk3/tier_4/common_ink");

  // tier 4 | kubejs:tk3/tier_4/relay_splitter
  event.recipes.ars_nouveau.enchanting_apparatus(["ars_nouveau:relay", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "ars_nouveau:relay_splitter", 1000).id("kubejs:tk3/tier_4/relay_splitter");

  // tier 4 | kubejs:tk3/tier_4/relay_deposit
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:chest", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "ars_nouveau:relay_deposit", 1000).id("kubejs:tk3/tier_4/relay_deposit");

  // tier 4 | kubejs:tk3/tier_4/relay_collector
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:hopper", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "ars_nouveau:relay_collector", 1000).id("kubejs:tk3/tier_4/relay_collector");

  // tier 4 | kubejs:tk3/tier_4/alchemical_sourcelink
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:brewing_stand", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "ars_nouveau:alchemical_sourcelink", 1000).id("kubejs:tk3/tier_4/alchemical_sourcelink");

  // tier 4 | kubejs:tk3/tier_4/mycelial_sourcelink
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:brown_mushroom", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "ars_nouveau:mycelial_sourcelink", 1000).id("kubejs:tk3/tier_4/mycelial_sourcelink");

  // tier 4 | kubejs:tk3/tier_4/mechanical_grindstone
  event.recipes.ars_nouveau.enchanting_apparatus(["minecraft:grindstone", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "create_enchantment_industry:mechanical_grindstone", 1000).id("kubejs:tk3/tier_4/mechanical_grindstone");

  // tier 4 | kubejs:tk3/tier_4/experience_hatch
  event.recipes.ars_nouveau.enchanting_apparatus(["create:fluid_tank", "ars_nouveau:source_gem"], "kubejs:tk3_arcane_machine", "create_enchantment_industry:experience_hatch", 1000).id("kubejs:tk3/tier_4/experience_hatch");
});
