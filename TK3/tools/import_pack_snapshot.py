#!/usr/bin/env python3
"""Refresh documentation data from one authoritative CurseForge pack export.

This reads source data; it never loads Minecraft or executes KubeJS handlers.
The preserved TK2 inventory is the comparison baseline, not another TNK3 export.
"""
import argparse
import ast
import hashlib
import io
import json
import re
import subprocess
import tempfile
import tomllib
from html.parser import HTMLParser
from pathlib import Path
from zipfile import ZipFile

PACK = Path(__file__).resolve().parents[1]
DATA = PACK / 'handbook-source/current/data'
TOKEN = re.compile(r'\s+|//[^\n]*|"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'|[{}\[\],:]|[^\s{}\[\],:"\']+')


def snbt(text):
    tokens = [m.group() for m in TOKEN.finditer(text)
              if not m.group().isspace() and not m.group().startswith('//')]
    index = 0

    def value():
        nonlocal index
        token = tokens[index]
        index += 1
        if token == '{':
            result = {}
            while tokens[index] != '}':
                if tokens[index] == ',':
                    index += 1
                    continue
                key = tokens[index]
                index += 1
                if key.startswith('"'):
                    key = json.loads(key)
                assert tokens[index] == ':'
                index += 1
                result[key] = value()
            index += 1
            return result
        if token == '[':
            result = []
            while tokens[index] != ']':
                if tokens[index] == ',':
                    index += 1
                else:
                    result.append(value())
            index += 1
            return result
        if token.startswith('"'):
            return json.loads(token)
        if token.startswith("'"):
            return ast.literal_eval(token)
        if token in ('true', 'false'):
            return token == 'true'
        number = re.sub(r'[bBsSlLfFdD]$', '', token)
        try:
            return float(number) if any(c in number.lower() for c in '.e') else int(number)
        except ValueError:
            return token

    result = value()
    assert index == len(tokens), 'Unparsed SNBT input'
    return result


def plain(value):
    if isinstance(value, str):
        try:
            rich = json.loads(value)
        except (ValueError, TypeError):
            rich = value
        if isinstance(rich, (dict, list)):
            return plain(rich)
        return re.sub(r'[&§][0-9a-fklmnor]', '', value).replace('\\n', '\n')
    if isinstance(value, list):
        return ''.join(plain(v) for v in value)
    if isinstance(value, dict):
        return plain(value.get('text', '')) + plain(value.get('extra', []))
    return str(value)


class ProjectLinks(HTMLParser):
    def __init__(self):
        super().__init__()
        self.items = []
        self.current = None

    def handle_starttag(self, tag, attrs):
        if tag == 'a':
            self.current = [dict(attrs).get('href', ''), '']

    def handle_data(self, text):
        if self.current is not None:
            self.current[1] += text

    def handle_endtag(self, tag):
        if tag == 'a' and self.current is not None:
            url, label = self.current
            name, sep, author = label.rpartition(' (by ')
            self.items.append(dict(
                url=url, slug=url.rstrip('/').rsplit('/', 1)[-1],
                name=name if sep else label, author=author.rstrip(')') if sep else '',
                kind='mod' if '/mc-mods/' in url else 'shader' if '/shaders/' in url else 'resource pack'))
            self.current = None


def digest(content):
    return hashlib.sha256(content).hexdigest()


def dump(name, value):
    target = DATA / (name + '.json')
    if target.exists():
        existing = target.read_text()
        if json.loads(existing) == value:
            return
        compact = existing.count('\n') <= 1
    else:
        compact = name not in ('snapshot', 'pinned-custom-builds', 'food-variety')
    target.write_text(json.dumps(value, ensure_ascii=False, separators=(',', ':')) + '\n' if compact
                      else json.dumps(value, ensure_ascii=False, indent=2) + '\n')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('archive', type=Path)
    parser.add_argument('--date', required=True)
    parser.add_argument('--progression-jar', type=Path, required=True,
                        help='The exact Progression artifact pinned by this export; verify its file ID before importing.')
    parser.add_argument('--lasers-jar', type=Path, required=True,
                        help='The exact Alchemical Lasers artifact pinned by this export.')
    args = parser.parse_args()
    previous_snapshot = json.loads((DATA / 'snapshot.json').read_text())
    previous_inventory = json.loads((DATA / 'inventory.json').read_text())
    tk2_manifest = json.loads((DATA / 'tk2-manifest.json').read_text())

    with ZipFile(args.archive) as archive:
        names = archive.namelist()
        assert len(names) == len(set(names)), 'Duplicate ZIP members'
        assert all(not Path(n).is_absolute() and '..' not in Path(n).parts for n in names)
        manifest = json.loads(archive.read('manifest.json'))
        prefix = manifest['overrides'].rstrip('/') + '/'
        read = lambda rel: archive.read(prefix + rel)
        load = lambda rel: json.loads(read(rel))
        links = ProjectLinks()
        links.feed(archive.read('modlist.html').decode('utf-8-sig'))
        current = links.items
        assert len(current) == len(manifest['files'])
        assert len({p['slug'] for p in current}) == len(current)
        for item, file in zip(current, manifest['files']):
            item.update(project_id=file['projectID'], file_id=file['fileID'], required=file.get('required', True))
        previous = previous_inventory['previous']
        assert len(previous) == len(tk2_manifest['files'])
        for item, file in zip(previous, tk2_manifest['files']):
            item.update(project_id=file['projectID'], file_id=file['fileID'], required=file.get('required', True))
        old = {p['project_id']: p for p in previous}
        new = {p['project_id']: p for p in current}
        assert len(new) == len(current), 'Duplicate manifest project IDs'
        changes = {key: sorted([source[i] for i in ids], key=lambda p: p['name'].lower())
                   for key, ids, source in [
                       ('added_projects', new.keys() - old.keys(), new),
                       ('retained_projects', new.keys() & old.keys(), new),
                       ('absent_projects', old.keys() - new.keys(), old)]}

        bundled = []
        friendly = {'tnkloot': 'Unidentified Loot', 'tnkcore': 'TnK Workshop', 'ultraterraforged': 'Wildshape'}
        for member in sorted(n for n in names if n.startswith(prefix + 'mods/') and n.endswith('.jar')):
            content = archive.read(member)
            with ZipFile(io.BytesIO(content)) as jar:
                metadata = tomllib.loads(jar.read('META-INF/neoforge.mods.toml').decode())
                for mod in metadata['mods']:
                    bundled.append(dict(name=friendly.get(mod['modId'], mod['displayName']),
                                        mod_id=mod['modId'], version=mod['version'],
                                        file=Path(member).name, path=member,
                                        author=mod.get('authors', ''), sha256=digest(content)))
        dump('inventory', dict(current=current, previous=previous, **changes, bundled_mods=bundled,
             method='CurseForge project ID comparison, using each export manifest and matching modlist order. Renamed projects retain their identity. Different replacement-port projects are separate; three locally bundled mods are listed separately.'))
        dump('tnk3-manifest', manifest)
        dump('jar-references', bundled)

        skills_root = 'config/puffish_skills/categories/character/'
        definitions = load(skills_root + 'definitions.json')
        positions = load(skills_root + 'skills.json')
        nodes = [dict(id=key, **value, position=positions.get(key), branch=key.split('_')[0])
                 for key, value in definitions.items()]
        dump('skills', dict(category=load(skills_root + 'category.json'), nodes=nodes,
                           connections=load(skills_root + 'connections.json'),
                           roots=[k for k, v in positions.items() if v.get('root')]))
        character = {key: load('config/' + filename) for key, filename in [
            ('config', 'tnkprogression.json'), ('balance', 'tnk-balance.json'),
            ('titles', 'tnk-titles.json'), ('perks', 'tnk-title-perks.json')]}
        dump('character', character)
        # The only additions made by the shipped roster script are its titleDefinitions.
        # Do not append defaults taken from an unrelated newer custom-mod build.
        dump('progression-title-defaults', dict(titles=load('kubejs/config/tnk-title-defaults.json')['titleDefinitions']))
        dump('progression-title-perks', dict(titles={}))
        dump('restrictions', load('kubejs/pack_catalog.json'))
        dump('jei-groups', load('kubejs/jei_search_groups.json'))
        ponder_source = read('kubejs/client_scripts/ponder/tnk_ponder.js').decode()
        marker = re.search(r'var definitions\s*=\s*', ponder_source)
        scenes, _ = json.JSONDecoder().raw_decode(ponder_source[marker.end():])
        dump('ponders', [{k: s[k] for k in ('topic', 'id', 'title', 'anchors')} for s in scenes])

        qroot = 'config/ftbquests/quests/'
        language = snbt(read(qroot + 'lang/en_us.snbt').decode())
        group_data = snbt(read(qroot + 'chapter_groups.snbt').decode())['chapter_groups']
        groups = [dict(id=g['id'], title=plain(language.get('chapter_group.' + g['id'] + '.title', g['id'])).strip())
                  for g in group_data]
        chapters = []
        for member in sorted(n for n in names if n.startswith(prefix + qroot + 'chapters/') and n.endswith('.snbt')):
            chapter = snbt(archive.read(member).decode())
            cid = chapter['id']
            chapters.append(dict(id=cid, file=Path(member).name, group=chapter.get('group', ''),
                                 title=plain(language.get('chapter.' + cid + '.title', cid)).strip(),
                                 order=chapter.get('order_index', 0), quest_count=len(chapter.get('quests', []))))
        assert len({c['id'] for c in chapters}) == len(chapters)
        dump('quest-export', dict(groups=groups, chapters=chapters,
             note='Exported records include the rebuilt layout, unfinished pages and inherited legacy chapters. Counts do not measure completed TNK3 quests.'))
        loot = {Path(n).stem: json.loads(archive.read(n)) for n in names
                if n.startswith(prefix + 'config/tnkloot/') and n.endswith('.json')}
        dump('loot', loot)
        food = tomllib.loads(read('config/solcarrot-server.toml').decode())
        dump('food-variety', food)
        scripts = {folder: len([n for n in names if n.startswith(prefix + 'kubejs/' + folder + '/') and n.endswith('.js')])
                   for folder in ('startup_scripts', 'server_scripts', 'client_scripts')}
        tracked = [n for n in names if n.startswith(prefix + 'kubejs/') and n.endswith('.js')]
        tracked += [prefix + 'kubejs/' + f for f in ('machine_recipes.json', 'pack_catalog.json', 'jei_search_groups.json')]
        dump('pack-source-files', {n: digest(archive.read(n)) for n in sorted(tracked)})
        with tempfile.TemporaryDirectory(prefix='tnk-doc-source-') as temporary:
            root = Path(temporary)
            for member in names:
                if member.startswith(prefix + 'kubejs/') and (member.endswith('.js') or member.endswith('/machine_recipes.json')):
                    path = root / Path(member).relative_to(prefix + 'kubejs')
                    path.parent.mkdir(parents=True, exist_ok=True)
                    path.write_bytes(archive.read(member))
            subprocess.run(['node', str(PACK / 'tools/extract_construction_reference.cjs'), str(root)], check=True)

    pinned = []
    for slug, path in [('towns-kingdoms-progression', args.progression_jar), ('create-alchemical-lasers', args.lasers_jar)]:
        project = next(p for p in current if p['slug'] == slug)
        content = path.read_bytes()
        with ZipFile(io.BytesIO(content)) as jar:
            mod = tomllib.loads(jar.read('META-INF/neoforge.mods.toml').decode())['mods'][0]
        pinned.append(dict(name=mod['displayName'], mod_id=mod['modId'], version=mod['version'],
                           project_id=project['project_id'], file_id=project['file_id'], sha256=digest(content),
                           source_url=project['url'] + '/files/' + str(project['file_id'])))
    dump('pinned-custom-builds', pinned)
    # The origin guide was inspected against this exact artifact in the previous reference.
    # A different implementation requires reviewing its origins before publishing.
    expected_origin_build = '739fed011982d9f9f236ab37531f9c23fdb63f1173e2f1537f9ebd5fdfc8d6a0'
    assert pinned[0]['sha256'] == expected_origin_build, 'Review origins for the new Progression artifact'
    origins = json.loads((DATA / 'origins.json').read_text())
    construction = json.loads((DATA / 'construction-recipes.json').read_text())
    tk2_source = next(s for s in previous_snapshot['sources'] if 'TK2 3.05' in s['label'])
    archive_content = args.archive.read_bytes()
    snapshot = dict(date=args.date, snapshot='tnk3-beta-1.0', version=manifest['version'],
                    authority='The uploaded Beta 1.0 archive is the complete current mod and file baseline.',
                    minecraft=manifest['minecraft']['version'],
                    loader=next(l['id'] for l in manifest['minecraft']['modLoaders'] if l.get('primary')),
                    java=21, chapters=10, skills=len(nodes), origins=len(origins), ponders=len(scenes),
                    manifest_projects=len(current), bundled_mods=len(bundled),
                    previous_manifest_projects=len(previous), retained=len(changes['retained_projects']),
                    added=len(changes['added_projects']), absent=len(changes['absent_projects']),
                    scripts=scripts, construction_plans=len(construction['recipes']),
                    quest_export_chapters=len(chapters), quest_export_records=sum(c['quest_count'] for c in chapters),
                    tk2_quest_chapters=previous_snapshot['tk2_quest_chapters'], tk2_quests=previous_snapshot['tk2_quests'],
                    sources=[dict(name='Towns & Kingdoms 3 - Beyond the Forge-Beta 1.0.zip',
                                  label='Authoritative TNK3 Beta 1.0 export', sha256=digest(archive_content), bytes=len(archive_content)),
                             tk2_source])
    dump('snapshot', snapshot)
    print(json.dumps({k: v for k, v in snapshot.items() if k != 'sources'}, indent=2))


if __name__ == '__main__':
    main()
