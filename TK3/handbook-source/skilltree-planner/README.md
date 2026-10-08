# T&K3 Skilltree Planner

This browser app helps players plan a character build before spending skill points. It reads the current skilltree data and its node prerequisites.

## Player features

- Pick at most one class and one subclass; the subclass list follows the selected class.
- Add one or more skill goals. The planner automatically includes the full learned-skill prerequisite chain.
- See the complete point cost and a prerequisite-first purchase order.
- Plan professions and focus branches without an extra profession limit. The shared point budget is the only tradeoff.
- Search node names, bonuses, branches, or IDs; inspect each node on the interactive tree map.
- Keep a plan in browser storage, download or load JSON, copy a share link, or print it.

The 150-point budget is a recommended planning target, not an in-game enforced cap. The starting point is included and costs zero; each other skill costs one point.

## Source data and maintenance

The data/layout.json file supplies v4.6.0 node positions and visual branch groups. The generated website publishes full node definitions, bonuses, and learned-skill requirements at assets/wiki/skilltree-v4.6.json.

The planner does not edit layout coordinates or KubeJS data. Run python3 TK3/tools/verify_skilltree_planner.py from the repository root to check point totals, prerequisites, planner assets, and the generated route. Minecraft runtime behavior still needs an in-game validation pass.
