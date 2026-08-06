# Adversarial Handoff Report — Viewport Boundaries & Horizontal Overflow Stress Test

**Author**: Challenger 1 (Empirical Challenger)  
**Date**: 2026-08-06  
**Target Project**: Build Exact Frame (`/home/potato/Documents/unwanted/collabo/Build Exact Frame`)  
**Working Directory**: `/home/potato/Documents/unwanted/collabo/Build Exact Frame/.agents/challenger_m5_1`  

---

## Challenge Summary

**Overall risk assessment**: **MEDIUM**

While `npm test`, `npm run typecheck`, and `npm run build` all pass cleanly and root-level `overflow-x: clip` successfully prevents native document horizontal scrollbars across all pages, empirical Playwright stress testing across 35 viewport-route combinations revealed **3 distinct layout boundary failure modes** affecting 11 test cases:

1. **Home Page Mobile Hard-Clipping (< 768px)**: Unscaled 1280px desktop canvas on mobile viewports causes ~180 child elements (including hero titles and CTA bands) to extend to x=1280px, resulting in hard-clipping on the right edge.
2. **Delivery Page Headline Animation Overflow (< 768px)**: Un-in-view `.panel-2-headline` uses `transform: translateX(30px)` which pushes the heading right edge 6px beyond the viewport boundary before scrolling into view.
3. **About Page Breakpoint Mismatch (840px)**: Navbar shifts to mobile hamburger drawer at 840px, but About Page CSS maintains desktop 2-column grid down to 768px, causing elements to spill out to 1231px at 840px viewport.

---

## 1. Observation

### Build & Basic Test Suite Results
- `npm test`: Executed `node scripts/run-mobile-e2e.js`. All 40 assertions in 4 tiers passed cleanly (Exit Code 0).
- `npm run typecheck`: Executed `tsc --noEmit`. Completed with 0 errors (Exit Code 0).
- `npm run build`: Executed `vite build`. Built production bundle in `dist/` with 0 errors (Exit Code 0).

### Empirical Playwright Stress Test Results (`scripts/empirical-viewport-stress-test.js`)
Executed Playwright Chromium against production preview server (`http://127.0.0.1:4173/`) across 7 target viewports (320px, 360px, 375px, 390px, 412px, 768px, 840px) and 5 routes (`#home`, `#about`, `#contact`, `#delivery`, `#full-circle-fuel`):
- Total combinations evaluated: 35
- Total Passed: 24
- Total Failed: 11

Verbatim failure logs from Playwright test harness:

```text
--------------------------------------------------------------------------
🔍 VIEWPORT: 320px (iPhone SE 1st gen) (320x667px)
--------------------------------------------------------------------------
  ✗ Route: Home Page              | scrollWidth: 320px / 320px | FAIL
    - Overflowing elements count: 182
      * <div class=""> right=1280px
      * <div class="bg-[#f4f4f4] relative size-full"> right=1280px
      * <div class="absolute bg-white h-[225px] left-0 top-[2804px] w-[1280px]"> right=1280px
    - Text rendering issues count: 1
      * [Hero Title] "When fuel matters the most": Element box right edge (624px) extends beyond viewport (320px)
  ✓ Route: About Page             | scrollWidth: 320px / 320px | Overflow-X: NONE | Text Clipping: NONE
  ✓ Route: Contact Page           | scrollWidth: 320px / 320px | Overflow-X: NONE | Text Clipping: NONE
  ✗ Route: Delivery Page          | scrollWidth: 320px / 320px | FAIL
    - Overflowing elements count: 1
      * <h2 class="panel-2-headline"> right=326px
    - Text rendering issues count: 1
      * [Accordion Heading] "Every major grade, ready when needed": Element box right edge (326px) extends beyond viewport (320px)
  ✓ Route: Full Circle Fuel Page  | scrollWidth: 320px / 320px | Overflow-X: NONE | Text Clipping: NONE

[... 360px, 375px, 390px, 412px repeat Home Page & Delivery Page failures ...]

--------------------------------------------------------------------------
🔍 VIEWPORT: 840px (Navbar Breakpoint) (840x900px)
--------------------------------------------------------------------------
  ✓ Route: Home Page              | scrollWidth: 840px / 840px | Overflow-X: NONE | Text Clipping: NONE
  ✗ Route: About Page             | scrollWidth: 840px / 840px | FAIL
    - Overflowing elements count: 6
      * <div class="story-right"> right=1231px
      * <div class="apart-right"> right=865px
      * <ul class="apart-items"> right=865px
  ✓ Route: Contact Page           | scrollWidth: 840px / 840px | Overflow-X: NONE | Text Clipping: NONE
  ✓ Route: Delivery Page          | scrollWidth: 840px / 840px | Overflow-X: NONE | Text Clipping: NONE
  ✓ Route: Full Circle Fuel Page  | scrollWidth: 840px / 840px | Overflow-X: NONE | Text Clipping: NONE
```

