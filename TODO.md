# TODO - Portfolio First Iteration

## Phase 1: HTML Structure

### 1.1 Base Document Setup

- [x] Create DOCTYPE and html tag with `lang="es"`
- [x] Add meta charset UTF-8
- [x] Add meta viewport for responsive design
- [x] Add meta description
- [x] Add page title
- [x] Link to `css/style.css`

### 1.2 Navigation Bar

- [x] Create `<header>` with `<nav>` inside
- [x] Add unordered list `<ul>` with navigation items
- [x] Internal links (4):
  - `#hero` - Inicio
  - `#about` - Sobre mí
  - `#projects` - Proyectos
  - `#contact` - Contacto
- [x] External links (2):
  - GitHub profile
  - LinkedIn profile

### 1.3 Hero Section (Section 1)

- [x] Create `<section id="hero">`
- [x] Add `<h1>` with name/title
- [x] Add introductory `<p>` paragraph
- [ ] Use required text tags:
  - `<strong>` for emphasis on key words
  - `<em>` for italicized terms
  - `<span>` for inline styling hooks

### 1.4 About/Skills Section (Section 2)

- [x] Create `<section id="about">`
- [x] Add `<h2>` section heading
- [x] Add brief bio paragraph
- [x] Create skills table with:
  - `<table>` wrapper
  - `<thead>` with column headers (Tecnología, Nivel, Experiencia)
  - `<tbody>` with 4-5 skill rows
  - `<tfoot>` with summary row

### 1.5 Projects Section (Section 3)

- [x] Create `<section id="projects">`
- [x] Add `<h2>` section heading
- [x] Create 2-3 project cards, each with:
  - `<article>` wrapper
  - `<figure>` containing:
    - `<img>` with src, alt, width, height
    - `<figcaption>` with brief description
  - `<h3>` project title
  - `<p>` project description

### 1.6 Contact Section (Section 4)

- [x] Create `<section id="contact">`
- [x] Add `<h2>` section heading
- [x] Create `<form>` with:
  - Name input (`<label>` + `<input type="text">`)
  - Email input (`<label>` + `<input type="email">`)
  - Message textarea (`<label>` + `<textarea>`)
  - Submit button (`<button type="submit">`)

### 1.7 Footer

- [x] Create `<footer>`
- [x] Add copyright text
- [x] Duplicate external links (GitHub, LinkedIn)

---

## Phase 2: Minimal CSS (Responsive Foundation)

### Breakpoint Strategy

Three viewport sizes as required:

- **Mobile**: Default styles (< 768px)
- **Tablet**: `@media (min-width: 768px)`
- **Desktop**: `@media (min-width: 1024px)`

### 2.1 Setup and Reset

- [x] Import Google Font (Inter or similar clean font)
- [x] Basic CSS reset:
  - `box-sizing: border-box`
  - Remove default margins/padding
  - Set base font-family

### 2.2 CSS Variables

- [X] Define color palette in `:root`
- [X] Include spacing scale for consistency
- [ ] Add transition defaults

### 2.3 Typography (Responsive)

- [ ] Responsive texts (headings, paragraphs, links, etc.)
- [ ] Link styles with hover states

### 2.4 Layout (Responsive Container & Sections)

- [x] Set sections to `min-height: 100vh`
- [ ] Responsive padding that increases with viewport
- [ ] Centered container with max-width
- [X] Flexbox centering for hero

### 2.5 Navigation (Responsive)

- [X] Mobile & tablet: side menu that appears and hides 
- [X] Desktop: fixed position, horizontal layout
- [ ] Hover states and transitions

---

### 2.6 Projects Grid (Responsive)

- [ ] Single column
- [ ] 2 columns on tablet
- [ ] 3 columns on desktop

---

> [!note] Valorar diseño de la tabla

### 2.7 Table (Responsive)

- [ ] Horizontal scroll wrapper on mobile
- [ ] Full table visible on tablet+

