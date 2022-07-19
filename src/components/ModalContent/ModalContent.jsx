import React from "react";
import "./modalContent.css";

export default function ModalContent(props) {
  return (
    <li className="modalList">
      <button type="button" className="modalTxtBtn" onClick={props.onClick}>
        {props.txt}
      </button>
    </li>
  );
}
