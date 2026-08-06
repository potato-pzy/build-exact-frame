import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./DeliveryPage.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FillButton from "./FillButton";
import RevealText from "./RevealText";

gsap.registerPlugin(ScrollTrigger);

interface DeliveryPageProps {
  onNavigate?: (page: "home" | "about" | "contact" | "delivery" | "full-circle-fuel") => void;
}

const images = [
  {
    src: "https://images.unsplash.com/photo-1518527989017-5baca7a58d3c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1200&q=80",
    alt: "Offshore supply vessel at sea",
  },
  {
    src: "https://images.unsplash.com/photo-1538474705339-e87de81450e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    alt: "Marine fuel pipes and valves",
  },
  {
    src: "https://images.unsplash.com/photo-1745192893031-2e17fa13fd89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    alt: "Marine worker on offshore deck",
  },
  {
    src: "https://images.unsplash.com/photo-1598193957011-39b9f2916992?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=800&q=80",
    alt: "Port at dusk with vessels",
  },
];

export default function DeliveryPage({ onNavigate }: DeliveryPageProps) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  // Reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", listener);
    return () => mediaQuery.removeEventListener("change", listener);
  }, []);

  // Panel View States
  const [panel1View, setPanel1View] = useState(false);
  const [panel2View, setPanel2View] = useState(false);
  const [panel3View, setPanel3View] = useState(false);
  const [panel4View, setPanel4View] = useState(false);

  // Typewriter state for Panel 4
  const [typedCharsCount, setTypedCharsCount] = useState(0);
  const panel4Text = "Twenty-four hours, at most major ports";

  const sectionRef = useRef<HTMLDivElement>(null);
  const leftColRef = useRef<HTMLDivElement>(null);

  const t1Ref = useRef<HTMLDivElement>(null);
  const t2Ref = useRef<HTMLDivElement>(null);
  const t3Ref = useRef<HTMLDivElement>(null);
  const t4Ref = useRef<HTMLDivElement>(null);

  const img0Ref = useRef<HTMLDivElement>(null);
  const img1Ref = useRef<HTMLDivElement>(null);
  const img2Ref = useRef<HTMLDivElement>(null);
  const img3Ref = useRef<HTMLDivElement>(null);

  // Direct 1-to-1 Scrubbed Sweep Reveal tied to scroll position
  useEffect(() => {
    const textRefs = [t1Ref, t2Ref, t3Ref, t4Ref];
    const imageRefs = [img0Ref, img1Ref, img2Ref, img3Ref];
    const setViews = [setPanel1View, setPanel2View, setPanel3View, setPanel4View];

    const triggers: ScrollTrigger[] = [];

    // Active state observer
    textRefs.forEach((ref, index) => {
      triggers.push(
        ScrollTrigger.create({
          trigger: ref.current,
          start: "top center",
          end: "bottom center",
          onEnter: () => {
            setActiveImageIndex(index);
            setViews[index](true);
          },
          onEnterBack: () => {
            setActiveImageIndex(index);
            setViews[index](true);
          },
        })
      );
    });

    // 1-to-1 Scrubbed Clip-Path Sweep Reveal for Images 1, 2, 3
    [1, 2, 3].forEach((idx) => {
      const textBlock = textRefs[idx].current;
      const imgElem = imageRefs[idx].current;
      if (!textBlock || !imgElem) return;

      const tween = gsap.fromTo(
        imgElem,
        { clipPath: "inset(100% 0% 0% 0%)" },
        {
          clipPath: "inset(0% 0% 0% 0%)",
          ease: "none",
          scrollTrigger: {
            trigger: textBlock,
            start: "top 90%",
            end: "center center",
            scrub: true,
          },
        }
      );
      if (tween.scrollTrigger) triggers.push(tween.scrollTrigger);
    });

    const refreshTimer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 250);

    return () => {
      clearTimeout(refreshTimer);
      triggers.forEach((t) => t.kill());
    };
  }, []);

  // Panel 4 Typewriter Timer Effect
  useEffect(() => {
    if (!panel4View) return;
    if (prefersReducedMotion) {
      setTypedCharsCount(panel4Text.length);
      return;
    }
    const timer = setInterval(() => {
      setTypedCharsCount((prev) => {
        if (prev >= panel4Text.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 30);
    return () => clearInterval(timer);
  }, [panel4View, prefersReducedMotion]);

  return (
    <div className="delivery-page-container">
      {/* Shared Navbar */}
      <Navbar onNavigate={onNavigate} currentPage="delivery" />
      <hr className="delivery-divider" />

      {/* ── HERO ── */}
      <section className="delivery-hero">
        <h1>
          <RevealText text="Offshore sites aren't reachable by one method. OEC delivers by whichever gets there fastest, truck, vessel, or pipeline." />
        </h1>
      </section>

      {/* ── STICKY SCROLL REVEAL SECTION ── */}
      <section ref={sectionRef} className="sticky-delivery-section">
        {/* Left Sticky Image Column (Pinned with CSS sticky top:0) */}
        <div ref={leftColRef} className="sticky-left-col">
          <div className="sticky-image-container">
            {/* Image 0 (Base image, always full inset) */}
            <div
              ref={img0Ref}
              className="sticky-img-wrapper"
              style={{ zIndex: 1, clipPath: "inset(0% 0% 0% 0%)" }}
            >
              <img src={images[0].src} alt={images[0].alt} />
            </div>

            {/* Image 1 (Scrubbed sweep over Image 0) */}
            <div
              ref={img1Ref}
              className={`sticky-img-wrapper ${
                activeImageIndex === 1 && !prefersReducedMotion ? "tilted" : ""
              }`}
              style={{ zIndex: 2, clipPath: "inset(100% 0% 0% 0%)" }}
            >
              <img src={images[1].src} alt={images[1].alt} />
            </div>

            {/* Image 2 (Scrubbed sweep over Image 1) */}
            <div
              ref={img2Ref}
              className="sticky-img-wrapper"
              style={{ zIndex: 3, clipPath: "inset(100% 0% 0% 0%)" }}
            >
              <img src={images[2].src} alt={images[2].alt} />
              <div className={`checkmark-badge ${panel3View ? "in-view" : ""}`}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                  <circle cx="12" cy="12" r="10" fill="#f25b17" fillOpacity="0.9" />
                  <path
                    className="checkmark-path"
                    d="M7 12L10.5 15.5L17 8.5"
                    stroke="#ffffff"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            {/* Image 3 (Scrubbed sweep over Image 2) */}
            <div
              ref={img3Ref}
              className={`sticky-img-wrapper ${
                activeImageIndex === 3 && !prefersReducedMotion ? "glowing" : ""
              }`}
              style={{ zIndex: 4, clipPath: "inset(100% 0% 0% 0%)" }}
            >
              <img src={images[3].src} alt={images[3].alt} />
            </div>
          </div>
        </div>

        {/* Right Scrollable Text Column (Each block is 100vh) */}
        <div className="scrollable-right-col">
          {/* TEXT BLOCK 1 */}
          <div ref={t1Ref} className={`sticky-text-block panel-1 ${panel1View ? "in-view" : ""}`}>
            <h2 className="panel-1-headline">
              Delivery matches the site, not a fixed fleet
            </h2>
            <p className={`stagger-body ${panel1View ? "in-view" : ""}`}>
              OEC charters bunker tankers, road tankers, and DP-2 supply vessels for every job, choosing whichever combination actually reaches the destination.
            </p>
            <div className="cta-container">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.("contact");
                }}
                className={`delivery-cta-link ${panel1View ? "in-view" : ""} ${
                  panel1View && !prefersReducedMotion ? "cta-pulse" : ""
                }`}
              >
                <span className="arrow">→</span>
                <span>Know more</span>
              </a>
            </div>
          </div>

          {/* TEXT BLOCK 2 */}
          <div ref={t2Ref} className={`sticky-text-block panel-2 ${panel2View ? "in-view" : ""}`}>
            <h2 className="panel-2-headline">
              Every major grade, ready when needed
            </h2>
            <p className={`stagger-body ${panel2View ? "in-view" : ""}`}>
              OEC supplies VLSFO, HSFO, and MGO, covering the full range offshore operators run on, without treating any grade as a special request.
            </p>
            <div className="cta-container">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.("contact");
                }}
                className={`delivery-cta-link ${panel2View ? "in-view" : ""} ${
                  panel2View && !prefersReducedMotion ? "cta-pulse" : ""
                }`}
              >
                <span className="arrow">→</span>
                <span>Know more</span>
              </a>
            </div>
          </div>

          {/* TEXT BLOCK 3 */}
          <div ref={t3Ref} className={`sticky-text-block panel-3 ${panel3View ? "in-view" : ""}`}>
            <h2 className="panel-3-headline">
              Every delivery follows the same standard
            </h2>
            <p className={`stagger-body ${panel3View ? "in-view" : ""}`}>
              OEC follows ISO 8217, the international standard for marine fuel quality, on every delivery without exception, regardless of the site.
            </p>
            <div className="cta-container">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.("contact");
                }}
                className={`delivery-cta-link no-pulse ${panel3View ? "in-view" : ""}`}
              >
                <span className="arrow">→</span>
                <span>Know more</span>
              </a>
            </div>
          </div>

          {/* TEXT BLOCK 4 */}
          <div ref={t4Ref} className={`sticky-text-block last-panel panel-4 ${panel4View ? "in-view" : ""}`}>
            <h2 className="panel-4-headline">
              {panel4Text.split("").map((char, i) => (
                <span
                  key={i}
                  className={`typewriter-char ${i < typedCharsCount ? "typed" : ""}`}
                >
                  {char}
                </span>
              ))}
            </h2>
            <p className={`stagger-body ${panel4View ? "in-view" : ""}`}>
              OEC can turn around a delivery within 24 hours at major bunkering ports, market availability permitting.
            </p>
            <div className="cta-container">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate?.("contact");
                }}
                className={`delivery-cta-link no-pulse ${panel4View ? "in-view" : ""}`}
              >
                <span className="arrow">→</span>
                <span>Know more</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── MOBILE DELIVERY CARDS SECTION (Rendered on mobile <= 900px) ── */}
      <section className="mobile-delivery-cards-section">
        {/* CARD 1 */}
        <div className="mobile-delivery-card">
          <div className="mobile-card-img-wrapper">
            <img src={images[0].src} alt={images[0].alt} />
          </div>
          <h2>Delivery matches the site, not a fixed fleet</h2>
          <p>
            OEC charters bunker tankers, road tankers, and DP-2 supply vessels for every job, choosing whichever combination actually reaches the destination.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.("contact");
            }}
            className="cta-link"
          >
            <span>→</span> <span>Know more</span>
          </a>
        </div>

        {/* CARD 2 */}
        <div className="mobile-delivery-card">
          <div className="mobile-card-img-wrapper">
            <img src={images[1].src} alt={images[1].alt} />
          </div>
          <h2>Every major grade, ready when needed</h2>
          <p>
            OEC supplies VLSFO, HSFO, and MGO, covering the full range offshore operators run on, without treating any grade as a special request.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.("contact");
            }}
            className="cta-link"
          >
            <span>→</span> <span>Know more</span>
          </a>
        </div>

        {/* CARD 3 */}
        <div className="mobile-delivery-card">
          <div className="mobile-card-img-wrapper">
            <img src={images[2].src} alt={images[2].alt} />
            <div className="mobile-card-checkmark">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="12" r="10" fill="#f25b17" fillOpacity="0.9" />
                <path d="M7 12L10.5 15.5L17 8.5" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </div>
          <h2>Every delivery follows the same standard</h2>
          <p>
            OEC follows ISO 8217, the international standard for marine fuel quality, on every delivery without exception, regardless of the site.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.("contact");
            }}
            className="cta-link"
          >
            <span>→</span> <span>Know more</span>
          </a>
        </div>

        {/* CARD 4 */}
        <div className="mobile-delivery-card">
          <div className="mobile-card-img-wrapper">
            <img src={images[3].src} alt={images[3].alt} />
          </div>
          <h2>Twenty-four hours, at most major ports</h2>
          <p>
            OEC can turn around a delivery within 24 hours at major bunkering ports, market availability permitting.
          </p>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onNavigate?.("contact");
            }}
            className="cta-link"
          >
            <span>→</span> <span>Know more</span>
          </a>
        </div>
      </section>

      {/* ── VESSEL BANNER ── */}
      <section className="delivery-banner">
        <div className="delivery-vessel-type">
          <RevealText text="Drilling Rigs" />
        </div>
        <div className="delivery-vessel-type">
          <RevealText text="Support Vessels" />
        </div>
        <div className="delivery-vessel-type">
          <RevealText text="Storage Vessels" />
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="delivery-cta">
        <h2>
          <RevealText text="Built to move, however the route works. Reach out when it matters." />
        </h2>
        <FillButton
          squareSize={40}
          height={48}
          width={180}
          squareColor="#f25b17"
          restBg="#f4f4f4"
          text="Contact Us"
          textColor="#182d57"
          hoverTextColor="#ffffff"
          fontSize={16}
          fontFamily="'Merriweather', serif"
          fontWeight={400}
          letterSpacing="-0.32px"
          rounded={4}
          onClick={() => onNavigate?.("contact")}
        />
      </section>

      {/* Shared Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
