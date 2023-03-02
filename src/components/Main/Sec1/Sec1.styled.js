import styled from 'styled-components';

export const BgWrapper = styled.div`
  width: 100%;
  position: absolute;
  overflow-y: visible;
  overflow-x: hidden;
  /* z-index: 0; */

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

export const BgTextWrapper = styled.div`
  position: relative;
  width: 150%;

  z-index: -2;

  & p:first-child {
    text-align: center;
  }

  & p:last-child {
    text-align: end;
  }
  /* right: -10%;
  top: 0; */
`;

export const SectionHeader = styled.h2`
  font-family: ${p => p.theme.fonts.headers};
  font-size: 40px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.header};
  letter-spacing: ${p => p.theme.letterSpacings.header};
  color: ${p => p.theme.colors.mainLight};
  text-transform: uppercase;
  z-index: 40;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 100px;
  }
`;
