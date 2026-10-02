(()=>{
'use strict';
const search=document.getElementById('wiki-search'),out=document.getElementById('wiki-results');
if(search&&out){let pages;search.addEventListener('input',async()=>{const q=search.value.trim().toLowerCase();if(q.length<2){out.replaceChildren();return}pages??=await fetch(search.dataset.index).then(r=>r.json());out.replaceChildren();for(const p of pages.filter(p=>(p.title+' '+p.text).toLowerCase().includes(q)).slice(0,12)){const a=document.createElement('a'),s=document.createElement('small');a.href=p.url;a.textContent=p.title;s.textContent=p.version+' · '+p.description;a.append(s);out.append(a)}if(!out.children.length)out.textContent='No pages found. Try a mod, farm or chapter name.'})}
for(const img of document.querySelectorAll('.article-body img'))img.addEventListener('error',()=>{img.classList.add('media-unavailable');img.alt=(img.alt||'Original wiki image')+' — external image unavailable; use the original source link.'},{once:true});
for(const card of document.querySelectorAll('[data-video]')){const id=card.dataset.video,poster=document.createElement('img');poster.src='https://i.ytimg.com/vi/'+id+'/hqdefault.jpg';poster.alt=card.querySelector('h3').textContent+' video thumbnail';poster.loading='lazy';poster.addEventListener('error',()=>poster.hidden=true,{once:true});card.prepend(poster);card.querySelector('.load-video').addEventListener('click',()=>{const frame=document.createElement('iframe');frame.src='https://www.youtube-nocookie.com/embed/'+id;frame.title=card.querySelector('h3').textContent;frame.allow='accelerometer; encrypted-media; gyroscope; picture-in-picture; fullscreen';frame.allowFullscreen=true;poster.replaceWith(frame);card.querySelector('.load-video').remove()})}
const ns='http://www.w3.org/2000/svg';
function node(tag,attrs,parent,text){const n=document.createElementNS(ns,tag);for(const [k,v]of Object.entries(attrs||{}))n.setAttribute(k,v);if(text!==undefined)n.textContent=text;parent.append(n);return n}
for(const box of document.querySelectorAll('.farm-diagram')){
const s=node('svg',{viewBox:'0 0 720 310',role:'img','aria-label':box.getAttribute('aria-label')},box);
const text=(x,y,t,c='#decfe8',size=14)=>node('text',{x,y,fill:c,'font-size':size},s,t);
const rect=(x,y,w,h,c,r=6)=>node('rect',{x,y,width:w,height:h,rx:r,fill:c,stroke:'#8b6896','stroke-width':1},s);
if(box.dataset.diagram==='geology'){
rect(160,25,130,60,'#927775');text(172,60,'Generated stone');rect(160,96,130,60,'#a688b7');text(175,132,'Selector lens');rect(160,167,130,60,'#694e83');text(177,203,'Matching frame');
rect(355,26,110,59,'#8f6677');text(373,61,'Drill ←');node('path',{d:'M355 55H298',stroke:'#dca7c9','stroke-width':3},s);text(365,114,'Collect the drops');text(365,142,'Keep the foundation intact');text(160,269,'Vertical order · schematic layout','#b59ac5',12);
}else{
const wood=box.dataset.diagram==='wood';rect(50,25,380,230,'#372944');
for(let y=0;y<4;y++)for(let x=0;x<6;x++){const cx=82+x*53,cy=57+y*51;rect(cx-14,cy-13,29,26,wood?'#584539':'#777943',3);if(wood){node('circle',{cx,cy:cy-6,r:15,fill:'#64836c',opacity:.9},s)}else{node('path',{d:`M${cx-6} ${cy+8}V${cy-5}m6 13V${cy-9}m6 17V${cy-3}`,stroke:'#d5bc78','stroke-width':3},s)}}
node('circle',{cx:242,cy:137,r:26,fill:'#7b588c',stroke:'#c1a1d7','stroke-width':2},s);text(228,142,'Hub','#fff',12);node('path',{d:'M242 137H394',stroke:'#c7a3d0','stroke-width':15,'stroke-linecap':'round'},s);
for(let x=278;x<=388;x+=37){rect(x-11,153,25,25,wood?'#8ba3a2':'#c5a779',3)}
rect(310,104,42,31,'#b38d67',3);rect(382,102,25,31,'#9b78b5',3);rect(441,102,25,31,'#9b78b5',3);node('path',{d:'M410 119H437',stroke:'#e1bfdd','stroke-width':2,'stroke-dasharray':'5 3'},s);
text(480,121,'Interface pair');text(480,144,'1–2 air blocks','#bda7ca',12);text(480,188,wood?'Saws + replanting':'Moving Harvesters');text(480,211,wood?'Deployers keep saplings':'reset mature crops','#bda7ca',12);text(60,289,wood?'Keep planting stock in the moving storage':'Glue arm + machines + storage; unload to a fixed buffer','#bda7ca',12);
}
}
})();
