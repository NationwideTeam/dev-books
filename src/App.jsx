import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import JoinMembership from "./pages/JoinMembership/JoinMembership";
import LoginEmail from "./pages/LoginEmail/LoginEmail";
import ProductUpload from "./pages/ProductUpload/ProductUpload";
import ProfileUpdate from "./pages/ProfileUpdate/ProfileUpdate";
import SinglePost from "./pages/SinglePost/SinglePost";
import "./reset.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to={"/"}>로그인 / </Link>
          <Link to={"/loginEmail"}>이메일로 로그인 / </Link>
          <Link to={"/joinMembership"}>회원가입 /</Link>
          <Link to={"/productUpload"}> 상품등록 /</Link>
          <Link to={"/profileUpdate"}> 프로필 수정 /</Link>
          <Link to={"/singliPost"}> 게시물 /</Link>
        </nav>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/loginEmail" element={<LoginEmail />}></Route>
          <Route path="/joinMembership" element={<JoinMembership />}></Route>
          <Route path="/productUpload" element={<ProductUpload />}></Route>
          <Route path="/profileUpdate" element={<ProfileUpdate />}></Route>
          <Route path="/singliPost" element={<SinglePost />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
