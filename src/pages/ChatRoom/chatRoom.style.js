import styled from "styled-components";
import myChatImg from "../../assets/chat-exapmle.png";
import imgBtn from "../../assets/img-button.svg";

export const ChatRoomWrap = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
  overflow: hidden;
`;

export const ChatMain = styled.section`
  height: 711px;
  background-color: #f8f8f8;
  padding: 215px 16px 11px 16px;
`;

export const ChatList = styled.li`
  display: flex;
  align-items: flex-end;
  margin: 9px 0;
  padding-left: 42px;
  position: relative;

  ${(props) => {
    if (props.myChat) {
      return `justify-content: flex-end`;
    }
  }}
`;

export const ChatTime = styled.div`
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  color: #767676;
`;

export const UserChatImg = styled.img.attrs({
  alt: "",
})`
  width: 42px;
  height: 42px;
  position: absolute;
  top: 0;
  left: 0;
`;

export const UserChatMsg = styled.div`
  width: 240px;
  background-color: #fff;
  border: 1px solid #c4c4c4;
  border-radius: 0px 10px 10px 10px;
  padding: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin: 0 6px 0 12px;
`;

export const MyChatMsg = styled.div`
  width: 110px;
  background-color: #3e7c17;
  color: #fff;
  border-radius: 10px 0 10px 10px;
  padding: 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-left: 6px;

  ${(props) => {
    if (props.chatImg) {
      return `
        background: url(${myChatImg});
        width: 240px;
        height: 240px;
      `;
    }
  }}
`;

export const ChatInputWrap = styled.section`
  width: 100%;
`;

export const ChatInputForm = styled.form`
  width: 390px;
  margin: 0 auto;
  padding: 13px 16px;
  box-sizing: border-box;
  border-top: 0.5px solid #dbdbdb;
  display: flex;
  align-items: center;
`;

export const ChatUploadBtn = styled.label`
  display: inline-block;
  background: url(${imgBtn});
  width: 36px;
  height: 36px;
  cursor: pointer;
`;

export const ChatUploadInput = styled.input.attrs({
  type: "file",
})`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

export const ChatMsgInput = styled.input.attrs({
  type: "text",
  placeholder: "메시지 입력하기...",
})`
  width: 264px;
  margin: 0 10px 0 18px;
  vertical-align: middle;
  &::placeholder {
    color: #c4c4c4;
  }
  &:focus {
    outline: none;
  }
`;

export const ChatSubmit = styled.button.attrs({
  type: "button",
})`
  background-color: transparent;
  color: #3e7c17;
  padding: 0;
  vertical-align: middle;
  ${(props) => {
    if (props.className) {
      return `color: #c4c4c4`;
    }
  }}
`;

export const ChatModal = styled.div`
  ${(props) => {
    if (!props.className) {
      return `display: none`;
    }
  }}
`;
