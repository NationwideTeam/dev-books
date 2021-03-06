import React from "react";
import Button from "../Buttons/Button";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export const ArrowButton = () => {
  const navigate = useNavigate();
  return (
    <button
      onClick={() => {
        navigate(-1);
      }}
      className="arrowButton"
    >
      <span className="a11yHidden">뒤로가기</span>
    </button>
  );
};

export const CommonNav = (props) => {
  return (
    <div className="nav">
      <ArrowButton />
      <p className="commonTitle">{props.title}</p>
    </div>
  );
};

export const BasicNav = (props) => {
  return (
    <div className="nav">
      <ArrowButton />
      <button className="moreButton" onClick={props.onClick}>
        <span className="a11yHidden">더보기</span>
      </button>
    </div>
  );
};

export const SearchNav = () => {
  return (
    <div className="nav">
      <ArrowButton />
      <input className="searchInput" type="text" placeholder="계정 검색" />
    </div>
  );
};

export const MainNav = (props) => {
  const navigate = useNavigate();
  return (
    <div className="nav">
      <p className="mainTitle">{props.title}</p>
      <button
        className="searchButton"
        onClick={() => {
          navigate("/SearchFeed");
        }}
      >
        <span className="a11yHidden">검색하기</span>
      </button>
    </div>
  );
};

export const UploadNav = (props) => {
  return (
    <div className="nav">
      <ArrowButton />
      <Button className={props.className} onClick={props.onClick}>
        {props.title}
      </Button>
    </div>
  );
};

export const ChatNav = (props) => {
  return (
    <div className="nav">
      <ArrowButton />
      <p className="chatTitle">{props.title}</p>
      <button className="moreButton" onClick={props.onClickBtn}>
        <span className="a11yHidden">더보기</span>
      </button>
    </div>
  );
};
