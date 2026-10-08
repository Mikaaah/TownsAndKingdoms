// T&K3 boss/catalyst loot support.
// Production mechanisms use reusable tinted lens catalysts created from real boss drops; the old
// verdant/storm/ember/void/dragon core pseudo-items are no longer registered.
LootJS.modifiers(event => {
    event.addEntityModifier("minecraft:ender_dragon")
        .killedByPlayer()
        .addLoot(LootEntry.of("minecraft:dragon_head"));
});
