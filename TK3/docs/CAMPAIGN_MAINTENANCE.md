# Chapters 1–10 maintenance

Install the full `kubejs/` and `config/ftbquests/` trees together and restart Minecraft and the server. Startup scripts register 135 components/icons and eleven frame blocks. Chapter and milestone IDs remain stable; internal quest goals have been rewritten. Tool rewards are per-player; chapter unlocks and the first Dragon Core reward are team-based.

The canonical source is `docs/progression_manifest.json`. Run `tools/rebuild_recipes.py`, `tools/format_recipes.py --pack TK3`, `tools/rebuild_player_docs.py`, `tools/rebuild_mod_docs.py`, then `tools/build_handbook.cjs`. The historical `extend_campaign.py` is not an incremental update tool. Item-art regeneration uses `handbook-source/build-mod-assets.py --jars <inspected-jar-directory>`; it reads current KubeJS assets and preserves animated source files.

Native JSON and release provenance are recorded in the manifest. Machine/cell upgrades preserve their serializers and components. The native gas, radiation, Source, multiblock, energy and twelve-eye portal systems remain active. Custom material chemical amounts are per completed operation. The first Source, FE/ME, HDPE and SPS machines precede the materials that need them.

The Dragon kill quest awards its first permanent core. Four later boss cores use player-kill LootJS modifiers. Retained deployments keep the cores in the hand. Other boss loot and encounters remain native. Setup checkmarks confirm player-built automation; they do not measure reactor, farm or flight telemetry.

Checks: `node tools/verify_expansion.cjs`, `node tools/verify_create.cjs`, `python tools/verify_campaign.py --assets <jars>`, `python tools/verify_bootstraps.py`, `python tools/verify_handbook.py`, and `npm run --prefix handbook-source test:models`. These check registration, schemas, construction paths, stages, quests, whitelist enforcement, assets and handbook links. The assembled Minecraft instance has not been launched here. Integration testing must cover the actual addon versions, native gas quantities, Source generation, reactor operation, Curios restrictions and ships.
