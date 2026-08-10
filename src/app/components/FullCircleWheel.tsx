import type { ComponentType } from "react";
import {
  AnywhereDeliveryIcon,
  DirectAccessIcon,
  FairPricingIcon,
  OffshoreFocusIcon,
  PetalMark,
  ProjectKnowHowIcon,
  ReadyFinancingIcon,
} from "./brand/WheelIcons";

// Unused code removed

export function FullCircleWheel() {
  return (
    <section id="integrated-fuel-solution" className="bg-oec-grey-bg">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[67px] py-[90px] lg:py-[133px]">
        {/* Desktop: circular graphic layout */}
        <div className="hidden lg:flex relative w-[700px] h-[600px] mx-auto items-center justify-center">
          {/* Center Circle */}
          <div className="z-10 flex flex-col items-center justify-center text-center">
            <PetalMark className="h-[36px] w-[36px] mb-4" />
            <span
              className="font-serif-brand font-normal text-oec-blue text-[44px] leading-[48px] tracking-[-0.96px]"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Integrated Fuel<br />Solutions
            </span>
          </div>

          {/* 1. Top: Ready Financing */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-10 gap-3">
            <ReadyFinancingIcon className="w-[54px] h-[27px]" />
            <span className="font-sans-brand text-[18px] font-light text-oec-blue tracking-[-0.48px]">Ready Financing</span>
          </div>

          {/* 2. Top Right: Anywhere Delivery */}
          <div className="absolute top-[130px] right-0 flex flex-col items-center text-center z-10 gap-3">
            <AnywhereDeliveryIcon className="w-[43px] h-[55px]" />
            <span className="font-sans-brand text-[18px] font-light text-oec-blue tracking-[-0.48px]">Anywhere Delivery</span>
          </div>

          {/* 3. Bottom Right: Fair Pricing */}
          <div className="absolute bottom-[130px] right-0 flex flex-col items-center text-center z-10 gap-3">
            <FairPricingIcon className="w-[45px] h-[55px]" />
            <span className="font-sans-brand text-[18px] font-light text-oec-blue tracking-[-0.48px]">Fair Pricing</span>
          </div>

          {/* 4. Bottom: Project Know-How */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-10 gap-3">
            <ProjectKnowHowIcon className="w-[54px] h-[27px]" />
            <span className="font-sans-brand text-[18px] font-light text-oec-blue tracking-[-0.48px]">Project Know-How</span>
          </div>

          {/* 5. Bottom Left: Direct Access */}
          <div className="absolute bottom-[130px] left-0 flex flex-col items-center text-center z-10 gap-3">
            <DirectAccessIcon className="w-[43px] h-[55px]" />
            <span className="font-sans-brand text-[18px] font-light text-oec-blue tracking-[-0.48px]">Direct Access</span>
          </div>

          {/* 6. Top Left: Offshore Focus */}
          <div className="absolute top-[130px] left-0 flex flex-col items-center text-center z-10 gap-3">
            <OffshoreFocusIcon className="w-[45px] h-[55px]" />
            <span className="font-sans-brand text-[18px] font-light text-oec-blue tracking-[-0.48px]">Offshore Focus</span>
          </div>
        </div>

        {/* Narrow screens: circular graphic layout matching mobile design */}
        <div className="lg:hidden relative w-[340px] h-[360px] mx-auto my-4 flex items-center justify-center">
          {/* Center Circle */}
          <div className="z-10 w-[130px] h-[130px] rounded-full flex flex-col items-center justify-center p-3 text-center">
            <PetalMark className="h-5 w-5 mb-2" />
            <span
              className="font-serif-brand text-oec-navy font-semibold text-[14px] leading-tight"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Integrated Fuel<br />Solutions
            </span>
          </div>

          {/* 1. Top: Ready Financing */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-10 gap-1.5">
            <ReadyFinancingIcon className="w-[36px] h-[18px]" />
            <span className="font-sans-brand text-[10px] font-medium text-oec-navy">Ready Financing</span>
          </div>

          {/* 2. Top Right: Anywhere Delivery */}
          <div className="absolute top-[55px] right-[5px] flex flex-col items-center text-center z-10 gap-1.5">
            <AnywhereDeliveryIcon className="w-[28px] h-[36px]" />
            <span className="font-sans-brand text-[10px] font-medium text-oec-navy">Anywhere Delivery</span>
          </div>

          {/* 3. Bottom Right: Fair Pricing */}
          <div className="absolute bottom-[55px] right-[10px] flex flex-col items-center text-center z-10 gap-1.5">
            <FairPricingIcon className="w-[30px] h-[36px]" />
            <span className="font-sans-brand text-[10px] font-medium text-oec-navy">Fair Pricing</span>
          </div>

          {/* 4. Bottom: Project Know-How */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-10 gap-1.5">
            <ProjectKnowHowIcon className="w-[36px] h-[18px]" />
            <span className="font-sans-brand text-[10px] font-medium text-oec-navy">Project Know-How</span>
          </div>

          {/* 5. Bottom Left: Direct Access */}
          <div className="absolute bottom-[55px] left-[10px] flex flex-col items-center text-center z-10 gap-1.5">
            <DirectAccessIcon className="w-[28px] h-[36px]" />
            <span className="font-sans-brand text-[10px] font-medium text-oec-navy">Direct Access</span>
          </div>

          {/* 6. Top Left: Offshore Focus */}
          <div className="absolute top-[55px] left-[5px] flex flex-col items-center text-center z-10 gap-1.5">
            <OffshoreFocusIcon className="w-[30px] h-[36px]" />
            <span className="font-sans-brand text-[10px] font-medium text-oec-navy">Offshore Focus</span>
          </div>
        </div>
      </div>
    </section>
  );
}
