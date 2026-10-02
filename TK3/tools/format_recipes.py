#!/usr/bin/env python3
"""Format authored recipes in the original T&K2 section style.

Developer dependency: python3 -m pip install jsbeautifier==2.0.3
Run: python3 TK3/tools/format_recipes.py --pack TK3
Recipe expressions are preserved; only their grouping and whitespace change.
"""
import argparse
import collections
import json
import re
from pathlib import Path

import jsbeautifier

TOKEN = re.compile(r'"(?:\\.|[^"\\])*"|\'(?:\\.|[^\'\\])*\'|`(?:\\.|[^`\\])*`|//[^\n]*|/\*[\s\S]*?\*/|\s+|[^\s]')


def tokens(text):
    return [t for t in TOKEN.findall(text) if not t.isspace() and not t.startswith(('//', '/*'))]


def banner(title):
    return '//->------------------------]  ' + title + ' [------------------------<-//'


def layout(text):
    """Force vertical ingredient arrays and object fields before indentation."""
    text = re.sub(r'\b(event\.[\w.]+|AE2Recipes\.\w+)\(', r'\1(\n', text)
    parts = TOKEN.findall(text)
    result = []
    brackets = []
    for i, token in enumerate(parts):
        if token.startswith(('"', "'", '`', '//', '/*')):
            result.append(token)
            continue
        if token == '[':
            following = next((t for t in parts[i + 1:] if not t.isspace()), ']')
            vertical = following != ']' and (following.startswith(('"', "'", '{', '[')) or following == 'e' or following == 'A')
            brackets.append(vertical)
            result.append(token + ('\n' if vertical else ''))
        elif token == ']':
            vertical = brackets.pop() if brackets else False
            result.append(('\n' if vertical else '') + token)
        elif token in ('{', '}'):
            result.append(token + '\n' if token == '{' else '\n' + token)
        elif token == ',':
            result.append(',\n')
        else:
            result.append(token)
    opts = jsbeautifier.default_options()
    opts.indent_size = 4
    opts.wrap_line_length = 100
    opts.break_chained_methods = True
    opts.preserve_newlines = True
    opts.max_preserve_newlines = 2
    rendered = jsbeautifier.beautify(''.join(result), opts)
    # Keep one indentation level per multiline delimiter, including nested steps.
    stack = []
    lines = []
    for line in rendered.splitlines():
        stripped = line.strip()
        if not stripped and sum(v != 'outer' for v in stack) > 1:
            continue
        code = tokens(stripped)
        leading = 0
        for token in code:
            if token not in (']', '}', ')'):
                break
            leading += 1
            break
        visible_stack = stack[:-leading] if leading else stack
        depth = sum(v != 'outer' for v in visible_stack)
        if stripped.startswith('.'):
            depth += 1
        lines.append(' ' * (4 * depth) + stripped if stripped else '')
        outer = stripped.startswith('ServerEvents.recipes(')
        for token in code:
            if token in ('[', '{', '('):
                stack.append('outer' if outer and token == '(' else token)
                if token == '(':
                    outer = False
            elif token in (']', '}', ')'):
                assert stack, 'Unbalanced script delimiters'
                stack.pop()
    assert not stack, 'Unbalanced script delimiters'
    return '\n'.join(lines).rstrip() + '\n'


def section(row):
    kind, system = row['kind'], row['system']
    output = re.sub(r'^\d+x ', '', row['output'])
    mod = output.split(':')[0]
    if system in ('create', 'campaign', 'addons', 'ae_network', 'industrial'):
        purpose = row['section']
    elif system == 'compat':
        purpose = ('Timber processing' if kind == 'cutting' else 'Vanilla compatibility') + ' / ' + mod
    elif system in ('magic', 'storage', 'late_layers'):
        purpose = mod.replace('_', ' ').title() + ' / ' + ('Processing' if kind not in ('shaped', 'shapeless', 'wrapped') else 'Crafting')
    elif kind == 'sequence':
        purpose = 'Mechanisms / Sequenced assembly'
    elif kind == 'stonecutting':
        purpose = 'Machine cutting'
    elif system == 'frames':
        purpose = 'Machine frames' if kind in ('deploying', 'shaped') else 'Machine components'
    elif kind in ('milling', 'crushing', 'splashing', 'haunting', 'pressing', 'compacting'):
        purpose = 'Resource processing / ' + kind.title()
    elif kind == 'shaped':
        purpose = 'Tools & components'
    else:
        purpose = 'Materials / ' + kind.title()
    return row['tier'], purpose


