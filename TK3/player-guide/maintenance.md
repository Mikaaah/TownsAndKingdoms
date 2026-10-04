# Towns & Kingdoms — website onderhouden

De website is een statisch handboek. Alle pagina’s gebruiken dezelfde template. Je hoeft geen header, footer of CSS naar een nieuwe pagina te kopiëren. De bestaande GitHub Pages-locatie en het pad `/TownsAndKingdoms/` blijven behouden.

## Waar pas je iets aan?

| Onderdeel | Bronbestand |
|---|---|
| Paginatitels, introducties, categorieën en navigatie | `TK3/handbook-source/site.config.json` |
| Homepage-teksten | `TK3/handbook-source/home.json` |
| Features, engineering, magic, exploration, kingdoms en automation | Gelijknamige `.md`-bestanden in `TK3/handbook-source/` |
| Progression-uitleg en machineframes | `TK3/handbook-source/progression.html` |
| Recepten, hoofdstukken, doelen, afhankelijkheden en beloningen | `TK3/docs/progression_manifest.json` |
| Geselecteerde mods en selectie-/ontwikkelnotities | `TK3/docs/MODLIST.md` |
| Mods en tiers | `TK3/docs/MOD_TIER_MAP_EN.md` |
| Vergelijking tussen T&K2 en T&K3 | `TK3/docs/CHANGELOG_3.0.md` |
| Kleuren, typografie, afstanden en responsive indeling | `TK3/handbook-source/site.css` |
| Header, sidebar, breadcrumbs, inhoudsopgave en footer | `TK3/handbook-source/site-template.cjs` |
| Homepage- en overzichtsindeling | `TK3/handbook-source/site-content.cjs` |
| Officiële logo’s en afbeeldingen | `TK3/handbook-source/brand/` |
| Automatische bouw en publicatie | `.github/workflows/publish-player-guide.yml` |

`TK3/player-guide/` is de gebouwde website. Pas bij gewone wijzigingen de bronnen aan. GitHub Actions bouwt en controleert de website opnieuw en publiceert de uitkomst. Als de controle faalt, wordt de vorige werkende publicatie behouden. De bronbestanden zijn leidend, ook als de ingecheckte build nog ouder is.

## Een tekst wijzigen

Open bijvoorbeeld `TK3/handbook-source/magic.md` via GitHub → potloodje. Markdown gebruikt eenvoudige koppen en links:

```md
## Your first spell

Write the explanation here.

[Open the recipe catalogue](../../recipes/)
```

Gebruik Engels voor de bezoekerspagina’s, zoals de bestaande documentatie. Gebruik één paginatitel; secties beginnen met `##` en subsecties met `###`. Langere pagina’s krijgen automatisch een inhoudsopgave. De zichtbare paginatitel en korte introductie komen uit `site.config.json`.

## Een pagina toevoegen

1. Maak `TK3/handbook-source/content/farming.md` met je tekst.
2. Voeg onderstaande entry toe aan de `pages`-lijst in `site.config.json`:

```json
{
  "route": "3.0/farming/",
  "title": "Farming guide",
  "summary": "Build a reliable crop farm for your workshop.",
  "category": "building",
  "source": "content/farming.md"
}
```

De pagina wordt automatisch gebouwd, krijgt de gedeelde stijl, verschijnt in de juiste navigatiegroep, in het guide-overzicht en in de globale zoekfunctie. `route` eindigt met `/` en moet uniek zijn. Beschikbare categorieën: `start`, `building`, `adventure`, `reference`, `legacy`. Voor historische documentatie voeg je `"version": "2.0"` toe. Met `"menu": false` verberg je een pagina uit de sidebar.

Links in Markdown zijn relatief aan de uiteindelijke pagina. Vanaf `3.0/farming/` verwijst `../../recipes/` naar de receptenpagina. Gebruik voor een nieuwe afbeelding bijvoorbeeld `../../assets/brand/example.png`. Vermijd links zoals `/recipes/`: die slaan het GitHub Pages-projectpad over.

## Navigatie veranderen

Verplaats een entry in `pages` om de volgorde binnen een groep aan te passen. Wijzig `category` om een pagina naar een andere groep te verplaatsen. De groepsnamen staan bij `groups`, de bovenste navigatie bij `topNavigation`. Dezelfde metadata voeden sidebar, paginaheader, guide-overzicht en zoekindex.

Wijzig de huidige routes liever niet: bestaande bookmarks blijven dan werken. De oude `/progression/#recipes` en `/progression/#chapters` links verwijzen automatisch naar de nieuwe pagina’s; zonder JavaScript staan er expliciete vervolglinks. De oude `/3.0/progression/` blijft beschikbaar.

## Assets en kleuren vervangen

Vervang een bestand in `brand/`, of voeg een nieuw bestand toe en wijzig de verwijzing bij `assets` in `site.config.json`. `banner` is de homepage-illustratie; `icon` het kleine navigatie-icoon en favicon. De aangeleverde originelen staan als `kingdom-landscape.png`, `kingdom-banner.png`, `kingdom-scene.png` en `kingdom-icon.png` in deze map. Ook de bestaande transparante logo’s zijn behouden. Afbeeldingen behouden hun verhouding; transparantie blijft intact.

Het palet staat in de `:root`-variabelen bovenaan `site.css`. Bijvoorbeeld:

```css
--bg: #171322;
--surface: #211b2e;
--gold: #f0ca68;
--muted: #c1b7cb;
```

