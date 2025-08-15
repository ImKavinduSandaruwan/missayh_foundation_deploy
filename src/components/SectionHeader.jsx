import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const SectionHeader = ({ label, title }) => {
  return (
    <div className="relative w-full mb-8">
      <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
        <motion.button
          disabled
          className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-full text-gray-800 cursor-default"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          <span className="text-xl leading-none">✧</span>
          <span className="text-sm font-medium">{label}</span>
        </motion.button>
      </div>
      <motion.h1
        className="text-center text-3xl md:text-4xl font-bold mt-16 text-black"
        initial="hidden"
        animate="visible"
        variants={fadeUp}
        custom={1}
      >
        {title}
      </motion.h1>
    </div>
  );
};



export default SectionHeader;
