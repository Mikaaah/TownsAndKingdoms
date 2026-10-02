#!/usr/bin/env python3
"""Extend the audited T&K3 baseline with chapters 6–10 and selected addons."""
import argparse, collections, copy, hashlib, io, json, re, subprocess, sys, zipfile
from pathlib import Path

parser = argparse.ArgumentParser(description=__doc__)
parser.add_argument('--pack', type=Path, default=Path('build/TK3_Campaign'))
parser.add_argument('--assets', type=Path, default=Path('migration/mod-assets'))
parser.add_argument('--registry', type=Path, default=Path('current'))
args = parser.parse_args()
root = args.pack
manifest = root / 'docs/progression_manifest.json'
m = json.loads(manifest.read_text())
if m.get('campaign_extension'): raise SystemExit('This migration expects the chapters I–V baseline. Edit the existing approved recipes for incremental changes.')
known = set(json.loads((args.registry / 'Item.json').read_text()))
blocks = set(json.loads((args.registry / 'Block.json').read_text()))
entities = set(json.loads((args.registry / 'EntityType.json').read_text()))
R = [r for r in m['recipes'] if r['system'] not in ('campaign', 'addons', 'ae_network', 'industrial')]
added = []
def j(v): return json.dumps(v, ensure_ascii=False)
def oid(v): return re.sub(r'^\d+x ', '', v)
def K(v): return 'kubejs:tk3_' + v
def write(p, s):
    p = root / p
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(s)
def uid(v): return hashlib.sha256(('tk3-campaign-10:' + v).encode()).hexdigest()[:16].upper()
def add(t, kind, out, ins, system='campaign', name=None, section=None, **kw):
    rid = 'kubejs:tk3/' + system + '/' + (name or oid(out).replace(':', '_'))
    row = dict(tier=t, kind=kind, output=out, inputs=ins, system=system, id=rid,
               section=section or 'Campaign production', **kw)
    added.append(row)
    return row

# Every custom item has a role across multiple recipes, or is the campaign goal.
new_items = {}
mechanisms = {
    6: ('network_mechanism', 'Network Mechanism', 'create:precision_mechanism', ['mekanism:advanced_control_circuit', 'ae2:fluix_crystal'], 'betterend:diamond_hammer'),
    7: ('expedition_mechanism', 'Expedition Mechanism', K('network_mechanism'), ['ars_nouveau:manipulation_essence', 'mekanism:alloy_reinforced'], 'farmersdelight:diamond_knife'),
    8: ('containment_mechanism', 'Containment Mechanism', K('expedition_mechanism'), ['mekanism:hdpe_sheet', 'mekanism:alloy_atomic'], 'create:sand_paper'),
    9: ('singularity_mechanism', 'Singularity Mechanism', K('containment_mechanism'), ['mekanism:pellet_polonium', 'ae2:singularity'], 'ars_nouveau:enchanters_sword'),
    10: ('sovereign_mechanism', 'Sovereign Mechanism', K('singularity_mechanism'), ['mekanism:pellet_antimatter', 'minecraft:dragon_breath'], 'betterend:diamond_hammer'),
}
frame_names = {6:'Network Chassis', 7:'Expedition Frame', 8:'Containment Frame', 9:'Singularity Frame', 10:'Sovereign Core'}
frame_ids = {6:K('network_chassis'),7:K('expedition_frame'),8:K('containment_frame'),9:K('singularity_frame'),10:K('sovereign_core')}
base_casings = {6:'mekanism:steel_casing',7:'create_wizardry:arcane_casing',8:'mekanism:steel_casing',9:'ae2:fluix_block',10:'mekanism:sps_casing'}
for t,(name,label,start,parts,tool) in mechanisms.items():
    new_items[name] = label
    new_items['incomplete_' + name] = 'Incomplete ' + label
    add(t,'sequence',K(name),[start,*parts,tool],name=name,section='Mechanisms / Sequenced assembly',
        transition=K('incomplete_' + name),steps=['deploy']*len(parts)+['tool'],tool=tool)
    add(t,'deploying',frame_ids[t],[base_casings[t],K(name)],name='frame_' + str(t),section='Machine frames')
    m['frames'][str(t)] = frame_ids[t]
new_items.update(verdant_sigil='Verdant Sigil', storm_core='Storm Core', ember_core='Ember Core', void_core='Void Core', sovereign_keystone='Sovereign Keystone')
bosses = [(6,'twilightforest:lich','verdant_sigil'), (7,'cataclysm:the_harbinger','storm_core'),
          (8,'cataclysm:ignis','ember_core'), (9,'cataclysm:ender_guardian','void_core')]
for _,boss,_ in bosses: assert boss in entities, boss
add(6,'shaped','betterend:diamond_hammer',{'D':'minecraft:diamond','S':'mekanism:ingot_steel','T':'minecraft:stick'},pattern=['DSD',' T ',' T '],system='addons',section='Assembly tools')
add(6,'shaped','farmersdelight:diamond_knife',{'D':'minecraft:diamond','S':'mekanism:ingot_steel'},pattern=[' D','S '],system='addons',section='Assembly tools')

# Native JSON comes from the inspected 1.21.1 jars, never guessed serializers.
native = {}
for mod in ['mekanism','ae2','createaddition','create_wizardry','ars_creo','create_enchantment_industry']:
    z = zipfile.ZipFile(args.assets / (mod + '.jar'))
    native[mod] = {n:json.loads(z.read(n)) for n in z.namelist() if '/recipe/' in n and n.endswith('.json')}
# Aeronautics bundles its content in a jar-in-jar; inspect that actual content jar.
bundle = zipfile.ZipFile(args.assets / 'aeronautics.jar')
for nested in bundle.namelist():
    if not nested.endswith('.jar'): continue
    z = zipfile.ZipFile(io.BytesIO(bundle.read(nested)))
    for mod in ('aeronautics', 'simulated'):
        native.setdefault(mod, {}).update({n:json.loads(z.read(n)) for n in z.namelist() if n.startswith('data/'+mod+'/recipe/') and n.endswith('.json')})
def output_of(r):
    value = r.get('result',r.get('output',r.get('item_output')))
    if value is None and len(r.get('results', [])) == 1: value = r['results'][0]
    if isinstance(value,dict) and value.get('id') in known: return value['id'], value.get('count',1)
    return None
def collect_inputs(r):
    values=[]
    def scan(v):
        if isinstance(v,dict):
            if 'item' in v: values.append((str(v['count'])+'x ' if v.get('count',1)>1 else '')+v['item'])
            elif 'tag' in v and not any(k in v for k in ('amount','chemical')): values.append((str(v['count'])+'x ' if v.get('count',1)>1 else '')+'#'+v['tag'])
            else:
                for key,x in v.items():
                    if key not in ('result','output','neoforge:conditions','chemical_input','chemical_inputs','fluid_input'): scan(x)
        elif isinstance(v,list):
            for x in v: scan(x)
    if 'pattern' in r:
        for ch in ''.join(r['pattern']):
            if ch in r.get('key',{}): scan(r['key'][ch])
    else:
        for key in ('ingredients','ingredient','item_input','input','main_input','extra_input','base','addition','template'):
            if key in r: scan(r[key])
    return values
