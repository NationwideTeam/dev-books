import React, { useState, useEffect } from "react";
import "./yourProfile.css";
import Topbar from "../../components/Topbar/Topbar";
import { BasicNav } from "../../components/Navbar/Navbar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Products from "../../components/Products/Products";
import { Contents } from "../../components/Content/Content";
import Album from "../../components/Album/Album";
import TabMenu from "../../components/TabMenu/TabMenu";
import Button from "../../components/Buttons/Button";
import message from "../../assets/icon/icon-message-circle.svg";
import share from "../../assets/icon/icon-share.svg";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";
import Alert from "../../components/Alert/Alert";

function MyProfile() {
  const location = useLocation();
  const [isFollow, setIsFollow] = useState(true);
  const [products, setProducts] = useState([]);
  const [navModal, setNavModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const [postbarBtn, setPostbarBtn] = useState(true);

  // accountName 체크 (사용자 프로필 or 마이 프로필 확인)
  const checkAccountName = () => {
    if (location.pathname.split("/")[1] === "yourProfile") {
      const accountName = location.search.split("id=")[1];
      return accountName;
    }
  };

  const accountName = checkAccountName();

  const checkUserOther = () => {
    if (location.search.split("id=")[1]) {
      location.href = `/yourProfile?id=${accountName}`;
    }
  };
  checkUserOther();

  // 팔로우 or 언팔로우
  const handleClick = () => {
    setIsFollow((isFollow) => !isFollow);
  };

  // 유저 데이터에 등록한 상품이 있는지 체크
  useEffect(() => {
    const getUserProduct = async () => {
      const url = "https://mandarin.api.weniv.co.kr";
      const token = localStorage.getItem("token");
      const init = {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      };

      try {
        const resUserProduct = await fetch(
          `${url}/product/${accountName}`,
          init
        );
        const resUserProductJson = await resUserProduct.json();
        const userProduct = resUserProductJson.product;
        setProducts(userProduct);
      } catch (err) {
        console.error("err", err);
      }
    };
    getUserProduct();
  }, []);

  // 게시글 섹션 - 목록형 or 앨범형 버튼
  const handleBtnClick = () => {
    setPostbarBtn((postbarBtn) => !postbarBtn);
  };

  let navigate = useNavigate();

  // 로그아웃
  const handleLogout = () => {
    window.localStorage.removeItem("accountname");
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  // 설정 및 개인정보 버튼 누르면 myProfile로 이동
  const nextMyProfile = () => {
    navigate("/myProfile");
  };

  return (
    <div className="MyProfileMobileScreen">
      <Topbar />
      <div className="tabmenu">
        <TabMenu />
      </div>
      <BasicNav
        onClick={() => {
          setNavModal(true);
        }}
      />
      <ProfileInfo accountName={accountName} />
      <div className="MyProfileButtonWrapper">
        <div id="circle">
          <img src={message} alt="" />
        </div>
        <Button
          className={isFollow ? "button md" : "button md active"}
          onClick={handleClick}
        >
          {isFollow ? "팔로우" : "언팔로우"}
        </Button>
        <div id="circle">
          <img src={share} alt="" />
        </div>
      </div>
      <Products
        accountName={accountName}
        className={products.length !== 0 ? "Products" : "Products hidden"}
      />
      <div className="postbar">
        <button
          className={postbarBtn ? "postAlbum" : "postAlbum on disabled"}
          onClick={handleBtnClick}
        >
          <span className="a11yHidden">앨범</span>
        </button>

        <button
          className={postbarBtn ? "postList on disabled" : "postList"}
          onClick={handleBtnClick}
        >
          <span className="a11yHidden">리스트</span>
        </button>
      </div>
      {postbarBtn ? (
        <Contents accountName={accountName} />
      ) : (
        <Album accountName={accountName} />
      )}

      <div className="tabmenu">
        <TabMenu />
      </div>
      <div
        className={
          navModal ? "yourProfileNavModal" : "disabledYourProfilePopup"
        }
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
      </div>
      <div className={alert ? "yourProfileAlert" : "disabledYourProfilePopup"}>
        <Alert
          message="로그아웃하시겠어요?"
          cancel="취소"
          confirm="로그아웃"
          onClickCancel={() => {
            setAlert(false);
          }}
          onClickConfirm={handleLogout}
        />
      </div>
    </div>
  );
}

export default MyProfile;
