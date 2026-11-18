// priority: 0
// TNK3 | tweaks events

// progression: source line 122
(() => {
    function tnkInitManualCraftingGuard() {
        if (Trace !== undefined) return;
        Trace = Java.loadClass('java.util.NoSuchElementException');
    }
    let Trace;
    ServerEvents.modifyRecipeResult('tnk:makeshift_manual_only', event => {
        tnkInitManualCraftingGuard();
        let frames = new Trace().getStackTrace();
        for (let i = 0; i < frames.length; i++) {
            let owner = String(frames[i].getClassName());
            if (
                owner === 'net.minecraft.world.inventory.CraftingMenu' ||
                owner === 'net.minecraft.world.inventory.InventoryMenu'
            ) {
                event.success(event.item);
            }
            if (owner === 'dev.shadowsoffire.fastbench.util.FastBenchUtil') {
                let method = String(frames[i].getMethodName());
                if (method === 'slotChangedCraftingGrid' || method === 'handleShiftCraft') {
                    event.success(event.item);
                }
            }
        }
        event.success(Item.empty);
    });
})();

// progression: source line 1425
RecipeViewerEvents.addInformation('item', event => {
    event.add('kubejs:tk3_creation_machine', ['Creation-tier crafting component, consumed by the endgame Mechanical Crafting and Sequenced Assembly recipes.']);
    event.add('kubejs:ore_generator_catalyst', tnkServerTable("progression_table_1571"));
    event.add('tnkcore:gold_general_trophy', tnkServerTable("progression_table_1577"));
});

// progression: source line 1461
RecipeViewerEvents.addInformation('item', event => {
    if (!TNK_SEARCH_CATALOG) return;
    const lines = [Text.translate('tnk.jei.search.intro').gold().bold()];
    TNK_SEARCH_CATALOG.groups.forEach(group => { lines.push(Text.of('#' + group.id + ' — ' + group.name)); });
    lines.push(Text.translate('tnk.jei.search.footer'));
    event.add(['create:wrench', 'minecraft:compass'], lines);
});

// progression: source line 1472
RecipeViewerEvents.addInformation('item', event => {
    const pages = JSON.parse(String(JsonIO.readString('kubejs/pack_data/jei.json'))).information;
    if (!pages || pages.format !== 1) throw new Error('[TNK JEI] Missing jei_information.json');
    pages.pages.forEach(page => { const items = page.items.filter(id => Item.exists(id)); if (items.length) event.add(items, page.keys.map(key => Text.translate(key))); });
});

// progression: source line 1484
ItemEvents.modifyTooltips(event => {
    tnkServerTable("progression_table_1636").forEach(row => { if (Item.exists(row [0])) event.add(row [0], [Text.translate(row [1]).gray()]); });
});

// compat: source line 133
RecipeViewerEvents.addInformation('item', event => {
        if (!Platform.isLoaded('create_riftborne')) return;
        const entries = tnkServerTable("compat_entries_673");
        entries.forEach(entry => { if (Item.exists(entry[0])) event.add(entry[0], entry[1]); });
    });

// compat automation: source line 1864
(() => {
    function tnkInitLaserBatchGuard() {
        if (Recipe !== undefined) return;
        Recipe = Java.loadClass('nl.mikaaah.alchemicallaser.recipe.LaserRecipe');
        Holder = Java.loadClass('net.minecraft.world.item.crafting.RecipeHolder');
        RL = Java.loadClass('net.minecraft.resources.ResourceLocation');
        List = Java.loadClass('java.util.ArrayList');
        PreTick = Java.loadClass('net.neoforged.neoforge.event.tick.ServerTickEvent$Pre');
        id = RL.parse('tnk:chapter_10/laser_processing/unstable_creation_gem');
    }
    let Recipe;
    let Holder;
    let RL;
    let List;
    let PreTick;
    let id;
    let lastHolder = null;
    function install(server) {
        let manager = server.getRecipeManager(), holder = manager.byKey(id);
        if (!holder.isPresent()) return;
        let recipe = holder.get().value();
        if (lastHolder !== null && holder.get().equals(lastHolder)) return;
        if (!(recipe instanceof Recipe)) throw new Error('[TNK Laser] Unstable Gem is not a native Laser recipe');
        let single = new JavaAdapter(
            Recipe,
            { rollBatch: function(input, random, limit) { return this.super$rollBatch(input, random, limit === undefined ? 1: Math.min(1, limit)); } },
            recipe.ingredient(),
            recipe.inputCount(),
            recipe.lens(),
            recipe.result(),
            recipe.duration(),
            recipe.minimumRpm(),
            recipe.secondary(),
            recipe.secondaryChance(),
            recipe.copyComponents(),
            recipe.color(),
            recipe.consume()
        );
        let replacement = new Holder(id, single), all = new List();
        manager.getRecipes().forEach(h => all.add(h.id().equals(id) ? replacement : h));
        manager.replaceRecipes(all);
        lastHolder = replacement;
        console.info('[TNK Laser] Unstable Gem: one input per completed cycle.');
    }
    ServerEvents.loaded(event => install(event.server));
    ServerEvents.recipes(event => { tnkInitLaserBatchGuard(); NativeEvents.onEvent(PreTick, event => install(event.getServer())); });
})();

