// priority: 2000
// TNK3 | progression early

// TNK_RECIPES.chapter01: source line 54
TNK_RECIPES.chapter01 = event => {
    const ITEMS = { alloy: 'create:andesite_alloy', mechanism: 'kubejs:makeshift_kinetic_mechanism', casing: 'create:andesite_casing', machine: 'kubejs:tk3_rotation_machine' };
    const recipeId = (method, name) => 'tnk:chapter_01/' + method + '/' + name;
    removeManualBypasses();
    addManualAndesiteAlloy();
    addMakeshiftMechanism();
    addStarterAndesiteMachine();
    function removeManualBypasses() {
        ['minecraft:crafting_shaped', 'minecraft:crafting_shapeless'].forEach(type => { event.remove({ type: type, output: ITEMS.alloy }); });
        event.remove({ output: ITEMS.mechanism });
    }
    function addManualAndesiteAlloy() {
        event.shaped(ITEMS.alloy, ['AC', 'CA'], { A: 'minecraft:andesite', C: 'minecraft:clay_ball' }).id(recipeId('crafting', 'andesite_alloy_from_andesite_and_clay'));
    }
    function addMakeshiftMechanism() {
        event
            .shaped(ITEMS.mechanism, ['ASA', 'SIS', 'ASA'], { A: ITEMS.alloy, S: '#minecraft:wooden_slabs', I: '#c:ingots/iron' })
            .modifyResult('tnk:makeshift_manual_only')
            .id(recipeId('crafting', 'makeshift_mechanism_manual_only'));
    }
    function addStarterAndesiteMachine() {
        event.shaped(ITEMS.machine, ['MMM', 'MCM', 'MMM'], { M: ITEMS.mechanism, C: ITEMS.casing }).id(recipeId('crafting', 'andesite_machine_from_makeshift_mechanisms_manual_only'));
    }
};

// TNK_RECIPES.chapter02: source line 148
TNK_RECIPES.chapter02 = event => {
    let recipeId = (method, name) => 'tnk:chapter_02/' + method + '/' + name;
    let mechanism = 'kubejs:rotation_mechanism';
    let incomplete = 'kubejs:incomplete_rotation_mechanism';
    let machine = 'kubejs:tk3_rotation_machine';
    let hammer = 'createdieselgenerators:hammer';
    function read(recipe) {
        return JSON.parse(recipe.json.toString());
    }
    function normalized(results) {
        return results.map(value =>({ id: value.id, count: value.count === undefined ? 1: value.count, chance: value.chance === undefined ? 1: value.chance }));
    }
    function sameResults(a, b) {
        return JSON.stringify(normalized(a || [])) === JSON.stringify(normalized(b));
    }
    function processing(type, input, results, name) {
        let matches = [];
        event.forEachRecipe({ type: type, input: input }, recipe => { matches.push({ id: String(recipe.id), json: read(recipe) }); });
        if (matches.length === 1 && sameResults(matches[0].json.results, results)) return;
        matches.forEach(entry => event.remove({ id: entry.id }));
        let json = { type: type, ingredients: [{ item: input }], results: results };
        if (type === 'create:milling' || type === 'create:crushing') json.processing_time = 250;
        event.custom(json).id(recipeId(type.slice(7), name));
    }
    processing('create:milling', 'minecraft:cobblestone', [{ id: 'minecraft:gravel' }], 'gravel_from_cobblestone');
    processing('create:milling', 'minecraft:gravel', [{ id: 'minecraft:sand' }], 'sand_from_gravel');
    processing(
        'create:splashing',
        'minecraft:sand',
        [{ id: 'minecraft:clay_ball', chance: 0.33 }, { id: 'minecraft:clay_ball', chance: 0.33 }, { id: 'minecraft:clay_ball', chance: 0.33 }],
        'clay_from_sand'
    );
    event.remove({ type: 'create:mixing', output: 'create:andesite_alloy' });
    event
        .custom({ type: 'create:mixing', ingredients: [{ item: 'minecraft:andesite' }, { item: 'minecraft:clay_ball' }], results: [{ id: 'create:andesite_alloy' }] })
        .id(recipeId('mixing', 'andesite_alloy_from_andesite_and_clay'));
    event.remove({ output: mechanism });
    event
        .custom({
            type: 'create:sequenced_assembly',
            ingredient: { tag: 'minecraft:wooden_slabs' },
            transitional_item: { id: incomplete },
            sequence: [
                { type: 'create:deploying', ingredients: [{ item: incomplete }, { item: 'create:andesite_alloy' }], results: [{ id: incomplete }] },
                { type: 'create:deploying', ingredients: [{ item: incomplete }, { item: 'create:andesite_alloy' }], results: [{ id: incomplete }] },
                { type: 'create:deploying', ingredients: [{ item: incomplete }, { item: hammer }], results: [{ id: incomplete }] }
            ],
            results: [{ id: mechanism }],
            loops: 1
        })
        .id(recipeId('sequenced_assembly', 'rotation_mechanism'));
    event.remove({ output: machine });
    event.shaped(machine, ['MMM', 'MCM', 'MMM'], { M: mechanism, C: 'create:andesite_casing' }).id(recipeId('crafting', 'andesite_machine_from_rotation_mechanisms'));
    addChapterMachines(event, 1);
};

