import React from "react";
import { motion } from "framer-motion";

const TermsAndConditions = () => {
  const termsSections = [
    {
      title: "Acceptance of Terms",
      content: (
        <p>
          By visiting our website or interacting with our services
          (donations, volunteer sign-ups, contact forms, etc.), you accept
          these terms in full. If you do not agree with any part of these
          terms, please do not use our website.
        </p>
      ),
    },
    {
      title: "Use of the Website",
      list: [
        "You agree to use this site for lawful purposes only.",
        "You may not use the website to engage in any activity that is illegal, offensive, or violates the rights of others.",
        "You must not attempt to gain unauthorized access to our servers or interfere with the site’s performance or security.",
      ],
    },
    {
      title: "Donations and Payments",
      list: [
        "All donations made to Messiah Foundation are voluntary and non-refundable unless a specific error has occurred (e.g., duplicate donation).",
        "We use secure third-party payment gateways to process donations. We do not store your full payment details.",
        "Donors will receive an acknowledgment receipt via email or post.",
      ],
    },
    {
      title: "Volunteer Submissions",
      list: [
        "If you submit a volunteer form, we may contact you regarding opportunities and events.",
        "All volunteer contributions must be made respectfully and under the guidance of the foundation team.",
        "We reserve the right to deny or discontinue volunteer involvement at our discretion.",
      ],
    },
    {
      title: "Intellectual Property",
      list: [
        "All content on this website (text, images, graphics, videos, logos, etc.) is the property of Messiah Foundation and is protected by copyright and other intellectual property laws.",
        "You may not reproduce, copy, distribute, or use any content without written permission from Messiah Foundation.",
      ],
    },
    {
      title: "Links to External Sites",
      list: [
        "Our website may contain links to third-party websites for your convenience (e.g., payment processors, partner organizations).",
        "Messiah Foundation is not responsible for the content, security, or privacy practices of external sites.",
      ],
    },
    {
      title: "Limitation of Liability",
      list: [
        "Messiah Foundation strives to provide accurate and up-to-date information, but we make no warranties about the completeness or reliability of any content.",
        "We are not liable for any losses or damages resulting from the use or misuse of this website or its content.",
      ],
    },
    {
      title: "Privacy",
      content: (
        <p>
          Please refer to our Privacy Policy for details on how we
          collect, store, and use your personal information.
        </p>
      ),
    },
    {
      title: "Changes to These Terms",
      content: (
        <p>
          We may update or change these Terms and Conditions at any time.
          Continued use of this site after changes are made constitutes
          your acceptance of the new terms.
        </p>
      ),
    },
    {
      title: "Governing Law",
      content: (
        <p>
          These Terms and Conditions are governed by and interpreted in
          accordance with the laws of Sri Lanka, and you submit to the
          exclusive jurisdiction of the courts in that location.
        </p>
      ),
    },
  ];

  const donationSections = [
    {
      title: "How Your Donation Is Used",
      list: [
        "85–90% of funds go directly to our programs, including food distribution, clean water, healthcare, education, and shelter.",
        "The remaining supports operational costs, compliance, and outreach efforts to expand our impact.",
      ],
    },
    {
      title: "Transparency & Accountability",
      list: [
        "All donations are tracked and recorded securely.",
        "Annual financial reports are available upon request.",
        "We ensure that funds are used only for charitable purposes aligned with our mission.",
      ],
    },
    {
      title: "Receipts & Records",
      list: [
        "You will receive an official donation receipt via email for every contribution.",
        "Monthly or yearly giving summaries are available for recurring donors.",
      ],
    },
    {
      title: "Refund Policy",
      content: (
        <p>
          If you made an error in your donation or wish to cancel a
          recurring contribution, please contact us within 7 days. Refunds
          will be processed on a case-by-case basis.
        </p>
      ),
    },
    {
      title: "International Donations",
      content: (
        <p>
          We accept donations from around the world. Currency conversion
          and payment processing fees may apply depending on your payment
          method.
        </p>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-white px-4 sm:px-6 md:px-12 py-8 text-[#111] text-sm leading-relaxed font-light"
    >
      {/* Section title chip */}
      <div className="relative h-16 mb-4">
        <div className="absolute top-6 left-0 ml-4 md:ml-[250px]">
          <button
            disabled
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-full text-gray-800 cursor-default"
          >
            <span className="text-sm">✦</span>
            <span className="text-sm font-medium">Terms & Conditions</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-left">
          Terms & Conditions
        </h1>

        {termsSections.map(({ title, content, list }, idx) => (
          <section key={idx} className="mb-8">
            <h2 className="text-base md:text-lg font-semibold mb-2">{title}</h2>
            {content ? (
              <div className="ml-2 text-sm">{content}</div>
            ) : (
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                {list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}

        <h1 className="text-3xl md:text-4xl font-semibold mb-6 text-left">
          Donation Policy
        </h1>

        {donationSections.map(({ title, content, list }, idx) => (
          <section key={idx} className="mb-8">
            <h2 className="font-medium mb-2 text-base md:text-lg">{title}</h2>
            {content ? (
              <div className="ml-2 text-sm">{content}</div>
            ) : (
              <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                {list.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </section>
        ))}
      </div>
    </motion.div>
  );
};

export default TermsAndConditions;
