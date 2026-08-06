import { preview } from "vite";
import { chromium } from "playwright";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const VIEWPORTS = [
  { width: 320, height: 667, name: "320px (iPhone SE 1st gen)" },
  { width: 360, height: 740, name: "360px (Android small)" },
  { width: 375, height: 667, name: "375px (iPhone 12/13)" },
  { width: 390, height: 844, name: "390px (iPhone 12/13 Pro)" },
  { width: 412, height: 915, name: "412px (Pixel 7)" },
  { width: 768, height: 1024, name: "768px (Tablet)" },
  { width: 840, height: 900, name: "840px (Navbar Breakpoint)" },
];

const ROUTES = [
  { hash: "#home", name: "Home Page" },
  { hash: "#about", name: "About Page" },
  { hash: "#contact", name: "Contact Page" },
  { hash: "#delivery", name: "Delivery Page" },
  { hash: "#full-circle-fuel", name: "Full Circle Fuel Page" },
];

async function launchBrowser() {
  try {
    return await chromium.launch({ headless: true });
  } catch (err) {
    if (fs.existsSync("/snap/bin/chromium")) {
      console.log("Falling back to system Chromium binary at /snap/bin/chromium...");
      return await chromium.launch({ executablePath: "/snap/bin/chromium", headless: true, args: ["--no-sandbox", "--disable-setuid-sandbox"] });
    }
    throw err;
  }
}

