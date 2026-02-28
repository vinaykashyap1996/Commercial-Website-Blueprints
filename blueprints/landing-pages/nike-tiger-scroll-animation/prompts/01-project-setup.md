# Prompt 01: Project Setup

## Context

This prompt sets up the complete HTML structure and CSS foundation for a Nike-inspired scroll animation landing page. It creates the page skeleton with all sections and a CSS design system with custom properties.

## The Prompt

```
Build the foundation for a premium Nike-inspired landing page with a scroll-driven animation hero.

Create two files: index.html and style.css

**index.html requirements:**
- Use semantic HTML5
- Include Google Fonts: Antonio (weight 700) for headings and Archivo Narrow (weights 400, 500, 600, 700) for body text
- Link style.css

Create these sections in order:

1. PRELOADER — a full-screen overlay (id="preloader") containing:
   - A brand logo text (e.g., "NIKE")
   - A thin progress bar with a fill element (id="preloader-fill")
   - A percentage counter (id="preloader-count") showing "0%"

2. NAVIGATION — fixed top nav (id="nav") with a centered SVG logo (Nike swoosh or your brand logo)

3. HERO SECTION (id="hero") — this will contain the scroll animation:
   - An outer section with class "hero"
   - A sticky inner container (class "hero__sticky") that stays pinned during scroll
   - Two <canvas> elements inside: "ambient-canvas" (background glow) and "tiger-canvas" (foreground sharp image)
   - A content overlay with a large headline (e.g., "HUNGRY FOR MORE") and a scroll cue indicator

4. PRODUCT INTRO SECTION (id="intro") — centered text section:
   - Eyebrow text ("First Look")
   - Large title ("NIKE AIR MAX PULSE")
   - Description paragraph about the product
   - Two buttons: "Notify Me" (solid dark) and "Learn More" (outline)

5. CAROUSEL SECTION (id="carousel"):
   - Header with title ("Best of Air Max") and left/right arrow buttons
   - A track container (id="carousel-track") where product cards will be injected by JavaScript

6. FEATURED BANNER SECTION (id="featured"):
   - A large lifestyle image (use an Unsplash URL as placeholder)
   - A bold headline ("STEP INTO WHAT FEELS GOOD")

7. ESSENTIALS SECTION (id="essentials"):
   - Title ("The Essentials")
   - A 3-column grid with category cards (Men's, Women's, Kids')
   - Each card has a tall image and an overlaid white button

8. FOOTER — dark background with:
   - 4-column link grid (Icons, Shoes, Support, Company)
   - Copyright bar at the bottom

Add CDN scripts before closing </body> tag:
- Lenis (smooth scroll): https://cdn.jsdelivr.net/npm/lenis@1.1.18/dist/lenis.min.js
- GSAP: https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js
- ScrollTrigger: https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js
- app.js (local script)

**style.css requirements:**
- Full CSS reset (margin, padding, box-sizing on all elements)
- CSS custom properties on :root:
  --black: #111
  --carbon: #0b0b0b
  --white: #ffffff
  --font-heading: 'Antonio', sans-serif
  --font-body: 'Archivo Narrow', sans-serif
  --ease-out: cubic-bezier(0.16, 1, 0.3, 1)
- Base styles for html (font-size 16px, font smoothing), body (font-family, overflow-x hidden), a, ul, img
- Lenis overrides: html.lenis and html.lenis body should have height: auto
- Preloader styles: fixed full-screen overlay with centered content, animated progress bar
- Navigation styles: fixed top, centered logo, white color that transitions to dark
- Use BEM naming convention throughout

Do NOT write any JavaScript yet — just the HTML structure and CSS foundation.
```

## Expected Output

Two files:
- `index.html` — Complete semantic HTML with all 8 sections, Google Fonts, and CDN scripts
- `style.css` — CSS reset, custom properties, and styles for the preloader and navigation

## What to Check

- [ ] All 8 sections are present in the HTML with correct IDs
- [ ] Google Fonts are loaded with correct weights
- [ ] CDN scripts are in the correct order (Lenis → GSAP → ScrollTrigger → app.js)
- [ ] CSS custom properties are defined on `:root`
- [ ] Preloader has working styles (centered, full-screen overlay)
- [ ] BEM naming convention is used consistently
- [ ] Both canvas elements have correct IDs ("ambient-canvas" and "tiger-canvas")

## Common Issues

- **Fonts not loading**: Make sure both `preconnect` links are present before the font stylesheet link
- **Canvas not visible**: The canvases won't show anything until JavaScript renders to them — this is expected at this stage
- **Preloader visible**: The preloader should be visible by default; it gets hidden by JavaScript later
