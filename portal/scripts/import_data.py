#!/usr/bin/env python3
"""Compile the canonical pack's registries into the documentation data model."""
from __future__ import annotations
from pathlib import Path
from zipfile import ZipFile
from collections import Counter,defaultdict
import csv,html,json,re,hashlib,subprocess,os,tomllib

ROOT=Path(__file__).resolve().parents[2]
PACK=ROOT/'TK3'; KUBE=PACK/'kubejs'; OUT=ROOT/'portal/src/data'
OUT.mkdir(parents=True,exist_ok=True)
def read(p):return json.loads(Path(p).read_text())
def dump(name,value):
    (OUT/(name+'.json')).write_text(json.dumps(value,ensure_ascii=False,separators=(',',':'))+'\n')
def human(s):return re.sub(r'\s+',' ',s.replace('_',' ').replace('/',' ')).strip().title()
def title(i):return names.get(i,human(i.split(':')[-1]))
def component_label(components):
    if not isinstance(components,dict):return ''
    custom=components.get('minecraft:custom_data',{})
    if isinstance(custom,dict):
        batch=next((value for key,value in custom.items()if key.startswith('tnk_')and'batch'in key and isinstance(value,str)),None)
        if batch:
            if ':'in batch:
                namespace,batch=batch.split(':',1);prefix=[mod_names.get(namespace,human(namespace))]
            else:prefix=[]
            return 'Prepared batch: '+' · '.join(prefix+[human(part)for part in batch.split('/')if part])
    potion=components.get('minecraft:potion_contents',{})
    if isinstance(potion,dict)and potion.get('potion'):
        return human(potion['potion'].split(':')[-1])+' potion'
    return ''
def recipe_outputs(recipe):
    raw=recipe.get('result')or recipe.get('results')or recipe.get('output')or[]
    values=raw if isinstance(raw,list)else[raw]
    output=[]
    for value in values:
        if isinstance(value,str):
            match=re.match(r'^(\d+)x?\s+(.+)$',value)
            output.append({'id':match[2]if match else value,'count':int(match[1])if match else 1})
        elif isinstance(value,dict):
            if isinstance(value.get('item'),dict):
                stack=dict(value['item']);stack.update({k:v for k,v in value.items()if k!='item'})
            else:stack=dict(value)
            item=stack.get('id',stack.get('item',stack.get('fluid')))
            if isinstance(item,str):stack['id']=item;output.append(stack)
    return output
def ingredients(d):
    found=Counter();details={}
    def normalize(x):
        if isinstance(x,str):
            match=re.match(r'^(\d+)x?\s+(.+)$',x);count=int(match[1])if match else 1;key=match[2]if match else x
            if ':'not in key:return None
            tag=key.startswith('#');key=key.lstrip('#');kind='tag'if tag else 'item'
            return {'id':key,'name':human(key.split(':')[-1])if tag else title(key),'tag':tag,'kind':kind,'count':count}
        if isinstance(x,list):
            choices=[value for option in x if(value:=normalize(option))is not None]
            if not choices:return None
            if len(choices)==1:return choices[0]
            return {'id':'','name':'Any one of: '+' or '.join(v['name']for v in choices),'tag':False,'kind':'alternatives','options':choices,'count':1}
        if isinstance(x,dict):
            if x.get('type')=='neoforge:difference':
                base=normalize(x['base']);subtracted=normalize(x['subtracted'])
                return {'id':'','name':base['name']+' except '+subtracted['name'],'tag':False,'kind':'difference','base':base,'subtracted':subtracted,'count':x.get('count',1)}
            key=x.get('item')or x.get('id')or x.get('tag')or x.get('fluid')or x.get('fluids')
            fluid='fluid'in x or'fluids'in x or'amount'in x or x.get('type')=='fluid_stack'
            if not key and'items'in x:
                value=normalize(x['items'])
                if value:
                    value['count']*=x.get('count',1)
                    if 'components'in x:value.update(components=x['components'],componentLabel=component_label(x['components']),strict=x.get('strict',False))
                return value
            if isinstance(key,list):
                value=normalize(key)
                if value:
                    value['count']*=x.get('amount',x.get('count',1))
                    if fluid:value['kind']='fluid'if value['kind']!='alternatives'else'alternatives'
                    if 'components'in x:value.update(components=x['components'],componentLabel=component_label(x['components']))
                return value
            if isinstance(key,str)and ':'in key:
                kind='fluid'if fluid else 'tag'if 'tag'in x else 'item'
                value={'id':key,'name':human(key.split(':')[-1])if kind!='item'else title(key),'tag':'tag'in x,'kind':kind,'count':x.get('amount',x.get('count',1))}
                if 'components'in x:value.update(components=x['components'],componentLabel=component_label(x['components']),strict=x.get('strict',False))
                return value
            if 'ingredient'in x or'basePredicate'in x:
                value=normalize(x.get('ingredient',x.get('basePredicate')))
                if value:value['count']*=x.get('count',1)
                return value
            if isinstance(x.get('type'),str):
                return {'id':'','name':human(x['type'].split(':')[-1]),'tag':False,'kind':'predicate','predicateType':x['type'],'predicate':x,'count':x.get('count',1)}
            if x:raise ValueError('Unsupported ingredient shape: '+json.dumps(x,sort_keys=True))
        return None
    def add(x,mult=1,consumed=True):
        value=normalize(x)
        if value is None:return
        count=value.pop('count',1)*mult;value['consumed']=consumed
        key=json.dumps(value,sort_keys=True)
        found[key]=found[key]+count if consumed else max(found[key],count)
        details[key]=value
    def is_transition(value,transition):
        if isinstance(value,dict):return value.get('item',value.get('id'))==transition
        return False
    if 'pattern'in d and 'key'in d:
        counts=Counter(''.join(d['pattern']))
        for symbol,value in d['key'].items():add(value,counts[symbol])
    elif d.get('type')=='create:sequenced_assembly':
        add(d.get('ingredient'));transition=(d.get('transitional_item')or{}).get('id');loops=d.get('loops',1)
        for step in d.get('sequence',[]):
            for index,value in enumerate(step.get('ingredients',[])):
                if is_transition(value,transition):continue
                consumed=not(index==1 and step.get('keep_held_item'))
                add(value,loops if consumed else 1,consumed)
    else:
        for key in ['ingredients','ingredient','input','inputs','input_items','reagent','pedestalItems','pedestal_items','input_item','fluid','template','base','addition']:
            if key in d:
                if key in ['ingredients','inputs','input_items','pedestalItems','pedestal_items']and isinstance(d[key],list):
                    for index,value in enumerate(d[key]):add(value,1,not(index==1 and d.get('keep_held_item')))
                else:add(d[key])
        if 'tool'in d:add(d['tool'],consumed=False)
    return [dict(details[k],count=v)for k,v in found.items()]

