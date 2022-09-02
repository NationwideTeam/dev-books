import styled from "styled-components";
import uploadFileImg from "../../assets/upload-file.svg";

export const PostUploadWrap = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
`;

export const PostUploadContent = styled.form.attrs({
  method: "post",
})`
  padding: 20px 16px;
  display: flex;
`;

export const PostUploadUserImg = styled.img.attrs({
  alt: "유저 프로필 이미지",
})`
  margin-right: 13px;
  width: 42px;
  height: 42px;
  border-radius: 50%;
`;

export const PostUploadTxt = styled.textarea.attrs({
  cols: "30",
  rows: "10",
  placeholder: "게시글 입력하기...",
})`
  width: 100%;
  border: none;
  resize: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  padding: 12px 0;
  &::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;
    color: #c4c4c4;
  }
  &:focus {
    outline: none;
  }
`;

export const PostUploadBtn = styled.label`
  background: url(${uploadFileImg});
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 16px;
  right: 16px;
  cursor: pointer;
`;

export const PostUploadInput = styled.input.attrs({
  type: "file",
  multiple: true,
  accept: "*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic",
})`
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`;

export const PostImgLists = styled.div`
  display: flex;
  height: 171px;
  margin: 0 16px 0 70px;
  overflow-x: scroll;
  gap: 8px;
`;
