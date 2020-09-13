import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Container, AppLogo, Menu, LogoutIcon } from './styles';

const Header: React.FC = () => {
  const [user, setUser] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      setUser(true);
    };
  }, []);

  const UserMenu: React.FC = () => {
    return (
      <ul>
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
    localStorage.removeItem('token');

    window.location.reload();
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