// TODO: Implementar el interruptor de Modo Oscuro/Claro
// document.documentElement.classList.toggle('dark');

const NAV_BUTTON = document.querySelector('.nav-hamburger'); // Boton menu
const NAV_MENU = document.querySelector('.nav-menu'); // Menu de navegacion

// Hacer click en el boton esconde/muestra el menu
NAV_BUTTON.addEventListener('click', () => {
  NAV_MENU.classList.toggle('active');
  e.stopPropagation(); // Prevent event from bubbling to document
});

// Tocar fuera del menu oculta el menu
document.addEventListener('click', (e) => {
  const isClickInsideMenu = NAV_MENU.contains(e.target);
  const isClickOnButton = NAV_BUTTON.contains(e.target);

  if (!isClickInsideMenu && !isClickOnButton && NAV_MENU.classList.contains('active')) {
    NAV_MENU.classList.remove('active');
  }
});

// Seleccionar una seccion del menu lo oculta
const NAV_LINKS = document.querySelectorAll('.nav-elems a');
NAV_LINKS.forEach(link => {
  link.addEventListener('click', () => {
    if (NAV_MENU.classList.contains('active')) {
      NAV_MENU.classList.remove('active');
    }
  });
});
