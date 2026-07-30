import "./Navbar.css";
import { Layer } from "@/imports/HomePage-1/index";

interface NavbarProps {
  onNavigate?: (page: "home" | "about" | "contact") => void;
  currentPage?: "home" | "about" | "contact";
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
              style={{ fontWeight: currentPage === "home" ? 700 : 300 }}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("home");
              }}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ fontWeight: currentPage === "about" ? 700 : 300 }}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("about");
              }}
            >
              About
            </a>
          </li>
          <li>
            <a href="#">Delivery</a>
          </li>
          <li>
            <a href="#">Full Circle Fuel</a>
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
              {/* Rest state background & text */}
              <span className="btn-contact-bg-text">Contact</span>
              {/* Wipe layer that expands on hover */}
              <span className="btn-contact-wipe-layer">
                <span className="btn-contact-wipe-text">Contact</span>
              </span>
              {/* The vertical scanner wipe line */}
              <span className="btn-contact-wipe-bar" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
