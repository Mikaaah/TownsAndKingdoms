StartupEvents.registry("block", event => {
    event.create("tk3_network_chassis").displayName("Network Chassis").hardness(4).resistance(8).parentModel("create:block/brass_casing");
    event.create("tk3_expedition_frame").displayName("Expedition Frame").hardness(4).resistance(8).parentModel("ars_nouveau:block/sourcestone");
    event.create("tk3_containment_frame").displayName("Containment Frame").hardness(4).resistance(8).parentModel("create:block/copper_casing");
    event.create("tk3_singularity_frame").displayName("Singularity Frame").hardness(4).resistance(8).parentModel("create:block/brass_casing");
    event.create("tk3_sovereign_core").displayName("Sovereign Core").hardness(4).resistance(8).parentModel("ars_nouveau:block/sourcestone");
});
