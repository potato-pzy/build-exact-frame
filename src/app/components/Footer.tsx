import { useEffect, useRef } from "react";
import mapImg from "@/imports/HomePage-1/8d3090800ee5c4269773692b859f3ffb20585a5b.png";
import { Layer1, Group4 } from "@/imports/HomePage-1/index";

const FOOTER_DESIGN_WIDTH = 1280;
const FOOTER_DESIGN_HEIGHT = 501;

interface FooterProps {
  onNavigate?: (page: "home" | "about" | "contact") => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const footerOuterRef = useRef<HTMLElement>(null);
  const footerInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const outer = footerOuterRef.current;
    const inner = footerInnerRef.current;
    if (!outer || !inner) return;

    const apply = () => {
      const w = outer.getBoundingClientRect().width || window.innerWidth;
      if (!w) return;
      const scale = w / FOOTER_DESIGN_WIDTH;
      inner.style.transform = `scale(${scale})`;
      outer.style.height = `${FOOTER_DESIGN_HEIGHT * scale}px`;
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, []);

  return (
    <footer className="about-footer" ref={footerOuterRef} style={{ width: "100%", overflow: "hidden", position: "relative" }}>
      <div
        className="about-footer-canvas"
        ref={footerInnerRef}
        style={{ width: 1280, height: 501, position: "relative", transformOrigin: "top left" }}
      >
        {/* Navy background */}
        <div className="absolute bg-[#182d57] h-[501px] left-0 top-0 w-[1280px]" />

        {/* Decorative radial SVGs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div style={{ position: "relative", width: 1280, height: 4025, marginTop: -3524 }}>
            <Group4 />
          </div>
        </div>

        {/* Map band */}
        <div className="absolute h-[177px] left-0 top-[236px] w-[1280px]">
          <img
            alt=""
            className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
            src={mapImg}
          />
        </div>

        {/* Logo */}
        <div
          className="absolute h-[56px] left-[84px] overflow-clip top-[55px] w-[254px] cursor-pointer"
          onClick={() => onNavigate?.("home")}
        >
          <Layer1 />
        </div>

        {/* Divider line */}
        <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+0.5px)] top-[325px] w-[1127px]">
          <div className="absolute inset-[-0.3px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1127 0.3">
              <line stroke="#5B639F" strokeWidth="0.3" x2="1127" y1="0.15" y2="0.15" />
            </svg>
          </div>
        </div>

        {/* Nav column 1 */}
        <p
          onClick={() => onNavigate?.("home")}
          className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[93px] text-[#c2c2c2] text-[12px] top-[176px] whitespace-nowrap cursor-pointer hover:text-white transition-colors"
        >
          Home
        </p>
        <p
          onClick={() => onNavigate?.("about")}
          className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[93px] text-[#c2c2c2] text-[12px] top-[214px] whitespace-nowrap cursor-pointer hover:text-white transition-colors"
        >
          About
        </p>
        <p className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[93px] text-[#c2c2c2] text-[12px] top-[252px] whitespace-nowrap cursor-pointer hover:text-white transition-colors">
          Delivery
        </p>

        {/* Nav column 2 */}
        <p className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[265px] text-[#c2c2c2] text-[12px] top-[173px] whitespace-nowrap cursor-pointer hover:text-white transition-colors">
          One stop solution
        </p>
        <p
          onClick={() => onNavigate?.("contact")}
          className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[265px] text-[#c2c2c2] text-[12px] top-[214px] whitespace-nowrap cursor-pointer hover:text-white transition-colors"
        >
          Contact
        </p>

        {/* Legal row */}
        <p className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[92px] text-[#5b639f] text-[12px] top-[355px] whitespace-nowrap">
          {`Terms & Conditions`}
        </p>
        <p className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[265px] text-[#5b639f] text-[12px] top-[355px] whitespace-nowrap">
          Privacy Policy
        </p>
        <p className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[809px] text-[#5b639f] text-[12px] top-[355px] whitespace-nowrap">
          Offshore energy consultants pvt ltd 2026 - All Rights reserved
        </p>
      </div>
    </footer>
  );
}
