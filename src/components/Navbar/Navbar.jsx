import React from "react";
import Button from "../buttons/Button";
import "./navbar.css";

export const BasicNav = () => {
  return (
    <div className="nav">
      <button className="arrowButton">
        <span className="a11yHidden">뒤로가기</span>
      </button>
      <button className="moreButton">
        <span className="a11yHidden">더보기</span>
      </button>
    </div>
  );
};

export const SearchNav = () => {
  return (
    <div className="nav">
      <button className="arrowButton">
        <span className="a11yHidden">뒤로가기</span>
      </button>
      <input className="searchInput" type="text" value="계정 검색" />
    </div>
  );
};

export const MainNav = (props) => {
  return (
    <div className="nav">
      <p className="mainTitle">{props.title}</p>
      <button className="searchButton">
        <span className="a11yHidden">검색하기</span>
      </button>
    </div>
  );
};

export const UploadNav = () => {
  return (
    <div className="nav">
      <button className="arrowButton">
        <span className="a11yHidden">뒤로가기</span>
      </button>
      <Button className="button ms disabled uploadButton">저장</Button>
    </div>
  );
};

export const ChatNav = () => {
  return (
    <div className="nav">
      <button className="arrowButton">
        <span className="a11yHidden">뒤로가기</span>
      </button>
      <p className="chatTitle">애월읍 위니브 감귤농장</p>
      <button className="moreButton">
        <span className="a11yHidden">더보기</span>
      </button>
    </div>
  );
};
