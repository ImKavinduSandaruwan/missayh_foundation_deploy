import React from "react";
import people from "../assets/people.png";
import whatsapp from "../assets/whatsapp.png";
import hands from "../assets/hands.jpg";
import CommunityEvent from "../components/CommunityEvent";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CallToAction";
import ProjectDetails from "../components/ProjectDetails";
import communityBg from "../assets/community-bg.png";
import speaker from "../assets/speaker.png";

const Project = () => {
  return (
    <>
      {/* Hero section */}
      <div className="flex flex-col items-center justify-center gap-6 md:gap-10 py-16 px-6 md:px-20">
        <div
          className="flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.09)]"
          data-aos="fade-up"
          data-aos-delay="100"
        >
           <span className="text-xl leading-none">✧</span>
          <h3 className="text-base font-medium text-black">Projects</h3>
        </div>
        <h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#4287CC] text-center"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          Our Projects
        </h1>
        <div data-aos="fade-up" data-aos-delay="200">
          <ProjectDetails />
        </div>
      </div>

      <div className="px-4 md:px-20 py-16 bg-[#EDF1F8]">
        <div className="relative rounded-3xl overflow-hidden">
          {/* Blurred Background Layer */}
          <div
            className="absolute inset-0 bg-cover bg-left bg-no-repeat blur-sm z-10"
            style={{
              backgroundImage: `url(${communityBg})`,
              opacity: 0.7,
            }}
          ></div>

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundColor: "rgba(66, 135, 204,0.9)",
            }}
          ></div>

          {/* Main Content */}
          <div
            className="relative z-20 flex flex-col md:flex-row items-center gap-10 md:gap-8 px-6 md:px-10 py-10"
            data-aos="fade-up"
            data-aos-delay="10"
          >
            {/* Left section */}
            <div className="flex flex-col items-center gap-8 w-full md:w-[60%]">
              <div className="flex flex-row items-center justify-center gap-4">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center md:text-left">
                  Our Community
                </h1>
                <img
                  src={people}
                  alt="People Icon"
                  className="w-8 h-8 sm:w-10 sm:h-10"
                />
              </div>

              <hr
                className="border-t border-white w-full"
                data-aos="fade-up"
                data-aos-delay="16"
              />

              <p
                className="text-sm sm:text-base font-medium text-white text-center md:text-left leading-relaxed z-20"
                data-aos="fade-up"
                data-aos-delay="20"
              >
                At Messiah Foundation, our community is the beating heart of
                everything we do. It's made up of kind-hearted individuals,
                families, volunteers, donors, and partners—each united by a
                shared purpose: to uplift lives with compassion and care.
                <br />
                <br />
                From the children we nourish to the volunteers who dedicate
                their time, every person plays a vital role in creating lasting
                change. Our strength lies in this collective spirit — a diverse
                and committed network bound together by empathy, generosity, and
                the belief that no one should ever be left behind.
                <br />
                <br />
                Together, we are more than just a foundation. We are a movement
                of hope, driven by love, and rooted in humanity.
              </p>

              {/* WhatsApp Button */}
              <a
                href="https://wa.me/94766797765"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 bg-white rounded-lg w-full py-4 px-6 transition hover:scale-105 duration-300 z-20"
                data-aos="fade-up"
                data-aos-delay="25"
              >
                <img src={whatsapp} alt="WhatsApp Icon" className="w-6 h-6" />
                <p className="text-base sm:text-xl font-medium text-black z-20">
                  Join Our Community
                </p>
              </a>
            </div>

            {/* right section */}
            <div
              className="w-full md:w-[484px] flex justify-center z-20"
              data-aos="fade-up"
              data-aos-delay="20"
            >
              <img
                src={hands}
                alt="Hands"
                className="max-w-[484px] h-[470px] rounded-xl object-cover hidden md:block z-20"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Community Events */}
      <div className="flex flex-col gap-16 items-center px-4 md:px-20 py-16">
        <SectionHeader label="Events" title="Community Events & Workshops" />
        <div data-aos="fade-up" data-aos-delay="150">
          <CommunityEvent />
        </div>
      </div>

      {/* Call to Action */}
      <CTA />
    </>
  );
};

export default Project;
