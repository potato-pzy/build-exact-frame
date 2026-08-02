import svgPaths from "../../../imports/BrandStrengths/svg-wgo26ydiex";

/**
 * The OEC lockup: an orange six-petal radial mark next to the wordmark.
 * The Figma frame carries two separately drawn copies — a dark wordmark in the
 * header (218x49) and a light one in the footer (254x56) — so each variant uses
 * its own path set rather than recolouring one.
 */
export function Logo({
  variant = "dark",
  className = "",
}: {
  variant?: "dark" | "light";
  className?: string;
}) {
  if (variant === "light") {
    return (
      <svg
        className={className}
        fill="none"
        viewBox="0 0 254 56"
        role="img"
        aria-label="Offshore Energy Consultants"
      >
        <g>
          <path d={svgPaths.p1922d800} fill="#F25B17" transform="translate(18.64 46.87)" />
          <path d={svgPaths.p28ea9d80} fill="#F25B17" transform="translate(1.17 30.4)" />
          <path d={svgPaths.p30ce0880} fill="#F25B17" transform="translate(0 7.17)" />
          <path d={svgPaths.p3ac0c780} fill="#F25B17" transform="translate(19.94 0)" />
          <path d={svgPaths.p8551e72} fill="#F25B17" transform="translate(41.05 6.74)" />
          <path d={svgPaths.p2801f480} fill="#F25B17" transform="translate(41.66 30.16)" />
        </g>
        <g transform="translate(73.94 7.31)">
          <path d={svgPaths.pb10ac40} fill="#F1F1F1" />
          <path d={svgPaths.p1e216800} fill="#F1F1F1" />
          <path d={svgPaths.p2103ba00} fill="#F1F1F1" />
          <path d={svgPaths.p1a207b00} fill="#F1F1F1" />
          <path d={svgPaths.p6b9c500} fill="#F1F1F1" />
          <path d={svgPaths.p227f79f0} fill="#F1F1F1" />
          <path d={svgPaths.p185c4240} fill="#F1F1F1" />
          <path d={svgPaths.p16b8d480} fill="#F1F1F1" />
          <path d={svgPaths.p10799380} fill="#F1F1F1" />
          <path d={svgPaths.p777bd00} fill="#F1F1F1" />
          <path d={svgPaths.p32d6d380} fill="#F1F1F1" />
          <path d={svgPaths.p127d8f00} fill="#F1F1F1" />
          <path d={svgPaths.p290a2900} fill="#F1F1F1" />
          <path d={svgPaths.p1a0f03c0} fill="#F1F1F1" />
          <path d={svgPaths.p33fa3980} fill="#F1F1F1" />
          <path d={svgPaths.p86d8c70} fill="#F1F1F1" />
          <path d={svgPaths.p17b24d70} fill="#F1F1F1" />
          <path d={svgPaths.p2dccbc00} fill="#F1F1F1" />
          <path d={svgPaths.p2fadd500} fill="#F1F1F1" />
          <path d={svgPaths.pfc0d200} fill="#F1F1F1" />
          <path d={svgPaths.p15444590} fill="#F1F1F1" />
          <path d={svgPaths.p2d10940} fill="#F1F1F1" />
          <path d={svgPaths.p7661380} fill="#F1F1F1" />
          <path d={svgPaths.p1358080} fill="#F1F1F1" />
          <path d={svgPaths.pdcfc900} fill="#F1F1F1" />
        </g>
      </svg>
    );
  }

  return (
    <svg
      className={className}
      fill="none"
      viewBox="0 0 218 49"
      role="img"
      aria-label="Offshore Energy Consultants"
    >
      <g>
        <path d={svgPaths.p215d7d80} fill="#F25B17" transform="translate(16.07 41.01)" />
        <path d={svgPaths.p9342f00} fill="#F25B17" transform="translate(1 26.6)" />
        <path d={svgPaths.p18627c80} fill="#F25B17" transform="translate(0 6.27)" />
        <path d={svgPaths.p34123900} fill="#F25B17" transform="translate(17.18 0)" />
        <path d={svgPaths.p12a71400} fill="#F25B17" transform="translate(35.36 5.9)" />
        <path d={svgPaths.p14ceaa00} fill="#F25B17" transform="translate(35.88 26.39)" />
      </g>
      <g transform="translate(63.75 8.93)">
        <path d={svgPaths.p21cdc300} fill="#182D57" />
        <path d={svgPaths.pa7ce080} fill="#182D57" />
        <path d={svgPaths.p17cdf600} fill="#182D57" />
        <path d={svgPaths.p88c6900} fill="#182D57" />
        <path d={svgPaths.p2753a400} fill="#182D57" />
        <path d={svgPaths.p3f18c100} fill="#182D57" />
        <path d={svgPaths.p3c642000} fill="#182D57" />
        <path d={svgPaths.p374ff400} fill="#182D57" />
        <path d={svgPaths.p35d4c00} fill="#182D57" />
        <path d={svgPaths.pd025e00} fill="#182D57" />
        <path d={svgPaths.p2b775380} fill="#182D57" />
        <path d={svgPaths.pfd7c580} fill="#182D57" />
        <path d={svgPaths.p169c08c0} fill="#182D57" />
        <path d={svgPaths.p3a039f00} fill="#182D57" />
        <path d={svgPaths.p23de0f00} fill="#182D57" />
        <path d={svgPaths.p7685200} fill="#182D57" />
        <path d={svgPaths.p2963b680} fill="#182D57" />
        <path d={svgPaths.p1945f200} fill="#182D57" />
        <path d={svgPaths.p14a86400} fill="#182D57" />
        <path d={svgPaths.pf16bc00} fill="#182D57" />
        <path d={svgPaths.p1803a9f0} fill="#182D57" />
        <path d={svgPaths.pcc93380} fill="#182D57" />
        <path d={svgPaths.pf82ba00} fill="#182D57" />
        <path d={svgPaths.p4ae3e00} fill="#182D57" />
        <path d={svgPaths.p31fc0100} fill="#182D57" />
      </g>
    </svg>
  );
}
