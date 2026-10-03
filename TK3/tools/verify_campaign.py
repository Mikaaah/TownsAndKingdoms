#!/usr/bin/env python3
"""Check campaign dependencies, stable IDs, mirrored schemas and reusable cores."""
import argparse,collections,json,re,zipfile,io
from pathlib import Path
parser=argparse.ArgumentParser(description=__doc__)
parser.add_argument('--assets',type=Path,help='Optional directory containing the inspected native source jars')
args=parser.parse_args();root=Path(__file__).resolve().parents[1]
m=json.loads((root/'docs/progression_manifest.json').read_text());known=set(json.loads((root/'tools/registry_items.json').read_text()))
known|={'kubejs:tk3_'+n for n in m['custom_items']}|set(m['frames'].values())
def oid(x):return re.sub(r'^\d+x ','',x)
def inputs(r):return list(r['inputs'].values())if isinstance(r['inputs'],dict)else r['inputs']
assert [c['order_index'] for c in m['chapters']]==list(range(1,11))
assert len(m['recipes'])==len({r['id']for r in m['recipes']})
for r in m['recipes']:
 for x in [r['output']]+inputs(r):
  if isinstance(x,str):
   x=oid(x);assert x.startswith('#')or x in known or x==r.get('fluid_output',{}).get('fluid'),(r['id'],x)
 for target in r.get('keep_steps',[]):assert r['steps'][target]=='catalyst'
 if r.get('json',{}).get('type')=='create:sequenced_assembly':assert r['json']['loops']==1
 byproduct=r.get('chemical_inputs',{});assert not any(k.endswith('output')for k in byproduct)
minimum={}
for r in m['recipes']:minimum[oid(r['output'])]=min(minimum.get(oid(r['output']),99),r['tier'])
gated={item:int(t)for t,items in m['gates'].items()for item in items}
assert len(gated)==sum(map(len,m['gates'].values()))
for c in m['chapters']:
 for q in c['quests']:
  for task in q['tasks']:
   if task['type']=='item':assert task['item']['id']in known and gated.get(task['item']['id'],1)<=c['order_index'],q['title']
   if q.get('optional'):assert q['id'] not in m['milestones'].values()
# Follow component construction across frames; native world/chemical sources are boundaries.
recipes=collections.defaultdict(list)
for r in m['recipes']:recipes[oid(r['output'])].append(r)
for t in range(2,11):
 frame=m['frames'][str(t)];r=next(r for r in recipes[frame]if r['kind']=='deploying')
 mechanism=recipes[r['inputs'][1]][0];assert mechanism['kind']=='sequence' and mechanism['tier']==t
 assert minimum.get(oid(mechanism['inputs'][0]),1)<t
 for x in inputs(mechanism):
  if isinstance(x,str):assert minimum.get(oid(x),1)<=t,(t,x)
 assert not r.get('keep')
bootstrap={out:next(r for r in recipes[out])for out in ('ae2:charger','ae2:inscriber','betterend:diamond_hammer','farmersdelight:diamond_knife')}
for out,r in bootstrap.items():assert not any(isinstance(x,str)and oid(x)==m['frames']['4']for x in inputs(r)),out
keystone=recipes['kubejs:tk3_sovereign_keystone'][0];assert keystone['keep_steps']==[0,1,2,3,4]
assert len(m['campaign_extension']['bosses'])==5
assert 'mekanism:dust_iron'not in m['output_whitelist']
assert not any(r['kind']in ('shaped','shapeless','mixing')and oid(r['output'])=='mekanism:pellet_antimatter'for r in m['recipes'])
assert recipes['mekanism:hdpe_sheet'][0]['json']['input']['count']==3
for item,ids in m['output_whitelist'].items():
 for rid in ids:assert any(r['id']==rid and oid(r['output'])==item for r in m['recipes'])
for out in ('mekanism:creative_energy_cube','sophisticatedstorage:infinity_upgrade','sophisticatedbackpacks:infinity_upgrade'):
 if out.startswith('sophisticated'):assert m['output_whitelist'].get(out)==[]
assert all(r['tier']>=9 and r['json']['input']['amount']==1000 for r in recipes['mekanism:pellet_antimatter'])
# Source copies allow only construction ingredients / one-loop ship assembly changes.
native_checked=0
if args.assets:
 archives={}
 for jar in args.assets.glob('*.jar'):
  z=zipfile.ZipFile(jar)
  for n in z.namelist():
   if '/recipe/'in n and n.endswith('.json'):archives[n]=json.loads(z.read(n))
   elif n.startswith('META-INF/jarjar/')and n.endswith('.jar'):
    inner=zipfile.ZipFile(io.BytesIO(z.read(n)))
    for name in inner.namelist():
     if '/recipe/'in name and name.endswith('.json'):archives[name]=json.loads(inner.read(name))
 for r in m['recipes']:
  if not r.get('native_source'):continue
  original=archives[r['native_source']];edited=r['json']
  changed={k for k in set(original)|set(edited)if original.get(k)!=edited.get(k)}
  assert changed<= {'key','ingredients','loops','ingredient'},(r['id'],changed)
  if edited['type']=='mekanism:mek_data'and'P'in original['key']:assert edited['key']['P']==original['key']['P']
  assert original['type']==edited['type'];native_checked+=1
coverage=json.loads((root/'docs/mod_tier_audit.json').read_text());assert len(coverage['entries'])==51
assert coverage['status_counts']['Selected']==51
stage=(root/'kubejs/server_scripts/progression/tk3_stages.js').read_text()
assert '"tk3/end", "tk3_tier_5", "minecraft:the_end"'in stage
loot=(root/'kubejs/server_scripts/loot/tk3_boss_cores.js').read_text()
for b in m['campaign_extension']['bosses']:
 if b.get('source')=='quest reward':
  q=next(q for c in m['chapters']for q in c['quests']if q['id']==b['quest']);assert any(r.get('item',{}).get('id')==b['item']for r in q['rewards'])
 else:assert b['entity']in loot and b['item']in loot and '.killedByPlayer()'in loot
print(f'PASS: {len(m["recipes"])} recipes; ten frame/component paths; ordinary-tool bootstraps; native chemical quantities; retained core steps; {len(coverage["entries"])} mod/addon/support entries; {native_checked} native JSON mirrors checked.')
