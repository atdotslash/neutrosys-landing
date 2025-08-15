// AOS
AOS.init({ once: true, duration: 600, offset: 80, easing: 'ease-out' });

// Año en footer
document.getElementById('year').textContent = new Date().getFullYear();

// Menú mobile
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');
navToggle.addEventListener('click', () => navLinks.classList.toggle('open'));

// Envío de formulario (simple: abre mail)
function handleSubmit(e){
  e.preventDefault();
  const data = new FormData(e.target);
  const nombre = data.get('nombre');
  const email = data.get('email');
  const whatsapp = data.get('whatsapp') || '';
  const mensaje = data.get('mensaje');

  const subject = encodeURIComponent(`Consulta desde la web - ${nombre}`);
  const body = encodeURIComponent(`Nombre: ${nombre}\nEmail: ${email}\nWhatsApp: ${whatsapp}\n\nMensaje:\n${mensaje}`);
  window.location.href = `mailto:contacto@neutrosys.com.ar?subject=${subject}&body=${body}`;
  return false;
}
window.handleSubmit = handleSubmit;
