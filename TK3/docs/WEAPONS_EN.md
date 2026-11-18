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
| **Desolate Dagger**<br><sub><code>alexscaves:desolate_dagger</code></sub> | `epicfight_dd:backhand_blade` | +5 | +0.35 | +25 pp |
| **Dreadbow**<br><sub><code>alexscaves:dreadbow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Extinction Spear**<br><sub><code>alexscaves:extinction_spear</code></sub> | `epicfight:trident` | +5 | +0.25 | +45 pp |
| **Frostmint Spear**<br><sub><code>alexscaves:frostmint_spear</code></sub> | `epicfight:trident` | +5 | +0.25 | +45 pp |
| **Limestone Spear**<br><sub><code>alexscaves:limestone_spear</code></sub> | `epicfight:trident` | +5 | +0.25 | +45 pp |
| **Ortholance**<br><sub><code>alexscaves:ortholance</code></sub> | `epicfight:trident` | +5 | +0.25 | +45 pp |
| **Primitive Club**<br><sub><code>alexscaves:primitive_club</code></sub> | `epicfight_dd:nailbat` | +5 | +0.24 | +60 pp |
| **Raygun**<br><sub><code>alexscaves:raygun</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Sharpened Candy Cane**<br><sub><code>alexscaves:sharpened_candy_cane</code></sub> | `epicfight_dd:herb_sickle` | +5 | +0.22 | +25 pp |

<a id="weapons-combat-ae2"></a>
### Applied Energistics 2
6 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Certus Quartz Axe**<br><sub><code>ae2:certus_quartz_axe</code></sub> | `epicfight:axe` | +2 | +0.18 | +26 pp |
| **Certus Quartz Sword**<br><sub><code>ae2:certus_quartz_sword</code></sub> | `epicfight_dd:messer` | +2 | +0.16 | +16 pp |
| **Fluix Axe**<br><sub><code>ae2:fluix_axe</code></sub> | `womplus:greataxe` | +3 | +0.2 | +30 pp |
| **Fluix Sword**<br><sub><code>ae2:fluix_sword</code></sub> | `epicfight_dd:milady` | +3 | +0.18 | +19 pp |
| **Nether Quartz Axe**<br><sub><code>ae2:nether_quartz_axe</code></sub> | `epicfight:axe` | +2 | +0.18 | +26 pp |
| **Nether Quartz Sword**<br><sub><code>ae2:nether_quartz_sword</code></sub> | `epicfight_dd:light_greatsword` | +2 | +0.16 | +16 pp |

<a id="weapons-combat-archaion"></a>
### Archaion
2 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Echo Mace**<br><sub><code>archaion:echo_mace</code></sub> | `epicfight_dd:nailbat` | +5 | +0.24 | +60 pp |
| **Echos Grace**<br><sub><code>archaion:echos_grace</code></sub> | `epicfight:bow` | Preset | Preset | Preset |

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
| **Dagger**<br><sub><code>block_factorys_bosses:dagger</code></sub> | `epicfight_dd:backhand_blade` | +6 | +0.37 | +28 pp |
| **Knight Sword**<br><sub><code>block_factorys_bosses:knight_sword</code></sub> | `epicfight_dd:milady` | +6 | +0.27 | +33 pp |
| **Kraken Trident**<br><sub><code>block_factorys_bosses:kraken_trident</code></sub> | `epicfight:trident` | +6 | +0.27 | +49 pp |
| **Large Sword**<br><sub><code>block_factorys_bosses:large_sword</code></sub> | `epicfight_dd:eclipse` | +6 | +0.32 | +54 pp |
| **Pirate Saber**<br><sub><code>block_factorys_bosses:pirate_saber</code></sub> | `epicfight_dd:saber` | +6 | +0.3 | +30 pp |
| **Warrior Sword**<br><sub><code>block_factorys_bosses:warrior_sword</code></sub> | `epicfight_dd:messer` | +6 | +0.24 | +28 pp |

<a id="weapons-combat-cataclysm"></a>
### Cataclysm
26 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Ancient Spear**<br><sub><code>cataclysm:ancient_spear</code></sub> | `wom:orbit` | +6 | +0.27 | +49 pp |
| **Astrape**<br><sub><code>cataclysm:astrape</code></sub> | `wom:agony` | +6 | +0.27 | +49 pp |
| **Athame**<br><sub><code>cataclysm:athame</code></sub> | `epicfight_dd:night_ritus_dagger` | +6 | +0.37 | +28 pp |
| **Black Steel Axe**<br><sub><code>cataclysm:black_steel_axe</code></sub> | `epicfight_dd:steel_axe` | +3 | +0.2 | +30 pp |
| **Black Steel Sword**<br><sub><code>cataclysm:black_steel_sword</code></sub> | `epicfight_dd:messer` | +3 | +0.18 | +19 pp |
| **Brontes**<br><sub><code>cataclysm:brontes</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.26 | +64 pp |
| **Ceraunus**<br><sub><code>cataclysm:ceraunus</code></sub> | `womplus:greataxe` | +6 | +0.3 | +59 pp |
| **Coral Bardiche**<br><sub><code>cataclysm:coral_bardiche</code></sub> | `epicfight_dd:halberd` | +6 | +0.27 | +49 pp |
| **Coral Spear**<br><sub><code>cataclysm:coral_spear</code></sub> | `epicfight:trident` | +6 | +0.27 | +49 pp |
| **Cursed Bow**<br><sub><code>cataclysm:cursed_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Gauntlet Of Bulwark**<br><sub><code>cataclysm:gauntlet_of_bulwark</code></sub> | `epicfight_dd:iron_fist` | +6 | +0.32 | +28 pp |
| **Gauntlet Of Guard**<br><sub><code>cataclysm:gauntlet_of_guard</code></sub> | `epicfight_dd:iron_fist` | +6 | +0.32 | +28 pp |
| **Gauntlet Of Maelstrom**<br><sub><code>cataclysm:gauntlet_of_maelstrom</code></sub> | `epicfight_dd:iron_fist` | +6 | +0.32 | +28 pp |
| **Infernal Forge**<br><sub><code>cataclysm:infernal_forge</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.26 | +64 pp |
| **Khopesh**<br><sub><code>cataclysm:khopesh</code></sub> | `epicfight_dd:saber` | +6 | +0.3 | +30 pp |
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
| **Bloom Stone Staff**<br><sub><code>cataclysm_spellbooks:bloom_stone_staff</code></sub> | `epicfight_dd:battlestaff_wood` | +6 | +0.26 | +28 pp |
| **Coral Staff**<br><sub><code>cataclysm_spellbooks:coral_staff</code></sub> | `epicfight_dd:battlestaff` | +6 | +0.26 | +28 pp |
| **Fake Wudjets Staff**<br><sub><code>cataclysm_spellbooks:fake_wudjets_staff</code></sub> | `epicfight_dd:battlestaff_amethyst` | +6 | +0.26 | +28 pp |
| **Hellfire Forge**<br><sub><code>cataclysm_spellbooks:hellfire_forge</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.26 | +64 pp |
| **Monstrous Flamberge**<br><sub><code>cataclysm_spellbooks:monstrous_flamberge</code></sub> | `wom:ruine` | +6 | +0.27 | +33 pp |
| **Soul Brazier**<br><sub><code>cataclysm_spellbooks:soul_brazier</code></sub> | `epicfight_dd:battlestaff_amethyst` | +6 | +0.26 | +28 pp |
| **Spirit Sunderer**<br><sub><code>cataclysm_spellbooks:spirit_sunderer</code></sub> | `wom:staff` | +6 | +0.26 | +28 pp |
| **Void Staff**<br><sub><code>cataclysm_spellbooks:void_staff</code></sub> | `epicfight_dd:battlestaff_amethyst` | +6 | +0.26 | +28 pp |

<a id="weapons-combat-celestisynth"></a>
### Celestisynth
8 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Aquaflora**<br><sub><code>celestisynth:aquaflora</code></sub> | `epicfight_dd:milady` | +6 | +0.24 | +28 pp |
| **Breezebreaker**<br><sub><code>celestisynth:breezebreaker</code></sub> | `epicfight_dd:florett` | +6 | +0.3 | +30 pp |
| **Crescentia**<br><sub><code>celestisynth:crescentia</code></sub> | `epicfight_dd:war_sickle` | +5 | +0.24 | +40 pp |
| **Frostbound**<br><sub><code>celestisynth:frostbound</code></sub> | `epicfight_dd:war_sickle` | +6 | +0.26 | +28 pp |
| **Keres**<br><sub><code>celestisynth:keres</code></sub> | `epicfight_dd:pole_blade` | +6 | +0.27 | +49 pp |
| **Poltergeist**<br><sub><code>celestisynth:poltergeist</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.3 | +59 pp |
| **Rainfall Serenity**<br><sub><code>celestisynth:rainfall_serenity</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Solaris**<br><sub><code>celestisynth:solaris</code></sub> | `epicfight_dd:messer` | +6 | +0.37 | +28 pp |

<a id="weapons-combat-create"></a>
### Create
2 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Cardboard Sword**<br><sub><code>create:cardboard_sword</code></sub> | `epicfight:sword` | +1 | +0.12 | +10 pp |
| **Potato Cannon**<br><sub><code>create:potato_cannon</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |

<a id="weapons-combat-createdieselgenerators"></a>
### Create: Diesel Generators
2 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Chemical Sprayer**<br><sub><code>createdieselgenerators:chemical_sprayer</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| **Chemical Sprayer Lighter**<br><sub><code>createdieselgenerators:chemical_sprayer_lighter</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |

<a id="weapons-combat-deep_aether"></a>
### Deep Aether
7 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Blade Of Luck**<br><sub><code>deep_aether:blade_of_luck</code></sub> | `epicfight_dd:milady` | +5 | +0.22 | +25 pp |
| **Skyjade Axe**<br><sub><code>deep_aether:skyjade_axe</code></sub> | `epicfight:axe` | +3 | +0.2 | +30 pp |
| **Skyjade Sword**<br><sub><code>deep_aether:skyjade_sword</code></sub> | `epicfight_dd:messer` | +3 | +0.18 | +19 pp |
| **Storm Bow**<br><sub><code>deep_aether:storm_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Storm Sword**<br><sub><code>deep_aether:storm_sword</code></sub> | `wom:nova` | +5 | +0.22 | +25 pp |
| **Stratus Axe**<br><sub><code>deep_aether:stratus_axe</code></sub> | `epicfight_dd:steel_axe` | +4 | +0.22 | +34 pp |
| **Stratus Sword**<br><sub><code>deep_aether:stratus_sword</code></sub> | `wom:ruine` | +4 | +0.2 | +22 pp |

<a id="weapons-combat-deeperdarker"></a>
### Deeper and Darker
4 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Resonarium Axe**<br><sub><code>deeperdarker:resonarium_axe</code></sub> | `womplus:greataxe` | +3 | +0.2 | +30 pp |
| **Resonarium Sword**<br><sub><code>deeperdarker:resonarium_sword</code></sub> | `epicfight_dd:milady` | +3 | +0.18 | +19 pp |
| **Warden Axe**<br><sub><code>deeperdarker:warden_axe</code></sub> | `epicfight_dd:steel_axe` | +4 | +0.22 | +34 pp |
| **Warden Sword**<br><sub><code>deeperdarker:warden_sword</code></sub> | `womplus:hollow_longsword` | +4 | +0.2 | +22 pp |

