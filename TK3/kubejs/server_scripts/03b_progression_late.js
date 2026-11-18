// priority: 1900
// TNK3 | progression late

// TNK_RECIPES.chapter03: source line 259
TNK_RECIPES.chapter03 = event => {
    let id = (method, name) => 'tnk:chapter_03/' + method + '/' + name;
    let resinAmount = 500; // mB per Raw Rubber; native passive-heat Rubberworks yield.
    let mechanism = 'kubejs:sealed_mechanism';
    let incomplete = 'kubejs:incomplete_sealed_mechanism';
    function read(recipe) {
        return JSON.parse(recipe.json.toString());
    }
    function normalized(results) {
        return(results || []).map(value =>({ id: value.id, count: value.count === undefined ? 1: value.count, chance: value.chance === undefined ? 1: value.chance }));
    }
    function stoneProcessing(type, results, name) {
        let matches = [];
        event.forEachRecipe({ type: type, input: 'create:veridium' }, recipe => {
            if (String(recipe.id) === 'create:crushing/veridium_recycling') return;
            matches.push({ id: String(recipe.id), json: read(recipe) });
        });
        if (
            matches.length === 1 &&
            JSON.stringify(normalized(matches[0].json.results)) === JSON.stringify(normalized(results))
        )
            return;
        matches.forEach(entry => event.remove({ id: entry.id }));
        event.custom({ type: type, ingredients: [{ item: 'create:veridium' }], results: results, processing_time: 250 }).id(id(type.slice(7), name));
    }
    event.remove({ output: 'kubejs:raw_rubber' });
    event
        .custom({ type: 'rubberworks:compressing', ingredients: [{ type: 'neoforge:single', fluid: 'rubberworks:resin', amount: resinAmount }], results: [{ id: 'kubejs:raw_rubber' }] })
        .id(id('compressing', 'raw_rubber_from_resin'));
    event.remove({ output: 'kubejs:rubber' });
    event.smoking('kubejs:rubber', 'kubejs:raw_rubber', 0, 200).id(id('smoking', 'cured_rubber'));
    event.forEachRecipe({ id: 'create:crushing/veridium_recycling' }, recipe => {
        let json = read(recipe);
        json.ingredients = [{ type: 'neoforge:difference', base: { tag: 'create:stone_types/veridium' }, subtracted: { item: 'create:veridium' } }];
        event.remove({ id: String(recipe.id) });
        event.custom(json).id('create:crushing/veridium_recycling');
    });
    stoneProcessing('create:milling', [{ id: 'create:crushed_raw_copper' }], 'crushed_copper_from_veridium');
    stoneProcessing(
        'create:crushing',
        [{ id: 'create:crushed_raw_copper' }, { id: 'create:copper_nugget', count: 3 }, { id: 'create:experience_nugget', chance: 0.1 }],
        'crushed_copper_and_nuggets_from_veridium'
    );
    event.remove({ output: mechanism });
    event
        .custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: 'kubejs:rotation_mechanism' },
            transitional_item: { id: incomplete },
            sequence: [
                { type: 'create:deploying', ingredients: [{ item: incomplete }, { item: 'create:copper_sheet' }], results: [{ id: incomplete }] },
                { type: 'create:deploying', ingredients: [{ item: incomplete }, { item: 'kubejs:rubber' }], results: [{ id: incomplete }] },
                { type: 'create:deploying', ingredients: [{ item: incomplete }, { item: 'minecraft:glass' }], results: [{ id: incomplete }] },
                { type: 'create:pressing', ingredients: [{ item: incomplete }], results: [{ id: incomplete }] }
            ],
            results: [{ id: mechanism }],
            loops: 1
        })
        .id(id('sequenced_assembly', 'sealed_mechanism'));
    event
        .custom({ type: 'create:deploying', ingredients: [{ tag: 'minecraft:logs' }, { item: 'minecraft:copper_ingot' }], results: [{ id: 'create:copper_casing' }] })
        .id(id('deploying', 'copper_casing_from_logs'));
    event.remove({ output: 'kubejs:tk3_hydraulic_machine' });
    event.shaped('kubejs:tk3_hydraulic_machine', ['SSS', 'SCS', 'SSS'], { S: mechanism, C: 'create:copper_casing' }).id(id('crafting', 'copper_machine_from_sealed_mechanisms'));
    addChapterMachines(event, 2);
};

