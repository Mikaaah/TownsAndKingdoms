// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {
  ["ae2:calculation_processor", "ae2:calculation_processor_press", "ae2:certus_quartz_crystal", "ae2:certus_quartz_dust", "ae2:charged_certus_quartz_crystal", "ae2:charger", "ae2:engineering_processor", "ae2:engineering_processor_press", "ae2:fluix_crystal", "ae2:fluix_dust", "ae2:inscriber", "ae2:logic_processor", "ae2:logic_processor_press", "ae2:printed_calculation_processor", "ae2:printed_engineering_processor", "ae2:printed_logic_processor", "ae2:printed_silicon", "ae2:silicon", "ae2:silicon_press", "createaddition:capacitor", "createaddition:electric_motor", "mekanism:dust_gold", "mekanism:dust_lead", "mekanism:dust_osmium", "mekanism:dust_tin", "mekanism:raw_lead", "mekanism:raw_osmium", "mekanism:raw_tin", "mekanism:steel_casing", "minecraft:diamond", "minecraft:gold_ingot", "minecraft:raw_gold", "minecraft:redstone"].forEach(id => { if (Item.of(id).isEmpty()) throw new Error('[TK3] Missing required item: ' + id); });

  // tier 6 | kubejs:tk3/late_layers/ae2_charger
  event.shapeless("ae2:charger", ["mekanism:steel_casing", "ae2:certus_quartz_crystal", "createaddition:capacitor"]).id("kubejs:tk3/late_layers/ae2_charger");

  // tier 6 | kubejs:tk3/late_layers/ae2_inscriber
  event.shapeless("ae2:inscriber", ["mekanism:steel_casing", "createaddition:electric_motor", "minecraft:gold_ingot"]).id("kubejs:tk3/late_layers/ae2_inscriber");

  // tier 6 | kubejs:tk3/late_layers/ae2_charged_certus_quartz_crystal
  AE2Recipes.charger(event, "ae2:certus_quartz_crystal", "ae2:charged_certus_quartz_crystal", "kubejs:tk3/late_layers/ae2_charged_certus_quartz_crystal");

  // tier 5 | kubejs:tk3/late_layers/mekanism_dust_gold
  event.recipes.mekanism.enriching("2x mekanism:dust_gold", "minecraft:raw_gold").id("kubejs:tk3/late_layers/mekanism_dust_gold");

  // tier 5 | kubejs:tk3/late_layers/mekanism_dust_osmium
  event.recipes.mekanism.enriching("2x mekanism:dust_osmium", "mekanism:raw_osmium").id("kubejs:tk3/late_layers/mekanism_dust_osmium");

  // tier 5 | kubejs:tk3/late_layers/mekanism_dust_tin
  event.recipes.mekanism.enriching("2x mekanism:dust_tin", "mekanism:raw_tin").id("kubejs:tk3/late_layers/mekanism_dust_tin");

  // tier 5 | kubejs:tk3/late_layers/mekanism_dust_lead
  event.recipes.mekanism.enriching("2x mekanism:dust_lead", "mekanism:raw_lead").id("kubejs:tk3/late_layers/mekanism_dust_lead");

  // tier 6 | kubejs:tk3/late_layers/grind_certus_quartz_crystal
  event.recipes.create.crushing(["ae2:certus_quartz_dust"], ["ae2:certus_quartz_crystal"]).id("kubejs:tk3/late_layers/grind_certus_quartz_crystal");

  // tier 6 | kubejs:tk3/late_layers/grind_fluix_crystal
  event.recipes.create.crushing(["ae2:fluix_dust"], ["ae2:fluix_crystal"]).id("kubejs:tk3/late_layers/grind_fluix_crystal");

  // tier 6 | kubejs:tk3/late_layers/ae2_printed_silicon
  AE2Recipes.inscriberPress(event, "ae2:silicon", "ae2:silicon_press", "ae2:printed_silicon", "kubejs:tk3/late_layers/ae2_printed_silicon");

  // tier 6 | kubejs:tk3/late_layers/ae2_printed_logic_processor
  AE2Recipes.inscriberPress(event, "minecraft:gold_ingot", "ae2:logic_processor_press", "ae2:printed_logic_processor", "kubejs:tk3/late_layers/ae2_printed_logic_processor");

  // tier 6 | kubejs:tk3/late_layers/ae2_logic_processor
  AE2Recipes.inscriberWithBottom(event, "press", "minecraft:redstone", "ae2:printed_logic_processor", "ae2:printed_silicon", "ae2:logic_processor", "kubejs:tk3/late_layers/ae2_logic_processor");

  // tier 6 | kubejs:tk3/late_layers/ae2_printed_calculation_processor
  AE2Recipes.inscriberPress(event, "ae2:certus_quartz_crystal", "ae2:calculation_processor_press", "ae2:printed_calculation_processor", "kubejs:tk3/late_layers/ae2_printed_calculation_processor");

  // tier 6 | kubejs:tk3/late_layers/ae2_calculation_processor
  AE2Recipes.inscriberWithBottom(event, "press", "minecraft:redstone", "ae2:printed_calculation_processor", "ae2:printed_silicon", "ae2:calculation_processor", "kubejs:tk3/late_layers/ae2_calculation_processor");

  // tier 6 | kubejs:tk3/late_layers/ae2_printed_engineering_processor
  AE2Recipes.inscriberPress(event, "minecraft:diamond", "ae2:engineering_processor_press", "ae2:printed_engineering_processor", "kubejs:tk3/late_layers/ae2_printed_engineering_processor");

  // tier 6 | kubejs:tk3/late_layers/ae2_engineering_processor
  AE2Recipes.inscriberWithBottom(event, "press", "minecraft:redstone", "ae2:printed_engineering_processor", "ae2:printed_silicon", "ae2:engineering_processor", "kubejs:tk3/late_layers/ae2_engineering_processor");
});
