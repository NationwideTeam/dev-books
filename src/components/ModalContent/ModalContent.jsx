import React from "react";
import styled from "styled-components";

const ModalList = styled.li`
  padding-left: 26px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

const ModalTxtBtn = styled.button.attrs({
  type: "button",
})`
  width: 100%;
  height: 46px;
  padding: 0;
  background-color: transparent;
  text-align: left;
`;

export default function ModalContent(props) {
  return (
    <ModalList>
      <ModalTxtBtn onClick={props.onClick}>{props.txt}</ModalTxtBtn>
    </ModalList>
  );
}
