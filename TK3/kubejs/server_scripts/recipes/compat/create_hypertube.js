// priority: 0
// TK3 compatibility/integration recipes for create_hypertube. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 3 / hypertube / Native processing & construction [------------------------<-//

    // Hypertube / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "B": {
                "item": "create:brass_sheet"
            },
            "G": {
                "tag": "c:glass_panes"
            }
        },
        "pattern": [
            "BGB",
            "G G",
            "BGB"
        ],
        "result": {
            "count": 16,
            "id": "create_hypertube:hypertube"
        }
    })
        .id("kubejs:tk3/addons/create_hypertube_hypertube");

    // Hypertube Entrance / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "C": {
                "item": "kubejs:tk3_precision_machine"
            },
            "F": {
                "item": "create_hypertube:hypertube_funnel"
            },
            "G": {
                "item": "create:cogwheel"
            }
        },
        "pattern": [
            " F ",
            " G ",
            " C "
        ],
        "result": {
            "count": 1,
            "id": "create_hypertube:hypertube_entrance"
        }
    })
        .id("kubejs:tk3/addons/create_hypertube_hypertube_entrance");

    // Hypertube Funnel / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "B": {
                "item": "create:brass_sheet"
            },
            "H": {
                "item": "create_hypertube:hypertube"
            },
            "K": {
                "item": "minecraft:dried_kelp"
            }
        },
        "pattern": [
            " B ",
            " H ",
            " K "
        ],
        "result": {
            "count": 1,
            "id": "create_hypertube:hypertube_funnel"
        }
    })
        .id("kubejs:tk3/addons/create_hypertube_hypertube_funnel");

    // Hypertube Junction / Native
    event.custom({
        "type": "create:mechanical_crafting",
        "accept_mirrored": true,
        "category": "misc",
        "key": {
            "B": {
                "item": "kubejs:tk3_precision_machine"
            },
            "F": {
                "item": "create_hypertube:hypertube_funnel"
            },
            "H": {
                "item": "create_hypertube:hypertube"
            },
            "T": {
                "item": "create:transmitter"
            }
        },
        "pattern": [
            "BTB",
            "FHF",
            " F "
        ],
        "result": {
            "count": 1,
            "id": "create_hypertube:hypertube_junction"
        }
    })
        .id("kubejs:tk3/addons/create_hypertube_hypertube_junction");

    // Hypertube Accelerator / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "C": {
                "item": "kubejs:tk3_precision_machine"
            },
            "F": {
                "item": "create_hypertube:hypertube_funnel"
            },
            "P": {
                "item": "create:precision_mechanism"
            }
        },
        "pattern": [
            " F ",
            "CPC",
            " F "
        ],
        "result": {
            "count": 1,
            "id": "create_hypertube:hypertube_accelerator"
        }
    })
        .id("kubejs:tk3/addons/create_hypertube_hyper_accelerator_small_cogwheel");

    // Redstone Detector Tube Attachment / Native
    event.custom({
        "type": "minecraft:crafting_shaped",
        "category": "misc",
        "key": {
            "A": {
                "item": "create:andesite_alloy"
            },
            "C": {
                "item": "minecraft:comparator"
            },
            "H": {
                "item": "create:brass_hand"
            }
        },
        "pattern": [
            "ACA",
            "AHA"
        ],
        "result": {
            "count": 1,
            "id": "create_hypertube:redstone_detector_tube_attachment"
        }
    })
        .id("kubejs:tk3/addons/create_hypertube_redstone_detector_tube_attachment");

    // Tube Scanner Attachment / Native
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "create_hypertube:redstone_detector_tube_attachment"
        },
        "results": [{
            "chance": 100.0,
            "id": "create_hypertube:tube_scanner_attachment"
        }],
        "sequence": [{
            "type": "create:deploying",
            "ingredients": [{
                "item": "create_hypertube:tube_scanner_unfinished"
            }, {
                "item": "create:brass_sheet"
            }],
            "results": [{
                "id": "create_hypertube:tube_scanner_unfinished"
            }]
        }, {
            "type": "create:deploying",
            "ingredients": [{
                "item": "create_hypertube:tube_scanner_unfinished"
            }, {
                "item": "create:electron_tube"
            }],
            "results": [{
                "id": "create_hypertube:tube_scanner_unfinished"
            }]
        }, {
            "type": "create:deploying",
            "ingredients": [{
                "item": "create_hypertube:tube_scanner_unfinished"
            }, {
                "item": "create:brass_sheet"
            }],
            "results": [{
                "id": "create_hypertube:tube_scanner_unfinished"
            }]
        }],
        "transitional_item": {
            "id": "create_hypertube:tube_scanner_unfinished"
        },
        "loops": 1
    })
        .id("kubejs:tk3/addons/create_hypertube_sequenced_assembly_tube_scanner");
});