def format_file(path, metadata):
    original = path.read_text()
    blocks = list(re.finditer(r'^  // (?:tier \d+ \| [^\n]+|Tier \d+ · [^\n]+)\n((?:  //[^\n]*\n)*  (?:event|AE2Recipes)\.[^\n]+)\n', original, re.M))
    if blocks:
        groups = collections.defaultdict(list)
        for block in blocks:
            expression = block[1]
            ids = [rid for rid in re.findall(r'"(kubejs:tk3/[^"\n]+)"', expression) if rid in metadata]
            assert len(ids) == 1, (path, ids)
            row = metadata[ids[0]]
            groups[section(row)].append((row, expression))
        prefix = original[:blocks[0].start()]
        prefix = prefix.replace('ServerEvents.recipes(event => {\n', 'ServerEvents.recipes(event => {\n\n' + banner('Required Items') + '\n\n', 1)
        formatted = prefix
        order = {'Materials': 0, 'Casings': 0, 'Tools': 1, 'Mechanisms': 2, 'Machine frames': 3, 'Machine cutting': 4, 'Resource processing': 5}
        def group_order(entry):
            (tier, purpose), _ = entry
            return tier, next((v for k, v in order.items() if purpose.startswith(k)), 6), purpose
        for (tier, purpose), entries in sorted(groups.items(), key=group_order):
            formatted += '\n' + banner('Tier ' + str(tier) + ' / ' + purpose) + '\n\n'
            for row, expression in entries:
                names = {'kubejs:tk3_rotation_mechanism': 'Kinetic Mechanism', 'kubejs:tk3_sealed_mechanism': 'Sealed Mechanism', 'kubejs:tk3_arcane_mechanism': 'Arcane Mechanism'}
                output = re.sub(r'^\d+x ', '', row['output'])
                name = names.get(output, output.split(':')[-1].replace('tk3_', '').replace('_', ' ').title())
                formatted += '  // ' + name + ' / ' + row['kind'].replace('_', ' ').title() + '\n' + expression + '\n\n'
        formatted += original[blocks[-1].end():]
        # Every original recipe block must still exist, without changes to its tokens.
        for block in blocks:
            assert tokens(block[1]) == tokens(next(expr for entries in groups.values() for _, expr in entries if expr == block[1]))
    else:
        title = 'Removed Recipes' if path.name == 'tk3_recipe_cleanup.js' else 'Approved Recipe IDs / Final Cleanup'
        formatted = original if '//->------------------------]' in original else original.replace('ServerEvents.recipes(event => {\n', 'ServerEvents.recipes(event => {\n\n' + banner(title) + '\n\n', 1)
    result = layout(formatted)
    assert tokens(formatted) == tokens(result), 'Formatting changed code tokens: ' + str(path)
    path.write_text(result)
    return len(blocks)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--pack', type=Path, default=Path(__file__).resolve().parents[1])
    args = parser.parse_args()
    metadata = {r['id']: r for r in json.loads((args.pack / 'docs/progression_manifest.json').read_text())['recipes']}
    paths = sorted((args.pack / 'kubejs/server_scripts/recipes').glob('*.js'))
    count = sum(format_file(p, metadata) for p in paths)
    print(f'Formatted {len(paths)} recipe scripts; grouped {count} recipe blocks; code tokens preserved.')


if __name__ == '__main__':
    main()
