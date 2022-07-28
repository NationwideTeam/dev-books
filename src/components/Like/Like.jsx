import "./like.css";
import { useState } from "react";

function Like({ heartCount, postid, hearted }) {
  const [like, setLike] = useState(hearted);
  const [likeNum, setLikeNum] = useState(heartCount);

  //좋아요 버튼 클릭 시, 바로 화면 재랜더링이 일어나지 않고 화면 업로드 시 반영되도록 구현
  function likef() {
    if (like === false) {
      setLike(!like);
      setLikeNum(likeNum + 1);
    } else {
      setLike(!like);
      setLikeNum(likeNum - 1);
    }
  }

  //좋아요 버튼 클릭
  function handleClikLike() {
    const token = window.localStorage.getItem("token");
    if (like === false) {
      async function addLike() {
        try {
          const res = await fetch(
            `https://mandarin.api.weniv.co.kr/post/${postid}/heart`,
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
              },
            }
          );
          setLikeNum(res.data.post.heartCount);
          setLike(res.data.post.hearted);
        } catch (error) {
          console.error(error);
        }
      }
      postid && addLike();
    } else if (like === true) {
      async function cancelLike() {
        try {
          const res = await fetch(
            `https://mandarin.api.weniv.co.kr/post/${postid}/unheart`,
            {
              method: "DELETE",
              headers: {
                Authorization: `Bearer ${token}`,
                "Content-type": "application/json",
              },
            }
          );
          setLikeNum(res.data.post.heartCount);
          setLike(res.data.post.hearted);
        } catch (err) {
          console.error(err);
        }
      }

      cancelLike();
    }

    likef();
  }

  return (
    <div className="likeBtnWrapper">
      <button
        className={like ? "clicked" : "unclicked"}
        onClick={handleClikLike}
      >
        <span className="likeBtnNum">{likeNum || 0}</span>
      </button>
    </div>
  );
}

export default Like;
