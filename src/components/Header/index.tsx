import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { Container, AppLogo, Menu, LogoutIcon } from './styles';

const Header: React.FC = () => {
  const [user, setUser] = useState(null);

  const UserMenu: React.FC = () => {
    return (
      <ul>
        <li>
          <Link to="/users">Ver usuários</Link>
        </li>
        <li>
          <button onClick={handleLogout}>
            <LogoutIcon />
          </button>
        </li>
      </ul>
    );
  };
  const GuestMenu: React.FC = () => {
    return (
      <ul>
        <li>
          <Link to="/signup">Criar conta</Link>
        </li>
        <li>
        <Link to="/signin">Fazer login</Link>
        </li>
      </ul>
    );
  };

  const handleLogout = () => {
    
  };

  return (
    <Container>
      <AppLogo />
      <Menu>
        {user ? <UserMenu /> : <GuestMenu />}
      </Menu>
    </Container>
  );
};

export default Header;