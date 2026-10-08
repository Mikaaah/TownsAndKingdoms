// priority: 0
// TK3 compatibility/integration recipes for betternether. Split from former monolithic generated files.
ServerEvents.recipes(event => {
    //->------------------------]  Tier 1 / Timber processing / betternether [------------------------<-//

    // Anchor Tree Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:anchor_tree_planks"
        ],
        [
            "betternether:anchor_tree_log"
        ])
        .id("kubejs:tk3/compat/saw_betternether_anchor_tree_log");

    // Gloomwood Dark Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:gloomwood_dark_planks"
        ],
        [
            "betternether:gloomwood_dark_log"
        ])
        .id("kubejs:tk3/compat/saw_betternether_gloomwood_dark_log");

    // Gloomwood Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:gloomwood_planks"
        ],
        [
            "betternether:gloomwood_log"
        ])
        .id("kubejs:tk3/compat/saw_betternether_gloomwood_log");

    // Gloomwood Transition Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:gloomwood_transition_planks"
        ],
        [
            "betternether:gloomwood_transition_log"
        ])
        .id("kubejs:tk3/compat/saw_betternether_gloomwood_transition_log");

    // Mushroom Fir Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:mushroom_fir_planks"
        ],
        [
            "betternether:mushroom_fir_log"
        ])
        .id("kubejs:tk3/compat/saw_betternether_mushroom_fir_log");

    // Mushroom Fir Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:mushroom_fir_planks"
        ],
        [
            "betternether:mushroom_fir_stem"
        ])
        .id("kubejs:tk3/compat/saw_betternether_mushroom_fir_stem");

    // Nether Mushroom Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:nether_mushroom_planks"
        ],
        [
            "betternether:nether_mushroom_stem"
        ])
        .id("kubejs:tk3/compat/saw_betternether_nether_mushroom_stem");

    // Nether Reed Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:nether_reed_planks"
        ],
        [
            "betternether:nether_reed_stem"
        ])
        .id("kubejs:tk3/compat/saw_betternether_nether_reed_stem");

    // Nether Sakura Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:nether_sakura_planks"
        ],
        [
            "betternether:nether_sakura_log"
        ])
        .id("kubejs:tk3/compat/saw_betternether_nether_sakura_log");

    // Rubeus Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:rubeus_planks"
        ],
        [
            "betternether:rubeus_log"
        ])
        .id("kubejs:tk3/compat/saw_betternether_rubeus_log");

    // Stalagnate Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:stalagnate_planks"
        ],
        [
            "betternether:stalagnate_log"
        ])
        .id("kubejs:tk3/compat/saw_betternether_stalagnate_log");

    // Stalagnate Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:stalagnate_planks"
        ],
        [
            "betternether:stalagnate_stem"
        ])
        .id("kubejs:tk3/compat/saw_betternether_stalagnate_stem");

    // Wart Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:wart_planks"
        ],
        [
            "betternether:wart_log"
        ])
        .id("kubejs:tk3/compat/saw_betternether_wart_log");

    // Willow Planks / Cutting
    event.recipes.create.cutting(
        [
            "6x betternether:willow_planks"
        ],
        [
            "betternether:willow_log"
        ])
        .id("kubejs:tk3/compat/saw_betternether_willow_log");
});
