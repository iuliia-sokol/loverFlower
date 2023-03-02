import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 75%;
  height: 100vh;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.mainDark};
  z-index: 10000;
  overflow-y: auto;

  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar-track {
    background-color: ${p => p.theme.colors.secondaryDark};
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${p => p.theme.colors.signatureGreen};
  }
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
`;
export const LogoWrapper = styled.div``;

export const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;

  &::after {
    content: '';
    width: 100px;
    height: 1px;
    background-color: ${p => p.theme.colors.inputEmpty};
  }
`;

export const MenuNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 10px;
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

  & svg {
    width: 18px;
    height: 18px;
    fill: currentColor;
  }
`;

export const ContactsWrapper = styled.address`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
  margin-top: 20px;
`;

export const PolicyLinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

export const PolicyLink = styled.a`
  font-family: ${p => p.theme.fonts.main};
  font-size: 10px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.secondary};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.inputEmpty};
  text-transform: uppercase;
`;

export const PhoneLink = styled.a`
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.main};
  letter-spacing: ${p => p.theme.letterSpacings.main};
  color: ${p => p.theme.colors.mainLight};
  text-decoration: underline;
  text-transform: uppercase;
  margin-top: 10px;
`;

export const SocialMediaLinksWrapper = styled.ul`
  display: flex;
  gap: 20px;
  margin-top: 20px;
`;
