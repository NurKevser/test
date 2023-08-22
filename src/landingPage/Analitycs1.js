import React from "react";
import rate1 from "../assets/rateBudget1.svg";
import rate2 from "../assets/rateBudget2.svg";
import rate3 from "../assets/rateBudget3.svg";
import rate4 from "../assets/rateBudget4.svg";
import style from "../styles/analitycs1.module.scss";

const Analitycs1 = () => {
  return (
    <div className={style.Container}>
      <div>
        <img src={rate1} alt="" />
        <p className={style.Title}>Instantly User Ratings</p>
      </div>
      <div>
        <img src={rate4} alt="" />
        <div className={style.Title}>Ease of Use</div>
        <p>Email Marketing Average: 8.7</p>
      </div>
      <div>
        <img src={rate2} alt="" />
        <div className={style.Title}>Quality of support</div>
        <p>Email Marketing Average: 8.5</p>
      </div>
      <div>
        <img src={rate3} alt="" />
        <div className={style.Title}>Ease of setup</div>
        <p>Email Marketing Average: 8.4</p>
      </div>
    </div>
  );
};

export default Analitycs1;
