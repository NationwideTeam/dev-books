import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Topbar from "../../components/Topbar/Topbar";
import TabMenu from "../../components/TabMenu/TabMenu";
import { CommonNav } from "../../components/Navbar/Navbar";
import { UserFollow } from "../../components/User/User";
import { Follow, FollowUser, Tabmenu } from "../Followers/followers.style";

export const Followings = () => {
  const location = useLocation();
  const [followings, setFollowings] = useState([]);

  useEffect(() => {
    followingList();
  }, []);

  // 내가 팔로잉한 사용자 목록 확인
  const followingList = async () => {
    const url = "https://mandarin.api.weniv.co.kr";
    const accountName = location.search.split("=")[1];
    const token = localStorage.getItem("token");

    const init = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
    };

    try {
      const resUserFollowing = await fetch(
        `${url}/profile/${accountName}/following`,
        init
      );
      const resUserFollowingJson = await resUserFollowing.json();
      setFollowings(resUserFollowingJson);
    } catch (err) {
      console.error("error", err);
    }
  };

  return (
    <Follow>
      <Topbar />
      <CommonNav title="Followings" />
      <FollowUser>
        {followings.map((item, index) => {
          return (
            <UserFollow
              key={index}
              picture={item.image}
              name={item.username}
              id={item.accountname}
              button={item.isfollow}
            />
          );
        })}
      </FollowUser>
      <Tabmenu>
        <TabMenu />
      </Tabmenu>
    </Follow>
  );
};

export default Followings;
