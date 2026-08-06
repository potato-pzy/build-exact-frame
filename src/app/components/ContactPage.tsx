import React, { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FillButton from "./FillButton";
import RevealText from "./RevealText";
import "./ContactPage.css";

interface ContactPageProps {
  onNavigate?: (page: "home" | "about" | "contact" | "delivery" | "full-circle-fuel") => void;
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
      <Navbar onNavigate={onNavigate} currentPage="contact" />

      <main>
        {/* ── Hero ── */}
        <section className="hero">
          <div>
            <h1>
              <RevealText text="Reach out to us" />
            </h1>
          </div>
          <div>
            <p className="hero-desc">
              <RevealText text="Whether it's financing terms, a delivery timeline, or a fuel plan that needs to move fast, the person who picks this up can act on it directly. There's no queue to sit in and no case number to wait on. Fill in what you can below, and someone with the authority to answer will get back to you." />
            </p>
          </div>
        </section>

        {/* ── Contact grid ── */}
        <div className="contact-grid">

          {/* ── Info column ── */}
          <div className="info-col">

            {/* DESKTOP: original text blocks */}
            <div className="info-block">
              <p className="info-label"><RevealText text="Office:" /></p>
              <p className="info-value">
                <RevealText text="72 Circular Road, #02-01," />
                <br />
                <RevealText text="Singapore, 049426" />
              </p>
            </div>
            <div className="info-block">
              <p className="info-label"><RevealText text="Call us:" /></p>
              <p className="info-value"><RevealText text="+65 9170 1934" /></p>
            </div>
            <div className="info-block">
              <p className="info-label"><RevealText text="Mail:" /></p>
              <p className="info-value"><RevealText text="rc@offshore-bunkers.com" /></p>
            </div>

            {/* MOBILE ONLY: icon card */}
            <div className="contact-info-card">
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                    <circle cx="12" cy="9" r="2.5"/>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <p className="contact-info-label">Office</p>
                  <p className="contact-info-value">72 Circular Road, #02–01,<br />Singapore, 049426</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.6 3.38 2 2 0 0 1 3.56 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.18 6.18l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <p className="contact-info-label">Call us</p>
                  <p className="contact-info-value">+65 9170 1934</p>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                  </svg>
                </div>
                <div className="contact-info-text">
                  <p className="contact-info-label">Mail</p>
                  <p className="contact-info-value">rc@offshore-bunkers.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* ── Form column ── */}
          <div className="form-col">
            {submitted ? (
              <div style={{ padding: "48px 0" }}>
                <p style={{ fontFamily: "'Merriweather', serif", fontSize: 24, color: "#182d57", letterSpacing: "-0.48px", margin: 0 }}>
                  <RevealText text="We've received your message." />
                </p>
                <p style={{ fontFamily: "'Merriweather Sans', sans-serif", fontWeight: 300, fontSize: 16, color: "#575757", marginTop: 12, letterSpacing: "-0.32px" }}>
                  <RevealText text="Someone with the authority to answer will get back to you shortly." />
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                {/* Row 1: Name + Email */}
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="contact-name">NAME</label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <div className="field-line" />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-email">EMAIL ADDRESS</label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      placeholder="Your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <div className="field-line" />
                  </div>
                </div>

                {/* Row 2: Company + Phone */}
                <div className="form-row">
                  <div className="field">
                    <label htmlFor="contact-company">COMPANY NAME</label>
                    <input
                      id="contact-company"
                      name="company"
                      type="text"
                      placeholder="Your company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <div className="field-line" />
                  </div>
                  <div className="field">
                    <label htmlFor="contact-phone">
                      PHONE <span>(optional)</span>
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                    <div className="field-line" />
                  </div>
                </div>

                {/* Query */}
                <div className="field">
                  <label htmlFor="contact-query">QUERY</label>
                  <textarea
                    id="contact-query"
                    name="query"
                    rows={3}
                    placeholder="How can we help you?"
                    value={formData.query}
                    onChange={handleChange}
                    required
                  />
                  <div className="field-line" />
                </div>

                {/* Submit */}
                <div className="submit-row">
                  {/* Desktop: original FillButton */}
                  <div className="desktop-submit">
                    <FillButton
                      type="submit"
                      squareSize={36}
                      height={44}
                      width={150}
                      squareColor="#f25b17"
                      restBg="transparent"
                      text="Submit"
                      textColor="#f25b17"
                      hoverTextColor="#ffffff"
                      fontSize={16}
                      fontFamily="'Merriweather', serif"
                      fontWeight={400}
                      letterSpacing="-0.32px"
                    />
                  </div>
                  {/* Mobile: full-width orange button */}
                  <button type="submit" className="contact-submit-btn">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <line x1="5" y1="12" x2="19" y2="12"/>
                      <polyline points="12 5 19 12 12 19"/>
                    </svg>
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </main>

      {/* Orange Banner */}
      <div className="orange-banner">
        <div className="orange-banner-inner">
          <p>
            <RevealText text="Whoever answers can make the call." />
          </p>
        </div>
      </div>

      <Footer onNavigate={onNavigate} />
    </div>
  );
}
