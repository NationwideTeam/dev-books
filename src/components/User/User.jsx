import React from "react";
import "./user.css";
import Button from "../Buttons/Button";
import { useState, useEffect } from "react";
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
  const accountName = props.id;
  const myAccountName = localStorage.getItem("accountname");
  const [isFollow, setIsFollow] = useState(false);
  const [myAccount, setMyAccount] = useState(false);
  let navigate = useNavigate();

  useEffect(() => {
    getFollowStatus();
  }, []);

  // 팔로우 한 사용자 -> 취소, 팔로우 하지 않은 사용자 -> 팔로우 버튼 표시
  const getFollowStatus = async () => {
    const url = "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem("token");
    const init = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };

    try {
      const resUserFollow = await fetch(`${url}/profile/${accountName}`, init);
      const resUserFollowJson = await resUserFollow.json();
      if (resUserFollowJson.profile.isfollow === false) {
        setIsFollow(true);
      }
      // 나의 계정일 경우 팔로우 or 취소 버튼 표시 X
      if (resUserFollowJson.profile.accountname === myAccountName) {
        setMyAccount(true);
      }
    } catch (err) {
      console.error("err", err);
    }
  };

  // 유저 클릭 시 해당 유저의 프로필 페이지로 이동
  const moveUserProfile = () => {
    if (accountName === myAccountName) {
      navigate(`/myProfile`);
    } else if (accountName !== myAccountName) {
      navigate(`/yourProfile?id=${accountName}`);
    }
  };

  const handleClick = () => {
    setIsFollow((isFollow) => !isFollow);
  };

  return (
    <li className="userSearchList" onClick={moveUserProfile}>
      <img src={props.picture} alt="유저 프로필 이미지" />
      <div className="userInfo">
        <strong className="userName">{props.name}</strong>
        <strong className="userId">{props.id}</strong>
      </div>
      <div className={myAccount ? "hidden" : "userFollowButton"}>
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
