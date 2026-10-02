from pathlib import Path
import json, urllib.request, urllib.parse, concurrent.futures, hashlib

ROOT = Path(__file__).resolve().parent / 'mod-assets'
ROOT.mkdir(exist_ok=True)
HEADERS = {'User-Agent': 'TownsAndKingdoms-Wiki/1.0 (documentation assets)'}

def get(url):
    return json.load(urllib.request.urlopen(urllib.request.Request(url, headers=HEADERS), timeout=45))

projects = {
 'minecraft': None, 'create': 'create', 'mekanism': 'mekanism',
 'sophisticatedstorage':'sophisticated-storage', 'sophisticatedbackpacks':'sophisticated-backpacks',
 'ars_nouveau':'ars-nouveau', 'irons_spellbooks':'irons-spells-n-spellbooks',
 'architects_palette':'architects-palette', 'biomesoplenty':'biomes-o-plenty',
 'biomeswevegone':'oh-the-biomes-weve-gone', 'twilightforest':'twilight-forest',
 'bloomingnature':'lets-do-bloomingnature', 'atmospheric':'atmospheric', 'environmental':'environmental',
 'quark':'quark', 'autumnity':'autumnity', 'upgrade_aquatic':'upgrade-aquatic',
 'betterend':'betterend-neoforge', 'betternether':'betternether-neoforge',
 'farmersdelight':'farmers-delight', 'createaddition':'createaddition',
 'create_enchantment_industry':'create-enchantment-industry', 'create_wizardry':'create-wizardry',
 'alexscaves':'alexs-caves', 'aeronautics':'create-aeronautics', 'cataclysm':'cataclysm',
 'ars_creo':'ars-creo', 'witchery':'witchery', 'iceandfire':'ice-and-fire-ce', 'ae2':'ae2'
}

def download(namespace, slug):
    dest=ROOT / (namespace+'.jar')
    infofile=ROOT / (namespace+'.source.json')
    if dest.exists() and infofile.exists(): return json.loads(infofile.read_text())
    try:
        if namespace=='minecraft':
            manifest=get('https://piston-meta.mojang.com/mc/game/version_manifest_v2.json')
            info=get(next(v['url'] for v in manifest['versions'] if v['id']=='1.21.1'))
            file=info['downloads']['client']
            record={'namespace':namespace,'version':'1.21.1','url':file['url'], 'source':'https://www.minecraft.net/', 'license':'Mojang / Microsoft Minecraft assets'}
        else:
            project=get('https://api.modrinth.com/v2/project/'+slug)
            if namespace=='create':
                v=get('https://api.modrinth.com/v2/version/UjX6dr61')
            else:
                query=urllib.parse.urlencode({'game_versions':json.dumps(['1.21.1']),'loaders':json.dumps(['neoforge'])})
                versions=get('https://api.modrinth.com/v2/project/'+project['id']+'/version?'+query)
                if not versions: raise ValueError('No 1.21.1 NeoForge release')
                v=next((v for v in versions if v['version_type']=='release'),versions[0])
            file=next((f for f in v['files'] if f['primary']),v['files'][0])
            record={'namespace':namespace,'version':v['version_number'],'source':'https://modrinth.com/mod/'+project['slug'], 'url':file['url'], 'license':project['license']['id']}
        existing=ROOT/'create-1.21.1-6.0.10.jar'
        if namespace=='create' and existing.exists(): dest.write_bytes(existing.read_bytes())
        else:
            with urllib.request.urlopen(urllib.request.Request(file['url'],headers=HEADERS),timeout=90) as r:
                dest.write_bytes(r.read())
        record['sha256']=hashlib.sha256(dest.read_bytes()).hexdigest()
        infofile.write_text(json.dumps(record,indent=2))
        print(namespace,record['version'],dest.stat().st_size,flush=True)
        return record
    except Exception as e:
        print(namespace,'UNAVAILABLE',str(e),flush=True)
        return {'namespace':namespace,'unavailable':str(e)}

with concurrent.futures.ThreadPoolExecutor(max_workers=5) as pool:
    records=list(pool.map(lambda entry:download(*entry),projects.items()))
(ROOT/'sources.json').write_text(json.dumps(records,indent=2))
