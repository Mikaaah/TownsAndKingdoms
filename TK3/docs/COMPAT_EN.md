# Compatibility & geology

## Current KubeJS runtime v2 · 6 October 2026

The current fixed package uses **40 mod-specific compatibility recipe modules** under kubejs/server_scripts/recipes/compat/. These are the live script inventory for the current runtime; the decision tables below preserve the earlier broad mod/geology review.

| Module |
|---|
| ae2 |
| aeronautics |
| alexscaves |
| apotheosis |
| appmek |
| ars_nouveau |
| atmospheric |
| autumnity |
| betterend |
| betternether |
| biomesoplenty |
| biomeswevegone |
| bloomingnature |
| cataclysm |
| chipped |
| create |
| create_aquatic_ambitions |
| create_ars_nouveau |
| create_dragons_plus |
| create_enchantment_industry |
| create_hypertube |
| create_wizardry |
| createaddition |
| createminecolonies |
| environmental |
| farmersdelight |
| iceandfire |
| irons_jewelry |
| irons_spellbooks |
| mekanism |
| mekanismgenerators |
| mekanismtools |
| minecraft |
| quark |
| simulated |
| sliceanddice |
| sophisticatedbackpacks |
| sophisticatedstorage |
| twilightforest |
| upgrade_aquatic |

See [COMPAT_RUNTIME_V2.md](COMPAT_RUNTIME_V2.md) for package notes and the static validation boundary. The compatibility module inventory is not a runtime boot test.


Every entry in the 175-mod export has a documented decision. Registry IDs were checked. This review separates changed industry, native support and later-tier work; it does not claim that every native mod recipe was executed in Minecraft.

## Building a stone generator

Build a normal lava/water cobblestone or stone generator. Directly beneath the generated block, place the selector material (the lens). One block below the lens, place the required machine frame.

**Vertical order: generated stone → material lens → machine frame.** The lens and frame remain in place. A drill breaks and collects each generated block. The placement event replaces only cobblestone or stone; obsidian remains unchanged. An absent or incorrect foundation preserves native generation.

There is no tick scanner, global coordinate cache or forced chunk loading. Build and check the native lava/water layout first, then add the foundation. Washing a listed crushed raw mineral gives nine nuggets, equivalent to one ingot.

| Generated stone | Lens beneath stone | Frame beneath lens | Millstone yield | Crushing yield |
|---|---|---|---|---|
| minecraft:andesite | minecraft:polished_andesite | kubejs:tk3_kinetic_machine | minecraft:clay_ball | 2x minecraft:clay_ball |
| minecraft:diorite | minecraft:quartz_block | kubejs:tk3_kinetic_machine | minecraft:quartz | 2x minecraft:quartz |
| minecraft:granite | minecraft:bricks | kubejs:tk3_kinetic_machine | minecraft:lapis_lazuli | 2x minecraft:lapis_lazuli |
| create:limestone | minecraft:calcite | kubejs:tk3_kinetic_machine | minecraft:bone_meal | 2x minecraft:bone_meal |
| create:scoria | minecraft:netherrack | kubejs:tk3_hydraulic_machine | minecraft:redstone | 2x minecraft:redstone |
| create:scorchia | minecraft:blackstone | kubejs:tk3_hydraulic_machine | minecraft:coal | 2x minecraft:coal |
| create:veridium | minecraft:copper_block | kubejs:tk3_hydraulic_machine | 3x create:copper_nugget | create:crushed_raw_copper → wash → 9x create:copper_nugget |
| create:crimsite | minecraft:iron_block | kubejs:tk3_hydraulic_machine | 3x minecraft:iron_nugget | create:crushed_raw_iron → wash → 9x minecraft:iron_nugget |
| create:asurine | create:zinc_block | kubejs:tk3_precision_machine | 3x create:zinc_nugget | create:crushed_raw_zinc → wash → 9x create:zinc_nugget |
| create:ochrum | minecraft:gold_block | kubejs:tk3_precision_machine | 3x minecraft:gold_nugget | create:crushed_raw_gold → wash → 9x minecraft:gold_nugget |


The lens is a one-time seed investment; Nether materials, quartz or zinc may require exploration first. The tier-1 millstone is available from a manually crafted Kinetic Machine. Higher-tier foundations cannot be placed before their stage. Natural stones can still be collected: the generator tier controls renewable production rather than all access to its resource.

## Timber and vanilla materials

Two hundred verified log/wood/stem/hyphae-to-planks pairs support saw recipes. Processing uses a stripped counterpart when available; otherwise it produces planks directly. Verified item/block log and plank tags are extended. There is no blanket burnable tag, preserving fireproof timber behaviour.

| Input | Process | Result |
|---|---|---|
| Gravel | Milling | Sand |
| Gravel + clay ball + 250 mB water | Compacting | 2 dirt |
| Dirt + 250 mB water | Mixing | Mud |
| Mud | Fan washing | Clay ball |
| Sand | Haunting | Soul sand |
| Bone meal + clay ball | Compacting | Calcite |
| Copper oxidation stages | Controlled fan washing | Next oxidation stage |

