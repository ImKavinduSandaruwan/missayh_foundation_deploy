import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion"; 
import CallToAction from "../../components/CallToAction";
import CarolsSection from "../../components/communityevents/carolssection.jsx";


const Carols = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white min-h-screen"
    >
      {/* Projects Button (Top Center) */}
      <div className="w-full h-20 flex justify-center items-start relative">
        <div className="absolute top-4">
          <Link
            to="/projects"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 shadow-sm rounded-full text-gray-800 hover:shadow-md transition duration-200 text-sm md:text-base"
          >
             <span className="text-xl leading-none">✧</span>
            <span className="font-medium">Projects</span>
          </Link>
        </div>
      </div>

      {/* Title */}
      <div className="text-center px-4 md:px-0 pt-2 pb-6">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
          Community Events & Workshops
        </h1>
      </div>

      {/* Content Sections */}
      <div className="px-4 sm:px-6 md:px-10 lg:px-20">
        <CarolsSection />
      </div>

      <CallToAction />
    </motion.div>
  );
};

export default Carols;
