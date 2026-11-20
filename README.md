<p align="center">
  <img src="portal/public/media/logo.png" alt="Towns &amp; Kingdoms — Beyond the Forge" width="620">
</p>

Towns & Kingdoms: Beyond the Forge is a Minecraft modpack combining Create automation, RPG combat, magic and exploration. Build a settlement, connect its workshops, and discover equipment and resources through dungeons and boss encounters.

<p align="center">
  <strong><a href="https://mikaaah.github.io/TownsAndKingdoms/">Open the Towns &amp; Kingdoms Wiki →</a></strong>
</p>

<p align="center">
  <a href="https://discord.gg/CRYk3uDPVt">Discord</a> · <a href="https://www.curseforge.com/minecraft/modpacks/towns-kingdoms">CurseForge</a>
</p>

This repository hosts the handbook and issue tracker. Use [GitHub Issues](https://github.com/Mikaaah/TownsAndKingdoms/issues) to report bugs or suggest changes.

The handbook builds from the documentation data in `portal/` with Node.js 24.

```sh
npm --prefix portal ci
npm --prefix portal run build
npm --prefix portal test
```

To refresh the reference data locally, provide the external pack source snapshot as `TK3/` and any skill tree overlay under `portal/sources/`, then run `npm --prefix portal run data:import`. Commit the generated handbook data and media.
