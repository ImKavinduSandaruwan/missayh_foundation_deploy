import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Project from "./pages/Project";
import Home from "./pages/Home";
import About from "./pages/About";
import Motivation from "./pages/Community events/Motivation.jsx";
import Streetdrama from "./pages/Community events/Streetdrama.jsx";
import Carols from "./pages/Community events/Carols.jsx";
import ContactUs from "./pages/Contactus.jsx";
import PrivacyPolicy from "./pages/Privacypolicy.jsx";
import Terms from "./pages/Terms.jsx";
import Donate from "./pages/Donate.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      delay: 0,
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/motivation" element={<Motivation />} />
        <Route path="/streetdrama" element={<Streetdrama />} />
        <Route path="/carols" element={<Carols />} />
        <Route path="/policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
