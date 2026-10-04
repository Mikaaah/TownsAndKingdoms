# Production & renewability review

**Reviewed 4 October 2026 · Minecraft 1.21.1 / NeoForge · Tiers 1–10**

The latest production ZIP adds useful repeatable routes for Diamonds, Dragon's Breath, Arcane Essence, aquatic materials and late Mekanism resources. **The full automation claim does not pass this review yet.** The intended Tier 2 path has two construction cycles, and overlapping custom recipes make the selected production route uncertain.

The [recipe catalogue](../recipes/) and [visual workshop](../workshop/) now describe the intended recipes in this ZIP. They are an authoring reference while the issues below are resolved. The quest catalogue retains its separately published snapshot.

## What was checked

The review inspected all 28 JavaScript files, all recipe declarations, registered item references, the native generator handler, stage restrictions and the ordered mechanism operations. It also compared relevant behaviour with the primary KubeJS, Create, Dragons Plus and Aquatic Ambitions sources.

| Check | Result |
|---|---|
| JavaScript syntax | All 28 scripts pass |
| Supplied texture mappings | Existing mapping check passes; 115 gameplay PNGs and 99 quest/info PNGs inventoried |
| Intended recipe catalogue | 1,766 unique documentation entries, reconstructed from scripts rather than the stale 1,709-entry manifest |
| Surviving custom declarations in the source model | 1,831 declarations / 1,815 distinct IDs |
| Conflicting custom IDs | **16 IDs have multiple surviving declarations** |
| Legacy recipe groups with later mechanism inputs | **120 intended entries require a mechanism beyond their inherited tier label** |
| Top-level item references | No unresolved item candidates after separating tags and fluids |
| Bootstrap, asset and balance checks supplied in the ZIP | **All three fail** against its changed manifest |
| Original renewability check | Passes 14 string-presence checks; does not prove dependency closure |
| Minecraft load, codecs and actual factory operation | Pending; Minecraft was not launched |

The counts above are source-review counts. They are not a measurement of the final recipe manager in a running instance. Conditional recipes, native recipes, installed versions and failed codecs can change that result.

## Confirmed issues

### Tier 2: Empty Tube needs a later machine

The Sealed Mechanism consumes Empty Tubes. Its replacement tube recipe produces **4 tubes from 6 Glass Panes + 2 Iron Sheets**, using Mechanical Crafting. The only authored Mechanical Crafter constructor needs a **Precision Machine**, which is made with a tier 3 Precision Mechanism. Precision itself starts with the tier 2 Sealed Mechanism.

**Dependency cycle:** Sealed Mechanism → Empty Tube → Mechanical Crafter → Precision Machine → Precision Mechanism → Sealed Mechanism.

A first-tube recipe or an independently buildable early crafter is needed before this route can bootstrap. The native Mechanical Crafter output is controlled by the pack; mining extra ingredients does not solve the construction cycle.

### Tier 2: Water filling needs its own finished mechanism

The revised Sealed sequence also includes a Spout operation: **100 mB Water per loop**, with two loops. The authored Spout recipe consumes a **Hydraulic Machine**. A Hydraulic Machine is made by deploying a **Sealed Mechanism** onto a Copper Casing.

**Dependency cycle:** Sealed Mechanism → Spout → Hydraulic Machine → Sealed Mechanism.

This needs an early Spout or a separate first Hydraulic Machine route. Fixing Empty Tubes alone leaves this second cycle intact.

### Late overrides leave competing custom recipes

In the reviewed KubeJS 2101 source, `event.remove(...)` and `event.replaceInput(...)` iterate **original recipes**. Previously added custom recipes live in a separate collection. The late scripts call these methods as though they also remove or migrate earlier custom declarations.

As a result, **16 custom IDs are declared more than once**, including ten mechanism/intermediate sequences, Matter Plastic, Singularity Gem, the manual Rotation Machine and three addon constructions. Their competing definitions can differ in operations and loops. KubeJS merges duplicate IDs from a parallel collection and warns about them; script order alone does not establish a reliable winner.

