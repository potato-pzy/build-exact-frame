const svgReadyFinancing = "/svg/1.svg";
const svgOffshoreFocus = "/svg/5-1.svg";
const svgAnywhereDelivery = "/svg/2.svg";
const svgFairPricing = "/svg/3.svg";
const svgProjectKnowHow = "/svg/4.svg";
const svgIsolationMode = "/svg/5.svg";
import svgPaths from "../../../imports/BrandStrengths/svg-wgo26ydiex";

type IconProps = { className?: string };

const ORANGE = "#F25B17";

/** Ready Financing — the coin / cycle mark. */
export function ReadyFinancingIcon({ className = "" }: IconProps) {
  return <img src={svgReadyFinancing} alt="Ready Financing" className={`object-contain ${className}`} />;
}

/** Offshore Focus — the platform mark. */
export function OffshoreFocusIcon({ className = "" }: IconProps) {
  return <img src={svgOffshoreFocus} alt="Offshore Focus" className={`object-contain ${className}`} />;
}

/** Anywhere Delivery — the vessel mark. */
export function AnywhereDeliveryIcon({ className = "" }: IconProps) {
  return <img src={svgAnywhereDelivery} alt="Anywhere Delivery" className={`object-contain ${className}`} />;
}

/** Fair Pricing — the bar / scale mark. */
export function FairPricingIcon({ className = "" }: IconProps) {
  return <img src={svgFairPricing} alt="Fair Pricing" className={`object-contain ${className}`} />;
}

/** Direct Access — the phone / person mark. */
export function DirectAccessIcon({ className = "" }: IconProps) {
  return <img src={svgIsolationMode} alt="Direct Access" className={`object-contain ${className}`} />;
}

/** Project Know-How — the rosette mark. */
export function ProjectKnowHowIcon({ className = "" }: IconProps) {
  return <img src={svgProjectKnowHow} alt="Project Know How" className={`object-contain ${className}`} />;
}

export function PetalMark({ className = "" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 49.3 49" fill="none" aria-hidden>
      <g>
        <path d={svgPaths.p215d7d80} fill={ORANGE} transform="translate(16.07 41.01)" />
        <path d={svgPaths.p9342f00} fill={ORANGE} transform="translate(1 26.6)" />
        <path d={svgPaths.p18627c80} fill={ORANGE} transform="translate(0 6.27)" />
        <path d={svgPaths.p34123900} fill={ORANGE} transform="translate(17.18 0)" />
        <path d={svgPaths.p12a71400} fill={ORANGE} transform="translate(35.36 5.9)" />
        <path d={svgPaths.p14ceaa00} fill={ORANGE} transform="translate(35.88 26.39)" />
      </g>
    </svg>
  );
}
