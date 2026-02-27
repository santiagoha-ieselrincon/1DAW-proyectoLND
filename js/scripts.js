const NAV_BUTTON = document.querySelector(".nav-hamburger"); // Boton menu
const NAV_MENU = document.querySelector(".nav-menu"); // Menu de navegacion
const THEME_TOGGLE = document.querySelector(".dark_mode-toggle"); // Boton modo oscuro/claro
const HTML = document.documentElement;

// El boton de 🌕/☀️ intercambia entre modo claro y oscuro
THEME_TOGGLE.addEventListener("click", () => {
  const THEME = HTML.getAttribute("data-theme");

  if (THEME === "dark") {
    HTML.setAttribute("data-theme", "light");
  } else if (THEME === "light") {
    HTML.setAttribute("data-theme", "dark");
  } else {
    // No hay un tema seleccionado y defiere a las preferencias del sistema
    const isDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    HTML.setAttribute("data-theme", isDarkMode ? "light" : "dark");
  }
});

// Hacer click en el boton esconde/muestra el menu
NAV_BUTTON.addEventListener("click", (e) => {
  NAV_MENU.classList.toggle("active");
  e.stopPropagation(); // Prevent event from bubbling to document
});

// Tocar fuera del menu oculta el menu
document.addEventListener("click", (e) => {
  const isClickInsideMenu = NAV_MENU.contains(e.target);
  const isClickOnButton = NAV_BUTTON.contains(e.target);

  if (
    !isClickInsideMenu &&
    !isClickOnButton &&
    NAV_MENU.classList.contains("active")
  ) {
    NAV_MENU.classList.remove("active");
  }
});

// Seleccionar una seccion del menu lo oculta
const NAV_LINKS = document.querySelectorAll(".nav-elems a");
NAV_LINKS.forEach((link) => {
  link.addEventListener("click", () => {
    if (NAV_MENU.classList.contains("active")) {
      NAV_MENU.classList.remove("active");
    }
  });
});

// Navbar auto-hide: aparece cuando el ratón está cerca del top (desktop only)
const HEADER = document.querySelector("header");
let navHideTimer = null;

function showNavbar() {
  HEADER.classList.add("nav-visible");
  clearTimeout(navHideTimer);
  navHideTimer = null;
}

function scheduleNavHide() {
  if (navHideTimer) return;
  navHideTimer = setTimeout(() => {
    HEADER.classList.remove("nav-visible");
    navHideTimer = null;
  }, 2000);
}

document.addEventListener("mousemove", (e) => {
  if (window.innerWidth < 1440) return;
  if (e.clientY < window.innerHeight * 0.2) {
    showNavbar();
  } else if (HEADER.classList.contains("nav-visible")) {
    scheduleNavHide();
  }
});

document.addEventListener("mouseleave", () => {
  if (window.innerWidth < 1440) return;
  if (HEADER.classList.contains("nav-visible")) {
    scheduleNavHide();
  }
});

// RSS feed panel toggle
const FEED_TOGGLE = document.querySelector(".feed-toggle");
const FEED = document.querySelector(".feed");
const FEED_CLOSE = document.querySelector(".feed-close");

FEED_TOGGLE.addEventListener("click", (e) => {
  FEED.classList.toggle("active");
  FEED_TOGGLE.classList.toggle("active");
  e.stopPropagation();
});

FEED_CLOSE.addEventListener("click", () => {
  FEED.classList.remove("active");
  FEED_TOGGLE.classList.remove("active");
});

document.addEventListener("click", (e) => {
  const isClickInsideFeed = FEED.contains(e.target);
  const isClickOnFeedToggle = FEED_TOGGLE.contains(e.target);

  if (
    !isClickInsideFeed &&
    !isClickOnFeedToggle &&
    FEED.classList.contains("active")
  ) {
    FEED.classList.remove("active");
    FEED_TOGGLE.classList.remove("active");
  }
});
