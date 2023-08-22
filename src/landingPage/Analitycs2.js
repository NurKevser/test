import React from "react";
import style from "../styles/analitycs2.module.scss";
import accounts from "../assets/accounts.png";
import warmup from "../assets/warmup.png";
import plus from "../assets/plusFull.svg";
import Button from "../components/common/Button";

const Analitycs2 = () => {
  return (
    <div>
      <div className={style.Container}>
        <div className={style.Card1}>
          <div>
            <img src={accounts} alt="" className={style.Image} />
          </div>
          <div className={style.Content}>
            <div>
              Infinitely Scale Your Outreach with{" "}
              <span className={style.GradientTitle}>Unlimited Accounts</span>
            </div>
            <Button variant="white" size="lg">
              START FOR FREE
            </Button>

            <img src={plus} alt="" />
          </div>
        </div>
      </div>
      <div className={style.Container}>
        <div className={style.Card2}>
          <div className={style.Content}>
            <div>
              Reach Your Prospects Inbox with{" "}
              <span className={style.GradientTitle}>Unlimited Warmup</span>
            </div>
            <Button variant="white" size="lg">
              START FOR FREE
            </Button>

            <img src={plus} alt="" />
          </div>

          <div>
            <img src={warmup} alt="" className={style.Image} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analitycs2;
