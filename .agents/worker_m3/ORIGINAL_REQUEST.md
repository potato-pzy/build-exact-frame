## 2026-08-06T10:10:55Z

<USER_REQUEST>
You are Worker 3 (worker_m3) executing Milestone 3 (Media, Graphical Frames & Typography Scaling - Requirement R3) for Build Exact Frame.

Working Directory: /home/potato/Documents/unwanted/collabo/Build Exact Frame/.agents/worker_m3
Project Root: /home/potato/Documents/unwanted/collabo/Build Exact Frame

Read reference handoff:
- `/home/potato/Documents/unwanted/collabo/Build Exact Frame/.agents/explorer_m1_3/handoff.md`

Your tasks:
1. **Fluid Typography (`clamp()`) Implementation Across Components & CSS (R3)**:
   - In `src/app/components/Hero.tsx`: update paragraph typography to `text-[clamp(1.25rem,4vw,2.4375rem)] leading-[1.35]`.
   - In `src/app/components/FullCircleWheel.tsx`: update spoke label font size to `text-[clamp(1rem,3.5vw,1.5rem)]` and mobile wheel title to `text-[clamp(1.5rem,6vw,2.5rem)]`.
   - In `src/app/components/CapabilityList.tsx`: update accordion headings to `text-[clamp(1.375rem,3.5vw,1.875rem)]`.
   - In `src/app/components/SolutionTracks.tsx`: fix invalid font class `font-['Merriweather:Regular',serif]` by replacing with `font-serif`, and set main title to `text-[clamp(1.75rem,5vw,3.75rem)]`.
   - In `src/app/components/AboutPage.css`: update static breakpoint heading rules (`35px->22px`, `32px->22px`, `40px->24px`) to fluid CSS `clamp()` rules (`font-size: clamp(1.375rem, 4vw, 2.1875rem);`, etc.).
   - In `src/app/components/ContactPage.css`: update hero heading (`54px->44px`) and orange banner text (`40px->28px`) to fluid CSS `clamp()` rules (`clamp(2rem, 6vw, 3.375rem)` and `clamp(1.5rem, 5vw, 2.5rem)`).
   - In `src/app/components/DeliveryPage.css`: update static clamp slope (`2.8vw`) on hero & CTA headings to fluid `clamp(1.375rem, 1rem + 2.5vw, 2.25rem)`.

2. **Mobile Graphical Wheel & Icon Scaling (R3)**:
   - In `src/app/components/FullCircleWheel.tsx`: under mobile view (`lg:hidden`), adjust grid gap for screens < 400px (`gap-x-4 sm:gap-x-8 gap-y-8 sm:gap-y-14`).
   - Make `OffshoreFocusIcon` and wheel icons responsive with max-width / width scaling (`w-12 h-12 sm:w-16 sm:h-16 lg:w-[94px] lg:h-[112px]` or `max-w-full h-auto`) so they fit within 120px mobile grid cells without squeezing text labels.

3. **Hero Decorative Rings Scaling (R3)**:
   - In `src/app/components/Hero.tsx` (line 44): replace fixed translate/scale `scale-125 lg:scale-150 translate-x-12` with responsive scaling for mobile: `scale-90 sm:scale-100 lg:scale-150 translate-x-4 lg:translate-x-12 opacity-15 lg:opacity-20` so ring graphics scale down gracefully on mobile screens without overlapping text or causing horizontal overflow.

4. **Footer Logo Rendering Clean Up (R3)**:
   - In `src/app/components/Footer.tsx` (line 32): remove fragile negative margin crop hack (`marginTop: -3579, marginLeft: -84`). Replace with clean `<Layer />` or direct logo rendering component.

5. **Build & Typecheck Verification**:
   - Run `npm run typecheck` and `npm run build`.
   - Ensure both pass cleanly with zero errors.
   - Write full details, exact file modifications, and command outputs to `/home/potato/Documents/unwanted/collabo/Build Exact Frame/.agents/worker_m3/handoff.md`.
   - Send completion message to orchestrator via `send_message`.

MANDATORY INTEGRITY WARNING: DO NOT CHEAT. All implementations must be genuine. DO NOT hardcode test results, create dummy/facade implementations, or circumvent the intended task. A Forensic Auditor will independently verify your work. Integrity violations WILL be detected and your work WILL be rejected.
</USER_REQUEST>
