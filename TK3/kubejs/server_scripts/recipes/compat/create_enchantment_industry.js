// priority: 0
// TK3 compatibility/integration recipes for create_enchantment_industry.
// Basic enchanting infrastructure uses Create components; only true machines consume tier mechanisms.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 3 / create_enchantment_industry / Devices [------------------------<-//

    // Mechanical Grindstone / Create-built machine
    event.shaped(
        "create_enchantment_industry:mechanical_grindstone",
        [" A ", "SGS", " P "],
        {
            A: "create:andesite_casing",
            S: "create:shaft",
            G: "minecraft:grindstone",
            P: "create:precision_mechanism"
        })
        .id("kubejs:tk3/addons/create_enchantment_industry_crafting_mechanical_grindstone");

    //->------------------------]  Tier 4 / create_enchantment_industry / Devices [------------------------<-//

    // Experience Lantern / Network infrastructure, not a mechanism sink
    event.shaped(
        "create_enchantment_industry:experience_lantern",
        [" E ", " S ", " C "],
        {
            E: "create:electron_tube",
            S: "minecraft:sponge",
            C: "create:copper_casing"
        })
        .id("kubejs:tk3/addons/create_enchantment_industry_crafting_experience_lantern");

    // Brass Bookshelf / Create assembly + experience infusion
    event.custom({
        "neoforge:conditions": [{
            "type": "neoforge:mod_loaded",
            "modid": "apothic_enchanting"
        }],
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "minecraft:bookshelf"
        },
        "loops": 1,
        "results": [{
            "id": "create_enchantment_industry:brass_bookshelf"
        }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [{
                "item": "create_enchantment_industry:incomplete_brass_bookshelf"
            }, {
                "item": "create:brass_sheet"
            }],
            "results": [{
                "id": "create_enchantment_industry:incomplete_brass_bookshelf"
            }]
        }, {
            "type": "create:filling",
            "ingredients": [{
                "item": "create_enchantment_industry:incomplete_brass_bookshelf"
            }, {
                "type": "neoforge:tag",
                "amount": 250,
                "tag": "create_enchantment_industry:infusing/ingredients"
            }],
            "results": [{
                "id": "create_enchantment_industry:incomplete_brass_bookshelf"
            }]
        }, {
            "type": "create:deploying",
            "ingredients": [{
                "item": "create_enchantment_industry:incomplete_brass_bookshelf"
            }, {
                "item": "create:electron_tube"
            }],
            "results": [{
                "id": "create_enchantment_industry:incomplete_brass_bookshelf"
            }]
        }],
        "transitional_item": {
            "id": "create_enchantment_industry:incomplete_brass_bookshelf"
        }
    })
        .id("kubejs:tk3/addons/create_enchantment_industry_sequenced_assembly_brass_bookshelf");

    //->------------------------]  Tier 6 / create_enchantment_industry / Devices [------------------------<-//

    // Infuser is a real late magical-processing machine and gets one Arcane gate.
    event.shaped(
        "create_enchantment_industry:infuser",
        [" A ", " S ", "NNN"],
        {
            A: "kubejs:tk3_arcane_mechanism",
            S: "create:spout",
            N: "create:nixie_tube"
        })
        .id("kubejs:tk3/addons/create_enchantment_industry_crafting_infuser");

    //->------------------------]  Tier 7 / create_enchantment_industry / Devices [------------------------<-//

    // Blaze Forger / true advanced machine
    event.recipes.create.deploying(
        ["create_enchantment_industry:blaze_forger"],
        ["kubejs:tk3_chemical_mechanism", "create:blaze_burner"])
        .id("kubejs:tk3/addons/create_enchantment_industry_blaze_forger");

    // Gem Cutter / true advanced machine
    event.custom({
        "neoforge:conditions": [{
            "type": "neoforge:mod_loaded",
            "modid": "apotheosis"
        }],
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "S": { "item": "kubejs:tk3_chemical_mechanism" },
            "o": { "item": "create:brass_ingot" },
            "x": { "item": "minecraft:amethyst_shard" }
        },
        "pattern": ["xxx", "oSo", "xxx"],
        "result": {
            "count": 1,
            "id": "create_enchantment_industry:gem_cutter"
        }
    })
        .id("kubejs:tk3/addons/create_enchantment_industry_crafting_gem_cutter");
});
