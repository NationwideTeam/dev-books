import { forwardRef, useState } from 'react';

import {
  CommentForm,
  CommentUserProfile,
  CommentInput,
  HideLabel,
  PostButton
} from './comment.style';

export default Comment = forwardRef((props, ref) => {
  // 댓글 버튼 활성화 상태
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <CommentForm>
      <CommentUserProfile src={props.profile} alt="" />
      <HideLabel htmlFor="comment">댓글창 입니다.</HideLabel>
      <CommentInput
        type="text"
        placeholder="댓글 입력하기..."
        id="comment"
        ref={ref}
        autoComplete="off"
        onChange={(e) => {
          if (e.target.value !== '') {
            setButtonActive(true);
          }
        }}
      />
      <PostButton
        isvalid={buttonActive}
        type="button"
        onClick={props.click}
      >
        게시
      </PostButton>
    </CommentForm>
  );
});
