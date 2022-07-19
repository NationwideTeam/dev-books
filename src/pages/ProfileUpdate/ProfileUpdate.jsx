import { UploadNav } from '../../components/Navbar/Navbar';
import { TextInput } from '../../components/TextInput/TextInput';
import ProfileImgUpload from '../../components/ProfileImgUpload/ProfileImgUpload';
import Topbar from "../../components/Topbar/Topbar";
import './profileUpdate.css';
import { useState, useEffect } from "react";

export const ProfileUpdate = () => {
  // 1. 프로필 정보 가져오기
  const [userName, setUserName] = useState("");
  const [userId, setUserId] = useState("");
  const [intro, setIntro] = useState("");
  const [userImg, setUserImg] = useState("");

  const url = "https://mandarin.api.weniv.co.kr";
  const token = window.localStorage.getItem("token");
  const accountName = window.localStorage.getItem("accountname");
  const init = {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-type": "application/json",
    },
  };

  useEffect(() => {
    profileGet();
  }, [])

  const profileGet = async () => {
    const profilePath = `/profile/${accountName}`;

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
  
  return (
    <div className="profileUpdate">
      <Topbar />
      <UploadNav title="저장"/>
      <ProfileImgUpload src={userImg}/>
      <div className="textInput">
        <TextInput 
          label="사용자 이름"
          type="text"
          placeholder="2~10자 이내여야 합니다."
          for="userName"
          id="userName"
          value={userName}
        />
      </div>
      <div className="textInput">
        <TextInput 
          label="계정 ID"
          type="text"
          placeholder="영문, 숫자, 특수문자(.),(_)만 사용 가능합니다."
          for="userId"
          id="userId"
          value={userId}
        />
      </div>
      <div className="textInput">
        <TextInput 
          label="소개"
          type="text"
          placeholder="자신과 판매할 상품에 대해 소개해 주세요!"
          for="introduce"
          id="introduce"
          value={intro}
        />
      </div>
    </div>
  );
};

export default ProfileUpdate;