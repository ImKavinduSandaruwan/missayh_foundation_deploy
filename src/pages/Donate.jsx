import React from "react";
import { Link } from "react-router-dom";
import donateIcon from "../assets/donate-icon.svg";
import childIcon from "../assets/child-icon.svg";
import heartIcon from "../assets/heart-icon.svg";
import donateImage from "../assets/donation-girl.svg";
import event1 from "../assets/event1.svg";
import event2 from "../assets/event2.svg";
import event3 from "../assets/event3.svg";
import CallToAction from "../components/CallToAction";
import DonationDetails from "../components/DonationDetails";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6 },
  }),
};

const Donate = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full"
    >
      {/* Hero Section */}
      <section className="text-center mb-10 pt-20 px-4">
        <div className="w-full relative h-16 mb-4">
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
            <motion.button
              disabled
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-full text-gray-800 cursor-default"
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <span className="text-xl leading-none">✧</span>
              <span className="text-sm font-medium">Donate</span>
            </motion.button>
          </div>
        </div>
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          className="text-3xl md:text-4xl font-bold mt-4 text-[#4287CC]"
        >
          Donate Today
        </motion.h1>
      </section>

      {/* Donation Benefits - Carousel on Mobile */}
      <section className="max-w-6xl mx-auto px-4 mb-16">
        <div className="flex md:grid md:grid-cols-3 gap-6 overflow-x-auto md:overflow-visible snap-x md:snap-none scrollbar-hide">
          {[donateIcon, childIcon, heartIcon].map((icon, idx) => (
            <motion.div
              key={idx}
              className="bg-white shadow-xl rounded-xl p-6 min-w-[280px] md:min-w-0 snap-start text-center"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={idx}
              variants={fadeUp}
            >
              <img src={icon} alt="Icon" className="mx-auto mb-5 w-16 h-16" />
              <h3 className="font-semibold text-xl">
                {idx === 0
                  ? "Every Rupee Feeds Hope"
                  : idx === 1
                  ? "Empower a Child's Future"
                  : "100% Goes to the Cause"}
              </h3>
              <p className="text-gray-600 text-base mt-3">
                {idx === 0
                  ? "Your donation provides essential meals, clean water, and daily care to families struggling to survive."
                  : idx === 1
                  ? "Support education and healthcare for vulnerable children, giving them the tools to break the cycle of poverty."
                  : "Every donation is used where it's needed most — no overhead cuts, just direct impact to real lives."}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Donation Details */}
      <DonationDetails />

      {/* Events & Gallery - Carousel on Mobile */}
      <section className="text-center py-16 px-4 mt-10">
        <div className="w-full relative h-16 mb-4">
          <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
            <motion.button
              disabled
              className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-full text-gray-800 cursor-default"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <span className="text-xl leading-none">✧</span>
              <span className="text-sm font-medium">Gallery</span>
            </motion.button>
          </div>
        </div>
        <motion.h2
          className="text-2xl font-bold mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          Events & Workshops Gallery
        </motion.h2>

        <div className="flex overflow-x-auto gap-4 max-w-6xl mx-auto px-2 md:grid md:grid-cols-3 md:overflow-visible scrollbar-hide snap-x md:snap-none">
          {[event1, event2, event3].map((img, idx) => (
            <motion.img
              key={idx}
              src={img}
              alt={`Event ${idx + 1}`}
              className="min-w-[280px] md:min-w-0 w-full rounded-lg shadow snap-start"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: idx * 0.2 }}
              viewport={{ once: true }}
            />
          ))}
        </div>
      </section>

      {/* CTA */}
      <CallToAction />
    </motion.div>
  );
};

export default Donate;
