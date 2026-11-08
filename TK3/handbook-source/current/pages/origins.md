# Choose your origin

Your background gives a small, useful advantage without deciding your equipment or factory path. Open Character, preview a card, and confirm the combination you like. The chooser has three pages and twenty original icons.

| Origin | Perk one | Perk two |
|---|---|---|
| Deepdelver | +10% ore mining speed. | 5% chance for an extra raw ore from natural deposits. |
| Woodcutter | +15% log chopping speed. | 5% chance for an extra natural log. |
| Homesteader | +10% mature crop yield when harvested by hand. | 10% less hunger from exhaustion. |
| Stablehand | 10% shorter animal breeding cooldowns. | +15% movement speed for living mounts you control. |
| Riverfolk | 10% shorter fishing wait. | +15% vanilla fishing XP. |
| Huntsman | +5% bow and crossbow damage. | +10% meat and leather drops from your kills. |
| Forgehand | 10% of anvil repair XP refunded; normal requirements apply. | 10% less weapon durability loss. |
| Stonemason | +15% stone breaking speed. | +0.5 block reach while holding a building block. |
| Millwright | +10% engineering activity XP. | +1 block interaction reach while holding a wrench. |
| Librarian | 10% of enchanting XP refunded; normal requirements apply. | +15% XP recovered through grindstone disenchanting. |
| Apothecary | +15% duration for beneficial potions you drink. | +10% healing from instant health potions you drink. |
| Hedge Herbalist | +10% natural health regeneration. | 10% chance for an extra gathered flower or mushroom. |
| Caravan Trader | 10% lower villager buying prices, rounded down. | +15% vanilla trading XP. |
| Wayfarer | +5% movement speed. | 20% less fall damage. |
| Deckhand | +15% swimming speed. | +5 seconds of underwater breathing time. |
| Town Watch | +1 armour point. | +10% knockback resistance. |
| Street Urchin | +15% sneaking speed. | 10% shorter hostile detection range while sneaking. |
| Gravekeeper | 10% less damage from undead attackers. | +15% vanilla XP from undead kills. |
| Temple Acolyte | +2 maximum health (one heart). | 10% shorter harmful potion effects. |
| Hedge Mage | +5% maximum mana. | +5% mana regeneration. Requires Iron's Spells mana attributes. |


## Understand the perk's scope

- **Deepdelver and Woodcutter:** natural deposits/logs only; suitable tools apply. A bonus is one extra item, not a copied Fortune stack.
- **Homesteader:** mature crop breaks by hand. Other mods' right-click harvesting and machine harvesting are outside this hook.
- **Stablehand:** the speed bonus applies to a living mount you control. Boats use another movement system.
- **Forgehand and Librarian:** refunds use XP points actually spent, preserving normal requirements. Repair refunds require an actual repair; a rename is not enough.
- **Apothecary:** drinking potions, rather than splash or lingering effects.
- **Stonemason and Millwright:** block interaction reach, not attack reach. Hold the appropriate building block or supported wrench.
- **Street Urchin:** reduces sneaking detection range; it does not clear an existing target.
- **Hedge Mage:** requires Iron's maximum-mana and regeneration attributes. Unified mana is handled by the existing integration; no duplicate Ars bonus is added.

Fractional rewards carry forward where the implementation supports them. Stable modifier IDs prevent bonuses stacking through repeated refreshes. Maximum-health bonuses do not immediately heal you.

## Existing characters

Previously confirmed choices retain their saved origin and perk revision. This includes the former Librarian's different refund values. Choosing the new Librarian on a new character uses the values above.

## Changing a choice

Origin administration requires permission level 2 and an online target. It changes the origin, without clearing skills, titles, equipment or character progress.

~~~text
/tnkprogress origin get PlayerName
/tnkprogress origin set PlayerName tnk:deepdelver
/tnkprogress origin reset PlayerName
~~~

After a reset, close and reopen Character. Origin selection is independent of cosmetic and passive titles.
