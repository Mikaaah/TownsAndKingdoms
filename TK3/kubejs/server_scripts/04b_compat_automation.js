// priority: 1400
// TNK3 | compat automation

// compat automation: source line 959
(() => {
    let CONFIG = tnkServerTable("compat_automation_CONFIG_1011");
    let BIOMES = tnkServerTable("compat_automation_BIOMES_1029");
    function item(id, weight) {
        return { item: id, weight: weight };
    }
    let ORIGINAL_COMPAT = {
        alluvial_sift: [item('croptopia:salt', 5)],
        amethyst_crevasse: [item('ae2:certus_quartz_crystal', 5), item('minecraft:quartz', 10)],
        ancient_seabed: [item('alexscaves:limestone', 15), item('croptopia:salt', 5)],
        auricupride: [item('create:veridium', 20), item('create:ochrum', 5)],
        banded_iron: [item('create:crimsite', 20)],
        beryl: [item('ae2:certus_quartz_crystal', 5), item('minecraft:amethyst_shard', 5)],
        chalcopyrite: [item('create:crimsite', 10), item('create:veridium', 10)],
        cooled_lava_tube: [item('create:scoria', 15), item('create:scorchia', 15)],
        galena: [item('alexscaves:galena_iron_ore', 10)],
        hardened_clay_pan: [item('create:ochrum', 10)],
        igneous_rock: [item('create:crimsite', 5), item('create:veridium', 5), item('create:ochrum', 5), item('create:asurine', 5)],
        lazulitic_intrusion: [item('ae2:certus_quartz_crystal', 5), item('minecraft:quartz', 5)],
        mephitic_quarzite: [item('create:scorchia', 10)],
        rich_auricupride: [item('create:ochrum', 20), item('create:veridium', 5)],
        silt: [item('croptopia:salt', 5)],
        uraninite: [item('createnuclear:uranium_ore', 10), item('alexscaves:uranium', 3)],
        super_mineral_vein: [item('ae2:certus_quartz_crystal', 5), item('croptopia:salt', 5)],
        sphalerite: [item('create:asurine', 20), item('create:crimsite', 5)]
    };
    let ORIGINAL_NAMES = tnkServerTable("compat_automation_ORIGINAL_NAMES_1080");
    let OTHER_ORIGINALS = { 'immersiveengineering:super_mineral_vein': 'super_mineral_vein', 'createaddition:compat/immersiveengineering/sphalerite': 'sphalerite' };
    let RESOURCE_VEINS = [
        {
            name: 'ferruginous_strata',
            weight: 15,
            biomes: BIOMES.mountains,
            requires: ['create:crimsite'],
            background: 'minecraft:tuff',
            outputs: [item('create:crimsite', 60), item('minecraft:iron_ore', 40)],
            spoils: [item('minecraft:tuff', 100)]
        },
        {
            name: 'copper_schist',
            weight: 15,
            biomes: BIOMES.overworld,
            requires: ['create:veridium'],
            background: 'minecraft:tuff',
            outputs: [item('create:veridium', 60), item('minecraft:copper_ore', 40)],
            spoils: [item('minecraft:tuff', 100)]
        },
        {
            name: 'auriferous_limestone',
            weight: 10,
            biomes: BIOMES.badlands,
            requires: ['create:ochrum'],
            background: 'minecraft:calcite',
            outputs: [item('create:ochrum', 60), item('minecraft:gold_ore', 40)],
            spoils: [item('minecraft:calcite', 100)]
        },
        {
            name: 'zinc_bearing_strata',
            weight: 15,
            biomes: BIOMES.mountains,
            requires: ['create:asurine', 'create:zinc_ore'],
            background: 'minecraft:calcite',
            outputs: [item('create:asurine', 60), item('create:zinc_ore', 40)],
            spoils: [item('minecraft:calcite', 100)]
        },
        {
            name: 'certus_quartz_pocket',
            weight: 5,
            biomes: BIOMES.overworld,
            requires: ['ae2:certus_quartz_crystal', 'ae2:sky_stone_block', 'ae2:fluix_crystal'],
            background: 'ae2:sky_stone_block',
            outputs: [item('ae2:certus_quartz_crystal', 60), item('ae2:sky_stone_block', 20), item('minecraft:quartz', 18), item('ae2:fluix_crystal', 2)],
            spoils: [item('ae2:sky_stone_block', 100)]
        },
        {
            name: 'volcanic_strata',
            weight: 10,
            biomes: BIOMES.volcanic,
            requires: ['create:scoria', 'create:scorchia'],
            background: 'minecraft:basalt',
            outputs: [item('create:scoria', 50), item('create:scorchia', 50)],
            spoils: [item('minecraft:basalt', 100)]
        },
        {
            name: 'magnetic_fault',
            weight: 25,
            biomes: BIOMES.magnetic,
            requires: ['alexscaves:galena', 'alexscaves:raw_scarlet_neodymium', 'alexscaves:raw_azure_neodymium'],
            background: 'alexscaves:galena',
            outputs: [item('alexscaves:raw_scarlet_neodymium', 30), item('alexscaves:raw_azure_neodymium', 30), item('alexscaves:galena_iron_ore', 30), item('alexscaves:galena', 10)],
            spoils: [item('alexscaves:galena', 100)]
        },
        {
            name: 'primordial_fossil_bed',
            weight: 200,
            biomes: BIOMES.primordial,
            requires: ['alexscaves:limestone', 'alexscaves:amber'],
            background: 'alexscaves:limestone',
            outputs: [item('alexscaves:amber', 35), item('minecraft:bone', 35), item('alexscaves:limestone', 25), item('alexscaves:pewen_sap', 5)],
            spoils: [item('alexscaves:limestone', 100)]
        },
        {
            name: 'ambrosial_strata',
            weight: 200,
            biomes: BIOMES.aether,
            requires: ['aether:holystone', 'aether:ambrosium_ore', 'aether:zanite_ore'],
            background: 'aether:holystone',
            outputs: [item('aether:ambrosium_ore', 55), item('aether:zanite_ore', 35), item('aether:holystone', 10)],
            spoils: [item('aether:holystone', 100)]
        },
        {
            name: 'living_root_seam',
            weight: 200,
            biomes: BIOMES.twilight,
            requires: ['twilightforest:liveroot', 'twilightforest:root_strand'],
            background: 'minecraft:dirt',
            outputs: [item('twilightforest:liveroot', 40), item('minecraft:iron_ore', 35), item('twilightforest:root_strand', 20), item('twilightforest:torchberries', 5)],
            spoils: [item('minecraft:dirt', 60), item('minecraft:coarse_dirt', 40)]
        }
    ];
    let EASTER_EGGS = [
        {
            name: 'starch_bearing_sediment',
            weight: 1,
            biomes: BIOMES.overworld,
            requires: [],
            background: 'minecraft:dirt',
            outputs: [item('minecraft:potato', 80), item('minecraft:baked_potato', 18), item('minecraft:poisonous_potato', 2)],
            spoils: [item('minecraft:dirt', 100)]
        },
        {
            name: 'ferrous_residue',
            weight: 1,
            biomes: BIOMES.overworld,
            requires: ['immersiveengineering:component_iron'],
            background: 'minecraft:gravel',
            outputs: [item('minecraft:iron_nugget', 65), item('minecraft:stick', 20), item('minecraft:stone_button', 14), item('immersiveengineering:component_iron', 1)],
            spoils: [item('minecraft:gravel', 100)]
        },
        {
            name: 'silicate_computing_layer',
            weight: 1,
            biomes: BIOMES.overworld,
            requires: ['ae2:silicon'],
            background: 'minecraft:stone',
            outputs: [
                item('ae2:silicon', 35),
                item('minecraft:redstone', 30),
                item('minecraft:raw_copper', 20),
                item('minecraft:quartz', 12),
                item('minecraft:charcoal', 2),
                item('minecraft:potato', 1)
            ],
            spoils: [item('minecraft:cobblestone', 100)]
        },
        {
            name: 'cultured_limestone',
            weight: 1,
            biomes: BIOMES.overworld,
            requires: ['croptopia:cheese'],
            background: 'minecraft:calcite',
            outputs: [item('croptopia:cheese', 90), item('croptopia:butter', 9), item('croptopia:cheese_pizza', 1)],
            spoils: [item('minecraft:calcite', 100)]
        },
        {
            name: 'exceptionally_dense_strata',
            weight: 1,
            biomes: BIOMES.overworld,
            requires: [],
            background: 'minecraft:cobblestone',
            outputs: [item('minecraft:cobblestone', 99.9), item('minecraft:diamond', 0.1)],
            spoils: [item('minecraft:gravel', 100)]
        },
        {
            name: 'acoustic_inclusion',
            weight: 1,
            biomes: BIOMES.overworld,
            requires: [],
            background: 'minecraft:stone',
            outputs: [item('minecraft:stone', 95), item('minecraft:note_block', 4), item('minecraft:jukebox', 0.8), item('minecraft:music_disc_cat', 0.1), item('minecraft:music_disc_13', 0.1)],
            spoils: [item('minecraft:cobblestone', 100)]
        },
        {
            name: 'preserved_protein_layer',
            weight: 1,
            biomes: BIOMES.primordial,
            requires: ['alexscaves:limestone', 'alexscaves:amber', 'alexscaves:dinosaur_nugget'],
            background: 'alexscaves:limestone',
            outputs: [item('minecraft:bone', 70), item('alexscaves:amber', 25), item('alexscaves:dinosaur_nugget', 5)],
            spoils: [item('alexscaves:limestone', 100)]
        },
        {
            name: 'atmospheric_nutrient_pocket',
            weight: 1,
            biomes: BIOMES.aether,
            requires: ['aether:holystone', 'aether:ambrosium_ore', 'aether:zanite_ore', 'aether:blue_berry', 'aether:white_apple'],
            background: 'aether:holystone',
            outputs: [item('aether:blue_berry', 65), item('aether:white_apple', 34), item('aether:enchanted_berry', 1)],
            spoils: [item('aether:holystone', 100)]
        },
        {
            name: 'labyrinthine_food_reserve',
            weight: 1,
            biomes: BIOMES.twilight,
            requires: ['twilightforest:liveroot', 'twilightforest:root_strand', 'twilightforest:maze_wafer'],
            background: 'minecraft:dirt',
            outputs: [item('twilightforest:maze_wafer', 75), item('minecraft:brown_mushroom', 12), item('minecraft:red_mushroom', 12), item('twilightforest:experiment_115', 1)],
            spoils: [item('minecraft:dirt', 100)]
        },
        {
            name: 'saccharine_sediment',
            weight: 1,
            biomes: BIOMES.overworld,
            requires: ['alexscaves:sweetish_fish_red', 'alexscaves:rock_candy_white'],
            background: 'minecraft:calcite',
            outputs: [
                item('minecraft:sugar', 65),
                item('alexscaves:rock_candy_white', 15),
                item('alexscaves:rock_candy_pink', 10),
                item('alexscaves:sweetish_fish_red', 5),
                item('alexscaves:sweetish_fish_blue', 5)
            ],
            spoils: [item('minecraft:calcite', 100)]
        }
    ];
    function clone(value) {
        return JSON.parse(JSON.stringify(value));
    }
    let warnedItems = new Set();
    function availableEntries(entries) {
        return entries.filter(entry => {
            if (!(entry.weight > 0) || !Number.isFinite(entry.weight)) {
                throw new Error('[TNK Excavator] Output weights must be positive: ' + JSON.stringify(entry));
            }
            if (Item.exists(entry.item)) return true;
            if (!warnedItems.has(entry.item)) {
                console.warn('[TNK Excavator] Optional output unavailable, omitted: ' + entry.item);
                warnedItems.add(entry.item);
            }
            return false;
        });
    }
    function normalize(entries) {
        let valid = availableEntries(entries);
        let total = valid.reduce((sum, entry) => sum + entry.weight, 0);
        return valid.map(entry => ({ chance: entry.weight / total, output: { id: entry.item } }));
    }
    function blend(original, additions) {
        let valid = availableEntries(additions);
        let reserved = valid.reduce((sum, entry) => sum + entry.weight, 0);
        if (reserved === 0) return clone(original);
        if (reserved >= 100) throw new Error('[TNK Excavator] Compat additions must total less than 100.');
        let total = original.reduce((sum, entry) => sum + entry.chance, 0);
        if (!(total > 0)) throw new Error('[TNK Excavator] Original pool is empty.');
        return original
            .map(entry => {
                let copy = clone(entry);
                copy.chance = (entry.chance / total) * (1 - reserved / 100);
                return copy;
            })
            .concat(valid.map(entry => ({ chance: entry.weight / 100, output: { id: entry.item } })));
    }
    function spawnWeight(id, fallback) {
        let value = Object.prototype.hasOwnProperty.call(CONFIG.spawnWeights, id) ? CONFIG.spawnWeights [id]: fallback;
        if (!Number.isInteger(value) || value < 1) {
            throw new Error('[TNK Excavator] Spawn weight must be a positive integer: ' + id);
        }
        return value;
    }
    function updateOriginalVeins(event) {
        let changed = 0;
        let patchOriginals = CONFIG.enableOriginalCompat;
        event.forEachRecipe({ type: 'immersiveengineering:mineral_mix' }, recipe => {
            let id = String(recipe.getId());
            let prefix = 'immersiveengineering:mineral/';
            let name = OTHER_ORIGINALS[id] || (id.startsWith(prefix) ? id.substring(prefix.length) : '');
            if (!OTHER_ORIGINALS[id] && ORIGINAL_NAMES.indexOf(name) === -1) return;
            recipe.serialize();
            let json = JSON.parse(recipe.json.toString());
            if (patchOriginals) {
                json.ores = blend(json.ores, ORIGINAL_COMPAT[name] || []);
                if (CONFIG.reduceCommonFailure && (json.fail_chance || 0) <= 0.2) {
                    json.fail_chance = Math.min(json.fail_chance || 0, CONFIG.commonFailureCap);
                }
                let overworld = json.biome_predicates.some(group => group.indexOf('minecraft:is_overworld') !== -1);
                if (overworld && CONFIG.limestoneSpoilShare > 0) {
                    json.spoils = blend(json.spoils, [item('create:limestone', CONFIG.limestoneSpoilShare * 100)]);
                }
            }
            json.weight = spawnWeight(id, json.weight);
            recipe.merge(json);
            changed++;
        });
        return changed;
    }
    function addVeins(event, definitions, failure) {
        let added = 0;
        definitions.forEach(vein => {
            let missing = vein.requires.filter(id => !Item.exists(id));
            if (missing.length) {
                console.warn('[TNK Excavator] Skipping ' + vein.name + '; missing required items: ' + missing.join(', '));
                return;
            }
            let ores = normalize(vein.outputs);
            let spoils = normalize(vein.spoils);
            if (!ores.length || !spoils.length) {
                console.warn('[TNK Excavator] Skipping empty deposit: ' + vein.name);
                return;
            }
            let id = 'tnk:mineral/' + vein.name;
            event
                .custom({
                    type: 'immersiveengineering:mineral_mix',
                    biome_predicates: clone(vein.biomes),
                    weight: spawnWeight(id, vein.weight),
                    fail_chance: failure,
                    sample_background: vein.background,
                    ores: ores,
                    spoils: spoils
                })
                .id(id);
            added++;
        });
        return added;
    }
    TNK_RECIPES.excavatorDeposits = event => {
        if (!Item.exists('immersiveengineering:coresample')) return;
        let originals = updateOriginalVeins(event);
        let resources = CONFIG.enableResourceVeins ? addVeins(event, RESOURCE_VEINS, CONFIG.resourceFailure) : 0;
        let discoveries = CONFIG.enableEasterEggs ? addVeins(event, EASTER_EGGS, CONFIG.easterEggFailure) : 0;
        console.info('[TNK Excavator] Updated ' + originals + ' original veins; added ' + resources + ' resource deposits and ' + discoveries + ' rare discoveries.');
    };
})();

