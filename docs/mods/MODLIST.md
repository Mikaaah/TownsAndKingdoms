# T&K3 Mod List — 1.21.1 NeoForge

**Baseline:** 2026-09-28  
This is the current **v0.2 target list** for the first serious compatibility/progression instance. It is curated around Create → electrification → Mekanism → AE2, Epic Fight combat, integrated Ars/Iron's magic, a custom timed cave-expedition dimension, and a deliberately curated adventure/world layer. MineColonies is no longer assumed as a core pillar because of server-cost concerns.

## Status

- **Core** — intended pillar of the pack
- **Include** — install in the main prototype
- **Testing** — install/test, but not locked
- **Optional later** — do not add to the first instance unless a gap appears
- **Hold / reject** — intentionally excluded for now

## Foundation / pack development

| Mod | Status | Role |
|---|---|---|
| Create | Core | Physical manufacturing and early/mid mechanical industry |
| Applied Energistics 2 | Core | Digital storage, logistics and autocrafting |
| Mekanism | Core | Advanced powered processing, chemistry and high-tech industry |
| Mekanism Generators | Include | Late industrial power progression |
| KubeJS | Core | Recipes, events, progression integration and custom content |
| LootJS | Include | Curated dungeon/boss/structure loot |
| KubeJS Additions | Include | Extra scripting/integration tools |
| ProbeJS | Dev-only | Registry/API discovery during development |
| FTB Quests | Core | Main story and reference books |
| FTB Teams | Include | Team quest progression |
| JEI | Core | Recipe discovery |
| Jade | Include | Machine/block information |
| Curios API | Dependency/core utility | Equipment/accessory integration |

## Create ecosystem

| Mod | Status | Role |
|---|---|---|
| Create: Connected | Include | High-value factory/QoL blocks |
| Create: Copycats+ | Include | Flexible factory and town building |
| Create Deco | Include | Industrial building palette |
| Steam 'n' Rails NeoForge | Include / test | Trains and kingdom logistics |
| Create Crafts & Additions | Include | **Primary bridge from rotation to FE** |
| Create Slice & Dice | Include | Farmer's Delight automation |
| Create: Colony | Include / test | MineColonies ↔ Create integration |
| Create Power Loader | Optional later | Large contraption/train utility |
| Create Enchantment Industry | Optional later | Only if XP/enchant automation earns a role |
| Create: The Factory Must Grow | Hold | Mekanism already fills advanced industry; avoid duplicate tech trees |

**Design rule:** Create remains the main **item logistics / physical manufacturing** language. Mekanism Logistical Transporters are heavily gated or disabled until late game. Mekanism cables, fluid pipes and chemical tubes remain available when their systems need them.

## Combat / equipment / character

| Mod | Status | Role |
|---|---|---|
| Epic Fight | Core | Locked combat foundation |
| Passive Skill Tree NeoForge | Core concept / hard testing | Character build backbone; new unofficial port needs heavy testing |
| Weapons of Miracles | Include | Signature Epic Fight weapons/movesets |
| L_Ender's Cataclysm | Core adventure | Bosses, structures and special equipment |
| Mowzie's Mobs | Include | Memorable elites/bosses |
| Simply Swords | Testing | Large normal weapon asset pool; only keep curated weapons |
| Artifacts | Include | Exploration relics |
| Relics | Optional later | Only if it adds build choices without overwhelming equipment balance |
| T&K Epic Fight compatibility layer | Core custom | Our own datapack/resource compatibility and balance layer |

**Equipment rule:** default recipes/stats are not authoritative. T&K decides weapon tier, manufacturing route, moveset category and power budget.

## Magic

T&K3 deliberately uses **both Iron's Spells and Ars Nouveau**, but integrates them rather than presenting two isolated quest islands.

| Mod | Status | Role |
|---|---|---|
| Iron's Spells 'n Spellbooks | Core | Combat magic, spell loot, magical structures/bosses |
| Ars Nouveau | Core | Arcane crafting, rituals, Source and automation |
| Ars 'n Spells | Core integration | Bridges mana/equipment/spell systems between Ars and Iron's |
| Alex's Caves: Spellbooks | Include | Direct Alex's Caves ↔ Iron's integration |
| Summoning Rituals | Testing | Packdev ritual/boss/custom-recipe framework |
| Monsters & Spellbooks | Testing later | 90+ extra spells, mobs and two schools; potentially good but high bloat risk |
| Cursed School | Testing later | Interesting corruption/dark-school system; currently very new |
| Reliquified Iron's Spells | Optional later | Only if Relics is selected |
| Iron's RPG Tweaks | Hold | Overlaps Epic Fight + Passive Skill Tree + our own balance rules |
| T.O Magic 'n Extras | Reject for 1.21.1 | Published 1.21.1 build is deprecated / marked not to use |
| Malum | Hold for now | Good mod, but Ars + Iron's already provide two full magic languages |
| Botania | Reject for target | Not part of current 1.21.1 foundation |

## Alex ecosystem

| Mod | Status | Role |
|---|---|---|
| Alex's Caves Continued | **Include** | Major underground exploration pillar; six large cave biomes/content ecosystem |
| CodxLib | Dependency | Required by Alex's Caves Continued / Continued ecosystem |
| Alex's Mobs Continued | **Include** | Creature/ecology variety; use Continued line for consistency |
| Alex's Caves: Spellbooks | Include | Iron's integration |
| Alex's Delight | Testing | Alex's Mobs ↔ Farmer's Delight integration |
| Alex's Caves Continued Delight | Testing | Alex's Caves ↔ Farmer's Delight integration |
| Alex's Patches | Only if needed | Port-specific fixes if our chosen builds require them |

**Port rule:** use the **Continued** Alex projects where possible rather than mixing multiple unrelated ports.

