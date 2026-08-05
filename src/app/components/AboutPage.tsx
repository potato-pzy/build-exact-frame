import "./AboutPage.css";
import heroBg from "../../../public/img/hero.webp";
import tankerImg from "../../../public/img/tanker.webp";
import maskGroupImg from "../../../public/img/Mask group.jpg";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FillButton from "./FillButton";
import RevealText from "./RevealText";

interface AboutPageProps {
  onNavigate?: (page: "home" | "about" | "contact" | "delivery" | "full-circle-fuel") => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="about-page-container">
      {/* NAV */}
      <Navbar onNavigate={onNavigate} currentPage="about" />

      {/* HERO */}
      <section className="hero">
        <img
          className="hero-bg"
          src={heroBg}
          alt="Offshore oil platform at sea"
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
              <img src={tankerImg} alt="OEC offshore fuel tanker vessel operations" />
            </div>
          </div>
        </div>
        <hr className="divider" />
      </section>

      {/* WHAT SETS OEC APART */}
      <section className="white-panel">
        <div className="apart-grid">
          <div className="apart-left">
            <div className="polygon-img-container">
              <img src={maskGroupImg} alt="Offshore Energy Consultants OEC Building" />
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
                <RevealText text="No call center layers between you and a decision." />
              </li>
              <li>
                <RevealText text="No attention split across fleets. Offshore is our whole business." />
              </li>
              <li>
                <RevealText text="No distractions. Just fuel, where it needs to be, when it needs to be there." />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="stats-inner">
          <div className="stat">
            <RevealText text="Founded in 2022" />
          </div>
          <div className="stat">
            <RevealText text="Headquartered in Singapore" />
          </div>
          <div className="stat">
            <RevealText text="Offshore upstream fuel supply, exclusively" />
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
            width={180}
            squareColor="#f25b17"
            restBg="#ffffff"
            text="Contact Us"
            textColor="#182d57"
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

