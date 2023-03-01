import styled from 'styled-components';

export const BtnElement = styled.button`
  min-width: 180px;
  height: 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border-radius: ${p => p.theme.radii.button};
  padding: 9px 19px;
  font-family: ${p => p.theme.fonts.main};
  font-size: 14px;
  text-transform: uppercase;
  font-weight: ${p => p.theme.fontWeights[1]};
  letter-spacing: ${p => p.theme.letterSpacings.main};
  line-height: ${p => p.theme.lineHeights.main};
  border: none;
  color: ${p => p.theme.colors.accentGreen};
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  cursor: pointer;

  &:hover:not(:disabled),
  &:focus:not(:disabled) {
    color: ${p => p.theme.colors.accentPink};
  }

  &:hover:not(:disabled) svg,
  &:focus:not(:disabled) svg {
    fill: ${p => p.theme.colors.accentPink};
  }

  & svg {
    width: 16px;
    height: 16px;
    fill: ${p => p.theme.colors.accentGreen};
  }
`;
