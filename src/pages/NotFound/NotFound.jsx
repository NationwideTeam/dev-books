import React from "react";
import Topbar from "../../components/Topbar/Topbar";
import Logo404 from "../../assets/logo-404.svg";
import Button from "../../components/Buttons/Button";
import { useNavigate } from "react-router-dom";

import "./notFound.css";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <section className="NotFoundFeed">
      <Topbar />
      <main className="NotFoundMain">
        <img className="NotFoundLogo" src={Logo404} alt="데브북스 404 logo" />
        <strong className="NotFoundDescription">
          이미지를 찾을 수 없습니다. :&#40;
        </strong>
        <div
          onClick={() => {
            navigate(-1);
          }}
        >
          <Button className={"lg button"} children={"이전 페이지"} />
        </div>
      </main>
    </section>
  );
};

export default NotFound;
