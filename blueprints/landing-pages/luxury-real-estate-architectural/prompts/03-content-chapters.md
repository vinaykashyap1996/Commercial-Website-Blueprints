# Prompt 03: Content Chapters

## Context

This prompt fills the right-side scrollable panel with 6 editorial chapters. Each has a unique layout. The chapters are identified by IDs that the Intersection Observer (added in step 4) will watch to trigger the correct visual swap.

## The Prompt

```
Add 6 narrative chapter articles inside the right-side scrollable section (md:w-[52%]) of my luxury architectural firm landing page.

The design system uses:
- primary: #775a19 (gold/amber)
- on-surface: #1c1b1b (dark text)
- on-surface-variant: #4e4639 (secondary text)
- surface-container-low: #f6f3f2
- outline-variant: #d1c5b4
- Font classes: serif-display (Noto Serif), font-body (Manrope), font-sans (Manrope)
- All borders are sharp (no border-radius)

---

**CHAPTER 1: Manifesto (id="chapter-hero")**
<article id="chapter-hero" class="min-h-[819px] flex flex-col justify-center py-24 space-y-12">

Content:
- Eyebrow: <span> with font-sans uppercase tracking-[0.4em] text-[10px] text-primary — "Manifesto"
- H1: serif-display text-5xl md:text-7xl lg:text-8xl leading-tight font-light tracking-tighter text-on-surface
  Text: "Architecture <br/> of <span class='italic text-primary'>Permanence.</span>"
- Body paragraph: font-body text-lg md:text-xl text-on-surface-variant max-w-lg leading-relaxed font-light
  Text: "We do not build houses. We curate the silent vessels of human legacy — where stone and light converge into absolute stillness."

---

**CHAPTER 2: Design Philosophy (id="chapter-philosophy")**
<article id="chapter-philosophy" class="min-h-screen py-24 flex flex-col justify-center">

Structure:
- Outer relative div
- Inner card: bg-surface-container-low p-12 md:p-20 relative z-10 border-l-4 border-primary
  Inside:
  - Eyebrow span: font-sans uppercase tracking-[0.3em] text-[10px] text-primary block mb-8 — "Philosophy"
  - Blockquote H2: serif-display text-4xl md:text-5xl mb-12 font-light italic
    Text: '"The dialogue between space and soul is written in the language of shadow."'
  - Body paragraph: font-body text-on-surface-variant leading-relaxed max-w-md
    Text: "Our approach rejects the ephemeral. Every line is a commitment to the site's history and the occupant's future. We prioritize the breath of a room — the intentional void that allows for life to settle."
- Decorative element (OUTSIDE the inner card, inside the outer relative div):
  absolute -bottom-10 -right-4 w-32 h-32 bg-primary-container/20 -z-0

---

**CHAPTER 3: Signature Commission (id="chapter-signature")**
<article id="chapter-signature" class="min-h-screen py-24 space-y-16">

Content:
- Header div (space-y-4):
  - Eyebrow: font-sans uppercase tracking-[0.3em] text-[10px] text-primary — "Selected Commission"
  - H2: serif-display text-5xl font-light — "The Obsidian Pavilion"

- Image container: aspect-[4/3] relative overflow-hidden bg-surface-container
  Inside: <img src="assets/signature.jpg" class="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" alt="Ultra-modern interior with floor-to-ceiling windows">

- Stats row: flex flex-wrap gap-12 py-8 border-y border-outline-variant/30
  Three stat items, each a div (space-y-1):
  a) Label span: font-sans uppercase tracking-widest text-[9px] text-outline — "Location"
     Value span: font-serif text-lg — "Santorini, Greece"
  b) Label: "Completion" — Value: "Summer 2023"
  c) Label: "Footprint" — Value: "1,200 m²"

---

**CHAPTER 4: Material & Craft (id="chapter-craft")**
<article id="chapter-craft" class="min-h-screen py-24 space-y-24">

Content: flex flex-col md:flex-row gap-16 items-start

LEFT COLUMN (w-full md:w-1/2 space-y-8):
- H2: serif-display text-4xl font-light italic text-primary — "The Tactile Authority"
- Body paragraph: font-body text-on-surface-variant leading-relaxed
  Text: "We source from quarries that have stood for millennia. Raw travertine, charred cedar, and hand-poured bronze are the elements of our alchemy."
- Material list (space-y-6 pt-8): Three list items, each a div:
  flex justify-between items-center border-b border-outline-variant/20 pb-4
  Left: <span class="font-sans uppercase tracking-[0.2em] text-[10px]"> — "01. Raw Travertine"
  Right: <span class="material-symbols-outlined text-primary text-sm">north_east</span>
  Repeat for: "02. Smoked Oak" and "03. Oxidized Steel"

RIGHT COLUMN (w-full md:w-1/2 bg-surface-container-high h-[400px]):
- <img src="assets/craft.jpg" class="w-full h-full object-cover" alt="Dark minimalist interior wood textures">

---

**CHAPTER 5: Global Presence (id="chapter-global")**
<article id="chapter-global" class="min-h-[819px] py-24">

Content:
- Header (space-y-6 mb-16):
  - Eyebrow: font-sans uppercase tracking-[0.3em] text-[10px] text-primary — "Presence"
  - H2: serif-display text-5xl font-light — "Studio Locations"

- 2x2 grid: grid grid-cols-1 md:grid-cols-2 gap-12

Four location cards, each: space-y-4 group cursor-pointer
Inside each:
- Top line: h-1 bg-outline-variant/20 group-hover:bg-primary transition-all duration-500 origin-left
- City name: serif-display text-2xl — H3 element
- Studio role: font-sans text-[11px] uppercase tracking-widest text-on-surface-variant

Locations:
1. Zurich — "Central Hub & Archive"
2. Tokyo — "Eastern Material Lab"
3. New York — "Design Intelligence"
4. Dubai — "Structural Engineering"

---

**CHAPTER 6: Private Consultation (id="chapter-consult")**
<article id="chapter-consult" class="min-h-screen py-24 flex flex-col justify-center">

Outer card: bg-surface-container-lowest p-8 md:p-16 shadow-2xl shadow-on-surface/5

Header section (space-y-8 mb-16):
- Eyebrow: font-sans uppercase tracking-[0.4em] text-[10px] text-primary — "Inquiry"
- H2: serif-display text-5xl font-light — "Private Commission Request"
- Paragraph: font-body text-on-surface-variant max-w-sm — "Entry into our portfolio is by invitation or application. Please share the essence of your vision."

Form (space-y-12) — use the Tailwind peer floating label pattern for each field:

For each field:
<div class="relative">
  <input
    class="peer block w-full appearance-none border-0 border-b border-outline bg-transparent px-0 py-4 text-on-surface focus:border-primary focus:outline-none focus:ring-0"
    id="FIELD_ID"
    placeholder=" "
    type="TEXT_OR_EMAIL"
  />
  <label
    class="absolute top-4 -z-10 origin-[0] -translate-y-8 scale-75 transform text-xs uppercase tracking-widest text-on-surface-variant duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-8 peer-focus:scale-75 peer-focus:text-primary"
    for="FIELD_ID"
  >LABEL TEXT</label>
</div>

Three fields:
- id="name", type="text", label="Full Name"
- id="email", type="email", label="Email Address"
- id="vision" (use <textarea rows="3"> instead of <input>), label="Project Vision"

Submit button:
w-full bg-primary text-on-primary py-6 serif-display text-xl uppercase tracking-widest hover:bg-primary-container transition-all active:scale-[0.98]
Button text: "Submit Inquiry"
```

