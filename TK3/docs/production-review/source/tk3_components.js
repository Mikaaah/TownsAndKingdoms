// Full restart required.
// T&K3 supplied gameplay asset registry.
// Every supplied gameplay item texture is registered unless the installed mod already supplies the exact item.
StartupEvents.registry("item", event => {
    event.create("tk3_arcane_mechanism")
        .displayName("Arcane Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/abstruse_mechanism");
    event.create("tk3_calculation_mechanism")
        .displayName("Calculation Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/calculation_mechanism");
    event.create("tk3_singularity_mechanism")
        .displayName("Singularity Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/ender_mechanism");
    event.create("tk3_heat_engine")
        .displayName("Heat Engine")
        .texture("kubejs:tk3_supplied/mechanism/heat_engine");
    event.create("tk3_containment_mechanism")
        .displayName("Containment Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/high_power_mechanism");
    event.create("tk3_hydraulic_engine")
        .displayName("Hydraulic Engine")
        .texture("kubejs:tk3_supplied/mechanism/hydraulic_engine");
    event.create("tk3_incomplete_arcane_mechanism")
        .displayName("Incomplete Arcane Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_abstruse_mechanism");
    event.create("tk3_incomplete_calculation_mechanism")
        .displayName("Incomplete Calculation Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_calculation_mechanism");
    event.create("tk3_incomplete_singularity_mechanism")
        .displayName("Incomplete Singularity Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_ender_mechanism");
    event.create("tk3_incomplete_heat_engine")
        .displayName("Incomplete Heat Engine")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_heat_engine");
    event.create("tk3_incomplete_containment_mechanism")
        .displayName("Incomplete Containment Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_high_power_mechanism");
    event.create("tk3_incomplete_hydraulic_engine")
        .displayName("Incomplete Hydraulic Engine")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_hydraulic_engine");
    event.create("tk3_incomplete_inductive_mechanism")
        .displayName("Incomplete Inductive Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_inductive_mechanism");
    event.create("tk3_incomplete_infernal_mechanism")
        .displayName("Incomplete Infernal Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_infernal_mechanism");
    event.create("tk3_incomplete_integrated_mechanism")
        .displayName("Incomplete Integrated Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_integrated_mechanism");
    event.create("tk3_incomplete_kinetic_mechanism")
        .displayName("Incomplete Rotation Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_kinetic_mechanism");
    event.create("tk3_incomplete_chemical_mechanism")
        .displayName("Incomplete Chemical Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_locomotive_mechanism");
    event.create("tk3_incomplete_reinforced_mechanism")
        .displayName("Incomplete Reinforced Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_reinforced_mechanism");
    event.create("tk3_incomplete_rotation_mechanism")
        .displayName("Incomplete Rotation Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_rotation_mechanism");
    event.create("tk3_incomplete_sealed_mechanism")
        .displayName("Incomplete Sealed Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_sealed_mechanism");
    event.create("tk3_incomplete_steam_engine")
        .displayName("Incomplete Steam Engine")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_steam_engine");
    event.create("tk3_incomplete_steel_mechanism")
        .displayName("Incomplete Steel Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_steel_mechanism");
    event.create("tk3_inductive_mechanism")
        .displayName("Inductive Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/inductive_mechanism");
    event.create("tk3_infernal_mechanism")
        .displayName("Infernal Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/infernal_mechanism");
    event.create("tk3_integrated_mechanism")
        .displayName("Integrated Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/integrated_mechanism");
    event.create("tk3_kinetic_mechanism")
        .displayName("Rotation Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/kinetic_mechanism");
    event.create("tk3_chemical_mechanism")
        .displayName("Chemical Engineering Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/locomotive_mechanism");
    event.create("tk3_makeshift_rotation_mechanism")
        .displayName("Makeshift Rotation Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/makeshift_kinetic_mechanism");
    event.create("tk3_reinforced_mechanism")
        .displayName("Reinforced Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/reinforced_mechanism");
    event.create("tk3_rotation_mechanism")
        .displayName("Rotation Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/rotation_mechanism");
    event.create("tk3_sealed_mechanism")
        .displayName("Sealed Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/sealed_mechanism");
    event.create("tk3_steam_engine")
        .displayName("Steam Engine")
        .texture("kubejs:tk3_supplied/mechanism/steam_engine");
    event.create("tk3_steel_mechanism")
        .displayName("Steel Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/steel_mechanism");
    event.create("tk3_sovereign_mechanism")
        .displayName("Sovereign Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/time_mechanism");
    event.create("tk3_amethyst_tube")
        .displayName("Amethyst Tube")
        .texture("kubejs:tk3_supplied/crafting_specific/amethyst_bulb");
    event.create("tk3_andesite_template")
        .displayName("Andesite Template")
        .texture("kubejs:tk3_supplied/crafting_specific/andesite_template");
    event.create("tk3_blue_tube")
        .displayName("Blue Tube")
        .texture("kubejs:tk3_supplied/crafting_specific/blue_tube");
    event.create("tk3_boot_medium")
        .displayName("Boot Medium")
        .texture("kubejs:tk3_supplied/crafting_specific/boot_medium");
    event.create("tk3_brass_template")
        .displayName("Brass Template")
        .texture("kubejs:tk3_supplied/crafting_specific/brass_template");
    event.create("tk3_capacitor_ceramic")
        .displayName("Capacitor Ceramic")
        .texture("kubejs:tk3_supplied/crafting_specific/capacitor_ceramic");
    event.create("tk3_capacitor_ceramic_dirt")
        .displayName("Capacitor Ceramic Dirt")
        .texture("kubejs:tk3_supplied/crafting_specific/capacitor_ceramic_dirt");
    event.create("tk3_capacitor_ceramic_incomplete")
        .displayName("Capacitor Ceramic Incomplete")
        .texture("kubejs:tk3_supplied/crafting_specific/capacitor_ceramic_incomplete");
    event.create("tk3_capacitor_electrolytic")
        .displayName("Capacitor Electrolytic")
        .texture("kubejs:tk3_supplied/crafting_specific/capacitor_electrolytic");
    event.create("tk3_capacitor_electrolytic_dirt")
        .displayName("Capacitor Electrolytic Dirt")
        .texture("kubejs:tk3_supplied/crafting_specific/capacitor_electrolytic_dirt");
    event.create("tk3_capacitor_electrolytic_incomplete")
        .displayName("Capacitor Electrolytic Incomplete")
        .texture("kubejs:tk3_supplied/crafting_specific/capacitor_electrolytic_incomplete");
    event.create("tk3_circuit_scrap")
        .displayName("Circuit Scrap")
        .texture("kubejs:tk3_supplied/crafting_specific/circuit_scrap");
    event.create("tk3_creative_core")
        .displayName("Creative Core")
        .texture("kubejs:tk3_supplied/crafting_specific/creative_core");
    event.create("tk3_dye_singularity")
        .displayName("Dye Singularity")
        .texture("kubejs:tk3_supplied/crafting_specific/dye_entangled_singularity");
    event.create("tk3_empty_tube")
        .displayName("Empty Tube")
        .texture("kubejs:tk3_supplied/crafting_specific/empty_tube");
    event.create("tk3_fan_component")
        .displayName("Fan Component")
        .texture("kubejs:tk3_supplied/crafting_specific/fan_component");
    event.create("tk3_incomplete_calculation_processor")
        .displayName("Incomplete Calculation Processor")
        .texture("kubejs:tk3_supplied/crafting_specific/incomplete_calculation_processor");
    event.create("tk3_incomplete_engineering_processor")
        .displayName("Incomplete Engineering Processor")
        .texture("kubejs:tk3_supplied/crafting_specific/incomplete_engineering_processor");
    event.create("tk3_incomplete_integrated_circuit")
        .displayName("Incomplete Integrated Circuit")
        .texture("kubejs:tk3_supplied/crafting_specific/incomplete_integrated_circuit");
    event.create("tk3_incomplete_logic_processor")
        .displayName("Incomplete Logic Processor")
        .texture("kubejs:tk3_supplied/crafting_specific/incomplete_logic_processor");
    event.create("tk3_incomplete_matter_construct")
        .displayName("Incomplete Matter Construct")
        .texture("kubejs:tk3_supplied/crafting_specific/incomplete_matter_construct");
    event.create("tk3_incomplete_tech_tube")
        .displayName("Incomplete Tech Tube")
        .texture("kubejs:tk3_supplied/crafting_specific/incomplete_tech_tube");
    event.create("tk3_integrated_circuit")
        .displayName("Integrated Circuit")
        .texture("kubejs:tk3_supplied/crafting_specific/integrated_circuit");
    event.create("tk3_matter_plastic")
        .displayName("Matter Plastic")
        .texture("kubejs:tk3_supplied/crafting_specific/matter_plastics");
    event.create("tk3_radiant_coil")
        .displayName("Radiant Coil")
        .texture("kubejs:tk3_supplied/crafting_specific/radiant_coil");
    event.create("tk3_resistor")
        .displayName("Resistor")
        .texture("kubejs:tk3_supplied/crafting_specific/resistor");
    event.create("tk3_resistor_dirt")
        .displayName("Resistor Dirt")
        .texture("kubejs:tk3_supplied/crafting_specific/resistor_dirt");
    event.create("tk3_resistor_incomplete")
        .displayName("Resistor Incomplete")
        .texture("kubejs:tk3_supplied/crafting_specific/resistor_incomplete");
    event.create("tk3_rough_sand")
        .displayName("Rough Sand")
        .texture("kubejs:tk3_supplied/crafting_specific/rough_sand");
    event.create("tk3_siliceous_compound")
        .displayName("Siliceous Compound")
        .texture("kubejs:tk3_supplied/crafting_specific/siliceous_compound");
    event.create("tk3_singularity_gem")
        .displayName("Singularity Gem")
        .texture("kubejs:tk3_supplied/crafting_specific/singularity_gem");
    event.create("tk3_tech_tube")
        .displayName("Tech Tube")
        .texture("kubejs:tk3_supplied/crafting_specific/tech_tube");
    event.create("tk3_unstable_creative_core")
        .displayName("Unstable Creative Core")
        .texture("kubejs:tk3_supplied/crafting_specific/unstable_creative_core");
    event.create("tk3_andesite_alloy_sheet")
        .displayName("Andesite Alloy Sheet")
        .texture("kubejs:tk3_supplied/geology/andesite_alloy_sheet");
    event.create("tk3_blaze_gold")
        .displayName("Blaze Gold")
        .texture("kubejs:tk3_supplied/geology/blaze_gold");
    event.create("tk3_blaze_gold_sheet")
        .displayName("Blaze Gold Sheet")
        .texture("kubejs:tk3_supplied/geology/blaze_gold_sheet");
    event.create("tk3_bronze_ingot")
        .displayName("Bronze Ingot")
        .texture("kubejs:tk3_supplied/geology/bronze_ingot");
    event.create("tk3_bronze_nugget")
        .displayName("Bronze Nugget")
        .texture("kubejs:tk3_supplied/geology/bronze_nugget");
    event.create("tk3_bronze_sheet")
        .displayName("Bronze Sheet")
        .texture("kubejs:tk3_supplied/geology/bronze_sheet");
    event.create("tk3_chromatic_compound")
        .displayName("Chromatic Compound")
        .texture("kubejs:tk3_supplied/geology/chromatic_compound");
    event.create("tk3_coal_piece")
        .displayName("Coal Piece")
        .texture("kubejs:tk3_supplied/geology/coal_piece");
    event.create("tk3_compound_base")
        .displayName("Compound Base")
        .texture("kubejs:tk3_supplied/geology/compound_base");
    event.create("tk3_ember_alloy")
        .displayName("Ember Alloy")
        .texture("kubejs:tk3_supplied/geology/ember_alloy");
    event.create("tk3_incomplete_stargaze_singularity")
        .displayName("Incomplete Stargaze Singularity")
        .texture("kubejs:tk3_supplied/geology/incomplete_stargaze_singularity");
    event.create("tk3_industrial_iron_ingot")
        .displayName("Industrial Iron Ingot")
        .texture("kubejs:tk3_supplied/geology/industrial_iron_ingot");
    event.create("tk3_industrial_iron_nugget")
        .displayName("Industrial Iron Nugget")
        .texture("kubejs:tk3_supplied/geology/industrial_iron_nugget");
    event.create("tk3_industrial_iron_sheet")
        .displayName("Industrial Iron Sheet")
        .texture("kubejs:tk3_supplied/geology/industrial_iron_sheet");
    event.create("tk3_lapis_alloy")
        .displayName("Lapis Alloy")
        .texture("kubejs:tk3_supplied/geology/lapis_alloy");
    event.create("tk3_lapis_sheet")
        .displayName("Lapis Sheet")
        .texture("kubejs:tk3_supplied/geology/lapis_sheet");
    event.create("tk3_mana_infused_sheet")
        .displayName("Mana Infused Sheet")
        .texture("kubejs:tk3_supplied/geology/mana_infused_sheet");
    event.create("tk3_mithril_ingot")
        .displayName("Mithril Ingot")
        .texture("kubejs:tk3_supplied/geology/mithril_ingot");
    event.create("tk3_mithril_nugget")
        .displayName("Mithril Nugget")
        .texture("kubejs:tk3_supplied/geology/mithril_nugget");
    event.create("tk3_mithril_sheet")
        .displayName("Mithril Sheet")
        .texture("kubejs:tk3_supplied/geology/mithril_sheet");
    event.create("tk3_overcharge_alloy")
        .displayName("Overcharge Alloy")
        .texture("kubejs:tk3_supplied/geology/overcharge_alloy");
    event.create("tk3_overcharge_plate")
        .displayName("Overcharged Alloy Plate")
        .texture("kubejs:tk3_supplied/geology/overcharge_alloy_sheet");
    event.create("tk3_polished_spectral_ruby")
        .displayName("Polished Spectral Ruby")
        .texture("kubejs:tk3_supplied/geology/polished_spectral_ruby");
    event.create("tk3_radiant_obsidian")
        .displayName("Radiant Obsidian")
        .texture("kubejs:tk3_supplied/geology/radiant_obsidian");
    event.create("tk3_radiant_sheet")
        .displayName("Radiant Sheet")
        .texture("kubejs:tk3_supplied/geology/radiant_sheet");
    event.create("tk3_raw_tin")
        .displayName("Raw Tin")
        .texture("kubejs:tk3_supplied/geology/raw_tin");
    event.create("tk3_refined_quartz")
        .displayName("Refined Quartz")
        .texture("kubejs:tk3_supplied/geology/refined_quartz");
    event.create("tk3_refined_radiance")
        .displayName("Refined Radiance")
        .texture("kubejs:tk3_supplied/geology/refined_radiance");
    event.create("tk3_refined_radiance_sheet")
        .displayName("Refined Radiance Sheet")
        .texture("kubejs:tk3_supplied/geology/refined_radiance_sheet");
    event.create("tk3_refinedmanaingot")
        .displayName("Refinedmanaingot")
        .texture("kubejs:tk3_supplied/geology/refinedmanaingot");
    event.create("tk3_shadow_steel")
        .displayName("Shadow Steel")
        .texture("kubejs:tk3_supplied/geology/shadow_steel");
    event.create("tk3_shadow_steel_plate")
        .displayName("Shadow Steel Plate")
        .texture("kubejs:tk3_supplied/geology/shadow_steel_sheet");
    event.create("tk3_spectral_ruby")
        .displayName("Spectral Ruby")
        .texture("kubejs:tk3_supplied/geology/spectral_ruby");
    event.create("tk3_stargaze_alloy")
        .displayName("Stargaze Alloy")
        .texture("kubejs:tk3_supplied/geology/stargaze_singularity");
    event.create("tk3_stargaze_plate")
        .displayName("Stargaze Alloy Plate")
        .texture("kubejs:tk3_supplied/geology/stargaze_singularity_sheet");
    event.create("tk3_steel_ingot")
        .displayName("Steel Ingot")
        .texture("kubejs:tk3_supplied/geology/steel_ingot");
    event.create("tk3_steel_nugget")
        .displayName("Steel Nugget")
        .texture("kubejs:tk3_supplied/geology/steel_nugget");
    event.create("tk3_steel_sheet")
        .displayName("Steel Sheet")
        .texture("kubejs:tk3_supplied/geology/steel_sheet");
    event.create("tk3_sturdy_invar_sheet")
        .displayName("Sturdy Invar Sheet")
        .texture("kubejs:tk3_supplied/geology/sturdy_invar_sheet");
    event.create("tk3_tin_ingot")
        .displayName("Tin Ingot")
        .texture("kubejs:tk3_supplied/geology/tin_ingot");
    event.create("tk3_tin_nugget")
        .displayName("Tin Nugget")
        .texture("kubejs:tk3_supplied/geology/tin_nugget");
    event.create("tk3_tin_sheet")
        .displayName("Tin Sheet")
        .texture("kubejs:tk3_supplied/geology/tin_sheet");
    event.create("tk3_zinc_sheet")
        .displayName("Zinc Sheet")
        .texture("kubejs:tk3_supplied/geology/zinc_sheet");
    event.create("tk3_crystallized_sap")
        .displayName("Crystallized Sap")
        .texture("kubejs:tk3_supplied/items/crystallized_sap");
    event.create("tk3_raw_rubber")
        .displayName("Raw Rubber")
        .texture("kubejs:tk3_supplied/items/raw_rubber");
    event.create("tk3_rubber")
        .displayName("Rubber")
        .texture("kubejs:tk3_supplied/items/rubber");
    event.create("tk3_rubber_belt")
        .displayName("Rubber Belt")
        .texture("kubejs:tk3_supplied/items/rubber_belt");
    event.create("tk3_spent_paintball")
        .displayName("Spent Paintball")
        .texture("kubejs:tk3_supplied/crafting_specific/circuit_scrap");
    event.create("tk3_chromatic_pigment")
        .displayName("Chromatic Pigment")
        .texture("kubejs:tk3_supplied/geology/chromatic_compound");
    event.create("tk3_nether_star_focus")
        .displayName("Nether Star Focus")
        .texture("kubejs:tk3_supplied/geology/radiant_obsidian");
    event.create("tk3_ignis_focus")
        .displayName("Ignis Focus")
        .texture("kubejs:tk3_supplied/geology/ember_alloy");
    event.create("tk3_void_focus")
        .displayName("Void Focus")
        .texture("kubejs:tk3_supplied/geology/incomplete_stargaze_singularity");
    event.create("tk3_sovereign_focus")
        .displayName("Sovereign Focus")
        .texture("kubejs:tk3_supplied/crafting_specific/creative_core");
    event.create("tk3_timeless_slurry")
        .displayName("Timeless Slurry")
        .texture("kubejs:tk3_supplied/geology/incomplete_stargaze_singularity");
    event.create("tk3_incomplete_sovereign_mechanism")
        .displayName("Incomplete Sovereign Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/time_mechanism");
    event.create("tk3_network_mechanism")
        .displayName("Legacy Network Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/inductive_mechanism");
    event.create("tk3_incomplete_network_mechanism")
        .displayName("Legacy Incomplete Network Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_inductive_mechanism");
    event.create("tk3_expedition_mechanism")
        .displayName("Legacy Expedition Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/integrated_mechanism");
    event.create("tk3_incomplete_expedition_mechanism")
        .displayName("Legacy Incomplete Expedition Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_integrated_mechanism");
    event.create("tk3_ender_mechanism")
        .displayName("Legacy Ender Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/ender_mechanism");
    event.create("tk3_incomplete_ender_mechanism")
        .displayName("Legacy Incomplete Ender Mechanism")
        .texture("kubejs:tk3_supplied/mechanism/incomplete_ender_mechanism");
    event.create("tk3_shadow_sheet")
        .displayName("Legacy Shadow Steel Sheet")
        .texture("kubejs:tk3_supplied/geology/shadow_steel_sheet");
    event.create("tk3_radiance_sheet")
        .displayName("Legacy Radiance Sheet")
        .texture("kubejs:tk3_supplied/geology/refined_radiance_sheet");
    event.create("tk3_overcharge_sheet")
        .displayName("Legacy Overcharge Sheet")
        .texture("kubejs:tk3_supplied/geology/overcharge_alloy_sheet");
    event.create("tk3_stargaze_singularity")
        .displayName("Legacy Stargaze Singularity")
        .texture("kubejs:tk3_supplied/geology/stargaze_singularity");
});