// progression: source line 1491
ServerEvents.recipes(event => {
    TNK_RECIPES.prepareCompatibility(event);
    TNK_RECIPES.prepareMachines(event);
    TNK_RECIPES.chapter01(event);
    TNK_RECIPES.chapter02(event);
    TNK_RECIPES.chapter03(event);
    TNK_RECIPES.chapter04(event);
    TNK_RECIPES.bossCatalysts(event);
    TNK_RECIPES.immersiveManufacturing(event);
    TNK_RECIPES.ae2Manufacturing(event);
    TNK_RECIPES.excavatorDeposits(event);
    TNK_RECIPES.chapter05(event);
    TNK_RECIPES.chapter06(event);
    TNK_RECIPES.chapter07(event);
    TNK_RECIPES.chapter08(event);
    TNK_RECIPES.chapter09(event);
    TNK_RECIPES.angelRing(event);
    TNK_RECIPES.infinityCells(event);
    TNK_RECIPES.chapter10(event);
    TNK_RECIPES.compatibility(event);
    TNK_RECIPES.rubberLogistics(event);
    TNK_RECIPES.laserUtilities(event);
    TNK_RECIPES.createAddition(event);
    TNK_RECIPES.electricalMachines(event);
    TNK_RECIPES.buildingMaterials(event);
    TNK_RECIPES.scrollAutomation(event);
    TNK_RECIPES.endgameEquipment(event);
    TNK_RECIPES.oreCooking(event);
    TNK_RECIPES.restrictedItems(event);
    TNK_RECIPES.restrictedPotions(event);
    TNK_RECIPES.processingPolicy(event);
    TNK_RECIPES.nuclearFurnace(event);
    TNK_RECIPES.finishMaterials(event);
});

