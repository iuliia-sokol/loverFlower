import styled from 'styled-components';

export const ContactLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
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
  line-height: ${p => p.theme.lineHeights.secondary};
  letter-spacing: ${p => p.theme.letterSpacings.main};
  color: ${p => p.theme.colors.mainLight};
  text-transform: uppercase;
  color: ${p => p.theme.colors.mainLight};
`;
