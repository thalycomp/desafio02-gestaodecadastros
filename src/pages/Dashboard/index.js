import React from 'react';
import { Container, Box, Cards, Navigation } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Box>
        <h1>Dashboard</h1>
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
        <Navigation>
          <button>CADASTRAR CLIENTES</button>
          <button>CADASTRAR PRODUTOS</button>
        </Navigation>
      </Box>
    </Container>
  );
};

export default Dashboard;
