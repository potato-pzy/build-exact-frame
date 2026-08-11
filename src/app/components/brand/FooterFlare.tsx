import svgPaths from "../../../imports/BrandStrengths/svg-wgo26ydiex";

const stops = (
  <>
    <stop stopColor="#173E63" />
    <stop offset="1" stopColor="#1D2D55" />
  </>
);

/**
 * The six overlapping gradient petals that bleed across the bottom-right of the
 * footer. Purely decorative.
 */
export function FooterFlare({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="472.4" height="458.4" viewBox="0 0 472.4 458.4" fill="none" aria-hidden>
      <g transform="translate(153.8 383.1)">
        <path d={svgPaths.p191f2880} fill="url(#oec-flare-1)" />
      </g>
      <g transform="translate(9.7 248.9)">
        <path d={svgPaths.p30fe8300} fill="url(#oec-flare-2)" />
      </g>
      <g transform="translate(0 58.1)">
        <path d={svgPaths.p371ae6c1} fill="url(#oec-flare-3)" />
      </g>
      <g transform="translate(164.5 0)">
        <path d={svgPaths.p30e4cc80} fill="url(#oec-flare-4)" />
      </g>
      <g transform="translate(338.8 55)">
        <path d={svgPaths.p26c94300} fill="url(#oec-flare-5)" />
      </g>
      <g transform="translate(343.9 247.2)">
        <path d={svgPaths.p1046b800} fill="url(#oec-flare-6)" />
      </g>
      <defs>
        <linearGradient gradientUnits="userSpaceOnUse" id="oec-flare-1" x1="76.97" x2="76.97" y1="0" y2="75.332">
          {stops}
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="oec-flare-2" x1="61.93" x2="61.93" y1="0" y2="155.718">
          {stops}
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="oec-flare-3" x1="64.22" x2="64.22" y1="0" y2="154.217">
          {stops}
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="oec-flare-4" x1="76.97" x2="76.97" y1="0" y2="75.332">
          {stops}
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="oec-flare-5" x1="61.93" x2="61.93" y1="0" y2="155.717">
          {stops}
        </linearGradient>
        <linearGradient gradientUnits="userSpaceOnUse" id="oec-flare-6" x1="64.22" x2="64.22" y1="0" y2="154.217">
          {stops}
        </linearGradient>
      </defs>
    </svg>
  );
}
