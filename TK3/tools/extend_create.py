"""Add the audited Create support layer without changing stable recipe/quest IDs.
Run: python extend_create.py --pack TK3 --create-jar /path/to/create-6.0.10.jar
"""
import argparse,collections,hashlib,json,re,zipfile
from pathlib import Path
ap=argparse.ArgumentParser();ap.add_argument('--pack',default='build/TK3_Tiers_1-5');ap.add_argument('--create-jar',default='migration/mod-assets/create-1.21.1-6.0.10.jar');args=ap.parse_args()
root=Path(args.pack);mp=root/'docs/progression_manifest.json';m=json.loads(mp.read_text());old=[r for r in m['recipes'] if r['system']!='create'];R=[]
z=zipfile.ZipFile(args.create_jar);native={n.removeprefix('data/create/recipe/').removesuffix('.json'):json.loads(z.read(n)) for n in z.namelist() if n.startswith('data/create/recipe/') and n.endswith('.json')}
known=set(json.loads((root/'tools/registry_items.json').read_text()));oid=lambda s:re.sub(r'^\d+x ','',s)
def add(t,kind,out,ins,name=None,section='Components',**kw):
 name=name or oid(out).split(':')[-1];r=dict(tier=t,system='create',section=section,kind=kind,output=out,inputs=ins,strict=True,id='kubejs:tk3/create/'+name,**kw);R.append(r);return r
def shaped(t,out,pattern,key,**kw):return add(t,'shaped',out,key,pattern=pattern,**kw)
def source(t,name,kind=None,section='Workshop utilities',newname=None):
 raw=native[name];out=raw.get('result',{});count=out.get('count',1);result=(str(count)+'x ' if count>1 else '')+out['id']
 def ing(v):return '#'+v['tag'] if 'tag' in v else v['item']
 if raw['type']=='minecraft:crafting_shaped':return shaped(t,result,raw['pattern'],{k:ing(v) for k,v in raw['key'].items()},section=section,name=newname or name.replace('/','_'),source_recipe='create:'+name)
 if raw['type']=='minecraft:crafting_shapeless':return add(t,'shapeless',result,[ing(v) for v in raw['ingredients']],section=section,name=newname or name.replace('/','_'),source_recipe='create:'+name)
 raise ValueError(name)
# Casings remain manually accessible for startup; only the listed automatic route is added.
for t,name,metal in [(1,'andesite','create:andesite_alloy'),(2,'copper','minecraft:copper_ingot'),(3,'brass','create:brass_ingot')]:
 add(t,'shapeless','create:'+name+'_casing',['#c:stripped_logs',metal],name=name+'_casing_manual',section='Casings')
 add(t,'deploying','create:'+name+'_casing',['#c:stripped_logs',metal],name=name+'_casing_automated',section='Casings')
for t,base,out in [(1,'minecraft:iron_ingot','iron_sheet'),(2,'minecraft:copper_ingot','copper_sheet'),(1,'minecraft:gold_ingot','golden_sheet'),(3,'create:brass_ingot','brass_sheet')]:
 add(t,'pressing','create:'+out,[base],section='Metal sheets')
# Mineral intermediates use verified native polishing/furnace serializers.
add(3,'mixing','2x create:rose_quartz',['2x minecraft:quartz','4x minecraft:redstone'],name='rose_quartz_bulk',section='Precision components')
add(3,'shapeless','create:rose_quartz',['minecraft:quartz','4x minecraft:redstone'],section='Precision components')
raw=native['sandpaper_polishing/rose_quartz'];add(3,'sandpaper_polishing','create:polished_rose_quartz',['create:rose_quartz'],json=raw,section='Precision components',held_tool='create:sand_paper',source_recipe='create:sandpaper_polishing/rose_quartz')
shaped(3,'2x create:electron_tube',['QRQ',' I '],{'Q':'create:polished_rose_quartz','R':'minecraft:redstone','I':'create:iron_sheet'},section='Precision components')
add(3,'deploying','create:electron_tube',['create:iron_sheet','create:polished_rose_quartz'],name='electron_tube_automated',section='Precision components')
for name,sand in [('sand_paper','minecraft:sand'),('red_sand_paper','minecraft:red_sand')]:add(1,'shapeless','create:'+name,['minecraft:paper',sand],section='Tools')
# Reversible packing has exact 9:1 ratios and is explicitly part of the whitelist.
for t,ingot,nugget,block in [(1,'create:andesite_alloy',None,'create:andesite_alloy_block'),(1,'create:zinc_ingot','create:zinc_nugget','create:zinc_block'),(2,'minecraft:copper_ingot','create:copper_nugget',None),(3,'create:brass_ingot','create:brass_nugget','create:brass_block')]:
 if block:
  shaped(t,block,['III','III','III'],{'I':ingot},name=block.split(':')[-1]+'_packing',section='Material packing')
  add(t,'shapeless','9x '+ingot,[block],name=ingot.split(':')[-1]+'_unpacking',section='Material packing')
 if nugget:
  shaped(t,ingot,['NNN','NNN','NNN'],{'N':nugget},name=ingot.split(':')[-1]+'_from_nuggets',section='Material packing')
  add(t,'shapeless','9x '+nugget,[ingot],name=nugget.split(':')[-1]+'_from_ingot',section='Material packing')
