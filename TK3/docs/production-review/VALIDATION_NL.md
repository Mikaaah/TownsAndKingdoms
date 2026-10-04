# Statische controles

De gerepareerde bronnen zijn opnieuw gecontroleerd na herstel van de werkomgeving. Minecraft is niet gestart.

| Controle | Resultaat |
| --- | --- |
| JavaScript-syntax | 26 meegeleverde scripts parseren |
| Recipe-event-volgorde | 1.972 overgebleven declaraties, 1.972 unieke IDs, 0 dubbele IDs |
| Directe itemverwijzingen | Geen onbekende directe verwijzingen in de receptcatalogus |
| Assets | 132 geregistreerde item-texture-bindings en 11 custom block/frame-modellen |
| Atlas/modellen | Textures bestaan en worden gestitcht; geen modelcyclus |
| Afbeeldingen | Alle 177 behouden PNG-bestanden zijn ongewijzigd |
| Tier-tags | Tien mechanismen elk in hun juiste tier; 228 unieke geregistreerde item IDs |
| Generators | 17 verschillende lens/frame-paren |
| Hoofdprogressie | Alle 10 mechanismen bereikbaar in het afhankelijkheidsmodel |
| ZIP | CRC en SHA-256-bestandslijst gecontroleerd bij het verpakken |

## Afhankelijkheidsmodel

`tools/validate_dependencies.py` combineert de daadwerkelijke scriptrecepten met native recepten/tags. Items, fluids en chemicals worden apart behandeld. Een route moet ingrediënten, behouden katalysatoren en productieapparaten kunnen verkrijgen. Native recepten die door de scripts/whitelist worden verwijderd, tellen niet mee als oplossing.

De snapshot bevat 7.629 gededupliceerde recepten en 954 getypeerde tags uit Minecraft 1.21.1, Create 6.0.10, AE2, Mekanism, Ars Nouveau en relevante Create/magic-addons. NeoForge common tags komen uit de officiële 1.21.1-bron. Versies, hashes en herkomst staan in `tools/native_recipe_snapshot.json`.

De bewijsroutes en wereldgrenzen staan in `docs/dependency_validation.json`. Niet alle optionele serializers zijn gemodelleerd. De 91 overgeslagen optionele scriptrecepten staan expliciet in dat rapport; hun productie- en runtimegedrag is niet gecertificeerd.

## Expliciete grenzen en aannames

- Wereldgrondstoffen, hout/zaden, gewassen, mobdrops, melkkoeien, charged creepers, archwood, XP-flessen via cleric trading, vier meteorite-presses en bossdrops zijn opgegeven beginbronnen.
- Lava/water-casting, generatorblokken, ore-breaking en het behouden Dragon Head zijn native wereldmechanieken. Beschikbaarheid vanaf die bronnen betekent niet dat eerste exploratie/handelingen zijn overgeslagen.
- Water Wheel geeft rotatie; Alternator of Heat Generator levert FE. Crop Sourcelink/Source Jar/gewassen levert Source. Imbuement heeft passieve Source-generatie; pedestal-items blijven nodig.
- Een glass bottle op een charged creeper geeft Iron's Spells Lightning Bottle. Dit bootstrapt het Energized Core; daarna kan Channeler liquid lightning leveren.
- Mana Siphon verzamelt spell mana. De native spelers/casterbron is een expliciete modelaanname; de opbrengst en automatisering zijn niet gesimuleerd.
- Fission, SPS en AE2 Matter Condenser staan als afzonderlijke wereldregels in het model omdat hun gedrag geen gewone JSON-craft is. Chemical Crystallizer levert het eerste antimatter-pellet vóór de Nucleosynthesizer.
- De gebruikte conditional native routes nemen de geselecteerde T&K3-stack aan: AE2 en Enchantment Industry aanwezig, Mekanism diamond dust aanwezig, Create Manacology en Ex Nihilo Sequentia afwezig.

De controles voeren geen Minecraft recipe codecs, multiplayer, productiesnelheden, energietarieven, volledige zelfvoorzienende fabrieken of afzonderlijke quest/stage-unlocks uit. Dit is een statisch gecontroleerde reparatie. Volg `INSTALL_NL.md` en voer een volledige herstart plus testwereldcontrole uit.

## Opnieuw uitvoeren

Gebruik vanuit de uitgepakte pakketmap `python3 tools/validate_static.py`, met Python 3 en Node.js beschikbaar. Na bewuste receptwijzigingen: draai eerst `node tools/inspect_recipes.cjs --refresh`, bekijk de vernieuwde whitelist/catalogus en voer daarna de validator uit. De native snapshot is controlegegeven en wordt niet als datapack geïnstalleerd.
