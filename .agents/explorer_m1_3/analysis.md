# Comprehensive Technical Analysis: Requirement R3 (Media & Typography Scaling) and Requirement R4 (Build Setup)

**Project Root**: `/home/potato/Documents/unwanted/collabo/Build Exact Frame`  
**Agent**: Explorer 3 (`explorer_m1_3`)  
**Date**: 2026-08-06  

---

## Executive Summary

This investigation evaluates **Requirement R3 (Media & Typography Scaling)** and **Requirement R4 (Build Setup & Tooling)** across all pages and components of the **Build Exact Frame** application.

Key findings include:
1. **Build Setup & Tooling (R4)**:
   - **Missing `tsconfig.json`**: There is no TypeScript configuration file (`tsconfig.json`) in the project root. TypeScript compilation (`tsc --noEmit`) cannot be executed, and IDE path mapping/type checking is disabled.
   - **`package.json` Dependencies & Scripts**: `react` (18.3.1) and `react-dom` (18.3.1) are omitted from `dependencies` (only declared under optional `peerDependencies`). `scripts` lacks `"preview"` and `"typecheck"` commands. Package `name` is unconfigured (`"@figma/my-make-file"`).
   - **Tailwind CSS v4 & PostCSS**: Tailwind v4 (`@tailwindcss/vite` v4.1.12) is configured via `@theme inline` in `src/styles/theme.css`. `postcss.config.mjs` is correctly empty as `@tailwindcss/vite` handles compilation. However, several components use invalid font-family utility syntax (e.g. `font-['Merriweather:Regular',serif]`).

2. **Typography Scaling (R3)**:
   - **Microscopic Scaling on `HomePage`**: `App.tsx` wraps `HomePage` in a JS fixed-aspect scale transform container (`DESIGN_WIDTH = 1280`, `scale = window.innerWidth / 1280`). On a 320px screen width (`scale = 0.25`), body text (16px) shrinks to **4px**, and 12px subtext shrinks to **3px**, rendering the landing page completely unreadable on mobile devices.
   - **Layout-Breaking `whitespace-nowrap` Bug**: In `CapabilityList.tsx` (line 105), paragraph text (`eyebrow`) is assigned `whitespace-nowrap`. This forces long text strings (e.g., "When the project runs before the payment does.") into a single un-wrapped line on 320px viewports, breaking out of the container and causing horizontal overflow.
   - **Fixed Mobile Pixel Sizes & Sudden Breakpoints**: Heading fonts on `Hero.tsx` (`text-[26px]`), `AboutPage.css` (`35px` -> `22px` step down at 768px), `ContactPage.css` (`54px` -> `44px` step down at 900px) use fixed pixel breakpoints rather than fluid typography (`clamp()`).

3. **Media & Graphical Frames (R3)**:
   - **Fixed Grid Cell Sizing in Mobile Wheel**: In `FullCircleWheel.tsx`, mobile view (<1024px) uses a 2-column grid (`grid-cols-2`). On 320px viewports with `px-6` (48px padding) and `gap-x-8` (32px gap), column width is only 120px, while `OffshoreFocusIcon` retains a fixed height/width of `112px x 94px`, squeezing text labels.
   - **Excessive Image Asset Sizes**: `oec-logo-D9c6k-2T.webp` is **1.55 MB** and `ship-CEnct7ZA.png` is **1.25 MB** (uncompressed PNG). Total image payload exceeds **3.5 MB**, impairing mobile loading performance.
   - **Fragile Negative-Margin Cropping in Footer**: `Footer.tsx` (line 32) clips the logo from a mega imported Figma layer using `marginTop: -3579, marginLeft: -84`.

---

## 1. Requirement R4: Build Setup & Tooling Findings

### 1.1 `package.json` Inspection
- **File**: `package.json`
- **Current State**:
  ```json
  {
    "name": "@figma/my-make-file",
    "private": true,
    "version": "0.0.1",
    "type": "module",
    "scripts": {
      "build": "vite build",
      "dev": "vite"
    },
    "peerDependencies": {
      "react": "18.3.1",
      "react-dom": "18.3.1"
    }
  }
  ```
- **Issues Identified**:
  1. **Dependencies**: `react` and `react-dom` are absent from `"dependencies"`. They are only in `"peerDependencies"` with `"optional": true`.
  2. **Scripts**: Missing `"preview": "vite preview"`, `"typecheck": "tsc --noEmit"`, and `"lint"`.
  3. **Metadata**: Name field contains default placeholder `"@figma/my-make-file"`.

### 1.2 TypeScript Configuration
- **File**: `tsconfig.json` (MISSING)
- **Current State**: No `tsconfig.json`, `tsconfig.app.json`, or `tsconfig.node.json` exists in project root.
- **Consequences**:
  - `npm run typecheck` (`tsc --noEmit`) cannot be executed.
  - Path alias `@/*` resolution depends solely on `vite.config.ts`, leaving IDEs unable to resolve module paths.
  - Strict type checking rules (`strict: true`, `noImplicitAny`, `jsx: "react-jsx"`) are unconfigured.