for process in ['smelting','blasting']:
 for suffix in ['raw_ore','ore','crushed']:
  raw=native[process+'/zinc_ingot_from_'+suffix];v=raw['ingredient'];inp='#'+v['tag'] if 'tag'in v else v['item']
  add(3 if suffix=='crushed'else 1,process,'create:zinc_ingot',[inp],name='zinc_'+process+'_'+suffix,json=raw,section='Zinc supply',source_recipe='create:'+process+'/zinc_ingot_from_'+suffix)
# Small workshop parts stay short; major machines continue to consume their tier frame.
shaped(1,'create:wrench',['II ','IC ',' S '],{'I':'create:iron_sheet','C':'create:cogwheel','S':'minecraft:stick'},section='Tools')
shaped(1,'create:goggles',['GSG',' A '],{'G':'minecraft:glass','S':'minecraft:string','A':'create:andesite_alloy'},section='Tools')
shaped(1,'create:whisk',[' A ','IAI',' I '],{'A':'create:andesite_alloy','I':'create:iron_sheet'})
shaped(3,'create:brass_hand',[' A ','BBB',' B '],{'A':'create:andesite_alloy','B':'create:brass_sheet'},section='Precision components')
shaped(1,'4x create:piston_extension_pole',['S','A','S'],{'S':'minecraft:stick','A':'create:andesite_alloy'})
shaped(1,'4x create:gantry_shaft',['C','S','C'],{'C':'create:cogwheel','S':'create:shaft'})
shaped(1,'8x create:metal_girder',['III','AAA'],{'I':'create:iron_sheet','A':'create:andesite_alloy'})
add(1,'shapeless','4x create:metal_bracket',['create:iron_sheet','create:andesite_alloy'])
add(1,'shapeless','4x create:wooden_bracket',['#minecraft:planks','minecraft:stick'])
shaped(1,'2x create:white_sail',['WS','SA'],{'W':'#minecraft:wool','S':'minecraft:stick','A':'create:andesite_alloy'},section='Wind & contraptions')
add(1,'shapeless','create:sail_frame',['create:white_sail'],section='Wind & contraptions')
add(1,'shapeless','create:white_sail',['create:sail_frame','#minecraft:wool'],name='sail_from_frame',section='Wind & contraptions')
shaped(1,'create:super_glue',['SI','NS'],{'S':'minecraft:slime_ball','I':'create:iron_sheet','N':'minecraft:iron_nugget'},section='Tools')
add(1,'deploying','create:sticky_mechanical_piston',['create:mechanical_piston','minecraft:slime_ball'],section='Wind & contraptions')
add(1,'shapeless','create:mechanical_piston',['create:sticky_mechanical_piston'],name='piston_unstick',section='Wind & contraptions')
for a,b in [('linear_chassis','secondary_linear_chassis'),('speedometer','stressometer'),('gearbox','vertical_gearbox')]:
 for inp,out in [(a,b),(b,a)]:add(1,'shapeless','create:'+out,['create:'+inp],name=out+'_conversion',section='Reconfiguration')
