// PostComment.jsx
import './postComment.css';

export default function PostComment(props) {
  
  // 댓글 등록 시간 계산
  function timeForComment(time) {
    const postingDate = time.substring(0, time.length - 1);
    const ms = Date.parse(postingDate);
    const now = Date.now();
    const gap = (now - ms) / 1000;
    if (gap < 60) return '방금전';
    else if (gap < 3600) return `${parseInt(gap / 60)}분 전`;
    else if (gap < 86400) return `${parseInt(gap / 3600)}시간 전`;
    else if (gap < 2592000) return `${parseInt(gap / 86400)}일 전`;
    else return `${parseInt(gap / 2592000)}달 전`;
  }

  return props.commentInfo.map((file, index) => {
    return (
      <li className="postComment" key={index}>
        <div className="commentUser">
          <img
            className="commentUserImg"
            src={file.author.image}
            alt="유저 기본 프로필 이미지"
          />
          <strong className="commentUserName">{file.author.username}</strong>
          <span className="commentTime">
            {timeForComment(file.createdAt)}
          </span>
          <button
            className="moreCommentBtn"
            type="button"
            onClick={props.onClick}
            value={file.author.accountname}
          ></button>
        </div>
        <p className="commenttxt">{file.content}</p>
      </li>
    );
  });
}
