import { TextInput } from '../../components/TextInput/TextInput';
import ProfileImgUpload from '../../components/ProfileImgUpload/ProfileImgUpload';
import Topbar from "../../components/Topbar/Topbar";
import Button from '../../components/Buttons/Button';
import './joinProfile.css';

export const JoinProfile = () => {
  return (
    <div className="joinProfile">
      <Topbar />
      <h1 className="joinProfileTitle">프로필 설정</h1>
      <p className="joinProfileText">나중에 언제든지 변경할 수 있습니다.</p>
      <ProfileImgUpload />
      <div className="textInput">
        <TextInput 
          label="사용자 이름"
          type="text"
          placeholder="2~10자 이내여야 합니다."
        />
      </div>
      <div className="textInput">
        <TextInput 
          label="계정 ID"
          type="text"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
        />
      </div>
      <div className="textInput">
        <TextInput 
          label="소개"
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
        />
      </div>
      <Button className="button lg disabled joinButton">데브북스 시작하기</Button>
    </div>
  )
}

export default JoinProfile;