## Ice & Fire

| Mod | Status | Role |
|---|---|---|
| IceAndFire Community Edition | **Testing** | Dragons, legendary materials, structures and potential boss/equipment progression |
| Dragon Care | Optional later | Only if dragon husbandry becomes a real kingdom feature |
| Ice and Fire: Spellbooks | Hold | Do not plan around it until a verified compatible 1.21.1 build matches our IAFCE setup |

Ice & Fire is **not locked yet**. Run it in the compatibility/seed test because the current 1.21.1 NeoForge Community Edition is mature enough to evaluate, but keep it only if dragon/worldgen density and equipment balance justify the footprint. Epic Fight compatibility can be authored by T&K.

## Dimensions / major adventure

| Mod | Status | Role |
|---|---|---|
| Twilight Forest | Include | Curated progression dimension |
| Twilight Tweaks | Include | Custom final encounter/function hooks |
| Twilight Forest Final Boss Remake | Testing | Possible Castle Keeper/final encounter base |
| The Aether | Optional later | Only if it receives a defined chapter role |
| Deeper and Darker | Optional later | Same rule |
| Ad Astra | Optional later | Expedition content, never final goal |

## World generation / structures

| Mod | Status | Role |
|---|---|---|
| Tectonic | Include | Terrain foundation |
| Regions Unexplored | Include | Biomes/building palette |
| Alex's Caves Continued | Include | Underground mega-biomes |
| Integrated Dungeons and Structures | Testing | Primary general structure suite if density is acceptable |
| YUNG's Better Strongholds | Include | Stronger End route |
| Lootr | Include | Multiplayer-safe structure loot |
| YUNG's Better Dungeons | Hold | Add only if IDAS leaves a clear dungeon gap |
| Dungeons & Taverns | Hold | Avoid stacking structure generators blindly |

Run a **seed-density sweep** before adding any more structure mods. Alex's Caves + Iron's structures + Cataclysm + Twilight + possible Ice & Fire already create substantial exploration content.

## Kingdom / settlement

| Mod | Status | Role |
|---|---|---|
| MineColonies | **Optional / performance test** | Excellent settlement simulation, but no longer a required progression pillar |
| Structurize | Only with MineColonies | Dependency / building tooling |
| Create: Colony | Only with MineColonies | Mechanical-colony bridge |

**Performance rule:** T&K3 must not require MineColonies for the main progression. If profiling shows unacceptable server CPU/chunk-loading cost, remove it without redesigning the pack. The kingdom fantasy can instead be delivered through T&K contracts, construction milestones, resource deliveries, structures and world events.

## Food / preparation

| Mod | Status | Role |
|---|---|---|
| Farmer's Delight | Core food | Main cooking ecosystem |
| Create Slice & Dice | Include | Industrial cooking |
| Alex's Delight | Testing | Alex's Mobs food integration |
| Alex's Caves Continued Delight | Testing | Cave-food integration |
| Let's Do: Vinery | Optional later | Only if drinks receive a clear buff/economy role |
| Let's Do: HerbalBrews | Optional later | Only if it fills a preparation niche |

Avoid the previous giant Let's Do food suite.

## Building / decoration

| Mod | Status | Role |
|---|---|---|
| Supplementaries | Include | Town utility and decoration |
| Quark | Include / configure | Vanilla+; disable overlapping modules |
| Handcrafted | Include | Furniture |
| Create: Copycats+ | Include | Architectural flexibility |
| Create Deco | Include | Industrial decoration |
| Chipped | Optional later | Large decorative library; add if JEI/content load is acceptable |
| Refurbished Furniture | Optional later | Only if functional furniture is worth the overlap |

## Storage / travel / QoL

| Mod | Status | Role |
|---|---|---|
| Applied Energistics 2 | Core | Main storage/logistics system |
| Sophisticated Backpacks | Include | Player inventory utility |
| Sophisticated Storage | Optional / early only | Must not make AE2 progression irrelevant |
| Waystones | Include / gate | Travel convenience with meaningful cost |
| JourneyMap | Include | One map system only |
| Nature's Compass | Optional later | Anti-frustration biome finder |
| Explorer's Compass | Optional later | Major-structure finder if needed |
| FTB Chunks | Optional | Claims/chunk loading if server design needs it |

## Performance / client baseline

| Mod | Status |
|---|---|
| ModernFix | Include/test |
| FerriteCore | Include/test |
| Embeddium | Include/test |
| Entity Culling | Include/test |

Benchmark after each major content batch, especially **Alex's Caves + Alex's Mobs + Cataclysm + Ice & Fire**. MineColonies gets a separate A/B server-performance profile before inclusion.

# v0.2 first serious test instance

Install together:

**Create + Connected + Copycats+ + Deco + Crafts & Additions + Slice & Dice + Steam 'n' Rails**  
**AE2**  
**Mekanism + Mekanism Generators**  
**KubeJS + LootJS + KubeJS Additions + FTB Quests + JEI + Jade**  
**Epic Fight + Weapons of Miracles + Passive Skill Tree**  
**Iron's Spells + Ars Nouveau + Ars 'n Spells + Alex's Caves: Spellbooks**  
**Alex's Caves Continued + Alex's Mobs Continued**  
**Cataclysm + Mowzie's Mobs + Twilight Forest + Twilight Tweaks**  
**Farmer's Delight + Alex's Delight (test)**  
**Tectonic + Regions Unexplored + IDAS + Better Strongholds + Lootr**  
**Supplementaries + Quark + Handcrafted + Sophisticated Backpacks + Waystones + JourneyMap**  
**ModernFix + FerriteCore + Embeddium + Entity Culling**

Then add **IceAndFire Community Edition** as the first large A/B test. If it improves the pack without saturating worldgen or undermining equipment progression, promote it to Include.
