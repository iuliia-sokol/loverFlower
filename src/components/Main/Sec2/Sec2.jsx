import { Container } from 'components/Container/Container';
import { SectionHeader } from 'components/SectionHeader/SectionHeader';
import { Section } from 'components/SectionWrapper/SectionWrapper';
import { BgImageWrapper, DescriptionText, HeaderWrapper } from './Sec2.styled';
import Sec2Bg1x from '../../../images/main/main-sec2-1x-min.jpg';
import Sec2Bg2x from '../../../images/main/main-sec2-2x-min.jpg';

export const Section2 = () => {
  return (
    <Section style={{ paddingBottom: 180 }}>
      <BgImageWrapper>
        <img src={Sec2Bg1x} alt="flowers" />
      </BgImageWrapper>
      <Container>
        <HeaderWrapper>
          <SectionHeader text="популярні " />
          <SectionHeader text=" букети" />
          <DescriptionText>
            Найулюбленіші композиції наших клієнтів
          </DescriptionText>
        </HeaderWrapper>
      </Container>
    </Section>
  );
};
