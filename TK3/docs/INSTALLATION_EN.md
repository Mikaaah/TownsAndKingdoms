# Installation · Chapters I–X

Use the selected **1.21.1 NeoForge** stack listed in [MODLIST.md](MODLIST.md). Install `kubejs/` and `config/ftbquests/` together. **Restart both client and server fully**: new items and frame blocks are registered during startup. A recipe-only reload does not register them.

Existing chapters I–V keep their quest IDs. Milestone V now unlocks VI. Completed team milestones synchronize per-player stages at login. The full ten chapters must be installed; named milestone tools can be claimed once per player.

The expanded book also includes **27 guide pages** and **six categories**. Back up the instance, then replace the pack’s quest definitions in `config/ftbquests/quests/` with the supplied folder, including `lang/en_us.snbt`. Keep world and team progress data. Do not mix the old T&K2 chapter definitions into this book.

Keep the supplied `kubejs/assets/ftbquests/ftb_quests_theme.txt` and the KubeJS item assets on the client as well as the server’s pack files. They provide the quest colors and icons. Reading and activity checkmarks are self-reported. Classes, subclasses and professions are chosen in your existing personal skilltree, independently of FTB guide completion.

See [campaign maintenance](CAMPAIGN_MAINTENANCE.md) for integration checks and version locking.
