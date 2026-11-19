#!/usr/bin/env python3
"""Import authored Ponder staging and Minecraft structures for the web player."""
from pathlib import Path
from zipfile import ZipFile
from collections import Counter
import gzip, struct, json, hashlib, re, os

PORTAL = Path(__file__).resolve().parents[1]
REPO = PORTAL.parent
PACK = REPO / 'TK3/kubejs'
PUBLIC = PORTAL / 'public'
DATA = PORTAL / 'src/data'
OUT = PUBLIC / 'data/ponder'
CACHE = DATA / 'ponder-models.json'
ASSET_INDEX = REPO / 'TK3/registry/ponder_assets.json'
JAR_ROOT = Path(os.environ.get('TNK_MOD_JARS', '/workspace/scratch/215bde0761fb/github_weapon_overview/icon_sources'))

def dump(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, ensure_ascii=False, separators=(',', ':')) + '\n')

class NBT:
    def __init__(self, data):
        self.data = gzip.decompress(data) if data[:2] == b'\x1f\x8b' else data
        self.pos = 0
    def read(self, fmt):
        size = struct.calcsize('>' + fmt)
        result = struct.unpack_from('>' + fmt, self.data, self.pos)
        self.pos += size
        return result[0] if len(result) == 1 else result
    def string(self):
        size = self.read('H'); result = self.data[self.pos:self.pos+size].decode('utf-8'); self.pos += size
        return result
    def tag(self, kind):
        if kind in range(1, 7): return self.read({1:'b',2:'h',3:'i',4:'q',5:'f',6:'d'}[kind])
        if kind == 7:
            size=self.read('i'); result=list(self.data[self.pos:self.pos+size]); self.pos+=size; return result
        if kind == 8: return self.string()
        if kind == 9:
            child=self.read('B'); count=self.read('i'); return [self.tag(child) for _ in range(count)]
        if kind == 10:
            result={}
            while True:
                child=self.read('B')
                if not child: break
                name=self.string(); result[name]=self.tag(child)
            return result
        if kind in (11,12): return [self.read('i' if kind == 11 else 'q') for _ in range(self.read('i'))]
        raise ValueError('Unsupported NBT tag '+str(kind))
    def root(self):
        kind=self.read('B'); self.string(); return self.tag(kind)

class Assets:
    def __init__(self):
        self.jars=[]; self.lang={}; self.paths={}
        saved=json.loads(ASSET_INDEX.read_text())if ASSET_INDEX.exists()else {}
        self.saved_names=saved.get('names',{});self.names_used=dict(self.saved_names)
        for jar in sorted(JAR_ROOT.glob('*.jar')):
            try:
                z=ZipFile(jar); self.jars.append(z)
                for p in z.namelist():
                    if p.startswith('assets/'):
                        self.paths[p]=z
                        if p.endswith('/lang/en_us.json'):
                            try: self.lang.update(json.loads(z.read(p)))
                            except Exception: pass
            except Exception: pass
        for p in (PACK/'assets').glob('*/lang/en_us.json'):
            try: self.lang.update(json.loads(p.read_text()))
            except Exception: pass
        self.texture_urls={}if self.jars else saved.get('textures',{})
        self.model_cache={}; self.icon_cache={}if self.jars else saved.get('icons',{})
    def bytes(self, p):
        local=PACK/p
        if local.exists(): return local.read_bytes()
        if p in self.paths: return self.paths[p].read(p)
        return None
    def document(self, p):
        b=self.bytes(p)
        if not b: return {}
        try: return json.loads(b)
        except Exception: return {}
    def name(self, item):
        item=re.sub(r'^\d+x?\s+', '', str(item)); ns,_,p=item.partition(':')
        if ':'not in item:return item.replace('_',' ').title()
        value=self.lang.get('block.'+ns+'.'+p.replace('/','.'), self.lang.get('item.'+ns+'.'+p.replace('/','.'), self.saved_names.get(item,p.replace('_',' ').replace('/',' ').title())))
        self.names_used[item]=value;return value
    def texture(self, identifier):
        if not identifier or identifier.startswith('#'): return None
        if identifier in self.texture_urls: return self.texture_urls[identifier]
        ns,_,p=identifier.partition(':')
        if not p: ns,p='minecraft',ns
        source=f'assets/{ns}/textures/{p}.png'; b=self.bytes(source)
        if not b: self.texture_urls[identifier]=None; return None
        relative='media/ponder/textures/'+ns+'/'+p+'.png'; target=PUBLIC/relative
        target.parent.mkdir(parents=True,exist_ok=True); target.write_bytes(b)
        meta=self.document(source+'.mcmeta'); result={'url':relative}
        if 'animation' in meta: result['animated']=True
        self.texture_urls[identifier]=result
        return result
    def model(self, identifier, depth=0):
        if identifier in self.model_cache: return self.model_cache[identifier]
        if depth>15: return {}
        ns,_,p=identifier.partition(':')
        if not p: ns,p='minecraft',ns
        own=self.document(f'assets/{ns}/models/{p}.json')
        parent=self.model(own['parent'],depth+1) if own.get('parent') else {}
        result={**parent,**own,'textures':{**parent.get('textures',{}),**own.get('textures',{})}}
        self.model_cache[identifier]=result
        return result
    def resolve(self, value, textures):
        for _ in range(20):
            if not value or not value.startswith('#'): return value
            value=textures.get(value[1:])
        return None
    def icon(self, identifier):
        identifier=re.sub(r'^\d+x?\s+','',str(identifier))
        if identifier in self.icon_cache: return self.icon_cache[identifier]
        if ':'not in identifier: return None
        ns,p=identifier.split(':',1)
        model=self.model(f'{ns}:item/{p}')
        texture=model.get('textures',{}).get('layer0')
        texture=self.resolve(texture,model.get('textures',{}))
        for candidate in [texture,f'{ns}:item/{p}',f'{ns}:block/{p}']:
            result=self.texture(candidate)
            if result: self.icon_cache[identifier]=result; return result
        self.icon_cache[identifier]=None; return None

