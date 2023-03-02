import styled from 'styled-components';

export const Text = styled.p`
  font-family: ${p => p.theme.fonts.main};
  font-size: 200px;
  font-weight: ${p => p.theme.fontWeights[4]};
  line-height: ${p => p.theme.lineHeights.secondary};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.bgText};
  text-transform: uppercase;
`;
