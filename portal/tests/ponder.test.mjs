import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { Vector3, OrthographicCamera, Box3 } from 'three';
import { assetUrl, isReferenceStep, matchesScene, fitCameraSpan, multiblockPoints } from '../src/scripts/ponder-core.mjs';

const portal=path.resolve(path.dirname(fileURLToPath(import.meta.url)),'..');
const read=p=>JSON.parse(fs.readFileSync(p,'utf8'));
const index=read(path.join(portal,'src/data/ponder.json'));
const authoredScenes=read(path.join(portal,'tests/fixtures/ponder-staging.json'));
const models=read(path.join(portal,'public/data/ponder/models.json'));

test('every authored Ponder scene has a unique indexed, loadable 3D scene',()=>{
  assert.equal(index.scenes.length,authoredScenes.length);
  assert.equal(new Set(index.scenes.map(s=>s.id)).size,index.scenes.length);
  assert.deepEqual(index.scenes.map(s=>s.id).sort(),authoredScenes.map(s=>s.id).sort());
  for(const entry of index.scenes){
    const scene=read(path.join(portal,'public',entry.dataUrl));
    assert.equal(scene.id,entry.id);
    assert(scene.blocks.length>0,entry.id);
    assert(scene.steps.length>0,entry.id);
    for(const block of scene.blocks){
      assert(models[block.state],`${entry.id}: model ${block.state}`);
      assert.equal(block.pos.length,3);
      assert(block.pos.every(Number.isFinite));
    }
    for(const step of scene.steps){
      assert(step.text,`${entry.id}: empty instruction`);
      assert(step.duration>0);
      assert(!/based on version|generated from cb|updated for kubejs|in this beta|snapshot|migration/i.test(step.text),step.text);
    }
  }
});

test('native model and item textures resolve to packaged image files',()=>{
  let checked=0;
  function visit(value){
    if(!value||typeof value!=='object')return;
    if(typeof value.url==='string'&&value.url.startsWith('media/ponder/')){
      assert(fs.existsSync(path.join(portal,'public',value.url)),value.url);checked++;
    }
    for(const child of Object.values(value))visit(child);
  }
  visit(models);visit(index);
  for(const entry of index.scenes)visit(read(path.join(portal,'public',entry.dataUrl)));
  for(const entry of index.scenes)visit(read(path.join(portal,'public',entry.dataUrl)));
  assert(checked>100);
});

test('native OBJ machinery retains complete triangle and UV buffers',()=>{
  let found=0;
  for(const entry of Object.values(models))for(const model of entry.models)for(const part of model.obj||[]){
    assert.equal(part.vertices.length%9,0);
    assert.equal(part.uvs.length/2,part.vertices.length/3);
    assert(part.vertices.every(Number.isFinite));
    assert(part.uvs.every(Number.isFinite));found++;
  }
  assert(found>0,'At least one native machinery mesh should be available.');
});

test('authored camera headings and crafting/depot ingredient placement survive import',()=>{
  let staged=0;
  for(const authored of authoredScenes){
    const scene=read(path.join(portal,'public/data/ponder',authored.id.split(':')[1]+'.json'));
    assert.equal(scene.yaw,authored.yaw);
    const items=authored.stagedItems;
    assert.equal(scene.stagedItems.length,items.length,authored.id);
    items.forEach((item,index)=>{
      assert.deepEqual(scene.stagedItems[index].pos,item.pos);
      assert.equal(scene.stagedItems[index].item,item.item);
    });
    staged+=items.length;
  }
  assert(staged>250);
});

test('ritual references are not represented as item-to-item transformations',()=>{
  const ritual=index.scenes.find(s=>s.id==='tnk:witchery_circle_02');
  assert.equal(ritual.steps[0].input,'minecraft:clock');
  assert.equal(ritual.steps[0].output,'minecraft:glowstone_dust');
  assert(isReferenceStep(ritual.steps[0]));
  assert(!isReferenceStep(index.scenes.find(s=>s.id==='tnk:certus_dust').steps[0]));
});

test('camera fits every source structure on narrow and wide screens',()=>{
  for(const entry of index.scenes){
    const scene=read(path.join(portal,'public',entry.dataUrl));
    const bounds=new Box3();
    for(const block of scene.blocks){bounds.expandByPoint(new Vector3(...block.pos));bounds.expandByPoint(new Vector3(...block.pos.map(v=>v+1)));}
    const center=bounds.getCenter(new Vector3()),size=bounds.getSize(new Vector3());
    const max=Math.max(size.x,size.z,size.y*1.35,4),yaw=scene.yaw*Math.PI/180;
    const camera=new OrthographicCamera(-1,1,1,-1,.01,500);
    camera.position.copy(center).add(new Vector3(Math.sin(yaw)*max*1.7,max*.95,Math.cos(yaw)*max*1.7));camera.lookAt(center);camera.updateMatrixWorld(true);
    const points=[];
    for(const x of [bounds.min.x,bounds.max.x])for(const y of [bounds.min.y,bounds.max.y])for(const z of [bounds.min.z,bounds.max.z])points.push(new Vector3(x,y,z).applyMatrix4(camera.matrixWorldInverse));
    const width=Math.max(...points.map(p=>p.x))-Math.min(...points.map(p=>p.x));
    const height=Math.max(...points.map(p=>p.y))-Math.min(...points.map(p=>p.y));
    for(const aspect of [.6,.9,1.4,2]){
      const span=fitCameraSpan(width,height,aspect);
      assert(points.every(p=>Math.abs(p.x)<span*aspect/2&&Math.abs(p.y)<span/2),entry.id+' at '+aspect);
    }
  }
});

test('asset paths and multiblock rotation retain GitHub Pages and native coordinates',()=>{
  assert.equal(assetUrl('/TownsAndKingdoms','/data/ponder/test.json'),'/TownsAndKingdoms/data/ponder/test.json');
  assert.equal(assetUrl('/TownsAndKingdoms/','data/ponder/test.json'),'/TownsAndKingdoms/data/ponder/test.json');
  assert.deepEqual(multiblockPoints({origin:[10,3,7],parts:[[1,2,3]],rotation:'COUNTERCLOCKWISE_90'}),[[13,5,6]]);
});

test('scene search accepts readable item names and full namespaced IDs',()=>{
  const scene={title:'Complete the structure',anchors:['immersiveengineering:arc_furnace']};
  assert(matchesScene(scene,'arc furnace'));
  assert(matchesScene(scene,'immersiveengineering:arc_furnace'));
  assert(!matchesScene(scene,'witchery ritual'));
});
