import React from "react";
import "./tabMenu.css";
import { NavLink } from "react-router-dom";

export default function TabMenu() {
  return (
    <>
      <ul className="tabMenuWrapper">
        <li className="tabMenuHome">
          <NavLink to="/HomeFeed" className="tabLink homeFeed">
            홈
          </NavLink>
        </li>
        <li className="tabMenuChat">
          <NavLink to="/chatFeed" className="tabLink chatFeed">
            채팅
          </NavLink>
        </li>
        <li className="tabMenuEdit">
          <NavLink to="/PostUpload" className="tabLink postUpload">
            게시물 작성
          </NavLink>
        </li>
        <li className="tabMenuProfile">
          <NavLink to="/myProfile" className="tabLink myProfile">
            프로필
          </NavLink>
        </li>
      </ul>
    </>
  );
}
