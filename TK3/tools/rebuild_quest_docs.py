#!/usr/bin/env python3
"""Write the English player questbook index and a portable full-content copy."""
import json
from pathlib import Path

PACK = Path(__file__).resolve().parents[1]
M = json.loads((PACK / 'docs/progression_manifest.json').read_text())
BASE = 'https://mikaaah.github.io/TownsAndKingdoms/chapters/'
CHAPTERS = M['chapters'] + M['guide_chapters']
index = f'''# ◆ THE T&K3 QUESTBOOK

**{M['quest_count']} QUESTS · 6 CATEGORIES · 10 PROGRESSION CHAPTERS · {len(M['guide_chapters'])} GUIDE PAGES**

Follow the workshop campaign, read a character guide or pick a project for your settlement. The supporting pages are optional and remain useful as you advance.

**[OPEN THE QUESTBOOK →]({BASE})** · [Recipe paths](PLAYER_PATHS_EN.md) · [Read all quest text](QUESTBOOK_CONTENT_EN.md)

## Find your next step

| Category | What you will find | Pages | Quests |
|---|---|---:|---:|
'''
summaries = {
    'town': 'Tutorial, first-day supplies and a voluntary town project board.',
    'character': 'Six class guides, eighteen subclasses, seven professions and equipment advice.',
    'mechanical': 'Chapters I–X, Create automation, FE/ME networks and transport.',
    'magic': 'Ars Nouveau, Iron’s spellcraft and native Witchery discovery.',
    'adventure': 'Exploration, campaign boss preparation, Twilight Forest, the End and oceans.',
    'kingdom': 'Farms, food, collection, storage, MineColonies and building details.',
}
for group in M['quest_groups']:
    cs = [c for c in CHAPTERS if c['group'] == group['id']]
    index += f"| **[{group['title']}]({BASE}#category-{group['key']})** | {summaries[group['key']]} | {len(cs)} | {sum(len(c['quests']) for c in cs)} |\n"
index += '''
## Read the board

**◆ GOAL** tells you what to achieve. **◇ HOW TO** lists the useful steps. **✦ TIP** offers practical help; **! WATCH OUT** marks a relevant condition or tradeoff.

**Item and kill goals** are detected in game. **Reading checkmarks** record that you understand the guide. **Activity checkmarks** record a project you have completed yourself. Quest/info artwork serves as navigation art; you do not need to craft those icons.

The ten gold **COMPLETE CHAPTER** milestones unlock workshop progression and award their named unbreakable finishing tool **once per player**. Claim your own reward manually. Optional guides and activities do not grant extra skill points or workshop unlocks.

## Classes and subclasses

Choose your actual class and subclass in the **personal skilltree**. The FTB pages are comparison and practice guides, so you can read all of them without committing your character. Team guide progress does not choose a class for teammates.

| Class | Three specializations |
|---|---|
'''
for c in M['guide_chapters']:
    if c['source_key'].startswith('class_') and c['source_key'] != 'class_atlas':
        subclasses = [q['title'] for q in c['quests'][2:8:2]]
        index += f"| **[{c['title']}]({BASE}#chapter-{c['order_index']})** | {' · '.join(subclasses)} |\n"
index += '''
Each class has five mandatory four-node inner branches, followed by its mastery and specialization requirements. Each subclass contains three independent fourteen-node paths. The supplied tree limits your character to **one class**, **one subclass** and **one subclass keystone**. Every native node costs one point.

**Mining · Logging · Hunting · Exploration · Fishing · Farming · Crafting** are the seven profession islands. You may take up to **three profession masteries** and **three focus nodes per profession**. Profession activities in the book are useful project ideas; they do not create a separate automatic profession XP system.

## Choose a page

'''
content = f'''# ◆ T&K3 · ALL QUEST GUIDANCE

**{M['quest_count']} QUESTS** · [Questbook index](QUESTBOOK_EN.md) · [Official quest page]({BASE})

This readable copy includes the same goals, steps and tips as the in-game book, without Minecraft color codes. Item/kill detection and rewards are handled by the installed quest files. Reading and activity checkmarks record your own progress.

'''
for group in M['quest_groups']:
    index += f"### ◆ {group['title'].upper()}\n\n"
    content += f"## ◆ {group['title'].upper()}\n\n"
    for c in [c for c in CHAPTERS if c['group'] == group['id']]:
        index += f"- **[{c['title']}]({BASE}#chapter-{c['order_index']})** — {c['subtitle']} · **{len(c['quests'])} QUESTS**\n"
        content += f"### {c['title']}\n\n{c['subtitle']} · **{len(c['quests'])} QUESTS**\n\n"
        for quest in c['quests']:
            content += f"#### [{quest['title']}]({BASE}#quest-{quest['id']})\n\n**◆ GOAL:** {quest['goal']}\n\n" + '\n\n'.join(quest['description']) + '\n\n'
            if quest.get('steps'):
                content += '**◇ HOW TO**\n\n' + ''.join(f'{i}. {step}\n' for i, step in enumerate(quest['steps'], 1)) + '\n'
            content += '**✦ TIP:** ' + ' '.join(quest['tips']) + '\n\n'
            if quest.get('caution'):
                content += '**! WATCH OUT:** ' + quest['caution'] + '\n\n'
            tasks = []
            for task in quest['tasks']:
                if task['type'] == 'item':
                    tasks.append(f"{task.get('count', 1)} × `{task['item']['id']}` (kept)")
                elif task['type'] == 'kill':
                    tasks.append('Defeat `' + task['entity'] + '`')
                else:
                    tasks.append(task.get('title', 'Complete the described setup') + ' · self-reported')
            content += '**Task:** ' + ' · '.join(tasks) + '\n\n'
        content += '\n'
    index += '\n'
for name, text in [('QUESTBOOK_EN.md', index), ('QUESTBOOK_CONTENT_EN.md', content)]:
    (PACK / 'docs' / name).write_text(text)
print(json.dumps({'guide_pages': len(M['guide_chapters']), 'quests': M['quest_count'], 'documents': 2}))
