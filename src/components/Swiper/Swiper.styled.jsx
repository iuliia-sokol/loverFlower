import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';

export const SwiperStyled = styled(Swiper)`
  width: 100%;
  overflow: hidden;
  margin: 0 auto;
  margin-top: 25px;

  & > .swiper-wrapper {
    display: flex;
    margin-bottom: 20px;
    height: fit-content;
  }

  @media screen and (min-width: 768px) {
    width: 80%;
    margin-top: 85px;

    & > .swiper-wrapper {
      margin-bottom: 32px;
    }
  }

  @media screen and (min-width: 1280px) {
    & > .swiper-wrapper {
      margin-bottom: 36px;
    }
  }
`;

export const SlideStyled = styled(SwiperSlide)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-family: ${p => p.theme.fonts.main};
  font-weight: ${p => p.theme.fontWeights[1]};
  line-height: ${p => p.theme.lineHeights.secondary};
  letter-spacing: ${p => p.theme.letterSpacings.content};
  color: ${p => p.theme.colors.mainLight};
  text-transform: uppercase;

  &.swiper-slide-active > img {
    /* box-shadow: 2px 2px 60px 2px rgba(0, 0, 0, 0.25); */
  }

  & > img {
    max-width: 100%;
    height: auto;
  }

  @media screen and (min-width: 768px) {
    width: fit-content;
    height: auto;
    & > img {
      filter: grayscale(1);
    }
  }
`;

export const SwiperBtnsWrapper = styled.div`
  display: flex;
  justify-content: ${p => (p.position === 'left' ? 'flex-start' : 'flex-end')};
  gap: 32px;
`;

export const Name = styled.p`
  font-size: 20px;
`;

export const Price = styled.p`
  font-size: 14px;

  & span {
    font-weight: ${p => p.theme.fontWeights[0]};
    color: ${p => p.theme.colors.textGrey};
    text-decoration-line: line-through;
  }
`;