def native_row(t,n,data,system,section):
    target=output_of(data)
    if not target: return
    out,count=target
    inputs=collect_inputs(data)
    if any(not oid(x).startswith('#') and oid(x) not in known and not oid(x).startswith('kubejs:tk3_') for x in inputs): return
    return add(t,'native', (str(count)+'x ' if count>1 else '')+out, inputs, system=system,
               name=n.split('/')[1]+'_'+n.split('/recipe/')[1][:-5].replace('/','_'), section=section,json=data,
               native_source=n,serializer=data['type'], pattern=data.get('pattern'), chemical_inputs={k:v for k,v in data.items() if k.startswith('chemical_') or k=='fluid_input' or (k=='input' and isinstance(v,dict) and 'chemical' in v)})

def mek_tier(out):
    s=out.split(':')[1]
    if s.startswith('creative_'): return 0
    if s in ('basic_control_circuit','alloy_infused','alloy_basic','ingot_steel','steel_casing') or s.startswith(('ingot_', 'raw_', 'ore_', 'dust_', 'block_', 'nugget_')): return 5
    if s in ('combiner','dimensional_stabilizer'): return 8
    if any(x in s for x in ['mekasuit','meka_tool','module_']): return 10
    if any(x in s for x in ['antimatter','sps_','supercharged','nucleosynthesizer','quantum_entangloporter','teleporter','teleportation_core','qio_']): return 9
    if any(x in s for x in ['ultimate_','polonium','plutonium','centrifuge','solar_neutron','fission','turbine','induction','radioactive','waste_barrel','digital_miner','dissolution','chemical_washer','chemical_crystallizer']): return 8
    if any(x in s for x in ['advanced_','alloy_reinforced','alloy_atomic','elite_control','chemical_','purification','pressurized_reaction','hdpe','thermal_evaporation','electrolytic','rotary_','gas_burning','laser','osmium_compressor']): return 7
    if s.startswith('elite_'): return 8
    if s.startswith('fusion_') or s=='laser_focus_matrix': return 9
    return 6
def ae_tier(out):
    s=out.split(':')[1]
    if 'creative' in s or s=='debug_card': return 0
    if '256k' in s: return 10
    if '64k' in s: return 9
    if '16k' in s: return 8
    if '4k' in s: return 7
    if any(x in s for x in ['quantum','spatial','singularity']): return 9 if 'quantum' in s else 8
    if s=='condenser': return 8
    if 'wireless' in s: return 7
    return 6

existing_outputs={oid(r['output']) for r in R}
# Retain the 12 existing Applied KubeJS recipes; their former reserved tier is now real.
# Craftable AE2 functional blocks use a Network Chassis. Cells and cores keep native serializers.
ae_exclude=('certus_quartz','nether_quartz','fluix_crystal','fluix_dust','quartz_glass','quartz_vibrant','sky_stone','sky_dust','silicon','smooth_','cut_','quartz_block','fluix_block','budding_','paint_','meteorite','entropy_manipulator')
ae_controlled=set()
for n,data in native['ae2'].items():
    target=output_of(data)
    if not target: continue
    out,_=target;s=out.split(':')[1];t=ae_tier(out)
    if not out.startswith('ae2:') or not t or out in existing_outputs or any(x in s for x in ae_exclude) or s.startswith('debug_') or s.endswith(('_axe','_hoe','_pickaxe','_shovel','_sword','_knife','_wrench')): continue
    if data['type']=='minecraft:crafting_shaped' and out in blocks:
        data=copy.deepcopy(data)
        key=next((k for k,v in data['key'].items() if 'ingots/iron' in v.get('tag','') or v.get('item')=='minecraft:iron_ingot'),None)
        key = key or next(iter(data['key']))
        data['key'][key]={'item':frame_ids[t]}
    row=native_row(t,n,data,'ae_network','Network construction & storage')
    if row:
        if data.get('pattern'): row.update(pattern=data['pattern'],inputs={k:('#'+v['tag'] if 'tag' in v else v['item']) for k,v in data['key'].items()})
        ae_controlled.add(out)

# Preserve Mekanism's data-aware upgrade serializer; only one ingredient changes.
mek_materials={'mekanism:advanced_control_circuit':6,'mekanism:elite_control_circuit':7,'mekanism:ultimate_control_circuit':8,
              'mekanism:alloy_reinforced':7,'mekanism:alloy_atomic':7,'mekanism:hdpe_pellet':7,'mekanism:hdpe_sheet':7,
              'mekanism:hdpe_rod':7,'mekanism:substrate':7,'mekanism:dust_refined_obsidian':7,
              'mekanism:ingot_refined_obsidian':7,'mekanism:ingot_refined_glowstone':7,
              'mekanism:pellet_polonium':8,'mekanism:pellet_plutonium':8,'mekanism:pellet_antimatter':9}
mek_controlled=set()
decorative=('block_','ore_','raw_','salt','bronze','tin','lead','uranium_ore','fluorite_ore','osmium_ore')
for n,data in native['mekanism'].items():
    target=output_of(data)
    if not target: continue
    out,_=target;s=out.split(':')[1];t=mek_materials.get(out,mek_tier(out))
    if not t or out in existing_outputs: continue
    is_device=out.startswith('mekanism:') and out in blocks and not s.startswith(decorative) and not any(x in s for x in ['bronze','charcoal','refined_obsidian_block','refined_glowstone_block'])
    is_gear=s.startswith(('module_','meka_tool','mekasuit','qio_')) or s.endswith('_tier_installer')
    if not out.startswith('mekanism:') or (not is_device and out not in mek_materials and not is_gear): continue
    data=copy.deepcopy(data)
    if (is_device or is_gear) and data['type'] in ('minecraft:crafting_shaped','mekanism:mek_data'):
        choices=[k for k in data.get('key',{}) if k not in ('P',)]
        if choices:
            key=next((k for k in choices if k in ('R','C')),choices[0])
            data['key'][key]={'item':frame_ids[t]}
    if data['type']=='mekanism:nucleosynthesizing': t=max(t,9)
    row=native_row(t,n,data,'industrial','Mekanism / Machines & materials')
    if row: mek_controlled.add(out)

# Generator multiblocks use the same tier frames, with explicit useful batches.
generator_parts={
    6:['solar_generator','advanced_solar_generator','wind_generator','bio_generator'],
    7:['gas_burning_generator'],
    8:['fission_reactor_casing','fission_reactor_port','fission_reactor_logic_adapter','fission_fuel_assembly','control_rod_assembly',
       'turbine_casing','turbine_valve','turbine_vent','turbine_rotor','turbine_blade','electromagnetic_coil','rotational_complex','saturating_condenser','pressure_disperser','reactor_glass'],
    9:['fusion_reactor_controller','fusion_reactor_frame','fusion_reactor_port','fusion_reactor_logic_adapter','laser_focus_matrix'],
}
for t,names in generator_parts.items():
    for name in names:
        out='mekanismgenerators:'+name
        if out not in known: continue
        if name.endswith(('casing','frame','glass')): add(t,'stonecutting','4x '+out,[frame_ids[t]],system='industrial',section='Generator multiblock parts')
        else: add(t,'shapeless',out,[frame_ids[t], 'mekanism:'+('alloy_atomic' if t>=8 else 'alloy_infused'),'minecraft:glass'],system='industrial',section='Generator devices')

