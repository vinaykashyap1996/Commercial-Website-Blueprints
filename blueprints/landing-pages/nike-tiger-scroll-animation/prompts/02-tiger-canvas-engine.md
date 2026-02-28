# Prompt 02: Tiger Canvas Engine

## Context

This prompt builds the core JavaScript engine — the `TigerExperience` class. It handles preloading 242 image frames, sizing two canvases (foreground + background), and rendering frames with a manual object-fit cover algorithm.

## The Prompt

```
Create an app.js file with a TigerExperience class for a dual-canvas frame-by-frame animation system.

**Class: TigerExperience**

Constructor should store references to:
- DOM elements: tiger-canvas (foreground), ambient-canvas (background), preloader, preloader-fill, preloader-count
- Get 2D rendering contexts for both canvases
- State: frameCount=242, frames=[], currentFrame=-1, loadedCount=0, isReady=false
- Viewport dimensions: viewW, viewH, bgViewW, bgViewH
- Render scheduling: pendingFrame=null, rafId=null

Init method (async):
- Register GSAP ScrollTrigger plugin
- Call sizeCanvases()
- Await preloadFrames()
- Call hidePreloader()
- Render frame 0
- Set isReady = true
(Don't call setupLenis, setupScrollTrigger, etc. yet — those come in the next step)

**preloadFrames() method:**
- Return a Promise that resolves when ALL frames are loaded
- Loop from 1 to frameCount, create Image objects
- Set src to: frames/ezgif-frame-{number padded to 3 digits}.jpg
- On each load (or error), increment loadedCount and call updatePreloader()
- Resolve the promise when loadedCount reaches frameCount

**updatePreloader() method:**
- Calculate percentage: Math.round((loadedCount / frameCount) * 100)
- Update the fill bar width and the counter text

**hidePreloader() method:**
- Add class "is-hidden" to the preloader element

**sizeCanvases() method:**
- Get device pixel ratio (cap at 2 for performance)
- Get parent element's bounding rect for dimensions
- Foreground canvas: set to 100% of viewport dimensions, scale context by DPR
- Background canvas: set to 110% of viewport dimensions (oversized to prevent edge gaps when blurred), scale context by DPR

**renderFrame(index) method:**
This is critical — implement manual object-fit cover for canvas:
- Get the image at the given index
- Guard: return if image isn't loaded (no naturalWidth)
- Calculate image aspect ratio

For the FOREGROUND canvas (sharp image, cover fit):
  - Compare image ratio to viewport ratio
  - If image is wider: match viewport height, center horizontally (some cropping on sides)
  - If image is taller: match viewport width, center vertically (some cropping on top/bottom)
  - Draw the image with calculated position and dimensions

For the BACKGROUND canvas (blurred ambient glow, cover fit):
  - Same cover-fit logic but using the 110% viewport dimensions
  - Draw the image to fill the oversized background canvas

**scheduleRender(index) method:**
- Store the pending frame index
- If a requestAnimationFrame is already scheduled, return (avoid duplicate renders)
- Schedule a RAF callback that:
  - Clears the rafId
  - If pendingFrame changed from currentFrame, update currentFrame and call renderFrame

Also add the CSS for the hero section and canvases to style.css:

.hero — position relative, height 800vh (tall for scroll room), black background
.hero__sticky — position sticky, top 0, height 100vh, overflow hidden, centered flexbox, black background
#ambient-canvas — position absolute, top -5%, left -5%, width 110%, height 110%, filter blur(40px) saturate(1.2), z-index 1
#tiger-canvas — position absolute, top 0, left 0, 100% width and height, z-index 2, with a vertical mask-image gradient (transparent at top/bottom edges, black in middle)
.hero__content — position relative, z-index 3, centered text, white color, pointer-events none
.hero__title — use var(--font-heading), clamp(3.5rem, 14vw, 9rem), mix-blend-mode difference

At the bottom of app.js, add a DOMContentLoaded listener that creates a new TigerExperience instance and calls init().

Don't add GSAP scroll triggers or Lenis yet — just the canvas engine and preloader.
```

## Expected Output

- `app.js` with the complete `TigerExperience` class (constructor, init, preloadFrames, updatePreloader, hidePreloader, sizeCanvases, renderFrame, scheduleRender)
- CSS additions for `.hero`, `.hero__sticky`, `#ambient-canvas`, `#tiger-canvas`, `.hero__content`, `.hero__title`
- DOMContentLoaded listener at the bottom

## What to Check

- [ ] Preloader shows real loading progress as frames load
- [ ] Preloader fades out after all frames finish loading
- [ ] First frame renders on both canvases (you should see the tiger image)
- [ ] Background canvas has a blurred, glowing version of the same frame
- [ ] No console errors
- [ ] Canvas renders correctly at different viewport sizes (try resizing)

## Common Issues

- **Black screen / nothing renders**: Check that the frame image paths match your actual files. The path `frames/ezgif-frame-001.jpg` must exist.
- **Blurry foreground**: Make sure DPR scaling is applied to the foreground canvas. The canvas width/height should be multiplied by DPR, then the context is scaled back.
- **Frames load but first frame doesn't show**: Ensure `renderFrame(0)` is called AFTER `preloadFrames()` resolves.
