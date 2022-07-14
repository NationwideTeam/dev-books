import "./profileImgUpload.css";

export const ProfileImgUpload = (props) => {
  return (
    <div>
      <label htmlFor="profileImg" className="profileImgUpload">
        <img src={props.src} alt="" />
      </label>
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
