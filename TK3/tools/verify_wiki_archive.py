"""Verify the captured wiki before replacing its pages with the requested redirect."""
from pathlib import Path
import hashlib
import json
import sys

wiki=Path(sys.argv[1])
archive=Path('TK3/wiki-archive')
manifest=json.loads((archive/'migration.json').read_text())
redirect=Path('TK3/wiki')
expected={p['file']:p['sha256'] for p in manifest['pages']}
actual={p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in wiki.glob('*.md')}
already={p.name:hashlib.sha256(p.read_bytes()).hexdigest() for p in redirect.glob('*.md')}
if actual==already:
    print('Wiki already contains the current redirects.')
    sys.exit(0)
if actual in manifest.get('portal_history', []):
    print('Wiki contains an exact previously published portal. The branding update may proceed.')
    sys.exit(0)
for name,digest in expected.items():
    original=archive/'2026-10-02'/name
    if hashlib.sha256(original.read_bytes()).hexdigest()!=digest:
        sys.exit(f'Archived page does not match its recorded hash: {name}')
if actual!=expected:
    changed=sorted(name for name in set(actual)|set(expected) if actual.get(name)!=expected.get(name))
    sys.exit('Wiki changed after the migration snapshot; preserve those changes before cleanup: '+', '.join(changed))
print(f'All {len(expected)} original wiki pages have exact archived copies. Redirect replacement may proceed.')
