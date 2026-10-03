#!/usr/bin/env python3
"""Check questbook references, FTB translations, guide behavior and asset IDs."""
import collections
import itertools
import json
import re
from pathlib import Path

PACK = Path(__file__).resolve().parents[1]
M = json.loads((PACK / 'docs/progression_manifest.json').read_text())
FOLDER = PACK / 'config/ftbquests/quests'
LANG = json.loads((FOLDER / 'lang/en_us.snbt').read_text())
KNOWN = set(json.loads((PACK / 'tools/registry_items.json').read_text()))
KNOWN |= {'kubejs:tk3_' + key for key in M['custom_items']}
KNOWN |= set(M['frames'].values()) | set(M['auxiliary_frames'].values())
groups = {group['id'] for group in M['quest_groups']}
chapters = M['chapters'] + M['guide_chapters']
quest_map = {quest['id']: quest for chapter in chapters for quest in chapter['quests']}
all_ids = list(groups)
gate = {item: int(tier) for tier, items in M['gates'].items() for item in items}
assert len(quest_map) == M['quest_count']
assert M['campaign_quest_count'] == sum(len(c['quests']) for c in M['chapters']) == 115
assert M['guide_quest_count'] == sum(len(c['quests']) for c in M['guide_chapters'])
assert len(groups) == 6
assert len(M['recipes']) == 1709, 'Quest editing must not alter the recipe set'
assert len([c for c in M['guide_chapters'] if c['source_key'].startswith('class_') and c['source_key'] != 'class_atlas']) == 6
for chapter in chapters:
    assert chapter['group'] in groups
    runtime = json.loads((FOLDER / 'chapters' / (chapter['filename'] + '.snbt')).read_text())
    assert runtime['id'] == chapter['id']
    assert LANG[f"chapter.{chapter['id']}.title"] == runtime['title']
    assert LANG[f"chapter.{chapter['id']}.chapter_subtitle"] == runtime['subtitle']
    assert chapter['icon'] in KNOWN, chapter['icon']
    all_ids.append(chapter['id'])
    assert len(runtime['quests']) == len(chapter['quests'])
    for authored, quest in zip(chapter['quests'], runtime['quests']):
        assert authored['id'] == quest['id']
        assert all(dependency in quest_map for dependency in quest['dependencies'])
        assert LANG[f"quest.{quest['id']}.title"] == quest['title']
        assert LANG[f"quest.{quest['id']}.quest_desc"] == quest['description']
        assert LANG[f"quest.{quest['id']}.quest_subtitle"] == quest['subtitle']
        assert quest['icon'] in KNOWN, quest['icon']
        assert authored.get('goal') and authored.get('tips'), authored['title']
        assert any('GOAL' in line for line in quest['description'])
        assert any('TIP' in line for line in quest['description'])
        all_ids.append(quest['id'])
        for task in quest['tasks']:
            all_ids.append(task['id'])
            assert task['type'] in ['item', 'checkmark', 'kill']
            if task['type'] == 'item':
                item = task['item']['id']
                assert item in KNOWN, item
                assert task.get('consume_items') is False
                if chapter in M['guide_chapters'] and gate.get(item, 1) > 1:
                    tier = max(authored.get('min_tier', 1), gate[item])
                    assert M['milestones'][str(tier - 1)] in authored['dependencies'], (authored['title'], item)
            if task.get('title'):
                assert LANG[f"task.{task['id']}.title"] == task['title']
        all_ids.extend(reward['id'] for reward in quest['rewards'])
        if chapter in M['guide_chapters']:
            assert quest['optional'] and not quest['rewards']
            assert quest['id'] not in M['milestones'].values()
    for a, b in itertools.combinations(runtime['quests'], 2):
        assert (a['x'], a['y']) != (b['x'], b['y']), (a['id'], b['id'])
assert len(set(all_ids)) == len(all_ids)
assert all(re.fullmatch('[0-9A-F]{16}', value) for value in all_ids)
assert set(path.stem for path in (FOLDER / 'chapters').glob('tk3_*.snbt')) == {c['filename'] for c in chapters}
state = {}
def visit(ident):
    assert state.get(ident) != 'visiting', 'Dependency cycle: ' + ident
    if state.get(ident) == 'done':
        return
    state[ident] = 'visiting'
    for dependency in quest_map[ident]['dependencies']:
        visit(dependency)
    state[ident] = 'done'
for ident in quest_map:
    visit(ident)
tags = {tag for quest in quest_map.values() for tag in quest.get('tags', [])}
theme = (PACK / 'kubejs/assets/ftbquests/ftb_quests_theme.txt').read_text()
assert set(re.findall(r'\[#([^\]]+)\]', theme)).issubset(tags)
types = collections.Counter(task['type'] for quest in quest_map.values() for task in quest['tasks'])
print(json.dumps({'result': 'PASS', 'categories': len(groups), 'chapters': len(chapters),
                  'quests': len(quest_map), 'task_types': dict(types),
                  'unique_object_ids': len(all_ids), 'translation_entries': len(LANG)}))
