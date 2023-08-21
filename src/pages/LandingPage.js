import React from "react";
// import style from "../styles/landingPage/landingPage.module.scss";
import Layout from "../components/common/Layout";
import HeroSection from "../landingPage/HeroSection";
// import About from "../components/LandingPage/About";
// import Works from "../components/LandingPage/Works";
// import Services from "../components/LandingPage/Services";
// import Contact from "../components/LandingPage/Contact";

const LandingPage = () => {
  return (
    <Layout>
      <div>
        <HeroSection />
        {/* <About />
        <Services />
        <Works />
        <Contact /> */}
      </div>
    </Layout>
  );
};

export default LandingPage;