# Selected addon machines remain coupled to their owner system.
addons={
  3: [('createminecolonies:colony_warehouse_stock_link',['create:stock_link','minecolonies:blockhutwarehouse','create:electron_tube'])],
  4: [('ars_creo:starbuncle_wheel',[K('arcane_machine'),'ars_nouveau:starbuncle_charm','create:water_wheel']),
      ('witchery:iron_witches_oven',[K('arcane_machine'),'minecraft:furnace','minecraft:iron_ingot']),
      ('witchery:altar',[K('arcane_machine'),'ars_nouveau:source_gem','minecraft:stone']),
      ('witchery:cauldron',[K('arcane_machine'),'minecraft:cauldron','irons_spellbooks:arcane_essence']),
      ('witchery:spinning_wheel',[K('arcane_machine'),'create:cogwheel','minecraft:string'])],
  5: [('witchery:distillery',['mekanism:steel_casing','witchery:cauldron','create:fluid_pipe'])],
  6: [('ars_n_spells:spell_loom',[frame_ids[6],'irons_spellbooks:arcane_anvil','ars_nouveau:manipulation_essence']),
      ('ars_n_spells:mana_infusion',[frame_ids[6],'ars_nouveau:source_jar','irons_spellbooks:arcane_essence']),
      ('apotheosis:salvaging_table',[frame_ids[6],'minecraft:anvil','ars_nouveau:manipulation_essence']),
      ('apotheosis:reforging_table',[frame_ids[6],'minecraft:anvil','apotheosis:gem_dust']),
      ('apotheosis:gem_cutting_table',[frame_ids[6],'minecraft:diamond','apotheosis:gem_dust'])],
  7: [('ars_n_spells:mana_well',[frame_ids[7],'ars_nouveau:source_jar','irons_spellbooks:arcane_essence']),
      ('apotheosis:augmenting_table',[frame_ids[7],'apotheosis:reforging_table','apotheosis:arcane_sands']),
      ('aeronautics:gyroscopic_propeller_bearing',[frame_ids[7],'aeronautics:propeller_bearing','create:rotation_speed_controller']),
      ('aeronautics:smart_propeller',[frame_ids[7],'aeronautics:andesite_propeller','create:electron_tube']),
      ('aeronautics:adjustable_burner',[frame_ids[7],'create:blaze_burner','create:fluid_valve']),
      ('aeronautics:steam_vent',[frame_ids[7],'create:steam_engine','create:fluid_pipe'])],
  8: [('cataclysm_spellbooks:hellfire_forge',[frame_ids[8],'irons_spellbooks:arcane_anvil','minecraft:netherite_ingot'])],
}
for t,rows in addons.items():
    for out,ins in rows:
        if out in known:
            if t>=4 and not out.startswith('aeronautics:'):
                add(t,'apparatus',out,ins,system='addons',section='Magic & settlement machines',source=2000 if t>5 else 1000)
            else: add(t,'shapeless',out,ins,system='addons',section='Expedition & settlement machines')

# Physical airship controls are late; a stationary propeller remains chapter 3.
for name,extra in [('wooden_propeller','#minecraft:planks'),('andesite_propeller','create:andesite_alloy')]:
    add(3,'shapeless','aeronautics:'+name,['create:propeller',extra],system='addons',section='Stationary propellers')
for color in ['white','orange','magenta','light_blue','yellow','lime','pink','gray','light_gray','cyan','purple','blue','brown','green','red','black']:
    out='aeronautics:'+color+'_envelope'
    add(7,'compacting','8x '+out,['minecraft:'+color+'_wool','minecraft:string',K('expedition_mechanism')],system='addons',section='Airship envelopes')
    add(7,'shapeless','aeronautics:'+color+'_envelope_encased_shaft',[out,'create:shaft'],system='addons',section='Airship envelopes')

# XP and mana devices keep their native fluid systems; only machine construction changes.
device_tiers={
 'createaddition':{'connector':5,'large_connector':6,'redstone_relay':6,'digital_adapter':6,'portable_energy_interface':7,'modular_accumulator':6,'tesla_coil':7},
 'create_wizardry':{'arcane_sheet':4,'arcane_pipe':4,'smart_arcane_pipe':6,'arcane_pump':4,'channeler':6,'mana_siphon':6,'blaze_caster':7},
 'create_enchantment_industry':{'mechanical_grindstone':3,'experience_hatch':4,'experience_lantern':4,'brass_bookshelf':4,'infuser':6,'blaze_forger':7,'gem_cutter':7,'affix_augmentor':8},
}
for mod,values in device_tiers.items():
    for name,t in values.items():
        out=mod+':'+name
        routes=[(n,r)for n,r in native[mod].items() if output_of(r) and output_of(r)[0]==out]
        if name in ('blaze_caster','blaze_forger','experience_hatch'):
            add(t,'deploying',out,[frame_ids[t] if t>5 else m['frames'][str(min(t,4))], 'create:blaze_burner' if 'blaze' in name else 'create:experience_block'],system='addons',section=mod+' / Devices')
        elif routes:
            for n,data in routes:
                data=copy.deepcopy(data)
                if 'key' in data and out in blocks:
                    first=next(iter(data['key']))
                    data['key'][first]={'item':frame_ids[t] if t>5 else m['frames'][str(min(t,4))]}
                elif out in blocks and 'ingredients' in data:
                    data['ingredients'][0]={'item':frame_ids[t] if t>5 else m['frames'][str(min(t,4))]}
                native_row(t,n,data,'addons',mod+' / Devices')
        elif out in known:
            add(t,'shapeless',out,[frame_ids[t] if t>5 else m['frames'][str(min(t,4))],'minecraft:redstone','minecraft:gold_ingot'],system='addons',section=mod+' / Devices')

# Flight controls and lifting fluid are explicit routes; advanced levitite needs End stone.
for mod in ('aeronautics','simulated'):
    for n,data in native[mod].items():
        target=output_of(data)
        if not target: continue
        out,_=target
        if out not in known or out in {oid(r['output']) for r in R+added}: continue
        if out.split(':')[1] in ('mounted_potato_cannon','gyroscopic_mechanism'):
            data=copy.deepcopy(data)
            if 'key' in data: data['key'][next(iter(data['key']))]={'item':frame_ids[7]}
            if data['type']=='create:sequenced_assembly': data.update(loops=1,ingredient={'item':frame_ids[7]})
            native_row(7,n,data,'addons','Airship controls')
for n,data in native['simulated'].items():
    target=output_of(data)
    if not target: continue
    out,_=target
    if out not in known or out in {oid(r['output']) for r in R+added} or 'creative' in out: continue
    data=copy.deepcopy(data)
    if 'key' in data and out in blocks: data['key'][next(iter(data['key']))]={'item':frame_ids[7]}
    if data['type']=='create:sequenced_assembly':
        data['ingredient']={'item':frame_ids[7]};data['loops']=1
    native_row(7,n,data,'addons','Airship controls & instruments')
