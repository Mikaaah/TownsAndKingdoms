#!/usr/bin/env python3
"""Guard expensive progression frames and machine-specific construction costs."""
import collections
import json
import re
from pathlib import Path

PACK = Path(__file__).resolve().parents[1]
M = json.loads((PACK / 'docs/progression_manifest.json').read_text())
def oid(s): return re.sub(r'^\d+x ', '', s)
def inputs(r): return list(r['inputs'].values()) if isinstance(r['inputs'], dict) else r['inputs']
rows = collections.defaultdict(list)
for r in M['recipes']: rows[oid(r['output'])].append(r)

for tier, frame in M['frames'].items():
    constructors = rows[frame]
    assert len(constructors) == (2 if tier == '1' else 1), (frame, constructors)
    for r in constructors:
        assert r['id'] in M['output_whitelist'][frame]
        if r['kind'] != 'deploying':
            assert tier == '1' and r['id'].endswith('/kinetic_manual')
            continue
        assert r['inputs'][1] == M['mechanisms'][tier]
        assert not r.get('keep'), 'Frame mechanisms must be consumed'
    mechanism = rows[M['mechanisms'][tier]][0]
    assert len(rows[M['mechanisms'][tier]]) == 1
    assert mechanism['kind'] == 'sequence'
    assert mechanism['steps'][-1] == 'tool'
    assert len(mechanism['inputs']) >= (4 if tier == '1' else 7)

functional = ('mechanical_press','mechanical_mixer','deployer','mechanical_saw',
              'mechanical_drill','mechanical_harvester','mechanical_pump',
              'steam_engine','mechanical_arm','rotation_speed_controller',
              'mechanical_crafter','packager','repackager')
for name in functional:
    for r in rows['create:' + name]:
        assert r['kind'] in ('shaped','mechanical_crafting')
        assert len(set(inputs(r))) >= 3, (name, r['inputs'])
        assert any(x in M['frames'].values() for x in inputs(r))

advanced = rows['mekanismgenerators:advanced_solar_generator'][0]['json']
symbol = next(k for k,v in advanced['key'].items() if v.get('item') == 'mekanismgenerators:solar_generator')
assert ''.join(advanced['pattern']).count(symbol) == 4, 'Advanced Solar must build on four Solar Generators'
dense = rows['ae2:dense_energy_cell'][0]['json']
symbol = next(k for k,v in dense['key'].items() if v.get('item') == 'ae2:energy_cell')
assert ''.join(dense['pattern']).count(symbol) == 8, 'Dense cells must store the cost of eight Energy Cells'

for r in M['recipes']:
    if any(x in r.get('native_source','') for x in ('/decorative/','/shaped/slabs/','/shaped/stairs/','/shaped/walls/')):
        assert not any(x in M['frames'].values() for x in inputs(r)), 'Decorative stone must not substitute machine frames'
    if r.get('json',{}).get('type') == 'minecraft:crafting_shaped':
        keys = r['json']['key']
        assert set(''.join(r['json']['pattern'])) - {' '} == set(keys), r['id']
        assert r['inputs'] == {k:v.get('item','#'+v.get('tag','')) for k,v in keys.items()}, r['id']

print('PASS: ten protected frame paths; sequence cost floors; machine-specific parts; Advanced Solar hierarchy; dense energy-cell costs; decorative/machine separation.')
