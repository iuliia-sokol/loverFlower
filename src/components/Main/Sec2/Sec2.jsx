import { Container } from 'components/Container/Container';
import { SectionHeader } from 'components/SectionHeader/SectionHeader';
import { Section } from 'components/SectionWrapper/SectionWrapper';
import { BgImageWrapper, DescriptionText, HeaderWrapper } from './Sec2.styled';
import Sec2Bg1x from '../../../images/main/main-sec2-1x-min.jpg';
import Sec2Bg2x from '../../../images/main/main-sec2-2x-min.jpg';

import { useEffect, useState } from 'react';

import { Slider } from 'components/Swiper/Swiper';
import { getPopularProducts } from 'redux/cartOperations';
import { useDispatch, useSelector } from 'react-redux';
import { selectPopularProducts } from 'redux/cartSelectors';

export const Section2 = () => {
  const [items, setItems] = useState([]);
  const dispatch = useDispatch();
  const popularItems = useSelector(selectPopularProducts);

  useEffect(() => {
    dispatch(getPopularProducts());
  }, [dispatch]);

  useEffect(() => {
    setItems(popularItems);
  }, [popularItems]);

  console.log(items);

  return (
    <Section style={{ paddingBottom: 180 }}>
      <BgImageWrapper>
        <img
          srcSet={`${Sec2Bg1x} 1x, ${Sec2Bg2x} 2x`}
          src={Sec2Bg1x}
          alt="flowers"
        />
      </BgImageWrapper>
      <Container>
        <HeaderWrapper>
          <SectionHeader text="популярні " />
          <SectionHeader text=" букети" />
          <DescriptionText>
            Найулюбленіші композиції наших клієнтів
          </DescriptionText>
        </HeaderWrapper>
        {items.length > 0 && <Slider images={items} />}
      </Container>
    </Section>
  );
};
