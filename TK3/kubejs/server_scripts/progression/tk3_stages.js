// TK3 stage enforcement for Minecraft 1.21.1 / AStages 2.5.x.
//
// Design:
// - Recipes carry the actual progression cost through TK3 mechanisms / machine frames.
// - Stages only prevent bypassing tier-defining machines by loot, alternate recipes, or trading.
// - Ordinary resources, cables, components, tools, storage parts, and mod materials are NOT discovery-gated.
// - Mekanism item logistics are intentionally held until Tier 7 (elite/ultimate transporters Tier 8).
// - AE2 basic network parts remain usable; the Controller/Drive are the Tier 4 network anchors.

(function () {
    const milestones = [
        { quest: "B0A94968CD02DE8A", stage: "tk3_tier_2" },
        { quest: "60278B0905A64DC9", stage: "tk3_tier_3" },
        { quest: "B81077B20C8371D3", stage: "tk3_tier_4" },
        { quest: "1CD504854E287D44", stage: "tk3_tier_5" },
        { quest: "4B5E0820B553B7C9", stage: "tk3_tier_6" },
        { quest: "DCEB2AF9B398CAEB", stage: "tk3_tier_7" },
        { quest: "BCC05513E2AD3BA9", stage: "tk3_tier_8" },
        { quest: "91CC6BEFB3017B3F", stage: "tk3_tier_9" },
        { quest: "DD2408B49260ECA5", stage: "tk3_tier_10" },
        { quest: "4585DD0797591621", stage: "tk3_boss_dragon_core" },
        { quest: "B1EC8B5E18AF1A4E", stage: "tk3_boss_nether_star_focus" },
        { quest: "92F27CBC4799C649", stage: "tk3_boss_ignis_focus" },
        { quest: "1EAF5BC1918535CA", stage: "tk3_boss_void_focus" },
        { quest: "DF8CD8E80FF1BEBC", stage: "tk3_boss_sovereign_focus" }
    ];

    function sync(player) {
        const data = FTBQuests.getServerDataFromPlayer(player);
        milestones.forEach(milestone => {
            if (data.isCompleted(milestone.quest) &&
                !AStages.playerHasStage(player, milestone.stage)) {
                AStages.addStageToPlayer(player, milestone.stage);
            }
        });
    }

    PlayerEvents.loggedIn(event => sync(event.player));

    milestones.forEach(milestone => {
        FTBQuestsEvents.completed(milestone.quest, event => {
            event.onlineMembers.forEach(player => sync(player));
        });
    });
})();

function gateItems(stage, items) {
    items.forEach(item => {
        AStages.addRestrictionForItem(
            "tk3/progression/" + stage.replace("tk3_", "") + "/" + item.replace(":", "/"),
            stage,
            item
        )
            // Players may safely carry/find a future-tier item, but cannot craft/use/place it.
            .allowPickup()
            .allowInventoryStorage()
            .allowContainerStorage()
            .showInRecipeViewer()
            .setCanBePlaced(false)
            .setCanItemBeRightClicked(false)
            .setCanInteractWithBlock(false);
    });
}

// Tier 2: Sealed / hydraulic factory layer.
// Basic copper, coral, ice, slime, fluid pipe materials, etc. are deliberately NOT staged.
gateItems("tk3_tier_2", [
    "kubejs:tk3_sealed_mechanism",
    "kubejs:tk3_hydraulic_machine",
    "create:mechanical_pump",
    "create:fluid_tank",
    "create:spout",
    "create:item_drain",
    "create:hose_pulley",
    "create:portable_fluid_interface",
    "create:steam_engine",
    "createaddition:rolling_mill"
]);

// Tier 3: Precision factory layer.
// Brass, redstone, coal, tracks, funnels, sheets, etc. remain normal resources/components.
gateItems("tk3_tier_3", [
    "create:precision_mechanism",
    "kubejs:tk3_precision_machine",
    "create:mechanical_arm",
    "create:rotation_speed_controller",
    "create:mechanical_crafter",
    "create:sequenced_gearshift",
    "create:packager",
    "create:repackager",
    "create:stock_link",
    "create:stock_ticker",
    "create:package_frogport",
    "create:content_observer",
    "create:stockpile_switch",
    "create:elevator_pulley",
    "create:track_station",
    "create:schematicannon"
]);

// Tier 4: Calculation / AE2 bootstrap.
// Certus, Fluix, quartz glass, cables, processors, buses, terminals and cells are NOT staged.
// Their recipes/resources determine availability. Controller + Drive are the progression anchors.
gateItems("tk3_tier_4", [
    "kubejs:tk3_calculation_mechanism",
    "ae2:controller",
    "ae2:drive",
    "ars_nouveau:enchanting_apparatus",
    "create_enchantment_industry:blaze_enchanter"
]);

