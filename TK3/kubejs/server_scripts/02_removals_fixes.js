// priority: 1800
// TNK3 | removals fixes

// progression: source line 7
function addChapterMachines(event, tier) {
    TNK_MACHINE_RULES.forEach(row => { if (row.tier === tier) event.custom(row.recipe).id(row.recipe_id); });
}

// progression: source line 14
let TNK_MACHINE_RULES = [];

// TNK_RECIPES.prepareMachines: source line 15
TNK_RECIPES.prepareMachines = event => {
    let rules = JsonIO.read('kubejs/pack_data/machine_recipes.json');
    if (!rules || !rules.recipes) throw new Error('[TNK Machines] Missing machine_recipes.json');
    TNK_MACHINE_RULES = rules.recipes.filter(row => {
        const missing = row.requires.filter(id => !Item.exists(id));
        if (missing.length)
            console.warn('[TNK Machines] Skipped ' + row.recipe_id + '; missing: ' + missing.join(', '));
        return missing.length === 0;
    });
    event.forEachRecipe({ type: 'create:item_application' }, recipe => {
        let json = JSON.parse(recipe.json.toString());
        let outputs = json.results || [];
        let casingsOnly = outputs.length > 0 && outputs.every(result => { let output = result.id || result.item || ''; return output.endsWith('_casing'); });
        if (!casingsOnly) event.remove({ id: String(recipe.getId()) });
    });
    let removed = { }, outputs = new Set();
    TNK_MACHINE_RULES.forEach(row => {
        if (row.remove_output) outputs.add(row.output);
        row.remove_ids.forEach(id => { if (! removed [id]) { event.remove({ id: id }); removed [id] = true; } });
    });
    const blockedOutputs = [];
    outputs.forEach(id => blockedOutputs.push(id));
    if (blockedOutputs.length) event.remove({ output: blockedOutputs });
};

// processing: source line 367
const TNK_PROCESSING_POLICY = { millingChanged: [], crushingChanged: [], skipped: [] };

// TNK_RECIPES.processingPolicy: source line 368
TNK_RECIPES.processingPolicy = event => {
    let UnknownRecipe = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.UnknownKubeRecipe');
    TNK_PROCESSING_POLICY.millingChanged = [];
    TNK_PROCESSING_POLICY.crushingChanged = [];
    TNK_PROCESSING_POLICY.skipped = [];
    let visit = (type, action) => {
        event.forEachRecipe({ type: type }, action);
        event.addedRecipes.forEach(recipe => { if (recipe.removed) return; if (String(recipe.json.get('type').getAsString()) !== type) return; recipe.serialize(); action(recipe); });
    };
    visit('create:milling', recipe => {
        if (recipe.creationError || recipe instanceof UnknownRecipe) {
            TNK_PROCESSING_POLICY.skipped.push(String(recipe.id));
            return;
        }
        let json = JSON.parse(recipe.json.toString());
        if (!json.results || !json.results.length) return;
        let primary = json.results[0].id;
        if (!primary || !Item.exists(primary)) return;
        let results = json.results.filter(output => output.id === primary);
        if (results.length === json.results.length) return;
        recipe.merge({ results: results });
        TNK_PROCESSING_POLICY.millingChanged.push(String(recipe.id));
    });
    visit('create:crushing', recipe => {
        if (recipe.creationError || recipe instanceof UnknownRecipe) {
            TNK_PROCESSING_POLICY.skipped.push(String(recipe.id));
            return;
        }
        let recipeId = String(recipe.id);
        if (recipeId === 'tnk:chapter_09/crushing/paintball') return;
        let json = JSON.parse(recipe.json.toString());
        if (!json.results || !json.results.length) return;
        if (
            !json.results.every(
                output =>
                    output && typeof output.id === 'string' && Item.exists(output.id) && output.amount === undefined
            )
        )
            return;
        let results = json.results.filter((x, index) => index === 0 || x.id !== 'create:experience_nugget');
        if (results.length >= 9) {
            console.warn('[TNK XP] No free output slot; preserved ' + recipeId);
            return;
        }
        results.push({ id: 'create:experience_nugget', chance: 0.1 });
        if (JSON.stringify(results) !== JSON.stringify(json.results)) recipe.merge({ results: results });
        TNK_PROCESSING_POLICY.crushingChanged.push(recipeId);
    });
    console.info(
        '[TNK Processing] Primary-only milling: ' +
            TNK_PROCESSING_POLICY.millingChanged.length +
            '; crushing XP: ' +
            TNK_PROCESSING_POLICY.crushingChanged.length +
            '; preserved unknown serializers: ' +
            TNK_PROCESSING_POLICY.skipped.length
    );
};

