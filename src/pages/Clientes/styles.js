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
  padding: 10px;
  border: 1px solid #e1e4e8;
  text-align: center;

  h2 {
    padding-top: 20px;
    color: #2166d6;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;

    input {
      width: 100%;
      padding: 15px;
      background: #eee;
      font-size: 14px;
      border: 0;
      margin-bottom: 10px;
    }

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
  }
`;
