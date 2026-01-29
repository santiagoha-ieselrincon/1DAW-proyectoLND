// TODO: Implementar el interruptor de Modo Oscuro/Claro
// document.documentElement.classList.toggle('dark');

const NAV_BUTTON = document.querySelector('.nav-hamburger');
const NAV_MENU = document.querySelector('.nav-menu');

NAV_BUTTON.addEventListener('click', () => {
  NAV_MENU.classList.toggle('active');
});