// TNK_RECIPES.chapter04: source line 394
TNK_RECIPES.chapter04 = event => {
    let id = (method, name) => 'tnk:chapter_04/' + method + '/' + name;
    let incomplete = 'create:incomplete_precision_mechanism';
    let mechanism = 'create:precision_mechanism';
    function read(recipe) {
        return JSON.parse(recipe.json.toString());
    }
    function normalized(results) {
        return(results || []).map(value =>({ id: value.id, count: value.count === undefined ? 1: value.count, chance: value.chance === undefined ? 1: value.chance }));
    }
    function processing(type, input, results, name, recyclingId) {
        let matches = [];
        event.forEachRecipe({ type: type, input: input }, recipe => { if (String(recipe.id) === recyclingId) return; matches.push({ id: String(recipe.id), json: read(recipe) }); });
        if (
            matches.length === 1 &&
            JSON.stringify(normalized(matches[0].json.results)) === JSON.stringify(normalized(results))
        )
            return;
        matches.forEach(entry => event.remove({ id: entry.id }));
        let json = { type: type, ingredients: [{ item: input }], results: results };
        if (type === 'create:milling' || type === 'create:crushing') json.processing_time = 250;
        event.custom(json).id(id(type.split(':')[1], name));
    }
    function oreStone(stone, crushed, nugget) {
        let input = 'create:' + stone;
        let recycling = 'create:crushing/' + stone + '_recycling';
        event.forEachRecipe({ id: recycling }, recipe => {
            let json = read(recipe);
            json.ingredients = [{ type: 'neoforge:difference', base: { tag: 'create:stone_types/' + stone }, subtracted: { item: input } }];
            event.remove({ id: recycling });
            event.custom(json).id(recycling);
        });
        processing('create:milling', input, [{ id: crushed }], 'crushed_ore_from_' + stone);
        processing(
            'create:crushing',
            input,
            [{ id: crushed }, { id: nugget, count: 3 }, { id: 'create:experience_nugget', chance: 0.1 }],
            'crushed_ore_and_nuggets_from_' + stone,
            recycling
        );
    }
    oreStone('ochrum', 'create:crushed_raw_gold', 'minecraft:gold_nugget');
    oreStone('asurine', 'create:crushed_raw_zinc', 'create:zinc_nugget');
    oreStone('crimsite', 'create:crushed_raw_iron', 'minecraft:iron_nugget');
    processing(
        'create:milling',
        'create:scoria',
        [{ id: 'minecraft:redstone' }, { id: 'minecraft:redstone', chance: 0.5 }, { id: 'minecraft:redstone', chance: 0.5 }],
        'redstone_from_scoria'
    );
    processing('create:haunting', 'minecraft:sand', [{ id: 'minecraft:soul_sand' }], 'soul_sand_from_sand');
    processing(
        'create:splashing',
        'minecraft:soul_sand',
        [{ id: 'minecraft:quartz' }, { id: 'minecraft:quartz', chance: 0.5 }, { id: 'minecraft:quartz', chance: 0.5 }],
        'quartz_from_soul_sand'
    );
    processing('create:milling', 'minecraft:diorite', [{ id: 'minecraft:quartz' }], 'quartz_from_diorite');
    processing('create:splashing', 'minecraft:gravel', [{ id: 'create:crushed_raw_iron' }, { id: 'create:crushed_raw_iron', chance: 0.5 }], 'crushed_iron_from_gravel');
    ['minecraft:crafting_shaped', 'minecraft:crafting_shapeless'].forEach(type => event.remove({ type: type, output: 'create:rose_quartz' }));
    event.shapeless('create:rose_quartz', ['minecraft:quartz', 'minecraft:redstone', 'minecraft:redstone']).id(id('crafting', 'rose_quartz'));
    ['minecraft:crafting_shaped', 'minecraft:crafting_shapeless', 'create:deploying'].forEach(type => event.remove({ type: type, output: 'create:electron_tube' }));
    event
        .custom({ type: 'create:deploying', ingredients: [{ item: 'create:iron_sheet' }, { item: 'create:polished_rose_quartz' }], results: [{ id: 'create:electron_tube' }] })
        .id(id('deploying', 'electron_tube'));
    event.remove({ output: mechanism });
    event
        .custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: 'kubejs:sealed_mechanism' },
            transitional_item: { id: incomplete },
            sequence: ['create:golden_sheet', 'create:brass_sheet', 'create:electron_tube'].map(held => ({ type: 'create:deploying', ingredients: [{ item: incomplete }, { item: held }], results: [{ id: incomplete }] })),
            results: [{ id: mechanism }],
            loops: 1
        })
        .id(id('sequenced_assembly', 'precision_mechanism'));
    event
        .custom({ type: 'create:deploying', ingredients: [{ tag: 'minecraft:logs' }, { item: 'create:brass_ingot' }], results: [{ id: 'create:brass_casing' }] })
        .id(id('deploying', 'brass_casing_from_logs'));
    event.remove({ output: 'kubejs:tk3_precision_machine' });
    event.shaped('kubejs:tk3_precision_machine', ['PPP', 'PCP', 'PPP'], { P: mechanism, C: 'create:brass_casing' }).id(id('crafting', 'brass_machine_from_precision_mechanisms'));
    addChapterMachines(event, 3);
};

