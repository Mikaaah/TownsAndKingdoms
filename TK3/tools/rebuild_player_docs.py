from pathlib import Path
import json,re,html,collections
ROOT=Path(__file__).resolve().parents[1]
m=json.loads((ROOT/'docs/progression_manifest.json').read_text())
def write(p,s):(ROOT/p).write_text(s)
def oid(x):return re.sub(r'^\d+x ','',x)
def name(x):
 if isinstance(x,dict):return str(x.get('amount',''))+' mB '+name(x.get('fluid','water'))
 raw=oid(x).lstrip('#');n=raw.replace('kubejs:tk3_','')
 label=m['custom_items'].get(n,m.get('frame_labels',{}).get(next((t for t,f in m['frames'].items()if f==raw),'')))
 if not label:label=raw.split(':')[-1].replace('_',' ').title()
 return (x.split('x ')[0]+' × 'if re.match(r'^\d+x ',x)else'')+('Any matching 'if x.startswith('#')else'')+label
def link(r):return '[Open recipe →](https://mikaaah.github.io/TownsAndKingdoms/workshop/?recipe='+r['id'].replace(':','%3A').replace('/','%2F')+')'
frames=[];paths=[]
casings={1:'create:andesite_casing',2:'create:copper_casing',3:'create:brass_casing',4:'mekanism:steel_casing',5:'mekanism:steel_casing',6:'mekanism:steel_casing',7:'create_wizardry:arcane_casing',8:'mekanism:steel_casing',9:'ae2:fluix_block',10:'mekanism:sps_casing'}
guide='# T&K3 · CHAPTERS & PRODUCTION\n\n**10 CHAPTERS · '+str(m['quest_count'])+' QUESTS · '+str(len(m['recipes']))+' MANAGED RECIPES**\n\nBuild an andesite workshop, develop copper and brass production, then connect it to **AE2 and Mekanism in chapter 4**. **The Nether opens in chapter 3; the End opens in chapter 5.** Keep your early factories running as the later chapters add chemicals, magic, boss catalysts and quantum production.\n\n## The ten workshops\n\n| Chapter | Workshop | Frame construction | Main systems |\n|---|---|---|---|\n'
roles={1:'Mechanical power, wood, crops and geological processing',2:'Copper, seals, fluids, irrigation and ocean minerals',3:'Nether heat, brass logistics and Hypertubes',4:'First FE, AE2 networks, processors and parallel arcane automation',5:'End access, advanced Mekanism factories and Dragon’s Breath',6:'HDPE, gases, chemical equipment and ME chemical storage',7:'Radiance, 16k storage, airships and expeditions',8:'Overcharge, fission, waste handling, turbines and spatial storage',9:'Stargaze, retained Void imprint, SPS, fusion and quantum links',10:'Sovereign Keystone, 256k storage and advanced powered equipment'}
for t in range(1,11):
 mech=m['mechanisms'][str(t)];frame=m['frames'][str(t)]
 construction=name(casings[t])+' → deploy '+name(mech)
 guide+='| **'+str(t)+'** | **'+m['tier_labels'][str(t)]+'** | '+construction+' | '+roles[t]+' |\n'
 frames.append((t,name(frame),construction,roles[t]))
 text='\n## Chapter '+str(t)+' · '+m['tier_labels'][str(t)]+'\n\n**'+roles[t]+'.**\n\n'
 # All essential components and actual machine bootstraps appear before their frame path.
 for q in m['chapters'][t-1]['quests']:
  if q['title'].startswith(('Workshop plan','Complete chapter','Run the workshop'))or q.get('optional'):continue
  text+='**'+q['title']+'** — '+' '.join(q['description'])+'\n\n'
 r=next(r for r in m['recipes']if r['output']==mech)
 text+='**Ordered mechanism path:** '+name(r['inputs'][0])+' → '+' → '.join('deploy '+name(x)for x in r['inputs'][1:-1])+' → finish with **'+name(r['tool'])+'**. **One loop, one guaranteed result.** '+link(r)+'\n\n'
 text+='**Machine path:** '+construction+' → **'+name(frame)+'** → the listed stonecutting, crafting, apparatus or preserving upgrade recipe.\n\n'
 paths.append(text)
