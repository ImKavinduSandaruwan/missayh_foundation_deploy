import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" onClick={closeMenu}>
          <img src={logo} alt="Messiah Foundation" className="h-14" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10 font-medium text-gray-700 text-lg">
          {["/about", "/project", "/donate"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className="hover:text-[#4287CC] transition duration-300 ease-in-out transform hover:scale-105"
            >
              {path === "/about"
                ? "Who we are"
                : path === "/project"
                ? "What we do"
                : "Donation"}
            </Link>
          ))}
          <Link
            to="/contactus"
            className="bg-[#4287CC] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
          >
            Contact us
          </Link>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-gray-700 z-[60]"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={28} color="#4287CC" /> : <Menu size={28} color="#4287CC" />}
        </button>
      </div>

      {/* Overlay and Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Blur Background Overlay */}
            <motion.div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMenu} // clicking backdrop closes menu
            />

            {/* Mobile Nav Dropdown */}
            <motion.div
              key="mobile-menu"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="fixed top-[1px] left-0 right-0 bg-white border-t border-gray-200 pt-10 px-6 pb-4 space-y-7 font-medium text-gray-700 text-base flex flex-col items-center z-50 shadow-md rounded-b-xl"
            >
              <Link
                to="/about"
                className="hover:text-[#4287CC] transition duration-200 transform hover:scale-105"
                onClick={closeMenu}
              >
                Who we are
              </Link>
              <Link
                to="/project"
                className="hover:text-[#4287CC] transition duration-200 transform hover:scale-105"
                onClick={closeMenu}
              >
                What we do
              </Link>
              <Link
                to="/donate"
                className="hover:text-[#4287CC] transition duration-200 transform hover:scale-105"
                onClick={closeMenu}
              >
                Donation
              </Link>
              <Link
                to="/contactus"
                className="text-center bg-[#4287CC] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 transform hover:scale-105"
                onClick={closeMenu}
              >
                Contact us
              </Link>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
