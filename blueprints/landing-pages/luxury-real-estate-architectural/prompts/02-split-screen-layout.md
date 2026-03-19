# Prompt 02: Split-Screen Narrative Layout

## Context

This prompt builds the page's structural backbone: a fixed frosted-glass top nav, a fixed vertical side-nav (desktop only), and the main split-screen container — a sticky visual stage on the left and a scrollable narrative column on the right. No chapter content yet, just the shells with IDs and image layers.

## The Prompt

```
Add the structural layout to the index.html body. I have a luxury architectural firm landing page with a warm gold-and-stone design system (Tailwind custom colors: primary=#775a19, surface=#fcf9f8).

Build these three structural components:

---

**1. TOP NAVIGATION**

A fixed nav (z-50) with:
- Background: white/80 with backdrop-blur-md (frosted glass effect)
- Padding: px-6 md:px-12, py-6
- Left: Brand name "MONOLITH" — text-2xl, font-serif, font-light, tracking-tighter, text-stone-900
- Center (hidden on mobile, flex on md+): 3 nav links using font-serif, tracking-widest, uppercase, text-sm
  - "Portfolio" — active state: text-yellow-700, border-b border-yellow-700, pb-1
  - "Philosophy" — inactive: text-stone-500, hover:text-stone-900
  - "Studio" — inactive: text-stone-500, hover:text-stone-900
- Right: A button "Private Consultation" — bg-primary text-on-primary px-6 py-3, font-serif tracking-widest uppercase text-xs, hover:bg-primary-container, transition-all active:scale-95 duration-300

---

**2. SIDE NAVIGATION (desktop only)**

A fixed aside (z-40) on the left:
- Width: w-20, full height
- Background: bg-stone-50/80 (very subtle)
- Flex column, items-center, py-12, gap-12
- Position: left-0, top-0

Inside, in order:
a) Brand monogram: font-serif italic text-xl text-stone-900, mt-16 — text content "M"

b) Four icon+label groups (flex-col, items-center, gap-2, cursor-pointer):
   Each group has:
   - A <span class="material-symbols-outlined"> with the icon name
   - A <span> for the label text with classes: font-sans uppercase tracking-[0.2em] text-[8px] rotate-90 mt-4

   Group 1 — ACTIVE (first item):
     icon: "architecture" — text-yellow-700, font-variation-settings style: 'FILL' 1
     label: text-yellow-700 — "Overview"

   Group 2: icon "texture", text-stone-400 — label "Materials"
   Group 3: icon "layers", text-stone-400 — label "Structure"
   Group 4: icon "history", text-stone-400 — label "Legacy"

   Wrap all 4 groups in a div: flex flex-col gap-10 items-center justify-center flex-1
   Each group: group flex flex-col items-center gap-2 cursor-pointer transition-all duration-700 hover:text-yellow-600 hover:translate-x-1

---

**3. MAIN SPLIT-SCREEN CONTAINER**

A <main> element: flex flex-col md:flex-row min-h-screen pt-24 lg:pl-20

Inside main, two sibling elements:

**LEFT — Sticky Visual Stage:**
<section> with classes: md:w-[48%] h-[512px] md:h-[calc(100vh-6rem)] md:sticky md:top-24 overflow-hidden bg-surface-container

Inside a relative div (w-full h-full):
Add FOUR absolutely-positioned image layers, each: absolute inset-0 transition-all duration-1000 ease-in-out

Layer IDs and initial states:
- id="visual-hero"        — classes include: opacity-100 scale-100  (VISIBLE by default)
- id="visual-philosophy"  — classes include: opacity-0 scale-105    (hidden)
- id="visual-signature"   — classes include: opacity-0 scale-105    (hidden)
- id="visual-craft"       — classes include: opacity-0 scale-105    (hidden)

Inside each layer, add:
- An <img> with:
  - class="w-full h-full object-cover"
  - src pointing to the appropriate assets file:
    - visual-hero:        src="assets/hero.jpg"      alt="Modern architectural exterior"
    - visual-philosophy:  src="assets/philosophy.jpg" alt="Dramatic architectural light and shadow"
    - visual-signature:   src="assets/signature.jpg"  alt="Luxury property terrace or pool"
    - visual-craft:       src="assets/craft.jpg"       alt="Natural stone material texture"
- A subtle overlay div: absolute inset-0 bg-black/5

**RIGHT — Scrollable Narrative Panel:**
<section> with classes: md:w-[52%] px-8 md:px-16 lg:px-24

Leave this section empty for now — add a comment:
<!-- Chapters will be added in the next step -->

---

**4. FOOTER (add below </main>)**

A <footer>: bg-stone-50 flex flex-col md:flex-row justify-between items-center px-12 py-16 w-full mt-24

Inside:
- Brand name: text-stone-900 font-serif text-xl tracking-tighter mb-8 md:mb-0 — "MONOLITH"
- Copyright: font-sans font-light tracking-widest text-[10px] uppercase text-stone-400 — "© 2024 Monolith Architectural Group. All Rights Reserved."
- Link group (flex gap-8 mt-8 md:mt-0): three <a> links — Privacy, Terms, Press
  Each: font-sans font-light tracking-widest text-[10px] uppercase text-stone-400 hover:text-yellow-700 transition-colors duration-300

Do NOT add chapter content yet.
```

## Expected Output

`index.html` updated with:
- Fixed top nav (frosted glass, brand + links + CTA)
- Fixed left side-nav (monogram + 4 icon/label groups)
- `<main>` with left sticky image stage (4 layered visuals) and empty right section
- Footer with brand name, copyright, and 3 links

## What to Check

- [ ] Top nav is `fixed top-0 w-full z-50` with `backdrop-blur-md`
- [ ] Side nav is `fixed left-0 top-0 h-full w-20 z-40` and `hidden lg:flex` (desktop only)
- [ ] `<main>` has `lg:pl-20` to offset the 80px side-nav on desktop
- [ ] `<main>` has `pt-24` to clear the fixed top nav
- [ ] Left section has `md:sticky md:top-24` and `md:h-[calc(100vh-6rem)]`
- [ ] All 4 visual layers are present with correct IDs: visual-hero, visual-philosophy, visual-signature, visual-craft
- [ ] visual-hero starts with `opacity-100 scale-100` (visible)
- [ ] visual-philosophy, visual-signature, visual-craft start with `opacity-0 scale-105` (hidden)
- [ ] Each layer has `transition-all duration-1000 ease-in-out`
- [ ] Right section has `md:w-[52%]` and appropriate horizontal padding
- [ ] Footer is below `</main>`, not inside it

## Common Issues

- **Side nav overlapping content**: Ensure `<main>` has `lg:pl-20` matching the `w-20` side-nav width
- **Nav blocking content**: The `pt-24` on `<main>` must match the nav's actual height (~6rem)
- **Visual layers not filling container**: Make sure the outer div has `relative w-full h-full` before the absolute layers
- **Images not visible at all**: Check that visual-hero has both `opacity-100` AND `scale-100` — both classes are required