### 1.3 Vite & Bundling Setup
- **File**: `vite.config.ts`
- **Current State**:
  - Plugins: `figmaAssetResolver()`, `react()`, `tailwindcss()`.
  - Alias: `@` -> `path.resolve(__dirname, './src')`.
  - Manual Chunks: `vendor: ['react', 'react-dom']`.
- **Bundle Output Analysis (`npm run build`)**:
  - `dist/assets/vendor-BRnhmgIC.js`: 141.63 kB (gzip: 45.44 kB)
  - `dist/assets/index-Dmr_YwAn.js`: 268.16 kB (gzip: 93.81 kB)
  - `dist/assets/DeliveryPage-CCHL5wDM.js`: 122.22 kB (gzip: 47.81 kB)
  - `dist/assets/FullCircleFuelPage-BhIte42o.js`: 16.30 kB
  - `dist/assets/index-66nwuG8R.css`: 124.59 kB (gzip: 22.25 kB)
  - Build completes in ~1.56s without bundler errors.

---

## 2. Requirement R3: Typography Scaling Analysis

### 2.1 Fixed Scale Container Bug on `HomePage`
- **File**: `src/app/App.tsx` (lines 183–200, 244–265)
- **Observation**:
  ```tsx
  const DESIGN_WIDTH = 1280;
  const DESIGN_HEIGHT = 3904;
  const NAVBAR_HEIGHT = 110;
  // ...
  const scale = w / DESIGN_WIDTH;
  inner.style.transform = `scale(${scale})`;
  ```
- **Impact**:
  - On a 320px mobile viewport, `scale = 320 / 1280 = 0.25`.
  - Body text defined as `16px` scales down to `4px`.
  - Small labels (`12px`) scale down to `3px`.
  - Heading font `65px` scales down to `16.25px`.
  - Users on viewports < 768px cannot read content without zooming into the page.

### 2.2 Horizontal Overflow Bug (`whitespace-nowrap`)
- **File**: `src/app/components/CapabilityList.tsx` (line 105)
- **Observation**:
  ```tsx
  <p className="font-sans-brand font-normal text-oec-body text-[17px] lg:text-[16px] tracking-[-0.015em] leading-[1.5] whitespace-nowrap">
    {capability.eyebrow}
  </p>
  ```
- **Impact**:
  - Long strings such as `"When the project runs before the payment does."` or `"When it has to arrive by truck, vessel, or pipeline, anywhere in the world."` do not wrap.
  - On a 320px viewport, the text expands to ~600px width, causing horizontal document overflow.

### 2.3 Fluid Typography Assessment Across Pages

| Page / Component | Element | Current Styling | Issue | Recommendation |
|---|---|---|---|---|
| `Hero.tsx` | Hero Paragraph (line 38) | `text-[26px] leading-[38px] lg:text-[39px] lg:leading-[55px]` | Fixed size 26px on 320px screen occupies 80% screen height | `text-[clamp(1.25rem,4vw,2.4375rem)] leading-[1.35]` |
| `FullCircleWheel.tsx` | Spoke Label (line 33) | `text-[20px] lg:text-[24px]` | Fixed 20px on small mobile grid | `text-[clamp(1rem,3.5vw,1.5rem)]` |
| `FullCircleWheel.tsx` | Mobile Wheel Title (line 85) | `text-[34px] sm:text-[40px]` | Fixed 34px on 320px mobile | `text-[clamp(1.5rem,6vw,2.5rem)]` |
| `CapabilityList.tsx` | Accordion Heading (line 96) | `text-[28px] lg:text-[30px]` | Non-fluid, relies on `br` tags | `text-[clamp(1.375rem,3.5vw,1.875rem)]` |
| `SolutionTracks.tsx` | Main Title (line 229) | `text-4xl md:text-5xl lg:text-6xl font-['Merriweather:Regular',serif]` | Invalid font syntax, large 36px font on 320px screen | `text-[clamp(1.75rem,5vw,3.75rem)] font-serif` |
| `AboutPage.css` | Hero Quote (line 123) | `font-size: 35px;` (768px: `22px`) | Static breakpoint step-down | `font-size: clamp(1.375rem, 4vw, 2.1875rem);` |
| `AboutPage.css` | Story / Apart Headings | `font-size: 32px;` (768px: `22px`) | Static step-down | `font-size: clamp(1.375rem, 3.5vw, 2rem);` |
| `AboutPage.css` | CTA Heading (line 329) | `font-size: 40px;` (768px: `24px`) | Static step-down | `font-size: clamp(1.5rem, 4.5vw, 2.5rem);` |
| `ContactPage.css` | Hero Heading (line 34) | `font-size: 54px;` (900px: `44px`) | Fixed 44px on 320px viewport | `font-size: clamp(2rem, 6vw, 3.375rem);` |
| `ContactPage.css` | Orange Banner text | `font-size: 40px;` (600px: `28px`) | Non-fluid | `font-size: clamp(1.5rem, 5vw, 2.5rem);` |
| `DeliveryPage.css` | Hero & CTA Headings | `clamp(22px, 2.8vw, 36px)` | Slope `2.8vw` too flat between 320px and 768px | `clamp(1.375rem, 1rem + 2.5vw, 2.25rem)` |

