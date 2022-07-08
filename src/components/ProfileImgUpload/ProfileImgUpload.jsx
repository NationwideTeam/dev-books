import ProfileImg from '../../assets/basic-profile-img.svg';
import './profileImgUpload.css';

export const ProfileImgUpload = () => {
  return (
    <div>
      <label htmlFor="profileImg" className="profileImgUpload">
        <img src={ProfileImg} alt="" />
      </label>
      <input type="file" id="profileImg" name="profileImg" accept="image/*" className="a11yHidden" />
    </div>
  )
} 

export default ProfileImgUpload;