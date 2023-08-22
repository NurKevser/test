import style from "../../styles/Button.module.scss";

function Button(props) {
  return (
    <button
      type={props.type}
      onClick={props?.onClick}
      className={`${style.Button} ${
        (props?.variant === "white" && style.WhiteButton) ||
        (props?.variant === "gray" && style.GrayButton) ||
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
