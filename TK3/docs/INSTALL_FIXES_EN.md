# ◆ INSTALL THE ASSET & RECIPE UPDATE

**CLIENT + SERVER · FULL MINECRAFT RESTART**

1. Close Minecraft and stop your server. Back up the existing `kubejs` folder and `config/ftbquests/quests`.
2. Replace the previous T&K3 progression files with this package’s `kubejs/startup_scripts`, `kubejs/assets`, `kubejs/server_scripts/recipes`, `kubejs/server_scripts/progression`, `kubejs/server_scripts/loot` and `kubejs/server_scripts/compat` files. Install the included `config/ftbquests/quests` files as well.
3. Remove older copies of these same T&K3 scripts from other folders. KubeJS reads subfolders too, so moving an old `.js` file to a backup subfolder inside `kubejs` still loads it. Store backups outside `kubejs`.
4. Keep your current **`TK3_SkillTree.js`** and unrelated custom scripts. This download deliberately does not include a replacement skilltree.
5. Copy the **entire `kubejs/assets` folder to every client**. It includes `minecraft/atlases/blocks.json` as well as the `kubejs` textures, models and blockstates. Server-only installation cannot provide the custom client artwork.
6. Start Minecraft and the server again. A full restart is required for the startup registry and resource changes; `/reload` alone is insufficient.

## ✦ CHECK THE UPDATE

- Custom mechanisms, quest icons and machine frames should display their supplied artwork.
- **Inductive Machine:** Steel Casing → deploy Inductive Mechanism. Its mechanism starts with a Precision Mechanism and applies two Capacitors, two Fluix Crystals, a Basic Control Circuit, Steel Ingot and the finishing Iron Hammer.
- **Mechanical Press:** Iron Block, two Andesite Alloy, Kinetic Machine and Shaft. The first Press needs no pre-existing sheets.
- **Advanced Solar Generator:** four Solar Generators plus its listed native parts and Ender Machine.
- **Dense Energy Cell:** eight Energy Cells and a Calculation Processor.

Existing quest IDs and detection tasks remain stable. Read the updated quest descriptions for machine parts and longer mechanism sequences.

If JEI still shows a frame recipe using only slabs, inspect its **item ID and recipe ID**. The included Inductive Machine has exactly one approved construction recipe. An older script or an additional pack recipe needs to be identified before it can be removed safely.

**[RECIPE PATHS →](RECIPE_PATHS_EN.md)** · [Balance changes](BALANCE_UPDATE_EN.md)
