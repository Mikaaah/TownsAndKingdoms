#!/usr/bin/env python3
"""Export the main FTB Quests chapters from the CurseForge pack archive."""

import argparse
import hashlib
import json
import re
import sys
from pathlib import Path
from zipfile import ZipFile

PORTAL = Path(__file__).resolve().parents[1]
sys.path.insert(0, str(PORTAL.parent / 'TK3/tools'))
from import_pack_snapshot import plain, snbt


ROMANS = 'I II III IV V VI VII VIII IX X'.split()
CHAPTER_TITLE = re.compile(r'\s*►?\s*Chapter ([IVX]+)\s*\|\s*(.+)')
ITEM_TRANSLATION = re.compile(r'(?:item|block)\.([^.]+)\.(.+)')
QUEST_MAP_FIELDS = {
    'shape': 'shape',
    'size': 'size',
    'hide_dependency_lines': 'hideDependencyLines',
    'hide_dependent_lines': 'hideDependentLines',
}


def text(value):
    return plain(value).strip() if value is not None else ''


def description(value):
    if not value:
        return []
    rows = value if isinstance(value, list) else [value]
    return [
        paragraph.strip()
        for row in rows
        for paragraph in re.split(r'\n\s*\n', text(row))
        if paragraph.strip()
    ]


def item_name(item_id, names):
    return names.get(item_id) or item_id.rsplit(':', 1)[-1].replace('_', ' ').title()


def stack_id(stack):
    return stack if isinstance(stack, str) else stack['id']


def task_record(task, label, names):
    kind = task['type']
    if kind == 'checkmark':
        return {'label': label or 'Mark as complete', 'type': kind}
    if kind == 'kill':
        entity = task['entity']
        return {
            'label': label or f'Defeat {item_name(entity, names)}',
            'type': kind,
            'count': task.get('value', 1),
        }
    if kind != 'item':
        raise ValueError(f"Unsupported quest objective `{kind}` in {task['id']}")

    stack = task['item']
    item_id = stack_id(stack)
    item_count = 1 if isinstance(stack, str) else stack.get('count', 1)
    components = {} if isinstance(stack, str) else stack.get('components', {})
    potion = components.get('minecraft:potion_contents', {}).get('potion')
    name = item_name(item_id, names)
    if potion:
        name = f'{name} ({item_name(potion, names)})'
    row = {
        'label': label or name,
        'type': kind,
        'item': item_id,
        'count': task.get('count', item_count),
    }
    if task.get('icon'):
        row['icon'] = stack_id(task['icon'])
    return row


def quest_icon(quest):
    if quest.get('icon'):
        return stack_id(quest['icon'])
    # The in-game board cycles task icons. Use the first item candidate for the static map.
    for task in quest.get('tasks', []):
        if task.get('icon'):
            return stack_id(task['icon'])
        if task['type'] == 'item':
            return stack_id(task['item'])
    return None


def board_art(archive, overrides, chapter, number):
    def image_ref(resource):
        namespace, path = resource.split(':', 1)
        archive.getinfo(f'{overrides}kubejs/assets/{namespace}/{path}')
        return resource

    return {
        'icon': stack_id(chapter['icon']),
        'titleImage': image_ref(f'tnk_quests:textures/main_quests/chapter_{number:02d}.png'),
        'images': [
            {
                'id': image['id'],
                'image': image_ref(image['image']),
                'x': image['x'],
                'y': image['y'],
                'width': image['width'],
                'height': image['height'],
                'rotation': image['rotation'],
            }
            for image in chapter.get('images', [])
        ],
    }


def ordered_quests(quests):
    remaining = {quest['id']: quest for quest in quests}
    while remaining:
        # Use the board coordinates to keep neighboring branches together
        # whenever their local prerequisite quests have already been listed.
        available = [
            quest for quest in remaining.values()
            if remaining.keys().isdisjoint(quest.get('dependencies', []))
        ]
        if not available:
            raise ValueError(f'Cyclic quest dependencies: {", ".join(remaining)}')
        for quest in sorted(available, key=lambda row: (row['y'], row['x'])):
            yield remaining.pop(quest['id'])


def metadata_names(archive, manifest_bytes, overrides):
    metadata = json.loads((PORTAL / 'scripts/registry_metadata.json').read_text())
    if metadata['manifestHash'] != hashlib.sha256(manifest_bytes).hexdigest():
        raise ValueError('Refresh handbook registry metadata for this export before extracting chapter quests.')
    names = metadata['names']
    for member in sorted(archive.namelist()):
        if not member.startswith(overrides + 'kubejs/assets/') or not member.endswith('/lang/en_us.json'):
            continue
        for key, value in json.loads(archive.read(member)).items():
            match = ITEM_TRANSLATION.fullmatch(key)
            if match and isinstance(value, str):
                namespace, path = match.groups()
                names[f'{namespace}:{path.replace(".", "/")}'] = text(value)
    return names


