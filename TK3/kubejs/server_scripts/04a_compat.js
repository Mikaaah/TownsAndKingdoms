// priority: -900
// TNK3 | compat

// endgame creation augmenter: source line 7
ServerEvents.recipes(event => {
    if (!Platform.isLoaded('creationaugmenter') || !Platform.isLoaded('create')) return;
    let prefix = 'tnk:creation_augmenter/';
    let machine = 'creationaugmenter:creation_augmenter';
    let lenses = { unbreaking: 'creationaugmenter:unbreaking_lens', absolute_conversion: 'creationaugmenter:absolute_conversion_lens', transmutation: 'creationaugmenter:transmutation_lens' };
    let canonical = id => typeof TNK_UNIFY === 'undefined' ? id : TNK_UNIFY.item(id);
    let added = 0;
    let unavailable = 0;
    function available(id) {
        return id [0] === '#' ? Ingredient.of(id).itemIds.toArray().length > 0: Item.exists(canonical(id));
    }
    function ingredient(id) {
        return id[0] === '#' ? { tag: id.slice(1) } : { item: canonical(id) };
    }
    function mechanical(name, output, pattern, inputs) {
        event.remove({ output: output });
        let symbols = Object.keys(inputs);
        if (!Item.exists(output) || !symbols.every(symbol => available(inputs[symbol]))) {
            unavailable++;
            return;
        }
        let key = {};
        symbols.forEach(symbol => { key[symbol] = ingredient(inputs[symbol]); });
        event.custom({ type: 'create:mechanical_crafting', category: 'misc', accept_mirrored: false, pattern: pattern, key: key, result: { id: output, count: 1 } }).id(prefix + 'mechanical_crafting/' + name);
        added++;
    }
    function augment(name, lens, input, output, count, duration) {
        if (!available(input) || !Item.exists(canonical(output)) || !Item.exists(lenses[lens])) {
            unavailable++;
            return;
        }
        let maxResult = Number(Item.of(canonical(output)).getMaxStackSize());
        if (!Number.isInteger(count) || count < 1 || count > maxResult) {
            unavailable++;
            console.warn('[TNK Creation Augmenter] Skipped oversized result: ' + output + ' x' + count);
            return;
        }
        event.custom({
            type: 'creationaugmenter:creation_augmenting',
            lens: lens,
            ingredient: ingredient(input),
            result: { id: canonical(output), count: count },
            copy_components: false,
            processing_time: duration || 120,
            min_rpm: 256
        }).id(prefix + lens + '/' + name);
        added++;
    }
    ['refine_echo', 'refine_netherite', 'transmute_emerald', 'transmute_equipment'].forEach(name => event.remove({ id: 'creationaugmenter:' + name }));
    mechanical('creation_augmenter', machine, ['NLTLN', 'REMER', 'TMBMT', 'REMER', 'NLTLN'], tnkServerTable("endgame_creation_augmenter_table_86"));
    mechanical('unbreaking_lens', lenses.unbreaking, ['NCSCN', 'EAPBE', 'SPTPS', 'EBPAE', 'NCSCN'], tnkServerTable("endgame_creation_augmenter_table_98"));
    mechanical('absolute_conversion_lens', lenses.absolute_conversion, ['NCGCN', 'EDPDE', 'GFKFG', 'EDPDE', 'NCGCN'], tnkServerTable("endgame_creation_augmenter_table_111"));
    mechanical('transmutation_lens', lenses.transmutation, ['TCACF', 'EHMHE', 'ASGSA', 'EMPME', 'RCACM'], tnkServerTable("endgame_creation_augmenter_table_123"));
    tnkServerTable("endgame_creation_augmenter_table_141").forEach(row => {
        let metal = row[0];
        augment('raw_' + metal, 'absolute_conversion', '#c:raw_materials/' + metal, row[1], 8);
        augment('raw_block_' + metal, 'absolute_conversion', '#c:storage_blocks/raw_' + metal, row[1], 64, 240);
        augment('crushed_' + metal, 'absolute_conversion', 'create:crushed_raw_' + metal, row[1], 4);
        let dust = metal === 'zinc' ? 'kubejs:zinc_dust' : 'immersiveengineering:dust_' + metal;
        augment('dust_' + metal, 'absolute_conversion', dust, row[1], 2);
    });
    tnkServerTable("endgame_creation_augmenter_table_159").forEach(row => augment(row[0], 'absolute_conversion', row[1], row[2], row[3], 240));
    let batch = 'kubejs:compressed_matter_batch';
    let transitional = 'kubejs:incomplete_compressed_matter_batch';
    if ([batch, transitional, 'ae2:matter_ball'].every(id => Item.exists(id))) {
        let sequence = [];
        for (let i = 0; i < 7; i++) {
            sequence.push({ type: 'create:deploying', ingredients: [{ item: transitional }, { item: 'ae2:matter_ball' }], results: [{ id: transitional }] });
        }
        event.custom({ type: 'create:sequenced_assembly', ingredient: { item: 'ae2:matter_ball' }, transitional_item: { id: transitional }, sequence: sequence, loops: 9, results: [{ id: batch }] }).id(prefix + 'sequenced_assembly/compressed_matter_batch');
        added++;
    }
    [
        ['matter_batch_to_singularity', batch, 'ae2:singularity', 1],
        ['uranium_fuel_rods', 'immersiveengineering:storage_uranium', 'createnuclear:uranium_rod', 2],
        ['thorium_fuel_rods', 'createnuclear:thorium_block', 'createnuclear:thorium_rod', 2],
        ['electrum_from_brass', 'create:brass_block', 'immersiveengineering:ingot_electrum', 12],
        ['steel_from_constantan', 'immersiveengineering:storage_constantan', 'createnuclear:steel_ingot', 12],
        ['hop_graphite_from_steel', 'immersiveengineering:storage_steel', 'immersiveengineering:ingot_hop_graphite', 4],
        ['thaumic_mechanisms', 'thaumaturge:metal_thaumium', 'create_thaumaturgy:thaumic_mechanism', 4],
        ['stabilising_mechanisms', 'thaumaturge:metal_void', 'create_thaumaturgy:stabilising_mechanism', 2],
        ['abjuration_essence', 'ars_nouveau:source_gem_block', 'ars_nouveau:abjuration_essence', 4],
        ['ancient_metal_from_black_steel', 'cataclysm:black_steel_block', 'cataclysm:ancient_metal_ingot', 4],
        ['mythic_reforging_material', 'apotheosis:arcane_sands', 'apotheosis:godforged_pearl', 1]
    ].forEach(row => augment(row[0], 'absolute_conversion', row[1], row[2], row[3], 180));
    tnkServerTable("endgame_creation_augmenter_table_209").forEach(row => augment(row[0], 'transmutation', row[1], row[2], row[3], 240));
    let pearlPair = 'kubejs:prepared_qol/augmenter/gazing_pearl_pair';
    if (Item.exists(pearlPair) && Item.exists('alexscaves:gazing_pearl')) {
        event.custom({
            type: 'create:cutting',
            ingredients: [{ item: pearlPair }],
            results: [{ id: 'alexscaves:gazing_pearl', count: 1 }, { id: 'alexscaves:gazing_pearl', count: 1 }],
            processing_time: 20
        }).id(prefix + 'cutting/gazing_pearl_pair');
        added++;
    }
    console.info('[TNK Creation Augmenter] Added ' + added + ' recipes; ' + unavailable + ' unavailable integrations.');
});

