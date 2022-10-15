import styled from 'styled-components';

import Logo404 from '../../assets/logo-404.svg';

export const NotFoundFeed = styled.section`
  width: 390px;
  margin: 0 auto;
  text-align: center;
  background-color: #ffffff;
`;

export const NotFoundMain = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 820px;
  text-align: center;
  padding: 200px 0 344px 0;

  > div button {
    margin: 30px auto 0;
  }
`;

export const NotFoundLogo = styled.img.attrs({
  src: `${Logo404}`,
  alt: '데브북스 404 logo',
})`
  width: 158px;
  height: 158px;
  margin: 0 auto 30px;
`;

export const NotFoundDescription = styled.strong`
  font-size: 14px;
  color: #767676;
`;
