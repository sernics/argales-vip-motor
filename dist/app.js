const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', 'Abrir menú');
  navigation.classList.remove('open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
  navigation.classList.toggle('open', open);
});
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width:761px)').addEventListener('change', event => { if (event.matches) closeMenu(); });
const booking = document.querySelector('#booking');
const form = document.querySelector('#booking-form');
const formStatus = document.querySelector('#form-status');
let bookingTrigger;
document.querySelectorAll('[data-book]').forEach(button => button.addEventListener('click', () => {
  bookingTrigger = button;
  form.reset();
  formStatus.hidden = true;
  formStatus.replaceChildren();
  form.elements.service.value = button.dataset.service || '';
  closeMenu();
  document.body.classList.add('modal-open');
  booking.showModal();
}));
document.querySelector('.close-dialog').addEventListener('click', () => booking.close());
booking.addEventListener('click', event => {
  if (event.target !== booking) return;
  const box = booking.getBoundingClientRect();
  if (event.clientX < box.left || event.clientX > box.right || event.clientY < box.top || event.clientY > box.bottom) booking.close();
});
booking.addEventListener('close', () => {
  document.body.classList.remove('modal-open');
  bookingTrigger?.focus();
});
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const name = data.get('name').trim();
  const car = data.get('car').trim();
  if (!name || !car) {
    formStatus.textContent = 'Escribe tu nombre y el modelo de tu coche para continuar.';
    formStatus.hidden = false;
    return;
  }
  const message = `Hola, Argales VIP Motor. Soy ${name}. Me gustaría solicitar una cita.\n\nVehículo: ${car}\nServicio: ${data.get('service')}${data.get('message').trim() ? `\nConsulta: ${data.get('message').trim()}` : ''}\n\n¿Podéis indicarme disponibilidad? Gracias.`;
  const url = `https://wa.me/34722342805?text=${encodeURIComponent(message)}`;
  window.open(url, '_blank', 'noopener,noreferrer');
  formStatus.replaceChildren(document.createTextNode('Tu solicitud está preparada. Si WhatsApp no se ha abierto, '));
  const link = document.createElement('a');
  link.href = url;
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.textContent = 'continúa aquí';
  formStatus.append(link, document.createTextNode('. La cita quedará pendiente de confirmación por el taller.'));
  formStatus.hidden = false;
});
document.querySelector('#year').textContent = new Date().getFullYear();
