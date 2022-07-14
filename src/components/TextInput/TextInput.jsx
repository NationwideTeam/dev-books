import React from "react";
import "./textInput.css";

export const TextInput = (props) => {
  return (
    <form className="inputForm">
      <label htmlFor={props.for} className="inputLabel">{props.label}</label>
      <input
        id={props.id}
        className="inputText"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        value={props.value}
      />
    </form>
  );
};
