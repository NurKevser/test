import { useState } from "react";
import AccordionItem from "./AccordionItem";
import style from "../../../styles/accordion.module.scss";

const Accordion = () => {
  const [clicked, setClicked] = useState("0");

  const handleToggle = (index) => {
    if (clicked === index) {
      return setClicked("0");
    }
    setClicked(index);
    console.log("active");
  };

  const features = [
    {
      title1: "Protect Your Deliverability with",
      title2: " Email Validation and Bulk Domain Testing",
      content:
        "Clean & verify your lead lists and ensure your domains are correctly set up for cold emailing. Our one-click bulk domain tester lets you know if your domain is missing important records.",
    },
    {
      title1: "Automate & Personalise Emails with ",
      title2: "Campaign Builder & Integrations",
      content:
        "Our Campaign Builder lets you use variables, sequences and smart scheduling to maximise your deliverability and response rates.",
    },
    {
      title1: "Voluptas praesentium facere?",
      title2: "Voluptas praesentium facere?",
      content:
        "Blanditiis aliquid adipisci quisquam reiciendis voluptates itaque.",
    },
  ];

  return (
    <ul className={style.Accordion}>
      {features.map((feature, index) => (
        <AccordionItem
          key={index}
          onToggle={() => handleToggle(index)}
          active={clicked === index}
          data={feature}
        />
      ))}
    </ul>
  );
};

export default Accordion;
