import {
  HeroHeaderTop,
  HeroHeaderBottom,
  HeroSubHeader,
  SectionWrapper,
  BgImageWrapper,
  BgImageFront,
  BgImageBack,
  Gradient,
} from './Hero.styled';

import HeroBgImage1x from '../../../images/main/hero-bg-2-1x-min.png';
import HeroBgImage2x from '../../../images/main/hero-bg-2-2x-min.png';
import HeroFront1x from '../../../images/main/hero-bg-front-1x-min.png';
import HeroFront2x from '../../../images/main/hero-bg-front-2x-min.png';
import BgGradient from '../../../images/main/dark-gradient-min.png';

export const Hero = () => {
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
      </BgImageWrapper>

      <HeroHeaderTop>lover</HeroHeaderTop>

      <HeroHeaderBottom>flower</HeroHeaderBottom>
      <HeroSubHeader>
        Творимо для тих, хто цінує свіжість та витонченість квітів
      </HeroSubHeader>
      <Gradient src={BgGradient} alt="gradient" />
    </SectionWrapper>
  );
};
