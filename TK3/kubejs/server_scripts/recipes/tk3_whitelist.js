// priority: -10000
ServerEvents.recipes(event => {

    //->------------------------]  Approved Recipe IDs / Final Cleanup [------------------------<-//

    const RecipeFilter = Java.loadClass(
        'dev.latvian.mods.kubejs.recipe.filter.RecipeFilter');
    const MatchContext = Java.loadClass(
        'dev.latvian.mods.kubejs.recipe.filter.RecipeMatchContext$Impl');
    const allowed = {
        "ae2:16k_crafting_storage": [
            "kubejs:tk3/ae_network/ae2_network_crafting_16k_cpu_crafting_storage"
        ],
        "ae2:1k_crafting_storage": [
            "kubejs:tk3/ae_network/ae2_network_crafting_1k_cpu_crafting_storage"
        ],
        "ae2:256k_crafting_storage": [
            "kubejs:tk3/ae_network/ae2_network_crafting_256k_cpu_crafting_storage"
        ],
        "ae2:4k_crafting_storage": [
            "kubejs:tk3/ae_network/ae2_network_crafting_4k_cpu_crafting_storage"
        ],
        "ae2:64k_crafting_storage": [
            "kubejs:tk3/ae_network/ae2_network_crafting_64k_cpu_crafting_storage"
        ],
        "ae2:advanced_card": [
            "kubejs:tk3/ae_network/ae2_materials_advancedcard"
        ],
        "ae2:annihilation_core": [
            "kubejs:tk3/ae_network/ae2_materials_annihilationcore"
        ],
        "ae2:annihilation_plane": [
            "kubejs:tk3/ae_network/ae2_network_parts_annihilation_plane_alt",
            "kubejs:tk3/ae_network/ae2_network_parts_annihilation_plane_alt2"
        ],
        "ae2:basic_card": [
            "kubejs:tk3/ae_network/ae2_materials_basiccard"
        ],
        "ae2:black_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_black"
        ],
        "ae2:black_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_black"
        ],
        "ae2:black_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_black"
        ],
        "ae2:black_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_black"
        ],
        "ae2:black_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_black"
        ],
        "ae2:blank_pattern": [
            "kubejs:tk3/ae_network/ae2_network_crafting_patterns_blank"
        ],
        "ae2:blue_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_blue"
        ],
        "ae2:blue_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_blue"
        ],
        "ae2:blue_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_blue"
        ],
        "ae2:blue_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_blue"
        ],
        "ae2:blue_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_blue"
        ],
        "ae2:brown_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_brown"
        ],
        "ae2:brown_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_brown"
        ],
        "ae2:brown_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_brown"
        ],
        "ae2:brown_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_brown"
        ],
        "ae2:brown_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_brown"
        ],
        "ae2:cable_anchor": [
            "kubejs:tk3/ae_network/ae2_network_parts_cable_anchor"
        ],
        "ae2:cable_energy_acceptor": [
            "kubejs:tk3/ae_network/ae2_network_parts_energy_acceptor"
        ],
        "ae2:cable_interface": [
            "kubejs:tk3/ae_network/ae2_network_blocks_interfaces_interface_part"
        ],
        "ae2:cable_pattern_provider": [
            "kubejs:tk3/ae_network/ae2_network_blocks_pattern_providers_interface_part"
        ],
        "ae2:calculation_processor": [
            "kubejs:tk3/late_layers/ae2_calculation_processor"
        ],
        "ae2:calculation_processor_press": [
            "kubejs:tk3/ae_network/ae2_inscriber_calculation_processor_press"
        ],
        "ae2:capacity_card": [
            "kubejs:tk3/ae_network/ae2_materials_cardcapacity"
        ],
        "ae2:cell_component_16k": [
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_components_cell_16k_part"
        ],
        "ae2:cell_component_1k": [
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_components_cell_1k_part"
        ],
        "ae2:cell_component_256k": [
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_components_cell_256k_part"
        ],
        "ae2:cell_component_4k": [
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_components_cell_4k_part"
        ],
        "ae2:cell_component_64k": [
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_components_cell_64k_part"
        ],
        "ae2:cell_workbench": [
            "kubejs:tk3/ae_network/ae2_network_blocks_cell_workbench"
        ],
        "ae2:charged_certus_quartz_crystal": [
            "kubejs:tk3/late_layers/ae2_charged_certus_quartz_crystal"
        ],
        "ae2:charged_staff": [
            "kubejs:tk3/ae_network/ae2_tools_misctools_charged_staff"
        ],
        "ae2:charger": [
            "kubejs:tk3/late_layers/ae2_charger"
        ],
        "ae2:chest": [
            "kubejs:tk3/ae_network/ae2_network_blocks_storage_chest"
        ],
        "ae2:chiseled_quartz_slab": [
            "kubejs:tk3/ae_network/ae2_shaped_slabs_chiseled_quartz_block",
            "kubejs:tk3/ae_network/ae2_block_cutter_slabs_chiseled_quartz_slab"
        ],
        "ae2:chiseled_quartz_stairs": [
            "kubejs:tk3/ae_network/ae2_shaped_stairs_chiseled_quartz_block",
            "kubejs:tk3/ae_network/ae2_block_cutter_stairs_chiseled_quartz_stairs"
        ],
        "ae2:chiseled_quartz_wall": [
            "kubejs:tk3/ae_network/ae2_shaped_walls_chiseled_quartz_block",
            "kubejs:tk3/ae_network/ae2_block_cutter_walls_chiseled_quartz_wall"
        ],
        "ae2:color_applicator": [
            "kubejs:tk3/ae_network/ae2_tools_network_color_applicator"
        ],
        "ae2:condenser": [
            "kubejs:tk3/ae_network/ae2_network_blocks_io_condenser"
        ],
        "ae2:controller": [
            "kubejs:tk3/ae_network/ae2_network_blocks_controller"
        ],
        "ae2:conversion_monitor": [
            "kubejs:tk3/ae_network/ae2_network_parts_monitors_conversion"
        ],
        "ae2:crafting_accelerator": [
            "kubejs:tk3/ae_network/ae2_network_crafting_cpu_crafting_accelerator"
        ],
        "ae2:crafting_card": [
            "kubejs:tk3/ae_network/ae2_materials_cardcrafting"
        ],
        "ae2:crafting_monitor": [
            "kubejs:tk3/ae_network/ae2_network_crafting_cpu_crafting_monitor"
        ],
        "ae2:crafting_terminal": [
            "kubejs:tk3/ae_network/ae2_network_parts_terminals_crafting"
        ],
        "ae2:crafting_unit": [
            "kubejs:tk3/ae_network/ae2_network_crafting_cpu_crafting_unit"
        ],
        "ae2:crank": [
            "kubejs:tk3/ae_network/ae2_network_blocks_crank"
        ],
        "ae2:crystal_resonance_generator": [
            "kubejs:tk3/ae_network/ae2_network_crystal_resonance_generator"
        ],
        "ae2:cyan_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_cyan"
        ],
        "ae2:cyan_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_cyan"
        ],
        "ae2:cyan_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_cyan"
        ],
        "ae2:cyan_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_cyan"
        ],
        "ae2:cyan_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_cyan"
        ],
        "ae2:dark_monitor": [
            "kubejs:tk3/ae_network/ae2_network_parts_panels_dark_monitor"
        ],
        "ae2:dense_energy_cell": [
            "kubejs:tk3/ae_network/ae2_network_blocks_energy_dense_energy_cell"
        ],
        "ae2:drive": [
            "kubejs:tk3/ae_network/ae2_network_blocks_storage_drive"
        ],
        "ae2:ender_dust": [
            "kubejs:tk3/ae_network/ae2_inscriber_ender_dust"
        ],
        "ae2:energy_acceptor": [
            "kubejs:tk3/ae_network/ae2_network_blocks_energy_energy_acceptor",
            "kubejs:tk3/ae_network/ae2_network_blocks_energy_energy_acceptor_alt"
        ],
        "ae2:energy_card": [
            "kubejs:tk3/ae_network/ae2_materials_cardenergy"
        ],
        "ae2:energy_cell": [
            "kubejs:tk3/ae_network/ae2_network_blocks_energy_energy_cell"
        ],
        "ae2:energy_level_emitter": [
            "kubejs:tk3/ae_network/ae2_network_parts_energy_level_emitter"
        ],
        "ae2:engineering_processor": [
            "kubejs:tk3/late_layers/ae2_engineering_processor"
        ],
        "ae2:engineering_processor_press": [
            "kubejs:tk3/ae_network/ae2_inscriber_engineering_processor_press"
        ],
        "ae2:equal_distribution_card": [
            "kubejs:tk3/ae_network/ae2_materials_carddistribution"
        ],
        "ae2:export_bus": [
            "kubejs:tk3/ae_network/ae2_network_parts_export_bus"
        ],
        "ae2:fluid_cell_housing": [
            "kubejs:tk3/ae_network/ae2_network_cells_fluid_cell_housing"
        ],
        "ae2:fluid_storage_cell_16k": [
            "kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_16k_storage",
            "kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_16k"
        ],
        "ae2:fluid_storage_cell_1k": [
            "kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_1k_storage",
            "kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_1k"
        ],
        "ae2:fluid_storage_cell_256k": [
            "kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_256k",
            "kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_256k_storage"
        ],
        "ae2:fluid_storage_cell_4k": [
            "kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_4k",
            "kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_4k_storage"
        ],
        "ae2:fluid_storage_cell_64k": [
            "kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_64k",
            "kubejs:tk3/ae_network/ae2_network_cells_fluid_storage_cell_64k_storage"
        ],
        "ae2:fluix_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_fluix",
            "kubejs:tk3/ae_network/ae2_network_cables_covered_fluix_clean"
        ],
        "ae2:fluix_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_fluix",
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_fluix_clean"
        ],
        "ae2:fluix_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_fluix",
            "kubejs:tk3/ae_network/ae2_network_cables_glass_fluix_clean"
        ],
        "ae2:fluix_pearl": [
            "kubejs:tk3/ae_network/ae2_misc_fluixpearl"
        ],
        "ae2:fluix_slab": [
            "kubejs:tk3/ae_network/ae2_shaped_slabs_fluix_block",
            "kubejs:tk3/ae_network/ae2_block_cutter_slabs_fluix_slab"
        ],
        "ae2:fluix_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_fluix_clean",
            "kubejs:tk3/ae_network/ae2_network_cables_smart_fluix"
        ],
        "ae2:fluix_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_fluix",
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_from_smart",
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_fluix_clean"
        ],
        "ae2:fluix_stairs": [
            "kubejs:tk3/ae_network/ae2_shaped_stairs_fluix_block",
            "kubejs:tk3/ae_network/ae2_block_cutter_stairs_fluix_stairs"
        ],
        "ae2:fluix_upgrade_smithing_template": [
            "kubejs:tk3/ae_network/ae2_tools_fluix_upgrade_smithing_template"
        ],
        "ae2:fluix_wall": [
            "kubejs:tk3/ae_network/ae2_shaped_walls_fluix_block",
            "kubejs:tk3/ae_network/ae2_block_cutter_walls_fluix_wall"
        ],
        "ae2:formation_core": [
            "kubejs:tk3/ae_network/ae2_materials_formationcore"
        ],
        "ae2:formation_plane": [
            "kubejs:tk3/ae_network/ae2_network_parts_formation_plane_alt",
            "kubejs:tk3/ae_network/ae2_network_parts_formation_plane"
        ],
        "ae2:fuzzy_card": [
            "kubejs:tk3/ae_network/ae2_materials_cardfuzzy"
        ],
        "ae2:gray_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_gray"
        ],
        "ae2:gray_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_gray"
        ],
        "ae2:gray_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_gray"
        ],
        "ae2:gray_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_gray"
        ],
        "ae2:gray_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_gray"
        ],
        "ae2:green_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_green"
        ],
        "ae2:green_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_green"
        ],
        "ae2:green_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_green"
        ],
        "ae2:green_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_green"
        ],
        "ae2:green_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_green"
        ],
        "ae2:growth_accelerator": [
            "kubejs:tk3/ae_network/ae2_network_blocks_crystal_processing_growth_accelerator"
        ],
        "ae2:guide": [
            "kubejs:tk3/ae_network/ae2_charger_guide"
        ],
        "ae2:import_bus": [
            "kubejs:tk3/ae_network/ae2_network_parts_import_bus"
        ],
        "ae2:inscriber": [
            "kubejs:tk3/late_layers/ae2_inscriber"
        ],
        "ae2:interface": [
            "kubejs:tk3/ae_network/ae2_network_blocks_interfaces_interface",
            "kubejs:tk3/ae_network/ae2_network_blocks_interfaces_interface_alt"
        ],
        "ae2:inverted_toggle_bus": [
            "kubejs:tk3/ae_network/ae2_network_parts_toggle_bus_inverted_alt"
        ],
        "ae2:inverter_card": [
            "kubejs:tk3/ae_network/ae2_materials_cardinverter"
        ],
        "ae2:io_port": [
            "kubejs:tk3/ae_network/ae2_network_blocks_io_port"
        ],
        "ae2:item_cell_housing": [
            "kubejs:tk3/ae_network/ae2_network_cells_item_cell_housing"
        ],
        "ae2:item_storage_cell_16k": [
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_16k_storage",
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_16k"
        ],
        "ae2:item_storage_cell_1k": [
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_1k_storage",
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_1k"
        ],
        "ae2:item_storage_cell_256k": [
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_256k_storage",
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_256k"
        ],
        "ae2:item_storage_cell_4k": [
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_4k",
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_4k_storage"
        ],
        "ae2:item_storage_cell_64k": [
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_64k",
            "kubejs:tk3/ae_network/ae2_network_cells_item_storage_cell_64k_storage"
        ],
        "ae2:level_emitter": [
            "kubejs:tk3/ae_network/ae2_network_parts_level_emitter"
        ],
        "ae2:light_blue_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_light_blue"
        ],
        "ae2:light_blue_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_light_blue"
        ],
        "ae2:light_blue_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_light_blue"
        ],
        "ae2:light_blue_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_light_blue"
        ],
        "ae2:light_blue_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_light_blue"
        ],
        "ae2:light_detector": [
            "kubejs:tk3/ae_network/ae2_decorative_light_detector"
        ],
        "ae2:light_gray_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_light_gray"
        ],
        "ae2:light_gray_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_light_gray"
        ],
        "ae2:light_gray_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_light_gray"
        ],
        "ae2:light_gray_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_light_gray"
        ],
        "ae2:light_gray_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_light_gray"
        ],
        "ae2:lime_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_lime"
        ],
        "ae2:lime_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_lime"
        ],
        "ae2:lime_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_lime"
        ],
        "ae2:lime_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_lime"
        ],
        "ae2:lime_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_lime"
        ],
        "ae2:logic_processor": [
            "kubejs:tk3/late_layers/ae2_logic_processor"
        ],
        "ae2:logic_processor_press": [
            "kubejs:tk3/ae_network/ae2_inscriber_logic_processor_press"
        ],
        "ae2:magenta_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_magenta"
        ],
        "ae2:magenta_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_magenta"
        ],
        "ae2:magenta_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_magenta"
        ],
        "ae2:magenta_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_magenta"
        ],
        "ae2:magenta_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_magenta"
        ],
        "ae2:matter_cannon": [
            "kubejs:tk3/ae_network/ae2_tools_matter_cannon"
        ],
        "ae2:me_p2p_tunnel": [
            "kubejs:tk3/ae_network/ae2_network_parts_tunnels_me"
        ],
        "ae2:memory_card": [
            "kubejs:tk3/ae_network/ae2_tools_network_memory_card"
        ],
        "ae2:molecular_assembler": [
            "kubejs:tk3/ae_network/ae2_network_crafting_molecular_assembler"
        ],
        "ae2:monitor": [
            "kubejs:tk3/ae_network/ae2_network_parts_panels_monitor"
        ],
        "ae2:network_tool": [
            "kubejs:tk3/ae_network/ae2_tools_network_tool"
        ],
        "ae2:not_so_mysterious_cube": [
            "kubejs:tk3/ae_network/ae2_shaped_not_so_mysterious_cube"
        ],
        "ae2:orange_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_orange"
        ],
        "ae2:orange_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_orange"
        ],
        "ae2:orange_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_orange"
        ],
        "ae2:orange_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_orange"
        ],
        "ae2:orange_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_orange"
        ],
        "ae2:pattern_access_terminal": [
            "kubejs:tk3/ae_network/ae2_network_parts_terminals_pattern_access"
        ],
        "ae2:pattern_encoding_terminal": [
            "kubejs:tk3/ae_network/ae2_network_parts_terminals_pattern_encoding"
        ],
        "ae2:pattern_provider": [
            "kubejs:tk3/ae_network/ae2_network_blocks_pattern_providers_interface_alt",
            "kubejs:tk3/ae_network/ae2_network_blocks_pattern_providers_interface"
        ],
        "ae2:pink_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_pink"
        ],
        "ae2:pink_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_pink"
        ],
        "ae2:pink_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_pink"
        ],
        "ae2:pink_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_pink"
        ],
        "ae2:pink_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_pink"
        ],
        "ae2:portable_fluid_cell_16k": [
            "kubejs:tk3/ae_network/ae2_tools_portable_fluid_cell_16k"
        ],
        "ae2:portable_fluid_cell_1k": [
            "kubejs:tk3/ae_network/ae2_tools_portable_fluid_cell_1k"
        ],
        "ae2:portable_fluid_cell_256k": [
            "kubejs:tk3/ae_network/ae2_tools_portable_fluid_cell_256k"
        ],
        "ae2:portable_fluid_cell_4k": [
            "kubejs:tk3/ae_network/ae2_tools_portable_fluid_cell_4k"
        ],
        "ae2:portable_fluid_cell_64k": [
            "kubejs:tk3/ae_network/ae2_tools_portable_fluid_cell_64k"
        ],
        "ae2:portable_item_cell_16k": [
            "kubejs:tk3/ae_network/ae2_tools_portable_item_cell_16k"
        ],
        "ae2:portable_item_cell_1k": [
            "kubejs:tk3/ae_network/ae2_tools_portable_item_cell_1k"
        ],
        "ae2:portable_item_cell_256k": [
            "kubejs:tk3/ae_network/ae2_tools_portable_item_cell_256k"
        ],
        "ae2:portable_item_cell_4k": [
            "kubejs:tk3/ae_network/ae2_tools_portable_item_cell_4k"
        ],
        "ae2:portable_item_cell_64k": [
            "kubejs:tk3/ae_network/ae2_tools_portable_item_cell_64k"
        ],
        "ae2:printed_calculation_processor": [
            "kubejs:tk3/late_layers/ae2_printed_calculation_processor"
        ],
        "ae2:printed_engineering_processor": [
            "kubejs:tk3/late_layers/ae2_printed_engineering_processor"
        ],
        "ae2:printed_logic_processor": [
            "kubejs:tk3/late_layers/ae2_printed_logic_processor"
        ],
        "ae2:printed_silicon": [
            "kubejs:tk3/late_layers/ae2_printed_silicon"
        ],
        "ae2:purple_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_purple"
        ],
        "ae2:purple_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_purple"
        ],
        "ae2:purple_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_purple"
        ],
        "ae2:purple_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_purple"
        ],
        "ae2:purple_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_purple"
        ],
        "ae2:quantum_entangled_singularity": [
            "kubejs:tk3/ae_network/ae2_transform_entangled_singularity",
            "kubejs:tk3/ae_network/ae2_transform_entangled_singularity_from_pearl"
        ],
        "ae2:quantum_link": [
            "kubejs:tk3/ae_network/ae2_network_blocks_quantum_link"
        ],
        "ae2:quantum_ring": [
            "kubejs:tk3/ae_network/ae2_network_blocks_quantum_ring"
        ],
        "ae2:quartz_brick_slab": [
            "kubejs:tk3/ae_network/ae2_shaped_slabs_quartz_bricks",
            "kubejs:tk3/ae_network/ae2_block_cutter_slabs_quartz_brick_slab"
        ],
        "ae2:quartz_brick_stairs": [
            "kubejs:tk3/ae_network/ae2_shaped_stairs_quartz_bricks",
            "kubejs:tk3/ae_network/ae2_block_cutter_stairs_quartz_brick_stairs"
        ],
        "ae2:quartz_brick_wall": [
            "kubejs:tk3/ae_network/ae2_shaped_walls_quartz_bricks",
            "kubejs:tk3/ae_network/ae2_block_cutter_walls_quartz_brick_wall"
        ],
        "ae2:quartz_bricks": [
            "kubejs:tk3/ae_network/ae2_decorative_certus_quartz_bricks",
            "kubejs:tk3/ae_network/ae2_decorative_certus_quartz_bricks_from_stonecutting"
        ],
        "ae2:quartz_fiber": [
            "kubejs:tk3/ae_network/ae2_network_parts_quartz_fiber_part"
        ],
        "ae2:quartz_fixture": [
            "kubejs:tk3/ae_network/ae2_decorative_quartz_fixture",
            "kubejs:tk3/ae_network/ae2_decorative_quartz_fixture_from_anchors"
        ],
        "ae2:quartz_pillar": [
            "kubejs:tk3/ae_network/ae2_decorative_certus_quartz_pillar_from_stonecutting",
            "kubejs:tk3/ae_network/ae2_decorative_certus_quartz_pillar"
        ],
        "ae2:quartz_pillar_slab": [
            "kubejs:tk3/ae_network/ae2_shaped_slabs_quartz_pillar",
            "kubejs:tk3/ae_network/ae2_block_cutter_slabs_quartz_pillar_slab"
        ],
        "ae2:quartz_pillar_stairs": [
            "kubejs:tk3/ae_network/ae2_shaped_stairs_quartz_pillar",
            "kubejs:tk3/ae_network/ae2_block_cutter_stairs_quartz_pillar_stairs"
        ],
        "ae2:quartz_pillar_wall": [
            "kubejs:tk3/ae_network/ae2_shaped_walls_quartz_pillar",
            "kubejs:tk3/ae_network/ae2_block_cutter_walls_quartz_pillar_wall"
        ],
        "ae2:quartz_slab": [
            "kubejs:tk3/ae_network/ae2_shaped_slabs_quartz_block",
            "kubejs:tk3/ae_network/ae2_block_cutter_slabs_quartz_slab"
        ],
        "ae2:quartz_stairs": [
            "kubejs:tk3/ae_network/ae2_shaped_stairs_quartz_block",
            "kubejs:tk3/ae_network/ae2_block_cutter_stairs_quartz_stairs"
        ],
        "ae2:quartz_wall": [
            "kubejs:tk3/ae_network/ae2_shaped_walls_quartz_block",
            "kubejs:tk3/ae_network/ae2_block_cutter_walls_quartz_wall"
        ],
        "ae2:red_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_red"
        ],
        "ae2:red_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_red"
        ],
        "ae2:red_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_red"
        ],
        "ae2:red_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_red"
        ],
        "ae2:red_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_red"
        ],
        "ae2:redstone_card": [
            "kubejs:tk3/ae_network/ae2_materials_cardredstone"
        ],
        "ae2:semi_dark_monitor": [
            "kubejs:tk3/ae_network/ae2_network_parts_panels_semi_dark_monitor_alt",
            "kubejs:tk3/ae_network/ae2_network_parts_panels_semi_dark_monitor"
        ],
        "ae2:spatial_anchor": [
            "kubejs:tk3/ae_network/ae2_network_blocks_spatial_anchor"
        ],
        "ae2:spatial_cell_component_128": [
            "kubejs:tk3/ae_network/ae2_network_cells_spatial_components_1"
        ],
        "ae2:spatial_cell_component_16": [
            "kubejs:tk3/ae_network/ae2_network_cells_spatial_components_0"
        ],
        "ae2:spatial_cell_component_2": [
            "kubejs:tk3/ae_network/ae2_network_cells_spatial_components"
        ],
        "ae2:spatial_io_port": [
            "kubejs:tk3/ae_network/ae2_network_blocks_spatial_io_port"
        ],
        "ae2:spatial_pylon": [
            "kubejs:tk3/ae_network/ae2_network_blocks_spatial_io_pylon"
        ],
        "ae2:spatial_storage_cell_128": [
            "kubejs:tk3/ae_network/ae2_network_cells_spatial_storage_cell_128_cubed",
            "kubejs:tk3/ae_network/ae2_network_cells_spatial_storage_cell_128_cubed_storage"
        ],
        "ae2:spatial_storage_cell_16": [
            "kubejs:tk3/ae_network/ae2_network_cells_spatial_storage_cell_16_cubed_storage",
            "kubejs:tk3/ae_network/ae2_network_cells_spatial_storage_cell_16_cubed"
        ],
        "ae2:spatial_storage_cell_2": [
            "kubejs:tk3/ae_network/ae2_network_cells_spatial_storage_cell_2_cubed_storage",
            "kubejs:tk3/ae_network/ae2_network_cells_spatial_storage_cell_2_cubed"
        ],
        "ae2:speed_card": [
            "kubejs:tk3/ae_network/ae2_materials_cardspeed"
        ],
        "ae2:storage_bus": [
            "kubejs:tk3/ae_network/ae2_network_parts_storage_bus"
        ],
        "ae2:storage_monitor": [
            "kubejs:tk3/ae_network/ae2_network_parts_monitors_storage"
        ],
        "ae2:terminal": [
            "kubejs:tk3/ae_network/ae2_network_parts_terminals"
        ],
        "ae2:tiny_tnt": [
            "kubejs:tk3/ae_network/ae2_misc_tiny_tnt"
        ],
        "ae2:toggle_bus": [
            "kubejs:tk3/ae_network/ae2_network_parts_toggle_bus",
            "kubejs:tk3/ae_network/ae2_network_parts_toggle_bus_alt"
        ],
        "ae2:vibration_chamber": [
            "kubejs:tk3/ae_network/ae2_network_blocks_energy_vibration_chamber"
        ],
        "ae2:view_cell": [
            "kubejs:tk3/ae_network/ae2_network_cells_view_cell_storage",
            "kubejs:tk3/ae_network/ae2_network_cells_view_cell"
        ],
        "ae2:void_card": [
            "kubejs:tk3/ae_network/ae2_materials_cardvoid"
        ],
        "ae2:white_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_white"
        ],
        "ae2:white_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_white"
        ],
        "ae2:white_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_white"
        ],
        "ae2:white_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_white"
        ],
        "ae2:white_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_white"
        ],
        "ae2:wireless_access_point": [
            "kubejs:tk3/ae_network/ae2_network_wireless_access_point"
        ],
        "ae2:wireless_booster": [
            "kubejs:tk3/ae_network/ae2_network_wireless_booster"
        ],
        "ae2:wireless_crafting_terminal": [
            "kubejs:tk3/ae_network/ae2_network_wireless_crafting_terminal",
            "kubejs:tk3/ae_network/ae2_network_upgrade_wireless_crafting_terminal"
        ],
        "ae2:wireless_receiver": [
            "kubejs:tk3/ae_network/ae2_network_wireless_part"
        ],
        "ae2:wireless_terminal": [
            "kubejs:tk3/ae_network/ae2_network_wireless_terminal"
        ],
        "ae2:yellow_covered_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_covered_yellow"
        ],
        "ae2:yellow_covered_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_covered_yellow"
        ],
        "ae2:yellow_glass_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_glass_yellow"
        ],
        "ae2:yellow_smart_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_smart_yellow"
        ],
        "ae2:yellow_smart_dense_cable": [
            "kubejs:tk3/ae_network/ae2_network_cables_dense_smart_yellow"
        ],
        "aeronautics:adjustable_burner": [
            "kubejs:tk3/addons/aeronautics_adjustable_burner"
        ],
        "aeronautics:andesite_propeller": [
            "kubejs:tk3/addons/aeronautics_andesite_propeller"
        ],
        "aeronautics:black_envelope": [
            "kubejs:tk3/addons/aeronautics_black_envelope"
        ],
        "aeronautics:black_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_black_envelope_encased_shaft"
        ],
        "aeronautics:blue_envelope": [
            "kubejs:tk3/addons/aeronautics_blue_envelope"
        ],
        "aeronautics:blue_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_blue_envelope_encased_shaft"
        ],
        "aeronautics:brown_envelope": [
            "kubejs:tk3/addons/aeronautics_brown_envelope"
        ],
        "aeronautics:brown_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_brown_envelope_encased_shaft"
        ],
        "aeronautics:cyan_envelope": [
            "kubejs:tk3/addons/aeronautics_cyan_envelope"
        ],
        "aeronautics:cyan_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_cyan_envelope_encased_shaft"
        ],
        "aeronautics:end_stone_powder": [
            "kubejs:tk3/addons/aeronautics_end_stone_powder"
        ],
        "aeronautics:gray_envelope": [
            "kubejs:tk3/addons/aeronautics_gray_envelope"
        ],
        "aeronautics:gray_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_gray_envelope_encased_shaft"
        ],
        "aeronautics:green_envelope": [
            "kubejs:tk3/addons/aeronautics_green_envelope"
        ],
        "aeronautics:green_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_green_envelope_encased_shaft"
        ],
        "aeronautics:gyroscopic_propeller_bearing": [
            "kubejs:tk3/addons/aeronautics_gyroscopic_propeller_bearing"
        ],
        "aeronautics:light_blue_envelope": [
            "kubejs:tk3/addons/aeronautics_light_blue_envelope"
        ],
        "aeronautics:light_blue_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_light_blue_envelope_encased_shaft"
        ],
        "aeronautics:light_gray_envelope": [
            "kubejs:tk3/addons/aeronautics_light_gray_envelope"
        ],
        "aeronautics:light_gray_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_light_gray_envelope_encased_shaft"
        ],
        "aeronautics:lime_envelope": [
            "kubejs:tk3/addons/aeronautics_lime_envelope"
        ],
        "aeronautics:lime_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_lime_envelope_encased_shaft"
        ],
        "aeronautics:magenta_envelope": [
            "kubejs:tk3/addons/aeronautics_magenta_envelope"
        ],
        "aeronautics:magenta_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_magenta_envelope_encased_shaft"
        ],
        "aeronautics:mounted_potato_cannon": [
            "kubejs:tk3/addons/aeronautics_mechanical_crafting_mounted_potato_cannon"
        ],
        "aeronautics:orange_envelope": [
            "kubejs:tk3/addons/aeronautics_orange_envelope"
        ],
        "aeronautics:orange_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_orange_envelope_encased_shaft"
        ],
        "aeronautics:pink_envelope": [
            "kubejs:tk3/addons/aeronautics_pink_envelope"
        ],
        "aeronautics:pink_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_pink_envelope_encased_shaft"
        ],
        "aeronautics:propeller_bearing": [
            "kubejs:tk3/tier_3/propeller_bearing"
        ],
        "aeronautics:purple_envelope": [
            "kubejs:tk3/addons/aeronautics_purple_envelope"
        ],
        "aeronautics:purple_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_purple_envelope_encased_shaft"
        ],
        "aeronautics:red_envelope": [
            "kubejs:tk3/addons/aeronautics_red_envelope"
        ],
        "aeronautics:red_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_red_envelope_encased_shaft"
        ],
        "aeronautics:smart_propeller": [
            "kubejs:tk3/addons/aeronautics_smart_propeller"
        ],
        "aeronautics:steam_vent": [
            "kubejs:tk3/addons/aeronautics_steam_vent"
        ],
        "aeronautics:white_envelope": [
            "kubejs:tk3/addons/aeronautics_white_envelope"
        ],
        "aeronautics:white_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_white_envelope_encased_shaft"
        ],
        "aeronautics:wooden_propeller": [
            "kubejs:tk3/addons/aeronautics_wooden_propeller"
        ],
        "aeronautics:yellow_envelope": [
            "kubejs:tk3/addons/aeronautics_yellow_envelope"
        ],
        "aeronautics:yellow_envelope_encased_shaft": [
            "kubejs:tk3/addons/aeronautics_yellow_envelope_encased_shaft"
        ],
        "apotheosis:augmenting_table": [
            "kubejs:tk3/addons/apotheosis_augmenting_table"
        ],
        "apotheosis:gem_cutting_table": [
            "kubejs:tk3/addons/apotheosis_gem_cutting_table"
        ],
        "apotheosis:reforging_table": [
            "kubejs:tk3/addons/apotheosis_reforging_table"
        ],
        "apotheosis:salvaging_table": [
            "kubejs:tk3/addons/apotheosis_salvaging_table"
        ],
        "architects_palette:algal_blend": [
            "kubejs:tk3/tier_1/algal_blend",
            "kubejs:tk3/tier_1/algal_blend_bulk"
        ],
        "ars_creo:starbuncle_wheel": [
            "kubejs:tk3/addons/ars_creo_starbuncle_wheel"
        ],
        "ars_n_spells:mana_infusion": [
            "kubejs:tk3/addons/ars_n_spells_mana_infusion"
        ],
        "ars_n_spells:mana_well": [
            "kubejs:tk3/addons/ars_n_spells_mana_well"
        ],
        "ars_n_spells:spell_loom": [
            "kubejs:tk3/addons/ars_n_spells_spell_loom"
        ],
        "ars_nouveau:agronomic_sourcelink": [
            "kubejs:tk3/tier_4/agronomic_sourcelink"
        ],
        "ars_nouveau:alchemical_sourcelink": [
            "kubejs:tk3/tier_4/alchemical_sourcelink"
        ],
        "ars_nouveau:enchanting_apparatus": [
            "kubejs:tk3/tier_4/enchanting_apparatus"
        ],
        "ars_nouveau:mycelial_sourcelink": [
            "kubejs:tk3/tier_4/mycelial_sourcelink"
        ],
        "ars_nouveau:relay": [
            "kubejs:tk3/tier_4/relay"
        ],
        "ars_nouveau:relay_collector": [
            "kubejs:tk3/tier_4/relay_collector"
        ],
        "ars_nouveau:relay_deposit": [
            "kubejs:tk3/tier_4/relay_deposit"
        ],
        "ars_nouveau:relay_splitter": [
            "kubejs:tk3/tier_4/relay_splitter"
        ],
        "ars_nouveau:starbuncle_charm": [
            "kubejs:tk3/tier_4/starbuncle_charm"
        ],
        "ars_nouveau:whirlisprig_charm": [
            "kubejs:tk3/tier_4/whirlisprig_charm"
        ],
        "ars_nouveau:wixie_charm": [
            "kubejs:tk3/tier_4/wixie_charm"
        ],
        "betterend:diamond_hammer": [
            "kubejs:tk3/addons/betterend_diamond_hammer"
        ],
        "cataclysm_spellbooks:hellfire_forge": [
            "kubejs:tk3/addons/cataclysm_spellbooks_hellfire_forge"
        ],
        "create:adjustable_chain_gearshift": [
            "kubejs:tk3/tier_1/adjustable_chain_gearshift"
        ],
        "create:analog_lever": [
            "kubejs:tk3/tier_1/analog_lever"
        ],
        "create:andesite_alloy": [
            "kubejs:tk3/tier_1/andesite_alloy",
            "kubejs:tk3/tier_1/andesite_alloy_bulk",
            "kubejs:tk3/create/andesite_alloy_unpacking"
        ],
        "create:andesite_alloy_block": [
            "kubejs:tk3/create/andesite_alloy_block_packing"
        ],
        "create:andesite_casing": [
            "kubejs:tk3/create/andesite_casing_manual",
            "kubejs:tk3/create/andesite_casing_automated"
        ],
        "create:andesite_funnel": [
            "kubejs:tk3/tier_1/andesite_funnel"
        ],
        "create:andesite_tunnel": [
            "kubejs:tk3/tier_1/andesite_tunnel"
        ],
        "create:attribute_filter": [
            "kubejs:tk3/create/attribute_filter",
            "kubejs:tk3/create/attribute_filter_clear"
        ],
        "create:basin": [
            "kubejs:tk3/tier_1/basin"
        ],
        "create:belt_connector": [
            "kubejs:tk3/tier_1/belt_connector"
        ],
        "create:brass_block": [
            "kubejs:tk3/create/brass_block_packing"
        ],
        "create:brass_casing": [
            "kubejs:tk3/create/brass_casing_manual",
            "kubejs:tk3/create/brass_casing_automated"
        ],
        "create:brass_funnel": [
            "kubejs:tk3/tier_3/brass_funnel"
        ],
        "create:brass_hand": [
            "kubejs:tk3/create/brass_hand"
        ],
        "create:brass_ingot": [
            "kubejs:tk3/tier_3/brass_ingot",
            "kubejs:tk3/create/brass_ingot_unpacking",
            "kubejs:tk3/create/brass_ingot_from_nuggets"
        ],
        "create:brass_nugget": [
            "kubejs:tk3/create/brass_nugget_from_ingot"
        ],
        "create:brass_sheet": [
            "kubejs:tk3/create/brass_sheet"
        ],
        "create:brass_tunnel": [
            "kubejs:tk3/tier_3/brass_tunnel"
        ],
        "create:cardboard": [
            "kubejs:tk3/create/cardboard",
            "kubejs:tk3/create/cardboard_unpacking"
        ],
        "create:cardboard_block": [
            "kubejs:tk3/create/cardboard_block"
        ],
        "create:cart_assembler": [
            "kubejs:tk3/tier_1/cart_assembler"
        ],
        "create:chain_conveyor": [
            "kubejs:tk3/create/chain_conveyor"
        ],
        "create:chute": [
            "kubejs:tk3/tier_1/chute"
        ],
        "create:clipboard": [
            "kubejs:tk3/create/crafting_appliances_clipboard",
            "kubejs:tk3/create/clipboard_clear"
        ],
        "create:clockwork_bearing": [
            "kubejs:tk3/create/clockwork_bearing"
        ],
        "create:clutch": [
            "kubejs:tk3/tier_1/clutch"
        ],
        "create:cogwheel": [
            "kubejs:tk3/tier_1/cogwheel"
        ],
        "create:content_observer": [
            "kubejs:tk3/tier_3/content_observer"
        ],
        "create:contraption_controls": [
            "kubejs:tk3/tier_3/contraption_controls"
        ],
        "create:controller_rail": [
            "kubejs:tk3/create/controller_rail"
        ],
        "create:controls": [
            "kubejs:tk3/tier_3/controls"
        ],
        "create:copper_backtank": [
            "kubejs:tk3/tier_2/copper_backtank"
        ],
        "create:copper_casing": [
            "kubejs:tk3/create/copper_casing_manual",
            "kubejs:tk3/create/copper_casing_automated"
        ],
        "create:copper_diving_boots": [
            "kubejs:tk3/create/copper_diving_boots"
        ],
        "create:copper_diving_helmet": [
            "kubejs:tk3/create/copper_diving_helmet"
        ],
        "create:copper_nugget": [
            "kubejs:tk3/geology/milling_veridium",
            "kubejs:tk3/geology/wash_copper",
            "kubejs:tk3/create/copper_nugget_from_ingot"
        ],
        "create:copper_sheet": [
            "kubejs:tk3/create/copper_sheet"
        ],
        "create:copper_valve_handle": [
            "kubejs:tk3/tier_2/copper_valve_handle"
        ],
        "create:crafter_slot_cover": [
            "kubejs:tk3/create/crafter_slot_cover"
        ],
        "create:crafting_blueprint": [
            "kubejs:tk3/create/crafting_appliances_crafting_blueprint"
        ],
        "create:crushing_wheel": [
            "kubejs:tk3/frames/create_crushing_wheel"
        ],
        "create:cuckoo_clock": [
            "kubejs:tk3/create/crafting_kinetics_cuckoo_clock"
        ],
        "create:deployer": [
            "kubejs:tk3/tier_1/deployer"
        ],
        "create:depot": [
            "kubejs:tk3/tier_1/depot"
        ],
        "create:desk_bell": [
            "kubejs:tk3/create/crafting_logistics_desk_bell"
        ],
        "create:display_board": [
            "kubejs:tk3/tier_3/display_board"
        ],
        "create:display_link": [
            "kubejs:tk3/tier_3/display_link"
        ],
        "create:dough": [
            "kubejs:tk3/create/crafting_appliances_dough",
            "kubejs:tk3/create/dough_bulk"
        ],
        "create:electron_tube": [
            "kubejs:tk3/create/electron_tube",
            "kubejs:tk3/create/electron_tube_automated"
        ],
        "create:elevator_pulley": [
            "kubejs:tk3/tier_3/elevator_pulley"
        ],
        "create:empty_blaze_burner": [
            "kubejs:tk3/create/empty_blaze_burner"
        ],
        "create:empty_schematic": [
            "kubejs:tk3/create/crafting_schematics_empty_schematic"
        ],
        "create:encased_chain_drive": [
            "kubejs:tk3/tier_1/encased_chain_drive"
        ],
        "create:encased_fan": [
            "kubejs:tk3/tier_1/encased_fan"
        ],
        "create:factory_gauge": [
            "kubejs:tk3/create/factory_gauge",
            "kubejs:tk3/create/factory_gauge_clear"
        ],
        "create:filter": [
            "kubejs:tk3/create/filter",
            "kubejs:tk3/create/filter_clear"
        ],
        "create:fluid_pipe": [
            "kubejs:tk3/tier_2/fluid_pipe"
        ],
        "create:fluid_tank": [
            "kubejs:tk3/tier_2/fluid_tank"
        ],
        "create:fluid_valve": [
            "kubejs:tk3/tier_2/fluid_valve"
        ],
        "create:flywheel": [
            "kubejs:tk3/create/flywheel"
        ],
        "create:gantry_carriage": [
            "kubejs:tk3/tier_1/gantry_carriage"
        ],
        "create:gantry_shaft": [
            "kubejs:tk3/create/gantry_shaft"
        ],
        "create:gearbox": [
            "kubejs:tk3/tier_1/gearbox",
            "kubejs:tk3/create/gearbox_conversion"
        ],
        "create:gearshift": [
            "kubejs:tk3/tier_1/gearshift"
        ],
        "create:goggles": [
            "kubejs:tk3/create/goggles"
        ],
        "create:golden_sheet": [
            "kubejs:tk3/create/golden_sheet"
        ],
        "create:hand_crank": [
            "kubejs:tk3/create/hand_crank"
        ],
        "create:hose_pulley": [
            "kubejs:tk3/tier_2/hose_pulley"
        ],
        "create:iron_sheet": [
            "kubejs:tk3/create/iron_sheet"
        ],
        "create:item_drain": [
            "kubejs:tk3/tier_2/item_drain"
        ],
        "create:item_hatch": [
            "kubejs:tk3/create/item_hatch"
        ],
        "create:item_vault": [
            "kubejs:tk3/create/item_vault"
        ],
        "create:large_cogwheel": [
            "kubejs:tk3/tier_1/large_cogwheel"
        ],
        "create:large_water_wheel": [
            "kubejs:tk3/tier_1/large_water_wheel"
        ],
        "create:linear_chassis": [
            "kubejs:tk3/tier_1/linear_chassis",
            "kubejs:tk3/create/linear_chassis_conversion"
        ],
        "create:linked_controller": [
            "kubejs:tk3/create/linked_controller"
        ],
        "create:mechanical_arm": [
            "kubejs:tk3/tier_3/mechanical_arm"
        ],
        "create:mechanical_bearing": [
            "kubejs:tk3/tier_1/mechanical_bearing"
        ],
        "create:mechanical_crafter": [
            "kubejs:tk3/tier_3/mechanical_crafter"
        ],
        "create:mechanical_drill": [
            "kubejs:tk3/tier_1/mechanical_drill"
        ],
        "create:mechanical_harvester": [
            "kubejs:tk3/tier_1/mechanical_harvester"
        ],
        "create:mechanical_mixer": [
            "kubejs:tk3/tier_1/mechanical_mixer"
        ],
        "create:mechanical_piston": [
            "kubejs:tk3/tier_1/mechanical_piston",
            "kubejs:tk3/create/piston_unstick"
        ],
        "create:mechanical_plough": [
            "kubejs:tk3/tier_1/mechanical_plough"
        ],
        "create:mechanical_press": [
            "kubejs:tk3/tier_1/mechanical_press"
        ],
        "create:mechanical_pump": [
            "kubejs:tk3/tier_2/mechanical_pump"
        ],
        "create:mechanical_roller": [
            "kubejs:tk3/create/mechanical_roller"
        ],
        "create:mechanical_saw": [
            "kubejs:tk3/tier_1/mechanical_saw"
        ],
        "create:metal_bracket": [
            "kubejs:tk3/create/metal_bracket"
        ],
        "create:metal_girder": [
            "kubejs:tk3/create/metal_girder"
        ],
        "create:millstone": [
            "kubejs:tk3/frames/create_millstone"
        ],
        "create:minecart_coupling": [
            "kubejs:tk3/create/minecart_coupling"
        ],
        "create:nixie_tube": [
            "kubejs:tk3/create/nixie_tube"
        ],
        "create:nozzle": [
            "kubejs:tk3/create/nozzle"
        ],
        "create:package_filter": [
            "kubejs:tk3/create/package_filter",
            "kubejs:tk3/create/package_filter_clear"
        ],
        "create:package_frogport": [
            "kubejs:tk3/tier_3/package_frogport"
        ],
        "create:packager": [
            "kubejs:tk3/tier_3/packager"
        ],
        "create:peculiar_bell": [
            "kubejs:tk3/create/crafting_curiosities_peculiar_bell"
        ],
        "create:piston_extension_pole": [
            "kubejs:tk3/create/piston_extension_pole"
        ],
        "create:placard": [
            "kubejs:tk3/create/crafting_kinetics_placard"
        ],
        "create:polished_rose_quartz": [
            "kubejs:tk3/create/polished_rose_quartz"
        ],
        "create:portable_fluid_interface": [
            "kubejs:tk3/tier_2/portable_fluid_interface"
        ],
        "create:portable_storage_interface": [
            "kubejs:tk3/tier_1/portable_storage_interface"
        ],
        "create:powered_latch": [
            "kubejs:tk3/create/powered_latch"
        ],
        "create:powered_toggle_latch": [
            "kubejs:tk3/create/powered_toggle_latch"
        ],
        "create:precision_mechanism": [
            "kubejs:tk3/tier_3/precision_mechanism"
        ],
        "create:propeller": [
            "kubejs:tk3/tier_1/propeller"
        ],
        "create:pulse_extender": [
            "kubejs:tk3/create/pulse_extender"
        ],
        "create:pulse_repeater": [
            "kubejs:tk3/create/pulse_repeater"
        ],
        "create:pulse_timer": [
            "kubejs:tk3/create/pulse_timer"
        ],
        "create:radial_chassis": [
            "kubejs:tk3/tier_1/radial_chassis"
        ],
        "create:red_sand_paper": [
            "kubejs:tk3/create/red_sand_paper"
        ],
        "create:redstone_contact": [
            "kubejs:tk3/create/redstone_contact"
        ],
        "create:redstone_link": [
            "kubejs:tk3/tier_3/redstone_link"
        ],
        "create:redstone_requester": [
            "kubejs:tk3/create/redstone_requester",
            "kubejs:tk3/create/redstone_requester_clear"
        ],
        "create:repackager": [
            "kubejs:tk3/tier_3/repackager"
        ],
        "create:rope_pulley": [
            "kubejs:tk3/tier_1/rope_pulley"
        ],
        "create:rose_quartz": [
            "kubejs:tk3/create/rose_quartz_bulk",
            "kubejs:tk3/create/rose_quartz"
        ],
        "create:rose_quartz_lamp": [
            "kubejs:tk3/create/rose_quartz_lamp"
        ],
        "create:rotation_speed_controller": [
            "kubejs:tk3/tier_3/rotation_speed_controller"
        ],
        "create:sail_frame": [
            "kubejs:tk3/create/sail_frame"
        ],
        "create:sand_paper": [
            "kubejs:tk3/create/sand_paper"
        ],
        "create:schedule": [
            "kubejs:tk3/create/schedule",
            "kubejs:tk3/create/schedule_clear"
        ],
        "create:schematic_and_quill": [
            "kubejs:tk3/create/crafting_schematics_schematic_and_quill"
        ],
        "create:schematic_table": [
            "kubejs:tk3/create/crafting_schematics_schematic_table"
        ],
        "create:schematicannon": [
            "kubejs:tk3/create/schematicannon"
        ],
        "create:secondary_linear_chassis": [
            "kubejs:tk3/create/secondary_linear_chassis_conversion"
        ],
        "create:sequenced_gearshift": [
            "kubejs:tk3/tier_3/sequenced_gearshift"
        ],
        "create:shaft": [
            "kubejs:tk3/tier_1/shaft"
        ],
        "create:smart_chute": [
            "kubejs:tk3/tier_3/smart_chute"
        ],
        "create:smart_fluid_pipe": [
            "kubejs:tk3/tier_3/smart_fluid_pipe"
        ],
        "create:speedometer": [
            "kubejs:tk3/tier_1/speedometer",
            "kubejs:tk3/create/speedometer_conversion"
        ],
        "create:spout": [
            "kubejs:tk3/tier_2/spout"
        ],
        "create:steam_engine": [
            "kubejs:tk3/tier_2/steam_engine"
        ],
        "create:steam_whistle": [
            "kubejs:tk3/tier_2/steam_whistle"
        ],
        "create:sticker": [
            "kubejs:tk3/create/sticker"
        ],
        "create:sticky_mechanical_piston": [
            "kubejs:tk3/create/sticky_mechanical_piston"
        ],
        "create:stock_link": [
            "kubejs:tk3/tier_3/stock_link",
            "kubejs:tk3/create/stock_link_clear"
        ],
        "create:stock_ticker": [
            "kubejs:tk3/tier_3/stock_ticker",
            "kubejs:tk3/create/stock_ticker_clear"
        ],
        "create:stockpile_switch": [
            "kubejs:tk3/tier_3/stockpile_switch"
        ],
        "create:stressometer": [
            "kubejs:tk3/create/stressometer_conversion"
        ],
        "create:super_glue": [
            "kubejs:tk3/create/super_glue"
        ],
        "create:track": [
            "kubejs:tk3/create/track"
        ],
        "create:track_observer": [
            "kubejs:tk3/tier_3/track_observer"
        ],
        "create:track_signal": [
            "kubejs:tk3/tier_3/track_signal"
        ],
        "create:track_station": [
            "kubejs:tk3/tier_3/track_station"
        ],
        "create:transmitter": [
            "kubejs:tk3/create/transmitter"
        ],
        "create:tree_fertilizer": [
            "kubejs:tk3/create/tree_fertilizer"
        ],
        "create:turntable": [
            "kubejs:tk3/create/turntable"
        ],
        "create:vertical_gearbox": [
            "kubejs:tk3/tier_1/vertical_gearbox",
            "kubejs:tk3/create/vertical_gearbox_conversion"
        ],
        "create:water_wheel": [
            "kubejs:tk3/tier_1/water_wheel"
        ],
        "create:weighted_ejector": [
            "kubejs:tk3/tier_1/weighted_ejector"
        ],
        "create:whisk": [
            "kubejs:tk3/create/whisk"
        ],
        "create:white_sail": [
            "kubejs:tk3/create/white_sail",
            "kubejs:tk3/create/sail_from_frame"
        ],
        "create:windmill_bearing": [
            "kubejs:tk3/tier_1/windmill_bearing"
        ],
        "create:wooden_bracket": [
            "kubejs:tk3/create/wooden_bracket"
        ],
        "create:wrench": [
            "kubejs:tk3/create/wrench"
        ],
        "create:zinc_block": [
            "kubejs:tk3/create/zinc_block_packing"
        ],
        "create:zinc_ingot": [
            "kubejs:tk3/create/zinc_ingot_unpacking",
            "kubejs:tk3/create/zinc_ingot_from_nuggets",
            "kubejs:tk3/create/zinc_smelting_raw_ore",
            "kubejs:tk3/create/zinc_smelting_ore",
            "kubejs:tk3/create/zinc_smelting_crushed",
            "kubejs:tk3/create/zinc_blasting_raw_ore",
            "kubejs:tk3/create/zinc_blasting_ore",
            "kubejs:tk3/create/zinc_blasting_crushed"
        ],
        "create:zinc_nugget": [
            "kubejs:tk3/geology/milling_asurine",
            "kubejs:tk3/geology/wash_zinc",
            "kubejs:tk3/create/zinc_nugget_from_ingot"
        ],
        "create_enchantment_industry:blaze_enchanter": [
            "kubejs:tk3/tier_4/blaze_enchanter"
        ],
        "create_enchantment_industry:blaze_forger": [
            "kubejs:tk3/addons/create_enchantment_industry_blaze_forger"
        ],
        "create_enchantment_industry:brass_bookshelf": [
            "kubejs:tk3/addons/create_enchantment_industry_sequenced_assembly_brass_bookshelf"
        ],
        "create_enchantment_industry:experience_hatch": [
            "kubejs:tk3/addons/create_enchantment_industry_experience_hatch"
        ],
        "create_enchantment_industry:experience_lantern": [
            "kubejs:tk3/addons/create_enchantment_industry_crafting_experience_lantern"
        ],
        "create_enchantment_industry:gem_cutter": [
            "kubejs:tk3/addons/create_enchantment_industry_crafting_gem_cutter"
        ],
        "create_enchantment_industry:grindstone_drain": [
            "kubejs:tk3/tier_3/grindstone_drain"
        ],
        "create_enchantment_industry:infuser": [
            "kubejs:tk3/addons/create_enchantment_industry_crafting_infuser"
        ],
        "create_enchantment_industry:mechanical_grindstone": [
            "kubejs:tk3/addons/create_enchantment_industry_crafting_mechanical_grindstone"
        ],
        "create_enchantment_industry:printer": [
            "kubejs:tk3/tier_3/printer"
        ],
        "create_wizardry:arcane_casing": [
            "kubejs:tk3/frames/arcane_casing"
        ],
        "create_wizardry:arcane_pipe": [
            "kubejs:tk3/addons/create_wizardry_arcane_pipe_from_pipe",
            "kubejs:tk3/addons/create_wizardry_arcane_pipe_vertical",
            "kubejs:tk3/addons/create_wizardry_arcane_pipe",
            "kubejs:tk3/addons/create_wizardry_item_application_arcane_pipe",
            "kubejs:tk3/addons/create_wizardry_deploying_arcane_pipe"
        ],
        "create_wizardry:arcane_pump": [
            "kubejs:tk3/addons/create_wizardry_arcane_pump_from_pump",
            "kubejs:tk3/addons/create_wizardry_arcane_pump",
            "kubejs:tk3/addons/create_wizardry_item_application_arcane_pump",
            "kubejs:tk3/addons/create_wizardry_deploying_arcane_pump"
        ],
        "create_wizardry:arcane_sheet": [
            "kubejs:tk3/addons/create_wizardry_pressing_arcane_sheet",
            "kubejs:tk3/addons/create_wizardry_filling_arcane_sheet"
        ],
        "create_wizardry:blaze_caster": [
            "kubejs:tk3/addons/create_wizardry_blaze_caster"
        ],
        "create_wizardry:channeler": [
            "kubejs:tk3/addons/create_wizardry_channeler"
        ],
        "create_wizardry:mana_siphon": [
            "kubejs:tk3/addons/create_wizardry_mana_siphon"
        ],
        "create_wizardry:smart_arcane_pipe": [
            "kubejs:tk3/addons/create_wizardry_smart_arcane_pipe",
            "kubejs:tk3/addons/create_wizardry_item_application_smart_arcane_pipe",
            "kubejs:tk3/addons/create_wizardry_deploying_smart_arcane_pipe"
        ],
        "createaddition:alternator": [
            "kubejs:tk3/tier_5/alternator"
        ],
        "createaddition:capacitor": [
            "kubejs:tk3/tier_2/capacitor"
        ],
        "createaddition:connector": [
            "kubejs:tk3/addons/createaddition_crafting_connector"
        ],
        "createaddition:digital_adapter": [
            "kubejs:tk3/addons/createaddition_crafting_digital_adapter"
        ],
        "createaddition:electric_motor": [
            "kubejs:tk3/tier_5/electric_motor"
        ],
        "createaddition:large_connector": [
            "kubejs:tk3/addons/createaddition_crafting_large_connector"
        ],
        "createaddition:modular_accumulator": [
            "kubejs:tk3/addons/createaddition_crafting_modular_accumulator"
        ],
        "createaddition:portable_energy_interface": [
            "kubejs:tk3/addons/createaddition_crafting_portable_energy_interface"
        ],
        "createaddition:redstone_relay": [
            "kubejs:tk3/addons/createaddition_crafting_redstone_relay"
        ],
        "createaddition:rolling_mill": [
            "kubejs:tk3/tier_2/rolling_mill"
        ],
        "createaddition:tesla_coil": [
            "kubejs:tk3/addons/createaddition_mechanical_crafting_tesla_coil"
        ],
        "createminecolonies:colony_warehouse_stock_link": [
            "kubejs:tk3/addons/createminecolonies_colony_warehouse_stock_link"
        ],
        "endrem:corrupted_eye": [
            "kubejs:tk3/campaign/corrupted_eye"
        ],
        "endrem:cryptic_eye": [
            "kubejs:tk3/campaign/cryptic_eye"
        ],
        "endrem:magical_eye": [
            "kubejs:tk3/campaign/magical_eye"
        ],
        "endrem:nether_eye": [
            "kubejs:tk3/campaign/nether_eye"
        ],
        "farmersdelight:diamond_knife": [
            "kubejs:tk3/addons/farmersdelight_diamond_knife"
        ],
        "irons_spellbooks:alchemist_cauldron": [
            "kubejs:tk3/tier_4/alchemist_cauldron"
        ],
        "irons_spellbooks:arcane_anvil": [
            "kubejs:tk3/tier_4/arcane_anvil"
        ],
        "irons_spellbooks:arcane_essence": [
            "kubejs:tk3/tier_4/arcane_essence"
        ],
        "irons_spellbooks:arcane_ingot": [
            "kubejs:tk3/magic/irons_spellbooks_arcane_ingot"
        ],
        "irons_spellbooks:blank_rune": [
            "kubejs:tk3/magic/irons_spellbooks_blank_rune"
        ],
        "irons_spellbooks:common_ink": [
            "kubejs:tk3/tier_4/common_ink",
            "kubejs:tk3/magic/mana_ink",
            "kubejs:tk3/magic/bottle_common_ink"
        ],
        "irons_spellbooks:fire_rune": [
            "kubejs:tk3/magic/irons_spellbooks_fire_rune"
        ],
        "irons_spellbooks:ice_rune": [
            "kubejs:tk3/magic/irons_spellbooks_ice_rune"
        ],
        "irons_spellbooks:lightning_rune": [
            "kubejs:tk3/magic/irons_spellbooks_lightning_rune"
        ],
        "irons_spellbooks:magic_cloth": [
            "kubejs:tk3/magic/irons_spellbooks_magic_cloth"
        ],
        "irons_spellbooks:nature_rune": [
            "kubejs:tk3/magic/irons_spellbooks_nature_rune"
        ],
        "kubejs:tk3_arcane_machine": [
            "kubejs:tk3/frames/arcane_calibration"
        ],
        "kubejs:tk3_arcane_mechanism": [
            "kubejs:tk3/tier_4/tk3_arcane_mechanism"
        ],
        "kubejs:tk3_containment_frame": [
            "kubejs:tk3/campaign/frame_8"
        ],
        "kubejs:tk3_containment_mechanism": [
            "kubejs:tk3/campaign/containment_mechanism"
        ],
        "kubejs:tk3_expedition_frame": [
            "kubejs:tk3/campaign/frame_7"
        ],
        "kubejs:tk3_expedition_mechanism": [
            "kubejs:tk3/campaign/expedition_mechanism"
        ],
        "kubejs:tk3_hydraulic_machine": [
            "kubejs:tk3/frames/hydraulic_assembly"
        ],
        "kubejs:tk3_kinetic_machine": [
            "kubejs:tk3/frames/kinetic_manual",
            "kubejs:tk3/frames/kinetic_automated"
        ],
        "kubejs:tk3_network_chassis": [
            "kubejs:tk3/campaign/frame_6"
        ],
        "kubejs:tk3_network_mechanism": [
            "kubejs:tk3/campaign/network_mechanism"
        ],
        "kubejs:tk3_precision_machine": [
            "kubejs:tk3/frames/precision_assembly"
        ],
        "kubejs:tk3_rotation_mechanism": [
            "kubejs:tk3/tier_1/rotation_mechanism_automated"
        ],
        "kubejs:tk3_sealed_mechanism": [
            "kubejs:tk3/tier_2/tk3_sealed_mechanism"
        ],
        "kubejs:tk3_singularity_frame": [
            "kubejs:tk3/campaign/frame_9"
        ],
        "kubejs:tk3_singularity_mechanism": [
            "kubejs:tk3/campaign/singularity_mechanism"
        ],
        "kubejs:tk3_sovereign_core": [
            "kubejs:tk3/campaign/frame_10"
        ],
        "kubejs:tk3_sovereign_keystone": [
            "kubejs:tk3/campaign/sovereign_keystone"
        ],
        "kubejs:tk3_sovereign_mechanism": [
            "kubejs:tk3/campaign/sovereign_mechanism"
        ],
        "mekanism:advanced_bin": [
            "kubejs:tk3/industrial/mekanism_bin_advanced"
        ],
        "mekanism:advanced_chemical_tank": [
            "kubejs:tk3/industrial/mekanism_chemical_tank_advanced"
        ],
        "mekanism:advanced_combining_factory": [
            "kubejs:tk3/industrial/mekanism_factory_advanced_combining"
        ],
        "mekanism:advanced_compressing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_advanced_compressing"
        ],
        "mekanism:advanced_control_circuit": [
            "kubejs:tk3/industrial/mekanism_control_circuit_advanced",
            "kubejs:tk3/industrial/mekanism_control_circuit_infused_advanced"
        ],
        "mekanism:advanced_crushing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_advanced_crushing"
        ],
        "mekanism:advanced_energy_cube": [
            "kubejs:tk3/industrial/mekanism_energy_cube_advanced"
        ],
        "mekanism:advanced_enriching_factory": [
            "kubejs:tk3/industrial/mekanism_factory_advanced_enriching"
        ],
        "mekanism:advanced_fluid_tank": [
            "kubejs:tk3/industrial/mekanism_fluid_tank_advanced"
        ],
        "mekanism:advanced_induction_cell": [
            "kubejs:tk3/industrial/mekanism_induction_cell_advanced"
        ],
        "mekanism:advanced_induction_provider": [
            "kubejs:tk3/industrial/mekanism_induction_provider_advanced"
        ],
        "mekanism:advanced_infusing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_advanced_infusing"
        ],
        "mekanism:advanced_injecting_factory": [
            "kubejs:tk3/industrial/mekanism_factory_advanced_injecting"
        ],
        "mekanism:advanced_logistical_transporter": [
            "kubejs:tk3/industrial/mekanism_transmitter_logistical_transporter_advanced"
        ],
        "mekanism:advanced_mechanical_pipe": [
            "kubejs:tk3/industrial/mekanism_transmitter_mechanical_pipe_advanced"
        ],
        "mekanism:advanced_pressurized_tube": [
            "kubejs:tk3/industrial/mekanism_transmitter_pressurized_tube_advanced"
        ],
        "mekanism:advanced_purifying_factory": [
            "kubejs:tk3/industrial/mekanism_factory_advanced_purifying"
        ],
        "mekanism:advanced_sawing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_advanced_sawing"
        ],
        "mekanism:advanced_smelting_factory": [
            "kubejs:tk3/industrial/mekanism_factory_advanced_smelting"
        ],
        "mekanism:advanced_thermodynamic_conductor": [
            "kubejs:tk3/industrial/mekanism_transmitter_thermodynamic_conductor_advanced"
        ],
        "mekanism:advanced_tier_installer": [
            "kubejs:tk3/industrial/mekanism_tier_installer_advanced"
        ],
        "mekanism:advanced_universal_cable": [
            "kubejs:tk3/industrial/mekanism_transmitter_universal_cable_advanced"
        ],
        "mekanism:alloy_atomic": [
            "kubejs:tk3/industrial/mekanism_metallurgic_infusing_alloy_atomic"
        ],
        "mekanism:alloy_reinforced": [
            "kubejs:tk3/industrial/mekanism_metallurgic_infusing_alloy_reinforced"
        ],
        "mekanism:antiprotonic_nucleosynthesizer": [
            "kubejs:tk3/industrial/mekanism_antiprotonic_nucleosynthesizer"
        ],
        "mekanism:basic_bin": [
            "kubejs:tk3/industrial/mekanism_bin_basic"
        ],
        "mekanism:basic_chemical_tank": [
            "kubejs:tk3/industrial/mekanism_chemical_tank_basic"
        ],
        "mekanism:basic_combining_factory": [
            "kubejs:tk3/industrial/mekanism_factory_basic_combining"
        ],
        "mekanism:basic_compressing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_basic_compressing"
        ],
        "mekanism:basic_crushing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_basic_crushing"
        ],
        "mekanism:basic_energy_cube": [
            "kubejs:tk3/tier_5/basic_energy_cube"
        ],
        "mekanism:basic_enriching_factory": [
            "kubejs:tk3/industrial/mekanism_factory_basic_enriching"
        ],
        "mekanism:basic_fluid_tank": [
            "kubejs:tk3/industrial/mekanism_fluid_tank_basic"
        ],
        "mekanism:basic_induction_cell": [
            "kubejs:tk3/industrial/mekanism_induction_cell_basic"
        ],
        "mekanism:basic_induction_provider": [
            "kubejs:tk3/industrial/mekanism_induction_provider_basic"
        ],
        "mekanism:basic_infusing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_basic_infusing"
        ],
        "mekanism:basic_injecting_factory": [
            "kubejs:tk3/industrial/mekanism_factory_basic_injecting"
        ],
        "mekanism:basic_logistical_transporter": [
            "kubejs:tk3/tier_5/basic_logistical_transporter"
        ],
        "mekanism:basic_mechanical_pipe": [
            "kubejs:tk3/tier_5/basic_mechanical_pipe"
        ],
        "mekanism:basic_pressurized_tube": [
            "kubejs:tk3/industrial/mekanism_transmitter_pressurized_tube_basic"
        ],
        "mekanism:basic_purifying_factory": [
            "kubejs:tk3/industrial/mekanism_factory_basic_purifying"
        ],
        "mekanism:basic_sawing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_basic_sawing"
        ],
        "mekanism:basic_smelting_factory": [
            "kubejs:tk3/industrial/mekanism_factory_basic_smelting"
        ],
        "mekanism:basic_thermodynamic_conductor": [
            "kubejs:tk3/industrial/mekanism_transmitter_thermodynamic_conductor_basic"
        ],
        "mekanism:basic_tier_installer": [
            "kubejs:tk3/industrial/mekanism_tier_installer_basic"
        ],
        "mekanism:basic_universal_cable": [
            "kubejs:tk3/tier_5/basic_universal_cable"
        ],
        "mekanism:boiler_casing": [
            "kubejs:tk3/industrial/mekanism_boiler_casing"
        ],
        "mekanism:boiler_valve": [
            "kubejs:tk3/industrial/mekanism_boiler_valve"
        ],
        "mekanism:cardboard_box": [
            "kubejs:tk3/industrial/mekanism_cardboard_box"
        ],
        "mekanism:chargepad": [
            "kubejs:tk3/industrial/mekanism_chargepad"
        ],
        "mekanism:chemical_crystallizer": [
            "kubejs:tk3/industrial/mekanism_chemical_crystallizer"
        ],
        "mekanism:chemical_dissolution_chamber": [
            "kubejs:tk3/industrial/mekanism_chemical_dissolution_chamber"
        ],
        "mekanism:chemical_infuser": [
            "kubejs:tk3/industrial/mekanism_chemical_infuser"
        ],
        "mekanism:chemical_injection_chamber": [
            "kubejs:tk3/industrial/mekanism_chemical_injection_chamber"
        ],
        "mekanism:chemical_oxidizer": [
            "kubejs:tk3/industrial/mekanism_chemical_oxidizer"
        ],
        "mekanism:chemical_washer": [
            "kubejs:tk3/industrial/mekanism_chemical_washer"
        ],
        "mekanism:combiner": [
            "kubejs:tk3/industrial/mekanism_combiner"
        ],
        "mekanism:crusher": [
            "kubejs:tk3/tier_5/crusher"
        ],
        "mekanism:deepslate_fluorite_ore": [
            "kubejs:tk3/industrial/mekanism_processing_fluorite_to_deepslate_ore"
        ],
        "mekanism:deepslate_lead_ore": [
            "kubejs:tk3/industrial/mekanism_processing_lead_ore_deepslate_from_raw"
        ],
        "mekanism:deepslate_osmium_ore": [
            "kubejs:tk3/industrial/mekanism_processing_osmium_ore_deepslate_from_raw"
        ],
        "mekanism:deepslate_tin_ore": [
            "kubejs:tk3/industrial/mekanism_processing_tin_ore_deepslate_from_raw"
        ],
        "mekanism:deepslate_uranium_ore": [
            "kubejs:tk3/industrial/mekanism_processing_uranium_ore_deepslate_from_raw"
        ],
        "mekanism:digital_miner": [
            "kubejs:tk3/industrial/mekanism_digital_miner"
        ],
        "mekanism:dimensional_stabilizer": [
            "kubejs:tk3/industrial/mekanism_dimensional_stabilizer"
        ],
        "mekanism:diversion_transporter": [
            "kubejs:tk3/industrial/mekanism_transmitter_diversion_transporter"
        ],
        "mekanism:dust_refined_obsidian": [
            "kubejs:tk3/industrial/mekanism_processing_refined_obsidian_dust_from_ingot",
            "kubejs:tk3/industrial/mekanism_processing_refined_obsidian_dust_from_obsidian_dust"
        ],
        "mekanism:dynamic_tank": [
            "kubejs:tk3/industrial/mekanism_dynamic_tank"
        ],
        "mekanism:dynamic_valve": [
            "kubejs:tk3/industrial/mekanism_dynamic_valve"
        ],
        "mekanism:electric_pump": [
            "kubejs:tk3/industrial/mekanism_electric_pump"
        ],
        "mekanism:electrolytic_separator": [
            "kubejs:tk3/industrial/mekanism_electrolytic_separator"
        ],
        "mekanism:elite_bin": [
            "kubejs:tk3/industrial/mekanism_bin_elite"
        ],
        "mekanism:elite_chemical_tank": [
            "kubejs:tk3/industrial/mekanism_chemical_tank_elite"
        ],
        "mekanism:elite_combining_factory": [
            "kubejs:tk3/industrial/mekanism_factory_elite_combining"
        ],
        "mekanism:elite_compressing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_elite_compressing"
        ],
        "mekanism:elite_control_circuit": [
            "kubejs:tk3/industrial/mekanism_control_circuit_elite",
            "kubejs:tk3/industrial/mekanism_control_circuit_infused_elite"
        ],
        "mekanism:elite_crushing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_elite_crushing"
        ],
        "mekanism:elite_energy_cube": [
            "kubejs:tk3/industrial/mekanism_energy_cube_elite"
        ],
        "mekanism:elite_enriching_factory": [
            "kubejs:tk3/industrial/mekanism_factory_elite_enriching"
        ],
        "mekanism:elite_fluid_tank": [
            "kubejs:tk3/industrial/mekanism_fluid_tank_elite"
        ],
        "mekanism:elite_induction_cell": [
            "kubejs:tk3/industrial/mekanism_induction_cell_elite"
        ],
        "mekanism:elite_induction_provider": [
            "kubejs:tk3/industrial/mekanism_induction_provider_elite"
        ],
        "mekanism:elite_infusing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_elite_infusing"
        ],
        "mekanism:elite_injecting_factory": [
            "kubejs:tk3/industrial/mekanism_factory_elite_injecting"
        ],
        "mekanism:elite_logistical_transporter": [
            "kubejs:tk3/industrial/mekanism_transmitter_logistical_transporter_elite"
        ],
        "mekanism:elite_mechanical_pipe": [
            "kubejs:tk3/industrial/mekanism_transmitter_mechanical_pipe_elite"
        ],
        "mekanism:elite_pressurized_tube": [
            "kubejs:tk3/industrial/mekanism_transmitter_pressurized_tube_elite"
        ],
        "mekanism:elite_purifying_factory": [
            "kubejs:tk3/industrial/mekanism_factory_elite_purifying"
        ],
        "mekanism:elite_sawing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_elite_sawing"
        ],
        "mekanism:elite_smelting_factory": [
            "kubejs:tk3/industrial/mekanism_factory_elite_smelting"
        ],
        "mekanism:elite_thermodynamic_conductor": [
            "kubejs:tk3/industrial/mekanism_transmitter_thermodynamic_conductor_elite"
        ],
        "mekanism:elite_tier_installer": [
            "kubejs:tk3/industrial/mekanism_tier_installer_elite"
        ],
        "mekanism:elite_universal_cable": [
            "kubejs:tk3/industrial/mekanism_transmitter_universal_cable_elite"
        ],
        "mekanism:energized_smelter": [
            "kubejs:tk3/tier_5/energized_smelter"
        ],
        "mekanism:enrichment_chamber": [
            "kubejs:tk3/tier_5/enrichment_chamber"
        ],
        "mekanism:fluidic_plenisher": [
            "kubejs:tk3/industrial/mekanism_fluidic_plenisher"
        ],
        "mekanism:formulaic_assemblicator": [
            "kubejs:tk3/industrial/mekanism_formulaic_assemblicator"
        ],
        "mekanism:fuelwood_heater": [
            "kubejs:tk3/industrial/mekanism_fuelwood_heater"
        ],
        "mekanism:hdpe_pellet": [
            "kubejs:tk3/industrial/mekanism_reaction_substrate_ethene_oxygen"
        ],
        "mekanism:hdpe_rod": [
            "kubejs:tk3/industrial/mekanism_hdpe_rod"
        ],
        "mekanism:hdpe_sheet": [
            "kubejs:tk3/industrial/mekanism_enriching_hdpe_sheet"
        ],
        "mekanism:induction_casing": [
            "kubejs:tk3/industrial/mekanism_induction_casing"
        ],
        "mekanism:induction_port": [
            "kubejs:tk3/industrial/mekanism_induction_port"
        ],
        "mekanism:industrial_alarm": [
            "kubejs:tk3/industrial/mekanism_industrial_alarm"
        ],
        "mekanism:ingot_refined_glowstone": [
            "kubejs:tk3/industrial/mekanism_processing_refined_glowstone_ingot_from_block",
            "kubejs:tk3/industrial/mekanism_processing_refined_glowstone_ingot_from_dust",
            "kubejs:tk3/industrial/mekanism_processing_refined_glowstone_ingot_from_nuggets"
        ],
        "mekanism:ingot_refined_obsidian": [
            "kubejs:tk3/industrial/mekanism_processing_refined_obsidian_ingot_from_block",
            "kubejs:tk3/industrial/mekanism_processing_refined_obsidian_ingot_from_dust",
            "kubejs:tk3/industrial/mekanism_processing_refined_obsidian_ingot_from_nuggets"
        ],
        "mekanism:ingot_steel": [
            "kubejs:tk3/tier_5/steel_bootstrap",
            "kubejs:tk3/tier_5/steel_from_dust"
        ],
        "mekanism:isotopic_centrifuge": [
            "kubejs:tk3/industrial/mekanism_isotopic_centrifuge"
        ],
        "mekanism:laser": [
            "kubejs:tk3/industrial/mekanism_laser"
        ],
        "mekanism:laser_amplifier": [
            "kubejs:tk3/industrial/mekanism_laser_amplifier"
        ],
        "mekanism:laser_tractor_beam": [
            "kubejs:tk3/industrial/mekanism_laser_tractor_beam"
        ],
        "mekanism:logistical_sorter": [
            "kubejs:tk3/industrial/mekanism_logistical_sorter"
        ],
        "mekanism:meka_tool": [
            "kubejs:tk3/industrial/mekanism_meka_tool"
        ],
        "mekanism:mekasuit_bodyarmor": [
            "kubejs:tk3/industrial/mekanism_mekasuit_bodyarmor"
        ],
        "mekanism:mekasuit_boots": [
            "kubejs:tk3/industrial/mekanism_mekasuit_boots"
        ],
        "mekanism:mekasuit_helmet": [
            "kubejs:tk3/industrial/mekanism_mekasuit_helmet"
        ],
        "mekanism:mekasuit_pants": [
            "kubejs:tk3/industrial/mekanism_mekasuit_pants"
        ],
        "mekanism:metallurgic_infuser": [
            "kubejs:tk3/tier_5/metallurgic_infuser"
        ],
        "mekanism:modification_station": [
            "kubejs:tk3/industrial/mekanism_modification_station"
        ],
        "mekanism:module_attack_amplification_unit": [
            "kubejs:tk3/industrial/mekanism_module_attack_amplification_unit"
        ],
        "mekanism:module_base": [
            "kubejs:tk3/industrial/mekanism_module_base"
        ],
        "mekanism:module_blasting_unit": [
            "kubejs:tk3/industrial/mekanism_module_blasting_unit"
        ],
        "mekanism:module_charge_distribution_unit": [
            "kubejs:tk3/industrial/mekanism_module_charge_distribution_unit"
        ],
        "mekanism:module_color_modulation_unit": [
            "kubejs:tk3/industrial/mekanism_module_color_modulation_unit"
        ],
        "mekanism:module_dosimeter_unit": [
            "kubejs:tk3/industrial/mekanism_module_dosimeter_unit"
        ],
        "mekanism:module_electrolytic_breathing_unit": [
            "kubejs:tk3/industrial/mekanism_module_electrolytic_breathing_unit"
        ],
        "mekanism:module_elytra_unit": [
            "kubejs:tk3/industrial/mekanism_module_elytra_unit"
        ],
        "mekanism:module_energy_unit": [
            "kubejs:tk3/industrial/mekanism_module_energy_unit"
        ],
        "mekanism:module_excavation_escalation_unit": [
            "kubejs:tk3/industrial/mekanism_module_excavation_escalation_unit"
        ],
        "mekanism:module_farming_unit": [
            "kubejs:tk3/industrial/mekanism_module_farming_unit"
        ],
        "mekanism:module_fortune_unit": [
            "kubejs:tk3/industrial/mekanism_module_fortune_unit"
        ],
        "mekanism:module_frost_walker_unit": [
            "kubejs:tk3/industrial/mekanism_module_frost_walker_unit"
        ],
        "mekanism:module_geiger_unit": [
            "kubejs:tk3/industrial/mekanism_module_geiger_unit"
        ],
        "mekanism:module_gravitational_modulating_unit": [
            "kubejs:tk3/industrial/mekanism_module_gravitational_modulating_unit"
        ],
        "mekanism:module_gyroscopic_stabilization_unit": [
            "kubejs:tk3/industrial/mekanism_module_gyroscopic_stabilization_unit"
        ],
        "mekanism:module_hydraulic_propulsion_unit": [
            "kubejs:tk3/industrial/mekanism_module_hydraulic_propulsion_unit"
        ],
        "mekanism:module_hydrostatic_repulsor_unit": [
            "kubejs:tk3/industrial/mekanism_module_hydrostatic_repulsor_unit"
        ],
        "mekanism:module_inhalation_purification_unit": [
            "kubejs:tk3/industrial/mekanism_module_inhalation_purification_unit"
        ],
        "mekanism:module_jetpack_unit": [
            "kubejs:tk3/industrial/mekanism_module_jetpack_unit"
        ],
        "mekanism:module_laser_dissipation_unit": [
            "kubejs:tk3/industrial/mekanism_module_laser_dissipation_unit"
        ],
        "mekanism:module_locomotive_boosting_unit": [
            "kubejs:tk3/industrial/mekanism_module_locomotive_boosting_unit"
        ],
        "mekanism:module_magnetic_attraction_unit": [
            "kubejs:tk3/industrial/mekanism_module_magnetic_attraction_unit"
        ],
        "mekanism:module_motorized_servo_unit": [
            "kubejs:tk3/industrial/mekanism_module_motorized_servo_unit"
        ],
        "mekanism:module_nutritional_injection_unit": [
            "kubejs:tk3/industrial/mekanism_module_nutritional_injection_unit"
        ],
        "mekanism:module_radiation_shielding_unit": [
            "kubejs:tk3/industrial/mekanism_module_radiation_shielding_unit"
        ],
        "mekanism:module_shearing_unit": [
            "kubejs:tk3/industrial/mekanism_module_shearing_unit"
        ],
        "mekanism:module_silk_touch_unit": [
            "kubejs:tk3/industrial/mekanism_module_silk_touch_unit"
        ],
        "mekanism:module_soul_surfer_unit": [
            "kubejs:tk3/industrial/mekanism_module_soul_surfer_unit"
        ],
        "mekanism:module_teleportation_unit": [
            "kubejs:tk3/industrial/mekanism_module_teleportation_unit"
        ],
        "mekanism:module_vein_mining_unit": [
            "kubejs:tk3/industrial/mekanism_module_vein_mining_unit"
        ],
        "mekanism:module_vision_enhancement_unit": [
            "kubejs:tk3/industrial/mekanism_module_vision_enhancement_unit"
        ],
        "mekanism:nutritional_liquifier": [
            "kubejs:tk3/industrial/mekanism_nutritional_liquifier"
        ],
        "mekanism:oredictionificator": [
            "kubejs:tk3/industrial/mekanism_oredictionificator"
        ],
        "mekanism:osmium_compressor": [
            "kubejs:tk3/industrial/mekanism_osmium_compressor"
        ],
        "mekanism:painting_machine": [
            "kubejs:tk3/industrial/mekanism_painting_machine"
        ],
        "mekanism:pellet_antimatter": [
            "kubejs:tk3/industrial/mekanism_processing_lategame_antimatter_pellet_from_gas"
        ],
        "mekanism:pellet_plutonium": [
            "kubejs:tk3/industrial/mekanism_processing_lategame_plutonium_pellet_from_reaction"
        ],
        "mekanism:pellet_polonium": [
            "kubejs:tk3/industrial/mekanism_processing_lategame_polonium_pellet_from_reaction"
        ],
        "mekanism:personal_barrel": [
            "kubejs:tk3/industrial/mekanism_personal_barrel"
        ],
        "mekanism:personal_chest": [
            "kubejs:tk3/industrial/mekanism_personal_chest"
        ],
        "mekanism:pigment_extractor": [
            "kubejs:tk3/industrial/mekanism_pigment_extractor"
        ],
        "mekanism:pigment_mixer": [
            "kubejs:tk3/industrial/mekanism_pigment_mixer"
        ],
        "mekanism:precision_sawmill": [
            "kubejs:tk3/industrial/mekanism_precision_sawmill"
        ],
        "mekanism:pressure_disperser": [
            "kubejs:tk3/industrial/mekanism_pressure_disperser"
        ],
        "mekanism:pressurized_reaction_chamber": [
            "kubejs:tk3/industrial/mekanism_pressurized_reaction_chamber"
        ],
        "mekanism:purification_chamber": [
            "kubejs:tk3/industrial/mekanism_purification_chamber"
        ],
        "mekanism:qio_dashboard": [
            "kubejs:tk3/industrial/mekanism_qio_dashboard"
        ],
        "mekanism:qio_drive_array": [
            "kubejs:tk3/industrial/mekanism_qio_drive_array"
        ],
        "mekanism:qio_drive_base": [
            "kubejs:tk3/industrial/mekanism_qio_drive_base"
        ],
        "mekanism:qio_drive_hyper_dense": [
            "kubejs:tk3/industrial/mekanism_qio_drive_hyper_dense"
        ],
        "mekanism:qio_drive_supermassive": [
            "kubejs:tk3/industrial/mekanism_qio_drive_supermassive"
        ],
        "mekanism:qio_drive_time_dilating": [
            "kubejs:tk3/industrial/mekanism_qio_drive_time_dilating"
        ],
        "mekanism:qio_exporter": [
            "kubejs:tk3/industrial/mekanism_qio_exporter"
        ],
        "mekanism:qio_importer": [
            "kubejs:tk3/industrial/mekanism_qio_importer"
        ],
        "mekanism:qio_redstone_adapter": [
            "kubejs:tk3/industrial/mekanism_qio_redstone_adapter"
        ],
        "mekanism:quantum_entangloporter": [
            "kubejs:tk3/industrial/mekanism_quantum_entangloporter"
        ],
        "mekanism:radioactive_waste_barrel": [
            "kubejs:tk3/industrial/mekanism_radioactive_waste_barrel"
        ],
        "mekanism:resistive_heater": [
            "kubejs:tk3/industrial/mekanism_resistive_heater"
        ],
        "mekanism:restrictive_transporter": [
            "kubejs:tk3/industrial/mekanism_transmitter_restrictive_transporter"
        ],
        "mekanism:rotary_condensentrator": [
            "kubejs:tk3/industrial/mekanism_rotary_condensentrator"
        ],
        "mekanism:security_desk": [
            "kubejs:tk3/industrial/mekanism_security_desk"
        ],
        "mekanism:seismic_vibrator": [
            "kubejs:tk3/industrial/mekanism_seismic_vibrator"
        ],
        "mekanism:solar_neutron_activator": [
            "kubejs:tk3/industrial/mekanism_solar_neutron_activator"
        ],
        "mekanism:sps_casing": [
            "kubejs:tk3/industrial/mekanism_sps_casing"
        ],
        "mekanism:sps_port": [
            "kubejs:tk3/industrial/mekanism_sps_port"
        ],
        "mekanism:steel_casing": [
            "kubejs:tk3/tier_5/steel_casing"
        ],
        "mekanism:structural_glass": [
            "kubejs:tk3/industrial/mekanism_structural_glass"
        ],
        "mekanism:substrate": [
            "kubejs:tk3/industrial/mekanism_reaction_substrate_water_ethene",
            "kubejs:tk3/industrial/mekanism_reaction_substrate_water_hydrogen"
        ],
        "mekanism:supercharged_coil": [
            "kubejs:tk3/industrial/mekanism_supercharged_coil"
        ],
        "mekanism:superheating_element": [
            "kubejs:tk3/industrial/mekanism_superheating_element"
        ],
        "mekanism:teleporter": [
            "kubejs:tk3/industrial/mekanism_teleporter"
        ],
        "mekanism:teleporter_frame": [
            "kubejs:tk3/industrial/mekanism_teleporter_frame"
        ],
        "mekanism:thermal_evaporation_block": [
            "kubejs:tk3/industrial/mekanism_thermal_evaporation_block"
        ],
        "mekanism:thermal_evaporation_controller": [
            "kubejs:tk3/industrial/mekanism_thermal_evaporation_controller"
        ],
        "mekanism:thermal_evaporation_valve": [
            "kubejs:tk3/industrial/mekanism_thermal_evaporation_valve"
        ],
        "mekanism:ultimate_bin": [
            "kubejs:tk3/industrial/mekanism_bin_ultimate"
        ],
        "mekanism:ultimate_chemical_tank": [
            "kubejs:tk3/industrial/mekanism_chemical_tank_ultimate"
        ],
        "mekanism:ultimate_combining_factory": [
            "kubejs:tk3/industrial/mekanism_factory_ultimate_combining"
        ],
        "mekanism:ultimate_compressing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_ultimate_compressing"
        ],
        "mekanism:ultimate_control_circuit": [
            "kubejs:tk3/industrial/mekanism_control_circuit_infused_ultimate",
            "kubejs:tk3/industrial/mekanism_control_circuit_ultimate"
        ],
        "mekanism:ultimate_crushing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_ultimate_crushing"
        ],
        "mekanism:ultimate_energy_cube": [
            "kubejs:tk3/industrial/mekanism_energy_cube_ultimate"
        ],
        "mekanism:ultimate_enriching_factory": [
            "kubejs:tk3/industrial/mekanism_factory_ultimate_enriching"
        ],
        "mekanism:ultimate_fluid_tank": [
            "kubejs:tk3/industrial/mekanism_fluid_tank_ultimate"
        ],
        "mekanism:ultimate_induction_cell": [
            "kubejs:tk3/industrial/mekanism_induction_cell_ultimate"
        ],
        "mekanism:ultimate_induction_provider": [
            "kubejs:tk3/industrial/mekanism_induction_provider_ultimate"
        ],
        "mekanism:ultimate_infusing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_ultimate_infusing"
        ],
        "mekanism:ultimate_injecting_factory": [
            "kubejs:tk3/industrial/mekanism_factory_ultimate_injecting"
        ],
        "mekanism:ultimate_logistical_transporter": [
            "kubejs:tk3/industrial/mekanism_transmitter_logistical_transporter_ultimate"
        ],
        "mekanism:ultimate_mechanical_pipe": [
            "kubejs:tk3/industrial/mekanism_transmitter_mechanical_pipe_ultimate"
        ],
        "mekanism:ultimate_pressurized_tube": [
            "kubejs:tk3/industrial/mekanism_transmitter_pressurized_tube_ultimate"
        ],
        "mekanism:ultimate_purifying_factory": [
            "kubejs:tk3/industrial/mekanism_factory_ultimate_purifying"
        ],
        "mekanism:ultimate_sawing_factory": [
            "kubejs:tk3/industrial/mekanism_factory_ultimate_sawing"
        ],
        "mekanism:ultimate_smelting_factory": [
            "kubejs:tk3/industrial/mekanism_factory_ultimate_smelting"
        ],
        "mekanism:ultimate_thermodynamic_conductor": [
            "kubejs:tk3/industrial/mekanism_transmitter_thermodynamic_conductor_ultimate"
        ],
        "mekanism:ultimate_tier_installer": [
            "kubejs:tk3/industrial/mekanism_tier_installer_ultimate"
        ],
        "mekanism:ultimate_universal_cable": [
            "kubejs:tk3/industrial/mekanism_transmitter_universal_cable_ultimate"
        ],
        "mekanismgenerators:advanced_solar_generator": [
            "kubejs:tk3/industrial/mekanismgenerators_advanced_solar_generator"
        ],
        "mekanismgenerators:bio_generator": [
            "kubejs:tk3/industrial/mekanismgenerators_bio_generator"
        ],
        "mekanismgenerators:control_rod_assembly": [
            "kubejs:tk3/industrial/mekanismgenerators_control_rod_assembly"
        ],
        "mekanismgenerators:electromagnetic_coil": [
            "kubejs:tk3/industrial/mekanismgenerators_electromagnetic_coil"
        ],
        "mekanismgenerators:fission_fuel_assembly": [
            "kubejs:tk3/industrial/mekanismgenerators_fission_fuel_assembly"
        ],
        "mekanismgenerators:fission_reactor_casing": [
            "kubejs:tk3/industrial/mekanismgenerators_fission_reactor_casing"
        ],
        "mekanismgenerators:fission_reactor_logic_adapter": [
            "kubejs:tk3/industrial/mekanismgenerators_fission_reactor_logic_adapter"
        ],
        "mekanismgenerators:fission_reactor_port": [
            "kubejs:tk3/industrial/mekanismgenerators_fission_reactor_port"
        ],
        "mekanismgenerators:fusion_reactor_controller": [
            "kubejs:tk3/industrial/mekanismgenerators_fusion_reactor_controller"
        ],
        "mekanismgenerators:fusion_reactor_frame": [
            "kubejs:tk3/industrial/mekanismgenerators_fusion_reactor_frame"
        ],
        "mekanismgenerators:fusion_reactor_logic_adapter": [
            "kubejs:tk3/industrial/mekanismgenerators_fusion_reactor_logic_adapter"
        ],
        "mekanismgenerators:fusion_reactor_port": [
            "kubejs:tk3/industrial/mekanismgenerators_fusion_reactor_port"
        ],
        "mekanismgenerators:gas_burning_generator": [
            "kubejs:tk3/industrial/mekanismgenerators_gas_burning_generator"
        ],
        "mekanismgenerators:heat_generator": [
            "kubejs:tk3/tier_5/heat_generator"
        ],
        "mekanismgenerators:laser_focus_matrix": [
            "kubejs:tk3/industrial/mekanismgenerators_laser_focus_matrix"
        ],
        "mekanismgenerators:reactor_glass": [
            "kubejs:tk3/industrial/mekanismgenerators_reactor_glass"
        ],
        "mekanismgenerators:rotational_complex": [
            "kubejs:tk3/industrial/mekanismgenerators_rotational_complex"
        ],
        "mekanismgenerators:saturating_condenser": [
            "kubejs:tk3/industrial/mekanismgenerators_saturating_condenser"
        ],
        "mekanismgenerators:solar_generator": [
            "kubejs:tk3/industrial/mekanismgenerators_solar_generator"
        ],
        "mekanismgenerators:turbine_blade": [
            "kubejs:tk3/industrial/mekanismgenerators_turbine_blade"
        ],
        "mekanismgenerators:turbine_casing": [
            "kubejs:tk3/industrial/mekanismgenerators_turbine_casing"
        ],
        "mekanismgenerators:turbine_rotor": [
            "kubejs:tk3/industrial/mekanismgenerators_turbine_rotor"
        ],
        "mekanismgenerators:turbine_valve": [
            "kubejs:tk3/industrial/mekanismgenerators_turbine_valve"
        ],
        "mekanismgenerators:turbine_vent": [
            "kubejs:tk3/industrial/mekanismgenerators_turbine_vent"
        ],
        "mekanismgenerators:wind_generator": [
            "kubejs:tk3/industrial/mekanismgenerators_wind_generator"
        ],
        "minecraft:clay_ball": [
            "kubejs:tk3/tier_1/renewable_clay",
            "kubejs:tk3/geology/milling_andesite",
            "kubejs:tk3/geology/crushing_andesite",
            "kubejs:tk3/compat/mud_clay"
        ],
        "minecraft:copper_ingot": [
            "kubejs:tk3/create/copper_ingot_from_nuggets"
        ],
        "minecraft:gravel": [
            "kubejs:tk3/tier_1/cobble_to_gravel"
        ],
        "minecraft:slime_ball": [
            "kubejs:tk3/tier_2/renewable_sealant"
        ],
        "simulated:altitude_sensor": [
            "kubejs:tk3/addons/simulated_altitude_sensor"
        ],
        "simulated:analog_transmission": [
            "kubejs:tk3/addons/simulated_analog_transmission"
        ],
        "simulated:auger_cog": [
            "kubejs:tk3/addons/simulated_auger_cog_from_auger_shaft"
        ],
        "simulated:auger_shaft": [
            "kubejs:tk3/addons/simulated_auger_shaft"
        ],
        "simulated:black_handle": [
            "kubejs:tk3/addons/simulated_black_handle"
        ],
        "simulated:black_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_black_nameplate_from_other_nameplate"
        ],
        "simulated:blue_handle": [
            "kubejs:tk3/addons/simulated_blue_handle"
        ],
        "simulated:blue_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_blue_nameplate_from_other_nameplate"
        ],
        "simulated:brown_handle": [
            "kubejs:tk3/addons/simulated_brown_handle"
        ],
        "simulated:brown_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_brown_nameplate_from_other_nameplate"
        ],
        "simulated:contraption_diagram": [
            "kubejs:tk3/addons/simulated_contraption_diagram"
        ],
        "simulated:copper_handle": [
            "kubejs:tk3/addons/simulated_copper_handle"
        ],
        "simulated:cyan_handle": [
            "kubejs:tk3/addons/simulated_cyan_handle"
        ],
        "simulated:cyan_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_cyan_nameplate_from_other_nameplate"
        ],
        "simulated:directional_gearshift": [
            "kubejs:tk3/addons/simulated_directional_gearshift"
        ],
        "simulated:directional_linked_receiver": [
            "kubejs:tk3/addons/simulated_directional_linked_receiver"
        ],
        "simulated:docking_connector": [
            "kubejs:tk3/addons/simulated_mechanical_crafting_docking_connector"
        ],
        "simulated:gimbal_sensor": [
            "kubejs:tk3/addons/simulated_gimbal_sensor"
        ],
        "simulated:gray_handle": [
            "kubejs:tk3/addons/simulated_gray_handle"
        ],
        "simulated:gray_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_gray_nameplate_from_other_nameplate"
        ],
        "simulated:green_handle": [
            "kubejs:tk3/addons/simulated_green_handle"
        ],
        "simulated:green_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_green_nameplate_from_other_nameplate"
        ],
        "simulated:honey_glue": [
            "kubejs:tk3/addons/simulated_filling_honey_glue"
        ],
        "simulated:iron_handle": [
            "kubejs:tk3/addons/simulated_handle_undye"
        ],
        "simulated:laser_pointer": [
            "kubejs:tk3/addons/simulated_laser_pointer"
        ],
        "simulated:laser_sensor": [
            "kubejs:tk3/addons/simulated_laser_sensor"
        ],
        "simulated:light_blue_handle": [
            "kubejs:tk3/addons/simulated_light_blue_handle"
        ],
        "simulated:light_blue_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_light_blue_nameplate_from_other_nameplate"
        ],
        "simulated:light_gray_handle": [
            "kubejs:tk3/addons/simulated_light_gray_handle"
        ],
        "simulated:light_gray_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_light_gray_nameplate_from_other_nameplate"
        ],
        "simulated:lime_handle": [
            "kubejs:tk3/addons/simulated_lime_handle"
        ],
        "simulated:lime_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_lime_nameplate_from_other_nameplate"
        ],
        "simulated:linked_typewriter": [
            "kubejs:tk3/addons/simulated_mechanical_crafting_linked_typewriter"
        ],
        "simulated:magenta_handle": [
            "kubejs:tk3/addons/simulated_magenta_handle"
        ],
        "simulated:magenta_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_magenta_nameplate_from_other_nameplate"
        ],
        "simulated:modulating_linked_receiver": [
            "kubejs:tk3/addons/simulated_modulating_linked_receiver"
        ],
        "simulated:navigation_table": [
            "kubejs:tk3/addons/simulated_navigation_table"
        ],
        "simulated:optical_sensor": [
            "kubejs:tk3/addons/simulated_optical_sensor"
        ],
        "simulated:orange_handle": [
            "kubejs:tk3/addons/simulated_orange_handle"
        ],
        "simulated:orange_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_orange_nameplate_from_other_nameplate"
        ],
        "simulated:physics_assembler": [
            "kubejs:tk3/addons/simulated_physics_assembler"
        ],
        "simulated:pink_handle": [
            "kubejs:tk3/addons/simulated_pink_handle"
        ],
        "simulated:pink_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_pink_nameplate_from_other_nameplate"
        ],
        "simulated:plunger_launcher": [
            "kubejs:tk3/addons/simulated_mechanical_crafting_plunger_launcher"
        ],
        "simulated:purple_handle": [
            "kubejs:tk3/addons/simulated_purple_handle"
        ],
        "simulated:purple_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_purple_nameplate_from_other_nameplate"
        ],
        "simulated:red_handle": [
            "kubejs:tk3/addons/simulated_red_handle"
        ],
        "simulated:red_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_red_nameplate_from_other_nameplate"
        ],
        "simulated:red_portable_engine": [
            "kubejs:tk3/addons/simulated_red_portable_engine"
        ],
        "simulated:redstone_accumulator": [
            "kubejs:tk3/addons/simulated_redstone_accumulator"
        ],
        "simulated:redstone_inductor": [
            "kubejs:tk3/addons/simulated_redstone_inductor"
        ],
        "simulated:redstone_magnet": [
            "kubejs:tk3/addons/simulated_redstone_magnet"
        ],
        "simulated:rope_connector": [
            "kubejs:tk3/addons/simulated_rope_connector"
        ],
        "simulated:rope_coupling": [
            "kubejs:tk3/addons/simulated_rope_coupling"
        ],
        "simulated:rope_winch": [
            "kubejs:tk3/addons/simulated_rope_winch"
        ],
        "simulated:spring": [
            "kubejs:tk3/addons/simulated_spring"
        ],
        "simulated:steering_wheel": [
            "kubejs:tk3/addons/simulated_steering_wheel"
        ],
        "simulated:swivel_bearing": [
            "kubejs:tk3/addons/simulated_swivel_bearing"
        ],
        "simulated:throttle_lever": [
            "kubejs:tk3/addons/simulated_throttle_lever"
        ],
        "simulated:torsion_spring": [
            "kubejs:tk3/addons/simulated_torsion_spring"
        ],
        "simulated:velocity_sensor": [
            "kubejs:tk3/addons/simulated_velocity_sensor"
        ],
        "simulated:white_handle": [
            "kubejs:tk3/addons/simulated_white_handle"
        ],
        "simulated:white_nameplate": [
            "kubejs:tk3/addons/simulated_white_nameplate"
        ],
        "simulated:white_symmetric_sail": [
            "kubejs:tk3/addons/simulated_white_symmetric_sail"
        ],
        "simulated:yellow_handle": [
            "kubejs:tk3/addons/simulated_yellow_handle"
        ],
        "simulated:yellow_nameplate": [
            "kubejs:tk3/addons/simulated_crafting_yellow_nameplate_from_other_nameplate"
        ],
        "sophisticatedbackpacks:advanced_alchemy_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_alchemy_upgrade"
        ],
        "sophisticatedbackpacks:advanced_compacting_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_compacting_upgrade"
        ],
        "sophisticatedbackpacks:advanced_deposit_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_deposit_upgrade"
        ],
        "sophisticatedbackpacks:advanced_feeding_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_feeding_upgrade"
        ],
        "sophisticatedbackpacks:advanced_filter_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_filter_upgrade"
        ],
        "sophisticatedbackpacks:advanced_jukebox_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_jukebox_upgrade"
        ],
        "sophisticatedbackpacks:advanced_magnet_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_magnet_upgrade"
        ],
        "sophisticatedbackpacks:advanced_mob_catcher_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_mob_catcher_upgrade"
        ],
        "sophisticatedbackpacks:advanced_pickup_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_pickup_upgrade"
        ],
        "sophisticatedbackpacks:advanced_pump_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_pump_upgrade"
        ],
        "sophisticatedbackpacks:advanced_refill_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_refill_upgrade"
        ],
        "sophisticatedbackpacks:advanced_restock_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_restock_upgrade"
        ],
        "sophisticatedbackpacks:advanced_tool_swapper_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_tool_swapper_upgrade"
        ],
        "sophisticatedbackpacks:advanced_void_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_advanced_void_upgrade"
        ],
        "sophisticatedbackpacks:alchemy_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_alchemy_upgrade"
        ],
        "sophisticatedbackpacks:blasting_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_blasting_upgrade"
        ],
        "sophisticatedbackpacks:compacting_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_compacting_upgrade"
        ],
        "sophisticatedbackpacks:copper_backpack": [
            "kubejs:tk3/storage/sophisticatedbackpacks_copper_backpack"
        ],
        "sophisticatedbackpacks:crafting_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_crafting_upgrade"
        ],
        "sophisticatedbackpacks:diamond_backpack": [
            "kubejs:tk3/storage/sophisticatedbackpacks_diamond_backpack"
        ],
        "sophisticatedbackpacks:feeding_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_feeding_upgrade"
        ],
        "sophisticatedbackpacks:filter_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_filter_upgrade"
        ],
        "sophisticatedbackpacks:gold_backpack": [
            "kubejs:tk3/storage/sophisticatedbackpacks_gold_backpack"
        ],
        "sophisticatedbackpacks:infinity_upgrade": [],
        "sophisticatedbackpacks:iron_backpack": [
            "kubejs:tk3/storage/sophisticatedbackpacks_iron_backpack"
        ],
        "sophisticatedbackpacks:magnet_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_magnet_upgrade"
        ],
        "sophisticatedbackpacks:netherite_backpack": [
            "kubejs:tk3/addons/sophisticatedbackpacks_netherite_backpack"
        ],
        "sophisticatedbackpacks:pickup_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_pickup_upgrade"
        ],
        "sophisticatedbackpacks:pump_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_pump_upgrade"
        ],
        "sophisticatedbackpacks:smelting_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_smelting_upgrade"
        ],
        "sophisticatedbackpacks:smoking_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_smoking_upgrade"
        ],
        "sophisticatedbackpacks:stack_upgrade_omega_tier": [],
        "sophisticatedbackpacks:stack_upgrade_starter_tier_to_tier_1_conversion": [],
        "sophisticatedbackpacks:stack_upgrade_starter_tier_to_tier_2_conversion": [],
        "sophisticatedbackpacks:stack_upgrade_starter_tier_to_tier_3_conversion": [],
        "sophisticatedbackpacks:stack_upgrade_starter_tier_to_tier_4_conversion": [],
        "sophisticatedbackpacks:stack_upgrade_tier_1": [
            "kubejs:tk3/storage/sophisticatedbackpacks_stack_upgrade_tier_1"
        ],
        "sophisticatedbackpacks:stack_upgrade_tier_1_to_tier_2_conversion": [],
        "sophisticatedbackpacks:stack_upgrade_tier_1_to_tier_3_conversion": [],
        "sophisticatedbackpacks:stack_upgrade_tier_1_to_tier_4_conversion": [],
        "sophisticatedbackpacks:stack_upgrade_tier_2": [
            "kubejs:tk3/storage/sophisticatedbackpacks_stack_upgrade_tier_2"
        ],
        "sophisticatedbackpacks:stack_upgrade_tier_2_to_tier_3_conversion": [],
        "sophisticatedbackpacks:stack_upgrade_tier_2_to_tier_4_conversion": [],
        "sophisticatedbackpacks:stack_upgrade_tier_3": [
            "kubejs:tk3/addons/sophisticatedstorage_backpack_stack_upgrade_tier_3_from_storage_stack_upgrade_tier_4",
            "kubejs:tk3/addons/sophisticatedbackpacks_stack_upgrade_tier_3"
        ],
        "sophisticatedbackpacks:stack_upgrade_tier_3_to_tier_4_conversion": [],
        "sophisticatedbackpacks:stack_upgrade_tier_4": [
            "kubejs:tk3/addons/sophisticatedstorage_backpack_stack_upgrade_tier_4_from_storage_stack_upgrade_tier_5",
            "kubejs:tk3/addons/sophisticatedbackpacks_stack_upgrade_tier_4"
        ],
        "sophisticatedbackpacks:stonecutter_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_stonecutter_upgrade"
        ],
        "sophisticatedbackpacks:survival_infinity_upgrade": [],
        "sophisticatedbackpacks:upgrade_base": [
            "kubejs:tk3/storage/sophisticatedbackpacks_upgrade_base"
        ],
        "sophisticatedbackpacks:void_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_void_upgrade"
        ],
        "sophisticatedbackpacks:xp_pump_upgrade": [
            "kubejs:tk3/storage/sophisticatedbackpacks_xp_pump_upgrade"
        ],
        "sophisticatedstorage:advanced_alchemy_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_advanced_alchemy_upgrade"
        ],
        "sophisticatedstorage:advanced_compacting_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_advanced_compacting_upgrade"
        ],
        "sophisticatedstorage:advanced_feeding_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_advanced_feeding_upgrade"
        ],
        "sophisticatedstorage:advanced_filter_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_advanced_filter_upgrade"
        ],
        "sophisticatedstorage:advanced_hopper_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_advanced_hopper_upgrade"
        ],
        "sophisticatedstorage:advanced_jukebox_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_advanced_jukebox_upgrade"
        ],
        "sophisticatedstorage:advanced_magnet_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_advanced_magnet_upgrade"
        ],
        "sophisticatedstorage:advanced_pickup_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_advanced_pickup_upgrade"
        ],
        "sophisticatedstorage:advanced_pump_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_advanced_pump_upgrade"
        ],
        "sophisticatedstorage:advanced_void_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_advanced_void_upgrade"
        ],
        "sophisticatedstorage:alchemy_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_alchemy_upgrade"
        ],
        "sophisticatedstorage:basic_to_copper_tier_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_basic_to_copper_tier_upgrade"
        ],
        "sophisticatedstorage:basic_to_diamond_tier_upgrade": [],
        "sophisticatedstorage:basic_to_gold_tier_upgrade": [],
        "sophisticatedstorage:basic_to_iron_tier_upgrade": [],
        "sophisticatedstorage:basic_to_netherite_tier_upgrade": [
            "kubejs:tk3/addons/sophisticatedstorage_basic_to_netherite_tier_upgrade"
        ],
        "sophisticatedstorage:blasting_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_blasting_upgrade"
        ],
        "sophisticatedstorage:compacting_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_compacting_upgrade"
        ],
        "sophisticatedstorage:controller": [
            "kubejs:tk3/storage/sophisticatedstorage_controller"
        ],
        "sophisticatedstorage:copper_barrel": [
            "kubejs:tk3/storage/sophisticatedstorage_copper_barrel"
        ],
        "sophisticatedstorage:copper_chest": [
            "kubejs:tk3/storage/sophisticatedstorage_copper_chest"
        ],
        "sophisticatedstorage:copper_shulker_box": [
            "kubejs:tk3/storage/sophisticatedstorage_copper_shulker_box"
        ],
        "sophisticatedstorage:copper_to_diamond_tier_upgrade": [],
        "sophisticatedstorage:copper_to_gold_tier_upgrade": [],
        "sophisticatedstorage:copper_to_iron_tier_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_copper_to_iron_tier_upgrade"
        ],
        "sophisticatedstorage:copper_to_netherite_tier_upgrade": [
            "kubejs:tk3/addons/sophisticatedstorage_copper_to_netherite_tier_upgrade"
        ],
        "sophisticatedstorage:crafting_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_crafting_upgrade"
        ],
        "sophisticatedstorage:diamond_barrel": [
            "kubejs:tk3/storage/sophisticatedstorage_diamond_barrel"
        ],
        "sophisticatedstorage:diamond_chest": [
            "kubejs:tk3/storage/sophisticatedstorage_diamond_chest"
        ],
        "sophisticatedstorage:diamond_shulker_box": [
            "kubejs:tk3/storage/sophisticatedstorage_diamond_shulker_box"
        ],
        "sophisticatedstorage:diamond_to_netherite_tier_upgrade": [
            "kubejs:tk3/addons/sophisticatedstorage_diamond_to_netherite_tier_upgrade"
        ],
        "sophisticatedstorage:feeding_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_feeding_upgrade"
        ],
        "sophisticatedstorage:filter_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_filter_upgrade"
        ],
        "sophisticatedstorage:gold_barrel": [
            "kubejs:tk3/storage/sophisticatedstorage_gold_barrel"
        ],
        "sophisticatedstorage:gold_chest": [
            "kubejs:tk3/storage/sophisticatedstorage_gold_chest"
        ],
        "sophisticatedstorage:gold_shulker_box": [
            "kubejs:tk3/storage/sophisticatedstorage_gold_shulker_box"
        ],
        "sophisticatedstorage:gold_to_diamond_tier_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_gold_to_diamond_tier_upgrade"
        ],
        "sophisticatedstorage:gold_to_netherite_tier_upgrade": [
            "kubejs:tk3/addons/sophisticatedstorage_gold_to_netherite_tier_upgrade"
        ],
        "sophisticatedstorage:infinity_upgrade": [],
        "sophisticatedstorage:iron_barrel": [
            "kubejs:tk3/storage/sophisticatedstorage_iron_barrel"
        ],
        "sophisticatedstorage:iron_chest": [
            "kubejs:tk3/storage/sophisticatedstorage_iron_chest"
        ],
        "sophisticatedstorage:iron_shulker_box": [
            "kubejs:tk3/storage/sophisticatedstorage_iron_shulker_box"
        ],
        "sophisticatedstorage:iron_to_diamond_tier_upgrade": [],
        "sophisticatedstorage:iron_to_gold_tier_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_iron_to_gold_tier_upgrade"
        ],
        "sophisticatedstorage:iron_to_netherite_tier_upgrade": [
            "kubejs:tk3/addons/sophisticatedstorage_iron_to_netherite_tier_upgrade"
        ],
        "sophisticatedstorage:limited_copper_barrel_1": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_1"
        ],
        "sophisticatedstorage:limited_copper_barrel_2": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_2"
        ],
        "sophisticatedstorage:limited_copper_barrel_3": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_3"
        ],
        "sophisticatedstorage:limited_copper_barrel_4": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_copper_barrel_4"
        ],
        "sophisticatedstorage:limited_diamond_barrel_1": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_1"
        ],
        "sophisticatedstorage:limited_diamond_barrel_2": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_2"
        ],
        "sophisticatedstorage:limited_diamond_barrel_3": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_3"
        ],
        "sophisticatedstorage:limited_diamond_barrel_4": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_diamond_barrel_4"
        ],
        "sophisticatedstorage:limited_gold_barrel_1": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_1"
        ],
        "sophisticatedstorage:limited_gold_barrel_2": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_2"
        ],
        "sophisticatedstorage:limited_gold_barrel_3": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_3"
        ],
        "sophisticatedstorage:limited_gold_barrel_4": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_gold_barrel_4"
        ],
        "sophisticatedstorage:limited_iron_barrel_1": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_1"
        ],
        "sophisticatedstorage:limited_iron_barrel_2": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_2"
        ],
        "sophisticatedstorage:limited_iron_barrel_3": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_3"
        ],
        "sophisticatedstorage:limited_iron_barrel_4": [
            "kubejs:tk3/storage/sophisticatedstorage_limited_iron_barrel_4"
        ],
        "sophisticatedstorage:limited_netherite_barrel_1": [
            "kubejs:tk3/addons/sophisticatedstorage_limited_netherite_barrel_1"
        ],
        "sophisticatedstorage:limited_netherite_barrel_2": [
            "kubejs:tk3/addons/sophisticatedstorage_limited_netherite_barrel_2"
        ],
        "sophisticatedstorage:limited_netherite_barrel_3": [
            "kubejs:tk3/addons/sophisticatedstorage_limited_netherite_barrel_3"
        ],
        "sophisticatedstorage:limited_netherite_barrel_4": [
            "kubejs:tk3/addons/sophisticatedstorage_limited_netherite_barrel_4"
        ],
        "sophisticatedstorage:magnet_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_magnet_upgrade"
        ],
        "sophisticatedstorage:netherite_barrel": [
            "kubejs:tk3/addons/sophisticatedstorage_netherite_barrel"
        ],
        "sophisticatedstorage:netherite_chest": [
            "kubejs:tk3/addons/sophisticatedstorage_netherite_chest",
            "kubejs:tk3/addons/sophisticatedstorage_double_netherite_chest"
        ],
        "sophisticatedstorage:netherite_shulker_box": [
            "kubejs:tk3/addons/sophisticatedstorage_netherite_shulker_from_netherite_chest",
            "kubejs:tk3/addons/sophisticatedstorage_netherite_shulker_box"
        ],
        "sophisticatedstorage:pickup_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_pickup_upgrade"
        ],
        "sophisticatedstorage:pump_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_pump_upgrade"
        ],
        "sophisticatedstorage:smelting_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_smelting_upgrade"
        ],
        "sophisticatedstorage:smoking_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_smoking_upgrade"
        ],
        "sophisticatedstorage:stack_upgrade_omega_tier": [],
        "sophisticatedstorage:stack_upgrade_tier_1": [
            "kubejs:tk3/storage/sophisticatedstorage_stack_upgrade_tier_1"
        ],
        "sophisticatedstorage:stack_upgrade_tier_1_plus": [],
        "sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_2_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_3_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_4_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_1_plus_to_tier_5_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_1_to_tier_1_plus_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_1_to_tier_2_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_1_to_tier_3_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_1_to_tier_4_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_1_to_tier_5_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_2": [
            "kubejs:tk3/storage/sophisticatedstorage_stack_upgrade_tier_2"
        ],
        "sophisticatedstorage:stack_upgrade_tier_2_to_tier_3_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_2_to_tier_4_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_2_to_tier_5_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_3": [
            "kubejs:tk3/addons/sophisticatedstorage_stack_upgrade_tier_3",
            "kubejs:tk3/addons/sophisticatedstorage_storage_stack_upgrade_tier_3_from_backpack_stack_upgrade_tier_2"
        ],
        "sophisticatedstorage:stack_upgrade_tier_3_to_tier_4_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_3_to_tier_5_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_4": [
            "kubejs:tk3/addons/sophisticatedstorage_storage_stack_upgrade_tier_4_from_backpack_stack_upgrade_tier_3",
            "kubejs:tk3/addons/sophisticatedstorage_stack_upgrade_tier_4"
        ],
        "sophisticatedstorage:stack_upgrade_tier_4_to_tier_5_conversion": [],
        "sophisticatedstorage:stack_upgrade_tier_5": [
            "kubejs:tk3/addons/sophisticatedstorage_stack_upgrade_tier_5",
            "kubejs:tk3/addons/sophisticatedstorage_storage_stack_upgrade_tier_5_from_backpack_stack_upgrade_tier_4"
        ],
        "sophisticatedstorage:stonecutter_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_stonecutter_upgrade"
        ],
        "sophisticatedstorage:storage_input": [
            "kubejs:tk3/storage/sophisticatedstorage_storage_input"
        ],
        "sophisticatedstorage:storage_io": [
            "kubejs:tk3/storage/sophisticatedstorage_storage_io"
        ],
        "sophisticatedstorage:storage_link": [
            "kubejs:tk3/storage/sophisticatedstorage_storage_link"
        ],
        "sophisticatedstorage:storage_output": [
            "kubejs:tk3/storage/sophisticatedstorage_storage_output"
        ],
        "sophisticatedstorage:survival_infinity_upgrade": [],
        "sophisticatedstorage:upgrade_base": [
            "kubejs:tk3/storage/sophisticatedstorage_upgrade_base"
        ],
        "sophisticatedstorage:void_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_void_upgrade"
        ],
        "sophisticatedstorage:xp_pump_upgrade": [
            "kubejs:tk3/storage/sophisticatedstorage_xp_pump_upgrade"
        ],
        "witchery:altar": [
            "kubejs:tk3/addons/witchery_altar"
        ],
        "witchery:cauldron": [
            "kubejs:tk3/addons/witchery_cauldron"
        ],
        "witchery:distillery": [
            "kubejs:tk3/addons/witchery_distillery"
        ],
        "witchery:iron_witches_oven": [
            "kubejs:tk3/addons/witchery_iron_witches_oven"
        ],
        "witchery:spinning_wheel": [
            "kubejs:tk3/addons/witchery_spinning_wheel"
        ],
        "iceandfire:dragonforge_fire_core_disabled": [
            "kubejs:tk3/addons/iceandfire_dragonforge_fire_core_disabled"
        ],
        "iceandfire:dragonforge_fire_input": [
            "kubejs:tk3/addons/iceandfire_dragonforge_fire_input"
        ],
        "iceandfire:dragonforge_fire_brick": [
            "kubejs:tk3/addons/iceandfire_dragonforge_fire_brick"
        ],
        "iceandfire:dragonforge_ice_core_disabled": [
            "kubejs:tk3/addons/iceandfire_dragonforge_ice_core_disabled"
        ],
        "iceandfire:dragonforge_ice_input": [
            "kubejs:tk3/addons/iceandfire_dragonforge_ice_input"
        ],
        "iceandfire:dragonforge_ice_brick": [
            "kubejs:tk3/addons/iceandfire_dragonforge_ice_brick"
        ],
        "iceandfire:dragonforge_lightning_core_disabled": [
            "kubejs:tk3/addons/iceandfire_dragonforge_lightning_core_disabled"
        ],
        "iceandfire:dragonforge_lightning_input": [
            "kubejs:tk3/addons/iceandfire_dragonforge_lightning_input"
        ],
        "iceandfire:dragonforge_lightning_brick": [
            "kubejs:tk3/addons/iceandfire_dragonforge_lightning_brick"
        ],
        "alexscaves:quarry": [
            "kubejs:tk3/addons/alexscaves_quarry"
        ],
        "alexscaves:drain": [
            "kubejs:tk3/addons/alexscaves_drain"
        ],
        "alexscaves:nuclear_furnace_component": [
            "kubejs:tk3/addons/alexscaves_nuclear_furnace_component"
        ],
        "alexscaves:nuclear_siren": [
            "kubejs:tk3/addons/alexscaves_nuclear_siren"
        ],
        "alexscaves:conversion_crucible": [
            "kubejs:tk3/addons/alexscaves_conversion_crucible"
        ],
        "ae2:debug_phantom_node": [],
        "create:creative_blaze_cake": [],
        "create:creative_fluid_tank": [],
        "ae2:creative_storage_cell": [],
        "ae2:debug_replicator_card": [],
        "create:creative_motor": [],
        "ae2:debug_meteorite_placer": [],
        "mekanism:creative_chemical_tank": [],
        "ae2:debug_eraser": [],
        "create:creative_crate": [],
        "create_enchantment_industry:creative_bookshelf": [],
        "ae2:debug_item_gen": [],
        "mekanism:creative_fluid_tank": [],
        "mekanism:creative_bin": [],
        "ae2:debug_card": [],
        "mekanism:creative_energy_cube": [],
        "ae2:creative_energy_cell": [],
        "ae2:debug_cube_gen": [],
        "ae2:debug_energy_gen": [],
        "iceandfire:dragonforge_fire_core": [],
        "iceandfire:dragonforge_ice_core": [],
        "iceandfire:dragonforge_lightning_core": []
    };
    const processing = [{
            "type": "create:milling",
            "input": "minecraft:andesite",
            "ids": [
                "kubejs:tk3/geology/milling_andesite"
            ]
        }, {
            "type": "create:crushing",
            "input": "minecraft:andesite",
            "ids": [
                "kubejs:tk3/geology/crushing_andesite"
            ]
        }, {
            "type": "create:milling",
            "input": "create:cut_andesite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_andesite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:andesite_funnel",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:andesite_funnel",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:andesite_encased_cogwheel",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:andesite_encased_cogwheel",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_andesite_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_andesite_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_andesite_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_andesite_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_andesite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_andesite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:andesite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:andesite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_andesite_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_andesite_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:polished_andesite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:polished_andesite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_andesite_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_andesite_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:andesite_casing",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:andesite_casing",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_andesite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_andesite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:polished_andesite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:polished_andesite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:andesite_alloy_block",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:andesite_alloy_block",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:andesite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:andesite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:andesite_tunnel",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:andesite_tunnel",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_andesite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_andesite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_andesite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_andesite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:andesite_scaffolding",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:andesite_scaffolding",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:andesite_door",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:andesite_door",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:andesite_pillar",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:andesite_pillar",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_andesite_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_andesite_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_andesite_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_andesite_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_andesite_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_andesite_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_andesite_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_andesite_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_andesite_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_andesite_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:andesite_table_cloth",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:andesite_table_cloth",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_andesite_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_andesite_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:andesite_encased_shaft",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:andesite_encased_shaft",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:andesite_bars",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:andesite_bars",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:andesite_ladder",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:andesite_ladder",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_andesite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_andesite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:andesite_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:andesite_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:andesite_encased_large_cogwheel",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:andesite_encased_large_cogwheel",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:polished_andesite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:polished_andesite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:layered_andesite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:layered_andesite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:diorite",
            "ids": [
                "kubejs:tk3/geology/milling_diorite"
            ]
        }, {
            "type": "create:crushing",
            "input": "minecraft:diorite",
            "ids": [
                "kubejs:tk3/geology/crushing_diorite"
            ]
        }, {
            "type": "create:milling",
            "input": "create:cut_diorite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_diorite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_diorite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_diorite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_diorite_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_diorite_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_diorite_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_diorite_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_diorite_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_diorite_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_diorite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_diorite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_diorite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_diorite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:layered_diorite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:layered_diorite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:diorite_pillar",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:diorite_pillar",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_diorite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_diorite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_diorite_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_diorite_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:polished_diorite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:polished_diorite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_diorite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_diorite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_diorite_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_diorite_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_diorite_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_diorite_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:diorite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:diorite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:diorite_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:diorite_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:diorite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:diorite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_diorite_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_diorite_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:polished_diorite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:polished_diorite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_diorite_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_diorite_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_diorite_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_diorite_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_diorite_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_diorite_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:polished_diorite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:polished_diorite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:granite",
            "ids": [
                "kubejs:tk3/geology/milling_granite"
            ]
        }, {
            "type": "create:crushing",
            "input": "minecraft:granite",
            "ids": [
                "kubejs:tk3/geology/crushing_granite"
            ]
        }, {
            "type": "create:milling",
            "input": "create:small_granite_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_granite_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_granite_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_granite_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:granite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:granite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_granite_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_granite_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:polished_granite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:polished_granite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_granite_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_granite_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_granite_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_granite_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:granite_pillar",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:granite_pillar",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:polished_granite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:polished_granite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_granite_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_granite_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_granite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_granite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_granite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_granite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_granite_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_granite_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_granite_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_granite_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_granite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_granite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_granite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_granite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:granite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:granite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:polished_granite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:polished_granite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_granite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_granite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_granite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_granite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_granite_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_granite_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:layered_granite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:layered_granite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "minecraft:granite_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "minecraft:granite_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_granite_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_granite_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:limestone",
            "ids": [
                "kubejs:tk3/geology/milling_limestone"
            ]
        }, {
            "type": "create:crushing",
            "input": "create:limestone",
            "ids": [
                "kubejs:tk3/geology/crushing_limestone"
            ]
        }, {
            "type": "create:milling",
            "input": "create:small_limestone_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_limestone_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:layered_limestone",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:layered_limestone",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_limestone_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_limestone_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_limestone_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_limestone_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_limestone",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_limestone",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_limestone_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_limestone_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_limestone_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_limestone_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_limestone",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_limestone",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_limestone_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_limestone_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_limestone_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_limestone_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_limestone_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_limestone_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_limestone_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_limestone_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_limestone_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_limestone_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_limestone_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_limestone_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_limestone_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_limestone_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_limestone_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_limestone_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_limestone_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_limestone_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:limestone_pillar",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:limestone_pillar",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:scoria",
            "ids": [
                "kubejs:tk3/geology/milling_scoria"
            ]
        }, {
            "type": "create:crushing",
            "input": "create:scoria",
            "ids": [
                "kubejs:tk3/geology/crushing_scoria"
            ]
        }, {
            "type": "create:milling",
            "input": "create:cut_scoria",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scoria",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_scoria_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_scoria_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scoria_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scoria_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_scoria_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_scoria_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_scoria",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_scoria",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scoria_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scoria_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_scoria_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_scoria_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scoria_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scoria_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_scoria_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_scoria_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_scoria_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_scoria_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scoria_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scoria_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_scoria_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_scoria_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scoria_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scoria_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scoria_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scoria_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scoria_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scoria_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_scoria_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_scoria_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:scoria_pillar",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:scoria_pillar",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:layered_scoria",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:layered_scoria",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:scorchia",
            "ids": [
                "kubejs:tk3/geology/milling_scorchia"
            ]
        }, {
            "type": "create:crushing",
            "input": "create:scorchia",
            "ids": [
                "kubejs:tk3/geology/crushing_scorchia"
            ]
        }, {
            "type": "create:milling",
            "input": "create:cut_scorchia_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scorchia_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:scorchia_pillar",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:scorchia_pillar",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_scorchia_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_scorchia_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_scorchia_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_scorchia_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:layered_scorchia",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:layered_scorchia",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_scorchia_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_scorchia_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scorchia_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scorchia_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scorchia_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scorchia_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_scorchia_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_scorchia_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scorchia_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scorchia_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scorchia_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scorchia_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scorchia",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scorchia",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_scorchia_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_scorchia_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_scorchia_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_scorchia_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_scorchia_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_scorchia_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_scorchia",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_scorchia",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scorchia_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scorchia_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_scorchia_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_scorchia_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:veridium",
            "ids": [
                "kubejs:tk3/geology/milling_veridium"
            ]
        }, {
            "type": "create:crushing",
            "input": "create:veridium",
            "ids": [
                "kubejs:tk3/geology/crushing_veridium"
            ]
        }, {
            "type": "create:splashing",
            "input": "create:crushed_raw_copper",
            "ids": [
                "kubejs:tk3/geology/wash_copper"
            ]
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_veridium",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_veridium",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_veridium",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_veridium",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_veridium_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_veridium_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_veridium_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_veridium_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_veridium_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_veridium_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_veridium_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_veridium_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:veridium_pillar",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:veridium_pillar",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_veridium_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_veridium_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_veridium_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_veridium_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_veridium_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_veridium_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_veridium_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_veridium_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:layered_veridium",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:layered_veridium",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_veridium_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_veridium_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_veridium_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_veridium_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_veridium_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_veridium_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_veridium_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_veridium_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_veridium_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_veridium_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_veridium_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_veridium_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:crimsite",
            "ids": [
                "kubejs:tk3/geology/milling_crimsite"
            ]
        }, {
            "type": "create:crushing",
            "input": "create:crimsite",
            "ids": [
                "kubejs:tk3/geology/crushing_crimsite"
            ]
        }, {
            "type": "create:splashing",
            "input": "create:crushed_raw_iron",
            "ids": [
                "kubejs:tk3/geology/wash_iron"
            ]
        }, {
            "type": "create:milling",
            "input": "create:layered_crimsite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:layered_crimsite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_crimsite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_crimsite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_crimsite_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_crimsite_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_crimsite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_crimsite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_crimsite_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_crimsite_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_crimsite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_crimsite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_crimsite_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_crimsite_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_crimsite_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_crimsite_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_crimsite_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_crimsite_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_crimsite",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_crimsite",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_crimsite_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_crimsite_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_crimsite_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_crimsite_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_crimsite_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_crimsite_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_crimsite_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_crimsite_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_crimsite_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_crimsite_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_crimsite_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_crimsite_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_crimsite_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_crimsite_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:crimsite_pillar",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:crimsite_pillar",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:asurine",
            "ids": [
                "kubejs:tk3/geology/milling_asurine"
            ]
        }, {
            "type": "create:crushing",
            "input": "create:asurine",
            "ids": [
                "kubejs:tk3/geology/crushing_asurine"
            ]
        }, {
            "type": "create:splashing",
            "input": "create:crushed_raw_zinc",
            "ids": [
                "kubejs:tk3/geology/wash_zinc"
            ]
        }, {
            "type": "create:milling",
            "input": "create:small_asurine_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_asurine_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_asurine_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_asurine_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_asurine",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_asurine",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_asurine",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_asurine",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_asurine_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_asurine_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_asurine_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_asurine_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_asurine_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_asurine_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_asurine_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_asurine_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:layered_asurine",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:layered_asurine",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_asurine_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_asurine_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_asurine_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_asurine_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_asurine_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_asurine_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_asurine_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_asurine_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_asurine_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_asurine_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_asurine_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_asurine_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_asurine_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_asurine_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_asurine_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_asurine_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:asurine_pillar",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:asurine_pillar",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:ochrum",
            "ids": [
                "kubejs:tk3/geology/milling_ochrum"
            ]
        }, {
            "type": "create:crushing",
            "input": "create:ochrum",
            "ids": [
                "kubejs:tk3/geology/crushing_ochrum"
            ]
        }, {
            "type": "create:splashing",
            "input": "create:crushed_raw_gold",
            "ids": [
                "kubejs:tk3/geology/wash_gold"
            ]
        }, {
            "type": "create:milling",
            "input": "create:cut_ochrum_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_ochrum_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_ochrum",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_ochrum",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_ochrum_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_ochrum_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_ochrum_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_ochrum_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_ochrum_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_ochrum_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:layered_ochrum",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:layered_ochrum",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_ochrum_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_ochrum_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_ochrum_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_ochrum_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:ochrum_pillar",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:ochrum_pillar",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_ochrum_brick_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_ochrum_brick_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_ochrum_brick_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_ochrum_brick_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_ochrum_wall",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_ochrum_wall",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_ochrum_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_ochrum_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_ochrum_brick_stairs",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_ochrum_brick_stairs",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:small_ochrum_bricks",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:small_ochrum_bricks",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_ochrum_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_ochrum_slab",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:polished_cut_ochrum",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:polished_cut_ochrum",
            "ids": []
        }, {
            "type": "create:milling",
            "input": "create:cut_ochrum_slab",
            "ids": []
        }, {
            "type": "create:crushing",
            "input": "create:cut_ochrum_slab",
            "ids": []
        }, {
            "type": "create:cutting",
            "input": "alexscaves:pewen_log",
            "ids": [
                "kubejs:tk3/compat/strip_alexscaves_pewen_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "alexscaves:stripped_pewen_log",
            "ids": [
                "kubejs:tk3/compat/saw_alexscaves_pewen_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "alexscaves:pewen_wood",
            "ids": [
                "kubejs:tk3/compat/strip_alexscaves_pewen_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "alexscaves:stripped_pewen_wood",
            "ids": [
                "kubejs:tk3/compat/saw_alexscaves_pewen_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "alexscaves:thornwood_log",
            "ids": [
                "kubejs:tk3/compat/strip_alexscaves_thornwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "alexscaves:stripped_thornwood_log",
            "ids": [
                "kubejs:tk3/compat/saw_alexscaves_thornwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "alexscaves:thornwood_wood",
            "ids": [
                "kubejs:tk3/compat/strip_alexscaves_thornwood_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "alexscaves:stripped_thornwood_wood",
            "ids": [
                "kubejs:tk3/compat/saw_alexscaves_thornwood_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:aspen_log",
            "ids": [
                "kubejs:tk3/compat/strip_atmospheric_aspen_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:stripped_aspen_log",
            "ids": [
                "kubejs:tk3/compat/saw_atmospheric_aspen_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:aspen_wood",
            "ids": [
                "kubejs:tk3/compat/strip_atmospheric_aspen_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:stripped_aspen_wood",
            "ids": [
                "kubejs:tk3/compat/saw_atmospheric_aspen_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:grimwood_log",
            "ids": [
                "kubejs:tk3/compat/strip_atmospheric_grimwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:stripped_grimwood_log",
            "ids": [
                "kubejs:tk3/compat/saw_atmospheric_grimwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:kousa_log",
            "ids": [
                "kubejs:tk3/compat/strip_atmospheric_kousa_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:stripped_kousa_log",
            "ids": [
                "kubejs:tk3/compat/saw_atmospheric_kousa_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:kousa_wood",
            "ids": [
                "kubejs:tk3/compat/strip_atmospheric_kousa_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:stripped_kousa_wood",
            "ids": [
                "kubejs:tk3/compat/saw_atmospheric_kousa_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:laurel_log",
            "ids": [
                "kubejs:tk3/compat/strip_atmospheric_laurel_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:stripped_laurel_log",
            "ids": [
                "kubejs:tk3/compat/saw_atmospheric_laurel_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:laurel_wood",
            "ids": [
                "kubejs:tk3/compat/strip_atmospheric_laurel_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:stripped_laurel_wood",
            "ids": [
                "kubejs:tk3/compat/saw_atmospheric_laurel_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:morado_log",
            "ids": [
                "kubejs:tk3/compat/strip_atmospheric_morado_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:stripped_morado_log",
            "ids": [
                "kubejs:tk3/compat/saw_atmospheric_morado_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:morado_wood",
            "ids": [
                "kubejs:tk3/compat/strip_atmospheric_morado_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:stripped_morado_wood",
            "ids": [
                "kubejs:tk3/compat/saw_atmospheric_morado_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:rosewood_log",
            "ids": [
                "kubejs:tk3/compat/strip_atmospheric_rosewood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:stripped_rosewood_log",
            "ids": [
                "kubejs:tk3/compat/saw_atmospheric_rosewood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:yucca_log",
            "ids": [
                "kubejs:tk3/compat/strip_atmospheric_yucca_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:stripped_yucca_log",
            "ids": [
                "kubejs:tk3/compat/saw_atmospheric_yucca_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:yucca_wood",
            "ids": [
                "kubejs:tk3/compat/strip_atmospheric_yucca_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "atmospheric:stripped_yucca_wood",
            "ids": [
                "kubejs:tk3/compat/saw_atmospheric_yucca_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "autumnity:maple_log",
            "ids": [
                "kubejs:tk3/compat/strip_autumnity_maple_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "autumnity:stripped_maple_log",
            "ids": [
                "kubejs:tk3/compat/saw_autumnity_maple_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "autumnity:maple_wood",
            "ids": [
                "kubejs:tk3/compat/strip_autumnity_maple_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "autumnity:stripped_maple_wood",
            "ids": [
                "kubejs:tk3/compat/saw_autumnity_maple_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "betterend:dragon_tree_log",
            "ids": [
                "kubejs:tk3/compat/saw_betterend_dragon_tree_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betterend:end_lotus_log",
            "ids": [
                "kubejs:tk3/compat/saw_betterend_end_lotus_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betterend:end_lotus_stem",
            "ids": [
                "kubejs:tk3/compat/saw_betterend_end_lotus_stem"
            ]
        }, {
            "type": "create:cutting",
            "input": "betterend:helix_tree_log",
            "ids": [
                "kubejs:tk3/compat/saw_betterend_helix_tree_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betterend:jellyshroom_log",
            "ids": [
                "kubejs:tk3/compat/saw_betterend_jellyshroom_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betterend:lacugrove_log",
            "ids": [
                "kubejs:tk3/compat/saw_betterend_lacugrove_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betterend:lucernia_log",
            "ids": [
                "kubejs:tk3/compat/saw_betterend_lucernia_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betterend:mossy_glowshroom_log",
            "ids": [
                "kubejs:tk3/compat/saw_betterend_mossy_glowshroom_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betterend:pythadendron_log",
            "ids": [
                "kubejs:tk3/compat/saw_betterend_pythadendron_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betterend:tenanea_log",
            "ids": [
                "kubejs:tk3/compat/saw_betterend_tenanea_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betterend:umbrella_tree_log",
            "ids": [
                "kubejs:tk3/compat/saw_betterend_umbrella_tree_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:anchor_tree_log",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_anchor_tree_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:gloomwood_dark_log",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_gloomwood_dark_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:gloomwood_log",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_gloomwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:gloomwood_transition_log",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_gloomwood_transition_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:mushroom_fir_log",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_mushroom_fir_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:mushroom_fir_stem",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_mushroom_fir_stem"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:nether_mushroom_stem",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_nether_mushroom_stem"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:nether_reed_stem",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_nether_reed_stem"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:nether_sakura_log",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_nether_sakura_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:rubeus_log",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_rubeus_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:stalagnate_log",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_stalagnate_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:stalagnate_stem",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_stalagnate_stem"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:wart_log",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_wart_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "betternether:willow_log",
            "ids": [
                "kubejs:tk3/compat/saw_betternether_willow_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:dead_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_dead_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_dead_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_dead_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:dead_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_dead_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_dead_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_dead_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:empyreal_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_empyreal_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_empyreal_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_empyreal_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:empyreal_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_empyreal_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_empyreal_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_empyreal_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:fir_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_fir_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_fir_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_fir_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:fir_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_fir_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_fir_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_fir_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:hellbark_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_hellbark_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_hellbark_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_hellbark_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:hellbark_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_hellbark_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_hellbark_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_hellbark_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:jacaranda_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_jacaranda_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_jacaranda_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_jacaranda_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:jacaranda_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_jacaranda_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_jacaranda_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_jacaranda_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:magic_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_magic_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_magic_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_magic_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:magic_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_magic_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_magic_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_magic_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:mahogany_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_mahogany_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_mahogany_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_mahogany_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:mahogany_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_mahogany_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_mahogany_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_mahogany_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:maple_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_maple_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_maple_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_maple_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:maple_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_maple_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_maple_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_maple_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:palm_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_palm_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_palm_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_palm_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:palm_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_palm_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_palm_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_palm_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:pine_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_pine_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_pine_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_pine_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:pine_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_pine_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_pine_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_pine_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:redwood_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_redwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_redwood_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_redwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:redwood_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_redwood_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_redwood_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_redwood_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:umbran_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_umbran_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_umbran_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_umbran_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:umbran_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_umbran_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_umbran_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_umbran_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:willow_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_willow_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_willow_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_willow_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:willow_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomesoplenty_willow_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomesoplenty:stripped_willow_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomesoplenty_willow_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:aspen_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_aspen_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_aspen_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_aspen_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:aspen_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_aspen_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_aspen_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_aspen_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:baobab_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_baobab_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_baobab_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_baobab_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:baobab_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_baobab_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_baobab_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_baobab_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:blue_enchanted_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_blue_enchanted_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_blue_enchanted_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_blue_enchanted_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:blue_enchanted_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_blue_enchanted_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_blue_enchanted_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_blue_enchanted_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:cika_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_cika_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_cika_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_cika_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:cika_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_cika_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_cika_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_cika_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:cypress_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_cypress_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_cypress_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_cypress_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:cypress_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_cypress_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_cypress_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_cypress_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:ebony_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_ebony_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_ebony_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_ebony_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:ebony_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_ebony_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_ebony_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_ebony_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:fir_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_fir_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_fir_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_fir_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:fir_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_fir_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_fir_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_fir_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:florus_stem",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_florus_stem"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_florus_stem",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_florus_stem"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:florus_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_florus_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_florus_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_florus_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:green_enchanted_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_green_enchanted_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_green_enchanted_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_green_enchanted_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:green_enchanted_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_green_enchanted_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_green_enchanted_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_green_enchanted_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:holly_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_holly_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_holly_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_holly_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:holly_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_holly_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_holly_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_holly_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:ironwood_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_ironwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_ironwood_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_ironwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:ironwood_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_ironwood_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_ironwood_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_ironwood_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:jacaranda_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_jacaranda_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_jacaranda_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_jacaranda_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:jacaranda_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_jacaranda_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_jacaranda_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_jacaranda_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:mahogany_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_mahogany_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_mahogany_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_mahogany_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:mahogany_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_mahogany_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_mahogany_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_mahogany_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:maple_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_maple_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_maple_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_maple_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:maple_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_maple_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_maple_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_maple_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:palm_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_palm_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_palm_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_palm_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:palm_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_palm_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_palm_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_palm_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:pine_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_pine_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_pine_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_pine_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:pine_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_pine_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_pine_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_pine_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:rainbow_eucalyptus_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_rainbow_eucalyptus_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_rainbow_eucalyptus_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_rainbow_eucalyptus_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:rainbow_eucalyptus_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_rainbow_eucalyptus_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_rainbow_eucalyptus_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_rainbow_eucalyptus_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:redwood_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_redwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_redwood_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_redwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:redwood_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_redwood_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_redwood_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_redwood_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:sakura_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_sakura_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_sakura_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_sakura_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:sakura_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_sakura_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_sakura_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_sakura_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:skyris_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_skyris_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_skyris_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_skyris_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:skyris_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_skyris_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_skyris_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_skyris_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:spirit_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_spirit_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_spirit_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_spirit_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:spirit_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_spirit_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_spirit_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_spirit_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:white_mangrove_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_white_mangrove_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_white_mangrove_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_white_mangrove_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:white_mangrove_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_white_mangrove_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_white_mangrove_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_white_mangrove_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:willow_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_willow_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_willow_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_willow_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:willow_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_willow_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_willow_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_willow_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:witch_hazel_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_witch_hazel_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_witch_hazel_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_witch_hazel_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:witch_hazel_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_witch_hazel_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_witch_hazel_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_witch_hazel_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:zelkova_log",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_zelkova_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_zelkova_log",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_zelkova_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:zelkova_wood",
            "ids": [
                "kubejs:tk3/compat/strip_biomeswevegone_zelkova_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "biomeswevegone:stripped_zelkova_wood",
            "ids": [
                "kubejs:tk3/compat/saw_biomeswevegone_zelkova_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:aspen_log",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_aspen_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_aspen_log",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_aspen_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:aspen_wood",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_aspen_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_aspen_wood",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_aspen_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:baobab_log",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_baobab_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_baobab_log",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_baobab_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:baobab_wood",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_baobab_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_baobab_wood",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_baobab_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:chestnut_log",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_chestnut_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_chestnut_log",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_chestnut_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:chestnut_wood",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_chestnut_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_chestnut_wood",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_chestnut_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:cypress_log",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_cypress_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_cypress_log",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_cypress_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:cypress_wood",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_cypress_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_cypress_wood",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_cypress_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:ebony_log",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_ebony_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_ebony_log",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_ebony_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:ebony_wood",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_ebony_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_ebony_wood",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_ebony_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:fan_palm_log",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_fan_palm_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_fan_palm_log",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_fan_palm_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:fan_palm_wood",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_fan_palm_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_fan_palm_wood",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_fan_palm_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:fir_log",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_fir_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_fir_log",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_fir_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:fir_wood",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_fir_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_fir_wood",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_fir_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:larch_log",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_larch_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_larch_log",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_larch_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:larch_wood",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_larch_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_larch_wood",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_larch_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:swamp_cypress_log",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_swamp_cypress_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_swamp_cypress_log",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_swamp_cypress_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:swamp_cypress_wood",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_swamp_cypress_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_swamp_cypress_wood",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_swamp_cypress_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:swamp_oak_log",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_swamp_oak_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_swamp_oak_log",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_swamp_oak_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:swamp_oak_wood",
            "ids": [
                "kubejs:tk3/compat/strip_bloomingnature_swamp_oak_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "bloomingnature:stripped_swamp_oak_wood",
            "ids": [
                "kubejs:tk3/compat/saw_bloomingnature_swamp_oak_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "cataclysm:chorus_stem",
            "ids": [
                "kubejs:tk3/compat/saw_cataclysm_chorus_stem"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:pine_log",
            "ids": [
                "kubejs:tk3/compat/strip_environmental_pine_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:stripped_pine_log",
            "ids": [
                "kubejs:tk3/compat/saw_environmental_pine_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:pine_wood",
            "ids": [
                "kubejs:tk3/compat/strip_environmental_pine_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:stripped_pine_wood",
            "ids": [
                "kubejs:tk3/compat/saw_environmental_pine_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:plum_log",
            "ids": [
                "kubejs:tk3/compat/strip_environmental_plum_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:stripped_plum_log",
            "ids": [
                "kubejs:tk3/compat/saw_environmental_plum_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:plum_wood",
            "ids": [
                "kubejs:tk3/compat/strip_environmental_plum_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:stripped_plum_wood",
            "ids": [
                "kubejs:tk3/compat/saw_environmental_plum_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:willow_log",
            "ids": [
                "kubejs:tk3/compat/strip_environmental_willow_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:stripped_willow_log",
            "ids": [
                "kubejs:tk3/compat/saw_environmental_willow_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:willow_wood",
            "ids": [
                "kubejs:tk3/compat/strip_environmental_willow_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:stripped_willow_wood",
            "ids": [
                "kubejs:tk3/compat/saw_environmental_willow_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:wisteria_log",
            "ids": [
                "kubejs:tk3/compat/strip_environmental_wisteria_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:stripped_wisteria_log",
            "ids": [
                "kubejs:tk3/compat/saw_environmental_wisteria_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:wisteria_wood",
            "ids": [
                "kubejs:tk3/compat/strip_environmental_wisteria_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "environmental:stripped_wisteria_wood",
            "ids": [
                "kubejs:tk3/compat/saw_environmental_wisteria_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "iceandfire:dreadwood_log",
            "ids": [
                "kubejs:tk3/compat/saw_iceandfire_dreadwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:acacia_log",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_acacia_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_acacia_log",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_acacia_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:acacia_wood",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_acacia_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_acacia_wood",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_acacia_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:birch_log",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_birch_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_birch_log",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_birch_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:birch_wood",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_birch_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_birch_wood",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_birch_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:cherry_log",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_cherry_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_cherry_log",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_cherry_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:cherry_wood",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_cherry_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_cherry_wood",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_cherry_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:crimson_hyphae",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_crimson_hyphae"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_crimson_hyphae",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_crimson_hyphae"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:crimson_stem",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_crimson_stem"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_crimson_stem",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_crimson_stem"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:dark_oak_log",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_dark_oak_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_dark_oak_log",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_dark_oak_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:dark_oak_wood",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_dark_oak_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_dark_oak_wood",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_dark_oak_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:jungle_log",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_jungle_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_jungle_log",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_jungle_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:jungle_wood",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_jungle_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_jungle_wood",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_jungle_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:mangrove_log",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_mangrove_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_mangrove_log",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_mangrove_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:mangrove_wood",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_mangrove_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_mangrove_wood",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_mangrove_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:oak_log",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_oak_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_oak_log",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_oak_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:oak_wood",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_oak_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_oak_wood",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_oak_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:spruce_log",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_spruce_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_spruce_log",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_spruce_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:spruce_wood",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_spruce_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_spruce_wood",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_spruce_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:warped_hyphae",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_warped_hyphae"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_warped_hyphae",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_warped_hyphae"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:warped_stem",
            "ids": [
                "kubejs:tk3/compat/strip_minecraft_warped_stem"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_warped_stem",
            "ids": [
                "kubejs:tk3/compat/saw_minecraft_warped_stem"
            ]
        }, {
            "type": "create:cutting",
            "input": "quark:ancient_log",
            "ids": [
                "kubejs:tk3/compat/strip_quark_ancient_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "quark:stripped_ancient_log",
            "ids": [
                "kubejs:tk3/compat/saw_quark_ancient_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "quark:ancient_wood",
            "ids": [
                "kubejs:tk3/compat/strip_quark_ancient_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "quark:stripped_ancient_wood",
            "ids": [
                "kubejs:tk3/compat/saw_quark_ancient_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "quark:azalea_log",
            "ids": [
                "kubejs:tk3/compat/strip_quark_azalea_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "quark:stripped_azalea_log",
            "ids": [
                "kubejs:tk3/compat/saw_quark_azalea_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "quark:azalea_wood",
            "ids": [
                "kubejs:tk3/compat/strip_quark_azalea_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "quark:stripped_azalea_wood",
            "ids": [
                "kubejs:tk3/compat/saw_quark_azalea_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "quark:blossom_log",
            "ids": [
                "kubejs:tk3/compat/strip_quark_blossom_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "quark:stripped_blossom_log",
            "ids": [
                "kubejs:tk3/compat/saw_quark_blossom_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "quark:blossom_wood",
            "ids": [
                "kubejs:tk3/compat/strip_quark_blossom_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "quark:stripped_blossom_wood",
            "ids": [
                "kubejs:tk3/compat/saw_quark_blossom_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:canopy_log",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_canopy_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_canopy_log",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_canopy_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:canopy_wood",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_canopy_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_canopy_wood",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_canopy_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:dark_log",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_dark_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_dark_log",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_dark_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:dark_wood",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_dark_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_dark_wood",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_dark_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:mangrove_log",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_mangrove_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_mangrove_log",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_mangrove_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:mangrove_wood",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_mangrove_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_mangrove_wood",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_mangrove_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:mining_log",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_mining_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_mining_log",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_mining_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:mining_wood",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_mining_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_mining_wood",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_mining_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:sorting_log",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_sorting_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_sorting_log",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_sorting_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:sorting_wood",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_sorting_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_sorting_wood",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_sorting_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:time_log",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_time_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_time_log",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_time_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:time_wood",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_time_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_time_wood",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_time_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:transformation_log",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_transformation_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_transformation_log",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_transformation_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:transformation_wood",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_transformation_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_transformation_wood",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_transformation_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:twilight_oak_log",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_twilight_oak_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_twilight_oak_log",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_twilight_oak_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:twilight_oak_wood",
            "ids": [
                "kubejs:tk3/compat/strip_twilightforest_twilight_oak_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "twilightforest:stripped_twilight_oak_wood",
            "ids": [
                "kubejs:tk3/compat/saw_twilightforest_twilight_oak_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "upgrade_aquatic:driftwood_log",
            "ids": [
                "kubejs:tk3/compat/strip_upgrade_aquatic_driftwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "upgrade_aquatic:stripped_driftwood_log",
            "ids": [
                "kubejs:tk3/compat/saw_upgrade_aquatic_driftwood_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "upgrade_aquatic:river_log",
            "ids": [
                "kubejs:tk3/compat/strip_upgrade_aquatic_river_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "upgrade_aquatic:stripped_river_log",
            "ids": [
                "kubejs:tk3/compat/saw_upgrade_aquatic_river_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "upgrade_aquatic:river_wood",
            "ids": [
                "kubejs:tk3/compat/strip_upgrade_aquatic_river_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "upgrade_aquatic:stripped_river_wood",
            "ids": [
                "kubejs:tk3/compat/saw_upgrade_aquatic_river_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "witchery:alder_log",
            "ids": [
                "kubejs:tk3/compat/strip_witchery_alder_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "witchery:stripped_alder_log",
            "ids": [
                "kubejs:tk3/compat/saw_witchery_alder_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "witchery:alder_wood",
            "ids": [
                "kubejs:tk3/compat/strip_witchery_alder_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "witchery:stripped_alder_wood",
            "ids": [
                "kubejs:tk3/compat/saw_witchery_alder_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "witchery:hawthorn_log",
            "ids": [
                "kubejs:tk3/compat/strip_witchery_hawthorn_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "witchery:stripped_hawthorn_log",
            "ids": [
                "kubejs:tk3/compat/saw_witchery_hawthorn_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "witchery:hawthorn_wood",
            "ids": [
                "kubejs:tk3/compat/strip_witchery_hawthorn_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "witchery:stripped_hawthorn_wood",
            "ids": [
                "kubejs:tk3/compat/saw_witchery_hawthorn_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "witchery:rowan_log",
            "ids": [
                "kubejs:tk3/compat/strip_witchery_rowan_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "witchery:stripped_rowan_log",
            "ids": [
                "kubejs:tk3/compat/saw_witchery_rowan_log"
            ]
        }, {
            "type": "create:cutting",
            "input": "witchery:rowan_wood",
            "ids": [
                "kubejs:tk3/compat/strip_witchery_rowan_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "witchery:stripped_rowan_wood",
            "ids": [
                "kubejs:tk3/compat/saw_witchery_rowan_wood"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:bamboo_block",
            "ids": [
                "kubejs:tk3/compat/strip_bamboo_block"
            ]
        }, {
            "type": "create:cutting",
            "input": "minecraft:stripped_bamboo_block",
            "ids": [
                "kubejs:tk3/compat/saw_bamboo"
            ]
        }, {
            "type": "create:milling",
            "input": "minecraft:gravel",
            "ids": [
                "kubejs:tk3/compat/gravel_to_sand"
            ]
        }, {
            "type": "create:milling",
            "input": "minecraft:wheat",
            "ids": [
                "kubejs:tk3/compat/wheat_flour"
            ]
        }, {
            "type": "create:splashing",
            "input": "minecraft:mud",
            "ids": [
                "kubejs:tk3/compat/mud_clay"
            ]
        }, {
            "type": "create:haunting",
            "input": "minecraft:sand",
            "ids": [
                "kubejs:tk3/compat/soul_sand"
            ]
        }, {
            "type": "create:splashing",
            "input": "minecraft:copper_block",
            "ids": [
                "kubejs:tk3/compat/age_copper_block"
            ]
        }, {
            "type": "create:splashing",
            "input": "minecraft:exposed_copper",
            "ids": [
                "kubejs:tk3/compat/age_exposed_copper"
            ]
        }, {
            "type": "create:splashing",
            "input": "minecraft:weathered_copper",
            "ids": [
                "kubejs:tk3/compat/age_weathered_copper"
            ]
        }, {
            "type": "irons_spellbooks:alchemist_cauldron_brew",
            "input": "minecraft:ink_sac",
            "ids": [
                "kubejs:tk3/magic/mana_ink"
            ]
        }, {
            "type": "create:crushing",
            "input": "ae2:certus_quartz_crystal",
            "ids": [
                "kubejs:tk3/late_layers/grind_certus_quartz_crystal"
            ]
        }, {
            "type": "create:crushing",
            "input": "ae2:fluix_crystal",
            "ids": [
                "kubejs:tk3/late_layers/grind_fluix_crystal"
            ]
        }, {
            "type": "mekanism:enriching",
            "input": "minecraft:raw_iron",
            "ids": [
                "kubejs:tk3/tier_5/iron_refining"
            ]
        }, {
            "type": "mekanism:enriching",
            "input": "minecraft:raw_copper",
            "ids": [
                "kubejs:tk3/tier_5/copper_refining"
            ]
        }, {
            "type": "mekanism:enriching",
            "input": "minecraft:raw_gold",
            "ids": [
                "kubejs:tk3/late_layers/mekanism_dust_gold"
            ]
        }, {
            "type": "mekanism:enriching",
            "input": "mekanism:raw_osmium",
            "ids": [
                "kubejs:tk3/late_layers/mekanism_dust_osmium"
            ]
        }, {
            "type": "mekanism:enriching",
            "input": "mekanism:raw_tin",
            "ids": [
                "kubejs:tk3/late_layers/mekanism_dust_tin"
            ]
        }, {
            "type": "mekanism:enriching",
            "input": "mekanism:raw_lead",
            "ids": [
                "kubejs:tk3/late_layers/mekanism_dust_lead"
            ]
        }, {
            "type": "create:mixing",
            "input": "aeronautics:end_stone_powder",
            "ids": [
                "kubejs:tk3/addons/levitite_blend"
            ]
        }];
    const checks = Object.keys(allowed)
        .map(output => ({
                filter: {
                    output: output
                },
                ids: allowed[output]
            }));
    processing.forEach(entry => checks.push({
                filter: {
                    type: entry.type,
                    input: entry.input
                },
                ids: entry.ids
            }));
    checks.forEach(check => {
            event.findRecipeIds(
                check.filter)
                .forEach(id => {
                    if (check.ids.indexOf(String(id)) === -1) event.remove({
                            id: String(id)
                        });
                });
        });
    const compiled = checks.map(check => ({
                filter: RecipeFilter.wrap(check.filter),
                ids: check.ids
            }));
    event.addedRecipes.forEach(
        recipe => {
            if (recipe.removed) return;
            const id = String(recipe.getId());
            const context = new MatchContext(recipe);
            compiled.forEach(check => {
                    if (!recipe.removed && check.filter.test(context) && check.ids
                            .indexOf(id) === -1) recipe.remove();
                });
        });

});
