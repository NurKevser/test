import React from "react";
import style from "../styles/landingPage.module.scss";
import Layout from "../components/common/Layout";
import HeroSection from "../landingPage/HeroSection";
import SliderCard from "../components/cards/SliderCard";
import Accordion from "../components/common/Accordion/Accordion";
import Analitycs1 from "../landingPage/Analitycs1";
import Analitycs2 from "../landingPage/Analitycs2";

const LandingPage = () => {
  return (
    <Layout>
      <div className={style.Container}>
        <HeroSection />
        {/* <SliderCard /> */}
        <Analitycs1 />
        <Analitycs2 />
        <Accordion />
      </div>
    </Layout>
  );
};

export default LandingPage;
