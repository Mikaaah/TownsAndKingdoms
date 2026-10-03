#!/usr/bin/env python3
"""Check custom item models, frame inheritance and atlas registration.

Unlike an existence-only check, a valid texture must also be stitched into
the block/item atlas. No Minecraft renderer is executed by this check.
"""
import json
import re
from pathlib import Path

PACK = Path(__file__).resolve().parents[1]
ASSETS = PACK / 'kubejs/assets'
M = json.loads((PACK / 'docs/progression_manifest.json').read_text())
ATLAS = json.loads((ASSETS / 'minecraft/atlases/blocks.json').read_text())
assert not ATLAS.get('replace'), 'The pack must extend the native block atlas'
directories = {'block': 'block/', 'item': 'item/'}
for source in ATLAS['sources']:
    assert source['type'] == 'minecraft:directory'
    directories[source['source']] = source['prefix']

def texture(ref):
    namespace, name = ref.split(':')
    if namespace != 'kubejs':
        return
    assert re.fullmatch(r'[a-z0-9_./-]+', name), ref
    f = ASSETS / namespace / 'textures' / (name + '.png')
    assert f.is_file() and f.read_bytes().startswith(b'\x89PNG\r\n\x1a\n'), ref
    assert any(name.startswith(prefix) and
               (ASSETS / namespace / 'textures' / directory / name[len(prefix):]).with_suffix('.png').is_file()
               for directory, prefix in directories.items()), f'Unstitched texture: {ref}'
    metadata = f.with_suffix('.png.mcmeta')
    if metadata.exists():
        json.loads(metadata.read_text())

def model(ref, stack=()):
    namespace, name = ref.split(':')
    if namespace != 'kubejs':
        return
    assert ref not in stack, 'Model cycle: ' + ' -> '.join((*stack, ref))
    f = ASSETS / namespace / 'models' / (name + '.json')
    assert f.is_file(), ref
    data = json.loads(f.read_text())
    if data.get('parent'):
        model(data['parent'], (*stack, ref))
    for value in data.get('textures', {}).values():
        if not value.startswith('#'):
            texture(value)

for item, asset in M['asset_catalog'].items():
    texture(asset['texture'])
    ref = 'kubejs:item/' + item.split(':')[1]
    model(ref)
    data = json.loads((ASSETS / 'kubejs/models/item' / (item.split(':')[1] + '.json')).read_text())
    assert data['textures']['layer0'] == asset['texture'], item

frames = list(M['frames'].values()) + list(M['auxiliary_frames'])
startup = (PACK / 'kubejs/startup_scripts/tk3_machine_frames.js').read_text()
for frame in frames:
    name = frame.split(':')[1]
    parent = 'kubejs:block/tk3_frames/' + name
    assert f'.parentModel("{parent}")' in startup, frame
    assert f'.parentModel("kubejs:block/{name}")' not in startup, 'Generated-model self-reference'
    model(parent)
    model('kubejs:item/' + name)
    state = json.loads((ASSETS / 'kubejs/blockstates' / (name + '.json')).read_text())
    assert state['variants']['']['model'] == 'kubejs:block/' + name

print(f'PASS: {len(M["asset_catalog"])} supplied item/quest textures; {len(frames)} frame models; atlas stitching and model-cycle guards.')
