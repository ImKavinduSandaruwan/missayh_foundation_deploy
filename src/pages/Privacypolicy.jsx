import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="min-h-screen bg-white px-4 py-6 sm:px-6 md:px-12 text-[#000000] text-sm leading-relaxed font-light relative"
    >
      {/* Top Static Policy Button */}
      <div className="relative h-16 mb-4">
        <div className="absolute top-6 left-0 ml-4 md:ml-[250px]">
          <button
            disabled
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-full text-gray-800 cursor-default"
          >
            <span className="text-sm">✦</span>
            <span className="text-sm font-medium"> Privacy Policy</span>
          </button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto w-full">
        <h1 className="text-3xl md:text-4xl font-semibold mb-10 text-left">
          Privacy Policy
        </h1>

        {/* Information We Collect */}
        <section className="mb-6">
          <h2 className="text-base font-bold mb-2">Information We Collect</h2>
          <p className="mb-2">
            We may collect the following information from you:
          </p>
          <ul className="space-y-4">
            <li>
              <span className="font-medium">a. Personal information</span>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Postal address</li>
                <li>Date of birth (if required for volunteer forms)</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">b. Donation information</span>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>Donation amount</li>
                <li>
                  Payment method (processed securely via third-party platforms)
                </li>
                <li>Billing information (only when necessary and protected)</li>
              </ul>
            </li>
            <li>
              <span className="font-medium">c. Technical information</span>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device type</li>
                <li>
                  Pages visited and browsing behavior (via cookies or analytics
                  tools)
                </li>
              </ul>
            </li>
            <li>
              <span className="font-medium">
                d. Volunteer or Contact Form Data
              </span>
              <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                <li>Skills, availability, and areas of interest</li>
                <li>Message content and other form submissions</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* How We Use Your Information */}
        <section className="mb-6">
          <h2 className="text-base font-semibold mb-2">
            How We Use Your Information
          </h2>
          <p className="mb-2">We use your information for purposes such as:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>
              Processing donations and sending tax receipts or thank-you letters
            </li>
            <li>Responding to inquiries and volunteer applications</li>
            <li>
              Sharing news, updates, and event invitations (only if you
              subscribe)
            </li>
            <li>Improving website content, functionality, and security</li>
            <li>Keeping internal records of donor and volunteer engagement</li>
            <li>Complying with legal or regulatory obligations</li>
          </ul>
        </section>

        {/* Data Security */}
        <section className="mb-6">
          <h2 className="text-base font-semibold mb-2">Data Security</h2>
          <p>
            We take your data seriously. We use secure servers, encryption,
            firewalls, and limited access controls to protect your information.
            All payment transactions are processed via trusted and compliant
            third-party services such as [Insert Payment Gateway Name].
          </p>
        </section>

        {/* Third-Party Services */}
        <section className="mb-6">
          <h2 className="text-base font-semibold mb-2">Third-Party Services</h2>
          <p className="mb-2">We may use trusted third-party platforms for:</p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Payment processing (e.g., Stripe, PayPal, local banks)</li>
            <li>Email communications (e.g., Mailchimp)</li>
            <li>Analytics (e.g., Google Analytics)</li>
            <li>Volunteer or donor management tools</li>
          </ul>
          <p className="mt-2">
            These providers have their own privacy policies. We do not share
            more information than necessary and never sell or rent your data.
          </p>
        </section>

        {/* Data Retention */}
        <section className="mb-6">
          <h2 className="text-base font-semibold mb-2">Data Retention</h2>
          <p>
            We retain your data for as long as necessary to fulfill the purposes
            outlined in this policy, or as required by law. You may request
            deletion of your data at any time.
          </p>
        </section>

        {/* Children’s Privacy */}
        <section className="mb-6">
          <h2 className="text-base font-semibold mb-2">Children’s Privacy</h2>
          <p>
            We do not knowingly collect personal data from children under the
            age of 13 without parental consent. If you believe we have collected
            such data in error, please contact us immediately to remove it.
          </p>
        </section>

        {/* Your Rights */}
        <section className="mb-6">
          <h2 className="text-base font-semibold mb-2">Your Rights</h2>
          <p className="mb-2">
            Depending on your country’s regulations, you have the right to:
          </p>
          <ul className="list-disc list-inside space-y-1 ml-4">
            <li>Access, correct, or delete your personal information</li>
            <li>Withdraw your consent at any time</li>
            <li>Opt out of marketing communications</li>
            <li>Request a copy of the information we hold about you</li>
            <li>File a complaint with a relevant data protection authority</li>
          </ul>
          <p className="mt-2">
            To exercise any of these rights, contact us at:
          </p>
          <p className="mt-1">
            Email:{" "}
            <a
              href="mailto:messiahfoundation22@gmail.com"
              className="underline"
            >
              messiahfoundation22@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+94741473440" className="underline">
              (+94 74 147 3440)
            </a>
          </p>
        </section>

        {/* Cookies Policy */}
        <section className="mb-6">
          <h2 className="text-base font-semibold mb-2">Cookies Policy</h2>
          <p className="mb-2">
            Our website uses cookies to enhance your browsing experience,
            analyze traffic, and improve performance. You can manage or disable
            cookies via your browser settings.
          </p>
          <p>Types of cookies we use:</p>
          <ul className="list-disc list-inside space-y-1 ml-4 mt-1">
            <li>Necessary (for functionality)</li>
            <li>Analytics (to track usage)</li>
            <li>Preferences (to remember your settings)</li>
          </ul>
        </section>

        {/* Changes to This Policy */}
        <section className="mb-6">
          <h2 className="text-base font-semibold mb-2">
            Changes to This Policy
          </h2>
          <p>
            We may update this Privacy Policy occasionally. All updates will be
            posted on this page with a new "Effective Date." We encourage you to
            review it regularly.
          </p>
        </section>

        {/* Contact Us */}
        <section className="mb-12">
          <h2 className="text-base font-semibold mb-2">Contact Us</h2>
          <p>
            If you have any questions, concerns, or requests regarding your
            personal data or this policy, contact us at:
          </p>
          <p className="mt-2">Messiah Foundation</p>
          <p>Address: No.529/D, Lethinty Estate, Hatton</p>
          <p>
            Email:{" "}
            <a
              href="mailto:messiahfoundation22@gmail.com"
              className="underline"
            >
              messiahfoundation22@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+94741473440" className="underline">
              (+94 74 147 3440)
            </a>
          </p>
        </section>
      </div>
    </motion.div>
  );
};

export default PrivacyPolicy;
