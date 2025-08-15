import React from "react";
import ctaImage from "../assets/cta.jpg";
//import { FaHeart } from "react-icons/fa";
import Heart from "../assets/Heart.png";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section
      className="relative w-full h-[90vh] md:h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6"
      style={{ backgroundImage: `url(${ctaImage})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Animated Content */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center max-w-2xl"
      >
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-5xl font-bold text-white mb-4 leading-snug"
        >
          You Can Make a Difference
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="text-sm sm:text-base md:text-lg text-white mb-6 leading-relaxed"
        >
          Every meal served, every child educated, and every family sheltered is
          made
          <br className="hidden sm:block" />
          possible because someone like you chose to act.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 w-full"
        >
          <Link to="/donate">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="text-xs md:text-lg flex items-center justify-center gap-1.5 text-white bg-[#957DE8] w-32 py-2.5 rounded-lg font-bold hover:bg-purple-700 transition cursor-pointer"
            >
              Donation <img src={Heart} alt="heart" className="w-5 h-5" />
            </motion.button>
          </Link>

          <Link to="/contactus">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-32 text-xs md:text-lg backdrop-blur-sm bg-white/10 text-white py-2.5 rounded-lg font-bold hover:bg-white/20 transition border border-white/30 cursor-pointer"
            >
              Join us
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default CTA;
