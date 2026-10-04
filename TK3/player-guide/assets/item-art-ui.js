(()=>{'use strict';
const data=window.TK3_ART;
if(!data)return;
const assetRoot=new URL('.',document.currentScript.src);
const itemID=x=>String(x).replace(/^\d+x /,'');
function create(id,size=36){
 id=itemID(id);const p=data.items[id],direct=data.direct_items?.[id],n=document.createElement('span');n.setAttribute('aria-hidden','true');
 if(direct){n.className='item-icon';n.style.width=size+'px';n.style.height=size+'px';n.style.backgroundImage='url("'+new URL(direct,assetRoot).href+'")';n.style.backgroundSize='contain';n.style.backgroundPosition='center';return n;}
 if(!p){n.className='item-symbol';n.textContent='◆';return n;}
 const scale=size/64;n.className='item-icon';n.style.width=size+'px';n.style.height=size+'px';n.style.backgroundSize=data.width*scale+'px '+data.height*scale+'px';n.style.backgroundPosition=-p.x*scale+'px '+-p.y*scale+'px';return n;
}
window.TK3ItemArt={create,names:data.names};
for(const box of document.querySelectorAll('.equipment-strip')){
 for(const id of box.dataset.items.split(',')){
  const p=document.createElement('div');p.className='equipment-piece';p.append(create(id,32));
  const label=document.createElement('span');label.textContent=data.names[id]||id.split(':').at(-1).replaceAll('_',' ');p.append(label);box.append(p);
 }
}
for(const code of document.querySelectorAll('.recipe-table code.technical')){
 const id=itemID(code.textContent.trim()),name=code.previousElementSibling;
 if((data.items[id]||data.direct_items?.[id])&&name?.classList.contains('item-name'))name.prepend(create(id,28));
}
})();