// TNK_RECIPES.chapter05: source line 541
TNK_RECIPES.chapter05 = event => {
    let id = (method, name) => 'tnk:chapter_05/' + method + '/' + name;
    let mechanism = 'kubejs:calculation_mechanism';
    let incomplete = 'kubejs:incomplete_calculation_mechanism';
    let waterPerOperation = 100; // mB. Three real Spout operations per stage.
    if (!Item.exists('alchemicallaser:growth_lens')) {
        throw new Error('[TNK Calculation] Growth Lens missing: replace Alchemical Lasers 0.1.0 with 0.2.0 or newer.');
    }
    event.custom(tnkServerTable("progression_table_553")).id(id('laser_processing', 'certus_quartz_bud'));
    function grow(input, output, name) {
        let steps = [];
        for (let step = 0; step < 3; step++) {
            steps.push({ type: 'create:filling', ingredients: [{ item: input }, { type: 'neoforge:single', fluid: 'minecraft:water', amount: waterPerOperation }], results: [{ id: input }] });
        }
        event
            .custom({ type: 'create:sequenced_assembly', ingredient: { item: input }, transitional_item: { id: input }, sequence: steps, results: [{ id: output }], loops: 1 })
            .id(id('sequenced_assembly', name));
    }
    grow('ae2:small_quartz_bud', 'ae2:medium_quartz_bud', 'medium_certus_bud');
    grow('ae2:medium_quartz_bud', 'ae2:large_quartz_bud', 'large_certus_bud');
    grow('ae2:large_quartz_bud', 'ae2:quartz_cluster', 'certus_quartz_cluster');
    function crushing(input, results, name) {
        event.remove({ type: 'create:crushing', input: input });
        event.custom({ type: 'create:crushing', ingredients: [{ item: input }], results: results, processing_time: 250 }).id(id('crushing', name));
    }
    crushing(
        'ae2:quartz_cluster',
        [{ id: 'ae2:certus_quartz_crystal', count: 2 }, { id: 'ae2:certus_quartz_crystal', chance: 0.5 }, { id: 'ae2:certus_quartz_crystal', chance: 0.5 }],
        'certus_crystals_from_cluster'
    );
    crushing('ae2:certus_quartz_crystal', [{ id: 'ae2:certus_quartz_dust', count: 2 }, { id: 'create:experience_nugget', chance: 0.1 }], 'certus_dust_from_crystal');
    event.remove({ output: 'kubejs:siliceous_compound' });
    event.custom(tnkServerTable("progression_table_621")).id(id('mixing', 'siliceous_compound'));
    ['minecraft:smelting', 'minecraft:blasting'].forEach(type => event.remove({ type: type, output: 'ae2:silicon' }));
    event.smelting('ae2:silicon', 'kubejs:siliceous_compound', 0.35, 200).id(id('smelting', 'silicon_from_compound'));
    event.blasting('ae2:silicon', 'kubejs:siliceous_compound', 0.35, 100).id(id('blasting', 'silicon_from_compound'));
    event.remove({ output: mechanism });
    event
        .custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: 'create:precision_mechanism' },
            transitional_item: { id: incomplete },
            sequence: [
                { type: 'create:deploying', ingredients: [{ item: incomplete }, { item: 'ae2:calculation_processor' }], results: [{ id: incomplete }] },
                { type: 'create:deploying', ingredients: [{ item: incomplete }, { item: 'ae2:logic_processor' }], results: [{ id: incomplete }] },
                { type: 'create:deploying', ingredients: [{ item: incomplete }, { item: 'ae2:certus_quartz_wrench' }], results: [{ id: incomplete }] },
                { type: 'create:pressing', ingredients: [{ item: incomplete }], results: [{ id: incomplete }] }
            ],
            results: [{ id: mechanism }],
            loops: 1
        })
        .id(id('sequenced_assembly', 'calculation_mechanism'));
    event.remove({ output: 'kubejs:calculation_machine' });
    event
        .shaped('kubejs:calculation_machine', ['GMG', 'MDM', 'GMG'], { G: 'ae2:quartz_glass', M: mechanism, D: 'ae2:certus_quartz_dust' })
        .id(id('crafting', 'calculation_machine'));
    event.remove({ output: 'ae2:controller' });
    event.stonecutting('ae2:controller', 'kubejs:calculation_machine').id(id('stonecutting', 'controller'));
    addChapterMachines(event, 4);
};

// TNK_RECIPES.chapter06: source line 672
TNK_RECIPES.chapter06 = event => {
    let id = (method, name) => 'tnk:chapter_06/' + method + '/' + name;
    event.custom(tnkServerTable("progression_table_690")).id(id('coke_oven', 'coke_from_charcoal'));
    event.remove({ type: 'create:crushing', input: 'minecraft:nether_wart' });
    event
        .custom({
            type: 'create:crushing',
            ingredients: [{ item: 'minecraft:nether_wart' }],
            results: [{ id: 'create:cinder_flour' }, { id: 'create:experience_nugget', chance: 0.1 }],
            processing_time: 150
        })
        .id(id('crushing', 'cinder_dust'));
    event.custom(tnkServerTable("progression_table_708")).id(id('laser_processing', 'silver_dust'));
    let t = 'kubejs:incomplete_reinforced_mechanism';
    let steps = ['createaddition:electrum_wire', 'immersiveengineering:component_electronic', 'immersiveengineering:plate_steel'].map(held => ({ type: 'create:deploying', ingredients: [{ item: t }, { item: held }], results: [{ id: t }] }));
    steps.push({ type: 'create:pressing', ingredients: [{ item: t }], results: [{ id: t }] });
    event.remove({ output: 'kubejs:reinforced_mechanism' });
    event
        .custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: 'kubejs:calculation_mechanism' },
            transitional_item: { id: t },
            sequence: steps,
            results: [{ id: 'kubejs:reinforced_mechanism' }],
            loops: 1
        })
        .id(id('sequenced_assembly', 'locomotive_mechanism'));
    event.remove({ output: 'immersiveengineering:light_engineering' });
    event
        .shaped('immersiveengineering:light_engineering', ['STS', 'LEL', 'STS'], { S: 'immersiveengineering:plate_steel', T: 'immersiveengineering:treated_wood_horizontal', L: 'kubejs:reinforced_mechanism', E: 'immersiveengineering:component_electronic' })
        .id(id('crafting', 'light_engineering'));
    addChapterMachines(event, 5);
};

