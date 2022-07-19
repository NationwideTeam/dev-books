import React from "react";
import "./profileInfo.css";
import { Link } from "react-router-dom";

function ProfileInfo(props) {
  return (
    <div className="profileInfo">
      <div className="profileWrapper">
        <div className="follower">
          <Link to="/followers">{props.follower}</Link>
          <p className="followText">followers</p>
        </div>
        <img src={props.ProfileImg} className="profileImg" alt="" />
        <div className="followings">
          <Link to="/followings">{props.followings}</Link>
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
