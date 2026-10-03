(() => {
  const page=document.getElementById('preview-page'), width=document.getElementById('preview-width'), frame=document.getElementById('preview-frame');
  const root=new URL(document.body.dataset.siteRoot,location.href);
  function resize(){frame.style.width=width.value+'px';document.getElementById('preview-status').textContent=width.options[width.selectedIndex].text;}
  page.addEventListener('change',()=>{frame.src=new URL(page.value||'./',root);});
  width.addEventListener('change',resize);resize();
})();
