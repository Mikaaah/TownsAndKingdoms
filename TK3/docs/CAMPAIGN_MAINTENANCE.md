# Campaign and runtime maintenance

## Current runtime package · 6 October 2026

The fixed runtime package is under kubejs/. It has 1,788 unique explicit recipe IDs, ten tier scripts, 40 compatibility modules, 214 custom item registrations, three machine-frame blocks, 14 stage milestone links, nine tier gates, five catalyst lens variants, and skill tree v4.6.0.

Run python3 tools/verify_runtime_v2.py to check script syntax, JSON, recipe ID uniqueness, stage links against the canonical questbook, compatibility count, item registration totals, and skilltree layout data. The source check does not replace a Minecraft client/server boot or in-game progression test.

- [Runtime overview](KUBEJS_RUNTIME_V2.md)
- [Recipes, progression, and stages](PROGRESSION_RUNTIME_V2.md)
- [Custom items](CUSTOM_ITEMS_RUNTIME_V2.md)
- [Catalyst lenses](CATALYST_LENSES_RUNTIME_V2.md)
- [Compatibility](COMPAT_RUNTIME_V2.md)
- [Skill tree v4.6.0](SKILLTREE_V4.6.0.md)

---

# Chapters 1–10 maintenance

Install the full `kubejs/` and `config/ftbquests/` trees together and restart Minecraft and the server. Startup scripts register 135 components/icons and eleven frame blocks. Chapter and milestone IDs remain stable; internal quest goals have been rewritten. Tool rewards are per-player; chapter unlocks and the first Dragon Core reward are team-based.

The canonical source is `docs/progression_manifest.json`. Its `chapters` remain the ten progression chapters; `guide_chapters` contains 27 supporting pages. `quest_groups` owns the sidebar categories. For quest edits run `tools/rebuild_quests.py`, `tools/verify_questbook.py`, then `node tools/build_handbook.cjs`. The runtime writer mirrors English text into native FTB 1.21.1 translation keys and inline compatibility fields; edit the canonical text rather than only one generated copy. The theme overrides merge with the bundled FTB theme. Tag names are stored without the selector’s `#` prefix, matching the inspected FTB source.

Recipe editing uses `tools/rebuild_recipes.py` and `tools/format_recipes.py --pack TK3`. Historical seed tools (`expand_questbook.py`, `extend_campaign.py`) recreate their authored content and are not incremental edit tools. Full documentation seed scripts can overwrite independently edited handbook content; regenerate only the intended content. Item-art regeneration uses `handbook-source/build-mod-assets.py --jars <inspected-jar-directory>`; it reads current KubeJS assets and preserves animated source files.

Native JSON and release provenance are recorded in the manifest. Machine/cell upgrades preserve their serializers and components. The native gas, radiation, Source, multiblock, energy and twelve-eye portal systems remain active. Custom material chemical amounts are per completed operation. The first Source, FE/ME, HDPE and SPS machines precede the materials that need them.

The Dragon kill quest awards its first permanent core. Four later boss cores use player-kill LootJS modifiers. Retained deployments keep the cores in the hand. Other boss loot and encounters remain native. Setup checkmarks confirm player-built automation; they do not measure reactor, farm or flight telemetry.

Checks: `node tools/verify_expansion.cjs`, `node tools/verify_create.cjs`, `python tools/verify_campaign.py --assets <jars>`, `python tools/verify_bootstraps.py`, `python tools/verify_handbook.py`, and `npm run --prefix handbook-source test:models`. These check registration, schemas, construction paths, stages, quests, whitelist enforcement, assets and handbook links. The assembled Minecraft instance has not been launched here. Integration testing must cover the actual addon versions, native gas quantities, Source generation, reactor operation, Curios restrictions and ships.

The questbook expansion adds 238 optional reading/item/activity quests, without rewards, commands or new progression gates. All 115 existing campaign quest IDs, milestone IDs and reward IDs are preserved. Source references and coverage are in `QUESTBOOK_SOURCES_EN.md`; the full alpha selection used for guide authoring is `questbook_mod_selection.json`. `verify_questbook.py` checks all 37 chapter files, translations, ID uniqueness, asset IDs, dependencies, tier restrictions and distinct layout positions. In-game review is still needed for zoom, fonts, tooltips and native integrations.
