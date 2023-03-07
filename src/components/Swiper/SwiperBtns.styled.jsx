import styled from 'styled-components';

export const SwiperBtn = styled.button`
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  & svg {
    transform: rotate(${p => (p.direction === 'right' ? '180deg' : '0deg')});
    fill: ${p => p.theme.colors.accentGreen};
  }

  &:hover,
  &:focus {
    & svg {
      fill: ${p => p.theme.colors.accentPink};
    }
  }
`;
