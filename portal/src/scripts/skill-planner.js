import skills from '../data/skills.json';
import {createSkillModel,spentPoints,allocationState,validateSelection,refundSelection,planSkillRoute,summarizeSelection,encodeBuild,decodeBuild,pointsForLevel,levelForPoints,PASSIVE_CAPS} from './skill-planner-core.mjs';

const NS='http://www.w3.org/2000/svg';
const rounded=value=>Math.round(value*10000)/10000;
const pointLabel=value=>`${value} point${value===1?'':'s'}`;
const human=value=>value.replace(/^generic\.|^player\.|^ars_nouveau\.perk\./,'').replace(/[_.]/g,' ').replace(/\b\w/g,s=>s.toUpperCase());
const modNames={minecraft:'Character',apothic_attributes:'Apothic Attributes',puffish_attributes:'Pufferfish Attributes',irons_spellbooks:"Iron’s Spells",ars_nouveau:'Ars Nouveau'};
const attributeNames={max_health:'Maximum health',attack_damage:'Attack damage',attack_speed:'Attack speed',movement_speed:'Movement speed',armor:'Armor',armor_toughness:'Armor toughness',crit_chance:'Critical chance',crit_damage:'Critical damage',max_mana:'Maximum mana',mana_regen:'Mana regeneration',spell_power:'Spell power',spell_resist:'Spell resistance',cast_time_reduction:'Cast time reduction',cooldown_reduction:'Cooldown reduction',block_break_speed:'Block breaking speed'};
function svgElement(tag,attributes={}) {const node=document.createElementNS(NS,tag);for(const [k,v] of Object.entries(attributes))node.setAttribute(k,String(v));return node;}
function valueText(value,percent=false){return (value>=0?'+':'−')+rounded(Math.abs(value)*(percent?100:1))+(percent?'%':'');}
function describeAttribute(reward){
  const [namespace,id]=reward.attribute.split(':');
  const simple=id.replace(/^generic\.|^player\.|^ars_nouveau\.perk\./,'');
  return {name:attributeNames[simple]||human(simple),source:modNames[namespace]||human(namespace),
    amount:valueText(reward.value,reward.operation==='multiply_base'||reward.operation==='multiply_total'||['crit_chance','crit_damage'].includes(simple)),
    suffix:reward.operation==='multiply_base'?' · base':reward.operation==='multiply_total'?' · total':''};
}

export function initSkillPlanners(scope=document){
  for(const root of scope.querySelectorAll('[data-skill-planner]')) {
    if(root.dataset.skillReady)continue;
    root.dataset.skillReady='true';
    mountPlanner(root);
  }
}

