// priority: 100
// TNK3 | Item modifications, registry aliases and creative tabs
// Minecraft 1.21.1 / NeoForge / KubeJS 2101. Full restart required.

ItemEvents.modification(event => {
    event.modify('ae2:certus_quartz_wrench', item => {
        item.maxStackSize = 1;
        item.maxDamage = 256;
        item.damage = 0;
    });
});

ItemEvents.modification(event => {
    event.modify('kubejs:boot_drive', item => {
        item.maxStackSize = 1;
        item.maxDamage = 1000;
        item.damage = 0;
    });
});

ItemEvents.modification(event => {
    event.modify('immersiveengineering:screwdriver', item => {
        item.maxStackSize = 1;
        item.maxDamage = 256;
        item.damage = 0;
    });
});

StartupEvents.postInit(event => {
    let Reg = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
    let RL = Java.loadClass('net.minecraft.resources.ResourceLocation');
    let aliases = {
        'kubejs:iron_tube': 'kubejs:empty_tube',
        'kubejs:cinder_dust': 'create:cinder_flour',
        'kubejs:ward_blend': 'architects_palette:wardstone_blend',
        'kubejs:amethyst_bulb': 'kubejs:amethyst_tube',
        'kubejs:boot_medium': 'kubejs:boot_drive',
        'kubejs:creative_core': 'kubejs:creation_core',
        'kubejs:singularity_gem': 'kubejs:unstable_creation_gem',
        'kubejs:unstable_creative_core': 'kubejs:unstable_creation_core',
        'kubejs:part_electronic_amethyst_gate': 'kubejs:amethyst_circuit_gate',
        'kubejs:stargaze_singularity': 'kubejs:stargaze_alloy',
        'kubejs:incomplete_stargaze_singularity': 'kubejs:incomplete_stargaze_alloy',
        'kubejs:stargaze_singularity_sheet': 'kubejs:stargaze_alloy_sheet',
        'kubejs:radiant_obsidian': 'kubejs:refined_shadow_alloy',
        'kubejs:integrated_mechanism': 'create:precision_mechanism',
        'kubejs:incomplete_integrated_mechanism': 'create:incomplete_precision_mechanism',
        'kubejs:mechanism_integrated_circuit': 'kubejs:integrated_circuit',
        'kubejs:mechanism_incomplete_integrated_circuit': 'kubejs:incomplete_integrated_circuit',
        // These two old item families still occur in the supplied legacy quests.
        'kubejs:steel_mechanism': 'kubejs:reinforced_mechanism',
        'kubejs:incomplete_steel_mechanism': 'kubejs:incomplete_reinforced_mechanism',
        'kubejs:abstruse_mechanism': 'kubejs:arcane_mechanism',
        'kubejs:incomplete_abstruse_mechanism': 'kubejs:incomplete_arcane_mechanism'
    };
    aliases['kubejs:incomplete_locomotive_mechanism'] = 'kubejs:incomplete_reinforced_mechanism';
    aliases['kubejs:locomotive_mechanism'] = 'kubejs:reinforced_mechanism';
    aliases['kubejs:chromatic_compound'] = 'create:chromatic_compound';
    aliases['kubejs:refined_radiance'] = 'create:refined_radiance';
    aliases['kubejs:shadow_steel'] = 'create:shadow_steel';
    aliases['kubejs:copper_machine'] = 'kubejs:tk3_hydraulic_machine';
    aliases['kubejs:brass_machine'] = 'kubejs:tk3_precision_machine';
    aliases['kubejs:andesite_machine'] = 'kubejs:tk3_rotation_machine';
    // Migrate the removed, unintended starter block to the real Andesite Machine.
    aliases['kubejs:kinetic_machine'] = 'kubejs:tk3_rotation_machine';
    aliases['kubejs:tk3_calculation_machine'] = 'kubejs:calculation_machine';
    aliases['kubejs:refined_radiance_sheet'] = 'kubejs:radiant_sheet';
    aliases['kubejs:industrial_iron_block'] = 'create:industrial_iron_block';
    aliases['kubejs:steel_block'] = 'immersiveengineering:storage_steel';
    aliases['kubejs:refined_radiance_casing'] = 'create:refined_radiance_casing';
    aliases['kubejs:shadow_steel_casing'] = 'create:shadow_steel_casing';
    Object.keys(aliases).forEach(old => Reg.ITEM.addAlias(RL.parse(old), RL.parse(aliases[old])));
    let blockAliases = {
        'kubejs:copper_machine': 'kubejs:tk3_hydraulic_machine',
        'kubejs:brass_machine': 'kubejs:tk3_precision_machine',
        'kubejs:andesite_machine': 'kubejs:tk3_rotation_machine',
        'kubejs:tk3_calculation_machine': 'kubejs:calculation_machine',
        'kubejs:industrial_iron_block': 'create:industrial_iron_block',
        'kubejs:steel_block': 'immersiveengineering:storage_steel',
        'kubejs:refined_radiance_casing': 'create:refined_radiance_casing',
        'kubejs:shadow_steel_casing': 'create:shadow_steel_casing'
    };
    blockAliases['kubejs:kinetic_machine'] = 'kubejs:tk3_rotation_machine';
    Object.keys(blockAliases).forEach(old => Reg.BLOCK.addAlias(RL.parse(old), RL.parse(blockAliases[old])));
});

StartupEvents.modifyCreativeTab('create:base', event => {
    event.add(global.TNK_CONTENT.nativeCreateMaterials);
});

StartupEvents.modifyCreativeTab('kubejs:tab', event => {
    global.TNK_CONTENT.legacyHiddenItems.forEach(id => event.remove(id));
});

