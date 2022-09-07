import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../Buttons/Button';
import {
  UserSearchList,
  UserSearchInfo,
  UserImage,
  UserInfoContainer,
  UserName,
  UserId,
  UserChatItem,
  UserChatInfo,
  UserChatImg,
  UserChatName,
  UserChatContent,
  UserChatDate,
} from './user.style';

export const UserSearch = (props) => {
  return (
    <UserSearchList className="userSearchList" onClick={props.click}>
      <UserImage src={props.picture} alt="유저 프로필 이미지" />
      <UserInfoContainer className="userInfo">
        <UserName className="userName">{props.name}</UserName>
        <UserId className="userId">{props.id}</UserId>
      </UserInfoContainer>
    </UserSearchList>
  );
};

export const UserFollow = (props) => {
  const { picture, name, id, button } = props;
  const myAccountName = localStorage.getItem('accountname');
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
    <UserSearchList className="userSearchList">
      <UserSearchInfo className="userSearchInfo" onClick={moveUserProfile}>
        <UserImage src={picture} alt="유저 프로필 이미지" />
        <UserInfoContainer className="userInfo">
          <UserName className="userName">{name}</UserName>
          <UserId className="userId">{id}</UserId>
        </UserInfoContainer>
      </UserSearchInfo>
      <div className={id === myAccountName ? 'hidden' : 'userFollowButton'}>
        <Button
          className={isFollow ? 'button sm active' : 'button sm'}
          onClick={handleClick}
        >
          {isFollow ? '취소' : '팔로우'}
        </Button>
      </div>
    </UserSearchList>
  );
};

export const UserChatList = (props) => {
  return (
    <UserChatItem className="userChatList" onClick={props.onClick}>
      <UserChatImg src={props.picture} alt="유저 프로필 이미지" />
      <UserChatInfo className="userChatInfo">
        <UserChatName className="userChatName">{props.name}</UserChatName>
        <UserChatContent className="userChatContent">
          {props.chat}
        </UserChatContent>
      </UserChatInfo>
      <UserChatDate className="userChatDate">2020.10.25</UserChatDate>
    </UserChatItem>
  );
};