for t,out,extra,count,section in [
 (1,'hand_crank','minecraft:stick',1,'Startup'),(1,'turntable','create:cogwheel',1,'Wind & contraptions'),(1,'sticker','minecraft:slime_ball',2,'Wind & contraptions'),
 (2,'item_vault','minecraft:chest',2,'Storage & packages'),(2,'flywheel','create:cogwheel',1,'Wind & contraptions'),(2,'nozzle','create:iron_sheet',2,'Fluids & heat'),
 (3,'clockwork_bearing','minecraft:clock',1,'Wind & contraptions'),(3,'mechanical_roller','create:crushing_wheel',1,'Railways'),(3,'chain_conveyor','minecraft:chain',2,'Storage & packages'),
 (3,'factory_gauge','create:electron_tube',2,'Storage & packages'),(3,'redstone_requester','create:stock_link',2,'Storage & packages'),(3,'linked_controller','create:redstone_link',1,'Signals'),
 (3,'schematicannon','minecraft:dispenser',1,'Schematics')]:
 frame=m['frames'][str(t)];add(t,'shapeless',(str(count)+'x 'if count>1 else '')+'create:'+out,[frame,extra],section=section)
shaped(2,'create:empty_blaze_burner',[' I ','INI',' I '],{'I':'create:iron_sheet','N':'minecraft:netherrack'},section='Fluids & heat')
shaped(2,'create:copper_diving_helmet',['CCC','G G'],{'C':'create:copper_sheet','G':'minecraft:glass'},section='Diving equipment')
shaped(2,'create:copper_diving_boots',['C C','I I'],{'C':'create:copper_sheet','I':'create:iron_sheet'},section='Diving equipment')
shaped(1,'create:filter',['IWI'],{'I':'minecraft:iron_nugget','W':'#minecraft:wool'},section='Filters')
shaped(3,'create:attribute_filter',['BFB',' R '],{'B':'create:brass_sheet','F':'create:filter','R':'create:rose_quartz'},section='Filters')
shaped(3,'create:package_filter',['PFP',' R '],{'P':'minecraft:paper','F':'create:filter','R':'create:electron_tube'},section='Filters')
for name,extra,count in [('pulse_repeater','minecraft:redstone_torch',2),('pulse_extender','minecraft:comparator',2),('pulse_timer','minecraft:clock',2),('powered_latch','minecraft:lever',2),('powered_toggle_latch','minecraft:lever',2),('redstone_contact','minecraft:redstone',4),('nixie_tube','minecraft:glass',4),('rose_quartz_lamp','minecraft:glowstone_dust',2)]:
 shaped(3,str(count)+'x create:'+name,[' R ','BEB',' I '],{'R':'minecraft:redstone','B':'create:brass_sheet','E':extra,'I':'create:iron_sheet'},section='Signals')