// TNK_RECIPES.chapter07: source line 724
TNK_RECIPES.chapter07 = event => {
    let id = (method, name) => 'tnk:chapter_07/' + method + '/' + name;
    event.remove({ type: 'create:haunting', input: 'minecraft:obsidian' });
    event.custom({ type: 'create:haunting', ingredients: [{ item: 'minecraft:obsidian' }], results: [{ id: 'minecraft:crying_obsidian' }] }).id(id('haunting', 'crying_obsidian'));
    event.remove({ type: 'immersiveengineering:crusher', input: 'minecraft:crying_obsidian' });
    event.custom(tnkServerTable("progression_table_764")).id(id('crusher', 'aluminum_and_nickel'));
    event.remove({ output: 'immersiveengineering:wire_aluminum' });
    event
        .custom({ type: 'createaddition:rolling', ingredients: [{ item: 'immersiveengineering:ingot_aluminum' }], results: [{ id: 'immersiveengineering:wire_aluminum', count: 2 }] })
        .id(id('rolling', 'aluminum_wire'));
    function assembly(name, input, output, held, press) {
        let t = 'kubejs:incomplete_' + name;
        let steps = held.map(h =>({ type: 'create:deploying', ingredients: [{ item: t }, { item: h }], results: [{ id: t }] }));
        if (press) steps.push({ type: 'create:pressing', ingredients: [{ item: t }], results: [{ id: t }] });
        event.remove({ output: output });
        event
            .custom({ type: 'create:sequenced_assembly', ingredient: { item: input }, transitional_item: { id: t }, sequence: steps, results: [{ id: output }], loops: 1 })
            .id(id('sequenced_assembly', name));
    }
    assembly(
        'advanced_electronic_component',
        'kubejs:rubber',
        'immersiveengineering:component_electronic_adv',
        ['immersiveengineering:electron_tube', 'immersiveengineering:electron_tube', 'immersiveengineering:wire_aluminum'],
        true
    );
    assembly(
        'industrial_mechanism',
        'kubejs:reinforced_mechanism',
        'kubejs:industrial_mechanism',
        ['immersiveengineering:plate_steel', 'immersiveengineering:component_electronic_adv', 'immersiveengineering:component_steel', 'immersiveengineering:screwdriver'],
        true
    );
    event.remove({ output: 'immersiveengineering:heavy_engineering' });
    event
        .shaped('immersiveengineering:heavy_engineering', ['STS', 'IEI', 'STS'], { S: 'immersiveengineering:plate_steel', T: 'immersiveengineering:treated_wood_horizontal', I: 'kubejs:industrial_mechanism', E: 'immersiveengineering:component_electronic' })
        .id(id('crafting', 'heavy_engineering'));
    tnkOreMetals().forEach(row => {
        let metal = row.metal, crushed = row.crushed;
        event.remove({ type: 'create:milling', input: '#c:raw_materials/' + metal });
        event
            .custom({ type: 'create:milling', ingredients: [{ tag: 'c:raw_materials/' + metal }], results: [{ id: crushed }], processing_time: 250 })
            .id(id('milling', 'raw_' + metal));
        event.remove({ type: 'create:crushing', input: '#c:raw_materials/' + metal });
        event
            .custom({
                type: 'create:crushing',
                ingredients: [{ tag: 'c:raw_materials/' + metal }],
                results: [{ id: crushed, count: 2 }, { id: 'create:experience_nugget', chance: 0.1 }],
                processing_time: 250
            })
            .id(id('crushing', 'raw_' + metal));
        if (tnkOreItems('c:storage_blocks/raw_' + metal).length) {
            event.remove({ type: 'create:crushing', input: '#c:storage_blocks/raw_' + metal });
            event
                .custom({
                    type: 'create:crushing',
                    ingredients: [{ tag: 'c:storage_blocks/raw_' + metal }],
                    results: [{ id: crushed, count: 18 }, { id: 'create:experience_nugget', chance: 0.1 }],
                    processing_time: 2250
                })
                .id(id('crushing', 'raw_block_' + metal));
        }
        let ores = tnkOreItems('c:ores/' + metal).filter(item => item !== 'minecraft:nether_gold_ore');
        if (ores.length) {
            ores.forEach(item => event.remove({ type: 'create:crushing', input: item }));
            let ingredient =
                metal === 'gold'
                    ? { type: 'neoforge:difference', base: { tag: 'c:ores/gold' }, subtracted: { item: 'minecraft:nether_gold_ore' } }
                    : { tag: 'c:ores/' + metal };
            event
                .custom({ type: 'create:crushing', ingredients: [ingredient], results: [{ id: crushed, count: 2 }, { id: 'create:experience_nugget', chance: 0.1 }], processing_time: 350 })
                .id(id('crushing', 'ore_' + metal));
        }
        event.remove({ type: 'immersiveengineering:crusher', input: crushed });
        event
            .custom({ type: 'immersiveengineering:crusher', input: { item: crushed }, result: { id: row.dust, count: 2 }, secondaries: [], energy: 6000 })
            .id(id('crusher', metal + '_dust'));
    });
    addChapterMachines(event, 6);
};

