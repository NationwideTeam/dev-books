import "./content.css"
import iconMoreVertical from "../../assets/icon/icon-more-vertical.svg"

export default function Content(props) {

  const { userImg, userName, userId, posttext, postImg, heartNum, commentNum, postDate } = props;

  return (
    <section className="postContent">
      <h2 className="postUser">
        <img className="postUserImg" src={userImg} alt="유저 기본 프로필 이미지" />
        <div className="postUserInfo">
          <strong className="postUserName">  
              {userName}
          </strong>
          <strong className="postUserId">
              {userId}
          </strong>
        </div>
        <img className="moreBtn" src={iconMoreVertical} alt="" />
      </h2>
      <div className="postMain">
        <p className="contenttxt">{posttext}</p>
        <img className="contentImg" src={postImg} alt="" />
      </div>
      <div className="postBtnWrap">
        <span className="heartIcon">
          <button type="button" className="heartBtn"></button>
          <strong className="postHeartNum">{heartNum}</strong>
        </span>
        <span className="messageIcon">
          <button type="button" className="messageBtn"></button>
          <strong className="postMessageNum">{commentNum}</strong>
        </span>
      </div>
      <div className="postDate">{postDate}</div>
    </section>
  )
}
