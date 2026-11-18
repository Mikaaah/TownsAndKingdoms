// priority: 2100
// TNK3 | tags

// Shared recipe/tag functions and immutable source-data copies
const TNK_RECIPES = {};
const TNK_TAGS = {};
const TNK_LOOT_SCOPES = {};
let TNK_SERVER_TABLES = null;
function tnkServerTable(key) {
    if (TNK_SERVER_TABLES === null) TNK_SERVER_TABLES = JSON.parse(String(JsonIO.readString('kubejs/pack_data/server_tables.json')));
    return JSON.parse(JSON.stringify(TNK_SERVER_TABLES[key]));
}

// progression: source line 1434
let TNK_SEARCH_CATALOG = null;

// TNK_TAGS.searchGroups: source line 1435
TNK_TAGS.searchGroups = event => {
    const data = JSON.parse(String(JsonIO.readString('kubejs/pack_data/jei.json'))).search_groups;
    if (!data || data.format !== 1 || data.namespace !== 'tnk_search') {
        throw new Error('[TNK JEI] Missing or unsupported jei_search_groups.json');
    }
    const seen = new Set();
    data.groups.forEach(group => {
        if (seen.has(group.id) || !/^tnk_[a-z_]+$/.test(group.id)) {
            throw new Error('[TNK JEI] Invalid or duplicate search group: ' + group.id);
        }
        seen.add(group.id);
        const unique = new Set(), items = [];
        group.items.forEach(id => { if (! unique.has(id) && Item.exists(id)) { unique.add(id); items.push(id); } });
        const tag = data.namespace + ':' + group.id;
        event.removeAll(tag);
        if (items.length) event.add(tag, items);
        else console.warn('[TNK JEI] Search group is empty: ' + tag);
    });
    TNK_SEARCH_CATALOG = data;
};

// tags: source line 6
const TNK_TAG_REPAIRS = tnkServerTable("tags_TNK_TAG_REPAIRS_6");

// tags: source line 9
function TNK_ADD_TAG_REPAIRS(event, registry) {
    const blockIds = new Set();
    if (registry === 'block') Block.getTypeList().forEach(id => blockIds.add(String(id)));
    const exists = registry === 'item' ? id => Item.exists(id) : id => blockIds.has(id);
    function add(tag, ids) {
        const valid = Array.from(new Set(ids)).filter(exists);
        if (valid.length) event.add(tag, valid);
    }
    const stoneTags = ['c:stones', 'c:cobblestones', 'c:cobblestones/normal'];
    if (registry === 'item') stoneTags.push('minecraft:stone_crafting_materials', 'minecraft:stone_tool_materials');
    Object.keys(TNK_TAG_REPAIRS.stones).forEach(namespace => {
        const ids = TNK_TAG_REPAIRS.stones[namespace].map(path => namespace + ':' + path);
        stoneTags.forEach(tag => add(tag, ids));
        add('tk3:basic_stones', ids);
    });
    Object.keys(TNK_TAG_REPAIRS.woods).forEach(namespace => {
        const family = TNK_TAG_REPAIRS.woods[namespace];
        [['minecraft:logs', 'logs'], ['minecraft:planks', 'planks'], ['c:stripped_logs', 'stripped_logs'], ['c:stripped_woods', 'stripped_woods']].forEach(pair => {
            add(pair[0], family[pair[1]].map(path => namespace + ':' + path));
        });
    });
    Object.keys(TNK_TAG_REPAIRS.materials).forEach(tag => {
        const ids = TNK_TAG_REPAIRS.materials[tag];
        if (registry === 'item' || tag.startsWith('c:storage_blocks/')) {
            add(tag, ids);
            add(tag.split('/')[0], ids);
        }
    });
    if (registry !== 'item') return;
    Object.keys(TNK_TAG_REPAIRS.foodAndCrops).forEach(tag => { const ids = TNK_TAG_REPAIRS.foodAndCrops [tag]; add(tag, ids); add(tag.split('/') [0], ids); });
    if (Platform.isLoaded('croptopia')) TNK_TAG_REPAIRS.cropLinks.forEach(pair => { event.remove('c:crops', pair [0]); event.add('c:crops', pair [1]); });
    if (Platform.isLoaded('starcatcher')) event.add('c:foods', '#c:foods/raw_fish');
    Object.keys(TNK_TAG_REPAIRS.questItems).forEach(tag => add(tag, TNK_TAG_REPAIRS.questItems[tag]));
}