<a id="weapons-combat-epicfight"></a>
### Epic Fight
33 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Bokken**<br><sub><code>epicfight:bokken</code></sub> | `epicfight:bokken` | +1 | +0.1 | +5 pp |
| **Diamond Dagger**<br><sub><code>epicfight:diamond_dagger</code></sub> | `epicfight:dagger` | +3 | +0.31 | +19 … +22 pp |
| **Diamond Greatsword**<br><sub><code>epicfight:diamond_greatsword</code></sub> | `epicfight:greatsword` | +3 | +0.26 | +42 pp |
| **Diamond Longsword**<br><sub><code>epicfight:diamond_longsword</code></sub> | `epicfight:longsword` | +3 | +0.21 | +24 pp |
| **Diamond Spear**<br><sub><code>epicfight:diamond_spear</code></sub> | `epicfight:spear` | +3 | +0.21 | +37 pp |
| **Diamond Tachi**<br><sub><code>epicfight:diamond_tachi</code></sub> | `epicfight:tachi` | +3 | +0.24 | +24 pp |
| **Glove**<br><sub><code>epicfight:glove</code></sub> | `epicfight:fist` | +1.5 | +0.15 | +8 pp |
| **Golden Dagger**<br><sub><code>epicfight:golden_dagger</code></sub> | `epicfight:dagger` | +1.5 | +0.27 | +13 pp |
| **Golden Greatsword**<br><sub><code>epicfight:golden_greatsword</code></sub> | `epicfight:greatsword` | +1.5 | +0.22 | +34 pp |
| **Golden Longsword**<br><sub><code>epicfight:golden_longsword</code></sub> | `epicfight:longsword` | +1.5 | +0.2 | +18 pp |
| **Golden Spear**<br><sub><code>epicfight:golden_spear</code></sub> | `epicfight:spear` | +1.5 | +0.17 … +0.2 | +29 pp |
| **Golden Tachi**<br><sub><code>epicfight:golden_tachi</code></sub> | `epicfight:tachi` | +1.5 | +0.2 | +15 pp |
| **Iron Dagger**<br><sub><code>epicfight:iron_dagger</code></sub> | `epicfight:dagger` | +2 | +0.29 | +16 … +18 pp |
| **Iron Greatsword**<br><sub><code>epicfight:iron_greatsword</code></sub> | `epicfight:greatsword` | +2 | +0.24 | +38 pp |
| **Iron Longsword**<br><sub><code>epicfight:iron_longsword</code></sub> | `epicfight:longsword` | +2 | +0.19 | +21 pp |
| **Iron Spear**<br><sub><code>epicfight:iron_spear</code></sub> | `epicfight:spear` | +2 | +0.19 | +33 pp |
| **Iron Tachi**<br><sub><code>epicfight:iron_tachi</code></sub> | `epicfight:tachi` | +2 | +0.22 | +18 pp |
| **Netherite Dagger**<br><sub><code>epicfight:netherite_dagger</code></sub> | `epicfight:dagger` | +4 | +0.33 | +22 … +28 pp |
| **Netherite Greatsword**<br><sub><code>epicfight:netherite_greatsword</code></sub> | `epicfight:greatsword` | +4 | +0.28 | +50 pp |
| **Netherite Longsword**<br><sub><code>epicfight:netherite_longsword</code></sub> | `epicfight:longsword` | +4 | +0.23 | +30 pp |
| **Netherite Spear**<br><sub><code>epicfight:netherite_spear</code></sub> | `epicfight:spear` | +4 | +0.23 | +41 pp |
| **Netherite Tachi**<br><sub><code>epicfight:netherite_tachi</code></sub> | `epicfight:tachi` | +4 | +0.26 | +30 pp |
| **Stone Dagger**<br><sub><code>epicfight:stone_dagger</code></sub> | `epicfight:dagger` | +1.5 | +0.27 | +13 pp |
| **Stone Greatsword**<br><sub><code>epicfight:stone_greatsword</code></sub> | `epicfight:greatsword` | +1.5 | +0.22 | +34 pp |
| **Stone Longsword**<br><sub><code>epicfight:stone_longsword</code></sub> | `epicfight:longsword` | +1.5 | +0.17 | +18 pp |
| **Stone Spear**<br><sub><code>epicfight:stone_spear</code></sub> | `epicfight:spear` | +1.5 | +0.17 | +29 pp |
| **Stone Tachi**<br><sub><code>epicfight:stone_tachi</code></sub> | `epicfight:tachi` | +1.5 | +0.2 | +15 pp |
| **Uchigatana**<br><sub><code>epicfight:uchigatana</code></sub> | `epicfight:uchigatana` | +3 | +0.15 | +20 pp |
| **Wooden Dagger**<br><sub><code>epicfight:wooden_dagger</code></sub> | `epicfight:dagger` | +1 | +0.25 | +10 pp |
| **Wooden Greatsword**<br><sub><code>epicfight:wooden_greatsword</code></sub> | `epicfight:greatsword` | +1 | +0.2 | +30 pp |
| **Wooden Longsword**<br><sub><code>epicfight:wooden_longsword</code></sub> | `epicfight:longsword` | +1 | +0.15 | +15 pp |
| **Wooden Spear**<br><sub><code>epicfight:wooden_spear</code></sub> | `epicfight:spear` | +1 | +0.15 | +25 pp |
| **Wooden Tachi**<br><sub><code>epicfight:wooden_tachi</code></sub> | `epicfight:tachi` | +1 | +0.18 | +12 pp |

<a id="weapons-combat-epicfight_dd"></a>
### Epic Fight: Dawn Day
46 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Amethyst Battlestaff**<br><sub><code>epicfight_dd:amethyst_battlestaff</code></sub> | `epicfight_dd:battlestaff_amethyst` | Preset | Preset | Preset |
| **Backhand Blade**<br><sub><code>epicfight_dd:backhand_blade</code></sub> | `epicfight_dd:backhand_blade` | Preset | Preset | +33 pp |
| **Big Stick**<br><sub><code>epicfight_dd:wooden_battlestaff</code></sub> | `epicfight_dd:battlestaff_wood` | +1 | +0.14 | +10 pp |
| **Blood Ritual Dagger**<br><sub><code>epicfight_dd:blood_ritus_dagger</code></sub> | `epicfight_dd:blood_ritus_dagger` | Preset | Preset | Preset |
| **Bonecutting Saw**<br><sub><code>epicfight_dd:bonecutting_saw</code></sub> | `epicfight_dd:bonecutting_saw` | Preset | Preset | +15 pp |
| **Diamond Battlestaff**<br><sub><code>epicfight_dd:diamond_battlestaff</code></sub> | `epicfight_dd:battlestaff` | +3 | +0.2 | +22 pp |
| **Diamond Florett**<br><sub><code>epicfight_dd:diamond_florett</code></sub> | `epicfight_dd:florett` | +3 | +0.28 | +35 pp |
| **Diamond Halberd**<br><sub><code>epicfight_dd:diamond_halberd</code></sub> | `epicfight_dd:halberd` | +3 | +0.21 | +37 pp |
| **Diamond Knife**<br><sub><code>epicfight_dd:diamond_knife</code></sub> | `epicfight_dd:knife` | +3 | +0.31 | +28 pp |
| **Diamond Light Greatsword**<br><sub><code>epicfight_dd:diamond_light_greatsword</code></sub> | `epicfight_dd:light_greatsword` | +3 | +0.26 | +42 pp |
| **Diamond Messer**<br><sub><code>epicfight_dd:diamond_messer</code></sub> | `epicfight_dd:messer` | +3 | +0.15 | +25 pp |
| **Diamond Sickle**<br><sub><code>epicfight_dd:diamond_sickle</code></sub> | `epicfight_dd:herb_sickle` | +3 | +0.31 | +25 pp |
| **Eclipse**<br><sub><code>epicfight_dd:eclipse</code></sub> | `epicfight_dd:eclipse` | Preset | Preset | Preset |
| **Golden Battlestaff**<br><sub><code>epicfight_dd:golden_battlestaff</code></sub> | `epicfight_dd:battlestaff` | +1.5 | +0.25 | +20 pp |
| **Golden Florett**<br><sub><code>epicfight_dd:golden_florett</code></sub> | `epicfight_dd:florett` | +1.5 | +0.25 | +25 pp |
| **Golden Halberd**<br><sub><code>epicfight_dd:golden_halberd</code></sub> | `epicfight_dd:halberd` | +1.5 | +0.25 | +29 pp |
| **Golden Knife**<br><sub><code>epicfight_dd:golden_knife</code></sub> | `epicfight_dd:knife` | +1.5 | +0.27 | +35 pp |
| **Golden Light Greatsword**<br><sub><code>epicfight_dd:golden_light_greatsword</code></sub> | `epicfight_dd:light_greatsword` | +1.5 | +0.25 | +34 pp |
| **Golden Messer**<br><sub><code>epicfight_dd:golden_messer</code></sub> | `epicfight_dd:messer` | +1.5 | +0.25 | +15 pp |
| **Golden Sickle**<br><sub><code>epicfight_dd:golden_sickle</code></sub> | `epicfight_dd:herb_sickle` | +1.5 | +0.27 | +30 pp |
| **Hookclaws**<br><sub><code>epicfight_dd:hookclaws</code></sub> | `epicfight_dd:hookclaws` | Preset | Preset | +26 pp |
| **Iron Battlestaff**<br><sub><code>epicfight_dd:iron_battlestaff</code></sub> | `epicfight_dd:battlestaff` | +2 | +0.18 | +16 pp |
| **Iron Fist**<br><sub><code>epicfight_dd:iron_fist</code></sub> | `epicfight_dd:iron_fist` | Preset | Preset | Preset |
| **Iron Florett**<br><sub><code>epicfight_dd:iron_florett</code></sub> | `epicfight_dd:florett` | +2 | +0.26 | +28 pp |
| **Iron Halberd**<br><sub><code>epicfight_dd:iron_halberd</code></sub> | `epicfight_dd:halberd` | +2 | +0.19 | +33 pp |
| **Iron Knife**<br><sub><code>epicfight_dd:iron_knife</code></sub> | `epicfight_dd:knife` | +2 | +0.29 | +20 pp |
| **Iron Light Greatsword**<br><sub><code>epicfight_dd:iron_light_greatsword</code></sub> | `epicfight_dd:light_greatsword` | +2 | +0.24 | +38 pp |
| **Iron Messer**<br><sub><code>epicfight_dd:iron_messer</code></sub> | `epicfight_dd:messer` | +2 | +0.15 | +15 pp |
| **Iron Sickle**<br><sub><code>epicfight_dd:iron_sickle</code></sub> | `epicfight_dd:herb_sickle` | +2 | +0.29 | +16 pp |
| **Iudex Gundyr's Halberd**<br><sub><code>epicfight_dd:iudex_gundyr_halberd</code></sub> | `epicfight_dd:iudex_halberd` | Preset | Preset | +20 pp |
| **Milady**<br><sub><code>epicfight_dd:milady</code></sub> | `epicfight_dd:milady` | Preset | Preset | Preset |
| **Netherite Battlestaff**<br><sub><code>epicfight_dd:netherite_battlestaff</code></sub> | `epicfight_dd:battlestaff` | +4 | +0.22 | +32 pp |
| **Netherite Florett**<br><sub><code>epicfight_dd:netherite_florett</code></sub> | `epicfight_dd:florett` | +4 | +0.3 | +45 pp |
| **Netherite Halberd**<br><sub><code>epicfight_dd:netherite_halberd</code></sub> | `epicfight_dd:halberd` | +4 | +0.23 | +45 pp |
| **Netherite Knife**<br><sub><code>epicfight_dd:netherite_knife</code></sub> | `epicfight_dd:knife` | +4 | +0.33 | +35 pp |
| **Netherite Light Greatsword**<br><sub><code>epicfight_dd:netherite_light_greatsword</code></sub> | `epicfight_dd:light_greatsword` | +4 | +0.28 | +46 pp |
| **Netherite Messer**<br><sub><code>epicfight_dd:netherite_messer</code></sub> | `epicfight_dd:messer` | +4 | +0.15 | +35 pp |
| **Netherite Sickle**<br><sub><code>epicfight_dd:netherite_sickle</code></sub> | `epicfight_dd:herb_sickle` | +4 | +0.33 | +35 pp |
| **Night Ritual Dagger**<br><sub><code>epicfight_dd:night_ritus_dagger</code></sub> | `epicfight_dd:night_ritus_dagger` | Preset | Preset | +20 pp |
| **Poleblade**<br><sub><code>epicfight_dd:poleblade</code></sub> | `epicfight_dd:pole_blade` | Preset | Preset | Preset |
| **Saber**<br><sub><code>epicfight_dd:saber</code></sub> | `epicfight_dd:saber` | Preset | Preset | Preset |
| **Spiked Bat**<br><sub><code>epicfight_dd:nailbat</code></sub> | `epicfight_dd:nailbat` | Preset | Preset | +10 pp |
| **Steel Axe**<br><sub><code>epicfight_dd:steelaxe</code></sub> | `epicfight_dd:steel_axe` | Preset | Preset | Preset |
| **Vitreus**<br><sub><code>epicfight_dd:vitreus</code></sub> | `epicfight_dd:vitreus` | Preset | Preset | Preset |
| **War Sickle**<br><sub><code>epicfight_dd:war_sickle</code></sub> | `epicfight_dd:war_sickle` | Preset | Preset | Preset |
| **Wooden Bat**<br><sub><code>epicfight_dd:bat</code></sub> | `epicfight_dd:nailbat` | Preset | Preset | Preset |

