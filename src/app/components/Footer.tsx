import { Layer1 } from "@/imports/HomePage-1/index";
import { FooterFlare } from "./brand/FooterFlare";

interface FooterProps {
  onNavigate?: (page: "home" | "about" | "contact" | "delivery" | "full-circle-fuel") => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative w-full h-[380px] bg-[#122446] overflow-hidden">
      {/* Decorative circular emblem */}
      <div className="absolute left-[64%] w-[30%] bottom-[-80px] pointer-events-none opacity-60 z-0">
        <FooterFlare className="w-full h-auto" />
      </div>

      {/* Bottom Linear Gradient Overlay */}
      <div
        className="absolute left-0 bottom-0 w-full h-[177px] pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(180deg, rgba(18, 36, 70, 0) 0%, rgba(18, 36, 70, 1) 100%)",
        }}
      />

      {/* Content Container */}
      <div className="relative w-full h-full px-[7%] mx-auto z-10 flex flex-col">
        {/* Top section: Logo */}
        <div className="pt-[54px]">
          <div
            onClick={() => onNavigate?.("home")}
            className="w-[254px] h-[56px] cursor-pointer hover:opacity-90 transition-opacity overflow-hidden"
          >
            <div style={{ position: "relative", width: 254, height: 56, marginTop: -3579, marginLeft: -84 }}>
              <Layer1 />
            </div>
          </div>
        </div>

        {/* Nav section */}
        <div className="flex mt-[48px] pl-[9px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-[24px] w-[240px]">
            <button
              onClick={() => onNavigate?.("home")}
              className="text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer"
            >
              HOME
            </button>
            <button
              onClick={() => onNavigate?.("about")}
              className="text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer"
            >
              ABOUT
            </button>
            <button
              onClick={() => onNavigate?.("delivery")}
              className="text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer"
            >
              DELIVERY
            </button>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-[24px]">
            <button
              onClick={() => onNavigate?.("full-circle-fuel")}
              className="text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer"
            >
              ONE STOP SOLUTION
            </button>
            <button
              onClick={() => onNavigate?.("contact")}
              className="text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer"
            >
              CONTACT
            </button>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-[0.5px] bg-[#5a629f] mt-[52px]"></div>

        {/* Legal Row */}
        <div className="flex justify-between items-center mt-[14px] pl-[9px]">
          <div className="flex items-center">
            <div className="w-[240px]">
              <button
                onClick={() => onNavigate?.("about")}
                className="text-left text-[#5a629f] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer"
              >
                TERMS &amp; CONDITIONS
              </button>
            </div>
            <button
              onClick={() => onNavigate?.("about")}
              className="text-left text-[#5a629f] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer"
            >
              PRIVACY POLICY
            </button>
          </div>
          <span className="text-[#5a629f] text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight">
            OFFSHORE ENERGY CONSULTANTS PVT LTD 2026 &ndash; ALL RIGHTS RESERVED
          </span>
        </div>
      </div>
    </footer>
  );
}