manifest=read(PACK/'manifest.json')
modlist=(PACK/'modlist.html').read_text()
links=re.findall(r'<li>\s*<a[^>]+href="([^"]+)"[^>]*>(.*?)</a>',modlist,re.S)
assert len(links)==len(manifest['files']),(len(links),len(manifest['files']))
categories=['Combat & Epic Fight Ecosystem','Magic, Spellbooks & Witchery','Create, Aeronautics & Mechanical Addons','Applied Energistics 2 & Logistics','Culinary, Agriculture & Homesteading','World Generation, Dimensions & Structures','Boss Encounters, Mobs & Progression','Custom TK3 Mods & Core Performance']
def category(slug,name):
    text=(slug+' '+name).lower()
    groups=[(0,['epic-fight','weapons-of-miracles','simply-swords','knaves','celestisynth','combat-','punchy','dawn-day']),
    (1,['ars-','ars ','irons-spells','iron\'s','spellbook','witchery','thaumaturg','resonant-arcana','magic']),
    (3,['applied-energistics','ae2','extendedae','sophisticated','storage','pretty-pipes','linked-chest','aeinfinity','logistics']),
    (4,['delight','farming','farm-and','farm-charm','bakery','brewery','vinery','herbal','cooking','agricultur','sol-carrot','food','homestead']),
    (2,['create','aeronaut','sable','let-it-walk','immersive-engineering','offroad','diesel','rubberworks']),
    (5,['biomes','regions-unexplored','tectonic','worldgen','nether','end-island','enderscape','beyond','isleweaver','dungeon','structure','yungs','aether','streams','wildshape','ultraterraforged']),
    (6,['cataclysm','mowzie','legendary-monster','boss','apotheosis','puffish','pufferfish','unidentified-loot','twilight','end-remaster','archies','alexs-caves','deeper-and-darker'])]
    for index,words in groups:
        if any(word in text for word in words):return categories[index]
    return categories[7]
flagships={
 'create':'Rotational power, processing lines and moving machinery form the foundation of the workshop.',
 'create-aeronautics':'Build moving vessels with propellers, buoyancy, bearings and flight controls.',
 'let-it-walk':'Assemble articulated walkers with powered joints, pilot controls and specialised feet.',
 'epic-fight-mod':'Weapon-specific attacks, guard styles and innate skills shape melee combat.',
 'applied-energistics-2':'Store resources digitally and build automated crafting and logistics networks.',
 'irons-spells-n-spellbooks':'Discover spell schools, bind spells and develop a magical combat loadout.',
 'ars-nouveau':'Create spells, enchant equipment and automate tasks with source-powered devices.',
 'witchery':'Rituals, brewing and supernatural crafts expand the magical workshop.',
 'immersive-engineering':'Steel production, electrical systems and industrial multiblocks extend the factory.',
 'towns-kingdoms-progression':'Character experience, Origins, titles and skill points connect everyday play to character growth.',
 'unidentified-loot':'Recover unidentified equipment, appraise it and salvage unwanted finds.',
}
boss_entities=set(read(PACK/'config/tnkprogression.json').get('bossBaseLevels',{}))
native_boss_drops=defaultdict(set)
mods=[];mod_names={};loaded=set();names={};native_recipes={};native_tags={};namespace_mod={}
jar_roots=[Path(os.environ.get('TNK_JAR_CACHE',ROOT.parents[1]/'github_weapon_overview/icon_sources')),ROOT.parents[1]/'upload']
if os.environ.get('TNK_NO_NATIVE_ARTIFACTS')=='1':jar_roots=[]
for jar_root in jar_roots:
    if not jar_root.exists():continue
    for jar in sorted(jar_root.glob('*.jar')):
        try:
            with ZipFile(jar)as z:
                members=set(z.namelist())
                for member in members:
                    tm=re.fullmatch(r'data/([^/]+)/tags/(?:item|items)/(.+)\.json',member)
                    lm=re.fullmatch(r'data/([^/]+)/loot_table/entities/(.+)\.json',member)
                    if lm and lm[1]+':'+lm[2]in boss_entities:
                        try:
                            def boss_entries(value):
                                if isinstance(value,list):
                                    for child in value:boss_entries(child)
                                elif isinstance(value,dict):
                                    if value.get('type')in ['minecraft:item','item']and isinstance(value.get('name'),str):native_boss_drops[value['name']].add(lm[1]+':'+lm[2])
                                    for child in value.values():boss_entries(child)
                            boss_entries(json.loads(z.read(member)))
                        except ValueError:pass
                    if tm:
                        try:
                            tagdoc=json.loads(z.read(member));tagid=tm[1]+':'+tm[2]
                            if tagdoc.get('replace'):native_tags[tagid]=[]
                            native_tags.setdefault(tagid,[]).extend(v if isinstance(v,str)else v.get('id','') for v in tagdoc.get('values',[]))
                        except (ValueError,KeyError):pass
                if 'META-INF/neoforge.mods.toml'in members:
                    metadata=tomllib.loads(z.read('META-INF/neoforge.mods.toml').decode())
                    for mod in metadata.get('mods',[]):namespace_mod[mod['modId']]=mod.get('displayName',human(mod['modId']));loaded.add(mod['modId'])
                for member in members:
                    if re.match(r'assets/[^/]+/lang/en_us\.json$',member):
                        try:
                            for key,value in json.loads(z.read(member)).items():
                                match=re.match(r'(?:item|block)\.([^.]+)\.(.+)$',key)
                                if match and isinstance(value,str):names[match[1]+':'+match[2].replace('.','/')]=value
                        except Exception:pass
                    if re.match(r'data/[^/]+/recipe/.+\.json$',member):
                        try:
                            parts=member.split('/');native_recipes[parts[1]+':'+('/'.join(parts[3:])[:-5])]=json.loads(z.read(member))
                        except Exception:pass
        except Exception:pass
