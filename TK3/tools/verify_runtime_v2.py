#!/usr/bin/env python3
"""Static integrity checks for the October 2026 KubeJS runtime refresh."""
from __future__ import annotations
import json
import re
import subprocess
from collections import Counter
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
KUBE = ROOT / 'kubejs'
MANIFEST = json.loads((ROOT / 'docs/RUNTIME_V2_MANIFEST.json').read_text())
TREE = json.loads((ROOT / 'handbook-source/data/skilltree-v4.6.json').read_text())
LAYOUT = json.loads((ROOT / 'handbook-source/skilltree-builder/data/layout.json').read_text())

recipe_ids=[]
for file in (KUBE / 'server_scripts/recipes').rglob('*.js'):
    recipe_ids.extend(re.findall(r'\.id\(\s*[\'\"]([^\'\"]+)[\'\"]\s*\)', file.read_text()))
counts=Counter(recipe_ids)
assert len(recipe_ids)==1788, f'expected 1,788 explicit recipe IDs, found {len(recipe_ids)}'
assert all(v==1 for v in counts.values()), f'duplicate recipe IDs: {[k for k,v in counts.items() if v>1][:8]}'

for file in KUBE.rglob('*.js'):
    subprocess.run(['node','--check',str(file)],check=True,stdout=subprocess.DEVNULL)
for file in KUBE.rglob('*.json'):
    json.loads(file.read_text())

nodes=TREE['nodes']; meta=TREE['meta']; ids={n['id'].removeprefix('skilltree:') for n in nodes}
assert len(nodes)==1801 and len(ids)==1801
positions={(n['col'],n['row']) for n in nodes}
assert len(positions)==1801, 'duplicate skill tree grid positions'
assert meta['validation']['layoutFingerprint']=='4f6e469f'
assert len(LAYOUT['nodes'])==1801 and len(LAYOUT['edges'])==1800
assert {n['id'] for n in LAYOUT['nodes']}==ids
assert len({(n['col'],n['row']) for n in LAYOUT['nodes']})==1801
compat=list((KUBE/'server_scripts/recipes/compat').glob('*.js'))
assert len(compat)==40
assert len(MANIFEST['progression']['milestones'])==14
assert len(MANIFEST['progression']['stages'])==9
quest_text='\n'.join(p.read_text() for p in (ROOT/'config/ftbquests/quests/chapters').glob('tk3_chapter_*.snbt'))
assert all(m['quest'] in quest_text for m in MANIFEST['progression']['milestones']), 'a stage milestone is missing from the canonical quest campaign'
assert len(MANIFEST['customRegistrations']['items'])==214
assert len(MANIFEST['customRegistrations']['machineFrameBlocks'])==3
print('Runtime v2 verified: 1,788 unique recipe IDs; 40 compatibility modules; 214 items + 3 frame blocks; 14 milestones matched to the canonical quest campaign; skill tree 1,801 nodes / 1,800 edges / fingerprint 4f6e469f.')
