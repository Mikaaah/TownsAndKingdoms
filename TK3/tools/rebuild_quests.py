#!/usr/bin/env python3
"""Build FTB Quests 1.21.1 data and translations from the canonical manifest.

Edit quest content in docs/progression_manifest.json; this writer owns only
tk3_*.snbt chapters, chapter_groups, data, en_us translations and the TK3 theme.
"""
import copy
import json
from pathlib import Path

PACK = Path(__file__).resolve().parents[1]


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n')


def formatted_description(quest):
    lines = ['&d&l◆ GOAL&r', '&f' + quest['goal'], '']
    lines += ['&f' + text for text in quest['description']]
    if quest.get('steps'):
        lines += ['', '&6&l◇ HOW TO&r']
        lines += [f'&6{index}. &f{step}' for index, step in enumerate(quest['steps'], 1)]
    if quest.get('tips'):
        lines += ['', '&a&l✦ TIP&r']
        lines += ['&f' + tip for tip in quest['tips']]
    if quest.get('caution'):
        lines += ['', '&c&l! WATCH OUT&r', '&f' + quest['caution']]
    if quest.get('guide_kind') == 'reading':
        lines += ['', '&7Reading check · Mark this when you understand the guide.']
    elif quest.get('guide_kind') == 'activity':
        lines += ['', '&7Activity check · Mark this after completing the described project.']
    if quest.get('optional'):
        lines += ['', '&7Optional branch · Supports your journey alongside the main campaign.']
    return lines


def build():
    manifest = json.loads((PACK / 'docs/progression_manifest.json').read_text())
    folder = PACK / 'config/ftbquests/quests'
    translations = {'file.0000000000000001.title': '&d&lTOWNS & KINGDOMS &f3&r'}
    groups = []
    for group in manifest['quest_groups']:
        groups.append({key: group[key] for key in ['id', 'title', 'icon', 'order_index']})
        translations[f"chapter_group.{group['id']}.title"] = group['ftb_title']
        groups[-1]['title'] = group['ftb_title']
    write_json(folder / 'chapter_groups.snbt', {'chapter_groups': groups})
    write_json(folder / 'data.snbt', {
        'version': 13,
        'default_consume_items': False,
        'default_autoclaim_rewards': 'disabled',
        'default_team_reward': False,
        'default_quest_shape': 'circle',
        'fallback_locale': 'en_us',
        'icon': 'kubejs:tk3_quest_logo',
        'progression_mode': 'linear',
    })
    expected_files = set()
    for chapter in manifest['chapters'] + manifest['guide_chapters']:
        runtime = {key: copy.deepcopy(chapter[key]) for key in [
            'id', 'group', 'icon', 'order_index', 'default_hide_dependency_lines', 'quests'
        ]}
        runtime.update(default_quest_shape='circle', default_quest_size=1.0)
        translations[f"chapter.{chapter['id']}.title"] = chapter['ftb_title']
        translations[f"chapter.{chapter['id']}.chapter_subtitle"] = [chapter['subtitle']]
        # Inline text is mirrored for older 1.21.1 FTB releases; current releases
        # import exactly the same entries into their native translation table.
        runtime['title'] = chapter['ftb_title']
        runtime['subtitle'] = [chapter['subtitle']]
        for quest in runtime['quests']:
            source = next(q for q in chapter['quests'] if q['id'] == quest['id'])
            quest['title'] = source.get('ftb_title', '&f&l' + source['title'] + '&r')
            quest['description'] = formatted_description(source)
            translations[f"quest.{quest['id']}.title"] = quest['title']
            translations[f"quest.{quest['id']}.quest_desc"] = quest['description']
            subtitle = source.get('quest_subtitle', 'SIDE PATH' if source.get('optional') else 'CAMPAIGN')
            quest['subtitle'] = '&7' + subtitle
            translations[f"quest.{quest['id']}.quest_subtitle"] = quest['subtitle']
            for task in quest['tasks']:
                if task.get('title'):
                    translations[f"task.{task['id']}.title"] = task['title']
            for key in ['goal', 'steps', 'tips', 'caution', 'guide_kind', 'min_tier',
                        'source_key', 'quest_subtitle', 'ftb_title', 'base_description']:
                quest.pop(key, None)
        name = chapter['filename'] + '.snbt'
        expected_files.add(name)
        write_json(folder / 'chapters' / name, runtime)
    for path in (folder / 'chapters').glob('tk3_*.snbt'):
        if path.name not in expected_files:
            path.unlink()
    write_json(folder / 'lang/en_us.snbt', translations)
    theme = '''// Towns & Kingdoms 3 · questbook palette
// FTB Quests merges these overrides with its bundled theme.
[*]
quest_view_title: #D5B9FF
quest_completed_color: #8FCB9B
quest_started_color: #D5ACFF
quest_not_started_color: #B5A0D2
quest_locked_color: #665971
dependency_line_completed_color: #8FCB9B
dependency_line_uncompleted_color: #A586C4
dependency_line_unavailable_color: #51465F
dependency_line_requires_color: #E4C681
dependency_line_required_for_color: #C49EFF
selected_chapter_highlight_1: #A986D4
selected_chapter_highlight_2: #D9C7EE

[#tk3_milestone]
quest_view_title: #E4C681
quest_not_started_color: #C3A465

[#tk3_class_warrior]
quest_view_title: #E05A47
[#tk3_class_ranger]
quest_view_title: #5DAE68
[#tk3_class_rogue]
quest_view_title: #9A6BC5
[#tk3_class_mage]
quest_view_title: #55CFEA
[#tk3_class_cleric]
quest_view_title: #F1D776
[#tk3_class_occultist]
quest_view_title: #9B4B70
'''
    path = PACK / 'kubejs/assets/ftbquests/ftb_quests_theme.txt'
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(theme)
    print(json.dumps({'chapters': len(expected_files), 'quests': manifest['quest_count'],
                      'translation_entries': len(translations)}))


if __name__ == '__main__':
    build()
