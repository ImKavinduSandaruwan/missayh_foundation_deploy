import React, { useRef } from "react";
import Contactusimg from "../assets/contactus.svg";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const mapContainerStyle = {
  width: "100%",
  height: "400px",
};

const mapCenter = {
  lat: 27.0642,
  lng: 88.265,
};

const locations = [
  { name: "Laxmi Tea Factory", position: { lat: 27.0651, lng: 88.2653 } },
  { name: "Golden Tips Tea Lounge", position: { lat: 27.0627, lng: 88.2635 } },
  { name: "Chamong Chiabari", position: { lat: 27.0637, lng: 88.2675 } },
  { name: "Eagles Dega Lopchu", position: { lat: 27.0635, lng: 88.264 } },
];

const ContactUs = () => {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x1afe4b",
        "template_y8meyfd",
        form.current,
        "2IpAsSiSuYvGQzZP8"
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.error("Email send failed:", error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <div className="flex flex-col items-center w-full bg-white text-gray-800 relative overflow-hidden">
      {/* Contact Button */}
      <div className="w-full relative h-20">
        <div className="absolute top-6 left-1/2 transform -translate-x-1/2">
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 shadow-sm rounded-full text-gray-800 hover:shadow-md transition"
          >
            <span className="text-xl leading-none">✧</span>
            <span className="text-sm font-medium">Contact</span>
          </motion.button>
        </div>
      </div>

      {/* Title */}
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-3xl font-semibold text-[#4287CC] mb-6"
      >
        Contact Us
      </motion.h1>

      {/* Image and Contact Info */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row overflow-hidden px-4 sm:px-6 md:px-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:block md:w-1/2 h-96 md:h-[500px]"
        >
          <img
            src={Contactusimg}
            alt="Children"
            className="w-full h-full object-cover object-left"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="w-[90%] mx-auto h-[450px] sm:h-[500px] md:w-1/2 bg-[#061B2F] text-white p-6 sm:p-8 md:p-10 mt-6 md:mt-0 text-center md:text-left flex flex-col justify-center"
        >
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center md:text-left">
            Get in touch <br /> with us
          </h2>
          <div className="text-left space-y-4 text-base">
            <div>
              <p className="text-sm sm:text-base">Phone</p>
              <p className="font-medium text-base sm:text-lg">+91-9791237788</p>
            </div>
            <div>
              <p className="text-sm sm:text-base">Email</p>
              <p className="font-medium text-base sm:text-lg">
                example@gmail.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="w-full py-12 px-4 bg-gradient-to-br from-purple-100 to-white flex justify-center"
      >
        <div className="p-6 md:p-8 rounded-lg w-full max-w-xl">
          <h2 className="text-3xl font-bold text-center mb-2">Contact</h2>
          <p className="text-center text-gray-600 mb-8">
            Please send us a message using the form. We'll get back to you as
            soon as we can!
          </p>

          <form ref={form} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label htmlFor="fullName" className="block mb-1 text-gray-700">
                Full name
              </label>
              <input
                name="from_name"
                id="fullName"
                type="text"
                required
                className="w-full px-4 py-3 rounded-lg bg-white shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="John Doe"
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1 text-gray-700">
                Email
              </label>
              <input
                name="from_email"
                id="email"
                type="email"
                required
                className="w-full px-4 py-3 rounded-lg bg-white shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="example@gmail.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1 text-gray-700">
                Phone Number
              </label>
              <input
                name="phone"
                id="phone"
                type="tel"
                className="w-full px-4 py-3 rounded-lg bg-white shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="+94712345678"
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1 text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                id="message"
                rows="5"
                required
                className="w-full px-4 py-3 rounded-lg bg-white shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
                placeholder="Type your message here"
              ></textarea>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                className="w-full max-w-xs bg-[#957DE8] text-white py-3 rounded-lg hover:bg-purple-600 transition"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </motion.div>

      {/* Google Map */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="w-full max-w-6xl px-4 mb-12"
      >
        <LoadScript googleMapsApiKey="AIzaSyDvO-7zLUi4aXcqZot4CoFvDi0v-Qk2EW4">
          <GoogleMap
            mapContainerStyle={mapContainerStyle}
            center={mapCenter}
            zoom={17}
          >
            {locations.map((loc, index) => (
              <Marker key={index} position={loc.position} />
            ))}
          </GoogleMap>
        </LoadScript>
      </motion.div>
    </div>
  );
};

export default ContactUs;