<a id="weapons-combat-farmersdelight"></a>
### Farmer’s Delight
5 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Diamond Knife**<br><sub><code>farmersdelight:diamond_knife</code></sub> | `epicfight_dd:knife` | +3 | +0.31 | +19 pp |
| **Flint Knife**<br><sub><code>farmersdelight:flint_knife</code></sub> | `epicfight_dd:knife` | +1.5 | +0.27 | +13 pp |
| **Golden Knife**<br><sub><code>farmersdelight:golden_knife</code></sub> | `epicfight_dd:knife` | +1.5 | +0.27 | +13 pp |
| **Iron Knife**<br><sub><code>farmersdelight:iron_knife</code></sub> | `epicfight_dd:knife` | +2 | +0.29 | +16 pp |
| **Netherite Knife**<br><sub><code>farmersdelight:netherite_knife</code></sub> | `epicfight_dd:knife` | +4 | +0.33 | +22 pp |

<a id="weapons-combat-hybrid_aquatic"></a>
### Hybrid Aquatic
5 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Coral Axe**<br><sub><code>hybrid_aquatic:coral_axe</code></sub> | `womplus:greataxe` | +2 | +0.18 | +26 pp |
| **Coral Blade**<br><sub><code>hybrid_aquatic:coral_blade</code></sub> | `epicfight:trident` | +2 | +0.19 | +33 pp |
| **Karkinos Claw**<br><sub><code>hybrid_aquatic:karkinos_claw</code></sub> | `epicfight_dd:hookclaws` | +5 | +0.3 | +25 pp |
| **Seashell Axe**<br><sub><code>hybrid_aquatic:seashell_axe</code></sub> | `epicfight_dd:steel_axe` | +2 | +0.18 | +26 pp |
| **Seashell Spear**<br><sub><code>hybrid_aquatic:seashell_spear</code></sub> | `epicfight:trident` | +2 | +0.19 | +33 pp |

<a id="weapons-combat-immersiveengineering"></a>
### Immersive Engineering
5 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Axe Steel**<br><sub><code>immersiveengineering:axe_steel</code></sub> | `epicfight_dd:steel_axe` | +2 | +0.18 | +26 pp |
| **Chemthrower**<br><sub><code>immersiveengineering:chemthrower</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| **Railgun**<br><sub><code>immersiveengineering:railgun</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| **Revolver**<br><sub><code>immersiveengineering:revolver</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| **Sword Steel**<br><sub><code>immersiveengineering:sword_steel</code></sub> | `epicfight_dd:messer` | +2 | +0.16 | +16 pp |

<a id="weapons-combat-irons_spellbooks"></a>
### Iron’s Spells ’n Spellbooks
18 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Amethyst Rapier**<br><sub><code>irons_spellbooks:amethyst_rapier</code></sub> | `epicfight_dd:florett` | +5 | +0.32 | +40 pp |
| **Artificer's Cane**<br><sub><code>irons_spellbooks:artificer_cane</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| **Autoloader Crossbow**<br><sub><code>irons_spellbooks:autoloader_crossbow</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| **Boreal Blade**<br><sub><code>irons_spellbooks:boreal_blade</code></sub> | `epicfight:sword` | Preset | Preset | Preset |
| **Claymore**<br><sub><code>irons_spellbooks:claymore</code></sub> | `epicfight:sword` | Preset | Preset | Preset |
| **Decrepit Scythe**<br><sub><code>irons_spellbooks:decrepit_scythe</code></sub> | `epicfight:sword` | Preset | Preset | Preset |
| **Graybeard Staff**<br><sub><code>irons_spellbooks:graybeard_staff</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| **Hellrazor**<br><sub><code>irons_spellbooks:hellrazor</code></sub> | `epicfight:sword` | Preset | Preset | Preset |
| **Ice Staff**<br><sub><code>irons_spellbooks:ice_staff</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| **Keeper Flamberge**<br><sub><code>irons_spellbooks:keeper_flamberge</code></sub> | `wom:ruine` | +5 | +0.22 | +25 pp |
| **Legionnaire Flamberge**<br><sub><code>irons_spellbooks:legionnaire_flamberge</code></sub> | `womplus:hollow_longsword` | +5 | +0.25 | +30 pp |
| **Magehunter**<br><sub><code>irons_spellbooks:magehunter</code></sub> | `epicfight_dd:messer` | +5 | +0.22 | +25 pp |
| **Misery**<br><sub><code>irons_spellbooks:misery</code></sub> | `epicfight:sword` | Preset | Preset | Preset |
| **Pyrium Staff**<br><sub><code>irons_spellbooks:pyrium_staff</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| **Rod o' Lightning**<br><sub><code>irons_spellbooks:lightning_rod</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| **Spellbreaker**<br><sub><code>irons_spellbooks:spellbreaker</code></sub> | `wom:ruine` | +5 | +0.22 | +25 pp |
| **The Blood Staff**<br><sub><code>irons_spellbooks:blood_staff</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| **Twilight Gale**<br><sub><code>irons_spellbooks:twilight_gale</code></sub> | `wom:orbit` | +5 | +0.25 | +45 pp |

<a id="weapons-combat-knavesneeds"></a>
### Knaves’ Needs
60 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Twilightforest / Fiery / Chakram**<br><sub><code>knavesneeds:twilightforest/fiery/chakram</code></sub> | `epicfight_dd:backhand_blade` | +4 | +0.2 | +22 pp |
| **Twilightforest / Fiery / Claymore**<br><sub><code>knavesneeds:twilightforest/fiery/claymore</code></sub> | `epicfight_dd:light_greatsword` | +4 | +0.28 | +46 pp |
| **Twilightforest / Fiery / Cutlass**<br><sub><code>knavesneeds:twilightforest/fiery/cutlass</code></sub> | `epicfight_dd:saber` | +4 | +0.26 | +24 pp |
| **Twilightforest / Fiery / Glaive**<br><sub><code>knavesneeds:twilightforest/fiery/glaive</code></sub> | `epicfight_dd:pole_blade` | +4 | +0.23 | +41 pp |
| **Twilightforest / Fiery / Greataxe**<br><sub><code>knavesneeds:twilightforest/fiery/greataxe</code></sub> | `womplus:greataxe` | +4 | +0.26 | +51 pp |
| **Twilightforest / Fiery / Greathammer**<br><sub><code>knavesneeds:twilightforest/fiery/greathammer</code></sub> | `tnk:great_hammer` | +4 | +0.22 | +56 pp |
| **Twilightforest / Fiery / Halberd**<br><sub><code>knavesneeds:twilightforest/fiery/halberd</code></sub> | `epicfight_dd:halberd` | +4 | +0.23 | +41 pp |
| **Twilightforest / Fiery / Katana**<br><sub><code>knavesneeds:twilightforest/fiery/katana</code></sub> | `epicfight:uchigatana` | +4 | +0.26 | +24 pp |
| **Twilightforest / Fiery / Longsword**<br><sub><code>knavesneeds:twilightforest/fiery/longsword</code></sub> | `epicfight_dd:messer` | +4 | +0.23 | +27 pp |
| **Twilightforest / Fiery / Rapier**<br><sub><code>knavesneeds:twilightforest/fiery/rapier</code></sub> | `epicfight_dd:florett` | +4 | +0.3 | +36 pp |
| **Twilightforest / Fiery / Sai**<br><sub><code>knavesneeds:twilightforest/fiery/sai</code></sub> | `epicfight:dagger` | +4 | +0.33 | +22 pp |
| **Twilightforest / Fiery / Scythe**<br><sub><code>knavesneeds:twilightforest/fiery/scythe</code></sub> | `epicfight_dd:war_sickle` | +4 | +0.23 | +41 pp |
| **Twilightforest / Fiery / Spear**<br><sub><code>knavesneeds:twilightforest/fiery/spear</code></sub> | `epicfight:spear` | +4 | +0.23 | +41 pp |
| **Twilightforest / Fiery / Twinblade**<br><sub><code>knavesneeds:twilightforest/fiery/twinblade</code></sub> | `wom:staff` | +4 | +0.22 | +22 pp |
| **Twilightforest / Fiery / Warglaive**<br><sub><code>knavesneeds:twilightforest/fiery/warglaive</code></sub> | `wom:orbit` | +4 | +0.22 | +22 pp |
| **Twilightforest / Ironwood / Chakram**<br><sub><code>knavesneeds:twilightforest/ironwood/chakram</code></sub> | `epicfight_dd:backhand_blade` | +2 | +0.16 | +16 pp |
| **Twilightforest / Ironwood / Claymore**<br><sub><code>knavesneeds:twilightforest/ironwood/claymore</code></sub> | `epicfight_dd:light_greatsword` | +2 | +0.24 | +38 pp |
| **Twilightforest / Ironwood / Cutlass**<br><sub><code>knavesneeds:twilightforest/ironwood/cutlass</code></sub> | `epicfight_dd:saber` | +2 | +0.22 | +18 pp |
| **Twilightforest / Ironwood / Glaive**<br><sub><code>knavesneeds:twilightforest/ironwood/glaive</code></sub> | `epicfight_dd:pole_blade` | +2 | +0.19 | +33 pp |
| **Twilightforest / Ironwood / Greataxe**<br><sub><code>knavesneeds:twilightforest/ironwood/greataxe</code></sub> | `womplus:greataxe` | +2 | +0.22 | +43 pp |
| **Twilightforest / Ironwood / Greathammer**<br><sub><code>knavesneeds:twilightforest/ironwood/greathammer</code></sub> | `tnk:great_hammer` | +2 | +0.18 | +48 pp |
| **Twilightforest / Ironwood / Halberd**<br><sub><code>knavesneeds:twilightforest/ironwood/halberd</code></sub> | `epicfight_dd:halberd` | +2 | +0.19 | +33 pp |
| **Twilightforest / Ironwood / Katana**<br><sub><code>knavesneeds:twilightforest/ironwood/katana</code></sub> | `epicfight:uchigatana` | +2 | +0.22 | +18 pp |
| **Twilightforest / Ironwood / Longsword**<br><sub><code>knavesneeds:twilightforest/ironwood/longsword</code></sub> | `womplus:hollow_longsword` | +2 | +0.19 | +21 pp |
| **Twilightforest / Ironwood / Rapier**<br><sub><code>knavesneeds:twilightforest/ironwood/rapier</code></sub> | `epicfight_dd:florett` | +2 | +0.26 | +28 pp |
| **Twilightforest / Ironwood / Sai**<br><sub><code>knavesneeds:twilightforest/ironwood/sai</code></sub> | `epicfight:dagger` | +2 | +0.29 | +16 pp |
| **Twilightforest / Ironwood / Scythe**<br><sub><code>knavesneeds:twilightforest/ironwood/scythe</code></sub> | `epicfight_dd:war_sickle` | +2 | +0.19 | +33 pp |
| **Twilightforest / Ironwood / Spear**<br><sub><code>knavesneeds:twilightforest/ironwood/spear</code></sub> | `epicfight:spear` | +2 | +0.19 | +33 pp |
| **Twilightforest / Ironwood / Twinblade**<br><sub><code>knavesneeds:twilightforest/ironwood/twinblade</code></sub> | `wom:staff` | +2 | +0.18 | +16 pp |
| **Twilightforest / Ironwood / Warglaive**<br><sub><code>knavesneeds:twilightforest/ironwood/warglaive</code></sub> | `wom:orbit` | +2 | +0.18 | +16 pp |
| **Twilightforest / Knightmetal / Chakram**<br><sub><code>knavesneeds:twilightforest/knightmetal/chakram</code></sub> | `epicfight_dd:backhand_blade` | +3 | +0.18 | +19 pp |
| **Twilightforest / Knightmetal / Claymore**<br><sub><code>knavesneeds:twilightforest/knightmetal/claymore</code></sub> | `epicfight_dd:light_greatsword` | +3 | +0.26 | +42 pp |
| **Twilightforest / Knightmetal / Cutlass**<br><sub><code>knavesneeds:twilightforest/knightmetal/cutlass</code></sub> | `epicfight_dd:saber` | +3 | +0.24 | +21 pp |
| **Twilightforest / Knightmetal / Glaive**<br><sub><code>knavesneeds:twilightforest/knightmetal/glaive</code></sub> | `epicfight_dd:pole_blade` | +3 | +0.21 | +37 pp |
| **Twilightforest / Knightmetal / Greataxe**<br><sub><code>knavesneeds:twilightforest/knightmetal/greataxe</code></sub> | `womplus:greataxe` | +3 | +0.24 | +47 pp |
| **Twilightforest / Knightmetal / Greathammer**<br><sub><code>knavesneeds:twilightforest/knightmetal/greathammer</code></sub> | `tnk:great_hammer` | +3 | +0.2 | +52 pp |
| **Twilightforest / Knightmetal / Halberd**<br><sub><code>knavesneeds:twilightforest/knightmetal/halberd</code></sub> | `epicfight_dd:halberd` | +3 | +0.21 | +37 pp |
| **Twilightforest / Knightmetal / Katana**<br><sub><code>knavesneeds:twilightforest/knightmetal/katana</code></sub> | `epicfight:uchigatana` | +3 | +0.24 | +21 pp |
| **Twilightforest / Knightmetal / Longsword**<br><sub><code>knavesneeds:twilightforest/knightmetal/longsword</code></sub> | `wom:ruine` | +3 | +0.21 | +24 pp |
| **Twilightforest / Knightmetal / Rapier**<br><sub><code>knavesneeds:twilightforest/knightmetal/rapier</code></sub> | `epicfight_dd:florett` | +3 | +0.28 | +32 pp |
| **Twilightforest / Knightmetal / Sai**<br><sub><code>knavesneeds:twilightforest/knightmetal/sai</code></sub> | `epicfight:dagger` | +3 | +0.31 | +19 pp |
| **Twilightforest / Knightmetal / Scythe**<br><sub><code>knavesneeds:twilightforest/knightmetal/scythe</code></sub> | `epicfight_dd:war_sickle` | +3 | +0.21 | +37 pp |
| **Twilightforest / Knightmetal / Spear**<br><sub><code>knavesneeds:twilightforest/knightmetal/spear</code></sub> | `epicfight:spear` | +3 | +0.21 | +37 pp |
| **Twilightforest / Knightmetal / Twinblade**<br><sub><code>knavesneeds:twilightforest/knightmetal/twinblade</code></sub> | `epicfight_dd:pole_blade` | +3 | +0.2 | +19 pp |
| **Twilightforest / Knightmetal / Warglaive**<br><sub><code>knavesneeds:twilightforest/knightmetal/warglaive</code></sub> | `wom:staff` | +3 | +0.2 | +19 pp |
| **Twilightforest / Steeleaf / Chakram**<br><sub><code>knavesneeds:twilightforest/steeleaf/chakram</code></sub> | `epicfight_dd:backhand_blade` | +3 | +0.18 | +19 pp |
| **Twilightforest / Steeleaf / Claymore**<br><sub><code>knavesneeds:twilightforest/steeleaf/claymore</code></sub> | `epicfight_dd:light_greatsword` | +3 | +0.26 | +42 pp |
| **Twilightforest / Steeleaf / Cutlass**<br><sub><code>knavesneeds:twilightforest/steeleaf/cutlass</code></sub> | `epicfight_dd:saber` | +3 | +0.24 | +21 pp |
| **Twilightforest / Steeleaf / Glaive**<br><sub><code>knavesneeds:twilightforest/steeleaf/glaive</code></sub> | `epicfight_dd:pole_blade` | +3 | +0.21 | +37 pp |
| **Twilightforest / Steeleaf / Greataxe**<br><sub><code>knavesneeds:twilightforest/steeleaf/greataxe</code></sub> | `womplus:greataxe` | +3 | +0.24 | +47 pp |
| **Twilightforest / Steeleaf / Greathammer**<br><sub><code>knavesneeds:twilightforest/steeleaf/greathammer</code></sub> | `tnk:great_hammer` | +3 | +0.2 | +52 pp |
| **Twilightforest / Steeleaf / Halberd**<br><sub><code>knavesneeds:twilightforest/steeleaf/halberd</code></sub> | `epicfight_dd:halberd` | +3 | +0.21 | +37 pp |
| **Twilightforest / Steeleaf / Katana**<br><sub><code>knavesneeds:twilightforest/steeleaf/katana</code></sub> | `epicfight:uchigatana` | +3 | +0.24 | +21 pp |
| **Twilightforest / Steeleaf / Longsword**<br><sub><code>knavesneeds:twilightforest/steeleaf/longsword</code></sub> | `epicfight_dd:milady` | +3 | +0.21 | +24 pp |
| **Twilightforest / Steeleaf / Rapier**<br><sub><code>knavesneeds:twilightforest/steeleaf/rapier</code></sub> | `epicfight_dd:florett` | +3 | +0.28 | +32 pp |
| **Twilightforest / Steeleaf / Sai**<br><sub><code>knavesneeds:twilightforest/steeleaf/sai</code></sub> | `epicfight:dagger` | +3 | +0.31 | +19 pp |
| **Twilightforest / Steeleaf / Scythe**<br><sub><code>knavesneeds:twilightforest/steeleaf/scythe</code></sub> | `epicfight_dd:war_sickle` | +3 | +0.21 | +37 pp |
| **Twilightforest / Steeleaf / Spear**<br><sub><code>knavesneeds:twilightforest/steeleaf/spear</code></sub> | `epicfight:spear` | +3 | +0.21 | +37 pp |
| **Twilightforest / Steeleaf / Twinblade**<br><sub><code>knavesneeds:twilightforest/steeleaf/twinblade</code></sub> | `epicfight_dd:pole_blade` | +3 | +0.2 | +19 pp |
| **Twilightforest / Steeleaf / Warglaive**<br><sub><code>knavesneeds:twilightforest/steeleaf/warglaive</code></sub> | `wom:staff` | +3 | +0.2 | +19 pp |

