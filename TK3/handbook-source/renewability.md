# Production & renewability review

**Repaired package · 4 October 2026 · Minecraft 1.21.1 / NeoForge**

The wiki now follows **TK3_Production_Progression_FIXED_NO_QUESTS_2026-10-04.zip**. The starter construction cycles, duplicate custom recipe IDs and chemistry migration cycle identified in the earlier review have been repaired. The static dependency model reaches **all ten main mechanisms**, including their ingredients and processing stations.

**A Minecraft test is still pending.** Reachability from explicit world resources and native machine rules does not prove that a complete factory is self-sustaining or that every recipe is accepted by the installed mods. The separately maintained questbook and stage integration are outside this package.

[Current progression](../progression/) · [Recipe catalogue](../recipes/) · [Visual workshop](../workshop/) · [Automation guide](../automation/)

## Current check results

| Check | Repaired result |
| --- | --- |
| JavaScript syntax | All 26 supplied scripts parse |
| Effective custom declarations | 1,972 remaining declarations and 1,972 unique recipe IDs |
| Duplicate custom recipe IDs | 0 |
| Unknown direct item references | 0 in the inspected catalogue |
| Main mechanism routes | All 10 reachable in the ingredient-and-station model |
| Item assets | 132 registered item-texture bindings and 11 custom frame models checked |
| Source PNGs | All 177 retained PNG files unchanged |
| Tier tags | Ten mechanisms in their correct tiers; 228 known registered item IDs |
| Generator selectors | 17 distinct lens/frame combinations |
| Package integrity | ZIP CRC and SHA-256 file manifest passed |
| Minecraft, factories and external stages | Still require an in-game test |

These are static source checks, not counts from a running Minecraft recipe manager. Conditions, mod versions and recipe codecs can affect runtime loading.

## Resolved construction and recipe issues

### First wood and copper

Each supported log or wood block has an explicit hand recipe yielding **2 planks**. The powered Saw keeps its better yield. This makes the first workshop buildable before a powered Saw exists. Raw Copper can also be smelted or blasted before the first copper-processing machines.

### Pipes, Spout and Empty Tubes

| Component | Early construction route | Why it works before Sealed |
| --- | --- | --- |
| Fluid Pipe | Compact 2 Copper Sheets + 1 Copper Ingot into 4 pipes | Uses the early Press/Basin route |
| Spout | Dried Kelp + 2 Copper Sheets + Rotation Machine + Fluid Pipe | Does not require a Hydraulic Machine |
| Mechanical Pump | Fluid Pipe + 2 Copper Sheets + Rotation Machine + Cogwheel | Uses the same earlier machine tier |
| Empty Tube | Compact 6 Glass Panes + 2 Iron Sheets into 4 tubes | Does not require the tier-3 Mechanical Crafter |

The Mechanical Crafting tube recipe remains an additional production route. The Sealed assembly uses two passes, each consuming a Copper Sheet, Empty Tube, Rubber and **100 mB Water**, followed by Pressing. Its full cycle therefore uses **200 mB Water**.

### Duplicate IDs and the final whitelist

The late override scripts now explicitly remove matching earlier additions as well as original recipes. The final whitelist runs after the overrides, at priority **−40000**, and uses the surviving recipe IDs. The static execution model finds no duplicate custom IDs. Source inputs are corrected directly instead of relying on a late migration to alter already-added recipes.

### Chemistry before antimatter

| Constructor group | Repaired mechanism input |
| --- | --- |
| Early Ars and XP infrastructure | Calculation |
| Pressurized Reaction Chamber, Electrolytic Separator and Rotary Condensentrator | Inductive |
| Chemical Infuser and Osmium Compressor | Arcane |

The first chemical-processing equipment can now precede the Singularity mechanism that needs its products. The earlier recipe path no longer requires a tier-9 mechanism to start that same chemical chain.

### Netherrack and Blackstone

Both now have distinct generator selectors, separate from the existing Scoria and Scorchia modes. Place the lens directly below the generated block and the frame two blocks below it. The selector blocks remain in place.

| Generated block | Retained lens | Retained frame | Tier |
| --- | --- | --- | --- |
| Netherrack | Nether Bricks | Precision Machine | 3 |
| Blackstone | Polished Blackstone | Precision Machine | 3 |