// processing: source line 457
ServerEvents.recipes(event => {
    if (!Platform.isLoaded('create')) return;
    event.remove({ id: 'kubejs:qol/washing/mud_to_clay' });
    event.smoking('minecraft:clay', 'minecraft:mud', 0, 100).id('kubejs:qol/smoking/mud_to_clay');
});

// compat: source line 5
const TNK_MOD_COMPAT = { plans: [], eligibility: {}, ids: new Set() };

// TNK_MOD_COMPAT.active: source line 6
TNK_MOD_COMPAT.active = plan => plan.enabled !== false && Platform.isLoaded(plan.mod);

// TNK_MOD_COMPAT.register: source line 7
TNK_MOD_COMPAT.register = plan => {
    plan.recipes.forEach(row => {
        if (TNK_MOD_COMPAT.ids.has(row.recipe_id))
            throw new Error('[TNK Compat] Duplicate recipe ID: ' + row.recipe_id);
        TNK_MOD_COMPAT.ids.add(row.recipe_id);
    });
    TNK_MOD_COMPAT.plans.push(plan);
};

// TNK_MOD_COMPAT.missing: source line 15
TNK_MOD_COMPAT.missing = row => {
    const items = new Set([row.output].concat(row.requires || []));
    function visit(value) {
        if (!value || typeof value !== 'object') return;
        if (Array.isArray(value)) {
            value.forEach(visit);
            return;
        }
        Object.keys(value).forEach(key => {
            if (key === 'components' || key === 'neoforge:conditions') return;
            const child = value[key];
            if ((key === 'item' || key === 'items') && typeof child === 'string') items.add(child);
            else visit(child);
        });
    }
    visit(row.recipe);
    const missing = [];
    items.forEach(id => { if (! Item.exists(id)) missing.push(id); });
    return missing;
};

// TNK_TAGS.compatibility: source line 37
TNK_TAGS.compatibility = (event, registry) => {
    TNK_MOD_COMPAT.plans.forEach(plan => {
        if (!TNK_MOD_COMPAT.active(plan)) return;
        const tags = registry === 'item' ? plan.itemTags : plan.blockTags;
        Object.keys(tags || { }).forEach(tag => { const values = tags [tag].filter(id => registry !== 'item' || Item.exists(id)); if (values.length) event.add(tag, values); });
    });
};

// compat: source line 47
const compatibilityCatalog = JSON.parse(String(JsonIO.readString('kubejs/pack_data/compat_recipes.json')));

// compat: source line 48
if (!compatibilityCatalog || compatibilityCatalog.format !== 1 || !Array.isArray(compatibilityCatalog.plans)) {
    throw new Error('[TNK Compat] Invalid compat_recipes.json');
}

// compat: source line 51
compatibilityCatalog.plans.forEach(plan => TNK_MOD_COMPAT.register(plan));

// TNK_RECIPES.compatibility: source line 52
TNK_RECIPES.compatibility = event => {
    TNK_MOD_COMPAT.plans.forEach(plan => {
        if (!TNK_MOD_COMPAT.active(plan)) return;
        plan.recipes.forEach(row => { if (TNK_MOD_COMPAT.eligibility [row.recipe_id] !== true) return; event.custom(JSON.parse(JSON.stringify(row.recipe))).id(row.recipe_id); });
    });
};

