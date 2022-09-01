import { ProfileImageUpload } from "./profileImgUpload.style";

export const ProfileImgUpload = (props) => {
  return (
    <div>
      <ProfileImageUpload htmlFor="profileImg">
        <img src={props.src} alt="" />
      </ProfileImageUpload>
      <input
        type="file"
        id="profileImg"
        name="profileImg"
        accept="image/*"
        className="a11yHidden"
        onChange={props.onChange}
      />
    </div>
  );
};

export default ProfileImgUpload;
