// priority: 0
// TNK3 | Recipe-viewer entries, categories, scrolls and batch maintenance.

// jei cleanup
(() => {
    if (!Platform.isLoaded('jei')) return;
    let policy;

    RecipeViewerEvents.removeEntries('item', event => {
        if (!policy) {
            policy = JSON.parse(String(JsonIO.readString('kubejs/pack_data/jei.json'))).cleanup;
            if (!policy || policy.format !== 1) throw new Error('[TNK JEI] Invalid jei_cleanup.json');
        }
        policy.hiddenItems.forEach(id => {
            if (Item.exists(id)) event.remove(id);
        });
    });

    RecipeViewerEvents.removeCategories(event => {
        if (!policy) {
            policy = JSON.parse(String(JsonIO.readString('kubejs/pack_data/jei.json'))).cleanup;
            if (!policy || policy.format !== 1) throw new Error('[TNK JEI] Invalid jei_cleanup.json');
        }
        // KubeJS silently ignores category IDs absent from this installation.
        event.remove(policy.hiddenCategories);
    });

    RecipeViewerEvents.removeRecipes(event => {
        if (!policy) {
            policy = JSON.parse(String(JsonIO.readString('kubejs/pack_data/jei.json'))).cleanup;
            if (!policy || policy.format !== 1) throw new Error('[TNK JEI] Invalid jei_cleanup.json');
        }
        if (!policy.hideToolTrimApplications) return;
        let Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
        let level = Minecraft.getInstance().level;
        if (level === null) return;
        let RecipeType = Java.loadClass('net.minecraft.world.item.crafting.RecipeType');
        let hidden = [];
        // Read actual synced recipes. No mod-ID check: Tool Trims can also be
        // installed as a data pack. Old 2.x table recipes and other namespaces
        // are untouched. The native 3.x template-copying recipes also stay.
        level.getRecipeManager().getAllRecipesFor(RecipeType.SMITHING).forEach(holder => {
            let id = String(holder.id());
            if (id.startsWith('tooltrims:trimming/')) hidden.push(id);
        });
        if (hidden.length) event.removeFromCategory('minecraft:smithing', hidden);
        console.info('[TNK JEI] Hidden ' + hidden.length + ' cosmetic Tool Trims smithing recipes.');
    });
})();

// legacy blocks
RecipeViewerEvents.removeEntries('item', event => {
    global.TNK_CONTENT.legacyHiddenItems.forEach(id => event.remove(id));
});

// native create materials
RecipeViewerEvents.addEntries('item', event => {
    event.add(global.TNK_CONTENT.nativeCreateMaterials);
});

// scroll automation info
(() => {
    if (!Platform.isLoaded('jei') || !Platform.isLoaded('irons_spellbooks')) return;

    RecipeViewerEvents.removeEntries('item', event => {
        let Container = Java.loadClass('io.redspace.ironsspellbooks.api.spells.ISpellContainer');
        let hidden = 0;

        event.remove(stack => {
            // Inspect only native scrolls, including those holding addon spells.
            if (String(stack.id) !== 'irons_spellbooks:scroll') return false;
            let container = Container.get(stack);
            if (container === null || container.isEmpty()) return false;
            let data = container.getSpellAtIndex(0);
            let spell = data.getSpell();
            if (spell === null) return false;

            // Keep each spell's actual first level, rather than assuming level 1.
            if (data.getLevel() <= spell.getMinLevel()) return false;
            hidden++;
            return true;
        });

        console.info('[TNK JEI] Hidden ' + hidden + ' extra spell-scroll level entries.');
    });
})();


// Hide only the maintenance recipes for old surrogate items. All real batch
// items and their actual production/finishing recipes remain visible in JEI.
(() => {
    if (!Platform.isLoaded('jei')) return;
    RecipeViewerEvents.removeEntries('item', event => {
        if (!global.TNK_BATCH_ITEMS) return;
        global.TNK_BATCH_ITEMS.entries.forEach(entry => {
            let output = entry.output;
            if (!output) return;
            let available = output.charAt(0) === '#'
                ? Ingredient.of(output).itemIds.toArray().length > 0 : Item.exists(output);
            if (!available) event.remove(entry.id);
        });
    });
    RecipeViewerEvents.removeRecipes(event => {
        if (!global.TNK_BATCH_ITEMS) return;
        let batches = global.TNK_BATCH_ITEMS;
        event.removeFromCategory('minecraft:crafting',
            batches.entries.map(entry => batches.legacyRecipeId(entry)));
    });
})();