// Tier 5: first powered Mekanism machines.
// Ingots, alloys, circuits, tanks, energy tablets, cables, pipes and chemicals are NOT staged.
gateItems("tk3_tier_5", [
    "kubejs:tk3_inductive_mechanism",
    "mekanism:metallurgic_infuser",
    "mekanism:enrichment_chamber",
    "mekanism:crusher",
    "mekanism:energized_smelter",
    "mekanism:electric_pump",
    "mekanism:fluidic_plenisher",
    "mekanism:formulaic_assemblicator",
    "mekanism:nutritional_liquifier",
    "mekanism:pigment_extractor",
    "mekanism:precision_sawmill",
    "mekanism:resistive_heater",
    "mekanism:seismic_vibrator",
    "mekanismgenerators:heat_generator",
    "mekanismgenerators:solar_generator",
    "mekanismgenerators:advanced_solar_generator",
    "mekanismgenerators:wind_generator",
    "mekanismgenerators:bio_generator"
]);

// Tier 6: advanced chemical processing.
// HDPE, chemical/fluid storage, AE2/AppMek cells and ordinary transmission remain component-level.
gateItems("tk3_tier_6", [
    "kubejs:tk3_arcane_mechanism",
    "mekanism:chemical_infuser",
    "mekanism:chemical_injection_chamber",
    "mekanism:chemical_oxidizer",
    "mekanism:electrolytic_separator",
    "mekanism:osmium_compressor",
    "mekanism:pressurized_reaction_chamber",
    "mekanism:purification_chamber",
    "mekanism:rotary_condensentrator",
    "mekanism:thermal_evaporation_controller",
    "mekanism:laser",
    "mekanism:laser_amplifier",
    "mekanism:laser_tractor_beam",
    "mekanismgenerators:gas_burning_generator"
]);

// Tier 7: chemical engineering + Mekanism item logistics.
// This is the deliberate first point where Mekanism can move items for the player.
gateItems("tk3_tier_7", [
    "kubejs:tk3_chemical_mechanism",
    "mekanism:basic_logistical_transporter",
    "mekanism:advanced_logistical_transporter",
    "mekanism:restrictive_transporter",
    "mekanism:diversion_transporter",
    "mekanism:logistical_sorter",
    "createaddition:portable_energy_interface",
    "createaddition:tesla_coil",
    "alexscaves:quarry",
    "simulated:physics_assembler"
]);

// Tier 8: containment / nuclear processing.
// Elite+ item transport joins the nuclear tier; ordinary mechanical pipes/tubes/cables remain usable.
gateItems("tk3_tier_8", [
    "kubejs:tk3_containment_mechanism",
    "mekanism:elite_logistical_transporter",
    "mekanism:ultimate_logistical_transporter",
    "mekanism:chemical_crystallizer",
    "mekanism:chemical_dissolution_chamber",
    "mekanism:chemical_washer",
    "mekanism:combiner",
    "mekanism:digital_miner",
    "mekanism:dimensional_stabilizer",
    "mekanism:isotopic_centrifuge",
    "mekanism:radioactive_waste_barrel",
    "mekanism:solar_neutron_activator",
    "mekanismgenerators:fission_reactor_port",
    "mekanismgenerators:fission_reactor_logic_adapter",
    "mekanismgenerators:rotational_complex"
]);

// Tier 9: singularity / quantum / fusion.
gateItems("tk3_tier_9", [
    "kubejs:tk3_singularity_mechanism",
    "ae2:quantum_link",
    "mekanism:antiprotonic_nucleosynthesizer",
    "mekanism:qio_dashboard",
    "mekanism:qio_drive_array",
    "mekanism:quantum_entangloporter",
    "mekanism:teleporter",
    "mekanism:sps_port",
    "mekanismgenerators:fusion_reactor_controller"
]);

// Tier 10: sovereign / creative endgame.
gateItems("tk3_tier_10", [
    "kubejs:tk3_sovereign_mechanism",
    "kubejs:tk3_creative_core",
    "mekanism:meka_tool",
    "mekanism:mekasuit_helmet",
    "mekanism:mekasuit_bodyarmor",
    "mekanism:mekasuit_pants",
    "mekanism:mekasuit_boots"
]);

// Dimension progression remains independent of resource discovery.
AStages.addRestrictionForDimension("tk3/nether", "tk3_tier_3", "minecraft:the_nether");
AStages.addRestrictionForDimension("tk3/end", "tk3_tier_5", "minecraft:the_end");
