// Native NeoForge lava/water placement. No tick scanner, global coordinate cache or forced chunks.
(function() {
    const FluidPlacement = Java.loadClass(
        'net.neoforged.neoforge.event.level.BlockEvent$FluidPlaceBlockEvent');
    const Registries = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    const selectors = [{
        "lens": "minecraft:polished_andesite",
        "frame": "kubejs:tk3_rotation_machine",
        "stone": "minecraft:andesite"
    }, {
        "lens": "minecraft:quartz_block",
        "frame": "kubejs:tk3_rotation_machine",
        "stone": "minecraft:diorite"
    }, {
        "lens": "minecraft:bricks",
        "frame": "kubejs:tk3_rotation_machine",
        "stone": "minecraft:granite"
    }, {
        "lens": "minecraft:calcite",
        "frame": "kubejs:tk3_rotation_machine",
        "stone": "create:limestone"
    }, {
        "lens": "minecraft:netherrack",
        "frame": "kubejs:tk3_precision_machine",
        "stone": "create:scoria"
    }, {
        "lens": "minecraft:blackstone",
        "frame": "kubejs:tk3_precision_machine",
        "stone": "create:scorchia"
    }, {
        "lens": "minecraft:copper_block",
        "frame": "kubejs:tk3_hydraulic_machine",
        "stone": "create:veridium"
    }, {
        "lens": "minecraft:iron_block",
        "frame": "kubejs:tk3_hydraulic_machine",
        "stone": "create:crimsite"
    }, {
        "lens": "create:zinc_block",
        "frame": "kubejs:tk3_precision_machine",
        "stone": "create:asurine"
    }, {
        "lens": "minecraft:gold_block",
        "frame": "kubejs:tk3_precision_machine",
        "stone": "create:ochrum"
    }, {
        "lens": "minecraft:quartz_block",
        "frame": "mekanism:steel_casing",
        "stone": "mekanism:osmium_ore"
    }, {
        "lens": "minecraft:copper_block",
        "frame": "mekanism:steel_casing",
        "stone": "mekanism:tin_ore"
    }, {
        "lens": "minecraft:iron_block",
        "frame": "mekanism:steel_casing",
        "stone": "mekanism:lead_ore"
    }, {
        "lens": "minecraft:glowstone",
        "frame": "mekanism:steel_casing",
        "stone": "mekanism:uranium_ore"
    }, {
        "lens": "minecraft:calcite",
        "frame": "mekanism:steel_casing",
        "stone": "mekanism:fluorite_ore"
    }, {
        "lens": "minecraft:nether_bricks",
        "frame": "kubejs:tk3_precision_machine",
        "stone": "minecraft:netherrack"
    }, {
        "lens": "minecraft:polished_blackstone",
        "frame": "kubejs:tk3_precision_machine",
        "stone": "minecraft:blackstone"
    }];

    function id(state) {
        return String(Registries.BLOCK.getKey(state.getBlock()));
    }
    NativeEvents.onEvent(FluidPlacement, event => {
        const level = event.getLevel();
        if (level.getServer() == null || event.isCanceled()) return;
        const generated = id(event.getNewState());
        if (generated !== 'minecraft:cobblestone' && generated !== 'minecraft:stone')
            return;
        const pos = event.getPos();
        const lens = id(level.getBlockState(pos.below()));
        const frame = id(level.getBlockState(pos.below(2)));
        selectors.forEach(entry => {
            if (entry.lens === lens && entry.frame === frame) {
                event.setNewState(Block.getBlock(entry.stone)
                    .defaultBlockState());
            }
        });
    });
})();