for p in (KUBE/'assets').glob('*/lang/en_us.json'):
    for key,value in read(p).items():
        match=re.match(r'(?:item|block)\.([^.]+)\.(.+)$',key)
        if match and isinstance(value,str):names[match[1]+':'+match[2].replace('.','/')]=value
support=re.compile(r'(?:\blib(?:rary)?\b|framework|api|kotlin|architectury|geckolib|cloth-config|moonlight|resourceful|octo-lib|curios|rhino|kubejs|fusion|balm|puzzles|yacl|searchables|accessories)',re.I)
for row,(url,text)in zip(manifest['files'],links):
    name=html.unescape(re.sub('<[^>]+>','',text));name=re.sub(r'\s*\(by .+?\)\s*$','',name).strip();slug=url.rstrip('/').split('/')[-1]
    ident=slug.replace('-','_');loaded.add(ident);mod_names[ident]=name
    compact=re.sub('[^a-z0-9]','',slug)
    for ns,display in namespace_mod.items():
        if re.sub('[^a-z0-9]','',ns)in compact or re.sub('[^a-z0-9]','',display.lower())in compact:mod_names[ns]=name;loaded.add(ns)
    mods.append({'id':ident,'projectId':row['projectID'],'name':name,'slug':slug,'url':url,'category':category(slug,name),'summary':flagships.get(slug,''),'supporting':bool(support.search(slug+' '+name))})
for namespace,display_name in namespace_mod.items():mod_names.setdefault(namespace,display_name)
mod_names.update({'minecraft':'Minecraft','kubejs':'Towns & Kingdoms','tnk':'Towns & Kingdoms','epicfight':'Epic Fight','epicfight_dd':'Dawn Day','wom':'Weapons of Miracles','womplus':'WoM Plus','let_it_walk':'Let It Walk','simulated':'Create: Simulated'})
loaded.update(['minecraft','kubejs','tnk','simulated','aeronautics','alchemicallaser','tnkprogression','tnkloot','create'])
metadata_path=ROOT/'portal/scripts/registry_metadata.json'
manifest_hash=hashlib.sha256((PACK/'manifest.json').read_bytes()).hexdigest()
if not native_recipes and metadata_path.exists():
    saved=read(metadata_path)
    if saved.get('manifestHash')!=manifest_hash:raise RuntimeError('Installed item metadata must be refreshed for this manifest.')
    names.update(saved['names']);mod_names.update(saved['modNames']);loaded.update(saved['loadedMods']);native_boss_drops.update({k:set(v)for k,v in saved.get('bossDropSources',{}).items()})
else:
    metadata_path.write_text(json.dumps({'manifestHash':manifest_hash,'names':names,'modNames':mod_names,'loadedMods':sorted(loaded),'bossDropSources':{k:sorted(v)for k,v in native_boss_drops.items()}},ensure_ascii=False,separators=(',',':'))+'\n')
# CurseForge slugs and registered mod IDs commonly differ only in separators:
# sophisticated-backpacks -> sophisticatedbackpacks, biomes-o-plenty ->
# biomesoplenty. Apply this binding equally to artifact-backed and clean CI runs.
loaded.update(re.sub('[^a-z0-9]','',mod['slug'])for mod in mods)
for lang in sorted((KUBE/'assets').glob('*/lang/en_us.json')):
    for key,value in read(lang).items():
        match=re.match(r'(?:item|block)\.([^.]+)\.(.+)',key)
        if match and isinstance(value,str):names[match[1]+':'+match[2].replace('.','/')]=value
mod_names['cataclysm']="L_Ender's Cataclysm"
for mod in mods:
    if mod['slug']=='lendercataclysm':mod['name']="L_Ender's Cataclysm"
dump('mods',mods)

