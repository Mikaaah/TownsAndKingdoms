# Chapters 1–10 maintenance

Player docs: PLAYER_PATHS_EN.md and MOD_TIER_MAP_EN.md. Recipe grouping follows RECIPE_SCRIPT_STYLE.md.

New registry scripts require a **full client/server restart**. Install the supplied startup scripts, assets, recipe/loot/stage scripts and all ten chapter files together. Existing chapter I–V quest and milestone IDs are retained; new optional branches add their own stable IDs. Existing milestone V now unlocks VI. FTB chapter progression is team-based; named tool claims are per player.

Native recipe JSON is mirrored from inspected 1.21.1 jar resources. Construction changes ingredient keys while preserving data-aware serializers. Native chemical-only operations, resources, multiblock rules and portal puzzle logic are not replaced by cheap recipes. A final allowlist removes unapproved native and later-injected recipes for controlled item outputs; resource processing cleanup is scoped by type and input so normal ingot-to-dust processing survives.

Boss core loot uses the confirmed LootJS modifier API. Kill quests provide a guaranteed first reward; repeated player kills provide more production capacity. Retained deployments explicitly use keepHeldItem. Setup checkmarks are manual confirmations, not reactor / farm / flight telemetry.

Run `node tools/verify_expansion.cjs`, `node tools/verify_create.cjs`, `python tools/verify_campaign.py`, and the handbook rebuild checks. These are authoring checks; the assembled Minecraft client/server has not been run here. Pin all exact jars and test NativeEvents, AStages placement/Curios behaviour, source/mana handling, multiblocks, ship claims and the chemical chains in the assembled instance.

The native recipe mirror and source provenance are stored in progression_manifest.json. `extend_campaign.py` is an authoring migration from the chapters 1–5 baseline, not a game startup generator; do not run it over an already extended pack. Use the approved IDs for incremental changes and run format_recipes.py afterwards.

Create tool wear was checked against the upstream BeltDeployerCallbacks implementation: damageable held tools use hurtAndBreak; keepHeldItem skips that consumption path.
