import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import Form from '../../components/Form';

const ForgotPassword: React.FC = () => {
  const handleSubmit = () => {};

  return (
    <Container>
      <Form>
        <input
          name="email"
          type="email"
          placeholder="Seu email"
        />

        <button type="button" onClick={handleSubmit}>Solicitar senha</button>
        <span>
          <Link to="/signup">Não possui uma conta?</Link>
        </span>
      </Form>
    </Container>
  );
};

export default ForgotPassword;
