# TODO - Portfolio First Iteration

## Phase 1: HTML Structure

### 1.1 Base Document Setup
- [X] Create DOCTYPE and html tag with `lang="es"`
- [X] Add meta charset UTF-8
- [X] Add meta viewport for responsive design
- [X] Add meta description
- [X] Add page title
- [X] Link to `css/style.css`

### 1.2 Navigation Bar
- [X] Create `<header>` with `<nav>` inside
- [X] Add unordered list `<ul>` with navigation items
- [X] Internal links (4):
  - `#hero` - Inicio
  - `#about` - Sobre mí
  - `#projects` - Proyectos
  - `#contact` - Contacto
- [X] External links (2):
  - GitHub profile
  - LinkedIn profile

### 1.3 Hero Section (Section 1)
- [X] Create `<section id="hero">`
- [X] Add `<h1>` with name/title
- [X] Add introductory `<p>` paragraph
- [ ] Use required text tags:
  - `<strong>` for emphasis on key words
  - `<em>` for italicized terms
  - `<span>` for inline styling hooks

### 1.4 About/Skills Section (Section 2)
- [X] Create `<section id="about">`
- [X] Add `<h2>` section heading
- [X] Add brief bio paragraph
- [X] Create skills table with:
  - `<table>` wrapper
  - `<thead>` with column headers (Tecnología, Nivel, Experiencia)
  - `<tbody>` with 4-5 skill rows
  - `<tfoot>` with summary row

### 1.5 Projects Section (Section 3)
- [X] Create `<section id="projects">`
- [X] Add `<h2>` section heading
- [X] Create 2-3 project cards, each with:
  - `<article>` wrapper
  - `<figure>` containing:
    - `<img>` with src, alt, width, height
    - `<figcaption>` with brief description
  - `<h3>` project title
  - `<p>` project description

### 1.6 Contact Section (Section 4)
- [X] Create `<section id="contact">`
- [X] Add `<h2>` section heading
- [X] Create `<form>` with:
  - Name input (`<label>` + `<input type="text">`)
  - Email input (`<label>` + `<input type="email">`)
  - Message textarea (`<label>` + `<textarea>`)
  - Submit button (`<button type="submit">`)

### 1.7 Footer
- [X] Create `<footer>`
- [X] Add copyright text
- [X] Duplicate external links (GitHub, LinkedIn)

---

## Phase 2: Minimal CSS (Responsive Foundation)

### Breakpoint Strategy

Three viewport sizes as required:
- **Mobile**: Default styles (< 768px)
- **Tablet**: `@media (min-width: 768px)`
- **Desktop**: `@media (min-width: 1024px)`

### 2.1 Setup and Reset
- [X] Import Google Font (Inter or similar clean font)
- [X] Basic CSS reset:
  - `box-sizing: border-box`
  - Remove default margins/padding
  - Set base font-family

### 2.2 CSS Variables
- [ ] Define color palette in `:root`
- [ ] Include spacing scale for consistency
- [ ] Add transition defaults

>[!note] averiguar sobre escala y transiciones

```css
:root {
  /* Spacing scale */
  --space-xs: 0.5rem;    /* 8px */
  --space-sm: 1rem;      /* 16px */
  --space-md: 1.5rem;    /* 24px */
  --space-lg: 2rem;      /* 32px */
  --space-xl: 3rem;      /* 48px */
  --space-2xl: 4rem;     /* 64px */

  /* Container widths */
  --container-sm: 640px;
  --container-md: 768px;
  --container-lg: 1024px;
  --container-xl: 1200px;

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
}
```

---

### 2.3 Typography (Responsive)
- [ ] Fluid font sizes that scale with viewport
- [ ] Responsive heading hierarchy
- [ ] Link styles with hover states

**Ejemplo de tipografía para vista móvil**

```css
/* Base typography - Mobile */
p {
  color: var(--color-text-muted);
}

/* Buscar un estilo interesante para las anchor */
/*  -- Ejemplo --
 a { 
  color: var(--color-accent);
  text-decoration: none;
  transition: color var(--transition-fast);
}

a:hover {
  color: var(--color-accent-hover);
}
*/
```

---

### 2.4 Layout (Responsive Container & Sections)
- [X] Set sections to `min-height: 100vh`
- [ ] Responsive padding that increases with viewport
- [ ] Centered container with max-width
- [ ] Flexbox centering for hero

### 2.5 Navigation (Responsive)
- [ ] Mobile: probar alternativas a barra de navegación
- [ ] Tablet+: fixed position, horizontal layout
- [ ] Hover states and transitions

---

### 2.6 Projects Grid (Responsive)
- [ ] Single column 
- [ ] 2 columns on tablet
- [ ] 3 columns on desktop

---

>[!note] Valorar diseño de la tabla
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
  min-width: 500px;           /* forces scroll on small screens */
  border-collapse: collapse;
}

th, td {
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
    min-width: auto;          /* no forced scroll */
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
- [X] Semantic tags: header, nav, main, section, article, footer, figure, figcaption
- [X] Headings: h1, h2, h3
- [ ] Text: strong, em, span
- [X] Table: table, thead, tbody, tfoot, tr, th, td
- [X] Links: 2 external, 2+ internal
- [ ] Images: img with figure/figcaption
- [X] Form: form, label, input, textarea, button

**CSS Foundations:**
- [X] Google Font imported
- [X] CSS color variables
- [X] Sections full viewport height
- [ ] Responsive typography (scales across 3 breakpoints)
- [ ] Container with responsive padding
- [ ] Navigation responsive (scroll mobile → centered tablet → fixed desktop)
- [ ] Projects grid responsive (1 col → 2 col → 3 col)
- [ ] Table with horizontal scroll wrapper for mobile
- [ ] Form with touch-friendly inputs
- [ ] Media queries at 768px and 1024px
