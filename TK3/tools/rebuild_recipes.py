#!/usr/bin/env python3
"""Compile the canonical campaign into grouped, readable KubeJS scripts.

Edit docs/progression_manifest.json, then run this script and format_recipes.py.
Native JSON is kept intact, including conditions and preserving serializers.
"""
from pathlib import Path
import json,re,collections
ROOT=Path(__file__).resolve().parents[1]
m=json.loads((ROOT/'docs/progression_manifest.json').read_text())
def j(v):return json.dumps(v,ensure_ascii=False)
def oid(v):return re.sub(r'^\d+x ','',v)
def expanded(a):
 values=[]
 for x in a:
  match=re.match(r'^(\d+)x (.*)$',x)if isinstance(x,str)else None
  values.extend([match[2]]*int(match[1])if match else[x])
 return values
def ing(v):return 'Fluid.of('+j(v['fluid'])+', '+str(v['amount'])+')'if isinstance(v,dict)else j(v)
def expression(r):
 k=r['kind'];a=r['inputs'];out=j(r['output']);rid=j(r['id'])
 if r.get('json'):return 'event.custom('+j(r['json'])+').id('+rid+');'
 if k in ('shaped','mechanical_crafting'):
  method='event.shaped'if k=='shaped'else'event.recipes.create.mechanical_crafting'
  return method+'('+out+', '+j(r['pattern'])+', '+j(a)+').id('+rid+');'
 if k=='shapeless':return 'event.shapeless('+out+', '+j(expanded(a))+').id('+rid+');'
 if k=='stonecutting':return 'event.stonecutting('+out+', '+j(a[0])+').id('+rid+');'
 if k=='apparatus':return 'event.recipes.ars_nouveau.enchanting_apparatus('+j(a[1:])+', '+j(a[0])+', '+out+', '+str(r.get('source',1000))+').id('+rid+');'
 if k=='ae_charger':return 'AE2Recipes.charger(event, '+j(a[0])+', '+out+', '+rid+');'
 if k=='ae_print':return 'AE2Recipes.inscriberPress(event, '+j(a[0])+', '+j(a[1])+', '+out+', '+rid+');'
 if k=='ae_processor':return 'AE2Recipes.inscriberWithBottom(event, "press", '+', '.join(map(j,a))+', '+out+', '+rid+');'
 if k in ('enriching','mek_enriching','mek_smelting'):
  return 'event.recipes.mekanism.'+('smelting'if k=='mek_smelting'else'enriching')+'('+out+', '+j(a[0])+').id('+rid+');'
 if k=='cauldron_brew':return 'event.recipes.irons_spellbooks.alchemist_cauldron_brew(['+ing(r['fluid_output'])+'], '+j(a[0])+', '+ing(r['base'])+').id('+rid+');'
 if k=='cauldron_empty':return 'event.recipes.irons_spellbooks.alchemist_cauldron_empty('+out+', '+j(a[0])+', '+ing(r['fluid'])+').id('+rid+');'
 if k=='sequence':
  steps=[]
  for i,v in enumerate(a[1:]):
   step='event.recipes.create.deploying(['+j(r['transition'])+'], ['+j(r['transition'])+', '+j(v)+'])'
   if i in r.get('keep_steps',[]):step+='.keepHeldItem()'
   steps.append(step)
  return 'event.recipes.create.sequenced_assembly(['+out+'], '+j(a[0])+', ['+', '.join(steps)+']).transitionalItem('+j(r['transition'])+').loops(1).id('+rid+');'
 suffix='.keepHeldItem()'if r.get('keep')else'.heated()'if r.get('heated')else''
 assert k in ('cutting','mixing','pressing','deploying','milling','crushing','splashing','haunting','compacting'),k
 return 'event.recipes.create.'+k+'(['+out+'], ['+', '.join(ing(v)for v in expanded(a))+'])'+suffix+'.id('+rid+');'
folder=ROOT/'kubejs/server_scripts/recipes'
# Only campaign recipe scripts are generated; unrelated server scripts are untouched.
for p in folder.glob('tk3_*.js'):
 if p.name not in ('tk3_whitelist.js','tk3_recipe_cleanup.js'):p.unlink()
groups=collections.defaultdict(list)
for r in m['recipes']:
 system='tier_'+str(r['tier'])if r['system']=='core'else r['system']
 groups[system].append(r)
for system,rows in groups.items():
 text='// priority: 0\n// Generated from docs/progression_manifest.json. See tools/rebuild_recipes.py.\nServerEvents.recipes(event => {\n'
 for r in rows:text+='\n  // tier '+str(r['tier'])+' | '+r['id']+'\n  '+expression(r)+'\n'
 (folder/('tk3_'+system+'.js')).write_text(text+'});\n')
