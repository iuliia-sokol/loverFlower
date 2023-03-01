import styled from 'styled-components';

export const SectionWrapper = styled.section`
  width: 100%;
  position: relative;
  margin: 0 auto;
  overflow-x: visible;
  height: max-content;
  background-color: #000000;
`;

export const Gradient = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  z-index: 100;
`;

export const BgImageFront = styled.img`
  position: absolute;
  z-index: 20;
  top: 0;
  bottom: 0;
  width: 100vw;
`;

export const BgImageBack = styled.img`
  z-index: 20;
  width: 100vw;
`;

export const BgImageWrapper = styled.div`
  /* position: absolute; */
  width: 100%;
  height: 100%;
  background-color: #000000;
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    overflow: visible;
    left: 5%;
    bottom: 40%;
    width: 358.9px;
    height: 293.05px;
    border-radius: 50%;
    background: #249479;
    filter: blur(125px);
    transform: rotate(41.6deg);
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    overflow: visible;
    width: 472.65px;
    height: 211.05px;
    right: 5%;
    bottom: 60%;
    background: #7d2253;
    filter: blur(125px);
    transform: rotate(-43.21deg);
  }
`;

export const HeroHeaderTop = styled.h1`
  font-family: ${p => p.theme.fonts.headers};
  font-size: 200px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: 0.8;
  letter-spacing: ${p => p.theme.letterSpacings.header};
  color: ${p => p.theme.colors.mainLight};
  text-transform: uppercase;
  text-align: center;
  z-index: 1;
  left: 50%;
  top: 8%;
  transform: translate(-50%, 0%);
  position: absolute;
`;

export const HeroHeaderBottom = styled.h1`
  font-family: ${p => p.theme.fonts.headers};
  font-size: 200px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: 0.8;
  letter-spacing: ${p => p.theme.letterSpacings.header};
  color: ${p => p.theme.colors.mainLight};
  text-transform: uppercase;
  text-align: center;
  z-index: 40;
  left: 50%;
  top: 18%;
  transform: translate(-50%, 0%);
  position: absolute;
`;

export const HeroSubHeader = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: 20px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.secondary};
  letter-spacing: ${p => p.theme.letterSpacings.banners};
  color: ${p => p.theme.colors.mainLight};
  text-align: center;
  z-index: 100;
  left: 50%;
  top: 30%;
  transform: translate(-50%, 0%);
  position: absolute;
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
