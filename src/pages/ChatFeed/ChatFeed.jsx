import React from 'react';
import { BasicNav } from '../../components/Navbar/Navbar';
import { UserChatList } from '../../components/User/User'
import Topbar from '../../components/Topbar/Topbar';

import BasicProfile from '../../assets/basic-profile.svg'

import './chatFeed.css';

const ChatFeed = () => {
  return (
    <section className='chatFeed'>
      <Topbar />
      <nav className='chatFeedNav'>
        <BasicNav />
      </nav>
      <main className='chatFeedMain'>
        <ul className='chatFeedLists'>
          <UserChatList picture={BasicProfile} name={'애월읍 위니브 감귤농장'} chat={'이번에 정정 언제하맨마씸?'} />
          <UserChatList picture={BasicProfile} name={'제주감귤마을'} chat={'깊은 어둠의 존재감, 롤스로이스 뉴 블랙 배지...'}/>
          <UserChatList picture={BasicProfile} name={'누구네 농장 친환경 한라봉'} chat={'내 차는 내가 평가한다. 오픈 이벤트에 참여 하...'}/>
        </ul>
      </main>
    </section>
  )
}

export default ChatFeed;