chapternames=[('Getting Started','makeshift_kinetic_mechanism','Build the first hand-crafted tools and establish a workshop.'),('Andesite · Kinetic','rotation_mechanism','Turn rotational power into repeatable processing.'),('Copper · Sealed','sealed_mechanism','Build sealed systems, fluid handling and dependable production.'),('Brass · Precision','precision_mechanism','Use precision assemblies to coordinate more capable machines.'),('AE2 · Calculation','calculation_mechanism','Connect digital storage, processors and automated crafting.'),('Light Engineering · Steel','reinforced_mechanism','Produce reinforced components and establish electrical engineering.'),('Heavy Engineering · Aluminium & Oil','industrial_mechanism','Scale industrial processing and fluid production.'),('Magic & Mana','arcane_mechanism','Connect source, mana and magical manufacturing.'),('Radiant & Shadow','eclipse_mechanism','Combine radiant and shadow materials in advanced machinery.'),('Creative Core','creation_mechanism','Bring the factory together in the Creation Core production chain.')]
romans=['I','II','III','IV','V','VI','VII','VIII','IX','X']
chapters=[{'id':'chapter-'+str(i).zfill(2),'number':i,'roman':romans[i-1],'title':name,'mechanism':'kubejs:'+mech,'summary':summary,'milestones':[],'gates':[]}for i,(name,mech,summary)in enumerate(chapternames,1)]
production=[None,'rotation_mechanism','sealed_mechanism','precision_mechanism','calculation_mechanism','reinforced_mechanism','industrial_mechanism','arcane_mechanism','eclipse_mechanism','creation_mechanism']
production_names={i:human(v.removesuffix('_mechanism'))for i,v in enumerate(production)if v}

