import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "./AboutPage.css";
import heroBg from "../../../public/img/Bunker_tanker_underway_on_water_202607251138.webp";
import shipImg from "../../../public/img/ship.png";
import oecLogoImg from "../../../public/img/oec-logo.webp";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FillButton from "./FillButton";
import RevealText from "./RevealText";

interface AboutPageProps {
  onNavigate?: (page: "home" | "about" | "contact" | "delivery" | "full-circle-fuel") => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  const { scrollY } = useScroll();
  // Smooth parallax translation from -30px to 90px as user scrolls 0 to 600px
  const heroY = useTransform(scrollY, [0, 600], ["-30px", "90px"]);

  return (
    <div className="about-page-container">
      {/* NAV */}
      <Navbar onNavigate={onNavigate} currentPage="about" />

      {/* HERO */}
      <section className="hero">
        <motion.img
          className="hero-bg"
          src={heroBg}
          alt="Offshore oil platform at sea"
          style={{ y: heroY, scale: 1.25 }}
        />
      </section>

      {/* HERO QUOTE */}
      <section className="hero-quote-section">
        <h1 className="hero-quote">
          <RevealText text="Offshore operations can't afford a weak link in their fuel supply. OEC exists to be the one link that never breaks." />
        </h1>
      </section>

      {/* STORY */}
      <section className="white-panel">
        <div className="story-grid">
          <div className="story-left">
            <p className="story-label">
              <RevealText text="The story" />
            </p>
            <h2 className="story-heading">
              <RevealText text="Since 2022, OEC has built its entire operating model around one job: getting fuel to offshore sites, on time, every time. Not adapted from a broader fuel business. Built for this, from day one." />
            </h2>
          </div>
          <div className="story-right">
            <div className="tanker-img-container">
              <img
                src={shipImg}
                alt="OEC offshore fuel tanker vessel operations"
              />
            </div>
          </div>
        </div>
        <hr className="divider" />
      </section>

      {/* WHAT SETS OEC APART */}
      <section className="white-panel">
        <div className="apart-grid">
          <div className="apart-left">
            <div className="apart-img-container">
              <img
                src={oecLogoImg}
                alt="Offshore Energy Consultants OEC Building"
              />
            </div>
          </div>
          <div className="apart-right">
            <h2 className="apart-heading">
              <RevealText text="What sets OEC apart" />
            </h2>
            <div className="apart-body">
              <p style={{ marginBottom: "16px" }}>
                <RevealText text="Most fuel suppliers compete on the same things: port counts, years in business, headcount. None of that answers the question that actually matters offshore: when the plan changes at the last minute, who picks up the phone and makes the call?" />
              </p>
              <p>
                <RevealText text="OEC is built around that question." />
              </p>
            </div>
            <ul className="apart-items">
              <li>
                <span className="apart-check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#f25b17" />
                    <path d="M8 12L11 15L16 9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>No call center layers between you and a decision.</span>
              </li>
              <li>
                <span className="apart-check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#f25b17" />
                    <path d="M8 12L11 15L16 9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>No attention split across fleets. Offshore is our whole business.</span>
              </li>
              <li>
                <span className="apart-check-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="10" fill="#f25b17" />
                    <path d="M8 12L11 15L16 9" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span>No distractions. Just fuel, where it needs to be, when it needs to be there.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="stats-inner">
          <div className="stat">
            <div className="stat-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                <line x1="16" y1="2" x2="16" y2="6" />
                <line x1="8" y1="2" x2="8" y2="6" />
                <line x1="3" y1="10" x2="21" y2="10" />
              </svg>
            </div>
            <p className="stat-text">Founded in 2022</p>
          </div>

          <div className="stat-divider" />

          <div className="stat">
            <div className="stat-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <p className="stat-text">Headquartered in Singapore</p>
          </div>

          <div className="stat-divider" />

          <div className="stat">
            <div className="stat-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 21h20" />
                <path d="M19.38 20A11.6 11.6 0 0 0 21 14l-9-4-9 4c0 2.9.94 5.64 2.62 7.85" />
                <path d="M12 10V4" />
                <path d="M8 7h8" />
              </svg>
            </div>
            <p className="stat-text">Offshore upstream fuel supply, exclusively</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-heading">
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
            onClick={() => onNavigate?.("contact")}
          />
        </div>
      </section>

      {/* FOOTER */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}