existing=m['output_whitelist']
controlled=set(existing)|{oid(r['output'])for r in m['recipes']if r.get('strict')and not r.get('fluid_output')}
# Drop obsolete optional addon references from all enforcement tables.
unsupported=('witchery:','ars_n_spells:','alexs_caves_spellbooks:','cataclysm_spellbooks:','twilight_spellbooks:','ice_and_fire_spellbooks:')
controlled={out for out in controlled if not out.startswith(unsupported)}
allowed={out:[]for out in sorted(controlled)}
for r in m['recipes']:
 if oid(r['output'])in allowed:allowed[oid(r['output'])].append(r['id'])
m['output_whitelist']=allowed
ids={r['id']for r in m['recipes']}
for p in m['processing_whitelist']:p['ids']=[rid for rid in p['ids']if rid in ids]
(folder/'tk3_recipe_cleanup.js').write_text('// priority: 10000\n// Remove controlled native recipes before registering the approved paths.\nServerEvents.recipes(event => {\n  '+j(list(allowed))+'.forEach(output => event.remove({output:output}));\n});\n')
p=folder/'tk3_whitelist.js';text=p.read_text()
text=re.sub(r'const allowed = \{[\s\S]*?\};',lambda _:'const allowed = '+j(allowed)+';',text,count=1)
text=re.sub(r'const processing = \[[\s\S]*?\];',lambda _:'const processing = '+j(m['processing_whitelist'])+';',text,count=1);p.write_text(text)
# Use native FluidPlaceBlockEvent with the same ten selector pads, updated frame tiers.
p=ROOT/'kubejs/server_scripts/progression/tk3_stone_generators.js';text=p.read_text()
match=re.search(r'const (?:selectors|generators|geology) =',text)
if not match:
 # Existing script stores selectors as an inline literal after its handler.
 for g in m['geology']:
  if g['stone']in ('create:scoria','create:scorchia'):
   text=text.replace('"lens": "'+g['lens']+'", "frame": "kubejs:tk3_hydraulic_machine"','"lens": "'+g['lens']+'", "frame": "kubejs:tk3_precision_machine"')
else:
 name=match[0].split()[1]
 table=[dict(lens=g['lens'],frame=m['frames'][str(g['tier'])],stone=g['stone'])for g in m['geology']]
 text=re.sub(r'const '+name+r' = \[[\s\S]*?\];',lambda _:'const '+name+' = '+j(table)+';',text,count=1)
p.write_text(text)
p=ROOT/'kubejs/server_scripts/progression/tk3_stages.js';text=p.read_text();sync=text[:text.index('\n[',text.index('})();'))]
milestones=[dict(quest=m['milestones'][str(t)],stage='tk3_tier_'+str(t+1))for t in range(1,10)]
milestones += [dict(quest=b['quest'],stage='tk3_boss_'+b['item'].replace('kubejs:tk3_',''))for b in m['campaign_extension']['bosses']]
sync=re.sub(r'const milestones = \[[\s\S]*?\];',lambda _:'const milestones = '+j(milestones)+';',sync,count=1)
text=sync+'\n'
for t,items in m['gates'].items():
 text+='\n'+j(items)+'.forEach(item => {\n    AStages.addRestrictionForItem("tk3/device/" + item.replace(":", "/"), "tk3_tier_'+t+'", item)\n        .allowPickup().allowInventoryStorage().allowContainerStorage().showInRecipeViewer()\n        .setCanBePlaced(false).setCanItemBeRightClicked(false).setCanInteractWithBlock(false);\n});\n'
for name,mods in [('industry/mekanism',['mekanism','mekanismgenerators']),('network/ae2',['ae2'])]:
 text+='\nAStages.addRestrictionForMod('+j('tk3/'+name)+', "tk3_tier_4", '+', '.join(map(j,mods))+')\n    .allowPickup().allowInventoryStorage().allowContainerStorage().allowMining().allowLeftClick().showInRecipeViewer()\n    .setCanBePlaced(false).setCanItemBeRightClicked(false).setCanInteractWithBlock(false);\n'
for name,t,dim in [('nether',3,'minecraft:the_nether'),('end',5,'minecraft:the_end')]:text+='\nAStages.addRestrictionForDimension('+j('tk3/'+name)+', "tk3_tier_'+str(t)+'", '+j(dim)+');\n'
for b in m['campaign_extension']['bosses']:
 core=b['item'].replace('kubejs:tk3_','')
 text+='\nAStages.addRestrictionForItem('+j('tk3/boss/'+core)+', '+j('tk3_boss_'+core)+', '+j(b['item'])+')\n    .allowPickup().allowInventoryStorage().allowContainerStorage().showInRecipeViewer().setCanItemBeRightClicked(false);\n'
p.write_text(text)
(ROOT/'docs/progression_manifest.json').write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
print('Compiled',len(m['recipes']),'recipes in',len(groups),'scripts;',len(allowed),'controlled outputs')
