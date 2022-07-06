import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import LoginPage from "./pages/Login/Login";
import JoinMembership from "./pages/JoinMembership/JoinMembership";
import LoginEmail from "./pages/LoginEmail/LoginEmail";
import "./reset.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <nav>
          <Link to={"/"}>로그인 / </Link>
          <Link to={"/loginEmail"}>이메일로 로그인 / </Link>
          <Link to={"/joinMembership"}>회원가입 </Link>
        </nav>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/joinMembership" element={<JoinMembership />}></Route>
          <Route path="/loginEmail" element={<LoginEmail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
