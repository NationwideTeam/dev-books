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
import HomeFeed from "./pages/HomeFeed/HomeFeed";
import JoinProfile from "./pages/JoinProfile/JoinProfile";
import NotFound from "./pages/NotFound/NotFound";
import PostUpload from "./pages/PostUpload/PostUpload";
import SearchFeed from "./pages/SearchFeed/SearchFeed";
import ProductEdit from "./pages/ProductEdit/ProductEdit";
import PostEdit from "./pages/PostEdit/PostEdit";

import "./reset.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
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
          <Route path="/JoinProfile" element={<JoinProfile />}></Route>
          <Route path="/PostUpload" element={<PostUpload />}></Route>
          <Route path="/SearchFeed" element={<SearchFeed />}></Route>
          <Route path="/ProductEdit" element={<ProductEdit />}></Route>
          <Route path="/PostEdit" element={<PostEdit />}></Route>
          <Route path="/*" element={<NotFound />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