# Keep runtime resolution isolated from browser code. The importer only exposes
# recipes registered through the known recipe-event DSL; source hashes protect
# the cache used by clean CI checkouts that do not contain Minecraft artifacts.
NODE=r'''
const fs=require('fs'),vm=require('vm'),crypto=require('crypto');
const input=JSON.parse(fs.readFileSync(0,'utf8')),base=input.kube,records=new Map(),handlers=[],errors=[],functionCalls=[],handlerCalls=[],runtimeFamilies=[];let scope='';const startupNames={};
const clone=x=>JSON.parse(JSON.stringify(x)),tags=input.tags||{};
function tagIds(tag,seen=new Set()){if(seen.has(tag))return[];seen.add(tag);return [...new Set((tags[tag]||[]).flatMap(x=>typeof x==='string'&&x[0]==='#'?tagIds(x.slice(1),new Set(seen)):[x]).filter(Boolean))]}
function listIngredient(s){return String(s)[0]==='#'?tagIds(String(s).slice(1)):[String(s)]}
const tagWrapper=tag=>({removeAll(){tags[tag]=[];return this},get entries(){return(tags[tag]||[]).map(id=>({entry:()=>({elementOrTag:()=>({tag:()=>id[0]==='#',id:()=>id.replace(/^#/, '')})})}))},add(id){tags[tag]=[...(tags[tag]||[]),id];return this},remove:id=>{tags[tag]=(tags[tag]||[]).filter(x=>x!==id)}});
const tagEvent={get:tag=>tagWrapper(tag),add:(tag,ids)=>{tags[tag]=[...(tags[tag]||[]),...(Array.isArray(ids)?ids:[ids])]},remove:(tag,ids)=>{tags[tag]=(tags[tag]||[]).filter(x=>!(Array.isArray(ids)?ids:[ids]).includes(x))},removeAll:tag=>{tags[tag]=[]},removeAllTagsFrom:id=>{for(const tag of Object.keys(tags))tags[tag]=tags[tag].filter(x=>x!==id)},tags:{entrySet:()=>Object.keys(tags).map(k=>({getKey:()=>k,getValue:()=>tagWrapper(k)}))}};
function output(x){if(typeof x==='string'){let m=x.match(/^(\d+)x?\s+(.+)$/);return{id:m?m[2]:x,count:m?+m[1]:1}}return clone(x)}
function ing(x){if(typeof x==='string')return x[0]==='#'?{tag:x.slice(1)}:{item:x};return clone(x)}
function matches(d,f){if(!f)return true;if(f.or)return f.or.some(x=>matches(d,x));if(f.not&&matches(d,f.not))return false;
 if(f.id&&String(d._id)!==String(f.id))return false;if(f.type&&d.type!==f.type)return false;if(f.mod&&!String(d._id).startsWith(f.mod+':'))return false;
 if(f.output){let ids=Array.isArray(f.output)?f.output:[f.output],out=d.result?[d.result]:d.results||[];if(!out.some(x=>ids.includes(typeof x==='string'?x:x.id||x.item)))return false}
 if(f.input){let text=JSON.stringify(d.ingredients||d.ingredient||d.key||{});if(!text.includes(String(f.input)))return false}return true}
function wrap(value){return{toString:()=>JSON.stringify(value),get:key=>({getAsString:()=>String(value[key]),toString:()=>JSON.stringify(value[key])})}}
function recipe(doc,native=false,id=null){let d=clone(doc),current=id||'tnk:unnamed/'+crypto.createHash('sha1').update(JSON.stringify(d)).digest('hex').slice(0,12),obj;
 const target={removed:false,creationError:false,remove(){target.removed=true;return obj},serialize(){return obj},getId(){return current},merge(x){Object.assign(d,x);return obj}};
 obj=new Proxy(target,{get(t,k){if(k==='json')return wrap(d);if(k==='id'){let fn=x=>{if(x){records.delete(current);current=String(x);records.set(current,{id:current,recipe:d,scope,native,obj})}return obj};fn.toString=()=>current;return fn}if(k in t)return t[k];return(...args)=>{if(k==='heated')d.heat_requirement='heated';if(k==='superheated')d.heat_requirement='superheated';if(k==='processingTime')d.processing_time=args[0];if(k==='loops')d.loops=args[0];return obj}}});records.set(current,{id:current,recipe:d,scope,native,obj});return obj}
for(const [id,d]of Object.entries(input.native))recipe(d,true,id);
const event={originalRecipes:{values:()=>[...records.values()].filter(r=>r.native).map(r=>r.obj)},get addedRecipes(){return [...records.values()].filter(r=>!r.native).map(r=>r.obj)},custom:d=>recipe(d),
 shaped:(o,p,k)=>recipe({type:'minecraft:crafting_shaped',pattern:p,key:Object.fromEntries(Object.entries(k).map(([s,v])=>[s,ing(v)])),result:output(o)}),
 shapeless:(o,a)=>recipe({type:'minecraft:crafting_shapeless',ingredients:a.map(ing),result:output(o)}),
 remove:f=>{for(const r of records.values())if(matches({...r.recipe,_id:r.id},f))r.obj.removed=true},
 forEachRecipe:(f,fn)=>{for(const r of [...records.values()])if(!r.obj.removed&&matches({...r.recipe,_id:r.id},f))fn(r.obj)},replaceInput:()=>{},replaceOutput:()=>{},addRecipe:d=>recipe(d)};
for(const t of ['smelting','blasting','smoking','campfireCooking','stonecutting'])event[t]=(o,i,xp,time)=>recipe({type:'minecraft:'+t.replace('Cooking','_cooking'),ingredient:ing(i),result:output(o),experience:xp||0,cookingtime:time||200});
const noop=()=>{};const generic=new Proxy(function(){},{get:(_,k)=>k==='get'?()=>false:k==='toString'?()=>'' :generic,apply:()=>generic,construct:()=>({})});
class UnknownKubeRecipe {}
const items=new Set(input.items);const of=id=>({id:String(id),getMaxStackSize:()=>64,isEmpty:()=>false,toString:()=>String(id)});
const startEvent={created:[],create:(id)=>{id=String(id).includes(':')?String(id):'kubejs:'+id;items.add(id);startEvent.created.push({id});let proxy;proxy=new Proxy({id},{get:(t,k)=>k==='id'?id:k==='displayName'?value=>{startupNames[id]=String(value);return proxy}:()=>proxy});return proxy}};
const events=new Proxy({}, {get:(_,k)=>k==='recipes'?fn=>handlers.push({fn,scope}):noop});
const context=vm.createContext({console:{info:noop,warn:noop,error:noop,log:noop},JsonIO:{read:p=>JSON.parse(fs.readFileSync(base+'/'+p.replace(/^kubejs\//,''),'utf8')),readString:p=>fs.readFileSync(base+'/'+p.replace(/^kubejs\//,''),'utf8')},
 global:{TNK_CONTENT:input.content,TNK_BATCH_ITEMS:{id:(kind,name)=>'kubejs:prepared_'+kind+'/'+name}},
 Item:{exists:id=>items.has(String(id)),of,getList:()=>[],getTypeList:()=>[]},Ingredient:{of:s=>({itemIds:{toArray:()=>listIngredient(s),forEach:fn=>listIngredient(s).forEach(fn)},test:i=>listIngredient(s).includes(String(i.id||i)),isEmpty:()=>listIngredient(s).length===0})},Fluid:{of:(id,amount)=>({fluid:id,amount}),exists:()=>true},Block:{getTypeList:()=>[]},
 StartupEvents:{registry:(_type,fn)=>{try{fn(startEvent)}catch(e){errors.push({phase:'startup',scope,error:String(e)})}},postInit:noop},Platform:{isLoaded:m=>input.loaded.includes(String(m))},Java:{loadClass:name=>String(name).endsWith('UnknownKubeRecipe')?UnknownKubeRecipe:generic},ServerEvents:events,NativeEvents:{onEvent:noop},BlockEvents:new Proxy({},{get:()=>noop}),ItemEvents:new Proxy({},{get:()=>noop}),PlayerEvents:new Proxy({},{get:()=>noop}),EntityEvents:new Proxy({},{get:()=>noop}),IEEvents:new Proxy({},{get:()=>noop}),RecipeViewerEvents:new Proxy({},{get:()=>noop}),Utils:{id:x=>x},JavaMath:Math},{codeGeneration:{strings:false,wasm:false}});
for(const startupFile of ['01_items.js','02_blocks.js']){scope=startupFile;try{vm.runInContext(fs.readFileSync(base+'/startup_scripts/'+startupFile,'utf8'),context,{filename:scope,timeout:5000})}catch(e){errors.push({phase:'startup',scope,error:String(e)})}}
for(const file of input.files){scope=file;try{vm.runInContext(fs.readFileSync(base+'/server_scripts/'+file,'utf8'),context,{filename:file,timeout:5000})}catch(e){errors.push({phase:'load',scope,error:String(e)})}}
try{vm.runInContext('TNK_ADD_TAG_REPAIRS',context)(tagEvent,'item');for(const key of ['compatibility','rubber','oreForms','searchGroups'])vm.runInContext('TNK_TAGS.'+key,context)(tagEvent,'item');vm.runInContext('TNK_UNIFY.bindTags',context)(tagEvent)}catch(e){errors.push({phase:'tags',error:String(e)})}
// Recipe functions are helpers, not extra event subscribers. Calling them
// independently changes removal order and invents a second registration pass.
// The real handlers invoke them exactly once in their authored sequence.
const recipeFunctions=vm.runInContext('TNK_RECIPES',context);
for(const [key,fn]of Object.entries(recipeFunctions)){
 if(typeof fn!=='function')continue;
 recipeFunctions[key]=function(...args){
  const prior=scope;scope=key;functionCalls.push(key);
  try{
   if(key==='scrollAutomation'){
    runtimeFamilies.push({function:key,family:'spell-scroll-binding',reason:'Native spell registry selects enabled craftable spell levels at runtime.'});
    return;
   }
   return fn.apply(this,args);
  }finally{scope=prior}
 };
}
for(const h of handlers){scope=h.scope;handlerCalls.push(h.scope);try{h.fn(event)}catch(e){errors.push({phase:'handler',scope,error:String(e)})}}
if(errors.length){process.stderr.write(JSON.stringify({errors,functionCalls,handlerCalls}));process.exit(1)}
let result=[...records.values()].filter(r=>!r.native&&!r.obj.removed).map(r=>({id:r.id,recipe:r.recipe,scope:r.scope}));
process.stdout.write(JSON.stringify({records:result,errors,itemNames:startupNames,functionCalls,handlerCalls,runtimeFamilies}));
'''