Netherrack can supply Cinder Flour and the native Blaze Cake chain; Blackstone can supply the late Ancient Debris conversion. Initial selector materials still require their stated world acquisition.

## Tier 1–10 route status

All ten entries below pass the main ingredient-and-station reachability check. The examples describe recurring material routes; seed resources, exploration, boss access and native machine rules remain explicit boundaries.

| Tier | Main production route | Important boundary or test |
| --- | --- | --- |
| 1 · Rotation | Hand planks, Kelp + Clay → Algal Blend; Andesite Alloy → manual Rotation Machine → Press/Deployer → Rotation Mechanism | Initial trees, crops and minerals; rotation and generator behaviour |
| 2 · Sealed | Raw Copper → Sheets → Pipes; early Spout/Pump; Glass Panes + Iron Sheets → Empty Tubes; Rubber → Sealed assembly | Fluid transport, two assembly passes and first mineral selectors |
| 3 · Precision | Brass and Nether materials → Precision; geological selectors supply processed resources, Netherrack and Blackstone | First Nether materials, heat and repeatable Blaze Cake feed |
| 4 · Calculation | Charged Certus, printed circuits and retained AE2 presses → Calculation | Meteorite presses, first FE, Source and XP collection |
| 5 · Inductive | Amethyst growth, paintballs/pigment and Chromatic materials → Inductive → starter Mekanism | End/Dragon access, Dragon Head and first mineral seeds |
| 6 · Arcane | Farmed Source, repeatable Source Gems/essences and tubing → Apparatus → Arcane | Native Source collection and liquid-lightning bootstrap |
| 7 · Chemical Engineering | Chromatic/Haunting → Shadow Steel; earlier chemical equipment → chemical materials and retained focus | Power, chemical quantities and the first Nether Star |
| 8 · Containment | Repeatable ores and aquatic materials → fission/control materials → Containment | Ignis focus, radiation handling and actual reactor operation |
| 9 · Singularity | Fission waste/SPS → Antimatter; HDPE, Stargaze and tubes → Singularity | Native SPS rules, first Void imprint and sufficient energy |
| 10 · Sovereign | Refined Quartz, Tech Tube, Matter Plastic, Antimatter and retained Sovereign Focus → three-pass assembly | Mana Siphon/caster source, Cursium/Legendary Ink focus seed and final integration |

The dependency proof is published with its explicit ingredient and machine boundaries. No external quest or stage unlock has been simulated.

## Remaining implementation limits

- **Paintball processing:** Milling currently produces pigment plus the next paintball without a liquid output. The requested Item Drain variant with two item results and no liquid still needs an additional implementation. Crushing uses separate chance rolls; it does not guarantee exactly one randomly selected colour.
- **Mana Siphon:** the model assumes the native player/caster mana source. Its collection rate and fully automated operation have not been simulated.
- **Optional recipes:** 91 optional script recipes use serializers outside the dependency model. They remain in the catalogue, but their production and runtime behaviour are not certified by the main-mechanism check.
- **Factories:** energy rates, fluid throughput, radiation, collection systems, multiplayer and sustained production still need in-game validation.

## Install and test

Close the game and server, back up the current world and KubeJS files, then copy the included files to their matching paths. Keep the separate FTB Quests, SkillTree and stage files. Do not leave duplicate `.js` copies inside active script folders. Fully restart the client and server; a reload is insufficient for startup registrations and models.

In a test world, check the KubeJS logs and JEI, then complete one full main-mechanism cycle for every tier. Confirm yields, retained tools, fluid amounts, generator selection and external stage access. Test a continuous factory before marking the entire chain fully automated.

## Evidence

- [Recipe declaration report](https://github.com/Mikaaah/TownsAndKingdoms/blob/main/TK3/docs/production-review/review.json)
- [Ingredient and processing-station proof](https://github.com/Mikaaah/TownsAndKingdoms/blob/main/TK3/docs/production-review/dependency_validation.json)
- [Repaired production source snapshot](https://github.com/Mikaaah/TownsAndKingdoms/tree/main/TK3/docs/production-review/source)
- [Validation scope](https://github.com/Mikaaah/TownsAndKingdoms/blob/main/TK3/docs/production-review/VALIDATION_NL.md)

The recipe catalogue and visual workshop use this repaired source snapshot. The quest catalogue keeps its separately published data.
