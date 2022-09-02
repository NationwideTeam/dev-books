import Topbar from "../../components/Topbar/Topbar";
import { ChatNav } from "../../components/Navbar/Navbar";
import userProfile from "../../assets/basic-profile-img.svg";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";
import { useNavigate } from "react-router-dom";
import {
  ChatRoomWrap,
  ChatMain,
  ChatList,
  ChatTime,
  UserChatImg,
  UserChatMsg,
  MyChatMsg,
  ChatInputWrap,
  ChatInputForm,
  ChatUploadBtn,
  ChatUploadInput,
  ChatMsgInput,
  ChatSubmit,
  ChatModal,
} from "./chatRoom.style";

export default function ChatRoom() {
  const [chatInp, setChatInp] = useState("");
  const [chatImg, setChatImg] = useState("");
  const [modal, setModal] = useState(false);

  let navigate = useNavigate();
  const next = () => {
    navigate("/chatFeed");
  };

  return (
    <ChatRoomWrap>
      <Topbar />
      <ChatNav
        title="애월읍 위니브 감귤농장"
        onClickBtn={() => {
          setModal(true);
        }}
      />
      <ChatMain>
        <ul>
          <ChatList>
            <UserChatImg src={userProfile} />
            <UserChatMsg>
              옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
              뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
              넣는 풍부하게 뛰노는 인생의 힘있다.
            </UserChatMsg>
            <ChatTime>12:39</ChatTime>
          </ChatList>
          <ChatList>
            <UserChatImg src={userProfile} />
            <UserChatMsg>안녕하세요. 감귤 사고싶어요요요요요</UserChatMsg>
            <ChatTime>12:41</ChatTime>
          </ChatList>
          <ChatList myChat>
            <ChatTime>12:50</ChatTime>
            <MyChatMsg>네 말씀하세요.</MyChatMsg>
          </ChatList>
          <ChatList myChat>
            <ChatTime>12:51</ChatTime>
            <MyChatMsg chatImg></MyChatMsg>
          </ChatList>
        </ul>
      </ChatMain>
      <ChatInputWrap>
        <ChatInputForm>
          <ChatUploadBtn htmlFor="chatUploadFile"></ChatUploadBtn>
          <ChatUploadInput
            id="chatUploadFile"
            onChange={(e) => setChatImg(e.target.files[0].name)}
          ></ChatUploadInput>
          <label htmlFor="chatRoomInput" className="a11yHidden">
            메시지 입력창 입니다.
          </label>
          <ChatMsgInput
            id="chatRoomInput"
            onChange={(e) => {
              setChatInp(e.target.value);
            }}
          />
          <ChatSubmit className={chatImg === "" && chatInp === ""}>
            전송
          </ChatSubmit>
        </ChatInputForm>
      </ChatInputWrap>
      <ChatModal
        className={modal}
        onClick={() => {
          setModal(false);
        }}
      >
        <Modal>
          <ModalContent txt="채팅방 나가기" onClick={next} />
        </Modal>
      </ChatModal>
    </ChatRoomWrap>
  );
}
