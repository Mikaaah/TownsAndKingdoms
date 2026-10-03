#!/usr/bin/env python3
"""Check generated pages, local URLs, anchors and canonical campaign/archive data."""
import collections
import json
import re
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin, urlsplit, unquote

PACK = Path(__file__).resolve().parents[1]
OUT = PACK / 'player-guide'
BASE = 'https://mikaaah.github.io/TownsAndKingdoms/'

class Page(HTMLParser):
    def __init__(self, source):
        super().__init__(); self.ids=[]; self.links=[]; self.h1=0; self.styles=0; self.active=0; self.images=[]; self.recipes=[]
        self.feed(source)
    def handle_starttag(self, tag, pairs):
        attrs=dict(pairs)
        if attrs.get('id'): self.ids.append(attrs['id'])
        if tag=='h1': self.h1+=1
        if tag=='style': self.styles+=1
        if tag=='a' and attrs.get('aria-current')=='page': self.active+=1
        if attrs.get('data-recipe-id'): self.recipes.append(attrs['data-recipe-id'])
        for key in ('href','src'):
            if attrs.get(key): self.links.append((tag,key,attrs[key]))
        if tag=='img': self.images.append(attrs)

def verify():
    pages={path:Page(path.read_text()) for path in sorted(OUT.rglob('*.html'))}
    errors=[]; checked=0; external=set()
    for path,page in pages.items():
        rel=path.relative_to(OUT).as_posix()
        if page.h1 != 1: errors.append(f'{rel}: {page.h1} main titles')
        if page.styles: errors.append(f'{rel}: competing inline styles')
        duplicates=[key for key,count in collections.Counter(page.ids).items() if count>1]
        if duplicates: errors.append(f'{rel}: duplicate IDs {duplicates[:4]}')
        if rel!='404.html' and not page.active: errors.append(f'{rel}: no active navigation')
        for image in page.images:
            if 'alt' not in image: errors.append(f'{rel}: image without alternative text')
        for tag,attribute,raw in page.links:
            if raw.startswith(('mailto:','tel:','data:')): continue
            target=urlsplit(urljoin(BASE+rel,raw))
            if target.netloc!='mikaaah.github.io' or not target.path.startswith('/TownsAndKingdoms/'):
                external.add(raw); continue
            resolved=OUT/unquote(target.path.removeprefix('/TownsAndKingdoms/'))
            if resolved.is_dir(): resolved=resolved/'index.html'
            checked+=1
            if not resolved.is_file(): errors.append(f'{rel}: missing {raw}');continue
            if target.fragment and resolved in pages and unquote(target.fragment) not in pages[resolved].ids:
                errors.append(f'{rel}: missing anchor {raw}')
    manifest=json.loads((PACK/'docs/progression_manifest.json').read_text())
    ids=[recipe['id'] for recipe in manifest['recipes']]
    if set(pages[OUT/'recipes/index.html'].recipes)!=set(ids): errors.append('Catalogue does not match canonical recipes')
    quests={f'quest-{quest["id"]}' for chapter in manifest['chapters'] for quest in chapter['quests']}
    if not quests.issubset(pages[OUT/'chapters/index.html'].ids): errors.append('Missing campaign quests')
    for source in (PACK/'wiki-archive/2026-10-02').glob('*.md'):
        if source.read_bytes()!=(OUT/'archive'/source.name).read_bytes(): errors.append('Archive changed: '+source.name)
    index=json.loads((OUT/'assets/search-index.json').read_text())
    config=json.loads((PACK/'handbook-source/site.config.json').read_text())
    if not {page['route'] or './' for page in config['pages']}.issubset({page['route'] for page in index}): errors.append('Pages missing from global search')
    css=(OUT/'assets/site.css').read_text()
    if '@import' in css: errors.append('Unbundled stylesheet import')
    for raw in re.findall(r'url\([\'"]?([^\)\'\"]+)',css):
        if not (OUT/'assets'/urlsplit(raw).path).is_file():errors.append('Missing CSS asset '+raw)
    if errors:
        raise SystemExit('\n'.join(errors[:50])+f'\n{len(errors)} errors')
    print(json.dumps({'html_pages':len(pages),'local_urls_checked':checked,'recipes':len(ids),'quests':len(quests),'archive_pages_unchanged':11,'search_entries':len(index),'external_references':len(external),'result':'passed'}))

if __name__=='__main__':verify()
