import React from 'react';
import { MainNav } from '../../components/Navbar/Navbar';
import Button from '../../components/Buttons/Button';
import symbolLogo from '../../assets/logo.svg';
import { Content } from '../../components/Content/Content';
import Topbar from '../../components/Topbar/Topbar';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import './homeFeed.css';
import TabMenu from '../../components/TabMenu/TabMenu';

const HomeFeed = () => {
  // 팔로워 게시글 목록 개수 상태
  const [followerPost, setFollowerPost] = useState([]);

  // 팔로워 게시글 목록 불러오기
  const getFollowerPost = async () => {
    const url = 'https://mandarin.api.weniv.co.kr';
    const getPostPath = '/post/feed';
    const token = localStorage.getItem('token');

    try {
      const res = await fetch(url + getPostPath, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
        },
      });

      const json = await res.json();
      setFollowerPost(json.posts);
    } catch (error) {}
  };
  useEffect(() => {
    getFollowerPost();
  }, []);

  let navigate = useNavigate();

  return followerPost.length > 0 ? (
    <section className="homeFeedData">
      <Topbar />
      <div className="tabmenuHome">
        <TabMenu />
      </div>
      <nav className="homeFeedNav">
        <MainNav title={'데브북스 피드'} />
      </nav>
      <main className="homeFeedDataMain">
        {followerPost.map((file, index) => {
          return (
            <Content
              key={index}
              postId={file.id}
              userImg={file.author.image}
              userName={file.author.username}
              userId={file.author.accountname}
              posttext={file.content}
              postImg={file.image ? file.image.split(',') : [] }
              heartCount={file.heartCount}
              hearted={file.hearted}
              value={file.id}
              commentNum={file.commentCount}
              postDate={file.createdAt}
            />
          );
        })}
      </main>
    </section>
  ) : (
    <section className="homeFeed">
      <div className="tabmenuHome">
        <TabMenu />
      </div>
      <Topbar />
      <nav className="homeFeedNav">
        <MainNav title={'데브북스 피드'} />
      </nav>
      <main className="homeFeedMain">
        <img className="homeFeedLogo" src={symbolLogo} alt="데브북스 로고" />
        <strong className="homeFeedDescription">
          유저를 검색해 팔로우 해보세요!
        </strong>
        <div
          onClick={() => {
            navigate('/SearchFeed');
          }}
        >
          <Button className={'lg button'} children={'검색하기'} />
        </div>
      </main>
    </section>
  );
};

export default HomeFeed;
