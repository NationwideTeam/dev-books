import React from "react";
import "./user.css";
import Button from "../Buttons/Button";
import { useState } from "react";

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
  const [isFollow, setIsFollow] = useState(true);

  const handleClick = () => {
    setIsFollow((isFollow) => !isFollow);
  };
  return (
    <li className="userSearchList">
      <img src={props.picture} alt="유저 프로필 이미지" />
      <div className="userInfo">
        <strong className="userName">{props.name}</strong>
        <strong className="userId">{props.id}</strong>
      </div>
      <div className="userFollowButton">
        <Button
          className={isFollow ? "button sm" : "button sm active"}
          onClick={handleClick}
        >
          {isFollow ? "팔로우" : "취소"}
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
