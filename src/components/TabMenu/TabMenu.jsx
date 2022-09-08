import React from "react";
import { Wrapper, Menu, NavStyle } from "./tabMenu.style";

export default function TabMenu() {
  return (
    <>
      <Wrapper>
        <Menu>
          <NavStyle to="/HomeFeed" homefeed>
            홈
          </NavStyle>
        </Menu>
        <Menu>
          <NavStyle to="/chatFeed" chatFeed>
            채팅
          </NavStyle>
        </Menu>
        <Menu>
          <NavStyle to="/PostUpload" postUpload>
            게시물 작성
          </NavStyle>
        </Menu>
        <Menu>
          <NavStyle to="/myProfile" myProfile>
            프로필
          </NavStyle>
        </Menu>
      </Wrapper>
    </>
  );
}