### Source Code Observations
1. **`src/app/App.tsx` (Lines 189-200)**:
   ```tsx
   const apply = () => {
     const w = outer.getBoundingClientRect().width || window.innerWidth;
     if (!w) return;
     const scale = w < 768 ? 1 : w / DESIGN_WIDTH;
     inner.style.transform = scale === 1 ? "none" : `scale(${scale})`;
     outer.style.height = `${-NAVBAR_HEIGHT + DESIGN_HEIGHT * scale}px`;
   };
   ```
   On screen widths `w < 768px`, `scale` is locked at `1`, leaving `innerRef` at `width: 1280px`. `outerRef` specifies `overflowX: clip`.

2. **`src/app/components/DeliveryPage.css` (Lines 185-189)**:
   ```css
   .panel-2-headline {
     opacity: 0;
     transform: translateX(30px);
     transition: opacity 0.6s ease-out 0.1s, transform 0.6s ease-out 0.1s;
   }
   ```
   Before scrolling into view, `.panel-2-headline` has `transform: translateX(30px)`.

3. **`src/app/components/AboutPage.css` (Lines 151-157, 374)**:
   ```css
   .about-page-container .story-grid {
     max-width: 1280px;
     margin: 0 auto;
     display: grid;
     grid-template-columns: 605px 1fr;
   }
   ```
   Mobile grid collapse is defined inside `@media (max-width: 768px)`, whereas `Navbar.css` triggers mobile navigation at `@media (max-width: 840px)`.

---

## 2. Logic Chain

1. **Observation 1 & Source Code 1**: `App.tsx` sets `scale = 1` for viewports under 768px, but `HomePage` layout elements inside `innerRef` maintain absolute fixed pixel coordinates up to `1280px` width.
   - **Inference**: While `overflowX: clip` on `outerRef` prevents the document body from spawning a horizontal scrollbar (`docScrollWidth == viewportWidth`), all elements with `x > viewportWidth` (including hero title text ending at x=624px, right hero column at x=795px, and right-side stat cards) are truncated and rendered invisible outside the viewport frame on mobile devices.

2. **Observation 2 & Source Code 2**: `DeliveryPage.css` applies `translateX(30px)` to `.panel-2-headline` prior to element intersection (`.in-view`).
   - **Inference**: At 320px viewport width, the text container is 272px wide (x=24 to 296). Adding `30px` offset shifts the right bounding edge to 326px (+6px beyond 320px screen width). Because the parent section does not specify `overflow-x: clip`, the heading element momentarily overflows the viewport boundary prior to animation triggering.

3. **Observation 3 & Source Code 3**: `Navbar.css` switches layout to mobile drawer mode at `<= 840px`, but `AboutPage.css` keeps desktop 2-column grid (`605px 1fr`) active until `<= 768px`.
   - **Inference**: In the 769px–840px window (e.g. 840px tablet viewport), `AboutPage` attempts to display two side-by-side columns total width > 1135px inside an 840px container, causing `.story-right` (x=1231px) and `.apart-right` (x=865px) to overflow past the right edge.

---

## 3. Stress Test Results Matrix

