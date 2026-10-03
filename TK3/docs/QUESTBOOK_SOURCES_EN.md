# Questbook authoring sources

The new FTB book uses the category and presentation ideas from the user’s **T&K2 quests.zip**. Old quest IDs, currencies, loot tables, command rewards and removed magic mods are not imported.

The current alpha selection is the user’s **Towns & Kingdoms 3(1).zip**, `modlist.html`: **223 selected entries**, preserved in [questbook_mod_selection.json](questbook_mod_selection.json). This includes content, integration, library, interface and performance mods. The book groups playable systems into practical guides rather than making a quest for each technical library.

Character guides follow the user’s latest **TK3_SkillTree.js**. Its SHA-256 is `26f8abeacdcb11d9784654c06fcff0eace84cf110cfd81d3c3ddbd9993b52e9c`. It defines **six classes, eighteen subclasses and seven professions**. The questbook describes those personal choices and their tradeoffs; it adds no class-selection commands, stat grants or skill-point rewards. Optional attributes and script fallback behavior remain governed by that supplied tree.

FTB schema, translation key names, theme grammar and selector tags were checked against the official [FTB Quests 1.21.1 source](https://github.com/FTBTeam/FTB-Quests/tree/8c53f35a97d8897c861b097f1e39f4fc3beb3a15) and [styling documentation](https://docs.feed-the-beast.com/mod-docs/mods/suite/Quests/Developer/Styling/). Native translation entries use `type.16_DIGIT_ID.title`, `quest.ID.quest_desc`, `quest.ID.quest_subtitle` and list-valued `chapter.ID.chapter_subtitle`. Inline entries mirror exactly the same text for releases which import legacy fields.

Progression-specific instructions come from the canonical recipe manifest and inspected native recipe schemas. Stable milestones, detected boss trials, team stages and per-player tool rewards retain the existing campaign behavior. New guide pages use known registered icons and item IDs; activities which cannot be reliably detected use clearly labelled self-reported checkmarks.

The assembled Minecraft instance has not been launched here. Review font rendering, quest-map zoom, native guide content and integrations in the actual alpha instance before treating the pack as a tested release.