add(9,'crushing','4x aeronautics:end_stone_powder',['minecraft:end_stone'],system='addons',section='Advanced lift')
fluid_recipe=native['aeronautics']['data/aeronautics/recipe/mixing/levitite_blend.json']
lift=add(9,'native','aeronautics:levitite_blend',['4x aeronautics:end_stone_powder','2x create:zinc_nugget',{'fluid':'minecraft:water','amount':500}],system='addons',section='Advanced lift',name='levitite_blend',json=fluid_recipe,serializer='create:mixing',fluid_output={'fluid':'aeronautics:levitite_blend','amount':500},heated=True)
m['processing_whitelist'].append({'type':'create:mixing','input':'aeronautics:end_stone_powder','ids':[lift['id']]})

# Explicit retained boss imprinting: repeated production never consumes a boss core.
for t,base,core,result in [(6,K('network_mechanism'),K('verdant_sigil'),'endrem:magical_eye'),
                          (7,K('expedition_mechanism'),K('storm_core'),'endrem:cryptic_eye'),
                          (8,K('containment_mechanism'),K('ember_core'),'endrem:nether_eye'),
                          (9,K('singularity_mechanism'),K('void_core'),'endrem:corrupted_eye')]:
    add(t,'deploying',result,[base,core],keep=True,name=result.split(':')[1],section='Reusable boss imprints')
add(10,'sequence',K('sovereign_keystone'),[frame_ids[10],K('verdant_sigil'),K('storm_core'),K('ember_core'),K('void_core'),'ars_nouveau:enchanters_sword'],
    name='sovereign_keystone',transition=K('incomplete_sovereign_keystone'),steps=['catalyst']*4+['tool'],keep_steps=[0,1,2,3],tool='ars_nouveau:enchanters_sword',section='The Sovereign project')
new_items['incomplete_sovereign_keystone']='Incomplete Sovereign Keystone'

# Re-enable data-preserving late storage recipes, with direct incremental upgrades.
for mod in ['sophisticatedstorage','sophisticatedbackpacks']:
    z=zipfile.ZipFile(args.assets/(mod+'.jar'))
    for n in z.namelist():
        if '/recipe/' not in n or not n.endswith('.json'): continue
        data=json.loads(z.read(n));target=output_of(data)
        if not target: continue
        out,_=target;s=out.split(':')[1]
        t=7 if 'netherite' in s else 6 if s.endswith('stack_upgrade_tier_3') else 8 if s.endswith('stack_upgrade_tier_4') else 9 if s.endswith('stack_upgrade_tier_5') else 0
        if not t or any(v in s for v in ('conversion','infinity','omega')): continue
        if 'key' in data:
            data=copy.deepcopy(data);key=next((k for k,v in data['key'].items() if 'item' in v and v['item'].startswith('minecraft:') and 'netherite' not in v['item']),None)
            if key: data['key'][key]={'item':frame_ids[t]}
        native_row(t,n,data,'addons','Storage upgrades / Preserve contents')


# Selected cave and dragonforge workshops follow the expedition/containment frames.
add(8, 'deploying', 'iceandfire:dragonforge_fire_core_disabled', ['kubejs:tk3_containment_frame', 'iceandfire:dragonbone'], system='addons', section='Exploration workshops');
add(8, 'deploying', 'iceandfire:dragonforge_fire_input', ['kubejs:tk3_containment_frame', 'minecraft:blaze_powder'], system='addons', section='Exploration workshops');
add(8, 'stonecutting', '4x iceandfire:dragonforge_fire_brick', ['kubejs:tk3_containment_frame'], system='addons', section='Exploration workshops');
add(8, 'deploying', 'iceandfire:dragonforge_ice_core_disabled', ['kubejs:tk3_containment_frame', 'iceandfire:dragonbone'], system='addons', section='Exploration workshops');
add(8, 'deploying', 'iceandfire:dragonforge_ice_input', ['kubejs:tk3_containment_frame', 'minecraft:packed_ice'], system='addons', section='Exploration workshops');
add(8, 'stonecutting', '4x iceandfire:dragonforge_ice_brick', ['kubejs:tk3_containment_frame'], system='addons', section='Exploration workshops');
add(8, 'deploying', 'iceandfire:dragonforge_lightning_core_disabled', ['kubejs:tk3_containment_frame', 'iceandfire:dragonbone'], system='addons', section='Exploration workshops');
add(8, 'deploying', 'iceandfire:dragonforge_lightning_input', ['kubejs:tk3_containment_frame', 'minecraft:amethyst_shard'], system='addons', section='Exploration workshops');
add(8, 'stonecutting', '4x iceandfire:dragonforge_lightning_brick', ['kubejs:tk3_containment_frame'], system='addons', section='Exploration workshops');
add(7, 'deploying', 'alexscaves:quarry', ['kubejs:tk3_expedition_frame', 'minecraft:iron_block'], system='addons', section='Exploration workshops');
add(7, 'deploying', 'alexscaves:drain', ['kubejs:tk3_expedition_frame', 'minecraft:bucket'], system='addons', section='Exploration workshops');
add(8, 'deploying', 'alexscaves:nuclear_furnace_component', ['kubejs:tk3_containment_frame', 'mekanism:alloy_atomic'], system='addons', section='Exploration workshops');
add(8, 'deploying', 'alexscaves:nuclear_siren', ['kubejs:tk3_containment_frame', 'minecraft:redstone'], system='addons', section='Exploration workshops');
add(7, 'apparatus', 'alexscaves:conversion_crucible', ['kubejs:tk3_expedition_frame', 'irons_spellbooks:arcane_essence', 'minecraft:amethyst_shard'], system='addons', section='Exploration workshops', source=2000);

# Keep existing IDs but replace an output only when a new authored route intentionally owns it.
new_outputs={oid(r['output']) for r in added}
R=[r for r in R if oid(r['output']) not in new_outputs]
R.extend(added)
assert len({r['id'] for r in R})==len(R), 'Duplicate recipe IDs'

# Promote native-device tiers when their exact native ingredient needs a later frame.
for _ in range(12):
    minimum={}
    for r in R: minimum[oid(r['output'])]=min(minimum.get(oid(r['output']),99),r['tier'])
    changed=False
    for r in added:
        if r['kind']=='native':
            required=max([r['tier']]+[minimum.get(oid(v), {'#mekanism:alloys/infused':5,'#mekanism:alloys/reinforced':7,'#mekanism:alloys/atomic':7,'#c:circuits/basic':5,'#c:circuits/advanced':6,'#c:circuits/elite':7,'#c:circuits/ultimate':8,'#c:ingots/refined_obsidian':7,'#c:ingots/refined_glowstone':7}.get(oid(v),1)) for v in (r['inputs'].values() if isinstance(r['inputs'],dict) else r['inputs']) if isinstance(v,str)])
            if required>r['tier']: r['tier']=required;changed=True
    if not changed: break

# Bootstrap components above chapter 5 are deliberately small and reusable.
m['recipes']=R
m['custom_items'].update(new_items)
m['assembly_tools']=[x for x in m['assembly_tools'] if x['tier']<=5]+[
    dict(tier=t,item=value[4],name=frame_names[t]+' Tool',ordinary='One durability per completed tool step',reward='Unbreakable; one claim per player') for t,value in mechanisms.items()]