// TNK_RECIPES.chapter08: source line 887
TNK_RECIPES.chapter08 = event => {
    let id = (method, name) => 'tnk:chapter_08/' + method + '/' + name;
    function process(type, input, results, name, time) {
        event.remove({ type: 'create:' + type, input: input });
        let json = { type: 'create:' + type, ingredients: [{ item: input }], results: results };
        if (time) json.processing_time = time;
        event.custom(json).id(id(type, name));
    }
    event.custom(tnkServerTable("progression_table_930")).id(id('laser_processing', 'amethyst_bud'));
    function grow(input, output, name) {
        let steps = [];
        for (let i = 0; i < 3; i++)
            steps.push({ type: 'create:filling', ingredients: [{ item: input }, { type: 'neoforge:single', fluid: 'minecraft:water', amount: 100 }], results: [{ id: input }] });
        event
            .custom({ type: 'create:sequenced_assembly', ingredient: { item: input }, transitional_item: { id: input }, sequence: steps, results: [{ id: output }], loops: 1 })
            .id(id('sequenced_assembly', name));
    }
    grow('minecraft:small_amethyst_bud', 'minecraft:medium_amethyst_bud', 'medium_amethyst_bud');
    grow('minecraft:medium_amethyst_bud', 'minecraft:large_amethyst_bud', 'large_amethyst_bud');
    grow('minecraft:large_amethyst_bud', 'minecraft:amethyst_cluster', 'amethyst_cluster');
    process('crushing', 'minecraft:amethyst_cluster', tnkServerTable("progression_table_965"), 'amethyst_shards', 250);
    event.remove({ output: 'architects_palette:wardstone_blend' });
    event.shapeless('architects_palette:wardstone_blend', ['minecraft:twisting_vines', 'ars_nouveau:sourceberry_bush']).id(id('crafting', 'ward_blend'));
    process('haunting', 'architects_palette:wardstone_blend', [{ id: 'minecraft:lapis_lazuli' }], 'lapis');
    event.remove({ type: 'create:mixing', output: 'irons_spellbooks:arcane_essence' });
    event.custom(tnkServerTable("progression_table_984")).id(id('mixing', 'arcane_essence'));
    ['arcane_essence', 'arcane_essence_cinder_flour_filling', 'arcane_essence_sugar_filling', 'arcane_essence_flour_filling'].forEach(name => event.remove({ id: 'irons_spellbooks:filling/' + name }));
    event.custom(tnkServerTable("progression_table_1005")).id(id('mixing', 'mana'));
    event.remove({ output: 'kubejs:empty_tube' });
    event.remove({ id: 'tnk:chapter_08/deploying/empty_tube' });
    event.remove({ id: 'tnk:chapter_09/mechanical_crafting/iron_tube' });
    event.custom(tnkServerTable("progression_table_1020")).id(id('mechanical_crafting', 'empty_tube'));
    event.custom(tnkServerTable("progression_table_1032")).id(id('filling', 'mana_tube'));
    process(
        'crushing',
        'minecraft:obsidian',
        [{ id: 'create:powdered_obsidian' }, { id: 'minecraft:obsidian', chance: 0.75 }, { id: 'create:experience_nugget', chance: 0.1 }],
        'powdered_obsidian',
        500
    );
    let t = 'kubejs:incomplete_arcane_mechanism';
    let steps = [{ type: 'create:filling', ingredients: [{ item: t }, { type: 'neoforge:single', fluid: 'create_dragons_plus:dragon_breath', amount: 400 }], results: [{ id: t }] }];
    ['ars_nouveau:source_gem', 'create:sturdy_sheet', 'kubejs:mana_tube'].forEach(h =>
        steps.push({ type: 'create:deploying', ingredients: [{ item: t }, { item: h }], results: [{ id: t }] })
    );
    event.remove({ output: 'kubejs:arcane_mechanism' });
    event
        .custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: 'kubejs:industrial_mechanism' },
            transitional_item: { id: t },
            sequence: steps,
            results: [{ id: 'kubejs:arcane_mechanism' }],
            loops: 1
        })
        .id(id('sequenced_assembly', 'arcane_mechanism'));
    addChapterMachines(event, 7);
};

