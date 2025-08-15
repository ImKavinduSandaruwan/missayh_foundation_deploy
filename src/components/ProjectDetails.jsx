import React from "react";
import { motion } from "framer-motion";
import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import speaker from "../assets/speaker.png";

const cards = [
  {
    image: project2,
    title: "Stationary for Success",
    description:
      "We joyfully distributed essential stationery and study materials to 100 deserving students, empowering their educational journey. This act of giving aimed to directly support their learning, fostering a brighter future filled with opportunity and knowledge.",
  },
  {
    image: project1,
    title: "Levelup with math boxes",
    description:
      "We empowered over 40 students with Mathematics Boxes, fostering hands-on learning and strengthening their understanding of key concepts. This valuable resource will support their studies and unlock their mathematical potential.",
  },
  {
    image: project3,
    title: "School Books & Shoes",
    description:
      "We joyfully distributed essential stationery and study materials to 100 deserving students, empowering their educational journey. This act of giving aimed to directly support their learning, fostering a brighter future filled with opportunity and knowledge.",
  },
];

const ProjectCard = ({ image, title, description }) => (
  <div
    className="w-full max-w-sm md:max-w-full md:flex md:h-[400px] gap-4 p-3 sm:p-4 rounded-[16px] bg-white"
    style={{
      boxShadow: "0px 2px 8px rgba(0,0,0,0.1), 0px 0px 9.7px rgba(0,0,0,0.05)",
    }}
  >
    <div
      className="h-60 sm:h-72 md:h-full md:w-1/2 rounded-xl bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    ></div>
    <div className="flex flex-col justify-between py-2 sm:py-3 pr-2 sm:pr-4 w-full">
      <div className="flex flex-col gap-4 sm:gap-5">
        <h1 className="text-xl sm:text-2xl font-bold text-black">{title}</h1>
        <p className="text-sm sm:text-base font-medium text-black">
          {description}
        </p>
      </div>
      <div className="flex flex-col gap-1 text-xs sm:text-sm font-semibold text-black mt-2">
        <p>Time - 4.30pm</p>
        <p>Date - 1 Dec 2022</p>
        <p>Location - Computer center, Lethenty</p>
      </div>
    </div>
  </div>
);

const JoinHandsCard = () => (
  <div className="w-full bg-[#957DE8] text-white rounded-2xl px-5 sm:px-7 md:px-10 py-8 sm:py-10 md:py-14 h-full">
    <div className="flex flex-row gap-6 sm:gap-8 items-center">
      <img
        src={speaker}
        alt="speaker"
        className="w-20 h-20 sm:w-24 sm:h-24 scale-x-[-1]"
      />
      <h1 className="text-2xl sm:text-3xl md:text-[54px] font-extrabold leading-tight">
        Join Hands With Us!
      </h1>
    </div>
    <p className="mt-5 sm:mt-6 text-sm sm:text-base font-medium leading-6 sm:leading-7">
      Be a part of something bigger. <br />
      At Messiah’s Foundation, we believe in unity and compassion. Whether
      you're an individual, a volunteer group, or an organization, your
      contribution can help us launch even more impactful charity projects.
      Let's collaborate to empower communities, support education, and bring
      hope where it’s needed most.
    </p>
  </div>
);


const ProjectDetails = () => {
  return (
    <div className="space-y-6">
      {/* Mobile View */}
      <div className="block md:hidden space-y-4">
        <div className="overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-4 px-4">
          <motion.div
            className="flex gap-4 pb-2"
            whileTap={{ cursor: "grabbing" }}
          >
            {cards.map((card, i) => (
              <div key={i} className="min-w-[90%] snap-center flex-shrink-0">
                <ProjectCard {...card} />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Separate Join Hands Card on Mobile */}
        <div className="px-4">
          <div className="max-w-[90%] mx-auto">
            <JoinHandsCard />
          </div>
        </div>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-2 gap-6">
        <ProjectCard {...cards[0]} />
        <ProjectCard {...cards[1]} />
        <ProjectCard {...cards[2]} />
        <JoinHandsCard />
      </div>
    </div>
  );
};

export default ProjectDetails;
