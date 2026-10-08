// Towns & Kingdoms 3 — JEI progression tier tags
// Search in JEI with the tag-search prefix, e.g. $tier_1, $tier_5 or $tier_10.
//
// These tags describe the tier where an item is introduced/unlocked in the T&K3
// campaign. Reused base ingredients are intentionally not repeated in later tiers.

ServerEvents.tags('item', event => {
    const tiers = {
        1: [
            'architects_palette:algal_blend',
            'chipped:carpenters_table',
            'create:adjustable_chain_gearshift',
            'create:analog_lever',
            'create:andesite_alloy',
            'create:basin',
            'create:cart_assembler',
            'create:clutch',
            'create:deployer',
            'create:encased_fan',
            'create:gantry_carriage',
            'create:gearbox',
            'create:gearshift',
            'create:large_cogwheel',
            'create:large_water_wheel',
            'create:mechanical_bearing',
            'create:mechanical_drill',
            'create:mechanical_harvester',
            'create:mechanical_mixer',
            'create:mechanical_piston',
            'create:mechanical_plough',
            'create:mechanical_press',
            'create:mechanical_saw',
            'create:millstone',
            'create:portable_storage_interface',
            'create:propeller',
            'create:rope_pulley',
            'create:shaft',
            'create:speedometer',
            'create:vertical_gearbox',
            'create:water_wheel',
            'create:weighted_ejector',
            'create:windmill_bearing',
            'farmersdelight:stove',
            'kubejs:tk3_incomplete_rotation_mechanism',
            'kubejs:tk3_rotation_machine',
            'kubejs:tk3_makeshift_rotation_mechanism',
            'kubejs:tk3_rotation_mechanism',
            'kubejs:tk3_andesite_alloy_sheet',
            'sophisticatedstorage:hopper_upgrade'
        ],

        2: [
            'create:copper_backtank',
            'create:fluid_tank',
            'create:fluid_valve',
            'create:hose_pulley',
            'create:item_drain',
            'create:mechanical_pump',
            'create:portable_fluid_interface',
            'create:spout',
            'create:steam_engine',
            'create:steam_whistle',
            'create_aquatic_ambitions:mechanical_conduit',
            'create_aquatic_ambitions:prismarine_alloy',
            'createaddition:capacitor',
            'createaddition:rolling_mill',
            'irons_jewelry:jewelcrafting_station',
            'kubejs:tk3_hydraulic_machine',
            'kubejs:tk3_incomplete_sealed_mechanism',
            'kubejs:tk3_rubber',
            'kubejs:tk3_sealed_mechanism',
            'kubejs:tk3_empty_tube',
            'sliceanddice:sprinkler'
        ],

        3: [
            'aeronautics:propeller_bearing',
            'create:brass_ingot',
            'create:brass_sheet',
            'create:content_observer',
            'create:contraption_controls',
            'create:controls',
            'create:display_link',
            'create:electron_tube',
            'create:elevator_pulley',
            'create:incomplete_precision_mechanism',
            'create:mechanical_arm',
            'create:package_frogport',
            'create:packager',
            'create:precision_mechanism',
            'create:repackager',
            'create:rotation_speed_controller',
            'create:sequenced_gearshift',
            'create:smart_chute',
            'create:smart_fluid_pipe',
            'create:stock_link',
            'create:stock_ticker',
            'create:stockpile_switch',
            'create:track_station',
            'create_enchantment_industry:grindstone_drain',
            'create_enchantment_industry:printer',
            'create_hypertube:hypertube',
            'kubejs:tk3_precision_machine',
            'sophisticatedstorage:stack_upgrade_tier_3'
        ],

        4: [
            'ae2:calculation_processor',
            'ae2:calculation_processor_press',
            'ae2:certus_quartz_crystal',
            'ae2:certus_quartz_dust',
            'ae2:charged_certus_quartz_crystal',
            'ae2:charger',
            'ae2:controller',
            'ae2:engineering_processor',
            'ae2:engineering_processor_press',
            'ae2:fluix_crystal',
            'ae2:inscriber',
            'ae2:interface',
            'ae2:item_storage_cell_1k',
            'ae2:item_storage_cell_4k',
            'ae2:logic_processor',
            'ae2:logic_processor_press',
            'ae2:printed_calculation_processor',
            'ae2:printed_engineering_processor',
            'ae2:printed_logic_processor',
            'ae2:printed_silicon',
            'ae2:silicon',
            'ae2:silicon_press',
            'ae2:terminal',
            'ars_creo:starbuncle_wheel',
            'ars_nouveau:whirlisprig_charm',
            'kubejs:tk3_boot_medium',
            'kubejs:tk3_calculation_mechanism',
            'kubejs:tk3_incomplete_calculation_mechanism',
            'kubejs:tk3_incomplete_calculation_processor',
            'kubejs:tk3_incomplete_engineering_processor',
            'kubejs:tk3_incomplete_logic_processor',
            'kubejs:tk3_rough_sand',
            'kubejs:tk3_siliceous_compound',
            'mekanismtools:steel_paxel'
        ],

        5: [
            'ae2:blue_paint_ball',
            'ae2:cell_component_16k',
            'ae2:drive',
            'ae2:green_paint_ball',
            'ae2:purple_paint_ball',
            'ae2:quantum_entangled_singularity',
            'ae2:red_paint_ball',
            'ae2:singularity',
            'ae2:yellow_paint_ball',
            'create_enchantment_industry:blaze_enchanter',
            'createaddition:alternator',
            'createaddition:electric_motor',
            'kubejs:tk3_blaze_gold',
            'kubejs:tk3_blaze_gold_sheet',
            'kubejs:tk3_chromatic_compound',

            'kubejs:tk3_dye_singularity',
            'kubejs:tk3_incomplete_inductive_mechanism',
            'kubejs:tk3_incomplete_integrated_circuit',
            'kubejs:tk3_inductive_mechanism',
            'kubejs:tk3_spectral_ruby',

            'mekanism:basic_control_circuit',
            'mekanism:crusher',
            'mekanism:energized_smelter',
            'mekanism:enrichment_chamber',
            'mekanism:metallurgic_infuser',
            'mekanism:steel_casing',
            'mekanismgenerators:heat_generator'
        ],

        6: [
            'ars_nouveau:enchanting_apparatus',
            'ars_nouveau:manipulation_essence',
            'ars_nouveau:source_gem',
            'ars_nouveau:source_jar',
            'create_wizardry:arcane_sheet',
            'create_wizardry:channeler',
            'create_wizardry:lightning_bucket',
            'kubejs:tk3_polished_amethyst',
            'kubejs:tk3_amethyst_tube',
            'kubejs:tk3_arcane_mechanism',
            'kubejs:tk3_incomplete_arcane_mechanism'
        ],

        7: [
            'ae2:cell_component_64k',
            'aeronautics:gyroscopic_propeller_bearing',
            'alexscaves:quarry',
            'appmek:chemical_storage_cell_1k',
            'kubejs:tk3_chemical_mechanism',
            'kubejs:tk3_compound_base',
            'kubejs:tk3_incomplete_chemical_mechanism',

            'kubejs:tk3_shadow_steel',
            'kubejs:tk3_shadow_steel_plate',
            'mekanism:advanced_control_circuit',
            'mekanism:chemical_infuser',
            'mekanism:chemical_injection_chamber',
            'mekanism:electrolytic_separator',
            'mekanism:purification_chamber',
            'mekanism:rotary_condensentrator',
            'minecraft:nether_star'
        ],

        8: [
            'ae2:cell_component_256k',
            'ae2:spatial_io_port',
            'ars_nouveau:abjuration_essence',
            'cataclysm:ignitium_ingot',
            'create_aquatic_ambitions:spiky_shell',
            'iceandfire:dragonforge_fire_input',
            'kubejs:tk3_containment_mechanism',

            'kubejs:tk3_incomplete_containment_mechanism',
            'kubejs:tk3_overcharge_alloy',
            'kubejs:tk3_overcharge_plate',
            'mekanism:elite_control_circuit',
            'mekanism:radioactive_waste_barrel',
            'mekanismgenerators:fission_reactor_casing'
        ],

        9: [
            'ae2:quantum_ring',
            'cataclysm:gauntlet_of_guard',
            'kubejs:tk3_blue_tube',
            'kubejs:tk3_incomplete_singularity_mechanism',
            'kubejs:tk3_incomplete_stargaze_singularity',
            'kubejs:tk3_radiant_coil',
            'kubejs:tk3_refined_radiance',
            'kubejs:tk3_refined_radiance_sheet',
            'kubejs:tk3_singularity_mechanism',
            'kubejs:tk3_stargaze_alloy',
            'kubejs:tk3_stargaze_plate',

            'mekanism:pellet_antimatter',
            'mekanism:sps_casing',
            'mekanism:ultimate_control_circuit',
            'minecraft:echo_shard'
        ],

        10: [
            'ae2:item_storage_cell_256k',
            'cataclysm:cursium_ingot',
            'create:peculiar_bell',
            'create:haunted_bell',
            'kubejs:tk3_matter_construct',
            'kubejs:tk3_radiant_obsidian',
            'kubejs:tk3_refined_quartz',
            'kubejs:tk3_tech_tube',
            'kubejs:tk3_matter_plastic',
            'kubejs:tk3_singularity_gem',
            'kubejs:tk3_creative_core',

            'kubejs:tk3_sovereign_mechanism',
            'kubejs:tk3_unstable_creative_core',
            'supplementaries:rope'
        ]
    };

    Object.entries(tiers).forEach(([tier, items]) => {
        const canonicalTag = `kubejs:tk3/tier_${tier}`;
        const shortTag = `kubejs:tier_${tier}`;

        event.add(canonicalTag, items);
        // Short alias for faster JEI typing: $tier_1 ... $tier_10.
        event.add(shortTag, `#${canonicalTag}`);
    });

    // Optional umbrella tag for the complete progression catalogue.
    for (let tier = 1; tier <= 10; tier++) {
        event.add('kubejs:tk3/progression', `#kubejs:tk3/tier_${tier}`);
    }
});
