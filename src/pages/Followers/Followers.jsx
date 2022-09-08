import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Topbar from "../../components/Topbar/Topbar";
import TabMenu from "../../components/TabMenu/TabMenu";
import { CommonNav } from "../../components/Navbar/Navbar";
import { UserFollow } from "../../components/User/User";
import { Follow, FollowUser, Tabmenu } from "./followers.style";

export const Followers = () => {
  const location = useLocation();
  const [followers, setFollowers] = useState([]);

  useEffect(() => {
    followerList();
  }, []);

  // 나를 팔로우한 사용자 목록 확인
  const followerList = async () => {
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
      const resUserFollower = await fetch(
        `${url}/profile/${accountName}/follower`,
        init
      );
      const resUserFollowerJson = await resUserFollower.json();
      setFollowers(resUserFollowerJson);
    } catch (err) {
      console.error("error", err);
    }
  };

  return (
    <Follow>
      <Topbar />
      <CommonNav title="Followers" />
      <FollowUser>
        {followers.map((item, index) => {
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

export default Followers;
