import "./PostUploadContent.css"
import Topbar from "../../components/Topbar/Topbar"
import {UploadNav} from "../../components/Navbar/Navbar"
import postImg from "../../assets/post-img-example.png"

export default function PostUploadContent(props) {
  const { userImg } = props;

  return (
    <div className="postingContentWrap">
      <Topbar/>
      <UploadNav title="업로드" />
      <section className="contentWrap">
        <form className="postingContent">
          <img className="postingUserImg" src={userImg} alt="프로필 이미지" /> 
          <p className="postingTxt">사용자 간의 자유로운 의사소통과 정보 공유, 그리고 인맥 확대 등을 통해 사회적 관계를 생성하고 강화해주는 온라인 플랫폼을 의미한다.</p>
          <label for="uploadInput" className="postUploadBtn"></label>
          <input className="postUploadInput" id="uploadInput" type="file"></input>
        </form>
        <div className="postingImgWrap">
          <button className="postingImgClose"></button>
          <img src={postImg} alt="" />
        </div>
      </section>
  </div>
  )
}