// TNK_RECIPES.prepareCompatibility: source line 61
TNK_RECIPES.prepareCompatibility = event => {
    const removed = new Set(), outputs = new Set(), nativeIds = new Set();
    TNK_MOD_COMPAT.eligibility = {};
    event.forEachRecipe({}, recipe => nativeIds.add(String(recipe.getId())));
    TNK_MOD_COMPAT.plans.forEach(plan => {
        if (!TNK_MOD_COMPAT.active(plan)) return;
        plan.recipes.forEach(row => {
            const missing = TNK_MOD_COMPAT.missing(row);
            const allowed = missing.length === 0 && (row.require_native || []).every(id => nativeIds.has(id));
            TNK_MOD_COMPAT.eligibility[row.recipe_id] = allowed;
            if (missing.length)
                console.warn('[TNK Compat] Skipped ' + row.recipe_id + '; missing: ' + missing.join(', '));
            if (!allowed) return;
            if (row.remove_output) outputs.add(row.output);
            (row.remove_ids || []).forEach(id => { if (! removed.has(id)) { event.remove({ id: id }); removed.add(id); } });
        });
    });
    const blockedOutputs = [];
    outputs.forEach(id => blockedOutputs.push(id));
    if (blockedOutputs.length) event.remove({ output: blockedOutputs });
};

// TNK_RECIPES.angelRing: source line 91
TNK_RECIPES.angelRing = event => {
    if (!Item.exists('angelring:angel_ring')) return;
    const recipe = tnkServerTable("compat_recipe_93");
    const missing = Object.keys(recipe.key).map(symbol => recipe.key [symbol].item).filter(id => ! Item.exists(id));
    if (missing.length) {
        console.warn('[TNK Angel Ring] Missing recipe ingredients: ' + missing.join(', '));
        return;
    }
    event.remove({ output: 'angelring:angel_ring' });
    event.custom(recipe).id('tnk:compat/angelring/arcane_wings');
};

// compat: source line 106
(() => {
    const recipes = tnkServerTable("compat_recipes_162");
    ServerEvents.generateData('after_mods', event => {
        if (!['createdeco', 'create'].every(mod => Platform.isLoaded(mod))) return;
        recipes.forEach(row => event.json(row.resource, row.recipe));
    });
})();

// compat: source line 115
(() => {
    const recipes = tnkServerTable("compat_recipes_192");
    ServerEvents.generateData('after_mods', event => {
        if (!['hybrid_delights', 'farm_and_charm', 'hybrid_aquatic'].every(mod => Platform.isLoaded(mod))) return;
        recipes.forEach(row => event.json(row.resource, row.recipe));
    });
})();

// compat: source line 124
(() => {
    const recipes = tnkServerTable("compat_recipes_639");
    ServerEvents.generateData('after_mods', event => {
        if (!['witchery'].every(mod => Platform.isLoaded(mod))) return;
        recipes.forEach(row => event.json(row.resource, row.recipe));
    });
})();

