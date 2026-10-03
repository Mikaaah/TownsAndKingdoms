# Towns & Kingdoms 3 · Chapters I–X

**1709 managed recipes · 353 quests · 10 progression chapters · 27 guide pages**

[Official wiki](https://mikaaah.github.io/TownsAndKingdoms/) · [Questbook guide](docs/QUESTBOOK_EN.md) · [Recipe paths](docs/PLAYER_PATHS_EN.md) · [Mod tier map](docs/MOD_TIER_MAP_EN.md)

Install `kubejs/` and `config/ftbquests/` together into the Minecraft 1.21.1 NeoForge instance, then fully restart the client and server. Nether entry starts at chapter 3, AE2 and Mekanism at 4, End entry at 5. Chapters and milestone IDs remain stable; internal quest goals are updated for the new campaign.

The questbook uses six categories: **Town Square**, **Character Paths**, **Mechanical Quests**, **The Magical Quests**, **Adventure Quests** and **Kingdom Life**. Tutorials, all eighteen subclasses, seven professions and optional projects support the campaign. Class choices remain personal investments in the supplied skilltree.

Edit the canonical `docs/progression_manifest.json`. Run `tools/rebuild_quests.py` for quest definitions and English translations; recipe edits use `tools/rebuild_recipes.py` and `tools/format_recipes.py --pack TK3`. Regenerate the handbook before publication. Player pages keep the current website template and styles. Runtime checks and limitations belong in [campaign maintenance](docs/CAMPAIGN_MAINTENANCE.md).
