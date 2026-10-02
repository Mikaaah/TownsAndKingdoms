import * as THREE from 'three';
import {OrbitControls} from 'three/addons/controls/OrbitControls.js';

const assetRoot=new URL('.',document.currentScript.src);
let library;
async function load(){
 if(!library)library=Promise.all([
  fetch(new URL('create-models.json',assetRoot)).then(r=>r.json()),
  fetch(new URL('item-art.json',assetRoot)).then(r=>r.json()),
  new THREE.TextureLoader().loadAsync(new URL('model-atlas.png',assetRoot).href),
  new THREE.TextureLoader().loadAsync(new URL('item-atlas.webp',assetRoot).href)
 ]).then(([data,art,texture,items])=>{
  for(const t of [texture,items]){t.magFilter=THREE.NearestFilter;t.minFilter=THREE.NearestFilter;t.colorSpace=THREE.SRGBColorSpace;}
  return {data,art,texture,items};
 });
 return library;
}
const corners=(f,t)=>{const[x,y,z]=f,[X,Y,Z]=t;return {
 north:[[X,Y,z],[x,Y,z],[x,y,z],[X,y,z]],south:[[x,Y,Z],[X,Y,Z],[X,y,Z],[x,y,Z]],
 east:[[X,Y,Z],[X,Y,z],[X,y,z],[X,y,Z]],west:[[x,Y,z],[x,Y,Z],[x,y,Z],[x,y,z]],
 up:[[x,Y,z],[X,Y,z],[X,Y,Z],[x,Y,Z]],down:[[x,y,Z],[X,y,Z],[X,y,z],[x,y,z]]};};
