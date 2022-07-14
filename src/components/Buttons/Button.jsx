import "./button.css";

function Button(props) {
  return (
    <button className={props.className} type={props.type}>
      {props.children}
    </button>
  );
}

export default Button;
