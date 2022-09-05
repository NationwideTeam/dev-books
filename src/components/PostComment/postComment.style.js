import styled from "styled-components";
import iconMoreVertical from "../../assets/icon/icon-more-vertical.svg";

export const PostCommentList = styled.li`
  margin: 16px 0;
`;

export const CommentUser = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 4px;
`;

export const CommentUserImg = styled.img.attrs({
  alt: "유저 기본 프로필 이미지",
})`
  width: 36px;
  height: 36px;
  margin-right: 12px;
  border-radius: 50%;
`;

export const CommentUserName = styled.strong`
  font-weight: 500;
  font-size: 14px;
  margin-right: 11px;
  margin-top: 6px;
`;

export const CommentTime = styled.span`
  position: relative;
  font-weight: 400;
  font-size: 10px;
  vertical-align: middle;
  margin-top: 8.5px;

  &::before {
    content: "・";
    position: absolute;
    left: -5px;
    vertical-align: middle;
  }
`;

export const CommentTxt = styled.p`
  width: 290px;
  margin-left: 48px;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
`;

export const MoreCommentBtn = styled.button.attrs({
  type: "button",
})`
  background: url(${iconMoreVertical}) transparent;
  background-size: 20px;
  width: 20px;
  height: 20px;
  margin-left: auto;
`;
