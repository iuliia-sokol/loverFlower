import {
  HeroHeaderTop,
  HeroHeaderBottom,
  HeroSubHeader,
  SectionWrapper,
  BgImageWrapper,
  BgImageFront,
  BgImageBack,
  Gradient,
  LinkToCatalog,
  Signature,
  HeroContentWrapper,
  SocialMediaLinksWrapper,
  PhoneLinksWrapper,
  PhoneLink,
  CartBtnWrapper,
  HeroContainer,
} from './Hero.styled';
import sprite from '../../../images/sprite.svg';

import HeroBgImage1x from '../../../images/main/hero-bg-2-1x-min.png';
import HeroBgImage2x from '../../../images/main/hero-bg-2-2x-min.png';
import HeroFront1x from '../../../images/main/hero-bg-front-1x-min.png';
import HeroFront2x from '../../../images/main/hero-bg-front-2x-min.png';
import BgGradient from '../../../images/main/dark-gradient-min.png';
import { SocialMediaLinks } from 'components/SocialMediaLinks/SocialMediaLinks';
import { CallBackBtn } from 'components/Buttons/CallBackButton';
import { CartBtn } from 'components/Buttons/CartButton';
import { useMediaQuery } from 'hooks/useMedia';

export const Hero = () => {
  const isRowBased = useMediaQuery('(min-width: 768px)');

  return (
    <SectionWrapper>
      <BgImageBack
        srcSet={`${HeroBgImage1x} 1x, ${HeroBgImage2x} 2x`}
        src={HeroBgImage1x}
        alt="flowers"
      ></BgImageBack>
      <BgImageWrapper>
        <BgImageFront
          srcSet={`${HeroFront1x} 1x, ${HeroFront2x} 2x`}
          src={HeroFront1x}
          alt="flowers"
        ></BgImageFront>
        <HeroHeaderTop>
          lover <span>flower</span>
        </HeroHeaderTop>
        {!isRowBased && (
          <HeroHeaderBottom>
            <span>lover</span>flower
          </HeroHeaderBottom>
        )}
      </BgImageWrapper>
      <HeroContainer>
        <HeroContentWrapper>
          {isRowBased && (
            <HeroHeaderBottom>
              <span>lover</span>flower
            </HeroHeaderBottom>
          )}
          <HeroSubHeader>
            Творимо для тих, хто цінує свіжість та витонченість квітів
          </HeroSubHeader>
          <LinkToCatalog to="/catalog">Дивитись каталог</LinkToCatalog>
          <PhoneLinksWrapper>
            <PhoneLink target="_blank" href="tel:0955559533">
              +38 (095) 555-99-33
            </PhoneLink>
            <CallBackBtn
              icon={
                <svg>
                  <use href={sprite + `#call`} />
                </svg>
              }
              text="Замовити дзвінок"
            />
          </PhoneLinksWrapper>
          <CartBtnWrapper>
            <CartBtn />
          </CartBtnWrapper>
        </HeroContentWrapper>
        <SocialMediaLinksWrapper>
          <SocialMediaLinks location="header" />
        </SocialMediaLinksWrapper>

        <Signature>
          <span>Lover</span>
          <span>Flower</span>
        </Signature>
      </HeroContainer>
      <Gradient src={BgGradient} alt="gradient" />
    </SectionWrapper>
  );
};
