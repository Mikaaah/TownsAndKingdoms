// priority: -100
// TNK3 | Ponder scene registration and runtime presentation helpers.
// Static authored scenes and categories live in pack_data/ponder.json.
// All native classes are resolved inside Ponder.registry, after mod construction.

(() => {
    if (!Platform.isLoaded('ponderjs') || !Platform.isLoaded('create')) return;
    Ponder.tags(event => {
        var categories = JSON.parse(String(JsonIO.readString('kubejs/pack_data/ponder.json'))).categories;
        categories.forEach(c => {
            var entries=c.items.filter(id=>Item.exists(id));
            if(entries.length)event.createTag(c.id,entries[0],c.title,c.description,entries);
        });
    });
    Ponder.registry(event => {
        var definitions = JSON.parse(String(JsonIO.readString('kubejs/pack_data/ponder.json'))).scenes;
        var CreateScene = Java.loadClass('com.simibubi.create.foundation.ponder.CreateSceneBuilder');
        var Pos = Java.loadClass('net.minecraft.core.BlockPos');
        var Vec = Java.loadClass('net.minecraft.world.phys.Vec3');
        var Direction = Java.loadClass('net.minecraft.core.Direction');
        var Palette = Java.loadClass('net.createmod.ponder.api.PonderPalette');
        var Pointing = Java.loadClass('net.createmod.catnip.math.Pointing');
        var Component = Java.loadClass('net.minecraft.network.chat.Component');
        var Registry = Java.loadClass('net.minecraft.core.registries.BuiltInRegistries');
        var RL = Java.loadClass('net.minecraft.resources.ResourceLocation');
        var Press = Java.loadClass('com.simibubi.create.content.kinetics.press.MechanicalPressBlockEntity');
        var PressMode = Java.loadClass('com.simibubi.create.content.kinetics.press.PressingBehaviour$Mode');
        var Deployer = Java.loadClass('com.simibubi.create.content.kinetics.deployer.DeployerBlockEntity');
        var Spout = Java.loadClass('com.simibubi.create.content.fluids.spout.SpoutBlockEntity');
        var FluidTank = Java.loadClass('com.simibubi.create.content.fluids.tank.FluidTankBlockEntity');
        var ItemEntity = Java.loadClass('net.minecraft.world.entity.item.ItemEntity');
        var FluidStack = Java.loadClass('net.neoforged.neoforge.fluids.FluidStack');
        var Compound = Java.loadClass('net.minecraft.nbt.CompoundTag');
        var Tags = Java.loadClass('net.minecraft.nbt.ListTag');
        var Crafter = Java.loadClass('com.simibubi.create.content.kinetics.crafter.MechanicalCrafterBlockEntity');
        var Funnel = Java.loadClass('com.simibubi.create.content.logistics.funnel.FunnelBlockEntity');
        function bp(p) { return new Pos(p[0], p[1], p[2]); }
        function vector(p) { return new Vec(p[0], p[1], p[2]); }
        function stack(value) { return Item.of(value); }
        function available(s) {
            return s.anchors.some(id => Item.exists(id)) &&
                s.blocks.every(id => Registry.BLOCK.containsKey(RL.parse(id))) &&
                s.items.every(id => Item.exists(id)) &&
                s.fluids.every(id => Registry.FLUID.containsKey(RL.parse(id)));
        }
        function text(builder, key, point, colour, duration) {
            return builder.overlay.showText(duration || 90).text(Component.translatable(key).getString())
                .colored(colour || Palette.WHITE).independent(170-Math.max(0,Math.ceil(Component.translatable(key).getString().length()/28)-4)*9).attachKeyFrame();
        }
        function showStack(scene, util, point, value, depot) {
            if (depot) {
                scene.world.removeItemsFromBelt(bp(depot));
                scene.world.createItemOnBeltLike(bp(depot), Direction.NORTH, stack(value));
                return null;
            }
            return scene.world.createItemEntity(vector(point), vector([0,0,0]), stack(value));
        }
        function removeStack(scene, entity, depot) {
            if (depot) scene.world.removeItemsFromBelt(bp(depot));
            if (entity) scene.world.modifyEntity(entity, e => e.discard());
        }
        function itemControl(scene, point, value, duration) {
            scene.overlay.showControls(vector(point), Pointing.DOWN, duration || 55).withItem(stack(value));
        }
        function operation(scene, util, s, repeatIndex) {
            if (s.control || s.held) itemControl(scene, s.handPoint, s.control || s.held, 35);
            if(s.inspectOnly)return;
            if(s.redstone)scene.world.toggleRedstonePower(util.select.position(bp(s.machinePos)));
            if(s.rpm)scene.world.setKineticSpeed(util.select.position(bp(s.machinePos)),s.rpm);
            if (s.machine === 'deployer') {
                if (s.held) {
                    scene.world.modifyBlockEntityNBT(util.select.position(bp(s.machinePos)), Deployer, nbt => {
                        nbt.put('HeldItem', stack(s.held).save(scene.world.getHolderLookupProvider()));
                    });
                }
                scene.world.moveDeployer(bp(s.machinePos), 1, 10);
                scene.idle(10);
                scene.world.moveDeployer(bp(s.machinePos), -1, 10);
            } else if (s.machine === 'press') {
                scene.world.modifyBlockEntity(bp(s.machinePos), Press, be => be.getPressingBehaviour().start(PressMode.BELT));
            } else if (s.machine === 'spout') {
                if(s.fluid) {
                    scene.world.modifyBlockEntityNBT(util.select.position(bp(s.machinePos)), Spout, nbt=>{
                        var fluid=new FluidStack(Registry.FLUID.get(RL.parse(s.fluid)),1000);
                        if(s.potion) {
                            var PotionHandler=Java.loadClass('com.simibubi.create.content.fluids.potion.PotionFluidHandler');
                            fluid=PotionHandler.getFluidFromPotionItem(Item.of('minecraft:potion',{'minecraft:potion_contents':{potion:'minecraft:'+s.potion}}));
                            fluid.setAmount(1000);
                        }
                        var tank=new Compound(), level=new Compound(), tanks=new Tags();
                        tank.put('TankContent',fluid.save(scene.world.getHolderLookupProvider()));
                        level.putFloat('Value',1);level.putFloat('Target',1);level.putFloat('Speed',.25);level.putBoolean('Force',true);
                        tank.put('Level',level);tanks.add(tank);nbt.put('Tanks',tanks);
                    });
                    if(s.tankPos)scene.world.modifyBlockEntityNBT(util.select.position(bp(s.tankPos)),FluidTank,nbt=>{
                        var fluid=new FluidStack(Registry.FLUID.get(RL.parse(s.fluid)),4000);
                        if(s.potion){
                            var PotionHandler=Java.loadClass('com.simibubi.create.content.fluids.potion.PotionFluidHandler');
                            fluid=PotionHandler.getFluidFromPotionItem(Item.of('minecraft:potion',{'minecraft:potion_contents':{potion:'minecraft:'+s.potion}}));
                            fluid.setAmount(4000);
                        }
                        nbt.put('TankContent',fluid.save(scene.world.getHolderLookupProvider()));
                        nbt.putInt('Size',1);nbt.putInt('Height',1);nbt.putBoolean('Window',true);
                    });
                }
                scene.world.modifyBlockEntity(bp(s.machinePos), Spout, be => { be.processingTicks = 20; });
                if(s.waterStage)scene.overlay.showText(55).text(Component.translatable('tnk.ponder.water_progress',String((repeatIndex||0)+1)).getString()).colored(Palette.BLUE).independent(30);
                if(s.fluid)waterStream(scene,s);
            } else if(['mixer','heatmix','supermix','ferment'].indexOf(s.machine)>=0){
                var Mixer=Java.loadClass('com.simibubi.create.content.kinetics.mixer.MechanicalMixerBlockEntity');
                scene.world.modifyBlockEntity(bp(s.machinePos),Mixer,be=>{be.running=true;be.runningTicks=0;be.processingTicks=40;});
                scene.idle(28);
            } else if(s.machine==='compact'){
                scene.world.modifyBlockEntity(bp(s.machinePos),Press,be=>be.getPressingBehaviour().start(PressMode.BASIN));
                scene.idle(20);
            } else if (s.machine === 'laser') {
                var Laser=Java.loadClass('nl.mikaaah.alchemicallaser.LaserBlockEntity');
                var Phase=Java.loadClass('nl.mikaaah.alchemicallaser.LaserBlockEntity$Phase');
                scene.world.modifyBlockEntity(bp(s.machinePos),Laser,be=>{
                    be.exchangeLens(stack(s.held || 'alchemicallaser:power_lens'));
                    be.phase=s.disabled?Phase.IDLE:Phase.CHARGING;
                });
                if(!s.disabled){
                    scene.idle(10);
                    scene.world.modifyBlockEntity(bp(s.machinePos),Laser,be=>{be.phase=Phase.PROCESSING;});
                }
            }
        }
        function power(scene,util,spec,on) {
            scene.world.setKineticSpeed(util.select.everywhere(),on?32:0);
            if(!on)return;
            if(spec.belts){
                var Belt=Java.loadClass('com.simibubi.create.content.kinetics.belt.BeltBlockEntity');
                spec.belts.forEach(b=>b.positions.forEach(p=>scene.world.modifyBlockEntity(bp(p),Belt,be=>be.setSpeed(b.facing==='east'?-32:b.facing==='west'?32:32))));
            }
            spec.steps.forEach(s=>{
                if(s.machine==='wheels')scene.world.setKineticSpeed(util.select.position(new Pos(s.machinePos[0]+1,2,s.machinePos[2])),-32);
                if(s.airDirection)scene.world.setKineticSpeed(util.select.position(bp(s.machinePos)),-32);
            });
            if(spec.cage){scene.world.setKineticSpeed(util.select.position(new Pos(4,2,2)),-16);scene.world.setKineticSpeed(util.select.fromTo(5,0,2,5,2,2),-16);}
        }
        function stateProperty(state,property,value) {
            for(var cycle=0;cycle<16;cycle++){
                if(String(state.getValue(property)).toLowerCase()===String(value).toLowerCase())return state;
                state=state.cycle(property);
            }
            throw new Error('Invalid block property value: '+value);
        }
        // Native state and model instructions used by the refined storyboards.
        function clickControl(scene,point,value,sneak,duration) {
            var c=scene.overlay.showControls(vector(point),Pointing.DOWN,duration||35).rightClick();
            if(value)c.withItem(stack(value));
            if(sneak)c.whileSneaking();
        }
        function particles(scene,point,kind,count) {
            var Types=Java.loadClass('net.minecraft.core.particles.ParticleTypes');
            scene.effects.emitParticles(vector(point),scene.effects.simpleParticleEmitter(Types[kind],vector([0,.04,0])),count||8,1);
        }
        function waterStream(scene,s) {
            var Behaviour=Java.loadClass('com.simibubi.create.foundation.blockEntity.behaviour.fluid.SmartFluidTankBehaviour');
            var FX=Java.loadClass('com.simibubi.create.content.fluids.FluidFX');
            var fluid=new FluidStack(Registry.FLUID.get(RL.parse(s.fluid)),1000);
            if(s.potion){
                var Handler=Java.loadClass('com.simibubi.create.content.fluids.potion.PotionFluidHandler');
                fluid=Handler.getFluidFromPotionItem(Item.of('minecraft:potion',{'minecraft:potion_contents':{potion:'minecraft:'+s.potion}}));
                fluid.setAmount(1000);
            }
            scene.world.modifyBlockEntity(bp(s.machinePos),Spout,be=>{
                var tank=be.getBehaviour(Behaviour.TYPE);
                tank.getPrimaryHandler().setFluid(fluid.copy());
                tank.getPrimaryTank().getFluidLevel().startWithValue(1);
                be.processingTicks=20;be.sendSplash=true;
            });
            var nozzle=[s.machinePos[0]+.5,s.machinePos[1]-.1,s.machinePos[2]+.5];
            var particle=FX.getFluidParticle(fluid);
            for(var drop=0;drop<8;drop++){
                scene.effects.emitParticles(vector(nozzle),scene.effects.simpleParticleEmitter(particle,vector([0,-.16,0])),3,1);
                scene.idle(2);
            }
        }
        function initialiseBelts(scene,spec) {
            if(!spec.belts)return;
            var Belt=Java.loadClass('com.simibubi.create.content.kinetics.belt.BeltBlockEntity');
            spec.belts.forEach(b=>b.positions.forEach((p,i)=>scene.world.modifyBlockEntity(bp(p),Belt,be=>{
                be.beltLength=b.positions.length;be.index=i;be.setController(bp(b.controller));
            })));
        }
        function formIE(scene,spec) {
            if(!spec.multiblocks||!spec.multiblocks.length)return;
            var MB=Java.loadClass('blusunrize.immersiveengineering.common.blocks.multiblocks.IEMultiblocks');
            var Props=Java.loadClass('blusunrize.immersiveengineering.api.IEProperties');
            var Rotation=Java.loadClass('net.minecraft.world.level.block.Rotation');
            var Dummy=Java.loadClass('blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockBlockEntityDummy');
            spec.multiblocks.forEach(m=>{
                var multiblock=MB[m.key],rotation=Rotation[m.rotation],origin=bp(m.origin);
                var master=multiblock.getMasterFromOriginOffset();
                m.parts.forEach(part=>{
                    var rel=bp(part),at=origin.offset(rel.rotate(rotation));
                    var state=multiblock.getBlock().defaultBlockState();
                    state=stateProperty(state,Props.MULTIBLOCKSLAVE,!rel.equals(master));
                    if(state.hasProperty(Props.FACING_HORIZONTAL))state=stateProperty(state,Props.FACING_HORIZONTAL,rotation.rotate(Direction.NORTH));
                    if(state.hasProperty(Props.MIRRORED))state=stateProperty(state,Props.MIRRORED,false);
                    scene.world.setBlock(at,state,false);
                    if(!rel.equals(master))scene.world.modifyBlockEntity(at,Dummy,be=>be.getHelper().setPositionInMB(rel));
                });
            });
            scene.idle(12);
        }
        function runIE(scene,spec) {
            if(!spec.multiblocks)return;
            var MB=Java.loadClass('blusunrize.immersiveengineering.common.blocks.multiblocks.IEMultiblocks');
            var Rotation=Java.loadClass('net.minecraft.world.level.block.Rotation');
            var Master=Java.loadClass('blusunrize.immersiveengineering.api.multiblocks.blocks.registry.MultiblockBlockEntityMaster');
            spec.multiblocks.forEach(m=>{
                var at=bp(m.origin).offset(MB[m.key].getMasterFromOriginOffset().rotate(Rotation[m.rotation]));
                scene.world.modifyBlockEntity(at,Master,be=>{
                    var state=be.getHelper().getState();
                    var active=new Compound();active.putBoolean('active',true);
                    state.readSyncNBT(active,scene.world.getHolderLookupProvider());
                    if(m.key==='BUCKET_WHEEL'){
                        state.active=true;
                        state.digStacks.set(0,stack('ae2:certus_quartz_crystal'));
                        state.digStacks.set(3,stack('ae2:sky_stone_block'));
                    }
                });
            });
        }
        function formNuclear(scene,spec) {
            var ComponentBlock=Java.loadClass('com.github.alexmodguy.alexscaves.server.block.NuclearFurnaceComponentBlock');
            var active=stateProperty(Registry.BLOCK.get(RL.parse('alexscaves:nuclear_furnace_component')).defaultBlockState(),ComponentBlock.ACTIVE,true);
            for(var x=5;x<=6;x++)for(var y=2;y<=3;y++)for(var z=5;z<=6;z++)scene.world.setBlock(new Pos(x,y,z),active,false);
            var Nuclear=Java.loadClass('com.github.alexmodguy.alexscaves.server.block.NuclearFurnaceBlock');
            scene.world.setBlock(new Pos(5,2,5),stateProperty(Registry.BLOCK.get(RL.parse('alexscaves:nuclear_furnace')).defaultBlockState(),Nuclear.FACING,Direction.NORTH),false);
            scene.idle(18);
        }
        function entity(scene,id,point) {
            return scene.world.createEntity(level=>{
                var e=Registry.ENTITY_TYPE.get(RL.parse(id)).create(level);
                e.setPos(point[0],point[1],point[2]);e.setNoGravity(true);
                if(e instanceof Java.loadClass('net.minecraft.world.entity.Mob'))e.setNoAi(true);
                return e;
            });
        }
        function sampleData() {
            var Data=Java.loadClass('blusunrize.immersiveengineering.common.items.CoresampleItem$ItemData');
            var Position=Java.loadClass('blusunrize.immersiveengineering.common.items.CoresampleItem$SamplePosition');
            var Vein=Java.loadClass('blusunrize.immersiveengineering.common.items.CoresampleItem$VeinSample');
            var List=Java.loadClass('java.util.List');
            var Level=Java.loadClass('net.minecraft.world.level.Level');
            return new Data(new Position(Level.OVERWORLD,0,0),List.of(new Vein(RL.parse('immersiveengineering:mineral/banded_iron'),0,1,1)),0);
        }
        function projector(scene,util,heading,actors) {
            var Projector=Java.loadClass('nl.townsandkingdoms.core.projector.ProjectorBlockEntity');
            scene.world.modifyBlockEntityNBT(util.select.position(new Pos(4,1,4)),Projector,nbt=>{
                var settings=new Compound();settings.putString('mode','TEXT');settings.putString('text',heading.split(' | ').join('\n'));settings.putString('image','');
                settings.putFloat('width',2.3);settings.putFloat('elevation',1.1);settings.putBoolean('billboard',true);settings.putBoolean('background',true);settings.putBoolean('bobbing',false);
                var program=new Compound();program.putBoolean('areaOnly',true);
                settings.put('program',program);settings.put('palette',new Compound());
                nbt.put('projector',settings);
            });
            // Workshop's renderer measures real player coordinates and uses the
            // real world's clock. A Ponder-local display keeps this preview visible
            // at any player location, including paused single-player worlds.
            if(actors.projected)scene.world.modifyEntity(actors.projected,e=>e.discard());
            actors.projected=scene.world.createEntity(level=>{
                var e=Registry.ENTITY_TYPE.get(RL.parse('minecraft:text_display')).create(level);
                var nbt=new Compound();nbt.putString('text',JSON.stringify({text:heading.replace(/&[0-9a-fklmnor]/g,'').split(' | ').join('\n'),color:'light_purple'}));
                nbt.putString('billboard','center');nbt.putString('alignment','center');nbt.putByte('text_opacity',-1);nbt.putInt('background',-1071630288);nbt.putInt('line_width',200);nbt.putBoolean('shadow',true);nbt.putFloat('view_range',16);
                var scale=new Tags(),F=Java.loadClass('net.minecraft.nbt.FloatTag');for(var j=0;j<3;j++)scale.add(F.valueOf(2));
                var transform=new Compound();transform.put('scale',scale);
                var zero=new Tags(),identity=new Tags();for(var j=0;j<3;j++){zero.add(F.valueOf(0));identity.add(F.valueOf(0));}identity.add(F.valueOf(1));
                transform.put('translation',zero);transform.put('left_rotation',identity);transform.put('right_rotation',identity.copy());nbt.put('transformation',transform);
                var brightness=new Compound();brightness.putInt('block',15);brightness.putInt('sky',15);nbt.put('brightness',brightness);
                e.load(nbt);e.setPos(4.5,4.5,4.5);return e;
            });
        }
        function performAction(scene,util,s,spec,actors) {
            var a=s.action;if(!a)return;
            if(a==='ie_form'){
                clickControl(scene,s.textPoint,'immersiveengineering:hammer',false);formIE(scene,spec);runIE(scene,spec);
            } else if(a==='ie_operate'){
                runIE(scene,spec);particles(scene,spec.centre,'ELECTRIC_SPARK',12);
                if(spec.oreInput&&spec.belts){
                    var line=spec.belts[0].positions;
                    var ore=scene.world.createItemOnBelt(bp(line[0]),Direction.UP,stack('ae2:certus_quartz_crystal'));
                    scene.idle(15*(line.length-1));scene.world.stallBeltItem(ore,true);
                }
            } else if(a==='nuclear_form'){
                scene.world.hideSection(util.select.position(new Pos(6,3,6)),Direction.UP);scene.idle(20);
                clickControl(scene,[6.5,3.6,6.5],'alexscaves:nuclear_furnace_component',false);
                scene.world.showSection(util.select.position(new Pos(6,3,6)),Direction.DOWN);scene.idle(20);formNuclear(scene,spec);
            } else if(a==='nuclear_run'||a==='nuclear_output'){
                var Furnace=Java.loadClass('com.github.alexmodguy.alexscaves.server.block.blockentity.NuclearFurnaceBlockEntity');
                scene.world.modifyBlockEntityNBT(util.select.position(new Pos(5,2,5)),Furnace,nbt=>{nbt.putInt('FissionTime',1000);nbt.putInt('CookTime',20);nbt.putInt('MaxCookTime',40);});
                scene.world.modifyBlockEntity(new Pos(5,2,5),Furnace,be=>{be.setItem(0,stack(a==='nuclear_run'?'minecraft:raw_iron':s.input));be.setItem(1,stack('alexscaves:uranium_rod'));be.setItem(2,stack('alexscaves:metal_barrel'));if(a==='nuclear_output')be.setItem(3,stack(s.output));});
                particles(scene,[6,4.2,6],'SMOKE',12);
            } else if(a.indexOf('survey_')===0){
                if(a==='survey_hints'||a==='survey_grid'){
                    for(var x=1;x<12;x+=3)scene.overlay.showOutline(Palette.BLUE,'survey_'+a+'_'+x,util.select.fromTo(x,0,1,x+2,0,10),95);
                    clickControl(scene,[2.5,1.2,2.5],'immersiveengineering:survey_tools',false);
                    particles(scene,[2.5,1.2,2.5],'HAPPY_VILLAGER',6);
                }
                if(a==='survey_drill'){
                    var Drill=Java.loadClass('blusunrize.immersiveengineering.common.blocks.metal.SampleDrillBlockEntity');
                    clickControl(scene,[6.5,2,6.5],null,false);
                    scene.world.modifyBlockEntity(new Pos(6,1,6),Drill,be=>{be.isRunning=true;be.process=1;be.energyStorage.receiveEnergy(8000,false);});
                }
                if(a==='survey_sample'){
                    var Core=Java.loadClass('blusunrize.immersiveengineering.common.blocks.stone.CoresampleBlockEntity');
                    scene.world.setBlock(new Pos(8,1,6),Registry.BLOCK.get(RL.parse('immersiveengineering:coresample')).defaultBlockState(),false);
                    scene.world.modifyBlockEntity(new Pos(8,1,6),Core,be=>{be.containedSample=sampleData();});
                    scene.world.showSection(util.select.position(new Pos(8,1,6)),Direction.UP);
                    clickControl(scene,[8.5,2,6.5],'immersiveengineering:coresample',false);
                }
            } else if(a.indexOf('pencil_')===0){
                var target=a==='pencil_first'?[2,1,5]:[6,3,5];
                clickControl(scene,[target[0]+.5,target[1]+.8,target[2]+.5],'tnkcore:measuring_pencil',a==='pencil_clear');
                if(a==='pencil_second')scene.overlay.showOutline(Palette.GREEN,'measured_volume',util.select.fromTo(2,1,5,6,3,5),100);
            } else if(a.indexOf('brush_')===0||a.indexOf('satchel_')===0){
                clickControl(scene,[4.5,2,4.5],s.input,a==='brush_palette');
                if(a==='brush_paint'||a==='satchel_build'){
                    var choices=['minecraft:stone_bricks','minecraft:mossy_stone_bricks','minecraft:cracked_stone_bricks'];
                    for(var x=2;x<=6;x++)for(var y=1;y<=3;y++){
                        scene.world.setBlock(new Pos(x,y,5),Registry.BLOCK.get(RL.parse(a==='brush_paint'?choices[(x+y)%3]:'minecraft:stone_bricks')).defaultBlockState(),true);scene.idle(3);
                    }
                }
            } else if(a==='mob_capture'){
                actors.pig=entity(scene,'minecraft:pig',[2.5,1,4.5]);scene.idle(20);
                clickControl(scene,[2.5,2,4.5],'tnkcore:mob_cage',false);particles(scene,[2.5,1.5,4.5],'POOF',14);
                scene.world.modifyEntity(actors.pig,e=>e.discard());
                itemControl(scene,[4.5,2.3,3.5],Item.of('tnkcore:mob_cage',{'minecraft:custom_data':{caged_mob:{id:'minecraft:pig'}}}),75);
            } else if(a==='mob_release'){
                clickControl(scene,[6.5,1.2,4.5],'tnkcore:mob_cage',false);entity(scene,'minecraft:pig',[6.5,1,4.5]);particles(scene,[6.5,1.5,4.5],'HAPPY_VILLAGER',10);
            } else if(a==='spawner_capture'){
                clickControl(scene,[2.5,2,4.5],'tnkcore:spawner_core',false);scene.world.setBlock(new Pos(2,1,4),Registry.BLOCK.get(RL.parse('minecraft:air')).defaultBlockState(),true);
                itemControl(scene,[4.5,2.3,3.5],Item.of('tnkcore:spawner_core',{'minecraft:custom_data':{tnkcore_spawner:{SpawnData:{entity:{id:'minecraft:pig'}}}}}),75);
            } else if(a==='spawner_release'){
                clickControl(scene,[6.5,1.1,4.5],'tnkcore:spawner_core',false);scene.world.setBlock(new Pos(6,1,4),Registry.BLOCK.get(RL.parse('minecraft:spawner')).defaultBlockState(),true);scene.world.showSection(util.select.position(new Pos(6,1,4)),Direction.UP);
            } else if(a.indexOf('mirror_')===0){
                var group=spec.id.indexOf('chorus')>=0;
                if(a==='mirror_bind'||a==='mirror_group'){
                    clickControl(scene,[2.5,1.3,3.5],group?'tnkcore:chorus_mirror':'tnkcore:magic_mirror',true);
                    actors.traveller=entity(scene,'minecraft:armor_stand',[6.5,1,5.5]);
                    if(group)actors.companion=entity(scene,'minecraft:pig',[5.5,1,5.5]);
                } else if(a==='mirror_travel'||a==='mirror_group_travel'){
                    clickControl(scene,[6.5,2,5.5],group?'tnkcore:chorus_mirror':'tnkcore:magic_mirror',false,40);
                    particles(scene,[6.5,2,5.5],'PORTAL',25);scene.idle(40);
                    scene.world.modifyEntity(actors.traveller,e=>e.setPos(2.5,1,3.5));
                    if(group&&actors.companion)scene.world.modifyEntity(actors.companion,e=>e.setPos(1.5,1,3.5));
                    particles(scene,[2.5,2,3.5],'END_ROD',20);
                }
            } else if(a.indexOf('projector_')===0||a.indexOf('area_')===0){
                clickControl(scene,[4.5,2,4.5],'tnkcore:quest_projector',false);
                projector(scene,util,a==='projector_style'?'&d&lWorkshop&r | &fA clearer projection':'&d&lWorkshop&r | &fText-mode preview',actors);
                if(a.indexOf('area_')===0)scene.overlay.showOutline(Palette.BLUE,'projector_area',util.select.fromTo(1,0,1,7,3,7),100);
            } else if(a.indexOf('community_')===0||a.indexOf('trading_')===0){
                clickControl(scene,[4.5,2,5.5],null,false);
                if(a==='community_deliver')particles(scene,[4.5,2,5.5],'HAPPY_VILLAGER',15);
                if(a==='community_reward')itemControl(scene,[4.5,2.5,5.5],'minecraft:emerald',80);
            }
        }

        function setupME(scene,util,spec){
            var cfg=spec.me;if(!cfg)return;
            var Cable=Java.loadClass('appeng.blockentity.networking.CableBusBlockEntity');
            cfg.cables.forEach(p=>scene.world.modifyBlockEntity(bp(p),Cable,be=>{
                be.addPart(Registry.ITEM.get(RL.parse('ae2:fluix_glass_cable')),null,null);
            }));
            if(cfg.part)scene.world.modifyBlockEntity(bp(cfg.part.pos),Cable,be=>be.addPart(Registry.ITEM.get(RL.parse(cfg.part.item)),Direction[cfg.part.side],null));
            var Drive=Java.loadClass('appeng.blockentity.storage.DriveBlockEntity');
            scene.world.modifyBlockEntity(bp(cfg.drive),Drive,be=>{
                be.getInternalInventory().setItemDirect(0,stack(cfg.cell));
                var tag=be.saveWithoutMetadata(scene.world.getHolderLookupProvider());
                var visual=new Compound(),cell=new Compound();visual.putBoolean('online',true);
                cell.putString('id',cfg.cell);cell.putString('state',cfg.cell.indexOf('infinity')>=0?'types_full':'empty');visual.put('cell0',cell);tag.put('visual',visual);
                be.loadAdditional(tag,scene.world.getHolderLookupProvider());be.requestModelDataUpdate();
            });
            var Energy=Java.loadClass('appeng.blockentity.networking.EnergyCellBlockEntity');
            scene.world.modifyBlockEntityNBT(util.select.position(new Pos(2,1,3)),Energy,nbt=>nbt.putDouble('internalCurrentPower',200000));
        }
        function newAction(scene,util,s,spec,actors){
            var a=s.action||'';
            if(a==='mirror_travel'||a==='mirror_group_travel'){
                actors.traveller=entity(scene,'minecraft:armor_stand',[6.5,1,5.5]);
                if(a==='mirror_group_travel')actors.companion=entity(scene,'minecraft:pig',[5.5,1,5.5]);
            }
            if(a==='me_insert')clickControl(scene,[3.5,1.5,2],spec.me.cell,false);
            else if(a==='me_export'){
                clickControl(scene,[5.9,1.5,2.5],spec.me.resource,false);
                showStack(scene,util,[7.5,1.85,2.5],spec.me.resource,[7,1,2]);
            }else if(a==='torch_existing')entity(scene,'minecraft:creeper',[5.5,1,3.5]);
            else if(a==='torch_passive')entity(scene,'minecraft:pig',[5.5,1,3.5]);
            else if(a==='torch_light'){
                scene.world.setBlock(new Pos(2,2,3),Registry.BLOCK.get(RL.parse('torchmaster:invisible_light')).defaultBlockState(),false);
                scene.overlay.showOutline(Palette.BLUE,'invisible_light',util.select.position(new Pos(2,2,3)),75);
            }else if(a==='torch_cleanup'){
                clickControl(scene,[2.5,2.5,3.5],'torchmaster:frozen_pearl',false);
                scene.world.setBlock(new Pos(2,2,3),Registry.BLOCK.get(RL.parse('minecraft:air')).defaultBlockState(),false);
            }else if(a==='catalog_control')clickControl(scene,s.handPoint,Object.prototype.hasOwnProperty.call(s,'control')?s.control:s.input,!!s.sneak);
            else if(a==='craft_layout'){
                spec.crafterItems.forEach(c=>{
                    scene.world.setKineticSpeed(util.select.position(bp(c.pos)),(c.pos[0]+c.pos[1])%2?32:-32);
                    scene.world.modifyBlockEntity(bp(c.pos),Crafter,be=>be.getInventory().setStackInSlot(0,stack(c.item)));
                });
                scene.overlay.showOutline(Palette.BLUE,'crafter_output',util.select.position(bp(spec.craftOutput)),85);
                scene.idle(25);showStack(scene,util,spec.centre,spec.craftResult,spec.craftOutput);
            }else performAction(scene,util,s,spec,actors);
        }
        function program(builder,util,spec){
            var scene=new CreateScene(builder),yaw=spec.yaw===undefined?145:spec.yaw;
            scene.configureBasePlate(spec.viewOffsetX||0,spec.viewOffsetZ||0,spec.viewSize||spec.size);
            scene.scaleSceneView(spec.scale);scene.setSceneOffsetY(-.5);
            // Absolute starting views are repeatable after replay/seek. Each small
            // lesson owns one view; there are no chained relative camera swings.
            scene.addInstruction(p=>{
                p.getTransform().yRotation.startWithValue(yaw);
                p.getTransform().xRotation.startWithValue(-30);
                p.builder().scaleSceneView(spec.scale);
            });
            scene.showBasePlate();scene.idle(6);
            if(spec.layout==='generator')scene.world.showSection(util.select.fromTo(0,1,0,spec.size-1,1,spec.size-1),Direction.DOWN);
            else if(spec.layout==='ie'&&!spec.formInitially){
                for(var y=1;y<spec.height;y++){scene.world.showSection(util.select.fromTo(0,y,0,spec.size-1,y,spec.size-1),Direction.DOWN);scene.idle(6);}
            }else scene.world.showSection(util.select.fromTo(0,1,0,spec.size-1,spec.height,spec.size-1),Direction.DOWN);
            scene.idle(12);power(scene,util,spec,true);initialiseBelts(scene,spec);
            spec.steps.forEach(s=>{if(s.machine==='laser')scene.world.setKineticSpeed(util.select.position(bp(s.machinePos)),spec.rpm||32);});
            if(spec.multiblocks&&spec.multiblocks.length&&(spec.layout!=='ie'||spec.formInitially)){formIE(scene,spec);runIE(scene,spec);}
            if(spec.formNuclearInitially)formNuclear(scene,spec);
            if(spec.outputFilter)scene.world.setFilterData(util.select.position(bp(spec.outputFilter.pos)),Funnel,stack(spec.outputFilter.item));
            if(spec.electricalLinks){
                var Connector=Java.loadClass('com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity'),Wire=Java.loadClass('com.mrh0.createaddition.energy.WireType');
                var ends=spec.electricalLinks;
                scene.world.modifyBlockEntity(bp(ends[0]),Connector,be=>be.setNode(0,0,bp(ends[1]),Wire.COPPER));
                scene.world.modifyBlockEntity(bp(ends[1]),Connector,be=>be.setNode(0,0,bp(ends[0]),Wire.COPPER));
            }
            if(spec.aeParts&&!spec.me){
                var Cable=Java.loadClass('appeng.blockentity.networking.CableBusBlockEntity');
                spec.aeParts.forEach(p=>scene.world.modifyBlockEntity(bp(p),Cable,be=>be.addPart(Registry.ITEM.get(RL.parse('ae2:fluix_glass_cable')),null,null)));
            }
            setupME(scene,util,spec);
            if(spec.layout==='electrical'){
                var Connector=Java.loadClass('com.mrh0.createaddition.blocks.connector.base.AbstractConnectorBlockEntity'),Wire=Java.loadClass('com.mrh0.createaddition.energy.WireType');
                scene.world.modifyBlockEntity(new Pos(3,2,6),Connector,be=>be.setNode(0,0,new Pos(9,2,6),Wire.COPPER));
                scene.world.modifyBlockEntity(new Pos(9,2,6),Connector,be=>be.setNode(0,0,new Pos(3,2,6),Wire.COPPER));
            }
            if(spec.crafterItems&&!spec.craftResult)spec.crafterItems.forEach(c=>scene.world.modifyBlockEntity(bp(c.pos),Crafter,be=>be.getInventory().setStackInSlot(0,stack(c.item))));
            if(spec.depotItems)spec.depotItems.forEach(c=>showStack(scene,util,[0,0,0],c.item,c.pos));
            if(spec.displayDepot)showStack(scene,util,spec.centre,spec.displayItem,spec.displayDepot);
            var actors={},previous=null,beltLink=null,at=null;
            function putBelt(pos,value){scene.world.removeItemsFromBelt(bp(pos));var link=scene.world.createItemOnBelt(bp(pos),Direction.UP,stack(value));scene.world.stallBeltItem(link,true);return link;}
            function advance(pos){if(beltLink&&at&&String(at)!==String(pos)){scene.world.stallBeltItem(beltLink,false);scene.idle(15*Math.abs(pos[0]-at[0]));scene.world.stallBeltItem(beltLink,true);}at=pos;}
            for(var i=0;i<spec.steps.length;i++){
                var s=spec.steps[i],input=null;
                if(spec.layout==='generator'&&i===3){scene.world.showSection(util.select.fromTo(0,2,0,spec.size-1,spec.height,spec.size-1),Direction.DOWN);scene.idle(15);}
                if(previous&&!s.displayOnly&&!spec.sequence){removeStack(scene,previous.entity,previous.depot);previous=null;}
                if(s.nativeBelt){if(beltLink)advance(s.beltPos);else{beltLink=putBelt(s.beltPos,s.input);at=s.beltPos;}}
                else if(!s.displayOnly){input=showStack(scene,util,s.itemPoint,s.input,s.depot||s.resultDepot);}
                text(scene,s.textKey,s.textPoint,Palette.WHITE,s.repeat?Math.max(110,50*s.repeat):s.duration||90);
                newAction(scene,util,s,spec,actors);
                if(spec.layout==='generator'&&s.action==='generator_water'){scene.world.showSection(util.select.fromTo(0,2,2,2,2,4),Direction.DOWN);scene.overlay.showOutline(Palette.BLUE,'water_drop_trench',util.select.position(new Pos(2,1,3)),90);}
                if(s.highlight!==false)scene.overlay.showOutline(Palette.INPUT,spec.id+':target_'+i,util.select.position(bp(s.focus||s.machinePos)),70);
                for(var n=0;n<(s.repeat||1);n++){
                    var pass=s;
                    if(s.passes){pass={};for(var k in s)pass[k]=s[k];for(var k in s.passes[n])pass[k]=s.passes[n][k];advance(pass.beltPos);}
                    operation(scene,util,pass,n);scene.idle(20);
                }
                if(s.nativeBelt&&!s.displayOnly){var finalPos=s.passes?s.passes[s.passes.length-1].beltPos:s.beltPos;beltLink=putBelt(finalPos,s.output);at=finalPos;}
                else if(!s.displayOnly){removeStack(scene,input,s.depot||s.resultDepot);var depot=s.resultDepot||s.depot;var result=showStack(scene,util,s.itemPoint,s.output,depot);previous={entity:result,depot:depot};}
                scene.idle(s.repeat?25:Math.max(30,(s.duration||90)-20));
                if(s.machine==='laser'&&!s.disabled){var Laser=Java.loadClass('nl.mikaaah.alchemicallaser.LaserBlockEntity'),Phase=Java.loadClass('nl.mikaaah.alchemicallaser.LaserBlockEntity$Phase');scene.world.modifyBlockEntity(bp(s.machinePos),Laser,be=>{be.phase=Phase.IDLE;});}
            }
            if(spec.sequence&&beltLink&&at){advance([spec.outputFilter.pos[0],1,2]);scene.idle(10);}
            scene.idle(20);scene.markAsFinished();
        }

        var valid=definitions.filter(available);
        var replacements=valid.filter(s=>s.topic==='NATIVE-LASER');
        // Only remove the native attachment set if every replacement is usable.
        if(replacements.length===definitions.filter(s=>s.topic==='NATIVE-LASER').length) {
            var attachments=[];
            replacements.forEach(s=>s.anchors.forEach(id=>{if(Item.exists(id)&&attachments.indexOf(id)<0)attachments.push(id);}));
            event.remove(attachments);
        }
        var count=0;
        definitions.forEach(spec => {
            if(!available(spec)) {
                var missingItems=spec.items.filter(id=>!Item.exists(id));
                var missingBlocks=spec.blocks.filter(id=>!Registry.BLOCK.containsKey(RL.parse(id)));
                var missingFluids=spec.fluids.filter(id=>!Registry.FLUID.containsKey(RL.parse(id)));
                console.warn('[TNK Ponder] Skipped '+spec.id+'; unavailable content: '+missingItems.concat(missingBlocks,missingFluids).join(', '));
                return;
            }
            
            var anchors=spec.anchors.filter(id=>Item.exists(id));
            event.create(anchors).scene(spec.id,spec.title,spec.structure,(scene,util)=>program(scene,util,spec));
            count++;
        });
        console.info('[TNK Ponder] Registered '+count+' authored scenes. Native addon libraries remain available.');
    });
})();
