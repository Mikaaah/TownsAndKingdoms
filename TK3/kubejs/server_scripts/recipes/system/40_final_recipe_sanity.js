// priority: -40000
// Final canonical recipe sanity pass; renamed without z-prefix ordering hack.
ServerEvents.recipes(event => {
    //->------------------------] Canonical mechanism cleanup [------------------------<-//

    // Old generator-era mechanism recipes. The authoritative recipes live under
    // kubejs:tk3/mechanisms/* in the progression/gap-closure layer.
    [
        'kubejs:tk3/tier_1/rotation_mechanism_automated',
        'kubejs:tk3/tier_2/tk3_sealed_mechanism',
        'kubejs:tk3/tier_3/precision_mechanism',
        'kubejs:tk3/campaign/containment_mechanism',
        'kubejs:tk3/campaign/singularity_mechanism',
        'kubejs:tk3/campaign/sovereign_mechanism'
    ].forEach(id => event.remove({ id: id }));

    //->------------------------] Tier 1 resource chain / Clay [------------------------<-//

    // Canonical renewable Clay route:
    //   Cobblestone -> Gravel -> Sand -> Splashing -> Clay Ball
    // Andesite remains an Andesite Alloy resource; it is not a Clay source.
    // Mud -> Clay is also suppressed so JEI shows one intentional automation path.
    event.remove({ id: 'kubejs:tk3/geology/milling_andesite' });
    event.remove({ id: 'kubejs:tk3/geology/crushing_andesite' });
    event.remove({ id: 'kubejs:tk3/compat/mud_clay' });
});
