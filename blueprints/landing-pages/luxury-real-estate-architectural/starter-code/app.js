/**
 * Luxury Real Estate Architectural Landing — Scroll Interaction
 *
 * Uses the native Intersection Observer API to detect which narrative
 * chapter is currently in view and crossfades the corresponding image
 * in the sticky left visual stage. No external libraries required.
 */

document.addEventListener('DOMContentLoaded', () => {

  /**
   * Maps each chapter article (by ID) to the visual layer it should
   * activate. Chapters 5 and 6 intentionally reuse earlier visuals.
   */
  const chapters = [
    { id: 'chapter-hero',       visual: 'visual-hero' },
    { id: 'chapter-philosophy', visual: 'visual-philosophy' },
    { id: 'chapter-signature',  visual: 'visual-signature' },
    { id: 'chapter-craft',      visual: 'visual-craft' },
    { id: 'chapter-global',     visual: 'visual-hero' },       // reuses hero image
    { id: 'chapter-consult',    visual: 'visual-philosophy' }  // reuses philosophy image
  ];

  /**
   * Observer: fires when a chapter crosses the 50% visibility threshold.
   * Swaps Tailwind opacity/scale classes to trigger CSS crossfade.
   */
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;

      const activeChapterId = entry.target.id;
      const chapter = chapters.find(c => c.id === activeChapterId);
      if (!chapter) return;

      // Hide all visual layers
      document.querySelectorAll('[id^="visual-"]').forEach(visual => {
        visual.classList.replace('opacity-100', 'opacity-0');
        visual.classList.replace('scale-100', 'scale-105');
      });

      // Show the mapped visual layer
      const targetVisual = document.getElementById(chapter.visual);
      if (targetVisual) {
        targetVisual.classList.replace('opacity-0', 'opacity-100');
        targetVisual.classList.replace('scale-105', 'scale-100');
      }
    });
  }, {
    root: null,       // viewport
    threshold: 0.5    // trigger when 50% of the chapter is visible
  });

  // Attach observer to each chapter element
  chapters.forEach(c => {
    const el = document.getElementById(c.id);
    if (el) observer.observe(el);
  });

});
