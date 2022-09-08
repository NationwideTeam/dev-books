import styled from 'styled-components';

import symbolLogo from '../../assets/logo.svg';

export const HomeFeedSection = styled.section`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  text-align: ${(props) => (props.isvalid > 0 ? 'initial' : 'center')};
  background-color: #ffffff;
  position: relative;
`;

export const HomeTabmenu = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #fff;
`;

export const HomeFeedDataMain = styled.main`
  height: 712px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const HomeFeedMain = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 712px;
  padding: 220px 0 294px 0;
  > div button {
    margin: 20px auto 0;
  }
`;

export const HomeFeedLogo = styled.img.attrs({
  src: `${symbolLogo}`,
  alt: '데브북스 로고',
})`
  width: 100px;
  height: 100px;
  margin: 0 auto 20px;
`;

export const HomeFeedDescription = styled.strong`
  font-size: 14px;
  color: #767676;
`;