// TNK_RECIPES.chapter09: source line 1011
TNK_RECIPES.chapter09 = event => {
    let id = (method, name) => 'tnk:chapter_09/' + method + '/' + name;
    function process(type, input, results, name, time) {
        event.remove({ type: 'create:' + type, input: input });
        let json = { type: 'create:' + type, ingredients: [{ item: input }], results: results };
        if (time) json.processing_time = time;
        event.custom(json).id(id(type, name));
    }
    function mechanical(name, output, count, pattern, key) {
        event.remove({ output: output });
        event
            .custom({ type: 'create:mechanical_crafting', pattern: pattern, key: key, result: { id: output, count: count }, accept_mirrored: false })
            .id(id('mechanical_crafting', name));
    }
    process('crushing', 'create:crushing_wheel', [{ id: 'ae2:singularity' }], 'singularity', 500);
    event
        .custom({
            type: 'create:mixing',
            ingredients: [{ item: 'create:cinder_flour' }, { item: 'minecraft:gunpowder' }],
            results: [{ id: 'minecraft:gunpowder', count: 2 }],
            processing_time: 100
        })
        .id(id('mixing', 'gunpowder'));
    process('crushing', 'minecraft:ender_pearl', [{ id: 'ae2:ender_dust', count: 2 }], 'ender_dust', 250);
    event.custom(tnkServerTable("progression_table_1125")).id(id('laser_processing', 'ender_pearl'));
    mechanical('tnt', 'minecraft:tnt', 1, ['GSG', 'SGS', 'GSG'], { G: { item: 'minecraft:gunpowder' }, S: { tag: 'minecraft:sand' } });
    event.custom(tnkServerTable("progression_table_1140")).id(id('mixing', 'quantum_entangled_singularities'));
    event.remove({ output: 'kubejs:dye_entangled_singularity' });
    event
        .shaped('kubejs:dye_entangled_singularity', ['DDD', 'DSD', 'DDD'], { D: '#c:dyes', S: 'ae2:quantum_entangled_singularity' })
        .id(id('crafting', 'dye_entangled_singularity'));
    process('crushing', 'kubejs:dye_entangled_singularity', [{ id: 'ae2:red_paint_ball' }], 'paintball', 250);
    let colors = ['red', 'green', 'yellow', 'blue', 'purple', 'gray'];
    for (let i = 0; i < colors.length - 1; i++) {
        let results = [{ id: 'ae2:' + colors[i + 1] + '_paint_ball' }];
        results.push({ id: 'irons_spellbooks:uncommon_ink', amount: 10 });
        process('emptying', 'ae2:' + colors[i] + '_paint_ball', results, colors[i] + '_paintball');
    }
    mechanical('chromatic_compound', 'create:chromatic_compound', 1, ['PP', 'PP'], { P: { item: 'ae2:purple_paint_ball' } });
    process('pressing', 'create:refined_radiance', [{ id: 'kubejs:radiant_sheet' }], 'radiant_sheet');
    mechanical('radiant_coil', 'kubejs:radiant_coil', 1, ['S'], { S: { item: 'kubejs:radiant_sheet' } });
    event.custom(tnkServerTable("progression_table_1170")).id(id('laser_processing', 'shadow_alloy'));
    event.custom(tnkServerTable("progression_table_1181")).id(id('mixing', 'refined_shadow_alloy'));
    event.shapeless('kubejs:spectral_ruby', ['ars_nouveau:source_gem', 'create:rose_quartz']).id(id('crafting', 'spectral_ruby'));
    process('sandpaper_polishing', 'kubejs:spectral_ruby', [{ id: 'kubejs:polished_spectral_ruby' }], 'spectral_ruby');
    event.remove({ output: 'kubejs:polished_spectral_ruby_electron_tube' });
    event
        .custom({
            type: 'create:deploying',
            ingredients: [{ item: 'kubejs:empty_tube' }, { item: 'kubejs:polished_spectral_ruby' }],
            results: [{ id: 'kubejs:polished_spectral_ruby_electron_tube' }]
        })
        .id(id('deploying', 'spectral_ruby_tube'));
    let t = 'kubejs:incomplete_eclipse_mechanism';
    let steps = ['kubejs:radiant_coil', 'kubejs:radiant_coil', 'kubejs:refined_shadow_alloy', 'kubejs:polished_spectral_ruby_electron_tube'].map(h => ({ type: 'create:deploying', ingredients: [{ item: t }, { item: h }], results: [{ id: t }] }));
    steps.push({ type: 'create:filling', ingredients: [{ item: t }, { type: 'neoforge:single', fluid: 'irons_spellbooks:uncommon_ink', amount: 200 }], results: [{ id: t }] });
    steps.push({ type: 'create:pressing', ingredients: [{ item: t }], results: [{ id: t }] });
    event.remove({ output: 'kubejs:eclipse_mechanism' });
    event
        .custom({
            type: 'create:sequenced_assembly',
            ingredient: { item: 'kubejs:arcane_mechanism' },
            transitional_item: { id: t },
            sequence: steps,
            results: [{ id: 'kubejs:eclipse_mechanism' }],
            loops: 1
        })
        .id(id('sequenced_assembly', 'eclipse_mechanism'));
    tnkOreMetals().forEach(row => {
        event
            .custom({
                type: 'alchemicallaser:laser_processing',
                ingredient: { tag: 'c:dusts/' + row.metal },
                input_count: 4,
                lens: 'alchemicallaser:eclipse_lens',
                result: { id: row.ingot, count: 5 },
                duration: 160,
                minimum_rpm: 16
            })
            .id(id('laser_processing', row.metal + '_bulk_ingots'));
    });
    addChapterMachines(event, 8);
};

// progression: source line 1141
ServerEvents.afterRecipes(event => {
    let Random = Java.loadClass('java.util.concurrent.ThreadLocalRandom');
    let QuantumBridge = Java.loadClass('appeng.blockentity.qnb.QuantumBridgeBlockEntity');
    let colors = ['red', 'green', 'yellow', 'blue', 'purple'];
    event.forEachRecipe({ id: 'tnk:chapter_09/crushing/paintball' }, holder => {
        holder.value().enforceNextResult(() => Item.of('ae2:' + colors[Random.current().nextInt(5)] + '_paint_ball'));
    });
    event.forEachRecipe({ id: 'tnk:chapter_09/mixing/quantum_entangled_singularities' }, holder => {
        holder.value().enforceNextResult(() => { let pair = Item.of('ae2:quantum_entangled_singularity', 2); QuantumBridge.assignFrequency(pair); return pair; });
    });
});