// gameplay: source line 5
ServerEvents.recipes(event => {
    const SETTINGS = tnkServerTable("gameplay_SETTINGS_8");
    const RULES = tnkServerTable("gameplay_RULES_18");
    if (!Platform.isLoaded('create')) return;
    const Registry = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation');
    const Direction = Java.loadClass('net.minecraft.core.Direction');
    const Fluids = Java.loadClass('net.minecraft.world.level.material.Fluids');
    const FluidPlaceBlockEvent = Java.loadClass('net.neoforged.neoforge.event.level.BlockEvent$FluidPlaceBlockEvent');
    const HORIZONTAL = [Direction.NORTH, Direction.EAST, Direction.SOUTH, Direction.WEST];
    const rulesByCatalyst = {};
    const usedNames = new Set();
    const nativeResults = new Set(SETTINGS.replaceResults);
    const chutes = new Set(SETTINGS.chutes);
    function fail(message) {
        throw new Error('[TNK Cobblegens] ' + message);
    }
    function blockId(state) {
        return String(Registry.BLOCK.getKey(state.getBlock()));
    }
    function registeredBlock(id, label) {
        if (typeof id !== 'string' || !/^[a-z0-9_.-]+:[a-z0-9_./-]+$/.test(id)) {
            fail(label + ' must be a namespaced block ID: ' + id);
        }
        const key = ResourceLocation.parse(id);
        if (!Registry.BLOCK.containsKey(key)) fail(label + ' is not a registered block: ' + id);
        return Registry.BLOCK.get(key);
    }
    SETTINGS.replaceResults.forEach(id => registeredBlock(id, 'Formation result'));
    SETTINGS.chutes.forEach(id => registeredBlock(id, 'Chute'));
    if (chutes.size === 0) fail('At least one chute is required.');
    RULES.forEach(rule => {
        if (!rule || typeof rule.id !== 'string' || !/^[a-z0-9_./-]+$/.test(rule.id)) {
            fail('Each rule needs a lowercase id, for example: andesite');
        }
        if (usedNames.has(rule.id)) fail('Duplicate rule id: ' + rule.id);
        usedNames.add(rule.id);
        registeredBlock(rule.catalyst, rule.id + ' catalyst');
        if (rulesByCatalyst[rule.catalyst]) fail('Duplicate catalyst: ' + rule.catalyst);
        if ((rule.output !== undefined) === (rule.outputs !== undefined)) {
            fail(rule.id + ' needs either output or outputs.');
        }
        const entries = rule.output !== undefined ? [rule.output] : rule.outputs;
        if (!Array.isArray(entries) || entries.length === 0) fail(rule.id + ' has no outputs.');
        let total = 0;
        const compiled = entries.map(entry => {
            if (typeof entry !== 'string' && (entry === null || typeof entry !== 'object')) {
                fail(rule.id + ' outputs must be block IDs or { block, weight } objects.');
            }
            const id = typeof entry === 'string' ? entry : entry && entry.block;
            const weight = typeof entry === 'string' || entry.weight === undefined ? 1 : entry.weight;
            if (!Number.isInteger(weight) || weight < 1) fail(rule.id + ' weights must be positive integers.');
            const state = registeredBlock(id, rule.id + ' output').defaultBlockState();
            if (state.isAir() || !state.getFluidState().isEmpty()) {
                fail(rule.id + ' output must be a non-air block without a fluid: ' + id);
            }
            total += weight;
            if (total > 2147483647) fail(rule.id + ' total output weight is too large.');
            return { state: state, limit: total };
        });
        rulesByCatalyst [rule.catalyst] = { id: rule.id, catalyst: rule.catalyst, outputs: compiled, total: total };
    });
    function selectOutput(rule, pos) {
        if (rule.outputs.length === 1) return rule.outputs[0].state;
        let hash = ((pos.getX() * 73428767) ^ (pos.getY() * 912931) ^ (pos.getZ() * 19349663)) | 0;
        hash ^= hash << 13;
        hash ^= hash >>> 17;
        hash ^= hash << 5;
        const choice = (hash >>> 0) % rule.total;
        for (let i = 0; i < rule.outputs.length; i++) {
            if (choice < rule.outputs[i].limit) return rule.outputs[i].state;
        }
        return rule.outputs[rule.outputs.length - 1].state;
    }
    NativeEvents.onEvent(Java.loadClass('net.neoforged.bus.api.EventPriority').LOWEST, FluidPlaceBlockEvent, event => {
        const level = event.getLevel();
        if (level.isClientSide()) return;
        if (!nativeResults.has(blockId(event.getState())) || !nativeResults.has(blockId(event.getNewState()))) return;
        const generatedPos = event.getPos();
        if (!chutes.has(blockId(level.getBlockState(generatedPos.below())))) return;
        let matched = null;
        for (let i = 0; i < HORIZONTAL.length; i++) {
            let lavaPos = generatedPos.relative(HORIZONTAL[i]);
            if (!level.hasChunkAt(lavaPos)) continue;
            let fluid = level.getFluidState(lavaPos);
            if (!fluid.getType().isSame(Fluids.LAVA) || !fluid.isSource()) continue;
            let catalystPos = lavaPos.below();
            let catalyst = blockId(level.getBlockState(catalystPos));
            let rule = rulesByCatalyst[catalyst];
            if (!rule) continue;
            if (matched !== null && matched !== rule) return;
            matched = rule;
        }
        if (matched === null) return;
        event.setNewState(selectOutput(matched, generatedPos));
    });
});

