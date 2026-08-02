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

        {/* Narrow screens: the ring can't survive, so it becomes a simple grid
            under the brand mark. */}
        <div className="lg:hidden flex flex-col items-center">
          <PetalMark className="h-[28px] w-[31px]" />
          <p
            className="font-serif-brand font-normal text-oec-blue text-[34px] sm:text-[40px] tracking-[-0.8px] text-center mt-4"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Full Circle fuel
          </p>

          <div className="grid grid-cols-2 gap-x-8 gap-y-14 mt-14 w-full max-w-[520px]">
            {[
              { id: "ready-financing", label: "Ready Financing", Icon: ReadyFinancingIcon, iconClass: "h-[64px] w-[65px]" },
              ...leftColumn,
              ...rightColumn,
              { id: "project-know-how", label: "Project Know-How", Icon: ProjectKnowHowIcon, iconClass: "h-[82px] w-[63px]" },
            ].map(({ id, label, Icon, iconClass }) => (
              <div key={id} className="flex flex-col items-center gap-4 text-center">
                <p className="font-sans-brand font-light text-oec-blue text-[18px] tracking-[-0.36px]">
                  {label}
                </p>
                <Icon className={iconClass} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
