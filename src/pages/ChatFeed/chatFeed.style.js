import styled from 'styled-components';

import AlertHighlight from '../../assets/Ellipse6.svg';

export const ChatFeedSection = styled.section`
  width: 390px;
  height: 844px;
  margin: 0 auto;
  background-color: #ffffff;
  position: relative;
`;

export const ChatFeedMain = styled.main`
  box-sizing: border-box;
  height: 772px;
`;

export const ChatFeedList = styled.ul`
  margin-top: 20px;

  > li + li {
    margin-top: 20px;
  }

  > li:first-child {
    position: relative;
    cursor: pointer;
  }

  > li:first-child::after {
    background: url(${AlertHighlight});
    content: '';
    width: 12px;
    height: 12px;
    position: absolute;
    top: 0;
    left: 0;
  }
`;

export const TabMenuHome = styled.div`
  position: absolute;
  bottom: 0;
  background-color: #fff;
`;

export const ActiveChatPopup = styled.div`
  display: ${(props) => (props.isActive ? 'initial' : 'none')};
`;