```css
/* Table wrapper for mobile scroll */
.table-wrapper {
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
}

table {
  width: 100%;
  min-width: 500px; /* forces scroll on small screens */
  border-collapse: collapse;
}

th,
td {
  padding: var(--space-sm);
  text-align: left;
  border-bottom: 1px solid var(--color-border);
}

thead {
  background: var(--color-bg);
}

th {
  font-weight: 600;
  color: var(--color-text);
}

tfoot {
  background: var(--color-bg);
  font-weight: 500;
}

@media (min-width: 768px) {
  table {
    min-width: auto; /* no forced scroll */
  }
}
```

---

### 2.8 Form (Responsive)

- [ ] Stacked layout on mobile
- [ ] Inline labels possible on desktop
- [ ] Touch-friendly input sizes

### 2.9 Footer

- [ ] Simple centered layout
- [ ] Responsive padding

## Checklist Summary

**HTML Elements Required:**

- [x] Semantic tags: header, nav, main, section, article, footer, figure, figcaption
- [x] Headings: h1, h2, h3
- [ ] Text: strong, em, span
- [x] Table: table, thead, tbody, tfoot, tr, th, td
- [x] Links: 2 external, 2+ internal
- [ ] Images: img with figure/figcaption
- [x] Form: form, label, input, textarea, button

**CSS Foundations:**

- [x] Google Font imported
- [x] CSS color variables
- [x] Sections full viewport height
- [ ] Responsive typography (scales across 3 breakpoints)
- [ ] Container with responsive padding
- [ ] Navigation responsive (scroll mobile → centered tablet → fixed desktop)
- [ ] Projects grid responsive (1 col → 2 col → 3 col)
- [ ] Table with horizontal scroll wrapper for mobile
- [ ] Form with touch-friendly inputs
- [ ] Media queries at 768px and 1024px

---

## Phase 3: Dark/Light Mode Implementation

- [ ] Light mode displays correctly with default colors
- [ ] Dark mode displays correctly when system preference is dark
- [ ] Theme toggle button is visible and styled properly
- [ ] Clicking toggle switches between light and dark mode
- [ ] Theme preference persists after page reload
- [ ] Glassmorphism effects work in both themes
- [ ] All text is readable in both themes
- [ ] Form inputs and buttons styled appropriately in both themes
- [ ] Icons in toggle button change correctly (moon ↔ sun)

### Alternative Color Palettes

If you want to experiment with different color schemes:

**Option 1: Monochrome Dark Mode**

```css
--color-bg: #0f0f0f;
--color-bg-alt: #1a1a1a;
--color-t-principal: #f5f5f5;
--color-t-muteado: #a0a0a0;
--color-acento: #ffffff;
--color-acento-hover: #e0e0e0;
```

**Option 2: Blue-Tinted Dark Mode**

```css
--color-bg: #0d1117;
--color-bg-alt: #161b22;
--color-t-principal: #c9d1d9;
--color-t-muteado: #8b949e;
--color-acento: #58a6ff;
--color-acento-hover: #79c0ff;
```

**Option 3: Warm Dark Mode**

```css
--color-bg: #1e1410;
--color-bg-alt: #2b1f19;
--color-t-principal: #f4e4d4;
--color-t-muteado: #b8a590;
--color-acento: #ff9966;
--color-acento-hover: #ffb399;
```

---

#### CSS Implementation

