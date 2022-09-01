import styled from "styled-components";
import arrowLeftIcon from "../../assets/icon/icon-arrow-left.svg";
import moreIcon from "../../assets/icon/icon-more-vertical.svg";
import searchIcon from "../../assets/icon/icon-search.svg";

export const Nav = styled.div`
  width: 390px;
  height: 48px;
  border-bottom: 0.5px solid #dbdbdb;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  background-color: #fff;
  .uploadButton {
    margin: 0 19px 0 auto;
  }
`;

export const ArrowBtn = styled.button`
  width: 22px;
  height: 22px;
  margin-left: 16px;
  background: url(${arrowLeftIcon}) no-repeat;
`;

export const MoreBtn = styled.button`
  width: 24px;
  height: 24px;
  margin: 0 12px 0 auto;
  background: url(${moreIcon}) no-repeat;
`;

export const SearchBtn = styled.button`
  width: 24px;
  height: 24px;
  margin: 0 16px 0 auto;
  background: url(${searchIcon}) no-repeat;
`;

export const SearchInput = styled.input`
  width: 315px;
  height: 32px;
  margin: 0 19px 0 auto;
  padding: 7px 16px;
  border-radius: 32px;
  background: #f2f2f2;
  font-size: 14px;
  font-weight: 400;
  color: #c4c4c4;
  &::placeholder {
    color: #c4c4c4;
  }
  &:focus {
    outline: none;
  }
`;

export const MainTitle = styled.p`
  margin-left: 16px;
  font-size: 18px;
  font-weight: 500;
`;

export const Title = styled.p`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
`;
