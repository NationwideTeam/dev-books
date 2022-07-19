import "./chatRoom.css";
import Topbar from "../../components/Topbar/Topbar";
import { ChatNav } from "../../components/Navbar/Navbar";
import userProfile from "../../assets/basic-profile-img.svg";
import { useState } from "react";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";
import { useNavigate } from "react-router-dom";

export default function ChatRoom() {
  const [chatInp, setChatInp] = useState("");
  const [chatImg, setChatImg] = useState("");
  const [modal, setModal] = useState(false);

  let navigate = useNavigate();
  const next = () => {
    navigate("/chatFeed");
  };

  return (
    <div className="chatRoomWrap">
      <Topbar />
      <ChatNav
        title="애월읍 위니브 감귤농장"
        onClickBtn={() => {
          setModal(true);
        }}
      />
      <section className="chatMain">
        <ul>
          <li className="userChat">
            <img className="userChatImg" src={userProfile} alt="" />
            <div className="userMessage">
              옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여,
              뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할
              넣는 풍부하게 뛰노는 인생의 힘있다.
            </div>
            <div className="userChatTime">12:39</div>
          </li>
          <li className="userChat">
            <img className="userChatImg" src={userProfile} alt="" />
            <div className="userMessage">
              안녕하세요. 감귤 사고싶어요요요요요
            </div>
            <div className="userChatTime">12:41</div>
          </li>
          <li className="myChat">
            <div className="myChatTime">12:50</div>
            <div className="myMessage">네 말씀하세요.</div>
          </li>
          <li className="myChat">
            <div className="myChatTime">12:51</div>
            <div className="myMessage myMessageImg"></div>
          </li>
        </ul>
      </section>
      <section className="chatInputWrap">
        <form className="chatInputForm">
          <label htmlFor="chatUploadFile" className="chatUploadBtn"></label>
          <input
            className="chatUpload"
            id="chatUploadFile"
            type="file"
            onChange={(e) => setChatImg(e.target.files[0].name)}
          ></input>
          <label htmlFor="chatRoomInput" className="a11yHidden">
            메시지 입력창 입니다.
          </label>
          <input
            type="text"
            placeholder="메시지 입력하기..."
            className="chatInput"
            id="chatRoomInput"
            onChange={(e) => {
              setChatInp(e.target.value);
            }}
          />
          <button
            className={
              chatImg === "" && chatInp === ""
                ? "chatSubmit submitDisabled"
                : "chatSubmit"
            }
            type="button"
          >
            전송
          </button>
        </form>
      </section>
      <div
        className={modal ? "chatModal" : "disabledChatModal"}
        onClick={() => {
          setModal(false);
        }}
      >
        <Modal>
          <ModalContent txt="채팅방 나가기" onClick={next} />
        </Modal>
      </div>
    </div>
  );
}
