import { NavLink } from 'react-router-dom';
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
  z-index: 50;
`;

export const BgImageFront = styled.img`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 10;
  width: 100vw;
`;

export const BgImageBack = styled.img`
  z-index: -2;
  width: 100vw;
`;

export const BgImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${p => p.theme.colors.mainDark};
  z-index: -1;

  &::before {
    content: '';
    position: absolute;
    overflow: visible;
    left: 5%;
    bottom: 40%;
    width: 148.66px;
    height: 121.38px;
    border-radius: 50%;
    background: #249479;
    filter: blur(25px);
    transform: rotate(41.6deg);
    z-index: 0;

    @media screen and (min-width: 768px) {
      width: 358.9px;
      height: 293.05px;
      filter: blur(125px);
    }
  }

  &::after {
    content: '';
    position: absolute;
    overflow: visible;
    width: 130.33px;
    height: 63.54px;
    right: 5%;
    bottom: 60%;
    background: #7d2253;
    filter: blur(25px);
    transform: rotate(-43.21deg);
    z-index: 0;

    @media screen and (min-width: 768px) {
      width: 472.65px;
      height: 211.05px;
      filter: blur(125px);
    }
  }
`;

export const HeroContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: visible;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 100;

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
export const HeroHeaderTop = styled.h1`
  font-family: ${p => p.theme.fonts.headers};
  font-size: 50px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: 0.8;
  letter-spacing: ${p => p.theme.letterSpacings.header};
  color: ${p => p.theme.colors.mainLight};
  text-transform: uppercase;
  text-align: center;
  left: 50%;
  top: 10%;
  transform: translate(-50%, 0%);
  position: absolute;

  & span {
    display: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 100px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 200px;
  }
`;

export const HeroHeaderBottom = styled.h2`
  font-family: ${p => p.theme.fonts.headers};
  font-size: 50px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: 0.8;
  letter-spacing: ${p => p.theme.letterSpacings.header};
  color: ${p => p.theme.colors.mainLight};
  text-transform: uppercase;
  text-align: center;
  z-index: 1000;

  & span {
    display: none;
  }

  @media screen and (min-width: 768px) {
    font-size: 100px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 200px;
  }
`;

export const HeroSubHeader = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.secondary};
  letter-spacing: ${p => p.theme.letterSpacings.banners};
  color: ${p => p.theme.colors.mainLight};
  text-align: center;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const HeroContentWrapper = styled.div`
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translate(-50%, 0%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  z-index: 50;

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

export const LinkToCatalog = styled(NavLink)`
  padding: 16px 50px;
  text-decoration: none;
  text-transform: uppercase;
  font-family: ${p => p.theme.fonts.main};
  font-size: 12px;
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.main};
  letter-spacing: ${p => p.theme.letterSpacings.main};
  color: ${p => p.theme.colors.mainDark};
  background-color: ${p => p.theme.colors.accentGreen};

  &:hover {
    color: ${p => p.theme.colors.mainLight};
    background-color: ${p => p.theme.colors.accentCherry};
  }

  &:active {
    color: ${p => p.theme.colors.mainLight};
    background-color: ${p => p.theme.colors.accentCherry};
    box-shadow: inset 0px 0px 10px #1b000e;
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Signature = styled.p`
  z-index: 100;
  right: 7%;
  bottom: 15%;
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 30px;
  font-family: ${p => p.theme.fonts.signature};
  font-size: 40px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.signature};
  letter-spacing: ${p => p.theme.letterSpacings.main};
  color: ${p => p.theme.colors.signatureGreen};
  text-transform: capitalize;
  transform: rotate(-10.26deg);
  z-index: 100;

  & span:last-child {
    margin-left: 20%;
  }

  @media screen and (min-width: 768px) {
    font-size: 70px;
  }
`;

export const SocialMediaLinksWrapper = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    list-style: none;
    position: absolute;
    right: 5%;
    top: 220px;
    z-index: 100;
  }
`;

export const PhoneLinksWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 5%;
    top: 50%;
    transform: translateY(-50%);
    z-index: 100;
    gap: 7px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
`;

export const PhoneLink = styled.a`
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.main};
  letter-spacing: ${p => p.theme.letterSpacings.main};
  color: ${p => p.theme.colors.mainLight};
  text-transform: uppercase;
  color: ${p => p.theme.colors.accentGreen};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.accentPink};
  }
`;

export const CartBtnWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    right: 5%;
    bottom: 40%;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 100;
  }
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
