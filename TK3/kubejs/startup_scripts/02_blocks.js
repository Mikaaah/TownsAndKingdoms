// priority: 0
// TNK3 | Block registrations
// Minecraft 1.21.1 / NeoForge / KubeJS 2101. Full restart required.

// Calculation machine
StartupEvents.registry('block', event => {
    let particle = 'ae2:block/inscriber';
    event
        .create('calculation_machine', 'cardinal')
        .displayName('Calculation Machine')
        .hardness(4)
        .resistance(8)
        .soundType('metal')
        .requiresTool(true)
        .tagBlock('minecraft:mineable/pickaxe')
        .renderType('cutout')
        .notSolid()
        .opaque(false)
        .suffocating(false)
        .viewBlocking(false)
        .noValidSpawns(true)
        .textures({ side: particle, front: particle, top: particle, bottom: particle, particle: particle })
        .parentModel('kubejs:block/tk3_frames/tk3_calculation_machine');
});

// Pack blocks
StartupEvents.registry('block', event => {
    // [block ID, texture resource, display name]
    const blocks = [
        [
            'andesite_alloy_polished_block',
            'kubejs:block/andesite_alloy_polished_block',
            'Andesite Alloy Polished Block'
        ],
        ['blaze_gold_block', 'kubejs:block/blaze_gold_block', 'Blaze Gold Block'],
        ['blaze_gold_casing', 'kubejs:block/blaze_gold_casing', 'Blaze Gold Casing'],
        ['bronze_block', 'kubejs:block/bronze_block', 'Bronze Block'],
        ['bronze_casing', 'kubejs:block/bronze_casing', 'Bronze Casing'],
        ['chromatic_block', 'kubejs:block/chromatic_block', 'Chromatic Block'],
        ['ember_alloy_block', 'kubejs:block/ember_alloy_block', 'Ember Alloy Block'],
        ['enderium_casing', 'kubejs:block/enderium_casing', 'Enderium Casing'],
        ['hydraulic_casing', 'kubejs:block/hydraulic_casing', 'Hydraulic Casing'],
        ['industrial_casing', 'kubejs:block/industrial_casing', 'Industrial Casing'],
        ['lapis_alloy_block', 'kubejs:block/lapis_alloy_block', 'Lapis Alloy Block'],
        ['mithril_block', 'kubejs:block/mithril_block', 'Mithril Block'],
        ['mithril_casing', 'kubejs:block/mithril_casing', 'Mithril Casing'],
        ['overburden_casing', 'kubejs:block/overburden_casing', 'Overburden Casing'],
        ['overcharged_alloy_block', 'kubejs:block/overcharged_alloy_block', 'Overcharged Alloy Block'],
        ['overcharged_casing', 'kubejs:block/overcharged_casing', 'Overcharged Casing'],
        ['refined_radiance_block', 'kubejs:block/refined_radiance_block', 'Refined Radiance Block'],
        ['runic_catalyst', 'kubejs:block/runic_catalyst', 'Runic Catalyst'],
        ['shadow_steel_block', 'kubejs:block/shadow_steel_block', 'Shadow Steel Block'],
        ['singularity_block', 'kubejs:block/singularity_block', 'Singularity Block'],
        ['stargaze_singularity_block', 'kubejs:block/stargaze_singularity_block', 'Stargaze Singularity Block'],
        ['stargaze_singularity_casing', 'kubejs:block/stargaze_singularity_casing', 'Stargaze Singularity Casing'],
        ['steel_casing', 'kubejs:block/steel_casing', 'Steel Casing'],
        ['tin_block', 'kubejs:block/tin_block', 'Tin Block'],
        ['tin_casing', 'kubejs:block/tin_casing', 'Tin Casing'],
        ['zinc_casing', 'kubejs:block/zinc_casing', 'Zinc Casing']
    ];
    blocks.forEach(entry => {
        const block = event
            .create(entry[0])
            .displayName(entry[2])
            .soundType('metal')
            .hardness(3.0)
            .resistance(6.0)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .fullBlock(true);
        if (entry[0] === 'enderium_casing') {
            block.parentModel('kubejs:block/custom/enderium_casing');
        } else {
            block.texture(entry[1]);
        }
    });

    // Active tier machines are registered once in content.js. The unused
    // historical variants retain their blocks for saves, with no crafting routes.
    ['enderium_machine', 'obsidian_machine', 'zinc_machine'].forEach(id => {
        event
            .create(id)
            .displayName(
                id
                    .split('_')
                    .map(w => w.charAt(0).toUpperCase() + w.slice(1))
                    .join(' ')
            )
            .soundType('metal')
            .hardness(3)
            .resistance(6)
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .parentModel('kubejs:block/custom/' + id)
            .defaultCutout()
            .opaque(false);
    });
});

// Endgame catalyst
StartupEvents.registry('block', event => {
    event.create('ore_generator_catalyst')
        .displayName('Creation Ore Catalyst').hardness(6).resistance(1200)
        .requiresTool(true).tagBlock('minecraft:mineable/pickaxe')
        .renderType('cutout').opaque(false)
        .textures({all: 'kubejs:block/runic_catalyst'})
        .parentModel('kubejs:block/endgame/ore_generator_catalyst');
});

// Tier machine frames
StartupEvents.registry('block', event => {
    const machines = [
        ['tk3_rotation_machine', 'Andesite Machine', 'create:block/andesite_casing'],
        ['tk3_hydraulic_machine', 'Copper Machine', 'create:block/copper_casing'],
        ['tk3_precision_machine', 'Brass Machine', 'create:block/brass_casing'],
        [
            'tk3_engineering_machine',
            'Light Engineering Machine',
            'immersiveengineering:block/metal_decoration/light_engineering'
        ],
        ['tk3_heavy_engineering_machine', 'Heavy Engineering Machine', 'create:block/industrial_iron_block'],
        ['tk3_creation_machine', 'Creation Machine', 'create:block/creative_casing']
    ];

    machines.forEach(machine => {
        const id = machine[0];
        const particle = machine[2];
        const builder = event
            .create(id, 'cardinal')
            .displayName(machine[1])
            .hardness(4)
            .resistance(8)
            .soundType('metal')
            .requiresTool(true)
            .tagBlock('minecraft:mineable/pickaxe')
            .renderType('cutout')
            .notSolid()
            .opaque(false)
            .suffocating(false)
            .viewBlocking(false)
            .noValidSpawns(true)
            // Explicit defaults also prevent dangling generated texture references.
            .textures({ side: particle, front: particle, top: particle, bottom: particle, particle: particle })
            // This MUST be a different path from the generated block model.
            .parentModel('kubejs:block/tk3_frames/' + id);
        if (id === 'tk3_creation_machine') {
            // The existing client particle listener needs a ticking block entity.
            // Only this block ticks, on the client, once every five ticks.
            builder.blockEntity(info => {
                info.clientTicking();
                info.tickFrequency(5);
            });
        }
    });
});