```css
:root {
  /* Default Light Mode */
  --color-bg: #F5FBE6;
  --color-bg-alt: #EAEFEF;
  --color-t-principal: #215E61;
  --color-t-muteado: #BFC9D1;
  --color-acento: #FE7F2D;
  --color-acento-hover: #E6501B;

  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.18);
  --glass-shadow: rgba(31, 38, 135, 0.15);

  color-scheme: light;
}

/* Automatic dark mode from system preference */
@media (prefers-color-scheme: dark) {
  :root:not([data-theme]) {
    --color-bg: #1a1f2e;
    --color-bg-alt: #252b3d;
    --color-t-principal: #e8f0f2;
    --color-t-muteado: #8b95a5;
    --color-acento: #ff8c42;
    --color-acento-hover: #ffa366;

    --glass-bg: rgba(0, 0, 0, 0.3);
    --glass-border: rgba(255, 255, 255, 0.1);
    --glass-shadow: rgba(0, 0, 0, 0.3);

    color-scheme: dark;
  }
}

/* Manual dark mode override */
:root[data-theme="dark"] {
  --color-bg: #1a1f2e;
  --color-bg-alt: #252b3d;
  --color-t-principal: #e8f0f2;
  --color-t-muteado: #8b95a5;
  --color-acento: #ff8c42;
  --color-acento-hover: #ffa366;

  --glass-bg: rgba(0, 0, 0, 0.3);
  --glass-border: rgba(255, 255, 255, 0.1);
  --glass-shadow: rgba(0, 0, 0, 0.3);

  color-scheme: dark;
}

/* Manual light mode override */
:root[data-theme="light"] {
  --color-bg: #F5FBE6;
  --color-bg-alt: #EAEFEF;
  --color-t-principal: #215E61;
  --color-t-muteado: #BFC9D1;
  --color-acento: #FE7F2D;
  --color-acento-hover: #E6501B;

  --glass-bg: rgba(255, 255, 255, 0.1);
  --glass-border: rgba(255, 255, 255, 0.18);
  --glass-shadow: rgba(31, 38, 135, 0.15);

  color-scheme: light;
}

/* Theme toggle button styles */
.theme-toggle {
  position: fixed;
  top: 1rem;
  right: 1rem;
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background: var(--glass-bg);
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 16px var(--glass-shadow);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  z-index: 100;
}

.theme-toggle:hover {
  background: var(--color-acento);
  transform: scale(1.1);
}

.theme-toggle i {
  font-size: 1.25rem;
  color: var(--color-t-principal);
  position: absolute;
  transition: opacity 0.3s ease, transform 0.3s ease;
}

/* Hide/show icons based on theme */
.theme-toggle .fa-sun {
  opacity: 0;
  transform: rotate(180deg);
}

.theme-toggle .fa-moon {
  opacity: 1;
  transform: rotate(0deg);
}

:root[data-theme="dark"] .theme-toggle .fa-sun {
  opacity: 1;
  transform: rotate(0deg);
}

:root[data-theme="dark"] .theme-toggle .fa-moon {
  opacity: 0;
  transform: rotate(-180deg);
}

@media (min-width: 1440px) {
  .theme-toggle {
    position: static;
    margin-left: auto;
  }
}
```

#### JavaScript Implementation (Simple Toggle)

```javascript
// ===== SIMPLE DARK/LIGHT MODE TOGGLE =====

const THEME_TOGGLE = document.querySelector('.theme-toggle');
const HTML = document.documentElement;

// Simple toggle using .toggle() method
THEME_TOGGLE.addEventListener('click', () => {
  const currentTheme = HTML.getAttribute('data-theme');

  // Toggle between dark and light
  if (currentTheme === 'dark') {
    HTML.setAttribute('data-theme', 'light');
  } else if (currentTheme === 'light') {
    HTML.setAttribute('data-theme', 'dark');
  } else {
    // If no theme set, check system preference and toggle opposite
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
    HTML.setAttribute('data-theme', isDarkMode ? 'light' : 'dark');
  }
});
```

#### Alternative: Even Simpler Toggle (Remove data-theme to reset)

```javascript
// ===== ULTRA-SIMPLE TOGGLE (3-state cycle) =====

const THEME_TOGGLE = document.querySelector('.theme-toggle');
const HTML = document.documentElement;

THEME_TOGGLE.addEventListener('click', () => {
  const currentTheme = HTML.getAttribute('data-theme');

  // Cycle: null (system) → light → dark → null
  if (!currentTheme) {
    HTML.setAttribute('data-theme', 'light');
  } else if (currentTheme === 'light') {
    HTML.setAttribute('data-theme', 'dark');
  } else {
    HTML.removeAttribute('data-theme'); // Return to system preference
  }
});
```

---


- The `color-scheme` property tells the browser to style form controls, scrollbars, and other native UI elements to match the theme
- Using `data-theme` attribute on `:root` (html element) allows manual override of system preferences
- localStorage persists the user's manual choice across sessions
- The media query `prefers-color-scheme` respects the user's system preference as a fallback
- All colors use CSS custom properties, so the entire site updates automatically when theme changes
