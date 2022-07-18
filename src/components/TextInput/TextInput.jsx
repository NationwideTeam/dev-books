import React from "react";
import "./textInput.css";

export const TextInput = (props) => {
  return (
    <div className="inputForm">
      <label htmlFor={props.for} className="inputLabel">{props.label}</label>
      <input
        id={props.id}
        className="inputText"
        type={props.type}
        placeholder={props.placeholder}
        onChange={props.onChange}
        onBlur={props.onBlur}
        value={props.value}
      />
    </div>
  );
};
