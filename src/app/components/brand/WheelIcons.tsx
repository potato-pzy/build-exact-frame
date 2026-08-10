import svgReadyFinancing from "/svg/1.svg";
import svgOffshoreFocus from "/svg/5-1.svg";
import svgAnywhereDelivery from "/svg/2.svg";
import svgFairPricing from "/svg/3.svg";
import svgProjectKnowHow from "/svg/4.svg";
import svgIsolationMode from "/svg/5.svg";
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

/** The small six-petal mark that sits directly above the "Integrated Fuel Solutions" wordmark. */
export function PetalMark({ className = "" }: IconProps) {
  return (
    <svg className={className} width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <circle
        cx="16"
        cy="16"
        r="12"
        stroke={ORANGE}
        strokeWidth="3.5"
        strokeDasharray="4.5 4.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
