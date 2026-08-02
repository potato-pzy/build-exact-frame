import { useEffect, useRef } from "react";
import { Layer1, Group4 } from "@/imports/HomePage-1/index";

const FOOTER_DESIGN_WIDTH = 1280;
const FOOTER_DESIGN_HEIGHT = 380;

interface FooterProps {
  onNavigate?: (page: "home" | "about" | "contact" | "delivery" | "full-circle-fuel") => void;
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
    <footer className="about-footer" ref={footerOuterRef} style={{ width: "100%", overflowX: "clip", position: "relative" }}>
      <div
        className="about-footer-canvas"
        ref={footerInnerRef}
        style={{ width: 1280, height: 380, position: "absolute", top: 0, left: 0, transformOrigin: "top left" }}
      >
        {/* Top orange brand border line */}
        <div className="absolute bg-[#de5c35] h-[3px] left-0 top-0 w-[1280px] z-0" />

        {/* Deep navy background */}
        <div className="absolute bg-[#122446] h-[380px] left-0 top-0 w-[1280px]" />

        {/* Decorative radial brand watermark */}
        <div className="absolute h-[380px] left-0 top-0 w-[1280px] overflow-hidden pointer-events-none z-10">
          <div style={{ position: "relative", width: 1280, height: 4025, marginTop: -3615 }}>
            <Group4 />
          </div>
        </div>

        {/* Logo */}
        <div
          className="absolute h-[56px] left-[84px] overflow-clip top-[42px] w-[254px] cursor-pointer"
          onClick={() => onNavigate?.("home")}
        >
          <Layer1 />
        </div>

        {/* Nav column 1 */}
        <p
          onClick={() => onNavigate?.("home")}
          className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[93px] text-[#a0abc0] text-[13px] top-[132px] whitespace-nowrap cursor-pointer hover:text-white transition-colors uppercase tracking-wider"
        >
          HOME
        </p>
        <p
          onClick={() => onNavigate?.("about")}
          className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[93px] text-[#a0abc0] text-[13px] top-[166px] whitespace-nowrap cursor-pointer hover:text-white transition-colors uppercase tracking-wider"
        >
          ABOUT
        </p>
        <p
          onClick={() => onNavigate?.("delivery")}
          className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[93px] text-[#a0abc0] text-[13px] top-[200px] whitespace-nowrap cursor-pointer hover:text-white transition-colors uppercase tracking-wider"
        >
          DELIVERY
        </p>
        <p
          onClick={() => onNavigate?.("full-circle-fuel")}
          className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[93px] text-[#a0abc0] text-[13px] top-[234px] whitespace-nowrap cursor-pointer hover:text-white transition-colors uppercase tracking-wider"
        >
          FULL CIRCLE FUEL
        </p>

        {/* Nav column 2 */}
        <p
          onClick={() => onNavigate?.("about")}
          className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[275px] text-[#a0abc0] text-[13px] top-[132px] whitespace-nowrap cursor-pointer hover:text-white transition-colors uppercase tracking-wider"
        >
          ONE STOP SOLUTION
        </p>
        <p
          onClick={() => onNavigate?.("contact")}
          className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[275px] text-[#a0abc0] text-[13px] top-[166px] whitespace-nowrap cursor-pointer hover:text-white transition-colors uppercase tracking-wider"
        >
          CONTACT
        </p>

        {/* Horizontal Divider Line */}
        <div className="-translate-x-1/2 absolute h-0 left-[calc(50%+0.5px)] top-[282px] w-[1127px]">
          <div className="absolute inset-[-0.3px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1127 0.3">
              <line stroke="#3b4870" strokeWidth="0.5" x2="1127" y1="0.15" y2="0.15" />
            </svg>
          </div>
        </div>

        {/* Legal row */}
        <p
          onClick={() => onNavigate?.("about")}
          className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[92px] text-[#6b789e] text-[11px] top-[312px] whitespace-nowrap cursor-pointer hover:text-white transition-colors uppercase tracking-wider"
        >
          {`TERMS & CONDITIONS`}
        </p>
        <p
          onClick={() => onNavigate?.("about")}
          className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[275px] text-[#6b789e] text-[11px] top-[312px] whitespace-nowrap cursor-pointer hover:text-white transition-colors uppercase tracking-wider"
        >
          PRIVACY POLICY
        </p>
        <p className="[word-break:break-word] absolute font-['Merriweather_Sans:Light',sans-serif] font-light leading-[normal] left-[630px] text-[#6b789e] text-[11px] top-[312px] whitespace-nowrap uppercase tracking-wider">
          OFFSHORE ENERGY CONSULTANTS PVT LTD 2026 – ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
}
