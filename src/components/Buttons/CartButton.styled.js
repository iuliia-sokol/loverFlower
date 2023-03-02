import styled from 'styled-components';

export const BtnElement = styled.button`
  height: ${p => (p.location === 'header' ? '40px' : '60px')};
  width: ${p => (p.location === 'header' ? '40px' : '60px')};
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: ${p => p.theme.radii.button};
  padding: ${p => (p.location === 'header' ? '12px' : '15px')};
  border: none;
  background: ${p =>
    p.location === 'header' ? 'transparent' : 'rgba(0, 0, 0, 0.2)'};
  backdrop-filter: ${p => (p.location === 'header' ? 'none' : 'blur(10px)')};
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
    width: ${p => (p.location === 'header' ? '18px' : '30px')};
    height: ${p => (p.location === 'header' ? '18px' : '30px')};
    fill: ${p => p.theme.colors.mainLight};
    stroke-dasharray: 2px;
  }
`;

export const Indicator = styled.span`
  position: absolute;
  right: ${p => (p.location === 'header' ? '6px' : '8px')};
  top: ${p => (p.location === 'header' ? '6px' : '12px')};
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${p => (p.location === 'header' ? '13px' : '16px')};
  height: ${p => (p.location === 'header' ? '13px' : '16px')};
  border-radius: ${p => p.theme.radii.circle};
  color: ${p => p.theme.colors.mainDark};
  background-color: ${p => p.theme.colors.accentGreen};
  font-size: 8px;
`;
