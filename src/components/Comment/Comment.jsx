import './comment.css';
import { forwardRef } from 'react';

export default Comment = forwardRef((props, ref) => {
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
      />
      <button className="uploadComment" type="button" onClick={props.click}>
        게시
      </button>
    </form>
  );
});
