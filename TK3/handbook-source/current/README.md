# Current TNK3 documentation reference

This source replaces the obsolete October campaign/wiki builder. It documents the cumulative 8 November 2026 development snapshot.

## Edit and build

- Edit player prose in the pages folder and navigation metadata in pages.json.
- The data folder contains extracted, dated reference data. Source archive/JAR hashes are in data/snapshot.json.
- Construction recipes cover static machine and named-mod compatibility plans, not a complete loaded recipe registry.
- Keep all historical Markdown in TK3/wiki-archive/2026-10-02 unchanged.
- Do not infer current recipes, quest counts or classes from the older repository runtime/catalogue snapshots.

From the repository root:

~~~sh
npm ci --prefix TK3/handbook-source --ignore-scripts --no-audit --no-fund
node TK3/tools/build_handbook.cjs
python3 TK3/tools/verify_current_wiki.py
node --check TK3/handbook-source/current/wiki.js
~~~

Output remains TK3/player-guide and publishes to the existing GitHub Pages address.

## Refresh the snapshot

Inspect the new export, full KubeJS package and matching custom builds before replacing data. Compare actual files and APIs. Update source hashes and date together with the relevant prose.

The current quest export contains migration material. Do not advertise its records as finished TNK3 quests. Keep proposed quest groups and confirmed production scripts distinct until a complete matching book is supplied.

The latest hotfix log is a separate test-mod selection and is not used as the pack inventory.

## Validation scope

The checks verify local URLs/fragments, search targets, exact source counts, chapter routes, former-route destinations and unchanged original archive bytes. They do not run Minecraft or establish compatibility of a combined beta.

The historical builder is retained as TK3/tools/build_handbook_legacy.cjs. It is not called by publishing.
