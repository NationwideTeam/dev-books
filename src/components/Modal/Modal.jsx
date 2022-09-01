import React from "react";
import { ModalWrap, ModalBody, ModalBar } from "./modal.style";

export default function Modal(props) {
  return (
    <ModalWrap>
      <ModalBody>
        <ModalBar></ModalBar>
        {props.children}
      </ModalBody>
    </ModalWrap>
  );
}
