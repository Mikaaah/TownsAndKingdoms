// priority: -100
// TNK3 | Deferred Angel Ring and Immersive Engineering integrations
// Minecraft 1.21.1 / NeoForge / KubeJS 2101. Full restart required.

// postInit runs after mod construction and registration; do not eagerly load APIs.

// Angel Ring crafting bounds
StartupEvents.postInit(event => {
    if (!Platform.isLoaded('create') || !Platform.isLoaded('angelring')) return;
    const Pattern = Java.loadClass('net.minecraft.world.item.crafting.ShapedRecipePattern');
    Pattern.setCraftingSize(11, 9);

});

// IE multiblock matching
StartupEvents.postInit(event => {
    if (!Platform.isLoaded('immersiveengineering') || !Platform.isLoaded('create')) return;
    if (global.tnkIEPipeMatcherRegistered) return;

    const Matcher = Java.loadClass('blusunrize.immersiveengineering.api.multiblocks.BlockMatcher');
    const Registries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    Matcher.addPreprocessor((expected, found, world, pos) => {
        let expectedId = String(Registries.BLOCK.getKey(expected.getBlock()));
        let foundId = String(Registries.BLOCK.getKey(found.getBlock()));
        if (
            expectedId === foundId &&
            (expectedId === 'create:fluid_pipe' || expectedId === 'kubejs:tk3_heavy_engineering_machine')
        ) {
            return expected;
        }
        return found;
    });
    global.tnkIEPipeMatcherRegistered = true;

});
