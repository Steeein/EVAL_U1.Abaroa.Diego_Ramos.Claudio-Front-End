// script.js - Lógica JS para el sitio

// Cambiamos el tema al hacer clic en el toggle, guardamos en localStorage para que no se pierda.
document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.querySelector('.theme-toggle');
  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      // Cambiar el emoji del botón
      themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
    });

    // Aplicamos el tema guardado al cargar.
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    // Establecer el emoji inicial
    themeToggle.textContent = savedTheme === 'dark' ? '☀️' : '🌙';
  }
});

// Validamos el form antes de enviar: chequeamos que nombre, servicio y mensaje no vengan vacíos.
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // Validar nombre
    const nameInput = document.getElementById('fullName');
    const nameError = document.getElementById('nameError');
    if (!nameInput.value.trim()) {
      nameError.textContent = 'El nombre es obligatorio.';
      isValid = false;
    } else {
      nameError.textContent = '';
    }

    // Validar servicio
    const serviceSelect = document.getElementById('service');
    const serviceError = document.getElementById('serviceError');
    if (!serviceSelect.value) {
      serviceError.textContent = 'Selecciona un servicio.';
      isValid = false;
    } else {
      serviceError.textContent = '';
    }

    // Validar mensaje
    const messageTextarea = document.getElementById('message');
    const messageError = document.getElementById('messageError');
    if (!messageTextarea.value.trim()) {
      messageError.textContent = 'El mensaje es obligatorio.';
      isValid = false;
    } else {
      messageError.textContent = '';
    }

    if (isValid) {
      // Si todo bien, mostramos alerta y limpiamos.
      alert('Formulario enviado correctamente.');
      contactForm.reset();
    }
  });
}