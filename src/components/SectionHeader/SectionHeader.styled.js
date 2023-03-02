import styled from 'styled-components';

export const Header = styled.h2`
  font-family: ${p => p.theme.fonts.headers};
  font-size: 40px;
  font-weight: ${p => p.theme.fontWeights[0]};
  line-height: ${p => p.theme.lineHeights.header};
  letter-spacing: ${p => p.theme.letterSpacings.banners};
  color: ${p => p.theme.colors.mainLight};
  text-transform: uppercase;
  z-index: 100;
  background-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 100px;
  }
`;
