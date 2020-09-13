import React from 'react';

import { Container } from './styles';

interface FormProps {
  name?: string;
  email: string;
  password?: string;
}

const Form: React.FC = ({children}) => {
  const handleOnSubmit = () => {};

  return (
    <Container>
      {children}
    </Container>
  );
};

export default Form;