// gameplay: source line 142
(() => { const drops = tnkServerTable("gameplay_drops_191"); TNK_LOOT_SCOPES ["gameplay_6444_1"] = { drops: drops }; })();

// gameplay: source line 168
(() => {
    ServerEvents.generateData('after_mods', event => {
        if (!Platform.isLoaded('boss_respawner')) return;
        const config = JSON.parse(String(JsonIO.readString('kubejs/config/tnk_boss_respawn_rules.json')));
        if (!config || config.format !== 1 || !Array.isArray(config.entries) || !config.entries.length) {
            throw new Error('[TNK Boss Rematch] Missing or invalid native rule snapshot.');
        }
        const pending = [], seen = new Set();
        config.entries.forEach(entry => {
            const rule = entry.rule;
            if (typeof entry.resource !== 'string' ||
                !/^[a-z0-9_.-]+:boss_respawner\/entries\/[a-z0-9_./-]+\.json$/.test(entry.resource) ||
                seen.has(entry.resource) || !rule || rule.schema_version !== 4 ||
                typeof rule.entity !== 'string' || !rule.activation ||
                Array.isArray(rule.activation) || typeof rule.activation !== 'object') {
                throw new Error('[TNK Boss Rematch] Unsupported native rule: ' + entry.resource);
            }
            seen.add(entry.resource);
            if (rule.entity.startsWith('cataclysm:')) return;
            rule.activation.item = 'kubejs:boss_respawn_token';
            pending.push({ resource: entry.resource, rule: rule });
        });
        pending.forEach(row => event.json(row.resource, row.rule));
        console.info('[TNK Boss Rematch] Applied Boss Respawn Token keys to ' + pending.length + ' native rules.');
    });
})();

// gameplay: source line 197
(() => {
    ServerEvents.generateData('after_mods', event => {
        if (!Platform.isLoaded('naturalist')) return;
        const policy = JSON.parse(String(JsonIO.readString('kubejs/config/tnk_animal_spawns.json')));
        if (!policy || Number(policy.schema) !== 1 || !Array.isArray(policy.spawns)) {
            throw new Error('[TNK Wildlife] Invalid spawn policy.');
        }
        const EntityType = Java.loadClass('net.minecraft.world.entity.EntityType');
        const Config = Java.loadClass('com.crispytwig.naturalist.NaturalistConfig');
        const NeoForgeConfig = Java.loadClass('com.crispytwig.naturalist.neoforge.config.NeoForgeNaturalistConfig');
        let flags = null;
        if (!NeoForgeConfig.SPEC.isLoaded()) {
            let FileConfig = Java.loadClass('com.electronwill.nightconfig.core.file.CommentedFileConfig');
            let config = FileConfig.builder('config/naturalist-server.toml').sync().build();
            try {
                config.load();
                flags = {};
                ['aquatic_mobs', 'land_mobs', 'bugs'].forEach(group => {
                    const values = config.get(['disable_mobs', group]);
                    if (values !== null) values.valueMap().forEach((key, value) => { flags[String(key)] = value === true; });
                });
                flags.remove_all_bugs = config.get(['disable_mobs', 'remove_all_bugs']) === true;
            } finally {
                config.close();
            }
        }
        function removed(entity) {
            if (NeoForgeConfig.SPEC.isLoaded()) return Config.isRemoved(entity);
            const key = String(Config.canonicalKey(Config.mobName(entity)));
            return flags [String(Config.configKey(key))] === true ||(flags.remove_all_bugs === true && Config.BUGS.contains(key));
        }
        const pending = [];
        policy.spawns.forEach(row => {
            const entity = EntityType.byString(row.entity).orElse(null);
            if (entity === null) throw new Error('[TNK Wildlife] Unknown native animal ' + row.entity);
            if (removed(entity)) return;
            if (!(row.weight > 0 && row.minCount >= 1 && row.maxCount >= row.minCount)) {
                throw new Error('[TNK Wildlife] Invalid group ' + row.id);
            }
            pending.push({id: row.id, data: {
                type: 'neoforge:add_spawns',
                biomes: { type: 'neoforge:and', values: ['#' + row.biome_tag, { type: 'neoforge:not', value: '#' + row.blacklist_tag }] },
                spawners: {type: row.entity, weight: row.weight, minCount: row.minCount, maxCount: row.maxCount}
            }});
        });
        pending.forEach(row => event.json('tnk:neoforge/biome_modifier/animals/' + row.id, row.data));
    });
})();