<a id="weapons-combat-legendary_monsters"></a>
### Legendary Monsters
20 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Axe Of Lightning**<br><sub><code>legendary_monsters:axe_of_lightning</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.32 | +54 pp |
| **Chorus Blade**<br><sub><code>legendary_monsters:chorus_blade</code></sub> | `epicfight_dd:light_greatsword` | +6 | +0.32 | +54 pp |
| **Chorus Cannon**<br><sub><code>legendary_monsters:chorus_cannon</code></sub> | **Unverified** | Unverified | Unverified | Unverified |
| **Dinosaur Bone Club**<br><sub><code>legendary_monsters:dinosaur_bone_club</code></sub> | `epicfight_dd:nailbat` | +6 | +0.26 | +64 pp |
| **Enderitium Axe**<br><sub><code>legendary_monsters:enderitium_axe</code></sub> | `womplus:greataxe` | +5 | +0.24 | +38 pp |
| **Enderitium Sword**<br><sub><code>legendary_monsters:enderitium_sword</code></sub> | `wom:ruine` | +5 | +0.22 | +25 pp |
| **Fiery Jaw**<br><sub><code>legendary_monsters:fiery_jaw</code></sub> | `wom:clawed_gauntle` | +6 | +0.32 | +28 pp |
| **Golden Halbert**<br><sub><code>legendary_monsters:golden_halbert</code></sub> | `epicfight_dd:halberd` | +6 | +0.27 | +49 pp |
| **Knights Sword**<br><sub><code>legendary_monsters:knights_sword</code></sub> | `epicfight_dd:milady` | +6 | +0.27 | +33 pp |
| **Monstrous Anchor**<br><sub><code>legendary_monsters:monstrous_anchor</code></sub> | `womplus:greataxe` | +6 | +0.3 | +59 pp |
| **Mossy Hammer**<br><sub><code>legendary_monsters:mossy_hammer</code></sub> | `epicfight_dd:steel_axe` | +6 | +0.26 | +64 pp |
| **Resurrected Javelin**<br><sub><code>legendary_monsters:resurrected_javelin</code></sub> | `epicfight:trident` | +6 | +0.27 | +49 pp |
| **Sharp Battle Axe**<br><sub><code>legendary_monsters:sharp_battle_axe</code></sub> | `epicfight:axe` | Preset | Preset | Preset |
| **Shattered Greatsword**<br><sub><code>legendary_monsters:shattered_greatsword</code></sub> | `epicfight_dd:bonecutting_saw` | +6 | +0.32 | +54 pp |
| **Soul Great Sword**<br><sub><code>legendary_monsters:soul_great_sword</code></sub> | `wom:ruine` | +6 | +0.27 | +33 pp |
| **The Great Frost**<br><sub><code>legendary_monsters:the_great_frost</code></sub> | `wom:moonless` | +6 | +0.27 | +33 pp |
| **The Tesseract**<br><sub><code>legendary_monsters:the_tesseract</code></sub> | `epicfight_dd:eclipse` | +6 | +0.32 | +54 pp |
| **Void Sword**<br><sub><code>legendary_monsters:void_sword</code></sub> | `epicfight:sword` | Preset | Preset | Preset |
| **Wand Of Clouds**<br><sub><code>legendary_monsters:wand_of_clouds</code></sub> | `epicfight_dd:battlestaff` | +6 | +0.24 | +28 pp |
| **Withered Scythe**<br><sub><code>legendary_monsters:withered_scythe</code></sub> | `epicfight_dd:war_sickle` | +6 | +0.27 | +49 pp |

<a id="weapons-combat-bakery"></a>
### Let’s Do: Bakery
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Bread Knife**<br><sub><code>bakery:bread_knife</code></sub> | `epicfight_dd:knife` | +5 | +0.35 | +25 pp |

<a id="weapons-combat-farm_and_charm"></a>
### Let’s Do: Farm & Charm
4 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Diamond Cleaver**<br><sub><code>farm_and_charm:diamond_cleaver</code></sub> | `epicfight_dd:messer` | +3 | +0.18 | +19 pp |
| **Iron Cleaver**<br><sub><code>farm_and_charm:iron_cleaver</code></sub> | `epicfight_dd:messer` | +2 | +0.16 | +16 pp |
| **Netherite Cleaver**<br><sub><code>farm_and_charm:netherite_cleaver</code></sub> | `epicfight_dd:messer` | +4 | +0.2 | +22 pp |
| **Pitchfork**<br><sub><code>farm_and_charm:pitchfork</code></sub> | `epicfight:trident` | +5 | +0.25 | +45 pp |

<a id="weapons-combat-minecraft"></a>
### Minecraft / Vanilla Backport
25 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Bow**<br><sub><code>minecraft:bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Copper Axe**<br><sub><code>minecraft:copper_axe</code></sub> | `epicfight:axe` | +1.5 | +0.16 | +22 pp |
| **Copper Spear**<br><sub><code>minecraft:copper_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| **Copper Sword**<br><sub><code>minecraft:copper_sword</code></sub> | `epicfight:sword` | +1.5 | +0.14 | +13 pp |
| **Crossbow**<br><sub><code>minecraft:crossbow</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |
| **Diamond Axe**<br><sub><code>minecraft:diamond_axe</code></sub> | `epicfight:axe` | +3 | +0.2 | +30 pp |
| **Diamond Spear**<br><sub><code>minecraft:diamond_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| **Diamond Sword**<br><sub><code>minecraft:diamond_sword</code></sub> | `epicfight:sword` | +3 | +0.18 | +19 pp |
| **Golden Axe**<br><sub><code>minecraft:golden_axe</code></sub> | `epicfight:axe` | +1.5 | +0.16 | +22 pp |
| **Golden Spear**<br><sub><code>minecraft:golden_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| **Golden Sword**<br><sub><code>minecraft:golden_sword</code></sub> | `epicfight:sword` | +1.5 | +0.14 | +13 pp |
| **Iron Axe**<br><sub><code>minecraft:iron_axe</code></sub> | `epicfight:axe` | +2 | +0.18 | +26 pp |
| **Iron Spear**<br><sub><code>minecraft:iron_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| **Iron Sword**<br><sub><code>minecraft:iron_sword</code></sub> | `epicfight:sword` | +2 | +0.16 | +16 pp |
| **Mace**<br><sub><code>minecraft:mace</code></sub> | `epicfight:axe` | Preset | Preset | +50 pp |
| **Netherite Axe**<br><sub><code>minecraft:netherite_axe</code></sub> | `epicfight:axe` | +4 | +0.22 | +40 pp |
| **Netherite Spear**<br><sub><code>minecraft:netherite_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| **Netherite Sword**<br><sub><code>minecraft:netherite_sword</code></sub> | `epicfight:sword` | +4 | +0.2 | +22 pp |
| **Stone Axe**<br><sub><code>minecraft:stone_axe</code></sub> | `epicfight:axe` | +1.5 | +0.16 | +22 pp |
| **Stone Spear**<br><sub><code>minecraft:stone_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| **Stone Sword**<br><sub><code>minecraft:stone_sword</code></sub> | `epicfight:sword` | +1.5 | +0.14 | +13 pp |
| **Trident**<br><sub><code>minecraft:trident</code></sub> | `epicfight:trident` | Preset | Preset | Preset |
| **Wooden Axe**<br><sub><code>minecraft:wooden_axe</code></sub> | `epicfight:axe` | +1 | +0.14 | +18 pp |
| **Wooden Spear**<br><sub><code>minecraft:wooden_spear</code></sub> | `epicfight:spear` | Preset | Preset | Preset |
| **Wooden Sword**<br><sub><code>minecraft:wooden_sword</code></sub> | `epicfight:sword` | +1 | +0.12 | +10 pp |

