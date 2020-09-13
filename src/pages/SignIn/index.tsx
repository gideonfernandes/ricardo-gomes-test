import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Form from '../../components/Form';

const SignIn= () => {
  const handleSubmit = () => {};

  return (
    <Container>
      <Form>
        <input
          name="email"
          type="email"
          placeholder="Seu email"
        />
        <input
          name="password"
          type="password"
          placeholder="Sua senha"
        />

        <button type="button" onClick={handleSubmit}>Acessar</button>
        <span>
          <Link to="/signup">Não possui uma conta?</Link>
        </span>
      </Form>
    </Container>
  );
};

export default SignIn;
