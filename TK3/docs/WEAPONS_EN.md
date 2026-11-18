<p align="center"><img src="../handbook-source/brand/tklogo.png" alt="Towns & Kingdoms 3 — Beyond the Forge" width="440"></p>

# Weapons & combat styles

**CB 1.1.2 development catalogue · Minecraft 1.21.1 · NeoForge · Java 21**

[Open the visual armoury](https://mikaaah.github.io/TownsAndKingdoms/weapons/) · [Download CSV](../handbook-source/current/assets/weapons/weapon-overview.csv) · [Exact catalogue JSON](../handbook-source/current/data/weapons.json)

**514 weapon entries**, **20 shields**, **98 mapped tools and utilities**. The 14 excluded original WoM weapons have their own section below.

Browse the visual armoury for filters, item details, per-hand attributes, impact, extra targets and verified base item stats. These tables keep the full list readable directly on GitHub.

## Read the stats

- Damage and speed columns show **additive native capability bonuses**, not final damage or DPS.
- Armor negation is an additive bonus in **percentage points**. A range covers different declared weapon styles.
- **Preset** means no explicit value is supplied for that field; the native type supplies it.
- Base item damage and attack speed are verified separately for 138 weapons (all 133 Simply Swords weapons and five Thaumaturge Tinker weapons). Open the visual armoury for those values.
- Exact item IDs are included even when a display label is derived from the registry name.

## At a glance

| Category | Entries |
| --- | ---: |
| Melee weapons | 483 |
| Ranged weapons | 31 |
| Shield mappings | 20 |
| Mapped tools and utilities | 98 |
| Excluded original WoM weapons | 14 |

| Melee moveset family | Entries |
| --- | ---: |
| Dawn Day | 262 |
| Epic Fight | 125 |
| WoM | 54 |
| WoM Plus | 36 |
| TNK | 6 |
| Unassigned | 0 |

## Choose a mod

| Mod | Melee | Ranged |
| --- | ---: | ---: |
| [Alex’s Caves](#weapons-combat-alexscaves) | 7 | 2 |
| [Applied Energistics 2](#weapons-combat-ae2) | 6 | 0 |
| [Archaion](#weapons-combat-archaion) | 1 | 1 |
| [Ars Nouveau](#weapons-combat-ars_nouveau) | 1 | 1 |
| [Bosses’Rise](#weapons-combat-block_factorys_bosses) | 6 | 0 |
| [Cataclysm](#weapons-combat-cataclysm) | 21 | 5 |
| [Cataclysm: Spellbooks](#weapons-combat-cataclysm_spellbooks) | 8 | 0 |
| [Celestisynth](#weapons-combat-celestisynth) | 7 | 1 |
| [Create](#weapons-combat-create) | 1 | 1 |
| [Create: Diesel Generators](#weapons-combat-createdieselgenerators) | 0 | 2 |
| [Deep Aether](#weapons-combat-deep_aether) | 6 | 1 |
| [Deeper and Darker](#weapons-combat-deeperdarker) | 4 | 0 |
| [Epic Fight](#weapons-combat-epicfight) | 33 | 0 |
| [Epic Fight: Dawn Day](#weapons-combat-epicfight_dd) | 46 | 0 |
| [Farmer’s Delight](#weapons-combat-farmersdelight) | 5 | 0 |
| [Hybrid Aquatic](#weapons-combat-hybrid_aquatic) | 5 | 0 |
| [Immersive Engineering](#weapons-combat-immersiveengineering) | 2 | 3 |
| [Iron’s Spells ’n Spellbooks](#weapons-combat-irons_spellbooks) | 17 | 1 |
| [Knaves’ Needs](#weapons-combat-knavesneeds) | 60 | 0 |
| [Legendary Monsters](#weapons-combat-legendary_monsters) | 19 | 1 |
| [Let’s Do: Bakery](#weapons-combat-bakery) | 1 | 0 |
| [Let’s Do: Farm & Charm](#weapons-combat-farm_and_charm) | 4 | 0 |
| [Minecraft / Vanilla Backport](#weapons-combat-minecraft) | 23 | 2 |
| [Mowzie’s Mobs](#weapons-combat-mowziesmobs) | 5 | 1 |
| [Simply Swords](#weapons-combat-simplyswords) | 133 | 0 |
| [Thaumaturge Tinker](#weapons-combat-thaumaturgetinker) | 5 | 0 |
| [The Aether](#weapons-combat-aether) | 18 | 4 |
| [The Beyond](#weapons-combat-the_beyond) | 2 | 0 |
| [The Sky Lands](#weapons-combat-skylands) | 8 | 0 |
| [The Twilight Forest](#weapons-combat-twilightforest) | 12 | 4 |
| [Weapons of Miracles](#weapons-combat-wom) | 13 | 0 |
| [WilderNature](#weapons-combat-wildernature) | 0 | 1 |
| [Witchery](#weapons-combat-witchery) | 4 | 0 |

[Weapons](#weapons) · [Shields](#shields) · [Mapped tools and utilities](#mapped-tools-and-utilities) · [Excluded WoM weapons](#excluded-wom-weapons)

## Weapons

<a id="weapons-combat-alexscaves"></a>
### Alex’s Caves
9 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/alexscaves/desolate_dagger.png" alt="" width="24" height="24"> **Desolate Dagger**<br><sub><code>alexscaves:desolate_dagger</code></sub> | `epicfight_dd:backhand_blade` | +5 | +0.35 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/alexscaves/dreadbow.png" alt="" width="24" height="24"> **Dreadbow**<br><sub><code>alexscaves:dreadbow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/alexscaves/extinction_spear.png" alt="" width="24" height="24"> **Extinction Spear**<br><sub><code>alexscaves:extinction_spear</code></sub> | `epicfight:trident` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/alexscaves/frostmint_spear.png" alt="" width="24" height="24"> **Frostmint Spear**<br><sub><code>alexscaves:frostmint_spear</code></sub> | `epicfight:trident` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/alexscaves/limestone_spear.png" alt="" width="24" height="24"> **Limestone Spear**<br><sub><code>alexscaves:limestone_spear</code></sub> | `epicfight:trident` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/alexscaves/ortholance.png" alt="" width="24" height="24"> **Ortholance**<br><sub><code>alexscaves:ortholance</code></sub> | `epicfight:trident` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/alexscaves/primitive_club.png" alt="" width="24" height="24"> **Primitive Club**<br><sub><code>alexscaves:primitive_club</code></sub> | `epicfight_dd:nailbat` | +5 | +0.24 | +60 pp |
| **Raygun**<br><sub><code>alexscaves:raygun</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/alexscaves/sharpened_candy_cane.png" alt="" width="24" height="24"> **Sharpened Candy Cane**<br><sub><code>alexscaves:sharpened_candy_cane</code></sub> | `epicfight_dd:herb_sickle` | +5 | +0.22 | +25 pp |

<a id="weapons-combat-ae2"></a>
### Applied Energistics 2
6 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/certus_quartz_axe.png" alt="" width="24" height="24"> **Certus Quartz Axe**<br><sub><code>ae2:certus_quartz_axe</code></sub> | `epicfight:axe` | +2 | +0.18 | +26 pp |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/certus_quartz_sword.png" alt="" width="24" height="24"> **Certus Quartz Sword**<br><sub><code>ae2:certus_quartz_sword</code></sub> | `epicfight_dd:messer` | +2 | +0.16 | +16 pp |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/fluix_axe.png" alt="" width="24" height="24"> **Fluix Axe**<br><sub><code>ae2:fluix_axe</code></sub> | `womplus:greataxe` | +3 | +0.2 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/fluix_sword.png" alt="" width="24" height="24"> **Fluix Sword**<br><sub><code>ae2:fluix_sword</code></sub> | `epicfight_dd:milady` | +3 | +0.18 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/nether_quartz_axe.png" alt="" width="24" height="24"> **Nether Quartz Axe**<br><sub><code>ae2:nether_quartz_axe</code></sub> | `epicfight:axe` | +2 | +0.18 | +26 pp |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/nether_quartz_sword.png" alt="" width="24" height="24"> **Nether Quartz Sword**<br><sub><code>ae2:nether_quartz_sword</code></sub> | `epicfight_dd:light_greatsword` | +2 | +0.16 | +16 pp |

<a id="weapons-combat-archaion"></a>
### Archaion
2 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/archaion/echo_mace.png" alt="" width="24" height="24"> **Echo Mace**<br><sub><code>archaion:echo_mace</code></sub> | `epicfight_dd:nailbat` | +5 | +0.24 | +60 pp |
| <img src="../handbook-source/current/assets/weapons/icons/archaion/echos_grace.png" alt="" width="24" height="24"> **Echos Grace**<br><sub><code>archaion:echos_grace</code></sub> | `epicfight:bow` | Preset | Preset | Preset |

<a id="weapons-combat-ars_nouveau"></a>
### Ars Nouveau
2 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Enchanters Sword**<br><sub><code>ars_nouveau:enchanters_sword</code></sub> | `epicfight_dd:milady` | +5 | +0.22 | +25 pp |
| **Spell Bow**<br><sub><code>ars_nouveau:spell_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |

<a id="weapons-combat-block_factorys_bosses"></a>
### Bosses’Rise
6 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/block_factorys_bosses/dagger.png" alt="" width="24" height="24"> **Dagger**<br><sub><code>block_factorys_bosses:dagger</code></sub> | `epicfight_dd:backhand_blade` | +6 | +0.37 | +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/block_factorys_bosses/knight_sword.png" alt="" width="24" height="24"> **Knight Sword**<br><sub><code>block_factorys_bosses:knight_sword</code></sub> | `epicfight_dd:milady` | +6 | +0.27 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/block_factorys_bosses/kraken_trident.png" alt="" width="24" height="24"> **Kraken Trident**<br><sub><code>block_factorys_bosses:kraken_trident</code></sub> | `epicfight:trident` | +6 | +0.27 | +49 pp |
| <img src="../handbook-source/current/assets/weapons/icons/block_factorys_bosses/large_sword.png" alt="" width="24" height="24"> **Large Sword**<br><sub><code>block_factorys_bosses:large_sword</code></sub> | `epicfight_dd:eclipse` | +6 | +0.32 | +54 pp |
| <img src="../handbook-source/current/assets/weapons/icons/block_factorys_bosses/pirate_saber.png" alt="" width="24" height="24"> **Pirate Saber**<br><sub><code>block_factorys_bosses:pirate_saber</code></sub> | `epicfight_dd:saber` | +6 | +0.3 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/block_factorys_bosses/warrior_sword.png" alt="" width="24" height="24"> **Warrior Sword**<br><sub><code>block_factorys_bosses:warrior_sword</code></sub> | `epicfight_dd:messer` | +6 | +0.24 | +28 pp |

<a id="weapons-combat-cataclysm"></a>
### Cataclysm
26 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Ancient Spear**<br><sub><code>cataclysm:ancient_spear</code></sub> | `wom:orbit` | +6 | +0.27 | +49 pp |
| **Astrape**<br><sub><code>cataclysm:astrape</code></sub> | `wom:agony` | +6 | +0.27 | +49 pp |
| <img src="../handbook-source/current/assets/weapons/icons/cataclysm/athame.png" alt="" width="24" height="24"> **Athame**<br><sub><code>cataclysm:athame</code></sub> | `epicfight_dd:night_ritus_dagger` | +6 | +0.37 | +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/cataclysm/black_steel_axe.png" alt="" width="24" height="24"> **Black Steel Axe**<br><sub><code>cataclysm:black_steel_axe</code></sub> | `epicfight_dd:steel_axe` | +3 | +0.2 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/cataclysm/black_steel_sword.png" alt="" width="24" height="24"> **Black Steel Sword**<br><sub><code>cataclysm:black_steel_sword</code></sub> | `epicfight_dd:messer` | +3 | +0.18 | +19 pp |
| **Brontes**<br><sub><code>cataclysm:brontes</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.26 | +64 pp |
| **Ceraunus**<br><sub><code>cataclysm:ceraunus</code></sub> | `womplus:greataxe` | +6 | +0.3 | +59 pp |
| **Coral Bardiche**<br><sub><code>cataclysm:coral_bardiche</code></sub> | `epicfight_dd:halberd` | +6 | +0.27 | +49 pp |
| **Coral Spear**<br><sub><code>cataclysm:coral_spear</code></sub> | `epicfight:trident` | +6 | +0.27 | +49 pp |
| **Cursed Bow**<br><sub><code>cataclysm:cursed_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Gauntlet Of Bulwark**<br><sub><code>cataclysm:gauntlet_of_bulwark</code></sub> | `epicfight_dd:iron_fist` | +6 | +0.32 | +28 pp |
| **Gauntlet Of Guard**<br><sub><code>cataclysm:gauntlet_of_guard</code></sub> | `epicfight_dd:iron_fist` | +6 | +0.32 | +28 pp |
| **Gauntlet Of Maelstrom**<br><sub><code>cataclysm:gauntlet_of_maelstrom</code></sub> | `epicfight_dd:iron_fist` | +6 | +0.32 | +28 pp |
| **Infernal Forge**<br><sub><code>cataclysm:infernal_forge</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.26 | +64 pp |
| <img src="../handbook-source/current/assets/weapons/icons/cataclysm/khopesh.png" alt="" width="24" height="24"> **Khopesh**<br><sub><code>cataclysm:khopesh</code></sub> | `epicfight_dd:saber` | +6 | +0.3 | +30 pp |
| **Laser Gatling**<br><sub><code>cataclysm:laser_gatling</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| **Meat Shredder**<br><sub><code>cataclysm:meat_shredder</code></sub> | `womplus:greataxe` | +6 | +0.3 | +59 pp |
| **Soul Render**<br><sub><code>cataclysm:soul_render</code></sub> | `epicfight_dd:pole_blade` | +6 | +0.3 | +59 pp |
| **The Annihilator**<br><sub><code>cataclysm:the_annihilator</code></sub> | `womplus:greataxe` | +6 | +0.3 | +59 pp |
| **The Immolator**<br><sub><code>cataclysm:the_immolator</code></sub> | `womplus:greataxe` | +6 | +0.3 | +59 pp |
| **The Incinerator**<br><sub><code>cataclysm:the_incinerator</code></sub> | `wom:solar` | +6 | +0.3 | +59 pp |
| **Tidal Claws**<br><sub><code>cataclysm:tidal_claws</code></sub> | `epicfight_dd:hookclaws` | +6 | +0.32 | +28 pp |
| **Void Assault Shoulder Weapon**<br><sub><code>cataclysm:void_assault_shoulder_weapon</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| **Void Forge**<br><sub><code>cataclysm:void_forge</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.26 | +64 pp |
| **Wither Assault Shoulder Weapon**<br><sub><code>cataclysm:wither_assault_shoulder_weapon</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| **Wrath Of The Desert**<br><sub><code>cataclysm:wrath_of_the_desert</code></sub> | `epicfight:bow` | Preset | Preset | Preset |

<a id="weapons-combat-cataclysm_spellbooks"></a>
### Cataclysm: Spellbooks
8 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/cataclysm_spellbooks/bloom_stone_staff.png" alt="" width="24" height="24"> **Bloom Stone Staff**<br><sub><code>cataclysm_spellbooks:bloom_stone_staff</code></sub> | `epicfight_dd:battlestaff_wood` | +6 | +0.26 | +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/cataclysm_spellbooks/coral_staff.png" alt="" width="24" height="24"> **Coral Staff**<br><sub><code>cataclysm_spellbooks:coral_staff</code></sub> | `epicfight_dd:battlestaff` | +6 | +0.26 | +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/cataclysm_spellbooks/fake_wudjets_staff.png" alt="" width="24" height="24"> **Fake Wudjets Staff**<br><sub><code>cataclysm_spellbooks:fake_wudjets_staff</code></sub> | `epicfight_dd:battlestaff_amethyst` | +6 | +0.26 | +28 pp |
| **Hellfire Forge**<br><sub><code>cataclysm_spellbooks:hellfire_forge</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.26 | +64 pp |
| <img src="../handbook-source/current/assets/weapons/icons/cataclysm_spellbooks/monstrous_flamberge.png" alt="" width="24" height="24"> **Monstrous Flamberge**<br><sub><code>cataclysm_spellbooks:monstrous_flamberge</code></sub> | `wom:ruine` | +6 | +0.27 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/cataclysm_spellbooks/soul_brazier.png" alt="" width="24" height="24"> **Soul Brazier**<br><sub><code>cataclysm_spellbooks:soul_brazier</code></sub> | `epicfight_dd:battlestaff_amethyst` | +6 | +0.26 | +28 pp |
| **Spirit Sunderer**<br><sub><code>cataclysm_spellbooks:spirit_sunderer</code></sub> | `wom:staff` | +6 | +0.26 | +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/cataclysm_spellbooks/void_staff.png" alt="" width="24" height="24"> **Void Staff**<br><sub><code>cataclysm_spellbooks:void_staff</code></sub> | `epicfight_dd:battlestaff_amethyst` | +6 | +0.26 | +28 pp |

<a id="weapons-combat-celestisynth"></a>
### Celestisynth
8 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/celestisynth/aquaflora.png" alt="" width="24" height="24"> **Aquaflora**<br><sub><code>celestisynth:aquaflora</code></sub> | `epicfight_dd:milady` | +6 | +0.24 | +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/celestisynth/breezebreaker.png" alt="" width="24" height="24"> **Breezebreaker**<br><sub><code>celestisynth:breezebreaker</code></sub> | `epicfight_dd:florett` | +6 | +0.3 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/celestisynth/crescentia.png" alt="" width="24" height="24"> **Crescentia**<br><sub><code>celestisynth:crescentia</code></sub> | `epicfight_dd:war_sickle` | +5 | +0.24 | +40 pp |
| <img src="../handbook-source/current/assets/weapons/icons/celestisynth/frostbound.png" alt="" width="24" height="24"> **Frostbound**<br><sub><code>celestisynth:frostbound</code></sub> | `epicfight_dd:war_sickle` | +6 | +0.26 | +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/celestisynth/keres.png" alt="" width="24" height="24"> **Keres**<br><sub><code>celestisynth:keres</code></sub> | `epicfight_dd:pole_blade` | +6 | +0.27 | +49 pp |
| <img src="../handbook-source/current/assets/weapons/icons/celestisynth/poltergeist.png" alt="" width="24" height="24"> **Poltergeist**<br><sub><code>celestisynth:poltergeist</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.3 | +59 pp |
| <img src="../handbook-source/current/assets/weapons/icons/celestisynth/rainfall_serenity.png" alt="" width="24" height="24"> **Rainfall Serenity**<br><sub><code>celestisynth:rainfall_serenity</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/celestisynth/solaris.png" alt="" width="24" height="24"> **Solaris**<br><sub><code>celestisynth:solaris</code></sub> | `epicfight_dd:messer` | +6 | +0.37 | +28 pp |

<a id="weapons-combat-create"></a>
### Create
2 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/create/cardboard_sword.png" alt="" width="24" height="24"> **Cardboard Sword**<br><sub><code>create:cardboard_sword</code></sub> | `epicfight:sword` | +1 | +0.12 | +10 pp |
| <img src="../handbook-source/current/assets/weapons/icons/create/potato_cannon.png" alt="" width="24" height="24"> **Potato Cannon**<br><sub><code>create:potato_cannon</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |

<a id="weapons-combat-createdieselgenerators"></a>
### Create: Diesel Generators
2 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/createdieselgenerators/chemical_sprayer.png" alt="" width="24" height="24"> **Chemical Sprayer**<br><sub><code>createdieselgenerators:chemical_sprayer</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/createdieselgenerators/chemical_sprayer_lighter.png" alt="" width="24" height="24"> **Chemical Sprayer Lighter**<br><sub><code>createdieselgenerators:chemical_sprayer_lighter</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |

<a id="weapons-combat-deep_aether"></a>
### Deep Aether
7 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/deep_aether/blade_of_luck.png" alt="" width="24" height="24"> **Blade Of Luck**<br><sub><code>deep_aether:blade_of_luck</code></sub> | `epicfight_dd:milady` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deep_aether/skyjade_axe.png" alt="" width="24" height="24"> **Skyjade Axe**<br><sub><code>deep_aether:skyjade_axe</code></sub> | `epicfight:axe` | +3 | +0.2 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deep_aether/skyjade_sword.png" alt="" width="24" height="24"> **Skyjade Sword**<br><sub><code>deep_aether:skyjade_sword</code></sub> | `epicfight_dd:messer` | +3 | +0.18 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deep_aether/storm_bow.png" alt="" width="24" height="24"> **Storm Bow**<br><sub><code>deep_aether:storm_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/deep_aether/storm_sword.png" alt="" width="24" height="24"> **Storm Sword**<br><sub><code>deep_aether:storm_sword</code></sub> | `wom:nova` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deep_aether/stratus_axe.png" alt="" width="24" height="24"> **Stratus Axe**<br><sub><code>deep_aether:stratus_axe</code></sub> | `epicfight_dd:steel_axe` | +4 | +0.22 | +34 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deep_aether/stratus_sword.png" alt="" width="24" height="24"> **Stratus Sword**<br><sub><code>deep_aether:stratus_sword</code></sub> | `wom:ruine` | +4 | +0.2 | +22 pp |

<a id="weapons-combat-deeperdarker"></a>
### Deeper and Darker
4 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/deeperdarker/resonarium_axe.png" alt="" width="24" height="24"> **Resonarium Axe**<br><sub><code>deeperdarker:resonarium_axe</code></sub> | `womplus:greataxe` | +3 | +0.2 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deeperdarker/resonarium_sword.png" alt="" width="24" height="24"> **Resonarium Sword**<br><sub><code>deeperdarker:resonarium_sword</code></sub> | `epicfight_dd:milady` | +3 | +0.18 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deeperdarker/warden_axe.png" alt="" width="24" height="24"> **Warden Axe**<br><sub><code>deeperdarker:warden_axe</code></sub> | `epicfight_dd:steel_axe` | +4 | +0.22 | +34 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deeperdarker/warden_sword.png" alt="" width="24" height="24"> **Warden Sword**<br><sub><code>deeperdarker:warden_sword</code></sub> | `womplus:hollow_longsword` | +4 | +0.2 | +22 pp |

<a id="weapons-combat-epicfight"></a>
### Epic Fight
33 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/bokken.png" alt="" width="24" height="24"> **Bokken**<br><sub><code>epicfight:bokken</code></sub> | `epicfight:bokken` | +1 | +0.1 | +5 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/diamond_dagger.png" alt="" width="24" height="24"> **Diamond Dagger**<br><sub><code>epicfight:diamond_dagger</code></sub> | `epicfight:dagger` | +3 | +0.31 | +19 … +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/diamond_greatsword.png" alt="" width="24" height="24"> **Diamond Greatsword**<br><sub><code>epicfight:diamond_greatsword</code></sub> | `epicfight:greatsword` | +3 | +0.26 | +42 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/diamond_longsword.png" alt="" width="24" height="24"> **Diamond Longsword**<br><sub><code>epicfight:diamond_longsword</code></sub> | `epicfight:longsword` | +3 | +0.21 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/diamond_spear.png" alt="" width="24" height="24"> **Diamond Spear**<br><sub><code>epicfight:diamond_spear</code></sub> | `epicfight:spear` | +3 | +0.21 | +37 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/diamond_tachi.png" alt="" width="24" height="24"> **Diamond Tachi**<br><sub><code>epicfight:diamond_tachi</code></sub> | `epicfight:tachi` | +3 | +0.24 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/glove.png" alt="" width="24" height="24"> **Glove**<br><sub><code>epicfight:glove</code></sub> | `epicfight:fist` | +1.5 | +0.15 | +8 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/golden_dagger.png" alt="" width="24" height="24"> **Golden Dagger**<br><sub><code>epicfight:golden_dagger</code></sub> | `epicfight:dagger` | +1.5 | +0.27 | +13 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/golden_greatsword.png" alt="" width="24" height="24"> **Golden Greatsword**<br><sub><code>epicfight:golden_greatsword</code></sub> | `epicfight:greatsword` | +1.5 | +0.22 | +34 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/golden_longsword.png" alt="" width="24" height="24"> **Golden Longsword**<br><sub><code>epicfight:golden_longsword</code></sub> | `epicfight:longsword` | +1.5 | +0.2 | +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/golden_spear.png" alt="" width="24" height="24"> **Golden Spear**<br><sub><code>epicfight:golden_spear</code></sub> | `epicfight:spear` | +1.5 | +0.17 … +0.2 | +29 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/golden_tachi.png" alt="" width="24" height="24"> **Golden Tachi**<br><sub><code>epicfight:golden_tachi</code></sub> | `epicfight:tachi` | +1.5 | +0.2 | +15 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/iron_dagger.png" alt="" width="24" height="24"> **Iron Dagger**<br><sub><code>epicfight:iron_dagger</code></sub> | `epicfight:dagger` | +2 | +0.29 | +16 … +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/iron_greatsword.png" alt="" width="24" height="24"> **Iron Greatsword**<br><sub><code>epicfight:iron_greatsword</code></sub> | `epicfight:greatsword` | +2 | +0.24 | +38 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/iron_longsword.png" alt="" width="24" height="24"> **Iron Longsword**<br><sub><code>epicfight:iron_longsword</code></sub> | `epicfight:longsword` | +2 | +0.19 | +21 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/iron_spear.png" alt="" width="24" height="24"> **Iron Spear**<br><sub><code>epicfight:iron_spear</code></sub> | `epicfight:spear` | +2 | +0.19 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/iron_tachi.png" alt="" width="24" height="24"> **Iron Tachi**<br><sub><code>epicfight:iron_tachi</code></sub> | `epicfight:tachi` | +2 | +0.22 | +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/netherite_dagger.png" alt="" width="24" height="24"> **Netherite Dagger**<br><sub><code>epicfight:netherite_dagger</code></sub> | `epicfight:dagger` | +4 | +0.33 | +22 … +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/netherite_greatsword.png" alt="" width="24" height="24"> **Netherite Greatsword**<br><sub><code>epicfight:netherite_greatsword</code></sub> | `epicfight:greatsword` | +4 | +0.28 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/netherite_longsword.png" alt="" width="24" height="24"> **Netherite Longsword**<br><sub><code>epicfight:netherite_longsword</code></sub> | `epicfight:longsword` | +4 | +0.23 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/netherite_spear.png" alt="" width="24" height="24"> **Netherite Spear**<br><sub><code>epicfight:netherite_spear</code></sub> | `epicfight:spear` | +4 | +0.23 | +41 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/netherite_tachi.png" alt="" width="24" height="24"> **Netherite Tachi**<br><sub><code>epicfight:netherite_tachi</code></sub> | `epicfight:tachi` | +4 | +0.26 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/stone_dagger.png" alt="" width="24" height="24"> **Stone Dagger**<br><sub><code>epicfight:stone_dagger</code></sub> | `epicfight:dagger` | +1.5 | +0.27 | +13 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/stone_greatsword.png" alt="" width="24" height="24"> **Stone Greatsword**<br><sub><code>epicfight:stone_greatsword</code></sub> | `epicfight:greatsword` | +1.5 | +0.22 | +34 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/stone_longsword.png" alt="" width="24" height="24"> **Stone Longsword**<br><sub><code>epicfight:stone_longsword</code></sub> | `epicfight:longsword` | +1.5 | +0.17 | +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/stone_spear.png" alt="" width="24" height="24"> **Stone Spear**<br><sub><code>epicfight:stone_spear</code></sub> | `epicfight:spear` | +1.5 | +0.17 | +29 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/stone_tachi.png" alt="" width="24" height="24"> **Stone Tachi**<br><sub><code>epicfight:stone_tachi</code></sub> | `epicfight:tachi` | +1.5 | +0.2 | +15 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/uchigatana.png" alt="" width="24" height="24"> **Uchigatana**<br><sub><code>epicfight:uchigatana</code></sub> | `epicfight:uchigatana` | +3 | +0.15 | +20 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/wooden_dagger.png" alt="" width="24" height="24"> **Wooden Dagger**<br><sub><code>epicfight:wooden_dagger</code></sub> | `epicfight:dagger` | +1 | +0.25 | +10 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/wooden_greatsword.png" alt="" width="24" height="24"> **Wooden Greatsword**<br><sub><code>epicfight:wooden_greatsword</code></sub> | `epicfight:greatsword` | +1 | +0.2 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/wooden_longsword.png" alt="" width="24" height="24"> **Wooden Longsword**<br><sub><code>epicfight:wooden_longsword</code></sub> | `epicfight:longsword` | +1 | +0.15 | +15 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/wooden_spear.png" alt="" width="24" height="24"> **Wooden Spear**<br><sub><code>epicfight:wooden_spear</code></sub> | `epicfight:spear` | +1 | +0.15 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight/wooden_tachi.png" alt="" width="24" height="24"> **Wooden Tachi**<br><sub><code>epicfight:wooden_tachi</code></sub> | `epicfight:tachi` | +1 | +0.18 | +12 pp |

<a id="weapons-combat-epicfight_dd"></a>
### Epic Fight: Dawn Day
46 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/amethyst_battlestaff.png" alt="" width="24" height="24"> **Amethyst Battlestaff**<br><sub><code>epicfight_dd:amethyst_battlestaff</code></sub> | `epicfight_dd:battlestaff_amethyst` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/backhand_blade.png" alt="" width="24" height="24"> **Backhand Blade**<br><sub><code>epicfight_dd:backhand_blade</code></sub> | `epicfight_dd:backhand_blade` | Preset | Preset | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/wooden_battlestaff.png" alt="" width="24" height="24"> **Big Stick**<br><sub><code>epicfight_dd:wooden_battlestaff</code></sub> | `epicfight_dd:battlestaff_wood` | +1 | +0.14 | +10 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/blood_ritus_dagger.png" alt="" width="24" height="24"> **Blood Ritual Dagger**<br><sub><code>epicfight_dd:blood_ritus_dagger</code></sub> | `epicfight_dd:blood_ritus_dagger` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/bonecutting_saw.png" alt="" width="24" height="24"> **Bonecutting Saw**<br><sub><code>epicfight_dd:bonecutting_saw</code></sub> | `epicfight_dd:bonecutting_saw` | Preset | Preset | +15 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/diamond_battlestaff.png" alt="" width="24" height="24"> **Diamond Battlestaff**<br><sub><code>epicfight_dd:diamond_battlestaff</code></sub> | `epicfight_dd:battlestaff` | +3 | +0.2 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/diamond_florett.png" alt="" width="24" height="24"> **Diamond Florett**<br><sub><code>epicfight_dd:diamond_florett</code></sub> | `epicfight_dd:florett` | +3 | +0.28 | +35 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/diamond_halberd.png" alt="" width="24" height="24"> **Diamond Halberd**<br><sub><code>epicfight_dd:diamond_halberd</code></sub> | `epicfight_dd:halberd` | +3 | +0.21 | +37 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/diamond_knife.png" alt="" width="24" height="24"> **Diamond Knife**<br><sub><code>epicfight_dd:diamond_knife</code></sub> | `epicfight_dd:knife` | +3 | +0.31 | +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/diamond_light_greatsword.png" alt="" width="24" height="24"> **Diamond Light Greatsword**<br><sub><code>epicfight_dd:diamond_light_greatsword</code></sub> | `epicfight_dd:light_greatsword` | +3 | +0.26 | +42 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/diamond_messer.png" alt="" width="24" height="24"> **Diamond Messer**<br><sub><code>epicfight_dd:diamond_messer</code></sub> | `epicfight_dd:messer` | +3 | +0.15 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/diamond_sickle.png" alt="" width="24" height="24"> **Diamond Sickle**<br><sub><code>epicfight_dd:diamond_sickle</code></sub> | `epicfight_dd:herb_sickle` | +3 | +0.31 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/eclipse.png" alt="" width="24" height="24"> **Eclipse**<br><sub><code>epicfight_dd:eclipse</code></sub> | `epicfight_dd:eclipse` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/golden_battlestaff.png" alt="" width="24" height="24"> **Golden Battlestaff**<br><sub><code>epicfight_dd:golden_battlestaff</code></sub> | `epicfight_dd:battlestaff` | +1.5 | +0.25 | +20 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/golden_florett.png" alt="" width="24" height="24"> **Golden Florett**<br><sub><code>epicfight_dd:golden_florett</code></sub> | `epicfight_dd:florett` | +1.5 | +0.25 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/golden_halberd.png" alt="" width="24" height="24"> **Golden Halberd**<br><sub><code>epicfight_dd:golden_halberd</code></sub> | `epicfight_dd:halberd` | +1.5 | +0.25 | +29 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/golden_knife.png" alt="" width="24" height="24"> **Golden Knife**<br><sub><code>epicfight_dd:golden_knife</code></sub> | `epicfight_dd:knife` | +1.5 | +0.27 | +35 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/golden_light_greatsword.png" alt="" width="24" height="24"> **Golden Light Greatsword**<br><sub><code>epicfight_dd:golden_light_greatsword</code></sub> | `epicfight_dd:light_greatsword` | +1.5 | +0.25 | +34 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/golden_messer.png" alt="" width="24" height="24"> **Golden Messer**<br><sub><code>epicfight_dd:golden_messer</code></sub> | `epicfight_dd:messer` | +1.5 | +0.25 | +15 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/golden_sickle.png" alt="" width="24" height="24"> **Golden Sickle**<br><sub><code>epicfight_dd:golden_sickle</code></sub> | `epicfight_dd:herb_sickle` | +1.5 | +0.27 | +30 pp |
| **Hookclaws**<br><sub><code>epicfight_dd:hookclaws</code></sub> | `epicfight_dd:hookclaws` | Preset | Preset | +26 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/iron_battlestaff.png" alt="" width="24" height="24"> **Iron Battlestaff**<br><sub><code>epicfight_dd:iron_battlestaff</code></sub> | `epicfight_dd:battlestaff` | +2 | +0.18 | +16 pp |
| **Iron Fist**<br><sub><code>epicfight_dd:iron_fist</code></sub> | `epicfight_dd:iron_fist` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/iron_florett.png" alt="" width="24" height="24"> **Iron Florett**<br><sub><code>epicfight_dd:iron_florett</code></sub> | `epicfight_dd:florett` | +2 | +0.26 | +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/iron_halberd.png" alt="" width="24" height="24"> **Iron Halberd**<br><sub><code>epicfight_dd:iron_halberd</code></sub> | `epicfight_dd:halberd` | +2 | +0.19 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/iron_knife.png" alt="" width="24" height="24"> **Iron Knife**<br><sub><code>epicfight_dd:iron_knife</code></sub> | `epicfight_dd:knife` | +2 | +0.29 | +20 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/iron_light_greatsword.png" alt="" width="24" height="24"> **Iron Light Greatsword**<br><sub><code>epicfight_dd:iron_light_greatsword</code></sub> | `epicfight_dd:light_greatsword` | +2 | +0.24 | +38 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/iron_messer.png" alt="" width="24" height="24"> **Iron Messer**<br><sub><code>epicfight_dd:iron_messer</code></sub> | `epicfight_dd:messer` | +2 | +0.15 | +15 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/iron_sickle.png" alt="" width="24" height="24"> **Iron Sickle**<br><sub><code>epicfight_dd:iron_sickle</code></sub> | `epicfight_dd:herb_sickle` | +2 | +0.29 | +16 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/iudex_gundyr_halberd.png" alt="" width="24" height="24"> **Iudex Gundyr's Halberd**<br><sub><code>epicfight_dd:iudex_gundyr_halberd</code></sub> | `epicfight_dd:iudex_halberd` | Preset | Preset | +20 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/milady.png" alt="" width="24" height="24"> **Milady**<br><sub><code>epicfight_dd:milady</code></sub> | `epicfight_dd:milady` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/netherite_battlestaff.png" alt="" width="24" height="24"> **Netherite Battlestaff**<br><sub><code>epicfight_dd:netherite_battlestaff</code></sub> | `epicfight_dd:battlestaff` | +4 | +0.22 | +32 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/netherite_florett.png" alt="" width="24" height="24"> **Netherite Florett**<br><sub><code>epicfight_dd:netherite_florett</code></sub> | `epicfight_dd:florett` | +4 | +0.3 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/netherite_halberd.png" alt="" width="24" height="24"> **Netherite Halberd**<br><sub><code>epicfight_dd:netherite_halberd</code></sub> | `epicfight_dd:halberd` | +4 | +0.23 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/netherite_knife.png" alt="" width="24" height="24"> **Netherite Knife**<br><sub><code>epicfight_dd:netherite_knife</code></sub> | `epicfight_dd:knife` | +4 | +0.33 | +35 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/netherite_light_greatsword.png" alt="" width="24" height="24"> **Netherite Light Greatsword**<br><sub><code>epicfight_dd:netherite_light_greatsword</code></sub> | `epicfight_dd:light_greatsword` | +4 | +0.28 | +46 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/netherite_messer.png" alt="" width="24" height="24"> **Netherite Messer**<br><sub><code>epicfight_dd:netherite_messer</code></sub> | `epicfight_dd:messer` | +4 | +0.15 | +35 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/netherite_sickle.png" alt="" width="24" height="24"> **Netherite Sickle**<br><sub><code>epicfight_dd:netherite_sickle</code></sub> | `epicfight_dd:herb_sickle` | +4 | +0.33 | +35 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/night_ritus_dagger.png" alt="" width="24" height="24"> **Night Ritual Dagger**<br><sub><code>epicfight_dd:night_ritus_dagger</code></sub> | `epicfight_dd:night_ritus_dagger` | Preset | Preset | +20 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/poleblade.png" alt="" width="24" height="24"> **Poleblade**<br><sub><code>epicfight_dd:poleblade</code></sub> | `epicfight_dd:pole_blade` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/saber.png" alt="" width="24" height="24"> **Saber**<br><sub><code>epicfight_dd:saber</code></sub> | `epicfight_dd:saber` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/nailbat.png" alt="" width="24" height="24"> **Spiked Bat**<br><sub><code>epicfight_dd:nailbat</code></sub> | `epicfight_dd:nailbat` | Preset | Preset | +10 pp |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/steelaxe.png" alt="" width="24" height="24"> **Steel Axe**<br><sub><code>epicfight_dd:steelaxe</code></sub> | `epicfight_dd:steel_axe` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/vitreus.png" alt="" width="24" height="24"> **Vitreus**<br><sub><code>epicfight_dd:vitreus</code></sub> | `epicfight_dd:vitreus` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/war_sickle.png" alt="" width="24" height="24"> **War Sickle**<br><sub><code>epicfight_dd:war_sickle</code></sub> | `epicfight_dd:war_sickle` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/epicfight_dd/bat.png" alt="" width="24" height="24"> **Wooden Bat**<br><sub><code>epicfight_dd:bat</code></sub> | `epicfight_dd:nailbat` | Preset | Preset | Preset |

<a id="weapons-combat-farmersdelight"></a>
### Farmer’s Delight
5 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/farmersdelight/diamond_knife.png" alt="" width="24" height="24"> **Diamond Knife**<br><sub><code>farmersdelight:diamond_knife</code></sub> | `epicfight_dd:knife` | +3 | +0.31 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/farmersdelight/flint_knife.png" alt="" width="24" height="24"> **Flint Knife**<br><sub><code>farmersdelight:flint_knife</code></sub> | `epicfight_dd:knife` | +1.5 | +0.27 | +13 pp |
| <img src="../handbook-source/current/assets/weapons/icons/farmersdelight/golden_knife.png" alt="" width="24" height="24"> **Golden Knife**<br><sub><code>farmersdelight:golden_knife</code></sub> | `epicfight_dd:knife` | +1.5 | +0.27 | +13 pp |
| <img src="../handbook-source/current/assets/weapons/icons/farmersdelight/iron_knife.png" alt="" width="24" height="24"> **Iron Knife**<br><sub><code>farmersdelight:iron_knife</code></sub> | `epicfight_dd:knife` | +2 | +0.29 | +16 pp |
| <img src="../handbook-source/current/assets/weapons/icons/farmersdelight/netherite_knife.png" alt="" width="24" height="24"> **Netherite Knife**<br><sub><code>farmersdelight:netherite_knife</code></sub> | `epicfight_dd:knife` | +4 | +0.33 | +22 pp |

<a id="weapons-combat-hybrid_aquatic"></a>
### Hybrid Aquatic
5 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/hybrid_aquatic/coral_axe.png" alt="" width="24" height="24"> **Coral Axe**<br><sub><code>hybrid_aquatic:coral_axe</code></sub> | `womplus:greataxe` | +2 | +0.18 | +26 pp |
| <img src="../handbook-source/current/assets/weapons/icons/hybrid_aquatic/coral_blade.png" alt="" width="24" height="24"> **Coral Blade**<br><sub><code>hybrid_aquatic:coral_blade</code></sub> | `epicfight:trident` | +2 | +0.19 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/hybrid_aquatic/karkinos_claw.png" alt="" width="24" height="24"> **Karkinos Claw**<br><sub><code>hybrid_aquatic:karkinos_claw</code></sub> | `epicfight_dd:hookclaws` | +5 | +0.3 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/hybrid_aquatic/seashell_axe.png" alt="" width="24" height="24"> **Seashell Axe**<br><sub><code>hybrid_aquatic:seashell_axe</code></sub> | `epicfight_dd:steel_axe` | +2 | +0.18 | +26 pp |
| <img src="../handbook-source/current/assets/weapons/icons/hybrid_aquatic/seashell_spear.png" alt="" width="24" height="24"> **Seashell Spear**<br><sub><code>hybrid_aquatic:seashell_spear</code></sub> | `epicfight:trident` | +2 | +0.19 | +33 pp |

<a id="weapons-combat-immersiveengineering"></a>
### Immersive Engineering
5 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/immersiveengineering/axe_steel.png" alt="" width="24" height="24"> **Axe Steel**<br><sub><code>immersiveengineering:axe_steel</code></sub> | `epicfight_dd:steel_axe` | +2 | +0.18 | +26 pp |
| **Chemthrower**<br><sub><code>immersiveengineering:chemthrower</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| **Railgun**<br><sub><code>immersiveengineering:railgun</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| **Revolver**<br><sub><code>immersiveengineering:revolver</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/immersiveengineering/sword_steel.png" alt="" width="24" height="24"> **Sword Steel**<br><sub><code>immersiveengineering:sword_steel</code></sub> | `epicfight_dd:messer` | +2 | +0.16 | +16 pp |

<a id="weapons-combat-irons_spellbooks"></a>
### Iron’s Spells ’n Spellbooks
18 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/amethyst_rapier.png" alt="" width="24" height="24"> **Amethyst Rapier**<br><sub><code>irons_spellbooks:amethyst_rapier</code></sub> | `epicfight_dd:florett` | +5 | +0.32 | +40 pp |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/artificer_cane.png" alt="" width="24" height="24"> **Artificer's Cane**<br><sub><code>irons_spellbooks:artificer_cane</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/autoloader_crossbow.png" alt="" width="24" height="24"> **Autoloader Crossbow**<br><sub><code>irons_spellbooks:autoloader_crossbow</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/boreal_blade.png" alt="" width="24" height="24"> **Boreal Blade**<br><sub><code>irons_spellbooks:boreal_blade</code></sub> | `epicfight:sword` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/claymore.png" alt="" width="24" height="24"> **Claymore**<br><sub><code>irons_spellbooks:claymore</code></sub> | `epicfight:sword` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/decrepit_scythe.png" alt="" width="24" height="24"> **Decrepit Scythe**<br><sub><code>irons_spellbooks:decrepit_scythe</code></sub> | `epicfight:sword` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/graybeard_staff.png" alt="" width="24" height="24"> **Graybeard Staff**<br><sub><code>irons_spellbooks:graybeard_staff</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/hellrazor.png" alt="" width="24" height="24"> **Hellrazor**<br><sub><code>irons_spellbooks:hellrazor</code></sub> | `epicfight:sword` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/ice_staff.png" alt="" width="24" height="24"> **Ice Staff**<br><sub><code>irons_spellbooks:ice_staff</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/keeper_flamberge.png" alt="" width="24" height="24"> **Keeper Flamberge**<br><sub><code>irons_spellbooks:keeper_flamberge</code></sub> | `wom:ruine` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/legionnaire_flamberge.png" alt="" width="24" height="24"> **Legionnaire Flamberge**<br><sub><code>irons_spellbooks:legionnaire_flamberge</code></sub> | `womplus:hollow_longsword` | +5 | +0.25 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/magehunter.png" alt="" width="24" height="24"> **Magehunter**<br><sub><code>irons_spellbooks:magehunter</code></sub> | `epicfight_dd:messer` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/misery.png" alt="" width="24" height="24"> **Misery**<br><sub><code>irons_spellbooks:misery</code></sub> | `epicfight:sword` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/pyrium_staff.png" alt="" width="24" height="24"> **Pyrium Staff**<br><sub><code>irons_spellbooks:pyrium_staff</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/lightning_rod.png" alt="" width="24" height="24"> **Rod o' Lightning**<br><sub><code>irons_spellbooks:lightning_rod</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/spellbreaker.png" alt="" width="24" height="24"> **Spellbreaker**<br><sub><code>irons_spellbooks:spellbreaker</code></sub> | `wom:ruine` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/blood_staff.png" alt="" width="24" height="24"> **The Blood Staff**<br><sub><code>irons_spellbooks:blood_staff</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/irons_spellbooks/twilight_gale.png" alt="" width="24" height="24"> **Twilight Gale**<br><sub><code>irons_spellbooks:twilight_gale</code></sub> | `wom:orbit` | +5 | +0.25 | +45 pp |

<a id="weapons-combat-knavesneeds"></a>
### Knaves’ Needs
60 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/chakram.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Chakram**<br><sub><code>knavesneeds:twilightforest/fiery/chakram</code></sub> | `epicfight_dd:backhand_blade` | +4 | +0.2 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/claymore.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Claymore**<br><sub><code>knavesneeds:twilightforest/fiery/claymore</code></sub> | `epicfight_dd:light_greatsword` | +4 | +0.28 | +46 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/cutlass.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Cutlass**<br><sub><code>knavesneeds:twilightforest/fiery/cutlass</code></sub> | `epicfight_dd:saber` | +4 | +0.26 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/glaive.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Glaive**<br><sub><code>knavesneeds:twilightforest/fiery/glaive</code></sub> | `epicfight_dd:pole_blade` | +4 | +0.23 | +41 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/greataxe.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Greataxe**<br><sub><code>knavesneeds:twilightforest/fiery/greataxe</code></sub> | `womplus:greataxe` | +4 | +0.26 | +51 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/greathammer.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Greathammer**<br><sub><code>knavesneeds:twilightforest/fiery/greathammer</code></sub> | `tnk:great_hammer` | +4 | +0.22 | +56 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/halberd.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Halberd**<br><sub><code>knavesneeds:twilightforest/fiery/halberd</code></sub> | `epicfight_dd:halberd` | +4 | +0.23 | +41 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/katana.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Katana**<br><sub><code>knavesneeds:twilightforest/fiery/katana</code></sub> | `epicfight:uchigatana` | +4 | +0.26 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/longsword.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Longsword**<br><sub><code>knavesneeds:twilightforest/fiery/longsword</code></sub> | `epicfight_dd:messer` | +4 | +0.23 | +27 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/rapier.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Rapier**<br><sub><code>knavesneeds:twilightforest/fiery/rapier</code></sub> | `epicfight_dd:florett` | +4 | +0.3 | +36 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/sai.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Sai**<br><sub><code>knavesneeds:twilightforest/fiery/sai</code></sub> | `epicfight:dagger` | +4 | +0.33 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/scythe.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Scythe**<br><sub><code>knavesneeds:twilightforest/fiery/scythe</code></sub> | `epicfight_dd:war_sickle` | +4 | +0.23 | +41 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/spear.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Spear**<br><sub><code>knavesneeds:twilightforest/fiery/spear</code></sub> | `epicfight:spear` | +4 | +0.23 | +41 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/twinblade.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Twinblade**<br><sub><code>knavesneeds:twilightforest/fiery/twinblade</code></sub> | `wom:staff` | +4 | +0.22 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/fiery/warglaive.png" alt="" width="24" height="24"> **Twilightforest / Fiery / Warglaive**<br><sub><code>knavesneeds:twilightforest/fiery/warglaive</code></sub> | `wom:orbit` | +4 | +0.22 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/chakram.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Chakram**<br><sub><code>knavesneeds:twilightforest/ironwood/chakram</code></sub> | `epicfight_dd:backhand_blade` | +2 | +0.16 | +16 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/claymore.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Claymore**<br><sub><code>knavesneeds:twilightforest/ironwood/claymore</code></sub> | `epicfight_dd:light_greatsword` | +2 | +0.24 | +38 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/cutlass.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Cutlass**<br><sub><code>knavesneeds:twilightforest/ironwood/cutlass</code></sub> | `epicfight_dd:saber` | +2 | +0.22 | +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/glaive.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Glaive**<br><sub><code>knavesneeds:twilightforest/ironwood/glaive</code></sub> | `epicfight_dd:pole_blade` | +2 | +0.19 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/greataxe.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Greataxe**<br><sub><code>knavesneeds:twilightforest/ironwood/greataxe</code></sub> | `womplus:greataxe` | +2 | +0.22 | +43 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/greathammer.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Greathammer**<br><sub><code>knavesneeds:twilightforest/ironwood/greathammer</code></sub> | `tnk:great_hammer` | +2 | +0.18 | +48 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/halberd.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Halberd**<br><sub><code>knavesneeds:twilightforest/ironwood/halberd</code></sub> | `epicfight_dd:halberd` | +2 | +0.19 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/katana.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Katana**<br><sub><code>knavesneeds:twilightforest/ironwood/katana</code></sub> | `epicfight:uchigatana` | +2 | +0.22 | +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/longsword.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Longsword**<br><sub><code>knavesneeds:twilightforest/ironwood/longsword</code></sub> | `womplus:hollow_longsword` | +2 | +0.19 | +21 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/rapier.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Rapier**<br><sub><code>knavesneeds:twilightforest/ironwood/rapier</code></sub> | `epicfight_dd:florett` | +2 | +0.26 | +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/sai.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Sai**<br><sub><code>knavesneeds:twilightforest/ironwood/sai</code></sub> | `epicfight:dagger` | +2 | +0.29 | +16 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/scythe.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Scythe**<br><sub><code>knavesneeds:twilightforest/ironwood/scythe</code></sub> | `epicfight_dd:war_sickle` | +2 | +0.19 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/spear.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Spear**<br><sub><code>knavesneeds:twilightforest/ironwood/spear</code></sub> | `epicfight:spear` | +2 | +0.19 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/twinblade.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Twinblade**<br><sub><code>knavesneeds:twilightforest/ironwood/twinblade</code></sub> | `wom:staff` | +2 | +0.18 | +16 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/ironwood/warglaive.png" alt="" width="24" height="24"> **Twilightforest / Ironwood / Warglaive**<br><sub><code>knavesneeds:twilightforest/ironwood/warglaive</code></sub> | `wom:orbit` | +2 | +0.18 | +16 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/chakram.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Chakram**<br><sub><code>knavesneeds:twilightforest/knightmetal/chakram</code></sub> | `epicfight_dd:backhand_blade` | +3 | +0.18 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/claymore.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Claymore**<br><sub><code>knavesneeds:twilightforest/knightmetal/claymore</code></sub> | `epicfight_dd:light_greatsword` | +3 | +0.26 | +42 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/cutlass.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Cutlass**<br><sub><code>knavesneeds:twilightforest/knightmetal/cutlass</code></sub> | `epicfight_dd:saber` | +3 | +0.24 | +21 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/glaive.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Glaive**<br><sub><code>knavesneeds:twilightforest/knightmetal/glaive</code></sub> | `epicfight_dd:pole_blade` | +3 | +0.21 | +37 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/greataxe.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Greataxe**<br><sub><code>knavesneeds:twilightforest/knightmetal/greataxe</code></sub> | `womplus:greataxe` | +3 | +0.24 | +47 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/greathammer.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Greathammer**<br><sub><code>knavesneeds:twilightforest/knightmetal/greathammer</code></sub> | `tnk:great_hammer` | +3 | +0.2 | +52 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/halberd.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Halberd**<br><sub><code>knavesneeds:twilightforest/knightmetal/halberd</code></sub> | `epicfight_dd:halberd` | +3 | +0.21 | +37 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/katana.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Katana**<br><sub><code>knavesneeds:twilightforest/knightmetal/katana</code></sub> | `epicfight:uchigatana` | +3 | +0.24 | +21 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/longsword.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Longsword**<br><sub><code>knavesneeds:twilightforest/knightmetal/longsword</code></sub> | `wom:ruine` | +3 | +0.21 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/rapier.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Rapier**<br><sub><code>knavesneeds:twilightforest/knightmetal/rapier</code></sub> | `epicfight_dd:florett` | +3 | +0.28 | +32 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/sai.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Sai**<br><sub><code>knavesneeds:twilightforest/knightmetal/sai</code></sub> | `epicfight:dagger` | +3 | +0.31 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/scythe.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Scythe**<br><sub><code>knavesneeds:twilightforest/knightmetal/scythe</code></sub> | `epicfight_dd:war_sickle` | +3 | +0.21 | +37 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/spear.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Spear**<br><sub><code>knavesneeds:twilightforest/knightmetal/spear</code></sub> | `epicfight:spear` | +3 | +0.21 | +37 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/twinblade.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Twinblade**<br><sub><code>knavesneeds:twilightforest/knightmetal/twinblade</code></sub> | `epicfight_dd:pole_blade` | +3 | +0.2 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/knightmetal/warglaive.png" alt="" width="24" height="24"> **Twilightforest / Knightmetal / Warglaive**<br><sub><code>knavesneeds:twilightforest/knightmetal/warglaive</code></sub> | `wom:staff` | +3 | +0.2 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/chakram.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Chakram**<br><sub><code>knavesneeds:twilightforest/steeleaf/chakram</code></sub> | `epicfight_dd:backhand_blade` | +3 | +0.18 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/claymore.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Claymore**<br><sub><code>knavesneeds:twilightforest/steeleaf/claymore</code></sub> | `epicfight_dd:light_greatsword` | +3 | +0.26 | +42 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/cutlass.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Cutlass**<br><sub><code>knavesneeds:twilightforest/steeleaf/cutlass</code></sub> | `epicfight_dd:saber` | +3 | +0.24 | +21 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/glaive.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Glaive**<br><sub><code>knavesneeds:twilightforest/steeleaf/glaive</code></sub> | `epicfight_dd:pole_blade` | +3 | +0.21 | +37 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/greataxe.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Greataxe**<br><sub><code>knavesneeds:twilightforest/steeleaf/greataxe</code></sub> | `womplus:greataxe` | +3 | +0.24 | +47 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/greathammer.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Greathammer**<br><sub><code>knavesneeds:twilightforest/steeleaf/greathammer</code></sub> | `tnk:great_hammer` | +3 | +0.2 | +52 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/halberd.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Halberd**<br><sub><code>knavesneeds:twilightforest/steeleaf/halberd</code></sub> | `epicfight_dd:halberd` | +3 | +0.21 | +37 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/katana.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Katana**<br><sub><code>knavesneeds:twilightforest/steeleaf/katana</code></sub> | `epicfight:uchigatana` | +3 | +0.24 | +21 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/longsword.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Longsword**<br><sub><code>knavesneeds:twilightforest/steeleaf/longsword</code></sub> | `epicfight_dd:milady` | +3 | +0.21 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/rapier.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Rapier**<br><sub><code>knavesneeds:twilightforest/steeleaf/rapier</code></sub> | `epicfight_dd:florett` | +3 | +0.28 | +32 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/sai.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Sai**<br><sub><code>knavesneeds:twilightforest/steeleaf/sai</code></sub> | `epicfight:dagger` | +3 | +0.31 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/scythe.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Scythe**<br><sub><code>knavesneeds:twilightforest/steeleaf/scythe</code></sub> | `epicfight_dd:war_sickle` | +3 | +0.21 | +37 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/spear.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Spear**<br><sub><code>knavesneeds:twilightforest/steeleaf/spear</code></sub> | `epicfight:spear` | +3 | +0.21 | +37 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/twinblade.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Twinblade**<br><sub><code>knavesneeds:twilightforest/steeleaf/twinblade</code></sub> | `epicfight_dd:pole_blade` | +3 | +0.2 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/knavesneeds/twilightforest/steeleaf/warglaive.png" alt="" width="24" height="24"> **Twilightforest / Steeleaf / Warglaive**<br><sub><code>knavesneeds:twilightforest/steeleaf/warglaive</code></sub> | `wom:staff` | +3 | +0.2 | +19 pp |

<a id="weapons-combat-legendary_monsters"></a>
### Legendary Monsters
20 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/axe_of_lightning.png" alt="" width="24" height="24"> **Axe Of Lightning**<br><sub><code>legendary_monsters:axe_of_lightning</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.32 | +54 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/chorus_blade.png" alt="" width="24" height="24"> **Chorus Blade**<br><sub><code>legendary_monsters:chorus_blade</code></sub> | `epicfight_dd:light_greatsword` | +6 | +0.32 | +54 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/chorus_cannon.png" alt="" width="24" height="24"> **Chorus Cannon**<br><sub><code>legendary_monsters:chorus_cannon</code></sub> | **Unverified** | Unverified | Unverified | Unverified |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/dinosaur_bone_club.png" alt="" width="24" height="24"> **Dinosaur Bone Club**<br><sub><code>legendary_monsters:dinosaur_bone_club</code></sub> | `epicfight_dd:nailbat` | +6 | +0.26 | +64 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/enderitium_axe.png" alt="" width="24" height="24"> **Enderitium Axe**<br><sub><code>legendary_monsters:enderitium_axe</code></sub> | `womplus:greataxe` | +5 | +0.24 | +38 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/enderitium_sword.png" alt="" width="24" height="24"> **Enderitium Sword**<br><sub><code>legendary_monsters:enderitium_sword</code></sub> | `wom:ruine` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/fiery_jaw.png" alt="" width="24" height="24"> **Fiery Jaw**<br><sub><code>legendary_monsters:fiery_jaw</code></sub> | `wom:clawed_gauntle` | +6 | +0.32 | +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/golden_halbert.png" alt="" width="24" height="24"> **Golden Halbert**<br><sub><code>legendary_monsters:golden_halbert</code></sub> | `epicfight_dd:halberd` | +6 | +0.27 | +49 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/knights_sword.png" alt="" width="24" height="24"> **Knights Sword**<br><sub><code>legendary_monsters:knights_sword</code></sub> | `epicfight_dd:milady` | +6 | +0.27 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/monstrous_anchor.png" alt="" width="24" height="24"> **Monstrous Anchor**<br><sub><code>legendary_monsters:monstrous_anchor</code></sub> | `womplus:greataxe` | +6 | +0.3 | +59 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/mossy_hammer.png" alt="" width="24" height="24"> **Mossy Hammer**<br><sub><code>legendary_monsters:mossy_hammer</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.26 | +64 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/resurrected_javelin.png" alt="" width="24" height="24"> **Resurrected Javelin**<br><sub><code>legendary_monsters:resurrected_javelin</code></sub> | `epicfight:trident` | +6 | +0.27 | +49 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/sharp_battle_axe.png" alt="" width="24" height="24"> **Sharp Battle Axe**<br><sub><code>legendary_monsters:sharp_battle_axe</code></sub> | `epicfight:axe` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/shattered_greatsword.png" alt="" width="24" height="24"> **Shattered Greatsword**<br><sub><code>legendary_monsters:shattered_greatsword</code></sub> | `epicfight_dd:bonecutting_saw` | +6 | +0.32 | +54 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/soul_great_sword.png" alt="" width="24" height="24"> **Soul Great Sword**<br><sub><code>legendary_monsters:soul_great_sword</code></sub> | `wom:ruine` | +6 | +0.27 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/the_great_frost.png" alt="" width="24" height="24"> **The Great Frost**<br><sub><code>legendary_monsters:the_great_frost</code></sub> | `wom:moonless` | +6 | +0.27 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/the_tesseract.png" alt="" width="24" height="24"> **The Tesseract**<br><sub><code>legendary_monsters:the_tesseract</code></sub> | `epicfight_dd:eclipse` | +6 | +0.32 | +54 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/void_sword.png" alt="" width="24" height="24"> **Void Sword**<br><sub><code>legendary_monsters:void_sword</code></sub> | `epicfight:sword` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/wand_of_clouds.png" alt="" width="24" height="24"> **Wand Of Clouds**<br><sub><code>legendary_monsters:wand_of_clouds</code></sub> | `epicfight_dd:battlestaff` | +6 | +0.24 | +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/withered_scythe.png" alt="" width="24" height="24"> **Withered Scythe**<br><sub><code>legendary_monsters:withered_scythe</code></sub> | `epicfight_dd:war_sickle` | +6 | +0.27 | +49 pp |

<a id="weapons-combat-bakery"></a>
### Let’s Do: Bakery
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/bakery/bread_knife.png" alt="" width="24" height="24"> **Bread Knife**<br><sub><code>bakery:bread_knife</code></sub> | `epicfight_dd:knife` | +5 | +0.35 | +25 pp |

<a id="weapons-combat-farm_and_charm"></a>
### Let’s Do: Farm & Charm
4 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/farm_and_charm/diamond_cleaver.png" alt="" width="24" height="24"> **Diamond Cleaver**<br><sub><code>farm_and_charm:diamond_cleaver</code></sub> | `epicfight_dd:messer` | +3 | +0.18 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/farm_and_charm/iron_cleaver.png" alt="" width="24" height="24"> **Iron Cleaver**<br><sub><code>farm_and_charm:iron_cleaver</code></sub> | `epicfight_dd:messer` | +2 | +0.16 | +16 pp |
| <img src="../handbook-source/current/assets/weapons/icons/farm_and_charm/netherite_cleaver.png" alt="" width="24" height="24"> **Netherite Cleaver**<br><sub><code>farm_and_charm:netherite_cleaver</code></sub> | `epicfight_dd:messer` | +4 | +0.2 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/farm_and_charm/pitchfork.png" alt="" width="24" height="24"> **Pitchfork**<br><sub><code>farm_and_charm:pitchfork</code></sub> | `epicfight:trident` | +5 | +0.25 | +45 pp |

<a id="weapons-combat-minecraft"></a>
### Minecraft / Vanilla Backport
25 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/bow.png" alt="" width="24" height="24"> **Bow**<br><sub><code>minecraft:bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/copper_axe.png" alt="" width="24" height="24"> **Copper Axe**<br><sub><code>minecraft:copper_axe</code></sub> | `epicfight:axe` | +1.5 | +0.16 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/copper_spear.png" alt="" width="24" height="24"> **Copper Spear**<br><sub><code>minecraft:copper_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/copper_sword.png" alt="" width="24" height="24"> **Copper Sword**<br><sub><code>minecraft:copper_sword</code></sub> | `epicfight:sword` | +1.5 | +0.14 | +13 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/crossbow.png" alt="" width="24" height="24"> **Crossbow**<br><sub><code>minecraft:crossbow</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/diamond_axe.png" alt="" width="24" height="24"> **Diamond Axe**<br><sub><code>minecraft:diamond_axe</code></sub> | `epicfight:axe` | +3 | +0.2 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/diamond_spear.png" alt="" width="24" height="24"> **Diamond Spear**<br><sub><code>minecraft:diamond_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/diamond_sword.png" alt="" width="24" height="24"> **Diamond Sword**<br><sub><code>minecraft:diamond_sword</code></sub> | `epicfight:sword` | +3 | +0.18 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/golden_axe.png" alt="" width="24" height="24"> **Golden Axe**<br><sub><code>minecraft:golden_axe</code></sub> | `epicfight:axe` | +1.5 | +0.16 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/golden_spear.png" alt="" width="24" height="24"> **Golden Spear**<br><sub><code>minecraft:golden_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/golden_sword.png" alt="" width="24" height="24"> **Golden Sword**<br><sub><code>minecraft:golden_sword</code></sub> | `epicfight:sword` | +1.5 | +0.14 | +13 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/iron_axe.png" alt="" width="24" height="24"> **Iron Axe**<br><sub><code>minecraft:iron_axe</code></sub> | `epicfight:axe` | +2 | +0.18 | +26 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/iron_spear.png" alt="" width="24" height="24"> **Iron Spear**<br><sub><code>minecraft:iron_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/iron_sword.png" alt="" width="24" height="24"> **Iron Sword**<br><sub><code>minecraft:iron_sword</code></sub> | `epicfight:sword` | +2 | +0.16 | +16 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/mace.png" alt="" width="24" height="24"> **Mace**<br><sub><code>minecraft:mace</code></sub> | `epicfight:axe` | Preset | Preset | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/netherite_axe.png" alt="" width="24" height="24"> **Netherite Axe**<br><sub><code>minecraft:netherite_axe</code></sub> | `epicfight:axe` | +4 | +0.22 | +40 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/netherite_spear.png" alt="" width="24" height="24"> **Netherite Spear**<br><sub><code>minecraft:netherite_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/netherite_sword.png" alt="" width="24" height="24"> **Netherite Sword**<br><sub><code>minecraft:netherite_sword</code></sub> | `epicfight:sword` | +4 | +0.2 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/stone_axe.png" alt="" width="24" height="24"> **Stone Axe**<br><sub><code>minecraft:stone_axe</code></sub> | `epicfight:axe` | +1.5 | +0.16 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/stone_spear.png" alt="" width="24" height="24"> **Stone Spear**<br><sub><code>minecraft:stone_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/stone_sword.png" alt="" width="24" height="24"> **Stone Sword**<br><sub><code>minecraft:stone_sword</code></sub> | `epicfight:sword` | +1.5 | +0.14 | +13 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/trident.png" alt="" width="24" height="24"> **Trident**<br><sub><code>minecraft:trident</code></sub> | `epicfight:trident` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/wooden_axe.png" alt="" width="24" height="24"> **Wooden Axe**<br><sub><code>minecraft:wooden_axe</code></sub> | `epicfight:axe` | +1 | +0.14 | +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/wooden_spear.png" alt="" width="24" height="24"> **Wooden Spear**<br><sub><code>minecraft:wooden_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/wooden_sword.png" alt="" width="24" height="24"> **Wooden Sword**<br><sub><code>minecraft:wooden_sword</code></sub> | `epicfight:sword` | +1 | +0.12 | +10 pp |

<a id="weapons-combat-mowziesmobs"></a>
### Mowzie’s Mobs
6 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/mowziesmobs/blowgun.png" alt="" width="24" height="24"> **Blowgun**<br><sub><code>mowziesmobs:blowgun</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/mowziesmobs/earthrend_gauntlet.png" alt="" width="24" height="24"> **Earthrend Gauntlet**<br><sub><code>mowziesmobs:earthrend_gauntlet</code></sub> | `tnk:earthrend_gauntlet` | Preset | +0.5 … +0.8 | +8 pp |
| <img src="../handbook-source/current/assets/weapons/icons/mowziesmobs/naga_fang_dagger.png" alt="" width="24" height="24"> **Naga Fang Dagger**<br><sub><code>mowziesmobs:naga_fang_dagger</code></sub> | `epicfight_dd:knife` | +1 | +0.4 | +10 pp |
| <img src="../handbook-source/current/assets/weapons/icons/mowziesmobs/sculptor_staff.png" alt="" width="24" height="24"> **Sculptor Staff**<br><sub><code>mowziesmobs:sculptor_staff</code></sub> | `epicfight_dd:battlestaff_amethyst` | +3 | +0.6 | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/mowziesmobs/spear.png" alt="" width="24" height="24"> **Spear**<br><sub><code>mowziesmobs:spear</code></sub> | `epicfight:spear` | Preset | Preset | +4 pp |
| <img src="../handbook-source/current/assets/weapons/icons/mowziesmobs/wrought_axe.png" alt="" width="24" height="24"> **Wrought Axe**<br><sub><code>mowziesmobs:wrought_axe</code></sub> | `epicfight_dd:steel_axe` | Preset | +0.3 | +50 pp |

<a id="weapons-combat-simplyswords"></a>
### Simply Swords
133 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/arcanethyst.png" alt="" width="24" height="24"> **Arcanethyst**<br><sub><code>simplyswords:arcanethyst</code></sub> | `epicfight_dd:battlestaff_amethyst` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/awakened_lichblade.png" alt="" width="24" height="24"> **Awakened Lichblade**<br><sub><code>simplyswords:awakened_lichblade</code></sub> | `epicfight_dd:eclipse` | +6 | +0.3 | +54 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/bloodwake.png" alt="" width="24" height="24"> **Bloodwake**<br><sub><code>simplyswords:bloodwake</code></sub> | `epicfight_dd:blood_ritus_dagger` | +5 | +0.35 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/bramblethorn.png" alt="" width="24" height="24"> **Bramblethorn**<br><sub><code>simplyswords:bramblethorn</code></sub> | `epicfight_dd:florett` | +5 | +0.25 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/brimstone_claymore.png" alt="" width="24" height="24"> **Brimstone Claymore**<br><sub><code>simplyswords:brimstone_claymore</code></sub> | `epicfight_dd:light_greatsword` | +5 | +0.3 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/caelestis.png" alt="" width="24" height="24"> **Caelestis**<br><sub><code>simplyswords:caelestis</code></sub> | `epicfight_dd:vitreus` | +5 | +0.25 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/chompolotl.png" alt="" width="24" height="24"> **Chomp'olotl**<br><sub><code>simplyswords:chompolotl</code></sub> | `epicfight_dd:hookclaws` | +5 | +0.32 | +27 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/dawnquiver.png" alt="" width="24" height="24"> **Dawnquiver**<br><sub><code>simplyswords:dawnquiver</code></sub> | `epicfight_dd:milady` | +5 | +0.3 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/decaying_relic.png" alt="" width="24" height="24"> **Decaying relic**<br><sub><code>simplyswords:decaying_relic</code></sub> | `epicfight_dd:war_sickle` | +5 | +0.24 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_chakram.png" alt="" width="24" height="24"> **Diamond Chakram**<br><sub><code>simplyswords:diamond_chakram</code></sub> | `epicfight_dd:backhand_blade` | +3 | +0.28 | +21 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_claymore.png" alt="" width="24" height="24"> **Diamond Claymore**<br><sub><code>simplyswords:diamond_claymore</code></sub> | `epicfight_dd:light_greatsword` | +3 | +0.26 | +42 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_cutlass.png" alt="" width="24" height="24"> **Diamond Cutlass**<br><sub><code>simplyswords:diamond_cutlass</code></sub> | `epicfight_dd:saber` | +3 | +0.24 | +21 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_glaive.png" alt="" width="24" height="24"> **Diamond Glaive**<br><sub><code>simplyswords:diamond_glaive</code></sub> | `epicfight_dd:halberd` | +3 | +0.22 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_greataxe.png" alt="" width="24" height="24"> **Diamond Greataxe**<br><sub><code>simplyswords:diamond_greataxe</code></sub> | `womplus:greataxe` | +3 | +0.24 | +47 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_greathammer.png" alt="" width="24" height="24"> **Diamond Greathammer**<br><sub><code>simplyswords:diamond_greathammer</code></sub> | `epicfight_dd:steel_axe` | +3 | +0.2 | +52 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_halberd.png" alt="" width="24" height="24"> **Diamond Halberd**<br><sub><code>simplyswords:diamond_halberd</code></sub> | `epicfight_dd:halberd` | +3 | +0.21 | +37 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_katana.png" alt="" width="24" height="24"> **Diamond Katana**<br><sub><code>simplyswords:diamond_katana</code></sub> | `epicfight:uchigatana` | +3 | +0.24 | +21 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_longsword.png" alt="" width="24" height="24"> **Diamond Longsword**<br><sub><code>simplyswords:diamond_longsword</code></sub> | `epicfight_dd:messer` | +3 | +0.21 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_rapier.png" alt="" width="24" height="24"> **Diamond Rapier**<br><sub><code>simplyswords:diamond_rapier</code></sub> | `epicfight_dd:florett` | +3 | +0.28 | +21 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_sai.png" alt="" width="24" height="24"> **Diamond Sai**<br><sub><code>simplyswords:diamond_sai</code></sub> | `epicfight:dagger` | +3 | +0.31 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_scythe.png" alt="" width="24" height="24"> **Diamond Scythe**<br><sub><code>simplyswords:diamond_scythe</code></sub> | `epicfight_dd:war_sickle` | +3 | +0.21 | +37 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_spear.png" alt="" width="24" height="24"> **Diamond Spear**<br><sub><code>simplyswords:diamond_spear</code></sub> | `epicfight:spear` | +3 | +0.21 | +37 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_twinblade.png" alt="" width="24" height="24"> **Diamond Twinblade**<br><sub><code>simplyswords:diamond_twinblade</code></sub> | `epicfight_dd:battlestaff_amethyst` | +3 | +0.2 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/diamond_warglaive.png" alt="" width="24" height="24"> **Diamond Warglaive**<br><sub><code>simplyswords:diamond_warglaive</code></sub> | `wom:staff` | +3 | +0.2 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/dormant_relic.png" alt="" width="24" height="24"> **Dormant Relic**<br><sub><code>simplyswords:dormant_relic</code></sub> | `epicfight_dd:milady` | +5 | +0.25 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/dreadwhisper.png" alt="" width="24" height="24"> **Dreadwhisper**<br><sub><code>simplyswords:dreadwhisper</code></sub> | `wom:nova` | +5 | +0.26 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/emberblade.png" alt="" width="24" height="24"> **Emberblade**<br><sub><code>simplyswords:emberblade</code></sub> | `epicfight_dd:milady` | +5 | +0.3 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/emberlash.png" alt="" width="24" height="24"> **Emberlash**<br><sub><code>simplyswords:emberlash</code></sub> | `epicfight_dd:herb_sickle` | +5 | +0.35 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/enigma.png" alt="" width="24" height="24"> **Enigma**<br><sub><code>simplyswords:enigma</code></sub> | `epicfight_dd:vitreus` | +5 | +0.25 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/flamewind.png" alt="" width="24" height="24"> **Flamewind**<br><sub><code>simplyswords:flamewind</code></sub> | `epicfight_dd:pole_blade` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/frostfall.png" alt="" width="24" height="24"> **Frostfall**<br><sub><code>simplyswords:frostfall</code></sub> | `epicfight_dd:nailbat` | +5 | +0.28 | +55 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gloampiercer.png" alt="" width="24" height="24"> **Gloampiercer**<br><sub><code>simplyswords:gloampiercer</code></sub> | `wom:agony` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_chakram.png" alt="" width="24" height="24"> **Gold Chakram**<br><sub><code>simplyswords:gold_chakram</code></sub> | `epicfight_dd:backhand_blade` | +1.5 | +0.24 | +15 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_claymore.png" alt="" width="24" height="24"> **Gold Claymore**<br><sub><code>simplyswords:gold_claymore</code></sub> | `epicfight_dd:light_greatsword` | +1.5 | +0.22 | +34 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_cutlass.png" alt="" width="24" height="24"> **Gold Cutlass**<br><sub><code>simplyswords:gold_cutlass</code></sub> | `epicfight_dd:saber` | +1.5 | +0.2 | +15 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_glaive.png" alt="" width="24" height="24"> **Gold Glaive**<br><sub><code>simplyswords:gold_glaive</code></sub> | `epicfight:spear` | +1.5 | +0.17 | +29 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_greataxe.png" alt="" width="24" height="24"> **Gold Greataxe**<br><sub><code>simplyswords:gold_greataxe</code></sub> | `womplus:greataxe` | +1.5 | +0.2 | +39 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_greathammer.png" alt="" width="24" height="24"> **Gold Greathammer**<br><sub><code>simplyswords:gold_greathammer</code></sub> | `epicfight_dd:steel_axe` | +1.5 | +0.16 | +44 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_halberd.png" alt="" width="24" height="24"> **Gold Halberd**<br><sub><code>simplyswords:gold_halberd</code></sub> | `epicfight_dd:halberd` | +1.5 | +0.17 | +29 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_katana.png" alt="" width="24" height="24"> **Gold Katana**<br><sub><code>simplyswords:gold_katana</code></sub> | `epicfight:uchigatana` | +1.5 | +0.2 | +15 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_longsword.png" alt="" width="24" height="24"> **Gold Longsword**<br><sub><code>simplyswords:gold_longsword</code></sub> | `epicfight_dd:messer` | +1.5 | +0.17 | +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_rapier.png" alt="" width="24" height="24"> **Gold Rapier**<br><sub><code>simplyswords:gold_rapier</code></sub> | `epicfight_dd:florett` | +1.5 | +0.24 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_sai.png" alt="" width="24" height="24"> **Gold Sai**<br><sub><code>simplyswords:gold_sai</code></sub> | `epicfight:dagger` | +1.5 | +0.27 | +13 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_scythe.png" alt="" width="24" height="24"> **Gold Scythe**<br><sub><code>simplyswords:gold_scythe</code></sub> | `epicfight_dd:war_sickle` | +1.5 | +0.17 | +29 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_spear.png" alt="" width="24" height="24"> **Gold Spear**<br><sub><code>simplyswords:gold_spear</code></sub> | `epicfight:spear` | +1.5 | +0.17 | +29 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_twinblade.png" alt="" width="24" height="24"> **Gold Twinblade**<br><sub><code>simplyswords:gold_twinblade</code></sub> | `epicfight_dd:battlestaff` | +1.5 | +0.16 | +13 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/gold_warglaive.png" alt="" width="24" height="24"> **Gold Warglaive**<br><sub><code>simplyswords:gold_warglaive</code></sub> | `wom:staff` | +1.5 | +0.16 | +13 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/harbinger.png" alt="" width="24" height="24"> **Harbinger**<br><sub><code>simplyswords:harbinger</code></sub> | `wom:ruine` | +5 | +0.26 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/hearthflame.png" alt="" width="24" height="24"> **Hearthflame**<br><sub><code>simplyswords:hearthflame</code></sub> | `epicfight_dd:steel_axe` | +5 | +0.24 | +60 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/hiveheart.png" alt="" width="24" height="24"> **Hiveheart**<br><sub><code>simplyswords:hiveheart</code></sub> | `epicfight_dd:steel_axe` | +5 | +0.28 | +55 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/icewhisper.png" alt="" width="24" height="24"> **Icewhisper**<br><sub><code>simplyswords:icewhisper</code></sub> | `wom:orbit` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/ionbound_stormscale.png" alt="" width="24" height="24"> **Ionbound Stormscale**<br><sub><code>simplyswords:ionbound_stormscale</code></sub> | `wom:agony` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_chakram.png" alt="" width="24" height="24"> **Iron Chakram**<br><sub><code>simplyswords:iron_chakram</code></sub> | `epicfight_dd:backhand_blade` | +2 | +0.26 | +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_claymore.png" alt="" width="24" height="24"> **Iron Claymore**<br><sub><code>simplyswords:iron_claymore</code></sub> | `epicfight_dd:light_greatsword` | +2 | +0.24 | +38 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_cutlass.png" alt="" width="24" height="24"> **Iron Cutlass**<br><sub><code>simplyswords:iron_cutlass</code></sub> | `epicfight_dd:saber` | +2 | +0.22 | +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_glaive.png" alt="" width="24" height="24"> **Iron Glaive**<br><sub><code>simplyswords:iron_glaive</code></sub> | `epicfight:spear` | +2 | +0.19 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_greataxe.png" alt="" width="24" height="24"> **Iron Greataxe**<br><sub><code>simplyswords:iron_greataxe</code></sub> | `womplus:greataxe` | +2 | +0.22 | +43 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_greathammer.png" alt="" width="24" height="24"> **Iron Greathammer**<br><sub><code>simplyswords:iron_greathammer</code></sub> | `epicfight_dd:steel_axe` | +2 | +0.18 | +48 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_halberd.png" alt="" width="24" height="24"> **Iron Halberd**<br><sub><code>simplyswords:iron_halberd</code></sub> | `epicfight_dd:halberd` | +2 | +0.19 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_katana.png" alt="" width="24" height="24"> **Iron Katana**<br><sub><code>simplyswords:iron_katana</code></sub> | `epicfight:uchigatana` | +2 | +0.22 | +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_longsword.png" alt="" width="24" height="24"> **Iron Longsword**<br><sub><code>simplyswords:iron_longsword</code></sub> | `epicfight_dd:messer` | +2 | +0.19 | +21 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_rapier.png" alt="" width="24" height="24"> **Iron Rapier**<br><sub><code>simplyswords:iron_rapier</code></sub> | `epicfight_dd:florett` | +2 | +0.26 | +28 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_sai.png" alt="" width="24" height="24"> **Iron Sai**<br><sub><code>simplyswords:iron_sai</code></sub> | `epicfight:dagger` | +2 | +0.29 | +16 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_scythe.png" alt="" width="24" height="24"> **Iron Scythe**<br><sub><code>simplyswords:iron_scythe</code></sub> | `epicfight_dd:war_sickle` | +2 | +0.19 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_spear.png" alt="" width="24" height="24"> **Iron Spear**<br><sub><code>simplyswords:iron_spear</code></sub> | `epicfight:spear` | +2 | +0.19 | +33 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_twinblade.png" alt="" width="24" height="24"> **Iron Twinblade**<br><sub><code>simplyswords:iron_twinblade</code></sub> | `epicfight_dd:battlestaff` | +2 | +0.18 | +16 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/iron_warglaive.png" alt="" width="24" height="24"> **Iron Warglaive**<br><sub><code>simplyswords:iron_warglaive</code></sub> | `wom:staff` | +2 | +0.18 | +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/livyatan.png" alt="" width="24" height="24"> **Livyatan**<br><sub><code>simplyswords:livyatan</code></sub> | `womplus:greataxe` | +5 | +0.24 | +38 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/toxic_longsword.png" alt="" width="24" height="24"> **Longsword of the Plague**<br><sub><code>simplyswords:toxic_longsword</code></sub> | `epicfight_dd:messer` | +5 | +0.25 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/magiblade.png" alt="" width="24" height="24"> **Magiblade**<br><sub><code>simplyswords:magiblade</code></sub> | `epicfight_dd:battlestaff_amethyst` | +5 | +0.24 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/magiscythe.png" alt="" width="24" height="24"> **Magiscythe**<br><sub><code>simplyswords:magiscythe</code></sub> | `epicfight_dd:war_sickle` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/magispear.png" alt="" width="24" height="24"> **Magispear**<br><sub><code>simplyswords:magispear</code></sub> | `wom:orbit` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/mjolnir.png" alt="" width="24" height="24"> **Mjolnir**<br><sub><code>simplyswords:mjolnir</code></sub> | `epicfight_dd:steel_axe` | +5 | +0.28 | +55 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/molten_edge.png" alt="" width="24" height="24"> **Molten Edge**<br><sub><code>simplyswords:molten_edge</code></sub> | `epicfight_dd:herb_sickle` | +5 | +0.28 | +55 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_chakram.png" alt="" width="24" height="24"> **Netherite Chakram**<br><sub><code>simplyswords:netherite_chakram</code></sub> | `epicfight_dd:backhand_blade` | +4 | +0.3 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_claymore.png" alt="" width="24" height="24"> **Netherite Claymore**<br><sub><code>simplyswords:netherite_claymore</code></sub> | `epicfight_dd:light_greatsword` | +4 | +0.28 | +46 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_cutlass.png" alt="" width="24" height="24"> **Netherite Cutlass**<br><sub><code>simplyswords:netherite_cutlass</code></sub> | `epicfight_dd:saber` | +4 | +0.26 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_glaive.png" alt="" width="24" height="24"> **Netherite Glaive**<br><sub><code>simplyswords:netherite_glaive</code></sub> | `epicfight:spear` | +4 | +0.23 | +41 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_greataxe.png" alt="" width="24" height="24"> **Netherite Greataxe**<br><sub><code>simplyswords:netherite_greataxe</code></sub> | `womplus:greataxe` | +4 | +0.26 | +51 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_greathammer.png" alt="" width="24" height="24"> **Netherite Greathammer**<br><sub><code>simplyswords:netherite_greathammer</code></sub> | `epicfight_dd:steel_axe` | +4 | +0.22 | +56 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_halberd.png" alt="" width="24" height="24"> **Netherite Halberd**<br><sub><code>simplyswords:netherite_halberd</code></sub> | `epicfight_dd:halberd` | +4 | +0.23 | +41 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_katana.png" alt="" width="24" height="24"> **Netherite Katana**<br><sub><code>simplyswords:netherite_katana</code></sub> | `epicfight:uchigatana` | +4 | +0.26 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_longsword.png" alt="" width="24" height="24"> **Netherite Longsword**<br><sub><code>simplyswords:netherite_longsword</code></sub> | `epicfight_dd:messer` | +4 | +0.23 | +27 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_rapier.png" alt="" width="24" height="24"> **Netherite Rapier**<br><sub><code>simplyswords:netherite_rapier</code></sub> | `epicfight_dd:florett` | +4 | +0.3 | +36 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_sai.png" alt="" width="24" height="24"> **Netherite Sai**<br><sub><code>simplyswords:netherite_sai</code></sub> | `epicfight:dagger` | +4 | +0.33 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_scythe.png" alt="" width="24" height="24"> **Netherite Scythe**<br><sub><code>simplyswords:netherite_scythe</code></sub> | `epicfight_dd:war_sickle` | +4 | +0.23 | +41 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_spear.png" alt="" width="24" height="24"> **Netherite Spear**<br><sub><code>simplyswords:netherite_spear</code></sub> | `epicfight:spear` | +4 | +0.23 | +41 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_twinblade.png" alt="" width="24" height="24"> **Netherite Twinblade**<br><sub><code>simplyswords:netherite_twinblade</code></sub> | `wom:staff` | +4 | +0.22 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/netherite_warglaive.png" alt="" width="24" height="24"> **Netherite Warglaive**<br><sub><code>simplyswords:netherite_warglaive</code></sub> | `wom:staff` | +4 | +0.22 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/ribboncleaver.png" alt="" width="24" height="24"> **Ribboncleaver**<br><sub><code>simplyswords:ribboncleaver</code></sub> | `epicfight_dd:messer` | +5 | +0.25 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/riftmane.png" alt="" width="24" height="24"> **Riftmane**<br><sub><code>simplyswords:riftmane</code></sub> | `wom:ruine` | +5 | +0.3 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/righteous_relic.png" alt="" width="24" height="24"> **Righteous Relic**<br><sub><code>simplyswords:righteous_relic</code></sub> | `epicfight_dd:milady` | +5 | +0.26 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_chakram.png" alt="" width="24" height="24"> **Runic Chakram**<br><sub><code>simplyswords:runic_chakram</code></sub> | `epicfight_dd:backhand_blade` | +4 | +0.3 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_claymore.png" alt="" width="24" height="24"> **Runic Claymore**<br><sub><code>simplyswords:runic_claymore</code></sub> | `epicfight_dd:light_greatsword` | +4 | +0.28 | +46 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_cutlass.png" alt="" width="24" height="24"> **Runic Cutlass**<br><sub><code>simplyswords:runic_cutlass</code></sub> | `epicfight_dd:saber` | +4 | +0.26 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_glaive.png" alt="" width="24" height="24"> **Runic Glaive**<br><sub><code>simplyswords:runic_glaive</code></sub> | `epicfight:spear` | +4 | +0.23 | +41 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_greataxe.png" alt="" width="24" height="24"> **Runic Greataxe**<br><sub><code>simplyswords:runic_greataxe</code></sub> | `womplus:greataxe` | +4 | +0.26 | +51 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_greathammer.png" alt="" width="24" height="24"> **Runic Greathammer**<br><sub><code>simplyswords:runic_greathammer</code></sub> | `epicfight_dd:steel_axe` | +4 | +0.22 | +56 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_halberd.png" alt="" width="24" height="24"> **Runic Halberd**<br><sub><code>simplyswords:runic_halberd</code></sub> | `epicfight_dd:halberd` | +4 | +0.23 | +41 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_katana.png" alt="" width="24" height="24"> **Runic Katana**<br><sub><code>simplyswords:runic_katana</code></sub> | `epicfight:uchigatana` | +4 | +0.26 | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_longsword.png" alt="" width="24" height="24"> **Runic Longsword**<br><sub><code>simplyswords:runic_longsword</code></sub> | `epicfight_dd:messer` | +4 | +0.23 | +27 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_rapier.png" alt="" width="24" height="24"> **Runic Rapier**<br><sub><code>simplyswords:runic_rapier</code></sub> | `epicfight_dd:florett` | +4 | +0.3 | +36 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_sai.png" alt="" width="24" height="24"> **Runic Sai**<br><sub><code>simplyswords:runic_sai</code></sub> | `epicfight:dagger` | +4 | +0.33 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_scythe.png" alt="" width="24" height="24"> **Runic Scythe**<br><sub><code>simplyswords:runic_scythe</code></sub> | `epicfight_dd:war_sickle` | +4 | +0.23 | +41 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_spear.png" alt="" width="24" height="24"> **Runic Spear**<br><sub><code>simplyswords:runic_spear</code></sub> | `epicfight:spear` | +4 | +0.23 | +41 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_twinblade.png" alt="" width="24" height="24"> **Runic Twinblade**<br><sub><code>simplyswords:runic_twinblade</code></sub> | `epicfight_dd:battlestaff_amethyst` | +4 | +0.22 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/runic_warglaive.png" alt="" width="24" height="24"> **Runic Warglaive**<br><sub><code>simplyswords:runic_warglaive</code></sub> | `wom:staff` | +4 | +0.22 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/shadowsting.png" alt="" width="24" height="24"> **Shadowsting**<br><sub><code>simplyswords:shadowsting</code></sub> | `epicfight_dd:florett` | +5 | +0.32 | +40 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/slumbering_lichblade.png" alt="" width="24" height="24"> **Slumbering Lichblade**<br><sub><code>simplyswords:slumbering_lichblade</code></sub> | `epicfight_dd:eclipse` | +5 | +0.3 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/soulpyre.png" alt="" width="24" height="24"> **Soul Pyre**<br><sub><code>simplyswords:soulpyre</code></sub> | `womplus:greataxe` | +5 | +0.28 | +55 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/soulkeeper.png" alt="" width="24" height="24"> **Soulkeeper**<br><sub><code>simplyswords:soulkeeper</code></sub> | `wom:torment` | +5 | +0.24 | +60 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/soulrender.png" alt="" width="24" height="24"> **Soulrender**<br><sub><code>simplyswords:soulrender</code></sub> | `epicfight_dd:pole_blade` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/soulstalker.png" alt="" width="24" height="24"> **Soulstalker**<br><sub><code>simplyswords:soulstalker</code></sub> | `epicfight_dd:pole_blade` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/soulstealer.png" alt="" width="24" height="24"> **Soulstealer**<br><sub><code>simplyswords:soulstealer</code></sub> | `epicfight_dd:night_ritus_dagger` | +5 | +0.35 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/stars_edge.png" alt="" width="24" height="24"> **Star's Edge**<br><sub><code>simplyswords:stars_edge</code></sub> | `wom:staff` | +5 | +0.24 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/storms_edge.png" alt="" width="24" height="24"> **Storm's Edge**<br><sub><code>simplyswords:storms_edge</code></sub> | `epicfight_dd:battlestaff` | +5 | +0.24 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/stormbringer.png" alt="" width="24" height="24"> **Stormbringer**<br><sub><code>simplyswords:stormbringer</code></sub> | `epicfight_dd:messer` | +5 | +0.3 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/stormscale.png" alt="" width="24" height="24"> **Stormscale**<br><sub><code>simplyswords:stormscale</code></sub> | `wom:agony` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/sunfire.png" alt="" width="24" height="24"> **Sunfire**<br><sub><code>simplyswords:sunfire</code></sub> | `epicfight_dd:milady` | +5 | +0.26 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/sword_on_a_stick.png" alt="" width="24" height="24"> **Sword on a Stick**<br><sub><code>simplyswords:sword_on_a_stick</code></sub> | `epicfight_dd:halberd` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/tainted_relic.png" alt="" width="24" height="24"> **Tainted Relic**<br><sub><code>simplyswords:tainted_relic</code></sub> | `wom:ruine` | +5 | +0.26 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/tempest.png" alt="" width="24" height="24"> **Tempest**<br><sub><code>simplyswords:tempest</code></sub> | `epicfight_dd:backhand_blade` | +5 | +0.32 | +27 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/the_devourer.png" alt="" width="24" height="24"> **The Devourer**<br><sub><code>simplyswords:the_devourer</code></sub> | `epicfight_dd:bonecutting_saw` | +5 | +0.28 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/watcher_claymore.png" alt="" width="24" height="24"> **The Watcher**<br><sub><code>simplyswords:watcher_claymore</code></sub> | `womplus:hollow_longsword` | +5 | +0.25 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/thunderbrand.png" alt="" width="24" height="24"> **Thunderbrand**<br><sub><code>simplyswords:thunderbrand</code></sub> | `epicfight_dd:iudex_halberd` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/twisted_blade.png" alt="" width="24" height="24"> **Twisted Blade**<br><sub><code>simplyswords:twisted_blade</code></sub> | `wom:ruine` | +5 | +0.25 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/waking_lichblade.png" alt="" width="24" height="24"> **Waking Lichblade**<br><sub><code>simplyswords:waking_lichblade</code></sub> | `epicfight_dd:eclipse` | +5 | +0.28 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/watching_warglaive.png" alt="" width="24" height="24"> **Watching Warglaive**<br><sub><code>simplyswords:watching_warglaive</code></sub> | `epicfight_dd:backhand_blade` | +5 | +0.24 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/waxweaver.png" alt="" width="24" height="24"> **Waxweaver**<br><sub><code>simplyswords:waxweaver</code></sub> | `epicfight_dd:messer` | +5 | +0.3 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/whisperwind.png" alt="" width="24" height="24"> **Whisperwind**<br><sub><code>simplyswords:whisperwind</code></sub> | `epicfight_dd:backhand_blade` | +5 | +0.28 | +27 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/wickpiercer.png" alt="" width="24" height="24"> **Wickpiercer**<br><sub><code>simplyswords:wickpiercer</code></sub> | `wom:agony` | +5 | +0.25 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/wraithfang.png" alt="" width="24" height="24"> **Wraithfang**<br><sub><code>simplyswords:wraithfang</code></sub> | `epicfight_dd:herb_sickle` | +5 | +0.35 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/simplyswords/wraithmaw.png" alt="" width="24" height="24"> **Wraithmaw**<br><sub><code>simplyswords:wraithmaw</code></sub> | `epicfight_dd:herb_sickle` | +5 | +0.32 | +27 pp |

<a id="weapons-combat-thaumaturgetinker"></a>
### Thaumaturge Tinker
5 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/thaumaturgetinker/ichor_axe_gem.png" alt="" width="24" height="24"> **Awakened Ichorium Axe**<br><sub><code>thaumaturgetinker:ichor_axe_gem</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.25 | +55 pp |
| <img src="../handbook-source/current/assets/weapons/icons/thaumaturgetinker/ichor_sword_gem.png" alt="" width="24" height="24"> **Awakened Ichorium Sword**<br><sub><code>thaumaturgetinker:ichor_sword_gem</code></sub> | `epicfight_dd:milady` | +6 | +0.25 | +40 pp |
| <img src="../handbook-source/current/assets/weapons/icons/thaumaturgetinker/blood_sword.png" alt="" width="24" height="24"> **Cursed Spirit's Blade**<br><sub><code>thaumaturgetinker:blood_sword</code></sub> | `wom:moonless` | +5 | +0.2 | +35 pp |
| <img src="../handbook-source/current/assets/weapons/icons/thaumaturgetinker/ichor_axe.png" alt="" width="24" height="24"> **Ichorium Axe**<br><sub><code>thaumaturgetinker:ichor_axe</code></sub> | `womplus:greataxe` | +5 | +0.2 | +45 pp |
| <img src="../handbook-source/current/assets/weapons/icons/thaumaturgetinker/ichor_sword.png" alt="" width="24" height="24"> **Ichorium Sword**<br><sub><code>thaumaturgetinker:ichor_sword</code></sub> | `epicfight_dd:messer` | +5 | +0.2 | +30 pp |

<a id="weapons-combat-aether"></a>
### The Aether
22 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/aether/candy_cane_sword.png" alt="" width="24" height="24"> **Candy Cane Sword**<br><sub><code>aether:candy_cane_sword</code></sub> | `epicfight_dd:saber` | +5 | +0.25 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/enchanted_dart_shooter.png" alt="" width="24" height="24"> **Enchanted Dart Shooter**<br><sub><code>aether:enchanted_dart_shooter</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/aether/flaming_sword.png" alt="" width="24" height="24"> **Flaming Sword**<br><sub><code>aether:flaming_sword</code></sub> | `wom:moonless` | +5 | +0.25 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/golden_dart_shooter.png" alt="" width="24" height="24"> **Golden Dart Shooter**<br><sub><code>aether:golden_dart_shooter</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/aether/gravitite_axe.png" alt="" width="24" height="24"> **Gravitite Axe**<br><sub><code>aether:gravitite_axe</code></sub> | `epicfight_dd:steel_axe` | +3 | +0.2 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/gravitite_sword.png" alt="" width="24" height="24"> **Gravitite Sword**<br><sub><code>aether:gravitite_sword</code></sub> | `epicfight_dd:milady` | +3 | +0.18 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/hammer_of_kingbdogz.png" alt="" width="24" height="24"> **Hammer Of Kingbdogz**<br><sub><code>aether:hammer_of_kingbdogz</code></sub> | `epicfight_dd:nailbat` | +5 | +0.24 | +60 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/holy_sword.png" alt="" width="24" height="24"> **Holy Sword**<br><sub><code>aether:holy_sword</code></sub> | `epicfight_dd:light_greatsword` | +5 | +0.3 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/holystone_axe.png" alt="" width="24" height="24"> **Holystone Axe**<br><sub><code>aether:holystone_axe</code></sub> | `epicfight:axe` | +1.5 | +0.16 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/holystone_sword.png" alt="" width="24" height="24"> **Holystone Sword**<br><sub><code>aether:holystone_sword</code></sub> | `epicfight:sword` | +1.5 | +0.14 | +13 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/lightning_knife.png" alt="" width="24" height="24"> **Lightning Knife**<br><sub><code>aether:lightning_knife</code></sub> | `epicfight_dd:knife` | +5 | +0.35 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/lightning_sword.png" alt="" width="24" height="24"> **Lightning Sword**<br><sub><code>aether:lightning_sword</code></sub> | `epicfight_dd:vitreus` | +5 | +0.28 | +27 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/phoenix_bow.png" alt="" width="24" height="24"> **Phoenix Bow**<br><sub><code>aether:phoenix_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/aether/pig_slayer.png" alt="" width="24" height="24"> **Pig Slayer**<br><sub><code>aether:pig_slayer</code></sub> | `epicfight_dd:knife` | +5 | +0.35 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/poison_dart_shooter.png" alt="" width="24" height="24"> **Poison Dart Shooter**<br><sub><code>aether:poison_dart_shooter</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/aether/skyroot_axe.png" alt="" width="24" height="24"> **Skyroot Axe**<br><sub><code>aether:skyroot_axe</code></sub> | `epicfight:axe` | +1 | +0.14 | +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/skyroot_sword.png" alt="" width="24" height="24"> **Skyroot Sword**<br><sub><code>aether:skyroot_sword</code></sub> | `epicfight:sword` | +1 | +0.12 | +10 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/valkyrie_axe.png" alt="" width="24" height="24"> **Valkyrie Axe**<br><sub><code>aether:valkyrie_axe</code></sub> | `womplus:greataxe` | +4 | +0.22 | +34 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/valkyrie_lance.png" alt="" width="24" height="24"> **Valkyrie Lance**<br><sub><code>aether:valkyrie_lance</code></sub> | `wom:blackstar` | +4 | +0.2 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/vampire_blade.png" alt="" width="24" height="24"> **Vampire Blade**<br><sub><code>aether:vampire_blade</code></sub> | `wom:moonless` | +5 | +0.3 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/zanite_axe.png" alt="" width="24" height="24"> **Zanite Axe**<br><sub><code>aether:zanite_axe</code></sub> | `epicfight:axe` | +2 | +0.18 | +26 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/zanite_sword.png" alt="" width="24" height="24"> **Zanite Sword**<br><sub><code>aether:zanite_sword</code></sub> | `epicfight_dd:messer` | +2 | +0.16 | +16 pp |

<a id="weapons-combat-the_beyond"></a>
### The Beyond
2 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/the_beyond/brittle_axe.png" alt="" width="24" height="24"> **Brittle Axe**<br><sub><code>the_beyond:brittle_axe</code></sub> | `epicfight:axe` | +5 | +0.24 | +38 pp |
| <img src="../handbook-source/current/assets/weapons/icons/the_beyond/brittle_sword.png" alt="" width="24" height="24"> **Brittle Sword**<br><sub><code>the_beyond:brittle_sword</code></sub> | `epicfight:sword` | +5 | +0.22 | +25 pp |

<a id="weapons-combat-skylands"></a>
### The Sky Lands
8 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/skylands/automaton_sword.png" alt="" width="24" height="24"> **Automaton Sword**<br><sub><code>skylands:automaton_sword</code></sub> | `epicfight_dd:messer` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/skylands/igneus_laser_blade.png" alt="" width="24" height="24"> **Igneus Laser Blade**<br><sub><code>skylands:igneus_laser_blade</code></sub> | `epicfight_dd:vitreus` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/skylands/igneus_war_axe.png" alt="" width="24" height="24"> **Igneus War Axe**<br><sub><code>skylands:igneus_war_axe</code></sub> | `womplus:greataxe` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/skylands/inky_sword_of_the_sky.png" alt="" width="24" height="24"> **Inky Sword Of The Sky**<br><sub><code>skylands:inky_sword_of_the_sky</code></sub> | `wom:moonless` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/skylands/pale_sword_of_the_sky.png" alt="" width="24" height="24"> **Pale Sword Of The Sky**<br><sub><code>skylands:pale_sword_of_the_sky</code></sub> | `epicfight_dd:milady` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/skylands/pearlecent_sword_of_the_sky.png" alt="" width="24" height="24"> **Pearlecent Sword Of The Sky**<br><sub><code>skylands:pearlecent_sword_of_the_sky</code></sub> | `epicfight_dd:light_greatsword` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/skylands/sword_of_the_sky.png" alt="" width="24" height="24"> **Sword Of The Sky**<br><sub><code>skylands:sword_of_the_sky</code></sub> | `epicfight:sword` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/skylands/verdant_sword_of_the_sky.png" alt="" width="24" height="24"> **Verdant Sword Of The Sky**<br><sub><code>skylands:verdant_sword_of_the_sky</code></sub> | `epicfight_dd:messer` | +5 | +0.22 | +25 pp |

<a id="weapons-combat-twilightforest"></a>
### The Twilight Forest
16 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/diamond_minotaur_axe.png" alt="" width="24" height="24"> **Diamond Minotaur Axe**<br><sub><code>twilightforest:diamond_minotaur_axe</code></sub> | `womplus:greataxe` | +3 | +0.2 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/ender_bow.png" alt="" width="24" height="24"> **Ender Bow**<br><sub><code>twilightforest:ender_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/fiery_sword.png" alt="" width="24" height="24"> **Fiery Sword**<br><sub><code>twilightforest:fiery_sword</code></sub> | `epicfight_dd:messer` | +4 | +0.2 | +22 pp |
| **Giant Sword**<br><sub><code>twilightforest:giant_sword</code></sub> | `tnk:colossal_blade` | +5 | +0.3 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/glass_sword.png" alt="" width="24" height="24"> **Glass Sword**<br><sub><code>twilightforest:glass_sword</code></sub> | `epicfight_dd:milady` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/gold_minotaur_axe.png" alt="" width="24" height="24"> **Gold Minotaur Axe**<br><sub><code>twilightforest:gold_minotaur_axe</code></sub> | `womplus:greataxe` | +1.5 | +0.16 | +22 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/ice_bow.png" alt="" width="24" height="24"> **Ice Bow**<br><sub><code>twilightforest:ice_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/ice_sword.png" alt="" width="24" height="24"> **Ice Sword**<br><sub><code>twilightforest:ice_sword</code></sub> | `epicfight_dd:vitreus` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/ironwood_axe.png" alt="" width="24" height="24"> **Ironwood Axe**<br><sub><code>twilightforest:ironwood_axe</code></sub> | `epicfight:axe` | +2 | +0.18 | +26 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/ironwood_sword.png" alt="" width="24" height="24"> **Ironwood Sword**<br><sub><code>twilightforest:ironwood_sword</code></sub> | `epicfight:sword` | +2 | +0.16 | +16 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/knightmetal_axe.png" alt="" width="24" height="24"> **Knightmetal Axe**<br><sub><code>twilightforest:knightmetal_axe</code></sub> | `epicfight_dd:steel_axe` | +3 | +0.2 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/knightmetal_sword.png" alt="" width="24" height="24"> **Knightmetal Sword**<br><sub><code>twilightforest:knightmetal_sword</code></sub> | `womplus:hollow_longsword` | +3 | +0.26 | +42 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/seeker_bow.png" alt="" width="24" height="24"> **Seeker Bow**<br><sub><code>twilightforest:seeker_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/steeleaf_axe.png" alt="" width="24" height="24"> **Steeleaf Axe**<br><sub><code>twilightforest:steeleaf_axe</code></sub> | `womplus:greataxe` | +3 | +0.2 | +30 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/steeleaf_sword.png" alt="" width="24" height="24"> **Steeleaf Sword**<br><sub><code>twilightforest:steeleaf_sword</code></sub> | `epicfight_dd:milady` | +3 | +0.18 | +19 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/triple_bow.png" alt="" width="24" height="24"> **Triple Bow**<br><sub><code>twilightforest:triple_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |

<a id="weapons-combat-wom"></a>
### Weapons of Miracles
13 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/wom/agony.png" alt="" width="24" height="24"> **Agony**<br><sub><code>wom:agony</code></sub><br><sub>Provisionally retained</sub> | `wom:agony` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/wom/diamond_greataxe.png" alt="" width="24" height="24"> **Diamond Greataxe**<br><sub><code>wom:diamond_greataxe</code></sub> | `womplus:greataxe` | +4 | +0.24 | +50 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/diamond_staff.png" alt="" width="24" height="24"> **Diamond staff**<br><sub><code>wom:diamond_staff</code></sub> | `wom:staff` | +3 | +0.2 | +19 … +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/golden_greataxe.png" alt="" width="24" height="24"> **Golden Greataxe**<br><sub><code>wom:golden_greataxe</code></sub> | `womplus:greataxe` | +2.5 | +0.2 | +39 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/golden_staff.png" alt="" width="24" height="24"> **Golden staff **<br><sub><code>wom:golden_staff</code></sub> | `wom:staff` | +1.5 | +0.16 | +13 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/iron_greataxe.png" alt="" width="24" height="24"> **Iron Greataxe**<br><sub><code>wom:iron_greataxe</code></sub> | `womplus:greataxe` | +3 | +0.22 | +43 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/iron_staff.png" alt="" width="24" height="24"> **Iron staff**<br><sub><code>wom:iron_staff</code></sub> | `wom:staff` | +2 | +0.18 | +16 … +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/netherite_greataxe.png" alt="" width="24" height="24"> **Netherite Greataxe**<br><sub><code>wom:netherite_greataxe</code></sub> | `womplus:greataxe` | +5 | +0.26 | +60 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/netherite_staff.png" alt="" width="24" height="24"> **Netherite staff**<br><sub><code>wom:netherite_staff</code></sub> | `wom:staff` | +4 | +0.22 | +22 … +32 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/nova.png" alt="" width="24" height="24"> **Nova**<br><sub><code>wom:nova</code></sub> | `womplus:nova` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/wom/ruine.png" alt="" width="24" height="24"> **Ruine**<br><sub><code>wom:ruine</code></sub><br><sub>Provisionally retained</sub> | `wom:ruine` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/wom/stone_staff.png" alt="" width="24" height="24"> **Stone staff**<br><sub><code>wom:stone_staff</code></sub> | `wom:staff` | +1.5 | +0.16 | +13 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/wooden_staff.png" alt="" width="24" height="24"> **Wooden staff**<br><sub><code>wom:wooden_staff</code></sub> | `wom:staff` | +1 | +0.14 … +0.15 | +10 pp |

<a id="weapons-combat-wildernature"></a>
### WilderNature
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/wildernature/blunderbuss.png" alt="" width="24" height="24"> **Blunderbuss**<br><sub><code>wildernature:blunderbuss</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |

<a id="weapons-combat-witchery"></a>
### Witchery
4 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/witchery/arthana.png" alt="" width="24" height="24"> **Arthana**<br><sub><code>witchery:arthana</code></sub> | `epicfight_dd:blood_ritus_dagger` | +5 | +0.35 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/witchery/cane_sword.png" alt="" width="24" height="24"> **Cane Sword**<br><sub><code>witchery:cane_sword</code></sub> | `epicfight_dd:messer` | +5 | +0.22 | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/witchery/death_sickle.png" alt="" width="24" height="24"> **Death Sickle**<br><sub><code>witchery:death_sickle</code></sub> | `epicfight_dd:war_sickle` | +5 | +0.25 | +45 pp |
| **Huntsman Spear**<br><sub><code>witchery:huntsman_spear</code></sub> | `wom:agony` | +5 | +0.25 | +45 pp |

## Shields

<details>
<summary>Open all shield mappings</summary>

<a id="weapons-shields-alexscaves"></a>
### Alex’s Caves
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Resistor Shield**<br><sub><code>alexscaves:resistor_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |

<a id="weapons-shields-ars_nouveau"></a>
### Ars Nouveau
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Enchanters Shield**<br><sub><code>ars_nouveau:enchanters_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |

<a id="weapons-shields-block_factorys_bosses"></a>
### Bosses’Rise
2 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/block_factorys_bosses/dragon_guard_shield.png" alt="" width="24" height="24"> **Dragon Guard Shield**<br><sub><code>block_factorys_bosses:dragon_guard_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/block_factorys_bosses/enhanced_shield.png" alt="" width="24" height="24"> **Enhanced Shield**<br><sub><code>block_factorys_bosses:enhanced_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |

<a id="weapons-shields-cataclysm"></a>
### Cataclysm
3 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Azure Sea Shield**<br><sub><code>cataclysm:azure_sea_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| **Black Steel Targe**<br><sub><code>cataclysm:black_steel_targe</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| **Bulwark Of The Flame**<br><sub><code>cataclysm:bulwark_of_the_flame</code></sub> | `epicfight:shield` | Preset | Preset | Preset |

<a id="weapons-shields-enderscape"></a>
### Enderscape
4 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/enderscape/end_stone_rubble_shield.png" alt="" width="24" height="24"> **End Stone Rubble Shield**<br><sub><code>enderscape:end_stone_rubble_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/enderscape/kurodite_rubble_shield.png" alt="" width="24" height="24"> **Kurodite Rubble Shield**<br><sub><code>enderscape:kurodite_rubble_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/enderscape/mirestone_rubble_shield.png" alt="" width="24" height="24"> **Mirestone Rubble Shield**<br><sub><code>enderscape:mirestone_rubble_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/enderscape/veradite_rubble_shield.png" alt="" width="24" height="24"> **Veradite Rubble Shield**<br><sub><code>enderscape:veradite_rubble_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |

<a id="weapons-shields-legendary_monsters"></a>
### Legendary Monsters
5 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/buckler_of_annihilation.png" alt="" width="24" height="24"> **Buckler Of Annihilation**<br><sub><code>legendary_monsters:buckler_of_annihilation</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/dinosaur_bone_shield.png" alt="" width="24" height="24"> **Dinosaur Bone Shield**<br><sub><code>legendary_monsters:dinosaur_bone_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/frostbitten_shield.png" alt="" width="24" height="24"> **Frostbitten Shield**<br><sub><code>legendary_monsters:frostbitten_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/shulker_shield.png" alt="" width="24" height="24"> **Shulker Shield**<br><sub><code>legendary_monsters:shulker_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/spiky_shield.png" alt="" width="24" height="24"> **Spiky Shield**<br><sub><code>legendary_monsters:spiky_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |

<a id="weapons-shields-minecraft"></a>
### Minecraft / Vanilla Backport
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Shield**<br><sub><code>minecraft:shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |

<a id="weapons-shields-thaumaturgetinker"></a>
### Thaumaturge Tinker
2 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/thaumaturgetinker/ichor_shield_gem.png" alt="" width="24" height="24"> **Awakened Ichorium Shield**<br><sub><code>thaumaturgetinker:ichor_shield_gem</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/thaumaturgetinker/ichor_shield.png" alt="" width="24" height="24"> **Ichorium Shield**<br><sub><code>thaumaturgetinker:ichor_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |

<a id="weapons-shields-twilightforest"></a>
### The Twilight Forest
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Knightmetal Shield**<br><sub><code>twilightforest:knightmetal_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |

</details>

## Mapped tools and utilities

These entries are included for capability coverage; they are not counted as combat weapons.

<details>
<summary>Open tools and utility mappings</summary>

<a id="weapons-tools-alexscaves"></a>
### Alex’s Caves
3 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Galena Gauntlet**<br><sub><code>alexscaves:galena_gauntlet</code></sub> | `epicfight:fist` | Preset | Preset | +5 pp |
| <img src="../handbook-source/current/assets/weapons/icons/alexscaves/sea_staff.png" alt="" width="24" height="24"> **Sea Staff**<br><sub><code>alexscaves:sea_staff</code></sub> | **Unverified** | Unverified | Unverified | Unverified |
| <img src="../handbook-source/current/assets/weapons/icons/alexscaves/sugar_staff.png" alt="" width="24" height="24"> **Sugar Staff**<br><sub><code>alexscaves:sugar_staff</code></sub> | **Unverified** | Unverified | Unverified | Unverified |

<a id="weapons-tools-ae2"></a>
### Applied Energistics 2
9 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/certus_quartz_hoe.png" alt="" width="24" height="24"> **Certus Quartz Hoe**<br><sub><code>ae2:certus_quartz_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/certus_quartz_pickaxe.png" alt="" width="24" height="24"> **Certus Quartz Pickaxe**<br><sub><code>ae2:certus_quartz_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/certus_quartz_shovel.png" alt="" width="24" height="24"> **Certus Quartz Shovel**<br><sub><code>ae2:certus_quartz_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/fluix_hoe.png" alt="" width="24" height="24"> **Fluix Hoe**<br><sub><code>ae2:fluix_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/fluix_pickaxe.png" alt="" width="24" height="24"> **Fluix Pickaxe**<br><sub><code>ae2:fluix_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/fluix_shovel.png" alt="" width="24" height="24"> **Fluix Shovel**<br><sub><code>ae2:fluix_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/nether_quartz_hoe.png" alt="" width="24" height="24"> **Nether Quartz Hoe**<br><sub><code>ae2:nether_quartz_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/nether_quartz_pickaxe.png" alt="" width="24" height="24"> **Nether Quartz Pickaxe**<br><sub><code>ae2:nether_quartz_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/ae2/nether_quartz_shovel.png" alt="" width="24" height="24"> **Nether Quartz Shovel**<br><sub><code>ae2:nether_quartz_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-ars_nouveau"></a>
### Ars Nouveau
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Enchanters Gauntlet**<br><sub><code>ars_nouveau:enchanters_gauntlet</code></sub> | `epicfight:fist` | Preset | Preset | +5 pp |

<a id="weapons-tools-cataclysm"></a>
### Cataclysm
3 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/cataclysm/black_steel_hoe.png" alt="" width="24" height="24"> **Black Steel Hoe**<br><sub><code>cataclysm:black_steel_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/cataclysm/black_steel_pickaxe.png" alt="" width="24" height="24"> **Black Steel Pickaxe**<br><sub><code>cataclysm:black_steel_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/cataclysm/black_steel_shovel.png" alt="" width="24" height="24"> **Black Steel Shovel**<br><sub><code>cataclysm:black_steel_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-create"></a>
### Create
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/create/wrench.png" alt="" width="24" height="24"> **Wrench**<br><sub><code>create:wrench</code></sub> | `epicfight:sword` | Preset | Preset | +0 pp |

<a id="weapons-tools-createdieselgenerators"></a>
### Create: Diesel Generators
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/createdieselgenerators/hammer.png" alt="" width="24" height="24"> **Hammer**<br><sub><code>createdieselgenerators:hammer</code></sub> | `epicfight:axe` | Preset | Preset | +12 pp |

<a id="weapons-tools-deep_aether"></a>
### Deep Aether
6 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/deep_aether/skyjade_hoe.png" alt="" width="24" height="24"> **Skyjade Hoe**<br><sub><code>deep_aether:skyjade_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deep_aether/skyjade_pickaxe.png" alt="" width="24" height="24"> **Skyjade Pickaxe**<br><sub><code>deep_aether:skyjade_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deep_aether/skyjade_shovel.png" alt="" width="24" height="24"> **Skyjade Shovel**<br><sub><code>deep_aether:skyjade_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deep_aether/stratus_hoe.png" alt="" width="24" height="24"> **Stratus Hoe**<br><sub><code>deep_aether:stratus_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deep_aether/stratus_pickaxe.png" alt="" width="24" height="24"> **Stratus Pickaxe**<br><sub><code>deep_aether:stratus_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deep_aether/stratus_shovel.png" alt="" width="24" height="24"> **Stratus Shovel**<br><sub><code>deep_aether:stratus_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-deeperdarker"></a>
### Deeper and Darker
6 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/deeperdarker/resonarium_hoe.png" alt="" width="24" height="24"> **Resonarium Hoe**<br><sub><code>deeperdarker:resonarium_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deeperdarker/resonarium_pickaxe.png" alt="" width="24" height="24"> **Resonarium Pickaxe**<br><sub><code>deeperdarker:resonarium_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deeperdarker/resonarium_shovel.png" alt="" width="24" height="24"> **Resonarium Shovel**<br><sub><code>deeperdarker:resonarium_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deeperdarker/warden_hoe.png" alt="" width="24" height="24"> **Warden Hoe**<br><sub><code>deeperdarker:warden_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deeperdarker/warden_pickaxe.png" alt="" width="24" height="24"> **Warden Pickaxe**<br><sub><code>deeperdarker:warden_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/deeperdarker/warden_shovel.png" alt="" width="24" height="24"> **Warden Shovel**<br><sub><code>deeperdarker:warden_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-hybrid_aquatic"></a>
### Hybrid Aquatic
6 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/hybrid_aquatic/coral_hoe.png" alt="" width="24" height="24"> **Coral Hoe**<br><sub><code>hybrid_aquatic:coral_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/hybrid_aquatic/coral_pickaxe.png" alt="" width="24" height="24"> **Coral Pickaxe**<br><sub><code>hybrid_aquatic:coral_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/hybrid_aquatic/coral_shovel.png" alt="" width="24" height="24"> **Coral Shovel**<br><sub><code>hybrid_aquatic:coral_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/hybrid_aquatic/seashell_hoe.png" alt="" width="24" height="24"> **Seashell Hoe**<br><sub><code>hybrid_aquatic:seashell_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/hybrid_aquatic/seashell_pickaxe.png" alt="" width="24" height="24"> **Seashell Pickaxe**<br><sub><code>hybrid_aquatic:seashell_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/hybrid_aquatic/seashell_shovel.png" alt="" width="24" height="24"> **Seashell Shovel**<br><sub><code>hybrid_aquatic:seashell_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-immersiveengineering"></a>
### Immersive Engineering
3 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/immersiveengineering/hoe_steel.png" alt="" width="24" height="24"> **Hoe Steel**<br><sub><code>immersiveengineering:hoe_steel</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/immersiveengineering/pickaxe_steel.png" alt="" width="24" height="24"> **Pickaxe Steel**<br><sub><code>immersiveengineering:pickaxe_steel</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/immersiveengineering/shovel_steel.png" alt="" width="24" height="24"> **Shovel Steel**<br><sub><code>immersiveengineering:shovel_steel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-legendary_monsters"></a>
### Legendary Monsters
4 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/enderitium_hoe.png" alt="" width="24" height="24"> **Enderitium Hoe**<br><sub><code>legendary_monsters:enderitium_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/enderitium_pickaxe.png" alt="" width="24" height="24"> **Enderitium Pickaxe**<br><sub><code>legendary_monsters:enderitium_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/enderitium_shovel.png" alt="" width="24" height="24"> **Enderitium Shovel**<br><sub><code>legendary_monsters:enderitium_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/legendary_monsters/somber_key.png" alt="" width="24" height="24"> **Somber Key**<br><sub><code>legendary_monsters:somber_key</code></sub> | `epicfight:sword` | Preset | Preset | +3 pp |

<a id="weapons-tools-bakery"></a>
### Let’s Do: Bakery
2 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/bakery/rolling_pin.png" alt="" width="24" height="24"> **Rolling Pin**<br><sub><code>bakery:rolling_pin</code></sub> | `epicfight:sword` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/bakery/small_cooking_pot.png" alt="" width="24" height="24"> **Small Cooking Pot**<br><sub><code>bakery:small_cooking_pot</code></sub> | `epicfight:greatsword` | Preset | Preset | +15 pp |

<a id="weapons-tools-minecraft"></a>
### Minecraft / Vanilla Backport
19 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/copper_pickaxe.png" alt="" width="24" height="24"> **Copper Pickaxe**<br><sub><code>minecraft:copper_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/diamond_hoe.png" alt="" width="24" height="24"> **Diamond Hoe**<br><sub><code>minecraft:diamond_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/diamond_pickaxe.png" alt="" width="24" height="24"> **Diamond Pickaxe**<br><sub><code>minecraft:diamond_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +18 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/diamond_shovel.png" alt="" width="24" height="24"> **Diamond Shovel**<br><sub><code>minecraft:diamond_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/golden_hoe.png" alt="" width="24" height="24"> **Golden Hoe**<br><sub><code>minecraft:golden_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/golden_pickaxe.png" alt="" width="24" height="24"> **Golden Pickaxe**<br><sub><code>minecraft:golden_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/golden_shovel.png" alt="" width="24" height="24"> **Golden Shovel**<br><sub><code>minecraft:golden_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/iron_hoe.png" alt="" width="24" height="24"> **Iron Hoe**<br><sub><code>minecraft:iron_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/iron_pickaxe.png" alt="" width="24" height="24"> **Iron Pickaxe**<br><sub><code>minecraft:iron_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +12 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/iron_shovel.png" alt="" width="24" height="24"> **Iron Shovel**<br><sub><code>minecraft:iron_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/netherite_hoe.png" alt="" width="24" height="24"> **Netherite Hoe**<br><sub><code>minecraft:netherite_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +10 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/netherite_pickaxe.png" alt="" width="24" height="24"> **Netherite Pickaxe**<br><sub><code>minecraft:netherite_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +24 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/netherite_shovel.png" alt="" width="24" height="24"> **Netherite Shovel**<br><sub><code>minecraft:netherite_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +10 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/stone_hoe.png" alt="" width="24" height="24"> **Stone Hoe**<br><sub><code>minecraft:stone_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/stone_pickaxe.png" alt="" width="24" height="24"> **Stone Pickaxe**<br><sub><code>minecraft:stone_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +6 pp |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/stone_shovel.png" alt="" width="24" height="24"> **Stone Shovel**<br><sub><code>minecraft:stone_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/wooden_hoe.png" alt="" width="24" height="24"> **Wooden Hoe**<br><sub><code>minecraft:wooden_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/wooden_pickaxe.png" alt="" width="24" height="24"> **Wooden Pickaxe**<br><sub><code>minecraft:wooden_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/minecraft/wooden_shovel.png" alt="" width="24" height="24"> **Wooden Shovel**<br><sub><code>minecraft:wooden_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |

<a id="weapons-tools-supplementaries"></a>
### Supplementaries
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/supplementaries/wrench.png" alt="" width="24" height="24"> **Wrench**<br><sub><code>supplementaries:wrench</code></sub> | `epicfight:sword` | Preset | Preset | +0 pp |

<a id="weapons-tools-thaumaturgetinker"></a>
### Thaumaturge Tinker
4 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/thaumaturgetinker/ichor_pick_gem.png" alt="" width="24" height="24"> **Awakened Ichorium Pickaxe**<br><sub><code>thaumaturgetinker:ichor_pick_gem</code></sub> | `epicfight:pickaxe` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/thaumaturgetinker/ichor_shovel_gem.png" alt="" width="24" height="24"> **Awakened Ichorium Shovel**<br><sub><code>thaumaturgetinker:ichor_shovel_gem</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/thaumaturgetinker/ichor_pick.png" alt="" width="24" height="24"> **Ichorium Pickaxe**<br><sub><code>thaumaturgetinker:ichor_pick</code></sub> | `epicfight:pickaxe` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/thaumaturgetinker/ichor_shovel.png" alt="" width="24" height="24"> **Ichorium Shovel**<br><sub><code>thaumaturgetinker:ichor_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |

<a id="weapons-tools-aether"></a>
### The Aether
15 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/aether/gravitite_hoe.png" alt="" width="24" height="24"> **Gravitite Hoe**<br><sub><code>aether:gravitite_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/gravitite_pickaxe.png" alt="" width="24" height="24"> **Gravitite Pickaxe**<br><sub><code>aether:gravitite_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/gravitite_shovel.png" alt="" width="24" height="24"> **Gravitite Shovel**<br><sub><code>aether:gravitite_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/holystone_hoe.png" alt="" width="24" height="24"> **Holystone Hoe**<br><sub><code>aether:holystone_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/holystone_pickaxe.png" alt="" width="24" height="24"> **Holystone Pickaxe**<br><sub><code>aether:holystone_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/holystone_shovel.png" alt="" width="24" height="24"> **Holystone Shovel**<br><sub><code>aether:holystone_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/skyroot_hoe.png" alt="" width="24" height="24"> **Skyroot Hoe**<br><sub><code>aether:skyroot_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/skyroot_pickaxe.png" alt="" width="24" height="24"> **Skyroot Pickaxe**<br><sub><code>aether:skyroot_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/skyroot_shovel.png" alt="" width="24" height="24"> **Skyroot Shovel**<br><sub><code>aether:skyroot_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/valkyrie_hoe.png" alt="" width="24" height="24"> **Valkyrie Hoe**<br><sub><code>aether:valkyrie_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/valkyrie_pickaxe.png" alt="" width="24" height="24"> **Valkyrie Pickaxe**<br><sub><code>aether:valkyrie_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/valkyrie_shovel.png" alt="" width="24" height="24"> **Valkyrie Shovel**<br><sub><code>aether:valkyrie_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/zanite_hoe.png" alt="" width="24" height="24"> **Zanite Hoe**<br><sub><code>aether:zanite_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/zanite_pickaxe.png" alt="" width="24" height="24"> **Zanite Pickaxe**<br><sub><code>aether:zanite_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/aether/zanite_shovel.png" alt="" width="24" height="24"> **Zanite Shovel**<br><sub><code>aether:zanite_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-the_beyond"></a>
### The Beyond
3 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/the_beyond/brittle_hoe.png" alt="" width="24" height="24"> **Brittle Hoe**<br><sub><code>the_beyond:brittle_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/the_beyond/brittle_pickaxe.png" alt="" width="24" height="24"> **Brittle Pickaxe**<br><sub><code>the_beyond:brittle_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/the_beyond/brittle_shovel.png" alt="" width="24" height="24"> **Brittle Shovel**<br><sub><code>the_beyond:brittle_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |

<a id="weapons-tools-twilightforest"></a>
### The Twilight Forest
10 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/fiery_pickaxe.png" alt="" width="24" height="24"> **Fiery Pickaxe**<br><sub><code>twilightforest:fiery_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Giant Pickaxe**<br><sub><code>twilightforest:giant_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/ironwood_hoe.png" alt="" width="24" height="24"> **Ironwood Hoe**<br><sub><code>twilightforest:ironwood_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/ironwood_pickaxe.png" alt="" width="24" height="24"> **Ironwood Pickaxe**<br><sub><code>twilightforest:ironwood_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/ironwood_shovel.png" alt="" width="24" height="24"> **Ironwood Shovel**<br><sub><code>twilightforest:ironwood_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/knightmetal_pickaxe.png" alt="" width="24" height="24"> **Knightmetal Pickaxe**<br><sub><code>twilightforest:knightmetal_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/mazebreaker_pickaxe.png" alt="" width="24" height="24"> **Mazebreaker Pickaxe**<br><sub><code>twilightforest:mazebreaker_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/steeleaf_hoe.png" alt="" width="24" height="24"> **Steeleaf Hoe**<br><sub><code>twilightforest:steeleaf_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/steeleaf_pickaxe.png" alt="" width="24" height="24"> **Steeleaf Pickaxe**<br><sub><code>twilightforest:steeleaf_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| <img src="../handbook-source/current/assets/weapons/icons/twilightforest/steeleaf_shovel.png" alt="" width="24" height="24"> **Steeleaf Shovel**<br><sub><code>twilightforest:steeleaf_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-witchery"></a>
### Witchery
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/witchery/koboldite_pickaxe.png" alt="" width="24" height="24"> **Koboldite Pickaxe**<br><sub><code>witchery:koboldite_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |

</details>

## Excluded WoM weapons

**Retained:** six staffs, four greataxes and Nova. **Provisionally retained:** Agony and Ruine.

The following original items are excluded from recipes, loot and recipe viewers. Their native capability definitions can still be reused as movesets by other weapons. Their entries here do not enable the items.

<a id="weapons-excluded-wom"></a>
### Weapons of Miracles
14 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| <img src="../handbook-source/current/assets/weapons/icons/wom/antitheus.png" alt="" width="24" height="24"> **Antitheus**<br><sub><code>wom:antitheus</code></sub> | `wom:antitheus` | Preset | Preset | +20 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/blackstar.png" alt="" width="24" height="24"> **Blackstar**<br><sub><code>wom:blackstar</code></sub> | `womplus:blackstar` | Preset | Preset | +25 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/jabberwocky.png" alt="" width="24" height="24"> **Clawed Gauntle**<br><sub><code>wom:jabberwocky</code></sub> | `wom:clawed_gauntle` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/wom/ender_blaster.png" alt="" width="24" height="24"> **Ender blaster**<br><sub><code>wom:ender_blaster</code></sub> | `wom:ender_blaster` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/wom/evil_tachi.png" alt="" width="24" height="24"> **Evil Ôdachi**<br><sub><code>wom:evil_tachi</code></sub> | `womplus:evil_tachi_reift` | Preset | Preset | +10 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/gesetz.png" alt="" width="24" height="24"> **Gesetz**<br><sub><code>wom:gesetz</code></sub> | `wom:gesetz` | Preset | Preset | +20 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/herrscher.png" alt="" width="24" height="24"> **Herrscher**<br><sub><code>wom:herrscher</code></sub> | `wom:herrscher` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/wom/hollow_longsword.png" alt="" width="24" height="24"> **Hollow Longsword**<br><sub><code>wom:hollow_longsword</code></sub> | `womplus:hollow_longsword` | +3 | +0.15 | +20 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/moonless.png" alt="" width="24" height="24"> **Moonless**<br><sub><code>wom:moonless</code></sub> | `wom:moonless` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/wom/napoleon.png" alt="" width="24" height="24"> **Napoleon**<br><sub><code>wom:napoleon</code></sub> | `wom:napoleon` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/wom/orbit.png" alt="" width="24" height="24"> **Orbit**<br><sub><code>wom:orbit</code></sub> | `wom:orbit` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/wom/satsujin.png" alt="" width="24" height="24"> **Satsujin**<br><sub><code>wom:satsujin</code></sub> | `wom:satsujin` | Preset | Preset | Preset |
| <img src="../handbook-source/current/assets/weapons/icons/wom/solar.png" alt="" width="24" height="24"> **Solar**<br><sub><code>wom:solar</code></sub> | `wom:solar` | Preset | Preset | +20 pp |
| <img src="../handbook-source/current/assets/weapons/icons/wom/tormented_mind.png" alt="" width="24" height="24"> **Torment**<br><sub><code>wom:tormented_mind</code></sub> | `wom:torment` | Preset | Preset | +50 pp |

## Snapshot and coverage

Updated 2026-11-18. Source: `TNK3_CB_1.1.2_Native_Combat.zip`.
Archive SHA-256: `93612dbc6b48f8fd1133c9dbb01e799c8f19ba70b899dd24cbad09268dac3f97`.

The inventory contains 633 explicit item mappings: 568 pack overrides and 65 additional mappings from the installed combat JARs. A further 10 native class/keyword mappings are verified, and 3 registered items are listed with unverified combat styles. No type or stats are invented for those entries. Knaves’ Needs includes only the pack’s confirmed Twilight Forest weapons. This is a dated static reference, not a live registry dump. Listing an item is not a guarantee of a crafting or loot route.

Installed combat versions: Epic Fight 21.17.3.1, Weapons of Miracles 2.0.178, WoM Plus 21.17-1.0.1, Dawn Day 21.17.1.2.1.

WoM Plus’s optional `wom_override` pack is enabled in the supplied server reference. Its three conditional native assignments are recorded in the CSV/JSON. Other field-guide chapters still describe Beta 1.0.

This is documentation only: no weapon capabilities, scripts, stats, recipes or progression files are changed by this overview.

[Artwork credits](../handbook-source/current/assets/weapons/ASSET_CREDITS.md)