// compat automation: source line 1408
(() => {
    let cells = tnkServerTable("compat_automation_cells_1507");
    TNK_RECIPES.infinityCells = event => { cells.forEach(row => { event.remove({ output: row.output }); event.custom(row.recipe).id(row.recipe_id); }); };
})();

// compat automation: source line 1419
(() => {
    function tnkInitElectricalRegistry() {
        if (Registry !== undefined) return;
        Registry = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
        Registry.ITEM.keySet().forEach(key => {
        let id = String(key), path = id.split(':') [1].split('/').pop().replace(/_/g, '');
        if (path !== 'electricpump' && path !== 'servomotor') return;
        matched.push(id);
    });
    }
    let Registry;
    let matched = [];
    TNK_RECIPES.electricalMachines = event => {
        tnkInitElectricalRegistry();
        matched.forEach(id => {
            event.remove({ output: id });
            event.stonecutting(Item.of(id), 'kubejs:tk3_engineering_machine').id('tnk:electrical_machines/' + id.replace(':', '/'));
        });
    };
})();

// compat automation: source line 1439
(() => {
    TNK_RECIPES.buildingMaterials = event => {
        let prefix = 'tnk:building_automation/';
        let added = 0;
        function registered(ids, name) {
            let missing = ids.filter(id => !Item.exists(id));
            if (!missing.length) return true;
            console.warn('[TNK Building] Skipped ' + name + '; missing: ' + missing.join(', '));
            return false;
        }
        function portions(entries) {
            let result = [];
            entries.forEach(entry => { for (let i = 0; i < entry [1]; i ++) result.push({ item: entry [0] }); });
            return result;
        }
        function basin(method, name, output, count, entries, fluid, heat) {
            if (!registered([output].concat(entries.map(e => e[0])), name)) return;
            let ingredients = portions(entries);
            if (fluid) ingredients.push({ type: 'neoforge:single', fluid: fluid[0], amount: fluid[1] });
            let json = { type: 'create:' + method, ingredients: ingredients, results: [{ id: output, count: count }] };
            if (heat) json.heat_requirement = heat;
            if (method === 'mixing') json.processing_time = 100;
            event.custom(json).id(prefix + method + '/' + name);
            added++;
        }
        function process(method, name, input, output, count, time) {
            if (!registered([input, output], name)) return;
            let json = { type: 'create:' + method, ingredients: [{ item: input }], results: [{ id: output, count: count }] };
            if (time) json.processing_time = time;
            event.custom(json).id(prefix + method + '/' + name);
            added++;
        }
        function fill(name, input, output, fluid, amount) {
            if (!registered([input, output], name)) return;
            event
                .custom({ type: 'create:filling', ingredients: [{ item: input }, { type: 'neoforge:single', fluid: fluid, amount: amount }], results: [{ id: output }] })
                .id(prefix + 'filling/' + name);
            added++;
        }
        basin('compacting', 'ru_chalk', 'regions_unexplored:chalk', 4, [['minecraft:calcite', 4], ['minecraft:clay_ball', 4]], ['minecraft:water', 250]);
        process('milling', 'chalk_powder', 'regions_unexplored:chalk', 'natures_spirit:chalk_powder', 4, 150);
        basin('mixing', 'marlstone', 'bloomingnature:cobbled_marlstone', 4, [['minecraft:calcite', 4], ['minecraft:clay_ball', 4]], ['minecraft:water', 250], 'heated');
        basin('compacting', 'slate', 'bloomingnature:cobbled_slate', 4, [['minecraft:cobbled_deepslate', 4], ['minecraft:flint', 1]], ['minecraft:lava', 100], 'heated');
        basin('compacting', 'laterit', 'bloomingnature:cobbled_laterit', 4, [['minecraft:red_sand', 4], ['minecraft:clay_ball', 1]], ['minecraft:water', 250]);
        basin('mixing', 'pink_sand', 'natures_spirit:pink_sand', 4, [['minecraft:sand', 4], ['minecraft:pink_dye', 1]]);
        basin('mixing', 'orange_sand', 'biomesoplenty:orange_sand', 4, [['minecraft:sand', 4], ['minecraft:orange_dye', 1]]);
        basin('mixing', 'white_sand', 'biomesoplenty:white_sand', 4, [['minecraft:sand', 4], ['create_aquatic_ambitions:calcium_rich_powder', 1]], ['minecraft:water', 250]);
        process('milling', 'black_sand', 'minecraft:basalt', 'biomesoplenty:black_sand', 1, 150);
        basin('compacting', 'dried_salt', 'biomesoplenty:dried_salt', 1, [['croptopia:salt', 4]], ['minecraft:water', 250], 'heated');
        fill('thermal_calcite', 'minecraft:calcite', 'biomesoplenty:thermal_calcite', 'minecraft:lava', 100);
        basin('mixing', 'bop_brimstone', 'biomesoplenty:brimstone', 4, [['minecraft:blackstone', 4], ['create:cinder_flour', 1]], ['minecraft:lava', 100], 'heated');
        if (registered(['create:cinder_flour', 'regions_unexplored:volcanic_ash'], 'volcanic_ash')) {
            event.smoking('regions_unexplored:volcanic_ash', 'create:cinder_flour', 0, 200).id(prefix + 'smoking/volcanic_ash');
            added++;
        }
        basin('compacting', 'myalite', 'quark:myalite', 8, [['quark:myalite', 1], ['minecraft:end_stone', 7], ['minecraft:amethyst_shard', 1]]);
        process('haunting', 'dusky_myalite', 'quark:myalite', 'quark:dusky_myalite', 1);
        basin('compacting', 'sculk_stone', 'deeperdarker:cobbled_sculk_stone', 4, [['deeperdarker:cobbled_sculk_stone', 1], ['minecraft:cobbled_deepslate', 3], ['minecraft:sculk', 1]]);
        process('haunting', 'gloomslate', 'deeperdarker:cobbled_sculk_stone', 'deeperdarker:cobbled_gloomslate', 1);
        fill('flood_basalt', 'minecraft:basalt', 'alexscaves:flood_basalt', 'minecraft:water', 250);
        console.info('[TNK Building] Added ' + added + ' processing routes.');
    };
})();