sourcefiles=sorted((KUBE/'server_scripts').glob('*.js'))
hash_inputs=[Path(__file__),*sorted((KUBE/'startup_scripts').glob('*.js')),*sourcefiles,*sorted((KUBE/'pack_data').glob('*.json')),PACK/'manifest.json']
fingerprint=hashlib.sha256(b''.join(p.relative_to(ROOT).as_posix().encode()+p.read_bytes()for p in hash_inputs)).hexdigest()
cache=ROOT/'portal/scripts/recipe_capture.json'
if cache.exists()and read(cache).get('fingerprint')==fingerprint:
    capture=read(cache)
else:
    if not native_recipes:raise RuntimeError('Recipe sources changed: rebuild with the installed mod artifact cache before publishing.')
    items=set(read(PACK/'tools/registry_items.json'));items.update(names)if(PACK/'tools/registry_items.json').exists()else set()
    for p in [*sourcefiles,*list((KUBE/'startup_scripts').glob('*.js')),*list((KUBE/'pack_data').glob('*.json'))]:items.update(re.findall(r'[a-z][a-z0-9_]*:[a-z0-9_./-]+',p.read_text()))
    native_ids=set(native_recipes)
    for p in read(KUBE/'pack_data/compat_recipes.json')['plans']:
        for row in p['recipes']:
            for i in row.get('require_native',[]):native_recipes.setdefault(i,{'type':'tnk:opaque_native_reference'})
    payload={'kube':str(KUBE),'tags':native_tags,'native':native_recipes,'items':sorted(items),'content':read(KUBE/'pack_data/pack_catalog.json'),'loaded':sorted(loaded),'files':[p.name for p in sorted(sourcefiles,key=lambda p:-int((re.search(r'priority:\s*(-?\d+)',p.read_text())or[None,'0'])[1]))if p.name not in ['05_loot.js','06_tweaks_events.js']]}
    result=subprocess.run(['node','-e',NODE],input=json.dumps(payload),text=True,capture_output=True,check=False,timeout=90)
    if result.returncode:raise RuntimeError('Recipe capture failed: '+result.stderr)
    capture=json.loads(result.stdout);capture['fingerprint']=fingerprint
    cache.write_text(json.dumps(capture,ensure_ascii=False,separators=(',',':'))+'\n')
if capture.get('errors'):raise RuntimeError('Cached recipe capture contains extraction errors: '+json.dumps(capture['errors']))

names.update(capture.get('itemNames',{}))
rows={r['id']:dict(r,recipe_id=r['id'],tier=None)for r in capture['records']}
for row in read(KUBE/'pack_data/machine_recipes.json')['recipes']:
    if row['recipe_id']in rows:rows[row['recipe_id']].update(tier=row.get('tier'),output=row.get('output'))
for plan in read(KUBE/'pack_data/compat_recipes.json')['plans']:
    if plan.get('enabled',True):
        for row in plan['recipes']:
            if row['recipe_id']in rows:rows[row['recipe_id']].update(tier=row.get('tier'),output=row.get('output'))
for d in read(KUBE/'pack_data/endgame.json').get('crafting',[]):
    if d['id']in rows:rows[d['id']]={**rows[d['id']],'tier':9}

boss_config=read(PACK/'config/tnkloot/boss-rewards.json');progression=read(PACK/'config/tnkprogression.json')
# Boss drop provenance is an association, not a claim that a material has no
# alternative source. Common vanilla supplies are not presented as boss gates.
native_boss_drops={k:v for k,v in native_boss_drops.items()if not k.startswith('minecraft:')or k in {'minecraft:nether_star','minecraft:dragon_egg','minecraft:dragon_breath'}}
boss_materials={i['item']for pool in boss_config.get('pools',[])for i in pool.get('items',[])if isinstance(i,dict)and'item'in i}
boss_materials.update(native_boss_drops)
bosses=[]
for pool in boss_config.get('pools',[]):
    i=pool.get('entity',pool['id']);ns=i.split(':')[0]
    bosses.append({'id':i,'name':pool.get('name',human(i.split(':')[-1])),'mod':ns,'modName':mod_names.get(ns,human(ns)),'minimumLevel':progression.get('bossBaseLevels',{}).get(i),'classification':'Elite'if i in progression.get('minibosses',[])else'Boss','lootTier':pool.get('tier'),'rewards':pool.get('items',[])})
existing_bosses={b['id']for b in bosses}
for entity,level in progression.get('bossBaseLevels',{}).items():
    if entity in existing_bosses:continue
    ns=entity.split(':')[0]
    bosses.append({'id':entity,'name':human(entity.split(':')[-1]),'mod':ns,'modName':mod_names.get(ns,human(ns)),'minimumLevel':level,'classification':'Elite'if entity in progression.get('minibosses',[])else'Boss','lootTier':None,'rewards':[]})