// tnk cross mod qol: source line 21
ServerEvents.recipes(event => {
    function tnkQolBatchId(marker) {
        if (typeof global === 'undefined' || !global.TNK_BATCH_ITEMS ||
            typeof global.TNK_BATCH_ITEMS.id !== 'function') return null;
        let id = global.TNK_BATCH_ITEMS.id('qol', marker);
        return id && Item.exists(String(id)) ? String(id) : null;
    }
(() => {
    if (!Platform.isLoaded('create')) return;
    let prefix = 'tnk:synergy/';
    let clone = value => JSON.parse(JSON.stringify(value));
    let canon = id => typeof TNK_UNIFY !== 'undefined' && typeof TNK_UNIFY.item === 'function' ? TNK_UNIFY.item(id): id;
    let wanted = new Set(tnkServerTable("tnk_cross_mod_qol_table_38"));
    let sources = {};
    let fluxProcessingAvailable = false;
    let added = 0;
    function remember(recipe) {
        if (recipe.removed || recipe.creationError) return;
        let id = String(recipe.id);
        if (id.indexOf(prefix) === 0) return;
        try {
            if (typeof recipe.serialize === 'function') recipe.serialize();
            let json = JSON.parse(recipe.json.toString());
            if (id.indexOf('create_thaumaturgy:') === 0 &&
                JSON.stringify(json).indexOf('thaumaturge:flux_goo') !== -1) {
                fluxProcessingAvailable = true;
            }
            let results = json.result ? [json.result] : (json.results || []);
            results.forEach(result => {
                if (!result || result.amount || !wanted.has(result.id || result.item)) return;
                let output = result.id || result.item;
                if (!sources[output]) sources[output] = [];
                sources[output].push({ id: id, json: json, count: result.count || 1 });
            });
        } catch (error) {
            console.warn('[TNK Synergy] Could not inspect optional source ' + id + '; left untouched.');
        }
    }
    wanted.forEach(output => event.forEachRecipe({ output: output }, remember));
    ['create_thaumaturgy:decor/flux_stained_cut_arcane_stone', 'create_thaumaturgy:decor/flux_stained_small_arcane_bricks', 'create_thaumaturgy:mixing/flux_amalgam'].forEach(id => event.forEachRecipe({ id: id }, remember));
    event.addedRecipes.forEach(remember);
    function present(ids) { return ids.every(id => Item.exists(canon(id))); }
    function tagPresent(tag) { return Ingredient.of('#' + tag).itemIds.toArray().length > 0; }
    function tagHas(tag, item) { return Ingredient.of('#' + tag).test(Item.of(canon(item))); }
    function fluidPresent(id) {
        let Registries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
        let Location = Java.loadClass('net.minecraft.resources.ResourceLocation');
        return Registries.FLUID.containsKey(Location.parse(id));
    }
    function item(id) { return { item: canon(id) }; }
    function fluid(id, amount) { return { type: 'neoforge:single', fluid: id, amount: amount }; }
    function result(id, count) { return { id: canon(id), count: count }; }
    function repeat(value, count) {
        let list = [];
        for (let i = 0; i < count; i++) list.push(clone(value));
        return list;
    }
    function emit(name, json) {
        event.custom(json).id(prefix + name);
        added++;
    }
    function shapedInputs(source) {
        let json = source.json;
        if (!Array.isArray(json.pattern) || !json.key ||
            ['minecraft:crafting_shaped', 'immersiveengineering:shaped_fluid', 'immersiveengineering:turn_and_copy', 'create:mechanical_crafting'].indexOf(json.type) === -1) return null;
        let safeKeys = ['type', 'category', 'group', 'show_notification', 'key', 'pattern', 'result', 'accept_mirrored', 'quarter_turn', 'neoforge:conditions'];
        if (Object.keys(json).some(key => safeKeys.indexOf(key) === -1) ||
            !json.result || Object.keys(json.result).some(key => ['id', 'item', 'count'].indexOf(key) === -1)) return null;
        let inputs = [];
        for (let row = 0; row < json.pattern.length; row++) {
            let line = json.pattern[row];
            if (typeof line !== 'string') return null;
            for (let column = 0; column < line.length; column++) {
                let symbol = line.charAt(column);
                if (symbol === ' ') continue;
                let ingredient = json.key[symbol];
                if (!ingredient || Array.isArray(ingredient)) return null;
                inputs.push(ingredient);
            }
        }
        return inputs;
    }
    function exactIngredient(ingredient, itemId, tag) {
        return ingredient && Object.keys(ingredient).every(key => ['item', 'tag'].indexOf(key) !== -1) &&
            ((itemId && ingredient.item === canon(itemId)) || (tag && ingredient.tag === tag));
    }
    function isFluid(ingredient, tag, amount) {
        return ingredient && ingredient.type === 'immersiveengineering:fluid_stack' &&
            Object.keys(ingredient).every(key => ['type', 'tag', 'amount'].indexOf(key) !== -1) &&
            ingredient.tag === tag && ingredient.amount === amount;
    }
    function matchingShape(output, count, classify, expected) {
        let candidates = sources[output] || [];
        for (let i = 0; i < candidates.length; i++) {
            let source = candidates[i];
            if (source.count !== count) continue;
            let inputs = shapedInputs(source);
            if (!inputs) continue;
            let totals = {};
            let valid = true;
            inputs.forEach(ingredient => { let role = classify(ingredient); if (! role) valid = false; else totals [role] =(totals [role] || 0) + 1; });
            if (valid && Object.keys(totals).length === Object.keys(expected).length &&
                Object.keys(expected).every(key => totals[key] === expected[key])) return source;
        }
        return null;
    }
    if (Platform.isLoaded('ars_nouveau') && Platform.isLoaded('immersiveengineering')) {
        let treated = 'immersiveengineering:treated_wood_horizontal';
        let woodSource = matchingShape(treated, 8, ingredient =>
            exactIngredient(ingredient, null, 'minecraft:planks') ? 'plank' :
            isFluid(ingredient, 'c:creosote', 1000) ? 'oil' : null,
            { plank: 8, oil: 1 });
        if (woodSource && present([treated, 'ars_nouveau:earth_essence']) &&
            tagPresent('minecraft:planks') && fluidPresent('immersiveengineering:creosote')) {
            emit('magic/source_bound_treated_wood', {
                type: 'create:mixing',
                ingredients: repeat({ tag: 'minecraft:planks' }, 4).concat([item('ars_nouveau:earth_essence'), fluid('immersiveengineering:creosote', 375)]),
                results: [result(treated, 4)],
                processing_time: 120
            });
        }
        ['copper', 'electrum'].forEach(metal => {
            let plain = 'immersiveengineering:wirecoil_' + metal;
            let insulated = plain + '_ins';
            let source = matchingShape(insulated, 4, ingredient =>
                exactIngredient(ingredient, plain, null) ? 'coil' :
                exactIngredient(ingredient, 'immersiveengineering:hemp_fabric', 'c:fabric_hemp') ? 'fabric' : null,
                { coil: 4, fabric: 5 });
            if (!source || !present([plain, insulated, 'ars_nouveau:source_gem']) ||
                !tagPresent('c:fabric_hemp')) return;
            emit('magic/source_bound_' + metal + '_insulation', {
                type: 'create:mixing',
                ingredients: repeat(item(plain), 4).concat(
                    repeat({ tag: 'c:fabric_hemp' }, 4), [item('ars_nouveau:source_gem')]),
                results: [result(insulated, 4)],
                processing_time: 120
            });
        });
    }
    if (Platform.isLoaded('createnuclear') && Platform.isLoaded('alchemicallaser') &&
        Platform.isLoaded('create_thaumaturgy') &&
        (sources['create_thaumaturgy:stabilising_mechanism'] || []).length &&
        present(['alchemicallaser:power_lens', 'create_thaumaturgy:stabilising_mechanism'])) {
        [['uranium', 'createnuclear:enriched_yellowcake'], ['thorium', 'createnuclear:thorium_ingot']].forEach(row => {
            let metal = row[0];
            let feedstock = row[1];
            let output = 'createnuclear:' + metal + '_rod';
            let source = matchingShape(output, 1, ingredient => exactIngredient(ingredient, feedstock, null) ? 'fuel': null, { fuel: 5 });
            if (!source || !present([feedstock, output]) || Item.of(canon(output)).getMaxStackSize() < 8) return;
            let marker = 'fuel/' + metal + '/eight_rods';
            let batchId = tnkQolBatchId(marker);
            if (!batchId) return;
            let prepared = { id: batchId, count: 1 };
            emit('nuclear/prepare_' + metal + '_fuel_batch', {
                type: 'create:mechanical_crafting', category: 'misc', accept_mirrored: false,
                pattern: ['FFFFFFFF', 'FFFFFFFF', 'FFFFFFFF', 'FFFFFFFF', 'FFFFFFFF', '   S    '],
                key: { F: item(feedstock), S: item('create_thaumaturgy:stabilising_mechanism') },
                result: prepared
            });
            emit('nuclear/finish_' + metal + '_fuel_batch', {
                type: 'alchemicallaser:laser_processing',
                ingredient: { item: batchId },
                input_count: 1, lens: 'alchemicallaser:power_lens',
                result: result(output, 8), duration: 160, minimum_rpm: 128,
                copy_components: false, consume: false
            });
        });
    }
    if (Platform.isLoaded('thaumaturge') && Platform.isLoaded('create_thaumaturgy') &&
        Platform.isLoaded('immersiveengineering') && fluxProcessingAvailable &&
        present(['immersiveengineering:concrete', 'minecraft:clay_ball']) &&
        tagPresent('c:sands') && tagPresent('c:gravels') && tagHas('c:clay', 'minecraft:clay_ball') &&
        fluidPresent('thaumaturge:flux_goo') && fluidPresent('minecraft:water')) {
        let source = matchingShape('immersiveengineering:concrete', 8, ingredient =>
            exactIngredient(ingredient, null, 'c:sands') ? 'sand' :
            exactIngredient(ingredient, null, 'c:gravels') ? 'gravel' :
            exactIngredient(ingredient, 'minecraft:clay_ball', 'c:clay') ? 'clay' :
            isFluid(ingredient, 'minecraft:water', 1000) ? 'water' : null,
            { sand: 4, gravel: 2, clay: 2, water: 1 });
        if (source) emit('waste/flux_bound_concrete', {
            type: 'create:mixing',
            ingredients: repeat({ tag: 'c:sands' }, 4).concat(
                repeat({ tag: 'c:gravels' }, 2),
                [item('minecraft:clay_ball'), fluid('minecraft:water', 750), fluid('thaumaturge:flux_goo', 250)]),
            results: [result('immersiveengineering:concrete', 8)],
            processing_time: 200
        });
    }
    console.info('[TNK Synergy] Added ' + added + ' guarded magic, fuel-batch and flux-disposal recipes.');
})();
    (() => {
        if (!Platform.isLoaded('create')) return;
        let lbPrefix = 'tnk:synergy/';
        let lbPlans = tnkServerTable("tnk_cross_mod_qol_lbPlans_268");
        let lbWanted = {};
        let lbSources = {};
        lbPlans.forEach(plan => { lbWanted[plan.source] = true; });
        function lbCopy(value) { return JSON.parse(JSON.stringify(value)); }
        function lbAvailable(input) {
            if (Array.isArray(input)) return input.length > 0 && input.every(lbAvailable);
            if (!input || typeof input !== 'object') return false;
            if (Object.keys(input).length !== 1) return false;
            if (input.item) return Item.exists(input.item) && !/(?:bucket|wirecutter|hammer|screwdriver)$|:(?:mold_|inscriber_.*press)/.test(input.item);
            if (input.tag) return Ingredient.of('#' + input.tag).itemIds.toArray().length > 0;
            return false;
        }
        function lbCapture(recipe) {
            let id = String(recipe.id);
            if (!lbWanted[id] || recipe.removed || recipe.creationError) return;
            try {
                recipe.serialize();
                lbSources[id] = JSON.parse(String(recipe.json));
            } catch (error) {
                console.warn('[TNK Synergy] Unreadable optical/tooling source ' + id + '; skipped.');
            }
        }
        Object.keys(lbWanted).forEach(id => event.forEachRecipe({ id: id }, lbCapture));
        event.addedRecipes.forEach(lbCapture);
        function lbIngredients(recipe) {
            if (recipe.type === 'minecraft:crafting_shapeless' || recipe.type === 'create:mixing') {
                if (!Array.isArray(recipe.ingredients)) return null;
                if (recipe.type === 'create:mixing' && recipe.heat_requirement && recipe.heat_requirement !== 'none') return null;
                let allowed = recipe.type === 'create:mixing'
                    ? ['type', 'ingredients', 'results', 'processing_time', 'heat_requirement', 'neoforge:conditions']
                    : ['type', 'category', 'group', 'ingredients', 'result', 'neoforge:conditions'];
                if (Object.keys(recipe).some(key => allowed.indexOf(key) === -1)) return null;
                return lbCopy(recipe.ingredients);
            }
            if (recipe.type === 'minecraft:crafting_shaped' || recipe.type === 'create:mechanical_crafting' || recipe.type === 'immersiveengineering:turn_and_copy') {
                if (!Array.isArray(recipe.pattern) || !recipe.key) return null;
                let allowed = ['type', 'category', 'group', 'pattern', 'key', 'result', 'accept_mirrored', 'quarter_turn', 'eighth_turn', 'show_notification', 'neoforge:conditions'];
                if (Object.keys(recipe).some(key => allowed.indexOf(key) === -1)) return null;
                let inputs = [];
                recipe.pattern.forEach(row => { String(row).split('').forEach(symbol => { if (symbol !== ' ') inputs.push(lbCopy(recipe.key [symbol])); }); });
                return inputs;
            }
            return null;
        }
        function lbOutput(recipe, expected) {
            if (recipe.result && recipe.result.id === expected) return lbCopy(recipe.result);
            if (recipe.results && recipe.results.length === 1 && recipe.results[0].id === expected &&
                (recipe.results[0].chance === undefined || recipe.results[0].chance === 1)) {
                let out = lbCopy(recipe.results[0]);
                delete out.chance;
                return out;
            }
            return null;
        }
        function lbCarryConditions(recipe, source) {
            if (source['neoforge:conditions']) recipe['neoforge:conditions'] = lbCopy(source['neoforge:conditions']);
            return recipe;
        }
        function lbPacked(id) { return { id: id, count: 1 }; }
        function lbPackedInput(id) { return { item: id }; }
        function lbPrepare(inputs, packed) {
            let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%&()*+,-./:;<=>?@[]^_';
            let width = Math.min(9, Math.ceil(Math.sqrt(inputs.length)));
            let pattern = [];
            let key = {};
            for (let index = 0; index < inputs.length; index++) key[symbols[index]] = lbCopy(inputs[index]);
            for (let row = 0; row < Math.ceil(inputs.length / width); row++) {
                let line = '';
                for (let col = 0; col < width; col++) {
                    let index = row * width + col;
                    line += index < inputs.length ? symbols[index] : ' ';
                }
                pattern.push(line);
            }
            return { type: 'create:mechanical_crafting', accept_mirrored: false, category: 'misc', pattern: pattern, key: key, result: packed };
        }
        let lbAdded = 0;
        let lbSkipped = 0;
        lbPlans.forEach(plan => {
            let source = lbSources[plan.source];
            if (!source || !Item.exists(plan.output) ||
                (plan.lens && (!Platform.isLoaded('alchemicallaser') || !Item.exists(plan.lens))) ||
                (plan.fixture && !Item.exists(plan.fixture))) { lbSkipped++; return; }
            let batchId = tnkQolBatchId(plan.name);
            if (!batchId) { lbSkipped++; return; }
            let inputs = lbIngredients(source);
            let output = lbOutput(source, plan.output);
            if (!inputs || !inputs.length || !inputs.every(lbAvailable) || !output) { lbSkipped++; return; }
            let originalCount = output.count || 1;
            if (!Number.isInteger(originalCount) || originalCount < 1) { lbSkipped++; return; }
            let runs = Math.floor(plan.target / originalCount);
            if (runs < 2 || inputs.length * runs > 81 || originalCount * runs > 64) { lbSkipped++; return; }
            let repeated = [];
            for (let run = 0; run < runs; run++) inputs.forEach(input => repeated.push(lbCopy(input)));
            output.count = originalCount * runs;
            let group = plan.fixture ? 'boss_tooling/' : 'optics/';
            let prep = lbCarryConditions(lbPrepare(repeated, lbPacked(batchId)), source);
            let finish;
            if (plan.fixture) {
                finish = { type: 'create:deploying', ingredients: [lbPackedInput(batchId), { item: plan.fixture }], results: [output], keep_held_item: true };
            } else {
                finish = {
                    type: 'alchemicallaser:laser_processing',
                    ingredient: lbPackedInput(batchId), input_count: 1,
                    lens: plan.lens, result: output,
                    duration: 100, minimum_rpm: 128,
                    consume: false, copy_components: false
                };
            }
            lbCarryConditions(finish, source);
            event.custom(prep).id(lbPrefix + group + plan.name + '/prepare');
            event.custom(finish).id(lbPrefix + group + plan.name + '/finish');
            lbAdded++;
        });
        console.info('[TNK Synergy] Optical/tooling batches: ' + lbAdded + ' routes; ' + lbSkipped + ' unavailable/changed source routes skipped.');
    })();
(() => {
    if (!Platform.isLoaded('create')) return;
    let prefix = 'tnk:synergy/';
    let recipes = [];
    let byId = {};
    let tagCache = {};
    let snapshotComplete = true;
    function copy(value) { return JSON.parse(JSON.stringify(value)); }
    function remember(recipe) {
        if (recipe.removed || recipe.creationError) return;
        try {
            let id = String(recipe.id);
            if (id.indexOf(prefix) === 0) return;
            recipe.serialize();
            let text = String(recipe.json.toString());
            let json = JSON.parse(text);
            let entry = { id: id, json: json, text: text };
            if (byId[id]) {
                let previous = recipes.indexOf(byId[id]);
                if (previous >= 0) recipes.splice(previous, 1);
            }
            byId[id] = entry;
            recipes.push(entry);
        } catch (error) {
            snapshotComplete = false;
        }
    }
    event.forEachRecipe({}, remember);
    event.addedRecipes.forEach(remember);
    function alternatives(value) {
        if (Array.isArray(value)) {
            let all = [];
            for (let i = 0; i < value.length; i++) {
                let next = alternatives(value[i]);
                if (next === null) return null;
                all = all.concat(next);
            }
            return all;
        }
        if (typeof value === 'string') {
            if (value.charAt(0) === '#') return alternatives({ tag: value.substring(1) });
            return Item.exists(value) ? [value] : [];
        }
        if (!value || typeof value !== 'object') return null;
        if (value.item) return alternatives(String(value.item));
        if (value.tag) {
            let tag = String(value.tag);
            if (!Object.prototype.hasOwnProperty.call(tagCache, tag)) {
                try {
                    tagCache[tag] = Ingredient.of('#' + tag).itemIds.toArray().map(id => String(id));
                } catch (error) { tagCache[tag] = null; }
            }
            return tagCache[tag];
        }
        if (value.type === 'neoforge:components' && Array.isArray(value.items)) {
            return value.items.filter(id => Item.exists(String(id))).map(id => String(id));
        }
        if (value.fluid || value.fluid_tag || value.fluids) return ['$external_fluid'];
        return null;
    }
    function inputSlots(json) {
        let type = String(json.type || '');
        if (type === 'minecraft:crafting_shaped' || type === 'create:mechanical_crafting') {
            if (!Array.isArray(json.pattern) || !json.key) return null;
            let slots = [];
            json.pattern.forEach(row => { String(row).split('').forEach(symbol => { if (symbol !== ' ') slots.push(json.key [symbol]); }); });
            return slots.length ? slots : null;
        }
        if (type === 'minecraft:crafting_shapeless') return json.ingredients || null;
        if (['minecraft:stonecutting', 'minecraft:smelting', 'minecraft:blasting', 'minecraft:smoking', 'minecraft:campfire_cooking'].indexOf(type) >= 0) {
            return json.ingredient ? [json.ingredient] : null;
        }
        if (['create:milling', 'create:crushing', 'create:cutting', 'create:splashing',
             'create:haunting', 'create:pressing', 'create:compacting', 'create:mixing',
             'create:deploying', 'create:filling', 'create:emptying',
             'create:sandpaper_polishing'].indexOf(type) >= 0) {
            return Array.isArray(json.ingredients) ? json.ingredients : null;
        }
        if (type === 'immersiveengineering:mineral_mix') return [];
        return null;
    }
    function outputs(json) {
        let result = [];
        function read(value) {
            if (!value) return;
            if (Array.isArray(value)) { value.forEach(read); return; }
            if (typeof value === 'string') {
                if (Item.exists(value)) result.push(value);
                return;
            }
            if (typeof value !== 'object' || value.chance === 0 || value.count === 0) return;
            if (value.item && typeof value.item === 'object') {
                read(value.item);
            } else if (value.id || value.item) {
                let id = String(value.id || value.item);
                if (Item.exists(id)) result.push(id);
            } else if (value.tag) {
                let ids = alternatives({ tag: value.tag });
                if (ids) ids.forEach(id => result.push(id));
            }
            ['result', 'results', 'output', 'outputs', 'ores', 'spoils', 'stack', 'stacks'].forEach(key => { if (value [key]) read(value [key]); });
        }
        ['result', 'results', 'output', 'outputs', 'ores', 'spoils', 'stack', 'stacks'].forEach(key => read(json[key]));
        return result;
    }
    let batches = tnkServerTable("tnk_cross_mod_qol_batches_557");
    ['oak', 'spruce', 'birch', 'jungle', 'acacia', 'dark_oak', 'mangrove', 'cherry', 'bamboo', 'crimson', 'warped'].forEach(wood => {
        batches.push(['minecraft:' + wood + '_trapdoor', 'minecraft:' + wood + '_trapdoor', 8]);
    });
    function shipyardAvailable(slot) {
        if (Array.isArray(slot)) return slot.length > 0 && slot.every(shipyardAvailable);
        if (!slot || typeof slot !== 'object') return false;
        let keys = Object.keys(slot);
        if (keys.length !== 1) return false;
        if (keys[0] === 'item') {
            return Item.exists(slot.item) && ! /(?:hammer|wirecutter|mold|bucket|shears|sand_?paper)/.test(slot.item);
        }
        if (keys[0] === 'tag') {
            if (/(?:^|\/)(?:tools|hammers|wirecutters|molds|buckets)(?:\/|$)/.test(slot.tag)) return false;
            let ids = alternatives(slot);
            return ids && ids.length > 0;
        }
        return false;
    }
    let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%&()*+,-./:;<=>?@[]^_';
    let shipyardAdded = 0;
    batches.forEach(row => {
        let source = byId[row[0]];
        if (!source || !Item.exists(row[1])) return;
        if (['minecraft:crafting_shaped', 'minecraft:crafting_shapeless'].indexOf(source.json.type) < 0) return;
        let safeFields = ['type', 'category', 'group', 'pattern', 'key', 'ingredients', 'result', 'show_notification', 'neoforge:conditions'];
        if (Object.keys(source.json).some(field => safeFields.indexOf(field) < 0)) return;
        let result = source.json.result;
        if (!result || typeof result !== 'object' || String(result.id || result.item) !== row[1]) return;
        let slots = inputSlots(source.json);
        let count = result.count === undefined ? 1 : Number(result.count);
        if (!slots || !Number.isInteger(count) || count < 1) return;
        if (!slots.every(shipyardAvailable)) return;
        let maxStack = Math.min(64, Number(Item.of(row[1]).getMaxStackSize()));
        if (!Number.isInteger(maxStack) || maxStack < 1) return;
        let multiplier = Math.min(row[2], Math.floor(maxStack / count), Math.floor(81 / slots.length));
        if (multiplier < 2) return;
        let inputs = [];
        for (let batch = 0; batch < multiplier; batch++) inputs = inputs.concat(slots.map(copy));
        let width = Math.min(9, Math.ceil(Math.sqrt(inputs.length)));
        let pattern = [];
        let key = {};
        for (let start = 0; start < inputs.length; start += width) {
            let line = '';
            for (let col = 0; col < width; col++) {
                let index = start + col;
                if (index < inputs.length) { line += symbols.charAt(index); key[symbols.charAt(index)] = inputs[index]; }
                else line += ' ';
            }
            pattern.push(line);
        }
        let out = { id: row[1], count: count * multiplier };
        if (result.components) out.components = copy(result.components);
        let batchRecipe = { type: 'create:mechanical_crafting', category: 'misc', pattern: pattern, key: key, result: out, accept_mirrored: false };
        if (source.json['neoforge:conditions']) batchRecipe['neoforge:conditions'] = copy(source.json['neoforge:conditions']);
        event.custom(batchRecipe).id(prefix + 'shipyard/' + row [1].split(':') [1]);
        shipyardAdded++;
    });
    let palettes = tnkServerTable("tnk_cross_mod_qol_palettes_659");
    let paletteAdded = 0;
    let skipped = [];
    palettes.forEach(palette => {
        if (!Item.exists(palette.output) || !Item.exists(palette.input)) return;
        if (!snapshotComplete) { skipped.push(palette.output + ' (incomplete recipe snapshot)'); return; }
        let namespace = palette.output.split(':')[0] + ':';
        let family = {};
        palette.family.forEach(id => { family[namespace + id] = true; });
        let rules = [];
        let uncertain = false;
        recipes.forEach(recipe => {
            let slots = inputSlots(recipe.json);
            let produced = outputs(recipe.json).filter(id => family[id]);
            if (slots === null) {
                if (produced.length || Object.keys(family).some(id => recipe.text.indexOf('"' + id + '"') >= 0)) uncertain = true;
                return;
            }
            if (!produced.length) return;
            let groups = slots.map(alternatives);
            if (groups.some(group => group === null)) { uncertain = true; return; }
            rules.push({ outputs: produced, inputs: groups });
        });
        if (uncertain) { skipped.push(palette.output + ' (unrecognised existing production recipe)'); return; }
        let available = {};
        let changed = true;
        while (changed) {
            changed = false;
            rules.forEach(rule => {
                if (!rule.inputs.every(group => group.some(id => !family[id] || available[id]))) return;
                rule.outputs.forEach(id => { if (! available [id]) { available [id] = true; changed = true; } });
            });
        }
        if (available[palette.output]) { skipped.push(palette.output + ' (existing production route)'); return; }
        event.custom({ type: 'create:deploying', ingredients: [{ item: palette.input }, { item: palette.output }], results: [{ id: palette.output, count: 1 }], keep_held_item: true })
            .id(prefix + 'building_palette/' + palette.output.replace(':', '/'));
        paletteAdded++;
    });
    console.info('[TNK Synergy] Shipyard batches: ' + shipyardAdded + '; missing masonry routes: ' + paletteAdded + '.');
    if (skipped.length) console.info('[TNK Synergy] Existing/uncertain masonry recipes retained: ' + skipped.join('; '));
})();
    (() => {
        if (!Platform.isLoaded('create')) return;
        let qPrefix = 'tnk:synergy/qol/';
        let qRecipes = [];
        let qSeen = new Set();
        let qTypes = ['create:milling', 'create:crushing', 'create:mixing', 'minecraft:crafting_shapeless', 'minecraft:crafting_shaped'];
        let qAdded = 0;
        let qSkipped = 0;
        let qUnreadable = 0;
        function qRead(recipe) {
            if (recipe.removed || recipe.creationError) return;
            let id = String(recipe.id);
            if (qSeen.has(id)) return;
            try {
                recipe.serialize();
                let value = JSON.parse(recipe.json.toString());
                if (qTypes.indexOf(value.type) !== -1) {
                    qSeen.add(id);
                    qRecipes.push({ id: id, value: value });
                }
            } catch (error) {
                qUnreadable++;
            }
        }
        qTypes.forEach(type => event.forEachRecipe({ type: type }, qRead));
        let qPending = [];
        event.addedRecipes.forEach(recipe => qPending.push(recipe));
        qPending.forEach(qRead);
        function qItem(id) { return { item: id }; }
        function qPortions(entries) {
            let ingredients = [];
            entries.forEach(entry => { for (let i = 0; i < entry [1]; i ++) ingredients.push(qItem(entry [0])); });
            return ingredients;
        }
        function qOutput(recipe, output) {
            let results = recipe.results || (recipe.result ? [recipe.result] : []);
            return results.some(result => (typeof result === 'string' ? result : result.id || result.item) === output);
        }
        function qHasItem(value, id) {
            if (!value || typeof value !== 'object') return false;
            if (Array.isArray(value)) return value.some(child => qHasItem(child, id));
            if (value.item === id) return true;
            if (typeof value.tag === 'string') {
                try { return Ingredient.of('#' + value.tag).test(Item.of(id)); }
                catch (error) { return false; }
            }
            return Array.isArray(value.ingredients) && qHasItem(value.ingredients, id);
        }
        function qExisting(types, output, requiredItems) {
            return qRecipes.some(record => types.indexOf(record.value.type) !== -1 &&
                qOutput(record.value, output) && requiredItems.every(id =>
                    qHasItem(record.value.ingredients || record.value.ingredient, id)));
        }
        function qReady(ids) { return ids.every(id => Item.exists(id)); }
        function qMix(name, output, count, entries, water, time) {
            let inputs = entries.map(entry => entry[0]);
            if (!qReady([output].concat(inputs)) || qExisting(['create:mixing'], output, inputs)) {
                qSkipped++;
                return;
            }
            let ingredients = qPortions(entries);
            if (water) ingredients.push({ type: 'neoforge:single', fluid: 'minecraft:water', amount: water });
            let json = { type: 'create:mixing', ingredients: ingredients, results: [{ id: output, count: count }], processing_time: time || 160 };
            event.custom(json).id(qPrefix + name);
            qRecipes.push({ id: qPrefix + name, value: json });
            qAdded++;
        }
        let qColors = ['white', 'orange', 'magenta', 'light_blue', 'yellow', 'lime', 'pink', 'gray', 'light_gray', 'cyan', 'purple', 'blue', 'brown', 'green', 'red', 'black'];
        qColors.forEach(color => {
            if (color !== 'white') {
                qMix('repaint/clean_' + color + '_wool', 'minecraft:white_wool', 8, [['minecraft:' + color + '_wool', 8], ['minecraft:bone_meal', 1]], 500, 200);
            }
            qMix('repaint/clean_' + color + '_terracotta', 'minecraft:terracotta', 8, [['minecraft:' + color + '_terracotta', 8], ['minecraft:bone_meal', 1]], 500, 200);
            qMix('repaint/clean_' + color + '_glass', 'minecraft:glass', 8, [['minecraft:' + color + '_stained_glass', 8], ['minecraft:bone_meal', 1]], 500, 200);
            qMix('repaint/dye_' + color + '_terracotta', 'minecraft:' + color + '_terracotta', 8, [['minecraft:terracotta', 8], ['minecraft:' + color + '_dye', 1]], 0, 100);
            qMix('repaint/dye_' + color + '_glass', 'minecraft:' + color + '_stained_glass', 8, [['minecraft:glass', 8], ['minecraft:' + color + '_dye', 1]], 0, 100);
        });
        qMix('ordinary_ink', 'minecraft:ink_sac', 2, [['minecraft:charcoal', 2], ['minecraft:slime_ball', 1]], 500, 200);
        let qDyes = tnkServerTable("tnk_cross_mod_qol_qDyes_829");
        qDyes.forEach(row => {
            let native = qRecipes.find(record => {
                let recipe = record.value;
                let result = recipe.result;
                return recipe.type === 'minecraft:crafting_shapeless' &&
                    Array.isArray(recipe.ingredients) && recipe.ingredients.length === 1 &&
                    recipe.ingredients[0].item === row[0] && result && result.id === row[1] &&
                    (result.count === undefined ? 1 : result.count) === row[2];
            });
            if (!native || !qReady([row[0], row[1]]) ||
                qExisting(['create:milling', 'create:crushing'], row[1], [row[0]])) {
                qSkipped++;
                return;
            }
            let json = { type: 'create:milling', ingredients: [qItem(row [0])], results: [{ id: row [1], count: row [2] }], processing_time: 100 };
            let id = qPrefix + 'dyes/' + row[0].replace(':', '/');
            event.custom(json).id(id);
            qRecipes.push({ id: id, value: json });
            qAdded++;
        });
        [['croptopia:orange_dye', 'croptopia:turmeric', 'c:turmeric', 'minecraft:orange_dye'], ['croptopia:purple_dye', 'croptopia:grape', 'c:grapes', 'minecraft:purple_dye']].forEach(row => {
            let native = qRecipes.find(record => {
                let recipe = record.value;
                return record.id === row[0] && recipe.type === 'minecraft:crafting_shapeless' &&
                    recipe.ingredients.length === 3 && recipe.ingredients.every(ingredient => ingredient.tag === row[2]) &&
                    recipe.result.id === row[3] && recipe.result.count === 2;
            });
            if (!native) { qSkipped++; return; }
            qMix('dyes/' + row[1].replace(':', '/'), row[3], 2, [[row[1], 3]], 0, 100);
        });
        if (qUnreadable) console.warn('[TNK Synergy QoL] Left ' + qUnreadable + ' unreadable foreign recipe snapshots unchanged.');
        console.info('[TNK Synergy QoL] ' + qAdded + ' recipes added; ' + qSkipped + ' unavailable/existing routes skipped.');
    })();
});

// tnk prepared batch migration: source line 5
ServerEvents.recipes(event => {
    let batches = global.TNK_BATCH_ITEMS;
    if (!batches || !Platform.isLoaded('create')) return;
    batches.entries.forEach(entry => {
        if (!Item.exists(entry.id)) return;
        let component = entry.group === 'ie' ? 'tnk_ie_batch' : 'tnk_synergy_batch';
        let marker = {};
        marker[component] = entry.marker;
        event.custom({
            type: 'minecraft:crafting_shapeless',
            ingredients: [{ type: 'neoforge:components', items: ['create:incomplete_precision_mechanism'], strict: false, components: { 'minecraft:custom_data': marker } }],
            result: { id: entry.id, count: 1 }
        }).id(batches.legacyRecipeId(entry));
    });
});
