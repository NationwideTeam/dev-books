import { UploadNav } from '../../components/Navbar/Navbar';
import { TextInput } from '../../components/TextInput/TextInput';
import ProfileImgUpload from '../../components/ProfileImgUpload/ProfileImgUpload';
import './profileUpdate.css';

export const ProfileUpdate = () => {
  return (
    <div className="profileUpdate">
      <UploadNav />
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
    </div>
  );
};

export default ProfileUpdate;