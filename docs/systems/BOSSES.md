# Boss Framework

## Tiers
Minor elite / Dungeon boss / Major boss / Final-superboss

## Preferred architecture
High-quality existing entity + datapack/functions + KubeJS progression logic.

Major boss lifecycle:
1. trigger
2. arena init
3. T&K tags/state
4. phase controller
5. attacks/events
6. death detection
7. reward/progression
8. cleanup/reset

Twilight target: if Twilight Forest + Twilight Tweaks are approved, use the final spawner as a T&K encounter trigger.

Track expected party size, armor, DPS, fight duration, damage budget, adds, hazards and rewards.
