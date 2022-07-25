import './comment.css';
import { forwardRef } from 'react';
import { useState } from 'react';

export default Comment = forwardRef((props, ref) => {
  // 댓글 버튼 활성화 상태
  const [buttonActive, setButtonActive] = useState('uploadComment');


  return (
    <form className="commentForm">
      <img className="basicProfile" src={props.profile} alt="" />
      <label htmlFor="comment" className="a11yHidden">
        댓글창 입니다.
      </label>
      <input
        type="text"
        placeholder="댓글 입력하기..."
        className="inputComment"
        id="comment"
        ref={ref}
        autoComplete="off"
        onChange={(e) => {
          if(e.target.value !== '') {
            setButtonActive('activeCommentButton');
          }
        }}
      />
      <button className={buttonActive} type="button" onClick={props.click}>
        게시
      </button>
    </form>
  );
});