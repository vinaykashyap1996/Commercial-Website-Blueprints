# Nike Tiger Scroll Animation Landing Page

<!-- Add your own screenshot here -->
<!-- <div align="center">
  <img src="screenshots/hero-preview.gif" alt="Nike Tiger Scroll Animation Preview" width="100%">
</div> -->

## Overview

| Property | Value |
|----------|-------|
| **Difficulty** | :red_circle: Advanced |
| **Build Time** | 6-8 hours |
| **Commercial Value** | $8,000 - $15,000 |
| **Tech Stack** | HTML, CSS, JavaScript, GSAP, ScrollTrigger, Lenis, Canvas API |
| **AI Tools Used** | Claude |
| **Live Demo** | Coming Soon |

## What You'll Build

A premium Nike-inspired landing page featuring a **frame-by-frame scroll animation** powered by dual HTML5 canvases. As the user scrolls, a tiger animation plays across 242 frames — the foreground canvas renders the sharp image while a background canvas creates a blurred atmospheric glow effect. Below the hero, the page includes a product intro section, a horizontal snap-scroll product carousel, a featured lifestyle banner, an essentials category grid, and a full footer.

This is the kind of immersive, scroll-driven experience that luxury brands, sneaker companies, and creative agencies pay $8,000-$15,000 for.

## What You'll Learn

- **Dual-canvas architecture** — foreground (sharp) + background (blurred ambient glow)
- **Frame-by-frame scroll animation** with `requestAnimationFrame` throttling
- **GSAP ScrollTrigger** integration for scroll-linked animations
- **Lenis smooth scroll** for buttery scrolling feel
- **Canvas object-fit cover** algorithm implemented manually
- **Preloader** with real progress tracking tied to image load events
- **CSS design system** with custom properties, BEM naming, and responsive breakpoints
- **Horizontal snap-scroll carousel** with JavaScript navigation

## Tech Stack Details

| Technology | Version | Purpose |
|------------|---------|---------|
| GSAP | 3.12.7 | Animation engine |
| ScrollTrigger | 3.12.7 | Scroll-linked animation triggers |
| Lenis | 1.1.18 | Smooth scroll library |
| Google Fonts | — | Antonio (headings) + Archivo Narrow (body) |

## Prerequisites

- Basic knowledge of HTML, CSS, and JavaScript
- Understanding of CSS positioning and the Canvas API (helpful but not required)
- A code editor (VS Code recommended)
- A local server (Live Server extension or similar)
- An AI assistant (Claude, ChatGPT, or Cursor)
- Animation frames (see Step 1 in the blueprint for how to get them)

## Project Structure

```
nike-tiger-scroll-animation/
├── index.html          # Page structure with semantic sections
├── style.css           # Full design system + responsive styles
├── app.js              # TigerExperience + Carousel classes
├── frames/             # 242 animation frame images (not included — see blueprint)
└── assets/             # Product images for the carousel
```

## Get Started

Follow the full tutorial in **[BLUEPRINT.md](BLUEPRINT.md)**.
