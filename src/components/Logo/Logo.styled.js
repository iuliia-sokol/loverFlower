import styled from 'styled-components';

export const LogoWrapper = styled.div`
  display: flex;

  & img {
    width: ${p => (p.location === 'menu' ? '22px' : '34px')};
    transform: ${p =>
      p.location === 'menu' ? 'translateY(-7px)' : 'translateY(-17px)'};
  }
`;
