# Nike Tiger Scroll Animation — Full Build Guide

## Table of Contents

1. [Project Setup](#1-project-setup)
2. [Tiger Canvas Engine](#2-tiger-canvas-engine)
3. [GSAP Scroll Animation](#3-gsap-scroll-animation)
4. [Sections & Carousel](#4-sections--carousel)
5. [Design Polish](#5-design-polish)
6. [Deployment](#6-deployment)

---

## 1. Project Setup

### What We're Doing

Set up the project folder, create the HTML skeleton with all semantic sections, import Google Fonts and CDN scripts, and build a CSS reset with custom properties (design tokens).

### Preparing Your Animation Frames

Before starting, you need 242 sequential frame images. You have two options:

**Option A: Extract from a video/GIF**
1. Find a short tiger video or GIF (2-5 seconds)
2. Use [ezgif.com/split](https://ezgif.com/split) to split it into frames
3. Export as JPG, name them `ezgif-frame-001.jpg` through `ezgif-frame-242.jpg`
4. Place them in a `frames/` folder in your project root

**Option B: Use any sequential image set**
- The technique works with any frame sequence (car reveals, product rotations, character animations)
- Just update the `frameCount` and file naming pattern in the JavaScript

### AI Prompt

> Copy and paste the prompt from [`prompts/01-project-setup.md`](prompts/01-project-setup.md) into your AI tool.

### Expected Result

After this step you should have:
- `index.html` — Full HTML structure with preloader, nav, hero (dual canvases), product intro, carousel, featured banner, essentials grid, and footer
- `style.css` — CSS reset, custom properties (`--black`, `--carbon`, `--white`, font stacks, easing), and base element styles
- CDN scripts linked: Lenis, GSAP, ScrollTrigger
- Google Fonts loaded: Antonio + Archivo Narrow

### Key Files Created

- `index.html` — The complete page structure
- `style.css` — Reset + design tokens only (component styles come later)

---

## 2. Tiger Canvas Engine

### What We're Doing

Build the `TigerExperience` class — the core engine that handles:
- Preloading all 242 frames with a progress bar
- Setting up two canvases (foreground + background) with DPR-aware sizing
- Rendering frames using manual object-fit cover math
- Scheduling renders via `requestAnimationFrame` to avoid dropped frames

### AI Prompt

> Use the prompt from [`prompts/02-tiger-canvas-engine.md`](prompts/02-tiger-canvas-engine.md)

### Key Concepts

**Dual-Canvas Architecture:**
```
┌─────────────────────────┐
│   Background Canvas     │  ← 110% viewport, blur(40px), z-index: 1
│   (atmospheric glow)    │     Creates soft ambient color behind the tiger
│                         │
│  ┌───────────────────┐  │
│  │ Foreground Canvas │  │  ← 100% viewport, sharp, z-index: 2
│  │ (tiger image)     │  │     Renders the actual frame with cover fit
│  └───────────────────┘  │
└─────────────────────────┘
```

**Why two canvases?** The background canvas is blurred with CSS `filter: blur(40px)` and extended to 110% of the viewport. This creates a soft colored glow that fills any gaps around the sharp foreground image — similar to how iOS shows blurred album art behind a playing song.

**Object-fit Cover on Canvas:** Unlike `<img>` tags, `<canvas>` doesn't have `object-fit`. We implement it manually:
```javascript
// If image is wider than viewport ratio → match height, center horizontally
// If image is taller than viewport ratio → match width, center vertically
```

### Expected Result

- A preloader that shows real loading progress (0% → 100%)
- Preloader fades out when all frames are loaded
- First frame renders on both canvases
- No scrolling interaction yet (that's the next step)

---

## 3. GSAP Scroll Animation

### What We're Doing

Wire up GSAP ScrollTrigger to control the frame animation on scroll. Set up Lenis for smooth scrolling. Add scroll-linked behaviors like hero content fade-out and nav color switching.

### AI Prompt

> Use the prompt from [`prompts/03-gsap-scroll-animation.md`](prompts/03-gsap-scroll-animation.md)

### Key Concepts

**The Scroll-to-Frame Mapping:**
```
Hero section height: 800vh (8x viewport height)
Total frames: 242
Scroll progress: 0.0 → 1.0

Frame index = Math.floor(progress * 241)
```

The hero section is intentionally tall (800vh) to give the scroll animation enough "room" to play smoothly. The `sticky` inner container keeps the canvases pinned to the viewport while the user scrolls through all 800vh.

**Lenis + GSAP Integration:**
```javascript
// Lenis handles the scroll interpolation (smooth, lerped)
// ScrollTrigger handles the animation timing
// They must be connected via gsap.ticker
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
```

**Scrub Value:** `scrub: 0.5` means the animation lags 0.5 seconds behind the scroll position, creating a smooth "catching up" feel rather than jerky 1:1 movement.

### Expected Result

- Scrolling through the hero section plays the tiger animation frame-by-frame
- The animation feels smooth and responsive
- Hero title/content fades out as you begin scrolling
- Nav logo switches from white to black when scrolling past the hero

---

## 4. Sections & Carousel

### What We're Doing

Build the content sections below the hero: product intro with CTA buttons, horizontal product carousel with snap scrolling, featured lifestyle banner, and the essentials category grid.

### AI Prompt

> Use the prompt from [`prompts/04-sections-and-carousel.md`](prompts/04-sections-and-carousel.md)

### Key Concepts

**Carousel Architecture:**
```
┌──────────────────────────────────────────┐
│ Header: Title + Arrow Buttons            │
├──────────────────────────────────────────┤
│ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐     │
│ │Card 1│ │Card 2│ │Card 3│ │Card 4│ ... │  ← overflow-x: auto
│ └──────┘ └──────┘ └──────┘ └──────┘     │     scroll-snap-type: x mandatory
└──────────────────────────────────────────┘
```

- Cards are rendered dynamically from a JavaScript data array
- `scroll-snap-align: start` on each card for smooth snap behavior
- Arrow buttons call `scrollBy()` with smooth behavior
- Hidden scrollbar via `scrollbar-width: none`

### Expected Result

- Product intro section with eyebrow text, title, description, and two CTA buttons
- Horizontal carousel with 6 product cards showing images, titles, categories, and prices
- Arrow buttons that scroll the carousel left/right
- Featured banner with a full-width lifestyle image
- Essentials grid with 3 category cards (Men's, Women's, Kids')

---

## 5. Design Polish

### What We're Doing

Add scroll-triggered reveal animations, responsive breakpoints, hover effects, and the footer. This is where the page goes from functional to polished.

### AI Prompt

> Use the prompt from [`prompts/05-design-polish.md`](prompts/05-design-polish.md)

### Key Concepts

**Reveal Animation Pattern:**
```css
/* Initial state — hidden */
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.9s ease-out, transform 0.9s ease-out;
}

/* Triggered state — visible */
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

ScrollTrigger watches for `.reveal` elements entering the viewport and adds `.is-visible`. Staggered delays on `:nth-child` create a cascading entrance effect.

**Responsive Breakpoints:**
| Breakpoint | Key Changes |
|-----------|------------|
| 1024px | Essentials grid: 3 → 2 columns, Footer: 4 → 2 columns |
| 768px | Reduced padding, Smaller carousel cards, Essentials: 1 column |
| 480px | Smallest carousel cards, Adjusted button sizes, Footer: 1 column |

### Expected Result

- Content sections animate in as you scroll down
- Staggered reveal timing creates a polished cascade effect
- Page looks great on mobile, tablet, and desktop
- Hover effects on cards, buttons, and links
- Complete footer with 4-column link grid

---

## 6. Deployment

### What We're Doing

Deploy the finished landing page to a hosting platform so it's accessible via a public URL.

### AI Prompt

> Use the prompt from [`prompts/06-deployment.md`](prompts/06-deployment.md)

### Option A: Vercel

1. Install the Vercel CLI: `npm i -g vercel`
2. Navigate to your project folder
3. Run `vercel` and follow the prompts
4. Your site will be live at `your-project.vercel.app`

### Option B: Netlify (Drag & Drop)

1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your entire project folder onto the page
3. Your site will be live instantly with a Netlify URL

### Option C: GitHub Pages

1. Push your project to a GitHub repository
2. Go to Settings → Pages
3. Set source to "Deploy from a branch" → `main` → `/ (root)`
4. Your site will be live at `username.github.io/repo-name`

### Performance Considerations

- **Image optimization**: Consider converting frame JPGs to WebP for ~30% smaller file sizes
- **Lazy loading**: The frame images are loaded upfront (required for the scroll animation), but below-the-fold images use `loading="lazy"`
- **CDN caching**: Hosting on Vercel/Netlify automatically serves assets via CDN

---

## Selling This to Clients

### Target Clients

- **Sneaker and streetwear brands** — product launches, limited drops
- **Luxury brands** — immersive brand storytelling
- **Creative agencies** — portfolio pieces and client campaigns
- **Tech companies** — product reveal pages
- **Sports brands** — athlete or product feature pages

### Pricing Guide

| Context | Range |
|---------|-------|
| **Freelance** | $5,000 - $10,000 |
| **Agency** | $8,000 - $15,000 |
| **With custom animation/video** | $12,000 - $20,000 |

### Portfolio Tips

- Record a smooth screen capture of the scroll animation (use a tool like Kap or OBS)
- Create a short GIF or video loop for social media and Behance
- Highlight the technical complexity: "dual-canvas architecture", "242-frame scroll animation", "60fps smooth scrolling"
- Mention the tools: GSAP, Canvas API, Lenis — these signal technical depth to potential clients