Other native applications, including wax removal, remain available. Saw routes produce six planks per timber input, or three for bamboo blocks. Native crafting remains the bootstrap option.

## Storage and backpacks

Ninety-nine recipes cover upgrade bases, production upgrades, controllers and sequential container tiers. Native basic chests, barrels, backpacks, shulker boxes, dye and cosmetic variants remain.

The native component-preserving `storage_tier_upgrade`, `backpack_upgrade` and `upgrade_next_tier` serializers are used. Ordinary shapeless copies could lose stored contents or upgrade settings.

Base upgrades start in tier 1. Selected pickup/filter/feeding utilities start in tier 2; advanced utilities and Stack Upgrade 1 in tier 3; pump/alchemy in tier 4; diamond containers and Stack Upgrade 2 in tier 5. The exact item assignment appears in the recipe catalogue. Forty-eight skip-tier, stack-conversion or infinity routes are removed pending later tiers. Container tokens allow adjacent steps only.

An existing backpack with preinstalled upgrades is not sanitised by a loose-item stage restriction. Existing storage loot is not downgraded. Test full inventories, components and access enforcement before release.

## Complete mod review

| Mod | Decision for this revision |
|---|---|
| Autumnity | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| Epic Fight x Iron's Spells: Enhanced Animations | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| MineColonies | Native colony/building recipes retained; optional colony quest; no duplicate factory or colony gate. |
| Apothic Attributes | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Integrated API | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| Zeta | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Apothic Spawners | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Architectury API | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Bosses'Rise - Epic Souls like boss fights | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Citadel (Unofficial Port) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Reese's Sodium Options | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Sable | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| End Remastered [NeoForge/Fabric] | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| FTB XMod Compat | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| BetterEnd: New Dawn | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| Simply Tooltips | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Ars Nouveau | Production devices, essence, runes and ink integrated; combat glyphs/spells and initial imbuement/Source remain native. |
| Amplified Nether | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| Blueprint | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Modonomicon | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| FTB Quests (NeoForge) | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| Integrated Mowzie's Mobs | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| AStages FTB Quests | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| Placebo | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Farmer's Delight | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Simply Swords [Fabric & Forge] | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Cataclysm: Spellbooks | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Integrated Villages | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| AppleSkin | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Integrated Dungeons Arise | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| ImmediatelyFast | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| BadOptimizations | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Create Aeronautics | Selected relevant devices/parts integrated; other native addon recipes retained. See catalogue and stage restrictions. |
| Supplementaries | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Create: MineColonies Link | Selected relevant devices/parts integrated; other native addon recipes retained. See catalogue and stage restrictions. |
| Ars Creo | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| [Let's Do] BloomingNature | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| FastSuite | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| FastBoot | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| LootJS: KubeJS Addon | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| FTB Library (NeoForge) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Better Party X FTB Teams | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| IceAndFire Community Edition | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Create: Ars Nouveau Compat | Selected relevant devices/parts integrated; other native addon recipes retained. See catalogue and stage restrictions. |
| Fzzy Config | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Epic Fight | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Dynamic FPS | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| GuideME | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| spark | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Apothic Enchanting | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Sophisticated Storage | Upgrades and container-tier routes changed; basic containers/dyes remain native; higher tiers reserved. |
| Better Advanced Tooltips | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| ProbeJS | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| Rhino | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| TownTalk | Native colony/building recipes retained; optional colony quest; no duplicate factory or colony gate. |
| Mowzie's Mobs | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| GlitchCore | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| WorldWeaver: New Dawn | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Amendments | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Integrated Simply Swords | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| FreeTerraForged | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| FTB Ranks (NeoForge) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Sophisticated Backpacks | Upgrades and container-tier routes changed; basic containers/dyes remain native; higher tiers reserved. |
| KubeJS Ars Nouveau | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| Ars Sable | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| GTBC's Geomancy Plus - Iron's Spells Addon | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Integrated Cataclysm | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Mekanism Generators | Steel, initial FE/machines and raw-metal refining changed; higher machines reserved for stage 6+; native chemistry retained. |
| Moonlight Lib | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Create: Compat Core | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| CorgiLib | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Minecolonies: Epicfied (Epic Colonies) | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Apothic Compats | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Atmospheric | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| playerAnimator | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Apothic Category Compat | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Lithium (Fabric/NeoForge) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Jupiter | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Curios API | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Jade 🔍 | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Just Enough Items (JEI) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| BetterNether: New Dawn | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| Better Party | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Applied Energistics 2 | Twelve recipes prepared; AE2 reserved for stage 6; other network recipes remain native pending later design. |
| The Twilight Forest | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| KubeJS Iron's Spells | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| Alex's Caves (Unofficial Port) | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| GeckoLib | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| FTB Essentials (Forge & Fabric) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Mouse Tweaks | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| TerraBlender (NeoForge) | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| Sophisticated Core | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Create: Wizardry | Selected relevant devices/parts integrated; other native addon recipes retained. See catalogue and stage restrictions. |
| Sophisticated Backpacks Create Integration | Selected relevant devices/parts integrated; other native addon recipes retained. See catalogue and stage restrictions. |
| Create Aeronautics: Mekanism Compatibility | Selected relevant devices/parts integrated; other native addon recipes retained. See catalogue and stage restrictions. |
| Patchouli | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Create: Enchantment Industry | Selected relevant devices/parts integrated; other native addon recipes retained. See catalogue and stage restrictions. |
| Chunky (Forge/NeoForge) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Jade Addons (Neo/Forge) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| AllTheLeaks (Memory Leak Fix) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Alex's Mobs (Unofficial Port) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Iron's Spells x Aeronautics Compat | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| BlockUI | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Mekanism Tools | Native gear retained; outside the automation progression. |
| BetterF3 | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| BCLib: New Dawn | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Integrated Patches | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| Ars 'n Spells | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Iron's Spells 'n Spellbooks | Production devices, essence, runes and ink integrated; combat glyphs/spells and initial imbuement/Source remain native. |
| KubeJS Create | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| Waystones | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Multi-Piston | Native colony/building recipes retained; optional colony quest; no duplicate factory or colony gate. |
| Weapons of Miracles - epic fight | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Spellbooks Of Twilight : Iron's Spells x The Twilight Forest Addon | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Distant Horizons: A Level of Detail mod | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Controlling | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Ponder for KubeJS | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| Structurize | Native colony/building recipes retained; optional colony quest; no duplicate factory or colony gate. |
| Lootr (Forge & NeoForge) | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| KubeJS Additions | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| Passive Skill Tree NeoForge | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| YUNG's Better Nether Fortresses (NeoForge) [1.20.4 - 1.21.1 ONLY] | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| FTB Teams (NeoForge) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Alex's Caves: Spellbooks | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| Nullscape | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| AStages Curios | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| Sodium | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Applied KubeJS | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| Domum Ornamentum | Native colony/building recipes retained; optional colony quest; no duplicate factory or colony gate. |
| Better Party X Waystones | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| AStages | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| FTB Ultimine (NeoForge) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| L_Ender 's Cataclysm | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Just Another Witchery Remake | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| Cloth Config API (Fabric/Forge/NeoForge) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Quark | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| Upgrade Aquatic | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| Uranus | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Integrated Stronghold | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| FerriteCore ((Neo)Forge) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Shulker Box Tooltip [Fabric/Forge/NeoForge] | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Biomes O' Plenty | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| Ace's Spell Utils | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Integrated  Seven Seas | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| Integrated Dungeons and Structures | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Apotheosis x Iron's Spellbooks Compat | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Mekanism | Steel, initial FE/machines and raw-metal refining changed; higher machines reserved for stage 6+; native chemistry retained. |
| Apotheosis | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| GTBC's SpellLib/API | Native combat/enchanting/boss progression retained; later boss and gear layers require separate design. |
| Oh The Trees You'll Grow | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| FTB Chunks (NeoForge) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Create | Machine/frame economy, parts and geology changed; other support and decoration remain native. |
| YUNG's API (NeoForge) [1.20.4-1.21.1 ONLY] | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Create: Dragons Plus | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Sophisticated Storage Create Integration | Selected relevant devices/parts integrated; other native addon recipes retained. See catalogue and stage restrictions. |
| Create Crafts & Additions | Selected relevant devices/parts integrated; other native addon recipes retained. See catalogue and stage restrictions. |
| KubeJS Mekanism | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| AzureLib | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Entity Culling Fabric/Forge | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Iron's Lib | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Environmental | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| Iris Shaders | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Searchables | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| YUNG's Better Dungeons (NeoForge) [1.20.4 - 1.21.1 ONLY] | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| KubeJS | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| Recipe Linkage | Scripting, access and recipe infrastructure; no material tier. Check runtime and reload behaviour. |
| Biolith | Native world generation and loot retained; structure machine loot requires live bypass testing. |
| Kotlin for Forge | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| ModernFix | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Oh The Biomes We've Gone | Existing timber pairs integrated where registry matches exist; world generation, bosses and other content remain native. |
| Waystones: Sable (Create Aeronautics Addon) | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Lionfish API | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Create Aeronautics: FTB Chunks | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| WunderLib: New Dawn | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |
| Balm | Native support, UI, performance, API or other gameplay retained; no new recipe dependency introduced. |


Architect’s Palette is an explicit addition: its real Algal Blend item receives two binder recipes. Thermal, Botania and Ad Astra dependencies from T&K2 are not reintroduced.
