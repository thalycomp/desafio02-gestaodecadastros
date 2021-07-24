import React, { useState } from 'react';
import { Container, Box } from './styles';
import NavFooter from '../../components/Footer';

const Products = () => {
  const [cod, setCod] = useState('');
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length === 0 || price.length === 0 || cod.length === 0) {
      alert('Preencha o formulário corretamente!');
      return;
    }

    let product = {
      cod: cod,
      name: name,
      price: price,
    };

    let products = [];

    let productsAlreadyExists = JSON.parse(localStorage.getItem('produtos:'));

    if (productsAlreadyExists) {
      products.push(...productsAlreadyExists);
    }

    products.push(product);

    localStorage.setItem('produtos:', JSON.stringify(products));

    alert('Produto com sucesso!');

    clearFields();
  };

  const clearFields = () => {
    setName('');
    setCod('');
    setPrice('');
  };

  return (
    <Container>
      <Box>
        <h2>PRODUTOS</h2>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Digite o código do produto"
            name={cod}
            value={cod}
            onChange={(e) => setCod(e.target.value)}
          />
          <input
            type="text"
            placeholder="Digite o nome do produto"
            name={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="number"
            min="1"
            step="any"
            placeholder="Digite o preço do produto"
            name={price}
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button type="submit">CADASTRAR</button>
        </form>
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