// gameplay: source line 255
(() => {
    function tnkInitGravePolicy() {
        if (GraveConfig !== undefined) return;
        GraveConfig = graveEnabled ? Java.loadClass('dev.lopyluna.death_keeper.Config') : null;
    }
    const policy = JSON.parse(String(JsonIO.readString('kubejs/config/tnk_survival_balance.json')));
    if (!policy || Number(policy.schema) !== 1) throw new Error('[TNK Survival] Invalid balance policy.');
    const graveEnabled = Platform.isLoaded('death_keeper');
    let GraveConfig;
    const graveTicks = Number(policy.grave_lifetime_ticks);
    if (!Number.isInteger(graveTicks) || graveTicks < 1 || graveTicks > 2147483647) {
        throw new Error('[TNK Survival] Invalid grave lifetime.');
    }
    function graves() {
        if (graveEnabled) GraveConfig.maxGraveLifespan = graveTicks;
    }
    ServerEvents.afterRecipes(graves);
    ServerEvents.loaded(event => { tnkInitGravePolicy(); graves(); event.server.runCommandSilent('gamerule spawnChunkRadius 0'); });
    if (graveEnabled) {
        ServerEvents.recipes(event => { tnkInitGravePolicy();
NativeEvents.onEvent(Java.loadClass('net.neoforged.bus.api.EventPriority').HIGHEST, Java.loadClass('net.neoforged.neoforge.event.entity.living.LivingDropsEvent'), graves);
});
        ServerEvents.recipes(event => { tnkInitGravePolicy();
NativeEvents.onEvent(Java.loadClass('net.neoforged.bus.api.EventPriority').HIGHEST, Java.loadClass('net.neoforged.neoforge.event.entity.living.LivingExperienceDropEvent'), graves);
});
    }
})();

// players: source line 5
let TNK_COPY_CHEST_IDS = {};

// players: source line 6
ServerEvents.commandRegistry(event => {
    event.register(event.commands.literal('copychest')
        .requires(source => source.hasPermission(2))
        .executes(context => {
            let player = context.getSource().getPlayerOrException();
            TNK_COPY_CHEST_IDS[String(player.uuid)] = true;
            player.tell('Right-click the chest, then click the copy link in chat.');
            return 1;
        }));
});

// players: source line 16
BlockEvents.rightClicked(event => {
    let player = event.player, uuid = String(player.uuid);
    if (!TNK_COPY_CHEST_IDS[uuid] || event.level.isClientSide() || String(event.hand).toLowerCase() !== 'main_hand') return;
    let inventory = event.block.inventory;
    if (!inventory) return;
    event.cancel();
    delete TNK_COPY_CHEST_IDS[uuid];
    let ids = [];
    for (let slot = 0; slot < inventory.getSlots(); slot++) {
        let stack = inventory.getStackInSlot(slot);
        if (!stack.isEmpty()) ids.push(String(stack.id));
    }
    if (!ids.length) { player.tell('That chest is empty.'); return; }
    player.tell(Text.of('[Click here to copy item IDs]').green().clickCopy(ids.join('\n')));
});

// players: source line 31
PlayerEvents.loggedOut(event => { delete TNK_COPY_CHEST_IDS[String(event.player.uuid)]; });

