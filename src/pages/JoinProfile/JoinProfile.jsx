import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { TextInput } from "../../components/TextInput/TextInput";
import ProfileImgUpload from "../../components/ProfileImgUpload/ProfileImgUpload";
import Topbar from "../../components/Topbar/Topbar";
import Button from "../../components/Buttons/Button";
import {
  JoinProfileWrap,
  JoinProfileTitle,
  JoinProfileText,
  TextInputWrap,
  JoinButtonWrap,
  ErrorMessage,
} from "./joinProfile.style";

export const JoinProfile = () => {
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [userIntro, setUserIntro] = useState("");
  const [userImg, setUserImg] = useState(
    "https://mandarin.api.weniv.co.kr/Ellipse.png"
  );

  const [userNameError, setUserNameError] = useState("");
  const [userIdError, setUserIdError] = useState("");
  const [userImgErr, setUserImgErr] = useState("");

  const location = useLocation();
  const userEmail = location.state.userEmail;
  const userPw = location.state.userPW;
  let navigate = useNavigate();
  const next = () => {
    navigate("/HomeFeed");
  };

  // 계정 ID의 중복 체크
  const checkIdValid = async () => {
    const url = "https://mandarin.api.weniv.co.kr";
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

      // 영문, 숫자, 밑줄, 마침표 유효성 검사 정규표현식
      const regExp = /^[_A-Za-z0-9+.]*$/;
      let resultUserId = regExp.test(userId);

      if (userName.length < 1) {
        setUserNameError("사용자 이름을 입력해주세요.");
      } else if (userName.length > 10 || userName.length < 2) {
        setUserNameError("사용자 이름은 2~10자 이내여야 합니다.");
      } else if (userId === "") {
        setUserIdError("계정 ID를 입력해주세요.");
      } else if (resIdNameValidJson.message === "이미 가입된 계정ID 입니다.") {
        setUserIdError("이미 가입된 계정ID 입니다.");
      } else if (resultUserId === false) {
        setUserIdError("영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.");
      } else {
        join();
      }
    } catch (err) {
      console.error(err);
    }
  };

  // 회원가입 최종 데이터 전송 join()
  const join = async () => {
    const url = "https://mandarin.api.weniv.co.kr";
    const userPath = "/user";

    const joinData = {
      user: {
        username: userName,
        email: userEmail,
        password: userPw,
        accountname: userId,
        intro: userIntro,
        image: userImg,
      },
    };
    const init = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(joinData),
    };

    try {
      const res = await fetch(url + userPath, init);
      const json = await res.json();
      next();
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

  return (
    <JoinProfileWrap>
      <Topbar />
      <JoinProfileTitle>프로필 설정</JoinProfileTitle>
      <JoinProfileText>나중에 언제든지 변경할 수 있습니다.</JoinProfileText>
      <ProfileImgUpload src={userImg} onChange={handleGetImg} />
      <ErrorMessage>
        <span>{userImgErr}</span>
      </ErrorMessage>
      <TextInputWrap>
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
        />
        <ErrorMessage>{userNameError}</ErrorMessage>
      </TextInputWrap>
      <TextInputWrap>
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
        />
        <ErrorMessage>{userIdError}</ErrorMessage>
      </TextInputWrap>
      <TextInputWrap>
        <TextInput
          label="소개"
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          for="introduce"
          id="introduce"
          value={userIntro}
          onChange={(e) => {
            setUserIntro(e.target.value);
          }}
        />
      </TextInputWrap>
      <JoinButtonWrap onClick={checkIdValid}>
        <Button
          className={
            !userNameError && !userIdError && userName !== "" && userId !== ""
              ? "button lg"
              : "button lg disabled"
          }
        >
          데브북스 시작하기
        </Button>
      </JoinButtonWrap>
    </JoinProfileWrap>
  );
};

export default JoinProfile;
