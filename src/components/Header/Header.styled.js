import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  z-index: 100;
  width: 100%;
  position: absolute;
`;

export const HeaderContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 69px;
`;
export const LogoWrapper = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const HeaderContainer = styled.div`
  width: 100%;
  padding: 20px 16px 0px;
  margin: 0 auto;
  box-sizing: border-box;
  overflow: visible;
  display: flex;
  align-items: center;

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

export const LinksWrapper = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    min-width: 10vw;
    gap: 20px;
    display: flex;
    justify-content: space-between;
    z-index: 10;
    flex-grow: 1;
  }
`;

export const HeaderNavLink = styled(NavLink)`
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.main};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainLight};

  text-transform: uppercase;
  text-decoration: none;

  &:hover,
  &focus {
    color: ${p => p.theme.colors.accentGreen};
  }
`;

export const ContactsBox = styled.address`
  display: flex;
  flex-direction: column;
  font-style: normal;
  gap: 26px;
`;

export const ContactLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  align-items: flex-end;
`;

export const ContactsMainText = styled.span`
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.main};
  letter-spacing: ${p => p.theme.letterSpacings.main};
  color: ${p => p.theme.colors.mainLight};
  text-transform: uppercase;
  color: ${p => p.theme.colors.accentGreen};
`;

export const ContactDescrText = styled.span`
  font-family: ${p => p.theme.fonts.main};
  font-size: 10px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.main};
  letter-spacing: ${p => p.theme.letterSpacings.main};
  color: ${p => p.theme.colors.mainLight};
  text-transform: uppercase;
  color: ${p => p.theme.colors.mainLight};
`;
