// Scroll reveal
const reveals=document.querySelectorAll('.reveal');
const ro=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)e.target.classList.add('vis')})},{threshold:0.12,rootMargin:'0px 0px -30px 0px'});
reveals.forEach(e=>ro.observe(e));

// Counter animation
function animC(el){
  const t=+el.dataset.target;if(!t||el.dataset.done)return;el.dataset.done='1';
  const d=1800,s=performance.now();
  function u(n){const p=Math.min((n-s)/d,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(t*e).toLocaleString();if(p<1)requestAnimationFrame(u)}
  requestAnimationFrame(u);
}
const counters=document.querySelectorAll('[data-target]');
const co=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting)animC(e.target)})},{threshold:0.5});
counters.forEach(e=>co.observe(e));

// Back to top
const btt=document.getElementById('btt');
if(btt){
  window.addEventListener('scroll',()=>{btt.classList.toggle('show',window.scrollY>400)});
}

// Nav active state
document.addEventListener('DOMContentLoaded',()=>{
  const links=document.querySelectorAll('.nav-links a');
  const current=location.pathname.split('/').pop()||'index.html';
  links.forEach(a=>{
    const href=a.getAttribute('href');
    if(href===current||(current===''&&href==='index.html'))a.classList.add('active');
    else a.classList.remove('active');
  });
});

// Tab switching (for pages with .news-tab or .product-tab)
document.addEventListener('click',e=>{
  const tab=e.target.closest('.news-tab,.product-tab');
  if(!tab)return;
  const group=tab.parentElement;
  group.querySelectorAll('.news-tab,.product-tab').forEach(t=>t.classList.remove('active'));
  tab.classList.add('active');
});
