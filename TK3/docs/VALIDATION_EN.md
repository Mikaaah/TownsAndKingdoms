# Validation

## Checks completed

The authoring harness registers 788 unique recipes through the explicit API surface. Item inputs and outputs exist in the reviewed registry or are registered by this package; Architect’s Palette is the required addition. Native fluid IDs were checked against ProbeJS.

All 81 quests have unique IDs and an acyclic dependency graph. The final whitelist removes simulated native and injected alloy alternatives while retaining every approved recipe. Processing checks remove an unwanted veridium route and preserve native ingot-to-iron-dust conversion.

All ten generator selectors, missing foundations, cancellation, client-side and obsidian guards were checked. Four custom items and four frame blocks are registered. Team unlock and offline-member login synchronisation pass; tier 6 remains reserved.

Sophisticated wrapper structures were compared with the native recipe/source serializers that copy components. This does not yet prove filled-inventory preservation in the running game.

## Live test checklist

1. Install Architect’s Palette, fully restart a clean instance and check KubeJS/JEI for errors. Inspect every frame and mechanism for missing textures or models.
2. Play the manual tier-1 route without commands, then automate the mechanisms and frames. Check material costs, yields and stress capacity.
3. Run Sealed, Hydraulic, Precision and Precision Machine sequences for one loop each. Check transitional-item handling when multiple assemblies share the line.
4. Supply the first sealant basin with a bucket before crafting a pump.
5. Test all ten generators in real lava/water layouts, including drill collection and chunk unload/reload. Decorative stone variants must not yield full minerals.
6. Test mod woods with and without stripped variants: six planks, bamboo three. Check native crafting and colony acceptance.
7. Generate native Source before Arcane Mechanisms/frames; test apparatus, runes, Wizardry Mana, cauldron brewing and bottling.
8. Test team Wilden kill credit, the retained Tribute, first FE bootstrap, six raw-metal doubling routes and both steel routes.
9. Upgrade filled Sophisticated containers/backpacks. Check contents, UUIDs, filters and stack settings, adjacent tier tokens and both stack upgrades.
10. Check machine gifts, dungeon loot, preplaced machines, fake players, contraptions and already installed backpack upgrades before stage access. Existing inventories are not sanitised by this package.
11. Reload with other current scripts and Recipe Linkage/compat addons. Check that no removed alloy or storage shortcut reappears.
12. Verify that the motor/alternator energy round trip cannot create power. Review native addon configurations.
13. Keep AE2 and higher machines locked until tier 6. Test the prepared recipes separately with an admin-granted stage.
14. Review FTB Quests layout, text and task behaviour. Reset stages separately for a fresh playtest.

## What remains unproven

No running Minecraft instance was available. Real serializers, fluid-placement events, models, filled-container component preservation, fake-player enforcement, multiplayer kill credit and economic balance remain live-test requirements.

This is a statically checked development package. Chapters 6+, advanced chemistry, power scaling, loot sanitisation and later boss/gear progression remain future work.

Run `node tools/verify_expansion.cjs` to repeat the authoring checks. The registry snapshot belongs to the 1 October mod export; update it and ProbeJS when the stack changes.

## Assembly revision

The harness checks four unique transitional items, two separate kinetic alloy deployments, final held tools without keepHeldItem, casing-plus-one-mechanism frame recipes and five personal Unbreakable component rewards. It also checks stable milestone dependencies and reward ID uniqueness. These are authoring checks; actual durability and multiplayer claiming still require Minecraft testing.
