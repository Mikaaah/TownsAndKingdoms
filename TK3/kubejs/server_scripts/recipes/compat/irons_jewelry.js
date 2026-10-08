// priority: 0
// TK3 compatibility/integration recipes for irons_jewelry. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 2 / irons_jewelry / Native processing & construction [------------------------<-//

    // Jewelcrafting Guide / Native
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [{
            "item": "minecraft:book"
        }, {
            "tag": "c:ingots/copper"
        }],
        "result": {
            "count": 1,
            "id": "irons_jewelry:jewelcrafting_guide"
        }
    })
        .id("kubejs:tk3/addons/irons_jewelry_jewelcrafting_guide");

    // Jewelcrafting Station / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "W": {
                "item": "kubejs:tk3_hydraulic_machine"
            },
            "C": {
                "tag": "c:ingots/copper"
            }
        },
        "pattern": [
            "CC",
            "WW",
            "WW"
        ],
        "result": {
            "count": 1,
            "id": "irons_jewelry:jewelcrafting_station"
        }
    })
        .id("kubejs:tk3/addons/irons_jewelry_jewelcrafting_station");
});
