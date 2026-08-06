import React from "react";

export function Hero() {
  return (
    <section className="bg-[#122446] text-white px-5 lg:px-[67px] py-10 lg:py-[100px]">
      <div className="max-w-[1280px] mx-auto">
        <h1
          className="font-serif-brand font-normal text-white text-[24px] sm:text-[28px] lg:text-[40px] leading-[1.3] max-w-[840px] mb-3"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Full Circle Fuel isn't a label sitting on top of the business, it's the shape of it.
        </h1>
        <p className="font-sans-brand font-light text-[#c1c1c1] text-[14px] sm:text-[16px] lg:text-[20px] leading-[1.5] max-w-[720px]">
          Six capabilities, working as one, because a project can't afford a weak link anywhere in the chain.
        </p>
      </div>
    </section>
  );
}
