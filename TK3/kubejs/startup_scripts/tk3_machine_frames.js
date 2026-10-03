// Full restart required. Parent models use a separate path to avoid generated-model cycles.
StartupEvents.registry("block", event => {
    event.create("tk3_kinetic_machine")
        .displayName("Kinetic Machine")
        .hardness(4)
        .resistance(8)
        .parentModel("kubejs:block/tk3_frames/tk3_kinetic_machine");
    event.create("tk3_hydraulic_machine")
        .displayName("Hydraulic Machine")
        .hardness(4)
        .resistance(8)
        .parentModel("kubejs:block/tk3_frames/tk3_hydraulic_machine");
    event.create("tk3_precision_machine")
        .displayName("Precision Machine")
        .hardness(4)
        .resistance(8)
        .parentModel("kubejs:block/tk3_frames/tk3_precision_machine");
    event.create("tk3_network_chassis")
        .displayName("Inductive Machine")
        .hardness(4)
        .resistance(8)
        .parentModel("kubejs:block/tk3_frames/tk3_network_chassis");
    event.create("tk3_ender_machine")
        .displayName("Ender Machine")
        .hardness(4)
        .resistance(8)
        .parentModel("kubejs:block/tk3_frames/tk3_ender_machine");
    event.create("tk3_chemical_machine")
        .displayName("Chemical Machine")
        .hardness(4)
        .resistance(8)
        .parentModel("kubejs:block/tk3_frames/tk3_chemical_machine");
    event.create("tk3_expedition_frame")
        .displayName("Expedition Frame")
        .hardness(4)
        .resistance(8)
        .parentModel("kubejs:block/tk3_frames/tk3_expedition_frame");
    event.create("tk3_containment_frame")
        .displayName("Containment Frame")
        .hardness(4)
        .resistance(8)
        .parentModel("kubejs:block/tk3_frames/tk3_containment_frame");
    event.create("tk3_singularity_frame")
        .displayName("Singularity Frame")
        .hardness(4)
        .resistance(8)
        .parentModel("kubejs:block/tk3_frames/tk3_singularity_frame");
    event.create("tk3_sovereign_core")
        .displayName("Sovereign Core")
        .hardness(4)
        .resistance(8)
        .parentModel("kubejs:block/tk3_frames/tk3_sovereign_core");
    event.create("tk3_arcane_machine")
        .displayName("Arcane Machine")
        .hardness(4)
        .resistance(8)
        .parentModel("kubejs:block/tk3_frames/tk3_arcane_machine");
});
