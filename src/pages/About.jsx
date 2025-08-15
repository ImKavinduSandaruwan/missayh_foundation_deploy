import React from 'react'
import founder from '../assets/founder.jpg'
import mission from '../assets/mission.jpg'
import goal from '../assets/goal.png'
import eye from '../assets/eye.png'
import compass from '../assets/compass.png'
import SectionHeader from '../components/SectionHeader'
import CTA from '../components/CallToAction'
import TeamSection from '../components/TeamSection'

const About = () => {
  return (
    <>
      {/* Hero section */}
      <div className="flex flex-col items-center justify-center gap-10 py-20 px-6 md:px-20 text-center">
        <div
          className="flex flex-row items-center justify-center w-fit h-[29px] p-5 gap-2 rounded-[20px] bg-white shadow-[0_2px_8px_0_rgba(0,0,0,0.09)]"
          data-aos='fade-up' data-aos-delay="200"
        >
          
          <span className="text-xl leading-none">✧</span>
          <h3 className="text-base font-medium text-black">About Us</h3>
        </div>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#4287CC]" data-aos='fade-up' data-aos-delay="300">
          Who We Are
        </h1>
        <p className="text-base sm:text-lg font-medium text-[#353535] leading-8" data-aos='fade-up' data-aos-delay="400">
          At Messiah Foundation, we are a team of compassionate individuals united by a common purpose — to serve, uplift, and bring hope to those in need. As a nonprofit organization, we are committed to supporting the poor, vulnerable, and underserved by providing life-changing essentials like food, clean water, education, healthcare, and shelter. Rooted in empathy and driven by impact, we believe every person deserves the chance to live with dignity and opportunity. Our work is a reflection of humanity’s power to care, connect, and create lasting change
        </p>
        <p className="text-base sm:text-lg font-medium text-[#353535]" data-aos='fade-up' data-aos-delay="500">
          — one act of kindness at a time.
        </p>
      </div>

      {/* Our Founder */}
      <div className="flex flex-col gap-16 items-center md:px-20 py-20 bg-[#EDF1F8]">
        <SectionHeader label="Our Founder" title="Our Founder" />
        <div className="flex flex-col md:flex-row gap-10">
          <img
            src={founder}
            alt="Founder"
            className="w-full md:w-1/2 object-cover object-center rounded-xl"
            data-aos='fade-up' data-aos-delay="200"
          />
          <div className="flex flex-col justify-between px-6 md:px-0 text-center md:text-left gap-8" data-aos='fade-up' data-aos-delay="300">
            <p className="text-base sm:text-lg font-medium text-[#353535] leading-8 md:w-[90%]">
              At the heart of the Messiah Foundation is our founder, Sebastian Kabilash, a visionary guided by compassion and a deep sense of purpose. Driven by the belief that every human deserves dignity, care, and opportunity, Sebastian founded Messiah Foundation to serve the poor, vulnerable, and underserved. What began as a small act of kindness has grown into a movement—impacting lives through food programs, clean water initiatives, education, healthcare, and shelter. His leadership and unwavering faith in humanity continue to inspire the work we do every day. Sebastian's journey reminds us that meaningful change begins when we choose to care and take action.
            </p>
            <div className="flex flex-col gap-2 text-base sm:text-lg md:text-xl">
              <p className="font-medium text-black">Contact No. - +94 76 679 7765</p>
              <p className="font-bold text-black">E-mail - kabilashiba200017@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      {/* Our Team */}
      <div className="flex flex-col md:px-20 py-20 gap-10">
        <SectionHeader label="Team" title="Our Team" />
        <div data-aos='fade-up' data-aos-delay="200">
          <TeamSection />
        </div>
      </div>

      {/* Mission, Vision, Goal */}
      <section
        className="relative w-full bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 sm:px-6 py-20"
        style={{ backgroundImage: `url(${mission})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#061B2F] opacity-90 z-0"></div>

        <div className="relative z-10 flex flex-col items-center justify-center w-full max-w-4xl text-center gap-16">
          {/* Goal */}
          <div className="flex flex-col items-center gap-4" data-aos="fade-up" data-aos-delay="200">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Goal</h2>
              <img src={goal} alt="Goal Icon" className="w-10 h-10" />
            </div>
            <hr className="border-t border-white w-full max-w-[600px]" />
            <p className="text-white text-base md:text-lg font-medium leading-relaxed max-w-[700px]">
              Our goal is to support every suffering child with food, education, healthcare, and hope—so they can grow, thrive, and build a brighter future.
            </p>
          </div>

          {/* Vision */}
          <div className="flex flex-col items-center gap-4" data-aos="fade-up" data-aos-delay="300">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Vision</h2>
              <img src={eye} alt="Vision Icon" className="w-10 h-10" />
            </div>
            <hr className="border-t border-white w-full max-w-[600px]" />
            <p className="text-white text-base md:text-lg font-medium leading-relaxed max-w-[700px]">
              A world where no one suffers from poverty, hunger, or neglect – where every individual, regardless of background, has the opportunity to live with dignity, hope, and purpose.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col items-center gap-4" data-aos="fade-up" data-aos-delay="400">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Mission</h2>
              <img src={compass} alt="Mission Icon" className="w-10 h-10" />
            </div>
            <hr className="border-t border-white w-full max-w-[600px]" />
            <p className="text-white text-base md:text-lg font-medium leading-relaxed max-w-[700px]">
              To uplift the lives of poor and marginalized communities by providing essential resources such as food, clean water, education, healthcare, and shelter. We aim to restore dignity, spread compassion, and empower individuals to build a brighter, self-sufficient future.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CTA />
    </>
  )
}

export default About
