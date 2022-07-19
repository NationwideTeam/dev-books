import "./tabMenu.css";
import homeButton from "../../assets/icon/icon-home.svg";
import homeButtonFill from "../../assets/icon/icon-home-fill.svg";
import chatButton from "../../assets/icon/icon-message-circle.svg";
import chatButtonFill from "../../assets/icon/icon-message-circle-fill.svg";
import editButton from "../../assets/icon/icon-edit.svg";
import profileButton from "../../assets/icon/icon-user.svg";
import profileButtonFill from "../../assets/icon/icon-user-fill.svg";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function TabMenu() {
  const [activate, setActivate] = useState(1);

  return (
    <>
      <ul className="tabMenuWrapper">
        <li className="tabMenuHome">
          <Link
            to="/HomeFeed"
            className="tabLink"
            onClick={() => {
              setActivate(1);
            }}
          >
            <img src={activate === 1 ? homeButtonFill : homeButton} alt="" />홈
          </Link>
        </li>
        <li className="tabMenuChat">
          <Link
            to="/chatFeed"
            className="tabLink"
            onClick={() => {
              setActivate(2);
            }}
          >
            <img src={activate === 2 ? chatButtonFill : chatButton} alt="" />
            채팅
          </Link>
        </li>
        <li className="tabMenuEdit">
          <Link
            to="/PostUpload"
            className="tabLink"
            onClick={() => {
              setActivate(3);
            }}
          >
            <img src={editButton} alt="" />
            게시물 작성
          </Link>
        </li>
        <li className="tabMenuProfile">
          <Link
            to="/myProfile"
            className="tabLink"
            onClick={() => {
              setActivate(4);
            }}
          >
            <img
              src={activate === 4 ? profileButtonFill : profileButton}
              alt=""
            />
            프로필
          </Link>
        </li>
      </ul>
    </>
  );
}
