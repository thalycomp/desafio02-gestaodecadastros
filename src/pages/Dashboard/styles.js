import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Box = styled.main`
  width: 90%;
  max-width: 900px;
  border-radius: 4px;
  background: #fff;
  padding: 5px;
  border: 1px solid #e1e4e8;
  text-align: center;
`;

export const Cards = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;

  div {
    background-color: #999;
    margin: 5px;
    padding: 50px;
    border-radius: 4px;

    color: #fff;
    font-weight: bold;
    font-size: 20px;

    p {
      margin-top: 10px;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex: 1;
  }
`;

export const Navigation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ddd;
  padding: 20px;

  button {
    padding: 14px;
    border-radius: 4px;
    border: none;
    background: #2166d6;
    color: #fff;
    margin: 2px;
    cursor: pointer;
    flex: 1;
  }
`;
