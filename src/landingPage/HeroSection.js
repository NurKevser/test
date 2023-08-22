import React from "react";
import style from "../styles/heroSection.module.scss";
import background from "../assets/gradientBg.svg";
import check from "../assets/checkBlue.svg";
import chartBg from "../assets/chartBg.png";
import arrow from "../assets/arrowRight.svg";
import Button from "../components/common/Button";

const HeroSection = () => {
  return (
    <div className={style.Container}>
      <img
        src={background}
        alt="hero section background image"
        className={style.Background}
      />
      <div className={style.Content}>
        <h1 className={style.Title}>
          10x your leads,
          <span>meetings and deals.</span>
        </h1>
        <p>
          Instantly scales your outreach campaigns with unlimited email sending{" "}
          <br />
          accounts & warmup, b2b lead database and smart AI
        </p>
        <Button variant="blue" size="lg" type="button">
          START FOR FREE
        </Button>
        <div className={style.Check}>
          <div>
            <img src={check} alt="check" />
            <p>No credit card required</p>
          </div>
          <div>
            <img src={check} alt="check" />
            <p>25 Leads & Free Warmup included</p>
          </div>
        </div>
      </div>
      {/* <div className={style.Image}>
        <img src={chartBg} alt="" width={1000} height={800} />
      </div> */}
      <div className={style.SeeMore}>
        <p>10,000+ clients who are getting more replies</p>
        <Button variant="white" size="lg">
          SEE MORE <img src={arrow} alt="" />
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
