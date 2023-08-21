import { useState } from "react";

function Button(props) {
  const [size] = useState(props.size);
  const [variant] = useState(props.variant);

  return (
    <button
      type={props.type}
      onClick={props?.onClick}
      className={`${style.Button} ${
        (props?.variant === "white" && style.WhiteButton) ||
        (props?.variant === "blue" && style.GrayButton) ||
        (props?.variant === "blue" && style.BlueButton)
      }  ${
        (props.size === "lg" && style.LargeButton) ||
        (props.size === "sm" && style.SmallButton)
      } `}
    >
      {props.children}
    </button>
  );
}

export default Button;
