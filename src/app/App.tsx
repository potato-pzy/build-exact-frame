import { useEffect, useRef, useState, lazy, Suspense } from "react";
import HomePage from "@/imports/HomePage-1/index";
import Navbar from "@/app/components/Navbar";
import LoadingSpinner from "@/app/components/LoadingSpinner";

const AboutPage = lazy(() => import("@/app/components/AboutPage"));
const ContactPage = lazy(() => import("@/app/components/ContactPage"));
const DeliveryPage = lazy(() => import("@/app/components/DeliveryPage"));
const FullCircleFuelPage = lazy(() => import("@/app/components/FullCircleFuelPage"));

const DESIGN_WIDTH = 1280;
const DESIGN_HEIGHT = 3904;
const NAVBAR_HEIGHT = 110;

interface FillButtonProps {
  top: number;
  left: number;
  squareSize: number;
  height: number;
  totalWidth: number;
  squareColor: string;
  restBg: string;
  textLeft: number;
  text: string;
  textColor: string;
  fontSize: number;
  fontFamily: string;
  letterSpacing?: string;
  rounded?: number;
  arrow?: boolean;
  onClick?: () => void;
}

function FillButton({
  top,
  left,
  squareSize,
  height,
  totalWidth,
  squareColor,
  restBg,
  textLeft,
  text,
  textColor,
  fontSize,
  fontFamily,
  letterSpacing,
  rounded = 4,
  arrow = true,
  onClick,
}: FillButtonProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "absolute",
        top,
        left,
        width: totalWidth,
        height,
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        borderRadius: rounded,
        overflow: "hidden",
        background: restBg,
      }}
    >
      {/* Animated fill layer: extends to totalWidth on hover, retracts back to squareSize on unhover without overlay shading */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          background: squareColor,
          width: hovered ? totalWidth : squareSize,
          borderRadius: rounded,
          transition: "width 380ms cubic-bezier(0.4, 0, 0.2, 1)",
          pointerEvents: "none",
        }}
      />
      {/* Arrow inside square — slides RIGHT on hover */}
      {arrow && (
        <span
          style={{
            position: "relative",
            zIndex: 1,
            width: squareSize,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: 13,
            flexShrink: 0,
            transform: hovered ? `translateX(calc(100% - ${squareSize}px + 8px))` : "translateX(0)",
            transition: "transform 380ms cubic-bezier(0.4, 0, 0.2, 1)",
          }}
        >
          →
        </span>
      )}
      {/* Label — slides LEFT on hover */}
      <span
        style={{
          position: "absolute",
          left: textLeft,
          zIndex: 1,
          color: hovered ? "white" : textColor,
          fontSize,
          fontFamily,
          fontWeight: 300,
          letterSpacing: letterSpacing ?? "-0.32px",
          whiteSpace: "nowrap",
          transform: hovered ? "translateX(-8px)" : "translateX(0)",
          transition: "color 200ms ease, transform 380ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        {text}
      </span>
    </div>
  );
}

const getInitialPage = (): "home" | "about" | "contact" | "delivery" | "integrated-fuel-solution" => {
  const hash = window.location.hash.replace("#", "");
  if (hash === "about" || hash === "contact" || hash === "delivery" || hash === "integrated-fuel-solution") return hash;
  return "home";
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "contact" | "delivery" | "integrated-fuel-solution">(
    getInitialPage
  );
  const [initialLoading, setInitialLoading] = useState(true);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  // Listen to URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Save scroll position per page to sessionStorage
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem(`scroll_${currentPage}`, window.scrollY.toString());
    };
    window.addEventListener("scroll", saveScroll);
    return () => window.removeEventListener("scroll", saveScroll);
  }, [currentPage]);

  // Restore scroll position when page mounts or refreshes
  useEffect(() => {
    const saved = sessionStorage.getItem(`scroll_${currentPage}`);
    if (saved) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(saved, 10), behavior: "instant" as ScrollBehavior });
      }, 50);
    }
  }, [currentPage]);

  const handleNavigate = (page: "home" | "about" | "contact" | "delivery" | "integrated-fuel-solution") => {
    setCurrentPage(page);
    window.location.hash = page;
    sessionStorage.setItem(`scroll_${page}`, "0");
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  useEffect(() => {
    if (currentPage !== "home") return;
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const apply = () => {
      const w = outer.getBoundingClientRect().width || window.innerWidth;
      if (!w) return;
      if (w <= 840) {
        inner.style.transform = "none";
        inner.style.width = "100%";
        inner.style.height = "auto";
        inner.style.position = "relative";
        inner.style.top = "0";
        outer.style.height = "auto";
        return;
      }
      inner.style.width = `${DESIGN_WIDTH}px`;
      inner.style.height = `${DESIGN_HEIGHT}px`;
      inner.style.position = "absolute";
      inner.style.top = `-${NAVBAR_HEIGHT}px`;
      const scale = Math.max(w / DESIGN_WIDTH, 0.45);
      inner.style.transformOrigin = "top left";
      inner.style.transform = `scale(${scale})`;
      outer.style.height = `${-NAVBAR_HEIGHT + DESIGN_HEIGHT * scale}px`;
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [currentPage, initialLoading]);

  if (initialLoading) {
    return <LoadingSpinner />;
  }

  if (currentPage === "about") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <AboutPage onNavigate={handleNavigate} />
      </Suspense>
    );
  }

  if (currentPage === "contact") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <ContactPage onNavigate={handleNavigate} />
      </Suspense>
    );
  }

  if (currentPage === "delivery") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <DeliveryPage onNavigate={handleNavigate} />
      </Suspense>
    );
  }

  if (currentPage === "integrated-fuel-solution") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <FullCircleFuelPage onNavigate={handleNavigate} />
      </Suspense>
    );
  }

  return (
    <>
      {/* Navbar: full viewport width, sticky, outside scaled content */}
      <Navbar onNavigate={handleNavigate} currentPage="home" />

      {/* outerRef: position:relative with JS-controlled height. overflow:clip hard-cuts anything outside. */}
      <div
        ref={outerRef}
        style={{
          position: "relative",
          width: "100%",
          overflowX: "clip",
        }}
      >
        {/* innerRef: position:absolute so it is OUT of document flow.
            A 1280px absolutely-positioned element does NOT affect scroll/layout width. */}
        <div
          ref={innerRef}
          style={{
            width: DESIGN_WIDTH,
            height: DESIGN_HEIGHT,
            transformOrigin: "top left",
            position: "absolute",
            top: -NAVBAR_HEIGHT,
            left: 0,
          }}
        >
          <HomePage onNavigate={handleNavigate} />

          {/* Footer CTA — "Contact Us" (blue square + white text on orange bg) */}
          <FillButton
            top={3341}
            left={818}
            squareSize={36}
            height={44}
            totalWidth={155}
            squareColor="#de5c35"
            restBg="#de5c35"
            textLeft={46}
            text="Contact Us"
            textColor="#f1f1f1"
            fontSize={16}
            fontFamily="'Merriweather', serif"
            onClick={() => handleNavigate("contact")}
          />
        </div>
      </div>
    </>
  );
}