Older custom recipes with different IDs can also remain as alternate outputs. The final whitelist has priority **−10000**, while the gap-closure and renewable scripts run at **−20000** and **−30000**. It cannot enforce the new routes after those additions. The legacy frame migrations similarly require explicit handling of added recipes.

The catalogue selects the declared *intended* override for documentation. Resolving custom additions explicitly is required before that selection can be treated as the runtime result.

### The intended frame migration also moves starter chemistry too late

The gap-closure script maps the old **Ender Machine** to a **tier-9 Singularity Mechanism**. Applying that mapping to the earlier constructors makes the first **Electrolytic Separator, Pressurized Reaction Chamber and Rotary Condensentrator** consume Singularity. These machines supply the gas/HDPE chain needed before Singularity: SPS Casing consumes HDPE Sheets, the SPS provides Antimatter, and Antimatter makes its Stargaze Plate.

**Intended migration cycle:** Singularity Mechanism → Stargaze Plate → Antimatter → SPS → HDPE → PRC → Singularity Mechanism.

This is a problem in the proposed migration even after custom recipe replacement is implemented correctly. An earlier chemistry constructor is needed. The current scripts also leave the original added constructors unmigrated, so the actual recipe manager requires separate inspection.

Across the catalogue, **120 entries** have direct mechanism inputs above their inherited authoring tier. This is a metadata/dependency conflict count, not 120 independently proven broken recipes. Old tier-4 Ars constructors now reference tier-6 Arcane, for example. The workshop displays the later required mechanism tier where this conflict occurs.

### Netherrack and superheat are not a closed source yet

The new lava recipe consumes **4 Netherrack + 1 Blaze Powder → 250 mB Lava**, with superheat. The ZIP says Netherrack is generator-backed, but the handler contains no Netherrack output. Its Netherrack selector makes **Scoria**; its Blackstone selector makes **Scorchia**.

Superheat also needs a repeatable fuel supply. Native Blaze Cake production uses Cinder Flour made from Netherrack, as well as renewable Sugar, Eggs and Lava. A renewable consumed Netherrack route is therefore still an open dependency in the supplied evidence. A full installed recipe export could establish an addon route; until then, neither this factory-lava route nor the Diamond route should be marked fully closed. Dripstone remains a repeatable lava source independently of this claim.

### Paintballs use Milling and independent chance rolls

The requested Item Drain design is still represented by **Milling**, producing pigment and the next paintball, with no fluid output. The five states are **Red → Yellow → Green → Blue → Purple → spent grey**. This is the implementation present in the ZIP; an actual zero-fluid Item Drain implementation remains open.

The crushing results use five separate chance rolls: **8.8%, 11%, 14.7%, 22% and 43.5%**. These are not an exclusive weighted selection. A batch can yield none, one or several colours. Repeated input remains productive on average, but the wiki must not promise exactly one colour per singularity.

### The supplied manifest and checks lag behind the scripts

The ZIP's manifest omits the late mechanism recipe IDs and the new renewable recipes, although the corresponding scripts ship in the same ZIP. Its bootstrap verifier stops at Calculation Mechanism; its asset verifier treats native infrastructure such as AE2 Controller as a custom frame; its balance verifier still expects the old manual Kinetic constructor and one-loop tool sequences.

Those failures are a mix of stale validation assumptions and incomplete manifest data. They do not independently prove that every affected recipe is broken. The wiki uses a separate reviewed production snapshot so it can show the new design without changing the published game or quest files.

## Tier-by-tier resource paths

Each status considers the consumed inputs, the processing station and earlier dependencies. **Blocked upstream** means a later local recipe can be renewable while the complete campaign still cannot reach it through the intended route.