guide+='\n## First workshop\n\nCraft Algal Blend from kelp and clay, then Andesite Alloy from blend and andesite. Craft the first **Kinetic Machine** manually: **7 alloy + Andesite Casing + wooden slab**, in **AAA / ACA / ASA**. Use a vanilla stonecutter to turn separate frames into a water wheel, press, basin, mixer and Deployer. Only then assemble mechanisms. The automated frame costs a casing and one mechanism.\n\n## What remains native\n\nChannels, energy, Source, heat, chemical quantities, radiation and native cell/machine upgrade data still matter. End Remastered keeps its **twelve different valid eyes** puzzle. Earlier mechanisms have one authored sequenced route; controlled machine and material outputs accept only the listed recipes. Native chemistry and exploration sources that are explicitly retained remain valid.\n\n## Boss catalysts\n\n| Chapter | Defeat | Permanent catalyst |\n|---|---|---|\n'
for b in m['campaign_extension']['bosses']:guide+='| '+str(b['tier'])+' | **'+name(b['entity'])+'** | '+name(b['item'])+' |\n'
guide+='\nRetained deployments leave the physical core in the Deployer. The final Keystone imprints **all five cores** without consuming them. Repeated kills supply parallel stations.\n\n[Exact recipe paths](PLAYER_PATHS_EN.md) · [Mods & tiers](MOD_TIER_MAP_EN.md) · [All quests](https://mikaaah.github.io/TownsAndKingdoms/chapters/)\n'
write('docs/PROGRESSION_EN.md',guide)
pathdoc='# T&K3 · RECIPE PATHS\n\nFollow these paths in chapter order. **The mechanism is sequenced; the frame receives the mechanism in a Deployer.** Every listed recipe has its exact ingredients in the [Recipe Workshop](https://mikaaah.github.io/TownsAndKingdoms/workshop/).\n'+''.join(paths)
for p in ['docs/PLAYER_PATHS_EN.md','docs/RECIPE_PATHS_EN.md']:write(p,pathdoc)
write('docs/ASSEMBLY_TOOLS_EN.md','# T&K3 · WORKSHOP TOOLS\n\nMechanisms finish with a Deployer holding an ordinary mod tool. Completing the chapter grants **one unbreakable version per player**. Boss imprint steps retain their catalyst explicitly.\n\n| Chapter | Tool | Workshop |\n|---|---|---|\n'+''.join('| '+str(a['tier'])+' | **'+name(a['item'])+'** | '+a['name']+' |\n'for a in m['assembly_tools'])+'\nThe parallel Arcane Mechanism and final Keystone use an **Ars Enchanter’s Sword**. A chapter 9 reward provides an unbreakable sword for the final imprinting line.\n')
write('docs/TEXTURES_EN.md','# T&K3 · ITEMS & ASSETS\n\nThe supplied ZIP provides the custom mechanism, unfinished mechanism, material and casing textures. **'+str(m['quest_icon_count'])+' quest and information icons** are registered as items without crafting recipes. All animations retain their original `.png.mcmeta` files.\n\nThe asset catalog in `progression_manifest.json` records each item’s source and texture. Custom frames use native Create casings at chapters 1–3 and the supplied casing faces for later workshops. A full Minecraft restart registers new items and blocks.\n')
# Keep the established site markup and visual system. Content alone is regenerated.
def markdown_table(rows,heads):return '<table><thead><tr>'+''.join('<th>'+html.escape(h)+'</th>'for h in heads)+'</tr></thead><tbody>'+''.join('<tr>'+''.join('<td>'+html.escape(str(v))+'</td>'for v in row)+'</tr>'for row in rows)+'</tbody></table>'
cards=''.join('<a class="tier-card" href="#tier-'+str(t)+'"><span class="tier-number">'+str(t).zfill(2)+'</span><h3>'+html.escape(m['tier_labels'][str(t)])+'</h3><p>'+html.escape(roles[t])+'</p><span class="frame-label">'+html.escape(name(m['frames'][str(t)]))+'</span></a>'for t in range(1,11))
progress='<section id="overview"><header class="section-heading"><span class="eyebrow">01 / Your first workshop</span><h2>Start small. Build a kingdom.</h2><p>Ten connected workshops, from andesite to the Sovereign project.</p></header><div class="section-body"><p>Build the first Kinetic Machine by hand, then automate mechanisms. The Nether opens in chapter 3, AE2 and Mekanism begin in chapter 4, and the End opens in chapter 5.</p><div class="tier-grid">'+cards+'</div><h3>Your first steps</h3><ol><li>Kelp + clay → Algal Blend.</li><li>Andesite + blend → Andesite Alloy.</li><li>Craft the first frame: 7 alloy + casing + slab (AAA / ACA / ASA).</li><li>Stonecut separate frames into power, press, basin, mixer and Deployer.</li><li>Sequence mechanisms and deploy them onto casings.</li></ol></div></section>'
progress+='<section id="frames"><header class="section-heading"><span class="eyebrow">02 / Build your machines</span><h2>One frame, a choice of machines</h2><p>Each frame has a clear tier and production role.</p></header><div class="section-body">'+markdown_table(frames,['Tier','Frame','Assembly','Workshop role'])+'<p>Chapter 4 also has a parallel Arcane Machine for Ars and Wizardry. Every mechanism uses sequenced assembly; only the first Kinetic Machine has a manual raw-material startup recipe. Stonecutting consumes its input frame. A listed batch is the result of that one recipe.</p></div></section>'
progress+='<section id="paths"><header class="section-heading"><span class="eyebrow">03 / Follow the chain</span><h2>Tier walkthroughs</h2><p>Exact inputs, ordered operations and reachable machine bootstraps.</p></header><div class="section-body">'
for t,path in enumerate(paths,1):
 progress+='<!-- markdown-path-'+str(t)+' -->\n<h2 id="tier-'+str(t)+'">'+html.escape(m['tier_labels'][str(t)])+'</h2>\n'
 # Convert only our plain paragraphs, bold text and the recipe link.
 for paragraph in path.split('\n\n')[1:]:
  if not paragraph.strip():continue
  s=html.escape(paragraph.strip());s=re.sub(r'\*\*([^*]+)\*\*',r'<strong>\1</strong>',s)
  s=re.sub(r'\[Open recipe →\]\(([^)]+)\)',r'<a class="visual-link" href="\1">Open recipe →</a>',s)
  progress+='<p>'+s+'</p>\n'
