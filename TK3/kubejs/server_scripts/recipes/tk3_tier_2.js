// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {
  ["create:copper_backtank", "create:copper_casing", "create:copper_sheet", "create:copper_valve_handle", "create:fluid_pipe", "create:fluid_tank", "create:fluid_valve", "create:hose_pulley", "create:iron_sheet", "create:item_drain", "create:mechanical_press", "create:mechanical_pump", "create:portable_fluid_interface", "create:spout", "create:steam_engine", "create:steam_whistle", "createaddition:capacitor", "createaddition:rolling_mill", "farmersdelight:iron_knife", "kubejs:tk3_hydraulic_machine", "kubejs:tk3_incomplete_sealed_mechanism", "kubejs:tk3_rotation_mechanism", "kubejs:tk3_sealed_mechanism", "minecraft:copper_block", "minecraft:copper_ingot", "minecraft:kelp", "minecraft:redstone", "minecraft:slime_ball", "minecraft:wheat"].forEach(id => { if (Item.of(id).isEmpty()) throw new Error('[TK3] Missing required item: ' + id); });
  ["create:copper_backtank", "create:copper_valve_handle", "create:fluid_pipe", "create:fluid_tank", "create:fluid_valve", "create:hose_pulley", "create:item_drain", "create:mechanical_pump", "create:portable_fluid_interface", "create:spout", "create:steam_engine", "create:steam_whistle", "createaddition:capacitor", "createaddition:rolling_mill", "kubejs:tk3_sealed_mechanism", "minecraft:slime_ball"].forEach(output => event.remove({output: output}));

  // tier 2 | kubejs:tk3/tier_2/tk3_sealed_mechanism
  // Final tool is durability-based. Do not keepHeldItem(): ordinary tools wear; unbreakable rewards do not.
  event.recipes.create.sequenced_assembly(["kubejs:tk3_sealed_mechanism"], "kubejs:tk3_rotation_mechanism", [event.recipes.create.deploying(["kubejs:tk3_incomplete_sealed_mechanism"], ["kubejs:tk3_incomplete_sealed_mechanism", "create:copper_sheet"]), event.recipes.create.deploying(["kubejs:tk3_incomplete_sealed_mechanism"], ["kubejs:tk3_incomplete_sealed_mechanism", "minecraft:slime_ball"]), event.recipes.create.deploying(["kubejs:tk3_incomplete_sealed_mechanism"], ["kubejs:tk3_incomplete_sealed_mechanism", "farmersdelight:iron_knife"])]).transitionalItem("kubejs:tk3_incomplete_sealed_mechanism").loops(1).id("kubejs:tk3/tier_2/tk3_sealed_mechanism");

  // tier 2 | kubejs:tk3/tier_2/fluid_pipe
  event.stonecutting("16x create:fluid_pipe", "kubejs:tk3_hydraulic_machine").id("kubejs:tk3/tier_2/fluid_pipe");

  // tier 2 | kubejs:tk3/tier_2/mechanical_pump
  event.stonecutting("create:mechanical_pump", "kubejs:tk3_hydraulic_machine").id("kubejs:tk3/tier_2/mechanical_pump");

  // tier 2 | kubejs:tk3/tier_2/fluid_tank
  event.stonecutting("3x create:fluid_tank", "kubejs:tk3_hydraulic_machine").id("kubejs:tk3/tier_2/fluid_tank");

  // tier 2 | kubejs:tk3/tier_2/spout
  event.stonecutting("create:spout", "kubejs:tk3_hydraulic_machine").id("kubejs:tk3/tier_2/spout");

  // tier 2 | kubejs:tk3/tier_2/item_drain
  event.stonecutting("create:item_drain", "kubejs:tk3_hydraulic_machine").id("kubejs:tk3/tier_2/item_drain");

  // tier 2 | kubejs:tk3/tier_2/hose_pulley
  event.stonecutting("create:hose_pulley", "kubejs:tk3_hydraulic_machine").id("kubejs:tk3/tier_2/hose_pulley");

  // tier 2 | kubejs:tk3/tier_2/portable_fluid_interface
  event.stonecutting("create:portable_fluid_interface", "kubejs:tk3_hydraulic_machine").id("kubejs:tk3/tier_2/portable_fluid_interface");

  // tier 2 | kubejs:tk3/tier_2/steam_engine
  event.stonecutting("create:steam_engine", "kubejs:tk3_hydraulic_machine").id("kubejs:tk3/tier_2/steam_engine");

  // tier 2 | kubejs:tk3/tier_2/rolling_mill
  event.shapeless("createaddition:rolling_mill", ["kubejs:tk3_hydraulic_machine", "create:mechanical_press", "minecraft:copper_ingot"]).id("kubejs:tk3/tier_2/rolling_mill");

  // tier 2 | kubejs:tk3/tier_2/renewable_sealant
  event.recipes.create.mixing(["2x minecraft:slime_ball"], ["minecraft:kelp", "minecraft:wheat", Fluid.of("minecraft:water", 250)]).id("kubejs:tk3/tier_2/renewable_sealant");

  // tier 2 | kubejs:tk3/tier_2/fluid_valve
  event.stonecutting("create:fluid_valve", "kubejs:tk3_hydraulic_machine").id("kubejs:tk3/tier_2/fluid_valve");

  // tier 2 | kubejs:tk3/tier_2/copper_valve_handle
  event.stonecutting("6x create:copper_valve_handle", "kubejs:tk3_hydraulic_machine").id("kubejs:tk3/tier_2/copper_valve_handle");

  // tier 2 | kubejs:tk3/tier_2/steam_whistle
  event.stonecutting("create:steam_whistle", "kubejs:tk3_hydraulic_machine").id("kubejs:tk3/tier_2/steam_whistle");

  // tier 2 | kubejs:tk3/tier_2/copper_backtank
  event.shapeless("create:copper_backtank", ["kubejs:tk3_sealed_mechanism", "create:copper_casing", "minecraft:copper_block"]).id("kubejs:tk3/tier_2/copper_backtank");

  // tier 2 | kubejs:tk3/tier_2/capacitor
  event.shaped("createaddition:capacitor", [" C ", "IRI", " C "], {"C": "create:copper_sheet", "R": "minecraft:redstone", "I": "create:iron_sheet"}).id("kubejs:tk3/tier_2/capacitor");
});
