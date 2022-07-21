import React from 'react';
import { MainNav } from '../../components/Navbar/Navbar';
import Button from '../../components/Buttons/Button';
import symbolLogo from '../../assets/logo.svg';
import { Content } from '../../components/Content/Content';
import Topbar from '../../components/Topbar/Topbar';
import { useNavigate } from 'react-router-dom';

import basicProfile from '../../assets/basic-profile.svg';
import postImg from '../../assets/post-img-example.png';
import postImg2 from '../../assets/post-img-example2.png';

import './homeFeed.css';

export const HomeFeed = () => {
  let navigate = useNavigate();
  return (
    <section className="homeFeed">
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

export const HomeFeedData = () => {
  return (
    <section className="homeFeedData">
      <Topbar />
      <nav className="homeFeedNav">
        <MainNav title={'데브북스 피드'} />
      </nav>
      <main className="homeFeedDataMain">
        <Content
          userImg={basicProfile}
          userName="애월읍 위니브 감귤농장"
          userId="@ weniv_Mandarin"
          posttext="옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다."
          postImg={postImg}
          heartNum="58"
          commentNum="12"
          postDate="2020년 10월 21일"
        />
        <Content
          userImg={basicProfile}
          userName="서귀포시 한라봉 타운"
          userId="@ hanlabong22"
          posttext="감귤 잘 자라는 중...❤"
          postImg={postImg2}
          heartNum="58"
          commentNum="12"
          postDate="2020년 10월 21일"
        />
        <Content
          userImg={basicProfile}
          userName="애월읍 위니브 감귤농장"
          userId="@ weniv_Mandarin"
          posttext="옷을 인생을 그러므로 없으면 것은 이상은 것은 우리의 위하여, 뿐이다. 이상의 청춘의 뼈 따뜻한 그들의 그와 약동하다. 대고, 못할 넣는 풍부하게 뛰노는 인생의 힘있다."
          heartNum="58"
          commentNum="12"
          postDate="2020년 10월 21일"
        />
      </main>
    </section>
  );
};