// processing: source line 5
const TNK_UNIFY = {
    policy: JSON.parse(String(JsonIO.readString('kubejs/pack_data/material_unification.json'))),
    aliases: {},
    preferredByTag: {},
    rodItems: {},
    groups: [],
    blocked: new Set(global.TNK_CONTENT.fullyDisabledItems.concat(global.TNK_CONTENT.hiddenOnlyItems)),
    excluded: new Set(global.TNK_CONTENT.fullyDisabledItems.concat(
        global.TNK_CONTENT.hiddenOnlyItems, global.TNK_CONTENT.legacyHiddenItems
    )),
    ready: false,
    pattern: null,
    lastRun: null
};

// processing: source line 19
if (TNK_UNIFY.policy.format !== 1) throw new Error('[TNK Unification] Unsupported material_unification.json');

// TNK_UNIFY.rank: source line 21
TNK_UNIFY.rank = id => { const index = TNK_UNIFY.policy.namespacePriority.indexOf(id.split(':') [0]); return index < 0 ? TNK_UNIFY.policy.namespacePriority.length: index; };

// TNK_UNIFY.choosePreferred: source line 25
TNK_UNIFY.choosePreferred = ids => {
    return ids.filter(id => Item.exists(id) && ! TNK_UNIFY.excluded.has(id)).sort((a, b) => TNK_UNIFY.rank(a) - TNK_UNIFY.rank(b) || a.localeCompare(b)) [0];
};

// TNK_UNIFY.item: source line 30
TNK_UNIFY.item = id => TNK_UNIFY.aliases[id] || id;

// TNK_UNIFY.canonical: source line 31
TNK_UNIFY.canonical = (tag, fallback) => TNK_UNIFY.preferredByTag[tag] || fallback;

// TNK_UNIFY.deferTags: source line 35
TNK_UNIFY.deferTags = (event, callback) => {
    var PreTag = Java.loadClass('dev.latvian.mods.kubejs.server.tag.PreTagKubeEvent');
    if (event instanceof PreTag) {
        var Consumer = Java.loadClass('java.util.function.Consumer');
        event.actions.add(new JavaAdapter(Consumer, { accept: callback }));
    } else callback(event);
};

// TNK_UNIFY.retargetTags: source line 42
TNK_UNIFY.retargetTags = (event, aliases) => {
    event.tags.entrySet().forEach(entry => {
        const wrapper = entry.getValue(), replacements = [];
        wrapper.entries.forEach(proxy => {
            const location = proxy.entry().elementOrTag();
            if (location.tag()) return;
            const id = String(location.id());
            if (aliases[id]) replacements.push([id, aliases[id]]);
        });
        replacements.forEach(pair => { wrapper.remove(pair [0]); wrapper.add(pair [1]); });
    });
};

