// Minecraft 1.21.1 NeoForge. Full restart required after changing registries.
StartupEvents.registry('item', event => {
  event.create('tk3_rotation_mechanism').displayName("Kinetic Mechanism").texture('kubejs:item/rotation_mechanism');
  event.create('tk3_sealed_mechanism').displayName("Sealed Mechanism").texture('kubejs:item/sealed_mechanism');
  event.create('tk3_arcane_mechanism').displayName("Arcane Mechanism").texture('create:item/precision_mechanism');
  event.create('tk3_incomplete_sealed_mechanism').displayName("Incomplete Sealed Mechanism").texture('kubejs:item/incomplete_sealed_mechanism');
  event.create('tk3_incomplete_rotation_mechanism').displayName("Incomplete Kinetic Mechanism").texture('kubejs:item/incomplete_rotation_mechanism');
  event.create('tk3_incomplete_arcane_mechanism').displayName("Incomplete Arcane Mechanism").texture('kubejs:item/incomplete_locomotive_mechanism');
});
