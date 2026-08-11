import React from "react";
import { LogoRing } from "@/imports/HomePage-1/index";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-[#122345] via-[#152a52] to-[#193563]">
      {/* Right-hand side staggered translucent logo ring pattern */}
      <div
        aria-hidden
        className="absolute right-0 top-0 bottom-0 w-full lg:w-1/2 pointer-events-none overflow-hidden flex items-center justify-end pr-4 lg:pr-10 opacity-20 select-none mix-blend-screen"
      >
        <div className="grid grid-cols-3 gap-6 lg:gap-10 translate-x-12 scale-125 lg:scale-150">
          {/* Staggered Column 1 */}
          <div className="flex flex-col gap-8 lg:gap-12 translate-y-8">
            <LogoRing size={75} />
            <LogoRing size={75} />
            <LogoRing size={75} />
          </div>
          {/* Staggered Column 2 */}
          <div className="flex flex-col gap-8 lg:gap-12 -translate-y-4">
            <LogoRing size={75} />
            <LogoRing size={75} />
            <LogoRing size={75} />
            <LogoRing size={75} />
          </div>
          {/* Staggered Column 3 */}
          <div className="flex flex-col gap-8 lg:gap-12 translate-y-10">
            <LogoRing size={75} />
            <LogoRing size={75} />
            <LogoRing size={75} />
          </div>
        </div>
      </div>

      {/* Hero main content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-6 lg:px-[68px] py-[110px] lg:py-[131px]">
        <p
          className="font-serif-brand font-normal text-oec-light text-[26px] leading-[38px] lg:text-[39px] lg:leading-[55px] tracking-[-0.78px] max-w-[985px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          {`Integrated Fuel Solution isn't a label sitting on top of the business, it's the shape of it. Six capabilities, working as one, because a project can't afford a weak link anywhere in the chain.`}
        </p>
      </div>
    </section>
  );
}
