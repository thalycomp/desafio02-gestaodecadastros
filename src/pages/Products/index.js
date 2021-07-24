import React, { useState } from 'react';
import { Container, Box, Form } from './styles';
import NavFooter from '../../components/Footer';

const Products = () => {
  const [{ cod, name, price }, setProduct] = useState({
    cod: '',
    name: '',
    price: '',
  });
  const handleSubmit = () => {};
  return (
    <Container>
      <Box>
        <h1>Products</h1>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            placeholder="Digite o código do produto"
            name={cod}
            value={cod}
            onChange={(e) => setProduct({ cod: e.target.value })}
          />
          <input
            type="text"
            placeholder="Digite o nome do produto"
            name={name}
            value={name}
            onChange={(e) => setProduct({ name: e.target.value })}
          />
          <input
            type="number"
            min="1"
            step="any"
            placeholder="Digite o preço do produto"
            name={price}
            value={price}
            onChange={(e) => setProduct({ price: e.target.value })}
          />
          <button type="submit">CADASTRAR</button>
        </Form>
        <NavFooter
          name1="Dashboard"
          link1=""
          name2="Clientes"
          link2="Clientes"
        />
      </Box>
    </Container>
  );
};

export default Products;
