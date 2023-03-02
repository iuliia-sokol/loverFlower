import styled from 'styled-components';

export const BgWrapper = styled.div`
  width: 100%;
  position: absolute;
  overflow-y: visible;
  overflow-x: hidden;
  z-index: -2;

  &::before {
    content: '';
    position: absolute;
    overflow: visible;
    left: -5%;
    bottom: 50%;
    width: 148.66px;
    height: 121.38px;
    border-radius: 50%;
    background: #7d2253;
    filter: blur(25px);
    transform: rotate(32.83deg);
    z-index: 0;

    @media screen and (min-width: 768px) {
      width: 707.54px;
      height: 236.87px;
      filter: blur(125px);
    }
  }

  &::after {
    content: '';
    position: absolute;
    overflow: visible;
    width: 130.33px;
    height: 63.54px;
    right: -10%;
    bottom: 40%;
    background: #249479;
    filter: blur(25px);
    transform: rotate(32.83deg);
    z-index: 0;

    @media screen and (min-width: 768px) {
      width: 879.44px;
      height: 211.05px;
      filter: blur(125px);
    }
  }
`;

export const Gradient = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 50;
  transform: rotate(180deg);
  z-index: -1;
`;

export const BgTextWrapper = styled.div`
  position: relative;
  width: 150%;
  z-index: -3;

  & p:first-child {
    text-align: center;
  }

  & p:last-child {
    text-align: end;
  }
`;
