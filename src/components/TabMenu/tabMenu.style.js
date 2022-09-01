import { NavLink } from "react-router-dom";
import styled from "styled-components";

import homeFeedImg from "../../assets/icon/icon-home.svg";
import homeFeedActiveImg from "../../assets/icon/icon-home-fill.svg";
import chatFeedImg from "../../assets/icon/icon-message-circle.svg";
import chatFeedActivImg from "../../assets/icon/icon-message-circle-fill.svg";
import postUploadImg from "../../assets/icon/icon-edit.svg";
import myProfileImg from "../../assets/icon/icon-user.svg";
import myProfileActiveImg from "../../assets/icon/icon-user-fill.svg";

export const Wrapper = styled.ul`
  width: 390px;
  box-sizing: border-box;
  display: flex;
  margin: 0 auto;
  justify-content: space-evenly;
  border-top: 0.5px solid #dbdbdb;
`;

export const Menu = styled.li`
  width: 84px;
  height: 60px;
  text-align: center;
`;

export const NavStyle = styled(NavLink)`
  width: 100%;
  height: 100%;
  display: inline-block;
  padding-top: 40px;
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 14px;
  color: #767676;
  text-decoration: none;
  background: ${(props) => {
    if (props.homefeed) {
      return `url(${homeFeedImg})`;
    }
    if (props.chatFeed) {
      return `url(${chatFeedImg})`;
    }
    if (props.postUpload) {
      return `url(${postUploadImg})`;
    }
    if (props.myProfile) {
      return `url(${myProfileImg})`;
    }
  }};
  background-repeat: no-repeat;
  background-position: center 12px;

  &.active {
    background: ${(props) => {
      if (props.homefeed) {
        return `url(${homeFeedActiveImg})`;
      }
      if (props.chatFeed) {
        return `url(${chatFeedActivImg})`;
      }
      if (props.myProfile) {
        return `url(${myProfileActiveImg})`;
      }
    }};

    background-repeat: no-repeat;
    background-position: center 12px;
    color: #3e7c17;
    border: none;
  }
`;
