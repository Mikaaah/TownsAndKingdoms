(() => {
  "use strict";
  const $ = function(id) { return document.getElementById(id); };
  const STORAGE_KEY = "tk3-skilltree-build-plan-v1";
  const ICON_ROOT = "https://raw.githubusercontent.com/Mikaaah/TownsAndKingdoms/b51943794270fd755142f21768251fccc3236f11/TK3/kubejs/assets/";
  const state = {
    tree:null, nodes:[], byId:new Map(), layout:null, classId:"", subclassId:"",
    budget:150, name:"My T&K3 build", targets:new Set(), selected:null, plan:null,
    svgNodes:new Map(), svgEdges:[], box:{x:0,y:0,w:120,h:120}, pan:null,
    subclassesByClass:new Map(), subclassOwner:new Map()
  };
  const groupNames = {shared:"Shared tree",class:"Class",subclass:"Subclass",profession:"Profession",wildcard:"Wildcard"};
  const human = function(value) {
    return String(value || "").replace(/^tk3_/, "").replace(/_/g, " ").replace(/\b[a-z]/g, function(c){return c.toUpperCase();});
  };
  const nodeText = function(node) {
    const description = (node.description || []).map(function(part){return part.text || "";}).join(" ");
    return [node.title,node.id,description].join(" ").toLowerCase();
  };
  const create = function(tag,className,text) {
    const el=document.createElement(tag);
    if(className) el.className=className;
    if(text!==undefined) el.textContent=text;
    return el;
  };
  function textureUrl(texture) {
    const match=String(texture||"").match(/^([a-z0-9_]+):(.+)$/i);
    return match?ICON_ROOT+match[1]+"/"+match[2]:"";
  }
  function skillIcon(node,className) {
    const img=create("img","skill-icon "+(className||""));
    img.src=textureUrl(node&&node.iconTexture);img.alt=node?node.title:"";
    img.loading="lazy";img.decoding="async";
    img.addEventListener("error",function(){img.hidden=true;});return img;
  }
  function status(message) {
    $("saveState").textContent=message;
  }
  function makeNodeData(tree,layout) {
    const spots=new Map(layout.nodes.map(function(n){return [n.id,n];}));
    const classes=tree.meta.classes;
    const nodes=tree.nodes.map(function(raw) {
      const visual=spots.get(raw.id);
      if(!visual) throw new Error("Layout data is missing node "+raw.id);
      let branchClass="";
      for(const cls of classes) if(raw.id.indexOf("tk3_"+cls+"_")===0){branchClass=cls;break;}
      let branchSubclass="";
      if(visual.group==="subclass"&&branchClass) {
        const prefix="tk3_"+branchClass+"_sub_";
        const suffix=raw.id.indexOf(prefix)===0?raw.id.slice(prefix.length):"";
        const match=tree.meta.subclasses.find(function(sub){return suffix===sub||suffix.indexOf(sub+"_")===0;});
        if(match) branchSubclass=match;
      }
      return Object.assign({},raw,{
        group:visual.group,col:visual.col,row:visual.row,size:visual.size||raw.buttonSize,
        branchClass:branchClass,branchSubclass:branchSubclass
      });
    });
    state.subclassesByClass=new Map(classes.map(function(cls){return [cls,[]];}));
    for(const node of nodes) if(node.group==="subclass"&&node.branchClass&&node.branchSubclass) {
      state.subclassOwner.set(node.branchSubclass,node.branchClass);
      const list=state.subclassesByClass.get(node.branchClass);
      if(list&&!list.includes(node.branchSubclass)) list.push(node.branchSubclass);
    }
    for(const list of state.subclassesByClass.values()) list.sort();
    if(nodes.length!==tree.meta.generatedNodes) throw new Error("The node count does not match the published tree summary.");
    if(layout.version!==tree.meta.version) throw new Error("Tree data and map coordinates use different versions.");
    for(const cls of classes) if((state.subclassesByClass.get(cls)||[]).length!==3) throw new Error("Expected three subclasses for "+human(cls)+".");
    return nodes;
  }
  function fillClassChoices() {
    const select=$("classChoice");
    select.replaceChildren(create("option","","Choose later"));
    select.options[0].value="";
    for(const cls of state.tree.meta.classes) {
      const option=create("option","",human(cls));option.value=cls;select.appendChild(option);
    }
  }
  function renderSubclassChoices() {
    const select=$("subclassChoice");
    select.replaceChildren();
    const first=create("option","",state.classId?"Choose later":"Choose a class first");
    first.value="";select.appendChild(first);
    select.disabled=!state.classId;
    const choices=state.subclassesByClass.get(state.classId)||[];
    for(const sub of choices) {
      const option=create("option","",human(sub));option.value=sub;select.appendChild(option);
    }
    select.value=choices.includes(state.subclassId)?state.subclassId:"";
  }
  function readPayload(payload) {
    if(!payload||payload.format!=="tk3-build-plan/v1") throw new Error("This file is not a T&K3 build plan.");
    state.classId=state.tree.meta.classes.includes(payload.classId)?payload.classId:"";
    const requestedSubclass=String(payload.subclassId||"");
    state.subclassId=state.subclassOwner.get(requestedSubclass)===state.classId?requestedSubclass:"";
    state.budget=Math.max(1,Math.min(1000,Math.floor(Number(payload.budget)||150)));
    state.name=String(payload.name||"My T&K3 build").slice(0,48);
    const rawTargets=Array.isArray(payload.targets)?payload.targets:[];
    const validTargets=rawTargets.filter(function(id){return state.byId.has(id)&&!state.byId.get(id).isStartingPoint;});
    state.targets=new Set(validTargets);
    const skipped=rawTargets.length-validTargets.length;
    status(skipped?"Loaded plan; skipped "+skipped+" node(s) missing from this tree version.":"Build plan loaded.");
  }
  function loadSavedPlan() {
    const query=new URLSearchParams(window.location.search).get("plan");
    if(query) {
      try {
        const normalized=query.replace(/-/g,"+").replace(/_/g,"/");
        const padded=normalized+"=".repeat((4-normalized.length%4)%4);
        const bytes=Uint8Array.from(atob(padded),function(c){return c.charCodeAt(0);});
        readPayload(JSON.parse(new TextDecoder().decode(bytes)));
        return;
      } catch(err) { status("Share link could not be loaded; restored the local plan."); }
    }
    try {
      const saved=localStorage.getItem(STORAGE_KEY);
      if(saved) readPayload(JSON.parse(saved));
    } catch(err) { status("No saved plan was available in this browser."); }
  }
  function exportPayload() {
    return {
      format:"tk3-build-plan/v1",
      treeVersion:state.tree.meta.version,
      layoutFingerprint:(state.tree.meta.validation||{}).layoutFingerprint||((state.tree.meta.layout||{}).fingerprint||""),
      name:state.name,
      classId:state.classId,
      subclassId:state.subclassId,
      budget:state.budget,
      targets:Array.from(state.targets)
    };
  }
  function persist() {
    try {
      localStorage.setItem(STORAGE_KEY,JSON.stringify(exportPayload()));
      status("Saved in this browser");
    } catch(err) { status("Browser storage is unavailable; download the plan to keep it."); }
  }
  function settings() { return {classId:state.classId,subclassId:state.subclassId}; }
  function compute(targets) {
    return window.TK3PlannerCore.planBuild({
      nodes:state.nodes,targets:targets||Array.from(state.targets),
      classId:state.classId,subclassId:state.subclassId,budget:state.budget
    });
  }
  function selectedGoal(node) { return state.targets.has(node.id); }
  function candidatePreview(node) {
    if(selectedGoal(node)) return {allowed:true,delta:0};
    const plan=compute(Array.from(state.targets).concat(node.id));
    const issue=plan.invalid.find(function(item){return item.target===node.id;});
    return issue?{allowed:false,message:issue.message}:{allowed:true,delta:plan.points-(state.plan?state.plan.points:0)};
  }
  function renderAll() {
    $("classChoice").value=state.classId;
    renderSubclassChoices();
    $("budgetChoice").value=String(state.budget);
    $("buildName").value=state.name;
    renderPlan();
    renderDetails();
    renderSearchResults();
    updateMapState();
  }
  function renderPlan() {
    state.plan=compute();
    const plan=state.plan;
    $("spent").textContent=String(plan.points);
    $("budgetTotal").textContent=String(state.budget);
    $("remaining").textContent=String(plan.remaining);
    $("goalCount").textContent=String(state.targets.size);
    const goalSet=state.targets;
    const autoCount=plan.order.filter(function(id){
      const node=state.byId.get(id);return node&&!node.isStartingPoint&&!goalSet.has(id);
    }).length;
    $("requiredCount").textContent=String(autoCount);
    $("plannedBadge").textContent=String(state.targets.size);
    $("purchaseCount").textContent=String(plan.order.length);
    document.querySelector(".metric:nth-child(2)").classList.toggle("over",plan.remaining<0);
    const notice=$("planNotice");
    const messages=plan.invalid.map(function(item){return item.message;});
    if(plan.remaining<0) messages.push("This plan exceeds its "+state.budget+"-point planning budget by "+Math.abs(plan.remaining)+" points.");
    notice.hidden=messages.length===0;
    notice.classList.toggle("error",plan.invalid.length>0);
    notice.textContent=messages.join("\n");
    renderGoalList();
    renderPurchaseOrder();
  }
  function renderGoalList() {
    const list=$("goalList");list.replaceChildren();
    if(state.targets.size===0) {list.appendChild(create("p","empty-copy","Click any skill on the tree. Required skills will be included automatically."));return;}
    for(const id of state.targets) {
      const node=state.byId.get(id),row=create("div","goal-item");
      if(node) row.appendChild(skillIcon(node,"list-icon"));
      const main=create("div","goal-copy");
      main.appendChild(create("strong","",node?node.title:id));
      main.appendChild(create("small","",node?groupNames[node.group]+" · "+human(node.branchClass||node.branchSubclass||""):"Missing skill"));
      const remove=create("button","remove-goal","Remove");remove.type="button";remove.setAttribute("aria-label","Remove "+(node?node.title:id));
      remove.addEventListener("click",function(){state.targets.delete(id);renderAll();persist();});
      row.append(main,remove);list.appendChild(row);
    }
  }
  function renderPurchaseOrder() {
    const list=$("purchaseOrder");list.replaceChildren();
    if(!state.plan.order.length) {list.appendChild(create("li","","Choose skills to see the prerequisite-first purchase order."));return;}
    state.plan.order.forEach(function(id) {
      const node=state.byId.get(id);
      const li=create("li");
      if(node) li.appendChild(skillIcon(node,"order-icon"));
      li.appendChild(document.createTextNode(node?node.title:id));
      const note=node&&node.isStartingPoint?" · starting point, 0 points":" · 1 point";
      li.appendChild(create("small","",note));
      list.appendChild(li);
    });
  }
  function requirementIds(node) {
    return (node.requirements||[]).map(function(r){return String(r.skill_id||"").replace(/^skilltree:/,"");});
  }
  function renderDetails() {
    const node=state.byId.get(state.selected);
    const toggle=$("toggleGoal"),show=$("showOnMap");
    if(!node) {
      $("nodeTitle").textContent="Choose a node";
      $("nodeIcon").hidden=true;
      $("nodeMeta").textContent="Click a node on the map or in search results.";
      $("nodeDescription").textContent="Its bonuses and requirements will appear here.";
      $("nodePrereqCount").textContent="—";$("nodeCost").textContent="—";
      toggle.disabled=true;toggle.textContent="Choose a skill first";show.disabled=true;return;
    }
    $("nodeTitle").textContent=node.title;
    const detailIcon=$("nodeIcon");detailIcon.src=textureUrl(node.iconTexture);detailIcon.alt=node.title;detailIcon.hidden=!node.iconTexture;
    const branch=node.group==="class"?human(node.branchClass):node.group==="subclass"?human(node.branchSubclass):groupNames[node.group]||node.group;
    $("nodeMeta").textContent=(groupNames[node.group]||"Skill")+" · "+branch+" · "+node.id;
    const box=$("nodeDescription");box.replaceChildren();
    const description=node.description||[];
    if(description.length) {
      description.forEach(function(part,index) {
        if(index) box.appendChild(document.createTextNode(" "));
        const span=create("span","",part.text||"");
        if(/^#[0-9A-Fa-f]{6}$/.test(part.color||"")) span.style.color=part.color;
        box.appendChild(span);
      });
    } else box.textContent="No additional description is supplied for this node.";
    const prereqs=requirementIds(node);
    $("nodePrereqCount").textContent=String(prereqs.length);
    $("nodeCost").textContent=node.isStartingPoint?"Starting point · 0":"1 point";
    if(prereqs.length) {
      const names=prereqs.map(function(id){const required=state.byId.get(id);return required?required.title:id;});
      const p=create("p","","Requires: "+names.join(", "));
      p.className="prerequisite-names";box.appendChild(p);
    }
    const isTarget=selectedGoal(node);
    const preview=candidatePreview(node);
    const access=window.TK3PlannerCore.eligibilityMessage(node,settings());
    if(isTarget) {toggle.disabled=false;toggle.textContent="Remove from plan";}
    else if(node.isStartingPoint) {toggle.disabled=true;toggle.textContent="Starting point is included";}
    else if(!preview.allowed) {toggle.disabled=true;toggle.textContent="Unavailable for this class/subclass";}
    else {toggle.disabled=false;toggle.textContent="Add to plan · +"+Math.max(0,preview.delta)+" points";}
    toggle.title=isTarget?"Remove this skill from your plan":(access||preview.message||"Plan this skill and its prerequisites.");
    show.disabled=false;
  }
  function renderSearchResults() {
    const results=$("searchResults");results.replaceChildren();
    const query=$("search").value.trim().toLowerCase();
    const group=$("groupFilter").value;
    if(!query) {results.appendChild(create("p","empty-copy","Search for a skill or bonus to add a goal to your plan."));return;}
    const matches=state.nodes.filter(function(node) {
      return (!group||node.group===group)&&nodeText(node).includes(query);
    });
    matches.sort(function(a,b) {
      const at=a.title.toLowerCase(),bt=b.title.toLowerCase();
      const as=at===query?0:at.indexOf(query)===0?1:2,bs=bt===query?0:bt.indexOf(query)===0?1:2;
      return as-bs||at.localeCompare(bt);
    });
    if(!matches.length) {results.appendChild(create("p","empty-copy","No skills match this search and branch filter."));return;}
    const shown=matches.slice(0,40);
    shown.forEach(function(node) {
      const row=create("article","skill-result");
      const main=create("button","result-main");
      main.type="button";main.appendChild(create("strong","",node.title));
      const branch=node.group==="class"?human(node.branchClass):node.group==="subclass"?human(node.branchSubclass):groupNames[node.group]||node.group;
      main.appendChild(create("small","",(groupNames[node.group]||node.group)+" · "+branch));
      const required=state.plan.planned.has(node.id)&&!state.targets.has(node.id);
      main.appendChild(create("span","result-state",selectedGoal(node)?"Planned by you":required?"Already on your required path":""));
      main.addEventListener("click",function(){selectNode(node.id);focusMap(node);});
      const add=create("button","result-add",selectedGoal(node)?"Remove":required?"Plan skill":"Plan skill");
      add.type="button";
      const preview=candidatePreview(node);
      const locked=!preview.allowed&&!selectedGoal(node);
      if(locked) add.disabled=true;
      if(!selectedGoal(node)&&!locked) add.textContent="Plan · +"+Math.max(0,preview.delta);
      add.title=locked?(preview.message||"Choose the matching class and subclass first."):"Plan this skill goal";
      add.addEventListener("click",function(){if(selectedGoal(node))removeGoal(node.id);else addGoal(node.id);});
      row.append(skillIcon(node,"result-icon"),main,add);results.appendChild(row);
    });
    if(matches.length>shown.length) results.appendChild(create("p","empty-copy","Showing "+shown.length+" of "+matches.length+" results. Refine your search."));
  }
  function renderMap() {
    const edgeLayer=$("edges"),nodeLayer=$("nodes"),lineFrag=document.createDocumentFragment();
    state.svgEdges=[];
    for(const pair of state.layout.edges) {
      const a=state.byId.get(pair[0]),b=state.byId.get(pair[1]);if(!a||!b)continue;
      const line=document.createElementNS("http://www.w3.org/2000/svg","line");
      line.setAttribute("class","edge");line.setAttribute("x1",a.col+.5);line.setAttribute("y1",a.row+.5);line.setAttribute("x2",b.col+.5);line.setAttribute("y2",b.row+.5);
      line.dataset.a=a.id;line.dataset.b=b.id;lineFrag.appendChild(line);state.svgEdges.push(line);
    }
    edgeLayer.replaceChildren(lineFrag);
    const nodeFrag=document.createDocumentFragment();
    for(const node of state.nodes) {
      const g=document.createElementNS("http://www.w3.org/2000/svg","g");
      g.setAttribute("class","node "+node.group);g.dataset.id=node.id;
      g.setAttribute("transform","translate("+(node.col+.5)+" "+(node.row+.5)+")");
      g.setAttribute("role","button");g.setAttribute("tabindex","-1");g.setAttribute("aria-label",node.title+", click to add or remove from plan");
      const radius=Math.max(.38,Math.min(.7,Number(node.size||18)/42));
      const circle=document.createElementNS("http://www.w3.org/2000/svg","circle");
      circle.setAttribute("r",radius);circle.setAttribute("class","node-ring");
      const color=/^#[0-9A-Fa-f]{6}$/.test(node.titleColor||"")?node.titleColor:"#d9c078";
      circle.setAttribute("stroke",color);g.appendChild(circle);
      const icon=document.createElementNS("http://www.w3.org/2000/svg","image");
      icon.setAttribute("class","node-icon");icon.setAttribute("href",textureUrl(node.iconTexture));
      icon.setAttribute("x",-radius*.58);icon.setAttribute("y",-radius*.58);
      icon.setAttribute("width",radius*1.16);icon.setAttribute("height",radius*1.16);
      icon.setAttribute("preserveAspectRatio","xMidYMid meet");g.appendChild(icon);
      const title=document.createElementNS("http://www.w3.org/2000/svg","title");title.textContent=node.title+" · click to add/remove from your plan";g.appendChild(title);
      g.addEventListener("click",function(){toggleMapNode(node.id);});
      g.addEventListener("keydown",function(event){if(event.key==="Enter"||event.key===" "){event.preventDefault();toggleMapNode(node.id);}});
      nodeFrag.appendChild(g);state.svgNodes.set(node.id,g);
    }
    nodeLayer.replaceChildren(nodeFrag);
  }
  function updateMapState() {
    const query=$("search").value.trim().toLowerCase();
    const filter=$("groupFilter").value;
    const planned=state.plan?state.plan.planned:new Set();
    for(const node of state.nodes) {
      const el=state.svgNodes.get(node.id);if(!el)continue;
      const eligible=!window.TK3PlannerCore.eligibilityMessage(node,settings());
      const matchGroup=!filter||node.group===filter;
      const matchText=!query||nodeText(node).includes(query);
      el.classList.toggle("dim",!matchGroup||!matchText);
      el.classList.toggle("locked",!eligible&&!node.isStartingPoint);
      el.classList.toggle("goal",state.targets.has(node.id));
      el.classList.toggle("required",planned.has(node.id)&&!state.targets.has(node.id));
      el.classList.toggle("selected",node.id===state.selected);
    }
    for(const line of state.svgEdges) {
      line.classList.toggle("active",planned.has(line.dataset.a)&&planned.has(line.dataset.b));
    }
  }
  function selectNode(id) {
    if(!state.byId.has(id))return;
    state.selected=id;renderDetails();updateMapState();
  }
  function toggleMapNode(id) {
    const node=state.byId.get(id);if(!node)return;
    selectNode(id);
    if(state.targets.has(id)) removeGoal(id);
    else if(node.isStartingPoint) status("Your starting skill is included automatically.");
    else addGoal(id);
  }
  function focusMap(node) {
    const w=34,h=34;
    setViewBox(Math.max(0,Math.min(120-w,node.col+0.5-w/2)),Math.max(0,Math.min(120-h,node.row+0.5-h/2)),w,h);
  }
  function addGoal(id) {
    const node=state.byId.get(id);if(!node)return;
    if(node.isStartingPoint){status("The starting point is included automatically.");return;}
    const preview=compute(Array.from(state.targets).concat(id));
    const issue=preview.invalid.find(function(item){return item.target===id;});
    if(issue){status(issue.message);return;}
    state.targets.add(id);renderAll();persist();
  }
  function removeGoal(id) {state.targets.delete(id);renderAll();persist();}
  function toggleSelectedGoal() {
    if(!state.selected)return;
    if(state.targets.has(state.selected))removeGoal(state.selected);else addGoal(state.selected);
  }
  function searchMapChange() {renderSearchResults();updateMapState();}
  function setViewBox(x,y,w,h) {state.box={x:x,y:y,w:w,h:h};$("tree").setAttribute("viewBox",x+" "+y+" "+w+" "+h);}
  function zoomAt(multiplier,clientX,clientY) {
    const box=state.box;let px=.5,py=.5;
    if(clientX!==undefined) {
      const rect=$("tree").getBoundingClientRect();
      px=(clientX-rect.left)/rect.width;py=(clientY-rect.top)/rect.height;
    }
    const w=Math.max(12,Math.min(120,box.w*multiplier)),h=Math.max(12,Math.min(120,box.h*multiplier));
    setViewBox(box.x+(box.w-w)*px,box.y+(box.h-h)*py,w,h);
  }
  function setupMapControls() {
    const svg=$("tree");
    $("zoomOut").addEventListener("click",function(){zoomAt(1.22);});
    $("zoomIn").addEventListener("click",function(){zoomAt(.82);});
    $("fitTree").addEventListener("click",function(){setViewBox(0,0,120,120);});
    svg.addEventListener("wheel",function(e){e.preventDefault();zoomAt(e.deltaY<0?.88:1.14,e.clientX,e.clientY);},{passive:false});
    svg.addEventListener("pointerdown",function(e){
      if(e.target.closest&&e.target.closest(".node"))return;
      state.pan={x:e.clientX,y:e.clientY,box:Object.assign({},state.box)};
      svg.classList.add("panning");svg.setPointerCapture(e.pointerId);
    });
    svg.addEventListener("pointermove",function(e){
      if(!state.pan)return;
      const rect=svg.getBoundingClientRect();
      const dx=(e.clientX-state.pan.x)*state.pan.box.w/rect.width;
      const dy=(e.clientY-state.pan.y)*state.pan.box.h/rect.height;
      setViewBox(state.pan.box.x-dx,state.pan.box.y-dy,state.box.w,state.box.h);
    });
    const end=function(e){
      state.pan=null;svg.classList.remove("panning");
      if(svg.hasPointerCapture&&svg.hasPointerCapture(e.pointerId))svg.releasePointerCapture(e.pointerId);
    };
    svg.addEventListener("pointerup",end);svg.addEventListener("pointercancel",end);
  }
  function saveFile(name,content,type) {
    const url=URL.createObjectURL(new Blob([content],{type:type}));
    const link=document.createElement("a");link.href=url;link.download=name;link.click();
    setTimeout(function(){URL.revokeObjectURL(url);},1000);
  }
  function downloadPlan() {
    saveFile((state.name||"TK3_build").trim().replace(/[^a-z0-9_-]+/gi,"_")+".json",JSON.stringify(exportPayload(),null,2)+"\n","application/json");
    status("Plan downloaded.");
  }
  function importPlanFile(file) {
    file.text().then(function(text) {
      readPayload(JSON.parse(text));
      renderAll();persist();
    }).catch(function(error){status(error.message||"Could not load that plan file.");});
  }
  function copyShareLink() {
    const payload=JSON.stringify(exportPayload());
    const bytes=new TextEncoder().encode(payload);
    let binary="";
    bytes.forEach(function(byte){binary+=String.fromCharCode(byte);});
    const code=btoa(binary).replace(/\+/g,"-").replace(/\//g,"_").replace(/=+$/,"");
    const url=new URL(window.location.href);url.searchParams.set("plan",code);
    if(navigator.clipboard&&navigator.clipboard.writeText) {
      navigator.clipboard.writeText(url.toString()).then(function(){status("Share link copied.");}).catch(function(){status("Copy was blocked by the browser. Download the JSON plan instead.");});
    } else status("Clipboard is unavailable here. Download the JSON plan instead.");
  }
  function bindControls() {
    $("classChoice").addEventListener("change",function(){
      state.classId=this.value;
      if(state.subclassOwner.get(state.subclassId)!==state.classId)state.subclassId="";
      renderAll();persist();
    });
    $("subclassChoice").addEventListener("change",function(){state.subclassId=this.value;renderAll();persist();});
    $("budgetChoice").addEventListener("change",function(){
      const value=Math.floor(Number(this.value));
      if(Number.isFinite(value)&&value>0)state.budget=Math.max(1,Math.min(1000,value));
      renderAll();persist();
    });
    $("buildName").addEventListener("input",function(){state.name=this.value.slice(0,48)||"My T&K3 build";persist();});
    $("search").addEventListener("input",searchMapChange);
    $("groupFilter").addEventListener("change",searchMapChange);
    $("toggleGoal").addEventListener("click",toggleSelectedGoal);
    $("showOnMap").addEventListener("click",function(){const node=state.byId.get(state.selected);if(node)focusMap(node);});
    $("downloadPlan").addEventListener("click",downloadPlan);
    $("importPlanButton").addEventListener("click",function(){$("importPlanFile").click();});
    $("importPlanFile").addEventListener("change",function(){const file=this.files&&this.files[0];if(file)importPlanFile(file);this.value="";});
    $("copyLink").addEventListener("click",copyShareLink);
    $("printPlan").addEventListener("click",function(){
      const details=document.querySelector(".purchase-details"),wasOpen=details.open;details.open=true;
      window.print();details.open=wasOpen;
    });
    $("clearGoals").addEventListener("click",function(){state.targets.clear();renderAll();persist();});
    $("resetBuild").addEventListener("click",function(){
      state.classId="";state.subclassId="";state.budget=150;state.name="My T&K3 build";state.targets.clear();state.selected=null;
      renderAll();persist();
    });
  }
  async function init() {
    try {
      const responses=await Promise.all([fetch("data/layout.json"),fetch("../assets/wiki/skilltree-v4.6.json")]);
      if(!responses[0].ok||!responses[1].ok)throw new Error("Could not load the published tree and layout data.");
      const layout=await responses[0].json(),tree=await responses[1].json();
      state.layout=layout;state.tree=tree;state.nodes=makeNodeData(tree,layout);
      state.byId=new Map(state.nodes.map(function(node){return [node.id,node];}));
      fillClassChoices();loadSavedPlan();bindControls();renderMap();setupMapControls();renderAll();
      $("classChoice").value=state.classId;renderSubclassChoices();$("loading").hidden=true;
      $("treeVersion").textContent="v"+tree.meta.version+" · "+tree.meta.generatedNodes.toLocaleString()+" skills";
      persist();
    } catch(error) {
      $("loading").textContent=error.message||"Could not load skilltree data.";
      $("planNotice").hidden=false;$("planNotice").classList.add("error");$("planNotice").textContent=error.message||"Could not load skilltree data.";
      status("Planner data failed to load.");
    }
  }
  init();
})();
