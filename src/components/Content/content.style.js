import styled from "styled-components";
import iconMoreVertical from "../../assets/icon/icon-more-vertical.svg";
import iconMsgCircle from "../../assets/icon/icon-message-circle.svg";

export const PostContent = styled.section`
  padding: 20px 16px;
  box-sizing: border-box;
`;

export const PostUser = styled.h2`
  display: flex;
  align-items: center;
  width: 358px;
  margin-bottom: 12px;
  border-radius: 50%;
`;

export const PostUserImg = styled.img.attrs({
  alt: "유저 기본 프로필 이미지",
})`
  width: 42px;
  height: 42px;
  margin-right: 12px;
  border-radius: 100%;
  cursor: pointer;
`;

export const PostUserInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostUserName = styled.strong`
  font-size: 14px;
  margin-bottom: 6px;
  font-weight: 500;
`;

export const PostUserId = styled.strong`
  font-weight: 400;
  font-size: 12px;
  color: #767676;
`;

export const MoreBtn = styled.button.attrs({
  type: "button",
})`
  background: url(${iconMoreVertical}) transparent;
  background-size: 18px;
  width: 18px;
  height: 18px;
  margin-left: auto;
  margin-bottom: 20px;
`;

export const PostMain = styled.div`
  width: 304px;
  margin-left: auto;
  cursor: pointer;
`;

export const ContentTxt = styled.p`
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 16px;
`;

export const ContentImg = styled.img.attrs({
  alt: "",
})`
  margin: 0 0 12px;
  width: 304px;
  height: 228px;
  object-fit: cover;
  border-radius: 10px;
`;

export const PostBtnWrap = styled.div`
  width: 304px;
  margin-left: auto;
  font-weight: 400;
  font-size: 12px;
  display: flex;
  align-items: center;
`;

export const MsgIcon = styled.span`
  display: flex;
  align-items: center;
`;

export const MsgBtn = styled.button.attrs({
  type: "button",
})`
  background-color: #fff;
  width: 20px;
  height: 20px;
  background-size: 20px;
  margin-right: 6px;
  background-image: url(${iconMsgCircle});
`;

export const PostDate = styled.div`
  width: 304px;
  margin-top: 16px;
  margin-left: auto;
  font-weight: 400;
  font-size: 10px;
  color: #767676;
`;

export const PostPopupWrap = styled.div`
  ${(props) => {
    if (!props.className) {
      return `display: none`;
    }
  }}
`;
