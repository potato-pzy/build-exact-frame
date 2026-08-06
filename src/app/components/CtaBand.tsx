import FillButton from "./FillButton";

interface CtaBandProps {
  onNavigate?: (page: "home" | "about" | "contact" | "delivery" | "full-circle-fuel") => void;
}

export function CtaBand({ onNavigate }: CtaBandProps) {
  return (
    <section id="contact" className="bg-oec-coral">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[67px] py-[40px] lg:py-[69px] flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
        <p
          className="font-serif-brand font-normal text-oec-light text-[clamp(1.25rem,3.5vw,28px)] leading-[1.35] lg:text-[40px] lg:leading-[normal] tracking-[-0.8px] max-w-[631px]"
          style={{ fontVariationSettings: '"wdth" 100' }}
        >
          Every capability, one call away.
          <br aria-hidden />
          Reach out when it matters.
        </p>

        <div className="self-start lg:self-auto lg:mb-[27px]">
          <FillButton
            squareSize={40}
            height={48}
            width={180}
            squareColor="#182d57"
            restBg="transparent"
            text="Contact Us"
            textColor="#ffffff"
            hoverTextColor="#ffffff"
            fontSize={16}
            fontFamily="'Merriweather', serif"
            fontWeight={400}
            letterSpacing="-0.32px"
            rounded={4}
            onClick={() => onNavigate?.("contact")}
          />
        </div>
      </div>
    </section>
  );
}
