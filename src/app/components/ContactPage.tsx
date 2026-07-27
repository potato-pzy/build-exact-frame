import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FillButton from "./FillButton";
import "./ContactPage.css";

interface ContactPageProps {
  onNavigate?: (page: "home" | "about" | "contact") => void;
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    query: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="contact-page-container">
      {/* Shared Navbar */}
      <Navbar onNavigate={onNavigate} currentPage="contact" />

      {/* Main Content */}
      <main>
        {/* Hero */}
        <section className="hero">
          <div>
            <h1>Reach out to us</h1>
          </div>
          <div>
            <p className="hero-desc">
              Whether it's financing terms, a delivery timeline, or a fuel plan that
              needs to move fast, the person who picks this up can act on it directly.
              There's no queue to sit in and no case number to wait on. Fill in what
              you can below, and someone with the authority to answer will get back
              to you.
            </p>
          </div>
        </section>

        {/* Contact info + form */}
        <div className="contact-grid">
          {/* Info */}
          <div className="info-col">
            <div className="info-block">
              <p className="info-label">Office:</p>
              <p className="info-value">
                72 Circular Road, #02-01,
                <br />
                Singapore, 049426
              </p>
            </div>
            <div className="info-block">
              <p className="info-label">Call us:</p>
              <p className="info-value">+65 9170 1934</p>
            </div>
            <div className="info-block">
              <p className="info-label">Mail:</p>
              <p className="info-value">rc@offshore-bunkers.com.</p>
            </div>
          </div>

          {/* Form */}
          <div className="form-col">
            {submitted ? (
              <div style={{ padding: "48px 0" }}>
                <p
                  style={{
                    fontFamily: "'Merriweather', serif",
                    fontSize: 24,
                    color: "#182d57",
                    letterSpacing: "-0.48px",
                    margin: 0,
                  }}
                >
                  We've received your message.
                </p>
                <p
                  style={{
                    fontFamily: "'Merriweather Sans', sans-serif",
                    fontWeight: 300,
                    fontSize: 16,
                    color: "#575757",
                    marginTop: 12,
                    letterSpacing: "-0.32px",
                  }}
                >
                  Someone with the authority to answer will get back to you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="contact-name">NAME</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <div className="field-line"></div>
                  </div>
                  <div className="field">
                    <label htmlFor="contact-email">EMAIL ADDRESS</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="field-line"></div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="contact-company">COMPANY NAME</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <div className="field-line"></div>
                  </div>
                  <div className="field">
                    <label htmlFor="contact-phone">
                      PHONE <span>(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <div className="field-line"></div>
                  </div>
                </div>
                <div className="field">
                  <label htmlFor="contact-query">QUERY</label>
                  <textarea
                    id="contact-query"
                    name="query"
                    rows={3}
                    value={formData.query}
                    onChange={handleChange}
                    required
                  ></textarea>
                  <div className="field-line"></div>
                </div>

                <div className="submit-row">
                  <FillButton
                    type="submit"
                    squareSize={30}
                    height={32}
                    width={145}
                    squareColor="#F25B17"
                    restBg="#f4f4f4"
                    text="Submit"
                    textColor="#F25B17"
                    hoverTextColor="#ffffff"
                    fontSize={16}
                    fontFamily="'Merriweather', serif"
                    fontWeight={500}
                    icon={
                      <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                        <path
                          d="M1 5h10M7 1l4 4-4 4"
                          stroke="white"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    }
                  />
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Orange Banner */}
      <div className="orange-banner">
        <div className="orange-banner-inner">
          <p>Whoever answers can make the call.</p>
        </div>
      </div>

      {/* Shared Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
