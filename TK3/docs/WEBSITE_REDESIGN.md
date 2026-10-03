# Website redesign · 3 October 2026

The website remains at https://mikaaah.github.io/TownsAndKingdoms/ and uses the existing GitHub Pages deployment. The runtime recipe and quest files are unchanged by this redesign.

## Audit and implemented changes

| Before | After |
|---|---|
| Different shells and competing styles on the progression page | One shared header, navigation, page header, footer and visual system |
| Most subpages lacked an active navigation marker | Current-page markers and version-aware breadcrumbs |
| Chapters, 1,499 recipes and explanations mixed in one long page | Separate progression, chapter and recipe pages, with compatibility links |
| Search available only on the homepage | Global keyboard-accessible search on every page; separate version filter |
| Long guide and mod lists were difficult to scan | Categorised guide finder, recipe filters and searchable reference tables |
| Archive release headings competed with the page title | One visible page title; original release sections retained below it |
| Repeated mod/tier content copies | Canonical MODLIST and MOD_TIER_MAP documents used directly |
| Source edits did not trigger rebuilding on publication | Automatic source build and checks before GitHub Pages deployment |

The five supplied images were inspected before choosing the final palette. The original artwork files are retained, including transparency and proportions. The homepage uses the supplied moonlit mountain/castle landscape. Purple, burgundy and gold establish the identity; topic accents distinguish building, adventure, project reference and legacy content.

## Structure and editing

The visitor categories are **Start here**, **Build & automate**, **Explore & grow**, **Project reference**, and **T&K2 archive**. The homepage explains the pack, exposes the next useful guides, and clearly distinguishes the developing T&K3 pack from the historical archive.

`handbook-source/site.config.json` centrally controls page metadata and navigation. `home.json` holds homepage copy. Markdown files hold guide text; the progression manifest supplies catalogue and quest data. `site-template.cjs` provides the shared layout and generated contents lists. `site.css` contains the shared design tokens. New Markdown pages declared in the configuration automatically receive navigation, style, guide-directory placement and search indexing.

See `TK3/handbook-source/MAINTENANCE_NL.md` for concrete Dutch editing instructions. The published `maintenance/preview/` utility provides genuine iframe viewports for checking future edits at mobile, tablet and desktop widths.

## Verification

- The build and static verifier pass for 33 HTML pages: 31 visitor pages, the maintenance preview and the 404 page.
- 3,506 local references, including file paths and section fragments, resolve in the generated tree.
- All 1,499 authored recipes and 159 quests match the canonical progression manifest.
- All 11 original Markdown archive pages are unchanged byte for byte.
- Every page has one main heading, shared styles and meaningful image alternative text. Content pages have active navigation; long pages have section links.
- Browser checks cover all 31 visitor pages at 375, 768 and 1280 pixel iframe widths: 93 layouts, with no horizontal document overflow. Wide tables scroll within their own containers.
- Global search, the legacy/current search filter, the `/` shortcut, menu focus cycling and Escape closure, guide filtering, reference-table filtering, recipe tier/process/query filters, item-ID visibility and expand/collapse controls were exercised.
- Workshop selection, ordered operations, next/restart controls and family/tier/reset filters were exercised. The catalogue has 1,499 authored entries; the workshop has 1,500 entries including its explicitly labelled native reference.
- Existing routes remain, including `3.0/progression/`. The former progression recipe/quest section URLs redirect through client-side compatibility handling and retain readable fallback links.
- GitHub Pages successfully rebuilt and deployed the redesign on the original project path.

## Verification limits

The browser tests use Chromium and real iframe viewport sizes, rather than physical devices or multiple browser engines. This test browser disables WebGL; the 3D canvas could not be visually verified. The existing model viewer is preserved, the readable fallback works, and its CPU geometry tests run during deployment. No Minecraft runtime launch was needed for website changes.

Externally hosted historical images, video embeds and official source links remain external references. They are preserved, but the local link verifier does not claim their continued availability. The new branding and website assets are shipped locally with the website.
