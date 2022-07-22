import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./album.css";

function Album(props) {
  const [album, setAlbum] = useState([]);
  const url = "https://mandarin.api.weniv.co.kr";
  const token = window.localStorage.getItem("token");
  const accountName = props.accountName;
  const init = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };

  useEffect(() => {
    const userpost = async () => {
      const userpostPath = `/post/${accountName}/userpost`;

      try {
        const res = await fetch(url + userpostPath, init);
        const json = await res.json();
        setAlbum(json.post);
      } catch (err) {
        console.error(err);
      }
    };
    userpost();
  }, []);

  return (
    <div className="album">
      <div className="postWrapper">
        {album.map((item, index) => {
          return (
            // 링크 추후 변경 
            <Link to="/singlePost" key={index} >
              <img src={item.image.split(',')[0]} alt="" />
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default Album;
