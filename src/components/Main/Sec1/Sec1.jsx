import { BgText } from 'components/BgText/BgText';
import { Container } from 'components/Container/Container';
import { Section } from 'components/SectionWrapper/SectionWrapper';
import {
  BgTextWrapper,
  BgWrapper,
  CatalogLink,
  Gradient,
  TextBlock,
  TextBlockHeader,
  TextBlocksWrapper,
} from './Sec1.styled';
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
          <BgText text="додатково" />
        </BgTextWrapper>
      </BgWrapper>
      <Container>
        <SectionHeader text="каталог" />
        <TextBlocksWrapper>
          <TextBlock>
            <span>
              У нас найбільший вибір квітів, букетів, листівок та подарунків. Ми
              завжди допоможемо вам підібрати букет для вашої події, наш
              менеджер вас проконсультує та допоможе визначитися з вибором.
            </span>
            <span>Ознайомтеся з нашими розділами каталогу</span>
          </TextBlock>
          <TextBlock>
            <TextBlockHeader>готові букети з сухоцвітів</TextBlockHeader>
            <ul>
              <li>букети</li>
              <li>для інтер'єру</li>
              <li>композиції</li>
            </ul>
            <CatalogLink>дивитись каталог</CatalogLink>
          </TextBlock>
          <TextBlock>
            <TextBlockHeader>квіти</TextBlockHeader>
            <ul>
              <li>збірні букети</li>
              <li>монобукети</li>
              <li>композиції із квітів</li>
              <li>троянди</li>
              <li>весільні композиції</li>
            </ul>
            <CatalogLink>дивитись каталог</CatalogLink>
          </TextBlock>
          <TextBlock>
            <TextBlockHeader>додатково</TextBlockHeader>
            <ul>
              <li>кульки</li>
              <li>іграшки</li>
              <li>листівки</li>
              <li>обгортка</li>
            </ul>

            <CatalogLink>дивитись каталог</CatalogLink>
          </TextBlock>
        </TextBlocksWrapper>
      </Container>
    </Section>
  );
};
