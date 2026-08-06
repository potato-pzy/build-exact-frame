import { Logo } from "./brand/Logo";
import { FooterFlare } from "./brand/FooterFlare";

interface FooterProps {
  onNavigate?: (page: "home" | "about" | "contact" | "delivery" | "full-circle-fuel") => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative w-full min-h-[380px] h-auto bg-[#122446] overflow-hidden pb-8 md:pb-0">
      {/* Decorative circular emblem */}
      <div className="absolute right-0 md:left-[64%] w-[60%] md:w-[30%] bottom-[-80px] pointer-events-none opacity-40 md:opacity-60 z-0">
        <FooterFlare className="w-full h-auto" />
      </div>

      {/* Bottom Linear Gradient Overlay */}
      <div
        className="absolute left-0 bottom-0 w-full h-[177px] pointer-events-none z-[1]"
        style={{
          background: "linear-gradient(180deg, rgba(18, 36, 70, 0) 0%, rgba(18, 36, 70, 1) 100%)",
        }}
      />

      {/* Desktop Footer Content Container (hidden on mobile) */}
      <div className="hidden md:flex relative w-full h-full px-[7%] mx-auto z-10 flex-col">
        {/* Top section: Logo */}
        <div className="pt-[54px]">
          <div
            onClick={() => onNavigate?.("home")}
            className="w-[254px] h-[56px] cursor-pointer hover:opacity-90 transition-opacity"
          >
            <Logo variant="light" className="w-[254px] h-[56px]" />
          </div>
        </div>

        {/* Nav section */}
        <div className="flex mt-[48px] pl-[9px]">
          {/* Column 1 */}
          <div className="flex flex-col gap-[24px] w-[240px]">
            <button
              onClick={() => onNavigate?.("home")}
              className="text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center"
            >
              HOME
            </button>
            <button
              onClick={() => onNavigate?.("about")}
              className="text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center"
            >
              ABOUT
            </button>
            <button
              onClick={() => onNavigate?.("delivery")}
              className="text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center"
            >
              DELIVERY
            </button>
          </div>
          {/* Column 2 */}
          <div className="flex flex-col gap-[24px]">
            <button
              onClick={() => onNavigate?.("full-circle-fuel")}
              className="text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center"
            >
              ONE STOP SOLUTION
            </button>
            <button
              onClick={() => onNavigate?.("contact")}
              className="text-left text-[#c1c1c1] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center"
            >
              CONTACT
            </button>
          </div>
        </div>

        {/* Horizontal Divider Line */}
        <div className="w-full h-[0.5px] bg-[#5a629f] mt-[52px]"></div>

        {/* Legal Row */}
        <div className="flex flex-row justify-between items-center mt-[14px] pl-[9px]">
          <div className="flex items-center">
            <div className="w-[240px]">
              <button
                onClick={() => onNavigate?.("about")}
                className="text-left text-[#5a629f] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center"
              >
                TERMS &amp; CONDITIONS
              </button>
            </div>
            <button
              onClick={() => onNavigate?.("about")}
              className="text-left text-[#5a629f] hover:text-white text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight transition-colors bg-transparent border-0 p-0 cursor-pointer min-h-[44px] inline-flex items-center"
            >
              PRIVACY POLICY
            </button>
          </div>
          <span className="text-[#5a629f] text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light uppercase tracking-tight">
            OFFSHORE ENERGY CONSULTANTS PVT LTD 2026 &ndash; ALL RIGHTS RESERVED
          </span>
        </div>
      </div>

      {/* ── MOBILE FOOTER DESIGN (shown on screen width < 768px / md) ── */}
      <div className="block md:hidden w-full px-6 pt-10 pb-12 relative z-10">
        {/* Top Row: Logo + Scroll to top chevron button */}
        <div className="flex items-center justify-between mb-8">
          <div
            onClick={() => {
              onNavigate?.("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="cursor-pointer"
          >
            <Logo variant="light" className="w-[200px] h-auto" />
          </div>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="w-10 h-10 rounded-full flex items-center justify-center text-white bg-transparent border border-white/20 hover:border-white/50 transition-colors"
            aria-label="Scroll to top"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </button>
        </div>

        {/* Main Navigation Links with > chevrons */}
        <div className="flex flex-col border-t border-white/10">
          <div
            onClick={() => {
              onNavigate?.("home");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center justify-between py-4 border-b border-white/10 text-white font-['Merriweather_Sans:Light',sans-serif] text-[17px] font-light cursor-pointer hover:text-orange-400 transition-colors"
          >
            <span>Home</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          <div
            onClick={() => {
              onNavigate?.("about");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center justify-between py-4 border-b border-white/10 text-white font-['Merriweather_Sans:Light',sans-serif] text-[17px] font-light cursor-pointer hover:text-orange-400 transition-colors"
          >
            <span>About</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          <div
            onClick={() => {
              onNavigate?.("delivery");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center justify-between py-4 border-b border-white/10 text-white font-['Merriweather_Sans:Light',sans-serif] text-[17px] font-light cursor-pointer hover:text-orange-400 transition-colors"
          >
            <span>Delivery</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          <div
            onClick={() => {
              onNavigate?.("full-circle-fuel");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center justify-between py-4 border-b border-white/10 text-white font-['Merriweather_Sans:Light',sans-serif] text-[17px] font-light cursor-pointer hover:text-orange-400 transition-colors"
          >
            <span>One Stop Solution</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          <div
            onClick={() => {
              onNavigate?.("contact");
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center justify-between py-4 border-b border-white/10 text-white font-['Merriweather_Sans:Light',sans-serif] text-[17px] font-light cursor-pointer hover:text-orange-400 transition-colors"
          >
            <span>Contact</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-60">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>

        {/* Centered Social Buttons */}
        <div className="flex items-center justify-center gap-4 my-8 pb-4 border-b border-white/10">
          {/* LinkedIn */}
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:border-white transition-colors"
            aria-label="LinkedIn"
          >
            <span className="font-semibold text-[15px] font-sans">in</span>
          </a>

          {/* Email */}
          <a
            href="mailto:contact@offshoreenergy.sg"
            className="w-11 h-11 rounded-full border border-white/40 flex items-center justify-center text-white hover:border-white transition-colors"
            aria-label="Email"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="4" width="20" height="16" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </a>
        </div>

        {/* Secondary Legal Links */}
        <div className="flex flex-col mb-8">
          <div
            onClick={() => onNavigate?.("contact")}
            className="flex items-center justify-between py-3 border-b border-white/10 text-white/70 font-['Merriweather_Sans:Light',sans-serif] text-[13px] font-light cursor-pointer hover:text-white transition-colors"
          >
            <span>Terms &amp; Conditions</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>

          <div
            onClick={() => onNavigate?.("contact")}
            className="flex items-center justify-between py-3 border-b border-white/10 text-white/70 font-['Merriweather_Sans:Light',sans-serif] text-[13px] font-light cursor-pointer hover:text-white transition-colors"
          >
            <span>Privacy Policy</span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-white/50 text-[12px] font-['Merriweather_Sans:Light',sans-serif] font-light">
          © Offshore Energy Consultants Pvt Ltd 2026 – All Rights Reserved
        </p>
      </div>
    </footer>
  );
}

