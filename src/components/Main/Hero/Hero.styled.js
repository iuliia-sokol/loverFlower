import styled from 'styled-components';

import HeroImage1x from '../../../images/main/hero-bg-2-1x-min.png';
import HeroImage2x from '../../../images/main//hero-bg-2-2x-min.png';

export const HeroSection = styled.section`
  overflow: visible;
  width: 100%;
  height: max-content;
  min-height: 1240px;
  background-image: linear-gradient(
    180deg,
    rgba(4, 10, 10, 0) 0%,
    #040a0a 100%
  );
  background-position: bottom;
  z-index: 5;
`;

export const ImagesWrapper = styled.div`
  width: 100%;
  height: max-content;
  min-height: 1240px;
  position: absolute;
  bottom: 0;
  z-index: 0;

  background-image: linear-gradient(
    180deg,
    rgba(4, 10, 10, 0) 0%,
    #040a0a 100%
  );
  background-position: bottom;
`;

export const BgImage = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 0;
`;

export const Card = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  min-height: 1240px;
  bottom: 0;
  overflow: visible;
  z-index: -1;

  background-image: url(${HeroImage1x});
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-device-pixel-ratio: 2),
    (min-resolution: 192dpi),
    (min-resolution: 2dppx) {
    background-image: url(${HeroImage2x});
  }

  &::before {
    content: '';
    position: absolute;
    overflow: visible;
    left: 0;
    width: 358.9px;
    height: 293.05px;
    border-radius: 50%;
    background: #249479;
    filter: blur(125px);
    transform: rotate(41.6deg);
  }

  &::after {
    content: '';
    position: absolute;
    overflow: visible;
    width: 472.65px;
    height: 211.05px;
    right: 0;
    background: #7d2253;
    filter: blur(125px);
    transform: rotate(-43.21deg);
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: visible;
  z-index: 5;

  @media screen and (min-width: 420px) {
    width: 420px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1280px) {
    width: 1280px;
  }
`;

export const HeroHeader = styled.h1`
  font-family: ${p => p.theme.fonts.headers};
  font-size: 200px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: 0.8;
  letter-spacing: ${p => p.theme.letterSpacings.header};
  color: ${p => p.theme.colors.mainLight};
  text-transform: uppercase;
  text-align: center;

  & span {
    margin-top: -10%;
    z-index: 5;
  }
`;

export const HeroSubHeader = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.secondary};
  letter-spacing: ${p => p.theme.letterSpacings.banners};
  color: ${p => p.theme.colors.mainLight};
  text-align: center;
  margin-top: 20px;
  z-index: 5;
`;

/* &::after {
    content: '';
    width: 100%;
    position: absolute;
    background-image: url(${HeroImage1x});
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
    z-index: 1;

    @media (min-device-pixel-ratio: 2),
      (min-resolution: 192dpi),
      (min-resolution: 2dppx) {
      background-image: url(${HeroImage2x});
    }
  } */
