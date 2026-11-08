# Unidentified Loot

Bring equipment discoveries back from your expeditions, identify what you find, and decide what deserves a place in your loadout. The custom loot system connects modded equipment with Apotheosis affixes, discovery and salvaging.

## Rarity and tier are different

Tier identifies the equipment/progression band. Rarity controls the quality of its roll. A brighter rarity does not make every lower-tier weapon stronger than every higher-tier one.

| Rarity | Colour |
|---|---|
| Common | White |
| Uncommon | Green |
| Rare | Pink |
| Epic | Purple |
| Legendary | Light blue |
| Mythic | Orange |

The supplied config defines separate ordinary and boss weights, tier affix bands and progression rarity caps. These are weighted rolls, not percentages printed directly from a weight.

## Identify and discover

Use the identifier interfaces and the Create **Mechanical Identifier** where available in the installed mod. The collection and pool previews help you inspect what you have discovered; unexplored rewards can remain silhouettes.

Identification payments use **vanilla XP points**. They are separate from Character activity XP. Check the displayed cost before confirming a batch.

## Boss rewards

The supplied boss-reward config contains **48 pool definitions**. They include encounters from Cataclysm, Iron's Spells, Mowzie's, Twilight Forest, Aether and other equipment-bearing bosses where their items are available.

A configured definition is not proof that a particular encounter spawned in your world. Pools depend on installed IDs, enabled entries and normal loot events. Signature affixes can apply themed effects with configured cooldowns.

## Salvaging

Unwanted discoveries can be salvaged. The supplied feature config enables discovery collection, previews, rarity reveals and salvaging. Salvage values rise with rarity, while XP costs and a maximum refund fraction limit recycling.

The configured rarity credits are **1, 2, 4, 7, 12, 20**, with the refund fraction capped at **0.4**. These values belong to the supplied loot configuration; the interface remains the authority for a particular item and mod build.

## Explore beyond the Overworld

Dimension routing covers Aether, Twilight, Nether and End equipment families. Global equipment can coexist with local pools. The selected ports and addons decide which exact pieces are registered.

These rules describe the loot mod and configuration shipped together in Beta 1.0. Use the [current pack reference](../status/) when checking an installation.
