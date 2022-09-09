import styled from 'styled-components';

export const UserSearchList = styled.li`
  display: flex;
  align-items: center;
  width: 358px;
  height: 50px;
  cursor: pointer;
`;

export const UserSearchInfo = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const UserImage = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 12px;
  border-radius: 100%;
`;

export const UserInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserName = styled.strong`
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 500;
`;

export const UserId = styled.strong`
  font-size: 12px;
  color: #767676;
`;

export const UserChatItem = styled.li`
  display: flex;
  align-items: center;
  width: 358px;
  height: 42px;
  margin: 0 auto;
`;

export const UserChatInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const UserChatImg = styled.img.attrs({
  alt: '유저 프로필 이미지',
})`
  position: relative;
  width: 42px;
  height: 42px;
  margin-right: 12px;
`;

export const UserChatName = styled.strong`
  font-size: 14px;
  margin-bottom: 8px;
`;

export const UserChatContent = styled.p`
  font-size: 12px;
  color: #767676;
`;

export const UserChatDate = styled.span`
  display: inline-block;
  margin-top: auto;
  margin-bottom: 3px;
  margin-left: auto;
  font-size: 10px;
  color: #dbdbdb;
`;