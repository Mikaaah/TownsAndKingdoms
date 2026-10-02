// priority: 0
// Create 6.0.10 support layer: exact outputs and approved reversible utility recipes.
ServerEvents.recipes(event => {
  ["create:andesite_alloy", "create:andesite_alloy_block", "create:andesite_casing", "create:attribute_filter", "create:brass_block", "create:brass_casing", "create:brass_hand", "create:brass_ingot", "create:brass_nugget", "create:brass_sheet", "create:cardboard", "create:cardboard_block", "create:chain_conveyor", "create:clipboard", "create:clockwork_bearing", "create:cogwheel", "create:controller_rail", "create:copper_casing", "create:copper_diving_boots", "create:copper_diving_helmet", "create:copper_nugget", "create:copper_sheet", "create:crafter_slot_cover", "create:crafting_blueprint", "create:crushed_raw_zinc", "create:crushing_wheel", "create:cuckoo_clock", "create:desk_bell", "create:dough", "create:electron_tube", "create:empty_blaze_burner", "create:empty_schematic", "create:factory_gauge", "create:filter", "create:flywheel", "create:gantry_shaft", "create:gearbox", "create:goggles", "create:golden_sheet", "create:hand_crank", "create:iron_sheet", "create:item_hatch", "create:item_vault", "create:linear_chassis", "create:linked_controller", "create:mechanical_piston", "create:mechanical_roller", "create:metal_bracket", "create:metal_girder", "create:minecart_coupling", "create:nixie_tube", "create:nozzle", "create:package_filter", "create:peculiar_bell", "create:piston_extension_pole", "create:placard", "create:polished_rose_quartz", "create:powered_latch", "create:powered_toggle_latch", "create:pulse_extender", "create:pulse_repeater", "create:pulse_timer", "create:red_sand_paper", "create:redstone_contact", "create:redstone_link", "create:redstone_requester", "create:rose_quartz", "create:rose_quartz_lamp", "create:sail_frame", "create:sand_paper", "create:schedule", "create:schematic_and_quill", "create:schematic_table", "create:schematicannon", "create:secondary_linear_chassis", "create:shaft", "create:speedometer", "create:sticker", "create:sticky_mechanical_piston", "create:stock_link", "create:stock_ticker", "create:stressometer", "create:super_glue", "create:track", "create:transmitter", "create:tree_fertilizer", "create:turntable", "create:vertical_gearbox", "create:wheat_flour", "create:whisk", "create:white_sail", "create:wooden_bracket", "create:wrench", "create:zinc_block", "create:zinc_ingot", "create:zinc_nugget", "kubejs:tk3_hydraulic_machine", "kubejs:tk3_kinetic_machine", "kubejs:tk3_precision_machine", "minecraft:bone_meal", "minecraft:chain", "minecraft:chest", "minecraft:clay_ball", "minecraft:clock", "minecraft:comparator", "minecraft:copper_ingot", "minecraft:crafting_table", "minecraft:dispenser", "minecraft:glass", "minecraft:glowstone_dust", "minecraft:gold_ingot", "minecraft:iron_ingot", "minecraft:iron_nugget", "minecraft:iron_trapdoor", "minecraft:item_frame", "minecraft:lever", "minecraft:lightning_rod", "minecraft:netherrack", "minecraft:painting", "minecraft:paper", "minecraft:quartz", "minecraft:rail", "minecraft:red_sand", "minecraft:redstone", "minecraft:redstone_torch", "minecraft:sand", "minecraft:slime_ball", "minecraft:smooth_stone", "minecraft:stick", "minecraft:string", "minecraft:water_bucket"].forEach(id => { if (Item.of(id).isEmpty()) throw new Error('[TK3] Missing required item: '+id); });

  // Tier 1 · Casings
  event.shapeless("create:andesite_casing", ["#c:stripped_logs", "create:andesite_alloy"]).id("kubejs:tk3/create/andesite_casing_manual");

  // Tier 1 · Casings
  event.recipes.create.deploying(["create:andesite_casing"], ["#c:stripped_logs", "create:andesite_alloy"]).id("kubejs:tk3/create/andesite_casing_automated");

  // Tier 2 · Casings
  event.shapeless("create:copper_casing", ["#c:stripped_logs", "minecraft:copper_ingot"]).id("kubejs:tk3/create/copper_casing_manual");

  // Tier 2 · Casings
  event.recipes.create.deploying(["create:copper_casing"], ["#c:stripped_logs", "minecraft:copper_ingot"]).id("kubejs:tk3/create/copper_casing_automated");

  // Tier 3 · Casings
  event.shapeless("create:brass_casing", ["#c:stripped_logs", "create:brass_ingot"]).id("kubejs:tk3/create/brass_casing_manual");

  // Tier 3 · Casings
  event.recipes.create.deploying(["create:brass_casing"], ["#c:stripped_logs", "create:brass_ingot"]).id("kubejs:tk3/create/brass_casing_automated");

  // Tier 1 · Metal sheets
  event.recipes.create.pressing(["create:iron_sheet"], ["minecraft:iron_ingot"]).id("kubejs:tk3/create/iron_sheet");

  // Tier 2 · Metal sheets
  event.recipes.create.pressing(["create:copper_sheet"], ["minecraft:copper_ingot"]).id("kubejs:tk3/create/copper_sheet");

  // Tier 1 · Metal sheets
  event.recipes.create.pressing(["create:golden_sheet"], ["minecraft:gold_ingot"]).id("kubejs:tk3/create/golden_sheet");

  // Tier 3 · Metal sheets
  event.recipes.create.pressing(["create:brass_sheet"], ["create:brass_ingot"]).id("kubejs:tk3/create/brass_sheet");

  // Tier 3 · Precision components
  event.recipes.create.mixing(["2x create:rose_quartz"], ["minecraft:quartz", "minecraft:quartz", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone"]).id("kubejs:tk3/create/rose_quartz_bulk");

  // Tier 3 · Precision components
  event.shapeless("create:rose_quartz", ["minecraft:quartz", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone", "minecraft:redstone"]).id("kubejs:tk3/create/rose_quartz");

  // Tier 3 · Precision components
  event.custom({"type": "create:sandpaper_polishing", "ingredients": [{"item": "create:rose_quartz"}], "results": [{"id": "create:polished_rose_quartz"}]}).id("kubejs:tk3/create/polished_rose_quartz");

  // Tier 3 · Precision components
  event.shaped("2x create:electron_tube", ["QRQ", " I "], {"Q": "create:polished_rose_quartz", "R": "minecraft:redstone", "I": "create:iron_sheet"}).id("kubejs:tk3/create/electron_tube");

  // Tier 3 · Precision components
  event.recipes.create.deploying(["create:electron_tube"], ["create:iron_sheet", "create:polished_rose_quartz"]).id("kubejs:tk3/create/electron_tube_automated");

  // Tier 1 · Tools
  event.shapeless("create:sand_paper", ["minecraft:paper", "minecraft:sand"]).id("kubejs:tk3/create/sand_paper");

  // Tier 1 · Tools
  event.shapeless("create:red_sand_paper", ["minecraft:paper", "minecraft:red_sand"]).id("kubejs:tk3/create/red_sand_paper");

  // Tier 1 · Material packing
  event.shaped("create:andesite_alloy_block", ["III", "III", "III"], {"I": "create:andesite_alloy"}).id("kubejs:tk3/create/andesite_alloy_block_packing");

  // Tier 1 · Material packing
  event.shapeless("9x create:andesite_alloy", ["create:andesite_alloy_block"]).id("kubejs:tk3/create/andesite_alloy_unpacking");

  // Tier 1 · Material packing
  event.shaped("create:zinc_block", ["III", "III", "III"], {"I": "create:zinc_ingot"}).id("kubejs:tk3/create/zinc_block_packing");

  // Tier 1 · Material packing
  event.shapeless("9x create:zinc_ingot", ["create:zinc_block"]).id("kubejs:tk3/create/zinc_ingot_unpacking");

  // Tier 1 · Material packing
  event.shaped("create:zinc_ingot", ["NNN", "NNN", "NNN"], {"N": "create:zinc_nugget"}).id("kubejs:tk3/create/zinc_ingot_from_nuggets");

  // Tier 1 · Material packing
  event.shapeless("9x create:zinc_nugget", ["create:zinc_ingot"]).id("kubejs:tk3/create/zinc_nugget_from_ingot");

  // Tier 2 · Material packing
  event.shaped("minecraft:copper_ingot", ["NNN", "NNN", "NNN"], {"N": "create:copper_nugget"}).id("kubejs:tk3/create/copper_ingot_from_nuggets");

  // Tier 2 · Material packing
  event.shapeless("9x create:copper_nugget", ["minecraft:copper_ingot"]).id("kubejs:tk3/create/copper_nugget_from_ingot");

  // Tier 3 · Material packing
  event.shaped("create:brass_block", ["III", "III", "III"], {"I": "create:brass_ingot"}).id("kubejs:tk3/create/brass_block_packing");

  // Tier 3 · Material packing
  event.shapeless("9x create:brass_ingot", ["create:brass_block"]).id("kubejs:tk3/create/brass_ingot_unpacking");

  // Tier 3 · Material packing
  event.shaped("create:brass_ingot", ["NNN", "NNN", "NNN"], {"N": "create:brass_nugget"}).id("kubejs:tk3/create/brass_ingot_from_nuggets");

  // Tier 3 · Material packing
  event.shapeless("9x create:brass_nugget", ["create:brass_ingot"]).id("kubejs:tk3/create/brass_nugget_from_ingot");

  // Tier 1 · Zinc supply
  event.custom({"type": "minecraft:smelting", "category": "misc", "cookingtime": 200, "experience": 0.7, "ingredient": {"tag": "c:raw_materials/zinc"}, "result": {"count": 1, "id": "create:zinc_ingot"}}).id("kubejs:tk3/create/zinc_smelting_raw_ore");

  // Tier 1 · Zinc supply
  event.custom({"type": "minecraft:smelting", "category": "misc", "cookingtime": 200, "experience": 1.0, "ingredient": {"tag": "c:ores/zinc"}, "result": {"count": 1, "id": "create:zinc_ingot"}}).id("kubejs:tk3/create/zinc_smelting_ore");

  // Tier 3 · Zinc supply
  event.custom({"type": "minecraft:smelting", "category": "misc", "cookingtime": 200, "experience": 0.1, "ingredient": {"item": "create:crushed_raw_zinc"}, "result": {"count": 1, "id": "create:zinc_ingot"}}).id("kubejs:tk3/create/zinc_smelting_crushed");

  // Tier 1 · Zinc supply
  event.custom({"type": "minecraft:blasting", "category": "misc", "cookingtime": 100, "experience": 0.7, "ingredient": {"tag": "c:raw_materials/zinc"}, "result": {"count": 1, "id": "create:zinc_ingot"}}).id("kubejs:tk3/create/zinc_blasting_raw_ore");

  // Tier 1 · Zinc supply
  event.custom({"type": "minecraft:blasting", "category": "misc", "cookingtime": 100, "experience": 1.0, "ingredient": {"tag": "c:ores/zinc"}, "result": {"count": 1, "id": "create:zinc_ingot"}}).id("kubejs:tk3/create/zinc_blasting_ore");

  // Tier 3 · Zinc supply
  event.custom({"type": "minecraft:blasting", "category": "misc", "cookingtime": 100, "experience": 0.1, "ingredient": {"item": "create:crushed_raw_zinc"}, "result": {"count": 1, "id": "create:zinc_ingot"}}).id("kubejs:tk3/create/zinc_blasting_crushed");

  // Tier 1 · Tools
  event.shaped("create:wrench", ["II ", "IC ", " S "], {"I": "create:iron_sheet", "C": "create:cogwheel", "S": "minecraft:stick"}).id("kubejs:tk3/create/wrench");

  // Tier 1 · Tools
  event.shaped("create:goggles", ["GSG", " A "], {"G": "minecraft:glass", "S": "minecraft:string", "A": "create:andesite_alloy"}).id("kubejs:tk3/create/goggles");

  // Tier 1 · Components
  event.shaped("create:whisk", [" A ", "IAI", " I "], {"A": "create:andesite_alloy", "I": "create:iron_sheet"}).id("kubejs:tk3/create/whisk");

  // Tier 3 · Precision components
  event.shaped("create:brass_hand", [" A ", "BBB", " B "], {"A": "create:andesite_alloy", "B": "create:brass_sheet"}).id("kubejs:tk3/create/brass_hand");

  // Tier 1 · Components
  event.shaped("4x create:piston_extension_pole", ["S", "A", "S"], {"S": "minecraft:stick", "A": "create:andesite_alloy"}).id("kubejs:tk3/create/piston_extension_pole");

  // Tier 1 · Components
  event.shaped("4x create:gantry_shaft", ["C", "S", "C"], {"C": "create:cogwheel", "S": "create:shaft"}).id("kubejs:tk3/create/gantry_shaft");

  // Tier 1 · Components
  event.shaped("8x create:metal_girder", ["III", "AAA"], {"I": "create:iron_sheet", "A": "create:andesite_alloy"}).id("kubejs:tk3/create/metal_girder");

  // Tier 1 · Components
  event.shapeless("4x create:metal_bracket", ["create:iron_sheet", "create:andesite_alloy"]).id("kubejs:tk3/create/metal_bracket");

  // Tier 1 · Components
  event.shapeless("4x create:wooden_bracket", ["#minecraft:planks", "minecraft:stick"]).id("kubejs:tk3/create/wooden_bracket");

  // Tier 1 · Wind & contraptions
  event.shaped("2x create:white_sail", ["WS", "SA"], {"W": "#minecraft:wool", "S": "minecraft:stick", "A": "create:andesite_alloy"}).id("kubejs:tk3/create/white_sail");

  // Tier 1 · Wind & contraptions
  event.shapeless("create:sail_frame", ["create:white_sail"]).id("kubejs:tk3/create/sail_frame");

  // Tier 1 · Wind & contraptions
  event.shapeless("create:white_sail", ["create:sail_frame", "#minecraft:wool"]).id("kubejs:tk3/create/sail_from_frame");

  // Tier 1 · Tools
  event.shaped("create:super_glue", ["SI", "NS"], {"S": "minecraft:slime_ball", "I": "create:iron_sheet", "N": "minecraft:iron_nugget"}).id("kubejs:tk3/create/super_glue");

  // Tier 1 · Wind & contraptions
  event.recipes.create.deploying(["create:sticky_mechanical_piston"], ["create:mechanical_piston", "minecraft:slime_ball"]).id("kubejs:tk3/create/sticky_mechanical_piston");

  // Tier 1 · Wind & contraptions
  event.shapeless("create:mechanical_piston", ["create:sticky_mechanical_piston"]).id("kubejs:tk3/create/piston_unstick");

  // Tier 1 · Reconfiguration
  event.shapeless("create:secondary_linear_chassis", ["create:linear_chassis"]).id("kubejs:tk3/create/secondary_linear_chassis_conversion");

  // Tier 1 · Reconfiguration
  event.shapeless("create:linear_chassis", ["create:secondary_linear_chassis"]).id("kubejs:tk3/create/linear_chassis_conversion");

  // Tier 1 · Reconfiguration
  event.shapeless("create:stressometer", ["create:speedometer"]).id("kubejs:tk3/create/stressometer_conversion");

  // Tier 1 · Reconfiguration
  event.shapeless("create:speedometer", ["create:stressometer"]).id("kubejs:tk3/create/speedometer_conversion");

  // Tier 1 · Reconfiguration
  event.shapeless("create:vertical_gearbox", ["create:gearbox"]).id("kubejs:tk3/create/vertical_gearbox_conversion");

  // Tier 1 · Reconfiguration
  event.shapeless("create:gearbox", ["create:vertical_gearbox"]).id("kubejs:tk3/create/gearbox_conversion");

  // Tier 1 · Startup
  event.shapeless("create:hand_crank", ["kubejs:tk3_kinetic_machine", "minecraft:stick"]).id("kubejs:tk3/create/hand_crank");

  // Tier 1 · Wind & contraptions
  event.shapeless("create:turntable", ["kubejs:tk3_kinetic_machine", "create:cogwheel"]).id("kubejs:tk3/create/turntable");

  // Tier 1 · Wind & contraptions
  event.shapeless("2x create:sticker", ["kubejs:tk3_kinetic_machine", "minecraft:slime_ball"]).id("kubejs:tk3/create/sticker");

  // Tier 2 · Storage & packages
  event.shapeless("2x create:item_vault", ["kubejs:tk3_hydraulic_machine", "minecraft:chest"]).id("kubejs:tk3/create/item_vault");

  // Tier 2 · Wind & contraptions
  event.shapeless("create:flywheel", ["kubejs:tk3_hydraulic_machine", "create:cogwheel"]).id("kubejs:tk3/create/flywheel");

  // Tier 2 · Fluids & heat
  event.shapeless("2x create:nozzle", ["kubejs:tk3_hydraulic_machine", "create:iron_sheet"]).id("kubejs:tk3/create/nozzle");

  // Tier 3 · Wind & contraptions
  event.shapeless("create:clockwork_bearing", ["kubejs:tk3_precision_machine", "minecraft:clock"]).id("kubejs:tk3/create/clockwork_bearing");

  // Tier 3 · Railways
  event.shapeless("create:mechanical_roller", ["kubejs:tk3_precision_machine", "create:crushing_wheel"]).id("kubejs:tk3/create/mechanical_roller");

  // Tier 3 · Storage & packages
  event.shapeless("2x create:chain_conveyor", ["kubejs:tk3_precision_machine", "minecraft:chain"]).id("kubejs:tk3/create/chain_conveyor");

  // Tier 3 · Storage & packages
  event.shapeless("2x create:factory_gauge", ["kubejs:tk3_precision_machine", "create:electron_tube"]).id("kubejs:tk3/create/factory_gauge");

  // Tier 3 · Storage & packages
  event.shapeless("2x create:redstone_requester", ["kubejs:tk3_precision_machine", "create:stock_link"]).id("kubejs:tk3/create/redstone_requester");

  // Tier 3 · Signals
  event.shapeless("create:linked_controller", ["kubejs:tk3_precision_machine", "create:redstone_link"]).id("kubejs:tk3/create/linked_controller");

  // Tier 3 · Schematics
  event.shapeless("create:schematicannon", ["kubejs:tk3_precision_machine", "minecraft:dispenser"]).id("kubejs:tk3/create/schematicannon");

  // Tier 2 · Fluids & heat
  event.shaped("create:empty_blaze_burner", [" I ", "INI", " I "], {"I": "create:iron_sheet", "N": "minecraft:netherrack"}).id("kubejs:tk3/create/empty_blaze_burner");

  // Tier 2 · Diving equipment
  event.shaped("create:copper_diving_helmet", ["CCC", "G G"], {"C": "create:copper_sheet", "G": "minecraft:glass"}).id("kubejs:tk3/create/copper_diving_helmet");

  // Tier 2 · Diving equipment
  event.shaped("create:copper_diving_boots", ["C C", "I I"], {"C": "create:copper_sheet", "I": "create:iron_sheet"}).id("kubejs:tk3/create/copper_diving_boots");

  // Tier 1 · Filters
  event.shaped("create:filter", ["IWI"], {"I": "minecraft:iron_nugget", "W": "#minecraft:wool"}).id("kubejs:tk3/create/filter");

  // Tier 3 · Filters
  event.shaped("create:attribute_filter", ["BFB", " R "], {"B": "create:brass_sheet", "F": "create:filter", "R": "create:rose_quartz"}).id("kubejs:tk3/create/attribute_filter");

  // Tier 3 · Filters
  event.shaped("create:package_filter", ["PFP", " R "], {"P": "minecraft:paper", "F": "create:filter", "R": "create:electron_tube"}).id("kubejs:tk3/create/package_filter");

  // Tier 3 · Signals
  event.shaped("2x create:pulse_repeater", [" R ", "BEB", " I "], {"R": "minecraft:redstone", "B": "create:brass_sheet", "E": "minecraft:redstone_torch", "I": "create:iron_sheet"}).id("kubejs:tk3/create/pulse_repeater");

  // Tier 3 · Signals
  event.shaped("2x create:pulse_extender", [" R ", "BEB", " I "], {"R": "minecraft:redstone", "B": "create:brass_sheet", "E": "minecraft:comparator", "I": "create:iron_sheet"}).id("kubejs:tk3/create/pulse_extender");

  // Tier 3 · Signals
  event.shaped("2x create:pulse_timer", [" R ", "BEB", " I "], {"R": "minecraft:redstone", "B": "create:brass_sheet", "E": "minecraft:clock", "I": "create:iron_sheet"}).id("kubejs:tk3/create/pulse_timer");

  // Tier 3 · Signals
  event.shaped("2x create:powered_latch", [" R ", "BEB", " I "], {"R": "minecraft:redstone", "B": "create:brass_sheet", "E": "minecraft:lever", "I": "create:iron_sheet"}).id("kubejs:tk3/create/powered_latch");

  // Tier 3 · Signals
  event.shaped("2x create:powered_toggle_latch", [" R ", "BEB", " I "], {"R": "minecraft:redstone", "B": "create:brass_sheet", "E": "minecraft:lever", "I": "create:iron_sheet"}).id("kubejs:tk3/create/powered_toggle_latch");

  // Tier 3 · Signals
  event.shaped("4x create:redstone_contact", [" R ", "BEB", " I "], {"R": "minecraft:redstone", "B": "create:brass_sheet", "E": "minecraft:redstone", "I": "create:iron_sheet"}).id("kubejs:tk3/create/redstone_contact");

  // Tier 3 · Signals
  event.shaped("4x create:nixie_tube", [" R ", "BEB", " I "], {"R": "minecraft:redstone", "B": "create:brass_sheet", "E": "minecraft:glass", "I": "create:iron_sheet"}).id("kubejs:tk3/create/nixie_tube");

  // Tier 3 · Signals
  event.shaped("2x create:rose_quartz_lamp", [" R ", "BEB", " I "], {"R": "minecraft:redstone", "B": "create:brass_sheet", "E": "minecraft:glowstone_dust", "I": "create:iron_sheet"}).id("kubejs:tk3/create/rose_quartz_lamp");

  // Tier 3 · Signals
  event.shaped("create:transmitter", [" L ", "CCC", " R "], {"L": "minecraft:lightning_rod", "C": "create:copper_sheet", "R": "minecraft:redstone"}).id("kubejs:tk3/create/transmitter");

  // Tier 3 · Railways
  event.recipes.create.deploying(["8x create:track"], ["minecraft:rail", "create:brass_sheet"]).id("kubejs:tk3/create/track");

  // Tier 3 · Railways
  event.shaped("4x create:controller_rail", ["IRI", "ASA", "IRI"], {"I": "create:iron_sheet", "R": "minecraft:redstone", "A": "create:andesite_alloy", "S": "create:shaft"}).id("kubejs:tk3/create/controller_rail");

  // Tier 3 · Railways
  event.shaped("create:schedule", [" P ", "PEP", " P "], {"P": "minecraft:paper", "E": "create:electron_tube"}).id("kubejs:tk3/create/schedule");

  // Tier 1 · Wind & contraptions
  event.shaped("2x create:minecart_coupling", [" I ", "ASA", " I "], {"I": "minecraft:iron_nugget", "A": "create:andesite_alloy", "S": "minecraft:slime_ball"}).id("kubejs:tk3/create/minecart_coupling");

  // Tier 3 · Storage & packages
  event.shapeless("4x create:crafter_slot_cover", ["create:brass_sheet", "minecraft:paper"]).id("kubejs:tk3/create/crafter_slot_cover");

  // Tier 3 · Storage & packages
  event.shapeless("2x create:item_hatch", ["create:brass_sheet", "minecraft:iron_trapdoor"]).id("kubejs:tk3/create/item_hatch");

  // Tier 1 · Tools
  event.shaped("create:clipboard", ["A", "P", "G"], {"A": "create:andesite_alloy", "G": "#minecraft:planks", "P": "minecraft:paper"}).id("kubejs:tk3/create/crafting_appliances_clipboard");

  // Tier 1 · Tools
  event.shapeless("create:crafting_blueprint", ["minecraft:painting", "minecraft:crafting_table"]).id("kubejs:tk3/create/crafting_appliances_crafting_blueprint");

  // Tier 1 · Schematics
  event.shapeless("create:empty_schematic", ["minecraft:paper", "#c:dyes/light_blue"]).id("kubejs:tk3/create/crafting_schematics_empty_schematic");

  // Tier 1 · Schematics
  event.shapeless("create:schematic_and_quill", ["create:empty_schematic", "#c:feathers"]).id("kubejs:tk3/create/crafting_schematics_schematic_and_quill");

  // Tier 1 · Schematics
  event.shaped("create:schematic_table", ["WWW", " S ", " S "], {"S": "minecraft:smooth_stone", "W": "#minecraft:wooden_slabs"}).id("kubejs:tk3/create/crafting_schematics_schematic_table");

  // Tier 1 · Workshop utilities
  event.shapeless("create:placard", ["minecraft:item_frame", "#c:plates/brass"]).id("kubejs:tk3/create/crafting_kinetics_placard");

  // Tier 1 · Workshop utilities
  event.shapeless("create:desk_bell", ["create:andesite_casing", "#c:plates/gold"]).id("kubejs:tk3/create/crafting_logistics_desk_bell");

  // Tier 3 · Workshop utilities
  event.shaped("create:peculiar_bell", ["I", "P"], {"I": "#c:storage_blocks/brass", "P": "#c:plates/brass"}).id("kubejs:tk3/create/crafting_curiosities_peculiar_bell");

  // Tier 1 · Workshop utilities
  event.shaped("create:cuckoo_clock", ["S", "C", "A"], {"A": "minecraft:clock", "C": "create:andesite_casing", "S": "#minecraft:planks"}).id("kubejs:tk3/create/crafting_kinetics_cuckoo_clock");

  // Tier 1 · Farming
  event.shapeless("create:dough", ["#c:flours/wheat", "minecraft:water_bucket"]).id("kubejs:tk3/create/crafting_appliances_dough");

  // Tier 1 · Farming
  event.shapeless("2x create:tree_fertilizer", ["#minecraft:small_flowers", "#minecraft:small_flowers", "minecraft:bone_meal", "minecraft:clay_ball"]).id("kubejs:tk3/create/tree_fertilizer");

  // Tier 1 · Farming
  event.recipes.create.mixing(["4x create:dough"], ["create:wheat_flour", "create:wheat_flour", "create:wheat_flour", "create:wheat_flour", Fluid.of("minecraft:water", 1000)]).id("kubejs:tk3/create/dough_bulk");

  // Tier 1 · Storage & packages
  event.recipes.create.compacting(["4x create:cardboard"], ["minecraft:paper", "minecraft:paper", Fluid.of("minecraft:water", 250)]).id("kubejs:tk3/create/cardboard");

  // Tier 1 · Material packing
  event.shaped("create:cardboard_block", ["CC", "CC"], {"C": "create:cardboard"}).id("kubejs:tk3/create/cardboard_block");

  // Tier 1 · Material packing
  event.shapeless("4x create:cardboard", ["create:cardboard_block"]).id("kubejs:tk3/create/cardboard_unpacking");

  // Tier 1 · Reconfiguration
  event.shapeless("create:filter", ["create:filter"]).id("kubejs:tk3/create/filter_clear");

  // Tier 1 · Reconfiguration
  event.shapeless("create:clipboard", ["create:clipboard"]).id("kubejs:tk3/create/clipboard_clear");

  // Tier 3 · Reconfiguration
  event.shapeless("create:attribute_filter", ["create:attribute_filter"]).id("kubejs:tk3/create/attribute_filter_clear");

  // Tier 3 · Reconfiguration
  event.shapeless("create:package_filter", ["create:package_filter"]).id("kubejs:tk3/create/package_filter_clear");

  // Tier 3 · Reconfiguration
  event.shapeless("create:schedule", ["create:schedule"]).id("kubejs:tk3/create/schedule_clear");

  // Tier 3 · Reconfiguration
  event.shapeless("create:factory_gauge", ["create:factory_gauge"]).id("kubejs:tk3/create/factory_gauge_clear");

  // Tier 3 · Reconfiguration
  event.shapeless("create:redstone_requester", ["create:redstone_requester"]).id("kubejs:tk3/create/redstone_requester_clear");

  // Tier 3 · Reconfiguration
  event.shapeless("create:stock_link", ["create:stock_link"]).id("kubejs:tk3/create/stock_link_clear");

  // Tier 3 · Reconfiguration
  event.shapeless("create:stock_ticker", ["create:stock_ticker"]).id("kubejs:tk3/create/stock_ticker_clear");
});