// compat: source line 140
(() => {
    const variants = ['rubberworks:rubber', 'rubberworks:rubber_sheet', 'rubberworks:rubber_block', 'rubberworks:rubber_sheet_block'];
    TNK_TAGS.rubber = event => {
        variants.filter(id => Item.exists(id)).forEach(id => event.removeAllTagsFrom(id));
        ['c:rubber', 'c:rubbers', 'c:rubber_sheets'].forEach(tag => event.add(tag, 'kubejs:rubber'));
    };
    TNK_RECIPES.rubberLogistics = event => {
        variants.filter(id => Item.exists(id)).forEach(id => event.remove({ output: id }));
        ['rubberworks:rubber', 'rubberworks:rubber_sheet'].filter(id => Item.exists(id)).forEach(id => event.replaceInput({ }, id, 'kubejs:rubber'));
        ['rubberworks:rubber_block', 'rubberworks:rubber_sheet_block'].filter(id => Item.exists(id)).forEach(id => event.remove({ input: id }));
        event.remove({ output: 'create:andesite_funnel' });
        event.shaped('2x create:andesite_funnel', ['A', 'K'], { A: 'create:andesite_alloy', K: 'minecraft:dried_kelp' }).id('tnk:logistics/crafting/andesite_funnel');
        event.remove({ output: 'create:andesite_tunnel' });
        event.shaped('2x create:andesite_tunnel', ['AA', 'KK'], { A: 'create:andesite_alloy', K: 'minecraft:dried_kelp' }).id('tnk:logistics/crafting/andesite_tunnel');
        event.remove({ output: 'create:belt_connector' });
        event.shaped('3x create:belt_connector', ['RRR'], { R: 'kubejs:rubber' }).id('tnk:logistics/crafting/belt_from_rubber');
        event.shaped('create:belt_connector', ['KKK'], { K: 'minecraft:dried_kelp' }).id('tnk:logistics/crafting/belt_from_dried_kelp');
    };
})();

// TNK_RECIPES.laserUtilities: source line 189
TNK_RECIPES.laserUtilities = event => {
    event.forEachRecipe({ type: 'alchemicallaser:laser_processing' }, recipe => {
        let j = JSON.parse(recipe.json.toString());
        let out = j.result && (j.result.id || j.result.item);
        if (
            out === 'minecraft:quartz' ||
            out === 'minecraft:crying_obsidian' ||
            (out === 'minecraft:sponge' && j.lens === 'alchemicallaser:power_lens')
        )
            event.remove({ id: String(recipe.id) });
    });
    const routes = tnkServerTable("compat_routes_759");
    routes.forEach(r => {
        if (!Item.exists(r[2]) || !Item.exists(r[4])) return;
        event
            .custom({
                type: 'alchemicallaser:laser_processing',
                ingredient: { item: r[2] },
                input_count: r[3],
                lens: 'alchemicallaser:' + r[0] + '_lens',
                result: { id: r[4], count: r[5] },
                duration: 120,
                minimum_rpm: 32
            })
            .id('tnk:laser_qol/' + r[0] + '/' + r[1]);
    });
};

// TNK_RECIPES.createAddition: source line 219
TNK_RECIPES.createAddition = event => {
    event.forEachRecipe({ type: 'createaddition:charging' }, recipe => {
        let j = JSON.parse(recipe.json.toString());
        if ((j.results || []).some(out => String(out.id || out.item || '').indexOf('electrum') >= 0))
            event.remove({ id: String(recipe.id) });
    });
};