textures={n:('kubejs:item/incomplete_locomotive_mechanism' if n.startswith('incomplete_') else 'kubejs:item/locomotive_mechanism')for n in new_items}
for n in ['verdant_sigil','storm_core','ember_core','void_core']:
    textures[n]={'verdant_sigil':'minecraft:item/emerald','storm_core':'minecraft:item/heart_of_the_sea','ember_core':'minecraft:item/blaze_powder','void_core':'minecraft:item/ender_eye'}[n]
textures['sovereign_keystone']='minecraft:item/nether_star'
write('kubejs/startup_scripts/tk3_campaign_components.js', '// Full restart required: chapters 6–10 registry additions.\nStartupEvents.registry("item", event => {\n'+''.join('    event.create('+j('tk3_'+n)+').displayName('+j(label)+').texture('+j(textures[n])+');\n'for n,label in new_items.items())+'});\n')
parents={6:'create:block/brass_casing',7:'ars_nouveau:block/sourcestone',8:'create:block/copper_casing',9:'create:block/brass_casing',10:'ars_nouveau:block/sourcestone'}
write('kubejs/startup_scripts/tk3_campaign_frames.js','StartupEvents.registry("block", event => {\n'+''.join('    event.create('+j(frame_ids[t].split(':')[1])+').displayName('+j(label)+').hardness(4).resistance(8).parentModel('+j(parents[t])+');\n'for t,label in frame_names.items())+'});\n')
for t,label in frame_names.items():
    name=frame_ids[t].split(':')[1]
    write('kubejs/assets/kubejs/models/item/'+name+'.json',j({'parent':parents[t]}))
    write('kubejs/assets/kubejs/blockstates/'+name+'.json',j({'variants':{'':{'model':parents[t]}}}))

# Existing quest IDs are never regenerated. New chapters have deterministic IDs.
m['chapters']=[c for c in m['chapters'] if c['order_index']<=5]
milestone5=next(q for q in m['chapters'][4]['quests'] if q['id']==m['milestones']['5'])
milestone5['description']=['Your Create workshop, magical production and powered refining now form one industrial bridge. Complete this milestone to unlock chapter VI and the first AE2 network. The rewarded hammer supports a parallel kinetic assembly line.']
titles={6:('VI · The Connected Kingdom','AE2 networks, processing patterns and living logistics'),7:('VII · Beyond the Horizon','Airships, chemical systems and purposeful exploration'),8:('VIII · Containment & Control','Fission, advanced storage and safe nuclear production'),9:('IX · Singularity Engineering','End access, fusion and antimatter without a grind wall'),10:('X · The Sovereign Project','Join every workshop into a renewable kingdom')}
quest_lookup={q['title']:q['id'] for c in m['chapters'] for q in c['quests']}
boss_quests={}
def chapter(t):
    c=dict(id=uid('chapter-'+str(t)),filename='tk3_chapter_'+str(t),group=m['chapters'][0]['group'],title=titles[t][0],subtitle=titles[t][1],icon=frame_ids[t],order_index=t,default_hide_dependency_lines=False,quests=[])
    m['chapters'].append(c);return c
