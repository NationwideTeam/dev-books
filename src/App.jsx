import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import JoinMembership from "./pages/JoinMembership/JoinMembership";
import LoginEmail from "./pages/LoginEmail/LoginEmail";
import ProductUpload from "./pages/ProductUpload/ProductUpload";
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate";
import SinglePost from "./pages/SinglePost/SinglePost";
import MyProfile from "./pages/MyProfile/MyProfile";
import Followers from "./pages/Followers/Followers";
import Followings from "./pages/Followings/Followings";
import YourProfile from "./pages/YourProfile/YourProfile";
import ChatFeed from "./pages/ChatFeed/ChatFeed";
import ChatRoom from "./pages/ChatRoom/ChatRoom";
import { HomeFeed, HomeFeedData } from "./pages/HomeFeed/HomeFeed";
import JoinProfile from "./pages/JoinProfile/JoinProfile";
import NotFound from "./pages/NotFound/NotFound";
import PostUpload from "./pages/PostUpload/PostUpload";
import PostUploadContent from "./pages/PostUploadContent/PostUploadContent";
import SearchFeed from "./pages/SearchFeed/SearchFeed";
import ProductEdit from "./pages/ProductEdit/ProductEdit";
import PostEdit from "./pages/PostEdit/PostEdit";

import "./reset.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to={"/login"}>로그인 / </Link>
          <Link to={"/joinMembership"}>회원가입 /</Link>
          <Link to={"/loginEmail"}>이메일로 로그인 / </Link>
          <Link to={"/JoinProfile"}>프로필 설정 /</Link>
          <Link to={"/HomeFeed"}>홈피드 /</Link>
          <Link to={"/HomeFeedData"}>홈피드 데이터 /</Link>
          <Link to={"/SearchFeed"}>계정 검색 /</Link>
          <Link to={"/yourProfile"}>OO님의 프로필 /</Link>
          <Link to={"/myProfile"}> 마이 프로필 /</Link>
          <Link to={"/followers"}> 팔로워 /</Link>
          <Link to={"/followings"}> 팔로잉 /</Link>
          <Link to={"/profileUpdate"}> 프로필 수정 /</Link>
          <Link to={"/productUpload"}> 상품등록 /</Link>
          <Link to={"/singlePost"}> 포스트 /</Link>
          <Link to={"/PostUpload"}>포스트 업로드 /</Link>
          <Link to={"/PostUploadContent"}>포스트 업로드_내용 /</Link>
          <Link to={"/chatFeed"}>채팅 피드 /</Link>
          <Link to={"/chatRoom"}>채팅방 /</Link>
          <Link to={"/NotFound"}>404페이지 /</Link>
        </nav>
        <Routes>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/loginEmail" element={<LoginEmail />}></Route>
          <Route path="/joinMembership" element={<JoinMembership />}></Route>
          <Route path="/productUpload" element={<ProductUpload />}></Route>
          <Route path="/profileUpdate" element={<ProfileUpdate />}></Route>
          <Route path="/singlePost" element={<SinglePost />}></Route>
          <Route path="/myProfile" element={<MyProfile />}></Route>
          <Route path="/followers" element={<Followers />}></Route>
          <Route path="/followings" element={<Followings />}></Route>
          <Route path="/yourProfile" element={<YourProfile />}></Route>
          <Route path="/chatFeed" element={<ChatFeed />}></Route>
          <Route path="/chatRoom" element={<ChatRoom />}></Route>
          <Route path="/HomeFeed" element={<HomeFeed />}></Route>
          <Route path="/HomeFeedData" element={<HomeFeedData />}></Route>
          <Route path="/JoinProfile" element={<JoinProfile />}></Route>
          <Route path="/NotFound" element={<NotFound />}></Route>
          <Route path="/PostUpload" element={<PostUpload />}></Route>

          <Route
            path="/PostUploadContent"
            element={<PostUploadContent />}
          ></Route>
          <Route path="/SearchFeed" element={<SearchFeed />}></Route>
          <Route path="/ProductEdit" element={<ProductEdit />}></Route>
          <Route path="/PostEdit" element={<PostEdit />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
