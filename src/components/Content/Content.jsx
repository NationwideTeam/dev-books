import "./content.css";
import React, { useState, useEffect } from "react";
import Modal from "../Modal/Modal";
import ModalContent from "../ModalContent/ModalContent";
import Alert from "../Alert/Alert";
import { useNavigate } from "react-router-dom";

export function Content(props) {
  const {
    userImg,
    userName,
    userId,
    posttext,
    postImg,
    heartNum,
    commentNum,
    postDate,
    onClick,
    value,
  } = props;

  const [postModal, setPostModal] = useState(false);
  const [postAlert, setPostAlert] = useState(false);

  let navigate = useNavigate();

  const postUpdate = () => {
    navigate(`/PostEdit?postId=${value}`, {
      state: {
        postId: value,
        postTxt: posttext,
        postImg: postImg,
        userImg: userImg,
      },
    });
  };

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
        <button
          className="moreBtn"
          type="button"
          onClick={() => {
            setPostModal(true);
          }}
        ></button>
      </h2>
      <div className="postMain">
        <p className="contenttxt">{posttext}</p>
        {postImg.map((file, index) => {
          return <img className="contentImg" src={file} alt="" key={index} />;
        })}
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
      {window.localStorage.accountname === userId ? (
        <>
          <div
            className={postModal ? "postModal" : "disabledPostPopup"}
            onClick={() => {
              setPostModal(false);
            }}
          >
            <Modal>
              <ModalContent
                txt="삭제"
                onClick={() => {
                  setPostAlert(true);
                  setPostModal(false);
                }}
              />
              <ModalContent txt="수정" onClick={postUpdate} />
            </Modal>
          </div>
          <div className={postAlert ? "postModal" : "disabledPostPopup"}>
            <Alert
              message="게시글을 삭제할까요?"
              cancel="취소"
              confirm="삭제"
              value={value}
              onClickConfirm={onClick}
              onClickCancel={() => setPostAlert(false)}
            />
          </div>
        </>
      ) : (
        <>
          <div
            className={postModal ? "postModal" : "disabledPostPopup"}
            onClick={() => {
              setPostModal(false);
            }}
          >
            <Modal>
              <ModalContent
                txt="신고하기"
                onClick={() => {
                  setPostAlert(true);
                  setPostModal(false);
                }}
              />
            </Modal>
          </div>
          <div className={postAlert ? "postModal" : "disabledPostPopup"}>
            <Alert
              message="신고하시겠습니까?"
              cancel="취소"
              confirm="신고"
              onClickCancel={() => setPostAlert(false)}
            />
          </div>
        </>
      )}
    </section>
  );
}

export function Contents(props) {
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
        console.log(json.post);
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
        value={item.id}
        userImg={item.author.image}
        userName={item.author.username}
        userId={item.author.accountname}
        posttext={item.content}
        postImg={item.image.split(",")}
        heartNum={item.heartCount}
        commentNum={item.commentCount}
        postDate={item.createdAt}
        onClick={props.onClick}
      />
    );
  });
}
