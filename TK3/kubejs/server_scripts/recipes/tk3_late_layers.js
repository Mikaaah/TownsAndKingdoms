// priority: 0
// Generated from docs/progression_manifest.json. See tools/rebuild_recipes.py.
ServerEvents.recipes(event => {

    //->------------------------]  Required Items [------------------------<-//

    //->------------------------]  Tier 4 / Ae2 / Crafting [------------------------<-//

    // Charger / Shaped
    event.shaped(
        "ae2:charger",
        [
            "ICI",
            " S ",
            "IPI"
        ], {
            "I": "mekanism:ingot_steel",
            "C": "createaddition:capacitor",
            "S": "mekanism:steel_casing",
            "P": "create:precision_mechanism"
        })
        .id("kubejs:tk3/late_layers/ae2_charger");

    // Inscriber / Shaped
    event.shaped(
        "ae2:inscriber",
        [
            "IPI",
            "MSM",
            "IGI"
        ], {
            "I": "mekanism:ingot_steel",
            "P": "minecraft:piston",
            "M": "createaddition:electric_motor",
            "S": "mekanism:steel_casing",
            "G": "minecraft:gold_ingot"
        })
        .id("kubejs:tk3/late_layers/ae2_inscriber");

    //->------------------------]  Tier 4 / Ae2 / Processing [------------------------<-//

    // Charged Certus Quartz Crystal / Ae Charger
    AE2Recipes.charger(
        event,
        "ae2:certus_quartz_crystal",
        "ae2:charged_certus_quartz_crystal",
        "kubejs:tk3/late_layers/ae2_charged_certus_quartz_crystal");

    // Certus Quartz Dust / Crushing
    event.recipes.create.crushing(
        [
            "ae2:certus_quartz_dust"
        ],
        [
            "ae2:certus_quartz_crystal"
        ])
        .id("kubejs:tk3/late_layers/grind_certus_quartz_crystal");

    // Fluix Dust / Crushing
    event.recipes.create.crushing(
        [
            "ae2:fluix_dust"
        ],
        [
            "ae2:fluix_crystal"
        ])
        .id("kubejs:tk3/late_layers/grind_fluix_crystal");

    // Printed Silicon / Ae Print
    AE2Recipes.inscriberPress(
        event,
        "ae2:silicon",
        "ae2:silicon_press",
        "ae2:printed_silicon",
        "kubejs:tk3/late_layers/ae2_printed_silicon");

    // Printed Logic Processor / Ae Print
    AE2Recipes.inscriberPress(
        event,
        "minecraft:gold_ingot",
        "ae2:logic_processor_press",
        "ae2:printed_logic_processor",
        "kubejs:tk3/late_layers/ae2_printed_logic_processor");

    // Logic Processor / Ae Processor
    AE2Recipes.inscriberWithBottom(
        event,
        "press",
        "minecraft:redstone",
        "ae2:printed_logic_processor",
        "ae2:printed_silicon",
        "ae2:logic_processor",
        "kubejs:tk3/late_layers/ae2_logic_processor");

    // Printed Calculation Processor / Ae Print
    AE2Recipes.inscriberPress(
        event,
        "ae2:certus_quartz_crystal",
        "ae2:calculation_processor_press",
        "ae2:printed_calculation_processor",
        "kubejs:tk3/late_layers/ae2_printed_calculation_processor");

    // Calculation Processor / Ae Processor
    AE2Recipes.inscriberWithBottom(
        event,
        "press",
        "minecraft:redstone",
        "ae2:printed_calculation_processor",
        "ae2:printed_silicon",
        "ae2:calculation_processor",
        "kubejs:tk3/late_layers/ae2_calculation_processor");

    // Printed Engineering Processor / Ae Print
    AE2Recipes.inscriberPress(
        event,
        "minecraft:diamond",
        "ae2:engineering_processor_press",
        "ae2:printed_engineering_processor",
        "kubejs:tk3/late_layers/ae2_printed_engineering_processor");

    // Engineering Processor / Ae Processor
    AE2Recipes.inscriberWithBottom(
        event,
        "press",
        "minecraft:redstone",
        "ae2:printed_engineering_processor",
        "ae2:printed_silicon",
        "ae2:engineering_processor",
        "kubejs:tk3/late_layers/ae2_engineering_processor");

    //->------------------------]  Tier 4 / Mekanism / Processing [------------------------<-//

    // Dust Gold / Mek Enriching
    event.recipes.mekanism.enriching(
        "2x mekanism:dust_gold",
        "minecraft:raw_gold")
        .id("kubejs:tk3/late_layers/mekanism_dust_gold");

    // Dust Osmium / Mek Enriching
    event.recipes.mekanism.enriching(
        "2x mekanism:dust_osmium",
        "mekanism:raw_osmium")
        .id("kubejs:tk3/late_layers/mekanism_dust_osmium");

    // Dust Tin / Mek Enriching
    event.recipes.mekanism.enriching(
        "2x mekanism:dust_tin",
        "mekanism:raw_tin")
        .id("kubejs:tk3/late_layers/mekanism_dust_tin");

    // Dust Lead / Mek Enriching
    event.recipes.mekanism.enriching(
        "2x mekanism:dust_lead",
        "mekanism:raw_lead")
        .id("kubejs:tk3/late_layers/mekanism_dust_lead");

});
