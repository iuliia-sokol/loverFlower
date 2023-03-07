import { useRef } from 'react';
import { Navigation, Autoplay } from 'swiper';

import 'swiper/css';
import 'swiper/css/autoplay';
import { BASE_URL } from 'utils/consts/consts';

import {
  SwiperStyled,
  SlideStyled,
  SwiperBtnsWrapper,
  Name,
  Price,
} from './Swiper.styled';

import { SwiperButtonPrev, SwiperButtonNext } from './SwiperBtns';

export const Slider = ({
  images,
  background = 'dark',
  size = 'standart',
  position = 'right',
  reverse = false,
  // slidesPerView = 'auto',
  spaceBetween = 0,
}) => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  return (
    <SwiperStyled
      size={size}
      modules={[Navigation, Autoplay]}
      navigation={{
        prevEl: navigationPrevRef.current,
        nextEl: navigationNextRef.current,
      }}
      onBeforeInit={swiper => {
        swiper.params.navigation.prevEl = navigationPrevRef.current;
        swiper.params.navigation.nextEl = navigationNextRef.current;
      }}
      autoplay={{ reverseDirection: reverse }}
      grabCursor={true}
      centeredSlides={true}
      // slidesPerView={'auto'}
      spaceBetween={30}
      initialSlide={1}
      breakpoints={{
        320: {
          // spaceBetween: spaceBetween[0],
          slidesPerView: 'auto',
        },
        768: {
          // spaceBetween: spaceBetween[1],
          slidesPerView: 3,
        },
        1280: {
          // spaceBetween: spaceBetween[2],
          // slidesPerView: slidesPerView[1],
        },
      }}
      rewind={true}
    >
      {images.map(img => {
        return (
          <SlideStyled key={img._id}>
            <img
              src={`${BASE_URL}/${img.avatarURL}`}
              alt={img.name}
              loading="lazy"
            />
            <Name>{img.name}</Name>
            <Price>
              {img.price} UAH
              {img.oldPrice && <span>img.oldPrice</span>}
            </Price>
            <button>В кошик</button>
          </SlideStyled>
        );
      })}
      <SwiperBtnsWrapper position={position}>
        <SwiperButtonPrev
          refLink={navigationPrevRef}
          background={background}
        ></SwiperButtonPrev>
        <SwiperButtonNext
          refLink={navigationNextRef}
          background={background}
        ></SwiperButtonNext>
      </SwiperBtnsWrapper>
    </SwiperStyled>
  );
};
