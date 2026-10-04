// priority: -10000
// Towns & Kingdoms 3 progression rework — authoritative late pass.
// This script intentionally executes after generated/native recipe imports so it can
// remove conflicting acquisition routes and register the approved T&K3 paths.

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

    //->------------------------]  Progression conflicts / legacy outputs [------------------------<-//

    [
        // Legacy mechanism identities replaced by the corrected tier map.
        "kubejs:tk3_network_mechanism",
        "kubejs:tk3_ender_mechanism",
        "kubejs:tk3_reinforced_mechanism",
        "kubejs:tk3_expedition_mechanism",
        "kubejs:tk3_shadow_sheet",
        "kubejs:tk3_radiance_sheet",
        "kubejs:tk3_overcharge_sheet",
        "kubejs:tk3_stargaze_singularity",
        "kubejs:tk3_shadow_steel",
        "kubejs:tk3_refined_radiance",
        "kubejs:tk3_overcharge_alloy",

        // Generic late-tier frames are registry-only for save compatibility.
        "kubejs:tk3_network_chassis",
        "kubejs:tk3_ender_machine",
        "kubejs:tk3_chemical_machine",
        "kubejs:tk3_expedition_frame",
        "kubejs:tk3_containment_frame",
        "kubejs:tk3_singularity_frame",
        "kubejs:tk3_arcane_machine",

        // AE2 processors are produced through TNK2-style Deployer + sequence routes.
        "ae2:printed_silicon",
        "ae2:printed_logic_processor",
        "ae2:printed_calculation_processor",
        "ae2:printed_engineering_processor",
        "ae2:logic_processor",
        "ae2:calculation_processor",
        "ae2:engineering_processor",

        // Higher-capacity AE2 is intentionally later than the Calculation bootstrap.
        "ae2:drive",
        "ae2:cell_component_16k",
        "ae2:cell_component_64k",
        "ae2:cell_component_256k",

        // Mekanism item transport is disabled; Create remains the item-logistics layer.
        "mekanism:basic_logistical_transporter",
        "mekanism:advanced_logistical_transporter",
        "mekanism:elite_logistical_transporter",
        "mekanism:ultimate_logistical_transporter",
        "mekanism:restrictive_transporter",
        "mekanism:diversion_transporter",
        "mekanism:logistical_sorter"
    ].forEach(removeOutput);

    // Remove current pack shortcuts before the intended first-Mekanism unlock recipes.
    [
        "mekanism:metallurgic_infuser",
        "mekanism:enrichment_chamber",
        "mekanism:crusher",
        "mekanism:energized_smelter"
    ].forEach(removeOutput);

    //->------------------------]  Manual bootstrap / Makeshift Rotation [------------------------<-//

    // Raw bootstrap component: no Andesite Alloy or powered Create machine is required.
    // 7x Andesite + 1x wooden slab + 1x iron ingot -> 1x Makeshift Rotation Mechanism.
    removeRecipe({ output: "kubejs:tk3_makeshift_rotation_mechanism" });
    event.shaped(
        "kubejs:tk3_makeshift_rotation_mechanism",
        [
            "AAA",
            "ASA",
            "AIA"
        ], {
            A: "minecraft:andesite",
            S: "#minecraft:wooden_slabs",
            I: "minecraft:iron_ingot"
        })
        .id("kubejs:tk3/bootstrap/makeshift_rotation_mechanism");

    // Expensive manual frame bootstrap. The normal automated path remains
    // Andesite Casing + Rotation Mechanism -> Rotation Machine.
    removeRecipe({ id: "kubejs:tk3/frames/rotation_manual" });
    event.shapeless(
        "kubejs:tk3_rotation_machine",
        [
            "kubejs:tk3_makeshift_rotation_mechanism",
            "kubejs:tk3_makeshift_rotation_mechanism",
            "create:andesite_casing"
        ])
        .id("kubejs:tk3/frames/rotation_manual");

    //->------------------------]  Tier 1 / Rotation Mechanism [------------------------<-//

    removeRecipe({ output: "kubejs:tk3_rotation_mechanism" });
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_rotation_mechanism"],
        "#minecraft:wooden_slabs",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_rotation_mechanism"],
                ["kubejs:tk3_incomplete_rotation_mechanism", "create:andesite_alloy"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_rotation_mechanism"],
                ["kubejs:tk3_incomplete_rotation_mechanism", "create:andesite_alloy"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_rotation_mechanism"],
                ["kubejs:tk3_incomplete_rotation_mechanism", "create:wrench"])
                .keepHeldItem()
        ])
        .transitionalItem("kubejs:tk3_incomplete_rotation_mechanism")
        .loops(1)
        .id("kubejs:tk3/mechanisms/rotation");

    //->------------------------]  Tier 2 / Sealed Mechanism [------------------------<-//

    removeRecipe({ output: "kubejs:tk3_sealed_mechanism" });
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_sealed_mechanism"],
        "kubejs:tk3_rotation_mechanism",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sealed_mechanism"],
                ["kubejs:tk3_incomplete_sealed_mechanism", "create:copper_sheet"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sealed_mechanism"],
                ["kubejs:tk3_incomplete_sealed_mechanism", "minecraft:glass"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sealed_mechanism"],
                ["kubejs:tk3_incomplete_sealed_mechanism", "kubejs:tk3_rubber"]),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_sealed_mechanism"],
                ["kubejs:tk3_incomplete_sealed_mechanism"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_sealed_mechanism")
        .loops(1)
        .id("kubejs:tk3/mechanisms/sealed");

    //->------------------------]  Tier 3 / Precision Mechanism [------------------------<-//

    // Native Create item, T&K2 production identity: Sealed -> brass/electron/gold sequence.
    removeRecipe({ output: "create:precision_mechanism" });
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
            event.recipes.create.pressing(
                ["create:incomplete_precision_mechanism"],
                ["create:incomplete_precision_mechanism"])
        ])
        .transitionalItem("create:incomplete_precision_mechanism")
        .loops(1)
        .id("kubejs:tk3/mechanisms/precision");

    //->------------------------]  Renewable amethyst / Spectral Ruby / Entanglement [------------------------<-//

    // Create filling is the Spout recipe type. One shard seeds a water-grown bud chain.
    event.recipes.create.filling(
        "ae2:small_quartz_bud",
        ["ae2:certus_quartz_crystal", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/certus_small_bud");

    event.recipes.create.filling(
        "ae2:medium_quartz_bud",
        ["ae2:small_quartz_bud", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/certus_medium_bud");

    event.recipes.create.filling(
        "ae2:large_quartz_bud",
        ["ae2:medium_quartz_bud", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/certus_large_bud");

    event.recipes.create.filling(
        "ae2:quartz_cluster",
        ["ae2:large_quartz_bud", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/certus_cluster");

    event.recipes.create.milling(
        ["4x ae2:certus_quartz_crystal"],
        "ae2:quartz_cluster")
        .id("kubejs:tk3/growth/certus_cluster_harvest");

    event.recipes.create.filling(
        "minecraft:small_amethyst_bud",
        ["minecraft:amethyst_shard", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/amethyst_small_bud");

    event.recipes.create.filling(
        "minecraft:medium_amethyst_bud",
        ["minecraft:small_amethyst_bud", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/amethyst_medium_bud");

    event.recipes.create.filling(
        "minecraft:large_amethyst_bud",
        ["minecraft:medium_amethyst_bud", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/amethyst_large_bud");

    event.recipes.create.filling(
        "minecraft:amethyst_cluster",
        ["minecraft:large_amethyst_bud", Fluid.of("minecraft:water", 250)])
        .id("kubejs:tk3/growth/amethyst_cluster");

    event.recipes.create.crushing(
        ["6x minecraft:amethyst_shard"],
        "minecraft:amethyst_cluster")
        .id("kubejs:tk3/growth/amethyst_cluster_harvest");

    event.recipes.create.mechanical_crafting(
        "2x kubejs:tk3_spectral_ruby",
        [
            " R ",
            "RAR",
            " R "
        ], {
            R: "create:rose_quartz",
            A: "minecraft:amethyst_cluster"
        })
        .id("kubejs:tk3/chromatic/spectral_ruby");

    event.recipes.create.crushing(
        ["ae2:singularity"],
        "kubejs:tk3_spectral_ruby")
        .id("kubejs:tk3/chromatic/spectral_ruby_to_singularity");

    // Renewable before the chromatic chain: Endermen -> Ender Pearls -> Ender Dust.
    event.recipes.create.milling(
        ["2x ae2:ender_dust"],
        "minecraft:ender_pearl")
        .id("kubejs:tk3/chromatic/renewable_ender_dust");

    // Controlled machine entanglement; no world explosion is required.
    event.recipes.create.mixing(
        ["2x ae2:quantum_entangled_singularity"],
        ["ae2:singularity", "ae2:ender_dust", "minecraft:tnt"])
        .heated()
        .id("kubejs:tk3/chromatic/quantum_entanglement");

    // Any one matching dye family can charge the entangled pair.
    [
        "white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray",
        "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"
    ].forEach(color => {
        event.recipes.create.mixing(
            ["kubejs:tk3_dye_singularity"],
            ["ae2:quantum_entangled_singularity", `8x minecraft:${color}_dye`])
            .id(`kubejs:tk3/chromatic/dye_singularity_${color}`);
    });

    // Five usable colors. Probabilities are weighted by remaining drain value so a late
    // color is more common than an early color: Red -> Yellow -> Green -> Blue -> Purple.
    event.recipes.create.crushing(
        [
            Item.of("ae2:red_paint_ball").withChance(0.088),
            Item.of("ae2:yellow_paint_ball").withChance(0.110),
            Item.of("ae2:green_paint_ball").withChance(0.147),
            Item.of("ae2:blue_paint_ball").withChance(0.220),
            Item.of("ae2:purple_paint_ball").withChance(0.435)
        ],
        "kubejs:tk3_dye_singularity")
        .id("kubejs:tk3/chromatic/random_paintballs");

    // Create Emptying / Item Drain cannot legally represent a zero-fluid recipe in the
    // installed Create-KubeJS serializer. These deterministic item-only stages therefore
    // use Milling as the safe dry-drain implementation, producing one pigment each step.
    event.recipes.create.milling(
        ["ae2:yellow_paint_ball", "kubejs:tk3_chromatic_pigment"],
        "ae2:red_paint_ball")
        .id("kubejs:tk3/chromatic/drain_red_to_yellow");

    event.recipes.create.milling(
        ["ae2:green_paint_ball", "kubejs:tk3_chromatic_pigment"],
        "ae2:yellow_paint_ball")
        .id("kubejs:tk3/chromatic/drain_yellow_to_green");

    event.recipes.create.milling(
        ["ae2:blue_paint_ball", "kubejs:tk3_chromatic_pigment"],
        "ae2:green_paint_ball")
        .id("kubejs:tk3/chromatic/drain_green_to_blue");

    event.recipes.create.milling(
        ["ae2:purple_paint_ball", "kubejs:tk3_chromatic_pigment"],
        "ae2:blue_paint_ball")
        .id("kubejs:tk3/chromatic/drain_blue_to_purple");

    event.recipes.create.milling(
        ["kubejs:tk3_spent_paintball", "kubejs:tk3_chromatic_pigment"],
        "ae2:purple_paint_ball")
        .id("kubejs:tk3/chromatic/drain_purple_to_spent");

    event.recipes.create.mixing(
        ["kubejs:tk3_chromatic_compound"],
        ["5x kubejs:tk3_chromatic_pigment", "create:polished_rose_quartz"])
        .id("kubejs:tk3/chromatic/chromatic_compound");

    //->------------------------]  Tier 4 / Calculation + TNK2-style AE2 [------------------------<-//

    event.recipes.create.mixing(
        ["2x kubejs:tk3_rough_sand"],
        ["2x minecraft:sand", "minecraft:flint"])
        .id("kubejs:tk3/ae2/rough_sand");

    event.recipes.create.milling(
        ["ae2:certus_quartz_dust"],
        "ae2:certus_quartz_crystal")
        .id("kubejs:tk3/ae2/certus_dust");

    event.recipes.create.mixing(
        ["2x kubejs:tk3_siliceous_compound"],
        ["ae2:certus_quartz_dust", "kubejs:tk3_rough_sand"])
        .id("kubejs:tk3/ae2/siliceous_compound");

    event.blasting(
        "2x ae2:silicon",
        "kubejs:tk3_siliceous_compound")
        .id("kubejs:tk3/ae2/silicon_from_siliceous_compound");

    event.shaped(
        "kubejs:tk3_boot_medium",
        [
            " Q ",
            "RBR",
            " E "
        ], {
            Q: "ae2:certus_quartz_crystal",
            R: "minecraft:redstone",
            B: "minecraft:book",
            E: "create:electron_tube"
        })
        .id("kubejs:tk3/ae2/boot_medium");

    event.recipes.create.deploying(
        ["ae2:printed_silicon"],
        ["ae2:silicon", "ae2:silicon_press"])
        .keepHeldItem()
        .id("kubejs:tk3/ae2/printed_silicon");

    event.recipes.create.deploying(
        ["ae2:printed_logic_processor"],
        ["minecraft:gold_ingot", "ae2:logic_processor_press"])
        .keepHeldItem()
        .id("kubejs:tk3/ae2/printed_logic");

    event.recipes.create.deploying(
        ["ae2:printed_calculation_processor"],
        ["ae2:certus_quartz_crystal", "ae2:calculation_processor_press"])
        .keepHeldItem()
        .id("kubejs:tk3/ae2/printed_calculation");

    event.recipes.create.deploying(
        ["ae2:printed_engineering_processor"],
        ["minecraft:diamond", "ae2:engineering_processor_press"])
        .keepHeldItem()
        .id("kubejs:tk3/ae2/printed_engineering");

    function processorSequence(output, printed, transitional, name) {
        event.recipes.create.sequenced_assembly(
            [output],
            printed,
            [
                event.recipes.create.deploying(
                    [transitional],
                    [transitional, "ae2:printed_silicon"]),
                event.recipes.create.deploying(
                    [transitional],
                    [transitional, "create:polished_rose_quartz"]),
                event.recipes.create.deploying(
                    [transitional],
                    [transitional, "kubejs:tk3_boot_medium"])
                    .keepHeldItem(),
                event.recipes.create.pressing(
                    [transitional],
                    [transitional])
            ])
            .transitionalItem(transitional)
            .loops(1)
            .id(`kubejs:tk3/ae2/${name}_processor`);
    }

    processorSequence(
        "ae2:logic_processor",
        "ae2:printed_logic_processor",
        "kubejs:tk3_incomplete_logic_processor",
        "logic");

    processorSequence(
        "ae2:calculation_processor",
        "ae2:printed_calculation_processor",
        "kubejs:tk3_incomplete_calculation_processor",
        "calculation");

    processorSequence(
        "ae2:engineering_processor",
        "ae2:printed_engineering_processor",
        "kubejs:tk3_incomplete_engineering_processor",
        "engineering");

    removeRecipe({ output: "kubejs:tk3_calculation_mechanism" });
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

    // The Inscriber remains available for native utility/name-press functions, but all
    // processor outputs are removed above and rebuilt through Deployers + assembly.
    removeRecipe({ output: "ae2:charger" });
    event.shaped(
        "ae2:charger",
        ["ICI", " Q ", "IMI"], {
            I: "minecraft:iron_ingot",
            C: "createaddition:capacitor",
            Q: "ae2:certus_quartz_crystal",
            M: "kubejs:tk3_calculation_mechanism"
        })
        .id("kubejs:tk3/ae2/charger");

    removeRecipe({ output: "ae2:inscriber" });
    event.shaped(
        "ae2:inscriber",
        ["IPI", "CMC", "IPI"], {
            I: "minecraft:iron_ingot",
            P: "minecraft:sticky_piston",
            C: "ae2:certus_quartz_crystal",
            M: "kubejs:tk3_calculation_mechanism"
        })
        .id("kubejs:tk3/ae2/inscriber_utility_only");

    removeRecipe({ output: "ae2:charged_certus_quartz_crystal" });
    AE2Recipes.charger(
        event,
        "ae2:certus_quartz_crystal",
        "ae2:charged_certus_quartz_crystal",
        "kubejs:tk3/ae2/charged_certus_quartz_crystal");

    // No generic Tier-4 chassis: Calculation mechanisms go directly into AE2 infrastructure.
    removeRecipe({ output: "ae2:controller" });
    event.shaped(
        "ae2:controller",
        ["FCF", "CMC", "FCF"], {
            F: "ae2:fluix_crystal",
            C: "ae2:calculation_processor",
            M: "kubejs:tk3_calculation_mechanism"
        })
        .id("kubejs:tk3/ae2/controller");

    removeRecipe({ output: "ae2:interface" });
    event.shaped(
        "ae2:interface",
        ["GAG", "CMC", "GAG"], {
            G: "minecraft:glass",
            A: "ae2:annihilation_core",
            C: "ae2:formation_core",
            M: "kubejs:tk3_calculation_mechanism"
        })
        .id("kubejs:tk3/ae2/interface");

    // Drive and larger cells move to the first Mek / chemical tiers.
    event.shaped(
        "ae2:drive",
        ["ICI", "MCM", "ICI"], {
            I: "minecraft:iron_ingot",
            C: "ae2:engineering_processor",
            M: "kubejs:tk3_inductive_mechanism"
        })
        .id("kubejs:tk3/ae2/drive_inductive");

    event.shaped(
        "ae2:cell_component_16k",
        ["444", "4M4", "444"], {
            "4": "ae2:cell_component_4k",
            M: "kubejs:tk3_inductive_mechanism"
        })
        .id("kubejs:tk3/ae2/cell_16k_inductive");

    event.shaped(
        "ae2:cell_component_64k",
        ["111", "1M1", "111"], {
            "1": "ae2:cell_component_16k",
            M: "kubejs:tk3_chemical_mechanism"
        })
        .id("kubejs:tk3/ae2/cell_64k_chemical");

    event.shaped(
        "ae2:cell_component_256k",
        ["666", "6M6", "666"], {
            "6": "ae2:cell_component_64k",
            M: "kubejs:tk3_containment_mechanism"
        })
        .id("kubejs:tk3/ae2/cell_256k_containment");

    //->------------------------]  Tier 5 / Inductive = first Mekanism stage [------------------------<-//

    // Bootstrap Basic Control Circuit via Create so the first Infuser does not require itself.
    event.recipes.create.sequenced_assembly(
        ["mekanism:basic_control_circuit"],
        "mekanism:ingot_osmium",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_integrated_circuit"],
                ["kubejs:tk3_incomplete_integrated_circuit", "minecraft:redstone"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_integrated_circuit"],
                ["kubejs:tk3_incomplete_integrated_circuit", "create:electron_tube"]),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_integrated_circuit"],
                ["kubejs:tk3_incomplete_integrated_circuit"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_integrated_circuit")
        .loops(1)
        .id("kubejs:tk3/mekanism/bootstrap_basic_control_circuit");

    removeRecipe({ output: "kubejs:tk3_inductive_mechanism" });
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
                ["kubejs:tk3_incomplete_inductive_mechanism", "mekanism:ingot_osmium"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_inductive_mechanism"],
                ["kubejs:tk3_incomplete_inductive_mechanism", "createaddition:capacitor"]),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_inductive_mechanism"],
                ["kubejs:tk3_incomplete_inductive_mechanism"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_inductive_mechanism")
        .loops(1)
        .id("kubejs:tk3/mechanisms/inductive");

    event.shaped(
        "mekanism:metallurgic_infuser",
        ["IRI", "CMC", "IOI"], {
            I: "minecraft:iron_ingot",
            R: "minecraft:redstone",
            C: "mekanism:steel_casing",
            M: "kubejs:tk3_inductive_mechanism",
            O: "mekanism:ingot_osmium"
        })
        .id("kubejs:tk3/mekanism/metallurgic_infuser_inductive");

    event.shaped(
        "mekanism:enrichment_chamber",
        ["IRI", "CMC", "IOI"], {
            I: "minecraft:iron_ingot",
            R: "mekanism:basic_control_circuit",
            C: "mekanism:steel_casing",
            M: "kubejs:tk3_inductive_mechanism",
            O: "mekanism:ingot_osmium"
        })
        .id("kubejs:tk3/mekanism/enrichment_chamber_inductive");

    event.shaped(
        "mekanism:crusher",
        ["IRI", "CMC", "ILI"], {
            I: "minecraft:iron_ingot",
            R: "mekanism:basic_control_circuit",
            C: "mekanism:steel_casing",
            M: "kubejs:tk3_inductive_mechanism",
            L: "minecraft:lava_bucket"
        })
        .id("kubejs:tk3/mekanism/crusher_inductive");

    event.shaped(
        "mekanism:energized_smelter",
        ["IRI", "CMC", "IFI"], {
            I: "minecraft:iron_ingot",
            R: "mekanism:basic_control_circuit",
            C: "mekanism:steel_casing",
            M: "kubejs:tk3_inductive_mechanism",
            F: "minecraft:furnace"
        })
        .id("kubejs:tk3/mekanism/energized_smelter_inductive");

    // Resource automation support: short, high-throughput Create chains.
    event.recipes.create.crushing(
        ["minecraft:gravel", Item.of("minecraft:flint").withChance(0.25)],
        "minecraft:cobblestone")
        .id("kubejs:tk3/resources/cobble_to_gravel");

    event.recipes.create.crushing(
        ["minecraft:sand", Item.of("minecraft:flint").withChance(0.10)],
        "minecraft:gravel")
        .id("kubejs:tk3/resources/gravel_to_sand");

    //->------------------------]  Shared Chromatic material identities [------------------------<-//

    // Radiance: Ars source infusion, not another basin alloy.
    event.recipes.ars_nouveau.imbuement(
        "kubejs:tk3_chromatic_compound",
        "kubejs:tk3_refined_radiance",
        3000,
        ["ars_nouveau:source_gem", "minecraft:glowstone_dust"])
        .id("kubejs:tk3/materials/refined_radiance");

    event.recipes.create.pressing(
        ["kubejs:tk3_refined_radiance_sheet"],
        ["kubejs:tk3_refined_radiance"])
        .id("kubejs:tk3/materials/radiance_sheet");

    // Shadow Steel: recognizable T&K2 haunting identity.
    event.recipes.create.haunting(
        ["kubejs:tk3_shadow_steel"],
        ["kubejs:tk3_chromatic_compound"])
        .id("kubejs:tk3/materials/shadow_steel");

    event.recipes.create.pressing(
        ["kubejs:tk3_shadow_steel_plate"],
        ["kubejs:tk3_shadow_steel"])
        .id("kubejs:tk3/materials/shadow_steel_plate");

    // Blaze Gold: heat-driven metallurgy.
    event.recipes.create.mixing(
        ["2x kubejs:tk3_blaze_gold"],
        ["kubejs:tk3_chromatic_compound", "2x minecraft:gold_ingot", "2x minecraft:blaze_powder"])
        .heated()
        .id("kubejs:tk3/materials/blaze_gold");

    event.recipes.create.pressing(
        ["kubejs:tk3_blaze_gold_sheet"],
        ["kubejs:tk3_blaze_gold"])
        .id("kubejs:tk3/materials/blaze_gold_plate");

    // Overcharged Alloy: verified Create: Wizardry bridge. The Channeler supplies the
    // Lightning Bucket; the bucket is returned so electricity is the transformation input.
    event.recipes.create.mixing(
        ["kubejs:tk3_overcharge_alloy", "minecraft:bucket"],
        ["kubejs:tk3_chromatic_compound", "create_wizardry:lightning_bucket", "mekanism:ingot_refined_glowstone"])
        .id("kubejs:tk3/materials/overcharged_alloy");

    event.recipes.create.pressing(
        ["kubejs:tk3_overcharge_plate"],
        ["kubejs:tk3_overcharge_alloy"])
        .id("kubejs:tk3/materials/overcharged_plate");

    // Stargaze Alloy: superheated ender/radiant alloying. Its late antimatter application
    // occurs again in the Tier 9 plate chain below.
    event.recipes.create.mixing(
        ["kubejs:tk3_stargaze_alloy"],
        ["kubejs:tk3_chromatic_compound", "kubejs:tk3_refined_radiance", "2x ae2:ender_dust"])
        .superheated()
        .id("kubejs:tk3/materials/stargaze_alloy");

    //->------------------------]  Tier 6 / Arcane Mechanism [------------------------<-//

    event.recipes.create.sandpaper_polishing(
        "createarscompact:polished_amethyst",
        "minecraft:amethyst_shard")
        .id("kubejs:tk3/arcane/polished_amethyst");

    event.recipes.create.deploying(
        ["kubejs:tk3_amethyst_tube"],
        ["kubejs:tk3_empty_tube", "createarscompact:polished_amethyst"])
        .id("kubejs:tk3/arcane/amethyst_tube");

    // Create builds the unfinished device; Ars performs the actual magical transformation.
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
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_arcane_mechanism"],
                ["kubejs:tk3_incomplete_arcane_mechanism"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_arcane_mechanism")
        .loops(1)
        .id("kubejs:tk3/arcane/incomplete_arcane_mechanism");

    removeRecipe({ output: "kubejs:tk3_arcane_mechanism" });
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "ars_nouveau:source_gem",
            "ars_nouveau:manipulation_essence",
            "irons_spellbooks:arcane_essence",
            "create_wizardry:arcane_sheet"
        ],
        "kubejs:tk3_incomplete_arcane_mechanism",
        "kubejs:tk3_arcane_mechanism",
        5000)
        .id("kubejs:tk3/mechanisms/arcane");

    //->------------------------]  Tier 7 / Chemical Engineering + Wither [------------------------<-//

    // One Wither kill creates a reusable focus. Later recipes keep this tool in the Deployer.
    event.shaped(
        "kubejs:tk3_nether_star_focus",
        [" O ", "SNS", " O "], {
            O: "minecraft:obsidian",
            S: "kubejs:tk3_shadow_steel",
            N: "minecraft:nether_star"
        })
        .id("kubejs:tk3/chemical/nether_star_focus");

    // Chemical stabilization: Chromatic Compound -> Compound Base.
    event.custom({
        type: "mekanism:metallurgic_infusing",
        item_input: {
            count: 1,
            item: "kubejs:tk3_chromatic_compound"
        },
        chemical_input: {
            amount: 40,
            tag: "mekanism:redstone"
        },
        output: {
            count: 1,
            id: "kubejs:tk3_compound_base"
        },
        per_tick_usage: false
    }).id("kubejs:tk3/chemical/compound_base");

    // Compound Base -> Shadow Steel is also available as a chemistry route at this tier.
    // This complements the T&K2 haunting route instead of replacing its identity.
    event.custom({
        type: "mekanism:injecting",
        item_input: {
            count: 1,
            item: "kubejs:tk3_compound_base"
        },
        chemical_input: {
            chemical: "mekanism:hydrogen_chloride",
            amount: 100
        },
        output: {
            id: "kubejs:tk3_shadow_steel",
            count: 1
        },
        per_tick_usage: false
    }).id("kubejs:tk3/chemical/shadow_steel_injecting");

    removeRecipe({ output: "kubejs:tk3_chemical_mechanism" });
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
            // Spout/filling step inside the sequence; item changes, fluid is consumed.
            event.recipes.create.filling(
                ["kubejs:tk3_incomplete_chemical_mechanism"],
                ["kubejs:tk3_incomplete_chemical_mechanism", Fluid.of("minecraft:water", 250)]),
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
        .loops(1)
        .id("kubejs:tk3/mechanisms/chemical_engineering");

    //->------------------------]  Tier 8 / Containment [------------------------<-//

    // Ignis is a late Cataclysm encounter; one Ignitium ingot upgrades the reusable focus.
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "cataclysm:ignitium_ingot",
            "ars_nouveau:abjuration_essence",
            "create_aquatic_ambitions:prismarine_alloy"
        ],
        "kubejs:tk3_nether_star_focus",
        "kubejs:tk3_ignis_focus",
        7000)
        .id("kubejs:tk3/containment/ignis_focus");

    removeRecipe({ output: "kubejs:tk3_containment_mechanism" });
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
        .loops(1)
        .id("kubejs:tk3/mechanisms/containment");

    //->------------------------]  Tier 9 / Singularity / Antimatter / Echo [------------------------<-//

    event.recipes.create.deploying(
        ["kubejs:tk3_incomplete_stargaze_singularity"],
        ["kubejs:tk3_compound_base", "kubejs:tk3_stargaze_alloy"])
        .id("kubejs:tk3/singularity/stargaze_on_compound_base");

    event.custom({
        type: "mekanism:nucleosynthesizing",
        item_input: {
            count: 1,
            item: "kubejs:tk3_incomplete_stargaze_singularity"
        },
        chemical_input: {
            chemical: "mekanism:antimatter",
            amount: 10
        },
        output: {
            id: "kubejs:tk3_stargaze_plate",
            count: 1
        },
        per_tick_usage: false,
        duration: 400
    }).id("kubejs:tk3/singularity/stargaze_antimatter_plate");

    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_radiant_coil"],
        "kubejs:tk3_refined_radiance_sheet",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_tech_tube"],
                ["kubejs:tk3_incomplete_tech_tube", "createaddition:copper_wire"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_tech_tube"],
                ["kubejs:tk3_incomplete_tech_tube", "ae2:fluix_crystal"]),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_tech_tube"],
                ["kubejs:tk3_incomplete_tech_tube"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_tech_tube")
        .loops(1)
        .id("kubejs:tk3/singularity/radiant_coil");

    // Verified serializer path: antimatter directly nucleosynthesizes amethyst into Echo Shards.
    event.custom({
        type: "mekanism:nucleosynthesizing",
        item_input: {
            count: 1,
            item: "minecraft:amethyst_shard"
        },
        chemical_input: {
            chemical: "mekanism:antimatter",
            amount: 5
        },
        output: {
            id: "minecraft:echo_shard",
            count: 1
        },
        per_tick_usage: false,
        duration: 300
    }).id("kubejs:tk3/singularity/automated_echo_shard");

    // Echo Shards are concentrated into the Timeless Slurry item intermediate.
    event.custom({
        type: "mekanism:enriching",
        input: {
            count: 4,
            item: "minecraft:echo_shard"
        },
        output: {
            count: 1,
            id: "kubejs:tk3_timeless_slurry"
        }
    }).id("kubejs:tk3/singularity/timeless_slurry");

    event.recipes.create.deploying(
        ["kubejs:tk3_blue_tube"],
        ["kubejs:tk3_empty_tube", "kubejs:tk3_timeless_slurry"])
        .id("kubejs:tk3/singularity/blue_tube");

    // Ender Guardian drops the Gauntlet of Guard; convert one victory into a reusable focus.
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "cataclysm:gauntlet_of_guard",
            "kubejs:tk3_stargaze_plate",
            "ars_nouveau:manipulation_essence"
        ],
        "kubejs:tk3_ignis_focus",
        "kubejs:tk3_void_focus",
        9000)
        .id("kubejs:tk3/singularity/void_focus");

    removeRecipe({ output: "kubejs:tk3_singularity_mechanism" });
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
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_singularity_mechanism"],
                ["kubejs:tk3_incomplete_singularity_mechanism", "kubejs:tk3_void_focus"])
                .keepHeldItem(),
            event.recipes.create.pressing(
                ["kubejs:tk3_incomplete_singularity_mechanism"],
                ["kubejs:tk3_incomplete_singularity_mechanism"])
        ])
        .transitionalItem("kubejs:tk3_incomplete_singularity_mechanism")
        .loops(1)
        .id("kubejs:tk3/mechanisms/singularity");

    //->------------------------]  Tier 10 / Sovereign network [------------------------<-//

    event.recipes.create.mixing(
        ["2x kubejs:tk3_matter_plastic"],
        ["4x mekanism:hdpe_pellet", "ae2:matter_ball", "kubejs:tk3_chromatic_compound"])
        .superheated()
        .id("kubejs:tk3/sovereign/matter_plastic");

    // Maledictus-linked Cursium upgrades the reusable boss focus for the final tier.
    event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "cataclysm:cursium_ingot",
            "kubejs:tk3_matter_plastic",
            "irons_spellbooks:legendary_ink"
        ],
        "kubejs:tk3_void_focus",
        "kubejs:tk3_sovereign_focus",
        12000)
        .id("kubejs:tk3/sovereign/sovereign_focus");

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
            event.recipes.create.pressing(
                ["kubejs:tk3_circuit_scrap"],
                ["kubejs:tk3_circuit_scrap"])
        ])
        .transitionalItem("kubejs:tk3_circuit_scrap")
        .loops(1)
        .id("kubejs:tk3/sovereign/singularity_gem");

    event.recipes.create.mechanical_crafting(
        "kubejs:tk3_unstable_creative_core",
        [
            " S ",
            "RMR",
            " A "
        ], {
            S: "kubejs:tk3_singularity_gem",
            R: "kubejs:tk3_radiant_coil",
            M: "kubejs:tk3_matter_plastic",
            A: "ae2:engineering_processor"
        })
        .id("kubejs:tk3/sovereign/unstable_core");

    removeRecipe({ output: "kubejs:tk3_sovereign_mechanism" });
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_sovereign_mechanism"],
        "kubejs:tk3_singularity_mechanism",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sovereign_mechanism"],
                ["kubejs:tk3_incomplete_sovereign_mechanism", "kubejs:tk3_matter_plastic"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sovereign_mechanism"],
                ["kubejs:tk3_incomplete_sovereign_mechanism", "mekanism:pellet_antimatter"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_incomplete_sovereign_mechanism"],
                ["kubejs:tk3_incomplete_sovereign_mechanism", "kubejs:tk3_radiant_coil"]),
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
        .loops(2)
        .id("kubejs:tk3/mechanisms/sovereign");

    // T&K3 equivalent of T&K2's Creative Core: several independent production systems
    // meet here, but the difficulty is routing them together rather than multiplying counts.
    removeRecipe({ output: "kubejs:tk3_sovereign_core" });
    event.recipes.create.sequenced_assembly(
        ["kubejs:tk3_sovereign_core"],
        "kubejs:tk3_unstable_creative_core",
        [
            event.recipes.create.deploying(
                ["kubejs:tk3_unstable_creative_core"],
                ["kubejs:tk3_unstable_creative_core", "kubejs:tk3_sovereign_mechanism"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_unstable_creative_core"],
                ["kubejs:tk3_unstable_creative_core", "mekanism:pellet_antimatter"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_unstable_creative_core"],
                ["kubejs:tk3_unstable_creative_core", "kubejs:tk3_blue_tube"]),
            event.recipes.create.deploying(
                ["kubejs:tk3_unstable_creative_core"],
                ["kubejs:tk3_unstable_creative_core", "kubejs:tk3_sovereign_focus"])
                .keepHeldItem(),
            event.recipes.create.pressing(
                ["kubejs:tk3_unstable_creative_core"],
                ["kubejs:tk3_unstable_creative_core"])
        ])
        .transitionalItem("kubejs:tk3_unstable_creative_core")
        .loops(4)
        .id("kubejs:tk3/sovereign/sovereign_core");

    //->------------------------]  Architect's Palette / Wardstone [------------------------<-//

    // The installed registry snapshot does not expose a Wardstone item ID in this export.
    // Do not invent an output. The requested Nether Wart + Prismarine replacement is
    // documented for runtime verification in docs/VALIDATION_EN.md.
});
