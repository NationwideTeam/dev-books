import React from "react";
import "./user.css";
import Button from "../Buttons/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const UserSearch = (props) => {
  return (
    <li className="userSearchList" onClick={props.click}>
      <img src={props.picture} alt="유저 프로필 이미지" />
      <div className="userInfo">
        <strong className="userName">{props.name}</strong>
        <strong className="userId">{props.id}</strong>
      </div>
    </li>
  );
};

export const UserFollow = (props) => {
  const { picture, name, id, button } = props;
  const myAccountName = localStorage.getItem("accountname");
  const [isFollow, setIsFollow] = useState(button);
  let navigate = useNavigate();

  // 유저 클릭 시 해당 유저의 프로필 페이지로 이동
  const moveUserProfile = () => {
    if (id === myAccountName) {
      navigate(`/myProfile`);
    } else if (id !== myAccountName) {
      navigate(`/yourProfile?id=${id}`);
    }
  };

  const handleClick = () => {
    setIsFollow((isFollow) => !isFollow);
  };

  return (
    <li className="userSearchList">
      <div className="userSearchInfo" onClick={moveUserProfile}>
        <img src={picture} alt="유저 프로필 이미지" />
        <div className="userInfo">
          <strong className="userName">{name}</strong>
          <strong className="userId">{id}</strong>
        </div>
      </div>
      <div className={id === myAccountName ? "hidden" : "userFollowButton"}>
        <Button
          className={isFollow ? "button sm active" : "button sm"}
          onClick={handleClick}
        >
          {isFollow ? "취소" : "팔로우"}
        </Button>
      </div>
    </li>
  );
};

export const UserChatList = (props) => {
  return (
    <li className="userChatList" onClick={props.onClick}>
      <img src={props.picture} alt="유저 프로필 이미지" />
      <div className="userChatInfo">
        <strong className="userChatName">{props.name}</strong>
        <p className="userChatContent">{props.chat}</p>
      </div>
      <span className="userChatDate">2020.10.25</span>
    </li>
  );
};
