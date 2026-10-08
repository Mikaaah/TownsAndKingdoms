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

The current prerequisite-cost verifier counts **61 points** to each class gate and **89 points** to each subclass Ascendancy goal. These totals include required nodes, count shared prerequisites once, and treat the starting origin as free. They are useful route-planning totals; the recommended **150-point** budget is not enforced by the game.

## Plan before you spend

Open the [Skilltree Planner](https://mikaaah.github.io/TownsAndKingdoms/skilltree-planner/). Choose one class and at most one matching subclass, then add the skills you want as goals. The planner follows every learned-skill prerequisite, counts shared prerequisites once, treats the starting point as free, and shows a prerequisite-first purchase order.

Profession and focus picks have no separate limit; they draw from the same point pool. Plans autosave in your browser. Download or load a JSON plan, copy a share link, or print your purchase order. The 150-point target is recommended and editable; the game script does not enforce it.

The planner reads the published node and bonus data. It does not change the tree layout or KubeJS definitions.

## Current data

Classes: warrior, ranger, rogue, mage, cleric, occultist. Subclasses: berserker, weapon_master, juggernaut, marksman, hunter, beastmaster, assassin, duelist, shadowblade, elementalist, arcanist, battlemage, priest, crusader, oracle, blood_mage, necromancer, voidcaller. Professions: mining, logging, hunting, exploration, fishing, farming, crafting, alchemy. Wildcards: daredevil, bulwark, fortune_seeker, bloodbound, arcane_dabbler, jack_of_all_trades. The previous v3.2.2/v3.2.3 planning text is historical.

[Progression stages](Progression-v2.md)
