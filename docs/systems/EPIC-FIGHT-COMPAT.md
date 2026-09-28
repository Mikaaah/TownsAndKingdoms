# Epic Fight Compatibility Strategy

Epic Fight is the locked combat foundation for T&K3.

## Principle

Weapon selection is driven by T&K progression and build variety. Compatibility must adapt chosen weapons to Epic Fight — not force the pack to choose only mods that already have somebody else's compat.

## Initial weapon/content ecosystems

- Epic Fight
- Weapons of Miracles
- L_Ender's Cataclysm
- T&K manufactured weapons
- additional weapon mods only after balance/role review

Weapons of Miracles currently has an official 1.21.1 NeoForge line, so it is a strong source for high-identity weapons, animations and innate-skill ideas. Cataclysm weapons should be treated as boss-derived/special equipment rather than automatic best-in-slot gear.

## T&K-owned compatibility layer

Prefer a dedicated `tnk_compat` datapack/resource layer (and a small Java module only where needed).

For ordinary weapons:
- assign/inherit Epic Fight weapon type
- set moveset/category
- define impact/armor-negation/max-strikes where needed
- tune collider/sounds/trails if the item deserves custom treatment
- keep balance values centralized by weapon archetype/tier

For special weapons:
- custom moveset or innate skill only when the weapon has a gameplay identity that justifies it
- avoid giving every legendary a unique mechanic solely for spectacle
- boss weapons should create sidegrades/builds, not one dominant meta item

For entities:
- add Epic Fight mob patches only where improved combat meaningfully helps
- bosses get encounter-specific handling rather than generic conversion when needed

## 1.21.1 implementation advantage

Epic Fight 1.21.1 has a more data-driven weapon capability system and supports datapack overrides/inheritance. This should make broad compatibility much faster than the old T&K2 hand-work, especially for conventional sword/axe/spear families.

Use explicit per-item JSON only for exceptions. Use archetype/keyword rules or generated files for large regular weapon sets.

## Generator target

Create a packdev source file such as:

```js
TK.weaponCompat({
  item: 'mod:weapon',
  archetype: 'greatsword',
  tier: 4,
  profile: 'heavy'
})
```

Then generate:
- Epic Fight capability JSON
- T&K balance metadata
- optional tooltip/category metadata
- validation entry

This keeps hundreds of weapons maintainable.

## Balance rule

Compatibility and balance are separate:
1. make the weapon function correctly in Epic Fight
2. assign its T&K tier/role
3. benchmark DPS, stamina, reach, stagger and safety
4. tune against archetype budget
5. only then approve it for progression
