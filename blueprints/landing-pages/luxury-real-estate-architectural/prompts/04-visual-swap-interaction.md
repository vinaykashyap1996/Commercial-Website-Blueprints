# Prompt 04: Visual Swap & Scroll Interaction

## Context

This prompt writes the JavaScript that powers the page's signature interaction: as the user scrolls through narrative chapters on the right, the sticky visual panel on the left silently crossfades between cinematic architectural images. It uses the native Intersection Observer API — no libraries required.

## The Prompt

```
Write the complete JavaScript for app.js for my luxury architectural landing page.

The page has:
- A sticky left panel with 4 image layers stacked absolutely on top of each other, each with an id:
  - visual-hero (starts visible: opacity-100 scale-100)
  - visual-philosophy (starts hidden: opacity-0 scale-105)
  - visual-signature (starts hidden: opacity-0 scale-105)
  - visual-craft (starts hidden: opacity-0 scale-105)
  - All layers have Tailwind class: transition-all duration-1000 ease-in-out

- A right scroll panel with 6 chapter articles, each with an id:
  - chapter-hero, chapter-philosophy, chapter-signature, chapter-craft, chapter-global, chapter-consult

The chapter-to-visual mapping is:
  chapter-hero       → visual-hero
  chapter-philosophy → visual-philosophy
  chapter-signature  → visual-signature
  chapter-craft      → visual-craft
  chapter-global     → visual-hero        (reuses hero image)
  chapter-consult    → visual-philosophy  (reuses philosophy image)

Write the following JavaScript:

1. Define the chapters array with objects { id, visual } using the mapping above.

2. Create an IntersectionObserver with threshold: 0.5
   In the callback, for each entry that isIntersecting:
   a. Find the chapter object matching entry.target.id
   b. Get the visualId from that chapter object
   c. If visualId is found:
      - Loop through ALL elements matching [id^="visual-"] and:
        - Replace class 'opacity-100' with 'opacity-0'
        - Replace class 'scale-100' with 'scale-105'
      - Get the target visual by document.getElementById(visualId) and:
        - Replace class 'opacity-0' with 'opacity-100'
        - Replace class 'scale-105' with 'scale-100'

3. Loop through chapters and observe each chapter element (if it exists in the DOM).

The script should be wrapped in a DOMContentLoaded event listener.

Keep it under 50 lines. No external libraries. Pure vanilla JS.
```

## Expected Output

`app.js` — ~35-45 lines of clean vanilla JavaScript

## Example Output Structure

```javascript
document.addEventListener('DOMContentLoaded', () => {
    const chapters = [
        { id: 'chapter-hero',       visual: 'visual-hero' },
        { id: 'chapter-philosophy', visual: 'visual-philosophy' },
        { id: 'chapter-signature',  visual: 'visual-signature' },
        { id: 'chapter-craft',      visual: 'visual-craft' },
        { id: 'chapter-global',     visual: 'visual-hero' },
        { id: 'chapter-consult',    visual: 'visual-philosophy' }
    ];

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const activeChapter = entry.target.id;
                const visualId = chapters.find(c => c.id === activeChapter)?.visual;

                if (visualId) {
                    // Hide all visuals
                    document.querySelectorAll('[id^="visual-"]').forEach(v => {
                        v.classList.replace('opacity-100', 'opacity-0');
                        v.classList.replace('scale-100', 'scale-105');
                    });
                    // Show active visual
                    const targetVisual = document.getElementById(visualId);
                    targetVisual.classList.replace('opacity-0', 'opacity-100');
                    targetVisual.classList.replace('scale-105', 'scale-100');
                }
            }
        });
    }, { threshold: 0.5 });

    chapters.forEach(c => {
        const el = document.getElementById(c.id);
        if (el) observer.observe(el);
    });
});
```

## What to Check

- [ ] All 6 chapter IDs are in the chapters array
- [ ] chapter-global maps to visual-hero (image reuse)
- [ ] chapter-consult maps to visual-philosophy (image reuse)
- [ ] The querySelector uses `[id^="visual-"]` (attribute starts-with selector) to target ALL 4 visual layers
- [ ] classList.replace() is used (not classList.add/remove) — critical for Tailwind class swaps
- [ ] The observer threshold is 0.5 (50% of chapter visible)
- [ ] The script checks `if (el)` before observing — prevents errors if an element is missing
- [ ] The whole script is wrapped in DOMContentLoaded

## How to Test

1. Open the page in a browser with the console open
2. Scroll slowly through the page
3. At each chapter transition, the left image should crossfade (1 second, smooth)
4. Visual sequence: exterior → light/shadow → pool/terrace → stone texture → exterior (again) → light/shadow (again)

## Common Issues

- **Visuals not swapping**: Open browser console — if you see errors, the chapter IDs may not match between the chapters array in JS and the article IDs in HTML
- **classList.replace() not working**: This happens when a visual starts in the wrong state. Check the initial HTML: visual-hero must have BOTH opacity-100 AND scale-100; others must have BOTH opacity-0 AND scale-105
- **All visuals hidden after first scroll**: classList.replace() returns false (not throws) if the class isn't found — this is safe to ignore. But if visuals go blank, check that the correct visual layer has the classes being replaced
- **Swap happens too early**: Raise the threshold to 0.6 or 0.7 to require more of the chapter to be visible before triggering
- **Swap happens too late on mobile**: Lower the threshold to 0.3 on mobile (use window.innerWidth to branch)