// compat automation: source line 1913
(() => {
    let type = 'alexscaves:nuclear_furnace';
    let specials = tnkServerTable("compat_automation_specials_2543");
    TNK_RECIPES.nuclearFurnace = event => {
        if (!Platform.isLoaded('alexscaves')) return;
        let Mod = Java.loadClass('com.github.alexmodguy.alexscaves.AlexsCaves');
        let config = Mod.COMMON_CONFIG;
        if (String(config.nuclearFurnaceCustomType.get()) !== 'true') {
            console.warn(
                '[TNK Nuclear Furnace] Dedicated recipes are inactive. Set ' +
                    '[block-behavior] nuclear_furnace_custom_type=true in ' +
                    'config/alexscaves-general.toml on client and server, then restart. ' +
                    'No config was changed by this script.'
            );
            return;
        }
        let blastOnly = String(config.nuclearFurnaceBlastingOnly.get()) === 'true';
        let sourceType = blastOnly ? 'minecraft:blasting' : 'minecraft:smelting';
        let imported = 0, skipped = 0, added = 0, seen = new Set();
        let existingCustom = new Set();
        let signature = ingredient => JSON.stringify(ingredient);
        function rememberCustom(recipe) {
            if (recipe.removed) return;
            let json = JSON.parse(recipe.json.toString());
            if (json.type === type && json.ingredient) existingCustom.add(signature(json.ingredient));
        }
        event.forEachRecipe({ type: type }, rememberCustom);
        event.addedRecipes.forEach(rememberCustom);
        specials.forEach(row => {
            if (!Item.exists(row[1]) || !Item.exists(row[2])) return;
            let ingredient = { item: row[1] };
            if (existingCustom.has(signature(ingredient))) {
                console.warn('[TNK Nuclear Furnace] Preserved existing dedicated recipe for ' + row[1]);
                return;
            }
            event
                .custom({ type: type, category: 'misc', ingredient: ingredient, result: { id: row [2], count: row [3] }, experience: 0, cookingtime: row [4] })
                .id('tnk:nuclear_furnace/special/' + row[0]);
            existingCustom.add(signature(ingredient));
            added++;
        });
        function copyCooking(recipe) {
            if (recipe.removed || recipe.creationError) return;
            recipe.serialize();
            let json = JSON.parse(recipe.json.toString());
            if (json.type !== sourceType || !json.ingredient || !json.result) return;
            if (existingCustom.has(signature(json.ingredient))) return;
            let originalId = String(recipe.id);
            if (!originalId || originalId === 'null' || originalId === 'undefined') {
                console.warn('[TNK Nuclear Furnace] Preserved cooking recipe without stable ID.');
                skipped++;
                return;
            }
            if (seen.has(originalId)) return;
            seen.add(originalId);
            json.type = type;
            let time = json.cookingtime === undefined ? (blastOnly ? 100 : 200) : json.cookingtime;
            json.cookingtime = blastOnly ? time : Math.max(1, Math.ceil(time / 2));
            event.custom(json).id('tnk:nuclear_furnace/standard/' + originalId.replace(':', '/'));
            imported++;
        }
        event.forEachRecipe({ type: sourceType }, copyCooking);
        let pending = [];
        event.addedRecipes.forEach(recipe => pending.push(recipe));
        pending.forEach(copyCooking);
        console.info(
            '[TNK Nuclear Furnace] ' +
                added +
                ' special recipes; ' +
                imported +
                ' normal ' +
                sourceType +
                ' routes retained; ' +
                skipped +
                ' unencodable/unstable mirrors skipped; native originals untouched.'
        );
    };
})();

// restrictions: source line 21
ServerEvents.recipes(event => {
    if (!Platform.isLoaded('alexscaves')) return;
    const NuclearBomb = Java.loadClass('com.github.alexmodguy.alexscaves.server.entity.item.NuclearBombEntity');
    NativeEvents.onEvent(Java.loadClass('net.neoforged.neoforge.event.entity.EntityJoinLevelEvent'), event => {
        if (event.getLevel().isClientSide()) return;
        if (event.getEntity() instanceof NuclearBomb) {
            event.setCanceled(true);
        }
    });
});

// restrictions: source line 31
RecipeViewerEvents.removeEntries('item', event => { const hidden = global.TNK_CONTENT.hiddenOnlyItems; hidden.filter(id => Item.exists(id)).forEach(id => event.remove(id)); });

// restrictions: source line 37
const TNK_CLEANUP = {
    infiniteFoods: global.TNK_CONTENT.infiniteFoods,
    fullyRemoved: global.TNK_CONTENT.fullyDisabledItems.slice(),
    removeRecipesById: tnkServerTable("restrictions_removeRecipesById_52"),
    removeLootItems: ['endrem:witch_pupil', 'endrem:undead_soul'],
    removeLootFromTables: tnkServerTable("restrictions_removeLootFromTables_62"),
    apotheosis: tnkServerTable("restrictions_apotheosis_69")
};

// restrictions: source line 47
const TNK_BLOCKED_RUNES = TNK_CLEANUP.apotheosis.blockedSpawnerStats.map(stat => 'apotheosis:' + stat + '_spawner_rune');

// TNK_CLEANUP.fullyRemoved: source line 50
TNK_CLEANUP.fullyRemoved = TNK_CLEANUP.fullyRemoved.concat(TNK_BLOCKED_RUNES, TNK_CLEANUP.infiniteFoods);

