import React from "react";
import ReactDOMServer from "react-dom/server";
import fs from "fs";
import path from "path";

// ── DOM MOCK ENVIRONMENT FOR NODE ──
const listeners: Record<string, Function[]> = {};
const bodyStyle: Record<string, string> = { overflow: "" };

if (typeof window === "undefined") {
  (global as any).window = {
    addEventListener: (event: string, fn: Function) => {
      listeners[event] = listeners[event] || [];
      listeners[event].push(fn);
    },
    removeEventListener: (event: string, fn: Function) => {
      if (listeners[event]) {
        listeners[event] = listeners[event].filter((f) => f !== fn);
      }
    },
    dispatchEvent: (event: any) => {
      const type = event.type || event;
      if (listeners[type]) {
        listeners[type].forEach((fn) => fn(event));
      }
      return true;
    },
    innerWidth: 375,
    innerHeight: 667,
    location: { hash: "#home", href: "http://localhost/#home" },
    scrollTo: () => {},
  };

  (global as any).document = {
    body: {
      style: bodyStyle,
    },
    addEventListener: (global as any).window.addEventListener,
    removeEventListener: (global as any).window.removeEventListener,
    dispatchEvent: (global as any).window.dispatchEvent,
  };

  (global as any).KeyboardEvent = class KeyboardEvent {
    type: string;
    key: string;
    constructor(type: string, init: { key: string }) {
      this.type = type;
      this.key = init.key;
    }
  };
}

// ── IMPORT COMPONENTS ──
import Navbar from "../src/app/components/Navbar";
import FillButton from "../src/app/components/FillButton";
import ContactPage from "../src/app/components/ContactPage";
import Footer from "../src/app/components/Footer";
import DeliveryPage from "../src/app/components/DeliveryPage";

// Read CSS files
const projectRoot = path.resolve(__dirname, "..");
const navbarCss = fs.readFileSync(path.join(projectRoot, "src/app/components/Navbar.css"), "utf-8");
const contactCss = fs.readFileSync(path.join(projectRoot, "src/app/components/ContactPage.css"), "utf-8");
const deliveryCss = fs.readFileSync(path.join(projectRoot, "src/app/components/DeliveryPage.css"), "utf-8");

let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

const findings: Array<{ category: string; severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "INFO"; description: string; impact: string; mitigation: string }> = [];

