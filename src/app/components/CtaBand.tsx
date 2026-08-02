import svgPaths from "../../imports/BrandStrengths/svg-wgo26ydiex";

export function CtaBand() {
  return (
    <section id="contact" className="bg-oec-coral">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[67px] py-[69px] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">
        <p
          className="font-serif-brand font-normal text-oec-light text-[28px] leading-[1.35] lg:text-[40px] lg:leading-[normal] tracking-[-0.8px] max-w-[631px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Every capability, one call away.
          <br aria-hidden />
          Reach out when it matters.
        </p>

        <a
          href="mailto:hello@offshoreenergyconsultants.com"
          className="group flex items-center gap-[10px] shrink-0 self-start lg:self-auto lg:mb-[27px]"
        >
          <span className="bg-oec-navy rounded-[4px] h-[26px] w-[30px] flex items-center justify-center">
            <svg
              className="w-[10.5px] h-[7.36px] transition-transform group-hover:translate-x-[2px]"
              fill="none"
              viewBox="0 0 10.5 7.36396"
              aria-hidden
            >
              <path d={svgPaths.pb3a500} fill="#F1F1F1" />
            </svg>
          </span>
          <span
            className="font-serif-brand font-light text-oec-light text-[16px] tracking-[-0.32px]"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            Get in touch
          </span>
        </a>
      </div>
    </section>
  );
}
