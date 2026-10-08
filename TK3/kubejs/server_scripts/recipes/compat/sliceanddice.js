// priority: 0
// TK3 compatibility/integration recipes for sliceanddice. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Crop integration / Slicer [------------------------<-//

    // Slicer / Shapeless
    event.shapeless(
        "sliceanddice:slicer",
        [
            "kubejs:tk3_rotation_machine",
            "create:cogwheel",
            "farmersdelight:iron_knife"
        ])
        .id("kubejs:tk3/addons/sliceanddice_slicer");

    //->------------------------]  Tier 2 / sliceanddice / Native processing & construction [------------------------<-//

    // Sprinkler / Native
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [{
            "item": "sliceanddice:floor_sprinkler"
        }],
        "result": {
            "count": 1,
            "id": "sliceanddice:sprinkler"
        }
    })
        .id("kubejs:tk3/addons/minecraft_sprinkler_conversion_0");

    // Floor Sprinkler / Native
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [{
            "item": "sliceanddice:sprinkler"
        }],
        "result": {
            "count": 1,
            "id": "sliceanddice:floor_sprinkler"
        }
    })
        .id("kubejs:tk3/addons/minecraft_sprinkler_conversion_1");

    // Rich Soil / Native
    event.custom({
        "neoforge:conditions": [{
            "type": "neoforge:mod_loaded",
            "modid": "farmersdelight"
        }],
        "type": "create:filling",
        "ingredients": [{
            "item": "farmersdelight:organic_compost"
        }, {
            "type": "neoforge:single",
            "amount": 500,
            "fluid": "sliceanddice:fertilizer"
        }],
        "results": [{
            "id": "farmersdelight:rich_soil"
        }]
    })
        .id("kubejs:tk3/addons/sliceanddice_filling_rich_soil");

    //->------------------------]  Tier 5 / sliceanddice / Native processing & construction [------------------------<-//

    // Hot Cocoa / Native
    event.custom({
        "neoforge:conditions": [{
            "type": "neoforge:mod_loaded",
            "modid": "farmersdelight"
        }],
        "type": "create:filling",
        "ingredients": [{
            "item": "minecraft:glass_bottle"
        }, {
            "type": "neoforge:single",
            "amount": 250,
            "fluid": "create:chocolate"
        }],
        "results": [{
            "id": "farmersdelight:hot_cocoa"
        }]
    })
        .id("kubejs:tk3/addons/sliceanddice_filling_hot_cocoa_from_fluid");
});
