import "./singlePost.css";
import { BasicNav } from "../../components/Navbar/Navbar";
import Comment from "../../components/Comment/Comment";
import { Content } from "../../components/Content/Content";
import PostComment from "../../components/PostComment/PostComment";
import Topbar from "../../components/Topbar/Topbar";
import { useState, useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Modal from "../../components/Modal/Modal";
import ModalContent from "../../components/ModalContent/ModalContent";
import Alert from "../../components/Alert/Alert";

export default function SinglePost() {
  const [commentModal, setCommentModal] = useState(false);
  const [commentAlert, setCommentAlert] = useState(false);
  const [navModal, setNavModal] = useState(false);
  const [alert, setAlert] = useState(false);

  let navigate = useNavigate();

  // 유저 프로필 상태
  const [userProfileImg, setUserProfileImg] = useState("");

  // 유저 닉네임 상태
  const [userName, setUserName] = useState("");

  // 유저 id 상태
  const [userId, setUserId] = useState("");

  // 게시글 id
  const [postId, setPostId] = useState("");

  // 게시글 내용 상태
  const [contentText, setContentText] = useState("");

  // 게시글 이미지 상태
  const [contentImg, setContentImg] = useState([]);

  // 좋아요 count 상태
  const [likeCount, setLikeCount] = useState("");

  // 댓글 개수 상태
  const [commentCount, setCommentCount] = useState("");

  // 포스트 업로드 날짜
  const [uploadDate, setUploadDate] = useState("");

  // 댓글 내용 상태 useRef
  const commentText = useRef();

  // 댓글 작성 유저 프로필 이미지
  const [commentProfile, setCommentProfile] = useState("");

  // 댓글 작성 유저 아이디
  const [commentUserId, setCommentUserId] = useState([]);

  // 댓글 불러오기 정보 상태
  const [content, setContent] = useState([]);

  // 포스트 고유 아이디
  const location = useLocation();
  const postUniqueId = location.state.postId;

  // 사용할 url, token, accountname
  const url = "https://mandarin.api.weniv.co.kr";
  const token = window.localStorage.getItem("token");

  // 게시글 정보
  const getPostInfo = async () => {
    const postInfoPath = `/post/${postUniqueId}`;

    try {
      const res = await fetch(url + postInfoPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const json = await res.json();

      setPostId(json.post.id);
      setUserProfileImg(json.post.author.image);
      setCommentProfile(json.post.author.image);
      setUserName(json.post.author.username);
      setUserId(json.post.author.accountname);
      setContentText(json.post.content);

      if (json.post.image.split(",")[0] === "") {
        setContentImg([]);
      } else {
        setContentImg(json.post.image.split(","));
      }

      setLikeCount(json.post.heartCount);
      setCommentCount(json.post.commentCount);
      setUploadDate(
        json.post.createdAt
          .slice(0, 11)
          .replace("-", "년 ")
          .replace("-", "월 ")
          .replace("T", "일")
      );
    } catch (error) {}
  };

  useEffect(() => {
    getPostInfo();
  }, []);

  // 게시글 삭제
  const postDelete = async (e) => {
    const url = "https://mandarin.api.weniv.co.kr";
    const token = window.localStorage.getItem("token");
    const postId = e.target.value;

    try {
      const res = await fetch(`${url}/post/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const json = await res.json();
      window.location.href = "./myProfile";
    } catch (error) {
      console.error(error);
    }
  };

  // 댓글 작성
  const createComment = async () => {
    const commentReqPath = `/post/${postUniqueId}/comments`;

    try {
      if (commentText.current.value === "") {
        alert("댓글을 입력해주세요.");
      } else {
        const res = await fetch(url + commentReqPath, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            comment: {
              content: commentText.current.value,
            },
          }),
        });
        const json = await res.json();
        getCommentList();
        commentText.current.value = "";
      }
    } catch (error) {
      console.log(error);
    }
  };

  // 댓글 불러오기
  const getCommentList = async () => {
    const commentListPath = `/post/${postUniqueId}/comments`;

    try {
      const res = await fetch(url + commentListPath, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const json = await res.json();
      const commentInfo = json.comments;
      setContent(commentInfo);
      const commentAccountName = commentInfo.map(
        (item) => item.author.accountname
      ); // ['user1', 'user2', 'user2']
      const commentID = commentInfo.map((item) => item.id);
      setCommentUserId(commentAccountName);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCommentList();
  }, []);

  const commentId = (e) => {
    setCommentUserId(e.target.value);
  };

  // 로그아웃
  const handleLogout = () => {
    window.localStorage.removeItem("accountname");
    window.localStorage.removeItem("token");
    navigate("/login");
  };

  // 설정 및 개인정보 버튼 누르면 myProfile로 이동
  const nextMyProfile = () => {
    navigate("/myProfile");
  };

  return (
    <div className="singlePostWrap">
      <Topbar />
      <BasicNav
        onClick={() => {
          setNavModal(true);
        }}
      />
      <section className="singlePostMain">
        <section className="singlePostContainer">
          <Content
            userImg={userProfileImg}
            userName={userName}
            userId={userId}
            posttext={contentText}
            postImg={contentImg}
            heartNum={likeCount}
            commentNum={commentCount}
            postDate={uploadDate}
            value={postId}
            onClick={postDelete}
          />
        </section>
        <ul className="postCommentWrap">
          <PostComment
            postUniqueId={postUniqueId}
            commentInfo={content}
            onClick={(e) => {
              setCommentModal(true);
              commentId(e);
            }}
          />
        </ul>
      </section>
      <Comment
        ref={commentText}
        click={createComment}
        profile={commentProfile}
      />
      {window.localStorage.getItem("accountname") === commentUserId ? (
        <>
          <div
            className={commentModal ? "commentModal" : "disabledCommentPopup"}
            onClick={() => {
              setCommentModal(false);
            }}
          >
            <Modal>
              <ModalContent
                txt="삭제"
                onClick={() => {
                  setCommentAlert(true);
                  setCommentModal(false);
                }}
              />
            </Modal>
          </div>
          <div
            className={commentAlert ? "commentModal" : "disabledCommentPopup"}
          >
            <Alert
              message="댓글을 삭제할까요?"
              cancel="취소"
              confirm="삭제"
              onClickConfirm={() => setCommentAlert(false)}
              onClickCancel={() => setCommentAlert(false)}
            />
          </div>
        </>
      ) : (
        <>
          <div
            className={commentModal ? "commentModal" : "disabledCommentPopup"}
            onClick={() => {
              setCommentModal(false);
            }}
          >
            <Modal>
              <ModalContent
                txt="신고"
                onClick={() => {
                  setCommentAlert(true);
                  setCommentModal(false);
                }}
              />
            </Modal>
          </div>
          <div
            className={commentAlert ? "commentModal" : "disabledCommentPopup"}
          >
            <Alert
              message="신고하시겠습니까?"
              cancel="취소"
              confirm="신고"
              onClickCancel={() => setCommentAlert(false)}
            />
          </div>
        </>
      )}
      <div
        className={navModal ? "postNavModal" : "disabledPostPopup"}
        onClick={() => {
          setNavModal(false);
        }}
      >
        <Modal>
          <ModalContent txt="설정 및 개인정보" onClick={nextMyProfile} />
          <ModalContent
            txt="로그아웃"
            onClick={() => {
              setAlert(true);
              setNavModal(false);
            }}
          />
        </Modal>
      </div>
      <div className={alert ? "postAlert" : "disabledPostPopup"}>
        <Alert
          message="로그아웃하시겠어요?"
          cancel="취소"
          confirm="로그아웃"
          onClickCancel={() => {
            setAlert(false);
          }}
          onClickConfirm={handleLogout}
        />
      </div>
    </div>
  );
}
