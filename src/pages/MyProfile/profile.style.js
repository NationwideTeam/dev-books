import styled from "styled-components";
import message from "../../assets/icon/icon-message-circle.svg";
import share from "../../assets/icon/icon-share.svg";

export const ProfileMobileScreen = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background-color: #fff;
  margin: 0 auto;
  overflow: auto;
  overflow-x: hidden;
  font-family: "Noto Sans KR", sans-serif;
  .disabledProfilePopup {
    display: none;
  }
`;

export const ProfileMain = styled.main`
  height: 712px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProfileButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const Tabmenu = styled.div`
  position: absolute;
  background-color: #fff;
  bottom: 0;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 34px;
  border-radius: 100%;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  background: ${(props) => {
    if (props.message) {
      return `url(${message})`;
    }
    if (props.share) {
      return `url(${share})`;
    }
  }};
  background-repeat: no-repeat;
  background-position: center;
`;
