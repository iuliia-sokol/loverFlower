import {
  BgImage,
  Card,
  HeroHeader,
  HeroSection,
  HeroSubHeader,
  BgImageMain,
  ImagesWrapper,
  SectionWrapper,
} from './Hero.styled';

import HeroBgImage1x from '../../../images/main/hero-bg-2-1x-min.png';
// import HeroBgImage2x from '../../../images/main/hero-bg-2-2x-min.png';
import HeroImage1x from '../../../images/main/hero-bg-1x-min.png';
// import HeroImage2x from '../../../images/main/hero-bg-2x-min.png';
import HeroFront1x from '../../../images/main/hero-bg-front-1x-min.png';
import BgGradient from '../../../images/main/dark-gradient-min.png';

export const Hero = () => {
  return (
    <SectionWrapper>
      <img src={BgGradient} alt="gradient" />
      <Card>
        <BgImageMain src={HeroBgImage1x} alt="flowers" />
      </Card>
      <HeroSection>
        <HeroHeader>lover</HeroHeader>
        <ImagesWrapper>
          <BgImage src={HeroFront1x} alt="flowers" />
        </ImagesWrapper>
        <HeroHeader>flower</HeroHeader>

        <HeroSubHeader>
          Творимо для тих, хто цінує свіжість та витонченість квітів
        </HeroSubHeader>
      </HeroSection>
    </SectionWrapper>
  );
};
