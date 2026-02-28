/* ========================================================
   SCROLL ANIMATION LANDING PAGE — APP ENGINE

   Architecture:
   - ScrollExperience: Dual-canvas scrollytelling controller
   - Carousel: Horizontal snap-scroll product slider
   - App: Init orchestrator

   Follow BLUEPRINT.md to build each class step by step.
   ======================================================== */


/* ========================================================
   SCROLL EXPERIENCE
   TODO: Build the frame-by-frame dual-canvas scroll animation
   See prompts/02-tiger-canvas-engine.md and prompts/03-gsap-scroll-animation.md
   ======================================================== */
class ScrollExperience {
  constructor() {
    // TODO: Store DOM references (canvases, preloader elements)
    // TODO: Initialize state (frameCount, frames array, dimensions)
  }

  async init() {
    // TODO: Register GSAP plugin, size canvases, preload frames
    // TODO: Setup Lenis, ScrollTrigger, reveal animations, nav behavior
  }
}


/* ========================================================
   CAROUSEL
   TODO: Build the horizontal snap-scroll product slider
   See prompts/04-sections-and-carousel.md
   ======================================================== */
class Carousel {
  constructor() {
    // TODO: Store DOM references (track, prev/next buttons)
    // TODO: Define products array with title, category, price, image
    // TODO: Call render() and bindEvents()
  }

  render() {
    // TODO: Generate card HTML from products array
  }

  bindEvents() {
    // TODO: Wire up prev/next button scroll behavior
  }
}


/* ========================================================
   APP INIT
   ======================================================== */
document.addEventListener('DOMContentLoaded', () => {
  // TODO: Create instances and initialize
});
