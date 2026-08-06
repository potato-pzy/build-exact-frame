import { useState, useEffect } from "react";
import "./Navbar.css";
import { Logo } from "./brand/Logo";

type Page = "home" | "about" | "contact" | "delivery" | "full-circle-fuel";

interface NavbarProps {
  onNavigate?: (page: Page) => void;
  currentPage?: Page;
}

const NAV_ITEMS: { label: string; page: Page }[] = [
  { label: "Home", page: "home" },
  { label: "About", page: "about" },
  { label: "Delivery", page: "delivery" },
  { label: "Full Circle Fuel", page: "full-circle-fuel" },
];

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleNavClick = (page: Page) => {
    setMenuOpen(false);
    onNavigate?.(page);
  };

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  // ESC to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`nav-backdrop ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      <nav className="main-navbar" aria-label="Main navigation">
        <div className="nav-inner">

          {/* ── Logo ── */}
          <button
            className="nav-logo"
            onClick={() => handleNavClick("home")}
            aria-label="Go to home"
          >
            <Logo variant="dark" className="nav-logo-svg" />
          </button>

          {/* ── Desktop nav links ── */}
          <ul className="nav-desktop-links" role="list">
            {NAV_ITEMS.map(({ label, page }) => (
              <li key={page}>
                <button
                  className={`nav-desktop-link ${currentPage === page ? "active" : ""}`}
                  onClick={() => handleNavClick(page)}
                >
                  {label}
                </button>
              </li>
            ))}
            <li>
              <button
                className={`nav-cta-btn ${currentPage === "contact" ? "active" : ""}`}
                onClick={() => handleNavClick("contact")}
              >
                Contact
              </button>
            </li>
          </ul>

          {/* ── Hamburger — mobile only ── */}
          <button
            className={`nav-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            <span className="hb-line" />
            <span className="hb-line" />
            <span className="hb-line" />
          </button>
        </div>
      </nav>

      {/* ── Mobile drawer ── */}
      <div className={`nav-drawer ${menuOpen ? "open" : ""}`} role="dialog" aria-modal="true" aria-label="Navigation menu">
        <div className="nav-drawer-inner">

          {/* Links */}
          <ul className="nav-drawer-links" role="list">
            {NAV_ITEMS.map(({ label, page }, i) => (
              <li key={page} className="nav-drawer-item" style={{ "--i": i } as React.CSSProperties}>
                <button
                  className={`nav-drawer-link ${currentPage === page ? "active" : ""}`}
                  onClick={() => handleNavClick(page)}
                >
                  <span className="drawer-link-number">{String(i + 1).padStart(2, "0")}</span>
                  <span className="drawer-link-label">{label}</span>
                  <svg className="drawer-link-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </button>
              </li>
            ))}
          </ul>

          {/* Contact CTA */}
          <div className="nav-drawer-cta" style={{ "--i": NAV_ITEMS.length } as React.CSSProperties}>
            <button
              className={`nav-drawer-cta-btn ${currentPage === "contact" ? "active" : ""}`}
              onClick={() => handleNavClick("contact")}
            >
              <span>Get in Touch</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>

          {/* Footer note */}
          <p className="nav-drawer-footer">Offshore Energy Consultants Pte Ltd</p>
        </div>
      </div>
    </>
  );
}
