# Prompt 02: Hero Parallax Engine

## Context

This prompt builds the core JavaScript engine — the `ParallaxHero` class. It handles setting up Lenis smooth scroll, creating multi-layer parallax animations with GSAP ScrollTrigger, managing the hero content fade-out, nav scroll behavior, reveal animations, and the preloader.

## The Prompt

```
Create an app.js file with a ParallaxHero class for a multi-layer parallax scrolling system.

**Class: ParallaxHero**

Constructor should store references to:
- DOM elements: hero section (#hero), all parallax layers (.hero__layer), preloader (#preloader), nav (#nav)
- Hero dimensions from getBoundingClientRect

init() method (call all setup methods in order):
1. Register GSAP ScrollTrigger plugin: gsap.registerPlugin(ScrollTrigger)
2. setupLenis()
3. setupParallax()
4. setupHeroFade()
5. setupNavBehavior()
6. setupRevealAnimations()
7. hidePreloader()
8. bindEvents()

**setupLenis() method:**
- Create a new Lenis instance with: lerp 0.1, smoothWheel true, orientation 'vertical'
- Connect Lenis to GSAP ScrollTrigger: lenis.on('scroll', ScrollTrigger.update)
- Add Lenis to GSAP ticker: gsap.ticker.add((time) => lenis.raf(time * 1000))
- Disable GSAP lag smoothing: gsap.ticker.lagSmoothing(0)
- Store lenis instance on this for cleanup

**setupParallax() method:**
- Query all elements with class 'hero__layer' inside the hero
- For each layer:
  - Read its data-speed attribute (parseFloat)
  - Calculate a yDistance: (1 - speed) * window.innerHeight * 0.8
    (layers with lower speed values move less, creating depth)
  - Use gsap.to() on the layer with:
    - y: -yDistance (moves the layer upward as you scroll)
    - ease: 'none' (linear, tied directly to scroll)
    - scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 0.6 }
  - scrub: 0.6 gives a smooth lag effect (slightly more than Nike's 0.5 for a gentler feel)

**setupHeroFade() method:**
- gsap.to('.hero__content') — animate opacity to 0 and y to -60
- ScrollTrigger: trigger '#hero', start 'top top', end '30% top', scrub true
- This makes the headline and CTA fade and drift up as scrolling begins
- Use a slightly longer scroll range (30% vs Nike's 12%) for a gentler fade

**setupNavBehavior() method:**
- Create a ScrollTrigger on '#hero':
  - start: 'top top'
  - end: 'bottom top'
  - onLeave: add class 'is-scrolled' to the nav (transparent → solid)
  - onEnterBack: remove class 'is-scrolled' (solid → transparent)
- This switches the nav from transparent overlay to cream/solid when scrolling past the hero

**setupRevealAnimations() method:**
- Query all elements with class 'reveal'
- For each, create a ScrollTrigger that:
  - Triggers when the element reaches 85% of viewport height (start: 'top 85%')
  - Adds class 'is-visible' on enter
  - Fires once (once: true)

**hidePreloader() method:**
- After a 500ms delay (setTimeout), add class 'is-hidden' to the preloader
- After another 600ms, set preloader display to 'none' to remove from layout

**bindEvents() method:**
- Add a window resize listener (debounced at 200ms) that:
  - Calls ScrollTrigger.refresh() to recalculate positions

Also add the CSS for the hero parallax layers and content to style.css:

.hero — position relative, height 100vh, overflow hidden, background var(--chocolate)
.hero__parallax — position relative, width 100%, height 100%, overflow hidden
.hero__layer — position absolute, top 0, left 0, width 100%, height 120% (extra height for parallax travel room), will-change transform
.hero__layer--bg — z-index 1, background-size cover, background-position center
.hero__layer--ingredients — z-index 2, display flex, justify-content center, align-items center (images positioned via CSS within this layer)
.hero__layer--product — z-index 3, display flex, justify-content center, align-items flex-end
.hero__layer--product img — max-height 70vh, object-fit contain, filter drop-shadow(0 20px 60px rgba(0,0,0,0.4))
.hero__layer--content — z-index 4, display flex, justify-content center, align-items center, text-align center
.hero__content — max-width 800px, padding 2rem, color var(--cream)
.hero__title — font-family var(--font-heading), clamp(2.5rem, 6vw, 5rem), font-weight 700, line-height 1.1, margin-bottom 1rem
.hero__subtitle — font-family var(--font-body), clamp(1rem, 2vw, 1.25rem), opacity 0.8, margin-bottom 2rem, font-weight 400
.hero__cta — inline-block, padding 1rem 2.5rem, background var(--gold), color var(--chocolate), font-family var(--font-body), font-weight 700, text-transform uppercase, letter-spacing 2px, font-size 0.875rem, border-radius 0, transition all 0.3s ease
.hero__cta:hover — background var(--gold-light), transform translateY(-2px)

Preloader .is-hidden state:
.preloader.is-hidden — opacity 0, pointer-events none, transition opacity 0.6s ease

At the bottom of app.js, add a DOMContentLoaded listener that creates a new ParallaxHero instance and calls init().
```

## Expected Output

- `app.js` with the complete `ParallaxHero` class (constructor, init, setupLenis, setupParallax, setupHeroFade, setupNavBehavior, setupRevealAnimations, hidePreloader, bindEvents)
- CSS additions for hero parallax layers, hero content, hero CTA button, and preloader hidden state
- DOMContentLoaded listener at the bottom

## What to Check

- [ ] Preloader appears briefly then fades out
- [ ] Scrolling creates a depth effect — background moves slowly, ingredients drift, product and text move faster
- [ ] Hero headline fades out and drifts up as you begin scrolling
- [ ] Nav switches from transparent to solid cream background when scrolling past the hero
- [ ] Scroll feels smooth (Lenis is working)
- [ ] Window resize doesn't break the parallax positions
- [ ] No console errors

## Common Issues

- **No parallax effect**: Check that the hero layers have correct `data-speed` attributes in the HTML and that `setupParallax()` is reading them with `parseFloat`
- **Layers jumping on scroll**: Make sure `scrub: 0.6` is set and layers have `height: 120%` for travel room
- **Nav never changes**: Verify the ScrollTrigger in `setupNavBehavior()` uses `onLeave`/`onEnterBack` (not `onEnter`/`onLeave`)
- **Jerky scrolling**: Ensure Lenis is connected to GSAP's ticker and `lagSmoothing(0)` is called
- **Preloader stuck**: Check that `hidePreloader()` is called in `init()` and the `.is-hidden` CSS sets `opacity: 0`
