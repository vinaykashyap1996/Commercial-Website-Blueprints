# Luxury Real Estate Architectural Landing — Full Build Guide

## Table of Contents

1. [Project Setup](#1-project-setup)
2. [Split-Screen Narrative Layout](#2-split-screen-narrative-layout)
3. [Content Chapters](#3-content-chapters)
4. [Visual Swap & Scroll Interaction](#4-visual-swap--scroll-interaction)
5. [Polish, Responsive & Deployment](#5-polish-responsive--deployment)

---

## 1. Project Setup

### What We're Doing

Create the file structure, import the design system (Tailwind CDN, Google Fonts, Material Symbols), and build the Tailwind config with the luxury warm color palette — gold accents, warm off-white surface, and editorial typography.

### Preparing Your Images

The design requires 4 full-bleed architectural/property images that swap as the user scrolls. Quality and mood matter here — these carry the entire left panel.

**Option A: Free stock photography**
1. Visit [Unsplash](https://unsplash.com/s/photos/luxury-architecture) or [Pexels](https://pexels.com/search/luxury-real-estate/)
2. Download 4 images with a consistent, cinematic feel:
   - **Image 1 (Hero)** — Exterior shot: minimalist concrete or stone facade against sky
   - **Image 2 (Philosophy)** — Dramatic light/shadow architectural detail or corridor
   - **Image 3 (Commission)** — Luxury infinity pool, terrace, or expansive interior
   - **Image 4 (Craft)** — Close-up material texture: raw stone, travertine, wood grain
3. Place them in an `assets/` folder in your project root

**Option B: Adapt for your client**
- Swap copy and imagery for any architecture firm, luxury home builder, or premium real estate developer
- The split-screen narrative pattern works for any high-end service brand where trust and prestige matter

### AI Prompt

> Copy and paste the prompt from [`prompts/01-project-setup.md`](prompts/01-project-setup.md) into your AI tool.

### Expected Result

After this step you should have:
- `index.html` — Skeleton with `<head>` loading Tailwind CDN, Google Fonts, Material Symbols, and a Tailwind config block defining the full luxury color palette and font families
- `style.css` — A handful of custom styles that Tailwind can't express (animated visual transitions, no-scrollbar utility, serif-display helper class)
- `app.js` — Empty file ready for the Intersection Observer logic

### The Tailwind Color System

```
primary:           #775a19  ← Gold/amber — accent color throughout
primary-container: #c5a059  ← Lighter gold for hover states and selections
primary-fixed-dim: #e9c176  ← Pale gold for decorative elements
surface:           #fcf9f8  ← Warm off-white page background
on-surface:        #1c1b1b  ← Near-black primary text
on-surface-variant:#4e4639  ← Warm dark brown secondary text
outline:           #7f7667  ← Medium warm gray for borders
outline-variant:   #d1c5b4  ← Pale warm beige for subtle dividers
surface-container: #f0eded  ← Slightly darker surface for card backgrounds
surface-container-low: #f6f3f2  ← Light surface for nested cards
```

### Key Files Created

- `index.html` — HTML skeleton with correct CDN imports and Tailwind config
- `style.css` — Custom animation and utility styles
- `app.js` — Placeholder for scroll logic

---

## 2. Split-Screen Narrative Layout

### What We're Doing

Build the structural backbone of the page: a fixed top nav, a fixed vertical side-nav (desktop only), and the main split-screen container — a sticky 48% visual stage on the left paired with a scrollable 52% narrative panel on the right.

### AI Prompt

> Use the prompt from [`prompts/02-split-screen-layout.md`](prompts/02-split-screen-layout.md)

### Key Concepts

**The Split-Screen Architecture:**
```
┌──────────────────────────────────────────────────────────┐
│  FIXED TOP NAV  ←  backdrop-blur frosted glass           │
├────┬─────────────────────┬────────────────────────────────┤
│    │                     │                                │
│    │   STICKY VISUAL     │   SCROLLABLE NARRATIVE         │
│ S  │   STAGE (48%)       │   CHAPTERS (52%)               │
│ I  │                     │                                │
│ D  │   4 images stacked  │   Chapter 1: Manifesto         │
│ E  │   absolutely        │   Chapter 2: Philosophy        │
│    │   z-indexed         │   Chapter 3: Commission        │
│ N  │                     │   Chapter 4: Craft             │
│ A  │   Only one visible  │   Chapter 5: Global            │
│ V  │   at a time         │   Chapter 6: Consult           │
│    │                     │                                │
└────┴─────────────────────┴────────────────────────────────┘
```

**How the sticky panel works:**
- `md:sticky md:top-24` — the visual section sticks to the top (below the nav) on desktop
- `md:h-[calc(100vh-6rem)]` — it fills exactly the remaining viewport height
- `overflow-hidden` — clips the absolutely-positioned images to this container
- Each image layer is `absolute inset-0` with `transition-all duration-1000` — CSS handles the crossfade

**Image layer transitions:**
```css
/* Active visual: fully visible, at true scale */
opacity-100 scale-100

/* Inactive visual: invisible, slightly zoomed in */
opacity-0 scale-105
```
The subtle scale difference means the entering image appears to "breathe in" — a cinematic effect common in luxury brand sites.

**Side Nav Structure:**
```
┌────┐
│ M  │  ← Brand initial (italic serif)
│    │
│ ⬡  │  ← architecture icon  (active: gold)
│ OV │  ← "Overview" rotated 90°
│    │
│ ≡  │  ← texture icon
│ MA │  ← "Materials" rotated 90°
│    │
│ ◫  │  ← layers icon
│ ST │  ← "Structure" rotated 90°
│    │
│ ⏱  │  ← history icon
│ LE │  ← "Legacy" rotated 90°
└────┘
```

### Expected Result

- Fixed frosted-glass nav with brand name left, 3 nav links center, CTA button right
- Fixed 80px-wide vertical sidebar with 4 icon+label groups (desktop only)
- Main area with `md:pl-20` offset for the sidebar
- Left panel: sticky, full-bleed, containing 4 absolutely-stacked image layers
- Right panel: scrollable column, empty — ready for chapters

---

## 3. Content Chapters

### What We're Doing

Populate the right-side narrative panel with 6 editorial chapters. Each chapter has a distinct layout and purpose — together they tell the full brand story, from manifesto to contact form.

### AI Prompt

> Use the prompt from [`prompts/03-content-chapters.md`](prompts/03-content-chapters.md)

### Chapter Architecture

**Chapter 1 — Manifesto (Hero)**
```
Eyebrow: "Manifesto" (gold, ultra-spaced caps)

H1: "Architecture
     of Permanence."        ← Noto Serif, 5xl–8xl, light weight
                              "Permanence." in italic gold

Body: Single paragraph, light weight, max-w-lg
```
This chapter is 100vh+ tall so it immediately fills the screen on load.

**Chapter 2 — Philosophy (Quote)**
```
┌─────────────────────────────────────────────────┐  ←  left-4 border-primary (gold)
│  Eyebrow: "Philosophy"                           │
│                                                  │
│  Blockquote (italic serif, 4xl–5xl):             │
│  "The dialogue between space and soul is written │
│   in the language of shadow."                    │
│                                                  │
│  Body: paragraph about design intent             │
└─────────────────────────────────────────────────┘
   ↘ Decorative square: absolute -bottom-10 -right-4
     bg-primary-container/20  (muted gold block)
```

**Chapter 3 — Signature Commission**
```
Eyebrow: "Selected Commission"
H2: "The Obsidian Pavilion"

┌─────────────────────────────────────────────────┐
│  Interior image (aspect-[4/3])                  │
│  Grayscale by default → hover removes grayscale │
│  transition-all duration-700                    │
└─────────────────────────────────────────────────┘

  Location          Completion        Footprint
  Santorini, Greece  Summer 2023      1,200 m²
  (serif text, small caps label above)
```

**Chapter 4 — Material & Craft**
```
┌──────────────────────┬────────────────────────┐
│  H2: "The Tactile    │  Material texture       │
│   Authority" (gold   │  image (h-[400px])      │
│   italic serif)      │                         │
│                      │                         │
│  Body paragraph      │                         │
│                      │                         │
│  01. Raw Travertine →│                         │
│  02. Smoked Oak     →│                         │
│  03. Oxidized Steel →│                         │
└──────────────────────┴────────────────────────┘
```
The material list items use a `north_east` arrow icon (Material Symbols) and a bottom border separator.

**Chapter 5 — Global Presence**
```
Eyebrow: "Presence"
H2: "Studio Locations"

┌────────────────┬────────────────┐
│ ──────────     │ ──────────     │  ← thin line, hover turns gold
│ Zurich         │ Tokyo          │
│ CENTRAL HUB    │ EASTERN LAB    │
├────────────────┼────────────────┤
│ ──────────     │ ──────────     │
│ New York       │ Dubai          │
│ DESIGN INTEL.  │ STRUCTURAL ENG.│
└────────────────┴────────────────┘
```
Each location card has a hover effect: the top line transitions from `bg-outline-variant/20` to `bg-primary`.

**Chapter 6 — Private Consultation Form**
```
┌─────────────────────────────────────────────────┐
│  Eyebrow: "Inquiry"                             │
│  H2: "Private Commission Request"               │
│  Body: entry by invitation or application       │
│                                                 │
│  Full Name    ____________________________      │
│  Email        ____________________________      │
│  Project      ____________________________      │
│  Vision       ____________________________      │
│               ____________________________      │
│                                                 │
│  [ SUBMIT INQUIRY                             ] │
└─────────────────────────────────────────────────┘
```
Uses CSS-only floating labels (Tailwind `peer` pattern): labels float above the underline input when focused or filled.

### Expected Result

- 6 fully-styled chapters in the right scroll panel
- Each chapter is at least `min-h-screen` tall (so the Intersection Observer has time to trigger)
- Grayscale-to-color hover on the commission image
- Floating label inputs in the form
- Gold left-border blockquote in Philosophy chapter

---

## 4. Visual Swap & Scroll Interaction

### What We're Doing

Write the JavaScript that makes the left panel reactive. An `IntersectionObserver` watches each chapter as it enters the viewport center. When a chapter crosses the 50% threshold, it triggers the corresponding visual to crossfade in — replacing the previous one.

### AI Prompt

> Use the prompt from [`prompts/04-visual-swap-interaction.md`](prompts/04-visual-swap-interaction.md)

### Key Concepts

**Chapter → Visual Mapping:**
```javascript
const chapters = [
    { id: 'chapter-hero',       visual: 'visual-hero' },
    { id: 'chapter-philosophy', visual: 'visual-philosophy' },
    { id: 'chapter-signature',  visual: 'visual-signature' },
    { id: 'chapter-craft',      visual: 'visual-craft' },
    { id: 'chapter-global',     visual: 'visual-hero' },      // reuses hero image
    { id: 'chapter-consult',    visual: 'visual-philosophy' } // reuses philosophy image
];
```

**The Observer Pattern:**
```javascript
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // 1. Find which visual this chapter maps to
            // 2. Remove opacity-100/scale-100 from ALL visuals
            // 3. Add opacity-100/scale-100 to the TARGET visual
        }
    });
}, { threshold: 0.5 }); // triggers when 50% of the chapter is visible
```

**Why Intersection Observer (not scroll events)?**

| Scroll Event | Intersection Observer |
|---|---|
| Fires hundreds of times per second | Fires only when threshold is crossed |
| Requires `debounce()` or `requestAnimationFrame()` | Performant by design |
| Must calculate positions manually | Browser does the geometry |
| Can block main thread | Runs off main thread |

**CSS class swap for the crossfade:**
```javascript
// Hide all visuals
document.querySelectorAll('[id^="visual-"]').forEach(v => {
    v.classList.replace('opacity-100', 'opacity-0');
    v.classList.replace('scale-100', 'scale-105');
});

// Show the active visual
const target = document.getElementById(visualId);
target.classList.replace('opacity-0', 'opacity-100');
target.classList.replace('scale-105', 'scale-100');
```

The CSS `transition-all duration-1000` on each image layer handles the smooth 1-second crossfade automatically.

### Expected Result

- Scrolling through Chapter 1 (Manifesto) → exterior architectural image visible
- Scrolling into Chapter 2 (Philosophy) → dramatic light/shadow image fades in
- Scrolling into Chapter 3 (Commission) → pool/terrace image fades in
- Scrolling into Chapter 4 (Craft) → stone texture image fades in
- Chapters 5 and 6 cycle back to earlier visuals (intentional — reduces image count needed)
- Transitions are 1 second, eased, with a subtle scale "breathe"

---

## 5. Polish, Responsive & Deployment

### What We're Doing

Add the footer, fine-tune responsive behavior for the split layout, ensure the side-nav collapses on mobile, and deploy.

### AI Prompt

> Use the prompt from [`prompts/05-polish-responsive.md`](prompts/05-polish-responsive.md)

### Key Concepts

**Responsive Breakpoints:**

| Breakpoint | Layout Change |
|-----------|---------------|
| `lg` (1024px+) | Side nav visible, main has `lg:pl-20` offset |
| `md` (768px+) | Split-screen: left 48%, right 52%, both `md:flex-row` |
| Below `md` | Stacked: visual panel becomes fixed 512px hero image above text |
| Below `md` | Side nav hidden (`hidden lg:flex`) |

**Mobile Visual Panel:**
On mobile, the visual stage loses its `sticky` behavior and becomes a fixed-height image block at the top of the page:
```
height: 512px (mobile)          vs    calc(100vh - 6rem) (desktop)
relative (mobile)               vs    sticky top-24 (desktop)
```

**Footer Structure:**
```
┌──────────────────────────────────────────────────────────┐
│  MONOLITH                                                │
│  (brand name in serif)                                   │
│                                                          │
│  © 2024 Monolith Architectural Group. All Rights Reserved│
│                                                          │
│              Privacy    Terms    Press                   │
└──────────────────────────────────────────────────────────┘
```
Warm stone (`bg-stone-50`) background, 3-part flex layout that stacks vertically on mobile.

### Deployment Options

**Vercel (Recommended)**
```bash
npm i -g vercel
cd your-project-folder
vercel
```

**Netlify Drop**
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag your project folder onto the page — live in 30 seconds

**GitHub Pages**
1. Push to GitHub
2. Settings → Pages → Deploy from `main` branch root

### Performance Considerations

- **Image format**: Use `.webp` for 30–50% smaller file sizes without quality loss
- **Image dimensions**: Left panel is max 1280px wide at 2x — resize before upload
- **Lazy loading**: Add `loading="lazy"` to all images except the first hero visual
- **Font display**: Add `&display=swap` to Google Fonts URL (already included in starter code)
- **No JS dependencies**: The entire interaction layer is ~30 lines of vanilla JS — zero bundle size

---

## Selling This to Clients

### Target Clients

- **Architectural firms** — boutique studios, award-winning design practices
- **Luxury real estate developers** — custom home builders, bespoke villa developers
- **High-end property agencies** — invitation-only listings, ultra-luxury sales teams
- **Interior design studios** — commercial and residential design consultancies
- **Hospitality brands** — luxury hotel groups, private members clubs, resort developers

### Pricing Guide

| Context | Range |
|---------|-------|
| **Freelance** | $4,000 – $8,000 |
| **Agency** | $6,000 – $12,000 |
| **With CMS integration (Webflow/Sanity)** | $8,000 – $18,000 |
| **With backend inquiry routing (email/CRM)** | +$2,000 – $4,000 |

### Portfolio Tips

- Record a slow scroll-through video on a large monitor — the visual swap is the hero moment
- Lead with the concept: "scroll-driven architectural storytelling" — clients in this space respond to language that mirrors their own brand vocabulary
- Show the typography up close: the serif/sans pairing and gold accents read as immediately premium
- Offer a "white glove" positioning: "I work with one client per sector in each city" — scarcity drives inquiries in the luxury market
- Upsell: "For an additional investment, we can connect this to a private CRM so your team gets notified of every inquiry in real time"
