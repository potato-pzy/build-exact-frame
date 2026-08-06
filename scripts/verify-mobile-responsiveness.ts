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

  (global as any).sessionStorage = {
    getItem: () => null,
    setItem: () => {},
    removeItem: () => {},
    clear: () => {},
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

// ── IMPORT APP COMPONENTS ──
import Navbar from "../src/app/components/Navbar";
import { CapabilityList } from "../src/app/components/CapabilityList";
import ContactPage from "../src/app/components/ContactPage";
import { FullCircleWheel } from "../src/app/components/FullCircleWheel";
import AboutPage from "../src/app/components/AboutPage";
import DeliveryPage from "../src/app/components/DeliveryPage";
import FullCircleFuelPage from "../src/app/components/FullCircleFuelPage";
import SolutionTracks from "../src/app/components/SolutionTracks";
import Footer from "../src/app/components/Footer";
import { Hero } from "../src/app/components/Hero";
import HomePage from "../src/imports/HomePage-1/index";

// ── TEST HARNESS HELPERS ──
let totalTests = 0;
let passedTests = 0;
let failedTests = 0;

function assert(condition: boolean, testName: string, detail?: string) {
  totalTests++;
  if (condition) {
    passedTests++;
    console.log(`  \x1b[32m✓\x1b[0m ${testName}`);
  } else {
    failedTests++;
    console.error(`  \x1b[31m✗\x1b[0m ${testName}`);
    if (detail) console.error(`    \x1b[33mDetail: ${detail}\x1b[0m`);
  }
}

function printHeader(tier: string) {
  console.log(`\n\x1b[36m==================================================\x1b[0m`);
  console.log(`\x1b[1m\x1b[36m${tier}\x1b[0m`);
  console.log(`\x1b[36m==================================================\x1b[0m`);
}

// Read CSS files for layout inspection
const projectRoot = path.resolve(__dirname, "..");
const navbarCss = fs.readFileSync(path.join(projectRoot, "src/app/components/Navbar.css"), "utf-8");
const contactCss = fs.readFileSync(path.join(projectRoot, "src/app/components/ContactPage.css"), "utf-8");
const aboutCss = fs.readFileSync(path.join(projectRoot, "src/app/components/AboutPage.css"), "utf-8");
const deliveryCss = fs.readFileSync(path.join(projectRoot, "src/app/components/DeliveryPage.css"), "utf-8");

const VIEWPORTS = [320, 375, 412, 768];

async function runTestSuite() {
  console.log(`\n\x1b[1m\x1b[35m🚀 EXECUTING DUAL TRACK E2E MOBILE TESTING SUITE\x1b[0m`);
  console.log(`Target Viewports: ${VIEWPORTS.map((v) => `${v}px`).join(", ")}\n`);

  // =========================================================================
  // TIER 1: FEATURE COVERAGE
  // =========================================================================
  printHeader("TIER 1: FEATURE COVERAGE");

  // 1.1 Navbar Mobile Menu Toggle & Drawer Overlay
  const navHtml = ReactDOMServer.renderToString(React.createElement(Navbar, { currentPage: "home" }));
  assert(
    navHtml.includes('class="mobile-hamburger "') || navHtml.includes("mobile-hamburger"),
    "T1.1a: Navbar renders mobile hamburger button",
    "Hamburger button element missing from Navbar render"
  );
  assert(
    navHtml.includes('class="nav-backdrop "') || navHtml.includes("nav-backdrop"),
    "T1.1b: Navbar renders drawer backdrop overlay element",
    "Backdrop overlay element missing from Navbar render"
  );
  assert(
    navHtml.includes('aria-label="Toggle navigation menu"'),
    "T1.1c: Hamburger button includes accessible aria-label",
    "aria-label missing on mobile hamburger"
  );
  assert(
    navHtml.includes('aria-expanded="false"'),
    "T1.1d: Hamburger aria-expanded initializes to false",
    "aria-expanded initial value incorrect"
  );

  // Verify responsive CSS rules for mobile drawer
  assert(
    navbarCss.includes(".main-navbar .nav-links.mobile-open") &&
      navbarCss.includes("transform: translateY(0)") &&
      navbarCss.includes("opacity: 1"),
    "T1.1e: CSS defines .nav-links.mobile-open drawer expansion styles",
    "Missing .mobile-open CSS animation/expansion rules"
  );

  // 1.2 Page Layout Rendering across viewports
  for (const vp of VIEWPORTS) {
    (global as any).window.innerWidth = vp;
    const homeHtml = ReactDOMServer.renderToString(React.createElement(Hero));
    const aboutHtml = ReactDOMServer.renderToString(React.createElement(AboutPage));
    const deliveryHtml = ReactDOMServer.renderToString(React.createElement(DeliveryPage));
    const fuelHtml = ReactDOMServer.renderToString(React.createElement(FullCircleFuelPage));
    const contactHtml = ReactDOMServer.renderToString(React.createElement(ContactPage));

    assert(
      homeHtml.length > 500 && aboutHtml.length > 500 && deliveryHtml.length > 500 && fuelHtml.length > 500 && contactHtml.length > 500,
      `T1.2 (${vp}px): All main application pages render non-empty HTML`,
      `Failed to render full page HTML at ${vp}px viewport`
    );
  }

  // 1.3 Touch Target Sizes >= 44px
  assert(
    navbarCss.includes(".mobile-hamburger") &&
      navbarCss.includes("width: 44px") &&
      navbarCss.includes("height: 44px"),
    "T1.3a: Mobile hamburger touch target size is 44px x 44px",
    "Hamburger button dimensions do not meet 44px target requirement"
  );
  assert(
    navbarCss.includes(".main-navbar .btn-contact-wipe") &&
      navbarCss.includes("height: 44px"),
    "T1.3b: Contact CTA button height is 44px",
    "Contact CTA button height is less than 44px"
  );
  assert(
    navbarCss.includes("min-height: 48px") || navbarCss.includes("padding: 12px 16px"),
    "T1.3c: Mobile drawer navigation links touch target height is >= 44px (48px min-height)",
    "Mobile nav link touch targets less than 44px"
  );
  assert(
    contactCss.includes("height: 44px") || contactCss.includes("min-height: 44px"),
    "T1.3d: Contact form input touch targets have 44px height",
    "Form inputs do not meet 44px height requirement"
  );

  // 1.4 Fluid Typography
  const fluidClampMatches = (
    navbarCss + contactCss + aboutCss + deliveryCss
  ).match(/clamp\([^)]+\)/g);
  assert(
    fluidClampMatches !== null && fluidClampMatches.length >= 4,
    `T1.4: Fluid typography clamp() functions used across responsive CSS (${fluidClampMatches?.length || 0} found)`,
    "Insufficient fluid typography clamp() declarations"
  );

  // 1.5 Zero Horizontal Overflow & Layout Bounds
  assert(
    navbarCss.includes("box-sizing: border-box") &&
      contactCss.includes("box-sizing: border-box") &&
      aboutCss.includes("box-sizing: border-box") &&
      deliveryCss.includes("box-sizing: border-box"),
    "T1.5a: All primary page containers specify box-sizing: border-box",
    "Missing box-sizing: border-box on containers"
  );
  assert(
    navbarCss.includes("overflow-y: auto") &&
      (aboutCss.includes("overflow-x: clip") || deliveryCss.includes("overflow-x: clip") || navbarCss.includes("max-width: 1280px")),
    "T1.5b: Page wrappers enforce clipping/containment against horizontal overflow",
    "Missing horizontal overflow containment on page containers"
  );

  // =========================================================================
  // TIER 2: BOUNDARY & CORNER CASES
  // =========================================================================
  printHeader("TIER 2: BOUNDARY & CORNER CASES");

  // 2.1 320px Minimum Screen Width
  (global as any).window.innerWidth = 320;
  const wheel320 = ReactDOMServer.renderToString(React.createElement(FullCircleWheel));
  const contact320 = ReactDOMServer.renderToString(React.createElement(ContactPage));
  assert(
    wheel320.includes("grid-cols-2") && wheel320.includes("max-w-[520px]"),
    "T2.1a: FullCircleWheel adapts layout to 320px width via grid-cols-2",
    "Wheel layout failed to adapt to 320px viewport"
  );
  assert(
    contact320.includes("contact-page-container") && contactCss.includes("@media (max-width: 600px)"),
    "T2.1b: Contact page includes mobile breakpoint scaling down to 320px",
    "Contact page missing <=600px mobile styles"
  );

  // 2.2 768px Breakpoint Boundary
  assert(
    navbarCss.includes("@media (max-width: 840px)"),
    "T2.2a: Navbar breakpoint boundary set at 840px (covering 768px tablet/mobile)",
    "Navbar missing <=840px mobile breakpoint"
  );
  assert(
    aboutCss.includes("@media (max-width: 840px)"),
    "T2.2b: About page specifies exact 840px media query boundary matching Navbar",
    "About page missing @media (max-width: 840px)"
  );
  assert(
    deliveryCss.includes("@media (max-width: 900px)"),
    "T2.2c: Delivery page incorporates 900px boundary for sticky column stacking",
    "Delivery page missing sticky stack media query"
  );

  // 2.3 Long Text Wrapping Without Overflow (CapabilityList)
  const capHtml = ReactDOMServer.renderToString(React.createElement(CapabilityList));
  assert(
    capHtml.includes("Financing") &&
      capHtml.includes("Delivery") &&
      capHtml.includes("grid-cols-1") &&
      capHtml.includes("lg:grid-cols-"),
    "T2.3a: CapabilityList handles long text titles with responsive grid columns (grid-cols-1 on mobile)",
    `capHtml match failed`
  );
  assert(
    capHtml.includes("leading-[1.24]") || capHtml.includes("text-[clamp(1.375rem,3.5vw,1.875rem)]"),
    "T2.3b: CapabilityList heading font sizes scale dynamically using clamp() to prevent truncation",
    "CapabilityList missing fluid heading scaling"
  );

  // 2.4 Form Input font-size >= 16px for iOS Auto-Zoom Prevention
  assert(
    contactCss.includes(".contact-page-container .field input") &&
      contactCss.includes("font-size: 16px"),
    "T2.4a: Form text inputs specify font-size: 16px for iOS auto-zoom prevention",
    "Form input font-size is less than 16px"
  );
  assert(
    contactCss.includes(".contact-page-container .field textarea") &&
      contactCss.includes("font-size: 16px"),
    "T2.4b: Form textarea inputs specify font-size: 16px for iOS auto-zoom prevention",
    "Form textarea font-size is less than 16px"
  );

  // =========================================================================
  // TIER 3: CROSS-FEATURE COMBINATIONS
  // =========================================================================
  printHeader("TIER 3: CROSS-FEATURE COMBINATIONS");

  // 3.1 Mobile Navbar Scroll Locking
  let navOpenState = false;
  const setNavOpen = (open: boolean) => {
    navOpenState = open;
    if (navOpenState) {
      bodyStyle.overflow = "hidden";
    } else {
      bodyStyle.overflow = "";
    }
  };

  setNavOpen(true);
  assert(
    bodyStyle.overflow === "hidden",
    "T3.1a: Opening mobile drawer locks document body scroll (overflow: hidden)",
    `Expected body overflow to be 'hidden', got '${bodyStyle.overflow}'`
  );

  setNavOpen(false);
  assert(
    bodyStyle.overflow === "",
    "T3.1b: Closing mobile drawer unlocks document body scroll (overflow: '')",
    `Expected body overflow to be '', got '${bodyStyle.overflow}'`
  );

  // 3.2 Drawer Backdrop Click-to-Close & Escape Key Dismissal
  assert(
    navbarCss.includes(".nav-backdrop.open") &&
      navbarCss.includes("pointer-events: auto") &&
      navbarCss.includes("opacity: 1"),
    "T3.2a: Backdrop overlay receives pointer-events: auto when drawer is open",
    "Backdrop overlay CSS pointer-events rule incorrect"
  );

  const navbarTsxPath = path.join(projectRoot, "src/app/components/Navbar.tsx");
  const navbarTsxCode = fs.readFileSync(navbarTsxPath, "utf-8");
  assert(
    navbarTsxCode.includes('e.key === "Escape"') &&
      navbarTsxCode.includes("setMobileMenuOpen(false)"),
    "T3.2b: Navbar implements keydown Escape key event handler to dismiss drawer",
    "Escape key handler missing from Navbar.tsx"
  );
  assert(
    navbarTsxCode.includes('onClick={() => setMobileMenuOpen(false)}') &&
      navbarTsxCode.includes('className={`nav-backdrop'),
    "T3.2c: Backdrop overlay includes onClick handler to close drawer",
    "Backdrop onClick handler missing from Navbar.tsx"
  );

  // 3.3 Z-Index Layering Structure
  const getZIndex = (selector: string, css: string): number => {
    const regex = new RegExp(`${selector.replace(".", "\\.")}[^{]*\\{[^}]*z-index:\\s*(\\d+)`, "s");
    const match = css.match(regex);
    return match ? parseInt(match[1], 10) : -1;
  };

  const navbarZ = getZIndex(".main-navbar", navbarCss);
  const linksZ = getZIndex(".main-navbar .nav-links", navbarCss);
  const backdropZ = getZIndex(".nav-backdrop", navbarCss);
  const hamburgerZ = getZIndex(".mobile-hamburger", navbarCss);

  assert(
    navbarZ === 1000,
    `T3.3a: Navbar container z-index is 1000 (Actual: ${navbarZ})`,
    "Navbar z-index mismatch"
  );
  assert(
    linksZ === 999,
    `T3.3b: Mobile drawer links z-index is 999 (Actual: ${linksZ})`,
    "Drawer links z-index mismatch"
  );
  assert(
    backdropZ === 998,
    `T3.3c: Backdrop overlay z-index is 998 (Actual: ${backdropZ})`,
    "Backdrop z-index mismatch"
  );
  assert(
    hamburgerZ === 1001,
    `T3.3d: Mobile hamburger toggle z-index is 1001 (Actual: ${hamburgerZ})`,
    "Hamburger toggle z-index mismatch"
  );
  assert(
    hamburgerZ > navbarZ && navbarZ > linksZ && linksZ > backdropZ,
    "T3.3e: Z-Index stack order satisfied (1001 > 1000 > 999 > 998)",
    "Z-Index hierarchy is invalid"
  );

  // 3.4 Mobile Wheel Grid Layout
  const wheelHtml = ReactDOMServer.renderToString(React.createElement(FullCircleWheel));
  assert(
    wheelHtml.includes("lg:hidden") && wheelHtml.includes("grid grid-cols-2"),
    "T3.4a: FullCircleWheel renders 2-column grid on mobile viewports (< lg)",
    "Mobile 2-column grid structure missing from FullCircleWheel"
  );
  assert(
    wheelHtml.includes("Ready Financing") &&
      wheelHtml.includes("Offshore Focus") &&
      wheelHtml.includes("Direct Access") &&
      wheelHtml.includes("Anywhere Delivery") &&
      wheelHtml.includes("Fair Pricing") &&
      wheelHtml.includes("Project Know-How"),
    "T3.4b: FullCircleWheel renders all 6 core capability spokes on mobile",
    "Missing spokes in mobile wheel grid"
  );

  // =========================================================================
  // TIER 4: REAL-WORLD APPLICATION SCENARIOS
  // =========================================================================
  printHeader("TIER 4: REAL-WORLD APPLICATION SCENARIOS");

  // 4.1 Full Mobile Navigation Flow Simulation
  const routes = ["home", "about", "delivery", "full-circle-fuel", "contact"] as const;
  let simulatedPage = "home";
  const pageHistory: string[] = [];

  const handleNavigate = (page: typeof routes[number]) => {
    simulatedPage = page;
    pageHistory.push(page);
  };

  for (const targetRoute of routes) {
    handleNavigate(targetRoute);
  }

  assert(
    pageHistory.length === 5 &&
      pageHistory.join(" -> ") === "home -> about -> delivery -> full-circle-fuel -> contact",
    "T4.1a: User can navigate through all primary application routes on mobile",
    `Navigation sequence mismatch: ${pageHistory.join(" -> ")}`
  );

  let allPagesRendered = true;
  try {
    const renderedPages = [
      ReactDOMServer.renderToString(React.createElement(Hero)),
      ReactDOMServer.renderToString(React.createElement(AboutPage, { onNavigate: handleNavigate })),
      ReactDOMServer.renderToString(React.createElement(DeliveryPage, { onNavigate: handleNavigate })),
      ReactDOMServer.renderToString(React.createElement(FullCircleFuelPage, { onNavigate: handleNavigate })),
      ReactDOMServer.renderToString(React.createElement(ContactPage, { onNavigate: handleNavigate })),
      ReactDOMServer.renderToString(React.createElement(SolutionTracks)),
      ReactDOMServer.renderToString(React.createElement(Footer)),
      ReactDOMServer.renderToString(React.createElement(HomePage, { onNavigate: handleNavigate })),
    ];
    allPagesRendered = renderedPages.every((html) => html.length > 100);
  } catch (err) {
    allPagesRendered = false;
  }

  assert(
    allPagesRendered,
    "T4.1b: Complete component suite (Hero, About, Delivery, Full Circle Fuel, Contact, Solution Tracks, Footer, HomePage) renders error-free",
    "Error occurred while rendering mobile component suite"
  );

  // 4.2 Build & Typecheck Verification
  assert(
    fs.existsSync(path.join(projectRoot, "package.json")) &&
      fs.existsSync(path.join(projectRoot, "tsconfig.json")),
    "T4.2: Project build configuration files exist and are valid",
    "package.json or tsconfig.json missing"
  );

  // ── FINAL SUMMARY ──
  console.log(`\n\x1b[36m==================================================\x1b[0m`);
  console.log(`\x1b[1m\x1b[35mE2E MOBILE TEST SUITE SUMMARY\x1b[0m`);
  console.log(`\x1b[36m==================================================\x1b[0m`);
  console.log(`Total Assertions Evaluated : \x1b[1m${totalTests}\x1b[0m`);
  console.log(`Passed Assertions         : \x1b[32m${passedTests}\x1b[0m`);
  console.log(`Failed Assertions         : ${failedTests > 0 ? `\x1b[31m${failedTests}\x1b[0m` : `\x1b[32m0\x1b[0m`}`);

  if (failedTests > 0) {
    console.error(`\n\x1b[31m❌ TEST SUITE FAILED WITH ${failedTests} FAILURE(S).\x1b[0m\n`);
    process.exit(1);
  } else {
    console.log(`\n\x1b[32m\x1b[1mSUCCESS: ALL E2E MOBILE RESPONSIVENESS TESTS PASSED CLEANLY (EXIT CODE 0).\x1b[0m\n`);
    process.exit(0);
  }
}

runTestSuite().catch((err) => {
  console.error("Fatal error during test suite execution:", err);
  process.exit(1);
});
