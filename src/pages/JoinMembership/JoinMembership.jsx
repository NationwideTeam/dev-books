import React from "react";
import "./joinMembership.css";
import statusBar from "../../assets/status_bar.svg";
import Button from "../../components/Buttons/Button";
import { TextInput } from "../../components/TextInput/TextInput";

function JoinMembership() {
  return (
    <article className="JoinMembershipMobileScreen">
      <div className="statusBar">
        <img src={statusBar} alt="데브북스" />
      </div>
      <article className="loginEmail">
        <h1 id="loginTitle">이메일로 회원가입</h1>
        <div className="emailAccount">
          <TextInput
            label="이메일"
            placeholder="이메일을 입력해주세요."
            type="email"
          />
        </div>
        <TextInput
          label="비밀번호"
          placeholder="비밀번호를 입력해주세요."
          type="email"
        />
        <div className="loginButton">
          <Button className="button lg">다음</Button>
        </div>
      </article>
    </article>
  );
}

export default JoinMembership;
