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
            <a
              href="#"
              style={{ fontWeight: currentPage === "delivery" ? 700 : 300 }}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("delivery");
              }}
            >
              Delivery
            </a>
          </li>
          <li>
            <a
              href="#"
              style={{ fontWeight: currentPage === "full-circle-fuel" ? 700 : 300 }}
              onClick={(e) => {
                e.preventDefault();
                onNavigate?.("full-circle-fuel");
              }}
            >
              Full Circle Fuel
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
