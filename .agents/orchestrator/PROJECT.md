# Project: Build Exact Frame Mobile Responsiveness & Optimization

## Architecture
- Tech Stack: Vite + React + TypeScript + Tailwind CSS v4 + Lucide icons + Framer Motion.
- Scope: Full mobile responsiveness (320px to 768px+ viewports), Navbar mobile burger/drawer, fluid typography, touch target optimization, zero build/typecheck errors.

## Milestones
| # | Name | Scope | Dependencies | Status |
|---|------|-------|-------------|--------|
| 1 | M1: Build Setup & Mobile Navbar (R1, R4) | `tsconfig.json`, `package.json` scripts/deps, `Navbar.tsx` & `Navbar.css` backdrop/scroll-lock/44px touch targets | None | DONE |
| 2 | M2: Responsive Layouts & Touch Targets (R2) | `App.tsx` scaling fix, `CapabilityList.tsx` nowrap fix, `FillButton` & form input 44px targets, iOS zoom fix | M1 | DONE |
| 3 | M3: Typography & Graphical Scaling (R3) | `clamp()` fluid headings, `FullCircleWheel.tsx` mobile grid/icons, `Hero.tsx` ring scale, `Footer.tsx` logo refactor | M2 | DONE |
| 4 | M4: E2E Mobile Testing Suite (Dual Track) | Create mobile test suite (320px, 375px, 412px, 768px) & publish `TEST_READY.md` | M1, M2, M3 | DONE |
| 5 | M5: Review, Challenge & Forensic Audit (R4) | Dual Reviewer evaluation, Challenger test execution, Forensic Auditor integrity check | M4 | DONE |

## Interface Contracts
### Navbar ↔ Pages
- Mobile burger menu toggles slide-out drawer on viewports < 840px.
- Backdrop overlay (`.nav-backdrop`) dismisses menu on click or Escape key.
- Body scroll locked (`overflow: hidden`) when menu is open.
- All touch targets >= 44x44px. Navbar z-index elevated to 1000 / 999 / 998.

### Layout Containers & Touch Targets
- Root wrapper: `w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-x-hidden`.
- Grid containers: single column (`grid-cols-1`) on viewports < 640px/768px.
- All interactive controls (`FillButton`, input fields, CTA links): minimum height/width >= 44px.
- Form inputs: `font-size: 16px` (prevents iOS auto-zoom).

### Visual Frames & Fluid Typography
- Headings: fluid CSS `clamp(min, val, max)` for smooth scaling across 320px -> 768px -> 1200px.
- Wheel/Icon components: responsive width (`max-w-full h-auto`) to fit mobile grid cells (120px) without overflow.

## Code Layout
- `src/app/components/`: Navbar, Hero, CapabilityList, SolutionTracks, FullCircleWheel, DeliveryPage, ContactPage, CtaBand, Footer.
- `src/app/components/ui/`: FillButton, card, button.
- `src/app/App.tsx`: Main layout wrapper & page routing.
- `src/styles/theme.css`: Tailwind v4 theme definitions.