| Scenario / Route | Target Viewport | Expected Behavior | Actual Behavior | Result |
|---|---|---|---|---|
| Home Page Layout | 320px | Fully scaled/responsive content within 320px | `scrollWidth` 320px (clipped), 182 elements extend to 1280px | **FAIL** |
| Home Page Layout | 360px | Fully scaled/responsive content within 360px | `scrollWidth` 360px (clipped), 182 elements extend to 1280px | **FAIL** |
| Home Page Layout | 375px | Fully scaled/responsive content within 375px | `scrollWidth` 375px (clipped), 182 elements extend to 1280px | **FAIL** |
| Home Page Layout | 390px | Fully scaled/responsive content within 390px | `scrollWidth` 390px (clipped), 180 elements extend to 1280px | **FAIL** |
| Home Page Layout | 412px | Fully scaled/responsive content within 412px | `scrollWidth` 412px (clipped), 180 elements extend to 1280px | **FAIL** |
| Home Page Layout | 768px | Scaled canvas (scale=0.6) inside 768px | Zero element overflow, zero scrollbars | **PASS** |
| Home Page Layout | 840px | Scaled canvas (scale=0.656) inside 840px | Zero element overflow, zero scrollbars | **PASS** |
| Delivery Page | 320px | Headline `in-view` animation inside 320px | `panel-2-headline` extends to right=326px (+6px) | **FAIL** |
| Delivery Page | 360px | Headline `in-view` animation inside 360px | `panel-2-headline` extends to right=366px (+6px) | **FAIL** |
| Delivery Page | 375px | Headline `in-view` animation inside 375px | `panel-2-headline` extends to right=381px (+6px) | **FAIL** |
| Delivery Page | 390px | Headline `in-view` animation inside 390px | `panel-2-headline` extends to right=396px (+6px) | **FAIL** |
| Delivery Page | 412px | Headline `in-view` animation inside 412px | `panel-2-headline` extends to right=418px (+6px) | **FAIL** |
| Delivery Page | 768px | Desktop sticky scroll layout inside 768px | Zero element overflow, zero scrollbars | **PASS** |
| Delivery Page | 840px | Desktop sticky scroll layout inside 840px | Zero element overflow, zero scrollbars | **PASS** |
| About Page | 320px–768px | Stacked single-column mobile layout | Zero element overflow, zero scrollbars | **PASS** |
| About Page | 840px | Adapted layout matching navbar 840px breakpoint | Desktop grid overflows (right=1231px) | **FAIL** |
| Contact Page | 320px–840px | Fully responsive form down to 320px | Zero element overflow, 16px input font-size | **PASS** |
| Full Circle Fuel | 320px–840px | 2-column spoke grid on mobile, 3-col on desktop | Zero element overflow, all 6 spokes visible | **PASS** |

---

## 4. Caveats

- **No scrollbars triggered**: Root `html, body { overflow-x: clip; }` prevents native OS browser horizontal scrollbars from displaying. The failures reported are element bounding box overflows and content truncations.
- **Review-Only Constraint**: As an Empirical Challenger, I have not modified application source code. Recommendations are provided for the implementation team.

---

## 5. Conclusion

- **Horizontal Scrollbar Containment (`overflow-x`)**: **PASSED**. No page triggers native horizontal scrollbars at any tested viewport.
- **Text Element & Layout Boundary Containment**: **PARTIAL FAIL**.
  - Contact Page and Full Circle Fuel Page passed all viewports.
  - Home Page fails mobile viewports (< 768px) due to unscaled 1280px fixed width canvas.
  - Delivery Page fails mobile viewports (< 768px) due to `translateX(30px)` un-in-view animation offset.
  - About Page fails 840px viewport due to media query breakpoint mismatch with Navbar (768px vs 840px).

### Suggested Mitigations for Implementation Team
1. **Home Page (`App.tsx`)**: Update scaling logic so `scale = w / 1280` applies to all viewports, or provide a dedicated mobile-responsive component layout for Home Page when `w < 768px`.
2. **Delivery Page (`DeliveryPage.css`)**: Add `overflow-x: clip` or `overflow: hidden` to `.scrollable-right-col` / `.sticky-text-block` or change initial animation from `translateX(30px)` to `opacity: 0, translateY(20px)`.
3. **About Page (`AboutPage.css`)**: Align the mobile media query breakpoint in `AboutPage.css` from `@media (max-width: 768px)` to `@media (max-width: 840px)` to match `Navbar.css`.

---

## 6. Verification Method

To independently verify these findings:

1. **Run standard build checks**:
   ```bash
   npm test
   npm run typecheck
   npm run build
   ```
2. **Execute empirical Playwright viewport stress test**:
   ```bash
   node scripts/empirical-viewport-stress-test.js
   ```
   Inspect stdout for verbatim metrics and element bounding right edges across viewports 320px, 360px, 375px, 390px, 412px, 768px, 840px.
