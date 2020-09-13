import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Form from '../../components/Form';

const SignUp: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <Container>
      <Form>
        <input
          name="name"
          type="text"
          placeholder="Sua nome"
        />
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
        <input
          name="password2"
          type="password"
          placeholder="Confirme sua senha"
        />

        <button type="button" onClick={handleSubmit}>Criar conta</button>
        <span>
          <Link to="/signin">Já possui uma conta?</Link>
          <Link to="/forgot">Esqueceu sua senha?</Link>
        </span>
      </Form>
    </Container>
  );
};

export default SignUp;