// players: source line 34
(function () {
    var rosterPath = 'kubejs/config/tnk-title-defaults.json';
    var catalogPath = 'config/tnk-titles.json';
    var idPattern = /^[a-z0-9_.-]+:[a-z0-9_./-]+$/;
    var catalogPrepared = false;
    function uuid(value) {
        var compact = String(value).toLowerCase().replace(/-/g, '');
        if (!/^[0-9a-f]{32}$/.test(compact)) throw new Error('Invalid player UUID: ' + value);
        return(compact.slice(0, 8) + '-' + compact.slice(8, 12) + '-' + compact.slice(12, 16) + '-' + compact.slice(16, 20) + '-' + compact.slice(20));
    }
    function read(path) {
        var text = JsonIO.readString(path);
        if (!text) throw new Error('Missing file: ' + path);
        return JSON.parse(String(text));
    }
    function reloadCatalog(server) {
        return(server.getCommands().getDispatcher().execute('tnkprogress title reload', server.createCommandSourceStack().withSuppressedOutput()) === 1);
    }
    function prepare(server) {
        if (!Platform.isLoaded('tnkprogression')) return null;
        try {
            var roster = read(rosterPath);
            if (
                roster.schemaVersion !== 1 ||
                !Array.isArray(roster.titleDefinitions) ||
                !roster.grants ||
                Array.isArray(roster.grants) ||
                typeof roster.grants !== 'object'
            ) {
                throw new Error('Invalid title roster format');
            }
            var catalog = read(catalogPath);
            if (!Array.isArray(catalog.titles)) throw new Error('Invalid existing title catalog');
            var known = {};
            catalog.titles.forEach(function(title) { known [title.id] = true; });
            var changed = false;
            roster.titleDefinitions.forEach(function (title) {
                if (!title || typeof title.id !== 'string' || !idPattern.test(title.id)) {
                    throw new Error('Invalid default title definition');
                }
                if (!known[title.id]) {
                    catalog.titles.push(title);
                    known[title.id] = true;
                    changed = true;
                }
            });
            var grants = {};
            Object.keys(roster.grants).forEach(function (key) {
                var playerId = uuid(key);
                var titles = roster.grants[key];
                if (grants[playerId] || !Array.isArray(titles) || titles.length > 256) {
                    throw new Error('Invalid or duplicate UUID entry: ' + key);
                }
                titles.forEach(function (id) {
                    if (typeof id !== 'string' || id.length > 100 || !idPattern.test(id) || !known[id]) {
                        throw new Error('Unknown or invalid default title: ' + id);
                    }
                });
                grants [playerId] = titles.filter(function(id, index) { return titles.indexOf(id) === index; });
            });
            var original = read(catalogPath);
            if (changed) JsonIO.write(catalogPath, catalog);
            if ((!catalogPrepared || changed) && !reloadCatalog(server)) {
                if (changed) {
                    JsonIO.write(catalogPath, original);
                    reloadCatalog(server);
                }
                throw new Error('Title catalog rejected; default grants skipped');
            }
            catalogPrepared = true;
            return grants;
        } catch (error) {
            console.error('[TNK Default Titles] ' + error);
            return null;
        }
    }
    function award(player, grants) {
        if (!grants) return;
        var username = String(player.username);
        if (!/^[A-Za-z0-9_]{1,16}$/.test(username)) return;
        var titles = grants[uuid(player.uuid)] || [];
        titles.forEach(function(id) { player.server.runCommandSilent('tnkprogress title earn ' + username + ' ' + id); });
    }
    ServerEvents.loaded(function (event) {
        catalogPrepared = false;
        var grants = prepare(event.server);
        event.server.getPlayerList().getPlayers().forEach(function(player) { award(player, grants); });
    });
    PlayerEvents.loggedIn(function(event) { award(event.player, prepare(event.player.server)); });
})();

// players: source line 166
let TNK_CAPES = {
    cataloguePath: 'kubejs/config/tnk_capes.json',
    playerPath: 'config/tnk/cape_players.json',
    backupPath: 'config/tnk/cape_players.backup.json',
    uuidPattern: /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/,
    lastRequest: {}, error: '', server: null
};

// TNK_CAPES.has: source line 173
TNK_CAPES.has = (object, key) => Object.prototype.hasOwnProperty.call(object, key);

// TNK_CAPES.read: source line 174
TNK_CAPES.read = path => JSON.parse(String(JsonIO.readString(path)));

