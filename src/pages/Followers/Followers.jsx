import Topbar from "../../components/Topbar/Topbar";
import { ChatNav } from "../../components/Navbar/Navbar"
import { UserFollow } from "../../components/User/User"

import UserImg1 from "../../assets/comment-img1.png";
import UserImg2 from '../../assets/basic-profile.svg'
import './followers.css';

export const Followers = () => {
  return (
    <div className="followers">
      <Topbar/>
      <ChatNav title="Followers"/>
      <ul className="followerUser">
        <UserFollow 
          picture={UserImg1}
          name="애월읍 한라봉 최고 맛집"
          id="정성을 다해 농사짓는 한라봉"
          follow="팔로우"
        />
        <UserFollow 
          picture={UserImg2}
          name="감귤의 품격 - 애월읍"
          id="제주 노지귤, 하우스 한라봉 판매합니다."
          follow="팔로우"
        />
      </ul>
    </div>
  );
};

export default Followers;