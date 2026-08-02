import Navbar from "./Navbar";
import Footer from "./Footer";
import { Hero } from "./Hero";
import { FullCircleWheel } from "./FullCircleWheel";
import { CapabilityList } from "./CapabilityList";
import { CtaBand } from "./CtaBand";

interface FullCircleFuelPageProps {
  onNavigate?: (page: "home" | "about" | "contact" | "delivery" | "full-circle-fuel") => void;
}

export default function FullCircleFuelPage({ onNavigate }: FullCircleFuelPageProps) {
  return (
    <div className="full-circle-fuel-page-container min-h-screen bg-oec-grey-bg flex flex-col">
      {/* Shared Navbar */}
      <Navbar onNavigate={onNavigate} currentPage="full-circle-fuel" />

      {/* Main body of the page */}
      <main className="flex-grow">
        <Hero />
        <FullCircleWheel />
        <CapabilityList />
        <CtaBand />
      </main>

      {/* Shared Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
