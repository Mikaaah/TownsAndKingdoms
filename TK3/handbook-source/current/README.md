# TNK3 Beta 1.0 documentation reference

The uploaded **Towns & Kingdoms 3 - Beyond the Forge-Beta 1.0.zip** is the authoritative current modpack baseline. Its SHA-256 is **bee54bfb83d877982538e81b769a17bf8a6f4bccecfb9ea5a554b910c0a50bb7**. Use its manifest, bundled mods, configs, scripts, quests and resources together. The user has designated this as the complete current modlist.

Earlier exports, the separate Modsjars reference, hotfix test logs, old repository runtime files and proposed additions do not expand or override this selection. A later user-supplied pack or explicit decision can supersede it.

## Edit and build

- Edit player prose in `pages/` and navigation metadata in `pages.json`.
- `data/` contains extracted reference data. `snapshot.json` identifies the authoritative archive; `tnk3-manifest.json` pins the exact CurseForge files.
- `jar-references.json` lists only the three mods bundled inside this beta. Manifest-pinned custom artifacts inspected for feature verification are recorded separately in `pinned-custom-builds.json`.
- The complete inventory matches CurseForge project IDs rather than mutable project slugs. Keep replacement ports distinct from actual removals in player prose.
- Construction definitions cover authored machine and named-mod compatibility plans, including the exact Angel Ring craft. They are not a complete loaded recipe registry.
- The quest export includes rebuilt pages and inherited material. Do not advertise its 1,036 records as finished TNK3 quests or restore removed mods from old chapter labels.
- Preserve all original Markdown in `TK3/wiki-archive/2026-10-02` unchanged.

From the repository root:

~~~sh
npm ci --prefix TK3/handbook-source --ignore-scripts --no-audit --no-fund
node TK3/tools/build_handbook.cjs
python3 TK3/tools/verify_current_wiki.py
node --check TK3/handbook-source/current/wiki.js
~~~

Output remains `TK3/player-guide` and publishes to the existing GitHub Pages address. The changelog is exported as `downloads/TNK3-Beta-1.0-Changelog.md`; its previous download URL remains available.

## Refresh from an approved pack

Inspect the new archive and its pinned custom builds before importing. Supply the exact Progression and Alchemical Lasers artifacts identified by the archive's file IDs:

~~~sh
python3 TK3/tools/import_pack_snapshot.py /path/to/approved-pack.zip --date YYYY-MM-DD --progression-jar /path/to/pinned-progression.jar --lasers-jar /path/to/pinned-lasers.jar
~~~

The importer reads the manifest, bundled JAR metadata, configurations, skill definitions, title definitions, quest layout and declarative Ponder/recipe data. It never launches Minecraft. A changed Progression artifact requires reviewing origins before publishing; the current origin guide matches the exact artifact pinned in Beta 1.0.

Review and update player prose, counts and validation expectations for the approved version. Rebuild, sync the generated changelog to `TK3/wiki/3.0-Changelog.md`, and run the documentation checks before publishing. Do not replace the full pack from an unrelated newer individual-file upload without an explicit instruction.

## Validation scope

Checks verify the Beta 1.0 identities and counts, local URLs/fragments, search targets, chapter routes, former-route destinations and unchanged original archive bytes. They do not run Minecraft or establish a complete multiplayer playthrough.

The historical builder remains `TK3/tools/build_handbook_legacy.cjs` and is not called by publishing.
