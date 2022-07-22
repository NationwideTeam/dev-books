import React from "react";
import "./album.css";
import Postbar from "../Postbar/Postbar";
import album1 from "../../assets/album1.png";
import album2 from "../../assets/album2.png";
import album3 from "../../assets/album3.png";

function Album() {
  return (
    <div className="album">
      <div className="postWrapper">
        <img src={album1} alt="" />
        <img src={album2} alt="" />
        <img src={album3} alt="" />
        <img src={album3} alt="" />
        <img src={album1} alt="" />
        <img src={album2} alt="" />
        <img src={album3} alt="" />
        <img src={album2} alt="" />
        <img src={album1} alt="" />
      </div>
    </div>
  );
}

export default Album;
