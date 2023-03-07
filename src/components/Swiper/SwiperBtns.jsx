import { useSwiper } from 'swiper/react';

import sprite from '../../images/sprite.svg';

import { SwiperBtn } from './SwiperBtns.styled';

export const SwiperButtonNext = ({ background, refLink }) => {
  const swiper = useSwiper();
  return (
    <SwiperBtn
      direction="left"
      ref={refLink}
      type="button"
      onClick={() => swiper.slideNext()}
    >
      <svg>
        <use href={sprite + `#arrow`} />
      </svg>
    </SwiperBtn>
  );
};

export const SwiperButtonPrev = ({ background, refLink }) => {
  const swiper = useSwiper();
  return (
    <SwiperBtn
      direction="right"
      ref={refLink}
      background={background}
      type="button"
      onClick={() => swiper.slidePrev()}
    >
      <svg>
        <use href={sprite + `#arrow`} />
      </svg>
    </SwiperBtn>
  );
};
