import styled from "styled-components";

export const AlertBackground = styled.div`
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 50;
`;

export const AlertWrapper = styled.div`
  width: 252px;
  height: 110px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  border-radius: 10px;
  box-sizing: border-box;
`;

export const AlertTxt = styled.strong`
  display: block;
  text-align: center;
  padding: 22px 0px;
  font-weight: 500;
  font-size: 16px;
`;

export const AlertBtnWrap = styled.div`
  width: 100%;
  border-top: 0.5px solid #dbdbdb;
`;

export const AlertBtn = styled.button`
  background-color: transparent;
  padding: 14px 0;
  font-weight: 400;
  font-size: 14px;
  width: 50%;

  ${(props) => {
    if (props.className === "cancelBtn") {
      return `border-right: 0.5px solid #dbdbdb;`;
    }
    if (props.className === "deleteBtn") {
      return `
      font-weight: 500;
      color: #3e7c17;
      `;
    }
  }}
`;
