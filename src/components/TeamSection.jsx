import React from 'react';
import { motion } from 'framer-motion';
import member1 from '../assets/member1.jpg';
import member2 from '../assets/member2.jpg';
import member3 from '../assets/member3.jpg';

const teamMembers = [
  {
    name: 'Jebamalai Anthoniamma',
    role: 'Chief Operational Officer',
    image: member1,
  },
  {
    name: 'Ganeshan Yogeshwary',
    role: 'Chief Financial Officer',
    image: member2,
  },
  {
    name: 'Mohanaeshwary',
    role: 'Chief Operational Officer',
    image: member3,
  },
  {
    name: 'Mohanaeshwary',
    role: 'Chief Operational Officer',
    image: member3,
  },
];

const TeamSection = () => {
  return (
    <div className="px-4 sm:px-8">
      <motion.div
        className="flex lg:grid lg:grid-cols-4 gap-4 overflow-x-auto lg:overflow-visible scroll-smooth snap-x snap-mandatory pb-4"
        whileTap={{ cursor: 'grabbing' }}
      >
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="min-w-[280px] max-w-[300px] lg:w-full h-120 rounded-[20px] bg-[#D9D9D9] bg-cover bg-center relative snap-start flex-shrink-0 lg:flex-shrink-0"
            style={{ backgroundImage: `url(${member.image})` }}
          >
            <div
              className="flex flex-col absolute px-6 items-start justify-center h-24 w-full bottom-8 gap-1 backdrop-blur-[32.2px]"
              style={{
                background:
                  'linear-gradient(92.98deg, rgba(255, 255, 255, 0.25) 0.16%, rgba(255, 255, 255, 0) 100.19%)',
              }}
            >
              <p className="text-xl font-bold text-white">{member.name}</p>
              <p className="text-sm font-medium text-[#E4E4E4]">{member.role}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default TeamSection;
