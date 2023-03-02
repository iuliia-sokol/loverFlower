import { CloseBtn } from 'components/Buttons/CloseBtn';
import { ContactLinkEl } from 'components/ContactLink/ContactLink';
import { HeaderNavLink } from 'components/Header/Header.styled';
import { Logo } from 'components/Logo/Logo';
import { SocialMediaLinks } from 'components/SocialMediaLinks/SocialMediaLinks';
import sprite from '../../images/sprite.svg';
import {
  ContactsWrapper,
  LinksWrapper,
  LogoWrapper,
  MenuHeader,
  MenuNavLink,
  MenuWrapper,
  PhoneLink,
  PolicyLink,
  PolicyLinksWrapper,
  SocialMediaLinksWrapper,
} from './Menu.styled';

export const Menu = ({ toggleMenu }) => {
  return (
    <MenuWrapper>
      <MenuHeader>
        <LogoWrapper>
          <Logo location="menu" />
        </LogoWrapper>
        <CloseBtn onClick={toggleMenu} />
      </MenuHeader>
      <LinksWrapper>
        <li>
          <MenuNavLink to="/search">
            <svg>
              <use href={sprite + `#search`} />
            </svg>
            Пошук
          </MenuNavLink>
        </li>
        <li>
          <HeaderNavLink to="/">Головна</HeaderNavLink>
        </li>
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
          <HeaderNavLink to="/corporate">Корпоративним клієнтам</HeaderNavLink>
        </li>
      </LinksWrapper>
      <ContactsWrapper>
        <ContactLinkEl
          href="mailto: order@loverflower.com"
          text="order@loverflower.com"
          descrText="Доставка 24/7 за домовленістю з оператором"
        />
        <ContactLinkEl
          href="https://goo.gl/maps/UazByYpRf2JZWFVb6"
          text="пр. Д.Яворницкого, 100"
          descrText="З 10:00 до 21:00 <br /> без вихідних"
        />
      </ContactsWrapper>
      <PolicyLinksWrapper>
        <li>
          <PolicyLink>Політика конфіденційності</PolicyLink>
        </li>
        <li>
          <PolicyLink>Обробка персональних даних</PolicyLink>
        </li>
      </PolicyLinksWrapper>
      <PhoneLink target="_blank" href="tel:0955559533">
        +38 (095) 555-99-33
      </PhoneLink>
      <SocialMediaLinksWrapper>
        <SocialMediaLinks />
      </SocialMediaLinksWrapper>
    </MenuWrapper>
  );
};