recipes=[];production_rules=[];output_recipes=defaultdict(list)
for i,row in rows.items():
    d=row['recipe'];outs=recipe_outputs(d);out=outs[0]if outs else{}
    output=row.get('output')or out.get('id')or out.get('item')
    if not output:
        if d.get('type')not in ['immersiveengineering:mineral_mix','createaddition:liquid_burning']:
            raise RuntimeError('Recipe capture needs an output/process adapter for '+i+': '+d.get('type','unknown'))
        ns=d['type'].split(':')[0]
        production_rules.append({'id':i,'name':human(i.split('/')[-1]),'type':d['type'],'processName':human(d['type'].split(':')[-1]),'mod':ns,'modName':mod_names.get(ns,human(ns)),'recipe':d})
        continue
    tier=row.get('tier');chapter=tier+1 if isinstance(tier,int)and 1<=tier<=9 else None
    if chapter is None:
        m=re.search(r'chapter_(\d+)',i)
        if m:chapter=int(m[1]);tier=max(0,chapter-1)
    ins=ingredients(d)
    gates=[x for x in ins if x['id'].startswith('kubejs:')and any(k in x['id']for k in ['mechanism','machine','core'])]
    ns=output.split(':')[0]
    output_kind='fluid'if out.get('type')=='fluid_stack'or'amount'in out or'fluid'in out else'item'
    output_components=out.get('components',{});output_label=component_label(output_components)
    record={'id':i,'name':title(output)+(' · '+output_label if output_label else''),'output':output,'count':out.get('count',1),'outputKind':output_kind,'outputAmount':out.get('amount',out.get('count',1)),'outputComponents':output_components,'outputComponentLabel':output_label,'mod':ns,'modName':mod_names.get(ns,human(ns)),'type':d.get('type','minecraft:crafting_shaped'),'processName':human(d.get('type','minecraft:crafting_shaped').split(':')[-1]),'tier':tier,'chapter':chapter,'ingredients':ins,'gates':gates,'bossIngredients':[dict(x,dropSources=sorted(native_boss_drops.get(x['id'],set())),exclusive=False)for x in ins if x['id']in boss_materials],'outputs':[dict(o,name=title(o.get('id',o.get('item',''))),kind='fluid'if o.get('type')=='fluid_stack'or'amount'in o or'fluid'in o else'item',componentLabel=component_label(o.get('components',{})))for o in outs],'recipe':d}
    recipes.append(record);output_recipes[output].append(record)
    if chapter and 1<=chapter<=10:chapters[chapter-1]['milestones'].append({'id':output,'name':title(output)})
for chapter in chapters:
    unique={x['id']:x for x in chapter['milestones']};chapter['milestones']=list(unique.values())[:12]
    chapter['gates']=[{'id':chapter['mechanism'],'name':title(chapter['mechanism'])}]
dump('recipes',sorted(recipes,key=lambda r:(r['chapter']or 99,r['name'],r['id'])))
dump('production-rules',production_rules)
dump('chapters',chapters);dump('bosses',bosses)

presets={r['id']:r for r in read(PACK/'registry/weapon_presets.json')['types']}
providers={'epicfight':'Epic Fight','epicfight_dd':'Dawn Day','wom':'Weapons of Miracles','womplus':'WoM Plus','tnk':'TNK Custom'}
style_names={'florett':'Florett / Rapier','uchigatana':'Uchigatana / Katana','battlestaff_wood':'Wooden Battlestaff','battlestaff_amethyst':'Amethyst Battlestaff','iudex_halberd':'Iudex Halberd','evil_tachi':'Evil Odachi','evil_tachi_reift':'Evil Tachi Reift'}
tier1={'sword','longsword','greatsword','axe','dagger','bokken','spear','staff','battlestaff_wood','fist'}
tier2={'light_greatsword','messer','knife','saber','florett','uchigatana','tachi','greataxe','halberd','trident','battlestaff','iron_fist','hookclaws','herb_sickle','khopesh'}
tier3={'hollow_longsword','milady','backhand_blade','bonecutting_saw','nailbat','great_hammer','pole_blade','reaper_glaive','battlestaff_amethyst','war_sickle','double_greatsword'}
archetypes={'sword':'Balanced','longsword':'Balanced','greatsword':'Heavy','axe':'Heavy','dagger':'Fast','spear':'Polearm','staff':'Staff','fist':'Fist','shield':'Shield','trident':'Polearm','tachi':'Technical blade','uchigatana':'Technical blade','bokken':'Training blade'}
loottiers={w['item']:w.get('tier')for w in read(PACK/'config/tnkloot/tiers.json').get('weapons',[])if'item'in w}
weapons=[];styles={}
with(PACK/'registry/weapon_assignments.tsv').open()as f:
    for row in csv.DictReader(f,delimiter='\t'):
        item=row['item'];ns,path=item.split(':',1);style=row['type'];native=style=='NATIVE';short=style.split(':')[-1];preset=presets.get(style,{})
        cap_path=KUBE/'data'/ns/'capabilities/weapons'/(path+'.json');cap=read(cap_path)if cap_path.exists()else{}
        custom=KUBE/'data/tnk/capabilities/weapons/types'/(short+'.json')
        source=read(custom)if style.startswith('tnk:')and custom.exists()else{}
        category_id=source.get('category')or preset.get('category','').split('.')[-1].lower()
        if category_id in ['unspecified/default','']:category_id=short
        archetype=archetypes.get(category_id,'Polearm'if any(k in short for k in ['halberd','glaive','spear','pole_blade'])else'Fist'if any(k in short for k in ['fist','gauntlet','claw'])else'Staff'if'staff'in short else'Heavy'if any(k in short for k in ['hammer','colossal','greataxe','saw'])else'Blade')
        if 'staff' in short:archetype='Staff'
        elif short in {'backhand_blade','knife','florett','saber','blood_ritus_dagger','night_ritus_dagger'}:archetype='Fast'
        elif short in {'pole_blade','halberd','iudex_halberd','reaper_glaive'}:archetype='Polearm'
        elif short in {'milady','uchigatana','tachi','evil_tachi','evil_tachi_reift'}:archetype='Technical blade'
        elif short=='bokken':archetype='Training blade'
        elif short=='torment':archetype='Heavy'
        if native:
            archetype='Telekinetic focus'if item=='alexscaves:galena_gauntlet'else'Whip'if item=='simplyswords:emberlash'else'Throwing hammer'if item in {'simplyswords:frostfall','simplyswords:mjolnir'}else'Chakram'
        possible=([source['styles']['default']]+[c['style']for c in source['styles'].get('cases',[])])if source.get('styles')else preset.get('styles',[])
        grip='Native'if native else'Dual / single'if short=='double_greatsword'else'Two-handed'if'two_hand'in possible and'one_hand'not in possible else('One- or two-handed'if short in {'longsword','spear','messer'}else'One-handed / dual')if'one_hand'in possible and'two_hand'in possible else'One-handed'if'one_hand'in possible else'style-controlled'
        st=None if native else 1 if short in tier1 else 2 if short in tier2 else 3 if short in tier3 else 4
        matches=output_recipes.get(item,[]);pt=min((r['tier']for r in matches if isinstance(r['tier'],int)),default=None)
        name=row.get('name')or title(item)
        record={'id':item,'name':name,'mod':ns,'modName':mod_names.get(ns,human(ns)),'styleId':None if native else style,'styleName':'Native handling'if native else style_names.get(short,human(short)),'provider':mod_names.get(ns,human(ns))if native else providers.get(style.split(':')[0],human(style.split(':')[0])),'archetype':archetype,'grip':grip,'styleTier':st,'lootTier':loottiers.get(item),'productionTier':pt,'chapter':pt+1 if pt is not None else None,'attributes':cap.get('attributes',{}),'icon':'/media/weapons/'+ns+'/'+path+'.png','notes':''}
        if not(ROOT/'portal/public'/record['icon'].lstrip('/')).is_file():record['icon']=None
        weapons.append(record)
        if not native:styles[style]={'id':style,'name':record['styleName'],'provider':record['provider'],'archetype':archetype,'grip':grip,'tier':st,'count':0}
