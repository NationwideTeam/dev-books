import React from "react";
import "./joinMembership.css";
import statusBar from "../../assets/status_bar.svg";
import Button from "../../components/Buttons/Button";

function JoinMembership() {
  return (
    <article className="JoinMembershipMobileScreen">
      <div className="statusBar">
        <img src={statusBar} alt="데브북스" />
      </div>
      <article className="loginEmail">
        <h1 id="loginTitle">이메일로 회원가입</h1>
        <form id="loginForm" action="post">
          <input
            class="inputEmail"
            placeholder="이메일 주소를 입력해 주세요."
            type="email"
            id="email"
            required
          />
          <input
            class="inputPw"
            placeholder="비밀번호를 설정해 주세요."
            type="password"
            id="password"
            required
          />
          <div className="nextButton">
            <Button className="button lg">다음</Button>
          </div>
        </form>
      </article>
    </article>
  );
}

export default JoinMembership;
