import { assetUrl, isReferenceStep, matchesScene, fitCameraSpan, multiblockPoints } from './ponder-core.mjs';

const faceNames = ['east', 'west', 'up', 'down', 'south', 'north'];
const decodeItem = value => String(value || '').replace(/^\d+x?\s+/, '');

export function initPonders() {
  document.querySelectorAll('[data-ponder]').forEach(root => {
    if (root.dataset.ready) return;
    root.dataset.ready = 'true';
    mount(root).catch(error => {
      console.error('Scene player:', error);
      root.querySelector('[data-ponder-status]').textContent = 'Use the step controls to explore this process.';
    });
  });
}

async function mount(root) {
  const base = root.dataset.base || '/';
  const absolute = value => assetUrl(base, value);
  const choices = JSON.parse(root.dataset.scenes || '[]');
  const select = root.querySelector('[data-ponder-select]');
  const filter = root.querySelector('[data-ponder-filter]');
  const filterStatus = root.querySelector('[data-ponder-filter-status]');
  const status = root.querySelector('[data-ponder-status]');
  const scrub = root.querySelector('[data-ponder-scrub]');
  const playButton = root.querySelector('[data-ponder-play]');
  const previous = root.querySelector('[data-ponder-prev]');
  const next = root.querySelector('[data-ponder-next]');
  const stepList = root.querySelector('[data-ponder-step-list]');
  const canvasRoot = root.querySelector('[data-ponder-canvas]');
  const hover = root.querySelector('[data-ponder-hover]');
  const focusLabel = root.querySelector('[data-ponder-focus]');
  const reducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  let current = null, elapsed = 0, playing = false, lastTime = 0, activeStep = -1, ticket = 0;
  let three = null, renderer = null, camera = null, controls = null, world = null, scene3d = null, bounds = null;
  let modelBank = null, hoverBox = null, focusBox = null, itemSprite = null, referenceSprite = null, fluidEffect = null;
  let meshes = [], frame = 0, itemKey = '', lastProgress = -1, init3dPromise = null;
  let threeUnavailable = false;
  const textures = new Map(), materials = new Map(), worlds = new Map();
  const getWorld = slug => {
    if (!worlds.has(slug)) worlds.set(slug, fetch(absolute('data/ponder/'+slug+'.json'))
      .then(r => { if (!r.ok) throw Error('Scene not found'); return r.json(); })
      .catch(error => { worlds.delete(slug); throw error; }));
    return worlds.get(slug);
  };

  function setPlaying(value) {
    playing = value;
    playButton.textContent = playing ? 'Pause' : 'Play';
    playButton.setAttribute('aria-label', playing ? 'Pause scene' : 'Play scene');
    lastTime = 0;
    requestRender();
  }
  function duration() { return current?.steps.reduce((total, step) => total + step.duration / 20, 0) || 1; }
  function stepAt(time) {
    let start = 0;
    for (let i = 0; i < (current?.steps.length || 0); i++) {
      const length = current.steps[i].duration / 20;
      if (time < start+length || i === current.steps.length-1) return { index:i, start, length, progress: Math.min(1, Math.max(0,(time-start)/length)) };
      start += length;
    }
    return { index:0,start:0,length:1,progress:0 };
  }
  function goStep(index) {
    if (!current) return;
    const bounded = Math.max(0, Math.min(current.steps.length-1,index));
    elapsed = current.steps.slice(0,bounded).reduce((sum,s) => sum+s.duration/20,0);
    setPlaying(false); update(); requestRender();
  }
  function itemChip(name, icon, raw) {
    const chip = document.createElement('span'); chip.className = 'ponder-item';
    if (icon?.url) { const image = new Image(); image.src = absolute(icon.url); image.alt = ''; image.loading = 'lazy'; chip.append(image); }
    const label = document.createElement('span'); label.textContent = name || decodeItem(raw); chip.append(label);
    if (raw) chip.title = String(raw);
    return chip;
  }
  function showStepFallback() {
    threeUnavailable=true;
    root.classList.add('ponder-no-3d');
    status.hidden=false;
    status.textContent='3D preview is unavailable in this browser. Follow the steps below.';
    const cameraButton=root.querySelector('[data-ponder-camera]');cameraButton.disabled=true;
    canvasRoot.setAttribute('aria-hidden','true');canvasRoot.removeAttribute('tabindex');
    hover.hidden=true;focusLabel.hidden=true;
    const wrapper=root.querySelector('[data-ponder-staged-fallback]');
    const items=root.querySelector('[data-ponder-staged-items]');items.replaceChildren();
    const grouped=new Map();
    for(const item of current?.stagedItems || []){
      const group=grouped.get(item.item);
      if(group)group.slots++;else grouped.set(item.item,{...item,slots:1});
    }
    for(const item of grouped.values())items.append(itemChip(`${item.name} · ${item.slots} ${item.slots===1 ? 'slot' : 'slots'}`,item.icon,item.item));
    wrapper.hidden=grouped.size===0;
  }
  function update() {
    if (!current) return;
    const info = stepAt(elapsed), step = current.steps[info.index];
    if (!step) return;
    scrub.value = String(Math.round(elapsed/duration()*1000));
    root.querySelector('[data-ponder-counter]').textContent = `Step ${info.index+1} of ${current.steps.length}`;
    previous.disabled = info.index === 0; next.disabled = info.index === current.steps.length-1;
    if (activeStep !== info.index) {
      activeStep = info.index; itemKey = '';
      root.querySelector('[data-ponder-step-label]').textContent = 'Step '+(activeStep+1);
      root.querySelector('[data-ponder-step-title]').textContent = step.title;
      root.querySelector('[data-ponder-step-text]').textContent = step.text;
      stepList.querySelectorAll('button').forEach((button,index) => { button.classList.toggle('active',index === activeStep); button.setAttribute('aria-current',index === activeStep ? 'step' : 'false'); });
      const flow = root.querySelector('[data-ponder-item-flow]'); flow.replaceChildren();
      if (step.input) flow.append(itemChip(step.inputName,step.inputIcon,step.input));
      const distinctOutput=decodeItem(step.output)!==decodeItem(step.input);
      if (step.input && step.output && distinctOutput) { const arrow=document.createElement('span');arrow.className='flow-arrow';arrow.textContent=isReferenceStep(step) ? '·' : '→';flow.append(arrow); }
      if (step.output && (!step.input || distinctOutput)) flow.append(itemChip(step.outputName,step.outputIcon,step.output));
      if (step.fluid) flow.append(itemChip(`${step.amount || ''} mB ${step.fluid.split(':').pop().replaceAll('_',' ')}`,null,step.fluid));
      focusLabel.textContent = step.action==='ie_form' ? 'Form the multiblock' : step.action==='craft_layout' ? 'Crafting grid' : machineName(step.machine);
    }
    updateStage(step, reducedMotion ? (info.progress >= .72 ? 1 : 0) : info.progress);
  }
  function machineName(value) { return ({marker:'Interaction point',press:'Mechanical Press',mill:'Millstone',saw:'Mechanical Saw',mixer:'Mechanical Mixer',wheels:'Crushing Wheels',iecrusher:'Crusher',heatmix:'Heated Mixing',supermix:'Superheated Mixing',worlditem:'World Interaction',spout:'Spout',charger:'Charging',arc:'Arc Furnace',blast:'Blast Furnace',coke:'Coke Oven',dragonfan:'Dragon Breath'}[value]) || String(value || 'Process').replace(/(^|_)(\w)/g,(_,s,c) => (s?' ':'')+c.toUpperCase()); }

  async function load(slug, updateUrl=true) {
    const serial = ++ticket; setPlaying(false); status.hidden=false;status.textContent='Preparing the scene…';
    let data;
    try { data = await getWorld(slug); }
    catch(error) {
      if(serial !== ticket) return;
      status.textContent='This scene could not be loaded. Choose another scene or try again.';
      if(current)select.value=current.slug;
      console.warn('Scene could not be loaded:',error);return;
    }
    if (serial !== ticket) return;
    current = data; elapsed = 0; activeStep=-1; select.value=slug;
    stepList.replaceChildren(...data.steps.map((step,index) => {
      const button=document.createElement('button');button.type='button';button.dataset.step=index;
      const number=document.createElement('span');number.textContent=index+1;button.append(number,document.createTextNode(step.title));return button;
    }));
    canvasRoot.setAttribute('aria-label',data.title+' — interactive three-dimensional scene');
    update();
    if (updateUrl) { const url=new URL(location.href);url.searchParams.set('scene',slug);url.searchParams.delete('q');history.replaceState(null,'',url); }
    if(threeUnavailable)showStepFallback();
    else try { await ensure3d(); if (serial !== ticket) return; buildWorld(data); status.hidden=true; }
    catch (error) { if(serial !== ticket)return;console.warn('3D view unavailable:',error);showStepFallback(); }
    update(); requestRender();
  }

  function ensure3d() {
    if (renderer) return Promise.resolve();
    if (!init3dPromise) init3dPromise = create3d().catch(error => { init3dPromise=null; throw error; });
    return init3dPromise;
  }
  async function create3d() {
    const [THREE, {OrbitControls}, bank] = await Promise.all([
      import('three'), import('three/addons/controls/OrbitControls.js'),
      fetch(absolute('data/ponder/models.json')).then(r => { if(!r.ok)throw Error('Model library could not be loaded');return r.json(); })
    ]);
    three=THREE; modelBank=bank;
    renderer = new THREE.WebGLRenderer({antialias:true,alpha:true,powerPreference:'low-power'});
    renderer.setPixelRatio(Math.min(devicePixelRatio || 1,2));
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setClearColor(0x202020,1);
    canvasRoot.replaceChildren(renderer.domElement);
    scene3d = new THREE.Scene();
    scene3d.add(new THREE.HemisphereLight(0xf2edf8,0x706477,2.2));
    const key = new THREE.DirectionalLight(0xfff1dc,2.5);key.position.set(-8,16,12);scene3d.add(key);
    const fill = new THREE.DirectionalLight(0xe9e5ff,0.8);fill.position.set(12,6,-10);scene3d.add(fill);
    camera = new THREE.OrthographicCamera(-8,8,6,-6,0.01,500);
    controls = new OrbitControls(camera,renderer.domElement);
    controls.enableDamping=false;controls.minPolarAngle=.15;controls.maxPolarAngle=Math.PI/2+.12;controls.minZoom=.35;controls.maxZoom=4;controls.screenSpacePanning=true;
    controls.addEventListener('change',requestRender);
    const lineGeometry = new THREE.EdgesGeometry(new THREE.BoxGeometry(1.035,1.035,1.035));
    hoverBox = new THREE.LineSegments(lineGeometry,new THREE.LineBasicMaterial({color:0xf9b50c,transparent:true,opacity:.9}));hoverBox.visible=false;scene3d.add(hoverBox);
    focusBox = new THREE.LineSegments(lineGeometry,new THREE.LineBasicMaterial({color:0xe0859c,transparent:true,opacity:.95}));focusBox.visible=false;scene3d.add(focusBox);
    const ray = new THREE.Raycaster(), pointer = new THREE.Vector2();
    renderer.domElement.addEventListener('pointermove',event => {
      if (event.buttons) {hover.hidden=true;hoverBox.visible=false;return;}
      const rect = renderer.domElement.getBoundingClientRect();pointer.set((event.clientX-rect.left)/rect.width*2-1,-(event.clientY-rect.top)/rect.height*2+1);ray.setFromCamera(pointer,camera);
      const targets=world ? meshes.concat(world.children.filter(child=>child.isSprite)) : meshes;
      const hit = ray.intersectObjects(targets,false)[0];
      if (!hit) {hover.hidden=true;hoverBox.visible=false;requestRender();return;}
      const entry=hit.object.isSprite ? hit.object.userData.item : hit.object.userData.entries?.[hit.instanceId];
      if (!entry) return;
      hover.replaceChildren(document.createTextNode(entry.name));const id=document.createElement('small');id.textContent=entry.id;hover.append(id);
      hover.style.left=Math.max(8,Math.min(rect.width-250,event.clientX-rect.left+12))+'px';hover.style.top=Math.max(8,event.clientY-rect.top-60)+'px';hover.hidden=false;
      hoverBox.visible=Boolean(entry.pos);
      if(entry.pos)hoverBox.position.set(...entry.pos.map(v=>v+.5));requestRender();
    });
    renderer.domElement.addEventListener('pointerleave',()=>{hover.hidden=true;hoverBox.visible=false;requestRender();});
    new ResizeObserver(resize).observe(canvasRoot);
    resize();
  }

  function resize() {
    if (!renderer || !camera) return;
    const width=canvasRoot.clientWidth,height=canvasRoot.clientHeight;
    if (!width || !height) return;
    const aspect=width/height;
    const span=camera.userData.fitWidth ? fitCameraSpan(camera.userData.fitWidth,camera.userData.fitHeight,aspect) : 12;
    camera.left=-span*aspect/2;camera.right=span*aspect/2;camera.top=span/2;camera.bottom=-span/2;camera.updateProjectionMatrix();
    renderer.setSize(width,height,false);requestRender();
  }
  function texture(descriptor) {
    if (!descriptor?.url) return null;
    if (!textures.has(descriptor.url)) {
      const map = new three.TextureLoader().load(absolute(descriptor.url), loaded => {
        if (descriptor.animated && loaded.image.height > loaded.image.width) {
          const ratio = loaded.image.width/loaded.image.height;loaded.repeat.y=ratio;loaded.offset.y=1-ratio;
        }
        requestRender();
      });
      map.magFilter=three.NearestFilter;map.minFilter=three.NearestFilter;map.colorSpace=three.SRGBColorSpace;map.generateMipmaps=false;textures.set(descriptor.url,map);
    }
    return textures.get(descriptor.url);
  }
  function itemTexture(descriptor,label,id) {
    if(descriptor?.url)return texture(descriptor);
    const key='item-label:'+id;
    if(!textures.has(key)){
      const canvas=document.createElement('canvas');canvas.width=256;canvas.height=112;
      const ctx=canvas.getContext('2d');
      ctx.fillStyle = '#333333';
      ctx.fillRect(0,0,256,112);
      ctx.strokeStyle = '#7f3e52';
      ctx.lineWidth = 3;
      ctx.strokeRect(2,2,252,108);
      ctx.fillStyle = '#ffffff';
      ctx.font = '500 23px system-ui,sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const words=String(label || id || 'Item').split(' ');let lines=[''];
      for(const word of words){const current=lines.length-1;const trial=(lines[current]+' '+word).trim();if(ctx.measureText(trial).width>230 && lines[current])lines.push(word);else lines[current]=trial;}
      lines=lines.slice(0,3);lines.forEach((line,index)=>ctx.fillText(line,128,56+(index-(lines.length-1)/2)*27,236));
      const map=new three.CanvasTexture(canvas);map.colorSpace=three.SRGBColorSpace;textures.set(key,map);
    }
    return textures.get(key);
  }
  function makeItem(descriptor,label,id,scale=.78) {
    const sprite=new three.Sprite(new three.SpriteMaterial({map:itemTexture(descriptor,label,id),transparent:true,alphaTest:.12,depthTest:true}));
    sprite.userData.item={id:decodeItem(id),name:label || decodeItem(id)};
    sprite.scale.set(scale,descriptor?.url ? scale : scale*.44,scale);return sprite;
  }
  function colorFor(id) {
    if (id.includes('snow') || id.includes('white_concrete')) return 0xd9d9dd;
    if (id.includes('water')) return 0x4d82a9;
    if (id.includes('glass')) return 0xa8b4b9;
    if (id.includes('lava')) return 0xc9793e;
    if (/wood|barrel|log/.test(id)) return 0x9a7958;
    if (/brass|gold|copper/.test(id)) return 0xb79961;
    if (/arcane|source|mana/.test(id)) return 0x9584b0;
    if (/grass|moss/.test(id)) return 0x738365;
    return 0x858a91;
  }
  function material(descriptor,id,visible=true) {
    const key = (descriptor?.url || id)+'|'+visible;
    if (!materials.has(key)) materials.set(key,new three.MeshStandardMaterial({
      map:texture(descriptor),color:descriptor?.url ? 0xffffff : colorFor(id),roughness:.94,metalness:0,
      side:three.DoubleSide,alphaTest:.14,visible
    }));
    return materials.get(key);
  }
  function boxPart(part,id) {
    const from=part.from.map(v=>v/16),to=part.to.map(v=>v/16);
    const geometry=new three.BoxGeometry(...to.map((v,i)=>Math.max(.001,v-from[i])));
    geometry.translate(...from.map((v,i)=>(v+to[i])/2));
    const uv=geometry.getAttribute('uv');
    faceNames.forEach((face,index)=>{
      const data=part.faces[face];if(!data) return;
      const bounds=data.uv || [0,0,16,16],turn=((data.rotation || 0)/90)%4;
      for(let v=0;v<4;v++){
        let x=uv.getX(index*4+v),y=uv.getY(index*4+v);
        for(let t=0;t<turn;t++){const old=x;x=1-y;y=old;}
        uv.setXY(index*4+v,(bounds[0]+(bounds[2]-bounds[0])*x)/16,1-(bounds[1]+(bounds[3]-bounds[1])*(1-y))/16);
      }
    });
    uv.needsUpdate=true;
    if(part.rotation){
      const origin=part.rotation.origin.map(v=>v/16);geometry.translate(...origin.map(v=>-v));
      const axis=part.rotation.axis,angle=three.MathUtils.degToRad(part.rotation.angle);
      if(axis==='x')geometry.rotateX(angle);else if(axis==='y')geometry.rotateY(angle);else geometry.rotateZ(angle);
      geometry.translate(...origin);
    }
    return {geometry,material:faceNames.map(face=>material(part.faces[face]?.texture,id,Boolean(part.faces[face])))};
  }
  function buildWorld(data) {
    if(world){scene3d.remove(world);world.traverse(object=>{
      if(object.geometry && !object.isSprite)object.geometry.dispose();
      if(object.isInstancedMesh)object.dispose();
      if(object.isSprite || object.userData.transientMaterial)object.material.dispose();
    });}
    world=new three.Group();scene3d.add(world);meshes=[];itemSprite=null;referenceSprite=null;fluidEffect=null;itemKey='';lastProgress=-1;
    const groups=new Map();bounds=new three.Box3();
    for(const block of data.blocks){
      const info=modelBank[block.state];if(!info)continue;
      if(!groups.has(block.state))groups.set(block.state,[]);
      groups.get(block.state).push({pos:block.pos,id:info.id,name:info.name});
      bounds.expandByPoint(new three.Vector3(...block.pos));bounds.expandByPoint(new three.Vector3(...block.pos.map(v=>v+1)));
    }
    const translate=new three.Matrix4(),rotate=new three.Matrix4(),center=new three.Matrix4().makeTranslation(.5,.5,.5),uncenter=new three.Matrix4().makeTranslation(-.5,-.5,-.5);
    for(const [state,entries]of groups){
      const info=modelBank[state];
      for(const model of info.models){
        rotate.makeRotationFromEuler(new three.Euler(-three.MathUtils.degToRad(model.x || 0),-three.MathUtils.degToRad(model.y || 0),0));
        const transform=center.clone().multiply(rotate).multiply(uncenter);
        for(const part of model.parts || []){
          const template=boxPart(part,info.id);const mesh=new three.InstancedMesh(template.geometry,template.material,entries.length);
          mesh.userData.entries=entries;
          entries.forEach((entry,index)=>{translate.makeTranslation(...entry.pos);mesh.setMatrixAt(index,translate.clone().multiply(transform));});
          mesh.instanceMatrix.needsUpdate=true;mesh.computeBoundingSphere();world.add(mesh);meshes.push(mesh);
        }
        for(const part of model.obj || []){
          const geometry=new three.BufferGeometry();
          geometry.setAttribute('position',new three.Float32BufferAttribute(part.vertices,3));
          geometry.setAttribute('uv',new three.Float32BufferAttribute(part.uvs,2));geometry.computeVertexNormals();
          const mesh=new three.InstancedMesh(geometry,material(part.texture,info.id),entries.length);mesh.userData.entries=entries;
          entries.forEach((entry,index)=>{translate.makeTranslation(...entry.pos);mesh.setMatrixAt(index,translate.clone().multiply(transform));});
          mesh.instanceMatrix.needsUpdate=true;mesh.computeBoundingSphere();world.add(mesh);meshes.push(mesh);
        }
      }
    }
    const blocksByPosition=new Map(data.blocks.map(block=>[block.pos.join(','),block]));
    for(const staged of data.stagedItems || []){
      const sprite=makeItem(staged.icon,staged.name,staged.item,staged.kind==='crafter' ? .68 : .72);
      const pos=staged.pos.map((v,index)=>v+(index===1 ? (staged.kind==='crafter' ? .5 : 1.12) : .5));
      if(staged.kind==='crafter'){
        const block=blocksByPosition.get(staged.pos.join(','));const facing=modelBank[block?.state]?.properties?.facing || 'north';
        if(facing==='north')pos[2]-=.55;else if(facing==='south')pos[2]+=.55;else if(facing==='east')pos[0]+=.55;else pos[0]-=.55;
      }
      sprite.position.set(...pos);world.add(sprite);
    }
    world.updateMatrixWorld(true);
    const actualBounds=new three.Box3().setFromObject(world);
    if(!actualBounds.isEmpty())bounds.copy(actualBounds);
    resetCamera();
  }
  function resetCamera(){
    if(!bounds || !camera)return;
    const center=bounds.getCenter(new three.Vector3()),size=bounds.getSize(new three.Vector3());
    const max=Math.max(size.x,size.z,size.y*1.35,4),yaw=three.MathUtils.degToRad(current?.yaw ?? 145);camera.zoom=1;
    camera.position.copy(center).add(new three.Vector3(Math.sin(yaw)*max*1.7,max*.95,Math.cos(yaw)*max*1.7));controls.target.copy(center);controls.update();camera.updateMatrixWorld(true);
    const projected=[];
    for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z])projected.push(new three.Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse));
    camera.userData.fitWidth=Math.max(...projected.map(v=>v.x))-Math.min(...projected.map(v=>v.x));
    camera.userData.fitHeight=Math.max(...projected.map(v=>v.y))-Math.min(...projected.map(v=>v.y));resize();
  }
  function updateStage(step,progress){
    if(threeUnavailable || !three || !world)return;
    const focus=step.focus || step.machinePos || step.itemPoint;
    if(focus){
      focusBox.scale.set(1,1,1);focusBox.position.set(...focus.map(v=>v+.5));
      if(step.action==='ie_form' && current.multiblocks?.length){
        const box=new three.Box3();for(const multiblock of current.multiblocks)for(const point of multiblockPoints(multiblock)){box.expandByPoint(new three.Vector3(...point));box.expandByPoint(new three.Vector3(...point.map(v=>v+1)));}
        if(!box.isEmpty()){box.getCenter(focusBox.position);box.getSize(focusBox.scale);}
      }
      focusBox.visible=true;focusLabel.hidden=false;
    }
    else{focusBox.visible=false;focusLabel.hidden=true;}
    const reference=isReferenceStep(step),crafting=step.action==='craft_layout' && current.craftOutput;
    const showOutput=crafting || (!reference && progress>=.72),descriptor=showOutput ? step.outputIcon : step.inputIcon;
    const key=String(activeStep)+'|'+showOutput+'|'+reference+'|'+descriptor?.url;
    if(itemKey!==key){
      if(itemSprite){world.remove(itemSprite);itemSprite.material.dispose();itemSprite=null;}
      if(referenceSprite){world.remove(referenceSprite);referenceSprite.material.dispose();referenceSprite=null;}
      if(step.input || step.output){itemSprite=makeItem(descriptor,showOutput ? step.outputName : step.inputName,showOutput ? step.output : step.input);world.add(itemSprite);}
      if(reference && !crafting && step.input && step.output && decodeItem(step.input)!==decodeItem(step.output)){referenceSprite=makeItem(step.outputIcon,step.outputName,step.output);world.add(referenceSprite);}
      if(fluidEffect){world.remove(fluidEffect);fluidEffect.geometry.dispose();fluidEffect.material.dispose();fluidEffect=null;}
      if(step.fluid && /spout|drain|aquatic|washing|heatmix|mixer|supermix/.test(step.machine)){
        fluidEffect=new three.Mesh(new three.CylinderGeometry(.06,.08,1,10),new three.MeshBasicMaterial({color:step.fluid.includes('lava')?0xf2a15d:0x7faac7,transparent:true,opacity:.75}));fluidEffect.userData.transientMaterial=true;world.add(fluidEffect);
      }
      itemKey=key;
    }
    const start=step.inputPoint || step.feedPoint || step.itemPoint || step.machinePos || [0,1,0];
    const middle=step.itemPoint || start;
    const end=step.resultDepot ? step.resultDepot.map((v,i)=>v+(i===1 ? 1.1 : .5)) : middle;
    const point=reference ? middle : progress<.4 ? start.map((v,i)=>v+(middle[i]-v)*progress/.4) : progress>.72 ? middle.map((v,i)=>v+(end[i]-v)*(progress-.72)/.28) : middle;
    if(itemSprite){
      itemSprite.visible=!crafting || progress>=.72;
      if(crafting)itemSprite.position.set(current.craftOutput[0]+.5,current.craftOutput[1]+1.1,current.craftOutput[2]+.5);
      else itemSprite.position.set(point[0]-(referenceSprite ? .42 : 0),point[1]+.12,point[2]);
    }
    if(referenceSprite)referenceSprite.position.set(point[0]+.42,point[1]+.12,point[2]);
    if(fluidEffect){const machine=step.machinePos || middle;fluidEffect.position.set(machine[0]+.5,(machine[1]+middle[1])/2,machine[2]+.5);fluidEffect.scale.y=Math.max(.1,machine[1]-middle[1]);fluidEffect.visible=progress>.25&&progress<.75;}
    lastProgress=progress;
  }
  function requestRender(){if(!frame)frame=requestAnimationFrame(render);}
  function render(time){
    frame=0;
    if(playing){if(lastTime)elapsed+=Math.min((time-lastTime)/1000,.1);lastTime=time;if(elapsed>=duration()){elapsed=duration();setPlaying(false);}update();}
    if(!threeUnavailable&&renderer&&scene3d&&camera){
      if(focusBox?.visible){const v=focusBox.position.clone();v.y+=focusBox.scale.y/2+.6;v.project(camera);focusLabel.style.left=((v.x+1)/2*canvasRoot.clientWidth)+'px';focusLabel.style.top=Math.max(28,(-v.y+1)/2*canvasRoot.clientHeight)+'px';}
      renderer.render(scene3d,camera);
    }
    if(playing)requestRender();
  }

  playButton.addEventListener('click',()=>{if(elapsed>=duration())elapsed=0;setPlaying(!playing);update();});
  previous.addEventListener('click',()=>goStep(activeStep-1));next.addEventListener('click',()=>goStep(activeStep+1));
  scrub.addEventListener('input',()=>{setPlaying(false);elapsed=Number(scrub.value)/1000*duration();update();requestRender();});
  stepList.addEventListener('click',event=>{const button=event.target.closest('[data-step]');if(button)goStep(Number(button.dataset.step));});
  root.querySelector('[data-ponder-camera]').addEventListener('click',resetCamera);
  select.addEventListener('change',()=>load(select.value));
  function applyFilter(loadFirst=true){
    const matches=choices.filter(scene=>matchesScene(scene,filter.value));const slugs=new Set(matches.map(scene=>scene.slug));
    for(const option of select.options)option.hidden=!slugs.has(option.value);
    select.disabled=matches.length===0;
    filterStatus.textContent=matches.length ? `${matches.length} ${matches.length===1 ? 'scene' : 'scenes'}` : 'No matching scenes. Try a different item or process.';
    if(loadFirst && matches.length && select.selectedOptions[0]?.hidden){select.value=matches[0].slug;load(matches[0].slug);}
  }
  filter.addEventListener('input',()=>applyFilter());
  root.addEventListener('keydown',event=>{
    if(['INPUT','SELECT','TEXTAREA'].includes(event.target.tagName))return;
    if(event.key==='ArrowRight'){event.preventDefault();goStep(activeStep+1);}
    if(event.key==='ArrowLeft'){event.preventDefault();goStep(activeStep-1);}
  });
  const params=new URLSearchParams(location.search);const requested=params.get('scene');const query=params.get('q');
  let initial=choices.find(s=>s.slug===requested||s.id===requested);
  if(!initial&&query){initial=choices.find(scene=>matchesScene(scene,query));filter.value=query;applyFilter(false);}
  initial=initial||choices.find(s=>s.slug===root.dataset.initial)||choices[0];
  await load(initial.slug,false);
  if(!reducedMotion)requestRender();
}