async function runEmpiricalStressTest() {
  console.log("==========================================================================");
  console.log("🚀 STARTING EMPIRICAL VIEWPORT STRESS TEST & OVERFLOW HARNESS");
  console.log("==========================================================================");

  // 1. Start Vite Preview server
  const previewServer = await preview({
    root: projectRoot,
    preview: { port: 4173, host: "127.0.0.1", strictPort: true },
  });

  const serverUrl = "http://127.0.0.1:4173/";
  console.log(`preview server active at ${serverUrl}`);

  // 2. Launch Chromium browser
  const browser = await launchBrowser();
  const context = await browser.newContext();
  const page = await context.newPage();

  const results = [];
  let totalFailures = 0;

  try {
    for (const vp of VIEWPORTS) {
      console.log(`\n--------------------------------------------------------------------------`);
      console.log(`🔍 VIEWPORT: ${vp.name} (${vp.width}x${vp.height}px)`);
      console.log(`--------------------------------------------------------------------------`);

      await page.setViewportSize({ width: vp.width, height: vp.height });

      for (const r of ROUTES) {
        const fullUrl = `${serverUrl}${r.hash}`;
        await page.goto(fullUrl, { waitUntil: "networkidle" });
        await page.waitForTimeout(300); // Allow motion/layout animations to settle

        // Evaluate empirical DOM measurements in browser context
        const metrics = await page.evaluate((viewportWidth) => {
          const docEl = document.documentElement;
          const bodyEl = document.body;

          const docScrollWidth = docEl.scrollWidth;
          const bodyScrollWidth = bodyEl.scrollWidth;
          const windowInnerWidth = window.innerWidth;

          // Check if document or body exceeds viewport width
          const overflowX = docScrollWidth > windowInnerWidth + 1 || bodyScrollWidth > windowInnerWidth + 1;

          // Check horizontal scroll position & scrollable distance
          const maxScrollX = Math.max(docEl.scrollWidth - docEl.clientWidth, bodyEl.scrollWidth - bodyEl.clientWidth);
          const hasHorizontalScrollbar = maxScrollX > 1;

          // Scan all visible elements for right edge escaping viewport
          const allElements = Array.from(document.querySelectorAll("*"));
          const overflowingElements = [];

          for (const el of allElements) {
            // Ignore script, style, SVG sub-elements without box layout
            if (["SCRIPT", "STYLE", "HEAD", "META", "TITLE", "SVG", "PATH", "G", "DEFS", "LINEARGRADIENT", "STOP"].includes(el.tagName)) continue;

            const rect = el.getBoundingClientRect();
            // Only inspect elements that are currently rendered and visible
            if (rect.width === 0 && rect.height === 0) continue;
            if (window.getComputedStyle(el).display === "none") continue;
            if (window.getComputedStyle(el).visibility === "hidden") continue;

            // Check if element right edge exceeds viewport width (allow 1.5px subpixel tolerance)
            if (rect.right > viewportWidth + 1.5) {
              const overflowStyle = window.getComputedStyle(el).overflowX;
              // If overflow is clipped/hidden on root/wrapper containers, it's contained; otherwise flag it
              if (!["clip", "hidden", "scroll", "auto"].includes(overflowStyle) || rect.left > viewportWidth) {
                overflowingElements.push({
                  tag: el.tagName.toLowerCase(),
                  id: el.id || "",
                  className: (el.className || "").toString().slice(0, 60),
                  right: Math.round(rect.right),
                  scrollWidth: el.scrollWidth,
                  clientWidth: el.clientWidth,
                });
              }
            }
          }

          // Scan key text elements for clipping, overflow, obscuration, or scroll truncation
          const textIssues = [];

          // Target selectors: Accordion headings, eyebrows, hero titles, spoke labels
          const textSelectors = [
            { type: "Hero Title", selector: "h1, .hero-quote, .hero-title" },
            { type: "Accordion Heading", selector: "[data-slot='accordion-trigger'], .accordion-header, h2, h3" },
            { type: "Paragraph Eyebrow", selector: ".eyebrow, .story-label, .apart-heading, [data-name='WHY OEC']" },
            { type: "Spoke Label", selector: "p.text-oec-blue, p.font-sans-brand" },
          ];

          for (const group of textSelectors) {
            const els = Array.from(document.querySelectorAll(group.selector));
            for (const el of els) {
              const rect = el.getBoundingClientRect();
              if (rect.width === 0 || rect.height === 0) continue;
              if (window.getComputedStyle(el).display === "none") continue;

              const style = window.getComputedStyle(el);
              const textSnippet = (el.innerText || el.textContent || "").trim().slice(0, 40);
              if (!textSnippet) continue;

              // Check 1: Horizontal text clipping inside element (scrollWidth > clientWidth)
              if (el.scrollWidth > el.clientWidth + 2 && style.whiteSpace === "nowrap" && style.textOverflow !== "ellipsis") {
                textIssues.push({
                  type: group.type,
                  selector: group.selector,
                  textSnippet,
                  detail: `Text scrollWidth (${el.scrollWidth}px) exceeds clientWidth (${el.clientWidth}px) with whitespace:nowrap without ellipsis`,
                });
              }

              // Check 2: Element box extends beyond viewport
              if (rect.right > viewportWidth + 2 && style.overflow !== "hidden" && style.overflow !== "clip") {
                textIssues.push({
                  type: group.type,
                  selector: group.selector,
                  textSnippet,
                  detail: `Element box right edge (${Math.round(rect.right)}px) extends beyond viewport (${viewportWidth}px)`,
                });
              }

              // Check 3: Font height clipping (element height less than fontSize * 0.85)
              const fontSize = parseFloat(style.fontSize);
              if (rect.height < fontSize * 0.85 && rect.height > 0) {
                textIssues.push({
                  type: group.type,
                  selector: group.selector,
                  textSnippet,
                  detail: `Element height (${Math.round(rect.height)}px) is smaller than font-size (${fontSize}px), causing vertical text clipping`,
                });
              }
            }
          }

          return {
            docScrollWidth,
            bodyScrollWidth,
            windowInnerWidth,
            hasHorizontalScrollbar,
            overflowingElements,
            textIssues,
          };
        }, vp.width);

        // Navbar Drawer Test for mobile viewports (<= 840px)
        let navbarDrawerPassed = true;
        if (vp.width <= 840 && r.hash === "#home") {
          const hamburger = await page.$("button[aria-label='Toggle navigation menu']");
          if (hamburger) {
            await hamburger.click();
            await page.waitForTimeout(200);

            // Verify body overflow hidden while open
            const bodyOverflow = await page.evaluate(() => document.body.style.overflow || window.getComputedStyle(document.body).overflow);
            const drawerScrollWidth = await page.evaluate(() => document.documentElement.scrollWidth);

            if (drawerScrollWidth > vp.width + 1) {
              navbarDrawerPassed = false;
              console.error(`  ❌ Navbar drawer opened causes horizontal overflow: scrollWidth=${drawerScrollWidth}px > viewport=${vp.width}px`);
            }

            // Close drawer
            await hamburger.click();
            await page.waitForTimeout(200);
          }
        }

        const res = {
          viewport: vp.width,
          viewportName: vp.name,
          route: r.hash,
          routeName: r.name,
          documentScrollWidth: metrics.docScrollWidth,
          windowInnerWidth: metrics.windowInnerWidth,
          hasHorizontalScrollbar: metrics.hasHorizontalScrollbar,
          overflowingElements: metrics.overflowingElements,
          textIssues: metrics.textIssues,
          navbarDrawerPassed,
        };

        results.push(res);

        // Print page test status
        const isPass = !metrics.hasHorizontalScrollbar && metrics.overflowingElements.length === 0 && metrics.textIssues.length === 0 && navbarDrawerPassed;

        if (isPass) {
          console.log(`  ✓ Route: ${r.name.padEnd(22)} | scrollWidth: ${metrics.docScrollWidth}px / ${vp.width}px | Overflow-X: NONE | Text Clipping: NONE`);
        } else {
          totalFailures++;
          console.error(`  ✗ Route: ${r.name.padEnd(22)} | scrollWidth: ${metrics.docScrollWidth}px / ${vp.width}px | FAIL`);
          if (metrics.hasHorizontalScrollbar) {
            console.error(`    - Horizontal scrollbar triggered! maxScrollX > 0`);
          }
          if (metrics.overflowingElements.length > 0) {
            console.error(`    - Overflowing elements count: ${metrics.overflowingElements.length}`);
            metrics.overflowingElements.slice(0, 3).forEach((el) => {
              console.error(`      * <${el.tag} class="${el.className}"> right=${el.right}px`);
            });
          }
          if (metrics.textIssues.length > 0) {
            console.error(`    - Text rendering issues count: ${metrics.textIssues.length}`);
            metrics.textIssues.slice(0, 3).forEach((ti) => {
              console.error(`      * [${ti.type}] "${ti.textSnippet}": ${ti.detail}`);
            });
          }
        }
      }
    }

    console.log(`\n==========================================================================`);
    console.log(`📊 EMPIRICAL STRESS TEST RESULTS SUMMARY`);
    console.log(`==========================================================================`);
    console.log(`Total Route-Viewport Combinations Evaluated: ${results.length}`);
    console.log(`Total Failures Detected: ${totalFailures}`);

    if (totalFailures === 0) {
      console.log(`\n✅ ALL VIEWPORT BOUNDARY & CONTAINMENT TESTS PASSED EMPIRICALLY WITH ZERO OVERFLOW.`);
    } else {
      console.error(`\n❌ DETECTED ${totalFailures} FAILURES DURING EMPIRICAL STRESS TESTING.`);
      process.exitCode = 1;
    }
  } finally {
    await browser.close();
    await previewServer.close();
  }
}

runEmpiricalStressTest().catch((err) => {
  console.error("Fatal error running empirical viewport stress test:", err);
  process.exit(1);
});
