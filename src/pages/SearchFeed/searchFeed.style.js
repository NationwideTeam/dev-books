import styled from 'styled-components';

export const SearchFeedSection = styled.section`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background-color: #ffffff;
`;

export const SearchFeedMain = styled.main`
  height: 712px;
`;

export const SearchList = styled.ul`
  margin-top: 20px;

  > li {
    margin-left: auto;
    margin-right: auto;
  }

  > li + li {
    margin-top: 16px;
  }
`;
