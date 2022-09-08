import styled from "styled-components";

export const SinglePostWrap = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background-color: #fff;
  position: relative;
`;

export const SinglePostMain = styled.section`
  height: 711px;
  overflow-y: scroll;
`;

export const SinglePostContainer = styled.section`
  border-bottom: 1px solid #dbdbdb;
`;

export const PostCommentWrap = styled.ul`
  padding: 4px 16px;
`;

export const CommentModal = styled.div`
  ${(props) => {
    if (props.className) {
      return `position: absolute;
        top: 0;
        width: 390px;
        height: 844px;`;
    } else {
      return `display: none`;
    }
  }}
`;

export const CommentAlert = styled.div`
  ${(props) => {
    if (!props.className) {
      return `display: none`;
    }
  }}
`;

export const NavModal = styled.div`
  ${(props) => {
    if (!props.className) {
      return `display: none`;
    }
  }}
`;

export const NavAlert = styled.div`
  ${(props) => {
    if (!props.className) {
      return `display: none`;
    }
  }}
`;
