import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';


import story1 from '../assets/story1.jpg';
import story2 from '../assets/story2.jpg';
import story3 from '../assets/story3.jpg';
import story4 from '../assets/story4.jpg';

const statsData = [
  {
    image: story1,
    title: '10+',
    description: 'Volunteers joined the organization',
  },
  {
    image: story2,
    title: '10+',
    description: 'Active Campaigns',
  },
  {
    image: story3,
    title: '10+',
    description: 'Supporting Countries',
  },
  {
    image: story4,
    title: '10+',
    description: 'Successful Campaigns',
  },
];

const StatsGrid = () => {
  return (
    <div>
      {/* Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-4 gap-5">
        {statsData.map((item, index) => (
          <Card key={index} item={item} />
        ))}
      </div>

      {/* Mobile Carousel using Swiper */}
      <div className="md:hidden px-2">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.1}
          grabCursor={true}
          centeredSlides={false}
        >
          {statsData.map((item, index) => (
            <SwiperSlide key={index}>
              <Card item={item} isMobile />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

const Card = ({ item, isMobile = false }) => (
  <div
    className={`${
      isMobile ? 'w-full h-[400px]' : 'h-[400px]'
    } rounded-[20px] bg-cover bg-center relative`}
    style={{ backgroundImage: `url(${item.image})` }}
  >
    <div
      className="flex flex-col absolute px-6 items-start justify-center
      h-30 w-full bottom-0
      rounded-br-[20px] rounded-bl-[20px]
      backdrop-blur-[40.7px]
      shadow-[0_4px_4px_rgba(0,0,0,0.25)]"
      style={{
        background:
          'linear-gradient(93.49deg, rgba(184, 117, 232, 0.53) 0.34%, rgba(66, 135, 204, 0.52) 100%)',
      }}
    >
      <p className="text-[32px] md:text-[36px] font-bold text-white">{item.title}</p>
      <p className="text-base font-bold text-white">{item.description}</p>
    </div>
  </div>
);

export default StatsGrid;
