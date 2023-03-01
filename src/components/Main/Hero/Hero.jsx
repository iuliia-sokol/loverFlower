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
// import HeroBgImage2x from '../../../images/main/hero-bg-2-2x-min.png';
import HeroFront1x from '../../../images/main/hero-bg-front-1x-min.png';
import BgGradient from '../../../images/main/dark-gradient-min.png';

export const Hero = () => {
  return (
    <SectionWrapper>
      <BgImageBack src={HeroBgImage1x} alt="flowers"></BgImageBack>
      <BgImageWrapper>
        <BgImageFront src={HeroFront1x} alt="flowers"></BgImageFront>
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
