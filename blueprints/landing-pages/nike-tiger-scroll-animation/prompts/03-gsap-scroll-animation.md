# Prompt 03: GSAP Scroll Animation

## Context

This prompt wires up the scroll-driven animation using GSAP ScrollTrigger and Lenis smooth scroll. The tiger frames will play as the user scrolls, and additional scroll behaviors like content fade-out and nav color switching will be added.

## The Prompt

```
Add scroll animation support to the TigerExperience class in app.js. The tiger frame animation should play as the user scrolls through the hero section.

**Add these methods to TigerExperience and call them in init():**

**setupLenis() method:**
- Create a new Lenis instance with: lerp 0.1, smoothWheel true, orientation 'vertical'
- Connect Lenis to GSAP ScrollTrigger: lenis.on('scroll', ScrollTrigger.update)
- Add Lenis to GSAP ticker: gsap.ticker.add((time) => lenis.raf(time * 1000))
- Disable GSAP lag smoothing: gsap.ticker.lagSmoothing(0)

**setupScrollTrigger() method:**
Create two scroll-linked animations:

1. Frame scrubbing (the main tiger animation):
   - ScrollTrigger.create() on the #hero element
   - Start: 'top top', End: 'bottom bottom'
   - scrub: 0.5 (smooth lag behind scroll)
   - onUpdate callback: calculate frame index from self.progress
     - index = Math.min(Math.floor(progress * (frameCount - 1)), frameCount - 1)
     - Call scheduleRender(index)

2. Hero content fade-out:
   - gsap.to('.hero__content') — animate opacity to 0 and y to -80
   - ScrollTrigger: trigger '#hero', start 'top top', end '12% top', scrub true
   - This makes the title/scroll cue fade and move up as scrolling begins

**setupRevealAnimations() method:**
- Query all elements with class 'reveal'
- For each, create a ScrollTrigger that:
  - Triggers when the element reaches 88% of viewport height
  - Adds class 'is-visible' on enter
  - Fires once (once: true)

**setupNavBehavior() method:**
- Create a ScrollTrigger on '#hero' that fires when the hero's bottom reaches 80px from the top
- onEnter: add class 'is-dark' to the nav (switches logo from white to dark)
- onLeaveBack: remove class 'is-dark' (switches back to white)

**bindEvents() method:**
- Add a window resize listener (debounced at 200ms) that:
  - Recalculates canvas sizes via sizeCanvases()
  - Re-renders the current frame if one exists

**Update init() method** to call (in this order):
1. sizeCanvases()
2. await preloadFrames()
3. hidePreloader()
4. setupLenis()
5. setupScrollTrigger()
6. setupRevealAnimations()
7. setupNavBehavior()
8. bindEvents()
9. renderFrame(0)

Also add the corresponding CSS for reveal animations to style.css:

.reveal — opacity 0, transform translateY(40px), transition opacity 0.9s ease-out and transform 0.9s ease-out
.reveal.is-visible — opacity 1, transform translateY(0)
Stagger delays on nth-child(2) through nth-child(4): 0.08s, 0.16s, 0.24s increments

And add the scroll cue animation:
.hero__scroll-cue — flexbox column centered, margin-top 2rem
.hero__scroll-text — small uppercase text, letter-spacing 4px, 60% opacity
.hero__scroll-line — 1px wide, 48px tall white line with a pulsing scaleY animation (2.4s infinite)
```

## Expected Output

Updated `app.js` with all 5 new methods added to `TigerExperience`.
Updated `style.css` with `.reveal` animation classes and scroll cue styles.

## What to Check

- [ ] Scrolling through the hero section plays the tiger animation smoothly
- [ ] Animation starts at frame 0 at the top and reaches frame 241 at the bottom of the hero
- [ ] The scroll feels smooth (Lenis is working)
- [ ] Hero content fades out and moves up as scrolling begins
- [ ] Nav logo color switches from white to dark when you scroll past the hero
- [ ] Page resize correctly re-sizes canvases and re-renders the current frame
- [ ] Elements with class 'reveal' animate in when scrolled into view

## Common Issues

- **Animation feels jerky**: Check that `scrub: 0.5` is set and that Lenis is connected to GSAP's ticker
- **Frame skipping**: The `scheduleRender` method with RAF throttling prevents this, but verify it's being called in the ScrollTrigger onUpdate
- **Reveal animations not triggering**: Make sure the `.reveal` class is on the actual elements in the HTML
- **Lenis conflicts**: Ensure `html.lenis` and `html.lenis body` have `height: auto` in CSS
