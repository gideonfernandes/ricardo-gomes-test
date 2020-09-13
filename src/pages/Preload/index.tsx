import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Container, Loading } from './styles';

const Preload: React.FC = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/users');
    } else {
      navigate('/signin')
    }
  }, []);

  return (
    <Container>
      <h1>Carregando...</h1>
      <Loading />
    </Container>
  );
};

export default Preload;
