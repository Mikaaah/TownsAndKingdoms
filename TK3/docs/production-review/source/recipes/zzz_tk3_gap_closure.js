// priority: -20000
// Towns & Kingdoms 3 — gap-closing / production-depth pass.
// Runs after the progression rework; final whitelist runs at priority -40000.
// Goals: close hard acquisition gaps, replace dead generic-frame inputs,
// and give each late tier more distinct Create / Mekanism / magic processing.

ServerEvents.recipes(event => {
    // KubeJS remove() only sees original recipes; mark earlier script additions too.
    const RecipeFilter = Java.loadClass('dev.latvian.mods.kubejs.recipe.filter.RecipeFilter');
    const MatchContext = Java.loadClass('dev.latvian.mods.kubejs.recipe.filter.RecipeMatchContext$Impl');
    const removeRecipe = filter => {
        event.remove(filter);
        const compiled = RecipeFilter.wrap(filter);
        event.addedRecipes.forEach(recipe => {
            if (!recipe.removed && compiled.test(new MatchContext(recipe))) recipe.remove();
        });
    };

    const removeOutput = id => removeRecipe({ output: id });

    //->------------------------]  Legacy-frame migration [------------------------<-//

    // These blocks remain registry-only for save compatibility. Active recipe inputs are migrated directly in their source files.
    // replaceInput does not modify recipes added by another script in this event.

    //->------------------------]  Foundational component gaps [------------------------<-//

    // Empty Tube / glass tube: mechanical fabrication instead of a hand-craft.
    // 6 panes + 2 iron sheets -> 4 tubes. This becomes the common tube blank for
    // Amethyst, Blue and Tech Tubes.
    removeOutput("kubejs:tk3_empty_tube");
    event.recipes.create.mechanical_crafting(
        "4x kubejs:tk3_empty_tube",
        [
            "GGG",
            "I I",
            "GGG"
        ], {
            G: "minecraft:glass_pane",
            I: "create:iron_sheet"
        })
        .id("kubejs:tk3/components/empty_tube_mechanical_crafting");

    // Press + Basin bootstrap before the Sealed Mechanism.
    event.recipes.create.compacting(
        ['4x kubejs:tk3_empty_tube'],
        ['6x minecraft:glass_pane', '2x create:iron_sheet'])
        .id('kubejs:tk3/components/empty_tube_compacting');

    // Give the supplied Andesite Alloy Sheet artwork a real job.
    removeOutput("kubejs:tk3_andesite_alloy_sheet");
    event.recipes.create.pressing(
        ["kubejs:tk3_andesite_alloy_sheet"],
        ["create:andesite_alloy"])
        .id("kubejs:tk3/components/andesite_alloy_sheet");

    // Bell chain: mundane bell -> engineered bell -> haunting resonance tool.
    removeOutput("create:peculiar_bell");
    event.recipes.create.sequenced_assembly(
        ["create:peculiar_bell"],
        "create:desk_bell",
        [
            event.recipes.create.deploying(
                ["create:desk_bell"],
                ["create:desk_bell", "create:brass_sheet"]),
            event.recipes.create.deploying(
                ["create:desk_bell"],
                ["create:desk_bell", "create:electron_tube"]),
            event.recipes.create.pressing(
                ["create:desk_bell"],
                ["create:desk_bell"])
        ])
        .transitionalItem("create:desk_bell")
        .loops(2)
        .id("kubejs:tk3/components/peculiar_bell_sequence");

    removeOutput("create:haunted_bell");
    event.recipes.create.haunting(
        ["create:haunted_bell"],
        ["create:peculiar_bell"])
        .id("kubejs:tk3/components/haunted_bell");

    //->------------------------]  Mechanism depth pass [------------------------<-//

    // Rotation: bootstrap machine gives access to the Press, then the real mechanism
    // becomes a two-pass engineered assembly rather than two plain alloy deploys.
    removeOutput("kubejs:tk3_rotation_mechanism");
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_rotation_mechanism"],
        "#minecraft:wooden_slabs",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_rotation_mechanism"],
                ["kubejs:tk3_incomplete_rotation_mechanism", "kubejs:tk3_andesite_alloy_sheet"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_rotation_mechanism"],
                ["kubejs:tk3_incomplete_rotation_mechanism", "create:cogwheel"]),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_rotation_mechanism"],
                ["kubejs:tk3_incomplete_rotation_mechanism"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_rotation_mechanism"],
                ["kubejs:tk3_incomplete_rotation_mechanism", "create:wrench"])
                .keepHeldItem()
        ])
        .transitionalItem("kubejs:tk3_incomplete_rotation_mechanism")
        .loops(2)
        .id("kubejs:tk3/mechanisms/rotation");

    // Sealed: actual tube + rubber sealing + water pressure test through a Spout.
    removeOutput("kubejs:tk3_sealed_mechanism");
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_sealed_mechanism"],
        "kubejs:tk3_rotation_mechanism",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sealed_mechanism"],
                ["kubejs:tk3_incomplete_sealed_mechanism", "create:copper_sheet"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sealed_mechanism"],
                ["kubejs:tk3_incomplete_sealed_mechanism", "kubejs:tk3_empty_tube"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sealed_mechanism"],
                ["kubejs:tk3_incomplete_sealed_mechanism", "kubejs:tk3_rubber"]),
            event.recipes.create.filling(
                ["kubejs:tk3_incomplete_sealed_mechanism"],
                ["kubejs:tk3_incomplete_sealed_mechanism", Fluid.of("minecraft:water", 100)]),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_sealed_mechanism"],
                ["kubejs:tk3_incomplete_sealed_mechanism"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_sealed_mechanism")
        .loops(2)
        .id("kubejs:tk3/mechanisms/sealed");

    // Precision: retain Create's recognizable brass/electron/gold identity but require
    // actual machining between applications and two belt passes.
    removeOutput("create:precision_mechanism");
    event.recipes.create.sequenced_assembly(
        ["create:precision_mechanism"],
        "kubejs:tk3_sealed_mechanism",
        [
            event.recipes.create.deploying(
                ["create:incomplete_precision_mechanism"],
                ["create:incomplete_precision_mechanism", "create:brass_sheet"]),
            event.recipes.create.deploying(
                ["create:incomplete_precision_mechanism"],
                ["create:incomplete_precision_mechanism", "create:electron_tube"]),
            event.recipes.create.deploying(
                ["create:incomplete_precision_mechanism"],
                ["create:incomplete_precision_mechanism", "create:golden_sheet"]),
            event.recipes.create.cutting(
                ["create:incomplete_precision_mechanism"],
                ["create:incomplete_precision_mechanism"]),
            event.recipes.create.pressing(
                ["create:incomplete_precision_mechanism"],
                ["create:incomplete_precision_mechanism"])
        ])
        .transitionalItem("create:incomplete_precision_mechanism")
        .loops(2)
        .id("kubejs:tk3/mechanisms/precision");

    // Calculation: processor stack is physically assembled, flashed with XP and then
    // booted by the reusable Boot Medium.
    removeOutput("kubejs:tk3_calculation_mechanism");
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_calculation_mechanism"],
        "create:precision_mechanism",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_calculation_mechanism"],
                ["kubejs:tk3_incomplete_calculation_mechanism", "ae2:logic_processor"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_calculation_mechanism"],
                ["kubejs:tk3_incomplete_calculation_mechanism", "ae2:calculation_processor"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_calculation_mechanism"],
                ["kubejs:tk3_incomplete_calculation_mechanism", "ae2:engineering_processor"]),
            event.recipes.create.filling(
                ["kubejs:tk3_incomplete_calculation_mechanism"],
                ["kubejs:tk3_incomplete_calculation_mechanism", Fluid.of("create_enchantment_industry:experience", 100)]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_calculation_mechanism"],
                ["kubejs:tk3_incomplete_calculation_mechanism", "kubejs:tk3_boot_medium"])
                .keepHeldItem(),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_calculation_mechanism"],
                ["kubejs:tk3_incomplete_calculation_mechanism"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_calculation_mechanism")
        .loops(1)
        .id("kubejs:tk3/mechanisms/calculation");

    // Inductive: make the first Mekanism transition feel like repeated coil/circuit winding.
    removeOutput("kubejs:tk3_inductive_mechanism");
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_inductive_mechanism"],
        "kubejs:tk3_calculation_mechanism",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_inductive_mechanism"],
                ["kubejs:tk3_incomplete_inductive_mechanism", "kubejs:tk3_chromatic_compound"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_inductive_mechanism"],
                ["kubejs:tk3_incomplete_inductive_mechanism", "mekanism:basic_control_circuit"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_inductive_mechanism"],
                ["kubejs:tk3_incomplete_inductive_mechanism", "createaddition:copper_wire"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_inductive_mechanism"],
                ["kubejs:tk3_incomplete_inductive_mechanism", "createaddition:capacitor"]),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_inductive_mechanism"],
                ["kubejs:tk3_incomplete_inductive_mechanism"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_inductive_mechanism")
        .loops(2)
        .id("kubejs:tk3/mechanisms/inductive");

    // Arcane unfinished stage gets two passes before Ars performs the final transformation.
    removeOutput("kubejs:tk3_incomplete_arcane_mechanism");
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_incomplete_arcane_mechanism"],
        "kubejs:tk3_inductive_mechanism",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_arcane_mechanism"],
                ["kubejs:tk3_incomplete_arcane_mechanism", "kubejs:tk3_amethyst_tube"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_arcane_mechanism"],
                ["kubejs:tk3_incomplete_arcane_mechanism", "create_wizardry:arcane_sheet"]),
            event.recipes.create.filling(
                ["kubejs:tk3_incomplete_arcane_mechanism"],
                ["kubejs:tk3_incomplete_arcane_mechanism", Fluid.of("create_enchantment_industry:experience", 100)]),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_arcane_mechanism"],
                ["kubejs:tk3_incomplete_arcane_mechanism"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_arcane_mechanism")
        .loops(2)
        .id("kubejs:tk3/arcane/incomplete_arcane_mechanism");

    // Chemical Engineering: repeat the plate/circuit/spout engineering pass twice.
    removeOutput("kubejs:tk3_chemical_mechanism");
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_chemical_mechanism"],
        "kubejs:tk3_arcane_mechanism",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_chemical_mechanism"],
                ["kubejs:tk3_incomplete_chemical_mechanism", "kubejs:tk3_shadow_steel_plate"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_chemical_mechanism"],
                ["kubejs:tk3_incomplete_chemical_mechanism", "mekanism:advanced_control_circuit"]),
            event.recipes.create.filling(
                ["kubejs:tk3_incomplete_chemical_mechanism"],
                ["kubejs:tk3_incomplete_chemical_mechanism", Fluid.of("create_enchantment_industry:experience", 100)]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_chemical_mechanism"],
                ["kubejs:tk3_incomplete_chemical_mechanism", "create:sturdy_sheet"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_chemical_mechanism"],
                ["kubejs:tk3_incomplete_chemical_mechanism", "kubejs:tk3_nether_star_focus"])
                .keepHeldItem(),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_chemical_mechanism"],
                ["kubejs:tk3_incomplete_chemical_mechanism"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_chemical_mechanism")
        .loops(2)
        .id("kubejs:tk3/mechanisms/chemical_engineering");

    // Containment gets two full reinforcement passes.
    removeOutput("kubejs:tk3_containment_mechanism");
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_containment_mechanism"],
        "kubejs:tk3_chemical_mechanism",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_containment_mechanism"],
                ["kubejs:tk3_incomplete_containment_mechanism", "kubejs:tk3_overcharge_plate"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_containment_mechanism"],
                ["kubejs:tk3_incomplete_containment_mechanism", "create_aquatic_ambitions:prismarine_alloy"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_containment_mechanism"],
                ["kubejs:tk3_incomplete_containment_mechanism", "create_aquatic_ambitions:spiky_shell"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_containment_mechanism"],
                ["kubejs:tk3_incomplete_containment_mechanism", "ars_nouveau:abjuration_essence"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_containment_mechanism"],
                ["kubejs:tk3_incomplete_containment_mechanism", "mekanism:elite_control_circuit"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_containment_mechanism"],
                ["kubejs:tk3_incomplete_containment_mechanism", "kubejs:tk3_ignis_focus"])
                .keepHeldItem(),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_containment_mechanism"],
                ["kubejs:tk3_incomplete_containment_mechanism"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_containment_mechanism")
        .loops(2)
        .id("kubejs:tk3/mechanisms/containment");

    // Singularity also requires two antimatter-era assembly passes before completion.
    removeOutput("kubejs:tk3_singularity_mechanism");
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_singularity_mechanism"],
        "kubejs:tk3_containment_mechanism",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_singularity_mechanism"],
                ["kubejs:tk3_incomplete_singularity_mechanism", "kubejs:tk3_stargaze_plate"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_singularity_mechanism"],
                ["kubejs:tk3_incomplete_singularity_mechanism", "kubejs:tk3_radiant_coil"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_singularity_mechanism"],
                ["kubejs:tk3_incomplete_singularity_mechanism", "kubejs:tk3_blue_tube"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_singularity_mechanism"],
                ["kubejs:tk3_incomplete_singularity_mechanism", "mekanism:ultimate_control_circuit"]),
            event.recipes.create.filling(
                ["kubejs:tk3_incomplete_singularity_mechanism"],
                ["kubejs:tk3_incomplete_singularity_mechanism", Fluid.of("create_enchantment_industry:experience", 250)]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_singularity_mechanism"],
                ["kubejs:tk3_incomplete_singularity_mechanism", "kubejs:tk3_void_focus"])
                .keepHeldItem(),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_singularity_mechanism"],
                ["kubejs:tk3_incomplete_singularity_mechanism"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_singularity_mechanism")
        .loops(2)
        .id("kubejs:tk3/mechanisms/singularity");

    // Sovereign: three repeated production passes. The focus remains reusable.
    removeOutput("kubejs:tk3_sovereign_mechanism");
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_sovereign_mechanism"],
        "kubejs:tk3_singularity_mechanism",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sovereign_mechanism"],
                ["kubejs:tk3_incomplete_sovereign_mechanism", "kubejs:tk3_matter_plastic"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sovereign_mechanism"],
                ["kubejs:tk3_incomplete_sovereign_mechanism", "kubejs:tk3_tech_tube"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sovereign_mechanism"],
                ["kubejs:tk3_incomplete_sovereign_mechanism", "mekanism:pellet_antimatter"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sovereign_mechanism"],
                ["kubejs:tk3_incomplete_sovereign_mechanism", "ae2:engineering_processor"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sovereign_mechanism"],
                ["kubejs:tk3_incomplete_sovereign_mechanism", "kubejs:tk3_sovereign_focus"])
                .keepHeldItem(),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_sovereign_mechanism"],
                ["kubejs:tk3_incomplete_sovereign_mechanism"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_sovereign_mechanism")
        .loops(3)
        .id("kubejs:tk3/mechanisms/sovereign");

    //->------------------------]  Enchanting / experience production identity [------------------------<-//

    // Blaze Enchanter belongs to the Inductive tier, not Calculation. Ars performs
    // the magical conversion while Blaze Gold and the first Mek mechanism supply the tech.
    removeOutput("create_enchantment_industry:blaze_enchanter");
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "kubejs:tk3_blaze_gold_sheet",
            "ars_nouveau:source_gem",
            "minecraft:experience_bottle",
            "create:blaze_burner"
        ],
        "kubejs:tk3_inductive_mechanism",
        "create_enchantment_industry:blaze_enchanter",
        2500)
        .id("kubejs:tk3/tier_5/blaze_enchanter");

    //->------------------------]  Resonance / Matter network [------------------------<-//

    // Radiant Obsidian returns as a meaningful TNK2-inspired bridge material.
    removeOutput("kubejs:tk3_radiant_obsidian");
    event.recipes.create.compacting(
        ["kubejs:tk3_radiant_obsidian"],
        [
            "minecraft:crying_obsidian",
            "2x kubejs:tk3_refined_radiance",
            Fluid.of("create_enchantment_industry:experience", 250)
        ])
        .heated()
        .id("kubejs:tk3/sovereign/radiant_obsidian");

    // Resonating / Refined Quartz: Shadow Steel + charged Certus are repeatedly
    // resonated with Liquid XP and a reusable Haunted Bell.
    removeOutput("kubejs:tk3_refined_quartz");
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_refined_quartz"],
        "kubejs:tk3_shadow_steel",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_shadow_steel"],
                ["kubejs:tk3_shadow_steel", "ae2:charged_certus_quartz_crystal"]),
            event.recipes.create.filling(
                ["kubejs:tk3_shadow_steel"],
                ["kubejs:tk3_shadow_steel", Fluid.of("create_enchantment_industry:experience", 100)]),
            event.recipes.create.deploying(
                ["kubejs:tk3_shadow_steel"],
                ["kubejs:tk3_shadow_steel", "create:haunted_bell"])
                .keepHeldItem(),
            event.recipes.create.pressing(
                ["kubejs:tk3_shadow_steel"],
                ["kubejs:tk3_shadow_steel"])
        ])
        .transitionalItem("kubejs:tk3_shadow_steel")
        .loops(2)
        .id("kubejs:tk3/sovereign/refined_quartz_resonance");

    // Tech Tube: late electronic tube. Repeated alloy/wire/XP charging makes it
    // distinct from Amethyst Tube and Blue Tube.
    removeOutput("kubejs:tk3_tech_tube");
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_tech_tube"],
        "kubejs:tk3_empty_tube",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_tech_tube"],
                ["kubejs:tk3_incomplete_tech_tube", "createaddition:copper_wire"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_tech_tube"],
                ["kubejs:tk3_incomplete_tech_tube", "mekanism:alloy_atomic"]),
            event.recipes.create.filling(
                ["kubejs:tk3_incomplete_tech_tube"],
                ["kubejs:tk3_incomplete_tech_tube", Fluid.of("create_enchantment_industry:experience", 100)]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_tech_tube"],
                ["kubejs:tk3_incomplete_tech_tube", "kubejs:tk3_refined_quartz"]),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_tech_tube"],
                ["kubejs:tk3_incomplete_tech_tube"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_tech_tube")
        .loops(2)
        .id("kubejs:tk3/sovereign/tech_tube");

    // Matter Construct / Circuit Scrap: TNK2's Radiant Obsidian + Matter Ball idea,
    // upgraded with Atomic Alloy and a Mekanism Enrichment finish.
    removeOutput("kubejs:tk3_circuit_scrap");
    event.recipes.create.mechanical_crafting(
        "kubejs:tk3_incomplete_matter_construct",
        [
            "RAR",
            "AMA",
            "RAR"
        ], {
            R: "kubejs:tk3_radiant_obsidian",
            A: "mekanism:alloy_atomic",
            M: "ae2:matter_ball"
        })
        .id("kubejs:tk3/sovereign/incomplete_matter_construct");

    event.custom({
        type: "mekanism:enriching",
        input: {
            count: 1,
            item: "kubejs:tk3_incomplete_matter_construct"
        },
        output: {
            count: 1,
            id: "kubejs:tk3_circuit_scrap"
        }
    }).id("kubejs:tk3/sovereign/matter_construct_enriching");

    // Matter Plastic now follows the T&K2 relationship: Matter Construct + Tech Tube,
    // with HDPE as the Mekanism polymer binder. Two crafts per operation keep throughput sane.
    removeOutput("kubejs:tk3_matter_plastic");
    event.recipes.create.mechanical_crafting(
        "2x kubejs:tk3_matter_plastic",
        [
            "HTH",
            "CMC",
            "HTH"
        ], {
            H: "mekanism:hdpe_sheet",
            T: "kubejs:tk3_tech_tube",
            C: "kubejs:tk3_circuit_scrap",
            M: "ae2:matter_ball"
        })
        .id("kubejs:tk3/sovereign/matter_plastic");

    // Singularity Gem is intentionally a repeated stabilization process now.
    removeOutput("kubejs:tk3_singularity_gem");
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_singularity_gem"],
        "kubejs:tk3_circuit_scrap",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_circuit_scrap"],
                ["kubejs:tk3_circuit_scrap", "kubejs:tk3_refined_quartz"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_circuit_scrap"],
                ["kubejs:tk3_circuit_scrap", "kubejs:tk3_stargaze_plate"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_circuit_scrap"],
                ["kubejs:tk3_circuit_scrap", "kubejs:tk3_overcharge_alloy"]),
            event.recipes.create.filling(
                ["kubejs:tk3_circuit_scrap"],
                ["kubejs:tk3_circuit_scrap", Fluid.of("create_enchantment_industry:experience", 250)]),
            event.recipes.create.pressing(
                ["kubejs:tk3_circuit_scrap"],
                ["kubejs:tk3_circuit_scrap"])
        ])
        .transitionalItem("kubejs:tk3_circuit_scrap")
        .loops(2)
        .id("kubejs:tk3/sovereign/singularity_gem");

    //->------------------------]  Side-path upgrades [------------------------<-//

    // Aeronautics: no more one-click shapeless gyro bearing.
    removeOutput("aeronautics:gyroscopic_propeller_bearing");
    event.recipes.create.mechanical_crafting(
        "aeronautics:gyroscopic_propeller_bearing",
        [
            " S ",
            "RPR",
            " C "
        ], {
            S: "create:sturdy_sheet",
            R: "create:rotation_speed_controller",
            P: "aeronautics:propeller_bearing",
            C: "kubejs:tk3_chemical_mechanism"
        })
        .id("kubejs:tk3/addons/aeronautics_gyroscopic_propeller_bearing");

    // Alex's Caves Quarry becomes a real large Mechanical Crafter project.
    removeOutput("alexscaves:quarry");
    event.recipes.create.mechanical_crafting(
        "alexscaves:quarry",
        [
            "SDSDS",
            "DCCCD",
            "SCMCS",
            "DCCCD",
            "SDSDS"
        ], {
            S: "create:sturdy_sheet",
            D: "create:mechanical_drill",
            C: "kubejs:tk3_chemical_mechanism",
            M: "create:mechanical_bearing"
        })
        .id("kubejs:tk3/addons/alexscaves_quarry");

    // Dragonforge Fire Input: containment engineering + dragon material + Blaze Gold.
    removeOutput("iceandfire:dragonforge_fire_input");
    event.recipes.create.mechanical_crafting(
        "iceandfire:dragonforge_fire_input",
        [
            "BGB",
            "GCG",
            "BGB"
        ], {
            B: "iceandfire:dragonbone",
            G: "kubejs:tk3_blaze_gold_sheet",
            C: "kubejs:tk3_containment_mechanism"
        })
        .id("kubejs:tk3/addons/iceandfire_dragonforge_fire_input");
});
