import React, { useState, useEffect } from "react";
import "./yourProfile.css";
import Topbar from "../../components/Topbar/Topbar";
import { BasicNav } from "../../components/Navbar/Navbar";
import ProfileInfo from "../../components/ProfileInfo/ProfileInfo";
import Products from "../../components/Products/Products";
import Postbar from "../../components/Postbar/Postbar";
import { Contents } from "../../components/Content/Content";
import Album from "../../components/Album/Album";
import TabMenu from "../../components/TabMenu/TabMenu";
import Button from "../../components/Buttons/Button";
import message from "../../assets/icon/icon-message-circle.svg";
import share from "../../assets/icon/icon-share.svg";
import { useLocation } from "react-router-dom";

function MyProfile() {
  const location = useLocation();
  const [isFollow, setIsFollow] = useState(true);
  const [products, setProducts] = useState([]);

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

  return (
    <div className="MyProfileMobileScreen">
      <Topbar />
      <BasicNav />
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
      {/* <Album /> */}
      <Contents accountName={accountName}/>

      <div className="tabmenu">
        <TabMenu />
      </div>
    </div>
  );
}

export default MyProfile;