def obj_parts(assets, model):
    identifier=model.get('model','')
    if not identifier.endswith('.obj'): return []
    ns,_,p=identifier.partition(':')
    if not p: ns,p='minecraft',ns
    data=assets.bytes(f'assets/{ns}/{p}')
    if not data: return []
    lines=data.decode(errors='replace').splitlines();vertices=[];uvs=[];groups={};current=''
    materials={};textures=model.get('textures',{})
    for line in lines:
        words=line.split()
        if words and words[0]=='mtllib':
            material_data=assets.bytes(f'assets/{ns}/'+str(Path(p).parent/words[1]))
            if material_data:
                name=''
                for mline in material_data.decode(errors='replace').splitlines():
                    fields=mline.split()
                    if fields and fields[0]=='newmtl':name=fields[1]
                    elif fields and fields[0]=='map_Kd':materials[name]=assets.texture(assets.resolve(fields[-1],textures))
        elif words and words[0]=='v': vertices.append(list(map(float,words[1:4])))
        elif words and words[0]=='vt':uvs.append(list(map(float,words[1:3])))
        elif words and words[0]=='usemtl':current=words[1]
        elif words and words[0]=='f':
            points=[word.split('/')for word in words[1:]]
            group=groups.setdefault(current,{'vertices':[],'uvs':[]})
            for i in range(1,len(points)-1):
                for point in [points[0],points[i],points[i+1]]:
                    index=int(point[0]);group['vertices'].extend(vertices[index-1 if index>0 else index])
                    uv=uvs[int(point[1])-1]if len(point)>1 and point[1]else [0,0]
                    group['uvs'].extend([uv[0],1-uv[1]if model.get('flip_v')else uv[1]])
    return [{**data,'texture':materials.get(name)}for name,data in groups.items()]

def matches(when, props):
    if not when: return True
    if 'OR'in when: return any(matches(w,props)for w in when['OR'])
    if 'AND'in when: return all(matches(w,props)for w in when['AND'])
    return all(str(props.get(k,''))in str(v).split('|')for k,v in when.items())

def block_models(state, assets):
    ns,p=state['Name'].split(':',1); props=state.get('Properties',{})
    doc=assets.document(f'assets/{ns}/blockstates/{p}.json'); selected=[]
    for variant,model in doc.get('variants',{}).items():
        clauses=dict(v.split('=',1)for v in variant.split(',')if '='in v)
        if matches(clauses,props): selected.append(model[0]if isinstance(model,list)else model); break
    for part in doc.get('multipart',[]):
        if matches(part.get('when'),props):
            model=part.get('apply',{}); selected.append(model[0]if isinstance(model,list)else model)
    if not selected: selected=[{'model':f'{ns}:block/{p}'}]
    output=[]
    for selection in selected:
        doc=assets.model(selection.get('model','')); textures=doc.get('textures',{})
        elements=doc.get('elements',[]); obj=obj_parts(assets,doc)
        if not elements and not obj:
            default=next((assets.resolve(v,textures)for k,v in textures.items()if k!='particle'and assets.resolve(v,textures)),None)
            if not default: default=assets.resolve(textures.get('particle'),textures)
            faces={side:{'texture':textures.get(side,default),'uv':[0,0,16,16]}for side in ['east','west','up','down','south','north']}
            elements=[{'from':[0,0,0],'to':[16,16,16],'faces':faces}]
        parts=[]
        for e in elements[:96]:
            faces={}
            for face,v in e.get('faces',{}).items():
                texture=assets.texture(assets.resolve(v.get('texture'),textures))
                faces[face]={'texture':texture,'uv':v.get('uv',[0,0,16,16]),'rotation':v.get('rotation',0)}
            parts.append({'from':e['from'],'to':e['to'],'faces':faces,**({'rotation':e['rotation']}if'rotation'in e else {})})
        output.append({'parts':parts,'obj':obj,'x':selection.get('x',0),'y':selection.get('y',0)})
    return output

