import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BasicNav } from '../../components/Navbar/Navbar';
import { UserChatList } from '../../components/User/User';
import Topbar from '../../components/Topbar/Topbar';
import TabMenu from '../../components/TabMenu/TabMenu';
import Modal from '../../components/Modal/Modal';
import ModalContent from '../../components/ModalContent/ModalContent';
import Alert from '../../components/Alert/Alert';

import BasicProfile from '../../assets/basic-profile.svg';

import {
  ChatFeedSection,
  ChatFeedMain,
  ChatFeedList,
  TabMenuHome,
  ActiveChatPopup,
} from './chatFeed.style';

const ChatFeed = () => {
  const [navModal, setNavModal] = useState(false);
  const [alert, setAlert] = useState(false);

  let navigate = useNavigate();

  // 로그아웃
  const handleLogout = () => {
    window.localStorage.removeItem('accountname');
    window.localStorage.removeItem('token');
    navigate('/');
  };

  // 설정 및 개인정보 버튼 누르면 myProfile로 이동
  const nextMyProfile = () => {
    navigate('/myProfile');
  };

  return (
    <ChatFeedSection>
      <Topbar />
      <BasicNav
        onClick={() => {
          setNavModal(true);
        }}
      />
      <ChatFeedMain>
        <ChatFeedList>
          <UserChatList
            picture={BasicProfile}
            name={'애월읍 위니브 감귤농장'}
            chat={'이번에 정정 언제하맨마씸?'}
            onClick={() => {
              navigate('/chatRoom');
            }}
          />
          <UserChatList
            picture={BasicProfile}
            name={'제주감귤마을'}
            chat={'깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지...'}
          />
          <UserChatList
            picture={BasicProfile}
            name={'누구네 농장 친환경 한라봉'}
            chat={'내 차는 내가 평가한다. 오픈 이벤트에 참여 하...'}
          />
        </ChatFeedList>
        <TabMenuHome>
          <TabMenu />
        </TabMenuHome>
      </ChatFeedMain>
      <ActiveChatPopup
        isActive={navModal}
        onClick={() => {
          setNavModal(false);
        }}
      >
        <Modal>
          <ModalContent txt="설정 및 개인정보" onClick={nextMyProfile} />
          <ModalContent
            txt="로그아웃"
            onClick={() => {
              setAlert(true);
              setNavModal(false);
            }}
          />
        </Modal>
      </ActiveChatPopup>
      <ActiveChatPopup isActive={alert}>
        <Alert
          message="로그아웃하시겠어요?"
          cancel="취소"
          confirm="로그아웃"
          onClickCancel={() => {
            setAlert(false);
          }}
          onClickConfirm={handleLogout}
        />
      </ActiveChatPopup>
    </ChatFeedSection>
  );
};

export default ChatFeed;