// TNK_RECIPES.chapter10: source line 1158
TNK_RECIPES.chapter10 = event => {
    let id = (method, name) => 'tnk:chapter_10/' + method + '/' + name;
    let costs = tnkServerTable("progression_costs_1269");
    function process(type, inputs, results, name, extra) {
        let json = { type: type, ingredients: inputs, results: results };
        if (extra) Object.keys(extra).forEach(key => (json[key] = extra[key]));
        event.custom(json).id(id(type.split(':')[1], name));
    }
    function deploy(t, held, keep) {
        let step = { type: 'create:deploying', ingredients: [{ item: t }, { item: held }], results: [{ id: t }] };
        if (keep) step.keep_held_item = true;
        return step;
    }
    function press(t) {
        return { type: 'create:pressing', ingredients: [{ item: t }], results: [{ id: t }] };
    }
    function liquid(fluid, amount) {
        return { type: 'neoforge:single', fluid: fluid, amount: amount };
    }
    function potion(effect, amount) {
        return {
            type: 'neoforge:components',
            fluids: 'create:potion',
            amount: amount,
            components: { 'create:potion_fluid_bottle_type': 'regular', 'minecraft:potion_contents': { potion: 'minecraft:' + effect } }
        };
    }
    function fill(t, fluid) {
        return { type: 'create:filling', ingredients: [{ item: t }, fluid], results: [{ id: t }] };
    }
    function sequence(name, input, t, output, steps, loops) {
        event.remove({ output: output });
        event
            .custom({ type: 'create:sequenced_assembly', ingredient: { item: input }, transitional_item: { id: t }, sequence: steps, results: [{ id: output }], loops: loops || 1 })
            .id(id('sequenced_assembly', name));
    }
    function mechanical(name, output, pattern, key) {
        event.remove({ output: output });
        event.custom({ type: 'create:mechanical_crafting', pattern: pattern, key: key, result: { id: output }, accept_mirrored: false }).id(id('mechanical_crafting', name));
    }
    event.remove({ id: 'immersiveengineering:squeezer/graphite_dust' });
    event.remove({ id: 'tnk:ie_compat/compacting/immersiveengineering/squeezer/graphite_dust' });
    let graphite = [];
    ['create:powdered_obsidian', 'immersiveengineering:dust_coke', 'immersiveengineering:hemp_fiber', 'minecraft:sand'].forEach(item => {
        graphite.push({ item: item });
        graphite.push({ item: item });
    });
    process('create:mixing', graphite, [{ id: 'immersiveengineering:dust_hop_graphite', count: 3 }], 'hop_graphite_dust', { processing_time: 100 });
    let t = 'kubejs:incomplete_graphite_electrode';
    sequence(
        'graphite_electrode',
        'immersiveengineering:dust_hop_graphite',
        t,
        'immersiveengineering:graphite_electrode',
        [fill(t, liquid('minecraft:lava', costs.electrodeLava)), deploy(t, 'immersiveengineering:mold_rod', true), press(t)]
    );
    event.remove({ output: 'kubejs:unstable_creation_gem' });
    event.custom(tnkServerTable("progression_table_1372")).id(id('laser_processing', 'unstable_creation_gem'));
    event.remove({ output: 'kubejs:compound_base' });
    process('create:filling', [{ item: 'create:chromatic_compound' }, potion('strong_healing', costs.healing)], [{ id: 'kubejs:compound_base' }], 'compound_base');
    event.remove({ output: 'kubejs:lapis_alloy' });
    event
        .custom({
            type: 'immersiveengineering:arc_furnace',
            input: { item: 'kubejs:compound_base' },
            additives: [{ basePredicate: { item: 'minecraft:lapis_lazuli' }, count: 2 }, { item: 'immersiveengineering:dust_coke' }],
            results: [{ id: 'kubejs:lapis_alloy' }],
            time: costs.arcTicks,
            energy: costs.arcEnergy
        })
        .id(id('arc_furnace', 'lapis_alloy'));
    event.remove({ output: 'kubejs:overcharge_alloy' });
    process(
        'createaddition:charging',
        [{ item: 'kubejs:lapis_alloy' }],
        [{ id: 'kubejs:overcharge_alloy' }],
        'overcharge_alloy',
        { energy: costs.chargingEnergy, max_charge_rate: costs.chargingRate }
    );
    t = 'kubejs:incomplete_overcharge_alloy_sheet';
    sequence('overcharge_alloy_sheet', 'kubejs:overcharge_alloy', t, 'kubejs:overcharge_alloy_sheet', [fill(t, potion('swiftness', costs.swiftness)), press(t), press(t)]);
    t = 'kubejs:incomplete_stargaze_alloy';
    sequence('stargaze_alloy', 'kubejs:compound_base', t, 'kubejs:stargaze_alloy', [deploy(t, 'minecraft:conduit'), deploy(t, 'create:refined_radiance'), fill(t, liquid('create:chocolate', costs.chocolate))]);
    sequence('stargaze_alloy_sheet', 'kubejs:stargaze_alloy', t, 'kubejs:stargaze_alloy_sheet', [press(t), press(t), press(t), press(t), press(t)]);
    mechanical('boot_drive', 'kubejs:boot_drive', ['DCL'], { D: { item: 'ae2:item_storage_cell_16k' }, C: { item: 'kubejs:radiant_coil' }, L: { item: 'minecraft:lapis_block' } });
    t = 'kubejs:incomplete_unstable_creation_core';
    sequence('unstable_creation_core', 'kubejs:unstable_creation_gem', t, 'kubejs:unstable_creation_core', [
        deploy(t, 'kubejs:stargaze_alloy_sheet'),
        deploy(t, 'kubejs:overcharge_alloy_sheet'),
        deploy(t, 'kubejs:boot_drive', true),
        fill(t, liquid('minecraft:lava', costs.coreLava)),
        fill(t, liquid('create_wizardry:mana', costs.coreMana))
    ]);
    event.remove({ output: 'kubejs:polished_amethyst' });
    event.remove({ output: 'kubejs:amethyst_tube' });
    process('create:sandpaper_polishing', [{ item: 'minecraft:amethyst_shard' }], [{ id: 'kubejs:polished_amethyst' }], 'polished_amethyst');
    event.shaped('kubejs:amethyst_tube', ['A', 'S'], { A: 'kubejs:polished_amethyst', S: 'create:iron_sheet' }).id(id('crafting', 'amethyst_tube'));
    process('create:deploying', [{ item: 'kubejs:polished_amethyst' }, { item: 'create:iron_sheet' }], [{ id: 'kubejs:amethyst_tube' }], 'amethyst_tube');
    event.remove({ output: 'kubejs:lapis_sheet' });
    process('create:pressing', [{ item: 'kubejs:lapis_alloy' }], [{ id: 'kubejs:lapis_sheet' }], 'lapis_sheet');
    event.remove({ output: 'kubejs:integrated_circuit' });
    process('create:deploying', [{ item: 'ae2:printed_logic_processor' }, { item: 'kubejs:lapis_sheet' }], [{ id: 'kubejs:integrated_circuit' }], 'integrated_circuit');
    t = 'kubejs:incomplete_amethyst_circuit_gate';
    sequence('amethyst_circuit_gate', 'kubejs:integrated_circuit', t, 'kubejs:amethyst_circuit_gate', [deploy(t, 'kubejs:amethyst_tube'), deploy(t, 'kubejs:radiant_coil')]);
    mechanical('matter_construct', 'kubejs:matter_construct', ['ASG'], { A: { item: 'kubejs:amethyst_circuit_gate' }, S: { item: 'ae2:singularity' }, G: { item: 'kubejs:unstable_creation_gem' } });
    t = 'kubejs:incomplete_creation_core';
    let steps = tnkServerTable("progression_table_1485").map(held => deploy(t, held));
    sequence('creation_core', 'kubejs:unstable_creation_core', t, 'kubejs:creation_core', steps, 2);
    event.remove({ output: 'kubejs:tk3_creation_machine' });
    event.shaped('kubejs:tk3_creation_machine', ['CCC', 'CNC', 'CCC'], { C: 'kubejs:creation_core', N: 'minecraft:netherite_block' }).id(id('crafting', 'creation_machine'));
};

