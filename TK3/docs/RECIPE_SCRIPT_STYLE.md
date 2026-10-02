# Editing recipe scripts

The recipe scripts follow the section-marker style from the original T&K2 KubeJS source.

```js
//->------------------------]  Tier 1 / Materials [------------------------<-//

// Andesite Alloy / Shapeless
event.shapeless(
    "2x create:andesite_alloy",
    [
        "minecraft:andesite",
        "architects_palette:algal_blend"
    ])
    .id("kubejs:tk3/tier_1/andesite_alloy");
```

## Where to make a change

| File | Contents |
|---|---|
| `tk3_tier_1.js`–`tk3_tier_5.js` | Chapter materials, mechanisms, tools, machine cutting and resource processing |
| `tk3_frames.js` | Manual startup frame, automated frames and related machine components |
| `tk3_create.js` | Create parts and utilities, grouped by tier and purpose |
| `tk3_geology.js` | Stone milling, crushing and resource yields |
| `tk3_compat.js` | Timber processing by mod, then vanilla compatibility |
| `tk3_magic.js` | Magic integrations by tier and mod |
| `tk3_storage.js` | Storage, containers and upgrades by tier and mod |
| `tk3_late_layers.js` | Industrial processing and reserved AE2 routes |
| `tk3_recipe_cleanup.js` | Controlled original outputs removed before registration |
| `tk3_whitelist.js` | Approved IDs per output; final removal of unintended alternatives |

All files are in `TK3/kubejs/server_scripts/recipes/`.

## Layout rules

- Use the arrow section marker for a tier or recipe family.
- Put a short output name and process above each recipe.
- Use four spaces for indentation.
- Put ingredients, crafting-pattern rows, object fields and assembly steps on separate lines.
- Put chained settings such as `.heated()`, `.loops()` and `.id()` on separate lines.
- Keep the stable recipe ID visible at the end of the recipe.
- Keep removals in the central cleanup file; its priority must remain first.

When changing a recipe, update its entry in `docs/progression_manifest.json` and its approved output IDs as well. Update related player instructions and tier restrictions when the progression changes.

## Rebuild formatting

Install the developer-only formatter dependency:

```sh
python3 -m pip install jsbeautifier==2.0.3
python3 TK3/tools/format_recipes.py --pack TK3
```

The Create extension builder runs this formatter after regeneration. Formatting preserves recipe expressions, IDs, quantities, tools, conditions and script priorities. Reordering only groups independent registrations within a script.

Run the existing checks after edits:

```sh
node TK3/tools/verify_create.cjs
node TK3/tools/verify_expansion.cjs
```