def main():
    source=json.loads((PACK/'pack_data/ponder.json').read_text());assets=Assets()
    cache=json.loads(CACHE.read_text())if CACHE.exists()else {}
    categories=source.get('categories',[]);category_items={c['id']:set(c.get('items',[]))for c in categories}
    scenes=[];counts=Counter();native_types=set();all_states={}
    for source_scene in source['scenes']:
        slug=source_scene['id'].split(':',1)[1];ns,structure=source_scene['structure'].split(':',1)
        nbt=PACK/f'assets/{ns}/ponder/{structure}.nbt'
        if not nbt.exists(): raise FileNotFoundError(nbt)
        structure_data=NBT(nbt.read_bytes()).root();palette=structure_data.get('palette',[])
        blocks=[]
        for block in structure_data.get('blocks',[]):
            state=palette[block['state']]
            if state['Name']in ['minecraft:air','minecraft:cave_air','minecraft:void_air']:continue
            key=state['Name']+'|'+','.join(k+'='+str(v)for k,v in sorted(state.get('Properties',{}).items()))
            all_states[key]=state;blocks.append({'pos':block['pos'],'state':key})
        steps=[]
        for number,step in enumerate(source_scene.get('steps',[])):
            text=assets.lang.get(step.get('textKey',''), '')
            text=re.sub(r'§.','',text)
            text=text.replace('The beta radius','The protection radius').replace('This beta blocks','Protection blocks').replace(' in this beta','')
            text=text.replace('The formed model is now shown.','After forming the multiblock, connect its service ports.')
            text=text.replace('This is the formed Excavator with its separately formed Bucket Wheel.','Assemble and form the Excavator and Bucket Wheel separately.')
            text=text.replace('The exhaust and furnace model are now active.','Use the highlighted fuel, input and output connections.')
            text=text.replace('Inspect the displayed enchanting stats.','Check the enchanting table’s stats after adding shelves.')
            text=text.replace('This preview uses its real Text projection mode.','Choose Text mode to display a message.')
            if not text: text=' → '.join(assets.name(step[k])for k in ['input','output']if step.get(k))
            input_id=re.sub(r'^\d+x?\s+','',str(step.get('input','')))
            output_id=re.sub(r'^\d+x?\s+','',str(step.get('output','')))
            steps.append({**step,'title':assets.name(step.get('output')or step.get('input')or step.get('machine','Step')),
                'text':text,'duration':max(20,step.get('duration',85)),
                'inputName':assets.name(input_id),'outputName':assets.name(output_id),
                'inputIcon':assets.icon(input_id),'outputIcon':assets.icon(output_id)})
        anchors=source_scene.get('anchors',[])
        category=max(category_items,key=lambda c:len(set(anchors)&category_items[c]))if categories else 'tnk:workshop'
        title=assets.lang.get('tnk.ponder.'+slug+'.header',source_scene['title'])
        if slug in {'crusher_build_04','excavator_build_04','arc_furnace_build_04'}:
            title={'crusher_build_04':'Crusher','excavator_build_04':'Excavator','arc_furnace_build_04':'Arc Furnace'}[slug]+': service connections'
        item={'id':source_scene['id'],'slug':slug,'title':title,'description':steps[0]['text']if steps else '',
              'category':category,'anchors':anchors,'items':source_scene.get('items',[]),'steps':steps,
              'blockIds':sorted({block['state'].split('|',1)[0] for block in blocks}),
              'dataUrl':f'data/ponder/{slug}.json'}
        scenes.append(item)
        staged=[]
        for field,kind in [('crafterItems','crafter'),('depotItems','depot')]:
            for entry in source_scene.get(field,[]):
                staged.append({**entry,'kind':kind,'name':assets.name(entry['item']),'icon':assets.icon(entry['item'])})
        dump(OUT/(slug+'.json'),{**item,'blocks':blocks,'size':structure_data.get('size'),
             'centre':source_scene.get('centre'),'camera':source_scene.get('camera',0.65),
             'yaw':source_scene.get('yaw',145),'layout':source_scene.get('layout'),
             'stagedItems':staged,'craftOutput':source_scene.get('craftOutput'),
             'multiblocks':source_scene.get('multiblocks',[]),'formInitially':source_scene.get('formInitially',False)})
        counts['blocks']+=len(blocks);counts['steps']+=len(steps)
    for key,state in all_states.items():
        native_types.add(state['Name'])
        if assets.jars or key not in cache:
            cache[key]={'id':state['Name'],'name':assets.name(state['Name']),'properties':state.get('Properties',{}),'models':block_models(state,assets)}
    dump(CACHE,cache);dump(OUT/'models.json',cache)
    dump(ASSET_INDEX,{'names':assets.names_used,'icons':assets.icon_cache,'textures':assets.texture_urls})
    dump(DATA/'ponder.json',{'scenes':scenes,'categories':[{k:v for k,v in c.items()if k!='items'}for c in categories]})
    print(json.dumps({'scenes':len(scenes),'steps':counts['steps'],'blocks':counts['blocks'],'native_block_types':len(native_types),'model_states':len(all_states),'textures':len([v for v in assets.texture_urls.values()if v])}))

if __name__=='__main__':main()
