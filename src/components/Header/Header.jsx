import { Container } from 'components/Container/Container';
import { Logo } from 'components/Logo/Logo';

import {
  ContactDescrText,
  ContactLink,
  ContactsBox,
  ContactsMainText,
  HeaderContentWrapper,
  HeaderNavLink,
  HeaderWrapper,
  LinksWrapper,
  LogoWrapper,
} from './Header.styled';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Container>
        <HeaderContentWrapper>
          <LogoWrapper>
            <Logo position="header" />
          </LogoWrapper>
          <LinksWrapper>
            <li>
              <HeaderNavLink to="/catalog">Каталог</HeaderNavLink>
            </li>
            <li>
              <HeaderNavLink to="/delivery">Доставка и оплата</HeaderNavLink>
            </li>
            <li>
              <HeaderNavLink to="/about">Про нас</HeaderNavLink>
            </li>
            <li>
              <HeaderNavLink to="/contacts">Контакти</HeaderNavLink>
            </li>
            <li>
              <HeaderNavLink to="/faq">FAQ</HeaderNavLink>
            </li>
            <li>
              <HeaderNavLink to="/seach">Пошук</HeaderNavLink>
            </li>
            <li>
              <ContactsBox>
                <ContactLink href="mailto: order@loverflower.com">
                  <ContactsMainText> order@loverflower.com</ContactsMainText>
                  <ContactDescrText>
                    Доставка 24/7 за домовленістю з оператором
                  </ContactDescrText>
                </ContactLink>

                <ContactLink href="https://goo.gl/maps/UazByYpRf2JZWFVb6">
                  <ContactsMainText> пр. Д.Яворницкого, 100</ContactsMainText>
                  <ContactDescrText>
                    10:00 до 21:00 <br /> без вихідних
                  </ContactDescrText>
                </ContactLink>
              </ContactsBox>
            </li>
          </LinksWrapper>
        </HeaderContentWrapper>
      </Container>
    </HeaderWrapper>
  );
};