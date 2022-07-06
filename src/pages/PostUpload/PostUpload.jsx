import "./postUpload.css"
import {UploadNav} from "../../components/Navbar/Navbar"
import Topbar from "../../components/Topbar/Topbar";

export default function PostUpload(props) {
  const { userImg } = props;

  return (
    <div className="postUploadWrap">
      <Topbar/>
      <UploadNav title="업로드" />
      <section className="postUploadContent">
        <img className="postUploadUserImg" src={userImg} alt="프로필 이미지" /> 
        <textarea className="postUploadTxt" cols="30" rows="10" placeholder="게시글 입력하기..."></textarea>
      </section>
      <button className="postUploadBtn" type="file"></button>
    </div>
  )
}
