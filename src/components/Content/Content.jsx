import "./content.css";
import React, { useState, useEffect } from "react";

function Content(props) {
  const {
    userImg,
    userName,
    userId,
    posttext,
    postImg,
    heartNum,
    commentNum,
    postDate,
  } = props;
  
  return (
    <section className="postContent">
      <h2 className="postUser">
        <img
          className="postUserImg"
          src={userImg}
          alt="유저 기본 프로필 이미지"
        />
        <div className="postUserInfo">
          <strong className="postUserName">{userName}</strong>
          <strong className="postUserId">{userId}</strong>
        </div>
        <button className="moreBtn" type="button"></button>
      </h2>
      <div className="postMain">
        <p className="contenttxt">{posttext}</p>
        <img className="contentImg" src={postImg} alt="" />
      </div>
      <div className="postBtnWrap">
        <span className="heartIcon">
          <button type="button" className="heartBtn"></button>
          <strong className="postHeartNum">{heartNum}</strong>
        </span>
        <span className="messageIcon">
          <button type="button" className="messageBtn"></button>
          <strong className="postMessageNum">{commentNum}</strong>
        </span>
      </div>
      <div className="postDate">{postDate.split("T")[0]}</div>
    </section>
  );
}

function Contents(props) {
  const [content, setContent] = useState([]);
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
        setContent(json.post);
      } catch (err) {
        console.error(err);
      }
    };
    userpost();
  }, []);

  return content.map((item, index) => {
    return (
      <Content
        key={index}
        userImg={item.author.image}
        userName={item.author.username}
        userId={item.author.accountname}
        posttext={item.content}
        postImg={item.image}
        heartNum={item.heartCount}
        commentNum={item.commentCount}
        postDate={item.createdAt}
      />
    );
  });
}
export default Contents;