def quest(c,key,title,item=None,count=1,deps=None,description='',optional=False,kill=None,check=False,rewards=None):
    qid=uid('quest-'+key); index=len(c['quests']);tasks=[]
    if item: tasks.append(dict(id=uid('task-'+key),type='item',item=dict(id=item,count=1),count=count,consume_items=False))
    if kill: tasks.append(dict(id=uid('kill-'+key),type='kill',entity=kill,value=1))
    if check or not tasks: tasks.append(dict(id=uid('check-'+key),type='checkmark',title='Confirm this production line works'))
    q=dict(id=qid,title=title,description=[description],dependencies=deps or [],tasks=tasks,optional=optional,x=float((index%5)*3),y=float((index//5)*3),icon=item or c['icon'],rewards=rewards or [])
    c['quests'].append(q);quest_lookup[title]=qid;return qid
def reward(item,name=None):
    stack=dict(id=item,count=1)
    if name: stack['components']={'minecraft:unbreakable':{},'minecraft:custom_name':j(dict(text=name,color='light_purple',italic=False))}
    return dict(id=uid('reward-'+item+'-'+str(name)),type='item',item=stack,count=1,team_reward=False)
specs={
6:[('charger','Charge the crystal','ae2:charger',1,'Steel Casing, certus crystal and a capacitor bootstrap the Charger before the Network Chassis.'),
   ('fluix','A crystal in motion','ae2:fluix_crystal',8,'Use the native AE2 water transformation: charged certus, Nether quartz and redstone. Native crystal growth remains available.'),
   ('inscriber','Processors before the network','ae2:inscriber',1,'Build the bootstrap Inscriber before the network. Duplicate the presses, print circuits and silicon, then combine them with redstone into processors.'),
   ('network-mech','Network Mechanism',K('network_mechanism'),4,'Precision Mechanism → Advanced Control Circuit → Fluix Crystal → Diamond Hammer. One sequence loop, guaranteed output.'),
   ('frame','Network Chassis',frame_ids[6],2,'Deploy a Network Mechanism onto a Steel Casing. Keep your first Charger and Inscriber; the chassis builds the wider network.'),
   ('controller','A network heart','ae2:controller',1,'Connect the controller to FE using an Energy Acceptor. AE2 channels and native power use remain active.'),
   ('storage','An organised stockroom','ae2:drive',1,'Use 1k cells first; filter external storage on Sophisticated Storage buffers instead of mixing every item into one uncontrolled drawer.'),
   ('terminal','Make the stockroom readable','ae2:terminal',1,'Attach a terminal through powered ME cable. Craft processors on the Inscriber; duplicate the native presses for parallel lines.'),
   ('patterns','Teach the network','ae2:pattern_encoding_terminal',1,'Encode separate crafting and processing patterns. Match the authored recipe batch exactly, including returned buckets and catalysts.'),
   ('provider','Ask Create to work','ae2:pattern_provider',1,'A processing pattern sends ingredients into a buffer feeding the Create machine. Use an Import Bus or Interface to return results; do not extract unfinished sequence items.'),
   ('assembler','Craft on request','ae2:molecular_assembler',1,'Build a Crafting Unit with crafting storage before expecting automatic jobs. Processing patterns automate the established Create and magic recipes.'),
   ('cpu','Give the job a workspace','ae2:1k_crafting_storage',1,'Start with one small CPU. Larger storage and coprocessors belong to later tiers.'),
   ('factory','Parallel refining','mekanism:basic_enriching_factory',1,'Upgrade the Enrichment Chamber through its data-preserving Mekanism recipe. The machine inventory and settings survive.'),
   ('spellloom','Words cross systems','ars_n_spells:spell_loom',1,'The Ars spell loom links the magic systems. Its native spell rules stay active; machine construction follows the network tier.'),
   ('colony','Orders from the town','createminecolonies:colony_warehouse_stock_link',1,'Connect the colony warehouse to Create orders. Colony research and building levels stay native. Configure one shared supply buffer.',True)],
7:[('reinforced','A stronger circuit','mekanism:alloy_reinforced',8,'Infuse the alloy using the native Mekanism chemical recipe. The separator and chemistry machines unlock here.'),
   ('expedition','Expedition Mechanism',K('expedition_mechanism'),4,'Network Mechanism → Manipulation Essence → Reinforced Alloy → Diamond Knife. Ordinary knives wear; the milestone reward does not.'),
   ('frame','Expedition Frame',frame_ids[7],2,'Deploy the mechanism onto a Wizardry Arcane Casing. This frame powers the travel and chemistry layer.'),
   ('separator','Separate with purpose','mekanism:electrolytic_separator',1,'Water electrolysis starts the hydrogen/oxygen branch. Use native Mekanism chemicals and a chemical tank for buffering.'),
   ('reaction','Polymers from a farm','mekanism:pressurized_reaction_chamber',1,'Grow biomass. Use the native substrate/ethylene reaction and the second HDPE recipe; return the substrate and keep oxygen available.'),
   ('hdpe','A flexible shell','mekanism:hdpe_sheet',8,'Enrich three HDPE pellets into one sheet. HDPE feeds chapter VIII containment.'),
   ('gyro','Controlled flight','aeronautics:gyroscopic_propeller_bearing',1,'A stationary propeller was an early experiment. Build the gyroscopic bearing, smart propeller and an envelope to create controlled airships.'),
   ('envelope','Lift from a compact line','aeronautics:white_envelope',16,'Compacting one white wool, one string and one Expedition Mechanism yields eight white envelopes. Other colours have matching explicit recipes.'),
   ('flight','An actual expedition',None,1,'Build and test a small ship. Check claims, boarding, rotation, disassembly and returning inventories. This checkmark is a manual flight confirmation.'),
   ('wireless','Keep the network nearby','ae2:wireless_terminal',1,'Native range and charging still apply. Use a wireless access point and security setup required by your AE2 version.'),
   ('xp','A second life for gear','create_enchantment_industry:blaze_forger',1,'Recycle unwanted gear, preserve valuable affixes, and route XP into the native Enchantment Industry processing system.'),
   ('storage','Storage travels too','sophisticatedbackpacks:netherite_backpack',1,'Use the content-preserving upgrade recipe. The backpack grows with expeditions; infinite and creative upgrades remain disabled.')],
8:[('containment','Containment Mechanism',K('containment_mechanism'),4,'Expedition Mechanism → HDPE Sheet → Atomic Alloy → Sand Paper. One loop per finished mechanism.'),
   ('frame','Containment Frame',frame_ids[8],4,'Deploy the mechanism onto a Steel Casing. Stonecut frames into batches of reactor casing and turbine casing.'),
   ('fuel','Prepare fissile fuel','mekanism:isotopic_centrifuge',1,'Use the native uranium → sulfuric chemistry → uranium hexafluoride → fissile fuel chain. Machines retain their verified native chemical serializers.'),
   ('reactor','A contained reactor','mekanismgenerators:fission_reactor_casing',16,'Build a fission reactor with fuel assemblies, control rods, port and logic adapter. Provide a full coolant loop before activation.'),
   ('turbine','Recover the steam','mekanismgenerators:turbine_casing',16,'Use the native turbine multiblock with rotors, blades, coils, vents and condensers. Return cooling water; test the shutdown before raising burn rate.'),
   ('waste','Waste is part of the recipe','mekanism:radioactive_waste_barrel',4,'Prepare waste capacity and safe handling. This is a manual setup confirmation, not an automatic radiation measurement.'),
   ('polonium','Sunlight after fission','mekanism:pellet_polonium',2,'Nuclear waste → Solar Neutron Activator → polonium → Pressurised Reaction Chamber → pellets, using native Mekanism processing. This feeds the next mechanism.'),
   ('storage','One warehouse, many items','ae2:cell_component_16k',1,'Larger cells and a Matter Condenser are now available. A singularity still needs the native condenser energy/material requirement.'),
   ('miner','A planned worksite','mekanism:digital_miner',1,'Use deliberate filters and a defined work area. The miner improves mining capacity; it does not replace required boss defeats.'),
   ('shutdown','Prove the shutdown',None,1,'Confirm coolant, waste, redstone shutdown and inventory overflow control all work. Start at a low burn rate and increase only with stable cooling.')],
9:[('end','The End is earned',None,1,'Chapter VIII and the Ignis trial unlock End entry. End Remastered still requires its native unique-eye portal puzzle; reusable boss imprint recipes provide four deliberate eye routes.'),
   ('dragon','A kingdom beyond the portal',None,1,'Defeat the Ender Dragon. Gather dragon breath and explore BetterEnd using the native environment.',False,'minecraft:ender_dragon'),
   ('singularity','A controlled singularity','ae2:singularity',1,'Produce this in the native Matter Condenser. Choose overflow resources deliberately instead of deleting scarce production components.'),
   ('mechanism','Singularity Mechanism',K('singularity_mechanism'),4,'Containment Mechanism → Polonium Pellet → AE2 Singularity → Enchanter’s Sword. Use the apparatus-backed sword from the earlier magic workshop.'),
   ('frame','Singularity Frame',frame_ids[9],4,'Deploy a Singularity Mechanism onto a Fluix Block. It builds quantum logistics, fusion and the SPS layer.'),
   ('fusion','Fuel from two directions','mekanismgenerators:fusion_reactor_controller',1,'Native deuterium and tritium production feed fusion. Bring a charged laser/laser amplifier, suitable cooling and a fuel reserve.'),
   ('sps','Contain the impossible','mekanism:sps_casing',16,'Build the native Supercritical Phase Shifter and supercharged coils. It requires polonium and substantial FE; both remain meaningful production inputs.'),
   ('antimatter','An honest antimatter line','mekanism:pellet_antimatter',1,'Produce antimatter through the native SPS, then crystallise it into a pellet. There is no cheap mixing or crafting shortcut.'),
   ('quantum','A distant network','ae2:quantum_ring',8,'Use the native paired entangled singularity process. Quantum links transport a network; separate power and chunk availability still matter.')],
10:[('mechanism','Sovereign Mechanism',K('sovereign_mechanism'),4,'Singularity Mechanism → Antimatter Pellet → Dragon Breath → Diamond Hammer. This last production line consumes no boss drops.'),
    ('frame','Sovereign Core',frame_ids[10],2,'Deploy a Sovereign Mechanism onto an SPS Casing. The resulting core is a physical input to the final project and the highest equipment tier.'),
    ('armor','An industrial suit','mekanism:mekasuit_bodyarmor',1,'Optional: build the native powered suit through the tier-aware data-preserving recipe. Create, magic and chemistry still supply its infrastructure.',True),
    ('tool','One tool, powered','mekanism:meka_tool',1,'Optional: configure modules for your role instead of assuming all modules are free. High equipment recipes use the Sovereign Core.',True),
    ('storage','A final storage tier','ae2:cell_component_256k',1,'Optional: expand storage only when the network needs it. Infinite and creative alternatives remain unavailable.',True),
    ('create-line','The workshop still matters',None,1,'Confirm automated production of kinetic, sealed, precision and arcane mechanisms. Use actual recipe batches in AE2 patterns.'),
    ('chem-line','Industry closes its loop',None,1,'Confirm steel, HDPE, polonium and antimatter production with buffers, waste handling and return paths.'),
    ('town-line','A kingdom has supplies',None,1,'Maintain a MineColonies warehouse supply line through Create logistics and provide food and building materials from renewable farms.'),
    ('keystone','The Sovereign Keystone',K('sovereign_keystone'),1,'Sequence a Sovereign Core through four separate boss-core deployments: Verdant Sigil, Storm Core, Ember Core, Void Core. Each core stays in its Deployer. Finish with an Enchanter’s Sword; one guaranteed Keystone.')],
}
for t in range(6,11):
    c=chapter(t);previous=m['milestones'][str(t-1)];main=[]
    for index,spec in enumerate(specs[t]):
        key,title,item,count,description,*extra=spec;optional=bool(extra[0])if extra else False;kill=extra[1]if len(extra)>1 else None
        qid=quest(c,str(t)+'-'+key,title,item,count,[previous],description,optional,kill,check=item is None and not kill)
        if not optional: previous=qid;main.append(qid)
    if t in (6,7,8,9):
        _,boss,core=next(b for b in bosses if b[0]==t)
        boss_id=quest(c,'boss-'+str(t),'Trial · '+boss.split(':')[1].replace('_',' ').title(),deps=[previous],kill=boss,
             description='Defeat this boss. The kill task is detected and grants one reusable production core per player. Further player kills drop additional cores for parallel lines.',rewards=[reward(K(core))])
        boss_quests[core]=boss_id;main.append(boss_id)
    label=frame_names[t]+' Tool'
    milestone=quest(c,'milestone-'+str(t),'Milestone · '+titles[t][0].split(' · ')[1],deps=main[-3:],check=True,
                   description=('Complete the working line and the required trial. This unlocks chapter '+str(t+1)+'. ' if t<10 else 'The Sovereign Keystone joins the mechanical, magical, digital, nuclear and exploration workshops. Continue building your kingdom with the complete production system. ')+
                   'Reward: a named unbreakable finishing tool; one claim per player.',rewards=[reward(mechanisms[t][4],label)])
    m['milestones'][str(t)]=milestone
# Optional addon introductions keep all existing quest IDs and milestones intact.
for t,key,title,item,description,kill in [
 (3,'town-link','The town places an order','createminecolonies:colony_warehouse_stock_link','Connect a MineColonies warehouse to Create orders. Native colony research and building levels remain active.',None),
 (3,'wroughtnaut','A deliberate duel',None,'Fight the Wroughtnaut with the native encounter mechanics. Epic Fight, Simply Swords and Weapons of Miracles form the combat layer.','mowziesmobs:ferrous_wroughtnaut'),
 (4,'starbuncle','A living power source','ars_creo:starbuncle_wheel','Connect Ars Creo to Create. Feed and configure the native Starbuncle wheel.',None),
 (4,'witchery','A second kind of magic','witchery:iron_witches_oven','Start Witchery with the oven, altar, cauldron and spinning wheel. Modonomicon explains native rituals and environmental altar requirements.',None),
 (4,'mana-pump','Mana in motion','create_wizardry:arcane_pump','Pump native Wizardry mana into the cauldron ink line. Source and mana are separate resources.',None),
 (5,'distillery','Distil the harvest','witchery:distillery','Expand Witchery with the industrial distillery. Native brews and rituals retain their own requirements.',None),
 (6,'affixes','Refine the equipment','apotheosis:reforging_table','Salvage unwanted affixed equipment, then use native reforging and gems. The tables require the network workshop.',None),
 (6,'twilight-spells','Spells from the forest',None,'Explore Twilight Forest and Spellbooks of Twilight. Native boss seals and adventure order remain active.',None),
 (7,'dragon-trial','An expedition meets a dragon',None,'Explore Ice and Fire and its spell bridge. Native dragon age and forge rules remain active.','iceandfire:fire_dragon'),
 (7,'cave-trial','An expedition below ground',None,'Explore Alex’s Caves and its spellbooks. Native biome research remains the discovery path.','alexscaves:forsaken'),
]:
    c=next(c for c in m['chapters'] if c['order_index']==t)
    if kill: assert kill in entities
    quest(c,'addon-'+key,title,item,deps=[m['milestones'][str(t-1)]],description=description,optional=True,kill=kill)
m['quest_count']=sum(len(c['quests'])for c in m['chapters'])
for c in m['chapters']:write('config/ftbquests/quests/chapters/'+c['filename']+'.snbt',json.dumps(c,ensure_ascii=False,indent=2)+'\n')

# Rebuild an exact allowlist. Disabled infinite/creative shortcuts stay empty.
blocked={k:[]for k,ids in m['output_whitelist'].items()if not ids and k not in {oid(r['output'])for r in R}}
allowed=collections.defaultdict(list,blocked)
controlled={oid(r['output']) for r in R if not r.get('fluid_output') and (r in added or r.get('strict',False))}
for r in R:
    if oid(r['output']) in controlled: allowed[oid(r['output'])].append(r['id'])
m['output_whitelist']=dict(sorted(allowed.items()))
gates={str(t):[]for t in range(2,11)}
earliest={}
for r in R:earliest[oid(r['output'])]=min(earliest.get(oid(r['output']),99),r['tier'])
for t,items in m['gates'].items():
    for item in items:
        if not item.startswith(('ae2:','mekanism:','mekanismgenerators:','aeronautics:')): gates[str(min(int(t),10))].append(item)
for item,t in earliest.items():
    if t>1 and item.startswith(('ae2:','mekanism:','mekanismgenerators:','aeronautics:','kubejs:','ars_n_spells:','apotheosis:','witchery:','createaddition:','create_wizardry:','create_enchantment_industry:')):gates[str(t)].append(item)
for item in known:
    if item.startswith('ae2:'):
        t=ae_tier(item)
    elif item.startswith(('mekanism:','mekanismgenerators:')):
        t=earliest.get(item,mek_tier(item));t=max(5,t)
    elif item.startswith('aeronautics:'):
        t=3 if item.split(':')[1]in ['propeller_bearing','wooden_propeller','andesite_propeller','aviators_goggles'] else 7
    elif item.startswith('twilight_spellbooks:'):t=6
    elif item.startswith('cataclysm_spellbooks:'):t=9 if any(x in item for x in ['void','abyss','cursium'])else 8 if 'ignis' in item else 7
    elif item.startswith('alexs_caves_spellbooks:'):t=7
    elif item.startswith('simulated:'):t=7
    else:continue
    if t>1:gates[str(t)].append(item)
# Shift unlocked storage outputs away from the old placeholder locks.
for item,t in earliest.items():
    if item.startswith(('sophisticatedstorage:','sophisticatedbackpacks:')):
        for values in gates.values():
            while item in values:values.remove(item)
        if t>1:gates[str(t)].append(item)
# Exact output tiers win over broad family defaults, once only per item.
actual={}
for t,items in gates.items():
    for item in items:actual[item]=earliest.get(item,max(actual.get(item,1),int(t)))
m['gates']={str(t):sorted(item for item,tier in actual.items()if tier==t)for t in range(2,11)}

def expand(values):
    out=[]
    for v in values:
        q=re.match(r'^(\d+)x (.*)$',v)if isinstance(v,str)else None
        out.extend([q[2]]*int(q[1])if q else[v])
    return out
def ing(v):return 'Fluid.of('+j(v['fluid'])+', '+str(v['amount'])+')'if isinstance(v,dict)else j(v)
def compile(r):
    kind=r['kind'];out=j(r['output']);a=r['inputs'];rid=j(r['id'])
    if r.get('json'):return 'event.custom('+j(r['json'])+').id('+rid+');'
    if kind=='shaped':return 'event.shaped('+out+', '+j(r['pattern'])+', '+j(a)+').id('+rid+');'
    if kind=='shapeless':return 'event.shapeless('+out+', '+j(expand(a))+').id('+rid+');'
    if kind=='stonecutting':return 'event.stonecutting('+out+', '+j(a[0])+').id('+rid+');'
    if kind=='apparatus':return 'event.recipes.ars_nouveau.enchanting_apparatus('+j(a[1:])+', '+j(a[0])+', '+out+', '+str(r.get('source',1000))+').id('+rid+');'
    if kind=='sequence':
        steps=[]
        for i,v in enumerate(a[1:]):
            step='event.recipes.create.deploying(['+j(r['transition'])+'], ['+j(r['transition'])+', '+j(v)+'])'
            if i in r.get('keep_steps',[]):step+='.keepHeldItem()'
            steps.append(step)
        return 'event.recipes.create.sequenced_assembly(['+out+'], '+j(a[0])+', ['+', '.join(steps)+']).transitionalItem('+j(r['transition'])+').loops(1).id('+rid+');'
    suffix='.keepHeldItem()'if r.get('keep')else '.heated()'if r.get('heated')else ''
    return 'event.recipes.create.'+kind+'(['+out+'], ['+', '.join(ing(v)for v in expand(a))+'])'+suffix+'.id('+rid+');'
# Existing scripts can contain replaced addon outputs: remove only those original recipe blocks.
for p in (root/'kubejs/server_scripts/recipes').glob('*.js'):
    if p.name in ('tk3_whitelist.js','tk3_recipe_cleanup.js','tk3_campaign.js','tk3_addons.js','tk3_ae_network.js','tk3_industrial.js'):continue
    s=p.read_text()
    removed_ids={old['id'] for old in json.loads(manifest.read_text())['recipes'] if oid(old['output']) in new_outputs}
    pattern=r'^    // [^\n]+ / [^\n]+\n(?:    //[^\n]*\n)*    (?:event|AE2Recipes)\.[\s\S]*?;\n'
    s=re.sub(pattern,lambda mt:'' if any(j(rid) in mt[0] for rid in removed_ids) else mt[0],s,flags=re.M)
    p.write_text(s)
for system in ['campaign','addons','ae_network','industrial']:
    rows=[r for r in added if r['system']==system]
    text='// priority: 0\n// T&K3 chapters 1–10 / '+system+'\nServerEvents.recipes(event => {\n'
    text+=''.join('\n  // tier '+str(r['tier'])+' | '+r['id']+'\n  '+compile(r)+'\n'for r in rows)+'});\n'
    write('kubejs/server_scripts/recipes/tk3_'+system+'.js',text)
write('kubejs/server_scripts/recipes/tk3_recipe_cleanup.js','// priority: 10000\n// Remove controlled native recipes before any registrations.\nServerEvents.recipes(event => {\n  '+j(sorted(allowed))+'.forEach(output => event.remove({output: output}));\n});\n')
p=root/'kubejs/server_scripts/recipes/tk3_whitelist.js';s=p.read_text();s=re.sub(r'\s*const allowed = \{[\s\S]*?\};\n',lambda _: '\n  const allowed = '+j(dict(allowed))+';\n',s,count=1);s=re.sub(r'const processing = \[[\s\S]*?\];',lambda _:'const processing = '+j(m['processing_whitelist'])+';',s,count=1);p.write_text(s)
stage_path=root/'kubejs/server_scripts/progression/tk3_stages.js';stage=stage_path.read_text();sync=stage[:stage.index('\n[',stage.index('})();'))]
milestones=[dict(quest=m['milestones'][str(t)],stage='tk3_tier_'+str(t+1))for t in range(1,10)]
milestones.extend(dict(quest=qid,stage='tk3_boss_'+core)for core,qid in boss_quests.items())
sync=re.sub(r'const milestones = \[[\s\S]*?\];',lambda _:'const milestones = '+j(milestones)+';',sync,count=1)
stage=sync+'\n'
for t,items in m['gates'].items():
    stage+='\n'+j(items)+'.forEach(item => {\n  AStages.addRestrictionForItem("tk3/device/" + item.replace(":", "/"), "tk3_tier_'+t+'", item)\n    .allowPickup().allowInventoryStorage().allowContainerStorage().showInRecipeViewer()\n    .setCanBePlaced(false).setCanItemBeRightClicked(false).setCanInteractWithBlock(false);\n});\n'
stage+='\nAStages.addRestrictionForMod("tk3/industry/mekanism", "tk3_tier_5", "mekanism", "mekanismgenerators")\n  .allowPickup().allowInventoryStorage().allowContainerStorage().allowMining().allowLeftClick().showInRecipeViewer()\n  .setCanBePlaced(false).setCanItemBeRightClicked(false).setCanInteractWithBlock(false);\n'
stage+='\nAStages.addRestrictionForMod("tk3/late/ae2", "tk3_tier_6", "ae2")\n  .allowPickup().allowInventoryStorage().allowContainerStorage().showInRecipeViewer()\n  .setCanBePlaced(false).setCanItemBeRightClicked(false).setCanInteractWithBlock(false);\n'
stage+='\n// Exact ProbeJS dimension signature; native unique-eye portal puzzle remains active.\nAStages.addRestrictionForDimension("tk3/end", "tk3_tier_9", "minecraft:the_end");\n'
for _,boss,core in bosses:
    stage+='\nAStages.addRestrictionForItem('+j('tk3/boss/'+core)+', '+j('tk3_boss_'+core)+', '+j(K(core))+')\n  .allowPickup().allowInventoryStorage().allowContainerStorage().showInRecipeViewer()\n  .setCanItemBeRightClicked(false);\n'
write('kubejs/server_scripts/progression/tk3_stages.js',stage)
write('kubejs/server_scripts/loot/tk3_boss_cores.js','// ProbeJS 1.21.1: addEntityModifier, killedByPlayer, LootEntry.of.\nLootJS.modifiers(event => {\n'+''.join('    event.addEntityModifier('+j(boss)+').killedByPlayer().addLoot(LootEntry.of('+j(K(core))+'));\n'for _,boss,core in bosses)+'});\n')
m['campaign_extension']=dict(chapters=10,new_recipes=len(added),total_recipes=len(R),quests=m['quest_count'],new_items=new_items,frames=frame_ids,bosses=[dict(tier=t,entity=boss,item=K(core),quest=boss_quests[core])for t,boss,core in bosses],native_sources={mod:len(values)for mod,values in native.items()},notes=['Native chemicals, nuclear power, AE2 channels and portal puzzle remain active.','Native data-preserving machine and storage upgrade serializers are retained.','All sequences have exactly one loop; boss imprint deployments retain the physical catalyst.','Creative/infinite shortcuts remain deliberately disabled.'])
manifest.write_text(json.dumps(m,ensure_ascii=False,indent=2)+'\n')
write('tools/registry_items.json',j(sorted(known | {'architects_palette:algal_blend'})))
subprocess.run([sys.executable,str(root/'tools/format_recipes.py'),'--pack',str(root)],check=True)
print(j(m['campaign_extension']))
