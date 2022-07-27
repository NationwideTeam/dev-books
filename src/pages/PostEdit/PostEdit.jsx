import "./postEdit.css";
import { UploadNav } from "../../components/Navbar/Navbar";
import Topbar from "../../components/Topbar/Topbar";
import { useEffect, useState } from "react";
import ImgPreview from "../../components/ImgPreview/ImgPreveiw";
import { useNavigate, useLocation } from "react-router-dom";

// 업로드 할 이미지가 담기는 배열 전역변수로 선언
let fileUrls = [];

// 포스트 고유 아이디 담는 전역변수 선언
let postUniqueId = "";

export default function PostUpload() {
  // content 컴포넌트에서 값 가져옴
  const location = useLocation();
  const postId = location.state.postId;
  const postTxt = location.state.postTxt;
  const postImg = location.state.postImg;
  const userImg = location.state.userImg;

  // 최종 업로드할 이미지 상태
  const [fileUrlsEdit, setFileUrlsEdit] = useState(postImg);

  // 유저 프로필 이미지 상태
  const [profileImg, setProfileImg] = useState(userImg);

  // 업로드한 포스트 프리뷰 이미지 상태
  const [postImgUrl, setPostImgUrl] = useState(postImg);

  // 포스트 텍스트 상태
  const [contentText, setContentText] = useState(postTxt);

  // 버튼 활성화 상태
  const [buttonActive, setButtonActive] = useState("button ms uploadButton");

  // 내 프로필로 넘어가기
  let navigate = useNavigate();

  // 게시글 업로드, 수정한 후 singlePost페이지로 넘어감
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
      console.log(error);
    }
  };
  getUserProfile();

  // 게시글 작성 여부에 따라 버튼 활성화 하기
  const changeButtonColor = (e) => {
    setContentText(e.target.value);
    if (contentText !== "") {
      setButtonActive("button ms uploadButton");
    } else if (contentText === "") {
      setButtonActive("button ms uploadButton disabled");
    }
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
      console.log("data" + data);
      const postImgName = data[0].filename;
      return postImgName;
    } catch (error) {
      console.log(error);
    }
  };

  // 이미지 프리뷰 보기
  const viewPostImg = (e) => {
    let files = e.target.files;
    let fileArray = [...files];
    fileArray.forEach((file) => fileUrls.push(file));

    let previewUrl = [];

    if (files.length <= 3) {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let reader = new FileReader();
        // console.log(reader);
        reader.onload = () => {
          previewUrl[i] = reader.result;
          setPostImgUrl([...previewUrl, ...postImg]);
        };
        reader.readAsDataURL(file);
      }
    } else {
      alert("이미지는 3개까지 올릴 수 있습니다.");
    }
  };

  // 이미지 프리뷰 삭제
  const onDeleteImg = (e) => {
    const targetImg = e.currentTarget.value;

    setPostImgUrl(postImgUrl.filter((e) => e !== targetImg));
    setFileUrlsEdit(fileUrlsEdit.filter((e) => e !== targetImg));
    fileUrls = [];
  };

  // 게시글 & 이미지 작성 후 서버에 업로드
  const createPost = async () => {
    const url = "https://mandarin.api.weniv.co.kr";
    const token = localStorage.getItem("token");
    const postContentText = contentText;
    // const imgUrls = postImg;
    // const imgUrls = [];

    // console.log(fileUrlsEdit);

    const imgUrls = fileUrlsEdit;

    for (const file of fileUrls) {
      imgUrls.push(url + "/" + (await uploadImg(file)));
    }

    try {
      if (postContentText === "" || postImgUrl.length === 0) {
        alert("내용 또는 이미지를 입력해주세요.");
        return;
      } else {
        const res = await fetch(`${url}/post/${postId}`, {
          method: "PUT",
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
        console.log(json);
        postUniqueId = json.post.id;
        fileUrls = [];
        next();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="postUploadWrap">
      <Topbar />
      <UploadNav title="업로드" onClick={createPost} className={buttonActive} />
      <form className="postUploadContent" method="post">
        <img
          className="postUploadUserImg"
          src={profileImg}
          alt="유저 프로필 이미지"
        />
        <textarea
          className="postUploadTxt"
          cols="30"
          rows="10"
          placeholder="게시글 입력하기..."
          value={contentText}
          onChange={changeButtonColor}
        ></textarea>
        <label htmlFor="uploadInput" className="postUploadBtn"></label>
        <input
          className="postUploadInput"
          id="uploadInput"
          type="file"
          multiple
          accept="*.jpg, *.gif, *.png, *.jpeg, *.bmp, *.tif, *.heic"
          onChange={viewPostImg}
        ></input>
      </form>
      <div className="postImgLists">
        <ImgPreview postUrl={postImgUrl} onClick={onDeleteImg} />
      </div>
    </div>
  );
}