// restrictions: source line 52
function tnkCleanupExisting(ids) {
    return ids.filter(id => Item.exists(id));
}

// TNK_RECIPES.restrictedItems: source line 56
TNK_RECIPES.restrictedItems = event => {
    const blocked = tnkCleanupExisting(TNK_CLEANUP.fullyRemoved);
    if (blocked.length) event.remove({ or: [{ output: blocked }, { input: blocked }] });
    TNK_CLEANUP.removeRecipesById.forEach(id => event.remove({ id: id }));
};

// restrictions: source line 65
RecipeViewerEvents.removeEntriesCompletely('item', event => { tnkCleanupExisting(TNK_CLEANUP.fullyRemoved).forEach(id => event.remove(id)); });

// restrictions: source line 70
BlockEvents.placed(event => { if (TNK_CLEANUP.fullyRemoved.indexOf(String(event.block.id)) !== - 1) event.cancel(); });

// restrictions: source line 73
BlockEvents.rightClicked(event => { if (TNK_CLEANUP.fullyRemoved.indexOf(String(event.block.id)) !== - 1) event.cancel(); });

// restrictions: source line 79


// restrictions: source line 97


// restrictions: source line 114
ServerEvents.recipes(event => {
    const blockedFoods = new Set(TNK_CLEANUP.infiniteFoods);
    const blockedDrops = new Set(TNK_CLEANUP.fullyRemoved.concat(TNK_CLEANUP.removeLootItems));
    const ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity');
    NativeEvents.onEvent(Java.loadClass('net.neoforged.neoforge.event.entity.EntityJoinLevelEvent'), event => {
        if (event.getLevel().isClientSide()) return;
        const entity = event.getEntity();
        if (entity instanceof ItemEntity && blockedDrops.has(String(entity.getItem().id))) {
            event.setCanceled(true);
        }
    });
    NativeEvents.onEvent(
        Java.loadClass('net.neoforged.neoforge.event.entity.living.LivingEntityUseItemEvent$Start'),
        event => {
            if (event.getEntity().level.isClientSide()) return;
            if (blockedFoods.has(String(event.getItem().id))) event.setCanceled(true);
        }
    );
});