def extract(archive):
    manifest_bytes = archive.read('manifest.json')
    overrides = json.loads(manifest_bytes).get('overrides', 'overrides').strip('/') + '/'
    quest_root = overrides + 'config/ftbquests/quests/'
    language = snbt(archive.read(quest_root + 'lang/en_us.snbt').decode())
    names = metadata_names(archive, manifest_bytes, overrides)
    members = sorted(
        member for member in archive.namelist()
        if member.startswith(quest_root + 'chapters/') and member.endswith('.snbt')
    )
    chapters = [(member, snbt(archive.read(member).decode())) for member in members]
    campaign = sorted(
        (chapter for member, chapter in chapters if Path(member).name.startswith('text_chapter_')),
        key=lambda chapter: chapter['order_index'],
    )
    if [chapter['order_index'] for chapter in campaign] != list(range(len(ROMANS))):
        raise ValueError('Expected one authored quest board for each of the ten chapter orders.')

    chapter_names = {}
    chapter_slugs = {}
    for _, chapter in chapters:
        cid = chapter['id']
        localized = language.get(f'chapter.{cid}.title', chapter.get('title'))
        chapter_names[cid] = text(localized).lstrip('► ')
    for index, chapter in enumerate(campaign):
        cid = chapter['id']
        match = CHAPTER_TITLE.fullmatch(chapter_names[cid])
        if not match or match.group(1) != ROMANS[index]:
            raise ValueError(f'Chapter {index + 1} has an unexpected heading: {chapter_names[cid]}')
        chapter_names[cid] = match.group(2).strip()
        chapter_slugs[cid] = f'chapter-{index + 1:02d}'

    quest_titles = {}
    quest_chapters = {}
    for _, chapter in chapters:
        for quest in chapter.get('quests', []):
            qid = quest['id']
            if qid in quest_titles:
                raise ValueError(f'Duplicate quest ID: {qid}')
            title = text(language.get(f'quest.{qid}.title', quest.get('title')))
            if not title and quest.get('tasks'):
                first = quest['tasks'][0]
                title = text(language.get(f"task.{first['id']}.title", first.get('title')))
                if not title and first['type'] in ('checkmark', 'item', 'kill'):
                    title = task_record(first, title, names)['label']
            quest_titles[qid] = title
            quest_chapters[qid] = chapter['id']

    result = []
    for index, chapter in enumerate(campaign):
        cid = chapter['id']
        chapter_row = {
            'id': chapter_slugs[cid],
            'number': index + 1,
            'roman': ROMANS[index],
            'title': chapter_names[cid],
            'quests': [],
        }
        result.append(chapter_row)
        if chapter_row['roman'] == 'X':
            # Keep the final board and its art private until release.
            continue
        chapter_row.update(board_art(archive, overrides, chapter, chapter_row['number']))
        for quest in ordered_quests(chapter.get('quests', [])):
            qid = quest['id']
            if not quest_titles[qid]:
                raise ValueError(f'No visible quest title for {qid}')
            dependencies = quest.get('dependencies', [])
            prerequisites = []
            for dep in dependencies:
                if dep not in quest_chapters or not quest_titles[dep]:
                    raise ValueError(f'Unresolved prerequisite {dep} for {qid}')
                parent = quest_chapters[dep]
                prerequisite = {'id': dep, 'title': quest_titles[dep], 'chapterTitle': chapter_names[parent]}
                if parent in chapter_slugs:
                    prerequisite['chapterId'] = chapter_slugs[parent]
                prerequisites.append(prerequisite)
            row = {
                'id': qid,
                'title': quest_titles[qid],
                'description': description(language.get(f'quest.{qid}.quest_desc', quest.get('description'))),
                'dependencies': dependencies,
                'prerequisites': prerequisites,
                'tasks': [
                    task_record(task, text(language.get(f"task.{task['id']}.title", task.get('title'))), names)
                    for task in quest.get('tasks', [])
                ],
                'x': quest['x'],
                'y': quest['y'],
            }
            icon = quest_icon(quest)
            if icon:
                row['icon'] = icon
            row.update({
                json_key: quest[snbt_key]
                for snbt_key, json_key in QUEST_MAP_FIELDS.items()
                if snbt_key in quest
            })
            subtitle = text(language.get(f'quest.{qid}.quest_subtitle', quest.get('subtitle')))
            if subtitle:
                row['subtitle'] = subtitle
            if quest.get('dependency_requirement'):
                row['dependencyRequirement'] = quest['dependency_requirement']
            if quest.get('rewards'):
                row['rewards'] = [
                    task_record(reward, text(language.get(f"reward.{reward['id']}.title", reward.get('title'))), names)
                    for reward in quest['rewards']
                ]
            chapter_row['quests'].append(row)
    return result


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('archive', type=Path, help='Authoritative CurseForge pack export')
    parser.add_argument('--output', type=Path, default=PORTAL / 'src/data/chapter-questlines.json')
    args = parser.parse_args()
    with ZipFile(args.archive) as archive:
        chapters = extract(archive)
    args.output.write_text(json.dumps(chapters, ensure_ascii=False, separators=(',', ':')) + '\n')
    print(f"Exported {sum(len(chapter['quests']) for chapter in chapters)} quests across {len(chapters)} chapter boards.")


if __name__ == '__main__':
    main()
