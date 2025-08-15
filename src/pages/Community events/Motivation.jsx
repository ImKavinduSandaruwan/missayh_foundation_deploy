import React from "react";
import ProgramSection from "../../components/communityevents/ProgramSection";
import CallToAction from "../../components/CallToAction";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Motivation = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-white relative min-h-screen"
    >
      {/* Projects Button (Top Center) */}
      <div className="w-full relative h-16">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
          <Link
            to="/projects"
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-full text-gray-800 hover:shadow-md transition"
          >
             <span className="text-xl leading-none">✧</span>
            <span className="text-sm font-medium">Projects</span>
          </Link>
        </div>
      </div>

      {/* Title */}
      <div className="text-center pt-4 pb-6 px-4">
        <h1 className="text-3xl md:text-4xl font-bold">
          Community Events & Workshops
        </h1>
      </div>

      <ProgramSection />
      <CallToAction />
    </motion.div>
  );
};

export default Motivation;
