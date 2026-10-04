#!/usr/bin/env python3
"""Export the validated production snapshot for the wiki, keeping quests separate."""
from pathlib import Path
import copy
import json

PACK = Path(__file__).resolve().parents[1]
REVIEW = PACK / 'docs/production-review'
metadata = json.loads((REVIEW / 'authoring-metadata.json').read_text())
review = json.loads((REVIEW / 'review.json').read_text())
recipes = copy.deepcopy(review['intended_catalogue'])
for recipe in recipes:
    native = recipe.get('json', {})
    if native.get('pattern'):
        recipe['pattern'] = native['pattern']
    recipe.pop('required_mechanism_tier', None)
manifest = {
    'review_status': 'Repaired production snapshot; static checks passed, Minecraft test pending.',
    'package': metadata['package'],
    'package_sha256': metadata['package_sha256'],
    'recipes': recipes,
    'mechanisms': metadata['mechanisms'],
    'frames': metadata['frames'],
    'geology': metadata['geology'],
    'wood': metadata['wood'],
    'custom_items': metadata['custom_items'],
    'chapter_titles': [metadata['tier_labels'][str(t)] for t in range(1, 11)],
    'validation_scope': metadata['validation_scope'],
}
(PACK / 'docs/wiki_production_manifest.json').write_text(json.dumps(manifest, ensure_ascii=False, indent=2) + '\n')
print(json.dumps({'recipes': len(recipes), 'unique_ids': len({r['id'] for r in recipes}), 'duplicate_ids': len(review['duplicate_custom_ids']), 'questbook': 'separate'}))
