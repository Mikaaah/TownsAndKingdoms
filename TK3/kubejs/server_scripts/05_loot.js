// priority: 1300
// TNK3 | loot

// Canonical material drops
if (Platform.isLoaded('lootjs')) {
    LootJS.modifiers(event => {
        const modifier = event.addTableModifier(/.*/);
        Object.keys(TNK_UNIFY.aliases).forEach(old => modifier.replaceLoot(old, TNK_UNIFY.aliases[old], true));
    });
}

// Retired Immersive Engineering items and fluid buckets
LootJS.modifiers(event => {
    let scope = TNK_LOOT_SCOPES["compat_automation_108_1"];
    let CONFIG = scope.CONFIG;
    let DISABLED_ITEMS = scope.DISABLED_ITEMS;
    let BUCKET_ALIASES = scope.BUCKET_ALIASES;
    let itemId = scope.itemId;
    let modifier = event.addTableModifier(/.*/);
    DISABLED_ITEMS.forEach(id => { if (Item.exists(id)) modifier.removeLoot(id); });
    if (CONFIG.convertLegacyLoot) {
        Object.keys(BUCKET_ALIASES).forEach(id => { if (Item.exists(id)) modifier.replaceLoot(id, itemId(id), true); });
    }
});

// Disabled AE2 machines
LootJS.modifiers(event => {
    let scope = TNK_LOOT_SCOPES["compat_automation_33452_1"];
    let config = scope.config;
    let loot = event.addTableModifier(/.*/);
    config.disabledMachines.forEach(id => loot.removeLoot(id));
});

// Disabled entries in native loot tables
LootJS.lootTables(event => {
    const blocked = tnkCleanupExisting(TNK_CLEANUP.fullyRemoved.concat(TNK_CLEANUP.removeLootItems));
    if (blocked.length > 0) {
        let tables = event.modifyLootTables(/.*/);
        blocked.forEach(id => tables.removeItem(id));
    }
    TNK_CLEANUP.removeLootFromTables.forEach(rule => {
        if (!event.hasLootTable(rule.table)) return;
        const table = event.getLootTable(rule.table);
        rule.items.forEach(id => table.removeItem(id));
    });
});

// Disabled entries in rolled loot
LootJS.modifiers(event => {
    const blocked = tnkCleanupExisting(TNK_CLEANUP.fullyRemoved.concat(TNK_CLEANUP.removeLootItems));
    if (blocked.length > 0) {
        let allLoot = event.addTableModifier(/.*/);
        blocked.forEach(id => allLoot.removeLoot(id));
    }
    TNK_CLEANUP.removeLootFromTables.forEach(rule => { const tableLoot = event.addTableModifier(rule.table); rule.items.forEach(id => tableLoot.removeLoot(id)); });
});

// Blocked potion variants
LootJS.modifiers(event => {
    let scope = TNK_LOOT_SCOPES["restrictions_5753_1"];
    let flightEnabled = scope.flightEnabled;
    let potionFilters = scope.potionFilters;
    if (!flightEnabled) return;
    const modifier = event.addTableModifier(/.*/);
    potionFilters().forEach(filter => modifier.removeLoot(filter));
});

// End Remastered boss eyes
LootJS.modifiers(event => {
    let scope = TNK_LOOT_SCOPES["gameplay_6444_1"];
    let drops = scope.drops;
    drops.forEach(row => { event.addEntityModifier(row [1]).removeLoot(row [0]).addLoot(row [0]); });
});
