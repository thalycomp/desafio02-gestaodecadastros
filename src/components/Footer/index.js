import React from 'react';
import { Container, Navigation } from './styles';
import { Link } from 'react-router-dom';

const Footer = ({ name1, link1, name2, link2 }) => {
  return (
    <Container>
      <Navigation>
        <Link to={`/${link1}`}>{name1}</Link>
        <Link to={`/${link2}`}>{name2}</Link>
      </Navigation>
      <p>&copy; Cadastro de Produtos e Clientes | by Thalyta Alencar</p>{' '}
    </Container>
  );
};

export default Footer;
