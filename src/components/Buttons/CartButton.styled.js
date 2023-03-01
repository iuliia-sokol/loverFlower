import styled from 'styled-components';

export const BtnElement = styled.button`
  height: 60px;
  width: 60px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.button};
  padding: 15px;
  border: none;
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
    width: 30px;
    height: 30px;
    fill: ${p => p.theme.colors.mainLight};
    stroke-dasharray: 2px;
  }
`;

export const Indicator = styled.span`
  position: absolute;
  right: 8px;
  top: 12px;
  width: 16px;
  height: 16px;
  border-radius: ${p => p.theme.radii.circle};
  color: ${p => p.theme.colors.mainDark};
  background-color: ${p => p.theme.colors.accentGreen};
`;
