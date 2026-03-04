# Artisan Food Parallax Landing Page — Full Build Guide

## Table of Contents

1. [Project Setup](#1-project-setup)
2. [Hero Parallax Engine](#2-hero-parallax-engine)
3. [Content Sections](#3-content-sections)
4. [Design Polish & Responsive](#4-design-polish--responsive)
5. [Deployment](#5-deployment)

---

## 1. Project Setup

### What We're Doing

Set up the project folder, create the HTML skeleton with all semantic sections, import Google Fonts and CDN scripts, and build a CSS design system with warm, artisan-inspired custom properties.

### Preparing Your Images

Before starting, gather high-quality food photography. You have two options:

**Option A: Use free stock photos**
1. Visit [Unsplash](https://unsplash.com/s/photos/chocolate-artisan) or [Pexels](https://pexels.com/search/artisan-chocolate/)
2. Download 8-10 images: a textured background, ingredient close-ups (cocoa beans, leaves, cocoa powder), a hero product shot, and product photos
3. Place them in an `assets/` folder in your project root

**Option B: Use any food/beverage brand**
- The design works for any premium food brand (coffee, wine, honey, olive oil, bakery)
- Just swap the color palette, imagery, and copy to match your brand

### AI Prompt

> Copy and paste the prompt from [`prompts/01-project-setup.md`](prompts/01-project-setup.md) into your AI tool.

### Expected Result

After this step you should have:
- `index.html` — Full HTML structure with preloader, nav, hero (4 parallax layers), story, products, process, testimonial, CTA, and footer sections
- `style.css` — CSS reset, custom properties (`--chocolate`, `--cream`, `--gold`, font stacks, easing), preloader, and nav base styles
- CDN scripts linked: Lenis, GSAP, ScrollTrigger
- Google Fonts loaded: Playfair Display + DM Sans

### Key Files Created

- `index.html` — The complete page structure
- `style.css` — Reset + design tokens + preloader/nav styles

---

## 2. Hero Parallax Engine

### What We're Doing

Build the `ParallaxHero` class — the core engine that handles:
- Setting up Lenis for buttery smooth scrolling
- Creating multi-layer parallax animations using GSAP ScrollTrigger
- Fading out hero content as the user scrolls
- Toggling nav styles based on scroll position
- Hiding the preloader on page load

### AI Prompt

> Use the prompt from [`prompts/02-hero-parallax.md`](prompts/02-hero-parallax.md)

### Key Concepts

**Multi-Layer Parallax Architecture:**
```
┌─────────────────────────────────────┐
│  Layer 1: Background Texture        │  ← data-speed="0.2" (slowest)
│    Warm paper/grain texture          │     Creates depth backdrop
│                                      │
│  Layer 2: Floating Ingredients       │  ← data-speed="0.5" (medium)
│    Cocoa beans, leaves, powder       │     Floating mid-ground elements
│                                      │
│  Layer 3: Hero Product               │  ← data-speed="0.8" (faster)
│    Main chocolate bar/product        │     The visual focal point
│                                      │
│  Layer 4: Text Content               │  ← data-speed="1.0" (fastest)
│    Headline + CTA button             │     Moves with natural scroll
└─────────────────────────────────────┘
```

**How it works:** Each layer has a `data-speed` attribute. GSAP ScrollTrigger animates `translateY` on each layer proportional to its speed value. Slower layers move less, creating the illusion of depth — just like looking out a car window where distant mountains move slowly and nearby trees fly past.

**Lenis + GSAP Integration:**
```javascript
// Same proven pattern as the Nike blueprint
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

### Expected Result

- Page loads with a brief preloader that fades out
- Scrolling through the hero creates a beautiful depth effect — background moves slowly, ingredients float, product drifts, text scrolls naturally
- Hero content fades out and moves up as you begin scrolling
- Navigation transitions from transparent to a solid cream background when scrolling past the hero

---

## 3. Content Sections

### What We're Doing

Build the content sections below the hero: brand story with split layout, product showcase grid with hover effects, "bean to bar" process steps, testimonial, and newsletter CTA.

### AI Prompt

> Use the prompt from [`prompts/03-content-sections.md`](prompts/03-content-sections.md)

### Key Concepts

**Story Section — Split Grid Layout:**
```
┌────────────────────┬────────────────────┐
│                    │  Eyebrow Text      │
│                    │  SECTION TITLE     │
│    Image with      │                    │
│    subtle parallax │  Paragraph 1       │
│                    │  Paragraph 2       │
│                    │                    │
└────────────────────┴────────────────────┘
```

The image has a subtle parallax effect (slower scroll than the text) created with the same ScrollTrigger pattern used in the hero, but with a gentler speed difference.

**Product Card Hover Effect:**
```css
/* Default state */
.product-card__image img { transform: scale(1); }

/* Hover state */
.product-card:hover .product-card__image img {
  transform: scale(1.08);  /* Gentle zoom */
}
.product-card:hover .product-card__overlay {
  opacity: 1;  /* Dark overlay fades in */
}
```

Cards are rendered from a JavaScript data array in the `ProductShowcase` class — same pattern as the Nike carousel, but in a grid layout instead of horizontal scroll.

**Process Steps Layout:**
```
┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐
│    01    │  │    02    │  │    03    │  │    04    │
│  Source  │  │  Roast   │  │  Craft   │  │  Taste   │
│  desc... │  │  desc... │  │  desc... │  │  desc... │
└──────────┘  └──────────┘  └──────────┘  └──────────┘
```

### Expected Result

- Story section with image on left, text on right, subtle image parallax
- Product grid with 6 cards showing images, names, descriptions, and prices
- Hover effects: image zoom + dark overlay with "View Details" text
- Process section with 4 step cards and large step numbers
- Large centered testimonial quote
- Newsletter CTA with email input and submit button

---

## 4. Design Polish & Responsive

### What We're Doing

Add scroll-triggered reveal animations, staggered entrance timing, hover effects, the complete footer, and responsive breakpoints. This is where the page goes from functional to polished and production-ready.

### AI Prompt

> Use the prompt from [`prompts/04-polish-responsive.md`](prompts/04-polish-responsive.md)

### Key Concepts

**Reveal Animation Pattern:**
```css
/* Initial state — hidden */
.reveal {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out);
}

/* Triggered state — visible */
.reveal.is-visible {
  opacity: 1;
  transform: translateY(0);
}
```

ScrollTrigger watches for `.reveal` elements entering the viewport and adds `.is-visible`. Staggered delays on grid children create a cascading entrance effect.

**Responsive Breakpoints:**
| Breakpoint | Key Changes |
|-----------|------------|
| 1024px | Story grid: 2 → 1 column, Products grid: 3 → 2 columns, Footer: 3 → 2 columns |
| 768px | Reduced padding, Process steps: 4 → 2 columns, Smaller hero text |
| 480px | Products grid: 1 column, Process: 1 column, Footer: 1 column, Compact nav |

### Expected Result

- Content sections animate in as you scroll down
- Product cards and process steps enter with staggered timing
- Page looks great on mobile, tablet, and desktop
- Hover effects on product cards, buttons, and nav links
- Complete footer with 3-column link grid and social icons
- No horizontal overflow on any screen size

---

## 5. Deployment

### What We're Doing

Deploy the finished landing page to a hosting platform so it's accessible via a public URL.

### AI Prompt

> Use the prompt from [`prompts/05-deployment.md`](prompts/05-deployment.md)

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

- **Image optimization**: Convert JPG/PNG images to WebP for ~30-40% smaller file sizes
- **Lazy loading**: Add `loading="lazy"` to all images below the fold (everything except hero layers)
- **CDN caching**: Hosting on Vercel/Netlify automatically serves assets via CDN
- **Font loading**: The `preconnect` hints in the HTML ensure fast Google Fonts delivery

---

## Selling This to Clients

### Target Clients

- **Artisan food brands** — chocolate, coffee, honey, olive oil, craft sauces
- **Restaurants and cafés** — upscale dining, specialty coffee shops
- **Craft beverage companies** — wine, spirits, craft beer, kombucha
- **Organic / farm-to-table brands** — farmers' markets, subscription boxes
- **Food subscription services** — meal kits, curated snack boxes

### Pricing Guide

| Context | Range |
|---------|-------|
| **Freelance** | $2,000 - $5,000 |
| **Agency** | $4,000 - $8,000 |
| **With e-commerce integration** | $6,000 - $12,000 |

### Portfolio Tips

- Record a smooth scroll-through video showing the parallax depth effect (use Kap or OBS)
- Emphasize the premium feel: "multi-layer parallax", "scroll-driven animations", "artisan design system"
- Show the responsive behavior — clients love seeing their site work beautifully on mobile
- Offer the e-commerce upsell: "We can connect this to Shopify for online ordering" doubles the project value
- Highlight speed: you built this in 3-5 hours, but the perceived complexity commands premium pricing
