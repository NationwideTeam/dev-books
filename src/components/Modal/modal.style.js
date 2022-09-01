import styled from "styled-components";

export const ModalWrap = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
`;

export const ModalBody = styled.ul`
  position: absolute;
  bottom: 0px;
  width: 100%;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
  padding: 36px 0 10px;
`;

export const ModalBar = styled.span`
  position: absolute;
  width: 50px;
  height: 4px;
  background-color: #dbdbdb;
  border-radius: 5px;
  top: 16px;
  left: 50%;
  transform: translate(-50%);
`;
