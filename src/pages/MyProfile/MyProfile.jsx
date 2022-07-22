import React, { useState, useEffect } from "react";
import "./myProfile.css";
import Topbar from "../../components/Topbar/Topbar";
import { BasicNav } from "../../components/Navbar/Navbar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Products from "../../components/Products/Products";
import Postbar from "../../components/Postbar/Postbar";
import { Contents } from "../../components/Content/Content";
import Album from "../../components/Album/Album";
import TabMenu from "../../components/TabMenu/TabMenu";
import Button from "../../components/Buttons/Button";
import { useNavigate, useLocation } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";
import Alert from "../../components/Alert/Alert";

function MyProfile() {
  const [navModal, setNavModal] = useState(false);
  const [alert, setAlert] = useState(false);
  const [products, setProducts] = useState([]);
  const [postbarBtn, setPostbarBtn] = useState(true);

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

  // 상품 삭제
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
      window.location.href = "./myProfile";
    } catch (error) {
      console.error(error);
    }
  };

  // 게시글 삭제
  const postDelete = async (e) => {
    const url = "https://mandarin.api.weniv.co.kr";
    const token = window.localStorage.getItem("token");
    const postId = e.target.value;

    try {
      const res = await fetch(`${url}/post/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const json = await res.json();
      window.location.href = "./myProfile";
    } catch (error) {
      console.error(error);
    }
  };

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
      <nav>
        <BasicNav
          onClick={() => {
            setNavModal(true);
          }}
        />
      </nav>
      <main className="myProfileMain">
        <ProfileInfo accountName={accountName} />
        <div className="MyProfileButtonWrapper">
          <Button
            className="button md active"
            onClick={() => {
              navigate("/profileUpdate");
            }}
          >
            프로필 수정
          </Button>
          <Button
            className="button md active"
            onClick={() => {
              navigate("/productUpload");
            }}
          >
            상품 등록
          </Button>
        </div>
        <Products
          onClick={prodDelete}
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
          <Contents accountName={accountName} onClick={postDelete} />
        ) : (
          <Album accountName={accountName} />
        )}
      </main>
      <div
        className={navModal ? "myProfileNavModal" : "disabledMyProfilePopup"}
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
      <div className={alert ? "yourProfileAlert" : "disabledMyProfilePopup"}>
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
