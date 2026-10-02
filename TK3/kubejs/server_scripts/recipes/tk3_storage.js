// priority: 0
// T&K3 1.21.1 · assembly revision
ServerEvents.recipes(event => {
  ["create:brass_funnel", "create:brass_tunnel", "create:iron_sheet", "create:mechanical_press", "create:mechanical_pump", "create:precision_mechanism", "kubejs:tk3_arcane_machine", "kubejs:tk3_hydraulic_machine", "kubejs:tk3_precision_machine", "kubejs:tk3_rotation_mechanism", "mekanism:alloy_infused", "mekanism:steel_casing", "minecraft:blast_furnace", "minecraft:brewing_stand", "minecraft:chest", "minecraft:comparator", "minecraft:copper_ingot", "minecraft:crafting_table", "minecraft:diamond", "minecraft:ender_pearl", "minecraft:experience_bottle", "minecraft:furnace", "minecraft:gold_ingot", "minecraft:golden_carrot", "minecraft:hopper", "minecraft:iron_ingot", "minecraft:lava_bucket", "minecraft:paper", "minecraft:redstone", "minecraft:smoker", "minecraft:stonecutter", "sophisticatedbackpacks:advanced_alchemy_upgrade", "sophisticatedbackpacks:advanced_compacting_upgrade", "sophisticatedbackpacks:advanced_deposit_upgrade", "sophisticatedbackpacks:advanced_feeding_upgrade", "sophisticatedbackpacks:advanced_filter_upgrade", "sophisticatedbackpacks:advanced_jukebox_upgrade", "sophisticatedbackpacks:advanced_magnet_upgrade", "sophisticatedbackpacks:advanced_mob_catcher_upgrade", "sophisticatedbackpacks:advanced_pickup_upgrade", "sophisticatedbackpacks:advanced_pump_upgrade", "sophisticatedbackpacks:advanced_refill_upgrade", "sophisticatedbackpacks:advanced_restock_upgrade", "sophisticatedbackpacks:advanced_tool_swapper_upgrade", "sophisticatedbackpacks:advanced_void_upgrade", "sophisticatedbackpacks:alchemy_upgrade", "sophisticatedbackpacks:backpack", "sophisticatedbackpacks:blasting_upgrade", "sophisticatedbackpacks:compacting_upgrade", "sophisticatedbackpacks:copper_backpack", "sophisticatedbackpacks:crafting_upgrade", "sophisticatedbackpacks:deposit_upgrade", "sophisticatedbackpacks:diamond_backpack", "sophisticatedbackpacks:feeding_upgrade", "sophisticatedbackpacks:filter_upgrade", "sophisticatedbackpacks:gold_backpack", "sophisticatedbackpacks:iron_backpack", "sophisticatedbackpacks:jukebox_upgrade", "sophisticatedbackpacks:magnet_upgrade", "sophisticatedbackpacks:mob_catcher_upgrade", "sophisticatedbackpacks:pickup_upgrade", "sophisticatedbackpacks:pump_upgrade", "sophisticatedbackpacks:refill_upgrade", "sophisticatedbackpacks:restock_upgrade", "sophisticatedbackpacks:smelting_upgrade", "sophisticatedbackpacks:smoking_upgrade", "sophisticatedbackpacks:stack_upgrade_tier_1", "sophisticatedbackpacks:stack_upgrade_tier_2", "sophisticatedbackpacks:stonecutter_upgrade", "sophisticatedbackpacks:tool_swapper_upgrade", "sophisticatedbackpacks:upgrade_base", "sophisticatedbackpacks:void_upgrade", "sophisticatedbackpacks:xp_pump_upgrade", "sophisticatedstorage:advanced_alchemy_upgrade", "sophisticatedstorage:advanced_compacting_upgrade", "sophisticatedstorage:advanced_feeding_upgrade", "sophisticatedstorage:advanced_filter_upgrade", "sophisticatedstorage:advanced_hopper_upgrade", "sophisticatedstorage:advanced_jukebox_upgrade", "sophisticatedstorage:advanced_magnet_upgrade", "sophisticatedstorage:advanced_pickup_upgrade", "sophisticatedstorage:advanced_pump_upgrade", "sophisticatedstorage:advanced_void_upgrade", "sophisticatedstorage:alchemy_upgrade", "sophisticatedstorage:barrel", "sophisticatedstorage:basic_to_copper_tier_upgrade", "sophisticatedstorage:blasting_upgrade", "sophisticatedstorage:chest", "sophisticatedstorage:compacting_upgrade", "sophisticatedstorage:controller", "sophisticatedstorage:copper_barrel", "sophisticatedstorage:copper_chest", "sophisticatedstorage:copper_shulker_box", "sophisticatedstorage:copper_to_iron_tier_upgrade", "sophisticatedstorage:crafting_upgrade", "sophisticatedstorage:diamond_barrel", "sophisticatedstorage:diamond_chest", "sophisticatedstorage:diamond_shulker_box", "sophisticatedstorage:feeding_upgrade", "sophisticatedstorage:filter_upgrade", "sophisticatedstorage:gold_barrel", "sophisticatedstorage:gold_chest", "sophisticatedstorage:gold_shulker_box", "sophisticatedstorage:gold_to_diamond_tier_upgrade", "sophisticatedstorage:hopper_upgrade", "sophisticatedstorage:iron_barrel", "sophisticatedstorage:iron_chest", "sophisticatedstorage:iron_shulker_box", "sophisticatedstorage:iron_to_gold_tier_upgrade", "sophisticatedstorage:jukebox_upgrade", "sophisticatedstorage:limited_barrel_1", "sophisticatedstorage:limited_barrel_2", "sophisticatedstorage:limited_barrel_3", "sophisticatedstorage:limited_barrel_4", "sophisticatedstorage:limited_copper_barrel_1", "sophisticatedstorage:limited_copper_barrel_2", "sophisticatedstorage:limited_copper_barrel_3", "sophisticatedstorage:limited_copper_barrel_4", "sophisticatedstorage:limited_diamond_barrel_1", "sophisticatedstorage:limited_diamond_barrel_2", "sophisticatedstorage:limited_diamond_barrel_3", "sophisticatedstorage:limited_diamond_barrel_4", "sophisticatedstorage:limited_gold_barrel_1", "sophisticatedstorage:limited_gold_barrel_2", "sophisticatedstorage:limited_gold_barrel_3", "sophisticatedstorage:limited_gold_barrel_4", "sophisticatedstorage:limited_iron_barrel_1", "sophisticatedstorage:limited_iron_barrel_2", "sophisticatedstorage:limited_iron_barrel_3", "sophisticatedstorage:limited_iron_barrel_4", "sophisticatedstorage:magnet_upgrade", "sophisticatedstorage:pickup_upgrade", "sophisticatedstorage:pump_upgrade", "sophisticatedstorage:shulker_box", "sophisticatedstorage:smelting_upgrade", "sophisticatedstorage:smoking_upgrade", "sophisticatedstorage:stack_upgrade_tier_1", "sophisticatedstorage:stack_upgrade_tier_2", "sophisticatedstorage:stonecutter_upgrade", "sophisticatedstorage:storage_input", "sophisticatedstorage:storage_io", "sophisticatedstorage:storage_link", "sophisticatedstorage:storage_output", "sophisticatedstorage:upgrade_base", "sophisticatedstorage:void_upgrade", "sophisticatedstorage:xp_pump_upgrade"].forEach(id => { if (Item.of(id).isEmpty()) throw new Error('[TK3] Missing required item: ' + id); });

  // tier 1 | kubejs:tk3/storage/sophisticatedstorage_upgrade_base
  event.shaped("sophisticatedstorage:upgrade_base", [" I ", "PMP", " I "], {"M": "kubejs:tk3_rotation_mechanism", "I": "create:iron_sheet", "P": "#minecraft:planks"}).id("kubejs:tk3/storage/sophisticatedstorage_upgrade_base");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_pickup_upgrade
  event.shaped("sophisticatedstorage:pickup_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_hydraulic_machine", "E": "minecraft:hopper"}).id("kubejs:tk3/storage/sophisticatedstorage_pickup_upgrade");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_filter_upgrade
  event.shaped("sophisticatedstorage:filter_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_hydraulic_machine", "E": "minecraft:paper"}).id("kubejs:tk3/storage/sophisticatedstorage_filter_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_void_upgrade
  event.shaped("sophisticatedstorage:void_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_precision_machine", "E": "minecraft:lava_bucket"}).id("kubejs:tk3/storage/sophisticatedstorage_void_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_compacting_upgrade
  event.shaped("sophisticatedstorage:compacting_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_precision_machine", "E": "create:mechanical_press"}).id("kubejs:tk3/storage/sophisticatedstorage_compacting_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_stonecutter_upgrade
  event.shaped("sophisticatedstorage:stonecutter_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_precision_machine", "E": "minecraft:stonecutter"}).id("kubejs:tk3/storage/sophisticatedstorage_stonecutter_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_crafting_upgrade
  event.shaped("sophisticatedstorage:crafting_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_precision_machine", "E": "minecraft:crafting_table"}).id("kubejs:tk3/storage/sophisticatedstorage_crafting_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_magnet_upgrade
  event.shaped("sophisticatedstorage:magnet_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_precision_machine", "E": "minecraft:iron_ingot"}).id("kubejs:tk3/storage/sophisticatedstorage_magnet_upgrade");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_feeding_upgrade
  event.shaped("sophisticatedstorage:feeding_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_hydraulic_machine", "E": "minecraft:golden_carrot"}).id("kubejs:tk3/storage/sophisticatedstorage_feeding_upgrade");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_pump_upgrade
  event.shaped("sophisticatedstorage:pump_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_hydraulic_machine", "E": "create:mechanical_pump"}).id("kubejs:tk3/storage/sophisticatedstorage_pump_upgrade");

  // tier 4 | kubejs:tk3/storage/sophisticatedstorage_xp_pump_upgrade
  event.shaped("sophisticatedstorage:xp_pump_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_arcane_machine", "E": "minecraft:experience_bottle"}).id("kubejs:tk3/storage/sophisticatedstorage_xp_pump_upgrade");

  // tier 4 | kubejs:tk3/storage/sophisticatedstorage_alchemy_upgrade
  event.shaped("sophisticatedstorage:alchemy_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_arcane_machine", "E": "minecraft:brewing_stand"}).id("kubejs:tk3/storage/sophisticatedstorage_alchemy_upgrade");

  // tier 5 | kubejs:tk3/storage/sophisticatedstorage_smelting_upgrade
  event.shaped("sophisticatedstorage:smelting_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_arcane_machine", "E": "minecraft:furnace"}).id("kubejs:tk3/storage/sophisticatedstorage_smelting_upgrade");

  // tier 5 | kubejs:tk3/storage/sophisticatedstorage_smoking_upgrade
  event.shaped("sophisticatedstorage:smoking_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_arcane_machine", "E": "minecraft:smoker"}).id("kubejs:tk3/storage/sophisticatedstorage_smoking_upgrade");

  // tier 5 | kubejs:tk3/storage/sophisticatedstorage_blasting_upgrade
  event.shaped("sophisticatedstorage:blasting_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_arcane_machine", "E": "minecraft:blast_furnace"}).id("kubejs:tk3/storage/sophisticatedstorage_blasting_upgrade");

  // tier 4 | kubejs:tk3/storage/sophisticatedstorage_advanced_alchemy_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedstorage:alchemy_upgrade"}, "F": {"item": "kubejs:tk3_arcane_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedstorage:advanced_alchemy_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:advanced_alchemy_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedstorage_advanced_alchemy_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_advanced_compacting_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedstorage:compacting_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedstorage:advanced_compacting_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:advanced_compacting_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedstorage_advanced_compacting_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_advanced_feeding_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedstorage:feeding_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedstorage:advanced_feeding_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:advanced_feeding_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedstorage_advanced_feeding_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_advanced_filter_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedstorage:filter_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedstorage:advanced_filter_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:advanced_filter_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedstorage_advanced_filter_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_advanced_hopper_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedstorage:hopper_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedstorage:advanced_hopper_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:advanced_hopper_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedstorage_advanced_hopper_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_advanced_jukebox_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedstorage:jukebox_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedstorage:advanced_jukebox_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:advanced_jukebox_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedstorage_advanced_jukebox_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_advanced_magnet_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedstorage:magnet_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedstorage:advanced_magnet_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:advanced_magnet_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedstorage_advanced_magnet_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_advanced_pickup_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedstorage:pickup_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedstorage:advanced_pickup_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:advanced_pickup_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedstorage_advanced_pickup_upgrade");

  // tier 4 | kubejs:tk3/storage/sophisticatedstorage_advanced_pump_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedstorage:pump_upgrade"}, "F": {"item": "kubejs:tk3_arcane_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedstorage:advanced_pump_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:advanced_pump_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedstorage_advanced_pump_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_advanced_void_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedstorage:void_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedstorage:advanced_void_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:advanced_void_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedstorage_advanced_void_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_stack_upgrade_tier_1
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" M ", " U ", " F "], "key": {"U": {"item": "sophisticatedstorage:upgrade_base"}, "F": {"item": "kubejs:tk3_precision_machine"}, "M": {"item": "minecraft:gold_ingot"}}, "result": {"id": "sophisticatedstorage:stack_upgrade_tier_1", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:stack_upgrade_tier_1"}]}).id("kubejs:tk3/storage/sophisticatedstorage_stack_upgrade_tier_1");

  // tier 5 | kubejs:tk3/storage/sophisticatedstorage_stack_upgrade_tier_2
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" M ", " U ", " F "], "key": {"U": {"item": "sophisticatedstorage:stack_upgrade_tier_1"}, "F": {"item": "mekanism:steel_casing"}, "M": {"item": "mekanism:alloy_infused"}}, "result": {"id": "sophisticatedstorage:stack_upgrade_tier_2", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:stack_upgrade_tier_2"}]}).id("kubejs:tk3/storage/sophisticatedstorage_stack_upgrade_tier_2");

  // tier 1 | kubejs:tk3/storage/sophisticatedbackpacks_upgrade_base
  event.shaped("sophisticatedbackpacks:upgrade_base", [" I ", "PMP", " I "], {"M": "kubejs:tk3_rotation_mechanism", "I": "create:iron_sheet", "P": "#minecraft:planks"}).id("kubejs:tk3/storage/sophisticatedbackpacks_upgrade_base");

  // tier 2 | kubejs:tk3/storage/sophisticatedbackpacks_pickup_upgrade
  event.shaped("sophisticatedbackpacks:pickup_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_hydraulic_machine", "E": "minecraft:hopper"}).id("kubejs:tk3/storage/sophisticatedbackpacks_pickup_upgrade");

  // tier 2 | kubejs:tk3/storage/sophisticatedbackpacks_filter_upgrade
  event.shaped("sophisticatedbackpacks:filter_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_hydraulic_machine", "E": "minecraft:paper"}).id("kubejs:tk3/storage/sophisticatedbackpacks_filter_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_void_upgrade
  event.shaped("sophisticatedbackpacks:void_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_precision_machine", "E": "minecraft:lava_bucket"}).id("kubejs:tk3/storage/sophisticatedbackpacks_void_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_compacting_upgrade
  event.shaped("sophisticatedbackpacks:compacting_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_precision_machine", "E": "create:mechanical_press"}).id("kubejs:tk3/storage/sophisticatedbackpacks_compacting_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_stonecutter_upgrade
  event.shaped("sophisticatedbackpacks:stonecutter_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_precision_machine", "E": "minecraft:stonecutter"}).id("kubejs:tk3/storage/sophisticatedbackpacks_stonecutter_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_crafting_upgrade
  event.shaped("sophisticatedbackpacks:crafting_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_precision_machine", "E": "minecraft:crafting_table"}).id("kubejs:tk3/storage/sophisticatedbackpacks_crafting_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_magnet_upgrade
  event.shaped("sophisticatedbackpacks:magnet_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_precision_machine", "E": "minecraft:iron_ingot"}).id("kubejs:tk3/storage/sophisticatedbackpacks_magnet_upgrade");

  // tier 2 | kubejs:tk3/storage/sophisticatedbackpacks_feeding_upgrade
  event.shaped("sophisticatedbackpacks:feeding_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_hydraulic_machine", "E": "minecraft:golden_carrot"}).id("kubejs:tk3/storage/sophisticatedbackpacks_feeding_upgrade");

  // tier 2 | kubejs:tk3/storage/sophisticatedbackpacks_pump_upgrade
  event.shaped("sophisticatedbackpacks:pump_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_hydraulic_machine", "E": "create:mechanical_pump"}).id("kubejs:tk3/storage/sophisticatedbackpacks_pump_upgrade");

  // tier 4 | kubejs:tk3/storage/sophisticatedbackpacks_xp_pump_upgrade
  event.shaped("sophisticatedbackpacks:xp_pump_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_arcane_machine", "E": "minecraft:experience_bottle"}).id("kubejs:tk3/storage/sophisticatedbackpacks_xp_pump_upgrade");

  // tier 4 | kubejs:tk3/storage/sophisticatedbackpacks_alchemy_upgrade
  event.shaped("sophisticatedbackpacks:alchemy_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_arcane_machine", "E": "minecraft:brewing_stand"}).id("kubejs:tk3/storage/sophisticatedbackpacks_alchemy_upgrade");

  // tier 5 | kubejs:tk3/storage/sophisticatedbackpacks_smelting_upgrade
  event.shaped("sophisticatedbackpacks:smelting_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_arcane_machine", "E": "minecraft:furnace"}).id("kubejs:tk3/storage/sophisticatedbackpacks_smelting_upgrade");

  // tier 5 | kubejs:tk3/storage/sophisticatedbackpacks_smoking_upgrade
  event.shaped("sophisticatedbackpacks:smoking_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_arcane_machine", "E": "minecraft:smoker"}).id("kubejs:tk3/storage/sophisticatedbackpacks_smoking_upgrade");

  // tier 5 | kubejs:tk3/storage/sophisticatedbackpacks_blasting_upgrade
  event.shaped("sophisticatedbackpacks:blasting_upgrade", [" E ", " B ", " F "], {"B": "sophisticatedbackpacks:upgrade_base", "F": "kubejs:tk3_arcane_machine", "E": "minecraft:blast_furnace"}).id("kubejs:tk3/storage/sophisticatedbackpacks_blasting_upgrade");

  // tier 4 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_alchemy_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:alchemy_upgrade"}, "F": {"item": "kubejs:tk3_arcane_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_alchemy_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_alchemy_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_alchemy_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_compacting_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:compacting_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_compacting_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_compacting_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_compacting_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_deposit_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:deposit_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_deposit_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_deposit_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_deposit_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_feeding_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:feeding_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_feeding_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_feeding_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_feeding_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_filter_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:filter_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_filter_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_filter_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_filter_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_jukebox_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:jukebox_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_jukebox_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_jukebox_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_jukebox_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_magnet_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:magnet_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_magnet_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_magnet_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_magnet_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_mob_catcher_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:mob_catcher_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_mob_catcher_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_mob_catcher_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_mob_catcher_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_pickup_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:pickup_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_pickup_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_pickup_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_pickup_upgrade");

  // tier 4 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_pump_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:pump_upgrade"}, "F": {"item": "kubejs:tk3_arcane_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_pump_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_pump_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_pump_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_refill_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:refill_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_refill_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_refill_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_refill_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_restock_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:restock_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_restock_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_restock_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_restock_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_tool_swapper_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:tool_swapper_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_tool_swapper_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_tool_swapper_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_tool_swapper_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_advanced_void_upgrade
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" R ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:void_upgrade"}, "F": {"item": "kubejs:tk3_precision_machine"}, "R": {"item": "minecraft:redstone"}}, "result": {"id": "sophisticatedbackpacks:advanced_void_upgrade", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:advanced_void_upgrade"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_advanced_void_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_stack_upgrade_tier_1
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" M ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:upgrade_base"}, "F": {"item": "kubejs:tk3_precision_machine"}, "M": {"item": "minecraft:gold_ingot"}}, "result": {"id": "sophisticatedbackpacks:stack_upgrade_tier_1", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:stack_upgrade_tier_1"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_stack_upgrade_tier_1");

  // tier 5 | kubejs:tk3/storage/sophisticatedbackpacks_stack_upgrade_tier_2
  event.custom({"type": "sophisticatedcore:upgrade_next_tier", "category": "misc", "pattern": [" M ", " U ", " F "], "key": {"U": {"item": "sophisticatedbackpacks:stack_upgrade_tier_1"}, "F": {"item": "mekanism:steel_casing"}, "M": {"item": "mekanism:alloy_infused"}}, "result": {"id": "sophisticatedbackpacks:stack_upgrade_tier_2", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:stack_upgrade_tier_2"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_stack_upgrade_tier_2");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_copper_chest
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:chest"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "minecraft:copper_ingot"}}, "result": {"id": "sophisticatedstorage:copper_chest", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:copper_chest"}]}).id("kubejs:tk3/storage/sophisticatedstorage_copper_chest");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_iron_chest
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:copper_chest"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "create:iron_sheet"}}, "result": {"id": "sophisticatedstorage:iron_chest", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:iron_chest"}]}).id("kubejs:tk3/storage/sophisticatedstorage_iron_chest");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_gold_chest
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:iron_chest"}, "F": {"item": "kubejs:tk3_precision_machine"}, "M": {"item": "minecraft:gold_ingot"}}, "result": {"id": "sophisticatedstorage:gold_chest", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:gold_chest"}]}).id("kubejs:tk3/storage/sophisticatedstorage_gold_chest");

  // tier 5 | kubejs:tk3/storage/sophisticatedstorage_diamond_chest
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:gold_chest"}, "F": {"item": "mekanism:steel_casing"}, "M": {"item": "minecraft:diamond"}}, "result": {"id": "sophisticatedstorage:diamond_chest", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:diamond_chest"}]}).id("kubejs:tk3/storage/sophisticatedstorage_diamond_chest");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_copper_barrel
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:barrel"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "minecraft:copper_ingot"}}, "result": {"id": "sophisticatedstorage:copper_barrel", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:copper_barrel"}]}).id("kubejs:tk3/storage/sophisticatedstorage_copper_barrel");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_iron_barrel
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:copper_barrel"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "create:iron_sheet"}}, "result": {"id": "sophisticatedstorage:iron_barrel", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:iron_barrel"}]}).id("kubejs:tk3/storage/sophisticatedstorage_iron_barrel");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_gold_barrel
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:iron_barrel"}, "F": {"item": "kubejs:tk3_precision_machine"}, "M": {"item": "minecraft:gold_ingot"}}, "result": {"id": "sophisticatedstorage:gold_barrel", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:gold_barrel"}]}).id("kubejs:tk3/storage/sophisticatedstorage_gold_barrel");

  // tier 5 | kubejs:tk3/storage/sophisticatedstorage_diamond_barrel
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:gold_barrel"}, "F": {"item": "mekanism:steel_casing"}, "M": {"item": "minecraft:diamond"}}, "result": {"id": "sophisticatedstorage:diamond_barrel", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:diamond_barrel"}]}).id("kubejs:tk3/storage/sophisticatedstorage_diamond_barrel");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_1
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_barrel_1"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "minecraft:copper_ingot"}}, "result": {"id": "sophisticatedstorage:limited_copper_barrel_1", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_copper_barrel_1"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_1");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_1
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_copper_barrel_1"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "create:iron_sheet"}}, "result": {"id": "sophisticatedstorage:limited_iron_barrel_1", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_iron_barrel_1"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_1");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_1
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_iron_barrel_1"}, "F": {"item": "kubejs:tk3_precision_machine"}, "M": {"item": "minecraft:gold_ingot"}}, "result": {"id": "sophisticatedstorage:limited_gold_barrel_1", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_gold_barrel_1"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_1");

  // tier 5 | kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_1
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_gold_barrel_1"}, "F": {"item": "mekanism:steel_casing"}, "M": {"item": "minecraft:diamond"}}, "result": {"id": "sophisticatedstorage:limited_diamond_barrel_1", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_diamond_barrel_1"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_1");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_2
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_barrel_2"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "minecraft:copper_ingot"}}, "result": {"id": "sophisticatedstorage:limited_copper_barrel_2", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_copper_barrel_2"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_2");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_2
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_copper_barrel_2"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "create:iron_sheet"}}, "result": {"id": "sophisticatedstorage:limited_iron_barrel_2", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_iron_barrel_2"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_2");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_2
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_iron_barrel_2"}, "F": {"item": "kubejs:tk3_precision_machine"}, "M": {"item": "minecraft:gold_ingot"}}, "result": {"id": "sophisticatedstorage:limited_gold_barrel_2", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_gold_barrel_2"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_2");

  // tier 5 | kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_2
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_gold_barrel_2"}, "F": {"item": "mekanism:steel_casing"}, "M": {"item": "minecraft:diamond"}}, "result": {"id": "sophisticatedstorage:limited_diamond_barrel_2", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_diamond_barrel_2"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_2");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_3
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_barrel_3"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "minecraft:copper_ingot"}}, "result": {"id": "sophisticatedstorage:limited_copper_barrel_3", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_copper_barrel_3"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_3");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_3
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_copper_barrel_3"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "create:iron_sheet"}}, "result": {"id": "sophisticatedstorage:limited_iron_barrel_3", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_iron_barrel_3"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_3");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_3
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_iron_barrel_3"}, "F": {"item": "kubejs:tk3_precision_machine"}, "M": {"item": "minecraft:gold_ingot"}}, "result": {"id": "sophisticatedstorage:limited_gold_barrel_3", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_gold_barrel_3"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_3");

  // tier 5 | kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_3
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_gold_barrel_3"}, "F": {"item": "mekanism:steel_casing"}, "M": {"item": "minecraft:diamond"}}, "result": {"id": "sophisticatedstorage:limited_diamond_barrel_3", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_diamond_barrel_3"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_3");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_4
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_barrel_4"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "minecraft:copper_ingot"}}, "result": {"id": "sophisticatedstorage:limited_copper_barrel_4", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_copper_barrel_4"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_4");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_4
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_copper_barrel_4"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "create:iron_sheet"}}, "result": {"id": "sophisticatedstorage:limited_iron_barrel_4", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_iron_barrel_4"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_4");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_4
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_iron_barrel_4"}, "F": {"item": "kubejs:tk3_precision_machine"}, "M": {"item": "minecraft:gold_ingot"}}, "result": {"id": "sophisticatedstorage:limited_gold_barrel_4", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_gold_barrel_4"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_4");

  // tier 5 | kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_4
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:limited_gold_barrel_4"}, "F": {"item": "mekanism:steel_casing"}, "M": {"item": "minecraft:diamond"}}, "result": {"id": "sophisticatedstorage:limited_diamond_barrel_4", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:limited_diamond_barrel_4"}]}).id("kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_4");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_copper_shulker_box
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:shulker_box"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "minecraft:copper_ingot"}}, "result": {"id": "sophisticatedstorage:copper_shulker_box", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:copper_shulker_box"}]}).id("kubejs:tk3/storage/sophisticatedstorage_copper_shulker_box");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_iron_shulker_box
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:copper_shulker_box"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "create:iron_sheet"}}, "result": {"id": "sophisticatedstorage:iron_shulker_box", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:iron_shulker_box"}]}).id("kubejs:tk3/storage/sophisticatedstorage_iron_shulker_box");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_gold_shulker_box
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:iron_shulker_box"}, "F": {"item": "kubejs:tk3_precision_machine"}, "M": {"item": "minecraft:gold_ingot"}}, "result": {"id": "sophisticatedstorage:gold_shulker_box", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:gold_shulker_box"}]}).id("kubejs:tk3/storage/sophisticatedstorage_gold_shulker_box");

  // tier 5 | kubejs:tk3/storage/sophisticatedstorage_diamond_shulker_box
  event.custom({"type": "sophisticatedstorage:storage_tier_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedstorage:gold_shulker_box"}, "F": {"item": "mekanism:steel_casing"}, "M": {"item": "minecraft:diamond"}}, "result": {"id": "sophisticatedstorage:diamond_shulker_box", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedstorage:diamond_shulker_box"}]}).id("kubejs:tk3/storage/sophisticatedstorage_diamond_shulker_box");

  // tier 2 | kubejs:tk3/storage/sophisticatedbackpacks_copper_backpack
  event.custom({"type": "sophisticatedbackpacks:backpack_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedbackpacks:backpack"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "minecraft:copper_ingot"}}, "result": {"id": "sophisticatedbackpacks:copper_backpack", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:copper_backpack"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_copper_backpack");

  // tier 2 | kubejs:tk3/storage/sophisticatedbackpacks_iron_backpack
  event.custom({"type": "sophisticatedbackpacks:backpack_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedbackpacks:copper_backpack"}, "F": {"item": "kubejs:tk3_hydraulic_machine"}, "M": {"item": "create:iron_sheet"}}, "result": {"id": "sophisticatedbackpacks:iron_backpack", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:iron_backpack"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_iron_backpack");

  // tier 3 | kubejs:tk3/storage/sophisticatedbackpacks_gold_backpack
  event.custom({"type": "sophisticatedbackpacks:backpack_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedbackpacks:iron_backpack"}, "F": {"item": "kubejs:tk3_precision_machine"}, "M": {"item": "minecraft:gold_ingot"}}, "result": {"id": "sophisticatedbackpacks:gold_backpack", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:gold_backpack"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_gold_backpack");

  // tier 5 | kubejs:tk3/storage/sophisticatedbackpacks_diamond_backpack
  event.custom({"type": "sophisticatedbackpacks:backpack_upgrade", "category": "misc", "pattern": ["MFM", "MSM", "MMM"], "key": {"S": {"item": "sophisticatedbackpacks:gold_backpack"}, "F": {"item": "mekanism:steel_casing"}, "M": {"item": "minecraft:diamond"}}, "result": {"id": "sophisticatedbackpacks:diamond_backpack", "count": 1}, "neoforge:conditions": [{"type": "sophisticatedcore:item_enabled", "itemRegistryName": "sophisticatedbackpacks:diamond_backpack"}]}).id("kubejs:tk3/storage/sophisticatedbackpacks_diamond_backpack");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_basic_to_copper_tier_upgrade
  event.shaped("sophisticatedstorage:basic_to_copper_tier_upgrade", ["MMM", "MFM", "MBM"], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_hydraulic_machine", "M": "minecraft:copper_ingot"}).id("kubejs:tk3/storage/sophisticatedstorage_basic_to_copper_tier_upgrade");

  // tier 2 | kubejs:tk3/storage/sophisticatedstorage_copper_to_iron_tier_upgrade
  event.shaped("sophisticatedstorage:copper_to_iron_tier_upgrade", ["MMM", "MFM", "MBM"], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_hydraulic_machine", "M": "create:iron_sheet"}).id("kubejs:tk3/storage/sophisticatedstorage_copper_to_iron_tier_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_iron_to_gold_tier_upgrade
  event.shaped("sophisticatedstorage:iron_to_gold_tier_upgrade", ["MMM", "MFM", "MBM"], {"B": "sophisticatedstorage:upgrade_base", "F": "kubejs:tk3_precision_machine", "M": "minecraft:gold_ingot"}).id("kubejs:tk3/storage/sophisticatedstorage_iron_to_gold_tier_upgrade");

  // tier 5 | kubejs:tk3/storage/sophisticatedstorage_gold_to_diamond_tier_upgrade
  event.shaped("sophisticatedstorage:gold_to_diamond_tier_upgrade", ["MMM", "MFM", "MBM"], {"B": "sophisticatedstorage:upgrade_base", "F": "mekanism:steel_casing", "M": "minecraft:diamond"}).id("kubejs:tk3/storage/sophisticatedstorage_gold_to_diamond_tier_upgrade");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_controller
  event.shapeless("sophisticatedstorage:controller", ["kubejs:tk3_precision_machine", "minecraft:comparator", "minecraft:chest"]).id("kubejs:tk3/storage/sophisticatedstorage_controller");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_storage_link
  event.shapeless("sophisticatedstorage:storage_link", ["create:precision_mechanism", "sophisticatedstorage:upgrade_base", "minecraft:ender_pearl"]).id("kubejs:tk3/storage/sophisticatedstorage_storage_link");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_storage_input
  event.shapeless("sophisticatedstorage:storage_input", ["create:precision_mechanism", "sophisticatedstorage:upgrade_base", "minecraft:hopper"]).id("kubejs:tk3/storage/sophisticatedstorage_storage_input");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_storage_output
  event.shapeless("sophisticatedstorage:storage_output", ["create:precision_mechanism", "sophisticatedstorage:upgrade_base", "create:brass_funnel"]).id("kubejs:tk3/storage/sophisticatedstorage_storage_output");

  // tier 3 | kubejs:tk3/storage/sophisticatedstorage_storage_io
  event.shapeless("sophisticatedstorage:storage_io", ["create:precision_mechanism", "sophisticatedstorage:upgrade_base", "create:brass_tunnel"]).id("kubejs:tk3/storage/sophisticatedstorage_storage_io");
});