shaped(3,'create:transmitter',[' L ','CCC',' R '],{'L':'minecraft:lightning_rod','C':'create:copper_sheet','R':'minecraft:redstone'},section='Signals')
# Railways use repeatable batches, not another custom intermediate.
add(3,'deploying','8x create:track',['minecraft:rail','create:brass_sheet'],section='Railways')
shaped(3,'4x create:controller_rail',['IRI','ASA','IRI'],{'I':'create:iron_sheet','R':'minecraft:redstone','A':'create:andesite_alloy','S':'create:shaft'},section='Railways')
shaped(3,'create:schedule',[' P ','PEP',' P '],{'P':'minecraft:paper','E':'create:electron_tube'},section='Railways')
shaped(1,'2x create:minecart_coupling',[' I ','ASA',' I '],{'I':'minecraft:iron_nugget','A':'create:andesite_alloy','S':'minecraft:slime_ball'},section='Wind & contraptions')
for name,extra,count in [('crafter_slot_cover','minecraft:paper',4),('item_hatch','minecraft:iron_trapdoor',2)]:add(3,'shapeless',str(count)+'x create:'+name,['create:brass_sheet',extra],section='Storage & packages')
# Existing Create recipes chosen explicitly for ordinary utilities and reversible clearing.
for t,name,section in [(1,'crafting/appliances/clipboard','Tools'),(1,'crafting/appliances/crafting_blueprint','Tools'),(1,'crafting/schematics/empty_schematic','Schematics'),(1,'crafting/schematics/schematic_and_quill','Schematics'),(1,'crafting/schematics/schematic_table','Schematics'),(1,'crafting/kinetics/placard','Workshop utilities'),(1,'crafting/logistics/desk_bell','Workshop utilities'),(3,'crafting/curiosities/peculiar_bell','Workshop utilities'),(1,'crafting/kinetics/cuckoo_clock','Workshop utilities'),(1,'crafting/appliances/dough','Farming')]:source(t,name,section=section)
add(1,'shapeless','2x create:tree_fertilizer',['2x #minecraft:small_flowers','minecraft:bone_meal','minecraft:clay_ball'],section='Farming')
add(1,'mixing','4x create:dough',['4x create:wheat_flour',{'fluid':'minecraft:water','amount':1000}],section='Farming',name='dough_bulk')
add(1,'compacting','4x create:cardboard',['2x minecraft:paper',{'fluid':'minecraft:water','amount':250}],section='Storage & packages')
shaped(1,'create:cardboard_block',['CC','CC'],{'C':'create:cardboard'},section='Material packing')
add(1,'shapeless','4x create:cardboard',['create:cardboard_block'],name='cardboard_unpacking',section='Material packing')
# Clear recipes intentionally discard a configured filter/schedule, just as Create does.
for t,name in [(1,'crafting/appliances/filter_clear'),(1,'crafting/appliances/clipboard_clear'),(3,'crafting/appliances/attribute_filter_clear'),(3,'crafting/appliances/package_filter_clear'),(3,'crafting/appliances/schedule_clear'),(3,'crafting/logistics/factory_gauge_clear'),(3,'crafting/logistics/redstone_requester_clear')]:source(t,name,section='Reconfiguration',newname=name.split('/')[-1])
# Useful native identities that otherwise disappear under the earlier output whitelist.
for t,name in [(3,'crafting/logistics/stock_link_clear'),(3,'crafting/logistics/stock_ticker_clear')]:source(t,name,section='Reconfiguration',newname=name.split('/')[-1])
# Validate IDs, and prove every direct Create component has an explicit source.
for r in R:
 for v in [oid(r['output'])]+[oid(v) for v in (r['inputs'].values()if isinstance(r['inputs'],dict)else r['inputs'])if isinstance(v,str)and not oid(v).startswith('#')]:assert v in known or v.startswith('kubejs:'),v
m['recipes']=old+R;owned={oid(r['output']) for r in m['recipes']};
natural={'create:asurine','create:crimsite','create:limestone','create:ochrum','create:scoria','create:scorchia','create:veridium'}
used={oid(v)for r in m['recipes']for v in(r['inputs'].values()if isinstance(r['inputs'],dict)else r['inputs'])if isinstance(v,str)and oid(v).startswith('create:')}
missing=used-owned-natural;assert not missing,sorted(missing)
# Replace only approved outputs; retain wood, recipes from unrelated mods and natural stone acquisition.
for out in {oid(r['output'])for r in R}:m['output_whitelist'][out]=sorted({r['id']for r in m['recipes']if oid(r['output'])==out})
# Gate each Create item at its earliest approved recipe tier, not at a later recycling route.
for g in m['gates'].values():
 g[:]=[v for v in g if v not in {oid(r['output'])for r in R}]
for out in {oid(r['output'])for r in R}:
 t=min(r['tier']for r in m['recipes']if oid(r['output'])==out)
 if t>1 and out.startswith('create:'):
  g=m['gates'].setdefault(str(t),[])
  if out not in g:g.append(out);g.sort()
# Filled burners arise by capturing a blaze, not by a fabricated crafting recipe.
if 'create:blaze_burner'not in m['gates']['2']:m['gates']['2'].append('create:blaze_burner');m['gates']['2'].sort()
# Compile the added subsystem. Custom JSON is copied from this exact installed Create JAR.
def j(v):return json.dumps(v,ensure_ascii=False)
def expand(a):
 vals=[]
 for v in a:
  q=re.match(r'^(\d+)x (.*)$',v)if isinstance(v,str)else None;vals.extend([q[2]]*int(q[1])if q else[v])
 return vals
