import React from "react";
import Heart from "../assets/Heart.png";
import founder from "../assets/founder.jpg";
import homehero from "../assets/homehero.png";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CallToAction";
import CommunityEvent from "../components/CommunityEvent";
import StatsGrid from "../components/StatsCard";
import ProjectsSection from "../components/ProjectsSection";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <div
        className="flex flex-col items-center md:items-start justify-center px-6 md:px-20 py-16 md:py-20 min-h-[1200px] bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(180deg, rgba(184, 117, 232, 0.22), rgba(66, 135, 204, 0.22)), url(${homehero})`,
        }}
      >
        {/* Hero Text */}
        <div className="max-w-3xl flex flex-col items-center md:items-start text-center md:text-left gap-4">
          <h1
            className="text-4xl md:text-6xl font-bold text-white leading-tight"
            data-aos="fade-up"
            data-aos-delay="0"
          >
            Be the Reason Someone Smiles Today.
          </h1>
          <p
            className="text-lg md:text-2xl text-white leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="10"
          >
            Your small act of kindness can change a life. Join us in making a
            difference.
          </p>
          <div
            className="flex flex-col sm:flex-row gap-6 items-center"
            data-aos="fade-up"
            data-aos-delay="20"
          >
            <Link to="/donate">
              <button className="flex items-center gap-2 text-lg md:text-xl font-bold text-white bg-[#957DE8] px-6 py-3 rounded-xl">
                Donate
                <img src={Heart} alt="heart" className="w-6 h-6" />
              </button>
            </Link>
            <Link to="/contactus">
              <button className="text-lg md:text-xl text-white px-6 py-3 border border-white/10 bg-white/5 backdrop-blur-[47.9px] rounded-xl">
                Join Us
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Who we are */}
      <div
        className="flex flex-col items-center px-6 md:px-20 py-16 gap-10"
        style={{
          background:
            "linear-gradient(93.49deg, rgba(184, 117, 232, 0.086) 0.34%, rgba(66, 135, 204, 0.086) 100%)",
        }}
      >
        <SectionHeader label="Our Story" title="Who We Are" />
        <p
          className="max-w-4xl text-center text-base md:text-lg font-medium text-[#353535] leading-7 md:leading-8"
          data-aos="fade-up"
          data-aos-delay="30"
        >
          Messiah Foundation is a nonprofit dedicated to supporting the poor,
          vulnerable, and underserved. Our passionate team provides essentials
          like food, clean water, education, healthcare, and shelter. Rooted in
          compassion and driven by purpose, we believe everyone deserves
          dignity, hope, and opportunity.
        </p>
        <div className="w-full" data-aos="fade-up" data-aos-delay="50">
          <StatsGrid />
        </div>
      </div>

      {/* Our Founder */}
      <div className="flex flex-col items-center gap-12 px-6 md:px-20 py-16">
        <SectionHeader label="Our Founder" title="Our Founder" />
        <div className="flex flex-col md:flex-row items-center gap-10 w-full max-w-6xl">
          <img
            src={founder}
            alt="founder"
            className="w-full max-w-xs md:max-w-sm rounded-2xl object-cover"
            data-aos="fade-up"
            data-aos-delay="30"
          />
          <div
            className="flex flex-col gap-6 text-center md:text-left"
            data-aos="fade-up"
            data-aos-delay="50"
          >
            <p className="text-base md:text-lg font-medium text-[#353535] leading-7">
              Sebastian Kabilash, the founder of Messiah Foundation, is a
              compassionate leader driven by a deep calling to serve humanity...
              <br />
              His unwavering commitment to making a difference continues to
              inspire volunteers, donors, and communities around the world.
            </p>
            <p className="text-lg md:text-xl font-bold text-black leading-8">
              “He leads with compassion, he acts with purpose, and he uplifts
              with vision—his heart fuels hope and change.”
            </p>
            <div className="text-black">
              <p className="text-lg font-medium">Sebastian Kabilash</p>
              <p className="text-lg">Founder</p>
              <p className="text-lg font-bold">Messiah Foundation</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects */}
      <div className="flex flex-col items-center gap-12 px-6 md:px-20 py-16 bg-[#EDF6FF]">
        <SectionHeader label="Projects" title="Our Projects" />
        <div className="w-full" data-aos="fade-up" data-aos-delay="30">
          <ProjectsSection />
        </div>
      </div>

      {/* Community Events */}
      <div className="flex flex-col items-center gap-12 px-6 md:px-20 py-16">
        <SectionHeader label="Events" title="Community Events" />
        <div className="w-full" data-aos="fade-up" data-aos-delay="30">
          <CommunityEvent />
        </div>
      </div>

      {/* Call to Action */}
      <CTA />
    </>
  );
};

export default Home;
