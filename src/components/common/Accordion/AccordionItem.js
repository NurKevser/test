import Angle from "../../../assets/angle.svg";
import accPic from "../../../assets/accordionPic.png";
import style from "../../../styles/accordionItem.module.scss";
import Button from "../Button";

const AccordionItem = ({ data, onToggle, active }) => {
  const { title1, title2, content } = data;
  console.log("active Item", active);
  return (
    <li className={`${style.Item}`}>
      <button className={style.Title} onClick={onToggle}>
        <h4>
          <span>{title1}</span>
          {title2}
        </h4>
        <img
          src={Angle}
          alt="accordion icon"
          className={`${style.Icon} ${active ? style.IconOpen : ""}`}
        />
      </button>
      <div
        className={`${style.ContentWrapper} ${
          active ? style.ContentWrapperOpen : ""
        }`}
      >
        <div className={style.Line}></div>
        <div className={style.Content}>
          <div>
            <div className={style.Text}>{content}</div>
            <Button variant="blue" size="lg">
              START FOR FREE
            </Button>
          </div>

          <img src={accPic} alt="accordion picture" />
        </div>
      </div>
    </li>
  );
};

export default AccordionItem;
