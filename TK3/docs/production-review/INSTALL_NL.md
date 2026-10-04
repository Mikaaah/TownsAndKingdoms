# Installatie

Doel: de bestaande T&K3-instance op Minecraft 1.21.1 / NeoForge, met de bijbehorende KubeJS-integraties. Het questbook wordt afzonderlijk beheerd.

1. Sluit Minecraft en stop de server.
2. Maak een backup van de wereld en de bestaande `kubejs`-map. Bewaar de backup buiten actieve scriptmappen.
3. Pak de ZIP uit in een tijdelijke map. Kopieer de meegeleverde `kubejs`-bestanden naar dezelfde paden in je instance/server en vervang gelijknamige bestanden. Installeer ook het nieuwe `recipes/tk3_bootstrap.js`.
4. Bewaar je afzonderlijke `config/ftbquests`, SkillTree-integratie en `server_scripts/progression/tk3_stages.js`. Die zijn niet meegeleverd. Verwijder dus niet de hele bestaande `kubejs`-map.
5. Gebruik hetzelfde productiepakket op client en server. Bewaar geen oude kopieën met extensie `.js` in actieve scriptmappen of submappen: KubeJS kan die ook laden.
6. Start client en server volledig opnieuw. Startup-registraties en modellen vereisen een herstart; alleen `/reload` is onvoldoende.

## Testwereld

Controleer de startup/serverlogs op KubeJS-fouten en ontbrekende serializers. Bekijk de recepten in JEI en test:

- Handplanken → Makeshift Rotation → Rotation Machine → Press/Deployer → Rotation Mechanism.
- Raw Copper → Copper Sheets → Fluid Pipes → Spout/Pump → Empty Tube → Sealed Mechanism.
- Precision → AE2-processorassemblages met behouden presses → Calculation.
- Create-bootstrap voor Basic Control Circuit → Inductive → Mekanism-fabrieken.
- Arcane → Chemical → Containment → SPS/antimatter → Singularity → Sovereign.
- Generatorselectoren, de 10 mB XP-bottle-conversie en de renewable recepten.

Gebruik je eigen questbook om AStages-unlocks te controleren. De statische afhankelijkheidscontrole simuleert die externe integratie niet.

## Nieuwe generatorselectoren

Een normale lava/water-generator maakt cobblestone of stone. Plaats direct onder het gegenereerde blok de lens en twee blokken eronder het frame. Beide blijven staan.

| Uitkomst | Lens | Frame |
| --- | --- | --- |
| Netherrack | Nether Bricks | Precision Machine |
| Blackstone | Polished Blackstone | Precision Machine |

De overige vijftien combinaties staan in `docs/progression_manifest.json`. Scoria/Scorchia blijven beschikbaar via hun bestaande selectoren.