## Expected Output

The right scrollable section in `index.html` filled with all 6 chapter articles.

## What to Check

- [ ] All 6 articles have the correct `id` attributes: chapter-hero, chapter-philosophy, chapter-signature, chapter-craft, chapter-global, chapter-consult
- [ ] Chapter 1 uses `min-h-[819px]` (not 100vh) — it's the entry point
- [ ] Chapters 2–5 use `min-h-screen` — needed for the Intersection Observer threshold to work
- [ ] The Philosophy chapter (2) has a decorative gold square `absolute -bottom-10 -right-4` OUTSIDE the card but INSIDE the `relative` outer div
- [ ] The signature image has `grayscale hover:grayscale-0 transition-all duration-700`
- [ ] Material list items use `material-symbols-outlined` span with `north_east` icon text
- [ ] Location card hover: `group-hover:bg-primary` on the top line div (requires `group` class on the parent)
- [ ] Form inputs use the `peer` class — labels use `peer-placeholder-shown:` and `peer-focus:` variants
- [ ] Submit button is a `<button type="submit">` inside a `<form>`
- [ ] Textarea for vision field uses same peer floating label pattern as inputs

## Common Issues

- **Labels not floating**: The input must have `placeholder=" "` (a single space) for the peer CSS trick to work when the field is empty
- **Decorative square behind card**: Check that the outer wrapper is `relative` and the square uses `-z-0` while the card uses `z-10`
- **Icons not rendering**: Material Symbols text content must be the icon name (e.g., `north_east`), not a Unicode character
- **Location hover line not changing**: The line div needs `transition-all duration-500 origin-left` and the parent card needs the `group` class
