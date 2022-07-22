// PostComment.jsx
import "./postComment.css";

export default function PostComment(props) {
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
            {file.createdAt
              .slice(0, 11)
              .replace("-", "년")
              .replace("-", "월")
              .replace("T", "일")}
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
