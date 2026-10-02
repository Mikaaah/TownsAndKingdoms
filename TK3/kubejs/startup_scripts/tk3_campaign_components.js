// Full restart required: chapters 6–10 registry additions.
StartupEvents.registry("item", event => {
    event.create("tk3_network_mechanism").displayName("Network Mechanism").texture("kubejs:item/locomotive_mechanism");
    event.create("tk3_incomplete_network_mechanism").displayName("Incomplete Network Mechanism").texture("kubejs:item/incomplete_locomotive_mechanism");
    event.create("tk3_expedition_mechanism").displayName("Expedition Mechanism").texture("kubejs:item/locomotive_mechanism");
    event.create("tk3_incomplete_expedition_mechanism").displayName("Incomplete Expedition Mechanism").texture("kubejs:item/incomplete_locomotive_mechanism");
    event.create("tk3_containment_mechanism").displayName("Containment Mechanism").texture("kubejs:item/locomotive_mechanism");
    event.create("tk3_incomplete_containment_mechanism").displayName("Incomplete Containment Mechanism").texture("kubejs:item/incomplete_locomotive_mechanism");
    event.create("tk3_singularity_mechanism").displayName("Singularity Mechanism").texture("kubejs:item/locomotive_mechanism");
    event.create("tk3_incomplete_singularity_mechanism").displayName("Incomplete Singularity Mechanism").texture("kubejs:item/incomplete_locomotive_mechanism");
    event.create("tk3_sovereign_mechanism").displayName("Sovereign Mechanism").texture("kubejs:item/locomotive_mechanism");
    event.create("tk3_incomplete_sovereign_mechanism").displayName("Incomplete Sovereign Mechanism").texture("kubejs:item/incomplete_locomotive_mechanism");
    event.create("tk3_verdant_sigil").displayName("Verdant Sigil").texture("minecraft:item/emerald");
    event.create("tk3_storm_core").displayName("Storm Core").texture("minecraft:item/heart_of_the_sea");
    event.create("tk3_ember_core").displayName("Ember Core").texture("minecraft:item/blaze_powder");
    event.create("tk3_void_core").displayName("Void Core").texture("minecraft:item/ender_eye");
    event.create("tk3_sovereign_keystone").displayName("Sovereign Keystone").texture("minecraft:item/nether_star");
    event.create("tk3_incomplete_sovereign_keystone").displayName("Incomplete Sovereign Keystone").texture("kubejs:item/incomplete_locomotive_mechanism");
});
