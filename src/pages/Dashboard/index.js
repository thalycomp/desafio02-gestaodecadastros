import React, { useEffect, useState } from 'react';
import { Container, Box, Cards } from './styles';
import NavFooter from '../../components/Footer';

const Dashboard = () => {
  const [products, setProducts] = useState(0);
  const [clients, setClients] = useState(0);

  useEffect(() => {
    let clientsAlreadyExists = JSON.parse(localStorage.getItem('clientes:'));
    let productsAlreadyExists = JSON.parse(localStorage.getItem('produtos:'));

    if (clientsAlreadyExists) {
      setClients(clientsAlreadyExists.length);
    }

    if (productsAlreadyExists) {
      setProducts(productsAlreadyExists.length);
    }
  }, []);

  return (
    <Container>
      <Box>
        <h2>Hiring Coders - Desafio 02</h2>
        <Cards>
          <div>
            <span>{clients}</span>
            <p>CLIENTES</p>
          </div>
          <div>
            <span>{products}</span>
            <p>PRODUTOS</p>
          </div>
        </Cards>
        <NavFooter
          name1="Clientes"
          link1="clientes"
          name2="Produtos"
          link2="produtos"
        />
      </Box>
    </Container>
  );
};

export default Dashboard;
