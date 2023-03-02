import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const MenuWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80%;
  height: 100%;
  padding: 10px;
  display: flex;
  flex-direction: column;
  background-color: ${p => p.theme.colors.mainDark};
  z-index: 10000;
`;

export const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;
export const LogoWrapper = styled.div``;

export const LinksWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const MenuNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
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