<a id="weapons-combat-mowziesmobs"></a>
### Mowzie’s Mobs
6 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Blowgun**<br><sub><code>mowziesmobs:blowgun</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Earthrend Gauntlet**<br><sub><code>mowziesmobs:earthrend_gauntlet</code></sub> | `tnk:earthrend_gauntlet` | Preset | +0.5 … +0.8 | +8 pp |
| **Naga Fang Dagger**<br><sub><code>mowziesmobs:naga_fang_dagger</code></sub> | `epicfight_dd:knife` | +1 | +0.4 | +10 pp |
| **Sculptor Staff**<br><sub><code>mowziesmobs:sculptor_staff</code></sub> | `epicfight_dd:battlestaff_amethyst` | +3 | +0.6 | Preset |
| **Spear**<br><sub><code>mowziesmobs:spear</code></sub> | `epicfight:spear` | Preset | Preset | +4 pp |
| **Wrought Axe**<br><sub><code>mowziesmobs:wrought_axe</code></sub> | `epicfight_dd:steel_axe` | Preset | +0.3 | +50 pp |

<a id="weapons-combat-simplyswords"></a>
### Simply Swords
133 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Arcanethyst**<br><sub><code>simplyswords:arcanethyst</code></sub> | `epicfight_dd:battlestaff_amethyst` | +5 | +0.25 | +45 pp |
| **Awakened Lichblade**<br><sub><code>simplyswords:awakened_lichblade</code></sub> | `epicfight_dd:eclipse` | +6 | +0.3 | +54 pp |
| **Bloodwake**<br><sub><code>simplyswords:bloodwake</code></sub> | `epicfight_dd:blood_ritus_dagger` | +5 | +0.35 | +25 pp |
| **Bramblethorn**<br><sub><code>simplyswords:bramblethorn</code></sub> | `epicfight_dd:florett` | +5 | +0.25 | +30 pp |
| **Brimstone Claymore**<br><sub><code>simplyswords:brimstone_claymore</code></sub> | `epicfight_dd:light_greatsword` | +5 | +0.3 | +50 pp |
| **Caelestis**<br><sub><code>simplyswords:caelestis</code></sub> | `epicfight_dd:vitreus` | +5 | +0.25 | +30 pp |
| **Chomp'olotl**<br><sub><code>simplyswords:chompolotl</code></sub> | `epicfight_dd:hookclaws` | +5 | +0.32 | +27 pp |
| **Dawnquiver**<br><sub><code>simplyswords:dawnquiver</code></sub> | `epicfight_dd:milady` | +5 | +0.3 | +50 pp |
| **Decaying relic**<br><sub><code>simplyswords:decaying_relic</code></sub> | `epicfight_dd:war_sickle` | +5 | +0.24 | +25 pp |
| **Diamond Chakram**<br><sub><code>simplyswords:diamond_chakram</code></sub> | `epicfight_dd:backhand_blade` | +3 | +0.28 | +21 pp |
| **Diamond Claymore**<br><sub><code>simplyswords:diamond_claymore</code></sub> | `epicfight_dd:light_greatsword` | +3 | +0.26 | +42 pp |
| **Diamond Cutlass**<br><sub><code>simplyswords:diamond_cutlass</code></sub> | `epicfight_dd:saber` | +3 | +0.24 | +21 pp |
| **Diamond Glaive**<br><sub><code>simplyswords:diamond_glaive</code></sub> | `epicfight_dd:halberd` | +3 | +0.22 | +24 pp |
| **Diamond Greataxe**<br><sub><code>simplyswords:diamond_greataxe</code></sub> | `womplus:greataxe` | +3 | +0.24 | +47 pp |
| **Diamond Greathammer**<br><sub><code>simplyswords:diamond_greathammer</code></sub> | `epicfight_dd:steel_axe` | +3 | +0.2 | +52 pp |
| **Diamond Halberd**<br><sub><code>simplyswords:diamond_halberd</code></sub> | `epicfight_dd:halberd` | +3 | +0.21 | +37 pp |
| **Diamond Katana**<br><sub><code>simplyswords:diamond_katana</code></sub> | `epicfight:uchigatana` | +3 | +0.24 | +21 pp |
| **Diamond Longsword**<br><sub><code>simplyswords:diamond_longsword</code></sub> | `epicfight_dd:messer` | +3 | +0.21 | +24 pp |
| **Diamond Rapier**<br><sub><code>simplyswords:diamond_rapier</code></sub> | `epicfight_dd:florett` | +3 | +0.28 | +21 pp |
| **Diamond Sai**<br><sub><code>simplyswords:diamond_sai</code></sub> | `epicfight:dagger` | +3 | +0.31 | +19 pp |
| **Diamond Scythe**<br><sub><code>simplyswords:diamond_scythe</code></sub> | `epicfight_dd:war_sickle` | +3 | +0.21 | +37 pp |
| **Diamond Spear**<br><sub><code>simplyswords:diamond_spear</code></sub> | `epicfight:spear` | +3 | +0.21 | +37 pp |
| **Diamond Twinblade**<br><sub><code>simplyswords:diamond_twinblade</code></sub> | `epicfight_dd:battlestaff_amethyst` | +3 | +0.2 | +19 pp |
| **Diamond Warglaive**<br><sub><code>simplyswords:diamond_warglaive</code></sub> | `wom:staff` | +3 | +0.2 | +19 pp |
| **Dormant Relic**<br><sub><code>simplyswords:dormant_relic</code></sub> | `epicfight_dd:milady` | +5 | +0.25 | +30 pp |
| **Dreadwhisper**<br><sub><code>simplyswords:dreadwhisper</code></sub> | `wom:nova` | +5 | +0.26 | +30 pp |
| **Emberblade**<br><sub><code>simplyswords:emberblade</code></sub> | `epicfight_dd:milady` | +5 | +0.3 | +50 pp |
| **Emberlash**<br><sub><code>simplyswords:emberlash</code></sub> | `epicfight_dd:herb_sickle` | +5 | +0.35 | +25 pp |
| **Enigma**<br><sub><code>simplyswords:enigma</code></sub> | `epicfight_dd:vitreus` | +5 | +0.25 | +30 pp |
| **Flamewind**<br><sub><code>simplyswords:flamewind</code></sub> | `epicfight_dd:pole_blade` | +5 | +0.25 | +45 pp |
| **Frostfall**<br><sub><code>simplyswords:frostfall</code></sub> | `epicfight_dd:nailbat` | +5 | +0.28 | +55 pp |
| **Gloampiercer**<br><sub><code>simplyswords:gloampiercer</code></sub> | `wom:agony` | +5 | +0.25 | +45 pp |
| **Gold Chakram**<br><sub><code>simplyswords:gold_chakram</code></sub> | `epicfight_dd:backhand_blade` | +1.5 | +0.24 | +15 pp |
| **Gold Claymore**<br><sub><code>simplyswords:gold_claymore</code></sub> | `epicfight_dd:light_greatsword` | +1.5 | +0.22 | +34 pp |
| **Gold Cutlass**<br><sub><code>simplyswords:gold_cutlass</code></sub> | `epicfight_dd:saber` | +1.5 | +0.2 | +15 pp |
| **Gold Glaive**<br><sub><code>simplyswords:gold_glaive</code></sub> | `epicfight:spear` | +1.5 | +0.17 | +29 pp |
| **Gold Greataxe**<br><sub><code>simplyswords:gold_greataxe</code></sub> | `womplus:greataxe` | +1.5 | +0.2 | +39 pp |
| **Gold Greathammer**<br><sub><code>simplyswords:gold_greathammer</code></sub> | `epicfight_dd:steel_axe` | +1.5 | +0.16 | +44 pp |
| **Gold Halberd**<br><sub><code>simplyswords:gold_halberd</code></sub> | `epicfight_dd:halberd` | +1.5 | +0.17 | +29 pp |
| **Gold Katana**<br><sub><code>simplyswords:gold_katana</code></sub> | `epicfight:uchigatana` | +1.5 | +0.2 | +15 pp |
| **Gold Longsword**<br><sub><code>simplyswords:gold_longsword</code></sub> | `epicfight_dd:messer` | +1.5 | +0.17 | +18 pp |
| **Gold Rapier**<br><sub><code>simplyswords:gold_rapier</code></sub> | `epicfight_dd:florett` | +1.5 | +0.24 | +24 pp |
| **Gold Sai**<br><sub><code>simplyswords:gold_sai</code></sub> | `epicfight:dagger` | +1.5 | +0.27 | +13 pp |
| **Gold Scythe**<br><sub><code>simplyswords:gold_scythe</code></sub> | `epicfight_dd:war_sickle` | +1.5 | +0.17 | +29 pp |
| **Gold Spear**<br><sub><code>simplyswords:gold_spear</code></sub> | `epicfight:spear` | +1.5 | +0.17 | +29 pp |
| **Gold Twinblade**<br><sub><code>simplyswords:gold_twinblade</code></sub> | `epicfight_dd:battlestaff` | +1.5 | +0.16 | +13 pp |
| **Gold Warglaive**<br><sub><code>simplyswords:gold_warglaive</code></sub> | `wom:staff` | +1.5 | +0.16 | +13 pp |
| **Harbinger**<br><sub><code>simplyswords:harbinger</code></sub> | `wom:ruine` | +5 | +0.26 | +30 pp |
| **Hearthflame**<br><sub><code>simplyswords:hearthflame</code></sub> | `epicfight_dd:steel_axe` | +5 | +0.24 | +60 pp |
| **Hiveheart**<br><sub><code>simplyswords:hiveheart</code></sub> | `epicfight_dd:steel_axe` | +5 | +0.28 | +55 pp |
| **Icewhisper**<br><sub><code>simplyswords:icewhisper</code></sub> | `wom:orbit` | +5 | +0.25 | +45 pp |
| **Ionbound Stormscale**<br><sub><code>simplyswords:ionbound_stormscale</code></sub> | `wom:agony` | +5 | +0.25 | +45 pp |
| **Iron Chakram**<br><sub><code>simplyswords:iron_chakram</code></sub> | `epicfight_dd:backhand_blade` | +2 | +0.26 | +18 pp |
| **Iron Claymore**<br><sub><code>simplyswords:iron_claymore</code></sub> | `epicfight_dd:light_greatsword` | +2 | +0.24 | +38 pp |
| **Iron Cutlass**<br><sub><code>simplyswords:iron_cutlass</code></sub> | `epicfight_dd:saber` | +2 | +0.22 | +18 pp |
| **Iron Glaive**<br><sub><code>simplyswords:iron_glaive</code></sub> | `epicfight:spear` | +2 | +0.19 | +33 pp |
| **Iron Greataxe**<br><sub><code>simplyswords:iron_greataxe</code></sub> | `womplus:greataxe` | +2 | +0.22 | +43 pp |
| **Iron Greathammer**<br><sub><code>simplyswords:iron_greathammer</code></sub> | `epicfight_dd:steel_axe` | +2 | +0.18 | +48 pp |
| **Iron Halberd**<br><sub><code>simplyswords:iron_halberd</code></sub> | `epicfight_dd:halberd` | +2 | +0.19 | +33 pp |
| **Iron Katana**<br><sub><code>simplyswords:iron_katana</code></sub> | `epicfight:uchigatana` | +2 | +0.22 | +18 pp |
| **Iron Longsword**<br><sub><code>simplyswords:iron_longsword</code></sub> | `epicfight_dd:messer` | +2 | +0.19 | +21 pp |
| **Iron Rapier**<br><sub><code>simplyswords:iron_rapier</code></sub> | `epicfight_dd:florett` | +2 | +0.26 | +28 pp |
| **Iron Sai**<br><sub><code>simplyswords:iron_sai</code></sub> | `epicfight:dagger` | +2 | +0.29 | +16 pp |
| **Iron Scythe**<br><sub><code>simplyswords:iron_scythe</code></sub> | `epicfight_dd:war_sickle` | +2 | +0.19 | +33 pp |
| **Iron Spear**<br><sub><code>simplyswords:iron_spear</code></sub> | `epicfight:spear` | +2 | +0.19 | +33 pp |
| **Iron Twinblade**<br><sub><code>simplyswords:iron_twinblade</code></sub> | `epicfight_dd:battlestaff` | +2 | +0.18 | +16 pp |
| **Iron Warglaive**<br><sub><code>simplyswords:iron_warglaive</code></sub> | `wom:staff` | +2 | +0.18 | +18 pp |
| **Livyatan**<br><sub><code>simplyswords:livyatan</code></sub> | `womplus:greataxe` | +5 | +0.24 | +38 pp |
| **Longsword of the Plague**<br><sub><code>simplyswords:toxic_longsword</code></sub> | `epicfight_dd:messer` | +5 | +0.25 | +30 pp |
| **Magiblade**<br><sub><code>simplyswords:magiblade</code></sub> | `epicfight_dd:battlestaff_amethyst` | +5 | +0.24 | +25 pp |
| **Magiscythe**<br><sub><code>simplyswords:magiscythe</code></sub> | `epicfight_dd:war_sickle` | +5 | +0.25 | +45 pp |
| **Magispear**<br><sub><code>simplyswords:magispear</code></sub> | `wom:orbit` | +5 | +0.25 | +45 pp |
| **Mjolnir**<br><sub><code>simplyswords:mjolnir</code></sub> | `epicfight_dd:steel_axe` | +5 | +0.28 | +55 pp |
| **Molten Edge**<br><sub><code>simplyswords:molten_edge</code></sub> | `epicfight_dd:herb_sickle` | +5 | +0.28 | +55 pp |
| **Netherite Chakram**<br><sub><code>simplyswords:netherite_chakram</code></sub> | `epicfight_dd:backhand_blade` | +4 | +0.3 | +24 pp |
| **Netherite Claymore**<br><sub><code>simplyswords:netherite_claymore</code></sub> | `epicfight_dd:light_greatsword` | +4 | +0.28 | +46 pp |
| **Netherite Cutlass**<br><sub><code>simplyswords:netherite_cutlass</code></sub> | `epicfight_dd:saber` | +4 | +0.26 | +24 pp |
| **Netherite Glaive**<br><sub><code>simplyswords:netherite_glaive</code></sub> | `epicfight:spear` | +4 | +0.23 | +41 pp |
| **Netherite Greataxe**<br><sub><code>simplyswords:netherite_greataxe</code></sub> | `womplus:greataxe` | +4 | +0.26 | +51 pp |
| **Netherite Greathammer**<br><sub><code>simplyswords:netherite_greathammer</code></sub> | `epicfight_dd:steel_axe` | +4 | +0.22 | +56 pp |
| **Netherite Halberd**<br><sub><code>simplyswords:netherite_halberd</code></sub> | `epicfight_dd:halberd` | +4 | +0.23 | +41 pp |
| **Netherite Katana**<br><sub><code>simplyswords:netherite_katana</code></sub> | `epicfight:uchigatana` | +4 | +0.26 | +24 pp |
| **Netherite Longsword**<br><sub><code>simplyswords:netherite_longsword</code></sub> | `epicfight_dd:messer` | +4 | +0.23 | +27 pp |
| **Netherite Rapier**<br><sub><code>simplyswords:netherite_rapier</code></sub> | `epicfight_dd:florett` | +4 | +0.3 | +36 pp |
| **Netherite Sai**<br><sub><code>simplyswords:netherite_sai</code></sub> | `epicfight:dagger` | +4 | +0.33 | +22 pp |
| **Netherite Scythe**<br><sub><code>simplyswords:netherite_scythe</code></sub> | `epicfight_dd:war_sickle` | +4 | +0.23 | +41 pp |
| **Netherite Spear**<br><sub><code>simplyswords:netherite_spear</code></sub> | `epicfight:spear` | +4 | +0.23 | +41 pp |
| **Netherite Twinblade**<br><sub><code>simplyswords:netherite_twinblade</code></sub> | `wom:staff` | +4 | +0.22 | +22 pp |
| **Netherite Warglaive**<br><sub><code>simplyswords:netherite_warglaive</code></sub> | `wom:staff` | +4 | +0.22 | +22 pp |
| **Ribboncleaver**<br><sub><code>simplyswords:ribboncleaver</code></sub> | `epicfight_dd:messer` | +5 | +0.25 | +30 pp |
| **Riftmane**<br><sub><code>simplyswords:riftmane</code></sub> | `wom:ruine` | +5 | +0.3 | +50 pp |
| **Righteous Relic**<br><sub><code>simplyswords:righteous_relic</code></sub> | `epicfight_dd:milady` | +5 | +0.26 | +30 pp |
| **Runic Chakram**<br><sub><code>simplyswords:runic_chakram</code></sub> | `epicfight_dd:backhand_blade` | +4 | +0.3 | +24 pp |
| **Runic Claymore**<br><sub><code>simplyswords:runic_claymore</code></sub> | `epicfight_dd:light_greatsword` | +4 | +0.28 | +46 pp |
| **Runic Cutlass**<br><sub><code>simplyswords:runic_cutlass</code></sub> | `epicfight_dd:saber` | +4 | +0.26 | +24 pp |
| **Runic Glaive**<br><sub><code>simplyswords:runic_glaive</code></sub> | `epicfight:spear` | +4 | +0.23 | +41 pp |
| **Runic Greataxe**<br><sub><code>simplyswords:runic_greataxe</code></sub> | `womplus:greataxe` | +4 | +0.26 | +51 pp |
| **Runic Greathammer**<br><sub><code>simplyswords:runic_greathammer</code></sub> | `epicfight_dd:steel_axe` | +4 | +0.22 | +56 pp |
| **Runic Halberd**<br><sub><code>simplyswords:runic_halberd</code></sub> | `epicfight_dd:halberd` | +4 | +0.23 | +41 pp |
| **Runic Katana**<br><sub><code>simplyswords:runic_katana</code></sub> | `epicfight:uchigatana` | +4 | +0.26 | +24 pp |
| **Runic Longsword**<br><sub><code>simplyswords:runic_longsword</code></sub> | `epicfight_dd:messer` | +4 | +0.23 | +27 pp |
| **Runic Rapier**<br><sub><code>simplyswords:runic_rapier</code></sub> | `epicfight_dd:florett` | +4 | +0.3 | +36 pp |
| **Runic Sai**<br><sub><code>simplyswords:runic_sai</code></sub> | `epicfight:dagger` | +4 | +0.33 | +22 pp |
| **Runic Scythe**<br><sub><code>simplyswords:runic_scythe</code></sub> | `epicfight_dd:war_sickle` | +4 | +0.23 | +41 pp |
| **Runic Spear**<br><sub><code>simplyswords:runic_spear</code></sub> | `epicfight:spear` | +4 | +0.23 | +41 pp |
| **Runic Twinblade**<br><sub><code>simplyswords:runic_twinblade</code></sub> | `epicfight_dd:battlestaff_amethyst` | +4 | +0.22 | +22 pp |
| **Runic Warglaive**<br><sub><code>simplyswords:runic_warglaive</code></sub> | `wom:staff` | +4 | +0.22 | +22 pp |
| **Shadowsting**<br><sub><code>simplyswords:shadowsting</code></sub> | `epicfight_dd:florett` | +5 | +0.32 | +40 pp |
| **Slumbering Lichblade**<br><sub><code>simplyswords:slumbering_lichblade</code></sub> | `epicfight_dd:eclipse` | +5 | +0.3 | +50 pp |
| **Soul Pyre**<br><sub><code>simplyswords:soulpyre</code></sub> | `womplus:greataxe` | +5 | +0.28 | +55 pp |
| **Soulkeeper**<br><sub><code>simplyswords:soulkeeper</code></sub> | `wom:torment` | +5 | +0.24 | +60 pp |
| **Soulrender**<br><sub><code>simplyswords:soulrender</code></sub> | `epicfight_dd:pole_blade` | +5 | +0.25 | +45 pp |
| **Soulstalker**<br><sub><code>simplyswords:soulstalker</code></sub> | `epicfight_dd:pole_blade` | +5 | +0.25 | +45 pp |
| **Soulstealer**<br><sub><code>simplyswords:soulstealer</code></sub> | `epicfight_dd:night_ritus_dagger` | +5 | +0.35 | +25 pp |
| **Star's Edge**<br><sub><code>simplyswords:stars_edge</code></sub> | `wom:staff` | +5 | +0.24 | +25 pp |
| **Storm's Edge**<br><sub><code>simplyswords:storms_edge</code></sub> | `epicfight_dd:battlestaff` | +5 | +0.24 | +25 pp |
| **Stormbringer**<br><sub><code>simplyswords:stormbringer</code></sub> | `epicfight_dd:messer` | +5 | +0.3 | +50 pp |
| **Stormscale**<br><sub><code>simplyswords:stormscale</code></sub> | `wom:agony` | +5 | +0.25 | +45 pp |
| **Sunfire**<br><sub><code>simplyswords:sunfire</code></sub> | `epicfight_dd:milady` | +5 | +0.26 | +30 pp |
| **Sword on a Stick**<br><sub><code>simplyswords:sword_on_a_stick</code></sub> | `epicfight_dd:halberd` | +5 | +0.25 | +45 pp |
| **Tainted Relic**<br><sub><code>simplyswords:tainted_relic</code></sub> | `wom:ruine` | +5 | +0.26 | +30 pp |
| **Tempest**<br><sub><code>simplyswords:tempest</code></sub> | `epicfight_dd:backhand_blade` | +5 | +0.32 | +27 pp |
| **The Devourer**<br><sub><code>simplyswords:the_devourer</code></sub> | `epicfight_dd:bonecutting_saw` | +5 | +0.28 | +50 pp |
| **The Watcher**<br><sub><code>simplyswords:watcher_claymore</code></sub> | `womplus:hollow_longsword` | +5 | +0.25 | +30 pp |
| **Thunderbrand**<br><sub><code>simplyswords:thunderbrand</code></sub> | `epicfight_dd:iudex_halberd` | +5 | +0.25 | +45 pp |
| **Twisted Blade**<br><sub><code>simplyswords:twisted_blade</code></sub> | `wom:ruine` | +5 | +0.25 | +30 pp |
| **Waking Lichblade**<br><sub><code>simplyswords:waking_lichblade</code></sub> | `epicfight_dd:eclipse` | +5 | +0.28 | +50 pp |
| **Watching Warglaive**<br><sub><code>simplyswords:watching_warglaive</code></sub> | `epicfight_dd:backhand_blade` | +5 | +0.24 | +25 pp |
| **Waxweaver**<br><sub><code>simplyswords:waxweaver</code></sub> | `epicfight_dd:messer` | +5 | +0.3 | +50 pp |
| **Whisperwind**<br><sub><code>simplyswords:whisperwind</code></sub> | `epicfight_dd:backhand_blade` | +5 | +0.28 | +27 pp |
| **Wickpiercer**<br><sub><code>simplyswords:wickpiercer</code></sub> | `wom:agony` | +5 | +0.25 | +45 pp |
| **Wraithfang**<br><sub><code>simplyswords:wraithfang</code></sub> | `epicfight_dd:herb_sickle` | +5 | +0.35 | +25 pp |
| **Wraithmaw**<br><sub><code>simplyswords:wraithmaw</code></sub> | `epicfight_dd:herb_sickle` | +5 | +0.32 | +27 pp |

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
| **Candy Cane Sword**<br><sub><code>aether:candy_cane_sword</code></sub> | `epicfight_dd:saber` | +5 | +0.25 | +30 pp |
| **Enchanted Dart Shooter**<br><sub><code>aether:enchanted_dart_shooter</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Flaming Sword**<br><sub><code>aether:flaming_sword</code></sub> | `wom:moonless` | +5 | +0.25 | +30 pp |
| **Golden Dart Shooter**<br><sub><code>aether:golden_dart_shooter</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Gravitite Axe**<br><sub><code>aether:gravitite_axe</code></sub> | `epicfight_dd:steel_axe` | +3 | +0.2 | +30 pp |
| **Gravitite Sword**<br><sub><code>aether:gravitite_sword</code></sub> | `epicfight_dd:milady` | +3 | +0.18 | +19 pp |
| **Hammer Of Kingbdogz**<br><sub><code>aether:hammer_of_kingbdogz</code></sub> | `epicfight_dd:nailbat` | +5 | +0.24 | +60 pp |
| **Holy Sword**<br><sub><code>aether:holy_sword</code></sub> | `epicfight_dd:light_greatsword` | +5 | +0.3 | +50 pp |
| **Holystone Axe**<br><sub><code>aether:holystone_axe</code></sub> | `epicfight:axe` | +1.5 | +0.16 | +22 pp |
| **Holystone Sword**<br><sub><code>aether:holystone_sword</code></sub> | `epicfight:sword` | +1.5 | +0.14 | +13 pp |
| **Lightning Knife**<br><sub><code>aether:lightning_knife</code></sub> | `epicfight_dd:knife` | +5 | +0.35 | +25 pp |
| **Lightning Sword**<br><sub><code>aether:lightning_sword</code></sub> | `epicfight_dd:vitreus` | +5 | +0.28 | +27 pp |
| **Phoenix Bow**<br><sub><code>aether:phoenix_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Pig Slayer**<br><sub><code>aether:pig_slayer</code></sub> | `epicfight_dd:knife` | +5 | +0.35 | +25 pp |
| **Poison Dart Shooter**<br><sub><code>aether:poison_dart_shooter</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Skyroot Axe**<br><sub><code>aether:skyroot_axe</code></sub> | `epicfight:axe` | +1 | +0.14 | +18 pp |
| **Skyroot Sword**<br><sub><code>aether:skyroot_sword</code></sub> | `epicfight:sword` | +1 | +0.12 | +10 pp |
| **Valkyrie Axe**<br><sub><code>aether:valkyrie_axe</code></sub> | `womplus:greataxe` | +4 | +0.22 | +34 pp |
| **Valkyrie Lance**<br><sub><code>aether:valkyrie_lance</code></sub> | `wom:blackstar` | +4 | +0.2 | +22 pp |
| **Vampire Blade**<br><sub><code>aether:vampire_blade</code></sub> | `wom:moonless` | +5 | +0.3 | +50 pp |
| **Zanite Axe**<br><sub><code>aether:zanite_axe</code></sub> | `epicfight:axe` | +2 | +0.18 | +26 pp |
| **Zanite Sword**<br><sub><code>aether:zanite_sword</code></sub> | `epicfight_dd:messer` | +2 | +0.16 | +16 pp |

