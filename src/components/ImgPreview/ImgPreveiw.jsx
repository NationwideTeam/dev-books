import React from 'react';
import deleteButton from '../../assets/icon/icon-delete.svg';

const ImgPreview = (props) => {
  const postUrl = props.postUrl;

  return (
    <>
      {postUrl.map((file, index) => {
        return (
          <div className="postImgList" key={index}>
            <button type="button">
              <img className="deleteButton" src={deleteButton} alt="" />
            </button>
            <img className="postImg" src={file} alt="포스트 이미지 프리뷰" />
          </div>
        );
      })}
    </>
  );
};

export default ImgPreview;