const shade={up:1,down:.6,north:.9,south:.9,east:.76,west:.76};
function nativeModel(id,lib){
 const d=lib.data.models[id];if(!d)return null;
 const group=new THREE.Group();
 for(const e of d.elements){
  const parts=new THREE.Group();
  for(const [side,face]of Object.entries(e.faces||{})){
   let name=face.texture;for(let i=0;i<20&&name.startsWith('#');i++)name=d.textures[name.slice(1)]||'';
   const a=lib.data.textures[name];if(!a)continue;
   const[x,y,z]=e.from,[X,Y,Z]=e.to;
   const defaults={north:[16-X,16-Y,16-x,16-y],south:[x,16-Y,X,16-y],east:[16-Z,16-Y,16-z,16-y],west:[z,16-Y,Z,16-y],up:[x,z,X,Z],down:[x,16-Z,X,16-z]};
   const[u,v,U,V]=face.uv||defaults[side];
   let uv=side==='up'||side==='down'?[[u,v],[U,v],[U,V],[u,V]]:[[U,v],[u,v],[u,V],[U,V]];
   for(let n=0;n<(face.rotation||0)/90;n++)uv.push(uv.shift());
   const geometry=new THREE.BufferGeometry();
   geometry.setAttribute('position',new THREE.Float32BufferAttribute(corners(e.from,e.to)[side].flatMap(p=>p.map(n=>n/16-.5)),3));
   geometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv.flatMap(([u,v])=>[(a.x+u*4)/lib.data.width,1-(a.y+v*4)/lib.data.height]),2));
   geometry.setIndex([0,1,2,0,2,3]);geometry.computeVertexNormals();
   const material=new THREE.MeshBasicMaterial({map:lib.texture,side:THREE.DoubleSide,alphaTest:.1,color:new THREE.Color().setScalar(shade[side])});
   parts.add(new THREE.Mesh(geometry,material));
  }
  if(e.rotation){const r=e.rotation,o=new THREE.Vector3(...r.origin.map(n=>n/16-.5));parts.position.copy(o);for(const mesh of parts.children)mesh.position.sub(o);parts.rotation[r.axis]=THREE.MathUtils.degToRad(r.angle);if(r.rescale){const factor=1/Math.cos(THREE.MathUtils.degToRad(r.angle));for(const ax of ['x','y','z'])if(ax!==r.axis)parts.scale[ax]=factor;}}
  group.add(parts);
 }
 return group;
}
function itemSprite(id,lib){
 id=String(id).replace(/^\d+x /,'');const a=lib.art.items[id];if(!a)return null;
 const t=lib.items.clone();t.repeat.set(64/lib.art.width,64/lib.art.height);t.offset.set(a.x/lib.art.width,1-(a.y+64)/lib.art.height);t.needsUpdate=true;
 const mesh=new THREE.Mesh(new THREE.PlaneGeometry(.65,.65),new THREE.MeshBasicMaterial({map:t,transparent:true,alphaTest:.05,side:THREE.DoubleSide}));
 return mesh;
}
const viewers=new WeakMap();
class Viewer{
 constructor(host,lib){
  this.host=host;this.lib=lib;this.scene=new THREE.Scene();
  this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:true});this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));this.renderer.outputColorSpace=THREE.SRGBColorSpace;
  this.renderer.domElement.setAttribute('aria-label','Interactive 3D view using original Create models and textures');this.renderer.domElement.setAttribute('role','img');
  host.replaceChildren(this.renderer.domElement);
  this.camera=new THREE.PerspectiveCamera(35,1,.1,100);
  this.controls=new OrbitControls(this.camera,this.renderer.domElement);this.controls.enablePan=false;this.controls.minDistance=3;this.controls.maxDistance=22;this.controls.maxPolarAngle=Math.PI*.49;
  this.controls.addEventListener('change',()=>this.render());
  this.observer=new ResizeObserver(()=>this.render());this.observer.observe(host);
 }
 render(){const w=this.host.clientWidth,h=this.host.clientHeight||310;if(!w)return;this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.renderer.render(this.scene,this.camera);}
 clear(){while(this.scene.children.length){const child=this.scene.children.pop();child.traverse(o=>{if(o.geometry)o.geometry.dispose();if(o.material){if(o.material.map&&o.material.map!==this.lib.texture&&o.material.map!==this.lib.items)o.material.map.dispose();o.material.dispose();}});}}
 put(id,x,y,z,rx=0,ry=0){const m=nativeModel(id,this.lib);if(!m)return null;m.position.set(x,y,z);m.rotation.set(rx,ry,0);this.scene.add(m);return m;}
 sprite(id,x,y,z){const s=itemSprite(id,this.lib);if(s){s.position.set(x,y,z);s.rotation.y=-.35;this.scene.add(s);}return s;}
 stage(recipe,step,current){
  this.clear();const kind=recipe.kind;
  if(kind==='sequence'||kind==='deploying'){
   const count=kind==='sequence'?recipe.inputs.length-1:1;
   for(let x=-1;x<=count*2-1;x++)this.put('create:block/belt/'+(x===-1?'start':x===count*2-1?'end':'middle'),x,0,0,0,Math.PI/2);
   for(let i=0;i<count;i++){const station=this.put('create:block/deployer/item',i*2,2,0,-Math.PI/2);if(station&&current===i+1){const edge=new THREE.BoxHelper(station,0xe4bf6c);this.scene.add(edge);} }
   const x=current===0?-1:step.mode==='output'?count*2-1:Math.max(0,current-1)*2;
   this.sprite(step.belt||recipe.output,x,.66,0);
   if(step.held)this.sprite(step.held,x,1.23,-.36);
  }else if(kind==='mixing'||kind==='compacting'){
   this.put('create:item/basin',0,0,0);this.put(kind==='mixing'?'create:item/mechanical_mixer':'create:item/mechanical_press',0,2,0);
   this.sprite(step.belt||recipe.output,0,.85,0);
  }else if(kind==='splashing'||kind==='haunting'){
   this.put('create:item/encased_fan',-2,0,0,0,Math.PI/2);this.put('create:item/depot',1,0,0);this.sprite(step.belt||recipe.output,1,.65,0);
  }else if(kind==='pressing'||kind==='cutting'||kind==='stonecutting'){
   const model=kind==='pressing'?'create:item/mechanical_press':kind==='cutting'?'create:item/mechanical_saw':'minecraft:item/stonecutter';this.put(model,0,kind==='pressing'?2:0,0);
   if(kind==='pressing')this.put('create:item/depot',0,0,0);this.sprite(step.belt||recipe.output,0,.8,0);
  }
  const box=new THREE.Box3().setFromObject(this.scene),center=box.getCenter(new THREE.Vector3()),size=box.getSize(new THREE.Vector3());
  this.controls.target.copy(center);const distance=Math.max(size.x,size.y,size.z)*2+2;
  this.camera.position.copy(center).add(new THREE.Vector3(distance*.6,distance*.42,distance*.78));this.controls.update();this.render();
 }
}
window.TK3CreateView={
 supports:kind=>['sequence','deploying','mixing','compacting','splashing','haunting','pressing','cutting','stonecutting'].includes(kind),
 async show(host,recipe,step,current){
  const revision=String(Date.now())+Math.random();host.dataset.revision=revision;
  try{const lib=await load();if(host.dataset.revision!==revision)return;let v=viewers.get(host);if(!v){v=new Viewer(host,lib);viewers.set(host,v);}v.stage(recipe,step,current);host.dataset.ready='true';}
  catch(e){host.dataset.ready='false';host.textContent='The 3D view is unavailable on this browser. Follow the item cards and numbered operations below.';}
 }
};
