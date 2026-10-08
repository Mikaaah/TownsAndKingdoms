# KubeJS runtime v2 · October 2026

The refreshed runtime is the full `KubeJS Version2_FIXED.zip` package. It targets Minecraft 1.21.1 and contains 684 files. The package refreshes recipes, compatibility, custom registrations, stages, lenses, the skill tree and their supplied models/textures.

## Current inventory

- **1,788 unique explicit recipe IDs** across 10 named progression tiers, core recipes, 40 mod compatibility modules, and recipe cleanup/whitelist/sanity scripts.
- **214 custom item registrations** and **3 machine-frame block registrations**.
- **14 quest milestones** synchronize to player stages; nine tier stages gate defined items.
- **One reusable catalyst lens item** with four charged color variants.
- **Skill tree v4.6.0:** 1,801 nodes, 1,800 edges, six classes, eighteen subclasses, eight professions, six wildcard constellations, and eight shared constellations.

The recipe count is the static count of explicit `.id(...)` declarations in the supplied script set. The separately published 1,972-entry production-review catalogue is kept distinct. The 353-quest campaign remains canonical: the supplied quest ZIP was an earlier snapshot, and it was not used to replace the expanded questbook.

## Topic guides

- [Recipe IDs and tiers](PROGRESSION_RUNTIME_V2.md)
- [Stage gates and quest milestones](PROGRESSION_RUNTIME_V2.md)
- [Custom items and machine frames](CUSTOM_ITEMS_RUNTIME_V2.md)
- [Catalyst lenses](CATALYST_LENSES_RUNTIME_V2.md)
- [Compatibility modules](COMPAT_RUNTIME_V2.md)
- [Skill tree v4.6.0](SKILLTREE_V4.6.0.md)
- [Runtime manifest](RUNTIME_V2_MANIFEST.json)

## Validation

All 72 JavaScript files pass `node --check`; all 135 JSON files parse; all explicit recipe IDs are unique; and generated skill tree data has one unique grid cell per node and 1,800 edges. The skilltree layout fingerprint is `4f6e469f`. No Minecraft client/server boot test has been run.
