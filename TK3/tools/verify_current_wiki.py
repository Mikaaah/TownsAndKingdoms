#!/usr/bin/env python3
"""Validate the published documentation, not Minecraft/runtime compatibility."""
import hashlib,json
from collections import Counter
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urljoin,urlsplit,unquote

PACK=Path(__file__).resolve().parents[1]
OUT=PACK/'player-guide'
SOURCE=PACK/'handbook-source/current'
BASE='https://mikaaah.github.io/TownsAndKingdoms/'
errors=[]
class Page(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True);self.ids=[];self.links=[];self.has_title=False;self.viewport=False
    def handle_starttag(self,tag,attrs):
        a=dict(attrs)
        if 'id' in a:self.ids.append(a['id'])
        if tag=='a' and a.get('href'):self.links.append(a['href'])
        if tag in ['script','img'] and a.get('src'):self.links.append(a['src'])
        if tag=='link' and a.get('rel') in ['stylesheet','icon']:self.links.append(a['href'])
        if tag=='img' and 'alt' not in a:errors.append('Image missing alt attribute')
        if tag=='meta' and a.get('name')=='viewport':self.viewport=True
        if tag=='title':self.has_title=True

manifest=json.loads((OUT/'build-manifest.json').read_text())
reference=json.loads((OUT/'reference.json').read_text())
snapshot=json.loads((SOURCE/'data/snapshot.json').read_text())
assert reference['snapshot']==snapshot['snapshot']
assert reference['counts']==dict(skills=588,origins=20,ponders=97,construction_plans=344)
assert len(json.loads((SOURCE/'data/skills.json').read_text())['nodes'])==588
assert len(json.loads((SOURCE/'data/origins.json').read_text()))==20
assert len(json.loads((SOURCE/'data/ponders.json').read_text()))==97
assert len(json.loads((SOURCE/'data/construction-recipes.json').read_text())['recipes'])==344
inventory=json.loads((SOURCE/'data/inventory.json').read_text())
assert [len(inventory[k]) for k in ['current','previous','added_projects','retained_projects','absent_projects']]==[283,323,177,106,217]

pages={}
for file in OUT.rglob('*.html'):
    parser=Page();parser.feed(file.read_text());pages[file.resolve()]=parser
    if not parser.has_title:errors.append(str(file.relative_to(OUT))+': no title')
    if not parser.viewport:errors.append(str(file.relative_to(OUT))+': no viewport')
    duplicates=[k for k,n in Counter(parser.ids).items() if n>1]
    if duplicates:errors.append(str(file.relative_to(OUT))+': duplicate IDs '+str(duplicates))
for file,parser in pages.items():
    route=str(file.relative_to(OUT.resolve()))
    legacy=route.startswith(('2.0/','archive/'))
    for href in parser.links:
        if href.startswith(('mailto:','tel:','data:')):continue
        u=urlsplit(urljoin(BASE+route,href))
        if u.netloc!='mikaaah.github.io' or not u.path.startswith('/TownsAndKingdoms/'):continue
        local=OUT/unquote(u.path.removeprefix('/TownsAndKingdoms/'))
        if local.is_dir() or u.path.endswith('/'):local=local/'index.html'
        if not local.exists():
            errors.append(route+': missing target '+href);continue
        if u.fragment and local.suffix=='.html' and not legacy:
            target=pages.get(local.resolve())
            if target and unquote(u.fragment) not in target.ids:errors.append(route+': missing fragment '+href)

for name,digest in reference['archive_hashes'].items():
    original=PACK/'wiki-archive/2026-10-02'/name
    copied=OUT/'archive/2026-10-02'/name
    assert hashlib.sha256(original.read_bytes()).hexdigest()==digest
    assert copied.read_bytes()==original.read_bytes(),name+' archive changed'
for i,name in enumerate(['Manual','Andesite','Copper','Brass','Calculation','Reinforced','Industrial','Arcane','Eclipse','Creation'],1):
    file=OUT/'progression'/f'chapter-{i:02}'/'index.html'
    assert file.exists() and name in file.read_text()
for route in json.loads((SOURCE/'former-routes.json').read_text()):
    assert (OUT/route/'index.html').exists(),'Lost former route '+route
for route,destination in manifest['redirects'].items():
    assert (OUT/destination/'index.html').exists(),'Bad redirect '+route

search=json.loads((OUT/'assets/search.json').read_text())
for item in search:
    u=urlsplit(item['url']);target=(OUT/u.path/'index.html').resolve()
    if target not in pages:errors.append('Search target missing: '+item['url'])
    elif u.fragment and u.fragment not in pages[target].ids:errors.append('Search anchor missing: '+item['url'])
assert len(search)==manifest['search_entries']

if errors:
    print('\n'.join(errors[:80]))
    raise SystemExit(f'{len(errors)} documentation errors')
print(json.dumps(dict(content_pages=len(manifest['pages']),html_files=len(pages),redirects=len(manifest['redirects']),search_entries=len(search),original_archives_preserved=len(reference['archive_hashes']),status='passed'),indent=2))