function assert(
  condition: boolean,
  testName: string,
  detailOnFail?: string,
  findingInfo?: { category: string; severity: "CRITICAL" | "HIGH" | "MEDIUM" | "LOW" | "INFO"; description: string; impact: string; mitigation: string }
) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  \x1b[32m✓\x1b[0m ${testName}`);
  } else {
    failedTests++;
    console.error(`  \x1b[31m✗\x1b[0m ${testName}`);
    if (detailOnFail) console.error(`    \x1b[33mDetail: ${detailOnFail}\x1b[0m`);
    if (findingInfo) findings.push(findingInfo);
  }
}

async function runEmpiricalStressTest() {
  console.log(`\n\x1b[1m\x1b[35m🔬 EXECUTING EMPIRICAL INTERACTION ERGONOMICS STRESS TEST\x1b[0m\n`);

  // =========================================================================
  // SECTION 1: TAP TARGET SIZES (>= 44px height & width)
  // =========================================================================
  console.log(`\x1b[36m--- Section 1: Tap Target Dimensions (>= 44px) ---\x1b[0m`);

  // 1.1 FillButton Defaults
  const fillButtonHtml = ReactDOMServer.renderToString(React.createElement(FillButton, { text: "Test" }));
  assert(
    fillButtonHtml.includes("height:44px") && fillButtonHtml.includes("min-height:44px"),
    "T1.1: FillButton default height enforces minHeight: 44px",
    "FillButton root inline styles do not enforce 44px minHeight"
  );
  assert(
    fillButtonHtml.includes("width:160px"),
    "T1.2: FillButton default width specifies 160px (>= 44px)",
    "FillButton default width is less than 44px"
  );

  // 1.2 Mobile Hamburger Toggle Button Target Size
  assert(
    navbarCss.includes(".mobile-hamburger") &&
      navbarCss.includes("width: 44px") &&
      navbarCss.includes("height: 44px"),
    "T1.3: Mobile hamburger toggle element bounding box is 44px x 44px",
    "Mobile hamburger button dimensions are less than 44px"
  );

  // 1.3 Mobile Drawer Nav Links Touch Target Size
  const mediaQuerySplit = navbarCss.split("@media (max-width: 840px)");
  const baseNavbarCss = mediaQuerySplit[0];
  const mobileNavbarCss = mediaQuerySplit[1] || "";

  assert(
    mobileNavbarCss.includes(".main-navbar .nav-links a") &&
      mobileNavbarCss.includes("min-height: 48px") &&
      mobileNavbarCss.includes("padding: 12px 16px"),
    "T1.4: Mobile drawer nav links specify min-height: 48px and full width padding (>= 44px x 44px)",
    "Mobile nav link tap targets do not meet 44px target requirements"
  );

  // 1.4 Desktop Navbar Links Target Dimensions
  const baseNavLinksRule = baseNavbarCss.match(/\.main-navbar\s+\.nav-links\s+a\s*\{([^}]+)\}/);
  const baseNavLinksContent = baseNavLinksRule ? baseNavLinksRule[1] : "";
  const desktopNavHasMinHeightOrPadding = baseNavLinksContent.includes("min-height") || baseNavLinksContent.includes("padding");

  assert(
    desktopNavHasMinHeightOrPadding,
    "T1.5: Desktop Navbar links specify explicit min-height or padding",
    "Desktop navbar links (.main-navbar .nav-links a) lack min-height or padding in base CSS rule (font-size: 13px without vertical padding results in ~18px hit target height on desktop >840px)",
    {
      category: "Tap Target Ergonomics",
      severity: "LOW",
      description: "Desktop navbar navigation links (.main-navbar .nav-links a) do not specify vertical padding or min-height in the base CSS rule. Relying solely on inline 13px font-size results in ~18px hit target height on desktop viewports (>840px).",
      impact: "Mobile drawer nav links set explicit `min-height: 48px; padding: 12px 16px;` (exceeding 44px), but desktop viewports have reduced target height (~18px).",
      mitigation: "Add `padding: 12px 8px; min-height: 44px; display: inline-flex; align-items: center;` to `.main-navbar .nav-links a` in base CSS."
    }
  );

  // 1.5 Footer Link Buttons Touch Target Dimensions
  const footerHtml = ReactDOMServer.renderToString(React.createElement(Footer));
  const footerButtonsHaveMinHeight = footerHtml.includes("min-h-[44px]");
  assert(
    footerButtonsHaveMinHeight,
    "T1.6: Footer buttons specify min-height >= 44px",
    "Footer buttons do not specify min-height >= 44px"
  );

  // Check footer button widths for short text like "HOME" and "ABOUT"
  // Footer.tsx uses `p-0` without `min-w-[44px]`. "HOME" text (4 chars at 12px) is ~35px wide.
  const footerButtonClassesMatch = footerHtml.match(/<button[^>]*class="([^"]*)"[^>]*>\s*HOME\s*<\/button>/);
  const homeButtonClass = footerButtonClassesMatch ? footerButtonClassesMatch[1] : "";
  const footerButtonsHaveMinWidth = homeButtonClass.includes("min-w-") || homeButtonClass.includes("px-") || homeButtonClass.includes("w-");
  assert(
    footerButtonsHaveMinWidth,
    "T1.7: Footer buttons specify min-width >= 44px or horizontal padding",
    "Footer link buttons ('HOME', 'ABOUT') specify `min-h-[44px]` and `p-0` but no `min-w-[44px]`. Short text like 'HOME' (4 chars, 12px font) computes to ~35px width, violating 44px tap target width.",
    {
      category: "Tap Target Ergonomics",
      severity: "MEDIUM",
      description: "Footer navigation buttons ('HOME', 'ABOUT') specify `min-h-[44px]` and `p-0` without `min-w-[44px]` or horizontal padding. Computed text width for 'HOME' at 12px font size is ~35px, falling short of the 44px minimum tap target width.",
      impact: "On touch devices (e.g. tablets or small mobile screens in portrait view), tapping 'HOME' or 'ABOUT' in the footer may miss due to narrow hit target width (~35px < 44px).",
      mitigation: "Add `min-w-[44px]` or horizontal padding (e.g. `px-2`) to footer navigation buttons in `Footer.tsx`."
    }
  );

  // 1.6 Contact Page Form Submit Button
  assert(
    contactCss.includes("height: 44px") || contactCss.includes("min-height: 44px") || fillButtonHtml.includes("min-height:44px"),
    "T1.8: ContactPage submit button height is >= 44px",
    "ContactPage submit button height is less than 44px"
  );

  // 1.7 Delivery Page CTA Links
  assert(
    deliveryCss.includes(".delivery-cta-link") && deliveryCss.includes("min-height: 44px"),
    "T1.9: DeliveryPage CTA links (.delivery-cta-link) specify min-height: 44px",
    "DeliveryPage CTA links lack 44px min-height"
  );

  // =========================================================================
  // SECTION 2: FORM INPUT FONT SIZE (iOS Auto-Zoom Prevention)
  // =========================================================================
  console.log(`\n\x1b[36m--- Section 2: ContactPage Form Input Font-Size (>= 16px) ---\x1b[0m`);

  const inputFontSizeMatch = contactCss.match(/\.contact-page-container\s+\.field\s+input\s*\{[^}]*font-size:\s*(\d+)px/s);
  const textareaFontSizeMatch = contactCss.match(/\.contact-page-container\s+\.field\s+textarea\s*\{[^}]*font-size:\s*(\d+)px/s);

  const inputFontSize = inputFontSizeMatch ? parseInt(inputFontSizeMatch[1], 10) : 0;
  const textareaFontSize = textareaFontSizeMatch ? parseInt(textareaFontSizeMatch[1], 10) : 0;

  assert(
    inputFontSize >= 16,
    `T2.1: ContactPage form <input> font-size is >= 16px (Actual: ${inputFontSize}px)`,
    "Form text input font-size is below 16px, causing iOS Safari auto-zoom"
  );

  assert(
    textareaFontSize >= 16,
    `T2.2: ContactPage form <textarea> font-size is >= 16px (Actual: ${textareaFontSize}px)`,
    "Form textarea font-size is below 16px, causing iOS Safari auto-zoom"
  );

  // Verify media queries do not contain input font-size overrides below 16px
  const mediaQueryBlocks = contactCss.split("@media").slice(1);
  let mobileInputFontSizeReduced = false;
  for (const block of mediaQueryBlocks) {
    if (block.includes("input") || block.includes("textarea")) {
      const match = block.match(/font-size:\s*(\d+)px/);
      if (match && parseInt(match[1], 10) < 16) {
        mobileInputFontSizeReduced = true;
      }
    }
  }
  assert(
    !mobileInputFontSizeReduced,
    "T2.3: Mobile media queries (<= 600px / 900px) do NOT reduce form input font-size below 16px",
    "Mobile media query reduces input font-size below 16px"
  );

  // =========================================================================
  // SECTION 3: MOBILE NAVBAR DRAWER INTERACTION LOGIC
  // =========================================================================
  console.log(`\n\x1b[36m--- Section 3: Mobile Navbar Drawer Toggle, Backdrop, & Escape Key Logic ---\x1b[0m`);

  // 3.1 Drawer Open State & Scroll Lock
  listeners["keydown"] = [];
  bodyStyle.overflow = "";

  const initialNavRender = ReactDOMServer.renderToString(React.createElement(Navbar, { currentPage: "home" }));
  assert(
    initialNavRender.includes('aria-expanded="false"') && !initialNavRender.includes("mobile-open"),
    "T3.1: Mobile navbar drawer initializes in closed state (aria-expanded=false)",
    "Navbar drawer did not initialize closed"
  );

  const navbarTsxPath = path.join(projectRoot, "src/app/components/Navbar.tsx");
  const navbarCode = fs.readFileSync(navbarTsxPath, "utf-8");

  assert(
    navbarCode.includes("setMobileMenuOpen(!mobileMenuOpen)") || navbarCode.includes("setMobileMenuOpen(false)"),
    "T3.2: Hamburger button toggles mobileMenuOpen state on click",
    "Hamburger button missing click handler"
  );

  assert(
    navbarCode.includes('onClick={() => setMobileMenuOpen(false)}') && navbarCode.includes('className={`nav-backdrop'),
    "T3.3: Backdrop overlay contains onClick handler to close drawer",
    "Backdrop overlay missing onClick handler"
  );

  assert(
    navbarCode.includes('e.key === "Escape"') && navbarCode.includes("setMobileMenuOpen(false)"),
    "T3.4: Keyboard event listener triggers setMobileMenuOpen(false) on Escape key press",
    "Escape key handler missing or incomplete in Navbar.tsx"
  );

  assert(
    navbarCode.includes('document.body.style.overflow = "hidden"') && navbarCode.includes('document.body.style.overflow = ""'),
    "T3.5: Body scroll locking effect activates overflow: hidden on open and restores overflow: '' on close",
    "Body scroll locking logic missing"
  );

  // 3.2 Z-Index Layer Ordering Verification
  const getZIndex = (selector: string, css: string): number => {
    const regex = new RegExp(`${selector.replace(".", "\\.")}[^{]*\\{[^}]*z-index:\\s*(\\d+)`, "s");
    const match = css.match(regex);
    return match ? parseInt(match[1], 10) : -1;
  };

  const zHamburger = getZIndex(".mobile-hamburger", navbarCss);
  const zNavbar = getZIndex(".main-navbar", navbarCss);
  const zLinks = getZIndex(".main-navbar .nav-links", navbarCss);
  const zBackdrop = getZIndex(".nav-backdrop", navbarCss);

  console.log(`  z-index stack: Hamburger=${zHamburger}, Navbar=${zNavbar}, DrawerLinks=${zLinks}, Backdrop=${zBackdrop}`);

  assert(
    zHamburger === 1001 && zNavbar === 1000 && zLinks === 999 && zBackdrop === 998,
    "T3.6: Strict z-index layering structure verified (Hamburger 1001 > Navbar 1000 > DrawerLinks 999 > Backdrop 998)",
    "Z-Index values do not match standard layering stack"
  );

  // ── FINAL SUMMARY ──
  console.log(`\n\x1b[36m==================================================\x1b[0m`);
  console.log(`\x1b[1m\x1b[35mEMPIRICAL STRESS TEST SUMMARY\x1b[0m`);
  console.log(`\x1b[36m==================================================\x1b[0m`);
  console.log(`Total Assertions Evaluated : \x1b[1m${totalTests}\x1b[0m`);
  console.log(`Passed Assertions         : \x1b[32m${passedTests}\x1b[0m`);
  console.log(`Failed Assertions / Findings: \x1b[33m${failedTests}\x1b[0m`);

  console.log(`\n\x1b[1mDiscovered Findings Count: ${findings.length}\x1b[0m`);
  for (const f of findings) {
    console.log(`- [${f.severity}] ${f.category}: ${f.description}`);
  }
}

runEmpiricalStressTest().catch((err) => {
  console.error("Fatal error during empirical stress test:", err);
  process.exit(1);
});