// TNK_RECIPES.endgameEquipment: source line 1370
TNK_RECIPES.endgameEquipment = event => {
    let plan = JSON.parse(String(JsonIO.readString('kubejs/pack_data/endgame.json')));
    function available(ids) { return ids.every(id => Item.exists(id)); }
    if (available(['tnkcore:mob_cage', 'kubejs:arcane_mechanism'])) {
        event.remove({output: 'tnkcore:mob_cage'});
        event.shaped('tnkcore:mob_cage', ['BMB', 'BLE', 'BMB'], { B: 'minecraft:iron_bars', M: 'kubejs:arcane_mechanism', L: 'minecraft:lantern', E: 'minecraft:ender_pearl' }).id('tnk:endgame/crafting/mob_cage');
    }
    if (available(['tnkcore:spawner_core', 'kubejs:eclipse_mechanism'])) {
        event.remove({output: 'tnkcore:spawner_core'});
        event.shaped('tnkcore:spawner_core', ['BEB', 'SNS', 'BEB'], { B: 'minecraft:iron_bars', E: 'kubejs:eclipse_mechanism', S: 'minecraft:echo_shard', N: 'minecraft:nether_star' }).id('tnk:endgame/crafting/spawner_cage');
    }
    event.shaped('kubejs:master_builder_template', ['ECE', 'SNS', 'ECE'], { E: 'kubejs:eclipse_mechanism', C: 'kubejs:creation_core', S: 'ae2:singularity', N: 'minecraft:netherite_block' }).id('tnk:endgame/crafting/master_builder_template');
    if (available(['constructionstick:netherite_stick', 'constructionstick:diamond_stick'])) {
        event.remove({output: 'constructionstick:netherite_stick'});
        event.custom(tnkServerTable("progression_table_1530")).id('tnk:endgame/smithing/master_builders_wand');
    }
    if (Item.exists('constructionstick:template_unbreakable')) {
        event.remove({ or: [{ output: 'constructionstick:template_unbreakable' }, { input: 'constructionstick:template_unbreakable' }] });
    }
    plan.cells.forEach(row => {
        if (!available([row.cell, row.resource, 'ae2:cell_component_64k'])) return;
        event.remove({output: row.cell});
        event.shaped(row.cell, ['SGS', 'MCH', 'SGS'], { S: row.resource, G: 'ae2:quartz_glass', M: 'kubejs:creation_core', C: 'ae2:cell_component_64k', H: 'ae2:item_cell_housing' }).id('tnk:infinity_cells/tier_09/' + row.name);
    });
    plan.crafting.forEach(row => {
        let output = row.result ? row.result.id : row.results[0].id;
        let required = [output];
        if (row.key) Object.keys(row.key).forEach(key => required.push(row.key[key].item));
        else {
            required.push(row.ingredient.item, row.transitional_item.id);
            row.sequence.forEach(step => step.ingredients.forEach(input => required.push(input.item)));
        }
        if (!available(required)) return;
        event.remove({output: output});
        let recipe = JSON.parse(JSON.stringify(row));
        delete recipe.id;
        event.custom(recipe).id(row.id);
    });
};
