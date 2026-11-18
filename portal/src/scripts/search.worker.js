import MiniSearch from 'minisearch';
let searchIndex;
self.onmessage = async event => {
  try {
    if(event.data.type === 'init') {
      const base = event.data.base.endsWith('/') ? event.data.base : event.data.base + '/';
      const response = await fetch(base + 'data/search.json');
      if(!response.ok)throw new Error('Search index unavailable');
      const docs = await response.json();
      searchIndex = new MiniSearch({fields:['name','id','description','mod','style'],storeFields:['category','id','name','url','subtitle'],idField:'_key',searchOptions:{boost:{name:4,id:3,mod:2,style:2},prefix:true,fuzzy:term=>term.length>5?0.15:false}});
      searchIndex.addAll(docs);
      self.postMessage({type:'ready',count:docs.length});
    }
    if(event.data.type === 'search' && searchIndex)self.postMessage({type:'results',id:event.data.id,items:searchIndex.search(event.data.query).slice(0,35)});
  } catch(error) { self.postMessage({type:'error',message:String(error)}); }
};