progress+='</div></section>'
progress+='<section id="geology"><header class="section-heading"><span class="eyebrow">04 / Renewable resources</span><h2>Stone into materials</h2><p>Place the selector immediately below the generated stone, and its frame one block further down.</p></header><div class="section-body"><span id="compat"></span>'+markdown_table([(g['tier'],name(g['stone']),name(g['lens']),name(m['frames'][str(g['tier'])]),name(g['mill']),name(g['crush']))for g in m['geology']],['Tier','Generated stone','Selector','Frame','Milling yield','Crushing yield'])+'<p>The generator changes new cobblestone or stone placements. Obsidian is preserved. Crushing Wheels begin with brass in chapter 3; early selectors can use a Millstone first.</p></div></section>'
progress+='<section id="wood"><header class="section-heading"><span class="eyebrow">05 / Supply your kingdom</span><h2>Wood, crops &amp; collection</h2><p>Keep early production useful throughout all ten chapters.</p></header><div class="section-body"><p>Supported logs saw into stripped logs, then into six planks. Start a wheat, kelp and bone-meal line for seals, calcium and chemical Bio Fuel. Slicers handle supported Farmer’s Delight cutting recipes. A Hopper Upgrade exchanges with adjacent inventories; a Pickup Upgrade handles dropped items. Use filters and buffers before connecting the workshop to ME.</p><p><a href="../automation/">Open the automation guide →</a></p></div></section>'
progress+='<section id="chapters"><header class="section-heading"><span class="eyebrow">06 / Follow the campaign</span><h2>Goals, dependencies &amp; rewards</h2><p>'+str(m['quest_count'])+' quests: ten progression chapters and '+str(len(m.get('guide_chapters',[])))+' guide pages. Follow the campaign or explore tutorials, character paths and optional projects.</p></header><div class="section-body"><p><a href="../chapters/">Open all chapter quests →</a> · <a href="../recipes/">Open the recipe catalogue →</a> · <a href="../3.0/tier-map/">Mods &amp; tiers →</a></p></div></section>'
write('handbook-source/progression.html',progress+'\n')
# Remove obsolete hard-coded quest translations; authored quest text is now English.
p=ROOT/'handbook-source/campaign-pages.cjs';s=p.read_text();s=re.sub(r'const descriptionTranslations=\{[^\n]+\};','const descriptionTranslations={};',s);s=s.replace("task.type==='checkmark'?'Confirm the working setup':esc(task.title||task.type)","task.type==='checkmark'?'Confirm the working setup':task.type==='kill'?'Defeat '+esc(name(task.entity)):esc(task.title||task.type)");p.write_text(s)
content={
'engineering.md':'''# ENGINEERING & STORAGE

**ANDESITE → COPPER → BRASS → FE & ME → ENDER → CHEMICAL → SOVEREIGN.**

## Create · build the backbone

Start with a **manual Kinetic Machine**, then sequence mechanisms and deploy them onto casings. Earlier factories keep supplying the later layers. **Slice & Dice** connects Farmer’s Delight cutting and irrigation; **Aquatic Ambitions** connects copper fluid handling with ocean minerals and conduit processing. **Hypertubes** joins the brass logistics workshop.

## Chapter 4 · first FE and ME

Bootstrap steel with heated mixing. Steel Casing and a Precision Mechanism make the first Metallurgic Infuser. Build a Heat Generator, cables, Charger and Inscriber before making the **Inductive Mechanism**. **Crafts & Additions** bridges rotational power and FE. AE2 starts with **1k storage, terminals, buses and processors**; the larger cells arrive later.

## Chapters 5–7 · factories and chemistry

**Chapter 5** opens the End and advanced factories. **Chapter 6** introduces HDPE, hydrogen, chlorine, hydrogen chloride and **Applied Mekanistics chemical cells**. The first gas machines use an Ender Machine, so HDPE is reachable before the Chemical Machine. **Chapter 7** treats Shadow Steel into Radiance and adds expedition airships, wireless access and 16k storage.

## Chapters 8–10 · containment and quantum production

Containment enables fission, turbines and waste handling. Build the first SPS from Containment Frames in chapter 9, then use native antimatter processing to make Stargaze Singularities. Fusion, quantum links and 64k storage support the line. Chapter 10 finishes with 256k storage, powered equipment and the Sovereign Keystone.

## Storage that stays useful

**Sophisticated Storage & Backpacks** provide early collection, filtering, processing and upgrades. Their native preserving recipes keep contents and components. The **Create integration** lets supported storage upgrades work on contraptions. ME chemical cell upgrades also preserve their stored chemicals.

**[TEN CHAPTER PATHS →](../../progression/#paths)** · [Exact recipes](../../recipes/) · [Automation guide](../../automation/) · [Mods & tiers](../tier-map/)
''',
'magic.md':'''# MAGIC & ARCANE INDUSTRY

**GROW SOURCE. SHAPE COMPONENTS. EQUIP YOUR CHARACTER.**

## Ars Nouveau · living automation

The bootstrap Agronomic Sourcelink uses a Precision Machine, wheat, Source Gems and Source Jar. Crop growth generates Source before the Arcane Machine. In **chapter 4**, a Precision Machine bootstraps the Enchanting Apparatus. Assemble an **Arcane Mechanism**, make Wizardry’s Arcane Casing, and deploy the mechanism to create an **Arcane Machine**. This is a parallel branch alongside first FE and ME.

Use Source links, relays, Whirlisprigs and other native automation helpers. **Ars Creo** and **Create: Ars Nouveau Compat** connect Ars with machinery and contraptions. Ars material recipes use the actual addon serializers and Source costs.

## Iron’s Spells · spellcasting and materials

Use native spellbooks, spell progression and combat gear alongside factory development. **Create: Wizardry** connects Mana, arcane sheets, runes and Iron’s cauldron processing to the factory. Check Source, heat and fluid requirements before connecting automation.

## Iron’s Gems ’n Jewelry

The **chapter 2 Jewelcrafting Station** uses the copper workshop. Its guide, scroll recipes, gemstones and jewelry data keep their native systems. Jewelcrafting supports equipment without becoming a compulsory ingredient in every machine.

## Reusable boss catalysts

The Dragon trial quest awards the Dragon Core; player-kill loot from the Twilight Lich, Harbinger, Ignis and Ender Guardian supplies the other four permanent imprints. Their retained deployment recipes improve throughput or attune a late component. The final Keystone records all five cores without consuming them.

**[CHAPTER PATHS →](../../progression/#paths)** · [Recipe workshop](../../workshop/) · [Exploration & combat](../exploration/) · [Mods & tiers](../tier-map/)
'''}
for p,s in content.items():write('handbook-source/'+p,s)
p=ROOT/'handbook-source/exploration.md';s=p.read_text();s=re.sub(r'In the authored workshop route,[^\n]+','**Chapter 3 opens the Nether; chapter 5 opens the End.** End Remastered keeps its twelve unique-eye puzzle. Defeat the Dragon in chapter 5, Twilight Lich in chapter 6, Harbinger in chapter 7, Ignis in chapter 8 and Ender Guardian in chapter 9 for permanent cores. The core remains in retained deployment steps.',s);p.write_text(s)
p=ROOT/'handbook-source/features.md';s=p.read_text();s=s.replace('Just Another Witchery Remake','Iron’s Gems ’n Jewelry').replace('Chapter V','Chapter IV').replace('Chapter VI','Chapter IV');p.write_text(s)
print('Player documentation updated; site styles and templates preserved')
