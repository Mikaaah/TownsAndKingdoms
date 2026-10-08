# Skill tree v4.6.0

**Current source:** `TK3/kubejs/server_scripts/TK3_SkillTree.js`. The package builds one connected tree with **1,801 nodes**, **1,800 graph edges**, and a unique coordinate for every node on a **120 × 120 grid**. Layout fingerprint: `4f6e469f`.

## Character paths

- **Six classes:** warrior, ranger, rogue, mage, cleric, occultist. Choose one class and one subclass.
- **Eighteen subclasses:** berserker, weapon_master, juggernaut, marksman, hunter, beastmaster, assassin, duelist, shadowblade, elementalist, arcanist, battlemage, priest, crusader, oracle, blood_mage, necromancer, voidcaller.
- **Eight professions:** mining, logging, hunting, exploration, fishing, farming, crafting, alchemy. Profession masteries and focus counts are unrestricted; all choices use the same point pool.
- **Six wildcard constellations:** daredevil, bulwark, fortune_seeker, bloodbound, arcane_dabbler, jack_of_all_trades.
- **Eight shared constellations** support every character.

Every skill costs one point. The design recommends a **150-point cap**, so players trade off class depth, subclass depth, professions, wildcards, and extra shared nodes. The cap is a design recommendation; the source script does not enforce a server cap.

## Unlock rules and point planning

One class is selected. A subclass opens after Advanced class Rank IV. Profession mastery unlocks at branch Rank IV. Subclass Ascendancy follows Rank VIII commitments; Ranks IX–XVI stay available as optional deep specialization.

A signature class-and-subclass route with shared entry costs about **89 points**. Full progression through the chosen class and subclass is about **133 points**. Three profession masteries add **45 points**, so that full combat path plus three professions is about **178 points**, beyond the recommended cap. These are source-script planning estimates.

## Build and validate layout

Open the [Skilltree Builder](https://mikaaah.github.io/TownsAndKingdoms/skilltree-builder/). It loads the generated node graph and current KubeJS template, lets you search and filter, drag nodes to unused grid cells, and exports both a layout JSON and a runtime script with an updated layout fingerprint. Keep node IDs and graph rules intact; changing a layout only changes coordinates.

The included `handbook-source/data/skilltree-v4.6.json` is extracted node data. Run the tree source after editing and validate in the game before shipping.

## Current data

Classes: warrior, ranger, rogue, mage, cleric, occultist. Subclasses: berserker, weapon_master, juggernaut, marksman, hunter, beastmaster, assassin, duelist, shadowblade, elementalist, arcanist, battlemage, priest, crusader, oracle, blood_mage, necromancer, voidcaller. Professions: mining, logging, hunting, exploration, fishing, farming, crafting, alchemy. Wildcards: daredevil, bulwark, fortune_seeker, bloodbound, arcane_dabbler, jack_of_all_trades. The previous v3.2.2/v3.2.3 planning text is historical.

[Progression stages](Progression-v2.md)
