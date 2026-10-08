# Towns & Kingdoms 3 · Chapters I–X

**1,788 unique KubeJS recipe IDs · 353 quests · 10 progression tiers · skill tree v4.6.0**

[Official wiki](https://mikaaah.github.io/TownsAndKingdoms/) · [Runtime v2 notes](docs/KUBEJS_RUNTIME_V2.md) · [Questbook guide](docs/QUESTBOOK_EN.md) · [Recipe paths](docs/PLAYER_PATHS_EN.md) · [Mod tier map](docs/MOD_TIER_MAP_EN.md)

**October 6 runtime refresh:** the supplied fixed KubeJS package updates ten recipe tiers, 40 compatibility modules, 214 custom item registrations, three frame blocks, progression stages, reusable catalyst lenses, and the 1,801-node skill tree. See the [runtime manifest](docs/RUNTIME_V2_MANIFEST.json) and [runtime update notes](docs/KUBEJS_RUNTIME_V2.md).

The **1,972-entry production review catalogue** is a separate authored recipe dataset; it is not the explicit recipe-ID count in the current runtime scripts. The canonical expanded **353-quest campaign** remains in place. The supplied quest ZIP was an earlier campaign snapshot and was not used to overwrite it.

Install kubejs/ and config/ftbquests/ together into the Minecraft 1.21.1 NeoForge instance, then fully restart the client and server. Startup item registrations and their resource assets require a full restart. Recipe scripts can reload with server resources; stage behavior and machine access should be validated in-game.

The questbook uses six categories: **Town Square**, **Character Paths**, **Mechanical Quests**, **The Magical Quests**, **Adventure Quests** and **Kingdom Life**. Tutorials, eighteen subclasses, eight professions and optional projects support the campaign. Class choices remain personal investments in the supplied skill tree.

Edit the canonical docs/progression_manifest.json for quest content. Use the current runtime manifest and source scripts for runtime recipe edits; keep recipe-review catalogue maintenance separate. Regenerate the handbook before publication. Player pages use the current website template and styles.

- [Progression and stages](docs/PROGRESSION_RUNTIME_V2.md)
- [Custom items and machine frames](docs/CUSTOM_ITEMS_RUNTIME_V2.md)
- [Reusable catalyst lenses](docs/CATALYST_LENSES_RUNTIME_V2.md)
- [Compatibility modules](docs/COMPAT_RUNTIME_V2.md)
- [Skill tree v4.6.0](docs/SKILLTREE_V4.6.0.md)
- [Campaign maintenance](docs/CAMPAIGN_MAINTENANCE.md)
- [Static runtime verifier](tools/verify_runtime_v2.py)
