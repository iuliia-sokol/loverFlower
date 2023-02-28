import {
  BgImage,
  Card,
  HeroContainer,
  HeroHeader,
  HeroSection,
  HeroSubHeader,
  ImagesWrapper,
} from './Hero.styled';

// import HeroBgImage1x from '../../../images/main/hero-bg-2-1x-min.png';
// import HeroBgImage2x from '../../../images/main/hero-bg-2-2x-min.png';
import HeroImage1x from '../../../images/main/hero-bg-1x-min.png';
// import HeroImage2x from '../../../images/main/hero-bg-2x-min.png';

export const Hero = () => {
  return (
    <HeroSection>
      <Card />
      <ImagesWrapper>
        <BgImage src={HeroImage1x} alt="flowers" />
      </ImagesWrapper>

      <HeroContainer>
        <HeroHeader>
          lover <span>flower</span>
        </HeroHeader>
        <HeroSubHeader>
          Творимо для тих, хто цінує свіжість та витонченість квітів
        </HeroSubHeader>
      </HeroContainer>
    </HeroSection>
  );
};
