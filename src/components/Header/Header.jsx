import { BurgerBtn } from 'components/Buttons/BurgerBtn';
import { CartBtn } from 'components/Buttons/CartButton';
import { Logo } from 'components/Logo/Logo';
import { Menu } from 'components/Menu/Menu';
import { useMediaQuery } from 'hooks/useMedia';
import { useState } from 'react';
import sprite from '../../images/sprite.svg';

import {
  ContactDescrText,
  ContactLink,
  ContactsBox,
  ContactsMainText,
  HeaderContainer,
  HeaderContentWrapper,
  HeaderNavLink,
  HeaderWrapper,
  LinksWrapper,
  LogoWrapper,
} from './Header.styled';

export const Header = () => {
  const isRowBased = useMediaQuery('(min-width: 768px)');

  const [showMenu, setShowMenu] = useState(false);

  const handleBurgerBtnClick = () => {
    setShowMenu(!showMenu);
  };
  return (
    <>
      <HeaderWrapper>
        <HeaderContainer>
          <HeaderContentWrapper>
            {!isRowBased && (
              <>
                <BurgerBtn onClick={handleBurgerBtnClick} />
                <CartBtn location="header" />
              </>
            )}
            {isRowBased && (
              <>
                <LogoWrapper>
                  <Logo position="header" />
                </LogoWrapper>
                <LinksWrapper>
                  <li>
                    <HeaderNavLink to="/catalog">Каталог</HeaderNavLink>
                  </li>
                  <li>
                    <HeaderNavLink to="/delivery">
                      Доставка и оплата
                    </HeaderNavLink>
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
                    <HeaderNavLink to="/seach">
                      <svg>
                        <use href={sprite + `#search`} />
                      </svg>
                      Пошук
                    </HeaderNavLink>
                  </li>
                  <li>
                    <ContactsBox>
                      <ContactLink
                        target="_blank"
                        href="mailto: order@loverflower.com"
                      >
                        <ContactsMainText>
                          order@loverflower.com
                        </ContactsMainText>
                        <ContactDescrText>
                          Доставка 24/7 за домовленістю з оператором
                        </ContactDescrText>
                      </ContactLink>

                      <ContactLink
                        target="_blank"
                        href="https://goo.gl/maps/UazByYpRf2JZWFVb6"
                      >
                        <ContactsMainText>
                          пр. Д.Яворницкого, 100
                        </ContactsMainText>
                        <ContactDescrText>
                          10:00 до 21:00 <br /> без вихідних
                        </ContactDescrText>
                      </ContactLink>
                    </ContactsBox>
                  </li>
                </LinksWrapper>
              </>
            )}
          </HeaderContentWrapper>
        </HeaderContainer>
      </HeaderWrapper>
      {showMenu && <Menu toggleMenu={handleBurgerBtnClick} />}
      {/* <Menu  /> */}
    </>
  );
};
