const serviceTabs = [...document.querySelectorAll('[role="tab"]')];
function activateService(tab) {
  serviceTabs.forEach(item => {
    const selected = item === tab;
    item.setAttribute('aria-selected', String(selected));
    item.tabIndex = selected ? 0 : -1;
    document.getElementById(item.getAttribute('aria-controls')).hidden = !selected;
  });
}
serviceTabs.forEach((tab, index) => {
  tab.addEventListener('click', () => activateService(tab));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') next = (index + 1) % serviceTabs.length;
    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') next = (index - 1 + serviceTabs.length) % serviceTabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = serviceTabs.length - 1;
    if (next !== undefined) {event.preventDefault();activateService(serviceTabs[next]);serviceTabs[next].focus();}
  });
});
const guideData = {
 revision: {service:'Revisión y mantenimiento',title:'Un buen momento para ponerlo a punto.',text:'Ten a mano el modelo, los kilómetros y cuándo se hizo la última revisión. Con eso, el equipo podrá orientarte mejor.'},
 averia: {service:'Diagnosis electrónica',title:'Lo que notas es el punto de partida.',text:'Cuéntanos qué ha cambiado y desde cuándo: un ruido, un testigo o un comportamiento distinto. El equipo estudiará cómo proceder.'},
 cambio: {service:'Cambio automático',title:'Hablemos de cómo cambia tu coche.',text:'Indica modelo, kilometraje y si has notado algún cambio en su funcionamiento. Consultamos contigo el mantenimiento que puede necesitar.'},
 chapa: {service:'Chapa y pintura',title:'Ese detalle puede volver a estar bien.',text:'Describe el roce o el golpe y la zona afectada. Si contactas por WhatsApp, puedes adjuntar fotografías para explicar mejor tu consulta.'},
 consulta: {service:'Otra consulta',title:'No hace falta tener todas las respuestas.',text:'Explícanos tu duda con tus palabras. Te ayudamos a identificar el siguiente paso para tu vehículo.'}
};
document.querySelectorAll('[data-guide]').forEach(button => button.addEventListener('click', () => {
  const data = guideData[button.dataset.guide];
  document.querySelectorAll('[data-guide]').forEach(item => item.setAttribute('aria-pressed', String(item === button)));
  document.querySelector('#guide-category').textContent = data.service.toLocaleUpperCase('es');
  document.querySelector('#guide-title').textContent = data.title;
  document.querySelector('#guide-text').textContent = data.text;
  document.querySelector('#guide-book').dataset.service = data.service;
}));
const checkboxes = [...document.querySelectorAll('[name="visit-item"]')];
checkboxes.forEach(input => input.addEventListener('change', () => {
  const count = checkboxes.filter(item => item.checked).length;
  document.querySelector('#check-count').textContent = `${count} de 4 preparados`;
  const progress = document.querySelector('[role="progressbar"]');
  progress.setAttribute('aria-valuenow', String(count));
  progress.firstElementChild.style.width = `${count * 25}%`;
}));
const gallery = document.querySelector('#gallery-dialog');
let galleryTrigger;
document.querySelectorAll('[data-gallery]').forEach(button => button.addEventListener('click', () => {
  galleryTrigger = button;
  const image = document.querySelector('#gallery-image');
  image.src = button.dataset.gallery;
  image.alt = button.querySelector('img').alt;
  document.querySelector('#gallery-caption').textContent = button.dataset.caption;
  document.body.classList.add('modal-open');
  gallery.showModal();
}));
document.querySelector('.gallery-close').addEventListener('click', () => gallery.close());
gallery.addEventListener('click', event => {
 if (event.target !== gallery) return;
 const rect = gallery.getBoundingClientRect();
 if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) gallery.close();
});
gallery.addEventListener('close', () => {document.body.classList.remove('modal-open');galleryTrigger?.focus();});
