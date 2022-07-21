import React, { useState } from "react";
import "./myProfile.css";
import Topbar from "../../components/Topbar/Topbar";
import { BasicNav } from "../../components/Navbar/Navbar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Products from "../../components/Products/Products";
import Postbar from "../../components/Postbar/Postbar";
import Content from "../../components/Content/Content";
import TabMenu from "../../components/TabMenu/TabMenu";
import Button from "../../components/Buttons/Button";
import basicProfile from "../../assets/basic-profile.svg";
import postImg from "../../assets/post-img-example.png";
import { useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";

function MyProfile() {
  const [navModal, setNavModal] = useState(false);

  let navigate = useNavigate();

  const prodDelete = async (e) => {
    const url = "https://mandarin.api.weniv.co.kr";
    const token = window.localStorage.getItem("token");
    const prodId = e.target.value;

    try {
      const res = await fetch(`${url}/product/${prodId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const json = await res.json();
      console.log("삭제성공");
      window.location.href = "./MyProfile";
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="MyProfileMobileScreen">
      <div className="tabmenu">
        <TabMenu />
      </div>
      <Topbar />
      <BasicNav
        onClick={() => {
          setNavModal(true);
        }}
      />
      <ProfileInfo
        follower="2950"
        followings="128"
        name="애월읍 위니브 감귤농장"
        id="@ weniv_Mandarin"
        description="애월읍 감귤 전국 배송, 귤따기 체험, 감귤 농장"
      />
      <div className="MyProfileButtonWrapper">
        <Button className="button md active">프로필 수정</Button>
        <Button
          className="button md active"
          onClick={() => {
            navigate("/productUpload");
          }}
        >
          상품 등록
        </Button>
      </div>
      <Products onClick={prodDelete} />

      <Postbar />
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

      <div className="blank"></div>
      <div
        className={navModal ? "myProfileNavModal" : "disabledMyProfilePopup"}
        onClick={() => {
          setNavModal(false);
        }}
      >
        <Modal>
          <ModalContent txt="설정 및 개인정보" />
          <ModalContent txt="로그아웃" />
        </Modal>
      </div>
    </div>
  );
}

export default MyProfile;
