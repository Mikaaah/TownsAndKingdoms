"""Extract real 1.21.1 art and bake Minecraft JSON models into an icon atlas."""
from pathlib import Path
from zipfile import ZipFile
from io import BytesIO
import json, re, math, functools
import numpy as np
from PIL import Image

ROOT=Path(__file__).resolve().parent
OUT=ROOT/'visual-assets'; OUT.mkdir(exist_ok=True)
archives=[]
for p in sorted((ROOT/'mod-assets').glob('*.source.json')):
    jar=p.with_name(p.name.replace('.source.json','.jar'))
    if jar.exists(): archives.append(ZipFile(jar))
    if jar.exists():
        outer=ZipFile(jar)
        for nested in outer.namelist():
            if nested.startswith('META-INF/jarjar/') and nested.endswith('.jar'): archives.append(ZipFile(BytesIO(outer.read(nested))))
archives.append(ZipFile(ROOT.parent/'project_sources/02-kubejs.zip'))
files={}
for z in archives:
    for name in z.namelist():
        key=name.removeprefix('kubejs/')
        if key.startswith('assets/') and key.endswith(('.json','.png')):files[key]=(z,name)
# Current mechanism textures take precedence over the historical pack.
for p in (ROOT.parent/'build/TK3_Campaign/kubejs/assets').rglob('*.png'):
    files['assets/'+str(p.relative_to(ROOT.parent/'build/TK3_Campaign/kubejs/assets'))]=p

def raw(key):
    entry=files.get(key)
    if isinstance(entry,Path):return entry.read_bytes()
    if entry:return entry[0].read(entry[1])

def qualified(s): return s if ':' in s else 'minecraft:'+s
def location(s,kind,suffix):
    ns,p=qualified(s).split(':',1);return f'assets/{ns}/{kind}/{p}{suffix}'

@functools.lru_cache(None)
def model(name,depth=0):
    data=raw(location(name,'models','.json'))
    if not data or depth>20:return {}
    d=json.loads(data);parent=model(qualified(d['parent']),depth+1) if d.get('parent') else {}
    result={**parent,**d,'textures':{**parent.get('textures',{}),**d.get('textures',{})},'display':{**parent.get('display',{}),**d.get('display',{})}}
    return result

def resolve_tex(name,textures):
    for _ in range(20):
        if not name.startswith('#'):return qualified(name)
        name=textures.get(name[1:],'')
        if not name:return None

@functools.lru_cache(None)
def texture(name):
    if not name:return None
    data=raw(location(name,'textures','.png'))
    if not data:return None
    im=Image.open(BytesIO(data)).convert('RGBA')
    # Animation strips: use the first native square frame, never stretch the strip.
    if im.height>im.width:im=im.crop((0,0,im.width,im.width))
    return im

def rotation(axis,angle):
    c,s=math.cos(math.radians(angle)),math.sin(math.radians(angle))
    if axis=='x':return np.array([[1,0,0],[0,c,-s],[0,s,c]])
    if axis=='y':return np.array([[c,0,s],[0,1,0],[-s,0,c]])
    return np.array([[c,-s,0],[s,c,0],[0,0,1]])

