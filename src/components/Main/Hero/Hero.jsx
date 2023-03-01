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
} from './Hero.styled';

import HeroBgImage1x from '../../../images/main/hero-bg-2-1x-min.png';
import HeroBgImage2x from '../../../images/main/hero-bg-2-2x-min.png';
import HeroFront1x from '../../../images/main/hero-bg-front-1x-min.png';
import HeroFront2x from '../../../images/main/hero-bg-front-2x-min.png';
import BgGradient from '../../../images/main/dark-gradient-min.png';
import { SocialMediaLinks } from 'components/SocialMediaLinks/SocialMediaLinks';

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

      <HeroHeaderTop>
        lover <span>flower</span>
      </HeroHeaderTop>
      <HeroContentWrapper>
        <HeroHeaderBottom>
          <span>lover</span>flower
        </HeroHeaderBottom>
        <HeroSubHeader>
          Творимо для тих, хто цінує свіжість та витонченість квітів
        </HeroSubHeader>
        <LinkToCatalog to="/catalog">Дивитись каталог</LinkToCatalog>
      </HeroContentWrapper>
      <SocialMediaLinksWrapper>
        <SocialMediaLinks location="header" />
      </SocialMediaLinksWrapper>

      <Signature>
        <span>Lover</span>
        <span>Flower</span>
      </Signature>
      <Gradient src={BgGradient} alt="gradient" />
    </SectionWrapper>
  );
};