---

## 3. Requirement R3: Media & Graphical Frames Analysis

### 3.1 Wheel Graphics & Mobile Grid (`FullCircleWheel.tsx`)
- **Desktop View**: 3-column ring layout (`leftColumn`, center `PetalMark` + title, `rightColumn`).
- **Mobile View (< 1024px)**:
  - 2-column grid (`grid-cols-2 gap-x-8 gap-y-14`).
  - Available width on 320px screen: `320px - 48px (px-6) = 272px`. Each column is `(272 - 32) / 2 = 120px`.
  - Icon sizes: `OffshoreFocusIcon` is fixed at `112px x 94px` (width: 94px).
  - Margin remaining inside 120px cell: `(120 - 94) / 2 = 13px`.
- **Recommendation**:
  - Reduce mobile grid gap on screens < 400px: `gap-x-4 sm:gap-x-8`.
  - Make icon containers responsive using `max-w-full h-auto` or scale down icon sizes on mobile: `w-12 h-12 sm:w-16 sm:h-16 lg:w-[94px] lg:h-[112px]`.

### 3.2 Hero Decorative Rings (`Hero.tsx`)
- **Observation**:
  ```tsx
  <div className="grid grid-cols-3 gap-6 lg:gap-10 translate-x-12 scale-125 lg:scale-150">
  ```
- **Behavior**:
  - `scale-125 translate-x-12` pushes graphics beyond right boundary.
  - Section has `overflow-hidden` so no document scroll occurs, but on 320px screens, the scaled ring graphics visually overlap hero text.
- **Recommendation**: Apply responsive scaling: `scale-90 sm:scale-100 lg:scale-150 translate-x-4 lg:translate-x-12 opacity-15 lg:opacity-20`.

### 3.3 Large Uncompressed Image Assets
- **Asset Audit**:
  - `dist/assets/oec-logo-D9c6k-2T.webp`: **1,553.87 kB** (1.55 MB)
  - `dist/assets/ship-CEnct7ZA.png`: **1,258.74 kB** (1.25 MB)
  - `dist/assets/hero-Bx19FXNq.webp`: **504.85 kB**
- **Impact**: Heavy mobile payload (~3.5 MB total bundle images).
- **Recommendation**:
  - Re-encode `ship.png` to optimized WebP (`q=80`), reducing size from 1.25 MB to ~120 KB.
  - Optimize `oec-logo.webp` (resize/compress from 1.55 MB to <50 KB or vector SVG).

### 3.4 Footer Cropping Mechanism (`Footer.tsx`)
- **Observation**: Line 32 uses `marginTop: -3579, marginLeft: -84` to crop a logo from `<Layer1 />`.
- **Impact**: Extremely fragile. Any change to `Layer1` breaks the logo display.
- **Recommendation**: Replace negative margin wrapper with explicit `<Logo />` SVG component.

---

## 4. Recommended Implementation Plan

### Phase 1: Build Setup & Tooling (Requirement R4)
1. **Create `tsconfig.json`**:
   - Create root `tsconfig.json` and `tsconfig.node.json` with strict type checking, React JSX support, and `@/*` alias mapping.
2. **Update `package.json`**:
   - Move `react` (18.3.1) and `react-dom` (18.3.1) to `"dependencies"`.
   - Add scripts: `"preview": "vite preview"`, `"typecheck": "tsc --noEmit"`.
   - Rename package name to `"oec-build-exact-frame"`.
3. **Fix CSS Utility Syntaxes**:
   - Fix invalid font classes in `SolutionTracks.tsx` (replace `font-['Merriweather:Regular',serif]` with `font-serif`).

### Phase 2: Typography & Layout Scaling (Requirement R3)
1. **Fix `CapabilityList.tsx` `whitespace-nowrap` Bug**:
   - Remove `whitespace-nowrap` from `eyebrow` paragraph on line 105 to allow normal text wrapping on mobile.
2. **Convert Headings to Fluid Typography (`clamp()`)**:
   - Update `Hero.tsx` heading font sizing.
   - Update `FullCircleWheel.tsx` wheel titles and spoke labels.
   - Update `AboutPage.css`, `ContactPage.css`, `DeliveryPage.css` heading rules to use CSS `clamp()`.
3. **Refactor Responsive Layouts**:
   - Replace or adjust mobile scale container in `App.tsx` for `HomePage` so text stays readable (>= 14px body font on 320px screens).

### Phase 3: Media & Asset Optimization (Requirement R3)
1. **Optimize Image Assets**:
   - Compress `public/img/ship.png` / `src/imports/` image assets to target < 150 KB per image.
2. **Refactor Wheel Icons & Hero Graphics**:
   - Add responsive max-width to wheel icons in `FullCircleWheel.tsx` so they fit 120px mobile grid cells cleanly.
   - Adjust `Hero.tsx` `LogoRing` grid transform scale on mobile (`scale-90` on mobile).
3. **Clean Up Footer Logo Rendering**:
   - Replace negative margin offset cropping in `Footer.tsx` with `<Logo />` SVG component.

---
