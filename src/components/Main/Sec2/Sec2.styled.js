import styled from 'styled-components';

export const BgImageWrapper = styled.div`
  width: 100%;
  position: absolute;
  overflow-y: visible;
  overflow-x: hidden;
  z-index: -1;
  display: flex;
  justify-content: flex-end;

  &::before {
    content: '';
    position: absolute;
    overflow: visible;
    left: 2%;
    bottom: 0;
    width: 148.66px;
    height: 121.38px;
    filter: blur(25px);
    z-index: -1;
    background: rgba(67, 255, 210, 0.47);
    transform: rotate(32.83deg);

    @media screen and (min-width: 768px) {
      width: 814px;
      height: 661.89px;
      filter: blur(125px);
    }
  }

  &::after {
    content: '';
    position: absolute;
    overflow: visible;
    width: 130.33px;
    height: 63.54px;
    left: 40%;
    bottom: 0;
    background: #7d2253;
    filter: blur(25px);
    transform: rotate(32.83deg);
    z-index: -1;

    @media screen and (min-width: 768px) {
      width: 571.28px;
      height: 396.43px;
      filter: blur(125px);
    }

    & img {
      z-index: 1;
      width: 70%;
      align-self: flex-end;
    }
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 70%;
  flex-direction: column;

  & h2:last-of-type {
    margin-left: 40%;
  }

  & p {
    margin-left: 40%;
  }
`;

export const DescriptionText = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.content};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainLight};
`;
