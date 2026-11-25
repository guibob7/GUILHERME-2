(function(){
  var t=document.getElementById('menu-toggle'),m=document.getElementById('menu'),b=document.getElementById('top');
  t.addEventListener('click',function(){
    var o=m.classList.toggle('active');t.classList.toggle('active',o);
    t.setAttribute('aria-expanded',o);t.setAttribute('aria-label',o?'Fechar menu':'Abrir menu');
  });
  m.querySelectorAll('a').forEach(function(a){a.addEventListener('click',function(){m.classList.remove('active');t.classList.remove('active');t.setAttribute('aria-expanded','false');});});
  window.addEventListener('scroll',function(){b.classList.toggle('show',window.scrollY>500);});
  b.addEventListener('click',function(){window.scrollTo({top:0});});
  document.getElementById('ano').textContent=new Date().getFullYear();
})();
