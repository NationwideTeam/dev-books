import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import JoinMembership from "./pages/JoinMembership/JoinMembership";
import LoginEmail from "./pages/LoginEmail/LoginEmail";
import ProductUpload from "./pages/ProductUpload/ProductUpload";
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate";
import SinglePost from "./pages/SinglePost/SinglePost";
import MyProfile from "./pages/MyProfile/MyProfile";
import YourProfile from "./pages/YourProfile/YourProfile";
import ChatFeed from "./pages/ChatFeed/ChatFeed";
import ChatRoom from "./pages/ChatRoom/ChatRoom";
import { HomeFeed, HomeFeedData } from "./pages/HomeFeed/HomeFeed";
import JoinProfile from "./pages/JoinProfile/JoinProfile";
import NotFound from "./pages/NotFound/NotFound";
import PostUpload from "./pages/PostUpload/PostUpload";
import PostUploadContent from "./pages/PostUploadContent/PostUploadContent";
import SearchFeed from "./pages/SearchFeed/SearchFeed";
import Splash from "./pages/Splash/Splash";

import "./reset.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to={"/"}>스플래쉬 / </Link>
          <Link to={"/login"}>로그인 / </Link>
          <Link to={"/joinMembership"}>회원가입 /</Link>
          <Link to={"/loginEmail"}>이메일로 로그인 / </Link>
          <Link to={"/JoinProfile"}>Join Profile /</Link>
          <Link to={"/HomeFeed"}>HomeFeed /</Link>
          <Link to={"/HomeFeedData"}>HomeFeedData /</Link>
          <Link to={"/SearchFeed"}>SearchFeed /</Link>
          <Link to={"/yourProfile"}>OO님의 프로필 /</Link>
          <Link to={"/myProfile"}> 마이 프 로필 /</Link>
          <Link to={"/profileUpdate"}> 프로필 수정 /</Link>
          <Link to={"/productUpload"}> 상품등록 /</Link>
          <Link to={"/singliPost"}> 게시물 /</Link>
          <Link to={"/PostUpload"}>PostUpload /</Link>
          <Link to={"/PostUploadContent"}>PostUploadContent /</Link>
          <Link to={"/chatFeed"}>chatFeed /</Link>
          <Link to={"/chatRoom"}>ChatRoom /</Link>
          <Link to={"/NotFound"}>NotFound /</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/login" element={<LoginPage />}></Route>
          <Route path="/loginEmail" element={<LoginEmail />}></Route>
          <Route path="/joinMembership" element={<JoinMembership />}></Route>
          <Route path="/productUpload" element={<ProductUpload />}></Route>
          <Route path="/profileUpdate" element={<ProfileUpdate />}></Route>
          <Route path="/singliPost" element={<SinglePost />}></Route>
          <Route path="/myProfile" element={<MyProfile />}></Route>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
