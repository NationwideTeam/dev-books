import { UploadNav } from "../../components/Navbar/Navbar";
import { TextInput } from "../../components/TextInput/TextInput";
import ProfileImgUpload from "../../components/ProfileImgUpload/ProfileImgUpload";
import Topbar from "../../components/Topbar/Topbar";
import "./profileUpdate.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const ProfileUpdate = () => {
  let navigate = useNavigate();

  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [intro, setIntro] = useState("");
  const [userImg, setUserImg] = useState("");

  const [userNameError, setUserNameError] = useState("");
  const [userIdError, setUserIdError] = useState("");
  const [userImgErr, setUserImgErr] = useState("");

  const url = "https://mandarin.api.weniv.co.kr";
  const token = window.localStorage.getItem("token");
  const accountName = window.localStorage.getItem("accountname");

  useEffect(() => {
    profileGet();
  }, []);

  const next = () => {
    navigate("/myProfile");
  };

  // 1. 프로필 정보 가져오기
  const profileGet = async () => {
    const profilePath = `/profile/${accountName}`;
    const init = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };

    try {
      const res = await fetch(url + profilePath, init);
      const json = await res.json();
      setUserName(json.profile.username);
      setUserId(json.profile.accountname);
      setIntro(json.profile.intro);
      setUserImg(json.profile.image);
    } catch (err) {
      console.error(err);
    }
  };

  // 2. 프로필 정보 변경
  // 사용자 이름 유효성 검사
  const handleCheckUserName = () => {
    if (userName.length < 1) {
      setUserNameError("사용자 이름을 입력해주세요.");
    } else if (userName.length > 10 || userName.length < 2) {
      setUserNameError("사용자 이름은 2~10자 이내여야 합니다.");
    } else {
      setUserNameError("");
    }
  };

  // 계정 ID 유효성 검사
  const handleCheckUserId = async () => {
    const IdPath = "/user/accountnamevalid";
    const IdInput = {
      user: {
        accountname: userId,
      },
    };
    const init = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(IdInput),
    };

    try {
      const resIdNameValid = await fetch(url + IdPath, init);
      const resIdNameValidJson = await resIdNameValid.json();

      const regExp = /^[_A-Za-z0-9+.]*$/;
      let resultUserId = regExp.test(userId);

      if (userId === "") {
        setUserIdError("계정 ID를 입력해주세요.");
      } else if (resIdNameValidJson.message === "이미 가입된 계정ID 입니다.") {
        setUserIdError("이미 가입된 계정ID 입니다.");
      } else if (resultUserId === false) {
        setUserIdError("영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.");
      } else {
        setUserIdError("");
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 프로필 이미지 업로드
  const imgUpload = async (file) => {
    const formData = new FormData();
    formData.append("image", file);

    const url = "https://mandarin.api.weniv.co.kr";
    const imgUploadReqPath = "/image/uploadfile";

    try {
      const res = await fetch(url + imgUploadReqPath, {
        method: "POST",
        body: formData,
      });
      const json = await res.json();

      return url + "/" + json.filename;
    } catch (err) {
      console.error(err);
    }
  };

  const handleGetImg = async (e) => {
    const file = e.target.files[0];
    const imgSize = e.target.files[0].size;
    const maxSize = 1024 * 1024; // 1MB
    if (imgSize > maxSize) {
      setUserImgErr("이미지 용량은 1MB 이내로 등록 가능합니다.");
    } else {
      setUserImgErr("");
      const imgSrc = await imgUpload(file);
      setUserImg(imgSrc);
    }
  };

  // 3. 프로필 수정 완료
  const profileSave = async () => {
    const res = await fetch(url + "/user", {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        user: {
          username: userName,
          accountname: userId,
          intro: intro,
          image: userImg,
        },
      }),
    });
    const json = await res.json();
    localStorage.removeItem("accountname");
    localStorage.setItem("accountname", json.user.accountname);
    next();
  };

  return (
    <div className="profileUpdate">
      <Topbar />
      <UploadNav
        title="저장"
        onClick={profileSave}
        className={
          !userNameError && !userIdError && !userImgErr && userName !== "" && userId !== ""
            ? "button ms uploadButton"
            : "button ms disabled uploadButton"
        }
      />
      <ProfileImgUpload src={userImg} onChange={handleGetImg} />
      <div className="imgErrorMsg errorMessage">
        <span>{userImgErr}</span>
      </div>
      <div className="textInput">
        <TextInput
          label="사용자 이름"
          type="text"
          placeholder="2~10자 이내여야 합니다."
          for="userName"
          id="userName"
          value={userName}
          onChange={(e) => {
            setUserName(e.target.value);
            setUserNameError("");
          }}
          onBlur={handleCheckUserName}
        />
        <span className="errorMessage">{userNameError}</span>
      </div>
      <div className="textInput">
        <TextInput
          label="계정 ID"
          type="text"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          for="userId"
          id="userId"
          value={userId}
          onChange={(e) => {
            setUserId(e.target.value);
            setUserIdError("");
          }}
          onBlur={handleCheckUserId}
        />
        <span className="errorMessage">{userIdError}</span>
      </div>
      <div className="textInput">
        <TextInput
          label="소개"
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          for="introduce"
          id="introduce"
          value={intro}
          onChange={(e) => {
            setIntro(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default ProfileUpdate;