def compile(r):
 k=r['kind'];out=j(r['output']);a=r['inputs'];rid=j(r['id'])
 if r.get('json'):return 'event.custom('+j(r['json'])+').id('+rid+');'
 if k=='shaped':return f"event.shaped({out}, {j(r['pattern'])}, {j(a)}).id({rid});"
 if k=='shapeless':return f'event.shapeless({out}, {j(expand(a))}).id({rid});'
 def ing(v):return 'Fluid.of('+j(v['fluid'])+', '+str(v['amount'])+')'if isinstance(v,dict)else j(v)
 return f"event.recipes.create.{k}([{out}], [{', '.join(ing(v)for v in expand(a))}]).id({rid});"
required=sorted({oid(r['output'])for r in R}|{oid(v)for r in R for v in(r['inputs'].values()if isinstance(r['inputs'],dict)else r['inputs'])if isinstance(v,str)and not oid(v).startswith('#')})
s='// priority: 0\n// Create 6.0.10 support layer: exact outputs and approved reversible utility recipes.\nServerEvents.recipes(event => {\n  '+j(required)+".forEach(id => { if (Item.of(id).isEmpty()) throw new Error('[TK3] Missing required item: '+id); });\n  "+j(sorted({oid(r['output'])for r in R}))+'.forEach(output => event.remove({output: output}));\n'+''.join('\n  // Tier '+str(r['tier'])+' · '+r['section']+'\n  '+compile(r)+'\n'for r in R)+'});\n'
(root/'kubejs/server_scripts/recipes/tk3_create.js').write_text(s)
p=root/'kubejs/server_scripts/recipes/tk3_whitelist.js';s=p.read_text();s=re.sub(r'  const allowed = .*?;\n',lambda _: '  const allowed = '+j(m['output_whitelist'])+';\n',s,count=1);p.write_text(s)
p=root/'kubejs/server_scripts/progression/tk3_stages.js';s=p.read_text();start=s.index('\n[',s.index('})();'));end=s.index('\nAStages.addRestrictionForMod',start)
s=s[:start]+''.join('\n'+j(items)+'.forEach(item => {\n  AStages.addRestrictionForItem("tk3/device/" + item.replace(":", "/"), "tk3_tier_'+t+'", item)\n    .allowPickup().allowInventoryStorage().allowContainerStorage().showInRecipeViewer()\n    .setCanBePlaced(false).setCanItemBeRightClicked(false).setCanInteractWithBlock(false);\n});\n'for t,items in m['gates'].items())+s[end:];p.write_text(s)
audit=dict(create_version='6.0.10',added_recipes=len(R),added_outputs=len({oid(r['output'])for r in R}),total_recipes=len(m['recipes']),direct_create_inputs=sorted(used),natural_sources=sorted(natural),uncovered_inputs=sorted(missing),sections=dict(collections.Counter(r['section']for r in R)),recipes=[r['id']for r in R],notes=['All directly referenced Create inputs have an authored recipe or a named natural stone source.','Ore mining, worldgen stones, capturing blazes, fluids and decorative block families keep their deliberate native acquisition.','Reset recipes are explicitly retained; other recipes for controlled outputs are removed by the final whitelist.','No new custom item or block registries.'])
m['create_audit']=audit;mp.write_text(j(m));(root/'docs/CREATE_COVERAGE.json').write_text(json.dumps(audit,indent=2));print(json.dumps({k:audit[k]for k in ['added_recipes','added_outputs','total_recipes','uncovered_inputs','sections']},indent=2))

# Remove controlled native outputs before any author script registers its replacements.
# Per-file removals would delete approved recipes registered earlier by another subsystem.
recipe_dir=root/'kubejs/server_scripts/recipes'
for p in recipe_dir.glob('*.js'):
 if p.name in ['tk3_whitelist.js','tk3_recipe_cleanup.js']:continue
 text=p.read_text();text=re.sub(r'  \[.*?\]\.forEach\(output => event\.remove\(\{output: output\}\)\);\n','',text);p.write_text(text)
(recipe_dir/'tk3_recipe_cleanup.js').write_text('// priority: 10000\n// Remove controlled originals first. Registrations run at priority 0; the final allowlist runs last.\nServerEvents.recipes(event => {\n  '+j(sorted(m['output_whitelist']))+'.forEach(output => event.remove({output: output}));\n});\n')
