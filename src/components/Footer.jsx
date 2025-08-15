import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-[#061B2F] text-white pt-0">
      {/* Top Gradient Line */}
      <div className="h-5 bg-gradient-to-r from-[#B875E8DB] to-[#4287CCDB] w-full"></div>

      {/* Footer Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 md:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12"
      >
        {/* Logo & About */}
        <div>
          <img src={logo} alt="Messiah Foundation" className="h-16 mb-4" />
          <h2 className="text-lg font-semibold mb-3">Messiah Foundation</h2>
          <p className="text-sm leading-relaxed text-[#D1D5DB]">
            A nonprofit dedicated to supporting the poor, vulnerable, and
            underserved. Our passionate team provides essentials like food,
            clean water, education, healthcare, and shelter. Rooted in
            compassion and driven by purpose, we believe everyone deserves
            dignity, hope, and opportunity.
          </p>

          <div className="flex gap-4 mt-6 text-xl">
            <a
              href="#"
              className="hover:text-gray-300 transition transform hover:scale-110"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              className="hover:text-gray-300 transition transform hover:scale-110"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="font-semibold mb-4 underline underline-offset-4">
            Quick Links
          </h3>
          <ul className="text-[#F3F4F6] space-y-3 text-sm">
            <li>
              <Link to="/who-we-are" className="hover:underline transition">
                Who we are
              </Link>
            </li>
            <li>
              <Link to="/what-we-do" className="hover:underline transition">
                What we do
              </Link>
            </li>
            <li>
              <Link to="/contactus" className="hover:underline transition">
                Contact us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact + CTA Buttons */}
        <div>
          <h3 className="font-semibold mb-4 underline underline-offset-4">
            Get In Touch
          </h3>
          <p className="text-sm text-[#F3F4F6] mb-2">+94 74 147 3440</p>
          <p className="text-sm text-[#F3F4F6] mb-2">
            messiahfoundation22@gmail.com
          </p>
          <p className="text-sm text-[#F3F4F6]">
            No 29, Letheney Estate, Hatton.
          </p>

          <div className="flex flex-wrap gap-4 mt-6">
            <Link
              to="/donate"
              className="bg-[#4287CC] hover:bg-[#6D28D9] text-white px-6 py-2 rounded-xl text-sm font-semibold transition duration-300 transform hover:scale-105"
            >
              Donate
            </Link>

            <Link
              to="/join"
              className="backdrop-blur-sm bg-white/10 border border-white/20 text-white px-6 py-2 rounded-xl text-sm font-semibold hover:bg-white/20 transition duration-300 transform hover:scale-105"
            >
              Join us
            </Link>
          </div>
        </div>
      </motion.div>

      {/* Divider */}
      <div className="border-t border-gray-700"></div>

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col sm:flex-row justify-between items-start gap-2 text-xs text-gray-400">
        <p className="text-left sm:text-left">
         Copyrights &copy; 2025 Messiah Foundation. All rights reserved.
        </p>
        <div className="flex gap-4">
          <Link to="/policy" className="hover:underline transition">
            Privacy Policy
          </Link>
          <Link to="/terms" className="hover:underline transition">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
