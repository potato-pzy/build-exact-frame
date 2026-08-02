import svgPaths from "../../../imports/BrandStrengths/svg-wgo26ydiex";

type IconProps = { className?: string };

const ORANGE = "#F25B17";

/** Ready Financing — the coin / cycle mark. */
export function ReadyFinancingIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 74.9996 74" aria-hidden>
      <path d={svgPaths.p39e71000} fill={ORANGE} />
      <path d={svgPaths.p23c9bc00} fill={ORANGE} />
    </svg>
  );
}

/** Offshore Focus — the platform mark. */
export function OffshoreFocusIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 94 112" aria-hidden>
      <g clipPath="url(#oec-clip-offshore)">
        <path d={svgPaths.p3c5ef6d0} fill={ORANGE} />
        <path d={svgPaths.pec3d700} fill={ORANGE} />
        <path d={svgPaths.p16571400} fill={ORANGE} />
      </g>
      <defs>
        <clipPath id="oec-clip-offshore">
          <rect fill="white" height="112" width="94" />
        </clipPath>
      </defs>
    </svg>
  );
}

/** Anywhere Delivery — the vessel mark. */
export function AnywhereDeliveryIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 73.0002 88.9939" aria-hidden>
      <path d={svgPaths.p167ab480} fill={ORANGE} />
      <path d={svgPaths.p1c87de80} fill={ORANGE} />
      <path d={svgPaths.p13256900} fill={ORANGE} />
      <path d={svgPaths.p32675230} fill={ORANGE} />
      <path d={svgPaths.p2394a6c0} fill={ORANGE} />
      <path d={svgPaths.p2441900} fill={ORANGE} />
      <path d={svgPaths.p37a0ff00} fill={ORANGE} />
      <path d={svgPaths.p15495200} fill={ORANGE} />
      <path d={svgPaths.p26fa2380} fill={ORANGE} />
      <path d={svgPaths.p65d7a40} fill={ORANGE} />
      <path d={svgPaths.p232c1d80} fill={ORANGE} />
    </svg>
  );
}

/** Fair Pricing — the bar / scale mark. */
export function FairPricingIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 75 85" aria-hidden>
      <g clipPath="url(#oec-clip-pricing)">
        <path d={svgPaths.p2a68a770} fill={ORANGE} />
        <path d={svgPaths.p9e83080} fill={ORANGE} />
      </g>
      <defs>
        <clipPath id="oec-clip-pricing">
          <rect fill="white" height="85" width="75" />
        </clipPath>
      </defs>
    </svg>
  );
}

/** Direct Access — the handshake mark. */
export function DirectAccessIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 83 79" aria-hidden>
      <g clipPath="url(#oec-clip-access)">
        <path d={svgPaths.p1b691800} fill={ORANGE} />
        <path d={svgPaths.p32cc17f1} fill={ORANGE} />
        <path d={svgPaths.pc2af670} fill={ORANGE} />
        <path d={svgPaths.p4d14a80} fill={ORANGE} />
        <path d={svgPaths.p11164580} fill={ORANGE} />
        <path d={svgPaths.p3a433500} fill={ORANGE} />
        <path d={svgPaths.p39077f00} fill={ORANGE} />
      </g>
      <defs>
        <clipPath id="oec-clip-access">
          <rect fill="white" height="79" width="83" />
        </clipPath>
      </defs>
    </svg>
  );
}

/** Project Know-How — the rosette mark. */
export function ProjectKnowHowIcon({ className = "" }: IconProps) {
  return (
    <svg className={className} fill="none" viewBox="0 0 74.5044 97.1215" aria-hidden>
      <path d={svgPaths.p5311af0} fill={ORANGE} />
      <path d={svgPaths.p1f2f9d00} fill={ORANGE} />
      <path d={svgPaths.p101ba180} fill={ORANGE} />
    </svg>
  );
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
