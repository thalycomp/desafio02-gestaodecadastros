import React from 'react';
import { Container, Box, Cards } from './styles';
import NavFooter from '../../components/Footer';

const Dashboard = () => {
  return (
    <Container>
      <Box>
        <h2>Dashboard</h2>
        <Cards>
          <div>
            <span>0</span>
            <p>CLIENTES</p>
          </div>
          <div>
            <span>3</span>
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
