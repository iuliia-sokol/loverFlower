import styled from 'styled-components';

export const BtnElement = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;

  & svg {
    width: 18px;
    height: 18px;
    fill: ${p => p.theme.colors.accentGreen};
  }
`;
