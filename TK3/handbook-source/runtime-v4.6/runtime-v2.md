# KubeJS runtime v2 · current package

**Minecraft 1.21.1 · updated 6 October 2026 · 684 supplied files**

The fixed runtime refresh contains **1,788 unique explicit recipe IDs** across ten tier scripts, core recipe scripts, 40 compatibility modules, and recipe-system cleanup, whitelist, and final-sanity scripts. This is a source-code ID scan. The reviewed 1,972-recipe catalogue is a separate authored production dataset and remains available through the existing recipe review pages.

## Progression and stages

The ten chapters run **Rotation → Sealed → Precision → Calculation → Inductive → Arcane → Chemical Engineering → Containment → Singularity → Sovereign**. Fourteen FTB Quest milestones synchronize tier or boss-focus stages; all 14 IDs match quests in the current canonical chapter files. Nine tier stages restrict only tier-defining machines and equipment anchors; recipes and mechanisms carry the ordinary progression cost. Future-tier items can be picked up, stored, and viewed in recipe viewers, but cannot be used, placed, or activated early. Mekanism item logistics begin at Tier 7; elite and ultimate transporters begin at Tier 8. AE2 basic network parts remain available while Controller and Drive are Tier 4 anchors.

## Custom items and frames

The refresh registers **214 custom items** and **3 machine-frame blocks**, with matching supplied models, blockstates, and textures. Item registrations require a full client/server restart. The current complete ID inventory is in the runtime manifest.

## Reusable boss catalyst lenses

One `kubejs:tk3_catalyst_lens` item carries tint and custom name data: Empty (white), Netherstar (pale blue), Everburning (orange), Voidguard (violet), and Accursed (green). Charge a blank lens in the Ars Nouveau apparatus with Nether Star (3,000 source), Ignitium Ingot (5,000), Gauntlet of Guard (7,000), or Cursium Ingot (9,000). The colored lenses are reusable catalysts at the Wither, Ignis, Ender Guardian, and Maledictus mechanism steps in Tiers 7–10.

## Compatibility

The current package separates integrations into 40 mod-specific modules, including AE2, Create, Mekanism, Ars Nouveau, Cataclysm, Minecraft, biome/content mods, and Sophisticated Storage. See [all compatibility module names](https://github.com/Mikaaah/TownsAndKingdoms/blob/main/TK3/docs/COMPAT_RUNTIME_V2.md).

## Skill tree

Skill tree v4.6.0 contains **1,801 nodes and 1,800 graph edges** on a unique 120 × 120 grid. It has six classes, eighteen subclasses, eight professions, six wildcard constellations, and eight shared constellations. Every node costs one point; the script recommends a 150-point cap. Current layout fingerprint: `4f6e469f`.

[Read the full skill tree guide](../skill-tree/) · [Open the Skilltree Builder](../../skilltree-builder/) · [Browse the node catalogue](../skill-nodes/)

## Validation status

All 72 JavaScript files pass Node syntax checks; all 135 JSON files parse; explicit recipe IDs are unique; and the skill tree has unique cells and a connected graph. A Minecraft client/server boot has not been run. The 353-quest campaign stays canonical because the supplied quest ZIP is an older snapshot.

[Full runtime manifest](https://github.com/Mikaaah/TownsAndKingdoms/blob/main/TK3/docs/RUNTIME_V2_MANIFEST.json)
