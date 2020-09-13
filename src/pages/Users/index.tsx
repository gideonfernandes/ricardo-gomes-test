import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container } from './styles';

const Users: React.FC = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!token) {
      navigate('/signin');
    }
  }, []);

  return (
    <Container>
      <h1>Users</h1>
    </Container>
  );
};

export default Users;
