# Custom items and machine frames · runtime v2

The current package registers **214 custom items** plus **3 machine-frame blocks**. Startup registrations live in `TK3/kubejs/startup_scripts/`; use a full game restart after changing these registrations or their assets. Recipe and stage scripts can be reloaded without replacing the item registry.

The supplied package also adds the complete model, blockstate, and texture set for the custom assets under `TK3/kubejs/assets/`. Existing questbook files are maintained separately; the supplied `01-quests.zip` is an older snapshot and was not used to replace the expanded campaign.

## Registration sample

| Item ID | Registration source |
|---|---|
| `kubejs:tk3_catalyst_lens` | `tk3_catalyst_lens.js` |
| `kubejs:tk3_arcane_mechanism` | `tk3_components.js` |
| `kubejs:tk3_calculation_mechanism` | `tk3_components.js` |
| `kubejs:tk3_singularity_mechanism` | `tk3_components.js` |
| `kubejs:tk3_heat_engine` | `tk3_components.js` |
| `kubejs:tk3_containment_mechanism` | `tk3_components.js` |
| `kubejs:tk3_hydraulic_engine` | `tk3_components.js` |
| `kubejs:tk3_incomplete_arcane_mechanism` | `tk3_components.js` |
| `kubejs:tk3_incomplete_calculation_mechanism` | `tk3_components.js` |
| `kubejs:tk3_incomplete_singularity_mechanism` | `tk3_components.js` |
| `kubejs:tk3_incomplete_heat_engine` | `tk3_components.js` |
| `kubejs:tk3_incomplete_containment_mechanism` | `tk3_components.js` |
| `kubejs:tk3_incomplete_hydraulic_engine` | `tk3_components.js` |
| `kubejs:tk3_incomplete_inductive_mechanism` | `tk3_components.js` |
| `kubejs:tk3_incomplete_infernal_mechanism` | `tk3_components.js` |
| `kubejs:tk3_incomplete_integrated_mechanism` | `tk3_components.js` |
| `kubejs:tk3_incomplete_kinetic_mechanism` | `tk3_components.js` |
| `kubejs:tk3_incomplete_chemical_mechanism` | `tk3_components.js` |
| `kubejs:tk3_incomplete_rotation_mechanism` | `tk3_components.js` |
| `kubejs:tk3_incomplete_sealed_mechanism` | `tk3_components.js` |
| `kubejs:tk3_incomplete_steam_engine` | `tk3_components.js` |
| `kubejs:tk3_incomplete_steel_mechanism` | `tk3_components.js` |
| `kubejs:tk3_inductive_mechanism` | `tk3_components.js` |
| `kubejs:tk3_infernal_mechanism` | `tk3_components.js` |
| `kubejs:tk3_integrated_mechanism` | `tk3_components.js` |
| `kubejs:tk3_kinetic_mechanism` | `tk3_components.js` |
| `kubejs:tk3_chemical_mechanism` | `tk3_components.js` |
| `kubejs:tk3_makeshift_rotation_mechanism` | `tk3_components.js` |
| `kubejs:tk3_rotation_mechanism` | `tk3_components.js` |
| `kubejs:tk3_sealed_mechanism` | `tk3_components.js` |
| `kubejs:tk3_steam_engine` | `tk3_components.js` |
| `kubejs:tk3_steel_mechanism` | `tk3_components.js` |
| `kubejs:tk3_sovereign_mechanism` | `tk3_components.js` |
| `kubejs:tk3_polished_amethyst` | `tk3_components.js` |
| `kubejs:tk3_amethyst_tube` | `tk3_components.js` |
| `kubejs:tk3_andesite_template` | `tk3_components.js` |
| `kubejs:tk3_blue_tube` | `tk3_components.js` |
| `kubejs:tk3_boot_medium` | `tk3_components.js` |
| `kubejs:tk3_brass_template` | `tk3_components.js` |
| `kubejs:tk3_capacitor_ceramic` | `tk3_components.js` |
| `kubejs:tk3_capacitor_ceramic_dirt` | `tk3_components.js` |
| `kubejs:tk3_capacitor_ceramic_incomplete` | `tk3_components.js` |
| `kubejs:tk3_capacitor_electrolytic` | `tk3_components.js` |
| `kubejs:tk3_capacitor_electrolytic_dirt` | `tk3_components.js` |
| `kubejs:tk3_capacitor_electrolytic_incomplete` | `tk3_components.js` |

See [`RUNTIME_V2_MANIFEST.json`](RUNTIME_V2_MANIFEST.json) for the complete item IDs and the machine-frame block inventory.

[Reusable catalyst lenses](Catalyst-Lenses.md)
