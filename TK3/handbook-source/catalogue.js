(() => {
  'use strict';
  const search=document.getElementById('recipe-search'), tier=document.getElementById('tier-filter'), method=document.getElementById('method-filter');
  const groups=[...document.querySelectorAll('.recipe-group')], rows=groups.flatMap(group=>[...group.querySelectorAll('tbody tr')]);
  function filter() {
    const query=search.value.trim().toLowerCase(); let total=0;
    for(const group of groups) {
      let count=0;
      for(const row of group.querySelectorAll('tbody tr')) {row.hidden=!!((query&&!row.dataset.search.includes(query))||(tier.value&&row.dataset.tier!==tier.value)||(method.value&&row.dataset.method!==method.value)); if(!row.hidden) count++;}
      group.hidden=count===0; group.querySelector('.count').textContent=`${count} recipes`; if(query||tier.value||method.value) group.open=count>0; total+=count;
    }
    document.getElementById('recipe-count').textContent=`${total} of ${rows.length} recipes`; document.getElementById('no-results').hidden=total>0;
  }
  search.addEventListener('input',filter); tier.addEventListener('change',filter); method.addEventListener('change',filter);
  document.getElementById('show-ids').addEventListener('change',event=>document.getElementById('recipe-groups').classList.toggle('hide-ids',!event.target.checked));
  document.getElementById('expand-all').addEventListener('click',()=>groups.forEach(group=>group.open=true));
  document.getElementById('collapse-all').addEventListener('click',()=>groups.forEach(group=>group.open=false));
  document.getElementById('clear-filters').addEventListener('click',()=>{search.value='';tier.value='';method.value='';filter();});
  const params=new URLSearchParams(location.search); search.value=params.get('q')||''; tier.value=params.get('tier')||''; method.value=params.get('method')||''; filter();
})();
