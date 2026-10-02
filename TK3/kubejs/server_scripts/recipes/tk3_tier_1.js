// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {
  ["architects_palette:algal_blend", "betterend:iron_hammer", "create:adjustable_chain_gearshift", "create:analog_lever", "create:andesite_alloy", "create:andesite_funnel", "create:andesite_tunnel", "create:basin", "create:belt_connector", "create:cart_assembler", "create:chute", "create:clutch", "create:cogwheel", "create:deployer", "create:depot", "create:encased_chain_drive", "create:encased_fan", "create:gantry_carriage", "create:gearbox", "create:gearshift", "create:iron_sheet", "create:large_cogwheel", "create:large_water_wheel", "create:linear_chassis", "create:mechanical_bearing", "create:mechanical_drill", "create:mechanical_harvester", "create:mechanical_mixer", "create:mechanical_piston", "create:mechanical_plough", "create:mechanical_press", "create:mechanical_saw", "create:portable_storage_interface", "create:propeller", "create:radial_chassis", "create:rope_pulley", "create:shaft", "create:speedometer", "create:vertical_gearbox", "create:water_wheel", "create:weighted_ejector", "create:windmill_bearing", "kubejs:tk3_incomplete_rotation_mechanism", "kubejs:tk3_kinetic_machine", "kubejs:tk3_rotation_mechanism", "minecraft:andesite", "minecraft:clay_ball", "minecraft:cobblestone", "minecraft:dried_kelp", "minecraft:gravel", "minecraft:kelp", "minecraft:sand", "minecraft:stick"].forEach(id => { if (Item.of(id).isEmpty()) throw new Error('[TK3] Missing required item: ' + id); });
  ["architects_palette:algal_blend", "create:adjustable_chain_gearshift", "create:analog_lever", "create:andesite_alloy", "create:andesite_funnel", "create:andesite_tunnel", "create:basin", "create:belt_connector", "create:cart_assembler", "create:chute", "create:clutch", "create:cogwheel", "create:deployer", "create:depot", "create:encased_chain_drive", "create:encased_fan", "create:gantry_carriage", "create:gearbox", "create:gearshift", "create:large_cogwheel", "create:large_water_wheel", "create:linear_chassis", "create:mechanical_bearing", "create:mechanical_drill", "create:mechanical_harvester", "create:mechanical_mixer", "create:mechanical_piston", "create:mechanical_plough", "create:mechanical_press", "create:mechanical_saw", "create:portable_storage_interface", "create:propeller", "create:radial_chassis", "create:rope_pulley", "create:shaft", "create:speedometer", "create:vertical_gearbox", "create:water_wheel", "create:weighted_ejector", "create:windmill_bearing", "kubejs:tk3_rotation_mechanism", "minecraft:clay_ball", "minecraft:gravel"].forEach(output => event.remove({output: output}));

  // tier 1 | kubejs:tk3/tier_1/algal_blend
  event.shapeless("2x architects_palette:algal_blend", ["minecraft:kelp", "minecraft:clay_ball"]).id("kubejs:tk3/tier_1/algal_blend");

  // tier 1 | kubejs:tk3/tier_1/algal_blend_bulk
  event.recipes.create.mixing(["4x architects_palette:algal_blend"], ["minecraft:kelp", "minecraft:clay_ball"]).id("kubejs:tk3/tier_1/algal_blend_bulk");

  // tier 1 | kubejs:tk3/tier_1/andesite_alloy
  event.shapeless("2x create:andesite_alloy", ["minecraft:andesite", "architects_palette:algal_blend"]).id("kubejs:tk3/tier_1/andesite_alloy");

  // tier 1 | kubejs:tk3/tier_1/andesite_alloy_bulk
  event.recipes.create.mixing(["4x create:andesite_alloy"], ["minecraft:andesite", "architects_palette:algal_blend"]).id("kubejs:tk3/tier_1/andesite_alloy_bulk");

  // tier 1 | kubejs:tk3/tier_1/rotation_mechanism_automated
  // Final tool is durability-based. Do not keepHeldItem(): ordinary tools wear; unbreakable rewards do not.
  event.recipes.create.sequenced_assembly(["kubejs:tk3_rotation_mechanism"], "#minecraft:wooden_slabs", [event.recipes.create.deploying(["kubejs:tk3_incomplete_rotation_mechanism"], ["kubejs:tk3_incomplete_rotation_mechanism", "create:andesite_alloy"]), event.recipes.create.deploying(["kubejs:tk3_incomplete_rotation_mechanism"], ["kubejs:tk3_incomplete_rotation_mechanism", "create:andesite_alloy"]), event.recipes.create.deploying(["kubejs:tk3_incomplete_rotation_mechanism"], ["kubejs:tk3_incomplete_rotation_mechanism", "betterend:iron_hammer"])]).transitionalItem("kubejs:tk3_incomplete_rotation_mechanism").loops(1).id("kubejs:tk3/tier_1/rotation_mechanism_automated");

  // tier 1 | kubejs:tk3/tier_1/water_wheel
  event.stonecutting("3x create:water_wheel", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/water_wheel");

  // tier 1 | kubejs:tk3/tier_1/large_water_wheel
  event.stonecutting("create:large_water_wheel", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/large_water_wheel");

  // tier 1 | kubejs:tk3/tier_1/mechanical_press
  event.stonecutting("create:mechanical_press", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/mechanical_press");

  // tier 1 | kubejs:tk3/tier_1/mechanical_mixer
  event.stonecutting("create:mechanical_mixer", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/mechanical_mixer");

  // tier 1 | kubejs:tk3/tier_1/encased_fan
  event.stonecutting("create:encased_fan", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/encased_fan");

  // tier 1 | kubejs:tk3/tier_1/mechanical_saw
  event.stonecutting("create:mechanical_saw", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/mechanical_saw");

  // tier 1 | kubejs:tk3/tier_1/mechanical_drill
  event.stonecutting("create:mechanical_drill", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/mechanical_drill");

  // tier 1 | kubejs:tk3/tier_1/mechanical_bearing
  event.stonecutting("create:mechanical_bearing", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/mechanical_bearing");

  // tier 1 | kubejs:tk3/tier_1/mechanical_harvester
  event.stonecutting("create:mechanical_harvester", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/mechanical_harvester");

  // tier 1 | kubejs:tk3/tier_1/deployer
  event.stonecutting("create:deployer", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/deployer");

  // tier 1 | kubejs:tk3/tier_1/basin
  event.stonecutting("2x create:basin", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/basin");

  // tier 1 | kubejs:tk3/tier_1/andesite_funnel
  event.stonecutting("4x create:andesite_funnel", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/andesite_funnel");

  // tier 1 | kubejs:tk3/tier_1/portable_storage_interface
  event.stonecutting("create:portable_storage_interface", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/portable_storage_interface");

  // tier 1 | kubejs:tk3/tier_1/cobble_to_gravel
  event.recipes.create.milling(["minecraft:gravel"], ["minecraft:cobblestone"]).id("kubejs:tk3/tier_1/cobble_to_gravel");

  // tier 1 | kubejs:tk3/tier_1/renewable_clay
  event.recipes.create.splashing(["minecraft:clay_ball"], ["minecraft:sand"]).id("kubejs:tk3/tier_1/renewable_clay");

  // tier 1 | kubejs:tk3/tier_1/shaft
  event.shapeless("8x create:shaft", ["create:andesite_alloy", "minecraft:stick"]).id("kubejs:tk3/tier_1/shaft");

  // tier 1 | kubejs:tk3/tier_1/cogwheel
  event.shapeless("2x create:cogwheel", ["create:shaft", "#minecraft:planks"]).id("kubejs:tk3/tier_1/cogwheel");

  // tier 1 | kubejs:tk3/tier_1/large_cogwheel
  event.shapeless("create:large_cogwheel", ["create:cogwheel", "create:cogwheel", "#minecraft:planks"]).id("kubejs:tk3/tier_1/large_cogwheel");

  // tier 1 | kubejs:tk3/tier_1/belt_connector
  event.shapeless("3x create:belt_connector", ["minecraft:dried_kelp", "minecraft:dried_kelp", "minecraft:dried_kelp", "minecraft:dried_kelp", "minecraft:dried_kelp", "minecraft:dried_kelp"]).id("kubejs:tk3/tier_1/belt_connector");

  // tier 1 | kubejs:tk3/tier_1/propeller
  event.shaped("create:propeller", [" S ", "SAS", " S "], {"S": "create:iron_sheet", "A": "create:andesite_alloy"}).id("kubejs:tk3/tier_1/propeller");

  // tier 1 | kubejs:tk3/tier_1/gearbox
  event.stonecutting("create:gearbox", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/gearbox");

  // tier 1 | kubejs:tk3/tier_1/vertical_gearbox
  event.stonecutting("create:vertical_gearbox", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/vertical_gearbox");

  // tier 1 | kubejs:tk3/tier_1/clutch
  event.stonecutting("create:clutch", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/clutch");

  // tier 1 | kubejs:tk3/tier_1/gearshift
  event.stonecutting("create:gearshift", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/gearshift");

  // tier 1 | kubejs:tk3/tier_1/encased_chain_drive
  event.stonecutting("3x create:encased_chain_drive", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/encased_chain_drive");

  // tier 1 | kubejs:tk3/tier_1/adjustable_chain_gearshift
  event.stonecutting("create:adjustable_chain_gearshift", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/adjustable_chain_gearshift");

  // tier 1 | kubejs:tk3/tier_1/mechanical_plough
  event.stonecutting("create:mechanical_plough", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/mechanical_plough");

  // tier 1 | kubejs:tk3/tier_1/rope_pulley
  event.stonecutting("create:rope_pulley", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/rope_pulley");

  // tier 1 | kubejs:tk3/tier_1/mechanical_piston
  event.stonecutting("create:mechanical_piston", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/mechanical_piston");

  // tier 1 | kubejs:tk3/tier_1/cart_assembler
  event.stonecutting("create:cart_assembler", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/cart_assembler");

  // tier 1 | kubejs:tk3/tier_1/windmill_bearing
  event.stonecutting("create:windmill_bearing", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/windmill_bearing");

  // tier 1 | kubejs:tk3/tier_1/gantry_carriage
  event.stonecutting("create:gantry_carriage", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/gantry_carriage");

  // tier 1 | kubejs:tk3/tier_1/weighted_ejector
  event.stonecutting("create:weighted_ejector", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/weighted_ejector");

  // tier 1 | kubejs:tk3/tier_1/linear_chassis
  event.stonecutting("4x create:linear_chassis", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/linear_chassis");

  // tier 1 | kubejs:tk3/tier_1/radial_chassis
  event.stonecutting("4x create:radial_chassis", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/radial_chassis");

  // tier 1 | kubejs:tk3/tier_1/andesite_tunnel
  event.stonecutting("4x create:andesite_tunnel", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/andesite_tunnel");

  // tier 1 | kubejs:tk3/tier_1/depot
  event.stonecutting("2x create:depot", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/depot");

  // tier 1 | kubejs:tk3/tier_1/chute
  event.stonecutting("6x create:chute", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/chute");

  // tier 1 | kubejs:tk3/tier_1/speedometer
  event.stonecutting("create:speedometer", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/speedometer");

  // tier 1 | kubejs:tk3/tier_1/analog_lever
  event.stonecutting("create:analog_lever", "kubejs:tk3_kinetic_machine").id("kubejs:tk3/tier_1/analog_lever");
});
