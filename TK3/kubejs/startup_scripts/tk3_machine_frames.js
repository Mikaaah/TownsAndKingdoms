// Full restart required. Parent models use a separate path to avoid generated-model cycles.
StartupEvents.registry("block", event => {
    event.create("tk3_rotation_machine")
        .displayName("Rotation Machine")
        .hardness(4)
        .resistance(8)
        .parentModel("kubejs:block/tk3_frames/tk3_rotation_machine");
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
});
