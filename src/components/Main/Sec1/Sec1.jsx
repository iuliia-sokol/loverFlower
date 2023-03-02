import { BgText } from 'components/BgText/BgText';
import { Container } from 'components/Container/Container';
import { Section } from 'components/SectionWrapper/SectionWrapper';
import { BgTextWrapper, BgWrapper, SectionHeader } from './Sec1.styled';

export const Section1 = () => {
  return (
    <Section>
      <BgWrapper>
        <BgTextWrapper>
          <BgText text="букети" />
          <BgText text="квіти" />
          <BgText text="подарунки" />
        </BgTextWrapper>
      </BgWrapper>
      <Container>
        <SectionHeader>каталог</SectionHeader>
      </Container>
    </Section>
  );
};
