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
- [ ] Create `<section id="contact">`
- [ ] Add `<h2>` section heading
- [ ] Create `<form>` with:
  - Name input (`<label>` + `<input type="text">`)
  - Email input (`<label>` + `<input type="email">`)
  - Message textarea (`<label>` + `<textarea>`)
  - Submit button (`<button type="submit">`)

### 1.7 Footer
- [X] Create `<footer>`
- [X] Add copyright text
- [X] Duplicate external links (GitHub, LinkedIn)

---

## Phase 2: Minimal CSS

### 2.1 Setup and Reset
- [X] Import Google Font (Inter or similar clean font)
- [X] Basic CSS reset:
  - `box-sizing: border-box`
  - Remove default margins/padding
  - Set base font-family

### 2.2 CSS Variables
- [ ] Define color palette in `:root`:
  - `--color-bg` (light background)
  - `--color-text` (dark text)
  - `--color-accent` (primary accent)
  - `--color-accent-light` (secondary accent)
  - `--color-muted` (gray tones)

### 2.3 Typography
- [ ] Set base `font-size` on html (16px)
- [ ] Style headings (h1, h2, h3) sizes
- [ ] Set line-height for readability
- [ ] Style links (color, hover state)

### 2.4 Layout
- [ ] Set sections to `min-height: 100vh`
- [ ] Add padding to sections
- [ ] Center content with max-width container
- [ ] Basic flexbox for centering hero content

### 2.5 Navigation
- [ ] Position nav (fixed or static for now)
- [ ] Style nav links inline (flexbox)
- [ ] Basic hover states

### 2.6 Components
- [ ] Table styling:
  - Border-collapse
  - Cell padding
  - Header background
- [ ] Form styling:
  - Input/textarea padding and border
  - Full-width inputs
  - Button base style

---

## Checklist Summary

**HTML Elements Required:**
- [X] Semantic tags: header, nav, main, section, article, footer, figure, figcaption
- [X] Headings: h1, h2, h3
- [ ] Text: strong, em, span
- [X] Table: table, thead, tbody, tfoot, tr, th, td
- [X] Links: 2 external, 2+ internal
- [ ] Images: img with figure/figcaption
- [ ] Form: form, label, input, textarea, button

**CSS Foundations:**
- [X] Google Font imported
- [ ] CSS variables defined
- [ ] Sections full viewport height
- [ ] Basic responsive structure ready for media queries