// compat automation: source line 5
(() => {
    let CONFIG = tnkServerTable("compat_automation_CONFIG_8");
    let DISABLED_STRUCTURES = global.TNK_CONTENT.ieDisabledStructures;
    let GEAR_COMPONENTS = ['immersiveengineering:component_iron', 'immersiveengineering:component_steel'];
    let CONVEYORS = global.TNK_CONTENT.ieConveyors;
    let DISABLED_BLOCKS = ['immersiveengineering:fluid_pump', 'immersiveengineering:fluid_pipe'].concat(CONVEYORS);
    let DISABLED_ITEMS = DISABLED_BLOCKS.concat(DISABLED_STRUCTURES.map(name => 'immersiveengineering:' + name), ['immersiveengineering:mold_wire']);
    let CONSTRUCTION_INPUTS = { 'immersiveengineering:fluid_pump': 'create:mechanical_pump', 'immersiveengineering:fluid_pipe': 'create:fluid_pipe' };
    CONVEYORS.forEach(id => (CONSTRUCTION_INPUTS[id] = 'create:belt_connector'));
    let FLUID_ALIASES = tnkServerTable("compat_automation_FLUID_ALIASES_40");
    let BUCKET_ALIASES = tnkServerTable("compat_automation_BUCKET_ALIASES_47");
    let materialAliases = TNK_UNIFY.aliases;
    let preferredByTag = TNK_UNIFY.preferredByTag;
    let rodItems = TNK_UNIFY.rodItems;
    let seedInputs = {};
    function choosePreferred(ids) {
        return TNK_UNIFY.choosePreferred(ids);
    }
    TNK_TAGS.fluids = event => TNK_UNIFY.deferTags(event, loaded => {
        let aliases = Object.assign({}, FLUID_ALIASES);
        Object.keys(FLUID_ALIASES).forEach(old => {
            let target = FLUID_ALIASES[old];
            let oldFlow = old.startsWith('immersiveengineering:') ? old + '_flowing' : old.replace(':', ':flowing_');
            aliases[oldFlow] = target.replace(':', ':flowing_');
        });
        TNK_UNIFY.retargetTags(loaded, aliases);
        ['ethanol', 'plantoil', 'biodiesel'].forEach(name => {
            let id = name === 'plantoil' ? 'plant_oil' : name;
            loaded.add('c:' + name, ['createdieselgenerators:' + id, 'createdieselgenerators:flowing_' + id]);
        });
    });
    function clone(value) {
        return JSON.parse(JSON.stringify(value));
    }
    function itemId(id) {
        return materialAliases[id] || BUCKET_ALIASES[id] || id;
    }
    function recipeId(method, source) {
        return 'tnk:ie_compat/' + method + '/' + source.replace(':', '/');
    }
    function normalize(value, inputContext) {
        if (!value || typeof value !== 'object') return false;
        let changed = false;
        if (Array.isArray(value)) {
            value.forEach(child => { if (normalize(child, inputContext)) changed = true; });
            return changed;
        }
        Object.keys(value).forEach(key => {
            if (key === 'components' || key === 'neoforge:conditions') return;
            let child = value[key];
            if (typeof child === 'string' && ['item', 'id', 'fluid', 'fluids'].indexOf(key) !== -1) {
                let replacement = FLUID_ALIASES[child] || itemId(child);
                if (inputContext && CONSTRUCTION_INPUTS[child]) replacement = CONSTRUCTION_INPUTS[child];
                if (replacement !== child) {
                    value[key] = replacement;
                    changed = true;
                }
            } else {
                let input = inputContext || ['ingredients', 'ingredient', 'input', 'inputs', 'input0', 'input1', 'key', 'catalyst'].indexOf(key) !== - 1;
                if (normalize(child, input)) changed = true;
            }
        });
        return changed;
    }
    function ingredientList(sized) {
        if (!sized) return [];
        let base = clone(sized.basePredicate || sized);
        delete base.count;
        let count = sized.count || 1;
        let result = [];
        for (let i = 0; i < count; i++) result.push(clone(base));
        return result;
    }
    function resultStack(output) {
        let base = output.basePredicate || output;
        let id = base.id || base.item;
        if (!id && base.tag) {
            id = preferredByTag[base.tag];
            if (!id) {
                let ids = [];
                Ingredient.of('#' + base.tag).itemIds.forEach(value => ids.push(String(value)));
                id = choosePreferred(ids, base.tag);
            }
        }
        if (!id || !Item.exists(itemId(id))) throw new Error('Missing item output: ' + JSON.stringify(output));
        let result = { id: itemId(id), count: output.count || base.count || 1 };
        if (base.components) result.components = clone(base.components);
        return result;
    }
    function fluidInput(fluid) {
        if (fluid.tag) return { type: 'neoforge:tag', tag: fluid.tag, amount: fluid.amount };
        let id = fluid.id || fluid.fluid || fluid.fluids;
        let result = { type: 'neoforge:single', fluid: id === 'immersiveengineering:potion' ? 'create:potion': FLUID_ALIASES [id] || id, amount: fluid.amount };
        if (fluid.components) {
            result.type = 'neoforge:components';
            result.fluids = [result.fluid];
            delete result.fluid;
            result.components = clone(fluid.components);
        }
        return result;
    }
    function fluidOutput(fluid) {
        return { id: FLUID_ALIASES[fluid.id] || fluid.id, amount: fluid.amount };
    }
    function preparedStack(source, stage) {
        let batches = global.TNK_BATCH_ITEMS;
        let id = batches && batches.id('ie', source + '/' + stage);
        if (!id || !Item.exists(id)) {
            throw new Error('[TNK IE Batch] Unregistered batch: ' + source + '/' + stage);
        }
        return { id: id, count: 1 };
    }
    function preparedInput(stack) {
        return { item: stack.id };
    }
    function hasDisabledOutput(json) {
        if (json.baseRecipe) return hasDisabledOutput(json.baseRecipe);
        let results = json.results || (json.result ? [json.result] : []);
        return results.some(result => DISABLED_ITEMS.indexOf(result.id || result.item) !== -1);
    }
    TNK_RECIPES.immersiveManufacturing = event => {
        if (!TNK_UNIFY.ready) throw new Error('[TNK IE] Loaded material tags are unavailable.');
        tnkServerTable("compat_automation_table_202").forEach(id => event.remove({ id: id }));
        let sources = [];
        let pending = [];
        let signatures = {};
        let mechanicalGroups = {};
        let removals = {};
        let migrationCounts = {};
        let aliasPattern = new RegExp(
            Object.keys(materialAliases)
                .concat(Object.keys(BUCKET_ALIASES), Object.keys(FLUID_ALIASES), Object.keys(CONSTRUCTION_INPUTS))
                .map(value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
                .join('|')
        );
        event.forEachRecipe({}, recipe => {
            let text = String(recipe.json.toString());
            let json = JSON.parse(text);
            let changed = aliasPattern.test(text) && normalize(json, false);
            sources.push({ recipe: recipe, id: String(recipe.getId()), json: json, changed: changed });
        });
        sources.sort((a, b) => a.id.localeCompare(b.id));
        function add(method, source, json) {
            delete json['neoforge:conditions'];
            let signature = JSON.stringify(json);
            if (signatures[signature]) return;
            signatures[signature] = true;
            pending.push({ id: recipeId(method, source), json: json });
        }
        function processing(type, source, inputs, outputs, extra) {
            let json = { type: type, ingredients: inputs, results: outputs };
            if (['create:cutting', 'create:mixing', 'create:compacting'].indexOf(type) !== -1) {
                json.processing_time = CONFIG.processingTime;
            }
            Object.assign(json, extra || {});
            add(type.split(':')[1], source, json);
        }
        function deploy(source, input, mold, outputs) {
            processing('create:deploying', source, [input, { item: mold }], outputs, { keep_held_item: true });
        }
        function prepare(source, inputs) {
            if (inputs.length === 1) return inputs[0];
            if (!inputs.length || inputs.length > 64) throw new Error('Invalid batch size: ' + source);
            let stack = preparedStack(source, 'dry');
            processing('create:compacting', source + '/prepare', inputs, [stack]);
            return preparedInput(stack);
        }
        function mechanical(source, inputs, output) {
            if (!inputs.length || inputs.length > 81) throw new Error('Invalid crafter size: ' + source);
            let signature = JSON.stringify(inputs.map(input => JSON.stringify(input)).sort()) + '/' + output.count;
            if (!mechanicalGroups[signature]) mechanicalGroups[signature] = [];
            mechanicalGroups[signature].push({ source: source, inputs: inputs, output: output });
        }
        function flushMechanical() {
            Object.keys(mechanicalGroups).forEach(signature => {
                let group = mechanicalGroups[signature];
                let base =
                    group.find(entry => entry.output.id === 'immersiveengineering:mold_plate') ||
                    group.find(entry => entry.output.id === 'immersiveengineering:warning_sign_attention') ||
                    group[0];
                let width = base.inputs.length <= 3 ? base.inputs.length: Math.min(9, Math.ceil(Math.sqrt(base.inputs.length)));
                let height = Math.ceil(base.inputs.length / width);
                let symbols = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!$%&()*+,-./:;<=>?@[]^_';
                let key = {};
                let pattern = [];
                for (let row = 0; row < height; row++) {
                    let line = '';
                    for (let col = 0; col < width; col++) {
                        let index = row * width + col;
                        if (index < base.inputs.length) {
                            line += symbols[index];
                            key[symbols[index]] = base.inputs[index];
                        } else line += ' ';
                    }
                    pattern.push(line);
                }
                add('mechanical_crafting', base.source, { type: 'create:mechanical_crafting', pattern: pattern, key: key, result: base.output, accept_mirrored: false });
                group.forEach(entry => {
                    if (entry === base) return;
                    processing('create:cutting', entry.source + '/shape', [{ item: base.output.id }], [Object.assign({ }, entry.output, { count: 1 })]);
                });
            });
        }
        function convertMetalPress(source) {
            let json = source.json;
            let inputs = ingredientList(json.input);
            let output = resultStack(json.result);
            if (json.mold === 'immersiveengineering:mold_plate') {
                processing(inputs.length === 1 ? 'create:pressing' : 'create:compacting', source.id, inputs, [output]);
            } else if (json.mold === 'immersiveengineering:mold_wire') {
                let tag = (json.input.basePredicate || json.input).tag;
                let plateTag = tag && tag.replace('c:ingots/', 'c:plates/');
                let plateAvailable = plateTag && !Ingredient.of('#' + plateTag).isEmpty();
                let input = plateAvailable && inputs.length === 1 ? { tag: plateTag } : prepare(source.id, inputs);
                processing('createaddition:rolling', source.id, [input], [output]);
            } else if (
                json.mold === 'immersiveengineering:mold_packing_4' ||
                json.mold === 'immersiveengineering:mold_packing_9'
            ) {
                processing('create:compacting', source.id, inputs, [output]);
            } else {
                deploy(source.id, prepare(source.id, inputs), json.mold, [output]);
            }
        }
        function convertBlueprint(source) {
            let json = source.json;
            let inputs = json.inputs.reduce((all, input) => all.concat(ingredientList(input)), []);
            let output = resultStack(json.result);
            if (DISABLED_ITEMS.indexOf(output.id) !== -1) {
                removals[source.id] = true;
                return;
            }
            if (json.category === 'bullet' || json.category === 'specialBullet') {
                deploy(source.id, prepare(source.id, inputs), 'immersiveengineering:mold_bullet_casing', [output]);
            } else if (GEAR_COMPONENTS.indexOf(output.id) !== -1) {
                mechanical(source.id, inputs, output);
            } else {
                mechanical(source.id, inputs, output);
            }
        }
        function convertBottling(source) {
            let json = source.json;
            let inputs = (json.inputs || [json.input]).reduce((all, input) => all.concat(ingredientList(input)), []);
            let molds = inputs.filter(input => input.item && input.item.startsWith('immersiveengineering:mold_'));
            let solids = inputs.filter(input => molds.indexOf(input) === -1);
            let moldIds = molds.map(input => input.item);
            let outputs = json.results.map(resultStack).filter(stack => moldIds.indexOf(stack.id) === -1);
            if (molds.length === 1 && outputs.length === 1 && json.fluid.amount <= 4000) {
                if (solids.length === 1 && json.fluid.amount <= 1000) {
                    processing('create:filling', source.id, solids.concat([fluidInput(json.fluid)]), outputs);
                    return;
                }
                let output = clone(outputs[0]);
                let fluid = clone(json.fluid);
                if (!solids.length && output.count > 1 && fluid.amount % output.count === 0) {
                    fluid.amount = fluid.amount / output.count;
                    output.count = 1;
                }
                if (fluid.amount <= 2000) {
                    processing('create:compacting', source.id, solids.concat([fluidInput(fluid)]), [output]);
                    return;
                }
            }
            if (!molds.length && solids.length === 1 && outputs.length === 1 && json.fluid.amount <= 1000) {
                processing('create:filling', source.id, solids.concat([fluidInput(json.fluid)]), outputs);
                return;
            }
            if (molds.length !== 1 || outputs.length !== 1) throw new Error('Unsupported bottling form: ' + source.id);
            let base = solids.length ? prepare(source.id, solids) : null;
            let remaining = json.fluid.amount;
            let stage = 0;
            while (remaining > 0) {
                let amount = Math.min(1000, remaining);
                let wet = preparedStack(source.id, 'wet_' + ++stage);
                let fluid = fluidInput(Object.assign({}, json.fluid, { amount: amount }));
                processing(base ? 'create:filling': 'create:compacting', source.id + '/wet_' + stage, base ? [base, fluid]: [fluid], [wet]);
                base = preparedInput(wet);
                remaining -= amount;
            }
            deploy(source.id, base, moldIds[0], outputs);
        }
        function convertSawmill(source) {
            let json = source.json;
            let outputs = [resultStack(json.stripped || json.result)];
            let secondary = json.stripped ? json.strippingSecondaries:(json.strippingSecondaries || []).concat(json.secondaryOutputs || []);
            (secondary || []).forEach(stack => outputs.push(resultStack(stack)));
            processing('create:cutting', source.id, [json.input], outputs);
        }
        function convertAlloy(source) {
            let json = source.json;
            processing('create:mixing', source.id, ingredientList(json.input0).concat(ingredientList(json.input1)), [resultStack(json.result)], { heat_requirement: 'heated' });
        }
        function convertMixer(source) {
            let json = source.json;
            let inputs = json.inputs.reduce((all, input) => all.concat(ingredientList(input)), []).concat([fluidInput(json.fluid)]);
            processing('create:mixing', source.id, inputs, [fluidOutput(json.result)]);
        }
        function convertFermenter(source) {
            let json = source.json;
            let outputs = [fluidOutput(json.fluid)];
            let automaticBottle = json.input.item === 'minecraft:honey_bottle' && json.result && json.result.id === 'minecraft:glass_bottle';
            if (json.result && !automaticBottle) outputs.push(resultStack(json.result));
            processing('createdieselgenerators:basin_fermenting', source.id, ingredientList(json.input), outputs, { processing_time: CONFIG.fermentationTime });
        }
        function convertSqueezer(source) {
            let json = source.json;
            let outputs = [];
            if (json.fluid) outputs.push(fluidOutput(json.fluid));
            if (json.result) outputs.push(resultStack(json.result));
            ingredientList(json.input).forEach(input => { if (input.item) seedInputs [input.item] = true; });
            processing('create:compacting', source.id, ingredientList(json.input), outputs);
        }
        function convertRefinery(source) {
            let json = source.json;
            let inputs = [fluidInput(json.input0)];
            if (json.input1) inputs.push(fluidInput(json.input1));
            let outputs = [fluidOutput(json.result)];
            if (json.catalyst) {
                ingredientList(json.catalyst).forEach(input => inputs.push(input));
                outputs.push(resultStack(json.catalyst));
            }
            processing('create:mixing', source.id, inputs, outputs, { heat_requirement: 'heated' });
        }
        let converters = {
            'immersiveengineering:metal_press': convertMetalPress,
            'immersiveengineering:blueprint': convertBlueprint,
            'immersiveengineering:bottling_machine': convertBottling,
            'immersiveengineering:sawmill': convertSawmill,
            'immersiveengineering:alloy': convertAlloy,
            'immersiveengineering:mixer': convertMixer,
            'immersiveengineering:fermenter': convertFermenter,
            'immersiveengineering:squeezer': convertSqueezer,
            'immersiveengineering:refinery': convertRefinery
        };
        function preserveUnregisteredBatch(error, source, pendingStart) {
            if (String(error).indexOf('[TNK IE Batch] Unregistered batch:') === -1) return false;
            pending.splice(pendingStart).forEach(entry => { delete signatures [JSON.stringify(entry.json)]; });
            console.warn('[TNK IE] Kept native ' + source.id + ': its batch item is not registered.');
            return true;
        }
        sources.forEach(source => {
            let converter = converters[source.json.type];
            if (!converter) return;
            if (
                source.id === 'immersiveengineering:squeezer/graphite_dust' ||
                source.id === 'immersiveengineering:bottling/graphite_electrode'
            ) {
                removals[source.id] = true;
                return;
            }
            let pendingStart = pending.length;
            try {
                converter(source);
            } catch (error) {
                if (preserveUnregisteredBatch(error, source, pendingStart)) return;
                if (String(error).indexOf('Missing item output:') !== -1 && source.json['neoforge:conditions']) {
                    console.info('[TNK IE] Optional material absent: ' + source.id);
                    removals[source.id] = true;
                    return;
                }
                throw new Error('[TNK IE] Conversion failed for ' + source.id + ': ' + error);
            }
            if (!(
                CONFIG.keepManualMoldBlueprints &&
                source.json.type === 'immersiveengineering:blueprint' &&
                source.json.category === 'molds'
            ))
                removals[source.id] = true;
            migrationCounts[source.json.type] = (migrationCounts[source.json.type] || 0) + 1;
        });
        flushMechanical();
        sources
            .filter(source => source.json.type === 'createaddition:rolling')
            .forEach(source => {
                let output = resultStack(source.json.results[0]);
                if (!rodItems[output.id]) return;
                let pendingStart = pending.length;
                try {
                    deploy(source.id, prepare(source.id, source.json.ingredients), 'immersiveengineering:mold_rod', [output]);
                } catch (error) {
                    if (preserveUnregisteredBatch(error, source, pendingStart)) return;
                    throw error;
                }
                removals[source.id] = true;
            });
        Ingredient.of('#c:seeds').itemIds.forEach(value => {
            let id = String(value);
            if (!seedInputs[id])
                processing('create:compacting', 'tnk:seeds/' + id.replace(':', '/'), [{ item: id }], [{ id: 'createdieselgenerators:plant_oil', amount: 100 }]);
        });
        removals['createnuclear:mixing/steel'] = true;
        removals['createaddition:compacting/seed_oil'] = true;
        pending.filter(entry => entry.id === recipeId('mixing', 'immersiveengineering:refinery/biodiesel')).forEach(entry => pending.splice(pending.indexOf(entry), 1));
        removals['immersiveengineering:mixer_potion_list'] = true;
        removals['immersiveengineering:potion_bottling_list'] = true;
        let deployOutputs = {};
        pending.filter(entry => entry.json.type === 'create:deploying').forEach(entry => entry.json.results.forEach(stack =>(deployOutputs [stack.id] = true)));
        function inputSignature(json) {
            return JSON.stringify((json.ingredients || []).map(input => JSON.stringify(input)).sort());
        }
        let comparableTypes = new Set(['create:pressing', 'create:cutting', 'createaddition:rolling', 'create:mixing']);
        let replacementSignatures = new Set();
        pending.forEach(entry => {
            if (comparableTypes.has(entry.json.type) && entry.json.results && entry.json.results[0]) {
                replacementSignatures.add(entry.json.type + '|' + inputSignature(entry.json) + '|' + entry.json.results [0].id);
            }
        });
        sources.forEach(source => {
            let json = source.json;
            if (hasDisabledOutput(json)) removals[source.id] = true;
            let out = json.result || (json.results && json.results[0]);
            if (out && deployOutputs[out.id] && !converters[json.type]) removals[source.id] = true;
            if (
                comparableTypes.has(json.type) &&
                json.results &&
                json.results[0] &&
                replacementSignatures.has(json.type + '|' + inputSignature(json) + '|' + json.results[0].id)
            ) {
                removals[source.id] = true;
            }
        });
        sources.forEach(source => { if (removals [source.id]) source.recipe.remove(); else if (source.changed) source.recipe.merge(source.json); });
        sources
            .filter(source => source.json.type === 'immersiveengineering:blast_furnace')
            .forEach(source => {
                let json = clone(source.json);
                let tag = json.result.tag;
                if (tag === 'c:ingots/steel' || tag === 'c:storage_blocks/steel') {
                    delete json.result.tag;
                    let fallback = tag === 'c:ingots/steel' ? 'createnuclear:steel_ingot' : 'createnuclear:steel_block';
                    json.result.id = TNK_UNIFY.canonical(tag, fallback);
                }
                source.recipe.merge(json);
            });
        Object.keys(FLUID_ALIASES).forEach(old => {
            processing('create:mixing', 'tnk:legacy_fluid/' + old.replace(':', '/'), [{ type: 'neoforge:single', fluid: old, amount: 1000 }], [{ id: FLUID_ALIASES [old], amount: 1000 }]);
        });
        Object.keys(BUCKET_ALIASES).forEach(old => {
            if (Item.exists(old) && Item.exists(itemId(old))) {
                add('legacy_material', old, { type: 'minecraft:crafting_shapeless', ingredients: [{ item: old }], result: { id: itemId(old), count: 1 } });
            }
        });
        add('liquid_burning', 'tnk:high_power_biodiesel', {
            type: 'createaddition:liquid_burning',
            ingredients: [{ type: 'neoforge:tag', tag: 'c:high_power_biodiesel', amount: 1000 }],
            results: [],
            burn_time: 26400,
            superheated: false
        });
        pending.forEach(entry => event.custom(entry.json).id(entry.id));
        console.info('[TNK IE] Added ' + pending.length + ' recipes. Migrated: ' + JSON.stringify(migrationCounts));
    };
    IEEvents.createStructure(event => {
        let name = event.multiblock.uniqueName.toString();
        if (DISABLED_STRUCTURES.some(id => name === 'immersiveengineering:multiblocks/' + id)) {
            event.setCanceled(true);
        }
    });
    if (CONFIG.blockPlacement) {
        BlockEvents.placed(event => { if (DISABLED_ITEMS.indexOf(String(event.block.id)) !== - 1) event.cancel(); });
    }
    RecipeViewerEvents.removeEntries('item', event => {
        DISABLED_ITEMS.forEach(id => { if (Item.exists(id)) event.remove(id); });
        Object.keys(BUCKET_ALIASES).forEach(id => { if (Item.exists(id)) event.remove(id); });
    });
    RecipeViewerEvents.removeEntries('fluid', event => { Object.keys(FLUID_ALIASES).forEach(id => event.remove(id)); });
    TNK_LOOT_SCOPES["compat_automation_108_1"] = { CONFIG: CONFIG, DISABLED_ITEMS: DISABLED_ITEMS, BUCKET_ALIASES: BUCKET_ALIASES, itemId: itemId };
})();

// compat automation: source line 721
(() => {
    let config = global.TNK_AE2_COMPAT;
    if (!config) throw new Error('[TNK AE2] Missing startup script content.js. Restart after installation.');
    let PRINTED_ITEMS = config.prints.map(entry => entry.output);
    let PROCESSOR_ITEMS = config.processors.map(entry => entry.output);
    let PROCESS_ITEMS = PRINTED_ITEMS.concat(PROCESSOR_ITEMS);
    let CELL_ITEMS = config.stoneCells.map(entry => entry.cell);
    let COLORS = tnkServerTable("compat_automation_COLORS_755");
    let PAINTBALLS = COLORS.reduce((items, color) => items.concat(['ae2:' + color + '_paint_ball', 'ae2:' + color + '_lumen_paint_ball']), []);
    let affectedNamespaces = ['ae2:', 'extendedae:'];
    PROCESS_ITEMS.concat(CELL_ITEMS, PAINTBALLS, config.disabledMachines).forEach(id => {
        let namespace = id.split(':')[0] + ':';
        if (affectedNamespaces.indexOf(namespace) < 0) affectedNamespaces.push(namespace);
    });
    function recipeId(method, name) {
        return 'tnk:ae2_compat/' + method + '/' + name;
    }
    function intermediate(name) {
        return 'kubejs:incomplete_' + name;
    }
    function outputIds(json) {
        let found = [];
        function stack(value) {
            if (!value) return;
            if (Array.isArray(value)) value.forEach(stack);
            else if (typeof value === 'string') found.push(value);
            else if (value.id || value.item) found.push(value.id || value.item);
            else if (value.basePredicate) stack(value.basePredicate);
        }
        ['result', 'results', 'output'].forEach(key => stack(json[key]));
        if (json.baseRecipe) outputIds(json.baseRecipe).forEach(id => found.push(id));
        return found;
    }
    function containsItem(value, ids) {
        if (!value || typeof value !== 'object') return false;
        if (Array.isArray(value)) return value.some(entry => containsItem(entry, ids));
        return Object.keys(value).some(key => {
            if (key === 'components' || key === 'neoforge:conditions') return false;
            return(((key === 'item' || key === 'id') && ids.indexOf(value [key]) !== - 1) || containsItem(value [key], ids));
        });
    }
    function replacePaintIngredients(json) {
        let changed = false;
        function visit(value) {
            if (!value || typeof value !== 'object') return;
            if (Array.isArray(value)) {
                value.forEach(visit);
                return;
            }
            Object.keys(value).forEach(key => {
                if (key === 'components' || key === 'neoforge:conditions') return;
                if (key === 'item' && PAINTBALLS.indexOf(value[key]) !== -1) {
                    let color = value[key].slice(4).replace(/_(lumen_)?paint_ball$/, '');
                    value[key] = 'minecraft:' + color + '_dye';
                    changed = true;
                } else visit(value[key]);
            });
        }
        visit(json);
        return changed;
    }
    TNK_RECIPES.ae2Manufacturing = event => {
        let removed = 0;
        let patched = 0;
        event.forEachRecipe({}, recipe => {
            let text = String(recipe.json.toString());
            if (!affectedNamespaces.some(namespace => text.indexOf(namespace) >= 0)) return;
            let json = JSON.parse(text);
            let outputs = outputIds(json);
            let remove =
                json.type === 'ae2:inscriber' ||
                json.type === 'extendedae:crystal_fixer' ||
                json.type === 'extendedae:circuit_cutter' ||
                outputs.some(
                    item =>
                        PROCESS_ITEMS.indexOf(item) !== -1 ||
                        CELL_ITEMS.indexOf(item) !== -1 ||
                        PAINTBALLS.indexOf(item) !== -1 ||
                        config.disabledMachines.indexOf(item) !== -1 ||
                        item === 'extendedae:crystal_assembler'
                ) ||
                containsItem(json, config.disabledMachines) ||
                (json.type === 'ae2:matter_cannon' && containsItem(json, PAINTBALLS));
            if (remove) {
                recipe.remove();
                removed++;
            } else if (replacePaintIngredients(json)) {
                recipe.merge(json);
                patched++;
            }
        });
        function deployStep(name, held, reusable) {
            return { type: 'create:deploying', ingredients: [{ item: intermediate(name) }, held], results: [{ id: intermediate(name) }], keep_held_item: reusable };
        }
        function pressStep(name) {
            return { type: 'create:pressing', ingredients: [{ item: intermediate(name) }], results: [{ id: intermediate(name) }] };
        }
        function assembly(name, input, output, steps) {
            event
                .custom({
                    type: 'create:sequenced_assembly',
                    ingredient: input,
                    transitional_item: { id: intermediate(name) },
                    sequence: steps,
                    results: [{ id: output, count: 1, chance: 1.0 }],
                    loops: 1
                })
                .id(recipeId('sequenced_assembly', name));
        }
        config.prints.forEach(entry => { assembly(entry.name, entry.input, entry.output, [deployStep(entry.name, { item: entry.press }, true), pressStep(entry.name)]); });
        config.processors.forEach(entry => {
            assembly(entry.name, { item: entry.input }, entry.output, [deployStep(entry.name, { tag: 'c:dusts/redstone' }, false), deployStep(entry.name, { item: 'ae2:printed_silicon' }, false), pressStep(entry.name)]);
        });
        config.pressCopies.forEach(entry => {
            assembly(entry.name, { item: 'minecraft:iron_block' }, entry.output, [deployStep(entry.name, { item: entry.output }, true), pressStep(entry.name)]);
        });
        let milling = tnkServerTable("compat_automation_milling_944");
        milling.forEach(entry => {
            event.custom({ type: 'create:milling', ingredients: [entry [1]], results: [{ id: entry [2], count: 1 }], processing_time: 100 }).id(recipeId('milling', entry [0]));
        });
        console.info(
            '[TNK AE2] Removed ' +
                removed +
                ' recipes; replaced paintball inputs in ' +
                patched +
                '; added 13 assemblies and 5 milling routes; machine construction is handled by the tier integration.'
        );
    };
    BlockEvents.placed(event => { if (config.disabledMachines.indexOf(String(event.block.id)) !== - 1) event.cancel(); });
    BlockEvents.rightClicked(event => { if (config.disabledMachines.indexOf(String(event.block.id)) !== - 1) event.cancel(); });
    RecipeViewerEvents.removeEntries('item', event => {
        config.disabledMachines.forEach(id => event.remove(id));
        if (config.hidePaintballs) PAINTBALLS.forEach(id => event.remove(id));
    });
    TNK_LOOT_SCOPES["compat_automation_33452_1"] = { config: config };
})();

// TNK_RECIPES.bossCatalysts: source line 155
TNK_RECIPES.bossCatalysts = event => {
  const token = 'kubejs:boss_respawn_token'
  if (!Platform.isLoaded('cataclysm')) return
  const recipes = tnkServerTable("gameplay_recipes_224")
  recipes.forEach(recipe => { event.shapeless(recipe [0], [token, recipe [1]]).id('tnk:boss_respawn/cataclysm/' + recipe [2]) })
}
