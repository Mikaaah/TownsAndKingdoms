// Player kills award permanent catalysts.
LootJS.modifiers(event => {
    event.addEntityModifier("twilightforest:lich")
        .killedByPlayer()
        .addLoot(LootEntry.of("kubejs:tk3_verdant_sigil"));
    event.addEntityModifier("cataclysm:the_harbinger")
        .killedByPlayer()
        .addLoot(LootEntry.of("kubejs:tk3_storm_core"));
    event.addEntityModifier("cataclysm:ignis")
        .killedByPlayer()
        .addLoot(LootEntry.of("kubejs:tk3_ember_core"));
    event.addEntityModifier("cataclysm:ender_guardian")
        .killedByPlayer()
        .addLoot(LootEntry.of("kubejs:tk3_void_core"));
});
