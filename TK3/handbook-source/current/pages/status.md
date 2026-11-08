# Snapshot & sources

This is the **8 November 2026 development reference**, not a newly announced public TNK3 release. The supplied TNK3 manifest has an empty pack-version field; the wiki does not invent a release number.

## Evidence used

| Source | What it establishes |
|---|---|
| Uploaded TNK3 export | Base manifest, configs, skill data and inherited quest export |
| Full KubeJS package, revision 61 | Current production recipes, assets, JEI cleanup and Ponder Collection 1.3 |
| Supplied twenty mod JARs | Reference versions for the installed integration families |
| TNK Progression 1.2.0-private.1 and its notes | Twenty implemented origins, current UI and compatibility rules |
| Workshop 0.11.10 and integration source | Trading Hub behavior and merged Ponder compatibility |
| TK2 3.05 client archive | Actual previous manifest, scripts and quest records |
| Current project decisions | Quest grouping, optional exploration and removal of the old planner |

The sources are cumulative. The older export's bundled custom JARs and recipes are not silently treated as newer than the separate updates.

## Count things consistently

| Reference | Count |
|---|---:|
| Current production chapters | 10 |
| Configured skill nodes | 588 |
| New-character origins | 20 |
| Authored Ponder lessons | 97 |
| Base TNK3 manifest projects | 283 |
| TK2 3.05 manifest projects | 323 |
| Current KubeJS runtime files | 92 |

Manifest entries include libraries, shaders and resource packs. They are not a count of gameplay mods or loaded mod IDs.

The inherited TNK3 export has **1240 records in 24 chapter files**, versus **1241 in 24** for TK2. These similar counts reflect migration material, not completion of the new questbook. The old website's 353-quest generated campaign is also superseded.

## What still needs a combined beta build

- A complete quest export with current task text, rewards and title/progression triggers.
- A single release manifest pairing newer custom mods, configs and the current scripts.
- Confirmation of the final terrain presets and curated biome exclusions.
- Full client/server launch and gameplay checks across the selected combination.
- Live multiplayer validation of Trading Hub claims, travel and shop interactions.

The old Alchemical Lasers 0.1.0 in the base export does not have the Growth Lens required by current recipes. Old loot JAR/config revisions also require alignment. These are packaging checks, not problems solved by changing wiki text.

## Reproducible reference

[Download snapshot metadata](../assets/data/snapshot.json) · [Current manifest](../assets/data/tnk3-manifest.json) · [TK2 manifest](../assets/data/tk2-manifest.json) · [Full inventory comparison](../assets/data/inventory.json)

Every primary archive/JAR has a SHA-256 in the snapshot metadata. The wiki build validates its local links, source counts, current chapter route and archived-page preservation. Those are documentation checks; they do not launch Minecraft.
