import React from "react";
import "./postbar.css";

function Postbar() {
  return (
    <div className="postbar">
      <button className="postAlbum">
        <span className="a11yHidden">앨범</span>
      </button>
      <button className="postList">
        <span className="a11yHidden">리스트</span>
      </button>
    </div>
  );
}

export default Postbar;
