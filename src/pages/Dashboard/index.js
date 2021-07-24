import React from 'react';
import { Container, Box, Cards, Navigation } from './styles';
import { Link } from 'react-router-dom';

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
          <Link to="/clientes">CADASTRAR CLIENTES</Link>
          <Link to="/produtos">CADASTRAR PRODUTOS</Link>
        </Navigation>
      </Box>
    </Container>
  );
};

export default Dashboard;
