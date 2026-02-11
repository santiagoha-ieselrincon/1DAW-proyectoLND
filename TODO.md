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
- **Desktop**: `@media (min-width: 1440px)`

### 2.1 Setup and Reset

- [x] Import Google Font (Inter or similar clean font)
- [x] Basic CSS reset:
  - `box-sizing: border-box`
  - Remove default margins/padding
  - Set base font-family

### 2.2 CSS Variables

- [X] Define color palette in `:root`
- [X] Include spacing scale for consistency
- [X] Add transition defaults

### 2.3 Typography (Responsive)

- [X] Responsive texts (headings, paragraphs, links, etc.)
- [X] Link styles with hover states

### 2.4 Layout (Responsive Container & Sections)

- [x] Set sections to `min-height: 100vh`
- [X] Responsive padding that increases with viewport
- [X] Centered container with max-width
- [X] Flexbox centering for hero

### 2.5 Navigation (Responsive)

- [X] Mobile & tablet: side menu that appears and hides 
- [X] Desktop: fixed position, horizontal layout
- [X] Hover states and transitions

### 2.6 Projects Grid (Responsive)

- [X] Diseño responsive
  - [X] Mobile: 1 column (default)
  - [X] Tablet (`min-width: 768px`): 2 columns
  - [X] Desktop (`min-width: 1440px`): 3 columns
- [X] Keep current image size (no stretching/cropping)
- [X] Rounded corners and hover effects
- [X] Card content (title, description, figure) properly spaced

### 2.7 Table (Responsive)

- [X] Collapsed column on mobile & tablet
- [X] Full table visible on desktop+

### 2.8 Form (Responsive)

- [X] Stacked layout
- [X] Touch-friendly input sizes

### 2.9 Footer

- [X] Simple centered layout
- [X] Responsive padding

## Checklist Summary

**HTML Elements Required:**

- [x] Semantic tags: header, nav, main, section, article, footer, figure, figcaption
- [x] Headings: h1, h2, h3
- [ ] Text: strong, em, span
- [x] Table: table, thead, tbody, tfoot, tr, th, td
- [x] Links: 2 external, 2+ internal
- [X] Images: img with figure/figcaption
- [x] Form: form, label, input, textarea, button

**CSS Foundations:**

- [x] Google Font imported
- [x] CSS color variables
- [x] Sections full viewport height
- [X] Responsive typography (scales across 3 breakpoints)
- [X] Container with responsive padding
- [X] Responsive navigation menu
- [X] Projects grid responsive (1 col → 2 col → 3 col)

---

## Phase 3: Dark/Light Mode Implementation

- [X] Light mode displays correctly with default colors
- [X] Dark mode displays correctly when system preference is dark
- [X] Theme toggle button is visible and styled properly
- [X] Clicking toggle switches between light and dark mode
- [X] Glassmorphism effects work in both themes
- [X] All text is readable in both themes
- [X] Form inputs and buttons styled appropriately in both themes
- [X] Fix: Icons in toggle button show incorrectly when system is in dark mode
