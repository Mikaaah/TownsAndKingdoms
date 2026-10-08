#!/usr/bin/env python3
"""Verify the player-facing skilltree planner against the published tree source."""
from __future__ import annotations
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
REPO = ROOT.parent
SOURCE = ROOT / "handbook-source/skilltree-planner"
TREE = json.loads((ROOT / "handbook-source/data/skilltree-v4.6.json").read_text())
LAYOUT = json.loads((SOURCE / "data/layout.json").read_text())
META = TREE["meta"]
NODES = TREE["nodes"]
BY_ID = {n["id"].removeprefix("skilltree:"): n for n in NODES}

assert len(NODES) == META["generatedNodes"] == 1801
assert len(BY_ID) == len(NODES)
assert len(LAYOUT["nodes"]) == len(NODES)
assert len(LAYOUT["edges"]) == 1800
assert {n["id"] for n in LAYOUT["nodes"]} == set(BY_ID)
assert len({(n["col"], n["row"]) for n in LAYOUT["nodes"]}) == len(NODES)
assert META["rules"]["nativePointCostPerNode"] == 1
assert META["rules"]["classLimit"] == 1
assert META["rules"]["subclassLimit"] == 1
assert META["rules"]["professionMasteryLimit"] is None
assert META["recommendedMaxSkillPoints"] == 150

for node in NODES:
    for requirement in node.get("requirements", []):
        assert requirement["type"] == "skilltree:learned_skill", f"planner needs a new requirement rule: {node['id']} / {requirement}"
        dependency = requirement["skill_id"].removeprefix("skilltree:")
        assert dependency in BY_ID, f"missing prerequisite {dependency} for {node['id']}"

def point_cost(target):
    seen = set()
    visiting = set()
    def visit(node_id):
        if node_id in seen:
            return
        assert node_id not in visiting, f"prerequisite cycle at {node_id}"
        assert node_id in BY_ID, f"missing node {node_id}"
        visiting.add(node_id)
        node = BY_ID[node_id]
        for requirement in node.get("requirements", []):
            visit(requirement["skill_id"].removeprefix("skilltree:"))
        visiting.remove(node_id)
        seen.add(node_id)
    visit(target)
    return sum(not BY_ID[node_id].get("isStartingPoint", False) for node_id in seen)

economy = META["pointEconomy"]
for class_id in META["classes"]:
    assert point_cost(f"tk3_{class_id}_subclass_gate") == economy["chosenClassToSubclassGateIncludingShared"]
for subclass_id in META["subclasses"]:
    matching = [n["id"].removeprefix("skilltree:") for n in NODES if f"_sub_{subclass_id}_ascendancy" in n["id"]]
    assert len(matching) == 1, f"missing or duplicate ascendancy for {subclass_id}"
    assert point_cost(matching[0]) == economy["signatureClassAndSubclassIncludingShared"]

subclasses_by_class = {}
for class_id in META["classes"]:
    subclasses_by_class[class_id] = []
    prefix = f"tk3_{class_id}_sub_"
    for subclass_id in META["subclasses"]:
        if any(node_id.startswith(prefix + subclass_id) for node_id in BY_ID):
            subclasses_by_class[class_id].append(subclass_id)
assert all(len(items) == 3 for items in subclasses_by_class.values())
assert sorted(sum(subclasses_by_class.values(), [])) == sorted(META["subclasses"])

subprocess.run(["node", "--check", str(SOURCE / "app.js")], check=True)
subprocess.run(["node", "--check", str(SOURCE / "planner-core.js")], check=True)
subprocess.run(["node", str(ROOT / "tools/test_skilltree_planner.cjs")], cwd=ROOT, check=True)

output = ROOT / "player-guide"
html = (output / "skilltree-planner/index.html").read_text()
assert "Plan your character before you spend points" in html
assert "planner-core.js" in html and "app.js" in html
assert "app.css?v=" in html and "planner-core.js?v=" in html and "app.js?v=" in html
assert (output / "skilltree-planner/data/layout.json").exists()
css = (output / "skilltree-planner/app.css").read_text()
assert ".canvas-message[hidden]{display:none}" in css
assert (output / "assets/wiki/skilltree-v4.6.json").exists()
compat = (output / "skilltree-builder/index.html").read_text()
assert "skilltree-planner/" in compat
print("Skilltree planner verified: 1,801 current nodes, all prerequisites, 6 class paths, 18 subclasses, budget math, saved-plan assets, and legacy route.")
