StartupEvents.registry('block', event => {
  event.create("tk3_kinetic_machine").displayName("Kinetic Machine").hardness(3).resistance(6).parentModel("create:block/andesite_casing");
  event.create("tk3_hydraulic_machine").displayName("Hydraulic Machine").hardness(3).resistance(6).parentModel("create:block/copper_casing");
  event.create("tk3_precision_machine").displayName("Precision Machine").hardness(3).resistance(6).parentModel("create:block/brass_casing");
  event.create("tk3_arcane_machine").displayName("Arcane Machine").hardness(3).resistance(6).parentModel("ars_nouveau:block/sourcestone");
});