| Tier | Intended route from raw acquisition | Review status |
|---|---|---|
| 1 · Rotation | Water + retained Lava source → Cobblestone → Gravel/Sand/Clay; Kelp and tree farms; gravel washing for Iron; initial Andesite → Rotation generator. Handcraft Makeshift parts and the first Rotation Machine, then use Press and Deployer production. | Raw acquisition and manual frame route are explicit. Actual automation needs the in-game power and generator check. |
| 2 · Sealed | Seed Copper → Hydraulic Veridium generation; Sand → Glass → Panes; Iron → Sheets; Slime + Dried Kelp + Water → Rubber; Rotation → Sealed assembly. Bone Meal/Kelp feed Calcium Powder, with renewable Prismarine. | **Blocked by Empty Tube and Spout construction cycles.** Copper seed mining is a bootstrap, not the sustained source. |
| 3 · Precision | Diorite → Quartz; Granite → Lapis; Scoria → Redstone; Scorchia → Coal; Asurine → Zinc; Ochrum → Gold. Copper + Zinc → Brass, then Electron Tubes and Precision machining. | Blocked upstream by tier 2. Netherrack is a retained Scoria lens, not a Netherrack generator output. The new lava route still consumes it. |
| 4 · Calculation | One Certus crystal → water-grown Small/Medium/Large Bud → Cluster → 4 crystals. Sand → Rough Sand; Certus Dust → Siliceous Compound → Silicon. Gold/Certus/Diamond → printed circuits → processors; retain native presses and Boot Medium. | Blocked upstream. Diamond pressure synthesis also needs closed superheat and Lava supplies. The Calculation sequence uses **100 mB XP**; validate an available collection route before building it. |
| 5 · Inductive | One Amethyst seed → growth loop; Quartz + Redstone → Rose Quartz; Spectral Ruby → Singularity; Ender Pearl → Dust; Sand/Gunpowder → TNT; entanglement → dye singularity → five paintball states → pigment → Chromatic Compound. | Blocked upstream. Osmium/Redstone/Electron Tube basic-circuit bootstrap is explicitly authored. Steel Casing geological modes provide five repeatable ores after initial materials and stage access. |
| 6 · Arcane | Farm Source; renew Source Gems and Ars essences. Amethyst + retained Source Gem pedestal → **2 Iron's Arcane Essence, 2,500 Source**. Empty Tube → Amethyst Tube; assemble unfinished Arcane parts, then finish in the Apparatus. | Local essence route is explicit. Full chain still depends on earlier tubing, XP and the Wizardry Arcane Sheet route. |
| 7 · Chemical Engineering | Renewable Chromatic/Haunting chain → Shadow Steel; Water electrolysis → Hydrogen/Oxygen; Brine → Chlorine → Hydrogen Chloride; repeated alloys/circuits from ore generation. A Nether Star upgrades a retained focus. | Retained focus is authored. The proposed Ender-frame migration makes the first chemistry machines require Singularity, so their starter construction is also unresolved. |
| 8 · Containment | Gravel + Prismarine + Calcium Powder + Water → **2 Suspicious Rock**; Channeling → probabilistic Nautilus/Spiky Shells. Bone Blocks → **2 Dragonbone** through Bulk Ending. Uranium/Fluorite geological modes feed reactor processing. | Local renewal additions are explicit. Guardian/Channeling and Dragon Head systems need working collection; Ignis upgrades a retained focus. Blocked upstream. |
| 9 · Singularity | Renewable fission feed → waste/SPS → Antimatter; Amethyst → Echo Shard → Timeless Slurry; Empty/Blue Tubes, Stargaze and Radiant parts. Blackstone + **5 Antimatter → Ancient Debris**; Obsidian + **250 mB XP → Crying Obsidian**. | Local conversions are present, but the intended migration creates an HDPE/PRC/Singularity construction cycle. Also validate Blackstone, radioactive processing, power and native codecs. Void focus is retained. |
| 10 · Sovereign | Shadow Steel + Charged Certus + XP + retained Haunted Bell → Refined Quartz; renewable metals/XP → Tech Tube; Radiant Obsidian + Atomic Alloy + AE2 Matter → Circuit Scrap; HDPE network → Matter Plastic; three-loop Sovereign assembly. | End-to-end automation is **not certified**. Cursium/Legendary Ink are first-focus upgrade ingredients; the final focus is retained. All recurring material routes inherit earlier blockers. |

The one-time inputs are seeds and reusable infrastructure: initial Andesite, Certus, Amethyst, geological selector blocks, starter Mekanism ores, Dragon Head and the boss-focus upgrades. Losing a catalyst requires replacing it. That is different from consuming a fresh boss drop for each mechanism.

