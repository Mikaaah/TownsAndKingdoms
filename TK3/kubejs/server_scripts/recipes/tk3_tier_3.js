// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {
  ["aeronautics:propeller_bearing", "create:brass_casing", "create:brass_funnel", "create:brass_ingot", "create:brass_sheet", "create:brass_tunnel", "create:content_observer", "create:contraption_controls", "create:controls", "create:display_board", "create:display_link", "create:electron_tube", "create:elevator_pulley", "create:incomplete_precision_mechanism", "create:mechanical_arm", "create:mechanical_bearing", "create:mechanical_crafter", "create:mechanical_press", "create:package_frogport", "create:packager", "create:precision_mechanism", "create:propeller", "create:redstone_link", "create:repackager", "create:rotation_speed_controller", "create:sand_paper", "create:sequenced_gearshift", "create:smart_chute", "create:smart_fluid_pipe", "create:stock_link", "create:stock_ticker", "create:stockpile_switch", "create:track_observer", "create:track_signal", "create:track_station", "create:zinc_ingot", "create_enchantment_industry:grindstone_drain", "create_enchantment_industry:printer", "kubejs:tk3_precision_machine", "kubejs:tk3_sealed_mechanism", "minecraft:book", "minecraft:copper_ingot", "minecraft:grindstone"].forEach(id => { if (Item.of(id).isEmpty()) throw new Error('[TK3] Missing required item: ' + id); });
  ["aeronautics:propeller_bearing", "create:brass_funnel", "create:brass_ingot", "create:brass_tunnel", "create:content_observer", "create:contraption_controls", "create:controls", "create:display_board", "create:display_link", "create:elevator_pulley", "create:mechanical_arm", "create:mechanical_crafter", "create:package_frogport", "create:packager", "create:precision_mechanism", "create:redstone_link", "create:repackager", "create:rotation_speed_controller", "create:sequenced_gearshift", "create:smart_chute", "create:smart_fluid_pipe", "create:stock_link", "create:stock_ticker", "create:stockpile_switch", "create:track_observer", "create:track_signal", "create:track_station", "create_enchantment_industry:grindstone_drain", "create_enchantment_industry:printer"].forEach(output => event.remove({output: output}));

  // tier 3 | kubejs:tk3/tier_3/brass_ingot
  event.recipes.create.mixing(["2x create:brass_ingot"], ["minecraft:copper_ingot", "create:zinc_ingot"]).heated().id("kubejs:tk3/tier_3/brass_ingot");

  // tier 3 | kubejs:tk3/tier_3/precision_mechanism
  // Final tool is durability-based. Do not keepHeldItem(): ordinary tools wear; unbreakable rewards do not.
  event.recipes.create.sequenced_assembly(["create:precision_mechanism"], "kubejs:tk3_sealed_mechanism", [event.recipes.create.deploying(["create:incomplete_precision_mechanism"], ["create:incomplete_precision_mechanism", "create:brass_sheet"]), event.recipes.create.deploying(["create:incomplete_precision_mechanism"], ["create:incomplete_precision_mechanism", "create:electron_tube"]), event.recipes.create.deploying(["create:incomplete_precision_mechanism"], ["create:incomplete_precision_mechanism", "create:sand_paper"])]).transitionalItem("create:incomplete_precision_mechanism").loops(1).id("kubejs:tk3/tier_3/precision_mechanism");

  // tier 3 | kubejs:tk3/tier_3/brass_funnel
  event.stonecutting("6x create:brass_funnel", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/brass_funnel");

  // tier 3 | kubejs:tk3/tier_3/brass_tunnel
  event.stonecutting("6x create:brass_tunnel", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/brass_tunnel");

  // tier 3 | kubejs:tk3/tier_3/mechanical_arm
  event.stonecutting("create:mechanical_arm", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/mechanical_arm");

  // tier 3 | kubejs:tk3/tier_3/rotation_speed_controller
  event.stonecutting("create:rotation_speed_controller", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/rotation_speed_controller");

  // tier 3 | kubejs:tk3/tier_3/mechanical_crafter
  event.stonecutting("3x create:mechanical_crafter", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/mechanical_crafter");

  // tier 3 | kubejs:tk3/tier_3/sequenced_gearshift
  event.stonecutting("create:sequenced_gearshift", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/sequenced_gearshift");

  // tier 3 | kubejs:tk3/tier_3/packager
  event.stonecutting("create:packager", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/packager");

  // tier 3 | kubejs:tk3/tier_3/stock_link
  event.stonecutting("create:stock_link", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/stock_link");

  // tier 3 | kubejs:tk3/tier_3/stock_ticker
  event.stonecutting("create:stock_ticker", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/stock_ticker");

  // tier 3 | kubejs:tk3/tier_3/repackager
  event.stonecutting("create:repackager", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/repackager");

  // tier 3 | kubejs:tk3/tier_3/package_frogport
  event.stonecutting("create:package_frogport", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/package_frogport");

  // tier 3 | kubejs:tk3/tier_3/grindstone_drain
  event.shapeless("create_enchantment_industry:grindstone_drain", ["create:precision_mechanism", "minecraft:grindstone", "create:brass_casing"]).id("kubejs:tk3/tier_3/grindstone_drain");

  // tier 3 | kubejs:tk3/tier_3/printer
  event.shapeless("create_enchantment_industry:printer", ["create:precision_mechanism", "minecraft:book", "create:mechanical_press"]).id("kubejs:tk3/tier_3/printer");

  // tier 3 | kubejs:tk3/tier_3/propeller_bearing
  event.shapeless("aeronautics:propeller_bearing", ["create:precision_mechanism", "create:mechanical_bearing", "create:propeller"]).id("kubejs:tk3/tier_3/propeller_bearing");

  // tier 3 | kubejs:tk3/tier_3/content_observer
  event.stonecutting("2x create:content_observer", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/content_observer");

  // tier 3 | kubejs:tk3/tier_3/stockpile_switch
  event.stonecutting("2x create:stockpile_switch", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/stockpile_switch");

  // tier 3 | kubejs:tk3/tier_3/smart_chute
  event.stonecutting("3x create:smart_chute", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/smart_chute");

  // tier 3 | kubejs:tk3/tier_3/smart_fluid_pipe
  event.stonecutting("3x create:smart_fluid_pipe", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/smart_fluid_pipe");

  // tier 3 | kubejs:tk3/tier_3/display_link
  event.stonecutting("2x create:display_link", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/display_link");

  // tier 3 | kubejs:tk3/tier_3/display_board
  event.stonecutting("6x create:display_board", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/display_board");

  // tier 3 | kubejs:tk3/tier_3/redstone_link
  event.stonecutting("4x create:redstone_link", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/redstone_link");

  // tier 3 | kubejs:tk3/tier_3/elevator_pulley
  event.stonecutting("create:elevator_pulley", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/elevator_pulley");

  // tier 3 | kubejs:tk3/tier_3/contraption_controls
  event.stonecutting("create:contraption_controls", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/contraption_controls");

  // tier 3 | kubejs:tk3/tier_3/track_station
  event.stonecutting("create:track_station", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/track_station");

  // tier 3 | kubejs:tk3/tier_3/track_signal
  event.stonecutting("2x create:track_signal", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/track_signal");

  // tier 3 | kubejs:tk3/tier_3/track_observer
  event.stonecutting("2x create:track_observer", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/track_observer");

  // tier 3 | kubejs:tk3/tier_3/controls
  event.stonecutting("create:controls", "kubejs:tk3_precision_machine").id("kubejs:tk3/tier_3/controls");
});