<a id="weapons-combat-the_beyond"></a>
### The Beyond
2 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Brittle Axe**<br><sub><code>the_beyond:brittle_axe</code></sub> | `epicfight:axe` | +5 | +0.24 | +38 pp |
| **Brittle Sword**<br><sub><code>the_beyond:brittle_sword</code></sub> | `epicfight:sword` | +5 | +0.22 | +25 pp |

<a id="weapons-combat-skylands"></a>
### The Sky Lands
8 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Automaton Sword**<br><sub><code>skylands:automaton_sword</code></sub> | `epicfight_dd:messer` | +5 | +0.22 | +25 pp |
| **Igneus Laser Blade**<br><sub><code>skylands:igneus_laser_blade</code></sub> | `epicfight_dd:vitreus` | +5 | +0.22 | +25 pp |
| **Igneus War Axe**<br><sub><code>skylands:igneus_war_axe</code></sub> | `womplus:greataxe` | +5 | +0.22 | +25 pp |
| **Inky Sword Of The Sky**<br><sub><code>skylands:inky_sword_of_the_sky</code></sub> | `wom:moonless` | +5 | +0.22 | +25 pp |
| **Pale Sword Of The Sky**<br><sub><code>skylands:pale_sword_of_the_sky</code></sub> | `epicfight_dd:milady` | +5 | +0.22 | +25 pp |
| **Pearlecent Sword Of The Sky**<br><sub><code>skylands:pearlecent_sword_of_the_sky</code></sub> | `epicfight_dd:light_greatsword` | +5 | +0.22 | +25 pp |
| **Sword Of The Sky**<br><sub><code>skylands:sword_of_the_sky</code></sub> | `epicfight:sword` | +5 | +0.22 | +25 pp |
| **Verdant Sword Of The Sky**<br><sub><code>skylands:verdant_sword_of_the_sky</code></sub> | `epicfight_dd:messer` | +5 | +0.22 | +25 pp |

