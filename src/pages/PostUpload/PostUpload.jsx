import './postUpload.css';
import { UploadNav } from '../../components/Navbar/Navbar';
import Topbar from '../../components/Topbar/Topbar';
import { useEffect, useState } from 'react';
import ImgPreview from '../../components/ImgPreview/ImgPreveiw';
import { useNavigate } from 'react-router-dom';

// 업로드 할 이미지가 담기는 배열 전역변수로 선언
let fileUrls = [];

export default function PostUpload() {
  // 유저 프로필 이미지 상태
  const [profileImg, setProfileImg] = useState('');

  // 업로드한 포스트 프리뷰 이미지 상태
  const [postImgUrl, setPostImgUrl] = useState([]);

  // 포스트 텍스트 상태
  const [contentText, setContentText] = useState('');

  // 버튼 활성화 상태
  const [buttonActive, setButtonActive] = useState(
    'button ms disabled uploadButton'
  );

  // 내 프로필로 넘어가기
  let navigate = useNavigate();

  const next = () => {
    navigate('/singlePost')
  }

  // 유저 프로필 이미지 동적으로 받아오기
  const getUserProfile = async () => {
    const url = 'https://mandarin.api.weniv.co.kr';
    const token = localStorage.getItem('token');
    const accountname = localStorage.getItem('accountname');

    try {
      const res = await fetch(url + '/' + 'profile' + '/' + accountname, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token}`,
          'Content-type': 'application/json',
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
    if (contentText.length >= 0) {
      setButtonActive('button ms uploadButton');
    } else if (contentText === ' ') {
      setButtonActive('button ms uploadButton disabled');
    }
  };

  // 이미지 업로드 여부에 따라 버튼 활성화 하기 (곧 업데이트 예정)
  

  // 이미지 서버로 보내기
  const uploadImg = async (file) => {
    const url = 'https://mandarin.api.weniv.co.kr';
    const imgUploadPath = '/image/uploadfiles';

    const formData = new FormData();
    formData.append('image', file);

    try {
      const res = await fetch(url + imgUploadPath, {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
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
    fileArray.forEach(file => fileUrls.push(file));

    let previewUrl = [];

    if (files.length <= 3) {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];
        let reader = new FileReader();
        reader.onload = () => {
          previewUrl[i] = reader.result;
          setPostImgUrl([...previewUrl]);
        };
        reader.readAsDataURL(file);
      }
    } else {
      alert('이미지는 3개까지 올릴 수 있습니다.');
    }
  };

  // 이미지 삭제 버튼 기능

  // 게시글 & 이미지 작성 후 서버에 업로드
  const createPost = async () => {
    const url = 'https://mandarin.api.weniv.co.kr';
    const createPostReaPath = '/post';
    const token = localStorage.getItem('token');
    const postContentText = contentText;
    // const files = postImgUrl;

    const imgUrls = [];

    try {
      for (const file of fileUrls) {
        imgUrls.push(url + '/' + (await uploadImg(file)));
      }
      if (postContentText === '' || postImgUrl.length === 0) {
        alert('내용 또는 이미지를 입력해주세요.');
        return;
      } else {
        const res = await fetch(url + createPostReaPath, {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-type': 'application/json',
          },
          body: JSON.stringify({
            post: {
              content: postContentText,
              image: imgUrls.join(','),
            },
          }),
        });
        const json = await res.json();
        console.log(json);
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
        <ImgPreview postUrl={postImgUrl} />
      </div>
    </div>
  );
}
