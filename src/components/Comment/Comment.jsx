import "./comment.css"
import basicProfile from "../../assets/basic-profile-img.svg"

export default function Comment() {
  return (
    <form className="commentForm">
      <img className="basicProfile" src={basicProfile} alt="" />
      <label htmlFor="comment" className="a11yHidden">댓글창 입니다.</label>
      <input type="text" placeholder="댓글 입력하기..." className="inputComment" id="comment" />
      <button className="uploadComment" type="button">게시</button>
    </form>
  )
}
