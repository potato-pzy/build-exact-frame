import "./Navbar.css";
import { Layer } from "@/imports/HomePage-1/index";

interface NavbarProps {
  onNavigate?: (page: "home" | "about" | "contact" | "delivery" | "full-circle-fuel") => void;
  currentPage?: "home" | "about" | "contact" | "delivery" | "full-circle-fuel";
}

export default function Navbar({ onNavigate, currentPage }: NavbarProps) {
  return (
    <nav className="main-navbar">
      <div className="nav-inner">
        <div
          className="logo"
          onClick={() => onNavigate?.("home")}
        >
          <Layer />
        </div>
        <ul className="nav-links">
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("home");
              }}
            >
              HOME
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("about");
              }}
            >
              ABOUT
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("delivery");
              }}
            >
              DELIVERY
            </a>
          </li>
          <li>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("full-circle-fuel");
              }}
            >
              FULL CIRCLE FUEL
            </a>
          </li>
          <li>
            <a
              href="#"
              className={`btn-contact-wipe ${currentPage === "contact" ? "active" : ""}`}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("contact");
              }}
            >
              <span className="btn-contact-bg-text">CONTACT</span>
              <div className="btn-contact-wipe-layer">
                <span className="btn-contact-wipe-text">CONTACT</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
