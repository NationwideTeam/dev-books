// import "./postUpload.css";
import { UploadNav } from "../../components/Navbar/Navbar";
import Topbar from "../../components/Topbar/Topbar";
import { useEffect, useState } from "react";
import ImgPreview from "../../components/ImgPreview/ImgPreveiw";
import { useNavigate } from "react-router-dom";
import {
  PostUploadWrap,
  PostUploadContent,
  PostUploadUserImg,
  PostUploadTxt,
  PostUploadBtn,
  PostUploadInput,
  PostImgLists,
} from "./postUpload.style";

// 업로드 할 이미지가 담기는 배열 전역변수로 선언
let fileUrls = [];

// 포스트 고유 아이디 담는 전역변수 선언
let postUniqueId = "";

export default function PostUpload() {
  // 유저 프로필 이미지 상태
  const [profileImg, setProfileImg] = useState("");

  // 업로드한 포스트 프리뷰 이미지 상태
  const [postImgUrl, setPostImgUrl] = useState([]);

  // 포스트 텍스트 상태
  const [contentText, setContentText] = useState("");

  // 버튼 활성화 상태
  const [buttonActive, setButtonActive] = useState(
    "button ms disabled uploadButton"
  );

  // 내 프로필로 넘어가기
  let navigate = useNavigate();

  const next = () => {
    navigate("/singlePost", {
      state: {
        postId: postUniqueId,
      },
    });
  };

  // 유저 프로필 이미지 동적으로 받아오기
  const getUserProfile = async () => {
    const url = "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem("token");
    const accountname = localStorage.getItem("accountname");

    try {
      const res = await fetch(url + "/" + "profile" + "/" + accountname, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-type": "application/json",
        },
      });
      const json = await res.json();
      setProfileImg(json.profile.image);
    } catch (error) {
      console.error(error);
    }
  };
  getUserProfile();

  // 게시글 작성 여부에 따라 버튼 활성화 하기
  const changeButtonColor = (e) => {
    setContentText(e.target.value);
  };

  // 이미지 서버로 보내기
  const uploadImg = async (file) => {
    const url = "https://mandarin.api.weniv.co.kr";
    const imgUploadPath = "/image/uploadfiles";

    const formData = new FormData();
    formData.append("image", file);

    try {
      const res = await fetch(url + imgUploadPath, {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      const postImgName = data[0].filename;
      return postImgName;
    } catch (error) {
      console.error(error);
    }
  };

  // 프리뷰 이미지 주소 담는 전역변수
  let previewUrl = [];

  // 이미지 프리뷰 보기
  const viewPostImg = (e) => {
    let files = e.target.files;
    let fileArray = [...files];
    fileArray.forEach((file) => fileUrls.push(file));

    // 이미지 업로드 시 버튼 활성화
    setButtonActive("button ms uploadButton");

    // let previewUrl = [];

    if (fileUrls.length <= 3) {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let reader = new FileReader();
        reader.onload = () => {
          previewUrl.push(reader.result);
          setPostImgUrl([...previewUrl]);
        };
        reader.readAsDataURL(file);
      }
    } else {
      alert("이미지는 3개까지 올릴 수 있습니다.");
      fileUrls.pop();
    }
  };

  // 이미지 삭제 버튼 기능

  // 게시글 & 이미지 작성 후 서버에 업로드
  const createPost = async () => {
    const url = "https://mandarin.api.weniv.co.kr";
    const createPostReaPath = "/post";
    const token = localStorage.getItem("token");
    const postContentText = contentText;
    // const files = postImgUrl;

    const imgUrls = [];

    try {
      for (const file of fileUrls) {
        imgUrls.push(url + "/" + (await uploadImg(file)));
      }
      if (postContentText === "" && postImgUrl.length === 0) {
        alert("내용 또는 이미지를 입력해주세요.");
        return;
      } else {
        const res = await fetch(url + createPostReaPath, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            post: {
              content: postContentText,
              image: imgUrls.join(","),
            },
          }),
        });
        const json = await res.json();
        console.error(json);
        postUniqueId = json.post.id;
        fileUrls = [];
        next();
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <PostUploadWrap>
      <Topbar />
      <UploadNav
        title="업로드"
        onClick={createPost}
        className={
          contentText === "" && fileUrls.length === 0
            ? "button ms disabled uploadButton"
            : "button ms uploadButton"
        }
      />
      <PostUploadContent>
        <PostUploadUserImg src={profileImg} />
        <PostUploadTxt
          value={contentText}
          onChange={changeButtonColor}
        ></PostUploadTxt>
        <PostUploadBtn htmlFor="uploadInput"></PostUploadBtn>
        <PostUploadInput
          id="uploadInput"
          onChange={viewPostImg}
        ></PostUploadInput>
      </PostUploadContent>
      <PostImgLists>
        <ImgPreview postUrl={postImgUrl} />
      </PostImgLists>
    </PostUploadWrap>
  );
}
