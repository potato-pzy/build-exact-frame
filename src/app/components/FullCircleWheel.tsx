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

type Capability = {
  id: string;
  label: string;
  Icon: ComponentType<{ className?: string }>;
  /** Rendered size, matching the Figma artwork proportions. */
  iconClass: string;
};

const leftColumn: Capability[] = [
  { id: "offshore-focus", label: "Offshore Focus", Icon: OffshoreFocusIcon, iconClass: "h-[112px] w-[94px]" },
  { id: "direct-access", label: "Direct Access", Icon: DirectAccessIcon, iconClass: "h-[79px] w-[83px]" },
];

const rightColumn: Capability[] = [
  { id: "anywhere-delivery", label: "Anywhere Delivery", Icon: AnywhereDeliveryIcon, iconClass: "h-[89px] w-[73px]" },
  { id: "fair-pricing", label: "Fair Pricing", Icon: FairPricingIcon, iconClass: "h-[85px] w-[75px]" },
];

function Spoke({ label, Icon, iconClass }: Omit<Capability, "id">) {
  return (
    <div className="flex flex-col items-center gap-6 text-center">
      <p className="font-sans-brand font-light text-oec-blue text-[20px] lg:text-[24px] tracking-[-0.48px]">
        {label}
      </p>
      <Icon className={iconClass} />
    </div>
  );
}

export function FullCircleWheel() {
  return (
    <section id="full-circle-fuel" className="bg-oec-grey-bg">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[67px] py-[90px] lg:py-[133px]">
        {/* Desktop: three columns forming the ring; the side columns sit lower
            than the centre so the six marks read as a circle. */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] gap-x-10 items-start">
          <div className="flex flex-col items-center gap-[56px] pt-[98px]">
            {leftColumn.map(({ id, ...spoke }) => (
              <Spoke key={id} {...spoke} />
            ))}
          </div>

          <div className="flex flex-col items-center w-[400px]">
            <Spoke label="Ready Financing" Icon={ReadyFinancingIcon} iconClass="h-[74px] w-[75px]" />

            <PetalMark className="h-[31px] w-[34px] mt-[67px]" />
            <p
              className="font-serif-brand font-normal text-oec-blue text-[48px] tracking-[-0.96px] text-center mt-4"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Full Circle fuel
            </p>

            <div className="mt-[100px] flex flex-col items-center gap-6 text-center">
              <p className="font-sans-brand font-light text-oec-blue text-[24px] tracking-[-0.48px]">
                Project Know-How
              </p>
              <ProjectKnowHowIcon className="h-[97px] w-[75px]" />
            </div>
          </div>

          <div className="flex flex-col items-center gap-[68px] pt-[98px]">
            {rightColumn.map(({ id, ...spoke }) => (
              <Spoke key={id} {...spoke} />
            ))}
          </div>
        </div>

        {/* Narrow screens: circular graphic layout matching mobile design */}
        <div className="lg:hidden relative w-[340px] h-[360px] mx-auto my-4 flex items-center justify-center">
          {/* Center Circle */}
          <div className="z-10 w-[130px] h-[130px] rounded-full flex flex-col items-center justify-center p-3 text-center">
            <PetalMark className="h-5 w-5 mb-1" />
            <span
              className="font-serif-brand text-oec-navy font-semibold text-[15px] leading-tight"
              style={{ fontVariationSettings: '"wdth" 100' }}
            >
              Full Circle<br />Fuel
            </span>
          </div>

          {/* 1. Top: Ready Financing */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-10">
            <span className="font-sans-brand text-[11px] font-medium text-oec-navy mb-1">Ready Financing</span>
            <ReadyFinancingIcon className="w-10 h-10" />
          </div>

          {/* 2. Top Right: Anywhere Delivery */}
          <div className="absolute top-[60px] right-[5px] flex flex-col items-center text-center z-10">
            <span className="font-sans-brand text-[11px] font-medium text-oec-navy mb-1">Anywhere Delivery</span>
            <AnywhereDeliveryIcon className="w-10 h-10" />
          </div>

          {/* 3. Bottom Right: Fair Pricing */}
          <div className="absolute bottom-[60px] right-[10px] flex flex-col items-center text-center z-10">
            <span className="font-sans-brand text-[11px] font-medium text-oec-navy mb-1">Fair Pricing</span>
            <FairPricingIcon className="w-10 h-10" />
          </div>

          {/* 4. Bottom: Project Know-How */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex flex-col items-center text-center z-10">
            <span className="font-sans-brand text-[11px] font-medium text-oec-navy mb-1">Project Know-How</span>
            <ProjectKnowHowIcon className="w-10 h-10" />
          </div>

          {/* 5. Bottom Left: Direct Access */}
          <div className="absolute bottom-[60px] left-[10px] flex flex-col items-center text-center z-10">
            <span className="font-sans-brand text-[11px] font-medium text-oec-navy mb-1">Direct Access</span>
            <DirectAccessIcon className="w-10 h-10" />
          </div>

          {/* 6. Top Left: Offshore Focus */}
          <div className="absolute top-[60px] left-[5px] flex flex-col items-center text-center z-10">
            <span className="font-sans-brand text-[11px] font-medium text-oec-navy mb-1">Offshore Focus</span>
            <OffshoreFocusIcon className="w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