function mountPlanner(root){
  const model=createSkillModel(skills);
  const get=name=>root.querySelector('[data-skill-'+name+']');
  const svg=root.querySelector('svg'),cameraGroup=get('camera'),canvas=root.querySelector('.sp-canvas');
  const tooltip=get('tooltip'),budgetInput=get('budget'),levelInput=get('level'),search=get('search'),status=get('status');
  const searchResults=get('results');
  const branchName=id=>skills.branches.find(b=>b.id===id)?.title||human(id);
  const base=root.dataset.base || '/';
  let selected=new Set(),budget=model.pointCap,level=100,currentId='',history=[];
  let planning=false,routeTarget='',route=null;
  let width=1,height=1,fitScale=.25,camera={x:0,y:0,scale:.25},paint=0,initialFit=true;
  const graphics=new Map(),lines=[];
  const pointerState=new Map();let gesture=null;
  const storageKey='tnk.skills.build';
  const announce=message=>{status.textContent=message;};

  const connectionGroup=svgElement('g',{'aria-hidden':'true'}),nodeGroup=svgElement('g');
  cameraGroup.append(connectionGroup,nodeGroup);
  for(const [a,b]of skills.edges){
    const from=model.byId.get(a),to=model.byId.get(b);
    const line=svgElement('line',{x1:from.x,y1:from.y,x2:to.x,y2:to.y,class:'sp-connection'});
    connectionGroup.append(line);lines.push({a,b,line});
  }
  for(const node of skills.nodes){
    const radius=10.5*node.size;
    const group=svgElement('g',{transform:`translate(${node.x} ${node.y})`,class:'sp-node',role:'button',tabindex:node.root?'0':'-1','data-node-id':node.id});
    const title=svgElement('title');title.textContent=node.title;
    const border=radius*1.24;
    const frame=svgElement('image',{class:'sp-node-frame',href:base+skills.frameStyles[node.frame].locked,x:-border,y:-border,width:border*2,height:border*2,'aria-hidden':'true'});
    const icon=svgElement('image',{class:'sp-node-icon',href:base+node.icon,x:-radius*.78,y:-radius*.78,width:radius*1.56,height:radius*1.56,'aria-hidden':'true'});
    group.append(title,svgElement('circle',{r:radius*1.42}),frame,icon,svgElement('circle',{r:radius*1.42+4,class:'sp-route-ring','aria-hidden':'true'}));
    if(node.root){const label=svgElement('text',{x:0,y:-radius-12,'text-anchor':'middle',fill:'currentColor','font-size':13,'font-weight':600,'aria-hidden':'true'});label.textContent=branchName(node.branch);group.append(label);}
    group.addEventListener('pointerenter',event=>{if(event.pointerType!=='touch')showTooltip(node,event);});
    group.addEventListener('pointermove',event=>{if(!gesture&&event.pointerType!=='touch')showTooltip(node,event);});
    group.addEventListener('pointerleave',()=>tooltip.hidden=true);
    group.addEventListener('focus',()=>selectNode(node.id,false));
    group.addEventListener('contextmenu',event=>{event.preventDefault();selectNode(node.id,false);refund(node.id);});
    group.addEventListener('keydown',event=>{
      if(['Enter',' '].includes(event.key)){event.preventDefault();activateNode(node.id);}
      if(event.key==='Delete'||event.key==='Backspace'){event.preventDefault();refund(node.id);}
      if(event.key.startsWith('Arrow')){
        event.preventDefault();const direction={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[event.key];
        const neighbor=[...model.adjacency.get(node.id)].map(id=>model.byId.get(id)).filter(n=>(n.x-node.x)*direction[0]+(n.y-node.y)*direction[1]>0).sort((a,b)=>Math.hypot(a.x-node.x,a.y-node.y)-Math.hypot(b.x-node.x,b.y-node.y))[0];
        if(neighbor)selectNode(neighbor.id,true,true);
      }
    });
    nodeGroup.append(group);graphics.set(node.id,group);
  }

  function drawCamera(){
    if(paint)return;
    paint=requestAnimationFrame(()=>{cameraGroup.setAttribute('transform',`translate(${width/2} ${height/2}) scale(${camera.scale}) translate(${-camera.x} ${-camera.y})`);paint=0;});
  }
  function measure(){
    const box=canvas.getBoundingClientRect();width=Math.max(1,box.width);height=Math.max(1,box.height);svg.setAttribute('viewBox',`0 0 ${width} ${height}`);
    const xs=skills.nodes.map(n=>n.x),ys=skills.nodes.map(n=>n.y);
    fitScale=Math.min(width/(Math.max(...xs)-Math.min(...xs)+180),height/(Math.max(...ys)-Math.min(...ys)+180));
    if(initialFit){fit();initialFit=false;}else drawCamera();
  }
  function fit(){camera={x:0,y:0,scale:fitScale};drawCamera();}
  function clampScale(value){return Math.max(fitScale*.45,Math.min(fitScale*15,value));}
  function localPoint(event){const box=svg.getBoundingClientRect();return{x:event.clientX-box.left,y:event.clientY-box.top};}
  function worldAt(point){return{x:camera.x+(point.x-width/2)/camera.scale,y:camera.y+(point.y-height/2)/camera.scale};}
  function zoom(factor,point={x:width/2,y:height/2}){
    const anchor=worldAt(point);camera.scale=clampScale(camera.scale*factor);camera.x=anchor.x-(point.x-width/2)/camera.scale;camera.y=anchor.y-(point.y-height/2)/camera.scale;drawCamera();
  }
  function startGesture(){
    const points=[...pointerState.values()];
    if(points.length>1){const midpoint={x:(points[0].x+points[1].x)/2,y:(points[0].y+points[1].y)/2};gesture={kind:'pinch',distance:Math.max(1,Math.hypot(points[0].x-points[1].x,points[0].y-points[1].y)),scale:camera.scale,anchor:worldAt(midpoint),moved:true};}
    else if(points.length===1)gesture={kind:'pan',start:points[0],camera:{...camera},node:points[0].node,moved:false};
    else gesture=null;
  }
  svg.addEventListener('pointerdown',event=>{
    if(event.button!==0&&event.pointerType!=='touch')return;
    const point=localPoint(event);point.node=event.target.closest('[data-node-id]')?.getAttribute('data-node-id')||'';
    pointerState.set(event.pointerId,point);svg.setPointerCapture(event.pointerId);startGesture();tooltip.hidden=true;
  });
  svg.addEventListener('pointermove',event=>{
    if(!pointerState.has(event.pointerId))return;
    const previous=pointerState.get(event.pointerId);pointerState.set(event.pointerId,{...localPoint(event),node:previous.node});
    const points=[...pointerState.values()];
    if(gesture?.kind==='pinch'&&points.length>1){
      const midpoint={x:(points[0].x+points[1].x)/2,y:(points[0].y+points[1].y)/2};
      camera.scale=clampScale(gesture.scale*Math.hypot(points[0].x-points[1].x,points[0].y-points[1].y)/gesture.distance);
      camera.x=gesture.anchor.x-(midpoint.x-width/2)/camera.scale;camera.y=gesture.anchor.y-(midpoint.y-height/2)/camera.scale;drawCamera();
    }else if(gesture?.kind==='pan'){
      const point=points[0],dx=point.x-gesture.start.x,dy=point.y-gesture.start.y;
      if(Math.hypot(dx,dy)>4)gesture.moved=true;
      if(gesture.moved){camera.x=gesture.camera.x-dx/camera.scale;camera.y=gesture.camera.y-dy/camera.scale;svg.classList.add('is-dragging');drawCamera();}
    }
  });
  function releasePointer(event,cancel=false){
    if(!pointerState.has(event.pointerId))return;
    const clicked=!cancel&&gesture?.kind==='pan'&&!gesture.moved?gesture.node:'';
    const wasPinching=gesture?.kind==='pinch';pointerState.delete(event.pointerId);
    if(svg.hasPointerCapture(event.pointerId))svg.releasePointerCapture(event.pointerId);
    startGesture();if(wasPinching&&gesture)gesture.moved=true;
    if(pointerState.size===0)svg.classList.remove('is-dragging');
    if(clicked)activateNode(clicked);
  }
  svg.addEventListener('pointerup',event=>releasePointer(event));svg.addEventListener('pointercancel',event=>releasePointer(event,true));
  svg.addEventListener('wheel',event=>{event.preventDefault();zoom(Math.exp(-Math.max(-120,Math.min(120,event.deltaY))*.002),localPoint(event));tooltip.hidden=true;},{passive:false});
  svg.addEventListener('keydown',event=>{
    if(event.target!==svg)return;
    const direction={ArrowLeft:[-1,0],ArrowRight:[1,0],ArrowUp:[0,-1],ArrowDown:[0,1]}[event.key];
    if(direction){event.preventDefault();camera.x+=direction[0]*70/camera.scale;camera.y+=direction[1]*70/camera.scale;drawCamera();}
    if(event.key==='+'||event.key==='='){event.preventDefault();zoom(1.35);}
    if(event.key==='-'){event.preventDefault();zoom(1/1.35);}
    if(event.key==='Home'){event.preventDefault();fit();}
  });
  // Attribute values contain no selector fragments; the view controls use explicit selectors.
  root.querySelector('[data-skill-zoom="in"]').addEventListener('click',()=>zoom(1.35));
  root.querySelector('[data-skill-zoom="out"]').addEventListener('click',()=>zoom(1/1.35));
  get('fit').addEventListener('click',fit);
  const resize=new ResizeObserver(measure);resize.observe(canvas);

  function save(){try{localStorage.setItem(storageKey,encodeBuild(model,selected,budget));}catch{}}
  function checkpoint(){history.push({selected:new Set(selected),budget,level});if(history.length>30)history.shift();}
  function update(){
    const spent=spentPoints(model,selected);get('spent').textContent=String(spent);get('available').textContent=String(budget-spent);budgetInput.value=String(budget);levelInput.value=level===null?'':String(level);get('undo').disabled=history.length===0;
    for(const node of skills.nodes){
      const group=graphics.get(node.id),owned=selected.has(node.id),ready=allocationState(model,selected,node.id,budget).allowed;
      group.classList.toggle('is-allocated',owned);group.classList.toggle('is-ready',ready);group.classList.toggle('is-root',node.root);group.classList.toggle('is-focused',node.id===currentId);
      group.setAttribute('aria-label',`${node.title}, ${branchName(node.branch)}, ${owned?'allocated':ready?'available':'locked'}, ${node.cost} point${node.cost===1?'':'s'}`);
      group.setAttribute('aria-pressed',String(owned));group.setAttribute('tabindex',owned||ready||node.id===currentId?'0':'-1');
      const connected=node.root||[...model.adjacency.get(node.id)].some(id=>selected.has(id));
      const frameState=owned?'unlocked':ready?'affordable':connected?'available':'locked';
      const frame=group.querySelector('.sp-node-frame'),frameUrl=base+skills.frameStyles[node.frame][frameState];
      if(frame.getAttribute('href')!==frameUrl)frame.setAttribute('href',frameUrl);
    }
    for(const {a,b,line}of lines){line.classList.toggle('is-active',selected.has(a)&&selected.has(b));line.classList.toggle('is-open',selected.has(a)!==selected.has(b));}
    updateDetail();updateRoute();updateStats();save();
  }
  function selectNode(id,center=false,focus=false){
    if(!model.byId.has(id))return;
    currentId=id;const node=model.byId.get(id);
    for(const [key,group]of graphics)group.classList.toggle('is-focused',key===id);
    if(center){camera.x=node.x;camera.y=node.y;camera.scale=Math.max(camera.scale,fitScale*3.2);drawCamera();}
    if(focus){graphics.get(id).setAttribute('tabindex','0');graphics.get(id).focus({preventScroll:true});}
    updateDetail();
  }
  function activateNode(id){
    selectNode(id);
    if(planning)setRouteTarget(id);
    else allocate(id);
  }
  function setRouteTarget(id,center=false){
    planning=true;
    routeTarget=id;
    updateRoute();
    if(center)fitRoute();
  }
  function fitRoute(){
    if(!route?.path.length)return;
    const nodes=route.path.map(id=>model.byId.get(id));
    const left=Math.min(...nodes.map(n=>n.x)),right=Math.max(...nodes.map(n=>n.x));
    const top=Math.min(...nodes.map(n=>n.y)),bottom=Math.max(...nodes.map(n=>n.y));
    camera={x:(left+right)/2,y:(top+bottom)/2,scale:clampScale(Math.min(width/(right-left+150),height/(bottom-top+150),fitScale*3.2))};
    drawCamera();
  }
  function updateRoute(){
    route=routeTarget?planSkillRoute(model,selected,routeTarget):null;
    get('route-mode').setAttribute('aria-pressed',String(planning));
    get('map-help').textContent=planning?'Select a skill to plan its route.':'Click to allocate. Right-click to refund. Drag to pan.';
    get('route-legend').hidden=!route?.points;
    get('route-panel').hidden=!routeTarget;

    const path=new Set(route?.path);
    const next=new Map(route?.path.slice(1).map((id,index)=>[route.path[index],id]));
    for(const [id,group]of graphics){
      group.classList.toggle('is-route',path.has(id));
      group.classList.toggle('is-route-target',id===routeTarget);
    }
    for(const {a,b,line}of lines)line.classList.toggle('is-route',next.get(a)===b||next.get(b)===a);
    if(!routeTarget)return;

    const title=model.byId.get(routeTarget).title;
    const description=get('route-description'),list=get('route-list');
    get('route-title').textContent=title;
    get('route-actions').hidden=!route?.steps.length;
    get('route-steps').hidden=!route?.steps.length;
    list.replaceChildren();
    if(!route){description.textContent='No route fits this tree’s point limit and skill requirements.';return;}
    if(!route.steps.length){description.textContent='This skill is already allocated.';return;}

    const missing=Math.max(0,route.minimumBudget-budget);
    const notes=[`${pointLabel(route.points)} to allocate ${title}.`];
    if(route.prerequisitePoints)notes.push(`Includes ${pointLabel(route.prerequisitePoints)} toward the spent-point requirement.`);
    if(missing)notes.push(`Your budget needs ${pointLabel(missing)} more.`);
    description.textContent=notes.join(' ');
    get('map-help').textContent=`${title} · ${pointLabel(route.points)} to allocate. Select any skill to change the target.`;
    get('route-apply').disabled=missing>0;
    for(const id of route.steps){
      const step=document.createElement('li');
      step.textContent=model.byId.get(id).title;
      if(!path.has(id)){
        step.dataset.prerequisite='';
        step.append(' · prerequisite spending');
      }
      list.append(step);
    }
  }
  function updateDetail(){
    const node=model.byId.get(currentId);
    get('route-here').disabled=!node||selected.has(node.id);
    if(!node){get('allocate').disabled=true;get('refund').disabled=true;return;}
    get('detail-branch').textContent=branchName(node.branch)+(node.root?' · root':'');get('detail-title').textContent=node.title;get('detail-description').textContent=node.description;
    const state=allocationState(model,selected,node.id,budget),owned=selected.has(node.id);
    const refundPlan=owned?refundSelection(model,selected,node.id,budget):null;
    get('detail-requirement').textContent=owned?(refundPlan.removed.length>1?`Refunding this skill also refunds ${refundPlan.removed.length-1} dependent skill${refundPlan.removed.length===2?'':'s'}.`:'Allocated · '+node.cost+' point'+(node.cost===1?'':'s')):state.reason;
    get('allocate').textContent='Allocate '+node.cost+' point'+(node.cost===1?'':'s');get('allocate').disabled=!state.allowed;get('refund').disabled=!owned;
  }
  function updateStats(){
    const summary=summarizeSelection(model,selected),list=get('stats'),passiveList=get('passives');list.replaceChildren();passiveList.replaceChildren();get('empty').hidden=selected.size>0;
    for(const reward of summary.attributes){
      const entry=describeAttribute(reward),row=document.createElement('div');row.className='sp-stat';const label=document.createElement('dt'),source=document.createElement('small'),amount=document.createElement('dd');
      label.textContent=entry.name+entry.suffix;source.textContent=entry.source;label.append(source);amount.textContent=entry.amount;row.append(label,amount);list.append(row);
    }
    const passiveEntries=Object.entries(summary.passives);
    if(passiveEntries.length){
      const title=document.createElement('h3');title.className='sp-passive-title';title.textContent='Conditional effects';passiveList.append(title);
      for(const [key,value]of passiveEntries){
        const rules={potion_duration:{name:'Potion duration',cap:.5,percent:true},evasion:{name:'Physical evasion',cap:.15,percent:true},leech:{name:'Recovery per hit · HP',cap:1},food_recovery:{name:'Recovery per meal · HP',cap:3},ignite:{name:'Ignition chance',cap:.2,percent:true},burning_damage:{name:'Damage to burning enemies',percent:true},well_fed_damage:{name:'Damage while well fed',percent:true},effect_damage:{name:'Damage to enemies with an effect',percent:true},longshot:{name:'Long-range projectile damage',percent:true},guard:{name:'Shield guard chance',percent:true},second_wind:{name:'Second Wind'}};
        const rule=rules[key]||{name:human(key)},row=document.createElement('div');row.className='sp-stat';const label=document.createElement('dt'),amount=document.createElement('dd');label.textContent=rule.name;amount.textContent=key==='second_wind'?'Unlocked':valueText(Math.min(PASSIVE_CAPS[key]??Infinity,value),rule.percent);row.append(label,amount);passiveList.append(row);
      }
      const note=document.createElement('p');note.className='sp-passive-note';note.textContent='Conditional effects apply when their skill conditions are met. Inspect a skill for details.';passiveList.append(note);
    }
  }
  function allocate(id){
    if(selected.has(id))return;
    const state=allocationState(model,selected,id,budget);
    if(!state.allowed){announce(state.reason);return;}
    checkpoint();selected.add(id);update();announce(model.byId.get(id).title+' allocated. '+(budget-spentPoints(model,selected))+' points available.');
  }
  function refund(id){
    if(!selected.has(id))return;
    checkpoint();const result=refundSelection(model,selected,id,budget);selected=result.selection;update();announce('Refunded '+result.removed.length+' skill'+(result.removed.length===1?'':'s')+'.');
  }
  get('allocate').addEventListener('click',()=>allocate(currentId));get('refund').addEventListener('click',()=>refund(currentId));
  get('route-mode').addEventListener('click',()=>{
    if(!planning){setRouteTarget(currentId,true);return;}
    planning=false;
    routeTarget='';
    updateRoute();
  });
  get('route-here').addEventListener('click',()=>setRouteTarget(currentId,true));
  get('route-fit').addEventListener('click',fitRoute);
  get('route-apply').addEventListener('click',()=>{
    if(!route?.steps.length||route.minimumBudget>budget)return;
    const {steps,points}=route;
    const title=model.byId.get(routeTarget).title;
    checkpoint();
    for(const id of steps)selected.add(id);
    update();
    announce(`${title} allocated for ${pointLabel(points)}.`);
  });
  get('reset').addEventListener('click',()=>{if(!selected.size)return;checkpoint();selected=new Set();update();announce('Build reset. All points are available.');});
  get('undo').addEventListener('click',()=>{const previous=history.pop();if(!previous)return;selected=previous.selected;budget=previous.budget;level=previous.level;update();announce('Last build change undone.');});
  budgetInput.addEventListener('change',()=>{
    const next=Math.max(0,Math.min(model.pointCap,Math.floor(Number(budgetInput.value)||0)));if(next===budget)return;
    checkpoint();const before=selected.size;budget=next;level=null;selected=validateSelection(model,selected,budget).selection;update();announce(before>selected.size?'Budget changed; '+(before-selected.size)+' skills refunded to fit.':'Point budget changed to '+budget+'.');
  });
  levelInput.addEventListener('change',()=>{
    const next=Math.max(1,Math.min(100,Math.floor(Number(levelInput.value)||1)));checkpoint();level=next;budget=Math.min(model.pointCap,pointsForLevel(level));const before=selected.size;selected=validateSelection(model,selected,budget).selection;update();announce('Level '+level+' provides '+budget+' points.'+(before>selected.size?' '+(before-selected.size)+' skills refunded to fit.':''));
  });
  get('share').addEventListener('click',async()=>{
    const url=new URL(location.href),params=new URLSearchParams();params.set('build',encodeBuild(model,selected,budget));if(currentId)params.set('node',currentId);url.hash=params.toString();historyReplace(url);
    const field=get('share-link');field.value=url.href;get('share-panel').hidden=false;
    try{await navigator.clipboard.writeText(url.href);announce('Build link copied.');}catch{field.focus();field.select();announce('Build link ready to copy.');}
  });
  function historyReplace(url){window.history.replaceState(null,'',url);}
  for(const button of root.querySelectorAll('[data-skill-branch]'))button.addEventListener('click',()=>{const node=skills.nodes.find(n=>n.root&&n.branch===button.dataset.skillBranch);if(node)selectNode(node.id,true,true);});
  search.addEventListener('input',()=>{
    const query=search.value.trim().toLowerCase();searchResults.replaceChildren();searchResults.hidden=!query;if(!query)return;
    const matches=skills.nodes.filter(n=>(n.title+' '+n.id+' '+n.description+' '+branchName(n.branch)).toLowerCase().includes(query)).slice(0,8);
    for(const node of matches){const button=document.createElement('button');button.type='button';const name=document.createElement('strong'),branch=document.createElement('span');name.textContent=node.title;branch.textContent=branchName(node.branch)+' · '+node.cost+' point'+(node.cost===1?'':'s');button.append(name,branch);button.addEventListener('click',()=>{selectNode(node.id,true,true);if(planning)setRouteTarget(node.id,true);searchResults.hidden=true;});searchResults.append(button);}
    if(!matches.length){const message=document.createElement('p');message.textContent='No matching skills.';searchResults.append(message);}
  });
  search.addEventListener('keydown',event=>{if(event.key==='Escape')searchResults.hidden=true;if(event.key==='ArrowDown'){event.preventDefault();searchResults.querySelector('button')?.focus();}});
  root.addEventListener('focusout',event=>{if(!search.parentElement.contains(event.relatedTarget))searchResults.hidden=true;});
  function showTooltip(node,event){
    if(gesture)return;tooltip.querySelector('strong').textContent=node.title;tooltip.querySelector('span').textContent=branchName(node.branch)+' · '+node.cost+' point'+(node.cost===1?'':'s')+(selected.has(node.id)?' · Allocated':'');
    const box=canvas.getBoundingClientRect();tooltip.style.left=Math.max(8,Math.min(box.width-245,event.clientX-box.left+14))+'px';tooltip.style.top=Math.max(8,Math.min(box.height-65,event.clientY-box.top+14))+'px';tooltip.hidden=false;
  }
  function loadLocation(){
    const params=new URLSearchParams(location.hash.slice(1));let value=params.get('build');
    if(!value){try{value=localStorage.getItem(storageKey);}catch{}}
    if(value){try{const state=decodeBuild(model,value);selected=state.selection;budget=state.budget;level=levelForPoints(budget);}catch(error){if(params.has('build'))announce(error.message);}}
    update();const id=params.get('node');if(id&&model.byId.has(id))requestAnimationFrame(()=>selectNode(id,true,true));
  }
  const onHashChange=()=>{if(!root.isConnected){window.removeEventListener('hashchange',onHashChange);resize.disconnect();return;}loadLocation();};
  measure();loadLocation();window.addEventListener('hashchange',onHashChange);
}
