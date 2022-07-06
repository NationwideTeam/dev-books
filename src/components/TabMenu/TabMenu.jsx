import "./tabMenu.css";
import homeButton from "../../assets/icon/icon-home.svg"
import chatButton from "../../assets/icon/icon-message-circle.svg"
import editButton from "../../assets/icon/icon-edit.svg"
import profileButton from "../../assets/icon/icon-user.svg"
import { Link } from "react-router-dom";

export default function TabMenu() {
  return (
    <>
      <ul className="tabMenuWrapper">
        <li className="tabMenuHome">
          <Link to="/" className="tabLink"><img src={homeButton} alt="" />홈</Link>
        </li>
        <li className="tabMenuChat">
          <Link to="/" className="tabLink"><img src={chatButton} alt="" />채팅</Link>
        </li>
        <li className="tabMenuEdit">
          <Link to="/" className="tabLink"><img src={editButton} alt="" />게시물 작성</Link>
        </li>
        <li className="tabMenuProfile">
          <Link to="/" className="tabLink"><img src={profileButton} alt="" />프로필</Link>
        </li>
      </ul>
    </>
  )
}
