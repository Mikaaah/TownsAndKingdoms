/* CPU geometry checks: actual model data, no WebGL or Minecraft required. */
const fs=require('fs'),path=require('path'),vm=require('vm'),assert=require('node:assert/strict');
const root=path.resolve(__dirname,'..');
const esbuild=require(require.resolve('esbuild',{paths:[root,process.env.TK3_RENDERER_DEPS||root]}));
const source=fs.readFileSync(path.join(root,'create-viewer.js'),'utf8');
const bundle=esbuild.buildSync({stdin:{contents:source+'\nexport {nativeModel,Viewer,THREE};',resolveDir:root,loader:'js'},bundle:true,format:'iife',globalName:'Geometry',write:false,nodePaths:[path.join(process.env.TK3_RENDERER_DEPS||root,'node_modules')]}).outputFiles[0].text;
const context={window:{},document:{currentScript:{src:'https://example.test/assets/create-viewer.js'}},URL,console,AbortController,setTimeout,clearTimeout};
vm.runInNewContext(bundle,context);
const {nativeModel,Viewer,THREE}=context.Geometry;
const data=JSON.parse(fs.readFileSync(path.join(root,'visual-assets/create-models.json')));
const art=JSON.parse(fs.readFileSync(path.join(root,'visual-assets/item-art.json')));
const lib={data,art,texture:new THREE.Texture(),items:new THREE.Texture()};
const close=(a,b)=>assert.ok(Math.abs(a-b)<1e-5,`${a} != ${b}`);
const stone=nativeModel('minecraft:item/stonecutter',lib);
const axes={north:[0,0,-1],south:[0,0,1],east:[1,0,0],west:[-1,0,0],up:[0,1,0],down:[0,-1,0]};
for(const [i,e] of data.models['minecraft:item/stonecutter'].elements.entries()){
 for(const [j,side] of Object.keys(e.faces).entries()){
  const mesh=stone.children[i].children[j];assert.equal(mesh.material.side,THREE.FrontSide);
  const normal=mesh.geometry.getAttribute('normal');for(let a=0;a<3;a++)close(normal.array[a],axes[side][a]);
 }
}
// A zero-thickness saw must have two opposing, outward faces: no double-sided overlap.
assert.equal(stone.children[1].children.length,2);
const north=stone.children[1].children[0].geometry.getAttribute('uv'),tile=data.textures['minecraft:block/stonecutter_saw'];
close(north.getX(0),(tile.x+4)/data.width);close(north.getX(1),(tile.x+60)/data.width);
const synthetic={...lib,data:{width:64,height:64,textures:{test:{x:0,y:0}},models:{test:{textures:{},elements:[{from:[0,0,0],to:[16,16,16],faces:{north:{texture:'test',uv:[1,2,10,12],rotation:90}}}]}}}};
const uv=nativeModel('test',synthetic).children[0].children[0].geometry.getAttribute('uv');
close(uv.getX(0),4/64);close(uv.getY(0),1-48/64); // Native clockwise quarter turn.
function stage(kind,mode='input'){
 const v=Object.create(Viewer.prototype);v.lib=lib;v.scene=new THREE.Scene();v.controls={target:new THREE.Vector3(),update(){}};v.camera=new THREE.PerspectiveCamera();v.render=()=>{};
 v.stage({kind,inputs:['minecraft:oak_slab','create:andesite_alloy'],output:'create:mechanical_press'},{mode,belt:'minecraft:oak_slab'},0);return v.scene;
}
const direction=new THREE.Vector3(0,0,1);
const sequence=stage('sequence'),deployer=sequence.children.find(n=>n.rotation.x!==0);assert.ok(deployer);
const down=direction.clone().applyEuler(deployer.rotation);close(down.y,-1);close(down.z,0);
const saw=stage('cutting').children[0];close(direction.clone().applyEuler(saw.rotation).y,1);
const input=stage('stonecutting'),output=stage('stonecutting','output');
assert.ok(input.children[1].isSprite);assert.ok(output.children[1].isSprite);
assert.ok(input.children[1].position.x<-.8);assert.ok(output.children[1].position.x>.8);
assert.ok(input.children[1].position.x+.325<-.5); // Icon stays outside the blade/block footprint.
console.log('PASS: outward normals, one-sided saw faces, native clockwise UVs, downward Deployer, upward Saw and separate stonecutter items.');