// TNK_CAPES.load: source line 175
TNK_CAPES.load = () => {
    let config = TNK_CAPES.read(TNK_CAPES.cataloguePath);
    if (!config || config.schema !== 1 || !Array.isArray(config.capes)) throw new Error('Invalid cape catalogue');
    let index = {};
    config.capes.forEach(row => {
        if (!/^[a-z0-9_]+$/.test(row.id) || !/^tnk\/[a-z0-9_/-]+$/.test(row.texture) || TNK_CAPES.has(index, row.id)) {
            throw new Error('Invalid or duplicate cape: ' + row.id);
        }
        index[row.id] = row;
    });
    let db = TNK_CAPES.read(TNK_CAPES.playerPath) || {schema: 1, players: {}};
    if (db.schema !== 1 || !db.players || Array.isArray(db.players)) throw new Error('Invalid cape ownership file');
    Object.keys(db.players).forEach(uuid => {
        let row = db.players[uuid];
        if (!TNK_CAPES.uuidPattern.test(uuid) || !row || !Array.isArray(row.unlocked) || typeof row.equipped !== 'string') {
            throw new Error('Invalid cape ownership row: ' + uuid);
        }
        if (row.unlocked.some(id => typeof id !== 'string' || !/^[a-z0-9_]+$/.test(id))) throw new Error('Invalid owned cape ID');
        if (row.equipped && row.unlocked.indexOf(row.equipped) < 0) throw new Error('Equipped cape is not owned: ' + uuid);
    });
    let roster = TNK_CAPES.read('kubejs/config/tnk-title-defaults.json');
    let defaults = roster && roster.capeGrants ? roster.capeGrants : {};
    if (typeof defaults !== 'object' || Array.isArray(defaults)) throw new Error('Invalid default cape grants');
    Object.keys(defaults).forEach(uuid => {
        let ids = defaults[uuid];
        if (!TNK_CAPES.uuidPattern.test(uuid) || !Array.isArray(ids) ||
            ids.some(id => typeof id !== 'string' || !TNK_CAPES.has(index, id))) {
            throw new Error('Invalid default cape grant: ' + uuid);
        }
    });
    let next = JSON.parse(JSON.stringify(db));
    let changed = false;
    Object.keys(defaults).forEach(uuid => {
        let row = next.players [uuid] || { name: roster.names && roster.names [uuid] || uuid, unlocked: [], equipped: '', selected: false };
        let applied = row.defaultGrantsApplied || [];
        if (!Array.isArray(applied) || applied.some(id => typeof id !== 'string')) {
            throw new Error('Invalid applied cape defaults: ' + uuid);
        }
        defaults[uuid].forEach(id => {
            if (applied.indexOf(id) >= 0) return;
            if (row.unlocked.indexOf(id) < 0) {
                if (row.unlocked.length === 0 && !row.selected) row.equipped = id;
                row.unlocked.push(id);
            }
            applied.push(id);
            row.defaultGrantsApplied = applied;
            next.players[uuid] = row;
            changed = true;
        });
    });
    TNK_CAPES.catalogue = config.capes;
    TNK_CAPES.index = index;
    TNK_CAPES.db = db;
    TNK_CAPES.error = '';
    if (changed) TNK_CAPES.save(next);
};

// TNK_CAPES.requireReady: source line 235
TNK_CAPES.requireReady =() => { if (TNK_CAPES.error) throw new Error('Cape data could not be loaded; repair it and run /tnkcape reload. ' + TNK_CAPES.error); };

// TNK_CAPES.requireCape: source line 238
TNK_CAPES.requireCape = id => { TNK_CAPES.requireReady(); if (! TNK_CAPES.has(TNK_CAPES.index, id)) throw new Error('Unknown cape: ' + id); return TNK_CAPES.index [id]; };

// TNK_CAPES.save: source line 243
TNK_CAPES.save = next => { TNK_CAPES.requireReady(); JsonIO.write(TNK_CAPES.backupPath, TNK_CAPES.db); JsonIO.write(TNK_CAPES.playerPath, next); TNK_CAPES.db = next; };

// TNK_CAPES.change: source line 250
TNK_CAPES.change = (uuid, name, id, action) => {
    TNK_CAPES.requireReady();
    if (!TNK_CAPES.uuidPattern.test(uuid)) throw new Error('Use a full player UUID');
    if (action !== 'none') TNK_CAPES.requireCape(id);
    let next = JSON.parse(JSON.stringify(TNK_CAPES.db));
    let row = next.players[uuid] || {name: name || uuid, unlocked: [], equipped: '', selected: false};
    if (name) row.name = name;
    let owned = row.unlocked.indexOf(id);
    if (action === 'grant') {
        if (owned >= 0) return false;
        if (row.unlocked.length === 0 && !row.selected) row.equipped = id;
        row.unlocked.push(id);
    } else if (action === 'revoke') {
        if (owned < 0) return false;
        row.unlocked.splice(owned, 1);
        if (row.equipped === id) { row.equipped = ''; row.selected = true; }
    } else if (action === 'equip') {
        if (owned < 0) throw new Error('You have not unlocked ' + id);
        row.equipped = id; row.selected = true;
    } else if (action === 'none') {
        row.equipped = ''; row.selected = true;
    } else throw new Error('Unknown cape action');
    next.players[uuid] = row;
    TNK_CAPES.save(next);
    return true;
};

// TNK_CAPES.active: source line 276
TNK_CAPES.active = server => {
    let active = {};
    server.getPlayerList().getPlayers().forEach(player => {
        let uuid = String(player.uuid);
        let row = TNK_CAPES.db.players[uuid];
        if (row && row.equipped && row.unlocked.indexOf(row.equipped) >= 0 && TNK_CAPES.has(TNK_CAPES.index, row.equipped)) {
            active[uuid] = row.equipped;
        }
    });
    return active;
};

// TNK_CAPES.sync: source line 287
TNK_CAPES.sync =(server, player) => { if (TNK_CAPES.error) return; player.sendData('tnk:capes', { json: JSON.stringify({ schema: 1, active: TNK_CAPES.active(server) }) }); };

