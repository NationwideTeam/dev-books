import styled from "styled-components";
import uploadFile from "../../assets/upload-file.svg";

export const ProfileImageUpload = styled.label`
  width: 110px;
  height: 110px;
  display: block;
  margin: 30px auto;
  position: relative;

  img {
    width: 110px;
    height: 110px;
    border-radius: 100%;
    object-fit: cover;
    cursor: pointer;
  }

  &::before {
    content: "";
    display: block;
    width: 36px;
    height: 36px;
    position: absolute;
    bottom: 0;
    right: 0;
    background: url(${uploadFile});
    background-size: 100% 100%;
    z-index: 10;
    cursor: pointer;
  }
`;