`--building`, `--adventure`, `--reference` en `--legacy` geven categorieën een herkenbaar accent. Controleer na kleurwijzigingen het tekstcontrast. `workshop.css` bevat alleen de specifieke indeling van de 3D-receptweergave; gedeelde kleuren komen uit dezelfde variabelen.

## Productiecontrole van 4 oktober

De huidige wiki-recepten komen uit `TK3/docs/wiki_production_manifest.json`. Dit is de **bedoelde** productie uit de gecontroleerde ZIP; bekende blokkades staan op `/renewability/`. De gepubliceerde game- en questbestanden gebruiken nog `TK3/docs/progression_manifest.json` en zijn bij deze wiki-update niet gewijzigd.

De bronmomentopname staat in `TK3/docs/production-review/source/`; `authoring-metadata.json` bevat de oorspronkelijke labels. `node TK3/tools/review_production.cjs` reconstrueert het webmanifest en `review.json`, inclusief dubbele declaraties en een recursieve grondstoffen-/machine-inventaris voor alle tien mechanisms. De inventaris vermeldt externe/native grenzen expliciet en certificeert deze niet automatisch. Bouw de website daarna opnieuw. Werk `renewability.md` bij wanneer een probleem daadwerkelijk opgelost en getest is.

## Projectgegevens wijzigen

De receptcatalogus, questlijst, workshop en aantallen komen uit hetzelfde progression-manifest. Werk bij gameplay-wijzigingen ook de bijbehorende runtime-scripts en questbestanden bij volgens de projectprocedure. Een websitewijziging verandert de gamebestanden niet. Bewaar exacte item-ID’s, aantallen en receptvoorwaarden.

Het T&K2-archief en de 11 oorspronkelijke Markdown-pagina’s staan in `TK3/wiki-archive/2026-10-02/`; de originele bestanden blijven byte voor byte bewaard. De zichtbare archiefpagina’s gebruiken de nieuwe stijl, met een blijvend legacy-label. Oorspronkelijk onvoltooide pagina’s zijn als zodanig aangeduid.

## Lokaal bouwen en controleren

Installeer Node.js 22 en Python 3 op een ontwikkelcomputer. Vanuit de repository-root:

```sh
npm install --prefix TK3/handbook-source --ignore-scripts
node TK3/tools/build_handbook.cjs
python3 TK3/tools/verify_handbook.py
python3 -m http.server 8000 --directory TK3/player-guide
```

Open `http://localhost:8000/`. De live versie gebruikt `/TownsAndKingdoms/`; relatieve links werken in beide situaties. Zoekfuncties laden hun JSON via HTTP, dus open voor een interactieve test geen losse `file://` HTML.

De controle telt alle pagina’s, controleert lokale bestanden en sectielinks, dubbele IDs, paginatitels, actieve navigatie, beeldbeschrijvingen, de recepten/quests en de oorspronkelijke archiefbestanden. Gebruik ook [de responsive preview](https://mikaaah.github.io/TownsAndKingdoms/maintenance/preview/) om iedere pagina op 375, 768 en 1280 pixels te bekijken. Controleer daarnaast visueel op desktop, tablet en mobiel: navigatiemenu, toetsenbordfocus, zoeken, receptfilters, 3D-workshop en tabellen. Brede tabellen mogen binnen hun eigen kader schuiven; de hele pagina hoort niet horizontaal te scrollen.

## Publiceren

Sla wijzigingen op in `main`. De bestaande workflow **Publish T&K3 player guide** installeert de build-afhankelijkheden, bouwt alle pagina’s, voert de controle uit en publiceert naar GitHub Pages. Bekijk de status onder Actions. Er is geen nieuw hostingplatform of database nodig.

Voor de 3D-viewer hoef je niets opnieuw te bundelen bij tekst- of stijlwijzigingen. De bestaande gebundelde viewer en bronvermeldingen blijven behouden. Verander alleen de viewerbronnen als je ook de modeltests en asset-buildprocedure uitvoert.


## Alpha-wiki en brongegevens

- `data/alpha-mods.json` bevat alleen de projecten uit de aangeleverde `modlist.html`, inclusief de bronhash. Werk deze lijst bij bij een nieuwe alpha-export; jarversies en instellingen staan niet in dit bestand.
- `guides/*.md` bevat de nieuwe spelersgidsen. De navigatie en `source` staan centraal in `site.config.json`. De catalogi worden door `wiki-guides.cjs` uit `data/*.json` opgebouwd.
- Voor een gewijzigde skilltree: `node TK3/tools/extract_skilltree_guide.cjs /pad/naar/TK3_SkillTree.js`. Dit vernieuwt `data/skilltree.json`; bouw daarna de wiki. De extractor schrijft geen Minecraft-runtimebestanden.
- Spell-, glyph-, item- en boekreferenties bevatten de gebruikte bronversie of commit. Vervang ze alleen na controle van de makerbron. Geef een reference release nooit automatisch het label geïnstalleerde packversie.
- Controleer na een wijziging de nieuwe inhoud met `node TK3/tools/verify_wiki_guides.cjs`, bouw met `node TK3/tools/build_handbook.cjs` en draai de bestaande websitecontrole.
- Zoekvelden combineren alle ingevoerde woorden; dropdowns filteren op exacte kolomwaarden. Tabellen blijven zonder JavaScript zichtbaar en kunnen met toetsenbord worden gescrold.
