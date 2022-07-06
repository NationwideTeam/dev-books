import React from "react";
import "./textInput.css";

export const TextInput = (props) => {
  return (
    <form className="inputForm">
      <label className="inputLabel">{props.label}</label>
      <input
        className="inputText"
        type={props.type}
        placeholder={props.placeholder}
      />
    </form>
  );
};
