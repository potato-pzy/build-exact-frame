import { useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import RevealText from "./RevealText";

export type Page =
  | "home"
  | "about"
  | "contact"
  | "delivery"
  | "integrated-fuel-solution"
  | "privacy-policy"
  | "terms-and-conditions";

interface TermsConditionsPageProps {
  onNavigate?: (page: Page) => void;
}

export default function TermsConditionsPage({ onNavigate }: TermsConditionsPageProps) {
  useEffect(() => {
    document.title = "Terms & Conditions | Offshore Energy Consultants (OEC)";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="terms-conditions-page min-h-screen bg-[#F4F6F8] text-[#23303A] flex flex-col font-['Merriweather_Sans',sans-serif]">
      {/* Shared Header Navbar */}
      <Navbar onNavigate={onNavigate} currentPage="terms-and-conditions" />

      {/* Hero Banner Section */}
      <div className="bg-[#071D30] text-white pt-[120px] pb-[50px] px-6 md:px-[68px]">
        <div className="max-w-[1280px] mx-auto">
          <div className="w-[54px] h-[4px] bg-[#f25b17] mb-[20px]" />
          <h1 className="font-serif-brand font-bold text-[32px] md:text-[40px] text-white mb-[12px] leading-tight">
            <RevealText text="Terms & Conditions" />
          </h1>
          <p className="text-[#B9C6CF] text-[15px] font-light">
            Effective date: March 2026 &nbsp;|&nbsp; Offshore Energy Consultants Pte Ltd
          </p>
        </div>
      </div>

      {/* Main Content Area */}
      <main className="flex-grow w-full max-w-[1280px] mx-auto px-6 md:px-[68px] py-[50px]">
        {/* Notice Box */}
        <div className="bg-[#FFF3EC] border-l-4 border-[#f25b17] p-5 mb-[40px] text-[15px] text-[#5B6B77] leading-relaxed rounded-r-md">
          These terms govern use of this website only. They do not form part of, and do not replace, the
          separate written agreement that governs any actual fuel supply, pricing, or delivery arrangement
          between OEC and a client.
        </div>

        {/* Section 1 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">1.</span> Acceptance of These Terms
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            By accessing or using this website, you agree to these Terms &amp; Conditions in full. If you do not agree with any part of them, do not use this website.
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">2.</span> About Offshore Energy Consultants
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            This website is operated by <strong className="text-[#0A2A43]">Offshore Energy Consultants Pte Ltd</strong> (OEC), a company incorporated in Singapore, UEN 202237571W, with its registered office at 72 Circular Road, #02-01, Singapore 049426.
          </p>
        </section>

        {/* Section 3 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">3.</span> What This Website Is, and Isn&apos;t
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A] mb-3">
            This website describes OEC&apos;s marine fuel supply and bunkering capabilities, including VLSFO, HSFO, and MGO, delivered across Singapore, Malaysia, Vietnam, Thailand, the Middle East, and the Americas.
          </p>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            Nothing on this website is an offer to sell fuel, a quotation, or a binding proposal. Every supply, pricing, and delivery arrangement is agreed separately and in writing between OEC and the client, and that written agreement, not this website, governs the transaction.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">4.</span> Use of This Website
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A] mb-3">
            You agree to use this website only for lawful purposes connected to genuine business enquiries. You must not:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[16px] text-[#23303A] pl-2">
            <li>Attempt to gain unauthorised access to any part of this website or its underlying systems</li>
            <li>Copy, scrape, or reproduce the content of this website for a competing service</li>
            <li>Introduce viruses, malicious code, or anything designed to disrupt the website</li>
            <li>Use the website in any way that could damage OEC&apos;s reputation or operations</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">5.</span> Accuracy of Information
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            OEC keeps this website up to date, but fuel grades, service regions, capabilities, and figures shown here can change. Always confirm current details directly with OEC before making a decision based on this website. OEC does not guarantee that any information on this site is complete, current, or free of error.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">6.</span> Intellectual Property
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            The OEC name, the six-fragment mark, the wordmark, the &quot;Full Circle Fuel&quot; name and framework, and all text, graphics, and design on this website belong to OEC or its licensors. Nothing on this site may be copied, reproduced, or reused without OEC&apos;s prior written permission.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">7.</span> Third-Party Links
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            Where this website links to third-party sites, that link is provided for convenience only. OEC does not control, endorse, or take responsibility for the content of any third-party site.
          </p>
        </section>

        {/* Section 8 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">8.</span> Limitation of Liability
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            To the fullest extent permitted under Singapore law, OEC is not liable for any loss or damage arising from your use of, or reliance on, this website. This limitation does not affect or reduce any liability OEC holds under a separately signed fuel supply agreement with a client.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">9.</span> Indemnity
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            You agree to indemnify OEC against any claim, loss, or expense arising from your misuse of this website or breach of these terms.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">10.</span> Governing Law and Jurisdiction
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            These terms are governed by the laws of Singapore. Any dispute arising from these terms is subject to the exclusive jurisdiction of the courts of Singapore.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">11.</span> Changes to These Terms
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            OEC may update these terms at any time. The effective date at the top of this page will reflect the most recent update. Continued use of the website after a change means you accept the revised terms.
          </p>
        </section>

        {/* Section 12 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">12.</span> Contact
          </h2>
          <div className="bg-white border border-[#DDE3E8] rounded-md p-6 text-[15px] shadow-sm">
            <span className="font-serif-brand font-bold text-[#0A2A43] block text-[17px] mb-2">
              Offshore Energy Consultants Pte Ltd
            </span>
            72 Circular Road, #02-01, Singapore 049426<br />
            UEN: 202237571W<br />
            Phone: +65 9170 1934<br />
            Email:{" "}
            <a href="mailto:rc@offshore-bunkers.com" className="text-[#f25b17] underline hover:text-[#de5c35]">
              rc@offshore-bunkers.com
            </a>
          </div>
        </section>
      </main>

      {/* Shared Footer */}
      <Footer onNavigate={onNavigate} />
    </div>
  );
}
