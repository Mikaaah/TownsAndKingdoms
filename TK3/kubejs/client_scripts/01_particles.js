// priority: 0
// TNK3 | Creation-machine client particles.
// Java classes are first accessed from the block-entity tick callback.

// creation particles
const TK3_CREATION_COLORS = [
    [0.28002, 0.19559, 0.64763],
    [0.70478, 0.44825, 0.81234],
    [0.69363, 0.54585, 0.83221],
    [0.67266, 0.36515, 0.66746],
    [0.78735, 0.47169, 0.72236],
    [0.86098, 0.40145, 0.59903],
    [0.75325, 0.2393, 0.40366],
    [0.70408, 0.16709, 0.15025],
    [0.8727, 0.45697, 0.47874],
    [0.81163, 0.51857, 0.3544],
    [0.83785, 0.37603, 0.01498],
    [0.86684, 0.47865, 0.09694],
    [0.90597, 0.7076, 0.15576],
    [0.87861, 0.70804, 0.30267],
    [0.32871, 0.69112, 0.18735],
    [0.21749, 0.73941, 0.38048],
    [0.4234, 0.6531, 0.49703],
    [0.48209, 0.81569, 0.73827],
    [0.4371, 0.84019, 0.79705],
    [0.5362, 0.76444, 0.90447],
    [0.42697, 0.66156, 0.88376],
    [0.39467, 0.55492, 0.77255],
    [0.32716, 0.53866, 0.63825],
    [0.24071, 0.4048, 0.74096]
];

BlockEvents.blockEntityTick('kubejs:tk3_creation_machine', event => {
    const $TK3Dust = Java.loadClass('net.minecraft.core.particles.DustParticleOptions');
    const $TK3ParticleTypes = Java.loadClass('net.minecraft.core.particles.ParticleTypes');
    const $TK3Vector3f = Java.loadClass('org.joml.Vector3f');
    const $TK3Minecraft = Java.loadClass('net.minecraft.client.Minecraft');
    const level = event.getLevel();
    const block = event.getBlock();
    const x = block.getX() + 0.5;
    const y = block.getY();
    const z = block.getZ() + 0.5;
    const player = $TK3Minecraft.getInstance().player;
    if (player == null || player.distanceToSqr(x, y + 0.8, z) > 1024) return;
    const tick = Number(level.getGameTime());
    const phase = (((tick % 192) + 192) % 192) / 8;
    const index = Math.floor(phase),
        blend = phase - index;
    const a = TK3_CREATION_COLORS[index],
        b = TK3_CREATION_COLORS[(index + 1) % 24];
    const rgb = a.map((value, i) => value + (b[i] - value) * blend);
    const dust = new $TK3Dust(new $TK3Vector3f(rgb[0], rgb[1], rgb[2]), 0.45);
    const cycle = Math.floor(tick / 5);
    for (let i = 0; i < 3; i++) {
        let angle = cycle * 0.61 + (i * Math.PI * 2) / 3;
        let radius = 0.22 + 0.035 * Math.sin(cycle * 0.47 + i);
        let dx = Math.cos(angle),
            dz = Math.sin(angle);
        let height = 0.64 + ((cycle + i * 3) % 8) * 0.043;
        level.addParticle(dust, x + radius * dx, y + height, z + radius * dz, dx * 0.002, 0.006, dz * 0.002);
    }
    if (cycle % 3 === 0) {
        let angle = cycle * 0.73;
        level.addParticle(
            $TK3ParticleTypes.END_ROD,
            x + Math.cos(angle) * 0.18,
            y + 0.8,
            z + Math.sin(angle) * 0.18,
            0,
            0.004,
            0
        );
    }
});

