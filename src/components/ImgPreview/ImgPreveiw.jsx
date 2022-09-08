import React from "react";
import deleteButton from "../../assets/icon/icon-delete.svg";

import styled from "styled-components";

const PostList = styled.div`
  display: block;
  position: relative;
  width: 304px;
  height: 171px;
  border-radius: 10px;
`;

const PostImg = styled.img.attrs({
  alt: "포스트 이미지 프리뷰",
})`
  display: block;
  width: 304px;
  height: 171px;
  object-fit: cover;
  border-radius: 10px;
`;

const PostListBtn = styled.button.attrs({
  type: "button",
})`
  position: absolute;
  top: 5px;
  right: 0;
  background-color: transparent;
`;

const ImgPreview = (props) => {
  const postUrl = props.postUrl;

  return (
    <>
      {postUrl.map((file, index) => {
        return (
          <PostList key={index}>
            <PostListBtn value={file} onClick={props.onClick}>
              <img className="deleteButton" src={deleteButton} alt="" />
            </PostListBtn>
            <PostImg src={file} />
          </PostList>
        );
      })}
    </>
  );
};

export default ImgPreview;
