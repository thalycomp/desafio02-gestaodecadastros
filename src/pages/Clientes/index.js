import React, { useState } from 'react';
import { Container, Box, Navigation, Form } from './styles';
import { Link } from 'react-router-dom';

const Clientes = () => {
  const [{ name, adress, city }, setClient] = useState({
    name: '',
    adress: '',
    city: '',
  });
  const handleSubmit = () => {};
  return (
    <Container>
      <Box>
        <h1>Clientes</h1>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            placeholder="Digite o nome do cliente"
            name={name}
            value={name}
            onChange={(e) => setClient({ name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Digite o endereço do cliente"
            name={adress}
            value={adress}
            onChange={(e) => setClient({ adress: e.target.value })}
          />
          <input
            type="text"
            placeholder="Digite a cidade do cliente"
            name={city}
            value={city}
            onChange={(e) => setClient({ city: e.target.value })}
          />
          <button type="submit">CADASTRAR</button>
        </Form>
        <Navigation>
          <Link to="/clientes">DASHBOARD</Link>
          <Link to="/produtos">CADASTRAR PRODUTOS</Link>
        </Navigation>
      </Box>
    </Container>
  );
};

export default Clientes;
