import React from "react";
import { motion } from "framer-motion";
import donateImage from "../assets/donation-girl.svg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const DonationDetails = () => {
  return (
    <section className="w-full bg-[#f0f4f8] p-0 m-0 md:h-[600px]">
      <div className="flex flex-col md:flex-row w-full h-full">
        {/* Image */}
        <motion.div
          className="relative w-full md:w-1/2 order-2 md:order-1 overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ maxHeight: "600px" }}
        >
          <img
            src={donateImage}
            alt="Donation Girl"
            className="w-full h-full object-cover block"
            style={{ maxHeight: "600px" }}
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#3a0ca3]/70 via-[#4361ee]/40 to-transparent mix-blend-multiply" />
        </motion.div>

        {/* Bank Info */}
        <motion.div
          className="w-full md:w-1/2 bg-[#f0f4f8] flex items-center justify-center md:justify-start px-6 md:px-0 py-6 order-1 md:order-2 text-center md:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          style={{ maxHeight: "600px" }}
        >
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
              Donation Details
            </h2>
            <ul className="space-y-4 text-base text-gray-800">
              {[
                ["Bank Name", "Sampath Bank"],
                ["Account name", "Messiah Foundation"],
                ["Account number", "123488939038"],
                ["Branch", "Hatton"],
                ["Bank Address", "Hatton"],
              ].map(([label, value], idx) => (
                <li
                  key={idx}
                  className="flex flex-row items-center justify-start text-left space-x-2"
                >
                  <span className="w-40 font-medium text-gray-700">
                    {label} :
                  </span>
                  <span className="text-gray-900 font-medium">{value}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DonationDetails;
