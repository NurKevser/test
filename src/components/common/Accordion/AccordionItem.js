import Angle from "../../../assets/angle.svg";

const AccordionItem = ({ feature, onToggle, active }) => {
  const { title1, title2, content } = feature;
  return (
    <li className={`${style.Item} ${active ? style.Active : ""}`}>
      <button className={style.Title} onClick={onToggle}>
        <span>{title1}</span>
        {title2}
        <span className={style.Icon}>
          <img src={Angle} alt="accordion icon" />
        </span>
      </button>
      <div className={`${style.ContentWrapper} ${active ? style.Open : ""}`}>
        <div className={style.Line}></div>
        <div className={style.Content}>{content}</div>
        <img src="../../../assets/accordionPic.png" alt="accordion picture" />
      </div>
    </li>
  );
};

export default AccordionItem;
