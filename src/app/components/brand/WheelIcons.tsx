import svgReadyFinancing from "/svg/Ready Financing.svg";
import svgOffshoreFocus from "/svg/offsshore focus.svg";
import svgAnywhereDelivery from "/svg/Anywhere Delivery.svg";
import svgFairPricing from "/svg/Fair pricing.svg";
import svgProjectKnowHow from "/svg/Project know how.svg";
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

/** Direct Access — the handshake mark. */
export function DirectAccessIcon({ className = "" }: IconProps) {
  return <img src={svgProjectKnowHow} alt="Direct Access" className={`object-contain ${className}`} />;
}

/** Project Know-How — the rosette mark. */
export function ProjectKnowHowIcon({ className = "" }: IconProps) {
  return <img src={svgProjectKnowHow} alt="Project Know How" className={`object-contain ${className}`} />;
}

/** The small six-petal mark that sits directly above the "Full Circle fuel" wordmark. */
export function PetalMark({ className = "" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 32 29" aria-hidden>
      <path d={svgPaths.p195f200} fill={ORANGE} transform="translate(10.4 23.6)" />
      <path d={svgPaths.p19d09f71} fill={ORANGE} transform="translate(0.7 15.2)" />
      <path d={svgPaths.p244b6800} fill={ORANGE} transform="translate(0 3.7)" />
      <path d={svgPaths.p2fdba380} fill={ORANGE} transform="translate(11 0)" />
      <path d={svgPaths.pd806500} fill={ORANGE} transform="translate(22.8 3.2)" />
      <path d={svgPaths.p22eac800} fill={ORANGE} transform="translate(23.2 15.2)" />
    </svg>
  );
}