<a id="weapons-combat-twilightforest"></a>
### The Twilight Forest
16 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Diamond Minotaur Axe**<br><sub><code>twilightforest:diamond_minotaur_axe</code></sub> | `womplus:greataxe` | +3 | +0.2 | +30 pp |
| **Ender Bow**<br><sub><code>twilightforest:ender_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Fiery Sword**<br><sub><code>twilightforest:fiery_sword</code></sub> | `epicfight_dd:messer` | +4 | +0.2 | +22 pp |
| **Giant Sword**<br><sub><code>twilightforest:giant_sword</code></sub> | `tnk:colossal_blade` | +5 | +0.3 | +50 pp |
| **Glass Sword**<br><sub><code>twilightforest:glass_sword</code></sub> | `epicfight_dd:milady` | +5 | +0.22 | +25 pp |
| **Gold Minotaur Axe**<br><sub><code>twilightforest:gold_minotaur_axe</code></sub> | `womplus:greataxe` | +1.5 | +0.16 | +22 pp |
| **Ice Bow**<br><sub><code>twilightforest:ice_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Ice Sword**<br><sub><code>twilightforest:ice_sword</code></sub> | `epicfight_dd:vitreus` | +5 | +0.22 | +25 pp |
| **Ironwood Axe**<br><sub><code>twilightforest:ironwood_axe</code></sub> | `epicfight:axe` | +2 | +0.18 | +26 pp |
| **Ironwood Sword**<br><sub><code>twilightforest:ironwood_sword</code></sub> | `epicfight:sword` | +2 | +0.16 | +16 pp |
| **Knightmetal Axe**<br><sub><code>twilightforest:knightmetal_axe</code></sub> | `epicfight_dd:steel_axe` | +3 | +0.2 | +30 pp |
| **Knightmetal Sword**<br><sub><code>twilightforest:knightmetal_sword</code></sub> | `womplus:hollow_longsword` | +3 | +0.26 | +42 pp |
| **Seeker Bow**<br><sub><code>twilightforest:seeker_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |
| **Steeleaf Axe**<br><sub><code>twilightforest:steeleaf_axe</code></sub> | `womplus:greataxe` | +3 | +0.2 | +30 pp |
| **Steeleaf Sword**<br><sub><code>twilightforest:steeleaf_sword</code></sub> | `epicfight_dd:milady` | +3 | +0.18 | +19 pp |
| **Triple Bow**<br><sub><code>twilightforest:triple_bow</code></sub> | `epicfight:bow` | Preset | Preset | Preset |

<a id="weapons-combat-wom"></a>
### Weapons of Miracles
13 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Agony**<br><sub><code>wom:agony</code></sub><br><sub>Provisionally retained</sub> | `wom:agony` | Preset | Preset | Preset |
| **Diamond Greataxe**<br><sub><code>wom:diamond_greataxe</code></sub> | `womplus:greataxe` | +4 | +0.24 | +50 pp |
| **Diamond staff**<br><sub><code>wom:diamond_staff</code></sub> | `wom:staff` | +3 | +0.2 | +19 … +25 pp |
| **Golden Greataxe**<br><sub><code>wom:golden_greataxe</code></sub> | `womplus:greataxe` | +2.5 | +0.2 | +39 pp |
| **Golden staff **<br><sub><code>wom:golden_staff</code></sub> | `wom:staff` | +1.5 | +0.16 | +13 pp |
| **Iron Greataxe**<br><sub><code>wom:iron_greataxe</code></sub> | `womplus:greataxe` | +3 | +0.22 | +43 pp |
| **Iron staff**<br><sub><code>wom:iron_staff</code></sub> | `wom:staff` | +2 | +0.18 | +16 … +18 pp |
| **Netherite Greataxe**<br><sub><code>wom:netherite_greataxe</code></sub> | `womplus:greataxe` | +5 | +0.26 | +60 pp |
| **Netherite staff**<br><sub><code>wom:netherite_staff</code></sub> | `wom:staff` | +4 | +0.22 | +22 … +32 pp |
| **Nova**<br><sub><code>wom:nova</code></sub> | `womplus:nova` | Preset | Preset | Preset |
| **Ruine**<br><sub><code>wom:ruine</code></sub><br><sub>Provisionally retained</sub> | `wom:ruine` | Preset | Preset | Preset |
| **Stone staff**<br><sub><code>wom:stone_staff</code></sub> | `wom:staff` | +1.5 | +0.16 | +13 pp |
| **Wooden staff**<br><sub><code>wom:wooden_staff</code></sub> | `wom:staff` | +1 | +0.14 … +0.15 | +10 pp |

<a id="weapons-combat-wildernature"></a>
### WilderNature
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Blunderbuss**<br><sub><code>wildernature:blunderbuss</code></sub> | `epicfight:crossbow` | Preset | Preset | Preset |

<a id="weapons-combat-witchery"></a>
### Witchery
4 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Arthana**<br><sub><code>witchery:arthana</code></sub> | `epicfight_dd:blood_ritus_dagger` | +5 | +0.35 | +25 pp |
| **Cane Sword**<br><sub><code>witchery:cane_sword</code></sub> | `epicfight_dd:messer` | +5 | +0.22 | +25 pp |
| **Death Sickle**<br><sub><code>witchery:death_sickle</code></sub> | `epicfight_dd:war_sickle` | +5 | +0.25 | +45 pp |
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
| **Dragon Guard Shield**<br><sub><code>block_factorys_bosses:dragon_guard_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| **Enhanced Shield**<br><sub><code>block_factorys_bosses:enhanced_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |

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
| **End Stone Rubble Shield**<br><sub><code>enderscape:end_stone_rubble_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| **Kurodite Rubble Shield**<br><sub><code>enderscape:kurodite_rubble_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| **Mirestone Rubble Shield**<br><sub><code>enderscape:mirestone_rubble_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| **Veradite Rubble Shield**<br><sub><code>enderscape:veradite_rubble_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |

<a id="weapons-shields-legendary_monsters"></a>
### Legendary Monsters
5 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Buckler Of Annihilation**<br><sub><code>legendary_monsters:buckler_of_annihilation</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| **Dinosaur Bone Shield**<br><sub><code>legendary_monsters:dinosaur_bone_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| **Frostbitten Shield**<br><sub><code>legendary_monsters:frostbitten_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| **Shulker Shield**<br><sub><code>legendary_monsters:shulker_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| **Spiky Shield**<br><sub><code>legendary_monsters:spiky_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |

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
| **Awakened Ichorium Shield**<br><sub><code>thaumaturgetinker:ichor_shield_gem</code></sub> | `epicfight:shield` | Preset | Preset | Preset |
| **Ichorium Shield**<br><sub><code>thaumaturgetinker:ichor_shield</code></sub> | `epicfight:shield` | Preset | Preset | Preset |

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
| **Sea Staff**<br><sub><code>alexscaves:sea_staff</code></sub> | **Unverified** | Unverified | Unverified | Unverified |
| **Sugar Staff**<br><sub><code>alexscaves:sugar_staff</code></sub> | **Unverified** | Unverified | Unverified | Unverified |

