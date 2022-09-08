import styled from "styled-components";
import message from "../../assets/icon/icon-message-circle.svg";
import share from "../../assets/icon/icon-share.svg";
import postListOff from "../../assets/icon/icon-post-list-off.svg";
import postListOn from "../../assets/icon/icon-post-list-on.svg";
import postAlbumOff from "../../assets/icon/icon-post-album-off.svg";
import postAlbumOn from "../../assets/icon/icon-post-album-on.svg";

export const ProfileMobileScreen = styled.div`
  position: relative;
  width: 390px;
  height: 844px;
  background-color: #fff;
  margin: 0 auto;
  overflow: auto;
  overflow-x: hidden;
  font-family: "Noto Sans KR", sans-serif;
  .disabledProfilePopup {
    display: none;
  }
`;

export const ProfileMain = styled.main`
  height: 712px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const ProfileButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-bottom: 20px;
`;

export const Tabmenu = styled.div`
  position: absolute;
  background-color: #fff;
  bottom: 0;
`;

export const Circle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 34px;
  width: 34px;
  border-radius: 100%;
  border: 1px solid #dbdbdb;
  cursor: pointer;
  background: ${(props) => {
    if (props.message) {
      return `url(${message})`;
    }
    if (props.share) {
      return `url(${share})`;
    }
  }};
  background-repeat: no-repeat;
  background-position: center;
`;

export const Postbar = styled.div`
  width: 390px;
  height: 44px;
  background-color: #fff;
  border-top: 0.5px solid #dbdbdb;
  border-bottom: 0.5px solid #dbdbdb;
  button {
    width: 26px;
    height: 26px;
    float: right;
    background-repeat: no-repeat;
  }
  .disabled {
    cursor: default;
    pointer-events: none;
  }
`;

export const PostListBtn = styled.button`
  margin: 8px 10px 0 0;
  background: url(${postListOff});
  &.on {
    background: url(${postListOn});
  }
`;

export const PostAlbumBtn = styled.button`
  margin: 8px 20px 0 0;
  background: url(${postAlbumOff});
  &.on {
    background: url(${postAlbumOn});
  }
`;
