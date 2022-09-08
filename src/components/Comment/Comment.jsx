import { forwardRef } from "react";
import { useState } from "react";
import {
  CommentForm,
  ProfileImg,
  CommentInput,
  CommentUploadBtn,
} from "./comment.style";

export default Comment = forwardRef((props, ref) => {
  // 댓글 버튼 활성화 상태
  const [buttonActive, setButtonActive] = useState(false);

  return (
    <CommentForm>
      <ProfileImg src={props.profile} />
      <label htmlFor="comment" className="a11yHidden">
        댓글창 입니다.
      </label>
      <CommentInput
        id="comment"
        ref={ref}
        onChange={(e) => {
          if (e.target.value !== "") {
            setButtonActive(true);
          } else if (e.target.value === "") {
            setButtonActive(false);
          }
        }}
      />
      <CommentUploadBtn className={buttonActive} onClick={props.click}>
        게시
      </CommentUploadBtn>
    </CommentForm>
  );
});
