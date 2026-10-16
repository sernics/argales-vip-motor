const designNames = {'version-1':'Guardada',editorial:'Editorial',precision:'Precisión'};
const frame = document.querySelector('#design-preview');
function showDesign(design, updateUrl = true) {
 if (!Object.hasOwn(designNames,design)) design = 'editorial';
 document.querySelectorAll('[data-design]').forEach(button => button.setAttribute('aria-current',button.dataset.design === design ? 'page':'false'));
 const target = `${design}/`;
 if (frame.getAttribute('src') !== target) frame.src = target;
 frame.title = `Propuesta ${designNames[design]} de Argales VIP Motor`;
 document.querySelector('#open-design').href = target;
 document.querySelector('#design-status').textContent = `Mostrando la propuesta ${designNames[design]}.`;
 if (updateUrl) {
   const url = new URL(location.href); url.searchParams.set('diseno',design); history.replaceState(null,'',url);
 }
}
document.querySelectorAll('[data-design]').forEach(button => button.addEventListener('click',()=>showDesign(button.dataset.design)));
document.querySelectorAll('[data-size]').forEach(button => button.addEventListener('click',()=>{
 document.querySelector('.review-stage').classList.toggle('mobile',button.dataset.size === 'mobile');
 document.querySelectorAll('[data-size]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));
}));
showDesign(new URLSearchParams(location.search).get('diseno') || 'editorial',false);
window.addEventListener('popstate',()=>showDesign(new URLSearchParams(location.search).get('diseno') || 'editorial',false));
