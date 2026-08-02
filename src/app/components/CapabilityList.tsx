import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import RevealText from "./RevealText";

type Capability = {
  id: string;
  title: string;
  eyebrow: string;
  body: string;
};

const capabilities: Capability[] = [
  {
    id: "financing",
    title: `Financing that doesn't wait for payment terms`,
    eyebrow: "When the project runs before the payment does.",
    body: `Offshore contracts often run on milestone-based payment schedules that don't line up with when fuel is actually needed onsite. OEC bridges that gap directly, taking on the credit risk itself so a rig or vessel isn't left waiting on approvals it has no control over.`,
  },
  {
    id: "delivery",
    title: "Delivery that reaches wherever the site actually is",
    eyebrow: "When it has to arrive by truck, vessel, or pipeline, anywhere in the world.",
    body: `A drilling rig anchored offshore has different access constraints than a storage vessel moored near port, and OEC treats each as its own delivery problem. That's why the network includes chartered bunker tankers, road tankers, and DP-2 supply vessels, so the method gets chosen around the site, not the other way around.`,
  },
  {
    id: "pricing",
    title: `Pricing that holds when the market doesn't`,
    eyebrow: `When the market moves, the terms don't punish you for it.`,
    body: `Offshore projects can run for months, while fuel prices can move within days. OEC structures terms that account for that mismatch upfront, so a client isn't renegotiating mid-project every time the market moves.`,
  },
  {
    id: "planning",
    title: "Fuel planning treated with the same rigor as the drilling plan",
    eyebrow: "When the fuel plan is as complex as the drilling plan.",
    body: `A drilling schedule accounts for weather windows, equipment logistics, and contingency plans. OEC's fuel planning works the same way, built around the project's actual operational calendar, so fuel availability is never the variable that puts a drilling window at risk.`,
  },
  {
    id: "offshore",
    title: "Problems already solved, because offshore is the only focus",
    eyebrow: "When years of offshore focus mean this has already been solved before.",
    body: "Most fuel suppliers treat offshore as one segment among several. OEC works exclusively within it, which means the edge cases other suppliers encounter occasionally are ones OEC has already worked through as standard practice.",
  },
  {
    id: "decision-maker",
    title: "A decision-maker on the other end of every call",
    eyebrow: "When your call gets answered by someone who can actually decide.",
    body: `Most fuel suppliers route requests through account managers who then check with someone else before confirming changes. OEC keeps that authority with the person taking the call, so a time-sensitive request doesn't sit in an approval queue.`,
  },
];

function PlusCrossIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <motion.svg
      className="w-12 h-12 lg:w-16 lg:h-16"
      fill="none"
      viewBox="0 0 24 24"
      animate={{ rotate: isOpen ? 45 : 0 }}
      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
      aria-hidden
    >
      <path
        d="M12 3V21M3 12H21"
        stroke="#182d57"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </motion.svg>
  );
}

function CapabilityRow({
  capability,
  isOpen,
  onToggle,
  index,
}: {
  capability: Capability;
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      className={`w-full border-b border-[#575757]/40 cursor-pointer select-none overflow-hidden group transition-[background-color] duration-500 linear ${
        isOpen ? "bg-[#f7f6f2]" : "bg-white hover:bg-[#fafaf8]"
      }`}
      onClick={onToggle}
    >
      <div className="max-w-[1280px] mx-auto px-6 lg:px-[67px] grid grid-cols-1 lg:grid-cols-[440px_1fr_140px] grid-rows-[auto_auto] items-stretch">
        {/* ROW 1, COL 1: Main Serif Brand Heading */}
        <div className="lg:col-start-1 lg:row-start-1 pr-8 pt-9 lg:pt-12">
          <h2
            className="font-serif-brand font-normal text-oec-navy text-[28px] lg:text-[38px] leading-[1.24] tracking-[-0.02em] transition-colors duration-300 group-hover:text-oec-blue"
            style={{ fontVariationSettings: '"wdth" 100' }}
          >
            {capability.title}
          </h2>
        </div>

        {/* ROW 2, COL 1: Sans Subheading (Heading of Description - Always Visible) */}
        <div className="lg:col-start-1 lg:row-start-2 pr-8 mt-4 pb-9 lg:pb-12">
          <p className="font-sans-brand font-normal text-oec-body text-[17px] lg:text-[19px] tracking-[-0.015em] leading-[1.5]">
            {capability.eyebrow}
          </p>
        </div>

        {/* ROW 2, COL 2: Body Text (Reveals with RevealText component) */}
        <div className="lg:col-start-2 lg:row-start-2 lg:px-8 max-w-[580px] overflow-hidden mt-4 pb-9 lg:pb-12">
          <AnimatePresence initial={false}>
            {isOpen && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="font-sans-brand font-light text-oec-body text-[17px] lg:text-[19px] tracking-[-0.015em] leading-[1.5]">
                  <RevealText text={capability.body} wordDelay={0.02} />
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ROW 1-2, COL 3: Right Rail Icon (Full Height Continuous Vertical Line) */}
        <div className="hidden lg:flex lg:col-start-3 lg:row-span-2 justify-start items-center border-l border-[#575757]/40 pl-8 h-full py-9 lg:py-12">
          <PlusCrossIcon isOpen={isOpen} />
        </div>
      </div>
    </motion.article>
  );
}

export function CapabilityList() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const toggleRow = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="delivery" className="bg-white w-full border-t border-[#575757]/40">
      {capabilities.map((capability, index) => (
        <CapabilityRow
          key={capability.id}
          capability={capability}
          isOpen={openIndex === index}
          onToggle={() => toggleRow(index)}
          index={index}
        />
      ))}
    </section>
  );
}
