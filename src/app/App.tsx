import { useEffect, useRef, useState } from "react";
import HomePage from "@/imports/HomePage-1/index";
import AboutPage from "@/app/components/AboutPage";
import ContactPage from "@/app/components/ContactPage";
import Navbar from "@/app/components/Navbar";

const DESIGN_WIDTH = 1280;
const DESIGN_HEIGHT = 4025;
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
      {/* Arrow inside square */}
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
          }}
        >
          →
        </span>
      )}
      {/* Label */}
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
          transition: "color 200ms ease",
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "contact">(
    "home"
  );
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  const handleNavigate = (page: "home" | "about" | "contact") => {
    setCurrentPage(page);
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
      const scale = w / DESIGN_WIDTH;
      inner.style.transform = `scale(${scale})`;
      outer.style.height = `${-NAVBAR_HEIGHT + DESIGN_HEIGHT * scale}px`;
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [currentPage]);

  if (currentPage === "about") {
    return <AboutPage onNavigate={handleNavigate} />;
  }

  if (currentPage === "contact") {
    return <ContactPage onNavigate={handleNavigate} />;
  }

  return (
    <div
      ref={outerRef}
      style={{ width: "100%", overflow: "hidden", position: "relative" }}
    >
      {/* Navbar rendered OUTSIDE the scaled container — full viewport width */}
      <Navbar onNavigate={handleNavigate} currentPage="home" />

      {/* Scaled canvas pushed down below the navbar */}
      <div
        ref={innerRef}
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transformOrigin: "top left",
          position: "relative",
          marginTop: -NAVBAR_HEIGHT,
        }}
      >
        <HomePage onNavigate={handleNavigate} />

        {/* Hero — "Learn More" (orange square + text) */}
        <FillButton
          top={305}
          left={793}
          squareSize={36}
          height={32}
          totalWidth={160}
          squareColor="#f25b17"
          restBg="#f4f4f4"
          textLeft={46}
          text="Learn More"
          textColor="#f25b17"
          fontSize={16}
          fontFamily="'Merriweather', serif"
          onClick={() => handleNavigate("about")}
        />

        {/* Footer CTA — "Contact Us" (blue square + white text on orange bg) */}
        <FillButton
          top={3341}
          left={818}
          squareSize={36}
          height={32}
          totalWidth={155}
          squareColor="#182d57"
          restBg="#de5c35"
          textLeft={46}
          text="Contact Us"
          textColor="#f1f1f1"
          fontSize={16}
          fontFamily="'Merriweather Sans', sans-serif"
          onClick={() => handleNavigate("contact")}
        />
      </div>
    </div>
  );
}