// compat automation: source line 1614
(() => {
    function tnkInitSpellAutomation() {
        if (Spells !== undefined) return;
        Spells = Java.loadClass('io.redspace.ironsspellbooks.api.registry.SpellRegistry');
        SpellConfig = Java.loadClass('io.redspace.ironsspellbooks.config.ServerConfigs');
        Ink = Java.loadClass('io.redspace.ironsspellbooks.item.InkItem');
        Iterables = Java.loadClass('com.google.common.collect.Iterables');
        Container = Java.loadClass('io.redspace.ironsspellbooks.api.spells.ISpellContainer');
        Registry = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
        Stack = Java.loadClass('net.minecraft.world.item.ItemStack');
        RL = Java.loadClass('net.minecraft.resources.ResourceLocation');
        Optional = Java.loadClass('java.util.Optional');
        Recipe = Java.loadClass('net.minecraft.world.item.crafting.Recipe');
        RecipeHolder = Java.loadClass('net.minecraft.world.item.crafting.RecipeHolder');
        RegistryOps = Java.loadClass('net.minecraft.resources.RegistryOps');
        JsonOps = Java.loadClass('com.mojang.serialization.JsonOps');
        JsonParser = Java.loadClass('com.google.gson.JsonParser');
        List = Java.loadClass('java.util.ArrayList');
        SearchEvent = Java.loadClass('com.simibubi.create.content.kinetics.deployer.DeployerRecipeSearchEvent');
        Filtering = Java.loadClass('com.simibubi.create.foundation.blockEntity.behaviour.filtering.FilteringBehaviour');
        FilterStack = Java.loadClass('com.simibubi.create.content.logistics.filter.FilterItemStack');
        ListFilter = Java.loadClass('com.simibubi.create.content.logistics.filter.ListFilterItem');
        Types = Java.loadClass('com.simibubi.create.AllRecipeTypes');
    }
    if (!Platform.isLoaded('irons_spellbooks') || !Platform.isLoaded('create')) return;
    let Spells;
    let SpellConfig;
    let Ink;
    let Iterables;
    let Container;
    let Registry;
    let Stack;
    let RL;
    let Optional;
    let Recipe;
    let RecipeHolder;
    let RegistryOps;
    let JsonOps;
    let JsonParser;
    let List;
    let SearchEvent;
    let Filtering;
    let FilterStack;
    let ListFilter;
    let Types;
    let prefix = 'tnk:scroll_automation/';
    let schools = ['blood', 'eldritch', 'ender', 'evocation', 'fire', 'holy', 'ice', 'lightning', 'nature'];
    let index = { }, cachedManager = null, holders = { };
    let waitingForConfig = false;
    function itemId(stack) {
        return String(Registry.ITEM.getKey(stack.getItem()));
    }
    function isBound(holder) {
        return holder !== null && String(holder.id()).startsWith(prefix);
    }
    function generate(ops, emit) {
        let next = { }, prepared = new Set(), inks = [], finished = 0, research = 0, skipped = [];
        Iterables.filter(Registry.ITEM, Ink).forEach(ink => inks.push(ink));
        function encode(stack) {
            return JSON.parse(Stack.CODEC.encodeStart(ops, stack).getOrThrow().toString());
        }
        function add(id, input, held, output, key) {
            emit(id, { type: 'create:deploying', ingredients: [{ item: input }, held], results: [encode(output)], keep_held_item: false });
            if (!next[input]) next[input] = [];
            next[input].push({ id: id, output: output, key: key });
        }
        Spells.getEnabledSpells().forEach(spell => {
            if (!spell.isEnabled() || !spell.allowCrafting() || spell.equals(Spells.none())) return;
            if (spell.requiresLearning()) {
                research++;
                return;
            }
            let school = spell.getSchoolType(), resource = school.getId();
            let name = String(resource.getPath());
            if (String(resource.getNamespace()) !== 'irons_spellbooks' || schools.indexOf(name) < 0) {
                skipped.push(String(spell.getSpellId()) + ': unsupported school ' + resource);
                return;
            }
            let unfinished = 'kubejs:unfinished_' + name + '_scroll';
            if (!Item.exists(unfinished)) return;
            let spellId = String(spell.getSpellId());
            spell.resetRarityWeights();
            let levels = { }, maximum = spell.getMaxLevel();
            for (let level = 1; level <= maximum; level++) {
                let rarity = spell.getRarity(level).getValue();
                if (levels[rarity] === undefined) levels[rarity] = level;
            }
            inks.forEach(ink => {
                let level = levels[ink.getRarity().getValue()];
                if (level === undefined) return;
                let output = Item.of('irons_spellbooks:scroll');
                Container.createScrollContainer(spell, level, output);
                if (!prepared.has(name)) {
                    add(prefix + 'prepare/' + name, 'minecraft:paper', { tag: String(school.getFocus().location()) }, Item.of(unfinished), 'prepare/' + name);
                    prepared.add(name);
                }
                let inkId = String(Registry.ITEM.getKey(ink));
                add(prefix + 'bind/' + spellId.replace(':', '/') + '/level_' + level + '/' + inkId.replace(':', '/'), unfinished, { item: inkId }, output, spellId + '/' + level);
                finished++;
            });
        });
        index = next;
        cachedManager = null;
        holders = {};
        console.info(
            '[TNK Scroll Automation] ' +
                prepared.size +
                ' school preparations; ' +
                finished +
                ' native spell/ink bindings; ' +
                research +
                ' player-research spells retained as native; ' +
                skipped.length +
                ' unsupported-school entries skipped.'
        );
        skipped.forEach(message => console.warn('[TNK Scroll Automation] ' + message));
    }
    TNK_RECIPES.scrollAutomation = event => {
        tnkInitSpellAutomation();
        index = {};
        cachedManager = null;
        holders = {};
        waitingForConfig = !SpellConfig.SPEC.isLoaded();
        if (waitingForConfig) return;
        generate(event.registries.json(), (id, json) => event.custom(json).id(id));
    };
    ServerEvents.loaded(event => {
        tnkInitSpellAutomation();
        if (!waitingForConfig) return;
        if (!SpellConfig.SPEC.isLoaded())
            throw new Error('[TNK Scroll Automation] World spell config was not loaded before server startup.');
        let started = Date.now(),
            server = event.server,
            manager = server.getRecipeManager(),
            ops = RegistryOps.create(JsonOps.INSTANCE, server.registryAccess()),
            bindings = new List();
        generate(ops, (id, json) => {
            let recipe = Recipe.CODEC.parse(ops, JsonParser.parseString(JSON.stringify(json))).getOrThrow();
            bindings.add(new RecipeHolder(RL.parse(id), recipe));
        });
        let all = new List();
        manager.getRecipes().forEach(recipe => { if (! isBound(recipe)) all.add(recipe); });
        all.addAll(bindings);
        manager.replaceRecipes(all);
        waitingForConfig = false;
        console.info('[TNK Scroll Automation] Initial bindings installed in ' + (Date.now() - started) + ' ms.');
    });
    function holder(manager, id) {
        if (!(id in holders)) {
            let value = manager.byKey(RL.parse(id));
            holders[id] = value.isPresent() ? value.get() : null;
        }
        return holders[id];
    }
    function nativeFallback(manager, inventory, level) {
        let found = null;
        [Types.DEPLOYING.getType(), Types.ITEM_APPLICATION.getType()].forEach(type => {
            if (found !== null) return;
            manager.getAllRecipesFor(type).forEach(candidate => {
                if (
                    found === null &&
                    !isBound(candidate) &&
                    Types.CAN_BE_AUTOMATED.test(candidate) &&
                    candidate.value().matches(inventory, level)
                )
                    found = candidate;
            });
        });
        return found;
    }
    ServerEvents.recipes(event => { tnkInitSpellAutomation();
NativeEvents.onEvent(SearchEvent, event => {
        if (event.isCanceled()) return;
        let inventory = event.getInventory(), base = inventory.getItem(0), held = inventory.getItem(1);
        if (base.isEmpty() || held.isEmpty()) return;
        let candidates = index[itemId(base)];
        if (!candidates) return;
        let block = event.getBlockEntity(), level = block.getLevel();
        if (level === null || level.isClientSide()) return;
        let manager = level.getRecipeManager();
        if (manager !== cachedManager) {
            cachedManager = manager;
            holders = {};
        }
        let behaviour = block.getBehaviour(Filtering.TYPE), matches = [], outputKeys = new Set();
        if (behaviour !== null) {
            let filter = behaviour.getFilter();
            if (!filter.isEmpty() && filter.getItem() instanceof ListFilter) {
                let configured = FilterStack.of(filter.copy());
                if (configured.shouldRespectNBT && !configured.isBlacklist && configured.test(level, held)) {
                    candidates.forEach(candidate => {
                        let recipe = holder(manager, candidate.id);
                        if (
                            recipe !== null &&
                            recipe.value().matches(inventory, level) &&
                            configured.test(level, candidate.output) &&
                            !outputKeys.has(candidate.key)
                        ) {
                            outputKeys.add(candidate.key);
                            matches.push(recipe);
                        }
                    });
                }
            }
        }
        if (matches.length === 1) {
            let selected = matches[0];
            event.addRecipe(() => Optional.of(selected), 1000);
            return;
        }
        let original = event.getRecipe();
        if (original !== null && !isBound(original)) return;
        let fallback = nativeFallback(manager, inventory, level);
        if (fallback !== null) event.addRecipe(() => Optional.of(fallback), 1000);
        else event.setCanceled(true);
    });
});
})();

