import { CloseBtn } from 'components/Buttons/CloseBtn';
import { HeaderNavLink } from 'components/Header/Header.styled';
import { Logo } from 'components/Logo/Logo';
import sprite from '../../images/sprite.svg';
import {
  LinksWrapper,
  LogoWrapper,
  MenuHeader,
  MenuNavLink,
  MenuWrapper,
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
    </MenuWrapper>
  );
};
