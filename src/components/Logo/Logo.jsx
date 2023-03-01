import { NavLink } from 'react-router-dom';

import { LogoWrapper } from './Logo.styled';
import logo from '../../images/logo-min.png';

export const Logo = ({ position }) => {
  return (
    <NavLink to="/">
      <LogoWrapper position={position}>
        <img alt="logo" src={logo} />
      </LogoWrapper>
    </NavLink>
  );
};