for weapon in weapons:
    if weapon['styleId']:styles[weapon['styleId']]['count']+=1
dump('weapons',weapons);dump('styles',list(styles.values()))
scroll_source=(KUBE/'server_scripts/04b_compat_automation.js').read_text()
match=re.search(r"let schools = (\[[^;]+\]);",scroll_source)
assert match,'Scroll automation schools must be declared explicitly'
schools=re.findall(r"'([^']+)'",match[1])
family={
'id':'spell-scroll-binding','name':'Spell Scroll Binding','mod':'irons_spellbooks','modName':mod_names.get('irons_spellbooks',"Iron's Spells & Spellbooks"),'processName':'Deploying',
'schools':[{'id':school,'name':human(school),'focusTag':'irons_spellbooks:'+school+'_focus','unfinished':'kubejs:unfinished_'+school+'_scroll'}for school in schools],
'inks':[{'id':'irons_spellbooks:'+rarity+'_ink','name':title('irons_spellbooks:'+rarity+'_ink')}for rarity in ['common','uncommon','rare','epic','legendary']],
'steps':[{'title':'Prepare the school scroll','text':'Deploy a school focus onto paper to make an unfinished scroll of that school.'},{'title':'Bind a spell with ink','text':'Deploy matching ink onto the unfinished scroll to bind a craftable spell. The ink selects the lowest available spell level of its rarity.'}],
'rules':['Both paper and the school focus are consumed when preparing an unfinished scroll.','Binding consumes the unfinished scroll and its ink.','Only enabled spells that allow crafting are included.','Spells that require player research retain their normal learning route.','Only the supported native spell schools are included.','For each ink rarity, the first spell level with that rarity is selected; spells without a level in that rarity have no binding for that ink.'],
'prepareIdPattern':'tnk:scroll_automation/prepare/{school}',
'bindIdPattern':'tnk:scroll_automation/bind/{spell_namespace}/{spell_path}/level_{level}/{ink_namespace}/{ink_path}',
'keepHeldItem':False}
assert "keep_held_item: false"in scroll_source and "if (spell.requiresLearning())"in scroll_source
assert "if (levels[rarity] === undefined) levels[rarity] = level"in scroll_source
dump('recipe-families',[family])
summary={'weapons':len(weapons),'styles':len(styles),'recipes':len(recipes),'production_rules':len(production_rules),'mods':len(mods),'chapters':len(chapters),'bosses':len(bosses),'captured_js_recipes':len(capture['records']),'capture_errors':capture.get('errors',[]),'recipe_handler_runs':len(capture.get('handlerCalls',[])),'recipe_function_calls':dict(Counter(capture.get('functionCalls',[]))),'runtime_recipe_families':capture.get('runtimeFamilies',[]),'ingredient_kinds':dict(Counter(i['kind']for r in recipes for i in r['ingredients'])),'fluid_output_recipes':sum(r['outputKind']=='fluid'for r in recipes),'weapon_icon_fallbacks':sum(w['icon']is None for w in weapons)}
(ROOT/'portal/scripts/import_validation.json').write_text(json.dumps(summary,indent=2)+'\n')
print(json.dumps({k:v for k,v in summary.items()if k!='capture_errors'}))
