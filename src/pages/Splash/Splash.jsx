import React from "react";
import logoImage from "../../assets/logo.svg";
import logoNameKorean from "../../assets/logoNameKorean.svg";
import logoNameEnglish from "../../assets/logoNameEnglish.svg";
import Topbar from "../../components/Topbar/Topbar";
import "./splash.css";

function Splash() {
  return (
    <>
      <article className="loginMobileScreen">
        <Topbar />
        <div className="loginLogo">
          <img className="loginLogoImage" src={logoImage} alt="데브북스" />
          <img src={logoNameKorean} alt="데브북스" />
          <img src={logoNameEnglish} alt="데브북스" />
        </div>
      </article>
    </>
  );
}

export default Splash;
