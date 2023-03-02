import { BgText } from 'components/BgText/BgText';
import { Container } from 'components/Container/Container';
import { Section } from 'components/SectionWrapper/SectionWrapper';
import { BgTextWrapper, BgWrapper, Gradient } from './Sec1.styled';
import BgGradient from '../../../images/main/dark-gradient-min.png';
import { SectionHeader } from 'components/SectionHeader/SectionHeader';

export const Section1 = () => {
  return (
    <Section>
      <Gradient src={BgGradient} alt="gradient" />
      <BgWrapper>
        <BgTextWrapper>
          <BgText text="букети" />
          <BgText text="квіти" />
          <BgText text="подарунки" />
        </BgTextWrapper>
      </BgWrapper>
      <Container>
        <SectionHeader text="каталог" />
      </Container>
    </Section>
  );
};
