import styled from "styled-components";

export const ProductUploadWrap = styled.div`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background-color: #fff;
`;

export const ProductImgUploadWrap = styled.div`
  width: 322px;
  margin: 30px auto;
`;

export const ImgUploadText = styled.span`
  display: block;
  margin-bottom: 18px;
  font-size: 12px;
  font-weight: 400;
  color: #767676;
`;

export const ProductImg = styled.label`
  height: 204px;
  display: block;
  border: 0.5px solid #dbdbdb;
  border-radius: 10px;
  box-sizing: border-box;
  background: #f2f2f2;
  position: relative;
  cursor: pointer;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border: none;
    border-radius: 10px;
    overflow: hidden;
  }

  &::before {
    content: "";
    display: block;
    width: 36px;
    height: 36px;
    position: absolute;
    bottom: 12px;
    right: 12px;
    background: url(../../assets/img-button.svg);
    background-size: 100% 100%;
    z-index: 10;
  }
`;

export const TextInputWrap = styled.div`
  width: 322px;
  margin: 0 auto;
  margin-bottom: 16px;
`;

export const ErrorMessage = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #eb5757;
  span {
    text-align: center;
    margin: 0 auto;
    margin-bottom: 10px;
    display: block;
  }
`;

export const UploadNavbar = styled.div`
  width: 390px;
  height: 48px;
  border-bottom: 0.5px solid #dbdbdb;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  button {
    margin-right: 16px;
  }
`;