def faces(d):
    for element in d.get('elements',[]):
        x,y,z=element['from'];X,Y,Z=element['to']
        corners={'north':[[X,Y,z],[x,Y,z],[x,y,z],[X,y,z]],'south':[[x,Y,Z],[X,Y,Z],[X,y,Z],[x,y,Z]],'east':[[X,Y,Z],[X,Y,z],[X,y,z],[X,y,Z]],'west':[[x,Y,z],[x,Y,Z],[x,y,Z],[x,y,z]],'up':[[x,Y,z],[X,Y,z],[X,Y,Z],[x,Y,Z]],'down':[[x,y,Z],[X,y,Z],[X,y,z],[x,y,z]]}
        default={'north':[16-X,16-Y,16-x,16-y],'south':[x,16-Y,X,16-y],'east':[16-Z,16-Y,16-z,16-y],'west':[z,16-Y,Z,16-y],'up':[x,z,X,Z],'down':[x,16-Z,X,16-z]}
        for side,f in element.get('faces',{}).items():
            t=resolve_tex(f['texture'],d.get('textures',{})); im=texture(t)
            if im is None:continue
            points=np.array(corners[side],dtype=float)
            r=element.get('rotation')
            if r:
                origin=np.array(r['origin']);points=(points-origin)@rotation(r['axis'],r['angle']).T+origin
            uv=f.get('uv',default[side]);u,v,U,V=uv
            coords=np.array([[U,v],[u,v],[u,V],[U,V]])/16
            if side in ['up','down']:coords=np.array([[u,v],[U,v],[U,V],[u,V]])/16
            coords=np.roll(coords,-f.get('rotation',0)//90,axis=0)
            yield points,coords,t,side,f.get('tintindex')

def icon(d):
    elements=list(faces(d))
    if not elements:
        layers=[]
        for k,t in sorted(d.get('textures',{}).items()):
            if k.startswith('layer'):
                im=texture(resolve_tex(t,d['textures']))
                if im:layers.append(im)
        if not layers:return None
        result=Image.new('RGBA',(64,64))
        for im in layers:result.alpha_composite(im.resize((56,56),Image.Resampling.NEAREST),(4,4))
        return result
    angle=rotation('y',-45)@rotation('x',0)
    forward=np.array([1,.82,-1]);forward/=np.linalg.norm(forward)
    right=np.cross(forward,[0,1,0]);right/=np.linalg.norm(right)
    up=np.cross(right,forward)
    projection=np.stack([right,-up,forward],axis=0)
    allpoints=np.concatenate([p for p,_,_,_,_ in elements])@projection.T
    lo=allpoints[:,:2].min(0);hi=allpoints[:,:2].max(0);scale=54/max(hi-lo)
    center=(lo+hi)/2
    pixels=np.zeros((64,64,4),dtype=np.uint8);zbuffer=np.full((64,64),-np.inf)
    light={'up':1.,'down':.58,'north':.88,'south':.88,'east':.72,'west':.72}
    for p,uv,t,side,tint in elements:
        pp=p@projection.T;pp[:,:2]=(pp[:,:2]-center)*scale+32
        tex=np.array(texture(t));h,w=tex.shape[:2]
        for tri in [[0,1,2],[0,2,3]]:
            q=pp[tri];u=uv[tri]
            a,b,c=q[:,:2]
            den=(b[1]-c[1])*(a[0]-c[0])+(c[0]-b[0])*(a[1]-c[1])
            if abs(den)<1e-5:continue
            xmin=max(0,int(q[:,0].min()));xmax=min(63,int(math.ceil(q[:,0].max())))
            ymin=max(0,int(q[:,1].min()));ymax=min(63,int(math.ceil(q[:,1].max())))
            if xmin>xmax or ymin>ymax:continue
            xx,yy=np.meshgrid(np.arange(xmin,xmax+1)+.5,np.arange(ymin,ymax+1)+.5)
            wa=((b[1]-c[1])*(xx-c[0])+(c[0]-b[0])*(yy-c[1]))/den
            wb=((c[1]-a[1])*(xx-c[0])+(a[0]-c[0])*(yy-c[1]))/den;wc=1-wa-wb
            depth=wa*q[0,2]+wb*q[1,2]+wc*q[2,2]
            uu=wa*u[0,0]+wb*u[1,0]+wc*u[2,0];vv=wa*u[0,1]+wb*u[1,1]+wc*u[2,1]
            colors=tex[np.clip((vv*h).astype(int),0,h-1),np.clip((uu*w).astype(int),0,w-1)].copy()
            colors[:,:,:3]=(colors[:,:,:3]*light[side]).astype(np.uint8)
            if tint is not None:colors[:,:,:3]=(colors[:,:,:3]*np.array([.55,.8,.38])).astype(np.uint8)
            mask=(wa>=-.001)&(wb>=-.001)&(wc>=-.001)&(colors[:,:,3]>80)&(depth>=zbuffer[ymin:ymax+1,xmin:xmax+1])
            pixels[ymin:ymax+1,xmin:xmax+1][mask]=colors[mask]
            zbuffer[ymin:ymax+1,xmin:xmax+1][mask]=depth[mask]
    return Image.fromarray(pixels)

manifest=json.loads((ROOT.parent/'build/TK3_Campaign/docs/progression_manifest.json').read_text())
ids=set()
def collect(value):
    if isinstance(value,str) and ':' in value:
        ids.add(re.sub(r'^\d+x ','',value))
    elif isinstance(value,dict):
        for v in value.values():collect(v)
    elif isinstance(value,list):
        for v in value:collect(v)
for r in manifest['recipes']:
    if r['tier']<=10:
        collect(r['output']);collect(r['inputs']);collect(r.get('transition'))
ids.update(['create:portable_storage_interface','create:mechanical_harvester','create:mechanical_saw','create:mechanical_bearing','create:deployer','minecraft:oak_sapling','minecraft:water_bucket','minecraft:stonecutter','minecraft:chest','sophisticatedstorage:hopper_upgrade','minecraft:hopper','minecraft:oak_planks','minecraft:oak_slab'])
custom_models={}
custom_textures={}
for script in (ROOT.parent/'build/TK3_Campaign/kubejs/startup_scripts').glob('*.js'):
    text=script.read_text()
    for name,parent in re.findall(r'event\.create\([\"\']([^\"\']+)[\"\']\).*?\.parentModel\([\"\']([^\"\']+)[\"\']\)',text):custom_models['kubejs:'+name]=parent
    for name,tex in re.findall(r'event\.create\([\"\']([^\"\']+)[\"\']\).*?\.texture\([\"\']([^\"\']+)[\"\']\)',text):custom_textures['kubejs:'+name]=tex
ids.update(custom_models);ids.update(custom_textures)
tags={'#c:stripped_logs':'minecraft:stripped_oak_log','#minecraft:wool':'minecraft:white_wool','#c:plates/iron':'create:iron_sheet','#c:flours/wheat':'create:wheat_flour','#minecraft:wooden_slabs':'minecraft:oak_slab','#minecraft:planks':'minecraft:oak_planks','#minecraft:logs':'minecraft:oak_log','#minecraft:logs_that_burn':'minecraft:oak_log'}
sprites=[];lookup={};missing=[]
for id in sorted(ids):
    ns,p=tags.get(id,id).split(':',1)
    if id.startswith('#') and id not in tags:continue
    if id in custom_models:result=icon(model(custom_models[id]))
    elif id in custom_textures:
        im=texture(custom_textures[id]);result=None
        if im:
            result=Image.new('RGBA',(64,64));result.alpha_composite(im.resize((56,56),Image.Resampling.NEAREST),(4,4))
    elif ns=='kubejs' and p.startswith('tk3_'):
        p={'tk3_rotation_mechanism':'rotation_mechanism','tk3_incomplete_rotation_mechanism':'incomplete_rotation_mechanism','tk3_sealed_mechanism':'sealed_mechanism','tk3_incomplete_sealed_mechanism':'incomplete_sealed_mechanism','tk3_arcane_mechanism':'locomotive_mechanism','tk3_incomplete_arcane_mechanism':'incomplete_locomotive_mechanism'}.get(p,p)
        im=texture(ns+':item/'+p)
        result=im.resize((56,56),Image.Resampling.NEAREST) if im else None
        if result:
            canvas=Image.new('RGBA',(64,64));canvas.alpha_composite(result,(4,4));result=canvas
    else:result=icon(model(ns+':item/'+p))
    if result is None:missing.append(id);continue
    lookup[id]={'x':len(sprites)%16*64,'y':len(sprites)//16*64}
    sprites.append(result)
atlas=Image.new('RGBA',(1024,math.ceil(len(sprites)/16)*64))
for i,im in enumerate(sprites):atlas.alpha_composite(im,(i%16*64,i//16*64))
atlas.save(OUT/'item-atlas.webp',lossless=True,method=6)
languages={}
for ns in {i.lstrip('#').split(':')[0] for i in ids}:
    data=raw(f'assets/{ns}/lang/en_us.json')
    if data:
        try:languages.update(json.loads(data))
        except Exception:pass
names={id:languages.get('item.'+id.replace(':','.'),languages.get('block.'+id.replace(':','.'))) for id in lookup}
names={k:v for k,v in names.items() if v}
names.update({'kubejs:tk3_kinetic_machine':'Kinetic Machine','kubejs:tk3_hydraulic_machine':'Hydraulic Machine','kubejs:tk3_precision_machine':'Precision Machine','kubejs:tk3_arcane_machine':'Arcane Machine','kubejs:tk3_rotation_mechanism':'Kinetic Mechanism'})
(OUT/'item-art.json').write_text(json.dumps({'width':atlas.width,'height':atlas.height,'tile':64,'items':lookup,'names':names},separators=(',',':')))

# The viewer uses actual resolved model elements, not approximated cuboids.
requested=['create:block/deployer/item','create:block/deployer/vertical','create:block/deployer/pole','create:block/deployer/hand_holding','create:block/belt/start','create:block/belt/middle','create:block/belt/end','create:item/shaft','create:item/depot','create:item/basin','create:item/mechanical_mixer','create:item/mechanical_press','create:item/encased_fan','create:item/mechanical_harvester','create:item/mechanical_saw','create:item/mechanical_bearing','create:item/portable_storage_interface','minecraft:item/stonecutter']
requested+=list(set(custom_models.values()))
models={}; textures=set()
for id in requested:
    d=model(id)
    if not d.get('elements'):continue
    d={k:d[k] for k in ['elements','textures','display'] if k in d}
    for k,t in list(d['textures'].items()):
        resolved=resolve_tex(t,d['textures'])
        if resolved:d['textures'][k]=resolved
    for _,_,t,_,_ in faces(d):textures.add(t)
    models[id]=d
blockatlas=Image.new('RGBA',(512,math.ceil(len(textures)/8)*64));texlookup={}
for i,id in enumerate(sorted(textures)):
    im=texture(id);blockatlas.alpha_composite(im.resize((64,64),Image.Resampling.NEAREST),(i%8*64,i//8*64))
    texlookup[id]={'x':i%8*64,'y':i//8*64}
blockatlas.save(OUT/'model-atlas.png',optimize=True)
(OUT/'create-models.json').write_text(json.dumps({'models':models,'textures':texlookup,'width':blockatlas.width,'height':blockatlas.height},separators=(',',':')))
sources=json.loads((ROOT/'mod-assets/sources.json').read_text())
(OUT/'asset-sources.json').write_text(json.dumps({'sources':sources,'icon_count':len(lookup),'missing_icons':missing,'create_model_count':len(models)},indent=2))
print('REAL ICONS',len(lookup),'UNAVAILABLE',len(missing),'CREATE MODELS',len(models),'BLOCK TEXTURES',len(textures))
