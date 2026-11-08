# Beta 1.0: files and sources

**Towns & Kingdoms 3 — Beyond the Forge · Beta 1.0 · 8 November 2026**

The uploaded **Beta 1.0 ZIP is the authoritative baseline** for the current mod selection, configs, KubeJS, quests and pack resources. The wiki follows this archive. Earlier exports, separate test installations and proposed additions do not extend its modlist.

## Pack version

| Setting | Beta 1.0 |
|---|---|
| Minecraft | 1.21.1 |
| Loader | NeoForge 21.1.262 |
| Java | 21 |
| CurseForge manifest projects | 315 |
| Directly bundled custom mods | 3 |
| Bundled mods | TnK Workshop, Unidentified Loot and Wildshape |

TnK Progression, Resonant Arcana, Alchemical Lasers, Flow Control and Combat Punchy are included through the manifest. The three bundled mods are additional entries; they are not missing dependencies to fetch from an older export. Libraries are included in the project count, which is different from a runtime count of loaded mod IDs.

## Included systems

| Reference | Count |
|---|---:|
| Production chapters | 10 |
| Configured skill nodes | 588 |
| Character origins | 20 |
| Custom Ponder lessons | 97 |
| Authored construction definitions | 344 |
| Startup scripts | 12 |
| Server scripts | 76 |
| Client scripts | 5 |

The production definitions, skill tree and custom Ponder collection match the previously documented route. The beta also includes the quest-icon registration script and its artwork.

## Questbook progress

The archive contains **42 chapter files and 1,036 quest records**. This includes the new layout, unfinished pages and inherited legacy chapters. It is not a count of finished quests for the rebuilt campaign.

The new production chapters I–VII contain **143 records**. Chapters VIII–X have their pages in place but no quest records yet. The ten-chapter recipe progression exists independently of those unfinished quest pages.

Town Square, Forging Ahead, Crafts & Curiosities, Realms & Relics and Seasonal Tales are the new group layout. The export also retains older groups and chapters, including references to removed mods. Those labels do not add mods to the Beta 1.0 inventory.

## Comparing with TK2

The baseline remains the actual **TK2 3.05 client archive**. Its manifest has 323 projects. Matching **CurseForge project IDs** gives **122 retained, 193 newly present and 201 absent projects** in Beta 1.0. Renamed projects such as Ponder for KubeJS keep their identity; replacement ports with different project IDs remain separate entries.

[Read the category changelog](../changelog/) · [Browse the full comparison](../mods/comparison/)

## Exact source reference

[Snapshot and archive hashes](../assets/data/snapshot.json) · [Beta 1.0 manifest](../assets/data/tnk3-manifest.json) · [Bundled builds](../assets/data/jar-references.json) · [Verified manifest-pinned custom builds](../assets/data/pinned-custom-builds.json) · [Quest export summary](../assets/data/quest-export.json)

The Beta 1.0 archive's SHA-256 is:

<code>bee54bfb83d877982538e81b769a17bf8a6f4bccecfb9ea5a554b910c0a50bb7</code>

The source refresh checks archive contents, manifest identities, config data, recipe definitions and pinned custom artifacts. The website checks validate its build, navigation, search and preserved archives. They do not represent a new Minecraft launch or multiplayer playthrough.
