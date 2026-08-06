# Build Exact Frame — Mobile Responsiveness Plan

## Objective
Transform the Build Exact Frame web application into a fully mobile-responsive and optimized experience supporting viewports from 320px to 768px and beyond.

## Requirements Breakdown
- **R1: Mobile Navigation & Header Optimization**
  - Implement mobile hamburger menu / drawer navigation for `< 768px` viewports.
  - Smooth open/close transitions, backdrop overlay, touch targets >= 44px, no layout shifts.
- **R2: Responsive Layouts & Touch-Friendly Interactions Across All Pages**
  - Eliminate fixed width containers (`px`), hardcoded negative margins/offsets, unscaled absolute positioning.
  - Prevent horizontal scrollbars (`overflow-x: hidden` / responsive sizing).
  - Ensure all buttons, form fields, and interactive items have >= 44x44px touch targets.
- **R3: Media & Typography Scaling**
  - Scale down large typography (hero section, headers, reveal text) fluidly.
  - Scale down custom visual components (wheels, frames, graphical grids) while maintaining aspect ratio and visual fidelity.
- **R4: Performance & Build Verification**
  - Verify clean TypeScript build (`npm run build` / `vite build`).
  - Ensure zero runtime/console errors and preserve dark mode / design tokens.

## Milestone Plan

### Milestone 1: Exploration & Navigation Bar Mobile Optimization (R1)
- **Goal**: Full mobile navbar burger toggle & collapsible drawer navigation.
- **Tasks**:
  1. Explore current Navbar implementation and components.
  2. Implement hamburger toggle button visible on `< 768px`.
  3. Implement slide-out or full-screen overlay menu with smooth animation and trap focus.
  4. Ensure proper z-index and body scroll locking when open.
- **Verification**: Reviewer checks navbar on 320px, 375px, 412px, 768px.

### Milestone 2: Responsive Component Layouts & Grid Systems (R2)
- **Goal**: Refactor page layouts, grids, and touch targets.
- **Tasks**:
  1. Audit Home, About, Delivery, Contact, Solution Tracks, Capability List, Fuel/Wheel, and CTA.
  2. Replace hardcoded `px` width/margin/padding with CSS grid/flex, `rem`, `vw`, `%`, and Tailwind responsive prefixes (`sm:`, `md:`, `lg:`).
  3. Ensure buttons (`FillButton`, submit forms, interactive elements) adhere to >= 44px touch target guideline.
- **Verification**: Zero horizontal scrollbar across all pages on 320px, 375px, 412px viewports.

### Milestone 3: Graphical Components & Typography Fluidity (R3)
- **Goal**: Fluid typography and responsive graphical frame/wheel components.
- **Tasks**:
  1. Implement fluid font scaling (`clamp()`, responsive text utilities).
  2. Adjust custom visual frames, interactive wheel/fuel components for small viewports so they scale proportionally without clipping.
- **Verification**: Reviewer checks visual fidelity and text wrapping on mobile screens.

### Milestone 4: E2E Testing Track & Coverage (Dual Track)
- **Goal**: Create and verify comprehensive mobile E2E test suite covering Tiers 1 to 4.
- **Tasks**:
  1. Create test infrastructure / runner for mobile viewports (320px, 375px, 412px, 768px).
  2. Create test cases for navigation, page scaling, button tap targets, horizontal overflow detection.
- **Verification**: `TEST_READY.md` published and 100% test pass achieved.

### Milestone 5: Build Verification, Challenger Testing & Forensic Audit (R4)
- **Goal**: Validate build output, code quality, performance, and forensic integrity.
- **Tasks**:
  1. Run production build check (`npm run build`).
  2. Perform adversarial challenger verification for viewport edge cases.
  3. Perform forensic integrity audit.
- **Verification**: Clean build output, clean audit verdict.