// TNK_UNIFY.bindTags: source line 58
TNK_UNIFY.bindTags = event => {
    const wrappers = { }, groups = { }, metalNames = new Set(), policy = TNK_UNIFY.policy;
    TNK_UNIFY.ready = false;
    [TNK_UNIFY.aliases, TNK_UNIFY.preferredByTag, TNK_UNIFY.rodItems].forEach(map => Object.keys(map).forEach(key => delete map [key]));
    event.tags.entrySet().forEach(entry => (wrappers[String(entry.getKey())] = entry.getValue()));
    function materialName(name) {
        if (name.startsWith('raw_')) return 'raw_' + (policy.materialNames[name.slice(4)] || name.slice(4));
        return policy.materialNames[name] || name;
    }
    Object.keys(wrappers).forEach(tag => { const match = /^c:ingots\/([^/]+)$/.exec(tag); if (match) metalNames.add(materialName(match [1])); });
    function read(tag) {
        const visited = new Set(), found = new Set(), result = [];
        function visit(name) {
            if (visited.has(name)) return;
            visited.add(name);
            const wrapper = wrappers[name];
            if (!wrapper) return;
            wrapper.entries.forEach(proxy => {
                const location = proxy.entry().elementOrTag(), id = String(location.id());
                if (location.tag()) visit(id);
                else if (Item.exists(id)) found.add(id);
            });
        }
        visit(tag);
        found.forEach(id => result.push(id));
        return result;
    }
    Object.keys(wrappers).sort().forEach(tag => {
        const match = /^c:([^/]+)\/([^/]+)$/.exec(tag);
        if (!match || policy.forms.indexOf(match[1]) < 0) return;
        const form = match [1], material = materialName(match [2]);
        if (policy.excludedMaterials.indexOf(material) >= 0 || /_(or|and)_/.test(material)) return;
        const family = form === 'storage_blocks' && material.startsWith('raw_') ? material.slice(4) : material;
        if (policy.requireIngotFamily.indexOf(form) >= 0 && !metalNames.has(family)) return;
        const ids = read(tag);
        if (!ids.length) return;
        const key = form + '/' + material;
        if (!groups[key]) groups[key] = { form: form, material: material, tags: [], ids: new Set() };
        groups[key].tags.push(tag);
        ids.forEach(id => groups[key].ids.add(id));
    });
    const selected = [];
    Object.keys(groups).sort().forEach(key => {
        const group = groups [key], ids = [];
        group.ids.forEach(id => ids.push(id));
        const preferred = TNK_UNIFY.choosePreferred(ids);
        if (!preferred) return;
        group.tags.forEach(tag => (TNK_UNIFY.preferredByTag[tag] = preferred));
        if (group.form === 'rods') TNK_UNIFY.rodItems[preferred] = true;
        ids.forEach(id => {
            if (id === preferred || TNK_UNIFY.blocked.has(id)) return;
            if (TNK_UNIFY.aliases[id] && TNK_UNIFY.aliases[id] !== preferred)
                throw new Error('[TNK Unification] Conflicting material groups for ' + id);
            TNK_UNIFY.aliases[id] = preferred;
        });
        selected.push({ form: group.form, material: group.material, tags: group.tags, items: ids.sort(), canonical: preferred });
    });
    selected.forEach(group => { if (TNK_UNIFY.aliases [group.canonical]) throw new Error('[TNK Unification] Canonical item is also retired: ' + group.canonical); });
    TNK_UNIFY.groups = selected;
    selected.forEach(group => group.tags.forEach(tag => event.get(tag).removeAll().add(group.canonical)));
    TNK_UNIFY.retargetTags(event, TNK_UNIFY.aliases);
    const ids = Object.keys(TNK_UNIFY.aliases);
    TNK_UNIFY.pattern = ids.length ? new RegExp(ids.map(id => id.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')): null;
    TNK_UNIFY.ready = true;
};

// TNK_UNIFY.normalize: source line 150
TNK_UNIFY.normalize = json => {
    let changed = false;
    const protectedKeys = ['components', 'nbt', 'neoforge:conditions', 'forge:conditions', 'conditions'];
    const inputs = ['ingredient', 'ingredients', 'input', 'inputs', 'input0', 'input1', 'input_items', 'key', 'base', 'addition', 'template', 'catalyst', 'catalysts', 'additive', 'additives'];
    const outputs = ['result', 'results', 'output', 'outputs', 'secondaries', 'secondaryOutputs', 'stripped', 'strippingSecondaries', 'transitional_item'];
    function replace(value) {
        if (typeof value === 'string' && TNK_UNIFY.aliases[value]) {
            changed = true;
            return TNK_UNIFY.aliases[value];
        }
        return value;
    }
    function visit(value, context) {
        if (!value || typeof value !== 'object') return;
        if (Array.isArray(value)) {
            value.forEach((child, index) => { if (typeof child === 'string' && context) value [index] = replace(child); else visit(child, context); });
            return;
        }
        Object.keys(value).forEach(key => {
            if (protectedKeys.indexOf(key) >= 0) return;
            const child = value[key];
            if (key === 'item' || key === 'items' || (key === 'id' && context)) {
                if (typeof child === 'string') value[key] = replace(child);
                else visit(child, true);
                return;
            }
            const next = inputs.indexOf(key) >= 0 || outputs.indexOf(key) >= 0 ? true : context;
            if (typeof child === 'string' && next && (inputs.indexOf(key) >= 0 || outputs.indexOf(key) >= 0))
                value[key] = replace(child);
            else visit(child, next);
        });
    }
    visit(json, false);
    return changed;
};

// TNK_UNIFY.finishRecipes: source line 188
TNK_UNIFY.finishRecipes = event => {
    if (!TNK_UNIFY.ready) throw new Error('[TNK Unification] Loaded item tags were not resolved before recipes.');
    const started = Date.now(), stats = { native: 0, custom: 0, changedNative: 0, changedCustom: 0, recovery: 0, elapsedMs: 0 };
    function normalize(recipe, custom) {
        if (recipe.removed || recipe.creationError) return;
        if (custom) recipe.serialize();
        if (custom) stats.custom++;
        else stats.native++;
        if (String(recipe.getId()).startsWith(TNK_UNIFY.policy.legacyRecipePrefix)) return;
        const text = String(recipe.json.toString());
        if (!TNK_UNIFY.pattern || !TNK_UNIFY.pattern.test(text)) return;
        const json = JSON.parse(text);
        if (TNK_UNIFY.normalize(json)) {
            recipe.merge(json);
            if (custom) stats.changedCustom++;
            else stats.changedNative++;
        }
    }
    event.originalRecipes.values().forEach(recipe => normalize(recipe, false));
    event.addedRecipes.forEach(recipe => normalize(recipe, true));
    Object.keys(TNK_UNIFY.aliases).sort().forEach(old => {
        event.custom({ type: 'minecraft:crafting_shapeless', ingredients: [{ item: old }], result: { id: TNK_UNIFY.aliases[old], count: 1 } })
            .id(TNK_UNIFY.policy.legacyRecipePrefix + old.replace(':', '/'));
        stats.recovery++;
    });
    TNK_ORE_REMOVE_LOOPS(event);
    stats.elapsedMs = Date.now() - started;
    TNK_UNIFY.lastRun = stats;
    console.info('[TNK Unification] ' + Object.keys(TNK_UNIFY.aliases).length + ' retired variants; ' + stats.changedNative + ' native and ' + stats.changedCustom + ' custom recipes normalized in ' + stats.elapsedMs + ' ms.');
};

// processing: source line 222
RecipeViewerEvents.removeEntries('item', event => { Object.keys(TNK_UNIFY.aliases).forEach(id => event.remove(id)); });

// processing: source line 225
if (Platform.isLoaded('lootjs')) {
}

// processing: source line 233
const TNK_ORE_METALS = tnkServerTable("processing_table_233").map(row => ({ metal: row[0], crushed: 'create:crushed_raw_' + row[0], dust: row[1], ingot: row[2] }));

// processing: source line 235
function tnkOreItems(tag) {
    return Ingredient.of('#' + tag).itemIds.toArray().map(id => String(id)).filter(id => id !== 'minecraft:barrier' && Item.exists(id));
}

// processing: source line 241
function tnkOreMetals() {
    return TNK_ORE_METALS.map(row => Object.assign({}, row, { crushed: TNK_UNIFY.item(row.crushed), dust: TNK_UNIFY.item(row.dust), ingot: TNK_UNIFY.item(row.ingot) })).filter(
        row =>
            Item.exists(row.crushed) &&
            Item.exists(row.dust) &&
            Item.exists(row.ingot) &&
            tnkOreItems('c:raw_materials/' + row.metal).length > 0
    );
}

// TNK_TAGS.oreForms: source line 255
TNK_TAGS.oreForms = event => { event.add('c:dusts', 'kubejs:zinc_dust'); event.add('c:dusts/zinc', 'kubejs:zinc_dust'); };

// TNK_RECIPES.oreCooking: source line 260
TNK_RECIPES.oreCooking = event => {
    const metals = tnkOreMetals();
    metals.forEach(row => event.remove({ id: 'immersiveengineering:crusher/ingot_' + row.metal }));
    if (metals.some(row => row.metal === 'uranium')) {
        event.remove({ id: 'createnuclear:crushing/crushed_raw_uranium' });
    }
    event.smelting('create:zinc_ingot', '#c:dusts/zinc', 0, 200).id('tnk:ore_processing/smelting/zinc_dust');
    event.blasting('create:zinc_ingot', '#c:dusts/zinc', 0, 100).id('tnk:ore_processing/blasting/zinc_dust');
};

// processing: source line 273
function TNK_ORE_REMOVE_LOOPS(event) {
    const activeMetals = tnkOreMetals();
    let refinedTags = new Set(), refinedItems = new Set(), stageTags = new Set(), stageItems = new Set();
    activeMetals.forEach(row => {
        ['dusts'].forEach(form => { let tag = 'c:' + form + '/' + row.metal; stageTags.add(tag); tnkOreItems(tag).forEach(id => stageItems.add(id)); });
        stageItems.add(row.crushed);
        ['ingots', 'nuggets', 'storage_blocks', 'plates', 'rods', 'wires', 'gears'].forEach(form => {
            let tag = 'c:' + form + '/' + row.metal;
            refinedTags.add(tag);
            tnkOreItems(tag).forEach(id => refinedItems.add(id));
        });
    });
    const metalMaterials = new Set();
    TNK_UNIFY.groups.forEach(group => { if (group.form === 'ingots') metalMaterials.add(group.material); });
    TNK_UNIFY.groups.forEach(group => {
        if (!metalMaterials.has(group.material)) return;
        const stage = ['dusts', 'small_dusts', 'crushed_raw_materials'].indexOf(group.form) >= 0;
        const refined = ['ingots', 'nuggets', 'storage_blocks', 'plates', 'rods', 'wires', 'gears'].indexOf(group.form) >= 0;
        if (stage) {
            group.tags.forEach(tag => stageTags.add(tag));
            stageItems.add(group.canonical);
        }
        if (refined) {
            group.tags.forEach(tag => refinedTags.add(tag));
            refinedItems.add(group.canonical);
        }
    });
    let hasRef = (value, tags, items) => {
        if (typeof value === 'string') return items.has(value) || (value[0] === '#' && tags.has(value.slice(1)));
        if (!value || typeof value !== 'object') return false;
        if (Array.isArray(value)) return value.some(v => hasRef(v, tags, items));
        if (
            (value.tag && tags.has(value.tag)) ||
            (value.item && items.has(value.item)) ||
            (value.id && items.has(value.id))
        )
            return true;
        return Object.keys(value).some(key => key !== 'components' && key !== 'neoforge:conditions' && hasRef(value [key], tags, items));
    };
    const stageReferences = [];
    stageItems.forEach(id => stageReferences.push(JSON.stringify(id)));
    stageTags.forEach(tag => { stageReferences.push(JSON.stringify(tag), JSON.stringify('#' + tag)); });
    const stagePattern = stageReferences.length ? new RegExp(stageReferences.map(value => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')): null;
    let blockLoop = recipe => {
        if (recipe.removed || recipe.creationError) return;
        const text = String(recipe.json.toString());
        if (stagePattern === null || !stagePattern.test(text)) return;
        let json = JSON.parse(text);
        let output = ['result', 'results', 'output', 'outputs', 'secondaries'].some(key => hasRef(json [key], stageTags, stageItems));
        if (!output) return;
        let input = ['ingredient', 'ingredients', 'input', 'inputs', 'input_items', 'key', 'base', 'addition', 'additives'].some(key => hasRef(json [key], refinedTags, refinedItems));
        if (input) recipe.remove();
    };
    event.originalRecipes.values().forEach(blockLoop);
    event.addedRecipes.forEach(recipe => { blockLoop(recipe); });
}

// TNK_TAGS.unifyMaterials: source line 440
TNK_TAGS.unifyMaterials = event => TNK_UNIFY.deferTags(event, loaded => TNK_UNIFY.bindTags(loaded));

// TNK_RECIPES.finishMaterials: source line 441
TNK_RECIPES.finishMaterials = event => TNK_UNIFY.finishRecipes(event);

// TNK_TAGS.restrictedEnchantments: source line 5
TNK_TAGS.restrictedEnchantments = event => {
    const enchantment = 'apothic_spawners:capturing';
    tnkServerTable("restrictions_table_7").forEach(tag => event.remove(tag, enchantment));
    event.add('create_enchantment_industry:printer/deny', enchantment);
};

// TNK_TAGS.restrictedEntities: source line 11
TNK_TAGS.restrictedEntities = event => { event.add('ars_nouveau:jar_blacklist', ['#c:bosses', 'minecraft:ender_dragon', 'minecraft:wither', 'irons_spellbooks:archevoker']); };

// Tag registration
ServerEvents.tags('item', event => TNK_ADD_TAG_REPAIRS(event, 'item'));

// Tag registration
ServerEvents.tags('block', event => TNK_ADD_TAG_REPAIRS(event, 'block'));

// Tag registration
ServerEvents.tags('item', event => {
    TNK_TAGS.compatibility(event, 'item');
    TNK_TAGS.rubber(event);
    TNK_TAGS.oreForms(event);
    TNK_TAGS.searchGroups(event);
    TNK_TAGS.unifyMaterials(event);
});

// Tag registration
ServerEvents.tags('block', event => TNK_TAGS.compatibility(event, 'block'));

// Tag registration
ServerEvents.tags('fluid', event => TNK_TAGS.fluids(event));

// Tag registration
ServerEvents.tags('enchantment', event => TNK_TAGS.restrictedEnchantments(event));

// Tag registration
ServerEvents.tags('entity_type', event => TNK_TAGS.restrictedEntities(event));
