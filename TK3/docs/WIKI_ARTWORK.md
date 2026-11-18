# Official wiki artwork & recipe viewer

The official assets supplied in TownsAndKingdoms3_Updated_Logo_Assets.zip are used unchanged. The wide banner, transparent logo and compact icon replace the temporary artwork. The wiki retains the chapter guide’s fixed sidebar, colours and Arial typography.

## Recipe art

Item art is extracted from 1.21.1 mod releases and the current KubeJS registry scripts. Block item icons are rasterised from their actual Minecraft JSON models; flat items use their original texture layers. An unavailable icon keeps its item name and a neutral symbol.

The 3D viewer uses Create 6.0.10 models and textures, with element rotations, face UVs and the native pixel textures. Supported processes include sequenced assembly, deploying, basin processing, fan processing, pressing, sawing and stonecutting. Other processes retain readable ingredient cards and numbered steps. Drag rotates the scene; scroll zooms. The item cards also remain available when WebGL cannot be used.

## Automation guide

The old farm drawings were removed. Crop, wood and generator sections now use component art, height/target tables, explicit first-cycle checks and links to Create’s native Ponder guidance. The guide does not present an untested complete farm schematic.

## Rebuilding

Install dependencies in TK3/handbook-source, then run TK3/tools/build_handbook.cjs. Compiled visual assets are committed, so the normal Pages workflow needs no mod downloads or render-time services. fetch-mod-assets.py and build-mod-assets.py record provenance and can regenerate the atlas. No mod jars are published.

## Weapon catalogue images

Weapon cards and details use item textures and static inventory model previews from the supplied pack and its exact installed mod releases. The catalogue includes 602 images; 44 entries retain category symbols where runtime renderers or unresolved model resources prevent a faithful export. Image provenance is recorded in `handbook-source/current/assets/weapons/icon-sources.json`.

To regenerate images, use `python3 TK3/tools/export_weapon_icons.py --input-dir /path/to/installed-jars --input /path/to/pack.zip --apply`, then rebuild the handbook and run `python3 TK3/tools/verify_weapon_catalogue.py`. Inputs supplied later override earlier resources. The importer requires Pillow and NumPy; regular wiki builds use the committed PNGs. It changes image fields only. Existing combat assignments and values remain the dated catalogue reference.

## Model orientation checks

Run `npm run test:models` from `TK3/handbook-source` after installing its dependencies. The geometry checks cover outward face normals, the stonecutter’s two opposing one-sided blade faces, native clockwise UV rotations, a downward-facing Deployer, an upward-facing processing Saw, and separate stonecutting input/output icons. Item icons face the camera; they do not inherit a baked inventory model’s rotation.
