import React from "react";
import "./loginEmail.css";
import Button from "../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../../components/TextInput/TextInput";
import Topbar from "../../components/Topbar/Topbar";

function LoginEmail() {
  let navigate = useNavigate();

  return (
    <article className="loginEmailMobileScreen">
      <Topbar />
      <article className="loginEmail">
        <h1 id="loginTitle">로그인</h1>
        <div className="emailAccount">
          <TextInput type="email" label="이메일" for={'email'} id={'email'} />
        </div>
        <TextInput type="password" label="비밀번호" for={'password'} id={'password'} />
        <div
          className="loginButton"
          onClick={() => {
            navigate("/HomeFeedData");
          }}
        >
          <Button className="button lg">로그인</Button>
        </div>
        <p
          className="loginEmailText"
          onClick={() => {
            navigate("/joinMembership");
          }}
        >
          이메일로 회원가입
        </p>
      </article>
    </article>
  );
}

export default LoginEmail;
