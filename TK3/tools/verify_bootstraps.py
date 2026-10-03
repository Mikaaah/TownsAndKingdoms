#!/usr/bin/env python3
"""Find construction deadlocks, including the machine required by each process."""
from pathlib import Path
import collections,json,re
root=Path(__file__).resolve().parents[1]
m=json.loads((root/'docs/progression_manifest.json').read_text())
def oid(s):return re.sub(r'^\d+x ','',s)
def inputs(r):return list(r['inputs'].values())if isinstance(r['inputs'],dict)else r['inputs']
owned=set(m['output_whitelist'])
recipes=collections.defaultdict(list)
for r in m['recipes']:recipes[oid(r['output'])].append(r)
tags={'#mekanism:alloys/infused':'mekanism:alloy_infused','#mekanism:alloys/reinforced':'mekanism:alloy_reinforced','#mekanism:alloys/atomic':'mekanism:alloy_atomic',
 '#c:circuits/basic':'mekanism:basic_control_circuit','#c:circuits/advanced':'mekanism:advanced_control_circuit','#c:circuits/elite':'mekanism:elite_control_circuit','#c:circuits/ultimate':'mekanism:ultimate_control_circuit',
 '#c:pellets/polonium':'mekanism:pellet_polonium','#c:pellets/antimatter':'mekanism:pellet_antimatter','#c:ingots/steel':'mekanism:ingot_steel','#c:ingots/brass':'create:brass_ingot','#c:plates/brass':'create:brass_sheet'}
stations={'sequence':['create:deployer'],'deploying':['create:deployer'],'stonecutting':[],
 'pressing':['create:mechanical_press'],'compacting':['create:mechanical_press','create:basin'],'mixing':['create:mechanical_mixer','create:basin'],
 'apparatus':['ars_nouveau:enchanting_apparatus','ars_nouveau:agronomic_sourcelink'],
 'ae_charger':['ae2:charger'],'ae_print':['ae2:inscriber'],'ae_processor':['ae2:inscriber'],
 'mek_enriching':['mekanism:enrichment_chamber'],'enriching':['mekanism:enrichment_chamber'],'mek_smelting':['mekanism:energized_smelter']}
native={'mekanism:reaction':['mekanism:pressurized_reaction_chamber','mekanism:electrolytic_separator','mekanism:rotary_condensentrator'],
 'mekanism:injecting':['mekanism:chemical_injection_chamber','mekanism:chemical_infuser','mekanism:thermal_evaporation_controller','mekanism:electrolytic_separator'],
 'mekanism:metallurgic_infusing':['mekanism:metallurgic_infuser'],
 'mekanism:nucleosynthesizing':['mekanism:antiprotonic_nucleosynthesizer','mekanism:sps_casing'],
 'mekanism:crystallizing':['mekanism:chemical_crystallizer'],'mekanism:enriching':['mekanism:enrichment_chamber'],
 'mekanism:compressing':['mekanism:osmium_compressor'],'create:sequenced_assembly':['create:deployer']}
def needs(r):
 ins=[tags.get(oid(x),oid(x))for x in inputs(r)if isinstance(x,str)]
 ins += native.get(r.get('serializer',''),stations.get(r['kind'],[]))
 if r.get('heated'):ins.append('create:blaze_burner')
 # A self-reconfiguration route cannot bootstrap its own output.
 return set(ins)
report=[]
for tier in range(1,11):
 available=set(x for x in recipes if x not in owned)
 available.update(b['item']for b in m['campaign_extension']['bosses']if b['tier']<=tier)
 if tier>=5:available.update(['minecraft:dragon_breath','minecraft:end_stone'])
 # AE2's four original presses are meteorite loot. Their managed Inscriber
 # recipes duplicate existing presses; they are not the first source.
 if tier>=4:available.update('ae2:'+name+'_press'for name in ('engineering_processor','logic_processor','calculation_processor','silicon'))
 # Native world materials and tag members are boundaries; the mapped controlled tags are not.
 def has(x):return x in available or x.startswith('#')or x not in owned
 for _ in range(len(recipes)+1):
  added={out for out,rows in recipes.items()if out not in available and any(r['tier']<=tier and all(has(x)for x in needs(r))for r in rows)}
  if not added:break
  available.update(added)
 targets=[m['mechanisms'][str(tier)],m['frames'][str(tier)]]
 if tier==4:targets+=['mekanism:metallurgic_infuser','ae2:charger','ae2:inscriber','ars_nouveau:agronomic_sourcelink','kubejs:tk3_arcane_machine']
 if tier==6:targets+=['mekanism:hdpe_sheet','mekanism:pressurized_reaction_chamber','mekanism:electrolytic_separator']
 if tier==9:targets+=['mekanism:sps_casing','mekanism:antiprotonic_nucleosynthesizer','kubejs:tk3_stargaze_singularity']
 for out in targets:
  if out not in available:
   missing={r['id']:[x for x in needs(r)if not has(x)]for r in recipes[out]}
   raise AssertionError((tier,out,missing))
 report.append({'tier':tier,'reachable_targets':targets})
for r in m['recipes']:
 if r.get('keep'):
  assert oid(r['output'])!=oid(r['inputs'][0]),'Self-duplication catalyst loop: '+r['id']
for b in m['campaign_extension']['bosses']:
 q=next(q for c in m['chapters']for q in c['quests']if q['id']==b['quest'])
 if b['tier']in (5,9):assert q['dependencies']==[m['chapters'][b['tier']-1]['quests'][0]['id']]
(root/'docs/bootstrap_validation.json').write_text(json.dumps({'status':'PASS','tiers':report,'boundary':'Native world sources, unmapped tags and energy balance require Minecraft integration testing.'},indent=2)+'\n')
print('PASS: ten construction paths; Source, first FE/ME, HDPE, SPS and Stargaze bootstraps; no self-duplication catalysts.')
