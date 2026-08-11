import { useEffect, useRef, useState, lazy, Suspense } from "react";
import HomePage from "@/imports/HomePage-1/index";
import Navbar from "@/app/components/Navbar";
import LoadingSpinner from "@/app/components/LoadingSpinner";
import Footer from "@/app/components/Footer";

const AboutPage = lazy(() => import("@/app/components/AboutPage"));
const ContactPage = lazy(() => import("@/app/components/ContactPage"));
const DeliveryPage = lazy(() => import("@/app/components/DeliveryPage"));
const FullCircleFuelPage = lazy(() => import("@/app/components/FullCircleFuelPage"));
const PrivacyPolicyPage = lazy(() => import("@/app/components/PrivacyPolicyPage"));
const TermsConditionsPage = lazy(() => import("@/app/components/TermsConditionsPage"));

const DESIGN_WIDTH = 1280;
const DESIGN_HEIGHT = 3029;
const NAVBAR_HEIGHT = 110;

import RevealText from "@/app/components/RevealText";
import FillButton from "@/app/components/FillButton";

export type Page =
  | "home"
  | "about"
  | "contact"
  | "delivery"
  | "integrated-fuel-solution"
  | "privacy-policy"
  | "terms-and-conditions";

const getInitialPage = (): Page => {
  const hash = window.location.hash.replace("#", "");
  if (
    hash === "about" ||
    hash === "contact" ||
    hash === "delivery" ||
    hash === "integrated-fuel-solution" ||
    hash === "privacy-policy" ||
    hash === "terms-and-conditions"
  )
    return hash as Page;
  return "home";
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getInitialPage);
  const [initialLoading, setInitialLoading] = useState(true);
  const outerRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setInitialLoading(false), 450);
    return () => clearTimeout(timer);
  }, []);

  // Listen to URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      setCurrentPage(getInitialPage());
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Save scroll position per page to sessionStorage
  useEffect(() => {
    const saveScroll = () => {
      sessionStorage.setItem(`scroll_${currentPage}`, window.scrollY.toString());
    };
    window.addEventListener("scroll", saveScroll);
    return () => window.removeEventListener("scroll", saveScroll);
  }, [currentPage]);

  // Restore scroll position when page mounts or refreshes
  useEffect(() => {
    const saved = sessionStorage.getItem(`scroll_${currentPage}`);
    if (saved) {
      setTimeout(() => {
        window.scrollTo({ top: parseInt(saved, 10), behavior: "instant" as ScrollBehavior });
      }, 50);
    }
  }, [currentPage]);

  const handleNavigate = (page: Page) => {
    setCurrentPage(page);
    window.location.hash = page;
    sessionStorage.setItem(`scroll_${page}`, "0");
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  };

  useEffect(() => {
    if (currentPage !== "home") return;
    const outer = outerRef.current;
    const inner = innerRef.current;
    if (!outer || !inner) return;

    const apply = () => {
      const w = outer.getBoundingClientRect().width || window.innerWidth;
      if (!w) return;
      if (w <= 840) {
        inner.style.transform = "none";
        inner.style.width = "100%";
        inner.style.height = "auto";
        inner.style.position = "relative";
        inner.style.top = "0";
        outer.style.height = "auto";
        return;
      }
      inner.style.width = `${DESIGN_WIDTH}px`;
      inner.style.height = `${DESIGN_HEIGHT}px`;
      inner.style.position = "absolute";
      inner.style.top = "0px";
      const scale = Math.max(w / DESIGN_WIDTH, 0.45);
      inner.style.transformOrigin = "top left";
      inner.style.transform = `scale(${scale})`;
      outer.style.height = `${DESIGN_HEIGHT * scale}px`;
    };

    apply();
    window.addEventListener("resize", apply);
    return () => window.removeEventListener("resize", apply);
  }, [currentPage, initialLoading]);

  if (initialLoading) {
    return <LoadingSpinner />;
  }

  if (currentPage === "about") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <AboutPage onNavigate={handleNavigate} />
      </Suspense>
    );
  }

  if (currentPage === "contact") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <ContactPage onNavigate={handleNavigate} />
      </Suspense>
    );
  }

  if (currentPage === "delivery") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <DeliveryPage onNavigate={handleNavigate} />
      </Suspense>
    );
  }

  if (currentPage === "integrated-fuel-solution") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <FullCircleFuelPage onNavigate={handleNavigate} />
      </Suspense>
    );
  }

  if (currentPage === "privacy-policy") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <PrivacyPolicyPage onNavigate={handleNavigate} />
      </Suspense>
    );
  }

  if (currentPage === "terms-and-conditions") {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        <TermsConditionsPage onNavigate={handleNavigate} />
      </Suspense>
    );
  }

  return (
    <div className="home-page-container min-h-screen bg-oec-grey-bg flex flex-col pt-[72px] lg:pt-0">
      <Navbar onNavigate={handleNavigate} currentPage="home" />

      <main className="flex-grow">
        {/* outerRef: position:relative with JS-controlled height. overflow:clip hard-cuts anything outside. */}
        <div
          ref={outerRef}
          style={{
            position: "relative",
            width: "100%",
            overflowX: "clip",
          }}
        >
          {/* innerRef: position:absolute so it is OUT of document flow. */}
          <div
            ref={innerRef}
            style={{
              width: DESIGN_WIDTH,
              height: DESIGN_HEIGHT,
              transformOrigin: "top left",
              position: "relative",
              left: 0,
            }}
          >
            <HomePage onNavigate={handleNavigate} />
          </div>
        </div>

        {/* Desktop full-width CTA matching About Us */}
        <section className="hidden md:flex w-full bg-white px-6 md:px-[68px] py-[82px] md:py-[90px] flex-row items-center justify-between gap-8 z-10 relative">
          <h2 className="font-serif-brand font-normal text-oec-navy text-[40px] tracking-[-0.8px] leading-[1.25] max-w-[609px] m-0">
            <RevealText text="Same principle, every single time. Reach out when it matters." />
          </h2>
          <FillButton
            squareSize={40}
            height={48}
            width={170}
            squareColor="#f25b17"
            restBg="#f25b17"
            text="Get in touch"
            textColor="#ffffff"
            hoverTextColor="#ffffff"
            fontSize={16}
            fontFamily="'Merriweather', serif"
            fontWeight={400}
            letterSpacing="-0.32px"
            rounded={4}
            onClick={() => handleNavigate("contact")}
          />
        </section>
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
