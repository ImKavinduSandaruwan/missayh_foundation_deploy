import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Images
import event1 from '../assets/event1.png';
import event2 from '../assets/event2.png';
import event3 from '../assets/event3.png';

const events = [
  {
    id: 1,
    title: "Street Drama",
    category: "Drama",
    description: "Our Street drama promoted respectful language, sparking a positive change.",
    date: "11 Dec 2022",
    image: event1,
    path: "/streetdrama"
  },
  {
    id: 2,
    title: "Student Motivational Program",
    category: "Program",
    description: "Our program boosted students’ focus and mindset, inspiring resilience.",
    date: "11 Dec 2022",
    image: event2,
    path: "/motivation"
  },
  {
    id: 3,
    title: "Messiah's Carols",
    category: "Carols",
    description: "Our student carols event united everyone with music, dance and festive cheer.",
    date: "11 Dec 2022",
    image: event3,
    path: "/carols"
  }
];

const CommunityEvent = () => {
  return (
    <div className="px-4 md:px-20 py-12">
      {/* Mobile scrollable carousel */}
      <div className="block md:hidden">
        <motion.div
          className="flex overflow-x-auto space-x-4 scroll-smooth snap-x snap-mandatory pb-4"
          whileTap={{ cursor: 'grabbing' }}
        >
          {events.map(event => (
            <motion.div
              key={event.id}
              className="min-w-full snap-center bg-white rounded-[20px] p-[10px]"
              style={{
                boxShadow: '0px 2px 8px 0px rgba(0,0,0,0.1), 0px 0px 9.7px 0px rgba(0,0,0,0.05)'
              }}
            >
              <div
                className='h-[280px] w-full bg-cover bg-center rounded-2xl relative'
                style={{ backgroundImage: `url(${event.image})` }}
              >
                <div className='absolute top-2 left-2 p-2 bg-white rounded-lg'>
                  <p className='text-sm font-medium text-black'>{event.category}</p>
                </div>
              </div>
              <div className='flex flex-col gap-2 mt-4'>
                <p className='text-lg font-extrabold'>{event.title}</p>
                <p className='text-sm'>{event.description}</p>
                <p className='text-sm'>{event.date}</p>
              </div>
              <div className='flex justify-end mt-4'>
                <Link to={event.path}>
                  <button className='bg-[#4287CC] text-white rounded-xl py-2 px-6'>
                    Read More
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Desktop grid view */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {events.map(event => (
          <div
            key={event.id}
            className="p-[10px] rounded-[20px] bg-white"
            style={{
              boxShadow: '0px 2px 8px 0px rgba(0,0,0,0.1), 0px 0px 9.7px 0px rgba(0,0,0,0.05)'
            }}
          >
            <div
              className='h-[280px] w-full bg-cover bg-center rounded-2xl relative'
              style={{ backgroundImage: `url(${event.image})` }}
            >
              <div className='absolute top-2 left-2 p-2 bg-white rounded-lg'>
                <p className='text-sm font-medium text-black'>{event.category}</p>
              </div>
            </div>
            <div className='flex flex-col gap-2 mt-4'>
              <p className='text-lg font-extrabold'>{event.title}</p>
              <p className='text-sm'>{event.description}</p>
              <p className='text-sm'>{event.date}</p>
            </div>
            <div className='flex justify-end mt-4'>
              <Link to={event.path}>
                <button className='bg-[#4287CC] text-white rounded-xl py-2 px-6'>
                  Read More
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommunityEvent;
