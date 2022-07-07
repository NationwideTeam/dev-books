import React from "react";
import "./profileInfo.css";
import ProfileImg from "../../assets/basic-profile-img.svg";

function ProfileInfo(props) {
  return (
    <div className="profileInfo">
      <div className="profileWrapper">
        <div className="follower">
          <p>{props.follower}</p>
          <p className="followText">followers</p>
        </div>
        <img src={ProfileImg} alt="" />
        <div className="followings">
          <p>{props.followings}</p>
          <p className="followText">followings</p>
        </div>
      </div>
      <p className="profileName">{props.name}</p>
      <p className="profileId">{props.id}</p>
      <p className="profileDecript">{props.description}</p>
    </div>
  );
}

export default ProfileInfo;
