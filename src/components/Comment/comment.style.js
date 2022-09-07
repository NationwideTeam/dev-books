import styled from 'styled-components';

export const CommentForm = styled.form`
  width: 390px;
  margin: 0 auto;
  padding: 13px 16px;
  box-sizing: border-box;
  border-top: 0.5px solid #dbdbdb;
`;

export const CommentUserProfile = styled.img`
  width: 36px;
  height: 36px;
  vertical-align: middle;
  border-radius: 50%;
`;

export const HideLabel = styled.label`
  overflow: hidden;
  position: absolute;
  clip: rect(0, 0, 0, 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
`;

export const CommentInput = styled.input.attrs({
  placeholderTextColor: '#c4c4c4',
})`
  width: 264px;
  margin: 0 10px 0 18px;
  vertical-align: middle;
  &:focus {
    outline: none;
  }
`;

export const PostButton = styled.button`
  background-color: transparent;
  padding: 0;
  vertical-align: middle;
  color: ${(props) => (props.isvalid ? '#3e7c17' : '#c4c4c4')};
  pointer-events: ${(props) => (props.isvalid ? 'auto' : 'none')};
`;
