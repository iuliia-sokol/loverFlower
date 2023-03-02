import styled from 'styled-components';

export const BtnElement = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  cursor: pointer;
  background-color: transparent;
  padding: 0;
  z-index: 100;

  &:hover > svg,
  &:focus > svg {
    fill: ${p => p.theme.colors.accentPink};
  }

  & svg {
    width: 20px;
    height: auto;
    fill: ${p => p.theme.colors.accentGreen};
  }
`;
