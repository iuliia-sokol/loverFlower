import styled from 'styled-components';

export const SocialMediaLinkListItem = styled.li`
  /* &:not(:last-child) {
    margin-right: 20px;
  } */
  @media screen and (min-width: 1024px) {
    &:not(:last-child) {
      margin-bottom: ${p => (p.location === 'header' ? '12px' : '0')};
      margin-right: ${p => (p.location === 'footer' ? null : '0')};
    }
  }
`;

export const SocialMediaLink = styled.a`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;

  transform: scale(1);

  &:hover svg,
  &:focus svg {
    fill: ${p => p.theme.colors.accentCherry};
  }

  & svg {
    width: 25px;
    height: 25px;
    fill: ${p => p.theme.colors.accentGreen};
  }

  @media screen and (min-width: 1024px) {
  }
`;
