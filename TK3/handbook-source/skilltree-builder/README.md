# T&K3 Skilltree Builder

The builder is a static browser app. `data/layout.json` contains the v4.6.0 node positions and graph links. `template/TK3_SkillTree.js` is the validated KubeJS source template.

From the generated website, open `/skilltree-builder/`. Search/filter the tree, drag nodes to empty grid cells, and export a layout JSON or an updated `TK3_SkillTree.js`. The exporter computes the same FNV-1a layout fingerprint the game script validates. Node IDs, graph requirements, bonuses, and point rules remain unchanged.

For a source integrity check, run `python3 TK3/tools/verify_runtime_v2.py` from the repository root. Minecraft runtime behavior still needs an in-game validation pass.