// restrictions: source line 138
(() => {
    let Applicable, Result;
    function tnkInitPotionRestrictions() {
        if (unusableItems !== undefined) return;
        unusableItems = new Set(tnkCleanupExisting(TNK_CLEANUP.fullyRemoved));
        Components = Java.loadClass('net.minecraft.core.component.DataComponents');
        Applicable = Java.loadClass('net.neoforged.neoforge.event.entity.living.MobEffectEvent$Applicable');
        Result = Java.loadClass('net.neoforged.neoforge.event.entity.living.MobEffectEvent$Applicable$Result');
    }
    const settings = TNK_CLEANUP.apotheosis;
    const stats = new Set(settings.blockedSpawnerStats);
    const bannedPotions = new Set(settings.blockedPotions);
    const flightEnabled = settings.disableFlightPotion && Platform.isLoaded('apothic_attributes');
    function enablesBlockedStat(change) {
        const name = String(change.type || '').split(':').pop();
        if (!stats.has(name)) return false;
        if (name === 'initial_health') {
            if (change.mode === 'set' || change.mode === 'multiply') return Number(change.value) < 1;
            return Number(change.value) < 0;
        }
        if (name === 'echoing') return Number(change.value) > 0;
        return change.value === true;
    }
    function potionFilters() {
        if (!flightEnabled) return [];
        const containers = ['minecraft:potion', 'minecraft:splash_potion', 'minecraft:lingering_potion', 'minecraft:tipped_arrow', 'apotheosis:potion_charm'];
        const result = [];
        tnkCleanupExisting(containers).forEach(id =>
            settings.blockedPotions.forEach(potion => {
                result.push(Ingredient.of(id + '[minecraft:potion_contents={potion:"' + potion + '"}]'));
            })
        );
        return result;
    }
    function hasBlockedPotion(value) {
        if (Array.isArray(value)) return value.some(hasBlockedPotion);
        if (value == null || typeof value !== 'object') return false;
        if (typeof value.potion === 'string' && bannedPotions.has(value.potion)) return true;
        if (
            Array.isArray(value.custom_effects) &&
            value.custom_effects.some(effect => effect.id === settings.blockedFlightEffect)
        )
            return true;
        return Object.keys(value).some(key => hasBlockedPotion(value[key]));
    }
    TNK_RECIPES.restrictedPotions = event => {
        tnkInitPotionRestrictions();
        let removed = 0;
        event.forEachRecipe({ type: 'apothic_spawners:spawner_modifier' }, recipe => {
            recipe.serialize();
            const json = JSON.parse(recipe.json.toString());
            if ((json.stat_changes || []).some(enablesBlockedStat)) {
                recipe.remove();
                removed++;
            }
        });
        const filters = potionFilters();
        if (filters.length) event.remove({ or: [{ output: filters }, { input: filters }] });
        if (flightEnabled) {
            event.forEachRecipe({}, recipe => {
                const text = String(recipe.json.toString());
                if (text.indexOf('apothic_attributes:') >= 0 && hasBlockedPotion(JSON.parse(text))) recipe.remove();
            });
        }
        if (removed > 0) console.info('[TNK Cleanup] Disabled ' + removed + ' overpowered spawner modifier recipes.');
    };
    RecipeViewerEvents.removeEntries('item', event => { tnkInitPotionRestrictions(); potionFilters().forEach(filter => event.remove(filter)); });
    RecipeViewerEvents.removeEntries('fluid', event => {
        tnkInitPotionRestrictions();
        if (!flightEnabled || !Platform.isLoaded('create')) return;
        settings.blockedPotions.forEach(potion => event.remove('create:potion[minecraft:potion_contents={potion:"' + potion + '"}]'));
    });
    TNK_LOOT_SCOPES["restrictions_5753_1"] = { flightEnabled: flightEnabled, potionFilters: potionFilters };
    let unusableItems;
    let Components;
    function holderId(holder) {
        const key = holder.unwrapKey();
        return key.isPresent() ? String(key.get().location()) : '';
    }
    function isFlightStack(stack) {
        if (!flightEnabled || stack.isEmpty()) return false;
        const contents = stack.get(Components.POTION_CONTENTS);
        if (contents == null) return false;
        const potion = contents.potion();
        if (potion.isPresent() && bannedPotions.has(holderId(potion.get()))) return true;
        let blocked = false;
        contents.getAllEffects().forEach(effect => { if (holderId(effect.getEffect()) === settings.blockedFlightEffect) blocked = true; });
        return blocked;
    }
    function blockUse(event) {
        if (event.getLevel().isClientSide()) return;
        const stack = event.getItemStack();
        if (unusableItems.has(String(stack.id)) || isFlightStack(stack)) event.setCanceled(true);
    }
    ServerEvents.recipes(event => { tnkInitPotionRestrictions(); tnkServerTable("restrictions_table_311").forEach(name => NativeEvents.onEvent(Java.loadClass(name), blockUse)); });
    if (!flightEnabled) return;
    ServerEvents.recipes(event => { tnkInitPotionRestrictions();
NativeEvents.onEvent(Java.loadClass('net.neoforged.bus.api.EventPriority').LOWEST, Applicable, event => {
        const effect = event.getEffectInstance();
        if (effect != null && holderId(effect.getEffect()) === settings.blockedFlightEffect) {
            event.setResult(Result.DO_NOT_APPLY);
        }
    });
});
    PlayerEvents.loggedIn(event => {
        tnkInitPotionRestrictions();
        const holders = [];
        event.player.getActiveEffects().forEach(effect => holders.push(effect.getEffect()));
        holders.forEach(holder => { if (holderId(holder) === settings.blockedFlightEffect) event.player.removeEffect(holder); });
    });
})();
