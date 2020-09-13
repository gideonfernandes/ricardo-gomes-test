import React, { useState, useEffect, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { Container } from './styles';
import Form from '../../components/Form';

import api from '../../services/api';

const SignIn= () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      navigate('/users');
    }
  }, []);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    if (email === '' || password === '') {
      return alert('Preencha todos os campos!');
    };

    const response = await api.post('/sessions', {
      email,
      password,
    });

    if (response.status === 200) {
      localStorage.setItem('token', JSON.stringify(response.data.token));
      alert('Login realizado com sucesso!');
      
      window.location.reload();
    } else {
      alert('Erro no login!');
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
        <input
          name="password"
          type="password"
          placeholder="Sua senha"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />

        <button type="button" onClick={handleSubmit}>Acessar</button>
        <span>
          <Link to="/signup">Não possui uma conta?</Link>
          <Link to="/forgot">Esqueceu sua senha?</Link>
        </span>
      </Form>
    </Container>
  );
};

export default SignIn;