## Added repeatable recipes

| Tier | Exact authored input | Output | Process |
|---|---|---|---|
| 3 | 4 Netherrack + Blaze Powder | 250 mB Lava | Superheated Mixing |
| 4 | 16 Coal + 2 Sturdy Sheets + 500 mB Lava | 1 Diamond | Superheated Compacting |
| 5 | Glass Bottle | Dragon's Breath | Bulk Ending; Dragon Head fan source retained |
| 6 | Amethyst Shard; Source Gem pedestal; 2,500 Source | 2 Arcane Essence | Ars Imbuement |
| 8 | Bone Block | 2 Dragonbone | Bulk Ending; Dragon Head fan source retained |
| 8 | 2 Gravel + Prismarine Shard + Calcium Powder + 250 mB Water | 2 Suspicious Rock | Compacting |
| 9 | Blackstone + 5 Antimatter | Ancient Debris | Nucleosynthesizing, 300 ticks, per-operation chemical use |
| 9 | Obsidian + 250 mB Liquid XP | Crying Obsidian | Filling |

Dragon kills add a recoverable Dragon Head **when killed by a player**. This is catalyst recovery after a fight, not an automated Dragon kill farm. Bulk Ending support exists upstream; the custom conversions still need to load in the exact installed build.

## Geological layout

Place the **lens directly beneath the generated block**, with the **frame beneath the lens**. Use a normal flowing Lava/Water generator at the top. The handler replaces newly generated Cobblestone or Stone; it leaves Obsidian unchanged. Drill and collect the output without breaking the two selector blocks.

The source defines **15 selectors**: ten Create-era stone outputs and five Mekanism ore outputs. Steel Casing modes produce **Osmium Ore, Tin Ore, Lead Ore, Uranium Ore and Fluorite Ore** using Quartz Block, Copper Block, Iron Block, Glowstone and Calcite respectively. Steel Casing is gated with Mekanism at tier 5. The modes do not generate those selector materials or Netherrack.

## Before full approval

Resolve both tier 2 station cycles and the proposed chemistry migration cycle; remove duplicate custom declarations and surviving legacy alternatives explicitly; bring the authoritative manifest and checks into agreement; verify the consumed Netherrack/superheat source; and test the required raw-input factories in the actual instance. Record successful recipe loading, correct yields, retained catalysts, stage access and at least one full mechanism cycle for every tier.

## Evidence and primary sources

- [Machine-readable source review](https://github.com/Mikaaah/TownsAndKingdoms/blob/main/TK3/docs/production-review/review.json)
- [Reviewed source snapshot](https://github.com/Mikaaah/TownsAndKingdoms/tree/main/TK3/docs/production-review/source)
- [KubeJS RecipesKubeEvent](https://github.com/KubeJS-Mods/KubeJS/blob/1b4e9b819e4b372d92529f43542e1992c45701a2/src/main/java/dev/latvian/mods/kubejs/recipe/RecipesKubeEvent.java): original/addition separation, removal/replacement and duplicate-ID merge.
- [Create ProcessingRecipe](https://github.com/Creators-of-Create/Create/blob/a927008632b5eb9abc841d4c9c830995dc461038/src/main/java/com/simibubi/create/content/processing/recipe/ProcessingRecipe.java): each probabilistic result receives its own output roll.
- [Create: Dragons Plus modpack reference](https://github.com/DragonsPlusMinecraft/CreateDragonsPlus/blob/1.21.1/6.0.0-dev/MODPACK_README.md) and [EndingRecipe](https://github.com/DragonsPlusMinecraft/CreateDragonsPlus/blob/1.21.1/6.0.0-dev/src/main/java/plus/dragons/createdragonsplus/common/kinetics/fan/ending/EndingRecipe.java).
- [Aquatic Ambitions source](https://github.com/davioliva16/create-aquatic-ambitions): Channeling Suspicious Rock has separate 10% Spiky Shell and 50% Nautilus Shell result chances.

The attached `quests.zip` and `kubejs.zip` are T&K2 comparison references. Their Thermal, Botania and old datapack recipes are not evidence that those routes exist in this T&K3 instance.
