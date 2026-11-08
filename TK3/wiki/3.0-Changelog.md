# Development changelog 01

## From TK2 3.05 to Towns & Kingdoms 3

**8 November 2026 · First in-depth development comparison**

Beyond the Forge rebuilds the factory-to-adventure loop for Minecraft 1.21.1. Create remains the centre, with a new ten-chapter production route, connected IE/AE2 manufacturing, a custom character system, identification-based equipment rewards and practical tools for a shared settlement.

This compares the actual **TK2 3.05 client archive** with the supplied TNK3 export and its newer KubeJS/custom-mod updates. It records current development, rather than announcing a finished public release. The pack's shared CurseForge page still lists TK2 downloads.

[Download this changelog as Markdown](https://mikaaah.github.io/TownsAndKingdoms/downloads/TNK3-Development-Changelog-01.md) · [Complete project comparison](https://mikaaah.github.io/TownsAndKingdoms/mods/comparison/) · [Snapshot and hashes](https://mikaaah.github.io/TownsAndKingdoms/status/)

## 1. Platform and pack identity

| Area | TK2 3.05 | Current TNK3 reference |
|---|---|---|
| Minecraft | 1.20.1 | 1.21.1 |
| Loader in the supplied manifest | Forge 47.3.7 | NeoForge 21.1.262 |
| Current Java target | Earlier pack platform | Java 21 |
| Pack direction | A New World | Beyond the Forge |
| Manufacturing campaign | Eleven chapter-era recipe files | Ten chapters, internal tiers 0–9 |
| Character development | Passive Skill Tree family | Pufferfish configuration + TNK Progression |
| Quest source | Published TK2 book | TNK3 rebuild with inherited migration material |
| Wiki | Historical TK2 and outdated generated TNK3 systems | Current audited guides, searchable references and preserved TK2 archive |

Existing TK2 worlds are not presented as directly upgradeable TNK3 saves. The loader, registries, recipes, terrain stack and custom systems have changed. Keep the generations as separate installations and retain backups.

## 2. A new production backbone

The old TK2 scripts ran from early Andesite/Copper into Precision, Infernal, Calculation, Steel/TFMG, Inductive/Thermal, Enderium and Ad Astra space manufacturing before the final chapter.

The current route is:

| Chapter | Component / focus | Main difference |
|---|---|---|
| I · Manual | Makeshift Mechanism | Clay/Andesite bootstrap into the existing Andesite Machine |
| II · Andesite | Rotation Mechanism | Cheaper automated construction replaces the expensive manual mechanism |
| III · Copper | Sealed Mechanism | Rubberworks sap and fluids connect to reliable Copper production |
| IV · Brass | Precision Mechanism | Guaranteed one-pass assembly and practical Brass control |
| V · Calculation | Calculation Mechanism | Create processors, crystal production and ME logistics |
| VI · Reinforced | Reinforced Mechanism | Electrum, steel, electronics and Light Engineering |
| VII · Industrial | Industrial Mechanism | Heavy Engineering, IE Crusher and 4× ore processing |
| VIII · Arcane | Arcane Mechanism | Source Gems, Dragon's Breath, Mana and magical manufacturing |
| IX · Eclipse | Eclipse Mechanism | Radiant/Shadow materials, ink and 5× ore finishing |
| X · Creation | Creation Core | A final two-pass assembly that consumes the whole mechanism chain |

The old Infernal/TFMG/Thermal/space steps are no longer this pack's main-tier definition. Mekanism is not introduced as a replacement core tier. Older wiki claims about Containment, SPS, antimatter or a Sovereign Keystone are retired.

## 3. The first workshop is clearer

Manual Alloy now uses **two Andesite and two Clay Balls for one Alloy**. Automated mixing improves that to **one of each for one Alloy**.

A Makeshift Mechanism uses four Alloy, four wooden slabs and one Iron Ingot. Eight Makeshift Mechanisms surround an Andesite Casing for the first Andesite Machine. Makeshift crafting is restricted to player crafting menus, keeping it a manual bootstrap.

The first Deployer uses that machine and the Gold Hand craft. It then produces Rotation Mechanisms from a slab, two Alloy deployments and an Iron Hammer. Eight Rotation Mechanisms around a casing make the same machine more efficiently.

There is no second Kinetic Machine to collect. Native wood crafting, Create saw processing and stripped-log casing application remain useful.

## 4. Rubber and logistics have practical choices

TK2's Copper-era script used Thermal sap/resin/latex into Dreams & Desires Raw Rubber. TNK3 uses the selected **Rubberworks Sapper and Resin** route.

Compress **500 mB Resin** over a passive heater such as a lit Campfire, then smoke Raw Rubber into the pack's Rubber. Duplicate Rubberworks rubber/sheet/block outputs are disabled in favour of the chosen material.

Three Rubber make **three Belts**. Three Dried Kelp still make **one Belt**, preserving the early route. Funnels, Tunnels and the basic Pump do not demand unavailable Rubber to bootstrap Rubber production.

Sealed Mechanisms now apply Copper Sheet, Rubber and Glass to a Rotation Mechanism, then finish with a Press.

## 5. AE2 manufacturing belongs in the Create factory

The Inscriber and Extended Inscriber are disabled. Printed circuits and Printed Silicon use **Deployer + reusable die + Press**, with one-loop, guaranteed outputs.

Finished Logic, Calculation, Engineering and Concurrent Processors consume a printed circuit, **one Redstone and one Printed Silicon**, then a Press. This keeps the native material bill while changing the manufacturing method.

AE2 press copying retains the original die and consumes an Iron Block. Initial presses retain their existing meteorite source; the pack does not give away initial tooling.

The Crystal Assembler remains for its other work and has Mechanical Crafter construction. Circuit Cutter processor shortcuts are removed. Molecular Assemblers, Assembler Matrix and ME network equipment remain.

The Calculation Machine is crafted **before** the ME Controller: four Quartz Glass corners, four Calculation Mechanisms on the sides, Certus Dust in the centre. A Stonecutter converts one Machine into one Controller. The former circular construction is gone.

Natural crystal budding remains enabled. Growth Accelerators and Crystal Fixer machines are disabled, without globally cancelling budding ticks.

## 6. Renewable crystals and stone scale with the base

A Growth Lens converts Certus Dust into a Small Quartz Bud. Each native stage requires three explicit 100 mB Water fills: **nine Spout operations and 900 mB total** to reach a Cluster. Crushing returns 2–4 crystals, with an average of three.

The eight custom chute generators supply **Andesite, Veridium, Ochrum, Asurine, Scoria, Diorite, Crimsite and Limestone**. Each uses a catalyst below the adjacent Lava source and a normal Chute below the output. It preserves Create's optimization and direct insertion behavior.

Seventeen real **ExtendedAE Infinity Stone Cells** take over repeated stone supply inside ME storage:

- Calculation/1k: Cobblestone, Andesite, Diorite and Granite.
- Reinforced/4k: Veridium, Ochrum, Asurine, Crimsite, Scoria, Scorchia and Limestone.
- Industrial/16k: Stone, Deepslate, Tuff, Calcite, Basalt and Blackstone.

These are resource-specific cells with native ME behavior. They do not add infinite arbitrary items, free creative power or a general duplication mechanic.

## 7. IE keeps the heavy work

Immersive Engineering is added to the selected production stack, with routine manufacturing transferred to Create where supported.

Metal Press, Sawmill, Bottling Machine, Assembler, Automated Workbench, Mixer, Alloy Kiln, Fermenter, Squeezer and Refinery functions are disabled or converted. Create handles their supported recipes through its own processing families. Conveyor-based routine logistics move to Create.

IE's **Coke Oven, Blast Furnace, Crusher, Arc Furnace, Excavator/Bucket Wheel, electrical wiring and distinctive power machinery** retain purpose.

Reinforced Mechanisms use Electrum Wire, Electronic Component, Steel Plate and a Press. Industrial adds the advanced electronics, Steel Mechanical Component and screwdriver tooling needed for Heavy Engineering.

Create Diesel Generators was already present in TK2. It is retained and takes the selected fuel-production role in TNK3; it is not falsely listed as a brand-new mod. Immersive Petroleum's removal belongs to earlier TNK3 selection decisions, not a demonstrated removal from the TK2 3.05 manifest.

## 8. Ore processing progresses from 1× to 5×

| Capability | Process | Yield |
|---|---|---:|
| Basic | Raw smelting / Millstone route | 1× |
| Brass | 1 Raw → 2 Crushed | 2× |
| Industrial | Each Crushed → 2 Dust | 4× |
| Eclipse | 4 Dust → 5 Ingots | 5× |

Iron, Copper, Gold, Zinc, Aluminium, Nickel, Lead, Silver and Uranium share the supported chain. Zinc has a real tagged dust; packed Raw blocks give 18 Crushed.

Finished metal cannot feed back into a multiplying intermediate. Raw doubling no longer adds the separate three-nugget bonus. Renewable ore-stone bonuses remain where intended.

Crushing Wheels retain their supported recipe byproducts and one 10% Experience Nugget roll. The exactly-one-paintball operation is excluded. Millstone policy keeps primary output rolls while removing unrelated byproducts from safely decoded recipes.

Netherite is not given a new Scrap multiplier.

## 9. Excavation has more discoveries

The Excavator integration adds ten resource deposit definitions and ten rare discovery definitions when optional materials are registered. Existing IE pools gain compatible additions and less ordinary recipe failure/filler.

New metal-bearing stone mixes use 60% matching Create stone and 40% ore. The Certus pocket contains **60% Certus, 20% Sky Stone, 18% Quartz and 2% Fluix**.

Magnetic and Primordial cave deposits connect to Alex's Caves. Ambrosial and Living Root deposits give the Aether and Twilight their own survey opportunities.

These are biome-restricted virtual mineral resources. They do not place ordinary ore blocks, add duplicate vein features or rewrite old generated deposit data. Spawn weights remain relative, rather than percentages per chunk.

## 10. Magic joins the production chain

Ars Nouveau and Iron's Spells remain important continuities from TK2. Ars Elemental, Ars Creo, Create Wizardry, Ars 'n Spells and selected spell integrations develop their connections in TNK3. Just Another Witchery Remake is a selected separate magic path.

The Arcane Mechanism starts from Industrial, fills **400 mB Dragon's Breath**, then receives a Source Gem, Sturdy Sheet and Mana Tube. It has no extra Tuning Fork or finishing Press.

Mana Tubes use **300 mB Mana**. Arcane Essence uses Lapis, Amethyst and an Experience Nugget in a superheated Mixer; one Essence plus 250 mB Water makes 250 mB Mana.

Automatic scroll recipes discover valid enabled/craftable native spells, ink outcomes and supported addon spells. Two Deployers use data-aware allow-list filters to select the school and one exact spell/level. Focus and Ink remain consumed; research-only spells retain their native path.

The latest correction avoids the failing reverse rarity lookup and removes the former forced full-pack startup reload. A powered full-pack scroll line remains a beta validation item.

**Resonant Arcana** continues as the custom spell addon. A changing test-build spell roster is not treated as a fixed public release feature count.

## 11. Eclipse and Creation have a concrete finale

AE2 Singularities and dye processing connect to the Chromatic line. A Dye Entangled Singularity produces exactly one of five possible paintball colours; draining advances colour and recovers Ink. Stop at Purple for Chromatic Compound.

Native Create **Chromatic Compound, Refined Radiance and Shadow Steel** are canonical. Refined Shadow Alloy, Radiant Coils and Spectral Ruby Tubes feed the Eclipse Mechanism. It correctly starts from **Arcane** and consumes 200 mB Uncommon Ink before its Press.

Creation adds graphite/electrode processing, Arc Furnace Lapis Alloy, charging, advanced sheets, an Amethyst Circuit Gate and Matter Constructs.

The Boot Drive is made from a full 16k Item Cell, Radiant Coil and Lapis Block. It is retained **without durability loss in the Unstable Core assembly**; its registered durability is not a consumption instruction.

An Eclipse Lens makes an Unstable Creation Gem in **1,000 ticks at a minimum 32 RPM**. The final Creation Core passes through nine deployments twice, consuming two each of the eight prior mechanisms and two Matter Constructs. At least three Unstable Creation Gems are needed per Core before other upstream costs.

Eight Creation Cores around a Netherite Block craft the Creation Machine endpoint. Functional uses remain unassigned; the wiki does not invent creative-energy or infinite-resource behavior for it.

## 12. Characters have their own development

TK2 used Passive Skill Tree and its addon. TNK3's supplied configuration uses **Pufferfish Skills and TNK Progression**.

The current tree contains **588 one-point nodes**, six configured path families and a **175-point spending limit**. The category does not set an exclusive root and keeps skills after death. The old web planner's class/subclass restrictions are not carried into this guide.

Seven activity tracks cover exploration, crafting, fishing, farming, combat, engineering and mining. Requirements and rewards grow; qualifying actions, natural-resource tracking and cooldowns reduce repetitive farming.

Character XP is distinct from vanilla XP points. Configured growth ceilings and team unlock sharing exist, but a final reward-to-chapter map needs the matching quest export. Mob scaling uses the supplied ±4 variance and configured health/damage factors.

The wiki now includes a searchable **read-only node reference**, rather than an outdated authoring planner.

## 13. Twenty backgrounds and independent titles

TNK Progression 1.2.0-private.1 implements **twenty origins with two perks each**. The first Character visit opens a three-page chooser. Players can preview a background before confirming.

Choices cover mining, woodcutting, farming, mounts, fishing, hunting, repairs, building, engineering, enchanting, potions, gathering, trading, travel, swimming, defence, stealth, undead encounters, resilience and mana.

Bonuses have concrete limits: natural ore/log receipts, actual repairs, potion drinking, controlled living mounts, separate block reach and vanilla XP. Hedge Mage requires Iron's mana attributes.

Existing confirmed origins retain their saved perk revision. Cosmetic titles, passive title selection, origins and tree points remain separate systems.

Founder uses the stable beta-tester title ID and is cosmetic. The pack can grant configured titles to account UUIDs at login; the shipped roster is empty. Titles have supported commands, while final quest reward assignments remain part of the book rebuild.

## 14. Equipment gets discovery and salvage

The custom **Unidentified Loot** system connects modded equipment pools to identification, rarity, Apotheosis affixes, collection and salvaging. The Mechanical Identifier brings that loop into Create.

Six qualities are Common/white, Uncommon/green, Rare/pink, Epic/purple, Legendary/light blue and Mythic/orange. Tier and rarity remain separate.

The supplied config includes **48 boss pool definitions** and dimension routing for Aether, Twilight, Nether and End families. Identification and salvage use configured vanilla XP-point costs; signature effects and refund caps limit reward loops.

The base export's older embedded JAR and later config revisions need alignment in the final release. The wiki documents the system without claiming a fresh complete-pack loot test.

## 15. Workshop adds settlement tools

Towns & Kingdoms Workshop provides the Quest Projector, Measuring Pencil, Builder's Satchel, Builder's Brush, mirrors, Mob Cage and the single-use Spawner Cage.

The Projector supports quests/tasks, images and formatted text. Spawner tooltips expose operational settings; a captured Spawner Cage is consumed after placement.

The **Trading Hub** adds owner-editable destination listings, search, sorting, pages, icons and Waystones-backed teleportation. It is a shop directory and travel feature; actual item trading belongs to the shop built at the destination.

Workshop 0.11.10 preserves the Trading Hub's purple GUI, corrected vanilla-scale layout, original back arrow and Teleport control. **No Hub is automatically granted on login.** The intended starter route is an FTB Quests reward using the stable Sharestone item ID.

The globe is a block renderer rather than a ticking statue entity. Full claims, multiplayer transactions and live cross-dimension integration still need the final combined-pack test.

## 16. Teaching and recipe discovery are rebuilt

**Ponder Collection 1.3 contains 97 authored scenes.** The lessons cover production, processors, magical materials, industrial multiblocks, generators, Conduit Cage and Workshop features.

Recent refinements use actual Belt items, adjacent assembly stations, aligned fan/Depot heights, compact platforms and purposeful multiblock camera rotation/zoom. The Trading Hub shows both halves. Workshop includes the optional IE rendering and Enchantment Industry/Apotheosis salvage fixes.

Players can hover supported items directly in quest tasks and hold W. Native mod lessons remain alongside the custom collection.

JEI gains **nineteen named tag searches**, centralized information pages and short tooltips for important conditions. Visible custom names no longer receive a redundant TNK prefix. Cinder recipes use native **Create Cinder Flour**; the obsolete custom dust has a migration conversion.

The current runtime has **92 JavaScript files: 11 startup, 76 server and 5 client**. Shared catalogues, recipe-plan validation, safer optional-mod handling, removal batching and recipe timings replace repeated scattered logic. This count describes source files, not a claim of faster measured full-pack startup.

## 17. Exploration becomes more flexible

TK2 3.05's LockDimensions script explicitly locked the End, Aether, Nether and Twilight Forest on server load through Dimension Access Manager.

The current custom route does not reproduce those blanket locks. The Wither and exploration dimensions remain outside a mandatory global factory stage. Native End Remastered and Twilight requirements remain.

Alex's Caves, Alex's Mobs, BetterEnd, BetterNether, YUNG's structures and other families continue through newer ports/projects. Integrated structures and selected boss mods expand the encounter stack.

The terrain direction is **Wildshape**, with Streams Reflowing and Flow Control. The uploaded base still uses UltraTerraForged-era files; final curated biome/preset decisions need the matching release package.

The new custom End Remastered boss/chest mapping file is currently empty. Native eye sources remain. Proposed boss bounties, rematch tokens and timers are not represented as fully configured features yet.

## 18. A comfortable base still matters

Farmer's Delight, building blocks and established storage families remain part of the pack. Croptopia, vegetable/corn/fruit integrations, Nature's Spirit and the updated Let's Do family broaden farming and building choices.

Practical fiber, string, paper and building-material alternatives connect biomes to everyday use without adding a mechanism tax to every household item.

The selected infinite-food restrictions remove Everlasting Beef, Eternal Steak and conditional Infinity Ham. Normal meals remain useful. Spice of Life: Carrot Edition is selected; its final milestones are not copied from an older TK2 assumption.

MineColonies is absent from the supplied TNK3 manifest. Older candidate pages and inherited quest entries do not establish that it is installed. The current settlement guide focuses on player-built towns, shared infrastructure and trading.

## 19. Targeted restrictions replace accidental shortcuts

Selected Ender Leads, mob-capture upgrades, Spatial Anchor, IE Chunk Loader, duplicate Rubberworks materials and the Alex's Caves Nuclear Bomb are disabled. The custom hook also blocks primed nuclear bomb entities.

Capturing enchantment acquisition and the selected spawner runes that ignore conditions, ignore players or remove AI are restricted. Boss jar capture remains protected.

The Apotheosis flying-potion route is disabled. The **Angel Ring** has the specified 11 × 7 wing-shaped Mechanical Crafter recipe, with forty ingredients at the Arcane tier. Its own flight behavior stays native.

Linked Chest and Pouch construction now require Light Engineering. Apotheosis station construction progresses through Copper, Brass, Calculation, Light Engineering and Arcane ingredients, retaining native station operations.

Hidden legacy/developer items are distinguished from disabled gameplay items. Existing stacks are not described as automatically erased.

## 20. The manifest comparison

The TK2 export contains **323 CurseForge project entries**. The TNK3 base export contains **283**. By exact project slug, **106 are retained, 177 are newly present and 217 are absent**.

These entries include mods, libraries, shaders and resource packs. Local custom JARs and the later LinkedChests reference sit outside that manifest-only comparison. A port migration can put the old project in the absent list and its replacement in the added list.

| Family | TK2 project / role | TNK3 project / role |
|---|---|---|
| Alex's Caves and Mobs | Original Forge projects | Selected NeoForge ports |
| BetterEnd / BetterNether / BCLib | Original projects | New Dawn projects |
| YUNG's structures | Forge projects | NeoForge projects |
| Rendering/shaders | Embeddium / Oculus | Sodium / Iris |
| Skill system | Passive Skill Tree family | Pufferfish + TNK Progression |
| Heavy progression | TFMG / Thermal / Ad Astra era | IE + Create-integrated ten-chapter route |
| Player-linked storage | Ender Storage | Later supplied LinkedChests integration |
| Colony management | MineColonies family | Not in the supplied current manifest |
| Magic candidates | Botania / Malum in TK2 | Not restored from inherited quest labels |

[Browse every added, retained and absent project](https://mikaaah.github.io/TownsAndKingdoms/mods/comparison/). The reference retains exact project URLs and authors so replacement families can be inspected.

## 21. Questing and release status

The selected quest structure includes Tutorial, Progression, Market, Useful Items, Bulletin Board, ten production chapters, mod-specific branches, Exploration, Bosses and The Eyes.

The target is **at least 1,500 useful quests**. The supplied current base export has 1,240 records across 24 chapter files, compared with TK2's 1,241 across 24. Their inherited text and old items mean that number is not a finished TNK3 quest count.

Final completion/title rewards, boss-to-eye assignments, server-board jobs and rematch costs need a complete current export. Existing confirmed design choices are retained as direction, without labelling unfinished wiring as implemented.

Official EU/US communities and events remain the multiplayer direction. Live addresses, availability and beta windows should come from the current pack/Discord, not guessed wiki entries.

## 22. What was checked for this wiki revision

The rewrite inspects actual archive manifests, current JavaScript, skill definitions, configs, custom JAR resources and supplied feature source. It preserves TK2 documentation separately and records source hashes.

The published documentation removes the outdated planner, fake current recipe totals and obsolete campaign names. Current guides, node/title/Ponder references, project comparison, redirects, search, internal links and responsive presentation are checked as documentation.

This work does **not** claim a new Minecraft launch, a complete multiplayer playthrough or universal compatibility. Historical tests shipped with packages retain their original scope. The next combined beta still needs current quest files, final terrain settings and one matched manifest/JAR/config set.

Primary release baseline: [TK2 3.05 on CurseForge](https://www.curseforge.com/minecraft/modpacks/towns-kingdoms/files/5735918). See [snapshot sources](https://mikaaah.github.io/TownsAndKingdoms/status/) for archive identities and hashes.