<a id="weapons-tools-ae2"></a>
### Applied Energistics 2
9 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Certus Quartz Hoe**<br><sub><code>ae2:certus_quartz_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Certus Quartz Pickaxe**<br><sub><code>ae2:certus_quartz_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Certus Quartz Shovel**<br><sub><code>ae2:certus_quartz_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| **Fluix Hoe**<br><sub><code>ae2:fluix_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Fluix Pickaxe**<br><sub><code>ae2:fluix_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Fluix Shovel**<br><sub><code>ae2:fluix_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| **Nether Quartz Hoe**<br><sub><code>ae2:nether_quartz_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Nether Quartz Pickaxe**<br><sub><code>ae2:nether_quartz_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Nether Quartz Shovel**<br><sub><code>ae2:nether_quartz_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

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
| **Black Steel Hoe**<br><sub><code>cataclysm:black_steel_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Black Steel Pickaxe**<br><sub><code>cataclysm:black_steel_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Black Steel Shovel**<br><sub><code>cataclysm:black_steel_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-create"></a>
### Create
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Wrench**<br><sub><code>create:wrench</code></sub> | `epicfight:sword` | Preset | Preset | +0 pp |

<a id="weapons-tools-createdieselgenerators"></a>
### Create: Diesel Generators
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Hammer**<br><sub><code>createdieselgenerators:hammer</code></sub> | `epicfight:axe` | Preset | Preset | +12 pp |

<a id="weapons-tools-deep_aether"></a>
### Deep Aether
6 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Skyjade Hoe**<br><sub><code>deep_aether:skyjade_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Skyjade Pickaxe**<br><sub><code>deep_aether:skyjade_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Skyjade Shovel**<br><sub><code>deep_aether:skyjade_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| **Stratus Hoe**<br><sub><code>deep_aether:stratus_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Stratus Pickaxe**<br><sub><code>deep_aether:stratus_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Stratus Shovel**<br><sub><code>deep_aether:stratus_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-deeperdarker"></a>
### Deeper and Darker
6 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Resonarium Hoe**<br><sub><code>deeperdarker:resonarium_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Resonarium Pickaxe**<br><sub><code>deeperdarker:resonarium_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Resonarium Shovel**<br><sub><code>deeperdarker:resonarium_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| **Warden Hoe**<br><sub><code>deeperdarker:warden_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Warden Pickaxe**<br><sub><code>deeperdarker:warden_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Warden Shovel**<br><sub><code>deeperdarker:warden_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-hybrid_aquatic"></a>
### Hybrid Aquatic
6 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Coral Hoe**<br><sub><code>hybrid_aquatic:coral_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Coral Pickaxe**<br><sub><code>hybrid_aquatic:coral_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Coral Shovel**<br><sub><code>hybrid_aquatic:coral_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| **Seashell Hoe**<br><sub><code>hybrid_aquatic:seashell_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Seashell Pickaxe**<br><sub><code>hybrid_aquatic:seashell_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Seashell Shovel**<br><sub><code>hybrid_aquatic:seashell_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-immersiveengineering"></a>
### Immersive Engineering
3 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Hoe Steel**<br><sub><code>immersiveengineering:hoe_steel</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Pickaxe Steel**<br><sub><code>immersiveengineering:pickaxe_steel</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Shovel Steel**<br><sub><code>immersiveengineering:shovel_steel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-legendary_monsters"></a>
### Legendary Monsters
4 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Enderitium Hoe**<br><sub><code>legendary_monsters:enderitium_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Enderitium Pickaxe**<br><sub><code>legendary_monsters:enderitium_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Enderitium Shovel**<br><sub><code>legendary_monsters:enderitium_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| **Somber Key**<br><sub><code>legendary_monsters:somber_key</code></sub> | `epicfight:sword` | Preset | Preset | +3 pp |

<a id="weapons-tools-bakery"></a>
### Let’s Do: Bakery
2 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Rolling Pin**<br><sub><code>bakery:rolling_pin</code></sub> | `epicfight:sword` | Preset | Preset | +0 pp |
| **Small Cooking Pot**<br><sub><code>bakery:small_cooking_pot</code></sub> | `epicfight:greatsword` | Preset | Preset | +15 pp |

<a id="weapons-tools-minecraft"></a>
### Minecraft / Vanilla Backport
19 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Copper Pickaxe**<br><sub><code>minecraft:copper_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Diamond Hoe**<br><sub><code>minecraft:diamond_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | Preset |
| **Diamond Pickaxe**<br><sub><code>minecraft:diamond_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +18 pp |
| **Diamond Shovel**<br><sub><code>minecraft:diamond_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |
| **Golden Hoe**<br><sub><code>minecraft:golden_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | Preset |
| **Golden Pickaxe**<br><sub><code>minecraft:golden_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | Preset |
| **Golden Shovel**<br><sub><code>minecraft:golden_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |
| **Iron Hoe**<br><sub><code>minecraft:iron_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | Preset |
| **Iron Pickaxe**<br><sub><code>minecraft:iron_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +12 pp |
| **Iron Shovel**<br><sub><code>minecraft:iron_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |
| **Netherite Hoe**<br><sub><code>minecraft:netherite_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +10 pp |
| **Netherite Pickaxe**<br><sub><code>minecraft:netherite_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +24 pp |
| **Netherite Shovel**<br><sub><code>minecraft:netherite_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +10 pp |
| **Stone Hoe**<br><sub><code>minecraft:stone_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | Preset |
| **Stone Pickaxe**<br><sub><code>minecraft:stone_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +6 pp |
| **Stone Shovel**<br><sub><code>minecraft:stone_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |
| **Wooden Hoe**<br><sub><code>minecraft:wooden_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | Preset |
| **Wooden Pickaxe**<br><sub><code>minecraft:wooden_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | Preset |
| **Wooden Shovel**<br><sub><code>minecraft:wooden_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |

<a id="weapons-tools-supplementaries"></a>
### Supplementaries
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Wrench**<br><sub><code>supplementaries:wrench</code></sub> | `epicfight:sword` | Preset | Preset | +0 pp |

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
| **Gravitite Hoe**<br><sub><code>aether:gravitite_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Gravitite Pickaxe**<br><sub><code>aether:gravitite_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Gravitite Shovel**<br><sub><code>aether:gravitite_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| **Holystone Hoe**<br><sub><code>aether:holystone_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Holystone Pickaxe**<br><sub><code>aether:holystone_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Holystone Shovel**<br><sub><code>aether:holystone_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| **Skyroot Hoe**<br><sub><code>aether:skyroot_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Skyroot Pickaxe**<br><sub><code>aether:skyroot_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Skyroot Shovel**<br><sub><code>aether:skyroot_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| **Valkyrie Hoe**<br><sub><code>aether:valkyrie_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Valkyrie Pickaxe**<br><sub><code>aether:valkyrie_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Valkyrie Shovel**<br><sub><code>aether:valkyrie_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| **Zanite Hoe**<br><sub><code>aether:zanite_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Zanite Pickaxe**<br><sub><code>aether:zanite_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Zanite Shovel**<br><sub><code>aether:zanite_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-the_beyond"></a>
### The Beyond
3 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Brittle Hoe**<br><sub><code>the_beyond:brittle_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | Preset |
| **Brittle Pickaxe**<br><sub><code>the_beyond:brittle_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | Preset |
| **Brittle Shovel**<br><sub><code>the_beyond:brittle_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | Preset |

<a id="weapons-tools-twilightforest"></a>
### The Twilight Forest
10 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Fiery Pickaxe**<br><sub><code>twilightforest:fiery_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Giant Pickaxe**<br><sub><code>twilightforest:giant_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Ironwood Hoe**<br><sub><code>twilightforest:ironwood_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Ironwood Pickaxe**<br><sub><code>twilightforest:ironwood_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Ironwood Shovel**<br><sub><code>twilightforest:ironwood_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |
| **Knightmetal Pickaxe**<br><sub><code>twilightforest:knightmetal_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Mazebreaker Pickaxe**<br><sub><code>twilightforest:mazebreaker_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Steeleaf Hoe**<br><sub><code>twilightforest:steeleaf_hoe</code></sub> | `epicfight:hoe` | Preset | Preset | +0 pp |
| **Steeleaf Pickaxe**<br><sub><code>twilightforest:steeleaf_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |
| **Steeleaf Shovel**<br><sub><code>twilightforest:steeleaf_shovel</code></sub> | `epicfight:shovel` | Preset | Preset | +0 pp |

<a id="weapons-tools-witchery"></a>
### Witchery
1 entry

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Koboldite Pickaxe**<br><sub><code>witchery:koboldite_pickaxe</code></sub> | `epicfight:pickaxe` | Preset | Preset | +0 pp |

</details>

## Excluded WoM weapons

**Retained:** six staffs, four greataxes and Nova. **Provisionally retained:** Agony and Ruine.

The following original items are excluded from recipes, loot and recipe viewers. Their native capability definitions can still be reused as movesets by other weapons. Their entries here do not enable the items.

<a id="weapons-excluded-wom"></a>
### Weapons of Miracles
14 entries

| Weapon / item | Combat type | Damage bonus | Speed bonus | Armor negation bonus |
| --- | --- | ---: | ---: | ---: |
| **Antitheus**<br><sub><code>wom:antitheus</code></sub> | `wom:antitheus` | Preset | Preset | +20 pp |
| **Blackstar**<br><sub><code>wom:blackstar</code></sub> | `womplus:blackstar` | Preset | Preset | +25 pp |
| **Clawed Gauntle**<br><sub><code>wom:jabberwocky</code></sub> | `wom:clawed_gauntle` | Preset | Preset | Preset |
| **Ender blaster**<br><sub><code>wom:ender_blaster</code></sub> | `wom:ender_blaster` | Preset | Preset | Preset |
| **Evil Ôdachi**<br><sub><code>wom:evil_tachi</code></sub> | `womplus:evil_tachi_reift` | Preset | Preset | +10 pp |
| **Gesetz**<br><sub><code>wom:gesetz</code></sub> | `wom:gesetz` | Preset | Preset | +20 pp |
| **Herrscher**<br><sub><code>wom:herrscher</code></sub> | `wom:herrscher` | Preset | Preset | Preset |
| **Hollow Longsword**<br><sub><code>wom:hollow_longsword</code></sub> | `womplus:hollow_longsword` | +3 | +0.15 | +20 pp |
| **Moonless**<br><sub><code>wom:moonless</code></sub> | `wom:moonless` | Preset | Preset | Preset |
| **Napoleon**<br><sub><code>wom:napoleon</code></sub> | `wom:napoleon` | Preset | Preset | Preset |
| **Orbit**<br><sub><code>wom:orbit</code></sub> | `wom:orbit` | Preset | Preset | Preset |
| **Satsujin**<br><sub><code>wom:satsujin</code></sub> | `wom:satsujin` | Preset | Preset | Preset |
| **Solar**<br><sub><code>wom:solar</code></sub> | `wom:solar` | Preset | Preset | +20 pp |
| **Torment**<br><sub><code>wom:tormented_mind</code></sub> | `wom:torment` | Preset | Preset | +50 pp |

## Snapshot and coverage

Updated 2026-11-18. Source: `TNK3_CB_1.1.2_Native_Combat.zip`.
Archive SHA-256: `93612dbc6b48f8fd1133c9dbb01e799c8f19ba70b899dd24cbad09268dac3f97`.

The inventory contains 633 explicit item mappings: 568 pack overrides and 65 additional mappings from the installed combat JARs. A further 10 native class/keyword mappings are verified, and 3 registered items are listed with unverified combat styles. No type or stats are invented for those entries. Knaves’ Needs includes only the pack’s confirmed Twilight Forest weapons. This is a dated static reference, not a live registry dump. Listing an item is not a guarantee of a crafting or loot route.

Installed combat versions: Epic Fight 21.17.3.1, Weapons of Miracles 2.0.178, WoM Plus 21.17-1.0.1, Dawn Day 21.17.1.2.1.

WoM Plus’s optional `wom_override` pack is enabled in the supplied server reference. Its three conditional native assignments are recorded in the CSV/JSON. Other field-guide chapters still describe Beta 1.0.

This is documentation only: no weapon capabilities, scripts, stats, recipes or progression files are changed by this overview.

[Artwork credits](../handbook-source/current/assets/weapons/ASSET_CREDITS.md)
