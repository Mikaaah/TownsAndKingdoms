#!/usr/bin/env python3
"""Validate custom item textures and frame models against runtime v2 registrations."""
import json
import re
from pathlib import Path

PACK = Path(__file__).resolve().parents[1]
ASSETS = PACK / 'kubejs/assets'
RUNTIME = json.loads((PACK / 'docs/RUNTIME_V2_MANIFEST.json').read_text())
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

def registration_body(source, name):
    text = source.read_text()
    pattern = re.compile(r'event\.create\(\s*[\'\"]' + re.escape(name) +
                         r'[\'\"]\s*\)([\s\S]*?)(?=\s*event\.create\(|\}\s*\)\s*;|$)')
    match = pattern.search(text)
    assert match, f'Missing item registration: {name} in {source.name}'
    return match.group(1)

items = RUNTIME['customRegistrations']['items']
assert len(items) == RUNTIME['customRegistrations']['itemCount']
for entry in items:
    item_id = entry['id']
    name = item_id.split(':', 1)[1]
    source = PACK / 'kubejs/startup_scripts' / entry['source']
    body = registration_body(source, name)
    texture_match = re.search(r'\.texture\(\s*[\'\"]([^\'\"]+)', body)
    item_model = 'kubejs:item/' + name
    model_file = ASSETS / 'kubejs/models/item' / (name + '.json')
    if texture_match:
        texture(texture_match.group(1))
    if model_file.is_file():
        model(item_model)
    else:
        # KubeJS generates a basic item model from .texture() when the package
        # does not ship a hand-authored model override.
        assert texture_match, f'Item has neither a shipped model nor a KubeJS texture registration: {item_id}'

frames = RUNTIME['customRegistrations']['machineFrameBlocks']
assert len(frames) == RUNTIME['customRegistrations']['blockCount']
startup = PACK / 'kubejs/startup_scripts/tk3_machine_frames.js'
startup_text = startup.read_text()
for entry in frames:
    name = entry['id'].split(':', 1)[1]
    parent = 'kubejs:block/tk3_frames/' + name
    assert f'.parentModel("{parent}")' in startup_text, entry['id']
    assert f'.parentModel("kubejs:block/{name}")' not in startup_text, 'Generated-model self-reference'
    model(parent)
    model('kubejs:item/' + name)
    state = json.loads((ASSETS / 'kubejs/blockstates' / (name + '.json')).read_text())
    assert state['variants']['']['model'] == 'kubejs:block/' + name

print(f'PASS: {len(items)} runtime item registrations; supplied texture atlas paths; {len(frames)} frame block models; model-cycle guards.')
