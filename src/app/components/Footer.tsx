import { Layer1 } from "@/imports/HomePage-1/index";
import { FooterFlare } from "./brand/FooterFlare";

interface FooterProps {
  onNavigate?: (page: "home" | "about" | "contact" | "delivery" | "full-circle-fuel") => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative w-full bg-[#122446] overflow-hidden" style={{ borderTop: "3px solid #de5c35" }}>
      {/* Canvas container matching exact Figma frame bounds 1280px x 380px */}
      <div className="relative w-full max-w-[1280px] mx-auto h-[380px] overflow-hidden">
        {/* Decorative circular emblem on bottom right */}
        <div className="absolute right-[10px] bottom-[-20px] w-[350px] h-[335px] pointer-events-none opacity-90 z-0">
          <FooterFlare className="w-full h-full" />
        </div>

        {/* Rectangle 12 — Bottom Linear Gradient Overlay */}
        <div
          className="absolute left-0 top-[203px] w-[1280px] h-[177px] pointer-events-none z-[1]"
          style={{
            background: "linear-gradient(180deg, rgba(18, 36, 70, 0) 0%, rgba(18, 36, 70, 1) 100%)",
          }}
        />

        {/* Top Left OEC Logo (x: 84px, y: 42px) */}
        <div
          onClick={() => onNavigate?.("home")}
          className="absolute left-[84px] top-[42px] w-[254px] h-[56px] cursor-pointer hover:opacity-90 transition-opacity z-10 overflow-hidden"
        >
          <div style={{ position: "relative", width: 254, height: 56, marginTop: -3579, marginLeft: -84 }}>
            <Layer1 />
          </div>
        </div>

        {/* Column 1 Links (x: 93px) */}
        <button
          onClick={() => onNavigate?.("home")}
          className="absolute left-[93px] top-[176px] text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-normal transition-colors bg-transparent border-0 p-0 cursor-pointer z-10"
        >
          HOME
        </button>
        <button
          onClick={() => onNavigate?.("about")}
          className="absolute left-[93px] top-[214px] text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-normal transition-colors bg-transparent border-0 p-0 cursor-pointer z-10"
        >
          ABOUT
        </button>
        <button
          onClick={() => onNavigate?.("delivery")}
          className="absolute left-[93px] top-[252px] text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-normal transition-colors bg-transparent border-0 p-0 cursor-pointer z-10"
        >
          DELIVERY
        </button>

        {/* Column 2 Links (x: 265px) */}
        <button
          onClick={() => onNavigate?.("full-circle-fuel")}
          className="absolute left-[265px] top-[173px] text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-normal transition-colors bg-transparent border-0 p-0 cursor-pointer z-10"
        >
          ONE STOP SOLUTION
        </button>
        <button
          onClick={() => onNavigate?.("contact")}
          className="absolute left-[265px] top-[214px] text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-normal transition-colors bg-transparent border-0 p-0 cursor-pointer z-10"
        >
          CONTACT
        </button>

        {/* Horizontal Divider Line (x: 77px, y: 325px, w: 1127px) */}
        <div className="absolute left-[77px] top-[325px] w-[1127px] h-0 z-10">
          <div className="absolute inset-[-0.3px_0_0_0]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 1127 0.5">
              <line stroke="#5a629f" strokeWidth="0.5" x2="1127" y1="0.25" y2="0.25" />
            </svg>
          </div>
        </div>

        {/* Legal Row (y: 355px) */}
        <button
          onClick={() => onNavigate?.("about")}
          className="absolute left-[92px] top-[355px] text-[#5a629f] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-normal transition-colors bg-transparent border-0 p-0 cursor-pointer z-10"
        >
          TERMS &amp; CONDITIONS
        </button>
        <button
          onClick={() => onNavigate?.("about")}
          className="absolute left-[265px] top-[355px] text-[#5a629f] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-normal transition-colors bg-transparent border-0 p-0 cursor-pointer z-10"
        >
          PRIVACY POLICY
        </button>
        <span className="absolute left-[809px] top-[355px] text-[#5a629f] text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-normal z-10">
          OFFSHORE ENERGY CONSULTANTS PVT LTD 2026 &ndash; ALL RIGHTS RESERVED
        </span>
      </div>
    </footer>
  );
}