// TNK_CAPES.broadcast: source line 291
TNK_CAPES.broadcast = server => {
    if (TNK_CAPES.error) return;
    let json = JSON.stringify({schema: 1, active: TNK_CAPES.active(server)});
    server.getPlayerList().getPlayers().forEach(player => player.sendData('tnk:capes', {json: json}));
};

// players: source line 296
try { TNK_CAPES.load(); }
catch (error) {
    TNK_CAPES.error = String(error);
    console.error('[TNK Capes] Ownership was not overwritten: ' + error);
}

// players: source line 301
ServerEvents.loaded(event => { TNK_CAPES.server = event.server; TNK_CAPES.broadcast(event.server); });

// players: source line 302
PlayerEvents.loggedIn(event => { let server = event.player.getServer(); server.scheduleInTicks(20,() => TNK_CAPES.broadcast(server)); });

// players: source line 306
PlayerEvents.loggedOut(event => {
    let server = event.player.getServer();
    delete TNK_CAPES.lastRequest[String(event.player.uuid)];
    server.scheduleInTicks(1, () => TNK_CAPES.broadcast(server));
});

// players: source line 311
NetworkEvents.dataReceived('tnk:capes_request', event => {
    let player = event.player, server = player.getServer(), uuid = String(player.uuid);
    let now = server.getTickCount();
    if (TNK_CAPES.has(TNK_CAPES.lastRequest, uuid) && now - TNK_CAPES.lastRequest[uuid] < 20) return;
    TNK_CAPES.lastRequest[uuid] = now;
    TNK_CAPES.sync(server, player);
});

// players: source line 319
ServerEvents.commandRegistry(event => {
    let Commands = event.commands;
    let Words = Java.loadClass('com.mojang.brigadier.arguments.StringArgumentType');
    let Entities = Java.loadClass('net.minecraft.commands.arguments.EntityArgument');
    let reply = (source, text) => source.sendSuccess(Text.of(text), false);
    let run = (context, work) => {
        try { TNK_CAPES.requireReady(); return work(context.getSource()); }
        catch (error) { context.getSource().sendFailure(Text.of(String(error))); return 0; }
    };
    let suggest = (context, builder) => {
        let prefix = String(builder.getRemaining()).toLowerCase();
        if (!TNK_CAPES.error) TNK_CAPES.catalogue.forEach(row => { if (row.id.indexOf(prefix) === 0) builder.suggest(row.id); });
        return builder.buildFuture();
    };
    let root = Commands.literal('tnkcape');
    root.then(Commands.literal('list').executes(context => run(context, source => {
        let uuid = String(source.getPlayerOrException().uuid);
        let row = TNK_CAPES.db.players[uuid] || {unlocked: [], equipped: ''};
        let owned = row.unlocked.filter(id => TNK_CAPES.has(TNK_CAPES.index, id));
        reply(source, 'Your capes: ' + (owned.join(', ') || 'none') + '. Equipped: ' + (row.equipped || 'none') + '.');
        reply(source, 'Use /tnkcape equip <cape> or /tnkcape none.');
        return 1;
    })));
    root.then(Commands.literal('equip').then(Commands.argument('cape', Words.word()).suggests(suggest).executes(context => run(context, source => {
        let player = source.getPlayerOrException(), id = String(Words.getString(context, 'cape'));
        TNK_CAPES.change(String(player.uuid), String(player.getGameProfile().getName()), id, 'equip');
        TNK_CAPES.broadcast(source.getServer());
        reply(source, 'Equipped ' + TNK_CAPES.index[id].name + '.');
        return 1;
    }))));
    root.then(Commands.literal('none').executes(context => run(context, source => {
        let player = source.getPlayerOrException();
        TNK_CAPES.change(String(player.uuid), String(player.getGameProfile().getName()), '', 'none');
        TNK_CAPES.broadcast(source.getServer()); reply(source, 'TNK cape hidden.'); return 1;
    })));
    ['grant', 'revoke'].forEach(action => {
        root.then(Commands.literal(action).requires(source => source.hasPermission(2))
            .then(Commands.argument('players', Entities.players())
                .then(Commands.argument('cape', Words.word()).suggests(suggest).executes(context => run(context, source => {
                    let id = String(Words.getString(context, 'cape'));
                    TNK_CAPES.requireCape(id);
                    let changed = 0;
                    Entities.getPlayers(context, 'players').forEach(player => {
                        if (TNK_CAPES.change(String(player.uuid), String(player.getGameProfile().getName()), id, action)) {
                            changed++;
                            player.tell((action === 'grant' ? 'Cape unlocked: ' : 'Cape removed: ') + TNK_CAPES.index[id].name + '. Use /tnkcape list.');
                        }
                    });
                    TNK_CAPES.broadcast(source.getServer());
                    reply(source, action + ': ' + id + ' (' + changed + ' changed).'); return 1;
                })))));
        root.then(Commands.literal(action + 'uuid').requires(source => source.hasPermission(2))
            .then(Commands.argument('uuid', Words.word())
                .then(Commands.argument('cape', Words.word()).suggests(suggest).executes(context => run(context, source => {
                    let uuid = String(Words.getString(context, 'uuid')).toLowerCase();
                    let id = String(Words.getString(context, 'cape'));
                    let changed = TNK_CAPES.change(uuid, '', id, action);
                    TNK_CAPES.broadcast(source.getServer()); reply(source, action + ': ' + id + ' for ' + uuid + (changed ? '.' : ' (unchanged).')); return 1;
                })))));
    });
    root.then(Commands.literal('reload').requires(source => source.hasPermission(2)).executes(context => {
        try {
            TNK_CAPES.load(); TNK_CAPES.broadcast(context.getSource().getServer());
            reply(context.getSource(), 'Cape catalogue and ownership reloaded. New textures/catalogue entries also need a client restart.'); return 1;
        } catch (error) {
            TNK_CAPES.error = String(error); context.getSource().sendFailure(Text.of(String(error))); return 0;
        }
    }));
    event.register(root);
});

