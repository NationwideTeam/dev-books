import React from "react";
import "./modal.css";

export default function Modal(props) {
  return (
    <div className="modalWrap">
      <ul className="modalBody">
        <span className="modalBar"></span>
        {props.children}
      </ul>
    </div>
  );
}
