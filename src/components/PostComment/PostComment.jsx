import "./postComment.css";

export default function PostComment(props) {

  const { commentUserImg, commentUserName, commentTimeNum, commenttext } = props;

  return (
    <li className="postComment">
      <div className="commentUser">
        <img className="commentUserImg" src={commentUserImg} alt="유저 기본 프로필 이미지" />
        <strong className="commentUserName">  
            {commentUserName}
        </strong>
        <span className="commentTime">{commentTimeNum}</span>
        <button className="moreCommentBtn" type="button"></button>
      </div>
      <p className="commenttxt">{commenttext}</p>
    </li>
  )
}
