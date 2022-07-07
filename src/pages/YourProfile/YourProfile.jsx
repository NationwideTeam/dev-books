import React from "react";
import "./yourProfile.css";
import Topbar from "../../components/Topbar/Topbar";
import { BasicNav } from "../../components/Navbar/Navbar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Products from "../../components/Products/Products";
import Postbar from "../../components/Postbar/Postbar";
import Content from "../../components/Content/Content";
import Album from "../../components/Album/Album";
import TabMenu from "../../components/TabMenu/TabMenu";
import Button from "../../components/Buttons/Button";
import basicProfile from "../../assets/basic-profile.svg";
import postImg from "../../assets/post-img-example.png";
import message from "../../assets/icon/icon-message-circle.svg";
import share from "../../assets/icon/icon-share.svg";

function MyProfile() {
  return (
    <div className="MyProfileMobileScreen">
      <Topbar />
      <BasicNav />
      <ProfileInfo
        follower="2950"
        followings="128"
        name="애월읍 위니브 감귤농장"
        id="@ weniv_Mandarin"
        description="애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장"
      />
      <div className="MyProfileButtonWrapper">
        <div id="circle">
          <img src={message} alt="" />
        </div>
        <Button className="button md">팔로우</Button>
        <div id="circle">
          <img src={share} alt="" />
        </div>
      </div>
      {/* <Products /> */}
      <Album />

      <div className="tabmenu">
        <TabMenu />
      </div>
      <div className="blank"></div>
    </div>
  );
}

export default MyProfile;
