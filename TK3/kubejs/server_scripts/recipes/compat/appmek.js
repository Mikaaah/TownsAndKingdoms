// priority: 0
// TK3 compatibility/integration recipes for appmek. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 6 / appmek / Native processing & construction [------------------------<-//

    // Chemical Cell Housing / AE2 + Mekanism bridge
    // A housing is infrastructure, not a full progression machine: quartz glass provides
    // the AE2 containment shell while Mekanism HDPE makes it chemically resistant.
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "H": {
                "item": "mekanism:hdpe_sheet"
            },
            "Q": {
                "item": "ae2:quartz_glass"
            },
            "R": {
                "tag": "c:dusts/redstone"
            }
        },
        "pattern": [
            "QHQ",
            "R R",
            "QHQ"
        ],
        "result": {
            "count": 1,
            "id": "appmek:chemical_cell_housing"
        }
    })
        .id("kubejs:tk3/addons/appmek_chemical_cell_housing");

    // Portable Chemical Cell 1K / Native
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [{
            "item": "ae2:chest"
        }, {
            "item": "ae2:cell_component_1k"
        }, {
            "item": "ae2:energy_cell"
        }, {
            "item": "appmek:chemical_cell_housing"
        }],
        "result": {
            "count": 1,
            "id": "appmek:portable_chemical_cell_1k"
        }
    })
        .id("kubejs:tk3/addons/appmek_portable_chemical_cell_1k");

    // Chemical Storage Cell 4K / Native
    event.custom({
        "type": "ae2:storage_cell_upgrade",
        "input_cell": "appmek:chemical_storage_cell_1k",
        "input_component": "ae2:cell_component_4k",
        "result_cell": "appmek:chemical_storage_cell_4k",
        "result_component": "ae2:cell_component_1k"
    })
        .id("kubejs:tk3/addons/appmek_upgrade_chemical_storage_cell_1k_to_4k");

    // Portable Chemical Cell 4K / Native
    event.custom({
        "type": "ae2:storage_cell_upgrade",
        "input_cell": "appmek:portable_chemical_cell_1k",
        "input_component": "ae2:cell_component_4k",
        "result_cell": "appmek:portable_chemical_cell_4k",
        "result_component": "ae2:cell_component_1k"
    })
        .id("kubejs:tk3/addons/appmek_upgrade_portable_chemical_cell_1k_to_4k");

    // Chemical Storage Cell 1K / Native
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [{
            "item": "appmek:chemical_cell_housing"
        }, {
            "item": "ae2:cell_component_1k"
        }],
        "result": {
            "count": 1,
            "id": "appmek:chemical_storage_cell_1k"
        }
    })
        .id("kubejs:tk3/addons/appmek_chemical_storage_cell_1k");

    //->------------------------]  Tier 7 / appmek / Native processing & construction [------------------------<-//

    // Chemical Storage Cell 16K / Native
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [{
            "item": "appmek:chemical_cell_housing"
        }, {
            "item": "ae2:cell_component_16k"
        }],
        "result": {
            "count": 1,
            "id": "appmek:chemical_storage_cell_16k"
        }
    })
        .id("kubejs:tk3/addons/appmek_chemical_storage_cell_16k");

    // Portable Chemical Cell 16K / Native
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [{
            "item": "ae2:chest"
        }, {
            "item": "ae2:cell_component_16k"
        }, {
            "item": "ae2:energy_cell"
        }, {
            "item": "appmek:chemical_cell_housing"
        }],
        "result": {
            "count": 1,
            "id": "appmek:portable_chemical_cell_16k"
        }
    })
        .id("kubejs:tk3/addons/appmek_portable_chemical_cell_16k");

    //->------------------------]  Tier 9 / appmek / Native processing & construction [------------------------<-//

    // Chemical Storage Cell 64K / Native
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [{
            "item": "appmek:chemical_cell_housing"
        }, {
            "item": "ae2:cell_component_64k"
        }],
        "result": {
            "count": 1,
            "id": "appmek:chemical_storage_cell_64k"
        }
    })
        .id("kubejs:tk3/addons/appmek_chemical_storage_cell_64k");

    // Portable Chemical Cell 64K / Native
    event.custom({
        "type": "ae2:storage_cell_upgrade",
        "input_cell": "appmek:portable_chemical_cell_1k",
        "input_component": "ae2:cell_component_64k",
        "result_cell": "appmek:portable_chemical_cell_64k",
        "result_component": "ae2:cell_component_1k"
    })
        .id("kubejs:tk3/addons/appmek_upgrade_portable_chemical_cell_1k_to_64k");

    //->------------------------]  Tier 10 / appmek / Native processing & construction [------------------------<-//

    // Portable Chemical Cell 256K / Native
    event.custom({
        "type": "minecraft:crafting_shapeless",
        "category": "misc",
        "ingredients": [{
            "item": "ae2:chest"
        }, {
            "item": "ae2:cell_component_256k"
        }, {
            "item": "ae2:energy_cell"
        }, {
            "item": "appmek:chemical_cell_housing"
        }],
        "result": {
            "count": 1,
            "id": "appmek:portable_chemical_cell_256k"
        }
    })
        .id("kubejs:tk3/addons/appmek_portable_chemical_cell_256k");

    // Chemical Storage Cell 256K / Native
    event.custom({
        "type": "ae2:storage_cell_upgrade",
        "input_cell": "appmek:chemical_storage_cell_64k",
        "input_component": "ae2:cell_component_256k",
        "result_cell": "appmek:chemical_storage_cell_256k",
        "result_component": "ae2:cell_component_64k"
    })
        .id("kubejs:tk3/addons/appmek_upgrade_chemical_storage_cell_64k_to_256k");
});