// players: source line 391
ServerEvents.commandRegistry(event => {
    if (event.isForSinglePlayer() || !event.isForMultiPlayer()) return;
    const configPath = 'config/tnk-network.json';
    const logPrefix = '[TNK Network] ';
    let config;
    try {
        config = JSON.parse(String(JsonIO.readString(configPath)));
    } catch (error) {
        console.warn(logPrefix + 'Cannot read ' + configPath + '; commands disabled. ' + error);
        return;
    }
    if (config == null || typeof config.enabled !== 'boolean' || config.enabled !== true) return;
    const role = config.role;
    if (typeof role !== 'string'
            || (role !== 'hub' && role !== 'eu' && role !== 'us' && role !== 'dev')) {
        console.warn(logPrefix + 'Invalid role in ' + configPath + '; commands disabled.');
        return;
    }
    const root = event.dispatcher.getRoot();
    if (root.getChild('transfer') == null) {
        console.warn(logPrefix + 'Vanilla /transfer is unavailable; commands disabled.');
        return;
    }
    const commands = event.commands;
    const registered = [];
    function validHost(host) {
        if (host.length < 1 || host.length > 253) return false;
        const labels = host.split('.');
        for (let i = 0; i < labels.length; i++) {
            if (!/^[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?$/.test(labels[i])) {
                return false;
            }
        }
        if (/^[0-9.]+$/.test(host)) {
            if (labels.length !== 4) return false;
            for (let i = 0; i < labels.length; i++) {
                if (Number(labels[i]) > 255) return false;
            }
        }
        return true;
    }
    function destinationFor(name) {
        const entry = config.destinations && config.destinations[name];
        if (!entry || typeof entry.host !== 'string') return null;
        const host = entry.host.trim();
        const port = entry.port;
        if (!validHost(host) || typeof port !== 'number' || !isFinite(port)
                || Math.floor(port) !== port || port < 1 || port > 65535) {
            return null;
        }
        return { host: host, port: port };
    }
    function registerDestination(name, label, permissionLevel) {
        if (root.getChild(name) != null) {
            console.warn(logPrefix + 'Skipping /' + name + ': that command already exists.');
            return;
        }
        const destination = destinationFor(name);
        if (destination == null) {
            console.warn(logPrefix + '/' + name + ' needs a valid host and numeric port in ' + configPath + '; transfers for this destination are disabled.');
        }
        event.register(commands.literal(name)
            .requires(source => source.getPlayer() != null && source.hasPermission(permissionLevel))
            .executes(ctx => {
                const source = ctx.getSource();
                if (source.getPlayer() == null || !source.hasPermission(permissionLevel)) return 0;
                if (destination == null) {
                    source.sendFailure(Text.of('The ' + label + ' server is not configured yet.'));
                    return 0;
                }
                try {
                    source.getServer().getCommands().performPrefixedCommand(source.withPermission(3), 'transfer "' + destination.host + '" ' + destination.port + ' @s');
                    return 1;
                } catch (error) {
                    console.warn(logPrefix + '/' + name + ' could not start a transfer. ' + error);
                    source.sendFailure(Text.of('Could not start the transfer. Please contact staff.'));
                    return 0;
                }
            })
        );
        registered.push('/' + name);
    }
    if (role === 'hub') {
        registerDestination('eu', 'EU', 0);
        registerDestination('us', 'US', 0);
        registerDestination('dev', 'development', 0);
    } else {
        registerDestination('hub', 'hub', 0);
    }
    if (registered.length > 0) {
        console.info(logPrefix + 'Role ' + role + ': registered ' + registered.join(', ') + '.');
    }
});

