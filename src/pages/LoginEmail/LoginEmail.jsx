import React from "react";
import "./loginEmail.css";
import statusBar from "../../assets/status_bar.svg";
import Button from "../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";
import { TextInput } from "../../components/TextInput/TextInput";

function LoginEmail() {
  let navigate = useNavigate();

  return (
    <article className="loginEmailMobileScreen">
      <div className="statusBar">
        <img src={statusBar} alt="데브북스" />
      </div>
      <article className="loginEmail">
        <h1 id="loginTitle">로그인</h1>
        <div className="emailAccount">
          <TextInput type="email" label="이메일" />
        </div>
        <TextInput type="email" label="비밀번호" />
        <div className="loginButton">
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
