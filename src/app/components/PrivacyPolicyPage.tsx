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

interface PrivacyPolicyPageProps {
  onNavigate?: (page: Page) => void;
}

export default function PrivacyPolicyPage({ onNavigate }: PrivacyPolicyPageProps) {
  useEffect(() => {
    document.title = "Privacy Policy | Offshore Energy Consultants (OEC)";
    window.scrollTo({ top: 0, behavior: "instant" as ScrollBehavior });
  }, []);

  return (
    <div className="privacy-policy-page min-h-screen bg-[#F4F6F8] text-[#23303A] flex flex-col font-['Merriweather_Sans',sans-serif]">
      {/* Shared Header Navbar */}
      <Navbar onNavigate={onNavigate} currentPage="privacy-policy" />

      {/* Hero Banner Section */}
      <div className="bg-[#182d57] text-white pt-[120px] pb-[50px] px-6 md:px-[68px]">
        <div className="max-w-[1280px] mx-auto">
          <h1 className="font-serif-brand font-bold text-[32px] md:text-[40px] text-white mb-[12px] leading-tight">
            <RevealText text="Privacy Policy" />
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
          This policy covers personal data collected through this website. It does not cover the commercial
          or banking information exchanged separately as part of a signed fuel supply agreement.
        </div>

        {/* Section 1 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">1.</span> Introduction
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            Offshore Energy Consultants Pte Ltd (OEC) respects your privacy. This policy explains what personal data we collect through this website, why we collect it, and how we protect it, in line with Singapore&apos;s Personal Data Protection Act (PDPA).
          </p>
        </section>

        {/* Section 2 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">2.</span> Who We Are
          </h2>
          <div className="text-[16px] leading-[1.7] text-[#23303A]">
            <strong className="text-[#0A2A43]">Offshore Energy Consultants Pte Ltd</strong><br />
            UEN: 202237571W<br />
            72 Circular Road, #02-01, Singapore 049426
          </div>
        </section>

        {/* Section 3 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">3.</span> What We Collect
          </h2>
          <div className="overflow-x-auto mb-4">
            <table className="w-full border-collapse text-[15px] my-2">
              <thead>
                <tr>
                  <th className="bg-white text-[#0A2A43] font-serif-brand font-bold text-left p-3 border border-[#DDE3E8] w-[30%]">Category</th>
                  <th className="bg-white text-[#0A2A43] font-serif-brand font-bold text-left p-3 border border-[#DDE3E8]">Examples</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="bg-white text-[#0A2A43] font-medium p-3 border border-[#DDE3E8]">Enquiry data</td>
                  <td className="bg-white text-[#5B6B77] p-3 border border-[#DDE3E8]">Name, company, job title, email, phone number, message content submitted through a contact or enquiry form</td>
                </tr>
                <tr>
                  <td className="bg-white text-[#0A2A43] font-medium p-3 border border-[#DDE3E8]">Technical data</td>
                  <td className="bg-white text-[#5B6B77] p-3 border border-[#DDE3E8]">IP address, browser type, device type, pages viewed, collected automatically through standard website analytics</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            We do not collect payment, banking, or financial details through this website. Any such information is exchanged directly and separately as part of a signed fuel supply agreement.
          </p>
        </section>

        {/* Section 4 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">4.</span> How We Use Your Data
          </h2>
          <ul className="list-disc list-inside space-y-2 text-[16px] text-[#23303A] pl-2">
            <li>To respond to enquiries and prepare quotes or proposals</li>
            <li>To maintain, secure, and improve this website</li>
            <li>To keep records required for our business and legal obligations</li>
            <li>To contact you about a service you enquired about</li>
          </ul>
        </section>

        {/* Section 5 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">5.</span> Legal Basis for Processing
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            We process your data based on the consent you give when submitting a form on this website, and on OEC&apos;s legitimate business interest in responding to enquiries from potential and existing clients.
          </p>
        </section>

        {/* Section 6 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">6.</span> Cookies
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            This website may use cookies or similar technologies to understand how visitors use the site and to keep it working properly. Cookies used here are not sold or shared with advertisers.
          </p>
        </section>

        {/* Section 7 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">7.</span> Sharing Your Data
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A] mb-3">
            OEC does not sell, rent, or trade your personal data. We may share it with:
          </p>
          <ul className="list-disc list-inside space-y-2 text-[16px] text-[#23303A] pl-2">
            <li>Service providers who support the operation of this website, such as hosting or analytics providers</li>
            <li>Regulatory authorities or government bodies, where required by law</li>
          </ul>
        </section>

        {/* Section 8 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">8.</span> International Handling of Data
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            OEC operates across Singapore, Malaysia, Vietnam, Thailand, the Middle East, and the Americas. An enquiry submitted through this website may be accessed by OEC staff in the region relevant to your request, so we can respond properly. Wherever your data is handled, we take reasonable steps to keep it protected.
          </p>
        </section>

        {/* Section 9 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">9.</span> Data Retention
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            We keep enquiry data only for as long as needed to respond to you and to meet our business and legal obligations. After that, it is deleted or anonymised.
          </p>
        </section>

        {/* Section 10 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">10.</span> Data Security
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            OEC applies reasonable technical and organisational measures to protect personal data against unauthorised access, loss, or misuse.
          </p>
        </section>

        {/* Section 11 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">11.</span> Your Rights
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            Under the PDPA, you have the right to ask us what personal data we hold about you, request a correction, and withdraw your consent for us to use it. To exercise any of these rights, contact us using the details below.
          </p>
        </section>

        {/* Section 12 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">12.</span> Children&apos;s Privacy
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            This website is intended for business use and is not directed at anyone under 18. We do not knowingly collect personal data from children.
          </p>
        </section>

        {/* Section 13 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">13.</span> Changes to This Policy
          </h2>
          <p className="text-[16px] leading-[1.7] text-[#23303A]">
            OEC may update this policy from time to time. The effective date at the top of this page reflects the most recent update.
          </p>
        </section>

        {/* Section 14 */}
        <section className="mb-9">
          <h2 className="font-serif-brand font-bold text-[20px] text-[#0A2A43] border-b-2 border-[#DDE3E8] pb-2 mb-4 flex items-center">
            <span className="text-[#f25b17] mr-2">14.</span> Contact
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