// compat automation: source line 2016
ServerEvents.recipes(event => {
    if (!Platform.isLoaded('create') || !Platform.isLoaded('thaumaturge') ||
        !Platform.isLoaded('create_thaumaturgy')) return;
    let recipes = tnkServerTable("compat_automation_recipes_2653");
    let symbols = 'XYZABCDEFGHIJKLMNOPQRSTUVW';
    let changed = 0;
    let skipped = 0;
    function skip(id, reason) {
        skipped++;
        console.warn('[TNK Thaumaturgy] Kept ' + id + ': ' + reason);
    }
    recipes.forEach(rule => {
        let category = rule.infusion ? 'infusion' : 'arcane_workbench';
        let id = 'create_thaumaturgy:' + category + '/' + rule.name;
        let cost = 'kubejs:' + rule.cost;
        if (!Item.exists(cost)) {
            skip(id, 'missing ' + cost);
            return;
        }
        event.forEachRecipe({ id: id }, recipe => {
            let json = JSON.parse(recipe.json.toString());
            let type = rule.infusion ? 'thaumaturge:infusion' : 'thaumaturge:arcane_workbench_shaped';
            if (json.type !== type || !json.research ||
                json.research.entry !== 'create_thaumaturgy:' + rule.name) {
                skip(id, 'native recipe type or research changed');
                return;
            }
            if (rule.infusion) {
                if (!Array.isArray(json.components)) {
                    skip(id, 'native infusion components changed');
                    return;
                }
                if (json.components.some(ingredient => ingredient && ingredient.item === cost)) return;
                json.components.push({ item: cost });
            } else {
                let pattern = json.pattern;
                let key = json.key;
                if (!Array.isArray(pattern) || pattern.length < 1 || pattern.length > 3 ||
                    pattern.some(row => typeof row !== 'string' || row.length < 1 || row.length > 3 ||
                        row.length !== pattern[0].length) || !key || typeof key !== 'object' || Array.isArray(key)) {
                    skip(id, 'native workbench layout changed');
                    return;
                }
                if (Object.keys(key).some(symbol => key[symbol] && key[symbol].item === cost)) return;
                let symbol = symbols.split('').find(value => !Object.prototype.hasOwnProperty.call(key, value));
                if (!symbol) {
                    skip(id, 'no unused ingredient symbol');
                    return;
                }
                let row = -1;
                let column = -1;
                if (rule.replacePlate) {
                    let plate = pattern[0][0];
                    if (plate === ' ' || !key[plate] || key[plate].item !== 'thaumaturge:plate_thaumium' ||
                        pattern.join('').split(plate).length - 1 !== 4) {
                        skip(id, 'native Crusher plate layout changed');
                        return;
                    }
                    row = 0;
                    column = 0;
                } else {
                    for (let i = 0; i < pattern.length && row < 0; i++) {
                        let space = pattern[i].indexOf(' ');
                        if (space >= 0) {
                            row = i;
                            column = space;
                        }
                    }
                    if (row < 0) {
                        skip(id, 'no free workbench slot');
                        return;
                    }
                }
                pattern[row] = pattern[row].slice(0, column) + symbol + pattern[row].slice(column + 1);
                key[symbol] = { item: cost };
            }
            recipe.merge(json);
            changed++;
        });
    });
    console.info('[TNK Thaumaturgy] Updated ' + changed + ' recipes; skipped ' + skipped + ' incompatible edits.');
});
