import { useState, useEffect } from "react";
import "./Navbar.css";
import { Logo } from "./brand/Logo";

export type Page =
  | "home"
  | "about"
  | "contact"
  | "delivery"
  | "integrated-fuel-solution"
  | "privacy-policy"
  | "terms-and-conditions";

interface NavbarProps {
  onNavigate?: (page: Page) => void;
  currentPage?: Page;
}

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: "HOME", page: "home" },
  { label: "ABOUT", page: "about" },
  { label: "DELIVERY", page: "delivery" },
  { label: "INTEGRATED FUEL SOLUTION", page: "integrated-fuel-solution" },
];

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setMenuOpen(false);
    onNavigate?.(page);
  };

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Mobile Backdrop */}
      <div
        className={`nav-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <nav className="main-navbar">
        <div className="nav-inner">
          <div className="logo" onClick={() => handleNavClick("home")}>
            <Logo variant="dark" className="h-[40px] md:h-[49px] w-auto shrink-0" />
          </div>

          {/* Desktop Links */}
          <ul className="nav-links">
            {NAV_ITEMS.map(({ label, page }) => (
              <li key={page}>
                <a
                  href="#"
                  className={currentPage === page ? "active" : ""}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(page);
                  }}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#"
                className={`btn-contact-wipe ${currentPage === "contact" ? "active" : ""}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick("contact");
                }}
              >
                <span className="btn-contact-bg-text">CONTACT</span>
                <div className="btn-contact-wipe-layer">
                  <span className="btn-contact-wipe-text">CONTACT</span>
                </div>
              </a>
            </li>
          </ul>

          {/* Mobile Hamburger */}
          <button
            className={`nav-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span className="hb-line" />
            <span className="hb-line" />
            <span className="hb-line" />
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <div className={`nav-drawer ${menuOpen ? "open" : ""}`}>
        <div className="nav-drawer-header">
          <button
            className="nav-drawer-close-btn"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="nav-drawer-inner">
          <ul className="nav-drawer-links">
            {NAV_ITEMS.map(({ label, page }, i) => (
              <li key={page}>
                <button
                  className={`nav-drawer-link ${currentPage === page ? "active" : ""}`}
                  onClick={() => handleNavClick(page)}
                >
                  <span className="drawer-link-number">{String(i + 1).padStart(2, "0")}</span>
                  <span className="drawer-link-label">{label}</span>
                </button>
              </li>
            ))}
          </ul>
          <div className="nav-drawer-cta">
            <button
              className={`nav-drawer-cta-btn ${currentPage === "contact" ? "active" : ""}`}
              onClick={() => handleNavClick("contact")}
            >
              Get in Touch
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
