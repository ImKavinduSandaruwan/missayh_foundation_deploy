import React from "react";
import { motion } from "framer-motion";
import Carolimg from "../../assets/Carol.png";

const Carolssec = () => {
  return (
    <motion.div
      className="bg-white min-h-screen py-12 px-4 sm:px-8 md:px-16"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Title shown only on desktop */}
      <motion.h2
        className="hidden md:block text-2xl sm:text-3xl font-semibold text-black mb-6 text-center sm:text-left"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        Messiah’s Carols 2022
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Image Section */}
        <motion.div
          className="rounded-none md:rounded-xl overflow-hidden shadow-md w-full"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <img
            src={Carolimg}
            alt="Carols singing"
            className="w-full h-130 object-cover object-center"
          />
        </motion.div>

        {/* Title shown only on mobile, below image */}
        <motion.h2
          className="block md:hidden text-2xl font-semibold text-black mt-4 text-center shadow-none"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          Messiah’s Carols 2022
        </motion.h2>

        {/* Text Section */}
        <div className="text-gray-800 text-base leading-relaxed space-y-7 text-center md:text-left">
          {[
            `In an effort to build a more compassionate and understanding society, the Messiah Foundation launched a powerful street drama campaign aimed at promoting respectful language and positive communication. Performed in the heart of local communities, this initiative reached people where they are—on the streets, in neighborhoods, and among everyday conversations.`,
            `The drama portrayed real-life scenarios that highlighted how hurtful words, even when unintentional, can deeply affect individuals, especially children and marginalized groups. Through emotional storytelling, humor, and impactful dialogue, the performance shed light on the importance of choosing words with kindness, empathy, and awareness. Audiences were not just spectators but active participants—engaging in post-performance discussions, reflecting on their own use of language, and pledging to be more mindful in how they speak to others.`,
            `This campaign stands as a testament to the power of art in social transformation. At the Messiah Foundation, we believe that respectful language is the first step toward dignity, equality, and harmony. And with every performance, we continue to plant the seeds of change—one word, one story, one heart at a time.`,
          ].map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 + index * 0.2, duration: 0.6 }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Carolssec;
