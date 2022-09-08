import styled from "styled-components";

export const CommentForm = styled.form`
  width: 390px;
  margin: 0 auto;
  padding: 13px 16px;
  box-sizing: border-box;
  border-top: 0.5px solid #dbdbdb;
`;

export const ProfileImg = styled.img.attrs({
  alt: "",
})`
  width: 36px;
  height: 36px;
  vertical-align: middle;
  border-radius: 50%;
`;

export const CommentInput = styled.input.attrs({
  type: "text",
  placeholder: "댓글 입력하기...",
  autoComplete: "off",
})`
  width: 264px;
  margin: 0 10px 0 18px;
  vertical-align: middle;
  &::placeholder {
    color: #c4c4c4;
  }
  &:focus {
    outline: none;
  }
`;

export const CommentUploadBtn = styled.button.attrs({
  type: "button",
})`
  background-color: transparent;
  padding: 0;
  vertical-align: middle;
  ${(props) =>
    props.className
      ? `color: #3e7c17;
  cursor: pointer;`
      : `  color: #c4c4c4;
  pointer-events: none;`}
`;
