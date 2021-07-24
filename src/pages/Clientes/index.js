import React, { useState } from 'react';
import { Container, Box } from './styles';
import NavFooter from '../../components/Footer';

const Clientes = () => {
  const [name, setName] = useState('');
  const [adress, setAdress] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.length === 0 || adress === 0 || city === 0) {
      alert('Preencha o formulário corretamente!');
      return;
    }

    let client = {
      name: name,
      adress: adress,
      city: city,
    };

    let clients = [];

    let clientsAlreadyExists = JSON.parse(localStorage.getItem('clientes:'));

    if (clientsAlreadyExists) {
      clients.push(...clientsAlreadyExists);
    }

    clients.push(client);

    localStorage.setItem('clientes:', JSON.stringify(clients));

    alert('Cadastrado com sucesso!');

    clearFields();
  };

  const clearFields = () => {
    setName('');
    setCity('');
    setAdress('');
  };

  return (
    <Container>
      <Box>
        <h1>Clientes</h1>
        <form onSubmit={(e) => handleSubmit(e)}>
          <input
            type="text"
            placeholder="Digite o nome do cliente"
            name={name}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Digite o endereço do cliente"
            name={adress}
            value={adress}
            onChange={(e) => setAdress(e.target.value)}
          />
          <input
            type="text"
            placeholder="Digite a cidade do cliente"
            name={city}
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button type="submit">CADASTRAR</button>
        </form>
        <NavFooter
          name1="Dashboard"
          link1=""
          name2="Produtos"
          link2="produtos"
        />
      </Box>
    </Container>
  );
};

export default Clientes;
