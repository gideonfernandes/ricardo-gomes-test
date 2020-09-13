import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Container } from './styles';
import Form from '../../components/Form';

import api from '../../services/api';

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/users');
    }
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (email === '') {
      return alert('Preencha o campo email!');
    };

    const response = await api.post('/forgot/password', {
      email,
    });

    if (response.status === 200) {
      localStorage.setItem('token', JSON.stringify(response.data.token));
      alert('O link de recuperação de senha foi enviado para seu email!');
      
      window.location.reload();
    } else {
      alert('Erro na requisição!');
    };
  };

  return (
    <Container>
      <Form>
        <input
          name="email"
          type="email"
          placeholder="Seu email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
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
