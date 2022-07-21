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
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";

function MyProfile() {
  const [navModal, setNavModal] = useState(false);

  let navigate = useNavigate();
  const location = useLocation();

  // accountName 체크 (사용자 프로필 or 마이 프로필 확인)
  const checkAccountName = () => {
    if (location.pathname.split("/")[1] === "myProfile") {
      const accountName = localStorage.getItem("accountname");
      return accountName;
    }
  };

  const accountName = checkAccountName();

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
      <ProfileInfo accountName={accountName} />
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
      <Content accountName={accountName} />
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
