import "./AboutPage.css";
import heroBg from "../../../public/img/hero.png";
import tankerImg from "../../../public/img/tanker.png";
import logoImg from "../../../public/img/oec-logo.png";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FillButton from "./FillButton";

interface AboutPageProps {
  onNavigate?: (page: "home" | "about" | "contact") => void;
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
        <div className="hero-fade"></div>
        <p className="hero-quote">
          Offshore operations can't afford a weak link in their fuel supply. OEC exists to be the one link that never breaks.
        </p>
      </section>

      {/* STORY */}
      <section className="white-panel">
        <hr className="divider" />
        <div className="story-grid">
          <div className="story-left">
            <p className="story-label">The story</p>
            <p className="story-heading">
              Since 2022, OEC has built its entire operating model around one
              job: getting fuel to offshore sites, on time, every time. Not
              adapted from a broader fuel business. Built for this, from day one.
            </p>
          </div>
          <div className="story-right">
            <img src={tankerImg} alt="OEC fuel tanker" />
          </div>
        </div>
        <hr className="divider" />
      </section>

      {/* WHAT SETS OEC APART */}
      <section className="white-panel">
        <div className="apart-grid">
          <div className="apart-left">
            <img src={logoImg} alt="OEC logo" />
          </div>
          <div className="apart-right">
            <h2 className="apart-heading">What sets OEC apart</h2>
            <p className="apart-body">
              Most fuel suppliers compete on the same things: port counts, years in
              business, headcount. None of that answers the question that
              actually matters offshore: when the plan changes at the last
              minute, who picks up the phone and makes the call?
              <br />
              <br />
              OEC is built around that question.
            </p>
            <ul className="apart-items">
              <li>No call center layers between you and a decision.</li>
              <li>
                No attention split across fleets. Offshore is our whole business.
              </li>
              <li>
                No distractions. Just fuel, where it needs to be, when it needs
                to be there.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="stats-bar">
        <div className="stats-inner">
          <div className="stat">Founded in 2022</div>
          <div className="stat">Headquartered in Singapore</div>
          <div className="stat">Offshore upstream fuel supply, exclusively</div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2 className="cta-heading">
            Same principle, every single time. Reach out when it matters.
          </h2>
          <FillButton
            squareSize={40}
            height={48}
            width={72}
            squareColor="#f25b17"
            restBg="#ffffff"
            text=""
            icon={
              <svg
                width="26"
                height="18"
                viewBox="0 0 26 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 9H25M25 9L17 1M25 9L17 17"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
            onClick={() => onNavigate?.("contact")}
          />
        </div>
      </section>

      {/* FOOTER */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
