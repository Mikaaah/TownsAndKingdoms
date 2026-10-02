// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {
  ["ars_nouveau:wilden_tribute", "create:brass_funnel", "create:fluid_pipe", "create:precision_mechanism", "createaddition:alternator", "createaddition:capacitor", "createaddition:copper_spool", "createaddition:electric_motor", "kubejs:tk3_arcane_machine", "kubejs:tk3_precision_machine", "mekanism:alloy_infused", "mekanism:basic_energy_cube", "mekanism:basic_logistical_transporter", "mekanism:basic_mechanical_pipe", "mekanism:basic_universal_cable", "mekanism:crusher", "mekanism:dust_copper", "mekanism:dust_iron", "mekanism:dust_steel", "mekanism:energized_smelter", "mekanism:enrichment_chamber", "mekanism:ingot_osmium", "mekanism:ingot_steel", "mekanism:metallurgic_infuser", "mekanism:steel_casing", "mekanismgenerators:heat_generator", "minecraft:coal", "minecraft:diamond", "minecraft:furnace", "minecraft:glass", "minecraft:iron_ingot", "minecraft:raw_copper", "minecraft:raw_iron", "minecraft:redstone"].forEach(id => { if (Item.of(id).isEmpty()) throw new Error('[TK3] Missing required item: ' + id); });

  // tier 5 | kubejs:tk3/tier_5/steel_bootstrap
  event.recipes.create.mixing(["2x mekanism:ingot_steel"], ["minecraft:iron_ingot", "minecraft:iron_ingot", "minecraft:coal"]).heated().id("kubejs:tk3/tier_5/steel_bootstrap");

  // tier 5 | kubejs:tk3/tier_5/steel_casing
  event.shaped("mekanism:steel_casing", ["SPS", "OAO", "SSS"], {"S": "mekanism:ingot_steel", "O": "mekanism:ingot_osmium", "P": "kubejs:tk3_precision_machine", "A": "kubejs:tk3_arcane_machine"}).id("kubejs:tk3/tier_5/steel_casing");

  // tier 5 | kubejs:tk3/tier_5/metallurgic_infuser
  event.recipes.create.deploying(["mekanism:metallurgic_infuser"], ["mekanism:steel_casing", "ars_nouveau:wilden_tribute"]).keepHeldItem().id("kubejs:tk3/tier_5/metallurgic_infuser");

  // tier 5 | kubejs:tk3/tier_5/enrichment_chamber
  event.shapeless("mekanism:enrichment_chamber", ["mekanism:steel_casing", "mekanism:alloy_infused", "create:precision_mechanism"]).id("kubejs:tk3/tier_5/enrichment_chamber");

  // tier 5 | kubejs:tk3/tier_5/crusher
  event.shapeless("mekanism:crusher", ["mekanism:steel_casing", "minecraft:diamond", "create:precision_mechanism"]).id("kubejs:tk3/tier_5/crusher");

  // tier 5 | kubejs:tk3/tier_5/energized_smelter
  event.shapeless("mekanism:energized_smelter", ["mekanism:steel_casing", "minecraft:furnace", "create:precision_mechanism"]).id("kubejs:tk3/tier_5/energized_smelter");

  // tier 5 | kubejs:tk3/tier_5/heat_generator
  event.shapeless("mekanismgenerators:heat_generator", ["mekanism:steel_casing", "minecraft:furnace", "create:precision_mechanism"]).id("kubejs:tk3/tier_5/heat_generator");

  // tier 5 | kubejs:tk3/tier_5/alternator
  event.shapeless("createaddition:alternator", ["mekanism:steel_casing", "createaddition:copper_spool", "create:precision_mechanism"]).id("kubejs:tk3/tier_5/alternator");

  // tier 5 | kubejs:tk3/tier_5/electric_motor
  event.shapeless("createaddition:electric_motor", ["mekanism:steel_casing", "createaddition:capacitor", "create:precision_mechanism"]).id("kubejs:tk3/tier_5/electric_motor");

  // tier 5 | kubejs:tk3/tier_5/iron_refining
  event.recipes.mekanism.enriching("2x mekanism:dust_iron", "minecraft:raw_iron").id("kubejs:tk3/tier_5/iron_refining");

  // tier 5 | kubejs:tk3/tier_5/copper_refining
  event.recipes.mekanism.enriching("2x mekanism:dust_copper", "minecraft:raw_copper").id("kubejs:tk3/tier_5/copper_refining");

  // tier 5 | kubejs:tk3/tier_5/basic_universal_cable
  event.shapeless("4x mekanism:basic_universal_cable", ["mekanism:ingot_steel", "createaddition:copper_spool", "minecraft:redstone"]).id("kubejs:tk3/tier_5/basic_universal_cable");

  // tier 5 | kubejs:tk3/tier_5/basic_mechanical_pipe
  event.shapeless("4x mekanism:basic_mechanical_pipe", ["mekanism:ingot_steel", "create:fluid_pipe", "minecraft:glass"]).id("kubejs:tk3/tier_5/basic_mechanical_pipe");

  // tier 5 | kubejs:tk3/tier_5/basic_logistical_transporter
  event.shapeless("4x mekanism:basic_logistical_transporter", ["mekanism:ingot_steel", "create:brass_funnel", "minecraft:redstone"]).id("kubejs:tk3/tier_5/basic_logistical_transporter");

  // tier 5 | kubejs:tk3/tier_5/basic_energy_cube
  event.shapeless("mekanism:basic_energy_cube", ["mekanism:steel_casing", "mekanism:alloy_infused", "minecraft:redstone"]).id("kubejs:tk3/tier_5/basic_energy_cube");

  // tier 5 | kubejs:tk3/tier_5/steel_from_dust
  event.recipes.mekanism.smelting("mekanism:ingot_steel", "mekanism:dust_steel").id("kubejs:tk3/tier_5/steel_from_dust");
});
